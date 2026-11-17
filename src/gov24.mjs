// data/gov24.json(정부24 공공서비스 전체)을 화면용 정책 형식으로 바꾸고, 사는 지역·청년 나이로 1차로 걸러요.
// 지원조건 코드(JA…)는 공공데이터포털 명세 기준이에요.
import fs from "node:fs/promises";

const FILE = new URL("../data/gov24.json", import.meta.url);
const SIDO_FULL = { 서울: "서울특별시", 경기: "경기도", 인천: "인천광역시" };
const NATIONAL = new Set(["중앙행정기관", "공공기관"]);
let cache = null;

export async function loadGov24() {
  const st = await fs.stat(FILE).catch(() => null);
  if (!st) return null;
  if (!cache || cache.mtime !== st.mtimeMs) cache = { mtime: st.mtimeMs, data: JSON.parse(await fs.readFile(FILE, "utf8")) };
  return cache.data;
}

const Y = (c, k) => c?.[k] === "Y";
const clean = (s) => String(s ?? "").replace(/\r/g, "").trim();

// 신청기한 문장 → { always, applyStart, applyEnd }
export function parsePeriod(text, type) {
  const t = clean(text);
  if (type === "상시신청" || /^상시/.test(t)) return { always: true, applyStart: null, applyEnd: null };
  const d = [...t.matchAll(/(20\d{2})\s*[.\-년/]\s*(\d{1,2})\s*[.\-월/]\s*(\d{1,2})/g)]
    .map((m) => `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`);
  if (d.length >= 2) return { always: false, applyStart: d[0], applyEnd: d[1] };
  if (d.length === 1 && /~\s*$|부터/.test(t.split(d[0].slice(0, 4))[1] || "")) return { always: false, applyStart: d[0], applyEnd: null };
  return { always: false, applyStart: null, applyEnd: null };
}

function category(s) {
  const n = s["서비스명"], f = s["서비스분야"], k = s["지원유형"] || "";
  if (/적금|통장|계좌|저축/.test(n)) return "예적금";
  if (/대출|융자|자금\s*지원.*이자|론$/.test(n) || /융자/.test(k)) return "대출";
  if (/장려금|세액|소득세|감면|공제|환급/.test(n) && /감면|현금/.test(k) && !/주택|임대/.test(n)) return "세금";
  if (/교통|버스|택시|패스|지하철|K-패스/.test(n)) return "교통";
  if (/월세|전세|임대|주거|주택|이사|보증금|중개/.test(n)) return "주거";
  return ({ "주거·자립": "주거", "고용·창업": "일자리", "보육·교육": "교육", "보건·의료": "건강·마음", "문화·환경": "문화",
    "임신·출산": "임신·출산·육아", "농림축산어업": "농림어업" })[f] || "생활·복지";
}

// 지원조건 코드 → 화면 판정 조건
function criteriaOf(s) {
  const c = s.조건, cr = [];
  const a = c?.JA0110, b = c?.JA0111;
  if (a != null && b != null && !(a <= 0 && b >= 99)) cr.push({ type: "age", min: a, max: b >= 99 ? 120 : b });

  // 소득(중위소득 구간): 일부 구간만 해당이면 상한 %
  const inc = [["JA0201", 50], ["JA0202", 75], ["JA0203", 100], ["JA0204", 200], ["JA0205", null]];
  const on = inc.filter(([k]) => Y(c, k));
  if (on.length && on.length < inc.length && !Y(c, "JA0205")) cr.push({ type: "median", max: Math.max(...on.map((x) => x[1])) });

  // 대상 특성: 해당사항없음(JA0322)이 아니면 허용 상태 + 특수 대상
  if (c && !Y(c, "JA0322")) {
    const st = [], grp = [];
    if (Y(c, "JA0320")) st.push("학생");
    if (Y(c, "JA0326")) st.push("재직");
    if (Y(c, "JA0327")) st.push("구직 중", "비자발 퇴사");
    if (Y(c, "JA1101") || Y(c, "JA1102") || Y(c, "JA1103") || /소상공인/.test(s["사용자구분"] || "")) st.push("자영업");
    const G = { JA0301: "예비부모·난임", JA0302: "임산부", JA0303: "출산·입양 가정", JA0313: "농업인", JA0314: "어업인", JA0315: "축산업인", JA0316: "임업인",
      JA0317: "초등학생", JA0318: "중학생", JA0319: "고등학생", JA0328: "장애인", JA0329: "국가보훈대상자", JA0330: "질병·질환자" };
    for (const [k, v] of Object.entries(G)) if (Y(c, k)) grp.push(v);
    if (st.length || grp.length) cr.push({ type: "status", in: [...new Set(st)], orGroups: grp,
      label: [...new Set(st.map((x) => (x === "비자발 퇴사" ? null : x === "구직 중" ? "구직자·실업자" : x === "재직" ? "근로자·직장인" : x === "학생" ? "대학(원)생" : "자영업·소상공인")).filter(Boolean)), ...grp].join(" · ") });
  }
  // 가구 특성: 해당사항없음(JA0410)이 아니면
  if (c && !Y(c, "JA0410")) {
    const H = { JA0401: "다문화가족", JA0402: "북한이탈주민", JA0403: "한부모·조손가정", JA0404: "1인가구", JA0411: "다자녀가구", JA0412: "무주택세대", JA0413: "신규전입", JA0414: "확대가족" };
    const hs = Object.entries(H).filter(([k]) => Y(c, k)).map(([, v]) => v);
    if (hs.length === 1 && hs[0] === "무주택세대") cr.push({ type: "noHouse" });
    else if (hs.length === 1 && hs[0] === "1인가구") cr.push({ type: "household", eq: 1, label: "1인 가구" });
    else if (hs.length) cr.push({ type: "groups", groups: hs, label: hs.join(" · ") });
  }
  // 성별 한정
  if (c && Y(c, "JA0101") !== Y(c, "JA0102")) cr.push({ type: "target", label: Y(c, "JA0101") ? "남성" : "여성" });
  const youthText = /청년/.test(s["서비스명"] + (s["지원대상"] || ""));
  // 기업·단체 업종 코드가 있으면 사업자용 → '자영업'일 때만
  if (["JA2101", "JA2102", "JA2103", "JA2201", "JA2202", "JA2203", "JA2299", "JA1201", "JA1202", "JA1299"].some((k) => Y(c, k)))
    cr.push({ type: "status", in: ["자영업"], orGroups: [], label: "사업자 (기업·단체·소상공인)" });
  // 농림축산어업 분야는 청년 대상이 아니면 농·어·축산·임업인 대상
  if (s["서비스분야"] === "농림축산어업" && !youthText)
    cr.push({ type: "groups", groups: ["농업인", "어업인", "축산업인", "임업인"], label: "농·어·축산·임업인" });
  return cr;
}

function toPolicy(s) {
  const p = parsePeriod(s["신청기한"], s["신청기한유형"]);
  const agency = clean(s["소관기관명"]);
  const local = !NATIONAL.has(s["소관기관유형"]);
  return {
    id: `g24-${s["서비스ID"]}`, src: "정부24", name: clean(s["서비스명"]), org: agency + (s["부서명"] ? ` ${clean(s["부서명"])}` : ""),
    category: category(s), region: local ? agency : "전국",
    ...p, periodText: clean(s["신청기한"]),
    youth: /청년/.test(s["서비스명"] + (s["지원대상"] || "")),
    benefit: clean(s["서비스목적요약"]) || clean(s["지원내용"]).slice(0, 120),
    criteria: criteriaOf(s),
    raw: { 지원대상: clean(s["지원대상"]), 선정기준: clean(s["선정기준"]), 지원내용: clean(s["지원내용"]) },
    howTo: clean(s["신청방법"]) ? [clean(s["신청방법"])] : [],
    contact: clean(s["전화문의"]) || clean(s["접수기관"]),
    url: s["상세조회URL"], source: s["상세조회URL"],
  };
}

const SEOUL_GU = ["강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
const AMBIGUOUS = new Set(["중구", "강서구"]); // 부산·대구 등에도 있는 구 이름 → '서울'이 함께 있어야 인정
const SHORT = { 서울: "서울", 경기: "경기", 인천: "인천" };

// 사는 곳과 맞는 사업인지: 중앙·공공기관은 모두, 지자체·산하기관은 내 시도(+내 구)만
export function regionOk(s, sido, gu) {
  if (NATIONAL.has(s["소관기관유형"])) return true;
  const agency = clean(s["소관기관명"]);
  const full = SIDO_FULL[sido];
  if (!full) return false;
  if (s["소관기관유형"] === "광역시도" || s["소관기관유형"] === "시군구") {
    if (!agency.startsWith(full)) return false;
    const rest = agency.slice(full.length).trim();
    return !rest || (sido === "서울" && rest === gu);
  }
  // 지방공기업·출연기관·교육청: 이름으로 판단
  const name = agency.replace(/\s/g, "");
  const hasSido = name.includes(SHORT[sido]);
  if (sido !== "서울") return hasSido && !/[가-힣]+(시|군|구)(시설|도시|문화|복지|인재|산업)/.test(name.replace(full.replace(/\s/g, ""), ""));
  const g = SEOUL_GU.find((x) => name.includes(x) && (!AMBIGUOUS.has(x) || hasSido));
  if (g) return g === gu;
  return hasSido;
}

// 정적 사이트용: 서비스 하나가 어느 지역 파일에 들어가는지 (전국 / 시도 / 서울 자치구)
export const SIDO_CODE = { 서울: "seoul", 경기: "gyeonggi", 인천: "incheon" };
export function scopeOf(s) {
  if (NATIONAL.has(s["소관기관유형"])) return "nat";
  for (const sido of Object.keys(SIDO_CODE)) {
    if (sido === "서울") {
      if (regionOk(s, "서울", null)) return SIDO_CODE[sido];
      const g = SEOUL_GU.findIndex((x) => regionOk(s, "서울", x));
      if (g >= 0) return `seoul-gu-${String(g).padStart(2, "0")}`;
    } else if (regionOk(s, sido, null)) return SIDO_CODE[sido];
  }
  return null;
}
export const SEOUL_GU_LIST = SEOUL_GU;

// 사람(개인·가구·소상공인) 대상이고 청년 나이(19~39)와 겹치는지
export function youthCandidate(s) {
  if (!/개인|가구|소상공인/.test(s["사용자구분"] || "")) return false;
  const a = s.조건?.JA0110, b = s.조건?.JA0111;
  return !(a != null && b != null && (a > 39 || b < 19));
}
export { toPolicy };

// 지역(광역·시군구)과 청년 나이(19~39와 겹침)로 1차 거르기. 법인·시설 전용 서비스는 빼요.
export async function gov24For({ sido, gu } = {}) {
  const data = await loadGov24();
  if (!data) return null;
  const items = [];
  for (const s of data.services) {
    if (!/개인|가구|소상공인/.test(s["사용자구분"] || "")) continue;
    const a = s.조건?.JA0110, b = s.조건?.JA0111;
    if (a != null && b != null && (a > 39 || b < 19)) continue;
    if (!regionOk(s, sido, gu)) continue;
    items.push(toPolicy(s));
  }
  return { fetchedAt: data.fetchedAt, total: data.count, items };
}

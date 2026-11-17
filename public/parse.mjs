// 올린 서류(PDF·캡처)에서 읽은 글자로 나이·주소·가구원·소득·건강보험 정보를 대략 뽑아요.
// 자동 판독이라 틀릴 수 있어서, 화면에서 사용자가 바로 고칠 수 있게 칩·입력칸에만 채워요.
const SIDO = [["서울특별시","서울"],["부산광역시","부산"],["대구광역시","대구"],["인천광역시","인천"],["광주광역시","광주"],["대전광역시","대전"],["울산광역시","울산"],["세종특별자치시","세종"],["경기도","경기"],["강원특별자치도","강원"],["충청북도","충북"],["충청남도","충남"],["전북특별자치도","전북"],["전라남도","전남"],["경상북도","경북"],["경상남도","경남"],["제주특별자치도","제주"]];
const toNum = (s) => Number(String(s).replace(/[^\d]/g, ""));
const RRN = /(\d{2})(\d{2})(\d{2})\s*-\s*([1-8])[\d*•●xX]{6}/g;

// 주민등록번호 뒷자리는 판독 전에 지워요. 생년월일과 성별 숫자 1개만 남겨요.
export function mask(text) {
  return text.replace(/(\d{6})\s*-\s*([1-8])\d{6}/g, "$1-$2******");
}

export function docType(t) {
  const s = t.replace(/\s+/g, "");
  if (/주민등록표|주민등록등본|세대주성명|세대구성/.test(s)) return "resident";
  if (/소득금액증명/.test(s)) return "income";
  if (/자격득실|건강보험자격|직장가입자|지역가입자/.test(s)) return "nhis";
  return null;
}

export function ageFrom(birth, today = new Date()) {
  if (!birth) return null;
  const [y, m, d] = birth.split("-").map(Number);
  let a = today.getFullYear() - y;
  if (today.getMonth() + 1 < m || (today.getMonth() + 1 === m && today.getDate() < d)) a--;
  return a;
}
const birthOf = (m) => `${(["1","2","5","6"].includes(m[4]) ? 1900 : 2000) + Number(m[1])}-${m[2]}-${m[3]}`;

function fromResident(t) {
  const out = {};
  const rrns = [...t.matchAll(RRN)];
  if (rrns.length) {
    out.birth = birthOf(rrns[0]); // 본인(세대원 표 첫 줄 또는 발급 대상자)
    out.age = ageFrom(out.birth);
    out.household = new Set(rrns.map((m) => m[0].slice(0, 8))).size;
  }
  const lines = t.split("\n").map((l) => l.trim());
  for (const l of lines) {
    const hit = SIDO.find(([full, short]) => l.includes(full) || new RegExp(`(^|\\s)${short}(시|\\s)`).test(l));
    if (!hit) continue;
    out.sido = hit[1];
    const rest = l.slice(l.indexOf(hit[0]) >= 0 ? l.indexOf(hit[0]) + hit[0].length : l.indexOf(hit[1]) + hit[1].length);
    const g = rest.match(/([가-힣]+(?:구|군|시))(?:\s|$)/);
    if (g) out.sigungu = g[1];
    break;
  }
  return out;
}

function fromIncome(t) {
  const out = {};
  out.incomeType = /사업소득/.test(t) && /근로소득/.test(t) ? "근로+사업" : /사업소득/.test(t) ? "사업" : /근로소득/.test(t) ? "근로" : null;
  // 귀속연도가 적힌 줄 중 가장 최근 연도의 가장 큰 금액(총급여·소득금액 후보)
  const nowY = new Date().getFullYear();
  let best = null;
  for (const l of t.split("\n")) {
    const y = (l.match(/(20\d{2})\s*년?/) || [])[1];
    const amts = (l.match(/\d{1,3}(?:,\d{3}){2,}/g) || []).map(toNum).filter((n) => n >= 1_000_000);
    if (!y || !amts.length || Number(y) > nowY) continue;
    const c = { year: Number(y), amount: Math.max(...amts) };
    if (!best || c.year > best.year || (c.year === best.year && c.amount > best.amount)) best = c;
  }
  if (!best) { // 표가 한 줄로 안 읽힌 경우: 전체에서 가장 큰 금액
    const amts = (t.match(/\d{1,3}(?:,\d{3}){2,}/g) || []).map(toNum).filter((n) => n >= 1_000_000);
    const ys = (t.match(/20\d{2}/g) || []).map(Number).filter((y) => y <= nowY);
    if (amts.length) best = { amount: Math.max(...amts), year: ys.length ? Math.max(...ys) : null };
  }
  if (best) { out.annualIncome = best.amount; out.incomeYear = best.year; }
  return out;
}

function fromNhis(t) {
  const m = [...t.matchAll(/(직장가입자|지역가입자|피부양자)/g)].map((x) => x[1]);
  return m.length ? { nhisType: m[m.length - 1].replace("가입자", "") } : {};
}

// 한 파일의 글자 → { type, fields }
export function extract(rawText) {
  const t = mask(rawText);
  const type = docType(t);
  const fields = type === "resident" ? fromResident(t) : type === "income" ? fromIncome(t)
    : type === "nhis" ? fromNhis(t) : { ...fromResident(t), ...fromIncome(t), ...fromNhis(t) };
  for (const k of Object.keys(fields)) if (fields[k] == null) delete fields[k];
  return { type, fields };
}

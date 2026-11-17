// 공공데이터포털 「행정안전부_대한민국 공공서비스(혜택) 정보」 API에서 전체 서비스(약 1만 건)와 지원조건을 받아
// data/gov24.json 으로 저장해요. 키는 .env 의 DATA_GO_KR_KEY 를 써요.
// 실행: npm run sync  (서버도 시작할 때 7일 지난 데이터면 자동으로 다시 받아요)
import fs from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const ROOT = new URL("../", import.meta.url);
const OUT = new URL("data/gov24.json", ROOT);
const BASE = "https://api.odcloud.kr/api/gov24/v3";
const PER = 1000;

export function loadKey() {
  if (process.env.DATA_GO_KR_KEY) return process.env.DATA_GO_KR_KEY;
  const env = new URL(".env", ROOT);
  if (!existsSync(env)) return null;
  const m = readFileSync(env, "utf8").match(/^DATA_GO_KR_KEY=(.+)$/m);
  return m ? m[1].trim() : null;
}

async function getAll(op, key, log) {
  const rows = [];
  for (let page = 1; ; page++) {
    const url = `${BASE}/${op}?page=${page}&perPage=${PER}&returnType=JSON&serviceKey=${encodeURIComponent(key)}`;
    let j;
    for (let t = 0; t < 3; t++) {
      try {
        const r = await fetch(url);
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        j = await r.json(); break;
      } catch (e) { if (t === 2) throw new Error(`${op} ${page}쪽 받기 실패: ${e.message}`); await new Promise((r) => setTimeout(r, 1500)); }
    }
    rows.push(...(j.data || []));
    log?.(`${op}: ${rows.length}/${j.totalCount}`);
    if (rows.length >= j.totalCount || !(j.data || []).length) break;
  }
  return rows;
}

export async function sync(log = console.log) {
  const key = loadKey();
  if (!key) throw new Error(".env 에 DATA_GO_KR_KEY 가 없어요.");
  const [list, conds] = await Promise.all([getAll("serviceList", key, log), getAll("supportConditions", key, log)]);
  const byId = new Map(conds.map((c) => [c["서비스ID"], c]));
  const services = list.map((s) => ({ ...s, 조건: byId.get(s["서비스ID"]) || null }));
  const d = new Date();
  const fetchedAt = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  await fs.mkdir(new URL("data/", ROOT), { recursive: true });
  await fs.writeFile(OUT, JSON.stringify({ fetchedAt, count: services.length, services }), "utf8");
  log(`저장했어요: ${services.length}건 (${fetchedAt})`);
  return { fetchedAt, count: services.length };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) sync().catch((e) => { console.error(e.message); process.exit(1); });

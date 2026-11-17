// 정부24 공공서비스 목록을 지역별 작은 파일로 나눠 public/data/ 에 만들어요 (웹페이지·로컬 공용).
// - DATA_GO_KR_KEY(환경변수 또는 .env)가 있으면 먼저 최신 목록을 받아요(GitHub Actions에서는 Secrets로 전달).
// - 키가 없으면 이미 받아 둔 data/gov24.json 으로 만들어요.
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { sync, loadKey } from "../src/sync.mjs";
import { loadGov24, scopeOf, youthCandidate, toPolicy } from "../src/gov24.mjs";

const OUT = new URL("../public/data/", import.meta.url);
const CUT = 1500; // 원문이 너무 길면 잘라요(전체는 정부24 상세 페이지에서)

export async function buildData({ fetch: doFetch = !!loadKey(), log = console.log } = {}) {
  if (doFetch) await sync(log);
  const data = await loadGov24();
  if (!data) throw new Error("data/gov24.json 이 없어요. 키를 넣고 다시 실행해 주세요.");
  const files = {};
  for (const s of data.services) {
    if (!youthCandidate(s)) continue;
    const scope = scopeOf(s);
    if (!scope) continue;
    const p = toPolicy(s);
    for (const k of Object.keys(p.raw)) if (p.raw[k].length > CUT) p.raw[k] = p.raw[k].slice(0, CUT) + " …(정부24에서 전체 보기)";
    (files[scope] ||= []).push(p);
  }
  await fs.rm(OUT, { recursive: true, force: true });
  await fs.mkdir(OUT, { recursive: true });
  for (const [k, items] of Object.entries(files)) await fs.writeFile(new URL(`${k}.json`, OUT), JSON.stringify(items), "utf8");
  const meta = { fetchedAt: data.fetchedAt, total: data.count, files: Object.fromEntries(Object.entries(files).map(([k, v]) => [k, v.length])) };
  await fs.writeFile(new URL("meta.json", OUT), JSON.stringify(meta), "utf8");
  log(`지역별 파일 ${Object.keys(files).length}개를 만들었어요 (전국 ${files.nat?.length || 0}건).`);
  return meta;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) buildData().catch((e) => { console.error(e.message); process.exit(1); });

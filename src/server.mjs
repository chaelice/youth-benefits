// 내 PC에서 public/ 폴더를 http://localhost:5179 로 열어줘요. (웹페이지 버전은 GitHub Pages에서 같은 파일을 그대로 써요)
// - 서류 읽기·판정은 모두 브라우저 안에서 해요. 이 서버는 파일만 보내줘요.
// - .env 에 공공데이터포털 키가 있으면, 정부24 목록이 7일 지났을 때 자동으로 다시 받아 지역별 파일을 만들어요.
import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { exec } from "node:child_process";
import { fileURLToPath } from "node:url";
import { loadKey } from "./sync.mjs";
import { buildData } from "../scripts/build-data.mjs";

const PORT = 5179;
const PUBLIC = fileURLToPath(new URL("../public/", import.meta.url));
const META = path.join(PUBLIC, "data", "meta.json");
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8", ".css": "text/css; charset=utf-8", ".txt": "text/plain; charset=utf-8", ".md": "text/plain; charset=utf-8" };

async function refreshIfOld() {
  if (!loadKey()) return;
  const st = await fs.stat(META).catch(() => null);
  if (st && (Date.now() - st.mtimeMs) / 864e5 <= 7) return;
  console.log("정부24 목록을 새로 받는 중이에요 (1~2분)...");
  await buildData({ fetch: true, log: () => {} }).then(() => console.log("정부24 목록을 새로 받았어요.")).catch((e) => console.log("목록 갱신 실패:", e.message));
}

const openBrowser = (u) => { if (!process.env.NO_OPEN) exec(process.platform === "win32" ? `start "" ${u}` : process.platform === "darwin" ? `open ${u}` : `xdg-open ${u}`); };

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const rel = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname.slice(1));
  const file = path.join(PUBLIC, rel);
  if (!file.startsWith(PUBLIC)) { res.writeHead(403); return res.end(); }
  try {
    const body = await fs.readFile(file);
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream", "Cache-Control": "no-store" });
    res.end(body);
  } catch { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); res.end("Not found"); }
});
// 이미 켜져 있으면(실행 파일을 두 번 누른 경우) 브라우저만 다시 열고 끝내요
server.on("error", (e) => {
  if (e.code !== "EADDRINUSE") throw e;
  console.log("이미 켜져 있어요. 브라우저 화면만 다시 열게요.");
  openBrowser(`http://localhost:${PORT}`);
  setTimeout(() => process.exit(0), 1500);
});
server.listen(PORT, "127.0.0.1", async () => {
  const u = `http://localhost:${PORT}`;
  console.log(`청년 혜택 찾기: ${u}`);
  console.log("이 검은 창을 닫으면 프로그램이 꺼져요. 쓰는 동안에는 열어 두세요.");
  await refreshIfOld();
  openBrowser(u);
});

import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

const DATA_DIR = path.join(process.cwd(), "data");
const REF_FILE = path.join(DATA_DIR, "line-references.json");

type ReferenceEntry = {
  lineId: string;
  createdAt: string;
};

export async function POST(request: Request) {
  let body: { lineId?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const lineId = body.lineId?.trim();
  if (!lineId || lineId.length > 64) {
    return Response.json({ error: "Invalid LINE ID" }, { status: 400 });
  }

  let list: ReferenceEntry[] = [];
  try {
    await mkdir(DATA_DIR, { recursive: true });
    const raw = await readFile(REF_FILE, "utf-8");
    list = JSON.parse(raw) as ReferenceEntry[];
  } catch {
    list = [];
  }

  list.push({ lineId, createdAt: new Date().toISOString() });
  await writeFile(REF_FILE, JSON.stringify(list, null, 2), "utf-8");

  return Response.json({ ok: true });
}

import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import type { LeadRecord, LeadStatus } from "../line/types";

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "line-leads.json");

type LeadsDatabase = Record<string, LeadRecord>;

async function ensureStore(): Promise<LeadsDatabase> {
  try {
    await mkdir(DATA_DIR, { recursive: true });
    const raw = await readFile(LEADS_FILE, "utf-8");
    return JSON.parse(raw) as LeadsDatabase;
  } catch {
    return {};
  }
}

async function saveStore(db: LeadsDatabase): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(LEADS_FILE, JSON.stringify(db, null, 2), "utf-8");
}

export async function getLead(userId: string): Promise<LeadRecord | null> {
  const db = await ensureStore();
  return db[userId] ?? null;
}

export async function upsertLeadMessage(params: {
  userId: string;
  role: "user" | "assistant";
  text: string;
  status?: LeadStatus;
  summary?: string;
}): Promise<LeadRecord> {
  const db = await ensureStore();
  const now = new Date().toISOString();
  const existing = db[params.userId];

  const record: LeadRecord = existing
    ? {
        ...existing,
        status: params.status ?? existing.status,
        summary: params.summary ?? existing.summary,
        updatedAt: now,
        messages: [
          ...existing.messages,
          {
            role: params.role,
            text: params.text,
            timestamp: now,
          },
        ],
      }
    : {
        userId: params.userId,
        status: params.status ?? "new",
        summary: params.summary,
        messages: [
          {
            role: params.role,
            text: params.text,
            timestamp: now,
          },
        ],
        createdAt: now,
        updatedAt: now,
      };

  db[params.userId] = record;
  await saveStore(db);
  return record;
}

export async function setLeadLineIdReference(
  userId: string,
  lineIdReference: string,
): Promise<void> {
  const db = await ensureStore();
  const existing = db[userId];
  if (existing) {
    existing.lineIdReference = lineIdReference;
    existing.updatedAt = new Date().toISOString();
    db[userId] = existing;
  } else {
    const now = new Date().toISOString();
    db[userId] = {
      userId,
      status: "new",
      lineIdReference,
      messages: [],
      createdAt: now,
      updatedAt: now,
    };
  }
  await saveStore(db);
}

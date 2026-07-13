import type { BlogAuthor } from "./types";

export const AXORA_TEAM_AUTHOR_ID = "axora-team";

export const axoraTeamAuthor: BlogAuthor = {
  id: AXORA_TEAM_AUTHOR_ID,
  name: "AXORA Team",
  avatar: "/icon.png",
  bio: "AXORA 專注 AI CRM、LINE 官方帳號整合、SaaS 與企業官網開發，協助台灣企業把數位系統真正落地營運。",
};

export const blogAuthors: Record<string, BlogAuthor> = {
  [AXORA_TEAM_AUTHOR_ID]: axoraTeamAuthor,
};

export function getBlogAuthor(authorId: string): BlogAuthor {
  return blogAuthors[authorId] ?? axoraTeamAuthor;
}

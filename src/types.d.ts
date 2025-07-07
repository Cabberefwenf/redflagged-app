export type FlagColor = "green" | "yellow" | "red";

export interface ExperienceReport {
  id: string;
  imageUrl: string;
  flag: FlagColor;
  story: string;
  handle?: string; // Optional social handle (e.g. @example)
  timestamp: string;
  location?: string;
  tags?: string[];
  submittedBy: string; // user ID or UUID
  isPremium?: boolean;
}

export interface User {
  id: string;
  email: string;
  isVerified: boolean;
  isPremium: boolean;
  createdAt: string;
}

export interface ModerationTag {
  id: string;
  reportId: string;
  tag: string; // e.g. "revenge", "suspicious", "safe"
  confidence: number; // 0–1 (AI output)
  createdAt: string;
  reviewedByHuman?: boolean;
}

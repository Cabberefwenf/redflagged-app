// /src/types.d.ts

export interface ReportInput {
  id?: string;
  content: string;
  createdAt?: string;
  userId?: string;
}

export type FlagColor = 'green' | 'yellow' | 'red';

export interface ReportAnalysis {
  flag: FlagColor;
  optionalTags: string[];
}

export interface SubmittedReport extends ReportInput {
  analysis: ReportAnalysis;
}

export type FlagTag = {
  label: string;
  description: string;
  color: FlagColor;
};

export type User = {
  id: string;
  username?: string;
  joinedAt: string;
  verified?: boolean;
};

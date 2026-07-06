export type EventFormat = "online" | "offline";

export interface EventItem {
  slug: string;
  title: string;
  speaker: string;
  date: string; // ISO date
  format: EventFormat;
  location?: string;
  description: string;
}

export type JobMode = "remote" | "onsite" | "hybrid";

export interface JobItem {
  slug: string;
  title: string;
  location: string;
  mode: JobMode;
  postedDate: string; // ISO date
  description: string;
  qualifications: string[];
  howToApply: string;
}

export type ArticleCategory =
  | "Cerita Pendidik"
  | "Tips Mengajar"
  | "Refleksi & Opini"
  | "Kabar Tera";

export interface ArticleMeta {
  title: string;
  category: ArticleCategory;
  date: string;
  excerpt: string;
  slug: string;
  cover?: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

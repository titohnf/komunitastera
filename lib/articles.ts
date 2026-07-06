import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Article, ArticleMeta } from "@/types";

const CONTENT_DIR = path.join(process.cwd(), "content/cerita");

export function getAllArticlesMeta(): ArticleMeta[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const articles = files.map((filename) => {
    const filePath = path.join(CONTENT_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    return data as ArticleMeta;
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);

  return {
    ...(data as ArticleMeta),
    content: processed.toString(),
  };
}

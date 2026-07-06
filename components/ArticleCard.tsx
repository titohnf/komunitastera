import type { ArticleMeta } from "@/types";
import { formatDate } from "@/lib/format";
import { Card, CardBody, CardBadge, CardTitle, CardMeta, CardFooterLink } from "@/components/ui/Card";

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <Card>
      <div className="flex h-36 items-center justify-center bg-gradient-to-br from-primary/15 to-secondary/15 text-primary-dark">
        <span className="px-4 text-center text-sm font-medium opacity-70">
          {article.category}
        </span>
      </div>
      <CardBody>
        <CardBadge>{article.category}</CardBadge>
        <CardTitle>{article.title}</CardTitle>
        <CardMeta>{formatDate(article.date)}</CardMeta>
        <p className="line-clamp-3 text-sm text-foreground/80">{article.excerpt}</p>
        <CardFooterLink href={`/cerita/${article.slug}`}>Baca Selengkapnya</CardFooterLink>
      </CardBody>
    </Card>
  );
}

import { FileText, Download } from "lucide-react";
import type { ResourceItem } from "@/types";
import { Card, CardBody, CardBadge, CardTitle } from "@/components/ui/Card";

export default function ResourceCard({ resource }: { resource: ResourceItem }) {
  return (
    <Card>
      <CardBody>
        <div className="flex items-center justify-between">
          <CardBadge>{resource.category}</CardBadge>
          <span className="flex items-center gap-1 text-xs font-medium text-muted">
            <FileText size={14} />
            {resource.fileType}
          </span>
        </div>
        <CardTitle>{resource.title}</CardTitle>
        <p className="text-sm text-foreground/80">{resource.description}</p>
        <a
          href={resource.fileUrl}
          download
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-dark"
        >
          <Download size={16} />
          Unduh
        </a>
      </CardBody>
    </Card>
  );
}

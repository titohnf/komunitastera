import type { JobItem } from "@/types";
import { formatDate } from "@/lib/format";
import { Card, CardBody, CardBadge, CardTitle, CardMeta, CardFooterLink } from "@/components/ui/Card";
import ShareWhatsApp from "@/components/ShareWhatsApp";

const MODE_LABEL: Record<JobItem["mode"], string> = {
  remote: "Remote",
  onsite: "Onsite",
  hybrid: "Hybrid",
};

export default function JobCard({ job }: { job: JobItem }) {
  return (
    <Card>
      <CardBody>
        <div className="flex items-start justify-between gap-2">
          <CardBadge>{MODE_LABEL[job.mode]}</CardBadge>
          <ShareWhatsApp title={job.title} path={`/karier/${job.slug}`} compact />
        </div>
        <CardTitle>{job.title}</CardTitle>
        <CardMeta>{job.location}</CardMeta>
        <CardMeta>Diposting {formatDate(job.postedDate)}</CardMeta>
        <CardFooterLink href={`/karier/${job.slug}`}>Lihat Detail</CardFooterLink>
      </CardBody>
    </Card>
  );
}

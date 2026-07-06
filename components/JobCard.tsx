import type { JobItem } from "@/types";
import { formatDate } from "@/lib/format";
import { Card, CardBody, CardBadge, CardTitle, CardMeta, CardFooterLink } from "@/components/ui/Card";

const MODE_LABEL: Record<JobItem["mode"], string> = {
  remote: "Remote",
  onsite: "Onsite",
  hybrid: "Hybrid",
};

export default function JobCard({ job }: { job: JobItem }) {
  return (
    <Card>
      <CardBody>
        <CardBadge>{MODE_LABEL[job.mode]}</CardBadge>
        <CardTitle>{job.title}</CardTitle>
        <CardMeta>{job.location}</CardMeta>
        <CardMeta>Diposting {formatDate(job.postedDate)}</CardMeta>
        <CardFooterLink href={`/karier/${job.slug}`}>Lihat Detail</CardFooterLink>
      </CardBody>
    </Card>
  );
}

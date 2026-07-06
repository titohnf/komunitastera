import type { EventItem } from "@/types";
import { formatDate } from "@/lib/format";
import { Card, CardBody, CardBadge, CardTitle, CardMeta, CardFooterLink } from "@/components/ui/Card";
import ShareWhatsApp from "@/components/ShareWhatsApp";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <Card>
      <CardBody>
        <div className="flex items-start justify-between gap-2">
          <CardBadge>{event.format === "online" ? "Online" : "Offline"}</CardBadge>
          <ShareWhatsApp title={event.title} path={`/event/${event.slug}`} compact />
        </div>
        <CardTitle>{event.title}</CardTitle>
        <CardMeta>{event.speaker}</CardMeta>
        <CardMeta>
          {formatDate(event.date)}
          {event.location ? ` · ${event.location}` : ""}
        </CardMeta>
        <CardFooterLink href={`/event/${event.slug}`}>Daftar</CardFooterLink>
      </CardBody>
    </Card>
  );
}

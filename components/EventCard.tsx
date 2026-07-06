import type { EventItem } from "@/types";
import { formatDate } from "@/lib/format";
import { Card, CardBody, CardBadge, CardTitle, CardMeta, CardFooterLink } from "@/components/ui/Card";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <Card>
      <CardBody>
        <CardBadge>{event.format === "online" ? "Online" : "Offline"}</CardBadge>
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

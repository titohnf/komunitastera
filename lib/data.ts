import events from "@/data/events.json";
import jobs from "@/data/jobs.json";
import type { EventItem, JobItem } from "@/types";

export function getAllEvents(): EventItem[] {
  return [...(events as EventItem[])].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

export function getUpcomingEvents(limit: number): EventItem[] {
  const now = Date.now();
  return getAllEvents()
    .filter((e) => new Date(e.date).getTime() >= now)
    .slice(0, limit);
}

export function getEventBySlug(slug: string): EventItem | undefined {
  return (events as EventItem[]).find((e) => e.slug === slug);
}

export function getAllJobs(): JobItem[] {
  return [...(jobs as JobItem[])].sort(
    (a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
  );
}

export function getLatestJobs(limit: number): JobItem[] {
  return getAllJobs().slice(0, limit);
}

export function getJobBySlug(slug: string): JobItem | undefined {
  return (jobs as JobItem[]).find((j) => j.slug === slug);
}

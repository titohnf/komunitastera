import testimonials from "@/data/testimonials.json";
import type { Testimonial } from "@/types";

export function getTestimonials(): Testimonial[] {
  return testimonials as Testimonial[];
}

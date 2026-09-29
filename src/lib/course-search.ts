import { FEATURED } from "@/lib/categories";

export type CourseSearch = { q?: string; category?: string; page?: number };

export function coursesHref({ q, category, page }: CourseSearch) {
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (category && category !== FEATURED) params.set("category", category);
  if (page && page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `/courses?${qs}` : "/courses";
}

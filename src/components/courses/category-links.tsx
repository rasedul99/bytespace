import Link from "next/link";

import { chipClass } from "@/components/category-chip";
import { categories } from "@/lib/categories";
import { coursesHref } from "@/lib/course-search";

export function CategoryLinks({
  active,
  query,
  limit = 9,
}: {
  active: string;
  query: string;
  limit?: number;
}) {
  const shown = [
    ...categories.slice(0, limit - 1),
    categories[categories.length - 1],
  ];

  if (!shown.includes(active)) shown[shown.length - 2] = active;

  return (
    <nav
      aria-label="Categories"
      className="flex flex-wrap items-center gap-x-4 gap-y-5 max-sm:-mx-4 max-sm:flex-nowrap max-sm:justify-start max-sm:overflow-x-auto max-sm:px-4 max-sm:pb-1 [scrollbar-width:none]"
    >
      {shown.map((category) => (
        <Link
          key={category}
          href={coursesHref({ q: query, category })}
          aria-current={category === active ? "page" : undefined}
          scroll={false}
          className={chipClass(category === active)}
        >
          {category}
        </Link>
      ))}
    </nav>
  );
}

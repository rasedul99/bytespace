import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function Pagination({
  page,
  totalPages,
  query,
}: {
  page: number;
  totalPages: number;
  query?: string;
}) {
  if (totalPages <= 1) return null;

  const href = (p: number) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (p > 1) params.set("page", String(p));
    const qs = params.toString();
    return qs ? `/courses?${qs}` : "/courses";
  };

  const arrow =
    "flex size-10 items-center justify-center rounded-full border border-gray-200 text-gray-950 transition-colors hover:border-gray-950";

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-6">
      {page > 1 ? (
        <Link href={href(page - 1)} aria-label="Previous page" className={arrow}>
          <ChevronLeft className="size-5" />
        </Link>
      ) : (
        <span aria-hidden className={cn(arrow, "opacity-40")}>
          <ChevronLeft className="size-5" />
        </span>
      )}

      <ul className="flex items-center gap-5">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <li key={p}>
            <Link
              href={href(p)}
              aria-current={p === page ? "page" : undefined}
              className={cn(
                "label-m transition-colors",
                // current page is muted, as in the design
                p === page ? "text-gray-400" : "text-gray-950 hover:text-blue-800",
              )}
            >
              {p}
            </Link>
          </li>
        ))}
      </ul>

      {page < totalPages ? (
        <Link href={href(page + 1)} aria-label="Next page" className={arrow}>
          <ChevronRight className="size-5" />
        </Link>
      ) : (
        <span aria-hidden className={cn(arrow, "opacity-40")}>
          <ChevronRight className="size-5" />
        </span>
      )}
    </nav>
  );
}

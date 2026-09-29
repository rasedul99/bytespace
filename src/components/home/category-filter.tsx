"use client";

import Link from "next/link";
import { useState } from "react";

import { chipClass } from "@/components/category-chip";
import { categories } from "@/lib/categories";
import { cn } from "@/lib/utils";


export function CategoryFilter({
  limit,
  showMore = true,
  className,
  active: activeProp,
  onSelect,
}: {
  limit?: number;
  showMore?: boolean;
  className?: string;
  /** Pass `active` + `onSelect` to control the selection from a parent. */
  active?: string;
  onSelect?: (category: string) => void;
}) {
  const shown = limit
    ? [...categories.slice(0, limit - 1), categories[categories.length - 1]]
    : categories;
  const [ownActive, setOwnActive] = useState(shown[0]);
  const active = activeProp ?? ownActive;
  const select = (category: string) => {
    setOwnActive(category);
    onSelect?.(category);
  };

  return (
    <div
      className={cn(
        "mx-auto flex max-w-275 flex-wrap items-center justify-center gap-x-4 gap-y-5 max-sm:-mx-4 max-sm:flex-nowrap max-sm:justify-start max-sm:overflow-x-auto max-sm:px-4 max-sm:pb-1 [scrollbar-width:none]",
        className,
      )}
    >
      {shown.map((category) => (
        <button
          key={category}
          type="button"
          aria-pressed={active === category}
          onClick={() => select(category)}
          className={chipClass(active === category)}
        >
          {category}
        </button>
      ))}
      {showMore && (
        <Link href="/courses" className="shrink-0 whitespace-nowrap px-2 label-m text-blue-800">
          + More
        </Link>
      )}
    </div>
  );
}

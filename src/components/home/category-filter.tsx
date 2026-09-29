"use client";

import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export function CategoryFilter({
  limit,
  showMore = true,
  className,
}: {
  limit?: number;
  showMore?: boolean;
  className?: string;
}) {
  const shown = limit
    ? [...categories.slice(0, limit - 1), categories[categories.length - 1]]
    : categories;
  const [active, setActive] = useState(shown[0]);

  return (
    <div
      className={cn(
        "mx-auto flex max-w-275 flex-wrap items-center justify-center gap-x-4 gap-y-5",
        className,
      )}
    >
      {shown.map((category) => (
        <button
          key={category}
          type="button"
          aria-pressed={active === category}
          onClick={() => setActive(category)}
          className={cn(
            "h-10.5 rounded-full px-4 body-m text-gray-700 transition-colors",
            active === category
              ? "bg-lime-400"
              : "bg-gray-50 hover:bg-gray-100",
          )}
        >
          {category}
        </button>
      ))}
      {showMore && (
        <Link href="/courses" className="px-2 label-m text-blue-800">
          + More
        </Link>
      )}
    </div>
  );
}

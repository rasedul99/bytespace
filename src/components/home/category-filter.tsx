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

// Only highlights the chosen chip for now — filtering needs real course data.
export function CategoryFilter() {
  const [active, setActive] = useState(categories[0]);

  return (
    <div className="mx-auto flex max-w-275 flex-wrap items-center justify-center gap-x-4 gap-y-5">
      {categories.map((category) => (
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
      <Link
        href="/courses"
        className="px-2 label-m text-blue-800"
      >
        + More
      </Link>
    </div>
  );
}

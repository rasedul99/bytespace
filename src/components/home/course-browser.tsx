"use client";

import Link from "next/link";
import { useState } from "react";

import { CourseCard, type Course } from "@/components/course-card";
import { CategoryFilter } from "@/components/home/category-filter";
import { FEATURED, inCategory } from "@/lib/categories";

export function CourseBrowser({ courses }: { courses: Course[] }) {
  const [category, setCategory] = useState(FEATURED);
  const shown = courses.filter((c) => inCategory(c, category));

  return (
    <>
      <div className="mt-10.5">
        <CategoryFilter active={category} onSelect={setCategory} />
      </div>

      {shown.length > 0 ? (
        <div
          className="mt-19 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          aria-live="polite"
        >
          {shown.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      ) : (
        <div
          className="mt-19 flex flex-col items-center py-16 text-center"
          aria-live="polite"
        >
          <p className="heading-xs text-gray-950">No {category} courses yet</p>
          <p className="mt-2 body-m text-gray-700">
            New courses are added regularly.{" "}
            <Link href="/courses" className="text-blue-800 hover:underline">
              Browse all courses
            </Link>
          </p>
        </div>
      )}
    </>
  );
}

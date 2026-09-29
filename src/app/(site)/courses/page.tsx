import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown, Search, SearchX, X } from "lucide-react";

import { CourseCard } from "@/components/course-card";
import { CategoryLinks } from "@/components/courses/category-links";
import { CourseToolbar } from "@/components/courses/course-toolbar";
import { Pagination } from "@/components/courses/pagination";
import { GridLines } from "@/components/grid-lines";
import { Navbar } from "@/components/navbar";
import { categories, FEATURED, inCategory } from "@/lib/categories";
import { coursesHref } from "@/lib/course-search";
import { catalog, COURSES_PER_PAGE, courses } from "@/lib/courses";

export const metadata: Metadata = { title: "Courses · ByteSpace" };

const outlineButton =
  "flex h-10 items-center rounded-full border border-gray-200 px-4 label-s text-gray-950 transition-colors hover:border-gray-950";

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q.trim() : "";
  const category =
    typeof params.category === "string" && categories.includes(params.category)
      ? params.category
      : FEATURED;
  const filtered = category !== FEATURED;

  const results = (query ? courses : catalog).filter(
    (c) =>
      inCategory(c, category) &&
      `${c.title} ${c.creator}`.toLowerCase().includes(query.toLowerCase()),
  );

  const totalPages = Math.max(1, Math.ceil(results.length / COURSES_PER_PAGE));
  const requested = Number(params.page) || 1;
  const page = Math.min(Math.max(1, requested), totalPages);
  const shown = results.slice(
    (page - 1) * COURSES_PER_PAGE,
    page * COURSES_PER_PAGE,
  );

  return (
    <main>
      <section className="relative overflow-hidden bg-blue-800 px-4 pb-16 text-white">
        <GridLines />
        <Navbar />

        <div className="relative mx-auto flex max-w-300 flex-col items-center pt-10 text-center">
          <h1 className="heading-s sm:heading-m">Find Your Next Course</h1>

          <form
            action="/courses"
            className="mt-8 flex w-full max-w-163 items-center gap-4"
          >
            {filtered && (
              <input type="hidden" name="category" value={category} />
            )}
            <div className="flex h-13 flex-1 items-center gap-2 rounded-full bg-white px-6 text-gray-950">
              <Search className="size-5 shrink-0 text-gray-400" aria-hidden />
              <input
                key={query}
                name="q"
                type="text"
                enterKeyHint="search"
                defaultValue={query}
                placeholder="Search"
                aria-label="Search courses"
                className="w-full bg-transparent body-m outline-none placeholder:text-gray-400"
              />
              {query && (
                <Link
                  href={coursesHref({ category })}
                  aria-label="Clear search"
                  className="shrink-0 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-950"
                >
                  <X className="size-4" />
                </Link>
              )}
            </div>

            <div className="relative">
              <select
                name="type"
                aria-label="Search in"
                className="h-12 appearance-none rounded-full bg-lime-400 pl-6 pr-11 label-s text-gray-950 outline-none"
              >
                <option value="courses">Courses</option>
                <option value="topic">Topics</option>
                <option value="creators">Creators</option>
              </select>
              <ChevronDown
                aria-hidden
                className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-gray-950"
              />
            </div>
          </form>
        </div>
      </section>

      <section className="bg-white px-4 pt-18 pb-24">
        <div className="mx-auto max-w-300">
          <CourseToolbar />

          <div className="mt-8">
            <CategoryLinks active={category} query={query} />
          </div>

          {(query || filtered) && (
            <p className="mt-10 body-m text-gray-700" aria-live="polite">
              {results.length} {results.length === 1 ? "result" : "results"}
              {query && (
                <>
                  {" "}
                  for{" "}
                  <span className="font-medium text-gray-950">“{query}”</span>
                </>
              )}
              {filtered && (
                <>
                  {" "}
                  in{" "}
                  <span className="font-medium text-gray-950">{category}</span>
                </>
              )}
            </p>
          )}

          {shown.length > 0 ? (
            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((course, i) => (
                <CourseCard key={`${course.slug}-${i}`} course={course} />
              ))}
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center py-16 text-center">
              <SearchX className="size-10 text-gray-400" aria-hidden />
              <p className="mt-4 heading-xs text-gray-950">No courses found</p>
              <p className="mt-2 body-m text-gray-700">
                Try a different search{filtered && " or another category"}.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {query && (
                  <Link
                    href={coursesHref({ category })}
                    className={outlineButton}
                  >
                    Clear search
                  </Link>
                )}
                {filtered && (
                  <Link
                    href={coursesHref({ q: query })}
                    className={outlineButton}
                  >
                    Show all categories
                  </Link>
                )}
              </div>
            </div>
          )}

          <div className="mt-24">
            <Pagination
              page={page}
              totalPages={totalPages}
              query={query}
              category={category}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

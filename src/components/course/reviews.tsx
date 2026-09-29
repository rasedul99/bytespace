"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useState } from "react";

import type { Review } from "@/lib/course-details";
import { cn } from "@/lib/utils";

function Stars({ value, className }: { value: number; className?: string }) {
  return (
    <span
      className={cn("flex gap-1", className)}
      aria-label={`${value} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          aria-hidden
          className={cn(
            "size-4",
            n <= value
              ? "fill-gray-700 text-gray-700"
              : "fill-gray-200 text-gray-200",
          )}
        />
      ))}
    </span>
  );
}

export function Reviews({
  courseTitle,
  breakdown,
  reviews,
}: {
  courseTitle: string;
  breakdown: [number, number, number, number, number];
  reviews: Review[];
}) {
  const [filter, setFilter] = useState<number | null>(null);

  const total = breakdown.reduce((a, b) => a + b, 0);
  const average =
    breakdown.reduce((sum, count, i) => sum + count * (5 - i), 0) / total;
  const max = Math.max(...breakdown);
  const shown = filter ? reviews.filter((r) => r.rating === filter) : reviews;

  const chip = (active: boolean) =>
    cn(
      "flex h-10 items-center gap-1.5 rounded-full px-4 body-s text-gray-950 transition-colors",
      active ? "bg-lime-400" : "bg-gray-50 hover:bg-gray-100",
    );

  return (
    <div>
      <h2 className="heading-xs text-gray-950">What Learners Are Saying</h2>
      <p className="mt-6 body-m text-gray-700">
        Discover what our learners have to say about their experience with ‘
        {courseTitle}.’ Read reviews and ratings from individuals who have
        embarked on the transformative journey of mastering digital asset
        creation.
      </p>

      {/* rating summary */}
      <div className="mt-6 flex flex-col gap-6 rounded-3xl border border-gray-200 p-6 sm:flex-row sm:items-center">
        <div className="flex size-28 shrink-0 flex-col items-center justify-center rounded-2xl bg-lime-400 text-gray-950">
          <span className="body-s">Ratings</span>
          <span className="heading-s">{average.toFixed(1)}</span>
        </div>
        <ul className="flex-1 space-y-2">
          {breakdown.map((count, i) => {
            const stars = 5 - i;
            return (
              <li key={stars} className="flex items-center gap-4">
                <span className="h-1.5 flex-1 rounded-full bg-gray-100">
                  <span
                    className="block h-full rounded-full bg-lime-400"
                    style={{ width: `${(count / max) * 100}%` }}
                  />
                </span>
                <Stars value={stars} />
                <span className="w-9 text-right body-s text-gray-700">
                  {count}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <h2 className="mt-10 heading-xs text-gray-950">Individual Reviews:</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          aria-pressed={filter === null}
          onClick={() => setFilter(null)}
          className={chip(filter === null)}
        >
          All rating
        </button>
        {[5, 4, 3, 2, 1].map((n) => (
          <button
            key={n}
            type="button"
            aria-pressed={filter === n}
            aria-label={`${n} star reviews`}
            onClick={() => setFilter(n)}
            className={chip(filter === n)}
          >
            <Star className="size-4 fill-gray-700 text-gray-700" aria-hidden />
            {n}
          </button>
        ))}
      </div>

      {shown.length > 0 ? (
        <ul className="mt-6 space-y-6">
          {shown.map((review) => (
            <li
              key={review.name}
              className="rounded-3xl border border-gray-200 p-6"
            >
              <div className="flex items-start gap-3">
                <Image
                  src={review.avatar}
                  alt=""
                  className="size-10 rounded-full"
                />
                <div className="flex-1">
                  <p className="label-m text-gray-950">{review.name}</p>
                  <p className="body-xs text-gray-700">{review.role}</p>
                </div>
                <span className="body-xs italic text-gray-700">
                  {review.date}
                </span>
              </div>
              <Stars value={review.rating} className="mt-5 [&_svg]:size-5" />
              <p className="mt-5 body-m text-gray-700">{review.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 body-m text-gray-700">
          No {filter}-star reviews yet.
        </p>
      )}
    </div>
  );
}

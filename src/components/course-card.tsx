import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ChartNoAxesColumnIncreasing, ImageIcon, Star } from "lucide-react";
import { cn } from "cn";

export type Course = {
  slug: string;
  title: string;
  creator: string;
  image?: StaticImageData;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: string;
  students: StaticImageData[];
  studentCount: string;
  price: number;
};

export function CourseCard({
  course,
  classes,
}: {
  course: Course;

  classes?: { countClassName?: string };
}) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group block rounded-3xl border border-gray-200 bg-white p-4 transition-shadow hover:shadow-[0_8px_24px_rgb(0_0_0/0.06)]"
    >
      <div className="relative h-50 overflow-hidden rounded-2xl bg-gray-100">
        {course.image ? (
          <Image
            src={course.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <ImageIcon
            className="absolute inset-0 m-auto size-10 text-gray-400"
            aria-hidden
          />
        )}
        <div className="absolute inset-x-4 bottom-4 flex justify-between gap-2 label-xs text-black-700">
          <span className="whitespace-nowrap rounded-full px-3 py-1.5 backdrop-blur bg-[#F6F6F699]">
            {course.lessons} Lessons
          </span>
          <span className="whitespace-nowrap rounded-full px-3 py-1.5 backdrop-blur bg-[#F6F6F699]">
            {course.duration}
          </span>
          <span className="whitespace-nowrap rounded-full px-3 py-1.5 backdrop-blur bg-[#F6F6F699]">
            {course.comments} Comments
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="truncate heading-xs text-black">
          {course.title}
        </h3>
        <span className="flex shrink-0 items-center gap-1 pt-1 label-l text-black-700">
          {course.rating}{" "}
          <Star
            className="size-4 fill-lime-400 text-lime-400"
            aria-label="stars"
          />
        </span>
      </div>
      <p className="body-xs text-black-700">
        by <span className="text-blue-800">{course.creator}</span>
      </p>

      <div className="mt-4 flex items-center gap-3">
        <span className="flex h-8 items-center gap-2 rounded-full bg-gray-50 px-3 body-xs text-gray-700">
          <ChartNoAxesColumnIncreasing className="size-4" aria-hidden />
          {course.level}
        </span>
        <div className="flex -space-x-2">
          {course.students.map((avatar, i) => (
            <Image
              key={i}
              src={avatar}
              alt=""
              className="size-8 rounded-full"
            />
          ))}
          <span
            className={cn(
              "flex size-8 items-center justify-center rounded-full border-2 border-white bg-lime-400 label-xs text-gray-950",
              classes?.countClassName,
            )}
          >
            {course.studentCount}
          </span>
        </div>
      </div>

      <p className="mt-4 heading-xs text-blue-800">
        ${course.price}
        <span className="body-xs text-black-700">/lifetime</span>
      </p>
    </Link>
  );
}

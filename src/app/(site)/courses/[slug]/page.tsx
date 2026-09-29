import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChartNoAxesColumnIncreasing,
  CircleCheck,
  FolderOpen,
  IdCard,
  PhoneCall,
  Play,
  Star,
  Users,
  Video,
} from "lucide-react";

import { CourseTabs } from "@/components/course/course-tabs";
import { Reviews } from "@/components/course/reviews";
import { ShareButton } from "@/components/course/share-button";
import { GridLines } from "@/components/grid-lines";
import { Navbar } from "@/components/navbar";
import { ProgressCard } from "@/components/progress-card";
import { getCourseDetail, type CourseDetail } from "@/lib/course-details";
import { courses } from "@/lib/courses";
import { getCreatorByCourseName } from "@/lib/creators";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const course = getCourseDetail((await params).slug);
  return {
    title: course ? `${course.fullTitle} · ByteSpace` : "Course not found",
  };
}

function creatorHref(name: string) {
  const creator = getCreatorByCourseName(name);
  return creator ? `/creators/${creator.slug}` : "/creators";
}

const includes = [
  { label: "Learning Resources", icon: FolderOpen },
  { label: "Quality Lesson Videos", icon: Video },
  { label: "Certificate of Completion", icon: IdCard },
  { label: "Private Consultation", icon: PhoneCall },
];

export default async function CoursePage({
  params,
}: PageProps<"/courses/[slug]">) {
  const course = getCourseDetail((await params).slug);
  if (!course) notFound();

  const chip =
    "flex h-10 items-center gap-2 rounded-full bg-white px-5 label-m text-gray-950";

  return (
    <main>
      <section className="relative bg-blue-800 px-4 pb-16 text-gray-50">
        <GridLines />
        <Navbar />

        <div className="relative mx-auto max-w-300 pt-16">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h1 className="heading-s sm:heading-m">{course.fullTitle}</h1>
              <p className="mt-2 heading-xs">{course.subtitle}</p>
              <p className="mt-6 body-l">
                by{" "}
                <Link
                  href={creatorHref(course.creator)}
                  className="text-lime-400 underline-offset-4 hover:underline"
                >
                  {course.creator}
                </Link>
              </p>
              <ul className="mt-4 flex flex-wrap gap-4">
                <li className={chip}>
                  <ChartNoAxesColumnIncreasing
                    className="size-5 text-blue-800"
                    aria-hidden
                  />
                  {course.level}
                </li>
                <li className={chip}>
                  <Star
                    className="size-5 fill-blue-800 text-blue-800"
                    aria-hidden
                  />
                  {course.rating} ({course.reviewCount} reviews)
                </li>
                <li className={chip}>
                  <Users className="size-5 text-blue-800" aria-hidden />
                  {course.studentTotal} Students
                </li>
              </ul>
            </div>
            <ShareButton title={course.fullTitle} />
          </div>

          <div className="mt-15 grid items-start gap-10 lg:grid-cols-[1fr_412px] lg:gap-16">
            <div className="relative aspect-3/2 overflow-hidden rounded-3xl bg-gray-100">
              {course.image && (
                <Image
                  src={course.image}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 725px, 100vw"
                  className="object-cover"
                />
              )}
              <button
                type="button"
                aria-label="Play course preview"
                className="absolute left-1/2 top-1/2 flex size-26 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-white/25 backdrop-blur-md"
              >
                <span className="flex size-15 items-center justify-center rounded-full bg-white">
                  <Play
                    className="ml-1 size-6 fill-gray-700 text-gray-700"
                    aria-hidden
                  />
                </span>
              </button>
            </div>

            <div className="relative z-10 lg:h-full">
              <div className="lg:absolute lg:inset-x-0 lg:top-0">
                <CourseSidebar course={course} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pt-12 pb-24">
        <div className="mx-auto grid max-w-300 gap-16 lg:grid-cols-[1fr_412px]">
          <CourseTabs
            tabs={[
              { label: "About", content: <About course={course} /> },
              { label: "Lesson", content: <Lessons course={course} /> },
              {
                label: "Reviews",
                content: (
                  <Reviews
                    courseTitle={course.fullTitle}
                    breakdown={course.ratingBreakdown}
                    reviews={course.reviews}
                  />
                ),
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}

function CourseSidebar({ course }: { course: CourseDetail }) {
  return (
    <aside className="rounded-3xl border border-gray-200 bg-white p-10 text-gray-950">
      <LessonList course={course} />

      <p className="mt-8 body-m text-gray-700">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>
      <p className="mt-6 heading-m text-blue-800">
        ${course.price}
        <span className="body-m text-gray-700">/lifetime</span>
      </p>

      <Link
        href="/join"
        className="mt-6 flex h-12 items-center justify-center rounded-full bg-lime-400 label-l text-gray-950 transition hover:brightness-95"
      >
        Enroll Now
      </Link>

      <h2 className="mt-8 heading-xs">This course include</h2>
      <ul className="mt-6 space-y-4">
        {includes.map(({ label, icon: Icon }) => (
          <li
            key={label}
            className="flex items-center gap-3 body-m text-gray-700"
          >
            <Icon className="size-5 text-blue-800" aria-hidden />
            {label}
          </li>
        ))}
      </ul>

      <hr className="my-8 border-gray-200" />

      <div className="flex items-center gap-4">
        <span className="flex size-12 items-center justify-center rounded-full bg-gray-100 heading-xs text-gray-400">
          {course.creatorProfile.name[0]}
        </span>
        <div>
          <p className="label-l">{course.creatorProfile.name}</p>
          <p className="body-m text-gray-700">{course.creatorProfile.role}</p>
        </div>
      </div>
      <p className="mt-6 body-m text-gray-700">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>
      <Link
        href={creatorHref(course.creator)}
        className="mt-6 inline-flex h-10 items-center rounded-full border border-gray-200 px-4 label-m transition-colors hover:border-gray-950"
      >
        See Full Profile
      </Link>
    </aside>
  );
}

function LessonList({ course }: { course: CourseDetail }) {
  const more = course.lessonTotal - course.previewLessons.length;
  return (
    <div>
      <h2 className="heading-xs text-gray-950">
        {course.lessonTotal} Lessons ({course.hours} hours)
      </h2>
      <ol className="mt-6 space-y-4">
        {course.previewLessons.map((lesson, i) => (
          <li
            key={lesson.title}
            className="grid grid-cols-[auto_1fr_auto] gap-3 body-m font-medium text-gray-950"
          >
            <span className="font-medium">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="leading-tight">{lesson.title}</span>
            <span className="text-blue-800 font-normal">
              {lesson.minutes} mins
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-4 body-m text-gray-700">{more} more videos</p>
    </div>
  );
}

function About({ course }: { course: CourseDetail }) {
  return (
    <div>
      <h2 className="heading-xs text-gray-950">Description</h2>
      <div className="mt-6 space-y-6 body-m text-gray-700">
        {course.description.map((p) => (
          <p key={p.slice(0, 20)}>{p}</p>
        ))}
      </div>

      <h2 className="mt-10 heading-xs text-gray-950">Sneak Peak</h2>

      <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
        {course.sneakPeek.map((img, i) => (
          <div
            key={i}
            className="relative aspect-4/3 overflow-hidden rounded-xl"
          >
            <Image
              src={img}
              alt=""
              fill
              sizes="170px"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <h2 className="mt-10 heading-xs text-gray-950">Key Points</h2>
      <ul className="mt-6 space-y-4">
        {course.keyPoints.map((point) => (
          <li
            key={point}
            className="flex items-center gap-3 body-m text-gray-700"
          >
            <CircleCheck
              className="size-5 shrink-0 fill-blue-800 text-white"
              aria-hidden
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Lessons({ course }: { course: CourseDetail }) {
  return (
    <div>
      <h2 className="heading-xs text-gray-950">Explore the Modules</h2>
      <p className="mt-6 body-m text-gray-700">
        Immerse yourself in the course content as we break down each module into
        comprehensive lessons, providing practical insights and hands-on
        experiences.
      </p>

      <h2 className="mt-10 heading-xs text-gray-950">Lesson List</h2>
      <ul className="mt-6 space-y-6">
        {course.modules.map((module) => (
          <li key={module.title} className="flex items-center gap-4">
            <span className="flex size-15 shrink-0 items-center justify-center rounded-2xl bg-lime-400">
              <Video className="size-7  text-gray-950" aria-hidden />
            </span>
            <div>
              <h3 className="label-m text-gray-950">{module.title}</h3>
              <p className="mt-1 body-m text-gray-700">{module.summary}</p>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 heading-xs text-gray-950">Lesson Content</h2>
      <p className="mt-6 body-m text-gray-700">
        Engage with each lesson through captivating video content, detailed
        textual explanations, and interactive elements. Download resources,
        complete assignments, and test your understanding with quizzes.
      </p>

      <h2 className="mt-10 heading-xs text-gray-950">
        Lesson Progress Tracking
      </h2>
      <p className="mt-6 body-m text-gray-700">
        Witness your growth as you complete lessons, with an intuitive progress
        tracking feature guiding you through your learning journey.
      </p>
      <ProgressCard
        value={course.progress}
        className="mt-6 w-full border border-gray-200 shadow-none"
      />
    </div>
  );
}

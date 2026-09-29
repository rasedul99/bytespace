import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CourseCard } from "@/components/course-card";
import { CourseToolbar } from "@/components/courses/course-toolbar";
import { FollowButton } from "@/components/creator/follow-button";
import { GridLines } from "@/components/grid-lines";
import { Navbar } from "@/components/navbar";
import { creators, getCreator, getCreatorCourses } from "@/lib/creators";

export function generateStaticParams() {
  return creators.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/creators/[slug]">): Promise<Metadata> {
  const creator = getCreator((await params).slug);
  return {
    title: creator ? `${creator.name} · ByteSpace` : "Creator not found",
  };
}

export default async function CreatorPage({
  params,
}: PageProps<"/creators/[slug]">) {
  const creator = getCreator((await params).slug);
  if (!creator) notFound();

  const creatorCourses = getCreatorCourses(creator);

  return (
    <main>
      <section className="relative overflow-hidden bg-blue-800 px-4 pb-20 text-white">
        <GridLines />
        <Navbar />

        <div className="relative mx-auto max-w-300 pt-12">
          <div className="flex items-center gap-6">
            <span className="flex size-24 shrink-0 items-center justify-center rounded-3xl bg-[#f7a3a8] heading-m text-gray-950">
              {creator.name[0]}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="heading-s sm:heading-m">{creator.name}</h1>
                <span className="rounded-full bg-lime-400 px-5 py-1.5 label-m text-gray-950">
                  Creator
                </span>
              </div>
              <p className="mt-2 body-l text-gray-50">{creator.role}</p>
            </div>
          </div>

          <div className="mt-12 body-l text-gray-50">
            {creator.bio.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span className="flex h-11 items-center gap-2 rounded-full bg-white px-5 body-l text-gray-950">
              <span className="text-blue-800">{creatorCourses.length}</span>
              {creatorCourses.length === 1 ? "Product" : "Products"}
            </span>
            <FollowButton followers={creator.followers} />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pt-14 pb-24">
        <div className="mx-auto max-w-300">
          <CourseToolbar />
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {creatorCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

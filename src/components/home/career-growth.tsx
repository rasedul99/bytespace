import Image from "next/image";

import { CourseCard } from "@/components/course-card";
import { ProgressCard } from "@/components/progress-card";
import { courses } from "@/lib/courses";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export function CareerGrowth() {
  return (
    <section className="relative overflow-hidden bg-[#f5f6fb] px-4 py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_55%_at_32%_5%,rgb(212_255_26/0.35),transparent),radial-gradient(35%_50%_at_0%_100%,rgb(0_59_226/0.08),transparent)]"
      />

      <div className="relative mx-auto grid max-w-300 items-center gap-16 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-gray-950 sm:text-4xl">
            Your Path to Professional
            <br className="hidden sm:block" /> Growth Starts Here!
          </h2>
          <p className="mt-10 max-w-125 text-lg leading-relaxed text-gray-700">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>

          <dl className="mt-10 flex gap-18">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1">
                <dt className="text-lg text-gray-700">{stat.label}</dt>
                <dd className="font-heading text-4xl font-medium text-blue-800">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          inert
          className="relative mx-auto aspect-577/537 w-full max-w-xl lg:mr-0"
        >
          <div className="pointer-events-none absolute top-[-2%] left-0 w-[63%]">
            <CourseCard course={courses[0]} />
          </div>
          <Image
            src="/images/hero/student.svg"
            alt=""
            width={722}
            height={515}
            className="absolute left-[-5.4%] bottom-0 w-[132%] max-w-none [clip-path:inset(3%_0_0_0)]"
          />
          <Image
            src="/images/hero/spring-lime.svg"
            alt=""
            width={387}
            height={387}
            className="absolute left-[70%] top-[4%] w-[50%] -rotate-20"
          />
          <ProgressCard value={55} className="absolute left-[60%] top-[37%]" />
        </div>
      </div>
    </section>
  );
}

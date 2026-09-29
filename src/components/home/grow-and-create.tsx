import Image from "next/image";
import { CircleCheck } from "lucide-react";

import { CourseCard } from "@/components/course-card";
import { HappyStudentsCard } from "@/components/happy-students-card";
import { ProgressCard } from "@/components/progress-card";
import { courses } from "@/lib/courses";
import creator from "../../../public/images/creator/creator.webp";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export function GrowAndCreate() {
  return (
    <section className="relative overflow-hidden bg-[#f5f6fb] px-4 py-24 lg:py-28">
      {/* Figma glows — positions from the 1440×1460 frame, as % of the section */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[35%] top-[7%] size-284.25 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.40) 0%, rgba(203, 252, 1, 0.09) 53%, rgba(203, 252, 1, 0.02) 75%, rgba(203, 252, 1, 0.00) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-[96%] top-[7.6%] size-284.25 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.08) 0%, rgba(0, 59, 226, 0.02) 53%, rgba(0, 59, 226, 0.00) 75%, rgba(0, 59, 226, 0.00) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-[4%] top-[88%] size-168 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.60) 0%, rgba(203, 252, 1, 0.14) 53%, rgba(203, 252, 1, 0.04) 75%, rgba(203, 252, 1, 0.00) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-[90%] top-[93%] size-284.25 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.06) 53%, rgba(0, 59, 226, 0.01) 75%, rgba(0, 59, 226, 0.00) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-300 space-y-20 lg:space-y-20">
        {/* Learners */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
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
              className="absolute left-[-5%] bottom-0 w-[132%] max-w-none [clip-path:inset(3%_0_0_0)]"
            />
            <Image
              src="/images/hero/spring-lime.svg"
              alt=""
              width={387}
              height={387}
              className="absolute left-[70%] -top-2 w-[50%] rotate-140 z-50"
            />
            <ProgressCard
              value={55}
              className="absolute left-[60%] top-[37%]"
            />
          </div>
        </div>

        {/* Creators */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div
            aria-hidden
            className="relative mx-auto aspect-548/561 w-full max-w-137 lg:ml-0"
          >
            <div className="absolute left-6 top-3 z-0 w-58 rounded-2xl bg-blue-800 p-4 text-white shadow-[0_8px_24px_rgb(0_59_226/0.25)]">
              <p className="text-base font-medium">Total Revenue</p>
              <p className="text-[10px] text-gray-50">July 1-28</p>
              <p className="mt-2 font-heading text-2xl font-semibold">
                $120.29
              </p>
              <div className="mt-3 h-1.5 rounded-full bg-white">
                <div className="h-full w-[50%] rounded-full bg-lime-400" />
              </div>
            </div>

            <div className="absolute left-6 top-[30%] z-0 w-34 rounded-2xl bg-blue-800 p-4 text-white shadow-[0_8px_24px_rgb(0_59_226/0.25)]">
              <p className="text-base font-medium">Year to Date</p>
              <p className="text-[10px] text-gray-50">2023</p>
              <p className="mt-2 font-heading text-2xl font-semibold">
                $1,200.38
              </p>
              <span className="mt-2 inline-block rounded-full bg-lime-400 px-2 py-0.5 text-[10px] font-semibold text-gray-950">
                +12$
              </span>
            </div>

            <Image
              src={creator}
              alt=""
              sizes="340px"
              className="absolute bottom-0 left-[19%] z-10 h-full w-auto"
            />
            <Image
              src="/images/hero/spring-lime.svg"
              alt=""
              width={387}
              height={387}
              className="absolute left-[55%] top-[12%] z-20 w-[38%]"
            />

            <HappyStudentsCard className="absolute left-[52%] top-[66%] z-30" />
          </div>

          <div>
            <h2 className="text-4xl font-semibold leading-tight text-gray-950 sm:text-[44px]">
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p className="mt-10 max-w-137 text-lg leading-relaxed text-gray-700">
              <strong className="font-bold text-gray-950">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-10 space-y-4.5">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2.5 text-xl font-medium text-gray-950"
                >
                  <CircleCheck
                    className="size-5 fill-blue-800 text-white"
                    aria-hidden
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

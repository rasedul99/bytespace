import Image from "next/image";
import { CircleCheck } from "lucide-react";

import { HappyStudentsCard } from "@/components/happy-students-card";

const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export function CreateCourses() {
  return (
    <section className="relative overflow-hidden bg-[#f5f6fb] px-4 py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_45%_at_0%_90%,rgb(212_255_26/0.3),transparent),radial-gradient(35%_50%_at_90%_95%,rgb(0_59_226/0.12),transparent)]"
      />

      <div className="relative mx-auto grid max-w-300 items-center gap-16 lg:grid-cols-2">
        <div
          aria-hidden
          className="relative mx-auto aspect-548/561 w-full max-w-137 lg:ml-0"
        >
          <Image
            src="/images/creator/creator.svg"
            alt=""
            width={340}
            height={560}
            className="absolute bottom-0 left-[14%] h-full w-auto mask-b-from-80%"
          />
          <Image
            src="/images/hero/spring-lime.svg"
            alt=""
            width={387}
            height={387}
            className="absolute left-[55%] top-[12%] w-[38%] -rotate-30"
          />

          <div className="absolute left-0 top-[1%] w-55.75 rounded-2xl bg-blue-800 p-4 text-white shadow-[0_8px_24px_rgb(0_59_226/0.25)]">
            <p className="text-sm">Total Revenue</p>
            <p className="text-[10px] text-white/70">July 1-31</p>
            <p className="mt-2 font-heading text-2xl font-semibold">$120.29</p>
            <div className="mt-3 h-1.5 rounded-full bg-white/30">
              <div className="h-full w-[70%] rounded-full bg-lime-400" />
            </div>
          </div>

          <div className="absolute left-0 top-[28%] w-34 rounded-2xl bg-blue-800 p-4 text-white shadow-[0_8px_24px_rgb(0_59_226/0.25)]">
            <p className="text-sm">Year to Date</p>
            <p className="text-[10px] text-white/70">2022</p>
            <p className="mt-2 font-heading text-2xl font-semibold">
              $1,200.38
            </p>
            <span className="mt-2 inline-block rounded-full bg-lime-400 px-2 py-0.5 text-[10px] font-semibold text-gray-950">
              +12%
            </span>
          </div>

          <HappyStudentsCard className="absolute left-[52%] top-[66%]" />
        </div>

        <div>
          <h2 className="text-4xl font-semibold leading-tight text-gray-950 sm:text-5xl">
            Create &amp; Manage
            <br />
            Courses Easily.
          </h2>
          <p className="mt-8 max-w-137 text-base leading-relaxed text-neutral-500">
            <strong className="font-bold text-gray-950">ByteSpace</strong>{" "}
            supports individuals or entities in the creation, publication, and
            administration of educational courses.
          </p>
          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 text-base text-gray-950"
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
    </section>
  );
}

import Image from "next/image";
import { Search } from "lucide-react";

import { GridLines } from "@/components/grid-lines";
import { HappyStudentsCard } from "@/components/happy-students-card";
import { Navbar } from "@/components/navbar";
import { ProgressCard } from "@/components/progress-card";
import coneWhite from "../../../public/images/hero/cone-white.webp";
import cylinderLime from "../../../public/images/hero/cylinder-lime.webp";
import ringWhite from "../../../public/images/hero/ring-white.webp";

const art = {
  student: "/images/hero/student.svg",
  arc: "/images/hero/student-arc.svg",
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-800 text-white">
      <GridLines />

      {/* 3D shapes from the design, behind the content; hidden below lg. */}
      {/* Shapes cut off by the edge stay pinned to the screen edges... */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        {/* lime spring, left edge */}
        <Image
          src="/images/hero/spring-lime.webp"
          alt=""
          width={387}
          height={387}
          className="absolute -left-25 top-[23%] w-100"
        />
        {/* lime cylinder against the right edge */}
        <Image src={cylinderLime} alt="" className="absolute right-0 top-[25%] w-44" />
      </div>

      {/* ...the rest stay inside the 1440px design frame, near the content,
          so they don't drift apart on very wide screens (or when zoomed out). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-360 -translate-x-1/2 lg:block"
      >
        {/* white squiggle — same spring, turned white */}
        <Image
          src="/images/hero/spring-lime.webp"
          alt=""
          width={387}
          height={387}
          className="absolute left-[13%] top-[46%] w-50 -rotate-45 brightness-0 invert"
        />
        {/* white ring, bottom-left */}
        <Image src={ringWhite} alt="" className="absolute left-14 top-[71%] w-55" />
        {/* white cone, right */}
        <Image src={coneWhite} alt="" className="absolute left-[78%] top-[48%] w-32" />
        {/* white squiggle, bottom-right */}
        <Image
          src="/images/hero/spring-lime.webp"
          alt=""
          width={387}
          height={387}
          className="absolute left-[82%] top-[64%] w-75 rotate-12 brightness-0 invert"
        />
      </div>

      <Navbar />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pt-16 text-center sm:px-6 sm:pt-20">
        <h1 className="max-w-4xl heading-s sm:heading-l">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mt-5 body-s text-gray-100 sm:body-l">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          action="/courses"
          className="mt-14 flex w-full max-w-xl items-center gap-4"
        >
          <label className="flex h-13 flex-1 items-center gap-2 rounded-full bg-white px-6 text-neutral-900">
            <Search className="size-5 shrink-0 text-neutral-500" />
            <input
              name="q"
              type="search"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent body-l outline-none placeholder:text-gray-400"
            />
          </label>
          <button
            type="submit"
            className="h-12 rounded-full bg-lime-400 px-6 label-s text-gray-950 transition hover:brightness-95"
          >
            Search
          </button>
        </form>
      </div>

      <div className="relative left-1/2 z-10 mt-4 aspect-1149/515 w-[160%] max-w-287 -translate-x-1/2 md:w-full">
        <Image
          src={art.arc}
          alt=""
          width={1149}
          height={442}
          className="absolute inset-x-0 bottom-0 w-full"
        />
        <Image
          src={art.student}
          alt="Smiling student with headphones holding a laptop"
          width={722}
          height={515}
          priority
          className="absolute bottom-0 left-[23.2%] w-[62.8%]"
        />

        <div className="absolute left-[22.5%] top-[25.4%] hidden rounded-2xl bg-white p-4 text-left shadow-[0_8px_24px_rgb(0_0_0/0.08)] md:block">
          <p className="label-m text-gray-950">UI/UX Design</p>
          <p className="mt-0.5 body-xs text-gray-400">
            200 Courses &nbsp;•&nbsp; 1000+ Students
          </p>
        </div>

        <ProgressCard
          value={55}
          className="absolute left-[60.6%] top-[27.8%] hidden md:block"
        />

        <HappyStudentsCard className="absolute left-[15.9%] top-[63.7%] hidden md:block" />
      </div>
    </section>
  );
}

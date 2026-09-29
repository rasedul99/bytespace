import Image from "next/image";
import { Search } from "lucide-react";

import { GridLines } from "@/components/grid-lines";
import { HappyStudentsCard } from "@/components/happy-students-card";
import { Navbar } from "@/components/navbar";
import { ProgressCard } from "@/components/progress-card";

const art = {
  student: "/images/hero/student.svg",
  arc: "/images/hero/student-arc.svg",
  spring: "/images/hero/spring.svg",
  squiggle: "/images/hero/squiggle.svg",
  ring: "/images/hero/ring.svg",
  cone: "/images/hero/cone.svg",
  cylinder: "/images/hero/cylinder.svg",
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-800 text-white h-dvh">
      <GridLines />

      {/* floating shapes */}
      {/* <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <Image
          src={art.spring}
          alt=""
          width={140}
          height={230}
          className="absolute -left-4 top-72 w-32 -rotate-12"
        />
        <Image
          src={art.squiggle}
          alt=""
          width={110}
          height={90}
          className="absolute left-[18%] top-[34rem] w-24"
        />
        <Image
          src={art.ring}
          alt=""
          width={200}
          height={200}
          className="absolute left-[8%] bottom-10 w-44"
        />
        <Image
          src={art.cylinder}
          alt=""
          width={180}
          height={240}
          className="absolute -right-6 top-72 w-40"
        />
        <Image
          src={art.cone}
          alt=""
          width={130}
          height={130}
          className="absolute right-[12%] top-[34rem] w-28"
        />
        <Image
          src={art.squiggle}
          alt=""
          width={150}
          height={120}
          className="absolute right-[4%] bottom-16 w-36 rotate-90"
        />
      </div> */}

      <Navbar />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pt-16 text-center sm:px-6 sm:pt-20">
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-7xl sm:leading-[1.15]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mt-5  text-sm text-gray-100 sm:text-lg">
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
              className="w-full bg-transparent text-lg outline-none placeholder:text-gray-400"
            />
          </label>
          <button
            type="submit"
            className="h-12 rounded-full bg-lime-400 px-6 text-sm font-medium text-gray-950 transition hover:brightness-95"
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
          <p className="text-base text-gray-950">UI/UX Design</p>
          <p className="mt-0.5 text-xs text-gray-400">
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

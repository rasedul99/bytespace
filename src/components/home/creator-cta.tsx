import Image from "next/image";
import Link from "next/link";

import { GridLines } from "@/components/grid-lines";

export function CreatorCta() {
  return (
    <section className="relative overflow-hidden bg-blue-800 px-4 py-24 text-white">
      <GridLines />

      <Image
        src="/images/hero/spring-lime.svg"
        alt=""
        width={387}
        height={387}
        className="pointer-events-none absolute -left-24 -top-16 hidden w-72 rotate-12 md:block"
      />

      <div className="relative mx-auto max-w-240 text-center">
        <h2 className="text-3xl font-semibold leading-tight sm:text-[44px]">
          Unlock Your Potential as a
          <br className="hidden sm:block" /> Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-8 max-w-225 text-[15px] leading-relaxed text-white/85">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Link
          href="/join"
          className="mt-10 inline-flex h-11 items-center rounded-full bg-lime-400 px-6 text-sm font-medium text-gray-950 transition hover:brightness-95"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}

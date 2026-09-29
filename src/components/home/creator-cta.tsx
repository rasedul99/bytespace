import Image from "next/image";
import Link from "next/link";

import { GridLines } from "@/components/grid-lines";
import coneLime from "../../../public/images/creator-cta/cone-lime.webp";
import coneWhite from "../../../public/images/creator-cta/cone-white.webp";
import cylinderWhite from "../../../public/images/creator-cta/cylinder-white.webp";
import ringLime from "../../../public/images/creator-cta/ring-lime.webp";

export function CreatorCta() {
  return (
    <section className="relative overflow-hidden bg-blue-800 px-4 py-24 text-white">
      <GridLines />

      {/* Shapes cut off by the edge stay pinned to the screen edges... */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
      >
        <Image
          src="/images/hero/spring-lime.webp"
          alt=""
          width={387}
          height={387}
          className="absolute -left-20 -top-10 w-56 rotate-12"
        />

        <Image
          src={coneWhite}
          alt=""
          className="absolute left-0 top-[49%] w-29"
        />

        <Image
          src={cylinderWhite}
          alt=""
          className="absolute right-0 top-10 w-40"
        />
      </div>

      {/* ...the rest stay inside the 1440px design frame, near the content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-360 -translate-x-1/2 md:block"
      >
        <Image
          src="/images/hero/spring-lime.webp"
          alt=""
          width={387}
          height={387}
          className="absolute left-[13%] top-2 w-44 -rotate-45 brightness-0 invert"
        />

        <Image
          src={ringLime}
          alt=""
          className="absolute left-16 top-[81%] w-55"
        />

        <Image
          src={coneLime}
          alt=""
          className="absolute left-[78%] top-5 w-41"
        />

        <Image
          src="/images/hero/spring-lime.webp"
          alt=""
          width={387}
          height={387}
          className="absolute -bottom-20 left-[80%] w-52 -rotate-220"
        />
      </div>

      <div className="relative mx-auto max-w-240 text-center">
        <h2 className="text-3xl font-semibold leading-tight sm:text-[44px] text-gray-50">
          Unlock Your Potential as a
          <br className="hidden sm:block" /> Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-10 max-w-210 text-lg leading-relaxed text-gray-50">
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

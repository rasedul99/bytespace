import Image from "next/image";
import Link from "next/link";

import { CourseCard } from "@/components/course-card";
import { GridLines } from "@/components/grid-lines";
import { HappyStudentsCard } from "@/components/happy-students-card";
import { courses } from "@/lib/courses";
import coneLime from "../../../public/images/creator-cta/cone-lime.webp";
import ringLime from "../../../public/images/creator-cta/ring-lime.webp";
import { AuthIntro } from "./auth-intro";

export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <main className="relative flex min-h-dvh overflow-hidden bg-blue-800 px-4 py-10">
      <GridLines />

      <div className="relative mx-auto grid w-full max-w-300 items-start gap-16 lg:grid-cols-[1fr_584px]">
        <div className="text-white">
          <Link href="/" aria-label="ByteSpace home">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={29}
              height={35}
              priority
            />
          </Link>
          <AuthIntro />

          <div inert className="relative mt-16 hidden h-150 w-122.5 xl:block">
            <div className="absolute left-0 top-24 w-94">
              <CourseCard
                course={courses[1]}
                classes={{ countClassName: "text-white bg-black" }}
              />
            </div>
            <div className="absolute left-27 top-0 w-95">
              <CourseCard
                course={courses[2]}
                classes={{ countClassName: "text-white bg-black" }}
              />
            </div>
            <HappyStudentsCard
              tone="lime"
              className="absolute left-56 top-110"
            />

            {/* shapes, in front of the cards */}
            <Image
              src={ringLime}
              alt=""
              className="absolute left-12 top-11 w-33"
            />
            <Image
              src="/images/hero/spring-lime.webp"
              alt=""
              width={387}
              height={387}
              className="absolute left-84 top-72 w-56 -rotate-30 brightness-0 invert"
            />
            <Image
              src={coneLime}
              alt=""
              className="absolute -left-2 top-103 w-38"
            />
          </div>
        </div>

        {children}
      </div>
    </main>
  );
}

import { Brands } from "@/components/home/brands";
import { CareerGrowth } from "@/components/home/career-growth";
import { Courses } from "@/components/home/courses";
import { CreateCourses } from "@/components/home/create-courses";
import { CreatorCta } from "@/components/home/creator-cta";
import { Hero } from "@/components/home/hero";
import { LearningPaths } from "@/components/home/learning-paths";
import { Testimonials } from "@/components/home/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Courses />
      <LearningPaths />
      <CareerGrowth />
      <CreateCourses />
      <CreatorCta />
      <Testimonials />
    </main>
  );
}

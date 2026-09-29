import { Brands } from "@/components/home/brands";
import { Courses } from "@/components/home/courses";
import { CreatorCta } from "@/components/home/creator-cta";
import { GrowAndCreate } from "@/components/home/grow-and-create";
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
      <GrowAndCreate />
      <CreatorCta />
      <Testimonials />
    </main>
  );
}

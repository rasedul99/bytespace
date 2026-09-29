import { CourseCard } from "@/components/course-card";
import { CategoryFilter } from "@/components/home/category-filter";
import { courses } from "@/lib/courses";

export function Courses() {
  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-300">
        <div className="text-center">
          <h2 className="text-4xl font-semibold leading-tight text-[#040819] sm:text-[44px]">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mx-auto mt-4 max-w-230 text-lg text-gray-400">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <div className="mt-10.5">
          <CategoryFilter />
        </div>

        <div className="mt-19 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

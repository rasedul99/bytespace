import { CourseBrowser } from "@/components/home/course-browser";
import { courses } from "@/lib/courses";

export function Courses() {
  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-300">
        <div className="text-center">
          <h2 className="heading-s text-[#040819] sm:heading-m">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mx-auto mt-4 max-w-230 body-l text-gray-400">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <CourseBrowser courses={courses} />
      </div>
    </section>
  );
}

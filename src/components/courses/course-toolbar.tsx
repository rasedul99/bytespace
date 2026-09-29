import {
  ChartNoAxesColumnIncreasing,
  Funnel,
  ListFilter,
  Shapes,
} from "lucide-react";

const button =
  "flex h-11 items-center gap-2 rounded-full border border-gray-200 px-4 label-s text-gray-950 transition-colors hover:border-gray-950";

export function CourseToolbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-3">
        <button type="button" className={button}>
          <Funnel className="size-4" aria-hidden />
          Filter
        </button>
        <button type="button" className={button}>
          <ChartNoAxesColumnIncreasing className="size-4" aria-hidden />
          Level
        </button>
        <button type="button" className={button}>
          <Shapes className="size-4" aria-hidden />
          Category
        </button>
      </div>
      <button type="button" className={button}>
        <ListFilter className="size-4" aria-hidden />
        Most relevant
      </button>
    </div>
  );
}

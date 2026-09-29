import { cn } from "@/lib/utils";

export function ProgressCard({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-58.25 rounded-2xl bg-white p-4 text-left shadow-[0_8px_24px_rgb(0_0_0/0.08)]",
        className,
      )}
    >
      <p className="label-s text-gray-950">Learning Progress</p>
      <p className="mt-3 heading-m text-gray-950">
        {value}%
      </p>
      <div className="mt-3 h-2 rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-lime-400"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

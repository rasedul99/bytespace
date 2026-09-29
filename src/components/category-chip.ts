import { cn } from "@/lib/utils";

export function chipClass(active: boolean) {
  return cn(
    "flex h-10.5 items-center rounded-full px-4 body-m text-gray-700 transition-colors",
    active ? "bg-lime-400" : "bg-gray-50 hover:bg-gray-100",
  );
}

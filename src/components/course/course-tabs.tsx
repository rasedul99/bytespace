"use client";

import { useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export function CourseTabs({
  tabs,
}: {
  tabs: { label: string; content: ReactNode }[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div role="tablist" className="flex gap-3">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            id={`tab-${i}`}
            aria-selected={active === i}
            aria-controls={`panel-${i}`}
            onClick={() => setActive(i)}
            className={cn(
              "h-10.5 rounded-full px-4 body-m text-gray-700 transition-colors",
              active === i ? "bg-lime-400 text-gray-950" : "bg-gray-50 hover:bg-gray-100",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`} className="mt-10">
        {tabs[active].content}
      </div>
    </div>
  );
}

import Image from "next/image";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";
import avatarOne from "../../public/images/avatars/one.png";
import avatarTwo from "../../public/images/avatars/two.png";
import avatarThree from "../../public/images/avatars/three.png";
import avatarFour from "../../public/images/avatars/four.png";

const avatars = [
  avatarOne,
  avatarTwo,
  avatarThree,
  avatarFour,
  avatarOne,
  avatarTwo,
];

export function HappyStudentsCard({
  tone = "white",
  className,
}: {
  tone?: "white" | "lime";
  className?: string;
}) {
  const lime = tone === "lime";

  return (
    <div
      className={cn(
        "rounded-2xl p-4 text-left shadow-[0_8px_24px_rgb(0_0_0/0.08)]",
        lime ? "bg-lime-400" : "bg-white",
        className,
      )}
    >
      <p className="label-m text-gray-950">Happy Students</p>
      <p
        className={cn(
          "flex items-center gap-1 body-xs",
          lime ? "text-gray-950/60" : "text-gray-400",
        )}
      >
        <span className="font-semibold text-gray-950">4.5 </span> (240){" "}
        <Star
          className={cn(
            "size-4",
            lime
              ? "fill-blue-800 text-blue-800"
              : "fill-lime-400 text-lime-400",
          )}
        />
      </p>
      <div className="mt-2 flex -space-x-3">
        {avatars.map((avatar, i) => (
          <Image
            key={i}
            src={avatar}
            alt=""
            className="size-10.75 rounded-full"
          />
        ))}
        <span
          className={cn(
            "flex size-10 items-center justify-center rounded-full border-2 label-xs",
            lime
              ? "border-lime-400 bg-gray-950 text-white"
              : "border-white bg-lime-400 text-gray-950",
          )}
        >
          2K+
        </span>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

export function FollowButton({ followers }: { followers: number }) {
  const [following, setFollowing] = useState(false);
  const count = followers + (following ? 1 : 0);

  return (
    <>
      <span className="flex h-11 items-center gap-2 rounded-full bg-white px-5 body-l text-gray-950">
        <span className="text-blue-800">{count}</span>
        {count === 1 ? "Follower" : "Followers"}
      </span>
      <button
        type="button"
        aria-pressed={following}
        onClick={() => setFollowing((f) => !f)}
        className={cn(
          "ml-auto flex h-11 items-center rounded-full px-5 label-l transition",
          following
            ? "border border-lime-400 text-lime-400 hover:bg-lime-400/10"
            : "bg-lime-400 text-gray-950 hover:brightness-95",
        )}
      >
        {following ? "Following" : "Follow"}
      </button>
    </>
  );
}

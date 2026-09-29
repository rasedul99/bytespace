"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";

export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {}
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={share}
      className="flex h-11 shrink-0 items-center gap-2 rounded-full bg-lime-400 px-5 label-m text-gray-950 transition hover:brightness-95"
    >
      <Share2 className="size-5" aria-hidden />
      {copied ? "Link copied" : "Share"}
    </button>
  );
}

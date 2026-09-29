import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

// "light" = white text for blue backgrounds, "dark" = dark text for white backgrounds.
export function Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link href="/" className={cn("shrink-0", className)}>
      <Image
        src={variant === "light" ? "/images/logo.png" : "/images/logo-dark.png"}
        alt="ByteSpace"
        width={171}
        height={35}
        priority={variant === "light"}
        className="h-8 w-auto"
      />
    </Link>
  );
}

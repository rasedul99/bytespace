import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { Logo } from "@/components/logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/creators", label: "Creators" },
];

export function Navbar() {
  return (
    <header className="relative z-20 mx-auto flex h-20 max-w-300 items-center justify-between px-4 sm:px-0">
      <Logo />

      <nav className="hidden items-center gap-8 body-s text-white/80 md:flex">
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              i === 0
                ? "font-medium text-white"
                : "transition-colors hover:text-white"
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-6 body-s text-white/80">
        <Link
          href="/sign-in"
          className="hidden transition-colors hover:text-white sm:block"
        >
          Sign In
        </Link>
        <Link
          href="/join"
          className="hidden transition-colors hover:text-white sm:block"
        >
          Join Us
        </Link>
        <Link href="/cart" aria-label="Cart" className="text-white">
          <ShoppingBag className="size-5" />
        </Link>
      </div>
    </header>
  );
}

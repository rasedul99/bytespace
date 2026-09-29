import Link from "next/link";

import { Logo } from "@/components/logo";

const linkColumns = [
  [
    { href: "/courses?featured=true", label: "Featured Courses" },
    { href: "/categories", label: "Featured Categories" },
    { href: "/courses?category=business", label: "Business" },
    { href: "/courses?category=it-software", label: "IT" },
    { href: "/courses?category=design", label: "Design" },
  ],
  [
    { href: "/courses?category=development", label: "Development" },
    { href: "/courses?category=marketing", label: "Marketing" },
    { href: "/courses?category=photography", label: "Photography" },
    { href: "/courses?category=finance", label: "Finance" },
    { href: "/courses?category=sport", label: "Sport" },
  ],
  [
    { href: "/join", label: "Become a Creator" },
    { href: "/affiliate", label: "Affiliate Program" },
    { href: "/contact", label: "Contact" },
    { href: "/help", label: "Help" },
    { href: "/about", label: "About" },
  ],
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Settings" },
];

export function Footer() {
  return (
    <footer className="bg-white px-4 py-18">
      <div className="mx-auto max-w-300">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Logo variant="dark" />
            <p className="mt-4 body-s text-gray-950">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form className="mt-12 flex max-w-125 items-center gap-3">
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-13 min-w-0 flex-1 rounded-full border border-gray-200 px-6 body-m text-gray-950 outline-none placeholder:text-gray-950 focus:border-lime-400"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-lime-400 px-7 label-s text-gray-950 transition hover:brightness-95"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-6 max-w-100 body-xs text-gray-950">
              By subscribing, you agree to our{" "}
              <Link
                href="/privacy"
                className="underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3"
          >
            {linkColumns.map((column, i) => (
              <ul key={i} className="space-y-4">
                {column.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="body-s text-gray-950 transition-colors hover:text-blue-800"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-35.5 flex flex-col-reverse gap-4 border-t border-gray-200 pt-5.5 body-xs text-gray-950 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-blue-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { usePathname } from "next/navigation";

const copy = {
  "/join": {
    title: "Sign up and come in",
    body: "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
  },
  "/sign-in": {
    title: "Sign in with ease",
    body: "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
  },
};

export function AuthIntro() {
  const pathname = usePathname();
  const { title, body } = copy[pathname as keyof typeof copy] ?? copy["/join"];

  return (
    <>
      <p className="mt-12 font-heading text-xl font-semibold">{title}</p>
      <p className="mt-4 max-w-118 text-lg leading-relaxed text-gray-50">
        {body}
      </p>
    </>
  );
}

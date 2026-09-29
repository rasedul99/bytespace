"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete: string;
};

export function AuthForm({
  eyebrow,
  title,
  fields,
  submitLabel = "Continue",
  children,
  footer,
}: {
  eyebrow: string;
  title: ReactNode;
  fields: Field[];
  submitLabel?: string;
  /** Rendered between the form and the footer link, e.g. social sign-in. */
  children?: ReactNode;
  footer: { text: string; linkLabel: string; href: string };
}) {
  return (
    <div className="flex flex-col rounded-3xl bg-white p-8 sm:p-16 lg:mt-20 lg:min-h-198">
      <p className="text-lg text-blue-800">{eyebrow}</p>
      <h1 className="mt-2 text-4xl font-semibold leading-tight text-gray-950 sm:text-[44px]">
        {title}
      </h1>

      <form
        className="mt-10 flex flex-col"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-6">
          {fields.map((field) => (
            <label key={field.name} className="block">
              <span className="text-sm font-medium text-gray-950">
                {field.label}
              </span>
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                required
                className="mt-2 h-13 w-full rounded-xl border border-gray-100 px-5 text-[15px] text-gray-950 outline-none transition-colors placeholder:text-gray-400 focus:border-blue-800"
              />
            </label>
          ))}
        </div>
        <button
          type="submit"
          className="mt-8 h-11 self-end rounded-full bg-lime-400 px-6 text-[17px] font-medium text-gray-950 transition hover:brightness-95"
        >
          {submitLabel}
        </button>
      </form>

      {children}

      <p className="mt-16 pt-8 text-center text-base text-gray-700 lg:mt-auto">
        {footer.text}{" "}
        <Link href={footer.href} className="text-blue-800 hover:underline">
          {footer.linkLabel}
        </Link>
      </p>
    </div>
  );
}

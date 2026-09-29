import Link from "next/link";
import {
  Building2,
  Camera,
  CodeXml,
  Laptop,
  Megaphone,
  PencilRuler,
} from "lucide-react";

const paths = [
  { label: "Design", slug: "design", icon: PencilRuler },
  { label: "Development", slug: "development", icon: CodeXml },
  { label: "IT & Software", slug: "it-software", icon: Laptop },
  { label: "Business", slug: "business", icon: Building2 },
  { label: "Marketing", slug: "marketing", icon: Megaphone },
  { label: "Photography", slug: "photography", icon: Camera },
];

export function LearningPaths() {
  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-300">
        <div className="text-center">
          <h2 className="heading-s text-[#040819] sm:heading-m">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto mt-4 max-w-230 body-l text-gray-400">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
          {paths.map(({ label, slug, icon: Icon }) => (
            <li key={slug}>
              <Link
                href={`/courses?category=${slug}`}
                className="flex aspect-square flex-col items-center justify-center gap-5 rounded-2xl border border-gray-200 bg-white transition-colors hover:border-lime-400"
              >
                <span className="flex size-15 items-center justify-center rounded-full bg-lime-400 text-gray-950">
                  <Icon className="size-9" strokeWidth={1.5} aria-hidden />
                </span>
                <span className="label-l text-gray-950">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

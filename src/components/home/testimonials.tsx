import Image, { type StaticImageData } from "next/image";

import alexB from "../../../public/images/testimonials/alex-b.webp";
import jamesL from "../../../public/images/testimonials/james-l.webp";
import sarahM from "../../../public/images/testimonials/sarah-m.webp";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  photo?: StaticImageData;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    photo: sarahM,
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    photo: jamesL,
    role: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    photo: alexB,
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-4 py-16 lg:py-18">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-full size-284.25 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.06) 53%, rgba(0, 59, 226, 0.01) 75%, rgba(0, 59, 226, 0.00) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-[50%] top-[15%] size-168 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.60) 0%, rgba(203, 252, 1, 0.14) 53%, rgba(203, 252, 1, 0.04) 75%, rgba(203, 252, 1, 0.00) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-full top-[40%] size-284.25 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.40) 0%, rgba(203, 252, 1, 0.09) 53%, rgba(203, 252, 1, 0.02) 75%, rgba(203, 252, 1, 0.00) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-300">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 className="text-3xl font-semibold leading-tight text-gray-950 sm:text-[44px]">
            Discover What Our
            <br className="hidden sm:block" /> Community Is Saying
          </h2>
          <p className="text-lg text-black-700 leading-[1.6]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-18 grid items-start gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-white p-6">
              {t.photo ? (
                <Image
                  src={t.photo}
                  alt=""
                  className="size-20 rounded-full object-cover"
                />
              ) : (
                <span className="flex size-20 items-center justify-center rounded-full bg-gray-100 font-heading text-xl font-semibold text-gray-400">
                  {t.name[0]}
                </span>
              )}
              <figcaption className="mt-6">
                <p className="font-heading text-xl font-semibold text-gray-950">
                  {t.name}
                </p>
                <p className="text-xl text-blue-800">{t.role}</p>
              </figcaption>
              <blockquote className="mt-6 text-lg leading-8 text-neutral-600">
                &quot;{t.quote}&quot;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

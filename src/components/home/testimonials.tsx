import Image, { type StaticImageData } from "next/image";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  photo?: StaticImageData;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#f5f6fb] px-4 py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_15%,rgb(212_255_26/0.35),transparent),radial-gradient(30%_50%_at_100%_30%,rgb(212_255_26/0.3),transparent),radial-gradient(30%_45%_at_0%_95%,rgb(0_59_226/0.12),transparent)]"
      />

      <div className="relative mx-auto max-w-300">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <h2 className="text-3xl font-semibold leading-tight text-gray-950 sm:text-[44px]">
            Discover What Our
            <br className="hidden sm:block" /> Community Is Saying
          </h2>
          <p className="text-base leading-7.5 text-neutral-600">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-20 grid items-start gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-white p-6">
              {t.photo ? (
                <Image
                  src={t.photo}
                  alt=""
                  className="size-20 rounded-full object-cover"
                />
              ) : (
                // Placeholder until the photo is exported from Figma.
                <span className="flex size-20 items-center justify-center rounded-full bg-gray-100 font-heading text-xl font-semibold text-gray-400">
                  {t.name[0]}
                </span>
              )}
              <figcaption className="mt-6">
                <p className="font-heading text-xl font-semibold text-gray-950">
                  {t.name}
                </p>
                <p className="text-base text-blue-800">{t.role}</p>
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

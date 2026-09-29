import { courses } from "@/lib/courses";

export type Creator = {
  slug: string;
  name: string;
  courseCreator: string;
  role: string;
  bio: string[];
  followers: number;
};

export const creators: Creator[] = [
  {
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    courseCreator: "purepearl studio",
    role: "Passionate UI/UX, Web designer",
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you’ll discover the passion, expertise, and inspiration that drive my creative journey. Let’s explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    followers: 12,
  },
];

export function getCreator(slug: string) {
  return creators.find((c) => c.slug === slug);
}

export function getCreatorByCourseName(name: string) {
  return creators.find((c) => c.courseCreator === name);
}

export function getCreatorCourses(creator: Creator) {
  return courses.filter((c) => c.creator === creator.courseCreator);
}

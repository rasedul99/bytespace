export const FEATURED = "Featured";

export const categories = [
  FEATURED,
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export function inCategory(
  course: { categories: string[]; featured?: boolean },
  category: string,
) {
  return category === FEATURED
    ? !!course.featured
    : course.categories.includes(category);
}

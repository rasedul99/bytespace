import type { Course } from "@/components/course-card";
import avatarOne from "../../public/images/avatars/one.png";
import avatarTwo from "../../public/images/avatars/two.png";
import avatarThree from "../../public/images/avatars/three.png";
import avatarFour from "../../public/images/avatars/four.png";
import learnFigmaFromBasic from "../../public/images/courses/learn-figma-from-basic.webp";
import buildDigitalAsset from "../../public/images/courses/build-digital-asset.webp";
import thePowerOfBigData from "../../public/images/courses/the-power-of-big-data.webp";
import balancingProductivityAndWellbeing from "../../public/images/courses/balancing-productivity-and-wellbeing.webp";
import masteringMoneyManagement from "../../public/images/courses/mastering-money-management.webp";
import fromIdeaToStartupSuccess from "../../public/images/courses/from-idea-to-startup-success.webp";

const students = [avatarOne, avatarTwo, avatarThree, avatarFour];

export const courses: Course[] = [
  {
    slug: "learn-figma-from-basic",
    categories: ["UI/UX Design", "Graphic Design", "Web Development"],
    featured: true,
    image: learnFigmaFromBasic,
    title: "Learn Figma from Basic",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    students,
    studentCount: "26+",
    price: 25,
  },
  {
    slug: "build-digital-asset",
    categories: ["Digital Illustration", "Graphic Design", "Creative Marketing"],
    featured: true,
    image: buildDigitalAsset,
    title: "Build Digital Asset",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    students,
    studentCount: "26+",
    price: 25,
  },
  {
    slug: "the-power-of-big-data",
    categories: ["Data Science", "Productivity"],
    featured: true,
    image: thePowerOfBigData,
    title: "the Power of Big Data",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    students,
    studentCount: "26+",
    price: 25,
  },
  {
    slug: "balancing-productivity-and-wellbeing",
    categories: ["Productivity"],
    featured: true,
    image: balancingProductivityAndWellbeing,
    title: "Balancing Productivity and Wellbeing",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    students,
    studentCount: "26+",
    price: 25,
  },
  {
    slug: "mastering-money-management",
    categories: ["Freelance & Entrepreneurship", "Productivity"],
    featured: true,
    image: masteringMoneyManagement,
    title: "Mastering Money Management",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    students,
    studentCount: "26+",
    price: 25,
  },
  {
    slug: "from-idea-to-startup-success",
    categories: ["Freelance & Entrepreneurship", "Marketing"],
    featured: true,
    image: fromIdeaToStartupSuccess,
    title: "From Idea to Startup Success",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner",
    students,
    studentCount: "26+",
    price: 25,
  },
];

export const COURSES_PER_PAGE = 18;

export const catalog: Course[] = Array.from(
  { length: COURSES_PER_PAGE * 5 },
  (_, i) => courses[i % courses.length],
);

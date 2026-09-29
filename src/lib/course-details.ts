import type { StaticImageData } from "next/image";

import { courses } from "@/lib/courses";
import avatarOne from "../../public/images/avatars/one.png";
import avatarTwo from "../../public/images/avatars/two.png";
import avatarThree from "../../public/images/avatars/three.png";
import avatarFour from "../../public/images/avatars/four.png";
import type { Course } from "@/components/course-card";

export type Review = {
  name: string;
  role: string;
  avatar: StaticImageData;
  rating: number;
  date: string;
  text: string;
};

export type CourseDetail = Course & {
  fullTitle: string;
  subtitle: string;
  level: string;
  rating: number;
  reviewCount: number;
  studentTotal: number;
  lessonTotal: number;
  hours: number;
  previewLessons: { title: string; minutes: number }[];
  description: string[];
  sneakPeek: StaticImageData[];
  keyPoints: string[];
  modules: { title: string; summary: string }[];
  progress: number;
  /** number of ratings for 5, 4, 3, 2 and 1 stars */
  ratingBreakdown: [number, number, number, number, number];
  reviews: Review[];
  creatorProfile: { name: string; role: string };
};

// Sample detail content from the design (the "Build Digital Asset" page).
// Every course uses it for now, with its own title — replace with real data.
const sample = {
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  level: "Intermediate",
  rating: 4.8,
  reviewCount: 172,
  studentTotal: 199,
  lessonTotal: 112,
  hours: 24,
  previewLessons: [
    { title: "Introduction to Digital Assets", minutes: 12 },
    { title: "Design Principles for Impacts", minutes: 21 },
    { title: "Advanced Techniques in Digital Creation", minutes: 16 },
  ],
  description: [
    "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, “Build Digital Assets: A Comprehensive Guide.” This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
    "In the initial modules, you’ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you’ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
  modules: [
    {
      title: "Module 1: Introduction to Digital Assets",
      summary:
        "Lay the groundwork with lessons like ‘Understanding Digital Elements’ and ‘Navigating Design Software Tools.’ Dive into the essentials of digital asset creation.",
    },
    {
      title: "Module 2: Design Principles for Impact",
      summary:
        "Master the principles that drive impactful designs with lessons such as ‘Color Theory in Digital Design’ and ‘Typography Essentials.’ Elevate your visual communication skills.",
    },
    {
      title: "Module 4: User-Centric Design Strategies",
      summary:
        "Understand ‘Design Thinking in Digital Creation’ and delve into ‘User Experience (UX) Essentials.’ Craft digital assets with a focus on user-centric design.",
    },
    {
      title: "Module 5: Interactive Media and Engagement",
      summary:
        "Engage your audience with lessons like ‘Creating Interactive Presentations’ and ‘Integrating Multimedia Elements.’ Master the art of creating immersive digital experiences.",
    },
    {
      title: "Module 6: Project Showcase and Critique",
      summary:
        "Perfect your presentation skills with ‘Effective Presentation Techniques’ and embrace collaboration with ‘Peer Critique and Collaboration.’ Showcase your work with confidence.",
    },
    {
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      summary:
        "Adapt your digital creations for ‘Mobile Platforms’ and optimize for ‘Social Media.’ Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ],
  progress: 55,
  ratingBreakdown: [720, 120, 21, 12, 16] as [
    number,
    number,
    number,
    number,
    number,
  ],

  reviews: [
    {
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      avatar: avatarOne,
      rating: 5,
      date: "a year ago",
      text: "“The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!”",
    },
    {
      name: "Albert Flores",
      role: "UI/UX Designer",
      avatar: avatarTwo,
      rating: 5,
      date: "a year ago",
      text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I’ve learned!",
    },
    {
      name: "Cody Fisher",
      role: "UI/UX Designer",
      avatar: avatarThree,
      rating: 5,
      date: "a year ago",
      text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      avatar: avatarFour,
      rating: 5,
      date: "a year ago",
      text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
  ],
  creatorProfile: { name: "PurePearl Studio", role: "Professional Creator" },
};

const fullTitles: Record<string, string> = {
  "build-digital-asset": "Build Digital Asset: A Comprehensive Guide",
};

export function getCourseDetail(slug: string): CourseDetail | undefined {
  const course = courses.find((c) => c.slug === slug);
  if (!course) return undefined;

  return {
    ...course,
    ...sample,
    fullTitle: fullTitles[slug] ?? course.title,

    sneakPeek: courses
      .filter((c) => c.slug !== slug && c.image)
      .slice(0, 4)
      .map((c) => c.image!),
  };
}

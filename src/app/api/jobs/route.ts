import { NextResponse } from "next/server";
import type { Job } from "@/types";

const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "$70,000 - $90,000",
    requiredSkills: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    matchScore: 85,
    description:
      "We are looking for a skilled Frontend Developer to join our team. The ideal candidate should have strong experience with React, Next.js, and modern frontend development practices.",
  },
  {
    id: 2,
    title: "UI Engineer",
    company: "DesignPro",
    location: "New York, USA",
    salary: "$80,000 - $100,000",
    requiredSkills: ["Figma", "React", "CSS"],
    matchScore: 70,
    description:
      "As a UI Engineer at DesignPro, you will collaborate with designers and other developers to create beautiful, responsive user interfaces for our clients.",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "WebSolutions",
    location: "San Francisco, USA",
    salary: "$90,000 - $120,000",
    requiredSkills: ["React", "Node.js", "MongoDB", "Express"],
    matchScore: 65,
    description:
      "Join our team as a Full Stack Developer and help build scalable web applications with modern technologies. You'll work on both frontend and backend development.",
  },
  {
    id: 4,
    title: "React Native Developer",
    company: "MobileFirst",
    location: "Remote",
    salary: "$75,000 - $95,000",
    requiredSkills: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "Mobile Development",
    ],
    matchScore: 45,
    description:
      "We're seeking a React Native Developer to help build cross-platform mobile applications. Experience with both iOS and Android development is a plus.",
  },
  {
    id: 5,
    title: "Senior Frontend Architect",
    company: "Enterprise Systems",
    location: "Chicago, USA",
    salary: "$120,000 - $150,000",
    requiredSkills: [
      "React",
      "Angular",
      "Vue.js",
      "System Architecture",
      "TypeScript",
    ],
    matchScore: 30,
    description:
      "As a Senior Frontend Architect, you'll lead our frontend development team and make key technical decisions about our web applications.",
  },
];

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  return NextResponse.json(jobs);
}

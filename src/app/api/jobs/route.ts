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
  {
    id: 6,
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "Remote",
    salary: "$95,000 - $125,000",
    requiredSkills: ["Docker", "Kubernetes", "AWS", "Jenkins", "Python"],
    matchScore: 40,
    description:
      "Join our DevOps team to build and maintain cloud infrastructure and deployment pipelines for enterprise applications.",
  },
  {
    id: 7,
    title: "Frontend Performance Engineer",
    company: "SpeedWeb",
    location: "Austin, USA",
    salary: "$85,000 - $110,000",
    requiredSkills: [
      "React",
      "JavaScript",
      "Web Performance",
      "Webpack",
      "Redux",
    ],
    matchScore: 75,
    description:
      "Looking for a specialist to optimize web application performance and implement best practices for scalable frontend architecture.",
  },
  {
    id: 8,
    title: "Blockchain Developer",
    company: "CryptoInnovate",
    location: "Miami, USA",
    salary: "$110,000 - $140,000",
    requiredSkills: [
      "Solidity",
      "Ethereum",
      "Web3.js",
      "Smart Contracts",
      "JavaScript",
    ],
    matchScore: 25,
    description:
      "Build decentralized applications and smart contracts for our blockchain platforms.",
  },
  {
    id: 9,
    title: "AI/ML Engineer",
    company: "DataMinds",
    location: "Boston, USA",
    salary: "$130,000 - $160,000",
    requiredSkills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Machine Learning",
      "Data Science",
    ],
    matchScore: 20,
    description:
      "Develop and implement machine learning models for our AI-powered solutions.",
  },
  {
    id: 10,
    title: "Web Accessibility Specialist",
    company: "InclusiveTech",
    location: "Portland, USA",
    salary: "$75,000 - $95,000",
    requiredSkills: ["HTML", "ARIA", "JavaScript", "CSS", "Screen Readers"],
    matchScore: 60,
    description:
      "Help make our web applications accessible to all users by implementing WCAG guidelines and best practices.",
  },
];

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  return NextResponse.json(jobs);
}

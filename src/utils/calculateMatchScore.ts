import { Job, UserProfile } from "@/types";

export function calculateMatchScore(
  job: Job,
  userProfile: UserProfile
): number {
  // Count how many of the required skills the user has
  const matchedSkills = job.requiredSkills.filter((skill) =>
    userProfile.skills.includes(skill)
  );

  // Calculate percentage
  const matchPercentage = Math.round(
    (matchedSkills.length / job.requiredSkills.length) * 100
  );

  return matchPercentage;
}

export function getMatchScoreColor(score: number): string {
  if (score >= 80) return "bg-green-500";
  if (score >= 50) return "bg-yellow-500";
  return "bg-red-500";
}

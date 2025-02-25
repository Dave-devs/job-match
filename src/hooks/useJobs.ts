import { create } from "zustand";
import { Job, JobsState, UserProfile } from "@/types";

// Mock user profile with skills
const mockUserProfile: UserProfile = {
  id: 1,
  name: "John Doe",
  skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Next.js"],
};

export const useJobsStore = create<JobsState>((set, get) => ({
  jobs: [],
  loading: false,
  error: null,
  selectedJob: null,
  userProfile: mockUserProfile,

  fetchJobs: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("/api/jobs");
      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }
      const data = await response.json();
      set({ jobs: data, loading: false });
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
        loading: false,
      });
    }
  },

  setSelectedJob: (job: Job | null) => {
    set({ selectedJob: job });
  },

  applyForJob: (jobId: number) => {
    const { jobs, userProfile } = get();
    const job = jobs.find((j) => j.id === jobId);

    if (!job) return;

    // Check if user has all required skills
    const missingSkills = job.requiredSkills.filter(
      (skill) => !userProfile.skills.includes(skill)
    );

    if (missingSkills.length > 0) {
      alert(
        `You're missing some required skills: ${missingSkills.join(
          ", "
        )}. Consider upskilling in these areas.`
      );
    } else {
      alert(
        `Application submitted successfully for ${job.title} at ${job.company}!`
      );
    }
  },
}));

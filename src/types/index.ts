export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  requiredSkills: string[];
  matchScore: number;
  description?: string;
}

export interface UserProfile {
  id: number;
  name: string;
  skills: string[];
}

export interface JobsState {
  jobs: Job[];
  loading: boolean;
  error: string | null;
  selectedJob: Job | null;
  userProfile: UserProfile;
  fetchJobs: () => Promise<void>;
  setSelectedJob: (job: Job | null) => void;
  applyForJob: (jobId: number) => void;
}

import React from 'react';
import { Job } from '@/types';
import MatchScoreBadge from './MatchScoreBadge';
import SkillTag from './SkillTag';
import { useJobsStore } from '@/hooks/useJobs';

interface JobDetailsProps {
  job: Job;
  onClose: () => void;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job, onClose }) => {
  const { userProfile, applyForJob } = useJobsStore();

  const handleApply = () => {
    applyForJob(job.id);
    onClose()
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h2>
            <p className="text-xl text-gray-600 mb-1">{job.company}</p>
            <div className="flex items-center text-gray-500 mb-2">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {job.location}
            </div>
            <p className="text-lg font-medium text-gray-700 mb-4">{job.salary}</p>
          </div>

          <div className="mt-4 md:mt-0">
            <MatchScoreBadge score={job.matchScore} />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Job Description</h3>
          <p className="text-gray-700">{job.description || "No description available."}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Required Skills</h3>
          <div className="flex flex-wrap">
            {job.requiredSkills.map(skill => (
              <SkillTag key={skill} skill={skill} userProfile={userProfile} />
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleApply}
            className="px-6 py-2 bg-primary text-white font-medium rounded hover:bg-blue-600 transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
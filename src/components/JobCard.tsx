import React from 'react';
import { Job, UserProfile } from '@/types';
import MatchScoreBadge from './MatchScoreBadge';

interface JobCardProps {
    job: Job;
    userProfile: UserProfile;
    onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
    return (
        <div
            className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer bg-white"
            onClick={onClick}
        >
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                    <p className="text-gray-600 mb-1">{job.company}</p>
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                    </div>
                    <div className="text-gray-700 font-medium mb-3">
                        {job.salary}
                    </div>
                    <div className="flex flex-wrap">
                        {job.requiredSkills.slice(0, 3).map(skill => (
                            <span
                                key={skill}
                                className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2 py-0.5 rounded"
                            >
                                {skill}
                            </span>
                        ))}
                        {job.requiredSkills.length > 3 && (
                            <span className="text-gray-500 text-xs">
                                +{job.requiredSkills.length - 3} more
                            </span>
                        )}
                    </div>
                </div>
                <MatchScoreBadge score={job.matchScore} />
            </div>
        </div>
    );
};

export default JobCard;
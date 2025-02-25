import React, { useEffect } from 'react';
import JobCard from './JobCard';
import JobDetails from './JobDetails';
import { useJobsStore } from '@/hooks/useJobs';

const JobList: React.FC = () => {
    const {
        jobs,
        loading,
        error,
        fetchJobs,
        selectedJob,
        setSelectedJob,
        userProfile
    } = useJobsStore();

    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error}</span>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Recommended Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {jobs.map(job => (
                    <JobCard
                        key={job.id}
                        job={job}
                        userProfile={userProfile}
                        onClick={() => setSelectedJob(job)}
                    />
                ))}
            </div>

            {jobs.length === 0 && (
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">No jobs found. Try adjusting your filters.</p>
                </div>
            )}

            {selectedJob && (
                <JobDetails
                    job={selectedJob}
                    onClose={() => setSelectedJob(null)}
                />
            )}
        </div>
    );
};

export default JobList;
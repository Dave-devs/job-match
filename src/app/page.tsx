'use client';

import React from 'react';
import JobList from '@/components/JobList';
import { useJobsStore } from '@/hooks/useJobs';

export default function Home() {
  const { userProfile } = useJobsStore();

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">AI-Powered Job Match Dashboard</h1>

          <div className="mt-4 p-4 bg-white shadow rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Welcome, {userProfile.name}</h2>
                <p className="text-gray-600">Here are your personalized job recommendations</p>
              </div>
              <div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg">
                  <div className="text-sm text-gray-600">Your Skills</div>
                  <div className="flex flex-wrap mt-1 gap-1">
                    {userProfile.skills.map(skill => (
                      <span
                        key={skill}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <JobList />
      </div>
    </main>
  );
}
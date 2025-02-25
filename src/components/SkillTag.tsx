import React from 'react';
import { UserProfile } from '@/types';

interface SkillTagProps {
    skill: string;
    userProfile: UserProfile;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, userProfile }) => {
    const hasSkill = userProfile.skills.includes(skill);

    return (
        <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2
        ${hasSkill
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'}`}
        >
            {skill}
            {hasSkill ?
                <span className="ml-1 text-green-600">✓</span> :
                <span className="ml-1 text-red-600">✗</span>
            }
        </span>
    );
};

export default SkillTag;
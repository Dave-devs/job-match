import React from 'react';

interface MatchScoreBadgeProps {
    score: number;
}

const MatchScoreBadge: React.FC<MatchScoreBadgeProps> = ({ score }) => {
    // const colorClass = getMatchScoreColor(score);

    return (
        <div className="flex flex-col items-center">
            <div className="text-sm font-medium mb-1">Match Score</div>
            <div className={`text-white text-sm font-semibold px-2.5 py-0.5 rounded-full flex items-center justify-center w-16 h-6 ${score >= 80 ? "bg-success" : score >= 50 ? "bg-warning" : "bg-danger"}`}>
                {score}%
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div
                    className={`h-full rounded-full ${score >= 80 ? "bg-success" : score >= 50 ? "bg-warning" : "bg-danger"}`}
                    style={{ width: `${score}%` }}
                />
            </div>
        </div>
    );
};

export default MatchScoreBadge;
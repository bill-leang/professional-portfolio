import React, { useState } from 'react';
import { WORK_EXPERIENCES } from '../constants';

const WorkExperience: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (id: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section id="experience" className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-slate-800 mb-12">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-3">
          {WORK_EXPERIENCES.map((experience) => (
            <div
              key={experience.id}
              className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleCard(experience.id)}
                className="w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-inset"
              >
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-bold text-slate-800 mb-1">
                      {experience.role}
                    </h3>
                    <p className="text-slate-600 font-medium">{experience.company}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm text-slate-500">{experience.yearsWorked}</p>
                    <svg
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                        expandedCards.has(experience.id) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              
              {expandedCards.has(experience.id) && (
                <div className="px-4 pb-4 border-t border-slate-100">
                  <div className="pt-3">
                    <p className="text-slate-700 leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
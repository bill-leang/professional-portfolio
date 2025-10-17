import React, { useState} from 'react';
import { WORK_EXPERIENCES } from '../constants';

const WorkExperience: React.FC = () => {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const toggleCard = (id: number) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <section id="experience" className="bg-slate-50 py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-slate-800 mb-12">
                    Work Experience
                </h2>
                <div className="max-w-4xl mx-auto space-y-4">
                    {WORK_EXPERIENCES.map((experience) => (
                        <div key={experience.id} className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <button
                onClick={() => toggleCard(experience.id)}
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-inset"
              >
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-bold text-slate-800 mb-2">
                      {experience.role}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-slate-600">
                      <p className="font-medium">{experience.company}</p>
                      <p className="text-sm mt-1 sm:mt-0">{experience.yearsWorked}</p>
                    </div>
                  </div>
                  <div className="ml-4">
                    <svg
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                        expandedCard === experience.id ? 'rotate-180' : ''
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
              
              {expandedCard === experience.id && (
                <div className="px-6 pb-6 border-t border-slate-100">
                  <div className="pt-4">
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
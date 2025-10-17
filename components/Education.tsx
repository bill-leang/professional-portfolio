import React from 'react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-slate-800 mb-12">
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {EDUCATION.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 p-6 rounded-lg border border-slate-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-xl font-serif font-bold text-slate-800">
                  {item.school}
                </h3>
                <p className="text-sm text-slate-500">{item.yearGraduated}</p>
              </div>

              <p className="mt-2 text-slate-700 font-medium">
                {item.degree}
                {item.field ? <span className="text-slate-600"> • {item.degree}</span> : null}
              </p>

              {item.details ? (
                <p className="mt-3 text-slate-700 leading-relaxed">
                  {item.details}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, YoutubeIcon, MailIcon } from './icons';
import profilePic from '../src/assets/profile.jpeg'; // added import

const titles = ['Data Analyst', 'Data Scientist', 'AI Engineer'];

const Hero: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="container mx-auto px-6 py-24 min-h-screen flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-800">
            Hi, I'm Bill Tan Jun Leng
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-sky-500 h-10">
            <span>{titles[currentTitleIndex]}</span>
          </div>
          <p className="text-lg text-slate-600 max-w-lg">
            A passionate professional dedicated to uncovering insights from data and building intelligent solutions.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/junlengtan/" className="text-slate-500 hover:text-sky-500 transition-colors duration-300">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="https://github.com/bill-leang" className="text-slate-500 hover:text-sky-500 transition-colors duration-300">
              <GithubIcon className="w-6 h-6" />
            </a>
            {/* <a href="#" className="text-slate-500 hover:text-sky-500 transition-colors duration-300">
              <YoutubeIcon className="w-6 h-6" />
            </a> */}
            <a href="mailto:junleng.tan@gmail.com" className="text-slate-500 hover:text-sky-500 transition-colors duration-300">
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            // src="https://picsum.photos/400/400"
            
            src={profilePic}
            alt="Professional Headshot"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

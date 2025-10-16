
import React from 'react';
import { GithubIcon, LinkedinIcon, YoutubeIcon, MailIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm text-slate-500 mb-4 md:mb-0">
          © {new Date().getFullYear()} Bill Tan Jun Leng. All rights reserved.
        </p>
        <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/junlengtan/" className="text-slate-500 hover:text-sky-500 transition-colors duration-300">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="#https://github.com/bill-lean" className="text-slate-500 hover:text-sky-500 transition-colors duration-300">
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
    </footer>
  );
};

export default Footer;

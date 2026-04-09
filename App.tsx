
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Skills from './components/Skills';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';

const App: React.FC = () => {
  useEffect(() => {                              // add this block
    const hash = window.location.hash;           // after this line
    if (hash) {                                  //
      setTimeout(() => {                         //
        const element = document.querySelector(hash);  //
        if (element) {                           //
          element.scrollIntoView({ behavior: 'smooth' });  //
        }                                        //
      }, 500);                                   //
    }                                            //
  }, []);     

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <WorkExperience />
        <Projects />
        <Skills />
        <Education />
        <Articles />
       
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;

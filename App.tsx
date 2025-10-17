
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Skills from './components/Skills';
// import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <WorkExperience />
        <Projects />
        <Skills />
        <Articles />
       
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;

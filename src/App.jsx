import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import CertificationsSection from './sections/CertificationsSection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

function App() {
  return (
    <div className="cyber-grid min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ResumeSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;

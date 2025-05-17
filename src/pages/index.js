import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Import modularized components
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import SkillsSection from '../components/Home/SkillsSection';
import ExperienceSection from '../components/Home/ExperienceSection';
import ProjectsSection from '../components/Home/ProjectsSection';
import ContactSection from '../components/Home/ContactSection';

// Main component
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  // Install required dependencies
  useEffect(() => {
    // This would typically be done in a build script, not in the component
    console.log('Make sure to install: npm install framer-motion react-icons @tailwindcss/typography');
  }, []);
  
  return (
    <Layout
      title={`${siteConfig.title} - Portfolio`}
      description="Guru Patel's portfolio - Software Developer at Silver Touch Technologies"
    >
      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </Layout>
  );
}

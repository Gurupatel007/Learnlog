import React from 'react';
import Link from '@docusaurus/Link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center" id="home">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-blue-500/10 to-purple-500/10 dark:from-primary-900/20 dark:via-blue-900/20 dark:to-purple-900/20 animate-gradient bg-300%"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 dark:bg-primary-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Guru Patel</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Software Developer | Problem Solver | Tech Enthusiast
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="#about" className="btn btn-primary">
                Learn More About Me
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="#projects" className="btn btn-secondary">
                View My Projects
              </Link>
            </motion.div>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            <motion.a 
              href="https://github.com/Gurupatel007" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-2xl"
            >
              <FaGithub />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/guru-patel" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-2xl"
            >
              <FaLinkedin />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a 
              href="mailto:gurupatel279@gmail.com"
              whileHover={{ y: -5 }}
              className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-2xl"
            >
              <FaEnvelope />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link to="#about" className="text-gray-500 dark:text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import Link from '@docusaurus/Link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <p className="section-subtitle">
          Get to know more about me, my background, and what I do
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-blue-500 rounded-xl transform rotate-6"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden p-6">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24">
                    <img 
                      src="/img/profile.jpg" 
                      alt="Guru Patel" 
                      className="object-cover w-20 h-20 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Guru Tulsibhai Patel</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Software Developer at Silver Touch Technologies</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-4">
                  <span className="skill-badge">JavaScript</span>
                  <span className="skill-badge">React</span>
                  <span className="skill-badge">Node.js</span>
                  <span className="skill-badge">Python</span>
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href="https://github.com/Gurupatel007" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-xl"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href="https://linkedin.com/in/guru-patel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href="mailto:gurupatel279@gmail.com"
                    className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-xl"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Hello there!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm Guru Tulsibhai Patel, a Software Developer currently interning at Silver Touch Technologies.
              I'm passionate about building efficient, user-friendly applications and solving complex problems through code.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I began my journey in software development with a strong interest in creating solutions that make a difference.
              My internship at Silver Touch Technologies has allowed me to work on real-world projects and expand my skills
              in various technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I believe in writing clean, maintainable code and continuously learning new technologies and methodologies.
              I enjoy collaborating with teams to create innovative solutions and am always looking for opportunities to grow
              as a developer.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/resume" className="btn btn-primary">
                  <FaDownload className="mr-2" /> Download Resume
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="#contact" className="btn btn-secondary">
                  <FaEnvelope className="mr-2" /> Contact Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
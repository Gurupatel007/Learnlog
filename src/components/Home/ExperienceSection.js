import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Silver Touch Technologies",
      period: "2023 - Present",
      description: [
        "Developing and maintaining web applications using modern technologies",
        "Collaborating with cross-functional teams to implement new features",
        "Participating in code reviews and implementing feedback",
        "Learning and adapting to new technologies and methodologies"
      ]
    }
  ];

  const education = [
    {
      degree: "Computer Science Degree",
      institution: "Ganpat University",
      year: "2025",
      description: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Management"
    },
    {
      degree: "High School",
      institution: "J.B Shah English Medium School",
      year: "2021",
      description: "Relevant courses: Mathematics, Physics, Chemistry"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title text-gray-800 dark:text-white">My <span className="gradient-text">Journey</span></h2>
        <p className="section-subtitle">
          My professional experience and educational background
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800 dark:text-white">
              <FaLaptopCode className="mr-3 text-primary-500" /> Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400">{exp.title}</h4>
                  <p className="text-lg font-medium mb-2 text-gray-800 dark:text-white">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                        <svg className="w-5 h-5 mr-2 text-primary-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800 dark:text-white">
              <svg className="w-6 h-6 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg> 
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400">{edu.degree}</h4>
                  <p className="text-lg font-medium mb-2 text-gray-800 dark:text-white">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{edu.year}</p>
                  <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaDatabase, FaMobileAlt } from 'react-icons/fa';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaLaptopCode className="text-4xl mb-4 text-primary-500" />,
      skills: ["JavaScript (ES6+)", "React.js", "HTML5/CSS3", "Tailwind CSS", "Redux"]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-4xl mb-4 text-primary-500" />,
      skills: ["Node.js", "Express", "Python", "RESTful APIs"]
    },
    {
      title: "Database & DevOps",
      icon: <FaDatabase className="text-4xl mb-4 text-primary-500" />,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Git/GitHub"]
    },
    {
      title: "Mobile & Other",
      icon: <FaMobileAlt className="text-4xl mb-4 text-primary-500" />,
      skills: ["Progressive Web Apps", "UI/UX Design"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title text-gray-800 dark:text-white">My <span className="gradient-text">Skills</span></h2>
        <p className="section-subtitle">
          Here are the technologies and tools I work with
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

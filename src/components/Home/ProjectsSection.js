import React from 'react';
import Link from '@docusaurus/Link';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your first project and what technologies you used.",
      image: "img/project-placeholder.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Gurupatel007/project-1",
      demo: "https://project-1-demo.com",
      link: "/docs/intro#project-1-project-name"
    },
    {
      title: "Project 2",
      description: "A brief description of your second project and what technologies you used.",
      image: "img/project-placeholder.jpg",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/Gurupatel007/project-2",
      demo: "https://project-2-demo.com",
      link: "/docs/intro#project-2-project-name"
    },
    {
      title: "Project 3",
      description: "A brief description of your third project and what technologies you used.",
      image: "img/project-placeholder.jpg",
      tags: ["JavaScript", "HTML/CSS", "API Integration"],
      github: "https://github.com/Gurupatel007/project-3",
      demo: "https://project-3-demo.com",
      link: "/docs/intro#more-projects"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title text-gray-800 dark:text-white">My <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden flex flex-col h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 p-2 space-x-2">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-900/80 text-white hover:bg-gray-900"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-600/80 text-white hover:bg-primary-600"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="skill-badge">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  to={project.link}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                >
                  View Details <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/projects/all" className="btn btn-primary">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

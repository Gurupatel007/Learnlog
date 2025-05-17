import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just simulate a successful submission
    setFormStatus('success');
    setTimeout(() => setFormStatus(''), 3000);
  };
  
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title text-gray-800 dark:text-white">Get In <span className="gradient-text">Touch</span></h2>
        <p className="section-subtitle">
          Have a question or want to work together? Feel free to contact me!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full">
                  <FaEnvelope className="text-primary-600 dark:text-primary-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">Email</h4>
                  <a href="mailto:gurupatel279@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                    gurupatel279@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full">
                  <FaLinkedin className="text-primary-600 dark:text-primary-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">LinkedIn</h4>
                  <a href="https://linkedin.com/in/guru-patel" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                    linkedin.com/in/guru-patel
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full">
                  <FaGithub className="text-primary-600 dark:text-primary-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">GitHub</h4>
                  <a href="https://github.com/Gurupatel007" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                    github.com/Gurupatel007
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                I'm always open to discussing new projects, opportunities, or partnerships.
                Feel free to reach out!
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send Me a Message</h3>
              
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn btn-primary"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

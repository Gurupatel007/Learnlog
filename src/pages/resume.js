// import React from 'react';
// import Layout from '@theme/Layout';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// export default function Resume() {
//   const {siteConfig} = useDocusaurusContext();

//   return (
//     <Layout
//       title="Resume | Guru Patel"
//       description="Guru Patel's professional resume - Software Developer"
//     >
//       <div className="container mx-auto px-4 py-16 max-w-5xl">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-4xl font-bold gradient-text">My Resume</h1>
//           <a 
//             href="/files/guru-patel-resume.pdf" 
//             download
//             className="btn btn-primary"
//           >
//             <FaDownload className="mr-2" /> Download PDF
//           </a>
//         </div>
        
//         <div className="card p-8 mb-12">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//             <div>
//               <h2 className="text-3xl font-bold">Guru Tulsibhai Patel</h2>
//               <p className="text-xl text-gray-600 dark:text-gray-400">Software Developer</p>
//             </div>
//             <div className="flex space-x-4 mt-4 md:mt-0">
//               <a 
//                 href="https://github.com/Gurupatel007" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-2xl"
//               >
//                 <FaGithub />
//               </a>
//               <a 
//                 href="https://linkedin.com/in/guru-patel" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-2xl"
//               >
//                 <FaLinkedin />
//               </a>
//               <a 
//                 href="mailto:gurupatel279@gmail.com"
//                 className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-2xl"
//               >
//                 <FaEnvelope />
//               </a>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
//             <h3 className="text-2xl font-bold mb-4">Summary</h3>
//             <p className="text-gray-700 dark:text-gray-300">
//               Software Developer with experience in web development and a passion for creating efficient, 
//               user-friendly applications. Strong problem-solving skills and ability to work in team environments.
//               Currently interning at Silver Touch Technologies, working on real-world projects and expanding skills
//               in various technologies.
//             </p>
//           </div>
          
//           <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
//             <h3 className="text-2xl font-bold mb-4">Experience</h3>
            
//             <div className="mb-6">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400">Software Developer Intern</h4>
//                   <p className="text-lg">Silver Touch Technologies</p>
//                 </div>
//                 <p className="text-gray-600 dark:text-gray-400">2023 - Present</p>
//               </div>
//               <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
//                 <li>Developing and maintaining web applications using modern technologies</li>
//                 <li>Collaborating with cross-functional teams to implement new features</li>
//                 <li>Participating in code reviews and implementing feedback</li>
//                 <li>Learning and adapting to new technologies and methodologies</li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
//             <h3 className="text-2xl font-bold mb-4">Education</h3>
            
//             <div className="mb-6">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400">Computer Science Degree</h4>
//                   <p className="text-lg">Your University/College</p>
//                 </div>
//                 <p className="text-gray-600 dark:text-gray-400">Graduation Year</p>
//               </div>
//               <p className="mt-2 text-gray-700 dark:text-gray-300">
//                 Relevant coursework: Data Structures, Algorithms, Web Development, Database Management
//               </p>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
//             <h3 className="text-2xl font-bold mb-4">Skills</h3>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <h4 className="text-lg font-semibold mb-2">Programming Languages</h4>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="skill-badge">JavaScript</span>
//                   <span className="skill-badge">Python</span>
//                   <span className="skill-badge">Java</span>
//                   <span className="skill-badge">HTML/CSS</span>
//                   <span className="skill-badge">SQL</span>
//                 </div>
//               </div>
              
//               <div>
//                 <h4 className="text-lg font-semibold mb-2">Frameworks & Libraries</h4>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="skill-badge">React</span>
//                   <span className="skill-badge">Node.js</span>
//                   <span className="skill-badge">Express</span>
//                   <span className="skill-badge">Bootstrap</span>
//                   <span className="skill-badge">jQuery</span>
//                 </div>
//               </div>
              
//               <div>
//                 <h4 className="text-lg font-semibold mb-2">Tools & Technologies</h4>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="skill-badge">Git & GitHub</span>
//                   <span className="skill-badge">VS Code</span>
//                   <span className="skill-badge">Docker</span>
//                   <span className="skill-badge">MongoDB</span>
//                   <span className="skill-badge">MySQL</span>
//                 </div>
//               </div>
              
//               <div>
//                 <h4 className="text-lg font-semibold mb-2">Soft Skills</h4>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="skill-badge">Problem Solving</span>
//                   <span className="skill-badge">Team Collaboration</span>
//                   <span className="skill-badge">Communication</span>
//                   <span className="skill-badge">Time Management</span>
//                   <span className="skill-badge">Adaptability</span>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
//             <h3 className="text-2xl font-bold mb-4">Projects</h3>
            
//             <div className="mb-6">
//               <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400">Project 1</h4>
//               <p className="text-gray-700 dark:text-gray-300 mt-2">
//                 A brief description of your first project and what technologies you used.
//               </p>
//               <div className="flex flex-wrap gap-2 mt-2">
//                 <span className="skill-badge">React</span>
//                 <span className="skill-badge">Node.js</span>
//                 <span className="skill-badge">MongoDB</span>
//               </div>
//             </div>
            
//             <div className="mb-6">
//               <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400">Project 2</h4>
//               <p className="text-gray-700 dark:text-gray-300 mt-2">
//                 A brief description of your second project and what technologies you used.
//               </p>
//               <div className="flex flex-wrap gap-2 mt-2">
//                 <span className="skill-badge">React</span>
//                 <span className="skill-badge">Firebase</span>
//                 <span className="skill-badge">Tailwind CSS</span>
//               </div>
//             </div>
            
//             <div>
//               <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400">Project 3</h4>
//               <p className="text-gray-700 dark:text-gray-300 mt-2">
//                 A brief description of your third project and what technologies you used.
//               </p>
//               <div className="flex flex-wrap gap-2 mt-2">
//                 <span className="skill-badge">JavaScript</span>
//                 <span className="skill-badge">HTML/CSS</span>
//                 <span className="skill-badge">API Integration</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

import React, { useRef } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import BrowserOnly from '@docusaurus/BrowserOnly';

// Create a separate component for the PDF button that will use the hook
function PDFDownloadButton({ resumeRef }) {
  return (
    <BrowserOnly>
      {() => {
        // Import the hook and html2pdf only in the browser
        const { useColorMode } = require('@docusaurus/theme-common');
        const html2pdf = require('html2pdf.js');
        const { colorMode, setColorMode } = useColorMode();
        
        return (
          <button
            onClick={() => {
              // Store current color mode
              const currentMode = colorMode;
              
              // Temporarily switch to light mode for PDF generation
              if (currentMode === 'dark') {
                setColorMode('light');
                
                // Give time for the DOM to update with light mode styles
                setTimeout(() => {
                  const element = resumeRef.current;
                  const opt = {
                    margin: [10, 10, 10, 10],
                    filename: 'guru-patel-resume.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2, useCORS: true },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
                  };
                  
                  // Generate PDF
                  html2pdf().from(element).set(opt).save().then(() => {
                    // Switch back to dark mode after PDF generation
                    setTimeout(() => {
                      setColorMode(currentMode);
                    }, 500);
                  });
                }, 500);
              } else {
                // If already in light mode, just generate the PDF
                const element = resumeRef.current;
                const opt = {
                  margin: [10, 10, 10, 10],
                  filename: 'guru-patel-resume.pdf',
                  image: { type: 'jpeg', quality: 0.98 },
                  html2canvas: { scale: 2, useCORS: true },
                  jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
                };
                
                html2pdf().from(element).set(opt).save();
              }
            }}
            className="btn btn-primary"
          >
            <FaDownload className="mr-2" /> Download PDF
          </button>
        );
      }}
    </BrowserOnly>
  );
}

export default function Resume() {
  const {siteConfig} = useDocusaurusContext();
  const resumeRef = useRef(null);

  return (
    <Layout
      title="Resume | Guru Patel"
      description="Guru Patel's professional resume - Software Developer"
    >
      <div id="resume-container" className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold gradient-text">My Resume</h1>
          <PDFDownloadButton resumeRef={resumeRef} />
        </div>
        
        <div ref={resumeRef} className="card p-8 mb-12 bg-white dark:bg-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Guru Tulsibhai Patel</h2>
              <p className="text-xl text-gray-600 dark:text-white">Software Developer</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a 
                href="https://github.com/Gurupatel007" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-2xl"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/guru-patel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-2xl"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:gurupatel279@gmail.com"
                className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-2xl"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Summary</h3>
            <p className="text-gray-700 dark:text-white resume-text">
              Software Developer with experience in web development and a passion for creating efficient, 
              user-friendly applications. Strong problem-solving skills and ability to work in team environments.
              Currently interning at Silver Touch Technologies, working on real-world projects and expanding skills
              in various technologies.
            </p>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Experience</h3>
            
            <div className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400">Software Developer Intern</h4>
                  <p className="text-lg text-gray-800 dark:text-white resume-text">Silver Touch Technologies</p>
                </div>
                <p className="text-gray-600 dark:text-white resume-text">2023 - Present</p>
              </div>
              <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-white resume-list">
                <li>Developing and maintaining web applications using modern technologies</li>
                <li>Collaborating with cross-functional teams to implement new features</li>
                <li>Participating in code reviews and implementing feedback</li>
                <li>Learning and adapting to new technologies and methodologies</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Education</h3>
            
            <div className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400">Computer Science Degree</h4>
                  <p className="text-lg text-gray-800 dark:text-white resume-text">Your University/College</p>
                </div>
                <p className="text-gray-600 dark:text-white resume-text">Graduation Year</p>
              </div>
              <p className="mt-2 text-gray-700 dark:text-white resume-text">
                Relevant coursework: Data Structures, Algorithms, Web Development, Database Management
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge">JavaScript</span>
                  <span className="skill-badge">Python</span>
                  <span className="skill-badge">Java</span>
                  <span className="skill-badge">HTML/CSS</span>
                  <span className="skill-badge">SQL</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge">React</span>
                  <span className="skill-badge">Node.js</span>
                  <span className="skill-badge">Express</span>
                  <span className="skill-badge">Bootstrap</span>
                  <span className="skill-badge">jQuery</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge">Git & GitHub</span>
                  <span className="skill-badge">VS Code</span>
                  <span className="skill-badge">Docker</span>
                  <span className="skill-badge">MongoDB</span>
                  <span className="skill-badge">MySQL</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge">Problem Solving</span>
                  <span className="skill-badge">Team Collaboration</span>
                  <span className="skill-badge">Communication</span>
                  <span className="skill-badge">Time Management</span>
                  <span className="skill-badge">Adaptability</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Projects</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400">Project 1</h4>
              <p className="text-gray-700 dark:text-white resume-text mt-2">
                A brief description of your first project and what technologies you used.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="skill-badge">React</span>
                <span className="skill-badge">Node.js</span>
                <span className="skill-badge">MongoDB</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400">Project 2</h4>
              <p className="text-gray-700 dark:text-white resume-text mt-2">
                A brief description of your second project and what technologies you used.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="skill-badge">React</span>
                <span className="skill-badge">Firebase</span>
                <span className="skill-badge">Tailwind CSS</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400">Project 3</h4>
              <p className="text-gray-700 dark:text-white resume-text mt-2">
                A brief description of your third project and what technologies you used.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="skill-badge">JavaScript</span>
                <span className="skill-badge">HTML/CSS</span>
                <span className="skill-badge">API Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
// // @ts-check
// import {themes as prismThemes} from 'prism-react-renderer';

// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: 'Guru Patel - Portfolio',
//   tagline: 'Software Developer | Problem Solver | Tech Enthusiast',
//   favicon: 'img/favicon.ico',

//   // Set the production url of your site here
//   url: 'https://learnlog.netlify.app', // Keep your current URL for now
//   baseUrl: '/',

//   // GitHub pages deployment config
//   organizationName: 'Gurupatel007',
//   projectName: 'LearnLog', // Keep your current project name

//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'warn',

//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],
//   },

//   presets: [
//     [
//       'classic',
//       /** @type {import('@docusaurus/preset-classic').Options} */
//       ({
//         docs: {
//           sidebarPath: './sidebars.js',
//           // Keep your current editUrl
//           editUrl:
//             'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//         },
//         blog: {
//           showReadingTime: true,
//           // Keep your current editUrl
//           editUrl:
//             'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//           feedOptions: {
//             type: ['rss', 'atom'],
//             xslt: true,
//           },
//           // Keep existing blog options
//           onInlineTags: 'warn',
//           onInlineAuthors: 'warn',
//           onUntruncatedBlogPosts: 'warn',
//         },
//         theme: {
//           customCss: './src/css/custom.css',
//         },
//       }),
//     ],
//   ],

//   themeConfig:
//     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//     ({
//       // Keep your current image for now
//       image: 'img/docusaurus-social-card.jpg',
//       navbar: {
//         title: 'Guru Patel',
//         logo: {
//           alt: 'Portfolio Logo',
//           src: 'img/logo.svg',
//         },
//         items: [
//           {
//             to: '/about',
//             label: 'About Me',
//             position: 'left'
//           },
//           {
//             type: 'docSidebar',
//             sidebarId: 'tutorialSidebar',
//             position: 'left',
//             label: 'Docs',
//           },
//           {
//             to: '/skills',
//             label: 'Skills',
//             position: 'left'
//           },
//           {
//             to: '/experience',
//             label: 'Experience',
//             position: 'left'
//           },
//           {to: '/blog', label: 'Blog', position: 'left'},
//           {
//             to: '/contact',
//             label: 'Contact',
//             position: 'right',
//           },
//           {
//             href: 'https://github.com/Gurupatel007',
//             label: 'GitHub',
//             position: 'right',
//           },
//           {
//             href: 'https://linkedin.com/in/guru-patel',
//             label: 'LinkedIn',
//             position: 'right',
//           },
//         ],
//       },
//       footer: {
//         style: 'dark',
//         links: [
//           {
//             title: 'Portfolio',
//             items: [
//               {
//                 label: 'About Me',
//                 to: '/about',
//               },
//               {
//                 label: 'Docs',
//                 to: '/docs/intro',
//               },
//               {
//                 label: 'Skills',
//                 to: '/skills',
//               },
//               {
//                 label: 'Experience',
//                 to: '/experience',
//               },
//             ],
//           },
//           {
//             title: 'Connect',
//             items: [
//               {
//                 label: 'LinkedIn',
//                 href: 'https://linkedin.com/in/guru-patel',
//               },
//               {
//                 label: 'GitHub',
//                 href: 'https://github.com/Gurupatel007',
//               },
//               {
//                 label: 'Email',
//                 href: 'mailto:gurupatel279@gmail.com',
//               },
//             ],
//           },
//           {
//             title: 'More',
//             items: [
//               {
//                 label: 'Blog',
//                 to: '/blog',
//               },
//               {
//                 label: 'Resume',
//                 to: '/resume',
//               },
//             ],
//           },
//         ],
//         copyright: `Copyright © ${new Date().getFullYear()} Guru Patel. Built with Docusaurus.`,
//       },
//       prism: {
//         theme: prismThemes.github,
//         darkTheme: prismThemes.dracula,
//       },
//       // Add colorMode settings
//       colorMode: {
//         defaultMode: 'light',
//         disableSwitch: false,
//         respectPrefersColorScheme: true,
//       },
//     }),
// };

// export default config;

// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Guru Patel",
  tagline: "Software Developer | Problem Solver | Tech Enthusiast",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://learnlog.netlify.app",
  baseUrl: "/",

  // GitHub pages deployment config
  organizationName: "Gurupatel007",
  projectName: "LearnLog",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Keep your current editUrl
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Keep your current editUrl
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Keep existing blog options
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: 'ignore', // 👈 Add this
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Append TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.jpg",
      navbar: {
        title: "Guru Patel",
        logo: {
          alt: "Portfolio Logo",
          src: "img/logo.svg",
        },
        items: [
          // Single-page section links
          {
            to: "/#about",
            label: "About",
            position: "right",
          },
          {
            to: "/#skills",
            label: "Skills",
            position: "right",
          },
          {
            to: "/#experience",
            label: "Experience",
            position: "right",
          },
          {
            to: "/#projects",
            label: "Projects",
            position: "right",
          },
          {
            to: "/#contact",
            label: "Contact",
            position: "right",
          },
          // Separate page links
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            to: "/resume",
            label: "Resume",
            position: "left",
          },
          // Social links
          {
            href: "https://github.com/Gurupatel007",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Portfolio",
            items: [
              {
                label: "About",
                to: "/#about",
              },
              {
                label: "Skills",
                to: "/#skills",
              },
              {
                label: "Experience",
                to: "/#experience",
              },
              {
                label: "Projects",
                to: "/#projects",
              },
              {
                label: "Contact",
                to: "/#contact",
              },
            ],
          },
          {
            title: "Connect",
            items: [
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/guru-patel",
              },
              {
                label: "GitHub",
                href: "https://github.com/Gurupatel007",
              },
              {
                label: "Email",
                href: "mailto:gurupatel279@gmail.com",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Projects",
                to: "/docs/intro",
              },
              {
                label: "Resume",
                to: "/resume",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Guru Patel. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // Add colorMode settings
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),

  // Add this to enable smooth scrolling for the single-page navigation
  scripts: [
    {
      src: "https://kit.fontawesome.com/4b9ba14b0f.js",
      crossorigin: "anonymous",
    },
  ],
};

export default config;

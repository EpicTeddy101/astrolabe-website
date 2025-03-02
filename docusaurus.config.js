// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Astrolabe Website (TBD)',
  tagline: 'A FFXIV Savage and Extreme repository for old fights.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Astrolate Website',
        logo: {
          alt: 'Astrolabe Website Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'Resources',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'savageSidebar',
                label: 'Savage Raids'
              },
              {
                type: 'docSidebar',
                sidebarId: 'trialSidebar',
                label: 'Extreme Trials'
              }
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Info',
            items: [
              {
                label: 'About Us',
                href: '/about'
              },
              {
                label: 'FAQ',
                href: '/faq'
              }
            ]
          },
          {
            position: 'right',
            to: 'https://github.com/EpicTeddy101/astrolabe-website',
            className: 'header-github',
            'aria-label': 'GitHub Repository',
          },
          {
            position: 'right',
            to: 'https://discord.gg/eByG8hraBM',
            className: 'header-discord',
            'aria-label': 'Discord Server',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Savage Raids',
                to: '/coil', // To be changed to own page
              },
              {
                label: 'Extreme Trials', 
                to: '/arr-ex', // To be changed to own page
              }
            ],
          },
          {
            title: 'Info',
            items: [
              {
                label: 'About Us',
                href: '/about'
              },
              {
                label: 'FAQ',
                href: '/faq'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/eByG8hraBM',
              },
            ],
          },
        ],
        copyright: `FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. | © SQUARE ENIX CO., LTD. All rights reserved. | All content © their respective authors.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

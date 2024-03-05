import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { FaGithub } from "react-icons/fa";


const config: Config = {
  title: 'Amanueal ',
  tagline: 'Dinosaurs are cool but cats are cooler',
  favicon: 'img/kitty.png',

  // Set the production url of your site here
  url: 'https://www.amanuealmamo.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Aman2233', // Usually your GitHub org/user name.
  projectName: 'my-website', // Usually your repo name.

  onBrokenLinks: 'ignore',
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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Aman2233/my-website/',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: "Amanueal's Site",
      logo: {
        alt: 'My Site Logo',
        src: 'img/kitty.png',
      },
      items: [
        { to: '/about', label: 'About', position: 'right' },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Documents',
        },
        
        {
        
          href: 'https://github.com/Aman2233',
          label: 'GitHub',
          position: 'right',
        },
        { to: '/contact', label: 'Contact', position: 'right' },
        
      ],
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.synthwave84,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

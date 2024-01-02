import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import ZenUMLPlugin from './src/plugins/zenuml';

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
        // remove false to enable docs
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ZenUml/docs',
          remarkPlugins: [ZenUMLPlugin],
        },
        // remove false to enable blog
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/ZenUml/docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: {
          trackingID: 'G-6D7SV64NSJ',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/og-image.png',
    metadata: [
      {
        name: 'keywords',
        content:
          'sequence diagram, tool, uml diagram, software architecture, visualizations',
      },
    ],
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
        {
          to: 'https://app.zenuml.com/?src=docs',
          label: 'WebApp',
          position: 'right',
        },
        { to: '/docs', label: 'Docs', position: 'right' },
        { to: '/blog', label: 'Blog', position: 'right' },
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
              label: 'What is ZenUML?',
              href: '/docs',
            },
            {
              label: 'Quick Start',
              href: '/docs/zenuml-quick-start',
            },
            {
              label: 'Products',
              href: '/docs/category/products',
            },
            {
              label: 'Language Guide',
              href: '/docs/category/language-guide',
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
              label: 'Chrome Extension',
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
            { label: 'Blog', href: '/blog' },
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
              href: 'https://github.com/ZenUml',
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
    announcementBar: {
      id: 'announcementBar',
      content: `🎄 This Christmas, unwrap the joy of savings with our special holiday offer: get our premium Mac application for just $4.99 at <a target="_blank" href="https://apps.apple.com/us/app/sequence-diagram-tool-zenuml/id1602636196?mt=12?mt=12">Mac App Store</a>, a festive reduction from the regular price of $29.99!. 🎉️ 🥳️`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

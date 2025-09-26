import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import fs from 'fs';

// ✅ Load released versions dynamically from versions.json
let versions: string[] = [];
try {
  versions = JSON.parse(fs.readFileSync('./versions.json', 'utf8'));
} catch {
  versions = ['1.0.0']; // fallback if no versions.json exists
}

const config: Config = {
  title: 'Kindo Docs',
  tagline: 'Learning Korean with Kindo',
  favicon: 'img/kindo_avatar.png',

  future: {
    v4: true,
  },

  url: 'https://docs.kindo.kr',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    localeConfigs: {
        en: {
            label: 'English'
        },
        vi: {
            label: "Tiếng Việt"
        },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          lastVersion: versions[0],
          onlyIncludeVersions: [...versions],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: "My Site Logo",
        src: "/img/logo.png",
        srcDark: "/img/logo-dark.png",
      },
      items: [
        {
          href: 'https://www.kindo.kr',
          label: 'Homepage',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/dudaji-vn/kindo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [],
      copyright: `
        <div class="footer-custom">
          <img src="/img/footer-logo.png" alt="Footer Logo" />
          <p>Dudaji, Inc © All Rights Reserved.</p>
        </div>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

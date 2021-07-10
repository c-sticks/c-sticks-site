const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  // title: 'c-sticks\n©️-sticks\n©️-🕹️',
  title: 'c-sticks',
  tagline: 'The App Development Company.',
  url: 'https://c-sticks.github.io', // https://c-sticks.github.io
  baseUrl: '/c-sticks-site/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/joystick.png',
  organizationName: 'c-sticks', // Usually your GitHub org/user name.
  projectName: 'c-sticks-site', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'c-sticks',
      /* logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      }, */
      items: [
        /*
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
         */
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Apps',
          items: [
            {
              label: 'Puff (Coming soon)',
              href: 'https://twitter.com',
              // to: '/docs/intro',
            },
          ],
        },
        /* {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        }, */
        {
          title: 'Connect',
          items: [
            /* {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            }, */
            {
              label: 'Twitter',
              href: 'https://twitter.com',
            },
            {
              label: "Email",
              href: "mailto:c.sticks.app@gmail.com",
              // html: 'c.sticks.app@gmail.com'
              // html: '<a href="mailto:address?subject=&amp;body=">Email</a>'
            },
          ],
        },
        /* {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        }, */
      ],
      copyright: `Copyright © ${new Date().getFullYear()} C-STICKS LIMITED LIABILITY CO.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

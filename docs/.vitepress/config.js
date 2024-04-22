import mathjax3 from 'markdown-it-mathjax3'
import { withMermaid } from "vitepress-plugin-mermaid";


export default withMermaid({
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  base: '/k-centipede/',
  title: 'Centipède RTK',
  description: 'La collaboration au service de la précision',
  ignoreDeadLinks: true,
  head: [
    ['link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css', rel: 'stylesheet' }],
    ['link', { rel: 'icon', href: `./assets/centipede_icon.png` }]
  ],
  themeConfig: {
    logo: './assets/centipede_icon.png',
    domain: 'dev.kalisio.xyz',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kalisio/k-centipede' },
      { icon: 'linkedin', link: 'https://fr.linkedin.com/company/kalisio' },
      { icon: 'twitter', link: 'https://twitter.com/Kalisio3' }],
    nav: [
      {text: 'A propos', link: '/01_apropos/introduction' },
      {text: 'Comprendre', link: '/02_comprendre/theorie' },
      {text: 'Participer', link: '/03_participer/base' },
      {text: 'Exploiter', link: '/04_exploiter/bgnss' }
    ],
    sidebar: {
      '/01_apropos/': getAProposSidebar(),
      '/02_comprendre/': getComprendreSidebar(),
      '/03_participer/': getParticiperSidebar(),
      '/04_exploiter/': getExploiterSidebar(),
    },
    outline: {
      level: 2, 
      label: 'Sommaire',
      },
    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante'
    },
    footer: {
      copyright: 'MIT Licensed | Copyright © 2017-20xx Kalisio'
    },
    trustLogos: [
        { imageLink: './assets/inrae.png', link: 'https://www.inrae.fr/' },
        { imageLink: './assets/ensat.png', link: 'https://www.ensat.fr/fr/index.html' }
    ],
    maps: {
      jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJkZXYua2FsaXNpby54eXoiLCJpc3MiOiJrYWxpc2lvIn0.CGvJwPPkuiFvNzo3zUBb-_vwD0CKbUfm7w7TkCY-Ts4'
    }
  },
  vite: {
    optimizeDeps: {
			include: ['keycloak-js', 'lodash'],
		},
		ssr: {
			noExternal: ['vitepress-theme-kalisio']
		}
  }
})

function getAProposSidebar(){
  return [
    {text: 'Introduction', link: '/01_apropos/introduction' },
    {text: 'Histoire', link: '/01_apropos/histoire' },
    {text: 'Site web', link: '/01_apropos/siteweb' }
  ] 
}

function getComprendreSidebar(){
  return [
    {text: 'Théorie', link: '/02_comprendre/theorie' },
    {text: 'Terrain', link: '/02_comprendre/terrain' },
    {text: 'Réseau', link: '/02_comprendre/reseau' }
  ]
}

function getParticiperSidebar(){
  return [
    {text: 'Introduction', link: '/03_participer/base' },
    {text: 'Histoire', link: '/03_participer/rover' },
  ]
}

function getExploiterSidebar(){
  return [
    {text: 'Bluetooth GNSS', link: '/04_exploiter/bgnss' },
    {text: 'Webmapping', link: '/04_exploiter/webmapping' }
  ]
}

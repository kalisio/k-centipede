
module.exports = {
    base: '/k-centipede/',
    title: 'Centipède RTK',
    description: 'La collaboration au service de la précision',
    head: [
      ['link', {rel:'icon', type: "image/png", sizes: "32x32", href: 'centipede_icon.png'}],
    ],
    theme: 'kalisio',
    themeConfig: {
      docsDir: 'docs',
      nav: [
        {text: 'A propos', link: '/01_apropos/introduction' },
        {text: 'Comprendre', link: '/02_comprendre/theorie' },
        {text: 'Participer', link: '/03_participer/base' },
        {text: 'Exploiter', link: '/04_exploiter/bgnss' },
      ],
      sidebar: {
        '/01_apropos/': getAProposSidebar(),
        '/02_comprendre/': getFonctionnementSidebar(),
        '/03_participer/': getParticiperSidebar(),
        '/04_exploiter/': getAktnMapSidebar(),
      }
    },
    plugins: [
      [
        'vuepress-plugin-mathjax',
        {
          target: 'svg',
          macros: {
            '*': '\\times',
          }
        }
      ]
    ]
  }
  
  function getAProposSidebar(){
    return [
      'introduction',
      'histoire',
      'siteweb',
    ] 
  }

  function getFonctionnementSidebar(){
    return [
      'theorie',
      'terrain',
      'reseau',
    ]
  }
  
  function getAktnMapSidebar(){
    return [
      'bgnss',
      'tuto',
    ]
  }

  function getParticiperSidebar(){
    return [
      'base',
      'rover',
    ]
  }
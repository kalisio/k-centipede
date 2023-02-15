
module.exports = {
    base: '/k-centipede/',
    title: 'Centipède RTK',
    description: 'La collaboration au service de la précision',
    head: [
      //['link', {rel:'icon', href: '/public/centipede_01.png'}],
      //['link', {rel: 'icon', href: '/public/centipede_01.png'}],
      //['link', { rel: 'manifest', href: '/manifest.json' }],
      //['link', { rel: "stylesheet", href: "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" }]
    ],
    theme: 'kalisio',
    themeConfig: {
      docsDir: 'docs',
      nav: [
        {text: 'A propos', link: '/01_apropos/introduction' },
        {text: 'Fonctionnement', link: '/02_fonctionnement/theorie' },
        {text: 'Participer', link: '/03_participer/base' },
        {text: 'Applications', link: '/04_aktnmap/bgnss' },
      ],
      sidebar: {
        '/01_apropos/': getAProposSlidebar(),
        '/02_fonctionnement/': getFonctionnementSlidebar(),
        '/04_aktnmap/': getAktnMapSlidebar(),
        '/03_participer/': getParticiperSlidebar(),
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
  
  function getAProposSlidebar(){
    return [
      'introduction',
      'histoire',
    ] 
  }

  function getFonctionnementSlidebar(){
    return [
      'theorie',
      'terrain',
    ]
  }
  
  function getAktnMapSlidebar(){
    return [
      'bgnss',
      'tuto',
    ]
  }

  function getParticiperSlidebar(){
    return [
      'base',
      'rover',
    ]
  }
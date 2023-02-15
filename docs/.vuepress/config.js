
module.exports = {
    base: '/centipede/',
    title: 'Centipède RTK',
    description: 'La collaboration au service de la précision',
    head: [
      ['link', {rel:'icon', href: '/public/centipede_01.png'}],
      //['link', {rel: 'icon', href: '/public/centipede_01.png'}],
      //['link', { rel: 'manifest', href: '/manifest.json' }],
      //['link', { rel: "stylesheet", href: "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" }]
    ],
    theme: 'kalisio',
    themeConfig: {
      docsDir: 'docs',
      nav: [
        {text: 'A propos', link: '/01_A propos/introduction' },
        {text: 'Fonctionnement', link: '/02_Fonctionnement/theorie' },
        {text: 'Participer', link: '/03_Participer/base' },
        {text: 'Applications', link: '/04_AktnMap/bgnss' },
      ],
      sidebar: {
        '/01_A propos/': getAProposSlidebar(),
        '/02_Fonctionnement/': getFonctionnementSlidebar(),
        '/04_AktnMap/': getAktnMapSlidebar(),
        '/03_Participer/': getParticiperSlidebar(),
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
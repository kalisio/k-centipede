/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "01_apropos/histoire.html",
    "revision": "e3c8870fd1af880db752a3b1e8fee5eb"
  },
  {
    "url": "01_apropos/introduction.html",
    "revision": "e19d1c2704e857e9dcbc0ca879961204"
  },
  {
    "url": "01_apropos/siteweb.html",
    "revision": "35742cb34cdf7509e3cd4bd4b7560b2e"
  },
  {
    "url": "02_fonctionnement/reseau.html",
    "revision": "1fd4bf25e05cd24129e3b294d8994369"
  },
  {
    "url": "02_fonctionnement/terrain.html",
    "revision": "8c2abb238d8c03c09f14ab0f07dac708"
  },
  {
    "url": "02_fonctionnement/theorie.html",
    "revision": "589b549e0fbb3b8f778249aa12426145"
  },
  {
    "url": "03_participer/base.html",
    "revision": "397c87abeb4f5af245b99e30cb60a2b8"
  },
  {
    "url": "03_participer/rover.html",
    "revision": "44a2283d7cdc02e4fd60ca6e13075b69"
  },
  {
    "url": "04_aktnmap/bgnss.html",
    "revision": "01cbcc742fd0ca5ef9c31504ded47c9b"
  },
  {
    "url": "04_aktnmap/tuto.html",
    "revision": "a66913f8c429f91bdf1945776d26d0de"
  },
  {
    "url": "404.html",
    "revision": "1b49619232f3f54f4f1cc93b14e776f7"
  },
  {
    "url": "assets/css/0.styles.1ad307a8.css",
    "revision": "22b9fb54d20984d2006e914a38499d20"
  },
  {
    "url": "assets/img/base_01.f6ed5d83.jpg",
    "revision": "f6ed5d83aee2078cd53ad7d6a3acfdab"
  },
  {
    "url": "assets/img/base_02.9fe1e4d4.jpg",
    "revision": "9fe1e4d41948d6f6aaa59f20009a95b4"
  },
  {
    "url": "assets/img/base_03.b21830f4.jpg",
    "revision": "b21830f43cf2e7b8f0c546f278a891b0"
  },
  {
    "url": "assets/img/BTG_01.b38f6551.png",
    "revision": "b38f65514cec190214bc605d7160aca8"
  },
  {
    "url": "assets/img/BTG_02.4b3011ef.png",
    "revision": "4b3011ef727965a24f14cfe6f98cabb3"
  },
  {
    "url": "assets/img/BTG_03.e4ca9bcf.png",
    "revision": "e4ca9bcf9c67218178f296155b21dc32"
  },
  {
    "url": "assets/img/BTG_04.b1982040.png",
    "revision": "b1982040ead9c7cff1ce437feeffcbe9"
  },
  {
    "url": "assets/img/BTG_05.d796ac1a.png",
    "revision": "d796ac1a47f480f103fb89a110080984"
  },
  {
    "url": "assets/img/BTG_06.3926eda3.png",
    "revision": "3926eda34b7f1e170707573bbeb92e3b"
  },
  {
    "url": "assets/img/BTG_07.65b18317.png",
    "revision": "65b1831729f38d3ad52194fb3a10d533"
  },
  {
    "url": "assets/img/BTG_08.7f9a04b1.png",
    "revision": "7f9a04b1823fe898771669b904213212"
  },
  {
    "url": "assets/img/BTG_09.22a25842.png",
    "revision": "22a25842e9d107bdf2fd18947bec093f"
  },
  {
    "url": "assets/img/dble_diff.2bcd5e7a.png",
    "revision": "2bcd5e7a0be9848343d5d8a4e36946b9"
  },
  {
    "url": "assets/img/ensat.31d48174.png",
    "revision": "31d481747999df8152af92af8642c2ff"
  },
  {
    "url": "assets/img/Russie.05d75c39.jpg",
    "revision": "05d75c3943940aa00c715d31500cd5c7"
  },
  {
    "url": "assets/img/schema_reseau_RTK.da22117c.jpg",
    "revision": "da22117c2454c92798177633da259d8d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/voie_com_01.cd999ea9.png",
    "revision": "cd999ea94368a33e6cc2be2379b3902f"
  },
  {
    "url": "assets/img/voie_com_02.a6613090.png",
    "revision": "a66130907bee4279a66164f56441e5c7"
  },
  {
    "url": "assets/img/voie_com_03.f01db11f.png",
    "revision": "f01db11f0f05b90928d878f383e4dcde"
  },
  {
    "url": "assets/img/voie_com_04.f8d543e4.png",
    "revision": "f8d543e4c357d52b17925e95792205ce"
  },
  {
    "url": "assets/js/10.eaf04048.js",
    "revision": "dac0618812c3c31750e48d0f945ba6e6"
  },
  {
    "url": "assets/js/11.fbee4720.js",
    "revision": "634304396611aecee719d1fd57f2d774"
  },
  {
    "url": "assets/js/12.a94558a1.js",
    "revision": "ad619985dc161048c1586aae8f475c96"
  },
  {
    "url": "assets/js/13.507dacec.js",
    "revision": "380520859c8930cdbca54cdccc824c11"
  },
  {
    "url": "assets/js/14.613eafd2.js",
    "revision": "575c4da3f87f87ac23d7d412a021dc5d"
  },
  {
    "url": "assets/js/15.225ee767.js",
    "revision": "b03ebcc567f8ac76b0b0e49406fa0057"
  },
  {
    "url": "assets/js/16.ca3edf5d.js",
    "revision": "07562fbcf56700502c7fae5a8dea90c3"
  },
  {
    "url": "assets/js/17.d304804d.js",
    "revision": "ed61846d1af04c48e1b58ce4193a24be"
  },
  {
    "url": "assets/js/18.b050f5a3.js",
    "revision": "16d699d718eac48d5aa25541f2d8f209"
  },
  {
    "url": "assets/js/19.9d6ed637.js",
    "revision": "683965d6e9f5e1b4afba8c6140a76a8f"
  },
  {
    "url": "assets/js/2.dab0c0a9.js",
    "revision": "920dfb148fb8a48a95485b2c65d8b7c2"
  },
  {
    "url": "assets/js/20.3ee6c5f2.js",
    "revision": "9323ea493b3787de9c4448cd7f3e8324"
  },
  {
    "url": "assets/js/21.51cd55e5.js",
    "revision": "2b345811a9946196f17d1147a8407c30"
  },
  {
    "url": "assets/js/22.a0293ba6.js",
    "revision": "46af644250f3e0b737f0a44101c8f41b"
  },
  {
    "url": "assets/js/23.882737fd.js",
    "revision": "0f91c5be1e7a52b6eef32f1dae073bff"
  },
  {
    "url": "assets/js/24.c51c4390.js",
    "revision": "2fbb43b37b421aba9e376156731e40f4"
  },
  {
    "url": "assets/js/3.013982aa.js",
    "revision": "e3935c0ea2af3664b102e1705117b4c7"
  },
  {
    "url": "assets/js/4.93f1c90d.js",
    "revision": "3e4f8a1038e40331ae338c6b017f339d"
  },
  {
    "url": "assets/js/5.fb5eaee9.js",
    "revision": "b8c4800843a446e6a900dc562d504dff"
  },
  {
    "url": "assets/js/6.3fd2702a.js",
    "revision": "e07a8f8dfea050d85fff758e984c5dc7"
  },
  {
    "url": "assets/js/7.7bcf142a.js",
    "revision": "3650cec6491d3ae14d5af9e56d1c1723"
  },
  {
    "url": "assets/js/8.a36c1928.js",
    "revision": "002e339f095873f25418b6967978f9fb"
  },
  {
    "url": "assets/js/9.a090273e.js",
    "revision": "5048b3c2fe9651b4b4fb6b1b19e708ef"
  },
  {
    "url": "assets/js/app.f413b2c3.js",
    "revision": "6def5aea13737055429aabc8c3c3614c"
  },
  {
    "url": "centipede_icon.png",
    "revision": "725c0387e661629590ec1d62e269e168"
  },
  {
    "url": "centipede.png",
    "revision": "caec8dde172b7194093eb5566c4a2d6d"
  },
  {
    "url": "index.html",
    "revision": "3222373fb8ed132cce6b070985d78a40"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

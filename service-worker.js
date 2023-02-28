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
    "revision": "1cf5d9b584b688c0dee10fd81e272f3c"
  },
  {
    "url": "01_apropos/introduction.html",
    "revision": "a06b48aa32384d3d394d5b99b9857bd6"
  },
  {
    "url": "01_apropos/siteweb.html",
    "revision": "a54e8bc61f6f3520dcbbc919eae88aa7"
  },
  {
    "url": "02_fonctionnement/reseau.html",
    "revision": "6b7fb2dd8bf59b98ee115067478037dc"
  },
  {
    "url": "02_fonctionnement/terrain.html",
    "revision": "d9a6e31c46766f1d41c57bacf742a35d"
  },
  {
    "url": "02_fonctionnement/theorie.html",
    "revision": "c3871ccd5ada6c7486fb19415dabb1c4"
  },
  {
    "url": "03_participer/base.html",
    "revision": "9e084c2eeaf292561bff5aa72b9e3a3e"
  },
  {
    "url": "03_participer/rover.html",
    "revision": "54f5d18f88969545094e5bcd4a67e80f"
  },
  {
    "url": "04_aktnmap/bgnss.html",
    "revision": "d614476fcaf8b7835c96d62d6b1dc83f"
  },
  {
    "url": "04_aktnmap/tuto.html",
    "revision": "925293d2b053d84ee6c7d78a3c31b2e4"
  },
  {
    "url": "404.html",
    "revision": "3ddc2b88074817c012bdde53409ffbf9"
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
    "url": "assets/js/15.57152148.js",
    "revision": "4dc80ae8676df2517a79262f616334ef"
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
    "url": "assets/js/18.2c476a93.js",
    "revision": "4e99044ef037d1d4935b76be33cb3fcb"
  },
  {
    "url": "assets/js/19.4311ca71.js",
    "revision": "74ef3f50ea2a5d1836796f47164e0b14"
  },
  {
    "url": "assets/js/2.dab0c0a9.js",
    "revision": "920dfb148fb8a48a95485b2c65d8b7c2"
  },
  {
    "url": "assets/js/20.7fc2f7ec.js",
    "revision": "c22edde0864385fe1b1e33356a196005"
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
    "url": "assets/js/4.3b272601.js",
    "revision": "68be0fc96b7f94ca97bb13dc17f48e34"
  },
  {
    "url": "assets/js/5.72773e6c.js",
    "revision": "b87e3f4a44e295ca3a3d4bd06caa850e"
  },
  {
    "url": "assets/js/6.fc088d88.js",
    "revision": "271203d9baa47338bb5cbb753cb51564"
  },
  {
    "url": "assets/js/7.7719c6b2.js",
    "revision": "94238d9a064ca06ad322f59ff245ae0e"
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
    "url": "assets/js/app.0e01b68d.js",
    "revision": "873ebec7a0766c62aa8022fb5d8905a1"
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
    "revision": "c2f4fbe4bd315e487178f1bc92d07239"
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

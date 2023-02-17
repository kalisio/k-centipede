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
    "revision": "5ebdc700d742793c731a58e0f62e1d42"
  },
  {
    "url": "01_apropos/introduction.html",
    "revision": "184577cd2d52c5d4b5006b21be9910af"
  },
  {
    "url": "02_fonctionnement/reseau.html",
    "revision": "c44fcae1e8ed55a2b17156acbfdcc26b"
  },
  {
    "url": "02_fonctionnement/terrain.html",
    "revision": "04aeaed6d2a26833d5c7e9c10e12bddd"
  },
  {
    "url": "02_fonctionnement/theorie.html",
    "revision": "2e8be2a10b525f5518bf93eae2eb650a"
  },
  {
    "url": "03_participer/base.html",
    "revision": "9a841c33691363dbec2907a58d2aaecb"
  },
  {
    "url": "03_participer/rover.html",
    "revision": "0dd983e1a7e88b6e6d731c260a9fe251"
  },
  {
    "url": "04_aktnmap/bgnss.html",
    "revision": "3ad595f656544b9a0a509eef24c455e5"
  },
  {
    "url": "04_aktnmap/tuto.html",
    "revision": "c52f78bd23d4345a571e1d7f8e550b1d"
  },
  {
    "url": "404.html",
    "revision": "f761043c5911e54996c364ae8335c760"
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
    "url": "assets/js/10.7702b641.js",
    "revision": "5f505f96be1773e0c4334550c4e0f520"
  },
  {
    "url": "assets/js/11.34d70786.js",
    "revision": "f01057a1cfc3a08e5c1fa0e0a2027b0b"
  },
  {
    "url": "assets/js/12.5289ec1a.js",
    "revision": "8d3ad8e1da94a2a12339bf57f2ed871e"
  },
  {
    "url": "assets/js/13.5001ddbb.js",
    "revision": "65c16f21b5093d5a6679dcad6ebaf2f7"
  },
  {
    "url": "assets/js/14.3b5c2062.js",
    "revision": "410704f47280e36cdce3929f03eb3b7c"
  },
  {
    "url": "assets/js/15.9fbc6fe7.js",
    "revision": "e7a614b232d19bd3edc9f0069f3e38ee"
  },
  {
    "url": "assets/js/16.d3ecd80d.js",
    "revision": "b22f30f4e3e0c453138cffac60a572a2"
  },
  {
    "url": "assets/js/17.d52626fd.js",
    "revision": "69b41737dddbde9901069ac7110c66ca"
  },
  {
    "url": "assets/js/18.4cc4f0e1.js",
    "revision": "26c168999c6c57452cef364ac9ff1981"
  },
  {
    "url": "assets/js/19.5bfee8c0.js",
    "revision": "691094e4d52d0c84419af850db474e43"
  },
  {
    "url": "assets/js/2.fbcfb2d1.js",
    "revision": "af9d8c6957fe612ca1c4f1ddddc1ccba"
  },
  {
    "url": "assets/js/20.f1b499eb.js",
    "revision": "b983fc68288014bea722ffe52e7a3811"
  },
  {
    "url": "assets/js/21.1f136bb0.js",
    "revision": "a67d9de0ed056b7e1da3c5df3b4b88cf"
  },
  {
    "url": "assets/js/22.95c7906f.js",
    "revision": "ce0735a338f035e6e155ae2c3c8c9f7b"
  },
  {
    "url": "assets/js/23.9e48266f.js",
    "revision": "0a212fe8a417749ddd57f46097f51e3d"
  },
  {
    "url": "assets/js/3.f949efb6.js",
    "revision": "b92d7537fc57888b5f2012b33df6ee7b"
  },
  {
    "url": "assets/js/4.ca9031b9.js",
    "revision": "a249712ef9fcdfeb1b27e4af57254183"
  },
  {
    "url": "assets/js/5.4689df99.js",
    "revision": "5a28b4aab0f5ee20da49f421dbfdd755"
  },
  {
    "url": "assets/js/6.447e32cb.js",
    "revision": "b8762b2205e628dce46cfe537f503822"
  },
  {
    "url": "assets/js/7.5b42c288.js",
    "revision": "e2064d765680e837a128446681d4e6e4"
  },
  {
    "url": "assets/js/8.7ce6cc8d.js",
    "revision": "ddbd6a7bb75659f610eecfeeb676d03e"
  },
  {
    "url": "assets/js/9.9fba9b66.js",
    "revision": "759cf83437df71bec979053c3069c00c"
  },
  {
    "url": "assets/js/app.76ddebda.js",
    "revision": "8ffbc3405397a09cc91f8651c56e550f"
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
    "revision": "2cb4562e09e112794bb2e5c5c5802afc"
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

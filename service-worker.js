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
    "revision": "1f9c427dfb513f14d481175f7db4d362"
  },
  {
    "url": "01_apropos/introduction.html",
    "revision": "58322fbf54c51b3732cd934000a00410"
  },
  {
    "url": "02_fonctionnement/reseau.html",
    "revision": "59fa381242ddb25ba5dcce5757e3155e"
  },
  {
    "url": "02_fonctionnement/terrain.html",
    "revision": "45488366a76e38ff285cc952d39d1749"
  },
  {
    "url": "02_fonctionnement/theorie.html",
    "revision": "7f81ce2e205410ba8847e4e756dfd703"
  },
  {
    "url": "03_participer/base.html",
    "revision": "1f3e70f75d70bf4c732b661f9993d665"
  },
  {
    "url": "03_participer/rover.html",
    "revision": "b36596f3a91da2d8763c6c84c29825d9"
  },
  {
    "url": "04_aktnmap/bgnss.html",
    "revision": "11ee69ad7f46269ace17115972ceb275"
  },
  {
    "url": "04_aktnmap/tuto.html",
    "revision": "f7adc0865874ce19ca7b3f6b4feb3c04"
  },
  {
    "url": "404.html",
    "revision": "08f011741a1e8db35c7ba3fe21e773e4"
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
    "url": "assets/img/ensat.61a9842a.png",
    "revision": "61a9842a5215dcfa36bffb079a05b1f6"
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
    "url": "assets/js/10.b8a965f2.js",
    "revision": "a1f8d0791a65d1f2f8ec1c0c54620704"
  },
  {
    "url": "assets/js/11.b6b3943c.js",
    "revision": "fce12549a2c897f33858cd1efcc15f7b"
  },
  {
    "url": "assets/js/12.2a06b74f.js",
    "revision": "540cabbdfbaa1b772b09d3125f2da682"
  },
  {
    "url": "assets/js/13.aae66b72.js",
    "revision": "9ee3f6f6be6c539acbcd5bb8261c0a7d"
  },
  {
    "url": "assets/js/14.e38cace1.js",
    "revision": "6e9ad9b9db73bd54ca2adf86dab34227"
  },
  {
    "url": "assets/js/15.dd9945c2.js",
    "revision": "f0e4d07cc3e21fb802b08dd670eb0122"
  },
  {
    "url": "assets/js/16.913fc8ee.js",
    "revision": "a722743fe458b85d8aafd402015a5a05"
  },
  {
    "url": "assets/js/17.7b5fa6a5.js",
    "revision": "6434604c59dc42f6bb4d519b45b7dfca"
  },
  {
    "url": "assets/js/18.4f3eb7e7.js",
    "revision": "cc299bd1e9da1b1b8b4d5cfdb820f687"
  },
  {
    "url": "assets/js/19.d65d127b.js",
    "revision": "33776a99c36b59c9d0c66f2065baa729"
  },
  {
    "url": "assets/js/2.ba1c7973.js",
    "revision": "6fecaec4072c3f9117e339cd7682f0ce"
  },
  {
    "url": "assets/js/20.01075f6b.js",
    "revision": "e3cd2ccfd919c10ca4c7581c8d936450"
  },
  {
    "url": "assets/js/21.5712391e.js",
    "revision": "fecf14a6b4b6b3487e352a3e4f725484"
  },
  {
    "url": "assets/js/22.1e66e417.js",
    "revision": "1eac6360558593c13d62c2b5edab054a"
  },
  {
    "url": "assets/js/23.8ff20058.js",
    "revision": "4a09807f5cfa25820c1da035be6b0bca"
  },
  {
    "url": "assets/js/3.0630018e.js",
    "revision": "ac97e6e4eb6fb8516cf21662d5d3191e"
  },
  {
    "url": "assets/js/4.fdcb6aa1.js",
    "revision": "6c2a43fea1ba986c615870ea38a0f5dd"
  },
  {
    "url": "assets/js/5.7a5f97dd.js",
    "revision": "84e111b81a9d85e1f0fd39edc3a2a5bb"
  },
  {
    "url": "assets/js/6.681e1207.js",
    "revision": "9e7131ecb691237c58cb9a8774efa069"
  },
  {
    "url": "assets/js/7.9c1a913d.js",
    "revision": "8c8462f64cf02ce5f65450ca02958285"
  },
  {
    "url": "assets/js/8.39b8f260.js",
    "revision": "fa5021ee3f591abe3246b37d5ae441ca"
  },
  {
    "url": "assets/js/9.d8f56778.js",
    "revision": "11be0dd954d3acfbec0a9446343e7951"
  },
  {
    "url": "assets/js/app.537458c0.js",
    "revision": "a734130ffdd5df5e189e3a2619215265"
  },
  {
    "url": "centipede.png",
    "revision": "caec8dde172b7194093eb5566c4a2d6d"
  },
  {
    "url": "index.html",
    "revision": "cc9c83069eabfaa67b4550b5d7647fc7"
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

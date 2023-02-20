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
    "revision": "00a42c10b1a1829173907745331d5cec"
  },
  {
    "url": "01_apropos/introduction.html",
    "revision": "95c53612488b2d26b9a6c2e3ddbf92fa"
  },
  {
    "url": "01_apropos/siteweb.html",
    "revision": "c07eefcef61c052f60108317d0b7aff2"
  },
  {
    "url": "02_fonctionnement/reseau.html",
    "revision": "0bf80e5b3d0b772ad855e8ca541aa979"
  },
  {
    "url": "02_fonctionnement/terrain.html",
    "revision": "2328269ab5f972e4340bcdc0a71dfb49"
  },
  {
    "url": "02_fonctionnement/theorie.html",
    "revision": "3437d71a57ba5e65cd7debf3e7514c00"
  },
  {
    "url": "03_participer/base.html",
    "revision": "bc40a24192d0bbadaa3d19a24126dcb5"
  },
  {
    "url": "03_participer/rover.html",
    "revision": "67e0c80c89a31a88d2583e938a9a255a"
  },
  {
    "url": "04_aktnmap/bgnss.html",
    "revision": "d6fe2181f86ba2c5d0a0ce334b147bca"
  },
  {
    "url": "04_aktnmap/tuto.html",
    "revision": "eb500a7b79d1c6a9d00e6f265f240c1d"
  },
  {
    "url": "404.html",
    "revision": "29143ab92aa08189a2ae7b93b86fc0b7"
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
    "url": "assets/js/11.6465259e.js",
    "revision": "f748c0e31cb7b0876d81d2d08c392319"
  },
  {
    "url": "assets/js/12.5289ec1a.js",
    "revision": "8d3ad8e1da94a2a12339bf57f2ed871e"
  },
  {
    "url": "assets/js/13.0fe75f87.js",
    "revision": "4aec03982930bfa3c39f5cc9b0d63764"
  },
  {
    "url": "assets/js/14.e8276ab0.js",
    "revision": "62c3174119f5a20524784595dad96cd6"
  },
  {
    "url": "assets/js/15.9fbc6fe7.js",
    "revision": "e7a614b232d19bd3edc9f0069f3e38ee"
  },
  {
    "url": "assets/js/16.b9df70d1.js",
    "revision": "69964892e2ecee0ba05d5ca7e7c36ebe"
  },
  {
    "url": "assets/js/17.d52626fd.js",
    "revision": "69b41737dddbde9901069ac7110c66ca"
  },
  {
    "url": "assets/js/18.7bd25d90.js",
    "revision": "54080fa8c88b354cbd2d56a18d689e38"
  },
  {
    "url": "assets/js/19.adb2c602.js",
    "revision": "0141b07f511165ea43f21d7877216ce4"
  },
  {
    "url": "assets/js/2.fbcfb2d1.js",
    "revision": "af9d8c6957fe612ca1c4f1ddddc1ccba"
  },
  {
    "url": "assets/js/20.b69e4ad2.js",
    "revision": "592546e7ba6ca8f46a7af5bbec9a5d49"
  },
  {
    "url": "assets/js/21.71199b07.js",
    "revision": "f835c86584c5ffb91d010c5811e39d31"
  },
  {
    "url": "assets/js/22.a3293199.js",
    "revision": "f0ffd53a8784f53a63c2781e51d5437a"
  },
  {
    "url": "assets/js/23.775c75da.js",
    "revision": "bcf431045e56ef0aa95959c2db7b4d2d"
  },
  {
    "url": "assets/js/24.0d352d35.js",
    "revision": "e619050b0b85a4e281cbe34d877afc2f"
  },
  {
    "url": "assets/js/3.f949efb6.js",
    "revision": "b92d7537fc57888b5f2012b33df6ee7b"
  },
  {
    "url": "assets/js/4.4aa2788a.js",
    "revision": "ce4ab7e9a542687aaed106e5fcab3b30"
  },
  {
    "url": "assets/js/5.a4b6eba6.js",
    "revision": "038f592361cdf15317b1640fb586eb4f"
  },
  {
    "url": "assets/js/6.dd4d8f57.js",
    "revision": "a79a58bdc2d448ffc16a6813fdcefee0"
  },
  {
    "url": "assets/js/7.5b42c288.js",
    "revision": "e2064d765680e837a128446681d4e6e4"
  },
  {
    "url": "assets/js/8.0563b841.js",
    "revision": "2c09f308e4b1b320c60dc71e0307771c"
  },
  {
    "url": "assets/js/9.9fba9b66.js",
    "revision": "759cf83437df71bec979053c3069c00c"
  },
  {
    "url": "assets/js/app.d4784f17.js",
    "revision": "133092a1ff9744afee5d788baeea7140"
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
    "revision": "db85e20258ee54dde11fe2407a942ef1"
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

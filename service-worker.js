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
    "url": "02_Fonctionnement/terrain.html",
    "revision": "895dcf68fccda60e178f57853ec61c45"
  },
  {
    "url": "02_Fonctionnement/theorie.html",
    "revision": "b7412ff17c3ac5d86188bf16ebe7aaf2"
  },
  {
    "url": "03_Participer/base.html",
    "revision": "6a975a986c6555a909a6040c982cc7a9"
  },
  {
    "url": "03_Participer/rover.html",
    "revision": "2bf09b4ecd4b89f6fae9aeef5c583123"
  },
  {
    "url": "04_AktnMap/bgnss.html",
    "revision": "5fd11f6e1aee73d111288793d1822c26"
  },
  {
    "url": "04_AktnMap/tuto.html",
    "revision": "36418ed39908a7798adaa5070365085d"
  },
  {
    "url": "404.html",
    "revision": "b39ccbe81db749fe089ffacfd6460af8"
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
    "url": "assets/img/schema_reseau_RTK.fc92839b.jpg",
    "revision": "fc92839b27c619e8cf0d8583e78d9706"
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
    "url": "assets/img/voie_com_02.9a7a9074.png",
    "revision": "9a7a90743c05fdeeee4757e14e28d497"
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
    "url": "assets/js/11.ccc21a54.js",
    "revision": "0f8be79e718f8d6cabc864d9193f1c81"
  },
  {
    "url": "assets/js/12.eb738041.js",
    "revision": "83ac350844b0557e2573e0eff9bcca01"
  },
  {
    "url": "assets/js/13.822211de.js",
    "revision": "0a7f10add69bb03d3a40b74ceb04fb65"
  },
  {
    "url": "assets/js/14.33b22fc3.js",
    "revision": "550e12512daf6d1aafccafa3628a4fed"
  },
  {
    "url": "assets/js/15.e1526aa3.js",
    "revision": "f48dee523523d8b12606166625b6be42"
  },
  {
    "url": "assets/js/16.ef2a8c53.js",
    "revision": "b2677f344418dd7482ac682e9486df25"
  },
  {
    "url": "assets/js/17.d4da1265.js",
    "revision": "5d259730811f2bd29e4d2cbf41e57ffe"
  },
  {
    "url": "assets/js/18.ed56096e.js",
    "revision": "f383c211a336904a655fd2d6b9debd5f"
  },
  {
    "url": "assets/js/19.6043df9f.js",
    "revision": "b87ac9ba8b1e00d8feec58c3b9e56392"
  },
  {
    "url": "assets/js/2.ba1c7973.js",
    "revision": "6fecaec4072c3f9117e339cd7682f0ce"
  },
  {
    "url": "assets/js/20.de0c8dfd.js",
    "revision": "80d0d0a381076a46b23b63c7541d8c81"
  },
  {
    "url": "assets/js/3.0630018e.js",
    "revision": "ac97e6e4eb6fb8516cf21662d5d3191e"
  },
  {
    "url": "assets/js/4.f924759e.js",
    "revision": "233befe39dc7299bc0417ca3532b06dc"
  },
  {
    "url": "assets/js/5.d6d7b449.js",
    "revision": "34fcc64c750b09e9e437bea743572e1d"
  },
  {
    "url": "assets/js/6.7eecc1e6.js",
    "revision": "24768794bbab84801151e50dc5206503"
  },
  {
    "url": "assets/js/7.9c1a913d.js",
    "revision": "8c8462f64cf02ce5f65450ca02958285"
  },
  {
    "url": "assets/js/8.226c169c.js",
    "revision": "2e7b32d3e9a9734e0a61a1a18c493a62"
  },
  {
    "url": "assets/js/9.d8f56778.js",
    "revision": "11be0dd954d3acfbec0a9446343e7951"
  },
  {
    "url": "assets/js/app.9219113f.js",
    "revision": "a8ac05cbe104d8f8b84b2f8b1061f5ac"
  },
  {
    "url": "centipede.png",
    "revision": "caec8dde172b7194093eb5566c4a2d6d"
  },
  {
    "url": "index.html",
    "revision": "c70fffe85c4cb14677375e7e494b46aa"
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

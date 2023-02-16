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
    "url": "01_apropos_/histoire.html",
    "revision": "99501552b28bd5f385252acf740a8f78"
  },
  {
    "url": "01_apropos_/introduction.html",
    "revision": "22239834c2b2e6854c707ed7d44eb50e"
  },
  {
    "url": "02_fonctionnement_/reseau.html",
    "revision": "822a31dfac53bc1088de7407d7620529"
  },
  {
    "url": "02_fonctionnement_/terrain.html",
    "revision": "c4543a7afa3e269650fb9f6d0dea1288"
  },
  {
    "url": "02_fonctionnement_/theorie.html",
    "revision": "61d177654b49750af90eff277c7ef212"
  },
  {
    "url": "03_participer_/base.html",
    "revision": "cb3b6a7cef861976931d97ad5b1feea1"
  },
  {
    "url": "03_participer_/rover.html",
    "revision": "39a63b9d11497a9cb2b3ea50ddc46b53"
  },
  {
    "url": "04_aktnmap_/bgnss.html",
    "revision": "24c6ebe564c248b45298277c2043614f"
  },
  {
    "url": "04_aktnmap_/tuto.html",
    "revision": "293beef251b89a78ec08adaee6f307b9"
  },
  {
    "url": "404.html",
    "revision": "55f2a0fd4d22e193b2a2e81149ccc9f1"
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
    "url": "assets/js/12.fd82dae3.js",
    "revision": "540cabbdfbaa1b772b09d3125f2da682"
  },
  {
    "url": "assets/js/13.d1c984f9.js",
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
    "url": "assets/js/16.bc629fc5.js",
    "revision": "a722743fe458b85d8aafd402015a5a05"
  },
  {
    "url": "assets/js/17.ecba70d8.js",
    "revision": "6434604c59dc42f6bb4d519b45b7dfca"
  },
  {
    "url": "assets/js/18.f5789fdf.js",
    "revision": "cc299bd1e9da1b1b8b4d5cfdb820f687"
  },
  {
    "url": "assets/js/19.3b408cc1.js",
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
    "url": "assets/js/4.50b5809b.js",
    "revision": "6c2a43fea1ba986c615870ea38a0f5dd"
  },
  {
    "url": "assets/js/5.aa1cac38.js",
    "revision": "84e111b81a9d85e1f0fd39edc3a2a5bb"
  },
  {
    "url": "assets/js/6.71128114.js",
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
    "url": "assets/js/app.76724b7d.js",
    "revision": "08ae5deab516f0a1b7b88fa25b66c5bd"
  },
  {
    "url": "centipede.png",
    "revision": "caec8dde172b7194093eb5566c4a2d6d"
  },
  {
    "url": "index.html",
    "revision": "1295b13dd328be44e3c4c95f380de77a"
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

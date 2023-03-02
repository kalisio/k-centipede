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
    "revision": "5c4346f3840939c3dc460791df5d8d4c"
  },
  {
    "url": "01_apropos/introduction.html",
    "revision": "54af09ac37ffc916d84f66f92adf0ba1"
  },
  {
    "url": "01_apropos/kalisio_centipede.html",
    "revision": "eb4425f464434765b1c3f2686d5f4802"
  },
  {
    "url": "02_fonctionnement/reseau.html",
    "revision": "5925ac0e94abce91b839d00546d5a278"
  },
  {
    "url": "02_fonctionnement/terrain.html",
    "revision": "8ea9d8a4d6de37949e842f87e6f4eeeb"
  },
  {
    "url": "02_fonctionnement/theorie.html",
    "revision": "11a33f2c013f20e615cd7fc42f12885a"
  },
  {
    "url": "03_participer/base.html",
    "revision": "037b28a0d0f93e8d899e528936138152"
  },
  {
    "url": "03_participer/rover.html",
    "revision": "3e11b540b926a10e84b7ff423a266dea"
  },
  {
    "url": "04_aktnmap/bgnss.html",
    "revision": "df41804e2c4244288d1419d22ef36513"
  },
  {
    "url": "04_aktnmap/tuto.html",
    "revision": "83167ea4184cb1d7a0c9348e27b50393"
  },
  {
    "url": "404.html",
    "revision": "bac179776a47bf9d297bddcf2c2f3664"
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
    "url": "assets/img/requetes_kano.04df0389.jpg",
    "revision": "04df03896ba4f5e1dd4afd614258ec9c"
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
    "url": "assets/js/10.9fecb169.js",
    "revision": "bb54a82254fb980db2dbe97cb8d0cc16"
  },
  {
    "url": "assets/js/11.b0a802dc.js",
    "revision": "3a6e925d798fe636958d5fe5d26de549"
  },
  {
    "url": "assets/js/12.4d90aa40.js",
    "revision": "2367fdca197e6fd6471307df06feb33d"
  },
  {
    "url": "assets/js/13.e4eddb6c.js",
    "revision": "abdb3018afd1e606ac17a64c0f713973"
  },
  {
    "url": "assets/js/14.eca9b2a3.js",
    "revision": "faaa3d44f154dcf5e6ca51c981a34100"
  },
  {
    "url": "assets/js/15.71bf5179.js",
    "revision": "de791b290897eb269b9967d55b7e0e26"
  },
  {
    "url": "assets/js/16.95517adb.js",
    "revision": "e9d2955625cd58874b5b0b9883318b79"
  },
  {
    "url": "assets/js/17.d0daf91a.js",
    "revision": "80e9eb8943c3bea4f8684dd20ebb4ccd"
  },
  {
    "url": "assets/js/18.9da8731a.js",
    "revision": "fde810b00e07f509204688f1010b53f8"
  },
  {
    "url": "assets/js/19.699a2b21.js",
    "revision": "512bf9b8862ec7b0e8b7f3e2690d570e"
  },
  {
    "url": "assets/js/2.ecf1a53e.js",
    "revision": "cb669ce9bc6dfa5c56ae7760acba0fa3"
  },
  {
    "url": "assets/js/20.3f0568cc.js",
    "revision": "492a9bdc78ff6522e874bd1bbd68fcc8"
  },
  {
    "url": "assets/js/21.9b457eb8.js",
    "revision": "85d5181679f27e318f37d2780fb2fdf6"
  },
  {
    "url": "assets/js/22.c08fb79a.js",
    "revision": "3b8aa8f918dda47722884807b9507e7f"
  },
  {
    "url": "assets/js/23.cb83e000.js",
    "revision": "ded1b9b6e80bf1f94ec4b5dadf97c1ba"
  },
  {
    "url": "assets/js/24.15bba8f9.js",
    "revision": "76d32f30f9edac9d10714dbe7d788d75"
  },
  {
    "url": "assets/js/3.4fe1614e.js",
    "revision": "08514b106a33a4a5d0ca35a1dfd3b4f9"
  },
  {
    "url": "assets/js/4.0c29075b.js",
    "revision": "eba8022539dfe3f4aae115ede821202c"
  },
  {
    "url": "assets/js/5.77ee3e83.js",
    "revision": "4576ae51f6574ed018faa11690abf14c"
  },
  {
    "url": "assets/js/6.1a00ac1e.js",
    "revision": "0d4eee963ba58a10f76f672fb9983c24"
  },
  {
    "url": "assets/js/7.2b3d76c2.js",
    "revision": "13bc2fdbeb1e86c265529088d6155d6f"
  },
  {
    "url": "assets/js/8.5027f8e9.js",
    "revision": "98f777a2b8aa5ce76a14d6536a30d69c"
  },
  {
    "url": "assets/js/9.6ad8ec07.js",
    "revision": "b75e688b2b94ed7f3aec89ea92c96c6e"
  },
  {
    "url": "assets/js/app.999c1ccd.js",
    "revision": "0caea4d92d45fb1115127bddb2cedf7f"
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
    "revision": "8372cbe2c30427d6549af25186ec6f6e"
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

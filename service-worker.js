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
    "url": "404.html",
    "revision": "438a6867cedfb1b7ebb91185aea60905"
  },
  {
    "url": "assets/css/0.styles.a8e65e1e.css",
    "revision": "e90718f88fcacdfb400f2970c31b5e81"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/js/1.cbc48427.js",
    "revision": "5d53b070453a09fb1f2afd1c7ad808ad"
  },
  {
    "url": "assets/js/10.1fce2c98.js",
    "revision": "9b755b11ab9cdc160ce1f8500bfbec32"
  },
  {
    "url": "assets/js/11.e4b80e32.js",
    "revision": "23e52eb16ce41ffda96e4eb7ffe9c0c7"
  },
  {
    "url": "assets/js/14.34192e0b.js",
    "revision": "99c39776d0c2a220c6f22e68f5912e2d"
  },
  {
    "url": "assets/js/15.58223907.js",
    "revision": "491cdbd9f451dea658a5148f946d0ce6"
  },
  {
    "url": "assets/js/16.158e872a.js",
    "revision": "308023ee788ddc0fd0f4b7da6e86f3c3"
  },
  {
    "url": "assets/js/17.09cee8fa.js",
    "revision": "6607af9d6b31570b74571d19d1608746"
  },
  {
    "url": "assets/js/18.8353d883.js",
    "revision": "2faad6fe4980169ad385bd2e0cda142b"
  },
  {
    "url": "assets/js/19.5a5a3d4c.js",
    "revision": "1a7d9cf0682bd885128c7d1fcbc13f5b"
  },
  {
    "url": "assets/js/2.7bbafcfb.js",
    "revision": "541a4be2c71e44cb0f6699233804a696"
  },
  {
    "url": "assets/js/20.72ae1ea4.js",
    "revision": "c9119fb290f2ab6c7efcbc3754ee338d"
  },
  {
    "url": "assets/js/21.92ca2478.js",
    "revision": "80d446bd15a62a38977cf76fd77f3f3e"
  },
  {
    "url": "assets/js/22.9bdfac6d.js",
    "revision": "47b32da1c4676bbb41b9b18a3cf73d18"
  },
  {
    "url": "assets/js/23.8c1c1bf5.js",
    "revision": "506ffed9af22e0eb92493a147f4e88ab"
  },
  {
    "url": "assets/js/24.c604b461.js",
    "revision": "7f94d5c47b9af6660774ffb74dca3f89"
  },
  {
    "url": "assets/js/25.ac453816.js",
    "revision": "7fbc7889a6153c2091e8e6a0d65672c3"
  },
  {
    "url": "assets/js/26.e94446b5.js",
    "revision": "9601ed0c7308f0f351c9a60c00bbdd68"
  },
  {
    "url": "assets/js/27.bfb8ef6e.js",
    "revision": "e99cc90fbde37958a7a663a11a005207"
  },
  {
    "url": "assets/js/28.54c8c489.js",
    "revision": "883f321e2249aac19cfed087737bc060"
  },
  {
    "url": "assets/js/29.d3a418ec.js",
    "revision": "aab5718f50988de9f1a36a862d86b4ea"
  },
  {
    "url": "assets/js/3.acd56328.js",
    "revision": "35b4d746d7055fdc1894026d6b341ff2"
  },
  {
    "url": "assets/js/30.45ce61ce.js",
    "revision": "9079ff15575ec4fafe00914c1bd8361b"
  },
  {
    "url": "assets/js/31.388f3785.js",
    "revision": "ab574ca6f42a5445893eb07ed4fa4f8b"
  },
  {
    "url": "assets/js/32.884987b1.js",
    "revision": "82af783547e9c17c56294bc507f50ce5"
  },
  {
    "url": "assets/js/33.bba8c3e7.js",
    "revision": "3ac4790341f223a6b788de8f7af2db39"
  },
  {
    "url": "assets/js/34.1e7e55ef.js",
    "revision": "5beb57414e5927eea18651d569965c81"
  },
  {
    "url": "assets/js/35.c6648b67.js",
    "revision": "5f9e530ad2c46aa4a565ff9d9e4bedc0"
  },
  {
    "url": "assets/js/36.03ad2331.js",
    "revision": "88e8f20692dd96701d2b5ef75d214555"
  },
  {
    "url": "assets/js/37.bfa9af5d.js",
    "revision": "6bf82188fc093e3c905493ab031eca84"
  },
  {
    "url": "assets/js/38.be03b35c.js",
    "revision": "c72818c715d7d50f4e81f09664d863a7"
  },
  {
    "url": "assets/js/39.c34fcab8.js",
    "revision": "409b1cf1b53f496cfd925a751a654997"
  },
  {
    "url": "assets/js/4.37ec3e7a.js",
    "revision": "bddf691acbaa999aace3bb8b3428fea6"
  },
  {
    "url": "assets/js/40.e6eb886e.js",
    "revision": "0e0f19a781bf81723fb1b559e990d46e"
  },
  {
    "url": "assets/js/41.aeaed39a.js",
    "revision": "279eb67b4a4e77964954075894c75eaa"
  },
  {
    "url": "assets/js/42.87f46c6c.js",
    "revision": "45c35987aab44ee515d0659f88479149"
  },
  {
    "url": "assets/js/43.764b89fe.js",
    "revision": "cc5a92894f965f1713cfae9dbf202372"
  },
  {
    "url": "assets/js/44.ecb42bf8.js",
    "revision": "abf87709107bb4a4a02f8c983bd719d7"
  },
  {
    "url": "assets/js/45.0f7660de.js",
    "revision": "888aae78f297b79cafed0276be207a74"
  },
  {
    "url": "assets/js/46.59e79624.js",
    "revision": "6d1ace3d164aba35058e265a307f424e"
  },
  {
    "url": "assets/js/47.3db55315.js",
    "revision": "513f303f10d0dca9bd5d0cc1f4b58001"
  },
  {
    "url": "assets/js/48.141a9722.js",
    "revision": "de480ce824d03f7944d50e2c12598f12"
  },
  {
    "url": "assets/js/49.7b2d0e18.js",
    "revision": "6a7bff2b5027d7269387c9263a896949"
  },
  {
    "url": "assets/js/5.04670e7d.js",
    "revision": "abd7eb47f10196b44530c7399c5bfaad"
  },
  {
    "url": "assets/js/50.af058ad7.js",
    "revision": "c6fa9b2dbe3d9c183856d2f98b6179bc"
  },
  {
    "url": "assets/js/6.1fd7cdf6.js",
    "revision": "a52b31ef11a554aec3d92e46c12e5875"
  },
  {
    "url": "assets/js/7.4c59e0fb.js",
    "revision": "8217fffe38874d63336a0f024d9115df"
  },
  {
    "url": "assets/js/8.c21be8f9.js",
    "revision": "68f43e34d78c42a1ae3b359f83b493f0"
  },
  {
    "url": "assets/js/9.b7b256d8.js",
    "revision": "b9ccbf83409da4b72515b4c9db03b219"
  },
  {
    "url": "assets/js/app.ef8af8be.js",
    "revision": "49d9b33df6884e2a155d4e99c37b2088"
  },
  {
    "url": "assets/js/vendors~docsearch.91e9f30e.js",
    "revision": "ccea806609ed1e554adb5c50a668c02c"
  },
  {
    "url": "avatar.jpg",
    "revision": "e41f603fc39396c9b4c53173fcfe6a0a"
  },
  {
    "url": "bg.jpg",
    "revision": "7b199165b5b8a37e16022d3d7eefaca3"
  },
  {
    "url": "blogs/code/arthas.html",
    "revision": "932fc299be0913f24e29d22a70da05a6"
  },
  {
    "url": "blogs/code/makeupblog.html",
    "revision": "88f21b349bcfdda315ffdc5ca5b4d031"
  },
  {
    "url": "blogs/induction.html",
    "revision": "e2a665367288e18fa58819c3643797dd"
  },
  {
    "url": "blogs/project/mallchat/mallchat01.html",
    "revision": "065d01a80566c5889141a1ccfbfa86b3"
  },
  {
    "url": "blogs/project/mallchat/mallchat02.html",
    "revision": "ccb9581a3c9b36ea07e29c50d11d5483"
  },
  {
    "url": "blogs/project/mallchat/mallchat03.html",
    "revision": "09094fe28430be6feef82e8133a6bf81"
  },
  {
    "url": "blogs/project/mallchat/mallchat04.html",
    "revision": "a20003f0a175ed12e30dd2d035b174af"
  },
  {
    "url": "blogs/project/mallchat/mallchat05.html",
    "revision": "63e227f07f620642e5a92747a0ca7e00"
  },
  {
    "url": "blogs/project/mallchat/mallchat06.html",
    "revision": "291d547664350a117c17941a87d3e4a7"
  },
  {
    "url": "blogs/share/share1.html",
    "revision": "8cec61ad47dbb547b0fe584305d6aab0"
  },
  {
    "url": "categories/arthas/index.html",
    "revision": "0c3e376f8f9fc296afdce9eafd14c788"
  },
  {
    "url": "categories/index.html",
    "revision": "5c8c5488655cadaba35bdeeb81716c4c"
  },
  {
    "url": "categories/抹茶项目/index.html",
    "revision": "2d7f6f4e46ea7cb15b500d0074640393"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "26db3ba7da3dacd0493e62ed2421813c"
  },
  {
    "url": "img.png",
    "revision": "530bc348ec34d7f47c72d3e70fdffe78"
  },
  {
    "url": "index.html",
    "revision": "5b6cbaf955d421b2afda80ad487ad667"
  },
  {
    "url": "live.jpg",
    "revision": "ef430b07860301877020be577496ead5"
  },
  {
    "url": "music.jpg",
    "revision": "7e04463add6761250adbc7055a10f3bc"
  },
  {
    "url": "tag/cpu/index.html",
    "revision": "2a68c5b8171b37d6f6e4dfff323efb30"
  },
  {
    "url": "tag/index.html",
    "revision": "56690cd9a6a0972918e1681d7cbf8e3f"
  },
  {
    "url": "tag/个人博客/index.html",
    "revision": "f24d685013ed7027b0f2f0ed1fda0b4a"
  },
  {
    "url": "tag/后端/index.html",
    "revision": "712094f89b51504c78b01961f2542930"
  },
  {
    "url": "tag/数据库，项目结构，前后端交互/index.html",
    "revision": "8b17fc465589e63dcd97ea041617a377"
  },
  {
    "url": "tag/记录/index.html",
    "revision": "c6f4495ec3976546d820644c09c1d840"
  },
  {
    "url": "timeline/index.html",
    "revision": "14edf32dee78a5f0405cea3480c0248e"
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

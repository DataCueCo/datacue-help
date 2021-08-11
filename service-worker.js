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
    "revision": "edad71b3c42a7f49e2dcef7cb2f6e203"
  },
  {
    "url": "admin/index.html",
    "revision": "86a1d99faae0fb33f41ceacb9380612e"
  },
  {
    "url": "admin/preview.css",
    "revision": "cebaac78750045b9dfe5bfaa9e626c2d"
  },
  {
    "url": "assets/css/0.styles.dcdee294.css",
    "revision": "509d50eab801bf1567a87c89442de471"
  },
  {
    "url": "assets/img/1-wide-2-narrow-desktop.3d1beeea.jpg",
    "revision": "3d1beeea2704a3be93854998595276e9"
  },
  {
    "url": "assets/img/1-wide-2-narrow-mobile.89ddf055.jpg",
    "revision": "89ddf0554b7237bdf3f9a54c69f08a25"
  },
  {
    "url": "assets/img/2-wide-2-narrow-desktop.923d6d77.jpg",
    "revision": "923d6d77399f1de4fa8ab5d3179f56cd"
  },
  {
    "url": "assets/img/2-wide-2-narrow-mobile.0eb2f479.jpg",
    "revision": "0eb2f4796505fcca40749ceb2db662f5"
  },
  {
    "url": "assets/img/3-wide-2-narrow-desktop.14635f80.jpg",
    "revision": "14635f8047b8496270f4a02338bafb15"
  },
  {
    "url": "assets/img/3-wide-2-narrow-mobile.732eeadb.jpg",
    "revision": "732eeadba2de0fd4be1e10316cecfd60"
  },
  {
    "url": "assets/img/banner_sidebar.d29c5558.png",
    "revision": "d29c5558d0bd3478c39e02530eb4ed36"
  },
  {
    "url": "assets/img/banner_upload_form.19c42a02.png",
    "revision": "19c42a02e3b7879d92076a7ffe17ce5f"
  },
  {
    "url": "assets/img/banner_upload_form.f342be3a.png",
    "revision": "f342be3a69e3bcc33b8f3aa1a517ef28"
  },
  {
    "url": "assets/img/banner-narrow.35a29490.jpg",
    "revision": "35a294906f7f40c0d043a6f848102797"
  },
  {
    "url": "assets/img/banner-settings.65735f9e.png",
    "revision": "65735f9e745a7595953b5ce192adb091"
  },
  {
    "url": "assets/img/banner-wide-static.1a3fcaab.jpg",
    "revision": "1a3fcaab6adb8e3ea5d2e08fe564ca4d"
  },
  {
    "url": "assets/img/banner-wide.c625b0d8.jpg",
    "revision": "c625b0d8f2a80ff435c9939e6e6a29f7"
  },
  {
    "url": "assets/img/custom-layout.ab909203.png",
    "revision": "ab909203cf8bcf570df2d1a68db1c385"
  },
  {
    "url": "assets/img/design-editor.8a80463c.png",
    "revision": "8a80463c0acdcdcd9ffcfe2ce6438bc3"
  },
  {
    "url": "assets/img/design-editor.f0c1f0a5.png",
    "revision": "f0c1f0a50c367fade1a9d59e629519d1"
  },
  {
    "url": "assets/img/magento_panel.078155eb.png",
    "revision": "078155eba08ad6db8caaab95503f72ee"
  },
  {
    "url": "assets/img/notifications-settings.5e23ce5c.png",
    "revision": "5e23ce5c6ffdfc18fad1d4a820ba3e6d"
  },
  {
    "url": "assets/img/notifications-widget.f1395fc5.png",
    "revision": "f1395fc5f0c0956a4f922f2227e52fa5"
  },
  {
    "url": "assets/img/prestashop_module_manager.2e92cdd9.gif",
    "revision": "2e92cdd9379398231923f5da2b138a5b"
  },
  {
    "url": "assets/img/product-placement-en.7f9ab76c.png",
    "revision": "7f9ab76ce01a261fb34acd2ecb330c60"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/test-mode.28f7da72.png",
    "revision": "28f7da728b36229ca862baa0c05cadce"
  },
  {
    "url": "assets/img/test-mode.a50f21df.png",
    "revision": "a50f21df04a2e75f5398f7b142468f83"
  },
  {
    "url": "assets/img/test-users.bbeeb11b.png",
    "revision": "bbeeb11b0ed30d5d98cdd88517564760"
  },
  {
    "url": "assets/img/woocommerce-enter-api-creds.56f8b3f3.gif",
    "revision": "56f8b3f31a912ba74d800a511dee33c2"
  },
  {
    "url": "assets/img/woocommerce-install-plugin.8ac91cc5.gif",
    "revision": "8ac91cc599499de3f338a091c17e3021"
  },
  {
    "url": "assets/js/10.fd40a38d.js",
    "revision": "c0245af5e03a400294432e061d7725fa"
  },
  {
    "url": "assets/js/11.881a6e19.js",
    "revision": "e21c0eb5dc489137dc55e617d48fa9dd"
  },
  {
    "url": "assets/js/12.15df71bf.js",
    "revision": "9ca94988c489ccd751564abbca50c425"
  },
  {
    "url": "assets/js/13.070c1885.js",
    "revision": "62325aad3ae950d87218db24586cdd0d"
  },
  {
    "url": "assets/js/14.26ca5fc7.js",
    "revision": "ed87bde61b37e7c71ff0de5ce2d4ebcd"
  },
  {
    "url": "assets/js/15.de3f9fe1.js",
    "revision": "6d76a29e4818b6754aaa85cdf7198eca"
  },
  {
    "url": "assets/js/16.e61b11ef.js",
    "revision": "3eb9d7ee002390a3134d5957f23c6ab6"
  },
  {
    "url": "assets/js/17.690ff926.js",
    "revision": "47e39f9a42172f90324f159e9ef14441"
  },
  {
    "url": "assets/js/18.322dbcfb.js",
    "revision": "53aa2ed683cfdfdec84c033dc0247d0f"
  },
  {
    "url": "assets/js/19.6432f723.js",
    "revision": "9055346a1d0994c313b9955b092aae3a"
  },
  {
    "url": "assets/js/2.14def567.js",
    "revision": "2dbaf8e6449bb8f60bfd51fefe2e9f8c"
  },
  {
    "url": "assets/js/20.87f9e90b.js",
    "revision": "b0d079c920045e5311b0834716cf1916"
  },
  {
    "url": "assets/js/21.368a733d.js",
    "revision": "ecd78c2299e394c2fe865cab516d75d9"
  },
  {
    "url": "assets/js/22.c801fc68.js",
    "revision": "8a71d76b1a51c50f5c77c26906cbb0ac"
  },
  {
    "url": "assets/js/23.e203dd18.js",
    "revision": "f4760d52f908db89551f9400ac168dcf"
  },
  {
    "url": "assets/js/24.a698ded4.js",
    "revision": "cfe3f014ebb3555bef9c4ee6b7d7995f"
  },
  {
    "url": "assets/js/25.40356685.js",
    "revision": "9bf539e7fad15e56d25cac0619f8a66e"
  },
  {
    "url": "assets/js/26.457291e1.js",
    "revision": "55bb17782fcbdbd5e9262f8cb8a1e385"
  },
  {
    "url": "assets/js/27.5cb323b3.js",
    "revision": "131c163f8105e45865eb009140f2c1e4"
  },
  {
    "url": "assets/js/28.18e38b4a.js",
    "revision": "47744fa0d81425e2d8cec2f229cd713d"
  },
  {
    "url": "assets/js/29.4ae3d04a.js",
    "revision": "255671950239c4371b771822fe0a4380"
  },
  {
    "url": "assets/js/3.2c3336b5.js",
    "revision": "7556628d9f5d6b3300432206db1f068c"
  },
  {
    "url": "assets/js/30.b76f9c32.js",
    "revision": "535ffd672fca60721def23220155ae64"
  },
  {
    "url": "assets/js/31.a7d5b08c.js",
    "revision": "b94d29397017d68debe4eb93a8aa85a1"
  },
  {
    "url": "assets/js/32.997440ee.js",
    "revision": "0c983c1b05e8ca4f1b3337e354646572"
  },
  {
    "url": "assets/js/33.2e1f61e1.js",
    "revision": "df899243dd793897edccdebe649bf2df"
  },
  {
    "url": "assets/js/34.7bd4a665.js",
    "revision": "5ea7a378b0913fbea788a827a873be40"
  },
  {
    "url": "assets/js/35.f141131f.js",
    "revision": "c1d5dfa1196563b42d1083238c6c636d"
  },
  {
    "url": "assets/js/36.fd66eb2f.js",
    "revision": "cbb3fe26dcd0fbd7845bf5eb204b4317"
  },
  {
    "url": "assets/js/4.c3bec36a.js",
    "revision": "7105fe5c4c3cb2bc4b9496708a1db72f"
  },
  {
    "url": "assets/js/5.478c0c3a.js",
    "revision": "ae7704a9050caf1eaae6856bf9395116"
  },
  {
    "url": "assets/js/6.de634c6a.js",
    "revision": "5385b86a416f73c9c5a93b38e7d9d6d1"
  },
  {
    "url": "assets/js/7.2e7ebd60.js",
    "revision": "232cd99533ee2e4ae013bcc90cb4585d"
  },
  {
    "url": "assets/js/8.ba1bee8d.js",
    "revision": "d8e7478cdf41ed3c7b65b5c85448c0b9"
  },
  {
    "url": "assets/js/9.4114cfd7.js",
    "revision": "0143ac062265041313611d10bf9261f3"
  },
  {
    "url": "assets/js/app.1bf7238a.js",
    "revision": "40971aa56d0152d3fb03a49b86d24e18"
  },
  {
    "url": "bariol_regular-webfont.eot",
    "revision": "009db755421c19b5a07ac8af80b9f8e9"
  },
  {
    "url": "bariol_regular-webfont.svg",
    "revision": "268f619341995602ea7eba9007b101be"
  },
  {
    "url": "bariol_regular-webfont.ttf",
    "revision": "35617be464dcc6bcabffc00af39ada19"
  },
  {
    "url": "bariol_regular-webfont.woff",
    "revision": "d9da96eb3bfe90ee28eb7b481546a8ab"
  },
  {
    "url": "bariol_regular-webfont.woff2",
    "revision": "29f549d1a4c3962c3a244106dff38919"
  },
  {
    "url": "datacue_hero.svg",
    "revision": "e9a4f3a06bdfe0458bdb446d7368e956"
  },
  {
    "url": "es/guide/banners.html",
    "revision": "02548c90b50852e754644f7a66b2ec54"
  },
  {
    "url": "es/guide/index.html",
    "revision": "b277d9912563c3d965ebc27d9177146a"
  },
  {
    "url": "es/guide/notifications.html",
    "revision": "0427f4552fb220dce1c4286de4412f19"
  },
  {
    "url": "es/guide/products.html",
    "revision": "721d021094a8024ce19e222c0b35d959"
  },
  {
    "url": "es/index.html",
    "revision": "c6baf8f0bc17fa5ee3d80a2a1cafd7ed"
  },
  {
    "url": "es/install/advanced.html",
    "revision": "70ec31b24ba5b494ad9dfefd3c1126c1"
  },
  {
    "url": "es/install/custom.html",
    "revision": "4644c3cccd854f6551721cbe2f443bec"
  },
  {
    "url": "es/install/index.html",
    "revision": "f4bd154dea15675e0e4b1703494edba4"
  },
  {
    "url": "es/install/magento.html",
    "revision": "e92b4c4908ed2949059c47777d45f291"
  },
  {
    "url": "es/install/prestashop.html",
    "revision": "3324d4c75cc82a29eaef6c459d816cd0"
  },
  {
    "url": "es/install/shopify.html",
    "revision": "0430388128d20bdb278e1e78e985fce7"
  },
  {
    "url": "es/install/testmode.html",
    "revision": "65300c791c8a05d1d0959359d215d15c"
  },
  {
    "url": "es/install/woocommerce.html",
    "revision": "b9d4fc78eed40b6fd470fc895ceff65c"
  },
  {
    "url": "guide/banners.html",
    "revision": "2fe18c3a259b8767664595eeb31d7808"
  },
  {
    "url": "guide/index.html",
    "revision": "eb3c4c3ce92b627b03d606e6b5b878f4"
  },
  {
    "url": "guide/notifications.html",
    "revision": "3aeb00239287664571c4414cb5b57637"
  },
  {
    "url": "guide/products.html",
    "revision": "a5fc2489225dc32f46f7d9243439c00c"
  },
  {
    "url": "index.html",
    "revision": "d8cbbb3a814b139b91899533f7ea989d"
  },
  {
    "url": "install/advanced.html",
    "revision": "5eb9918f7b0df28a692b134f33a718ab"
  },
  {
    "url": "install/custom.html",
    "revision": "3939da4e6261633840f2edec8c8fc394"
  },
  {
    "url": "install/index.html",
    "revision": "1a6498edcd12b902b0ee9c50a7d51c54"
  },
  {
    "url": "install/magento.html",
    "revision": "ffa88c464124613d5987ffcdb0e7f25d"
  },
  {
    "url": "install/prestashop.html",
    "revision": "2606c88e3b6c1e1a89cbe69fe7d7bf3f"
  },
  {
    "url": "install/shopify.html",
    "revision": "38e66fbbe901581f0b23c5bebbcc1811"
  },
  {
    "url": "install/testmode.html",
    "revision": "7704f7aff5f2bdb5fced893e4efba66d"
  },
  {
    "url": "install/woocommerce.html",
    "revision": "f7ac53239c3d471ea3cb15fdf35c3d63"
  },
  {
    "url": "logo.svg",
    "revision": "9f19c477215af51d4cba141135bc270e"
  },
  {
    "url": "media/1.png",
    "revision": "96e96a858ab622626f228a793d2aff5e"
  },
  {
    "url": "media/2-1.png",
    "revision": "bfda6c54ffde9165cdcbca6d2f15954c"
  },
  {
    "url": "media/2.png",
    "revision": "bfda6c54ffde9165cdcbca6d2f15954c"
  },
  {
    "url": "media/3.gif",
    "revision": "61b99ef85911132ba22bd77666a72cfe"
  },
  {
    "url": "media/4-1.png",
    "revision": "d3582abedcf9cf0c280a96b99ed4d966"
  },
  {
    "url": "media/4.png",
    "revision": "d3582abedcf9cf0c280a96b99ed4d966"
  },
  {
    "url": "media/5.png",
    "revision": "d4eb32ab8da5a5fffbb5606e26dcdbd8"
  },
  {
    "url": "media/6.png",
    "revision": "f0c1f0a50c367fade1a9d59e629519d1"
  },
  {
    "url": "media/captura-de-pantalla-2021-01-12-a-la-s-9.37.45-p.-m..png",
    "revision": "e0ab55250b0a25183322249d17fbb1f0"
  },
  {
    "url": "media/prioritize-discount-products.png",
    "revision": "11a4671629202ecec53cbaac800e95af"
  },
  {
    "url": "media/product-recommendation.jpg",
    "revision": "0f5dd6b690b6cc922d70105bf54468dc"
  },
  {
    "url": "media/product-recommendations.png",
    "revision": "69e483914d3c1d13123189f91abd96d1"
  },
  {
    "url": "media/product-section-type-grid-slider-.jpg",
    "revision": "a27f9dbb2c972f8fd3acbb0458b8f25a"
  },
  {
    "url": "media/producto-descuento.jpg1.jpg",
    "revision": "4988423dce87697321a76f8a998bbfa0"
  },
  {
    "url": "media/screenshot-2021-01-19-at-18.04.59.png",
    "revision": "49cd47058ff359b660a7e690c671b09d"
  },
  {
    "url": "media/screenshot-2021-01-19-at-18.18.06.png",
    "revision": "2b26db115eee9394f585c8f6a96b2d19"
  },
  {
    "url": "media/shopify_add_code_product_page.1a8e05ce.gif",
    "revision": "1a8e05ce415d27f07bfc6943a24f8b14"
  },
  {
    "url": "media/step2.png",
    "revision": "96e96a858ab622626f228a793d2aff5e"
  },
  {
    "url": "media/tipo-de-vitrina.png",
    "revision": "1c5cd6fea8a24b17bff5de7328f35a33"
  },
  {
    "url": "media/tipos-de-recomendaciones.jpg",
    "revision": "cf0cefc3b8be0c92e5263f1b22c9c8be"
  },
  {
    "url": "media/widget-styler.png",
    "revision": "ed6af467e821cfa004e82fbd855277a3"
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

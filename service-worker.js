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
    "revision": "fccb282be5ef624cd3920447d1b8f9f4"
  },
  {
    "url": "assets/css/0.styles.95a2d2f8.css",
    "revision": "324f8f28ba839e9ad1fd8a5a0fdae753"
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
    "url": "assets/img/add_section_banners.96e96a85.png",
    "revision": "96e96a858ab622626f228a793d2aff5e"
  },
  {
    "url": "assets/img/add_section_products.22e76db4.png",
    "revision": "22e76db468fc04fca2c1c04fb4c3848e"
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
    "url": "assets/img/copy_banner_url.f05ae0b6.png",
    "revision": "f05ae0b692cbb608e4d2cda40d43d5ea"
  },
  {
    "url": "assets/img/custom-layout.ab909203.png",
    "revision": "ab909203cf8bcf570df2d1a68db1c385"
  },
  {
    "url": "assets/img/customize_theme.47136fcd.png",
    "revision": "47136fcdb51f513ffbfe644852d5ffba"
  },
  {
    "url": "assets/img/dashboard-email.7e7eebc5.png",
    "revision": "7e7eebc59582c56d0a446761ea21f18c"
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
    "url": "assets/img/drag_banners_products.61b99ef8.gif",
    "revision": "61b99ef85911132ba22bd77666a72cfe"
  },
  {
    "url": "assets/img/email-settings.e1d6161d.png",
    "revision": "e1d6161d11644a04f2dd0d1383a36f4b"
  },
  {
    "url": "assets/img/homepage_banners.bfda6c54.png",
    "revision": "bfda6c54ffde9165cdcbca6d2f15954c"
  },
  {
    "url": "assets/img/insert-banner-code.b569372d.gif",
    "revision": "b569372d8cf188a2d831009fc41a29d4"
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
    "url": "assets/img/shopify_add_code_product_page.1a8e05ce.gif",
    "revision": "1a8e05ce415d27f07bfc6943a24f8b14"
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
    "url": "assets/js/10.a62281f0.js",
    "revision": "cc6ead0c21ef5adc467f3263c93fa7b4"
  },
  {
    "url": "assets/js/11.ce365a51.js",
    "revision": "c47b4ce0289bdfb69faa779213cbdfcd"
  },
  {
    "url": "assets/js/12.757baacd.js",
    "revision": "3591149ee7d39358ffb448db8bd60211"
  },
  {
    "url": "assets/js/13.c591cfb7.js",
    "revision": "0fd2eaa9b6c317771e4ecd3ae359be95"
  },
  {
    "url": "assets/js/14.162206f7.js",
    "revision": "1e1c5c56ff812189c341e89fdefcf351"
  },
  {
    "url": "assets/js/15.31716d25.js",
    "revision": "2f7ee731c6e3d3c8b0592818d6aed757"
  },
  {
    "url": "assets/js/16.53722ad5.js",
    "revision": "8aa808b83b77f3ed94aea1968d4f34a4"
  },
  {
    "url": "assets/js/17.69f3c4c2.js",
    "revision": "89aa853b47d5b10ee1150b39603fe7d2"
  },
  {
    "url": "assets/js/18.c82725fe.js",
    "revision": "249a387a2dcd0494855bb23bbca99fda"
  },
  {
    "url": "assets/js/19.c1c131d7.js",
    "revision": "e85dd05a6a0830742e4bd1d6c4db2bb0"
  },
  {
    "url": "assets/js/2.e5531eb0.js",
    "revision": "8461ec40130e26addff2dee888756c40"
  },
  {
    "url": "assets/js/20.65f95ecc.js",
    "revision": "0b35fd7875bb65d4ff888a62b32ac35f"
  },
  {
    "url": "assets/js/21.83cb5eb0.js",
    "revision": "b0e72ff812e543bcf66ee809f32d4150"
  },
  {
    "url": "assets/js/22.f4f01f75.js",
    "revision": "ece7b64fd14025849f55b8a06ecc0019"
  },
  {
    "url": "assets/js/23.173d2abc.js",
    "revision": "fc005dde4cc9195c853546634fccf41e"
  },
  {
    "url": "assets/js/24.9a3bae92.js",
    "revision": "38875ba41ae46e9aa48063e2ad9cabc1"
  },
  {
    "url": "assets/js/25.4f5ba9b2.js",
    "revision": "bc15cb83dba07b65ebb3961a71244620"
  },
  {
    "url": "assets/js/26.06405944.js",
    "revision": "8a493330580af93aa05128211ce5fe16"
  },
  {
    "url": "assets/js/27.baaa75c5.js",
    "revision": "a47417cbc18c6369989749c3a9d414a3"
  },
  {
    "url": "assets/js/28.507685e1.js",
    "revision": "20b8394ebcaf2d38a3974652927221dd"
  },
  {
    "url": "assets/js/29.dfcc4878.js",
    "revision": "34ddbbac6e8c6ad57baa2febcd43f61a"
  },
  {
    "url": "assets/js/3.13167924.js",
    "revision": "a9ee13491d8828f1cea403c639db6011"
  },
  {
    "url": "assets/js/30.1e83b2fc.js",
    "revision": "7eb3d6e159b3e8de345b80623604e142"
  },
  {
    "url": "assets/js/31.5080c9d3.js",
    "revision": "988fac8655f6e96e12fb654c76655a4a"
  },
  {
    "url": "assets/js/32.cde41108.js",
    "revision": "988df61402f682c4880f8cbe34b6f5e2"
  },
  {
    "url": "assets/js/33.93e985d6.js",
    "revision": "a58716d0e8971210a84b6f70d826c42c"
  },
  {
    "url": "assets/js/34.6dcc63c1.js",
    "revision": "bd37eea5fddefbd553524f33271057b6"
  },
  {
    "url": "assets/js/35.59553183.js",
    "revision": "4c6121aa50b17d7104e00d860ba4036a"
  },
  {
    "url": "assets/js/36.915bbf5c.js",
    "revision": "81f175dae777d4218f4bd8a1e85831fc"
  },
  {
    "url": "assets/js/37.8581298f.js",
    "revision": "084048154b0a3862141b9cef72c63839"
  },
  {
    "url": "assets/js/38.397f7544.js",
    "revision": "be96a6b6d196cadc18d31bc62f092705"
  },
  {
    "url": "assets/js/4.66dc54b2.js",
    "revision": "44a2b0222c87009e5182af46753906f6"
  },
  {
    "url": "assets/js/5.133b02d6.js",
    "revision": "01a99b0d3ef4647da783b2873d5f9fad"
  },
  {
    "url": "assets/js/6.273b8e65.js",
    "revision": "8a8f4e71b74eeaa02122939953140165"
  },
  {
    "url": "assets/js/7.59aefcf8.js",
    "revision": "e8a877acc86cf590ec1a4ed15846f661"
  },
  {
    "url": "assets/js/8.8db3ba7d.js",
    "revision": "66bce407fe7c7e61266fc694e880c915"
  },
  {
    "url": "assets/js/9.3d9e6537.js",
    "revision": "a345554f651172e8f627e18a88e02718"
  },
  {
    "url": "assets/js/app.19f758ad.js",
    "revision": "9c900fdb90c82f38d2c2c73a2624e05b"
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
    "revision": "6e7335b1b0bad96ffd4e2c68c1cbdb5f"
  },
  {
    "url": "es/guide/email.html",
    "revision": "a9439ba1c0ebffb1317214e3ad20c0d1"
  },
  {
    "url": "es/guide/index.html",
    "revision": "942f9a7a940eb0b5744ad9dc8db9ff11"
  },
  {
    "url": "es/guide/notifications.html",
    "revision": "79a6af1cfe0a9f21527f522d7f6e6a94"
  },
  {
    "url": "es/guide/products.html",
    "revision": "31dbf99eb4c2e579042b7b3853adc59f"
  },
  {
    "url": "es/index.html",
    "revision": "4eae22da10faddb7d66f7a7130b2ea1a"
  },
  {
    "url": "es/install/advanced.html",
    "revision": "8ff468c89cc8e296743b6b73fb563c18"
  },
  {
    "url": "es/install/custom.html",
    "revision": "6ab25b6eba029ec67fc8fef2e142366d"
  },
  {
    "url": "es/install/index.html",
    "revision": "145326fffa8f9eacca1dd3b3faba1cbd"
  },
  {
    "url": "es/install/magento.html",
    "revision": "cb5a4e11321b2b96ea9b05cd7972e7eb"
  },
  {
    "url": "es/install/prestashop.html",
    "revision": "3b9e32be556df898768034c6da1cfec5"
  },
  {
    "url": "es/install/shopify.html",
    "revision": "26f495744970a56ead0f55cda56e1422"
  },
  {
    "url": "es/install/testmode.html",
    "revision": "029e8666bbee2fad9db72a1634af92a1"
  },
  {
    "url": "es/install/vtex.html",
    "revision": "a2da466759f9d8e20c609e0647c7f77f"
  },
  {
    "url": "es/install/woocommerce.html",
    "revision": "f2f439f840e86479208b7aaf43aee65d"
  },
  {
    "url": "guide/banners.html",
    "revision": "eb030798d4121cd28df6a88f28c02847"
  },
  {
    "url": "guide/email.html",
    "revision": "077a031b02605cc10c9f72eb79009e83"
  },
  {
    "url": "guide/index.html",
    "revision": "4f04a4084a0ed49fd25dbf291a601c53"
  },
  {
    "url": "guide/notifications.html",
    "revision": "f4ee28fec7ae8a05b05a7c5379955e55"
  },
  {
    "url": "guide/products.html",
    "revision": "f0a1cc7c846a66fc424a782e9b1a9da6"
  },
  {
    "url": "index.html",
    "revision": "a2c88662d23698615297e04e2d7d1462"
  },
  {
    "url": "install/advanced.html",
    "revision": "2b5f7a1c28e9f72b136395e2fb9db164"
  },
  {
    "url": "install/custom.html",
    "revision": "6daf11992901c0ce87044d05f82fe9ac"
  },
  {
    "url": "install/index.html",
    "revision": "ed94a3f7d046a3a8de3a0564342156e8"
  },
  {
    "url": "install/magento.html",
    "revision": "09aee96224813205411566222ddbdd18"
  },
  {
    "url": "install/prestashop.html",
    "revision": "0d19bb5ab924d61689eb2ce8bce7f6da"
  },
  {
    "url": "install/shopify.html",
    "revision": "fa299177d88f16243fa7544c1ad90f20"
  },
  {
    "url": "install/testmode.html",
    "revision": "588689a7cc50fc085263bc41812e896e"
  },
  {
    "url": "install/vtex.html",
    "revision": "d2e7677ebbef15891c92748ffee10fa4"
  },
  {
    "url": "install/woocommerce.html",
    "revision": "488600f1ad04b7671c73eb19d5043944"
  },
  {
    "url": "logo.svg",
    "revision": "84042351f92f7c81d07e3a935c3db605"
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

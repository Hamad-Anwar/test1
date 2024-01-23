'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b07861535b4401f4a4a7b3a32fd20b37",
"assets/AssetManifest.bin.json": "035a426990569b3cd1a50e00c2e96887",
"assets/AssetManifest.json": "5c1fad68eea2446799af87627c0cddf7",
"assets/assets/icons/blue_folder.png": "a9d7cce3665616371ab2c4067a9da991",
"assets/assets/icons/Chrome-icon.png": "4e87900a7f81b06d2e67ae572c2c0757",
"assets/assets/icons/coffee.png": "165ced6590fdf31e9e68c8e822e7b5ac",
"assets/assets/icons/control_panal.png": "4410788df5aed520fd688a606544cd8e",
"assets/assets/icons/folder.png": "5f21be3cc80cf225d5a294e042f34759",
"assets/assets/icons/icons8-coursera-an-online-learning-platform-offers-massive-open-courses-256.png": "28cd2aedff9785ca79ca986aa4b677f6",
"assets/assets/icons/icons8-diploma-256.png": "a88fb6c2439e5a1763b8188fc963e092",
"assets/assets/icons/icons8-email-32.png": "aaa5183d765817a64e6b5662631504ea",
"assets/assets/icons/icons8-feedback-hub-256.png": "4ef744b0ce0ac64675a3414ad9a91550",
"assets/assets/icons/icons8-github-256.png": "04a4c9bbddbf4f9ac89d7b552db0cbc8",
"assets/assets/icons/icons8-linkedin-256.png": "dfa2af9fb03641af9d623855b915bf63",
"assets/assets/icons/icons8-notification-48.png": "c07febcc046a0268811b671c5ebf7822",
"assets/assets/icons/icons8-rating-32.png": "33c1f98ed63b594c1c51a6af1a98ede6",
"assets/assets/icons/icons8-view-quilt-256.png": "c16bc6f75e63b39fd590d8e3791b692f",
"assets/assets/icons/image.png": "8c13b0e53fee1df49676c4e8e8c8575e",
"assets/assets/icons/pc.png": "8796f9550936646c8f186ceb357ec783",
"assets/assets/icons/profile.png": "537f7991c540f927c79f96ed32161bdf",
"assets/assets/icons/recyclebin.png": "f351fbbf7fdd10f27709261aeb91bb4f",
"assets/assets/icons/start.png": "20022075e0888c02945c15a463e3781f",
"assets/assets/icons/sun.png": "2adf2268725bb15701d87f11099f0605",
"assets/assets/icons/system/certicates.png": "d57c5f95a04715803289e5aa0a7459cf",
"assets/assets/icons/system/copy.png": "61348097910d2ee6e3c7ee58a744834f",
"assets/assets/icons/system/cross.png": "de73fa781f9245134a7ad352e92d84e5",
"assets/assets/icons/system/cut.png": "e31370e71c08290b1bbb3259067b81f5",
"assets/assets/icons/system/del.png": "21cc80117d92488e1c5e1f6d2437cf74",
"assets/assets/icons/system/desktop.png": "f1721e20888dffa900f8a351411fc0c9",
"assets/assets/icons/system/icons8-booking-32.png": "3eb0bb5ca54ace478b66fa40e44ab70b",
"assets/assets/icons/system/icons8-email-256.png": "d2dc00af9a9ded4122d2df4eadf363e4",
"assets/assets/icons/system/icons8-more-32.png": "7ee5d094a1ba43795294597df571bb13",
"assets/assets/icons/system/icons8-pin-32.png": "74f043d636def7d9c297d217cf49cd73",
"assets/assets/icons/system/icons8-rating-256.png": "1208bad8c0e002acfe44fb69ec13e59a",
"assets/assets/icons/system/icons8-share-32.png": "4b18fa78ce11d6e2a7c0c21e38cdc16a",
"assets/assets/icons/system/icons8-verified-account-256.png": "3f41ade7e36712d95c27a3824259fac3",
"assets/assets/icons/system/icons8-windows-10-personalization-256.png": "646582e00c8f372051414c9b3f598240",
"assets/assets/icons/system/image.png": "37e5ed32baaa8740e61fe8ac68b2a9df",
"assets/assets/icons/system/imageres.png": "89ac8913f448ededa9a8cca3123cf00b",
"assets/assets/icons/system/music.png": "e756ca3a483262f9bbb9442acd4d1923",
"assets/assets/icons/system/network.png": "6e5d0eb9d5febd0714cdd7ac15cb4a7b",
"assets/assets/icons/system/normalDrive.png": "2f1e34791d4639bd01d1b73ae4079c20",
"assets/assets/icons/system/onedrive.png": "d70c25f8db8fb685ba22982757d6aa86",
"assets/assets/icons/system/pc.png": "0239a7458bfd59e155a70aa35646a209",
"assets/assets/icons/system/projects.png": "a9ad5bc76069b41f3ad9fcefd5602205",
"assets/assets/icons/system/rename.png": "43481ee010e507dc2d00ab0bb42b0e8f",
"assets/assets/icons/system/systemDrive.png": "ada4341488c6f60337befdc2e1889bf9",
"assets/assets/icons/system/video.png": "9b30c9e67c4a1af421a83d85f024d826",
"assets/assets/icons/video.png": "c4745672efb7e867d62eedc0807ad819",
"assets/assets/images/194527756-86f669fa-3afd-4834-818e-1bea74d92a28.png": "f59d71facfbdb2406d810bc09e863a87",
"assets/assets/images/bg.jpg": "d9939de115a68797b21dc51556cc369a",
"assets/assets/images/bg1.jpg": "8b317dab27e19adc191397589af6d86e",
"assets/assets/images/bg2.jpg": "d1c0e1bd944828a3a3be87d4c7c9df3d",
"assets/assets/images/bg3.jpg": "f9a7a12019d908f35c09812647aa226c",
"assets/assets/images/bg4.jpg": "5869bed123e5873fc869d286e24630d1",
"assets/assets/images/bg5.jpg": "727d7bd3850d8ab73ade5a7b0ea9818a",
"assets/assets/images/bg6.jpg": "83820ee569d848c22a8451d20917f0b6",
"assets/assets/images/bird.png": "adf03c5e3c90d4e867f7116a3a331ba1",
"assets/assets/images/fullScreen-1.png": "fc41c8a411e1103e55f1f2d17b586a84",
"assets/assets/images/img.jpeg": "1876dec8f94a90993bfed3e65cf6c6d1",
"assets/assets/images/pngwing.com.png": "e4c1b117b563b79db72ec55a22619f1c",
"assets/assets/images/recycle.png": "3292a4371bf2532a7b483d6d2f225b37",
"assets/assets/images/spbg2.jpg": "3e551b6b24c6d26cfaef2d76a57e03fd",
"assets/assets/images/splashbg.jpg": "61a7ce5c8a6717abeeb0306b212e5f58",
"assets/assets/mac-assets/images/certificate.png": "d82057e028998bc24d6148bb7b6c87c1",
"assets/assets/mac-assets/images/contact.png": "0a4b55145169957298424a0ea04e621b",
"assets/assets/mac-assets/images/contact1.png": "aae64cdd86308d5ed50cc056e9d0fd3b",
"assets/assets/mac-assets/images/github-darkpurple.png": "e2cbcf84ad70077e0b2966b7a2371f80",
"assets/assets/mac-assets/images/github-orrage.png": "4a5de4e8ecc70b8f3db1b63c3fc2b2c7",
"assets/assets/mac-assets/images/github-perple.png": "877d94b504a6d596b819aa3c004cf4b6",
"assets/assets/mac-assets/images/github.png": "3c12a4051d909cdea4f8a889ec591487",
"assets/assets/mac-assets/images/gmail.png": "1c37a0144280acbdc512a1d85aad6f75",
"assets/assets/mac-assets/images/icons8-apple-94.png": "2a39c9d5acb796c6204e5e7d782aac66",
"assets/assets/mac-assets/images/linkedin.png": "83bdaa8a306c6881aad4cdc892a99a11",
"assets/assets/mac-assets/images/mac-bg.jpg": "a95c087c82a0a25e448c92ec0082c5eb",
"assets/assets/mac-assets/images/msg.png": "82b9b68a3e014d7ff5184106579c1add",
"assets/assets/mac-assets/images/project.png": "92b7079531fbdcd1ad33f03d4fd5e797",
"assets/assets/mac-assets/images/rate.png": "2212f7f83dddb4b2e373183f8ae163bd",
"assets/assets/mac-assets/images/Screenshot%25202024-01-06%2520161324.png": "704f13235d2b5eaacf4c734909cc625c",
"assets/assets/mac-assets/images/terminal1.png": "fc96ac4d35109ab80e5c66f36a2597c4",
"assets/assets/mac-assets/images/terminal2.png": "d7aeabd194a57bbaf1690422a73dd7f1",
"assets/assets/mac-assets/images/theme.png": "1394c217466bfa8ba91abec11b990304",
"assets/assets/mac-assets/images/theme1.png": "6d9d49dd5d61777919f4c7135788a2df",
"assets/assets/mac-assets/images/visit.png": "9ad6c9a9d3a27b2c5582cef9f5532f27",
"assets/assets/mac-assets/images/whatsapp.png": "bb9e034e78b95007896ec61a19e5f580",
"assets/assets/mac-assets/images/windows.png": "641a38cd06846ed3f9d4ed5c2c8b504e",
"assets/assets/mac-assets/images/windows1.png": "9c03fb930c79c513fb6f3f10816b0144",
"assets/assets/mac-assets/images/windows2.png": "e727eba59753742a900fb79e457a9073",
"assets/assets/mac-assets/wallpaper/bg.jpg": "d9939de115a68797b21dc51556cc369a",
"assets/assets/mac-assets/wallpaper/bg1.jpg": "8b317dab27e19adc191397589af6d86e",
"assets/assets/mac-assets/wallpaper/bg3.jpg": "f9a7a12019d908f35c09812647aa226c",
"assets/assets/mac-assets/wallpaper/bg4.jpg": "5869bed123e5873fc869d286e24630d1",
"assets/assets/mac-assets/wallpaper/bg5.jpg": "727d7bd3850d8ab73ade5a7b0ea9818a",
"assets/assets/mac-assets/wallpaper/bg6.jpg": "83820ee569d848c22a8451d20917f0b6",
"assets/assets/mac-assets/wallpaper/mac-bg.jpg": "a95c087c82a0a25e448c92ec0082c5eb",
"assets/assets/mac-assets/wallpaper/macos-monterey-stock-blue-dark-mode-layers-5k-6016x6016-5895.jpg": "2b1ced689c2598b4b2d775c8fc35eadf",
"assets/assets/mac-assets/wallpaper/macos-monterey-stock-pink-light-layers-5k-8k-7680x7680-5892-min.jpg": "a06e3cc8b412d86234a591520f874e3b",
"assets/assets/mac-assets/wallpaper/macos-monterey-wwdc-21-stock-5k-6016x6016-5584-min.jpg": "6fa4842f662b9e983917dc8e9e95e3c1",
"assets/assets/mac-assets/wallpaper-thumbnails/bg.jpg": "4e9f279ce36fb65014fbb4a5b542cdac",
"assets/assets/mac-assets/wallpaper-thumbnails/bg1.jpg": "49e15775de9682818a7e08322e760139",
"assets/assets/mac-assets/wallpaper-thumbnails/bg3.jpg": "b886497627adda509c4b3f51bdc6aa8c",
"assets/assets/mac-assets/wallpaper-thumbnails/bg4.jpg": "b2c92f62b0ffe6d6c1590c7394d0b98d",
"assets/assets/mac-assets/wallpaper-thumbnails/bg5.jpg": "2cc65654db072c7fb70c9d99553eeb95",
"assets/assets/mac-assets/wallpaper-thumbnails/bg6.jpg": "9f9a85f29b075fa5bb84cc4a511efc56",
"assets/assets/mac-assets/wallpaper-thumbnails/mac-bg.jpg": "c14a222b7d3840068adb48328d7b2e96",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "51a081f76dafd4f23781bae126dcef39",
"assets/NOTICES": "a78b089cb82970eaf19a0e7aca7301be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/timezone/data/latest_all.tzf": "871b8008607c14f36bae2388a95fdc8c",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icon.png": "d11ea12102a11824f9e3f840a0b73498",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ade0623bc2e06ffe3e12ab7e04d87895",
"/": "ade0623bc2e06ffe3e12ab7e04d87895",
"main.dart.js": "3855624516065f05f922fa1a10faf448",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

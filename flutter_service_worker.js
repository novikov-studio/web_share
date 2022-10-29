'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMITMESSAGE": "d41d8cd98f00b204e9800998ecf8427e",
".git/COMMIT_EDITMSG": "1514f63cb4b16e24d2d99de503f37782",
".git/config": "e49e40b3069a0cc0f92f4577484a0310",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8d41a5ea21d0de971a677b1eaeaf3491",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6cb2d7b399cc4d7fc3ec01ffd6e7d4e1",
".git/logs/refs/heads/master": "6cb2d7b399cc4d7fc3ec01ffd6e7d4e1",
".git/logs/refs/remotes/origin/master": "5d9d59f3db084aa0d8d358fe4c9db3a1",
".git/objects/00/dd5d72062cf878010301d4224ce3c56d9af778": "7ec093d1ee24290544c75274ca2572b4",
".git/objects/03/17ced15fb7206d480452ab19f89bf68f4e9ba6": "d18a446306b6c1008f5cc5ef9254428f",
".git/objects/18/e55cd6af38c6679a35ec1e1842f2dc2adc1871": "44ec9b8fa998d2ac60ab65e16a4852aa",
".git/objects/1a/4babf185757306ce40eaa2dbc0ed34e97efb15": "cb29702e8d7599b3a03e5d9b681ab3b9",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/33/39b04b7691c107591cd7f5f922e94610156e3b": "4ba1e5ad545d1454199f3147a25efc2c",
".git/objects/33/6cba3c46c6d8a5e4bcc0d2171a207c48c5b18e": "f3da0decaccb85282c9051e283978e5e",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/07622e076153b30ff1cf798e6687b4f3e7553f": "556c8cfcf9e77e2d5ef13dfe43f5c0ab",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/57/b0c21ed92ff687a51e8da96e0e2815f61e5243": "ec502b1e483666cee1ff7a63ee9012d5",
".git/objects/5b/8ae946071c036ccf913c0b7690f0faee91f3df": "eaa39ea4651260dd186b9a640e5d4ee0",
".git/objects/69/30b22b06fe261567c87716edeb08b178acf5f8": "2bd81187a78b0879e187409a81f16ce0",
".git/objects/6a/493b7ee9834ae8a87bb21c6cbb634388a31bb0": "43c082ea9e25760f39ccde36eefd65b1",
".git/objects/70/38376f98579c0705fe3ea1763824d92fbe9c9d": "661ff132eb672483a1d69a879f4af848",
".git/objects/70/65ce8cdaf8f17aa96258a2c831f5be100fb6fa": "9a6d457e7bd4ea20cfb1ea62e0fb761d",
".git/objects/73/6242e81b706cd1c1c3930f7c3678254448e51d": "45d5efec867e054cfd8759b537255044",
".git/objects/75/cd765cf03d0964f44542e157c6fc142a65e6a1": "522be94e57b5ed24798fac284d2b81dc",
".git/objects/7c/5de8033978b44bd153ddc82ffdb7c1b1bfd179": "d260ce89934764f6039c26ce04caeff9",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/fb97292f5cacb12010de6df1f2b227265e4f44": "5f9105b1b171ac7301d54450b85f3bea",
".git/objects/81/71f25e38df850d73501a464269fe54914afd40": "bb13824e7695e6361dca29c590790ce8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/6a165aaac5b9b5dc94eeea7edbfeaa280b2c61": "379608619660662e9839bdf722b245ce",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9e/f7d1d01bbc93147287aa4b797e706c19f88260": "77b39f4327f98e70ec3093c4fe389dda",
".git/objects/9f/5bfa542478444d9c02ddbb9fc92d88d81a8ca9": "119ccb1b21b0129e135147b508f159f1",
".git/objects/a2/15b040ae0e3b7cadfafb8f120a6663ce96d070": "6d350a590768892d29e0b9aa9078a710",
".git/objects/a2/bf9902a1528f8091c9d0e18beeb76fda2abc30": "908c75ad964fc6dfbea3f94e4dec914d",
".git/objects/a6/9a5ba168788dd86e3898b9e0f4eeca30453cae": "6ed1c18824c78e54e325aa7b1372cbce",
".git/objects/b0/c49cae0de035d9c7b43bedd4d6f400a7f57598": "a2790fc10c23bc99360e05f6ece268c0",
".git/objects/b0/f2052e045a4826ed450e1ed2849e6e40e925d9": "ed3fb8d64506e22faf2d363e7dc0e77b",
".git/objects/b2/30385d5d5d164fea34d8efbb24bea943293ce1": "429bfd81cba406434d832e0831709d70",
".git/objects/b2/e71d360e2affbc66b93e199052bff244a4ddd8": "e89d70e238468ee3ccb3b6601550482f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c7/60cde9f70a076278bc20d100c2908c6b42f5be": "848549bf1bce3cce1b1fcfd31234c8c7",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/715b3f0f103a9fe41fd91ff1a8d6d790c17552": "f15344fa90507fbca2e9ef806bfeac87",
".git/objects/d5/fd682835a06b839d7879d76c8c0f47c1b53290": "9721a06640c04e0a5c3775a95fb8da3f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/f96e04f908709612ebbfd7e8fc9ec5f20f55d7": "be55adfcd01054137185524f52548c5f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e6/f113f9d75a55fd78096936401800eb60c75906": "6390e3155cc22b04e2358d7c698069fc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/882ca95cf096b6c0608b74fa237fb6b2dfa5f4": "9ce8dee38313691dd4f4d0da2658e6b1",
".git/objects/ef/a057e7f117bad9b6d37073694fc81d698df2dd": "3c9fd009e0984b574a711ed4e9007cf3",
".git/objects/f5/8dcb8eef5d6d7fd9cb5b254954422e9cfbc619": "7a12c98c2bd8b9a8362821de44b30495",
".git/refs/heads/master": "08323b41493d97cece3d65a5c940830c",
".git/refs/remotes/origin/master": "08323b41493d97cece3d65a5c940830c",
"assets/AssetManifest.json": "54f9c7251bc97839369076d706835860",
"assets/assets/test.jpg": "9457ccf4b0ecb91304a6e3eca7acf42b",
"assets/assets/test.png": "83eb262ea41e7158817d6f87b7cd3764",
"assets/assets/test.webp": "291654feb88606970e927f32b08e2621",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "3da2f519224eb61c67e2170ffc818172",
"assets/shaders/ink_sparkle.frag": "010b931311896b2bb599eb665b53d6ee",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d3dc018b9ac8180a4bdec75367e3d8bb",
"/": "d3dc018b9ac8180a4bdec75367e3d8bb",
"main.dart.js": "43769f30478d6f16a34f910a9b669eab",
"manifest.json": "ef720253de9488a4751e12cee4acc44d",
"version.json": "b6106e189a09ad95d5ffbd207949a9ad"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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

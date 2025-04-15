'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "9142b21dc871a4d463fa58ad94b2faf6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bc0ef02a61ba6d53a56fc352e588af71",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b9ce64d21b2b34115c2d50bdf4a8fc0e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "59f9dd4f79fc05c09292ecfce19deae2",
".git/logs/refs/heads/main": "814fe3e918821a62eb0b884b5c1630ea",
".git/logs/refs/remotes/origin/main": "a7bdf01f1870b256bfa60db9d7dde51b",
".git/objects/0c/cfb70a6f7e1fb5aebb0186f71f5bd3f6c80fe8": "df2563d454c06e4a2803de2c49bb3bd9",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/7c8ced13293148162276cea0e98c9a7d0d7bcc": "c3ef7a62b69d85e50c5be413a1c9c9b4",
".git/objects/15/b3f629bda64fecd7a6f0456687c30e252f4ea2": "00ad8ebc64bf6ee58266474304d48643",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/30/3d95ba2d0cc2b8ba0374155fd53b492c88099b": "71d6e701b31083f48120988a72a8cb28",
".git/objects/40/396f8754c7e838b0a1009bf0bdc0aa2edeb36c": "a6fe6d331d6c015e0a5677289880129d",
".git/objects/40/e365ff584671546d990b9aedfec9c712e45f31": "a2f793b143fb0f4d6ba6337340d8aad4",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e97616cf15c9832ec25b44b18648736e20229c": "c548e0a6bbd437c09ee7d3a632805269",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/56/29c8eebc35e89d1b183c59e175b115bd837967": "83677e626dc96a982981bee4643df3d3",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5f/b7d08d2d433abd28f91298731dadf3f951a549": "72173a7aebb6638a106435d22e15a22d",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/dcebe2e652eef8488fe567c20a3adf3a9e52a7": "4690df7d7644f8df6220ec1ac6941f58",
".git/objects/62/f8735a438ccf5d17e56c9d4af56ad729466384": "f1a9daa8b815ffc7414a771807838652",
".git/objects/69/e869e67ebbf791e481120f460b48472ec97698": "93fd2714888e1a64aa3024159ca941d4",
".git/objects/6f/98d0cb8bb1965c180c860f92d70690a11a89da": "608f2b1e5ec4ed470ee5318bfc7a23c9",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/7e/1e95d4ad612e138aae17e6e53feea264b9f344": "dad62093b10830623b6eb29a1adca27e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/ec0da05e7b06214153d073753b511b09d12a23": "80a85165478caee0596f07f55bdf60fd",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/aec67c8119cce6c2cbe0860d7c06bea9d0b168": "459d1c7d9b436bba9c53f47f9facc2bb",
".git/objects/a6/9b49f81203eb5bc5bd76ae4597bb50556f0c57": "3ea310c04196ae006af30a53cf69e060",
".git/objects/a9/d6f03ecbb6511f4593e23d11fe7d67a1d9cf4a": "390890605e6c6988299a82a007031047",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/b2/845e09fa7975f71f9014c23c4f44c9f51768b7": "3c8d94569b130dc5c6dd7bb40be03551",
".git/objects/b2/8eac0222e6aebab4e68dc8e30ca59e66e64353": "7a244be9b5faef1f192007810ed6a380",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/e5c2d08345e08c47a73962eb2e16d4692d4ea4": "2aa09e42ba1f6adf77d27a0deaf48c73",
".git/objects/c3/4d3baacc7111035d066f1fef7140e3d6ee2dec": "b8a464a5daf422fbb69ad01f107820f8",
".git/objects/c3/760959a1db787b9bf7309279d4ef286e15f6b4": "d37c29e0e15ddfb10749b3241c46d592",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d0/30077917636dd51e44fc8b3ecca579e84b735c": "7f81559b2f4717e233a218d7071ee151",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/1e8b8476bc1eb3315ab9c0a5b98b108d03cb1f": "f276fd7db09156be1514e87265fa5820",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7a1b4a87a24f90b71ed94219ebfc60761c8dc9": "e78309e5fb1c2f06d331d93132c2e1bd",
".git/objects/d7/e07408cb40c0925c96d1a254543eb5f7835a08": "243358e38cc4fb43c67d8c8e28854a12",
".git/objects/e6/91a6559530d6ecbc43ffb338af08c210de5698": "30a988619f9bd1e41ba232df3a63c18d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/232b3dec315abba0c36420bd37b4c1778936e1": "b23e617e9c197ed28211989fd923093e",
".git/objects/eb/1e014f2fd591939c16ad0398eebad09e320b57": "f0d18cdd8cca68ed4c5f7f629d0a3519",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/921ac85e766edd4231ebcb705a4035965bb5ae": "1c9f78e07713b28cc9513cce3b336304",
".git/objects/f0/93a71136d80d71d5054a18cae01e9031e65ed2": "dd4b78f61082feee6aae6f89661c23f6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/b383a5405307b5d7e4ce7128dd9d295e235902": "a29c65913d2e616d52c0a4108f276f12",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/8b1108b14e3d2755e419d3ae2b1eb91d5d234c": "67221840a0bb9ac9b8fbfad0b074d177",
".git/ORIG_HEAD": "972e98466818b48b89212f807bb30c18",
".git/REBASE_HEAD": "972e98466818b48b89212f807bb30c18",
".git/refs/heads/main": "7985be0b33985bbbbccf6b28db51b0b3",
".git/refs/remotes/origin/main": "7985be0b33985bbbbccf6b28db51b0b3",
"assets/AssetManifest.bin": "fdf796fbf8c690ada453ad26be1d99b7",
"assets/AssetManifest.bin.json": "a8b9a26d27f8770b4ffbf2ed93d4de71",
"assets/AssetManifest.json": "e2f49cabfc0e9966f6b03b1f7c75656b",
"assets/assets/hotdrop-project.png": "dc5d47999c8d86420dd5ccb38413052e",
"assets/assets/image2.jpg": "48d3a6aaa6599990da1baeb4b714f547",
"assets/assets/linkup-project.png": "5558477d7df29473b9358d9a206d9c86",
"assets/assets/passbank-project.png": "43a15bffb865bed923ffd2b131326187",
"assets/assets/profile.jpg": "e20ec4faa3b429ce1450ca5926b9a395",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d274ab980fe7fd1ebed9ece7a9f6588a",
"assets/NOTICES": "86777e8924e9124fb416bf95c96d062f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "c80afac11ca062e4f6ea53e69ef082ac",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "c885b041c2d2dcfdff409e16c86f3652",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "03df635345f017f20ef339c8f95bb3b6",
"/": "03df635345f017f20ef339c8f95bb3b6",
"main.dart.js": "4990e2c4e5e68d5a914a48706b06ee04",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"README.md": "d352f232800f6bca475a87b0d6943401",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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

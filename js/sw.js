const PreCache=["/images/taichi.png","/images/banner.webp","/images/taichi-fill.png","/css/loader.css","/css/style.css","/js/script.js"],CacheDomain=["fonts.googleapis.com"];async function cacheRequest(e){const s=await fetch(e),t=s.clone();return(await caches.open(VERSION)).put(e,t),s}async function respondRequest(e){const s=await caches.match(e);return s||cacheRequest(e)}self.addEventListener("install",(e=>{console.log(`Service Worker ${VERSION} installing.`),e.waitUntil(caches.open(VERSION).then((e=>e.addAll(PreCache))))})),self.addEventListener("fetch",(function(e){var s=new URL(e.request.url);CacheDomain.includes(s.hostname)?e.respondWith(respondRequest(e.request)):"POST"===e.request.method||"GET"===e.request.method&&-1!==e.request.url.indexOf("?")?e.respondWith(fetch(e.request)):e.respondWith(respondRequest(e.request))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>{if(VERSION!==e)return console.log(`Service Worker: deleting old cache ${e}`),caches.delete(e)})))))),console.log(`Service Worker ${VERSION} activated.`)})),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then((e=>{console.log("Service Worker 注册成功: ",e)})).catch((e=>{console.log("Service Worker 注册失败: ",e)}));
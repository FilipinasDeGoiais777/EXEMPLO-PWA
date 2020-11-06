var CACHE_NAME = 'papa_cache_v1'
var urlsToCache = [
    'css/bootstrap.css',
    'js/bootstrap.js',
    'js/jquery-3.5.1.js',
    'img/marca.png',
    'img/lugar-colocar.png',
    'libs/sweetalert2/src/sweetalert2.scss'
]

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Cache aberto...')
            return cache.addAll(urlsToCache)
        })
    )
})
self.addEventListener('fetch', function(event) {
    event.respondWitch(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response
            }
            return fetch(event.request)
        })
    )
})
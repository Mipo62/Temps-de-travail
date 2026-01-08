const CACHE_NAME = 'temps-travail-v1';
const ASSETS = [
  './',
  './index.html',
  // Ajoute ici tes fichiers CSS et JS s'ils ont des noms spécifiques, par ex:
  // './style.css',
  // './script.js'
];

// Installation : Mise en cache des fichiers
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Stratégie de cache : Réseau d'abord, sinon Cache (pour avoir toujours les dernières modifs)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});

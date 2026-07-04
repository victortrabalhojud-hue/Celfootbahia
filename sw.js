/* CelfootBahia — service worker v2
   Estratégia: NETWORK-FIRST para o jogo (index.html e navegação) — assim,
   toda atualização publicada no GitHub chega imediatamente a quem instalou o app.
   O cache só é usado quando offline. Ícones/manifest ficam em cache-first. */
const CACHE = 'celfootbahia-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
          .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const isGame = e.request.mode === 'navigate' || url.pathname.endsWith('/index.html') || url.pathname.endsWith('/');
  if (isGame) {
    // rede primeiro (busca a versão mais nova); cache só se offline
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
        return res;
      }).catch(() => caches.match(e.request).then(hit => hit || caches.match('./index.html')))
    );
  } else {
    // ícones/manifest: cache primeiro (mudam raramente)
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
        return res;
      }))
    );
  }
});

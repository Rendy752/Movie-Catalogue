if(!self.define){let e,i={};const n=(n,d)=>(n=new URL(n+".js",d).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(d,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const s=e=>n(e,c),t={module:{uri:c},exports:r,require:s};i[c]=Promise.all(d.map((e=>t[e]||s(e)))).then((e=>(o(...e),r)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.bundle.js",revision:"ece303387d0cf1bd7ec2cd670c013a28"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"3b9f91a1bd11b3e24f5a6dc056730025"},{url:"favicon.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-128x128.png",revision:"34d9d8d646af9f294d968811da10e546"},{url:"icons/icon-144x144.png",revision:"2dd174daa627ee198c37c9dfe8cdc34d"},{url:"icons/icon-152x152.png",revision:"42ee3d984a8d535d697ccbb4428e8647"},{url:"icons/icon-192x192.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-384x384.png",revision:"7f775b04df567c8d90c9bad2c89e2d81"},{url:"icons/icon-512x512.png",revision:"f6705cd9d5d52d8483a2bf9b47cb5f60"},{url:"icons/icon-72x72.png",revision:"1d463ddf39f394788393e31e1f0e9dbc"},{url:"icons/icon-96x96.png",revision:"7619371082a792ebb06768c13bf094bf"},{url:"index.html",revision:"60b8c5609204d4490356772bfd16efc8"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://api.themoviedb.org/3/")),new e.StaleWhileRevalidate({cacheName:"themoviedb-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://image.tmdb.org/t/p/w500/")),new e.StaleWhileRevalidate({cacheName:"themoviedb-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map

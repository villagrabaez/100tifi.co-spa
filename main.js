!function(n){var a={};function e(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=a,e.d=function(n,a,t){e.o(n,a)||Object.defineProperty(n,a,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,a){if(1&a&&(n=e(n)),8&a)return n;if(4&a&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&a&&"string"!=typeof n)for(var r in n)e.d(t,r,function(a){return n[a]}.bind(null,r));return t},e.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(a,"a",a),a},e.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},e.p="",e(e.s=0)}([function(n,a,e){"use strict";e.r(a);const t="https://rickandmortyapi.com/api/character/";var r=async n=>{const a=n?`${t}${n}`:t;try{const n=await fetch(a);return await n.json()}catch(n){console.log("Fetch Error",n)}};var s=()=>'\n    <nav class="navbar navbar-expand-lg">\n      <a class="navbar-brand" href="/">100tifi.co</a>\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n        <span class="navbar-toggler-icon"></span>\n      </button>\n\n      <div class="collapse navbar-collapse" id="navbarSupportedContent">\n        <div class="mr-auto"></div>\n        <ul class="navbar-nav">\n          <li class="nav-item">\n            <a class="nav-link" href="#/about/">About</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  ';var c=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var i=n=>{if(n.length<=3){return"/"===n?n:"/:id"}return`/${n}`};var o=()=>'\n    <div class="error404">\n      <h2>Error 404</h2>\n    </div>\n  ';const l={"/":async()=>`\n    <div class="row characters">\n      ${(await r()).results.map(n=>`\n        <article class="col-md-4">\n          <a href="#/${n.id}/">\n            <div class="card bg-light mb-3" style="max-width: 18rem;">\n              <div class="card-header">${n.name}</div>\n              <div class="card-body">\n                <img class="img-fluid" src="${n.image}" alt="${n.name}">\n              </div>\n            </div>\n          </a>\n        </article>\n      `).join("")}\n    </div>\n  `,"/:id":async()=>{const n=c(),a=await r(n);return`\n    <div class="row characters-inner">\n      <article class="col-md-4 characters-card">\n        <img src="${a.image}" alt="${a.name}">\n        <h2>${a.name}</h2>\n      </article>\n\n      <article class="col-md-8 characters-card">\n        <h3>Episodes: <span>${a.episode.length}</span></h3>\n        <h3>Status: <span>${a.status}</span></h3>\n        <h3>Species: <span>${a.species}</span></h3>\n        <h3>Gender: <span>${a.gender}</span></h3>\n        <h3>Origin: <span>${a.origin.name}</span></h3>\n        <h3>Last location: <span>${a.location.name}</span></h3>\n      </article>\n    </div>\n  `},"/contact":"contact"};var d=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await s();let e=c(),t=await i(e),r=l[t]?l[t]:o;a.innerHTML=await r()};window.addEventListener("load",d),window.addEventListener("hashchange",d)}]);
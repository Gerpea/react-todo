!function(){"use strict";var e,t,n={},r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={id:e,loaded:!1,exports:{}};return n[e](t,t.exports,o),t.loaded=!0,t.exports}o.m=n,o.x=function(){},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return e+"."+{42:"975d363b",682:"11159c98",994:"cb18d90a"}[e]+".chunk.js"},o.miniCssF=function(e){return"main.b475e69b.css"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="todo_app:",o.l=function(n,r,u,i){if(e[n])e[n].push(r);else{var a,c;if(void 0!==u)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var d=f[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+u){a=d;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+u),a.src=n),e[n]=[r];var s=function(t,r){a.onerror=a.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/react-todo/",function(){var e={303:0},t=[];o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=u);var i=o.p+o.u(t),a=new Error;o.l(i,(function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var u=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,r[1](a)}}),"chunk-"+t,t)}};var n=function(){},r=function(r,u){for(var i,a,c=u[0],f=u[1],l=u[2],d=u[3],s=0,p=[];s<c.length;s++)a=c[s],o.o(e,a)&&e[a]&&p.push(e[a][0]),e[a]=0;for(i in f)o.o(f,i)&&(o.m[i]=f[i]);for(l&&l(o),r&&r(u);p.length;)p.shift()();return d&&t.push.apply(t,d),n()},u=self.webpackChunktodo_app=self.webpackChunktodo_app||[];function i(){for(var n,r=0;r<t.length;r++){for(var u=t[r],i=!0,a=1;a<u.length;a++){var c=u[a];0!==e[c]&&(i=!1)}i&&(t.splice(r--,1),n=o(o.s=u[0]))}return 0===t.length&&(o.x(),o.x=function(){}),n}u.forEach(r.bind(null,0)),u.push=r.bind(null,u.push.bind(u));var a=o.x;o.x=function(){return o.x=a||function(){},(n=i)()}}(),o.x()}();
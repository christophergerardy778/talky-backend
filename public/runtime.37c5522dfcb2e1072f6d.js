(()=>{"use strict";var e,r,t,o,a={},n={};function l(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return a[e].call(t.exports,t,t.exports,l),t.loaded=!0,t.exports}l.m=a,e=[],l.O=(r,t,o,a)=>{if(!t){var n=1/0;for(s=0;s<e.length;s++){for(var[t,o,a]=e[s],d=!0,i=0;i<t.length;i++)(!1&a||n>=a)&&Object.keys(l.O).every(e=>l.O[e](t[i]))?t.splice(i--,1):(d=!1,a<n&&(n=a));d&&(e.splice(s--,1),r=o())}return r}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[t,o,a]},l.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return l.d(r,{a:r}),r},l.d=(e,r)=>{for(var t in r)l.o(r,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce((r,t)=>(l.f[t](e,r),r),[])),l.u=e=>e+"."+{428:"1252fc7c01b6829b30bd",597:"a0791e843f41acffcbfb",952:"cf089b2516ef9ac44fff",985:"6df96166adc92777b8db"}[e]+".js",l.miniCssF=e=>"styles.5b8d28e2c257de5276d8.css",l.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},t="talky:",l.l=(e,o,a,n)=>{if(r[e])r[e].push(o);else{var d,i;if(void 0!==a)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var c=s[u];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==t+a){d=c;break}}d||(i=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.setAttribute("data-webpack",t+a),d.src=l.tu(e)),r[e]=[o];var f=(t,o)=>{d.onerror=d.onload=null,clearTimeout(p);var a=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),a&&a.forEach(e=>e(o)),t)return t(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),i&&document.head.appendChild(d)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.tu=e=>(void 0===o&&(o={createScriptURL:e=>e},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(o=trustedTypes.createPolicy("angular#bundler",o))),o.createScriptURL(e)),l.p="",(()=>{var e={666:0};l.f.j=(r,t)=>{var o=l.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(666!=r){var a=new Promise((t,a)=>o=e[r]=[t,a]);t.push(o[2]=a);var n=l.p+l.u(r),d=new Error;l.l(n,t=>{if(l.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+r+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,o[1](d)}},"chunk-"+r,r)}else e[r]=0},l.O.j=r=>0===e[r];var r=(r,t)=>{var o,a,[n,d,i]=t,s=0;for(o in d)l.o(d,o)&&(l.m[o]=d[o]);if(i)var u=i(l);for(r&&r(t);s<n.length;s++)l.o(e,a=n[s])&&e[a]&&e[a][0](),e[n[s]]=0;return l.O(u)},t=self.webpackChunktalky=self.webpackChunktalky||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();
!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!b[e]||!x[e])return;for(var n in x[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--g&&0===y&&O()}(e,n),t&&t(e,n)};var n,o=!0,r="74c49837da127cb9eea9",i={},a=[],s=[];function c(e){var t=S[e];if(!t)return C;var o=function(o){return t.hot.active?(S[o]?-1===S[o].parents.indexOf(e)&&S[o].parents.push(e):(a=[e],n=o),-1===t.children.indexOf(o)&&t.children.push(o)):(console.warn("[HMR] unexpected require("+o+") from disposed module "+e),a=[]),C(o)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return C[e]},set:function(t){C[e]=t}}};for(var i in C)Object.prototype.hasOwnProperty.call(C,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(o,i,r(i));return o.e=function(e){return"ready"===l&&p("prepare"),y++,C.e(e).then(t,(function(e){throw t(),e}));function t(){y--,"prepare"===l&&(w[e]||k(e),0===y&&0===g&&O())}},o.t=function(e,t){return 1&t&&(e=o(e)),C.t(e,-2&t)},o}function d(t){var o={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:n!==t,active:!0,accept:function(e,t){if(void 0===e)o._selfAccepted=!0;else if("function"==typeof e)o._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)o._acceptedDependencies[e[n]]=t||function(){};else o._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)o._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)o._declinedDependencies[e[t]]=!0;else o._declinedDependencies[e]=!0},dispose:function(e){o._disposeHandlers.push(e)},addDisposeHandler:function(e){o._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=o._disposeHandlers.indexOf(e);t>=0&&o._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,l){case"idle":(h={})[t]=e[t],p("ready");break;case"ready":A(t);break;case"prepare":case"check":case"dispose":case"apply":(v=v||[]).push(t)}},check:E,apply:j,status:function(e){if(!e)return l;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:i[t]};return n=void 0,o}var u=[],l="idle";function p(e){l=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var f,h,m,v,g=0,y=0,w={},x={},b={};function _(e){return+e+""===e?+e:e}function E(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return o=e,p("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var o=new XMLHttpRequest,i=C.p+""+r+".hot-update.json";o.open("GET",i,!0),o.timeout=t,o.send(null)}catch(e){return n(e)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===o.status)e();else if(200!==o.status&&304!==o.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(o.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return p(M()?"ready":"idle"),null;x={},w={},b=e.c,m=e.h,p("prepare");var t=new Promise((function(e,t){f={resolve:e,reject:t}}));h={};return k(0),"prepare"===l&&0===y&&0===g&&O(),t}));var t}function k(e){b[e]?(x[e]=!0,g++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=C.p+""+e+"."+r+".hot-update.js",document.head.appendChild(t)}(e)):w[e]=!0}function O(){p("ready");var e=f;if(f=null,e)if(o)Promise.resolve().then((function(){return j(o)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(_(n));e.resolve(t)}}function j(t){if("ready"!==l)throw new Error("apply() is only allowed in ready status");return function t(o){var s,c,d,u,l;function f(e){for(var t=[e],n={},o=t.map((function(e){return{chain:[e],id:e}}));o.length>0;){var r=o.pop(),i=r.id,a=r.chain;if((u=S[i])&&(!u.hot._selfAccepted||u.hot._selfInvalidated)){if(u.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(u.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var s=0;s<u.parents.length;s++){var c=u.parents[s],d=S[c];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([c]),moduleId:i,parentId:c};-1===t.indexOf(c)&&(d.hot._acceptedDependencies[i]?(n[c]||(n[c]=[]),g(n[c],[i])):(delete n[c],t.push(c),o.push({chain:a.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];-1===e.indexOf(o)&&e.push(o)}}M();var y={},w=[],x={},E=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var k in h)if(Object.prototype.hasOwnProperty.call(h,k)){var O;l=_(k),O=h[k]?f(l):{type:"disposed",moduleId:k};var j=!1,A=!1,z=!1,B="";switch(O.chain&&(B="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":o.onDeclined&&o.onDeclined(O),o.ignoreDeclined||(j=new Error("Aborted because of self decline: "+O.moduleId+B));break;case"declined":o.onDeclined&&o.onDeclined(O),o.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+B));break;case"unaccepted":o.onUnaccepted&&o.onUnaccepted(O),o.ignoreUnaccepted||(j=new Error("Aborted because "+l+" is not accepted"+B));break;case"accepted":o.onAccepted&&o.onAccepted(O),A=!0;break;case"disposed":o.onDisposed&&o.onDisposed(O),z=!0;break;default:throw new Error("Unexception type "+O.type)}if(j)return p("abort"),Promise.reject(j);if(A)for(l in x[l]=h[l],g(w,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,l)&&(y[l]||(y[l]=[]),g(y[l],O.outdatedDependencies[l]));z&&(g(w,[O.moduleId]),x[l]=E)}var H,L=[];for(c=0;c<w.length;c++)l=w[c],S[l]&&S[l].hot._selfAccepted&&x[l]!==E&&!S[l].hot._selfInvalidated&&L.push({module:l,parents:S[l].parents.slice(),errorHandler:S[l].hot._selfAccepted});p("dispose"),Object.keys(b).forEach((function(e){!1===b[e]&&function(e){delete installedChunks[e]}(e)}));var D,P,N=w.slice();for(;N.length>0;)if(l=N.pop(),u=S[l]){var I={},T=u.hot._disposeHandlers;for(d=0;d<T.length;d++)(s=T[d])(I);for(i[l]=I,u.hot.active=!1,delete S[l],delete y[l],d=0;d<u.children.length;d++){var U=S[u.children[d]];U&&((H=U.parents.indexOf(l))>=0&&U.parents.splice(H,1))}}for(l in y)if(Object.prototype.hasOwnProperty.call(y,l)&&(u=S[l]))for(P=y[l],d=0;d<P.length;d++)D=P[d],(H=u.children.indexOf(D))>=0&&u.children.splice(H,1);p("apply"),void 0!==m&&(r=m,m=void 0);for(l in h=void 0,x)Object.prototype.hasOwnProperty.call(x,l)&&(e[l]=x[l]);var R=null;for(l in y)if(Object.prototype.hasOwnProperty.call(y,l)&&(u=S[l])){P=y[l];var V=[];for(c=0;c<P.length;c++)if(D=P[c],s=u.hot._acceptedDependencies[D]){if(-1!==V.indexOf(s))continue;V.push(s)}for(c=0;c<V.length;c++){s=V[c];try{s(P)}catch(e){o.onErrored&&o.onErrored({type:"accept-errored",moduleId:l,dependencyId:P[c],error:e}),o.ignoreErrored||R||(R=e)}}}for(c=0;c<L.length;c++){var q=L[c];l=q.module,a=q.parents,n=l;try{C(l)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(t){o.onErrored&&o.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,originalError:e}),o.ignoreErrored||R||(R=t),R||(R=e)}else o.onErrored&&o.onErrored({type:"self-accept-errored",moduleId:l,error:e}),o.ignoreErrored||R||(R=e)}}if(R)return p("fail"),Promise.reject(R);if(v)return t(o).then((function(e){return w.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return p("idle"),new Promise((function(e){e(w)}))}(t=t||{})}function M(){if(v)return h||(h={}),v.forEach(A),v=void 0,!0}function A(t){Object.prototype.hasOwnProperty.call(h,t)||(h[t]=e[t])}var S={};function C(t){if(S[t])return S[t].exports;var n=S[t]={i:t,l:!1,exports:{},hot:d(t),parents:(s=a,a=[],s),children:[]};return e[t].call(n.exports,n,n.exports,c(t)),n.l=!0,n.exports}C.m=e,C.c=S,C.d=function(e,t,n){C.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},C.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},C.t=function(e,t){if(1&t&&(e=C(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(C.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)C.d(n,o,function(t){return e[t]}.bind(null,o));return n},C.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return C.d(t,"a",t),t},C.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},C.p="",C.h=function(){return r},c(9)(C.s=9)}([function(e,t,n){(function(t){var n;n=function(){"use strict";var e=function(e){var t=e.id,n=e.viewBox,o=e.content;this.id=t,this.viewBox=n,this.content=o};function n(e,t){return e(t={exports:{}},t.exports),t.exports}e.prototype.stringify=function(){return this.content},e.prototype.toString=function(){return this.stringify()},e.prototype.destroy=function(){var e=this;["id","viewBox","content"].forEach((function(t){return delete e[t]}))},"undefined"!=typeof window?window:void 0!==t||"undefined"!=typeof self&&self;var o=n((function(e,t){e.exports=function(){function e(e){return e&&"object"==typeof e&&"[object RegExp]"!==Object.prototype.toString.call(e)&&"[object Date]"!==Object.prototype.toString.call(e)}function t(t,n){var r;return n&&!0===n.clone&&e(t)?o((r=t,Array.isArray(r)?[]:{}),t,n):t}function n(n,r,i){var a=n.slice();return r.forEach((function(r,s){void 0===a[s]?a[s]=t(r,i):e(r)?a[s]=o(n[s],r,i):-1===n.indexOf(r)&&a.push(t(r,i))})),a}function o(r,i,a){var s=Array.isArray(i),c=(a||{arrayMerge:n}).arrayMerge||n;return s?Array.isArray(r)?c(r,i,a):t(i,a):function(n,r,i){var a={};return e(n)&&Object.keys(n).forEach((function(e){a[e]=t(n[e],i)})),Object.keys(r).forEach((function(s){e(r[s])&&n[s]?a[s]=o(n[s],r[s],i):a[s]=t(r[s],i)})),a}(r,i,a)}return o.all=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("first argument should be an array with at least two elements");return e.reduce((function(e,n){return o(e,n,t)}))},o}()})),r=n((function(e,t){t.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},e.exports=t.default})),i=r.svg,a=r.xlink,s={};s[i.name]=i.uri,s[a.name]=a.uri;var c=function(e,t){return void 0===e&&(e=""),"<svg "+function(e){return Object.keys(e).map((function(t){return t+'="'+e[t].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(o(s,t||{}))+">"+e+"</svg>"};return function(e){function t(){e.apply(this,arguments)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},t.createFromExistingNode=function(e){return new t({id:e.getAttribute("id"),viewBox:e.getAttribute("viewBox"),content:e.outerHTML})},t.prototype.destroy=function(){this.isMounted&&this.unmount(),e.prototype.destroy.call(this)},t.prototype.mount=function(e){if(this.isMounted)return this.node;var t="string"==typeof e?document.querySelector(e):e,n=this.render();return this.node=n,t.appendChild(n),n},t.prototype.render=function(){var e=this.stringify();return function(e){var t=!!document.importNode,n=(new DOMParser).parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(c(e)).childNodes[0]},t.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(t.prototype,n),t}(e)},e.exports=n()}).call(this,n(4))},function(e,t,n){(function(t){var n;n=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}"undefined"!=typeof window?window:void 0!==t||"undefined"!=typeof self&&self;var n=e((function(e,t){e.exports=function(){function e(e){return e&&"object"==typeof e&&"[object RegExp]"!==Object.prototype.toString.call(e)&&"[object Date]"!==Object.prototype.toString.call(e)}function t(t,n){var r;return n&&!0===n.clone&&e(t)?o((r=t,Array.isArray(r)?[]:{}),t,n):t}function n(n,r,i){var a=n.slice();return r.forEach((function(r,s){void 0===a[s]?a[s]=t(r,i):e(r)?a[s]=o(n[s],r,i):-1===n.indexOf(r)&&a.push(t(r,i))})),a}function o(r,i,a){var s=Array.isArray(i),c=(a||{arrayMerge:n}).arrayMerge||n;return s?Array.isArray(r)?c(r,i,a):t(i,a):function(n,r,i){var a={};return e(n)&&Object.keys(n).forEach((function(e){a[e]=t(n[e],i)})),Object.keys(r).forEach((function(s){e(r[s])&&n[s]?a[s]=o(n[s],r[s],i):a[s]=t(r[s],i)})),a}(r,i,a)}return o.all=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("first argument should be an array with at least two elements");return e.reduce((function(e,n){return o(e,n,t)}))},o}()})),o=e((function(e,t){t.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},e.exports=t.default})),r=o.svg,i=o.xlink,a={};a[r.name]=r.uri,a[i.name]=i.uri;var s,c=function(e,t){return void 0===e&&(e=""),"<svg "+function(e){return Object.keys(e).map((function(t){return t+'="'+e[t].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(n(a,t||{}))+">"+e+"</svg>"},d=o.svg,u=o.xlink,l={attrs:(s={style:["position: absolute","width: 0","height: 0"].join("; "),"aria-hidden":"true"},s[d.name]=d.uri,s[u.name]=u.uri,s)},p=function(e){this.config=n(l,e||{}),this.symbols=[]};p.prototype.add=function(e){var t=this.symbols,n=this.find(e.id);return n?(t[t.indexOf(n)]=e,!1):(t.push(e),!0)},p.prototype.remove=function(e){var t=this.symbols,n=this.find(e);return!!n&&(t.splice(t.indexOf(n),1),n.destroy(),!0)},p.prototype.find=function(e){return this.symbols.filter((function(t){return t.id===e}))[0]||null},p.prototype.has=function(e){return null!==this.find(e)},p.prototype.stringify=function(){var e=this.config.attrs,t=this.symbols.map((function(e){return e.stringify()})).join("");return c(t,e)},p.prototype.toString=function(){return this.stringify()},p.prototype.destroy=function(){this.symbols.forEach((function(e){return e.destroy()}))};var f=function(e){var t=e.id,n=e.viewBox,o=e.content;this.id=t,this.viewBox=n,this.content=o};f.prototype.stringify=function(){return this.content},f.prototype.toString=function(){return this.stringify()},f.prototype.destroy=function(){var e=this;["id","viewBox","content"].forEach((function(t){return delete e[t]}))};var h=function(e){var t=!!document.importNode,n=(new DOMParser).parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n},m=function(e){function t(){e.apply(this,arguments)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},t.createFromExistingNode=function(e){return new t({id:e.getAttribute("id"),viewBox:e.getAttribute("viewBox"),content:e.outerHTML})},t.prototype.destroy=function(){this.isMounted&&this.unmount(),e.prototype.destroy.call(this)},t.prototype.mount=function(e){if(this.isMounted)return this.node;var t="string"==typeof e?document.querySelector(e):e,n=this.render();return this.node=n,t.appendChild(n),n},t.prototype.render=function(){var e=this.stringify();return h(c(e)).childNodes[0]},t.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(t.prototype,n),t}(f),v={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},g=function(e){return Array.prototype.slice.call(e,0)},y=function(){return/firefox/i.test(navigator.userAgent)},w=function(){return/msie/i.test(navigator.userAgent)||/trident/i.test(navigator.userAgent)},x=function(){return/edge/i.test(navigator.userAgent)},b=function(e){return(e||window.location.href).split("#")[0]},_=function(e){angular.module("ng").run(["$rootScope",function(t){t.$on("$locationChangeSuccess",(function(t,n,o){var r,i,a;r=e,i={oldUrl:o,newUrl:n},(a=document.createEvent("CustomEvent")).initCustomEvent(r,!1,!1,i),window.dispatchEvent(a)}))}])},E=function(e,t){return void 0===t&&(t="linearGradient, radialGradient, pattern, mask, clipPath"),g(e.querySelectorAll("symbol")).forEach((function(e){g(e.querySelectorAll(t)).forEach((function(t){e.parentNode.insertBefore(t,e)}))})),e},k=o.xlink.uri,O=/[{}|\\\^\[\]`"<>]/g;function j(e){return e.replace(O,(function(e){return"%"+e[0].charCodeAt(0).toString(16).toUpperCase()}))}var M,A=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],S=A.map((function(e){return"["+e+"]"})).join(","),C=function(e,t,n,o){var r=j(n),i=j(o);(function(e,t){return g(e).reduce((function(e,n){if(!n.attributes)return e;var o=g(n.attributes),r=t?o.filter(t):o;return e.concat(r)}),[])})(e.querySelectorAll(S),(function(e){var t=e.localName,n=e.value;return-1!==A.indexOf(t)&&-1!==n.indexOf("url("+r)})).forEach((function(e){return e.value=e.value.replace(new RegExp(r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),i)})),function(e,t,n){g(e).forEach((function(e){var o=e.getAttribute("xlink:href");if(o&&0===o.indexOf(t)){var r=o.replace(t,n);e.setAttributeNS(k,"xlink:href",r)}}))}(t,r,i)},z="mount",B="symbol_mount",H=function(e){function t(t){var o=this;void 0===t&&(t={}),e.call(this,n(v,t));var r,i=(r=r||Object.create(null),{on:function(e,t){(r[e]||(r[e]=[])).push(t)},off:function(e,t){r[e]&&r[e].splice(r[e].indexOf(t)>>>0,1)},emit:function(e,t){(r[e]||[]).map((function(e){e(t)})),(r["*"]||[]).map((function(n){n(e,t)}))}});this._emitter=i,this.node=null;var a=this.config;if(a.autoConfigure&&this._autoConfigure(t),a.syncUrlsWithBaseTag){var s=document.getElementsByTagName("base")[0].getAttribute("href");i.on(z,(function(){return o.updateUrls("#",s)}))}var c=this._handleLocationChange.bind(this);this._handleLocationChange=c,a.listenLocationChangeEvent&&window.addEventListener(a.locationChangeEvent,c),a.locationChangeAngularEmitter&&_(a.locationChangeEvent),i.on(z,(function(e){a.moveGradientsOutsideSymbol&&E(e)})),i.on(B,(function(e){var t;a.moveGradientsOutsideSymbol&&E(e.parentNode),(w()||x())&&(t=[],g(e.querySelectorAll("style")).forEach((function(e){e.textContent+="",t.push(e)})))}))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var o={isMounted:{}};return o.isMounted.get=function(){return!!this.node},t.prototype._autoConfigure=function(e){var t=this.config;void 0===e.syncUrlsWithBaseTag&&(t.syncUrlsWithBaseTag=void 0!==document.getElementsByTagName("base")[0]),void 0===e.locationChangeAngularEmitter&&(t.locationChangeAngularEmitter=void 0!==window.angular),void 0===e.moveGradientsOutsideSymbol&&(t.moveGradientsOutsideSymbol=y())},t.prototype._handleLocationChange=function(e){var t=e.detail,n=t.oldUrl,o=t.newUrl;this.updateUrls(n,o)},t.prototype.add=function(t){var n=e.prototype.add.call(this,t);return this.isMounted&&n&&(t.mount(this.node),this._emitter.emit(B,t.node)),n},t.prototype.attach=function(e){var t=this,n=this;if(n.isMounted)return n.node;var o="string"==typeof e?document.querySelector(e):e;return n.node=o,this.symbols.forEach((function(e){e.mount(n.node),t._emitter.emit(B,e.node)})),g(o.querySelectorAll("symbol")).forEach((function(e){var t=m.createFromExistingNode(e);t.node=e,n.add(t)})),this._emitter.emit(z,o),o},t.prototype.destroy=function(){var e=this.config,t=this.symbols,n=this._emitter;t.forEach((function(e){return e.destroy()})),n.off("*"),window.removeEventListener(e.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},t.prototype.mount=function(e,t){if(void 0===e&&(e=this.config.mountTo),void 0===t&&(t=!1),this.isMounted)return this.node;var n="string"==typeof e?document.querySelector(e):e,o=this.render();return this.node=o,t&&n.childNodes[0]?n.insertBefore(o,n.childNodes[0]):n.appendChild(o),this._emitter.emit(z,o),o},t.prototype.render=function(){return h(this.stringify())},t.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},t.prototype.updateUrls=function(e,t){if(!this.isMounted)return!1;var n=document.querySelectorAll(this.config.usagesToUpdate);return C(this.node,n,b(e)+"#",b(t)+"#"),!0},Object.defineProperties(t.prototype,o),t}(p),L=e((function(e){var t,n,o,r,i;e.exports=(n=[],o=document,r=o.documentElement.doScroll,(i=(r?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState))||o.addEventListener("DOMContentLoaded",t=function(){for(o.removeEventListener("DOMContentLoaded",t),i=1;t=n.shift();)t()}),function(e){i?setTimeout(e,0):n.push(e)})}));window.__SVG_SPRITE__?M=window.__SVG_SPRITE__:(M=new H({attrs:{id:"__SVG_SPRITE_NODE__"}}),window.__SVG_SPRITE__=M);var D=function(){var e=document.getElementById("__SVG_SPRITE_NODE__");e?M.attach(e):M.mount(document.body,!0)};return document.body?D():L(D),M},e.exports=n()}).call(this,n(4))},function(e,t,n){"use strict";n.r(t);var o=n(5),r=n.n(o),i=n(6),a=n.n(i),s=n(3),c=r()(!1);c.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400&display=swap);"]);var d=a()(s.a);c.push([e.i,"*{padding:0;margin:0;border:0}*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}:focus,:active{outline:none}a:focus,a:active{outline:none}nav,footer,header,aside{display:block}html,body{height:100%;width:100%;font-size:100%;line-height:1.5;font-size:15px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%}input,button,textarea{font-family:inherit}input::-ms-clear{display:none}button{cursor:pointer}button::-moz-focus-inner{padding:0;border:0}a,a:visited{text-decoration:none}a:hover{text-decoration:none}ul li{list-style:none}img{vertical-align:top}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}.body{background-image:url("+d+');background-size:cover}.main{min-width:960px}.main__container{padding:34px 15px 0 15px;margin:0 auto}@media only screen and (min-width: 992px){.main__container{max-width:960px}}@media only screen and (min-width: 1200px){.main__container{max-width:1140px}}.add-list-button{display:flex;align-items:center;justify-content:center;font-size:18px;font-family:"Roboto",Helvetica,Arial,sans-serif;color:#fff;background-color:#4527A0;border-radius:8px;width:222px;height:36px}.add-list-button__icon{margin-right:4.5px;width:18px;height:18px;fill:#fff}.add-list-button__text{margin-left:4.5px}.task-lists__list{margin-top:25px}.list-description{cursor:pointer;display:flex;align-items:center;height:51px;border-radius:12px;background-color:#fff}.list-description__h1{padding-left:14px;font-family:"Roboto",Helvetica,Arial,sans-serif;font-weight:500;font-size:24px;color:#000;display:inline-block;flex-grow:100}.list-description__change-name-input_display_none{display:none}.list-description__delete-list-icon{display:none;fill:#000;flex-grow:1;min-width:12.44px;flex-basis:0;height:16px;margin-right:20px}.list-description__delete-list-icon:hover{fill:#4527A0}.list-description:hover .list-description__delete-list-icon{display:inline-block}.list-description__expand-list-icon{height:16px;min-width:25.6px;flex-basis:0;margin-right:14px}.tasks__task-item{cursor:pointer;height:38px;border-radius:12px;background-color:#fff;margin:12px 0 0 55px}.tasks__task-item:first-child{margin-top:21px}.tasks__task-elements{height:100%;display:grid;align-items:center;grid-template-columns:23px max-content 54px auto max-content 23px;padding:0 15px}.tasks__radio-button{width:23px;height:23px;fill:#9E9E9E}.tasks__h2,.tasks__rest-time{margin-left:6px;font-family:"Roboto",Helvetica,Arial,sans-serif;font-size:19px}.tasks__priority{margin-left:20px;transform:skew(-25deg);height:100%;background-color:#F44336}.tasks__rest-time{margin-right:64px;grid-column:5 / 5;font-style:italic;color:#9E9E9E}.tasks__delete-task-icon{grid-column:6 / 6;padding:3px;height:23px;width:23px;border-radius:50%;border:2px solid #4527A0;fill:#4527A0}.add-task__fields{margin:12px auto 0 auto;align-items:center;display:flex;border-radius:12px;background-color:#fff;width:268px;height:38px;padding:0 15px}.add-task__name-input{color:#000;font-size:19px;font-family:"Roboto",Helvetica,Arial,sans-serif}.add-task__add-button{height:26px;padding:3px 5px;border-radius:50%;background-color:#4527A0}.add-task__button-icon{position:relative;top:2px;fill:#fff;width:16px;height:16px}.add-list-wrapper{display:flex;justify-content:center;align-items:center;min-width:960px;top:0;height:100%;width:100%;position:absolute;background-color:rgba(0,0,0,0.5)}.add-list-wrapper_display_none{display:none}.add-list-menu{background-color:#fff;width:560px;height:239px;border-radius:12px;font-family:"Roboto",Helvetica,Arial,sans-serif}.add-list-menu__h2{padding:20px 0 0 28px;font-size:24px;font-weight:500}.add-list-menu__input{width:500px;padding-left:24px;background-color:rgba(196,196,196,0.1);margin:18px 29px 43px 29px;font-size:24px;height:65px;border-radius:12px}.add-list-menu__input:focus{border:3px solid #4527A0}.add-list-menu__buttons{display:flex;width:100%;border-top:1px solid rgba(196,196,196,0.5)}.add-list-menu__button{display:flex;height:59px;align-items:center;justify-content:center;font-size:24px;width:50%;background-color:#fff}.add-list-menu__button_action_cancel{border-right:1px solid rgba(196,196,196,0.5);border-radius:0 0 0 12px}.add-list-menu__button_action_create{color:#4527A0;border-radius:0 0 12px 0}\n',""]),t.default=c},function(e,t,n){"use strict";t.a=n.p+"assets/landscape-bg.jpg"},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){var o=n(8),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=o(r,i);if(!r.locals||e.hot.invalidate){var s=r.locals;e.hot.accept(2,(function(){"string"==typeof(r=(r=n(2)).__esModule?r.default:r)&&(r=[[e.i,r,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(s,r.locals)?(s=r.locals,a(r)):e.hot.invalidate()}))}e.hot.dispose((function(){a()})),e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],d=n[c]||0,u="".concat(c," ").concat(d);n[c]=d+1;var l=s(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(p)):a.push({identifier:u,updater:v(p,t),references:1}),o.push(u)}return o}function d(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,m=0;function v(e,t){var n,o,r;if(t.singleton){var i=m++;n=h||(h=d(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=d(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=s(n[o]);a[r].references--}for(var i=c(e,t),d=0;d<n.length;d++){var u=s(n[d]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);n(7);var o=n(0),r=n.n(o),i=n(1),a=n.n(i),s=new r.a({id:"arrow_expand",use:"arrow_expand-usage",viewBox:"0 0 24 15",content:'<symbol viewBox="0 0 24 15" xmlns="http://www.w3.org/2000/svg" id="arrow_expand"><path d="M21.17.17L12 9.34 2.83.17 0 3l12 12L24 3 21.17.17z" /></symbol>'}),c=(a.a.add(s),new r.a({id:"arrow_up",use:"arrow_up-usage",viewBox:"0 0 32 32",content:'<symbol viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" id="arrow_up"><path d="M0 16l2.83 2.83L14 7.66V32h4V7.66l11.17 11.17L32 16 16 0 0 16z" /></symbol>'})),d=(a.a.add(c),new r.a({id:"calendar",use:"calendar-usage",viewBox:"0 0 36 40",content:'<symbol viewBox="0 0 36 40" xmlns="http://www.w3.org/2000/svg" id="calendar"><path d="M28 18H8v4h20v-4zm4-14h-2V0h-4v4H10V0H6v4H4C1.79 4 .02 5.79.02 8L0 36c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 32H4V14h28v22zM22 26H8v4h14v-4z" /></symbol>'})),u=(a.a.add(d),new r.a({id:"close_x",use:"close_x-usage",viewBox:"0 0 28 28",content:'<symbol viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" id="close_x"><path d="M28 2.83L25.17 0 14 11.17 2.83 0 0 2.83 11.17 14 0 25.17 2.83 28 14 16.83 25.17 28 28 25.17 16.83 14 28 2.83z" /></symbol>'})),l=(a.a.add(u),new r.a({id:"delete_forever",use:"delete_forever-usage",viewBox:"0 0 28 36",content:'<symbol viewBox="0 0 28 36" xmlns="http://www.w3.org/2000/svg" id="delete_forever"><path d="M2 32c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V8H2v24zm4.93-14.24l2.83-2.83L14 19.17l4.24-4.24 2.83 2.83L16.83 22l4.24 4.24-2.83 2.83L14 24.83l-4.24 4.24-2.83-2.83L11.17 22l-4.24-4.24zM21 2l-2-2H9L7 2H0v4h28V2h-7z" /></symbol>'})),p=(a.a.add(l),new r.a({id:"done_all",use:"done_all-usage",viewBox:"0 0 48 27",content:'<symbol viewBox="0 0 48 27" xmlns="http://www.w3.org/2000/svg" id="done_all"><path d="M36 3L33.17.17 20.49 12.86l2.83 2.83L36 3zM44.49.17L23.31 21.34 14.97 13l-2.83 2.83L23.31 27l24-24L44.49.17zM.83 15.83L12 27l2.83-2.83L3.66 13 .83 15.83z" /></symbol>'})),f=(a.a.add(p),new r.a({id:"edit",use:"edit-usage",viewBox:"0 0 36 36",content:'<symbol viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" id="edit"><path d="M0 28.5V36h7.5l22.13-22.13-7.5-7.5L0 28.5zM35.41 8.09c.78-.78.78-2.05 0-2.83L30.74.59c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" /></symbol>'})),h=(a.a.add(f),new r.a({id:"plus_simple",use:"plus_simple-usage",viewBox:"0 0 28 28",content:'<symbol viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" id="plus_simple"><path d="M28 16H16v12h-4V16H0v-4h12V0h4v12h12v4z" /></symbol>'})),m=(a.a.add(h),new r.a({id:"radio_button_unchecked",use:"radio_button_unchecked-usage",viewBox:"0 0 40 40",content:'<symbol viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" id="radio_button_unchecked"><path d="M20 0C8.95 0 0 8.95 0 20s8.95 20 20 20 20-8.95 20-20S31.05 0 20 0zm0 36c-8.84 0-16-7.16-16-16S11.16 4 20 4s16 7.16 16 16-7.16 16-16 16z" /></symbol>'})),v=(a.a.add(m),new r.a({id:"radio_button_checked",use:"radio_button_checked-usage",viewBox:"0 0 40 40",content:'<symbol viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" id="radio_button_checked"><path d="M20 10c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0-10C8.95 0 0 8.95 0 20s8.95 20 20 20 20-8.95 20-20S31.05 0 20 0zm0 36c-8.84 0-16-7.16-16-16S11.16 4 20 4s16 7.16 16 16-7.16 16-16 16z" /></symbol>'})),g=(a.a.add(v),new r.a({id:"subject_description",use:"subject_description-usage",viewBox:"0 0 32 28",content:'<symbol viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg" id="subject_description"><path d="M20 24H0v4h20v-4zM32 8H0v4h32V8zM0 20h32v-4H0v4zM0 0v4h32V0H0z" /></symbol>'})),y=(a.a.add(g),new r.a({id:"task_name",use:"task_name-usage",viewBox:"0 0 38 36",content:'<symbol viewBox="0 0 38 36" xmlns="http://www.w3.org/2000/svg" id="task_name"><path d="M0 36h38v-6H0v6zm36-26H2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h34c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zM0 0v6h38V0H0z" /></symbol>'}));a.a.add(y),n(3);e.hot.accept()}]);
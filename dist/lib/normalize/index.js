!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],t):"object"==typeof exports?exports["lib/normalize/index.js"]=t(require("lodash")):e["lib/normalize/index.js"]=t(e[void 0])}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=237)}({237:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,r.intersectionWith)(o(e),o(t),function(e,t){return e.join()===t.join()}),i=(0,r.cloneDeep)(t);return n.forEach(function(n){var o=(0,r.get)(e,n),u=(0,r.get)(t,n);(0,r.set)(i,n,o(u))}),i}};var r=n(4);function o(e){var t=[];return function e(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];(0,r.keys)(n).forEach(function(i){var u=n[i],f=(0,r.concat)(o,i);(0,r.isObject)(u)&&(0,r.negate)(r.isFunction)(u)?(t.push(f),e(u,f)):t.push(f)})}(e),t}},4:function(t,n){t.exports=e}})});
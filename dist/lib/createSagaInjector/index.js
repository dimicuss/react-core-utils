!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash"),require("react")):"function"==typeof define&&define.amd?define(["lodash","react"],t):"object"==typeof exports?exports["lib/createSagaInjector/index.js"]=t(require("lodash"),require("react")):e["lib/createSagaInjector/index.js"]=t(e[void 0],e[void 0])}(window,function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=264)}({219:function(e,n){e.exports=t},264:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(219),u=(r=a)&&r.__esModule?r:{default:r},i=n(4);var c="@@saga-injector/daemon",f="@@saga-injector/once-till-unmount",l="@@saga-injector/restart-on-remount";t.default=(0,i.curry)(function(e,t,n){var r=t.sagaName,a=t.saga,i=t.sagaMode,s=void 0===i?l:i;return function(t){function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,u.default.Component),o(i,[{key:"componentWillMount",value:function(){var t=Reflect.has(e.injectedSagas,r);(!t||t&&s!==c&&s!==f)&&(e.injectedSagas[r]={saga:a,mode:s,task:e.runSaga(a)})}},{key:"componentWillUnmount",value:function(){if(Reflect.has(e.injectedSagas,r)){var t=e.injectedSagas[r];t.mode!==c&&t.task.cancel()}}},{key:"render",value:function(){return u.default.createElement(n,this.props)}}]),i}()})},4:function(t,n){t.exports=e}})});
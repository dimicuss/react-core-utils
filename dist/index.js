!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=this&&this.__assign||function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=a(r(0));t.default=function(e){return function(t){return void 0===t&&(t={}),function(r){return function(n){function a(){return null!==n&&n.apply(this,arguments)||this}return o(a,n),a.prototype.render=function(){return c.default.createElement(e,u({},this.props,t,{Descendant:r}))},a}(c.default.PureComponent)}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(t){for(var r=t,n=0;n<e.length;n++)r=e[n](r);return r}}},function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=this&&this.__assign||function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=this&&this.__generator||function(e,t){var r,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}},c=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(r(0)),f=i(r(11)),l=i(r(4)),p=i(r(5)),d=i(r(6)),h=r(7),y=i(r(14)),_=s.default.createContext({});t.ContainerContext=_;var v={};function b(){return a(this,(function(e){return[2]}))}function O(e){return void 0===e&&(e=v),e}function m(){return b}function g(){return O}var P=function(e){function t(t,r){var n,o,a=e.call(this,t,r)||this,c=t.redux,i=t.containerContext,s=t.name,f=t.createSaga,l=t.createReducer,d=y.default(t),_=u(u({},d),{containers:i,name:s}),v=f(_),b=l(_);return a.nextContainerContext=u(u({},i),((n={})[s]=d,n)),a.container=d,c.store.replaceReducer(p.default(((o={})[s]=b,o))),c.store.dispatch(h.runSaga({name:s,saga:v})),a}return o(t,e),t.prototype.componentWillUnmount=function(){var e=this.props,t=e.name,r=e.redux;r.store.dispatch(h.cancelSaga({name:t})),r.store.dispatch(this.container.actions.clearState())},t.prototype.render=function(){var e=this.props,t=e.Descendant,r=(e.redux,e.containerContext,e.name,e.actions,e.selectors,e.createSaga,e.createReducer,c(e,["Descendant","redux","containerContext","name","actions","selectors","createSaga","createReducer"]));return s.default.createElement(_.Provider,{value:this.nextContainerContext},s.default.createElement(t,u({},r)))},t.defaultProps={name:"",actions:[],selectors:{},createSaga:m,createReducer:g},t}(s.default.PureComponent);t.default=d.default(l.default({consumers:{redux:f.default.Consumer,containerContext:_.Consumer}}))(P)},function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=this&&this.__assign||function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=c(r(0)),s=c(r(1)),f=function(e){function t(t,r){var n=e.call(this,t,r)||this;return n.createConsumerRenderer=function(e,t){if(void 0===t&&(t=0),t<e.length){var r=n.createConsumerRenderer(e,t+1),o=e[t],a=o[0],c=o[1],s=function(e){var t;return n.contextValues=u(u({},n.contextValues),((t={})[a]=e,t)),r()};return function(){return i.default.createElement(c,null,s)}}return n.renderDescendant},n.renderDescendant=function(){var e=n.props,t=e.Descendant,r=(e.consumers,a(e,["Descendant","consumers"])),o=u(u({},r),n.contextValues);return i.default.createElement(t,u({},o))},n.contextValues={},n.renderConsumer=n.createConsumerRenderer(Object.entries(t.consumers)),n}return o(t,e),t.prototype.render=function(){return this.renderConsumer()},t.defaultProps={consumers:{}},t}(i.default.PureComponent);t.default=s.default(f)},function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=r(12),u={};t.setInitialReducers=function(e){u=e},t.default=function(e){return u=n(n({},u),e),o.combineReducers(u)}},function(e,t,r){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var u=arguments[t],a=0,c=u.length;a<c;a++,o++)n[o]=u[a];return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=o(r(2)),a=o(r(1));t.default=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(t){return function(r){return void 0===r&&(r={}),u.default.apply(void 0,n([a.default(t)(r)],e))}}}},function(e,t,r){"use strict";var n=this&&this.__generator||function(e,t){var r,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(8),u=r(13),a=o.createAction("runSaga");t.runSaga=a;var c=o.createAction("cancelSaga");function i(e){var t,r=e.payload;return n(this,(function(e){switch(e.label){case 0:return[4,u.fork(r.saga)];case 1:e.sent(),e.label=2;case 2:return[4,u.take(c)];case 3:return t=e.sent().payload,r.name!==t.name?[3,5]:[4,u.cancel()];case 4:e.sent(),e.label=5;case 5:return[3,2];case 6:return[2]}}))}t.cancelSaga=c,t.default=function(){return n(this,(function(e){switch(e.label){case 0:return[4,u.takeEvery(a,i)];case 1:return e.sent(),[2]}}))}},function(e,t){e.exports=require("redux-act")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=t.call(r,e[o],o,e));return n}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(3));t.ContainerHoc=o.default;var u=n(r(16));t.ConnectorHoc=u.default;var a=n(r(4));t.ContextConsumer=a.default;var c=n(r(2));t.compose=c.default;var i=n(r(7));t.rootSaga=i.default;var s=n(r(18));t.passProps=s.default;var f=n(r(1));t.createHoc=f.default;var l=n(r(5));t.combineReducers=l.default;var p=n(r(6));t.createWrappedHoc=p.default},function(e,t){e.exports=require("react-redux/lib/components/Context")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("redux-saga/effects")},function(e,t,r){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var u=arguments[t],a=0,c=u.length;a<c;a++,o++)n[o]=u[a];return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=r(8),a=o(r(2)),c=o(r(9)),i=o(r(15));function s(e){return[e,u.createAction(this+"/"+e)]}function f(e){var t=this;return a.default((function(e){return e[t]}),e)}t.default=function(e){var t=e.name,r=void 0===t?"":t,o=e.actions,u=void 0===o?[]:o,a=e.selectors,l=void 0===a?{}:a;return{actions:i.default(n(["clearState"],u).map(s,r)),selectors:c.default(l,f,r)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t={},r=0;r<e.length;r++)t[e[r][0]]=e[r][1];return t}},function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=this&&this.__assign||function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=c(r(0)),s=c(r(17)),f=c(r(9)),l=c(r(1)),p=r(3);function d(e){return e(this)}function h(){return{}}var y=function(e){function t(t,r){var n=e.call(this,t,r)||this,o=t.Descendant,u=t.createDispatchers,a=t.createProps,c=r[t.name],i=c.selectors,l=c.actions;return n.ConnectedDescendant=s.default(function(e){return function(t){return f.default(e,d,t)}}(a(i)),u(l))(o),n}return o(t,e),t.prototype.render=function(){var e=this.ConnectedDescendant,t=this.props,r=(t.Descendant,t.name,t.createDispatchers,t.createProps,a(t,["Descendant","name","createDispatchers","createProps"]));return i.default.createElement(e,u({},r))},t.contextType=p.ContainerContext,t.defaultProps={name:"",createProps:h,createDispatchers:h},t}(i.default.PureComponent);t.default=l.default(y)},function(e,t){e.exports=require("react-redux/lib/connect/connect")},function(e,t,r){"use strict";var n,o=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=this&&this.__assign||function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=a(r(0));t.default=function(e){return function(t){return void 0===t&&(t={}),function(r){function n(){return null!==r&&r.apply(this,arguments)||this}return o(n,r),n.prototype.render=function(){return c.default.createElement(e,u({},this.props,t))},n}(c.default.PureComponent)}}}]);
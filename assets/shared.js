/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/picoapp/dist/picoapp.es.js":
/*!*************************************************!*\
  !*** ./node_modules/picoapp/dist/picoapp.es.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "component": () => (/* binding */ u),
/* harmony export */   "picoapp": () => (/* binding */ c)
/* harmony export */ });
var n=function(n){if("object"!=typeof(t=n)||Array.isArray(t))throw"state should be an object";var t},t=function(n,t,r,e){return(o=n,o.reduce(function(n,t,r){return n.indexOf(t)>-1?n:n.concat(t)},[])).reduce(function(n,r){return n.concat(t[r]||[])},[]).map(function(n){return n(r,e)});var o};function r(r){void 0===r&&(r={});var e={};return{getState:function(){return Object.assign({},r)},hydrate:function(o){return n(o),Object.assign(r,o),function(){var n=["*"].concat(Object.keys(o));t(n,e,r)}},on:function(n,t){return(n=[].concat(n)).map(function(n){return e[n]=(e[n]||[]).concat(t)}),function(){return n.map(function(n){return e[n].splice(e[n].indexOf(t),1)})}},emit:function(o,u,c){var i=("*"===o?[]:["*"]).concat(o);(u="function"==typeof u?u(r):u)&&(n(u),Object.assign(r,u),i=i.concat(Object.keys(u))),t(i,e,r,c)}}}r();var e=function(n){return"object"==typeof n&&!Array.isArray(n)},o=function(n){return"function"==typeof n};function u(n){return function(t,r){var e=[];return{subs:e,unmount:n(t,Object.assign({},r,{on:function(n,t){var o=r.on(n,t);return e.push(o),o}})),node:t}}}function c(n,t,u){void 0===n&&(n={}),void 0===t&&(t={}),void 0===u&&(u=[]);var c=r(t),i=[];return{on:c.on,emit:c.emit,getState:function(){return c.getState()},add:function(t){if(!e(t))throw"components should be an object";Object.assign(n,t)},use:function(n){if(!o(n))throw"plugins should be a function";u.push(n)},hydrate:function(n){return c.hydrate(n)},mount:function(t){void 0===t&&(t="data-component"),t=[].concat(t);for(var r=0;r<t.length;r++){for(var a=t[r],f=[].slice.call(document.querySelectorAll("["+a+"]")),s=function(){for(var t=f.pop(),r=t.getAttribute(a).split(/\s/),s=0;s<r.length;s++){var v=n[r[s]];if(v){t.removeAttribute(a);try{var d=u.reduce(function(n,r){var o=r(t,c);return e(o)?Object.assign(n,o):n},{}),m=v(t,Object.assign({},d,c));o(m.unmount)&&i.push(m)}catch(n){console.error(n),c.emit("error",{error:n}),c.hydrate({error:void 0})}}}};f.length;)s();c.emit("mount")}},unmount:function(){for(var n=i.length-1;n>-1;n--){var t=i[n],r=t.subs;(0,t.unmount)(t.node),r.map(function(n){return n()}),i.splice(n,1)}c.emit("unmount")}}}
//# sourceMappingURL=picoapp.es.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"shared": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/picoapp/dist/picoapp.es.js");
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGljb2FwcC9kaXN0L3BpY29hcHAuZXMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0JBQWtCLDRFQUE0RSxNQUFNLHFCQUFxQixvQ0FBb0MscUNBQXFDLDJCQUEyQiwwQkFBMEIscUJBQXFCLGNBQWMsRUFBRSxPQUFPLGNBQWMsaUJBQWlCLEVBQUUsU0FBUyxPQUFPLG9CQUFvQix1QkFBdUIsSUFBSSxxQkFBcUIsMENBQTBDLG1DQUFtQyxVQUFVLGtCQUFrQix1Q0FBdUMsaUNBQWlDLGFBQWEseUJBQXlCLHNDQUFzQyxHQUFHLHNCQUFzQixtQ0FBbUMsbUdBQW1HLElBQUksa0JBQWtCLDRDQUE0QyxlQUFlLDRCQUE0QixjQUFjLHFCQUFxQixTQUFTLE9BQU8sbUNBQW1DLElBQUksaUJBQWlCLGdCQUFnQixvQkFBb0IsWUFBWSxrQkFBa0IsaUJBQWlCLG1CQUFtQixxQkFBcUIsZ0JBQWdCLE9BQU8sd0NBQXdDLG9CQUFvQixpQkFBaUIsK0NBQStDLG1CQUFtQixpQkFBaUIsNkNBQTZDLFVBQVUscUJBQXFCLG9CQUFvQixtQkFBbUIsZ0RBQWdELFlBQVksV0FBVyxLQUFLLGtGQUFrRixzREFBc0QsV0FBVyxLQUFLLGNBQWMsTUFBTSxxQkFBcUIsSUFBSSw2QkFBNkIsYUFBYSxpQ0FBaUMsR0FBRyx3QkFBd0IsT0FBTyx3QkFBd0IsU0FBUyxpQ0FBaUMsUUFBUSxhQUFhLGFBQWEsTUFBTSxTQUFTLEtBQUssaUJBQWlCLG9CQUFvQixxQkFBcUIsS0FBSyxLQUFLLG9CQUFvQix3Q0FBd0MsV0FBVyxnQkFBZ0Isb0JBQXdEO0FBQzFuRTs7Ozs7OztVQ0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSw4QkFBOEIsd0NBQXdDO1dBQ3RFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0JBQWdCLHFCQUFxQjtXQUNyQztXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0MxQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVQzlDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InNoYXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBuPWZ1bmN0aW9uKG4pe2lmKFwib2JqZWN0XCIhPXR5cGVvZih0PW4pfHxBcnJheS5pc0FycmF5KHQpKXRocm93XCJzdGF0ZSBzaG91bGQgYmUgYW4gb2JqZWN0XCI7dmFyIHR9LHQ9ZnVuY3Rpb24obix0LHIsZSl7cmV0dXJuKG89bixvLnJlZHVjZShmdW5jdGlvbihuLHQscil7cmV0dXJuIG4uaW5kZXhPZih0KT4tMT9uOm4uY29uY2F0KHQpfSxbXSkpLnJlZHVjZShmdW5jdGlvbihuLHIpe3JldHVybiBuLmNvbmNhdCh0W3JdfHxbXSl9LFtdKS5tYXAoZnVuY3Rpb24obil7cmV0dXJuIG4ocixlKX0pO3ZhciBvfTtmdW5jdGlvbiByKHIpe3ZvaWQgMD09PXImJihyPXt9KTt2YXIgZT17fTtyZXR1cm57Z2V0U3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxyKX0saHlkcmF0ZTpmdW5jdGlvbihvKXtyZXR1cm4gbihvKSxPYmplY3QuYXNzaWduKHIsbyksZnVuY3Rpb24oKXt2YXIgbj1bXCIqXCJdLmNvbmNhdChPYmplY3Qua2V5cyhvKSk7dChuLGUscil9fSxvbjpmdW5jdGlvbihuLHQpe3JldHVybihuPVtdLmNvbmNhdChuKSkubWFwKGZ1bmN0aW9uKG4pe3JldHVybiBlW25dPShlW25dfHxbXSkuY29uY2F0KHQpfSksZnVuY3Rpb24oKXtyZXR1cm4gbi5tYXAoZnVuY3Rpb24obil7cmV0dXJuIGVbbl0uc3BsaWNlKGVbbl0uaW5kZXhPZih0KSwxKX0pfX0sZW1pdDpmdW5jdGlvbihvLHUsYyl7dmFyIGk9KFwiKlwiPT09bz9bXTpbXCIqXCJdKS5jb25jYXQobyk7KHU9XCJmdW5jdGlvblwiPT10eXBlb2YgdT91KHIpOnUpJiYobih1KSxPYmplY3QuYXNzaWduKHIsdSksaT1pLmNvbmNhdChPYmplY3Qua2V5cyh1KSkpLHQoaSxlLHIsYyl9fX1yKCk7dmFyIGU9ZnVuY3Rpb24obil7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIG4mJiFBcnJheS5pc0FycmF5KG4pfSxvPWZ1bmN0aW9uKG4pe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG59O2Z1bmN0aW9uIHUobil7cmV0dXJuIGZ1bmN0aW9uKHQscil7dmFyIGU9W107cmV0dXJue3N1YnM6ZSx1bm1vdW50Om4odCxPYmplY3QuYXNzaWduKHt9LHIse29uOmZ1bmN0aW9uKG4sdCl7dmFyIG89ci5vbihuLHQpO3JldHVybiBlLnB1c2gobyksb319KSksbm9kZTp0fX19ZnVuY3Rpb24gYyhuLHQsdSl7dm9pZCAwPT09biYmKG49e30pLHZvaWQgMD09PXQmJih0PXt9KSx2b2lkIDA9PT11JiYodT1bXSk7dmFyIGM9cih0KSxpPVtdO3JldHVybntvbjpjLm9uLGVtaXQ6Yy5lbWl0LGdldFN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGMuZ2V0U3RhdGUoKX0sYWRkOmZ1bmN0aW9uKHQpe2lmKCFlKHQpKXRocm93XCJjb21wb25lbnRzIHNob3VsZCBiZSBhbiBvYmplY3RcIjtPYmplY3QuYXNzaWduKG4sdCl9LHVzZTpmdW5jdGlvbihuKXtpZighbyhuKSl0aHJvd1wicGx1Z2lucyBzaG91bGQgYmUgYSBmdW5jdGlvblwiO3UucHVzaChuKX0saHlkcmF0ZTpmdW5jdGlvbihuKXtyZXR1cm4gYy5oeWRyYXRlKG4pfSxtb3VudDpmdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD1cImRhdGEtY29tcG9uZW50XCIpLHQ9W10uY29uY2F0KHQpO2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXtmb3IodmFyIGE9dFtyXSxmPVtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltcIithK1wiXVwiKSkscz1mdW5jdGlvbigpe2Zvcih2YXIgdD1mLnBvcCgpLHI9dC5nZXRBdHRyaWJ1dGUoYSkuc3BsaXQoL1xccy8pLHM9MDtzPHIubGVuZ3RoO3MrKyl7dmFyIHY9bltyW3NdXTtpZih2KXt0LnJlbW92ZUF0dHJpYnV0ZShhKTt0cnl7dmFyIGQ9dS5yZWR1Y2UoZnVuY3Rpb24obixyKXt2YXIgbz1yKHQsYyk7cmV0dXJuIGUobyk/T2JqZWN0LmFzc2lnbihuLG8pOm59LHt9KSxtPXYodCxPYmplY3QuYXNzaWduKHt9LGQsYykpO28obS51bm1vdW50KSYmaS5wdXNoKG0pfWNhdGNoKG4pe2NvbnNvbGUuZXJyb3IobiksYy5lbWl0KFwiZXJyb3JcIix7ZXJyb3I6bn0pLGMuaHlkcmF0ZSh7ZXJyb3I6dm9pZCAwfSl9fX19O2YubGVuZ3RoOylzKCk7Yy5lbWl0KFwibW91bnRcIil9fSx1bm1vdW50OmZ1bmN0aW9uKCl7Zm9yKHZhciBuPWkubGVuZ3RoLTE7bj4tMTtuLS0pe3ZhciB0PWlbbl0scj10LnN1YnM7KDAsdC51bm1vdW50KSh0Lm5vZGUpLHIubWFwKGZ1bmN0aW9uKG4pe3JldHVybiBuKCl9KSxpLnNwbGljZShuLDEpfWMuZW1pdChcInVubW91bnRcIil9fX1leHBvcnR7dSBhcyBjb21wb25lbnQsYyBhcyBwaWNvYXBwfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBpY29hcHAuZXMuanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHJlc3VsdCA9IGZuKCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJzaGFyZWRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gPSBzZWxmW1wid2VicGFja0NodW5rXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL25vZGVfbW9kdWxlcy9waWNvYXBwL2Rpc3QvcGljb2FwcC5lcy5qc1wiKTtcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iXSwic291cmNlUm9vdCI6IiJ9
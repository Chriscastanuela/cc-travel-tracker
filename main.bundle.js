/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".Traveler-Header {\n  border-style: solid;\n  border-left: none;\n  border-right: none;\n  border-width: 1px;\n  display: inline-block;\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 2fr;\n  background-color: #f2eede;\n  justify-content: end; }\n\n.Company-Name {\n  margin-top: 37px;\n  margin-left: 35px;\n  font-family: 'Kaushan Script', cursive;\n  font-size: xx-large;\n  margin-bottom: 0px; }\n\n.Icon-and-Name {\n  justify-self: center;\n  align-self: center;\n  grid-column: 4;\n  margin-top: 5px; }\n\n.UserIcon {\n  margin-left: 33px;\n  border-radius: 50%; }\n\n.User-Full-Name {\n  margin-top: 3px;\n  font-family: 'Open Sans', sans-serif; }\n\n/*\n<p class=\"Login-Button-Result\"></p>\n*/\nhtml {\n  padding: 0; }\n\n.Body {\n  margin: 0;\n  padding: 0; }\n\n.Login {\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 3fr;\n  background-color: #f2eede; }\n\n.Login-Welcome {\n  margin: 0;\n  padding: 0;\n  font-family: 'Kaushan Script', cursive;\n  grid-column: 3; }\n\n.UserName {\n  justify-self: center;\n  border-radius: 15px;\n  border-width: 1px;\n  font-family: 'Open Sans', sans-serif;\n  width: 150px;\n  height: 30px;\n  align-self: center;\n  height: 30px;\n  background-color: white; }\n\n.Password {\n  justify-self: center;\n  border-radius: 15px;\n  border-width: 1px;\n  font-family: 'Open Sans', sans-serif;\n  width: 150px;\n  height: 30px;\n  align-self: center;\n  height: 30px;\n  background-color: white; }\n\n.Check-Credentials {\n  cursor: pointer;\n  justify-self: center;\n  border-radius: 15px;\n  border-width: 1px;\n  font-family: 'Open Sans', sans-serif;\n  width: 150px;\n  height: 30px;\n  align-self: center;\n  height: 30px;\n  background-color: #f3f0f0; }\n\n.Login-Button-Result {\n  font-family: 'Open Sans', sans-serif; }\n\n.Traveler-Main {\n  border-style: solid;\n  border-left: none;\n  border-right: none;\n  border-width: 1px;\n  grid-template-columns: 1fr 1fr;\n  border-top: none;\n  display: grid;\n  background-color: #f3f0f0; }\n\n.Greeting {\n  font-family: 'Open Sans', sans-serif;\n  margin-left: 15px;\n  margin-bottom: 0px; }\n\n.Expenses {\n  font-family: 'Open Sans', sans-serif;\n  float: right; }\n\n.Book-Trip {\n  margin-top: 45px;\n  margin-left: 20px;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 75px;\n  background-color: white;\n  box-shadow: 5px 10px 28px #888888;\n  height: 450px;\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  row-gap: 10px; }\n\n#Date {\n  justify-self: center;\n  border-radius: 15px;\n  border-width: 1px;\n  background-color: #f2eede;\n  font-family: 'Open Sans', sans-serif;\n  width: 150px; }\n\n#Duration {\n  justify-self: center;\n  border-radius: 15px;\n  border-width: 1px;\n  background-color: #f2eede;\n  font-family: 'Open Sans', sans-serif;\n  width: 150px; }\n\n#Num-Of-Travelers {\n  justify-self: center;\n  border-radius: 15px;\n  border-width: 1px;\n  background-color: #f2eede;\n  font-family: 'Open Sans', sans-serif;\n  width: 150px; }\n\n#Destination {\n  justify-self: center;\n  border-radius: 15px;\n  border-width: 1px;\n  background-color: #f2eede;\n  font-family: 'Open Sans', sans-serif;\n  width: 150px; }\n\n.Check-Details {\n  justify-self: center;\n  border-radius: 15px;\n  border-width: 1px;\n  background-color: #f2eede;\n  font-family: 'Open Sans', sans-serif;\n  width: 150px;\n  cursor: pointer;\n  transition-duration: .6s;\n  max-width: 100px; }\n\n.Check-Details:hover {\n  background-color: #58d6ff; }\n\n.Ready-Status {\n  justify-self: center;\n  font-family: 'Open Sans', sans-serif;\n  margin: 0; }\n\n.Trip-Total {\n  justify-self: center;\n  font-family: 'Open Sans', sans-serif;\n  margin: 0; }\n\n.Book-Button {\n  justify-self: center;\n  border-radius: 15px;\n  border-width: 1px;\n  background-color: #f2eede;\n  font-family: 'Open Sans', sans-serif;\n  width: 150px;\n  cursor: pointer;\n  font-family: 'Kaushan Script', cursive;\n  max-width: 100px;\n  transition-duration: .6s; }\n\n.Book-Button:hover {\n  background-color: #58d6ff; }\n\n.BTHeader {\n  margin-top: 15px;\n  margin-left: 40px;\n  font-family: 'Kaushan Script', cursive; }\n\n.Traveler-Main-Right {\n  display: inline-block;\n  margin-top: 14px; }\n\n.YTD-Expenses {\n  font-family: 'Open Sans', sans-serif;\n  float: right;\n  margin-right: 110px;\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.TripsSection {\n  margin: 10px;\n  margin-top: 47px;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 100px;\n  background-color: white;\n  box-shadow: 5px 10px 28px #888888;\n  height: 450px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  row-gap: 10px;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  width: 250px; }\n\n.Your-Trip-Header {\n  margin-top: 15px;\n  margin-left: 90px;\n  font-family: 'Kaushan Script', cursive; }\n\n.Past {\n  background-color: #f2eede;\n  width: 225px;\n  border-radius: 75px;\n  border-style: solid;\n  border-width: 1px;\n  display: grid;\n  grid-template-rows: .2fr 2fr .5fr;\n  row-gap: 5px;\n  height: 360px;\n  box-shadow: 5px 10px 28px #888888;\n  overflow-x: scroll;\n  margin-left: 12px; }\n\n.Past-Header {\n  font-family: 'Kaushan Script', cursive;\n  margin-left: 60px; }\n\n.Present {\n  background-color: #f2eede;\n  width: 225px;\n  border-radius: 75px;\n  border-style: solid;\n  border-width: 1px;\n  display: grid;\n  grid-template-rows: .2fr 2fr .5fr;\n  row-gap: 5px;\n  height: 360px;\n  box-shadow: 5px 10px 28px #888888;\n  overflow-x: scroll;\n  margin-left: 10px;\n  margin-top: 60px;\n  margin-bottom: 10px; }\n\n.Present-Header {\n  font-family: 'Kaushan Script', cursive;\n  margin-left: 60px; }\n\n.Upcoming {\n  background-color: #f2eede;\n  width: 225px;\n  border-radius: 75px;\n  border-style: solid;\n  border-width: 1px;\n  display: grid;\n  grid-template-rows: .2fr 2fr .5fr;\n  row-gap: 5px;\n  height: 360px;\n  box-shadow: 5px 10px 28px #888888;\n  overflow-x: scroll;\n  grid-column: 3;\n  margin-left: 10px;\n  margin-top: 60px;\n  margin-bottom: 10px; }\n\n.Upcoming-Header {\n  font-family: 'Kaushan Script', cursive;\n  margin-left: 60px; }\n\n.Pending {\n  background-color: #f2eede;\n  width: 225px;\n  border-radius: 75px;\n  border-style: solid;\n  border-width: 1px;\n  display: grid;\n  grid-template-rows: .2fr 2fr .5fr;\n  row-gap: 5px;\n  height: 360px;\n  box-shadow: 5px 10px 28px #888888;\n  overflow-x: scroll;\n  margin-left: 5px;\n  margin-top: 60px;\n  margin-bottom: 10px; }\n\n.Pending-Header {\n  font-family: 'Kaushan Script', cursive;\n  margin-left: 60px; }\n\n.Trip-Div {\n  font-family: 'Open Sans', sans-serif;\n  margin-left: 4px;\n  align-self: center;\n  background-color: white;\n  width: 215px;\n  border-radius: 75px;\n  border-style: solid;\n  border-width: 1px;\n  display: grid;\n  grid-template-rows: .5fr 2fr .5fr;\n  height: 260px;\n  box-shadow: 5px 10px 28px #888888;\n  overflow-y: scroll;\n  overflow-wrap: break-word; }\n\n.Trip-Div-Text {\n  grid-row: 2;\n  margin-left: 15px; }\n\n.Traveler-Wrapper {\n  margin: 0px;\n  padding: 0px;\n  min-width: 100%;\n  min-height: 770px;\n  display: grid;\n  grid-template-rows: .5fr 2fr .3fr; }\n\n.Traveler-Footer {\n  background-color: #f2eede;\n  border-style: solid;\n  border-width: 1px;\n  border-top: none;\n  border-left: none;\n  border-right: none; }\n\n@media screen and (min-width: 539px) {\n  .Traveler-Main-Right {\n    display: inline-block;\n    margin-top: 0px; } }\n\n@media screen and (min-width: 650px) {\n  .Book-Trip {\n    margin-top: 45px;\n    margin-left: 20px;\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 75px;\n    background-color: white;\n    box-shadow: 5px 10px 28px #888888;\n    height: 450px;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    row-gap: 10px;\n    max-width: 306px; }\n  .Traveler-Main-Right {\n    display: inline-block;\n    margin-top: 0px; }\n  .TripsSection {\n    margin: 10px;\n    margin-top: 47px;\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 100px;\n    background-color: white;\n    box-shadow: 5px 10px 28px #888888;\n    height: 450px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    row-gap: 10px;\n    min-width: 311px; } }\n\n@media screen and (min-width: 768px) {\n  .TripsSection {\n    margin: 10px;\n    margin-top: 47px;\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 100px;\n    background-color: white;\n    box-shadow: 5px 10px 28px #888888;\n    height: 450px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    row-gap: 10px;\n    min-width: 439px;\n    margin-left: 0px; } }\n\n@media screen and (min-width: 874px) {\n  .TripsSection {\n    margin: 10px;\n    margin-top: 47px;\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 100px;\n    background-color: white;\n    box-shadow: 5px 10px 28px #888888;\n    height: 450px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    row-gap: 10px;\n    min-width: 439px;\n    margin-left: 0px; } }\n\n@media screen and (min-width: 1040px) {\n  .Traveler-Main {\n    border-style: solid;\n    border-left: none;\n    border-right: none;\n    border-width: 1px;\n    grid-template-columns: .75fr 2fr;\n    border-top: none;\n    display: grid;\n    background-color: #f3f0f0; }\n  .TripsSection {\n    margin: 10px;\n    margin-top: 47px;\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 100px;\n    background-color: white;\n    box-shadow: 5px 10px 28px #888888;\n    height: 450px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    row-gap: 10px;\n    width: 975px; } }\n\n@media screen and (min-width: 1390px) {\n  .Traveler-Main {\n    border-style: solid;\n    border-left: none;\n    border-right: none;\n    border-width: 1px;\n    grid-template-columns: .75fr 2fr;\n    border-top: none;\n    display: grid;\n    background-color: #f3f0f0; }\n  .Traveler-Main-Right {\n    display: inline-block;\n    margin-top: 0px; }\n  .TripsSection {\n    margin: 10px;\n    margin-top: 47px;\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 100px;\n    background-color: white;\n    box-shadow: 5px 10px 28px #888888;\n    height: 450px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    row-gap: 10px;\n    width: 990px; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/header.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/header.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".Traveler-Header {\n  border-style: solid;\n  border-left: none;\n  border-right: none;\n  border-width: 1px;\n  display: inline-block;\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 2fr;\n  background-color: #f2eede;\n  justify-content: end; }\n\n.Company-Name {\n  margin-top: 37px;\n  margin-left: 35px;\n  font-family: 'Kaushan Script', cursive;\n  font-size: xx-large;\n  margin-bottom: 0px; }\n\n.Icon-and-Name {\n  justify-self: center;\n  align-self: center;\n  grid-column: 4;\n  margin-top: 5px; }\n\n.UserIcon {\n  margin-left: 33px;\n  border-radius: 50%; }\n\n.User-Full-Name {\n  margin-top: 3px;\n  font-family: 'Open Sans', sans-serif; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/welcome.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/welcome.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*\n<p class=\"Login-Button-Result\"></p>\n*/\nhtml {\n  padding: 0; }\n\n.Body {\n  margin: 0;\n  padding: 0; }\n\n.Login {\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 3fr;\n  background-color: #f2eede; }\n\n.Login-Welcome {\n  margin: 0;\n  padding: 0;\n  font-family: 'Kaushan Script', cursive;\n  grid-column: 3; }\n\n.UserName {\n  justify-self: center;\n  border-radius: 15px;\n  border-width: 1px;\n  font-family: 'Open Sans', sans-serif;\n  width: 150px;\n  height: 30px;\n  align-self: center;\n  height: 30px;\n  background-color: white; }\n\n.Password {\n  justify-self: center;\n  border-radius: 15px;\n  border-width: 1px;\n  font-family: 'Open Sans', sans-serif;\n  width: 150px;\n  height: 30px;\n  align-self: center;\n  height: 30px;\n  background-color: white; }\n\n.Check-Credentials {\n  cursor: pointer;\n  justify-self: center;\n  border-radius: 15px;\n  border-width: 1px;\n  font-family: 'Open Sans', sans-serif;\n  width: 150px;\n  height: 30px;\n  align-self: center;\n  height: 30px;\n  background-color: #f3f0f0; }\n\n.Login-Button-Result {\n  font-family: 'Open Sans', sans-serif; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/classes/Traveler.js":
/*!*********************************!*\
  !*** ./src/classes/Traveler.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Traveler {
    constructor(identifier) {
        this.identifier = identifier;
        this.tripData;
        this.id;
        this.fullName;
        this.firstName;
        this.lastName;
        this.travelerType;
        this.pastTrips;
        this.currentTrips;
        this.pendingTrips;
        this.futureTrips;
    }

    getPersonalInfo() {
        return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
        .then(data => {
            return data.json();
        })
        .then(userData => {
            let currentTraveler = userData.travelers.find(index => {
                return this.identifier == index.id
            })
            this.id = currentTraveler.id;
            this.fullName = currentTraveler.name;
            this.firstName = currentTraveler.name.split(' ')[0];
            this.lastName = currentTraveler.name.split(' ')[1];
            this.travelerType = currentTraveler.travelerType;
            return this;
        })
    }

    getTripData() {
        var today = new Date();
        var todayWithoutTime = today.getFullYear()+'/'+`0${(today.getMonth()+1)}`+'/'+today.getDate();
        this.getPersonalInfo();
        let theFetch =  fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
        .then(data => {
            return data.json()
        })
        .then(allTripData => {
            let userTripData = allTripData['trips'].filter(index => {
                return index.userID == this.id;
            })
            this.pastTrips = userTripData.filter(i => {
                return i.date < todayWithoutTime;
            })
            this.currentTrips = userTripData.filter(i => {
                return i.date == todayWithoutTime;
            })
            this.futureTrips = userTripData.filter(i => {
                if (i.status != 'pending') {
                    return i.date > todayWithoutTime;
                }
            })
            this.pendingTrips = userTripData.filter(i => {
                return i.status == 'pending';
            })
            return this;
        }).then(tripData => {
            return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations`)
            .then(data => {
                return data.json()
            })
            .then(allDestinationData => {
                allDestinationData.destinations.forEach(i => {
                    if (this.pastTrips.length > 0) {
                        this.reformatTripData(`pastTrips`, i)
                    }
                    if (this.currentTrips.length > 0) {
                        this.reformatTripData(`currentTrips`, i)
                    }
                    if (this.pendingTrips.length > 0) {
                        this.reformatTripData(`pendingTrips`, i)
                    }
                    if (this.futureTrips.length > 0) {
                        this.reformatTripData(`futureTrips`, i)
                    }
                })
                return this;
            })
        }
        )
        return theFetch;
    }

    reformatTripData(tripKey, i) {
        this[tripKey].forEach(index => {
            if (index.destinationID == i.id) {
                index[`alt`] = i.alt;
                index[`destination`] = i.destination;
                index[`estimatedFlightCostPerPerson`] = i.estimatedFlightCostPerPerson;
                index[`estimatedLodgingCostPerDay`] = i.estimatedLodgingCostPerDay;
                index[`image`] = i.image;
            }
        })
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/header.scss":
/*!*****************************!*\
  !*** ./src/css/header.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/header.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/welcome.scss":
/*!******************************!*\
  !*** ./src/css/welcome.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./welcome.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/welcome.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/images/user.png":
/*!*****************************!*\
  !*** ./src/images/user.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/user.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Traveler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Traveler */ "./src/classes/Traveler.js");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_welcome_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/welcome.scss */ "./src/css/welcome.scss");
/* harmony import */ var _css_welcome_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_welcome_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/header.scss */ "./src/css/header.scss");
/* harmony import */ var _css_header_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_header_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/user.png */ "./src/images/user.png");
/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_user_png__WEBPACK_IMPORTED_MODULE_4__);

















let login = document.querySelector('.Login');
let userName = document.querySelector('.UserName');
let password = document.querySelector('.Password');
let credsButton = document.querySelector('.Check-Credentials');
let loginResult = document.querySelector('.Login-Button-Result')

let greeting = document.querySelector('.Greeting');
let expenses = document.querySelector('.YTD-Expenses');
let userFullName = document.querySelector('.User-Full-Name');

let dateField = document.querySelector('#Date');
let durationField = document.querySelector('#Duration');
let destinationField = document.querySelector('#Destination');
let travelersField = document.querySelector('#Num-Of-Travelers');
let checkDetails = document.querySelector('.Check-Details');
let readyStatus = document.querySelector(`.Ready-Status`);
let tripTotal = document.querySelector(`.Trip-Total`);
let bookButton = document.querySelector(`.Book-Button`);

let pastHeader = document.querySelector('.Past-Header');
let presentHeader = document.querySelector('.Present-Header');
let upcomingHeader = document.querySelector('.Upcoming-Header');
let pendingHeader = document.querySelector('.Pending-Header');

let traveler;




credsButton.addEventListener('click', checkCredsFunction);
checkDetails.addEventListener('click', checkDetailsFunction);
bookButton.addEventListener('click', bookTrip);




function checkCredsFunction() {
    let name = userName.value.slice(0, 8)
    let theID = userName.value.slice(8);
    if (theID <= 50 && userName.value.length == 10 && name == 'traveler' && password.value == 'travel2020') {
        createClasses();
        getDataAndShowDom();
        login.style.display = 'none';
    } else {
        loginResult.innerHTML = "Sorry, invalid username or password"
    }
}
function createClasses() {
    traveler = new _classes_Traveler__WEBPACK_IMPORTED_MODULE_0__["default"](userName.value.slice(-2));
}
function getDataAndShowDom() {
    Promise.all([
        traveler.getPersonalInfo(),
        traveler.getTripData(),
    ])
    .then(promiseDotAllIndex => {
        domInfo();
    })
}
function domInfo() {
    greeting.innerHTML = `Welcome back, ${traveler.firstName} the ${traveler.travelerType}!`;
    userFullName.innerHTML = `${traveler.fullName}`;
    let pastExpenses = [];
    let currentExpenses = [];
    let futureExpenses = [];
    let pendingExpenses = [];
    analyzeTripAmounts(pastHeader, `pastTrips`, pastExpenses);
    analyzeTripAmounts(presentHeader, `currentTrips`, currentExpenses);
    analyzeTripAmounts(upcomingHeader, `futureTrips`, futureExpenses);
    analyzeTripAmounts(pendingHeader, `pendingTrips`, pendingExpenses);
    let past = findSum(pastExpenses);
    let current = findSum(currentExpenses);
    let future = findSum(futureExpenses);
    let pending = findSum(pendingExpenses);
    let rawTravelExpenses =  past + current + future + pending;
    let totalTravelExpenses = (rawTravelExpenses * .10) + rawTravelExpenses;
    expenses.innerHTML = `YTD Travel Expenses: $${totalTravelExpenses.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations`)
        .then(data => {
            return data.json()
        })
        .then(allDestinationData => {
            allDestinationData.destinations.forEach(i => {
                destinationField.insertAdjacentHTML(`afterbegin`, `<option value=${i.id}>${i.destination}</option>`)
            })
        }
    )
}
function checkDetailsFunction() {
    let dest = destinationField.value;
    let duration = durationField.value;
    let travelers = travelersField.value;
    if (dateField.value != '' && duration != '' && dest != '' && travelers != '') {
        bookButton.hidden = false;
        readyStatus.innerHTML = 'You are ready to book';
        getTripTotal(duration, dest, travelers);
    };
    if (dateField.value == '' || durationField.value == '' || destinationField.value == '' || travelersField.value == '') {
        readyStatus.innerHTML = 'We need more details'
    }
}
function getTripTotal(durationValue, destinationValue, travelersValue) {
    fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations`)
    .then(data => {
        return data.json()
    })
    .then(allDestinationData => {
        let destination;
        allDestinationData.destinations.forEach(a => {
            if (a.id == destinationValue) {
                destination = a;
            } else {
                return false;
            }
        });
        return destination;
    })
    .then(myDestination => {
        let flightCost = myDestination.estimatedFlightCostPerPerson * travelersValue;
        let costPerDay = myDestination.estimatedLodgingCostPerDay * durationValue;
        let rawTotalCost = flightCost + costPerDay;
        let totalCost = rawTotalCost + (rawTotalCost * .10);
        tripTotal.innerHTML = `Total for this trip: $${totalCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
    })
}
function bookTrip() {
    let dest = parseInt(destinationField.value);
    let duration = parseInt(durationField.value);
    let travelers = parseInt(travelersField.value);
    let theDate = fixDateFormat(dateField.value);
    if (dateField.value != '' && duration != '' && dest != '' && travelers != '') {
        getTripTotal(duration, dest, travelers);
        let thePostContent = {
            id: Date.now(),
            userID: traveler.id,
            destinationID: dest,
            travelers: travelers,
            date: theDate,
            duration: duration,
            status: 'pending',
            suggestedActivities: []
        };
        let thePost = {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(thePostContent)
        }
        fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips`, thePost)
        .then(response => {
            getDataAndShowDom();
            // location.reload();
            // return false;
        }
        );
    };
    if (dateField.value == '' || durationField.value == '' || destinationField.value == '' || travelersField.value == '') {
        bookButton.hidden = true;
        readyStatus.innerHTML = 'We need more details'
    }
}




function findSum(array) {
    let theReduce = array.reduce((acc, i) => {
        acc += i
        return acc;
    }, 0)
    return theReduce;
}
function fixDateFormat(date) {
    let year = date.slice(0, 4)
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    let newDate = year + '/' + month + '/' + day;
    return newDate;
}
function analyzeTripAmounts(header, trips, expenses) {
    if (traveler[trips].length == 0) {
        header.insertAdjacentHTML(`afterend`, emptyDiv());
    } else {
        traveler[trips].forEach(element => {
            expenses.push(calculateTripCost(element));
            header.insertAdjacentHTML(`afterend`, newDiv(element))
        });
    }
}
function emptyDiv() {
    return `<div class="Trip-Div" id="Past-Div">
    <p class="Trip-Div-Text" id="Past-Text">You don't have any trips in this section</p>
    </div>`
}
function calculateTripCost(element) {
    let flightCost = element.estimatedFlightCostPerPerson * element.travelers;
    let lodgingCost = element.duration * element.estimatedLodgingCostPerDay;
    let totalCost = flightCost + lodgingCost;
    return totalCost;
}
function newDiv(element) {
    return `<div class="Trip-Div">
    <p class="Trip-Div-Text">
    Destination: ${element.destination}<br>
    Date: ${element.date}<br>
    Status: ${element.status}<br>
    Duration: ${element.duration} days<br>
    Travelers on board: ${element.travelers}<br>
    </p>
    </div>`
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3dlbGNvbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1RyYXZlbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzP2EyMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9oZWFkZXIuc2Nzcz8wMTBjIiwid2VicGFjazovLy8uL3NyYy9jc3Mvd2VsY29tZS5zY3NzP2E1YTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy91c2VyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxn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LHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDLFlBQVksYUFBYTtBQUN6QixjQUFjLGVBQWU7QUFDN0IsZ0JBQWdCLGlCQUFpQjtBQUNqQywwQkFBMEIsa0JBQWtCO0FBQzVDO0FBQ0E7QUFDQSxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5UcmF2ZWxlci1IZWFkZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmciAyZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJlZWRlO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7IH1cXG5cXG4uQ29tcGFueS1OYW1lIHtcXG4gIG1hcmdpbi10b3A6IDM3cHg7XFxuICBtYXJnaW4tbGVmdDogMzVweDtcXG4gIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gIG1hcmdpbi1ib3R0b206IDBweDsgfVxcblxcbi5JY29uLWFuZC1OYW1lIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDQ7XFxuICBtYXJnaW4tdG9wOiA1cHg7IH1cXG5cXG4uVXNlckljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IDMzcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cXG5cXG4uVXNlci1GdWxsLU5hbWUge1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyB9XFxuXFxuLypcXG48cCBjbGFzcz1cXFwiTG9naW4tQnV0dG9uLVJlc3VsdFxcXCI+PC9wPlxcbiovXFxuaHRtbCB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLkJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5Mb2dpbiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgM2ZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZWVkZTsgfVxcblxcbi5Mb2dpbi1XZWxjb21lIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcXG4gIGdyaWQtY29sdW1uOiAzOyB9XFxuXFxuLlVzZXJOYW1lIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG5cXG4uUGFzc3dvcmQge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcblxcbi5DaGVjay1DcmVkZW50aWFscyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YwZjA7IH1cXG5cXG4uTG9naW4tQnV0dG9uLVJlc3VsdCB7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IH1cXG5cXG4uVHJhdmVsZXItTWFpbiB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjBmMDsgfVxcblxcbi5HcmVldGluZyB7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDBweDsgfVxcblxcbi5FeHBlbnNlcyB7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBmbG9hdDogcmlnaHQ7IH1cXG5cXG4uQm9vay1UcmlwIHtcXG4gIG1hcmdpbi10b3A6IDQ1cHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDc1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDI4cHggIzg4ODg4ODtcXG4gIGhlaWdodDogNDUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICByb3ctZ2FwOiAxMHB4OyB9XFxuXFxuI0RhdGUge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJlZWRlO1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IDE1MHB4OyB9XFxuXFxuI0R1cmF0aW9uIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZWVkZTtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiAxNTBweDsgfVxcblxcbiNOdW0tT2YtVHJhdmVsZXJzIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZWVkZTtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiAxNTBweDsgfVxcblxcbiNEZXN0aW5hdGlvbiB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmVlZGU7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMTUwcHg7IH1cXG5cXG4uQ2hlY2stRGV0YWlscyB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmVlZGU7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMTUwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNnM7XFxuICBtYXgtd2lkdGg6IDEwMHB4OyB9XFxuXFxuLkNoZWNrLURldGFpbHM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4ZDZmZjsgfVxcblxcbi5SZWFkeS1TdGF0dXMge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4uVHJpcC1Ub3RhbCB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5Cb29rLUJ1dHRvbiB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmVlZGU7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMTUwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcXG4gIG1heC13aWR0aDogMTAwcHg7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNnM7IH1cXG5cXG4uQm9vay1CdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4ZDZmZjsgfVxcblxcbi5CVEhlYWRlciB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTsgfVxcblxcbi5UcmF2ZWxlci1NYWluLVJpZ2h0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi10b3A6IDE0cHg7IH1cXG5cXG4uWVRELUV4cGVuc2VzIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbi1yaWdodDogMTEwcHg7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7IH1cXG5cXG4uVHJpcHNTZWN0aW9uIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIG1hcmdpbi10b3A6IDQ3cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMjhweCAjODg4ODg4O1xcbiAgaGVpZ2h0OiA0NTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIHJvdy1nYXA6IDEwcHg7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICB3aWR0aDogMjUwcHg7IH1cXG5cXG4uWW91ci1UcmlwLUhlYWRlciB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XFxuICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTsgfVxcblxcbi5QYXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmVlZGU7XFxuICB3aWR0aDogMjI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA3NXB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogLjJmciAyZnIgLjVmcjtcXG4gIHJvdy1nYXA6IDVweDtcXG4gIGhlaWdodDogMzYwcHg7XFxuICBib3gtc2hhZG93OiA1cHggMTBweCAyOHB4ICM4ODg4ODg7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBtYXJnaW4tbGVmdDogMTJweDsgfVxcblxcbi5QYXN0LUhlYWRlciB7XFxuICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcXG4gIG1hcmdpbi1sZWZ0OiA2MHB4OyB9XFxuXFxuLlByZXNlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZWVkZTtcXG4gIHdpZHRoOiAyMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDc1cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuMmZyIDJmciAuNWZyO1xcbiAgcm93LWdhcDogNXB4O1xcbiAgaGVpZ2h0OiAzNjBweDtcXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDI4cHggIzg4ODg4ODtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG5cXG4uUHJlc2VudC1IZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7XFxuICBtYXJnaW4tbGVmdDogNjBweDsgfVxcblxcbi5VcGNvbWluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJlZWRlO1xcbiAgd2lkdGg6IDIyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNzVweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IC4yZnIgMmZyIC41ZnI7XFxuICByb3ctZ2FwOiA1cHg7XFxuICBoZWlnaHQ6IDM2MHB4O1xcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMjhweCAjODg4ODg4O1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgZ3JpZC1jb2x1bW46IDM7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuXFxuLlVwY29taW5nLUhlYWRlciB7XFxuICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcXG4gIG1hcmdpbi1sZWZ0OiA2MHB4OyB9XFxuXFxuLlBlbmRpbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZWVkZTtcXG4gIHdpZHRoOiAyMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDc1cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuMmZyIDJmciAuNWZyO1xcbiAgcm93LWdhcDogNXB4O1xcbiAgaGVpZ2h0OiAzNjBweDtcXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDI4cHggIzg4ODg4ODtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblxcbi5QZW5kaW5nLUhlYWRlciB7XFxuICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcXG4gIG1hcmdpbi1sZWZ0OiA2MHB4OyB9XFxuXFxuLlRyaXAtRGl2IHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAyMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDc1cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIDJmciAuNWZyO1xcbiAgaGVpZ2h0OiAyNjBweDtcXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDI4cHggIzg4ODg4ODtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IH1cXG5cXG4uVHJpcC1EaXYtVGV4dCB7XFxuICBncmlkLXJvdzogMjtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4OyB9XFxuXFxuLlRyYXZlbGVyLVdyYXBwZXIge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA3NzBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IC41ZnIgMmZyIC4zZnI7IH1cXG5cXG4uVHJhdmVsZXItRm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmVlZGU7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MzlweCkge1xcbiAgLlRyYXZlbGVyLU1haW4tUmlnaHQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IDBweDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjUwcHgpIHtcXG4gIC5Cb29rLVRyaXAge1xcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDc1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCAyOHB4ICM4ODg4ODg7XFxuICAgIGhlaWdodDogNDUwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbiAgICBtYXgtd2lkdGg6IDMwNnB4OyB9XFxuICAuVHJhdmVsZXItTWFpbi1SaWdodCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luLXRvcDogMHB4OyB9XFxuICAuVHJpcHNTZWN0aW9uIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0N3B4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCAyOHB4ICM4ODg4ODg7XFxuICAgIGhlaWdodDogNDUwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbiAgICBtaW4td2lkdGg6IDMxMXB4OyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLlRyaXBzU2VjdGlvbiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogNDdweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMjhweCAjODg4ODg4O1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgcm93LWdhcDogMTBweDtcXG4gICAgbWluLXdpZHRoOiA0MzlweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODc0cHgpIHtcXG4gIC5Ucmlwc1NlY3Rpb24ge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDQ3cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDI4cHggIzg4ODg4ODtcXG4gICAgaGVpZ2h0OiA0NTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxuICAgIG1pbi13aWR0aDogNDM5cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNDBweCkge1xcbiAgLlRyYXZlbGVyLU1haW4ge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuNzVmciAyZnI7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YwZjA7IH1cXG4gIC5Ucmlwc1NlY3Rpb24ge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDQ3cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDI4cHggIzg4ODg4ODtcXG4gICAgaGVpZ2h0OiA0NTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIHJvdy1nYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA5NzVweDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM5MHB4KSB7XFxuICAuVHJhdmVsZXItTWFpbiB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC43NWZyIDJmcjtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjBmMDsgfVxcbiAgLlRyYXZlbGVyLU1haW4tUmlnaHQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IDBweDsgfVxcbiAgLlRyaXBzU2VjdGlvbiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogNDdweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMjhweCAjODg4ODg4O1xcbiAgICBoZWlnaHQ6IDQ1MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgcm93LWdhcDogMTBweDtcXG4gICAgd2lkdGg6IDk5MHB4OyB9IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5UcmF2ZWxlci1IZWFkZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmciAyZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJlZWRlO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7IH1cXG5cXG4uQ29tcGFueS1OYW1lIHtcXG4gIG1hcmdpbi10b3A6IDM3cHg7XFxuICBtYXJnaW4tbGVmdDogMzVweDtcXG4gIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gIG1hcmdpbi1ib3R0b206IDBweDsgfVxcblxcbi5JY29uLWFuZC1OYW1lIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDQ7XFxuICBtYXJnaW4tdG9wOiA1cHg7IH1cXG5cXG4uVXNlckljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IDMzcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cXG5cXG4uVXNlci1GdWxsLU5hbWUge1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbjxwIGNsYXNzPVxcXCJMb2dpbi1CdXR0b24tUmVzdWx0XFxcIj48L3A+XFxuKi9cXG5odG1sIHtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uQm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLkxvZ2luIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAzZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJlZWRlOyB9XFxuXFxuLkxvZ2luLVdlbGNvbWUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgZ3JpZC1jb2x1bW46IDM7IH1cXG5cXG4uVXNlck5hbWUge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcblxcbi5QYXNzd29yZCB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxuXFxuLkNoZWNrLUNyZWRlbnRpYWxzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjBmMDsgfVxcblxcbi5Mb2dpbi1CdXR0b24tUmVzdWx0IHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJjbGFzcyBUcmF2ZWxlciB7XG4gICAgY29uc3RydWN0b3IoaWRlbnRpZmllcikge1xuICAgICAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICAgICAgICB0aGlzLnRyaXBEYXRhO1xuICAgICAgICB0aGlzLmlkO1xuICAgICAgICB0aGlzLmZ1bGxOYW1lO1xuICAgICAgICB0aGlzLmZpcnN0TmFtZTtcbiAgICAgICAgdGhpcy5sYXN0TmFtZTtcbiAgICAgICAgdGhpcy50cmF2ZWxlclR5cGU7XG4gICAgICAgIHRoaXMucGFzdFRyaXBzO1xuICAgICAgICB0aGlzLmN1cnJlbnRUcmlwcztcbiAgICAgICAgdGhpcy5wZW5kaW5nVHJpcHM7XG4gICAgICAgIHRoaXMuZnV0dXJlVHJpcHM7XG4gICAgfVxuXG4gICAgZ2V0UGVyc29uYWxJbmZvKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlci9kYXRhL3RyYXZlbGVycy90cmF2ZWxlcnMnKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4odXNlckRhdGEgPT4ge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRUcmF2ZWxlciA9IHVzZXJEYXRhLnRyYXZlbGVycy5maW5kKGluZGV4ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyID09IGluZGV4LmlkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5pZCA9IGN1cnJlbnRUcmF2ZWxlci5pZDtcbiAgICAgICAgICAgIHRoaXMuZnVsbE5hbWUgPSBjdXJyZW50VHJhdmVsZXIubmFtZTtcbiAgICAgICAgICAgIHRoaXMuZmlyc3ROYW1lID0gY3VycmVudFRyYXZlbGVyLm5hbWUuc3BsaXQoJyAnKVswXTtcbiAgICAgICAgICAgIHRoaXMubGFzdE5hbWUgPSBjdXJyZW50VHJhdmVsZXIubmFtZS5zcGxpdCgnICcpWzFdO1xuICAgICAgICAgICAgdGhpcy50cmF2ZWxlclR5cGUgPSBjdXJyZW50VHJhdmVsZXIudHJhdmVsZXJUeXBlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0VHJpcERhdGEoKSB7XG4gICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciB0b2RheVdpdGhvdXRUaW1lID0gdG9kYXkuZ2V0RnVsbFllYXIoKSsnLycrYDAkeyh0b2RheS5nZXRNb250aCgpKzEpfWArJy8nK3RvZGF5LmdldERhdGUoKTtcbiAgICAgICAgdGhpcy5nZXRQZXJzb25hbEluZm8oKTtcbiAgICAgICAgbGV0IHRoZUZldGNoID0gIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXIvZGF0YS90cmlwcy90cmlwcycpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuanNvbigpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGFsbFRyaXBEYXRhID0+IHtcbiAgICAgICAgICAgIGxldCB1c2VyVHJpcERhdGEgPSBhbGxUcmlwRGF0YVsndHJpcHMnXS5maWx0ZXIoaW5kZXggPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleC51c2VySUQgPT0gdGhpcy5pZDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnBhc3RUcmlwcyA9IHVzZXJUcmlwRGF0YS5maWx0ZXIoaSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkuZGF0ZSA8IHRvZGF5V2l0aG91dFRpbWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VHJpcHMgPSB1c2VyVHJpcERhdGEuZmlsdGVyKGkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpLmRhdGUgPT0gdG9kYXlXaXRob3V0VGltZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmZ1dHVyZVRyaXBzID0gdXNlclRyaXBEYXRhLmZpbHRlcihpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaS5zdGF0dXMgIT0gJ3BlbmRpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpLmRhdGUgPiB0b2RheVdpdGhvdXRUaW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdUcmlwcyA9IHVzZXJUcmlwRGF0YS5maWx0ZXIoaSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkuc3RhdHVzID09ICdwZW5kaW5nJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSkudGhlbih0cmlwRGF0YSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlci9kYXRhL2Rlc3RpbmF0aW9ucy9kZXN0aW5hdGlvbnNgKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuanNvbigpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oYWxsRGVzdGluYXRpb25EYXRhID0+IHtcbiAgICAgICAgICAgICAgICBhbGxEZXN0aW5hdGlvbkRhdGEuZGVzdGluYXRpb25zLmZvckVhY2goaSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhc3RUcmlwcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZm9ybWF0VHJpcERhdGEoYHBhc3RUcmlwc2AsIGkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRyaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmb3JtYXRUcmlwRGF0YShgY3VycmVudFRyaXBzYCwgaSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nVHJpcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZvcm1hdFRyaXBEYXRhKGBwZW5kaW5nVHJpcHNgLCBpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZ1dHVyZVRyaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmb3JtYXRUcmlwRGF0YShgZnV0dXJlVHJpcHNgLCBpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gdGhlRmV0Y2g7XG4gICAgfVxuXG4gICAgcmVmb3JtYXRUcmlwRGF0YSh0cmlwS2V5LCBpKSB7XG4gICAgICAgIHRoaXNbdHJpcEtleV0uZm9yRWFjaChpbmRleCA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kZXguZGVzdGluYXRpb25JRCA9PSBpLmlkKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhbYGFsdGBdID0gaS5hbHQ7XG4gICAgICAgICAgICAgICAgaW5kZXhbYGRlc3RpbmF0aW9uYF0gPSBpLmRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgIGluZGV4W2Blc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uYF0gPSBpLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb247XG4gICAgICAgICAgICAgICAgaW5kZXhbYGVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5YF0gPSBpLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5O1xuICAgICAgICAgICAgICAgIGluZGV4W2BpbWFnZWBdID0gaS5pbWFnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbGVyOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2hlYWRlci5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2hlYWRlci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9oZWFkZXIuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3dlbGNvbWUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi93ZWxjb21lLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3dlbGNvbWUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvdXNlci5wbmdcIjsiLCJpbXBvcnQgVHJhdmVsZXIgZnJvbSAnLi9jbGFzc2VzL1RyYXZlbGVyJztcblxuXG5cblxuaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuaW1wb3J0ICcuL2Nzcy93ZWxjb21lLnNjc3MnO1xuaW1wb3J0ICcuL2Nzcy9oZWFkZXIuc2Nzcyc7XG5cblxuXG5cbmltcG9ydCAnLi9pbWFnZXMvdXNlci5wbmcnO1xuXG5cblxuXG5sZXQgbG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTG9naW4nKTtcbmxldCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Vc2VyTmFtZScpO1xubGV0IHBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlBhc3N3b3JkJyk7XG5sZXQgY3JlZHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuQ2hlY2stQ3JlZGVudGlhbHMnKTtcbmxldCBsb2dpblJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Mb2dpbi1CdXR0b24tUmVzdWx0JylcblxubGV0IGdyZWV0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkdyZWV0aW5nJyk7XG5sZXQgZXhwZW5zZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuWVRELUV4cGVuc2VzJyk7XG5sZXQgdXNlckZ1bGxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlVzZXItRnVsbC1OYW1lJyk7XG5cbmxldCBkYXRlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjRGF0ZScpO1xubGV0IGR1cmF0aW9uRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjRHVyYXRpb24nKTtcbmxldCBkZXN0aW5hdGlvbkZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0Rlc3RpbmF0aW9uJyk7XG5sZXQgdHJhdmVsZXJzRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjTnVtLU9mLVRyYXZlbGVycycpO1xubGV0IGNoZWNrRGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5DaGVjay1EZXRhaWxzJyk7XG5sZXQgcmVhZHlTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuUmVhZHktU3RhdHVzYCk7XG5sZXQgdHJpcFRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLlRyaXAtVG90YWxgKTtcbmxldCBib29rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLkJvb2stQnV0dG9uYCk7XG5cbmxldCBwYXN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlBhc3QtSGVhZGVyJyk7XG5sZXQgcHJlc2VudEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5QcmVzZW50LUhlYWRlcicpO1xubGV0IHVwY29taW5nSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlVwY29taW5nLUhlYWRlcicpO1xubGV0IHBlbmRpbmdIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuUGVuZGluZy1IZWFkZXInKTtcblxubGV0IHRyYXZlbGVyO1xuXG5cblxuXG5jcmVkc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ3JlZHNGdW5jdGlvbik7XG5jaGVja0RldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0RldGFpbHNGdW5jdGlvbik7XG5ib29rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm9va1RyaXApO1xuXG5cblxuXG5mdW5jdGlvbiBjaGVja0NyZWRzRnVuY3Rpb24oKSB7XG4gICAgbGV0IG5hbWUgPSB1c2VyTmFtZS52YWx1ZS5zbGljZSgwLCA4KVxuICAgIGxldCB0aGVJRCA9IHVzZXJOYW1lLnZhbHVlLnNsaWNlKDgpO1xuICAgIGlmICh0aGVJRCA8PSA1MCAmJiB1c2VyTmFtZS52YWx1ZS5sZW5ndGggPT0gMTAgJiYgbmFtZSA9PSAndHJhdmVsZXInICYmIHBhc3N3b3JkLnZhbHVlID09ICd0cmF2ZWwyMDIwJykge1xuICAgICAgICBjcmVhdGVDbGFzc2VzKCk7XG4gICAgICAgIGdldERhdGFBbmRTaG93RG9tKCk7XG4gICAgICAgIGxvZ2luLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbG9naW5SZXN1bHQuaW5uZXJIVE1MID0gXCJTb3JyeSwgaW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZFwiXG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlQ2xhc3NlcygpIHtcbiAgICB0cmF2ZWxlciA9IG5ldyBUcmF2ZWxlcih1c2VyTmFtZS52YWx1ZS5zbGljZSgtMikpO1xufVxuZnVuY3Rpb24gZ2V0RGF0YUFuZFNob3dEb20oKSB7XG4gICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0cmF2ZWxlci5nZXRQZXJzb25hbEluZm8oKSxcbiAgICAgICAgdHJhdmVsZXIuZ2V0VHJpcERhdGEoKSxcbiAgICBdKVxuICAgIC50aGVuKHByb21pc2VEb3RBbGxJbmRleCA9PiB7XG4gICAgICAgIGRvbUluZm8oKTtcbiAgICB9KVxufVxuZnVuY3Rpb24gZG9tSW5mbygpIHtcbiAgICBncmVldGluZy5pbm5lckhUTUwgPSBgV2VsY29tZSBiYWNrLCAke3RyYXZlbGVyLmZpcnN0TmFtZX0gdGhlICR7dHJhdmVsZXIudHJhdmVsZXJUeXBlfSFgO1xuICAgIHVzZXJGdWxsTmFtZS5pbm5lckhUTUwgPSBgJHt0cmF2ZWxlci5mdWxsTmFtZX1gO1xuICAgIGxldCBwYXN0RXhwZW5zZXMgPSBbXTtcbiAgICBsZXQgY3VycmVudEV4cGVuc2VzID0gW107XG4gICAgbGV0IGZ1dHVyZUV4cGVuc2VzID0gW107XG4gICAgbGV0IHBlbmRpbmdFeHBlbnNlcyA9IFtdO1xuICAgIGFuYWx5emVUcmlwQW1vdW50cyhwYXN0SGVhZGVyLCBgcGFzdFRyaXBzYCwgcGFzdEV4cGVuc2VzKTtcbiAgICBhbmFseXplVHJpcEFtb3VudHMocHJlc2VudEhlYWRlciwgYGN1cnJlbnRUcmlwc2AsIGN1cnJlbnRFeHBlbnNlcyk7XG4gICAgYW5hbHl6ZVRyaXBBbW91bnRzKHVwY29taW5nSGVhZGVyLCBgZnV0dXJlVHJpcHNgLCBmdXR1cmVFeHBlbnNlcyk7XG4gICAgYW5hbHl6ZVRyaXBBbW91bnRzKHBlbmRpbmdIZWFkZXIsIGBwZW5kaW5nVHJpcHNgLCBwZW5kaW5nRXhwZW5zZXMpO1xuICAgIGxldCBwYXN0ID0gZmluZFN1bShwYXN0RXhwZW5zZXMpO1xuICAgIGxldCBjdXJyZW50ID0gZmluZFN1bShjdXJyZW50RXhwZW5zZXMpO1xuICAgIGxldCBmdXR1cmUgPSBmaW5kU3VtKGZ1dHVyZUV4cGVuc2VzKTtcbiAgICBsZXQgcGVuZGluZyA9IGZpbmRTdW0ocGVuZGluZ0V4cGVuc2VzKTtcbiAgICBsZXQgcmF3VHJhdmVsRXhwZW5zZXMgPSAgcGFzdCArIGN1cnJlbnQgKyBmdXR1cmUgKyBwZW5kaW5nO1xuICAgIGxldCB0b3RhbFRyYXZlbEV4cGVuc2VzID0gKHJhd1RyYXZlbEV4cGVuc2VzICogLjEwKSArIHJhd1RyYXZlbEV4cGVuc2VzO1xuICAgIGV4cGVuc2VzLmlubmVySFRNTCA9IGBZVEQgVHJhdmVsIEV4cGVuc2VzOiAkJHt0b3RhbFRyYXZlbEV4cGVuc2VzLnRvRml4ZWQoMikucmVwbGFjZSgvXFxkKD89KFxcZHszfSkrXFwuKS9nLCAnJCYsJyl9YDtcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlci9kYXRhL2Rlc3RpbmF0aW9ucy9kZXN0aW5hdGlvbnNgKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmpzb24oKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihhbGxEZXN0aW5hdGlvbkRhdGEgPT4ge1xuICAgICAgICAgICAgYWxsRGVzdGluYXRpb25EYXRhLmRlc3RpbmF0aW9ucy5mb3JFYWNoKGkgPT4ge1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uRmllbGQuaW5zZXJ0QWRqYWNlbnRIVE1MKGBhZnRlcmJlZ2luYCwgYDxvcHRpb24gdmFsdWU9JHtpLmlkfT4ke2kuZGVzdGluYXRpb259PC9vcHRpb24+YClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICApXG59XG5mdW5jdGlvbiBjaGVja0RldGFpbHNGdW5jdGlvbigpIHtcbiAgICBsZXQgZGVzdCA9IGRlc3RpbmF0aW9uRmllbGQudmFsdWU7XG4gICAgbGV0IGR1cmF0aW9uID0gZHVyYXRpb25GaWVsZC52YWx1ZTtcbiAgICBsZXQgdHJhdmVsZXJzID0gdHJhdmVsZXJzRmllbGQudmFsdWU7XG4gICAgaWYgKGRhdGVGaWVsZC52YWx1ZSAhPSAnJyAmJiBkdXJhdGlvbiAhPSAnJyAmJiBkZXN0ICE9ICcnICYmIHRyYXZlbGVycyAhPSAnJykge1xuICAgICAgICBib29rQnV0dG9uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICByZWFkeVN0YXR1cy5pbm5lckhUTUwgPSAnWW91IGFyZSByZWFkeSB0byBib29rJztcbiAgICAgICAgZ2V0VHJpcFRvdGFsKGR1cmF0aW9uLCBkZXN0LCB0cmF2ZWxlcnMpO1xuICAgIH07XG4gICAgaWYgKGRhdGVGaWVsZC52YWx1ZSA9PSAnJyB8fCBkdXJhdGlvbkZpZWxkLnZhbHVlID09ICcnIHx8IGRlc3RpbmF0aW9uRmllbGQudmFsdWUgPT0gJycgfHwgdHJhdmVsZXJzRmllbGQudmFsdWUgPT0gJycpIHtcbiAgICAgICAgcmVhZHlTdGF0dXMuaW5uZXJIVE1MID0gJ1dlIG5lZWQgbW9yZSBkZXRhaWxzJ1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldFRyaXBUb3RhbChkdXJhdGlvblZhbHVlLCBkZXN0aW5hdGlvblZhbHVlLCB0cmF2ZWxlcnNWYWx1ZSkge1xuICAgIGZldGNoKGBodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXIvZGF0YS9kZXN0aW5hdGlvbnMvZGVzdGluYXRpb25zYClcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGEuanNvbigpXG4gICAgfSlcbiAgICAudGhlbihhbGxEZXN0aW5hdGlvbkRhdGEgPT4ge1xuICAgICAgICBsZXQgZGVzdGluYXRpb247XG4gICAgICAgIGFsbERlc3RpbmF0aW9uRGF0YS5kZXN0aW5hdGlvbnMuZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgIGlmIChhLmlkID09IGRlc3RpbmF0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiA9IGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkZXN0aW5hdGlvbjtcbiAgICB9KVxuICAgIC50aGVuKG15RGVzdGluYXRpb24gPT4ge1xuICAgICAgICBsZXQgZmxpZ2h0Q29zdCA9IG15RGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiAqIHRyYXZlbGVyc1ZhbHVlO1xuICAgICAgICBsZXQgY29zdFBlckRheSA9IG15RGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgKiBkdXJhdGlvblZhbHVlO1xuICAgICAgICBsZXQgcmF3VG90YWxDb3N0ID0gZmxpZ2h0Q29zdCArIGNvc3RQZXJEYXk7XG4gICAgICAgIGxldCB0b3RhbENvc3QgPSByYXdUb3RhbENvc3QgKyAocmF3VG90YWxDb3N0ICogLjEwKTtcbiAgICAgICAgdHJpcFRvdGFsLmlubmVySFRNTCA9IGBUb3RhbCBmb3IgdGhpcyB0cmlwOiAkJHt0b3RhbENvc3QudG9GaXhlZCgyKS5yZXBsYWNlKC9cXGQoPz0oXFxkezN9KStcXC4pL2csICckJiwnKX1gXG4gICAgfSlcbn1cbmZ1bmN0aW9uIGJvb2tUcmlwKCkge1xuICAgIGxldCBkZXN0ID0gcGFyc2VJbnQoZGVzdGluYXRpb25GaWVsZC52YWx1ZSk7XG4gICAgbGV0IGR1cmF0aW9uID0gcGFyc2VJbnQoZHVyYXRpb25GaWVsZC52YWx1ZSk7XG4gICAgbGV0IHRyYXZlbGVycyA9IHBhcnNlSW50KHRyYXZlbGVyc0ZpZWxkLnZhbHVlKTtcbiAgICBsZXQgdGhlRGF0ZSA9IGZpeERhdGVGb3JtYXQoZGF0ZUZpZWxkLnZhbHVlKTtcbiAgICBpZiAoZGF0ZUZpZWxkLnZhbHVlICE9ICcnICYmIGR1cmF0aW9uICE9ICcnICYmIGRlc3QgIT0gJycgJiYgdHJhdmVsZXJzICE9ICcnKSB7XG4gICAgICAgIGdldFRyaXBUb3RhbChkdXJhdGlvbiwgZGVzdCwgdHJhdmVsZXJzKTtcbiAgICAgICAgbGV0IHRoZVBvc3RDb250ZW50ID0ge1xuICAgICAgICAgICAgaWQ6IERhdGUubm93KCksXG4gICAgICAgICAgICB1c2VySUQ6IHRyYXZlbGVyLmlkLFxuICAgICAgICAgICAgZGVzdGluYXRpb25JRDogZGVzdCxcbiAgICAgICAgICAgIHRyYXZlbGVyczogdHJhdmVsZXJzLFxuICAgICAgICAgICAgZGF0ZTogdGhlRGF0ZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICAgICAgICAgICAgc3VnZ2VzdGVkQWN0aXZpdGllczogW11cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHRoZVBvc3QgPSB7XG4gICAgICAgICAgICBtZXRob2Q6IGBQT1NUYCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhlUG9zdENvbnRlbnQpXG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlci9kYXRhL3RyaXBzL3RyaXBzYCwgdGhlUG9zdClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgZ2V0RGF0YUFuZFNob3dEb20oKTtcbiAgICAgICAgICAgIC8vIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfTtcbiAgICBpZiAoZGF0ZUZpZWxkLnZhbHVlID09ICcnIHx8IGR1cmF0aW9uRmllbGQudmFsdWUgPT0gJycgfHwgZGVzdGluYXRpb25GaWVsZC52YWx1ZSA9PSAnJyB8fCB0cmF2ZWxlcnNGaWVsZC52YWx1ZSA9PSAnJykge1xuICAgICAgICBib29rQnV0dG9uLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIHJlYWR5U3RhdHVzLmlubmVySFRNTCA9ICdXZSBuZWVkIG1vcmUgZGV0YWlscydcbiAgICB9XG59XG5cblxuXG5cbmZ1bmN0aW9uIGZpbmRTdW0oYXJyYXkpIHtcbiAgICBsZXQgdGhlUmVkdWNlID0gYXJyYXkucmVkdWNlKChhY2MsIGkpID0+IHtcbiAgICAgICAgYWNjICs9IGlcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKVxuICAgIHJldHVybiB0aGVSZWR1Y2U7XG59XG5mdW5jdGlvbiBmaXhEYXRlRm9ybWF0KGRhdGUpIHtcbiAgICBsZXQgeWVhciA9IGRhdGUuc2xpY2UoMCwgNClcbiAgICBsZXQgbW9udGggPSBkYXRlLnNsaWNlKDUsIDcpO1xuICAgIGxldCBkYXkgPSBkYXRlLnNsaWNlKDgsIDEwKTtcbiAgICBsZXQgbmV3RGF0ZSA9IHllYXIgKyAnLycgKyBtb250aCArICcvJyArIGRheTtcbiAgICByZXR1cm4gbmV3RGF0ZTtcbn1cbmZ1bmN0aW9uIGFuYWx5emVUcmlwQW1vdW50cyhoZWFkZXIsIHRyaXBzLCBleHBlbnNlcykge1xuICAgIGlmICh0cmF2ZWxlclt0cmlwc10ubGVuZ3RoID09IDApIHtcbiAgICAgICAgaGVhZGVyLmluc2VydEFkamFjZW50SFRNTChgYWZ0ZXJlbmRgLCBlbXB0eURpdigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0cmF2ZWxlclt0cmlwc10uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGV4cGVuc2VzLnB1c2goY2FsY3VsYXRlVHJpcENvc3QoZWxlbWVudCkpO1xuICAgICAgICAgICAgaGVhZGVyLmluc2VydEFkamFjZW50SFRNTChgYWZ0ZXJlbmRgLCBuZXdEaXYoZWxlbWVudCkpXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGVtcHR5RGl2KCkge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIlRyaXAtRGl2XCIgaWQ9XCJQYXN0LURpdlwiPlxuICAgIDxwIGNsYXNzPVwiVHJpcC1EaXYtVGV4dFwiIGlkPVwiUGFzdC1UZXh0XCI+WW91IGRvbid0IGhhdmUgYW55IHRyaXBzIGluIHRoaXMgc2VjdGlvbjwvcD5cbiAgICA8L2Rpdj5gXG59XG5mdW5jdGlvbiBjYWxjdWxhdGVUcmlwQ29zdChlbGVtZW50KSB7XG4gICAgbGV0IGZsaWdodENvc3QgPSBlbGVtZW50LmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gKiBlbGVtZW50LnRyYXZlbGVycztcbiAgICBsZXQgbG9kZ2luZ0Nvc3QgPSBlbGVtZW50LmR1cmF0aW9uICogZWxlbWVudC5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheTtcbiAgICBsZXQgdG90YWxDb3N0ID0gZmxpZ2h0Q29zdCArIGxvZGdpbmdDb3N0O1xuICAgIHJldHVybiB0b3RhbENvc3Q7XG59XG5mdW5jdGlvbiBuZXdEaXYoZWxlbWVudCkge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIlRyaXAtRGl2XCI+XG4gICAgPHAgY2xhc3M9XCJUcmlwLURpdi1UZXh0XCI+XG4gICAgRGVzdGluYXRpb246ICR7ZWxlbWVudC5kZXN0aW5hdGlvbn08YnI+XG4gICAgRGF0ZTogJHtlbGVtZW50LmRhdGV9PGJyPlxuICAgIFN0YXR1czogJHtlbGVtZW50LnN0YXR1c308YnI+XG4gICAgRHVyYXRpb246ICR7ZWxlbWVudC5kdXJhdGlvbn0gZGF5czxicj5cbiAgICBUcmF2ZWxlcnMgb24gYm9hcmQ6ICR7ZWxlbWVudC50cmF2ZWxlcnN9PGJyPlxuICAgIDwvcD5cbiAgICA8L2Rpdj5gXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_first_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/first.js */ \"./src/js/first.js\");\n/* harmony import */ var _js_second_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/second.js */ \"./src/js/second.js\");\n\r\n\r\n\r\n\r\nconst second = function () {\r\n    Object(_js_second_js__WEBPACK_IMPORTED_MODULE_1__[\"render\"])();\r\n};\r\nif(localStorage.id == 2){\r\n    second();\r\n}\r\nelse{\r\n    Object(_js_first_js__WEBPACK_IMPORTED_MODULE_0__[\"start\"])();\r\n}\r\n\r\nconst pokemonButton = document.getElementById('pockemon-button');\r\nconst infoButton = document.getElementById('info-button');\r\n\r\nfunction pokemon(){\r\n    second();\r\n    localStorage.id = 2;\r\n}\r\n\r\npokemonButton.onclick = pokemon;\r\npokemonButton.removeEventListener('click', pokemon);\r\n\r\nfunction info(){\r\n    Object(_js_first_js__WEBPACK_IMPORTED_MODULE_0__[\"start\"])();\r\n    localStorage.id = 1;\r\n}\r\ninfoButton.onclick = info;\r\ninfoButton.removeEventListener('click', info);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/first.js":
/*!*************************!*\
  !*** ./src/js/first.js ***!
  \*************************/
/*! exports provided: start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\nfunction start(){\r\n    const content = document.getElementById('root');\r\n    let pokemonButton = document.getElementById('pockemon-button');\r\n    let infoButton = document.getElementById('info-button');\r\n    pokemonButton.className = 'first-button';\r\n    infoButton.className = 'first-button';\r\n    content.innerHTML = '';\r\n    content.className = 'first-page';\r\n    document.body.className = 'first';\r\n    let photo = document.createElement('div');\r\n    photo.className = 'photo';\r\n    let img = document.createElement('img');\r\n    img.className = 'img';\r\n    img.src = \"images/me.JPG\";\r\n    photo.appendChild(img);\r\n    content.appendChild(photo);\r\n    let list = document.createElement(\"li\");\r\n    let ul = document.createElement('ul');\r\n    list.innerHTML = \"Дощенко Анна\";\r\n    ul.appendChild(list);\r\n    let name = document.createElement('h1');\r\n    name.className = 'name';\r\n    let info = document.createElement(\"div\");\r\n    info.className = 'info';\r\n    name.innerHTML = \"Дощенко Анна\";\r\n    info.appendChild(name);\r\n    let restInfo = document.createElement(\"p\");\r\n    restInfo.className = 'rest-info';\r\n    restInfo.innerHTML = \"Студентка группы М3307. Член сборной по алтимат-фрисби. </br> В свободное время люблю проводить время с друзьями и заниматься спортом.\";\r\n    info.appendChild(restInfo);\r\n    content.appendChild(info);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/first.js?");

/***/ }),

/***/ "./src/js/second.js":
/*!**************************!*\
  !*** ./src/js/second.js ***!
  \**************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nfunction render() {\r\n    const content = document.getElementById('root');\r\n    content.className = 'second-page';\r\n    content.innerHTML = '';\r\n    let pokemonButton = document.getElementById('pockemon-button');\r\n    let infoButton = document.getElementById('info-button');\r\n    pokemonButton.className = 'second-button';\r\n    infoButton.className = 'second-button';\r\n    document.body.className = 'second';\r\n    let name = document.createElement('span');\r\n    name.className = 'pocke-name';\r\n    let abilities = document.createElement('div');\r\n    let header = document.createElement('h1');\r\n    header.className = 'header';\r\n    header.innerHTML = \"Abilities\";\r\n    async function getPokemon() {\r\n        let id = Math.floor(Math.random() * (808));\r\n        const url = 'https://pokeapi.co/api/v2/pokemon/' + id.toString() + '/';\r\n        const response = await fetch(url, {method: 'GET'});\r\n        const json = await response.json();\r\n        name.innerHTML = json.name;\r\n        let array = [];\r\n        for (let i = 0; i < json.abilities.length; i++) {\r\n            array.push(json.abilities[i]);\r\n            let abilityName = json.abilities[i].ability.name;\r\n            let abilityURL = json.abilities[i].ability.url;\r\n            let div = document.createElement('div');\r\n            div.className = 'div';\r\n            let ability = document.createElement('span');\r\n            ability.className = 'ability';\r\n            let description = document.createElement('p');\r\n            description.className = 'description';\r\n            ability.innerHTML = abilityName;\r\n            div.appendChild(ability);\r\n            content.appendChild(div);\r\n            async function apiCall(url) {\r\n                const response = await fetch(url, {method: 'GET'});\r\n                const json = await response.json();\r\n                let desr = json.effect_entries[0].effect;\r\n                description.innerHTML = desr;\r\n                div.appendChild(description);\r\n            }\r\n            await apiCall(abilityURL);\r\n            abilities.appendChild(div);\r\n        }\r\n    }\r\n    getPokemon().then();\r\n    content.appendChild(name);\r\n    abilities.appendChild(header);\r\n    content.appendChild(abilities);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/second.js?");

/***/ })

/******/ });
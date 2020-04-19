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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_first_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/first.js */ \"./src/js/first.js\");\n/* harmony import */ var _js_first_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_first_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_second_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/second.js */ \"./src/js/second.js\");\n/* harmony import */ var _js_second_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_second_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/first.js":
/*!*************************!*\
  !*** ./src/js/first.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const second = __webpack_require__(/*! ./second */ \"./src/js/second.js\");\r\n\r\nvar start = function(){\r\n    if (localStorage.id == 2){\r\n        while (document.body.firstElementChild)\r\n        {\r\n            document.body.removeChild(document.body.firstElementChild);\r\n        }\r\n        return second.render();\r\n    }\r\n    while (document.body.firstElementChild)\r\n    {\r\n        document.body.removeChild(document.body.firstElementChild);\r\n    }\r\n    localStorage.id = 1;\r\n    document.body.setAttribute(\"style\", \"background: #9477e4; margin: 0; padding: 0\");\r\n    var photo = document.createElement('div');\r\n    var img = document.createElement('img');\r\n    photo.style.margin = \"10px\";\r\n    photo.style.display = \"flex\";\r\n    photo.style.justifyContent = \"center\";\r\n    img.src = \"images/me.jpg\";\r\n    img.style.borderRadius = \"45%\";\r\n    photo.appendChild(img);\r\n    document.body.appendChild(photo);\r\n\r\n    var list = document.createElement(\"li\");\r\n    var ul = document.createElement('ul');\r\n    list.innerHTML = \"Дощенко Анна\";\r\n    ul.appendChild(list);\r\n\r\n\r\n    const name = document.createElement('h1');\r\n    var info = document.createElement(\"div\");\r\n    info.style.display = \"flex\";\r\n    info.style.flex = \"1\";\r\n    info.style.justifyContent = \"center\";\r\n    info.style.flexWrap = \"wrap\";\r\n    name.innerHTML = \"Дощенко Анна\";\r\n    name.style.color = \"#bf0d3d\";\r\n    name.style.display = \"flex\";\r\n    name.style.width = \"100%\";\r\n    name.style.justifyContent = \"center\";\r\n    name.style.margin = \"3px\";\r\n    name.style.fontFamily = \"Brush Script Std, cursive\";\r\n    info.appendChild(name);\r\n    let restInfo = document.createElement(\"p\");\r\n    restInfo.className = \"personal.info\";\r\n    restInfo.style.display = \"flex\";\r\n    restInfo.style.justifyContent = \"center\";\r\n    restInfo.style.flex = \"1\";\r\n    restInfo.style.textAlign = \"center\";\r\n    restInfo.style.padding = \"5px\";\r\n    restInfo.innerHTML = \"Студентка группы М3307. Член сборной по алтимат-фрисби. </br> В свободное время люблю проводить время с друзьями и заниматься спортом.\";\r\n    info.appendChild(restInfo);\r\n    restInfo.style.color = \"#070311\";\r\n    restInfo.style.fontSize = \"16pt\";\r\n    restInfo.style.margin = \"0\";\r\n    restInfo.style.fontFamily = \"Brush Script Std, cursive\";\r\n    document.body.appendChild(info);\r\n\r\n\r\n    var button = document.createElement(\"div\");\r\n    var pockemonButton = document.createElement(\"button\");\r\n    pockemonButton.innerHTML = \"Get pockemon\";\r\n    pockemonButton.style.background = \"none\";\r\n    pockemonButton.style.border = \"3px solid #070311\";\r\n    pockemonButton.style.fontWeight = \"bold\";\r\n    pockemonButton.style.cursor = \"pointer\";\r\n    pockemonButton.style.borderRadius = \"15px\";\r\n    pockemonButton.style.height = \"50px\";\r\n    pockemonButton.style.width = \"150px\";\r\n    pockemonButton.style.color = \"#070311\";\r\n    pockemonButton.style.fontSize = \"12pt\";\r\n    hover = pockemonButton.addEventListener(\"mouseenter\", function () {\r\n        pockemonButton.style.transitionDuration = \"0.3s\";\r\n        pockemonButton.style.backgroundColor = \"#bf0d3d\";\r\n        pockemonButton.style.border = \"3px solid #bf0d3d\";\r\n        pockemonButton.style.color = \"white\";\r\n    });\r\n    leave = pockemonButton.addEventListener(\"mouseleave\", function () {\r\n        pockemonButton.style.transitionDuration = \"0.3s\";\r\n        pockemonButton.style.background = \"none\";\r\n        pockemonButton.style.border = \"3px solid #070311\";\r\n        pockemonButton.style.color = \"#070311\";\r\n    });\r\n    button.style.margin = \"30px\";\r\n    button.style.display = \"flex\";\r\n    button.style.justifyContent = \"center\";\r\n    button.appendChild(pockemonButton);\r\n    document.body.appendChild(button);\r\n\r\n    click = pockemonButton.addEventListener(\"click\", async function () {\r\n        second.render();\r\n    });\r\n\r\n};\r\n\r\nstart();\r\n\r\nmodule.exports.start = start;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/first.js?");

/***/ }),

/***/ "./src/js/second.js":
/*!**************************!*\
  !*** ./src/js/second.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const first = __webpack_require__(/*! ./first */ \"./src/js/first.js\");\r\n\r\nvar render = function() {\r\n    localStorage.id = 2;\r\n    while (document.body.firstElementChild)\r\n    {\r\n        document.body.removeChild(document.body.firstElementChild);\r\n    }\r\n    document.body.setAttribute(\"style\", \"background: #02ded3; margin: 0; padding: 0\");\r\n    var name = document.createElement('span');\r\n    name.style.display = \"flex\";\r\n    name.style.justifyContent = \"center\";\r\n    name.style.padding = \"20px\";\r\n    name.style.fontWeight = \"bold\";\r\n    name.style.fontSize = \"30pt\";\r\n    name.style.color = \"#6a2bfc\";\r\n    name.style.fontFamily = \"Brush Script Std, cursive\";\r\n    var abilities = document.createElement('div');\r\n    const header = document.createElement('h1');\r\n    header.style.color = \"#0c013c\";\r\n    header.style.display = \"flex\";\r\n    header.style.justifyContent = \"center\";\r\n    header.style.margin = \"0\";\r\n    header.style.fontFamily = \"Brush Script Std, cursive\";\r\n    header.innerHTML = \"Abilities\";\r\n\r\n    async function getPockemon() {\r\n        let id = Math.floor(Math.random() * (808));\r\n        let url = 'https://pokeapi.co/api/v2/pokemon/' + id.toString() + '/';\r\n        const response = await fetch(url, {method: 'GET'});\r\n        const json = await response.json();\r\n        name.innerHTML = json.name;\r\n        const array = [];\r\n        for (let i = 0; i < json.abilities.length; i++) {\r\n            console.log(i);\r\n            array.push(json.abilities[i]);\r\n            abilityName = json.abilities[i].ability.name;\r\n            abilityURL = json.abilities[i].ability.url;\r\n            var div = document.createElement('div');\r\n            div.style.display = \"flex\";\r\n            div.style.justifyContent = \"center\";\r\n            div.style.flex = \"1\";\r\n            div.style.alignItems = \"center\";\r\n            div.style.flexWrap = \"wrap\";\r\n            div.style.width = \"300px\";\r\n            div.style.border = \"2px solid #6a2bfc\";\r\n            div.style.borderRadius = \"15px\";\r\n            div.style.margin = \"10px auto\";\r\n            div.style.padding = \"5px\";\r\n            var ability = document.createElement('span');\r\n            ability.style.display = \"flex\";\r\n            ability.style.justifyContent = \"center\";\r\n            ability.style.color = \"#6a2bfc\";\r\n            ability.style.margin = '5px';\r\n            ability.style.fontWeight = 'bold';\r\n            ability.style.fontSize = '14pt';\r\n            ability.style.fontFamily = \"Brush Script Std, cursive\";\r\n            var description = document.createElement('p');\r\n            description.style.margin = \"0\";\r\n            description.style.textAlign = \"center\";\r\n            description.style.color = \"#0c013c\";\r\n            description.style.fontFamily = \"Brush Script Std, cursive\";\r\n            ability.innerHTML = abilityName;\r\n            div.appendChild(ability);\r\n            document.body.appendChild(div);\r\n\r\n            async function apiCall(url) {\r\n                const response = await fetch(url, {method: 'GET'});\r\n                const json = await response.json();\r\n                var desr = json.effect_entries[0].effect;\r\n                console.log(desr);\r\n                description.innerHTML = desr;\r\n                div.appendChild(description);\r\n            }\r\n\r\n            await apiCall(abilityURL);\r\n            abilities.appendChild(div);\r\n        }\r\n    }\r\n\r\n    getPockemon();\r\n    document.body.appendChild(name);\r\n    abilities.appendChild(header);\r\n    document.body.appendChild(abilities);\r\n\r\n    var button = document.createElement(\"div\");\r\n    var personalInfoButton = document.createElement(\"button\");\r\n    personalInfoButton.innerHTML = \"Get personal Info\";\r\n    personalInfoButton.style.background = \"none\";\r\n    personalInfoButton.style.border = \"3px solid #0c013c\";\r\n    personalInfoButton.style.fontWeight = \"bold\";\r\n    personalInfoButton.style.cursor = \"pointer\";\r\n    personalInfoButton.style.borderRadius = \"15px\";\r\n    personalInfoButton.style.height = \"50px\";\r\n    personalInfoButton.style.width = \"150px\";\r\n    personalInfoButton.style.color = \"#0c013c\";\r\n    personalInfoButton.style.fontSize = \"12pt\";\r\n    hover = personalInfoButton.addEventListener(\"mouseenter\", function () {\r\n        personalInfoButton.style.transitionDuration = \"0.3s\";\r\n        personalInfoButton.style.backgroundColor = \"#6a2bfc\";\r\n        personalInfoButton.style.border = \"3px solid #6a2bfc\";\r\n        personalInfoButton.style.color = \"white\";\r\n    });\r\n    leave = personalInfoButton.addEventListener(\"mouseleave\", function () {\r\n        personalInfoButton.style.transitionDuration = \"0.3s\";\r\n        personalInfoButton.style.background = \"none\";\r\n        personalInfoButton.style.border = \"3px solid #0c013c\";\r\n        personalInfoButton.style.color = \"#0c013c\";\r\n    });\r\n    button.style.margin = \"30px\";\r\n    button.style.display = \"flex\";\r\n    button.style.justifyContent = \"center\";\r\n    button.appendChild(personalInfoButton);\r\n    document.body.appendChild(button);\r\n\r\n    click = personalInfoButton.addEventListener(\"click\", async function () {\r\n        localStorage.id = 1;\r\n        first.start();\r\n    });\r\n\r\n};\r\n\r\n\r\nmodule.exports.render = render;\r\n\n\n//# sourceURL=webpack:///./src/js/second.js?");

/***/ })

/******/ });
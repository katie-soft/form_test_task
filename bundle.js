/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://employcity_test_task/./src/scss/app.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ \"./src/scss/app.scss\");\n\r\n\r\n//Custom select\r\nconst selectWrapper = document.querySelector('.form__select-wrapper');\r\nconst optionsList = document.querySelector('.custom-select');\r\nconst selectSpan = document.querySelector('#select-value');\r\nconst selectForSubmit = document.querySelector('#select');\r\n\r\nselectWrapper.addEventListener('click', () => {\r\n  selectWrapper.classList.toggle('form__select-wrapper_active');\r\n  optionsList.classList.toggle('custom-select_active');\r\n})\r\n\r\noptionsList.addEventListener('click', (event) => {\r\n  if (event.target.classList.contains('custom-select__option')) {\r\n    selectSpan.innerText = event.target.innerText;\r\n    selectForSubmit.value = event.target.dataset.value;\r\n  }\r\n})\r\n\r\ndocument.addEventListener('click', (event) => {\r\n  if (\r\n    selectWrapper.classList.contains('form__select-wrapper_active') && \r\n    !event.target.parentElement.classList.contains('form__select-wrapper') && \r\n    !event.target.classList.contains('form__select-wrapper')) {\r\n      selectWrapper.classList.remove('form__select-wrapper_active');\r\n      optionsList.classList.remove('custom-select_active');\r\n    }\r\n})\r\n\r\n//Display value of input range\r\nconst rangeValue = document.querySelector('.form__input_type_range');\r\nconst rangeSpan = document.querySelector('#range-value');\r\n\r\nrangeValue.addEventListener('change', () => {\r\n  rangeSpan.innerText = `${rangeValue.value}%`;\r\n})\r\n\r\n//Display name of selected file\r\nconst fileInput = document.querySelector('.form__input_type_file');\r\nconst fileInputLabel = document.querySelector('.form__label_type_file span');\r\n\r\nfileInput.addEventListener('change', () => {\r\n  if (fileInput.value === '') {\r\n    fileInputLabel.innerText = 'Прикрепить файл';\r\n  } else {\r\n    fileInputLabel.innerText = 'Файл добавлен';\r\n  }\r\n  });\r\n\r\n//Burger menu\r\nconst page = document.querySelector('.page');\r\nconst burgerMenuBtn = document.querySelector('.burger-menu__btn');\r\nconst burgerMenu = document.querySelector('.burger-menu');\r\nconst menuContent = document.querySelector('.menu');\r\n\r\nfunction openBurger() {\r\n  burgerMenu.classList.add('burger-menu_opened');\r\n  burgerMenuBtn.classList.add('burger-menu__btn_opened');\r\n  menuContent.classList.add('menu_opened');\r\n  page.classList.add('no-scroll');\r\n}\r\n\r\nfunction closeBurger() {\r\n  burgerMenu.classList.remove('burger-menu_opened');\r\n  burgerMenuBtn.classList.remove('burger-menu__btn_opened');\r\n  menuContent.classList.remove('menu_opened');\r\n  page.classList.remove('no-scroll');\r\n}\r\n\r\nburgerMenuBtn.addEventListener('click', () => {\r\n  if (burgerMenu.classList.contains('burger-menu_opened')) {\r\n    closeBurger();\r\n  } else {\r\n    openBurger();\r\n  }\r\n})\r\n\r\ndocument.addEventListener('click', (event) => {\r\n  if (event.target !== burgerMenuBtn && event.target.parentElement !== burgerMenuBtn && burgerMenu.classList.contains('burger-menu_opened')) {\r\n    closeBurger();\r\n  }\r\n})\n\n//# sourceURL=webpack://employcity_test_task/./src/index.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
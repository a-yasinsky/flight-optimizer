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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template */ \"./src/template.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags */ \"./src/tags.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst store = new _store__WEBPACK_IMPORTED_MODULE_3__.default();\r\nconst template = new _template__WEBPACK_IMPORTED_MODULE_2__.default();\r\nconst view = new _view__WEBPACK_IMPORTED_MODULE_4__.default(template);\r\nconst tags = new _tags__WEBPACK_IMPORTED_MODULE_5__.default();\r\n\r\nconst controller = new _controller__WEBPACK_IMPORTED_MODULE_0__.default(store, view, tags);\r\n\r\nconst setView = () => controller.setView();\r\n(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.$on)(window, 'load', setView);\r\n\n\n//# sourceURL=webpack://flight-optimizer-front/./src/app.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Controller)\n/* harmony export */ });\nclass Controller {\r\n  constructor(store, view, tags) {\r\n    this.store = store;\r\n    this.view = view;\r\n    this.tags = tags;\r\n\r\n    view.bindChangeFlightFrom(this.changeFlightFrom.bind(this));\r\n    view.bindChangeFlightsTo(this.changeFlightsTo.bind(this));\r\n    view.bindFormSubmit(this.formSubmit.bind(this));\r\n  }\r\n\r\n  setView() {\r\n    this.view.bindTags(this.tags);\r\n  }\r\n\r\n  changeFlightFrom(flightFrom) {\r\n    this.store.updateFlightFrom(flightFrom, () => {\r\n      console.log(this.store.flightFrom);\r\n    });\r\n  }\r\n\r\n  changeFlightsTo() {\r\n    let flightsTo = this.tags.getSelectedValues();\r\n    this.store.updateFlightsTo(flightsTo, () => {\r\n      console.log(this.store.flightsTo);\r\n    });\r\n  }\r\n\r\n  formSubmit() {\r\n    console.log('submit form');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://flight-optimizer-front/./src/controller.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$on\": () => (/* binding */ $on),\n/* harmony export */   \"qs\": () => (/* binding */ qs)\n/* harmony export */ });\n/**\r\n * addEventListener wrapper\r\n *\r\n * @param {Element|Window} target Target Element\r\n * @param {string} type Event name to bind to\r\n * @param {Function} callback Event callback\r\n * @param {boolean} [capture] Capture the event\r\n */\r\nfunction $on(target, type, callback, capture) {\r\n\ttarget.addEventListener(type, callback, !!capture);\r\n}\r\n\r\n/**\r\n * querySelector wrapper\r\n *\r\n * @param {string} selector Selector to query\r\n * @param {Element} [scope] Optional scope element for the selector\r\n */\r\nfunction qs(selector, scope) {\r\n\treturn (scope || document).querySelector(selector);\r\n}\r\n\n\n//# sourceURL=webpack://flight-optimizer-front/./src/helpers.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\nclass Store {\r\n    constructor() {\r\n      this.flightFrom = \"\";\r\n      this.flightsTo = [];\r\n    }\r\n\r\n    getFlightFrom() {\r\n      return this.flightFrom;\r\n    }\r\n\r\n    getFlightsTo() {\r\n      return this.flightsTo;\r\n    }\r\n\r\n    updateFlightFrom(flightFrom, callback) {\r\n      this.flightFrom = flightFrom;\r\n      if (callback) {\r\n        callback();\r\n      }\r\n    }\r\n\r\n    updateFlightsTo(flightsTo, callback) {\r\n      this.flightsTo = flightsTo;\r\n      if (callback) {\r\n        callback();\r\n      }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://flight-optimizer-front/./src/store.js?");

/***/ }),

/***/ "./src/tags.js":
/*!*********************!*\
  !*** ./src/tags.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Bootstrap 5 tags\r\n *\r\n * Turns your select[multiple] into nice tags lists\r\n *\r\n * Required Bootstrap 5 styles:\r\n * - badge\r\n * - background-color utility\r\n * - margin-end utility\r\n * - forms\r\n * - dropdown\r\n */\r\n\r\nconst ACTIVE_CLASS = \"bg-light\";\r\nconst VALUE_ATTRIBUTE = \"data-value\";\r\n\r\nclass Tags {\r\n\r\n  constructor() {\r\n\r\n  }\r\n  /**\r\n   * @param {HTMLSelectElement} selectElement\r\n   */\r\n  init(selectElement) {\r\n    this.selectElement = selectElement;\r\n    this.selectElement.style.display = \"none\";\r\n    this.placeholder = this.getPlaceholder();\r\n    this.allowNew = selectElement.dataset.allowNew ? true : false;\r\n\r\n    // Create elements\r\n    this.holderElement = document.createElement(\"div\");\r\n    this.containerElement = document.createElement(\"div\");\r\n    this.dropElement = document.createElement(\"ul\");\r\n    this.searchInput = document.createElement(\"input\");\r\n\r\n    this.holderElement.appendChild(this.containerElement);\r\n    this.containerElement.appendChild(this.searchInput);\r\n    this.holderElement.appendChild(this.dropElement);\r\n    // insert after\r\n    this.selectElement.parentNode.insertBefore(this.holderElement, this.selectElement.nextSibling);\r\n\r\n    // Configure them\r\n    this.configureSearchInput();\r\n    this.configureHolderElement();\r\n    this.configureDropElement();\r\n    this.configureContainerElement();\r\n    this.buildSuggestions();\r\n  }\r\n\r\n  /**\r\n   * Attach to all elements matched by the selector\r\n   * @param {string} selector\r\n   */\r\n  static initDefault(selector = \"select[multiple]\") {\r\n    let list = document.querySelectorAll(selector);\r\n    for (let i = 0; i < list.length; i++) {\r\n      let el = list[i];\r\n      let inst = new Tags(el);\r\n    }\r\n  }\r\n\r\n  /**\r\n   * @returns {string}\r\n   */\r\n  getPlaceholder() {\r\n    let firstOption = this.selectElement.querySelector(\"option\");\r\n    if (!firstOption) {\r\n      return;\r\n    }\r\n    if (!firstOption.value) {\r\n      let placeholder = firstOption.innerText;\r\n      firstOption.remove();\r\n      return placeholder;\r\n    }\r\n    if (this.selectElement.getAttribute(\"placeholder\")) {\r\n      return this.selectElement.getAttribute(\"placeholder\");\r\n    }\r\n    if (this.selectElement.getAttribute(\"data-placeholder\")) {\r\n      return this.selectElement.getAttribute(\"data-placeholder\");\r\n    }\r\n    return \"\";\r\n  }\r\n\r\n  configureDropElement() {\r\n    this.dropElement.classList.add(\"dropdown-menu\");\r\n  }\r\n\r\n  configureHolderElement() {\r\n    this.holderElement.classList.add(\"form-control\");\r\n    this.holderElement.classList.add(\"dropdown\");\r\n  }\r\n\r\n  configureContainerElement() {\r\n    this.containerElement.addEventListener(\"click\", (event) => {\r\n      this.searchInput.focus();\r\n    });\r\n\r\n    // add initial values\r\n    let initialValues = this.selectElement.querySelectorAll(\"option[selected]\");\r\n    for (let j = 0; j < initialValues.length; j++) {\r\n      let initialValue = initialValues[j];\r\n      if (!initialValue.value) {\r\n        continue;\r\n      }\r\n      this.addItem(initialValue.innerText, initialValue.value);\r\n    }\r\n  }\r\n\r\n  configureSearchInput() {\r\n    this.searchInput.type = \"text\";\r\n    this.searchInput.autocomplete = false;\r\n    this.searchInput.style.border = 0;\r\n    this.searchInput.style.outline = 0;\r\n    this.searchInput.style.maxWidth = \"100%\";\r\n\r\n    this.adjustWidth();\r\n\r\n    this.searchInput.addEventListener(\"input\", (event) => {\r\n      this.adjustWidth();\r\n      if (this.searchInput.value.length >= 1) {\r\n        this.showSuggestions();\r\n      } else {\r\n        this.hideSuggestions();\r\n      }\r\n    });\r\n    // keypress doesn't send arrow keys\r\n    this.searchInput.addEventListener(\"keydown\", (event) => {\r\n      if (event.code == \"Enter\" || event.code == \"NumpadEnter\") {\r\n        let selection = this.getActiveSelection();\r\n        if (selection) {\r\n          this.addItem(selection.innerText, selection.getAttribute(VALUE_ATTRIBUTE));\r\n          this.resetSearchInput();\r\n          this.hideSuggestions();\r\n          this.removeActiveSelection();\r\n        } else {\r\n          // We use what is typed\r\n          if (this.allowNew) {\r\n            this.addItem(this.searchInput.value);\r\n            this.resetSearchInput();\r\n            this.hideSuggestions();\r\n          }\r\n        }\r\n        event.preventDefault();\r\n        return;\r\n      }\r\n      if (event.code == \"ArrowUp\") {\r\n        this.moveSelectionUp();\r\n      }\r\n      if (event.code == \"ArrowDown\") {\r\n        this.moveSelectionDown();\r\n      }\r\n      if (event.code == \"Backspace\") {\r\n        if (this.searchInput.value.length == 0) {\r\n          this.removeLastItem();\r\n          this.adjustWidth();\r\n        }\r\n      }\r\n    });\r\n  }\r\n\r\n  moveSelectionUp() {\r\n    let active = this.getActiveSelection();\r\n    if (active) {\r\n      let prev = active.parentNode;\r\n      do {\r\n        prev = prev.previousSibling;\r\n      } while (prev && prev.style.display == \"none\");\r\n      if (!prev) {\r\n        return;\r\n      }\r\n      active.classList.remove(ACTIVE_CLASS);\r\n      prev.querySelector(\"a\").classList.add(ACTIVE_CLASS);\r\n    }\r\n  }\r\n\r\n  moveSelectionDown() {\r\n    let active = this.getActiveSelection();\r\n    if (active) {\r\n      let next = active.parentNode;\r\n      do {\r\n        next = next.nextSibling;\r\n      } while (next && next.style.display == \"none\");\r\n      if (!next) {\r\n        return;\r\n      }\r\n      active.classList.remove(ACTIVE_CLASS);\r\n      next.querySelector(\"a\").classList.add(ACTIVE_CLASS);\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Adjust the field to fit its content\r\n   */\r\n  adjustWidth() {\r\n    if (this.searchInput.value) {\r\n      this.searchInput.size = this.searchInput.value.length + 1;\r\n    } else {\r\n      // Show the placeholder only if empty\r\n      if (this.getSelectedValues().length) {\r\n        this.searchInput.placeholder = \"\";\r\n        this.searchInput.size = 1;\r\n      } else {\r\n        this.searchInput.size = this.placeholder.length;\r\n        this.searchInput.placeholder = this.placeholder;\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Add suggestions from element\r\n   */\r\n  buildSuggestions() {\r\n    let options = this.selectElement.querySelectorAll(\"option\");\r\n    for (let i = 0; i < options.length; i++) {\r\n      let opt = options[i];\r\n      if (!opt.getAttribute(\"value\")) {\r\n        continue;\r\n      }\r\n      let newChild = document.createElement(\"li\");\r\n      let newChildLink = document.createElement(\"a\");\r\n      newChild.append(newChildLink);\r\n      newChildLink.classList.add(\"dropdown-item\");\r\n      newChildLink.setAttribute(VALUE_ATTRIBUTE, opt.getAttribute(\"value\"));\r\n      newChildLink.setAttribute(\"href\", \"#\");\r\n      newChildLink.innerText = opt.innerText;\r\n      this.dropElement.appendChild(newChild);\r\n\r\n      // Hover sets active item\r\n      newChildLink.addEventListener(\"mouseenter\", (event) => {\r\n        this.removeActiveSelection();\r\n        newChild.querySelector(\"a\").classList.add(ACTIVE_CLASS);\r\n      });\r\n\r\n      newChildLink.addEventListener(\"click\", (event) => {\r\n        event.preventDefault();\r\n        this.addItem(newChildLink.innerText, newChildLink.getAttribute(VALUE_ATTRIBUTE));\r\n        this.resetSearchInput();\r\n        this.hideSuggestions();\r\n      });\r\n    }\r\n  }\r\n\r\n  resetSearchInput() {\r\n    this.searchInput.value = \"\";\r\n    this.adjustWidth();\r\n  }\r\n\r\n  /**\r\n   * @returns {array}\r\n   */\r\n  getSelectedValues() {\r\n    let selected = this.selectElement.querySelectorAll(\"option:checked\");\r\n    return Array.from(selected).map((el) => el.value);\r\n  }\r\n\r\n  /**\r\n   * The element create with buildSuggestions\r\n   */\r\n  showSuggestions() {\r\n    if (!this.dropElement.classList.contains(\"show\")) {\r\n      this.dropElement.classList.add(\"show\");\r\n    }\r\n\r\n    // Position next to search input\r\n    this.dropElement.style.left = this.searchInput.offsetLeft + \"px\";\r\n\r\n    // Get search value\r\n    let search = this.searchInput.value.toLocaleLowerCase();\r\n\r\n    // Get current values\r\n    let values = this.getSelectedValues();\r\n\r\n    // Filter the list according to search string\r\n    let list = this.dropElement.querySelectorAll(\"li\");\r\n    let found = false;\r\n    let firstItem = null;\r\n    for (let i = 0; i < list.length; i++) {\r\n      let item = list[i];\r\n      let text = item.innerText.toLocaleLowerCase();\r\n      let link = item.querySelector(\"a\");\r\n\r\n      // Remove previous selection\r\n      link.classList.remove(ACTIVE_CLASS);\r\n\r\n      // Hide selected values\r\n      if (values.indexOf(link.getAttribute(VALUE_ATTRIBUTE)) != -1) {\r\n        item.style.display = \"none\";\r\n        continue;\r\n      }\r\n\r\n      if (text.indexOf(search) !== -1) {\r\n        item.style.display = \"list-item\";\r\n        found = true;\r\n        if (!firstItem) {\r\n          firstItem = item;\r\n        }\r\n      } else {\r\n        item.style.display = \"none\";\r\n      }\r\n    }\r\n\r\n    // Special case if nothing matches\r\n    if (!found) {\r\n      this.dropElement.classList.remove(\"show\");\r\n    }\r\n\r\n    // Always select first item\r\n    if (firstItem) {\r\n      if (this.holderElement.classList.contains(\"is-invalid\")) {\r\n        this.holderElement.classList.remove(\"is-invalid\");\r\n      }\r\n      firstItem.querySelector(\"a\").classList.add(ACTIVE_CLASS);\r\n    } else {\r\n      // No item and we don't allow new items => error\r\n      if (!this.allowNew) {\r\n        this.holderElement.classList.add(\"is-invalid\");\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * The element create with buildSuggestions\r\n   */\r\n  hideSuggestions(dropEl) {\r\n    if (this.dropElement.classList.contains(\"show\")) {\r\n      this.dropElement.classList.remove(\"show\");\r\n    }\r\n    if (this.holderElement.classList.contains(\"is-invalid\")) {\r\n      this.holderElement.classList.remove(\"is-invalid\");\r\n    }\r\n  }\r\n\r\n  /**\r\n   * @returns {HTMLElement}\r\n   */\r\n  getActiveSelection() {\r\n    return this.dropElement.querySelector(\"a.\" + ACTIVE_CLASS);\r\n  }\r\n\r\n  removeActiveSelection() {\r\n    let selection = this.getActiveSelection();\r\n    if (selection) {\r\n      selection.classList.remove(ACTIVE_CLASS);\r\n    }\r\n  }\r\n\r\n  removeLastItem() {\r\n    let items = this.containerElement.querySelectorAll(\"span\");\r\n    if (!items.length) {\r\n      return;\r\n    }\r\n    let lastItem = items[items.length - 1];\r\n    this.removeItem(lastItem.getAttribute(VALUE_ATTRIBUTE));\r\n  }\r\n\r\n  /**\r\n   * @param {string} text\r\n   * @param {string} value\r\n   */\r\n  addItem(text, value) {\r\n    if (!value) {\r\n      value = text;\r\n    }\r\n    let span = document.createElement(\"span\");\r\n    span.classList.add(\"badge\");\r\n    span.classList.add(\"bg-primary\");\r\n    span.classList.add(\"me-2\");\r\n    span.setAttribute(VALUE_ATTRIBUTE, value);\r\n    span.innerText = text;\r\n    this.containerElement.insertBefore(span, this.searchInput);\r\n\r\n    // update select\r\n    let opt = this.selectElement.querySelector('option[value=\"' + value + '\"]');\r\n    if (opt) {\r\n      opt.setAttribute(\"selected\", \"selected\");\r\n    } else {\r\n      // we need to create a new option\r\n      opt = document.createElement(\"option\");\r\n      opt.value = value;\r\n      opt.innerText = text;\r\n      opt.setAttribute(\"selected\", \"selected\");\r\n      this.selectElement.appendChild(opt);\r\n    }\r\n    this.selectElement.dispatchEvent(new Event('change'));\r\n  }\r\n\r\n  /**\r\n   * @param {string} value\r\n   */\r\n  removeItem(value) {\r\n    let item = this.containerElement.querySelector(\"span[\" + VALUE_ATTRIBUTE + '=\"' + value + '\"]');\r\n    if (!item) {\r\n      return;\r\n    }\r\n    item.remove();\r\n\r\n    // update select\r\n    let opt = this.selectElement.querySelector('option[value=\"' + value + '\"]');\r\n    if (opt) {\r\n      opt.removeAttribute(\"selected\");\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tags);\r\n\n\n//# sourceURL=webpack://flight-optimizer-front/./src/tags.js?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Template)\n/* harmony export */ });\nclass Template {\r\n\r\n}\r\n\n\n//# sourceURL=webpack://flight-optimizer-front/./src/template.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ View)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\r\n\r\nclass View {\r\n  constructor(template) {\r\n    this.template = template;\r\n    this.$flightFrom = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qs)('.flightfrom');\r\n    this.$flightsTo = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qs)('.flightsto');\r\n    this.$form = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.qs)('.flight-optimizer-form');\r\n  }\r\n\r\n  bindTags(tags) {\r\n    tags.init(this.$flightsTo);\r\n  }\r\n\r\n  bindChangeFlightFrom(handler) {\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.$on)(this.$flightFrom, 'change', ({target}) => {\r\n\t\t\tconst flightFrom = target.value.trim();\r\n\t\t\tif (flightFrom) {\r\n\t\t\t\thandler(flightFrom);\r\n\t\t\t}\r\n\t\t});\r\n  }\r\n\r\n  bindChangeFlightsTo(handler) {\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.$on)(this.$flightsTo, 'change', () => {\r\n\t\t\t  handler();\r\n\t\t});\r\n  }\r\n\r\n  bindFormSubmit(handler) {\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.$on)(this.$form, 'submit', (event) => {\r\n        event.preventDefault();\r\n\t\t\t  handler();\r\n\t\t});\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://flight-optimizer-front/./src/view.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Edit__ = __webpack_require__(/*! ./Edit */ 4);\n/**\n * BLOCK: products\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n\n// const { withSelect } = wp.data;\n// const { InspectorControls } = wp.blockEditor;\n// const { Placeholder, PanelBody, RangeControl } = wp.components;\n\nregisterBlockType('cgb/block-products', {\n\ttitle: __('Produkty'),\n\ticon: 'products',\n\tcategory: 'common',\n\tkeywords: [__('Products'), __('CGB Example'), __('create-guten-block')],\n\n\tattributes: {\n\t\ttermId: {\n\t\t\ttype: 'number',\n\t\t\tdefault: 0\n\t\t},\n\t\tnumSlides: {\n\t\t\ttype: 'number',\n\t\t\tdefault: 1\n\t\t}\n\t},\n\n\t// edit: (select, props ) => {\n\t// \tconst { attributes, setAttributes } = props;\n\t// \tconst { numberOfPosts } = attributes;\n\t// \tlet query = {per_page: numberOfPosts};\n\n\t// \twithSelect({\n\t// \t\tposts: select('core').getEntityRecords('postType', 'products', query)\n\t// \t})\n\n\t// \treturn ( \n\t// \t\t{console.log(this.props)},\n\t// \t\t<div className={props.className}>\n\t// \t\t<InspectorControls>\n\t// \t\t\t<PanelBody\n\t// \t\t\t\ttitle={__('Slider Ustawienia')}\n\t// \t\t\t\tinitialOpen={true}\n\t// \t\t\t>\n\t// \t\t\t\t<RangeControl\n\t// \t\t\t\t\tlabel={__('Ilosc slajdów')}\n\t// \t\t\t\t\tvalue={attributes.numSlides}\n\t// \t\t\t\t\tonChange={(val) => setAttributes({ numSlides: val })}\n\t// \t\t\t\t\tmin={1}\n\t// \t\t\t\t\tmax={5}\n\t// \t\t\t\t/>\n\t// \t\t\t</PanelBody>\n\t// \t\t</InspectorControls>\n\n\t// \t\t<Placeholder\n\t// \t\t\tlabel={__('Slider z produktami')}\n\t// \t\t>\n\t// \t\t\tTrwa ładowanie produktów\n\t// \t\t</Placeholder>\n\t// \t</div>\n\n\t// \t)\n\t// },\n\tsave: function save() {\n\t\treturn null;\n\t},\n\tedit: __WEBPACK_IMPORTED_MODULE_2__Edit__[\"a\" /* default */]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHByb2R1Y3RzXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxuaW1wb3J0IEVkaXQgZnJvbSAnLi9FZGl0Jztcbi8vIGNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcbi8vIGNvbnN0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xuLy8gY29uc3QgeyBQbGFjZWhvbGRlciwgUGFuZWxCb2R5LCBSYW5nZUNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2stcHJvZHVjdHMnLCB7XG5cdHRpdGxlOiBfXygnUHJvZHVrdHknKSxcblx0aWNvbjogJ3Byb2R1Y3RzJyxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRrZXl3b3JkczogW19fKCdQcm9kdWN0cycpLCBfXygnQ0dCIEV4YW1wbGUnKSwgX18oJ2NyZWF0ZS1ndXRlbi1ibG9jaycpXSxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGVybUlkOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDBcblx0XHR9LFxuXHRcdG51bVNsaWRlczoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxXG5cdFx0fVxuXHR9LFxuXG5cdC8vIGVkaXQ6IChzZWxlY3QsIHByb3BzICkgPT4ge1xuXHQvLyBcdGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG5cdC8vIFx0Y29uc3QgeyBudW1iZXJPZlBvc3RzIH0gPSBhdHRyaWJ1dGVzO1xuXHQvLyBcdGxldCBxdWVyeSA9IHtwZXJfcGFnZTogbnVtYmVyT2ZQb3N0c307XG5cblx0Ly8gXHR3aXRoU2VsZWN0KHtcblx0Ly8gXHRcdHBvc3RzOiBzZWxlY3QoJ2NvcmUnKS5nZXRFbnRpdHlSZWNvcmRzKCdwb3N0VHlwZScsICdwcm9kdWN0cycsIHF1ZXJ5KVxuXHQvLyBcdH0pXG5cblx0Ly8gXHRyZXR1cm4gKCBcblx0Ly8gXHRcdHtjb25zb2xlLmxvZyh0aGlzLnByb3BzKX0sXG5cdC8vIFx0XHQ8ZGl2IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT5cblx0Ly8gXHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0Ly8gXHRcdFx0PFBhbmVsQm9keVxuXHQvLyBcdFx0XHRcdHRpdGxlPXtfXygnU2xpZGVyIFVzdGF3aWVuaWEnKX1cblx0Ly8gXHRcdFx0XHRpbml0aWFsT3Blbj17dHJ1ZX1cblx0Ly8gXHRcdFx0PlxuXHQvLyBcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0Ly8gXHRcdFx0XHRcdGxhYmVsPXtfXygnSWxvc2Mgc2xhamTDs3cnKX1cblx0Ly8gXHRcdFx0XHRcdHZhbHVlPXthdHRyaWJ1dGVzLm51bVNsaWRlc31cblx0Ly8gXHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsKSA9PiBzZXRBdHRyaWJ1dGVzKHsgbnVtU2xpZGVzOiB2YWwgfSl9XG5cdC8vIFx0XHRcdFx0XHRtaW49ezF9XG5cdC8vIFx0XHRcdFx0XHRtYXg9ezV9XG5cdC8vIFx0XHRcdFx0Lz5cblx0Ly8gXHRcdFx0PC9QYW5lbEJvZHk+XG5cdC8vIFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXG5cdC8vIFx0XHQ8UGxhY2Vob2xkZXJcblx0Ly8gXHRcdFx0bGFiZWw9e19fKCdTbGlkZXIgeiBwcm9kdWt0YW1pJyl9XG5cdC8vIFx0XHQ+XG5cdC8vIFx0XHRcdFRyd2EgxYJhZG93YW5pZSBwcm9kdWt0w7N3XG5cdC8vIFx0XHQ8L1BsYWNlaG9sZGVyPlxuXHQvLyBcdDwvZGl2PlxuXG5cdC8vIFx0KVxuXHQvLyB9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXHRlZGl0OiBFZGl0XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***************************!*\
  !*** ./src/block/Edit.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_element__ = __webpack_require__(/*! @wordpress/element */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_element__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_data__ = __webpack_require__(/*! @wordpress/data */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_data__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar __ = wp.i18n.__;\n\nvar LatestProducts = function (_Component) {\n    _inherits(LatestProducts, _Component);\n\n    function LatestProducts() {\n        _classCallCheck(this, LatestProducts);\n\n        return _possibleConstructorReturn(this, (LatestProducts.__proto__ || Object.getPrototypeOf(LatestProducts)).apply(this, arguments));\n    }\n\n    _createClass(LatestProducts, [{\n        key: 'render',\n        value: function render() {\n            var _props = this.props,\n                posts = _props.posts,\n                className = _props.className;\n\n            return wp.element.createElement(\n                'div',\n                { className: className },\n                console.log(this.props),\n                posts && posts.length > 0 ? wp.element.createElement(\n                    'ul',\n                    { className: 'products-list' },\n                    posts.map(function (post) {\n                        return wp.element.createElement(\n                            'li',\n                            { className: 'products-list__item', key: post.id },\n                            wp.element.createElement('img', { src: post.fimg_url }),\n                            wp.element.createElement(\n                                'a',\n                                { target: '_blank', href: post.link },\n                                post.title.rendered,\n                                wp.element.createElement(\n                                    'span',\n                                    null,\n                                    wp.element.createElement(\n                                        'svg',\n                                        { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },\n                                        wp.element.createElement('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d: 'M11.0303 17.0303L16.0607 11.9999L11.0303 6.96961L9.96968 8.03027L13.9394 11.9999L9.96968 15.9696L11.0303 17.0303Z', fill: 'currentColor' })\n                                    )\n                                )\n                            )\n                        );\n                    })\n                ) : wp.element.createElement(\n                    'div',\n                    null,\n                    ' ',\n                    posts ? __('Nieznaleziono produktów, dodaj jakiś w sekcji Produkty') : __('Loading...')\n                )\n            );\n        }\n    }]);\n\n    return LatestProducts;\n}(__WEBPACK_IMPORTED_MODULE_0__wordpress_element__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Object(__WEBPACK_IMPORTED_MODULE_1__wordpress_data__[\"withSelect\"])(function (select, props) {\n    var attributes = props.attributes;\n    var numberOfPosts = attributes.numberOfPosts;\n\n    var query = { per_page: numberOfPosts };\n    return {\n        posts: select('core').getEntityRecords('postType', 'products')\n    };\n})(LatestProducts));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9FZGl0LmpzP2UwMDUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnO1xuaW1wb3J0IHsgd2l0aFNlbGVjdCB9IGZyb20gJ0B3b3JkcHJlc3MvZGF0YSc7XG52YXIgX18gPSB3cC5pMThuLl9fO1xuXG52YXIgTGF0ZXN0UHJvZHVjdHMgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhMYXRlc3RQcm9kdWN0cywgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBMYXRlc3RQcm9kdWN0cygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExhdGVzdFByb2R1Y3RzKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKExhdGVzdFByb2R1Y3RzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTGF0ZXN0UHJvZHVjdHMpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTGF0ZXN0UHJvZHVjdHMsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBwb3N0cyA9IF9wcm9wcy5wb3N0cyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuXG4gICAgICAgICAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKSxcbiAgICAgICAgICAgICAgICBwb3N0cyAmJiBwb3N0cy5sZW5ndGggPiAwID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAndWwnLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3Byb2R1Y3RzLWxpc3QnIH0sXG4gICAgICAgICAgICAgICAgICAgIHBvc3RzLm1hcChmdW5jdGlvbiAocG9zdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAncHJvZHVjdHMtbGlzdF9faXRlbScsIGtleTogcG9zdC5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IHBvc3QuZmltZ191cmwgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGFyZ2V0OiAnX2JsYW5rJywgaHJlZjogcG9zdC5saW5rIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QudGl0bGUucmVuZGVyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N2ZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB2aWV3Qm94OiAnMCAwIDI0IDI0JywgZmlsbDogJ25vbmUnLCB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgJ2ZpbGwtcnVsZSc6ICdldmVub2RkJywgJ2NsaXAtcnVsZSc6ICdldmVub2RkJywgZDogJ00xMS4wMzAzIDE3LjAzMDNMMTYuMDYwNyAxMS45OTk5TDExLjAzMDMgNi45Njk2MUw5Ljk2OTY4IDguMDMwMjdMMTMuOTM5NCAxMS45OTk5TDkuOTY5NjggMTUuOTY5NkwxMS4wMzAzIDE3LjAzMDNaJywgZmlsbDogJ2N1cnJlbnRDb2xvcicgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKSA6IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICcgJyxcbiAgICAgICAgICAgICAgICAgICAgcG9zdHMgPyBfXygnTmllem5hbGV6aW9ubyBwcm9kdWt0w7N3LCBkb2RhaiBqYWtpxZsgdyBzZWtjamkgUHJvZHVrdHknKSA6IF9fKCdMb2FkaW5nLi4uJylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIExhdGVzdFByb2R1Y3RzO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VsZWN0KGZ1bmN0aW9uIChzZWxlY3QsIHByb3BzKSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzO1xuICAgIHZhciBudW1iZXJPZlBvc3RzID0gYXR0cmlidXRlcy5udW1iZXJPZlBvc3RzO1xuXG4gICAgdmFyIHF1ZXJ5ID0geyBwZXJfcGFnZTogbnVtYmVyT2ZQb3N0cyB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHBvc3RzOiBzZWxlY3QoJ2NvcmUnKS5nZXRFbnRpdHlSZWNvcmRzKCdwb3N0VHlwZScsICdwcm9kdWN0cycpXG4gICAgfTtcbn0pKExhdGVzdFByb2R1Y3RzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9FZGl0LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*****************************!*\
  !*** external "wp.element" ***!
  \*****************************/
/*! dynamic exports provided */
/*! exports used: Component */
/***/ (function(module, exports) {

module.exports = wp.element;

/***/ }),
/* 6 */
/*!**************************!*\
  !*** external "wp.data" ***!
  \**************************/
/*! dynamic exports provided */
/*! exports used: withSelect */
/***/ (function(module, exports) {

module.exports = wp.data;

/***/ })
/******/ ]);
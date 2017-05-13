(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core"], factory);
	else if(typeof exports === 'object')
		exports["ngx-electron"] = factory(require("@angular/core"));
	else
		root["ngx-electron"] = factory(root["@angular/core"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronService; });
var ElectronService = (function () {
    function ElectronService() {
    }
    Object.defineProperty(ElectronService, "runningInElectron", {
        get: function () {
            return !!window.navigator.userAgent.match(/Electron/);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "electron", {
        get: function () {
            if (!this._electron) {
                this._electron = window.require ? window.require('electron') : null;
            }
            return this._electron;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "desktopCapturer", {
        get: function () {
            return this.electron ? this.electron.desktopCapturer : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "ipcRenderer", {
        get: function () {
            return this.electron ? this.electron.ipcRenderer : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "remote", {
        get: function () {
            return this.electron ? this.electron.remote : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "webFrame", {
        get: function () {
            return this.electron ? this.electron.webFrame : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "clipboard", {
        get: function () {
            return this.electron ? this.electron.clipboard : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "crashReporter", {
        get: function () {
            return this.electron ? this.electron.crashReporter : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "process", {
        get: function () {
            return this.remote ? this.remote.process : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "nativeImage", {
        get: function () {
            return this.electron ? this.electron.nativeImage : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "screen", {
        get: function () {
            return this.electron ? this.electron.screen : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElectronService.prototype, "shell", {
        get: function () {
            return this.electron ? this.electron.shell : null;
        },
        enumerable: true,
        configurable: true
    });
    return ElectronService;
}());


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__electronService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronServiceRef; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElectronServiceRef = (function (_super) {
    __extends(ElectronServiceRef, _super);
    function ElectronServiceRef() {
        _super.call(this);
    }
    ElectronServiceRef = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ElectronServiceRef);
    return ElectronServiceRef;
}(__WEBPACK_IMPORTED_MODULE_0__electronService__["a" /* ElectronService */]));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_electronService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_electronServiceRef__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ElectronService", function() { return __WEBPACK_IMPORTED_MODULE_1__src_electronService__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ElectronServiceRef", function() { return __WEBPACK_IMPORTED_MODULE_2__src_electronServiceRef__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxElectronModule", function() { return NgxElectronModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NgxElectronModule = (function () {
    function NgxElectronModule() {
    }
    NgxElectronModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            exports: [],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__src_electronService__["a" /* ElectronService */], useClass: __WEBPACK_IMPORTED_MODULE_2__src_electronServiceRef__["a" /* ElectronServiceRef */] }]
        }), 
        __metadata('design:paramtypes', [])
    ], NgxElectronModule);
    return NgxElectronModule;
}());


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3ZmU1MmI0Nzg1YTBjODRhOWNiMSIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlY3Ryb25TZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbGVjdHJvblNlcnZpY2VSZWYudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDNURBO0lBQUE7SUFzREEsQ0FBQztJQXBERyxzQkFBa0Isb0NBQWlCO2FBQW5DO1lBQ0ksTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUQsQ0FBQzs7O09BQUE7SUFJRCxzQkFBWSxxQ0FBUTthQUFwQjtZQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMs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bnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9jb3JlXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5neC1lbGVjdHJvblwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5neC1lbGVjdHJvblwiXSA9IGZhY3Rvcnkocm9vdFtcIkBhbmd1bGFyL2NvcmVcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdmZTUyYjQ3ODVhMGM4NGE5Y2IxIiwiaW1wb3J0IHtFbGVjdHJvbldpbmRvd30gZnJvbSAnLi4vdHlwaW5ncy9pbmRleCc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBFbGVjdHJvbldpbmRvdztcblxuZXhwb3J0IGNsYXNzIEVsZWN0cm9uU2VydmljZSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBydW5uaW5nSW5FbGVjdHJvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VsZWN0cm9uLyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZWxlY3Ryb246IEVsZWN0cm9uLkVsZWN0cm9uTWFpbkFuZFJlbmRlcmVyO1xuXG4gICAgcHJpdmF0ZSBnZXQgZWxlY3Ryb24oKTogRWxlY3Ryb24uRWxlY3Ryb25NYWluQW5kUmVuZGVyZXIge1xuICAgICAgICBpZiAoIXRoaXMuX2VsZWN0cm9uKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVjdHJvbiA9IHdpbmRvdy5yZXF1aXJlID8gd2luZG93LnJlcXVpcmUoJ2VsZWN0cm9uJykgOiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVjdHJvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRlc2t0b3BDYXB0dXJlcigpOiBFbGVjdHJvbi5EZXNrdG9wQ2FwdHVyZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVjdHJvbiA/IHRoaXMuZWxlY3Ryb24uZGVza3RvcENhcHR1cmVyIDogbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlwY1JlbmRlcmVyKCk6IEVsZWN0cm9uLklwY1JlbmRlcmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlY3Ryb24gPyB0aGlzLmVsZWN0cm9uLmlwY1JlbmRlcmVyIDogbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHJlbW90ZSgpOiBFbGVjdHJvbi5SZW1vdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVjdHJvbiA/IHRoaXMuZWxlY3Ryb24ucmVtb3RlIDogbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHdlYkZyYW1lKCk6IEVsZWN0cm9uLldlYkZyYW1lIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlY3Ryb24gPyB0aGlzLmVsZWN0cm9uLndlYkZyYW1lIDogbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNsaXBib2FyZCgpOiBFbGVjdHJvbi5DbGlwYm9hcmQge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVjdHJvbiA/IHRoaXMuZWxlY3Ryb24uY2xpcGJvYXJkIDogbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNyYXNoUmVwb3J0ZXIoKTogRWxlY3Ryb24uQ3Jhc2hSZXBvcnRlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZWN0cm9uID8gdGhpcy5lbGVjdHJvbi5jcmFzaFJlcG9ydGVyIDogbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHByb2Nlc3MoKTogTm9kZUpTLlByb2Nlc3Mge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGUgPyB0aGlzLnJlbW90ZS5wcm9jZXNzIDogbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG5hdGl2ZUltYWdlKCk6IHR5cGVvZiBFbGVjdHJvbi5OYXRpdmVJbWFnZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZWN0cm9uPyB0aGlzLmVsZWN0cm9uLm5hdGl2ZUltYWdlIDogbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNjcmVlbigpOiBFbGVjdHJvbi5TY3JlZW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVjdHJvbiA/IHRoaXMuZWxlY3Ryb24uc2NyZWVuIDogbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNoZWxsKCk6IEVsZWN0cm9uLlNoZWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlY3Ryb24gPyB0aGlzLmVsZWN0cm9uLnNoZWxsIDogbnVsbDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvZWxlY3Ryb25TZXJ2aWNlLnRzIiwiaW1wb3J0IHtFbGVjdHJvblNlcnZpY2V9IGZyb20gJy4vZWxlY3Ryb25TZXJ2aWNlJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbGVjdHJvblNlcnZpY2VSZWYgZXh0ZW5kcyBFbGVjdHJvblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2VsZWN0cm9uU2VydmljZVJlZi50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0VsZWN0cm9uU2VydmljZX0gZnJvbSAnLi9zcmMvZWxlY3Ryb25TZXJ2aWNlJztcbmltcG9ydCB7RWxlY3Ryb25TZXJ2aWNlUmVmfSBmcm9tICcuL3NyYy9lbGVjdHJvblNlcnZpY2VSZWYnO1xuXG5leHBvcnQgKiBmcm9tICcuL3NyYy9lbGVjdHJvblNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZWxlY3Ryb25TZXJ2aWNlUmVmJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgIGV4cG9ydHM6IFtdLFxuICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogRWxlY3Ryb25TZXJ2aWNlLCB1c2VDbGFzczogRWxlY3Ryb25TZXJ2aWNlUmVmIH1dXG59KVxuZXhwb3J0IGNsYXNzIE5neEVsZWN0cm9uTW9kdWxlIHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9
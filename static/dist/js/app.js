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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/src/css/app.scss":
/*!*********************************!*\
  !*** ./static/src/css/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./static/src/js/app.js":
/*!******************************!*\
  !*** ./static/src/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var signupEmail = document.querySelector("#signup-email");
var signupSubmit = document.querySelector("#signup-submit");
var errorNotice = document.querySelector("#error_notice");
var contactOverlay = document.querySelector("#contact-overlay");
var contactOverlayTitle = document.querySelector("#contact-overlay__title");
var contactOverlayLoader = document.querySelector("#contact-overlay__loader");
signupSubmit.addEventListener("click", function (e) {
  var formData = new FormData();
  formData.append("email", signupEmail.value);
  e.preventDefault();

  if (signupEmail.value === "") {
    errorNotice.classList.add("show");
  } else {
    if (errorNotice.classList.contains("show")) {
      errorNotice.classList.remove("show");
    }

    contactOverlay.classList.add("show");
    sendMail(formData);
  }
});

function sendMail(form) {
  fetch("/signup", {
    method: "post",
    body: form
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.response === "invalid_email") {
      errorNotice.classList.add("show");
      contactOverlay.classList.remove("show");
    }

    if (data.response === "success") {
      contactOverlayTitle.innerText = "Message sent 😎";
      contactOverlayLoader.style.display = "none";
      signupEmail.value = "";
    }
  });
}

var slider = document.querySelector('#upcoming_events');
var isDown = false;
var startX;
var scrollLeft;
slider.addEventListener('mousedown', function (e) {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor = "grabbing";
});
slider.addEventListener('mouseleave', function () {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', function () {
  isDown = false;
  slider.style.cursor = "grab";
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', function (e) {
  if (!isDown) return;
  e.preventDefault();
  var x = e.pageX - slider.offsetLeft;
  var walk = (x - startX) * 3; //scroll-fast

  slider.scrollLeft = scrollLeft - walk; // console.log(walk);
});

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi ./static/src/js/app.js ./static/src/css/app.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Daniel\Documents\DMHProjects\frumPhilly\landingpage\static\src\js\app.js */"./static/src/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\Daniel\Documents\DMHProjects\frumPhilly\landingpage\static\src\css\app.scss */"./static/src/css/app.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3NyYy9jc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3NyYy9qcy9hcHAuanMiXSwibmFtZXMiOlsic2lnbnVwRW1haWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzaWdudXBTdWJtaXQiLCJlcnJvck5vdGljZSIsImNvbnRhY3RPdmVybGF5IiwiY29udGFjdE92ZXJsYXlUaXRsZSIsImNvbnRhY3RPdmVybGF5TG9hZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsImFkZCIsImNvbnRhaW5zIiwicmVtb3ZlIiwic2VuZE1haWwiLCJmb3JtIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJpbm5lclRleHQiLCJzdHlsZSIsImRpc3BsYXkiLCJzbGlkZXIiLCJpc0Rvd24iLCJzdGFydFgiLCJzY3JvbGxMZWZ0IiwicGFnZVgiLCJvZmZzZXRMZWZ0IiwiY3Vyc29yIiwieCIsIndhbGsiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5Qyxp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O0FBQ0FELFFBQU0sQ0FBQ2hCLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0FpQixRQUFNLEdBQUd4QixDQUFDLENBQUMwQixLQUFGLEdBQVVKLE1BQU0sQ0FBQ0ssVUFBMUI7QUFDQUYsWUFBVSxHQUFHSCxNQUFNLENBQUNHLFVBQXBCO0FBQ0FILFFBQU0sQ0FBQ0YsS0FBUCxDQUFhUSxNQUFiLEdBQXNCLFVBQXRCO0FBQ0QsQ0FORDtBQU9BTixNQUFNLENBQUN2QixnQkFBUCxDQUF3QixZQUF4QixFQUFzQyxZQUFNO0FBQzFDd0IsUUFBTSxHQUFHLEtBQVQ7QUFDQUQsUUFBTSxDQUFDaEIsU0FBUCxDQUFpQkcsTUFBakIsQ0FBd0IsUUFBeEI7QUFDRCxDQUhEO0FBSUFhLE1BQU0sQ0FBQ3ZCLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFlBQU07QUFDdkN3QixRQUFNLEdBQUcsS0FBVDtBQUNBRCxRQUFNLENBQUNGLEtBQVAsQ0FBYVEsTUFBYixHQUFzQixNQUF0QjtBQUNBTixRQUFNLENBQUNoQixTQUFQLENBQWlCRyxNQUFqQixDQUF3QixRQUF4QjtBQUNELENBSkQ7QUFLQWEsTUFBTSxDQUFDdkIsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQzFDLE1BQUksQ0FBQ3VCLE1BQUwsRUFBYTtBQUNidkIsR0FBQyxDQUFDSyxjQUFGO0FBQ0EsTUFBTXdCLENBQUMsR0FBRzdCLENBQUMsQ0FBQzBCLEtBQUYsR0FBVUosTUFBTSxDQUFDSyxVQUEzQjtBQUNBLE1BQU1HLElBQUksR0FBRyxDQUFDRCxDQUFDLEdBQUdMLE1BQUwsSUFBZSxDQUE1QixDQUowQyxDQUlYOztBQUMvQkYsUUFBTSxDQUFDRyxVQUFQLEdBQW9CQSxVQUFVLEdBQUdLLElBQWpDLENBTDBDLENBTTFDO0FBQ0QsQ0FQRCxFIiwiZmlsZSI6Ii9zdGF0aWMvZGlzdC9qcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJ2YXIgc2lnbnVwRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZ251cC1lbWFpbFwiKTtcclxudmFyIHNpZ251cFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lnbnVwLXN1Ym1pdFwiKTtcclxudmFyIGVycm9yTm90aWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlcnJvcl9ub3RpY2VcIik7XHJcbnZhciBjb250YWN0T3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC1vdmVybGF5XCIpO1xyXG52YXIgY29udGFjdE92ZXJsYXlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC1vdmVybGF5X190aXRsZVwiKTtcclxudmFyIGNvbnRhY3RPdmVybGF5TG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LW92ZXJsYXlfX2xvYWRlclwiKTtcclxuXHJcbnNpZ251cFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBmb3JtRGF0YS5hcHBlbmQoXCJlbWFpbFwiLCBzaWdudXBFbWFpbC52YWx1ZSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGlmIChzaWdudXBFbWFpbC52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgZXJyb3JOb3RpY2UuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChlcnJvck5vdGljZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93XCIpKSB7XHJcbiAgICAgIGVycm9yTm90aWNlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgfVxyXG4gICAgY29udGFjdE92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICBzZW5kTWFpbChmb3JtRGF0YSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNlbmRNYWlsKGZvcm0pIHtcclxuICBmZXRjaChcIi9zaWdudXBcIiwge1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICBib2R5OiBmb3JtXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT09IFwiaW52YWxpZF9lbWFpbFwiKSB7XHJcbiAgICAgICAgZXJyb3JOb3RpY2UuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgY29udGFjdE92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGEucmVzcG9uc2UgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgY29udGFjdE92ZXJsYXlUaXRsZS5pbm5lclRleHQgPSBcIk1lc3NhZ2Ugc2VudCDwn5iOXCI7XHJcbiAgICAgICAgY29udGFjdE92ZXJsYXlMb2FkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHNpZ251cEVtYWlsLnZhbHVlID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBjb21pbmdfZXZlbnRzJyk7XHJcbmxldCBpc0Rvd24gPSBmYWxzZTtcclxubGV0IHN0YXJ0WDtcclxubGV0IHNjcm9sbExlZnQ7XHJcblxyXG5zbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcclxuICBpc0Rvd24gPSB0cnVlO1xyXG4gIHNsaWRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICBzdGFydFggPSBlLnBhZ2VYIC0gc2xpZGVyLm9mZnNldExlZnQ7XHJcbiAgc2Nyb2xsTGVmdCA9IHNsaWRlci5zY3JvbGxMZWZ0O1xyXG4gIHNsaWRlci5zdHlsZS5jdXJzb3IgPSBcImdyYWJiaW5nXCJcclxufSk7XHJcbnNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gIGlzRG93biA9IGZhbHNlO1xyXG4gIHNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufSk7XHJcbnNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gIGlzRG93biA9IGZhbHNlO1xyXG4gIHNsaWRlci5zdHlsZS5jdXJzb3IgPSBcImdyYWJcIlxyXG4gIHNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufSk7XHJcbnNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4gIGlmICghaXNEb3duKSByZXR1cm47XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHggPSBlLnBhZ2VYIC0gc2xpZGVyLm9mZnNldExlZnQ7XHJcbiAgY29uc3Qgd2FsayA9ICh4IC0gc3RhcnRYKSAqIDM7IC8vc2Nyb2xsLWZhc3RcclxuICBzbGlkZXIuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSB3YWxrO1xyXG4gIC8vIGNvbnNvbGUubG9nKHdhbGspO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9
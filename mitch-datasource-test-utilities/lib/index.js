(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("mitchdatasourcetestutilities", [], factory);
	else if(typeof exports === 'object')
		exports["mitchdatasourcetestutilities"] = factory();
	else
		root["MitchDatasourceTestUtilities"] = factory();
})(typeof self !== "undefined" ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_stub_data_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/stub-data-array */ "./src/js/stub-data-array.js");
/* harmony import */ var _js_mock_ajax_call__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/mock-ajax-call */ "./src/js/mock-ajax-call.js");
/* harmony import */ var _js_mock_filter_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/mock-filter-logic */ "./src/js/mock-filter-logic.js");
/* harmony import */ var _js_mock_sort_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/mock-sort-logic */ "./src/js/mock-sort-logic.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  stubDataArray: _js_stub_data_array__WEBPACK_IMPORTED_MODULE_0__["default"],
  mockAjaxCall: _js_mock_ajax_call__WEBPACK_IMPORTED_MODULE_1__["default"],
  mockFilterLogic: _js_mock_filter_logic__WEBPACK_IMPORTED_MODULE_2__["default"],
  mockSortLogic: _js_mock_sort_logic__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/js/mock-ajax-call.js":
/*!**********************************!*\
  !*** ./src/js/mock-ajax-call.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock_filter_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-filter-logic */ "./src/js/mock-filter-logic.js");
/* harmony import */ var _mock_sort_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-sort-logic */ "./src/js/mock-sort-logic.js");


/* harmony default export */ __webpack_exports__["default"] = (function (datasource, allData) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var processedData = {
        data: allData,
        total: allData.length
      }; // Filter

      processedData.data = Object(_mock_filter_logic__WEBPACK_IMPORTED_MODULE_0__["default"])(processedData.data, datasource.searchText); // Sort

      processedData.data = Object(_mock_sort_logic__WEBPACK_IMPORTED_MODULE_1__["default"])(processedData.data, datasource.sortField, datasource.sortDirection); // Pagination

      processedData.data = processedData.data.slice((datasource.page - 1) * datasource.size, datasource.page * datasource.size);
      resolve(processedData);
    }, 1000); // Timeout simulates the AJAX delay
  });
});

/***/ }),

/***/ "./src/js/mock-filter-logic.js":
/*!*************************************!*\
  !*** ./src/js/mock-filter-logic.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (data, searchText) {
  if (!searchText) {
    return data;
  }

  return data.filter(function (value) {
    // Simple search logic by doing
    // a text search on the concatenation
    // of all the searchable fields
    var searchableText = "".concat(value.firstName, " ").concat(value.lastName, " ").concat(value.job, " ").concat(value.gender);

    if (searchableText.indexOf(searchText) > -1) {
      return true;
    }

    return false;
  });
});

/***/ }),

/***/ "./src/js/mock-sort-logic.js":
/*!***********************************!*\
  !*** ./src/js/mock-sort-logic.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (data, fieldName, direction) {
  if (direction === 'asc' || direction === 'ascending') {
    data.sort(function (a, b) {
      return a[fieldName] > b[fieldName] ? 1 : -1;
    });
  } else if (direction === 'desc' || direction === 'descending') {
    data.sort(function (a, b) {
      return a[fieldName] < b[fieldName] ? 1 : -1;
    });
  }

  return data;
});

/***/ }),

/***/ "./src/js/stub-data-array.js":
/*!***********************************!*\
  !*** ./src/js/stub-data-array.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: 1,
  firstName: 'John',
  lastName: 'Smith',
  job: 'Web Developer',
  gender: 'Male',
  hasCitizenship: 1
}, {
  id: 2,
  firstName: 'Mary',
  lastName: 'Jane',
  job: 'UI Designer',
  gender: 'Female',
  hasCitizenship: 1
}, {
  id: 3,
  firstName: 'Jin',
  lastName: 'Kazuma',
  job: 'Manager',
  gender: 'Male',
  hasCitizenship: 0
}, {
  id: 4,
  firstName: 'Syd',
  lastName: 'Aringa',
  job: 'Tester',
  gender: 'Male',
  hasCitizenship: 0
}, {
  id: 5,
  firstName: 'Rosemary',
  lastName: 'Tron',
  job: 'Tester',
  gender: 'Female',
  hasCitizenship: 1
}, {
  id: 6,
  firstName: 'Jimmy',
  lastName: 'Neutron',
  job: 'Scientist',
  gender: 'Male',
  hasCitizenship: 0
}, {
  id: 7,
  firstName: 'Bax',
  lastName: 'Dexter',
  job: 'Scientist',
  gender: 'Male',
  hasCitizenship: 1
}, {
  id: 8,
  firstName: 'Alice',
  lastName: 'Springs',
  job: 'Waitress',
  gender: 'Female',
  hasCitizenship: 1
}, {
  id: 9,
  firstName: 'Jake',
  lastName: 'Cornsworth',
  job: 'Web Developer',
  gender: 'Male',
  hasCitizenship: 1
}, {
  id: 10,
  firstName: 'James',
  lastName: 'Huntsman',
  job: 'CEO',
  gender: 'Male',
  hasCitizenship: 1
}, {
  id: 11,
  firstName: 'Jack',
  lastName: 'Smith',
  job: 'Manager',
  gender: 'Male',
  hasCitizenship: 1
}, {
  id: 12,
  firstName: 'Eliza',
  lastName: 'Bethando',
  job: 'Manager',
  gender: 'Female',
  hasCitizenship: 1
}, {
  id: 13,
  firstName: 'Omar',
  lastName: 'Mohammed',
  job: 'Manager',
  gender: 'Male',
  hasCitizenship: 0
}, {
  id: 14,
  firstName: 'Mike',
  lastName: 'Tileson',
  job: 'Boxer',
  gender: 'Male',
  hasCitizenship: 1
}, {
  id: 15,
  firstName: 'James',
  lastName: 'Coot',
  job: 'Sailor',
  gender: 'Male',
  hasCitizenship: 1
}, {
  id: 16,
  firstName: 'Jean',
  lastName: 'Dark',
  job: 'Saint',
  gender: 'Female',
  hasCitizenship: 0
}, {
  id: 17,
  firstName: 'Kat',
  lastName: 'Trudger',
  job: 'Consultant',
  gender: 'Female',
  hasCitizenship: 1
}, {
  id: 18,
  firstName: 'Tinker',
  lastName: 'Bella',
  job: 'Assistant',
  gender: 'Female',
  hasCitizenship: 1
}, {
  id: 19,
  firstName: 'Peter',
  lastName: 'Pen',
  job: 'Ship Captain',
  gender: 'Male',
  hasCitizenship: 1
}, {
  id: 20,
  firstName: 'Pina',
  lastName: 'Einsworthy',
  job: 'Tester',
  gender: 'Female',
  hasCitizenship: 1
}, {
  id: 21,
  firstName: 'Jacky',
  lastName: 'Jan',
  job: 'Artist',
  gender: 'Male',
  hasCitizenship: 0
}, {
  id: 22,
  firstName: 'Helvetica',
  lastName: 'Helmot',
  job: 'Designer',
  gender: 'Female',
  hasCitizenship: 1
}, {
  id: 23,
  firstName: 'Rouger',
  lastName: 'Fedoran',
  job: 'Tennis Player',
  gender: 'Male',
  hasCitizenship: 1
}, {
  id: 24,
  firstName: 'Justin',
  lastName: 'Lielver',
  job: 'Music Artist',
  gender: 'Male',
  hasCitizenship: 1
}]);

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9NaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01pdGNoRGF0YXNvdXJjZVRlc3RVdGlsaXRpZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vTWl0Y2hEYXRhc291cmNlVGVzdFV0aWxpdGllcy8uL3NyYy9qcy9tb2NrLWFqYXgtY2FsbC5qcyIsIndlYnBhY2s6Ly9NaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzLy4vc3JjL2pzL21vY2stZmlsdGVyLWxvZ2ljLmpzIiwid2VicGFjazovL01pdGNoRGF0YXNvdXJjZVRlc3RVdGlsaXRpZXMvLi9zcmMvanMvbW9jay1zb3J0LWxvZ2ljLmpzIiwid2VicGFjazovL01pdGNoRGF0YXNvdXJjZVRlc3RVdGlsaXRpZXMvLi9zcmMvanMvc3R1Yi1kYXRhLWFycmF5LmpzIl0sIm5hbWVzIjpbInN0dWJEYXRhQXJyYXkiLCJtb2NrQWpheENhbGwiLCJtb2NrRmlsdGVyTG9naWMiLCJtb2NrU29ydExvZ2ljIiwiZGF0YXNvdXJjZSIsImFsbERhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJwcm9jZXNzZWREYXRhIiwiZGF0YSIsInRvdGFsIiwibGVuZ3RoIiwic2VhcmNoVGV4dCIsInNvcnRGaWVsZCIsInNvcnREaXJlY3Rpb24iLCJzbGljZSIsInBhZ2UiLCJzaXplIiwiZmlsdGVyIiwidmFsdWUiLCJzZWFyY2hhYmxlVGV4dCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiam9iIiwiZ2VuZGVyIiwiaW5kZXhPZiIsImZpZWxkTmFtZSIsImRpcmVjdGlvbiIsInNvcnQiLCJhIiwiYiIsImlkIiwiaGFzQ2l0aXplbnNoaXAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNB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QUUsUUFMVjtBQU1FUSxnQkFBYyxFQUFFO0FBTmxCLENBekthLEVBaUxiO0FBQ0VELElBQUUsRUFBRSxFQUROO0FBRUVWLFdBQVMsRUFBRSxRQUZiO0FBR0VDLFVBQVEsRUFBRSxTQUhaO0FBSUVDLEtBQUcsRUFBRSxlQUpQO0FBS0VDLFFBQU0sRUFBRSxNQUxWO0FBTUVRLGdCQUFjLEVBQUU7QUFObEIsQ0FqTGEsRUF5TGI7QUFDRUQsSUFBRSxFQUFFLEVBRE47QUFFRVYsV0FBUyxFQUFFLFFBRmI7QUFHRUMsVUFBUSxFQUFFLFNBSFo7QUFJRUMsS0FBRyxFQUFFLGNBSlA7QUFLRUMsUUFBTSxFQUFFLE1BTFY7QUFNRVEsZ0JBQWMsRUFBRTtBQU5sQixDQXpMYSxDQUFmLEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm1pdGNoZGF0YXNvdXJjZXRlc3R1dGlsaXRpZXNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWl0Y2hkYXRhc291cmNldGVzdHV0aWxpdGllc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgc3R1YkRhdGFBcnJheSBmcm9tICcuL2pzL3N0dWItZGF0YS1hcnJheSc7XG5pbXBvcnQgbW9ja0FqYXhDYWxsIGZyb20gJy4vanMvbW9jay1hamF4LWNhbGwnO1xuaW1wb3J0IG1vY2tGaWx0ZXJMb2dpYyBmcm9tICcuL2pzL21vY2stZmlsdGVyLWxvZ2ljJztcbmltcG9ydCBtb2NrU29ydExvZ2ljIGZyb20gJy4vanMvbW9jay1zb3J0LWxvZ2ljJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdHViRGF0YUFycmF5LFxuICBtb2NrQWpheENhbGwsXG4gIG1vY2tGaWx0ZXJMb2dpYyxcbiAgbW9ja1NvcnRMb2dpYyxcbn07XG4iLCJpbXBvcnQgbW9ja0ZpbHRlckxvZ2ljIGZyb20gJy4vbW9jay1maWx0ZXItbG9naWMnO1xuaW1wb3J0IG1vY2tTb3J0TG9naWMgZnJvbSAnLi9tb2NrLXNvcnQtbG9naWMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGF0YXNvdXJjZSwgYWxsRGF0YSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBwcm9jZXNzZWREYXRhID0ge1xuICAgICAgICBkYXRhOiBhbGxEYXRhLFxuICAgICAgICB0b3RhbDogYWxsRGF0YS5sZW5ndGgsXG4gICAgICB9O1xuICAgICAgLy8gRmlsdGVyXG4gICAgICBwcm9jZXNzZWREYXRhLmRhdGEgPSBtb2NrRmlsdGVyTG9naWMoXG4gICAgICAgIHByb2Nlc3NlZERhdGEuZGF0YSxcbiAgICAgICAgZGF0YXNvdXJjZS5zZWFyY2hUZXh0LFxuICAgICAgKTtcbiAgICAgIC8vIFNvcnRcbiAgICAgIHByb2Nlc3NlZERhdGEuZGF0YSA9IG1vY2tTb3J0TG9naWMoXG4gICAgICAgIHByb2Nlc3NlZERhdGEuZGF0YSxcbiAgICAgICAgZGF0YXNvdXJjZS5zb3J0RmllbGQsXG4gICAgICAgIGRhdGFzb3VyY2Uuc29ydERpcmVjdGlvbixcbiAgICAgICk7XG4gICAgICAvLyBQYWdpbmF0aW9uXG4gICAgICBwcm9jZXNzZWREYXRhLmRhdGEgPSBwcm9jZXNzZWREYXRhLmRhdGEuc2xpY2UoXG4gICAgICAgIChkYXRhc291cmNlLnBhZ2UgLSAxKSAqIGRhdGFzb3VyY2Uuc2l6ZSxcbiAgICAgICAgZGF0YXNvdXJjZS5wYWdlICogZGF0YXNvdXJjZS5zaXplLFxuICAgICAgKTtcbiAgICAgIHJlc29sdmUocHJvY2Vzc2VkRGF0YSk7XG4gICAgfSwgMTAwMCk7IC8vIFRpbWVvdXQgc2ltdWxhdGVzIHRoZSBBSkFYIGRlbGF5XG4gIH0pKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkYXRhLCBzZWFyY2hUZXh0KSB7XG4gIGlmICghc2VhcmNoVGV4dCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG4gIHJldHVybiBkYXRhLmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAvLyBTaW1wbGUgc2VhcmNoIGxvZ2ljIGJ5IGRvaW5nXG4gICAgLy8gYSB0ZXh0IHNlYXJjaCBvbiB0aGUgY29uY2F0ZW5hdGlvblxuICAgIC8vIG9mIGFsbCB0aGUgc2VhcmNoYWJsZSBmaWVsZHNcbiAgICBjb25zdCBzZWFyY2hhYmxlVGV4dCA9IGAke3ZhbHVlLmZpcnN0TmFtZVxuICAgIH0gJHt2YWx1ZS5sYXN0TmFtZVxuICAgIH0gJHt2YWx1ZS5qb2JcbiAgICB9ICR7dmFsdWUuZ2VuZGVyfWA7XG4gICAgaWYgKHNlYXJjaGFibGVUZXh0LmluZGV4T2Yoc2VhcmNoVGV4dCkgPiAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGF0YSwgZmllbGROYW1lLCBkaXJlY3Rpb24pIHtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ2FzYycgfHwgZGlyZWN0aW9uID09PSAnYXNjZW5kaW5nJykge1xuICAgIGRhdGEuc29ydCgoYSwgYikgPT4gKChhW2ZpZWxkTmFtZV0gPiBiW2ZpZWxkTmFtZV0pID8gMSA6IC0xKSk7XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZGVzYycgfHwgZGlyZWN0aW9uID09PSAnZGVzY2VuZGluZycpIHtcbiAgICBkYXRhLnNvcnQoKGEsIGIpID0+ICgoYVtmaWVsZE5hbWVdIDwgYltmaWVsZE5hbWVdKSA/IDEgOiAtMSkpO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgZmlyc3ROYW1lOiAnSm9obicsXG4gICAgbGFzdE5hbWU6ICdTbWl0aCcsXG4gICAgam9iOiAnV2ViIERldmVsb3BlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBmaXJzdE5hbWU6ICdNYXJ5JyxcbiAgICBsYXN0TmFtZTogJ0phbmUnLFxuICAgIGpvYjogJ1VJIERlc2lnbmVyJyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgZmlyc3ROYW1lOiAnSmluJyxcbiAgICBsYXN0TmFtZTogJ0thenVtYScsXG4gICAgam9iOiAnTWFuYWdlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBmaXJzdE5hbWU6ICdTeWQnLFxuICAgIGxhc3ROYW1lOiAnQXJpbmdhJyxcbiAgICBqb2I6ICdUZXN0ZXInLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgZmlyc3ROYW1lOiAnUm9zZW1hcnknLFxuICAgIGxhc3ROYW1lOiAnVHJvbicsXG4gICAgam9iOiAnVGVzdGVyJyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgZmlyc3ROYW1lOiAnSmltbXknLFxuICAgIGxhc3ROYW1lOiAnTmV1dHJvbicsXG4gICAgam9iOiAnU2NpZW50aXN0JyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiA3LFxuICAgIGZpcnN0TmFtZTogJ0JheCcsXG4gICAgbGFzdE5hbWU6ICdEZXh0ZXInLFxuICAgIGpvYjogJ1NjaWVudGlzdCcsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogOCxcbiAgICBmaXJzdE5hbWU6ICdBbGljZScsXG4gICAgbGFzdE5hbWU6ICdTcHJpbmdzJyxcbiAgICBqb2I6ICdXYWl0cmVzcycsXG4gICAgZ2VuZGVyOiAnRmVtYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiA5LFxuICAgIGZpcnN0TmFtZTogJ0pha2UnLFxuICAgIGxhc3ROYW1lOiAnQ29ybnN3b3J0aCcsXG4gICAgam9iOiAnV2ViIERldmVsb3BlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTAsXG4gICAgZmlyc3ROYW1lOiAnSmFtZXMnLFxuICAgIGxhc3ROYW1lOiAnSHVudHNtYW4nLFxuICAgIGpvYjogJ0NFTycsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTEsXG4gICAgZmlyc3ROYW1lOiAnSmFjaycsXG4gICAgbGFzdE5hbWU6ICdTbWl0aCcsXG4gICAgam9iOiAnTWFuYWdlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTIsXG4gICAgZmlyc3ROYW1lOiAnRWxpemEnLFxuICAgIGxhc3ROYW1lOiAnQmV0aGFuZG8nLFxuICAgIGpvYjogJ01hbmFnZXInLFxuICAgIGdlbmRlcjogJ0ZlbWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTMsXG4gICAgZmlyc3ROYW1lOiAnT21hcicsXG4gICAgbGFzdE5hbWU6ICdNb2hhbW1lZCcsXG4gICAgam9iOiAnTWFuYWdlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogMTQsXG4gICAgZmlyc3ROYW1lOiAnTWlrZScsXG4gICAgbGFzdE5hbWU6ICdUaWxlc29uJyxcbiAgICBqb2I6ICdCb3hlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTUsXG4gICAgZmlyc3ROYW1lOiAnSmFtZXMnLFxuICAgIGxhc3ROYW1lOiAnQ29vdCcsXG4gICAgam9iOiAnU2FpbG9yJyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAxNixcbiAgICBmaXJzdE5hbWU6ICdKZWFuJyxcbiAgICBsYXN0TmFtZTogJ0RhcmsnLFxuICAgIGpvYjogJ1NhaW50JyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDE3LFxuICAgIGZpcnN0TmFtZTogJ0thdCcsXG4gICAgbGFzdE5hbWU6ICdUcnVkZ2VyJyxcbiAgICBqb2I6ICdDb25zdWx0YW50JyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDE4LFxuICAgIGZpcnN0TmFtZTogJ1RpbmtlcicsXG4gICAgbGFzdE5hbWU6ICdCZWxsYScsXG4gICAgam9iOiAnQXNzaXN0YW50JyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDE5LFxuICAgIGZpcnN0TmFtZTogJ1BldGVyJyxcbiAgICBsYXN0TmFtZTogJ1BlbicsXG4gICAgam9iOiAnU2hpcCBDYXB0YWluJyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAyMCxcbiAgICBmaXJzdE5hbWU6ICdQaW5hJyxcbiAgICBsYXN0TmFtZTogJ0VpbnN3b3J0aHknLFxuICAgIGpvYjogJ1Rlc3RlcicsXG4gICAgZ2VuZGVyOiAnRmVtYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAyMSxcbiAgICBmaXJzdE5hbWU6ICdKYWNreScsXG4gICAgbGFzdE5hbWU6ICdKYW4nLFxuICAgIGpvYjogJ0FydGlzdCcsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogMjIsXG4gICAgZmlyc3ROYW1lOiAnSGVsdmV0aWNhJyxcbiAgICBsYXN0TmFtZTogJ0hlbG1vdCcsXG4gICAgam9iOiAnRGVzaWduZXInLFxuICAgIGdlbmRlcjogJ0ZlbWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMjMsXG4gICAgZmlyc3ROYW1lOiAnUm91Z2VyJyxcbiAgICBsYXN0TmFtZTogJ0ZlZG9yYW4nLFxuICAgIGpvYjogJ1Rlbm5pcyBQbGF5ZXInLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDI0LFxuICAgIGZpcnN0TmFtZTogJ0p1c3RpbicsXG4gICAgbGFzdE5hbWU6ICdMaWVsdmVyJyxcbiAgICBqb2I6ICdNdXNpYyBBcnRpc3QnLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
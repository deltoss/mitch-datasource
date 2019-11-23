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

      var searchArgs = datasource.searchArguments;
      processedData.data = Object(_mock_filter_logic__WEBPACK_IMPORTED_MODULE_0__["default"])(processedData.data, searchArgs); // Sort

      processedData.data = Object(_mock_sort_logic__WEBPACK_IMPORTED_MODULE_1__["default"])(processedData.data, datasource.sortArguments); // Pagination

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
/* harmony default export */ __webpack_exports__["default"] = (function (data, searchArguments) {
  if (!searchArguments) {
    return data;
  }

  if (typeof searchArguments === 'string') {
    return data.filter(function (value) {
      // Simple search logic by doing
      // a text search on the concatenation
      // of all the searchable fields
      var searchableText = "".concat(value.firstName, " ").concat(value.lastName, " ").concat(value.job, " ").concat(value.gender);
      return searchableText.indexOf(searchArguments) > -1;
    });
  }

  var entries = Object.entries(searchArguments);
  return data.filter(function (value) {
    for (var i = 0; i < entries.length; i += 1) {
      var searchFieldName = entries[i][0];
      var searchValue = entries[i][1].toLowerCase();
      var searchableText = value[searchFieldName];

      if (!searchableText || !searchValue) {
        return false;
      }

      searchableText = typeof searchableText === 'string' ? searchableText.toLowerCase() : searchableText.toString().toLowerCase();

      if (searchableText.indexOf(searchValue) === -1) {
        return false;
      }
    }

    return true;
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* harmony default export */ __webpack_exports__["default"] = (function (data, sortArguments) {
  if (!sortArguments) {
    return data;
  }

  var clonedData = _toConsumableArray(data);

  clonedData.sort(function (a, b) {
    var entries = Object.entries(sortArguments);

    for (var i = 0; i < entries.length; i += 1) {
      var sortFieldName = entries[i][0];
      var sortDirection = entries[i][1].toLowerCase();

      if (sortDirection === 'asc' || sortDirection === 'ascending') {
        if (a[sortFieldName] > b[sortFieldName]) {
          return 1;
        }

        if (a[sortFieldName] < b[sortFieldName]) {
          return -1;
        }
      } else if (sortDirection === 'desc' || sortDirection === 'descending') {
        if (a[sortFieldName] < b[sortFieldName]) {
          return 1;
        }

        if (a[sortFieldName] > b[sortFieldName]) {
          return -1;
        }
      }
    }

    return 0;
  });
  return clonedData;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9NaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01pdGNoRGF0YXNvdXJjZVRlc3RVdGlsaXRpZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vTWl0Y2hEYXRhc291cmNlVGVzdFV0aWxpdGllcy8uL3NyYy9qcy9tb2NrLWFqYXgtY2FsbC5qcyIsIndlYnBhY2s6Ly9NaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzLy4vc3JjL2pzL21vY2stZmlsdGVyLWxvZ2ljLmpzIiwid2VicGFjazovL01pdGNoRGF0YXNvdXJjZVRlc3RVdGlsaXRpZXMvLi9zcmMvanMvbW9jay1zb3J0LWxvZ2ljLmpzIiwid2VicGFjazovL01pdGNoRGF0YXNvdXJjZVRlc3RVdGlsaXRpZXMvLi9zcmMvanMvc3R1Yi1kYXRhLWFycmF5LmpzIl0sIm5hbWVzIjpbInN0dWJEYXRhQXJyYXkiLCJtb2NrQWpheENhbGwiLCJtb2NrRmlsdGVyTG9naWMiLCJtb2NrU29ydExvZ2ljIiwiZGF0YXNvdXJjZSIsImFsbERhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJwcm9jZXNzZWREYXRhIiwiZGF0YSIsInRvdGFsIiwibGVuZ3RoIiwic2VhcmNoQXJncyIsInNlYXJjaEFyZ3VtZW50cyIsInNvcnRBcmd1bWVudHMiLCJzbGljZSIsInBhZ2UiLCJzaXplIiwiZmlsdGVyIiwidmFsdWUiLCJzZWFyY2hhYmxlVGV4dCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiam9iIiwiZ2VuZGVyIiwiaW5kZXhPZiIsImVudHJpZXMiLCJPYmplY3QiLCJpIiwic2VhcmNoRmllbGROYW1lIiwic2VhcmNoVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsInRvU3RyaW5nIiwiY2xvbmVkRGF0YSIsInNvcnQiLCJhIiwiYiIsInNvcnRGaWVsZE5hbWUiLCJzb3J0RGlyZWN0aW9uIiwiaWQiLCJoYXNDaXRpemVuc2hpcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWU7QUFDYkEsZUFBYSxFQUFiQSwyREFEYTtBQUViQyxjQUFZLEVBQVpBLDBEQUZhO0FBR2JDLGlCQUFlLEVBQWZBLDZEQUhhO0FBSWJDLGVBQWEsRUFBYkEsMkRBQWFBO0FBSkEsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUseUVBQVVDLFVBQVYsRUFBc0JDLE9BQXRCLEVBQStCO0FBQzVDLFNBQU8sSUFBSUMsT0FBSixDQUFhLFVBQUND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QUFFLGNBSlA7QUFLRUMsUUFBTSxFQUFFLE1BTFY7QUFNRWdCLGdCQUFjLEVBQUU7QUFObEIsQ0FqSmEsRUF5SmI7QUFDRUQsSUFBRSxFQUFFLEVBRE47QUFFRWxCLFdBQVMsRUFBRSxNQUZiO0FBR0VDLFVBQVEsRUFBRSxZQUhaO0FBSUVDLEtBQUcsRUFBRSxRQUpQO0FBS0VDLFFBQU0sRUFBRSxRQUxWO0FBTUVnQixnQkFBYyxFQUFFO0FBTmxCLENBekphLEVBaUtiO0FBQ0VELElBQUUsRUFBRSxFQUROO0FBRUVsQixXQUFTLEVBQUUsT0FGYjtBQUdFQyxVQUFRLEVBQUUsS0FIWjtBQUlFQyxLQUFHLEVBQUUsUUFKUDtBQUtFQyxRQUFNLEVBQUUsTUFMVjtBQU1FZ0IsZ0JBQWMsRUFBRTtBQU5sQixDQWpLYSxFQXlLYjtBQUNFRCxJQUFFLEVBQUUsRUFETjtBQUVFbEIsV0FBUyxFQUFFLFdBRmI7QUFHRUMsVUFBUSxFQUFFLFFBSFo7QUFJRUMsS0FBRyxFQUFFLFVBSlA7QUFLRUMsUUFBTSxFQUFFLFFBTFY7QUFNRWdCLGdCQUFjLEVBQUU7QUFObEIsQ0F6S2EsRUFpTGI7QUFDRUQsSUFBRSxFQUFFLEVBRE47QUFFRWxCLFdBQVMsRUFBRSxRQUZiO0FBR0VDLFVBQVEsRUFBRSxTQUhaO0FBSUVDLEtBQUcsRUFBRSxlQUpQO0FBS0VDLFFBQU0sRUFBRSxNQUxWO0FBTUVnQixnQkFBYyxFQUFFO0FBTmxCLENBakxhLEVBeUxiO0FBQ0VELElBQUUsRUFBRSxFQUROO0FBRUVsQixXQUFTLEVBQUUsUUFGYjtBQUdFQyxVQUFRLEVBQUUsU0FIWjtBQUlFQyxLQUFHLEVBQUUsY0FKUDtBQUtFQyxRQUFNLEVBQUUsTUFMVjtBQU1FZ0IsZ0JBQWMsRUFBRTtBQU5sQixDQXpMYSxDQUFmLEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm1pdGNoZGF0YXNvdXJjZXRlc3R1dGlsaXRpZXNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWl0Y2hkYXRhc291cmNldGVzdHV0aWxpdGllc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgc3R1YkRhdGFBcnJheSBmcm9tICcuL2pzL3N0dWItZGF0YS1hcnJheSc7XG5pbXBvcnQgbW9ja0FqYXhDYWxsIGZyb20gJy4vanMvbW9jay1hamF4LWNhbGwnO1xuaW1wb3J0IG1vY2tGaWx0ZXJMb2dpYyBmcm9tICcuL2pzL21vY2stZmlsdGVyLWxvZ2ljJztcbmltcG9ydCBtb2NrU29ydExvZ2ljIGZyb20gJy4vanMvbW9jay1zb3J0LWxvZ2ljJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdHViRGF0YUFycmF5LFxuICBtb2NrQWpheENhbGwsXG4gIG1vY2tGaWx0ZXJMb2dpYyxcbiAgbW9ja1NvcnRMb2dpYyxcbn07XG4iLCJpbXBvcnQgbW9ja0ZpbHRlckxvZ2ljIGZyb20gJy4vbW9jay1maWx0ZXItbG9naWMnO1xuaW1wb3J0IG1vY2tTb3J0TG9naWMgZnJvbSAnLi9tb2NrLXNvcnQtbG9naWMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGF0YXNvdXJjZSwgYWxsRGF0YSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBwcm9jZXNzZWREYXRhID0ge1xuICAgICAgICBkYXRhOiBhbGxEYXRhLFxuICAgICAgICB0b3RhbDogYWxsRGF0YS5sZW5ndGgsXG4gICAgICB9O1xuICAgICAgLy8gRmlsdGVyXG4gICAgICBjb25zdCBzZWFyY2hBcmdzID0gZGF0YXNvdXJjZS5zZWFyY2hBcmd1bWVudHM7XG4gICAgICBwcm9jZXNzZWREYXRhLmRhdGEgPSBtb2NrRmlsdGVyTG9naWMoXG4gICAgICAgIHByb2Nlc3NlZERhdGEuZGF0YSxcbiAgICAgICAgc2VhcmNoQXJncyxcbiAgICAgICk7XG4gICAgICAvLyBTb3J0XG4gICAgICBwcm9jZXNzZWREYXRhLmRhdGEgPSBtb2NrU29ydExvZ2ljKFxuICAgICAgICBwcm9jZXNzZWREYXRhLmRhdGEsXG4gICAgICAgIGRhdGFzb3VyY2Uuc29ydEFyZ3VtZW50cyxcbiAgICAgICk7XG4gICAgICAvLyBQYWdpbmF0aW9uXG4gICAgICBwcm9jZXNzZWREYXRhLmRhdGEgPSBwcm9jZXNzZWREYXRhLmRhdGEuc2xpY2UoXG4gICAgICAgIChkYXRhc291cmNlLnBhZ2UgLSAxKSAqIGRhdGFzb3VyY2Uuc2l6ZSxcbiAgICAgICAgZGF0YXNvdXJjZS5wYWdlICogZGF0YXNvdXJjZS5zaXplLFxuICAgICAgKTtcbiAgICAgIHJlc29sdmUocHJvY2Vzc2VkRGF0YSk7XG4gICAgfSwgMTAwMCk7IC8vIFRpbWVvdXQgc2ltdWxhdGVzIHRoZSBBSkFYIGRlbGF5XG4gIH0pKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkYXRhLCBzZWFyY2hBcmd1bWVudHMpIHtcbiAgaWYgKCFzZWFyY2hBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2VhcmNoQXJndW1lbnRzID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkYXRhLmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgIC8vIFNpbXBsZSBzZWFyY2ggbG9naWMgYnkgZG9pbmdcbiAgICAgIC8vIGEgdGV4dCBzZWFyY2ggb24gdGhlIGNvbmNhdGVuYXRpb25cbiAgICAgIC8vIG9mIGFsbCB0aGUgc2VhcmNoYWJsZSBmaWVsZHNcbiAgICAgIGNvbnN0IHNlYXJjaGFibGVUZXh0ID0gYCR7dmFsdWUuZmlyc3ROYW1lXG4gICAgICB9ICR7dmFsdWUubGFzdE5hbWVcbiAgICAgIH0gJHt2YWx1ZS5qb2JcbiAgICAgIH0gJHt2YWx1ZS5nZW5kZXJ9YDtcbiAgICAgIHJldHVybiBzZWFyY2hhYmxlVGV4dC5pbmRleE9mKHNlYXJjaEFyZ3VtZW50cykgPiAtMTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoc2VhcmNoQXJndW1lbnRzKTtcbiAgcmV0dXJuIGRhdGEuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc2VhcmNoRmllbGROYW1lID0gZW50cmllc1tpXVswXTtcbiAgICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gZW50cmllc1tpXVsxXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgbGV0IHNlYXJjaGFibGVUZXh0ID0gdmFsdWVbc2VhcmNoRmllbGROYW1lXTtcbiAgICAgIGlmICghc2VhcmNoYWJsZVRleHQgfHwgIXNlYXJjaFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHNlYXJjaGFibGVUZXh0ID0gdHlwZW9mIHNlYXJjaGFibGVUZXh0ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHNlYXJjaGFibGVUZXh0LnRvTG93ZXJDYXNlKClcbiAgICAgICAgOiBzZWFyY2hhYmxlVGV4dC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoc2VhcmNoYWJsZVRleHQuaW5kZXhPZihzZWFyY2hWYWx1ZSkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGRhdGEsIHNvcnRBcmd1bWVudHMpIHtcbiAgaWYgKCFzb3J0QXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbiAgY29uc3QgY2xvbmVkRGF0YSA9IFsuLi5kYXRhXTtcbiAgY2xvbmVkRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHNvcnRBcmd1bWVudHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc29ydEZpZWxkTmFtZSA9IGVudHJpZXNbaV1bMF07XG4gICAgICBjb25zdCBzb3J0RGlyZWN0aW9uID0gZW50cmllc1tpXVsxXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHNvcnREaXJlY3Rpb24gPT09ICdhc2MnIHx8IHNvcnREaXJlY3Rpb24gPT09ICdhc2NlbmRpbmcnKSB7XG4gICAgICAgIGlmIChhW3NvcnRGaWVsZE5hbWVdID4gYltzb3J0RmllbGROYW1lXSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3NvcnRGaWVsZE5hbWVdIDwgYltzb3J0RmllbGROYW1lXSkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzb3J0RGlyZWN0aW9uID09PSAnZGVzYycgfHwgc29ydERpcmVjdGlvbiA9PT0gJ2Rlc2NlbmRpbmcnKSB7XG4gICAgICAgIGlmIChhW3NvcnRGaWVsZE5hbWVdIDwgYltzb3J0RmllbGROYW1lXSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3NvcnRGaWVsZE5hbWVdID4gYltzb3J0RmllbGROYW1lXSkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSk7XG4gIHJldHVybiBjbG9uZWREYXRhO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgZmlyc3ROYW1lOiAnSm9obicsXG4gICAgbGFzdE5hbWU6ICdTbWl0aCcsXG4gICAgam9iOiAnV2ViIERldmVsb3BlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBmaXJzdE5hbWU6ICdNYXJ5JyxcbiAgICBsYXN0TmFtZTogJ0phbmUnLFxuICAgIGpvYjogJ1VJIERlc2lnbmVyJyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgZmlyc3ROYW1lOiAnSmluJyxcbiAgICBsYXN0TmFtZTogJ0thenVtYScsXG4gICAgam9iOiAnTWFuYWdlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBmaXJzdE5hbWU6ICdTeWQnLFxuICAgIGxhc3ROYW1lOiAnQXJpbmdhJyxcbiAgICBqb2I6ICdUZXN0ZXInLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgZmlyc3ROYW1lOiAnUm9zZW1hcnknLFxuICAgIGxhc3ROYW1lOiAnVHJvbicsXG4gICAgam9iOiAnVGVzdGVyJyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgZmlyc3ROYW1lOiAnSmltbXknLFxuICAgIGxhc3ROYW1lOiAnTmV1dHJvbicsXG4gICAgam9iOiAnU2NpZW50aXN0JyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiA3LFxuICAgIGZpcnN0TmFtZTogJ0JheCcsXG4gICAgbGFzdE5hbWU6ICdEZXh0ZXInLFxuICAgIGpvYjogJ1NjaWVudGlzdCcsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogOCxcbiAgICBmaXJzdE5hbWU6ICdBbGljZScsXG4gICAgbGFzdE5hbWU6ICdTcHJpbmdzJyxcbiAgICBqb2I6ICdXYWl0cmVzcycsXG4gICAgZ2VuZGVyOiAnRmVtYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiA5LFxuICAgIGZpcnN0TmFtZTogJ0pha2UnLFxuICAgIGxhc3ROYW1lOiAnQ29ybnN3b3J0aCcsXG4gICAgam9iOiAnV2ViIERldmVsb3BlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTAsXG4gICAgZmlyc3ROYW1lOiAnSmFtZXMnLFxuICAgIGxhc3ROYW1lOiAnSHVudHNtYW4nLFxuICAgIGpvYjogJ0NFTycsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTEsXG4gICAgZmlyc3ROYW1lOiAnSmFjaycsXG4gICAgbGFzdE5hbWU6ICdTbWl0aCcsXG4gICAgam9iOiAnTWFuYWdlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTIsXG4gICAgZmlyc3ROYW1lOiAnRWxpemEnLFxuICAgIGxhc3ROYW1lOiAnQmV0aGFuZG8nLFxuICAgIGpvYjogJ01hbmFnZXInLFxuICAgIGdlbmRlcjogJ0ZlbWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTMsXG4gICAgZmlyc3ROYW1lOiAnT21hcicsXG4gICAgbGFzdE5hbWU6ICdNb2hhbW1lZCcsXG4gICAgam9iOiAnTWFuYWdlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogMTQsXG4gICAgZmlyc3ROYW1lOiAnTWlrZScsXG4gICAgbGFzdE5hbWU6ICdUaWxlc29uJyxcbiAgICBqb2I6ICdCb3hlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTUsXG4gICAgZmlyc3ROYW1lOiAnSmFtZXMnLFxuICAgIGxhc3ROYW1lOiAnQ29vdCcsXG4gICAgam9iOiAnU2FpbG9yJyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAxNixcbiAgICBmaXJzdE5hbWU6ICdKZWFuJyxcbiAgICBsYXN0TmFtZTogJ0RhcmsnLFxuICAgIGpvYjogJ1NhaW50JyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDE3LFxuICAgIGZpcnN0TmFtZTogJ0thdCcsXG4gICAgbGFzdE5hbWU6ICdUcnVkZ2VyJyxcbiAgICBqb2I6ICdDb25zdWx0YW50JyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDE4LFxuICAgIGZpcnN0TmFtZTogJ1RpbmtlcicsXG4gICAgbGFzdE5hbWU6ICdCZWxsYScsXG4gICAgam9iOiAnQXNzaXN0YW50JyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDE5LFxuICAgIGZpcnN0TmFtZTogJ1BldGVyJyxcbiAgICBsYXN0TmFtZTogJ1BlbicsXG4gICAgam9iOiAnU2hpcCBDYXB0YWluJyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAyMCxcbiAgICBmaXJzdE5hbWU6ICdQaW5hJyxcbiAgICBsYXN0TmFtZTogJ0VpbnN3b3J0aHknLFxuICAgIGpvYjogJ1Rlc3RlcicsXG4gICAgZ2VuZGVyOiAnRmVtYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAyMSxcbiAgICBmaXJzdE5hbWU6ICdKYWNreScsXG4gICAgbGFzdE5hbWU6ICdKYW4nLFxuICAgIGpvYjogJ0FydGlzdCcsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogMjIsXG4gICAgZmlyc3ROYW1lOiAnSGVsdmV0aWNhJyxcbiAgICBsYXN0TmFtZTogJ0hlbG1vdCcsXG4gICAgam9iOiAnRGVzaWduZXInLFxuICAgIGdlbmRlcjogJ0ZlbWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMjMsXG4gICAgZmlyc3ROYW1lOiAnUm91Z2VyJyxcbiAgICBsYXN0TmFtZTogJ0ZlZG9yYW4nLFxuICAgIGpvYjogJ1Rlbm5pcyBQbGF5ZXInLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDI0LFxuICAgIGZpcnN0TmFtZTogJ0p1c3RpbicsXG4gICAgbGFzdE5hbWU6ICdMaWVsdmVyJyxcbiAgICBqb2I6ICdNdXNpYyBBcnRpc3QnLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
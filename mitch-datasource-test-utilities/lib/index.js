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

      var searchArgs = datasource.searchArguments || datasource.searchText;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9NaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01pdGNoRGF0YXNvdXJjZVRlc3RVdGlsaXRpZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vTWl0Y2hEYXRhc291cmNlVGVzdFV0aWxpdGllcy8uL3NyYy9qcy9tb2NrLWFqYXgtY2FsbC5qcyIsIndlYnBhY2s6Ly9NaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzLy4vc3JjL2pzL21vY2stZmlsdGVyLWxvZ2ljLmpzIiwid2VicGFjazovL01pdGNoRGF0YXNvdXJjZVRlc3RVdGlsaXRpZXMvLi9zcmMvanMvbW9jay1zb3J0LWxvZ2ljLmpzIiwid2VicGFjazovL01pdGNoRGF0YXNvdXJjZVRlc3RVdGlsaXRpZXMvLi9zcmMvanMvc3R1Yi1kYXRhLWFycmF5LmpzIl0sIm5hbWVzIjpbInN0dWJEYXRhQXJyYXkiLCJtb2NrQWpheENhbGwiLCJtb2NrRmlsdGVyTG9naWMiLCJtb2NrU29ydExvZ2ljIiwiZGF0YXNvdXJjZSIsImFsbERhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJwcm9jZXNzZWREYXRhIiwiZGF0YSIsInRvdGFsIiwibGVuZ3RoIiwic2VhcmNoQXJncyIsInNlYXJjaEFyZ3VtZW50cyIsInNlYXJjaFRleHQiLCJzb3J0QXJndW1lbnRzIiwic2xpY2UiLCJwYWdlIiwic2l6ZSIsImZpbHRlciIsInZhbHVlIiwic2VhcmNoYWJsZVRleHQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImpvYiIsImdlbmRlciIsImluZGV4T2YiLCJlbnRyaWVzIiwiT2JqZWN0IiwiaSIsInNlYXJjaEZpZWxkTmFtZSIsInNlYXJjaFZhbHVlIiwidG9Mb3dlckNhc2UiLCJ0b1N0cmluZyIsImNsb25lZERhdGEiLCJzb3J0IiwiYSIsImIiLCJzb3J0RmllbGROYW1lIiwic29ydERpcmVjdGlvbiIsImlkIiwiaGFzQ2l0aXplbnNoaXAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlO0FBQ2JBLGVBQWEsRUFBYkEsMkRBRGE7QUFFYkMsY0FBWSxFQUFaQSwwREFGYTtBQUdiQyxpQkFBZSxFQUFmQSw2REFIYTtBQUliQyxlQUFhLEVBQWJBLDJEQUFhQTtBQUpBLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLHlFQUFVQyxVQUFWLEVBQXNCQyxPQUF0QixFQUErQjtBQUM1QyxTQUFPLElBQUlDLE9B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QUZiO0FBR0VDLFVBQVEsRUFBRSxLQUhaO0FBSUVDLEtBQUcsRUFBRSxjQUpQO0FBS0VDLFFBQU0sRUFBRSxNQUxWO0FBTUVnQixnQkFBYyxFQUFFO0FBTmxCLENBakphLEVBeUpiO0FBQ0VELElBQUUsRUFBRSxFQUROO0FBRUVsQixXQUFTLEVBQUUsTUFGYjtBQUdFQyxVQUFRLEVBQUUsWUFIWjtBQUlFQyxLQUFHLEVBQUUsUUFKUDtBQUtFQyxRQUFNLEVBQUUsUUFMVjtBQU1FZ0IsZ0JBQWMsRUFBRTtBQU5sQixDQXpKYSxFQWlLYjtBQUNFRCxJQUFFLEVBQUUsRUFETjtBQUVFbEIsV0FBUyxFQUFFLE9BRmI7QUFHRUMsVUFBUSxFQUFFLEtBSFo7QUFJRUMsS0FBRyxFQUFFLFFBSlA7QUFLRUMsUUFBTSxFQUFFLE1BTFY7QUFNRWdCLGdCQUFjLEVBQUU7QUFObEIsQ0FqS2EsRUF5S2I7QUFDRUQsSUFBRSxFQUFFLEVBRE47QUFFRWxCLFdBQVMsRUFBRSxXQUZiO0FBR0VDLFVBQVEsRUFBRSxRQUhaO0FBSUVDLEtBQUcsRUFBRSxVQUpQO0FBS0VDLFFBQU0sRUFBRSxRQUxWO0FBTUVnQixnQkFBYyxFQUFFO0FBTmxCLENBekthLEVBaUxiO0FBQ0VELElBQUUsRUFBRSxFQUROO0FBRUVsQixXQUFTLEVBQUUsUUFGYjtBQUdFQyxVQUFRLEVBQUUsU0FIWjtBQUlFQyxLQUFHLEVBQUUsZUFKUDtBQUtFQyxRQUFNLEVBQUUsTUFMVjtBQU1FZ0IsZ0JBQWMsRUFBRTtBQU5sQixDQWpMYSxFQXlMYjtBQUNFRCxJQUFFLEVBQUUsRUFETjtBQUVFbEIsV0FBUyxFQUFFLFFBRmI7QUFHRUMsVUFBUSxFQUFFLFNBSFo7QUFJRUMsS0FBRyxFQUFFLGNBSlA7QUFLRUMsUUFBTSxFQUFFLE1BTFY7QUFNRWdCLGdCQUFjLEVBQUU7QUFObEIsQ0F6TGEsQ0FBZixFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJtaXRjaGRhdGFzb3VyY2V0ZXN0dXRpbGl0aWVzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pdGNoZGF0YXNvdXJjZXRlc3R1dGlsaXRpZXNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTWl0Y2hEYXRhc291cmNlVGVzdFV0aWxpdGllc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHN0dWJEYXRhQXJyYXkgZnJvbSAnLi9qcy9zdHViLWRhdGEtYXJyYXknO1xuaW1wb3J0IG1vY2tBamF4Q2FsbCBmcm9tICcuL2pzL21vY2stYWpheC1jYWxsJztcbmltcG9ydCBtb2NrRmlsdGVyTG9naWMgZnJvbSAnLi9qcy9tb2NrLWZpbHRlci1sb2dpYyc7XG5pbXBvcnQgbW9ja1NvcnRMb2dpYyBmcm9tICcuL2pzL21vY2stc29ydC1sb2dpYyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3R1YkRhdGFBcnJheSxcbiAgbW9ja0FqYXhDYWxsLFxuICBtb2NrRmlsdGVyTG9naWMsXG4gIG1vY2tTb3J0TG9naWMsXG59O1xuIiwiaW1wb3J0IG1vY2tGaWx0ZXJMb2dpYyBmcm9tICcuL21vY2stZmlsdGVyLWxvZ2ljJztcbmltcG9ydCBtb2NrU29ydExvZ2ljIGZyb20gJy4vbW9jay1zb3J0LWxvZ2ljJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGRhdGFzb3VyY2UsIGFsbERhdGEpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKCgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IHtcbiAgICAgICAgZGF0YTogYWxsRGF0YSxcbiAgICAgICAgdG90YWw6IGFsbERhdGEubGVuZ3RoLFxuICAgICAgfTtcbiAgICAgIC8vIEZpbHRlclxuICAgICAgY29uc3Qgc2VhcmNoQXJncyA9IGRhdGFzb3VyY2Uuc2VhcmNoQXJndW1lbnRzIHx8IGRhdGFzb3VyY2Uuc2VhcmNoVGV4dDtcbiAgICAgIHByb2Nlc3NlZERhdGEuZGF0YSA9IG1vY2tGaWx0ZXJMb2dpYyhcbiAgICAgICAgcHJvY2Vzc2VkRGF0YS5kYXRhLFxuICAgICAgICBzZWFyY2hBcmdzLFxuICAgICAgKTtcbiAgICAgIC8vIFNvcnRcbiAgICAgIHByb2Nlc3NlZERhdGEuZGF0YSA9IG1vY2tTb3J0TG9naWMoXG4gICAgICAgIHByb2Nlc3NlZERhdGEuZGF0YSxcbiAgICAgICAgZGF0YXNvdXJjZS5zb3J0QXJndW1lbnRzLFxuICAgICAgKTtcbiAgICAgIC8vIFBhZ2luYXRpb25cbiAgICAgIHByb2Nlc3NlZERhdGEuZGF0YSA9IHByb2Nlc3NlZERhdGEuZGF0YS5zbGljZShcbiAgICAgICAgKGRhdGFzb3VyY2UucGFnZSAtIDEpICogZGF0YXNvdXJjZS5zaXplLFxuICAgICAgICBkYXRhc291cmNlLnBhZ2UgKiBkYXRhc291cmNlLnNpemUsXG4gICAgICApO1xuICAgICAgcmVzb2x2ZShwcm9jZXNzZWREYXRhKTtcbiAgICB9LCAxMDAwKTsgLy8gVGltZW91dCBzaW11bGF0ZXMgdGhlIEFKQVggZGVsYXlcbiAgfSkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGRhdGEsIHNlYXJjaEFyZ3VtZW50cykge1xuICBpZiAoIXNlYXJjaEFyZ3VtZW50cykge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzZWFyY2hBcmd1bWVudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgLy8gU2ltcGxlIHNlYXJjaCBsb2dpYyBieSBkb2luZ1xuICAgICAgLy8gYSB0ZXh0IHNlYXJjaCBvbiB0aGUgY29uY2F0ZW5hdGlvblxuICAgICAgLy8gb2YgYWxsIHRoZSBzZWFyY2hhYmxlIGZpZWxkc1xuICAgICAgY29uc3Qgc2VhcmNoYWJsZVRleHQgPSBgJHt2YWx1ZS5maXJzdE5hbWVcbiAgICAgIH0gJHt2YWx1ZS5sYXN0TmFtZVxuICAgICAgfSAke3ZhbHVlLmpvYlxuICAgICAgfSAke3ZhbHVlLmdlbmRlcn1gO1xuICAgICAgcmV0dXJuIHNlYXJjaGFibGVUZXh0LmluZGV4T2Yoc2VhcmNoQXJndW1lbnRzKSA+IC0xO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhzZWFyY2hBcmd1bWVudHMpO1xuICByZXR1cm4gZGF0YS5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzZWFyY2hGaWVsZE5hbWUgPSBlbnRyaWVzW2ldWzBdO1xuICAgICAgY29uc3Qgc2VhcmNoVmFsdWUgPSBlbnRyaWVzW2ldWzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgICBsZXQgc2VhcmNoYWJsZVRleHQgPSB2YWx1ZVtzZWFyY2hGaWVsZE5hbWVdO1xuICAgICAgaWYgKCFzZWFyY2hhYmxlVGV4dCB8fCAhc2VhcmNoVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgc2VhcmNoYWJsZVRleHQgPSB0eXBlb2Ygc2VhcmNoYWJsZVRleHQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gc2VhcmNoYWJsZVRleHQudG9Mb3dlckNhc2UoKVxuICAgICAgICA6IHNlYXJjaGFibGVUZXh0LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChzZWFyY2hhYmxlVGV4dC5pbmRleE9mKHNlYXJjaFZhbHVlKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGF0YSwgc29ydEFyZ3VtZW50cykge1xuICBpZiAoIXNvcnRBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuICBsZXQgY2xvbmVkRGF0YSA9IFsgLi4uZGF0YSBdO1xuICBjbG9uZWREYXRhLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoc29ydEFyZ3VtZW50cyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzb3J0RmllbGROYW1lID0gZW50cmllc1tpXVswXTtcbiAgICAgIGNvbnN0IHNvcnREaXJlY3Rpb24gPSBlbnRyaWVzW2ldWzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoc29ydERpcmVjdGlvbiA9PT0gJ2FzYycgfHwgc29ydERpcmVjdGlvbiA9PT0gJ2FzY2VuZGluZycpIHtcbiAgICAgICAgaWYgKGFbc29ydEZpZWxkTmFtZV0gPiBiW3NvcnRGaWVsZE5hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbc29ydEZpZWxkTmFtZV0gPCBiW3NvcnRGaWVsZE5hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNvcnREaXJlY3Rpb24gPT09ICdkZXNjJyB8fCBzb3J0RGlyZWN0aW9uID09PSAnZGVzY2VuZGluZycpIHtcbiAgICAgICAgaWYgKGFbc29ydEZpZWxkTmFtZV0gPCBiW3NvcnRGaWVsZE5hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbc29ydEZpZWxkTmFtZV0gPiBiW3NvcnRGaWVsZE5hbWVdKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9KTtcbiAgcmV0dXJuIGNsb25lZERhdGE7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgICBsYXN0TmFtZTogJ1NtaXRoJyxcbiAgICBqb2I6ICdXZWIgRGV2ZWxvcGVyJyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGZpcnN0TmFtZTogJ01hcnknLFxuICAgIGxhc3ROYW1lOiAnSmFuZScsXG4gICAgam9iOiAnVUkgRGVzaWduZXInLFxuICAgIGdlbmRlcjogJ0ZlbWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBmaXJzdE5hbWU6ICdKaW4nLFxuICAgIGxhc3ROYW1lOiAnS2F6dW1hJyxcbiAgICBqb2I6ICdNYW5hZ2VyJyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGZpcnN0TmFtZTogJ1N5ZCcsXG4gICAgbGFzdE5hbWU6ICdBcmluZ2EnLFxuICAgIGpvYjogJ1Rlc3RlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICBmaXJzdE5hbWU6ICdSb3NlbWFyeScsXG4gICAgbGFzdE5hbWU6ICdUcm9uJyxcbiAgICBqb2I6ICdUZXN0ZXInLFxuICAgIGdlbmRlcjogJ0ZlbWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogNixcbiAgICBmaXJzdE5hbWU6ICdKaW1teScsXG4gICAgbGFzdE5hbWU6ICdOZXV0cm9uJyxcbiAgICBqb2I6ICdTY2llbnRpc3QnLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDcsXG4gICAgZmlyc3ROYW1lOiAnQmF4JyxcbiAgICBsYXN0TmFtZTogJ0RleHRlcicsXG4gICAgam9iOiAnU2NpZW50aXN0JyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiA4LFxuICAgIGZpcnN0TmFtZTogJ0FsaWNlJyxcbiAgICBsYXN0TmFtZTogJ1NwcmluZ3MnLFxuICAgIGpvYjogJ1dhaXRyZXNzJyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDksXG4gICAgZmlyc3ROYW1lOiAnSmFrZScsXG4gICAgbGFzdE5hbWU6ICdDb3Juc3dvcnRoJyxcbiAgICBqb2I6ICdXZWIgRGV2ZWxvcGVyJyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAxMCxcbiAgICBmaXJzdE5hbWU6ICdKYW1lcycsXG4gICAgbGFzdE5hbWU6ICdIdW50c21hbicsXG4gICAgam9iOiAnQ0VPJyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAxMSxcbiAgICBmaXJzdE5hbWU6ICdKYWNrJyxcbiAgICBsYXN0TmFtZTogJ1NtaXRoJyxcbiAgICBqb2I6ICdNYW5hZ2VyJyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAxMixcbiAgICBmaXJzdE5hbWU6ICdFbGl6YScsXG4gICAgbGFzdE5hbWU6ICdCZXRoYW5kbycsXG4gICAgam9iOiAnTWFuYWdlcicsXG4gICAgZ2VuZGVyOiAnRmVtYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAxMyxcbiAgICBmaXJzdE5hbWU6ICdPbWFyJyxcbiAgICBsYXN0TmFtZTogJ01vaGFtbWVkJyxcbiAgICBqb2I6ICdNYW5hZ2VyJyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiAxNCxcbiAgICBmaXJzdE5hbWU6ICdNaWtlJyxcbiAgICBsYXN0TmFtZTogJ1RpbGVzb24nLFxuICAgIGpvYjogJ0JveGVyJyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAxNSxcbiAgICBmaXJzdE5hbWU6ICdKYW1lcycsXG4gICAgbGFzdE5hbWU6ICdDb290JyxcbiAgICBqb2I6ICdTYWlsb3InLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDE2LFxuICAgIGZpcnN0TmFtZTogJ0plYW4nLFxuICAgIGxhc3ROYW1lOiAnRGFyaycsXG4gICAgam9iOiAnU2FpbnQnLFxuICAgIGdlbmRlcjogJ0ZlbWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogMTcsXG4gICAgZmlyc3ROYW1lOiAnS2F0JyxcbiAgICBsYXN0TmFtZTogJ1RydWRnZXInLFxuICAgIGpvYjogJ0NvbnN1bHRhbnQnLFxuICAgIGdlbmRlcjogJ0ZlbWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTgsXG4gICAgZmlyc3ROYW1lOiAnVGlua2VyJyxcbiAgICBsYXN0TmFtZTogJ0JlbGxhJyxcbiAgICBqb2I6ICdBc3Npc3RhbnQnLFxuICAgIGdlbmRlcjogJ0ZlbWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTksXG4gICAgZmlyc3ROYW1lOiAnUGV0ZXInLFxuICAgIGxhc3ROYW1lOiAnUGVuJyxcbiAgICBqb2I6ICdTaGlwIENhcHRhaW4nLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDIwLFxuICAgIGZpcnN0TmFtZTogJ1BpbmEnLFxuICAgIGxhc3ROYW1lOiAnRWluc3dvcnRoeScsXG4gICAgam9iOiAnVGVzdGVyJyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDIxLFxuICAgIGZpcnN0TmFtZTogJ0phY2t5JyxcbiAgICBsYXN0TmFtZTogJ0phbicsXG4gICAgam9iOiAnQXJ0aXN0JyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiAyMixcbiAgICBmaXJzdE5hbWU6ICdIZWx2ZXRpY2EnLFxuICAgIGxhc3ROYW1lOiAnSGVsbW90JyxcbiAgICBqb2I6ICdEZXNpZ25lcicsXG4gICAgZ2VuZGVyOiAnRmVtYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAyMyxcbiAgICBmaXJzdE5hbWU6ICdSb3VnZXInLFxuICAgIGxhc3ROYW1lOiAnRmVkb3JhbicsXG4gICAgam9iOiAnVGVubmlzIFBsYXllcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMjQsXG4gICAgZmlyc3ROYW1lOiAnSnVzdGluJyxcbiAgICBsYXN0TmFtZTogJ0xpZWx2ZXInLFxuICAgIGpvYjogJ011c2ljIEFydGlzdCcsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
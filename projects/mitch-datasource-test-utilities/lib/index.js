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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9NaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01pdGNoRGF0YXNvdXJjZVRlc3RVdGlsaXRpZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vTWl0Y2hEYXRhc291cmNlVGVzdFV0aWxpdGllcy8uL3NyYy9qcy9tb2NrLWFqYXgtY2FsbC5qcyIsIndlYnBhY2s6Ly9NaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzLy4vc3JjL2pzL21vY2stZmlsdGVyLWxvZ2ljLmpzIiwid2VicGFjazovL01pdGNoRGF0YXNvdXJjZVRlc3RVdGlsaXRpZXMvLi9zcmMvanMvbW9jay1zb3J0LWxvZ2ljLmpzIiwid2VicGFjazovL01pdGNoRGF0YXNvdXJjZVRlc3RVdGlsaXRpZXMvLi9zcmMvanMvc3R1Yi1kYXRhLWFycmF5LmpzIl0sIm5hbWVzIjpbInN0dWJEYXRhQXJyYXkiLCJtb2NrQWpheENhbGwiLCJtb2NrRmlsdGVyTG9naWMiLCJtb2NrU29ydExvZ2ljIiwiZGF0YXNvdXJjZSIsImFsbERhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJwcm9jZXNzZWREYXRhIiwiZGF0YSIsInRvdGFsIiwibGVuZ3RoIiwic2VhcmNoQXJncyIsInNlYXJjaEFyZ3VtZW50cyIsInNlYXJjaFRleHQiLCJzb3J0QXJndW1lbnRzIiwic2xpY2UiLCJwYWdlIiwic2l6ZSIsImZpbHRlciIsInZhbHVlIiwic2VhcmNoYWJsZVRleHQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImpvYiIsImdlbmRlciIsImluZGV4T2YiLCJlbnRyaWVzIiwiT2JqZWN0IiwiaSIsInNlYXJjaEZpZWxkTmFtZSIsInNlYXJjaFZhbHVlIiwidG9Mb3dlckNhc2UiLCJ0b1N0cmluZyIsImNsb25lZERhdGEiLCJzb3J0IiwiYSIsImIiLCJzb3J0RmllbGROYW1lIiwic29ydERpcmVjdGlvbiIsImlkIiwiaGFzQ2l0aXplbnNoaXAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlO0FBQ2JBLGVBQWEsRUFBYkEsMkRBRGE7QUFFYkMsY0FBWSxFQUFaQSwwREFGYTtBQUdiQyxpQkFBZSxFQUFmQSw2REFIYTtBQUliQyxlQUFhLEVBQWJBLDJEQUFhQTtBQUpBLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLHlFQUFVQyxVQUFWLEVBQXNCQyxPQUF0QixFQUErQjtBQUM1QyxTQUFPLElBQUlDLE9B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T0FGYjtBQUdFQyxVQUFRLEVBQUUsS0FIWjtBQUlFQyxLQUFHLEVBQUUsY0FKUDtBQUtFQyxRQUFNLEVBQUUsTUFMVjtBQU1FZ0IsZ0JBQWMsRUFBRTtBQU5sQixDQWpKYSxFQXlKYjtBQUNFRCxJQUFFLEVBQUUsRUFETjtBQUVFbEIsV0FBUyxFQUFFLE1BRmI7QUFHRUMsVUFBUSxFQUFFLFlBSFo7QUFJRUMsS0FBRyxFQUFFLFFBSlA7QUFLRUMsUUFBTSxFQUFFLFFBTFY7QUFNRWdCLGdCQUFjLEVBQUU7QUFObEIsQ0F6SmEsRUFpS2I7QUFDRUQsSUFBRSxFQUFFLEVBRE47QUFFRWxCLFdBQVMsRUFBRSxPQUZiO0FBR0VDLFVBQVEsRUFBRSxLQUhaO0FBSUVDLEtBQUcsRUFBRSxRQUpQO0FBS0VDLFFBQU0sRUFBRSxNQUxWO0FBTUVnQixnQkFBYyxFQUFFO0FBTmxCLENBakthLEVBeUtiO0FBQ0VELElBQUUsRUFBRSxFQUROO0FBRUVsQixXQUFTLEVBQUUsV0FGYjtBQUdFQyxVQUFRLEVBQUUsUUFIWjtBQUlFQyxLQUFHLEVBQUUsVUFKUDtBQUtFQyxRQUFNLEVBQUUsUUFMVjtBQU1FZ0IsZ0JBQWMsRUFBRTtBQU5sQixDQXpLYSxFQWlMYjtBQUNFRCxJQUFFLEVBQUUsRUFETjtBQUVFbEIsV0FBUyxFQUFFLFFBRmI7QUFHRUMsVUFBUSxFQUFFLFNBSFo7QUFJRUMsS0FBRyxFQUFFLGVBSlA7QUFLRUMsUUFBTSxFQUFFLE1BTFY7QUFNRWdCLGdCQUFjLEVBQUU7QUFObEIsQ0FqTGEsRUF5TGI7QUFDRUQsSUFBRSxFQUFFLEVBRE47QUFFRWxCLFdBQVMsRUFBRSxRQUZiO0FBR0VDLFVBQVEsRUFBRSxTQUhaO0FBSUVDLEtBQUcsRUFBRSxjQUpQO0FBS0VDLFFBQU0sRUFBRSxNQUxWO0FBTUVnQixnQkFBYyxFQUFFO0FBTmxCLENBekxhLENBQWYsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibWl0Y2hkYXRhc291cmNldGVzdHV0aWxpdGllc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaXRjaGRhdGFzb3VyY2V0ZXN0dXRpbGl0aWVzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk1pdGNoRGF0YXNvdXJjZVRlc3RVdGlsaXRpZXNcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBzdHViRGF0YUFycmF5IGZyb20gJy4vanMvc3R1Yi1kYXRhLWFycmF5JztcbmltcG9ydCBtb2NrQWpheENhbGwgZnJvbSAnLi9qcy9tb2NrLWFqYXgtY2FsbCc7XG5pbXBvcnQgbW9ja0ZpbHRlckxvZ2ljIGZyb20gJy4vanMvbW9jay1maWx0ZXItbG9naWMnO1xuaW1wb3J0IG1vY2tTb3J0TG9naWMgZnJvbSAnLi9qcy9tb2NrLXNvcnQtbG9naWMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0dWJEYXRhQXJyYXksXG4gIG1vY2tBamF4Q2FsbCxcbiAgbW9ja0ZpbHRlckxvZ2ljLFxuICBtb2NrU29ydExvZ2ljLFxufTtcbiIsImltcG9ydCBtb2NrRmlsdGVyTG9naWMgZnJvbSAnLi9tb2NrLWZpbHRlci1sb2dpYyc7XG5pbXBvcnQgbW9ja1NvcnRMb2dpYyBmcm9tICcuL21vY2stc29ydC1sb2dpYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkYXRhc291cmNlLCBhbGxEYXRhKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSB7XG4gICAgICAgIGRhdGE6IGFsbERhdGEsXG4gICAgICAgIHRvdGFsOiBhbGxEYXRhLmxlbmd0aCxcbiAgICAgIH07XG4gICAgICAvLyBGaWx0ZXJcbiAgICAgIGNvbnN0IHNlYXJjaEFyZ3MgPSBkYXRhc291cmNlLnNlYXJjaEFyZ3VtZW50cyB8fCBkYXRhc291cmNlLnNlYXJjaFRleHQ7XG4gICAgICBwcm9jZXNzZWREYXRhLmRhdGEgPSBtb2NrRmlsdGVyTG9naWMoXG4gICAgICAgIHByb2Nlc3NlZERhdGEuZGF0YSxcbiAgICAgICAgc2VhcmNoQXJncyxcbiAgICAgICk7XG4gICAgICAvLyBTb3J0XG4gICAgICBwcm9jZXNzZWREYXRhLmRhdGEgPSBtb2NrU29ydExvZ2ljKFxuICAgICAgICBwcm9jZXNzZWREYXRhLmRhdGEsXG4gICAgICAgIGRhdGFzb3VyY2Uuc29ydEFyZ3VtZW50cyxcbiAgICAgICk7XG4gICAgICAvLyBQYWdpbmF0aW9uXG4gICAgICBwcm9jZXNzZWREYXRhLmRhdGEgPSBwcm9jZXNzZWREYXRhLmRhdGEuc2xpY2UoXG4gICAgICAgIChkYXRhc291cmNlLnBhZ2UgLSAxKSAqIGRhdGFzb3VyY2Uuc2l6ZSxcbiAgICAgICAgZGF0YXNvdXJjZS5wYWdlICogZGF0YXNvdXJjZS5zaXplLFxuICAgICAgKTtcbiAgICAgIHJlc29sdmUocHJvY2Vzc2VkRGF0YSk7XG4gICAgfSwgMTAwMCk7IC8vIFRpbWVvdXQgc2ltdWxhdGVzIHRoZSBBSkFYIGRlbGF5XG4gIH0pKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkYXRhLCBzZWFyY2hBcmd1bWVudHMpIHtcbiAgaWYgKCFzZWFyY2hBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2VhcmNoQXJndW1lbnRzID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkYXRhLmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgIC8vIFNpbXBsZSBzZWFyY2ggbG9naWMgYnkgZG9pbmdcbiAgICAgIC8vIGEgdGV4dCBzZWFyY2ggb24gdGhlIGNvbmNhdGVuYXRpb25cbiAgICAgIC8vIG9mIGFsbCB0aGUgc2VhcmNoYWJsZSBmaWVsZHNcbiAgICAgIGNvbnN0IHNlYXJjaGFibGVUZXh0ID0gYCR7dmFsdWUuZmlyc3ROYW1lXG4gICAgICB9ICR7dmFsdWUubGFzdE5hbWVcbiAgICAgIH0gJHt2YWx1ZS5qb2JcbiAgICAgIH0gJHt2YWx1ZS5nZW5kZXJ9YDtcbiAgICAgIHJldHVybiBzZWFyY2hhYmxlVGV4dC5pbmRleE9mKHNlYXJjaEFyZ3VtZW50cykgPiAtMTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoc2VhcmNoQXJndW1lbnRzKTtcbiAgcmV0dXJuIGRhdGEuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc2VhcmNoRmllbGROYW1lID0gZW50cmllc1tpXVswXTtcbiAgICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gZW50cmllc1tpXVsxXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgbGV0IHNlYXJjaGFibGVUZXh0ID0gdmFsdWVbc2VhcmNoRmllbGROYW1lXTtcbiAgICAgIGlmICghc2VhcmNoYWJsZVRleHQgfHwgIXNlYXJjaFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHNlYXJjaGFibGVUZXh0ID0gdHlwZW9mIHNlYXJjaGFibGVUZXh0ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHNlYXJjaGFibGVUZXh0LnRvTG93ZXJDYXNlKClcbiAgICAgICAgOiBzZWFyY2hhYmxlVGV4dC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoc2VhcmNoYWJsZVRleHQuaW5kZXhPZihzZWFyY2hWYWx1ZSkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGRhdGEsIHNvcnRBcmd1bWVudHMpIHtcbiAgaWYgKCFzb3J0QXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbiAgY29uc3QgY2xvbmVkRGF0YSA9IFsuLi5kYXRhXTtcbiAgY2xvbmVkRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHNvcnRBcmd1bWVudHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc29ydEZpZWxkTmFtZSA9IGVudHJpZXNbaV1bMF07XG4gICAgICBjb25zdCBzb3J0RGlyZWN0aW9uID0gZW50cmllc1tpXVsxXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHNvcnREaXJlY3Rpb24gPT09ICdhc2MnIHx8IHNvcnREaXJlY3Rpb24gPT09ICdhc2NlbmRpbmcnKSB7XG4gICAgICAgIGlmIChhW3NvcnRGaWVsZE5hbWVdID4gYltzb3J0RmllbGROYW1lXSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3NvcnRGaWVsZE5hbWVdIDwgYltzb3J0RmllbGROYW1lXSkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzb3J0RGlyZWN0aW9uID09PSAnZGVzYycgfHwgc29ydERpcmVjdGlvbiA9PT0gJ2Rlc2NlbmRpbmcnKSB7XG4gICAgICAgIGlmIChhW3NvcnRGaWVsZE5hbWVdIDwgYltzb3J0RmllbGROYW1lXSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3NvcnRGaWVsZE5hbWVdID4gYltzb3J0RmllbGROYW1lXSkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSk7XG4gIHJldHVybiBjbG9uZWREYXRhO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgZmlyc3ROYW1lOiAnSm9obicsXG4gICAgbGFzdE5hbWU6ICdTbWl0aCcsXG4gICAgam9iOiAnV2ViIERldmVsb3BlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBmaXJzdE5hbWU6ICdNYXJ5JyxcbiAgICBsYXN0TmFtZTogJ0phbmUnLFxuICAgIGpvYjogJ1VJIERlc2lnbmVyJyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgZmlyc3ROYW1lOiAnSmluJyxcbiAgICBsYXN0TmFtZTogJ0thenVtYScsXG4gICAgam9iOiAnTWFuYWdlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBmaXJzdE5hbWU6ICdTeWQnLFxuICAgIGxhc3ROYW1lOiAnQXJpbmdhJyxcbiAgICBqb2I6ICdUZXN0ZXInLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgZmlyc3ROYW1lOiAnUm9zZW1hcnknLFxuICAgIGxhc3ROYW1lOiAnVHJvbicsXG4gICAgam9iOiAnVGVzdGVyJyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgZmlyc3ROYW1lOiAnSmltbXknLFxuICAgIGxhc3ROYW1lOiAnTmV1dHJvbicsXG4gICAgam9iOiAnU2NpZW50aXN0JyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiA3LFxuICAgIGZpcnN0TmFtZTogJ0JheCcsXG4gICAgbGFzdE5hbWU6ICdEZXh0ZXInLFxuICAgIGpvYjogJ1NjaWVudGlzdCcsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogOCxcbiAgICBmaXJzdE5hbWU6ICdBbGljZScsXG4gICAgbGFzdE5hbWU6ICdTcHJpbmdzJyxcbiAgICBqb2I6ICdXYWl0cmVzcycsXG4gICAgZ2VuZGVyOiAnRmVtYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiA5LFxuICAgIGZpcnN0TmFtZTogJ0pha2UnLFxuICAgIGxhc3ROYW1lOiAnQ29ybnN3b3J0aCcsXG4gICAgam9iOiAnV2ViIERldmVsb3BlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTAsXG4gICAgZmlyc3ROYW1lOiAnSmFtZXMnLFxuICAgIGxhc3ROYW1lOiAnSHVudHNtYW4nLFxuICAgIGpvYjogJ0NFTycsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTEsXG4gICAgZmlyc3ROYW1lOiAnSmFjaycsXG4gICAgbGFzdE5hbWU6ICdTbWl0aCcsXG4gICAgam9iOiAnTWFuYWdlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTIsXG4gICAgZmlyc3ROYW1lOiAnRWxpemEnLFxuICAgIGxhc3ROYW1lOiAnQmV0aGFuZG8nLFxuICAgIGpvYjogJ01hbmFnZXInLFxuICAgIGdlbmRlcjogJ0ZlbWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTMsXG4gICAgZmlyc3ROYW1lOiAnT21hcicsXG4gICAgbGFzdE5hbWU6ICdNb2hhbW1lZCcsXG4gICAgam9iOiAnTWFuYWdlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogMTQsXG4gICAgZmlyc3ROYW1lOiAnTWlrZScsXG4gICAgbGFzdE5hbWU6ICdUaWxlc29uJyxcbiAgICBqb2I6ICdCb3hlcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTUsXG4gICAgZmlyc3ROYW1lOiAnSmFtZXMnLFxuICAgIGxhc3ROYW1lOiAnQ29vdCcsXG4gICAgam9iOiAnU2FpbG9yJyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAxNixcbiAgICBmaXJzdE5hbWU6ICdKZWFuJyxcbiAgICBsYXN0TmFtZTogJ0RhcmsnLFxuICAgIGpvYjogJ1NhaW50JyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDE3LFxuICAgIGZpcnN0TmFtZTogJ0thdCcsXG4gICAgbGFzdE5hbWU6ICdUcnVkZ2VyJyxcbiAgICBqb2I6ICdDb25zdWx0YW50JyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDE4LFxuICAgIGZpcnN0TmFtZTogJ1RpbmtlcicsXG4gICAgbGFzdE5hbWU6ICdCZWxsYScsXG4gICAgam9iOiAnQXNzaXN0YW50JyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDE5LFxuICAgIGZpcnN0TmFtZTogJ1BldGVyJyxcbiAgICBsYXN0TmFtZTogJ1BlbicsXG4gICAgam9iOiAnU2hpcCBDYXB0YWluJyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAyMCxcbiAgICBmaXJzdE5hbWU6ICdQaW5hJyxcbiAgICBsYXN0TmFtZTogJ0VpbnN3b3J0aHknLFxuICAgIGpvYjogJ1Rlc3RlcicsXG4gICAgZ2VuZGVyOiAnRmVtYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAyMSxcbiAgICBmaXJzdE5hbWU6ICdKYWNreScsXG4gICAgbGFzdE5hbWU6ICdKYW4nLFxuICAgIGpvYjogJ0FydGlzdCcsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogMjIsXG4gICAgZmlyc3ROYW1lOiAnSGVsdmV0aWNhJyxcbiAgICBsYXN0TmFtZTogJ0hlbG1vdCcsXG4gICAgam9iOiAnRGVzaWduZXInLFxuICAgIGdlbmRlcjogJ0ZlbWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMjMsXG4gICAgZmlyc3ROYW1lOiAnUm91Z2VyJyxcbiAgICBsYXN0TmFtZTogJ0ZlZG9yYW4nLFxuICAgIGpvYjogJ1Rlbm5pcyBQbGF5ZXInLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDI0LFxuICAgIGZpcnN0TmFtZTogJ0p1c3RpbicsXG4gICAgbGFzdE5hbWU6ICdMaWVsdmVyJyxcbiAgICBqb2I6ICdNdXNpYyBBcnRpc3QnLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
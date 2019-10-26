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
/* harmony default export */ __webpack_exports__["default"] = (function (data, sortArguments) {
  if (!sortArguments) {
    return data;
  }

  data.sort(function (a, b) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9NaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01pdGNoRGF0YXNvdXJjZVRlc3RVdGlsaXRpZXMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vTWl0Y2hEYXRhc291cmNlVGVzdFV0aWxpdGllcy8uL3NyYy9qcy9tb2NrLWFqYXgtY2FsbC5qcyIsIndlYnBhY2s6Ly9NaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzLy4vc3JjL2pzL21vY2stZmlsdGVyLWxvZ2ljLmpzIiwid2VicGFjazovL01pdGNoRGF0YXNvdXJjZVRlc3RVdGlsaXRpZXMvLi9zcmMvanMvbW9jay1zb3J0LWxvZ2ljLmpzIiwid2VicGFjazovL01pdGNoRGF0YXNvdXJjZVRlc3RVdGlsaXRpZXMvLi9zcmMvanMvc3R1Yi1kYXRhLWFycmF5LmpzIl0sIm5hbWVzIjpbInN0dWJEYXRhQXJyYXkiLCJtb2NrQWpheENhbGwiLCJtb2NrRmlsdGVyTG9naWMiLCJtb2NrU29ydExvZ2ljIiwiZGF0YXNvdXJjZSIsImFsbERhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJwcm9jZXNzZWREYXRhIiwiZGF0YSIsInRvdGFsIiwibGVuZ3RoIiwic2VhcmNoQXJncyIsInNlYXJjaEFyZ3VtZW50cyIsInNlYXJjaFRleHQiLCJzb3J0QXJndW1lbnRzIiwic2xpY2UiLCJwYWdlIiwic2l6ZSIsImZpbHRlciIsInZhbHVlIiwic2VhcmNoYWJsZVRleHQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImpvYiIsImdlbmRlciIsImluZGV4T2YiLCJlbnRyaWVzIiwiT2JqZWN0IiwiaSIsInNlYXJjaEZpZWxkTmFtZSIsInNlYXJjaFZhbHVlIiwidG9Mb3dlckNhc2UiLCJ0b1N0cmluZyIsInNvcnQiLCJhIiwiYiIsInNvcnRGaWVsZE5hbWUiLCJzb3J0RGlyZWN0aW9uIiwiaWQiLCJoYXNDaXRpemVuc2hpcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWU7QUFDYkEsZUFBYSxFQUFiQSwyREFEYTtBQUViQyxjQUFZLEVBQVpBLDBEQUZhO0FBR2JDLGlCQUFlLEVBQWZBLDZEQUhhO0FBSWJDLGVBQWEsRUFBYkEsMkRBQWFBO0FBSkEsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUseUVBQVVDLFVBQVYsRUFBc0JDLE9BQXRCLEVBQStCO0FBQzVDLFNBQU8sSUFBSUMsT0FBSixDQUFhLFVBQUND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RWUsZ0JBQWMsRUFBRTtBQU5sQixDQWpKYSxFQXlKYjtBQUNFRCxJQUFFLEVBQUUsRUFETjtBQUVFakIsV0FBUyxFQUFFLE1BRmI7QUFHRUMsVUFBUSxFQUFFLFlBSFo7QUFJRUMsS0FBRyxFQUFFLFFBSlA7QUFLRUMsUUFBTSxFQUFFLFFBTFY7QUFNRWUsZ0JBQWMsRUFBRTtBQU5sQixDQXpKYSxFQWlLYjtBQUNFRCxJQUFFLEVBQUUsRUFETjtBQUVFakIsV0FBUyxFQUFFLE9BRmI7QUFHRUMsVUFBUSxFQUFFLEtBSFo7QUFJRUMsS0FBRyxFQUFFLFFBSlA7QUFLRUMsUUFBTSxFQUFFLE1BTFY7QUFNRWUsZ0JBQWMsRUFBRTtBQU5sQixDQWpLYSxFQXlLYjtBQUNFRCxJQUFFLEVBQUUsRUFETjtBQUVFakIsV0FBUyxFQUFFLFdBRmI7QUFHRUMsVUFBUSxFQUFFLFFBSFo7QUFJRUMsS0FBRyxFQUFFLFVBSlA7QUFLRUMsUUFBTSxFQUFFLFFBTFY7QUFNRWUsZ0JBQWMsRUFBRTtBQU5sQixDQXpLYSxFQWlMYjtBQUNFRCxJQUFFLEVBQUUsRUFETjtBQUVFakIsV0FBUyxFQUFFLFFBRmI7QUFHRUMsVUFBUSxFQUFFLFNBSFo7QUFJRUMsS0FBRyxFQUFFLGVBSlA7QUFLRUMsUUFBTSxFQUFFLE1BTFY7QUFNRWUsZ0JBQWMsRUFBRTtBQU5sQixDQWpMYSxFQXlMYjtBQUNFRCxJQUFFLEVBQUUsRUFETjtBQUVFakIsV0FBUyxFQUFFLFFBRmI7QUFHRUMsVUFBUSxFQUFFLFNBSFo7QUFJRUMsS0FBRyxFQUFFLGNBSlA7QUFLRUMsUUFBTSxFQUFFLE1BTFY7QUFNRWUsZ0JBQWMsRUFBRTtBQU5sQixDQXpMYSxDQUFmLEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIm1pdGNoZGF0YXNvdXJjZXRlc3R1dGlsaXRpZXNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWl0Y2hkYXRhc291cmNldGVzdHV0aWxpdGllc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNaXRjaERhdGFzb3VyY2VUZXN0VXRpbGl0aWVzXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgc3R1YkRhdGFBcnJheSBmcm9tICcuL2pzL3N0dWItZGF0YS1hcnJheSc7XG5pbXBvcnQgbW9ja0FqYXhDYWxsIGZyb20gJy4vanMvbW9jay1hamF4LWNhbGwnO1xuaW1wb3J0IG1vY2tGaWx0ZXJMb2dpYyBmcm9tICcuL2pzL21vY2stZmlsdGVyLWxvZ2ljJztcbmltcG9ydCBtb2NrU29ydExvZ2ljIGZyb20gJy4vanMvbW9jay1zb3J0LWxvZ2ljJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdHViRGF0YUFycmF5LFxuICBtb2NrQWpheENhbGwsXG4gIG1vY2tGaWx0ZXJMb2dpYyxcbiAgbW9ja1NvcnRMb2dpYyxcbn07XG4iLCJpbXBvcnQgbW9ja0ZpbHRlckxvZ2ljIGZyb20gJy4vbW9jay1maWx0ZXItbG9naWMnO1xuaW1wb3J0IG1vY2tTb3J0TG9naWMgZnJvbSAnLi9tb2NrLXNvcnQtbG9naWMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGF0YXNvdXJjZSwgYWxsRGF0YSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBwcm9jZXNzZWREYXRhID0ge1xuICAgICAgICBkYXRhOiBhbGxEYXRhLFxuICAgICAgICB0b3RhbDogYWxsRGF0YS5sZW5ndGgsXG4gICAgICB9O1xuICAgICAgLy8gRmlsdGVyXG4gICAgICBjb25zdCBzZWFyY2hBcmdzID0gZGF0YXNvdXJjZS5zZWFyY2hBcmd1bWVudHMgfHwgZGF0YXNvdXJjZS5zZWFyY2hUZXh0O1xuICAgICAgcHJvY2Vzc2VkRGF0YS5kYXRhID0gbW9ja0ZpbHRlckxvZ2ljKFxuICAgICAgICBwcm9jZXNzZWREYXRhLmRhdGEsXG4gICAgICAgIHNlYXJjaEFyZ3MsXG4gICAgICApO1xuICAgICAgLy8gU29ydFxuICAgICAgcHJvY2Vzc2VkRGF0YS5kYXRhID0gbW9ja1NvcnRMb2dpYyhcbiAgICAgICAgcHJvY2Vzc2VkRGF0YS5kYXRhLFxuICAgICAgICBkYXRhc291cmNlLnNvcnRBcmd1bWVudHMsXG4gICAgICApO1xuICAgICAgLy8gUGFnaW5hdGlvblxuICAgICAgcHJvY2Vzc2VkRGF0YS5kYXRhID0gcHJvY2Vzc2VkRGF0YS5kYXRhLnNsaWNlKFxuICAgICAgICAoZGF0YXNvdXJjZS5wYWdlIC0gMSkgKiBkYXRhc291cmNlLnNpemUsXG4gICAgICAgIGRhdGFzb3VyY2UucGFnZSAqIGRhdGFzb3VyY2Uuc2l6ZSxcbiAgICAgICk7XG4gICAgICByZXNvbHZlKHByb2Nlc3NlZERhdGEpO1xuICAgIH0sIDEwMDApOyAvLyBUaW1lb3V0IHNpbXVsYXRlcyB0aGUgQUpBWCBkZWxheVxuICB9KSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGF0YSwgc2VhcmNoQXJndW1lbnRzKSB7XG4gIGlmICghc2VhcmNoQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBpZiAodHlwZW9mIHNlYXJjaEFyZ3VtZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGF0YS5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAvLyBTaW1wbGUgc2VhcmNoIGxvZ2ljIGJ5IGRvaW5nXG4gICAgICAvLyBhIHRleHQgc2VhcmNoIG9uIHRoZSBjb25jYXRlbmF0aW9uXG4gICAgICAvLyBvZiBhbGwgdGhlIHNlYXJjaGFibGUgZmllbGRzXG4gICAgICBjb25zdCBzZWFyY2hhYmxlVGV4dCA9IGAke3ZhbHVlLmZpcnN0TmFtZVxuICAgICAgfSAke3ZhbHVlLmxhc3ROYW1lXG4gICAgICB9ICR7dmFsdWUuam9iXG4gICAgICB9ICR7dmFsdWUuZ2VuZGVyfWA7XG4gICAgICByZXR1cm4gc2VhcmNoYWJsZVRleHQuaW5kZXhPZihzZWFyY2hBcmd1bWVudHMpID4gLTE7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHNlYXJjaEFyZ3VtZW50cyk7XG4gIHJldHVybiBkYXRhLmZpbHRlcigodmFsdWUpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNlYXJjaEZpZWxkTmFtZSA9IGVudHJpZXNbaV1bMF07XG4gICAgICBjb25zdCBzZWFyY2hWYWx1ZSA9IGVudHJpZXNbaV1bMV0udG9Mb3dlckNhc2UoKTtcbiAgICAgIGxldCBzZWFyY2hhYmxlVGV4dCA9IHZhbHVlW3NlYXJjaEZpZWxkTmFtZV07XG4gICAgICBpZiAoIXNlYXJjaGFibGVUZXh0IHx8ICFzZWFyY2hWYWx1ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBzZWFyY2hhYmxlVGV4dCA9IHR5cGVvZiBzZWFyY2hhYmxlVGV4dCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBzZWFyY2hhYmxlVGV4dC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIDogc2VhcmNoYWJsZVRleHQudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHNlYXJjaGFibGVUZXh0LmluZGV4T2Yoc2VhcmNoVmFsdWUpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkYXRhLCBzb3J0QXJndW1lbnRzKSB7XG4gIGlmICghc29ydEFyZ3VtZW50cykge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG4gIGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhzb3J0QXJndW1lbnRzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNvcnRGaWVsZE5hbWUgPSBlbnRyaWVzW2ldWzBdO1xuICAgICAgY29uc3Qgc29ydERpcmVjdGlvbiA9IGVudHJpZXNbaV1bMV0udG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChzb3J0RGlyZWN0aW9uID09PSAnYXNjJyB8fCBzb3J0RGlyZWN0aW9uID09PSAnYXNjZW5kaW5nJykge1xuICAgICAgICBpZiAoYVtzb3J0RmllbGROYW1lXSA+IGJbc29ydEZpZWxkTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtzb3J0RmllbGROYW1lXSA8IGJbc29ydEZpZWxkTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc29ydERpcmVjdGlvbiA9PT0gJ2Rlc2MnIHx8IHNvcnREaXJlY3Rpb24gPT09ICdkZXNjZW5kaW5nJykge1xuICAgICAgICBpZiAoYVtzb3J0RmllbGROYW1lXSA8IGJbc29ydEZpZWxkTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtzb3J0RmllbGROYW1lXSA+IGJbc29ydEZpZWxkTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGZpcnN0TmFtZTogJ0pvaG4nLFxuICAgIGxhc3ROYW1lOiAnU21pdGgnLFxuICAgIGpvYjogJ1dlYiBEZXZlbG9wZXInLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgZmlyc3ROYW1lOiAnTWFyeScsXG4gICAgbGFzdE5hbWU6ICdKYW5lJyxcbiAgICBqb2I6ICdVSSBEZXNpZ25lcicsXG4gICAgZ2VuZGVyOiAnRmVtYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGZpcnN0TmFtZTogJ0ppbicsXG4gICAgbGFzdE5hbWU6ICdLYXp1bWEnLFxuICAgIGpvYjogJ01hbmFnZXInLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgZmlyc3ROYW1lOiAnU3lkJyxcbiAgICBsYXN0TmFtZTogJ0FyaW5nYScsXG4gICAgam9iOiAnVGVzdGVyJyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIGZpcnN0TmFtZTogJ1Jvc2VtYXJ5JyxcbiAgICBsYXN0TmFtZTogJ1Ryb24nLFxuICAgIGpvYjogJ1Rlc3RlcicsXG4gICAgZ2VuZGVyOiAnRmVtYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiA2LFxuICAgIGZpcnN0TmFtZTogJ0ppbW15JyxcbiAgICBsYXN0TmFtZTogJ05ldXRyb24nLFxuICAgIGpvYjogJ1NjaWVudGlzdCcsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogNyxcbiAgICBmaXJzdE5hbWU6ICdCYXgnLFxuICAgIGxhc3ROYW1lOiAnRGV4dGVyJyxcbiAgICBqb2I6ICdTY2llbnRpc3QnLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDgsXG4gICAgZmlyc3ROYW1lOiAnQWxpY2UnLFxuICAgIGxhc3ROYW1lOiAnU3ByaW5ncycsXG4gICAgam9iOiAnV2FpdHJlc3MnLFxuICAgIGdlbmRlcjogJ0ZlbWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogOSxcbiAgICBmaXJzdE5hbWU6ICdKYWtlJyxcbiAgICBsYXN0TmFtZTogJ0Nvcm5zd29ydGgnLFxuICAgIGpvYjogJ1dlYiBEZXZlbG9wZXInLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDEwLFxuICAgIGZpcnN0TmFtZTogJ0phbWVzJyxcbiAgICBsYXN0TmFtZTogJ0h1bnRzbWFuJyxcbiAgICBqb2I6ICdDRU8nLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDExLFxuICAgIGZpcnN0TmFtZTogJ0phY2snLFxuICAgIGxhc3ROYW1lOiAnU21pdGgnLFxuICAgIGpvYjogJ01hbmFnZXInLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDEyLFxuICAgIGZpcnN0TmFtZTogJ0VsaXphJyxcbiAgICBsYXN0TmFtZTogJ0JldGhhbmRvJyxcbiAgICBqb2I6ICdNYW5hZ2VyJyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDEzLFxuICAgIGZpcnN0TmFtZTogJ09tYXInLFxuICAgIGxhc3ROYW1lOiAnTW9oYW1tZWQnLFxuICAgIGpvYjogJ01hbmFnZXInLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDE0LFxuICAgIGZpcnN0TmFtZTogJ01pa2UnLFxuICAgIGxhc3ROYW1lOiAnVGlsZXNvbicsXG4gICAgam9iOiAnQm94ZXInLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDE1LFxuICAgIGZpcnN0TmFtZTogJ0phbWVzJyxcbiAgICBsYXN0TmFtZTogJ0Nvb3QnLFxuICAgIGpvYjogJ1NhaWxvcicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMTYsXG4gICAgZmlyc3ROYW1lOiAnSmVhbicsXG4gICAgbGFzdE5hbWU6ICdEYXJrJyxcbiAgICBqb2I6ICdTYWludCcsXG4gICAgZ2VuZGVyOiAnRmVtYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiAxNyxcbiAgICBmaXJzdE5hbWU6ICdLYXQnLFxuICAgIGxhc3ROYW1lOiAnVHJ1ZGdlcicsXG4gICAgam9iOiAnQ29uc3VsdGFudCcsXG4gICAgZ2VuZGVyOiAnRmVtYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAxOCxcbiAgICBmaXJzdE5hbWU6ICdUaW5rZXInLFxuICAgIGxhc3ROYW1lOiAnQmVsbGEnLFxuICAgIGpvYjogJ0Fzc2lzdGFudCcsXG4gICAgZ2VuZGVyOiAnRmVtYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAxOSxcbiAgICBmaXJzdE5hbWU6ICdQZXRlcicsXG4gICAgbGFzdE5hbWU6ICdQZW4nLFxuICAgIGpvYjogJ1NoaXAgQ2FwdGFpbicsXG4gICAgZ2VuZGVyOiAnTWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMjAsXG4gICAgZmlyc3ROYW1lOiAnUGluYScsXG4gICAgbGFzdE5hbWU6ICdFaW5zd29ydGh5JyxcbiAgICBqb2I6ICdUZXN0ZXInLFxuICAgIGdlbmRlcjogJ0ZlbWFsZScsXG4gICAgaGFzQ2l0aXplbnNoaXA6IDEsXG4gIH0sXG4gIHtcbiAgICBpZDogMjEsXG4gICAgZmlyc3ROYW1lOiAnSmFja3knLFxuICAgIGxhc3ROYW1lOiAnSmFuJyxcbiAgICBqb2I6ICdBcnRpc3QnLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDIyLFxuICAgIGZpcnN0TmFtZTogJ0hlbHZldGljYScsXG4gICAgbGFzdE5hbWU6ICdIZWxtb3QnLFxuICAgIGpvYjogJ0Rlc2lnbmVyJyxcbiAgICBnZW5kZXI6ICdGZW1hbGUnLFxuICAgIGhhc0NpdGl6ZW5zaGlwOiAxLFxuICB9LFxuICB7XG4gICAgaWQ6IDIzLFxuICAgIGZpcnN0TmFtZTogJ1JvdWdlcicsXG4gICAgbGFzdE5hbWU6ICdGZWRvcmFuJyxcbiAgICBqb2I6ICdUZW5uaXMgUGxheWVyJyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbiAge1xuICAgIGlkOiAyNCxcbiAgICBmaXJzdE5hbWU6ICdKdXN0aW4nLFxuICAgIGxhc3ROYW1lOiAnTGllbHZlcicsXG4gICAgam9iOiAnTXVzaWMgQXJ0aXN0JyxcbiAgICBnZW5kZXI6ICdNYWxlJyxcbiAgICBoYXNDaXRpemVuc2hpcDogMSxcbiAgfSxcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9
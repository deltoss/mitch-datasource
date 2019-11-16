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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/stub-data-array.js
/* harmony default export */ var stub_data_array = ([{
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
// CONCATENATED MODULE: ./src/js/mock-filter-logic.js
/* harmony default export */ var mock_filter_logic = (function (data, searchArguments) {
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
// CONCATENATED MODULE: ./src/js/mock-sort-logic.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* harmony default export */ var mock_sort_logic = (function (data, sortArguments) {
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
// CONCATENATED MODULE: ./src/js/mock-ajax-call.js


/* harmony default export */ var mock_ajax_call = (function (datasource, allData) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var processedData = {
        data: allData,
        total: allData.length
      }; // Filter

      var searchArgs = datasource.searchArguments || datasource.searchText;
      processedData.data = mock_filter_logic(processedData.data, searchArgs); // Sort

      processedData.data = mock_sort_logic(processedData.data, datasource.sortArguments); // Pagination

      processedData.data = processedData.data.slice((datasource.page - 1) * datasource.size, datasource.page * datasource.size);
      resolve(processedData);
    }, 1000); // Timeout simulates the AJAX delay
  });
});
// CONCATENATED MODULE: ./src/index.js




/* harmony default export */ var src = __webpack_exports__["default"] = ({
  stubDataArray: stub_data_array,
  mockAjaxCall: mock_ajax_call,
  mockFilterLogic: mock_filter_logic,
  mockSortLogic: mock_sort_logic
});

/***/ })
/******/ ])["default"];
});
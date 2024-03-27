"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jss-plugin-nested";
exports.ids = ["vendor-chunks/jss-plugin-nested"];
exports.modules = {

/***/ "(ssr)/./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-warning */ \"(ssr)/./node_modules/tiny-warning/dist/tiny-warning.esm.js\");\n\n\n\nvar separatorRegExp = /\\s*,\\s*/g;\nvar parentRegExp = /&/g;\nvar refRegExp = /\\$([\\w-]+)/g;\n/**\n * Convert nested rules to separate, remove them from original styles.\n */\n\nfunction jssNested() {\n  // Get a function to be used for $ref replacement.\n  function getReplaceRef(container, sheet) {\n    return function (match, key) {\n      var rule = container.getRule(key) || sheet && sheet.getRule(key);\n\n      if (rule) {\n        return rule.selector;\n      }\n\n       true ? (0,tiny_warning__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false, \"[JSS] Could not find the referenced rule \\\"\" + key + \"\\\" in \\\"\" + (container.options.meta || container.toString()) + \"\\\".\") : 0;\n      return key;\n    };\n  }\n\n  function replaceParentRefs(nestedProp, parentProp) {\n    var parentSelectors = parentProp.split(separatorRegExp);\n    var nestedSelectors = nestedProp.split(separatorRegExp);\n    var result = '';\n\n    for (var i = 0; i < parentSelectors.length; i++) {\n      var parent = parentSelectors[i];\n\n      for (var j = 0; j < nestedSelectors.length; j++) {\n        var nested = nestedSelectors[j];\n        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.\n\n        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + \" \" + nested;\n      }\n    }\n\n    return result;\n  }\n\n  function getOptions(rule, container, prevOptions) {\n    // Options has been already created, now we only increase index.\n    if (prevOptions) return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, prevOptions, {\n      index: prevOptions.index + 1\n    });\n    var nestingLevel = rule.options.nestingLevel;\n    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;\n\n    var options = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, rule.options, {\n      nestingLevel: nestingLevel,\n      index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.\n\n    });\n\n    delete options.name;\n    return options;\n  }\n\n  function onProcessStyle(style, rule, sheet) {\n    if (rule.type !== 'style') return style;\n    var styleRule = rule;\n    var container = styleRule.options.parent;\n    var options;\n    var replaceRef;\n\n    for (var prop in style) {\n      var isNested = prop.indexOf('&') !== -1;\n      var isNestedConditional = prop[0] === '@';\n      if (!isNested && !isNestedConditional) continue;\n      options = getOptions(styleRule, container, options);\n\n      if (isNested) {\n        var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for\n        // all nested rules within the sheet.\n\n        if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.\n\n        selector = selector.replace(refRegExp, replaceRef);\n        var name = styleRule.key + \"-\" + prop;\n\n        if ('replaceRule' in container) {\n          // for backward compatibility\n          container.replaceRule(name, style[prop], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, options, {\n            selector: selector\n          }));\n        } else {\n          container.addRule(name, style[prop], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, options, {\n            selector: selector\n          }));\n        }\n      } else if (isNestedConditional) {\n        // Place conditional right after the parent rule to ensure right ordering.\n        container.addRule(prop, {}, options).addRule(styleRule.key, style[prop], {\n          selector: styleRule.selector\n        });\n      }\n\n      delete style[prop];\n    }\n\n    return style;\n  }\n\n  return {\n    onProcessStyle: onProcessStyle\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jssNested);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1uZXN0ZWQvZGlzdC9qc3MtcGx1Z2luLW5lc3RlZC5lc20uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBEO0FBQ3ZCOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxLQUFxQyxHQUFHLHdEQUFPLHVJQUF1SSxDQUFNO0FBQ2xNO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEOztBQUVBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsOEVBQVEsR0FBRztBQUN2QztBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGtCQUFrQiw4RUFBUSxHQUFHO0FBQzdCO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRUFBb0U7QUFDcEU7O0FBRUEsdUVBQXVFOztBQUV2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQsOEVBQVEsR0FBRztBQUM5RDtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1YsK0NBQStDLDhFQUFRLEdBQUc7QUFDMUQ7QUFDQSxXQUFXO0FBQ1g7QUFDQSxRQUFRO0FBQ1I7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYWVkZW5zLXdlYnNpdGUtbmV4dC5qcy8uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLW5lc3RlZC9kaXN0L2pzcy1wbHVnaW4tbmVzdGVkLmVzbS5qcz82M2Q4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5cbnZhciBzZXBhcmF0b3JSZWdFeHAgPSAvXFxzKixcXHMqL2c7XG52YXIgcGFyZW50UmVnRXhwID0gLyYvZztcbnZhciByZWZSZWdFeHAgPSAvXFwkKFtcXHctXSspL2c7XG4vKipcbiAqIENvbnZlcnQgbmVzdGVkIHJ1bGVzIHRvIHNlcGFyYXRlLCByZW1vdmUgdGhlbSBmcm9tIG9yaWdpbmFsIHN0eWxlcy5cbiAqL1xuXG5mdW5jdGlvbiBqc3NOZXN0ZWQoKSB7XG4gIC8vIEdldCBhIGZ1bmN0aW9uIHRvIGJlIHVzZWQgZm9yICRyZWYgcmVwbGFjZW1lbnQuXG4gIGZ1bmN0aW9uIGdldFJlcGxhY2VSZWYoY29udGFpbmVyLCBzaGVldCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobWF0Y2gsIGtleSkge1xuICAgICAgdmFyIHJ1bGUgPSBjb250YWluZXIuZ2V0UnVsZShrZXkpIHx8IHNoZWV0ICYmIHNoZWV0LmdldFJ1bGUoa2V5KTtcblxuICAgICAgaWYgKHJ1bGUpIHtcbiAgICAgICAgcmV0dXJuIHJ1bGUuc2VsZWN0b3I7XG4gICAgICB9XG5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gQ291bGQgbm90IGZpbmQgdGhlIHJlZmVyZW5jZWQgcnVsZSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaW4gXFxcIlwiICsgKGNvbnRhaW5lci5vcHRpb25zLm1ldGEgfHwgY29udGFpbmVyLnRvU3RyaW5nKCkpICsgXCJcXFwiLlwiKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VQYXJlbnRSZWZzKG5lc3RlZFByb3AsIHBhcmVudFByb3ApIHtcbiAgICB2YXIgcGFyZW50U2VsZWN0b3JzID0gcGFyZW50UHJvcC5zcGxpdChzZXBhcmF0b3JSZWdFeHApO1xuICAgIHZhciBuZXN0ZWRTZWxlY3RvcnMgPSBuZXN0ZWRQcm9wLnNwbGl0KHNlcGFyYXRvclJlZ0V4cCk7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRTZWxlY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwYXJlbnQgPSBwYXJlbnRTZWxlY3RvcnNbaV07XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbmVzdGVkU2VsZWN0b3JzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBuZXN0ZWQgPSBuZXN0ZWRTZWxlY3RvcnNbal07XG4gICAgICAgIGlmIChyZXN1bHQpIHJlc3VsdCArPSAnLCAnOyAvLyBSZXBsYWNlIGFsbCAmIGJ5IHRoZSBwYXJlbnQgb3IgcHJlZml4ICYgd2l0aCB0aGUgcGFyZW50LlxuXG4gICAgICAgIHJlc3VsdCArPSBuZXN0ZWQuaW5kZXhPZignJicpICE9PSAtMSA/IG5lc3RlZC5yZXBsYWNlKHBhcmVudFJlZ0V4cCwgcGFyZW50KSA6IHBhcmVudCArIFwiIFwiICsgbmVzdGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPcHRpb25zKHJ1bGUsIGNvbnRhaW5lciwgcHJldk9wdGlvbnMpIHtcbiAgICAvLyBPcHRpb25zIGhhcyBiZWVuIGFscmVhZHkgY3JlYXRlZCwgbm93IHdlIG9ubHkgaW5jcmVhc2UgaW5kZXguXG4gICAgaWYgKHByZXZPcHRpb25zKSByZXR1cm4gX2V4dGVuZHMoe30sIHByZXZPcHRpb25zLCB7XG4gICAgICBpbmRleDogcHJldk9wdGlvbnMuaW5kZXggKyAxXG4gICAgfSk7XG4gICAgdmFyIG5lc3RpbmdMZXZlbCA9IHJ1bGUub3B0aW9ucy5uZXN0aW5nTGV2ZWw7XG4gICAgbmVzdGluZ0xldmVsID0gbmVzdGluZ0xldmVsID09PSB1bmRlZmluZWQgPyAxIDogbmVzdGluZ0xldmVsICsgMTtcblxuICAgIHZhciBvcHRpb25zID0gX2V4dGVuZHMoe30sIHJ1bGUub3B0aW9ucywge1xuICAgICAgbmVzdGluZ0xldmVsOiBuZXN0aW5nTGV2ZWwsXG4gICAgICBpbmRleDogY29udGFpbmVyLmluZGV4T2YocnVsZSkgKyAxIC8vIFdlIGRvbid0IG5lZWQgdGhlIHBhcmVudCBuYW1lIHRvIGJlIHNldCBvcHRpb25zIGZvciBjaGxpZC5cblxuICAgIH0pO1xuXG4gICAgZGVsZXRlIG9wdGlvbnMubmFtZTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlLCBzaGVldCkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybiBzdHlsZTtcbiAgICB2YXIgc3R5bGVSdWxlID0gcnVsZTtcbiAgICB2YXIgY29udGFpbmVyID0gc3R5bGVSdWxlLm9wdGlvbnMucGFyZW50O1xuICAgIHZhciBvcHRpb25zO1xuICAgIHZhciByZXBsYWNlUmVmO1xuXG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgdmFyIGlzTmVzdGVkID0gcHJvcC5pbmRleE9mKCcmJykgIT09IC0xO1xuICAgICAgdmFyIGlzTmVzdGVkQ29uZGl0aW9uYWwgPSBwcm9wWzBdID09PSAnQCc7XG4gICAgICBpZiAoIWlzTmVzdGVkICYmICFpc05lc3RlZENvbmRpdGlvbmFsKSBjb250aW51ZTtcbiAgICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKHN0eWxlUnVsZSwgY29udGFpbmVyLCBvcHRpb25zKTtcblxuICAgICAgaWYgKGlzTmVzdGVkKSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHJlcGxhY2VQYXJlbnRSZWZzKHByb3AsIHN0eWxlUnVsZS5zZWxlY3Rvcik7IC8vIExhemlseSBjcmVhdGUgdGhlIHJlZiByZXBsYWNlciBmdW5jdGlvbiBqdXN0IG9uY2UgZm9yXG4gICAgICAgIC8vIGFsbCBuZXN0ZWQgcnVsZXMgd2l0aGluIHRoZSBzaGVldC5cblxuICAgICAgICBpZiAoIXJlcGxhY2VSZWYpIHJlcGxhY2VSZWYgPSBnZXRSZXBsYWNlUmVmKGNvbnRhaW5lciwgc2hlZXQpOyAvLyBSZXBsYWNlIGFsbCAkcmVmcy5cblxuICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UocmVmUmVnRXhwLCByZXBsYWNlUmVmKTtcbiAgICAgICAgdmFyIG5hbWUgPSBzdHlsZVJ1bGUua2V5ICsgXCItXCIgKyBwcm9wO1xuXG4gICAgICAgIGlmICgncmVwbGFjZVJ1bGUnIGluIGNvbnRhaW5lcikge1xuICAgICAgICAgIC8vIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgICAgICAgY29udGFpbmVyLnJlcGxhY2VSdWxlKG5hbWUsIHN0eWxlW3Byb3BdLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lci5hZGRSdWxlKG5hbWUsIHN0eWxlW3Byb3BdLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzTmVzdGVkQ29uZGl0aW9uYWwpIHtcbiAgICAgICAgLy8gUGxhY2UgY29uZGl0aW9uYWwgcmlnaHQgYWZ0ZXIgdGhlIHBhcmVudCBydWxlIHRvIGVuc3VyZSByaWdodCBvcmRlcmluZy5cbiAgICAgICAgY29udGFpbmVyLmFkZFJ1bGUocHJvcCwge30sIG9wdGlvbnMpLmFkZFJ1bGUoc3R5bGVSdWxlLmtleSwgc3R5bGVbcHJvcF0sIHtcbiAgICAgICAgICBzZWxlY3Rvcjogc3R5bGVSdWxlLnNlbGVjdG9yXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgc3R5bGVbcHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvblByb2Nlc3NTdHlsZTogb25Qcm9jZXNzU3R5bGVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNzTmVzdGVkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js\n");

/***/ })

};
;
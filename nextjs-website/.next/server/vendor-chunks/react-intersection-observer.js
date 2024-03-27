"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-intersection-observer";
exports.ids = ["vendor-chunks/react-intersection-observer"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-intersection-observer/index.mjs":
/*!************************************************************!*\
  !*** ./node_modules/react-intersection-observer/index.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InView: () => (/* binding */ InView),\n/* harmony export */   defaultFallbackInView: () => (/* binding */ defaultFallbackInView),\n/* harmony export */   observe: () => (/* binding */ observe),\n/* harmony export */   useInView: () => (/* binding */ useInView)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ InView,defaultFallbackInView,observe,useInView auto */ var __defProp = Object.defineProperty;\nvar __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {\n        enumerable: true,\n        configurable: true,\n        writable: true,\n        value\n    }) : obj[key] = value;\nvar __publicField = (obj, key, value)=>{\n    __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n    return value;\n};\n// src/InView.tsx\n\n// src/observe.ts\nvar observerMap = /* @__PURE__ */ new Map();\nvar RootIds = /* @__PURE__ */ new WeakMap();\nvar rootId = 0;\nvar unsupportedValue = void 0;\nfunction defaultFallbackInView(inView) {\n    unsupportedValue = inView;\n}\nfunction getRootId(root) {\n    if (!root) return \"0\";\n    if (RootIds.has(root)) return RootIds.get(root);\n    rootId += 1;\n    RootIds.set(root, rootId.toString());\n    return RootIds.get(root);\n}\nfunction optionsToId(options) {\n    return Object.keys(options).sort().filter((key)=>options[key] !== void 0).map((key)=>{\n        return `${key}_${key === \"root\" ? getRootId(options.root) : options[key]}`;\n    }).toString();\n}\nfunction createObserver(options) {\n    const id = optionsToId(options);\n    let instance = observerMap.get(id);\n    if (!instance) {\n        const elements = /* @__PURE__ */ new Map();\n        let thresholds;\n        const observer = new IntersectionObserver((entries)=>{\n            entries.forEach((entry)=>{\n                var _a;\n                const inView = entry.isIntersecting && thresholds.some((threshold)=>entry.intersectionRatio >= threshold);\n                if (options.trackVisibility && typeof entry.isVisible === \"undefined\") {\n                    entry.isVisible = inView;\n                }\n                (_a = elements.get(entry.target)) == null ? void 0 : _a.forEach((callback)=>{\n                    callback(inView, entry);\n                });\n            });\n        }, options);\n        thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [\n            options.threshold || 0\n        ]);\n        instance = {\n            id,\n            observer,\n            elements\n        };\n        observerMap.set(id, instance);\n    }\n    return instance;\n}\nfunction observe(element, callback, options = {}, fallbackInView = unsupportedValue) {\n    if (typeof window.IntersectionObserver === \"undefined\" && fallbackInView !== void 0) {\n        const bounds = element.getBoundingClientRect();\n        callback(fallbackInView, {\n            isIntersecting: fallbackInView,\n            target: element,\n            intersectionRatio: typeof options.threshold === \"number\" ? options.threshold : 0,\n            time: 0,\n            boundingClientRect: bounds,\n            intersectionRect: bounds,\n            rootBounds: bounds\n        });\n        return ()=>{};\n    }\n    const { id, observer, elements } = createObserver(options);\n    const callbacks = elements.get(element) || [];\n    if (!elements.has(element)) {\n        elements.set(element, callbacks);\n    }\n    callbacks.push(callback);\n    observer.observe(element);\n    return function unobserve() {\n        callbacks.splice(callbacks.indexOf(callback), 1);\n        if (callbacks.length === 0) {\n            elements.delete(element);\n            observer.unobserve(element);\n        }\n        if (elements.size === 0) {\n            observer.disconnect();\n            observerMap.delete(id);\n        }\n    };\n}\n// src/InView.tsx\nfunction isPlainChildren(props) {\n    return typeof props.children !== \"function\";\n}\nvar InView = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n    constructor(props){\n        super(props);\n        __publicField(this, \"node\", null);\n        __publicField(this, \"_unobserveCb\", null);\n        __publicField(this, \"handleNode\", (node)=>{\n            if (this.node) {\n                this.unobserve();\n                if (!node && !this.props.triggerOnce && !this.props.skip) {\n                    this.setState({\n                        inView: !!this.props.initialInView,\n                        entry: void 0\n                    });\n                }\n            }\n            this.node = node ? node : null;\n            this.observeNode();\n        });\n        __publicField(this, \"handleChange\", (inView, entry)=>{\n            if (inView && this.props.triggerOnce) {\n                this.unobserve();\n            }\n            if (!isPlainChildren(this.props)) {\n                this.setState({\n                    inView,\n                    entry\n                });\n            }\n            if (this.props.onChange) {\n                this.props.onChange(inView, entry);\n            }\n        });\n        this.state = {\n            inView: !!props.initialInView,\n            entry: void 0\n        };\n    }\n    componentDidMount() {\n        this.unobserve();\n        this.observeNode();\n    }\n    componentDidUpdate(prevProps) {\n        if (prevProps.rootMargin !== this.props.rootMargin || prevProps.root !== this.props.root || prevProps.threshold !== this.props.threshold || prevProps.skip !== this.props.skip || prevProps.trackVisibility !== this.props.trackVisibility || prevProps.delay !== this.props.delay) {\n            this.unobserve();\n            this.observeNode();\n        }\n    }\n    componentWillUnmount() {\n        this.unobserve();\n    }\n    observeNode() {\n        if (!this.node || this.props.skip) return;\n        const { threshold, root, rootMargin, trackVisibility, delay, fallbackInView } = this.props;\n        this._unobserveCb = observe(this.node, this.handleChange, {\n            threshold,\n            root,\n            rootMargin,\n            // @ts-ignore\n            trackVisibility,\n            // @ts-ignore\n            delay\n        }, fallbackInView);\n    }\n    unobserve() {\n        if (this._unobserveCb) {\n            this._unobserveCb();\n            this._unobserveCb = null;\n        }\n    }\n    render() {\n        const { children } = this.props;\n        if (typeof children === \"function\") {\n            const { inView, entry } = this.state;\n            return children({\n                inView,\n                entry,\n                ref: this.handleNode\n            });\n        }\n        const { as, triggerOnce, threshold, root, rootMargin, onChange, skip, trackVisibility, delay, initialInView, fallbackInView, ...props } = this.props;\n        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(as || \"div\", {\n            ref: this.handleNode,\n            ...props\n        }, children);\n    }\n};\n// src/useInView.tsx\n\nfunction useInView({ threshold, delay, trackVisibility, rootMargin, root, triggerOnce, skip, initialInView, fallbackInView, onChange } = {}) {\n    var _a;\n    const [ref, setRef] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);\n    const callback = react__WEBPACK_IMPORTED_MODULE_0__.useRef();\n    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({\n        inView: !!initialInView,\n        entry: void 0\n    });\n    callback.current = onChange;\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{\n        if (skip || !ref) return;\n        let unobserve;\n        unobserve = observe(ref, (inView, entry)=>{\n            setState({\n                inView,\n                entry\n            });\n            if (callback.current) callback.current(inView, entry);\n            if (entry.isIntersecting && triggerOnce && unobserve) {\n                unobserve();\n                unobserve = void 0;\n            }\n        }, {\n            root,\n            rootMargin,\n            threshold,\n            // @ts-ignore\n            trackVisibility,\n            // @ts-ignore\n            delay\n        }, fallbackInView);\n        return ()=>{\n            if (unobserve) {\n                unobserve();\n            }\n        };\n    }, // We break the rule here, because we aren't including the actual `threshold` variable\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    [\n        // If the threshold is an array, convert it to a string, so it won't change between renders.\n        Array.isArray(threshold) ? threshold.toString() : threshold,\n        ref,\n        root,\n        rootMargin,\n        triggerOnce,\n        skip,\n        trackVisibility,\n        fallbackInView,\n        delay\n    ]);\n    const entryTarget = (_a = state.entry) == null ? void 0 : _a.target;\n    const previousEntryTarget = react__WEBPACK_IMPORTED_MODULE_0__.useRef();\n    if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {\n        previousEntryTarget.current = entryTarget;\n        setState({\n            inView: !!initialInView,\n            entry: void 0\n        });\n    }\n    const result = [\n        setRef,\n        state.inView,\n        state.entry\n    ];\n    result.ref = result[0];\n    result.inView = result[1];\n    result.entry = result[2];\n    return result;\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyL2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztvR0FDQSxJQUFJQSxZQUFZQyxPQUFPQyxjQUFjO0FBQ3JDLElBQUlDLGtCQUFrQixDQUFDQyxLQUFLQyxLQUFLQyxRQUFVRCxPQUFPRCxNQUFNSixVQUFVSSxLQUFLQyxLQUFLO1FBQUVFLFlBQVk7UUFBTUMsY0FBYztRQUFNQyxVQUFVO1FBQU1IO0lBQU0sS0FBS0YsR0FBRyxDQUFDQyxJQUFJLEdBQUdDO0FBQzFKLElBQUlJLGdCQUFnQixDQUFDTixLQUFLQyxLQUFLQztJQUM3QkgsZ0JBQWdCQyxLQUFLLE9BQU9DLFFBQVEsV0FBV0EsTUFBTSxLQUFLQSxLQUFLQztJQUMvRCxPQUFPQTtBQUNUO0FBRUEsaUJBQWlCO0FBQ2M7QUFFL0IsaUJBQWlCO0FBQ2pCLElBQUlNLGNBQWMsYUFBYSxHQUFHLElBQUlDO0FBQ3RDLElBQUlDLFVBQVUsYUFBYSxHQUFHLElBQUlDO0FBQ2xDLElBQUlDLFNBQVM7QUFDYixJQUFJQyxtQkFBbUIsS0FBSztBQUM1QixTQUFTQyxzQkFBc0JDLE1BQU07SUFDbkNGLG1CQUFtQkU7QUFDckI7QUFDQSxTQUFTQyxVQUFVQyxJQUFJO0lBQ3JCLElBQUksQ0FBQ0EsTUFDSCxPQUFPO0lBQ1QsSUFBSVAsUUFBUVEsR0FBRyxDQUFDRCxPQUNkLE9BQU9QLFFBQVFTLEdBQUcsQ0FBQ0Y7SUFDckJMLFVBQVU7SUFDVkYsUUFBUVUsR0FBRyxDQUFDSCxNQUFNTCxPQUFPUyxRQUFRO0lBQ2pDLE9BQU9YLFFBQVFTLEdBQUcsQ0FBQ0Y7QUFDckI7QUFDQSxTQUFTSyxZQUFZQyxPQUFPO0lBQzFCLE9BQU8xQixPQUFPMkIsSUFBSSxDQUFDRCxTQUFTRSxJQUFJLEdBQUdDLE1BQU0sQ0FDdkMsQ0FBQ3pCLE1BQVFzQixPQUFPLENBQUN0QixJQUFJLEtBQUssS0FBSyxHQUMvQjBCLEdBQUcsQ0FBQyxDQUFD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T0FBT2IsR0FBRyxHQUFHYSxNQUFNLENBQUMsRUFBRTtJQUN0QkEsT0FBT3pGLE1BQU0sR0FBR3lGLE1BQU0sQ0FBQyxFQUFFO0lBQ3pCQSxPQUFPbkUsS0FBSyxHQUFHbUUsTUFBTSxDQUFDLEVBQUU7SUFDeEIsT0FBT0E7QUFDVDtBQU1FLENBQ0Ysa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJhZWRlbnMtd2Vic2l0ZS1uZXh0LmpzLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlci9pbmRleC5tanM/YmUwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19wdWJsaWNGaWVsZCA9IChvYmosIGtleSwgdmFsdWUpID0+IHtcbiAgX19kZWZOb3JtYWxQcm9wKG9iaiwgdHlwZW9mIGtleSAhPT0gXCJzeW1ib2xcIiA/IGtleSArIFwiXCIgOiBrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gc3JjL0luVmlldy50c3hcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBzcmMvb2JzZXJ2ZS50c1xudmFyIG9ic2VydmVyTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbnZhciBSb290SWRzID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCk7XG52YXIgcm9vdElkID0gMDtcbnZhciB1bnN1cHBvcnRlZFZhbHVlID0gdm9pZCAwO1xuZnVuY3Rpb24gZGVmYXVsdEZhbGxiYWNrSW5WaWV3KGluVmlldykge1xuICB1bnN1cHBvcnRlZFZhbHVlID0gaW5WaWV3O1xufVxuZnVuY3Rpb24gZ2V0Um9vdElkKHJvb3QpIHtcbiAgaWYgKCFyb290KVxuICAgIHJldHVybiBcIjBcIjtcbiAgaWYgKFJvb3RJZHMuaGFzKHJvb3QpKVxuICAgIHJldHVybiBSb290SWRzLmdldChyb290KTtcbiAgcm9vdElkICs9IDE7XG4gIFJvb3RJZHMuc2V0KHJvb3QsIHJvb3RJZC50b1N0cmluZygpKTtcbiAgcmV0dXJuIFJvb3RJZHMuZ2V0KHJvb3QpO1xufVxuZnVuY3Rpb24gb3B0aW9uc1RvSWQob3B0aW9ucykge1xuICByZXR1cm4gT2JqZWN0LmtleXMob3B0aW9ucykuc29ydCgpLmZpbHRlcihcbiAgICAoa2V5KSA9PiBvcHRpb25zW2tleV0gIT09IHZvaWQgMFxuICApLm1hcCgoa2V5KSA9PiB7XG4gICAgcmV0dXJuIGAke2tleX1fJHtrZXkgPT09IFwicm9vdFwiID8gZ2V0Um9vdElkKG9wdGlvbnMucm9vdCkgOiBvcHRpb25zW2tleV19YDtcbiAgfSkudG9TdHJpbmcoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zVG9JZChvcHRpb25zKTtcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJNYXAuZ2V0KGlkKTtcbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICBsZXQgdGhyZXNob2xkcztcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGluVmlldyA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nICYmIHRocmVzaG9sZHMuc29tZSgodGhyZXNob2xkKSA9PiBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+PSB0aHJlc2hvbGQpO1xuICAgICAgICBpZiAob3B0aW9ucy50cmFja1Zpc2liaWxpdHkgJiYgdHlwZW9mIGVudHJ5LmlzVmlzaWJsZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGVudHJ5LmlzVmlzaWJsZSA9IGluVmlldztcbiAgICAgICAgfVxuICAgICAgICAoX2EgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgY2FsbGJhY2soaW5WaWV3LCBlbnRyeSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgdGhyZXNob2xkcyA9IG9ic2VydmVyLnRocmVzaG9sZHMgfHwgKEFycmF5LmlzQXJyYXkob3B0aW9ucy50aHJlc2hvbGQpID8gb3B0aW9ucy50aHJlc2hvbGQgOiBbb3B0aW9ucy50aHJlc2hvbGQgfHwgMF0pO1xuICAgIGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzXG4gICAgfTtcbiAgICBvYnNlcnZlck1hcC5zZXQoaWQsIGluc3RhbmNlKTtcbiAgfVxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zID0ge30sIGZhbGxiYWNrSW5WaWV3ID0gdW5zdXBwb3J0ZWRWYWx1ZSkge1xuICBpZiAodHlwZW9mIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA9PT0gXCJ1bmRlZmluZWRcIiAmJiBmYWxsYmFja0luVmlldyAhPT0gdm9pZCAwKSB7XG4gICAgY29uc3QgYm91bmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjYWxsYmFjayhmYWxsYmFja0luVmlldywge1xuICAgICAgaXNJbnRlcnNlY3Rpbmc6IGZhbGxiYWNrSW5WaWV3LFxuICAgICAgdGFyZ2V0OiBlbGVtZW50LFxuICAgICAgaW50ZXJzZWN0aW9uUmF0aW86IHR5cGVvZiBvcHRpb25zLnRocmVzaG9sZCA9PT0gXCJudW1iZXJcIiA/IG9wdGlvbnMudGhyZXNob2xkIDogMCxcbiAgICAgIHRpbWU6IDAsXG4gICAgICBib3VuZGluZ0NsaWVudFJlY3Q6IGJvdW5kcyxcbiAgICAgIGludGVyc2VjdGlvblJlY3Q6IGJvdW5kcyxcbiAgICAgIHJvb3RCb3VuZHM6IGJvdW5kc1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgfTtcbiAgfVxuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICBjb25zdCBjYWxsYmFja3MgPSBlbGVtZW50cy5nZXQoZWxlbWVudCkgfHwgW107XG4gIGlmICghZWxlbWVudHMuaGFzKGVsZW1lbnQpKSB7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrcyk7XG4gIH1cbiAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgIGNhbGxiYWNrcy5zcGxpY2UoY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spLCAxKTtcbiAgICBpZiAoY2FsbGJhY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgb2JzZXJ2ZXJNYXAuZGVsZXRlKGlkKTtcbiAgICB9XG4gIH07XG59XG5cbi8vIHNyYy9JblZpZXcudHN4XG5mdW5jdGlvbiBpc1BsYWluQ2hpbGRyZW4ocHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBwcm9wcy5jaGlsZHJlbiAhPT0gXCJmdW5jdGlvblwiO1xufVxudmFyIEluVmlldyA9IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm5vZGVcIiwgbnVsbCk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIl91bm9ic2VydmVDYlwiLCBudWxsKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiaGFuZGxlTm9kZVwiLCAobm9kZSkgPT4ge1xuICAgICAgaWYgKHRoaXMubm9kZSkge1xuICAgICAgICB0aGlzLnVub2JzZXJ2ZSgpO1xuICAgICAgICBpZiAoIW5vZGUgJiYgIXRoaXMucHJvcHMudHJpZ2dlck9uY2UgJiYgIXRoaXMucHJvcHMuc2tpcCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpblZpZXc6ICEhdGhpcy5wcm9wcy5pbml0aWFsSW5WaWV3LCBlbnRyeTogdm9pZCAwIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm5vZGUgPSBub2RlID8gbm9kZSA6IG51bGw7XG4gICAgICB0aGlzLm9ic2VydmVOb2RlKCk7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImhhbmRsZUNoYW5nZVwiLCAoaW5WaWV3LCBlbnRyeSkgPT4ge1xuICAgICAgaWYgKGluVmlldyAmJiB0aGlzLnByb3BzLnRyaWdnZXJPbmNlKSB7XG4gICAgICAgIHRoaXMudW5vYnNlcnZlKCk7XG4gICAgICB9XG4gICAgICBpZiAoIWlzUGxhaW5DaGlsZHJlbih0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5WaWV3LCBlbnRyeSB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoaW5WaWV3LCBlbnRyeSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGluVmlldzogISFwcm9wcy5pbml0aWFsSW5WaWV3LFxuICAgICAgZW50cnk6IHZvaWQgMFxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51bm9ic2VydmUoKTtcbiAgICB0aGlzLm9ic2VydmVOb2RlKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmIChwcmV2UHJvcHMucm9vdE1hcmdpbiAhPT0gdGhpcy5wcm9wcy5yb290TWFyZ2luIHx8IHByZXZQcm9wcy5yb290ICE9PSB0aGlzLnByb3BzLnJvb3QgfHwgcHJldlByb3BzLnRocmVzaG9sZCAhPT0gdGhpcy5wcm9wcy50aHJlc2hvbGQgfHwgcHJldlByb3BzLnNraXAgIT09IHRoaXMucHJvcHMuc2tpcCB8fCBwcmV2UHJvcHMudHJhY2tWaXNpYmlsaXR5ICE9PSB0aGlzLnByb3BzLnRyYWNrVmlzaWJpbGl0eSB8fCBwcmV2UHJvcHMuZGVsYXkgIT09IHRoaXMucHJvcHMuZGVsYXkpIHtcbiAgICAgIHRoaXMudW5vYnNlcnZlKCk7XG4gICAgICB0aGlzLm9ic2VydmVOb2RlKCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5vYnNlcnZlKCk7XG4gIH1cbiAgb2JzZXJ2ZU5vZGUoKSB7XG4gICAgaWYgKCF0aGlzLm5vZGUgfHwgdGhpcy5wcm9wcy5za2lwKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHtcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIHJvb3QsXG4gICAgICByb290TWFyZ2luLFxuICAgICAgdHJhY2tWaXNpYmlsaXR5LFxuICAgICAgZGVsYXksXG4gICAgICBmYWxsYmFja0luVmlld1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuX3Vub2JzZXJ2ZUNiID0gb2JzZXJ2ZShcbiAgICAgIHRoaXMubm9kZSxcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlLFxuICAgICAge1xuICAgICAgICB0aHJlc2hvbGQsXG4gICAgICAgIHJvb3QsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdHJhY2tWaXNpYmlsaXR5LFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGRlbGF5XG4gICAgICB9LFxuICAgICAgZmFsbGJhY2tJblZpZXdcbiAgICApO1xuICB9XG4gIHVub2JzZXJ2ZSgpIHtcbiAgICBpZiAodGhpcy5fdW5vYnNlcnZlQ2IpIHtcbiAgICAgIHRoaXMuX3Vub2JzZXJ2ZUNiKCk7XG4gICAgICB0aGlzLl91bm9ic2VydmVDYiA9IG51bGw7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc3QgeyBpblZpZXcsIGVudHJ5IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHsgaW5WaWV3LCBlbnRyeSwgcmVmOiB0aGlzLmhhbmRsZU5vZGUgfSk7XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIGFzLFxuICAgICAgdHJpZ2dlck9uY2UsXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICByb290LFxuICAgICAgcm9vdE1hcmdpbixcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgc2tpcCxcbiAgICAgIHRyYWNrVmlzaWJpbGl0eSxcbiAgICAgIGRlbGF5LFxuICAgICAgaW5pdGlhbEluVmlldyxcbiAgICAgIGZhbGxiYWNrSW5WaWV3LFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIGFzIHx8IFwiZGl2XCIsXG4gICAgICB7IHJlZjogdGhpcy5oYW5kbGVOb2RlLCAuLi5wcm9wcyB9LFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9XG59O1xuXG4vLyBzcmMvdXNlSW5WaWV3LnRzeFxuaW1wb3J0ICogYXMgUmVhY3QyIGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gdXNlSW5WaWV3KHtcbiAgdGhyZXNob2xkLFxuICBkZWxheSxcbiAgdHJhY2tWaXNpYmlsaXR5LFxuICByb290TWFyZ2luLFxuICByb290LFxuICB0cmlnZ2VyT25jZSxcbiAgc2tpcCxcbiAgaW5pdGlhbEluVmlldyxcbiAgZmFsbGJhY2tJblZpZXcsXG4gIG9uQ2hhbmdlXG59ID0ge30pIHtcbiAgdmFyIF9hO1xuICBjb25zdCBbcmVmLCBzZXRSZWZdID0gUmVhY3QyLnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBjYWxsYmFjayA9IFJlYWN0Mi51c2VSZWYoKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdDIudXNlU3RhdGUoe1xuICAgIGluVmlldzogISFpbml0aWFsSW5WaWV3LFxuICAgIGVudHJ5OiB2b2lkIDBcbiAgfSk7XG4gIGNhbGxiYWNrLmN1cnJlbnQgPSBvbkNoYW5nZTtcbiAgUmVhY3QyLnVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoc2tpcCB8fCAhcmVmKVxuICAgICAgICByZXR1cm47XG4gICAgICBsZXQgdW5vYnNlcnZlO1xuICAgICAgdW5vYnNlcnZlID0gb2JzZXJ2ZShcbiAgICAgICAgcmVmLFxuICAgICAgICAoaW5WaWV3LCBlbnRyeSkgPT4ge1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGluVmlldyxcbiAgICAgICAgICAgIGVudHJ5XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGNhbGxiYWNrLmN1cnJlbnQpXG4gICAgICAgICAgICBjYWxsYmFjay5jdXJyZW50KGluVmlldywgZW50cnkpO1xuICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyAmJiB0cmlnZ2VyT25jZSAmJiB1bm9ic2VydmUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZSgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlID0gdm9pZCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHJvb3QsXG4gICAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgICB0aHJlc2hvbGQsXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHRyYWNrVmlzaWJpbGl0eSxcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgZGVsYXlcbiAgICAgICAgfSxcbiAgICAgICAgZmFsbGJhY2tJblZpZXdcbiAgICAgICk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAodW5vYnNlcnZlKSB7XG4gICAgICAgICAgdW5vYnNlcnZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICAvLyBXZSBicmVhayB0aGUgcnVsZSBoZXJlLCBiZWNhdXNlIHdlIGFyZW4ndCBpbmNsdWRpbmcgdGhlIGFjdHVhbCBgdGhyZXNob2xkYCB2YXJpYWJsZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICBbXG4gICAgICAvLyBJZiB0aGUgdGhyZXNob2xkIGlzIGFuIGFycmF5LCBjb252ZXJ0IGl0IHRvIGEgc3RyaW5nLCBzbyBpdCB3b24ndCBjaGFuZ2UgYmV0d2VlbiByZW5kZXJzLlxuICAgICAgQXJyYXkuaXNBcnJheSh0aHJlc2hvbGQpID8gdGhyZXNob2xkLnRvU3RyaW5nKCkgOiB0aHJlc2hvbGQsXG4gICAgICByZWYsXG4gICAgICByb290LFxuICAgICAgcm9vdE1hcmdpbixcbiAgICAgIHRyaWdnZXJPbmNlLFxuICAgICAgc2tpcCxcbiAgICAgIHRyYWNrVmlzaWJpbGl0eSxcbiAgICAgIGZhbGxiYWNrSW5WaWV3LFxuICAgICAgZGVsYXlcbiAgICBdXG4gICk7XG4gIGNvbnN0IGVudHJ5VGFyZ2V0ID0gKF9hID0gc3RhdGUuZW50cnkpID09IG51bGwgPyB2b2lkIDAgOiBfYS50YXJnZXQ7XG4gIGNvbnN0IHByZXZpb3VzRW50cnlUYXJnZXQgPSBSZWFjdDIudXNlUmVmKCk7XG4gIGlmICghcmVmICYmIGVudHJ5VGFyZ2V0ICYmICF0cmlnZ2VyT25jZSAmJiAhc2tpcCAmJiBwcmV2aW91c0VudHJ5VGFyZ2V0LmN1cnJlbnQgIT09IGVudHJ5VGFyZ2V0KSB7XG4gICAgcHJldmlvdXNFbnRyeVRhcmdldC5jdXJyZW50ID0gZW50cnlUYXJnZXQ7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgaW5WaWV3OiAhIWluaXRpYWxJblZpZXcsXG4gICAgICBlbnRyeTogdm9pZCAwXG4gICAgfSk7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gW3NldFJlZiwgc3RhdGUuaW5WaWV3LCBzdGF0ZS5lbnRyeV07XG4gIHJlc3VsdC5yZWYgPSByZXN1bHRbMF07XG4gIHJlc3VsdC5pblZpZXcgPSByZXN1bHRbMV07XG4gIHJlc3VsdC5lbnRyeSA9IHJlc3VsdFsyXTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCB7XG4gIEluVmlldyxcbiAgZGVmYXVsdEZhbGxiYWNrSW5WaWV3LFxuICBvYnNlcnZlLFxuICB1c2VJblZpZXdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIl0sIm5hbWVzIjpbIl9fZGVmUHJvcCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX19kZWZOb3JtYWxQcm9wIiwib2JqIiwia2V5IiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX3B1YmxpY0ZpZWxkIiwiUmVhY3QiLCJvYnNlcnZlck1hcCIsIk1hcCIsIlJvb3RJZHMiLCJXZWFrTWFwIiwicm9vdElkIiwidW5zdXBwb3J0ZWRWYWx1ZSIsImRlZmF1bHRGYWxsYmFja0luVmlldyIsImluVmlldyIsImdldFJvb3RJZCIsInJvb3QiLCJoYXMiLCJnZXQiLCJzZXQiLCJ0b1N0cmluZyIsIm9wdGlvbnNUb0lkIiwib3B0aW9ucyIsImtleXMiLCJzb3J0IiwiZmlsdGVyIiwibWFwIiwiY3JlYXRlT2JzZXJ2ZXIiLCJpZCIsImluc3RhbmNlIiwiZWxlbWVudHMiLCJ0aHJlc2hvbGRzIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJfYSIsImlzSW50ZXJzZWN0aW5nIiwic29tZSIsInRocmVzaG9sZCIsImludGVyc2VjdGlvblJhdGlvIiwidHJhY2tWaXNpYmlsaXR5IiwiaXNWaXNpYmxlIiwidGFyZ2V0IiwiY2FsbGJhY2siLCJBcnJheSIsImlzQXJyYXkiLCJvYnNlcnZlIiwiZWxlbWVudCIsImZhbGxiYWNrSW5WaWV3Iiwid2luZG93IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGltZSIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImludGVyc2VjdGlvblJlY3QiLCJyb290Qm91bmRzIiwiY2FsbGJhY2tzIiwicHVzaCIsInVub2JzZXJ2ZSIsInNwbGljZSIsImluZGV4T2YiLCJsZW5ndGgiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsImlzUGxhaW5DaGlsZHJlbiIsInByb3BzIiwiY2hpbGRyZW4iLCJJblZpZXciLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsIm5vZGUiLCJ0cmlnZ2VyT25jZSIsInNraXAiLCJzZXRTdGF0ZSIsImluaXRpYWxJblZpZXciLCJvYnNlcnZlTm9kZSIsIm9uQ2hhbmdlIiwic3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInJvb3RNYXJnaW4iLCJkZWxheSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiX3Vub2JzZXJ2ZUNiIiwiaGFuZGxlQ2hhbmdlIiwicmVuZGVyIiwicmVmIiwiaGFuZGxlTm9kZSIsImFzIiwiY3JlYXRlRWxlbWVudCIsIlJlYWN0MiIsInVzZUluVmlldyIsInNldFJlZiIsInVzZVN0YXRlIiwidXNlUmVmIiwiY3VycmVudCIsInVzZUVmZmVjdCIsImVudHJ5VGFyZ2V0IiwicHJldmlvdXNFbnRyeVRhcmdldCIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-intersection-observer/index.mjs\n");

/***/ })

};
;
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
  };

  // node_modules/tslib/tslib.js
  var require_tslib = __commonJS((exports, module) => {
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __createBinding2;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", {value: true});
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
      };
      __extends2 = function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest2 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate2 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _ = {label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: []}, f, y, t, g;
        return g = {next: verb(0), throw: verb(1), return: verb(2)}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {value: op[1], done: false};
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {value: op[0] ? op[1] : void 0, done: true};
        }
      };
      __createBinding2 = function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __exportStar2 = function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !exports2.hasOwnProperty(p))
            exports2[p] = m[p];
      };
      __values2 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return {value: o && o[i++], done: !o};
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = {error};
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read2(arguments[i]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __await2 = function(v) {
        return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? {value: __await2(o[n](v)), done: n === "return"} : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues2 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({value: v2, done: d});
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {value: raw});
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
              result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : {default: mod};
      };
      __classPrivateFieldGet2 = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
    });
  });

  // sass:./styles/style.scss
  document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(`
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  -webkit-font-smoothing: subpixel-antialiased;
}

/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */
/**
 * 1. Change the default font family in all browsers (opinionated).
 * 2. Correct the line height in all browsers.
 * 3. Prevent adjustments of font size after orientation changes in
 *    IE on Windows Phone and in iOS.
 */
/* Document
   ========================================================================== */
html {
  font-family: sans-serif;
  /* 1 */
  line-height: 1.15;
  /* 2 */
  -ms-text-size-adjust: 100%;
  /* 3 */
  -webkit-text-size-adjust: 100%;
  /* 3 */
}

/* Sections
     ========================================================================== */
/**
   * Remove the margin in all browsers (opinionated).
   */
body {
  margin: 0;
}

/**
   * Add the correct display in IE 9-.
   */
article,
aside,
footer,
header,
nav,
section {
  display: block;
}

/**
   * Correct the font size and margin on \`h1\` elements within \`section\` and
   * \`article\` contexts in Chrome, Firefox, and Safari.
   */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
     ========================================================================== */
/**
   * Add the correct display in IE 9-.
   * 1. Add the correct display in IE.
   */
figcaption,
figure,
main {
  /* 1 */
  display: block;
}

/**
   * Add the correct margin in IE 8.
   */
figure {
  margin: 1em 40px;
}

/**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
hr {
  box-sizing: content-box;
  /* 1 */
  height: 0;
  /* 1 */
  overflow: visible;
  /* 2 */
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */
pre {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/* Text-level semantics
     ========================================================================== */
/**
   * 1. Remove the gray background on active links in IE 10.
   * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
   */
a {
  background-color: transparent;
  /* 1 */
  -webkit-text-decoration-skip: objects;
  /* 2 */
}

/**
   * Remove the outline on focused links when they are also active or hovered
   * in all browsers (opinionated).
   */
a:active,
a:hover {
  outline-width: 0;
}

/**
   * 1. Remove the bottom border in Firefox 39-.
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */
abbr[title] {
  border-bottom: none;
  /* 1 */
  text-decoration: underline;
  /* 2 */
  text-decoration: underline dotted;
  /* 2 */
}

/**
   * Prevent the duplicate application of \`bolder\` by the next rule in Safari 6.
   */
b,
strong {
  font-weight: inherit;
}

/**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
b,
strong {
  font-weight: bolder;
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */
code,
kbd,
samp {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/**
   * Add the correct font style in Android 4.3-.
   */
dfn {
  font-style: italic;
}

/**
   * Add the correct background and color in IE 9-.
   */
mark {
  background-color: #ff0;
  color: #000;
}

/**
   * Add the correct font size in all browsers.
   */
small {
  font-size: 80%;
}

/**
   * Prevent \`sub\` and \`sup\` elements from affecting the line height in
   * all browsers.
   */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
     ========================================================================== */
/**
   * Add the correct display in IE 9-.
   */
audio,
video {
  display: inline-block;
}

/**
   * Add the correct display in iOS 4-7.
   */
audio:not([controls]) {
  display: none;
  height: 0;
}

/**
   * Remove the border on images inside links in IE 10-.
   */
img {
  border-style: none;
}

/**
   * Hide the overflow in IE.
   */
svg:not(:root) {
  overflow: hidden;
}

/* Forms
     ========================================================================== */
/**
   * 1. Change the font styles in all browsers (opinionated).
   * 2. Remove the margin in Firefox and Safari.
   */
button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif;
  /* 1 */
  font-size: 100%;
  /* 1 */
  line-height: 1.15;
  /* 1 */
  margin: 0;
  /* 2 */
}

/**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */
button,
input {
  /* 1 */
  overflow: visible;
}

/**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
button,
select {
  /* 1 */
  text-transform: none;
}

/**
   * 1. Prevent a WebKit bug where (2) destroys native \`audio\` and \`video\`
   *    controls in Android 4.
   * 2. Correct the inability to style clickable types in iOS and Safari.
   */
button,
html [type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
  /* 2 */
}

/**
   * Remove the inner border and padding in Firefox.
   */
button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
   * Restore the focus styles unset by the previous rule.
   */
button:-moz-focusring,
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
   * Change the border, margin, and padding in all browsers (opinionated).
   */
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

/**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from \`fieldset\` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    \`fieldset\` elements in all browsers.
   */
legend {
  box-sizing: border-box;
  /* 1 */
  color: inherit;
  /* 2 */
  display: table;
  /* 1 */
  max-width: 100%;
  /* 1 */
  padding: 0;
  /* 3 */
  white-space: normal;
  /* 1 */
}

/**
   * 1. Add the correct display in IE 9-.
   * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
progress {
  display: inline-block;
  /* 1 */
  vertical-align: baseline;
  /* 2 */
}

/**
   * Remove the default vertical scrollbar in IE.
   */
textarea {
  overflow: auto;
}

/**
   * 1. Add the correct box sizing in IE 10-.
   * 2. Remove the padding in IE 10-.
   */
[type=checkbox],
[type=radio] {
  box-sizing: border-box;
  /* 1 */
  padding: 0;
  /* 2 */
}

/**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

/**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
[type=search] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/**
   * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
   */
[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to \`inherit\` in Safari.
   */
::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/* Interactive
     ========================================================================== */
/*
   * Add the correct display in IE 9-.
   * 1. Add the correct display in Edge, IE, and Firefox.
   */
details,
menu {
  display: block;
}

/*
   * Add the correct display in all browsers.
   */
summary {
  display: list-item;
}

/* Scripting
     ========================================================================== */
/**
   * Add the correct display in IE 9-.
   */
canvas {
  display: inline-block;
}

/**
   * Add the correct display in IE.
   */
template {
  display: none;
}

/* Hidden
     ========================================================================== */
/**
   * Add the correct display in IE 10-.
   */
[hidden] {
  display: none;
}

html {
  font-size: 1rem;
  font-family: sans-serif;
  color: #dae0e0;
  line-height: 1.4;
}

h1 {
  margin: auto;
  text-align: center;
}

a {
  color: #dae0e0;
}

body {
  margin: 0;
  padding: 0;
  width: 100vw;
  background-color: #17243bc7;
}

#right-control-panel {
  position: absolute;
  z-index: 500;
  width: 200px;
  right: 18px;
  top: 24px;
}

#left-control-panel {
  position: absolute;
  z-index: 500;
  width: 260px;
  left: 50px;
  top: 24px;
}
#left-control-panel .highcharts-figure {
  margin: 0 0 0.75em 0;
}
#left-control-panel .highcharts-figure h2 {
  color: white;
  font-size: 1.1em;
  font-weight: 500;
  margin: 0 0 0.3em 0;
}
#left-control-panel .highcharts-figure .highcharts-figure-content {
  background-color: #17243bc7;
  border: solid 1px #121c2ed7;
}`));

  // node_modules/tslib/modules/index.js
  var import_tslib = __toModule(require_tslib());
  var {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __exportStar,
    __createBinding,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet
  } = import_tslib.default;

  // node_modules/@material/base/foundation.js
  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCFoundation = function() {
    function MDCFoundation2(adapter) {
      if (adapter === void 0) {
        adapter = {};
      }
      this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation2, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCFoundation2, "strings", {
      get: function() {
        return {};
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCFoundation2, "numbers", {
      get: function() {
        return {};
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCFoundation2, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: true,
      configurable: true
    });
    MDCFoundation2.prototype.init = function() {
    };
    MDCFoundation2.prototype.destroy = function() {
    };
    return MDCFoundation2;
  }();

  // node_modules/@material/base/component.js
  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCComponent = function() {
    function MDCComponent2(root, foundation) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      this.root = root;
      this.initialize.apply(this, __spread(args));
      this.foundation = foundation === void 0 ? this.getDefaultFoundation() : foundation;
      this.foundation.init();
      this.initialSyncWithDOM();
    }
    MDCComponent2.attachTo = function(root) {
      return new MDCComponent2(root, new MDCFoundation({}));
    };
    MDCComponent2.prototype.initialize = function() {
      var _args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        _args[_i] = arguments[_i];
      }
    };
    MDCComponent2.prototype.getDefaultFoundation = function() {
      throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class");
    };
    MDCComponent2.prototype.initialSyncWithDOM = function() {
    };
    MDCComponent2.prototype.destroy = function() {
      this.foundation.destroy();
    };
    MDCComponent2.prototype.listen = function(evtType, handler, options) {
      this.root.addEventListener(evtType, handler, options);
    };
    MDCComponent2.prototype.unlisten = function(evtType, handler, options) {
      this.root.removeEventListener(evtType, handler, options);
    };
    MDCComponent2.prototype.emit = function(evtType, evtData, shouldBubble) {
      if (shouldBubble === void 0) {
        shouldBubble = false;
      }
      var evt;
      if (typeof CustomEvent === "function") {
        evt = new CustomEvent(evtType, {
          bubbles: shouldBubble,
          detail: evtData
        });
      } else {
        evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
      }
      this.root.dispatchEvent(evt);
    };
    return MDCComponent2;
  }();

  // node_modules/@material/dom/ponyfill.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  function closest(element, selector) {
    if (element.closest) {
      return element.closest(selector);
    }
    var el = element;
    while (el) {
      if (matches(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }
  function matches(element, selector) {
    var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
  }
  function estimateScrollWidth(element) {
    var htmlEl = element;
    if (htmlEl.offsetParent !== null) {
      return htmlEl.scrollWidth;
    }
    var clone = htmlEl.cloneNode(true);
    clone.style.setProperty("position", "absolute");
    clone.style.setProperty("transform", "translate(-9999px, -9999px)");
    document.documentElement.appendChild(clone);
    var scrollWidth = clone.scrollWidth;
    document.documentElement.removeChild(clone);
    return scrollWidth;
  }

  // node_modules/@material/floating-label/constants.js
  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses = {
    LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
    LABEL_REQUIRED: "mdc-floating-label--required",
    LABEL_SHAKE: "mdc-floating-label--shake",
    ROOT: "mdc-floating-label"
  };

  // node_modules/@material/floating-label/foundation.js
  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCFloatingLabelFoundation = function(_super) {
    __extends(MDCFloatingLabelFoundation2, _super);
    function MDCFloatingLabelFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCFloatingLabelFoundation2.defaultAdapter), adapter)) || this;
      _this.shakeAnimationEndHandler_ = function() {
        return _this.handleShakeAnimationEnd_();
      };
      return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation2, "cssClasses", {
      get: function() {
        return cssClasses;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          getWidth: function() {
            return 0;
          },
          registerInteractionHandler: function() {
            return void 0;
          },
          deregisterInteractionHandler: function() {
            return void 0;
          }
        };
      },
      enumerable: true,
      configurable: true
    });
    MDCFloatingLabelFoundation2.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler_);
    };
    MDCFloatingLabelFoundation2.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler_);
    };
    MDCFloatingLabelFoundation2.prototype.getWidth = function() {
      return this.adapter.getWidth();
    };
    MDCFloatingLabelFoundation2.prototype.shake = function(shouldShake) {
      var LABEL_SHAKE = MDCFloatingLabelFoundation2.cssClasses.LABEL_SHAKE;
      if (shouldShake) {
        this.adapter.addClass(LABEL_SHAKE);
      } else {
        this.adapter.removeClass(LABEL_SHAKE);
      }
    };
    MDCFloatingLabelFoundation2.prototype.float = function(shouldFloat) {
      var _a2 = MDCFloatingLabelFoundation2.cssClasses, LABEL_FLOAT_ABOVE = _a2.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a2.LABEL_SHAKE;
      if (shouldFloat) {
        this.adapter.addClass(LABEL_FLOAT_ABOVE);
      } else {
        this.adapter.removeClass(LABEL_FLOAT_ABOVE);
        this.adapter.removeClass(LABEL_SHAKE);
      }
    };
    MDCFloatingLabelFoundation2.prototype.setRequired = function(isRequired) {
      var LABEL_REQUIRED = MDCFloatingLabelFoundation2.cssClasses.LABEL_REQUIRED;
      if (isRequired) {
        this.adapter.addClass(LABEL_REQUIRED);
      } else {
        this.adapter.removeClass(LABEL_REQUIRED);
      }
    };
    MDCFloatingLabelFoundation2.prototype.handleShakeAnimationEnd_ = function() {
      var LABEL_SHAKE = MDCFloatingLabelFoundation2.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation2;
  }(MDCFoundation);

  // node_modules/@material/floating-label/component.js
  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCFloatingLabel = function(_super) {
    __extends(MDCFloatingLabel2, _super);
    function MDCFloatingLabel2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFloatingLabel2.attachTo = function(root) {
      return new MDCFloatingLabel2(root);
    };
    MDCFloatingLabel2.prototype.shake = function(shouldShake) {
      this.foundation.shake(shouldShake);
    };
    MDCFloatingLabel2.prototype.float = function(shouldFloat) {
      this.foundation.float(shouldFloat);
    };
    MDCFloatingLabel2.prototype.setRequired = function(isRequired) {
      this.foundation.setRequired(isRequired);
    };
    MDCFloatingLabel2.prototype.getWidth = function() {
      return this.foundation.getWidth();
    };
    MDCFloatingLabel2.prototype.getDefaultFoundation = function() {
      var _this = this;
      var adapter = {
        addClass: function(className) {
          return _this.root.classList.add(className);
        },
        removeClass: function(className) {
          return _this.root.classList.remove(className);
        },
        getWidth: function() {
          return estimateScrollWidth(_this.root);
        },
        registerInteractionHandler: function(evtType, handler) {
          return _this.listen(evtType, handler);
        },
        deregisterInteractionHandler: function(evtType, handler) {
          return _this.unlisten(evtType, handler);
        }
      };
      return new MDCFloatingLabelFoundation(adapter);
    };
    return MDCFloatingLabel2;
  }(MDCComponent);

  // node_modules/@material/line-ripple/constants.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses2 = {
    LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
    LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
  };

  // node_modules/@material/line-ripple/foundation.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCLineRippleFoundation = function(_super) {
    __extends(MDCLineRippleFoundation2, _super);
    function MDCLineRippleFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCLineRippleFoundation2.defaultAdapter), adapter)) || this;
      _this.transitionEndHandler_ = function(evt) {
        return _this.handleTransitionEnd(evt);
      };
      return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation2, "cssClasses", {
      get: function() {
        return cssClasses2;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          hasClass: function() {
            return false;
          },
          setStyle: function() {
            return void 0;
          },
          registerEventHandler: function() {
            return void 0;
          },
          deregisterEventHandler: function() {
            return void 0;
          }
        };
      },
      enumerable: true,
      configurable: true
    });
    MDCLineRippleFoundation2.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler_);
    };
    MDCLineRippleFoundation2.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler_);
    };
    MDCLineRippleFoundation2.prototype.activate = function() {
      this.adapter.removeClass(cssClasses2.LINE_RIPPLE_DEACTIVATING);
      this.adapter.addClass(cssClasses2.LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation2.prototype.setRippleCenter = function(xCoordinate) {
      this.adapter.setStyle("transform-origin", xCoordinate + "px center");
    };
    MDCLineRippleFoundation2.prototype.deactivate = function() {
      this.adapter.addClass(cssClasses2.LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation2.prototype.handleTransitionEnd = function(evt) {
      var isDeactivating = this.adapter.hasClass(cssClasses2.LINE_RIPPLE_DEACTIVATING);
      if (evt.propertyName === "opacity") {
        if (isDeactivating) {
          this.adapter.removeClass(cssClasses2.LINE_RIPPLE_ACTIVE);
          this.adapter.removeClass(cssClasses2.LINE_RIPPLE_DEACTIVATING);
        }
      }
    };
    return MDCLineRippleFoundation2;
  }(MDCFoundation);

  // node_modules/@material/line-ripple/component.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCLineRipple = function(_super) {
    __extends(MDCLineRipple2, _super);
    function MDCLineRipple2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCLineRipple2.attachTo = function(root) {
      return new MDCLineRipple2(root);
    };
    MDCLineRipple2.prototype.activate = function() {
      this.foundation.activate();
    };
    MDCLineRipple2.prototype.deactivate = function() {
      this.foundation.deactivate();
    };
    MDCLineRipple2.prototype.setRippleCenter = function(xCoordinate) {
      this.foundation.setRippleCenter(xCoordinate);
    };
    MDCLineRipple2.prototype.getDefaultFoundation = function() {
      var _this = this;
      var adapter = {
        addClass: function(className) {
          return _this.root.classList.add(className);
        },
        removeClass: function(className) {
          return _this.root.classList.remove(className);
        },
        hasClass: function(className) {
          return _this.root.classList.contains(className);
        },
        setStyle: function(propertyName, value) {
          return _this.root.style.setProperty(propertyName, value);
        },
        registerEventHandler: function(evtType, handler) {
          return _this.listen(evtType, handler);
        },
        deregisterEventHandler: function(evtType, handler) {
          return _this.unlisten(evtType, handler);
        }
      };
      return new MDCLineRippleFoundation(adapter);
    };
    return MDCLineRipple2;
  }(MDCComponent);

  // node_modules/@material/menu-surface/constants.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses3 = {
    ANCHOR: "mdc-menu-surface--anchor",
    ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
    ANIMATING_OPEN: "mdc-menu-surface--animating-open",
    FIXED: "mdc-menu-surface--fixed",
    IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
    OPEN: "mdc-menu-surface--open",
    ROOT: "mdc-menu-surface"
  };
  var strings = {
    CLOSED_EVENT: "MDCMenuSurface:closed",
    CLOSING_EVENT: "MDCMenuSurface:closing",
    OPENED_EVENT: "MDCMenuSurface:opened",
    FOCUSABLE_ELEMENTS: [
      "button:not(:disabled)",
      '[href]:not([aria-disabled="true"])',
      "input:not(:disabled)",
      "select:not(:disabled)",
      "textarea:not(:disabled)",
      '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
    ].join(", ")
  };
  var numbers = {
    TRANSITION_OPEN_DURATION: 120,
    TRANSITION_CLOSE_DURATION: 75,
    MARGIN_TO_EDGE: 32,
    ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67
  };
  var CornerBit;
  (function(CornerBit2) {
    CornerBit2[CornerBit2["BOTTOM"] = 1] = "BOTTOM";
    CornerBit2[CornerBit2["CENTER"] = 2] = "CENTER";
    CornerBit2[CornerBit2["RIGHT"] = 4] = "RIGHT";
    CornerBit2[CornerBit2["FLIP_RTL"] = 8] = "FLIP_RTL";
  })(CornerBit || (CornerBit = {}));
  var Corner;
  (function(Corner2) {
    Corner2[Corner2["TOP_LEFT"] = 0] = "TOP_LEFT";
    Corner2[Corner2["TOP_RIGHT"] = 4] = "TOP_RIGHT";
    Corner2[Corner2["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
    Corner2[Corner2["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
    Corner2[Corner2["TOP_START"] = 8] = "TOP_START";
    Corner2[Corner2["TOP_END"] = 12] = "TOP_END";
    Corner2[Corner2["BOTTOM_START"] = 9] = "BOTTOM_START";
    Corner2[Corner2["BOTTOM_END"] = 13] = "BOTTOM_END";
  })(Corner || (Corner = {}));

  // node_modules/@material/list/constants.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var _a;
  var cssClasses4 = {
    LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
    LIST_ITEM_CLASS: "mdc-list-item",
    LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
    LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
    LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
    LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
    ROOT: "mdc-list"
  };
  var strings2 = {
    ACTION_EVENT: "MDCList:action",
    ARIA_CHECKED: "aria-checked",
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: "aria-current",
    ARIA_DISABLED: "aria-disabled",
    ARIA_ORIENTATION: "aria-orientation",
    ARIA_ORIENTATION_HORIZONTAL: "horizontal",
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: "aria-selected",
    ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
    ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "button:not(:disabled), a",
    FOCUSABLE_CHILD_ELEMENTS: 'button:not(:disabled), a, input[type="radio"]:not(:disabled), input[type="checkbox"]:not(:disabled)',
    RADIO_SELECTOR: 'input[type="radio"]',
    SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
  };
  var numbers2 = {
    UNSET_INDEX: -1,
    TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
  };
  var evolutionClassNameMap = (_a = {}, _a["" + cssClasses4.LIST_ITEM_ACTIVATED_CLASS] = "mdc-evolution-list-item--activated", _a["" + cssClasses4.LIST_ITEM_CLASS] = "mdc-evolution-list-item", _a["" + cssClasses4.LIST_ITEM_DISABLED_CLASS] = "mdc-evolution-list-item--disabled", _a["" + cssClasses4.LIST_ITEM_SELECTED_CLASS] = "mdc-evolution-list-item--selected", _a["" + cssClasses4.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-evolution-list-item__primary-text", _a["" + cssClasses4.ROOT] = "mdc-evolution-list", _a);
  var evolutionAttribute = "evolution";

  // node_modules/@material/dom/keyboard.js
  /**
   * @license
   * Copyright 2020 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var KEY = {
    UNKNOWN: "Unknown",
    BACKSPACE: "Backspace",
    ENTER: "Enter",
    SPACEBAR: "Spacebar",
    PAGE_UP: "PageUp",
    PAGE_DOWN: "PageDown",
    END: "End",
    HOME: "Home",
    ARROW_LEFT: "ArrowLeft",
    ARROW_UP: "ArrowUp",
    ARROW_RIGHT: "ArrowRight",
    ARROW_DOWN: "ArrowDown",
    DELETE: "Delete",
    ESCAPE: "Escape"
  };
  var normalizedKeys = new Set();
  normalizedKeys.add(KEY.BACKSPACE);
  normalizedKeys.add(KEY.ENTER);
  normalizedKeys.add(KEY.SPACEBAR);
  normalizedKeys.add(KEY.PAGE_UP);
  normalizedKeys.add(KEY.PAGE_DOWN);
  normalizedKeys.add(KEY.END);
  normalizedKeys.add(KEY.HOME);
  normalizedKeys.add(KEY.ARROW_LEFT);
  normalizedKeys.add(KEY.ARROW_UP);
  normalizedKeys.add(KEY.ARROW_RIGHT);
  normalizedKeys.add(KEY.ARROW_DOWN);
  normalizedKeys.add(KEY.DELETE);
  normalizedKeys.add(KEY.ESCAPE);
  var KEY_CODE = {
    BACKSPACE: 8,
    ENTER: 13,
    SPACEBAR: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    DELETE: 46,
    ESCAPE: 27
  };
  var mappedKeyCodes = new Map();
  mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
  mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
  mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
  mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
  mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
  mappedKeyCodes.set(KEY_CODE.END, KEY.END);
  mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
  mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
  mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
  mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
  mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
  mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
  mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
  var navigationKeys = new Set();
  navigationKeys.add(KEY.PAGE_UP);
  navigationKeys.add(KEY.PAGE_DOWN);
  navigationKeys.add(KEY.END);
  navigationKeys.add(KEY.HOME);
  navigationKeys.add(KEY.ARROW_LEFT);
  navigationKeys.add(KEY.ARROW_UP);
  navigationKeys.add(KEY.ARROW_RIGHT);
  navigationKeys.add(KEY.ARROW_DOWN);
  function normalizeKey(evt) {
    var key = evt.key;
    if (normalizedKeys.has(key)) {
      return key;
    }
    var mappedKey = mappedKeyCodes.get(evt.keyCode);
    if (mappedKey) {
      return mappedKey;
    }
    return KEY.UNKNOWN;
  }

  // node_modules/@material/list/events.js
  /**
   * @license
   * Copyright 2020 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var ELEMENTS_KEY_ALLOWED_IN = ["input", "button", "textarea", "select"];
  var preventDefaultEvent = function(evt) {
    var target = evt.target;
    if (!target) {
      return;
    }
    var tagName = ("" + target.tagName).toLowerCase();
    if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
      evt.preventDefault();
    }
  };

  // node_modules/@material/list/typeahead.js
  /**
   * @license
   * Copyright 2020 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  function initState() {
    var state = {
      bufferClearTimeout: 0,
      currentFirstChar: "",
      sortedIndexCursor: 0,
      typeaheadBuffer: ""
    };
    return state;
  }
  function initSortedIndex(listItemCount, getPrimaryTextByItemIndex) {
    var sortedIndexByFirstChar = new Map();
    for (var i = 0; i < listItemCount; i++) {
      var primaryText = getPrimaryTextByItemIndex(i).trim();
      if (!primaryText) {
        continue;
      }
      var firstChar = primaryText[0].toLowerCase();
      if (!sortedIndexByFirstChar.has(firstChar)) {
        sortedIndexByFirstChar.set(firstChar, []);
      }
      sortedIndexByFirstChar.get(firstChar).push({text: primaryText.toLowerCase(), index: i});
    }
    sortedIndexByFirstChar.forEach(function(values) {
      values.sort(function(first, second) {
        return first.index - second.index;
      });
    });
    return sortedIndexByFirstChar;
  }
  function matchItem(opts, state) {
    var nextChar = opts.nextChar, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, focusedItemIndex = opts.focusedItemIndex, skipFocus = opts.skipFocus, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
    clearTimeout(state.bufferClearTimeout);
    state.bufferClearTimeout = setTimeout(function() {
      clearBuffer(state);
    }, numbers2.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS);
    state.typeaheadBuffer = state.typeaheadBuffer + nextChar;
    var index;
    if (state.typeaheadBuffer.length === 1) {
      index = matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state);
    } else {
      index = matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state);
    }
    if (index !== -1 && !skipFocus) {
      focusItemAtIndex(index);
    }
    return index;
  }
  function matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state) {
    var firstChar = state.typeaheadBuffer[0];
    var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
    if (!itemsMatchingFirstChar) {
      return -1;
    }
    if (firstChar === state.currentFirstChar && itemsMatchingFirstChar[state.sortedIndexCursor].index === focusedItemIndex) {
      state.sortedIndexCursor = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
      var newIndex = itemsMatchingFirstChar[state.sortedIndexCursor].index;
      if (!isItemAtIndexDisabled(newIndex)) {
        return newIndex;
      }
    }
    state.currentFirstChar = firstChar;
    var newCursorPosition = -1;
    var cursorPosition;
    for (cursorPosition = 0; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
      if (!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
        newCursorPosition = cursorPosition;
        break;
      }
    }
    for (; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
      if (itemsMatchingFirstChar[cursorPosition].index > focusedItemIndex && !isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
        newCursorPosition = cursorPosition;
        break;
      }
    }
    if (newCursorPosition !== -1) {
      state.sortedIndexCursor = newCursorPosition;
      return itemsMatchingFirstChar[state.sortedIndexCursor].index;
    }
    return -1;
  }
  function matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state) {
    var firstChar = state.typeaheadBuffer[0];
    var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
    if (!itemsMatchingFirstChar) {
      return -1;
    }
    var startingItem = itemsMatchingFirstChar[state.sortedIndexCursor];
    if (startingItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0 && !isItemAtIndexDisabled(startingItem.index)) {
      return startingItem.index;
    }
    var cursorPosition = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
    var nextCursorPosition = -1;
    while (cursorPosition !== state.sortedIndexCursor) {
      var currentItem = itemsMatchingFirstChar[cursorPosition];
      var matches2 = currentItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0;
      var isEnabled = !isItemAtIndexDisabled(currentItem.index);
      if (matches2 && isEnabled) {
        nextCursorPosition = cursorPosition;
        break;
      }
      cursorPosition = (cursorPosition + 1) % itemsMatchingFirstChar.length;
    }
    if (nextCursorPosition !== -1) {
      state.sortedIndexCursor = nextCursorPosition;
      return itemsMatchingFirstChar[state.sortedIndexCursor].index;
    }
    return -1;
  }
  function isTypingInProgress(state) {
    return state.typeaheadBuffer.length > 0;
  }
  function clearBuffer(state) {
    state.typeaheadBuffer = "";
  }
  function handleKeydown(opts, state) {
    var event = opts.event, isTargetListItem = opts.isTargetListItem, focusedItemIndex = opts.focusedItemIndex, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
    var isArrowLeft = normalizeKey(event) === "ArrowLeft";
    var isArrowUp = normalizeKey(event) === "ArrowUp";
    var isArrowRight = normalizeKey(event) === "ArrowRight";
    var isArrowDown = normalizeKey(event) === "ArrowDown";
    var isHome = normalizeKey(event) === "Home";
    var isEnd = normalizeKey(event) === "End";
    var isEnter = normalizeKey(event) === "Enter";
    var isSpace = normalizeKey(event) === "Spacebar";
    if (isArrowLeft || isArrowUp || isArrowRight || isArrowDown || isHome || isEnd || isEnter) {
      return -1;
    }
    var isCharacterKey = !isSpace && event.key.length === 1;
    if (isCharacterKey) {
      preventDefaultEvent(event);
      var matchItemOpts = {
        focusItemAtIndex,
        focusedItemIndex,
        nextChar: event.key.toLowerCase(),
        sortedIndexByFirstChar,
        skipFocus: false,
        isItemAtIndexDisabled
      };
      return matchItem(matchItemOpts, state);
    }
    if (!isSpace) {
      return -1;
    }
    if (isTargetListItem) {
      preventDefaultEvent(event);
    }
    var typeaheadOnListItem = isTargetListItem && isTypingInProgress(state);
    if (typeaheadOnListItem) {
      var matchItemOpts = {
        focusItemAtIndex,
        focusedItemIndex,
        nextChar: " ",
        sortedIndexByFirstChar,
        skipFocus: false,
        isItemAtIndexDisabled
      };
      return matchItem(matchItemOpts, state);
    }
    return -1;
  }

  // node_modules/@material/list/foundation.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  function isNumberArray(selectedIndex) {
    return selectedIndex instanceof Array;
  }
  var MDCListFoundation = function(_super) {
    __extends(MDCListFoundation2, _super);
    function MDCListFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCListFoundation2.defaultAdapter), adapter)) || this;
      _this.wrapFocus_ = false;
      _this.isVertical_ = true;
      _this.isSingleSelectionList_ = false;
      _this.selectedIndex_ = numbers2.UNSET_INDEX;
      _this.focusedItemIndex = numbers2.UNSET_INDEX;
      _this.useActivatedClass_ = false;
      _this.useSelectedAttr_ = false;
      _this.ariaCurrentAttrValue_ = null;
      _this.isCheckboxList_ = false;
      _this.isRadioList_ = false;
      _this.hasTypeahead = false;
      _this.typeaheadState = initState();
      _this.sortedIndexByFirstChar = new Map();
      return _this;
    }
    Object.defineProperty(MDCListFoundation2, "strings", {
      get: function() {
        return strings2;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCListFoundation2, "cssClasses", {
      get: function() {
        return cssClasses4;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCListFoundation2, "numbers", {
      get: function() {
        return numbers2;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCListFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClassForElementIndex: function() {
            return void 0;
          },
          focusItemAtIndex: function() {
            return void 0;
          },
          getAttributeForElementIndex: function() {
            return null;
          },
          getFocusedElementIndex: function() {
            return 0;
          },
          getListItemCount: function() {
            return 0;
          },
          hasCheckboxAtIndex: function() {
            return false;
          },
          hasRadioAtIndex: function() {
            return false;
          },
          isCheckboxCheckedAtIndex: function() {
            return false;
          },
          isFocusInsideList: function() {
            return false;
          },
          isRootFocused: function() {
            return false;
          },
          listItemAtIndexHasClass: function() {
            return false;
          },
          notifyAction: function() {
            return void 0;
          },
          removeClassForElementIndex: function() {
            return void 0;
          },
          setAttributeForElementIndex: function() {
            return void 0;
          },
          setCheckedCheckboxOrRadioAtIndex: function() {
            return void 0;
          },
          setTabIndexForListItemChildren: function() {
            return void 0;
          },
          getPrimaryTextAtIndex: function() {
            return "";
          }
        };
      },
      enumerable: true,
      configurable: true
    });
    MDCListFoundation2.prototype.layout = function() {
      if (this.adapter.getListItemCount() === 0) {
        return;
      }
      if (this.adapter.hasCheckboxAtIndex(0)) {
        this.isCheckboxList_ = true;
      } else if (this.adapter.hasRadioAtIndex(0)) {
        this.isRadioList_ = true;
      } else {
        this.maybeInitializeSingleSelection();
      }
      if (this.hasTypeahead) {
        this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
      }
    };
    MDCListFoundation2.prototype.setWrapFocus = function(value) {
      this.wrapFocus_ = value;
    };
    MDCListFoundation2.prototype.setVerticalOrientation = function(value) {
      this.isVertical_ = value;
    };
    MDCListFoundation2.prototype.setSingleSelection = function(value) {
      this.isSingleSelectionList_ = value;
      if (value) {
        this.maybeInitializeSingleSelection();
      }
    };
    MDCListFoundation2.prototype.maybeInitializeSingleSelection = function() {
      var listItemsCount = this.adapter.getListItemCount();
      for (var i = 0; i < listItemsCount; i++) {
        var hasSelectedClass = this.adapter.listItemAtIndexHasClass(i, cssClasses4.LIST_ITEM_SELECTED_CLASS);
        var hasActivatedClass = this.adapter.listItemAtIndexHasClass(i, cssClasses4.LIST_ITEM_ACTIVATED_CLASS);
        if (!(hasSelectedClass || hasActivatedClass)) {
          continue;
        }
        if (hasActivatedClass) {
          this.setUseActivatedClass(true);
        }
        this.isSingleSelectionList_ = true;
        this.selectedIndex_ = i;
        return;
      }
    };
    MDCListFoundation2.prototype.setHasTypeahead = function(hasTypeahead) {
      this.hasTypeahead = hasTypeahead;
      if (hasTypeahead) {
        this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
      }
    };
    MDCListFoundation2.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && isTypingInProgress(this.typeaheadState);
    };
    MDCListFoundation2.prototype.setUseActivatedClass = function(useActivated) {
      this.useActivatedClass_ = useActivated;
    };
    MDCListFoundation2.prototype.setUseSelectedAttribute = function(useSelected) {
      this.useSelectedAttr_ = useSelected;
    };
    MDCListFoundation2.prototype.getSelectedIndex = function() {
      return this.selectedIndex_;
    };
    MDCListFoundation2.prototype.setSelectedIndex = function(index) {
      if (!this.isIndexValid_(index)) {
        return;
      }
      if (this.isCheckboxList_) {
        this.setCheckboxAtIndex_(index);
      } else if (this.isRadioList_) {
        this.setRadioAtIndex_(index);
      } else {
        this.setSingleSelectionAtIndex_(index);
      }
    };
    MDCListFoundation2.prototype.handleFocusIn = function(_, listItemIndex) {
      if (listItemIndex >= 0) {
        this.focusedItemIndex = listItemIndex;
        this.adapter.setAttributeForElementIndex(listItemIndex, "tabindex", "0");
        this.adapter.setTabIndexForListItemChildren(listItemIndex, "0");
      }
    };
    MDCListFoundation2.prototype.handleFocusOut = function(_, listItemIndex) {
      var _this = this;
      if (listItemIndex >= 0) {
        this.adapter.setAttributeForElementIndex(listItemIndex, "tabindex", "-1");
        this.adapter.setTabIndexForListItemChildren(listItemIndex, "-1");
      }
      setTimeout(function() {
        if (!_this.adapter.isFocusInsideList()) {
          _this.setTabindexToFirstSelectedOrFocusedItem();
        }
      }, 0);
    };
    MDCListFoundation2.prototype.handleKeydown = function(event, isRootListItem, listItemIndex) {
      var _this = this;
      var isArrowLeft = normalizeKey(event) === "ArrowLeft";
      var isArrowUp = normalizeKey(event) === "ArrowUp";
      var isArrowRight = normalizeKey(event) === "ArrowRight";
      var isArrowDown = normalizeKey(event) === "ArrowDown";
      var isHome = normalizeKey(event) === "Home";
      var isEnd = normalizeKey(event) === "End";
      var isEnter = normalizeKey(event) === "Enter";
      var isSpace = normalizeKey(event) === "Spacebar";
      var isLetterA = event.key === "A" || event.key === "a";
      if (this.adapter.isRootFocused()) {
        if (isArrowUp || isEnd) {
          event.preventDefault();
          this.focusLastElement();
        } else if (isArrowDown || isHome) {
          event.preventDefault();
          this.focusFirstElement();
        }
        if (this.hasTypeahead) {
          var handleKeydownOpts = {
            event,
            focusItemAtIndex: function(index) {
              _this.focusItemAtIndex(index);
            },
            focusedItemIndex: -1,
            isTargetListItem: isRootListItem,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(index) {
              return _this.adapter.listItemAtIndexHasClass(index, cssClasses4.LIST_ITEM_DISABLED_CLASS);
            }
          };
          handleKeydown(handleKeydownOpts, this.typeaheadState);
        }
        return;
      }
      var currentIndex = this.adapter.getFocusedElementIndex();
      if (currentIndex === -1) {
        currentIndex = listItemIndex;
        if (currentIndex < 0) {
          return;
        }
      }
      if (this.isVertical_ && isArrowDown || !this.isVertical_ && isArrowRight) {
        preventDefaultEvent(event);
        this.focusNextElement(currentIndex);
      } else if (this.isVertical_ && isArrowUp || !this.isVertical_ && isArrowLeft) {
        preventDefaultEvent(event);
        this.focusPrevElement(currentIndex);
      } else if (isHome) {
        preventDefaultEvent(event);
        this.focusFirstElement();
      } else if (isEnd) {
        preventDefaultEvent(event);
        this.focusLastElement();
      } else if (isLetterA && event.ctrlKey && this.isCheckboxList_) {
        event.preventDefault();
        this.toggleAll(this.selectedIndex_ === numbers2.UNSET_INDEX ? [] : this.selectedIndex_);
      } else if (isEnter || isSpace) {
        if (isRootListItem) {
          var target = event.target;
          if (target && target.tagName === "A" && isEnter) {
            return;
          }
          preventDefaultEvent(event);
          if (this.adapter.listItemAtIndexHasClass(currentIndex, cssClasses4.LIST_ITEM_DISABLED_CLASS)) {
            return;
          }
          if (!this.isTypeaheadInProgress()) {
            if (this.isSelectableList_()) {
              this.setSelectedIndexOnAction_(currentIndex);
            }
            this.adapter.notifyAction(currentIndex);
          }
        }
      }
      if (this.hasTypeahead) {
        var handleKeydownOpts = {
          event,
          focusItemAtIndex: function(index) {
            _this.focusItemAtIndex(index);
          },
          focusedItemIndex: this.focusedItemIndex,
          isTargetListItem: isRootListItem,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: function(index) {
            return _this.adapter.listItemAtIndexHasClass(index, cssClasses4.LIST_ITEM_DISABLED_CLASS);
          }
        };
        handleKeydown(handleKeydownOpts, this.typeaheadState);
      }
    };
    MDCListFoundation2.prototype.handleClick = function(index, toggleCheckbox) {
      if (index === numbers2.UNSET_INDEX) {
        return;
      }
      if (this.adapter.listItemAtIndexHasClass(index, cssClasses4.LIST_ITEM_DISABLED_CLASS)) {
        return;
      }
      if (this.isSelectableList_()) {
        this.setSelectedIndexOnAction_(index, toggleCheckbox);
      }
      this.adapter.notifyAction(index);
    };
    MDCListFoundation2.prototype.focusNextElement = function(index) {
      var count = this.adapter.getListItemCount();
      var nextIndex = index + 1;
      if (nextIndex >= count) {
        if (this.wrapFocus_) {
          nextIndex = 0;
        } else {
          return index;
        }
      }
      this.focusItemAtIndex(nextIndex);
      return nextIndex;
    };
    MDCListFoundation2.prototype.focusPrevElement = function(index) {
      var prevIndex = index - 1;
      if (prevIndex < 0) {
        if (this.wrapFocus_) {
          prevIndex = this.adapter.getListItemCount() - 1;
        } else {
          return index;
        }
      }
      this.focusItemAtIndex(prevIndex);
      return prevIndex;
    };
    MDCListFoundation2.prototype.focusFirstElement = function() {
      this.focusItemAtIndex(0);
      return 0;
    };
    MDCListFoundation2.prototype.focusLastElement = function() {
      var lastIndex = this.adapter.getListItemCount() - 1;
      this.focusItemAtIndex(lastIndex);
      return lastIndex;
    };
    MDCListFoundation2.prototype.focusInitialElement = function() {
      var initialIndex = this.getFirstSelectedOrFocusedItemIndex();
      this.focusItemAtIndex(initialIndex);
      return initialIndex;
    };
    MDCListFoundation2.prototype.setEnabled = function(itemIndex, isEnabled) {
      if (!this.isIndexValid_(itemIndex)) {
        return;
      }
      if (isEnabled) {
        this.adapter.removeClassForElementIndex(itemIndex, cssClasses4.LIST_ITEM_DISABLED_CLASS);
        this.adapter.setAttributeForElementIndex(itemIndex, strings2.ARIA_DISABLED, "false");
      } else {
        this.adapter.addClassForElementIndex(itemIndex, cssClasses4.LIST_ITEM_DISABLED_CLASS);
        this.adapter.setAttributeForElementIndex(itemIndex, strings2.ARIA_DISABLED, "true");
      }
    };
    MDCListFoundation2.prototype.setSingleSelectionAtIndex_ = function(index) {
      if (this.selectedIndex_ === index) {
        return;
      }
      var selectedClassName = cssClasses4.LIST_ITEM_SELECTED_CLASS;
      if (this.useActivatedClass_) {
        selectedClassName = cssClasses4.LIST_ITEM_ACTIVATED_CLASS;
      }
      if (this.selectedIndex_ !== numbers2.UNSET_INDEX) {
        this.adapter.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
      }
      this.setAriaForSingleSelectionAtIndex_(index);
      this.setTabindexAtIndex(index);
      if (index !== numbers2.UNSET_INDEX) {
        this.adapter.addClassForElementIndex(index, selectedClassName);
      }
      this.selectedIndex_ = index;
    };
    MDCListFoundation2.prototype.setAriaForSingleSelectionAtIndex_ = function(index) {
      if (this.selectedIndex_ === numbers2.UNSET_INDEX) {
        this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(index, strings2.ARIA_CURRENT);
      }
      var isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
      var ariaAttribute = isAriaCurrent ? strings2.ARIA_CURRENT : strings2.ARIA_SELECTED;
      if (this.selectedIndex_ !== numbers2.UNSET_INDEX) {
        this.adapter.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, "false");
      }
      if (index !== numbers2.UNSET_INDEX) {
        var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : "true";
        this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
      }
    };
    MDCListFoundation2.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr_ ? strings2.ARIA_SELECTED : strings2.ARIA_CHECKED;
    };
    MDCListFoundation2.prototype.setRadioAtIndex_ = function(index) {
      var selectionAttribute = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(index, true);
      if (this.selectedIndex_ !== numbers2.UNSET_INDEX) {
        this.adapter.setAttributeForElementIndex(this.selectedIndex_, selectionAttribute, "false");
      }
      this.adapter.setAttributeForElementIndex(index, selectionAttribute, "true");
      this.selectedIndex_ = index;
    };
    MDCListFoundation2.prototype.setCheckboxAtIndex_ = function(index) {
      var selectionAttribute = this.getSelectionAttribute();
      for (var i = 0; i < this.adapter.getListItemCount(); i++) {
        var isChecked = false;
        if (index.indexOf(i) >= 0) {
          isChecked = true;
        }
        this.adapter.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
        this.adapter.setAttributeForElementIndex(i, selectionAttribute, isChecked ? "true" : "false");
      }
      this.selectedIndex_ = index;
    };
    MDCListFoundation2.prototype.setTabindexAtIndex = function(index) {
      if (this.focusedItemIndex === numbers2.UNSET_INDEX && index !== 0) {
        this.adapter.setAttributeForElementIndex(0, "tabindex", "-1");
      } else if (this.focusedItemIndex >= 0 && this.focusedItemIndex !== index) {
        this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1");
      }
      if (!(this.selectedIndex_ instanceof Array) && this.selectedIndex_ !== index) {
        this.adapter.setAttributeForElementIndex(this.selectedIndex_, "tabindex", "-1");
      }
      if (index !== numbers2.UNSET_INDEX) {
        this.adapter.setAttributeForElementIndex(index, "tabindex", "0");
      }
    };
    MDCListFoundation2.prototype.isSelectableList_ = function() {
      return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
    };
    MDCListFoundation2.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var targetIndex = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(targetIndex);
    };
    MDCListFoundation2.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      var targetIndex = this.focusedItemIndex >= 0 ? this.focusedItemIndex : 0;
      if (this.isSelectableList_()) {
        if (typeof this.selectedIndex_ === "number" && this.selectedIndex_ !== numbers2.UNSET_INDEX) {
          targetIndex = this.selectedIndex_;
        } else if (isNumberArray(this.selectedIndex_) && this.selectedIndex_.length > 0) {
          targetIndex = this.selectedIndex_.reduce(function(currentIndex, minIndex) {
            return Math.min(currentIndex, minIndex);
          });
        }
      }
      return targetIndex;
    };
    MDCListFoundation2.prototype.isIndexValid_ = function(index) {
      var _this = this;
      if (index instanceof Array) {
        if (!this.isCheckboxList_) {
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        }
        if (index.length === 0) {
          return true;
        } else {
          return index.some(function(i) {
            return _this.isIndexInRange_(i);
          });
        }
      } else if (typeof index === "number") {
        if (this.isCheckboxList_) {
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
        }
        return this.isIndexInRange_(index) || this.isSingleSelectionList_ && index === numbers2.UNSET_INDEX;
      } else {
        return false;
      }
    };
    MDCListFoundation2.prototype.isIndexInRange_ = function(index) {
      var listSize = this.adapter.getListItemCount();
      return index >= 0 && index < listSize;
    };
    MDCListFoundation2.prototype.setSelectedIndexOnAction_ = function(index, toggleCheckbox) {
      if (toggleCheckbox === void 0) {
        toggleCheckbox = true;
      }
      if (this.isCheckboxList_) {
        this.toggleCheckboxAtIndex_(index, toggleCheckbox);
      } else {
        this.setSelectedIndex(index);
      }
    };
    MDCListFoundation2.prototype.toggleCheckboxAtIndex_ = function(index, toggleCheckbox) {
      var selectionAttribute = this.getSelectionAttribute();
      var isChecked = this.adapter.isCheckboxCheckedAtIndex(index);
      if (toggleCheckbox) {
        isChecked = !isChecked;
        this.adapter.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
      }
      this.adapter.setAttributeForElementIndex(index, selectionAttribute, isChecked ? "true" : "false");
      var selectedIndexes = this.selectedIndex_ === numbers2.UNSET_INDEX ? [] : this.selectedIndex_.slice();
      if (isChecked) {
        selectedIndexes.push(index);
      } else {
        selectedIndexes = selectedIndexes.filter(function(i) {
          return i !== index;
        });
      }
      this.selectedIndex_ = selectedIndexes;
    };
    MDCListFoundation2.prototype.focusItemAtIndex = function(index) {
      this.adapter.focusItemAtIndex(index);
      this.focusedItemIndex = index;
    };
    MDCListFoundation2.prototype.toggleAll = function(currentlySelectedIndexes) {
      var count = this.adapter.getListItemCount();
      if (currentlySelectedIndexes.length === count) {
        this.setCheckboxAtIndex_([]);
      } else {
        var allIndexes = [];
        for (var i = 0; i < count; i++) {
          if (!this.adapter.listItemAtIndexHasClass(i, cssClasses4.LIST_ITEM_DISABLED_CLASS) || currentlySelectedIndexes.indexOf(i) > -1) {
            allIndexes.push(i);
          }
        }
        this.setCheckboxAtIndex_(allIndexes);
      }
    };
    MDCListFoundation2.prototype.typeaheadMatchItem = function(nextChar, startingIndex, skipFocus) {
      var _this = this;
      if (skipFocus === void 0) {
        skipFocus = false;
      }
      var opts = {
        focusItemAtIndex: function(index) {
          _this.focusItemAtIndex(index);
        },
        focusedItemIndex: startingIndex ? startingIndex : this.focusedItemIndex,
        nextChar,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus,
        isItemAtIndexDisabled: function(index) {
          return _this.adapter.listItemAtIndexHasClass(index, cssClasses4.LIST_ITEM_DISABLED_CLASS);
        }
      };
      return matchItem(opts, this.typeaheadState);
    };
    MDCListFoundation2.prototype.typeaheadInitSortedIndex = function() {
      return initSortedIndex(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    };
    MDCListFoundation2.prototype.clearTypeaheadBuffer = function() {
      clearBuffer(this.typeaheadState);
    };
    return MDCListFoundation2;
  }(MDCFoundation);

  // node_modules/@material/list/component.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCList = function(_super) {
    __extends(MDCList2, _super);
    function MDCList2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MDCList2.prototype, "vertical", {
      set: function(value) {
        this.foundation.setVerticalOrientation(value);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCList2.prototype, "listElements", {
      get: function() {
        return Array.from(this.root.querySelectorAll("." + this.classNameMap[cssClasses4.LIST_ITEM_CLASS]));
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCList2.prototype, "wrapFocus", {
      set: function(value) {
        this.foundation.setWrapFocus(value);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCList2.prototype, "typeaheadInProgress", {
      get: function() {
        return this.foundation.isTypeaheadInProgress();
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCList2.prototype, "hasTypeahead", {
      set: function(hasTypeahead) {
        this.foundation.setHasTypeahead(hasTypeahead);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCList2.prototype, "singleSelection", {
      set: function(isSingleSelectionList) {
        this.foundation.setSingleSelection(isSingleSelectionList);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCList2.prototype, "selectedIndex", {
      get: function() {
        return this.foundation.getSelectedIndex();
      },
      set: function(index) {
        this.foundation.setSelectedIndex(index);
      },
      enumerable: true,
      configurable: true
    });
    MDCList2.attachTo = function(root) {
      return new MDCList2(root);
    };
    MDCList2.prototype.initialSyncWithDOM = function() {
      this.isEvolutionEnabled = evolutionAttribute in this.root.dataset;
      this.classNameMap = this.isEvolutionEnabled ? evolutionClassNameMap : Object.values(cssClasses4).reduce(function(obj, className) {
        obj[className] = className;
        return obj;
      }, {});
      this.handleClick = this.handleClickEvent.bind(this);
      this.handleKeydown = this.handleKeydownEvent.bind(this);
      this.focusInEventListener = this.handleFocusInEvent.bind(this);
      this.focusOutEventListener = this.handleFocusOutEvent.bind(this);
      this.listen("keydown", this.handleKeydown);
      this.listen("click", this.handleClick);
      this.listen("focusin", this.focusInEventListener);
      this.listen("focusout", this.focusOutEventListener);
      this.layout();
      this.initializeListType();
      this.ensureFocusable();
    };
    MDCList2.prototype.destroy = function() {
      this.unlisten("keydown", this.handleKeydown);
      this.unlisten("click", this.handleClick);
      this.unlisten("focusin", this.focusInEventListener);
      this.unlisten("focusout", this.focusOutEventListener);
    };
    MDCList2.prototype.layout = function() {
      var direction = this.root.getAttribute(strings2.ARIA_ORIENTATION);
      this.vertical = direction !== strings2.ARIA_ORIENTATION_HORIZONTAL;
      var itemSelector = "." + this.classNameMap[cssClasses4.LIST_ITEM_CLASS] + ":not([tabindex])";
      var childSelector = "." + this.classNameMap[cssClasses4.LIST_ITEM_CLASS] + " " + strings2.FOCUSABLE_CHILD_ELEMENTS;
      Array.prototype.forEach.call(this.root.querySelectorAll(itemSelector), function(el) {
        el.setAttribute("tabindex", "-1");
      });
      Array.prototype.forEach.call(this.root.querySelectorAll(childSelector), function(el) {
        el.setAttribute("tabindex", "-1");
      });
      if (this.isEvolutionEnabled) {
        this.foundation.setUseSelectedAttribute(true);
      }
      this.foundation.layout();
    };
    MDCList2.prototype.getPrimaryText = function(item) {
      var _a2;
      var primaryText = item.querySelector("." + this.classNameMap[cssClasses4.LIST_ITEM_PRIMARY_TEXT_CLASS]);
      if (this.isEvolutionEnabled || primaryText) {
        return (_a2 = primaryText === null || primaryText === void 0 ? void 0 : primaryText.textContent) !== null && _a2 !== void 0 ? _a2 : "";
      }
      var singleLineText = item.querySelector("." + this.classNameMap[cssClasses4.LIST_ITEM_TEXT_CLASS]);
      return singleLineText && singleLineText.textContent || "";
    };
    MDCList2.prototype.initializeListType = function() {
      var _this = this;
      this.isInteractive = matches(this.root, strings2.ARIA_INTERACTIVE_ROLES_SELECTOR);
      if (this.isEvolutionEnabled && this.isInteractive) {
        var selection = Array.from(this.root.querySelectorAll(strings2.SELECTED_ITEM_SELECTOR), function(listItem) {
          return _this.listElements.indexOf(listItem);
        });
        if (matches(this.root, strings2.ARIA_MULTI_SELECTABLE_SELECTOR)) {
          this.selectedIndex = selection;
        } else if (selection.length > 0) {
          this.selectedIndex = selection[0];
        }
        return;
      }
      var checkboxListItems = this.root.querySelectorAll(strings2.ARIA_ROLE_CHECKBOX_SELECTOR);
      var radioSelectedListItem = this.root.querySelector(strings2.ARIA_CHECKED_RADIO_SELECTOR);
      if (checkboxListItems.length) {
        var preselectedItems = this.root.querySelectorAll(strings2.ARIA_CHECKED_CHECKBOX_SELECTOR);
        this.selectedIndex = Array.from(preselectedItems, function(listItem) {
          return _this.listElements.indexOf(listItem);
        });
      } else if (radioSelectedListItem) {
        this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
      }
    };
    MDCList2.prototype.setEnabled = function(itemIndex, isEnabled) {
      this.foundation.setEnabled(itemIndex, isEnabled);
    };
    MDCList2.prototype.typeaheadMatchItem = function(nextChar, startingIndex) {
      return this.foundation.typeaheadMatchItem(nextChar, startingIndex, true);
    };
    MDCList2.prototype.getDefaultFoundation = function() {
      var _this = this;
      var adapter = {
        addClassForElementIndex: function(index, className) {
          var element = _this.listElements[index];
          if (element) {
            element.classList.add(_this.classNameMap[className]);
          }
        },
        focusItemAtIndex: function(index) {
          var element = _this.listElements[index];
          if (element) {
            element.focus();
          }
        },
        getAttributeForElementIndex: function(index, attr) {
          return _this.listElements[index].getAttribute(attr);
        },
        getFocusedElementIndex: function() {
          return _this.listElements.indexOf(document.activeElement);
        },
        getListItemCount: function() {
          return _this.listElements.length;
        },
        getPrimaryTextAtIndex: function(index) {
          return _this.getPrimaryText(_this.listElements[index]);
        },
        hasCheckboxAtIndex: function(index) {
          var listItem = _this.listElements[index];
          return !!listItem.querySelector(strings2.CHECKBOX_SELECTOR);
        },
        hasRadioAtIndex: function(index) {
          var listItem = _this.listElements[index];
          return !!listItem.querySelector(strings2.RADIO_SELECTOR);
        },
        isCheckboxCheckedAtIndex: function(index) {
          var listItem = _this.listElements[index];
          var toggleEl = listItem.querySelector(strings2.CHECKBOX_SELECTOR);
          return toggleEl.checked;
        },
        isFocusInsideList: function() {
          return _this.root !== document.activeElement && _this.root.contains(document.activeElement);
        },
        isRootFocused: function() {
          return document.activeElement === _this.root;
        },
        listItemAtIndexHasClass: function(index, className) {
          return _this.listElements[index].classList.contains(_this.classNameMap[className]);
        },
        notifyAction: function(index) {
          _this.emit(strings2.ACTION_EVENT, {index}, true);
        },
        removeClassForElementIndex: function(index, className) {
          var element = _this.listElements[index];
          if (element) {
            element.classList.remove(_this.classNameMap[className]);
          }
        },
        setAttributeForElementIndex: function(index, attr, value) {
          var element = _this.listElements[index];
          if (element) {
            element.setAttribute(attr, value);
          }
        },
        setCheckedCheckboxOrRadioAtIndex: function(index, isChecked) {
          var listItem = _this.listElements[index];
          var toggleEl = listItem.querySelector(strings2.CHECKBOX_RADIO_SELECTOR);
          toggleEl.checked = isChecked;
          var event = document.createEvent("Event");
          event.initEvent("change", true, true);
          toggleEl.dispatchEvent(event);
        },
        setTabIndexForListItemChildren: function(listItemIndex, tabIndexValue) {
          var element = _this.listElements[listItemIndex];
          var selector = "." + _this.classNameMap[cssClasses4.LIST_ITEM_CLASS] + " " + strings2.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;
          Array.prototype.forEach.call(element.querySelectorAll(selector), function(el) {
            el.setAttribute("tabindex", tabIndexValue);
          });
        }
      };
      return new MDCListFoundation(adapter);
    };
    MDCList2.prototype.ensureFocusable = function() {
      if (this.isEvolutionEnabled && this.isInteractive) {
        if (!this.root.querySelector("." + this.classNameMap[cssClasses4.LIST_ITEM_CLASS] + '[tabindex="0"]')) {
          var index = this.initialFocusIndex();
          if (index !== -1) {
            this.listElements[index].tabIndex = 0;
          }
        }
      }
    };
    MDCList2.prototype.initialFocusIndex = function() {
      if (this.selectedIndex instanceof Array && this.selectedIndex.length > 0) {
        return this.selectedIndex[0];
      }
      if (typeof this.selectedIndex === "number" && this.selectedIndex !== numbers2.UNSET_INDEX) {
        return this.selectedIndex;
      }
      var el = this.root.querySelector("." + this.classNameMap[cssClasses4.LIST_ITEM_CLASS] + ":not(." + this.classNameMap[cssClasses4.LIST_ITEM_DISABLED_CLASS] + ")");
      if (el === null) {
        return -1;
      }
      return this.getListItemIndex(el);
    };
    MDCList2.prototype.getListItemIndex = function(el) {
      var nearestParent = closest(el, "." + this.classNameMap[cssClasses4.LIST_ITEM_CLASS] + ", ." + this.classNameMap[cssClasses4.ROOT]);
      if (nearestParent && matches(nearestParent, "." + this.classNameMap[cssClasses4.LIST_ITEM_CLASS])) {
        return this.listElements.indexOf(nearestParent);
      }
      return -1;
    };
    MDCList2.prototype.handleFocusInEvent = function(evt) {
      var index = this.getListItemIndex(evt.target);
      this.foundation.handleFocusIn(evt, index);
    };
    MDCList2.prototype.handleFocusOutEvent = function(evt) {
      var index = this.getListItemIndex(evt.target);
      this.foundation.handleFocusOut(evt, index);
    };
    MDCList2.prototype.handleKeydownEvent = function(evt) {
      var index = this.getListItemIndex(evt.target);
      var target = evt.target;
      this.foundation.handleKeydown(evt, target.classList.contains(this.classNameMap[cssClasses4.LIST_ITEM_CLASS]), index);
    };
    MDCList2.prototype.handleClickEvent = function(evt) {
      var index = this.getListItemIndex(evt.target);
      var target = evt.target;
      var toggleCheckbox = !matches(target, strings2.CHECKBOX_RADIO_SELECTOR);
      this.foundation.handleClick(index, toggleCheckbox);
    };
    return MDCList2;
  }(MDCComponent);

  // node_modules/@material/menu-surface/foundation.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCMenuSurfaceFoundation = function(_super) {
    __extends(MDCMenuSurfaceFoundation2, _super);
    function MDCMenuSurfaceFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCMenuSurfaceFoundation2.defaultAdapter), adapter)) || this;
      _this.isSurfaceOpen = false;
      _this.isQuickOpen = false;
      _this.isHoistedElement = false;
      _this.isFixedPosition = false;
      _this.openAnimationEndTimerId = 0;
      _this.closeAnimationEndTimerId = 0;
      _this.animationRequestId = 0;
      _this.anchorCorner = Corner.TOP_START;
      _this.originCorner = Corner.TOP_START;
      _this.anchorMargin = {top: 0, right: 0, bottom: 0, left: 0};
      _this.position = {x: 0, y: 0};
      return _this;
    }
    Object.defineProperty(MDCMenuSurfaceFoundation2, "cssClasses", {
      get: function() {
        return cssClasses3;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation2, "strings", {
      get: function() {
        return strings;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation2, "numbers", {
      get: function() {
        return numbers;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation2, "Corner", {
      get: function() {
        return Corner;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          hasClass: function() {
            return false;
          },
          hasAnchor: function() {
            return false;
          },
          isElementInContainer: function() {
            return false;
          },
          isFocused: function() {
            return false;
          },
          isRtl: function() {
            return false;
          },
          getInnerDimensions: function() {
            return {height: 0, width: 0};
          },
          getAnchorDimensions: function() {
            return null;
          },
          getWindowDimensions: function() {
            return {height: 0, width: 0};
          },
          getBodyDimensions: function() {
            return {height: 0, width: 0};
          },
          getWindowScroll: function() {
            return {x: 0, y: 0};
          },
          setPosition: function() {
            return void 0;
          },
          setMaxHeight: function() {
            return void 0;
          },
          setTransformOrigin: function() {
            return void 0;
          },
          saveFocus: function() {
            return void 0;
          },
          restoreFocus: function() {
            return void 0;
          },
          notifyClose: function() {
            return void 0;
          },
          notifyOpen: function() {
            return void 0;
          },
          notifyClosing: function() {
            return void 0;
          }
        };
      },
      enumerable: true,
      configurable: true
    });
    MDCMenuSurfaceFoundation2.prototype.init = function() {
      var _a2 = MDCMenuSurfaceFoundation2.cssClasses, ROOT = _a2.ROOT, OPEN = _a2.OPEN;
      if (!this.adapter.hasClass(ROOT)) {
        throw new Error(ROOT + " class required in root element.");
      }
      if (this.adapter.hasClass(OPEN)) {
        this.isSurfaceOpen = true;
      }
    };
    MDCMenuSurfaceFoundation2.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId);
      clearTimeout(this.closeAnimationEndTimerId);
      cancelAnimationFrame(this.animationRequestId);
    };
    MDCMenuSurfaceFoundation2.prototype.setAnchorCorner = function(corner) {
      this.anchorCorner = corner;
    };
    MDCMenuSurfaceFoundation2.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ CornerBit.RIGHT;
    };
    MDCMenuSurfaceFoundation2.prototype.setAnchorMargin = function(margin) {
      this.anchorMargin.top = margin.top || 0;
      this.anchorMargin.right = margin.right || 0;
      this.anchorMargin.bottom = margin.bottom || 0;
      this.anchorMargin.left = margin.left || 0;
    };
    MDCMenuSurfaceFoundation2.prototype.setIsHoisted = function(isHoisted) {
      this.isHoistedElement = isHoisted;
    };
    MDCMenuSurfaceFoundation2.prototype.setFixedPosition = function(isFixedPosition) {
      this.isFixedPosition = isFixedPosition;
    };
    MDCMenuSurfaceFoundation2.prototype.setAbsolutePosition = function(x, y) {
      this.position.x = this.isFinite(x) ? x : 0;
      this.position.y = this.isFinite(y) ? y : 0;
    };
    MDCMenuSurfaceFoundation2.prototype.setQuickOpen = function(quickOpen) {
      this.isQuickOpen = quickOpen;
    };
    MDCMenuSurfaceFoundation2.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    };
    MDCMenuSurfaceFoundation2.prototype.open = function() {
      var _this = this;
      if (this.isSurfaceOpen) {
        return;
      }
      this.adapter.saveFocus();
      if (this.isQuickOpen) {
        this.isSurfaceOpen = true;
        this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
        this.dimensions = this.adapter.getInnerDimensions();
        this.autoposition();
        this.adapter.notifyOpen();
      } else {
        this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_OPEN);
        this.animationRequestId = requestAnimationFrame(function() {
          _this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
          _this.dimensions = _this.adapter.getInnerDimensions();
          _this.autoposition();
          _this.openAnimationEndTimerId = setTimeout(function() {
            _this.openAnimationEndTimerId = 0;
            _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_OPEN);
            _this.adapter.notifyOpen();
          }, numbers.TRANSITION_OPEN_DURATION);
        });
        this.isSurfaceOpen = true;
      }
    };
    MDCMenuSurfaceFoundation2.prototype.close = function(skipRestoreFocus) {
      var _this = this;
      if (skipRestoreFocus === void 0) {
        skipRestoreFocus = false;
      }
      if (!this.isSurfaceOpen) {
        return;
      }
      this.adapter.notifyClosing();
      if (this.isQuickOpen) {
        this.isSurfaceOpen = false;
        if (!skipRestoreFocus) {
          this.maybeRestoreFocus();
        }
        this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
        this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
        this.adapter.notifyClose();
        return;
      }
      this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_CLOSED);
      requestAnimationFrame(function() {
        _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
        _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
        _this.closeAnimationEndTimerId = setTimeout(function() {
          _this.closeAnimationEndTimerId = 0;
          _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_CLOSED);
          _this.adapter.notifyClose();
        }, numbers.TRANSITION_CLOSE_DURATION);
      });
      this.isSurfaceOpen = false;
      if (!skipRestoreFocus) {
        this.maybeRestoreFocus();
      }
    };
    MDCMenuSurfaceFoundation2.prototype.handleBodyClick = function(evt) {
      var el = evt.target;
      if (this.adapter.isElementInContainer(el)) {
        return;
      }
      this.close();
    };
    MDCMenuSurfaceFoundation2.prototype.handleKeydown = function(evt) {
      var keyCode = evt.keyCode, key = evt.key;
      var isEscape = key === "Escape" || keyCode === 27;
      if (isEscape) {
        this.close();
      }
    };
    MDCMenuSurfaceFoundation2.prototype.autoposition = function() {
      var _a2;
      this.measurements = this.getAutoLayoutmeasurements();
      var corner = this.getoriginCorner();
      var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight(corner);
      var verticalAlignment = this.hasBit(corner, CornerBit.BOTTOM) ? "bottom" : "top";
      var horizontalAlignment = this.hasBit(corner, CornerBit.RIGHT) ? "right" : "left";
      var horizontalOffset = this.getHorizontalOriginOffset(corner);
      var verticalOffset = this.getVerticalOriginOffset(corner);
      var _b = this.measurements, anchorSize = _b.anchorSize, surfaceSize = _b.surfaceSize;
      var position = (_a2 = {}, _a2[horizontalAlignment] = horizontalOffset, _a2[verticalAlignment] = verticalOffset, _a2);
      if (anchorSize.width / surfaceSize.width > numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
        horizontalAlignment = "center";
      }
      if (this.isHoistedElement || this.isFixedPosition) {
        this.adjustPositionForHoistedElement(position);
      }
      this.adapter.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
      this.adapter.setPosition(position);
      this.adapter.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + "px" : "");
      if (!this.hasBit(corner, CornerBit.BOTTOM)) {
        this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
      }
    };
    MDCMenuSurfaceFoundation2.prototype.getAutoLayoutmeasurements = function() {
      var anchorRect = this.adapter.getAnchorDimensions();
      var bodySize = this.adapter.getBodyDimensions();
      var viewportSize = this.adapter.getWindowDimensions();
      var windowScroll = this.adapter.getWindowScroll();
      if (!anchorRect) {
        anchorRect = {
          top: this.position.y,
          right: this.position.x,
          bottom: this.position.y,
          left: this.position.x,
          width: 0,
          height: 0
        };
      }
      return {
        anchorSize: anchorRect,
        bodySize,
        surfaceSize: this.dimensions,
        viewportDistance: {
          top: anchorRect.top,
          right: viewportSize.width - anchorRect.right,
          bottom: viewportSize.height - anchorRect.bottom,
          left: anchorRect.left
        },
        viewportSize,
        windowScroll
      };
    };
    MDCMenuSurfaceFoundation2.prototype.getoriginCorner = function() {
      var corner = this.originCorner;
      var _a2 = this.measurements, viewportDistance = _a2.viewportDistance, anchorSize = _a2.anchorSize, surfaceSize = _a2.surfaceSize;
      var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation2.numbers.MARGIN_TO_EDGE;
      var isAnchoredToBottom = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
      var availableTop;
      var availableBottom;
      if (isAnchoredToBottom) {
        availableTop = viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.bottom;
        availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE - this.anchorMargin.bottom;
      } else {
        availableTop = viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.top;
        availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE + anchorSize.height - this.anchorMargin.top;
      }
      var isAvailableBottom = availableBottom - surfaceSize.height > 0;
      if (!isAvailableBottom && availableTop > availableBottom) {
        corner = this.setBit(corner, CornerBit.BOTTOM);
      }
      var isRtl = this.adapter.isRtl();
      var isFlipRtl = this.hasBit(this.anchorCorner, CornerBit.FLIP_RTL);
      var hasRightBit = this.hasBit(this.anchorCorner, CornerBit.RIGHT) || this.hasBit(corner, CornerBit.RIGHT);
      var isAnchoredToRight = false;
      if (isRtl && isFlipRtl) {
        isAnchoredToRight = !hasRightBit;
      } else {
        isAnchoredToRight = hasRightBit;
      }
      var availableLeft;
      var availableRight;
      if (isAnchoredToRight) {
        availableLeft = viewportDistance.left + anchorSize.width + this.anchorMargin.right;
        availableRight = viewportDistance.right - this.anchorMargin.right;
      } else {
        availableLeft = viewportDistance.left + this.anchorMargin.left;
        availableRight = viewportDistance.right + anchorSize.width - this.anchorMargin.left;
      }
      var isAvailableLeft = availableLeft - surfaceSize.width > 0;
      var isAvailableRight = availableRight - surfaceSize.width > 0;
      var isOriginCornerAlignedToEnd = this.hasBit(corner, CornerBit.FLIP_RTL) && this.hasBit(corner, CornerBit.RIGHT);
      if (isAvailableRight && isOriginCornerAlignedToEnd && isRtl || !isAvailableLeft && isOriginCornerAlignedToEnd) {
        corner = this.unsetBit(corner, CornerBit.RIGHT);
      } else if (isAvailableLeft && isAnchoredToRight && isRtl || isAvailableLeft && !isAnchoredToRight && hasRightBit || !isAvailableRight && availableLeft >= availableRight) {
        corner = this.setBit(corner, CornerBit.RIGHT);
      }
      return corner;
    };
    MDCMenuSurfaceFoundation2.prototype.getMenuSurfaceMaxHeight = function(corner) {
      var viewportDistance = this.measurements.viewportDistance;
      var maxHeight = 0;
      var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
      var isBottomAnchored = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
      var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation2.numbers.MARGIN_TO_EDGE;
      if (isBottomAligned) {
        maxHeight = viewportDistance.top + this.anchorMargin.top - MARGIN_TO_EDGE;
        if (!isBottomAnchored) {
          maxHeight += this.measurements.anchorSize.height;
        }
      } else {
        maxHeight = viewportDistance.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - MARGIN_TO_EDGE;
        if (isBottomAnchored) {
          maxHeight -= this.measurements.anchorSize.height;
        }
      }
      return maxHeight;
    };
    MDCMenuSurfaceFoundation2.prototype.getHorizontalOriginOffset = function(corner) {
      var anchorSize = this.measurements.anchorSize;
      var isRightAligned = this.hasBit(corner, CornerBit.RIGHT);
      var avoidHorizontalOverlap = this.hasBit(this.anchorCorner, CornerBit.RIGHT);
      if (isRightAligned) {
        var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.left : this.anchorMargin.right;
        if (this.isHoistedElement || this.isFixedPosition) {
          return rightOffset - (this.measurements.viewportSize.width - this.measurements.bodySize.width);
        }
        return rightOffset;
      }
      return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.right : this.anchorMargin.left;
    };
    MDCMenuSurfaceFoundation2.prototype.getVerticalOriginOffset = function(corner) {
      var anchorSize = this.measurements.anchorSize;
      var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
      var avoidVerticalOverlap = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
      var y = 0;
      if (isBottomAligned) {
        y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin.top : -this.anchorMargin.bottom;
      } else {
        y = avoidVerticalOverlap ? anchorSize.height + this.anchorMargin.bottom : this.anchorMargin.top;
      }
      return y;
    };
    MDCMenuSurfaceFoundation2.prototype.adjustPositionForHoistedElement = function(position) {
      var e_1, _a2;
      var _b = this.measurements, windowScroll = _b.windowScroll, viewportDistance = _b.viewportDistance;
      var props = Object.keys(position);
      try {
        for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
          var prop = props_1_1.value;
          var value = position[prop] || 0;
          value += viewportDistance[prop];
          if (!this.isFixedPosition) {
            if (prop === "top") {
              value += windowScroll.y;
            } else if (prop === "bottom") {
              value -= windowScroll.y;
            } else if (prop === "left") {
              value += windowScroll.x;
            } else {
              value -= windowScroll.x;
            }
          }
          position[prop] = value;
        }
      } catch (e_1_1) {
        e_1 = {error: e_1_1};
      } finally {
        try {
          if (props_1_1 && !props_1_1.done && (_a2 = props_1.return))
            _a2.call(props_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    };
    MDCMenuSurfaceFoundation2.prototype.maybeRestoreFocus = function() {
      var isRootFocused = this.adapter.isFocused();
      var childHasFocus = document.activeElement && this.adapter.isElementInContainer(document.activeElement);
      if (isRootFocused || childHasFocus) {
        this.adapter.restoreFocus();
      }
    };
    MDCMenuSurfaceFoundation2.prototype.hasBit = function(corner, bit) {
      return Boolean(corner & bit);
    };
    MDCMenuSurfaceFoundation2.prototype.setBit = function(corner, bit) {
      return corner | bit;
    };
    MDCMenuSurfaceFoundation2.prototype.unsetBit = function(corner, bit) {
      return corner ^ bit;
    };
    MDCMenuSurfaceFoundation2.prototype.isFinite = function(num) {
      return typeof num === "number" && isFinite(num);
    };
    return MDCMenuSurfaceFoundation2;
  }(MDCFoundation);

  // node_modules/@material/animation/util.js
  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssPropertyNameMap = {
    animation: {
      prefixed: "-webkit-animation",
      standard: "animation"
    },
    transform: {
      prefixed: "-webkit-transform",
      standard: "transform"
    },
    transition: {
      prefixed: "-webkit-transition",
      standard: "transition"
    }
  };
  function isWindow(windowObj) {
    return Boolean(windowObj.document) && typeof windowObj.document.createElement === "function";
  }
  function getCorrectPropertyName(windowObj, cssProperty) {
    if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
      var el = windowObj.document.createElement("div");
      var _a2 = cssPropertyNameMap[cssProperty], standard = _a2.standard, prefixed = _a2.prefixed;
      var isStandard = standard in el.style;
      return isStandard ? standard : prefixed;
    }
    return cssProperty;
  }

  // node_modules/@material/menu-surface/component.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCMenuSurface = function(_super) {
    __extends(MDCMenuSurface2, _super);
    function MDCMenuSurface2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCMenuSurface2.attachTo = function(root) {
      return new MDCMenuSurface2(root);
    };
    MDCMenuSurface2.prototype.initialSyncWithDOM = function() {
      var _this = this;
      var parentEl = this.root.parentElement;
      this.anchorElement = parentEl && parentEl.classList.contains(cssClasses3.ANCHOR) ? parentEl : null;
      if (this.root.classList.contains(cssClasses3.FIXED)) {
        this.setFixedPosition(true);
      }
      this.handleKeydown = function(event) {
        _this.foundation.handleKeydown(event);
      };
      this.handleBodyClick = function(event) {
        _this.foundation.handleBodyClick(event);
      };
      this.registerBodyClickListener = function() {
        document.body.addEventListener("click", _this.handleBodyClick, {capture: true});
      };
      this.deregisterBodyClickListener = function() {
        document.body.removeEventListener("click", _this.handleBodyClick, {capture: true});
      };
      this.listen("keydown", this.handleKeydown);
      this.listen(strings.OPENED_EVENT, this.registerBodyClickListener);
      this.listen(strings.CLOSED_EVENT, this.deregisterBodyClickListener);
    };
    MDCMenuSurface2.prototype.destroy = function() {
      this.unlisten("keydown", this.handleKeydown);
      this.unlisten(strings.OPENED_EVENT, this.registerBodyClickListener);
      this.unlisten(strings.CLOSED_EVENT, this.deregisterBodyClickListener);
      _super.prototype.destroy.call(this);
    };
    MDCMenuSurface2.prototype.isOpen = function() {
      return this.foundation.isOpen();
    };
    MDCMenuSurface2.prototype.open = function() {
      this.foundation.open();
    };
    MDCMenuSurface2.prototype.close = function(skipRestoreFocus) {
      if (skipRestoreFocus === void 0) {
        skipRestoreFocus = false;
      }
      this.foundation.close(skipRestoreFocus);
    };
    Object.defineProperty(MDCMenuSurface2.prototype, "quickOpen", {
      set: function(quickOpen) {
        this.foundation.setQuickOpen(quickOpen);
      },
      enumerable: true,
      configurable: true
    });
    MDCMenuSurface2.prototype.setIsHoisted = function(isHoisted) {
      this.foundation.setIsHoisted(isHoisted);
    };
    MDCMenuSurface2.prototype.setMenuSurfaceAnchorElement = function(element) {
      this.anchorElement = element;
    };
    MDCMenuSurface2.prototype.setFixedPosition = function(isFixed) {
      if (isFixed) {
        this.root.classList.add(cssClasses3.FIXED);
      } else {
        this.root.classList.remove(cssClasses3.FIXED);
      }
      this.foundation.setFixedPosition(isFixed);
    };
    MDCMenuSurface2.prototype.setAbsolutePosition = function(x, y) {
      this.foundation.setAbsolutePosition(x, y);
      this.setIsHoisted(true);
    };
    MDCMenuSurface2.prototype.setAnchorCorner = function(corner) {
      this.foundation.setAnchorCorner(corner);
    };
    MDCMenuSurface2.prototype.setAnchorMargin = function(margin) {
      this.foundation.setAnchorMargin(margin);
    };
    MDCMenuSurface2.prototype.getDefaultFoundation = function() {
      var _this = this;
      var adapter = {
        addClass: function(className) {
          return _this.root.classList.add(className);
        },
        removeClass: function(className) {
          return _this.root.classList.remove(className);
        },
        hasClass: function(className) {
          return _this.root.classList.contains(className);
        },
        hasAnchor: function() {
          return !!_this.anchorElement;
        },
        notifyClose: function() {
          return _this.emit(MDCMenuSurfaceFoundation.strings.CLOSED_EVENT, {});
        },
        notifyClosing: function() {
          _this.emit(MDCMenuSurfaceFoundation.strings.CLOSING_EVENT, {});
        },
        notifyOpen: function() {
          return _this.emit(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, {});
        },
        isElementInContainer: function(el) {
          return _this.root.contains(el);
        },
        isRtl: function() {
          return getComputedStyle(_this.root).getPropertyValue("direction") === "rtl";
        },
        setTransformOrigin: function(origin) {
          var propertyName = getCorrectPropertyName(window, "transform") + "-origin";
          _this.root.style.setProperty(propertyName, origin);
        },
        isFocused: function() {
          return document.activeElement === _this.root;
        },
        saveFocus: function() {
          _this.previousFocus = document.activeElement;
        },
        restoreFocus: function() {
          if (_this.root.contains(document.activeElement)) {
            if (_this.previousFocus && _this.previousFocus.focus) {
              _this.previousFocus.focus();
            }
          }
        },
        getInnerDimensions: function() {
          return {
            width: _this.root.offsetWidth,
            height: _this.root.offsetHeight
          };
        },
        getAnchorDimensions: function() {
          return _this.anchorElement ? _this.anchorElement.getBoundingClientRect() : null;
        },
        getWindowDimensions: function() {
          return {width: window.innerWidth, height: window.innerHeight};
        },
        getBodyDimensions: function() {
          return {width: document.body.clientWidth, height: document.body.clientHeight};
        },
        getWindowScroll: function() {
          return {x: window.pageXOffset, y: window.pageYOffset};
        },
        setPosition: function(position) {
          var rootHTML = _this.root;
          rootHTML.style.left = "left" in position ? position.left + "px" : "";
          rootHTML.style.right = "right" in position ? position.right + "px" : "";
          rootHTML.style.top = "top" in position ? position.top + "px" : "";
          rootHTML.style.bottom = "bottom" in position ? position.bottom + "px" : "";
        },
        setMaxHeight: function(height) {
          _this.root.style.maxHeight = height;
        }
      };
      return new MDCMenuSurfaceFoundation(adapter);
    };
    return MDCMenuSurface2;
  }(MDCComponent);

  // node_modules/@material/menu/constants.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses5 = {
    MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
    MENU_SELECTION_GROUP: "mdc-menu__selection-group",
    ROOT: "mdc-menu"
  };
  var strings3 = {
    ARIA_CHECKED_ATTR: "aria-checked",
    ARIA_DISABLED_ATTR: "aria-disabled",
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    LIST_SELECTOR: ".mdc-list",
    SELECTED_EVENT: "MDCMenu:selected"
  };
  var numbers3 = {
    FOCUS_ROOT_INDEX: -1
  };
  var DefaultFocusState;
  (function(DefaultFocusState2) {
    DefaultFocusState2[DefaultFocusState2["NONE"] = 0] = "NONE";
    DefaultFocusState2[DefaultFocusState2["LIST_ROOT"] = 1] = "LIST_ROOT";
    DefaultFocusState2[DefaultFocusState2["FIRST_ITEM"] = 2] = "FIRST_ITEM";
    DefaultFocusState2[DefaultFocusState2["LAST_ITEM"] = 3] = "LAST_ITEM";
  })(DefaultFocusState || (DefaultFocusState = {}));

  // node_modules/@material/menu/foundation.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCMenuFoundation = function(_super) {
    __extends(MDCMenuFoundation2, _super);
    function MDCMenuFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCMenuFoundation2.defaultAdapter), adapter)) || this;
      _this.closeAnimationEndTimerId_ = 0;
      _this.defaultFocusState_ = DefaultFocusState.LIST_ROOT;
      return _this;
    }
    Object.defineProperty(MDCMenuFoundation2, "cssClasses", {
      get: function() {
        return cssClasses5;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenuFoundation2, "strings", {
      get: function() {
        return strings3;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenuFoundation2, "numbers", {
      get: function() {
        return numbers3;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenuFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClassToElementAtIndex: function() {
            return void 0;
          },
          removeClassFromElementAtIndex: function() {
            return void 0;
          },
          addAttributeToElementAtIndex: function() {
            return void 0;
          },
          removeAttributeFromElementAtIndex: function() {
            return void 0;
          },
          elementContainsClass: function() {
            return false;
          },
          closeSurface: function() {
            return void 0;
          },
          getElementIndex: function() {
            return -1;
          },
          notifySelected: function() {
            return void 0;
          },
          getMenuItemCount: function() {
            return 0;
          },
          focusItemAtIndex: function() {
            return void 0;
          },
          focusListRoot: function() {
            return void 0;
          },
          getSelectedSiblingOfItemAtIndex: function() {
            return -1;
          },
          isSelectableItemAtIndex: function() {
            return false;
          }
        };
      },
      enumerable: true,
      configurable: true
    });
    MDCMenuFoundation2.prototype.destroy = function() {
      if (this.closeAnimationEndTimerId_) {
        clearTimeout(this.closeAnimationEndTimerId_);
      }
      this.adapter.closeSurface();
    };
    MDCMenuFoundation2.prototype.handleKeydown = function(evt) {
      var key = evt.key, keyCode = evt.keyCode;
      var isTab = key === "Tab" || keyCode === 9;
      if (isTab) {
        this.adapter.closeSurface(true);
      }
    };
    MDCMenuFoundation2.prototype.handleItemAction = function(listItem) {
      var _this = this;
      var index = this.adapter.getElementIndex(listItem);
      if (index < 0) {
        return;
      }
      this.adapter.notifySelected({index});
      this.adapter.closeSurface();
      this.closeAnimationEndTimerId_ = setTimeout(function() {
        var recomputedIndex = _this.adapter.getElementIndex(listItem);
        if (recomputedIndex >= 0 && _this.adapter.isSelectableItemAtIndex(recomputedIndex)) {
          _this.setSelectedIndex(recomputedIndex);
        }
      }, MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
    };
    MDCMenuFoundation2.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState_) {
        case DefaultFocusState.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case DefaultFocusState.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case DefaultFocusState.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    };
    MDCMenuFoundation2.prototype.setDefaultFocusState = function(focusState) {
      this.defaultFocusState_ = focusState;
    };
    MDCMenuFoundation2.prototype.setSelectedIndex = function(index) {
      this.validatedIndex_(index);
      if (!this.adapter.isSelectableItemAtIndex(index)) {
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      }
      var prevSelectedIndex = this.adapter.getSelectedSiblingOfItemAtIndex(index);
      if (prevSelectedIndex >= 0) {
        this.adapter.removeAttributeFromElementAtIndex(prevSelectedIndex, strings3.ARIA_CHECKED_ATTR);
        this.adapter.removeClassFromElementAtIndex(prevSelectedIndex, cssClasses5.MENU_SELECTED_LIST_ITEM);
      }
      this.adapter.addClassToElementAtIndex(index, cssClasses5.MENU_SELECTED_LIST_ITEM);
      this.adapter.addAttributeToElementAtIndex(index, strings3.ARIA_CHECKED_ATTR, "true");
    };
    MDCMenuFoundation2.prototype.setEnabled = function(index, isEnabled) {
      this.validatedIndex_(index);
      if (isEnabled) {
        this.adapter.removeClassFromElementAtIndex(index, cssClasses4.LIST_ITEM_DISABLED_CLASS);
        this.adapter.addAttributeToElementAtIndex(index, strings3.ARIA_DISABLED_ATTR, "false");
      } else {
        this.adapter.addClassToElementAtIndex(index, cssClasses4.LIST_ITEM_DISABLED_CLASS);
        this.adapter.addAttributeToElementAtIndex(index, strings3.ARIA_DISABLED_ATTR, "true");
      }
    };
    MDCMenuFoundation2.prototype.validatedIndex_ = function(index) {
      var menuSize = this.adapter.getMenuItemCount();
      var isIndexInRange = index >= 0 && index < menuSize;
      if (!isIndexInRange) {
        throw new Error("MDCMenuFoundation: No list item at specified index.");
      }
    };
    return MDCMenuFoundation2;
  }(MDCFoundation);

  // node_modules/@material/menu/component.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCMenu = function(_super) {
    __extends(MDCMenu2, _super);
    function MDCMenu2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCMenu2.attachTo = function(root) {
      return new MDCMenu2(root);
    };
    MDCMenu2.prototype.initialize = function(menuSurfaceFactory, listFactory) {
      if (menuSurfaceFactory === void 0) {
        menuSurfaceFactory = function(el) {
          return new MDCMenuSurface(el);
        };
      }
      if (listFactory === void 0) {
        listFactory = function(el) {
          return new MDCList(el);
        };
      }
      this.menuSurfaceFactory_ = menuSurfaceFactory;
      this.listFactory_ = listFactory;
    };
    MDCMenu2.prototype.initialSyncWithDOM = function() {
      var _this = this;
      this.menuSurface_ = this.menuSurfaceFactory_(this.root);
      var list = this.root.querySelector(strings3.LIST_SELECTOR);
      if (list) {
        this.list_ = this.listFactory_(list);
        this.list_.wrapFocus = true;
      } else {
        this.list_ = null;
      }
      this.handleKeydown_ = function(evt) {
        return _this.foundation.handleKeydown(evt);
      };
      this.handleItemAction_ = function(evt) {
        return _this.foundation.handleItemAction(_this.items[evt.detail.index]);
      };
      this.handleMenuSurfaceOpened_ = function() {
        return _this.foundation.handleMenuSurfaceOpened();
      };
      this.menuSurface_.listen(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_);
      this.listen("keydown", this.handleKeydown_);
      this.listen(MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_);
    };
    MDCMenu2.prototype.destroy = function() {
      if (this.list_) {
        this.list_.destroy();
      }
      this.menuSurface_.destroy();
      this.menuSurface_.unlisten(MDCMenuSurfaceFoundation.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_);
      this.unlisten("keydown", this.handleKeydown_);
      this.unlisten(MDCListFoundation.strings.ACTION_EVENT, this.handleItemAction_);
      _super.prototype.destroy.call(this);
    };
    Object.defineProperty(MDCMenu2.prototype, "open", {
      get: function() {
        return this.menuSurface_.isOpen();
      },
      set: function(value) {
        if (value) {
          this.menuSurface_.open();
        } else {
          this.menuSurface_.close();
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenu2.prototype, "wrapFocus", {
      get: function() {
        return this.list_ ? this.list_.wrapFocus : false;
      },
      set: function(value) {
        if (this.list_) {
          this.list_.wrapFocus = value;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenu2.prototype, "hasTypeahead", {
      set: function(value) {
        if (this.list_) {
          this.list_.hasTypeahead = value;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenu2.prototype, "typeaheadInProgress", {
      get: function() {
        return this.list_ ? this.list_.typeaheadInProgress : false;
      },
      enumerable: true,
      configurable: true
    });
    MDCMenu2.prototype.typeaheadMatchItem = function(nextChar, startingIndex) {
      if (this.list_) {
        return this.list_.typeaheadMatchItem(nextChar, startingIndex);
      }
      return -1;
    };
    MDCMenu2.prototype.layout = function() {
      if (this.list_) {
        this.list_.layout();
      }
    };
    Object.defineProperty(MDCMenu2.prototype, "items", {
      get: function() {
        return this.list_ ? this.list_.listElements : [];
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenu2.prototype, "singleSelection", {
      set: function(singleSelection) {
        if (this.list_) {
          this.list_.singleSelection = singleSelection;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenu2.prototype, "selectedIndex", {
      get: function() {
        return this.list_ ? this.list_.selectedIndex : numbers2.UNSET_INDEX;
      },
      set: function(index) {
        if (this.list_) {
          this.list_.selectedIndex = index;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCMenu2.prototype, "quickOpen", {
      set: function(quickOpen) {
        this.menuSurface_.quickOpen = quickOpen;
      },
      enumerable: true,
      configurable: true
    });
    MDCMenu2.prototype.setDefaultFocusState = function(focusState) {
      this.foundation.setDefaultFocusState(focusState);
    };
    MDCMenu2.prototype.setAnchorCorner = function(corner) {
      this.menuSurface_.setAnchorCorner(corner);
    };
    MDCMenu2.prototype.setAnchorMargin = function(margin) {
      this.menuSurface_.setAnchorMargin(margin);
    };
    MDCMenu2.prototype.setSelectedIndex = function(index) {
      this.foundation.setSelectedIndex(index);
    };
    MDCMenu2.prototype.setEnabled = function(index, isEnabled) {
      this.foundation.setEnabled(index, isEnabled);
    };
    MDCMenu2.prototype.getOptionByIndex = function(index) {
      var items = this.items;
      if (index < items.length) {
        return this.items[index];
      } else {
        return null;
      }
    };
    MDCMenu2.prototype.getPrimaryTextAtIndex = function(index) {
      var item = this.getOptionByIndex(index);
      if (item && this.list_) {
        return this.list_.getPrimaryText(item) || "";
      }
      return "";
    };
    MDCMenu2.prototype.setFixedPosition = function(isFixed) {
      this.menuSurface_.setFixedPosition(isFixed);
    };
    MDCMenu2.prototype.setIsHoisted = function(isHoisted) {
      this.menuSurface_.setIsHoisted(isHoisted);
    };
    MDCMenu2.prototype.setAbsolutePosition = function(x, y) {
      this.menuSurface_.setAbsolutePosition(x, y);
    };
    MDCMenu2.prototype.setAnchorElement = function(element) {
      this.menuSurface_.anchorElement = element;
    };
    MDCMenu2.prototype.getDefaultFoundation = function() {
      var _this = this;
      var adapter = {
        addClassToElementAtIndex: function(index, className) {
          var list = _this.items;
          list[index].classList.add(className);
        },
        removeClassFromElementAtIndex: function(index, className) {
          var list = _this.items;
          list[index].classList.remove(className);
        },
        addAttributeToElementAtIndex: function(index, attr, value) {
          var list = _this.items;
          list[index].setAttribute(attr, value);
        },
        removeAttributeFromElementAtIndex: function(index, attr) {
          var list = _this.items;
          list[index].removeAttribute(attr);
        },
        elementContainsClass: function(element, className) {
          return element.classList.contains(className);
        },
        closeSurface: function(skipRestoreFocus) {
          return _this.menuSurface_.close(skipRestoreFocus);
        },
        getElementIndex: function(element) {
          return _this.items.indexOf(element);
        },
        notifySelected: function(evtData) {
          return _this.emit(strings3.SELECTED_EVENT, {
            index: evtData.index,
            item: _this.items[evtData.index]
          });
        },
        getMenuItemCount: function() {
          return _this.items.length;
        },
        focusItemAtIndex: function(index) {
          return _this.items[index].focus();
        },
        focusListRoot: function() {
          return _this.root.querySelector(strings3.LIST_SELECTOR).focus();
        },
        isSelectableItemAtIndex: function(index) {
          return !!closest(_this.items[index], "." + cssClasses5.MENU_SELECTION_GROUP);
        },
        getSelectedSiblingOfItemAtIndex: function(index) {
          var selectionGroupEl = closest(_this.items[index], "." + cssClasses5.MENU_SELECTION_GROUP);
          var selectedItemEl = selectionGroupEl.querySelector("." + cssClasses5.MENU_SELECTED_LIST_ITEM);
          return selectedItemEl ? _this.items.indexOf(selectedItemEl) : -1;
        }
      };
      return new MDCMenuFoundation(adapter);
    };
    return MDCMenu2;
  }(MDCComponent);

  // node_modules/@material/notched-outline/constants.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var strings4 = {
    NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
  };
  var numbers4 = {
    NOTCH_ELEMENT_PADDING: 8
  };
  var cssClasses6 = {
    NO_LABEL: "mdc-notched-outline--no-label",
    OUTLINE_NOTCHED: "mdc-notched-outline--notched",
    OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
  };

  // node_modules/@material/notched-outline/foundation.js
  /**
   * @license
   * Copyright 2017 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCNotchedOutlineFoundation = function(_super) {
    __extends(MDCNotchedOutlineFoundation2, _super);
    function MDCNotchedOutlineFoundation2(adapter) {
      return _super.call(this, __assign(__assign({}, MDCNotchedOutlineFoundation2.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation2, "strings", {
      get: function() {
        return strings4;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation2, "cssClasses", {
      get: function() {
        return cssClasses6;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation2, "numbers", {
      get: function() {
        return numbers4;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          setNotchWidthProperty: function() {
            return void 0;
          },
          removeNotchWidthProperty: function() {
            return void 0;
          }
        };
      },
      enumerable: true,
      configurable: true
    });
    MDCNotchedOutlineFoundation2.prototype.notch = function(notchWidth) {
      var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation2.cssClasses.OUTLINE_NOTCHED;
      if (notchWidth > 0) {
        notchWidth += numbers4.NOTCH_ELEMENT_PADDING;
      }
      this.adapter.setNotchWidthProperty(notchWidth);
      this.adapter.addClass(OUTLINE_NOTCHED);
    };
    MDCNotchedOutlineFoundation2.prototype.closeNotch = function() {
      var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation2.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(OUTLINE_NOTCHED);
      this.adapter.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation2;
  }(MDCFoundation);

  // node_modules/@material/notched-outline/component.js
  /**
   * @license
   * Copyright 2017 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCNotchedOutline = function(_super) {
    __extends(MDCNotchedOutline2, _super);
    function MDCNotchedOutline2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCNotchedOutline2.attachTo = function(root) {
      return new MDCNotchedOutline2(root);
    };
    MDCNotchedOutline2.prototype.initialSyncWithDOM = function() {
      this.notchElement_ = this.root.querySelector(strings4.NOTCH_ELEMENT_SELECTOR);
      var label = this.root.querySelector("." + MDCFloatingLabelFoundation.cssClasses.ROOT);
      if (label) {
        label.style.transitionDuration = "0s";
        this.root.classList.add(cssClasses6.OUTLINE_UPGRADED);
        requestAnimationFrame(function() {
          label.style.transitionDuration = "";
        });
      } else {
        this.root.classList.add(cssClasses6.NO_LABEL);
      }
    };
    MDCNotchedOutline2.prototype.notch = function(notchWidth) {
      this.foundation.notch(notchWidth);
    };
    MDCNotchedOutline2.prototype.closeNotch = function() {
      this.foundation.closeNotch();
    };
    MDCNotchedOutline2.prototype.getDefaultFoundation = function() {
      var _this = this;
      var adapter = {
        addClass: function(className) {
          return _this.root.classList.add(className);
        },
        removeClass: function(className) {
          return _this.root.classList.remove(className);
        },
        setNotchWidthProperty: function(width) {
          return _this.notchElement_.style.setProperty("width", width + "px");
        },
        removeNotchWidthProperty: function() {
          return _this.notchElement_.style.removeProperty("width");
        }
      };
      return new MDCNotchedOutlineFoundation(adapter);
    };
    return MDCNotchedOutline2;
  }(MDCComponent);

  // node_modules/@material/dom/events.js
  /**
   * @license
   * Copyright 2019 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  function applyPassive(globalObj) {
    if (globalObj === void 0) {
      globalObj = window;
    }
    return supportsPassiveOption(globalObj) ? {passive: true} : false;
  }
  function supportsPassiveOption(globalObj) {
    if (globalObj === void 0) {
      globalObj = window;
    }
    var passiveSupported = false;
    try {
      var options = {
        get passive() {
          passiveSupported = true;
          return false;
        }
      };
      var handler = function() {
      };
      globalObj.document.addEventListener("test", handler, options);
      globalObj.document.removeEventListener("test", handler, options);
    } catch (err) {
      passiveSupported = false;
    }
    return passiveSupported;
  }

  // node_modules/@material/ripple/constants.js
  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses7 = {
    BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
    FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
    FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
    ROOT: "mdc-ripple-upgraded",
    UNBOUNDED: "mdc-ripple-upgraded--unbounded"
  };
  var strings5 = {
    VAR_FG_SCALE: "--mdc-ripple-fg-scale",
    VAR_FG_SIZE: "--mdc-ripple-fg-size",
    VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
    VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
    VAR_LEFT: "--mdc-ripple-left",
    VAR_TOP: "--mdc-ripple-top"
  };
  var numbers5 = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300
  };

  // node_modules/@material/ripple/util.js
  var supportsCssVariables_;
  function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) {
      forceRefresh = false;
    }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === "boolean" && !forceRefresh) {
      return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === "function";
    if (!supportsFunctionPresent) {
      return false;
    }
    var explicitlySupportsCssVars = CSS.supports("--css-vars", "yes");
    var weAreFeatureDetectingSafari10plus = CSS.supports("(--css-vars: yes)") && CSS.supports("color", "#00000000");
    supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
    if (!forceRefresh) {
      supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
  }
  function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
      return {x: 0, y: 0};
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    if (evt.type === "touchstart") {
      var touchEvent = evt;
      normalizedX = touchEvent.changedTouches[0].pageX - documentX;
      normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    } else {
      var mouseEvent = evt;
      normalizedX = mouseEvent.pageX - documentX;
      normalizedY = mouseEvent.pageY - documentY;
    }
    return {x: normalizedX, y: normalizedY};
  }

  // node_modules/@material/ripple/foundation.js
  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var ACTIVATION_EVENT_TYPES = [
    "touchstart",
    "pointerdown",
    "mousedown",
    "keydown"
  ];
  var POINTER_DEACTIVATION_EVENT_TYPES = [
    "touchend",
    "pointerup",
    "mouseup",
    "contextmenu"
  ];
  var activatedTargets = [];
  var MDCRippleFoundation = function(_super) {
    __extends(MDCRippleFoundation2, _super);
    function MDCRippleFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation2.defaultAdapter), adapter)) || this;
      _this.activationAnimationHasEnded_ = false;
      _this.activationTimer_ = 0;
      _this.fgDeactivationRemovalTimer_ = 0;
      _this.fgScale_ = "0";
      _this.frame_ = {width: 0, height: 0};
      _this.initialSize_ = 0;
      _this.layoutFrame_ = 0;
      _this.maxRadius_ = 0;
      _this.unboundedCoords_ = {left: 0, top: 0};
      _this.activationState_ = _this.defaultActivationState_();
      _this.activationTimerCallback_ = function() {
        _this.activationAnimationHasEnded_ = true;
        _this.runDeactivationUXLogicIfReady_();
      };
      _this.activateHandler_ = function(e) {
        return _this.activate_(e);
      };
      _this.deactivateHandler_ = function() {
        return _this.deactivate_();
      };
      _this.focusHandler_ = function() {
        return _this.handleFocus();
      };
      _this.blurHandler_ = function() {
        return _this.handleBlur();
      };
      _this.resizeHandler_ = function() {
        return _this.layout();
      };
      return _this;
    }
    Object.defineProperty(MDCRippleFoundation2, "cssClasses", {
      get: function() {
        return cssClasses7;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation2, "strings", {
      get: function() {
        return strings5;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation2, "numbers", {
      get: function() {
        return numbers5;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          browserSupportsCssVars: function() {
            return true;
          },
          computeBoundingRect: function() {
            return {top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0};
          },
          containsEventTarget: function() {
            return true;
          },
          deregisterDocumentInteractionHandler: function() {
            return void 0;
          },
          deregisterInteractionHandler: function() {
            return void 0;
          },
          deregisterResizeHandler: function() {
            return void 0;
          },
          getWindowPageOffset: function() {
            return {x: 0, y: 0};
          },
          isSurfaceActive: function() {
            return true;
          },
          isSurfaceDisabled: function() {
            return true;
          },
          isUnbounded: function() {
            return true;
          },
          registerDocumentInteractionHandler: function() {
            return void 0;
          },
          registerInteractionHandler: function() {
            return void 0;
          },
          registerResizeHandler: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          updateCssVariable: function() {
            return void 0;
          }
        };
      },
      enumerable: true,
      configurable: true
    });
    MDCRippleFoundation2.prototype.init = function() {
      var _this = this;
      var supportsPressRipple = this.supportsPressRipple_();
      this.registerRootHandlers_(supportsPressRipple);
      if (supportsPressRipple) {
        var _a2 = MDCRippleFoundation2.cssClasses, ROOT_1 = _a2.ROOT, UNBOUNDED_1 = _a2.UNBOUNDED;
        requestAnimationFrame(function() {
          _this.adapter.addClass(ROOT_1);
          if (_this.adapter.isUnbounded()) {
            _this.adapter.addClass(UNBOUNDED_1);
            _this.layoutInternal_();
          }
        });
      }
    };
    MDCRippleFoundation2.prototype.destroy = function() {
      var _this = this;
      if (this.supportsPressRipple_()) {
        if (this.activationTimer_) {
          clearTimeout(this.activationTimer_);
          this.activationTimer_ = 0;
          this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_ACTIVATION);
        }
        if (this.fgDeactivationRemovalTimer_) {
          clearTimeout(this.fgDeactivationRemovalTimer_);
          this.fgDeactivationRemovalTimer_ = 0;
          this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_DEACTIVATION);
        }
        var _a2 = MDCRippleFoundation2.cssClasses, ROOT_2 = _a2.ROOT, UNBOUNDED_2 = _a2.UNBOUNDED;
        requestAnimationFrame(function() {
          _this.adapter.removeClass(ROOT_2);
          _this.adapter.removeClass(UNBOUNDED_2);
          _this.removeCssVars_();
        });
      }
      this.deregisterRootHandlers_();
      this.deregisterDeactivationHandlers_();
    };
    MDCRippleFoundation2.prototype.activate = function(evt) {
      this.activate_(evt);
    };
    MDCRippleFoundation2.prototype.deactivate = function() {
      this.deactivate_();
    };
    MDCRippleFoundation2.prototype.layout = function() {
      var _this = this;
      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function() {
        _this.layoutInternal_();
        _this.layoutFrame_ = 0;
      });
    };
    MDCRippleFoundation2.prototype.setUnbounded = function(unbounded) {
      var UNBOUNDED = MDCRippleFoundation2.cssClasses.UNBOUNDED;
      if (unbounded) {
        this.adapter.addClass(UNBOUNDED);
      } else {
        this.adapter.removeClass(UNBOUNDED);
      }
    };
    MDCRippleFoundation2.prototype.handleFocus = function() {
      var _this = this;
      requestAnimationFrame(function() {
        return _this.adapter.addClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
      });
    };
    MDCRippleFoundation2.prototype.handleBlur = function() {
      var _this = this;
      requestAnimationFrame(function() {
        return _this.adapter.removeClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
      });
    };
    MDCRippleFoundation2.prototype.supportsPressRipple_ = function() {
      return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation2.prototype.defaultActivationState_ = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: false,
        isActivated: false,
        isProgrammatic: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false
      };
    };
    MDCRippleFoundation2.prototype.registerRootHandlers_ = function(supportsPressRipple) {
      var _this = this;
      if (supportsPressRipple) {
        ACTIVATION_EVENT_TYPES.forEach(function(evtType) {
          _this.adapter.registerInteractionHandler(evtType, _this.activateHandler_);
        });
        if (this.adapter.isUnbounded()) {
          this.adapter.registerResizeHandler(this.resizeHandler_);
        }
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler_);
      this.adapter.registerInteractionHandler("blur", this.blurHandler_);
    };
    MDCRippleFoundation2.prototype.registerDeactivationHandlers_ = function(evt) {
      var _this = this;
      if (evt.type === "keydown") {
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler_);
      } else {
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function(evtType) {
          _this.adapter.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
      }
    };
    MDCRippleFoundation2.prototype.deregisterRootHandlers_ = function() {
      var _this = this;
      ACTIVATION_EVENT_TYPES.forEach(function(evtType) {
        _this.adapter.deregisterInteractionHandler(evtType, _this.activateHandler_);
      });
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler_);
      this.adapter.deregisterInteractionHandler("blur", this.blurHandler_);
      if (this.adapter.isUnbounded()) {
        this.adapter.deregisterResizeHandler(this.resizeHandler_);
      }
    };
    MDCRippleFoundation2.prototype.deregisterDeactivationHandlers_ = function() {
      var _this = this;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler_);
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function(evtType) {
        _this.adapter.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
      });
    };
    MDCRippleFoundation2.prototype.removeCssVars_ = function() {
      var _this = this;
      var rippleStrings = MDCRippleFoundation2.strings;
      var keys = Object.keys(rippleStrings);
      keys.forEach(function(key) {
        if (key.indexOf("VAR_") === 0) {
          _this.adapter.updateCssVariable(rippleStrings[key], null);
        }
      });
    };
    MDCRippleFoundation2.prototype.activate_ = function(evt) {
      var _this = this;
      if (this.adapter.isSurfaceDisabled()) {
        return;
      }
      var activationState = this.activationState_;
      if (activationState.isActivated) {
        return;
      }
      var previousActivationEvent = this.previousActivationEvent_;
      var isSameInteraction = previousActivationEvent && evt !== void 0 && previousActivationEvent.type !== evt.type;
      if (isSameInteraction) {
        return;
      }
      activationState.isActivated = true;
      activationState.isProgrammatic = evt === void 0;
      activationState.activationEvent = evt;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== void 0 && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
      var hasActivatedChild = evt !== void 0 && activatedTargets.length > 0 && activatedTargets.some(function(target) {
        return _this.adapter.containsEventTarget(target);
      });
      if (hasActivatedChild) {
        this.resetActivationState_();
        return;
      }
      if (evt !== void 0) {
        activatedTargets.push(evt.target);
        this.registerDeactivationHandlers_(evt);
      }
      activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      }
      requestAnimationFrame(function() {
        activatedTargets = [];
        if (!activationState.wasElementMadeActive && evt !== void 0 && (evt.key === " " || evt.keyCode === 32)) {
          activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
          if (activationState.wasElementMadeActive) {
            _this.animateActivation_();
          }
        }
        if (!activationState.wasElementMadeActive) {
          _this.activationState_ = _this.defaultActivationState_();
        }
      });
    };
    MDCRippleFoundation2.prototype.checkElementMadeActive_ = function(evt) {
      return evt !== void 0 && evt.type === "keydown" ? this.adapter.isSurfaceActive() : true;
    };
    MDCRippleFoundation2.prototype.animateActivation_ = function() {
      var _this = this;
      var _a2 = MDCRippleFoundation2.strings, VAR_FG_TRANSLATE_START = _a2.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a2.VAR_FG_TRANSLATE_END;
      var _b = MDCRippleFoundation2.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation2.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal_();
      var translateStart = "";
      var translateEnd = "";
      if (!this.adapter.isUnbounded()) {
        var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
        translateStart = startPoint.x + "px, " + startPoint.y + "px";
        translateEnd = endPoint.x + "px, " + endPoint.y + "px";
      }
      this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      clearTimeout(this.activationTimer_);
      clearTimeout(this.fgDeactivationRemovalTimer_);
      this.rmBoundedActivationClasses_();
      this.adapter.removeClass(FG_DEACTIVATION);
      this.adapter.computeBoundingRect();
      this.adapter.addClass(FG_ACTIVATION);
      this.activationTimer_ = setTimeout(function() {
        return _this.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation2.prototype.getFgTranslationCoordinates_ = function() {
      var _a2 = this.activationState_, activationEvent = _a2.activationEvent, wasActivatedByPointer = _a2.wasActivatedByPointer;
      var startPoint;
      if (wasActivatedByPointer) {
        startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }
      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };
      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };
      return {startPoint, endPoint};
    };
    MDCRippleFoundation2.prototype.runDeactivationUXLogicIfReady_ = function() {
      var _this = this;
      var FG_DEACTIVATION = MDCRippleFoundation2.cssClasses.FG_DEACTIVATION;
      var _a2 = this.activationState_, hasDeactivationUXRun = _a2.hasDeactivationUXRun, isActivated = _a2.isActivated;
      var activationHasEnded = hasDeactivationUXRun || !isActivated;
      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        this.adapter.addClass(FG_DEACTIVATION);
        this.fgDeactivationRemovalTimer_ = setTimeout(function() {
          _this.adapter.removeClass(FG_DEACTIVATION);
        }, numbers5.FG_DEACTIVATION_MS);
      }
    };
    MDCRippleFoundation2.prototype.rmBoundedActivationClasses_ = function() {
      var FG_ACTIVATION = MDCRippleFoundation2.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation2.prototype.resetActivationState_ = function() {
      var _this = this;
      this.previousActivationEvent_ = this.activationState_.activationEvent;
      this.activationState_ = this.defaultActivationState_();
      setTimeout(function() {
        return _this.previousActivationEvent_ = void 0;
      }, MDCRippleFoundation2.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation2.prototype.deactivate_ = function() {
      var _this = this;
      var activationState = this.activationState_;
      if (!activationState.isActivated) {
        return;
      }
      var state = __assign({}, activationState);
      if (activationState.isProgrammatic) {
        requestAnimationFrame(function() {
          return _this.animateDeactivation_(state);
        });
        this.resetActivationState_();
      } else {
        this.deregisterDeactivationHandlers_();
        requestAnimationFrame(function() {
          _this.activationState_.hasDeactivationUXRun = true;
          _this.animateDeactivation_(state);
          _this.resetActivationState_();
        });
      }
    };
    MDCRippleFoundation2.prototype.animateDeactivation_ = function(_a2) {
      var wasActivatedByPointer = _a2.wasActivatedByPointer, wasElementMadeActive = _a2.wasElementMadeActive;
      if (wasActivatedByPointer || wasElementMadeActive) {
        this.runDeactivationUXLogicIfReady_();
      }
    };
    MDCRippleFoundation2.prototype.layoutInternal_ = function() {
      var _this = this;
      this.frame_ = this.adapter.computeBoundingRect();
      var maxDim = Math.max(this.frame_.height, this.frame_.width);
      var getBoundedRadius = function() {
        var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
        return hypotenuse + MDCRippleFoundation2.numbers.PADDING;
      };
      this.maxRadius_ = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
      var initialSize = Math.floor(maxDim * MDCRippleFoundation2.numbers.INITIAL_ORIGIN_SCALE);
      if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
        this.initialSize_ = initialSize - 1;
      } else {
        this.initialSize_ = initialSize;
      }
      this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
      this.updateLayoutCssVars_();
    };
    MDCRippleFoundation2.prototype.updateLayoutCssVars_ = function() {
      var _a2 = MDCRippleFoundation2.strings, VAR_FG_SIZE = _a2.VAR_FG_SIZE, VAR_LEFT = _a2.VAR_LEFT, VAR_TOP = _a2.VAR_TOP, VAR_FG_SCALE = _a2.VAR_FG_SCALE;
      this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
      this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
      if (this.adapter.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };
        this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
        this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
      }
    };
    return MDCRippleFoundation2;
  }(MDCFoundation);

  // node_modules/@material/ripple/component.js
  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCRipple = function(_super) {
    __extends(MDCRipple2, _super);
    function MDCRipple2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.disabled = false;
      return _this;
    }
    MDCRipple2.attachTo = function(root, opts) {
      if (opts === void 0) {
        opts = {isUnbounded: void 0};
      }
      var ripple = new MDCRipple2(root);
      if (opts.isUnbounded !== void 0) {
        ripple.unbounded = opts.isUnbounded;
      }
      return ripple;
    };
    MDCRipple2.createAdapter = function(instance) {
      return {
        addClass: function(className) {
          return instance.root.classList.add(className);
        },
        browserSupportsCssVars: function() {
          return supportsCssVariables(window);
        },
        computeBoundingRect: function() {
          return instance.root.getBoundingClientRect();
        },
        containsEventTarget: function(target) {
          return instance.root.contains(target);
        },
        deregisterDocumentInteractionHandler: function(evtType, handler) {
          return document.documentElement.removeEventListener(evtType, handler, applyPassive());
        },
        deregisterInteractionHandler: function(evtType, handler) {
          return instance.root.removeEventListener(evtType, handler, applyPassive());
        },
        deregisterResizeHandler: function(handler) {
          return window.removeEventListener("resize", handler);
        },
        getWindowPageOffset: function() {
          return {x: window.pageXOffset, y: window.pageYOffset};
        },
        isSurfaceActive: function() {
          return matches(instance.root, ":active");
        },
        isSurfaceDisabled: function() {
          return Boolean(instance.disabled);
        },
        isUnbounded: function() {
          return Boolean(instance.unbounded);
        },
        registerDocumentInteractionHandler: function(evtType, handler) {
          return document.documentElement.addEventListener(evtType, handler, applyPassive());
        },
        registerInteractionHandler: function(evtType, handler) {
          return instance.root.addEventListener(evtType, handler, applyPassive());
        },
        registerResizeHandler: function(handler) {
          return window.addEventListener("resize", handler);
        },
        removeClass: function(className) {
          return instance.root.classList.remove(className);
        },
        updateCssVariable: function(varName, value) {
          return instance.root.style.setProperty(varName, value);
        }
      };
    };
    Object.defineProperty(MDCRipple2.prototype, "unbounded", {
      get: function() {
        return Boolean(this.unbounded_);
      },
      set: function(unbounded) {
        this.unbounded_ = Boolean(unbounded);
        this.setUnbounded_();
      },
      enumerable: true,
      configurable: true
    });
    MDCRipple2.prototype.activate = function() {
      this.foundation.activate();
    };
    MDCRipple2.prototype.deactivate = function() {
      this.foundation.deactivate();
    };
    MDCRipple2.prototype.layout = function() {
      this.foundation.layout();
    };
    MDCRipple2.prototype.getDefaultFoundation = function() {
      return new MDCRippleFoundation(MDCRipple2.createAdapter(this));
    };
    MDCRipple2.prototype.initialSyncWithDOM = function() {
      var root = this.root;
      this.unbounded = "mdcRippleIsUnbounded" in root.dataset;
    };
    MDCRipple2.prototype.setUnbounded_ = function() {
      this.foundation.setUnbounded(Boolean(this.unbounded_));
    };
    return MDCRipple2;
  }(MDCComponent);

  // node_modules/@material/select/constants.js
  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var cssClasses8 = {
    ACTIVATED: "mdc-select--activated",
    DISABLED: "mdc-select--disabled",
    FOCUSED: "mdc-select--focused",
    INVALID: "mdc-select--invalid",
    MENU_INVALID: "mdc-select__menu--invalid",
    OUTLINED: "mdc-select--outlined",
    REQUIRED: "mdc-select--required",
    ROOT: "mdc-select",
    WITH_LEADING_ICON: "mdc-select--with-leading-icon"
  };
  var strings6 = {
    ARIA_CONTROLS: "aria-controls",
    ARIA_DESCRIBEDBY: "aria-describedby",
    ARIA_SELECTED_ATTR: "aria-selected",
    CHANGE_EVENT: "MDCSelect:change",
    HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
    LABEL_SELECTOR: ".mdc-floating-label",
    LEADING_ICON_SELECTOR: ".mdc-select__icon",
    LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
    MENU_SELECTOR: ".mdc-select__menu",
    OUTLINE_SELECTOR: ".mdc-notched-outline",
    SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
    SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
    VALUE_ATTR: "data-value"
  };
  var numbers6 = {
    LABEL_SCALE: 0.75,
    UNSET_INDEX: -1,
    CLICK_DEBOUNCE_TIMEOUT_MS: 330
  };

  // node_modules/@material/select/foundation.js
  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCSelectFoundation = function(_super) {
    __extends(MDCSelectFoundation2, _super);
    function MDCSelectFoundation2(adapter, foundationMap) {
      if (foundationMap === void 0) {
        foundationMap = {};
      }
      var _this = _super.call(this, __assign(__assign({}, MDCSelectFoundation2.defaultAdapter), adapter)) || this;
      _this.disabled = false;
      _this.isMenuOpen = false;
      _this.useDefaultValidation = true;
      _this.customValidity = true;
      _this.lastSelectedIndex = numbers6.UNSET_INDEX;
      _this.clickDebounceTimeout = 0;
      _this.recentlyClicked = false;
      _this.leadingIcon = foundationMap.leadingIcon;
      _this.helperText = foundationMap.helperText;
      return _this;
    }
    Object.defineProperty(MDCSelectFoundation2, "cssClasses", {
      get: function() {
        return cssClasses8;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelectFoundation2, "numbers", {
      get: function() {
        return numbers6;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelectFoundation2, "strings", {
      get: function() {
        return strings6;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelectFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          hasClass: function() {
            return false;
          },
          activateBottomLine: function() {
            return void 0;
          },
          deactivateBottomLine: function() {
            return void 0;
          },
          getSelectedIndex: function() {
            return -1;
          },
          setSelectedIndex: function() {
            return void 0;
          },
          hasLabel: function() {
            return false;
          },
          floatLabel: function() {
            return void 0;
          },
          getLabelWidth: function() {
            return 0;
          },
          setLabelRequired: function() {
            return void 0;
          },
          hasOutline: function() {
            return false;
          },
          notchOutline: function() {
            return void 0;
          },
          closeOutline: function() {
            return void 0;
          },
          setRippleCenter: function() {
            return void 0;
          },
          notifyChange: function() {
            return void 0;
          },
          setSelectedText: function() {
            return void 0;
          },
          isSelectAnchorFocused: function() {
            return false;
          },
          getSelectAnchorAttr: function() {
            return "";
          },
          setSelectAnchorAttr: function() {
            return void 0;
          },
          removeSelectAnchorAttr: function() {
            return void 0;
          },
          addMenuClass: function() {
            return void 0;
          },
          removeMenuClass: function() {
            return void 0;
          },
          openMenu: function() {
            return void 0;
          },
          closeMenu: function() {
            return void 0;
          },
          getAnchorElement: function() {
            return null;
          },
          setMenuAnchorElement: function() {
            return void 0;
          },
          setMenuAnchorCorner: function() {
            return void 0;
          },
          setMenuWrapFocus: function() {
            return void 0;
          },
          focusMenuItemAtIndex: function() {
            return void 0;
          },
          getMenuItemCount: function() {
            return 0;
          },
          getMenuItemValues: function() {
            return [];
          },
          getMenuItemTextAtIndex: function() {
            return "";
          },
          isTypeaheadInProgress: function() {
            return false;
          },
          typeaheadMatchItem: function() {
            return -1;
          }
        };
      },
      enumerable: true,
      configurable: true
    });
    MDCSelectFoundation2.prototype.getSelectedIndex = function() {
      return this.adapter.getSelectedIndex();
    };
    MDCSelectFoundation2.prototype.setSelectedIndex = function(index, closeMenu, skipNotify) {
      if (closeMenu === void 0) {
        closeMenu = false;
      }
      if (skipNotify === void 0) {
        skipNotify = false;
      }
      if (index >= this.adapter.getMenuItemCount()) {
        return;
      }
      if (index === numbers6.UNSET_INDEX) {
        this.adapter.setSelectedText("");
      } else {
        this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(index).trim());
      }
      this.adapter.setSelectedIndex(index);
      if (closeMenu) {
        this.adapter.closeMenu();
      }
      if (!skipNotify && this.lastSelectedIndex !== index) {
        this.handleChange();
      }
      this.lastSelectedIndex = index;
    };
    MDCSelectFoundation2.prototype.setValue = function(value, skipNotify) {
      if (skipNotify === void 0) {
        skipNotify = false;
      }
      var index = this.adapter.getMenuItemValues().indexOf(value);
      this.setSelectedIndex(index, false, skipNotify);
    };
    MDCSelectFoundation2.prototype.getValue = function() {
      var index = this.adapter.getSelectedIndex();
      var menuItemValues = this.adapter.getMenuItemValues();
      return index !== numbers6.UNSET_INDEX ? menuItemValues[index] : "";
    };
    MDCSelectFoundation2.prototype.getDisabled = function() {
      return this.disabled;
    };
    MDCSelectFoundation2.prototype.setDisabled = function(isDisabled) {
      this.disabled = isDisabled;
      if (this.disabled) {
        this.adapter.addClass(cssClasses8.DISABLED);
        this.adapter.closeMenu();
      } else {
        this.adapter.removeClass(cssClasses8.DISABLED);
      }
      if (this.leadingIcon) {
        this.leadingIcon.setDisabled(this.disabled);
      }
      if (this.disabled) {
        this.adapter.removeSelectAnchorAttr("tabindex");
      } else {
        this.adapter.setSelectAnchorAttr("tabindex", "0");
      }
      this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    };
    MDCSelectFoundation2.prototype.openMenu = function() {
      this.adapter.addClass(cssClasses8.ACTIVATED);
      this.adapter.openMenu();
      this.isMenuOpen = true;
      this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    };
    MDCSelectFoundation2.prototype.setHelperTextContent = function(content) {
      if (this.helperText) {
        this.helperText.setContent(content);
      }
    };
    MDCSelectFoundation2.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var optionHasValue = this.getValue().length > 0;
        var isFocused = this.adapter.hasClass(cssClasses8.FOCUSED);
        var shouldFloatAndNotch = optionHasValue || isFocused;
        var isRequired = this.adapter.hasClass(cssClasses8.REQUIRED);
        this.notchOutline(shouldFloatAndNotch);
        this.adapter.floatLabel(shouldFloatAndNotch);
        this.adapter.setLabelRequired(isRequired);
      }
    };
    MDCSelectFoundation2.prototype.layoutOptions = function() {
      var menuItemValues = this.adapter.getMenuItemValues();
      var selectedIndex = menuItemValues.indexOf(this.getValue());
      this.setSelectedIndex(selectedIndex, false, true);
    };
    MDCSelectFoundation2.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length === 0) {
        return;
      }
      var selectedIndex = this.getSelectedIndex();
      var focusItemIndex = selectedIndex >= 0 ? selectedIndex : 0;
      this.adapter.focusMenuItemAtIndex(focusItemIndex);
    };
    MDCSelectFoundation2.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    };
    MDCSelectFoundation2.prototype.handleMenuClosed = function() {
      this.adapter.removeClass(cssClasses8.ACTIVATED);
      this.isMenuOpen = false;
      if (!this.adapter.isSelectAnchorFocused()) {
        this.blur();
      }
    };
    MDCSelectFoundation2.prototype.handleChange = function() {
      this.layout();
      this.adapter.notifyChange(this.getValue());
      var isRequired = this.adapter.hasClass(cssClasses8.REQUIRED);
      if (isRequired && this.useDefaultValidation) {
        this.setValid(this.isValid());
      }
    };
    MDCSelectFoundation2.prototype.handleMenuItemAction = function(index) {
      this.setSelectedIndex(index, true);
    };
    MDCSelectFoundation2.prototype.handleFocus = function() {
      this.adapter.addClass(cssClasses8.FOCUSED);
      this.layout();
      this.adapter.activateBottomLine();
    };
    MDCSelectFoundation2.prototype.handleBlur = function() {
      if (this.isMenuOpen) {
        return;
      }
      this.blur();
    };
    MDCSelectFoundation2.prototype.handleClick = function(normalizedX) {
      if (this.disabled || this.recentlyClicked) {
        return;
      }
      this.setClickDebounceTimeout();
      if (this.isMenuOpen) {
        this.adapter.closeMenu();
        return;
      }
      this.adapter.setRippleCenter(normalizedX);
      this.openMenu();
    };
    MDCSelectFoundation2.prototype.handleKeydown = function(event) {
      if (this.isMenuOpen || !this.adapter.hasClass(cssClasses8.FOCUSED)) {
        return;
      }
      var isEnter = normalizeKey(event) === KEY.ENTER;
      var isSpace = normalizeKey(event) === KEY.SPACEBAR;
      var arrowUp = normalizeKey(event) === KEY.ARROW_UP;
      var arrowDown = normalizeKey(event) === KEY.ARROW_DOWN;
      if (!isSpace && event.key && event.key.length === 1 || isSpace && this.adapter.isTypeaheadInProgress()) {
        var key = isSpace ? " " : event.key;
        var typeaheadNextIndex = this.adapter.typeaheadMatchItem(key, this.getSelectedIndex());
        if (typeaheadNextIndex >= 0) {
          this.setSelectedIndex(typeaheadNextIndex);
        }
        event.preventDefault();
        return;
      }
      if (!isEnter && !isSpace && !arrowUp && !arrowDown) {
        return;
      }
      if (arrowUp && this.getSelectedIndex() > 0) {
        this.setSelectedIndex(this.getSelectedIndex() - 1);
      } else if (arrowDown && this.getSelectedIndex() < this.adapter.getMenuItemCount() - 1) {
        this.setSelectedIndex(this.getSelectedIndex() + 1);
      }
      this.openMenu();
      event.preventDefault();
    };
    MDCSelectFoundation2.prototype.notchOutline = function(openNotch) {
      if (!this.adapter.hasOutline()) {
        return;
      }
      var isFocused = this.adapter.hasClass(cssClasses8.FOCUSED);
      if (openNotch) {
        var labelScale = numbers6.LABEL_SCALE;
        var labelWidth = this.adapter.getLabelWidth() * labelScale;
        this.adapter.notchOutline(labelWidth);
      } else if (!isFocused) {
        this.adapter.closeOutline();
      }
    };
    MDCSelectFoundation2.prototype.setLeadingIconAriaLabel = function(label) {
      if (this.leadingIcon) {
        this.leadingIcon.setAriaLabel(label);
      }
    };
    MDCSelectFoundation2.prototype.setLeadingIconContent = function(content) {
      if (this.leadingIcon) {
        this.leadingIcon.setContent(content);
      }
    };
    MDCSelectFoundation2.prototype.setUseDefaultValidation = function(useDefaultValidation) {
      this.useDefaultValidation = useDefaultValidation;
    };
    MDCSelectFoundation2.prototype.setValid = function(isValid) {
      if (!this.useDefaultValidation) {
        this.customValidity = isValid;
      }
      this.adapter.setSelectAnchorAttr("aria-invalid", (!isValid).toString());
      if (isValid) {
        this.adapter.removeClass(cssClasses8.INVALID);
        this.adapter.removeMenuClass(cssClasses8.MENU_INVALID);
      } else {
        this.adapter.addClass(cssClasses8.INVALID);
        this.adapter.addMenuClass(cssClasses8.MENU_INVALID);
      }
      this.syncHelperTextValidity(isValid);
    };
    MDCSelectFoundation2.prototype.isValid = function() {
      if (this.useDefaultValidation && this.adapter.hasClass(cssClasses8.REQUIRED) && !this.adapter.hasClass(cssClasses8.DISABLED)) {
        return this.getSelectedIndex() !== numbers6.UNSET_INDEX && (this.getSelectedIndex() !== 0 || Boolean(this.getValue()));
      }
      return this.customValidity;
    };
    MDCSelectFoundation2.prototype.setRequired = function(isRequired) {
      if (isRequired) {
        this.adapter.addClass(cssClasses8.REQUIRED);
      } else {
        this.adapter.removeClass(cssClasses8.REQUIRED);
      }
      this.adapter.setSelectAnchorAttr("aria-required", isRequired.toString());
      this.adapter.setLabelRequired(isRequired);
    };
    MDCSelectFoundation2.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    };
    MDCSelectFoundation2.prototype.init = function() {
      var anchorEl = this.adapter.getAnchorElement();
      if (anchorEl) {
        this.adapter.setMenuAnchorElement(anchorEl);
        this.adapter.setMenuAnchorCorner(Corner.BOTTOM_START);
      }
      this.adapter.setMenuWrapFocus(false);
      this.setDisabled(this.adapter.hasClass(cssClasses8.DISABLED));
      this.syncHelperTextValidity(!this.adapter.hasClass(cssClasses8.INVALID));
      this.layout();
      this.layoutOptions();
    };
    MDCSelectFoundation2.prototype.blur = function() {
      this.adapter.removeClass(cssClasses8.FOCUSED);
      this.layout();
      this.adapter.deactivateBottomLine();
      var isRequired = this.adapter.hasClass(cssClasses8.REQUIRED);
      if (isRequired && this.useDefaultValidation) {
        this.setValid(this.isValid());
      }
    };
    MDCSelectFoundation2.prototype.syncHelperTextValidity = function(isValid) {
      if (!this.helperText) {
        return;
      }
      this.helperText.setValidity(isValid);
      var helperTextVisible = this.helperText.isVisible();
      var helperTextId = this.helperText.getId();
      if (helperTextVisible && helperTextId) {
        this.adapter.setSelectAnchorAttr(strings6.ARIA_DESCRIBEDBY, helperTextId);
      } else {
        this.adapter.removeSelectAnchorAttr(strings6.ARIA_DESCRIBEDBY);
      }
    };
    MDCSelectFoundation2.prototype.setClickDebounceTimeout = function() {
      var _this = this;
      clearTimeout(this.clickDebounceTimeout);
      this.clickDebounceTimeout = setTimeout(function() {
        _this.recentlyClicked = false;
      }, numbers6.CLICK_DEBOUNCE_TIMEOUT_MS);
      this.recentlyClicked = true;
    };
    return MDCSelectFoundation2;
  }(MDCFoundation);

  // node_modules/@material/select/helper-text/constants.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var strings7 = {
    ARIA_HIDDEN: "aria-hidden",
    ROLE: "role"
  };
  var cssClasses9 = {
    HELPER_TEXT_VALIDATION_MSG: "mdc-select-helper-text--validation-msg",
    HELPER_TEXT_VALIDATION_MSG_PERSISTENT: "mdc-select-helper-text--validation-msg-persistent"
  };

  // node_modules/@material/select/helper-text/foundation.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCSelectHelperTextFoundation = function(_super) {
    __extends(MDCSelectHelperTextFoundation2, _super);
    function MDCSelectHelperTextFoundation2(adapter) {
      return _super.call(this, __assign(__assign({}, MDCSelectHelperTextFoundation2.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCSelectHelperTextFoundation2, "cssClasses", {
      get: function() {
        return cssClasses9;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelectHelperTextFoundation2, "strings", {
      get: function() {
        return strings7;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelectHelperTextFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          hasClass: function() {
            return false;
          },
          setAttr: function() {
            return void 0;
          },
          getAttr: function() {
            return null;
          },
          removeAttr: function() {
            return void 0;
          },
          setContent: function() {
            return void 0;
          }
        };
      },
      enumerable: true,
      configurable: true
    });
    MDCSelectHelperTextFoundation2.prototype.getId = function() {
      return this.adapter.getAttr("id");
    };
    MDCSelectHelperTextFoundation2.prototype.isVisible = function() {
      return this.adapter.getAttr(strings7.ARIA_HIDDEN) !== "true";
    };
    MDCSelectHelperTextFoundation2.prototype.setContent = function(content) {
      this.adapter.setContent(content);
    };
    MDCSelectHelperTextFoundation2.prototype.setValidation = function(isValidation) {
      if (isValidation) {
        this.adapter.addClass(cssClasses9.HELPER_TEXT_VALIDATION_MSG);
      } else {
        this.adapter.removeClass(cssClasses9.HELPER_TEXT_VALIDATION_MSG);
      }
    };
    MDCSelectHelperTextFoundation2.prototype.setValidationMsgPersistent = function(isPersistent) {
      if (isPersistent) {
        this.adapter.addClass(cssClasses9.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
      } else {
        this.adapter.removeClass(cssClasses9.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
      }
    };
    MDCSelectHelperTextFoundation2.prototype.setValidity = function(selectIsValid) {
      var isValidationMsg = this.adapter.hasClass(cssClasses9.HELPER_TEXT_VALIDATION_MSG);
      if (!isValidationMsg) {
        return;
      }
      var isPersistentValidationMsg = this.adapter.hasClass(cssClasses9.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
      var msgShouldDisplay = !selectIsValid || isPersistentValidationMsg;
      if (msgShouldDisplay) {
        this.showToScreenReader();
        if (!selectIsValid) {
          this.adapter.setAttr(strings7.ROLE, "alert");
        } else {
          this.adapter.removeAttr(strings7.ROLE);
        }
        return;
      }
      this.adapter.removeAttr(strings7.ROLE);
      this.hide();
    };
    MDCSelectHelperTextFoundation2.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(strings7.ARIA_HIDDEN);
    };
    MDCSelectHelperTextFoundation2.prototype.hide = function() {
      this.adapter.setAttr(strings7.ARIA_HIDDEN, "true");
    };
    return MDCSelectHelperTextFoundation2;
  }(MDCFoundation);

  // node_modules/@material/select/helper-text/component.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCSelectHelperText = function(_super) {
    __extends(MDCSelectHelperText2, _super);
    function MDCSelectHelperText2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSelectHelperText2.attachTo = function(root) {
      return new MDCSelectHelperText2(root);
    };
    Object.defineProperty(MDCSelectHelperText2.prototype, "foundationForSelect", {
      get: function() {
        return this.foundation;
      },
      enumerable: true,
      configurable: true
    });
    MDCSelectHelperText2.prototype.getDefaultFoundation = function() {
      var _this = this;
      var adapter = {
        addClass: function(className) {
          return _this.root.classList.add(className);
        },
        removeClass: function(className) {
          return _this.root.classList.remove(className);
        },
        hasClass: function(className) {
          return _this.root.classList.contains(className);
        },
        getAttr: function(attr) {
          return _this.root.getAttribute(attr);
        },
        setAttr: function(attr, value) {
          return _this.root.setAttribute(attr, value);
        },
        removeAttr: function(attr) {
          return _this.root.removeAttribute(attr);
        },
        setContent: function(content) {
          _this.root.textContent = content;
        }
      };
      return new MDCSelectHelperTextFoundation(adapter);
    };
    return MDCSelectHelperText2;
  }(MDCComponent);

  // node_modules/@material/select/icon/constants.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var strings8 = {
    ICON_EVENT: "MDCSelect:icon",
    ICON_ROLE: "button"
  };

  // node_modules/@material/select/icon/foundation.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var INTERACTION_EVENTS = ["click", "keydown"];
  var MDCSelectIconFoundation = function(_super) {
    __extends(MDCSelectIconFoundation2, _super);
    function MDCSelectIconFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCSelectIconFoundation2.defaultAdapter), adapter)) || this;
      _this.savedTabIndex_ = null;
      _this.interactionHandler_ = function(evt) {
        return _this.handleInteraction(evt);
      };
      return _this;
    }
    Object.defineProperty(MDCSelectIconFoundation2, "strings", {
      get: function() {
        return strings8;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelectIconFoundation2, "defaultAdapter", {
      get: function() {
        return {
          getAttr: function() {
            return null;
          },
          setAttr: function() {
            return void 0;
          },
          removeAttr: function() {
            return void 0;
          },
          setContent: function() {
            return void 0;
          },
          registerInteractionHandler: function() {
            return void 0;
          },
          deregisterInteractionHandler: function() {
            return void 0;
          },
          notifyIconAction: function() {
            return void 0;
          }
        };
      },
      enumerable: true,
      configurable: true
    });
    MDCSelectIconFoundation2.prototype.init = function() {
      var _this = this;
      this.savedTabIndex_ = this.adapter.getAttr("tabindex");
      INTERACTION_EVENTS.forEach(function(evtType) {
        _this.adapter.registerInteractionHandler(evtType, _this.interactionHandler_);
      });
    };
    MDCSelectIconFoundation2.prototype.destroy = function() {
      var _this = this;
      INTERACTION_EVENTS.forEach(function(evtType) {
        _this.adapter.deregisterInteractionHandler(evtType, _this.interactionHandler_);
      });
    };
    MDCSelectIconFoundation2.prototype.setDisabled = function(disabled) {
      if (!this.savedTabIndex_) {
        return;
      }
      if (disabled) {
        this.adapter.setAttr("tabindex", "-1");
        this.adapter.removeAttr("role");
      } else {
        this.adapter.setAttr("tabindex", this.savedTabIndex_);
        this.adapter.setAttr("role", strings8.ICON_ROLE);
      }
    };
    MDCSelectIconFoundation2.prototype.setAriaLabel = function(label) {
      this.adapter.setAttr("aria-label", label);
    };
    MDCSelectIconFoundation2.prototype.setContent = function(content) {
      this.adapter.setContent(content);
    };
    MDCSelectIconFoundation2.prototype.handleInteraction = function(evt) {
      var isEnterKey = evt.key === "Enter" || evt.keyCode === 13;
      if (evt.type === "click" || isEnterKey) {
        this.adapter.notifyIconAction();
      }
    };
    return MDCSelectIconFoundation2;
  }(MDCFoundation);

  // node_modules/@material/select/icon/component.js
  /**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCSelectIcon = function(_super) {
    __extends(MDCSelectIcon2, _super);
    function MDCSelectIcon2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSelectIcon2.attachTo = function(root) {
      return new MDCSelectIcon2(root);
    };
    Object.defineProperty(MDCSelectIcon2.prototype, "foundationForSelect", {
      get: function() {
        return this.foundation;
      },
      enumerable: true,
      configurable: true
    });
    MDCSelectIcon2.prototype.getDefaultFoundation = function() {
      var _this = this;
      var adapter = {
        getAttr: function(attr) {
          return _this.root.getAttribute(attr);
        },
        setAttr: function(attr, value) {
          return _this.root.setAttribute(attr, value);
        },
        removeAttr: function(attr) {
          return _this.root.removeAttribute(attr);
        },
        setContent: function(content) {
          _this.root.textContent = content;
        },
        registerInteractionHandler: function(evtType, handler) {
          return _this.listen(evtType, handler);
        },
        deregisterInteractionHandler: function(evtType, handler) {
          return _this.unlisten(evtType, handler);
        },
        notifyIconAction: function() {
          return _this.emit(MDCSelectIconFoundation.strings.ICON_EVENT, {}, true);
        }
      };
      return new MDCSelectIconFoundation(adapter);
    };
    return MDCSelectIcon2;
  }(MDCComponent);

  // node_modules/@material/select/component.js
  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
  var MDCSelect = function(_super) {
    __extends(MDCSelect2, _super);
    function MDCSelect2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSelect2.attachTo = function(root) {
      return new MDCSelect2(root);
    };
    MDCSelect2.prototype.initialize = function(labelFactory, lineRippleFactory, outlineFactory, menuFactory, iconFactory, helperTextFactory) {
      if (labelFactory === void 0) {
        labelFactory = function(el) {
          return new MDCFloatingLabel(el);
        };
      }
      if (lineRippleFactory === void 0) {
        lineRippleFactory = function(el) {
          return new MDCLineRipple(el);
        };
      }
      if (outlineFactory === void 0) {
        outlineFactory = function(el) {
          return new MDCNotchedOutline(el);
        };
      }
      if (menuFactory === void 0) {
        menuFactory = function(el) {
          return new MDCMenu(el);
        };
      }
      if (iconFactory === void 0) {
        iconFactory = function(el) {
          return new MDCSelectIcon(el);
        };
      }
      if (helperTextFactory === void 0) {
        helperTextFactory = function(el) {
          return new MDCSelectHelperText(el);
        };
      }
      this.selectAnchor = this.root.querySelector(strings6.SELECT_ANCHOR_SELECTOR);
      this.selectedText = this.root.querySelector(strings6.SELECTED_TEXT_SELECTOR);
      this.hiddenInput = this.root.querySelector(strings6.HIDDEN_INPUT_SELECTOR);
      if (!this.selectedText) {
        throw new Error("MDCSelect: Missing required element: The following selector must be present: " + ("'" + strings6.SELECTED_TEXT_SELECTOR + "'"));
      }
      if (this.selectAnchor.hasAttribute(strings6.ARIA_CONTROLS)) {
        var helperTextElement = document.getElementById(this.selectAnchor.getAttribute(strings6.ARIA_CONTROLS));
        if (helperTextElement) {
          this.helperText = helperTextFactory(helperTextElement);
        }
      }
      this.menuSetup(menuFactory);
      var labelElement = this.root.querySelector(strings6.LABEL_SELECTOR);
      this.label = labelElement ? labelFactory(labelElement) : null;
      var lineRippleElement = this.root.querySelector(strings6.LINE_RIPPLE_SELECTOR);
      this.lineRipple = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
      var outlineElement = this.root.querySelector(strings6.OUTLINE_SELECTOR);
      this.outline = outlineElement ? outlineFactory(outlineElement) : null;
      var leadingIcon = this.root.querySelector(strings6.LEADING_ICON_SELECTOR);
      if (leadingIcon) {
        this.leadingIcon = iconFactory(leadingIcon);
      }
      if (!this.root.classList.contains(cssClasses8.OUTLINED)) {
        this.ripple = this.createRipple();
      }
    };
    MDCSelect2.prototype.initialSyncWithDOM = function() {
      var _this = this;
      this.handleFocus = function() {
        _this.foundation.handleFocus();
      };
      this.handleBlur = function() {
        _this.foundation.handleBlur();
      };
      this.handleClick = function(evt) {
        _this.selectAnchor.focus();
        _this.foundation.handleClick(_this.getNormalizedXCoordinate(evt));
      };
      this.handleKeydown = function(evt) {
        _this.foundation.handleKeydown(evt);
      };
      this.handleMenuItemAction = function(evt) {
        _this.foundation.handleMenuItemAction(evt.detail.index);
      };
      this.handleMenuOpened = function() {
        _this.foundation.handleMenuOpened();
      };
      this.handleMenuClosed = function() {
        _this.foundation.handleMenuClosed();
      };
      this.handleMenuClosing = function() {
        _this.foundation.handleMenuClosing();
      };
      this.selectAnchor.addEventListener("focus", this.handleFocus);
      this.selectAnchor.addEventListener("blur", this.handleBlur);
      this.selectAnchor.addEventListener("click", this.handleClick);
      this.selectAnchor.addEventListener("keydown", this.handleKeydown);
      this.menu.listen(strings.CLOSED_EVENT, this.handleMenuClosed);
      this.menu.listen(strings.CLOSING_EVENT, this.handleMenuClosing);
      this.menu.listen(strings.OPENED_EVENT, this.handleMenuOpened);
      this.menu.listen(strings3.SELECTED_EVENT, this.handleMenuItemAction);
      if (this.hiddenInput) {
        if (this.hiddenInput.value) {
          this.foundation.setValue(this.hiddenInput.value, true);
          this.foundation.layout();
          return;
        }
        this.hiddenInput.value = this.value;
      }
    };
    MDCSelect2.prototype.destroy = function() {
      this.selectAnchor.removeEventListener("focus", this.handleFocus);
      this.selectAnchor.removeEventListener("blur", this.handleBlur);
      this.selectAnchor.removeEventListener("keydown", this.handleKeydown);
      this.selectAnchor.removeEventListener("click", this.handleClick);
      this.menu.unlisten(strings.CLOSED_EVENT, this.handleMenuClosed);
      this.menu.unlisten(strings.OPENED_EVENT, this.handleMenuOpened);
      this.menu.unlisten(strings3.SELECTED_EVENT, this.handleMenuItemAction);
      this.menu.destroy();
      if (this.ripple) {
        this.ripple.destroy();
      }
      if (this.outline) {
        this.outline.destroy();
      }
      if (this.leadingIcon) {
        this.leadingIcon.destroy();
      }
      if (this.helperText) {
        this.helperText.destroy();
      }
      _super.prototype.destroy.call(this);
    };
    Object.defineProperty(MDCSelect2.prototype, "value", {
      get: function() {
        return this.foundation.getValue();
      },
      set: function(value) {
        this.foundation.setValue(value);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelect2.prototype, "selectedIndex", {
      get: function() {
        return this.foundation.getSelectedIndex();
      },
      set: function(selectedIndex) {
        this.foundation.setSelectedIndex(selectedIndex, true);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelect2.prototype, "disabled", {
      get: function() {
        return this.foundation.getDisabled();
      },
      set: function(disabled) {
        this.foundation.setDisabled(disabled);
        if (this.hiddenInput) {
          this.hiddenInput.disabled = disabled;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelect2.prototype, "leadingIconAriaLabel", {
      set: function(label) {
        this.foundation.setLeadingIconAriaLabel(label);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelect2.prototype, "leadingIconContent", {
      set: function(content) {
        this.foundation.setLeadingIconContent(content);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelect2.prototype, "helperTextContent", {
      set: function(content) {
        this.foundation.setHelperTextContent(content);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelect2.prototype, "useDefaultValidation", {
      set: function(useDefaultValidation) {
        this.foundation.setUseDefaultValidation(useDefaultValidation);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelect2.prototype, "valid", {
      get: function() {
        return this.foundation.isValid();
      },
      set: function(isValid) {
        this.foundation.setValid(isValid);
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(MDCSelect2.prototype, "required", {
      get: function() {
        return this.foundation.getRequired();
      },
      set: function(isRequired) {
        this.foundation.setRequired(isRequired);
      },
      enumerable: true,
      configurable: true
    });
    MDCSelect2.prototype.layout = function() {
      this.foundation.layout();
    };
    MDCSelect2.prototype.layoutOptions = function() {
      this.foundation.layoutOptions();
      this.menu.layout();
      this.menuItemValues = this.menu.items.map(function(el) {
        return el.getAttribute(strings6.VALUE_ATTR) || "";
      });
      if (this.hiddenInput) {
        this.hiddenInput.value = this.value;
      }
    };
    MDCSelect2.prototype.getDefaultFoundation = function() {
      var adapter = __assign(__assign(__assign(__assign({}, this.getSelectAdapterMethods()), this.getCommonAdapterMethods()), this.getOutlineAdapterMethods()), this.getLabelAdapterMethods());
      return new MDCSelectFoundation(adapter, this.getFoundationMap());
    };
    MDCSelect2.prototype.menuSetup = function(menuFactory) {
      this.menuElement = this.root.querySelector(strings6.MENU_SELECTOR);
      this.menu = menuFactory(this.menuElement);
      this.menu.hasTypeahead = true;
      this.menu.singleSelection = true;
      this.menuItemValues = this.menu.items.map(function(el) {
        return el.getAttribute(strings6.VALUE_ATTR) || "";
      });
    };
    MDCSelect2.prototype.createRipple = function() {
      var _this = this;
      var adapter = __assign(__assign({}, MDCRipple.createAdapter({root: this.selectAnchor})), {registerInteractionHandler: function(evtType, handler) {
        _this.selectAnchor.addEventListener(evtType, handler);
      }, deregisterInteractionHandler: function(evtType, handler) {
        _this.selectAnchor.removeEventListener(evtType, handler);
      }});
      return new MDCRipple(this.selectAnchor, new MDCRippleFoundation(adapter));
    };
    MDCSelect2.prototype.getSelectAdapterMethods = function() {
      var _this = this;
      return {
        getMenuItemAttr: function(menuItem, attr) {
          return menuItem.getAttribute(attr);
        },
        setSelectedText: function(text) {
          _this.selectedText.textContent = text;
        },
        isSelectAnchorFocused: function() {
          return document.activeElement === _this.selectAnchor;
        },
        getSelectAnchorAttr: function(attr) {
          return _this.selectAnchor.getAttribute(attr);
        },
        setSelectAnchorAttr: function(attr, value) {
          _this.selectAnchor.setAttribute(attr, value);
        },
        removeSelectAnchorAttr: function(attr) {
          _this.selectAnchor.removeAttribute(attr);
        },
        addMenuClass: function(className) {
          _this.menuElement.classList.add(className);
        },
        removeMenuClass: function(className) {
          _this.menuElement.classList.remove(className);
        },
        openMenu: function() {
          _this.menu.open = true;
        },
        closeMenu: function() {
          _this.menu.open = false;
        },
        getAnchorElement: function() {
          return _this.root.querySelector(strings6.SELECT_ANCHOR_SELECTOR);
        },
        setMenuAnchorElement: function(anchorEl) {
          _this.menu.setAnchorElement(anchorEl);
        },
        setMenuAnchorCorner: function(anchorCorner) {
          _this.menu.setAnchorCorner(anchorCorner);
        },
        setMenuWrapFocus: function(wrapFocus) {
          _this.menu.wrapFocus = wrapFocus;
        },
        getSelectedIndex: function() {
          var index = _this.menu.selectedIndex;
          return index instanceof Array ? index[0] : index;
        },
        setSelectedIndex: function(index) {
          _this.menu.selectedIndex = index;
        },
        focusMenuItemAtIndex: function(index) {
          _this.menu.items[index].focus();
        },
        getMenuItemCount: function() {
          return _this.menu.items.length;
        },
        getMenuItemValues: function() {
          return _this.menuItemValues;
        },
        getMenuItemTextAtIndex: function(index) {
          return _this.menu.getPrimaryTextAtIndex(index);
        },
        isTypeaheadInProgress: function() {
          return _this.menu.typeaheadInProgress;
        },
        typeaheadMatchItem: function(nextChar, startingIndex) {
          return _this.menu.typeaheadMatchItem(nextChar, startingIndex);
        }
      };
    };
    MDCSelect2.prototype.getCommonAdapterMethods = function() {
      var _this = this;
      return {
        addClass: function(className) {
          _this.root.classList.add(className);
        },
        removeClass: function(className) {
          _this.root.classList.remove(className);
        },
        hasClass: function(className) {
          return _this.root.classList.contains(className);
        },
        setRippleCenter: function(normalizedX) {
          _this.lineRipple && _this.lineRipple.setRippleCenter(normalizedX);
        },
        activateBottomLine: function() {
          _this.lineRipple && _this.lineRipple.activate();
        },
        deactivateBottomLine: function() {
          _this.lineRipple && _this.lineRipple.deactivate();
        },
        notifyChange: function(value) {
          var index = _this.selectedIndex;
          _this.emit(strings6.CHANGE_EVENT, {value, index}, true);
          if (_this.hiddenInput) {
            _this.hiddenInput.value = value;
          }
        }
      };
    };
    MDCSelect2.prototype.getOutlineAdapterMethods = function() {
      var _this = this;
      return {
        hasOutline: function() {
          return Boolean(_this.outline);
        },
        notchOutline: function(labelWidth) {
          _this.outline && _this.outline.notch(labelWidth);
        },
        closeOutline: function() {
          _this.outline && _this.outline.closeNotch();
        }
      };
    };
    MDCSelect2.prototype.getLabelAdapterMethods = function() {
      var _this = this;
      return {
        hasLabel: function() {
          return !!_this.label;
        },
        floatLabel: function(shouldFloat) {
          _this.label && _this.label.float(shouldFloat);
        },
        getLabelWidth: function() {
          return _this.label ? _this.label.getWidth() : 0;
        },
        setLabelRequired: function(isRequired) {
          _this.label && _this.label.setRequired(isRequired);
        }
      };
    };
    MDCSelect2.prototype.getNormalizedXCoordinate = function(evt) {
      var targetClientRect = evt.target.getBoundingClientRect();
      var xCoordinate = this.isTouchEvent(evt) ? evt.touches[0].clientX : evt.clientX;
      return xCoordinate - targetClientRect.left;
    };
    MDCSelect2.prototype.isTouchEvent = function(evt) {
      return Boolean(evt.touches);
    };
    MDCSelect2.prototype.getFoundationMap = function() {
      return {
        helperText: this.helperText ? this.helperText.foundationForSelect : void 0,
        leadingIcon: this.leadingIcon ? this.leadingIcon.foundationForSelect : void 0
      };
    };
    return MDCSelect2;
  }(MDCComponent);

  // src/index.js
  async function init() {
    const selectYear = new MDCSelect(document.querySelector(".year-select"));
    selectYear.listen("MDCSelect:change", () => {
      console.log(`Selected option at index ${selectYear.selectedIndex} with value "${selectYear.value}"`);
    });
  }
  init();
})();
//# sourceMappingURL=index.js.map

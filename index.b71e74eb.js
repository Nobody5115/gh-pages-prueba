// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gmPuC":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _title = require("./components/title");
var _button = require("./components/button");
var _hands = require("./components/hands");
var _explanation = require("./components/explanation");
var _router = require("./router");
var _countDown = require("./components/count-down");
var _computerPlay = require("./components/computerPlay");
var _result = require("./components/result");
(function() {
    (0, _hands.initHandsComp)();
    (0, _button.initButtonComp)();
    (0, _title.initTitleComp)();
    (0, _explanation.initExplanationComp)();
    (0, _countDown.initCountComp)();
    (0, _computerPlay.initComputerPlayComp)();
    (0, _result.initResultComp)();
    (0, _router.initRouter)(document.querySelector(".root"));
})();

},{"./components/title":"50hT9","./components/button":"jqdBz","./components/hands":"9vHWi","./router":"4QFWt","./components/explanation":"k1cfF","./components/count-down":"4Ungs","./components/computerPlay":"bGyJ4","./components/result":"92YXQ"}],"50hT9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTitleComp", ()=>initTitleComp);
function initTitleComp() {
    class TitleComp extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.render();
        }
        render() {
            const style = document.createElement("style");
            style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap');
      .start-menu__title{
            text-align:center;
            color:#009048;
            font-weight:bold;
            font-size:90px;
       font-family: 'Kanit', sans-serif;
            line-height: 1em;
            margin-top:115px;

        }
        .o{
          color:  #91CCAF;
        }
        `;
            this.shadow.appendChild(style);
            const shadow = document.createElement("shadow");
            const div = document.createElement("div");
            div.innerHTML = `
        <h1 class="start-menu__title">Piedra Papel <span class="o">\xf3</span> Tijera</h1>
        `;
            this.shadow.appendChild(div);
        }
    }
    customElements.define("title-comp", TitleComp);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jqdBz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initButtonComp", ()=>initButtonComp);
function initButtonComp() {
    class ButtonComp extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.text = this.textContent;
            this.render();
        }
        render() {
            const style = document.createElement("style");
            style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
      .button{
          align-items:center;
          text-align:center;
          color:#D8FCFC;
          display:flex;
          margin: 0px auto;
          margin-top:110px;
          justify-content:center;
          width: 322px;
          height: 87px;
          border-radius: 10px;
          background-color: #006CFC;
          font-size:25px;
          font-weight: 400;
          font-family: "Odibee Sans";
           border: none;
    cursor: pointer;
    transition: background-color 0.3s;
       animation: buttonExpand 2s infinite;

        }
        @keyframes buttonExpand {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.9); /* El tama\xf1o m\xe1ximo al que se expandir\xe1 */
    }
    100% {
        transform: scale(1);
    }
}

     @media (min-width:450px) {
 .button{
          margin-top:40px;

 }
}
        
        `;
            this.shadow.appendChild(style);
            const shadow = document.createElement("shadow");
            const div = document.createElement("div");
            div.innerHTML = `
<button class="button">${this.text}</button>

 `;
            this.shadow.appendChild(div);
        }
    }
    customElements.define("button-comp", ButtonComp);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9vHWi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHandsComp", ()=>initHandsComp);
function initHandsComp() {
    class HandsComp extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.render();
        }
        render() {
            const style = document.createElement("style");
            style.innerHTML = `
      .container-hands{
          display:flex;
          gap:40px;
          justify-content:center;
          margin-top: 0 auto;
          position: fixed;
          bottom: 0; 
          left: 0;  
          right: 0;  
           bottom: 0;
           z-index:0;
           margin-top:20px;

        }
       
        `;
            this.shadow.appendChild(style);
            const shadow = document.createElement("shadow");
            const div = document.createElement("div");
            div.className = "container-hands";
            div.innerHTML = `
      <svg class="tijeras" xmlns="http://www.w3.org/2000/svg" width="56" height="101" viewBox="0 0 56 101" fill="none">
<path d="M43.4554 125.408V80.3017C48.876 78.2411 52.7313 72.9828 52.7313 66.8178V42.297H2.58239V66.8178C2.58239 72.9828 6.43769 78.2411 11.8583 80.3017V125.408H43.4554Z" fill="#FFCAB9"/>
<path d="M31.5486 45.0562C28.6261 45.5973 25.8199 43.6572 25.2807 40.7228L19.4496 8.97543C18.9107 6.04099 20.8428 3.22334 23.7653 2.68192C26.6878 2.14085 29.4939 4.0809 30.0331 7.01534L35.8643 38.7627C36.4035 41.6975 34.471 44.5151 31.5486 45.0562Z" fill="#FABBA7"/>
<path d="M37.7909 44.5953C34.9317 43.7806 33.2721 40.7929 34.0832 37.9224L42.8606 6.86608C43.672 3.99556 46.6474 2.32882 49.5062 3.14319C52.365 3.95791 54.025 6.94555 53.2139 9.81606L44.4366 40.8724C43.6255 43.7433 40.65 45.41 37.7909 44.5953Z" fill="#FABBA7"/>
<path d="M7.96348 47.9365C4.99146 47.9365 2.58239 45.5176 2.58239 42.5334V37.3811C2.58239 34.397 4.99146 31.978 7.96348 31.978C10.9355 31.978 13.3446 34.397 13.3446 37.3811V42.5334C13.3446 45.5176 10.9355 47.9365 7.96348 47.9365Z" fill="#FABBA7"/>
<path d="M18.7256 47.9365C15.7536 47.9365 13.3446 45.5176 13.3446 42.5334V31.5074C13.3446 28.5232 15.7536 26.1043 18.7256 26.1043C21.6977 26.1043 24.1067 28.5232 24.1067 31.5074V42.5334C24.1067 45.5176 21.6977 47.9365 18.7256 47.9365Z" fill="#FABBA7"/>
<path d="M52.7318 66.818V42.5334C52.7318 39.5492 50.3228 37.1302 47.3508 37.1302H29.4877C26.5157 37.1302 24.1066 39.5492 24.1066 42.5334C24.1066 45.5176 26.5157 47.9365 29.4877 47.9365H41.9697V56.0242C36.9847 56.9512 32.0526 61.6733 32.0526 68.3048" fill="#FFCAB9"/>
<path d="M50.2108 0.650582C46.0599 -0.532444 41.5429 2.03504 40.3781 6.1587L35.6034 23.0531L32.5715 6.54568C31.7753 2.21056 27.6127 -0.666848 23.2976 0.133698C18.9802 0.933208 16.1159 5.11042 16.9118 9.44554L19.5026 23.552C15.5605 23.1668 11.6832 26.0469 10.9152 29.9592C5.86272 27.8146 -0.114301 31.8418 0.00166134 37.3817V66.8182C0.00166134 73.2301 3.66357 79.1138 9.27758 81.985V125.409C9.27758 126.84 10.4327 128 11.8583 128C13.284 128 14.4391 126.84 14.4391 125.409V80.3017C14.4391 79.2244 13.7753 78.2597 12.7719 77.8783C8.22086 76.1483 5.16318 71.7033 5.16318 66.8178V50.016C7.86919 51.1047 11.3074 50.3898 13.3445 48.4194C16.2498 51.2097 21.2017 51.209 24.1063 48.4194C25.5243 49.7275 27.4145 50.528 29.4873 50.528H39.3885V54.0598C34.2659 55.9391 29.4715 61.1114 29.4715 68.3049C29.4715 69.736 30.6266 70.8962 32.0523 70.8962C33.4779 70.8962 34.633 69.736 34.633 68.3049C34.633 62.9263 38.6549 59.276 42.4396 58.5722C43.6629 58.3449 44.5504 57.2734 44.5504 56.0241V47.9364C44.5504 46.5053 43.3952 45.3451 41.9696 45.3451H29.4877C25.7834 45.2068 25.7741 39.8635 29.4877 39.7215C35.442 39.7215 41.3963 39.7222 47.3506 39.7215C48.8946 39.7215 50.1509 40.9826 50.1509 42.5333V66.8178C50.1509 71.7033 47.0929 76.1479 42.5422 77.8783C41.5388 78.2597 40.875 79.2244 40.875 80.3017V94.0243C40.875 95.4554 42.0302 96.6156 43.4558 96.6156C44.8814 96.6156 46.0365 95.4554 46.0365 94.0243V81.9846C51.6505 79.1135 55.3125 73.2298 55.3125 66.8178V42.5333C55.3125 38.646 52.5345 35.3999 48.8678 34.6864L55.6968 10.5235C56.895 6.2824 54.4343 1.8533 50.2108 0.650582ZM7.96347 45.3451C6.41949 45.3451 5.16318 44.0839 5.16318 42.5333V42.297V37.381C5.30426 33.6551 10.6241 33.6582 10.7638 37.381V42.5333C10.7641 44.0839 9.50745 45.3451 7.96347 45.3451ZM21.5259 42.5333C21.3865 46.2555 16.0667 46.26 15.9256 42.5333V37.381V31.5074C16.0646 27.7855 21.3848 27.7807 21.5259 31.5074V42.5333ZM26.6874 35.0509V31.5077C26.6874 29.9167 26.2201 28.4341 25.419 27.1871L21.988 8.50575C21.7079 6.98101 22.7151 5.51191 24.2336 5.23067C25.7521 4.94977 27.2152 5.96107 27.4953 7.48581L32.4642 34.5392H29.4877C28.5025 34.5389 27.559 34.7206 26.6874 35.0509ZM50.7314 9.10867L43.5442 34.5389H37.722L45.3435 7.57322C45.9636 5.96833 47.1163 5.32257 48.8021 5.63629C50.2872 6.0592 51.153 7.6171 50.7314 9.10867Z" fill="black"/>
</svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="57" height="101" viewBox="0 0 57 101" fill="none">
<path d="M44.2222 124.952V56.8755C49.7385 54.8116 53.6618 49.5449 53.6618 43.3701V18.8099H2.62798V43.3701C2.62798 49.5449 6.55134 54.8116 12.0677 56.8755V124.952H44.2222Z" fill="#FFCAB9"/>
<path d="M8.10367 24.4585C5.07919 24.4585 2.6276 22.0357 2.6276 19.0467V13.8862C2.6276 10.8972 5.07919 8.47443 8.10367 8.47443C11.1282 8.47443 13.5797 10.8972 13.5797 13.8862V19.0467C13.5797 22.0357 11.1282 24.4585 8.10367 24.4585Z" fill="#FABBA7"/>
<path d="M19.0558 24.4585C16.0313 24.4585 13.5798 22.0357 13.5798 19.0468V8.00314C13.5798 5.01417 16.0313 2.59137 19.0558 2.59137C22.0803 2.59137 24.5319 5.01417 24.5319 8.00314V19.0468C24.5319 22.0357 22.0803 24.4585 19.0558 24.4585Z" fill="#FABBA7"/>
<path d="M30.0079 24.4585C26.9834 24.4585 24.5318 22.0357 24.5318 19.0468V8.00314C24.5318 5.01417 26.9834 2.59137 30.0079 2.59137C33.0323 2.59137 35.4839 5.01417 35.4839 8.00314V19.0468C35.4839 22.0357 33.032 24.4585 30.0079 24.4585Z" fill="#FABBA7"/>
<path d="M40.96 24.4585C37.9355 24.4585 35.4839 22.0357 35.4839 19.0468V8.00314C35.4839 5.01417 37.9355 2.59137 40.96 2.59137C43.9845 2.59137 46.4361 5.01417 46.4361 8.00314V19.0468C46.4361 22.0357 43.9842 24.4585 40.96 24.4585Z" fill="#FABBA7"/>
<path d="M53.6624 43.3702V19.0467C53.6624 16.0577 51.2108 13.6349 48.1863 13.6349H30.0079C26.9834 13.6349 24.5318 16.0577 24.5318 19.0467C24.5318 22.0356 26.9834 24.4584 30.0079 24.4584H42.7102V32.5591C37.6372 33.4876 32.6181 38.2173 32.6181 44.8593" fill="#FFCAB9"/>
<path d="M49.062 11.0868V8.00302C49.0851 1.05925 40.5688 -2.57822 35.4839 2.10783C32.527 -0.686982 27.488 -0.68629 24.5322 2.10783C19.9428 -2.12903 12.2736 0.394123 11.1075 6.45196C5.96588 4.30395 -0.116318 8.338 0.00169076 13.8864V43.37C0.00169076 49.7922 3.72826 55.6854 9.44137 58.5611L10.3711 123.892C10.3711 125.326 11.5466 126.488 12.9974 126.488C14.4482 126.488 15.6237 125.326 15.6237 123.892L14.694 56.8755C14.694 55.7964 14.0185 54.8302 12.9974 54.4482C8.36599 52.7154 5.25432 48.2633 5.25432 43.37V26.5413C8.0081 27.6314 11.5067 26.9161 13.5798 24.9421C16.5366 27.7369 21.576 27.7366 24.5318 24.9421C25.9749 26.2523 27.8981 27.0541 30.0079 27.0541H40.0835V30.5916C34.8708 32.4738 29.9918 37.6544 29.9918 44.8594C29.9918 46.2928 31.1673 47.4549 32.6181 47.4549C34.0689 47.4549 35.2444 46.2928 35.2444 44.8594C35.2444 39.4723 39.3373 35.8161 43.1885 35.1112C44.4334 34.8831 45.3365 33.8103 45.3365 32.559V24.4583C45.3365 23.0249 44.1609 21.8628 42.7101 21.8628H30.0079C28.4366 21.8628 27.1581 20.5994 27.1581 19.0466C27.1581 17.4938 28.4363 16.2303 30.0079 16.2303H48.1862C49.7574 16.2303 51.0359 17.4935 51.0359 19.0466V43.37C51.0359 48.2633 47.9239 52.7151 43.2928 54.4482C42.2717 54.8302 41.5962 55.7964 41.5962 56.8755L42.526 123.892C42.526 125.326 43.7015 126.488 45.1523 126.488C46.6031 126.488 47.7786 125.326 47.7786 123.892L46.8489 58.5611C52.562 55.6854 56.2886 49.7922 56.2886 43.37V19.0466C56.2886 14.9239 53.1191 11.5201 49.062 11.0868ZM40.9596 5.18675C42.5309 5.18675 43.8093 6.44988 43.8093 8.00302V11.0394H38.1102V8.00302C38.1102 6.45023 39.3884 5.18675 40.9596 5.18675ZM8.1037 21.8628C6.53246 21.8628 5.25397 20.5997 5.25397 19.0466V18.8099V13.8861C5.39755 10.1541 10.8109 10.1573 10.9531 13.8861V19.0466C10.9534 20.5997 9.67529 21.8628 8.1037 21.8628ZM19.0561 21.8628C17.4849 21.8628 16.2061 20.5997 16.2061 19.0466V13.8861V8.00302C16.3496 4.27141 21.7634 4.27384 21.9055 8.00302V19.0466C21.9055 20.5997 20.6274 21.8628 19.0561 21.8628ZM27.1581 11.5522V8.00335C27.3017 4.27141 32.7151 4.27452 32.8573 8.00335V11.0397H30.0075C29.0053 11.0394 28.0451 11.2214 27.1581 11.5522Z" fill="black"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="68" height="101" viewBox="0 0 68 101" fill="none">
<path d="M61.5027 36.7156C58.7963 35.5022 55.6269 36.7308 54.4236 39.4596L47.1904 56.3471H45.4748V45.5486V42.6082V15.5563C45.4748 12.5699 43.0739 10.1486 40.112 10.1486C37.1501 10.1486 34.7492 12.5696 34.7492 15.5563V7.96722C34.7492 4.98083 32.3484 2.55948 29.3864 2.55948C26.4249 2.55948 24.0237 4.98048 24.0237 7.96722V15.5563C24.0237 12.5699 21.6228 10.1486 18.6609 10.1486C15.699 10.1486 13.2982 12.5696 13.2982 15.5563V28.3512C13.2982 25.3648 10.8973 22.9435 7.93538 22.9435C4.97382 22.9435 2.57262 25.3645 2.57262 28.3512V42.6082V42.8447V67.1502C2.57262 73.3204 6.41483 78.5833 11.8174 80.6457V126.395H43.3067V80.6453C47.3221 79.1124 50.474 75.8106 51.8286 71.6834L51.8653 71.6889L56.9901 60.2568L64.2232 43.8538C65.4272 41.125 64.2088 37.9291 61.5027 36.7156Z" fill="#FFCAB9"/>
<path d="M21.0323 15.5563C21.0323 14.1032 21.6036 12.7871 22.5282 11.8154C22.0992 11.3644 21.5934 10.9909 21.0323 10.7112V15.5563Z" fill="#FABBA7"/>
<path d="M12.7282 78.2198C8.19226 76.4883 5.14497 72.0395 5.14497 67.1501V60.3097C5.14497 56.9564 0.000991821 56.9564 0.000991821 60.3097V67.1501C0.000991821 73.5676 3.65047 79.4564 9.24574 82.3297V127.418C9.24574 128.85 10.397 130.012 11.8177 130.012C13.2385 130.012 14.3897 128.85 14.3897 127.418V80.6453C14.3897 79.5674 13.7282 78.6016 12.7282 78.2198Z" fill="black"/>
<path d="M66.7299 38.7859C65.9696 36.791 64.4841 35.2141 62.5479 34.3458C58.597 32.5749 53.7956 34.501 52.0624 38.4311L48.047 47.8063V15.5563C48.1561 10.0787 42.344 6.05315 37.3215 8.0661C36.7107 -2.69337 21.8827 -2.68403 21.4523 8.0661C16.4287 6.05453 10.6184 10.0784 10.7271 15.5566V20.8613C5.70693 18.8501 -0.109542 22.8729 0.00156761 28.3515V47.3419C0.00156761 50.6952 5.14555 50.6952 5.14555 47.3419V28.3512C5.28889 24.6196 10.5872 24.6265 10.7271 28.3512V46.3885C10.7271 49.7418 15.8711 49.7418 15.8711 46.3885C15.8711 36.1111 15.8711 25.8337 15.8711 15.5563C16.0086 11.8344 21.3107 11.8233 21.4523 15.5563V40.7775C21.4523 44.1307 26.5963 44.1307 26.5963 40.7775V7.9672C26.5963 6.41556 27.848 5.15301 29.3871 5.15301C30.9261 5.15301 32.1778 6.41521 32.1778 7.9672V40.7775C32.1778 44.1307 37.3218 44.1307 37.3218 40.7775V15.5563C37.3218 14.0047 38.5738 12.7421 40.1129 12.7421C41.652 12.7421 42.9037 14.0043 42.9037 15.5563V53.8165C35.3119 54.5008 29.3716 60.937 29.3716 68.6385C29.3716 71.9918 34.5156 71.9918 34.5156 68.6385C34.5156 61.3672 41.0443 58.6841 47.1914 58.941C48.2174 58.941 49.1458 58.3258 49.5528 57.3759L56.775 40.5136C57.6117 39.0121 58.8398 38.5359 60.4584 39.0858C61.9477 39.9295 62.42 41.1679 61.8747 42.8004C57.8182 52 49.4407 70.8285 49.4407 70.8285C48.2548 74.2261 45.6218 76.9894 42.3975 78.2201C41.3976 78.6019 40.736 79.5674 40.736 80.6456V126.395C40.736 127.827 41.8873 128.988 43.308 128.988C44.7288 128.988 45.88 127.827 45.88 126.395V82.3256C49.703 80.3441 52.7627 76.8425 54.2541 72.6596C58.3946 63.4237 62.4906 54.1692 66.5746 44.9078C67.435 42.955 67.4905 40.7809 66.7299 38.7859Z" fill="black"/>
</svg>
        `;
            this.shadow.appendChild(div);
        }
    }
    customElements.define("hands-comp", HandsComp);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _initHome = require("./pages/init-home");
var _initExplanation = require("./pages/init-explanation");
var _initGame = require("./pages/init-game");
var _initFight = require("./pages/init-fight");
var _initResults = require("./pages/init-results");
const routes = [
    {
        path: /\/homepage/,
        component: (0, _initHome.initGamePage)
    },
    {
        path: /\/explanation/,
        component: (0, _initExplanation.initExplanation)
    },
    {
        path: /\/game/,
        component: (0, _initGame.initGame)
    },
    {
        path: /\/fight/,
        component: (0, _initFight.initFight)
    },
    {
        path: /\/results/,
        component: (0, _initResults.initResultsPage)
    }
];
function initRouter(container) {
    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        for (const r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
            if (container?.firstChild) container.firstChild.remove();
            container?.appendChild(el);
        }
    }
    if (location.pathname === "/" || location.pathname === "/piedra-papel-tijeras/") goTo("/homepage");
    else handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
    return {
        handleRoute,
        goTo
    };
}

},{"./pages/init-game":"1ezc8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pages/init-explanation":"89ZJV","./pages/init-home":"3jaVw","./pages/init-fight":"jfMW0","./pages/init-results":"8SzDs"}],"1ezc8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGame", ()=>initGame);
var _state = require("../state");
function initGame(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    style.innerHTML = `
  .container-hands{
       display:flex;
          gap:40px;
          justify-content:center;
          margin-top: 0px auto;
          position: fixed;
          bottom: 0px; 
          left: 0;  
          right: 0;  
           bottom: 0;
           z-index:0;

  }
  .hand{
width:150px;
height:150px;
  }
  .hand:hover{
height:160px;
 }
  `;
    div.innerHTML = `
  <count-comp></count-comp>
  <div class="container-hands">       <svg class="hand tijeras" xmlns="http://www.w3.org/2000/svg" width="56" height="101" viewBox="0 0 56 101" fill="none">
  <path d="M43.4554 125.408V80.3017C48.876 78.2411 52.7313 72.9828 52.7313 66.8178V42.297H2.58239V66.8178C2.58239 72.9828 6.43769 78.2411 11.8583 80.3017V125.408H43.4554Z" fill="#FFCAB9"/>
  <path d="M31.5486 45.0562C28.6261 45.5973 25.8199 43.6572 25.2807 40.7228L19.4496 8.97543C18.9107 6.04099 20.8428 3.22334 23.7653 2.68192C26.6878 2.14085 29.4939 4.0809 30.0331 7.01534L35.8643 38.7627C36.4035 41.6975 34.471 44.5151 31.5486 45.0562Z" fill="#FABBA7"/>
  <path d="M37.7909 44.5953C34.9317 43.7806 33.2721 40.7929 34.0832 37.9224L42.8606 6.86608C43.672 3.99556 46.6474 2.32882 49.5062 3.14319C52.365 3.95791 54.025 6.94555 53.2139 9.81606L44.4366 40.8724C43.6255 43.7433 40.65 45.41 37.7909 44.5953Z" fill="#FABBA7"/>
  <path d="M7.96348 47.9365C4.99146 47.9365 2.58239 45.5176 2.58239 42.5334V37.3811C2.58239 34.397 4.99146 31.978 7.96348 31.978C10.9355 31.978 13.3446 34.397 13.3446 37.3811V42.5334C13.3446 45.5176 10.9355 47.9365 7.96348 47.9365Z" fill="#FABBA7"/>
  <path d="M18.7256 47.9365C15.7536 47.9365 13.3446 45.5176 13.3446 42.5334V31.5074C13.3446 28.5232 15.7536 26.1043 18.7256 26.1043C21.6977 26.1043 24.1067 28.5232 24.1067 31.5074V42.5334C24.1067 45.5176 21.6977 47.9365 18.7256 47.9365Z" fill="#FABBA7"/>
  <path d="M52.7318 66.818V42.5334C52.7318 39.5492 50.3228 37.1302 47.3508 37.1302H29.4877C26.5157 37.1302 24.1066 39.5492 24.1066 42.5334C24.1066 45.5176 26.5157 47.9365 29.4877 47.9365H41.9697V56.0242C36.9847 56.9512 32.0526 61.6733 32.0526 68.3048" fill="#FFCAB9"/>
  <path d="M50.2108 0.650582C46.0599 -0.532444 41.5429 2.03504 40.3781 6.1587L35.6034 23.0531L32.5715 6.54568C31.7753 2.21056 27.6127 -0.666848 23.2976 0.133698C18.9802 0.933208 16.1159 5.11042 16.9118 9.44554L19.5026 23.552C15.5605 23.1668 11.6832 26.0469 10.9152 29.9592C5.86272 27.8146 -0.114301 31.8418 0.00166134 37.3817V66.8182C0.00166134 73.2301 3.66357 79.1138 9.27758 81.985V125.409C9.27758 126.84 10.4327 128 11.8583 128C13.284 128 14.4391 126.84 14.4391 125.409V80.3017C14.4391 79.2244 13.7753 78.2597 12.7719 77.8783C8.22086 76.1483 5.16318 71.7033 5.16318 66.8178V50.016C7.86919 51.1047 11.3074 50.3898 13.3445 48.4194C16.2498 51.2097 21.2017 51.209 24.1063 48.4194C25.5243 49.7275 27.4145 50.528 29.4873 50.528H39.3885V54.0598C34.2659 55.9391 29.4715 61.1114 29.4715 68.3049C29.4715 69.736 30.6266 70.8962 32.0523 70.8962C33.4779 70.8962 34.633 69.736 34.633 68.3049C34.633 62.9263 38.6549 59.276 42.4396 58.5722C43.6629 58.3449 44.5504 57.2734 44.5504 56.0241V47.9364C44.5504 46.5053 43.3952 45.3451 41.9696 45.3451H29.4877C25.7834 45.2068 25.7741 39.8635 29.4877 39.7215C35.442 39.7215 41.3963 39.7222 47.3506 39.7215C48.8946 39.7215 50.1509 40.9826 50.1509 42.5333V66.8178C50.1509 71.7033 47.0929 76.1479 42.5422 77.8783C41.5388 78.2597 40.875 79.2244 40.875 80.3017V94.0243C40.875 95.4554 42.0302 96.6156 43.4558 96.6156C44.8814 96.6156 46.0365 95.4554 46.0365 94.0243V81.9846C51.6505 79.1135 55.3125 73.2298 55.3125 66.8178V42.5333C55.3125 38.646 52.5345 35.3999 48.8678 34.6864L55.6968 10.5235C56.895 6.2824 54.4343 1.8533 50.2108 0.650582ZM7.96347 45.3451C6.41949 45.3451 5.16318 44.0839 5.16318 42.5333V42.297V37.381C5.30426 33.6551 10.6241 33.6582 10.7638 37.381V42.5333C10.7641 44.0839 9.50745 45.3451 7.96347 45.3451ZM21.5259 42.5333C21.3865 46.2555 16.0667 46.26 15.9256 42.5333V37.381V31.5074C16.0646 27.7855 21.3848 27.7807 21.5259 31.5074V42.5333ZM26.6874 35.0509V31.5077C26.6874 29.9167 26.2201 28.4341 25.419 27.1871L21.988 8.50575C21.7079 6.98101 22.7151 5.51191 24.2336 5.23067C25.7521 4.94977 27.2152 5.96107 27.4953 7.48581L32.4642 34.5392H29.4877C28.5025 34.5389 27.559 34.7206 26.6874 35.0509ZM50.7314 9.10867L43.5442 34.5389H37.722L45.3435 7.57322C45.9636 5.96833 47.1163 5.32257 48.8021 5.63629C50.2872 6.0592 51.153 7.6171 50.7314 9.10867Z" fill="black"/>
  </svg>
  <svg class="hand piedra" xmlns="http://www.w3.org/2000/svg" width="57" height="101" viewBox="0 0 57 101" fill="none">
  <path d="M44.2222 124.952V56.8755C49.7385 54.8116 53.6618 49.5449 53.6618 43.3701V18.8099H2.62798V43.3701C2.62798 49.5449 6.55134 54.8116 12.0677 56.8755V124.952H44.2222Z" fill="#FFCAB9"/>
  <path d="M8.10367 24.4585C5.07919 24.4585 2.6276 22.0357 2.6276 19.0467V13.8862C2.6276 10.8972 5.07919 8.47443 8.10367 8.47443C11.1282 8.47443 13.5797 10.8972 13.5797 13.8862V19.0467C13.5797 22.0357 11.1282 24.4585 8.10367 24.4585Z" fill="#FABBA7"/>
  <path d="M19.0558 24.4585C16.0313 24.4585 13.5798 22.0357 13.5798 19.0468V8.00314C13.5798 5.01417 16.0313 2.59137 19.0558 2.59137C22.0803 2.59137 24.5319 5.01417 24.5319 8.00314V19.0468C24.5319 22.0357 22.0803 24.4585 19.0558 24.4585Z" fill="#FABBA7"/>
  <path d="M30.0079 24.4585C26.9834 24.4585 24.5318 22.0357 24.5318 19.0468V8.00314C24.5318 5.01417 26.9834 2.59137 30.0079 2.59137C33.0323 2.59137 35.4839 5.01417 35.4839 8.00314V19.0468C35.4839 22.0357 33.032 24.4585 30.0079 24.4585Z" fill="#FABBA7"/>
  <path d="M40.96 24.4585C37.9355 24.4585 35.4839 22.0357 35.4839 19.0468V8.00314C35.4839 5.01417 37.9355 2.59137 40.96 2.59137C43.9845 2.59137 46.4361 5.01417 46.4361 8.00314V19.0468C46.4361 22.0357 43.9842 24.4585 40.96 24.4585Z" fill="#FABBA7"/>
  <path d="M53.6624 43.3702V19.0467C53.6624 16.0577 51.2108 13.6349 48.1863 13.6349H30.0079C26.9834 13.6349 24.5318 16.0577 24.5318 19.0467C24.5318 22.0356 26.9834 24.4584 30.0079 24.4584H42.7102V32.5591C37.6372 33.4876 32.6181 38.2173 32.6181 44.8593" fill="#FFCAB9"/>
  <path d="M49.062 11.0868V8.00302C49.0851 1.05925 40.5688 -2.57822 35.4839 2.10783C32.527 -0.686982 27.488 -0.68629 24.5322 2.10783C19.9428 -2.12903 12.2736 0.394123 11.1075 6.45196C5.96588 4.30395 -0.116318 8.338 0.00169076 13.8864V43.37C0.00169076 49.7922 3.72826 55.6854 9.44137 58.5611L10.3711 123.892C10.3711 125.326 11.5466 126.488 12.9974 126.488C14.4482 126.488 15.6237 125.326 15.6237 123.892L14.694 56.8755C14.694 55.7964 14.0185 54.8302 12.9974 54.4482C8.36599 52.7154 5.25432 48.2633 5.25432 43.37V26.5413C8.0081 27.6314 11.5067 26.9161 13.5798 24.9421C16.5366 27.7369 21.576 27.7366 24.5318 24.9421C25.9749 26.2523 27.8981 27.0541 30.0079 27.0541H40.0835V30.5916C34.8708 32.4738 29.9918 37.6544 29.9918 44.8594C29.9918 46.2928 31.1673 47.4549 32.6181 47.4549C34.0689 47.4549 35.2444 46.2928 35.2444 44.8594C35.2444 39.4723 39.3373 35.8161 43.1885 35.1112C44.4334 34.8831 45.3365 33.8103 45.3365 32.559V24.4583C45.3365 23.0249 44.1609 21.8628 42.7101 21.8628H30.0079C28.4366 21.8628 27.1581 20.5994 27.1581 19.0466C27.1581 17.4938 28.4363 16.2303 30.0079 16.2303H48.1862C49.7574 16.2303 51.0359 17.4935 51.0359 19.0466V43.37C51.0359 48.2633 47.9239 52.7151 43.2928 54.4482C42.2717 54.8302 41.5962 55.7964 41.5962 56.8755L42.526 123.892C42.526 125.326 43.7015 126.488 45.1523 126.488C46.6031 126.488 47.7786 125.326 47.7786 123.892L46.8489 58.5611C52.562 55.6854 56.2886 49.7922 56.2886 43.37V19.0466C56.2886 14.9239 53.1191 11.5201 49.062 11.0868ZM40.9596 5.18675C42.5309 5.18675 43.8093 6.44988 43.8093 8.00302V11.0394H38.1102V8.00302C38.1102 6.45023 39.3884 5.18675 40.9596 5.18675ZM8.1037 21.8628C6.53246 21.8628 5.25397 20.5997 5.25397 19.0466V18.8099V13.8861C5.39755 10.1541 10.8109 10.1573 10.9531 13.8861V19.0466C10.9534 20.5997 9.67529 21.8628 8.1037 21.8628ZM19.0561 21.8628C17.4849 21.8628 16.2061 20.5997 16.2061 19.0466V13.8861V8.00302C16.3496 4.27141 21.7634 4.27384 21.9055 8.00302V19.0466C21.9055 20.5997 20.6274 21.8628 19.0561 21.8628ZM27.1581 11.5522V8.00335C27.3017 4.27141 32.7151 4.27452 32.8573 8.00335V11.0397H30.0075C29.0053 11.0394 28.0451 11.2214 27.1581 11.5522Z" fill="black"/>
  </svg>
  <svg class="hand papel" xmlns="http://www.w3.org/2000/svg" width="68" height="101" viewBox="0 0 68 101" fill="none">
  <path d="M61.5027 36.7156C58.7963 35.5022 55.6269 36.7308 54.4236 39.4596L47.1904 56.3471H45.4748V45.5486V42.6082V15.5563C45.4748 12.5699 43.0739 10.1486 40.112 10.1486C37.1501 10.1486 34.7492 12.5696 34.7492 15.5563V7.96722C34.7492 4.98083 32.3484 2.55948 29.3864 2.55948C26.4249 2.55948 24.0237 4.98048 24.0237 7.96722V15.5563C24.0237 12.5699 21.6228 10.1486 18.6609 10.1486C15.699 10.1486 13.2982 12.5696 13.2982 15.5563V28.3512C13.2982 25.3648 10.8973 22.9435 7.93538 22.9435C4.97382 22.9435 2.57262 25.3645 2.57262 28.3512V42.6082V42.8447V67.1502C2.57262 73.3204 6.41483 78.5833 11.8174 80.6457V126.395H43.3067V80.6453C47.3221 79.1124 50.474 75.8106 51.8286 71.6834L51.8653 71.6889L56.9901 60.2568L64.2232 43.8538C65.4272 41.125 64.2088 37.9291 61.5027 36.7156Z" fill="#FFCAB9"/>
  <path d="M21.0323 15.5563C21.0323 14.1032 21.6036 12.7871 22.5282 11.8154C22.0992 11.3644 21.5934 10.9909 21.0323 10.7112V15.5563Z" fill="#FABBA7"/>
  <path d="M12.7282 78.2198C8.19226 76.4883 5.14497 72.0395 5.14497 67.1501V60.3097C5.14497 56.9564 0.000991821 56.9564 0.000991821 60.3097V67.1501C0.000991821 73.5676 3.65047 79.4564 9.24574 82.3297V127.418C9.24574 128.85 10.397 130.012 11.8177 130.012C13.2385 130.012 14.3897 128.85 14.3897 127.418V80.6453C14.3897 79.5674 13.7282 78.6016 12.7282 78.2198Z" fill="black"/>
  <path d="M66.7299 38.7859C65.9696 36.791 64.4841 35.2141 62.5479 34.3458C58.597 32.5749 53.7956 34.501 52.0624 38.4311L48.047 47.8063V15.5563C48.1561 10.0787 42.344 6.05315 37.3215 8.0661C36.7107 -2.69337 21.8827 -2.68403 21.4523 8.0661C16.4287 6.05453 10.6184 10.0784 10.7271 15.5566V20.8613C5.70693 18.8501 -0.109542 22.8729 0.00156761 28.3515V47.3419C0.00156761 50.6952 5.14555 50.6952 5.14555 47.3419V28.3512C5.28889 24.6196 10.5872 24.6265 10.7271 28.3512V46.3885C10.7271 49.7418 15.8711 49.7418 15.8711 46.3885C15.8711 36.1111 15.8711 25.8337 15.8711 15.5563C16.0086 11.8344 21.3107 11.8233 21.4523 15.5563V40.7775C21.4523 44.1307 26.5963 44.1307 26.5963 40.7775V7.9672C26.5963 6.41556 27.848 5.15301 29.3871 5.15301C30.9261 5.15301 32.1778 6.41521 32.1778 7.9672V40.7775C32.1778 44.1307 37.3218 44.1307 37.3218 40.7775V15.5563C37.3218 14.0047 38.5738 12.7421 40.1129 12.7421C41.652 12.7421 42.9037 14.0043 42.9037 15.5563V53.8165C35.3119 54.5008 29.3716 60.937 29.3716 68.6385C29.3716 71.9918 34.5156 71.9918 34.5156 68.6385C34.5156 61.3672 41.0443 58.6841 47.1914 58.941C48.2174 58.941 49.1458 58.3258 49.5528 57.3759L56.775 40.5136C57.6117 39.0121 58.8398 38.5359 60.4584 39.0858C61.9477 39.9295 62.42 41.1679 61.8747 42.8004C57.8182 52 49.4407 70.8285 49.4407 70.8285C48.2548 74.2261 45.6218 76.9894 42.3975 78.2201C41.3976 78.6019 40.736 79.5674 40.736 80.6456V126.395C40.736 127.827 41.8873 128.988 43.308 128.988C44.7288 128.988 45.88 127.827 45.88 126.395V82.3256C49.703 80.3441 52.7627 76.8425 54.2541 72.6596C58.3946 63.4237 62.4906 54.1692 66.5746 44.9078C67.435 42.955 67.4905 40.7809 66.7299 38.7859Z" fill="black"/>
  </svg></div>
  
  `;
    div.appendChild(style);
    const tijera = div.querySelector(".tijeras");
    const piedra = div.querySelector(".piedra");
    const papel = div.querySelector(".papel");
    tijera?.addEventListener("click", ()=>{
        clearTimeout(timeOutReturn);
        tijera.style.height = "180px";
        papel.style.opacity = "0.5";
        piedra.style.opacity = "0.5";
        papel.style.pointerEvents = "none";
        piedra.style.pointerEvents = "none";
        (0, _state.state).setMove("tijeras");
        setTimeout(()=>{
            params.goTo("/fight");
        }, 1000);
    });
    piedra?.addEventListener("click", ()=>{
        clearTimeout(timeOutReturn);
        piedra.style.height = "180px";
        tijera.style.opacity = "0.5";
        papel.style.opacity = "0.5";
        papel.style.pointerEvents = "none";
        tijera.style.pointerEvents = "none";
        (0, _state.state).setMove("piedra");
        setTimeout(()=>{
            params.goTo("/fight");
        }, 1000);
    });
    papel?.addEventListener("click", ()=>{
        clearTimeout(timeOutReturn);
        papel.style.height = "180px";
        tijera.style.opacity = "0.5";
        piedra.style.opacity = "0.5";
        tijera.style.pointerEvents = "none";
        piedra.style.pointerEvents = "none";
        (0, _state.state).setMove("papel");
        setTimeout(()=>{
            params.goTo("/fight");
        }, 1000);
    });
    const timeOutReturn = setTimeout(()=>{
        params.goTo("/explanation");
    }, 5000);
    const comp = div.querySelector("hands-comp");
    comp?.querySelector(".tijeras");
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../state":"1Yeju"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: "",
            ganador: ""
        },
        history: [
            {
                myPoint: 0,
                computerPoint: 0
            }
        ]
    },
    listeners: [],
    getState () {
        return this.data;
    },
    pushToHistory (play) {
        const currentState = this.getState();
        currentState.data.history.push(play);
    },
    setState (newState) {
        this.data = newState;
        for (const callback of this.listeners)callback();
    },
    subscribe (callback) {
        this.listeners.push(callback);
    },
    computerMove (move) {
        const currentState = this.getState();
        currentState.currentGame.computerPlay = move;
    },
    setMove (move) {
        const currentState = this.getState();
        currentState.currentGame.myPlay = move;
    },
    getHistory () {
        const currentState = this.getState();
        const history = localStorage.getItem("history");
        if (history) {
            const parsedHistory = JSON.parse(history);
            state.data.history = parsedHistory;
        }
        return currentState.history;
    },
    restartGame () {
        this.setMove("");
        this.computerMove("");
    },
    whoIsWin (myMove, computerMove) {
        const currentState = this.getState();
        let ganador;
        const ganoConTijera = myMove == "tijeras" && computerMove == "papel";
        const ganoConPapel = myMove == "papel" && computerMove == "piedra";
        const ganoConPiedra = myMove == "piedra" && computerMove == "tijeras";
        const ganaPcTijera = computerMove == "tijeras" && myMove == "papel";
        const ganaPcPapel = computerMove == "papel" && myMove == "piedra";
        const ganaPcPiedra = computerMove == "piedra" && myMove == "tijeras";
        if ([
            ganoConPapel,
            ganoConPiedra,
            ganoConTijera
        ].includes(true)) ganador = "Ganaste";
        else if ([
            ganaPcTijera,
            ganaPcPiedra,
            ganaPcPapel
        ].includes(true)) ganador = "Perdiste";
        else ganador = "Empate";
        currentState.currentGame.ganador = ganador;
        return ganador;
    },
    countPoint (ganador) {
        const currentState = this.getState();
        if (ganador == "Ganaste") currentState.history[currentState.history.length - 1].myPoint++;
        else if (ganador == "Perdiste") currentState.history[currentState.history.length - 1].computerPoint++;
        localStorage.setItem("history", JSON.stringify(currentState.history));
        return currentState.history;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"89ZJV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initExplanation", ()=>initExplanation);
function initExplanation(params) {
    const div = document.createElement("div");
    div.innerHTML = `
  <explanation-comp></explanation-comp>
  <button-comp>\xa1Jugar!</button-comp>
  <hands-comp></hands-comp>

  `;
    const button = div.querySelector("button-comp");
    button?.addEventListener("click", ()=>{
        params.goTo("/game");
    });
    console.log(button);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3jaVw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGamePage", ()=>initGamePage);
function initGamePage(params) {
    console.log(params);
    const div = document.createElement("div");
    div.innerHTML = `
    <title-comp></title-comp>
   <button-comp>Empezar</button-comp>
  
    <hands-comp></hands-comp>
`;
    const button = div.querySelector("button-comp");
    button?.addEventListener("click", ()=>{
        params.goTo("/explanation");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jfMW0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initFight", ()=>initFight);
var _state = require("../state");
function initFight(params) {
    const div = document.createElement("div");
    div.className = "container-hand";
    const style = document.createElement("style");
    const currentState = (0, _state.state).getState();
    style.innerHTML = `
  .container-hand{
      display:flex;
          justify-content:center;
          margin: 0px auto;
          position: fixed;
          bottom: 0px; 
          left: 0;  
          right: 0;  
           bottom: 0;
           z-index:0;
  }
  .hand{
    width:220px;
height:250px;
  }
  `;
    if (currentState.currentGame.myPlay === "tijeras") div.innerHTML = `
     <svg class="hand tijeras" xmlns="http://www.w3.org/2000/svg" width="56" height="101" viewBox="0 0 56 101" fill="none">
  <path d="M43.4554 125.408V80.3017C48.876 78.2411 52.7313 72.9828 52.7313 66.8178V42.297H2.58239V66.8178C2.58239 72.9828 6.43769 78.2411 11.8583 80.3017V125.408H43.4554Z" fill="#FFCAB9"/>
  <path d="M31.5486 45.0562C28.6261 45.5973 25.8199 43.6572 25.2807 40.7228L19.4496 8.97543C18.9107 6.04099 20.8428 3.22334 23.7653 2.68192C26.6878 2.14085 29.4939 4.0809 30.0331 7.01534L35.8643 38.7627C36.4035 41.6975 34.471 44.5151 31.5486 45.0562Z" fill="#FABBA7"/>
  <path d="M37.7909 44.5953C34.9317 43.7806 33.2721 40.7929 34.0832 37.9224L42.8606 6.86608C43.672 3.99556 46.6474 2.32882 49.5062 3.14319C52.365 3.95791 54.025 6.94555 53.2139 9.81606L44.4366 40.8724C43.6255 43.7433 40.65 45.41 37.7909 44.5953Z" fill="#FABBA7"/>
  <path d="M7.96348 47.9365C4.99146 47.9365 2.58239 45.5176 2.58239 42.5334V37.3811C2.58239 34.397 4.99146 31.978 7.96348 31.978C10.9355 31.978 13.3446 34.397 13.3446 37.3811V42.5334C13.3446 45.5176 10.9355 47.9365 7.96348 47.9365Z" fill="#FABBA7"/>
  <path d="M18.7256 47.9365C15.7536 47.9365 13.3446 45.5176 13.3446 42.5334V31.5074C13.3446 28.5232 15.7536 26.1043 18.7256 26.1043C21.6977 26.1043 24.1067 28.5232 24.1067 31.5074V42.5334C24.1067 45.5176 21.6977 47.9365 18.7256 47.9365Z" fill="#FABBA7"/>
  <path d="M52.7318 66.818V42.5334C52.7318 39.5492 50.3228 37.1302 47.3508 37.1302H29.4877C26.5157 37.1302 24.1066 39.5492 24.1066 42.5334C24.1066 45.5176 26.5157 47.9365 29.4877 47.9365H41.9697V56.0242C36.9847 56.9512 32.0526 61.6733 32.0526 68.3048" fill="#FFCAB9"/>
  <path d="M50.2108 0.650582C46.0599 -0.532444 41.5429 2.03504 40.3781 6.1587L35.6034 23.0531L32.5715 6.54568C31.7753 2.21056 27.6127 -0.666848 23.2976 0.133698C18.9802 0.933208 16.1159 5.11042 16.9118 9.44554L19.5026 23.552C15.5605 23.1668 11.6832 26.0469 10.9152 29.9592C5.86272 27.8146 -0.114301 31.8418 0.00166134 37.3817V66.8182C0.00166134 73.2301 3.66357 79.1138 9.27758 81.985V125.409C9.27758 126.84 10.4327 128 11.8583 128C13.284 128 14.4391 126.84 14.4391 125.409V80.3017C14.4391 79.2244 13.7753 78.2597 12.7719 77.8783C8.22086 76.1483 5.16318 71.7033 5.16318 66.8178V50.016C7.86919 51.1047 11.3074 50.3898 13.3445 48.4194C16.2498 51.2097 21.2017 51.209 24.1063 48.4194C25.5243 49.7275 27.4145 50.528 29.4873 50.528H39.3885V54.0598C34.2659 55.9391 29.4715 61.1114 29.4715 68.3049C29.4715 69.736 30.6266 70.8962 32.0523 70.8962C33.4779 70.8962 34.633 69.736 34.633 68.3049C34.633 62.9263 38.6549 59.276 42.4396 58.5722C43.6629 58.3449 44.5504 57.2734 44.5504 56.0241V47.9364C44.5504 46.5053 43.3952 45.3451 41.9696 45.3451H29.4877C25.7834 45.2068 25.7741 39.8635 29.4877 39.7215C35.442 39.7215 41.3963 39.7222 47.3506 39.7215C48.8946 39.7215 50.1509 40.9826 50.1509 42.5333V66.8178C50.1509 71.7033 47.0929 76.1479 42.5422 77.8783C41.5388 78.2597 40.875 79.2244 40.875 80.3017V94.0243C40.875 95.4554 42.0302 96.6156 43.4558 96.6156C44.8814 96.6156 46.0365 95.4554 46.0365 94.0243V81.9846C51.6505 79.1135 55.3125 73.2298 55.3125 66.8178V42.5333C55.3125 38.646 52.5345 35.3999 48.8678 34.6864L55.6968 10.5235C56.895 6.2824 54.4343 1.8533 50.2108 0.650582ZM7.96347 45.3451C6.41949 45.3451 5.16318 44.0839 5.16318 42.5333V42.297V37.381C5.30426 33.6551 10.6241 33.6582 10.7638 37.381V42.5333C10.7641 44.0839 9.50745 45.3451 7.96347 45.3451ZM21.5259 42.5333C21.3865 46.2555 16.0667 46.26 15.9256 42.5333V37.381V31.5074C16.0646 27.7855 21.3848 27.7807 21.5259 31.5074V42.5333ZM26.6874 35.0509V31.5077C26.6874 29.9167 26.2201 28.4341 25.419 27.1871L21.988 8.50575C21.7079 6.98101 22.7151 5.51191 24.2336 5.23067C25.7521 4.94977 27.2152 5.96107 27.4953 7.48581L32.4642 34.5392H29.4877C28.5025 34.5389 27.559 34.7206 26.6874 35.0509ZM50.7314 9.10867L43.5442 34.5389H37.722L45.3435 7.57322C45.9636 5.96833 47.1163 5.32257 48.8021 5.63629C50.2872 6.0592 51.153 7.6171 50.7314 9.10867Z" fill="black"/>
  </svg>
  <computer-comp></computer-comp>

    `;
    else if (currentState.currentGame.myPlay === "piedra") div.innerHTML = `
    <svg class="hand piedra" xmlns="http://www.w3.org/2000/svg" width="57" height="101" viewBox="0 0 57 101" fill="none">
  <path d="M44.2222 124.952V56.8755C49.7385 54.8116 53.6618 49.5449 53.6618 43.3701V18.8099H2.62798V43.3701C2.62798 49.5449 6.55134 54.8116 12.0677 56.8755V124.952H44.2222Z" fill="#FFCAB9"/>
  <path d="M8.10367 24.4585C5.07919 24.4585 2.6276 22.0357 2.6276 19.0467V13.8862C2.6276 10.8972 5.07919 8.47443 8.10367 8.47443C11.1282 8.47443 13.5797 10.8972 13.5797 13.8862V19.0467C13.5797 22.0357 11.1282 24.4585 8.10367 24.4585Z" fill="#FABBA7"/>
  <path d="M19.0558 24.4585C16.0313 24.4585 13.5798 22.0357 13.5798 19.0468V8.00314C13.5798 5.01417 16.0313 2.59137 19.0558 2.59137C22.0803 2.59137 24.5319 5.01417 24.5319 8.00314V19.0468C24.5319 22.0357 22.0803 24.4585 19.0558 24.4585Z" fill="#FABBA7"/>
  <path d="M30.0079 24.4585C26.9834 24.4585 24.5318 22.0357 24.5318 19.0468V8.00314C24.5318 5.01417 26.9834 2.59137 30.0079 2.59137C33.0323 2.59137 35.4839 5.01417 35.4839 8.00314V19.0468C35.4839 22.0357 33.032 24.4585 30.0079 24.4585Z" fill="#FABBA7"/>
  <path d="M40.96 24.4585C37.9355 24.4585 35.4839 22.0357 35.4839 19.0468V8.00314C35.4839 5.01417 37.9355 2.59137 40.96 2.59137C43.9845 2.59137 46.4361 5.01417 46.4361 8.00314V19.0468C46.4361 22.0357 43.9842 24.4585 40.96 24.4585Z" fill="#FABBA7"/>
  <path d="M53.6624 43.3702V19.0467C53.6624 16.0577 51.2108 13.6349 48.1863 13.6349H30.0079C26.9834 13.6349 24.5318 16.0577 24.5318 19.0467C24.5318 22.0356 26.9834 24.4584 30.0079 24.4584H42.7102V32.5591C37.6372 33.4876 32.6181 38.2173 32.6181 44.8593" fill="#FFCAB9"/>
  <path d="M49.062 11.0868V8.00302C49.0851 1.05925 40.5688 -2.57822 35.4839 2.10783C32.527 -0.686982 27.488 -0.68629 24.5322 2.10783C19.9428 -2.12903 12.2736 0.394123 11.1075 6.45196C5.96588 4.30395 -0.116318 8.338 0.00169076 13.8864V43.37C0.00169076 49.7922 3.72826 55.6854 9.44137 58.5611L10.3711 123.892C10.3711 125.326 11.5466 126.488 12.9974 126.488C14.4482 126.488 15.6237 125.326 15.6237 123.892L14.694 56.8755C14.694 55.7964 14.0185 54.8302 12.9974 54.4482C8.36599 52.7154 5.25432 48.2633 5.25432 43.37V26.5413C8.0081 27.6314 11.5067 26.9161 13.5798 24.9421C16.5366 27.7369 21.576 27.7366 24.5318 24.9421C25.9749 26.2523 27.8981 27.0541 30.0079 27.0541H40.0835V30.5916C34.8708 32.4738 29.9918 37.6544 29.9918 44.8594C29.9918 46.2928 31.1673 47.4549 32.6181 47.4549C34.0689 47.4549 35.2444 46.2928 35.2444 44.8594C35.2444 39.4723 39.3373 35.8161 43.1885 35.1112C44.4334 34.8831 45.3365 33.8103 45.3365 32.559V24.4583C45.3365 23.0249 44.1609 21.8628 42.7101 21.8628H30.0079C28.4366 21.8628 27.1581 20.5994 27.1581 19.0466C27.1581 17.4938 28.4363 16.2303 30.0079 16.2303H48.1862C49.7574 16.2303 51.0359 17.4935 51.0359 19.0466V43.37C51.0359 48.2633 47.9239 52.7151 43.2928 54.4482C42.2717 54.8302 41.5962 55.7964 41.5962 56.8755L42.526 123.892C42.526 125.326 43.7015 126.488 45.1523 126.488C46.6031 126.488 47.7786 125.326 47.7786 123.892L46.8489 58.5611C52.562 55.6854 56.2886 49.7922 56.2886 43.37V19.0466C56.2886 14.9239 53.1191 11.5201 49.062 11.0868ZM40.9596 5.18675C42.5309 5.18675 43.8093 6.44988 43.8093 8.00302V11.0394H38.1102V8.00302C38.1102 6.45023 39.3884 5.18675 40.9596 5.18675ZM8.1037 21.8628C6.53246 21.8628 5.25397 20.5997 5.25397 19.0466V18.8099V13.8861C5.39755 10.1541 10.8109 10.1573 10.9531 13.8861V19.0466C10.9534 20.5997 9.67529 21.8628 8.1037 21.8628ZM19.0561 21.8628C17.4849 21.8628 16.2061 20.5997 16.2061 19.0466V13.8861V8.00302C16.3496 4.27141 21.7634 4.27384 21.9055 8.00302V19.0466C21.9055 20.5997 20.6274 21.8628 19.0561 21.8628ZM27.1581 11.5522V8.00335C27.3017 4.27141 32.7151 4.27452 32.8573 8.00335V11.0397H30.0075C29.0053 11.0394 28.0451 11.2214 27.1581 11.5522Z" fill="black"/>
  </svg>
  <computer-comp></computer-comp>
    `;
    else div.innerHTML = `
  <svg class="hand papel" xmlns="http://www.w3.org/2000/svg" width="68" height="101" viewBox="0 0 68 101" fill="none">
  <path d="M61.5027 36.7156C58.7963 35.5022 55.6269 36.7308 54.4236 39.4596L47.1904 56.3471H45.4748V45.5486V42.6082V15.5563C45.4748 12.5699 43.0739 10.1486 40.112 10.1486C37.1501 10.1486 34.7492 12.5696 34.7492 15.5563V7.96722C34.7492 4.98083 32.3484 2.55948 29.3864 2.55948C26.4249 2.55948 24.0237 4.98048 24.0237 7.96722V15.5563C24.0237 12.5699 21.6228 10.1486 18.6609 10.1486C15.699 10.1486 13.2982 12.5696 13.2982 15.5563V28.3512C13.2982 25.3648 10.8973 22.9435 7.93538 22.9435C4.97382 22.9435 2.57262 25.3645 2.57262 28.3512V42.6082V42.8447V67.1502C2.57262 73.3204 6.41483 78.5833 11.8174 80.6457V126.395H43.3067V80.6453C47.3221 79.1124 50.474 75.8106 51.8286 71.6834L51.8653 71.6889L56.9901 60.2568L64.2232 43.8538C65.4272 41.125 64.2088 37.9291 61.5027 36.7156Z" fill="#FFCAB9"/>
  <path d="M21.0323 15.5563C21.0323 14.1032 21.6036 12.7871 22.5282 11.8154C22.0992 11.3644 21.5934 10.9909 21.0323 10.7112V15.5563Z" fill="#FABBA7"/>
  <path d="M12.7282 78.2198C8.19226 76.4883 5.14497 72.0395 5.14497 67.1501V60.3097C5.14497 56.9564 0.000991821 56.9564 0.000991821 60.3097V67.1501C0.000991821 73.5676 3.65047 79.4564 9.24574 82.3297V127.418C9.24574 128.85 10.397 130.012 11.8177 130.012C13.2385 130.012 14.3897 128.85 14.3897 127.418V80.6453C14.3897 79.5674 13.7282 78.6016 12.7282 78.2198Z" fill="black"/>
  <path d="M66.7299 38.7859C65.9696 36.791 64.4841 35.2141 62.5479 34.3458C58.597 32.5749 53.7956 34.501 52.0624 38.4311L48.047 47.8063V15.5563C48.1561 10.0787 42.344 6.05315 37.3215 8.0661C36.7107 -2.69337 21.8827 -2.68403 21.4523 8.0661C16.4287 6.05453 10.6184 10.0784 10.7271 15.5566V20.8613C5.70693 18.8501 -0.109542 22.8729 0.00156761 28.3515V47.3419C0.00156761 50.6952 5.14555 50.6952 5.14555 47.3419V28.3512C5.28889 24.6196 10.5872 24.6265 10.7271 28.3512V46.3885C10.7271 49.7418 15.8711 49.7418 15.8711 46.3885C15.8711 36.1111 15.8711 25.8337 15.8711 15.5563C16.0086 11.8344 21.3107 11.8233 21.4523 15.5563V40.7775C21.4523 44.1307 26.5963 44.1307 26.5963 40.7775V7.9672C26.5963 6.41556 27.848 5.15301 29.3871 5.15301C30.9261 5.15301 32.1778 6.41521 32.1778 7.9672V40.7775C32.1778 44.1307 37.3218 44.1307 37.3218 40.7775V15.5563C37.3218 14.0047 38.5738 12.7421 40.1129 12.7421C41.652 12.7421 42.9037 14.0043 42.9037 15.5563V53.8165C35.3119 54.5008 29.3716 60.937 29.3716 68.6385C29.3716 71.9918 34.5156 71.9918 34.5156 68.6385C34.5156 61.3672 41.0443 58.6841 47.1914 58.941C48.2174 58.941 49.1458 58.3258 49.5528 57.3759L56.775 40.5136C57.6117 39.0121 58.8398 38.5359 60.4584 39.0858C61.9477 39.9295 62.42 41.1679 61.8747 42.8004C57.8182 52 49.4407 70.8285 49.4407 70.8285C48.2548 74.2261 45.6218 76.9894 42.3975 78.2201C41.3976 78.6019 40.736 79.5674 40.736 80.6456V126.395C40.736 127.827 41.8873 128.988 43.308 128.988C44.7288 128.988 45.88 127.827 45.88 126.395V82.3256C49.703 80.3441 52.7627 76.8425 54.2541 72.6596C58.3946 63.4237 62.4906 54.1692 66.5746 44.9078C67.435 42.955 67.4905 40.7809 66.7299 38.7859Z" fill="black"/>
  </svg>
  <computer-comp></computer-comp>

    `;
    div.appendChild(style);
    const ganador = (0, _state.state).whoIsWin(currentState.currentGame.myPlay, currentState.currentGame.computerPlay);
    const puntos = (0, _state.state).countPoint(ganador);
    const history = (0, _state.state).getHistory();
    setTimeout(()=>{
        params.goTo("/results");
    }, 2000);
    return div;
}

},{"../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8SzDs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResultsPage", ()=>initResultsPage);
function initResultsPage(params) {
    const div = document.createElement("div");
    div.innerHTML = `
  <br>
<result-comp></result-comp>
<button-comp>Volver a jugar</button-comp>
`;
    const button = div.querySelector("button-comp");
    button?.addEventListener("click", ()=>{
        params.goTo("/explanation");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k1cfF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initExplanationComp", ()=>initExplanationComp);
function initExplanationComp() {
    class ExplanationComp extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.render();
        }
        render() {
            const style = document.createElement("style");
            style.innerHTML = `
     @import url('https://fonts.googleapis.com/css2?family=Trade+Winds&display=swap');
     @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
     .explanation__text{
     height:250px;
     color: #000;
    width: 320px;
    display:flex;
    margin: 0 auto;
    justify-content:center;
    align-items:center;
    text-align: center;
    font-family: "Odibee Sans";
    font-size: 47px;
    font-weight: 600;
    line-height: 100%;
    margin-top:80px;

        }

        `;
            this.shadow.appendChild(style);
            const shadow = document.createElement("shadow");
            const div = document.createElement("div");
            div.innerHTML = `
        <h1 class="explanation__text">Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 5 segundos.</h1>
        `;
            this.shadow.appendChild(div);
        }
    }
    customElements.define("explanation-comp", ExplanationComp);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Ungs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initCountComp", ()=>initCountComp);
function initCountComp() {
    class CountComp extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.render();
        }
        render() {
            const style = document.createElement("style");
            style.innerHTML = `
         
         .timer{
            margin-top:-120px;
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
         }
      
       
        

        `;
            this.shadow.appendChild(style);
            const shadow = document.createElement("shadow");
            const div = document.createElement("div");
            div.className = "timer";
            div.innerHTML = ` 
      <svg class="timer__svg" width="244" height="243" viewBox="0 0 244 243" fill="none" xmlns="http://www.w3.org/2000/svg">

 <circle cx="121.5" cy="121.5" r="110"  stroke="black" stroke-width="23" fill="none">
  <animate attributeName="stroke-dasharray" from="1000 696" to="696 696" dur="5s" fill="freeze" begin="0s" />
  <animate attributeName="stroke-dashoffset" from="0" to="696" dur="3s" fill="freeze" begin="0s" />
</circle>

<text class="timer__number" x="50%" y="50%" text-anchor="middle" dy=".3em" fill="black" font-size="124">5</text>
</svg>
</svg>


   
 `;
            const timerSvg = div.querySelector(".timer__svg");
            let count = 5;
            const countdownInterval = setInterval(()=>{
                count--;
                if (count < 0) clearInterval(countdownInterval);
                else {
                    const text = div.querySelector(".timer__number");
                    let result = text.textContent = count.toString();
                }
            }, 1000);
            this.shadow.appendChild(div);
        }
    }
    customElements.define("count-comp", CountComp);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bGyJ4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initComputerPlayComp", ()=>initComputerPlayComp);
var _state = require("../state");
function initComputerPlayComp() {
    class ComputerPlayComp extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.render();
        }
        computerPlay() {
            const posibility = [
                "piedra",
                "papel",
                "tijeras"
            ];
            const random = posibility[Math.floor(Math.random() * posibility.length)];
            (0, _state.state).computerMove(random);
            return random;
        }
        render() {
            const random = this.computerPlay();
            const currentState = (0, _state.state).getState();
            const div = document.createElement("div");
            const shadow = document.createElement("shadow");
            const style = document.createElement("style");
            style.innerHTML = `
    .container-hand {
 position: fixed;
  top: 0; 
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;  
  margin: 0px auto;
  justify-content: center; 
  align-items:center;
  z-index: 0;
}
.hand {
  transform: rotate(180deg); 
      width:220px;
height:250px;
}
        `;
            this.shadow.appendChild(style);
            div.className = "container-hand";
            if (random === "tijeras") div.innerHTML = `
     <svg class="hand tijeras" xmlns="http://www.w3.org/2000/svg" width="56" height="101" viewBox="0 0 56 101" fill="none">
  <path d="M43.4554 125.408V80.3017C48.876 78.2411 52.7313 72.9828 52.7313 66.8178V42.297H2.58239V66.8178C2.58239 72.9828 6.43769 78.2411 11.8583 80.3017V125.408H43.4554Z" fill="#FFCAB9"/>
  <path d="M31.5486 45.0562C28.6261 45.5973 25.8199 43.6572 25.2807 40.7228L19.4496 8.97543C18.9107 6.04099 20.8428 3.22334 23.7653 2.68192C26.6878 2.14085 29.4939 4.0809 30.0331 7.01534L35.8643 38.7627C36.4035 41.6975 34.471 44.5151 31.5486 45.0562Z" fill="#FABBA7"/>
  <path d="M37.7909 44.5953C34.9317 43.7806 33.2721 40.7929 34.0832 37.9224L42.8606 6.86608C43.672 3.99556 46.6474 2.32882 49.5062 3.14319C52.365 3.95791 54.025 6.94555 53.2139 9.81606L44.4366 40.8724C43.6255 43.7433 40.65 45.41 37.7909 44.5953Z" fill="#FABBA7"/>
  <path d="M7.96348 47.9365C4.99146 47.9365 2.58239 45.5176 2.58239 42.5334V37.3811C2.58239 34.397 4.99146 31.978 7.96348 31.978C10.9355 31.978 13.3446 34.397 13.3446 37.3811V42.5334C13.3446 45.5176 10.9355 47.9365 7.96348 47.9365Z" fill="#FABBA7"/>
  <path d="M18.7256 47.9365C15.7536 47.9365 13.3446 45.5176 13.3446 42.5334V31.5074C13.3446 28.5232 15.7536 26.1043 18.7256 26.1043C21.6977 26.1043 24.1067 28.5232 24.1067 31.5074V42.5334C24.1067 45.5176 21.6977 47.9365 18.7256 47.9365Z" fill="#FABBA7"/>
  <path d="M52.7318 66.818V42.5334C52.7318 39.5492 50.3228 37.1302 47.3508 37.1302H29.4877C26.5157 37.1302 24.1066 39.5492 24.1066 42.5334C24.1066 45.5176 26.5157 47.9365 29.4877 47.9365H41.9697V56.0242C36.9847 56.9512 32.0526 61.6733 32.0526 68.3048" fill="#FFCAB9"/>
  <path d="M50.2108 0.650582C46.0599 -0.532444 41.5429 2.03504 40.3781 6.1587L35.6034 23.0531L32.5715 6.54568C31.7753 2.21056 27.6127 -0.666848 23.2976 0.133698C18.9802 0.933208 16.1159 5.11042 16.9118 9.44554L19.5026 23.552C15.5605 23.1668 11.6832 26.0469 10.9152 29.9592C5.86272 27.8146 -0.114301 31.8418 0.00166134 37.3817V66.8182C0.00166134 73.2301 3.66357 79.1138 9.27758 81.985V125.409C9.27758 126.84 10.4327 128 11.8583 128C13.284 128 14.4391 126.84 14.4391 125.409V80.3017C14.4391 79.2244 13.7753 78.2597 12.7719 77.8783C8.22086 76.1483 5.16318 71.7033 5.16318 66.8178V50.016C7.86919 51.1047 11.3074 50.3898 13.3445 48.4194C16.2498 51.2097 21.2017 51.209 24.1063 48.4194C25.5243 49.7275 27.4145 50.528 29.4873 50.528H39.3885V54.0598C34.2659 55.9391 29.4715 61.1114 29.4715 68.3049C29.4715 69.736 30.6266 70.8962 32.0523 70.8962C33.4779 70.8962 34.633 69.736 34.633 68.3049C34.633 62.9263 38.6549 59.276 42.4396 58.5722C43.6629 58.3449 44.5504 57.2734 44.5504 56.0241V47.9364C44.5504 46.5053 43.3952 45.3451 41.9696 45.3451H29.4877C25.7834 45.2068 25.7741 39.8635 29.4877 39.7215C35.442 39.7215 41.3963 39.7222 47.3506 39.7215C48.8946 39.7215 50.1509 40.9826 50.1509 42.5333V66.8178C50.1509 71.7033 47.0929 76.1479 42.5422 77.8783C41.5388 78.2597 40.875 79.2244 40.875 80.3017V94.0243C40.875 95.4554 42.0302 96.6156 43.4558 96.6156C44.8814 96.6156 46.0365 95.4554 46.0365 94.0243V81.9846C51.6505 79.1135 55.3125 73.2298 55.3125 66.8178V42.5333C55.3125 38.646 52.5345 35.3999 48.8678 34.6864L55.6968 10.5235C56.895 6.2824 54.4343 1.8533 50.2108 0.650582ZM7.96347 45.3451C6.41949 45.3451 5.16318 44.0839 5.16318 42.5333V42.297V37.381C5.30426 33.6551 10.6241 33.6582 10.7638 37.381V42.5333C10.7641 44.0839 9.50745 45.3451 7.96347 45.3451ZM21.5259 42.5333C21.3865 46.2555 16.0667 46.26 15.9256 42.5333V37.381V31.5074C16.0646 27.7855 21.3848 27.7807 21.5259 31.5074V42.5333ZM26.6874 35.0509V31.5077C26.6874 29.9167 26.2201 28.4341 25.419 27.1871L21.988 8.50575C21.7079 6.98101 22.7151 5.51191 24.2336 5.23067C25.7521 4.94977 27.2152 5.96107 27.4953 7.48581L32.4642 34.5392H29.4877C28.5025 34.5389 27.559 34.7206 26.6874 35.0509ZM50.7314 9.10867L43.5442 34.5389H37.722L45.3435 7.57322C45.9636 5.96833 47.1163 5.32257 48.8021 5.63629C50.2872 6.0592 51.153 7.6171 50.7314 9.10867Z" fill="black"/>
  </svg>
    `;
            else if (random === "piedra") div.innerHTML = `
    <svg class="hand piedra" xmlns="http://www.w3.org/2000/svg" width="57" height="101" viewBox="0 0 57 101" fill="none">
  <path d="M44.2222 124.952V56.8755C49.7385 54.8116 53.6618 49.5449 53.6618 43.3701V18.8099H2.62798V43.3701C2.62798 49.5449 6.55134 54.8116 12.0677 56.8755V124.952H44.2222Z" fill="#FFCAB9"/>
  <path d="M8.10367 24.4585C5.07919 24.4585 2.6276 22.0357 2.6276 19.0467V13.8862C2.6276 10.8972 5.07919 8.47443 8.10367 8.47443C11.1282 8.47443 13.5797 10.8972 13.5797 13.8862V19.0467C13.5797 22.0357 11.1282 24.4585 8.10367 24.4585Z" fill="#FABBA7"/>
  <path d="M19.0558 24.4585C16.0313 24.4585 13.5798 22.0357 13.5798 19.0468V8.00314C13.5798 5.01417 16.0313 2.59137 19.0558 2.59137C22.0803 2.59137 24.5319 5.01417 24.5319 8.00314V19.0468C24.5319 22.0357 22.0803 24.4585 19.0558 24.4585Z" fill="#FABBA7"/>
  <path d="M30.0079 24.4585C26.9834 24.4585 24.5318 22.0357 24.5318 19.0468V8.00314C24.5318 5.01417 26.9834 2.59137 30.0079 2.59137C33.0323 2.59137 35.4839 5.01417 35.4839 8.00314V19.0468C35.4839 22.0357 33.032 24.4585 30.0079 24.4585Z" fill="#FABBA7"/>
  <path d="M40.96 24.4585C37.9355 24.4585 35.4839 22.0357 35.4839 19.0468V8.00314C35.4839 5.01417 37.9355 2.59137 40.96 2.59137C43.9845 2.59137 46.4361 5.01417 46.4361 8.00314V19.0468C46.4361 22.0357 43.9842 24.4585 40.96 24.4585Z" fill="#FABBA7"/>
  <path d="M53.6624 43.3702V19.0467C53.6624 16.0577 51.2108 13.6349 48.1863 13.6349H30.0079C26.9834 13.6349 24.5318 16.0577 24.5318 19.0467C24.5318 22.0356 26.9834 24.4584 30.0079 24.4584H42.7102V32.5591C37.6372 33.4876 32.6181 38.2173 32.6181 44.8593" fill="#FFCAB9"/>
  <path d="M49.062 11.0868V8.00302C49.0851 1.05925 40.5688 -2.57822 35.4839 2.10783C32.527 -0.686982 27.488 -0.68629 24.5322 2.10783C19.9428 -2.12903 12.2736 0.394123 11.1075 6.45196C5.96588 4.30395 -0.116318 8.338 0.00169076 13.8864V43.37C0.00169076 49.7922 3.72826 55.6854 9.44137 58.5611L10.3711 123.892C10.3711 125.326 11.5466 126.488 12.9974 126.488C14.4482 126.488 15.6237 125.326 15.6237 123.892L14.694 56.8755C14.694 55.7964 14.0185 54.8302 12.9974 54.4482C8.36599 52.7154 5.25432 48.2633 5.25432 43.37V26.5413C8.0081 27.6314 11.5067 26.9161 13.5798 24.9421C16.5366 27.7369 21.576 27.7366 24.5318 24.9421C25.9749 26.2523 27.8981 27.0541 30.0079 27.0541H40.0835V30.5916C34.8708 32.4738 29.9918 37.6544 29.9918 44.8594C29.9918 46.2928 31.1673 47.4549 32.6181 47.4549C34.0689 47.4549 35.2444 46.2928 35.2444 44.8594C35.2444 39.4723 39.3373 35.8161 43.1885 35.1112C44.4334 34.8831 45.3365 33.8103 45.3365 32.559V24.4583C45.3365 23.0249 44.1609 21.8628 42.7101 21.8628H30.0079C28.4366 21.8628 27.1581 20.5994 27.1581 19.0466C27.1581 17.4938 28.4363 16.2303 30.0079 16.2303H48.1862C49.7574 16.2303 51.0359 17.4935 51.0359 19.0466V43.37C51.0359 48.2633 47.9239 52.7151 43.2928 54.4482C42.2717 54.8302 41.5962 55.7964 41.5962 56.8755L42.526 123.892C42.526 125.326 43.7015 126.488 45.1523 126.488C46.6031 126.488 47.7786 125.326 47.7786 123.892L46.8489 58.5611C52.562 55.6854 56.2886 49.7922 56.2886 43.37V19.0466C56.2886 14.9239 53.1191 11.5201 49.062 11.0868ZM40.9596 5.18675C42.5309 5.18675 43.8093 6.44988 43.8093 8.00302V11.0394H38.1102V8.00302C38.1102 6.45023 39.3884 5.18675 40.9596 5.18675ZM8.1037 21.8628C6.53246 21.8628 5.25397 20.5997 5.25397 19.0466V18.8099V13.8861C5.39755 10.1541 10.8109 10.1573 10.9531 13.8861V19.0466C10.9534 20.5997 9.67529 21.8628 8.1037 21.8628ZM19.0561 21.8628C17.4849 21.8628 16.2061 20.5997 16.2061 19.0466V13.8861V8.00302C16.3496 4.27141 21.7634 4.27384 21.9055 8.00302V19.0466C21.9055 20.5997 20.6274 21.8628 19.0561 21.8628ZM27.1581 11.5522V8.00335C27.3017 4.27141 32.7151 4.27452 32.8573 8.00335V11.0397H30.0075C29.0053 11.0394 28.0451 11.2214 27.1581 11.5522Z" fill="black"/>
  </svg>
    `;
            else div.innerHTML = `
  <svg class="hand papel" xmlns="http://www.w3.org/2000/svg" width="68" height="101" viewBox="0 0 68 101" fill="none">
  <path d="M61.5027 36.7156C58.7963 35.5022 55.6269 36.7308 54.4236 39.4596L47.1904 56.3471H45.4748V45.5486V42.6082V15.5563C45.4748 12.5699 43.0739 10.1486 40.112 10.1486C37.1501 10.1486 34.7492 12.5696 34.7492 15.5563V7.96722C34.7492 4.98083 32.3484 2.55948 29.3864 2.55948C26.4249 2.55948 24.0237 4.98048 24.0237 7.96722V15.5563C24.0237 12.5699 21.6228 10.1486 18.6609 10.1486C15.699 10.1486 13.2982 12.5696 13.2982 15.5563V28.3512C13.2982 25.3648 10.8973 22.9435 7.93538 22.9435C4.97382 22.9435 2.57262 25.3645 2.57262 28.3512V42.6082V42.8447V67.1502C2.57262 73.3204 6.41483 78.5833 11.8174 80.6457V126.395H43.3067V80.6453C47.3221 79.1124 50.474 75.8106 51.8286 71.6834L51.8653 71.6889L56.9901 60.2568L64.2232 43.8538C65.4272 41.125 64.2088 37.9291 61.5027 36.7156Z" fill="#FFCAB9"/>
  <path d="M21.0323 15.5563C21.0323 14.1032 21.6036 12.7871 22.5282 11.8154C22.0992 11.3644 21.5934 10.9909 21.0323 10.7112V15.5563Z" fill="#FABBA7"/>
  <path d="M12.7282 78.2198C8.19226 76.4883 5.14497 72.0395 5.14497 67.1501V60.3097C5.14497 56.9564 0.000991821 56.9564 0.000991821 60.3097V67.1501C0.000991821 73.5676 3.65047 79.4564 9.24574 82.3297V127.418C9.24574 128.85 10.397 130.012 11.8177 130.012C13.2385 130.012 14.3897 128.85 14.3897 127.418V80.6453C14.3897 79.5674 13.7282 78.6016 12.7282 78.2198Z" fill="black"/>
  <path d="M66.7299 38.7859C65.9696 36.791 64.4841 35.2141 62.5479 34.3458C58.597 32.5749 53.7956 34.501 52.0624 38.4311L48.047 47.8063V15.5563C48.1561 10.0787 42.344 6.05315 37.3215 8.0661C36.7107 -2.69337 21.8827 -2.68403 21.4523 8.0661C16.4287 6.05453 10.6184 10.0784 10.7271 15.5566V20.8613C5.70693 18.8501 -0.109542 22.8729 0.00156761 28.3515V47.3419C0.00156761 50.6952 5.14555 50.6952 5.14555 47.3419V28.3512C5.28889 24.6196 10.5872 24.6265 10.7271 28.3512V46.3885C10.7271 49.7418 15.8711 49.7418 15.8711 46.3885C15.8711 36.1111 15.8711 25.8337 15.8711 15.5563C16.0086 11.8344 21.3107 11.8233 21.4523 15.5563V40.7775C21.4523 44.1307 26.5963 44.1307 26.5963 40.7775V7.9672C26.5963 6.41556 27.848 5.15301 29.3871 5.15301C30.9261 5.15301 32.1778 6.41521 32.1778 7.9672V40.7775C32.1778 44.1307 37.3218 44.1307 37.3218 40.7775V15.5563C37.3218 14.0047 38.5738 12.7421 40.1129 12.7421C41.652 12.7421 42.9037 14.0043 42.9037 15.5563V53.8165C35.3119 54.5008 29.3716 60.937 29.3716 68.6385C29.3716 71.9918 34.5156 71.9918 34.5156 68.6385C34.5156 61.3672 41.0443 58.6841 47.1914 58.941C48.2174 58.941 49.1458 58.3258 49.5528 57.3759L56.775 40.5136C57.6117 39.0121 58.8398 38.5359 60.4584 39.0858C61.9477 39.9295 62.42 41.1679 61.8747 42.8004C57.8182 52 49.4407 70.8285 49.4407 70.8285C48.2548 74.2261 45.6218 76.9894 42.3975 78.2201C41.3976 78.6019 40.736 79.5674 40.736 80.6456V126.395C40.736 127.827 41.8873 128.988 43.308 128.988C44.7288 128.988 45.88 127.827 45.88 126.395V82.3256C49.703 80.3441 52.7627 76.8425 54.2541 72.6596C58.3946 63.4237 62.4906 54.1692 66.5746 44.9078C67.435 42.955 67.4905 40.7809 66.7299 38.7859Z" fill="black"/>
  </svg>
    `;
            this.shadow.appendChild(div);
        }
    }
    customElements.define("computer-comp", ComputerPlayComp);
}

},{"../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"92YXQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResultComp", ()=>initResultComp);
var _state = require("../state");
function initResultComp() {
    class ResultComp extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.render();
        }
        render() {
            const currentState = (0, _state.state).getState();
            const style = document.createElement("style");
            style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
      
      .container{
        background-color:red;
        width:300px;
        height:120px;
          border: solid 4px black;
        border-radius:6px;
        display:flex;
        margin:0 auto;
        text-align:center;
        justify-content:center;
        align-items:center;
        font-size:25px;
          font-weight: 400;
          font-family: "Odibee Sans";
      }
      .container-score{
            font-size:20px;
          font-weight: 600;
          font-family: "Odibee Sans";
          background-color:white;
        width:300px;
        height:200px;
           text-align:center;
        justify-content:center;
        align-items:center;
        border: solid 4px black;
        border-radius:6px;
         display:flex;
        margin:0 auto;
        flex-direction:column;
      }
        `;
            this.shadow.appendChild(style);
            const shadow = document.createElement("shadow");
            const div = document.createElement("div");
            const history = (0, _state.state).getHistory();
            div.innerHTML = `
      <div class="container">
      <h2>${currentState.currentGame.ganador}</h2>
      </div><br>
      <div class="container-score">
      <p>Mis puntos:${history[0].myPoint}</p>
      <p>PC puntos:${history[0].computerPoint}</p>
      </div>
        `;
            const cuadradoGanador = div.querySelector(".container");
            if (currentState.currentGame.ganador == "Ganaste") cuadradoGanador.style.backgroundColor = "#6CB46C";
            else if (currentState.currentGame.ganador == "Empate") cuadradoGanador.style.backgroundColor = "#006CFC";
            this.shadow.appendChild(div);
        }
    }
    customElements.define("result-comp", ResultComp);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../state":"1Yeju"}]},["gmPuC","h7u1C"], "h7u1C", "parcelRequire93c5")

//# sourceMappingURL=index.b71e74eb.js.map

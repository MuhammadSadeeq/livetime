var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// builds/module.js
__export(exports, {
  default: () => module_default
});

// src/index.js
var Plugin = function(Alpine) {
  window.Alpine.directive("livetime", (el, { expression }, { evaluateLater, effect }) => {
    let getTimeToSet = evaluateLater(() => setInterval(function() {
      el.textContent = new Date().toLocaleTimeString();
    }, 1e3));
    effect(() => {
      getTimeToSet((setTime) => {
        setTime;
      });
    });
  });
};
var src_default = Plugin;

// builds/module.js
var module_default = src_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});

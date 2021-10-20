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
export {
  module_default as default
};

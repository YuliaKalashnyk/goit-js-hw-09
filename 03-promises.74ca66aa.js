!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("h6c0i"),i=document.querySelector("form.form"),u={position:"center-bottom",distance:"15px",borderRadius:"15px",timeout:1e4,clickToClose:!0,cssAnimationStyle:"from-right"};function a(e,t){var n=Math.random()>.3,o={position:e,delay:t};return new Promise((function(e,t){n&&e(o),t(o)}))}i.addEventListener("submit",(function(e){e.preventDefault();for(var t=Number(e.currentTarget.delay.value),n=Number(e.currentTarget.step.value),o=Number(e.currentTarget.amount.value),i=1;i<=o;i+=1)a(i,t).then((function(e){var t=e.position,n=e.delay;setTimeout((function(){r.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"),u)}),n)})).catch((function(e){var t=e.position,n=e.delay;setTimeout((function(){r.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"),u)}),n)})),t+=n}))}();
//# sourceMappingURL=03-promises.74ca66aa.js.map
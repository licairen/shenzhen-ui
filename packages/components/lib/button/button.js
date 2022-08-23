"use strict";
const vue = require("vue");
require("./button.vue_vue_type_style_index_0_scoped_49a32cfe_lang.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-49a32cfe"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = { class: "test" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("button", null, "test \u6D4B\u8BD5", -1));
const _sfc_main = {
  __name: "button",
  setup(__props) {
    const a = vue.ref("abc");
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
        vue.createElementVNode("h3", _hoisted_1, "\u6D4B\u8BD5\u6309\u94AE---" + vue.toDisplayString(a.value), 1),
        _hoisted_2
      ], 64);
    };
  }
};
const Button = /* @__PURE__ */ _pluginVue_exportHelper(_sfc_main, [["__scopeId", "data-v-49a32cfe"]]);
module.exports = Button;

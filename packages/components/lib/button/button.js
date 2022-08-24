"use strict";
const vue = require("vue");
require("./button.vue_vue_type_style_index_0_scoped_91d90028_lang.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = { class: "test" };
const _sfc_main = {
  __name: "button",
  setup(__props) {
    const a = vue.ref("shenzhen");
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", _hoisted_1, "\u6D4B\u8BD5\u6309\u94AE---" + vue.toDisplayString(a.value), 1);
    };
  }
};
const button = /* @__PURE__ */ _pluginVue_exportHelper(_sfc_main, [["__scopeId", "data-v-91d90028"]]);
module.exports = button;

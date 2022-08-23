import { ref, openBlock, createElementBlock, Fragment, createElementVNode, toDisplayString, pushScopeId, popScopeId } from "vue";
import "./button.vue_vue_type_style_index_0_scoped_49a32cfe_lang.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-49a32cfe"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "test" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("button", null, "test \u6D4B\u8BD5", -1));
const _sfc_main = {
  __name: "button",
  setup(__props) {
    const a = ref("abc");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("h3", _hoisted_1, "\u6D4B\u8BD5\u6309\u94AE---" + toDisplayString(a.value), 1),
        _hoisted_2
      ], 64);
    };
  }
};
const Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-49a32cfe"]]);
export {
  Button as default
};

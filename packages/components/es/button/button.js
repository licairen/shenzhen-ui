import { ref, openBlock, createElementBlock, toDisplayString } from "vue";
import "./button.vue_vue_type_style_index_0_scoped_91d90028_lang.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _hoisted_1 = { class: "test" };
const _sfc_main = {
  __name: "button",
  setup(__props) {
    const a = ref("shenzhen");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", _hoisted_1, "\u6D4B\u8BD5\u6309\u94AE---" + toDisplayString(a.value), 1);
    };
  }
};
const button = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-91d90028"]]);
export {
  button as default
};

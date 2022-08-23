import { ref as n, openBlock as o, createElementBlock as l, Fragment as r, createElementVNode as t, toDisplayString as a } from "vue";
const c = /* @__PURE__ */ t("button", null, "test \u6D4B\u8BD5", -1), p = {
  __name: "button",
  setup(s) {
    const e = n("abc");
    return (u, _) => (o(), l(r, null, [
      t("h3", null, "\u6D4B\u8BD5\u6309\u94AE---" + a(e.value), 1),
      c
    ], 64));
  }
};
export {
  p as default
};

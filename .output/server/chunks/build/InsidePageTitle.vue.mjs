import { BContainer, BRow, BCol } from 'bootstrap-vue-next/components/BContainer';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "InsidePageTitle",
  __ssrInlineRender: true,
  props: {
    pageTitle: { type: String },
    pageDescription: { type: String }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_container = BContainer;
      const _component_b_row = BRow;
      const _component_b_col = BCol;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "page-breadcrumb" }, _attrs))} data-v-0f798519><div class="vertical-center" data-v-0f798519>`);
      _push(ssrRenderComponent(_component_b_container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_b_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="action" data-v-0f798519${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_b_col, { sm: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="title" data-v-0f798519${_scopeId3}>${ssrInterpolate(__props.pageTitle)}</h1><p data-v-0f798519${_scopeId3}>${ssrInterpolate(__props.pageDescription)}</p>`);
                      } else {
                        return [
                          createVNode("h1", { class: "title" }, toDisplayString(__props.pageTitle), 1),
                          createVNode("p", null, toDisplayString(__props.pageDescription), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "action" }, [
                      createVNode(_component_b_col, { sm: "12" }, {
                        default: withCtx(() => [
                          createVNode("h1", { class: "title" }, toDisplayString(__props.pageTitle), 1),
                          createVNode("p", null, toDisplayString(__props.pageDescription), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_b_row, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "action" }, [
                    createVNode(_component_b_col, { sm: "12" }, {
                      default: withCtx(() => [
                        createVNode("h1", { class: "title" }, toDisplayString(__props.pageTitle), 1),
                        createVNode("p", null, toDisplayString(__props.pageDescription), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InsidePageTitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f798519"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=InsidePageTitle.vue.mjs.map

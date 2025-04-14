import { _ as __nuxt_component_0 } from './InsidePageTitle.vue.mjs';
import { BContainer, BRow, BCol } from 'bootstrap-vue-next/components/BContainer';
import { ref, withAsyncContext, resolveComponent, mergeProps, unref, withCtx, createBlock, openBlock, Fragment, renderList, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { a as apiGetWebData } from './index.mjs';
import { u as useHead } from './v3.mjs';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'pinia';
import 'vue-router';
import 'bootstrap-vue-next/directives';
import 'bootstrap-vue-next/plugins/createBootstrap';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const _sfc_main = {
  __name: "web",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Front-End Development | NO-DATA"
    });
    const pageTitle = ref("Front-End Development");
    const webs = ref([[], [], []]);
    try {
      const { data, error } = ([__temp, __restore] = withAsyncContext(() => apiGetWebData()), __temp = await __temp, __restore(), __temp);
      if (error.value) {
        throw error.value;
      }
      const result = [[], [], []];
      data.value.forEach((element, index) => {
        const groupIndex = index % 3;
        const webData = {
          id: element.id,
          title: element.title,
          description: element.description,
          img: element.img,
          url: element.url
        };
        result[groupIndex].push(webData);
      });
      webs.value = result;
    } catch (err) {
      console.error("API 錯誤：", err);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InsidePageTitle = __nuxt_component_0;
      const _component_b_container = BContainer;
      const _component_b_row = BRow;
      const _component_b_col = BCol;
      const _component_fa = resolveComponent("fa");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sideWrap" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_InsidePageTitle, {
        pageTitle: unref(pageTitle),
        pageDescription: _ctx.$t("web-title")
      }, null, _parent));
      _push(`<section id="other-work">`);
      _push(ssrRenderComponent(_component_b_container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_b_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(webs), (items, index) => {
                    _push3(ssrRenderComponent(_component_b_col, {
                      cols: "12",
                      sm: "4",
                      md: "4",
                      key: index
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(items, (item) => {
                            _push4(`<div class="workW"${_scopeId3}><div class="work-img"${_scopeId3}><img${ssrRenderAttr("src", `/img/webWork/${item.img}`)} class="grow"${_scopeId3}></div><div class="work-title"${_scopeId3}>`);
                            if (item.url && item.url !== "") {
                              _push4(`<a${ssrRenderAttr("href", item.url)} target="_blank"${_scopeId3}>${ssrInterpolate(_ctx.$t(item.title))} `);
                              _push4(ssrRenderComponent(_component_fa, {
                                icon: "link",
                                class: "fa-link",
                                style: { "width": "0.6em" }
                              }, null, _parent4, _scopeId3));
                              _push4(`</a>`);
                            } else {
                              _push4(`<span${_scopeId3}>${ssrInterpolate(_ctx.$t(item.title))}</span>`);
                            }
                            _push4(`</div><div${_scopeId3}>${ssrInterpolate(_ctx.$t(item.description))}</div></div>`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                              return openBlock(), createBlock("div", {
                                class: "workW",
                                key: item.id
                              }, [
                                createVNode("div", { class: "work-img" }, [
                                  createVNode("img", {
                                    src: `/img/webWork/${item.img}`,
                                    class: "grow"
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("div", { class: "work-title" }, [
                                  item.url && item.url !== "" ? (openBlock(), createBlock("a", {
                                    key: 0,
                                    href: item.url,
                                    target: "_blank"
                                  }, [
                                    createTextVNode(toDisplayString(_ctx.$t(item.title)) + " ", 1),
                                    createVNode(_component_fa, {
                                      icon: "link",
                                      class: "fa-link",
                                      style: { "width": "0.6em" }
                                    })
                                  ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t(item.title)), 1))
                                ]),
                                createVNode("div", null, toDisplayString(_ctx.$t(item.description)), 1)
                              ]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(webs), (items, index) => {
                      return openBlock(), createBlock(_component_b_col, {
                        cols: "12",
                        sm: "4",
                        md: "4",
                        key: index
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                            return openBlock(), createBlock("div", {
                              class: "workW",
                              key: item.id
                            }, [
                              createVNode("div", { class: "work-img" }, [
                                createVNode("img", {
                                  src: `/img/webWork/${item.img}`,
                                  class: "grow"
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", { class: "work-title" }, [
                                item.url && item.url !== "" ? (openBlock(), createBlock("a", {
                                  key: 0,
                                  href: item.url,
                                  target: "_blank"
                                }, [
                                  createTextVNode(toDisplayString(_ctx.$t(item.title)) + " ", 1),
                                  createVNode(_component_fa, {
                                    icon: "link",
                                    class: "fa-link",
                                    style: { "width": "0.6em" }
                                  })
                                ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t(item.title)), 1))
                              ]),
                              createVNode("div", null, toDisplayString(_ctx.$t(item.description)), 1)
                            ]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_b_row, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(webs), (items, index) => {
                    return openBlock(), createBlock(_component_b_col, {
                      cols: "12",
                      sm: "4",
                      md: "4",
                      key: index
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(items, (item) => {
                          return openBlock(), createBlock("div", {
                            class: "workW",
                            key: item.id
                          }, [
                            createVNode("div", { class: "work-img" }, [
                              createVNode("img", {
                                src: `/img/webWork/${item.img}`,
                                class: "grow"
                              }, null, 8, ["src"])
                            ]),
                            createVNode("div", { class: "work-title" }, [
                              item.url && item.url !== "" ? (openBlock(), createBlock("a", {
                                key: 0,
                                href: item.url,
                                target: "_blank"
                              }, [
                                createTextVNode(toDisplayString(_ctx.$t(item.title)) + " ", 1),
                                createVNode(_component_fa, {
                                  icon: "link",
                                  class: "fa-link",
                                  style: { "width": "0.6em" }
                                })
                              ], 8, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(_ctx.$t(item.title)), 1))
                            ]),
                            createVNode("div", null, toDisplayString(_ctx.$t(item.description)), 1)
                          ]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/web.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=web.vue.mjs.map

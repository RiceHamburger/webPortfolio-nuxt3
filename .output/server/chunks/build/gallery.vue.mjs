import { _ as _sfc_main$1 } from './InsidePageTitle.vue.mjs';
import { BContainer, BRow, BCol } from 'bootstrap-vue-next/components/BContainer';
import { BImg } from 'bootstrap-vue-next/components/BImg';
import { ref, withAsyncContext, nextTick, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { b as apiGetGalleryData } from './index.mjs';
import Isotope from 'isotope-layout';
import { u as useHead } from './v3.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
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
  __name: "gallery",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Gallery | NO-DATA"
    });
    const pageTitle = ref("Gallery");
    let iso = null;
    const filter = (slug) => {
      const buttons = (void 0).querySelectorAll(".portfolio-filter button");
      buttons.forEach((btn) => {
        const filterAttr = btn.getAttribute("data-filter");
        if (filterAttr === slug) {
          btn.classList.remove("btn-default");
          btn.classList.add("btn-primary");
        } else {
          btn.classList.remove("btn-primary");
          btn.classList.add("btn-default");
        }
      });
      if (iso) {
        iso.arrange({ filter: slug });
      }
    };
    const galleries = ref([]);
    const classExtraction = (item) => {
      return item.tags.map((tag) => tag);
    };
    try {
      const { data, error } = ([__temp, __restore] = withAsyncContext(() => apiGetGalleryData()), __temp = await __temp, __restore(), __temp);
      if (error.value) {
        throw error.value;
      }
      galleries.value = (data.value || []).map((item) => ({
        id: item.id,
        title: item.title,
        img: item.img,
        img_s: item.img_s,
        tags: JSON.parse(item.tags)
      }));
      [__temp, __restore] = withAsyncContext(() => nextTick()), await __temp, __restore();
      setTimeout(() => {
        iso = new Isotope(".portfolio-items", {
          itemSelector: ".portfolio-item",
          layoutMode: "fitRows"
        });
      }, 300);
    } catch (err) {
      console.error("API 錯誤：", err);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InsidePageTitle = _sfc_main$1;
      const _component_b_container = BContainer;
      const _component_b_row = BRow;
      const _component_b_col = BCol;
      const _component_b_img = BImg;
      const _component_fa = resolveComponent("fa");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sideWrap" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_InsidePageTitle, {
        pageTitle: unref(pageTitle),
        pageDescription: _ctx.$t("gallery-title")
      }, null, _parent));
      _push(`<section id="portfolio" class="margin-bottom">`);
      _push(ssrRenderComponent(_component_b_container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><ul class="portfolio-filter text-center"${_scopeId}><li${_scopeId}><button class="btn btn-primary" href="#" data-filter="*"${_scopeId}> All </button></li><li${_scopeId}><button class="btn btn-default illustration" href="#" data-filter=".illustration"${_scopeId}> Illustration </button></li><li${_scopeId}><button class="btn btn-default sketch" href="#" data-filter=".sketch"${_scopeId}> Sketch </button></li><li${_scopeId}><button class="btn btn-default Original" href="#" data-filter=".Original"${_scopeId}> Original works </button></li><li${_scopeId}><button class="btn btn-default Derivative" href="#" data-filter=".Derivative"${_scopeId}> Derivative works </button></li></ul>`);
            _push2(ssrRenderComponent(_component_b_row, { class: "portfolio-items" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(galleries), (item) => {
                    _push3(ssrRenderComponent(_component_b_col, {
                      cols: "6",
                      sm: "4",
                      md: "3",
                      class: ["portfolio-item", classExtraction(item)],
                      key: item.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="portfolio-wrapper"${_scopeId3}><div class="portfolio-single"${_scopeId3}><div class="portfolio-thumb"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_b_img, {
                            src: `/img/illastration/${item.img_s}`,
                            fluid: "",
                            alt: item.title
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="portfolio-view"${_scopeId3}><ul class="nav nav-pills"${_scopeId3}><li${_scopeId3}><a${ssrRenderAttr("href", `/img/illastration/${item.img}`)} data-fancybox="gallery"${ssrRenderAttr("data-caption", item.title)}${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_fa, { icon: "eye" }, null, _parent4, _scopeId3));
                          _push4(`</a></li></ul></div></div><div class="portfolio-info"${_scopeId3}><h2${_scopeId3}>${ssrInterpolate(item.title)}</h2></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "portfolio-wrapper" }, [
                              createVNode("div", { class: "portfolio-single" }, [
                                createVNode("div", { class: "portfolio-thumb" }, [
                                  createVNode(_component_b_img, {
                                    src: `/img/illastration/${item.img_s}`,
                                    fluid: "",
                                    alt: item.title
                                  }, null, 8, ["src", "alt"])
                                ]),
                                createVNode("div", { class: "portfolio-view" }, [
                                  createVNode("ul", { class: "nav nav-pills" }, [
                                    createVNode("li", null, [
                                      createVNode("a", {
                                        href: `/img/illastration/${item.img}`,
                                        "data-fancybox": "gallery",
                                        "data-caption": item.title
                                      }, [
                                        createVNode(_component_fa, { icon: "eye" })
                                      ], 8, ["href", "data-caption"])
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "portfolio-info" }, [
                                createVNode("h2", null, toDisplayString(item.title), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(galleries), (item) => {
                      return openBlock(), createBlock(_component_b_col, {
                        cols: "6",
                        sm: "4",
                        md: "3",
                        class: ["portfolio-item", classExtraction(item)],
                        key: item.id
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "portfolio-wrapper" }, [
                            createVNode("div", { class: "portfolio-single" }, [
                              createVNode("div", { class: "portfolio-thumb" }, [
                                createVNode(_component_b_img, {
                                  src: `/img/illastration/${item.img_s}`,
                                  fluid: "",
                                  alt: item.title
                                }, null, 8, ["src", "alt"])
                              ]),
                              createVNode("div", { class: "portfolio-view" }, [
                                createVNode("ul", { class: "nav nav-pills" }, [
                                  createVNode("li", null, [
                                    createVNode("a", {
                                      href: `/img/illastration/${item.img}`,
                                      "data-fancybox": "gallery",
                                      "data-caption": item.title
                                    }, [
                                      createVNode(_component_fa, { icon: "eye" })
                                    ], 8, ["href", "data-caption"])
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "portfolio-info" }, [
                              createVNode("h2", null, toDisplayString(item.title), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["class"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("ul", { class: "portfolio-filter text-center" }, [
                  createVNode("li", null, [
                    createVNode("button", {
                      class: "btn btn-primary",
                      href: "#",
                      "data-filter": "*",
                      onClick: ($event) => filter("*")
                    }, " All ", 8, ["onClick"])
                  ]),
                  createVNode("li", null, [
                    createVNode("button", {
                      class: "btn btn-default illustration",
                      href: "#",
                      "data-filter": ".illustration",
                      onClick: ($event) => filter(".illustration")
                    }, " Illustration ", 8, ["onClick"])
                  ]),
                  createVNode("li", null, [
                    createVNode("button", {
                      class: "btn btn-default sketch",
                      href: "#",
                      "data-filter": ".sketch",
                      onClick: ($event) => filter(".sketch")
                    }, " Sketch ", 8, ["onClick"])
                  ]),
                  createVNode("li", null, [
                    createVNode("button", {
                      class: "btn btn-default Original",
                      href: "#",
                      "data-filter": ".Original",
                      onClick: ($event) => filter(".Original")
                    }, " Original works ", 8, ["onClick"])
                  ]),
                  createVNode("li", null, [
                    createVNode("button", {
                      class: "btn btn-default Derivative",
                      href: "#",
                      "data-filter": ".Derivative",
                      onClick: ($event) => filter(".Derivative")
                    }, " Derivative works ", 8, ["onClick"])
                  ])
                ]),
                createVNode(_component_b_row, { class: "portfolio-items" }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(galleries), (item) => {
                      return openBlock(), createBlock(_component_b_col, {
                        cols: "6",
                        sm: "4",
                        md: "3",
                        class: ["portfolio-item", classExtraction(item)],
                        key: item.id
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "portfolio-wrapper" }, [
                            createVNode("div", { class: "portfolio-single" }, [
                              createVNode("div", { class: "portfolio-thumb" }, [
                                createVNode(_component_b_img, {
                                  src: `/img/illastration/${item.img_s}`,
                                  fluid: "",
                                  alt: item.title
                                }, null, 8, ["src", "alt"])
                              ]),
                              createVNode("div", { class: "portfolio-view" }, [
                                createVNode("ul", { class: "nav nav-pills" }, [
                                  createVNode("li", null, [
                                    createVNode("a", {
                                      href: `/img/illastration/${item.img}`,
                                      "data-fancybox": "gallery",
                                      "data-caption": item.title
                                    }, [
                                      createVNode(_component_fa, { icon: "eye" })
                                    ], 8, ["href", "data-caption"])
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "portfolio-info" }, [
                              createVNode("h2", null, toDisplayString(item.title), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["class"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=gallery.vue.mjs.map

import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { BContainer, BRow, BCol } from 'bootstrap-vue-next/components/BContainer';
import { BNavbar, BNavbarBrand, BNavbarToggle, BNavbarNav } from 'bootstrap-vue-next/components/BNavbar';
import { BCollapse } from 'bootstrap-vue-next/components/BCollapse';
import { mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext, resolveComponent } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useLocalePath, e as useSwitchLocalePath, _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import 'pinia';
import 'vue-router';
import 'bootstrap-vue-next/directives';
import 'bootstrap-vue-next/plugins/createBootstrap';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';

const _imports_0 = publicAssetsURL("/img/logo_1.png");

const _sfc_main$4 = {
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BContainer = BContainer;
      const _component_BNavbar = BNavbar;
      const _component_BNavbarBrand = BNavbarBrand;
      const _component_BNavbarToggle = BNavbarToggle;
      const _component_BCollapse = BCollapse;
      const _component_BNavbarNav = BNavbarNav;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_BContainer, mergeProps({ class: "navbar-inverse" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BNavbar, {
              toggleable: "lg",
              variant: "faded",
              type: "light",
              class: "navbar-header"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BNavbarBrand, {
                    to: unref(localePath)("/")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} alt="logo"${_scopeId3}></h1>`);
                      } else {
                        return [
                          createVNode("h1", null, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "logo"
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BNavbarToggle, { target: "nav-collapse" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BCollapse, {
                    id: "nav-collapse",
                    "is-nav": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_BNavbarNav, { class: "navbar-nav navbar-right ms-auto" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<li class="nav-item"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_nuxt_link, {
                                to: unref(localePath)("/")
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Home`);
                                  } else {
                                    return [
                                      createTextVNode("Home")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</li><li class="nav-item"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_NuxtLink, {
                                to: unref(localePath)({ name: "aboutme" })
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`About`);
                                  } else {
                                    return [
                                      createTextVNode("About")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</li><li class="nav-item"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_NuxtLink, {
                                to: unref(localePath)({ name: "gallery" })
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Gallery`);
                                  } else {
                                    return [
                                      createTextVNode("Gallery")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</li><li class="nav-item"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_NuxtLink, {
                                to: unref(localePath)({ name: "program" })
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Game`);
                                  } else {
                                    return [
                                      createTextVNode("Game")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</li><li class="nav-item"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_NuxtLink, {
                                to: unref(localePath)({ name: "web" })
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Web`);
                                  } else {
                                    return [
                                      createTextVNode("Web")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</li>`);
                            } else {
                              return [
                                createVNode("li", { class: "nav-item" }, [
                                  createVNode(_component_nuxt_link, {
                                    to: unref(localePath)("/")
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Home")
                                    ]),
                                    _: 1
                                  }, 8, ["to"])
                                ]),
                                createVNode("li", { class: "nav-item" }, [
                                  createVNode(_component_NuxtLink, {
                                    to: unref(localePath)({ name: "aboutme" })
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("About")
                                    ]),
                                    _: 1
                                  }, 8, ["to"])
                                ]),
                                createVNode("li", { class: "nav-item" }, [
                                  createVNode(_component_NuxtLink, {
                                    to: unref(localePath)({ name: "gallery" })
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Gallery")
                                    ]),
                                    _: 1
                                  }, 8, ["to"])
                                ]),
                                createVNode("li", { class: "nav-item" }, [
                                  createVNode(_component_NuxtLink, {
                                    to: unref(localePath)({ name: "program" })
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Game")
                                    ]),
                                    _: 1
                                  }, 8, ["to"])
                                ]),
                                createVNode("li", { class: "nav-item" }, [
                                  createVNode(_component_NuxtLink, {
                                    to: unref(localePath)({ name: "web" })
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Web")
                                    ]),
                                    _: 1
                                  }, 8, ["to"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_BNavbarNav, { class: "navbar-nav navbar-right ms-auto" }, {
                            default: withCtx(() => [
                              createVNode("li", { class: "nav-item" }, [
                                createVNode(_component_nuxt_link, {
                                  to: unref(localePath)("/")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Home")
                                  ]),
                                  _: 1
                                }, 8, ["to"])
                              ]),
                              createVNode("li", { class: "nav-item" }, [
                                createVNode(_component_NuxtLink, {
                                  to: unref(localePath)({ name: "aboutme" })
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("About")
                                  ]),
                                  _: 1
                                }, 8, ["to"])
                              ]),
                              createVNode("li", { class: "nav-item" }, [
                                createVNode(_component_NuxtLink, {
                                  to: unref(localePath)({ name: "gallery" })
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Gallery")
                                  ]),
                                  _: 1
                                }, 8, ["to"])
                              ]),
                              createVNode("li", { class: "nav-item" }, [
                                createVNode(_component_NuxtLink, {
                                  to: unref(localePath)({ name: "program" })
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Game")
                                  ]),
                                  _: 1
                                }, 8, ["to"])
                              ]),
                              createVNode("li", { class: "nav-item" }, [
                                createVNode(_component_NuxtLink, {
                                  to: unref(localePath)({ name: "web" })
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Web")
                                  ]),
                                  _: 1
                                }, 8, ["to"])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BNavbarBrand, {
                      to: unref(localePath)("/")
                    }, {
                      default: withCtx(() => [
                        createVNode("h1", null, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: "logo"
                          })
                        ])
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode(_component_BNavbarToggle, { target: "nav-collapse" }),
                    createVNode(_component_BCollapse, {
                      id: "nav-collapse",
                      "is-nav": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_BNavbarNav, { class: "navbar-nav navbar-right ms-auto" }, {
                          default: withCtx(() => [
                            createVNode("li", { class: "nav-item" }, [
                              createVNode(_component_nuxt_link, {
                                to: unref(localePath)("/")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Home")
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ]),
                            createVNode("li", { class: "nav-item" }, [
                              createVNode(_component_NuxtLink, {
                                to: unref(localePath)({ name: "aboutme" })
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("About")
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ]),
                            createVNode("li", { class: "nav-item" }, [
                              createVNode(_component_NuxtLink, {
                                to: unref(localePath)({ name: "gallery" })
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Gallery")
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ]),
                            createVNode("li", { class: "nav-item" }, [
                              createVNode(_component_NuxtLink, {
                                to: unref(localePath)({ name: "program" })
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Game")
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ]),
                            createVNode("li", { class: "nav-item" }, [
                              createVNode(_component_NuxtLink, {
                                to: unref(localePath)({ name: "web" })
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Web")
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BNavbar, {
                toggleable: "lg",
                variant: "faded",
                type: "light",
                class: "navbar-header"
              }, {
                default: withCtx(() => [
                  createVNode(_component_BNavbarBrand, {
                    to: unref(localePath)("/")
                  }, {
                    default: withCtx(() => [
                      createVNode("h1", null, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "logo"
                        })
                      ])
                    ]),
                    _: 1
                  }, 8, ["to"]),
                  createVNode(_component_BNavbarToggle, { target: "nav-collapse" }),
                  createVNode(_component_BCollapse, {
                    id: "nav-collapse",
                    "is-nav": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_BNavbarNav, { class: "navbar-nav navbar-right ms-auto" }, {
                        default: withCtx(() => [
                          createVNode("li", { class: "nav-item" }, [
                            createVNode(_component_nuxt_link, {
                              to: unref(localePath)("/")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Home")
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ]),
                          createVNode("li", { class: "nav-item" }, [
                            createVNode(_component_NuxtLink, {
                              to: unref(localePath)({ name: "aboutme" })
                            }, {
                              default: withCtx(() => [
                                createTextVNode("About")
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ]),
                          createVNode("li", { class: "nav-item" }, [
                            createVNode(_component_NuxtLink, {
                              to: unref(localePath)({ name: "gallery" })
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Gallery")
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ]),
                          createVNode("li", { class: "nav-item" }, [
                            createVNode(_component_NuxtLink, {
                              to: unref(localePath)({ name: "program" })
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Game")
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ]),
                          createVNode("li", { class: "nav-item" }, [
                            createVNode(_component_NuxtLink, {
                              to: unref(localePath)({ name: "web" })
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Web")
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Menu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};

const _sfc_main$3 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const switchLocalePath = useSwitchLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_HeaderMenu = _sfc_main$4;
      _push(`<header${ssrRenderAttrs(mergeProps({ id: "header" }, _attrs))}><div class="pc-translation"><div class="container"><ul class="overflow"><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(switchLocalePath)("zh-tw")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>ZH-TW</span>`);
          } else {
            return [
              createVNode("span", null, "ZH-TW")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(switchLocalePath)("en")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>EN</span>`);
          } else {
            return [
              createVNode("span", null, "EN")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: unref(switchLocalePath)("ja")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>JP</span>`);
          } else {
            return [
              createVNode("span", null, "JP")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div>`);
      _push(ssrRenderComponent(_component_HeaderMenu, null, null, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_BContainer = BContainer;
  const _component_BRow = BRow;
  const _component_BCol = BCol;
  _push(`<footer${ssrRenderAttrs(mergeProps({ id: "footer" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_BContainer, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BRow, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BCol, {
                sm: "12",
                class: "text-center bottom-separator"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_BCol, { sm: "12" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="copyright-text text-center"${_scopeId3}><p${_scopeId3}> © NO-DATA 2016-2025. Crafted by <a href="mailto:x79330@gmail.com"${_scopeId3}>Louise</a></p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "copyright-text text-center" }, [
                        createVNode("p", null, [
                          createTextVNode(" © NO-DATA 2016-2025. Crafted by "),
                          createVNode("a", { href: "mailto:x79330@gmail.com" }, "Louise")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BCol, {
                  sm: "12",
                  class: "text-center bottom-separator"
                }),
                createVNode(_component_BCol, { sm: "12" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "copyright-text text-center" }, [
                      createVNode("p", null, [
                        createTextVNode(" © NO-DATA 2016-2025. Crafted by "),
                        createVNode("a", { href: "mailto:x79330@gmail.com" }, "Louise")
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BRow, null, {
            default: withCtx(() => [
              createVNode(_component_BCol, {
                sm: "12",
                class: "text-center bottom-separator"
              }),
              createVNode(_component_BCol, { sm: "12" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "copyright-text text-center" }, [
                    createVNode("p", null, [
                      createTextVNode(" © NO-DATA 2016-2025. Crafted by "),
                      createVNode("a", { href: "mailto:x79330@gmail.com" }, "Louise")
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);

/* empty css                 */
const _sfc_main$1 = {
  __name: "PageTopBtn",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_fa = resolveComponent("fa");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "el-pageTop" }, _attrs))}><button>`);
      _push(ssrRenderComponent(_component_fa, {
        icon: ["fas", "chevron-up"],
        class: "fa-chevron-up"
      }, null, _parent));
      _push(`</button></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageTopBtn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = _sfc_main$3;
  const _component_Footer = __nuxt_component_1;
  const _component_PageTopBtn = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-b274a951>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main data-v-b274a951>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_PageTopBtn, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b274a951"]]);

export { _default as default };
//# sourceMappingURL=default.vue.mjs.map

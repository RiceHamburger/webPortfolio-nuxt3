import { BContainer, BRow, BCol } from 'bootstrap-vue-next/components/BContainer';
import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { ref, resolveComponent, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useLocalePath } from './server.mjs';
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

const _imports_0 = publicAssetsURL("/img/home/slider/house.png");

const _imports_1 = publicAssetsURL("/img/home/slider/birds1.png");

const _imports_2 = publicAssetsURL("/img/home/slider/birds2.png");

const _imports_3 = publicAssetsURL("/img/home/slider/people.png");

const _imports_4 = publicAssetsURL("/img/home/icon1.png");

const _imports_5 = publicAssetsURL("/img/home/icon2.png");

const _imports_6 = publicAssetsURL("/img/home/icon3.png");

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    const isAnimateIn = ref(false);
    const showPreloader = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BContainer = BContainer;
      const _component_BRow = BRow;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_fa = resolveComponent("fa");
      const _component_BCol = BCol;
      _push(`<div${ssrRenderAttrs(_attrs)}><section id="home-slider">`);
      _push(ssrRenderComponent(_component_BContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass({ "animate-in": unref(isAnimateIn), "main-slider": true })}"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} class="slider-house" alt="slider image"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} class="slider-birds1" alt="slider image"${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} class="slider-birds2" alt="slider image"${_scopeId2}><img${ssrRenderAttr("src", _imports_3)} class="slider-hill" alt="slider image"${_scopeId2}><div class="slide-text"${_scopeId2}><h1${_scopeId2}>Game + Create = Life</h1><p${_scopeId2}>${ssrInterpolate(_ctx.$t("in-short"))}</p>`);
                  _push3(ssrRenderComponent(_component_nuxt_link, {
                    to: unref(localePath)({ name: "aboutme" }),
                    class: "btn btn-common"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`ABOUT ME`);
                      } else {
                        return [
                          createTextVNode("ABOUT ME")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: { "animate-in": unref(isAnimateIn), "main-slider": true }
                    }, [
                      createVNode("img", {
                        src: _imports_0,
                        class: "slider-house",
                        alt: "slider image"
                      }),
                      createVNode("img", {
                        src: _imports_1,
                        class: "slider-birds1",
                        alt: "slider image"
                      }),
                      createVNode("img", {
                        src: _imports_2,
                        class: "slider-birds2",
                        alt: "slider image"
                      }),
                      createVNode("img", {
                        src: _imports_3,
                        class: "slider-hill",
                        alt: "slider image"
                      }),
                      createVNode("div", { class: "slide-text" }, [
                        createVNode("h1", null, "Game + Create = Life"),
                        createVNode("p", null, toDisplayString(_ctx.$t("in-short")), 1),
                        createVNode(_component_nuxt_link, {
                          to: unref(localePath)({ name: "aboutme" }),
                          class: "btn btn-common"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("ABOUT ME")
                          ]),
                          _: 1
                        }, 8, ["to"])
                      ])
                    ], 2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BRow, null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: { "animate-in": unref(isAnimateIn), "main-slider": true }
                  }, [
                    createVNode("img", {
                      src: _imports_0,
                      class: "slider-house",
                      alt: "slider image"
                    }),
                    createVNode("img", {
                      src: _imports_1,
                      class: "slider-birds1",
                      alt: "slider image"
                    }),
                    createVNode("img", {
                      src: _imports_2,
                      class: "slider-birds2",
                      alt: "slider image"
                    }),
                    createVNode("img", {
                      src: _imports_3,
                      class: "slider-hill",
                      alt: "slider image"
                    }),
                    createVNode("div", { class: "slide-text" }, [
                      createVNode("h1", null, "Game + Create = Life"),
                      createVNode("p", null, toDisplayString(_ctx.$t("in-short")), 1),
                      createVNode(_component_nuxt_link, {
                        to: unref(localePath)({ name: "aboutme" }),
                        class: "btn btn-common"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("ABOUT ME")
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ])
                  ], 2)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(showPreloader)) {
        _push(`<div class="preloader">`);
        _push(ssrRenderComponent(_component_fa, {
          icon: ["fas", "sun"],
          spin: ""
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section id="services" class="margin-bottom">`);
      _push(ssrRenderComponent(_component_BContainer, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_BCol, {
                    sm: "4",
                    class: "text-center padding",
                    "data-aos": "fade-in",
                    "data-aos-duration": "1000",
                    "data-aos-delay": "30"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="single-service"${_scopeId3}><div data-aos="fade-up" data-aos-duration="500" data-aos-delay="30"${_scopeId3}><img${ssrRenderAttr("src", _imports_4)} alt=""${_scopeId3}></div><h2${_scopeId3}>Gallery</h2><p${_scopeId3}>${ssrInterpolate(_ctx.$t("art-in-short"))}</p>`);
                        _push4(ssrRenderComponent(_component_nuxt_link, {
                          to: unref(localePath)({ name: "gallery" }),
                          class: "btn btn-common"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Link`);
                            } else {
                              return [
                                createTextVNode("Link")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "single-service" }, [
                            createVNode("div", {
                              "data-aos": "fade-up",
                              "data-aos-duration": "500",
                              "data-aos-delay": "30"
                            }, [
                              createVNode("img", {
                                src: _imports_4,
                                alt: ""
                              })
                            ]),
                            createVNode("h2", null, "Gallery"),
                            createVNode("p", null, toDisplayString(_ctx.$t("art-in-short")), 1),
                            createVNode(_component_nuxt_link, {
                              to: unref(localePath)({ name: "gallery" }),
                              class: "btn btn-common"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Link")
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BCol, {
                    sm: "4",
                    class: "text-center padding",
                    "data-aos": "fade-in",
                    "data-aos-duration": "1000",
                    "data-aos-delay": "60"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="single-service"${_scopeId3}><div data-aos="fade-up" data-aos-duration="500" data-aos-delay="60"${_scopeId3}><img${ssrRenderAttr("src", _imports_5)} alt=""${_scopeId3}></div><h2${_scopeId3}>Game</h2><p${_scopeId3}>${ssrInterpolate(_ctx.$t("program-in-short"))}</p>`);
                        _push4(ssrRenderComponent(_component_nuxt_link, {
                          to: unref(localePath)({ name: "program" }),
                          class: "btn btn-common"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Link`);
                            } else {
                              return [
                                createTextVNode("Link")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "single-service" }, [
                            createVNode("div", {
                              "data-aos": "fade-up",
                              "data-aos-duration": "500",
                              "data-aos-delay": "60"
                            }, [
                              createVNode("img", {
                                src: _imports_5,
                                alt: ""
                              })
                            ]),
                            createVNode("h2", null, "Game"),
                            createVNode("p", null, toDisplayString(_ctx.$t("program-in-short")), 1),
                            createVNode(_component_nuxt_link, {
                              to: unref(localePath)({ name: "program" }),
                              class: "btn btn-common"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Link")
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BCol, {
                    sm: "4",
                    class: "text-center padding",
                    "data-aos": "fade-in",
                    "data-aos-duration": "1000",
                    "data-aos-delay": "90"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="single-service"${_scopeId3}><div data-aos="fade-up" data-aos-duration="500" data-aos-delay="90"${_scopeId3}><img${ssrRenderAttr("src", _imports_6)} alt=""${_scopeId3}></div><h2${_scopeId3}>Web</h2><p${_scopeId3}>${ssrInterpolate(_ctx.$t("web-in-short"))}</p>`);
                        _push4(ssrRenderComponent(_component_nuxt_link, {
                          to: unref(localePath)({ name: "web" }),
                          class: "btn btn-common"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Link`);
                            } else {
                              return [
                                createTextVNode("Link")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "single-service" }, [
                            createVNode("div", {
                              "data-aos": "fade-up",
                              "data-aos-duration": "500",
                              "data-aos-delay": "90"
                            }, [
                              createVNode("img", {
                                src: _imports_6,
                                alt: ""
                              })
                            ]),
                            createVNode("h2", null, "Web"),
                            createVNode("p", null, toDisplayString(_ctx.$t("web-in-short")), 1),
                            createVNode(_component_nuxt_link, {
                              to: unref(localePath)({ name: "web" }),
                              class: "btn btn-common"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Link")
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_BCol, {
                      sm: "4",
                      class: "text-center padding",
                      "data-aos": "fade-in",
                      "data-aos-duration": "1000",
                      "data-aos-delay": "30"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "single-service" }, [
                          createVNode("div", {
                            "data-aos": "fade-up",
                            "data-aos-duration": "500",
                            "data-aos-delay": "30"
                          }, [
                            createVNode("img", {
                              src: _imports_4,
                              alt: ""
                            })
                          ]),
                          createVNode("h2", null, "Gallery"),
                          createVNode("p", null, toDisplayString(_ctx.$t("art-in-short")), 1),
                          createVNode(_component_nuxt_link, {
                            to: unref(localePath)({ name: "gallery" }),
                            class: "btn btn-common"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Link")
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BCol, {
                      sm: "4",
                      class: "text-center padding",
                      "data-aos": "fade-in",
                      "data-aos-duration": "1000",
                      "data-aos-delay": "60"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "single-service" }, [
                          createVNode("div", {
                            "data-aos": "fade-up",
                            "data-aos-duration": "500",
                            "data-aos-delay": "60"
                          }, [
                            createVNode("img", {
                              src: _imports_5,
                              alt: ""
                            })
                          ]),
                          createVNode("h2", null, "Game"),
                          createVNode("p", null, toDisplayString(_ctx.$t("program-in-short")), 1),
                          createVNode(_component_nuxt_link, {
                            to: unref(localePath)({ name: "program" }),
                            class: "btn btn-common"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Link")
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BCol, {
                      sm: "4",
                      class: "text-center padding",
                      "data-aos": "fade-in",
                      "data-aos-duration": "1000",
                      "data-aos-delay": "90"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "single-service" }, [
                          createVNode("div", {
                            "data-aos": "fade-up",
                            "data-aos-duration": "500",
                            "data-aos-delay": "90"
                          }, [
                            createVNode("img", {
                              src: _imports_6,
                              alt: ""
                            })
                          ]),
                          createVNode("h2", null, "Web"),
                          createVNode("p", null, toDisplayString(_ctx.$t("web-in-short")), 1),
                          createVNode(_component_nuxt_link, {
                            to: unref(localePath)({ name: "web" }),
                            class: "btn btn-common"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Link")
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BRow, null, {
                default: withCtx(() => [
                  createVNode(_component_BCol, {
                    sm: "4",
                    class: "text-center padding",
                    "data-aos": "fade-in",
                    "data-aos-duration": "1000",
                    "data-aos-delay": "30"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "single-service" }, [
                        createVNode("div", {
                          "data-aos": "fade-up",
                          "data-aos-duration": "500",
                          "data-aos-delay": "30"
                        }, [
                          createVNode("img", {
                            src: _imports_4,
                            alt: ""
                          })
                        ]),
                        createVNode("h2", null, "Gallery"),
                        createVNode("p", null, toDisplayString(_ctx.$t("art-in-short")), 1),
                        createVNode(_component_nuxt_link, {
                          to: unref(localePath)({ name: "gallery" }),
                          class: "btn btn-common"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Link")
                          ]),
                          _: 1
                        }, 8, ["to"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BCol, {
                    sm: "4",
                    class: "text-center padding",
                    "data-aos": "fade-in",
                    "data-aos-duration": "1000",
                    "data-aos-delay": "60"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "single-service" }, [
                        createVNode("div", {
                          "data-aos": "fade-up",
                          "data-aos-duration": "500",
                          "data-aos-delay": "60"
                        }, [
                          createVNode("img", {
                            src: _imports_5,
                            alt: ""
                          })
                        ]),
                        createVNode("h2", null, "Game"),
                        createVNode("p", null, toDisplayString(_ctx.$t("program-in-short")), 1),
                        createVNode(_component_nuxt_link, {
                          to: unref(localePath)({ name: "program" }),
                          class: "btn btn-common"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Link")
                          ]),
                          _: 1
                        }, 8, ["to"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_BCol, {
                    sm: "4",
                    class: "text-center padding",
                    "data-aos": "fade-in",
                    "data-aos-duration": "1000",
                    "data-aos-delay": "90"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "single-service" }, [
                        createVNode("div", {
                          "data-aos": "fade-up",
                          "data-aos-duration": "500",
                          "data-aos-delay": "90"
                        }, [
                          createVNode("img", {
                            src: _imports_6,
                            alt: ""
                          })
                        ]),
                        createVNode("h2", null, "Web"),
                        createVNode("p", null, toDisplayString(_ctx.$t("web-in-short")), 1),
                        createVNode(_component_nuxt_link, {
                          to: unref(localePath)({ name: "web" }),
                          class: "btn btn-common"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Link")
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
      }, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map

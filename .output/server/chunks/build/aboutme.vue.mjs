import { _ as _sfc_main$1 } from './InsidePageTitle.vue.mjs';
import { BContainer, BRow, BCol } from 'bootstrap-vue-next/components/BContainer';
import { BImg } from 'bootstrap-vue-next/components/BImg';
import { ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, Transition, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead } from './v3.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
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

const _sfc_main = {
  __name: "aboutme",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About Me | NO-DATA"
    });
    const pageTitle = ref("About Me");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InsidePageTitle = _sfc_main$1;
      const _component_b_container = BContainer;
      const _component_b_row = BRow;
      const _component_b_col = BCol;
      const _component_b_img = BImg;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a59e2de2>`);
      _push(ssrRenderComponent(_component_InsidePageTitle, {
        pageTitle: unref(pageTitle),
        pageDescription: _ctx.$t("about-title")
      }, null, _parent));
      _push(`<section id="aboutMe" class="padding-top margin-bottom" data-v-a59e2de2>`);
      _push(ssrRenderComponent(_component_b_container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_b_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_b_col, { md: "7" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_b_row, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_b_col, {
                                md: "5",
                                class: "aboutimg"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_b_img, {
                                      src: "/img/aboutus/android.jpg",
                                      fluid: "",
                                      alt: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_b_img, {
                                        src: "/img/aboutus/android.jpg",
                                        fluid: "",
                                        alt: ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_b_col, { md: "7" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<h3 class="top-zero" data-v-a59e2de2${_scopeId5}>SKILLS</h3><p data-v-a59e2de2${_scopeId5}> HTML5 / CSS3(SCSS) / PHP / JavaScript(TypeScript) / JQuery / React.js / Vue.js / Next.js / Nuxt.js / Flash / Photoshop / Illustrator / After Effects / Unity3D / Action Script3.0 / C / C++ / C# </p><h3 class="top-zero" data-v-a59e2de2${_scopeId5}>CONTACT</h3><p data-v-a59e2de2${_scopeId5}><span data-v-a59e2de2${_scopeId5}>${ssrInterpolate(_ctx.$t("contact-info"))}</span><br data-v-a59e2de2${_scopeId5}><br data-v-a59e2de2${_scopeId5}> x79330@gmail.com </p>`);
                                  } else {
                                    return [
                                      createVNode("h3", { class: "top-zero" }, "SKILLS"),
                                      createVNode("p", null, " HTML5 / CSS3(SCSS) / PHP / JavaScript(TypeScript) / JQuery / React.js / Vue.js / Next.js / Nuxt.js / Flash / Photoshop / Illustrator / After Effects / Unity3D / Action Script3.0 / C / C++ / C# "),
                                      createVNode("h3", { class: "top-zero" }, "CONTACT"),
                                      createVNode("p", null, [
                                        createVNode("span", null, toDisplayString(_ctx.$t("contact-info")), 1),
                                        createVNode("br"),
                                        createVNode("br"),
                                        createTextVNode(" x79330@gmail.com ")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_b_col, {
                                  md: "5",
                                  class: "aboutimg"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_img, {
                                      src: "/img/aboutus/android.jpg",
                                      fluid: "",
                                      alt: ""
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_col, { md: "7" }, {
                                  default: withCtx(() => [
                                    createVNode("h3", { class: "top-zero" }, "SKILLS"),
                                    createVNode("p", null, " HTML5 / CSS3(SCSS) / PHP / JavaScript(TypeScript) / JQuery / React.js / Vue.js / Next.js / Nuxt.js / Flash / Photoshop / Illustrator / After Effects / Unity3D / Action Script3.0 / C / C++ / C# "),
                                    createVNode("h3", { class: "top-zero" }, "CONTACT"),
                                    createVNode("p", null, [
                                      createVNode("span", null, toDisplayString(_ctx.$t("contact-info")), 1),
                                      createVNode("br"),
                                      createVNode("br"),
                                      createTextVNode(" x79330@gmail.com ")
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_b_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_b_col, {
                                md: "5",
                                class: "aboutimg"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_b_img, {
                                    src: "/img/aboutus/android.jpg",
                                    fluid: "",
                                    alt: ""
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_col, { md: "7" }, {
                                default: withCtx(() => [
                                  createVNode("h3", { class: "top-zero" }, "SKILLS"),
                                  createVNode("p", null, " HTML5 / CSS3(SCSS) / PHP / JavaScript(TypeScript) / JQuery / React.js / Vue.js / Next.js / Nuxt.js / Flash / Photoshop / Illustrator / After Effects / Unity3D / Action Script3.0 / C / C++ / C# "),
                                  createVNode("h3", { class: "top-zero" }, "CONTACT"),
                                  createVNode("p", null, [
                                    createVNode("span", null, toDisplayString(_ctx.$t("contact-info")), 1),
                                    createVNode("br"),
                                    createVNode("br"),
                                    createTextVNode(" x79330@gmail.com ")
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_b_col, { md: "5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="our-skills" data-v-a59e2de2${_scopeId3}><div class="single-skill" data-v-a59e2de2${_scopeId3}><h3 class="topZ" data-v-a59e2de2${_scopeId3}>Art</h3><div class="progress" data-v-a59e2de2${_scopeId3}><div class="progress-bar progress-bar-primary progress-14" data-v-a59e2de2${_scopeId3}> 14% </div></div></div><div class="single-skill" data-v-a59e2de2${_scopeId3}><h3 data-v-a59e2de2${_scopeId3}>Program</h3><div class="progress" data-v-a59e2de2${_scopeId3}><div class="progress-bar progress-bar-primary progress-86" data-v-a59e2de2${_scopeId3}> 86% </div></div></div><div class="single-skill" data-v-a59e2de2${_scopeId3}><h3 data-v-a59e2de2${_scopeId3}>Consolidation</h3><div class="progress" data-v-a59e2de2${_scopeId3}><div class="progress-bar progress-bar-primary progress-75" data-v-a59e2de2${_scopeId3}> 75% </div></div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "our-skills" }, [
                            createVNode("div", { class: "single-skill" }, [
                              createVNode("h3", { class: "topZ" }, "Art"),
                              createVNode("div", { class: "progress" }, [
                                createVNode(Transition, { name: "home" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "progress-bar progress-bar-primary progress-14" }, " 14% ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            createVNode("div", { class: "single-skill" }, [
                              createVNode("h3", null, "Program"),
                              createVNode("div", { class: "progress" }, [
                                createVNode("div", { class: "progress-bar progress-bar-primary progress-86" }, " 86% ")
                              ])
                            ]),
                            createVNode("div", { class: "single-skill" }, [
                              createVNode("h3", null, "Consolidation"),
                              createVNode("div", { class: "progress" }, [
                                createVNode("div", { class: "progress-bar progress-bar-primary progress-75" }, " 75% ")
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_b_col, { md: "7" }, {
                      default: withCtx(() => [
                        createVNode(_component_b_row, null, {
                          default: withCtx(() => [
                            createVNode(_component_b_col, {
                              md: "5",
                              class: "aboutimg"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_b_img, {
                                  src: "/img/aboutus/android.jpg",
                                  fluid: "",
                                  alt: ""
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_col, { md: "7" }, {
                              default: withCtx(() => [
                                createVNode("h3", { class: "top-zero" }, "SKILLS"),
                                createVNode("p", null, " HTML5 / CSS3(SCSS) / PHP / JavaScript(TypeScript) / JQuery / React.js / Vue.js / Next.js / Nuxt.js / Flash / Photoshop / Illustrator / After Effects / Unity3D / Action Script3.0 / C / C++ / C# "),
                                createVNode("h3", { class: "top-zero" }, "CONTACT"),
                                createVNode("p", null, [
                                  createVNode("span", null, toDisplayString(_ctx.$t("contact-info")), 1),
                                  createVNode("br"),
                                  createVNode("br"),
                                  createTextVNode(" x79330@gmail.com ")
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_col, { md: "5" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "our-skills" }, [
                          createVNode("div", { class: "single-skill" }, [
                            createVNode("h3", { class: "topZ" }, "Art"),
                            createVNode("div", { class: "progress" }, [
                              createVNode(Transition, { name: "home" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "progress-bar progress-bar-primary progress-14" }, " 14% ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "single-skill" }, [
                            createVNode("h3", null, "Program"),
                            createVNode("div", { class: "progress" }, [
                              createVNode("div", { class: "progress-bar progress-bar-primary progress-86" }, " 86% ")
                            ])
                          ]),
                          createVNode("div", { class: "single-skill" }, [
                            createVNode("h3", null, "Consolidation"),
                            createVNode("div", { class: "progress" }, [
                              createVNode("div", { class: "progress-bar progress-bar-primary progress-75" }, " 75% ")
                            ])
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
              createVNode(_component_b_row, null, {
                default: withCtx(() => [
                  createVNode(_component_b_col, { md: "7" }, {
                    default: withCtx(() => [
                      createVNode(_component_b_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_b_col, {
                            md: "5",
                            class: "aboutimg"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_b_img, {
                                src: "/img/aboutus/android.jpg",
                                fluid: "",
                                alt: ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_col, { md: "7" }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "top-zero" }, "SKILLS"),
                              createVNode("p", null, " HTML5 / CSS3(SCSS) / PHP / JavaScript(TypeScript) / JQuery / React.js / Vue.js / Next.js / Nuxt.js / Flash / Photoshop / Illustrator / After Effects / Unity3D / Action Script3.0 / C / C++ / C# "),
                              createVNode("h3", { class: "top-zero" }, "CONTACT"),
                              createVNode("p", null, [
                                createVNode("span", null, toDisplayString(_ctx.$t("contact-info")), 1),
                                createVNode("br"),
                                createVNode("br"),
                                createTextVNode(" x79330@gmail.com ")
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_col, { md: "5" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "our-skills" }, [
                        createVNode("div", { class: "single-skill" }, [
                          createVNode("h3", { class: "topZ" }, "Art"),
                          createVNode("div", { class: "progress" }, [
                            createVNode(Transition, { name: "home" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "progress-bar progress-bar-primary progress-14" }, " 14% ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "single-skill" }, [
                          createVNode("h3", null, "Program"),
                          createVNode("div", { class: "progress" }, [
                            createVNode("div", { class: "progress-bar progress-bar-primary progress-86" }, " 86% ")
                          ])
                        ]),
                        createVNode("div", { class: "single-skill" }, [
                          createVNode("h3", null, "Consolidation"),
                          createVNode("div", { class: "progress" }, [
                            createVNode("div", { class: "progress-bar progress-bar-primary progress-75" }, " 75% ")
                          ])
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
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/aboutme.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aboutme = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a59e2de2"]]);

export { aboutme as default };
//# sourceMappingURL=aboutme.vue.mjs.map

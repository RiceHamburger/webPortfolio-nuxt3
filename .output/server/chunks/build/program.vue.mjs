import { _ as _sfc_main$2 } from './InsidePageTitle.vue.mjs';
import { BContainer, BRow, BCol } from 'bootstrap-vue-next/components/BContainer';
import { BImg } from 'bootstrap-vue-next/components/BImg';
import { resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, createBlock, openBlock, Fragment, renderList, unref, useSSRContext, ref, withAsyncContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { c as apiGetProjectData } from './index.mjs';
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

/* empty css                                                        */
/* empty css                                 */
/* empty css                                             */
const _sfc_main$1 = {
  __name: "GameList",
  __ssrInlineRender: true,
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const modules = [Navigation];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_container = BContainer;
      const _component_b_row = BRow;
      const _component_b_col = BCol;
      const _component_b_img = BImg;
      const _component_fa = resolveComponent("fa");
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.projects, (item) => {
        _push(`<section${ssrRenderAttr("id", "gamePortfolio_" + item.id)} class="portfolio-information padding-top">`);
        _push(ssrRenderComponent(_component_b_container, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_b_row, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_b_col, {
                      sm: "6",
                      "data-aos": "fade-in"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_b_img, {
                            src: `/img/portfolio/${item.main_img}`,
                            fluid: "",
                            alt: item.title
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_b_img, {
                              src: `/img/portfolio/${item.main_img}`,
                              fluid: "",
                              alt: item.title
                            }, null, 8, ["src", "alt"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_b_col, {
                      sm: "6",
                      "data-aos": "fade-in"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="project-name overflow"${_scopeId3}><h2${_scopeId3}>${ssrInterpolate(item.title)}</h2><ul class="listWrap"${_scopeId3}><li${_scopeId3}><span${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_fa, { icon: "clock" }, null, _parent4, _scopeId3));
                          _push4(`${ssrInterpolate(item.create_time)}</span></li></ul></div><div class="project-info overflow"${_scopeId3}><h3${_scopeId3}>Gameplay</h3><p${_scopeId3}>${ssrInterpolate(_ctx.$t(item.description))}</p></div><div class="skills overflow"${_scopeId3}><h3${_scopeId3}>Project in-charge</h3><ul class="listWrap"${_scopeId3}><!--[-->`);
                          ssrRenderList(item.in_charge, (charge) => {
                            _push4(`<li${_scopeId3}><p${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_fa, { icon: "gamepad" }, null, _parent4, _scopeId3));
                            _push4(`<span${_scopeId3}>${ssrInterpolate(_ctx.$t(charge))}</span></p></li>`);
                          });
                          _push4(`<!--]--></ul></div><div class="tools overflow"${_scopeId3}><h3${_scopeId3}>Tools</h3><ul class="listWrap"${_scopeId3}><li${_scopeId3}><p${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_fa, { icon: "file-code" }, null, _parent4, _scopeId3));
                          _push4(`<span${_scopeId3}>${ssrInterpolate(item.tools)}</span></p></li></ul></div><div class="movie overflow"${_scopeId3}><h3${_scopeId3}>Video</h3><ul class="listWrap"${_scopeId3}><li${_scopeId3}><a class="video" data-fancybox${ssrRenderAttr("href", item.video)}${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_fa, { icon: "play" }, null, _parent4, _scopeId3));
                          _push4(`</a></li></ul></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "project-name overflow" }, [
                              createVNode("h2", null, toDisplayString(item.title), 1),
                              createVNode("ul", { class: "listWrap" }, [
                                createVNode("li", null, [
                                  createVNode("span", null, [
                                    createVNode(_component_fa, { icon: "clock" }),
                                    createTextVNode(toDisplayString(item.create_time), 1)
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "project-info overflow" }, [
                              createVNode("h3", null, "Gameplay"),
                              createVNode("p", null, toDisplayString(_ctx.$t(item.description)), 1)
                            ]),
                            createVNode("div", { class: "skills overflow" }, [
                              createVNode("h3", null, "Project in-charge"),
                              createVNode("ul", { class: "listWrap" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.in_charge, (charge) => {
                                  return openBlock(), createBlock("li", { key: charge }, [
                                    createVNode("p", null, [
                                      createVNode(_component_fa, { icon: "gamepad" }),
                                      createVNode("span", null, toDisplayString(_ctx.$t(charge)), 1)
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ]),
                            createVNode("div", { class: "tools overflow" }, [
                              createVNode("h3", null, "Tools"),
                              createVNode("ul", { class: "listWrap" }, [
                                createVNode("li", null, [
                                  createVNode("p", null, [
                                    createVNode(_component_fa, { icon: "file-code" }),
                                    createVNode("span", null, toDisplayString(item.tools), 1)
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "movie overflow" }, [
                              createVNode("h3", null, "Video"),
                              createVNode("ul", { class: "listWrap" }, [
                                createVNode("li", null, [
                                  createVNode("a", {
                                    class: "video",
                                    "data-fancybox": "",
                                    href: item.video
                                  }, [
                                    createVNode(_component_fa, { icon: "play" })
                                  ], 8, ["href"])
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_b_col, { sm: "12" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Swiper), {
                            loop: false,
                            navigation: true,
                            spaceBetween: 20,
                            modules,
                            class: "team-carousel"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(item.imgs, (imgArr, index) => {
                                  _push5(ssrRenderComponent(unref(SwiperSlide), { key: index }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_b_row, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<!--[-->`);
                                              ssrRenderList(imgArr, (img) => {
                                                _push7(ssrRenderComponent(_component_b_col, {
                                                  sm: "3",
                                                  cols: "6",
                                                  key: img
                                                }, {
                                                  default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                    if (_push8) {
                                                      _push8(`<div class="team-single-wrapper"${_scopeId7}><div class="team-single"${_scopeId7}><div class="person-thumb"${_scopeId7}>`);
                                                      _push8(ssrRenderComponent(_component_b_img, {
                                                        src: `/img/portfolio/${img}`,
                                                        fluid: "",
                                                        alt: ""
                                                      }, null, _parent8, _scopeId7));
                                                      _push8(`</div><div class="social-profile"${_scopeId7}><ul class="nav nav-pills"${_scopeId7}><li${_scopeId7}><a${ssrRenderAttr("href", `/img/portfolio/${img}`)}${ssrRenderAttr("data-fancybox", item.title)}${_scopeId7}>`);
                                                      _push8(ssrRenderComponent(_component_fa, { icon: "eye" }, null, _parent8, _scopeId7));
                                                      _push8(`</a></li></ul></div></div></div>`);
                                                    } else {
                                                      return [
                                                        createVNode("div", { class: "team-single-wrapper" }, [
                                                          createVNode("div", { class: "team-single" }, [
                                                            createVNode("div", { class: "person-thumb" }, [
                                                              createVNode(_component_b_img, {
                                                                src: `/img/portfolio/${img}`,
                                                                fluid: "",
                                                                alt: ""
                                                              }, null, 8, ["src"])
                                                            ]),
                                                            createVNode("div", { class: "social-profile" }, [
                                                              createVNode("ul", { class: "nav nav-pills" }, [
                                                                createVNode("li", null, [
                                                                  createVNode("a", {
                                                                    href: `/img/portfolio/${img}`,
                                                                    "data-fancybox": item.title
                                                                  }, [
                                                                    createVNode(_component_fa, { icon: "eye" })
                                                                  ], 8, ["href", "data-fancybox"])
                                                                ])
                                                              ])
                                                            ])
                                                          ])
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent7, _scopeId6));
                                              });
                                              _push7(`<!--]-->`);
                                            } else {
                                              return [
                                                (openBlock(true), createBlock(Fragment, null, renderList(imgArr, (img) => {
                                                  return openBlock(), createBlock(_component_b_col, {
                                                    sm: "3",
                                                    cols: "6",
                                                    key: img
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("div", { class: "team-single-wrapper" }, [
                                                        createVNode("div", { class: "team-single" }, [
                                                          createVNode("div", { class: "person-thumb" }, [
                                                            createVNode(_component_b_img, {
                                                              src: `/img/portfolio/${img}`,
                                                              fluid: "",
                                                              alt: ""
                                                            }, null, 8, ["src"])
                                                          ]),
                                                          createVNode("div", { class: "social-profile" }, [
                                                            createVNode("ul", { class: "nav nav-pills" }, [
                                                              createVNode("li", null, [
                                                                createVNode("a", {
                                                                  href: `/img/portfolio/${img}`,
                                                                  "data-fancybox": item.title
                                                                }, [
                                                                  createVNode(_component_fa, { icon: "eye" })
                                                                ], 8, ["href", "data-fancybox"])
                                                              ])
                                                            ])
                                                          ])
                                                        ])
                                                      ])
                                                    ]),
                                                    _: 2
                                                  }, 1024);
                                                }), 128))
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_b_row, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(imgArr, (img) => {
                                                return openBlock(), createBlock(_component_b_col, {
                                                  sm: "3",
                                                  cols: "6",
                                                  key: img
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("div", { class: "team-single-wrapper" }, [
                                                      createVNode("div", { class: "team-single" }, [
                                                        createVNode("div", { class: "person-thumb" }, [
                                                          createVNode(_component_b_img, {
                                                            src: `/img/portfolio/${img}`,
                                                            fluid: "",
                                                            alt: ""
                                                          }, null, 8, ["src"])
                                                        ]),
                                                        createVNode("div", { class: "social-profile" }, [
                                                          createVNode("ul", { class: "nav nav-pills" }, [
                                                            createVNode("li", null, [
                                                              createVNode("a", {
                                                                href: `/img/portfolio/${img}`,
                                                                "data-fancybox": item.title
                                                              }, [
                                                                createVNode(_component_fa, { icon: "eye" })
                                                              ], 8, ["href", "data-fancybox"])
                                                            ])
                                                          ])
                                                        ])
                                                      ])
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 128))
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.imgs, (imgArr, index) => {
                                    return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                                      default: withCtx(() => [
                                        createVNode(_component_b_row, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(imgArr, (img) => {
                                              return openBlock(), createBlock(_component_b_col, {
                                                sm: "3",
                                                cols: "6",
                                                key: img
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "team-single-wrapper" }, [
                                                    createVNode("div", { class: "team-single" }, [
                                                      createVNode("div", { class: "person-thumb" }, [
                                                        createVNode(_component_b_img, {
                                                          src: `/img/portfolio/${img}`,
                                                          fluid: "",
                                                          alt: ""
                                                        }, null, 8, ["src"])
                                                      ]),
                                                      createVNode("div", { class: "social-profile" }, [
                                                        createVNode("ul", { class: "nav nav-pills" }, [
                                                          createVNode("li", null, [
                                                            createVNode("a", {
                                                              href: `/img/portfolio/${img}`,
                                                              "data-fancybox": item.title
                                                            }, [
                                                              createVNode(_component_fa, { icon: "eye" })
                                                            ], 8, ["href", "data-fancybox"])
                                                          ])
                                                        ])
                                                      ])
                                                    ])
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 128))
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Swiper), {
                              loop: false,
                              navigation: true,
                              spaceBetween: 20,
                              modules,
                              class: "team-carousel"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.imgs, (imgArr, index) => {
                                  return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_row, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(imgArr, (img) => {
                                            return openBlock(), createBlock(_component_b_col, {
                                              sm: "3",
                                              cols: "6",
                                              key: img
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "team-single-wrapper" }, [
                                                  createVNode("div", { class: "team-single" }, [
                                                    createVNode("div", { class: "person-thumb" }, [
                                                      createVNode(_component_b_img, {
                                                        src: `/img/portfolio/${img}`,
                                                        fluid: "",
                                                        alt: ""
                                                      }, null, 8, ["src"])
                                                    ]),
                                                    createVNode("div", { class: "social-profile" }, [
                                                      createVNode("ul", { class: "nav nav-pills" }, [
                                                        createVNode("li", null, [
                                                          createVNode("a", {
                                                            href: `/img/portfolio/${img}`,
                                                            "data-fancybox": item.title
                                                          }, [
                                                            createVNode(_component_fa, { icon: "eye" })
                                                          ], 8, ["href", "data-fancybox"])
                                                        ])
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_b_col, {
                        sm: "6",
                        "data-aos": "fade-in"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_img, {
                            src: `/img/portfolio/${item.main_img}`,
                            fluid: "",
                            alt: item.title
                          }, null, 8, ["src", "alt"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_b_col, {
                        sm: "6",
                        "data-aos": "fade-in"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "project-name overflow" }, [
                            createVNode("h2", null, toDisplayString(item.title), 1),
                            createVNode("ul", { class: "listWrap" }, [
                              createVNode("li", null, [
                                createVNode("span", null, [
                                  createVNode(_component_fa, { icon: "clock" }),
                                  createTextVNode(toDisplayString(item.create_time), 1)
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "project-info overflow" }, [
                            createVNode("h3", null, "Gameplay"),
                            createVNode("p", null, toDisplayString(_ctx.$t(item.description)), 1)
                          ]),
                          createVNode("div", { class: "skills overflow" }, [
                            createVNode("h3", null, "Project in-charge"),
                            createVNode("ul", { class: "listWrap" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.in_charge, (charge) => {
                                return openBlock(), createBlock("li", { key: charge }, [
                                  createVNode("p", null, [
                                    createVNode(_component_fa, { icon: "gamepad" }),
                                    createVNode("span", null, toDisplayString(_ctx.$t(charge)), 1)
                                  ])
                                ]);
                              }), 128))
                            ])
                          ]),
                          createVNode("div", { class: "tools overflow" }, [
                            createVNode("h3", null, "Tools"),
                            createVNode("ul", { class: "listWrap" }, [
                              createVNode("li", null, [
                                createVNode("p", null, [
                                  createVNode(_component_fa, { icon: "file-code" }),
                                  createVNode("span", null, toDisplayString(item.tools), 1)
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "movie overflow" }, [
                            createVNode("h3", null, "Video"),
                            createVNode("ul", { class: "listWrap" }, [
                              createVNode("li", null, [
                                createVNode("a", {
                                  class: "video",
                                  "data-fancybox": "",
                                  href: item.video
                                }, [
                                  createVNode(_component_fa, { icon: "play" })
                                ], 8, ["href"])
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_b_col, { sm: "12" }, {
                        default: withCtx(() => [
                          createVNode(unref(Swiper), {
                            loop: false,
                            navigation: true,
                            spaceBetween: 20,
                            modules,
                            class: "team-carousel"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(item.imgs, (imgArr, index) => {
                                return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_row, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(imgArr, (img) => {
                                          return openBlock(), createBlock(_component_b_col, {
                                            sm: "3",
                                            cols: "6",
                                            key: img
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "team-single-wrapper" }, [
                                                createVNode("div", { class: "team-single" }, [
                                                  createVNode("div", { class: "person-thumb" }, [
                                                    createVNode(_component_b_img, {
                                                      src: `/img/portfolio/${img}`,
                                                      fluid: "",
                                                      alt: ""
                                                    }, null, 8, ["src"])
                                                  ]),
                                                  createVNode("div", { class: "social-profile" }, [
                                                    createVNode("ul", { class: "nav nav-pills" }, [
                                                      createVNode("li", null, [
                                                        createVNode("a", {
                                                          href: `/img/portfolio/${img}`,
                                                          "data-fancybox": item.title
                                                        }, [
                                                          createVNode(_component_fa, { icon: "eye" })
                                                        ], 8, ["href", "data-fancybox"])
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_b_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_b_col, {
                      sm: "6",
                      "data-aos": "fade-in"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_b_img, {
                          src: `/img/portfolio/${item.main_img}`,
                          fluid: "",
                          alt: item.title
                        }, null, 8, ["src", "alt"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_b_col, {
                      sm: "6",
                      "data-aos": "fade-in"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "project-name overflow" }, [
                          createVNode("h2", null, toDisplayString(item.title), 1),
                          createVNode("ul", { class: "listWrap" }, [
                            createVNode("li", null, [
                              createVNode("span", null, [
                                createVNode(_component_fa, { icon: "clock" }),
                                createTextVNode(toDisplayString(item.create_time), 1)
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "project-info overflow" }, [
                          createVNode("h3", null, "Gameplay"),
                          createVNode("p", null, toDisplayString(_ctx.$t(item.description)), 1)
                        ]),
                        createVNode("div", { class: "skills overflow" }, [
                          createVNode("h3", null, "Project in-charge"),
                          createVNode("ul", { class: "listWrap" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.in_charge, (charge) => {
                              return openBlock(), createBlock("li", { key: charge }, [
                                createVNode("p", null, [
                                  createVNode(_component_fa, { icon: "gamepad" }),
                                  createVNode("span", null, toDisplayString(_ctx.$t(charge)), 1)
                                ])
                              ]);
                            }), 128))
                          ])
                        ]),
                        createVNode("div", { class: "tools overflow" }, [
                          createVNode("h3", null, "Tools"),
                          createVNode("ul", { class: "listWrap" }, [
                            createVNode("li", null, [
                              createVNode("p", null, [
                                createVNode(_component_fa, { icon: "file-code" }),
                                createVNode("span", null, toDisplayString(item.tools), 1)
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "movie overflow" }, [
                          createVNode("h3", null, "Video"),
                          createVNode("ul", { class: "listWrap" }, [
                            createVNode("li", null, [
                              createVNode("a", {
                                class: "video",
                                "data-fancybox": "",
                                href: item.video
                              }, [
                                createVNode(_component_fa, { icon: "play" })
                              ], 8, ["href"])
                            ])
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_b_col, { sm: "12" }, {
                      default: withCtx(() => [
                        createVNode(unref(Swiper), {
                          loop: false,
                          navigation: true,
                          spaceBetween: 20,
                          modules,
                          class: "team-carousel"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.imgs, (imgArr, index) => {
                              return openBlock(), createBlock(unref(SwiperSlide), { key: index }, {
                                default: withCtx(() => [
                                  createVNode(_component_b_row, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(imgArr, (img) => {
                                        return openBlock(), createBlock(_component_b_col, {
                                          sm: "3",
                                          cols: "6",
                                          key: img
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "team-single-wrapper" }, [
                                              createVNode("div", { class: "team-single" }, [
                                                createVNode("div", { class: "person-thumb" }, [
                                                  createVNode(_component_b_img, {
                                                    src: `/img/portfolio/${img}`,
                                                    fluid: "",
                                                    alt: ""
                                                  }, null, 8, ["src"])
                                                ]),
                                                createVNode("div", { class: "social-profile" }, [
                                                  createVNode("ul", { class: "nav nav-pills" }, [
                                                    createVNode("li", null, [
                                                      createVNode("a", {
                                                        href: `/img/portfolio/${img}`,
                                                        "data-fancybox": item.title
                                                      }, [
                                                        createVNode(_component_fa, { icon: "eye" })
                                                      ], 8, ["href", "data-fancybox"])
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GameList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = {
  __name: "program",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Project | NO-DATA"
    });
    const pageTitle = ref("Project");
    const projects = ref([]);
    try {
      const { data, error } = ([__temp, __restore] = withAsyncContext(() => apiGetProjectData()), __temp = await __temp, __restore(), __temp);
      if (error.value) {
        console.error("API 錯誤：", error.value);
      }
      if (!Array.isArray(data.value)) {
        console.error("資料格式錯誤：", data.value);
      }
      const resetProjectsArray = data.value.map((element) => {
        const project = {
          id: element.id,
          title: element.title,
          create_time: element.create_time,
          description: element.description,
          in_charge: JSON.parse(element.in_charge),
          tools: element.tools,
          video: element.video,
          main_img: element.main_img
        };
        const imgsArray = JSON.parse(element.imgs);
        const num = 4;
        const newImgsArray = [];
        for (let i = 0; i < imgsArray.length; i += num) {
          newImgsArray.push(imgsArray.slice(i, i + num));
        }
        project.imgs = newImgsArray;
        return project;
      });
      projects.value = resetProjectsArray;
    } catch (err) {
      console.error("錯誤處理:", err);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InsidePageTitle = _sfc_main$2;
      const _component_GameList = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sideWrap" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_InsidePageTitle, {
        pageTitle: unref(pageTitle),
        pageDescription: _ctx.$t("program-title")
      }, null, _parent));
      _push(ssrRenderComponent(_component_GameList, { projects: unref(projects) }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/program.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=program.vue.mjs.map

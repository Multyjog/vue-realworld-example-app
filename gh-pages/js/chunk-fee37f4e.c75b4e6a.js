(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-fee37f4e"],
  {
    "04d0": function(t, e, r) {
      "use strict";
      r.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("div", { staticClass: "editor-page" }, [
            r("div", { staticClass: "container page" }, [
              r("div", { staticClass: "row" }, [
                r(
                  "div",
                  { staticClass: "col-md-10 offset-md-1 col-xs-12" },
                  [
                    r("RwvListErrors", { attrs: { errors: t.errors } }),
                    r(
                      "form",
                      {
                        on: {
                          submit: function(e) {
                            return (
                              e.preventDefault(), t.onPublish(t.article.slug)
                            );
                          }
                        }
                      },
                      [
                        r("fieldset", { attrs: { disabled: t.inProgress } }, [
                          r("fieldset", { staticClass: "form-group" }, [
                            r("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.article.title,
                                  expression: "article.title"
                                }
                              ],
                              staticClass: "form-control form-control-lg",
                              attrs: {
                                type: "text",
                                placeholder: "Article Title"
                              },
                              domProps: { value: t.article.title },
                              on: {
                                input: function(e) {
                                  e.target.composing ||
                                    t.$set(t.article, "title", e.target.value);
                                }
                              }
                            })
                          ]),
                          r("fieldset", { staticClass: "form-group" }, [
                            r("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.article.description,
                                  expression: "article.description"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "What's this article about?"
                              },
                              domProps: { value: t.article.description },
                              on: {
                                input: function(e) {
                                  e.target.composing ||
                                    t.$set(
                                      t.article,
                                      "description",
                                      e.target.value
                                    );
                                }
                              }
                            })
                          ]),
                          r("div", { staticClass: "buttonsField" }, [
                            r(
                              "button",
                              {
                                staticClass: "myButtons",
                                attrs: { type: "button" },
                                on: {
                                  click: function(e) {
                                    return t.addHeader(3);
                                  }
                                }
                              },
                              [t._v("\n                H3\n              ")]
                            ),
                            r(
                              "button",
                              {
                                staticClass: "myButtons",
                                attrs: { type: "button" },
                                on: {
                                  click: function(e) {
                                    return t.addHeader(2);
                                  }
                                }
                              },
                              [t._v("\n                H2\n              ")]
                            ),
                            r(
                              "button",
                              {
                                staticClass: "myButtons",
                                attrs: { type: "button" },
                                on: {
                                  click: function(e) {
                                    return t.addHeader(1);
                                  }
                                }
                              },
                              [t._v("\n                H1\n              ")]
                            )
                          ]),
                          r("fieldset", { staticClass: "form-group" }, [
                            r("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.article.body,
                                  expression: "article.body"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                id: "textField",
                                rows: "8",
                                placeholder: "Write your article (in markdown)"
                              },
                              domProps: { value: t.article.body },
                              on: {
                                input: function(e) {
                                  e.target.composing ||
                                    t.$set(t.article, "body", e.target.value);
                                }
                              }
                            })
                          ]),
                          r("fieldset", { staticClass: "form-group" }, [
                            r("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.tagInput,
                                  expression: "tagInput"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder:
                                  "Enter your tags! For example: family holiday vacation loremipsum"
                              },
                              domProps: { value: t.tagInput },
                              on: {
                                keypress: function(e) {
                                  return !e.type.indexOf("key") &&
                                    t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                    ? null
                                    : (e.preventDefault(),
                                      t.addTag(t.tagInput));
                                },
                                input: function(e) {
                                  e.target.composing ||
                                    (t.tagInput = e.target.value);
                                }
                              }
                            }),
                            r(
                              "div",
                              { staticClass: "tag-list" },
                              t._l(t.article.tagList, function(e, n) {
                                return r(
                                  "span",
                                  {
                                    key: e + n,
                                    staticClass: "tag-default tag-pill"
                                  },
                                  [
                                    r("i", {
                                      staticClass: "ion-close-round",
                                      on: {
                                        click: function(r) {
                                          return t.removeTag(e);
                                        }
                                      }
                                    }),
                                    t._v(
                                      "\n                  " +
                                        t._s(e) +
                                        "\n                "
                                    )
                                  ]
                                );
                              }),
                              0
                            )
                          ])
                        ]),
                        r(
                          "button",
                          {
                            staticClass: "btn btn-lg pull-xs-right btn-primary",
                            attrs: { disabled: t.inProgress, type: "submit" }
                          },
                          [t._v("\n            Publish Article\n          ")]
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            ])
          ]);
        },
        a = [],
        s = (r("8e6e"), r("ac6a"), r("456d"), r("bd86")),
        i = (r("96cf"), r("3b8d")),
        o = r("2f62"),
        c = r("4360"),
        u = r("e98d"),
        l = r("6c33");
      function p(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? p(Object(r), !0).forEach(function(e) {
                Object(s["a"])(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var f = {
          name: "RwvArticleEdit",
          components: { RwvListErrors: u["a"] },
          props: { previousArticle: { type: Object, required: !1 } },
          beforeRouteUpdate: (function() {
            var t = Object(i["a"])(
              regeneratorRuntime.mark(function t(e, r, n) {
                return regeneratorRuntime.wrap(function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), c["a"].dispatch(l["f"]);
                      case 2:
                        return t.abrupt("return", n());
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            function e(e, r, n) {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          beforeRouteEnter: (function() {
            var t = Object(i["a"])(
              regeneratorRuntime.mark(function t(e, r, n) {
                return regeneratorRuntime.wrap(function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), c["a"].dispatch(l["f"]);
                      case 2:
                        if (void 0 === e.params.slug) {
                          t.next = 5;
                          break;
                        }
                        return (
                          (t.next = 5),
                          c["a"].dispatch(
                            l["l"],
                            e.params.slug,
                            e.params.previousArticle
                          )
                        );
                      case 5:
                        return t.abrupt("return", n());
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            function e(e, r, n) {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          beforeRouteLeave: (function() {
            var t = Object(i["a"])(
              regeneratorRuntime.mark(function t(e, r, n) {
                return regeneratorRuntime.wrap(function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), c["a"].dispatch(l["f"]);
                      case 2:
                        n();
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            function e(e, r, n) {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          data: function() {
            return { tagInput: null, inProgress: !1, errors: {} };
          },
          computed: d({}, Object(o["b"])(["article"])),
          methods: {
            addHeader: function(t) {
              var e = {
                1: "#",
                2: "##",
                3: "###",
                4: "####",
                5: "#####",
                6: "######"
              };
              this.article.body = this.article.body + "\n" + e[t] + " ";
            },
            onPublish: function(t) {
              var e = this,
                r = t ? l["b"] : l["e"];
              (this.inProgress = !0),
                this.$store
                  .dispatch(r)
                  .then(function(t) {
                    var r = t.data;
                    (e.inProgress = !1),
                      e.$router.push({
                        name: "article",
                        params: { slug: r.article.slug }
                      });
                  })
                  .catch(function(t) {
                    var r = t.response;
                    (e.inProgress = !1), (e.errors = r.data.errors);
                  });
            },
            removeTag: function(t) {
              this.$store.dispatch(l["d"], t);
            },
            addTag: function(t) {
              this.$store.dispatch(l["c"], t), (this.tagInput = null);
            }
          }
        },
        m = f,
        v = r("2877"),
        g = Object(v["a"])(m, n, a, !1, null, null, null);
      e["default"] = g.exports;
    },
    e98d: function(t, e, r) {
      "use strict";
      var n = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "ul",
            { staticClass: "error-messages" },
            t._l(t.errors, function(e, n) {
              return r(
                "li",
                { key: n },
                [
                  r("span", { domProps: { textContent: t._s(n) } }),
                  t._l(e, function(e) {
                    return r("span", {
                      key: e,
                      domProps: { textContent: t._s(e) }
                    });
                  })
                ],
                2
              );
            }),
            0
          );
        },
        a = [],
        s = {
          name: "RwvListErorrs",
          props: { errors: { type: Object, required: !0 } }
        },
        i = s,
        o = r("2877"),
        c = Object(o["a"])(i, n, a, !1, null, null, null);
      e["a"] = c.exports;
    }
  }
]);
//# sourceMappingURL=chunk-fee37f4e.c75b4e6a.js.map

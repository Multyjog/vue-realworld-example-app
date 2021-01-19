(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-704fe663"],
  {
    bb51: function(t, e, a) {
      "use strict";
      a.r(e);
      var s = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "home-page" }, [
            t._m(0),
            a("div", { staticClass: "container page" }, [
              a("div", { staticClass: "row" }, [
                a(
                  "div",
                  { staticClass: "col-md-9" },
                  [
                    a("div", { staticClass: "feed-toggle" }, [
                      a("ul", { staticClass: "nav nav-pills outline-active" }, [
                        t.isAuthenticated
                          ? a(
                              "li",
                              { staticClass: "nav-item" },
                              [
                                a(
                                  "router-link",
                                  {
                                    staticClass: "nav-link",
                                    attrs: {
                                      to: { name: "home-my-feed" },
                                      "active-class": "active"
                                    }
                                  },
                                  [
                                    t._v(
                                      "\n                Your Feed\n              "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          : t._e(),
                        a(
                          "li",
                          { staticClass: "nav-item" },
                          [
                            a(
                              "router-link",
                              {
                                staticClass: "nav-link",
                                attrs: {
                                  to: { name: "home" },
                                  exact: "",
                                  "active-class": "active"
                                }
                              },
                              [
                                t._v(
                                  "\n                Global Feed\n              "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        t.tag
                          ? a(
                              "li",
                              { staticClass: "nav-item" },
                              [
                                a(
                                  "router-link",
                                  {
                                    staticClass: "nav-link",
                                    attrs: {
                                      to: {
                                        name: "home-tag",
                                        params: { tag: t.tag }
                                      },
                                      "active-class": "active"
                                    }
                                  },
                                  [
                                    a("i", { staticClass: "ion-pound" }),
                                    t._v(" " + t._s(t.tag) + "\n              ")
                                  ]
                                )
                              ],
                              1
                            )
                          : t._e()
                      ])
                    ]),
                    a("router-view")
                  ],
                  1
                ),
                a("div", { staticClass: "col-md-3" }, [
                  a("div", { staticClass: "sidebar" }, [
                    a("p", [t._v("Popular Tags")]),
                    a(
                      "div",
                      { staticClass: "tag-list" },
                      t._l(t.tags, function(t, e) {
                        return a("RwvTag", { key: e, attrs: { name: t } });
                      }),
                      1
                    )
                  ])
                ])
              ])
            ])
          ]);
        },
        n = [
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("div", { staticClass: "banner" }, [
              a("div", { staticClass: "container" }, [
                a("h1", { staticClass: "logo-font" }, [t._v("conduit")]),
                a("p", [t._v("A place to share your knowledge.")])
              ])
            ]);
          }
        ],
        r = (a("8e6e"), a("ac6a"), a("456d"), a("bd86")),
        i = a("2f62"),
        c = a("f53f"),
        o = a("6c33");
      function l(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          e &&
            (s = s.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, s);
        }
        return a;
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(a), !0).forEach(function(e) {
                Object(r["a"])(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : l(Object(a)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      var v = {
          name: "home",
          components: { RwvTag: c["a"] },
          mounted: function() {
            this.$store.dispatch(o["r"]);
          },
          computed: u(
            u({}, Object(i["b"])(["isAuthenticated", "tags"])),
            {},
            {
              tag: function() {
                return this.$route.params.tag;
              }
            }
          )
        },
        p = v,
        m = a("2877"),
        d = Object(m["a"])(p, s, n, !1, null, null, null);
      e["default"] = d.exports;
    },
    f53f: function(t, e, a) {
      "use strict";
      var s = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("router-link", {
            class: t.className,
            attrs: { to: t.homeRoute },
            domProps: { textContent: t._s(t.name) }
          });
        },
        n = [],
        r = {
          name: "RwvTag",
          props: {
            name: { type: String, required: !0 },
            className: { type: String, default: "tag-pill tag-default" }
          },
          computed: {
            homeRoute: function() {
              return { name: "home-tag", params: { tag: name } };
            }
          }
        },
        i = r,
        c = a("2877"),
        o = Object(c["a"])(i, s, n, !1, null, null, null);
      e["a"] = o.exports;
    }
  }
]);
//# sourceMappingURL=chunk-704fe663.e657977d.js.map

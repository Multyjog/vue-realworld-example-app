(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d0d6d35"],
  {
    "73cf": function(t, e, r) {
      "use strict";
      r.r(e);
      var s = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("div", { staticClass: "auth-page" }, [
            r("div", { staticClass: "container page" }, [
              r("div", { staticClass: "row" }, [
                r("div", { staticClass: "col-md-6 offset-md-3 col-xs-12" }, [
                  r("h1", { staticClass: "text-xs-center" }, [t._v("Sign up")]),
                  r("p", { staticClass: "text-xs-center" }),
                  t.errors
                    ? r(
                        "ul",
                        { staticClass: "error-messages" },
                        t._l(t.errors, function(e, s) {
                          return r("li", { key: s }, [
                            t._v(t._s(s) + " " + t._s(t._f("error")(e)))
                          ]);
                        }),
                        0
                      )
                    : t._e(),
                  r(
                    "form",
                    {
                      on: {
                        submit: function(e) {
                          return e.preventDefault(), t.onSubmit(e);
                        }
                      }
                    },
                    [
                      r("fieldset", { staticClass: "form-group" }, [
                        r("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.username,
                              expression: "username"
                            }
                          ],
                          staticClass: "form-control form-control-lg",
                          attrs: { type: "text", placeholder: "Username" },
                          domProps: { value: t.username },
                          on: {
                            input: function(e) {
                              e.target.composing ||
                                (t.username = e.target.value);
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
                              value: t.email,
                              expression: "email"
                            }
                          ],
                          staticClass: "form-control form-control-lg",
                          attrs: { type: "text", placeholder: "Email" },
                          domProps: { value: t.email },
                          on: {
                            input: function(e) {
                              e.target.composing || (t.email = e.target.value);
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
                              value: t.password,
                              expression: "password"
                            }
                          ],
                          staticClass: "form-control form-control-lg",
                          attrs: { type: "password", placeholder: "Password" },
                          domProps: { value: t.password },
                          on: {
                            input: function(e) {
                              e.target.composing ||
                                (t.password = e.target.value);
                            }
                          }
                        })
                      ]),
                      r(
                        "button",
                        { staticClass: "btn btn-lg btn-primary pull-xs-right" },
                        [t._v("\n            Sign up\n          ")]
                      ),
                      r(
                        "button",
                        { staticClass: "btn btn-lg" },
                        [
                          r(
                            "router-link",
                            { attrs: { to: { name: "login" } } },
                            [
                              t._v(
                                "\n              Have an account?\n            "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ])
              ])
            ])
          ]);
        },
        o = [],
        a = (r("8e6e"), r("ac6a"), r("456d"), r("bd86")),
        n = r("2f62"),
        i = r("6c33");
      function c(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          e &&
            (s = s.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, s);
        }
        return r;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(r), !0).forEach(function(e) {
                Object(a["a"])(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var u = {
          name: "RwvRegister",
          data: function() {
            return { username: "", email: "", password: "" };
          },
          computed: l(
            {},
            Object(n["c"])({
              errors: function(t) {
                return t.auth.errors;
              }
            })
          ),
          methods: {
            onSubmit: function() {
              var t = this;
              this.$store
                .dispatch(i["u"], {
                  email: this.email,
                  password: this.password,
                  username: this.username
                })
                .then(function() {
                  return t.$router.push({ name: "home" });
                });
            }
          }
        },
        p = u,
        m = r("2877"),
        d = Object(m["a"])(p, s, o, !1, null, null, null);
      e["default"] = d.exports;
    }
  }
]);
//# sourceMappingURL=chunk-2d0d6d35.2f56f017.js.map

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d0b3289"],
  {
    "26d3": function(e, t, r) {
      "use strict";
      r.r(t);
      var s = function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", { staticClass: "settings-page" }, [
            r("div", { staticClass: "container page" }, [
              r("div", { staticClass: "row" }, [
                r("div", { staticClass: "col-md-6 offset-md-3 col-xs-12" }, [
                  r("h1", { staticClass: "text-xs-center" }, [
                    e._v("Your Settings")
                  ]),
                  r(
                    "form",
                    {
                      on: {
                        submit: function(t) {
                          return t.preventDefault(), e.updateSettings();
                        }
                      }
                    },
                    [
                      r("fieldset", [
                        r("fieldset", { staticClass: "form-group" }, [
                          r("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.currentUser.image,
                                expression: "currentUser.image"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "URL of profile picture"
                            },
                            domProps: { value: e.currentUser.image },
                            on: {
                              input: function(t) {
                                t.target.composing ||
                                  e.$set(
                                    e.currentUser,
                                    "image",
                                    t.target.value
                                  );
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
                                value: e.currentUser.username,
                                expression: "currentUser.username"
                              }
                            ],
                            staticClass: "form-control form-control-lg",
                            attrs: {
                              type: "text",
                              placeholder: "Your username"
                            },
                            domProps: { value: e.currentUser.username },
                            on: {
                              input: function(t) {
                                t.target.composing ||
                                  e.$set(
                                    e.currentUser,
                                    "username",
                                    t.target.value
                                  );
                              }
                            }
                          })
                        ]),
                        r("fieldset", { staticClass: "form-group" }, [
                          r("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.currentUser.bio,
                                expression: "currentUser.bio"
                              }
                            ],
                            staticClass: "form-control form-control-lg",
                            attrs: {
                              rows: "8",
                              placeholder: "Short bio about you"
                            },
                            domProps: { value: e.currentUser.bio },
                            on: {
                              input: function(t) {
                                t.target.composing ||
                                  e.$set(e.currentUser, "bio", t.target.value);
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
                                value: e.currentUser.email,
                                expression: "currentUser.email"
                              }
                            ],
                            staticClass: "form-control form-control-lg",
                            attrs: { type: "text", placeholder: "Email" },
                            domProps: { value: e.currentUser.email },
                            on: {
                              input: function(t) {
                                t.target.composing ||
                                  e.$set(
                                    e.currentUser,
                                    "email",
                                    t.target.value
                                  );
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
                                value: e.currentUser.password,
                                expression: "currentUser.password"
                              }
                            ],
                            staticClass: "form-control form-control-lg",
                            attrs: {
                              type: "password",
                              placeholder: "Password"
                            },
                            domProps: { value: e.currentUser.password },
                            on: {
                              input: function(t) {
                                t.target.composing ||
                                  e.$set(
                                    e.currentUser,
                                    "password",
                                    t.target.value
                                  );
                              }
                            }
                          })
                        ]),
                        r(
                          "button",
                          {
                            staticClass: "btn btn-lg btn-primary pull-xs-right"
                          },
                          [
                            e._v(
                              "\n              Update Settings\n            "
                            )
                          ]
                        )
                      ])
                    ]
                  ),
                  r("hr")
                ])
              ])
            ])
          ]);
        },
        o = [],
        a = (r("8e6e"), r("ac6a"), r("456d"), r("bd86")),
        n = r("2f62");
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, s);
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function(t) {
                Object(a["a"])(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var l = {
          name: "RwvSettings",
          computed: i({}, Object(n["b"])(["currentUser"]))
        },
        u = l,
        p = r("2877"),
        m = Object(p["a"])(u, s, o, !1, null, null, null);
      t["default"] = m.exports;
    }
  }
]);
//# sourceMappingURL=chunk-2d0b3289.028c1d80.js.map

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d0f1193"],
  {
    "9ed5": function(e, t, r) {
      "use strict";
      r.r(t);
      var n = function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r(
            "div",
            { staticClass: "profile-page" },
            [
              r("RwvArticleList", {
                attrs: { author: e.author, "items-per-page": 5 }
              })
            ],
            1
          );
        },
        a = [],
        s = r("64e5"),
        i = {
          name: "RwvProfileArticles",
          components: { RwvArticleList: s["a"] },
          computed: {
            author: function() {
              return this.$route.params.username;
            }
          }
        },
        u = i,
        o = r("2877"),
        c = Object(o["a"])(u, n, a, !1, null, null, null);
      t["default"] = c.exports;
    }
  }
]);
//# sourceMappingURL=chunk-2d0f1193.e56c7702.js.map

!function() {
    "use strict";
    var n = {}
      , e = {};
    function t(r) {
        var o = e[r];
        if (void 0 !== o)
            return o.exports;
        var i = e[r] = {
            id: r,
            loaded: !1,
            exports: {}
        }
          , u = !0;
        try {
            n[r].call(i.exports, i, i.exports, t),
            u = !1
        } finally {
            u && delete e[r]
        }
        return i.loaded = !0,
        i.exports
    }
    t.m = n,
    t.amdO = {},
    function() {
        var n = "function" === typeof Symbol ? Symbol("webpack then") : "__webpack_then__"
          , e = "function" === typeof Symbol ? Symbol("webpack exports") : "__webpack_exports__"
          , r = "function" === typeof Symbol ? Symbol("webpack error") : "__webpack_error__"
          , o = function(n) {
            n && (n.forEach((function(n) {
                n.r--
            }
            )),
            n.forEach((function(n) {
                n.r-- ? n.r++ : n()
            }
            )))
        }
          , i = function(n) {
            !--n.r && n()
        }
          , u = function(n, e) {
            n ? n.push(e) : i(e)
        };
        t.a = function(t, c, f) {
            var a, s, l, d = f && [], p = t.exports, b = !0, h = !1, m = function(e, t, r) {
                h || (h = !0,
                t.r += e.length,
                e.map((function(e, o) {
                    e[n](t, r)
                }
                )),
                h = !1)
            }, v = new Promise((function(n, e) {
                l = e,
                s = function() {
                    n(p),
                    o(d),
                    d = 0
                }
            }
            ));
            v[e] = p,
            v[n] = function(n, e) {
                if (b)
                    return i(n);
                a && m(a, n, e),
                u(d, n),
                v.catch(e)
            }
            ,
            t.exports = v,
            c((function(t) {
                var c;
                a = function(t) {
                    return t.map((function(t) {
                        if (null !== t && "object" === typeof t) {
                            if (t[n])
                                return t;
                            if (t.then) {
                                var c = [];
                                t.then((function(n) {
                                    f[e] = n,
                                    o(c),
                                    c = 0
                                }
                                ), (function(n) {
                                    f[r] = n,
                                    o(c),
                                    c = 0
                                }
                                ));
                                var f = {};
                                return f[n] = function(n, e) {
                                    u(c, n),
                                    t.catch(e)
                                }
                                ,
                                f
                            }
                        }
                        var a = {};
                        return a[n] = function(n) {
                            i(n)
                        }
                        ,
                        a[e] = t,
                        a
                    }
                    ))
                }(t);
                var f = function() {
                    return a.map((function(n) {
                        if (n[r])
                            throw n[r];
                        return n[e]
                    }
                    ))
                }
                  , s = new Promise((function(n, e) {
                    (c = function() {
                        n(f)
                    }
                    ).r = 0,
                    m(a, c, e)
                }
                ));
                return c.r ? s : f()
            }
            ), (function(n) {
                n && l(v[r] = n),
                s()
            }
            )),
            b = !1
        }
    }(),
    function() {
        var n = [];
        t.O = function(e, r, o, i) {
            if (!r) {
                var u = 1 / 0;
                for (s = 0; s < n.length; s++) {
                    r = n[s][0],
                    o = n[s][1],
                    i = n[s][2];
                    for (var c = !0, f = 0; f < r.length; f++)
                        (!1 & i || u >= i) && Object.keys(t.O).every((function(n) {
                            return t.O[n](r[f])
                        }
                        )) ? r.splice(f--, 1) : (c = !1,
                        i < u && (u = i));
                    if (c) {
                        n.splice(s--, 1);
                        var a = o();
                        void 0 !== a && (e = a)
                    }
                }
                return e
            }
            i = i || 0;
            for (var s = n.length; s > 0 && n[s - 1][2] > i; s--)
                n[s] = n[s - 1];
            n[s] = [r, o, i]
        }
    }(),
    t.n = function(n) {
        var e = n && n.__esModule ? function() {
            return n.default
        }
        : function() {
            return n
        }
        ;
        return t.d(e, {
            a: e
        }),
        e
    }
    ,
    t.d = function(n, e) {
        for (var r in e)
            t.o(e, r) && !t.o(n, r) && Object.defineProperty(n, r, {
                enumerable: !0,
                get: e[r]
            })
    }
    ,
    t.f = {},
    t.e = function(n) {
        return Promise.all(Object.keys(t.f).reduce((function(e, r) {
            return t.f[r](n, e),
            e
        }
        ), []))
    }
    ,
    t.u = function(n) {
        return "static/chunks/" + n + ".3a8dc300c5f65e42.js"
    }
    ,
    t.miniCssF = function(n) {
        return "static/css/" + {
            2888: "4acfc667ed910a4e",
            3483: "ea8345fbbb84e9a9",
            4073: "cfdbe5e9cf516dbc",
            4997: "b44e452a9b15cc82",
            5405: "95f8be1f38fdb515",
            9104: "cfdbe5e9cf516dbc",
            9118: "ea8345fbbb84e9a9"
        }[n] + ".css"
    }
    ,
    t.g = function() {
        if ("object" === typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (n) {
            if ("object" === typeof window)
                return window
        }
    }(),
    t.hmd = function(n) {
        return (n = Object.create(n)).children || (n.children = []),
        Object.defineProperty(n, "exports", {
            enumerable: !0,
            set: function() {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + n.id)
            }
        }),
        n
    }
    ,
    t.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }
    ,
    function() {
        var n = {}
          , e = "_N_E:";
        t.l = function(r, o, i, u) {
            if (n[r])
                n[r].push(o);
            else {
                var c, f;
                if (void 0 !== i)
                    for (var a = document.getElementsByTagName("script"), s = 0; s < a.length; s++) {
                        var l = a[s];
                        if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == e + i) {
                            c = l;
                            break
                        }
                    }
                c || (f = !0,
                (c = document.createElement("script")).charset = "utf-8",
                c.timeout = 120,
                t.nc && c.setAttribute("nonce", t.nc),
                c.setAttribute("data-webpack", e + i),
                c.src = r),
                n[r] = [o];
                var d = function(e, t) {
                    c.onerror = c.onload = null,
                    clearTimeout(p);
                    var o = n[r];
                    if (delete n[r],
                    c.parentNode && c.parentNode.removeChild(c),
                    o && o.forEach((function(n) {
                        return n(t)
                    }
                    )),
                    e)
                        return e(t)
                }
                  , p = setTimeout(d.bind(null, void 0, {
                    type: "timeout",
                    target: c
                }), 12e4);
                c.onerror = d.bind(null, c.onerror),
                c.onload = d.bind(null, c.onload),
                f && document.head.appendChild(c)
            }
        }
    }(),
    t.r = function(n) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }
    ,
    t.nmd = function(n) {
        return n.paths = [],
        n.children || (n.children = []),
        n
    }
    ,
    t.v = function(n, e, r, o) {
        var i = fetch(t.p + "static/wasm/" + r + ".wasm");
        return "function" === typeof WebAssembly.instantiateStreaming ? WebAssembly.instantiateStreaming(i, o).then((function(e) {
            return Object.assign(n, e.instance.exports)
        }
        )) : i.then((function(n) {
            return n.arrayBuffer()
        }
        )).then((function(n) {
            return WebAssembly.instantiate(n, o)
        }
        )).then((function(e) {
            return Object.assign(n, e.instance.exports)
        }
        ))
    }
    ,
    t.p = "/_next/",
    function() {
        var n = {
            2272: 0
        };
        t.f.j = function(e, r) {
            var o = t.o(n, e) ? n[e] : void 0;
            if (0 !== o)
                if (o)
                    r.push(o[2]);
                else if (2272 != e) {
                    var i = new Promise((function(t, r) {
                        o = n[e] = [t, r]
                    }
                    ));
                    r.push(o[2] = i);
                    var u = t.p + t.u(e)
                      , c = new Error;
                    t.l(u, (function(r) {
                        if (t.o(n, e) && (0 !== (o = n[e]) && (n[e] = void 0),
                        o)) {
                            var i = r && ("load" === r.type ? "missing" : r.type)
                              , u = r && r.target && r.target.src;
                            c.message = "Loading chunk " + e + " failed.\n(" + i + ": " + u + ")",
                            c.name = "ChunkLoadError",
                            c.type = i,
                            c.request = u,
                            o[1](c)
                        }
                    }
                    ), "chunk-" + e, e)
                } else
                    n[e] = 0
        }
        ,
        t.O.j = function(e) {
            return 0 === n[e]
        }
        ;
        var e = function(e, r) {
            var o, i, u = r[0], c = r[1], f = r[2], a = 0;
            if (u.some((function(e) {
                return 0 !== n[e]
            }
            ))) {
                for (o in c)
                    t.o(c, o) && (t.m[o] = c[o]);
                if (f)
                    var s = f(t)
            }
            for (e && e(r); a < u.length; a++)
                i = u[a],
                t.o(n, i) && n[i] && n[i][0](),
                n[i] = 0;
            return t.O(s)
        }
          , r = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
        r.forEach(e.bind(null, 0)),
        r.push = e.bind(null, r.push.bind(r))
    }()
}();

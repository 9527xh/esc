(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3064], {
    84755: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/tokens", function() {
            return n(22042)
        }
        ])
    },
    29325: function(e, t, n) {
        "use strict";
        var r = n(8014)
          , a = n(56168);
        t.Z = function() {
            var e = (0,
            a.useState)(!1)
              , t = e[0]
              , n = e[1];
            return (0,
            a.useEffect)((function() {
                var e = function() {
                    n(window.innerWidth < 768)
                };
                return e(),
                window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
            }
            ), []),
            t ? (0,
            r.jsx)("div", {
                className: "w-full justify-center flex -my-3",
                children: (0,
                r.jsx)("div", {
                    style: {
                        minWidth: 320,
                        minHeight: 100
                    },
                    children: (0,
                    r.jsx)("span", {
                        id: "ct_cDxrC1hz6DI"
                    })
                })
            }) : (0,
            r.jsx)("div", {
                className: "w-full justify-center flex -my-3",
                children: (0,
                r.jsx)("div", {
                    style: {
                        minWidth: 728,
                        minHeight: 90
                    },
                    children: (0,
                    r.jsx)("span", {
                        id: "ct_cbNvR30Gd3z"
                    })
                })
            })
        }
    },
    7755: function(e, t, n) {
        "use strict";
        var r = n(8014);
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        t.Z = function(e) {
            return (0,
            r.jsxs)("svg", function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                      , r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    r.forEach((function(t) {
                        a(e, t, n[t])
                    }
                    ))
                }
                return e
            }({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: 24,
                height: 24
            }, e, {
                children: [(0,
                r.jsx)("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                }), (0,
                r.jsx)("path", {
                    d: "M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"
                })]
            }))
        }
    },
    62114: function(e, t, n) {
        "use strict";
        var r = n(8014);
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        t.Z = function(e) {
            return (0,
            r.jsxs)("svg", function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                      , r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    r.forEach((function(t) {
                        a(e, t, n[t])
                    }
                    ))
                }
                return e
            }({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: 16,
                height: 16
            }, e, {
                children: [(0,
                r.jsx)("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                }), (0,
                r.jsx)("path", {
                    d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 011-1 1.5 1.5 0 10-1.471-1.794l-1.962-.393A3.501 3.501 0 1113 13.355z"
                })]
            }))
        }
    },
    25308: function(e, t, n) {
        "use strict";
        var r = n(8014)
          , a = n(62044)
          , s = n(45666)
          , o = n(37506);
        t.Z = function(e) {
            var t = e.page
              , n = e.count
              , c = e.limit
              , i = void 0 === c ? 25 : c
              , l = e.loading
              , u = void 0 !== l && l
              , x = e.setPage
              , p = void 0 === x ? function() {}
            : x
              , f = e.pageLimit
              , d = void 0 === f ? 200 : f
              , m = (0,
            a.Z)("common").t
              , h = +n ? Math.ceil(n / i) : 1;
            h = h > d ? d : h;
            return (0,
            r.jsx)("div", {
                className: "bg-white px-2 py-3 flex items-center justify-between border-t md:px-4",
                children: (0,
                r.jsxs)("div", {
                    className: "sm:flex-1 sm:flex sm:items-center sm:justify-between",
                    children: [(0,
                    r.jsx)("div", {}), u ? (0,
                    r.jsx)(o.Z, {
                        className: "h-6",
                        wrapperClassName: "w-64 h-8"
                    }) : (0,
                    r.jsx)("div", {
                        children: (0,
                        r.jsxs)("nav", {
                            className: "relative z-0 inline-flex rounded-md",
                            "aria-label": "Pagination",
                            children: [(0,
                            r.jsx)("button", {
                                type: "button",
                                disabled: t <= 1 || 1 === h,
                                onClick: function() {
                                    return p(1)
                                },
                                className: "relative inline-flex items-center px-2 ml-1 md:px-3 py-2  text-xs font-medium rounded-md ".concat(t <= 1 ? "text-gray-500" : "text-green-400 hover:bg-green-400 hover:text-white", " bg-gray-100"),
                                children: m("pagination.first")
                            }), (0,
                            r.jsx)("button", {
                                type: "button",
                                disabled: t <= 1 || 1 === h,
                                onClick: function() {
                                    if (t <= 1)
                                        return null;
                                    p((function(e) {
                                        return (+e || 1) - 1
                                    }
                                    ))
                                },
                                className: "relative inline-flex items-center px-2 ml-1 md:px-3 py-2 font-medium ".concat(t <= 1 ? "text-gray-500" : "text-green-400 hover:text-white hover:bg-green-400", " rounded-md  bg-gray-100"),
                                children: (0,
                                r.jsx)(s.bUI, {
                                    className: "inline-flex text-xs"
                                })
                            }), (0,
                            r.jsxs)("button", {
                                type: "button",
                                disabled: !0,
                                className: "relative inline-flex items-center px-2 ml-1 md:px-3 py-2 text-xs font-medium text-gray-500 rounded-md bg-gray-100",
                                children: ["Page ", t, " of ", h]
                            }), (0,
                            r.jsx)("button", {
                                type: "button",
                                disabled: t >= h || 1 === h,
                                onClick: function() {
                                    if (t >= h)
                                        return null;
                                    p((function(e) {
                                        return (+e || 1) + 1
                                    }
                                    ))
                                },
                                className: "relative inline-flex items-center ml-1 px-2 md:px-3 py-2 rounded-md font-medium ".concat(t >= h ? "text-gray-500" : "text-green-400 hover:text-white hover:bg-green-400", "  bg-gray-100"),
                                children: (0,
                                r.jsx)(s.Dli, {
                                    className: "inline-flex text-xs"
                                })
                            }), (0,
                            r.jsx)("button", {
                                type: "button",
                                disabled: t >= h || 1 === h,
                                onClick: function() {
                                    return p(h)
                                },
                                className: "relative inline-flex items-center px-2 ml-1 md:px-3 py-2 text-xs font-medium rounded-md ".concat(t >= h ? "text-gray-500" : "text-green-400 hover:text-white hover:bg-green-400", "  bg-gray-100 "),
                                children: m("pagination.last")
                            })]
                        })
                    })]
                })
            })
        }
    },
    82013: function(e, t, n) {
        "use strict";
        var r = n(8014)
          , a = n(7755);
        t.Z = function(e) {
            var t = e.order;
            return (0,
            r.jsx)(a.Z, {
                className: "h-3 w-3 fill-current transition-transform mr-1 duration-700 ".concat("asc" !== t ? "transform rotate-180" : "transform rotate-0")
            })
        }
    },
    66069: function(e, t, n) {
        "use strict";
        n.d(t, {
            z: function() {
                return d
            }
        });
        var r = n(44453)
          , a = n.n(r)
          , s = n(8014)
          , o = n(32435)
          , c = n(56168);
        function i(e, t, n, r, a, s, o) {
            try {
                var c = e[s](o)
                  , i = c.value
            } catch (l) {
                return void n(l)
            }
            c.done ? t(i) : Promise.resolve(i).then(r, a)
        }
        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    l(e, t, n[t])
                }
                ))
            }
            return e
        }
        function x(e, t) {
            if (null == e)
                return {};
            var n, r, a = function(e, t) {
                if (null == e)
                    return {};
                var n, r, a = {}, s = Object.keys(e);
                for (r = 0; r < s.length; r++)
                    n = s[r],
                    t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++)
                    n = s[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }
        var p = "/images/tokenplaceholder.svg"
          , f = function() {
            var e, t = (e = a().mark((function e(t) {
                var n, r, s, c = arguments;
                return a().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = c.length > 1 && void 0 !== c[1] ? c[1] : "",
                            r = c.length > 2 && void 0 !== c[2] ? c[2] : "",
                            !(n.startsWith("https://") || n.startsWith("http://") || n.startsWith("data:image"))) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return", n);
                        case 3:
                            if (!r || !t.startsWith("https://arweave.net") && !r.startsWith("https://arweave.net")) {
                                e.next = 13;
                                break
                            }
                            return e.prev = 4,
                            e.next = 7,
                            o.ZP.get(t ? "".concat(t.replace(/\/+$/, ""), "/").concat(r) : "".concat(r));
                        case 7:
                            return s = e.sent,
                            e.abrupt("return", s.data.media);
                        case 11:
                            e.prev = 11,
                            e.t0 = e.catch(4);
                        case 13:
                            if (!t) {
                                e.next = 15;
                                break
                            }
                            return e.abrupt("return", "".concat(t, "/").concat(n));
                        case 15:
                            return e.abrupt("return", "https://cloudflare-ipfs.com/ipfs/".concat(n));
                        case 16:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[4, 11]])
            }
            )),
            function() {
                var t = this
                  , n = arguments;
                return new Promise((function(r, a) {
                    var s = e.apply(t, n);
                    function o(e) {
                        i(s, r, a, o, c, "next", e)
                    }
                    function c(e) {
                        i(s, r, a, o, c, "throw", e)
                    }
                    o(void 0)
                }
                ))
            }
            );
            return function(e) {
                return t.apply(this, arguments)
            }
        }()
          , d = function(e) {
            var t = e.base
              , n = e.media
              , r = e.alt
              , a = e.reference
              , o = x(e, ["base", "media", "alt", "reference"])
              , i = (0,
            c.useState)("")
              , l = i[0]
              , p = i[1]
              , d = (0,
            c.useState)(!0)
              , h = d[0]
              , g = d[1];
            (0,
            c.useEffect)((function() {
                (n || t || a) && f(t || "", n || "", a).then(p)
            }
            ), [t, n, a]);
            return (0,
            s.jsxs)("span", {
                className: "w-full h-full flex items-center justify-center relative",
                children: [h && (0,
                s.jsx)("span", {
                    className: "absolute inset-0 bg-white",
                    children: (0,
                    s.jsx)("span", {
                        className: "absolute inset-0 animate-pulse bg-gray-300 rounded"
                    })
                }), (0,
                s.jsx)(m, u({
                    src: l,
                    alt: r
                }, o, {
                    onLoad: function() {
                        return g(!1)
                    }
                }))]
            })
        }
          , m = function(e) {
            var t = e.src
              , n = e.alt
              , r = x(e, ["src", "alt"]);
            return (0,
            s.jsx)("img", u({
                src: t || p,
                alt: n
            }, r, {
                onError: function(e) {
                    e.target.onError = null,
                    e.target.src = p
                }
            }))
        };
        t.Z = m
    },
    12247: function(e, t, n) {
        "use strict";
        var r = n(52007)
          , a = n.n(r)
          , s = n(56168)
          , o = n(68804);
        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    c(e, t, n[t])
                }
                ))
            }
            return e
        }
        var l = {
            page: 1,
            per_page: 25
        };
        t.Z = function(e) {
            var t = (0,
            s.useState)(i({}, l, e))
              , n = t[0]
              , r = t[1]
              , u = (0,
            s.useMemo)((function() {
                return a().stringify(n)
            }
            ), [n])
              , x = (0,
            s.useCallback)((function(e, t) {
                return r("function" === typeof e ? function(t) {
                    return (0,
                    o.KE)(e(t))
                }
                : function(n) {
                    return (0,
                    o.KE)(i({}, n, c({}, e, t)))
                }
                )
            }
            ), [])
              , p = (0,
            s.useCallback)((function() {
                return r(i({}, l, e))
            }
            ), [e]);
            return {
                pqs: u,
                pagination: n,
                setPagination: x,
                resetPagination: p
            }
        }
    },
    55385: function(e, t, n) {
        "use strict";
        var r = n(52007)
          , a = n.n(r)
          , s = n(75332)
          , o = n(56168)
          , c = n(68804);
        function i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    l(e, t, n[t])
                }
                ))
            }
            return e
        }
        function x(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, a, s = [], o = !0, c = !1;
                    try {
                        for (n = n.call(e); !(o = (r = n.next()).done) && (s.push(r.value),
                        !t || s.length !== t); o = !0)
                            ;
                    } catch (i) {
                        c = !0,
                        a = i
                    } finally {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (c)
                                throw a
                        }
                    }
                    return s
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return i(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var p = function(e, t) {
            return Object.entries(e).reduce((function(e, n) {
                var r = x(n, 2)
                  , a = r[0]
                  , s = r[1];
                return function(e, t) {
                    return new RegExp("\\[".concat(t, "\\]"),"g").test(e)
                }(t, a) ? e : Object.assign(e, l({}, a, s))
            }
            ), {})
        };
        t.Z = function(e) {
            var t = (0,
            s.useRouter)()
              , n = t.route
              , r = t.query
              , i = t.replace
              , x = t.asPath
              , f = (0,
            o.useRef)("function" === typeof e ? e() : e || {})
              , d = (0,
            o.useMemo)((function() {
                return u({}, f.current, p(r, n))
            }
            ), [n, r])
              , m = (0,
            o.useMemo)((function() {
                return a().stringify(d)
            }
            ), [d])
              , h = (0,
            o.useCallback)((function(e) {
                return i({
                    pathname: new URL(x,"http://localhost/").pathname,
                    query: (0,
                    c.KE)(e)
                }, void 0, {
                    shallow: !0
                })
            }
            ), [x, i])
              , g = (0,
            o.useCallback)((function(e, t) {
                return h("function" === typeof e ? e(d) : u({}, d, l({}, e, t)))
            }
            ), [d, h]);
            return {
                qs: m,
                filters: d,
                setFilters: g
            }
        }
    },
    64145: function(e, t, n) {
        "use strict";
        var r = n(52007)
          , a = n.n(r)
          , s = n(56168)
          , o = n(68804);
        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    c(e, t, n[t])
                }
                ))
            }
            return e
        }
        var l = {
            order: "desc"
        };
        t.Z = function(e) {
            var t = (0,
            s.useState)(i({}, l, e))
              , n = t[0]
              , r = t[1]
              , u = (0,
            s.useMemo)((function() {
                return a().stringify(n)
            }
            ), [n])
              , x = (0,
            s.useCallback)((function(e, t) {
                return r("function" === typeof e ? function(t) {
                    return (0,
                    o.KE)(e(t))
                }
                : function(n) {
                    return (0,
                    o.KE)(i({}, n, c({}, e, t)))
                }
                )
            }
            ), [])
              , p = (0,
            s.useCallback)((function() {
                return r(i({}, l, e))
            }
            ), [e]);
            return {
                sqs: u,
                sorting: n,
                setSorting: x,
                resetSorting: p
            }
        }
    },
    22042: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSG: function() {
                return B
            },
            default: function() {
                return W
            }
        });
        var r = n(8014)
          , a = n(1984)
          , s = n(44453)
          , o = n.n(s)
          , c = n(75657)
          , i = n.n(c)
          , l = n(33542)
          , u = n(20570)
          , x = n.n(u)
          , p = n(56168)
          , f = n(62044)
          , d = n(38925)
          , m = n(37506)
          , h = n(64145)
          , g = n(82013)
          , y = n(25308)
          , b = n(55385)
          , j = n(7755)
          , v = n(66069)
          , w = n(12247)
          , N = n(62114)
          , k = n(62423)
          , O = n(25429)
          , P = n(68804);
        function E(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function Z(e, t, n, r, a, s, o) {
            try {
                var c = e[s](o)
                  , i = c.value
            } catch (l) {
                return void n(l)
            }
            c.done ? t(i) : Promise.resolve(i).then(r, a)
        }
        function S(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function _(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    S(e, t, n[t])
                }
                ))
            }
            return e
        }
        function C(e) {
            return function(e) {
                if (Array.isArray(e))
                    return E(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return E(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return E(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var A = {
            search: ""
        }
          , z = {
            sort: "onchain_market_cap"
        }
          , D = {
            per_page: 50
        }
          , M = function() {
            var e, t, n = (0,
            f.Z)("token").t, a = (0,
            b.Z)(), s = a.qs, c = a.setFilters, u = (0,
            p.useState)(A), E = u[0], M = u[1], T = (0,
            p.useState)(), I = T[0], q = T[1], B = (0,
            h.Z)(z), W = B.sqs, L = B.sorting, $ = B.setSorting, H = B.resetSorting, R = (0,
            w.Z)(D), F = R.pqs, K = R.pagination, U = R.setPagination, G = R.resetPagination, X = (0,
            k.ZP)("fts?".concat(s, "&").concat(W, "&").concat(F)), Q = X.data, V = X.loading, J = (0,
            k.ZP)("fts/count?".concat(s)), Y = J.data, ee = J.loading, te = (null === Q || void 0 === Q ? void 0 : Q.tokens) || [], ne = (null === Y || void 0 === Y || null === (e = Y.tokens) || void 0 === e || null === (t = e[0]) || void 0 === t ? void 0 : t.count) || 0, re = (0,
            p.useRef)(x()(function() {
                var e, t = (e = o().mark((function e(t) {
                    var n;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                (0,
                                k._i)("fts?search=".concat(t, "&per_page=5"));
                            case 2:
                                n = e.sent,
                                q(null === n || void 0 === n ? void 0 : n.tokens);
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )),
                function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, a) {
                        var s = e.apply(t, n);
                        function o(e) {
                            Z(s, r, a, o, c, "next", e)
                        }
                        function c(e) {
                            Z(s, r, a, o, c, "throw", e)
                        }
                        o(void 0)
                    }
                    ))
                }
                );
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(), 500)).current;
            (0,
            p.useEffect)((function() {
                return function() {
                    re.cancel()
                }
            }
            ), [re]);
            var ae = function(e) {
                G(),
                $((function(t) {
                    return _({}, t, {
                        sort: e,
                        order: t.sort === e ? "asc" === t.order ? "desc" : "asc" : "desc"
                    })
                }
                ))
            };
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)("div", {
                    className: "flex flex-row items-center justify-between text-left text-sm text-gray-500 px-3 py-2",
                    children: [ee ? (0,
                    r.jsx)(m.Z, {
                        wrapperClassName: "max-w-lg pl-3"
                    }) : (0,
                    r.jsx)("p", {
                        className: "pl-3",
                        children: n("fts.top.listing", {
                            count: ne
                        })
                    }), (0,
                    r.jsx)("div", {
                        children: (0,
                        r.jsx)("form", {
                            onSubmit: function(e) {
                                e.preventDefault(),
                                H(),
                                G(),
                                c((function(e) {
                                    return _({}, e, E)
                                }
                                ))
                            },
                            className: "flex w-full h-10 sm:w-80 mr-2",
                            children: (0,
                            r.jsxs)(d.hQ, {
                                className: "flex-grow",
                                children: [(0,
                                r.jsx)("label", {
                                    id: "token-search",
                                    children: (0,
                                    r.jsx)(d.gA, {
                                        name: "search",
                                        autoComplete: "off",
                                        placeholder: "Search",
                                        className: "search ml-2 pl-8 token-search bg-white w-full h-full text-sm py-2 outline-none border rounded-lg",
                                        onChange: function(e) {
                                            var t = e.target.name
                                              , n = e.target.value;
                                            re(n),
                                            M((function(e) {
                                                return _({}, e, S({}, t, n))
                                            }
                                            ))
                                        }
                                    })
                                }), (null === I || void 0 === I ? void 0 : I.length) > 0 && (0,
                                r.jsx)(d.SF, {
                                    className: "z-50",
                                    children: (0,
                                    r.jsx)(d.Gk, {
                                        className: "text-xs rounded-b-md -mt-1 bg-white py-2 shadow",
                                        children: I.map((function(e) {
                                            return (0,
                                            r.jsx)(d.O2, {
                                                value: e.name || e.contract,
                                                className: "mx-2 px-2 py-2 hover:bg-gray-100 cursor-pointer hover:border-gray-500 truncate",
                                                children: (0,
                                                r.jsx)(i(), {
                                                    href: "/token/".concat(e.contract),
                                                    children: (0,
                                                    r.jsxs)("a", {
                                                        className: "flex items-center my-1 whitespace-nowrap ",
                                                        children: [(0,
                                                        r.jsx)("div", {
                                                            className: "flex-shrink-0 h-5 w-5 mr-2",
                                                            children: (0,
                                                            r.jsx)(v.Z, {
                                                                src: e.icon,
                                                                alt: e.name,
                                                                className: "h-5 w-5"
                                                            })
                                                        }), (0,
                                                        r.jsxs)("p", {
                                                            className: "font-semibold text-sm truncate",
                                                            children: [e.name, (0,
                                                            r.jsx)("span", {
                                                                className: "text-gray-400 ml-2",
                                                                children: e.symbol
                                                            })]
                                                        })]
                                                    })
                                                })
                                            }, e.contract)
                                        }
                                        ))
                                    })
                                })]
                            })
                        })
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "overflow-x-auto ",
                    children: (0,
                    r.jsxs)("table", {
                        className: "min-w-full divide-y border-t",
                        children: [(0,
                        r.jsx)("thead", {
                            className: "bg-gray-100 h-[51px]",
                            children: (0,
                            r.jsxs)("tr", {
                                children: [(0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "px-6 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                    children: "#"
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "text-left text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                    children: (0,
                                    r.jsxs)("button", {
                                        type: "button",
                                        onClick: function() {
                                            return ae("name")
                                        },
                                        className: "w-full px-6 py-2 text-left text-xs font-semibold uppercase tracking-wider text-green-500 focus:outline-none flex flex-row",
                                        children: ["name" === L.sort && (0,
                                        r.jsx)("div", {
                                            className: "text-gray-500",
                                            children: (0,
                                            r.jsx)(g.Z, {
                                                order: L.order
                                            })
                                        }), n("fts.top.token")]
                                    })
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    children: (0,
                                    r.jsxs)("button", {
                                        type: "button",
                                        onClick: function() {
                                            return ae("price")
                                        },
                                        className: "w-full px-6 py-2 text-left text-xs font-semibold uppercase tracking-wider text-green-500 focus:outline-none flex flex-row",
                                        children: ["price" === L.sort && (0,
                                        r.jsx)("div", {
                                            className: "text-gray-500",
                                            children: (0,
                                            r.jsx)(g.Z, {
                                                order: L.order
                                            })
                                        }), n("fts.top.price")]
                                    })
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    children: (0,
                                    r.jsxs)("button", {
                                        type: "button",
                                        onClick: function() {
                                            return ae("change")
                                        },
                                        className: "w-full px-6 py-2 text-left text-xs font-semibold uppercase tracking-wider text-green-500 focus:outline-none flex flex-row",
                                        children: ["change" === L.sort && (0,
                                        r.jsx)("div", {
                                            className: "text-gray-500",
                                            children: (0,
                                            r.jsx)(g.Z, {
                                                order: L.order
                                            })
                                        }), n("fts.top.change"), "(%)"]
                                    })
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    children: (0,
                                    r.jsxs)("button", {
                                        type: "button",
                                        onClick: function() {
                                            return ae("volume")
                                        },
                                        className: "w-full px-6 py-2 text-left text-xs font-semibold uppercase tracking-wider text-green-500 focus:outline-none flex flex-row",
                                        children: ["volume" === L.sort && (0,
                                        r.jsx)("div", {
                                            className: "text-gray-500",
                                            children: (0,
                                            r.jsx)(g.Z, {
                                                order: L.order
                                            })
                                        }), n("fts.top.volume"), " (24H)"]
                                    })
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    children: (0,
                                    r.jsxs)("button", {
                                        type: "button",
                                        onClick: function() {
                                            return ae("market_cap")
                                        },
                                        className: "w-full px-6 py-2 text-left text-xs font-semibold uppercase tracking-wider text-green-500 focus:outline-none flex flex-row",
                                        children: ["market_cap" === L.sort && (0,
                                        r.jsx)("div", {
                                            className: "text-gray-500",
                                            children: (0,
                                            r.jsx)(g.Z, {
                                                order: L.order
                                            })
                                        }), "Circulating MC", (0,
                                        r.jsx)(l.ZP, {
                                            label: "Calculated by multiplying the number of tokens in circulating supply across all chains with the current market price per token.",
                                            className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                            children: (0,
                                            r.jsx)("div", {
                                                children: (0,
                                                r.jsx)(N.Z, {
                                                    className: "w-4 h-4 fill-current ml-1"
                                                })
                                            })
                                        })]
                                    })
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    children: (0,
                                    r.jsxs)("button", {
                                        type: "button",
                                        onClick: function() {
                                            return ae("onchain_market_cap")
                                        },
                                        className: "w-full px-6 py-2 text-left text-xs font-semibold uppercase tracking-wider text-green-500 focus:outline-none flex flex-row",
                                        children: ["onchain_market_cap" === L.sort && (0,
                                        r.jsx)("div", {
                                            className: "text-gray-500",
                                            children: (0,
                                            r.jsx)(g.Z, {
                                                order: L.order
                                            })
                                        }), "On-Chain MC", (0,
                                        r.jsx)(l.ZP, {
                                            label: "Calculated by multiplying the token's  Total Supply on Near with the current market price per token",
                                            className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                            children: (0,
                                            r.jsx)("div", {
                                                children: (0,
                                                r.jsx)(N.Z, {
                                                    className: "w-4 h-4 fill-current ml-1"
                                                })
                                            })
                                        })]
                                    })
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    children: (0,
                                    r.jsxs)("button", {
                                        type: "button",
                                        onClick: function() {
                                            return ae("holders")
                                        },
                                        className: "w-full px-6 py-2 text-left text-xs font-semibold uppercase tracking-wider text-green-500 focus:outline-none flex flex-row",
                                        children: ["holders" === L.sort && (0,
                                        r.jsx)("div", {
                                            className: "text-gray-500",
                                            children: (0,
                                            r.jsx)(g.Z, {
                                                order: L.order
                                            })
                                        }), "Holders"]
                                    })
                                })]
                            })
                        }), (0,
                        r.jsxs)("tbody", {
                            className: "bg-white divide-y divide-gray-200",
                            children: [V && C(Array(50)).map((function(e, t) {
                                return (0,
                                r.jsxs)("tr", {
                                    className: "hover:bg-blue-900/5 h-[53px]",
                                    children: [(0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 align-top",
                                        children: (0,
                                        r.jsx)(m.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "py-4 whitespace-nowrap text-sm text-gray-500 w-80 align-top",
                                        children: (0,
                                        r.jsx)(m.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 align-top",
                                        children: (0,
                                        r.jsx)(m.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-tiny align-top ",
                                        children: (0,
                                        r.jsx)(m.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 align-top",
                                        children: (0,
                                        r.jsx)(m.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 align-top",
                                        children: (0,
                                        r.jsx)(m.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 align-top",
                                        children: (0,
                                        r.jsx)(m.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 align-top",
                                        children: (0,
                                        r.jsx)(m.Z, {})
                                    })]
                                }, t)
                            }
                            )), !V && 0 === te.length && (0,
                            r.jsx)("tr", {
                                className: "h-[53px]",
                                children: (0,
                                r.jsx)("td", {
                                    colSpan: "100%",
                                    className: "px-6 py-4 text-gray-400 text-xs",
                                    children: n("fts.top.empty")
                                })
                            }), te.map((function(e, t) {
                                return (0,
                                r.jsxs)("tr", {
                                    className: "hover:bg-blue-900/5",
                                    children: [(0,
                                    r.jsx)("td", {
                                        className: "pl-6 py-4 whitespace-nowrap text-sm text-gray-400 align-top",
                                        children: (0,
                                        P.kP)(t, K.page, K.per_page)
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 align-top",
                                        children: (0,
                                        r.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [(0,
                                            r.jsx)(v.Z, {
                                                src: e.icon,
                                                alt: e.name,
                                                className: "w-5 h-5 mr-2"
                                            }), (0,
                                            r.jsx)(i(), {
                                                href: "/token/".concat(e.contract),
                                                children: (0,
                                                r.jsxs)("a", {
                                                    className: "flex text-green-500",
                                                    children: [(0,
                                                    r.jsx)("span", {
                                                        className: "inline-block truncate max-w-[200px] mr-1",
                                                        children: e.name
                                                    }), (0,
                                                    r.jsx)("span", {
                                                        className: "text-gray-400 inline-block truncate max-w-[80px]",
                                                        children: e.symbol
                                                    })]
                                                })
                                            })]
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 align-top",
                                        children: null === e.price ? (0,
                                        r.jsx)("span", {
                                            className: "text-xs",
                                            children: "N/A"
                                        }) : "$".concat((0,
                                        P.bE)(e.price || 0))
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 align-top",
                                        children: null === e.change_24 ? (0,
                                        r.jsx)("span", {
                                            className: "text-xs",
                                            children: "N/A"
                                        }) : e.change_24 > 0 ? (0,
                                        r.jsxs)("div", {
                                            className: "text-neargreen flex flex-row items-center",
                                            children: [(0,
                                            r.jsx)(j.Z, {
                                                className: "h-3 w-3 fill-current mr-1"
                                            }), "+", (0,
                                            P.IB)(e.change_24), "%"]
                                        }) : (0,
                                        r.jsxs)("div", {
                                            className: "text-red-500 flex flex-row items-center",
                                            children: [(0,
                                            r.jsx)(O.Z, {
                                                className: "h-3 w-3 fill-current mr-1"
                                            }), (0,
                                            P.IB)(e.change_24), "%"]
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 align-top",
                                        children: null === e.volume_24h ? (0,
                                        r.jsx)("span", {
                                            className: "text-xs",
                                            children: "N/A"
                                        }) : "$".concat((0,
                                        P.my)(e.volume_24h))
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 align-top",
                                        children: null === e.market_cap ? (0,
                                        r.jsx)("span", {
                                            className: "text-xs",
                                            children: "N/A"
                                        }) : "$".concat((0,
                                        P.my)(e.market_cap))
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 align-top",
                                        children: null === e.onchain_market_cap ? (0,
                                        r.jsx)("span", {
                                            className: "text-xs",
                                            children: "N/A"
                                        }) : "$".concat((0,
                                        P.my)(e.onchain_market_cap))
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 align-top",
                                        children: (0,
                                        P.bE)(e.holders)
                                    })]
                                }, e.contract)
                            }
                            ))]
                        })]
                    })
                }), (0,
                r.jsx)(y.Z, {
                    count: ne,
                    loading: ee,
                    page: K.page,
                    setPage: function(e) {
                        return "function" === typeof e ? U((function(t) {
                            return _({}, t, {
                                page: e(t.page)
                            })
                        }
                        )) : U("page", e)
                    },
                    limit: K.per_page
                })]
            })
        }
          , T = n(9125)
          , I = n(29325)
          , q = function() {
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)(a.default, {
                    children: [(0,
                    r.jsx)("title", {
                        children: "".concat("", " Near Protocol Ecosystem Tokens (NEP-141) | NearBlocks")
                    }), (0,
                    r.jsx)("meta", {
                        name: "title",
                        content: "Near Protocol Ecosystem Tokens (NEP-141) | NearBlocks"
                    }), (0,
                    r.jsx)("meta", {
                        name: "description",
                        content: "A curated list of all NEP-141 Tokens within the Near Protocol Ecoystem. Discover statistics, holders, transaction volume and more."
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:title",
                        content: "Near Protocol Ecosystem Tokens (NEP-141) | NearBlocks"
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:description",
                        content: "A curated list of all NEP-141 Tokens within the Near Protocol Ecoystem. Discover statistics, holders, transaction volume and more."
                    }), (0,
                    r.jsx)("meta", {
                        property: "twitter:title",
                        content: "Near Protocol Ecosystem Tokens (NEP-141) | NearBlocks"
                    }), (0,
                    r.jsx)("meta", {
                        property: "twitter:description",
                        content: "A curated list of all NEP-141 Tokens within the Near Protocol Ecoystem. Discover statistics, holders, transaction volume and more."
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:image",
                        content: "/thumbnail/thumbnail_tokens.png"
                    }), (0,
                    r.jsx)("meta", {
                        property: "twitter:image",
                        content: "/thumbnail/thumbnail_tokens.png"
                    })]
                }), (0,
                r.jsxs)("section", {
                    children: [(0,
                    r.jsx)("div", {
                        className: "bg-hero-pattern h-72",
                        children: (0,
                        r.jsx)("div", {
                            className: "container mx-auto px-3",
                            children: (0,
                            r.jsx)("h1", {
                                className: "mb-4 pt-8 sm:text-2xl text-xl text-white",
                                children: "Near Protocol Ecosystem Tokens (NEP-141)"
                            })
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "container mx-auto px-3 -mt-48",
                        children: (0,
                        r.jsx)("div", {
                            className: "block lg:flex lg:space-x-2",
                            children: (0,
                            r.jsx)("div", {
                                className: "w-full",
                                children: (0,
                                r.jsx)("div", {
                                    className: "bg-white border soft-shadow rounded-lg pb-1",
                                    children: (0,
                                    r.jsx)(M, {})
                                })
                            })
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "py-8",
                        children: (0,
                        r.jsx)(I.Z, {})
                    })]
                })]
            })
        };
        q.Layout = T.Z;
        var B = !0
          , W = q
    },
    24654: function() {}
}, function(e) {
    e.O(0, [5445, 1889, 6509, 3542, 2007, 9125, 9774, 2888, 179], (function() {
        return t = 84755,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);

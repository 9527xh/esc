(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4257], {
    66792: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/tokentxns", function() {
            return n(41150)
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
    25308: function(e, t, n) {
        "use strict";
        var r = n(8014)
          , a = n(62044)
          , s = n(45666)
          , i = n(37506);
        t.Z = function(e) {
            var t = e.page
              , n = e.count
              , c = e.limit
              , l = void 0 === c ? 25 : c
              , o = e.loading
              , x = void 0 !== o && o
              , u = e.setPage
              , d = void 0 === u ? function() {}
            : u
              , p = e.pageLimit
              , m = void 0 === p ? 200 : p
              , f = (0,
            a.Z)("common").t
              , h = +n ? Math.ceil(n / l) : 1;
            h = h > m ? m : h;
            return (0,
            r.jsx)("div", {
                className: "bg-white px-2 py-3 flex items-center justify-between border-t md:px-4",
                children: (0,
                r.jsxs)("div", {
                    className: "sm:flex-1 sm:flex sm:items-center sm:justify-between",
                    children: [(0,
                    r.jsx)("div", {}), x ? (0,
                    r.jsx)(i.Z, {
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
                                    return d(1)
                                },
                                className: "relative inline-flex items-center px-2 ml-1 md:px-3 py-2  text-xs font-medium rounded-md ".concat(t <= 1 ? "text-gray-500" : "text-green-400 hover:bg-green-400 hover:text-white", " bg-gray-100"),
                                children: f("pagination.first")
                            }), (0,
                            r.jsx)("button", {
                                type: "button",
                                disabled: t <= 1 || 1 === h,
                                onClick: function() {
                                    if (t <= 1)
                                        return null;
                                    d((function(e) {
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
                                    d((function(e) {
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
                                    return d(h)
                                },
                                className: "relative inline-flex items-center px-2 ml-1 md:px-3 py-2 text-xs font-medium rounded-md ".concat(t >= h ? "text-gray-500" : "text-green-400 hover:text-white hover:bg-green-400", "  bg-gray-100 "),
                                children: f("pagination.last")
                            })]
                        })
                    })]
                })
            })
        }
    },
    82699: function(e, t, n) {
        "use strict";
        var r = n(8014)
          , a = n(33542)
          , s = n(89043)
          , i = n(68804);
        t.Z = function(e) {
            var t = e.timestamp
              , n = e.showAge
              , c = void 0 === n || n;
            return (0,
            r.jsx)(a.ZP, {
                label: c ? s.Z.utc((0,
                i.Vz)(t || 0)).format("YYYY-MM-DD HH:mm:ss") : (0,
                s.Z)().to((0,
                s.Z)((0,
                i.Vz)(t || 0))),
                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-white text-xs p-2",
                children: (0,
                r.jsx)("span", {
                    children: c ? (0,
                    s.Z)().to((0,
                    s.Z)((0,
                    i.Vz)(t || 0))) : s.Z.utc((0,
                    i.Vz)(t || 0)).format("YYYY-MM-DD HH:mm:ss")
                })
            })
        }
    },
    66069: function(e, t, n) {
        "use strict";
        n.d(t, {
            z: function() {
                return m
            }
        });
        var r = n(44453)
          , a = n.n(r)
          , s = n(8014)
          , i = n(32435)
          , c = n(56168);
        function l(e, t, n, r, a, s, i) {
            try {
                var c = e[s](i)
                  , l = c.value
            } catch (o) {
                return void n(o)
            }
            c.done ? t(l) : Promise.resolve(l).then(r, a)
        }
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function x(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    o(e, t, n[t])
                }
                ))
            }
            return e
        }
        function u(e, t) {
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
        var d = "/images/tokenplaceholder.svg"
          , p = function() {
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
                            i.ZP.get(t ? "".concat(t.replace(/\/+$/, ""), "/").concat(r) : "".concat(r));
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
                    function i(e) {
                        l(s, r, a, i, c, "next", e)
                    }
                    function c(e) {
                        l(s, r, a, i, c, "throw", e)
                    }
                    i(void 0)
                }
                ))
            }
            );
            return function(e) {
                return t.apply(this, arguments)
            }
        }()
          , m = function(e) {
            var t = e.base
              , n = e.media
              , r = e.alt
              , a = e.reference
              , i = u(e, ["base", "media", "alt", "reference"])
              , l = (0,
            c.useState)("")
              , o = l[0]
              , d = l[1]
              , m = (0,
            c.useState)(!0)
              , h = m[0]
              , b = m[1];
            (0,
            c.useEffect)((function() {
                (n || t || a) && p(t || "", n || "", a).then(d)
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
                s.jsx)(f, x({
                    src: o,
                    alt: r
                }, i, {
                    onLoad: function() {
                        return b(!1)
                    }
                }))]
            })
        }
          , f = function(e) {
            var t = e.src
              , n = e.alt
              , r = u(e, ["src", "alt"]);
            return (0,
            s.jsx)("img", x({
                src: t || d,
                alt: n
            }, r, {
                onError: function(e) {
                    e.target.onError = null,
                    e.target.src = d
                }
            }))
        };
        t.Z = f
    },
    87804: function(e, t, n) {
        "use strict";
        var r = n(8014)
          , a = n(45666);
        t.Z = function(e) {
            var t = e.status
              , n = e.showLabel
              , s = void 0 !== n && n
              , i = function(e) {
                switch (e) {
                case null:
                    return {
                        bg: "bg-yellow-50",
                        text: "text-yellow-500",
                        icon: a.lUb,
                        label: "Pending"
                    };
                case !1:
                    return {
                        bg: "bg-red-50",
                        text: "text-red-500",
                        icon: a.G5m,
                        label: "Failure"
                    };
                default:
                    return {
                        bg: "bg-emerald-50",
                        text: "text-emerald-500",
                        icon: a.FJM,
                        label: "Success"
                    }
                }
            }(t)
              , c = i.icon;
            return (0,
            r.jsx)("div", {
                className: "w-full md:w-3/4 break-words",
                children: (0,
                r.jsxs)("span", {
                    className: "inline-flex items-center text-xs rounded py-1 ".concat(i.bg, " ").concat(i.text, " ").concat(s ? " px-2" : " px-1"),
                    children: [(0,
                    r.jsx)(c, {}), s && (0,
                    r.jsx)("span", {
                        className: "ml-2",
                        children: i.label
                    })]
                })
            })
        }
    },
    12247: function(e, t, n) {
        "use strict";
        var r = n(52007)
          , a = n.n(r)
          , s = n(56168)
          , i = n(68804);
        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function l(e) {
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
        var o = {
            page: 1,
            per_page: 25
        };
        t.Z = function(e) {
            var t = (0,
            s.useState)(l({}, o, e))
              , n = t[0]
              , r = t[1]
              , x = (0,
            s.useMemo)((function() {
                return a().stringify(n)
            }
            ), [n])
              , u = (0,
            s.useCallback)((function(e, t) {
                return r("function" === typeof e ? function(t) {
                    return (0,
                    i.KE)(e(t))
                }
                : function(n) {
                    return (0,
                    i.KE)(l({}, n, c({}, e, t)))
                }
                )
            }
            ), [])
              , d = (0,
            s.useCallback)((function() {
                return r(l({}, o, e))
            }
            ), [e]);
            return {
                pqs: x,
                pagination: n,
                setPagination: u,
                resetPagination: d
            }
        }
    },
    41150: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSG: function() {
                return Z
            },
            default: function() {
                return O
            }
        });
        var r = n(8014)
          , a = n(1984)
          , s = n(62044)
          , i = n(9125)
          , c = n(29325)
          , l = n(75657)
          , o = n.n(l)
          , x = n(56168)
          , u = n(33542)
          , d = n(45666)
          , p = n(62423)
          , m = n(37506)
          , f = n(25308)
          , h = n(82699)
          , b = n(66069)
          , g = n(12247)
          , y = n(68804)
          , j = n(87804);
        function w(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function v(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function N(e) {
            return function(e) {
                if (Array.isArray(e))
                    return w(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return w(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return w(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var k = function() {
            var e, t, n = (0,
            s.Z)("token").t, a = (0,
            x.useState)(!0), i = a[0], c = a[1], l = (0,
            g.Z)(), w = l.pqs, k = l.pagination, _ = l.setPagination, Z = (0,
            p.ZP)("fts/txns?".concat(w)), O = Z.data, P = Z.loading, S = (0,
            p.ZP)("fts/txns/count"), E = S.data, z = S.loading, C = (null === O || void 0 === O ? void 0 : O.txns) || [], D = (null === E || void 0 === E || null === (e = E.txns) || void 0 === e || null === (t = e[0]) || void 0 === t ? void 0 : t.count) || 0;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [z ? (0,
                r.jsx)(m.Z, {
                    className: "leading-7",
                    wrapperClassName: "pl-3 max-w-sm py-4 h-[60px]"
                }) : (0,
                r.jsx)("div", {
                    className: "flex flex-col lg:flex-row pt-4",
                    children: (0,
                    r.jsx)("div", {
                        className: "flex flex-col",
                        children: (0,
                        r.jsxs)("p", {
                            className: "leading-7 px-6 text-sm mb-4 text-gray-500",
                            children: ["A total of ", (0,
                            y.bE)(D), " transactions found"]
                        })
                    })
                }), (0,
                r.jsx)("div", {
                    className: "overflow-x-auto ",
                    children: (0,
                    r.jsxs)("table", {
                        className: "min-w-full divide-y border-t",
                        children: [(0,
                        r.jsx)("thead", {
                            className: "bg-gray-100",
                            children: (0,
                            r.jsxs)("tr", {
                                children: [(0,
                                r.jsx)("th", {
                                    scope: "col"
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "px-5 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                    children: n("hash")
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "px-5 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                    children: n("type")
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "px-5 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                    children: n("from")
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col"
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "px-5 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                    children: n("to")
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "px-5 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap",
                                    children: "Quantity"
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "px-5 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                    children: "Token"
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    children: (0,
                                    r.jsx)("div", {
                                        className: "w-full inline-flex px-5 py-4",
                                        children: (0,
                                        r.jsx)("button", {
                                            type: "button",
                                            onClick: function() {
                                                return c((function(e) {
                                                    return !e
                                                }
                                                ))
                                            },
                                            className: "text-left text-xs w-full font-semibold uppercase tracking-wider text-green-600 focus:outline-none",
                                            children: n(i ? "fts.age" : "fts.ageDT")
                                        })
                                    })
                                })]
                            })
                        }), (0,
                        r.jsxs)("tbody", {
                            className: "bg-white divide-y divide-gray-200",
                            children: [P && N(Array(25)).map((function(e, t) {
                                return (0,
                                r.jsxs)("tr", {
                                    className: "hover:bg-blue-900/5 h-[57px]",
                                    children: [(0,
                                    r.jsx)("td", {
                                        className: "pl-5 pr-2 py-4 whitespace-nowrap text-sm text-gray-500 flex justify-end ",
                                        children: (0,
                                        r.jsx)(m.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(m.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(m.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-tiny ",
                                        children: (0,
                                        r.jsx)(m.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(m.Z, {
                                            wrapperClassName: "w-16"
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(m.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(m.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(m.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(m.Z, {})
                                    })]
                                }, t)
                            }
                            )), !P && 0 === C.length && (0,
                            r.jsx)("tr", {
                                className: "h-[57px]",
                                children: (0,
                                r.jsx)("td", {
                                    colSpan: "100%",
                                    className: "px-6 py-4 text-gray-400 text-xs",
                                    children: n("noTxns")
                                })
                            }), C.map((function(e) {
                                var t, a, s, c, l, x, p;
                                return (0,
                                r.jsxs)("tr", {
                                    className: "h-[57px] hover:bg-blue-900/5",
                                    children: [(0,
                                    r.jsx)("td", {
                                        className: "pl-5 pr-2 py-4 whitespace-nowrap text-sm text-gray-500 flex justify-end ",
                                        children: (0,
                                        r.jsx)(j.Z, {
                                            status: e.outcomes.status
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(u.ZP, {
                                            label: e.transaction_hash,
                                            className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-white text-xs p-2 break-words",
                                            children: (0,
                                            r.jsx)("span", {
                                                className: "truncate max-w-[120px] inline-block align-bottom text-green-500",
                                                children: (0,
                                                r.jsx)(o(), {
                                                    href: "/txns-hs.html?hs=".concat(e.transaction_hash),
                                                    children: (0,
                                                    r.jsx)("a", {
                                                        className: "text-green-500 font-medium",
                                                        children: e.transaction_hash
                                                    })
                                                })
                                            })
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(u.ZP, {
                                            label: e.event_kind,
                                            className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-white text-xs p-2 break-words",
                                            children: (0,
                                            r.jsx)("span", {
                                                className: "bg-blue-900/10 text-xs text-gray-500 rounded-xl px-2 py-1 max-w-[120px] inline-flex truncate",
                                                children: (0,
                                                r.jsx)("span", {
                                                    className: "block truncate",
                                                    children: e.event_kind
                                                })
                                            })
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500 font-medium",
                                        children: e.token_old_owner_account_id ? (0,
                                        r.jsx)(u.ZP, {
                                            label: e.token_old_owner_account_id,
                                            className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-white text-xs p-2 break-words",
                                            children: (0,
                                            r.jsx)("span", {
                                                className: "truncate max-w-[120px] inline-block align-bottom text-green-500",
                                                children: (0,
                                                r.jsx)(o(), {
                                                    href: "/address/".concat(e.token_old_owner_account_id),
                                                    children: (0,
                                                    r.jsx)("a", {
                                                        className: "text-green-500",
                                                        children: e.token_old_owner_account_id
                                                    })
                                                })
                                            })
                                        }) : "system"
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "text-center",
                                        children: e.token_old_owner_account_id === e.token_new_owner_account_id ? (0,
                                        r.jsx)("span", {
                                            className: "uppercase rounded w-10 py-2 h-6 inline-flex items-center justify-center bg-green-200 text-white text-sm font-semibold",
                                            children: n("txnSelf")
                                        }) : (0,
                                        r.jsx)("div", {
                                            className: "w-5 h-5 p-1 bg-green-100 rounded-full text-center flex justify-center items-center mx-auto text-white",
                                            children: (0,
                                            r.jsx)(d.e7O, {})
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500 font-medium",
                                        children: e.token_new_owner_account_id ? (0,
                                        r.jsx)(u.ZP, {
                                            label: e.token_new_owner_account_id,
                                            className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-white text-xs p-2 break-words",
                                            children: (0,
                                            r.jsx)("span", {
                                                className: "truncate max-w-[120px] inline-block align-bottom text-green-500",
                                                children: (0,
                                                r.jsx)(o(), {
                                                    href: "/address/".concat(e.token_new_owner_account_id),
                                                    children: (0,
                                                    r.jsx)("a", {
                                                        className: "text-green-500",
                                                        children: e.token_new_owner_account_id
                                                    })
                                                })
                                            })
                                        }) : "system"
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        y.QU)(e.amount, null === (t = e.ft) || void 0 === t ? void 0 : t.decimals)
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: e.ft && (0,
                                        r.jsxs)("div", {
                                            className: "flex flex-row items-center",
                                            children: [(0,
                                            r.jsx)("span", {
                                                className: "inline-flex mr-1",
                                                children: (0,
                                                r.jsx)(b.Z, {
                                                    src: null === (a = e.ft) || void 0 === a ? void 0 : a.icon,
                                                    alt: null === (s = e.ft) || void 0 === s ? void 0 : s.name,
                                                    className: "w-4 h-4"
                                                })
                                            }), (0,
                                            r.jsx)(u.ZP, {
                                                label: null === (c = e.ft) || void 0 === c ? void 0 : c.name,
                                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-white text-xs p-2 break-words",
                                                children: (0,
                                                r.jsx)("div", {
                                                    className: "text-sm text-gray-500 max-w-[110px] inline-block truncate",
                                                    children: (0,
                                                    r.jsx)(o(), {
                                                        href: "/token/".concat(null === (l = e.ft) || void 0 === l ? void 0 : l.contract),
                                                        children: (0,
                                                        r.jsx)("a", {
                                                            className: "text-green-500 font-medium",
                                                            children: null === (x = e.ft) || void 0 === x ? void 0 : x.name
                                                        })
                                                    })
                                                })
                                            }), (null === (p = e.ft) || void 0 === p ? void 0 : p.symbol) && (0,
                                            r.jsx)(u.ZP, {
                                                label: e.ft.symbol,
                                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-white text-xs p-2 break-words",
                                                children: (0,
                                                r.jsxs)("div", {
                                                    className: "text-sm text-gray-400 max-w-[80px] inline-block truncate",
                                                    children: ["\xa0 ", e.ft.symbol]
                                                })
                                            })]
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(h.Z, {
                                            timestamp: e.block_timestamp,
                                            showAge: i
                                        })
                                    })]
                                }, e.key)
                            }
                            ))]
                        })]
                    })
                }), (0,
                r.jsx)(f.Z, {
                    count: D,
                    loading: z,
                    page: k.page,
                    setPage: function(e) {
                        return "function" === typeof e ? _((function(t) {
                            return function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {}
                                      , r = Object.keys(n);
                                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }
                                    )))),
                                    r.forEach((function(t) {
                                        v(e, t, n[t])
                                    }
                                    ))
                                }
                                return e
                            }({}, t, {
                                page: e(t.page)
                            })
                        }
                        )) : _("page", e)
                    },
                    limit: k.per_page
                })]
            })
        }
          , _ = function() {
            var e = (0,
            s.Z)("token").t;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)(a.default, {
                    children: [(0,
                    r.jsx)("title", {
                        children: "".concat("", " ").concat(e("fts.metaTitle"), " ")
                    }), (0,
                    r.jsx)("meta", {
                        name: "title",
                        content: e("fts.metaTitle")
                    }), (0,
                    r.jsx)("meta", {
                        name: "description",
                        content: e("fts.metaDescription")
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:title",
                        content: e("fts.metaTitle")
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:description",
                        content: e("fts.metaDescription")
                    }), (0,
                    r.jsx)("meta", {
                        property: "twitter:title",
                        content: e("fts.metaTitle")
                    }), (0,
                    r.jsx)("meta", {
                        property: "twitter:description",
                        content: e("fts.metaDescription")
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:image",
                        content: "/thumbnail/thumbnail_tokentxns.png"
                    }), (0,
                    r.jsx)("meta", {
                        property: "twitter:image",
                        content: "/thumbnail/thumbnail_tokentxns.png"
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
                                children: e("fts.heading")
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
                                    r.jsx)(k, {})
                                })
                            })
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "py-8",
                        children: (0,
                        r.jsx)(c.Z, {})
                    })]
                })]
            })
        };
        _.Layout = i.Z;
        var Z = !0
          , O = _
    },
    24654: function() {}
}, function(e) {
    e.O(0, [5445, 1889, 6509, 3542, 2007, 9125, 9774, 2888, 179], (function() {
        return t = 66792,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);

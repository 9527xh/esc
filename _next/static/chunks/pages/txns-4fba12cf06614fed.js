(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4082], {
    7202: function(e, t) {
        "use strict";
        var n = "function" === typeof Symbol && Symbol.for
          , r = n ? Symbol.for("react.element") : 60103
          , s = n ? Symbol.for("react.portal") : 60106
          , a = n ? Symbol.for("react.fragment") : 60107
          , c = n ? Symbol.for("react.strict_mode") : 60108
          , o = n ? Symbol.for("react.profiler") : 60114
          , l = n ? Symbol.for("react.provider") : 60109
          , i = n ? Symbol.for("react.context") : 60110
          , x = n ? Symbol.for("react.async_mode") : 60111
          , u = n ? Symbol.for("react.concurrent_mode") : 60111
          , d = n ? Symbol.for("react.forward_ref") : 60112
          , m = n ? Symbol.for("react.suspense") : 60113
          , f = n ? Symbol.for("react.suspense_list") : 60120
          , p = n ? Symbol.for("react.memo") : 60115
          , h = n ? Symbol.for("react.lazy") : 60116
          , y = n ? Symbol.for("react.block") : 60121
          , b = n ? Symbol.for("react.fundamental") : 60117
          , j = n ? Symbol.for("react.responder") : 60118
          , g = n ? Symbol.for("react.scope") : 60119;
        function w(e) {
            if ("object" === typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                case r:
                    switch (e = e.type) {
                    case x:
                    case u:
                    case a:
                    case o:
                    case c:
                    case m:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                        case i:
                        case d:
                        case h:
                        case p:
                        case l:
                            return e;
                        default:
                            return t
                        }
                    }
                case s:
                    return t
                }
            }
        }
        function v(e) {
            return w(e) === u
        }
        t.AsyncMode = x,
        t.ConcurrentMode = u,
        t.ContextConsumer = i,
        t.ContextProvider = l,
        t.Element = r,
        t.ForwardRef = d,
        t.Fragment = a,
        t.Lazy = h,
        t.Memo = p,
        t.Portal = s,
        t.Profiler = o,
        t.StrictMode = c,
        t.Suspense = m,
        t.isAsyncMode = function(e) {
            return v(e) || w(e) === x
        }
        ,
        t.isConcurrentMode = v,
        t.isContextConsumer = function(e) {
            return w(e) === i
        }
        ,
        t.isContextProvider = function(e) {
            return w(e) === l
        }
        ,
        t.isElement = function(e) {
            return "object" === typeof e && null !== e && e.$$typeof === r
        }
        ,
        t.isForwardRef = function(e) {
            return w(e) === d
        }
        ,
        t.isFragment = function(e) {
            return w(e) === a
        }
        ,
        t.isLazy = function(e) {
            return w(e) === h
        }
        ,
        t.isMemo = function(e) {
            return w(e) === p
        }
        ,
        t.isPortal = function(e) {
            return w(e) === s
        }
        ,
        t.isProfiler = function(e) {
            return w(e) === o
        }
        ,
        t.isStrictMode = function(e) {
            return w(e) === c
        }
        ,
        t.isSuspense = function(e) {
            return w(e) === m
        }
        ,
        t.isValidElementType = function(e) {
            return "string" === typeof e || "function" === typeof e || e === a || e === u || e === o || e === c || e === m || e === f || "object" === typeof e && null !== e && (e.$$typeof === h || e.$$typeof === p || e.$$typeof === l || e.$$typeof === i || e.$$typeof === d || e.$$typeof === b || e.$$typeof === j || e.$$typeof === g || e.$$typeof === y)
        }
        ,
        t.typeOf = w
    },
    2258: function(e, t, n) {
        "use strict";
        e.exports = n(7202)
    },
    88458: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/txns", function() {
            return n(1200)
        }
        ])
    },
    29325: function(e, t, n) {
        "use strict";
        var r = n(8014)
          , s = n(56168);
        t.Z = function() {
            var e = (0,
            s.useState)(!1)
              , t = e[0]
              , n = e[1];
            return (0,
            s.useEffect)((function() {
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
    87804: function(e, t, n) {
        "use strict";
        var r = n(8014)
          , s = n(45666);
        t.Z = function(e) {
            var t = e.status
              , n = e.showLabel
              , a = void 0 !== n && n
              , c = function(e) {
                switch (e) {
                case null:
                    return {
                        bg: "bg-yellow-50",
                        text: "text-yellow-500",
                        icon: s.lUb,
                        label: "Pending"
                    };
                case !1:
                    return {
                        bg: "bg-red-50",
                        text: "text-red-500",
                        icon: s.G5m,
                        label: "Failure"
                    };
                default:
                    return {
                        bg: "bg-emerald-50",
                        text: "text-emerald-500",
                        icon: s.FJM,
                        label: "Success"
                    }
                }
            }(t)
              , o = c.icon;
            return (0,
            r.jsx)("div", {
                className: "w-full md:w-3/4 break-words",
                children: (0,
                r.jsxs)("span", {
                    className: "inline-flex items-center text-xs rounded py-1 ".concat(c.bg, " ").concat(c.text, " ").concat(a ? " px-2" : " px-1"),
                    children: [(0,
                    r.jsx)(o, {}), a && (0,
                    r.jsx)("span", {
                        className: "ml-2",
                        children: c.label
                    })]
                })
            })
        }
    },
    55385: function(e, t, n) {
        "use strict";
        var r = n(52007)
          , s = n.n(r)
          , a = n(75332)
          , c = n(56168)
          , o = n(68804);
        function l(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function i(e, t, n) {
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
                    i(e, t, n[t])
                }
                ))
            }
            return e
        }
        function u(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, s, a = [], c = !0, o = !1;
                    try {
                        for (n = n.call(e); !(c = (r = n.next()).done) && (a.push(r.value),
                        !t || a.length !== t); c = !0)
                            ;
                    } catch (l) {
                        o = !0,
                        s = l
                    } finally {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (o)
                                throw s
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return l(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return l(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var d = function(e, t) {
            return Object.entries(e).reduce((function(e, n) {
                var r = u(n, 2)
                  , s = r[0]
                  , a = r[1];
                return function(e, t) {
                    return new RegExp("\\[".concat(t, "\\]"),"g").test(e)
                }(t, s) ? e : Object.assign(e, i({}, s, a))
            }
            ), {})
        };
        t.Z = function(e) {
            var t = (0,
            a.useRouter)()
              , n = t.route
              , r = t.query
              , l = t.replace
              , u = t.asPath
              , m = (0,
            c.useRef)("function" === typeof e ? e() : e || {})
              , f = (0,
            c.useMemo)((function() {
                return x({}, m.current, d(r, n))
            }
            ), [n, r])
              , p = (0,
            c.useMemo)((function() {
                return s().stringify(f)
            }
            ), [f])
              , h = (0,
            c.useCallback)((function(e) {
                return l({
                    pathname: new URL(u,"http://localhost/").pathname,
                    query: (0,
                    o.KE)(e)
                }, void 0, {
                    shallow: !0
                })
            }
            ), [u, l])
              , y = (0,
            c.useCallback)((function(e, t) {
                return h("function" === typeof e ? e(f) : x({}, f, i({}, e, t)))
            }
            ), [f, h]);
            return {
                qs: p,
                filters: f,
                setFilters: y
            }
        }
    },
    1200: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSG: function() {
                return M
            },
            default: function() {
                return z
            }
        });
        var r = n(8014)
          , s = n(1984)
          , a = n(62044)
          , c = n(9125)
          , o = n(29325)
          , l = n(75657)
          , i = n.n(l)
          , x = n(56168)
          , u = n(33542)
          , d = n(45666)
          , m = n(92953)
          , f = n(62423)
          , p = n(37506)
          , h = n(52726)
          , y = n(64145)
          , b = n(82013)
          , j = n(96671)
          , g = n(25308)
          , w = n(82699)
          , v = n(55385)
          , N = n(12247)
          , S = n(4661)
          , _ = n(68804)
          , k = n(87804);
        function Z(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function O(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function P(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    O(e, t, n[t])
                }
                ))
            }
            return e
        }
        function C(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Z(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return Z(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return Z(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var $ = {
            action: "",
            method: "",
            from: "",
            to: ""
        }
          , E = function() {
            var e, t, n = (0,
            a.Z)("txns").t, s = (0,
            x.useState)(!0), c = s[0], o = s[1], l = (0,
            x.useState)($), Z = l[0], E = l[1], A = (0,
            v.Z)(), M = A.qs, z = A.filters, F = A.setFilters, T = (0,
            y.Z)(), q = T.sqs, D = T.sorting, L = T.setSorting, I = T.resetSorting, R = (0,
            N.Z)(), W = R.pqs, G = R.pagination, U = R.setPagination, H = R.resetPagination, B = (0,
            f.ZP)("txns?".concat(M, "&").concat(q, "&").concat(W)), V = B.data, X = B.loading, J = (0,
            f.ZP)("txns/count?".concat(M)), K = J.data, Q = J.loading, Y = (null === V || void 0 === V ? void 0 : V.txns) || [], ee = (null === K || void 0 === K || null === (e = K.txns) || void 0 === e || null === (t = e[0]) || void 0 === t ? void 0 : t.count) || 0, te = function(e) {
                var t = e.target.name
                  , n = e.target.value;
                return "type" === t ? (0,
                S.LG)(n) ? E((function(e) {
                    return P({}, e, {
                        action: n,
                        method: ""
                    })
                }
                )) : E((function(e) {
                    return P({}, e, {
                        method: n,
                        action: ""
                    })
                }
                )) : E((function(e) {
                    return P({}, e, O({}, t, n))
                }
                ))
            }, ne = function(e) {
                e.preventDefault(),
                I(),
                H(),
                F((function(e) {
                    return P({}, e, Z)
                }
                ))
            }, re = function(e) {
                var t = e.target.name;
                if (I(),
                H(),
                "type" === t)
                    return E((function(e) {
                        return P({}, e, {
                            action: "",
                            method: ""
                        })
                    }
                    )),
                    F((function(e) {
                        return P({}, e, {
                            action: void 0,
                            method: void 0
                        })
                    }
                    ));
                E((function(e) {
                    return P({}, e, O({}, t, ""))
                }
                )),
                F((function(e) {
                    return P({}, e, O({}, t, void 0))
                }
                ))
            };
            return (0,
            r.jsxs)(r.Fragment, {
                children: [Q ? (0,
                r.jsx)(p.Z, {
                    className: "leading-7",
                    wrapperClassName: "pl-6 max-w-sm py-4 h-[60px]"
                }) : (0,
                r.jsxs)("div", {
                    className: "flex flex-col lg:flex-row pt-4",
                    children: [(0,
                    r.jsx)("div", {
                        className: "flex flex-col",
                        children: (0,
                        r.jsx)("p", {
                            className: "leading-7 pl-6 text-sm mb-4 text-gray-500",
                            children: n("listing", {
                                count: (0,
                                _.bE)(ee)
                            })
                        })
                    }), (0,
                    r.jsx)(h.Z, {
                        filters: z,
                        onClear: function() {
                            var e, t = (e = Object).assign.apply(e, C(Object.keys(z).map((function(e) {
                                return O({}, e, void 0)
                            }
                            ))));
                            I(),
                            H(),
                            E($),
                            F((function(e) {
                                return P({}, e, t)
                            }
                            ))
                        }
                    })]
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
                                    className: "px-5 py-4 text-left text-xs font-semibold text-nearblue-600 uppercase tracking-wider",
                                    children: n("hash")
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    children: (0,
                                    r.jsxs)(m.v2, {
                                        children: [(0,
                                        r.jsxs)(m.j2, {
                                            className: "flex items-center px-6 py-4 text-left text-xs font-semibold text-nearblue-600 uppercase tracking-wider focus:outline-none",
                                            children: [n("type"), " ", (0,
                                            r.jsx)(j.Z, {
                                                className: "h-4 w-4 fill-current ml-2"
                                            })]
                                        }), (0,
                                        r.jsx)(m.qy, {
                                            className: "bg-white shadow-lg border rounded-b-lg p-2",
                                            children: (0,
                                            r.jsxs)("form", {
                                                onSubmit: ne,
                                                className: "flex flex-col",
                                                children: [(0,
                                                r.jsx)("input", {
                                                    name: "type",
                                                    value: Z.action || Z.method,
                                                    onChange: te,
                                                    placeholder: "Search by method",
                                                    className: "border rounded h-8 mb-2 px-2 text-gray-500 text-xs"
                                                }), (0,
                                                r.jsxs)("div", {
                                                    className: "flex",
                                                    children: [(0,
                                                    r.jsxs)("button", {
                                                        type: "submit",
                                                        className: "flex items-center justify-center flex-1 rounded bg-green-500 h-7 text-white text-xs mr-2",
                                                        children: [(0,
                                                        r.jsx)(j.Z, {
                                                            className: "h-3 w-3 fill-current mr-2"
                                                        }), " ", n("filter.filter")]
                                                    }), (0,
                                                    r.jsx)("button", {
                                                        name: "type",
                                                        type: "button",
                                                        onClick: re,
                                                        className: "flex-1 rounded bg-gray-300 text-xs h-7",
                                                        children: n("filter.clear")
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "px-5 py-4 text-left text-xs font-semibold text-nearblue-600 uppercase tracking-wider whitespace-nowrap",
                                    children: n("depositValue")
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "px-5 py-4 text-left text-xs font-semibold text-nearblue-600 uppercase tracking-wider",
                                    children: n("txnFee")
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    children: (0,
                                    r.jsxs)(m.v2, {
                                        children: [(0,
                                        r.jsxs)(m.j2, {
                                            className: "flex items-center px-6 py-4 text-left text-xs font-semibold text-nearblue-600 uppercase tracking-wider focus:outline-none",
                                            children: [n("from"), " ", (0,
                                            r.jsx)(j.Z, {
                                                className: "h-4 w-4 fill-current ml-2"
                                            })]
                                        }), (0,
                                        r.jsx)(m.qy, {
                                            className: "bg-white shadow-lg border rounded-b-lg p-2",
                                            children: (0,
                                            r.jsxs)("form", {
                                                onSubmit: ne,
                                                className: "flex flex-col",
                                                children: [(0,
                                                r.jsx)("input", {
                                                    name: "from",
                                                    value: Z.from,
                                                    onChange: te,
                                                    placeholder: n("filter.placeholder"),
                                                    className: "border rounded h-8 mb-2 px-2 text-gray-500 text-xs"
                                                }), (0,
                                                r.jsxs)("div", {
                                                    className: "flex",
                                                    children: [(0,
                                                    r.jsxs)("button", {
                                                        type: "submit",
                                                        className: "flex items-center justify-center flex-1 rounded bg-green-500 h-7 text-white text-xs mr-2",
                                                        children: [(0,
                                                        r.jsx)(j.Z, {
                                                            className: "h-3 w-3 fill-current mr-2"
                                                        }), " ", n("filter.filter")]
                                                    }), (0,
                                                    r.jsx)("button", {
                                                        name: "from",
                                                        type: "button",
                                                        onClick: re,
                                                        className: "flex-1 rounded bg-gray-300 text-xs h-7",
                                                        children: n("filter.clear")
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col"
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    children: (0,
                                    r.jsxs)(m.v2, {
                                        children: [(0,
                                        r.jsxs)(m.j2, {
                                            className: "flex items-center px-6 py-4 text-left text-xs font-semibold text-nearblue-600 uppercase tracking-wider focus:outline-none",
                                            children: [n("to"), " ", (0,
                                            r.jsx)(j.Z, {
                                                className: "h-4 w-4 fill-current ml-2"
                                            })]
                                        }), (0,
                                        r.jsx)(m.qy, {
                                            className: "bg-white shadow-lg border rounded-b-lg p-2",
                                            children: (0,
                                            r.jsxs)("form", {
                                                onSubmit: ne,
                                                className: "flex flex-col",
                                                children: [(0,
                                                r.jsx)("input", {
                                                    name: "to",
                                                    value: Z.to,
                                                    onChange: te,
                                                    placeholder: n("filter.placeholder"),
                                                    className: "border rounded h-8 mb-2 px-2 text-gray-500 text-xs"
                                                }), (0,
                                                r.jsxs)("div", {
                                                    className: "flex",
                                                    children: [(0,
                                                    r.jsxs)("button", {
                                                        type: "submit",
                                                        className: "flex items-center justify-center flex-1 rounded bg-green-500 h-7 text-white text-xs mr-2",
                                                        children: [(0,
                                                        r.jsx)(j.Z, {
                                                            className: "h-3 w-3 fill-current mr-2"
                                                        }), " ", n("filter.filter")]
                                                    }), (0,
                                                    r.jsx)("button", {
                                                        name: "to",
                                                        type: "button",
                                                        onClick: re,
                                                        className: "flex-1 rounded bg-gray-300 text-xs h-7",
                                                        children: n("filter.clear")
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "px-5 py-4 text-left text-xs font-semibold text-nearblue-600 uppercase tracking-wider whitespace-nowrap",
                                    children: n("blockHeight")
                                }), (0,
                                r.jsx)("th", {
                                    className: "inline-flex",
                                    scope: "col",
                                    children: (0,
                                    r.jsxs)("div", {
                                        className: "w-full inline-flex px-5 py-4",
                                        children: [(0,
                                        r.jsx)("button", {
                                            type: "button",
                                            onClick: function() {
                                                return o((function(e) {
                                                    return !e
                                                }
                                                ))
                                            },
                                            className: "text-left text-xs w-full font-semibold uppercase tracking-wider text-nearblue-600 focus:outline-none",
                                            children: n(c ? "age" : "ageDT")
                                        }), (0,
                                        r.jsx)("button", {
                                            type: "button",
                                            onClick: function() {
                                                H(),
                                                L((function(e) {
                                                    return P({}, e, {
                                                        order: "asc" === e.order ? "desc" : "asc"
                                                    })
                                                }
                                                ))
                                            },
                                            className: "px-2",
                                            children: (0,
                                            r.jsx)("div", {
                                                className: "text-gray-500 font-semibold",
                                                children: (0,
                                                r.jsx)(b.Z, {
                                                    order: D.order
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0,
                        r.jsxs)("tbody", {
                            className: "bg-white divide-y divide-gray-200",
                            children: [X && C(Array(25)).map((function(e, t) {
                                return (0,
                                r.jsxs)("tr", {
                                    className: "hover:bg-blue-900/5 h-[57px]",
                                    children: [(0,
                                    r.jsx)("td", {
                                        className: "pl-5 pr-2 py-4 whitespace-nowrap text-sm text-gray-500 flex justify-end ",
                                        children: (0,
                                        r.jsx)(p.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(p.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(p.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-tiny ",
                                        children: (0,
                                        r.jsx)(p.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(p.Z, {
                                            wrapperClassName: "w-16"
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(p.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(p.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(p.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(p.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(p.Z, {})
                                    })]
                                }, t)
                            }
                            )), !X && 0 === Y.length && (0,
                            r.jsx)("tr", {
                                className: "h-[57px]",
                                children: (0,
                                r.jsx)("td", {
                                    colSpan: "100%",
                                    className: "px-6 py-4 text-gray-400 text-xs",
                                    children: n("noTxns")
                                })
                            }), Y.map((function(e) {
                                var t, s, a;
                                return (0,
                                r.jsxs)("tr", {
                                    className: "h-[57px] hover:bg-blue-900/5",
                                    children: [(0,
                                    r.jsx)("td", {
                                        className: "pl-5 pr-2 py-4 whitespace-nowrap text-sm text-gray-500 flex justify-end ",
                                        children: (0,
                                        r.jsx)(k.Z, {
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
                                                r.jsx)(i(), {
                                                    href: "/txns-hs.html?hs=".concat(e.transaction_hash),
                                                    children: (0,
                                                    r.jsx)("a", {
                                                        className: "text-green-500 font-medium",
                                                        children: "e".concat(e.transaction_hash)
                                                    })
                                                })
                                            })
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(u.ZP, {
                                            label: (0,
                                            S.EW)(e.actions, n),
                                            className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-white text-xs p-2 break-words",
                                            children: (0,
                                            r.jsx)("span", {
                                                className: "bg-blue-900/10 text-xs text-gray-500 rounded-xl px-2 py-1 max-w-[120px] inline-flex truncate",
                                                children: (0,
                                                r.jsx)("span", {
                                                    className: "block truncate",
                                                    children: (0,
                                                    S.EW)(e.actions, n)
                                                })
                                            })
                                        })
                                    }), (0,
                                    r.jsxs)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: [(0,
                                        _.xB)((null === (t = e.actions_agg) || void 0 === t ? void 0 : t.deposit) || 0), " \u24c3"]
                                    }), (0,
                                    r.jsxs)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: [(0,
                                            _.xB)((null === (s = e.outcomes_agg) || void 0 === s ? void 0 : s.transaction_fee) || 0), " \u24c3"]
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500 font-medium",
                                        children: (0,
                                        r.jsx)(u.ZP, {
                                            label: e.signer_account_id,
                                            className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-white text-xs p-2 break-words",
                                            children: (0,
                                            r.jsx)("span", {
                                                className: "truncate max-w-[120px] inline-block align-bottom text-green-500",
                                                children: (0,
                                                r.jsx)("span", {
                                                    href: "/address/".concat(e.signer_account_id),
                                                    children: (0,
                                                    r.jsx)("a", {
                                                        className: "text-green-500",
                                                        children: e.signer_account_id
                                                    })
                                                })
                                            })
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        children: (0,
                                        r.jsx)("div", {
                                            className: "w-5 h-5 p-1 bg-green-100 rounded-full text-center flex justify-center items-center mx-auto text-white",
                                            children: (0,
                                            r.jsx)(d.e7O, {})
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500 font-medium",
                                        children: (0,
                                        r.jsx)(u.ZP, {
                                            label: e.receiver_account_id,
                                            className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-white text-xs p-2 break-words",
                                            children: (0,
                                            r.jsx)("span", {
                                                className: "truncate max-w-[120px] inline-block align-bottom text-green-500",
                                                children: (0,
                                                r.jsx)("span", {
                                                    href: "/address/".concat(e.receiver_account_id),
                                                    children: (0,
                                                    r.jsx)("a", {
                                                        className: "text-green-500",
                                                        children: e.receiver_account_id
                                                    })
                                                })
                                            })
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500 font-medium",
                                        children: (0,
                                        r.jsx)(i(), {
                                            href: "/blocks-hs.html?hs=".concat(e.included_in_block_hash),
                                            children: (0,
                                            r.jsx)("a", {
                                                className: "text-green-500",
                                                children: (0,
                                                _.bE)(null === (a = e.block) || void 0 === a ? void 0 : a.block_height)
                                            })
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-5 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(w.Z, {
                                            timestamp: e.block_timestamp,
                                            showAge: c
                                        })
                                    })]
                                }, e.transaction_hash)
                            }
                            ))]
                        })]
                    })
                }), (0,
                r.jsx)(g.Z, {
                    count: ee,
                    loading: Q,
                    page: G.page,
                    setPage: function(e) {
                        return "function" === typeof e ? U((function(t) {
                            return P({}, t, {
                                page: e(t.page)
                            })
                        }
                        )) : U("page", e)
                    },
                    limit: G.per_page
                })]
            })
        }
          , A = function() {
            var e = (0,
            a.Z)("txns").t;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)(s.default, {
                    children: [(0,
                    r.jsx)("title", {
                        children: "".concat("", " ").concat(e("metaTitle"), " ")
                    }), (0,
                    r.jsx)("meta", {
                        name: "title",
                        content: e("metaTitle")
                    }), (0,
                    r.jsx)("meta", {
                        name: "description",
                        content: e("metaDescription")
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:title",
                        content: e("metaTitle")
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:description",
                        content: e("metaDescription")
                    }), (0,
                    r.jsx)("meta", {
                        property: "twitter:title",
                        content: e("metaTitle")
                    }), (0,
                    r.jsx)("meta", {
                        property: "twitter:description",
                        content: e("metaDescription")
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
                                className: "mb-4 pt-8 sm:sm:text-2xl text-xl text-white",
                                children: e("heading")
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
                                    className: "bg-white border soft-shadow rounded-lg overflow-hidden",
                                    children: (0,
                                    r.jsx)(E, {})
                                })
                            })
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "py-8",
                        children: (0,
                        r.jsx)(o.Z, {})
                    })]
                })]
            })
        };
        A.Layout = c.Z;
        var M = !0
          , z = A
    }
}, function(e) {
    e.O(0, [5445, 3662, 1889, 6509, 3542, 2007, 2953, 9125, 9767, 9774, 2888, 179], (function() {
        return t = 88458,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);

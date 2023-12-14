(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5405], {
    5062: function(e, t, r) {
        var s;
        "undefined" != typeof self && self,
        e.exports = (s = r(56168),
        function(e) {
            function t(s) {
                if (r[s])
                    return r[s].exports;
                var n = r[s] = {
                    i: s,
                    l: !1,
                    exports: {}
                };
                return e[s].call(n.exports, n, n.exports, t),
                n.l = !0,
                n.exports
            }
            var r = {};
            return t.m = e,
            t.c = r,
            t.d = function(e, r, s) {
                t.o(e, r) || Object.defineProperty(e, r, {
                    configurable: !1,
                    enumerable: !0,
                    get: s
                })
            }
            ,
            t.n = function(e) {
                var r = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return t.d(r, "a", r),
                r
            }
            ,
            t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            t.p = "",
            t(t.s = 0)
        }([function(e, t, r) {
            "use strict";
            function s() {
                return s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var s in r)
                            Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
                    }
                    return e
                }
                ,
                s.apply(this, arguments)
            }
            function n(e) {
                return c(e) || l(e) || i(e) || a()
            }
            function a() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            function i(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return o(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(e, t) : void 0
                }
            }
            function l(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }
            function c(e) {
                if (Array.isArray(e))
                    return o(e)
            }
            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, s = new Array(t); r < t; r++)
                    s[r] = e[r];
                return s
            }
            function d(e) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var x = r(1)
              , m = r.n(x)
              , u = "undefined" != typeof window ? x.useLayoutEffect : x.useEffect
              , h = Object(x.forwardRef)((function(e, t) {
                var r = Object(x.useRef)()
                  , a = Object(x.useRef)();
                return u((function() {
                    function t() {
                        var t = e.highcharts || "object" === ("undefined" == typeof window ? "undefined" : d(window)) && window.Highcharts
                          , s = e.constructorType || "chart";
                        t ? t[s] ? e.options ? a.current = t[s](r.current, e.options, e.callback ? e.callback : void 0) : console.warn('The "options" property was not passed.') : console.warn('The "constructorType" property is incorrect or some required module is not imported.') : console.warn('The "highcharts" property was not passed.')
                    }
                    if (a.current) {
                        if (!1 !== e.allowChartUpdate)
                            if (!e.immutable && a.current) {
                                var s;
                                (s = a.current).update.apply(s, [e.options].concat(n(e.updateArgs || [!0, !0])))
                            } else
                                t()
                    } else
                        t()
                }
                )),
                u((function() {
                    return function() {
                        a.current && (a.current.destroy(),
                        a.current = null)
                    }
                }
                ), []),
                Object(x.useImperativeHandle)(t, (function() {
                    return {
                        get chart() {
                            return a.current
                        },
                        container: r
                    }
                }
                ), []),
                m.a.createElement("div", s({}, e.containerProps, {
                    ref: r
                }))
            }
            ));
            t.default = Object(x.memo)(h)
        }
        , function(e, t) {
            e.exports = s
        }
        ]))
    },
    63171: function(e, t, r) {
        "use strict";
        var s = r(56454);
        function n() {}
        function a() {}
        a.resetWarningCache = n,
        e.exports = function() {
            function e(e, t, r, n, a, i) {
                if (i !== s) {
                    var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw l.name = "Invariant Violation",
                    l
                }
            }
            function t() {
                return e
            }
            e.isRequired = e;
            var r = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: a,
                resetWarningCache: n
            };
            return r.PropTypes = r,
            r
        }
    },
    50862: function(e, t, r) {
        e.exports = r(63171)()
    },
    56454: function(e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    78581: function(e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return r(89734)
        }
        ])
    },
    29325: function(e, t, r) {
        "use strict";
        var s = r(8014)
          , n = r(56168);
        t.Z = function() {
            var e = (0,
            n.useState)(!1)
              , t = e[0]
              , r = e[1];
            return (0,
            n.useEffect)((function() {
                var e = function() {
                    r(window.innerWidth < 768)
                };
                return e(),
                window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
            }
            ), []),
            t ? (0,
            s.jsx)("div", {
                className: "w-full justify-center flex -my-3",
                children: (0,
                s.jsx)("div", {
                    style: {
                        minWidth: 320,
                        minHeight: 100
                    },
                    children: (0,
                    s.jsx)("span", {
                        id: "ct_cDxrC1hz6DI"
                    })
                })
            }) : (0,
            s.jsx)("div", {
                className: "w-full justify-center flex -my-3",
                children: (0,
                s.jsx)("div", {
                    style: {
                        minWidth: 728,
                        minHeight: 90
                    },
                    children: (0,
                    s.jsx)("span", {
                        id: "ct_cbNvR30Gd3z"
                    })
                })
            })
        }
    },
    78468: function(e, t, r) {
        "use strict";
        var s = r(8014)
          , n = r(56168)
          , a = r(62044)
          , i = [{
            title: "1inch -",
            description: "Store your tokens safely. Go self-custodial with the 1inch Wallet -",
            btnText: "Download now",
            url: "https://1inch.network/Nearblocks_Textad"
        }, {
            title: "Stader Labs -",
            description: "Get 50%+ APY & Assurance of Fund Safety with EscX Multi-Layer Security | Now Integrated with Burrow | ",
            btnText: "EscX - Live on Aurora & ESC",
            url: "https://near.staderlabs.com/lt/near?tab=Stake"
        }];
        t.Z = function(e) {
            var t = e.fromHome
              , r = void 0 !== t && t
              , l = (0,
            a.Z)("common").t
              , c = (0,
            n.useState)({})
              , o = c[0]
              , d = c[1];
            return (0,
            n.useEffect)((function() {
                return d(i[Math.floor(Math.random() * i.length)])
            }
            ), []),
            o ? (0,
            s.jsx)("div", {
                className: "pt-3 text-sm flex",
                children: (0,
                s.jsxs)("p", {
                    className: "pr-2  ".concat(r ? "text-white" : "text-black", "  font-thin"),
                    children: [l("sponsored"), ":", (0,
                    s.jsx)("span", {
                        className: "font-semibold ml-2",
                        children: o.title
                    }), " ", (0,
                    s.jsxs)("span", {
                        className: "font-thin",
                        children: [o.description, " "]
                    }), (0,
                    s.jsx)("a", {
                        href: o.url,
                        target: "_blank",
                        className: "text-blue-600 font-bold",
                        rel: "noopener noreferrer nofollow",
                        children: o.btnText
                    })]
                })
            }) : null
        }
    },
    89734: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            __N_SSG: function() {
                return z
            },
            default: function() {
                return H
            }
        });
        var s = r(44453)
          , n = r.n(s)
          , a = r(8014)
          , i = r(1984)
          , l = r(56168)
          , c = r(61361)
          , o = r(75332)
          , d = r(62044)
          , x = r(30462)
          , m = r(75657)
          , u = r.n(m)
          , h = r(80241)
          , p = r.n(h)
          , f = r(17204)
          , g = r.n(f)
          , v = r(5062)
          , j = r.n(v)
          , y = r(93474)
          , b = r(89043)
          , N = r(62423)
          , w = r(37506)
          , _ = function() {
            var e = (0,
            l.useState)(!1)
              , t = e[0]
              , r = e[1];
            if ((0,
            l.useEffect)((function() {
                var e = function() {
                    r(window.innerWidth < 768)
                };
                return e(),
                window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
            }
            ), []),
            !t)
                return (0,
                a.jsx)("div", {
                    className: "px-3 flex-col mt-5 -mb-3 lg:mb-0 lg:mt-0 hidden lg:flex justify-center mx-auto",
                    children: (0,
                    a.jsx)("div", {
                        style: {
                            minWidth: 320,
                            minHeight: 100
                        }
                    })
                })
        }
          , k = r(78468)
          , Z = r(68804)
          , T = function() {
            var e, t = (0,
            d.Z)("home").t, r = (0,
            N.ZP)("charts/latest"), s = r.data, n = r.loading, i = r.error, c = (0,
            N.ZP)("stats", {
                revalidateOnReconnect: !0
            }), o = c.data, x = c.loading, m = c.error, h = null === o || void 0 === o || null === (e = o.stats) || void 0 === e ? void 0 : e[0], f = null === s || void 0 === s ? void 0 : s.charts;
            window.Highcharts = g();
            var v, T, O, S, A, E, P, C = (0,
            l.useMemo)((function() {
                try {
                    var e = null === f || void 0 === f ? void 0 : f.map((function(e) {
                        return {
                            y: +e.txns,
                            date: e.date,
                            price: e.near_price
                        }
                    }
                    ));
                    e.sort((function(e, t) {
                        return new Date(e.date) - new Date(t.date)
                    }
                    ));
                    var t = e.map((function(e) {
                        return (0,
                        b.Z)(e.date).format("MMM DD")
                    }
                    ));
                    return {
                        series: e,
                        categories: t
                    }
                } catch (m) {
                    return {
                        series: [],
                        categories: []
                    }
                }
            }
            ), [f]), I = {
                chart: {
                    height: 110,
                    spacingTop: 10,
                    spacingBottom: 0,
                    spacingLeft: 0,
                    spacingRight: 10
                },
                title: {
                    text: null
                },
                xAxis: {
                    type: "datetime",
                    lineWidth: 0,
                    tickLength: 0,
                    labels: {
                        step: 7
                    },
                    categories: C.categories
                },
                yAxis: {
                    gridLineWidth: 0,
                    title: {
                        text: null
                    }
                },
                legend: {
                    enabled: !1
                },
                tooltip: {
                    formatter: function() {
                        return '\n      <span style="font-size:10px">'.concat((0,
                        b.Z)(this.point.date).format("dddd, MMMM DD, YYYY"), "</span><br/>Transactions: <strong>").concat((0,
                        Z.IB)(this.point.y), "</strong><br/>Price: $").concat((0,
                        Z.IB)(this.point.price), "\n    ")
                    }
                },
                plotOptions: {
                    spline: {
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        marker: {
                            radius: 0
                        }
                    }
                },
                series: [{
                    type: "spline",
                    data: C.series,
                    color: "#80D1BF"
                }],
                exporting: {
                    enabled: !1
                },
                credits: {
                    enabled: !1
                }
            };
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("section", {
                    className: "flex items-center justify-center bg-hero-pattern",
                    children: (0,
                    a.jsx)("div", {
                        className: "container mx-auto px-3 pt-14 pb-8 mb-10 ",
                        children: (0,
                        a.jsxs)("div", {
                            className: "flex flex-col lg:flex-row pb-5",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "lg:w-3/5 w-full flex-col",
                                children: [(0,
                                a.jsx)("h1", {
                                    className: "text-white text-2xl pb-3 flex flex-col",
                                    children: t("heroTitle")
                                }), (0,
                                a.jsx)("div", {
                                    className: "flex flex-grow",
                                    children: (0,
                                    a.jsx)(y.ZP, {})
                                }), (0,
                                a.jsx)("div", {
                                    className: "text-white",
                                    children: (0,
                                    a.jsx)(k.Z, {
                                        fromHome: !0
                                    })
                                })]
                            }), (0,
                            a.jsx)(_, {})]
                        })
                    })
                }), (0,
                a.jsx)("div", {
                    className: "relative -mt-14",
                    children: (0,
                    a.jsx)("div", {
                        className: "container mx-auto px-3",
                        children: (0,
                        a.jsx)("div", {
                            className: "bg-white soft-shadow rounded-lg overflow-hidden px-5 md:py lg:px-0",
                            children: (0,
                            a.jsxs)("div", {
                                className: "grid grid-flow-col grid-cols-1 ".concat("grid-rows-3 lg:grid-cols-3", " lg:grid-rows-1 divide-y lg:divide-y-0 lg:divide-x lg:py-3"),
                                children: [(0,
                                a.jsx)(a.Fragment, {
                                    children: (0,
                                    a.jsxs)("div", {
                                        className: "flex flex-col lg:flex-col lg:items-stretch divide-y lg:divide-y lg:divide-x-0 md:pt-0 md:pb-0 md:px-5",
                                        children: [(0,
                                        a.jsxs)("div", {
                                            className: "flex flex-row py-5 lg:pb-5 lg:px-0",
                                            children: [(0,
                                            a.jsx)("div", {
                                                className: "items-center flex justify-left mr-3 ",
                                                children: (0,
                                                a.jsx)(p(), {
                                                    src: "/images/near price.svg",
                                                    alt: t("nearPrice"),
                                                    className: "h-9 w-9",
                                                    width: "24",
                                                    height: "24",
                                                    layout: "fixed"
                                                })
                                            }), (0,
                                            a.jsxs)("div", {
                                                className: "ml-2",
                                                children: [(0,
                                                a.jsx)("p", {
                                                    className: "uppercase font-semibold text-gray-600 text-sm ",
                                                    children: t("nearPrice")
                                                }), m || x ? (0,
                                                a.jsx)(w.Z, {
                                                    count: 1
                                                }) : (0,
                                                a.jsx)(u(), {
                                                    href: "/charts/near-price.html",
                                                    children: (0,
                                                    a.jsxs)("a", {
                                                        className: "leading-6 text-gray-500",
                                                        children: ["$", (0,
                                                        Z.IB)(null !== (v = null === h || void 0 === h ? void 0 : 32) && void 0 !== v ? v : 0), " ", (0,
                                                        a.jsxs)("span", {
                                                            className: "text-gray-400",
                                                            children: ["@", (0,
                                                            Z.bE)(null !== (T = null === h || void 0 === h ? void 0 : h.near_btc_price) && void 0 !== T ? T : 0), " ESC"]
                                                        }), " ", (null === h || void 0 === h ? void 0 : h.change_24) > 0 ? (0,
                                                        a.jsxs)("span", {
                                                            className: "text-neargreen text-sm",
                                                            children: ["(", (0,
                                                            Z.IB)(null === h || void 0 === h ? void 0 : h.change_24), "%)"]
                                                        }) : (0,
                                                        a.jsxs)("span", {
                                                            className: "text-red-500 text-sm",
                                                            children: ["(", (0,
                                                            Z.IB)(null === h || void 0 === h ? void 0 : h.change_24), "%)"]
                                                        })]
                                                    })
                                                })]
                                            })]
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "flex flex-row py-5 lg:pt-5 lg:px-0",
                                            children: [(0,
                                            a.jsx)("div", {
                                                className: "items-center flex justify-left mr-3 ",
                                                children: (0,
                                                a.jsx)(p(), {
                                                    src: "/images/market.svg",
                                                    alt: t("marketCap"),
                                                    className: "h-9 w-9",
                                                    width: "24",
                                                    height: "24",
                                                    layout: "fixed"
                                                })
                                            }), (0,
                                            a.jsxs)("div", {
                                                className: "ml-2",
                                                children: [(0,
                                                a.jsxs)("p", {
                                                    className: "uppercase font-semibold text-gray-500 text-sm",
                                                    children: [t("marketCap"), " "]
                                                }), m || x ? (0,
                                                a.jsx)(w.Z, {
                                                    count: 1,
                                                    wrapperClassName: "w-52"
                                                }) : (0,
                                                a.jsx)(u(), {
                                                    href: "/charts/market-cap",
                                                    children: (0,
                                                    a.jsxs)("a", {
                                                        className: "leading-6 text-gray-400",
                                                        children: ["$", (0,
                                                        Z.IB)(null !== (O = null === h || void 0 === h ? void 0 : h.market_cap) && void 0 !== O ? O : 0)]
                                                    })
                                                })]
                                            })]
                                        })]
                                    })
                                }), (0,
                                a.jsxs)("div", {
                                    className: "flex flex-col lg:flex-col lg:items-stretch divide-y lg:divide-y lg:divide-x-0 md:pt-0 md:pb-0 md:px-5",
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: "flex flex-row justify-between py-5 lg:pb-5 lg:px-0",
                                        children: [(0,
                                        a.jsxs)("div", {
                                            className: "flex flex-row ",
                                            children: [(0,
                                            a.jsx)("div", {
                                                className: "items-center flex justify-left mr-3 ",
                                                children: (0,
                                                a.jsx)(p(), {
                                                    src: "/images/transactions.svg",
                                                    alt: t("transactions"),
                                                    className: "h-9 w-9",
                                                    width: "24",
                                                    height: "24",
                                                    layout: "fixed"
                                                })
                                            }), (0,
                                            a.jsxs)("div", {
                                                className: "ml-2",
                                                children: [(0,
                                                a.jsx)("p", {
                                                    className: "uppercase font-semibold text-gray-500 text-sm",
                                                    children: t("transactions")
                                                }), m || x ? (0,
                                                a.jsx)(w.Z, {
                                                    count: 1
                                                }) : (0,
                                                a.jsx)("p", {
                                                    className: "leading-6 text-gray-400",
                                                    children: (0,
                                                    Z.Aq)(null !== (S = null === h || void 0 === h ? void 0 : h.total_txns) && void 0 !== S ? S : 0)
                                                })]
                                            })]
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "flex flex-col text-right",
                                            children: [(0,
                                            a.jsxs)("p", {
                                                className: "uppercase font-semibold text-gray-500 text-sm",
                                                children: [" ", t("gasPrice")]
                                            }), m || x ? (0,
                                            a.jsx)(w.Z, {
                                                count: 1
                                            }) : (0,
                                            a.jsx)("p", {
                                                className: "leading-6 text-gray-400",
                                                children: (0,
                                                Z.Jd)(null !== (A = null === h || void 0 === h ? void 0 : h.gas_price) && void 0 !== A ? A : 0)
                                            })]
                                        })]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "flex flex-row justify-between align-center py-5 lg:pt-5 lg:px-0",
                                        children: [(0,
                                        a.jsxs)("div", {
                                            className: "flex flex-row ",
                                            children: [(0,
                                            a.jsx)("div", {
                                                className: "items-center flex justify-left mr-3 ",
                                                children: (0,
                                                a.jsx)(p(), {
                                                    src: "/images/pickaxe.svg",
                                                    alt: t("activeValidator"),
                                                    className: "h-9 w-9",
                                                    width: "24",
                                                    height: "24",
                                                    layout: "fixed"
                                                })
                                            }), (0,
                                            a.jsxs)("div", {
                                                className: "ml-2",
                                                children: [(0,
                                                a.jsx)("p", {
                                                    className: "uppercase font-semibold text-gray-500 text-sm",
                                                    children: t("activeValidator")
                                                }), m || x ? (0,
                                                a.jsx)(w.Z, {
                                                    count: 1
                                                }) : (0,
                                                a.jsx)(u(), {
                                                    href: "/charts/blocks",
                                                    children: (0,
                                                    a.jsx)("a", {
                                                        className: "leading-6 text-gray-400",
                                                        children: (0,
                                                        Z.bE)(null !== (E = null === h || void 0 === h ? void 0 : h.nodes_online) && void 0 !== E ? E : 0)
                                                    })
                                                })]
                                            })]
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "flex flex-col text-right",
                                            children: [(0,
                                            a.jsx)("p", {
                                                className: "uppercase font-semibold text-gray-500 text-sm",
                                                children: t("avgBlockTime")
                                            }), m || x ? (0,
                                            a.jsx)(w.Z, {
                                                count: 1
                                            }) : (0,
                                            a.jsxs)("a", {
                                                className: "leading-6 text-gray-400",
                                                children: [null !== (P = null === h || void 0 === h ? void 0 : h.avg_block_time) && void 0 !== P ? P : 0, " s"]
                                            })]
                                        })]
                                    })]
                                }), (0,
                                a.jsx)("div", {
                                    className: "md:col-span-2 lg:col-span-1 flex flex-col lg:flex-col lg:items-stretch divide-y lg:divide-y lg:divide-x-0 md:pt-0 md:px-5",
                                    children: (0,
                                    a.jsxs)("div", {
                                        className: "flex-1 py-5 lg:px-0",
                                        children: [(0,
                                        a.jsxs)("p", {
                                            className: "uppercase font-semibold text-gray-500 text-sm",
                                            children: [" ", t("transactionHistory", {
                                                days: 14
                                            })]
                                        }), i || n ? (0,
                                        a.jsx)(w.Z, {
                                            style: {
                                                height: 106
                                            }
                                        }) : (0,
                                        a.jsx)(j(), {
                                            highcharts: g(),
                                            options: I
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                })]
            })
        }
          , O = r(9125)
          , S = r(29325)
          , A = r(33542)
          , E = (r(97187),
        r(48178))
          , P = r.n(E);
        function C(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, s = new Array(t); r < t; r++)
                s[r] = e[r];
            return s
        }
        function I(e) {
            return function(e) {
                if (Array.isArray(e))
                    return C(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return C(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return C(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var B = function() {
            var e = (0,
            d.Z)("home").t
              , t = (0,
            N.ZP)("blocks/latest", {
                revalidateOnReconnect: !0
            })
              , r = t.data
              , s = t.error
              , n = t.loading
              , i = (null === r || void 0 === r ? void 0 : r.blocks) || [];
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("div", {
                    className: "relative",
                    children: (0,
                    a.jsxs)(P(), {
                        children: [!r && s && (0,
                        a.jsx)("div", {
                            className: "flex items-center h-16 mx-3 py-2 text-gray-400 text-xs",
                            children: e("error")
                        }), !s && !n && 0 === i.length && (0,
                        a.jsx)("div", {
                            className: "flex items-center h-16 mx-3 py-2 text-gray-400 text-xs",
                            children: e("noBlocks")
                        }), n && (0,
                        a.jsx)("div", {
                            className: "px-3 divide-y h-80",
                            children: I(Array(10)).map((function(e, t) {
                                return (0,
                                a.jsxs)("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 gap-3 py-3",
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0,
                                        a.jsx)("div", {
                                            className: "flex-shrink-0 rounded-lg h-10 w-10 bg-blue-900/10 flex items-center justify-center text-sm",
                                            children: "BK"
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "px-2",
                                            children: [(0,
                                            a.jsx)("div", {
                                                className: "text-green-500 text-sm",
                                                children: (0,
                                                a.jsx)(w.Z, {
                                                    count: 1,
                                                    className: "h-4",
                                                    wrapperClassName: "h-5 w-14"
                                                })
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "text-gray-400 text-xs",
                                                children: (0,
                                                a.jsx)(w.Z, {
                                                    count: 1,
                                                    className: "h-3",
                                                    wrapperClassName: "h-4 w-24"
                                                })
                                            })]
                                        })]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "col-span-2 md:col-span-1 px-2 order-2 md:order-1 text-sm",
                                        children: [(0,
                                        a.jsx)(w.Z, {
                                            count: 1,
                                            className: "h-4",
                                            wrapperClassName: "h-5 w-36"
                                        }), (0,
                                        a.jsx)("div", {
                                            className: "text-gray-400 text-sm",
                                            children: (0,
                                            a.jsx)(w.Z, {
                                                count: 1,
                                                className: "h-4",
                                                wrapperClassName: "h-5 w-14"
                                            })
                                        })]
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "text-right order-1 md:order-2",
                                        children: (0,
                                        a.jsx)(w.Z, {
                                            count: 1,
                                            wrapperClassName: "ml-auto w-32"
                                        })
                                    })]
                                }, t)
                            }
                            ))
                        }), i.length > 0 && (0,
                        a.jsx)("div", {
                            className: "px-3 divide-y h-80",
                            children: i.map((function(t) {
                                return (0,
                                a.jsxs)("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-3 py-3",
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: " flex items-center",
                                        children: [(0,
                                        a.jsx)("div", {
                                            className: "flex-shrink-0 rounded-lg h-10 w-10 bg-blue-900/10 flex items-center justify-center text-sm",
                                            children: "BK"
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "overflow-hidden pl-2",
                                            children: [(0,
                                            a.jsx)("div", {
                                                className: "text-green-500 text-sm font-medium ",
                                                children: (0,
                                                a.jsx)(u(), {
                                                    href: "/blocks-hs.html?hs=/".concat(t.block_hash),
                                                    children: (0,
                                                    a.jsx)("a", {
                                                        className: "text-green-500",
                                                        children: (0,
                                                        Z.bE)(t.block_height)
                                                    })
                                                })
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "text-gray-400 text-xs truncate",
                                                children: (0,
                                                b.Z)().to((0,
                                                b.Z)((0,
                                                Z.Vz)(t.block_timestamp)))
                                            })]
                                        })]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "col-span-2 md:col-span-1 px-2 order-2 md:order-1 text-sm whitespace-nowrap truncate",
                                        children: [e("blockMiner"), " ", (0,
                                        a.jsx)("span", {
                                            href: "/address/".concat(t.author_account_id),
                                            children: (0,
                                            a.jsx)("a", {
                                                className: "text-green-500 font-medium",
                                                children: t.author_account_id
                                            })
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "text-gray-400 text-sm ",
                                            children: [(0,
                                            Z.bE)((null === t || void 0 === t ? void 0 : t.transactions_agg.count) || 0), " txns", " "]
                                        })]
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "text-right order-1 md:order-2 overflow-hidden",
                                        children: (0,
                                        a.jsx)(A.ZP, {
                                            label: "Gas used",
                                            className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-white text-xs p-2",
                                            children: (0,
                                            a.jsxs)("span", {
                                                className: "u-label--badge-in text-gray-400 truncate",
                                                children: [t.chunks_agg.gas_used ? (0,
                                                Z.iO)(t.chunks_agg.gas_used) : "0 ", "gas"]
                                            })
                                        })
                                    })]
                                }, t.block_hash)
                            }
                            ))
                        })]
                    })
                }), n && (0,
                a.jsx)("div", {
                    className: "border-t px-2 py-3 text-gray-700",
                    children: (0,
                    a.jsx)(w.Z, {
                        count: 1,
                        className: "h-10"
                    })
                }), i && i.length > 0 && (0,
                a.jsx)("div", {
                    className: "border-t px-2 py-3 text-gray-700",
                    children: (0,
                    a.jsx)(u(), {
                        href: "/blocks.html",
                        children: (0,
                        a.jsx)("a", {
                            className: "block text-center border border-green-900/10 bg-green-500 hover:bg-green-400 font-thin text-white text-xs py-3 rounded w-full focus:outline-none",
                            children: "View all blocks"
                        })
                    })
                })]
            })
        };
        function M(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, s = new Array(t); r < t; r++)
                s[r] = e[r];
            return s
        }
        function D(e) {
            return function(e) {
                if (Array.isArray(e))
                    return M(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return M(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return M(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var R = function() {
            var e = (0,
            d.Z)("home").t
              , t = (0,
            N.ZP)("txns/latest", {
                revalidateOnReconnect: !0
            })
              , r = t.data
              , s = t.error
              , n = t.loading
              , i = (null === r || void 0 === r ? void 0 : r.txns) || [];
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("div", {
                    className: "relative",
                    children: (0,
                    a.jsxs)(P(), {
                        children: [!r && s && (0,
                        a.jsx)("div", {
                            className: "flex items-center h-16 mx-3 py-2 text-gray-400 text-xs",
                            children: e("error")
                        }), !s && !n && 0 === i.length && (0,
                        a.jsx)("div", {
                            className: "flex items-center h-16 mx-3 py-2 text-gray-400 text-xs",
                            children: e("noTxns")
                        }), n && (0,
                        a.jsx)("div", {
                            className: "px-3 divide-y h-80",
                            children: D(Array(10)).map((function(e, t) {
                                return (0,
                                a.jsxs)("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 gap-3 py-3 h-16",
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: "flex items-center ",
                                        children: [(0,
                                        a.jsx)("div", {
                                            className: "flex-shrink-0 rounded-full h-10 w-10 bg-blue-900/10 flex items-center justify-center text-sm",
                                            children: "EX"
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "px-2",
                                            children: [(0,
                                            a.jsx)("div", {
                                                className: "text-green-500 text-sm",
                                                children: (0,
                                                a.jsx)(w.Z, {
                                                    count: 1,
                                                    className: "h-4",
                                                    wrapperClassName: "h-5 w-14"
                                                })
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "text-gray-400 text-xs",
                                                children: (0,
                                                a.jsx)(w.Z, {
                                                    count: 1,
                                                    className: "h-3",
                                                    wrapperClassName: "h-4 w-24"
                                                })
                                            })]
                                        })]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "col-span-2 md:col-span-1 px-2 order-2 md:order-1 text-sm",
                                        children: [(0,
                                        a.jsx)(w.Z, {
                                            count: 1,
                                            className: "h-4",
                                            wrapperClassName: "h-5 w-36"
                                        }), (0,
                                        a.jsx)("div", {
                                            className: "text-gray-400 text-sm",
                                            children: (0,
                                            a.jsx)(w.Z, {
                                                count: 1,
                                                className: "h-4",
                                                wrapperClassName: "h-5 w-14"
                                            })
                                        })]
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "text-right order-1 md:order-2",
                                        children: (0,
                                        a.jsx)(w.Z, {
                                            count: 1,
                                            wrapperClassName: "ml-auto w-32"
                                        })
                                    })]
                                }, t)
                            }
                            ))
                        }), i.length > 0 && (0,
                        a.jsx)("div", {
                            className: "px-3 divide-y h-80",
                            children: i.map((function(t) {
                                var r;
                                return (0,
                                a.jsxs)("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-3 items-center py-3",
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: " flex items-center",
                                        children: [(0,
                                        a.jsx)("div", {
                                            className: "flex-shrink-0 rounded-full h-10 w-10 bg-blue-900/10 flex items-center justify-center text-sm",
                                            children: "EX"
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "overflow-hidden pl-2",
                                            children: [(0,
                                            a.jsx)("div", {
                                                className: "text-green-500 text-sm ",
                                                children: (0,
                                                a.jsx)(u(), {
                                                    href: "/txns-hs.html?hs=".concat(t.transaction_hash),
                                                    children: (0,
                                                    a.jsx)("a", {
                                                        className: "text-green-500 font-medium",
                                                        children: (0,
                                                        Z.pm)("e".concat(t.transaction_hash))
                                                    })
                                                })
                                            }), (0,
                                            a.jsx)("div", {
                                                className: "text-gray-400 text-xs truncate",
                                                children: (0,
                                                b.Z)().to((0,
                                                b.Z)((0,
                                                Z.Vz)(t.block_timestamp)))
                                            })]
                                        })]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "col-span-2 md:col-span-1 px-2 order-2 md:order-1 text-sm",
                                        children: [(0,
                                        a.jsxs)("div", {
                                            className: "whitespace-nowrap truncate",
                                            children: [e("txnFrom"), " ", (0,
                                            a.jsx)("span", {
                                                href: "/address/".concat(t.signer_account_id),
                                                children: (0,
                                                a.jsx)("a", {
                                                    className: "text-green-500 font-medium",
                                                    children: (0,
                                                    Z.Xn)(t.signer_account_id)
                                                })
                                            })]
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "whitespace-nowrap truncate",
                                            children: [e("txnTo"), " ", (0,
                                            a.jsx)("span", {
                                                href: "/address/".concat(t.receiver_account_id),
                                                children: (0,
                                                a.jsx)("a", {
                                                    className: "text-green-500 font-medium",
                                                    children: (0,
                                                    Z.Xn)(t.receiver_account_id)
                                                })
                                            })]
                                        })]
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "text-right order-1 md:order-2 overflow-hidden",
                                        children: (0,
                                        a.jsx)(A.ZP, {
                                            label: "Deposit value",
                                            className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-white text-xs p-2",
                                            children: (0,
                                            a.jsxs)("span", {
                                                className: "u-label--badge-in text-gray-400 truncate",
                                                children: [(0,
                                                Z.xB)((null === (r = t.actions_agg) || void 0 === r ? void 0 : r.deposit) || 0), " \u24c3"]
                                            })
                                        })
                                    })]
                                }, t.transaction_hash)
                            }
                            ))
                        })]
                    })
                }), n && (0,
                a.jsx)("div", {
                    className: "border-t px-2 py-3 text-gray-700",
                    children: (0,
                    a.jsx)(w.Z, {
                        count: 1,
                        className: "h-10"
                    })
                }), i && i.length > 0 && (0,
                a.jsx)("div", {
                    className: "border-t px-2 py-3 text-gray-700",
                    children: (0,
                    a.jsx)(u(), {
                        href: "/txns.html",
                        children: (0,
                        a.jsx)("a", {
                            className: "block text-center border border-green-900/10 font-thin bg-green-500 hover:bg-green-400 text-white text-xs py-3 rounded w-full focus:outline-none",
                            children: "View all transactions"
                        })
                    })
                })]
            })
        };
        function L(e, t, r, s, n, a, i) {
            try {
                var l = e[a](i)
                  , c = l.value
            } catch (o) {
                return void r(o)
            }
            l.done ? t(c) : Promise.resolve(c).then(s, n)
        }
        var W = function() {
            var e = (0,
            o.useRouter)().query.q
              , t = (0,
            d.Z)("home").t;
            return (0,
            l.useEffect)((function() {
                var t = function() {
                    var e, t = (e = n().mark((function e(t) {
                        var r;
                        return n().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    x.Z)(t, "all", !0);
                                case 2:
                                    if (!(r = e.sent)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", (0,
                                    y.uX)(r));
                                case 5:
                                    return e.abrupt("return", c.Am.error(y.uc));
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )),
                    function() {
                        var t = this
                          , r = arguments;
                        return new Promise((function(s, n) {
                            var a = e.apply(t, r);
                            function i(e) {
                                L(a, s, n, i, l, "next", e)
                            }
                            function l(e) {
                                L(a, s, n, i, l, "throw", e)
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
                  , r = null === e || void 0 === e ? void 0 : e.trim();
                r && t(r)
            }
            ), [e]),
            (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)(i.default, {
                    children: [(0,
                    a.jsx)("title", {
                        children: "".concat("", " ").concat(t("metaTitle"))
                    }), (0,
                    a.jsx)("meta", {
                        name: "title",
                        content: t("metaTitle")
                    }), (0,
                    a.jsx)("meta", {
                        name: "description",
                        content: t("metaDescription")
                    }), (0,
                    a.jsx)("meta", {
                        property: "og:image",
                        content: "/thumbnail/thumbnail_homepage.png"
                    }), (0,
                    a.jsx)("meta", {
                        property: "og:title",
                        content: t("metaTitle")
                    }), (0,
                    a.jsx)("meta", {
                        property: "og:description",
                        content: t("metaDescription")
                    }), (0,
                    a.jsx)("meta", {
                        property: "twitter:title",
                        content: t("metaTitle")
                    }), (0,
                    a.jsx)("meta", {
                        property: "twitter:image",
                        content: "/thumbnail/thumbnail_homepage.png"
                    }), (0,
                    a.jsx)("meta", {
                        property: "twitter:description",
                        content: t("metaDescription")
                    })]
                }), (0,
                a.jsx)(T, {}), (0,
                a.jsx)("div", {
                    className: "py-8 relative",
                    children: (0,
                    a.jsx)(S.Z, {})
                }), (0,
                a.jsx)("section", {
                    children: (0,
                    a.jsx)("div", {
                        className: "container mx-auto px-3 z-10",
                        children: (0,
                        a.jsxs)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                            children: [(0,
                            a.jsx)("div", {
                                className: "w-full",
                                children: (0,
                                a.jsxs)("div", {
                                    className: "bg-white soft-shadow rounded-lg overflow-hidden mb-6 md:mb-10",
                                    children: [(0,
                                    a.jsx)("h2", {
                                        className: "border-b p-3 text-gray-500 text-sm font-semibold",
                                        children: t("latestBlocks")
                                    }), (0,
                                    a.jsx)(B, {})]
                                })
                            }), (0,
                            a.jsx)("div", {
                                className: "w-full",
                                children: (0,
                                a.jsxs)("div", {
                                    className: "bg-white soft-shadow rounded-lg overflow-hidden mb-6 md:mb-10",
                                    children: [(0,
                                    a.jsx)("h2", {
                                        className: "border-b p-3 text-gray-500 text-sm font-semibold",
                                        children: t("latestTxns")
                                    }), (0,
                                    a.jsx)(R, {})]
                                })
                            })]
                        })
                    })
                })]
            })
        };
        W.Layout = O.Z;
        var z = !0
          , H = W
    }
}, function(e) {
    e.O(0, [5445, 6898, 1889, 6509, 3542, 5474, 9125, 9774, 2888, 179], (function() {
        return t = 78581,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);

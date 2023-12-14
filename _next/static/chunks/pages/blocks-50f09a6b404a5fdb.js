(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8079], {
    51750: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/blocks", function() {
            return n(56523)
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
    25308: function(e, t, n) {
        "use strict";
        var r = n(8014)
          , s = n(62044)
          , a = n(45666)
          , i = n(37506);
        t.Z = function(e) {
            var t = e.page
              , n = e.count
              , c = e.limit
              , o = void 0 === c ? 25 : c
              , l = e.loading
              , x = void 0 !== l && l
              , d = e.setPage
              , u = void 0 === d ? function() {}
            : d
              , p = e.pageLimit
              , m = void 0 === p ? 200 : p
              , g = (0,
            s.Z)("common").t
              , h = +n ? Math.ceil(n / o) : 1;
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
                                    return u(1)
                                },
                                className: "relative inline-flex items-center px-2 ml-1 md:px-3 py-2  text-xs font-medium rounded-md ".concat(t <= 1 ? "text-gray-500" : "text-green-400 hover:bg-green-400 hover:text-white", " bg-gray-100"),
                                children: g("pagination.first")
                            }), (0,
                            r.jsx)("button", {
                                type: "button",
                                disabled: t <= 1 || 1 === h,
                                onClick: function() {
                                    if (t <= 1)
                                        return null;
                                    u((function(e) {
                                        return (+e || 1) - 1
                                    }
                                    ))
                                },
                                className: "relative inline-flex items-center px-2 ml-1 md:px-3 py-2 font-medium ".concat(t <= 1 ? "text-gray-500" : "text-green-400 hover:text-white hover:bg-green-400", " rounded-md  bg-gray-100"),
                                children: (0,
                                r.jsx)(a.bUI, {
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
                                    u((function(e) {
                                        return (+e || 1) + 1
                                    }
                                    ))
                                },
                                className: "relative inline-flex items-center ml-1 px-2 md:px-3 py-2 rounded-md font-medium ".concat(t >= h ? "text-gray-500" : "text-green-400 hover:text-white hover:bg-green-400", "  bg-gray-100"),
                                children: (0,
                                r.jsx)(a.Dli, {
                                    className: "inline-flex text-xs"
                                })
                            }), (0,
                            r.jsx)("button", {
                                type: "button",
                                disabled: t >= h || 1 === h,
                                onClick: function() {
                                    return u(h)
                                },
                                className: "relative inline-flex items-center px-2 ml-1 md:px-3 py-2 text-xs font-medium rounded-md ".concat(t >= h ? "text-gray-500" : "text-green-400 hover:text-white hover:bg-green-400", "  bg-gray-100 "),
                                children: g("pagination.last")
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
          , s = n(33542)
          , a = n(89043)
          , i = n(68804);
        t.Z = function(e) {
            var t = e.timestamp
              , n = e.showAge
              , c = void 0 === n || n;
            return (0,
            r.jsx)(s.ZP, {
                label: c ? a.Z.utc((0,
                i.Vz)(t || 0)).format("YYYY-MM-DD HH:mm:ss") : (0,
                a.Z)().to((0,
                a.Z)((0,
                i.Vz)(t || 0))),
                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-white text-xs p-2",
                children: (0,
                r.jsx)("span", {
                    children: c ? (0,
                    a.Z)().to((0,
                    a.Z)((0,
                    i.Vz)(t || 0))) : a.Z.utc((0,
                    i.Vz)(t || 0)).format("YYYY-MM-DD HH:mm:ss")
                })
            })
        }
    },
    12247: function(e, t, n) {
        "use strict";
        var r = n(52007)
          , s = n.n(r)
          , a = n(56168)
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
        function o(e) {
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
            a.useState)(o({}, l, e))
              , n = t[0]
              , r = t[1]
              , x = (0,
            a.useMemo)((function() {
                return s().stringify(n)
            }
            ), [n])
              , d = (0,
            a.useCallback)((function(e, t) {
                return r("function" === typeof e ? function(t) {
                    return (0,
                    i.KE)(e(t))
                }
                : function(n) {
                    return (0,
                    i.KE)(o({}, n, c({}, e, t)))
                }
                )
            }
            ), [])
              , u = (0,
            a.useCallback)((function() {
                return r(o({}, l, e))
            }
            ), [e]);
            return {
                pqs: x,
                pagination: n,
                setPagination: d,
                resetPagination: u
            }
        }
    },
    56523: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSG: function() {
                return N
            },
            default: function() {
                return k
            }
        });
        var r = n(8014)
          , s = n(56168)
          , a = n(1984)
          , i = n(62044)
          , c = n(62423)
          , o = n(9125)
          , l = n(75657)
          , x = n.n(l)
          , d = n(2612)
          , u = n(37506)
          , p = n(25308)
          , m = n(82699)
          , g = n(68804);
        function h(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function f(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function b(e) {
            return function(e) {
                if (Array.isArray(e))
                    return h(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return h(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var y = function(e) {
            var t = e.blocks
              , n = e.loading
              , a = e.count
              , c = e.countLoading
              , o = e.pagination
              , l = e.setPagination
              , h = (0,
            i.Z)("blocks").t
              , y = (0,
            s.useState)(!0)
              , j = y[0]
              , w = y[1]
              , v = (0,
            d.first)(t)
              , N = (0,
            d.last)(t);
            return (0,
            r.jsxs)(r.Fragment, {
                children: [n ? (0,
                r.jsx)(u.Z, {
                    className: "leading-7",
                    wrapperClassName: "pl-6 max-w-sm py-4 h-[60px]"
                }) : (0,
                r.jsx)("p", {
                    className: "leading-7 pl-6 text-sm py-4 text-gray-500",
                    children: h("listing", {
                        from: (0,
                        g.bE)(v.block_height),
                        to: (0,
                        g.bE)(N.block_height),
                        count: (0,
                        g.bE)(a)
                    })
                }), (0,
                r.jsx)("div", {
                    className: "overflow-x-auto",
                    children: (0,
                    r.jsxs)("table", {
                        className: "min-w-full divide-y border-t border-gray-200 divide-gray-200",
                        children: [(0,
                        r.jsx)("thead", {
                            className: "bg-gray-50",
                            children: (0,
                            r.jsxs)("tr", {
                                children: [(0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "px-6 py-4 text-left text-xs font-semibold text-nearblue-600 uppercase tracking-wider",
                                    children: h("blocks")
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    children: (0,
                                    r.jsx)("button", {
                                        type: "button",
                                        onClick: function() {
                                            return w((function(e) {
                                                return !e
                                            }
                                            ))
                                        },
                                        className: "px-6 py-4 text-left text-xs w-full font-semibold uppercase tracking-wider text-nearblue-500 focus:outline-none",
                                        children: j ? h("age") : "Date Time (UTC)"
                                    })
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "px-6 py-4 text-left text-xs font-semibold text-nearblue-600 uppercase tracking-wider",
                                    children: h("txn")
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "px-6 py-4 text-left text-xs font-semibold text-nearblue-600 uppercase tracking-wider",
                                    children: h("block.receipt")
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "px-6 py-4 text-left text-xs font-semibold text-nearblue-600 uppercase tracking-wider",
                                    children: h("miner")
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "px-6 py-4 text-left text-xs font-semibold text-nearblue-600 uppercase tracking-wider whitespace-nowrap",
                                    children: h("block.gasUsed")
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "px-6 py-4 text-left text-xs font-semibold text-nearblue-600 uppercase tracking-wider",
                                    children: h("block.gasLimit")
                                }), (0,
                                r.jsx)("th", {
                                    scope: "col",
                                    className: "px-6 py-4 text-left text-xs font-semibold text-nearblue-600 uppercase tracking-wider",
                                    children: h("block.gasFee")
                                })]
                            })
                        }), (0,
                        r.jsxs)("tbody", {
                            className: "bg-white divide-y divide-gray-200",
                            children: [n && b(Array(25)).map((function(e, t) {
                                return (0,
                                r.jsxs)("tr", {
                                    className: "hover:bg-blue-900/5",
                                    children: [(0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(u.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(u.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(u.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(u.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(u.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(u.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(u.Z, {})
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(u.Z, {})
                                    })]
                                }, t)
                            }
                            )), !n && 0 === t.length && (0,
                            r.jsx)("tr", {
                                children: (0,
                                r.jsx)("td", {
                                    colSpan: "100%",
                                    className: "px-6 py-4 text-gray-400 text-xs",
                                    children: h("noBlocks")
                                })
                            }), t.map((function(e) {
                                return (0,
                                r.jsxs)("tr", {
                                    className: "hover:bg-blue-900/5",
                                    children: [(0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium",
                                        children: (0,
                                        r.jsx)(x(), {
                                            href: "/blocks-hs.html?hs=".concat(e.block_hash),
                                            children: (0,
                                            r.jsx)("a", {
                                                className: "text-green-500",
                                                children: (0,
                                                g.bE)(e.block_height)
                                            })
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        r.jsx)(m.Z, {
                                            timestamp: e.block_timestamp,
                                            showAge: j
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        g.bE)(e.transactions_agg.count)
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: (0,
                                        g.bE)(e.receipts_agg.count)
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium",
                                        children: (0,
                                        r.jsx)("span", {
                                            href: "/address/".concat(e.author_account_id),
                                            children: (0,
                                            r.jsx)("a", {
                                                className: "text-green-500",
                                                children: (0,
                                                g.Xn)("e".concat(e.block_hash))
                                            })
                                        })
                                    }), (0,
                                    r.jsxs)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: [e.chunks_agg.gas_used ? (0,
                                        g.iO)(e.chunks_agg.gas_used) : "0 ", "gas"]
                                    }), (0,
                                    r.jsxs)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: [e.chunks_agg.gas_limit ? (0,
                                        g.iO)(e.chunks_agg.gas_limit) : "0 ", "gas"]
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: e.chunks_agg.gas_used && e.gas_price ? (0,
                                            g.JN)(e.chunks_agg.gas_used, e.gas_price).replace("Ⓝ","esc") : "0 \u24c3"
                                    })]
                                }, e.block_height)
                            }
                            ))]
                        })]
                    })
                }), (0,
                r.jsx)(p.Z, {
                    count: a,
                    loading: c,
                    page: o.page,
                    setPage: function(e) {
                        return "function" === typeof e ? l((function(t) {
                            return function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {}
                                      , r = Object.keys(n);
                                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }
                                    )))),
                                    r.forEach((function(t) {
                                        f(e, t, n[t])
                                    }
                                    ))
                                }
                                return e
                            }({}, t, {
                                page: e(t.page)
                            })
                        }
                        )) : l("page", e)
                    },
                    limit: o.per_page
                })]
            })
        }
          , j = n(12247)
          , w = n(29325)
          , v = function() {
            var e, t, n = (0,
            i.Z)("blocks").t, s = (0,
            j.Z)(), o = s.pqs, l = s.pagination, x = s.setPagination, d = (0,
            c.ZP)("blocks?".concat(o)), u = d.data, p = d.error, m = d.loading, g = (0,
            c.ZP)("blocks/count"), h = g.data, f = g.loading, b = (null === u || void 0 === u ? void 0 : u.blocks) || [], v = (null === h || void 0 === h || null === (e = h.blocks) || void 0 === e || null === (t = e[0]) || void 0 === t ? void 0 : t.count) || 0;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)(a.default, {
                    children: [(0,
                    r.jsx)("title", {
                        children: "".concat("", " ").concat(n("metaTitle"), " ")
                    }), (0,
                    r.jsx)("meta", {
                        name: "title",
                        content: n("metaTitle")
                    }), (0,
                    r.jsx)("meta", {
                        name: "description",
                        content: n("metaDescription")
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:title",
                        content: n("metaTitle")
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:image",
                        content: "/thumbnail/thumbnail_blocks.png"
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:description",
                        content: n("metaDescription")
                    }), (0,
                    r.jsx)("meta", {
                        property: "twitter:title",
                        content: n("metaTitle")
                    }), (0,
                    r.jsx)("meta", {
                        property: "twitter:image",
                        content: "/thumbnail/thumbnail_blocks.png"
                    }), (0,
                    r.jsx)("meta", {
                        property: "twitter:description",
                        content: n("metaDescription")
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
                                children: n("heading")
                            })
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "container mx-auto px-3 -mt-48",
                        children: p ? (0,
                        r.jsx)("div", {
                            className: "text-gray-400 text-xs px-2 mb-4",
                            children: n("error")
                        }) : (0,
                        r.jsx)("div", {
                            className: "block lg:flex lg:space-x-2",
                            children: (0,
                            r.jsx)("div", {
                                className: "w-full ",
                                children: (0,
                                r.jsx)("div", {
                                    className: "bg-white border soft-shadow rounded-lg overflow-hidden",
                                    children: (0,
                                    r.jsx)(y, {
                                        blocks: b,
                                        loading: m,
                                        count: v,
                                        countLoading: f,
                                        pagination: l,
                                        setPagination: x
                                    })
                                })
                            })
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "py-8",
                        children: (0,
                        r.jsx)(w.Z, {})
                    })]
                })]
            })
        };
        v.Layout = o.Z;
        var N = !0
          , k = v
    },
    24654: function() {}
}, function(e) {
    e.O(0, [5445, 3662, 1889, 6509, 3542, 2007, 9125, 9774, 2888, 179], (function() {
        return t = 51750,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4420], {
    28722: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/charts/txns", function() {
            return n(77971)
        }
        ])
    },
    29325: function(e, t, n) {
        "use strict";
        var s = n(8014)
          , r = n(56168);
        t.Z = function() {
            var e = (0,
            r.useState)(!1)
              , t = e[0]
              , n = e[1];
            return (0,
            r.useEffect)((function() {
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
    4307: function(e, t, n) {
        "use strict";
        var s = n(8014)
          , r = n(75657)
          , a = n.n(r)
          , i = n(80241)
          , c = n.n(i)
          , l = n(62044)
          , o = [{
            link: "/charts/near-price.html",
            text: "nearPrice.heading",
            image: "/images/charts/near-price.svg",
            exclude: !1
        }, {
            link: "/charts/market-cap.html",
            text: "marketCap.heading",
            image: "/images/charts/market-cap.svg",
            exclude: !1
        }, {
            link: "/charts/near-supply.html",
            text: "nearSupply.heading",
            image: "/images/charts/near-supply.svg",
            exclude: !1
        }, {
            link: "/charts/txns.html",
            text: "txns.heading",
            image: "/images/charts/txns.svg",
            exclude: !1
        }, {
            link: "/charts/blocks.html",
            text: "blocks.heading",
            image: "/images/charts/blocks.svg",
            exclude: !1
        }, {
            link: "/charts/addresses.html",
            text: "addresses.heading",
            image: "/images/charts/addresses.svg",
            exclude: !1
        }, {
            link: "/charts/txn-fee.html",
            text: "txnFee.heading",
            image: "/images/charts/txn-fee.svg",
            exclude: !1
        }, {
            link: "/charts/txn-volume.html",
            text: "txnVolume.heading",
            image: "/images/charts/txn-volume.svg",
            exclude: !1
        }];
        t.Z = function() {
            var e = (0,
            l.Z)("charts").t;
            return (0,
            s.jsx)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                children: o.map((function(t) {
                    return (0,
                    s.jsx)(s.Fragment, {
                        children: !1 === t.exclude && (0,
                        s.jsxs)("div", {
                            className: "block bg-white border soft-shadow rounded-lg overflow-hidden",
                            children: [(0,
                            s.jsx)(a(), {
                                href: t.link,
                                children: (0,
                                s.jsx)("a", {
                                    className: "block leading-7 p-3 text-sm text-gray-500 border-b truncate",
                                    children: (0,
                                    s.jsx)("h2", {
                                        children: e(t.text)
                                    })
                                })
                            }), (0,
                            s.jsx)("div", {
                                className: "pl-2 pr-4 py-6",
                                children: (0,
                                s.jsx)(a(), {
                                    href: t.link,
                                    children: (0,
                                    s.jsx)("a", {
                                        children: (0,
                                        s.jsx)(c(), {
                                            src: t.image,
                                            alt: t.text,
                                            width: 600,
                                            height: 550
                                        })
                                    })
                                })
                            })]
                        }, t.link)
                    })
                }
                ))
            })
        }
    },
    81270: function(e, t, n) {
        "use strict";
        var s = n(8014)
          , r = n(89043)
          , a = n(56168)
          , i = n(62044)
          , c = n(62423)
          , l = n(37506)
          , o = n(68804)
          , d = n(28653);
        t.Z = function() {
            var e = (0,
            i.Z)("charts").t
              , t = (0,
            c.ZP)("charts")
              , n = t.data
              , h = t.error
              , x = t.loading
              , m = (0,
            a.useMemo)((function() {
                try {
                    return n.charts.map((function(e) {
                        return {
                            x: (0,
                            r.Z)(e.date).valueOf(),
                            y: +e.txns,
                            date: e.date,
                            blocks: e.blocks,
                            addresses: e.addresses
                        }
                    }
                    ))
                } catch (h) {
                    return []
                }
            }
            ), [n]);
            return h || x ? (0,
            s.jsx)(l.Z, {
                className: "h-full",
                wrapperClassName: "h-full"
            }) : (0,
            s.jsx)(d.Z, {
                id: "txns",
                data: m,
                title: e("txns.heading"),
                yLabel: e("txns.yLabel"),
                tooltip: function() {
                    return "\n      ".concat((0,
                    r.Z)(this.point.date).format("dddd, MMMM DD, YYYY"), "<br/>\n      Total Transactions: <strong>").concat((0,
                    o.IB)(this.point.y), "</strong><br/>\n      Total Blocks Count: <strong>").concat((0,
                    o.IB)(this.point.blocks), "</strong><br/>\n      New Addresses Seen: <strong>").concat((0,
                    o.IB)(this.point.addresses), "</strong>\n    ")
                }
            })
        }
    },
    28653: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return b
            }
        });
        var s = n(8014)
          , r = n(17204)
          , a = n.n(r)
          , i = n(56168)
          , c = n(5062)
          , l = n.n(c)
          , o = n(78234)
          , d = n.n(o)
          , h = n(66386);
        function x(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var m = function(e) {
            return (0,
            s.jsxs)("svg", function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                      , s = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    s.forEach((function(t) {
                        x(e, t, n[t])
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
                s.jsx)("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                }), (0,
                s.jsx)("path", {
                    d: "M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z"
                })]
            }))
        }
          , u = n(4023)
          , p = function(e) {
            var t = e.isOpen
              , n = e.onDismiss
              , r = e.code;
            return (0,
            s.jsx)(h.t9, {
                isOpen: t,
                onDismiss: n,
                className: "fixed bg-black bg-opacity-10 inset-0 z-30 flex items-center justify-center",
                children: (0,
                s.jsxs)(h.cZ, {
                    "aria-label": "Embed Chart",
                    isOpen: t,
                    onDismiss: n,
                    className: "w-full max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "flex items-center justify-between bg-gray-100 px-3 py-4",
                        children: [(0,
                        s.jsxs)("h4", {
                            className: "flex items-center",
                            children: [(0,
                            s.jsx)(m, {
                                className: "w-4 h-4 mr-2"
                            }), "Embed Chart"]
                        }), (0,
                        s.jsx)("button", {
                            className: "text-gray-500 fill-current",
                            onClick: n,
                            children: (0,
                            s.jsx)(u.Z, {})
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: "p-4",
                        children: (0,
                        s.jsx)("div", {
                            contentEditable: "true",
                            dangerouslySetInnerHTML: {
                                __html: r
                            },
                            className: "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        })
                    })]
                })
            })
        }
          , g = n(68804)
          , f = n(37506)
          , b = function(e) {
            var t = e.ref
              , n = e.data
              , r = e.title
              , c = e.yLabel
              , o = e.tooltip
              , h = e.id
              , x = e.labelFormatter
              , m = (0,
            i.useState)()
              , u = m[0]
              , b = m[1]
              , j = (0,
            i.useState)(!1)
              , y = j[0]
              , w = j[1]
              , v = function() {
                return w(!0)
            };
            return (0,
            i.useEffect)((function() {
                var e = {
                    chart: {
                        height: 550,
                        zoomType: "x"
                    },
                    title: {
                        text: r
                    },
                    subtitle: {
                        text: "Source: NearBlocks.io"
                    },
                    xAxis: {
                        type: "datetime"
                    },
                    yAxis: {
                        title: {
                            text: c
                        },
                        labels: {
                            formatter: x
                        }
                    },
                    legend: {
                        enabled: !1
                    },
                    plotOptions: {
                        area: {
                            fillColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [[0, "rgba(3, 63, 64, 0.8)"], [1, "rgba(3, 63, 64, 0)"]]
                            },
                            marker: {
                                enabled: !1
                            },
                            lineWidth: 1,
                            states: {
                                hover: {
                                    lineWidth: 1
                                }
                            },
                            threshold: null,
                            turboThreshold: 3650
                        }
                    },
                    tooltip: {
                        formatter: o
                    },
                    series: [{
                        type: "area",
                        data: n,
                        color: "rgba(3, 63, 64, 1)"
                    }],
                    credits: {
                        enabled: !1
                    },
                    exporting: {
                        menuItemDefinitions: {
                            embed: {
                                onclick: v,
                                text: "Embed chart"
                            }
                        },
                        buttons: {
                            contextButton: {
                                menuItems: ["viewFullscreen", "printChart", "separator", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG", "separator", "embed"]
                            }
                        }
                    }
                }
                  , t = document.getElementById("chart-wrapper");
                t && (e.chart.height = t.offsetWidth,
                e.chart.height = t.offsetHeight),
                b(e)
            }
            ), [n, x, r, o, c]),
            "object" === typeof a() && d()(a()),
            window.Highcharts = a(),
            (0,
            s.jsxs)(s.Fragment, {
                children: [u ? (0,
                s.jsx)(l(), {
                    ref: t,
                    highcharts: a(),
                    options: u
                }) : (0,
                s.jsx)(f.Z, {
                    className: "h-full",
                    wrapperClassName: "h-full"
                }), (0,
                s.jsx)(p, {
                    isOpen: y,
                    onDismiss: function() {
                        return w(!1)
                    },
                    code: "&lt;iframe width=&quot;560&quot; height=&quot;315&quot; src=&quot;".concat(g.or, "/charts/embed/").concat(h, "&quot; title=&quot;").concat(r, "&quot; allowfullscreen&gt;&lt;/iframe&gt;")
                })]
            })
        }
    },
    4023: function(e, t, n) {
        "use strict";
        var s = n(8014);
        function r(e, t, n) {
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
            s.jsxs)("svg", function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {}
                      , s = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    s.forEach((function(t) {
                        r(e, t, n[t])
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
                s.jsx)("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                }), (0,
                s.jsx)("path", {
                    d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                })]
            }))
        }
    },
    77971: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSG: function() {
                return m
            }
        });
        var s = n(8014)
          , r = n(1984)
          , a = n(62044)
          , i = n(75657)
          , c = n.n(i)
          , l = n(9125)
          , o = n(81270)
          , d = n(4307)
          , h = n(29325)
          , x = function() {
            var e = (0,
            a.Z)("charts").t;
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsxs)(r.default, {
                    children: [(0,
                    s.jsx)("title", {
                        children: e("txns.metaTitle")
                    }), (0,
                    s.jsx)("meta", {
                        name: "title",
                        content: e("txns.metaTitle")
                    }), (0,
                    s.jsx)("meta", {
                        name: "description",
                        content: e("txns.metaDescription")
                    }), (0,
                    s.jsx)("meta", {
                        property: "og:title",
                        content: e("txns.metaTitle")
                    }), (0,
                    s.jsx)("meta", {
                        property: "og:description",
                        content: e("txns.metaDescription")
                    }), (0,
                    s.jsx)("meta", {
                        property: "twitter:title",
                        content: e("txns.metaTitle")
                    }), (0,
                    s.jsx)("meta", {
                        property: "twitter:description",
                        content: e("txns.metaDescription")
                    }), (0,
                    s.jsx)("meta", {
                        property: "og:image",
                        content: "".concat("https://meta.nearblocks.io/api", "/thumbnail/chart?title=").concat(e("txns.heading"), "\n          ")
                    }), (0,
                    s.jsx)("meta", {
                        property: "og:image:secure_url",
                        content: "".concat("https://meta.nearblocks.io/api", "/thumbnail/chart?title=").concat(e("txns.heading"))
                    }), (0,
                    s.jsx)("meta", {
                        name: "twitter:image:src",
                        content: "".concat("https://meta.nearblocks.io/api", "/thumbnail/chart?title=").concat(e("txns.heading"))
                    })]
                }), (0,
                s.jsxs)("section", {
                    children: [(0,
                    s.jsx)("div", {
                        className: "bg-hero-pattern h-72",
                        children: (0,
                        s.jsx)("div", {
                            className: "container mx-auto px-3",
                            children: (0,
                            s.jsxs)("div", {
                                className: "flex items-center justify-between flex-wrap lg:flex-nowrap pt-8",
                                children: [(0,
                                s.jsx)("h1", {
                                    className: "mb-3 sm:text-2xl text-xl text-white",
                                    children: e("txns.heading")
                                }), (0,
                                s.jsxs)("ol", {
                                    vocab: "https://schema.org/",
                                    typeof: "BreadcrumbList",
                                    className: "flex flex-wrap items-center text-xs text-white mb-4",
                                    children: [(0,
                                    s.jsxs)("li", {
                                        property: "itemListElement",
                                        typeof: "ListItem",
                                        className: "px-1",
                                        children: [(0,
                                        s.jsx)(c(), {
                                            href: "/charts",
                                            children: (0,
                                            s.jsx)("a", {
                                                property: "item",
                                                typeof: "WebPage",
                                                className: "text-blue-100",
                                                children: (0,
                                                s.jsx)("span", {
                                                    property: "name",
                                                    children: e("common:header.menu.home")
                                                })
                                            })
                                        }), (0,
                                        s.jsx)("meta", {
                                            property: "position",
                                            content: "1"
                                        })]
                                    }), "/", (0,
                                    s.jsxs)("li", {
                                        property: "itemListElement",
                                        typeof: "ListItem",
                                        className: "px-1",
                                        children: [(0,
                                        s.jsx)(c(), {
                                            href: "/charts",
                                            children: (0,
                                            s.jsx)("a", {
                                                property: "item",
                                                typeof: "WebPage",
                                                className: "text-blue-100",
                                                children: (0,
                                                s.jsx)("span", {
                                                    property: "name",
                                                    children: e("common:header.menu.charts")
                                                })
                                            })
                                        }), (0,
                                        s.jsx)("meta", {
                                            property: "position",
                                            content: "2"
                                        })]
                                    }), "/", (0,
                                    s.jsxs)("li", {
                                        property: "itemListElement",
                                        typeof: "ListItem",
                                        className: "px-1",
                                        children: [(0,
                                        s.jsx)("span", {
                                            property: "name",
                                            children: e("txns.heading")
                                        }), (0,
                                        s.jsx)("meta", {
                                            property: "position",
                                            content: "3"
                                        })]
                                    })]
                                })]
                            })
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: "container mx-auto px-3 -mt-48",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "block bg-white border soft-shadow rounded-lg overflow-hidden mb-10",
                            children: [(0,
                            s.jsx)("p", {
                                className: "leading-7 px-4 text-sm py-4 text-gray-500 border-b",
                                children: e("txns.description")
                            }), (0,
                            s.jsx)("div", {
                                className: "pl-2 pr-4 py-6",
                                children: (0,
                                s.jsx)("div", {
                                    style: {
                                        height: 550
                                    },
                                    children: (0,
                                    s.jsx)(o.Z, {})
                                })
                            })]
                        }), (0,
                        s.jsx)("h2", {
                            className: "mb-4 px-2 text-lg text-gray-700",
                            children: e("otherHeading")
                        }), (0,
                        s.jsx)(d.Z, {})]
                    }), (0,
                    s.jsx)("div", {
                        className: "py-8",
                        children: (0,
                        s.jsx)(h.Z, {})
                    })]
                })]
            })
        };
        x.Layout = l.Z;
        var m = !0;
        t.default = x
    }
}, function(e) {
    e.O(0, [5445, 6898, 1889, 6509, 6386, 1476, 9125, 9774, 2888, 179], (function() {
        return t = 28722,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);

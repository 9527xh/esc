(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9077], {
    57472: function(e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/charts/market-cap", function() {
            return r(3350)
        }
        ])
    },
    4307: function(e, t, r) {
        "use strict";
        var a = r(8014)
          , n = r(75657)
          , s = r.n(n)
          , i = r(80241)
          , c = r.n(i)
          , l = r(62044)
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
            a.jsx)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                children: o.map((function(t) {
                    return (0,
                    a.jsx)(a.Fragment, {
                        children: !1 === t.exclude && (0,
                        a.jsxs)("div", {
                            className: "block bg-white border soft-shadow rounded-lg overflow-hidden",
                            children: [(0,
                            a.jsx)(s(), {
                                href: t.link,
                                children: (0,
                                a.jsx)("a", {
                                    className: "block leading-7 p-3 text-sm text-gray-500 border-b truncate",
                                    children: (0,
                                    a.jsx)("h2", {
                                        children: e(t.text)
                                    })
                                })
                            }), (0,
                            a.jsx)("div", {
                                className: "pl-2 pr-4 py-6",
                                children: (0,
                                a.jsx)(s(), {
                                    href: t.link,
                                    children: (0,
                                    a.jsx)("a", {
                                        children: (0,
                                        a.jsx)(c(), {
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
    63068: function(e, t, r) {
        "use strict";
        var a = r(8014)
          , n = r(89043)
          , s = r(56168)
          , i = r(62044)
          , c = r(62423)
          , l = r(37506)
          , o = r(68804)
          , d = r(28653);
        t.Z = function() {
            var e = (0,
            i.Z)("charts").t
              , t = (0,
            c.ZP)("charts")
              , r = t.data
              , h = t.error
              , m = t.loading
              , p = (0,
            s.useMemo)((function() {
                try {
                    return r.charts.map((function(e) {
                        return {
                            x: (0,
                            n.Z)(e.date).valueOf(),
                            y: +e.market_cap,
                            date: e.date,
                            price: +e.near_price
                        }
                    }
                    ))
                } catch (h) {
                    return []
                }
            }
            ), [r]);
            return h || m ? (0,
            a.jsx)(l.Z, {
                className: "h-full",
                wrapperClassName: "h-full"
            }) : (0,
            a.jsx)(d.Z, {
                id: "market-cap",
                data: p,
                title: e("marketCap.heading"),
                yLabel: e("marketCap.yLabel"),
                tooltip: function() {
                    return "\n      ".concat((0,
                    n.Z)(this.point.date).format("dddd, MMMM DD, YYYY"), "<br/>\n      Market Cap: <strong>$").concat((0,
                    o.IB)(this.point.y), "</strong><br/>\n      Near Price: <strong>$").concat((0,
                    o.IB)(this.point.price), "</strong>\n    ")
                }
            })
        }
    },
    28653: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return b
            }
        });
        var a = r(8014)
          , n = r(17204)
          , s = r.n(n)
          , i = r(56168)
          , c = r(5062)
          , l = r.n(c)
          , o = r(78234)
          , d = r.n(o)
          , h = r(66386);
        function m(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        var p = function(e) {
            return (0,
            a.jsxs)("svg", function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {}
                      , a = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }
                    )))),
                    a.forEach((function(t) {
                        m(e, t, r[t])
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
                a.jsx)("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                }), (0,
                a.jsx)("path", {
                    d: "M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z"
                })]
            }))
        }
          , x = r(4023)
          , u = function(e) {
            var t = e.isOpen
              , r = e.onDismiss
              , n = e.code;
            return (0,
            a.jsx)(h.t9, {
                isOpen: t,
                onDismiss: r,
                className: "fixed bg-black bg-opacity-10 inset-0 z-30 flex items-center justify-center",
                children: (0,
                a.jsxs)(h.cZ, {
                    "aria-label": "Embed Chart",
                    isOpen: t,
                    onDismiss: r,
                    className: "w-full max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "flex items-center justify-between bg-gray-100 px-3 py-4",
                        children: [(0,
                        a.jsxs)("h4", {
                            className: "flex items-center",
                            children: [(0,
                            a.jsx)(p, {
                                className: "w-4 h-4 mr-2"
                            }), "Embed Chart"]
                        }), (0,
                        a.jsx)("button", {
                            className: "text-gray-500 fill-current",
                            onClick: r,
                            children: (0,
                            a.jsx)(x.Z, {})
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "p-4",
                        children: (0,
                        a.jsx)("div", {
                            contentEditable: "true",
                            dangerouslySetInnerHTML: {
                                __html: n
                            },
                            className: "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        })
                    })]
                })
            })
        }
          , g = r(68804)
          , f = r(37506)
          , b = function(e) {
            var t = e.ref
              , r = e.data
              , n = e.title
              , c = e.yLabel
              , o = e.tooltip
              , h = e.id
              , m = e.labelFormatter
              , p = (0,
            i.useState)()
              , x = p[0]
              , b = p[1]
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
                        text: n
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
                            formatter: m
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
                        data: r,
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
            ), [r, m, n, o, c]),
            "object" === typeof s() && d()(s()),
            window.Highcharts = s(),
            (0,
            a.jsxs)(a.Fragment, {
                children: [x ? (0,
                a.jsx)(l(), {
                    ref: t,
                    highcharts: s(),
                    options: x
                }) : (0,
                a.jsx)(f.Z, {
                    className: "h-full",
                    wrapperClassName: "h-full"
                }), (0,
                a.jsx)(u, {
                    isOpen: y,
                    onDismiss: function() {
                        return w(!1)
                    },
                    code: "&lt;iframe width=&quot;560&quot; height=&quot;315&quot; src=&quot;".concat(g.or, "/charts/embed/").concat(h, "&quot; title=&quot;").concat(n, "&quot; allowfullscreen&gt;&lt;/iframe&gt;")
                })]
            })
        }
    },
    4023: function(e, t, r) {
        "use strict";
        var a = r(8014);
        function n(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        t.Z = function(e) {
            return (0,
            a.jsxs)("svg", function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {}
                      , a = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }
                    )))),
                    a.forEach((function(t) {
                        n(e, t, r[t])
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
                a.jsx)("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                }), (0,
                a.jsx)("path", {
                    d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                })]
            }))
        }
    },
    3350: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            __N_SSG: function() {
                return m
            }
        });
        var a = r(8014)
          , n = r(1984)
          , s = r(62044)
          , i = r(75657)
          , c = r.n(i)
          , l = r(9125)
          , o = r(4307)
          , d = r(63068)
          , h = function() {
            var e = (0,
            s.Z)("charts").t;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)(n.default, {
                    children: [(0,
                    a.jsx)("title", {
                        children: e("marketCap.metaTitle")
                    }), (0,
                    a.jsx)("meta", {
                        name: "title",
                        content: e("marketCap.metaTitle")
                    }), (0,
                    a.jsx)("meta", {
                        name: "description",
                        content: e("marketCap.metaDescription")
                    }), (0,
                    a.jsx)("meta", {
                        property: "og:title",
                        content: e("marketCap.metaTitle")
                    }), (0,
                    a.jsx)("meta", {
                        property: "og:description",
                        content: e("marketCap.metaDescription")
                    }), (0,
                    a.jsx)("meta", {
                        property: "twitter:title",
                        content: e("marketCap.metaTitle")
                    }), (0,
                    a.jsx)("meta", {
                        property: "twitter:description",
                        content: e("marketCap.metaDescription")
                    }), (0,
                    a.jsx)("meta", {
                        property: "og:image",
                        content: "".concat("https://meta.nearblocks.io/api", "/thumbnail/chart?title=").concat(e("marketCap.heading"))
                    }), (0,
                    a.jsx)("meta", {
                        property: "og:image:secure_url",
                        content: "".concat("https://meta.nearblocks.io/api", "/thumbnail/chart?title=").concat(e("marketCap.heading"))
                    }), (0,
                    a.jsx)("meta", {
                        name: "twitter:image:src",
                        content: "".concat("https://meta.nearblocks.io/api", "/thumbnail/chart?title=").concat(e("marketCap.heading"))
                    })]
                }), (0,
                a.jsxs)("section", {
                    children: [(0,
                    a.jsx)("div", {
                        className: "bg-hero-pattern h-72",
                        children: (0,
                        a.jsx)("div", {
                            className: "container mx-auto px-3",
                            children: (0,
                            a.jsxs)("div", {
                                className: "flex items-center justify-between flex-wrap lg:flex-nowrap pt-8",
                                children: [(0,
                                a.jsx)("h1", {
                                    className: "mb-3 sm:text-2xl text-xl text-white",
                                    children: e("marketCap.heading")
                                }), (0,
                                a.jsxs)("ol", {
                                    vocab: "https://schema.org/",
                                    typeof: "BreadcrumbList",
                                    className: "flex flex-wrap text-xs text-white mb-4 items-center",
                                    children: [(0,
                                    a.jsxs)("li", {
                                        property: "itemListElement",
                                        typeof: "ListItem",
                                        className: "px-1",
                                        children: [(0,
                                        a.jsx)(c(), {
                                            href: "/charts",
                                            children: (0,
                                            a.jsx)("a", {
                                                property: "item",
                                                typeof: "WebPage",
                                                className: "text-blue-100",
                                                children: (0,
                                                a.jsx)("span", {
                                                    property: "name",
                                                    children: e("common:header.menu.home")
                                                })
                                            })
                                        }), (0,
                                        a.jsx)("meta", {
                                            property: "position",
                                            content: "1"
                                        })]
                                    }), "/", (0,
                                    a.jsxs)("li", {
                                        property: "itemListElement",
                                        typeof: "ListItem",
                                        className: "px-1",
                                        children: [(0,
                                        a.jsx)(c(), {
                                            href: "/charts",
                                            children: (0,
                                            a.jsx)("a", {
                                                property: "item",
                                                typeof: "WebPage",
                                                className: "text-blue-100",
                                                children: (0,
                                                a.jsx)("span", {
                                                    property: "name",
                                                    children: e("common:header.menu.charts")
                                                })
                                            })
                                        }), (0,
                                        a.jsx)("meta", {
                                            property: "position",
                                            content: "2"
                                        })]
                                    }), "/", (0,
                                    a.jsxs)("li", {
                                        property: "itemListElement",
                                        typeof: "ListItem",
                                        className: "px-1",
                                        children: [(0,
                                        a.jsx)("span", {
                                            property: "name",
                                            children: e("marketCap.heading")
                                        }), (0,
                                        a.jsx)("meta", {
                                            property: "position",
                                            content: "3"
                                        })]
                                    })]
                                })]
                            })
                        })
                    }), (0,
                    a.jsxs)("div", {
                        className: "container mx-auto px-3 -mt-48",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "block bg-white border soft-shadow rounded-lg overflow-hidden mb-10",
                            children: [(0,
                            a.jsx)("p", {
                                className: "leading-7 px-4 text-sm py-4 text-gray-500 border-b",
                                children: e("marketCap.description")
                            }), (0,
                            a.jsx)("div", {
                                className: "pl-2 pr-4 py-6",
                                children: (0,
                                a.jsx)("div", {
                                    style: {
                                        height: 550
                                    },
                                    children: (0,
                                    a.jsx)(d.Z, {})
                                })
                            })]
                        }), (0,
                        a.jsx)("h2", {
                            className: "mb-4 px-2 text-lg text-gray-700",
                            children: e("otherHeading")
                        }), (0,
                        a.jsx)(o.Z, {})]
                    })]
                })]
            })
        };
        h.Layout = l.Z;
        var m = !0;
        t.default = h
    }
}, function(e) {
    e.O(0, [5445, 6898, 1889, 6509, 6386, 1476, 9125, 9774, 2888, 179], (function() {
        return t = 57472,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);

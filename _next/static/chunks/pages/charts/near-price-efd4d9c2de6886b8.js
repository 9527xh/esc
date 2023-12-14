(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5855], {
    23899: function(e, t, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/charts/near-price.html", function() {
            return s(75568)
        }
        ])
    },
    4307: function(e, t, s) {
        "use strict";
        var r = s(8014)
          , a = s(75657)
          , i = s.n(a)
          , n = s(80241)
          , c = s.n(n)
          , l = s(62044)
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
            r.jsx)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                children: o.map((function(t) {
                    return (0,
                    r.jsx)(r.Fragment, {
                        children: !1 === t.exclude && (0,
                        r.jsxs)("div", {
                            className: "block bg-white border soft-shadow rounded-lg overflow-hidden",
                            children: [(0,
                            r.jsx)(i(), {
                                href: t.link,
                                children: (0,
                                r.jsx)("a", {
                                    className: "block leading-7 p-3 text-sm text-gray-500 border-b truncate",
                                    children: (0,
                                    r.jsx)("h2", {
                                        children: e(t.text)
                                    })
                                })
                            }), (0,
                            r.jsx)("div", {
                                className: "pl-2 pr-4 py-6",
                                children: (0,
                                r.jsx)(i(), {
                                    href: t.link,
                                    children: (0,
                                    r.jsx)("a", {
                                        children: (0,
                                        r.jsx)(c(), {
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
    47115: function(e, t, s) {
        "use strict";
        var r = s(8014)
          , a = s(89043)
          , i = s(56168)
          , n = s(62044)
          , c = s(62423)
          , l = s(37506)
          , o = s(68804)
          , d = s(28653);
        t.Z = function() {
            var e = (0,
            n.Z)("charts").t
              , t = (0,
            c.ZP)("charts")
              , s = t.data
              , h = t.error
              , x = t.loading
              , m = (0,
            i.useMemo)((function() {
                try {
                    return s.charts.map((function(e) {
                        return {
                            x: (0,
                            a.Z)(e.date).valueOf(),
                            y: +e.near_price,
                            date: e.date
                        }
                    }
                    ))
                } catch (h) {
                    return []
                }
            }
            ), [s]);
            return h || x ? (0,
            r.jsx)(l.Z, {
                className: "h-full",
                wrapperClassName: "h-full"
            }) : (0,
            r.jsx)(d.Z, {
                id: "near-price",
                data: m,
                title: e("nearPrice.heading"),
                yLabel: e("nearPrice.yLabel"),
                tooltip: function() {
                    return "\n      ".concat((0,
                    a.Z)(this.point.date).format("dddd, MMMM DD, YYYY"), "<br/>\n     ESCPrice: <strong>$").concat((0,
                    o.IB)(this.point.y), "</strong>\n    ")
                }
            })
        }
    },
    28653: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return j
            }
        });
        var r = s(8014)
          , a = s(17204)
          , i = s.n(a)
          , n = s(56168)
          , c = s(5062)
          , l = s.n(c)
          , o = s(78234)
          , d = s.n(o)
          , h = s(66386);
        function x(e, t, s) {
            return t in e ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = s,
            e
        }
        var m = function(e) {
            return (0,
            r.jsxs)("svg", function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {}
                      , r = Object.keys(s);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(s).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(s, e).enumerable
                    }
                    )))),
                    r.forEach((function(t) {
                        x(e, t, s[t])
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
                    d: "M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z"
                })]
            }))
        }
          , p = s(4023)
          , u = function(e) {
            var t = e.isOpen
              , s = e.onDismiss
              , a = e.code;
            return (0,
            r.jsx)(h.t9, {
                isOpen: t,
                onDismiss: s,
                className: "fixed bg-black bg-opacity-10 inset-0 z-30 flex items-center justify-center",
                children: (0,
                r.jsxs)(h.cZ, {
                    "aria-label": "Embed Chart",
                    isOpen: t,
                    onDismiss: s,
                    className: "w-full max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "flex items-center justify-between bg-gray-100 px-3 py-4",
                        children: [(0,
                        r.jsxs)("h4", {
                            className: "flex items-center",
                            children: [(0,
                            r.jsx)(m, {
                                className: "w-4 h-4 mr-2"
                            }), "Embed Chart"]
                        }), (0,
                        r.jsx)("button", {
                            className: "text-gray-500 fill-current",
                            onClick: s,
                            children: (0,
                            r.jsx)(p.Z, {})
                        })]
                    }), (0,
                    r.jsx)("div", {
                        className: "p-4",
                        children: (0,
                        r.jsx)("div", {
                            contentEditable: "true",
                            dangerouslySetInnerHTML: {
                                __html: a
                            },
                            className: "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        })
                    })]
                })
            })
        }
          , g = s(68804)
          , f = s(37506)
          , j = function(e) {
            var t = e.ref
              , s = e.data
              , a = e.title
              , c = e.yLabel
              , o = e.tooltip
              , h = e.id
              , x = e.labelFormatter
              , m = (0,
            n.useState)()
              , p = m[0]
              , j = m[1]
              , b = (0,
            n.useState)(!1)
              , y = b[0]
              , v = b[1]
              , w = function() {
                return v(!0)
            };
            return (0,
            n.useEffect)((function() {
                var e = {
                    chart: {
                        height: 550,
                        zoomType: "x"
                    },
                    title: {
                        text: a
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
                        data: s,
                        color: "rgba(3, 63, 64, 1)"
                    }],
                    credits: {
                        enabled: !1
                    },
                    exporting: {
                        menuItemDefinitions: {
                            embed: {
                                onclick: w,
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
                j(e)
            }
            ), [s, x, a, o, c]),
            "object" === typeof i() && d()(i()),
            window.Highcharts = i(),
            (0,
            r.jsxs)(r.Fragment, {
                children: [p ? (0,
                r.jsx)(l(), {
                    ref: t,
                    highcharts: i(),
                    options: p
                }) : (0,
                r.jsx)(f.Z, {
                    className: "h-full",
                    wrapperClassName: "h-full"
                }), (0,
                r.jsx)(u, {
                    isOpen: y,
                    onDismiss: function() {
                        return v(!1)
                    },
                    code: "&lt;iframe width=&quot;560&quot; height=&quot;315&quot; src=&quot;".concat(g.or, "/charts/embed/").concat(h, "&quot; title=&quot;").concat(a, "&quot; allowfullscreen&gt;&lt;/iframe&gt;")
                })]
            })
        }
    },
    4023: function(e, t, s) {
        "use strict";
        var r = s(8014);
        function a(e, t, s) {
            return t in e ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = s,
            e
        }
        t.Z = function(e) {
            return (0,
            r.jsxs)("svg", function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {}
                      , r = Object.keys(s);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(s).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(s, e).enumerable
                    }
                    )))),
                    r.forEach((function(t) {
                        a(e, t, s[t])
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
                    d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
                })]
            }))
        }
    },
    75568: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            __N_SSG: function() {
                return u
            }
        });
        var r = s(8014)
          , a = s(1984)
          , i = s(75657)
          , n = s.n(i)
          , c = s(62044)
          , l = s(62423)
          , o = s(37506)
          , d = s(68804)
          , h = s(9125)
          , x = s(4307)
          , m = s(47115)
          , p = function() {
            var e, t = (0,
            c.Z)("charts").t, s = (0,
            l.ZP)("stats", {
                revalidateOnReconnect: !0
            }), i = s.data, h = s.error, p = s.loading, u = null === i || void 0 === i || null === (e = i.stats) || void 0 === e ? void 0 : e[0];
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)(a.default, {
                    children: [(0,
                    r.jsx)("title", {
                        children: t("nearPrice.metaTitle")
                    }), (0,
                    r.jsx)("meta", {
                        name: "title",
                        content: t("nearPrice.metaTitle")
                    }), (0,
                    r.jsx)("meta", {
                        name: "description",
                        content: t("nearPrice.metaDescription")
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:title",
                        content: t("nearPrice.metaTitle")
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:description",
                        content: t("nearPrice.metaDescription")
                    }), (0,
                    r.jsx)("meta", {
                        property: "twitter:title",
                        content: t("nearPrice.metaTitle")
                    }), (0,
                    r.jsx)("meta", {
                        property: "twitter:description",
                        content: t("nearPrice.metaDescription")
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:image",
                        content: "".concat("https://meta.nearblocks.io/api", "/thumbnail/chart?title=").concat(t("nearPrice.heading"), "\n          ")
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:image:secure_url",
                        content: "".concat("https://meta.nearblocks.io/api", "/thumbnail/chart?title=").concat(t("nearPrice.heading"))
                    }), (0,
                    r.jsx)("meta", {
                        name: "twitter:image:src",
                        content: "".concat("https://meta.nearblocks.io/api", "/thumbnail/chart?title=").concat(t("nearPrice.heading"))
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
                            r.jsxs)("div", {
                                className: "flex justify-between border-bitems border-r-center flex-wrap lg:flex-nowrap pt-8",
                                children: [(0,
                                r.jsx)("h1", {
                                    className: "mb-3 sm:text-2xl text-xl text-white",
                                    children: t("nearPrice.heading")
                                }), (0,
                                r.jsxs)("ol", {
                                    vocab: "https://schema.org/",
                                    typeof: "BreadcrumbList",
                                    className: "flex justify-between items-center border-bflex border-r-wrap text-xs text-white mb-4",
                                    children: [(0,
                                    r.jsxs)("li", {
                                        property: "itemListElement",
                                        typeof: "ListItem",
                                        className: "px-1",
                                        children: [(0,
                                        r.jsx)(n(), {
                                            href: "/charts",
                                            children: (0,
                                            r.jsx)("a", {
                                                property: "item",
                                                typeof: "WebPage",
                                                className: "text-blue-100",
                                                children: (0,
                                                r.jsx)("span", {
                                                    property: "name",
                                                    children: t("common:header.menu.home")
                                                })
                                            })
                                        }), (0,
                                        r.jsx)("meta", {
                                            property: "position",
                                            content: "1"
                                        })]
                                    }), "/", (0,
                                    r.jsxs)("li", {
                                        property: "itemListElement",
                                        typeof: "ListItem",
                                        className: "px-1",
                                        children: [(0,
                                        r.jsx)(n(), {
                                            href: "/charts",
                                            children: (0,
                                            r.jsx)("a", {
                                                property: "item",
                                                typeof: "WebPage",
                                                className: "text-blue-100",
                                                children: (0,
                                                r.jsx)("span", {
                                                    property: "name",
                                                    children: t("common:header.menu.charts")
                                                })
                                            })
                                        }), (0,
                                        r.jsx)("meta", {
                                            property: "position",
                                            content: "2"
                                        })]
                                    }), "/", (0,
                                    r.jsxs)("li", {
                                        property: "itemListElement",
                                        typeof: "ListItem",
                                        className: "px-1",
                                        children: [(0,
                                        r.jsx)("span", {
                                            property: "name",
                                            children: t("nearPrice.heading")
                                        }), (0,
                                        r.jsx)("meta", {
                                            property: "position",
                                            content: "3"
                                        })]
                                    })]
                                })]
                            })
                        })
                    }), (0,
                    r.jsxs)("div", {
                        className: "container mx-auto px-3 -mt-48",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "bg-white border soft-shadow rounded-lg overflow-hidden mb-6 md:mb-5",
                            children: [(0,
                            r.jsx)("h3", {
                                className: "p-3 border-b text-gray-600 text-sm font-semibold",
                                children: t("nearPrice.statistics.heading")
                            }), !i && h && (0,
                            r.jsx)("div", {
                                className: "flex items-center h-16 mx-3 py-2 text-gray-400 text-xs",
                                children: "Error!"
                            }), u && (0,
                            r.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 text-sm text-gray-500 divide-x divide-y md:divide-y-0",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "divide-y",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [(0,
                                        r.jsx)("p", {
                                            className: "font-semibold px-4 py-3",
                                            children: t("nearPrice.statistics.price")
                                        }), (0,
                                        r.jsx)("p", {
                                            className: "font-semibold px-4 py-3",
                                            children: p ? (0,
                                            r.jsx)(o.Z, {
                                                wrapperClassName: "w-14"
                                            }) : "$".concat((0,
                                            d.IB)((null === u || void 0 === u ? void 0 : u.near_price) || 0))
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [(0,
                                        r.jsx)("p", {
                                            className: "px-4 py-3",
                                            children: t("nearPrice.statistics.marketCap")
                                        }), (0,
                                        r.jsx)("p", {
                                            className: "px-4 py-3",
                                            children: p ? (0,
                                            r.jsx)(o.Z, {
                                                wrapperClassName: "w-14"
                                            }) : "$".concat((0,
                                            d.IB)((null === u || void 0 === u ? void 0 : u.market_cap) || 0))
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [(0,
                                        r.jsx)("p", {
                                            className: "px-4 py-3",
                                            children: t("nearPrice.statistics.volume")
                                        }), (0,
                                        r.jsx)("p", {
                                            className: "px-4 py-3",
                                            children: p ? (0,
                                            r.jsx)(o.Z, {
                                                wrapperClassName: "w-14"
                                            }) : "$".concat((0,
                                            d.IB)((null === u || void 0 === u ? void 0 : u.volume) || 0))
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [(0,
                                        r.jsx)("p", {
                                            className: "px-4 py-3",
                                            children: t("nearPrice.statistics.volumeMarketCap")
                                        }), (0,
                                        r.jsx)("p", {
                                            className: "px-4 py-3",
                                            children: p ? (0,
                                            r.jsx)(o.Z, {
                                                wrapperClassName: "w-14"
                                            }) : "".concat((0,
                                            d.IB)(((null === u || void 0 === u ? void 0 : u.volume) || 0) / ((null === u || void 0 === u ? void 0 : u.market_cap) || 0) || 0))
                                        })]
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "divide-y",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [(0,
                                        r.jsx)("p", {
                                            className: "px-4 py-3",
                                            children: t("nearPrice.statistics.high24")
                                        }), (0,
                                        r.jsx)("p", {
                                            className: "px-4 py-3",
                                            children: p ? (0,
                                            r.jsx)(o.Z, {
                                                wrapperClassName: "w-14"
                                            }) : "$".concat((0,
                                            d.IB)((null === u || void 0 === u ? void 0 : u.high_24h) || 0))
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [(0,
                                        r.jsx)("p", {
                                            className: "px-4 py-3",
                                            children: t("nearPrice.statistics.low24")
                                        }), (0,
                                        r.jsx)("p", {
                                            className: "px-4 py-3",
                                            children: p ? (0,
                                            r.jsx)(o.Z, {
                                                wrapperClassName: "w-14"
                                            }) : "$".concat((0,
                                            d.IB)((null === u || void 0 === u ? void 0 : u.low_24h) || 0))
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [(0,
                                        r.jsx)("p", {
                                            className: "px-4 py-3",
                                            children: t("nearPrice.statistics.highAll")
                                        }), (0,
                                        r.jsx)("p", {
                                            className: "px-4 py-3",
                                            children: p ? (0,
                                            r.jsx)(o.Z, {
                                                wrapperClassName: "w-14"
                                            }) : "$".concat((0,
                                            d.IB)((null === u || void 0 === u ? void 0 : u.high_all) || 0))
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [(0,
                                        r.jsx)("p", {
                                            className: "px-4 py-3",
                                            children: t("nearPrice.statistics.lowAll")
                                        }), (0,
                                        r.jsx)("p", {
                                            className: "px-4 py-3",
                                            children: p ? (0,
                                            r.jsx)(o.Z, {
                                                wrapperClassName: "w-14"
                                            }) : "$".concat((0,
                                            d.IB)((null === u || void 0 === u ? void 0 : u.low_all) || 0))
                                        })]
                                    })]
                                })]
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "block bg-white border soft-shadow rounded-lg overflow-hidden mb-10",
                            children: [(0,
                            r.jsx)("p", {
                                className: "leading-7 px-4 text-sm py-4 text-gray-500 border-b",
                                children: t("nearPrice.description")
                            }), (0,
                            r.jsx)("div", {
                                className: "pl-2 pr-4 py-6",
                                children: (0,
                                r.jsx)("div", {
                                    style: {
                                        height: 550
                                    },
                                    children: (0,
                                    r.jsx)(m.Z, {})
                                })
                            })]
                        }), (0,
                        r.jsx)("h2", {
                            className: "mb-4 px-2 text-lg text-gray-700",
                            children: t("otherHeading")
                        }), (0,
                        r.jsx)(x.Z, {})]
                    })]
                })]
            })
        };
        p.Layout = h.Z;
        var u = !0;
        t.default = p
    }
}, function(e) {
    e.O(0, [5445, 6898, 1889, 6509, 6386, 1476, 9125, 9774, 2888, 179], (function() {
        return t = 23899,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);

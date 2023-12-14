(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8650], {
    31166: function(e, t, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/charts", function() {
            return s(79670)
        }
        ])
    },
    29325: function(e, t, s) {
        "use strict";
        var i = s(8014)
          , n = s(56168);
        t.Z = function() {
            var e = (0,
            n.useState)(!1)
              , t = e[0]
              , s = e[1];
            return (0,
            n.useEffect)((function() {
                var e = function() {
                    s(window.innerWidth < 768)
                };
                return e(),
                window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
            }
            ), []),
            t ? (0,
            i.jsx)("div", {
                className: "w-full justify-center flex -my-3",
                children: (0,
                i.jsx)("div", {
                    style: {
                        minWidth: 320,
                        minHeight: 100
                    },
                    children: (0,
                    i.jsx)("span", {
                        id: "ct_cDxrC1hz6DI"
                    })
                })
            }) : (0,
            i.jsx)("div", {
                className: "w-full justify-center flex -my-3",
                children: (0,
                i.jsx)("div", {
                    style: {
                        minWidth: 728,
                        minHeight: 90
                    },
                    children: (0,
                    i.jsx)("span", {
                        id: "ct_cbNvR30Gd3z"
                    })
                })
            })
        }
    },
    4307: function(e, t, s) {
        "use strict";
        var i = s(8014)
          , n = s(75657)
          , r = s.n(n)
          , a = s(80241)
          , c = s.n(a)
          , l = s(62044)
          , d = [{
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
            i.jsx)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                children: d.map((function(t) {
                    return (0,
                    i.jsx)(i.Fragment, {
                        children: !1 === t.exclude && (0,
                        i.jsxs)("div", {
                            className: "block bg-white border soft-shadow rounded-lg overflow-hidden",
                            children: [(0,
                            i.jsx)(r(), {
                                href: t.link,
                                children: (0,
                                i.jsx)("a", {
                                    className: "block leading-7 p-3 text-sm text-gray-500 border-b truncate",
                                    children: (0,
                                    i.jsx)("h2", {
                                        children: e(t.text)
                                    })
                                })
                            }), (0,
                            i.jsx)("div", {
                                className: "pl-2 pr-4 py-6",
                                children: (0,
                                i.jsx)(r(), {
                                    href: t.link,
                                    children: (0,
                                    i.jsx)("a", {
                                        children: (0,
                                        i.jsx)(c(), {
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
    79670: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            __N_SSG: function() {
                return x
            }
        });
        var i = s(8014)
          , n = s(1984)
          , r = s(62044)
          , a = s(9125)
          , c = s(4307)
          , l = s(29325)
          , d = function() {
            var e = (0,
            r.Z)("charts").t;
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsxs)(n.default, {
                    children: [(0,
                    i.jsx)("title", {
                        children: e("metaTitle")
                    }), (0,
                    i.jsx)("meta", {
                        name: "title",
                        content: e("metaTitle")
                    }), (0,
                    i.jsx)("meta", {
                        name: "description",
                        content: e("metaDescription")
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:title",
                        content: e("metaTitle")
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:image",
                        content: "/thumbnail/charts_statistics.png"
                    }), (0,
                    i.jsx)("meta", {
                        property: "og:description",
                        content: e("metaDescription")
                    }), (0,
                    i.jsx)("meta", {
                        property: "twitter:title",
                        content: e("metaTitle")
                    }), (0,
                    i.jsx)("meta", {
                        property: "twitter:image",
                        content: "/thumbnail/charts_statistics.png"
                    }), (0,
                    i.jsx)("meta", {
                        property: "twitter:description",
                        content: e("metaDescription")
                    })]
                }), (0,
                i.jsxs)("section", {
                    children: [(0,
                    i.jsx)("div", {
                        className: "bg-hero-pattern h-72",
                        children: (0,
                        i.jsx)("div", {
                            className: "container mx-auto px-3",
                            children: (0,
                            i.jsx)("h1", {
                                className: "mb-4 pt-8 sm:text-2xl text-xl text-white",
                                children: e("heading")
                            })
                        })
                    }), (0,
                    i.jsx)("div", {
                        className: "container mx-auto px-3 -mt-48",
                        children: (0,
                        i.jsx)(c.Z, {})
                    }), (0,
                    i.jsx)("div", {
                        className: "py-8",
                        children: (0,
                        i.jsx)(l.Z, {})
                    })]
                })]
            })
        };
        d.Layout = a.Z;
        var x = !0;
        t.default = d
    }
}, function(e) {
    e.O(0, [5445, 1889, 6509, 9125, 9774, 2888, 179], (function() {
        return t = 31166,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);

"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6993], {
    29325: function(e, t, r) {
        var n = r(8014)
          , s = r(56168);
        t.Z = function() {
            var e = (0,
            s.useState)(!1)
              , t = e[0]
              , r = e[1];
            return (0,
            s.useEffect)((function() {
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
            n.jsx)("div", {
                className: "w-full justify-center flex -my-3",
                children: (0,
                n.jsx)("div", {
                    style: {
                        minWidth: 320,
                        minHeight: 100
                    },
                    children: (0,
                    n.jsx)("span", {
                        id: "ct_cDxrC1hz6DI"
                    })
                })
            }) : (0,
            n.jsx)("div", {
                className: "w-full justify-center flex -my-3",
                children: (0,
                n.jsx)("div", {
                    style: {
                        minWidth: 728,
                        minHeight: 90
                    },
                    children: (0,
                    n.jsx)("span", {
                        id: "ct_cbNvR30Gd3z"
                    })
                })
            })
        }
    },
    89819: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return x
            }
        });
        var n = r(8014)
          , s = r(92953)
          , a = r(80241)
          , l = r.n(a)
          , i = [{
            title: "Ref Finance - #1 AMM on NEAR",
            description: "Ref Finance is a community-led, multi-purpose DeFi platform built on the NEAR Protocol.",
            url: "https://ref.finance",
            image: "/sponsored/ref-finance-icon.svg"
        }]
          , c = function() {
            return (0,
            n.jsx)("div", {
                children: i.map((function(e, t) {
                    return (0,
                    n.jsxs)("div", {
                        className: "py-3 ".concat(i.length > 1 && i.length - 1 !== t && "border-b"),
                        children: [(0,
                        n.jsx)("a", {
                            href: e.url,
                            target: "_blank",
                            rel: "noopener noreferrer nofollow",
                            children: (0,
                            n.jsxs)("span", {
                                className: "flex items-center text-green-500 text-sm mb-2",
                                children: [(0,
                                n.jsx)(l(), {
                                    src: e.image,
                                    alt: "1inch - #1 DeFi aggregator",
                                    width: 20,
                                    height: 20,
                                    className: "w-5 h-5 mr-3"
                                }), (0,
                                n.jsxs)("h3", {
                                    className: "ml-2",
                                    children: [" ", e.title]
                                })]
                            })
                        }), (0,
                        n.jsx)("p", {
                            className: "text-xs text-gray-500",
                            children: e.description
                        })]
                    }, t)
                }
                ))
            })
        }
          , o = function() {
            return (0,
            n.jsxs)("a", {
                href: "https://near.staderlabs.com/lt/near?tab=Stake",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                children: [(0,
                n.jsxs)("span", {
                    className: "flex items-center text-green-500 text-sm mb-2",
                    children: [(0,
                    n.jsx)(l(), {
                        src: "/sponsored/stader.png",
                        alt: "Stader Labs",
                        width: 15,
                        height: 20,
                        className: "w-4 h-4 mr-3"
                    }), (0,
                    n.jsx)("h3", {
                        className: "ml-2",
                        children: "Stader Labs"
                    })]
                }), (0,
                n.jsx)("p", {
                    className: "text-xs text-gray-500",
                    children: "High DeFi Yields ~21% on NearX with Stader | Multi-Layer Security | Zero Rewards Loss | $1 Mn Bug Bounty"
                })]
            })
        }
          , u = [{
            title: "1inch Wallet  - Your self-custodial vault",
            description: "Audited by top security firms. Hardware wallet connection. MEV protected. Easy to use, secure and self-custodial. Try the 1inch Wallet now!",
            url: "https://1inch.network/Nearblocks_StoreButton",
            image: "/sponsored/1inch.svg"
        }]
          , d = function() {
            return (0,
            n.jsx)("div", {
                children: u.map((function(e, t) {
                    return (0,
                    n.jsxs)("div", {
                        className: "py-3 ".concat(u.length > 1 && u.length - 1 !== t && "border-b"),
                        children: [(0,
                        n.jsx)("a", {
                            href: e.url,
                            target: "_blank",
                            rel: "noopener noreferrer nofollow",
                            children: (0,
                            n.jsxs)("span", {
                                className: "flex items-center text-green-500 text-sm mb-2",
                                children: [(0,
                                n.jsx)(l(), {
                                    src: e.image,
                                    alt: "1inch - #1 DeFi aggregator",
                                    width: 20,
                                    height: 20,
                                    className: "w-5 h-5 mr-3"
                                }), (0,
                                n.jsxs)("h3", {
                                    className: "ml-2",
                                    children: [" ", e.title]
                                })]
                            })
                        }), (0,
                        n.jsx)("p", {
                            className: "text-xs text-gray-500",
                            children: e.description
                        })]
                    }, t)
                }
                ))
            })
        }
          , h = r(25429)
          , x = function() {
            return (0,
            n.jsxs)("div", {
                className: "flex items-center flex-wrap flex-shrink-0 max-w-full px-2 space-x-2 pt-4",
                children: [(0,
                n.jsxs)(s.v2, {
                    children: [(0,
                    n.jsxs)(s.j2, {
                        className: "flex bg-green-500 border border-green-900/10 hover:bg-green-400 text-white text-xs px-3 py-2 mb-4 rounded focus:outline-none",
                        children: ["Buy ", (0,
                        n.jsx)(h.Z, {
                            className: "h-4 w-4 fill-current ml-1"
                        })]
                    }), (0,
                    n.jsxs)(s.qy, {
                        className: "bg-white w-60 shadow-lg border rounded-lg p-3 mt-2 slide-down",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-xs text-gray-400 absolute right-2 top-2",
                            style: {
                                fontSize: "10px"
                            },
                            children: "Sponsored"
                        }), (0,
                        n.jsx)("ul", {
                            className: "space-y-4 divide-y",
                            children: (0,
                            n.jsx)("li", {
                                className: "pt-3"
                            })
                        })]
                    })]
                }), (0,
                n.jsxs)(s.v2, {
                    children: [(0,
                    n.jsxs)(s.j2, {
                        className: "flex bg-green-500 hover:bg-green-400 border border-green-900/10 text-white text-xs px-3 py-2 mb-4 rounded focus:outline-none",
                        children: ["Trade ", (0,
                        n.jsx)(h.Z, {
                            className: "h-4 w-4 fill-current ml-1"
                        })]
                    }), (0,
                    n.jsxs)(s.qy, {
                        className: "bg-white w-60 shadow-lg border rounded-lg p-3 mt-2 slide-down",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-xs text-gray-400 absolute right-2 top-2",
                            style: {
                                fontSize: "10px"
                            },
                            children: "Sponsored"
                        }), (0,
                        n.jsx)("ul", {
                            className: "space-y-4 divide-y",
                            children: (0,
                            n.jsx)("li", {
                                className: "pt-3",
                                children: (0,
                                n.jsx)(c, {})
                            })
                        })]
                    })]
                }), (0,
                n.jsxs)(s.v2, {
                    children: [(0,
                    n.jsxs)(s.j2, {
                        className: "flex bg-green-500 hover:bg-green-400 border border-green-900/10 text-white text-xs px-3 py-2 mb-4 rounded focus:outline-none",
                        children: ["Earn ", (0,
                        n.jsx)(h.Z, {
                            className: "h-4 w-4 fill-current ml-1"
                        })]
                    }), (0,
                    n.jsxs)(s.qy, {
                        className: "bg-white w-60 shadow-lg border rounded-lg p-3 mt-2 slide-down",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-xs text-gray-400 absolute right-2 top-2",
                            style: {
                                fontSize: "10px"
                            },
                            children: "Sponsored"
                        }), (0,
                        n.jsx)("ul", {
                            className: "space-y-4 divide-y",
                            children: (0,
                            n.jsx)("li", {
                                className: "pt-3",
                                children: (0,
                                n.jsx)(o, {})
                            })
                        })]
                    })]
                }), (0,
                n.jsxs)(s.v2, {
                    children: [(0,
                    n.jsxs)(s.j2, {
                        className: "flex bg-green-500 hover:bg-green-400 border border-green-900/10 text-white text-xs px-3 py-2 mb-4 rounded focus:outline-none",
                        children: ["Store ", (0,
                        n.jsx)(h.Z, {
                            className: "h-4 w-4 fill-current ml-1"
                        })]
                    }), (0,
                    n.jsxs)(s.qy, {
                        className: "bg-white w-60 shadow-lg border rounded-lg p-3 mt-2 slide-down",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-xs text-gray-400 absolute right-2 top-2",
                            style: {
                                fontSize: "10px"
                            },
                            children: "Sponsored"
                        }), (0,
                        n.jsx)("ul", {
                            className: "space-y-4 divide-y",
                            children: (0,
                            n.jsx)("li", {
                                className: "pt-3",
                                children: (0,
                                n.jsx)(d, {})
                            })
                        })]
                    })]
                })]
            })
        }
    },
    66069: function(e, t, r) {
        r.d(t, {
            z: function() {
                return f
            }
        });
        var n = r(44453)
          , s = r.n(n)
          , a = r(8014)
          , l = r(32435)
          , i = r(56168);
        function c(e, t, r, n, s, a, l) {
            try {
                var i = e[a](l)
                  , c = i.value
            } catch (o) {
                return void r(o)
            }
            i.done ? t(c) : Promise.resolve(c).then(n, s)
        }
        function o(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    o(e, t, r[t])
                }
                ))
            }
            return e
        }
        function d(e, t) {
            if (null == e)
                return {};
            var r, n, s = function(e, t) {
                if (null == e)
                    return {};
                var r, n, s = {}, a = Object.keys(e);
                for (n = 0; n < a.length; n++)
                    r = a[n],
                    t.indexOf(r) >= 0 || (s[r] = e[r]);
                return s
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    r = a[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
            }
            return s
        }
        var h = "/images/tokenplaceholder.svg"
          , x = function() {
            var e, t = (e = s().mark((function e(t) {
                var r, n, a, i = arguments;
                return s().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (r = i.length > 1 && void 0 !== i[1] ? i[1] : "",
                            n = i.length > 2 && void 0 !== i[2] ? i[2] : "",
                            !(r.startsWith("https://") || r.startsWith("http://") || r.startsWith("data:image"))) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return", r);
                        case 3:
                            if (!n || !t.startsWith("https://arweave.net") && !n.startsWith("https://arweave.net")) {
                                e.next = 13;
                                break
                            }
                            return e.prev = 4,
                            e.next = 7,
                            l.ZP.get(t ? "".concat(t.replace(/\/+$/, ""), "/").concat(n) : "".concat(n));
                        case 7:
                            return a = e.sent,
                            e.abrupt("return", a.data.media);
                        case 11:
                            e.prev = 11,
                            e.t0 = e.catch(4);
                        case 13:
                            if (!t) {
                                e.next = 15;
                                break
                            }
                            return e.abrupt("return", "".concat(t, "/").concat(r));
                        case 15:
                            return e.abrupt("return", "https://cloudflare-ipfs.com/ipfs/".concat(r));
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
                  , r = arguments;
                return new Promise((function(n, s) {
                    var a = e.apply(t, r);
                    function l(e) {
                        c(a, n, s, l, i, "next", e)
                    }
                    function i(e) {
                        c(a, n, s, l, i, "throw", e)
                    }
                    l(void 0)
                }
                ))
            }
            );
            return function(e) {
                return t.apply(this, arguments)
            }
        }()
          , f = function(e) {
            var t = e.base
              , r = e.media
              , n = e.alt
              , s = e.reference
              , l = d(e, ["base", "media", "alt", "reference"])
              , c = (0,
            i.useState)("")
              , o = c[0]
              , h = c[1]
              , f = (0,
            i.useState)(!0)
              , p = f[0]
              , g = f[1];
            (0,
            i.useEffect)((function() {
                (r || t || s) && x(t || "", r || "", s).then(h)
            }
            ), [t, r, s]);
            return (0,
            a.jsxs)("span", {
                className: "w-full h-full flex items-center justify-center relative",
                children: [p && (0,
                a.jsx)("span", {
                    className: "absolute inset-0 bg-white",
                    children: (0,
                    a.jsx)("span", {
                        className: "absolute inset-0 animate-pulse bg-gray-300 rounded"
                    })
                }), (0,
                a.jsx)(m, u({
                    src: o,
                    alt: n
                }, l, {
                    onLoad: function() {
                        return g(!1)
                    }
                }))]
            })
        }
          , m = function(e) {
            var t = e.src
              , r = e.alt
              , n = d(e, ["src", "alt"]);
            return (0,
            a.jsx)("img", u({
                src: t || h,
                alt: r
            }, n, {
                onError: function(e) {
                    e.target.onError = null,
                    e.target.src = h
                }
            }))
        };
        t.Z = m
    },
    87804: function(e, t, r) {
        var n = r(8014)
          , s = r(45666);
        t.Z = function(e) {
            var t = e.status
              , r = e.showLabel
              , a = void 0 !== r && r
              , l = function(e) {
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
              , i = l.icon;
            return (0,
            n.jsx)("div", {
                className: "w-full md:w-3/4 break-words",
                children: (0,
                n.jsxs)("span", {
                    className: "inline-flex items-center text-xs rounded py-1 ".concat(l.bg, " ").concat(l.text, " ").concat(a ? " px-2" : " px-1"),
                    children: [(0,
                    n.jsx)(i, {}), a && (0,
                    n.jsx)("span", {
                        className: "ml-2",
                        children: l.label
                    })]
                })
            })
        }
    },
    7732: function(e, t, r) {
        var n = r(75332)
          , s = r(56168);
        t.Z = function() {
            var e = (0,
            n.useRouter)()
              , t = e.push
              , r = e.asPath;
            return [(0,
            s.useMemo)((function() {
                return r.split("#")[1]
            }
            ), [r]), (0,
            s.useCallback)((function(e) {
                t({
                    pathname: new URL(r,"http://localhost/").pathname,
                    hash: e
                }, void 0, {
                    shallow: !0
                })
            }
            ), [r, t])]
        }
    }
}]);

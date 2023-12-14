function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
} 
var bhs = getQueryString('hs');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5699], {
    73077: function(e, s, t) {
        "use strict";
        t.d(s, {
            Z: function() {
                return i
            }
        });
        var r = t(56168)
          , l = t(67014)
          , n = t(62044)
          , a = function(e, s, t, r) {
            return new (t || (t = Promise))((function(l, n) {
                function a(e) {
                    try {
                        i(r.next(e))
                    } catch (s) {
                        n(s)
                    }
                }
                function c(e) {
                    try {
                        i(r.throw(e))
                    } catch (s) {
                        n(s)
                    }
                }
                function i(e) {
                    var s;
                    e.done ? l(e.value) : (s = e.value,
                    s instanceof t ? s : new t((function(e) {
                        e(s)
                    }
                    ))).then(a, c)
                }
                i((r = r.apply(e, s || [])).next())
            }
            ))
        }
          , c = function(e, s) {
            var t, r, l, n, a = {
                label: 0,
                sent: function() {
                    if (1 & l[0])
                        throw l[1];
                    return l[1]
                },
                trys: [],
                ops: []
            };
            return n = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n;
            function c(n) {
                return function(c) {
                    return function(n) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                r && (l = 2 & n[0] ? r.return : n[0] ? r.throw || ((l = r.return) && l.call(r),
                                0) : r.next) && !(l = l.call(r, n[1])).done)
                                    return l;
                                switch (r = 0,
                                l && (n = [2 & n[0], l.value]),
                                n[0]) {
                                case 0:
                                case 1:
                                    l = n;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: n[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = n[1],
                                    n = [0];
                                    continue;
                                case 7:
                                    n = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(l = (l = a.trys).length > 0 && l[l.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === n[0] && (!l || n[1] > l[0] && n[1] < l[3])) {
                                        a.label = n[1];
                                        break
                                    }
                                    if (6 === n[0] && a.label < l[1]) {
                                        a.label = l[1],
                                        l = n;
                                        break
                                    }
                                    if (l && a.label < l[2]) {
                                        a.label = l[2],
                                        a.ops.push(n);
                                        break
                                    }
                                    l[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                n = s.call(e, a)
                            } catch (c) {
                                n = [6, c],
                                r = 0
                            } finally {
                                t = l = 0
                            }
                        if (5 & n[0])
                            throw n[1];
                        return {
                            value: n[0] ? n[1] : void 0,
                            done: !0
                        }
                    }([n, c])
                }
            }
        };
        function i(e) {
            var s = e.dynamic
              , t = e.namespaces
              , i = void 0 === t ? [] : t
              , o = e.fallback
              , d = e.children
              , u = (0,
            r.useContext)(l.Y).config
              , m = (0,
            n.Z)().lang
              , f = (0,
            r.useState)(!1)
              , x = f[0]
              , h = f[1]
              , p = (0,
            r.useState)([])
              , b = p[0]
              , w = p[1]
              , g = s || u.loadLocaleFrom || function() {
                return Promise.resolve({})
            }
            ;
            return (0,
            r.useEffect)((function() {
                !function() {
                    a(this, void 0, void 0, (function() {
                        var e;
                        return c(this, (function(s) {
                            switch (s.label) {
                            case 0:
                                return "function" !== typeof g ? [2] : [4, Promise.all(i.map((function(e) {
                                    return g(m, e)
                                }
                                )))];
                            case 1:
                                return e = s.sent(),
                                w(e),
                                h(!0),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }()
            }
            ), [i.join()]),
            x ? r.createElement(l.Z, {
                lang: m,
                namespaces: i.reduce((function(e, s, t) {
                    return e[s] = b[t],
                    e
                }
                ), {})
            }, d) : o || null
        }
    },
    46834: function(e, s, t) {
        "use strict";
        t.d(s, {
            Z: function() {
                return o
            }
        });
        var r = t(56168)
          , l = t(62044)
          , n = /<(\w+)>(.*?)<\/\1>|<(\w+)\/>/
          , a = /(?:\r\n|\r|\n)/g;
        function c(e) {
            if (!e.length)
                return [];
            var s = e.slice(0, 4)
              , t = s[0]
              , r = s[1]
              , l = s[2];
            return [[t || l, r || "", s[3]]].concat(c(e.slice(4, e.length)))
        }
        function i(e, s) {
            void 0 === s && (s = []);
            var t = e.replace(a, "").split(n);
            if (1 === t.length)
                return e;
            var l = []
              , o = t.shift();
            return o && l.push(o),
            c(t).forEach((function(e, t) {
                var n = e[0]
                  , a = e[1]
                  , c = e[2]
                  , o = s[n] || r.createElement(r.Fragment, null);
                l.push((0,
                r.cloneElement)(o, {
                    key: t
                }, a ? i(a, s) : o.props.children)),
                c && l.push(c)
            }
            )),
            l
        }
        function o(e) {
            var s = e.i18nKey
              , t = e.values
              , n = e.components
              , a = e.fallback
              , c = e.defaultTrans
              , o = e.ns
              , d = (0,
            l.Z)(o)
              , u = d.t
              , m = d.lang;
            return (0,
            r.useMemo)((function() {
                var e = u(s, t, {
                    fallback: a,
                    default: c
                });
                return n && 0 !== n.length ? i(e, n) : e
            }
            ), [s, t, n, m])
        }
    },
    7202: function(e, s) {
        "use strict";
        var t = "function" === typeof Symbol && Symbol.for
          , r = t ? Symbol.for("react.element") : 60103
          , l = t ? Symbol.for("react.portal") : 60106
          , n = t ? Symbol.for("react.fragment") : 60107
          , a = t ? Symbol.for("react.strict_mode") : 60108
          , c = t ? Symbol.for("react.profiler") : 60114
          , i = t ? Symbol.for("react.provider") : 60109
          , o = t ? Symbol.for("react.context") : 60110
          , d = t ? Symbol.for("react.async_mode") : 60111
          , u = t ? Symbol.for("react.concurrent_mode") : 60111
          , m = t ? Symbol.for("react.forward_ref") : 60112
          , f = t ? Symbol.for("react.suspense") : 60113
          , x = t ? Symbol.for("react.suspense_list") : 60120
          , h = t ? Symbol.for("react.memo") : 60115
          , p = t ? Symbol.for("react.lazy") : 60116
          , b = t ? Symbol.for("react.block") : 60121
          , w = t ? Symbol.for("react.fundamental") : 60117
          , g = t ? Symbol.for("react.responder") : 60118
          , j = t ? Symbol.for("react.scope") : 60119;
        function v(e) {
            if ("object" === typeof e && null !== e) {
                var s = e.$$typeof;
                switch (s) {
                case r:
                    switch (e = e.type) {
                    case d:
                    case u:
                    case n:
                    case c:
                    case a:
                    case f:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                        case o:
                        case m:
                        case p:
                        case h:
                        case i:
                            return e;
                        default:
                            return s
                        }
                    }
                case l:
                    return s
                }
            }
        }
        function y(e) {
            return v(e) === u
        }
        s.AsyncMode = d,
        s.ConcurrentMode = u,
        s.ContextConsumer = o,
        s.ContextProvider = i,
        s.Element = r,
        s.ForwardRef = m,
        s.Fragment = n,
        s.Lazy = p,
        s.Memo = h,
        s.Portal = l,
        s.Profiler = c,
        s.StrictMode = a,
        s.Suspense = f,
        s.isAsyncMode = function(e) {
            return y(e) || v(e) === d
        }
        ,
        s.isConcurrentMode = y,
        s.isContextConsumer = function(e) {
            return v(e) === o
        }
        ,
        s.isContextProvider = function(e) {
            return v(e) === i
        }
        ,
        s.isElement = function(e) {
            return "object" === typeof e && null !== e && e.$$typeof === r
        }
        ,
        s.isForwardRef = function(e) {
            return v(e) === m
        }
        ,
        s.isFragment = function(e) {
            return v(e) === n
        }
        ,
        s.isLazy = function(e) {
            return v(e) === p
        }
        ,
        s.isMemo = function(e) {
            return v(e) === h
        }
        ,
        s.isPortal = function(e) {
            return v(e) === l
        }
        ,
        s.isProfiler = function(e) {
            return v(e) === c
        }
        ,
        s.isStrictMode = function(e) {
            return v(e) === a
        }
        ,
        s.isSuspense = function(e) {
            return v(e) === f
        }
        ,
        s.isValidElementType = function(e) {
            return "string" === typeof e || "function" === typeof e || e === n || e === u || e === c || e === a || e === f || e === x || "object" === typeof e && null !== e && (e.$$typeof === p || e.$$typeof === h || e.$$typeof === i || e.$$typeof === o || e.$$typeof === m || e.$$typeof === w || e.$$typeof === g || e.$$typeof === j || e.$$typeof === b)
        }
        ,
        s.typeOf = v
    },
    2258: function(e, s, t) {
        "use strict";
        e.exports = t(7202)
    },
    10681: function(e, s, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/blocks/[hash]", function() {
            return t(43400)
        }
        ])
    },
    29325: function(e, s, t) {
        "use strict";
        var r = t(8014)
          , l = t(56168);
        s.Z = function() {
            var e = (0,
            l.useState)(!1)
              , s = e[0]
              , t = e[1];
            return (0,
            l.useEffect)((function() {
                var e = function() {
                    t(window.innerWidth < 768)
                };
                return e(),
                window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
            }
            ), []),
            s ? (0,
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
    89819: function(e, s, t) {
        "use strict";
        t.d(s, {
            Z: function() {
                return f
            }
        });
        var r = t(8014)
          , l = t(92953)
          , n = t(80241)
          , a = t.n(n)
          , c = [{
            title: "Ref Finance - #1 AMM on NEAR",
            description: "Ref Finance is a community-led, multi-purpose DeFi platform built on theESCProtocol.",
            url: "https://ref.finance",
            image: "/sponsored/ref-finance-icon.svg"
        }]
          , i = function() {
            return (0,
            r.jsx)("div", {
                children: c.map((function(e, s) {
                    return (0,
                    r.jsxs)("div", {
                        className: "py-3 ".concat(c.length > 1 && c.length - 1 !== s && "border-b"),
                        children: [(0,
                        r.jsx)("a", {
                            href: e.url,
                            target: "_blank",
                            rel: "noopener noreferrer nofollow",
                            children: (0,
                            r.jsxs)("span", {
                                className: "flex items-center text-green-500 text-sm mb-2",
                                children: [(0,
                                r.jsx)(a(), {
                                    src: e.image,
                                    alt: "1inch - #1 DeFi aggregator",
                                    width: 20,
                                    height: 20,
                                    className: "w-5 h-5 mr-3"
                                }), (0,
                                r.jsxs)("h3", {
                                    className: "ml-2",
                                    children: [" ", e.title]
                                })]
                            })
                        }), (0,
                        r.jsx)("p", {
                            className: "text-xs text-gray-500",
                            children: e.description
                        })]
                    }, s)
                }
                ))
            })
        }
          , o = function() {
            return (0,
            r.jsxs)("a", {
                href: "https://near.staderlabs.com/lt/near?tab=Stake",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                children: [(0,
                r.jsxs)("span", {
                    className: "flex items-center text-green-500 text-sm mb-2",
                    children: [(0,
                    r.jsx)(a(), {
                        src: "/sponsored/stader.png",
                        alt: "Stader Labs",
                        width: 15,
                        height: 20,
                        className: "w-4 h-4 mr-3"
                    }), (0,
                    r.jsx)("h3", {
                        className: "ml-2",
                        children: "Stader Labs"
                    })]
                }), (0,
                r.jsx)("p", {
                    className: "text-xs text-gray-500",
                    children: "High DeFi Yields ~21% on NearX with Stader | Multi-Layer Security | Zero Rewards Loss | $1 Mn Bug Bounty"
                })]
            })
        }
          , d = [{
            title: "1inch Wallet  - Your self-custodial vault",
            description: "Audited by top security firms. Hardware wallet connection. MEV protected. Easy to use, secure and self-custodial. Try the 1inch Wallet now!",
            url: "https://1inch.network/Nearblocks_StoreButton",
            image: "/sponsored/1inch.svg"
        }]
          , u = function() {
            return (0,
            r.jsx)("div", {
                children: d.map((function(e, s) {
                    return (0,
                    r.jsxs)("div", {
                        className: "py-3 ".concat(d.length > 1 && d.length - 1 !== s && "border-b"),
                        children: [(0,
                        r.jsx)("a", {
                            href: e.url,
                            target: "_blank",
                            rel: "noopener noreferrer nofollow",
                            children: (0,
                            r.jsxs)("span", {
                                className: "flex items-center text-green-500 text-sm mb-2",
                                children: [(0,
                                r.jsx)(a(), {
                                    src: e.image,
                                    alt: "1inch - #1 DeFi aggregator",
                                    width: 20,
                                    height: 20,
                                    className: "w-5 h-5 mr-3"
                                }), (0,
                                r.jsxs)("h3", {
                                    className: "ml-2",
                                    children: [" ", e.title]
                                })]
                            })
                        }), (0,
                        r.jsx)("p", {
                            className: "text-xs text-gray-500",
                            children: e.description
                        })]
                    }, s)
                }
                ))
            })
        }
          , m = t(25429)
          , f = function() {
            return (0,
            r.jsxs)("div", {
                className: "flex items-center flex-wrap flex-shrink-0 max-w-full px-2 space-x-2 pt-4",
                children: [(0,
                r.jsxs)(l.v2, {
                    children: [(0,
                    r.jsxs)(l.j2, {
                        className: "flex bg-green-500 border border-green-900/10 hover:bg-green-400 text-white text-xs px-3 py-2 mb-4 rounded focus:outline-none",
                        children: ["Buy ", (0,
                        r.jsx)(m.Z, {
                            className: "h-4 w-4 fill-current ml-1"
                        })]
                    }), (0,
                    r.jsxs)(l.qy, {
                        className: "bg-white w-60 shadow-lg border rounded-lg p-3 mt-2 slide-down",
                        children: [(0,
                        r.jsx)("span", {
                            className: "text-xs text-gray-400 absolute right-2 top-2",
                            style: {
                                fontSize: "10px"
                            },
                            children: "Sponsored"
                        }), (0,
                        r.jsx)("ul", {
                            className: "space-y-4 divide-y",
                            children: (0,
                            r.jsx)("li", {
                                className: "pt-3"
                            })
                        })]
                    })]
                }), (0,
                r.jsxs)(l.v2, {
                    children: [(0,
                    r.jsxs)(l.j2, {
                        className: "flex bg-green-500 hover:bg-green-400 border border-green-900/10 text-white text-xs px-3 py-2 mb-4 rounded focus:outline-none",
                        children: ["Trade ", (0,
                        r.jsx)(m.Z, {
                            className: "h-4 w-4 fill-current ml-1"
                        })]
                    }), (0,
                    r.jsxs)(l.qy, {
                        className: "bg-white w-60 shadow-lg border rounded-lg p-3 mt-2 slide-down",
                        children: [(0,
                        r.jsx)("span", {
                            className: "text-xs text-gray-400 absolute right-2 top-2",
                            style: {
                                fontSize: "10px"
                            },
                            children: "Sponsored"
                        }), (0,
                        r.jsx)("ul", {
                            className: "space-y-4 divide-y",
                            children: (0,
                            r.jsx)("li", {
                                className: "pt-3",
                                children: (0,
                                r.jsx)(i, {})
                            })
                        })]
                    })]
                }), (0,
                r.jsxs)(l.v2, {
                    children: [(0,
                    r.jsxs)(l.j2, {
                        className: "flex bg-green-500 hover:bg-green-400 border border-green-900/10 text-white text-xs px-3 py-2 mb-4 rounded focus:outline-none",
                        children: ["Earn ", (0,
                        r.jsx)(m.Z, {
                            className: "h-4 w-4 fill-current ml-1"
                        })]
                    }), (0,
                    r.jsxs)(l.qy, {
                        className: "bg-white w-60 shadow-lg border rounded-lg p-3 mt-2 slide-down",
                        children: [(0,
                        r.jsx)("span", {
                            className: "text-xs text-gray-400 absolute right-2 top-2",
                            style: {
                                fontSize: "10px"
                            },
                            children: "Sponsored"
                        }), (0,
                        r.jsx)("ul", {
                            className: "space-y-4 divide-y",
                            children: (0,
                            r.jsx)("li", {
                                className: "pt-3",
                                children: (0,
                                r.jsx)(o, {})
                            })
                        })]
                    })]
                }), (0,
                r.jsxs)(l.v2, {
                    children: [(0,
                    r.jsxs)(l.j2, {
                        className: "flex bg-green-500 hover:bg-green-400 border border-green-900/10 text-white text-xs px-3 py-2 mb-4 rounded focus:outline-none",
                        children: ["Store ", (0,
                        r.jsx)(m.Z, {
                            className: "h-4 w-4 fill-current ml-1"
                        })]
                    }), (0,
                    r.jsxs)(l.qy, {
                        className: "bg-white w-60 shadow-lg border rounded-lg p-3 mt-2 slide-down",
                        children: [(0,
                        r.jsx)("span", {
                            className: "text-xs text-gray-400 absolute right-2 top-2",
                            style: {
                                fontSize: "10px"
                            },
                            children: "Sponsored"
                        }), (0,
                        r.jsx)("ul", {
                            className: "space-y-4 divide-y",
                            children: (0,
                            r.jsx)("li", {
                                className: "pt-3",
                                children: (0,
                                r.jsx)(u, {})
                            })
                        })]
                    })]
                })]
            })
        }
    },
    28516: function(e, s, t) {
        "use strict";
        t.d(s, {
            om: function() {
                return c
            }
        });
        var r = t(44743)
          , l = t(32435)
          , n = t(62423)
          , a = function(e) {
            return l.ZP.get(e).then((function(e) {
                return e.data
            }
            ))
        }
          , c = function(e) {
            var s, t, l = (0,
            r.ZP)(e ? "https://api.coingecko.com/api/v3/coins/near/history?date=".concat(e) : "", a, n.vC), c = l.data, i = l.error;
            return {
                data: null === c || void 0 === c || null === (s = c.market_data) || void 0 === s || null === (t = s.current_price) || void 0 === t ? void 0 : t.usd,
                error: i,
                loading: !i && !c
            }
        }
    },
    43400: function(e, s, t) {
        "use strict";
        t.r(s),
        t.d(s, {
            __N_SSP: function() {
                return _
            },
            default: function() {
                return S
            }
        });
        var r = t(8014)
          , l = t(1984)
          , n = t(75332)
          , a = t(46834)
          , c = t(62044)
          , i = t(73077)
          , o = t(89819)
          , d = t(37506)
          , u = t(68804)
          , m = t(9125)
          , f = t(29325)
          , x = t(75657)
          , h = t.n(x)
          , p = t(56168)
          , b = t(89043)
          , w = t(28516)
          , g = function(e) {
            var s = e.children
              , t = e.href;
            return (0,
            r.jsx)(h(), {
                href: t,
                children: (0,
                r.jsx)("a", {
                    className: "bg-green-500 bg-opacity-10 hover:bg-opacity-100 text-green-500 hover:text-white text-xs px-2 py-1 rounded-lg",
                    children: s
                })
            })
        }
          , j = function(e) {
            var s = e.block
              , t = e.loading
              , l = (0,
            c.Z)("blocks").t
              , n = (0,
            b.Z)((0,
            u.Vz)((null === s || void 0 === s ? void 0 : s.block_timestamp) || 0))
              , o = (0,
            p.useMemo)((function() {
                if ((0,
                b.Z)().isAfter(n.utc().format("YYYY-MM-DD"), "day"))
                    return n.format("DD-MM-YYYY")
            }
            ), [n])
              , m = (0,
            w.om)(o)
              , f = m.data
              , x = m.loading;
            return (0,
            r.jsxs)("div", {
                className: "bg-white text-sm text-gray-500 divide-solid divide-gray-200 divide-y soft-shadow rounded-lg",
                children: [!1, (0,
                r.jsxs)("div", {
                    className: "flex flex-wrap p-4",
                    children: [(0,
                    r.jsx)("div", {
                        className: "w-full md:w-1/4 mb-2 md:mb-0",
                        children: l("block.height")
                    }), t ? (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4",
                        children: (0,
                        r.jsx)(d.Z, {
                            wrapperClassName: "flex w-20"
                        })
                    }) : (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4 font-semibold break-words",
                        children: (0,
                        u.bE)(s.block_height)
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "flex flex-wrap p-4",
                    children: [(0,
                    r.jsx)("div", {
                        className: "w-full md:w-1/4 mb-2 md:mb-0",
                        children: l("block.hash")
                    }), t ? (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4",
                        children: (0,
                        r.jsx)(d.Z, {
                            wrapperClassName: "flex w-full max-w-xl"
                        })
                    }) : (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4 break-words",
                        children: s.block_hash
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "flex flex-wrap p-4",
                    children: [(0,
                    r.jsx)("div", {
                        className: "w-full md:w-1/4 mb-2 md:mb-0",
                        children: l("block.timestamp")
                    }), t ? (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4",
                        children: (0,
                        r.jsx)(d.Z, {
                            wrapperClassName: "flex w-full max-w-sm"
                        })
                    }) : (0,
                    r.jsxs)("div", {
                        className: "w-full md:w-3/4 break-words",
                        children: [(0,
                        b.Z)().to(n), " (", n.utc().format("MMM-DD-YYYY hh:mm:ss A"), ") +UTC"]
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "flex flex-wrap p-4",
                    children: [(0,
                    r.jsx)("div", {
                        className: "w-full md:w-1/4 mb-2 md:mb-0",
                        children: l("block.transactions.0")
                    }), t ? (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4",
                        children: (0,
                        r.jsx)(d.Z, {
                            wrapperClassName: "flex w-full max-w-xs"
                        })
                    }) : (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4 break-words",
                        children: (0,
                        r.jsx)(i.Z, {
                            namespaces: ["blocks"],
                            children: (0,
                            r.jsx)(a.Z, {
                                i18nKey: "blocks:block.transactions.1",
                                components: [(0,
                                r.jsx)(g, {
                                    href: "/txns?block=".concat(s.block_hash)
                                }, 1)],
                                values: {
                                    txns: (0,
                                    u.bE)(s.transactions_agg.count || 0),
                                    receipts: (0,
                                    u.bE)(s.receipts_agg.count || 0)
                                }
                            })
                        })
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "flex flex-wrap p-4",
                    children: [(0,
                    r.jsx)("div", {
                        className: "w-full md:w-1/4 mb-2 md:mb-0",
                        children: l("block.author")
                    }), t ? (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4",
                        children: (0,
                        r.jsx)(d.Z, {
                            wrapperClassName: "flex w-full max-w-lg"
                        })
                    }) : (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4 break-words",
                        children: (0,
                        r.jsx)(h(), {
                            href: "/address/".concat(s.author_account_id),
                            children: (0,
                            r.jsx)("a", {
                                className: "text-green-500",
                                children: s.author_account_id
                            })
                        })
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "flex flex-wrap p-4",
                    children: [(0,
                    r.jsx)("div", {
                        className: "w-full md:w-1/4 mb-2 md:mb-0",
                        children: l("block.gasUsed")
                    }), t ? (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4",
                        children: (0,
                        r.jsx)(d.Z, {
                            wrapperClassName: "flex w-full max-w-lg"
                        })
                    }) : (0,
                    r.jsxs)("div", {
                        className: "w-full md:w-3/4 break-words",
                        children: [s.chunks_agg.gas_used ? (0,
                        u.iO)(s.chunks_agg.gas_used) : "0 ", "gas"]
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "flex flex-wrap p-4",
                    children: [(0,
                    r.jsx)("div", {
                        className: "w-full md:w-1/4 mb-2 md:mb-0",
                        children: l("block.gasLimit")
                    }), t ? (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4",
                        children: (0,
                        r.jsx)(d.Z, {
                            wrapperClassName: "flex w-full max-w-lg"
                        })
                    }) : (0,
                    r.jsxs)("div", {
                        className: "w-full md:w-3/4 break-words",
                        children: [s.chunks_agg.gas_limit ? (0,
                        u.iO)(s.chunks_agg.gas_limit) : "0 ", "gas"]
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "flex flex-wrap p-4",
                    children: [(0,
                    r.jsx)("div", {
                        className: "w-full md:w-1/4 mb-2 md:mb-0",
                        children: l("block.gasPrice")
                    }), t ? (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4",
                        children: (0,
                        r.jsx)(d.Z, {
                            wrapperClassName: "flex w-full max-w-lg"
                        })
                    }) : (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4 break-words",
                        children: (0,
                        u.Jd)(s.gas_price)
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "flex flex-wrap p-4",
                    children: [(0,
                    r.jsx)("div", {
                        className: "w-full md:w-1/4 mb-2 md:mb-0",
                        children: l("block.gasFee")
                    }), t ? (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4",
                        children: (0,
                        r.jsx)(d.Z, {
                            wrapperClassName: "flex w-full max-w-lg"
                        })
                    }) : (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4 break-words",
                        children: s.chunks_agg.gas_used && s.gas_price ? (0,
                        u.JN)(s.chunks_agg.gas_used, s.gas_price) : "0 \u24c3"
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "flex flex-wrap p-4",
                    children: [(0,
                    r.jsx)("div", {
                        className: "w-full md:w-1/4 mb-2 md:mb-0",
                        children: l("block.parenthash")
                    }), t ? (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4",
                        children: (0,
                        r.jsx)(d.Z, {
                            wrapperClassName: "flex w-full max-w-lg"
                        })
                    }) : (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4 break-words",
                        children: (0,
                        r.jsx)(h(), {
                            href: "/blocks-hs.html?hs=".concat(s.prev_block_hash),
                            children: (0,
                            r.jsx)("a", {
                                className: "text-green-500",
                                children: s.prev_block_hash
                            })
                        })
                    })]
                }), o && (0,
                r.jsxs)("div", {
                    className: "flex flex-wrap p-4",
                    children: [(0,
                    r.jsx)("div", {
                        className: "w-full md:w-1/4 mb-2 md:mb-0",
                        children: l("block.price")
                    }), x ? (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4",
                        children: (0,
                        r.jsx)(d.Z, {
                            wrapperClassName: "flex w-full max-w-lg"
                        })
                    }) : (0,
                    r.jsx)("div", {
                        className: "w-full md:w-3/4 break-words",
                        children: f ? "$".concat((0,
                        u.IB)(f), " / \u24c3") : "N/A"
                    })]
                })]
            })
        }
          , v = t(62423)
          , y = "https://meta.nearblocks.io/api"
          , N = "mainnet"
          , k = function(e) {
            var s, t = e.fallbackData, m = bhs, x = (0,
            c.Z)("blocks").t, h = (0,
            v.ZP)("blocks/".concat(m), {
                fallbackData: t
            }), p = h.data, b = h.error, w = h.loading, g = null === p || void 0 === p || null === (s = p.blocks) || void 0 === s ? void 0 : s[0];
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)(l.default, {
                    children: [(0,
                    r.jsx)("title", {
                        children: "".concat("", " ").concat(x("block.metaTitle", {
                            block: m
                        }))
                    }), (0,
                    r.jsx)("meta", {
                        name: "title",
                        content: x("block.metaTitle", {
                            block: m
                        })
                    }), (0,
                    r.jsx)("meta", {
                        name: "description",
                        content: x("block.metaDescription", {
                            block: m
                        })
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:title",
                        content: x("block.metaTitle", {
                            block: m
                        })
                    }), (0,
                    r.jsx)("meta", {
                        property: "og:description",
                        content: x("block.metaDescription", {
                            block: m
                        })
                    }), (0,
                    r.jsx)("meta", {
                        property: "twitter:title",
                        content: x("block.metaTitle", {
                            block: m
                        })
                    }), (0,
                    r.jsx)("meta", {
                        property: "twitter:description",
                        content: x("block.metaDescription", {
                            block: m
                        })
                    }), (null === g || void 0 === g ? void 0 : g.block_height) && (0,
                    r.jsx)("meta", {
                        property: "og:image",
                        content: "".concat(y, "/thumbnail/block?block_height=").concat(g.block_height, "&network=").concat(N)
                    }), (null === g || void 0 === g ? void 0 : g.block_height) && (0,
                    r.jsx)("meta", {
                        property: "og:image:secure_url",
                        content: "".concat(y, "/thumbnail/block?block_height=").concat(g.block_height, "&network=").concat(N)
                    }), (null === g || void 0 === g ? void 0 : g.block_height) && (0,
                    r.jsx)("meta", {
                        name: "twitter:image:src",
                        content: "".concat(y, "/thumbnail/block?block_height=").concat(g.block_height, "&network=").concat(N)
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "container mx-auto px-3",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "md:flex items-center justify-between",
                        children: [w ? (0,
                        r.jsx)(d.Z, {
                            className: "h-7",
                            wrapperClassName: "flex w-80 max-w-xs px-3 py-4"
                        }) : (0,
                        r.jsx)("h1", {
                            className: "text-xl text-gray-700 px-2 py-4",
                            children: (0,
                            r.jsx)(i.Z, {
                                namespaces: ["blocks"],
                                children: (0,
                                r.jsx)(a.Z, {
                                    i18nKey: "blocks:block.heading",
                                    components: [(0,
                                    r.jsx)("span", {
                                        className: "font-semibold"
                                    }, 1)],
                                    values: {
                                        block: (null === g || void 0 === g ? void 0 : g.block_height) ? (0,
                                        u.bE)(g.block_height) : ""
                                    }
                                })
                            })
                        }), (0,
                        r.jsx)(o.Z, {})]
                    }), b || !w && !g ? (0,
                    r.jsx)("div", {
                        className: "text-gray-400 text-xs px-2 mb-4",
                        children: x("blockError")
                    }) : (0,
                    r.jsx)(j, {
                        block: g,
                        loading: !m || w
                    }), (0,
                    r.jsx)("div", {
                        className: "py-8",
                        children: (0,
                        r.jsx)(f.Z, {})
                    })]
                })]
            })
        };
        k.Layout = m.Z;
        var _ = !0
          , S = k
    }
}, function(e) {
    e.O(0, [5445, 1889, 6509, 2953, 9125, 9774, 2888, 179], (function() {
        return s = 10681,
        e(e.s = s);
        var s
    }
    ));
    var s = e.O();
    _N_E = s
}
]);

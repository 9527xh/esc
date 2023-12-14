"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9125], {
    90208: function(e, r, n) {
        var t = n(8014)
          , l = n(75657)
          , s = n.n(l)
          , i = n(75332)
          , a = n(56168);
        function o(e, r, n) {
            return r in e ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = n,
            e
        }
        function c(e, r) {
            if (null == e)
                return {};
            var n, t, l = function(e, r) {
                if (null == e)
                    return {};
                var n, t, l = {}, s = Object.keys(e);
                for (t = 0; t < s.length; t++)
                    n = s[t],
                    r.indexOf(n) >= 0 || (l[n] = e[n]);
                return l
            }(e, r);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (t = 0; t < s.length; t++)
                    n = s[t],
                    r.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
            }
            return l
        }
        r.Z = function(e) {
            var r = e.children
              , n = e.activeClassName
              , l = e.inActiveClassName
              , u = c(e, ["children", "activeClassName", "inActiveClassName"])
              , d = (0,
            i.useRouter)().asPath
              , h = a.Children.only(r)
              , f = h.props.className || ""
              , x = ("/" === u.href ? d === u.href : d.startsWith(u.href)) ? "".concat(f, " ").concat(n) : "".concat(f, " ").concat(l);
            return (0,
            t.jsx)(s(), function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {}
                      , t = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    t.forEach((function(r) {
                        o(e, r, n[r])
                    }
                    ))
                }
                return e
            }({}, u, {
                children: a.cloneElement(h, {
                    className: x || null
                })
            }))
        }
    },
    51907: function(e, r, n) {
        var t = n(8014);
        function l(e, r, n) {
            return r in e ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = n,
            e
        }
        r.Z = function(e) {
            return (0,
            t.jsx)("svg", function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {}
                      , t = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    t.forEach((function(r) {
                        l(e, r, n[r])
                    }
                    ))
                }
                return e
            }({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16",
                width: 20,
                height: 20
            }, e, {
                children: (0,
                t.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                })
            }))
        }
    },
    25429: function(e, r, n) {
        var t = n(8014);
        function l(e, r, n) {
            return r in e ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = n,
            e
        }
        r.Z = function(e) {
            return (0,
            t.jsxs)("svg", function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {}
                      , t = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    t.forEach((function(r) {
                        l(e, r, n[r])
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
                t.jsx)("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                }), (0,
                t.jsx)("path", {
                    d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                })]
            }))
        }
    },
    88537: function(e, r, n) {
        var t = n(8014);
        function l(e, r, n) {
            return r in e ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = n,
            e
        }
        r.Z = function(e) {
            return (0,
            t.jsxs)("svg", function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {}
                      , t = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    t.forEach((function(r) {
                        l(e, r, n[r])
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
                t.jsx)("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                }), (0,
                t.jsx)("path", {
                    d: "M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"
                })]
            }))
        }
    },
    93474: function(e, r, n) {
        n.d(r, {
            uc: function() {
                return w
            },
            ZP: function() {
                return N
            },
            uX: function() {
                return k
            }
        });
        var t = n(44453)
          , l = n.n(t)
          , s = n(8014)
          , i = n(75657)
          , a = n.n(i)
          , o = n(20570)
          , c = n.n(o)
          , u = n(61361)
          , d = n(75332)
          , h = n.n(d)
          , f = n(62044)
          , x = n(56168)
          , m = n(38925)
          , p = n(30462);
        function g(e, r, n) {
            return r in e ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = n,
            e
        }
        var v = function(e) {
            return (0,
            s.jsxs)("svg", function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {}
                      , t = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }
                    )))),
                    t.forEach((function(r) {
                        g(e, r, n[r])
                    }
                    ))
                }
                return e
            }({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: 16,
                height: 16
            }, e, {
                children: [(0,
                s.jsx)("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                }), (0,
                s.jsx)("path", {
                    d: "M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
                })]
            }))
        }
          , b = n(25429)
          , j = n(68804);
        function y(e, r, n, t, l, s, i) {
            try {
                var a = e[s](i)
                  , o = a.value
            } catch (c) {
                return void n(c)
            }
            a.done ? r(o) : Promise.resolve(o).then(t, l)
        }
        var w = function() {
            return (0,
            s.jsxs)("div", {
                children: ["No results. Try on", " ", (0,
                s.jsx)(a(), {
                    href: "https://testnet.nearblocks.io",
                    children: (0,
                    s.jsx)("a", {
                        className: "text-green-500",
                        children: "Testnet"
                    })
                })]
            })
        }
          , k = function(e) {
            switch (null === e || void 0 === e ? void 0 : e.type) {
            case "block":
                return h().push("/blocks-hs.html?hs=".concat(null === e || void 0 === e ? void 0 : e.path));
            case "txn":
            case "receipt":
                return h().push("/txns-hs.html?hs=".concat(null === e || void 0 === e ? void 0 : e.path));
            case "address":
                return h().push("/address/".concat(null === e || void 0 === e ? void 0 : e.path));
            default:
                return u.Am.error(w)
            }
        }
          , N = function(e) {
            var r, n, t, i, a, o, h, g, N = e.header, O = void 0 !== N && N, S = (0,
            d.useRouter)(), Z = (0,
            f.Z)("common").t, P = (0,
            x.useState)(""), _ = P[0], C = P[1], A = (0,
            x.useState)({}), E = A[0], I = A[1], T = (0,
            x.useState)("all"), B = T[0], F = T[1], z = "/" === S.pathname, M = (null === E || void 0 === E || null === (r = E.blocks) || void 0 === r ? void 0 : r.length) > 0 || (null === E || void 0 === E || null === (n = E.txns) || void 0 === n ? void 0 : n.length) > 0 || (null === E || void 0 === E || null === (t = E.accounts) || void 0 === t ? void 0 : t.length) > 0 || (null === E || void 0 === E || null === (i = E.receipts) || void 0 === i ? void 0 : i.length) > 0;
            (0,
            x.useEffect)((function() {
                B && _ && (0,
                p.Z)(_, B).then((function(e) {
                    return I(e || {})
                }
                ))
            }
            ), [B, _]);
            var R = (0,
            x.useCallback)(c()((function(e) {
                return C(e)
            }
            ), 500), [])
              , L = function(e) {
                return k(e)
            }
              , D = function() {
                var e, r = (e = l().mark((function e(r) {
                    var n, t, s;
                    return l().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r.preventDefault(),
                                n = document.getElementsByClassName("search")[0].value,
                                t = n.replace(/[\s,]/g, "")) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return", u.Am.error(w));
                            case 5:
                                return e.next = 7,
                                (0,
                                p.Z)(t, B, !0);
                            case 7:
                                if (!(s = e.sent)) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return", k(s));
                            case 10:
                                return e.abrupt("return", u.Am.error(w));
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )),
                function() {
                    var r = this
                      , n = arguments;
                    return new Promise((function(t, l) {
                        var s = e.apply(r, n);
                        function i(e) {
                            y(s, t, l, i, a, "next", e)
                        }
                        function a(e) {
                            y(s, t, l, i, a, "throw", e)
                        }
                        i(void 0)
                    }
                    ))
                }
                );
                return function(e) {
                    return r.apply(this, arguments)
                }
            }();
            return (0,
            s.jsxs)("form", {
                className: "flex w-full ".concat(O ? "h-11" : "h-12"),
                onSubmit: D,
                children: [(0,
                s.jsxs)("label", {
                    className: "relative hidden md:flex",
                    children: [(0,
                    s.jsxs)("select", {
                        className: "h-full block text-sm text-gray-500 ".concat(z ? "bg-gray-100" : "bg-blue-900/[0.05]", "  pl-4 pr-9  cursor-pointer focus:outline-none appearance-none rounded-none rounded-l-lg border"),
                        value: B,
                        onChange: function(e) {
                            return F(e.target.value)
                        },
                        children: [(0,
                        s.jsx)("option", {
                            value: "all",
                            children: Z("search.filters.all")
                        }), (0,
                        s.jsx)("option", {
                            value: "txns",
                            children: Z("search.filters.txns")
                        }), (0,
                        s.jsx)("option", {
                            value: "blocks",
                            children: Z("search.filters.blocks")
                        }), (0,
                        s.jsx)("option", {
                            value: "accounts",
                            children: Z("search.filters.addresses")
                        })]
                    }), (0,
                    s.jsx)(b.Z, {
                        className: "absolute right-3 top-3.5 w-4 h-4 fill-current text-gray-500 pointer-events-none"
                    })]
                }), (0,
                s.jsxs)(m.hQ, {
                    className: "flex-grow",
                    children: [(0,
                    s.jsx)(m.gA, {
                        placeholder: Z("search.placeholder"),
                        className: "search bg-white w-full h-full text-sm px-4 py-3 outline-none border-l border-t border-b md:border-l-0 rounded-l-lg rounded-r-none md:rounded-l-none",
                        onChange: function(e) {
                            var r = e.target.value;
                            R(r.replace(/[\s,]/g, ""))
                        }
                    }), M && (0,
                    s.jsx)(m.SF, {
                        className: "z-50",
                        children: (0,
                        s.jsxs)(m.Gk, {
                            className: "text-xs rounded-b-lg bg-gray-50 py-2 shadow border",
                            children: [(null === E || void 0 === E || null === (a = E.accounts) || void 0 === a ? void 0 : a.length) > 0 && (0,
                            s.jsxs)(s.Fragment, {
                                children: [(0,
                                s.jsx)("h3", {
                                    className: " mx-2 my-2 px-2 py-2 text-sm bg-gray-100 rounded",
                                    children: Z("search.list.address")
                                }), E.accounts.map((function(e) {
                                    return (0,
                                    s.jsx)(m.O2, {
                                        value: e.account_id,
                                        className: "mx-2 px-2 py-2 hover:bg-gray-100 cursor-pointer hover:border-gray-500 truncate",
                                        onClick: function() {
                                            return L({
                                                type: "address",
                                                path: e.account_id
                                            })
                                        },
                                        children: (0,
                                        j.Xn)(e.account_id)
                                    }, e.account_id)
                                }
                                ))]
                            }), (null === E || void 0 === E || null === (o = E.txns) || void 0 === o ? void 0 : o.length) > 0 && (0,
                            s.jsxs)(s.Fragment, {
                                children: [(0,
                                s.jsx)("h3", {
                                    className: " mx-2 my-2 px-2 py-2 text-sm bg-gray-100 rounded",
                                    children: Z("search.list.txns")
                                }), E.txns.map((function(e) {
                                    return (0,
                                    s.jsx)(m.O2, {
                                        value: e.transaction_hash,
                                        className: "mx-2 px-2 py-2 hover:bg-gray-100 cursor-pointer hover:border-gray-500 truncate",
                                        onClick: function() {
                                            return L({
                                                type: "txn",
                                                path: e.transaction_hash
                                            })
                                        },
                                        children: (0,
                                        j.pm)(e.transaction_hash)
                                    }, e.transaction_hash)
                                }
                                ))]
                            }), (null === E || void 0 === E || null === (h = E.receipts) || void 0 === h ? void 0 : h.length) > 0 && (0,
                            s.jsxs)(s.Fragment, {
                                children: [(0,
                                s.jsx)("h3", {
                                    className: " mx-2 my-2 px-2 py-2 text-sm bg-gray-100 rounded",
                                    children: "Receipts"
                                }), E.receipts.map((function(e) {
                                    return (0,
                                    s.jsx)(m.O2, {
                                        value: e.receipt_id,
                                        className: "mx-2 px-2 py-2 hover:bg-gray-100 cursor-pointer hover:border-gray-500 truncate",
                                        onClick: function() {
                                            return L({
                                                type: "receipt",
                                                path: e.originated_from_transaction_hash
                                            })
                                        },
                                        children: (0,
                                        j.pm)(e.receipt_id)
                                    }, e.receipt_id)
                                }
                                ))]
                            }), (null === E || void 0 === E || null === (g = E.blocks) || void 0 === g ? void 0 : g.length) > 0 && (0,
                            s.jsxs)(s.Fragment, {
                                children: [(0,
                                s.jsx)("h3", {
                                    className: " mx-2 my-2 px-2 py-2 text-sm bg-gray-100 rounded",
                                    children: Z("search.list.blocks")
                                }), E.blocks.map((function(e) {
                                    return (0,
                                    s.jsxs)(m.O2, {
                                        value: e.block_hash,
                                        className: "mx-2 px-2 py-2 hover:bg-gray-100 cursor-pointer hover:border-gray-500 truncate",
                                        onClick: function() {
                                            return L({
                                                type: "block",
                                                path: e.block_hash
                                            })
                                        },
                                        children: ["#", (0,
                                        j.bE)(e.block_height), " (0x", (0,
                                        j.pm)(e.block_hash), ")"]
                                    }, e.block_hash)
                                }
                                ))]
                            })]
                        })
                    })]
                }), (0,
                s.jsx)("button", {
                    type: "submit",
                    className: "".concat(z ? "bg-gray-100" : "bg-blue-900/[0.05]", " rounded-r-lg px-5 outline-none focus:outline-none border"),
                    children: (0,
                    s.jsx)(v, {
                        className: "text-gray-700 fill-current "
                    })
                })]
            })
        }
    },
    9125: function(e, r, n) {
        n.d(r, {
            Z: function() {
                return A
            }
        });
        var t = n(8014)
          , l = n(75657)
          , s = n.n(l)
          , i = n(80241)
          , a = n.n(i)
          , o = n(75332)
          , c = n(56168)
          , u = n(62044)
          , d = n(93474)
          , h = n(89043)
          , f = n(83476)
          , x = n(62423)
          , m = n(37506)
          , p = n(88537)
          , g = n(8012)
          , v = function(e) {
            var r = e.children
              , n = e.trigger
              , l = (0,
            c.useState)(!1)
              , s = l[0]
              , i = l[1];
            return (0,
            t.jsxs)(t.Fragment, {
                children: [n({
                    show: s,
                    onClick: function() {
                        return i((function(e) {
                            return !e
                        }
                        ))
                    }
                }), (0,
                t.jsx)("div", {
                    className: "transition-all overflow-hidden ".concat(s ? "block" : "hidden"),
                    children: r
                })]
            })
        }
          , b = n(90208)
          , j = n(25429)
          , y = n(68804)
          , w = n(45666);
        function k(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var n = 0, t = new Array(r); n < r; n++)
                t[n] = e[n];
            return t
        }
        function N(e, r) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, r) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var t, l, s = [], i = !0, a = !1;
                    try {
                        for (n = n.call(e); !(i = (t = n.next()).done) && (s.push(t.value),
                        !r || s.length !== r); i = !0)
                            ;
                    } catch (o) {
                        a = !0,
                        l = o
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (a)
                                throw l
                        }
                    }
                    return s
                }
            }(e, r) || function(e, r) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return k(e, r);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return k(e, r)
            }(e, r) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var O = [{
            id: 1,
            title: "header.menu.home",
            link: "/",
            submenu: []
        }, {
            id: 2,
            title: "header.menu.blockchain",
            submenu: [{
                id: 1,
                title: "header.menu.viewBlocks",
                link: "/blocks.html"
            }, {
                id: 2,
                title: "header.menu.viewTxns",
                link: "/txns.html"
            }, {
                id: 4,
                title: "header.menu.charts",
                link: "/charts.html"
            }]
        }, 
        // {
        //     id: 3,
        //     title: "header.menu.tokens",
        //     submenu: [{
        //         id: 1,
        //         title: "Top Tokens",
        //         link: "/tokens.html"
        //     }, {
        //         id: 2,
        //         title: "Token Transfers",
        //         link: "/tokentxns.html"
        //     }, {
        //         id: 3,
        //         title: "Top NFT Tokens",
        //         link: "/nft-tokens.html"
        //     }, {
        //         id: 4,
        //         title: "NFT Token Transfers",
        //         link: "/nft-tokentxns.html"
        //     }]
        // }
    ]
          , S = [{
            title: "English",
            locale: "en"
        }, {
            title: "\ud55c\uad6d\uc5b4",
            locale: "kr"
        }, {
            title: "Bahasa",
            locale: "id"
        }, {
            title: "\u6c49\u8bed (Simplified)",
            locale: "zh-cn"
        }, {
            title: "\u6f22\u8a9e (Traditional)",
            locale: "zh-hk"
        }, {
            title: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
            locale: "ru"
        }, {
            title: "Ti\u1ebfng Vi\u1ec7t",
            locale: "vi"
        }, {
            title: "Espa\xf1ol",
            locale: "es"
        }, {
            title: "Fran\xe7ais",
            locale: "fr"
        }, {
            title: "\u65e5\u672c\u8a9e",
            locale: "jp"
        }, {
            title: "Filipino",
            locale: "ph"
        }, {
            title: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
            locale: "th"
        }, {
            title: "Italiano",
            locale: "it"
        }]
          , Z = [{
            id: 1,
            title: "My Profile",
            link: "/user/overview"
        }, {
            id: 2,
            title: "Settings",
            link: "/user/settings"
        }, {
            id: 3,
            title: "API Keys",
            link: "/user/keys"
        }]
          , P = function() {
            var e, r, n = (0,
            o.useRouter)(), l = (0,
            u.Z)("common").t, i = (0,
            c.useState)(!1), k = i[0], P = i[1], _ = N((0,
            g.Z)("token"), 2), C = _[0], A = _[1], E = (0,
            x.ZP)("blocks/latests?limit=1").data, I = (0,
            x.ZP)("stats", {
                revalidateOnReconnect: !0
            }), T = I.data, B = I.loading, F = I.error, z = (0,
            f.ZP)(C ? "dash/profile" : ""), M = z.data, R = z.loading, L = (null === M || void 0 === M ? void 0 : M.user) || null, D = null === T || void 0 === T || null === (e = T.stats) || void 0 === e ? void 0 : e[0], U = null === E || void 0 === E || null === (r = E.blocks) || void 0 === r ? void 0 : r[0], H = "/" !== n.pathname, J = (0,
            c.useMemo)((function() {
                if (U) {
                    var e = h.Z.utc((0,
                    y.Vz)(U.block_timestamp));
                    if (h.Z.utc().diff(e, "minute") > 10)
                        return !1
                }
                return !0
            }
            ), [U]), q = function() {
                A(""),
                n.push("/login")
            };
            return (0,
            t.jsxs)("div", {
                className: "bg-white soft-shadow z-20 relative",
                children: [!J && (0,
                t.jsx)("div", {
                    className: "flex flex-wrap",
                    children: (0,
                    t.jsx)("div", {
                        className: "flex items-center justify-center text-center w-full border-b-2 border-nearblue bg-nearblue py-2 text-green text-sm ",
                        children: l("outofSync")
                    })
                }), (0,
                t.jsx)("div", {
                    className: "container mx-auto",
                    children: (0,
                    t.jsxs)("div", {
                        className: "flex flex-wrap ",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "flex items-center justify-between w-full md:w-auto px-3",
                            children: [(0,
                            t.jsxs)("div", {
                                className: H ? "pt-3" : "",
                                children: [(0,
                                t.jsx)(s(), {
                                    href: "/",
                                    className: "",
                                    children: (0,
                                    t.jsx)("a", {
                                        className: "py-0.5 flex justify-start items-center",
                                        children: (0,
                                        t.jsx)(a(), {
                                            src: "/images/nearblocksblack.svg",
                                            className: "block py-2",
                                            width: "174",
                                            height: "40",
                                            alt: "NearBlocks",
                                            layout: "fixed"
                                        })
                                    })
                                }), H && (F || B ? (0,
                                t.jsx)(m.Z, {
                                    count: 1
                                }) : (0,
                                t.jsx)("div", {
                                    style: {
                                        marginTop: "5px"
                                    },
                                    className: "mb-2",
                                    children: (0,
                                    t.jsxs)("div", {
                                        className: "ml-12 px-1 py-1 bg-blue-900/[0.05] rounded-lg flex justify-center items-center",
                                        children: [(0,
                                        t.jsx)(a(), {
                                            src: "/images/NearGrey.svg",
                                            alt: "NearBlock",
                                            className: "inline-flex w-5 h-5",
                                            width: 15,
                                            height: 15
                                        }), (0,
                                        t.jsxs)("p", {
                                            className: "text-sm text-gray-500 font-medium leading-6 px-2",
                                            children: ["$", (0,
                                            y.IB)((null === D || void 0 === D ? void 0 : D.near_price) || 0), " ", (null === D || void 0 === D ? void 0 : D.change_24) > 0 ? (0,
                                            t.jsxs)("span", {
                                                className: "text-neargreen text-xs",
                                                children: ["(+", (0,
                                                y.IB)(null === D || void 0 === D ? void 0 : D.change_24), "%)"]
                                            }) : (0,
                                            t.jsxs)("span", {
                                                className: "text-red-500 text-xs",
                                                children: ["(", (0,
                                                y.IB)(null === D || void 0 === D ? void 0 : D.change_24), "%)"]
                                            })]
                                        })]
                                    })
                                }))]
                            }), (0,
                            t.jsx)("button", {
                                className: "flex md:hidden items-center justify-center ml-auto p-3 md:p-4",
                                onClick: function() {
                                    return P((function(e) {
                                        return !e
                                    }
                                    ))
                                },
                                children: (0,
                                t.jsx)(p.Z, {})
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "flex flex-col flex-grow w-full md:w-auto",
                            children: [H && (0,
                            t.jsx)("div", {
                                className: "w-full md:w-3/4 lg:w-3/5 md:ml-auto px-3 pb-2 md:pt-2 md:pb-0 order-2 md:order-1",
                                children: (0,
                                t.jsx)(d.ZP, {
                                    header: !0
                                })
                            }), (0,
                            t.jsxs)("nav", {
                                className: "w-full h-full md:flex md:w-auto text-sm py-0.5 order-1 md:order-2 flex-col md:flex-row ".concat(k ? "flex " : "hidden"),
                                children: [(0,
                                t.jsxs)("ul", {
                                    className: "w-full md:flex justify-end text-gray-500 py-0 md:py-0",
                                    children: [O.map((function(e) {
                                        var r;
                                        return (0,
                                        t.jsx)("li", {
                                            children: (null === (r = e.submenu) || void 0 === r ? void 0 : r.length) ? (0,
                                            t.jsxs)(t.Fragment, {
                                                children: [(0,
                                                t.jsx)(v, {
                                                    trigger: function(r) {
                                                        var n = r.show
                                                          , s = r.onClick;
                                                        return (0,
                                                        t.jsxs)("a", {
                                                            className: "md:hidden flex items-center justify-between w-full hover:text-green-500 py-2 px-4",
                                                            href: "#",
                                                            onClick: s,
                                                            children: [l(e.title), (0,
                                                            t.jsx)(j.Z, {
                                                                className: "fill-current transition-transform w-5 h-5 ".concat(n && "transform rotate-180")
                                                            })]
                                                        })
                                                    },
                                                    children: (0,
                                                    t.jsx)("ul", {
                                                        className: "border-l-2 border-green-500 md:hidden ml-4",
                                                        children: e.submenu.map((function(e) {
                                                            return (0,
                                                            t.jsx)("li", {
                                                                children: (0,
                                                                t.jsx)(b.Z, {
                                                                    href: e.link,
                                                                    children: (0,
                                                                    t.jsx)("a", {
                                                                        className: "block w-full hover:text-green-500 py-2 px-4",
                                                                        onClick: function() {
                                                                            return P(!1)
                                                                        },
                                                                        children: l(e.title)
                                                                    })
                                                                })
                                                            }, e.id)
                                                        }
                                                        ))
                                                    })
                                                }), (0,
                                                t.jsxs)("span", {
                                                    className: "group hidden md:flex h-full w-full relative",
                                                    children: [(0,
                                                    t.jsxs)("a", {
                                                        className: "hidden md:flex h-full items-center justify-between w-full hover:text-green-500 py-2 px-4",
                                                        href: "#",
                                                        children: [l(e.title), (0,
                                                        t.jsx)(j.Z, {
                                                            className: "fill-current w-4 h-4 ml-2"
                                                        })]
                                                    }), (0,
                                                    t.jsx)("ul", {
                                                        className: "bg-white soft-shadow hidden min-w-full absolute top-full rounded-b-lg border-t-2 border-green-500 group-hover:block py-2",
                                                        children: e.submenu.map((function(e) {
                                                            return (0,
                                                            t.jsx)("li", {
                                                                children: (0,
                                                                t.jsx)(b.Z, {
                                                                    href: e.link,
                                                                    activeClassName: "text-green-500",
                                                                    children: (0,
                                                                    t.jsx)("a", {
                                                                        className: "block w-full hover:text-green-500 whitespace-nowrap py-2 px-4",
                                                                        children: l(e.title)
                                                                    })
                                                                })
                                                            }, e.id)
                                                        }
                                                        ))
                                                    })]
                                                })]
                                            }) : (0,
                                            t.jsx)(b.Z, {
                                                href: e.link,
                                                activeClassName: "text-green-500",
                                                children: (0,
                                                t.jsx)("a", {
                                                    className: "flex items-center w-full h-full hover:text-green-500 py-2 px-4",
                                                    children: l(e.title)
                                                })
                                            })
                                        }, e.id)
                                    }
                                    )), (0,
                                    t.jsx)("li", {
                                        children: (0,
                                        t.jsxs)(t.Fragment, {
                                            children: [(0,
                                            t.jsx)(v, {
                                                trigger: function(e) {
                                                    var r = e.show
                                                      , n = e.onClick;
                                                    return (0,
                                                    t.jsxs)("a", {
                                                        // className: "md:hidden flex items-center justify-between w-full hover:text-green-500 py-2 px-4",
                                                        // href: "#",
                                                        // onClick: n,
                                                        // children: [l("header.menu.languages"), (0,
                                                        // t.jsx)(j.Z, {
                                                        //     className: "fill-current transition-transform w-5 h-5 ".concat(r && "transform rotate-180")
                                                        // })]
                                                    })
                                                },
                                                children: (0,
                                                t.jsx)("ul", {
                                                    className: "border-l-2 border-green-500 md:hidden ml-4",
                                                    children: S.map((function(e) {
                                                        return (0,
                                                        t.jsx)("li", {
                                                            // children: (0,
                                                            // t.jsx)(b.Z, {
                                                            //     href: "/",
                                                            //     locale: e.locale,
                                                            //     children: (0,
                                                            //     t.jsx)("a", {
                                                            //         className: "block w-full hover:text-green-500 py-2 px-4",
                                                            //         children: e.title
                                                            //     })
                                                            // })
                                                        }, e.locale)
                                                    }
                                                    ))
                                                })
                                            }), (0,
                                            t.jsxs)("span", {
                                                className: "group hidden md:flex h-full w-full relative",
                                                children: [(0,
                                                t.jsxs)("a", {
                                                    // className: "hidden md:flex h-full items-center justify-between w-full hover:text-green-500 py-2 px-4",
                                                    // href: "#",
                                                    // children: [l("header.menu.languages"), (0,
                                                    // t.jsx)(j.Z, {
                                                    //     className: "fill-current w-4 h-4 ml-2"
                                                    // })]
                                                }), (0,
                                                t.jsx)("ul", {
                                                    className: "bg-white soft-shadow hidden absolute top-full rounded-b-lg border-t-2 border-green-500 group-hover:block py-2",
                                                    children: S.map((function(e) {
                                                        return (0,
                                                        t.jsx)("li", {
                                                            // children: (0,
                                                            // t.jsx)(b.Z, {
                                                            //     href: "/",
                                                            //     locale: e.locale,
                                                            //     children: (0,
                                                            //     t.jsx)("a", {
                                                            //         className: "block w-full hover:hover:text-green-500 whitespace-nowrap py-2 px-4",
                                                            //         children: e.title
                                                            //     })
                                                            // })
                                                        }, e.locale)
                                                    }
                                                    ))
                                                })]
                                            })]
                                        })
                                    }), (0,
                                    t.jsx)("li", {
                                        children: (0,
                                        t.jsxs)(t.Fragment, {
                                            children: [(0,
                                            t.jsx)(v, {
                                                trigger: function(e) {
                                                    var r = e.show
                                                      , n = e.onClick;
                                                    return (0,
                                                    t.jsx)("a", {
                                                        className: "md:hidden flex items-center justify-between w-full hover:text-green-500 py-2 px-4",
                                                        href: "#",
                                                        onClick: n,
                                                        children: (0,
                                                        t.jsx)("div", {
                                                            className: "w-full",
                                                            children: L ? (0,
                                                            t.jsxs)("div", {
                                                                className: "flex justify-between",
                                                                children: [(0,
                                                                t.jsxs)("div", {
                                                                    className: "flex items-center",
                                                                    children: [(0,
                                                                    t.jsx)(w.q1E, {
                                                                        className: "mx-1 text-sm bg-gray-500 rounded-full p-0.5 text-white"
                                                                    }), null === L || void 0 === L ? void 0 : L.username]
                                                                }), (0,
                                                                t.jsx)(j.Z, {
                                                                    className: "fill-current transition-transform w-5 h-5 ".concat(r && "transform rotate-180")
                                                                })]
                                                            }) : (0,
                                                            t.jsx)(b.Z, {
                                                                href: "/login",
                                                                children: (0,
                                                                t.jsxs)("div", {
                                                                    className: "flex items-center",
                                                                    children: [(0,
                                                                    t.jsx)(w.q1E, {
                                                                        className: "mx-1 mr-2 text-sm bg-gray-500 rounded-full p-0.5 text-white"
                                                                    }), "Sign In"]
                                                                })
                                                            })
                                                        })
                                                    })
                                                },
                                                children: L && (0,
                                                t.jsxs)("ul", {
                                                    className: "border-l-2 border-green-500 md:hidden ml-2",
                                                    children: [Z.map((function(e) {
                                                        return (0,
                                                        t.jsx)("li", {
                                                            children: (0,
                                                            t.jsx)(b.Z, {
                                                                href: e.link,
                                                                children: (0,
                                                                t.jsx)("a", {
                                                                    className: "block w-full hover:text-green-500 py-2 px-4",
                                                                    children: e.title
                                                                })
                                                            })
                                                        }, e.id)
                                                    }
                                                    )), (0,
                                                    t.jsx)("li", {
                                                        className: "border-t my-3"
                                                    }), (0,
                                                    t.jsx)("li", {
                                                        className: "px-4 pb-1",
                                                        children: (0,
                                                        t.jsx)("button", {
                                                            onClick: q,
                                                            className: "bg-green-200/70 w-full rounded-md text-white text-xs text-center py-1 px-4",
                                                            children: "Signout"
                                                        })
                                                    })]
                                                })
                                            }), (0,
                                            t.jsxs)("span", {
                                                className: "group hidden md:flex h-full w-full relative",
                                                children: [(0,
                                                t.jsx)("a", {
                                                    className: "hidden md:flex h-full items-center justify-between w-full hover:text-green-500 py-2 px-4",
                                                    href: "#",
                                                    children: L ? (0,
                                                    t.jsxs)(t.Fragment, {
                                                        children: [(0,
                                                        t.jsx)(w.q1E, {
                                                            className: "mx-1 text-sm bg-gray-500 rounded-full p-0.5 text-white"
                                                        }), null === L || void 0 === L ? void 0 : L.username, (0,
                                                        t.jsx)(j.Z, {
                                                            className: "fill-current w-4 h-4 ml-2"
                                                        })]
                                                    }) : (0,
                                                    t.jsx)(b.Z, {
                                                        href: "/login",
                                                        children: (0,
                                                        t.jsx)("div", {
                                                            // className: "flex items-center",
                                                            // children: R ? (0,
                                                            // t.jsxs)(t.Fragment, {
                                                            //     children: [(0,
                                                            //     t.jsx)(w.q1E, {
                                                            //         className: "mx-1 mr-2 text-sm bg-gray-500 rounded-full p-0.5 text-white"
                                                            //     }), (0,
                                                            //     t.jsx)(m.Z, {
                                                            //         wrapperClassName: "flex w-14 h-4"
                                                            //     })]
                                                            // }) : (0,
                                                            // t.jsxs)(t.Fragment, {
                                                            //     children: [(0,
                                                            //     t.jsx)(w.q1E, {
                                                            //         className: "mx-1 mr-2 text-sm bg-gray-500 rounded-full p-0.5 text-white"
                                                            //     }), "Sign In"]
                                                            // })
                                                        })
                                                    })
                                                }), L && (0,
                                                t.jsxs)("ul", {
                                                    className: "bg-white soft-shadow hidden absolute top-full rounded-b-lg border-t-2 border-green-500 group-hover:block py-2",
                                                    children: [Z.map((function(e) {
                                                        return (0,
                                                        t.jsx)("li", {
                                                            children: (0,
                                                            t.jsx)(b.Z, {
                                                                href: e.link,
                                                                children: (0,
                                                                t.jsx)("a", {
                                                                    className: "block w-full hover:hover:text-green-500 py-2 px-4",
                                                                    children: e.title
                                                                })
                                                            })
                                                        }, e.id)
                                                    }
                                                    )), (0,
                                                    t.jsx)("li", {
                                                        className: "border-t my-3"
                                                    }), (0,
                                                    t.jsx)("li", {
                                                        className: "px-4 pb-1",
                                                        children: (0,
                                                        t.jsx)("button", {
                                                            onClick: q,
                                                            className: "bg-green-200/70 rounded-md text-white text-xs text-center py-1 px-4",
                                                            children: "Signout"
                                                        })
                                                    })]
                                                })]
                                            })]
                                        })
                                    })]
                                }), (0,
                                t.jsxs)("ul", {
                                    className: "md:flex justify-end text-gray-500 pb-4 md:pb-0",
                                    children: [(0,
                                    t.jsx)("li", {
                                        children: (0,
                                        t.jsx)("span", {
                                            className: "hidden md:flex h-full items-center justify-between w-full hover:text-green-500 py-2 px-4",
                                            children: (0,
                                            t.jsx)(a(), {
                                                src: "/images/pipe.svg",
                                                width: "2",
                                                height: "31",
                                                layout: "fixed",
                                                alt: "NearBlocks"
                                            })
                                        })
                                    }), (0,
                                    t.jsx)("li", {
                                        children: (0,
                                        t.jsxs)(t.Fragment, {
                                            children: [(0,
                                            t.jsx)(v, {
                                                trigger: function(e) {
                                                    var r = e.show
                                                      , n = e.onClick;
                                                    return (0,
                                                    t.jsxs)("a", {
                                                        className: "md:hidden flex items-center justify-between w-full hover:text-green-500 py-2 px-4",
                                                        href: "#",
                                                        onClick: n,
                                                        children: [(0,
                                                        t.jsx)(a(), {
                                                            src: "/images/near.svg",
                                                            width: "14",
                                                            height: "14",
                                                            alt: "NearBlocks",
                                                            layout: "fixed"
                                                        }), (0,
                                                        t.jsx)(j.Z, {
                                                            className: "fill-current transition-transform w-5 h-5 ".concat(r && "transform rotate-180")
                                                        })]
                                                    })
                                                },
                                                children: (0,
                                                t.jsxs)("ul", {
                                                    className: "border-l-2 border-green-500 md:hidden ml-4",
                                                    children: [(0,
                                                    t.jsx)("li", {
                                                        children: (0,
                                                        t.jsx)("a", {
                                                            className: "block w-full hover:text-green-500 py-2 px-4",
                                                            href: "https://nearblocks.io",
                                                            children: "Mainnet"
                                                        })
                                                    }), (0,
                                                    t.jsx)("li", {
                                                        children: (0,
                                                        t.jsx)("a", {
                                                            className: "block w-full hover:text-green-500 py-2 px-4",
                                                            href: "https://testnet.nearblocks.io/",
                                                            children: "Testnet"
                                                        })
                                                    })]
                                                })
                                            }), (0,
                                            t.jsxs)("span", {
                                                className: "group hidden md:flex w-full relative",
                                                children: [(0,
                                                t.jsx)("a", {
                                                    className: "hidden md:flex  items-center justify-center w-full hover:text-green-500  py-2 px-0 mr-3",
                                                    href: "#",
                                                    children: (0,
                                                    t.jsx)("div", {
                                                        className: "py-2 px-3 bg-gray-100 rounded",
                                                        children: (0,
                                                        t.jsx)(a(), {
                                                            src: "/images/near.svg",
                                                            width: "14",
                                                            height: "14",
                                                            alt: "NearBlocks",
                                                            layout: "fixed"
                                                        })
                                                    })
                                                }), (0,
                                                t.jsxs)("ul", {
                                                    // className: "bg-white soft-shadow hidden min-w-full absolute top-full right-0 rounded-b-lg border-t-2 border-green-500 group-hover:block py-2",
                                                    // children: [(0,
                                                    // t.jsx)("li", {
                                                    //     children: (0,
                                                    //     t.jsx)("a", {
                                                    //         className: "block w-full hover:text-green-500  py-2 px-4 text-gray-500 ".concat("text-green-500"),
                                                    //         href: "https://nearblocks.io",
                                                    //         children: "Mainnet"
                                                    //     })
                                                    // }), (0,
                                                    // t.jsx)("li", {
                                                    //     children: (0,
                                                    //     t.jsx)("a", {
                                                    //         className: "block w-full hover:text-green-500  py-2 px-4 ".concat("text-gray-500"),
                                                    //         href: "https://testnet.nearblocks.io/",
                                                    //         children: "Testnet"
                                                    //     })
                                                    // })]
                                                })]
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                })]
            })
        }
          , _ = n(51907)
          , C = function() {
            var e = (0,
            u.Z)("common").t;
            return (0,
            t.jsx)("footer", {
                className: "footer",
                children: (0,
                t.jsx)("div", {
                    className: "bg-bottom-right",
                    children: (0,
                    t.jsx)("div", {
                        className: "bg-bottom-left",
                        children: (0,
                        t.jsxs)("div", {
                            className: "container mx-auto px-3 pb-32",
                            children: [(0,
                            t.jsxs)("div", {
                                className: "grid grid-cols-1 lg:grid-cols-6 gap-5 py-5",
                                children: [(0,
                                t.jsxs)("div", {
                                    className: "w-64",
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: "text-sm text-grey-dark flex flex-col py-3",
                                        children: (0,
                                        t.jsx)(a(), {
                                            src: "/images/nearblocksblack.svg",
                                            className: "block py-3 mr-2",
                                            width: "234",
                                            height: "54",
                                            alt: "NearBlocks",
                                            layout: "fixed"
                                        })
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "max-w-xs text-black text-xs leading-6 pb-6",
                                        children: e("footer.description")
                                    })]
                                }), (0,
                                t.jsx)("div", {
                                    className: "hidden lg:block"
                                }), (0,
                                t.jsxs)("div", {
                                    className: "",
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: "text-green-500 font-semibold text-xl mb-3",
                                        children: "\xa0"
                                    }), (0,
                                    t.jsx)("ul", {
                                        className: "text-black opacity-80 footer-links text-sm leading-6",
                                        children: (0,
                                        t.jsx)("li", {
                                            children: (0,
                                            t.jsx)(s(), {
                                                href: "/",
                                                children: "\xa0"
                                            })
                                        })
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    className: "",
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: "text-green-500 font-semibold text-xl mb-3",
                                        children: "Tools"
                                    }), (0,
                                    t.jsxs)("ul", {
                                        className: "text-black opacity-80 footer-links text-sm leading-6",
                                        children: [(0,
                                        t.jsx)("li", {
                                            children: (0,
                                            t.jsx)(s(), {
                                                href: "https://nearblocks.io/apis",
                                                children: (0,
                                                t.jsxs)("a", {
                                                    target: "_blank",
                                                    rel: "noreferrer nofollow noopener",
                                                    children: [e("footer.links.api"), " ", (0,
                                                    t.jsx)("span", {
                                                        className: "mx-2 px-1 py-0.5 font-semibold animate-pulse text-white bg-brightgreen rounded text-tiny",
                                                        children: "New"
                                                    })]
                                                })
                                            })
                                        }), (0,
                                        t.jsx)("li", {
                                            children: (0,
                                            t.jsx)(s(), {
                                                href: "https://nearsend.io",
                                                children: (0,
                                                t.jsxs)("a", {
                                                    className: "flex",
                                                    target: "_blank",
                                                    rel: "noreferrer nofollow noopener",
                                                    children: ["ESC Token Bulksender", (0,
                                                    t.jsx)("span", {
                                                        children: (0,
                                                        t.jsx)(_.Z, {
                                                            className: "-rotate-45 -mt-1 h-4 w-4"
                                                        })
                                                    })]
                                                })
                                            })
                                        }), (0,
                                        t.jsx)("li", {
                                            children: (0,
                                            t.jsx)(s(), {
                                                href: "https://nkyc.io",
                                                children: (0,
                                                t.jsxs)("a", {
                                                    className: "flex",
                                                    target: "_blank",
                                                    rel: "noreferrer nofollow noopener",
                                                    children: ["ESC KYC Platform", (0,
                                                    t.jsx)("span", {
                                                        children: (0,
                                                        t.jsx)(_.Z, {
                                                            className: "-rotate-45 -mt-1 h-4 w-4"
                                                        })
                                                    })]
                                                })
                                            })
                                        })]
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    className: "",
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: "text-green-500 font-semibold text-xl mb-3",
                                        children: e("footer.links.explore")
                                    }), (0,
                                    t.jsxs)("ul", {
                                        className: "text-black opacity-80 footer-links text-sm leading-6",
                                        children: [(0,
                                        t.jsx)("li", {
                                            children: (0,
                                            t.jsx)(s(), {
                                                href: "/blocks",
                                                children: (0,
                                                t.jsx)("a", {
                                                    children: e("footer.links.latestBlocks")
                                                })
                                            })
                                        }), (0,
                                        t.jsx)("li", {
                                            children: (0,
                                            t.jsx)(s(), {
                                                href: "/txns",
                                                children: (0,
                                                t.jsx)("a", {
                                                    children: e("footer.links.latestTxns")
                                                })
                                            })
                                        }), (0,
                                        t.jsx)("li", {
                                            children: (0,
                                            t.jsx)(s(), {
                                                href: "/charts",
                                                children: (0,
                                                t.jsx)("a", {
                                                    children: e("footer.links.charts")
                                                })
                                            })
                                        })]
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    className: "",
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: "text-green-500 font-semibold text-xl mb-3",
                                        children: e("footer.links.company")
                                    }), (0,
                                    t.jsxs)("ul", {
                                        className: "text-black opacity-80 footer-links text-sm leading-6",
                                        children: [(0,
                                        t.jsx)("li", {
                                            children: (0,
                                            t.jsx)(s(), {
                                                href: "/about",
                                                children: (0,
                                                t.jsx)("a", {
                                                    children: e("footer.links.about")
                                                })
                                            })
                                        }), (0,
                                        t.jsx)("li", {
                                            children: (0,
                                            t.jsx)(s(), {
                                                href: "https://careers.near.org/companies/invoker-labs",
                                                children: (0,
                                                t.jsxs)("a", {
                                                    className: "flex",
                                                    target: "_blank",
                                                    rel: "noreferrer nofollow noopener",
                                                    children: ["Careers", (0,
                                                    t.jsx)("span", {
                                                        children: (0,
                                                        t.jsx)(_.Z, {
                                                            className: "-rotate-45 -mt-0 h-4 w-4"
                                                        })
                                                    })]
                                                })
                                            })
                                        }), (0,
                                        t.jsx)("li", {
                                            children: (0,
                                            t.jsx)(s(), {
                                                href: "/advertise",
                                                children: (0,
                                                t.jsx)("a", {
                                                    children: e("footer.links.advertise")
                                                })
                                            })
                                        }), (0,
                                        t.jsx)("li", {
                                            children: (0,
                                            t.jsx)(s(), {
                                                href: "/contact",
                                                children: (0,
                                                t.jsx)("a", {
                                                    children: e("footer.links.contact")
                                                })
                                            })
                                        }), (0,
                                        t.jsx)("li", {
                                            children: (0,
                                            t.jsx)(s(), {
                                                href: "/terms-and-conditions",
                                                children: (0,
                                                t.jsx)("a", {
                                                    children: e("footer.links.terms")
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            }), (0,
                            t.jsxs)("div", {
                                className: "flex justify-between border-t border-gray-200",
                                children: [(0,
                                t.jsxs)("p", {
                                    className: "text-green-500 text-xs py-4 text-center ",
                                    children: ["ESC \xa9 2022 by", " ", (0,
                                    t.jsx)("a", {
                                        href: "https://invoker.lol",
                                        target: "_blank",
                                        className: "font-semibold",
                                        rel: "noreferrer nofollow noopener",
                                        children: "Invoker Labs"
                                    })]
                                }), (0,
                                t.jsx)("div", {
                                    className: "pt-3",
                                    children: (0,
                                    t.jsx)("a", {
                                        href: "https://twitter.com/EdgeSmartChain",
                                        target: "_blank",
                                        rel: "noreferrer nofollow noopener",
                                        children: (0,
                                        t.jsx)(a(), {
                                            src: "/images/twitter.svg",
                                            width: 20,
                                            height: 20,
                                            alt: "Twitter"
                                        })
                                    })
                                })]
                            }), (0,
                            t.jsxs)("div", {
                                className: "text-gray-400 text-xs flex items-center flex-wrap",
                                children: ["Price feeds aggregated from", " ", (0,
                                t.jsx)(s(), {
                                    href: "https://coinmarketcap.com/",
                                    children: (0,
                                    t.jsxs)("a", {
                                        className: "mx-1",
                                        target: "_blank",
                                        rel: "noreferrer nofollow noopener",
                                        children: [(0,
                                        t.jsx)(a(), {
                                            src: "/images/coinmarketcap_black.svg",
                                            alt: "CoinMarketCap",
                                            className: "inline-flex w-5 h-5 ",
                                            width: 20,
                                            height: 20
                                        }), " "]
                                    })
                                }), (0,
                                t.jsx)(s(), {
                                    href: "http://coingecko.com/",
                                    children: (0,
                                    t.jsxs)("a", {
                                        className: "mx-1",
                                        target: "_blank",
                                        rel: "noreferrer nofollow noopener",
                                        children: [(0,
                                        t.jsx)(a(), {
                                            src: "/images/coingecko_logo_black.svg",
                                            alt: "CoinGecko",
                                            className: "inline-flex w-5 h-5",
                                            width: 20,
                                            height: 20
                                        }), " "]
                                    })
                                }), "\xa0", (0,
                                t.jsx)(s(), {
                                    href: "https://www.livecoinwatch.com/",
                                    children: (0,
                                    t.jsxs)("a", {
                                        className: "mx-1",
                                        target: "_blank",
                                        rel: "noreferrer nofollow noopener",
                                        children: [(0,
                                        t.jsx)(a(), {
                                            src: "/images/livecoinwatch_logo_black.svg",
                                            alt: "LiveCoinWatch",
                                            className: "inline-flex w-5 h-5",
                                            width: 20,
                                            height: 20
                                        }), " "]
                                    })
                                }), (0,
                                t.jsx)(s(), {
                                    href: "https://coincodex.com/",
                                    children: (0,
                                    t.jsxs)("a", {
                                        className: "mx-1",
                                        target: "_blank",
                                        rel: "noreferrer nofollow noopener",
                                        children: [(0,
                                        t.jsx)(a(), {
                                            src: "/images/coincodex.svg",
                                            alt: "coincodex",
                                            className: "inline-flex w-5 h-5",
                                            width: 20,
                                            height: 20
                                        }), " "]
                                    })
                                }), (0,
                                t.jsx)(s(), {
                                    href: "https://nomics.com/",
                                    children: (0,
                                    t.jsxs)("a", {
                                        className: "mx-1",
                                        target: "_blank",
                                        rel: "noreferrer nofollow noopener",
                                        children: [(0,
                                        t.jsx)(a(), {
                                            src: "/images/nomics.svg",
                                            alt: "nomics",
                                            className: "inline-flex w-5 h-5",
                                            width: 20,
                                            height: 20
                                        }), " "]
                                    })
                                })]
                            }), (0,
                            t.jsx)("div", {
                                children: (0,
                                t.jsx)("p", {
                                    className: "text-gray-400 text-xs mt-3",
                                    children: e("trademark")
                                })
                            })]
                        })
                    })
                })
            })
        }
          , A = function(e) {
            var r = e.children
              , n = "/404" === (0,
            o.useRouter)().pathname ? "bg-white" : "bg-neargray-25";
            return (0,
            t.jsxs)("div", {
                className: n,
                children: [(0,
                t.jsx)("header", {
                    children: (0,
                    t.jsx)(P, {})
                }), (0,
                t.jsx)("main", {
                    children: r
                }), (0,
                t.jsx)(C, {})]
            })
        }
    },
    37506: function(e, r, n) {
        var t = n(8014)
          , l = n(60950);
        function s(e, r, n) {
            return r in e ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = n,
            e
        }
        function i(e) {
            for (var r = 1; r < arguments.length; r++) {
                var n = null != arguments[r] ? arguments[r] : {}
                  , t = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                t.forEach((function(r) {
                    s(e, r, n[r])
                }
                ))
            }
            return e
        }
        function a(e, r) {
            if (null == e)
                return {};
            var n, t, l = function(e, r) {
                if (null == e)
                    return {};
                var n, t, l = {}, s = Object.keys(e);
                for (t = 0; t < s.length; t++)
                    n = s[t],
                    r.indexOf(n) >= 0 || (l[n] = e[n]);
                return l
            }(e, r);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (t = 0; t < s.length; t++)
                    n = s[t],
                    r.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
            }
            return l
        }
        r.Z = function(e) {
            var r = e.count
              , n = void 0 === r ? 1 : r
              , s = e.className
              , o = e.wrapperClassName
              , c = a(e, ["count", "className", "wrapperClassName"]);
            return (0,
            t.jsx)(l.Z, i({
                count: n,
                className: s,
                wrapper: function(e) {
                    return (0,
                    t.jsx)("div", i({
                        className: o
                    }, e))
                }
            }, c))
        }
    },
    83476: function(e, r, n) {
        n.d(r, {
            WY: function() {
                return f
            }
        });
        var t = n(44743)
          , l = n(32435)
          , s = n(8012);
        function i(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var n = 0, t = new Array(r); n < r; n++)
                t[n] = e[n];
            return t
        }
        function a(e, r, n) {
            return r in e ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = n,
            e
        }
        function o(e) {
            for (var r = 1; r < arguments.length; r++) {
                var n = null != arguments[r] ? arguments[r] : {}
                  , t = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                t.forEach((function(r) {
                    a(e, r, n[r])
                }
                ))
            }
            return e
        }
        function c(e, r) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, r) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var t, l, s = [], i = !0, a = !1;
                    try {
                        for (n = n.call(e); !(i = (t = n.next()).done) && (s.push(t.value),
                        !r || s.length !== r); i = !0)
                            ;
                    } catch (o) {
                        a = !0,
                        l = o
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (a)
                                throw l
                        }
                    }
                    return s
                }
            }(e, r) || function(e, r) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return i(e, r);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return i(e, r)
            }(e, r) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var u = "https://dash.nearblocks.io/v1"
          , d = {
            revalidateOnFocus: !1,
            shouldRetryOnError: !1,
            revalidateOnReconnect: !1
        }
          , h = function(e, r) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return l.ZP.get(e, o({
                baseURL: u,
                headers: r && {
                    Authorization: "Bearer " + r
                }
            }, n)).then((function(e) {
                return e.data
            }
            ))
        }
          , f = l.ZP.create({
            baseURL: u
        });
        f.interceptors.request.use((function(e) {
            var r = null;
            return (r = JSON.parse(localStorage.getItem("token"))) && (e.headers.Authorization = "Bearer ".concat(r)),
            e
        }
        ), (function(e) {
            return Promise.reject(e)
        }
        ));
        r.ZP = function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = c((0,
            s.Z)("token"), 1)
              , l = n[0]
              , i = o({}, d, r)
              , a = (0,
            t.ZP)([e, l], h, i)
              , u = a.data
              , f = a.error
              , x = a.mutate;
            return {
                data: u,
                error: f,
                loading: !f && !u,
                mutate: x
            }
        }
    },
    62423: function(e, r, n) {
        n.d(r, {
            ZP: function() {
                return x
            },
            vC: function() {
                return d
            },
            _i: function() {
                return f
            }
        });
        var t = n(8014)
          , l = n(44743)
          , s = n(32435)
          , i = n(61361)
          , a = function() {
            return (0,
            t.jsxs)("div", {
                className: "text-gray-500 text-sm",
                children: [(0,
                t.jsx)("span", {
                    className: "inline-block pb-1 text-gray-600 font-semibold",
                    children: "Hold up!"
                }), (0,
                t.jsx)("br", {}), "You\u2019ve hit the rate limit. Our servers need a moment to catch their breath.", (0,
                t.jsx)("br", {}), "We appreciate your patience!"]
            })
        };
        function o(e, r, n) {
            return r in e ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = n,
            e
        }
        function c(e) {
            for (var r = 1; r < arguments.length; r++) {
                var n = null != arguments[r] ? arguments[r] : {}
                  , t = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                t.forEach((function(r) {
                    o(e, r, n[r])
                }
                ))
            }
            return e
        }
        var u = "BAgemBv44hy8MXNjhmuUujKy"
          , d = {
            revalidateOnFocus: !1,
            shouldRetryOnError: !1,
            revalidateOnReconnect: !1
        }
          , h = s.ZP.create({
            baseURL: "https://api2.nearblocks.io/v1"
        });
        h.interceptors.response.use(void 0, (function(e) {
            var r;
            return 429 === (null === e || void 0 === e || null === (r = e.response) || void 0 === r ? void 0 : r.status) && i.Am.warn((0,
            t.jsx)(a, {}), {
                toastId: "rateLimit",
                autoClose: !1
            }),
            Promise.reject(e)
        }
        ));
        var f = function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return h.get(e, c({
                headers: c({
                    "Secs-Fetch-Key": u
                }, (null === r || void 0 === r ? void 0 : r.headers) || {})
            }, r)).then((function(e) {
                return e.data
            }
            ))
        }
          , x = function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = c({}, d, r)
              , t = (0,
            l.ZP)(e, f, n)
              , s = t.data
              , i = t.error;
            return {
                data: s,
                error: i,
                loading: !i && !s
            }
        }
    },
    8012: function(e, r, n) {
        var t = n(56168);
        r.Z = function(e, r) {
            var n = (0,
            t.useState)((function() {
                try {
                    var n = window.localStorage.getItem(e);
                    return n ? JSON.parse(n) : r
                } catch (t) {
                    return console.log(t),
                    r
                }
            }
            ))
              , l = n[0]
              , s = n[1];
            return [l, function(r) {
                try {
                    var n = (t = r,
                    (null != (i = Function) && "undefined" !== typeof Symbol && i[Symbol.hasInstance] ? i[Symbol.hasInstance](t) : t instanceof i) ? r(l) : r);
                    s(n),
                    window.localStorage.setItem(e, JSON.stringify(n))
                } catch (a) {
                    console.log(a)
                }
                var t, i
            }
            ]
        }
    },
    89043: function(e, r, n) {
        var t = n(96240)
          , l = n.n(t)
          , s = n(70051)
          , i = n.n(s)
          , a = n(40654)
          , o = n.n(a)
          , c = n(1016)
          , u = n.n(c);
        l().extend(i()),
        l().extend(o()),
        l().extend(u()),
        r.Z = l()
    },
    30462: function(e, r, n) {
        var t = n(44453)
          , l = n.n(t)
          , s = n(62423);
        function i(e, r, n, t, l, s, i) {
            try {
                var a = e[s](i)
                  , o = a.value
            } catch (c) {
                return void n(c)
            }
            a.done ? r(o) : Promise.resolve(o).then(t, l)
        }
        var a = function(e) {
            switch (e) {
            case "txns":
                return "txns";
            case "blocks":
                return "blocks";
            case "accounts":
                return "accounts";
            default:
                return ""
            }
        }
          , o = function() {
            var e, r = (e = l().mark((function e(r, n) {
                var t, i, o, c, u, d, h, f, x = arguments;
                return l().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = x.length > 2 && void 0 !== x[2] && x[2],
                            e.prev = 1,
                            d = a(n),
                            e.next = 6,
                            (0,
                            s._i)("/search/".concat(d, "?keyword=").concat(r));
                        case 6:
                            if (h = e.sent,
                            f = {
                                blocks: [],
                                txns: [],
                                accounts: [],
                                receipts: []
                            },
                            !(null === h || void 0 === h || null === (i = h.blocks) || void 0 === i ? void 0 : i.length)) {
                                e.next = 12;
                                break
                            }
                            if (!t) {
                                e.next = 11;
                                break
                            }
                            return e.abrupt("return", {
                                type: "block",
                                path: h.blocks[0].block_hash
                            });
                        case 11:
                            f.blocks = h.blocks;
                        case 12:
                            if (!(null === h || void 0 === h || null === (o = h.txns) || void 0 === o ? void 0 : o.length)) {
                                e.next = 16;
                                break
                            }
                            if (!t) {
                                e.next = 15;
                                break
                            }
                            return e.abrupt("return", {
                                type: "txn",
                                path: h.txns[0].transaction_hash
                            });
                        case 15:
                            f.txns = h.txns;
                        case 16:
                            if (!(null === h || void 0 === h || null === (c = h.receipts) || void 0 === c ? void 0 : c.length)) {
                                e.next = 20;
                                break
                            }
                            if (!t) {
                                e.next = 19;
                                break
                            }
                            return e.abrupt("return", {
                                type: "txn",
                                path: h.receipts[0].originated_from_transaction_hash
                            });
                        case 19:
                            f.receipts = h.receipts;
                        case 20:
                            if (!(null === h || void 0 === h || null === (u = h.accounts) || void 0 === u ? void 0 : u.length)) {
                                e.next = 24;
                                break
                            }
                            if (!t) {
                                e.next = 23;
                                break
                            }
                            return e.abrupt("return", {
                                type: "address",
                                path: h.accounts[0].account_id
                            });
                        case 23:
                            f.accounts = h.accounts;
                        case 24:
                            return e.abrupt("return", t ? null : f);
                        case 27:
                            e.prev = 27,
                            e.t0 = e.catch(1),
                            console.log({
                                error: e.t0
                            });
                        case 30:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[1, 27]])
            }
            )),
            function() {
                var r = this
                  , n = arguments;
                return new Promise((function(t, l) {
                    var s = e.apply(r, n);
                    function a(e) {
                        i(s, t, l, a, o, "next", e)
                    }
                    function o(e) {
                        i(s, t, l, a, o, "throw", e)
                    }
                    a(void 0)
                }
                ))
            }
            );
            return function(e, n) {
                return r.apply(this, arguments)
            }
        }();
        r.Z = o
    },
    68804: function(e, r, n) {
        n.d(r, {
            $4: function() {
                return H
            },
            Aq: function() {
                return w
            },
            Gc: function() {
                return _
            },
            I0: function() {
                return b
            },
            IB: function() {
                return k
            },
            JN: function() {
                return B
            },
            Jd: function() {
                return T
            },
            KE: function() {
                return z
            },
            QU: function() {
                return P
            },
            S5: function() {
                return R
            },
            Vz: function() {
                return I
            },
            WV: function() {
                return v
            },
            XC: function() {
                return U
            },
            Xn: function() {
                return g
            },
            bE: function() {
                return N
            },
            fM: function() {
                return C
            },
            fW: function() {
                return J
            },
            iO: function() {
                return j
            },
            jQ: function() {
                return y
            },
            kP: function() {
                return D
            },
            k_: function() {
                return E
            },
            my: function() {
                return S
            },
            nt: function() {
                return A
            },
            or: function() {
                return M
            },
            pm: function() {
                return p
            },
            sO: function() {
                return L
            },
            u2: function() {
                return F
            },
            xB: function() {
                return Z
            }
        });
        var t = n(48984)
          , l = n.n(t)
          , s = n(65400)
          , i = n(9922)
          , a = n(8062)
          , o = n(22943)
          , c = n.n(o)
          , u = n(89914)
          , d = n.n(u)
          , h = n(60197).Buffer;
        function f(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var n = 0, t = new Array(r); n < r; n++)
                t[n] = e[n];
            return t
        }
        function x(e, r) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, r) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var t, l, s = [], i = !0, a = !1;
                    try {
                        for (n = n.call(e); !(i = (t = n.next()).done) && (s.push(t.value),
                        !r || s.length !== r); i = !0)
                            ;
                    } catch (o) {
                        a = !0,
                        l = o
                    } finally {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (a)
                                throw l
                        }
                    }
                    return s
                }
            }(e, r) || function(e, r) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return f(e, r);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return f(e, r)
            }(e, r) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        l().NE = -18;
        var m = l()(10).pow(24)
          , p = function(e) {
            return "".concat(e && e.substr(0, 6), "...").concat(e.substr(-4))
        }
          , g = function(e) {
            var r = String(e);
            return r.length <= 20 ? r : "".concat(r.substr(0, 10), "...").concat(r.substr(-7))
        }
          , v = function(e) {
            return c()(e, {
                length: 14
            })
        }
          , b = function(e) {
            return c()(e, {
                length: 5
            })
        }
          , j = function(e) {
            return (0,
            a.prefix)(e)
        }
          , y = function(e) {
            return (0,
            i.Z)(e, "0.00 bd")
        }
          , w = function(e) {
            return (0,
            i.Z)(e, "0.00 a")
        }
          , k = function(e) {
            return (0,
            i.Z)(e, "0,0.00")
        }
          , N = function(e) {
            return (0,
            i.Z)(e, "0,0.#####")
        }
          , O = function(e) {
            return (0,
            i.Z)(e, "0,0.########")
        }
          , S = function(e) {
            return (0,
            i.Z)(e, "0,0")
        }
          , Z = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , n = l()(e).div(m);
            return r ? N(n.toString()) : n
        }
          , P = function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18
              , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (void 0 === e || null === e)
                return "N/A";
            var t = l()(e).div(l()(10).pow(+r));
            return n ? O(t.toString()) : t
        }
          , _ = function(e, r) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 18;
            return P(r, n, !1).div(e).mul(l()(100)).toFixed(2)
        }
          , C = function(e, r) {
            return Math.min(l()(r).div(l()(e)).mul(l()(100)).toFixed(2), 100)
        }
          , A = function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18
              , n = arguments.length > 2 ? arguments[2] : void 0;
            return k(P(e, r, !1).mul(l()(n || 0)).toString())
        }
          , E = function(e, r) {
            return r ? (n = l()(e).div(l()(r)).toFixed(),
            (0,
            i.Z)(n, "0.##%")) : "N/A";
            var n
        }
          , I = function(e) {
            return l()(e).div(l()(10).pow(6)).round().toNumber()
        }
          , T = function(e) {
            var r = Z(e, !1).mul(l()(10).pow(12)).toString();
            return "".concat(N(r), " \u24c3 / Tgas")
        }
          , B = function(e, r) {
            var n = Z(l()(e).mul(l()(r)).toString());
            return "".concat(n, " \u24c3")
        }
          , F = function(e, r) {
            return k(e.mul(l()(r)).toString())
        }
          , z = function(e) {
            return Object.entries(e).reduce((function(e, r) {
                var n = x(r, 2)
                  , t = n[0]
                  , l = n[1];
                return "id" === t ? e : l ? (e[t] = l,
                e) : e
            }
            ), {})
        }
          , M = "https://nearblocks.io"
          , R = function(e) {
            if (!e || "undefined" === typeof e)
                return "The arguments are empty";
            var r = ""
              , n = h.from(e, "base64");
            try {
                var t = JSON.parse(n.toString());
                r = JSON.stringify(t, null, 2)
            } catch (l) {
                r = (0,
                s.hexy)(n, {
                    format: "twos"
                })
            }
            return r
        }
          , L = function(e) {
            var r = e.replace(/\\/g, "");
            try {
                return JSON.parse(r),
                !1
            } catch (n) {
                return !1
            }
        }
          , D = function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 25;
            return e + 1 + (r - 1) * n
        }
          , U = function(e) {
            try {
                var r, n = new URL(e);
                return null !== (r = null === n || void 0 === n ? void 0 : n.hostname) && void 0 !== r ? r : null
            } catch (t) {
                return null
            }
        }
          , H = function(e) {
            try {
                var r, n = d()(e, "response.data.errors") || {}, t = d()(e, "response.data.message") || null;
                return (null === n || void 0 === n ? void 0 : n.message) ? r = n.message : Object.keys(n).forEach((function(e) {
                    r = d()(n, "".concat(e, ".message")) || ""
                }
                )),
                r || t || e.message
            } catch (l) {
                return "Something went wrong, try again later"
            }
        }
          , J = "https://api.nearblocks.io/api-docs"
    }
}]);

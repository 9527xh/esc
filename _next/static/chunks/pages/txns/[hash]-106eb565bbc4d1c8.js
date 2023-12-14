function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
} 
var ths = getQueryString('hs');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9104], {
    86153: function(e, t, n) {
        var s = n(1530)(n(11217), "DataView");
        e.exports = s
    },
    8776: function(e, t, n) {
        var s = n(1530)(n(11217), "Promise");
        e.exports = s
    },
    86197: function(e, t, n) {
        var s = n(1530)(n(11217), "Set");
        e.exports = s
    },
    55728: function(e, t, n) {
        var s = n(1530)(n(11217), "WeakMap");
        e.exports = s
    },
    25190: function(e, t, n) {
        var s = n(33854)
          , a = n(35850);
        e.exports = function(e) {
            return a(e) && "[object Arguments]" == s(e)
        }
    },
    83932: function(e, t, n) {
        var s = n(33854)
          , a = n(78568)
          , r = n(35850)
          , l = {};
        l["[object Float32Array]"] = l["[object Float64Array]"] = l["[object Int8Array]"] = l["[object Int16Array]"] = l["[object Int32Array]"] = l["[object Uint8Array]"] = l["[object Uint8ClampedArray]"] = l["[object Uint16Array]"] = l["[object Uint32Array]"] = !0,
        l["[object Arguments]"] = l["[object Array]"] = l["[object ArrayBuffer]"] = l["[object Boolean]"] = l["[object DataView]"] = l["[object Date]"] = l["[object Error]"] = l["[object Function]"] = l["[object Map]"] = l["[object Number]"] = l["[object Object]"] = l["[object RegExp]"] = l["[object Set]"] = l["[object String]"] = l["[object WeakMap]"] = !1,
        e.exports = function(e) {
            return r(e) && a(e.length) && !!l[s(e)]
        }
    },
    70017: function(e, t, n) {
        var s = n(84707)
          , a = n(31371)
          , r = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            if (!s(e))
                return a(e);
            var t = [];
            for (var n in Object(e))
                r.call(e, n) && "constructor" != n && t.push(n);
            return t
        }
    },
    26659: function(e, t, n) {
        var s = n(86153)
          , a = n(9279)
          , r = n(8776)
          , l = n(86197)
          , c = n(55728)
          , i = n(33854)
          , o = n(19275)
          , d = "[object Map]"
          , x = "[object Promise]"
          , m = "[object Set]"
          , u = "[object WeakMap]"
          , f = "[object DataView]"
          , p = o(s)
          , h = o(a)
          , j = o(r)
          , v = o(l)
          , b = o(c)
          , w = i;
        (s && w(new s(new ArrayBuffer(1))) != f || a && w(new a) != d || r && w(r.resolve()) != x || l && w(new l) != m || c && w(new c) != u) && (w = function(e) {
            var t = i(e)
              , n = "[object Object]" == t ? e.constructor : void 0
              , s = n ? o(n) : "";
            if (s)
                switch (s) {
                case p:
                    return f;
                case h:
                    return d;
                case j:
                    return x;
                case v:
                    return m;
                case b:
                    return u
                }
            return t
        }
        ),
        e.exports = w
    },
    84707: function(e) {
        var t = Object.prototype;
        e.exports = function(e) {
            var n = e && e.constructor;
            return e === ("function" == typeof n && n.prototype || t)
        }
    },
    31371: function(e, t, n) {
        var s = n(29632)(Object.keys, Object);
        e.exports = s
    },
    29632: function(e) {
        e.exports = function(e, t) {
            return function(n) {
                return e(t(n))
            }
        }
    },
    74223: function(e, t, n) {
        var s = n(25190)
          , a = n(35850)
          , r = Object.prototype
          , l = r.hasOwnProperty
          , c = r.propertyIsEnumerable
          , i = s(function() {
            return arguments
        }()) ? s : function(e) {
            return a(e) && l.call(e, "callee") && !c.call(e, "callee")
        }
        ;
        e.exports = i
    },
    1691: function(e, t, n) {
        var s = n(64922)
          , a = n(78568);
        e.exports = function(e) {
            return null != e && a(e.length) && !s(e)
        }
    },
    17973: function(e, t, n) {
        e = n.nmd(e);
        var s = n(11217)
          , a = n(56068)
          , r = t && !t.nodeType && t
          , l = r && e && !e.nodeType && e
          , c = l && l.exports === r ? s.Buffer : void 0
          , i = (c ? c.isBuffer : void 0) || a;
        e.exports = i
    },
    44813: function(e, t, n) {
        var s = n(70017)
          , a = n(26659)
          , r = n(74223)
          , l = n(73370)
          , c = n(1691)
          , i = n(17973)
          , o = n(84707)
          , d = n(29717)
          , x = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            if (null == e)
                return !0;
            if (c(e) && (l(e) || "string" == typeof e || "function" == typeof e.splice || i(e) || d(e) || r(e)))
                return !e.length;
            var t = a(e);
            if ("[object Map]" == t || "[object Set]" == t)
                return !e.size;
            if (o(e))
                return !s(e).length;
            for (var n in e)
                if (x.call(e, n))
                    return !1;
            return !0
        }
    },
    78568: function(e) {
        e.exports = function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        }
    },
    29717: function(e, t, n) {
        var s = n(83932)
          , a = n(69661)
          , r = n(99232)
          , l = r && r.isTypedArray
          , c = l ? a(l) : s;
        e.exports = c
    },
    56068: function(e) {
        e.exports = function() {
            return !1
        }
    },
    63171: function(e, t, n) {
        "use strict";
        var s = n(56454);
        function a() {}
        function r() {}
        r.resetWarningCache = a,
        e.exports = function() {
            function e(e, t, n, a, r, l) {
                if (l !== s) {
                    var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw c.name = "Invariant Violation",
                    c
                }
            }
            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
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
                checkPropTypes: r,
                resetWarningCache: a
            };
            return n.PropTypes = n,
            n
        }
    },
    50862: function(e, t, n) {
        e.exports = n(63171)()
    },
    56454: function(e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    7202: function(e, t) {
        "use strict";
        var n = "function" === typeof Symbol && Symbol.for
          , s = n ? Symbol.for("react.element") : 60103
          , a = n ? Symbol.for("react.portal") : 60106
          , r = n ? Symbol.for("react.fragment") : 60107
          , l = n ? Symbol.for("react.strict_mode") : 60108
          , c = n ? Symbol.for("react.profiler") : 60114
          , i = n ? Symbol.for("react.provider") : 60109
          , o = n ? Symbol.for("react.context") : 60110
          , d = n ? Symbol.for("react.async_mode") : 60111
          , x = n ? Symbol.for("react.concurrent_mode") : 60111
          , m = n ? Symbol.for("react.forward_ref") : 60112
          , u = n ? Symbol.for("react.suspense") : 60113
          , f = n ? Symbol.for("react.suspense_list") : 60120
          , p = n ? Symbol.for("react.memo") : 60115
          , h = n ? Symbol.for("react.lazy") : 60116
          , j = n ? Symbol.for("react.block") : 60121
          , v = n ? Symbol.for("react.fundamental") : 60117
          , b = n ? Symbol.for("react.responder") : 60118
          , w = n ? Symbol.for("react.scope") : 60119;
        function N(e) {
            if ("object" === typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                case s:
                    switch (e = e.type) {
                    case d:
                    case x:
                    case r:
                    case c:
                    case l:
                    case u:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                        case o:
                        case m:
                        case h:
                        case p:
                        case i:
                            return e;
                        default:
                            return t
                        }
                    }
                case a:
                    return t
                }
            }
        }
        function g(e) {
            return N(e) === x
        }
        t.AsyncMode = d,
        t.ConcurrentMode = x,
        t.ContextConsumer = o,
        t.ContextProvider = i,
        t.Element = s,
        t.ForwardRef = m,
        t.Fragment = r,
        t.Lazy = h,
        t.Memo = p,
        t.Portal = a,
        t.Profiler = c,
        t.StrictMode = l,
        t.Suspense = u,
        t.isAsyncMode = function(e) {
            return g(e) || N(e) === d
        }
        ,
        t.isConcurrentMode = g,
        t.isContextConsumer = function(e) {
            return N(e) === o
        }
        ,
        t.isContextProvider = function(e) {
            return N(e) === i
        }
        ,
        t.isElement = function(e) {
            return "object" === typeof e && null !== e && e.$$typeof === s
        }
        ,
        t.isForwardRef = function(e) {
            return N(e) === m
        }
        ,
        t.isFragment = function(e) {
            return N(e) === r
        }
        ,
        t.isLazy = function(e) {
            return N(e) === h
        }
        ,
        t.isMemo = function(e) {
            return N(e) === p
        }
        ,
        t.isPortal = function(e) {
            return N(e) === a
        }
        ,
        t.isProfiler = function(e) {
            return N(e) === c
        }
        ,
        t.isStrictMode = function(e) {
            return N(e) === l
        }
        ,
        t.isSuspense = function(e) {
            return N(e) === u
        }
        ,
        t.isValidElementType = function(e) {
            return "string" === typeof e || "function" === typeof e || e === r || e === x || e === c || e === l || e === u || e === f || "object" === typeof e && null !== e && (e.$$typeof === h || e.$$typeof === p || e.$$typeof === i || e.$$typeof === o || e.$$typeof === m || e.$$typeof === v || e.$$typeof === b || e.$$typeof === w || e.$$typeof === j)
        }
        ,
        t.typeOf = N
    },
    2258: function(e, t, n) {
        "use strict";
        e.exports = n(7202)
    },
    77380: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/txns/[hash]", function() {
            return n(41867)
        }
        ])
    },
    78468: function(e, t, n) {
        "use strict";
        var s = n(8014)
          , a = n(56168)
          , r = n(62044)
          , l = [{
            title: "1inch -",
            description: "Store your tokens safely. Go self-custodial with the 1inch Wallet -",
            btnText: "Download now",
            url: "https://1inch.network/Nearblocks_Textad"
        }, {
            title: "Stader Labs -",
            description: "Get 50%+ APY & Assurance of Fund Safety with EscX Multi-Layer Security | Now Integrated with Burrow | EscX - Live on Aurora & ESC",
            btnText: "",
            url: "https://near.staderlabs.com/lt/near?tab=Stake"
        }];
        t.Z = function(e) {
            var t = e.fromHome
              , n = void 0 !== t && t
              , c = (0,
            r.Z)("common").t
              , i = (0,
            a.useState)({})
              , o = i[0]
              , d = i[1];
            return (0,
            a.useEffect)((function() {
                return d(l[Math.floor(Math.random() * l.length)])
            }
            ), []),
            o ? (0,
            s.jsx)("div", {
                className: "pt-3 text-sm flex",
                children: (0,
                s.jsxs)("p", {
                    className: "pr-2  ".concat(n ? "text-white" : "text-black", "  font-thin"),
                    children: [c("sponsored"), ":", (0,
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
    7755: function(e, t, n) {
        "use strict";
        var s = n(8014);
        function a(e, t, n) {
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
                        a(e, t, n[t])
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
                    d: "M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"
                })]
            }))
        }
    },
    28516: function(e, t, n) {
        "use strict";
        n.d(t, {
            om: function() {
                return c
            }
        });
        var s = n(44743)
          , a = n(32435)
          , r = n(62423)
          , l = function(e) {
            return a.ZP.get(e).then((function(e) {
                return e.data
            }
            ))
        }
          , c = function(e) {
            var t, n, a = (0,
            s.ZP)(e ? "https://api.coingecko.com/api/v3/coins/near/history?date=".concat(e) : "", l, r.vC), c = a.data, i = a.error;
            return {
                data: null === c || void 0 === c || null === (t = c.market_data) || void 0 === t || null === (n = t.current_price) || void 0 === n ? void 0 : n.usd,
                error: i,
                loading: !i && !c
            }
        }
    },
    4661: function(e, t, n) {
        "use strict";
        n.d(t, {
            EW: function() {
                return h
            },
            LG: function() {
                return j
            },
            PY: function() {
                return u
            },
            WU: function() {
                return p
            },
            tQ: function() {
                return d
            },
            uQ: function() {
                return x
            },
            wG: function() {
                return m
            }
        });
        var s = n(2612);
        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, s = new Array(t); n < t; n++)
                s[n] = e[n];
            return s
        }
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function l(e) {
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
        }
        function c(e) {
            return function(e) {
                if (Array.isArray(e))
                    return a(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return a(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var i = ["DEPLOY_CONTRACT", "TRANSFER", "STAKE", "ADD_KEY", "DELETE_KEY", "DELETE_ACCOUNT"]
          , o = function(e) {
            if ("CreateAccount" === e)
                return {
                    action_kind: "CreateAccount",
                    args: {}
                };
            var t = Object.keys(e)[0];
            return {
                action_kind: t,
                args: e[t]
            }
        }
          , d = function(e) {
            var t = e.transaction.actions.map(o)
              , n = e.receipts
              , s = e.receipts_outcome;
            0 !== n.length && n[0].receipt_id === s[0].id || n.unshift({
                predecessor_id: e.transaction.signer_id,
                receipt: t,
                receipt_id: s[0].id,
                receiver_id: e.transaction.receiver_id
            });
            var a = new Map
              , r = new Map;
            s.forEach((function(e) {
                a.set(e.id, e)
            }
            )),
            n.forEach((function(e) {
                var n, a;
                r.set(e.receipt_id, l({}, e, {
                    actions: e.receipt_id === s[0].id ? t : null === (n = e.receipt) || void 0 === n || null === (a = n.Action) || void 0 === a ? void 0 : a.actions.map(o)
                }))
            }
            ));
            var c = function(e) {
                var t = r.get(e)
                  , n = a.get(e);
                return l({}, t, n, {
                    outcome: l({}, n.outcome, {
                        outgoing_receipts: n.outcome.receipt_ids.map(c)
                    })
                })
            };
            return c(s[0].id)
        }
          , x = function(e) {
            var t = []
              , n = [];
            return e.forEach((function(e) {
                var n;
                return null === e || void 0 === e || null === (n = e.fts) || void 0 === n ? void 0 : n.forEach((function(e) {
                    e.ft_metas && t.push(e)
                }
                ))
            }
            )),
            e.forEach((function(e) {
                var t;
                return null === e || void 0 === e || null === (t = e.nfts) || void 0 === t ? void 0 : t.forEach((function(e) {
                    e.nft_meta && e.nft_token_meta && n.push(e)
                }
                ))
            }
            )),
            {
                fts: (0,
                s.uniqWith)(t, (function(e, t) {
                    return e.emitted_at_block_timestamp === t.emitted_at_block_timestamp && e.token_new_owner_account_id === t.token_new_owner_account_id && e.token_old_owner_account_id === t.token_old_owner_account_id && e.amount === t.amount
                }
                )),
                nfts: n
            }
        }
          , m = function(e) {
            for (var t = [], n = (null === e || void 0 === e ? void 0 : e.receipts) || [], s = 0; s < n.length; s++) {
                var a = n[s]
                  , r = null === a || void 0 === a ? void 0 : a.predecessor_id
                  , c = null === a || void 0 === a ? void 0 : a.receiver_id;
                if (Array.isArray(null === a || void 0 === a ? void 0 : a.receipt))
                    for (var i = a.receipt, d = 0; d < i.length; d++) {
                        var x = i[d];
                        t.push(l({
                            from: r,
                            to: c
                        }, x))
                    }
                else
                    for (var m, u, f = (null === a || void 0 === a || null === (m = a.receipt) || void 0 === m || null === (u = m.Action) || void 0 === u ? void 0 : u.actions) || [], p = 0; p < f.length; p++) {
                        var h = o(f[p]);
                        t.push(l({
                            from: r,
                            to: c
                        }, h))
                    }
            }
            return t.filter((function(e) {
                return "FunctionCall" !== e.action_kind && "system" !== e.from
            }
            ))
        }
          , u = function(e) {
            for (var t = function(e) {
                var t, a = s[e], r = (null === a || void 0 === a || null === (t = a.outcome) || void 0 === t ? void 0 : t.logs) || [];
                r.length > 0 && (r = r.map((function(e) {
                    var t;
                    return {
                        contract: null === a || void 0 === a || null === (t = a.outcome) || void 0 === t ? void 0 : t.executor_id,
                        logs: e
                    }
                }
                )),
                n = c(n).concat(c(r)))
            }, n = [], s = (null === e || void 0 === e ? void 0 : e.receipts_outcome) || [], a = 0; a < s.length; a++)
                t(a);
            return n
        }
          , f = function(e) {
            for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                var s = e[t[n]];
                if ("string" === typeof s)
                    return s;
                if ("object" === typeof s)
                    return f(s)
            }
        }
          , p = function(e) {
            var t, n, s, a = null === e || void 0 === e || null === (t = e.status) || void 0 === t || null === (n = t.Failure) || void 0 === n || null === (s = n.ActionError) || void 0 === s ? void 0 : s.kind;
            return "string" === typeof a ? a : "object" === typeof a ? f(a) : null
        }
          , h = function(e, t) {
            var n = (null === e || void 0 === e ? void 0 : e.length) || 0;
            if (!n)
                return t("unknownType");
            if (n > 1)
                return t("batchTxns");
            var s = e[0];
            return "FUNCTION_CALL" === s.action ? s.method : s.action
        }
          , j = function(e) {
            return i.includes(e.toUpperCase())
        }
    },
    41867: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSP: function() {
                return ge
            },
            default: function() {
                return ye
            }
        });
        var s = n(8014)
          , a = n(1984)
          , r = n(75332)
          , l = n(56168)
          , c = n(46469)
          , i = n(73369)
          , o = n(62044)
          , d = (n(97313),
        n(7732))
          , x = n(68804)
          , m = n(89819)
          , u = n(62423)
          , f = n(9125)
          , p = n(59779)
          , h = n(29325)
          , j = n(78468)
          , v = n(75657)
          , b = n.n(v)
          , w = n(33542)
          , N = n(45666)
          , g = n(48178)
          , y = n.n(g)
          , _ = n(59289)
          , k = (n(97187),
        n(89043))
          , Z = function(e) {
            var t = e.action;
            return (0,
            s.jsxs)("div", {
                className: "flex flex-wrap items-center break-all leading-7",
                children: [(0,
                s.jsx)(N.PS5, {
                    className: "inline-flex text-gray-400 text-xs"
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold px-1",
                    children: ["Stake", " ", (0,
                    s.jsxs)("span", {
                        className: "font-normal pl-1",
                        children: [(0,
                        x.xB)(t.args.stake), " \u24c3"]
                    })]
                })]
            })
        }
          , S = function(e) {
            var t = e.action;
            return (0,
            s.jsxs)("div", {
                className: "flex flex-wrap items-center break-all leading-7",
                children: [(0,
                s.jsx)(N.PS5, {
                    className: "inline-flex text-gray-400 text-xs"
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold px-1",
                    children: ["Transfer", " ", (0,
                    s.jsxs)("span", {
                        className: "font-normal pl-1",
                        children: [(0,
                        x.xB)(t.args.deposit), " \u24c3"]
                    })]
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold text-gray px-1",
                    children: ["From", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/".concat(t.from),
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal pl-1",
                            children: (0,
                            x.Xn)(t.from)
                        })
                    })]
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold text-gray px-1",
                    children: ["To", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/".concat(t.to),
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal pl-1",
                            children: (0,
                            x.Xn)(t.to)
                        })
                    })]
                })]
            })
        }
          , C = function(e) {
            var t = e.action;
            return (0,
            s.jsxs)("div", {
                className: "flex flex-wrap items-center break-all leading-7",
                children: [(0,
                s.jsx)(N.PS5, {
                    className: "inline-flex text-gray-400 text-xs"
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold px-1",
                    children: ["Create Account", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/".concat(t.to),
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal pl-1",
                            children: (0,
                            x.Xn)(t.to)
                        })
                    })]
                })]
            })
        }
          , O = function(e) {
            var t = e.action;
            return (0,
            s.jsxs)("div", {
                className: "flex flex-wrap items-center break-all leading-7",
                children: [(0,
                s.jsx)(N.PS5, {
                    className: "inline-flex text-gray-400 text-xs"
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold px-1",
                    children: ["Delete Account", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/".concat(t.to),
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal pl-1",
                            children: (0,
                            x.Xn)(t.to)
                        })
                    })]
                })]
            })
        }
          , P = function(e) {
            var t = e.action;
            return (0,
            s.jsxs)("div", {
                className: "flex flex-wrap items-center break-all leading-7",
                children: [(0,
                s.jsx)(N.PS5, {
                    className: "inline-flex text-gray-400 text-xs"
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold px-1",
                    children: ["Deploy Contract", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/".concat(t.to),
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal pl-1",
                            children: (0,
                            x.Xn)(t.to)
                        })
                    })]
                })]
            })
        }
          , A = function(e) {
            var t = e.action;
            switch (t.action_kind) {
            case "CreateAccount":
                return (0,
                s.jsx)(C, {
                    action: t
                });
            case "DeleteAccount":
                return (0,
                s.jsx)(O, {
                    action: t
                });
            case "DeployContract":
                return (0,
                s.jsx)(P, {
                    action: t
                });
            case "Stake":
                return (0,
                s.jsx)(Z, {
                    action: t
                });
            case "Transfer":
                return (0,
                s.jsx)(S, {
                    action: t
                });
            default:
                return null
            }
        }
          , E = n(37506)
          , T = n(66069)
          , D = function(e) {
            var t = e.contract
              , n = e.amount
              , a = e.decimals
              , r = (0,
            l.useState)(null)
              , c = r[0]
              , i = r[1];
            return (0,
            l.useEffect)((function() {
                (0,
                p.Jc)(t).then(i).catch(console.error)
            }
            ), [t]),
            c ? (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("span", {
                    className: "font-normal px-1",
                    children: (0,
                    x.QU)(n, c.decimals || a)
                }), (0,
                s.jsxs)("span", {
                    className: "flex items-center",
                    children: [(0,
                    s.jsx)(T.Z, {
                        src: c.icon,
                        alt: c.name,
                        className: "w-4 h-4 mx-1"
                    }), (0,
                    x.WV)(c.name), (0,
                    s.jsxs)("span", {
                        children: ["\xa0(", (0,
                        x.I0)(c.symbol), ")"]
                    })]
                })]
            }) : (0,
            s.jsx)(E.Z, {
                wrapperClassName: "flex w-full max-w-xl"
            })
        }
          , z = function(e) {
            var t, n = null === (t = e.event.logs) || void 0 === t ? void 0 : t.match(/^Swapped (\d+) ([\S]+) for (\d+) ([\S]+)/);
            return 5 !== (null === n || void 0 === n ? void 0 : n.length) ? null : (0,
            s.jsxs)("div", {
                className: "flex flex-wrap items-center break-all leading-7",
                children: [(0,
                s.jsx)(N.PS5, {
                    className: "inline-flex text-gray-400 text-xs"
                }), (0,
                s.jsx)("span", {
                    className: "font-bold px-1",
                    children: "Swap "
                }), (0,
                s.jsx)(D, {
                    contract: n[2],
                    amount: n[1]
                }), (0,
                s.jsx)("span", {
                    className: "font-bold px-1",
                    children: " For "
                }), (0,
                s.jsx)(D, {
                    contract: n[4],
                    amount: n[3]
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold text-gray px-1",
                    children: ["On", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/v2.ref-finance.near",
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal",
                            children: "Ref Finance"
                        })
                    })]
                })]
            })
        }
          , F = function(e) {
            var t = e.event;
            return !0 === /^Swapped.*/.test(t.logs) ? (0,
            s.jsx)(z, {
                event: t
            }) : null
        }
          , M = function(e) {
            var t, n = e.event, a = null === (t = n.logs) || void 0 === t ? void 0 : t.match(/^Deposit (\d+)ESCto ([\S]+)/);
            return 3 !== (null === a || void 0 === a ? void 0 : a.length) ? null : (0,
            s.jsxs)("div", {
                className: "flex flex-wrap items-center break-all leading-7",
                children: [(0,
                s.jsx)(N.PS5, {
                    className: "inline-flex text-gray-400 text-xs"
                }), (0,
                s.jsx)("span", {
                    className: "font-bold px-1",
                    children: "Mint "
                }), (0,
                s.jsx)(D, {
                    contract: n.contract,
                    amount: a[1]
                })]
            })
        }
          , B = function(e) {
            var t, n = e.event, a = null === (t = n.logs) || void 0 === t ? void 0 : t.match(/^Withdraw (\d+)ESCfrom ([\S]+)/);
            return 3 !== (null === a || void 0 === a ? void 0 : a.length) ? null : (0,
            s.jsxs)("div", {
                className: "flex flex-wrap items-center break-all leading-7",
                children: [(0,
                s.jsx)(N.PS5, {
                    className: "inline-flex text-gray-400 text-xs"
                }), (0,
                s.jsx)("span", {
                    className: "font-bold px-1",
                    children: "Burn "
                }), (0,
                s.jsx)(D, {
                    contract: n.contract,
                    amount: a[1]
                })]
            })
        }
          , X = function(e) {
            var t = e.event;
            switch (!0) {
            case /^Deposit.*/.test(t.logs):
                return (0,
                s.jsx)(M, {
                    event: t
                });
            case /^Withdraw.*/.test(t.logs):
                return (0,
                s.jsx)(B, {
                    event: t
                });
            default:
                return null
            }
        }
          , I = function(e) {
            var t = e.event
              , n = null === t || void 0 === t ? void 0 : t[0];
            return (null === n || void 0 === n ? void 0 : n.token_id) && (null === n || void 0 === n ? void 0 : n.account_id) && (null === n || void 0 === n ? void 0 : n.amount) ? (0,
            s.jsxs)("div", {
                className: "flex flex-wrap items-center break-all leading-7",
                children: [(0,
                s.jsx)(N.PS5, {
                    className: "inline-flex text-gray-400 text-xs"
                }), (0,
                s.jsx)("span", {
                    className: "font-bold px-1",
                    children: "Repay "
                }), (0,
                s.jsx)(D, {
                    contract: n.token_id,
                    amount: n.amount,
                    decimals: 18
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold text-gray px-1",
                    children: ["From", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/".concat(n.account_id),
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal pl-1",
                            children: (0,
                            x.Xn)(n.account_id)
                        })
                    })]
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold text-gray px-1",
                    children: ["On", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/contract.main.burrow.near",
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal",
                            children: "Burrow"
                        })
                    })]
                })]
            }) : null
        }
          , $ = function(e) {
            var t = e.event
              , n = null === t || void 0 === t ? void 0 : t[0];
            return (null === n || void 0 === n ? void 0 : n.token_id) && (null === n || void 0 === n ? void 0 : n.account_id) && (null === n || void 0 === n ? void 0 : n.amount) ? (0,
            s.jsxs)("div", {
                className: "flex flex-wrap items-center break-all leading-7",
                children: [(0,
                s.jsx)(N.PS5, {
                    className: "inline-flex text-gray-400 text-xs"
                }), (0,
                s.jsx)("span", {
                    className: "font-bold px-1",
                    children: "Borrow "
                }), (0,
                s.jsx)(D, {
                    contract: n.token_id,
                    amount: n.amount,
                    decimals: 18
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold text-gray px-1",
                    children: ["To", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/".concat(n.account_id),
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal pl-1",
                            children: (0,
                            x.Xn)(n.account_id)
                        })
                    })]
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold text-gray px-1",
                    children: ["On", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/contract.main.burrow.near",
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal",
                            children: "Burrow"
                        })
                    })]
                })]
            }) : null
        }
          , K = function(e) {
            var t = e.event
              , n = null === t || void 0 === t ? void 0 : t[0];
            return (null === n || void 0 === n ? void 0 : n.token_id) && (null === n || void 0 === n ? void 0 : n.account_id) && (null === n || void 0 === n ? void 0 : n.amount) ? (0,
            s.jsxs)("div", {
                className: "flex flex-wrap items-center break-all leading-7",
                children: [(0,
                s.jsx)(N.PS5, {
                    className: "inline-flex text-gray-400 text-xs"
                }), (0,
                s.jsx)("span", {
                    className: "font-bold px-1",
                    children: "Deposit "
                }), (0,
                s.jsx)(D, {
                    contract: n.token_id,
                    amount: n.amount,
                    decimals: 18
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold text-gray px-1",
                    children: ["From", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/".concat(n.account_id),
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal pl-1",
                            children: (0,
                            x.Xn)(n.account_id)
                        })
                    })]
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold text-gray px-1",
                    children: ["On", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/contract.main.burrow.near",
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal",
                            children: "Burrow"
                        })
                    })]
                })]
            }) : null
        }
          , R = function(e) {
            var t = e.event
              , n = null === t || void 0 === t ? void 0 : t[0];
            return (null === n || void 0 === n ? void 0 : n.token_id) && (null === n || void 0 === n ? void 0 : n.account_id) && (null === n || void 0 === n ? void 0 : n.amount) ? (0,
            s.jsxs)("div", {
                className: "flex flex-wrap items-center break-all leading-7",
                children: [(0,
                s.jsx)(N.PS5, {
                    className: "inline-flex text-gray-400 text-xs"
                }), (0,
                s.jsx)("span", {
                    className: "font-bold px-1",
                    children: "Deposit To Reserve "
                }), (0,
                s.jsx)(D, {
                    contract: n.token_id,
                    amount: n.amount,
                    decimals: 18
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold text-gray px-1",
                    children: ["From", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/".concat(n.account_id),
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal pl-1",
                            children: (0,
                            x.Xn)(n.account_id)
                        })
                    })]
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold text-gray px-1",
                    children: ["On", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/contract.main.burrow.near",
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal",
                            children: "Burrow"
                        })
                    })]
                })]
            }) : null
        }
          , L = function(e) {
            var t = e.event
              , n = null === t || void 0 === t ? void 0 : t[0];
            return (null === n || void 0 === n ? void 0 : n.token_id) && (null === n || void 0 === n ? void 0 : n.account_id) && (null === n || void 0 === n ? void 0 : n.amount) ? (0,
            s.jsxs)("div", {
                className: "flex flex-wrap items-center break-all leading-7",
                children: [(0,
                s.jsx)(N.PS5, {
                    className: "inline-flex text-gray-400 text-xs"
                }), (0,
                s.jsx)("span", {
                    className: "font-bold px-1",
                    children: "Withdraw "
                }), (0,
                s.jsx)(D, {
                    contract: n.token_id,
                    amount: n.amount,
                    decimals: 18
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold text-gray px-1",
                    children: ["To", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/".concat(n.account_id),
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal pl-1",
                            children: (0,
                            x.Xn)(n.account_id)
                        })
                    })]
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold text-gray px-1",
                    children: ["On", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/contract.main.burrow.near",
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal",
                            children: "Burrow"
                        })
                    })]
                })]
            }) : null
        }
          , Y = function(e) {
            var t = e.event
              , n = null === t || void 0 === t ? void 0 : t[0];
            return (null === n || void 0 === n ? void 0 : n.token_id) && (null === n || void 0 === n ? void 0 : n.account_id) && (null === n || void 0 === n ? void 0 : n.amount) ? (0,
            s.jsxs)("div", {
                className: "flex flex-wrap items-center break-all leading-7",
                children: [(0,
                s.jsx)(N.PS5, {
                    className: "inline-flex text-gray-400 text-xs"
                }), (0,
                s.jsx)("span", {
                    className: "font-bold px-1",
                    children: "Increase Collateral "
                }), (0,
                s.jsx)(D, {
                    contract: n.token_id,
                    amount: n.amount,
                    decimals: 18
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold text-gray px-1",
                    children: ["From", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/".concat(n.account_id),
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal pl-1",
                            children: (0,
                            x.Xn)(n.account_id)
                        })
                    })]
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold text-gray px-1",
                    children: ["On", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/contract.main.burrow.near",
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal",
                            children: "Burrow"
                        })
                    })]
                })]
            }) : null
        }
          , U = function(e) {
            var t = e.event
              , n = null === t || void 0 === t ? void 0 : t[0];
            return (null === n || void 0 === n ? void 0 : n.token_id) && (null === n || void 0 === n ? void 0 : n.account_id) && (null === n || void 0 === n ? void 0 : n.amount) ? (0,
            s.jsxs)("div", {
                className: "flex flex-wrap items-center break-all leading-7",
                children: [(0,
                s.jsx)(N.PS5, {
                    className: "inline-flex text-gray-400 text-xs"
                }), (0,
                s.jsx)("span", {
                    className: "font-bold px-1",
                    children: "Descrease Collateral "
                }), (0,
                s.jsx)(D, {
                    contract: n.token_id,
                    amount: n.amount,
                    decimals: 18
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold text-gray px-1",
                    children: ["From", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/".concat(n.account_id),
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal pl-1",
                            children: (0,
                            x.Xn)(n.account_id)
                        })
                    })]
                }), (0,
                s.jsxs)("span", {
                    className: "font-bold text-gray px-1",
                    children: ["On", " ", (0,
                    s.jsx)(b(), {
                        href: "/address/contract.main.burrow.near",
                        children: (0,
                        s.jsx)("a", {
                            className: "text-green-500 font-normal",
                            children: "Burrow"
                        })
                    })]
                })]
            }) : null
        }
          , W = function(e) {
            var t = e.event
              , n = {};
            try {
                n = JSON.parse(t.logs.replace("EVENT_JSON:", ""))
            } catch (a) {
                console.log(a)
            }
            switch (null === n || void 0 === n ? void 0 : n.event) {
            case "deposit_to_reserve":
                return (0,
                s.jsx)(R, {
                    event: n.data
                });
            case "deposit":
                return (0,
                s.jsx)(K, {
                    event: n.data
                });
            case "withdraw_succeeded":
                return (0,
                s.jsx)(L, {
                    event: n.data
                });
            case "increase_collateral":
                return (0,
                s.jsx)(Y, {
                    event: n.data
                });
            case "decrease_collateral":
                return (0,
                s.jsx)(U, {
                    event: n.data
                });
            case "borrow":
                return (0,
                s.jsx)($, {
                    event: n.data
                });
            case "repay":
                return (0,
                s.jsx)(I, {
                    event: n.data
                });
            default:
                return null
            }
        }
          , V = function(e) {
            var t = e.event;
            switch (t.contract) {
            case "wrap.near":
            case "wrap.testnet":
                return (0,
                s.jsx)(X, {
                    event: t
                });
            case "v2.ref-finance.near":
                return (0,
                s.jsx)(F, {
                    event: t
                });
            case "contract.main.burrow.near":
            case "contract.1638481328.burrow.testnet":
                return (0,
                s.jsx)(W, {
                    event: t
                });
            default:
                return null
            }
        }
          , Q = n(87804)
          , q = n(7755)
          , G = n(28516)
          , H = n(62114)
          , J = n(25429)
          , ee = n(4661)
          , te = function(e) {
            var t, n, a, r, c, i, d, m, f, p, h, j, v = e.txn, g = e.rpcTxn, Z = e.loading, S = (0,
            o.Z)("txns").t, C = (0,
            l.useState)(), O = C[0], P = C[1], D = (0,
            l.useState)(!1), z = D[0], F = D[1], M = (0,
            u.ZP)("stats").data, B = (null === M || void 0 === M || null === (t = M.stats) || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.near_price) || 0, X = (0,
            k.Z)((0,
            x.Vz)((null === v || void 0 === v ? void 0 : v.block_timestamp) || 0)), I = (0,
            l.useMemo)((function() {
                if ((0,
                k.Z)().isAfter(X.utc().format("YYYY-MM-DD"), "day"))
                    return X.format("DD-MM-YYYY")
            }
            ), [X]), $ = (0,
            G.om)(I), K = $.data, R = $.loading, L = (0,
            l.useMemo)((function() {
                var e;
                return (null === v || void 0 === v || null === (e = v.receipts) || void 0 === e ? void 0 : e.length) ? (0,
                ee.uQ)(v.receipts) : {
                    fts: [],
                    nfts: []
                }
            }
            ), [v]), Y = L.fts, U = L.nfts, W = (0,
            l.useMemo)((function() {
                return g ? [(0,
                ee.PY)(g), (0,
                ee.wG)(g), (0,
                ee.WU)(g)] : [[], [], void 0]
            }
            ), [g]), te = W[0], ne = W[1], se = W[2];
            return (0,
            l.useEffect)((function() {
                (null === v || void 0 === v ? void 0 : v.receiver_account_id) && (0,
                u._i)("account/".concat(v.receiver_account_id)).then((function(e) {
                    var t, n;
                    F("11111111111111111111111111111111" !== (null === e || void 0 === e || null === (t = e.account) || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.code_hash))
                }
                )).catch(console.log)
            }
            ), [v]),
            (0,
            l.useEffect)((function() {
                if ("undefined" !== typeof document) {
                    var e = document.getElementById("action-row")
                      , t = document.getElementById("action-column");
                    e && t && !t.hasChildNodes() && (e.style.display = "none")
                }
            }
            ), [te]),
            (0,
            s.jsxs)("div", {
                className: "bg-white text-sm text-gray-500 divide-solid divide-gray-200 divide-y",
                children: [(0,
                s.jsxs)("div", {
                    className: "bg-white text-sm text-gray-500",
                    children: [!1, (0,
                    s.jsxs)("div", {
                        className: "flex flex-wrap p-4",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                            children: [(0,
                            s.jsx)(w.ZP, {
                                label: S("txn.hash.tooltip"),
                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                children: (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsx)(H.Z, {
                                        className: "w-4 h-4 fill-current mr-1"
                                    })
                                })
                            }), S("txn.hash.text.0")]
                        }), Z ? (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4",
                            children: (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full max-w-xl"
                            })
                        }) : (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4 font-semibold break-words",
                            children: v.transaction_hash
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex flex-wrap items-start p-4",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                            children: [(0,
                            s.jsx)(w.ZP, {
                                label: S("txn.status.tooltip"),
                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                children: (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsx)(H.Z, {
                                        className: "w-4 h-4 fill-current mr-1"
                                    })
                                })
                            }), S("txn.status.text.0")]
                        }), Z ? (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4",
                            children: (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full max-w-xl"
                            })
                        }) : (0,
                        s.jsxs)("div", {
                            children: [(0,
                            s.jsx)(Q.Z, {
                                showLabel: !0,
                                status: null === (a = v.outcomes) || void 0 === a ? void 0 : a.status
                            }), se && (0,
                            s.jsx)("div", {
                                className: "text-xs bg-orange-50 my-2 rounded-md text-center px-2 py-1",
                                children: se
                            })]
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex flex-wrap p-4",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                            children: [(0,
                            s.jsx)(w.ZP, {
                                label: S("txn.block.tooltip"),
                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                children: (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsx)(H.Z, {
                                        className: "w-4 h-4 fill-current mr-1"
                                    })
                                })
                            }), S("txn.block.text.0")]
                        }), Z ? (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4",
                            children: (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-14"
                            })
                        }) : (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4 font-semibold break-words",
                            children: (0,
                            s.jsx)(b(), {
                                href: "/blocks-hs.html?hs=".concat(v.included_in_block_hash),
                                children: (0,
                                s.jsx)("a", {
                                    className: "text-green-500",
                                    children: (0,
                                    x.bE)(null === (r = v.block) || void 0 === r ? void 0 : r.block_height)
                                })
                            })
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex flex-wrap p-4",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                            children: [(0,
                            s.jsx)(w.ZP, {
                                label: S("txn.timestamp.tooltip"),
                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                children: (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsx)(H.Z, {
                                        className: "w-4 h-4 fill-current mr-1"
                                    })
                                })
                            }), S("txn.timestamp.text.0")]
                        }), Z ? (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4",
                            children: (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full max-w-sm"
                            })
                        }) : (0,
                        s.jsxs)("div", {
                            className: "w-full md:w-3/4 break-words",
                            children: [(0,
                            k.Z)().to(X), " (", X.utc().format("MMM-DD-YYYY hh:mm:ss A"), " +UTC)"]
                        })]
                    })]
                }), (ne.length > 0 || te.length > 0) && (0,
                s.jsx)("div", {
                    id: "action-row",
                    className: "bg-white text-sm text-gray-500",
                    children: (0,
                    s.jsxs)("div", {
                        className: "flex items-start flex-wrap p-4",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0 leading-7",
                            children: [(0,
                            s.jsx)(w.ZP, {
                                label: "Highlighted events of the transaction",
                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                children: (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsx)(H.Z, {
                                        className: "w-4 h-4 fill-current mr-1"
                                    })
                                })
                            }), "Transaction Actions"]
                        }), Z ? (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4",
                            children: (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full max-w-xl"
                            })
                        }) : (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4",
                            children: (0,
                            s.jsx)(y(), {
                                children: (0,
                                s.jsxs)("div", {
                                    id: "action-column",
                                    className: "max-h-[194px] break-words space-y-2",
                                    children: [te.map((function(e, t) {
                                        return (0,
                                        s.jsx)(V, {
                                            event: e
                                        }, t)
                                    }
                                    )), ne.map((function(e, t) {
                                        return (0,
                                        s.jsx)(A, {
                                            action: e
                                        }, t)
                                    }
                                    ))]
                                })
                            })
                        })]
                    })
                }), (0,
                s.jsxs)("div", {
                    className: "bg-white text-sm text-gray-500",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "flex flex-wrap p-4",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                            children: [(0,
                            s.jsx)(w.ZP, {
                                label: S("txn.from.tooltip"),
                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                children: (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsx)(H.Z, {
                                        className: "w-4 h-4 fill-current mr-1"
                                    })
                                })
                            }), S("txn.from.text.0")]
                        }), Z ? (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4",
                            children: (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full max-w-xl"
                            })
                        }) : (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4 break-all",
                            children: (0,
                            s.jsx)(b(), {
                                href: "/address/".concat(v.signer_account_id),
                                children: (0,
                                s.jsx)("a", {
                                    className: "text-green-500",
                                    children: v.signer_account_id
                                })
                            })
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex flex-wrap p-4",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                            children: [(0,
                            s.jsx)(w.ZP, {
                                label: S("txn.to.tooltip"),
                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                children: (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsx)(H.Z, {
                                        className: "w-4 h-4 fill-current mr-1"
                                    })
                                })
                            }), z ? "Interacted With (To)" : S("txn.to.text.0")]
                        }), Z ? (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4",
                            children: (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full max-w-xl"
                            })
                        }) : (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4 break-all",
                            children: (0,
                            s.jsx)(b(), {
                                href: "/address/".concat(v.receiver_account_id),
                                children: (0,
                                s.jsx)("a", {
                                    className: "text-green-500",
                                    children: v.receiver_account_id
                                })
                            })
                        })]
                    })]
                }), ((null === Y || void 0 === Y ? void 0 : Y.length) > 0 || (null === U || void 0 === U ? void 0 : U.length) > 0) && (0,
                s.jsxs)("div", {
                    className: "flex items-start flex-wrap p-4",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0 leading-7",
                        children: [(0,
                        s.jsx)(w.ZP, {
                            label: "List of tokens transferred in the transaction",
                            className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                            children: (0,
                            s.jsx)("div", {
                                children: (0,
                                s.jsx)(H.Z, {
                                    className: "w-4 h-4 fill-current mr-1"
                                })
                            })
                        }), "Tokens Transferred"]
                    }), Z ? (0,
                    s.jsx)("div", {
                        className: "w-full md:w-3/4",
                        children: (0,
                        s.jsx)(E.Z, {
                            wrapperClassName: "flex w-full max-w-xl"
                        })
                    }) : (0,
                    s.jsx)("div", {
                        className: "relative w-full md:w-3/4",
                        children: (0,
                        s.jsx)(y(), {
                            children: (0,
                            s.jsxs)("div", {
                                className: "max-h-[302px] break-words space-y-3",
                                children: [null === Y || void 0 === Y ? void 0 : Y.map((function(e) {
                                    return (0,
                                    s.jsxs)("div", {
                                        className: "flex items-center flex-wrap break-all leading-7",
                                        children: [(0,
                                        s.jsx)(N.PS5, {
                                            className: "inline-flex text-gray-400 text-xs"
                                        }), (0,
                                        s.jsxs)("div", {
                                            className: "font-semibold text-gray px-1",
                                            children: ["From", " ", e.token_old_owner_account_id ? (0,
                                            s.jsx)(b(), {
                                                href: "/address/".concat(e.token_old_owner_account_id),
                                                children: (0,
                                                s.jsx)("a", {
                                                    className: "text-green-500 font-normal pl-1",
                                                    children: (0,
                                                    x.Xn)(e.token_old_owner_account_id)
                                                })
                                            }) : (0,
                                            s.jsx)("span", {
                                                className: "font-normal pl-1",
                                                children: "system"
                                            })]
                                        }), (0,
                                        s.jsxs)("div", {
                                            className: "font-semibold text-gray px-1",
                                            children: ["To", " ", e.token_new_owner_account_id ? (0,
                                            s.jsx)(b(), {
                                                href: "/address/".concat(e.token_new_owner_account_id),
                                                children: (0,
                                                s.jsx)("a", {
                                                    className: "text-green-500 font-normal pl-1",
                                                    children: (0,
                                                    x.Xn)(e.token_new_owner_account_id)
                                                })
                                            }) : (0,
                                            s.jsx)("span", {
                                                className: "font-normal pl-1",
                                                children: "system"
                                            })]
                                        }), (0,
                                        s.jsxs)("div", {
                                            className: "font-semibold text-gray px-1",
                                            children: ["For", " ", (0,
                                            s.jsx)("span", {
                                                className: "pl-1 font-normal",
                                                children: (0,
                                                x.QU)(e.amount, e.ft_metas.decimals)
                                            })]
                                        }), (0,
                                        s.jsx)(b(), {
                                            href: "/token/".concat(e.ft_metas.contract),
                                            children: (0,
                                            s.jsxs)("a", {
                                                className: "text-green flex items-center",
                                                children: [(0,
                                                s.jsx)(T.Z, {
                                                    src: e.ft_metas.icon,
                                                    alt: e.ft_metas.name,
                                                    className: "w-4 h-4 mx-1"
                                                }), (0,
                                                x.WV)(e.ft_metas.name), (0,
                                                s.jsxs)("span", {
                                                    children: ["\xa0(", (0,
                                                    x.I0)(e.ft_metas.symbol), ")"]
                                                })]
                                            })
                                        })]
                                    }, e.key)
                                }
                                )), null === U || void 0 === U ? void 0 : U.map((function(e) {
                                    return (0,
                                    s.jsx)("div", {
                                        className: "flex",
                                        children: (0,
                                        s.jsxs)("div", {
                                            className: "flex justify-start items-start",
                                            children: [(0,
                                            s.jsx)(N.PS5, {
                                                className: "inline-flex text-gray-400 text-xs mt-1"
                                            }), (0,
                                            s.jsxs)("div", {
                                                className: "flex flex-wrap",
                                                children: [(0,
                                                s.jsxs)("div", {
                                                    children: [(0,
                                                    s.jsxs)("div", {
                                                        className: "sm:flex",
                                                        children: [(0,
                                                        s.jsxs)("div", {
                                                            className: "font-semibold text-gray px-1",
                                                            children: ["From", " ", e.token_old_owner_account_id ? (0,
                                                            s.jsx)(b(), {
                                                                href: "/address/".concat(e.token_old_owner_account_id),
                                                                children: (0,
                                                                s.jsx)("a", {
                                                                    className: "text-green-500 font-normal pl-1",
                                                                    children: (0,
                                                                    x.Xn)(e.token_old_owner_account_id)
                                                                })
                                                            }) : (0,
                                                            s.jsx)("span", {
                                                                className: "font-normal pl-1",
                                                                children: "system"
                                                            })]
                                                        }), (0,
                                                        s.jsxs)("div", {
                                                            className: "font-semibold text-gray px-1",
                                                            children: ["To", " ", e.token_new_owner_account_id ? (0,
                                                            s.jsx)(b(), {
                                                                href: "/address/".concat(e.token_new_owner_account_id),
                                                                children: (0,
                                                                s.jsx)("a", {
                                                                    className: "text-green-500 font-normal pl-1",
                                                                    children: (0,
                                                                    x.Xn)(e.token_new_owner_account_id)
                                                                })
                                                            }) : (0,
                                                            s.jsx)("span", {
                                                                className: "font-normal pl-1",
                                                                children: "system"
                                                            })]
                                                        })]
                                                    }), (0,
                                                    s.jsxs)("div", {
                                                        className: "sm:flex mt-1",
                                                        children: [(0,
                                                        s.jsxs)("div", {
                                                            className: "text-gray px-1",
                                                            children: [(0,
                                                            s.jsx)("span", {
                                                                className: "text-gray-400",
                                                                children: "For "
                                                            }), (0,
                                                            s.jsxs)("span", {
                                                                className: "pl-1 font-normal",
                                                                children: ["NFT Token ID [", (0,
                                                                s.jsx)(b(), {
                                                                    href: "/nft-token/".concat(e.nft_meta.contract, "/").concat(e.token_id),
                                                                    children: (0,
                                                                    s.jsx)("a", {
                                                                        className: "text-green",
                                                                        children: (0,
                                                                        x.WV)(e.token_id)
                                                                    })
                                                                }), "]"]
                                                            })]
                                                        }), (0,
                                                        s.jsx)(b(), {
                                                            href: "/nft-token/".concat(e.nft_meta.contract),
                                                            children: (0,
                                                            s.jsxs)("a", {
                                                                className: "text-green flex items-center",
                                                                children: [(0,
                                                                s.jsx)(T.Z, {
                                                                    src: e.nft_meta.icon,
                                                                    alt: e.nft_meta.name,
                                                                    className: "w-4 h-4 mx-1"
                                                                }), (0,
                                                                x.WV)(e.nft_meta.name), (0,
                                                                s.jsxs)("span", {
                                                                    children: ["\xa0(", (0,
                                                                    x.I0)(e.nft_meta.symbol), ")"]
                                                                })]
                                                            })
                                                        })]
                                                    })]
                                                }), (0,
                                                s.jsx)("div", {
                                                    className: "border rounded ml-2 w-11 h-11 p-1",
                                                    children: (0,
                                                    s.jsx)(b(), {
                                                        href: "/nft-token/".concat(e.nft_meta.contract, "/").concat(e.token_id),
                                                        children: (0,
                                                        s.jsx)("a", {
                                                            children: (0,
                                                            s.jsx)(T.z, {
                                                                base: e.nft_meta.base_uri,
                                                                media: e.nft_token_meta.media,
                                                                reference: e.nft_meta.reference || e.nft_token_meta.reference,
                                                                alt: e.nft_token_meta.title,
                                                                className: "max-h-full rounded"
                                                            })
                                                        })
                                                    })
                                                })]
                                            })]
                                        })
                                    }, e.key)
                                }
                                ))]
                            })
                        })
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "bg-white text-sm text-gray-500",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "flex flex-wrap p-4",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                            children: [(0,
                            s.jsx)(w.ZP, {
                                label: S("txn.deposit.tooltip"),
                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                children: (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsx)(H.Z, {
                                        className: "w-4 h-4 fill-current mr-1"
                                    })
                                })
                            }), S("txn.deposit.text.0")]
                        }), Z ? (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4",
                            children: (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full max-w-xs"
                            })
                        }) : (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4 break-words",
                            children: (0,
                            s.jsx)(w.ZP, {
                                label: S("txn.deposit.tooltip"),
                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                children: (0,
                                s.jsxs)("span", {
                                    children: [(0,
                                    x.xB)((null === (c = v.actions_agg) || void 0 === c ? void 0 : c.deposit) || 0), " \u24c3", B ? " ($".concat((0,
                                    x.u2)((0,
                                    x.xB)((null === (i = v.actions_agg) || void 0 === i ? void 0 : i.deposit) || 0, !1), B), ")") : ""]
                                })
                            })
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex flex-wrap p-4",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                            children: [(0,
                            s.jsx)(w.ZP, {
                                label: S("txn.fee.tooltip"),
                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                children: (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsx)(H.Z, {
                                        className: "w-4 h-4 fill-current mr-1"
                                    })
                                })
                            }), S("txn.fee.text.0")]
                        }), Z ? (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4",
                            children: (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full max-w-xs"
                            })
                        }) : (0,
                        s.jsxs)("div", {
                            className: "w-full md:w-3/4 break-words",
                            children: [(0,
                            x.xB)((null === (d = v.outcomes_agg) || void 0 === d ? void 0 : d.transaction_fee) || 0), " \u24c3", B ? " ($".concat((0,
                            x.u2)((0,
                            x.xB)((null === (m = v.outcomes_agg) || void 0 === m ? void 0 : m.transaction_fee) || 0, !1), B), ")") : ""]
                        })]
                    })]
                }), I && (0,
                s.jsxs)("div", {
                    className: "flex flex-wrap p-4",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                        children: [(0,
                        s.jsx)(w.ZP, {
                            label: S("txn.price.tooltip"),
                            className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                            children: (0,
                            s.jsx)("div", {
                                children: (0,
                                s.jsx)(H.Z, {
                                    className: "w-4 h-4 fill-current mr-1"
                                })
                            })
                        }), S("txn.price.text.0")]
                    }), R ? (0,
                    s.jsx)("div", {
                        className: "w-full md:w-3/4",
                        children: (0,
                        s.jsx)(E.Z, {
                            wrapperClassName: "flex w-32"
                        })
                    }) : (0,
                    s.jsx)("div", {
                        className: "w-full md:w-3/4 break-words",
                        children: K ? "$".concat((0,
                        x.IB)(K), " / \u24c3") : "N/A"
                    })]
                }), (0,
                s.jsx)(_.UQ, {
                    collapsible: !0,
                    onChange: function() {
                        return P((function(e) {
                            return !e
                        }
                        ))
                    },
                    children: (0,
                    s.jsxs)(_.Qd, {
                        children: [(0,
                        s.jsx)(_.Hk, {
                            className: "text-sm text-gray-500 divide-solid divide-gray-200 divide-y border-b",
                            children: (0,
                            s.jsxs)("div", {
                                children: [(0,
                                s.jsxs)("div", {
                                    className: "flex flex-wrap p-4",
                                    children: [(0,
                                    s.jsxs)("div", {
                                        className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                                        children: [(0,
                                        s.jsx)(w.ZP, {
                                            label: S("txn.gas.tooltip"),
                                            className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                            children: (0,
                                            s.jsx)("div", {
                                                children: (0,
                                                s.jsx)(H.Z, {
                                                    className: "w-4 h-4 fill-current mr-1"
                                                })
                                            })
                                        }), S("txn.gas.text.0")]
                                    }), Z ? (0,
                                    s.jsx)("div", {
                                        className: "w-full md:w-3/4",
                                        children: (0,
                                        s.jsx)(E.Z, {
                                            wrapperClassName: "flex w-full max-w-xs"
                                        })
                                    }) : (0,
                                    s.jsxs)("div", {
                                        className: "w-full md:w-3/4 break-words",
                                        children: [(0,
                                        x.iO)((null === (f = v.actions_agg) || void 0 === f ? void 0 : f.gas_attached) || 0), "gas", " ", (0,
                                        s.jsx)("span", {
                                            className: "text-gray-300 px-1",
                                            children: "|"
                                        }), " ", (0,
                                        x.iO)((null === (p = v.outcomes_agg) || void 0 === p ? void 0 : p.gas_used) || 0), "gas (", (0,
                                        x.k_)((null === (h = v.outcomes_agg) || void 0 === h ? void 0 : h.gas_used) || 0, (null === (j = v.actions_agg) || void 0 === j ? void 0 : j.gas_attached) || 0), ")"]
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "flex flex-wrap p-4",
                                    children: [(0,
                                    s.jsxs)("div", {
                                        className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                                        children: [(0,
                                        s.jsx)(w.ZP, {
                                            label: S("txn.burnt.tooltip"),
                                            className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                            children: (0,
                                            s.jsx)("div", {
                                                children: (0,
                                                s.jsx)(H.Z, {
                                                    className: "w-4 h-4 fill-current mr-1"
                                                })
                                            })
                                        }), S("txn.burnt.text.0")]
                                    }), Z ? (0,
                                    s.jsx)("div", {
                                        className: "w-full md:w-3/4",
                                        children: (0,
                                        s.jsx)(E.Z, {
                                            wrapperClassName: "flex w-full max-w-xs"
                                        })
                                    }) : (0,
                                    s.jsx)("div", {
                                        className: "w-full text-xs items-center flex md:w-3/4 break-words",
                                        children: (0,
                                        s.jsxs)("div", {
                                            className: "bg-orange-50 rounded-md px-2 py-1",
                                            children: [(0,
                                            s.jsx)("span", {
                                                className: "text-xs mr-2",
                                                children: "\ud83d\udd25"
                                            }), (0,
                                            x.iO)(v.receipt_conversion_gas_burnt || 0), "gas", " ", (0,
                                            s.jsx)("span", {
                                                className: "text-gray-300 px-1",
                                                children: "|"
                                            }), " ", (0,
                                            x.xB)(v.receipt_conversion_tokens_burnt || 0), " \u24c3"]
                                        })
                                    })]
                                })]
                            })
                        }), (0,
                        s.jsx)("div", {
                            className: "flex flex-wrap p-4",
                            children: (0,
                            s.jsx)(_.KF, {
                                className: "focus:outline-none",
                                children: O ? (0,
                                s.jsxs)("span", {
                                    className: "text-green-500 flex items-center",
                                    children: ["Click to see less ", (0,
                                    s.jsx)(q.Z, {
                                        className: "fill-current"
                                    })]
                                }) : (0,
                                s.jsxs)("span", {
                                    className: "text-green-500 flex items-center",
                                    children: ["Click to see more ", (0,
                                    s.jsx)(J.Z, {
                                        className: "fill-current"
                                    })]
                                })
                            })
                        })]
                    })
                })]
            })
        }
          , ne = n(44813)
          , se = n.n(ne)
          , ae = function(e) {
            var t = e.receipt
              , n = (0,
            o.Z)("txns").t;
            if ("SuccessValue"in t.outcome.status) {
                var a = t.outcome.status.SuccessValue;
                return null === a ? n("txn.receipts.result.text.1") : 0 === a.length ? n("txn.receipts.result.text.2") : (0,
                s.jsx)("textarea", {
                    readOnly: !0,
                    rows: 4,
                    defaultValue: (0,
                    x.S5)(a),
                    className: "block appearance-none outline-none w-full border rounded-lg bg-gray-100 p-3 mt-3 resize-y"
                })
            }
            return "Failure"in t.outcome.status ? (0,
            s.jsx)("textarea", {
                readOnly: !0,
                rows: 4,
                defaultValue: JSON.stringify(t.outcome.status.Failure, null, 2),
                className: "block appearance-none outline-none w-full border rounded-lg bg-gray-100 p-3 mt-3 resize-y"
            }) : "SuccessReceiptId"in t.outcome.status ? t.outcome.status.SuccessReceiptId : ""
        }
          , re = function(e) {
            var t = e.args
              , n = (0,
            o.Z)("txns").t;
            return (0,
            s.jsxs)("div", {
                className: "py-1",
                children: [(0,
                s.jsx)(N.vAr, {
                    className: "inline-flex text-yellow-500 mr-1"
                }), " ", n("txn.actions.stake.0"), " ", (0,
                s.jsxs)("span", {
                    className: "font-bold",
                    children: [(0,
                    x.xB)(t.stake), " \u24c3"]
                }), " ", n("txn.actions.stake.1"), " ", (0,
                x.pm)(t.public_key)]
            })
        }
          , le = function(e) {
            var t, n, a = e.args, r = e.receiver, l = (0,
            o.Z)("txns").t;
            return "object" !== typeof (null === (t = a.access_key) || void 0 === t ? void 0 : t.permission) ? (0,
            s.jsxs)("div", {
                className: "py-1",
                children: [(0,
                s.jsx)(N.q2z, {
                    className: "inline-flex text-emerald-400 mr-1"
                }), " ", l("txn.actions.addKey.0"), " (", (0,
                s.jsx)("span", {
                    className: "font-bold",
                    children: (0,
                    x.pm)(a.public_key)
                }), ")", " ", l("txn.actions.addKey.2"), " ", (0,
                s.jsx)(b(), {
                    href: "/address/".concat(r),
                    children: (0,
                    s.jsx)("a", {
                        className: "text-green-500 font-bold",
                        children: (0,
                        x.Xn)(r)
                    })
                }), " ", l("txn.actions.addKey.4"), " ", (0,
                s.jsx)("span", {
                    className: "font-bold",
                    children: null === (n = a.access_key) || void 0 === n ? void 0 : n.permission
                })]
            }) : a.access_key.permission.permission_kind ? (0,
            s.jsxs)("div", {
                className: "py-1",
                children: [(0,
                s.jsx)(N.q2z, {
                    className: "inline-flex text-gray-400 mr-1"
                }), " ", l("txn.actions.addKey.0"), " (", (0,
                s.jsx)("span", {
                    className: "font-bold",
                    children: (0,
                    x.pm)(a.public_key)
                }), ")", l("txn.actions.addKey.2"), " ", (0,
                s.jsx)(b(), {
                    href: "/address/".concat(r),
                    children: (0,
                    s.jsx)("a", {
                        className: "text-green-500 font-bold",
                        children: (0,
                        x.Xn)(r)
                    })
                }), " ", l("txn.actions.addKey.4"), " ", (0,
                s.jsx)("span", {
                    className: "font-bold",
                    children: a.access_key.permission.permission_kind
                })]
            }) : (0,
            s.jsxs)("div", {
                className: "py-1",
                children: [(0,
                s.jsx)(N.q2z, {
                    className: "inline-flex text-gray-400 mr-1"
                }), " ", l("txn.actions.addKey.1"), " (", (0,
                s.jsx)("span", {
                    className: "font-bold",
                    children: (0,
                    x.pm)(a.public_key)
                }), ")", " ", l("txn.actions.addKey.2"), " ", l("txn.actions.addKey.3"), " ", (0,
                s.jsx)(b(), {
                    href: "/address/".concat(a.access_key.permission.FunctionCall.receiver_id),
                    children: (0,
                    s.jsx)("a", {
                        className: "text-green-500 font-bold",
                        children: (0,
                        x.Xn)(a.access_key.permission.FunctionCall.receiver_id)
                    })
                }), " ", l("txn.actions.addKey.4"), " ", l("txn.actions.addKey.5"), " ", (0,
                s.jsxs)("span", {
                    className: "font-bold",
                    children: [a.access_key.permission.FunctionCall.method_names.length > 0 ? a.access_key.permission.FunctionCall.method_names.join(", ") : "any", " "]
                }), l("txn.actions.addKey.6")]
            })
        }
          , ce = function(e) {
            var t = e.args
              , n = e.receiver
              , a = (0,
            o.Z)("txns").t;
            return (0,
            s.jsxs)("div", {
                className: "py-1",
                children: [(0,
                s.jsx)(N.Rdr, {
                    className: "inline-flex text-green-400 mr-1"
                }), " ", a("txn.actions.transfer.0"), " ", (0,
                s.jsxs)("span", {
                    className: "font-bold",
                    children: [(0,
                    x.xB)(t.deposit), " \u24c3"]
                }), " ", a("txn.actions.transfer.1"), " ", (0,
                s.jsx)(b(), {
                    href: "/address/".concat(n),
                    children: (0,
                    s.jsx)("a", {
                        className: "text-green-500 font-bold",
                        children: (0,
                        x.Xn)(n)
                    })
                })]
            })
        }
          , ie = function(e) {
            var t = e.args
              , n = (0,
            o.Z)("txns").t;
            return (0,
            s.jsxs)("div", {
                className: "py-1",
                children: [(0,
                s.jsx)(N.q2z, {
                    className: "inline-flex text-red-400 mr-1"
                }), " ", n("txn.actions.deleteKey.0"), " (", (0,
                s.jsx)("span", {
                    className: "font-bold",
                    children: (0,
                    x.pm)(t.public_key)
                }), ")", " ", n("txn.actions.deleteKey.1")]
            })
        }
          , oe = function(e) {
            var t = e.args
              , n = e.receiver
              , a = (0,
            o.Z)("txns").t;
            return (0,
            s.jsxs)("div", {
                className: "py-1",
                children: [(0,
                s.jsx)(N.tvD, {
                    className: "inline-flex text-yellow-500 mr-1"
                }), " ", a("txn.actions.functionCall.0"), " ", (0,
                s.jsx)("span", {
                    className: "font-bold",
                    children: t.method_name
                }), " ", a("txn.actions.functionCall.1"), " ", (0,
                s.jsx)(b(), {
                    href: "/address/".concat(n),
                    children: (0,
                    s.jsx)("a", {
                        className: "text-green-500 font-bold",
                        children: (0,
                        x.Xn)(n)
                    })
                }), (0,
                s.jsx)("textarea", {
                    readOnly: !0,
                    rows: 4,
                    defaultValue: (0,
                    x.S5)(t.args_base64 || t.args),
                    className: "block appearance-none outline-none w-full border rounded-lg bg-gray-100 p-3 mt-3 resize-y"
                })]
            })
        }
          , de = function(e) {
            var t = e.receiver
              , n = (0,
            o.Z)("txns").t;
            return (0,
            s.jsxs)("div", {
                className: "py-1",
                children: [(0,
                s.jsx)(N.Xws, {
                    className: "inline-flex text-emerald-400 mr-1"
                }), " ", n("txn.actions.createAccount.0"), " (", (0,
                s.jsx)(b(), {
                    href: "/address/".concat(t),
                    children: (0,
                    s.jsx)("a", {
                        className: "text-green-500 font-bold",
                        children: (0,
                        x.Xn)(t)
                    })
                }), ") ", n("txn.actions.createAccount.1")]
            })
        }
          , xe = function(e) {
            var t = e.args
              , n = e.receiver
              , a = (0,
            o.Z)("txns").t;
            return (0,
            s.jsxs)("div", {
                className: "py-1",
                children: [(0,
                s.jsx)(N.Xws, {
                    className: "inline-flex text-red-400 mr-1"
                }), " ", a("txn.actions.deleteAccount.0"), " (", (0,
                s.jsx)(b(), {
                    href: "/address/".concat(n),
                    children: (0,
                    s.jsx)("a", {
                        className: "text-green-500 font-bold",
                        children: (0,
                        x.Xn)(n)
                    })
                }), ") ", a("txn.actions.deleteAccount.1"), " ", (0,
                s.jsx)(b(), {
                    href: "/address/".concat(t.beneficiary_id),
                    children: (0,
                    s.jsx)("a", {
                        className: "text-green-500 font-bold",
                        children: (0,
                        x.Xn)(t.beneficiary_id)
                    })
                })]
            })
        }
          , me = function(e) {
            var t = e.receiver
              , n = (0,
            o.Z)("txns").t;
            return (0,
            s.jsxs)("div", {
                className: "py-1",
                children: [(0,
                s.jsx)(N.tvD, {
                    className: "inline-flex text-emerald-400 mr-1"
                }), " ", n("txn.actions.deployContract.0"), " (", (0,
                s.jsx)(b(), {
                    href: "/address/".concat(t),
                    children: (0,
                    s.jsx)("a", {
                        className: "text-green-500 font-bold",
                        children: (0,
                        x.Xn)(t)
                    })
                }), ") ", n("txn.actions.deployContract.1")]
            })
        }
          , ue = function(e) {
            var t = e.action
              , n = e.receiver;
            switch (t.action_kind) {
            case "ADD_KEY":
            case "AddKey":
                return (0,
                s.jsx)(le, {
                    args: t.args,
                    receiver: n
                });
            case "CREATE_ACCOUNT":
            case "CreateAccount":
                return (0,
                s.jsx)(de, {
                    args: t.args,
                    receiver: n
                });
            case "DELETE_ACCOUNT":
            case "DeleteAccount":
                return (0,
                s.jsx)(xe, {
                    args: t.args,
                    receiver: n
                });
            case "DELETE_KEY":
            case "DeleteKey":
                return (0,
                s.jsx)(ie, {
                    args: t.args,
                    receiver: n
                });
            case "DEPLOY_CONTRACT":
            case "DeployContract":
                return (0,
                s.jsx)(me, {
                    args: t.args,
                    receiver: n
                });
            case "FUNCTION_CALL":
            case "FunctionCall":
                return (0,
                s.jsx)(oe, {
                    args: t.args,
                    receiver: n
                });
            case "STAKE":
            case "Stake":
                return (0,
                s.jsx)(re, {
                    args: t.args,
                    receiver: n
                });
            case "TRANSFER":
            case "Transfer":
                return (0,
                s.jsx)(ce, {
                    args: t.args,
                    receiver: n
                });
            default:
                return (0,
                s.jsx)("div", {
                    children: t.action_kind
                })
            }
        }
          , fe = function(e) {
            var t, n, a, r, l, c, i, d = e.receipt, m = e.flag, f = (0,
            o.Z)("txns").t, p = (0,
            u.ZP)((null === d || void 0 === d ? void 0 : d.block_hash) && "blocks/".concat(null === d || void 0 === d ? void 0 : d.block_hash)), h = p.data, j = p.loading, v = null === h || void 0 === h || null === (t = h.blocks) || void 0 === t ? void 0 : t[0], N = function(e) {
                return (0,
                s.jsx)(fe, {
                    flag: !0,
                    receipt: e
                })
            };
            return (0,
            s.jsxs)("div", {
                className: "divide-solid divide-gray-200 divide-y",
                children: [(0,
                s.jsxs)("div", {
                    className: m ? "" : "border-l-4 border-green-400 ml-8 my-2",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "flex flex-wrap p-4",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                            children: [(0,
                            s.jsx)(w.ZP, {
                                label: f("txn.receipts.receipt.tooltip"),
                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                children: (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsx)(H.Z, {
                                        className: "w-4 h-4 fill-current mr-1"
                                    })
                                })
                            }), f("txn.receipts.receipt.text.0")]
                        }), d ? (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4 font-semibold word-break",
                            children: d.receipt_id
                        }) : (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4",
                            children: (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full max-w-xs"
                            })
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex flex-wrap p-4",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                            children: [(0,
                            s.jsx)(w.ZP, {
                                label: "Block height",
                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                children: (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsx)(H.Z, {
                                        className: "w-4 h-4 fill-current mr-1"
                                    })
                                })
                            }), f("txn.receipts.block.text.0")]
                        }), !d || j ? (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4",
                            children: (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full max-w-xs"
                            })
                        }) : (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4 word-break",
                            children: (0,
                            s.jsx)(b(), {
                                href: "/blocks-hs.html?hs=".concat(d.block_hash),
                                children: (0,
                                s.jsx)("a", {
                                    className: "text-green-500",
                                    children: (0,
                                    x.bE)(null === v || void 0 === v ? void 0 : v.block_height)
                                })
                            })
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex flex-wrap p-4",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                                children: [(0,
                                s.jsx)(w.ZP, {
                                    label: f("txn.receipts.from.tooltip"),
                                    className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                    children: (0,
                                    s.jsx)("div", {
                                        children: (0,
                                        s.jsx)(H.Z, {
                                            className: "w-4 h-4 fill-current mr-1"
                                        })
                                    })
                                }), f("txn.receipts.from.text.0")]
                            }), d ? (0,
                            s.jsx)("div", {
                                className: "w-full md:w-3/4 word-break",
                                children: (0,
                                s.jsx)(b(), {
                                    href: "/address/".concat(d.predecessor_id),
                                    children: (0,
                                    s.jsx)("a", {
                                        className: "text-green-500",
                                        children: d.predecessor_id
                                    })
                                })
                            }) : (0,
                            s.jsx)("div", {
                                className: "w-full md:w-3/4",
                                children: (0,
                                s.jsx)(E.Z, {
                                    wrapperClassName: "flex w-full max-w-sm"
                                })
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: "flex flex-wrap p-4",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                                children: [(0,
                                s.jsx)(w.ZP, {
                                    label: f("txn.receipts.to.tooltip"),
                                    className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                    children: (0,
                                    s.jsx)("div", {
                                        children: (0,
                                        s.jsx)(H.Z, {
                                            className: "w-4 h-4 fill-current mr-1"
                                        })
                                    })
                                }), f("txn.receipts.to.text.0")]
                            }), d ? (0,
                            s.jsx)("div", {
                                className: "w-full md:w-3/4 word-break",
                                children: (0,
                                s.jsx)(b(), {
                                    href: "/address/".concat(d.receiver_id),
                                    children: (0,
                                    s.jsx)("a", {
                                        className: "text-green-500",
                                        children: d.receiver_id
                                    })
                                })
                            }) : (0,
                            s.jsx)("div", {
                                className: "w-full md:w-3/4",
                                children: (0,
                                s.jsx)(E.Z, {
                                    wrapperClassName: "flex w-full max-w-xs"
                                })
                            })]
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex flex-wrap p-4",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                            children: [(0,
                            s.jsx)(w.ZP, {
                                label: f("txn.receipts.burnt.tooltip"),
                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                children: (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsx)(H.Z, {
                                        className: "w-4 h-4 fill-current mr-1"
                                    })
                                })
                            }), f("txn.receipts.burnt.text.0")]
                        }), d ? (0,
                        s.jsx)("div", {
                            className: "w-full items-center text-xs flex md:w-3/4 break-words",
                            children: (0,
                            s.jsxs)("div", {
                                className: "bg-orange-50 rounded-md px-2 py-1",
                                children: [(0,
                                s.jsx)("span", {
                                    className: "text-xs mr-2",
                                    children: "\ud83d\udd25 "
                                }), (0,
                                x.iO)(null !== (i = d.outcome.gas_burnt) && void 0 !== i ? i : 0), "gas", " ", (0,
                                s.jsx)("span", {
                                    className: "text-gray-300 px-1",
                                    children: "|"
                                }), " ", (0,
                                x.xB)(d.outcome.tokens_burnt), " \u24c3"]
                            })
                        }) : (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4",
                            children: (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-36"
                            })
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex items-start flex-wrap p-4",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                            children: [(0,
                            s.jsx)(w.ZP, {
                                label: f("txn.receipts.actions.tooltip"),
                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                children: (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsx)(H.Z, {
                                        className: "w-4 h-4 fill-current mr-1"
                                    })
                                })
                            }), f("txn.receipts.actions.text.0")]
                        }), d ? (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4 word-break space-y-4",
                            children: null === d || void 0 === d || null === (n = d.actions) || void 0 === n ? void 0 : n.map((function(e, t) {
                                return (0,
                                s.jsx)(ue, {
                                    action: e,
                                    receiver: d.receiver_id
                                }, t)
                            }
                            ))
                        }) : (0,
                        s.jsxs)("div", {
                            className: "w-full md:w-3/4",
                            children: [(0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full my-1 max-w-xs"
                            }), (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full"
                            }), (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full"
                            }), (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full"
                            })]
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex items-start flex-wrap p-4",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                            children: [(0,
                            s.jsx)(w.ZP, {
                                label: f("txn.receipts.result.tooltip"),
                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                children: (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsx)(H.Z, {
                                        className: "w-4 h-4 fill-current mr-1"
                                    })
                                })
                            }), f("txn.receipts.result.text.0")]
                        }), d ? (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4 break-words space-y-4",
                            children: (0,
                            s.jsx)(ae, {
                                receipt: d
                            })
                        }) : (0,
                        s.jsxs)("div", {
                            className: "w-full md:w-3/4",
                            children: [(0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full"
                            }), (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full"
                            }), (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full"
                            })]
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex items-start flex-wrap p-4",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center w-full md:w-1/4 mb-2 md:mb-0",
                            children: [(0,
                            s.jsx)(w.ZP, {
                                label: f("txn.receipts.logs.tooltip"),
                                className: "absolute h-auto max-w-xs bg-black bg-opacity-90 z-10 text-xs text-white px-3 py-2",
                                children: (0,
                                s.jsx)("div", {
                                    children: (0,
                                    s.jsx)(H.Z, {
                                        className: "w-4 h-4 fill-current mr-1"
                                    })
                                })
                            }), f("txn.receipts.logs.text.0")]
                        }), d ? (0,
                        s.jsx)("div", {
                            className: "w-full md:w-3/4 break-words space-y-4",
                            children: (null === d || void 0 === d || null === (a = d.outcome) || void 0 === a || null === (r = a.logs) || void 0 === r ? void 0 : r.length) > 0 ? (0,
                            s.jsx)("textarea", {
                                readOnly: !0,
                                rows: 4,
                                defaultValue: d.outcome.logs.join("\n"),
                                className: "block appearance-none outline-none w-full border rounded-lg bg-gray-100 p-3 mt-3 resize-y"
                            }) : f("txn.receipts.logs.text.1")
                        }) : (0,
                        s.jsxs)("div", {
                            className: "w-full md:w-3/4",
                            children: [(0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full"
                            }), (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full"
                            }), (0,
                            s.jsx)(E.Z, {
                                wrapperClassName: "flex w-full"
                            })]
                        })]
                    })]
                }), (null === d || void 0 === d || null === (l = d.outcome) || void 0 === l || null === (c = l.outgoing_receipts) || void 0 === c ? void 0 : c.length) > 0 && (0,
                s.jsx)("div", {
                    className: "pb-4",
                    children: d.outcome.outgoing_receipts.map((function(e) {
                        return (0,
                        s.jsx)("div", {
                            className: "pl-4 pt-6",
                            children: (0,
                            s.jsx)("div", {
                                className: "mx-4 border-l-4 border-l-gray-200",
                                children: N(e)
                            })
                        }, e.receipt_id)
                    }
                    ))
                })]
            })
        }
          , pe = fe
          , he = function(e) {
            var t = e.txn
              , n = e.rpcTxn
              , a = (0,
            l.useState)(null)
              , r = a[0]
              , c = a[1];
            return (0,
            l.useEffect)((function() {
                se()(n) || c((0,
                ee.tQ)(n))
            }
            ), [n]),
            (0,
            s.jsx)("div", {
                className: "bg-white text-sm text-gray-500 divide-solid divide-gray-200 divide-y",
                children: (0,
                s.jsx)(pe, {
                    txn: t,
                    receipt: r
                })
            })
        };
        function je(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, s = new Array(t); n < t; n++)
                s[n] = e[n];
            return s
        }
        function ve(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var s, a, r = [], l = !0, c = !1;
                    try {
                        for (n = n.call(e); !(l = (s = n.next()).done) && (r.push(s.value),
                        !t || r.length !== t); l = !0)
                            ;
                    } catch (i) {
                        c = !0,
                        a = i
                    } finally {
                        try {
                            l || null == n.return || n.return()
                        } finally {
                            if (c)
                                throw a
                        }
                    }
                    return r
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return je(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return je(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var be = "mainnet"
          , we = [" ", "execution", "comments"]
          , Ne = function() {
            var e, t = ths, n = (0,
            o.Z)("txns").t, f = ve((0,
            d.Z)(), 2), v = f[0], b = f[1], w = (0,
            l.useState)(null), N = w[0], g = w[1], y = (0,
            l.useState)(0), _ = y[0], k = y[1], Z = (0,
            u.ZP)(t && "txns/".concat(t)), S = Z.data, C = Z.loading, O = Z.error, P = null === S || void 0 === S || null === (e = S.txns) || void 0 === e ? void 0 : e[0], A = n("txn.metaTitle", {
                txn: t
            });
            A = "".concat("", " ").concat(A);
            var E = n("txn.metaDescription", {
                txn: t
            })
              , T = "".concat("https://meta.nearblocks.io/api", "/thumbnail/txn?transaction_hash=").concat(t, "&network=").concat(be);
            (0,
            l.useEffect)((function() {
                P && (0,
                p.L0)(P.transaction_hash, P.signer_account_id).then(g).catch(console.log)
            }
            ), [P]),
            (0,
            l.useEffect)((function() {
                var e = we.indexOf(v);
                k(-1 === e ? 0 : e)
            }
            ), [v]);
            var D = {
                url: "".concat(x.or, "/txns-hs.html?hs=").concat(t),
                identifier: t
            };
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsxs)(a.default, {
                    children: [(0,
                    s.jsx)("title", {
                        children: A
                    }), (0,
                    s.jsx)("meta", {
                        name: "title",
                        content: A
                    }), (0,
                    s.jsx)("meta", {
                        name: "description",
                        content: E
                    }), (0,
                    s.jsx)("meta", {
                        property: "og:title",
                        content: A
                    }), (0,
                    s.jsx)("meta", {
                        property: "og:description",
                        content: E
                    }), (0,
                    s.jsx)("meta", {
                        property: "twitter:title",
                        content: A
                    }), (0,
                    s.jsx)("meta", {
                        property: "twitter:description",
                        content: E
                    }), (0,
                    s.jsx)("meta", {
                        property: "og:image",
                        content: T
                    }), (0,
                    s.jsx)("meta", {
                        property: "og:image:secure_url",
                        content: T
                    }), (0,
                    s.jsx)("meta", {
                        name: "twitter:image:src",
                        content: T
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "container mx-auto px-3",
                    children: [(0,
                    s.jsxs)("div", {
                        children: [(0,
                        s.jsxs)("div", {
                            className: "md:flex items-center justify-between",
                            children: [(0,
                            s.jsx)("h1", {
                                className: "text-xl text-gray-700 px-2 py-4",
                                children: n("txn.heading")
                            }), (0,
                            s.jsx)(m.Z, {})]
                        }), (0,
                        s.jsx)("div", {
                            className: "text-gray-500 px-2 pb-5 pt-1 border-t",
                            children: (0,
                            s.jsx)(j.Z, {})
                        })]
                    }), O || !C && !P ? (0,
                    s.jsx)("div", {
                        className: "text-gray-400 text-xs px-2 mb-4",
                        children: n("txnError")
                    }) : (0,
                    s.jsx)("div", {
                        className: "bg-white soft-shadow rounded-lg pb-1",
                        children: (0,
                        s.jsxs)(i.mQ, {
                            onSelect: function(e) {
                                return function(e) {
                                    return b(we[e])
                                }(e)
                            },
                            selectedIndex: _,
                            children: [(0,
                            s.jsxs)(i.td, {
                                className: "flex flex-wrap border-b",
                                children: [(0,
                                s.jsx)(i.OK, {
                                    className: " text-gray-600 text-sm font-semibold border-green-500  overflow-hidden inline-block cursor-pointer p-3 focus:outline-none hover:text-green-500",
                                    selectedClassName: "border-b-4 border-green-500 text-green-500",
                                    children: (0,
                                    s.jsx)("h2", {
                                        children: n("txn.tabs.overview")
                                    })
                                }), (0,
                                s.jsx)(i.OK, {
                                    className: " text-gray-600 text-sm font-semibold border-green-500  overflow-hidden inline-block cursor-pointer p-3 focus:outline-none hover:text-green-500",
                                    selectedClassName: "border-b-4 border-green-500 text-green-500",
                                    children: (0,
                                    s.jsx)("h2", {
                                        children: n("txn.tabs.execution")
                                    })
                                }), (0,
                                s.jsx)(i.OK, {
                                    className: " text-gray-600 text-sm font-semibold border-green-500  overflow-hidden inline-block cursor-pointer p-3 focus:outline-none hover:text-green-500",
                                    selectedClassName: "border-b-4 border-green-500 text-green-500",
                                    children: (0,
                                    s.jsx)("h2", {
                                        children: n("txn.tabs.comments")
                                    })
                                })]
                            }), (0,
                            s.jsx)(i.x4, {
                                children: (0,
                                s.jsx)(te, {
                                    txn: P,
                                    rpcTxn: N,
                                    loading: C
                                })
                            }), (0,
                            s.jsx)(i.x4, {
                                children: (0,
                                s.jsx)(he, {
                                    rpcTxn: N,
                                    loading: C
                                })
                            }), (0,
                            s.jsx)(i.x4, {
                                children: (0,
                                s.jsx)("div", {
                                    className: "px-4 sm:px-6 py-3",
                                    children: (0,
                                    s.jsx)(c.qw, {
                                        shortname: "nearblocks",
                                        config: D
                                    })
                                })
                            })]
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: "py-8",
                        children: (0,
                        s.jsx)(h.Z, {})
                    })]
                })]
            })
        };
        Ne.Layout = f.Z;
        var ge = !0
          , ye = Ne
    }
}, function(e) {
    e.O(0, [5445, 3662, 1889, 6509, 3542, 2953, 5411, 7158, 5474, 9289, 9125, 6993, 1455, 9774, 2888, 179], (function() {
        return t = 77380,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);

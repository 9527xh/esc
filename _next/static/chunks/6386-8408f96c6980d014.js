(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6386], {
    66386: function(e, n, t) {
        "use strict";
        t.d(n, {
            cZ: function() {
                return Pn
            },
            t9: function() {
                return Sn
            }
        });
        var r = t(56168)
          , o = t(37401)
          , a = t(41124)
          , u = t(44947)
          , i = t(87185)
          , c = t(21301)
          , l = t(53040);
        function d() {
            return d = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            d.apply(this, arguments)
        }
        var f = "data-focus-lock"
          , s = "data-focus-lock-disabled";
        function v(e, n) {
            return function(e, n) {
                var t = (0,
                r.useState)((function() {
                    return {
                        value: e,
                        callback: n,
                        facade: {
                            get current() {
                                return t.value
                            },
                            set current(e) {
                                var n = t.value;
                                n !== e && (t.value = e,
                                t.callback(e, n))
                            }
                        }
                    }
                }
                ))[0];
                return t.callback = n,
                t.facade
            }(n || null, (function(n) {
                return e.forEach((function(e) {
                    return function(e, n) {
                        return "function" === typeof e ? e(n) : e && (e.current = n),
                        e
                    }(e, n)
                }
                ))
            }
            ))
        }
        var p = {
            width: "1px",
            height: "0px",
            padding: 0,
            overflow: "hidden",
            position: "fixed",
            top: "1px",
            left: "1px"
        }
          , m = function(e) {
            var n = e.children;
            return r.createElement(r.Fragment, null, r.createElement("div", {
                key: "guard-first",
                "data-focus-guard": !0,
                "data-focus-auto-guard": !0,
                style: p
            }), n, n && r.createElement("div", {
                key: "guard-last",
                "data-focus-guard": !0,
                "data-focus-auto-guard": !0,
                style: p
            }))
        };
        m.propTypes = {},
        m.defaultProps = {
            children: null
        };
        var h = function() {
            return h = Object.assign || function(e) {
                for (var n, t = 1, r = arguments.length; t < r; t++)
                    for (var o in n = arguments[t])
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                return e
            }
            ,
            h.apply(this, arguments)
        };
        function g(e, n) {
            var t = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]])
            }
            return t
        }
        Object.create;
        Object.create;
        function y(e) {
            return e
        }
        function b(e, n) {
            void 0 === n && (n = y);
            var t = []
              , r = !1;
            return {
                read: function() {
                    if (r)
                        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                    return t.length ? t[t.length - 1] : e
                },
                useMedium: function(e) {
                    var o = n(e, r);
                    return t.push(o),
                    function() {
                        t = t.filter((function(e) {
                            return e !== o
                        }
                        ))
                    }
                },
                assignSyncMedium: function(e) {
                    for (r = !0; t.length; ) {
                        var n = t;
                        t = [],
                        n.forEach(e)
                    }
                    t = {
                        push: function(n) {
                            return e(n)
                        },
                        filter: function() {
                            return t
                        }
                    }
                },
                assignMedium: function(e) {
                    r = !0;
                    var n = [];
                    if (t.length) {
                        var o = t;
                        t = [],
                        o.forEach(e),
                        n = t
                    }
                    var a = function() {
                        var t = n;
                        n = [],
                        t.forEach(e)
                    }
                      , u = function() {
                        return Promise.resolve().then(a)
                    };
                    u(),
                    t = {
                        push: function(e) {
                            n.push(e),
                            u()
                        },
                        filter: function(e) {
                            return n = n.filter(e),
                            t
                        }
                    }
                }
            }
        }
        function w(e, n) {
            return void 0 === n && (n = y),
            b(e, n)
        }
        function E(e) {
            void 0 === e && (e = {});
            var n = b(null);
            return n.options = h({
                async: !0,
                ssr: !1
            }, e),
            n
        }
        var O = w({}, (function(e) {
            return {
                target: e.target,
                currentTarget: e.currentTarget
            }
        }
        ))
          , k = w()
          , C = w()
          , x = E({
            async: !0
        })
          , N = []
          , S = r.forwardRef((function(e, n) {
            var t, o = r.useState(), a = o[0], u = o[1], i = r.useRef(), c = r.useRef(!1), l = r.useRef(null), m = e.children, h = e.disabled, g = e.noFocusGuards, y = e.persistentFocus, b = e.crossFrame, w = e.autoFocus, E = (e.allowTextSelection,
            e.group), C = e.className, S = e.whiteList, T = e.hasPositiveIndices, P = e.shards, R = void 0 === P ? N : P, I = e.as, M = void 0 === I ? "div" : I, F = e.lockProps, A = void 0 === F ? {} : F, L = e.sideCar, _ = e.returnFocus, D = e.focusOptions, B = e.onActivation, j = e.onDeactivation, W = r.useState({})[0], U = r.useCallback((function() {
                l.current = l.current || document && document.activeElement,
                i.current && B && B(i.current),
                c.current = !0
            }
            ), [B]), Y = r.useCallback((function() {
                c.current = !1,
                j && j(i.current)
            }
            ), [j]);
            (0,
            r.useEffect)((function() {
                h || (l.current = null)
            }
            ), []);
            var Z = r.useCallback((function(e) {
                var n = l.current;
                if (n && n.focus) {
                    var t = "function" === typeof _ ? _(n) : _;
                    if (t) {
                        var r = "object" === typeof t ? t : void 0;
                        l.current = null,
                        e ? Promise.resolve().then((function() {
                            return n.focus(r)
                        }
                        )) : n.focus(r)
                    }
                }
            }
            ), [_])
              , G = r.useCallback((function(e) {
                c.current && O.useMedium(e)
            }
            ), [])
              , q = k.useMedium
              , X = r.useCallback((function(e) {
                i.current !== e && (i.current = e,
                u(e))
            }
            ), []);
            var K = d(((t = {})[s] = h && "disabled",
            t[f] = E,
            t), A)
              , H = !0 !== g
              , V = H && "tail" !== g
              , z = v([n, X]);
            return r.createElement(r.Fragment, null, H && [r.createElement("div", {
                key: "guard-first",
                "data-focus-guard": !0,
                tabIndex: h ? -1 : 0,
                style: p
            }), T ? r.createElement("div", {
                key: "guard-nearest",
                "data-focus-guard": !0,
                tabIndex: h ? -1 : 1,
                style: p
            }) : null], !h && r.createElement(L, {
                id: W,
                sideCar: x,
                observed: a,
                disabled: h,
                persistentFocus: y,
                crossFrame: b,
                autoFocus: w,
                whiteList: S,
                shards: R,
                onActivation: U,
                onDeactivation: Y,
                returnFocus: Z,
                focusOptions: D
            }), r.createElement(M, d({
                ref: z
            }, K, {
                className: C,
                onBlur: q,
                onFocus: G
            }), m), V && r.createElement("div", {
                "data-focus-guard": !0,
                tabIndex: h ? -1 : 0,
                style: p
            }))
        }
        ));
        S.propTypes = {},
        S.defaultProps = {
            children: void 0,
            disabled: !1,
            returnFocus: !1,
            focusOptions: void 0,
            noFocusGuards: !1,
            autoFocus: !0,
            persistentFocus: !1,
            crossFrame: !0,
            hasPositiveIndices: void 0,
            allowTextSelection: void 0,
            group: void 0,
            className: void 0,
            whiteList: void 0,
            shards: void 0,
            as: "div",
            lockProps: {},
            onActivation: void 0,
            onDeactivation: void 0
        };
        var T = S;
        function P(e, n) {
            return P = Object.setPrototypeOf || function(e, n) {
                return e.__proto__ = n,
                e
            }
            ,
            P(e, n)
        }
        var R = function(e, n) {
            return function(t) {
                var o, a = [];
                function u() {
                    o = e(a.map((function(e) {
                        return e.props
                    }
                    ))),
                    n(o)
                }
                var i, c, l, d = function(e) {
                    var n, i;
                    function c() {
                        return e.apply(this, arguments) || this
                    }
                    i = e,
                    (n = c).prototype = Object.create(i.prototype),
                    n.prototype.constructor = n,
                    P(n, i),
                    c.peek = function() {
                        return o
                    }
                    ;
                    var l = c.prototype;
                    return l.componentDidMount = function() {
                        a.push(this),
                        u()
                    }
                    ,
                    l.componentDidUpdate = function() {
                        u()
                    }
                    ,
                    l.componentWillUnmount = function() {
                        var e = a.indexOf(this);
                        a.splice(e, 1),
                        u()
                    }
                    ,
                    l.render = function() {
                        return r.createElement(t, this.props)
                    }
                    ,
                    c
                }(r.PureComponent);
                return i = d,
                c = "displayName",
                l = "SideEffect(" + function(e) {
                    return e.displayName || e.name || "Component"
                }(t) + ")",
                c in i ? Object.defineProperty(i, c, {
                    value: l,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[c] = l,
                d
            }
        }
          , I = function(e) {
            return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode
        }
          , M = function(e) {
            return e === document || e && e.nodeType === Node.DOCUMENT_NODE
        }
          , F = function(e, n) {
            return !e || M(e) || !function(e) {
                if (e.nodeType !== Node.ELEMENT_NODE)
                    return !1;
                var n = window.getComputedStyle(e, null);
                return !(!n || !n.getPropertyValue) && ("none" === n.getPropertyValue("display") || "hidden" === n.getPropertyValue("visibility"))
            }(e) && n(I(e))
        }
          , A = function(e, n) {
            var t = e.get(n);
            if (void 0 !== t)
                return t;
            var r = F(n, A.bind(void 0, e));
            return e.set(n, r),
            r
        }
          , L = function(e, n) {
            var t = e.get(n);
            if (void 0 !== t)
                return t;
            var r = function(e, n) {
                return !(e && !M(e)) || !!j(e) && n(I(e))
            }(n, L.bind(void 0, e));
            return e.set(n, r),
            r
        }
          , _ = function(e) {
            return e.dataset
        }
          , D = function(e) {
            return "INPUT" === e.tagName
        }
          , B = function(e) {
            return D(e) && "radio" === e.type
        }
          , j = function(e) {
            var n = e.getAttribute("data-no-autofocus");
            return ![!0, "true", ""].includes(n)
        }
          , W = function(e) {
            var n;
            return Boolean(e && (null === (n = _(e)) || void 0 === n ? void 0 : n.focusGuard))
        }
          , U = function(e) {
            return !W(e)
        }
          , Y = function(e) {
            return Boolean(e)
        }
          , Z = function(e, n) {
            return B(e) && e.name ? function(e, n) {
                return n.filter(B).filter((function(n) {
                    return n.name === e.name
                }
                )).filter((function(e) {
                    return e.checked
                }
                ))[0] || e
            }(e, n) : e
        }
          , G = function(e) {
            return e[0] && e.length > 1 ? Z(e[0], e) : e[0]
        }
          , q = function(e, n) {
            return e.length > 1 ? e.indexOf(Z(e[n], e)) : n
        }
          , X = "NEW_FOCUS"
          , K = function(e, n, t, r) {
            var o = e.length
              , a = e[0]
              , u = e[o - 1]
              , i = W(t);
            if (!(t && e.indexOf(t) >= 0)) {
                var c = void 0 !== t ? n.indexOf(t) : -1
                  , l = r ? n.indexOf(r) : c
                  , d = r ? e.indexOf(r) : -1
                  , f = c - l
                  , s = n.indexOf(a)
                  , v = n.indexOf(u)
                  , p = function(e) {
                    var n = new Set;
                    return e.forEach((function(t) {
                        return n.add(Z(t, e))
                    }
                    )),
                    e.filter((function(e) {
                        return n.has(e)
                    }
                    ))
                }(n)
                  , m = (void 0 !== t ? p.indexOf(t) : -1) - (r ? p.indexOf(r) : c)
                  , h = q(e, 0)
                  , g = q(e, o - 1);
                return -1 === c || -1 === d ? X : !f && d >= 0 ? d : c <= s && i && Math.abs(f) > 1 ? g : c >= v && i && Math.abs(f) > 1 ? h : f && Math.abs(m) > 1 ? d : c <= s ? g : c > v ? h : f ? Math.abs(f) > 1 ? d : (o + d + f) % o : void 0
            }
        }
          , H = function(e) {
            for (var n = Array(e.length), t = 0; t < e.length; ++t)
                n[t] = e[t];
            return n
        }
          , V = function(e) {
            return Array.isArray(e) ? e : [e]
        }
          , z = function(e, n) {
            var t = e.tabIndex - n.tabIndex
              , r = e.index - n.index;
            if (t) {
                if (!e.tabIndex)
                    return 1;
                if (!n.tabIndex)
                    return -1
            }
            return t || r
        }
          , J = function(e, n, t) {
            return H(e).map((function(e, n) {
                return {
                    node: e,
                    index: n,
                    tabIndex: t && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex
                }
            }
            )).filter((function(e) {
                return !n || e.tabIndex >= 0
            }
            )).sort(z)
        }
          , Q = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(",")
          , $ = "".concat(Q, ", [data-focus-guard]")
          , ee = function(e, n) {
            var t;
            return H((null === (t = e.shadowRoot) || void 0 === t ? void 0 : t.children) || e.children).reduce((function(e, t) {
                return e.concat(t.matches(n ? $ : Q) ? [t] : [], ee(t))
            }
            ), [])
        }
          , ne = function(e, n) {
            return e.reduce((function(e, t) {
                return e.concat(ee(t, n), t.parentNode ? H(t.parentNode.querySelectorAll(Q)).filter((function(e) {
                    return e === t
                }
                )) : [])
            }
            ), [])
        }
          , te = function(e, n) {
            return H(e).filter((function(e) {
                return A(n, e)
            }
            )).filter((function(e) {
                return function(e) {
                    return !((D(e) || function(e) {
                        return "BUTTON" === e.tagName
                    }(e)) && ("hidden" === e.type || e.disabled))
                }(e)
            }
            ))
        }
          , re = function(e, n) {
            return void 0 === n && (n = new Map),
            H(e).filter((function(e) {
                return L(n, e)
            }
            ))
        }
          , oe = function(e, n, t) {
            return J(te(ne(e, t), n), !0, t)
        }
          , ae = function(e, n) {
            return J(te(ne(e), n), !1)
        }
          , ue = function(e, n) {
            return te(function(e) {
                var n = e.querySelectorAll("[".concat("data-autofocus-inside", "]"));
                return H(n).map((function(e) {
                    return ne([e])
                }
                )).reduce((function(e, n) {
                    return e.concat(n)
                }
                ), [])
            }(e), n)
        }
          , ie = function(e, n) {
            return (e.shadowRoot ? ie(e.shadowRoot, n) : Object.getPrototypeOf(e).contains.call(e, n)) || H(e.children).some((function(e) {
                return ie(e, n)
            }
            ))
        }
          , ce = function(e) {
            return e.parentNode ? ce(e.parentNode) : e
        }
          , le = function(e) {
            return V(e).filter(Boolean).reduce((function(e, n) {
                var t = n.getAttribute(f);
                return e.push.apply(e, t ? function(e) {
                    for (var n = new Set, t = e.length, r = 0; r < t; r += 1)
                        for (var o = r + 1; o < t; o += 1) {
                            var a = e[r].compareDocumentPosition(e[o]);
                            (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && n.add(o),
                            (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && n.add(r)
                        }
                    return e.filter((function(e, t) {
                        return !n.has(t)
                    }
                    ))
                }(H(ce(n).querySelectorAll("[".concat(f, '="').concat(t, '"]:not([').concat(s, '="disabled"])')))) : [n]),
                e
            }
            ), [])
        }
          , de = function(e) {
            return e.activeElement ? e.activeElement.shadowRoot ? de(e.activeElement.shadowRoot) : e.activeElement : void 0
        }
          , fe = function() {
            return document.activeElement ? document.activeElement.shadowRoot ? de(document.activeElement.shadowRoot) : document.activeElement : void 0
        }
          , se = function(e, n) {
            return void 0 === n && (n = []),
            n.push(e),
            e.parentNode && se(e.parentNode.host || e.parentNode, n),
            n
        }
          , ve = function(e, n) {
            for (var t = se(e), r = se(n), o = 0; o < t.length; o += 1) {
                var a = t[o];
                if (r.indexOf(a) >= 0)
                    return a
            }
            return !1
        }
          , pe = function(e, n, t) {
            var r = V(e)
              , o = V(n)
              , a = r[0]
              , u = !1;
            return o.filter(Boolean).forEach((function(e) {
                u = ve(u || e, e) || u,
                t.filter(Boolean).forEach((function(e) {
                    var n = ve(a, e);
                    n && (u = !u || ie(n, u) ? n : ve(n, u))
                }
                ))
            }
            )),
            u
        }
          , me = function(e, n) {
            var t = document && fe()
              , r = le(e).filter(U)
              , o = pe(t || e, e, r)
              , a = new Map
              , u = ae(r, a)
              , i = oe(r, a).filter((function(e) {
                var n = e.node;
                return U(n)
            }
            ));
            if (i[0] || (i = u)[0]) {
                var c, l = ae([o], a).map((function(e) {
                    return e.node
                }
                )), d = function(e, n) {
                    var t = new Map;
                    return n.forEach((function(e) {
                        return t.set(e.node, e)
                    }
                    )),
                    e.map((function(e) {
                        return t.get(e)
                    }
                    )).filter(Y)
                }(l, i), f = d.map((function(e) {
                    return e.node
                }
                )), s = K(f, l, t, n);
                if (s === X) {
                    var v = re(u.map((function(e) {
                        return e.node
                    }
                    ))).filter((c = function(e, n) {
                        return e.reduce((function(e, t) {
                            return e.concat(ue(t, n))
                        }
                        ), [])
                    }(r, a),
                    function(e) {
                        var n;
                        return e.autofocus || !!(null === (n = _(e)) || void 0 === n ? void 0 : n.autofocus) || c.indexOf(e) >= 0
                    }
                    ));
                    return {
                        node: v && v.length ? G(v) : G(re(f))
                    }
                }
                return void 0 === s ? s : d[s]
            }
        }
          , he = 0
          , ge = !1
          , ye = function(e, n, t) {
            void 0 === t && (t = {});
            var r, o, a = me(e, n);
            if (!ge && a) {
                if (he > 2)
                    return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),
                    ge = !0,
                    void setTimeout((function() {
                        ge = !1
                    }
                    ), 1);
                he++,
                r = a.node,
                o = t.focusOptions,
                "focus"in r && r.focus(o),
                "contentWindow"in r && r.contentWindow && r.contentWindow.focus(),
                he--
            }
        }
          , be = function(e) {
            return Boolean(H(e.querySelectorAll("iframe")).some((function(e) {
                return e === document.activeElement
            }
            )))
        }
          , we = function(e) {
            var n = document && fe();
            return !(!n || n.dataset && n.dataset.focusGuard) && le(e).some((function(e) {
                return ie(e, n) || be(e)
            }
            ))
        }
          , Ee = function(e) {
            var n = le(e).filter(U)
              , t = pe(e, e, n)
              , r = new Map
              , o = oe([t], r, !0)
              , a = oe(n, r).filter((function(e) {
                var n = e.node;
                return U(n)
            }
            )).map((function(e) {
                return e.node
            }
            ));
            return o.map((function(e) {
                var n = e.node;
                return {
                    node: n,
                    index: e.index,
                    lockItem: a.indexOf(n) >= 0,
                    guard: W(n)
                }
            }
            ))
        };
        function Oe(e) {
            var n = window.setImmediate;
            "undefined" !== typeof n ? n(e) : setTimeout(e, 1)
        }
        var ke = function() {
            return document && document.activeElement === document.body || function() {
                var e = document && fe();
                return !!e && H(document.querySelectorAll("[".concat("data-no-focus-lock", "]"))).some((function(n) {
                    return ie(n, e)
                }
                ))
            }()
        }
          , Ce = null
          , xe = null
          , Ne = null
          , Se = !1
          , Te = function() {
            return !0
        };
        function Pe(e, n, t, r) {
            var o = null
              , a = e;
            do {
                var u = r[a];
                if (u.guard)
                    u.node.dataset.focusAutoGuard && (o = u);
                else {
                    if (!u.lockItem)
                        break;
                    if (a !== e)
                        return;
                    o = null
                }
            } while ((a += t) !== n);
            o && (o.node.tabIndex = 0)
        }
        var Re = function(e) {
            return e && "current"in e ? e.current : e
        }
          , Ie = function e(n, t, r) {
            return t && (t.host === n && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && e(n, t.parentNode, r))
        }
          , Me = function() {
            var e, n = !1;
            if (Ce) {
                var t = Ce
                  , r = t.observed
                  , o = t.persistentFocus
                  , a = t.autoFocus
                  , u = t.shards
                  , i = t.crossFrame
                  , c = t.focusOptions
                  , l = r || Ne && Ne.portaledElement
                  , d = document && document.activeElement;
                if (l) {
                    var f = [l].concat(u.map(Re).filter(Boolean));
                    if (d && !function(e) {
                        return (Ce.whiteList || Te)(e)
                    }(d) || (o || (i ? Boolean(Se) : "meanwhile" === Se) || !ke() || !xe && a) && (l && !(we(f) || d && function(e, n) {
                        return n.some((function(n) {
                            return Ie(e, n, n)
                        }
                        ))
                    }(d, f) || (e = d,
                    Ne && Ne.portaledElement === e)) && (document && !xe && d && !a ? (d.blur && d.blur(),
                    document.body.focus()) : (n = ye(f, xe, {
                        focusOptions: c
                    }),
                    Ne = {})),
                    Se = !1,
                    xe = document && document.activeElement),
                    document) {
                        var s = document && document.activeElement
                          , v = Ee(f)
                          , p = v.map((function(e) {
                            return e.node
                        }
                        )).indexOf(s);
                        p > -1 && (v.filter((function(e) {
                            var n = e.guard
                              , t = e.node;
                            return n && t.dataset.focusAutoGuard
                        }
                        )).forEach((function(e) {
                            return e.node.removeAttribute("tabIndex")
                        }
                        )),
                        Pe(p, v.length, 1, v),
                        Pe(p, -1, -1, v))
                    }
                }
            }
            return n
        }
          , Fe = function(e) {
            Me() && e && (e.stopPropagation(),
            e.preventDefault())
        }
          , Ae = function() {
            return Oe(Me)
        }
          , Le = function(e) {
            var n = e.target
              , t = e.currentTarget;
            t.contains(n) || (Ne = {
                observerNode: t,
                portaledElement: n
            })
        }
          , _e = function() {
            Se = "just",
            setTimeout((function() {
                Se = "meanwhile"
            }
            ), 0)
        };
        O.assignSyncMedium(Le),
        k.assignMedium(Ae),
        C.assignMedium((function(e) {
            return e({
                moveFocusInside: ye,
                focusInside: we
            })
        }
        ));
        var De = R((function(e) {
            return e.filter((function(e) {
                return !e.disabled
            }
            ))
        }
        ), (function(e) {
            var n = e.slice(-1)[0];
            n && !Ce && (document.addEventListener("focusin", Fe),
            document.addEventListener("focusout", Ae),
            window.addEventListener("blur", _e));
            var t = Ce
              , r = t && n && n.id === t.id;
            Ce = n,
            t && !r && (t.onDeactivation(),
            e.filter((function(e) {
                return e.id === t.id
            }
            )).length || t.returnFocus(!n)),
            n ? (xe = null,
            r && t.observed === n.observed || n.onActivation(),
            Me(),
            Oe(Me)) : (document.removeEventListener("focusin", Fe),
            document.removeEventListener("focusout", Ae),
            window.removeEventListener("blur", _e),
            xe = null)
        }
        ))((function() {
            return null
        }
        ))
          , Be = r.forwardRef((function(e, n) {
            return r.createElement(T, d({
                sideCar: De,
                ref: n
            }, e))
        }
        ))
          , je = T.propTypes || {};
        je.sideCar,
        function(e, n) {
            if (null == e)
                return {};
            var t, r, o = {}, a = Object.keys(e);
            for (r = 0; r < a.length; r++)
                t = a[r],
                n.indexOf(t) >= 0 || (o[t] = e[t])
        }(je, ["sideCar"]);
        Be.propTypes = {};
        var We = Be
          , Ue = "right-scroll-bar-position"
          , Ye = "width-before-scroll-bar"
          , Ze = E()
          , Ge = function() {}
          , qe = r.forwardRef((function(e, n) {
            var t = r.useRef(null)
              , o = r.useState({
                onScrollCapture: Ge,
                onWheelCapture: Ge,
                onTouchMoveCapture: Ge
            })
              , a = o[0]
              , u = o[1]
              , i = e.forwardProps
              , c = e.children
              , l = e.className
              , d = e.removeScrollBar
              , f = e.enabled
              , s = e.shards
              , p = e.sideCar
              , m = e.noIsolation
              , y = e.inert
              , b = e.allowPinchZoom
              , w = e.as
              , E = void 0 === w ? "div" : w
              , O = g(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"])
              , k = p
              , C = v([t, n])
              , x = h(h({}, O), a);
            return r.createElement(r.Fragment, null, f && r.createElement(k, {
                sideCar: Ze,
                removeScrollBar: d,
                shards: s,
                noIsolation: m,
                inert: y,
                setCallbacks: u,
                allowPinchZoom: !!b,
                lockRef: t
            }), i ? r.cloneElement(r.Children.only(c), h(h({}, x), {
                ref: C
            })) : r.createElement(E, h({}, x, {
                className: l,
                ref: C
            }), c))
        }
        ));
        qe.defaultProps = {
            enabled: !0,
            removeScrollBar: !0,
            inert: !1
        },
        qe.classNames = {
            fullWidth: Ye,
            zeroRight: Ue
        };
        var Xe, Ke = function(e) {
            var n = e.sideCar
              , t = g(e, ["sideCar"]);
            if (!n)
                throw new Error("Sidecar: please provide `sideCar` property to import the right car");
            var o = n.read();
            if (!o)
                throw new Error("Sidecar medium not found");
            return r.createElement(o, h({}, t))
        };
        Ke.isSideCarExport = !0;
        function He() {
            if (!document)
                return null;
            var e = document.createElement("style");
            e.type = "text/css";
            var n = Xe || t.nc;
            return n && e.setAttribute("nonce", n),
            e
        }
        var Ve = function() {
            var e = 0
              , n = null;
            return {
                add: function(t) {
                    var r, o;
                    0 == e && (n = He()) && (o = t,
                    (r = n).styleSheet ? r.styleSheet.cssText = o : r.appendChild(document.createTextNode(o)),
                    function(e) {
                        (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
                    }(n)),
                    e++
                },
                remove: function() {
                    !--e && n && (n.parentNode && n.parentNode.removeChild(n),
                    n = null)
                }
            }
        }
          , ze = function() {
            var e = function() {
                var e = Ve();
                return function(n) {
                    r.useEffect((function() {
                        return e.add(n),
                        function() {
                            e.remove()
                        }
                    }
                    ), [n])
                }
            }();
            return function(n) {
                var t = n.styles;
                return e(t),
                null
            }
        }
          , Je = {
            left: 0,
            top: 0,
            right: 0,
            gap: 0
        }
          , Qe = function(e) {
            return parseInt(e || "", 10) || 0
        }
          , $e = function(e) {
            if (void 0 === e && (e = "margin"),
            "undefined" === typeof window)
                return Je;
            var n = function(e) {
                var n = window.getComputedStyle(document.body)
                  , t = n["padding" === e ? "paddingLeft" : "marginLeft"]
                  , r = n["padding" === e ? "paddingTop" : "marginTop"]
                  , o = n["padding" === e ? "paddingRight" : "marginRight"];
                return [Qe(t), Qe(r), Qe(o)]
            }(e)
              , t = document.documentElement.clientWidth
              , r = window.innerWidth;
            return {
                left: n[0],
                top: n[1],
                right: n[2],
                gap: Math.max(0, r - t + n[2] - n[0])
            }
        }
          , en = ze()
          , nn = function(e, n, t, r) {
            var o = e.left
              , a = e.top
              , u = e.right
              , i = e.gap;
            return void 0 === t && (t = "margin"),
            "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(i, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(i, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(Ue, " {\n    right: ").concat(i, "px ").concat(r, ";\n  }\n  \n  .").concat(Ye, " {\n    margin-right: ").concat(i, "px ").concat(r, ";\n  }\n  \n  .").concat(Ue, " .").concat(Ue, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(Ye, " .").concat(Ye, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(i, "px;\n  }\n")
        }
          , tn = function(e) {
            var n = r.useState($e(e.gapMode))
              , t = n[0]
              , o = n[1];
            r.useEffect((function() {
                o($e(e.gapMode))
            }
            ), [e.gapMode]);
            var a = e.noRelative
              , u = e.noImportant
              , i = e.gapMode
              , c = void 0 === i ? "margin" : i;
            return r.createElement(en, {
                styles: nn(t, !a, c, u ? "" : "!important")
            })
        }
          , rn = !1;
        if ("undefined" !== typeof window)
            try {
                var on = Object.defineProperty({}, "passive", {
                    get: function() {
                        return rn = !0,
                        !0
                    }
                });
                window.addEventListener("test", on, on),
                window.removeEventListener("test", on, on)
            } catch (Rn) {
                rn = !1
            }
        var an = !!rn && {
            passive: !1
        }
          , un = function(e, n) {
            var t = n;
            do {
                if ("undefined" !== typeof ShadowRoot && t instanceof ShadowRoot && (t = t.host),
                cn(e, t)) {
                    var r = ln(e, t);
                    if (r[1] > r[2])
                        return !0
                }
                t = t.parentNode
            } while (t && t !== document.body);
            return !1
        }
          , cn = function(e, n) {
            return "v" === e ? function(e) {
                var n = window.getComputedStyle(e);
                return "hidden" !== n.overflowY && !(n.overflowY === n.overflowX && "visible" === n.overflowY)
            }(n) : function(e) {
                var n = window.getComputedStyle(e);
                return "hidden" !== n.overflowX && !(n.overflowY === n.overflowX && "visible" === n.overflowX)
            }(n)
        }
          , ln = function(e, n) {
            return "v" === e ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight] : function(e) {
                return [e.scrollLeft, e.scrollWidth, e.clientWidth]
            }(n);
            var t
        }
          , dn = function(e) {
            return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        }
          , fn = function(e) {
            return [e.deltaX, e.deltaY]
        }
          , sn = function(e) {
            return e && "current"in e ? e.current : e
        }
          , vn = function(e) {
            return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        }
          , pn = 0
          , mn = [];
        var hn, gn = (hn = function(e) {
            var n = r.useRef([])
              , t = r.useRef([0, 0])
              , o = r.useRef()
              , a = r.useState(pn++)[0]
              , u = r.useState((function() {
                return ze()
            }
            ))[0]
              , i = r.useRef(e);
            r.useEffect((function() {
                i.current = e
            }
            ), [e]),
            r.useEffect((function() {
                if (e.inert) {
                    document.body.classList.add("block-interactivity-".concat(a));
                    var n = function(e, n, t) {
                        if (t || 2 === arguments.length)
                            for (var r, o = 0, a = n.length; o < a; o++)
                                !r && o in n || (r || (r = Array.prototype.slice.call(n, 0, o)),
                                r[o] = n[o]);
                        return e.concat(r || Array.prototype.slice.call(n))
                    }([e.lockRef.current], (e.shards || []).map(sn), !0).filter(Boolean);
                    return n.forEach((function(e) {
                        return e.classList.add("allow-interactivity-".concat(a))
                    }
                    )),
                    function() {
                        document.body.classList.remove("block-interactivity-".concat(a)),
                        n.forEach((function(e) {
                            return e.classList.remove("allow-interactivity-".concat(a))
                        }
                        ))
                    }
                }
            }
            ), [e.inert, e.lockRef.current, e.shards]);
            var c = r.useCallback((function(e, n) {
                if ("touches"in e && 2 === e.touches.length)
                    return !i.current.allowPinchZoom;
                var r, a = dn(e), u = t.current, c = "deltaX"in e ? e.deltaX : u[0] - a[0], l = "deltaY"in e ? e.deltaY : u[1] - a[1], d = e.target, f = Math.abs(c) > Math.abs(l) ? "h" : "v";
                if ("touches"in e && "h" === f && "range" === d.type)
                    return !1;
                var s = un(f, d);
                if (!s)
                    return !0;
                if (s ? r = f : (r = "v" === f ? "h" : "v",
                s = un(f, d)),
                !s)
                    return !1;
                if (!o.current && "changedTouches"in e && (c || l) && (o.current = r),
                !r)
                    return !0;
                var v = o.current || r;
                return function(e, n, t, r, o) {
                    var a = function(e, n) {
                        return "h" === e && "rtl" === n ? -1 : 1
                    }(e, window.getComputedStyle(n).direction)
                      , u = a * r
                      , i = t.target
                      , c = n.contains(i)
                      , l = !1
                      , d = u > 0
                      , f = 0
                      , s = 0;
                    do {
                        var v = ln(e, i)
                          , p = v[0]
                          , m = v[1] - v[2] - a * p;
                        (p || m) && cn(e, i) && (f += m,
                        s += p),
                        i = i.parentNode
                    } while (!c && i !== document.body || c && (n.contains(i) || n === i));
                    return (d && (o && 0 === f || !o && u > f) || !d && (o && 0 === s || !o && -u > s)) && (l = !0),
                    l
                }(v, n, e, "h" === v ? c : l, !0)
            }
            ), [])
              , l = r.useCallback((function(e) {
                var t = e;
                if (mn.length && mn[mn.length - 1] === u) {
                    var r = "deltaY"in t ? fn(t) : dn(t)
                      , o = n.current.filter((function(e) {
                        return e.name === t.type && e.target === t.target && (n = e.delta,
                        o = r,
                        n[0] === o[0] && n[1] === o[1]);
                        var n, o
                    }
                    ))[0];
                    if (o && o.should)
                        t.preventDefault();
                    else if (!o) {
                        var a = (i.current.shards || []).map(sn).filter(Boolean).filter((function(e) {
                            return e.contains(t.target)
                        }
                        ));
                        (a.length > 0 ? c(t, a[0]) : !i.current.noIsolation) && t.preventDefault()
                    }
                }
            }
            ), [])
              , d = r.useCallback((function(e, t, r, o) {
                var a = {
                    name: e,
                    delta: t,
                    target: r,
                    should: o
                };
                n.current.push(a),
                setTimeout((function() {
                    n.current = n.current.filter((function(e) {
                        return e !== a
                    }
                    ))
                }
                ), 1)
            }
            ), [])
              , f = r.useCallback((function(e) {
                t.current = dn(e),
                o.current = void 0
            }
            ), [])
              , s = r.useCallback((function(n) {
                d(n.type, fn(n), n.target, c(n, e.lockRef.current))
            }
            ), [])
              , v = r.useCallback((function(n) {
                d(n.type, dn(n), n.target, c(n, e.lockRef.current))
            }
            ), []);
            r.useEffect((function() {
                return mn.push(u),
                e.setCallbacks({
                    onScrollCapture: s,
                    onWheelCapture: s,
                    onTouchMoveCapture: v
                }),
                document.addEventListener("wheel", l, an),
                document.addEventListener("touchmove", l, an),
                document.addEventListener("touchstart", f, an),
                function() {
                    mn = mn.filter((function(e) {
                        return e !== u
                    }
                    )),
                    document.removeEventListener("wheel", l, an),
                    document.removeEventListener("touchmove", l, an),
                    document.removeEventListener("touchstart", f, an)
                }
            }
            ), []);
            var p = e.removeScrollBar
              , m = e.inert;
            return r.createElement(r.Fragment, null, m ? r.createElement(u, {
                styles: vn(a)
            }) : null, p ? r.createElement(tn, {
                gapMode: "margin"
            }) : null)
        }
        ,
        Ze.useMedium(hn),
        Ke), yn = r.forwardRef((function(e, n) {
            return r.createElement(qe, h({}, e, {
                ref: n,
                sideCar: gn
            }))
        }
        ));
        yn.classNames = qe.classNames;
        var bn = yn
          , wn = t(50862)
          , En = t.n(wn);
        function On() {
            return On = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            On.apply(this, arguments)
        }
        function kn(e, n) {
            if (null == e)
                return {};
            var t, r, o = {}, a = Object.keys(e);
            for (r = 0; r < a.length; r++)
                t = a[r],
                n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o
        }
        var Cn = ["as", "isOpen"]
          , xn = ["allowPinchZoom", "as", "dangerouslyBypassFocusLock", "dangerouslyBypassScrollLock", "initialFocusRef", "onClick", "onDismiss", "onKeyDown", "onMouseDown", "unstable_lockFocusAcrossFrames"]
          , Nn = ["as", "onClick", "onKeyDown"]
          , Sn = (En().bool,
        En().bool,
        En().bool,
        En().func,
        (0,
        r.forwardRef)((function(e, n) {
            var t = e.as
              , a = void 0 === t ? "div" : t
              , u = e.isOpen
              , c = void 0 === u || u
              , l = kn(e, Cn);
            return (0,
            i.kG)("dialog"),
            (0,
            r.useEffect)((function() {
                c ? window.__REACH_DISABLE_TOOLTIPS = !0 : window.requestAnimationFrame((function() {
                    window.__REACH_DISABLE_TOOLTIPS = !1
                }
                ))
            }
            ), [c]),
            c ? (0,
            r.createElement)(o.h, {
                "data-reach-dialog-wrapper": ""
            }, (0,
            r.createElement)(Tn, On({
                ref: n,
                as: a
            }, l))) : null
        }
        )));
        var Tn = (0,
        r.forwardRef)((function(e, n) {
            var t = e.allowPinchZoom
              , o = e.as
              , i = void 0 === o ? "div" : o
              , d = e.dangerouslyBypassFocusLock
              , f = void 0 !== d && d
              , s = e.dangerouslyBypassScrollLock
              , v = void 0 !== s && s
              , p = e.initialFocusRef
              , m = e.onClick
              , h = e.onDismiss
              , g = void 0 === h ? u.Z : h
              , y = e.onKeyDown
              , b = e.onMouseDown
              , w = e.unstable_lockFocusAcrossFrames
              , E = kn(e, xn);
            var O = (0,
            r.useRef)(null)
              , k = (0,
            r.useRef)(null)
              , C = (0,
            c.e)(k, n)
              , x = (0,
            r.useCallback)((function() {
                p && p.current && p.current.focus()
            }
            ), [p]);
            return (0,
            r.useEffect)((function() {
                return k.current ? function(e) {
                    var n = []
                      , t = []
                      , r = (0,
                    a.r)(e);
                    if (!e)
                        return u.Z;
                    return Array.prototype.forEach.call(r.querySelectorAll("body > *"), (function(r) {
                        var o, a;
                        if (r !== (null == (o = e.parentNode) || null == (a = o.parentNode) ? void 0 : a.parentNode)) {
                            var u = r.getAttribute("aria-hidden");
                            null !== u && "false" !== u || (n.push(u),
                            t.push(r),
                            r.setAttribute("aria-hidden", "true"))
                        }
                    }
                    )),
                    function() {
                        t.forEach((function(e, t) {
                            var r = n[t];
                            null === r ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r)
                        }
                        ))
                    }
                }(k.current) : void 0
            }
            ), []),
            (0,
            r.createElement)(We, {
                autoFocus: !0,
                returnFocus: !0,
                onActivation: x,
                disabled: f,
                crossFrame: null == w || w
            }, (0,
            r.createElement)(bn, {
                allowPinchZoom: t,
                enabled: !v
            }, (0,
            r.createElement)(i, On({}, E, {
                ref: C,
                "data-reach-dialog-overlay": "",
                onClick: (0,
                l.M)(m, (function(e) {
                    O.current === e.target && (e.stopPropagation(),
                    g(e))
                }
                )),
                onKeyDown: (0,
                l.M)(y, (function(e) {
                    "Escape" === e.key && (e.stopPropagation(),
                    g(e))
                }
                )),
                onMouseDown: (0,
                l.M)(b, (function(e) {
                    O.current = e.target
                }
                ))
            }))))
        }
        ));
        var Pn = (0,
        r.forwardRef)((function(e, n) {
            var t = e.as
              , o = void 0 === t ? "div" : t
              , a = e.onClick;
            e.onKeyDown;
            var u = kn(e, Nn);
            return (0,
            r.createElement)(o, On({
                "aria-modal": "true",
                role: "dialog",
                tabIndex: -1
            }, u, {
                ref: n,
                "data-reach-dialog-content": "",
                onClick: (0,
                l.M)(a, (function(e) {
                    e.stopPropagation()
                }
                ))
            }))
        }
        ))
    },
    63171: function(e, n, t) {
        "use strict";
        var r = t(56454);
        function o() {}
        function a() {}
        a.resetWarningCache = o,
        e.exports = function() {
            function e(e, n, t, o, a, u) {
                if (u !== r) {
                    var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw i.name = "Invariant Violation",
                    i
                }
            }
            function n() {
                return e
            }
            e.isRequired = e;
            var t = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: n,
                element: e,
                elementType: e,
                instanceOf: n,
                node: e,
                objectOf: n,
                oneOf: n,
                oneOfType: n,
                shape: n,
                exact: n,
                checkPropTypes: a,
                resetWarningCache: o
            };
            return t.PropTypes = t,
            t
        }
    },
    50862: function(e, n, t) {
        e.exports = t(63171)()
    },
    56454: function(e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }
}]);

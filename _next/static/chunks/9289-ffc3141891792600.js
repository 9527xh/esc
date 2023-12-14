"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9289], {
    59289: function(e, n, t) {
        t.d(n, {
            Hk: function() {
                return E
            },
            KF: function() {
                return D
            },
            Qd: function() {
                return k
            },
            UQ: function() {
                return I
            }
        });
        var r = t(56168)
          , a = t(12901)
          , o = t(49226)
          , d = t(44947)
          , i = t(87185)
          , l = t(21301)
          , c = t(53040)
          , u = t(5491)
          , s = t(63230)
          , f = t(42817);
        function v() {
            return v = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            v.apply(this, arguments)
        }
        function b(e, n) {
            if (null == e)
                return {};
            var t, r, a = {}, o = Object.keys(e);
            for (r = 0; r < o.length; r++)
                t = o[r],
                n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a
        }
        var p, h = ["as", "children", "defaultIndex", "index", "onChange", "readOnly", "collapsible", "multiple"], x = ["as", "children", "disabled", "index"], y = ["as", "children", "onClick", "onKeyDown", "onMouseDown", "onPointerDown", "tabIndex"], m = ["as", "children"], C = (0,
        s.nm)("AccordionDescendantContext"), O = (0,
        a.o)("AccordionContext", {}), w = (0,
        a.o)("AccordionItemContext", {});
        !function(e) {
            e.Open = "OPEN",
            e.Collapsed = "COLLAPSED"
        }(p || (p = {}));
        var I = (0,
        r.forwardRef)((function(e, n) {
            var t = e.as
              , a = void 0 === t ? "div" : t
              , o = e.children
              , l = e.defaultIndex
              , c = e.index
              , u = e.onChange
              , p = e.readOnly
              , x = void 0 !== p && p
              , y = e.collapsible
              , m = void 0 !== y && y
              , w = e.multiple
              , I = void 0 !== w && w
              , k = b(e, h)
              , D = "undefined" !== typeof c
              , E = (0,
            r.useRef)(D).current
              , P = (0,
            s.f5)()
              , A = P[0]
              , R = P[1]
              , g = (0,
            f.M)(k.id)
              , M = (0,
            r.useState)((function() {
                switch (!0) {
                case E:
                    return c;
                case null != l:
                    return I ? Array.isArray(l) ? l : [l] : Array.isArray(l) ? null != (e = l[0]) ? e : 0 : l;
                    var e;
                case m:
                    return I ? [] : -1;
                default:
                    return I ? [0] : 0
                }
            }
            ))
              , S = M[0]
              , _ = M[1];
            var K = (0,
            r.useCallback)((function(e) {
                u && u(e),
                E || _((function(n) {
                    return e = e,
                    I ? (n = n).includes(e) ? n.length > 1 || m ? n.filter((function(n) {
                        return n !== e
                    }
                    )) : n : [].concat(n, [e]).sort() : (n = n) === e && m ? -1 : e
                }
                ))
            }
            ), [m, E, I, u])
              , j = (0,
            r.useMemo)((function() {
                return {
                    accordionId: g,
                    openPanels: E ? c : S,
                    onSelectPanel: x ? d.Z : K,
                    readOnly: x
                }
            }
            ), [S, c, g, E, K, x]);
            return (0,
            i.kG)("accordion"),
            (0,
            r.createElement)(s.w_, {
                context: C,
                items: A,
                set: R
            }, (0,
            r.createElement)(O.Provider, {
                value: j
            }, (0,
            r.createElement)(a, v({}, k, {
                ref: n,
                "data-reach-accordion": ""
            }), o)))
        }
        ));
        var k = (0,
        r.forwardRef)((function(e, n) {
            var t = e.as
              , a = void 0 === t ? "div" : t
              , d = e.children
              , i = e.disabled
              , l = void 0 !== i && i
              , c = e.index
              , f = b(e, x)
              , h = (0,
            r.useContext)(O)
              , y = h.accordionId
              , m = h.openPanels
              , I = h.readOnly
              , k = (0,
            r.useRef)(null)
              , D = (0,
            u.B)(k, null)
              , E = D[0]
              , A = D[1]
              , R = (0,
            r.useMemo)((function() {
                return {
                    element: E,
                    disabled: l
                }
            }
            ), [l, E])
              , g = (0,
            s.Yf)(R, C, c)
              , M = (0,
            o.q)(y, g)
              , S = (0,
            o.q)("panel", M)
              , _ = (0,
            o.q)("button", M)
              , K = (Array.isArray(m) ? m.includes(g) && p.Open : m === g && p.Open) || p.Collapsed
              , j = {
                buttonId: _,
                buttonRef: k,
                disabled: l,
                handleButtonRefSet: A,
                index: g,
                itemId: M,
                panelId: S,
                state: K
            };
            return (0,
            r.createElement)(w.Provider, {
                value: j
            }, (0,
            r.createElement)(a, v({}, f, {
                ref: n,
                "data-reach-accordion-item": "",
                "data-state": P(K),
                "data-disabled": l ? "" : void 0,
                "data-read-only": I ? "" : void 0
            }), d))
        }
        ));
        var D = (0,
        r.forwardRef)((function(e, n) {
            var t = e.as
              , a = void 0 === t ? "button" : t
              , o = e.children
              , d = e.onClick
              , i = e.onKeyDown;
            e.onMouseDown,
            e.onPointerDown;
            var u = e.tabIndex
              , f = b(e, y)
              , h = (0,
            r.useContext)(O).onSelectPanel
              , x = (0,
            r.useContext)(w)
              , m = x.disabled
              , I = x.buttonId
              , k = x.buttonRef
              , D = x.handleButtonRefSet
              , E = x.index
              , A = x.panelId
              , R = x.state
              , g = (0,
            l.e)(n, D);
            var M = (0,
            s.Dv)(C, {
                currentIndex: E,
                orientation: "vertical",
                key: "element",
                rotate: !0,
                callback: function(e) {
                    null == e || e.focus()
                },
                filter: function(e) {
                    return !e.disabled
                }
            });
            return (0,
            r.createElement)(a, v({
                "aria-controls": A,
                "aria-expanded": R === p.Open,
                tabIndex: m ? -1 : u
            }, f, {
                ref: g,
                "data-reach-accordion-button": "",
                "data-state": P(R),
                disabled: m || void 0,
                id: I,
                onClick: (0,
                c.M)(d, (function(e) {
                    e.preventDefault(),
                    m || (k.current.focus(),
                    h(E))
                }
                )),
                onKeyDown: (0,
                c.M)(i, M)
            }), o)
        }
        ));
        var E = (0,
        r.forwardRef)((function(e, n) {
            var t = e.as
              , a = void 0 === t ? "div" : t
              , o = e.children
              , d = b(e, m)
              , i = (0,
            r.useContext)(w)
              , l = i.disabled
              , c = i.panelId
              , u = i.buttonId
              , s = i.state;
            return (0,
            r.createElement)(a, v({
                hidden: s !== p.Open,
                role: "region",
                "aria-labelledby": u
            }, d, {
                ref: n,
                "data-reach-accordion-panel": "",
                "data-disabled": l || void 0,
                "data-state": P(s),
                id: c
            }), o)
        }
        ));
        function P(e) {
            return e === p.Open ? "open" : "collapsed"
        }
    }
}]);

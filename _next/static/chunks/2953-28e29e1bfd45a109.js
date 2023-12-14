"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2953], {
    92953: function(e, n, t) {
        t.d(n, {
            v2: function() {
                return J
            },
            j2: function() {
                return W
            },
            sd: function() {
                return z
            },
            qy: function() {
                return V
            },
            YI: function() {
                return Z
            }
        });
        var r = t(56168)
          , a = t(39613)
          , o = t(42817)
          , i = t(63230);
        function d(e) {
            var n = (0,
            r.useRef)(null);
            return (0,
            r.useEffect)((function() {
                n.current = e
            }
            ), [e]),
            n.current
        }
        var u = t(41124)
          , c = t(12901)
          , s = t(95419)
          , l = t(49226)
          , f = (t(5491),
        t(21301))
          , p = t(53040);
        function v(e, n) {
            if (null == e)
                return {};
            var t, r, a = {}, o = Object.keys(e);
            for (r = 0; r < o.length; r++)
                t = o[r],
                n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a
        }
        function E() {
            return E = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            E.apply(this, arguments)
        }
        var y = ["onKeyDown", "onMouseDown", "id", "ref"]
          , x = ["id", "onKeyDown", "ref"]
          , w = ["onBlur", "portal", "position", "ref"]
          , g = "CLEAR_SELECTION_INDEX"
          , h = "CLICK_MENU_ITEM"
          , m = "CLOSE_MENU"
          , R = "OPEN_MENU_AT_INDEX"
          , I = "OPEN_MENU_CLEARED"
          , _ = "SEARCH_FOR_ITEM"
          , b = "SELECT_ITEM_AT_INDEX"
          , D = "SET_BUTTON_ID"
          , k = (0,
        i.nm)("DropdownDescendantContext")
          , C = (0,
        c.o)("DropdownContext", {})
          , M = {
            triggerId: null,
            isExpanded: !1,
            typeaheadQuery: "",
            selectionIndex: -1
        }
          , O = function(e) {
            var n = e.id
              , t = e.children
              , a = (0,
            r.useRef)(null)
              , d = (0,
            r.useRef)(null)
              , u = (0,
            r.useRef)(null)
              , c = (0,
            i.f5)()
              , f = c[0]
              , p = c[1]
              , v = (0,
            o.M)(n)
              , y = n || (0,
            l.q)("menu", v)
              , x = (0,
            l.q)("menu-button", y)
              , w = (0,
            r.useReducer)(P, E({}, M, {
                triggerId: x
            }))
              , g = w[0]
              , h = w[1]
              , m = (0,
            r.useRef)(!1)
              , R = (0,
            r.useRef)([])
              , I = (0,
            r.useRef)(!1)
              , _ = (0,
            r.useRef)({
                x: 0,
                y: 0
            })
              , b = {
                dispatch: h,
                dropdownId: y,
                dropdownRef: d,
                mouseDownStartPosRef: _,
                popoverRef: u,
                readyToSelect: I,
                selectCallbacks: R,
                state: g,
                triggerClickedRef: m,
                triggerRef: a
            };
            return (0,
            r.useEffect)((function() {
                g.isExpanded ? (window.__REACH_DISABLE_TOOLTIPS = !0,
                window.requestAnimationFrame((function() {
                    S(d.current)
                }
                ))) : window.__REACH_DISABLE_TOOLTIPS = !1
            }
            ), [g.isExpanded]),
            (0,
            r.createElement)(i.w_, {
                context: k,
                items: f,
                set: p
            }, (0,
            r.createElement)(C.Provider, {
                value: b
            }, (0,
            s.mf)(t) ? t({
                isExpanded: g.isExpanded,
                isOpen: g.isExpanded
            }) : t))
        };
        function T(e) {
            var n = e.onKeyDown
              , t = e.onMouseDown
              , a = e.id
              , o = e.ref
              , i = v(e, y)
              , d = j()
              , u = d.dispatch
              , c = d.dropdownId
              , s = d.mouseDownStartPosRef
              , l = d.triggerClickedRef
              , x = d.triggerRef
              , w = d.state
              , g = w.triggerId
              , h = w.isExpanded
              , _ = (0,
            f.e)(x, o)
              , b = K()
              , k = (0,
            r.useMemo)((function() {
                return b.findIndex((function(e) {
                    return !e.disabled
                }
                ))
            }
            ), [b]);
            return (0,
            r.useEffect)((function() {
                null != a && a !== g && u({
                    type: D,
                    payload: a
                })
            }
            ), [g, u, a]),
            {
                data: {
                    isExpanded: h,
                    controls: c
                },
                props: E({}, i, {
                    ref: _,
                    id: g || void 0,
                    onKeyDown: (0,
                    p.M)(n, (function(e) {
                        switch (e.key) {
                        case "ArrowDown":
                        case "ArrowUp":
                            e.preventDefault(),
                            u({
                                type: R,
                                payload: {
                                    index: k
                                }
                            });
                            break;
                        case "Enter":
                        case " ":
                            u({
                                type: R,
                                payload: {
                                    index: k
                                }
                            })
                        }
                    }
                    )),
                    onMouseDown: (0,
                    p.M)(t, (function(e) {
                        var n;
                        ("which"in (n = e.nativeEvent) ? 3 === n.which : "button"in n && 2 === n.button) || (s.current = {
                            x: e.clientX,
                            y: e.clientY
                        },
                        h || (l.current = !0),
                        u(h ? {
                            type: m
                        } : {
                            type: I
                        }))
                    }
                    )),
                    type: "button"
                })
            }
        }
        function L(e) {
            e.id;
            var n = e.onKeyDown
              , t = e.ref
              , a = v(e, x)
              , o = j()
              , u = o.dispatch
              , c = o.triggerRef
              , l = o.dropdownRef
              , y = o.selectCallbacks
              , w = o.dropdownId
              , g = o.state
              , R = g.isExpanded
              , I = g.triggerId
              , D = g.selectionIndex
              , C = g.typeaheadQuery
              , M = K()
              , O = (0,
            f.e)(l, t);
            (0,
            r.useEffect)((function() {
                var e = function(e, n) {
                    void 0 === n && (n = "");
                    if (!n)
                        return null;
                    var t = e.find((function(e) {
                        var t, r, a;
                        return !e.disabled && (null == (t = e.element) || null == (r = t.dataset) || null == (a = r.valuetext) ? void 0 : a.toLowerCase().startsWith(n))
                    }
                    ));
                    return t ? e.indexOf(t) : null
                }(M, C);
                C && null != e && u({
                    type: b,
                    payload: {
                        index: e,
                        dropdownRef: l
                    }
                });
                var n = window.setTimeout((function() {
                    return C && u({
                        type: _,
                        payload: ""
                    })
                }
                ), 1e3);
                return function() {
                    return window.clearTimeout(n)
                }
            }
            ), [u, M, C, l]);
            var T = d(M.length)
              , L = d(M[D])
              , N = d(D);
            (0,
            r.useEffect)((function() {
                D > M.length - 1 ? u({
                    type: b,
                    payload: {
                        index: M.length - 1,
                        dropdownRef: l
                    }
                }) : T !== M.length && D > -1 && L && N === D && M[D] !== L && u({
                    type: b,
                    payload: {
                        index: M.findIndex((function(e) {
                            return e.key === (null == L ? void 0 : L.key)
                        }
                        )),
                        dropdownRef: l
                    }
                })
            }
            ), [l, u, M, T, L, N, D]);
            var P = (0,
            p.M)((function(e) {
                var n = e.key;
                if (R)
                    switch (n) {
                    case "Enter":
                    case " ":
                        var t = M.find((function(e) {
                            return e.index === D
                        }
                        ));
                        t && !t.disabled && (e.preventDefault(),
                        t.isLink && t.element ? t.element.click() : (S(c.current),
                        y.current[t.index] && y.current[t.index](),
                        u({
                            type: h
                        })));
                        break;
                    case "Escape":
                        S(c.current),
                        u({
                            type: m
                        });
                        break;
                    case "Tab":
                        e.preventDefault();
                        break;
                    default:
                        if ((0,
                        s.HD)(n) && 1 === n.length) {
                            var r = C + n.toLowerCase();
                            u({
                                type: _,
                                payload: r
                            })
                        }
                    }
            }
            ), (0,
            i.Dv)(k, {
                currentIndex: D,
                orientation: "vertical",
                rotate: !1,
                filter: function(e) {
                    return !e.disabled
                },
                callback: function(e) {
                    u({
                        type: b,
                        payload: {
                            index: e,
                            dropdownRef: l
                        }
                    })
                },
                key: "index"
            }));
            return {
                data: {
                    activeDescendant: A(D) || void 0,
                    triggerId: I
                },
                props: E({
                    tabIndex: -1
                }, a, {
                    ref: O,
                    id: w,
                    onKeyDown: (0,
                    p.M)(n, P)
                })
            }
        }
        function N(e) {
            var n = e.onBlur
              , t = e.portal
              , a = void 0 === t || t
              , o = e.position
              , i = e.ref
              , d = v(e, w)
              , c = j()
              , s = c.triggerRef
              , l = c.triggerClickedRef
              , y = c.dispatch
              , x = c.dropdownRef
              , g = c.popoverRef
              , h = c.state.isExpanded
              , R = (0,
            f.e)(g, i);
            return (0,
            r.useEffect)((function() {
                if (h) {
                    var e = (0,
                    u.r)(g.current);
                    return e.addEventListener("mousedown", n),
                    function() {
                        e.removeEventListener("mousedown", n)
                    }
                }
                function n(e) {
                    var n, t;
                    l.current ? l.current = !1 : (n = g.current,
                    t = e.target,
                    n && n.contains(t) || y({
                        type: m
                    }))
                }
            }
            ), [l, s, y, x, g, h]),
            {
                data: {
                    portal: a,
                    position: o,
                    targetRef: s,
                    isExpanded: h
                },
                props: E({
                    ref: R,
                    hidden: !h,
                    onBlur: (0,
                    p.M)(n, (function(e) {
                        e.currentTarget.contains(e.relatedTarget) || y({
                            type: m
                        })
                    }
                    ))
                }, d)
            }
        }
        function A(e) {
            var n = (0,
            r.useContext)(C).dropdownId;
            return null != e && e > -1 ? (0,
            l.q)("option-" + e, n) : void 0
        }
        function S(e) {
            e && e.focus()
        }
        function P(e, n) {
            switch (void 0 === n && (n = {}),
            n.type) {
            case h:
            case m:
                return E({}, e, {
                    isExpanded: !1,
                    selectionIndex: -1
                });
            case "OPEN_MENU_AT_FIRST_ITEM":
                return E({}, e, {
                    isExpanded: !0,
                    selectionIndex: 0
                });
            case R:
                return E({}, e, {
                    isExpanded: !0,
                    selectionIndex: n.payload.index
                });
            case I:
                return E({}, e, {
                    isExpanded: !0,
                    selectionIndex: -1
                });
            case b:
                var t = n.payload.dropdownRef
                  , r = void 0 === t ? {
                    current: null
                } : t;
                if (n.payload.index >= 0 && n.payload.index !== e.selectionIndex) {
                    if (r.current) {
                        var a = (0,
                        u.r)(r.current);
                        r.current !== (null == a ? void 0 : a.activeElement) && r.current.focus()
                    }
                    return E({}, e, {
                        selectionIndex: null != n.payload.max ? Math.min(Math.max(n.payload.index, 0), n.payload.max) : Math.max(n.payload.index, 0)
                    })
                }
                return e;
            case g:
                return E({}, e, {
                    selectionIndex: -1
                });
            case D:
                return E({}, e, {
                    triggerId: n.payload
                });
            case _:
                return "undefined" !== typeof n.payload ? E({}, e, {
                    typeaheadQuery: n.payload
                }) : e;
            default:
                return e
            }
        }
        function j() {
            return (0,
            r.useContext)(C)
        }
        function K() {
            return (0,
            i.Ak)(k)
        }
        var U = t(87185)
          , B = t(2258);
        function q() {
            return q = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ,
            q.apply(this, arguments)
        }
        function F(e, n) {
            if (null == e)
                return {};
            var t, r, a = {}, o = Object.keys(e);
            for (r = 0; r < o.length; r++)
                t = o[r],
                n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a
        }
        var H = ["as", "id", "children"]
          , X = ["as"]
          , Q = ["as"]
          , Y = ["portal"]
          , G = ["as"]
          , J = (0,
        r.forwardRef)((function(e, n) {
            var t = e.as
              , a = void 0 === t ? r.Fragment : t
              , o = e.id
              , i = e.children
              , d = F(e, H);
            (0,
            U.kG)("menu-button");
            var u = (0,
            r.useMemo)((function() {
                try {
                    return (0,
                    B.isFragment)((0,
                    r.createElement)(a, null))
                } catch (e) {
                    return !1
                }
            }
            ), [a]) ? {} : q({
                ref: n,
                id: o,
                "data-reach-menu": ""
            }, d);
            return (0,
            r.createElement)(a, u, (0,
            r.createElement)(O, {
                id: o,
                children: i
            }))
        }
        ));
        var W = (0,
        r.forwardRef)((function(e, n) {
            var t = e.as
              , a = void 0 === t ? "button" : t
              , o = T(q({}, F(e, X), {
                ref: n
            }))
              , i = o.data
              , d = i.isExpanded
              , u = i.controls
              , c = o.props;
            return (0,
            r.createElement)(a, q({
                "aria-expanded": !!d || void 0,
                "aria-haspopup": !0,
                "aria-controls": u
            }, c, {
                "data-reach-menu-button": ""
            }))
        }
        ));
        var z = (0,
        r.forwardRef)((function(e, n) {
            var t = e.as
              , a = void 0 === t ? "div" : t
              , o = L(q({}, F(e, Q), {
                ref: n
            }))
              , i = o.data
              , d = i.activeDescendant
              , u = i.triggerId
              , c = o.props;
            return (0,
            r.createElement)(a, q({
                "aria-activedescendant": d,
                "aria-labelledby": u || void 0,
                role: "menu"
            }, c, {
                "data-reach-menu-items": ""
            }))
        }
        ));
        var V = (0,
        r.forwardRef)((function(e, n) {
            var t = e.portal
              , a = void 0 === t || t
              , o = F(e, Y);
            return (0,
            r.createElement)(Z, {
                portal: a
            }, (0,
            r.createElement)(z, q({}, o, {
                ref: n,
                "data-reach-menu-list": ""
            })))
        }
        ));
        var Z = (0,
        r.forwardRef)((function(e, n) {
            var t = e.as
              , o = void 0 === t ? "div" : t
              , i = N(q({}, F(e, G), {
                ref: n
            }))
              , d = i.data
              , u = d.portal
              , c = d.targetRef
              , s = d.position
              , l = i.props
              , f = {
                "data-reach-menu-popover": ""
            };
            return u ? (0,
            r.createElement)(a.J2, q({}, l, f, {
                as: o,
                targetRef: c,
                position: s
            })) : (0,
            r.createElement)(o, q({}, l, f))
        }
        ))
    }
}]);

"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3542], {
    33542: function(e, n, t) {
        t.d(n, {
            ZP: function() {
                return j
            }
        });
        var o = t(56168)
          , i = t(42817)
          , r = t(41124);
        var l = t(49226)
          , a = t(87185)
          , u = t(21301)
          , s = t(53040)
          , c = t(37401);
        function d() {
            return d = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var o in t)
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                }
                return e
            }
            ,
            d.apply(this, arguments)
        }
        var f = ["as", "style"]
          , v = (0,
        o.forwardRef)((function(e, n) {
            var t = e.as
              , i = void 0 === t ? "span" : t
              , r = e.style
              , l = void 0 === r ? {} : r
              , a = function(e, n) {
                if (null == e)
                    return {};
                var t, o, i = {}, r = Object.keys(e);
                for (o = 0; o < r.length; o++)
                    t = r[o],
                    n.indexOf(t) >= 0 || (i[t] = e[t]);
                return i
            }(e, f);
            return (0,
            o.createElement)(i, d({
                ref: n,
                style: d({
                    border: 0,
                    clip: "rect(0 0 0 0)",
                    height: "1px",
                    margin: "-1px",
                    overflow: "hidden",
                    padding: 0,
                    position: "absolute",
                    width: "1px",
                    whiteSpace: "nowrap",
                    wordWrap: "normal"
                }, l)
            }, a))
        }
        ));
        var p = t(70504);
        function E() {
            return E = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var o in t)
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                }
                return e
            }
            ,
            E.apply(this, arguments)
        }
        function b(e, n) {
            if (null == e)
                return {};
            var t, o, i = {}, r = Object.keys(e);
            for (o = 0; o < r.length; o++)
                t = r[o],
                n.indexOf(t) >= 0 || (i[t] = e[t]);
            return i
        }
        var w, M, h, g, y, L, m, D, O = ["children", "label", "ariaLabel", "id", "DEBUG_STYLE"], V = ["label", "ariaLabel", "isVisible", "id"], S = ["ariaLabel", "aria-label", "as", "id", "isVisible", "label", "position", "style", "triggerRect"], P = ["type"];
        !function(e) {
            e.Idle = "IDLE",
            e.Focused = "FOCUSED",
            e.Visible = "VISIBLE",
            e.LeavingVisible = "LEAVING_VISIBLE",
            e.Dismissed = "DISMISSED"
        }(m || (m = {})),
        function(e) {
            e.Blur = "BLUR",
            e.Focus = "FOCUS",
            e.GlobalMouseMove = "GLOBAL_MOUSE_MOVE",
            e.MouseDown = "MOUSE_DOWN",
            e.MouseEnter = "MOUSE_ENTER",
            e.MouseLeave = "MOUSE_LEAVE",
            e.MouseMove = "MOUSE_MOVE",
            e.Rest = "REST",
            e.SelectWithKeyboard = "SELECT_WITH_KEYBOARD",
            e.TimeComplete = "TIME_COMPLETE"
        }(D || (D = {}));
        var T, _, x = {
            initial: m.Idle,
            states: (L = {},
            L[m.Idle] = {
                enter: F,
                on: (w = {},
                w[D.MouseEnter] = m.Focused,
                w[D.Focus] = m.Visible,
                w)
            },
            L[m.Focused] = {
                enter: function() {
                    window.clearTimeout(T),
                    T = window.setTimeout((function() {
                        W({
                            type: D.Rest
                        })
                    }
                    ), 100)
                },
                leave: function() {
                    window.clearTimeout(T)
                },
                on: (M = {},
                M[D.MouseMove] = m.Focused,
                M[D.MouseLeave] = m.Idle,
                M[D.MouseDown] = m.Dismissed,
                M[D.Blur] = m.Idle,
                M[D.Rest] = m.Visible,
                M)
            },
            L[m.Visible] = {
                on: (h = {},
                h[D.Focus] = m.Focused,
                h[D.MouseEnter] = m.Focused,
                h[D.MouseLeave] = m.LeavingVisible,
                h[D.Blur] = m.LeavingVisible,
                h[D.MouseDown] = m.Dismissed,
                h[D.SelectWithKeyboard] = m.Dismissed,
                h[D.GlobalMouseMove] = m.LeavingVisible,
                h)
            },
            L[m.LeavingVisible] = {
                enter: function() {
                    window.clearTimeout(_),
                    _ = window.setTimeout((function() {
                        return W({
                            type: D.TimeComplete
                        })
                    }
                    ), 500)
                },
                leave: function() {
                    window.clearTimeout(_),
                    F()
                },
                on: (g = {},
                g[D.MouseEnter] = m.Visible,
                g[D.Focus] = m.Visible,
                g[D.TimeComplete] = m.Idle,
                g)
            },
            L[m.Dismissed] = {
                leave: function() {
                    F()
                },
                on: (y = {},
                y[D.MouseLeave] = m.Idle,
                y[D.Blur] = m.Idle,
                y)
            },
            L)
        }, I = {
            value: x.initial,
            context: {
                id: null
            }
        }, B = [];
        function F() {
            I.context.id = null
        }
        function R(e) {
            var n = void 0 === e ? {} : e
              , t = n.id
              , c = n.onPointerEnter
              , d = n.onPointerMove
              , f = n.onPointerLeave
              , v = n.onPointerDown
              , E = n.onMouseEnter
              , b = n.onMouseMove
              , w = n.onMouseLeave
              , M = n.onMouseDown
              , h = n.onFocus
              , g = n.onBlur
              , y = n.onKeyDown
              , L = n.disabled
              , O = n.ref
              , V = n.DEBUG_STYLE
              , S = String((0,
            i.M)(t))
              , P = (0,
            o.useState)(!!V || Y(S, !0))
              , T = P[0]
              , _ = P[1]
              , x = (0,
            o.useRef)(null)
              , F = (0,
            u.e)(O, x)
              , R = (0,
            p.EL)(x, {
                observe: T
            });
            function k(e, n) {
                return "undefined" !== typeof window && "PointerEvent"in window ? e : (0,
                s.M)(e, n)
            }
            function U(e) {
                return function(n) {
                    "mouse" === n.pointerType && e(n)
                }
            }
            function C() {
                W({
                    type: D.MouseEnter,
                    id: S
                })
            }
            function G() {
                W({
                    type: D.MouseMove,
                    id: S
                })
            }
            function K() {
                W({
                    type: D.MouseLeave
                })
            }
            function j() {
                I.context.id === S && W({
                    type: D.MouseDown
                })
            }
            return (0,
            o.useEffect)((function() {
                return e = function() {
                    _(Y(S))
                }
                ,
                B.push(e),
                function() {
                    B.splice(B.indexOf(e), 1)
                }
                ;
                var e
            }
            ), [S]),
            (0,
            a.kG)("tooltip"),
            (0,
            o.useEffect)((function() {
                var e = (0,
                r.r)(x.current);
                function n(e) {
                    "Escape" !== e.key && "Esc" !== e.key || I.value !== m.Visible || W({
                        type: D.SelectWithKeyboard
                    })
                }
                return e.addEventListener("keydown", n),
                function() {
                    return e.removeEventListener("keydown", n)
                }
            }
            ), []),
            function(e) {
                var n = e.disabled
                  , t = e.isVisible
                  , i = e.ref;
                (0,
                o.useEffect)((function() {
                    if ("undefined" !== typeof window && "PointerEvent"in window && n && t) {
                        var e = (0,
                        r.r)(i.current);
                        return e.addEventListener("mousemove", o),
                        function() {
                            e.removeEventListener("mousemove", o)
                        }
                    }
                    function o(e) {
                        t && (e.target instanceof Element && e.target.closest("[data-reach-tooltip-trigger][data-state='tooltip-visible']") || W({
                            type: D.GlobalMouseMove
                        }))
                    }
                }
                ), [n, t, i])
            }({
                disabled: L,
                isVisible: T,
                ref: x
            }),
            [{
                "aria-describedby": T ? (0,
                l.q)("tooltip", S) : void 0,
                "data-state": T ? "tooltip-visible" : "tooltip-hidden",
                "data-reach-tooltip-trigger": "",
                ref: F,
                onPointerEnter: (0,
                s.M)(c, U(C)),
                onPointerMove: (0,
                s.M)(d, U(G)),
                onPointerLeave: (0,
                s.M)(f, U(K)),
                onPointerDown: (0,
                s.M)(v, U(j)),
                onMouseEnter: k(E, C),
                onMouseMove: k(b, G),
                onMouseLeave: k(w, K),
                onMouseDown: k(M, j),
                onFocus: (0,
                s.M)(h, (function() {
                    window.__REACH_DISABLE_TOOLTIPS || W({
                        type: D.Focus,
                        id: S
                    })
                }
                )),
                onBlur: (0,
                s.M)(g, (function() {
                    I.context.id === S && W({
                        type: D.Blur
                    })
                }
                )),
                onKeyDown: (0,
                s.M)(y, (function(e) {
                    "Enter" !== e.key && " " !== e.key || W({
                        type: D.SelectWithKeyboard
                    })
                }
                ))
            }, {
                id: S,
                triggerRect: R,
                isVisible: T
            }, T]
        }
        var k = (0,
        o.forwardRef)((function(e, n) {
            var t = e.children
              , i = e.label
              , r = e.ariaLabel
              , l = e.id
              , a = e.DEBUG_STYLE
              , u = b(e, O)
              , s = o.Children.only(t)
              , c = R({
                id: l,
                onPointerEnter: s.props.onPointerEnter,
                onPointerMove: s.props.onPointerMove,
                onPointerLeave: s.props.onPointerLeave,
                onPointerDown: s.props.onPointerDown,
                onMouseEnter: s.props.onMouseEnter,
                onMouseMove: s.props.onMouseMove,
                onMouseLeave: s.props.onMouseLeave,
                onMouseDown: s.props.onMouseDown,
                onFocus: s.props.onFocus,
                onBlur: s.props.onBlur,
                onKeyDown: s.props.onKeyDown,
                disabled: s.props.disabled,
                ref: s.ref,
                DEBUG_STYLE: a
            })
              , d = c[0]
              , f = c[1];
            return (0,
            o.createElement)(o.Fragment, null, (0,
            o.cloneElement)(s, d), (0,
            o.createElement)(U, E({
                ref: n,
                label: i,
                "aria-label": r
            }, f, u)))
        }
        ));
        var U = (0,
        o.forwardRef)((function(e, n) {
            var t = e.label
              , i = e.ariaLabel
              , r = e.isVisible
              , a = e.id
              , u = b(e, V);
            return r ? (0,
            o.createElement)(c.h, null, (0,
            o.createElement)(C, E({
                ref: n,
                label: t,
                "aria-label": i,
                isVisible: r
            }, u, {
                id: (0,
                l.q)("tooltip", String(a))
            }))) : null
        }
        ));
        var C = (0,
        o.forwardRef)((function(e, n) {
            var t = e.ariaLabel
              , i = e["aria-label"]
              , r = e.as
              , l = void 0 === r ? "div" : r
              , a = e.id
              , s = e.isVisible
              , c = e.label
              , d = e.position
              , f = void 0 === d ? K : d
              , w = e.style
              , M = e.triggerRect
              , h = b(e, S)
              , g = null != (i || t)
              , y = (0,
            o.useRef)(null)
              , L = (0,
            u.e)(n, y)
              , m = (0,
            p.EL)(y, {
                observe: s
            });
            return (0,
            o.createElement)(o.Fragment, null, (0,
            o.createElement)(l, E({
                role: g ? void 0 : "tooltip"
            }, h, {
                ref: L,
                "data-reach-tooltip": "",
                id: g ? void 0 : a,
                style: E({}, w, G(f, M, m))
            }), c), g && (0,
            o.createElement)(v, {
                role: "tooltip",
                id: a
            }, i || t))
        }
        ));
        function G(e, n, t) {
            return !t ? {
                visibility: "hidden"
            } : e(n, t)
        }
        var K = function(e, n, t) {
            void 0 === t && (t = 8);
            var o = function(e) {
                var n, t, o = (0,
                r.r)(e), i = o.defaultView || window;
                return o ? {
                    width: null != (n = o.documentElement.clientWidth) ? n : i.innerWidth,
                    height: null != (t = o.documentElement.clientHeight) ? t : i.innerHeight
                } : {
                    width: 0,
                    height: 0
                }
            }()
              , i = o.width
              , l = o.height;
            if (!e || !n)
                return {};
            var a = {
                top: e.top - n.height < 0,
                right: i < e.left + n.width,
                bottom: l < e.bottom + n.height + t,
                left: e.left - n.width < 0
            }
              , u = a.bottom && !a.top;
            return {
                left: a.right && !a.left ? e.right - n.width + window.pageXOffset + "px" : e.left + window.pageXOffset + "px",
                top: u ? e.top - t - n.height + window.pageYOffset + "px" : e.top + t + e.height + window.pageYOffset + "px"
            }
        };
        function W(e) {
            var n = function(e, n) {
                var t = x.states[e.value]
                  , o = t && t.on && t.on[n.type];
                if (!o)
                    return E({}, e, {
                        changed: !1
                    });
                t && t.leave && t.leave(e.context, n);
                n.type;
                var i = b(n, P)
                  , r = E({}, I.context, i)
                  , l = "string" === typeof o ? o : o.target
                  , a = x.states[l];
                a && a.enter && a.enter(e.context, n);
                return {
                    value: l,
                    context: r,
                    changed: !0
                }
            }(I, e)
              , t = n.value
              , o = n.context;
            n.changed && (I = {
                value: t,
                context: o
            },
            B.forEach((function(e) {
                return e(I)
            }
            )))
        }
        function Y(e, n) {
            return I.context.id === e && (n ? I.value === m.Visible : I.value === m.Visible || I.value === m.LeavingVisible)
        }
        var j = k
    }
}]);

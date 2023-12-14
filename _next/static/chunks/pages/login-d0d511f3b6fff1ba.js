(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3459], {
    7156: function(e, r, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/login", function() {
            return t(4849)
        }
        ])
    },
    4849: function(e, r, t) {
        "use strict";
        t.r(r),
        t.d(r, {
            __N_SSG: function() {
                return S
            }
        });
        var n = t(44453)
          , s = t.n(n)
          , a = t(8014)
          , o = t(94644)
          , i = t(1984)
          , l = t(75657)
          , u = t.n(l)
          , c = t(89914)
          , d = t.n(c)
          , m = t(67288)
          , h = t(61361)
          , x = t(56168)
          , p = t(75332)
          , f = t(9125)
          , y = t(83476)
          , v = t(68804)
          , g = t(8012);
        function j(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
                n[t] = e[t];
            return n
        }
        function b(e, r, t, n, s, a, o) {
            try {
                var i = e[a](o)
                  , l = i.value
            } catch (u) {
                return void t(u)
            }
            i.done ? r(l) : Promise.resolve(l).then(n, s)
        }
        function w(e, r) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, r) {
                var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != t) {
                    var n, s, a = [], o = !0, i = !1;
                    try {
                        for (t = t.call(e); !(o = (n = t.next()).done) && (a.push(n.value),
                        !r || a.length !== r); o = !0)
                            ;
                    } catch (l) {
                        i = !0,
                        s = l
                    } finally {
                        try {
                            o || null == t.return || t.return()
                        } finally {
                            if (i)
                                throw s
                        }
                    }
                    return a
                }
            }(e, r) || function(e, r) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return j(e, r);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === t && e.constructor && (t = e.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return j(e, r)
            }(e, r) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var N = "Login | ESC "
          , _ = o.Ry().shape({
            username: o.Z_().required("Please enter username"),
            password: o.Z_().required("Please enter  password").min(8, "Password must be an 8 character")
        })
          , k = function() {
            var e = (0,
            p.useRouter)()
              , r = w((0,
            g.Z)("token"), 2)[1]
              , t = (0,
            x.useState)("")
              , n = t[0]
              , o = t[1]
              , l = function() {
                var t, n = (t = s().mark((function t(n) {
                    var a, i, l;
                    return s().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0,
                                t.next = 4,
                                y.WY.post("dash/login", n);
                            case 4:
                                (null === (i = t.sent) || void 0 === i || null === (a = i.data) || void 0 === a ? void 0 : a.token) && r(i.data.token),
                                e.replace("/user/overview"),
                                t.next = 16;
                                break;
                            case 9:
                                if (t.prev = 9,
                                t.t0 = t.catch(0),
                                l = (0,
                                v.$4)(t.t0),
                                400 !== (d()(t.t0, "response.status") || null)) {
                                    t.next = 15;
                                    break
                                }
                                return t.abrupt("return", o(l));
                            case 15:
                                h.Am.error(l);
                            case 16:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[0, 9]])
                }
                )),
                function() {
                    var e = this
                      , r = arguments;
                    return new Promise((function(n, s) {
                        var a = t.apply(e, r);
                        function o(e) {
                            b(a, n, s, o, i, "next", e)
                        }
                        function i(e) {
                            b(a, n, s, o, i, "throw", e)
                        }
                        o(void 0)
                    }
                    ))
                }
                );
                return function(e) {
                    return n.apply(this, arguments)
                }
            }()
              , c = (0,
            m.TA)({
                initialValues: {
                    username: "",
                    password: "",
                    remember: !1
                },
                onSubmit: l,
                validationSchema: _
            });
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)(i.default, {
                    children: [(0,
                    a.jsx)("title", {
                        children: N
                    }), (0,
                    a.jsx)("meta", {
                        name: "title",
                        content: N
                    }), (0,
                    a.jsx)("meta", {
                        property: "og:title",
                        content: N
                    }), (0,
                    a.jsx)("meta", {
                        property: "twitter:title",
                        content: N
                    })]
                }), (0,
                a.jsx)("section", {
                    children: (0,
                    a.jsx)("div", {
                        className: "container mx-auto py-20",
                        children: (0,
                        a.jsx)("div", {
                            className: "mx-auto px-5 align-middle max-w-[685px]",
                            children: (0,
                            a.jsxs)("form", {
                                children: [(0,
                                a.jsx)("h1", {
                                    className: "text-3xl text-green-500 py-2",
                                    children: "Welcome back"
                                }), (0,
                                a.jsx)("p", {
                                    className: "text-sm text-gray-400 py-2 font-thin",
                                    children: "Login to your account"
                                }), n && (0,
                                a.jsxs)("p", {
                                    className: "text-red-500 bg-red-500/20 px-3 py-3 rounded-md text-xs",
                                    children: [n, " ", (0,
                                    a.jsx)(u(), {
                                        href: "/resend",
                                        children: (0,
                                        a.jsx)("a", {
                                            className: "text-green-500 cursor-pointer",
                                            children: "[re-sent]"
                                        })
                                    })]
                                }), (0,
                                a.jsxs)("div", {
                                    className: "py-2",
                                    children: [(0,
                                    a.jsx)("p", {
                                        className: "py-2 text-sm font-thin",
                                        children: "Username"
                                    }), (0,
                                    a.jsx)("input", {
                                        autoComplete: "off",
                                        name: "username",
                                        value: c.values.username,
                                        onChange: c.handleChange,
                                        required: !0,
                                        className: "border px-3 w-full outline-blue rounded-md h-12"
                                    }), c.touched.username && c.errors.username && (0,
                                    a.jsx)("small", {
                                        className: "text-red-500",
                                        children: c.errors.username
                                    })]
                                }), (0,
                                a.jsxs)("div", {
                                    className: "py-2",
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [(0,
                                        a.jsx)("p", {
                                            className: "py-2 text-sm font-thin",
                                            children: "Password"
                                        }), (0,
                                        a.jsx)(u(), {
                                            href: "/lostpassword",
                                            children: (0,
                                            a.jsx)("a", {
                                                className: "py-2 text-xs text-gray-500 underline font-thin",
                                                children: "Forgot your password?"
                                            })
                                        })]
                                    }), (0,
                                    a.jsx)("input", {
                                        type: "password",
                                        name: "password",
                                        value: c.values.password,
                                        onChange: c.handleChange,
                                        required: !0,
                                        className: "border px-3 w-full outline-blue rounded-md h-12"
                                    }), c.touched.password && c.errors.password && (0,
                                    a.jsx)("small", {
                                        className: "text-red-500",
                                        children: c.errors.password
                                    })]
                                }), (0,
                                a.jsx)("div", {
                                    className: "py-2",
                                    children: (0,
                                    a.jsxs)("p", {
                                        className: "text-sm text-gray-500 font-thin",
                                        children: [(0,
                                        a.jsx)("span", {
                                            children: (0,
                                            a.jsx)("input", {
                                                type: "checkbox",
                                                value: c.values.remember,
                                                onChange: function(e) {
                                                    return c.setFieldValue("remember", e.target.checked)
                                                },
                                                className: "mr-2"
                                            })
                                        }), "Remember & Auto Login"]
                                    })
                                }), (0,
                                a.jsx)("div", {
                                    className: "w-full text-left my-2",
                                    children: (0,
                                    a.jsx)("button", {
                                        disabled: c.isSubmitting,
                                        type: "button",
                                        onClick: c.handleSubmit,
                                        className: "text-sm  focus:outline-none hover:bg-green-400 text-white  text-center font-thin w-56 py-3 bg-green-500 rounded ".concat(c.isSubmitting && "cursor-not-allowed bg-gray-400 hover:bg-gray-500", " "),
                                        children: "Login"
                                    })
                                }), (0,
                                a.jsx)("div", {
                                    children: (0,
                                    a.jsxs)("p", {
                                        className: "text-gray-500 text-sm my-1 font-thin",
                                        children: ["Don't have an account?", " ", (0,
                                        a.jsx)("span", {
                                            className: "text-green-500",
                                            children: (0,
                                            a.jsx)(u(), {
                                                href: "/register",
                                                children: (0,
                                                a.jsx)("a", {
                                                    children: " Click to sign up"
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                })]
            })
        };
        k.Layout = f.Z;
        var S = !0;
        r.default = k
    }
}, function(e) {
    e.O(0, [5445, 1889, 6509, 1763, 564, 9125, 9774, 2888, 179], (function() {
        return r = 7156,
        e(e.s = r);
        var r
    }
    ));
    var r = e.O();
    _N_E = r
}
]);

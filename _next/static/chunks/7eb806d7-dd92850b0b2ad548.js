"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6428], {
    68195: function(e, r, t) {
        t.d(r, {
            P6: function() {
                return Ir
            },
            Zz: function() {
                return Tr
            }
        });
        var n = t(56168)
          , a = t(50862)
          , i = t.n(a)
          , o = t(76841)
          , s = t(16808)
          , l = t(370)
          , u = t(74118)
          , d = t.n(u)
          , c = t(72340)
          , m = t(78901)
          , p = t.n(m)
          , f = t(14787)
          , h = t.n(f)
          , y = t(19976)
          , v = t(64679)
          , g = t(75512)
          , b = t(25347)
          , S = t.n(b)
          , E = t(16240);
        function w(e, r) {
            for (var t = 0; t < r.length; t++) {
                var n = r[t];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function C(e, r, t) {
            return r && w(e.prototype, r),
            t && w(e, t),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        function O() {
            return O = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
            }
            ,
            O.apply(this, arguments)
        }
        function F(e, r) {
            e.prototype = Object.create(r.prototype),
            e.prototype.constructor = e,
            D(e, r)
        }
        function D(e, r) {
            return D = Object.setPrototypeOf || function(e, r) {
                return e.__proto__ = r,
                e
            }
            ,
            D(e, r)
        }
        function x(e, r) {
            if (null == e)
                return {};
            var t, n, a = {}, i = Object.keys(e);
            for (n = 0; n < i.length; n++)
                t = i[n],
                r.indexOf(t) >= 0 || (a[t] = e[t]);
            return a
        }
        function k(e) {
            var r = function(e, r) {
                if ("object" !== typeof e || null === e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                    var n = t.call(e, r || "default");
                    if ("object" !== typeof n)
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === r ? String : Number)(e)
            }(e, "string");
            return "symbol" === typeof r ? r : String(r)
        }
        function A(e) {
            var r = e.type
              , t = void 0 === r ? "default" : r
              , a = e.icon
              , i = e.className
              , o = x(e, ["type", "icon", "className"]);
            return n.createElement("button", O({
                type: "button",
                className: "btn btn-" + t + " " + i
            }, o), n.createElement("i", {
                className: "glyphicon glyphicon-" + a
            }))
        }
        function N(e) {
            var r = e.className
              , t = e.onClick
              , a = e.disabled;
            return n.createElement("div", {
                className: "row"
            }, n.createElement("p", {
                className: "col-xs-3 col-xs-offset-9 text-right " + r
            }, n.createElement(A, {
                type: "info",
                icon: "plus",
                className: "btn-add col-xs-12",
                "aria-label": "Add",
                tabIndex: "0",
                onClick: t,
                disabled: a
            })))
        }
        var P = i().shape({
            ArrayFieldTemplate: i().elementType,
            FieldTemplate: i().elementType,
            ObjectFieldTemplate: i().elementType,
            definitions: i().object.isRequired,
            rootSchema: i().object,
            fields: i().objectOf(i().elementType).isRequired,
            formContext: i().object.isRequired,
            widgets: i().objectOf(i().oneOfType([i().func, i().object])).isRequired
        })
          , j = (i().bool,
        i().bool,
        i().object,
        i().any,
        i().object,
        i().func,
        i().func.isRequired,
        i().func,
        i().string,
        i().bool,
        P.isRequired,
        i().bool,
        i().object.isRequired,
        i().bool,
        i().bool,
        i().bool,
        W())
          , _ = null
          , T = null
          , I = "__rjsf_rootSchema";
        function W() {
            var e = new (S())({
                errorDataPath: "property",
                allErrors: !0,
                multipleOfPrecision: 8,
                schemaId: "auto",
                unknownFormats: "ignore"
            });
            return e.addFormat("data-url", /^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/),
            e.addFormat("color", /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/),
            e
        }
        function B(e, r) {
            void 0 === r && (r = "root");
            var t = [];
            return "__errors"in e && (t = t.concat(e.__errors.map((function(e) {
                return {
                    stack: r + ": " + e
                }
            }
            )))),
            Object.keys(e).reduce((function(r, t) {
                return "__errors" !== t && (r = r.concat(B(e[t], t))),
                r
            }
            ), t)
        }
        function q(e) {
            var r = {
                __errors: [],
                addError: function(e) {
                    this.__errors.push(e)
                }
            };
            return re(e) ? Object.keys(e).reduce((function(r, t) {
                var n;
                return O({}, r, ((n = {})[t] = q(e[t]),
                n))
            }
            ), r) : Array.isArray(e) ? e.reduce((function(e, r, t) {
                var n;
                return O({}, e, ((n = {})[t] = q(r),
                n))
            }
            ), r) : r
        }
        function R(e) {
            return Object.keys(e).reduce((function(r, t) {
                var n, a;
                return "addError" === t ? r : O({}, r, "__errors" === t ? ((a = {})[t] = e[t],
                a) : ((n = {})[t] = R(e[t]),
                n))
            }
            ), {})
        }
        function $(e, r, t, n, a, i) {
            void 0 === a && (a = []),
            void 0 === i && (i = {}),
            e = Z(r, e, r, !0);
            var o = !De(T, a)
              , s = !De(_, i);
            (o || s) && (j = W()),
            a && o && Array.isArray(a) && (j.addMetaSchema(a),
            T = a),
            i && s && re(i) && (Object.keys(i).forEach((function(e) {
                j.addFormat(e, i[e])
            }
            )),
            _ = i);
            var l = null;
            try {
                j.validate(r, e)
            } catch (p) {
                l = p
            }
            var u = function(e) {
                return void 0 === e && (e = []),
                null === e ? [] : e.map((function(e) {
                    var r = e.dataPath
                      , t = e.keyword
                      , n = e.message
                      , a = e.params
                      , i = e.schemaPath
                      , o = "" + r;
                    return {
                        name: t,
                        property: o,
                        message: n,
                        params: a,
                        stack: (o + " " + n).trim(),
                        schemaPath: i
                    }
                }
                ))
            }(j.errors);
            j.errors = null;
            var d = l && l.message && "string" === typeof l.message && l.message.includes("no schema with key or ref ");
            d && (u = [].concat(u, [{
                stack: l.message
            }])),
            "function" === typeof n && (u = n(u));
            var c = function(e) {
                return e.length ? e.reduce((function(e, r) {
                    var t = r.property
                      , n = r.message
                      , a = (0,
                    g.Z)(t)
                      , i = e;
                    a.length > 0 && "" === a[0] && a.splice(0, 1);
                    var o = a.slice(0)
                      , s = Array.isArray(o)
                      , l = 0;
                    for (o = s ? o : o[Symbol.iterator](); ; ) {
                        var u;
                        if (s) {
                            if (l >= o.length)
                                break;
                            u = o[l++]
                        } else {
                            if ((l = o.next()).done)
                                break;
                            u = l.value
                        }
                        var d = u;
                        d in i || (i[d] = {}),
                        i = i[d]
                    }
                    return Array.isArray(i.__errors) ? i.__errors = i.__errors.concat(n) : n && (i.__errors = [n]),
                    e
                }
                ), {}) : {}
            }(u);
            if (d && (c = O({}, c, {
                $schema: {
                    __errors: [l.message]
                }
            })),
            "function" !== typeof t)
                return {
                    errors: u,
                    errorSchema: c
                };
            var m = te(c, R(t(e, q(e))), !0);
            return {
                errors: B(m),
                errorSchema: m
            }
        }
        function U(e) {
            var r = e;
            if (e.constructor === Object)
                for (var t in r = O({}, e)) {
                    var n = r[t];
                    "$ref" === t && "string" === typeof n && n.startsWith("#") ? r[t] = I + n : r[t] = U(n)
                }
            else if (Array.isArray(e)) {
                r = [].concat(e);
                for (var a = 0; a < r.length; a++)
                    r[a] = U(r[a])
            }
            return r
        }
        function M(e, r, t) {
            try {
                return j.addSchema(t, I).validate(U(e), r)
            } catch (n) {
                return !1
            } finally {
                j.removeSchema(I)
            }
        }
        var V = "__additional_property"
          , K = {
            boolean: {
                checkbox: "CheckboxWidget",
                radio: "RadioWidget",
                select: "SelectWidget",
                hidden: "HiddenWidget"
            },
            string: {
                text: "TextWidget",
                password: "PasswordWidget",
                email: "EmailWidget",
                hostname: "TextWidget",
                ipv4: "TextWidget",
                ipv6: "TextWidget",
                uri: "URLWidget",
                "data-url": "FileWidget",
                radio: "RadioWidget",
                select: "SelectWidget",
                textarea: "TextareaWidget",
                hidden: "HiddenWidget",
                date: "DateWidget",
                datetime: "DateTimeWidget",
                "date-time": "DateTimeWidget",
                "alt-date": "AltDateWidget",
                "alt-datetime": "AltDateTimeWidget",
                color: "ColorWidget",
                file: "FileWidget"
            },
            number: {
                text: "TextWidget",
                select: "SelectWidget",
                updown: "UpDownWidget",
                range: "RangeWidget",
                radio: "RadioWidget",
                hidden: "HiddenWidget"
            },
            integer: {
                text: "TextWidget",
                select: "SelectWidget",
                updown: "UpDownWidget",
                range: "RangeWidget",
                radio: "RadioWidget",
                hidden: "HiddenWidget"
            },
            array: {
                select: "SelectWidget",
                checkboxes: "CheckboxesWidget",
                files: "FileWidget",
                hidden: "HiddenWidget"
            }
        };
        function L(e, r, t) {
            if (!e.additionalProperties)
                return !1;
            var n = Q(r).expandable;
            return !1 === n ? n : void 0 === e.maxProperties || Object.keys(t).length < e.maxProperties
        }
        function H(e) {
            var r = e.type;
            return !r && e.const ? he(e.const) : !r && e.enum ? "string" : r || !e.properties && !e.additionalProperties ? r instanceof Array && 2 === r.length && r.includes("null") ? r.find((function(e) {
                return "null" !== e
            }
            )) : r : "object"
        }
        function z(e, r, t) {
            void 0 === t && (t = {});
            var a = H(e);
            if ("function" === typeof r || (0,
            c.isForwardRef)(n.createElement(r)) || (0,
            c.isMemo)(r))
                return function(e) {
                    if (!e.MergedWidget) {
                        var r = e.defaultProps && e.defaultProps.options || {};
                        e.MergedWidget = function(t) {
                            var a = t.options
                              , i = void 0 === a ? {} : a
                              , o = x(t, ["options"]);
                            return n.createElement(e, O({
                                options: O({}, r, i)
                            }, o))
                        }
                    }
                    return e.MergedWidget
                }(r);
            if ("string" !== typeof r)
                throw new Error("Unsupported widget definition: " + typeof r);
            if (t.hasOwnProperty(r))
                return z(e, t[r], t);
            if (!K.hasOwnProperty(a))
                throw new Error('No widget for type "' + a + '"');
            if (K[a].hasOwnProperty(r))
                return z(e, t[K[a][r]], t);
            throw new Error('No widget "' + r + '" for type "' + a + '"')
        }
        function Y(e, r, t) {
            void 0 === t && (t = {});
            try {
                return z(e, r, t),
                !0
            } catch (n) {
                if (n.message && (n.message.startsWith("No widget") || n.message.startsWith("Unsupported widget")))
                    return !1;
                throw n
            }
        }
        function J(e, r, t, n, a) {
            void 0 === n && (n = {}),
            void 0 === a && (a = !1);
            var i = re(e) ? e : {}
              , o = re(n) ? n : {}
              , s = r;
            if (re(s) && re(i.default))
                s = te(s, i.default);
            else if ("default"in i)
                s = i.default;
            else {
                if ("$ref"in i)
                    return J(fe(i.$ref, t), s, t, o, a);
                if ("dependencies"in i)
                    return J(Se(i, t, o), s, t, o, a);
                de(i) ? s = i.items.map((function(e, n) {
                    return J(e, Array.isArray(r) ? r[n] : void 0, t, o, a)
                }
                )) : "oneOf"in i ? i = i.oneOf[Be(void 0, i.oneOf, t)] : "anyOf"in i && (i = i.anyOf[Be(void 0, i.anyOf, t)])
            }
            switch ("undefined" === typeof s && (s = i.default),
            H(i)) {
            case "object":
                return Object.keys(i.properties || {}).reduce((function(e, r) {
                    var n = J(i.properties[r], (s || {})[r], t, (o || {})[r], a);
                    return (a || void 0 !== n) && (e[r] = n),
                    e
                }
                ), {});
            case "array":
                if (Array.isArray(s) && (s = s.map((function(e, r) {
                    return J(i.items[r] || i.additionalItems || {}, e, t)
                }
                ))),
                Array.isArray(n) && (s = n.map((function(e, r) {
                    return J(i.items, (s || {})[r], t, e)
                }
                ))),
                i.minItems) {
                    if (le(i, t))
                        return s || [];
                    var l = s ? s.length : 0;
                    if (i.minItems > l) {
                        var u = s || []
                          , d = Array.isArray(i.items) ? i.additionalItems : i.items
                          , c = h()(new Array(i.minItems - l), J(d, d.defaults, t));
                        return u.concat(c)
                    }
                }
            }
            return s
        }
        function Z(e, r, t, n) {
            if (void 0 === t && (t = {}),
            void 0 === n && (n = !1),
            !re(e))
                throw new Error("Invalid schema: " + e);
            var a = J(be(e, t, r), e.default, t, r, n);
            return "undefined" === typeof r ? a : re(r) || Array.isArray(r) ? G(a, r) : 0 === r || !1 === r || "" === r ? r : r || a
        }
        function G(e, r) {
            if (Array.isArray(r))
                return Array.isArray(e) || (e = []),
                r.map((function(r, t) {
                    return e[t] ? G(e[t], r) : r
                }
                ));
            if (re(r)) {
                var t = Object.assign({}, e);
                return Object.keys(r).reduce((function(t, n) {
                    return t[n] = G(e ? e[n] : {}, r[n]),
                    t
                }
                ), t)
            }
            return r
        }
        function Q(e) {
            return Object.keys(e).filter((function(e) {
                return 0 === e.indexOf("ui:")
            }
            )).reduce((function(r, t) {
                var n, a = e[t];
                return "ui:widget" === t && re(a) ? (console.warn("Setting options via ui:widget object is deprecated, use ui:options instead"),
                O({}, r, a.options || {}, {
                    widget: a.component
                })) : "ui:options" === t && re(a) ? O({}, r, a) : O({}, r, ((n = {})[t.substring(3)] = a,
                n))
            }
            ), {})
        }
        function X(e) {
            var r = Q(e)
              , t = {
                props: {
                    disabled: !1
                },
                submitText: "Submit",
                norender: !1
            };
            return r && r.submitButtonOptions ? Object.assign({}, t, r.submitButtonOptions) : t
        }
        function ee(e, r, t) {
            var n = Q(r).label
              , a = void 0 === n || n
              , i = H(e);
            return "array" === i && (a = le(e, t) || ue(e, r, t) || ce(r)),
            "object" === i && (a = !1),
            "boolean" !== i || r["ui:widget"] || (a = !1),
            r["ui:field"] && (a = !1),
            a
        }
        function re(e) {
            return !("undefined" !== typeof File && e instanceof File) && ("object" === typeof e && null !== e && !Array.isArray(e))
        }
        function te(e, r, t) {
            void 0 === t && (t = !1);
            var n = Object.assign({}, e);
            return Object.keys(r).reduce((function(n, a) {
                var i = e ? e[a] : {}
                  , o = r[a];
                return e && e.hasOwnProperty(a) && re(o) ? n[a] = te(i, o, t) : t && Array.isArray(i) && Array.isArray(o) ? n[a] = i.concat(o) : n[a] = o,
                n
            }
            ), n)
        }
        function ne(e) {
            if ("" !== e) {
                if (null === e)
                    return null;
                if (/\.$/.test(e))
                    return e;
                if (/\.0$/.test(e))
                    return e;
                var r = Number(e)
                  , t = "number" === typeof r && !Number.isNaN(r);
                return /\.\d*0$/.test(e) ? e : t ? r : e
            }
        }
        function ae(e, r) {
            if (!Array.isArray(r))
                return e;
            var t, n = function(e) {
                return e.reduce((function(e, r) {
                    return e[r] = !0,
                    e
                }
                ), {})
            }, a = n(e), i = r.filter((function(e) {
                return "*" === e || a[e]
            }
            )), o = n(i), s = e.filter((function(e) {
                return !o[e]
            }
            )), l = i.indexOf("*");
            if (-1 === l) {
                if (s.length)
                    throw new Error("uiSchema order list does not contain " + ((t = s).length > 1 ? "properties '" + t.join("', '") + "'" : "property '" + t[0] + "'"));
                return i
            }
            if (l !== i.lastIndexOf("*"))
                throw new Error("uiSchema order list contains more than one wildcard item");
            var u = [].concat(i);
            return u.splice.apply(u, [l, 1].concat(s)),
            u
        }
        function ie(e) {
            return Array.isArray(e.enum) && 1 === e.enum.length || e.hasOwnProperty("const")
        }
        function oe(e) {
            if (Array.isArray(e.enum) && 1 === e.enum.length)
                return e.enum[0];
            if (e.hasOwnProperty("const"))
                return e.const;
            throw new Error("schema cannot be inferred as a constant")
        }
        function se(e, r) {
            void 0 === r && (r = {});
            var t = be(e, r)
              , n = t.oneOf || t.anyOf;
            return !!Array.isArray(t.enum) || !!Array.isArray(n) && n.every((function(e) {
                return ie(e)
            }
            ))
        }
        function le(e, r) {
            return void 0 === r && (r = {}),
            !(!e.uniqueItems || !e.items) && se(e.items, r)
        }
        function ue(e, r, t) {
            if (void 0 === t && (t = {}),
            "files" === r["ui:widget"])
                return !0;
            if (e.items) {
                var n = be(e.items, t);
                return "string" === n.type && "data-url" === n.format
            }
            return !1
        }
        function de(e) {
            return Array.isArray(e.items) && e.items.length > 0 && e.items.every((function(e) {
                return re(e)
            }
            ))
        }
        function ce(e) {
            return "widget"in Q(e) && "hidden" !== Q(e).widget
        }
        function me(e) {
            return !0 === e.additionalItems && console.warn("additionalItems=true is currently not supported"),
            re(e.additionalItems)
        }
        function pe(e) {
            return e.enum ? e.enum.map((function(r, t) {
                return {
                    label: e.enumNames && e.enumNames[t] || String(r),
                    value: r
                }
            }
            )) : (e.oneOf || e.anyOf).map((function(e) {
                var r = oe(e);
                return {
                    schema: e,
                    label: e.title || String(r),
                    value: r
                }
            }
            ))
        }
        function fe(e, r) {
            void 0 === r && (r = {});
            var t = e;
            if (!e.startsWith("#"))
                throw new Error("Could not find a definition for " + t + ".");
            e = decodeURIComponent(e.substring(1));
            var n = v.get(r, e);
            if (void 0 === n)
                throw new Error("Could not find a definition for " + t + ".");
            return n.hasOwnProperty("$ref") ? fe(n.$ref, r) : n
        }
        var he = function(e) {
            return Array.isArray(e) ? "array" : "string" === typeof e ? "string" : null == e ? "null" : "boolean" === typeof e ? "boolean" : isNaN(e) ? "object" === typeof e ? "object" : "string" : "number"
        };
        function ye(e, r, t) {
            return void 0 === r && (r = {}),
            void 0 === t && (t = {}),
            e = O({}, e, {
                properties: O({}, e.properties)
            }),
            t = re(t) ? t : {},
            Object.keys(t).forEach((function(n) {
                var a;
                e.properties.hasOwnProperty(n) || (a = e.additionalProperties.hasOwnProperty("$ref") ? be({
                    $ref: e.additionalProperties.$ref
                }, r, t) : e.additionalProperties.hasOwnProperty("type") ? O({}, e.additionalProperties) : {
                    type: he(t[n])
                },
                e.properties[n] = a,
                e.properties[n].__additional_property = !0)
            }
            )),
            e
        }
        function ve(e, r, t) {
            return void 0 === r && (r = {}),
            void 0 === t && (t = {}),
            e.hasOwnProperty("$ref") ? ge(e, r, t) : e.hasOwnProperty("dependencies") ? be(Se(e, r, t), r, t) : e.hasOwnProperty("allOf") ? O({}, e, {
                allOf: e.allOf.map((function(e) {
                    return be(e, r, t)
                }
                ))
            }) : e
        }
        function ge(e, r, t) {
            return be(O({}, fe(e.$ref, r), x(e, ["$ref"])), r, t)
        }
        function be(e, r, t) {
            if (void 0 === r && (r = {}),
            void 0 === t && (t = {}),
            !re(e))
                return {};
            var n = ve(e, r, t);
            if (e.hasOwnProperty("if"))
                return function(e, r, t) {
                    var n = e.if
                      , a = e.then
                      , i = e.else
                      , o = x(e, ["if", "then", "else"])
                      , s = M(n, t, r) ? a : i;
                    return be(s ? Oe(o, be(s, r, t)) : o, r, t)
                }(e, r, t);
            if (n.properties) {
                var a = {};
                Object.entries(n.properties).forEach((function(e) {
                    var i = e[0]
                      , o = e[1]
                      , s = t && t[i]
                      , l = re(s) ? s : {}
                      , u = be(o, r, l);
                    a[i] = u,
                    o !== u && n.properties !== a && (n = O({}, n, {
                        properties: a
                    }))
                }
                ))
            }
            if ("allOf"in e)
                try {
                    n = p()(O({}, n, {
                        allOf: n.allOf
                    }))
                } catch (i) {
                    return console.warn("could not merge subschemas in allOf:\n" + i),
                    x(n, ["allOf"])
                }
            return n.hasOwnProperty("additionalProperties") && !1 !== n.additionalProperties ? ye(n, r, t) : n
        }
        function Se(e, r, t) {
            var n = e.dependencies
              , a = void 0 === n ? {} : n
              , i = x(e, ["dependencies"]);
            return "oneOf"in i ? i = i.oneOf[Be(t, i.oneOf, r)] : "anyOf"in i && (i = i.anyOf[Be(t, i.anyOf, r)]),
            Ee(a, i, r, t)
        }
        function Ee(e, r, t, n) {
            for (var a in e)
                if (void 0 !== n[a] && (!r.properties || a in r.properties)) {
                    var i = e[a]
                      , o = x(e, [a].map(k));
                    return Array.isArray(i) ? r = we(r, i) : re(i) && (r = Ce(r, t, n, a, i)),
                    Ee(o, r, t, n)
                }
            return r
        }
        function we(e, r) {
            return r ? O({}, e, {
                required: Array.isArray(e.required) ? Array.from(new Set([].concat(e.required, r))) : r
            }) : e
        }
        function Ce(e, r, t, n, a) {
            var i = be(a, r, t)
              , o = i.oneOf;
            if (e = Oe(e, x(i, ["oneOf"])),
            void 0 === o)
                return e;
            if (!Array.isArray(o))
                throw new Error("invalid: it is some " + typeof o + " instead of an array");
            var s = o.map((function(e) {
                return e.hasOwnProperty("$ref") ? ge(e, r, t) : e
            }
            ));
            return function(e, r, t, n, a) {
                var i = a.filter((function(e) {
                    if (!e.properties)
                        return !1;
                    var r = e.properties[n];
                    if (r) {
                        var a, i = {
                            type: "object",
                            properties: (a = {},
                            a[n] = r,
                            a)
                        };
                        return 0 === $(t, i).errors.length
                    }
                }
                ));
                if (1 !== i.length)
                    return console.warn("ignoring oneOf in dependencies because there isn't exactly one subschema that is valid"),
                    e;
                var o = i[0]
                  , s = x(o.properties, [n].map(k))
                  , l = O({}, o, {
                    properties: s
                });
                return Oe(e, be(l, r, t))
            }(e, r, t, n, s)
        }
        function Oe(e, r) {
            var t = Object.assign({}, e);
            return Object.keys(r).reduce((function(t, n) {
                var a = e ? e[n] : {}
                  , i = r[n];
                return e && e.hasOwnProperty(n) && re(i) ? t[n] = Oe(a, i) : e && r && ("object" === H(e) || "object" === H(r)) && "required" === n && Array.isArray(a) && Array.isArray(i) ? t[n] = (0,
                y.Z)(a, i) : t[n] = i,
                t
            }
            ), t)
        }
        function Fe(e) {
            return "[object Arguments]" === Object.prototype.toString.call(e)
        }
        function De(e, r, t, n) {
            if (void 0 === t && (t = []),
            void 0 === n && (n = []),
            e === r)
                return !0;
            if ("function" === typeof e || "function" === typeof r)
                return !0;
            if ("object" !== typeof e || "object" !== typeof r)
                return !1;
            if (null === e || null === r)
                return !1;
            if (e instanceof Date && r instanceof Date)
                return e.getTime() === r.getTime();
            if (e instanceof RegExp && r instanceof RegExp)
                return e.source === r.source && e.global === r.global && e.multiline === r.multiline && e.lastIndex === r.lastIndex && e.ignoreCase === r.ignoreCase;
            if (Fe(e) || Fe(r)) {
                if (!Fe(e) || !Fe(r))
                    return !1;
                var a = Array.prototype.slice;
                return De(a.call(e), a.call(r), t, n)
            }
            if (e.constructor !== r.constructor)
                return !1;
            var i = Object.keys(e)
              , o = Object.keys(r);
            if (0 === i.length && 0 === o.length)
                return !0;
            if (i.length !== o.length)
                return !1;
            for (var s, l = t.length; l--; )
                if (t[l] === e)
                    return n[l] === r;
            t.push(e),
            n.push(r),
            i.sort(),
            o.sort();
            for (var u = i.length - 1; u >= 0; u--)
                if (i[u] !== o[u])
                    return !1;
            for (var d = i.length - 1; d >= 0; d--)
                if (!De(e[s = i[d]], r[s], t, n))
                    return !1;
            return t.pop(),
            n.pop(),
            !0
        }
        function xe(e, r, t) {
            var n = e.props
              , a = e.state;
            return !De(n, r) || !De(a, t)
        }
        function ke(e, r, t, n, a, i) {
            void 0 === n && (n = {}),
            void 0 === a && (a = "root"),
            void 0 === i && (i = "_");
            var o = {
                $id: r || a
            };
            if ("$ref"in e || "dependencies"in e || "allOf"in e)
                return ke(be(e, t, n), r, t, n, a, i);
            if ("items"in e && !e.items.$ref)
                return ke(e.items, r, t, n, a, i);
            if ("object" !== e.type)
                return o;
            for (var s in e.properties || {}) {
                var l = e.properties[s]
                  , u = o.$id + i + s;
                o[s] = ke(re(l) ? l : {}, u, t, (n || {})[s], a, i)
            }
            return o
        }
        function Ae(e, r, t, n) {
            void 0 === r && (r = ""),
            void 0 === n && (n = {});
            var a = {
                $name: r.replace(/^\./, "")
            };
            if ("$ref"in e || "dependencies"in e || "allOf"in e)
                return Ae(be(e, t, n), r, t, n);
            if (e.hasOwnProperty("additionalProperties") && (a.__rjsf_additionalProperties = !0),
            e.hasOwnProperty("items") && Array.isArray(n))
                n.forEach((function(n, i) {
                    a[i] = Ae(e.items, r + "." + i, t, n)
                }
                ));
            else if (e.hasOwnProperty("properties"))
                for (var i in e.properties)
                    a[i] = Ae(e.properties[i], r + "." + i, t, (n || {})[i]);
            return a
        }
        function Ne(e, r) {
            if (void 0 === r && (r = !0),
            !e)
                return {
                    year: -1,
                    month: -1,
                    day: -1,
                    hour: r ? -1 : 0,
                    minute: r ? -1 : 0,
                    second: r ? -1 : 0
                };
            var t = new Date(e);
            if (Number.isNaN(t.getTime()))
                throw new Error("Unable to parse date " + e);
            return {
                year: t.getUTCFullYear(),
                month: t.getUTCMonth() + 1,
                day: t.getUTCDate(),
                hour: r ? t.getUTCHours() : 0,
                minute: r ? t.getUTCMinutes() : 0,
                second: r ? t.getUTCSeconds() : 0
            }
        }
        function Pe(e, r) {
            var t = e.year
              , n = e.month
              , a = e.day
              , i = e.hour
              , o = void 0 === i ? 0 : i
              , s = e.minute
              , l = void 0 === s ? 0 : s
              , u = e.second
              , d = void 0 === u ? 0 : u;
            void 0 === r && (r = !0);
            var c = Date.UTC(t, n - 1, a, o, l, d)
              , m = new Date(c).toJSON();
            return r ? m : m.slice(0, 10)
        }
        function je(e) {
            if (!e)
                return "";
            var r = new Date(e);
            return Te(r.getFullYear(), 4) + "-" + Te(r.getMonth() + 1, 2) + "-" + Te(r.getDate(), 2) + "T" + Te(r.getHours(), 2) + ":" + Te(r.getMinutes(), 2) + ":" + Te(r.getSeconds(), 2) + "." + Te(r.getMilliseconds(), 3)
        }
        function _e(e) {
            if (e)
                return new Date(e).toJSON()
        }
        function Te(e, r) {
            for (var t = String(e); t.length < r; )
                t = "0" + t;
            return t
        }
        function Ie(e) {
            var r, t = e.split(","), n = t[0].split(";"), a = n[0].replace("data:", ""), i = n.filter((function(e) {
                return "name" === e.split("=")[0]
            }
            ));
            r = 1 !== i.length ? "unknown" : i[0].split("=")[1];
            for (var o = atob(t[1]), s = [], l = 0; l < o.length; l++)
                s.push(o.charCodeAt(l));
            return {
                blob: new window.Blob([new Uint8Array(s)],{
                    type: a
                }),
                name: r
            }
        }
        function We(e) {
            var r = {};
            return e.multipleOf && (r.step = e.multipleOf),
            (e.minimum || 0 === e.minimum) && (r.min = e.minimum),
            (e.maximum || 0 === e.maximum) && (r.max = e.maximum),
            r
        }
        function Be(e, r, t) {
            if (void 0 === e)
                return 0;
            for (var n = 0; n < r.length; n++) {
                var a = r[n];
                if (a.properties) {
                    var i = {
                        anyOf: Object.keys(a.properties).map((function(e) {
                            return {
                                required: [e]
                            }
                        }
                        ))
                    }
                      , o = void 0;
                    if (a.anyOf) {
                        var s = O({}, a);
                        s.allOf ? s.allOf = s.allOf.slice() : s.allOf = [],
                        s.allOf.push(i),
                        o = s
                    } else
                        o = Object.assign({}, a, i);
                    if (delete o.required,
                    M(o, e, t))
                        return n
                } else if (M(a, e, t))
                    return n
            }
            return 0
        }
        function qe(e) {
            return !!e.const || (!(!e.enum || 1 !== e.enum.length || !0 !== e.enum[0]) || (e.anyOf && 1 === e.anyOf.length ? qe(e.anyOf[0]) : e.oneOf && 1 === e.oneOf.length ? qe(e.oneOf[0]) : !!e.allOf && e.allOf.some(qe)))
        }
        var Re = {
            __proto__: null,
            ADDITIONAL_PROPERTY_FLAG: V,
            canExpand: L,
            getSchemaType: H,
            getWidget: z,
            hasWidget: Y,
            getDefaultFormState: Z,
            mergeDefaultsWithFormData: G,
            getUiOptions: Q,
            getSubmitButtonOptions: X,
            getDisplayLabel: ee,
            isObject: re,
            mergeObjects: te,
            asNumber: ne,
            orderProperties: ae,
            isConstant: ie,
            toConstant: oe,
            isSelect: se,
            isMultiSelect: le,
            isFilesArray: ue,
            isFixedItems: de,
            isCustomWidget: ce,
            allowAdditionalItems: me,
            optionsList: pe,
            findSchemaDefinition: fe,
            guessType: he,
            stubExistingAdditionalProperties: ye,
            resolveSchema: ve,
            retrieveSchema: be,
            mergeSchemas: Oe,
            deepEquals: De,
            shouldRender: xe,
            toIdSchema: ke,
            toPathSchema: Ae,
            parseDateString: Ne,
            toDateString: Pe,
            utcToLocal: je,
            localToUTC: _e,
            pad: Te,
            dataURItoBlob: Ie,
            rangeSpec: We,
            getMatchingOption: Be,
            schemaRequiresTrueValue: qe
        };
        function $e(e) {
            var r = e.TitleField
              , t = e.idSchema
              , a = e.title
              , i = e.required;
            if (!a)
                return null;
            var o = t.$id + "__title";
            return n.createElement(r, {
                id: o,
                title: a,
                required: i
            })
        }
        function Ue(e) {
            var r = e.DescriptionField
              , t = e.idSchema
              , a = e.description;
            if (!a)
                return null;
            var i = t.$id + "__description";
            return n.createElement(r, {
                id: i,
                description: a
            })
        }
        function Me(e) {
            var r = {
                flex: 1,
                paddingLeft: 6,
                paddingRight: 6,
                fontWeight: "bold"
            };
            return n.createElement("div", {
                key: e.key,
                className: e.className
            }, n.createElement("div", {
                className: e.hasToolbar ? "col-xs-9" : "col-xs-12"
            }, e.children), e.hasToolbar && n.createElement("div", {
                className: "col-xs-3 array-item-toolbox"
            }, n.createElement("div", {
                className: "btn-group",
                style: {
                    display: "flex",
                    justifyContent: "space-around"
                }
            }, (e.hasMoveUp || e.hasMoveDown) && n.createElement(A, {
                icon: "arrow-up",
                "aria-label": "Move up",
                className: "array-item-move-up",
                tabIndex: "-1",
                style: r,
                disabled: e.disabled || e.readonly || !e.hasMoveUp,
                onClick: e.onReorderClick(e.index, e.index - 1)
            }), (e.hasMoveUp || e.hasMoveDown) && n.createElement(A, {
                icon: "arrow-down",
                className: "array-item-move-down",
                "aria-label": "Move down",
                tabIndex: "-1",
                style: r,
                disabled: e.disabled || e.readonly || !e.hasMoveDown,
                onClick: e.onReorderClick(e.index, e.index + 1)
            }), e.hasRemove && n.createElement(A, {
                type: "danger",
                icon: "remove",
                "aria-label": "Remove",
                className: "array-item-remove",
                tabIndex: "-1",
                style: r,
                disabled: e.disabled || e.readonly,
                onClick: e.onDropIndexClick(e.index)
            }))))
        }
        function Ve(e) {
            return n.createElement("fieldset", {
                className: e.className,
                id: e.idSchema.$id
            }, n.createElement($e, {
                key: "array-field-title-" + e.idSchema.$id,
                TitleField: e.TitleField,
                idSchema: e.idSchema,
                title: e.uiSchema["ui:title"] || e.title,
                required: e.required
            }), (e.uiSchema["ui:description"] || e.schema.description) && n.createElement("div", {
                className: "field-description",
                key: "field-description-" + e.idSchema.$id
            }, e.uiSchema["ui:description"] || e.schema.description), n.createElement("div", {
                className: "row array-item-list",
                key: "array-item-list-" + e.idSchema.$id
            }, e.items && e.items.map(Me)), e.canAdd && n.createElement(N, {
                className: "array-item-add",
                onClick: e.onAddClick,
                disabled: e.disabled || e.readonly
            }))
        }
        function Ke(e) {
            return n.createElement("fieldset", {
                className: e.className,
                id: e.idSchema.$id
            }, n.createElement($e, {
                key: "array-field-title-" + e.idSchema.$id,
                TitleField: e.TitleField,
                idSchema: e.idSchema,
                title: e.uiSchema["ui:title"] || e.title,
                required: e.required
            }), (e.uiSchema["ui:description"] || e.schema.description) && n.createElement(Ue, {
                key: "array-field-description-" + e.idSchema.$id,
                DescriptionField: e.DescriptionField,
                idSchema: e.idSchema,
                description: e.uiSchema["ui:description"] || e.schema.description
            }), n.createElement("div", {
                className: "row array-item-list",
                key: "array-item-list-" + e.idSchema.$id
            }, e.items && e.items.map((function(e) {
                return Me(e)
            }
            ))), e.canAdd && n.createElement(N, {
                className: "array-item-add",
                onClick: e.onAddClick,
                disabled: e.disabled || e.readonly
            }))
        }
        function Le() {
            return (0,
            E.x0)()
        }
        function He(e) {
            return Array.isArray(e) ? e.map((function(e) {
                return {
                    key: Le(),
                    item: e
                }
            }
            )) : []
        }
        function ze(e) {
            return e.map((function(e) {
                return e.item
            }
            ))
        }
        var Ye = function(e) {
            function r(r) {
                var t;
                (t = e.call(this, r) || this)._getNewFormDataRow = function() {
                    var e = t.props
                      , r = e.schema
                      , n = e.registry.rootSchema
                      , a = r.items;
                    return de(r) && me(r) && (a = r.additionalItems),
                    Z(a, void 0, n)
                }
                ,
                t.onAddClick = function(e) {
                    e && e.preventDefault();
                    var r = t.props.onChange
                      , n = {
                        key: Le(),
                        item: t._getNewFormDataRow()
                    }
                      , a = [].concat(t.state.keyedFormData, [n]);
                    t.setState({
                        keyedFormData: a,
                        updatedKeyedFormData: !0
                    }, (function() {
                        return r(ze(a))
                    }
                    ))
                }
                ,
                t.onAddIndexClick = function(e) {
                    return function(r) {
                        r && r.preventDefault();
                        var n = t.props.onChange
                          , a = {
                            key: Le(),
                            item: t._getNewFormDataRow()
                        }
                          , i = [].concat(t.state.keyedFormData);
                        i.splice(e, 0, a),
                        t.setState({
                            keyedFormData: i,
                            updatedKeyedFormData: !0
                        }, (function() {
                            return n(ze(i))
                        }
                        ))
                    }
                }
                ,
                t.onDropIndexClick = function(e) {
                    return function(r) {
                        r && r.preventDefault();
                        var n, a = t.props.onChange, i = t.state.keyedFormData;
                        if (t.props.errorSchema) {
                            n = {};
                            var o = t.props.errorSchema;
                            for (var s in o)
                                (s = parseInt(s)) < e ? n[s] = o[s] : s > e && (n[s - 1] = o[s])
                        }
                        var l = i.filter((function(r, t) {
                            return t !== e
                        }
                        ));
                        t.setState({
                            keyedFormData: l,
                            updatedKeyedFormData: !0
                        }, (function() {
                            return a(ze(l), n)
                        }
                        ))
                    }
                }
                ,
                t.onReorderClick = function(e, r) {
                    return function(n) {
                        n && (n.preventDefault(),
                        n.target.blur());
                        var a, i = t.props.onChange;
                        if (t.props.errorSchema) {
                            a = {};
                            var o = t.props.errorSchema;
                            for (var s in o)
                                s == e ? a[r] = o[e] : s == r ? a[e] = o[r] : a[s] = o[s]
                        }
                        var l = t.state.keyedFormData;
                        var u = function() {
                            var t = l.slice();
                            return t.splice(e, 1),
                            t.splice(r, 0, l[e]),
                            t
                        }();
                        t.setState({
                            keyedFormData: u
                        }, (function() {
                            return i(ze(u), a)
                        }
                        ))
                    }
                }
                ,
                t.onChangeForIndex = function(e) {
                    return function(r, n) {
                        var a, i = t.props, o = i.formData;
                        (0,
                        i.onChange)(o.map((function(t, n) {
                            return e === n ? "undefined" === typeof r ? null : r : t
                        }
                        )), n && t.props.errorSchema && O({}, t.props.errorSchema, ((a = {})[e] = n,
                        a)))
                    }
                }
                ,
                t.onSelectChange = function(e) {
                    t.props.onChange(e)
                }
                ;
                var n = He(r.formData);
                return t.state = {
                    keyedFormData: n,
                    updatedKeyedFormData: !1
                },
                t
            }
            F(r, e),
            r.getDerivedStateFromProps = function(e, r) {
                if (r.updatedKeyedFormData)
                    return {
                        updatedKeyedFormData: !1
                    };
                var t = e.formData || []
                  , n = r.keyedFormData || [];
                return {
                    keyedFormData: t.length === n.length ? n.map((function(e, r) {
                        return {
                            key: e.key,
                            item: t[r]
                        }
                    }
                    )) : He(t)
                }
            }
            ;
            var t = r.prototype;
            return t.isItemRequired = function(e) {
                return Array.isArray(e.type) ? !d()(e.type, "null") : "null" !== e.type
            }
            ,
            t.canAddItem = function(e) {
                var r = this.props
                  , t = r.schema
                  , n = Q(r.uiSchema).addable;
                return !1 !== n && (n = void 0 === t.maxItems || e.length < t.maxItems),
                n
            }
            ,
            t.render = function() {
                var e = this.props
                  , r = e.schema
                  , t = e.uiSchema
                  , a = e.idSchema
                  , i = e.registry
                  , o = i.rootSchema;
                if (!r.hasOwnProperty("items")) {
                    var s = i.fields.UnsupportedField;
                    return n.createElement(s, {
                        schema: r,
                        idSchema: a,
                        reason: "Missing items definition"
                    })
                }
                return le(r, o) ? this.renderMultiSelect() : ce(t) ? this.renderCustomWidget() : de(r) ? this.renderFixedArray() : ue(r, t, o) ? this.renderFiles() : this.renderNormalArray()
            }
            ,
            t.renderNormalArray = function() {
                var e = this
                  , r = this.props
                  , t = r.schema
                  , a = r.uiSchema
                  , i = r.errorSchema
                  , o = r.idSchema
                  , s = r.name
                  , l = r.required
                  , u = r.disabled
                  , d = r.readonly
                  , c = r.hideError
                  , m = r.autofocus
                  , p = r.registry
                  , f = r.onBlur
                  , h = r.onFocus
                  , y = r.idPrefix
                  , v = r.idSeparator
                  , g = void 0 === v ? "_" : v
                  , b = r.rawErrors
                  , S = void 0 === t.title ? s : t.title
                  , E = p.ArrayFieldTemplate
                  , w = p.rootSchema
                  , C = p.fields
                  , O = p.formContext
                  , F = C.TitleField
                  , D = C.DescriptionField
                  , x = be(t.items, w)
                  , k = ze(this.state.keyedFormData)
                  , A = {
                    canAdd: this.canAddItem(k),
                    items: this.state.keyedFormData.map((function(r, n) {
                        var s = r.key
                          , l = r.item
                          , u = be(t.items, w, l)
                          , d = i ? i[n] : void 0
                          , c = ke(u, o.$id + g + n, w, l, y, g);
                        return e.renderArrayFieldItem({
                            key: s,
                            index: n,
                            canMoveUp: n > 0,
                            canMoveDown: n < k.length - 1,
                            itemSchema: u,
                            itemIdSchema: c,
                            itemErrorSchema: d,
                            itemData: l,
                            itemUiSchema: a.items,
                            autofocus: m && 0 === n,
                            onBlur: f,
                            onFocus: h
                        })
                    }
                    )),
                    className: "field field-array field-array-of-" + x.type,
                    DescriptionField: D,
                    disabled: u,
                    idSchema: o,
                    uiSchema: a,
                    onAddClick: this.onAddClick,
                    readonly: d,
                    hideError: c,
                    required: l,
                    schema: t,
                    title: S,
                    TitleField: F,
                    formContext: O,
                    formData: k,
                    rawErrors: b,
                    registry: p
                }
                  , N = a["ui:ArrayFieldTemplate"] || E || Ke;
                return n.createElement(N, A)
            }
            ,
            t.renderCustomWidget = function() {
                var e = this.props
                  , r = e.schema
                  , t = e.idSchema
                  , a = e.uiSchema
                  , i = e.disabled
                  , o = e.readonly
                  , s = e.hideError
                  , l = e.required
                  , u = e.placeholder
                  , d = e.autofocus
                  , c = e.onBlur
                  , m = e.onFocus
                  , p = e.formData
                  , f = e.registry
                  , h = e.rawErrors
                  , y = e.name
                  , v = f.widgets
                  , g = f.formContext
                  , b = r.title || y
                  , S = O({}, Q(a))
                  , E = S.widget
                  , w = x(S, ["widget"])
                  , C = z(r, E, v);
                return n.createElement(C, {
                    id: t && t.$id,
                    multiple: !0,
                    onChange: this.onSelectChange,
                    onBlur: c,
                    onFocus: m,
                    options: w,
                    schema: r,
                    uiSchema: a,
                    registry: f,
                    value: p,
                    disabled: i,
                    readonly: o,
                    hideError: s,
                    required: l,
                    label: b,
                    placeholder: u,
                    formContext: g,
                    autofocus: d,
                    rawErrors: h
                })
            }
            ,
            t.renderMultiSelect = function() {
                var e = this.props
                  , r = e.schema
                  , t = e.idSchema
                  , a = e.uiSchema
                  , i = e.formData
                  , o = e.disabled
                  , s = e.readonly
                  , l = e.required
                  , u = e.placeholder
                  , d = e.autofocus
                  , c = e.onBlur
                  , m = e.onFocus
                  , p = e.registry
                  , f = e.rawErrors
                  , h = e.name
                  , y = this.props.formData
                  , v = p.widgets
                  , g = p.rootSchema
                  , b = p.formContext
                  , S = be(r.items, g, i)
                  , E = r.title || h
                  , w = pe(S)
                  , C = O({}, Q(a), {
                    enumOptions: w
                })
                  , F = C.widget
                  , D = void 0 === F ? "select" : F
                  , k = x(C, ["widget"])
                  , A = z(r, D, v);
                return n.createElement(A, {
                    id: t && t.$id,
                    multiple: !0,
                    onChange: this.onSelectChange,
                    onBlur: c,
                    onFocus: m,
                    options: k,
                    schema: r,
                    uiSchema: a,
                    registry: p,
                    value: y,
                    disabled: o,
                    readonly: s,
                    required: l,
                    label: E,
                    placeholder: u,
                    formContext: b,
                    autofocus: d,
                    rawErrors: f
                })
            }
            ,
            t.renderFiles = function() {
                var e = this.props
                  , r = e.schema
                  , t = e.uiSchema
                  , a = e.idSchema
                  , i = e.name
                  , o = e.disabled
                  , s = e.readonly
                  , l = e.autofocus
                  , u = e.onBlur
                  , d = e.onFocus
                  , c = e.registry
                  , m = e.rawErrors
                  , p = r.title || i
                  , f = this.props.formData
                  , h = c.widgets
                  , y = c.formContext
                  , v = Q(t)
                  , g = v.widget
                  , b = void 0 === g ? "files" : g
                  , S = x(v, ["widget"])
                  , E = z(r, b, h);
                return n.createElement(E, {
                    options: S,
                    id: a && a.$id,
                    multiple: !0,
                    onChange: this.onSelectChange,
                    onBlur: u,
                    onFocus: d,
                    schema: r,
                    uiSchema: t,
                    title: p,
                    value: f,
                    disabled: o,
                    readonly: s,
                    registry: c,
                    formContext: y,
                    autofocus: l,
                    rawErrors: m
                })
            }
            ,
            t.renderFixedArray = function() {
                var e = this
                  , r = this.props
                  , t = r.schema
                  , a = r.uiSchema
                  , i = r.formData
                  , o = r.errorSchema
                  , s = r.idPrefix
                  , l = r.idSeparator
                  , u = void 0 === l ? "_" : l
                  , d = r.idSchema
                  , c = r.name
                  , m = r.required
                  , p = r.disabled
                  , f = r.readonly
                  , h = r.autofocus
                  , y = r.registry
                  , v = r.onBlur
                  , g = r.onFocus
                  , b = r.rawErrors
                  , S = t.title || c
                  , E = this.props.formData
                  , w = y.ArrayFieldTemplate
                  , C = y.rootSchema
                  , O = y.fields
                  , F = y.formContext
                  , D = O.TitleField
                  , x = t.items.map((function(e, r) {
                    return be(e, C, i[r])
                }
                ))
                  , k = me(t) ? be(t.additionalItems, C, i) : null;
                (!E || E.length < x.length) && (E = (E = E || []).concat(new Array(x.length - E.length)));
                var A = {
                    canAdd: this.canAddItem(E) && k,
                    className: "field field-array field-array-fixed-items",
                    disabled: p,
                    idSchema: d,
                    formData: i,
                    items: this.state.keyedFormData.map((function(r, n) {
                        var i = r.key
                          , l = r.item
                          , c = n >= x.length
                          , m = c ? be(t.additionalItems, C, l) : x[n]
                          , p = ke(m, d.$id + u + n, C, l, s, u)
                          , f = c ? a.additionalItems || {} : Array.isArray(a.items) ? a.items[n] : a.items || {}
                          , y = o ? o[n] : void 0;
                        return e.renderArrayFieldItem({
                            key: i,
                            index: n,
                            canRemove: c,
                            canMoveUp: n >= x.length + 1,
                            canMoveDown: c && n < E.length - 1,
                            itemSchema: m,
                            itemData: l,
                            itemUiSchema: f,
                            itemIdSchema: p,
                            itemErrorSchema: y,
                            autofocus: h && 0 === n,
                            onBlur: v,
                            onFocus: g
                        })
                    }
                    )),
                    onAddClick: this.onAddClick,
                    readonly: f,
                    required: m,
                    registry: y,
                    schema: t,
                    uiSchema: a,
                    title: S,
                    TitleField: D,
                    formContext: F,
                    rawErrors: b
                }
                  , N = a["ui:ArrayFieldTemplate"] || w || Ve;
                return n.createElement(N, A)
            }
            ,
            t.renderArrayFieldItem = function(e) {
                var r = e.key
                  , t = e.index
                  , a = e.canRemove
                  , i = void 0 === a || a
                  , o = e.canMoveUp
                  , s = void 0 === o || o
                  , l = e.canMoveDown
                  , u = void 0 === l || l
                  , d = e.itemSchema
                  , c = e.itemData
                  , m = e.itemUiSchema
                  , p = e.itemIdSchema
                  , f = e.itemErrorSchema
                  , h = e.autofocus
                  , y = e.onBlur
                  , v = e.onFocus
                  , g = e.rawErrors
                  , b = this.props
                  , S = b.disabled
                  , E = b.readonly
                  , w = b.uiSchema
                  , C = b.registry.fields.SchemaField
                  , O = Q(w)
                  , F = O.orderable
                  , D = void 0 === F || F
                  , x = O.removable
                  , k = {
                    moveUp: D && s,
                    moveDown: D && u,
                    remove: (void 0 === x || x) && i
                };
                return k.toolbar = Object.keys(k).some((function(e) {
                    return k[e]
                }
                )),
                {
                    children: n.createElement(C, {
                        index: t,
                        schema: d,
                        uiSchema: m,
                        formData: c,
                        errorSchema: f,
                        idPrefix: this.props.idPrefix,
                        idSeparator: this.props.idSeparator,
                        idSchema: p,
                        required: this.isItemRequired(d),
                        onChange: this.onChangeForIndex(t),
                        onBlur: y,
                        onFocus: v,
                        registry: this.props.registry,
                        disabled: this.props.disabled,
                        readonly: this.props.readonly,
                        hideError: this.props.hideError,
                        autofocus: h,
                        rawErrors: g
                    }),
                    className: "array-item",
                    disabled: S,
                    hasToolbar: k.toolbar,
                    hasMoveUp: k.moveUp,
                    hasMoveDown: k.moveDown,
                    hasRemove: k.remove,
                    index: t,
                    key: r,
                    onAddIndexClick: this.onAddIndexClick,
                    onDropIndexClick: this.onDropIndexClick,
                    onReorderClick: this.onReorderClick,
                    readonly: E
                }
            }
            ,
            C(r, [{
                key: "itemTitle",
                get: function() {
                    var e = this.props.schema;
                    return e.items.title || e.items.description || "Item"
                }
            }]),
            r
        }(n.Component);
        function Je(e) {
            var r, t = e.schema, a = e.name, i = e.uiSchema, o = e.idSchema, s = e.formData, l = e.registry, u = e.required, d = e.disabled, c = e.readonly, m = e.autofocus, p = e.onChange, f = e.onFocus, h = e.onBlur, y = e.rawErrors, v = t.title, g = l.widgets, b = l.formContext, S = l.fields, E = Q(i), w = E.widget, C = void 0 === w ? "checkbox" : w, F = x(E, ["widget"]), D = z(t, C, g);
            return r = Array.isArray(t.oneOf) ? pe({
                oneOf: t.oneOf.map((function(e) {
                    return O({}, e, {
                        title: e.title || (!0 === e.const ? "Yes" : "No")
                    })
                }
                ))
            }) : pe({
                enum: t.enum || [!0, !1],
                enumNames: t.enumNames || (t.enum && !1 === t.enum[0] ? ["No", "Yes"] : ["Yes", "No"])
            }),
            n.createElement(D, {
                options: O({}, F, {
                    enumOptions: r
                }),
                schema: t,
                uiSchema: i,
                id: o && o.$id,
                onChange: p,
                onFocus: f,
                onBlur: h,
                label: void 0 === v ? a : v,
                value: s,
                required: u,
                disabled: d,
                readonly: c,
                registry: l,
                formContext: b,
                autofocus: m,
                rawErrors: y,
                DescriptionField: S.DescriptionField
            })
        }
        Ye.defaultProps = {
            uiSchema: {},
            formData: [],
            idSchema: {},
            required: !1,
            disabled: !1,
            readonly: !1,
            autofocus: !1
        },
        Je.defaultProps = {
            uiSchema: {},
            disabled: !1,
            readonly: !1,
            autofocus: !1
        };
        var Ze = function(e) {
            function r(r) {
                var t;
                (t = e.call(this, r) || this).onOptionChange = function(e) {
                    var r = parseInt(e, 10)
                      , n = t.props
                      , a = n.formData
                      , i = n.onChange
                      , o = n.options
                      , s = n.registry.rootSchema
                      , l = be(o[r], s, a)
                      , u = void 0;
                    if ("object" === he(a) && ("object" === l.type || l.properties)) {
                        u = Object.assign({}, a);
                        var d = o.slice();
                        d.splice(r, 1);
                        var c = d
                          , m = Array.isArray(c)
                          , p = 0;
                        for (c = m ? c : c[Symbol.iterator](); ; ) {
                            var f;
                            if (m) {
                                if (p >= c.length)
                                    break;
                                f = c[p++]
                            } else {
                                if ((p = c.next()).done)
                                    break;
                                f = p.value
                            }
                            var h = f;
                            if (h.properties)
                                for (var y in h.properties)
                                    u.hasOwnProperty(y) && delete u[y]
                        }
                    }
                    i(Z(o[r], u, s)),
                    t.setState({
                        selectedOption: parseInt(e, 10)
                    })
                }
                ;
                var n = t.props
                  , a = n.formData
                  , i = n.options;
                return t.state = {
                    selectedOption: t.getMatchingOption(a, i)
                },
                t
            }
            F(r, e);
            var t = r.prototype;
            return t.componentDidUpdate = function(e, r) {
                if (!De(this.props.formData, e.formData) && this.props.idSchema.$id === e.idSchema.$id) {
                    var t = this.getMatchingOption(this.props.formData, this.props.options);
                    if (!r || t === this.state.selectedOption)
                        return;
                    this.setState({
                        selectedOption: t
                    })
                }
            }
            ,
            t.getMatchingOption = function(e, r) {
                var t = Be(e, r, this.props.registry.rootSchema);
                return 0 !== t ? t : this && this.state ? this.state.selectedOption : 0
            }
            ,
            t.render = function() {
                var e, r = this.props, t = r.baseType, a = r.disabled, i = r.readonly, o = r.hideError, s = r.errorSchema, l = r.formData, u = r.idPrefix, d = r.idSeparator, c = r.idSchema, m = r.onBlur, p = r.onChange, f = r.onFocus, h = r.options, y = r.registry, v = r.uiSchema, g = r.schema, b = y.fields.SchemaField, S = y.widgets, E = this.state.selectedOption, w = Q(v), C = w.widget, F = void 0 === C ? "select" : C, D = x(w, ["widget"]), k = z({
                    type: "number"
                }, F, S), A = h[E] || null;
                A && (e = A.type ? A : Object.assign({}, A, {
                    type: t
                }));
                var N = h.map((function(e, r) {
                    return {
                        label: e.title || "Option " + (r + 1),
                        value: r
                    }
                }
                ));
                return n.createElement("div", {
                    className: "panel panel-default panel-body"
                }, n.createElement("div", {
                    className: "form-group"
                }, n.createElement(k, O({
                    id: c.$id + (g.oneOf ? "__oneof_select" : "__anyof_select"),
                    schema: {
                        type: "number",
                        default: 0
                    },
                    onChange: this.onOptionChange,
                    onBlur: m,
                    onFocus: f,
                    value: E,
                    options: {
                        enumOptions: N
                    },
                    registry: y
                }, D))), null !== A && n.createElement(b, {
                    schema: e,
                    uiSchema: v,
                    errorSchema: s,
                    idSchema: c,
                    idPrefix: u,
                    idSeparator: d,
                    formData: l,
                    onChange: p,
                    onBlur: m,
                    onFocus: f,
                    registry: y,
                    disabled: a,
                    readonly: i,
                    hideError: o
                }))
            }
            ,
            r
        }(n.Component);
        Ze.defaultProps = {
            disabled: !1,
            readonly: !1,
            hideError: !1,
            errorSchema: {},
            idSchema: {},
            uiSchema: {}
        };
        var Ge = /\.([0-9]*0)*$/
          , Qe = /[0.]0*$/
          , Xe = function(e) {
            function r(r) {
                var t;
                return (t = e.call(this, r) || this).handleChange = function(e) {
                    t.setState({
                        lastValue: e
                    }),
                    "." === ("" + e).charAt(0) && (e = "0" + e);
                    var r = "string" === typeof e && e.match(Ge) ? ne(e.replace(Qe, "")) : ne(e);
                    t.props.onChange(r)
                }
                ,
                t.state = {
                    lastValue: r.value
                },
                t
            }
            return F(r, e),
            r.prototype.render = function() {
                var e = this.props.registry.fields.StringField
                  , r = this.props
                  , t = r.formData
                  , a = x(r, ["formData"])
                  , i = this.state.lastValue
                  , o = t;
                if ("string" === typeof i && "number" === typeof o) {
                    var s = new RegExp(("" + o).replace(".", "\\.") + "\\.?0*$");
                    i.match(s) && (o = i)
                }
                return n.createElement(e, O({}, a, {
                    formData: o,
                    onChange: this.handleChange
                }))
            }
            ,
            r
        }(n.Component);
        function er(e) {
            var r = e.TitleField
              , t = e.DescriptionField;
            return n.createElement("fieldset", {
                id: e.idSchema.$id
            }, (e.uiSchema["ui:title"] || e.title) && n.createElement(r, {
                id: e.idSchema.$id + "__title",
                title: e.title || e.uiSchema["ui:title"],
                required: e.required,
                formContext: e.formContext
            }), e.description && n.createElement(t, {
                id: e.idSchema.$id + "__description",
                description: e.description,
                formContext: e.formContext
            }), e.properties.map((function(e) {
                return e.content
            }
            )), L(e.schema, e.uiSchema, e.formData) && n.createElement(N, {
                className: "object-property-expand",
                onClick: e.onAddClick(e.schema),
                disabled: e.disabled || e.readonly
            }))
        }
        Xe.defaultProps = {
            uiSchema: {}
        };
        var rr = function(e) {
            function r() {
                for (var r, t = arguments.length, n = new Array(t), a = 0; a < t; a++)
                    n[a] = arguments[a];
                return (r = e.call.apply(e, [this].concat(n)) || this).state = {
                    wasPropertyKeyModified: !1,
                    additionalProperties: {}
                },
                r.onPropertyChange = function(e, t) {
                    return void 0 === t && (t = !1),
                    function(n, a) {
                        var i, o;
                        void 0 === n && t && (n = "");
                        var s = O({}, r.props.formData, ((i = {})[e] = n,
                        i));
                        r.props.onChange(s, a && r.props.errorSchema && O({}, r.props.errorSchema, ((o = {})[e] = a,
                        o)))
                    }
                }
                ,
                r.onDropPropertyClick = function(e) {
                    return function(t) {
                        t.preventDefault();
                        var n = r.props
                          , a = n.onChange
                          , i = O({}, n.formData);
                        delete i[e],
                        a(i)
                    }
                }
                ,
                r.getAvailableKey = function(e, r) {
                    for (var t = 0, n = e; r.hasOwnProperty(n); )
                        n = e + "-" + ++t;
                    return n
                }
                ,
                r.onKeyChange = function(e) {
                    return function(t, n) {
                        var a, i;
                        if (e !== t) {
                            t = r.getAvailableKey(t, r.props.formData);
                            var o = O({}, r.props.formData)
                              , s = ((a = {})[e] = t,
                            a)
                              , l = Object.keys(o).map((function(e) {
                                var r;
                                return (r = {})[s[e] || e] = o[e],
                                r
                            }
                            ))
                              , u = Object.assign.apply(Object, [{}].concat(l));
                            r.setState({
                                wasPropertyKeyModified: !0
                            }),
                            r.props.onChange(u, n && r.props.errorSchema && O({}, r.props.errorSchema, ((i = {})[t] = n,
                            i)))
                        }
                    }
                }
                ,
                r.handleAddClick = function(e) {
                    return function() {
                        var t = e.additionalProperties.type
                          , n = O({}, r.props.formData);
                        if (e.additionalProperties.hasOwnProperty("$ref")) {
                            var a = r.props.registry;
                            t = be({
                                $ref: e.additionalProperties.$ref
                            }, a.rootSchema, r.props.formData).type
                        }
                        n[r.getAvailableKey("newKey", n)] = r.getDefaultValue(t),
                        r.props.onChange(n)
                    }
                }
                ,
                r
            }
            F(r, e);
            var t = r.prototype;
            return t.isRequired = function(e) {
                var r = this.props.schema;
                return Array.isArray(r.required) && -1 !== r.required.indexOf(e)
            }
            ,
            t.getDefaultValue = function(e) {
                switch (e) {
                case "string":
                default:
                    return "New Value";
                case "array":
                    return [];
                case "boolean":
                    return !1;
                case "null":
                    return null;
                case "number":
                    return 0;
                case "object":
                    return {}
                }
            }
            ,
            t.render = function() {
                var e, r = this, t = this.props, a = t.uiSchema, i = t.formData, o = t.errorSchema, s = t.idSchema, l = t.name, u = t.required, d = t.disabled, c = t.readonly, m = t.hideError, p = t.idPrefix, f = t.idSeparator, h = t.onBlur, y = t.onFocus, v = t.registry, g = v.rootSchema, b = v.fields, S = v.formContext, E = b.SchemaField, w = b.TitleField, C = b.DescriptionField, F = be(this.props.schema, g, i), D = void 0 === F.title ? l : F.title, x = a["ui:description"] || F.description;
                try {
                    e = ae(Object.keys(F.properties || {}), a["ui:order"])
                } catch (N) {
                    return n.createElement("div", null, n.createElement("p", {
                        className: "config-error",
                        style: {
                            color: "red"
                        }
                    }, "Invalid ", l || "root", " object field configuration:", n.createElement("em", null, N.message), "."), n.createElement("pre", null, JSON.stringify(F)))
                }
                var k = a["ui:ObjectFieldTemplate"] || v.ObjectFieldTemplate || er
                  , A = {
                    title: a["ui:title"] || D,
                    description: x,
                    TitleField: w,
                    DescriptionField: C,
                    properties: e.map((function(e) {
                        var t = F.properties[e].hasOwnProperty(V)
                          , l = t ? a.additionalProperties : a[e]
                          , g = l && "hidden" === l["ui:widget"];
                        return {
                            content: n.createElement(E, {
                                key: e,
                                name: e,
                                required: r.isRequired(e),
                                schema: F.properties[e],
                                uiSchema: l,
                                errorSchema: o[e],
                                idSchema: s[e],
                                idPrefix: p,
                                idSeparator: f,
                                formData: (i || {})[e],
                                wasPropertyKeyModified: r.state.wasPropertyKeyModified,
                                onKeyChange: r.onKeyChange(e),
                                onChange: r.onPropertyChange(e, t),
                                onBlur: h,
                                onFocus: y,
                                registry: v,
                                disabled: d,
                                readonly: c,
                                hideError: m,
                                onDropPropertyClick: r.onDropPropertyClick
                            }),
                            name: e,
                            readonly: c,
                            disabled: d,
                            required: u,
                            hidden: g
                        }
                    }
                    )),
                    readonly: c,
                    disabled: d,
                    required: u,
                    idSchema: s,
                    uiSchema: a,
                    schema: F,
                    formData: i,
                    formContext: S,
                    registry: v
                };
                return n.createElement(k, O({}, A, {
                    onAddClick: this.handleAddClick
                }))
            }
            ,
            r
        }(n.Component);
        rr.defaultProps = {
            uiSchema: {},
            formData: {},
            errorSchema: {},
            idSchema: {},
            required: !1,
            disabled: !1,
            readonly: !1
        };
        var tr = {
            array: "ArrayField",
            boolean: "BooleanField",
            integer: "NumberField",
            number: "NumberField",
            object: "ObjectField",
            string: "StringField",
            null: "NullField"
        };
        function nr(e) {
            var r = e.label
              , t = e.required
              , a = e.id;
            return r ? n.createElement("label", {
                className: "control-label",
                htmlFor: a
            }, r, t && n.createElement("span", {
                className: "required"
            }, "*")) : null
        }
        function ar(e) {
            var r = e.id
              , t = e.label
              , a = e.onChange;
            return n.createElement("input", {
                className: "form-control",
                type: "text",
                id: r,
                onBlur: function(e) {
                    return a(e.target.value)
                },
                defaultValue: t
            })
        }
        function ir(e) {
            var r = e.id
              , t = e.help;
            return t ? "string" === typeof t ? n.createElement("p", {
                id: r,
                className: "help-block"
            }, t) : n.createElement("div", {
                id: r,
                className: "help-block"
            }, t) : null
        }
        function or(e) {
            var r = e.errors
              , t = void 0 === r ? [] : r;
            return 0 === t.length ? null : n.createElement("div", null, n.createElement("ul", {
                className: "error-detail bs-callout bs-callout-info"
            }, t.filter((function(e) {
                return !!e
            }
            )).map((function(e, r) {
                return n.createElement("li", {
                    className: "text-danger",
                    key: r
                }, e)
            }
            ))))
        }
        function sr(e) {
            var r = e.id
              , t = e.label
              , a = e.children
              , i = e.errors
              , o = e.help
              , s = e.description
              , l = e.hidden
              , u = e.required
              , d = e.displayLabel;
            return l ? n.createElement("div", {
                className: "hidden"
            }, a) : n.createElement(lr, e, d && n.createElement(nr, {
                label: t,
                required: u,
                id: r
            }), d && s ? s : null, a, i, o)
        }
        function lr(e) {
            var r = e.id
              , t = e.classNames
              , a = e.disabled
              , i = e.label
              , o = e.onKeyChange
              , s = e.onDropPropertyClick
              , l = e.readonly
              , u = e.required
              , d = i + " Key";
            return e.schema.hasOwnProperty(V) ? n.createElement("div", {
                className: t
            }, n.createElement("div", {
                className: "row"
            }, n.createElement("div", {
                className: "col-xs-5 form-additional"
            }, n.createElement("div", {
                className: "form-group"
            }, n.createElement(nr, {
                label: d,
                required: u,
                id: r + "-key"
            }), n.createElement(ar, {
                label: i,
                required: u,
                id: r + "-key",
                onChange: o
            }))), n.createElement("div", {
                className: "form-additional form-group col-xs-5"
            }, e.children), n.createElement("div", {
                className: "col-xs-2"
            }, n.createElement(A, {
                type: "danger",
                icon: "remove",
                className: "array-item-remove btn-block",
                tabIndex: "-1",
                style: {
                    border: "0"
                },
                disabled: a || l,
                onClick: s(i)
            })))) : n.createElement("div", {
                className: t
            }, e.children)
        }
        function ur(e) {
            var r = e.uiSchema
              , t = e.formData
              , a = e.errorSchema
              , i = e.idPrefix
              , o = e.idSeparator
              , s = e.name
              , l = e.onChange
              , u = e.onKeyChange
              , d = e.onDropPropertyClick
              , c = e.required
              , m = e.registry
              , p = e.wasPropertyKeyModified
              , f = void 0 !== p && p
              , h = m.rootSchema
              , y = m.fields
              , v = m.formContext
              , g = r["ui:FieldTemplate"] || m.FieldTemplate || sr
              , b = e.idSchema
              , S = be(e.schema, h, t)
              , E = function(e, r, t, a) {
                var i = r["ui:field"];
                if ("function" === typeof i)
                    return i;
                if ("string" === typeof i && i in a)
                    return a[i];
                var o = tr[H(e)];
                return o || !e.anyOf && !e.oneOf ? o in a ? a[o] : function() {
                    var r = a.UnsupportedField;
                    return n.createElement(r, {
                        schema: e,
                        idSchema: t,
                        reason: "Unknown field type " + e.type
                    })
                }
                : function() {
                    return null
                }
            }(S, r, b = te(ke(S, null, h, t, i, o), b), y)
              , w = y.DescriptionField
              , C = Boolean(e.disabled || r["ui:disabled"])
              , F = Boolean(e.readonly || r["ui:readonly"] || e.schema.readOnly || S.readOnly)
              , D = r["ui:hideError"]
              , k = void 0 === D ? e.hideError : Boolean(D)
              , A = Boolean(e.autofocus || r["ui:autofocus"]);
            if (0 === Object.keys(S).length)
                return null;
            var N, P = ee(S, r, h), j = a.__errors, _ = x(a, ["__errors"]), T = n.createElement(E, O({}, e, {
                idSchema: b,
                schema: S,
                uiSchema: O({}, r, {
                    classNames: void 0
                }),
                disabled: C,
                readonly: F,
                hideError: k,
                autofocus: A,
                errorSchema: _,
                formContext: v,
                rawErrors: j
            })), I = b.$id;
            N = f ? s : r["ui:title"] || e.schema.title || S.title || s;
            var W = r["ui:description"] || e.schema.description || S.description
              , B = j
              , q = r["ui:help"]
              , R = "hidden" === r["ui:widget"]
              , $ = ["form-group", "field", "field-" + S.type];
            !k && B && B.length > 0 && $.push("field-error has-error has-danger"),
            $.push(r.classNames),
            $ = $.join(" ").trim();
            var U = {
                description: n.createElement(w, {
                    id: I + "__description",
                    description: W,
                    formContext: v
                }),
                rawDescription: W,
                help: n.createElement(ir, {
                    id: I + "__help",
                    help: q
                }),
                rawHelp: "string" === typeof q ? q : void 0,
                errors: k ? void 0 : n.createElement(or, {
                    errors: B
                }),
                rawErrors: k ? void 0 : B,
                id: I,
                label: N,
                hidden: R,
                onChange: l,
                onKeyChange: u,
                onDropPropertyClick: d,
                required: c,
                disabled: C,
                readonly: F,
                hideError: k,
                displayLabel: P,
                classNames: $,
                formContext: v,
                formData: t,
                fields: y,
                schema: S,
                uiSchema: r,
                registry: m
            }
              , M = m.fields.AnyOfField
              , V = m.fields.OneOfField;
            return n.createElement(g, U, n.createElement(n.Fragment, null, T, S.anyOf && !se(S) && n.createElement(M, {
                disabled: C,
                readonly: F,
                hideError: k,
                errorSchema: a,
                formData: t,
                idPrefix: i,
                idSchema: b,
                idSeparator: o,
                onBlur: e.onBlur,
                onChange: e.onChange,
                onFocus: e.onFocus,
                options: S.anyOf.map((function(e) {
                    return be(e, h, t)
                }
                )),
                baseType: S.type,
                registry: m,
                schema: S,
                uiSchema: r
            }), S.oneOf && !se(S) && n.createElement(V, {
                disabled: C,
                readonly: F,
                hideError: k,
                errorSchema: a,
                formData: t,
                idPrefix: i,
                idSchema: b,
                idSeparator: o,
                onBlur: e.onBlur,
                onChange: e.onChange,
                onFocus: e.onFocus,
                options: S.oneOf.map((function(e) {
                    return be(e, h, t)
                }
                )),
                baseType: S.type,
                registry: m,
                schema: S,
                uiSchema: r
            })))
        }
        sr.defaultProps = {
            hidden: !1,
            readonly: !1,
            required: !1,
            displayLabel: !0
        };
        var dr = function(e) {
            function r() {
                return e.apply(this, arguments) || this
            }
            F(r, e);
            var t = r.prototype;
            return t.shouldComponentUpdate = function(e, r) {
                return !De(this.props, e)
            }
            ,
            t.render = function() {
                return ur(this.props)
            }
            ,
            r
        }(n.Component);
        function cr(e) {
            var r = e.schema
              , t = e.name
              , a = e.uiSchema
              , i = e.idSchema
              , o = e.formData
              , s = e.required
              , l = e.disabled
              , u = e.readonly
              , d = e.autofocus
              , c = e.onChange
              , m = e.onBlur
              , p = e.onFocus
              , f = e.registry
              , h = e.rawErrors
              , y = r.title
              , v = r.format
              , g = f.widgets
              , b = f.formContext
              , S = se(r) && pe(r)
              , E = S ? "select" : "text";
            v && Y(r, v, g) && (E = v);
            var w = Q(a)
              , C = w.widget
              , F = void 0 === C ? E : C
              , D = w.placeholder
              , k = void 0 === D ? "" : D
              , A = x(w, ["widget", "placeholder"])
              , N = z(r, F, g);
            return n.createElement(N, {
                options: O({}, A, {
                    enumOptions: S
                }),
                schema: r,
                uiSchema: a,
                id: i && i.$id,
                label: void 0 === y ? t : y,
                value: o,
                onChange: c,
                onBlur: m,
                onFocus: p,
                required: s,
                disabled: l,
                readonly: u,
                formContext: b,
                autofocus: d,
                registry: f,
                placeholder: k,
                rawErrors: h
            })
        }
        dr.defaultProps = {
            uiSchema: {},
            errorSchema: {},
            idSchema: {},
            disabled: !1,
            readonly: !1,
            autofocus: !1,
            hideError: !1
        },
        cr.defaultProps = {
            uiSchema: {},
            disabled: !1,
            readonly: !1,
            autofocus: !1
        };
        var mr = function(e) {
            function r() {
                return e.apply(this, arguments) || this
            }
            F(r, e);
            var t = r.prototype;
            return t.componentDidMount = function() {
                void 0 === this.props.formData && this.props.onChange(null)
            }
            ,
            t.render = function() {
                return null
            }
            ,
            r
        }(n.Component);
        var pr = {
            AnyOfField: Ze,
            ArrayField: Ye,
            BooleanField: Je,
            DescriptionField: function(e) {
                var r = e.id
                  , t = e.description;
                return t ? "string" === typeof t ? n.createElement("p", {
                    id: r,
                    className: "field-description"
                }, t) : n.createElement("div", {
                    id: r,
                    className: "field-description"
                }, t) : null
            },
            NumberField: Xe,
            ObjectField: rr,
            OneOfField: Ze,
            SchemaField: dr,
            StringField: cr,
            TitleField: function(e) {
                var r = e.id
                  , t = e.title
                  , a = e.required;
                return n.createElement("legend", {
                    id: r
                }, t, a && n.createElement("span", {
                    className: "required"
                }, "*"))
            },
            NullField: mr,
            UnsupportedField: function(e) {
                var r = e.schema
                  , t = e.idSchema
                  , a = e.reason;
                return n.createElement("div", {
                    className: "unsupported-field"
                }, n.createElement("p", null, "Unsupported field schema", t && t.$id && n.createElement("span", null, " for", " field ", n.createElement("code", null, t.$id)), a && n.createElement("em", null, ": ", a), "."), r && n.createElement("pre", null, JSON.stringify(r, null, 2)))
            }
        };
        function fr(e, r) {
            for (var t = [], n = e; n <= r; n++)
                t.push({
                    value: n,
                    label: Te(n, 2)
                });
            return t
        }
        function hr(e) {
            var r = e.type
              , t = e.range
              , a = e.value
              , i = e.select
              , o = e.rootId
              , s = e.disabled
              , l = e.readonly
              , u = e.autofocus
              , d = e.registry
              , c = e.onBlur
              , m = o + "_" + r
              , p = d.widgets.SelectWidget;
            return n.createElement(p, {
                schema: {
                    type: "integer"
                },
                id: m,
                className: "form-control",
                options: {
                    enumOptions: fr(t[0], t[1])
                },
                placeholder: r,
                value: a,
                disabled: s,
                readonly: l,
                autofocus: u,
                onChange: function(e) {
                    return i(r, e)
                },
                onBlur: c
            })
        }
        var yr = function(e) {
            function r(r) {
                var t;
                return (t = e.call(this, r) || this).onChange = function(e, r) {
                    var n;
                    t.setState(((n = {})[e] = "undefined" === typeof r ? -1 : r,
                    n), (function() {
                        var e;
                        e = t.state,
                        Object.keys(e).every((function(r) {
                            return -1 !== e[r]
                        }
                        )) && t.props.onChange(Pe(t.state, t.props.time))
                    }
                    ))
                }
                ,
                t.setNow = function(e) {
                    e.preventDefault();
                    var r = t.props
                      , n = r.time
                      , a = r.disabled
                      , i = r.readonly
                      , o = r.onChange;
                    if (!a && !i) {
                        var s = Ne((new Date).toJSON(), n);
                        t.setState(s, (function() {
                            return o(Pe(t.state, n))
                        }
                        ))
                    }
                }
                ,
                t.clear = function(e) {
                    e.preventDefault();
                    var r = t.props
                      , n = r.time
                      , a = r.disabled
                      , i = r.readonly
                      , o = r.onChange;
                    a || i || t.setState(Ne("", n), (function() {
                        return o(void 0)
                    }
                    ))
                }
                ,
                t.state = Ne(r.value, r.time),
                t
            }
            F(r, e);
            var t = r.prototype;
            return t.componentDidUpdate = function(e, r) {
                e.value && e.value !== Ne(this.props.value, this.props.time) && this.setState(Ne(this.props.value, this.props.time))
            }
            ,
            t.shouldComponentUpdate = function(e, r) {
                return xe(this, e, r)
            }
            ,
            t.render = function() {
                var e = this
                  , r = this.props
                  , t = r.id
                  , a = r.disabled
                  , i = r.readonly
                  , o = r.autofocus
                  , s = r.registry
                  , l = r.onBlur
                  , u = r.options;
                return n.createElement("ul", {
                    className: "list-inline"
                }, this.dateElementProps.map((function(r, u) {
                    return n.createElement("li", {
                        key: u
                    }, n.createElement(hr, O({
                        rootId: t,
                        select: e.onChange
                    }, r, {
                        disabled: a,
                        readonly: i,
                        registry: s,
                        onBlur: l,
                        autofocus: o && 0 === u
                    })))
                }
                )), ("undefined" === u.hideNowButton || !u.hideNowButton) && n.createElement("li", null, n.createElement("a", {
                    href: "#",
                    className: "btn btn-info btn-now",
                    onClick: this.setNow
                }, "Now")), ("undefined" === u.hideClearButton || !u.hideClearButton) && n.createElement("li", null, n.createElement("a", {
                    href: "#",
                    className: "btn btn-warning btn-clear",
                    onClick: this.clear
                }, "Clear")))
            }
            ,
            C(r, [{
                key: "dateElementProps",
                get: function() {
                    var e = this.props
                      , r = e.time
                      , t = e.options
                      , n = this.state
                      , a = n.year
                      , i = n.month
                      , o = n.day
                      , s = n.hour
                      , l = n.minute
                      , u = n.second
                      , d = [{
                        type: "year",
                        range: t.yearsRange,
                        value: a
                    }, {
                        type: "month",
                        range: [1, 12],
                        value: i
                    }, {
                        type: "day",
                        range: [1, 31],
                        value: o
                    }];
                    return r && d.push({
                        type: "hour",
                        range: [0, 23],
                        value: s
                    }, {
                        type: "minute",
                        range: [0, 59],
                        value: l
                    }, {
                        type: "second",
                        range: [0, 59],
                        value: u
                    }),
                    d
                }
            }]),
            r
        }(n.Component);
        function vr(e) {
            var r = e.registry.widgets.AltDateWidget;
            return n.createElement(r, O({
                time: !0
            }, e))
        }
        function gr(e) {
            if (!e.id)
                throw console.log("No id for", e),
                new Error("no id for props " + JSON.stringify(e));
            var r = e.value
              , t = e.readonly
              , a = e.disabled
              , i = e.autofocus
              , o = e.onBlur
              , s = e.onFocus
              , l = e.options
              , u = e.schema
              , d = x(e, ["value", "readonly", "disabled", "autofocus", "onBlur", "onFocus", "options", "schema", "uiSchema", "formContext", "registry", "rawErrors"]);
            l.inputType ? d.type = l.inputType : d.type || ("number" === u.type ? (d.type = "number",
            d.step = "any") : "integer" === u.type ? (d.type = "number",
            d.step = "1") : d.type = "text"),
            l.autocomplete && (d.autoComplete = l.autocomplete),
            u.multipleOf && (d.step = u.multipleOf),
            "undefined" !== typeof u.minimum && (d.min = u.minimum),
            "undefined" !== typeof u.maximum && (d.max = u.maximum);
            return [n.createElement("input", O({
                key: d.id,
                className: "form-control",
                readOnly: t,
                disabled: a,
                autoFocus: i,
                value: null == r ? "" : r
            }, d, {
                list: u.examples ? "examples_" + d.id : null,
                onChange: function(r) {
                    var t = r.target.value;
                    return e.onChange("" === t ? l.emptyValue : t)
                },
                onBlur: o && function(e) {
                    return o(d.id, e.target.value)
                }
                ,
                onFocus: s && function(e) {
                    return s(d.id, e.target.value)
                }
            })), u.examples ? n.createElement("datalist", {
                key: "datalist_" + d.id,
                id: "examples_" + d.id
            }, [].concat(new Set(u.examples.concat(u.default ? [u.default] : []))).map((function(e) {
                return n.createElement("option", {
                    key: e,
                    value: e
                })
            }
            ))) : null]
        }
        function br(e) {
            var r = e.schema
              , t = e.id
              , a = e.value
              , i = e.disabled
              , o = e.readonly
              , s = e.label
              , l = e.autofocus
              , u = e.onBlur
              , d = e.onFocus
              , c = e.onChange
              , m = e.DescriptionField
              , p = qe(r);
            return n.createElement("div", {
                className: "checkbox " + (i || o ? "disabled" : "")
            }, r.description && n.createElement(m, {
                description: r.description
            }), n.createElement("label", null, n.createElement("input", {
                type: "checkbox",
                id: t,
                checked: "undefined" !== typeof a && a,
                required: p,
                disabled: i || o,
                autoFocus: l,
                onChange: function(e) {
                    return c(e.target.checked)
                },
                onBlur: u && function(e) {
                    return u(t, e.target.checked)
                }
                ,
                onFocus: d && function(e) {
                    return d(t, e.target.checked)
                }
            }), n.createElement("span", null, s)))
        }
        function Sr(e) {
            var r = e.id
              , t = e.disabled
              , a = e.options
              , i = e.value
              , o = e.autofocus
              , s = e.readonly
              , l = e.onChange
              , u = a.enumOptions
              , d = a.enumDisabled
              , c = a.inline;
            return n.createElement("div", {
                className: "checkboxes",
                id: r
            }, u.map((function(e, a) {
                var m = -1 !== i.indexOf(e.value)
                  , p = d && -1 != d.indexOf(e.value)
                  , f = t || p || s ? "disabled" : ""
                  , h = n.createElement("span", null, n.createElement("input", {
                    type: "checkbox",
                    id: r + "_" + a,
                    checked: m,
                    disabled: t || p || s,
                    autoFocus: o && 0 === a,
                    onChange: function(r) {
                        var t = u.map((function(e) {
                            return e.value
                        }
                        ));
                        r.target.checked ? l(function(e, r, t) {
                            var n = t.indexOf(e);
                            return r.slice(0, n).concat(e, r.slice(n)).sort((function(e, r) {
                                return t.indexOf(e) > t.indexOf(r)
                            }
                            ))
                        }(e.value, i, t)) : l(function(e, r) {
                            return r.filter((function(r) {
                                return r !== e
                            }
                            ))
                        }(e.value, i))
                    }
                }), n.createElement("span", null, e.label));
                return c ? n.createElement("label", {
                    key: a,
                    className: "checkbox-inline " + f
                }, h) : n.createElement("div", {
                    key: a,
                    className: "checkbox " + f
                }, n.createElement("label", null, h))
            }
            )))
        }
        function Er(e, r) {
            return e.replace(";base64", ";name=" + encodeURIComponent(r) + ";base64")
        }
        function wr(e) {
            var r = e.name
              , t = e.size
              , n = e.type;
            return new Promise((function(a, i) {
                var o = new window.FileReader;
                o.onerror = i,
                o.onload = function(e) {
                    a({
                        dataURL: Er(e.target.result, r),
                        name: r,
                        size: t,
                        type: n
                    })
                }
                ,
                o.readAsDataURL(e)
            }
            ))
        }
        function Cr(e) {
            var r = e.filesInfo;
            return 0 === r.length ? null : n.createElement("ul", {
                className: "file-info"
            }, r.map((function(e, r) {
                var t = e.name
                  , a = e.size
                  , i = e.type;
                return n.createElement("li", {
                    key: r
                }, n.createElement("strong", null, t), " (", i, ", ", a, " bytes)")
            }
            )))
        }
        yr.defaultProps = {
            time: !1,
            disabled: !1,
            readonly: !1,
            autofocus: !1,
            options: {
                yearsRange: [1900, (new Date).getFullYear() + 2]
            }
        },
        vr.defaultProps = O({}, yr.defaultProps, {
            time: !0
        }),
        gr.defaultProps = {
            required: !1,
            disabled: !1,
            readonly: !1,
            autofocus: !1
        },
        br.defaultProps = {
            autofocus: !1
        },
        Sr.defaultProps = {
            autofocus: !1,
            options: {
                inline: !1
            }
        };
        var Or = function(e) {
            function r(r) {
                var t;
                (t = e.call(this, r) || this).onChange = function(e) {
                    var r, n = t.props, a = n.multiple, i = n.onChange;
                    (r = e.target.files,
                    Promise.all([].map.call(r, wr))).then((function(e) {
                        var r = {
                            values: e.map((function(e) {
                                return e.dataURL
                            }
                            )),
                            filesInfo: e
                        };
                        t.setState(r, (function() {
                            i(a ? r.values : r.values[0])
                        }
                        ))
                    }
                    ))
                }
                ;
                var n, a = r.value, i = Array.isArray(a) ? a : [a];
                return t.state = {
                    values: i,
                    filesInfo: (n = i,
                    n.filter((function(e) {
                        return "undefined" !== typeof e
                    }
                    )).map((function(e) {
                        var r = Ie(e)
                          , t = r.blob;
                        return {
                            name: r.name,
                            size: t.size,
                            type: t.type
                        }
                    }
                    )))
                },
                t
            }
            F(r, e);
            var t = r.prototype;
            return t.shouldComponentUpdate = function(e, r) {
                return xe(this, e, r)
            }
            ,
            t.render = function() {
                var e = this
                  , r = this.props
                  , t = r.multiple
                  , a = r.id
                  , i = r.readonly
                  , o = r.disabled
                  , s = r.autofocus
                  , l = r.options
                  , u = this.state.filesInfo;
                return n.createElement("div", null, n.createElement("p", null, n.createElement("input", {
                    ref: function(r) {
                        return e.inputRef = r
                    },
                    id: a,
                    type: "file",
                    disabled: i || o,
                    onChange: this.onChange,
                    defaultValue: "",
                    autoFocus: s,
                    multiple: t,
                    accept: l.accept
                })), n.createElement(Cr, {
                    filesInfo: u
                }))
            }
            ,
            r
        }(n.Component);
        function Fr(e) {
            var r = e.options
              , t = e.value
              , a = e.required
              , i = e.disabled
              , o = e.readonly
              , s = e.autofocus
              , l = e.onBlur
              , u = e.onFocus
              , d = e.onChange
              , c = e.id
              , m = Math.random().toString()
              , p = r.enumOptions
              , f = r.enumDisabled
              , h = r.inline;
            return n.createElement("div", {
                className: "field-radio-group",
                id: c
            }, p.map((function(e, r) {
                var p = e.value === t
                  , y = f && -1 != f.indexOf(e.value)
                  , v = i || y || o ? "disabled" : ""
                  , g = n.createElement("span", null, n.createElement("input", {
                    type: "radio",
                    checked: p,
                    name: m,
                    required: a,
                    value: e.value,
                    disabled: i || y || o,
                    autoFocus: s && 0 === r,
                    onChange: function(r) {
                        return d(e.value)
                    },
                    onBlur: l && function(e) {
                        return l(c, e.target.value)
                    }
                    ,
                    onFocus: u && function(e) {
                        return u(c, e.target.value)
                    }
                }), n.createElement("span", null, e.label));
                return h ? n.createElement("label", {
                    key: r,
                    className: "radio-inline " + v
                }, g) : n.createElement("div", {
                    key: r,
                    className: "radio " + v
                }, n.createElement("label", null, g))
            }
            )))
        }
        Or.defaultProps = {
            autofocus: !1
        },
        Fr.defaultProps = {
            autofocus: !1
        };
        var Dr = new Set(["number", "integer"]);
        function xr(e, r) {
            var t = e.type
              , n = e.items;
            if ("" !== r) {
                if ("array" === t && n && Dr.has(n.type))
                    return r.map(ne);
                if ("boolean" === t)
                    return "true" === r;
                if ("number" === t)
                    return ne(r);
                if (e.enum) {
                    if (e.enum.every((function(e) {
                        return "number" === he(e)
                    }
                    )))
                        return ne(r);
                    if (e.enum.every((function(e) {
                        return "boolean" === he(e)
                    }
                    )))
                        return "true" === r
                }
                return r
            }
        }
        function kr(e, r) {
            return r ? [].slice.call(e.target.options).filter((function(e) {
                return e.selected
            }
            )).map((function(e) {
                return e.value
            }
            )) : e.target.value
        }
        function Ar(e) {
            var r = e.schema
              , t = e.id
              , a = e.options
              , i = e.value
              , o = e.required
              , s = e.disabled
              , l = e.readonly
              , u = e.multiple
              , d = e.autofocus
              , c = e.onChange
              , m = e.onBlur
              , p = e.onFocus
              , f = e.placeholder
              , h = a.enumOptions
              , y = a.enumDisabled
              , v = u ? [] : "";
            return n.createElement("select", {
                id: t,
                multiple: u,
                className: "form-control",
                value: "undefined" === typeof i ? v : i,
                required: o,
                disabled: s || l,
                autoFocus: d,
                onBlur: m && function(e) {
                    var n = kr(e, u);
                    m(t, xr(r, n))
                }
                ,
                onFocus: p && function(e) {
                    var n = kr(e, u);
                    p(t, xr(r, n))
                }
                ,
                onChange: function(e) {
                    var t = kr(e, u);
                    c(xr(r, t))
                }
            }, !u && void 0 === r.default && n.createElement("option", {
                value: ""
            }, f), h.map((function(e, r) {
                var t = e.value
                  , a = e.label
                  , i = y && -1 != y.indexOf(t);
                return n.createElement("option", {
                    key: r,
                    value: t,
                    disabled: i
                }, a)
            }
            )))
        }
        function Nr(e) {
            var r = e.id
              , t = e.options
              , a = e.placeholder
              , i = e.value
              , o = e.required
              , s = e.disabled
              , l = e.readonly
              , u = e.autofocus
              , d = e.onChange
              , c = e.onBlur
              , m = e.onFocus;
            return n.createElement("textarea", {
                id: r,
                className: "form-control",
                value: i || "",
                placeholder: a,
                required: o,
                disabled: s,
                readOnly: l,
                autoFocus: u,
                rows: t.rows,
                onBlur: c && function(e) {
                    return c(r, e.target.value)
                }
                ,
                onFocus: m && function(e) {
                    return m(r, e.target.value)
                }
                ,
                onChange: function(e) {
                    var r = e.target.value;
                    return d("" === r ? t.emptyValue : r)
                }
            })
        }
        Ar.defaultProps = {
            autofocus: !1
        },
        Nr.defaultProps = {
            autofocus: !1,
            options: {}
        };
        var Pr = {
            BaseInput: gr,
            PasswordWidget: function(e) {
                var r = e.registry.widgets.BaseInput;
                return n.createElement(r, O({
                    type: "password"
                }, e))
            },
            RadioWidget: Fr,
            UpDownWidget: function(e) {
                var r = e.registry.widgets.BaseInput;
                return n.createElement(r, O({
                    type: "number"
                }, e, We(e.schema)))
            },
            RangeWidget: function(e) {
                var r = e.schema
                  , t = e.value
                  , a = e.registry.widgets.BaseInput;
                return n.createElement("div", {
                    className: "field-range-wrapper"
                }, n.createElement(a, O({
                    type: "range"
                }, e, We(r))), n.createElement("span", {
                    className: "range-view"
                }, t))
            },
            SelectWidget: Ar,
            TextWidget: function(e) {
                var r = e.registry.widgets.BaseInput;
                return n.createElement(r, e)
            },
            DateWidget: function(e) {
                var r = e.onChange
                  , t = e.registry.widgets.BaseInput;
                return n.createElement(t, O({
                    type: "date"
                }, e, {
                    onChange: function(e) {
                        return r(e || void 0)
                    }
                }))
            },
            DateTimeWidget: function(e) {
                var r = e.value
                  , t = e.onChange
                  , a = e.registry.widgets.BaseInput;
                return n.createElement(a, O({
                    type: "datetime-local"
                }, e, {
                    value: je(r),
                    onChange: function(e) {
                        return t(_e(e))
                    }
                }))
            },
            AltDateWidget: yr,
            AltDateTimeWidget: vr,
            EmailWidget: function(e) {
                var r = e.registry.widgets.BaseInput;
                return n.createElement(r, O({
                    type: "email"
                }, e))
            },
            URLWidget: function(e) {
                var r = e.registry.widgets.BaseInput;
                return n.createElement(r, O({
                    type: "url"
                }, e))
            },
            TextareaWidget: Nr,
            HiddenWidget: function(e) {
                var r = e.id
                  , t = e.value;
                return n.createElement("input", {
                    type: "hidden",
                    id: r,
                    value: "undefined" === typeof t ? "" : t
                })
            },
            ColorWidget: function(e) {
                var r = e.disabled
                  , t = e.readonly
                  , a = e.registry.widgets.BaseInput;
                return n.createElement(a, O({
                    type: "color"
                }, e, {
                    disabled: r || t
                }))
            },
            FileWidget: Or,
            CheckboxWidget: br,
            CheckboxesWidget: Sr,
            SubmitButton: function(e) {
                var r = X(e.uiSchema)
                  , t = r.submitText
                  , a = r.norender
                  , i = r.props;
                return n.createElement("div", null, !a && n.createElement("button", O({
                    type: "submit"
                }, i, {
                    className: "btn btn-info"
                }), t))
            }
        };
        function jr() {
            return {
                fields: pr,
                widgets: Pr,
                definitions: {},
                rootSchema: {},
                formContext: {}
            }
        }
        var _r = function(e) {
            function r(r) {
                var t;
                return (t = e.call(this, r) || this).getUsedFormData = function(e, r) {
                    if (0 === r.length && "object" !== typeof e)
                        return e;
                    var t = (0,
                    o.Z)(e, r);
                    return Array.isArray(e) ? Object.keys(t).map((function(e) {
                        return t[e]
                    }
                    )) : t
                }
                ,
                t.getFieldNames = function(e, r) {
                    return function e(t, n, a) {
                        return void 0 === n && (n = []),
                        void 0 === a && (a = [""]),
                        Object.keys(t).forEach((function(i) {
                            if ("object" === typeof t[i]) {
                                var o = a.map((function(e) {
                                    return e + "." + i
                                }
                                ));
                                t[i].__rjsf_additionalProperties && "" !== t[i].$name ? n.push(t[i].$name) : e(t[i], n, o)
                            } else
                                "$name" === i && "" !== t[i] && a.forEach((function(e) {
                                    e = e.replace(/^\./, "");
                                    var t = (0,
                                    s.Z)(r, e);
                                    ("object" !== typeof t || (0,
                                    l.Z)(t)) && n.push(e)
                                }
                                ))
                        }
                        )),
                        n
                    }(e)
                }
                ,
                t.onChange = function(e, r) {
                    (re(e) || Array.isArray(e)) && (e = t.getStateFromProps(t.props, e).formData);
                    var n = !t.props.noValidate && t.props.liveValidate
                      , a = {
                        formData: e
                    }
                      , i = e;
                    if (!0 === t.props.omitExtraData && !0 === t.props.liveOmit) {
                        var o = Ae(be(t.state.schema, t.state.schema, e), "", t.state.schema, e)
                          , s = t.getFieldNames(o, e);
                        a = {
                            formData: i = t.getUsedFormData(e, s)
                        }
                    }
                    if (n) {
                        var l = t.validate(i)
                          , u = l.errors
                          , d = l.errorSchema
                          , c = u
                          , m = d;
                        t.props.extraErrors && (u = B(d = te(d, t.props.extraErrors, !0))),
                        a = {
                            formData: i,
                            errors: u,
                            errorSchema: d,
                            schemaValidationErrors: c,
                            schemaValidationErrorSchema: m
                        }
                    } else if (!t.props.noValidate && r) {
                        var p = t.props.extraErrors ? te(r, t.props.extraErrors, !0) : r;
                        a = {
                            formData: i,
                            errorSchema: p,
                            errors: B(p)
                        }
                    }
                    t.setState(a, (function() {
                        return t.props.onChange && t.props.onChange(t.state)
                    }
                    ))
                }
                ,
                t.onBlur = function() {
                    var e;
                    t.props.onBlur && (e = t.props).onBlur.apply(e, arguments)
                }
                ,
                t.onFocus = function() {
                    var e;
                    t.props.onFocus && (e = t.props).onFocus.apply(e, arguments)
                }
                ,
                t.onSubmit = function(e) {
                    if (e.preventDefault(),
                    e.target === e.currentTarget) {
                        e.persist();
                        var r, n, a = t.state.formData;
                        if (!0 === t.props.omitExtraData) {
                            var i = Ae(be(t.state.schema, t.state.schema, a), "", t.state.schema, a)
                              , o = t.getFieldNames(i, a);
                            a = t.getUsedFormData(a, o)
                        }
                        if (!t.props.noValidate) {
                            var s = t.validate(a)
                              , l = s.errors
                              , u = s.errorSchema
                              , d = l
                              , c = u;
                            if (Object.keys(l).length > 0)
                                return t.props.extraErrors && (u = te(u, t.props.extraErrors, !0),
                                l = B(u)),
                                void t.setState({
                                    errors: l,
                                    errorSchema: u,
                                    schemaValidationErrors: d,
                                    schemaValidationErrorSchema: c
                                }, (function() {
                                    t.props.onError ? t.props.onError(l) : console.error("Form validation failed", l)
                                }
                                ))
                        }
                        t.props.extraErrors ? n = B(r = t.props.extraErrors) : (r = {},
                        n = []),
                        t.setState({
                            formData: a,
                            errors: n,
                            errorSchema: r,
                            schemaValidationErrors: [],
                            schemaValidationErrorSchema: {}
                        }, (function() {
                            t.props.onSubmit && t.props.onSubmit(O({}, t.state, {
                                formData: a,
                                status: "submitted"
                            }), e)
                        }
                        ))
                    }
                }
                ,
                t.state = t.getStateFromProps(r, r.formData),
                t.props.onChange && !De(t.state.formData, t.props.formData) && t.props.onChange(t.state),
                t.formElement = null,
                t
            }
            F(r, e);
            var t = r.prototype;
            return t.UNSAFE_componentWillReceiveProps = function(e) {
                var r = this.getStateFromProps(e, e.formData);
                De(r.formData, e.formData) || De(r.formData, this.state.formData) || !this.props.onChange || this.props.onChange(r),
                this.setState(r)
            }
            ,
            t.getStateFromProps = function(e, r) {
                var t, n, a, i, o = this.state || {}, s = "schema"in e ? e.schema : this.props.schema, l = "uiSchema"in e ? e.uiSchema : this.props.uiSchema, u = "undefined" !== typeof r, d = "liveValidate"in e ? e.liveValidate : this.props.liveValidate, c = u && !e.noValidate && d, m = s, p = Z(s, r, m), f = be(s, m, p), h = e.customFormats, y = e.additionalMetaSchemas;
                if (c) {
                    var v = this.validate(p, s, y, h);
                    a = t = v.errors,
                    i = n = v.errorSchema
                } else {
                    var g = e.noValidate ? {
                        errors: [],
                        errorSchema: {}
                    } : e.liveValidate ? {
                        errors: o.errors || [],
                        errorSchema: o.errorSchema || {}
                    } : {
                        errors: o.schemaValidationErrors || [],
                        errorSchema: o.schemaValidationErrorSchema || {}
                    };
                    t = g.errors,
                    n = g.errorSchema,
                    a = o.schemaValidationErrors,
                    i = o.schemaValidationErrorSchema
                }
                e.extraErrors && (t = B(n = te(n, e.extraErrors, !0)));
                var b = {
                    schema: s,
                    uiSchema: l,
                    idSchema: ke(f, l["ui:rootFieldId"], m, p, e.idPrefix, e.idSeparator),
                    formData: p,
                    edit: u,
                    errors: t,
                    errorSchema: n,
                    additionalMetaSchemas: y
                };
                return a && (b.schemaValidationErrors = a,
                b.schemaValidationErrorSchema = i),
                b
            }
            ,
            t.shouldComponentUpdate = function(e, r) {
                return xe(this, e, r)
            }
            ,
            t.validate = function(e, r, t, n) {
                void 0 === r && (r = this.props.schema),
                void 0 === t && (t = this.props.additionalMetaSchemas),
                void 0 === n && (n = this.props.customFormats);
                var a = this.props
                  , i = a.validate
                  , o = a.transformErrors;
                return $(e, be(r, this.getRegistry().rootSchema, e), i, o, t, n)
            }
            ,
            t.renderErrors = function() {
                var e = this.state
                  , r = e.errors
                  , t = e.errorSchema
                  , a = e.schema
                  , i = e.uiSchema
                  , o = this.props
                  , s = o.ErrorList
                  , l = o.showErrorList
                  , u = o.formContext;
                return r.length && 0 != l ? n.createElement(s, {
                    errors: r,
                    errorSchema: t,
                    schema: a,
                    uiSchema: i,
                    formContext: u
                }) : null
            }
            ,
            t.getRegistry = function() {
                var e = jr()
                  , r = e.fields
                  , t = e.widgets;
                return {
                    fields: O({}, r, this.props.fields),
                    widgets: O({}, t, this.props.widgets),
                    ArrayFieldTemplate: this.props.ArrayFieldTemplate,
                    ObjectFieldTemplate: this.props.ObjectFieldTemplate,
                    FieldTemplate: this.props.FieldTemplate,
                    definitions: this.props.schema.definitions || {},
                    rootSchema: this.props.schema,
                    formContext: this.props.formContext || {}
                }
            }
            ,
            t.submit = function() {
                this.formElement && this.formElement.dispatchEvent(new CustomEvent("submit",{
                    cancelable: !0
                }))
            }
            ,
            t.render = function() {
                var e = this
                  , r = this.props
                  , t = r.children
                  , a = r.id
                  , i = r.idPrefix
                  , o = r.idSeparator
                  , s = r.className
                  , l = r.tagName
                  , u = r.name
                  , d = r.method
                  , c = r.target
                  , m = r.action
                  , p = r.autocomplete
                  , f = r.autoComplete
                  , h = r.enctype
                  , y = r.acceptcharset
                  , v = r.noHtml5Validate
                  , g = r.disabled
                  , b = r.readonly
                  , S = r.formContext
                  , E = r._internalFormWrapper
                  , w = this.state
                  , C = w.schema
                  , O = w.uiSchema
                  , F = w.formData
                  , D = w.errorSchema
                  , x = w.idSchema
                  , k = this.getRegistry()
                  , A = k.fields.SchemaField
                  , N = E ? l : void 0
                  , P = E || l || "form"
                  , j = k.widgets.SubmitButton;
                p && console.warn("Using autocomplete property of Form is deprecated, use autoComplete instead.");
                var _ = f || p;
                return n.createElement(P, {
                    className: s || "rjsf",
                    id: a,
                    name: u,
                    method: d,
                    target: c,
                    action: m,
                    autoComplete: _,
                    encType: h,
                    acceptCharset: y,
                    noValidate: v,
                    onSubmit: this.onSubmit,
                    as: N,
                    ref: function(r) {
                        e.formElement = r
                    }
                }, this.renderErrors(), n.createElement(A, {
                    schema: C,
                    uiSchema: O,
                    errorSchema: D,
                    idSchema: x,
                    idPrefix: i,
                    idSeparator: o,
                    formContext: S,
                    formData: F,
                    onChange: this.onChange,
                    onBlur: this.onBlur,
                    onFocus: this.onFocus,
                    registry: k,
                    disabled: g,
                    readonly: b
                }), t || n.createElement(j, {
                    uiSchema: O
                }))
            }
            ,
            r
        }(n.Component);
        function Tr(e) {
            return (0,
            n.forwardRef)((function(r, t) {
                var a = r.fields
                  , i = r.widgets
                  , o = x(r, ["fields", "widgets"]);
                return a = O({}, e.fields, a),
                i = O({}, e.widgets, i),
                n.createElement(_r, O({}, e, o, {
                    fields: a,
                    widgets: i,
                    ref: t
                }))
            }
            ))
        }
        _r.defaultProps = {
            uiSchema: {},
            noValidate: !1,
            liveValidate: !1,
            disabled: !1,
            readonly: !1,
            noHtml5Validate: !1,
            ErrorList: function(e) {
                var r = e.errors;
                return n.createElement("div", {
                    className: "panel panel-danger errors"
                }, n.createElement("div", {
                    className: "panel-heading"
                }, n.createElement("h3", {
                    className: "panel-title"
                }, "Errors")), n.createElement("ul", {
                    className: "list-group"
                }, r.map((function(e, r) {
                    return n.createElement("li", {
                        key: r,
                        className: "list-group-item text-danger"
                    }, e.stack)
                }
                ))))
            },
            omitExtraData: !1
        },
        Tr.propTypes = {
            widgets: i().object,
            fields: i().object
        };
        var Ir = O({}, Re, {
            getDefaultRegistry: jr
        })
    }
}]);

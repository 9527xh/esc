(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5411], {
    17533: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CommentCount = void 0;
        var r = a(n(56168))
          , o = a(n(50862))
          , i = n(52903)
          , u = n(22535);
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function c(e) {
            return c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            c(e)
        }
        function s() {
            return s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            s.apply(this, arguments)
        }
        function l(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        function f(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function p(e, t) {
            return p = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            p(e, t)
        }
        function m(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = b(e);
                if (t) {
                    var o = b(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return y(this, n)
            }
        }
        function y(e, t) {
            return !t || "object" !== c(t) && "function" !== typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function b(e) {
            return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            b(e)
        }
        var h = (0,
        i.debounce)((function() {
            window.DISQUSWIDGETS && window.DISQUSWIDGETS.getCount({
                reset: !0
            })
        }
        ), 300, !1)
          , v = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && p(e, t)
            }(c, e);
            var t, n, o, a = m(c);
            function c() {
                return f(this, c),
                a.apply(this, arguments)
            }
            return t = c,
            (n = [{
                key: "componentDidMount",
                value: function() {
                    this.loadInstance()
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e) {
                    return this.props !== e && (0,
                    i.shallowComparison)(this.props, e)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.shortname !== e.shortname && this.cleanInstance(),
                    this.loadInstance()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.cleanInstance()
                }
            }, {
                key: "loadInstance",
                value: function() {
                    var e = window.document;
                    e.getElementById(u.COMMENT_COUNT_SCRIPT_ID) ? h() : (0,
                    i.insertScript)("https://".concat(this.props.shortname, ".disqus.com/count.js"), u.COMMENT_COUNT_SCRIPT_ID, e.body)
                }
            }, {
                key: "cleanInstance",
                value: function() {
                    var e = window.document;
                    (0,
                    i.removeScript)(u.COMMENT_COUNT_SCRIPT_ID, e.body),
                    window.DISQUSWIDGETS = void 0,
                    (0,
                    i.removeResources)()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.shortname,
                    e.config)
                      , n = e.children
                      , o = e.className
                      , i = l(e, ["shortname", "config", "children", "className"])
                      , a = o ? " ".concat(o) : "";
                    return r.default.createElement("span", s({}, i, {
                        className: "".concat(u.COMMENT_COUNT_CLASS).concat(a),
                        "data-disqus-identifier": t.identifier,
                        "data-disqus-url": t.url
                    }), n)
                }
            }]) && d(t.prototype, n),
            o && d(t, o),
            c
        }(r.default.Component);
        t.CommentCount = v,
        v.propTypes = {
            shortname: o.default.string.isRequired,
            config: o.default.shape({
                identifier: o.default.string,
                url: o.default.string,
                title: o.default.string
            }).isRequired,
            className: o.default.string,
            children: o.default.node
        }
    },
    87539: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CommentEmbed = void 0;
        var r = u(n(56168))
          , o = u(n(50862))
          , i = n(22535);
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function a(e) {
            return a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            a(e)
        }
        function c() {
            return c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            c.apply(this, arguments)
        }
        function s(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        function l(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function f(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function d(e, t) {
            return d = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            d(e, t)
        }
        function p(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = y(e);
                if (t) {
                    var o = y(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return m(this, n)
            }
        }
        function m(e, t) {
            return !t || "object" !== a(t) && "function" !== typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function y(e) {
            return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            y(e)
        }
        var b = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && d(e, t)
            }(u, e);
            var t, n, o, i = p(u);
            function u() {
                return l(this, u),
                i.apply(this, arguments)
            }
            return t = u,
            (n = [{
                key: "getSrc",
                value: function() {
                    var e = Number(this.props.commentId).toString(36)
                      , t = this.props.showParentComment ? "1" : "0"
                      , n = this.props.showMedia ? "1" : "0";
                    return "https://embed.disqus.com/p/".concat(e, "?p=").concat(t, "&m=").concat(n)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.width
                      , n = e.height
                      , o = (e.commentId,
                    e.showMedia,
                    e.showParentComment,
                    s(e, ["width", "height", "commentId", "showMedia", "showParentComment"]));
                    return r.default.createElement("iframe", c({}, o, {
                        src: this.getSrc(),
                        width: t,
                        height: n,
                        seamless: "seamless",
                        scrolling: "no",
                        frameBorder: "0"
                    }))
                }
            }]) && f(t.prototype, n),
            o && f(t, o),
            u
        }(r.default.Component);
        t.CommentEmbed = b,
        b.defaultProps = {
            showMedia: !0,
            showParentComment: !0,
            width: i.COMMENT_EMBED_WIDTH,
            height: i.COMMENT_EMBED_HEIGHT
        },
        b.propTypes = {
            commentId: o.default.string.isRequired,
            showMedia: o.default.bool,
            showParentComment: o.default.bool,
            width: o.default.number,
            height: o.default.number,
            className: o.default.string
        }
    },
    47029: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.DiscussionEmbed = void 0;
        var r = a(n(56168))
          , o = a(n(50862))
          , i = n(52903)
          , u = n(22535);
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function c(e) {
            return c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            c(e)
        }
        function s() {
            return s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            s.apply(this, arguments)
        }
        function l(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        function f(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function p(e, t) {
            return p = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            p(e, t)
        }
        function m(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = b(e);
                if (t) {
                    var o = b(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return y(this, n)
            }
        }
        function y(e, t) {
            return !t || "object" !== c(t) && "function" !== typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function b(e) {
            return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            b(e)
        }
        var h = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && p(e, t)
            }(c, e);
            var t, n, o, a = m(c);
            function c() {
                return f(this, c),
                a.apply(this, arguments)
            }
            return t = c,
            (n = [{
                key: "componentDidMount",
                value: function() {
                    "undefined" !== typeof window && window.disqus_shortname && window.disqus_shortname !== this.props.shortname && this.cleanInstance(),
                    this.loadInstance()
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e) {
                    return this.props !== e && (0,
                    i.shallowComparison)(this.props, e)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.shortname !== e.shortname && this.cleanInstance(),
                    this.loadInstance()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.cleanInstance()
                }
            }, {
                key: "loadInstance",
                value: function() {
                    var e = window.document;
                    window && window.DISQUS && e.getElementById(u.EMBED_SCRIPT_ID) ? window.DISQUS.reset({
                        reload: !0,
                        config: this.getDisqusConfig(this.props.config)
                    }) : (window.disqus_config = this.getDisqusConfig(this.props.config),
                    window.disqus_shortname = this.props.shortname,
                    (0,
                    i.insertScript)("https://".concat(this.props.shortname, ".disqus.com/embed.js"), u.EMBED_SCRIPT_ID, e.body))
                }
            }, {
                key: "cleanInstance",
                value: function() {
                    var e = window.document;
                    (0,
                    i.removeScript)(u.EMBED_SCRIPT_ID, e.body),
                    window && window.DISQUS && window.DISQUS.reset({});
                    try {
                        delete window.DISQUS
                    } catch (n) {
                        window.DISQUS = void 0
                    }
                    var t = e.getElementById(u.THREAD_ID);
                    if (t)
                        for (; t.hasChildNodes(); )
                            t.removeChild(t.firstChild);
                    (0,
                    i.removeResources)()
                }
            }, {
                key: "getDisqusConfig",
                value: function(e) {
                    return function() {
                        var t = this;
                        this.page.identifier = e.identifier,
                        this.page.url = e.url,
                        this.page.title = e.title,
                        this.page.category_id = e.categoryID,
                        this.page.remote_auth_s3 = e.remoteAuthS3,
                        this.page.api_key = e.apiKey,
                        e.language && (this.language = e.language),
                        u.CALLBACKS.forEach((function(n) {
                            t.callbacks[n] = [e[n]]
                        }
                        ))
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.shortname,
                    e.config,
                    l(e, ["shortname", "config"]));
                    return r.default.createElement("div", s({}, t, {
                        id: u.THREAD_ID
                    }))
                }
            }]) && d(t.prototype, n),
            o && d(t, o),
            c
        }(r.default.Component);
        t.DiscussionEmbed = h,
        h.propTypes = {
            shortname: o.default.string.isRequired,
            config: o.default.shape({
                identifier: o.default.string,
                url: o.default.string,
                title: o.default.string,
                language: o.default.string,
                categoryID: o.default.string,
                remoteAuthS3: o.default.string,
                apiKey: o.default.string,
                preData: o.default.func,
                preInit: o.default.func,
                onInit: o.default.func,
                onReady: o.default.func,
                afterRender: o.default.func,
                preReset: o.default.func,
                onIdentify: o.default.func,
                beforeComment: o.default.func,
                onNewComment: o.default.func,
                onPaginate: o.default.func
            }).isRequired
        }
    },
    96121: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Recommendations = void 0;
        var r = a(n(56168))
          , o = a(n(50862))
          , i = n(52903)
          , u = n(22535);
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function c(e) {
            return c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            c(e)
        }
        function s() {
            return s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            s.apply(this, arguments)
        }
        function l(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        function f(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function p(e, t) {
            return p = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            p(e, t)
        }
        function m(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = b(e);
                if (t) {
                    var o = b(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return y(this, n)
            }
        }
        function y(e, t) {
            return !t || "object" !== c(t) && "function" !== typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function b(e) {
            return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            b(e)
        }
        var h = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && p(e, t)
            }(c, e);
            var t, n, o, a = m(c);
            function c() {
                return f(this, c),
                a.apply(this, arguments)
            }
            return t = c,
            (n = [{
                key: "componentDidMount",
                value: function() {
                    this.loadInstance()
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e) {
                    return this.props !== e && (0,
                    i.shallowComparison)(this.props, e)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.loadInstance()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.cleanInstance()
                }
            }, {
                key: "getDisqusConfig",
                value: function(e) {
                    return function() {
                        this.page.identifier = e.identifier,
                        this.page.url = e.url,
                        this.page.title = e.title,
                        this.language = e.language
                    }
                }
            }, {
                key: "loadInstance",
                value: function() {
                    "undefined" !== typeof window && window.document && (window.disqus_config = this.getDisqusConfig(this.props.config),
                    window.document.getElementById(u.RECOMMENDATIONS_SCRIPT_ID) ? this.reloadInstance() : (0,
                    i.insertScript)("https://".concat(this.props.shortname, ".disqus.com/recommendations.js"), u.RECOMMENDATIONS_SCRIPT_ID, window.document.body))
                }
            }, {
                key: "reloadInstance",
                value: function() {
                    window && window.DISQUS_RECOMMENDATIONS && window.DISQUS_RECOMMENDATIONS.reset({
                        reload: !0
                    })
                }
            }, {
                key: "cleanInstance",
                value: function() {
                    (0,
                    i.removeScript)(u.RECOMMENDATIONS_SCRIPT_ID, window.document.body);
                    try {
                        delete window.DISQUS_RECOMMENDATIONS
                    } catch (t) {
                        window.DISQUS_RECOMMENDATIONS = void 0
                    }
                    var e = window.document.getElementById(u.RECOMMENDATIONS_ID);
                    if (e)
                        for (; e.hasChildNodes(); )
                            e.removeChild(e.firstChild);
                    (0,
                    i.removeResources)()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.shortname,
                    e.config,
                    l(e, ["shortname", "config"]));
                    return r.default.createElement("div", s({}, t, {
                        id: u.RECOMMENDATIONS_ID
                    }))
                }
            }]) && d(t.prototype, n),
            o && d(t, o),
            c
        }(r.default.Component);
        t.Recommendations = h,
        h.propTypes = {
            shortname: o.default.string.isRequired,
            config: o.default.shape({
                identifier: o.default.string,
                url: o.default.string,
                title: o.default.string,
                language: o.default.string
            })
        }
    },
    22535: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CALLBACKS = t.RECOMMENDATIONS_SCRIPT_ID = t.RECOMMENDATIONS_ID = t.COMMENT_EMBED_HEIGHT = t.COMMENT_EMBED_WIDTH = t.COMMENT_COUNT_SCRIPT_ID = t.COMMENT_COUNT_CLASS = t.EMBED_SCRIPT_ID = t.THREAD_ID = void 0;
        t.THREAD_ID = "disqus_thread";
        t.EMBED_SCRIPT_ID = "dsq-embed-scr";
        t.COMMENT_COUNT_CLASS = "disqus-comment-count";
        t.COMMENT_COUNT_SCRIPT_ID = "dsq-count-scr";
        t.COMMENT_EMBED_WIDTH = 420;
        t.COMMENT_EMBED_HEIGHT = 320;
        t.RECOMMENDATIONS_ID = "disqus_recommendations";
        t.RECOMMENDATIONS_SCRIPT_ID = "dsq-recs-scr";
        t.CALLBACKS = ["preData", "preInit", "onInit", "onReady", "afterRender", "preReset", "onIdentify", "beforeComment", "onNewComment", "onPaginate"]
    },
    46469: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "qw", {
            enumerable: !0,
            get: function() {
                return i.DiscussionEmbed
            }
        });
        var r = n(17533)
          , o = n(87539)
          , i = n(47029)
          , u = n(96121);
        r.CommentCount,
        o.CommentEmbed,
        i.DiscussionEmbed,
        u.Recommendations
    },
    52903: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.insertScript = function(e, t, n) {
            var r = window.document.createElement("script");
            return r.async = !0,
            r.src = e,
            r.id = t,
            n.appendChild(r),
            r
        }
        ,
        t.removeScript = function(e, t) {
            var n = window.document.getElementById(e);
            n && t.removeChild(n)
        }
        ,
        t.removeResources = function() {
            window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach((function(e) {
                return e.remove()
            }
            ))
        }
        ,
        t.debounce = function(e, t, n) {
            var r;
            return function() {
                var o = this
                  , i = arguments
                  , u = function() {
                    r = null,
                    n || e.apply(o, i)
                }
                  , a = n && !r;
                window.clearTimeout(r),
                r = setTimeout(u, t),
                a && e.apply(o, i)
            }
        }
        ,
        t.isReactElement = a,
        t.shallowComparison = function e(t, n) {
            var r, o = function(e) {
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (e = function(e, t) {
                        if (!e)
                            return;
                        if ("string" === typeof e)
                            return u(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n)
                            return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return u(e, t)
                    }(e))) {
                        var t = 0
                          , n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return t >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[t++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, o, i = !0, a = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return i = e.done,
                        e
                    },
                    e: function(e) {
                        a = !0,
                        o = e
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (a)
                                throw o
                        }
                    }
                }
            }(new Set(Object.keys(t),Object.keys(n)));
            try {
                for (o.s(); !(r = o.n()).done; ) {
                    var c = r.value;
                    if ("object" === i(t[c])) {
                        if (e(t[c], n[c]))
                            return !0
                    } else if (t[c] !== n[c] && !a(t[c]))
                        return !0
                }
            } catch (s) {
                o.e(s)
            } finally {
                o.f()
            }
            return !1
        }
        ;
        var r, o = (r = n(56168)) && r.__esModule ? r : {
            default: r
        };
        function i(e) {
            return i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            i(e)
        }
        function u(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function a(e) {
            return !!o.default.isValidElement(e) || !!Array.isArray(e) && e.some((function(e) {
                return o.default.isValidElement(e)
            }
            ))
        }
    },
    73369: function(e, t, n) {
        "use strict";
        n.d(t, {
            OK: function() {
                return D
            },
            td: function() {
                return _
            },
            x4: function() {
                return P
            },
            mQ: function() {
                return g
            }
        });
        var r = n(56168);
        function o(e) {
            return function(t) {
                return !!t.type && t.type.tabsRole === e
            }
        }
        var i = o("Tab")
          , u = o("TabList")
          , a = o("TabPanel");
        function c(e, t) {
            return r.Children.map(e, (function(e) {
                return null === e ? null : function(e) {
                    return i(e) || u(e) || a(e)
                }(e) ? t(e) : e.props && e.props.children && "object" === typeof e.props.children ? (0,
                r.cloneElement)(e, Object.assign({}, e.props, {
                    children: c(e.props.children, t)
                })) : e
            }
            ))
        }
        function s(e, t) {
            return r.Children.forEach(e, (function(e) {
                null !== e && (i(e) || a(e) ? t(e) : e.props && e.props.children && "object" === typeof e.props.children && (u(e) && t(e),
                s(e.props.children, t)))
            }
            ))
        }
        var l = n(35190);
        function f(e) {
            var t = 0;
            return s(e, (function(e) {
                i(e) && t++
            }
            )),
            t
        }
        var d, p = ["children", "className", "disabledTabClassName", "domRef", "focus", "forceRenderTabPanel", "onSelect", "selectedIndex", "selectedTabClassName", "selectedTabPanelClassName", "environment", "disableUpDownKeys"];
        function m(e) {
            return e && "getAttribute"in e
        }
        function y(e) {
            return m(e) && e.getAttribute("data-rttab")
        }
        function b(e) {
            return m(e) && "true" === e.getAttribute("aria-disabled")
        }
        var h = function(e) {
            var t = (0,
            r.useRef)([])
              , n = (0,
            r.useRef)([])
              , o = (0,
            r.useRef)();
            function s(t, n) {
                t < 0 || t >= v() || (0,
                e.onSelect)(t, e.selectedIndex, n)
            }
            function m(e) {
                for (var t = v(), n = e + 1; n < t; n++)
                    if (!b(w(n)))
                        return n;
                for (var r = 0; r < e; r++)
                    if (!b(w(r)))
                        return r;
                return e
            }
            function h(e) {
                for (var t = e; t--; )
                    if (!b(w(t)))
                        return t;
                for (t = v(); t-- > e; )
                    if (!b(w(t)))
                        return t;
                return e
            }
            function v() {
                return f(e.children)
            }
            function w(e) {
                return t.current["tabs-" + e]
            }
            function g(e) {
                var t = e.target;
                do {
                    if (O(t)) {
                        if (b(t))
                            return;
                        return void s([].slice.call(t.parentNode.children).filter(y).indexOf(t), e)
                    }
                } while (null != (t = t.parentNode))
            }
            function O(e) {
                if (!y(e))
                    return !1;
                var t = e.parentElement;
                do {
                    if (t === o.current)
                        return !0;
                    if (t.getAttribute("data-rttabs"))
                        break;
                    t = t.parentElement
                } while (t);
                return !1
            }
            e.children;
            var C = e.className
              , _ = (e.disabledTabClassName,
            e.domRef)
              , S = (e.focus,
            e.forceRenderTabPanel,
            e.onSelect,
            e.selectedIndex,
            e.selectedTabClassName,
            e.selectedTabPanelClassName,
            e.environment,
            e.disableUpDownKeys,
            function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, p));
            return r.createElement("div", Object.assign({}, S, {
                className: (0,
                l.Z)(C),
                onClick: g,
                onKeyDown: function(t) {
                    var n = e.direction
                      , r = e.disableUpDownKeys;
                    if (O(t.target)) {
                        var o = e.selectedIndex
                          , i = !1
                          , u = !1;
                        "Space" !== t.code && 32 !== t.keyCode && "Enter" !== t.code && 13 !== t.keyCode || (i = !0,
                        u = !1,
                        g(t)),
                        "ArrowLeft" !== t.code && 37 !== t.keyCode && (r || 38 !== t.keyCode && "ArrowUp" !== t.code) ? "ArrowRight" !== t.code && 39 !== t.keyCode && (r || 40 !== t.keyCode && "ArrowDown" !== t.code) ? 35 === t.keyCode || "End" === t.code ? (o = function() {
                            for (var e = v(); e--; )
                                if (!b(w(e)))
                                    return e;
                            return null
                        }(),
                        i = !0,
                        u = !0) : 36 !== t.keyCode && "Home" !== t.code || (o = function() {
                            for (var e = v(), t = 0; t < e; t++)
                                if (!b(w(t)))
                                    return t;
                            return null
                        }(),
                        i = !0,
                        u = !0) : (o = "rtl" === n ? h(o) : m(o),
                        i = !0,
                        u = !0) : (o = "rtl" === n ? m(o) : h(o),
                        i = !0,
                        u = !0),
                        i && t.preventDefault(),
                        u && s(o, t)
                    }
                },
                ref: function(e) {
                    o.current = e,
                    _ && _(e)
                },
                "data-rttabs": !0
            }), function() {
                var o = 0
                  , s = e.children
                  , l = e.disabledTabClassName
                  , f = e.focus
                  , p = e.forceRenderTabPanel
                  , m = e.selectedIndex
                  , y = e.selectedTabClassName
                  , b = e.selectedTabPanelClassName
                  , h = e.environment;
                n.current = n.current || [];
                for (var g = n.current.length - v(), O = (0,
                r.useId)(); g++ < 0; )
                    n.current.push("" + O + n.current.length);
                return c(s, (function(e) {
                    var s = e;
                    if (u(e)) {
                        var v = 0
                          , g = !1;
                        null == d && function(e) {
                            var t = e || ("undefined" !== typeof window ? window : void 0);
                            try {
                                d = !("undefined" === typeof t || !t.document || !t.document.activeElement)
                            } catch (n) {
                                d = !1
                            }
                        }(h);
                        var O = h || ("undefined" !== typeof window ? window : void 0);
                        d && O && (g = r.Children.toArray(e.props.children).filter(i).some((function(e, t) {
                            return O.document.activeElement === w(t)
                        }
                        ))),
                        s = (0,
                        r.cloneElement)(e, {
                            children: c(e.props.children, (function(e) {
                                var o = "tabs-" + v
                                  , i = m === v
                                  , u = {
                                    tabRef: function(e) {
                                        t.current[o] = e
                                    },
                                    id: n.current[v],
                                    selected: i,
                                    focus: i && (f || g)
                                };
                                return y && (u.selectedClassName = y),
                                l && (u.disabledClassName = l),
                                v++,
                                (0,
                                r.cloneElement)(e, u)
                            }
                            ))
                        })
                    } else if (a(e)) {
                        var C = {
                            id: n.current[o],
                            selected: m === o
                        };
                        p && (C.forceRender = p),
                        b && (C.selectedClassName = b),
                        o++,
                        s = (0,
                        r.cloneElement)(e, C)
                    }
                    return s
                }
                ))
            }())
        };
        h.defaultProps = {
            className: "react-tabs",
            focus: !1
        },
        h.propTypes = {};
        var v = h
          , w = function(e) {
            var t = e.children
              , n = e.defaultFocus
              , o = e.defaultIndex
              , i = e.focusTabOnClick
              , u = e.onSelect
              , a = (0,
            r.useState)(n)
              , c = a[0]
              , s = a[1]
              , l = (0,
            r.useState)(function(e) {
                return null === e.selectedIndex ? 1 : 0
            }(e))
              , d = l[0]
              , p = (0,
            r.useState)(1 === d ? o || 0 : null)
              , m = p[0]
              , y = p[1];
            if ((0,
            r.useEffect)((function() {
                s(!1)
            }
            ), []),
            1 === d) {
                var b = f(t);
                (0,
                r.useEffect)((function() {
                    if (null != m) {
                        var e = Math.max(0, b - 1);
                        y(Math.min(m, e))
                    }
                }
                ), [b])
            }
            var h = Object.assign({}, e);
            return h.focus = c,
            h.onSelect = function(e, t, n) {
                "function" === typeof u && !1 === u(e, t, n) || (i && s(!0),
                1 === d && y(e))
            }
            ,
            null != m && (h.selectedIndex = m),
            delete h.defaultFocus,
            delete h.defaultIndex,
            delete h.focusTabOnClick,
            r.createElement(v, h, t)
        };
        w.propTypes = {},
        w.defaultProps = {
            defaultFocus: !1,
            focusTabOnClick: !0,
            forceRenderTabPanel: !1,
            selectedIndex: null,
            defaultIndex: null,
            environment: null,
            disableUpDownKeys: !1
        },
        w.tabsRole = "Tabs";
        var g = w
          , O = ["children", "className"];
        var C = function(e) {
            var t = e.children
              , n = e.className
              , o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, O);
            return r.createElement("ul", Object.assign({}, o, {
                className: (0,
                l.Z)(n),
                role: "tablist"
            }), t)
        };
        C.tabsRole = "TabList",
        C.propTypes = {},
        C.defaultProps = {
            className: "react-tabs__tab-list"
        };
        var _ = C
          , S = ["children", "className", "disabled", "disabledClassName", "focus", "id", "selected", "selectedClassName", "tabIndex", "tabRef"];
        var E = "react-tabs__tab"
          , I = {
            className: E,
            disabledClassName: E + "--disabled",
            focus: !1,
            id: null,
            selected: !1,
            selectedClassName: E + "--selected"
        }
          , T = function(e) {
            var t, n = (0,
            r.useRef)(), o = e.children, i = e.className, u = e.disabled, a = e.disabledClassName, c = e.focus, s = e.id, f = e.selected, d = e.selectedClassName, p = e.tabIndex, m = e.tabRef, y = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, S);
            return (0,
            r.useEffect)((function() {
                f && c && n.current.focus()
            }
            ), [f, c]),
            r.createElement("li", Object.assign({}, y, {
                className: (0,
                l.Z)(i, (t = {},
                t[d] = f,
                t[a] = u,
                t)),
                ref: function(e) {
                    n.current = e,
                    m && m(e)
                },
                role: "tab",
                id: "tab" + s,
                "aria-selected": f ? "true" : "false",
                "aria-disabled": u ? "true" : "false",
                "aria-controls": "panel" + s,
                tabIndex: p || (f ? "0" : null),
                "data-rttab": !0
            }), o)
        };
        T.propTypes = {},
        T.tabsRole = "Tab",
        T.defaultProps = I;
        var D = T
          , N = ["children", "className", "forceRender", "id", "selected", "selectedClassName"];
        var R = "react-tabs__tab-panel"
          , M = {
            className: R,
            forceRender: !1,
            selectedClassName: "react-tabs__tab-panel--selected"
        }
          , j = function(e) {
            var t, n = e.children, o = e.className, i = e.forceRender, u = e.id, a = e.selected, c = e.selectedClassName, s = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, N);
            return r.createElement("div", Object.assign({}, s, {
                className: (0,
                l.Z)(o, (t = {},
                t[c] = a,
                t)),
                role: "tabpanel",
                id: "panel" + u,
                "aria-labelledby": "tab" + u
            }), i || a ? n : null)
        };
        j.tabsRole = "TabPanel",
        j.propTypes = {},
        j.defaultProps = M;
        var P = j
    },
    97313: function() {}
}]);

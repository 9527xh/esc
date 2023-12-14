(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7158], {
    91781: function(A, t, e) {
        "use strict";
        var r = e(81651).Buffer;
        A.exports = function(A) {
            if (A.length >= 255)
                throw new TypeError("Alphabet too long");
            for (var t = new Uint8Array(256), e = 0; e < t.length; e++)
                t[e] = 255;
            for (var n = 0; n < A.length; n++) {
                var i = A.charAt(n)
                  , o = i.charCodeAt(0);
                if (255 !== t[o])
                    throw new TypeError(i + " is ambiguous");
                t[o] = n
            }
            var s = A.length
              , a = A.charAt(0)
              , c = Math.log(s) / Math.log(256)
              , g = Math.log(256) / Math.log(s);
            function u(A) {
                if ("string" !== typeof A)
                    throw new TypeError("Expected String");
                if (0 === A.length)
                    return r.alloc(0);
                for (var e = 0, n = 0, i = 0; A[e] === a; )
                    n++,
                    e++;
                for (var o = (A.length - e) * c + 1 >>> 0, g = new Uint8Array(o); A[e]; ) {
                    var u = t[A.charCodeAt(e)];
                    if (255 === u)
                        return;
                    for (var h = 0, I = o - 1; (0 !== u || h < i) && -1 !== I; I--,
                    h++)
                        u += s * g[I] >>> 0,
                        g[I] = u % 256 >>> 0,
                        u = u / 256 >>> 0;
                    if (0 !== u)
                        throw new Error("Non-zero carry");
                    i = h,
                    e++
                }
                for (var l = o - i; l !== o && 0 === g[l]; )
                    l++;
                var E = r.allocUnsafe(n + (o - l));
                E.fill(0, 0, n);
                for (var B = n; l !== o; )
                    E[B++] = g[l++];
                return E
            }
            return {
                encode: function(t) {
                    if ((Array.isArray(t) || t instanceof Uint8Array) && (t = r.from(t)),
                    !r.isBuffer(t))
                        throw new TypeError("Expected Buffer");
                    if (0 === t.length)
                        return "";
                    for (var e = 0, n = 0, i = 0, o = t.length; i !== o && 0 === t[i]; )
                        i++,
                        e++;
                    for (var c = (o - i) * g + 1 >>> 0, u = new Uint8Array(c); i !== o; ) {
                        for (var h = t[i], I = 0, l = c - 1; (0 !== h || I < n) && -1 !== l; l--,
                        I++)
                            h += 256 * u[l] >>> 0,
                            u[l] = h % s >>> 0,
                            h = h / s >>> 0;
                        if (0 !== h)
                            throw new Error("Non-zero carry");
                        n = I,
                        i++
                    }
                    for (var E = c - n; E !== c && 0 === u[E]; )
                        E++;
                    for (var B = a.repeat(e); E < c; ++E)
                        B += A.charAt(u[E]);
                    return B
                },
                decodeUnsafe: u,
                decode: function(A) {
                    var t = u(A);
                    if (t)
                        return t;
                    throw new Error("Non-base" + s + " character")
                }
            }
        }
    },
    13072: function(A, t, e) {
        !function(A, t) {
            "use strict";
            function r(A, t) {
                if (!A)
                    throw new Error(t || "Assertion failed")
            }
            function n(A, t) {
                A.super_ = t;
                var e = function() {};
                e.prototype = t.prototype,
                A.prototype = new e,
                A.prototype.constructor = A
            }
            function i(A, t, e) {
                if (i.isBN(A))
                    return A;
                this.negative = 0,
                this.words = null,
                this.length = 0,
                this.red = null,
                null !== A && ("le" !== t && "be" !== t || (e = t,
                t = 10),
                this._init(A || 0, t || 10, e || "be"))
            }
            var o;
            "object" === typeof A ? A.exports = i : t.BN = i,
            i.BN = i,
            i.wordSize = 26;
            try {
                o = "undefined" !== typeof window && "undefined" !== typeof window.Buffer ? window.Buffer : e(46601).Buffer
            } catch (D) {}
            function s(A, t) {
                var e = A.charCodeAt(t);
                return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : void r(!1, "Invalid character in " + A)
            }
            function a(A, t, e) {
                var r = s(A, e);
                return e - 1 >= t && (r |= s(A, e - 1) << 4),
                r
            }
            function c(A, t, e, n) {
                for (var i = 0, o = 0, s = Math.min(A.length, e), a = t; a < s; a++) {
                    var c = A.charCodeAt(a) - 48;
                    i *= n,
                    o = c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c,
                    r(c >= 0 && o < n, "Invalid character"),
                    i += o
                }
                return i
            }
            function g(A, t) {
                A.words = t.words,
                A.length = t.length,
                A.negative = t.negative,
                A.red = t.red
            }
            if (i.isBN = function(A) {
                return A instanceof i || null !== A && "object" === typeof A && A.constructor.wordSize === i.wordSize && Array.isArray(A.words)
            }
            ,
            i.max = function(A, t) {
                return A.cmp(t) > 0 ? A : t
            }
            ,
            i.min = function(A, t) {
                return A.cmp(t) < 0 ? A : t
            }
            ,
            i.prototype._init = function(A, t, e) {
                if ("number" === typeof A)
                    return this._initNumber(A, t, e);
                if ("object" === typeof A)
                    return this._initArray(A, t, e);
                "hex" === t && (t = 16),
                r(t === (0 | t) && t >= 2 && t <= 36);
                var n = 0;
                "-" === (A = A.toString().replace(/\s+/g, ""))[0] && (n++,
                this.negative = 1),
                n < A.length && (16 === t ? this._parseHex(A, n, e) : (this._parseBase(A, t, n),
                "le" === e && this._initArray(this.toArray(), t, e)))
            }
            ,
            i.prototype._initNumber = function(A, t, e) {
                A < 0 && (this.negative = 1,
                A = -A),
                A < 67108864 ? (this.words = [67108863 & A],
                this.length = 1) : A < 4503599627370496 ? (this.words = [67108863 & A, A / 67108864 & 67108863],
                this.length = 2) : (r(A < 9007199254740992),
                this.words = [67108863 & A, A / 67108864 & 67108863, 1],
                this.length = 3),
                "le" === e && this._initArray(this.toArray(), t, e)
            }
            ,
            i.prototype._initArray = function(A, t, e) {
                if (r("number" === typeof A.length),
                A.length <= 0)
                    return this.words = [0],
                    this.length = 1,
                    this;
                this.length = Math.ceil(A.length / 3),
                this.words = new Array(this.length);
                for (var n = 0; n < this.length; n++)
                    this.words[n] = 0;
                var i, o, s = 0;
                if ("be" === e)
                    for (n = A.length - 1,
                    i = 0; n >= 0; n -= 3)
                        o = A[n] | A[n - 1] << 8 | A[n - 2] << 16,
                        this.words[i] |= o << s & 67108863,
                        this.words[i + 1] = o >>> 26 - s & 67108863,
                        (s += 24) >= 26 && (s -= 26,
                        i++);
                else if ("le" === e)
                    for (n = 0,
                    i = 0; n < A.length; n += 3)
                        o = A[n] | A[n + 1] << 8 | A[n + 2] << 16,
                        this.words[i] |= o << s & 67108863,
                        this.words[i + 1] = o >>> 26 - s & 67108863,
                        (s += 24) >= 26 && (s -= 26,
                        i++);
                return this._strip()
            }
            ,
            i.prototype._parseHex = function(A, t, e) {
                this.length = Math.ceil((A.length - t) / 6),
                this.words = new Array(this.length);
                for (var r = 0; r < this.length; r++)
                    this.words[r] = 0;
                var n, i = 0, o = 0;
                if ("be" === e)
                    for (r = A.length - 1; r >= t; r -= 2)
                        n = a(A, t, r) << i,
                        this.words[o] |= 67108863 & n,
                        i >= 18 ? (i -= 18,
                        o += 1,
                        this.words[o] |= n >>> 26) : i += 8;
                else
                    for (r = (A.length - t) % 2 === 0 ? t + 1 : t; r < A.length; r += 2)
                        n = a(A, t, r) << i,
                        this.words[o] |= 67108863 & n,
                        i >= 18 ? (i -= 18,
                        o += 1,
                        this.words[o] |= n >>> 26) : i += 8;
                this._strip()
            }
            ,
            i.prototype._parseBase = function(A, t, e) {
                this.words = [0],
                this.length = 1;
                for (var r = 0, n = 1; n <= 67108863; n *= t)
                    r++;
                r--,
                n = n / t | 0;
                for (var i = A.length - e, o = i % r, s = Math.min(i, i - o) + e, a = 0, g = e; g < s; g += r)
                    a = c(A, g, g + r, t),
                    this.imuln(n),
                    this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a);
                if (0 !== o) {
                    var u = 1;
                    for (a = c(A, g, A.length, t),
                    g = 0; g < o; g++)
                        u *= t;
                    this.imuln(u),
                    this.words[0] + a < 67108864 ? this.words[0] += a : this._iaddn(a)
                }
                this._strip()
            }
            ,
            i.prototype.copy = function(A) {
                A.words = new Array(this.length);
                for (var t = 0; t < this.length; t++)
                    A.words[t] = this.words[t];
                A.length = this.length,
                A.negative = this.negative,
                A.red = this.red
            }
            ,
            i.prototype._move = function(A) {
                g(A, this)
            }
            ,
            i.prototype.clone = function() {
                var A = new i(null);
                return this.copy(A),
                A
            }
            ,
            i.prototype._expand = function(A) {
                for (; this.length < A; )
                    this.words[this.length++] = 0;
                return this
            }
            ,
            i.prototype._strip = function() {
                for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                    this.length--;
                return this._normSign()
            }
            ,
            i.prototype._normSign = function() {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
            }
            ,
            "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
                try {
                    i.prototype[Symbol.for("nodejs.util.inspect.custom")] = u
                } catch (D) {
                    i.prototype.inspect = u
                }
            else
                i.prototype.inspect = u;
            function u() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            var h = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"]
              , I = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
              , l = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            i.prototype.toString = function(A, t) {
                var e;
                if (t = 0 | t || 1,
                16 === (A = A || 10) || "hex" === A) {
                    e = "";
                    for (var n = 0, i = 0, o = 0; o < this.length; o++) {
                        var s = this.words[o]
                          , a = (16777215 & (s << n | i)).toString(16);
                        e = 0 !== (i = s >>> 24 - n & 16777215) || o !== this.length - 1 ? h[6 - a.length] + a + e : a + e,
                        (n += 2) >= 26 && (n -= 26,
                        o--)
                    }
                    for (0 !== i && (e = i.toString(16) + e); e.length % t !== 0; )
                        e = "0" + e;
                    return 0 !== this.negative && (e = "-" + e),
                    e
                }
                if (A === (0 | A) && A >= 2 && A <= 36) {
                    var c = I[A]
                      , g = l[A];
                    e = "";
                    var u = this.clone();
                    for (u.negative = 0; !u.isZero(); ) {
                        var E = u.modrn(g).toString(A);
                        e = (u = u.idivn(g)).isZero() ? E + e : h[c - E.length] + E + e
                    }
                    for (this.isZero() && (e = "0" + e); e.length % t !== 0; )
                        e = "0" + e;
                    return 0 !== this.negative && (e = "-" + e),
                    e
                }
                r(!1, "Base should be between 2 and 36")
            }
            ,
            i.prototype.toNumber = function() {
                var A = this.words[0];
                return 2 === this.length ? A += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? A += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -A : A
            }
            ,
            i.prototype.toJSON = function() {
                return this.toString(16, 2)
            }
            ,
            o && (i.prototype.toBuffer = function(A, t) {
                return this.toArrayLike(o, A, t)
            }
            ),
            i.prototype.toArray = function(A, t) {
                return this.toArrayLike(Array, A, t)
            }
            ;
            function E(A, t, e) {
                e.negative = t.negative ^ A.negative;
                var r = A.length + t.length | 0;
                e.length = r,
                r = r - 1 | 0;
                var n = 0 | A.words[0]
                  , i = 0 | t.words[0]
                  , o = n * i
                  , s = 67108863 & o
                  , a = o / 67108864 | 0;
                e.words[0] = s;
                for (var c = 1; c < r; c++) {
                    for (var g = a >>> 26, u = 67108863 & a, h = Math.min(c, t.length - 1), I = Math.max(0, c - A.length + 1); I <= h; I++) {
                        var l = c - I | 0;
                        g += (o = (n = 0 | A.words[l]) * (i = 0 | t.words[I]) + u) / 67108864 | 0,
                        u = 67108863 & o
                    }
                    e.words[c] = 0 | u,
                    a = 0 | g
                }
                return 0 !== a ? e.words[c] = 0 | a : e.length--,
                e._strip()
            }
            i.prototype.toArrayLike = function(A, t, e) {
                this._strip();
                var n = this.byteLength()
                  , i = e || Math.max(1, n);
                r(n <= i, "byte array longer than desired length"),
                r(i > 0, "Requested array length <= 0");
                var o = function(A, t) {
                    return A.allocUnsafe ? A.allocUnsafe(t) : new A(t)
                }(A, i);
                return this["_toArrayLike" + ("le" === t ? "LE" : "BE")](o, n),
                o
            }
            ,
            i.prototype._toArrayLikeLE = function(A, t) {
                for (var e = 0, r = 0, n = 0, i = 0; n < this.length; n++) {
                    var o = this.words[n] << i | r;
                    A[e++] = 255 & o,
                    e < A.length && (A[e++] = o >> 8 & 255),
                    e < A.length && (A[e++] = o >> 16 & 255),
                    6 === i ? (e < A.length && (A[e++] = o >> 24 & 255),
                    r = 0,
                    i = 0) : (r = o >>> 24,
                    i += 2)
                }
                if (e < A.length)
                    for (A[e++] = r; e < A.length; )
                        A[e++] = 0
            }
            ,
            i.prototype._toArrayLikeBE = function(A, t) {
                for (var e = A.length - 1, r = 0, n = 0, i = 0; n < this.length; n++) {
                    var o = this.words[n] << i | r;
                    A[e--] = 255 & o,
                    e >= 0 && (A[e--] = o >> 8 & 255),
                    e >= 0 && (A[e--] = o >> 16 & 255),
                    6 === i ? (e >= 0 && (A[e--] = o >> 24 & 255),
                    r = 0,
                    i = 0) : (r = o >>> 24,
                    i += 2)
                }
                if (e >= 0)
                    for (A[e--] = r; e >= 0; )
                        A[e--] = 0
            }
            ,
            Math.clz32 ? i.prototype._countBits = function(A) {
                return 32 - Math.clz32(A)
            }
            : i.prototype._countBits = function(A) {
                var t = A
                  , e = 0;
                return t >= 4096 && (e += 13,
                t >>>= 13),
                t >= 64 && (e += 7,
                t >>>= 7),
                t >= 8 && (e += 4,
                t >>>= 4),
                t >= 2 && (e += 2,
                t >>>= 2),
                e + t
            }
            ,
            i.prototype._zeroBits = function(A) {
                if (0 === A)
                    return 26;
                var t = A
                  , e = 0;
                return 0 === (8191 & t) && (e += 13,
                t >>>= 13),
                0 === (127 & t) && (e += 7,
                t >>>= 7),
                0 === (15 & t) && (e += 4,
                t >>>= 4),
                0 === (3 & t) && (e += 2,
                t >>>= 2),
                0 === (1 & t) && e++,
                e
            }
            ,
            i.prototype.bitLength = function() {
                var A = this.words[this.length - 1]
                  , t = this._countBits(A);
                return 26 * (this.length - 1) + t
            }
            ,
            i.prototype.zeroBits = function() {
                if (this.isZero())
                    return 0;
                for (var A = 0, t = 0; t < this.length; t++) {
                    var e = this._zeroBits(this.words[t]);
                    if (A += e,
                    26 !== e)
                        break
                }
                return A
            }
            ,
            i.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }
            ,
            i.prototype.toTwos = function(A) {
                return 0 !== this.negative ? this.abs().inotn(A).iaddn(1) : this.clone()
            }
            ,
            i.prototype.fromTwos = function(A) {
                return this.testn(A - 1) ? this.notn(A).iaddn(1).ineg() : this.clone()
            }
            ,
            i.prototype.isNeg = function() {
                return 0 !== this.negative
            }
            ,
            i.prototype.neg = function() {
                return this.clone().ineg()
            }
            ,
            i.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1),
                this
            }
            ,
            i.prototype.iuor = function(A) {
                for (; this.length < A.length; )
                    this.words[this.length++] = 0;
                for (var t = 0; t < A.length; t++)
                    this.words[t] = this.words[t] | A.words[t];
                return this._strip()
            }
            ,
            i.prototype.ior = function(A) {
                return r(0 === (this.negative | A.negative)),
                this.iuor(A)
            }
            ,
            i.prototype.or = function(A) {
                return this.length > A.length ? this.clone().ior(A) : A.clone().ior(this)
            }
            ,
            i.prototype.uor = function(A) {
                return this.length > A.length ? this.clone().iuor(A) : A.clone().iuor(this)
            }
            ,
            i.prototype.iuand = function(A) {
                var t;
                t = this.length > A.length ? A : this;
                for (var e = 0; e < t.length; e++)
                    this.words[e] = this.words[e] & A.words[e];
                return this.length = t.length,
                this._strip()
            }
            ,
            i.prototype.iand = function(A) {
                return r(0 === (this.negative | A.negative)),
                this.iuand(A)
            }
            ,
            i.prototype.and = function(A) {
                return this.length > A.length ? this.clone().iand(A) : A.clone().iand(this)
            }
            ,
            i.prototype.uand = function(A) {
                return this.length > A.length ? this.clone().iuand(A) : A.clone().iuand(this)
            }
            ,
            i.prototype.iuxor = function(A) {
                var t, e;
                this.length > A.length ? (t = this,
                e = A) : (t = A,
                e = this);
                for (var r = 0; r < e.length; r++)
                    this.words[r] = t.words[r] ^ e.words[r];
                if (this !== t)
                    for (; r < t.length; r++)
                        this.words[r] = t.words[r];
                return this.length = t.length,
                this._strip()
            }
            ,
            i.prototype.ixor = function(A) {
                return r(0 === (this.negative | A.negative)),
                this.iuxor(A)
            }
            ,
            i.prototype.xor = function(A) {
                return this.length > A.length ? this.clone().ixor(A) : A.clone().ixor(this)
            }
            ,
            i.prototype.uxor = function(A) {
                return this.length > A.length ? this.clone().iuxor(A) : A.clone().iuxor(this)
            }
            ,
            i.prototype.inotn = function(A) {
                r("number" === typeof A && A >= 0);
                var t = 0 | Math.ceil(A / 26)
                  , e = A % 26;
                this._expand(t),
                e > 0 && t--;
                for (var n = 0; n < t; n++)
                    this.words[n] = 67108863 & ~this.words[n];
                return e > 0 && (this.words[n] = ~this.words[n] & 67108863 >> 26 - e),
                this._strip()
            }
            ,
            i.prototype.notn = function(A) {
                return this.clone().inotn(A)
            }
            ,
            i.prototype.setn = function(A, t) {
                r("number" === typeof A && A >= 0);
                var e = A / 26 | 0
                  , n = A % 26;
                return this._expand(e + 1),
                this.words[e] = t ? this.words[e] | 1 << n : this.words[e] & ~(1 << n),
                this._strip()
            }
            ,
            i.prototype.iadd = function(A) {
                var t, e, r;
                if (0 !== this.negative && 0 === A.negative)
                    return this.negative = 0,
                    t = this.isub(A),
                    this.negative ^= 1,
                    this._normSign();
                if (0 === this.negative && 0 !== A.negative)
                    return A.negative = 0,
                    t = this.isub(A),
                    A.negative = 1,
                    t._normSign();
                this.length > A.length ? (e = this,
                r = A) : (e = A,
                r = this);
                for (var n = 0, i = 0; i < r.length; i++)
                    t = (0 | e.words[i]) + (0 | r.words[i]) + n,
                    this.words[i] = 67108863 & t,
                    n = t >>> 26;
                for (; 0 !== n && i < e.length; i++)
                    t = (0 | e.words[i]) + n,
                    this.words[i] = 67108863 & t,
                    n = t >>> 26;
                if (this.length = e.length,
                0 !== n)
                    this.words[this.length] = n,
                    this.length++;
                else if (e !== this)
                    for (; i < e.length; i++)
                        this.words[i] = e.words[i];
                return this
            }
            ,
            i.prototype.add = function(A) {
                var t;
                return 0 !== A.negative && 0 === this.negative ? (A.negative = 0,
                t = this.sub(A),
                A.negative ^= 1,
                t) : 0 === A.negative && 0 !== this.negative ? (this.negative = 0,
                t = A.sub(this),
                this.negative = 1,
                t) : this.length > A.length ? this.clone().iadd(A) : A.clone().iadd(this)
            }
            ,
            i.prototype.isub = function(A) {
                if (0 !== A.negative) {
                    A.negative = 0;
                    var t = this.iadd(A);
                    return A.negative = 1,
                    t._normSign()
                }
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iadd(A),
                    this.negative = 1,
                    this._normSign();
                var e, r, n = this.cmp(A);
                if (0 === n)
                    return this.negative = 0,
                    this.length = 1,
                    this.words[0] = 0,
                    this;
                n > 0 ? (e = this,
                r = A) : (e = A,
                r = this);
                for (var i = 0, o = 0; o < r.length; o++)
                    i = (t = (0 | e.words[o]) - (0 | r.words[o]) + i) >> 26,
                    this.words[o] = 67108863 & t;
                for (; 0 !== i && o < e.length; o++)
                    i = (t = (0 | e.words[o]) + i) >> 26,
                    this.words[o] = 67108863 & t;
                if (0 === i && o < e.length && e !== this)
                    for (; o < e.length; o++)
                        this.words[o] = e.words[o];
                return this.length = Math.max(this.length, o),
                e !== this && (this.negative = 1),
                this._strip()
            }
            ,
            i.prototype.sub = function(A) {
                return this.clone().isub(A)
            }
            ;
            var B = function(A, t, e) {
                var r, n, i, o = A.words, s = t.words, a = e.words, c = 0, g = 0 | o[0], u = 8191 & g, h = g >>> 13, I = 0 | o[1], l = 8191 & I, E = I >>> 13, B = 0 | o[2], C = 8191 & B, Q = B >>> 13, d = 0 | o[3], f = 8191 & d, p = d >>> 13, y = 0 | o[4], w = 8191 & y, m = y >>> 13, M = 0 | o[5], v = 8191 & M, b = M >>> 13, D = 0 | o[6], S = 8191 & D, N = D >>> 13, k = 0 | o[7], _ = 8191 & k, K = k >>> 13, R = 0 | o[8], F = 8191 & R, U = R >>> 13, G = 0 | o[9], x = 8191 & G, q = G >>> 13, L = 0 | s[0], J = 8191 & L, Y = L >>> 13, H = 0 | s[1], T = 8191 & H, O = H >>> 13, P = 0 | s[2], j = 8191 & P, X = P >>> 13, W = 0 | s[3], V = 8191 & W, Z = W >>> 13, z = 0 | s[4], $ = 8191 & z, AA = z >>> 13, tA = 0 | s[5], eA = 8191 & tA, rA = tA >>> 13, nA = 0 | s[6], iA = 8191 & nA, oA = nA >>> 13, sA = 0 | s[7], aA = 8191 & sA, cA = sA >>> 13, gA = 0 | s[8], uA = 8191 & gA, hA = gA >>> 13, IA = 0 | s[9], lA = 8191 & IA, EA = IA >>> 13;
                e.negative = A.negative ^ t.negative,
                e.length = 19;
                var BA = (c + (r = Math.imul(u, J)) | 0) + ((8191 & (n = (n = Math.imul(u, Y)) + Math.imul(h, J) | 0)) << 13) | 0;
                c = ((i = Math.imul(h, Y)) + (n >>> 13) | 0) + (BA >>> 26) | 0,
                BA &= 67108863,
                r = Math.imul(l, J),
                n = (n = Math.imul(l, Y)) + Math.imul(E, J) | 0,
                i = Math.imul(E, Y);
                var CA = (c + (r = r + Math.imul(u, T) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, O) | 0) + Math.imul(h, T) | 0)) << 13) | 0;
                c = ((i = i + Math.imul(h, O) | 0) + (n >>> 13) | 0) + (CA >>> 26) | 0,
                CA &= 67108863,
                r = Math.imul(C, J),
                n = (n = Math.imul(C, Y)) + Math.imul(Q, J) | 0,
                i = Math.imul(Q, Y),
                r = r + Math.imul(l, T) | 0,
                n = (n = n + Math.imul(l, O) | 0) + Math.imul(E, T) | 0,
                i = i + Math.imul(E, O) | 0;
                var QA = (c + (r = r + Math.imul(u, j) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, X) | 0) + Math.imul(h, j) | 0)) << 13) | 0;
                c = ((i = i + Math.imul(h, X) | 0) + (n >>> 13) | 0) + (QA >>> 26) | 0,
                QA &= 67108863,
                r = Math.imul(f, J),
                n = (n = Math.imul(f, Y)) + Math.imul(p, J) | 0,
                i = Math.imul(p, Y),
                r = r + Math.imul(C, T) | 0,
                n = (n = n + Math.imul(C, O) | 0) + Math.imul(Q, T) | 0,
                i = i + Math.imul(Q, O) | 0,
                r = r + Math.imul(l, j) | 0,
                n = (n = n + Math.imul(l, X) | 0) + Math.imul(E, j) | 0,
                i = i + Math.imul(E, X) | 0;
                var dA = (c + (r = r + Math.imul(u, V) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, Z) | 0) + Math.imul(h, V) | 0)) << 13) | 0;
                c = ((i = i + Math.imul(h, Z) | 0) + (n >>> 13) | 0) + (dA >>> 26) | 0,
                dA &= 67108863,
                r = Math.imul(w, J),
                n = (n = Math.imul(w, Y)) + Math.imul(m, J) | 0,
                i = Math.imul(m, Y),
                r = r + Math.imul(f, T) | 0,
                n = (n = n + Math.imul(f, O) | 0) + Math.imul(p, T) | 0,
                i = i + Math.imul(p, O) | 0,
                r = r + Math.imul(C, j) | 0,
                n = (n = n + Math.imul(C, X) | 0) + Math.imul(Q, j) | 0,
                i = i + Math.imul(Q, X) | 0,
                r = r + Math.imul(l, V) | 0,
                n = (n = n + Math.imul(l, Z) | 0) + Math.imul(E, V) | 0,
                i = i + Math.imul(E, Z) | 0;
                var fA = (c + (r = r + Math.imul(u, $) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, AA) | 0) + Math.imul(h, $) | 0)) << 13) | 0;
                c = ((i = i + Math.imul(h, AA) | 0) + (n >>> 13) | 0) + (fA >>> 26) | 0,
                fA &= 67108863,
                r = Math.imul(v, J),
                n = (n = Math.imul(v, Y)) + Math.imul(b, J) | 0,
                i = Math.imul(b, Y),
                r = r + Math.imul(w, T) | 0,
                n = (n = n + Math.imul(w, O) | 0) + Math.imul(m, T) | 0,
                i = i + Math.imul(m, O) | 0,
                r = r + Math.imul(f, j) | 0,
                n = (n = n + Math.imul(f, X) | 0) + Math.imul(p, j) | 0,
                i = i + Math.imul(p, X) | 0,
                r = r + Math.imul(C, V) | 0,
                n = (n = n + Math.imul(C, Z) | 0) + Math.imul(Q, V) | 0,
                i = i + Math.imul(Q, Z) | 0,
                r = r + Math.imul(l, $) | 0,
                n = (n = n + Math.imul(l, AA) | 0) + Math.imul(E, $) | 0,
                i = i + Math.imul(E, AA) | 0;
                var pA = (c + (r = r + Math.imul(u, eA) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, rA) | 0) + Math.imul(h, eA) | 0)) << 13) | 0;
                c = ((i = i + Math.imul(h, rA) | 0) + (n >>> 13) | 0) + (pA >>> 26) | 0,
                pA &= 67108863,
                r = Math.imul(S, J),
                n = (n = Math.imul(S, Y)) + Math.imul(N, J) | 0,
                i = Math.imul(N, Y),
                r = r + Math.imul(v, T) | 0,
                n = (n = n + Math.imul(v, O) | 0) + Math.imul(b, T) | 0,
                i = i + Math.imul(b, O) | 0,
                r = r + Math.imul(w, j) | 0,
                n = (n = n + Math.imul(w, X) | 0) + Math.imul(m, j) | 0,
                i = i + Math.imul(m, X) | 0,
                r = r + Math.imul(f, V) | 0,
                n = (n = n + Math.imul(f, Z) | 0) + Math.imul(p, V) | 0,
                i = i + Math.imul(p, Z) | 0,
                r = r + Math.imul(C, $) | 0,
                n = (n = n + Math.imul(C, AA) | 0) + Math.imul(Q, $) | 0,
                i = i + Math.imul(Q, AA) | 0,
                r = r + Math.imul(l, eA) | 0,
                n = (n = n + Math.imul(l, rA) | 0) + Math.imul(E, eA) | 0,
                i = i + Math.imul(E, rA) | 0;
                var yA = (c + (r = r + Math.imul(u, iA) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, oA) | 0) + Math.imul(h, iA) | 0)) << 13) | 0;
                c = ((i = i + Math.imul(h, oA) | 0) + (n >>> 13) | 0) + (yA >>> 26) | 0,
                yA &= 67108863,
                r = Math.imul(_, J),
                n = (n = Math.imul(_, Y)) + Math.imul(K, J) | 0,
                i = Math.imul(K, Y),
                r = r + Math.imul(S, T) | 0,
                n = (n = n + Math.imul(S, O) | 0) + Math.imul(N, T) | 0,
                i = i + Math.imul(N, O) | 0,
                r = r + Math.imul(v, j) | 0,
                n = (n = n + Math.imul(v, X) | 0) + Math.imul(b, j) | 0,
                i = i + Math.imul(b, X) | 0,
                r = r + Math.imul(w, V) | 0,
                n = (n = n + Math.imul(w, Z) | 0) + Math.imul(m, V) | 0,
                i = i + Math.imul(m, Z) | 0,
                r = r + Math.imul(f, $) | 0,
                n = (n = n + Math.imul(f, AA) | 0) + Math.imul(p, $) | 0,
                i = i + Math.imul(p, AA) | 0,
                r = r + Math.imul(C, eA) | 0,
                n = (n = n + Math.imul(C, rA) | 0) + Math.imul(Q, eA) | 0,
                i = i + Math.imul(Q, rA) | 0,
                r = r + Math.imul(l, iA) | 0,
                n = (n = n + Math.imul(l, oA) | 0) + Math.imul(E, iA) | 0,
                i = i + Math.imul(E, oA) | 0;
                var wA = (c + (r = r + Math.imul(u, aA) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, cA) | 0) + Math.imul(h, aA) | 0)) << 13) | 0;
                c = ((i = i + Math.imul(h, cA) | 0) + (n >>> 13) | 0) + (wA >>> 26) | 0,
                wA &= 67108863,
                r = Math.imul(F, J),
                n = (n = Math.imul(F, Y)) + Math.imul(U, J) | 0,
                i = Math.imul(U, Y),
                r = r + Math.imul(_, T) | 0,
                n = (n = n + Math.imul(_, O) | 0) + Math.imul(K, T) | 0,
                i = i + Math.imul(K, O) | 0,
                r = r + Math.imul(S, j) | 0,
                n = (n = n + Math.imul(S, X) | 0) + Math.imul(N, j) | 0,
                i = i + Math.imul(N, X) | 0,
                r = r + Math.imul(v, V) | 0,
                n = (n = n + Math.imul(v, Z) | 0) + Math.imul(b, V) | 0,
                i = i + Math.imul(b, Z) | 0,
                r = r + Math.imul(w, $) | 0,
                n = (n = n + Math.imul(w, AA) | 0) + Math.imul(m, $) | 0,
                i = i + Math.imul(m, AA) | 0,
                r = r + Math.imul(f, eA) | 0,
                n = (n = n + Math.imul(f, rA) | 0) + Math.imul(p, eA) | 0,
                i = i + Math.imul(p, rA) | 0,
                r = r + Math.imul(C, iA) | 0,
                n = (n = n + Math.imul(C, oA) | 0) + Math.imul(Q, iA) | 0,
                i = i + Math.imul(Q, oA) | 0,
                r = r + Math.imul(l, aA) | 0,
                n = (n = n + Math.imul(l, cA) | 0) + Math.imul(E, aA) | 0,
                i = i + Math.imul(E, cA) | 0;
                var mA = (c + (r = r + Math.imul(u, uA) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, hA) | 0) + Math.imul(h, uA) | 0)) << 13) | 0;
                c = ((i = i + Math.imul(h, hA) | 0) + (n >>> 13) | 0) + (mA >>> 26) | 0,
                mA &= 67108863,
                r = Math.imul(x, J),
                n = (n = Math.imul(x, Y)) + Math.imul(q, J) | 0,
                i = Math.imul(q, Y),
                r = r + Math.imul(F, T) | 0,
                n = (n = n + Math.imul(F, O) | 0) + Math.imul(U, T) | 0,
                i = i + Math.imul(U, O) | 0,
                r = r + Math.imul(_, j) | 0,
                n = (n = n + Math.imul(_, X) | 0) + Math.imul(K, j) | 0,
                i = i + Math.imul(K, X) | 0,
                r = r + Math.imul(S, V) | 0,
                n = (n = n + Math.imul(S, Z) | 0) + Math.imul(N, V) | 0,
                i = i + Math.imul(N, Z) | 0,
                r = r + Math.imul(v, $) | 0,
                n = (n = n + Math.imul(v, AA) | 0) + Math.imul(b, $) | 0,
                i = i + Math.imul(b, AA) | 0,
                r = r + Math.imul(w, eA) | 0,
                n = (n = n + Math.imul(w, rA) | 0) + Math.imul(m, eA) | 0,
                i = i + Math.imul(m, rA) | 0,
                r = r + Math.imul(f, iA) | 0,
                n = (n = n + Math.imul(f, oA) | 0) + Math.imul(p, iA) | 0,
                i = i + Math.imul(p, oA) | 0,
                r = r + Math.imul(C, aA) | 0,
                n = (n = n + Math.imul(C, cA) | 0) + Math.imul(Q, aA) | 0,
                i = i + Math.imul(Q, cA) | 0,
                r = r + Math.imul(l, uA) | 0,
                n = (n = n + Math.imul(l, hA) | 0) + Math.imul(E, uA) | 0,
                i = i + Math.imul(E, hA) | 0;
                var MA = (c + (r = r + Math.imul(u, lA) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(u, EA) | 0) + Math.imul(h, lA) | 0)) << 13) | 0;
                c = ((i = i + Math.imul(h, EA) | 0) + (n >>> 13) | 0) + (MA >>> 26) | 0,
                MA &= 67108863,
                r = Math.imul(x, T),
                n = (n = Math.imul(x, O)) + Math.imul(q, T) | 0,
                i = Math.imul(q, O),
                r = r + Math.imul(F, j) | 0,
                n = (n = n + Math.imul(F, X) | 0) + Math.imul(U, j) | 0,
                i = i + Math.imul(U, X) | 0,
                r = r + Math.imul(_, V) | 0,
                n = (n = n + Math.imul(_, Z) | 0) + Math.imul(K, V) | 0,
                i = i + Math.imul(K, Z) | 0,
                r = r + Math.imul(S, $) | 0,
                n = (n = n + Math.imul(S, AA) | 0) + Math.imul(N, $) | 0,
                i = i + Math.imul(N, AA) | 0,
                r = r + Math.imul(v, eA) | 0,
                n = (n = n + Math.imul(v, rA) | 0) + Math.imul(b, eA) | 0,
                i = i + Math.imul(b, rA) | 0,
                r = r + Math.imul(w, iA) | 0,
                n = (n = n + Math.imul(w, oA) | 0) + Math.imul(m, iA) | 0,
                i = i + Math.imul(m, oA) | 0,
                r = r + Math.imul(f, aA) | 0,
                n = (n = n + Math.imul(f, cA) | 0) + Math.imul(p, aA) | 0,
                i = i + Math.imul(p, cA) | 0,
                r = r + Math.imul(C, uA) | 0,
                n = (n = n + Math.imul(C, hA) | 0) + Math.imul(Q, uA) | 0,
                i = i + Math.imul(Q, hA) | 0;
                var vA = (c + (r = r + Math.imul(l, lA) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(l, EA) | 0) + Math.imul(E, lA) | 0)) << 13) | 0;
                c = ((i = i + Math.imul(E, EA) | 0) + (n >>> 13) | 0) + (vA >>> 26) | 0,
                vA &= 67108863,
                r = Math.imul(x, j),
                n = (n = Math.imul(x, X)) + Math.imul(q, j) | 0,
                i = Math.imul(q, X),
                r = r + Math.imul(F, V) | 0,
                n = (n = n + Math.imul(F, Z) | 0) + Math.imul(U, V) | 0,
                i = i + Math.imul(U, Z) | 0,
                r = r + Math.imul(_, $) | 0,
                n = (n = n + Math.imul(_, AA) | 0) + Math.imul(K, $) | 0,
                i = i + Math.imul(K, AA) | 0,
                r = r + Math.imul(S, eA) | 0,
                n = (n = n + Math.imul(S, rA) | 0) + Math.imul(N, eA) | 0,
                i = i + Math.imul(N, rA) | 0,
                r = r + Math.imul(v, iA) | 0,
                n = (n = n + Math.imul(v, oA) | 0) + Math.imul(b, iA) | 0,
                i = i + Math.imul(b, oA) | 0,
                r = r + Math.imul(w, aA) | 0,
                n = (n = n + Math.imul(w, cA) | 0) + Math.imul(m, aA) | 0,
                i = i + Math.imul(m, cA) | 0,
                r = r + Math.imul(f, uA) | 0,
                n = (n = n + Math.imul(f, hA) | 0) + Math.imul(p, uA) | 0,
                i = i + Math.imul(p, hA) | 0;
                var bA = (c + (r = r + Math.imul(C, lA) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(C, EA) | 0) + Math.imul(Q, lA) | 0)) << 13) | 0;
                c = ((i = i + Math.imul(Q, EA) | 0) + (n >>> 13) | 0) + (bA >>> 26) | 0,
                bA &= 67108863,
                r = Math.imul(x, V),
                n = (n = Math.imul(x, Z)) + Math.imul(q, V) | 0,
                i = Math.imul(q, Z),
                r = r + Math.imul(F, $) | 0,
                n = (n = n + Math.imul(F, AA) | 0) + Math.imul(U, $) | 0,
                i = i + Math.imul(U, AA) | 0,
                r = r + Math.imul(_, eA) | 0,
                n = (n = n + Math.imul(_, rA) | 0) + Math.imul(K, eA) | 0,
                i = i + Math.imul(K, rA) | 0,
                r = r + Math.imul(S, iA) | 0,
                n = (n = n + Math.imul(S, oA) | 0) + Math.imul(N, iA) | 0,
                i = i + Math.imul(N, oA) | 0,
                r = r + Math.imul(v, aA) | 0,
                n = (n = n + Math.imul(v, cA) | 0) + Math.imul(b, aA) | 0,
                i = i + Math.imul(b, cA) | 0,
                r = r + Math.imul(w, uA) | 0,
                n = (n = n + Math.imul(w, hA) | 0) + Math.imul(m, uA) | 0,
                i = i + Math.imul(m, hA) | 0;
                var DA = (c + (r = r + Math.imul(f, lA) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(f, EA) | 0) + Math.imul(p, lA) | 0)) << 13) | 0;
                c = ((i = i + Math.imul(p, EA) | 0) + (n >>> 13) | 0) + (DA >>> 26) | 0,
                DA &= 67108863,
                r = Math.imul(x, $),
                n = (n = Math.imul(x, AA)) + Math.imul(q, $) | 0,
                i = Math.imul(q, AA),
                r = r + Math.imul(F, eA) | 0,
                n = (n = n + Math.imul(F, rA) | 0) + Math.imul(U, eA) | 0,
                i = i + Math.imul(U, rA) | 0,
                r = r + Math.imul(_, iA) | 0,
                n = (n = n + Math.imul(_, oA) | 0) + Math.imul(K, iA) | 0,
                i = i + Math.imul(K, oA) | 0,
                r = r + Math.imul(S, aA) | 0,
                n = (n = n + Math.imul(S, cA) | 0) + Math.imul(N, aA) | 0,
                i = i + Math.imul(N, cA) | 0,
                r = r + Math.imul(v, uA) | 0,
                n = (n = n + Math.imul(v, hA) | 0) + Math.imul(b, uA) | 0,
                i = i + Math.imul(b, hA) | 0;
                var SA = (c + (r = r + Math.imul(w, lA) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(w, EA) | 0) + Math.imul(m, lA) | 0)) << 13) | 0;
                c = ((i = i + Math.imul(m, EA) | 0) + (n >>> 13) | 0) + (SA >>> 26) | 0,
                SA &= 67108863,
                r = Math.imul(x, eA),
                n = (n = Math.imul(x, rA)) + Math.imul(q, eA) | 0,
                i = Math.imul(q, rA),
                r = r + Math.imul(F, iA) | 0,
                n = (n = n + Math.imul(F, oA) | 0) + Math.imul(U, iA) | 0,
                i = i + Math.imul(U, oA) | 0,
                r = r + Math.imul(_, aA) | 0,
                n = (n = n + Math.imul(_, cA) | 0) + Math.imul(K, aA) | 0,
                i = i + Math.imul(K, cA) | 0,
                r = r + Math.imul(S, uA) | 0,
                n = (n = n + Math.imul(S, hA) | 0) + Math.imul(N, uA) | 0,
                i = i + Math.imul(N, hA) | 0;
                var NA = (c + (r = r + Math.imul(v, lA) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(v, EA) | 0) + Math.imul(b, lA) | 0)) << 13) | 0;
                c = ((i = i + Math.imul(b, EA) | 0) + (n >>> 13) | 0) + (NA >>> 26) | 0,
                NA &= 67108863,
                r = Math.imul(x, iA),
                n = (n = Math.imul(x, oA)) + Math.imul(q, iA) | 0,
                i = Math.imul(q, oA),
                r = r + Math.imul(F, aA) | 0,
                n = (n = n + Math.imul(F, cA) | 0) + Math.imul(U, aA) | 0,
                i = i + Math.imul(U, cA) | 0,
                r = r + Math.imul(_, uA) | 0,
                n = (n = n + Math.imul(_, hA) | 0) + Math.imul(K, uA) | 0,
                i = i + Math.imul(K, hA) | 0;
                var kA = (c + (r = r + Math.imul(S, lA) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(S, EA) | 0) + Math.imul(N, lA) | 0)) << 13) | 0;
                c = ((i = i + Math.imul(N, EA) | 0) + (n >>> 13) | 0) + (kA >>> 26) | 0,
                kA &= 67108863,
                r = Math.imul(x, aA),
                n = (n = Math.imul(x, cA)) + Math.imul(q, aA) | 0,
                i = Math.imul(q, cA),
                r = r + Math.imul(F, uA) | 0,
                n = (n = n + Math.imul(F, hA) | 0) + Math.imul(U, uA) | 0,
                i = i + Math.imul(U, hA) | 0;
                var _A = (c + (r = r + Math.imul(_, lA) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(_, EA) | 0) + Math.imul(K, lA) | 0)) << 13) | 0;
                c = ((i = i + Math.imul(K, EA) | 0) + (n >>> 13) | 0) + (_A >>> 26) | 0,
                _A &= 67108863,
                r = Math.imul(x, uA),
                n = (n = Math.imul(x, hA)) + Math.imul(q, uA) | 0,
                i = Math.imul(q, hA);
                var KA = (c + (r = r + Math.imul(F, lA) | 0) | 0) + ((8191 & (n = (n = n + Math.imul(F, EA) | 0) + Math.imul(U, lA) | 0)) << 13) | 0;
                c = ((i = i + Math.imul(U, EA) | 0) + (n >>> 13) | 0) + (KA >>> 26) | 0,
                KA &= 67108863;
                var RA = (c + (r = Math.imul(x, lA)) | 0) + ((8191 & (n = (n = Math.imul(x, EA)) + Math.imul(q, lA) | 0)) << 13) | 0;
                return c = ((i = Math.imul(q, EA)) + (n >>> 13) | 0) + (RA >>> 26) | 0,
                RA &= 67108863,
                a[0] = BA,
                a[1] = CA,
                a[2] = QA,
                a[3] = dA,
                a[4] = fA,
                a[5] = pA,
                a[6] = yA,
                a[7] = wA,
                a[8] = mA,
                a[9] = MA,
                a[10] = vA,
                a[11] = bA,
                a[12] = DA,
                a[13] = SA,
                a[14] = NA,
                a[15] = kA,
                a[16] = _A,
                a[17] = KA,
                a[18] = RA,
                0 !== c && (a[19] = c,
                e.length++),
                e
            };
            function C(A, t, e) {
                e.negative = t.negative ^ A.negative,
                e.length = A.length + t.length;
                for (var r = 0, n = 0, i = 0; i < e.length - 1; i++) {
                    var o = n;
                    n = 0;
                    for (var s = 67108863 & r, a = Math.min(i, t.length - 1), c = Math.max(0, i - A.length + 1); c <= a; c++) {
                        var g = i - c
                          , u = (0 | A.words[g]) * (0 | t.words[c])
                          , h = 67108863 & u;
                        s = 67108863 & (h = h + s | 0),
                        n += (o = (o = o + (u / 67108864 | 0) | 0) + (h >>> 26) | 0) >>> 26,
                        o &= 67108863
                    }
                    e.words[i] = s,
                    r = o,
                    o = n
                }
                return 0 !== r ? e.words[i] = r : e.length--,
                e._strip()
            }
            function Q(A, t, e) {
                return C(A, t, e)
            }
            function d(A, t) {
                this.x = A,
                this.y = t
            }
            Math.imul || (B = E),
            i.prototype.mulTo = function(A, t) {
                var e = this.length + A.length;
                return 10 === this.length && 10 === A.length ? B(this, A, t) : e < 63 ? E(this, A, t) : e < 1024 ? C(this, A, t) : Q(this, A, t)
            }
            ,
            d.prototype.makeRBT = function(A) {
                for (var t = new Array(A), e = i.prototype._countBits(A) - 1, r = 0; r < A; r++)
                    t[r] = this.revBin(r, e, A);
                return t
            }
            ,
            d.prototype.revBin = function(A, t, e) {
                if (0 === A || A === e - 1)
                    return A;
                for (var r = 0, n = 0; n < t; n++)
                    r |= (1 & A) << t - n - 1,
                    A >>= 1;
                return r
            }
            ,
            d.prototype.permute = function(A, t, e, r, n, i) {
                for (var o = 0; o < i; o++)
                    r[o] = t[A[o]],
                    n[o] = e[A[o]]
            }
            ,
            d.prototype.transform = function(A, t, e, r, n, i) {
                this.permute(i, A, t, e, r, n);
                for (var o = 1; o < n; o <<= 1)
                    for (var s = o << 1, a = Math.cos(2 * Math.PI / s), c = Math.sin(2 * Math.PI / s), g = 0; g < n; g += s)
                        for (var u = a, h = c, I = 0; I < o; I++) {
                            var l = e[g + I]
                              , E = r[g + I]
                              , B = e[g + I + o]
                              , C = r[g + I + o]
                              , Q = u * B - h * C;
                            C = u * C + h * B,
                            B = Q,
                            e[g + I] = l + B,
                            r[g + I] = E + C,
                            e[g + I + o] = l - B,
                            r[g + I + o] = E - C,
                            I !== s && (Q = a * u - c * h,
                            h = a * h + c * u,
                            u = Q)
                        }
            }
            ,
            d.prototype.guessLen13b = function(A, t) {
                var e = 1 | Math.max(t, A)
                  , r = 1 & e
                  , n = 0;
                for (e = e / 2 | 0; e; e >>>= 1)
                    n++;
                return 1 << n + 1 + r
            }
            ,
            d.prototype.conjugate = function(A, t, e) {
                if (!(e <= 1))
                    for (var r = 0; r < e / 2; r++) {
                        var n = A[r];
                        A[r] = A[e - r - 1],
                        A[e - r - 1] = n,
                        n = t[r],
                        t[r] = -t[e - r - 1],
                        t[e - r - 1] = -n
                    }
            }
            ,
            d.prototype.normalize13b = function(A, t) {
                for (var e = 0, r = 0; r < t / 2; r++) {
                    var n = 8192 * Math.round(A[2 * r + 1] / t) + Math.round(A[2 * r] / t) + e;
                    A[r] = 67108863 & n,
                    e = n < 67108864 ? 0 : n / 67108864 | 0
                }
                return A
            }
            ,
            d.prototype.convert13b = function(A, t, e, n) {
                for (var i = 0, o = 0; o < t; o++)
                    i += 0 | A[o],
                    e[2 * o] = 8191 & i,
                    i >>>= 13,
                    e[2 * o + 1] = 8191 & i,
                    i >>>= 13;
                for (o = 2 * t; o < n; ++o)
                    e[o] = 0;
                r(0 === i),
                r(0 === (-8192 & i))
            }
            ,
            d.prototype.stub = function(A) {
                for (var t = new Array(A), e = 0; e < A; e++)
                    t[e] = 0;
                return t
            }
            ,
            d.prototype.mulp = function(A, t, e) {
                var r = 2 * this.guessLen13b(A.length, t.length)
                  , n = this.makeRBT(r)
                  , i = this.stub(r)
                  , o = new Array(r)
                  , s = new Array(r)
                  , a = new Array(r)
                  , c = new Array(r)
                  , g = new Array(r)
                  , u = new Array(r)
                  , h = e.words;
                h.length = r,
                this.convert13b(A.words, A.length, o, r),
                this.convert13b(t.words, t.length, c, r),
                this.transform(o, i, s, a, r, n),
                this.transform(c, i, g, u, r, n);
                for (var I = 0; I < r; I++) {
                    var l = s[I] * g[I] - a[I] * u[I];
                    a[I] = s[I] * u[I] + a[I] * g[I],
                    s[I] = l
                }
                return this.conjugate(s, a, r),
                this.transform(s, a, h, i, r, n),
                this.conjugate(h, i, r),
                this.normalize13b(h, r),
                e.negative = A.negative ^ t.negative,
                e.length = A.length + t.length,
                e._strip()
            }
            ,
            i.prototype.mul = function(A) {
                var t = new i(null);
                return t.words = new Array(this.length + A.length),
                this.mulTo(A, t)
            }
            ,
            i.prototype.mulf = function(A) {
                var t = new i(null);
                return t.words = new Array(this.length + A.length),
                Q(this, A, t)
            }
            ,
            i.prototype.imul = function(A) {
                return this.clone().mulTo(A, this)
            }
            ,
            i.prototype.imuln = function(A) {
                var t = A < 0;
                t && (A = -A),
                r("number" === typeof A),
                r(A < 67108864);
                for (var e = 0, n = 0; n < this.length; n++) {
                    var i = (0 | this.words[n]) * A
                      , o = (67108863 & i) + (67108863 & e);
                    e >>= 26,
                    e += i / 67108864 | 0,
                    e += o >>> 26,
                    this.words[n] = 67108863 & o
                }
                return 0 !== e && (this.words[n] = e,
                this.length++),
                t ? this.ineg() : this
            }
            ,
            i.prototype.muln = function(A) {
                return this.clone().imuln(A)
            }
            ,
            i.prototype.sqr = function() {
                return this.mul(this)
            }
            ,
            i.prototype.isqr = function() {
                return this.imul(this.clone())
            }
            ,
            i.prototype.pow = function(A) {
                var t = function(A) {
                    for (var t = new Array(A.bitLength()), e = 0; e < t.length; e++) {
                        var r = e / 26 | 0
                          , n = e % 26;
                        t[e] = A.words[r] >>> n & 1
                    }
                    return t
                }(A);
                if (0 === t.length)
                    return new i(1);
                for (var e = this, r = 0; r < t.length && 0 === t[r]; r++,
                e = e.sqr())
                    ;
                if (++r < t.length)
                    for (var n = e.sqr(); r < t.length; r++,
                    n = n.sqr())
                        0 !== t[r] && (e = e.mul(n));
                return e
            }
            ,
            i.prototype.iushln = function(A) {
                r("number" === typeof A && A >= 0);
                var t, e = A % 26, n = (A - e) / 26, i = 67108863 >>> 26 - e << 26 - e;
                if (0 !== e) {
                    var o = 0;
                    for (t = 0; t < this.length; t++) {
                        var s = this.words[t] & i
                          , a = (0 | this.words[t]) - s << e;
                        this.words[t] = a | o,
                        o = s >>> 26 - e
                    }
                    o && (this.words[t] = o,
                    this.length++)
                }
                if (0 !== n) {
                    for (t = this.length - 1; t >= 0; t--)
                        this.words[t + n] = this.words[t];
                    for (t = 0; t < n; t++)
                        this.words[t] = 0;
                    this.length += n
                }
                return this._strip()
            }
            ,
            i.prototype.ishln = function(A) {
                return r(0 === this.negative),
                this.iushln(A)
            }
            ,
            i.prototype.iushrn = function(A, t, e) {
                var n;
                r("number" === typeof A && A >= 0),
                n = t ? (t - t % 26) / 26 : 0;
                var i = A % 26
                  , o = Math.min((A - i) / 26, this.length)
                  , s = 67108863 ^ 67108863 >>> i << i
                  , a = e;
                if (n -= o,
                n = Math.max(0, n),
                a) {
                    for (var c = 0; c < o; c++)
                        a.words[c] = this.words[c];
                    a.length = o
                }
                if (0 === o)
                    ;
                else if (this.length > o)
                    for (this.length -= o,
                    c = 0; c < this.length; c++)
                        this.words[c] = this.words[c + o];
                else
                    this.words[0] = 0,
                    this.length = 1;
                var g = 0;
                for (c = this.length - 1; c >= 0 && (0 !== g || c >= n); c--) {
                    var u = 0 | this.words[c];
                    this.words[c] = g << 26 - i | u >>> i,
                    g = u & s
                }
                return a && 0 !== g && (a.words[a.length++] = g),
                0 === this.length && (this.words[0] = 0,
                this.length = 1),
                this._strip()
            }
            ,
            i.prototype.ishrn = function(A, t, e) {
                return r(0 === this.negative),
                this.iushrn(A, t, e)
            }
            ,
            i.prototype.shln = function(A) {
                return this.clone().ishln(A)
            }
            ,
            i.prototype.ushln = function(A) {
                return this.clone().iushln(A)
            }
            ,
            i.prototype.shrn = function(A) {
                return this.clone().ishrn(A)
            }
            ,
            i.prototype.ushrn = function(A) {
                return this.clone().iushrn(A)
            }
            ,
            i.prototype.testn = function(A) {
                r("number" === typeof A && A >= 0);
                var t = A % 26
                  , e = (A - t) / 26
                  , n = 1 << t;
                return !(this.length <= e) && !!(this.words[e] & n)
            }
            ,
            i.prototype.imaskn = function(A) {
                r("number" === typeof A && A >= 0);
                var t = A % 26
                  , e = (A - t) / 26;
                if (r(0 === this.negative, "imaskn works only with positive numbers"),
                this.length <= e)
                    return this;
                if (0 !== t && e++,
                this.length = Math.min(e, this.length),
                0 !== t) {
                    var n = 67108863 ^ 67108863 >>> t << t;
                    this.words[this.length - 1] &= n
                }
                return this._strip()
            }
            ,
            i.prototype.maskn = function(A) {
                return this.clone().imaskn(A)
            }
            ,
            i.prototype.iaddn = function(A) {
                return r("number" === typeof A),
                r(A < 67108864),
                A < 0 ? this.isubn(-A) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= A ? (this.words[0] = A - (0 | this.words[0]),
                this.negative = 0,
                this) : (this.negative = 0,
                this.isubn(A),
                this.negative = 1,
                this) : this._iaddn(A)
            }
            ,
            i.prototype._iaddn = function(A) {
                this.words[0] += A;
                for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
                    this.words[t] -= 67108864,
                    t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                return this.length = Math.max(this.length, t + 1),
                this
            }
            ,
            i.prototype.isubn = function(A) {
                if (r("number" === typeof A),
                r(A < 67108864),
                A < 0)
                    return this.iaddn(-A);
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iaddn(A),
                    this.negative = 1,
                    this;
                if (this.words[0] -= A,
                1 === this.length && this.words[0] < 0)
                    this.words[0] = -this.words[0],
                    this.negative = 1;
                else
                    for (var t = 0; t < this.length && this.words[t] < 0; t++)
                        this.words[t] += 67108864,
                        this.words[t + 1] -= 1;
                return this._strip()
            }
            ,
            i.prototype.addn = function(A) {
                return this.clone().iaddn(A)
            }
            ,
            i.prototype.subn = function(A) {
                return this.clone().isubn(A)
            }
            ,
            i.prototype.iabs = function() {
                return this.negative = 0,
                this
            }
            ,
            i.prototype.abs = function() {
                return this.clone().iabs()
            }
            ,
            i.prototype._ishlnsubmul = function(A, t, e) {
                var n, i, o = A.length + e;
                this._expand(o);
                var s = 0;
                for (n = 0; n < A.length; n++) {
                    i = (0 | this.words[n + e]) + s;
                    var a = (0 | A.words[n]) * t;
                    s = ((i -= 67108863 & a) >> 26) - (a / 67108864 | 0),
                    this.words[n + e] = 67108863 & i
                }
                for (; n < this.length - e; n++)
                    s = (i = (0 | this.words[n + e]) + s) >> 26,
                    this.words[n + e] = 67108863 & i;
                if (0 === s)
                    return this._strip();
                for (r(-1 === s),
                s = 0,
                n = 0; n < this.length; n++)
                    s = (i = -(0 | this.words[n]) + s) >> 26,
                    this.words[n] = 67108863 & i;
                return this.negative = 1,
                this._strip()
            }
            ,
            i.prototype._wordDiv = function(A, t) {
                var e = (this.length,
                A.length)
                  , r = this.clone()
                  , n = A
                  , o = 0 | n.words[n.length - 1];
                0 !== (e = 26 - this._countBits(o)) && (n = n.ushln(e),
                r.iushln(e),
                o = 0 | n.words[n.length - 1]);
                var s, a = r.length - n.length;
                if ("mod" !== t) {
                    (s = new i(null)).length = a + 1,
                    s.words = new Array(s.length);
                    for (var c = 0; c < s.length; c++)
                        s.words[c] = 0
                }
                var g = r.clone()._ishlnsubmul(n, 1, a);
                0 === g.negative && (r = g,
                s && (s.words[a] = 1));
                for (var u = a - 1; u >= 0; u--) {
                    var h = 67108864 * (0 | r.words[n.length + u]) + (0 | r.words[n.length + u - 1]);
                    for (h = Math.min(h / o | 0, 67108863),
                    r._ishlnsubmul(n, h, u); 0 !== r.negative; )
                        h--,
                        r.negative = 0,
                        r._ishlnsubmul(n, 1, u),
                        r.isZero() || (r.negative ^= 1);
                    s && (s.words[u] = h)
                }
                return s && s._strip(),
                r._strip(),
                "div" !== t && 0 !== e && r.iushrn(e),
                {
                    div: s || null,
                    mod: r
                }
            }
            ,
            i.prototype.divmod = function(A, t, e) {
                return r(!A.isZero()),
                this.isZero() ? {
                    div: new i(0),
                    mod: new i(0)
                } : 0 !== this.negative && 0 === A.negative ? (s = this.neg().divmod(A, t),
                "mod" !== t && (n = s.div.neg()),
                "div" !== t && (o = s.mod.neg(),
                e && 0 !== o.negative && o.iadd(A)),
                {
                    div: n,
                    mod: o
                }) : 0 === this.negative && 0 !== A.negative ? (s = this.divmod(A.neg(), t),
                "mod" !== t && (n = s.div.neg()),
                {
                    div: n,
                    mod: s.mod
                }) : 0 !== (this.negative & A.negative) ? (s = this.neg().divmod(A.neg(), t),
                "div" !== t && (o = s.mod.neg(),
                e && 0 !== o.negative && o.isub(A)),
                {
                    div: s.div,
                    mod: o
                }) : A.length > this.length || this.cmp(A) < 0 ? {
                    div: new i(0),
                    mod: this
                } : 1 === A.length ? "div" === t ? {
                    div: this.divn(A.words[0]),
                    mod: null
                } : "mod" === t ? {
                    div: null,
                    mod: new i(this.modrn(A.words[0]))
                } : {
                    div: this.divn(A.words[0]),
                    mod: new i(this.modrn(A.words[0]))
                } : this._wordDiv(A, t);
                var n, o, s
            }
            ,
            i.prototype.div = function(A) {
                return this.divmod(A, "div", !1).div
            }
            ,
            i.prototype.mod = function(A) {
                return this.divmod(A, "mod", !1).mod
            }
            ,
            i.prototype.umod = function(A) {
                return this.divmod(A, "mod", !0).mod
            }
            ,
            i.prototype.divRound = function(A) {
                var t = this.divmod(A);
                if (t.mod.isZero())
                    return t.div;
                var e = 0 !== t.div.negative ? t.mod.isub(A) : t.mod
                  , r = A.ushrn(1)
                  , n = A.andln(1)
                  , i = e.cmp(r);
                return i < 0 || 1 === n && 0 === i ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
            }
            ,
            i.prototype.modrn = function(A) {
                var t = A < 0;
                t && (A = -A),
                r(A <= 67108863);
                for (var e = (1 << 26) % A, n = 0, i = this.length - 1; i >= 0; i--)
                    n = (e * n + (0 | this.words[i])) % A;
                return t ? -n : n
            }
            ,
            i.prototype.modn = function(A) {
                return this.modrn(A)
            }
            ,
            i.prototype.idivn = function(A) {
                var t = A < 0;
                t && (A = -A),
                r(A <= 67108863);
                for (var e = 0, n = this.length - 1; n >= 0; n--) {
                    var i = (0 | this.words[n]) + 67108864 * e;
                    this.words[n] = i / A | 0,
                    e = i % A
                }
                return this._strip(),
                t ? this.ineg() : this
            }
            ,
            i.prototype.divn = function(A) {
                return this.clone().idivn(A)
            }
            ,
            i.prototype.egcd = function(A) {
                r(0 === A.negative),
                r(!A.isZero());
                var t = this
                  , e = A.clone();
                t = 0 !== t.negative ? t.umod(A) : t.clone();
                for (var n = new i(1), o = new i(0), s = new i(0), a = new i(1), c = 0; t.isEven() && e.isEven(); )
                    t.iushrn(1),
                    e.iushrn(1),
                    ++c;
                for (var g = e.clone(), u = t.clone(); !t.isZero(); ) {
                    for (var h = 0, I = 1; 0 === (t.words[0] & I) && h < 26; ++h,
                    I <<= 1)
                        ;
                    if (h > 0)
                        for (t.iushrn(h); h-- > 0; )
                            (n.isOdd() || o.isOdd()) && (n.iadd(g),
                            o.isub(u)),
                            n.iushrn(1),
                            o.iushrn(1);
                    for (var l = 0, E = 1; 0 === (e.words[0] & E) && l < 26; ++l,
                    E <<= 1)
                        ;
                    if (l > 0)
                        for (e.iushrn(l); l-- > 0; )
                            (s.isOdd() || a.isOdd()) && (s.iadd(g),
                            a.isub(u)),
                            s.iushrn(1),
                            a.iushrn(1);
                    t.cmp(e) >= 0 ? (t.isub(e),
                    n.isub(s),
                    o.isub(a)) : (e.isub(t),
                    s.isub(n),
                    a.isub(o))
                }
                return {
                    a: s,
                    b: a,
                    gcd: e.iushln(c)
                }
            }
            ,
            i.prototype._invmp = function(A) {
                r(0 === A.negative),
                r(!A.isZero());
                var t = this
                  , e = A.clone();
                t = 0 !== t.negative ? t.umod(A) : t.clone();
                for (var n, o = new i(1), s = new i(0), a = e.clone(); t.cmpn(1) > 0 && e.cmpn(1) > 0; ) {
                    for (var c = 0, g = 1; 0 === (t.words[0] & g) && c < 26; ++c,
                    g <<= 1)
                        ;
                    if (c > 0)
                        for (t.iushrn(c); c-- > 0; )
                            o.isOdd() && o.iadd(a),
                            o.iushrn(1);
                    for (var u = 0, h = 1; 0 === (e.words[0] & h) && u < 26; ++u,
                    h <<= 1)
                        ;
                    if (u > 0)
                        for (e.iushrn(u); u-- > 0; )
                            s.isOdd() && s.iadd(a),
                            s.iushrn(1);
                    t.cmp(e) >= 0 ? (t.isub(e),
                    o.isub(s)) : (e.isub(t),
                    s.isub(o))
                }
                return (n = 0 === t.cmpn(1) ? o : s).cmpn(0) < 0 && n.iadd(A),
                n
            }
            ,
            i.prototype.gcd = function(A) {
                if (this.isZero())
                    return A.abs();
                if (A.isZero())
                    return this.abs();
                var t = this.clone()
                  , e = A.clone();
                t.negative = 0,
                e.negative = 0;
                for (var r = 0; t.isEven() && e.isEven(); r++)
                    t.iushrn(1),
                    e.iushrn(1);
                for (; ; ) {
                    for (; t.isEven(); )
                        t.iushrn(1);
                    for (; e.isEven(); )
                        e.iushrn(1);
                    var n = t.cmp(e);
                    if (n < 0) {
                        var i = t;
                        t = e,
                        e = i
                    } else if (0 === n || 0 === e.cmpn(1))
                        break;
                    t.isub(e)
                }
                return e.iushln(r)
            }
            ,
            i.prototype.invm = function(A) {
                return this.egcd(A).a.umod(A)
            }
            ,
            i.prototype.isEven = function() {
                return 0 === (1 & this.words[0])
            }
            ,
            i.prototype.isOdd = function() {
                return 1 === (1 & this.words[0])
            }
            ,
            i.prototype.andln = function(A) {
                return this.words[0] & A
            }
            ,
            i.prototype.bincn = function(A) {
                r("number" === typeof A);
                var t = A % 26
                  , e = (A - t) / 26
                  , n = 1 << t;
                if (this.length <= e)
                    return this._expand(e + 1),
                    this.words[e] |= n,
                    this;
                for (var i = n, o = e; 0 !== i && o < this.length; o++) {
                    var s = 0 | this.words[o];
                    i = (s += i) >>> 26,
                    s &= 67108863,
                    this.words[o] = s
                }
                return 0 !== i && (this.words[o] = i,
                this.length++),
                this
            }
            ,
            i.prototype.isZero = function() {
                return 1 === this.length && 0 === this.words[0]
            }
            ,
            i.prototype.cmpn = function(A) {
                var t, e = A < 0;
                if (0 !== this.negative && !e)
                    return -1;
                if (0 === this.negative && e)
                    return 1;
                if (this._strip(),
                this.length > 1)
                    t = 1;
                else {
                    e && (A = -A),
                    r(A <= 67108863, "Number is too big");
                    var n = 0 | this.words[0];
                    t = n === A ? 0 : n < A ? -1 : 1
                }
                return 0 !== this.negative ? 0 | -t : t
            }
            ,
            i.prototype.cmp = function(A) {
                if (0 !== this.negative && 0 === A.negative)
                    return -1;
                if (0 === this.negative && 0 !== A.negative)
                    return 1;
                var t = this.ucmp(A);
                return 0 !== this.negative ? 0 | -t : t
            }
            ,
            i.prototype.ucmp = function(A) {
                if (this.length > A.length)
                    return 1;
                if (this.length < A.length)
                    return -1;
                for (var t = 0, e = this.length - 1; e >= 0; e--) {
                    var r = 0 | this.words[e]
                      , n = 0 | A.words[e];
                    if (r !== n) {
                        r < n ? t = -1 : r > n && (t = 1);
                        break
                    }
                }
                return t
            }
            ,
            i.prototype.gtn = function(A) {
                return 1 === this.cmpn(A)
            }
            ,
            i.prototype.gt = function(A) {
                return 1 === this.cmp(A)
            }
            ,
            i.prototype.gten = function(A) {
                return this.cmpn(A) >= 0
            }
            ,
            i.prototype.gte = function(A) {
                return this.cmp(A) >= 0
            }
            ,
            i.prototype.ltn = function(A) {
                return -1 === this.cmpn(A)
            }
            ,
            i.prototype.lt = function(A) {
                return -1 === this.cmp(A)
            }
            ,
            i.prototype.lten = function(A) {
                return this.cmpn(A) <= 0
            }
            ,
            i.prototype.lte = function(A) {
                return this.cmp(A) <= 0
            }
            ,
            i.prototype.eqn = function(A) {
                return 0 === this.cmpn(A)
            }
            ,
            i.prototype.eq = function(A) {
                return 0 === this.cmp(A)
            }
            ,
            i.red = function(A) {
                return new v(A)
            }
            ,
            i.prototype.toRed = function(A) {
                return r(!this.red, "Already a number in reduction context"),
                r(0 === this.negative, "red works only with positives"),
                A.convertTo(this)._forceRed(A)
            }
            ,
            i.prototype.fromRed = function() {
                return r(this.red, "fromRed works only with numbers in reduction context"),
                this.red.convertFrom(this)
            }
            ,
            i.prototype._forceRed = function(A) {
                return this.red = A,
                this
            }
            ,
            i.prototype.forceRed = function(A) {
                return r(!this.red, "Already a number in reduction context"),
                this._forceRed(A)
            }
            ,
            i.prototype.redAdd = function(A) {
                return r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, A)
            }
            ,
            i.prototype.redIAdd = function(A) {
                return r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, A)
            }
            ,
            i.prototype.redSub = function(A) {
                return r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, A)
            }
            ,
            i.prototype.redISub = function(A) {
                return r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, A)
            }
            ,
            i.prototype.redShl = function(A) {
                return r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, A)
            }
            ,
            i.prototype.redMul = function(A) {
                return r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, A),
                this.red.mul(this, A)
            }
            ,
            i.prototype.redIMul = function(A) {
                return r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, A),
                this.red.imul(this, A)
            }
            ,
            i.prototype.redSqr = function() {
                return r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
            }
            ,
            i.prototype.redISqr = function() {
                return r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
            }
            ,
            i.prototype.redSqrt = function() {
                return r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
            }
            ,
            i.prototype.redInvm = function() {
                return r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
            }
            ,
            i.prototype.redNeg = function() {
                return r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
            }
            ,
            i.prototype.redPow = function(A) {
                return r(this.red && !A.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, A)
            }
            ;
            var f = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };
            function p(A, t) {
                this.name = A,
                this.p = new i(t,16),
                this.n = this.p.bitLength(),
                this.k = new i(1).iushln(this.n).isub(this.p),
                this.tmp = this._tmp()
            }
            function y() {
                p.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            function w() {
                p.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            function m() {
                p.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            function M() {
                p.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            function v(A) {
                if ("string" === typeof A) {
                    var t = i._prime(A);
                    this.m = t.p,
                    this.prime = t
                } else
                    r(A.gtn(1), "modulus must be greater than 1"),
                    this.m = A,
                    this.prime = null
            }
            function b(A) {
                v.call(this, A),
                this.shift = this.m.bitLength(),
                this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26),
                this.r = new i(1).iushln(this.shift),
                this.r2 = this.imod(this.r.sqr()),
                this.rinv = this.r._invmp(this.m),
                this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
                this.minv = this.minv.umod(this.r),
                this.minv = this.r.sub(this.minv)
            }
            p.prototype._tmp = function() {
                var A = new i(null);
                return A.words = new Array(Math.ceil(this.n / 13)),
                A
            }
            ,
            p.prototype.ireduce = function(A) {
                var t, e = A;
                do {
                    this.split(e, this.tmp),
                    t = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength()
                } while (t > this.n);
                var r = t < this.n ? -1 : e.ucmp(this.p);
                return 0 === r ? (e.words[0] = 0,
                e.length = 1) : r > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(),
                e
            }
            ,
            p.prototype.split = function(A, t) {
                A.iushrn(this.n, 0, t)
            }
            ,
            p.prototype.imulK = function(A) {
                return A.imul(this.k)
            }
            ,
            n(y, p),
            y.prototype.split = function(A, t) {
                for (var e = 4194303, r = Math.min(A.length, 9), n = 0; n < r; n++)
                    t.words[n] = A.words[n];
                if (t.length = r,
                A.length <= 9)
                    return A.words[0] = 0,
                    void (A.length = 1);
                var i = A.words[9];
                for (t.words[t.length++] = i & e,
                n = 10; n < A.length; n++) {
                    var o = 0 | A.words[n];
                    A.words[n - 10] = (o & e) << 4 | i >>> 22,
                    i = o
                }
                i >>>= 22,
                A.words[n - 10] = i,
                0 === i && A.length > 10 ? A.length -= 10 : A.length -= 9
            }
            ,
            y.prototype.imulK = function(A) {
                A.words[A.length] = 0,
                A.words[A.length + 1] = 0,
                A.length += 2;
                for (var t = 0, e = 0; e < A.length; e++) {
                    var r = 0 | A.words[e];
                    t += 977 * r,
                    A.words[e] = 67108863 & t,
                    t = 64 * r + (t / 67108864 | 0)
                }
                return 0 === A.words[A.length - 1] && (A.length--,
                0 === A.words[A.length - 1] && A.length--),
                A
            }
            ,
            n(w, p),
            n(m, p),
            n(M, p),
            M.prototype.imulK = function(A) {
                for (var t = 0, e = 0; e < A.length; e++) {
                    var r = 19 * (0 | A.words[e]) + t
                      , n = 67108863 & r;
                    r >>>= 26,
                    A.words[e] = n,
                    t = r
                }
                return 0 !== t && (A.words[A.length++] = t),
                A
            }
            ,
            i._prime = function(A) {
                if (f[A])
                    return f[A];
                var t;
                if ("k256" === A)
                    t = new y;
                else if ("p224" === A)
                    t = new w;
                else if ("p192" === A)
                    t = new m;
                else {
                    if ("p25519" !== A)
                        throw new Error("Unknown prime " + A);
                    t = new M
                }
                return f[A] = t,
                t
            }
            ,
            v.prototype._verify1 = function(A) {
                r(0 === A.negative, "red works only with positives"),
                r(A.red, "red works only with red numbers")
            }
            ,
            v.prototype._verify2 = function(A, t) {
                r(0 === (A.negative | t.negative), "red works only with positives"),
                r(A.red && A.red === t.red, "red works only with red numbers")
            }
            ,
            v.prototype.imod = function(A) {
                return this.prime ? this.prime.ireduce(A)._forceRed(this) : (g(A, A.umod(this.m)._forceRed(this)),
                A)
            }
            ,
            v.prototype.neg = function(A) {
                return A.isZero() ? A.clone() : this.m.sub(A)._forceRed(this)
            }
            ,
            v.prototype.add = function(A, t) {
                this._verify2(A, t);
                var e = A.add(t);
                return e.cmp(this.m) >= 0 && e.isub(this.m),
                e._forceRed(this)
            }
            ,
            v.prototype.iadd = function(A, t) {
                this._verify2(A, t);
                var e = A.iadd(t);
                return e.cmp(this.m) >= 0 && e.isub(this.m),
                e
            }
            ,
            v.prototype.sub = function(A, t) {
                this._verify2(A, t);
                var e = A.sub(t);
                return e.cmpn(0) < 0 && e.iadd(this.m),
                e._forceRed(this)
            }
            ,
            v.prototype.isub = function(A, t) {
                this._verify2(A, t);
                var e = A.isub(t);
                return e.cmpn(0) < 0 && e.iadd(this.m),
                e
            }
            ,
            v.prototype.shl = function(A, t) {
                return this._verify1(A),
                this.imod(A.ushln(t))
            }
            ,
            v.prototype.imul = function(A, t) {
                return this._verify2(A, t),
                this.imod(A.imul(t))
            }
            ,
            v.prototype.mul = function(A, t) {
                return this._verify2(A, t),
                this.imod(A.mul(t))
            }
            ,
            v.prototype.isqr = function(A) {
                return this.imul(A, A.clone())
            }
            ,
            v.prototype.sqr = function(A) {
                return this.mul(A, A)
            }
            ,
            v.prototype.sqrt = function(A) {
                if (A.isZero())
                    return A.clone();
                var t = this.m.andln(3);
                if (r(t % 2 === 1),
                3 === t) {
                    var e = this.m.add(new i(1)).iushrn(2);
                    return this.pow(A, e)
                }
                for (var n = this.m.subn(1), o = 0; !n.isZero() && 0 === n.andln(1); )
                    o++,
                    n.iushrn(1);
                r(!n.isZero());
                var s = new i(1).toRed(this)
                  , a = s.redNeg()
                  , c = this.m.subn(1).iushrn(1)
                  , g = this.m.bitLength();
                for (g = new i(2 * g * g).toRed(this); 0 !== this.pow(g, c).cmp(a); )
                    g.redIAdd(a);
                for (var u = this.pow(g, n), h = this.pow(A, n.addn(1).iushrn(1)), I = this.pow(A, n), l = o; 0 !== I.cmp(s); ) {
                    for (var E = I, B = 0; 0 !== E.cmp(s); B++)
                        E = E.redSqr();
                    r(B < l);
                    var C = this.pow(u, new i(1).iushln(l - B - 1));
                    h = h.redMul(C),
                    u = C.redSqr(),
                    I = I.redMul(u),
                    l = B
                }
                return h
            }
            ,
            v.prototype.invm = function(A) {
                var t = A._invmp(this.m);
                return 0 !== t.negative ? (t.negative = 0,
                this.imod(t).redNeg()) : this.imod(t)
            }
            ,
            v.prototype.pow = function(A, t) {
                if (t.isZero())
                    return new i(1).toRed(this);
                if (0 === t.cmpn(1))
                    return A.clone();
                var e = new Array(16);
                e[0] = new i(1).toRed(this),
                e[1] = A;
                for (var r = 2; r < e.length; r++)
                    e[r] = this.mul(e[r - 1], A);
                var n = e[0]
                  , o = 0
                  , s = 0
                  , a = t.bitLength() % 26;
                for (0 === a && (a = 26),
                r = t.length - 1; r >= 0; r--) {
                    for (var c = t.words[r], g = a - 1; g >= 0; g--) {
                        var u = c >> g & 1;
                        n !== e[0] && (n = this.sqr(n)),
                        0 !== u || 0 !== o ? (o <<= 1,
                        o |= u,
                        (4 === ++s || 0 === r && 0 === g) && (n = this.mul(n, e[o]),
                        s = 0,
                        o = 0)) : s = 0
                    }
                    a = 26
                }
                return n
            }
            ,
            v.prototype.convertTo = function(A) {
                var t = A.umod(this.m);
                return t === A ? t.clone() : t
            }
            ,
            v.prototype.convertFrom = function(A) {
                var t = A.clone();
                return t.red = null,
                t
            }
            ,
            i.mont = function(A) {
                return new b(A)
            }
            ,
            n(b, v),
            b.prototype.convertTo = function(A) {
                return this.imod(A.ushln(this.shift))
            }
            ,
            b.prototype.convertFrom = function(A) {
                var t = this.imod(A.mul(this.rinv));
                return t.red = null,
                t
            }
            ,
            b.prototype.imul = function(A, t) {
                if (A.isZero() || t.isZero())
                    return A.words[0] = 0,
                    A.length = 1,
                    A;
                var e = A.imul(t)
                  , r = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , n = e.isub(r).iushrn(this.shift)
                  , i = n;
                return n.cmp(this.m) >= 0 ? i = n.isub(this.m) : n.cmpn(0) < 0 && (i = n.iadd(this.m)),
                i._forceRed(this)
            }
            ,
            b.prototype.mul = function(A, t) {
                if (A.isZero() || t.isZero())
                    return new i(0)._forceRed(this);
                var e = A.mul(t)
                  , r = e.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , n = e.isub(r).iushrn(this.shift)
                  , o = n;
                return n.cmp(this.m) >= 0 ? o = n.isub(this.m) : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
                o._forceRed(this)
            }
            ,
            b.prototype.invm = function(A) {
                return this.imod(A._invmp(this.m).mul(this.r2))._forceRed(this)
            }
        }(A = e.nmd(A), this)
    },
    67758: function(A, t, e) {
        "use strict";
        var r = e(60197).Buffer
          , n = this && this.__createBinding || (Object.create ? function(A, t, e, r) {
            void 0 === r && (r = e),
            Object.defineProperty(A, r, {
                enumerable: !0,
                get: function() {
                    return t[e]
                }
            })
        }
        : function(A, t, e, r) {
            void 0 === r && (r = e),
            A[r] = t[e]
        }
        )
          , i = this && this.__setModuleDefault || (Object.create ? function(A, t) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(A, t) {
            A.default = t
        }
        )
          , o = this && this.__decorate || function(A, t, e, r) {
            var n, i = arguments.length, o = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, e) : r;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                o = Reflect.decorate(A, t, e, r);
            else
                for (var s = A.length - 1; s >= 0; s--)
                    (n = A[s]) && (o = (i < 3 ? n(o) : i > 3 ? n(t, e, o) : n(t, e)) || o);
            return i > 3 && o && Object.defineProperty(t, e, o),
            o
        }
          , s = this && this.__importStar || function(A) {
            if (A && A.__esModule)
                return A;
            var t = {};
            if (null != A)
                for (var e in A)
                    "default" !== e && Object.hasOwnProperty.call(A, e) && n(t, A, e);
            return i(t, A),
            t
        }
          , a = this && this.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.deserializeUnchecked = t.deserialize = t.serialize = t.BinaryReader = t.BinaryWriter = t.BorshError = t.baseDecode = t.baseEncode = void 0;
        const c = a(e(13072))
          , g = a(e(52169))
          , u = s(e(16078))
          , h = new ("function" !== typeof e.g.TextDecoder ? u.TextDecoder : e.g.TextDecoder)("utf-8",{
            fatal: !0
        });
        t.baseEncode = function(A) {
            return "string" === typeof A && (A = r.from(A, "utf8")),
            g.default.encode(r.from(A))
        }
        ,
        t.baseDecode = function(A) {
            return r.from(g.default.decode(A))
        }
        ;
        const I = 1024;
        class l extends Error {
            constructor(A) {
                super(A),
                this.fieldPath = [],
                this.originalMessage = A
            }
            addToFieldPath(A) {
                this.fieldPath.splice(0, 0, A),
                this.message = this.originalMessage + ": " + this.fieldPath.join(".")
            }
        }
        t.BorshError = l;
        class E {
            constructor() {
                this.buf = r.alloc(I),
                this.length = 0
            }
            maybeResize() {
                this.buf.length < 16 + this.length && (this.buf = r.concat([this.buf, r.alloc(I)]))
            }
            writeU8(A) {
                this.maybeResize(),
                this.buf.writeUInt8(A, this.length),
                this.length += 1
            }
            writeU16(A) {
                this.maybeResize(),
                this.buf.writeUInt16LE(A, this.length),
                this.length += 2
            }
            writeU32(A) {
                this.maybeResize(),
                this.buf.writeUInt32LE(A, this.length),
                this.length += 4
            }
            writeU64(A) {
                this.maybeResize(),
                this.writeBuffer(r.from(new c.default(A).toArray("le", 8)))
            }
            writeU128(A) {
                this.maybeResize(),
                this.writeBuffer(r.from(new c.default(A).toArray("le", 16)))
            }
            writeU256(A) {
                this.maybeResize(),
                this.writeBuffer(r.from(new c.default(A).toArray("le", 32)))
            }
            writeU512(A) {
                this.maybeResize(),
                this.writeBuffer(r.from(new c.default(A).toArray("le", 64)))
            }
            writeBuffer(A) {
                this.buf = r.concat([r.from(this.buf.subarray(0, this.length)), A, r.alloc(I)]),
                this.length += A.length
            }
            writeString(A) {
                this.maybeResize();
                const t = r.from(A, "utf8");
                this.writeU32(t.length),
                this.writeBuffer(t)
            }
            writeFixedArray(A) {
                this.writeBuffer(r.from(A))
            }
            writeArray(A, t) {
                this.maybeResize(),
                this.writeU32(A.length);
                for (const e of A)
                    this.maybeResize(),
                    t(e)
            }
            toArray() {
                return this.buf.subarray(0, this.length)
            }
        }
        function B(A, t, e) {
            const r = e.value;
            e.value = function(...A) {
                try {
                    return r.apply(this, A)
                } catch (t) {
                    if (t instanceof RangeError) {
                        const A = t.code;
                        if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(A) >= 0)
                            throw new l("Reached the end of buffer when deserializing")
                    }
                    throw t
                }
            }
        }
        t.BinaryWriter = E;
        class C {
            constructor(A) {
                this.buf = A,
                this.offset = 0
            }
            readU8() {
                const A = this.buf.readUInt8(this.offset);
                return this.offset += 1,
                A
            }
            readU16() {
                const A = this.buf.readUInt16LE(this.offset);
                return this.offset += 2,
                A
            }
            readU32() {
                const A = this.buf.readUInt32LE(this.offset);
                return this.offset += 4,
                A
            }
            readU64() {
                const A = this.readBuffer(8);
                return new c.default(A,"le")
            }
            readU128() {
                const A = this.readBuffer(16);
                return new c.default(A,"le")
            }
            readU256() {
                const A = this.readBuffer(32);
                return new c.default(A,"le")
            }
            readU512() {
                const A = this.readBuffer(64);
                return new c.default(A,"le")
            }
            readBuffer(A) {
                if (this.offset + A > this.buf.length)
                    throw new l(`Expected buffer length ${A} isn't within bounds`);
                const t = this.buf.slice(this.offset, this.offset + A);
                return this.offset += A,
                t
            }
            readString() {
                const A = this.readU32()
                  , t = this.readBuffer(A);
                try {
                    return h.decode(t)
                } catch (e) {
                    throw new l(`Error decoding UTF-8 string: ${e}`)
                }
            }
            readFixedArray(A) {
                return new Uint8Array(this.readBuffer(A))
            }
            readArray(A) {
                const t = this.readU32()
                  , e = Array();
                for (let r = 0; r < t; ++r)
                    e.push(A());
                return e
            }
        }
        function Q(A) {
            return A.charAt(0).toUpperCase() + A.slice(1)
        }
        function d(A, t, e, r, n) {
            try {
                if ("string" === typeof r)
                    n[`write${Q(r)}`](e);
                else if (r instanceof Array)
                    if ("number" === typeof r[0]) {
                        if (e.length !== r[0])
                            throw new l(`Expecting byte array of length ${r[0]}, but got ${e.length} bytes`);
                        n.writeFixedArray(e)
                    } else if (2 === r.length && "number" === typeof r[1]) {
                        if (e.length !== r[1])
                            throw new l(`Expecting byte array of length ${r[1]}, but got ${e.length} bytes`);
                        for (let t = 0; t < r[1]; t++)
                            d(A, null, e[t], r[0], n)
                    } else
                        n.writeArray(e, (e=>{
                            d(A, t, e, r[0], n)
                        }
                        ));
                else if (void 0 !== r.kind) {
                    if ("option" !== r.kind)
                        throw new l(`FieldType ${r} unrecognized`);
                    null === e || void 0 === e ? n.writeU8(0) : (n.writeU8(1),
                    d(A, t, e, r.type, n))
                } else
                    f(A, e, n)
            } catch (i) {
                throw i instanceof l && i.addToFieldPath(t),
                i
            }
        }
        function f(A, t, e) {
            if ("function" === typeof t.borshSerialize)
                return void t.borshSerialize(e);
            const r = A.get(t.constructor);
            if (!r)
                throw new l(`Class ${t.constructor.name} is missing in schema`);
            if ("struct" === r.kind)
                r.fields.map((([r,n])=>{
                    d(A, r, t[r], n, e)
                }
                ));
            else {
                if ("enum" !== r.kind)
                    throw new l(`Unexpected schema kind: ${r.kind} for ${t.constructor.name}`);
                {
                    const n = t[r.field];
                    for (let i = 0; i < r.values.length; ++i) {
                        const [o,s] = r.values[i];
                        if (o === n) {
                            e.writeU8(i),
                            d(A, o, t[o], s, e);
                            break
                        }
                    }
                }
            }
        }
        function p(A, t, e, r) {
            try {
                if ("string" === typeof e)
                    return r[`read${Q(e)}`]();
                if (e instanceof Array) {
                    if ("number" === typeof e[0])
                        return r.readFixedArray(e[0]);
                    if ("number" === typeof e[1]) {
                        const t = [];
                        for (let n = 0; n < e[1]; n++)
                            t.push(p(A, null, e[0], r));
                        return t
                    }
                    return r.readArray((()=>p(A, t, e[0], r)))
                }
                if ("option" === e.kind) {
                    return r.readU8() ? p(A, t, e.type, r) : void 0
                }
                return y(A, e, r)
            } catch (n) {
                throw n instanceof l && n.addToFieldPath(t),
                n
            }
        }
        function y(A, t, e) {
            if ("function" === typeof t.borshDeserialize)
                return t.borshDeserialize(e);
            const r = A.get(t);
            if (!r)
                throw new l(`Class ${t.name} is missing in schema`);
            if ("struct" === r.kind) {
                const r = {};
                for (const [n,i] of A.get(t).fields)
                    r[n] = p(A, n, i, e);
                return new t(r)
            }
            if ("enum" === r.kind) {
                const n = e.readU8();
                if (n >= r.values.length)
                    throw new l(`Enum index: ${n} is out of range`);
                const [i,o] = r.values[n];
                return new t({
                    [i]: p(A, i, o, e)
                })
            }
            throw new l(`Unexpected schema kind: ${r.kind} for ${t.constructor.name}`)
        }
        o([B], C.prototype, "readU8", null),
        o([B], C.prototype, "readU16", null),
        o([B], C.prototype, "readU32", null),
        o([B], C.prototype, "readU64", null),
        o([B], C.prototype, "readU128", null),
        o([B], C.prototype, "readU256", null),
        o([B], C.prototype, "readU512", null),
        o([B], C.prototype, "readString", null),
        o([B], C.prototype, "readFixedArray", null),
        o([B], C.prototype, "readArray", null),
        t.BinaryReader = C,
        t.serialize = function(A, t, e=E) {
            const r = new e;
            return f(A, t, r),
            r.toArray()
        }
        ,
        t.deserialize = function(A, t, e, r=C) {
            const n = new r(e)
              , i = y(A, t, n);
            if (n.offset < e.length)
                throw new l(`Unexpected ${e.length - n.offset} bytes after deserialized data`);
            return i
        }
        ,
        t.deserializeUnchecked = function(A, t, e, r=C) {
            return y(A, t, new r(e))
        }
    },
    52169: function(A, t, e) {
        var r = e(91781);
        A.exports = r("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
    },
    60183: function(A, t, e) {
        e(32353).check("es5")
    },
    32353: function(A, t, e) {
        e(93560),
        A.exports = e(30074)
    },
    93530: function(A) {
        var t = function() {
            this.tests = {},
            this.cache = {}
        };
        t.prototype = {
            constructor: t,
            define: function(A, t) {
                if ("string" != typeof A || !(t instanceof Function))
                    throw new Error("Invalid capability definition.");
                if (this.tests[A])
                    throw new Error('Duplicated capability definition by "' + A + '".');
                this.tests[A] = t
            },
            check: function(A) {
                if (!this.test(A))
                    throw new Error('The current environment does not support "' + A + '", therefore we cannot continue.')
            },
            test: function(A) {
                if (void 0 !== this.cache[A])
                    return this.cache[A];
                if (!this.tests[A])
                    throw new Error('Unknown capability with name "' + A + '".');
                var t = this.tests[A];
                return this.cache[A] = !!t(),
                this.cache[A]
            }
        },
        A.exports = t
    },
    93560: function(A, t, e) {
        var r = e(30074)
          , n = r.define
          , i = r.test;
        n("strict mode", (function() {
            return void 0 === this
        }
        )),
        n("arguments.callee.caller", (function() {
            try {
                return function() {
                    return arguments.callee.caller
                }() === arguments.callee
            } catch (A) {
                return !1
            }
        }
        )),
        n("es5", (function() {
            return i("Array.prototype.forEach") && i("Array.prototype.map") && i("Function.prototype.bind") && i("Object.create") && i("Object.defineProperties") && i("Object.defineProperty") && i("Object.prototype.hasOwnProperty")
        }
        )),
        n("Array.prototype.forEach", (function() {
            return Array.prototype.forEach
        }
        )),
        n("Array.prototype.map", (function() {
            return Array.prototype.map
        }
        )),
        n("Function.prototype.bind", (function() {
            return Function.prototype.bind
        }
        )),
        n("Object.create", (function() {
            return Object.create
        }
        )),
        n("Object.defineProperties", (function() {
            return Object.defineProperties
        }
        )),
        n("Object.defineProperty", (function() {
            return Object.defineProperty
        }
        )),
        n("Object.prototype.hasOwnProperty", (function() {
            return Object.prototype.hasOwnProperty
        }
        )),
        n("Error.captureStackTrace", (function() {
            return Error.captureStackTrace
        }
        )),
        n("Error.prototype.stack", (function() {
            try {
                throw new Error
            } catch (A) {
                return A.stack || A.stacktrace
            }
        }
        ))
    },
    30074: function(A, t, e) {
        var r = new (e(93530))
          , n = function(A) {
            return r.test(A)
        };
        n.define = function(A, t) {
            r.define(A, t)
        }
        ,
        n.check = function(A) {
            r.check(A)
        }
        ,
        n.test = n,
        A.exports = n
    },
    80289: function(A) {
        "use strict";
        function t(A, t) {
            if ("function" !== typeof A)
                throw new TypeError("argument fn must be a function");
            return A
        }
        function e(A, t, e) {
            if (!A || "object" !== typeof A && "function" !== typeof A)
                throw new TypeError("argument obj must be object");
            var r = Object.getOwnPropertyDescriptor(A, t);
            if (!r)
                throw new TypeError("must call property on owner object");
            if (!r.configurable)
                throw new TypeError("property must be configurable")
        }
        A.exports = function(A) {
            if (!A)
                throw new TypeError("argument namespace is required");
            function r(A) {}
            return r._file = void 0,
            r._ignored = !0,
            r._namespace = A,
            r._traced = !1,
            r._warned = Object.create(null),
            r.function = t,
            r.property = e,
            r
        }
    },
    96816: function(A, t, e) {
        A.exports = e(98073)
    },
    98073: function(A, t, e) {
        e(60183);
        var r, n = e(32353);
        r = n("Error.captureStackTrace") ? e(56325) : n("Error.prototype.stack") ? e(11106) : e(30064),
        A.exports = r()
    },
    50822: function(A, t, e) {
        var r = e(46508).Class
          , n = e(46508).abstractMethod
          , i = r(Object, {
            prototype: {
                init: r.prototype.merge,
                frameString: void 0,
                toString: function() {
                    return this.frameString
                },
                functionValue: void 0,
                getThis: n,
                getTypeName: n,
                getFunction: function() {
                    return this.functionValue
                },
                getFunctionName: n,
                getMethodName: n,
                getFileName: n,
                getLineNumber: n,
                getColumnNumber: n,
                getEvalOrigin: n,
                isTopLevel: n,
                isEval: n,
                isNative: n,
                isConstructor: n
            }
        });
        A.exports = i
    },
    83411: function(A, t, e) {
        var r = e(46508).Class
          , n = e(50822)
          , i = e(43930).cache
          , o = r(Object, {
            prototype: {
                stackParser: null,
                frameParser: null,
                locationParsers: null,
                constructor: function(A) {
                    r.prototype.merge.call(this, A)
                },
                getFrames: function(A, t) {
                    for (var e = [], r = 0, n = A.length; r < n; ++r)
                        e[r] = this.getFrame(A[r], t[r]);
                    return e
                },
                getFrame: function(A, t) {
                    return new n({
                        frameString: A,
                        functionValue: t
                    })
                }
            }
        });
        A.exports = {
            getClass: i((function() {
                return o
            }
            )),
            getInstance: i((function() {
                return new (this.getClass())
            }
            ))
        }
    },
    53039: function(A, t, e) {
        var r = e(46508).Class
          , n = e(46508).abstractMethod
          , i = e(43930).eachCombination
          , o = e(43930).cache
          , s = e(32353)
          , a = r(Object, {
            prototype: {
                captureFrameStrings: function(A) {
                    var t = this.createError();
                    A.unshift(this.captureFrameStrings),
                    A.unshift(this.createError);
                    var e = this.getFrameStrings(t)
                      , r = e.slice(A.length)
                      , n = [];
                    if (s("arguments.callee.caller")) {
                        var i = [this.createError, this.captureFrameStrings];
                        try {
                            for (var o = arguments.callee; o = o.caller; )
                                i.push(o)
                        } catch (a) {}
                        n = i.slice(A.length)
                    }
                    return {
                        frameStrings: r,
                        functionValues: n
                    }
                },
                getFrameStrings: function(A) {
                    var t = A.message || ""
                      , e = A.name || ""
                      , r = this.getStackString(A);
                    if (void 0 !== r) {
                        var n = r.split("\n")
                          , i = 0
                          , o = n.length;
                        return this.hasHeader && (i += e.split("\n").length + t.split("\n").length - 1),
                        this.hasFooter && (o -= 1),
                        n.slice(i, o)
                    }
                },
                createError: n,
                getStackString: n,
                hasHeader: void 0,
                hasFooter: void 0
            }
        })
          , c = r(Object, {
            prototype: {
                calibrateClass: function(A) {
                    return this.calibrateMethods(A) && this.calibrateEnvelope(A)
                },
                calibrateMethods: function(A) {
                    try {
                        i([[function(A) {
                            return new Error(A)
                        }
                        , function(A) {
                            try {
                                throw new Error(A)
                            } catch (t) {
                                return t
                            }
                        }
                        ], [function(A) {
                            return A.stack
                        }
                        , function(A) {
                            return A.stacktrace
                        }
                        ]], (function(A, t) {
                            if (t(A()))
                                throw {
                                    getStackString: t,
                                    createError: A
                                }
                        }
                        ))
                    } catch (t) {
                        return r.merge.call(A, {
                            prototype: t
                        }),
                        !0
                    }
                    return !1
                },
                calibrateEnvelope: function(A) {
                    var t = (0,
                    A.prototype.getStackString)((0,
                    A.prototype.createError)("marker")).split("\n");
                    return r.merge.call(A, {
                        prototype: {
                            hasHeader: /marker/.test(t[0]),
                            hasFooter: "" === t[t.length - 1]
                        }
                    }),
                    !0
                }
            }
        });
        A.exports = {
            getClass: o((function() {
                var A;
                if (A)
                    return A;
                if (A = r(a, {}),
                !(new c).calibrateClass(A))
                    throw new Error("Cannot read Error.prototype.stack in this environment.");
                return A
            }
            )),
            getInstance: o((function() {
                return new (this.getClass())
            }
            ))
        }
    },
    11106: function(A, t, e) {
        var r = e(53039)
          , n = e(83411)
          , i = e(43930).cache
          , o = e(27247);
        A.exports = function() {
            return Error.captureStackTrace = function A(t, e) {
                var s = [A];
                e && s.push(e);
                var a = r.getInstance().captureFrameStrings(s);
                Object.defineProperties(t, {
                    stack: {
                        configurable: !0,
                        get: i((function() {
                            var A = n.getInstance().getFrames(a.frameStrings, a.functionValues);
                            return (Error.prepareStackTrace || o)(t, A, undefined)
                        }
                        ))
                    },
                    cachedStack: {
                        configurable: !0,
                        writable: !0,
                        enumerable: !1,
                        value: !0
                    }
                })
            }
            ,
            Error.getStackTrace = function(A) {
                if (A.cachedStack)
                    return A.stack;
                var t, e = r.getInstance().getFrameStrings(A), i = [];
                e ? i = n.getInstance().getFrames(e, []) : t = ["The stack is not readable by unthrown errors in this environment."];
                var s = (Error.prepareStackTrace || o)(A, i, t);
                if (e)
                    try {
                        Object.defineProperties(A, {
                            stack: {
                                configurable: !0,
                                writable: !0,
                                enumerable: !1,
                                value: s
                            },
                            cachedStack: {
                                configurable: !0,
                                writable: !0,
                                enumerable: !1,
                                value: !0
                            }
                        })
                    } catch (a) {}
                return s
            }
            ,
            {
                prepareStackTrace: o
            }
        }
    },
    27247: function(A) {
        A.exports = function(A, t, e) {
            var r = "";
            if (r += A.name || "Error",
            r += ": " + (A.message || ""),
            e instanceof Array)
                for (var n in e) {
                    r += "\n   # " + e[n]
                }
            for (var i in t) {
                r += "\n   at " + t[i].toString()
            }
            return r
        }
    },
    30064: function(A, t, e) {
        var r = e(43930).cache
          , n = e(27247);
        A.exports = function() {
            return Error.captureStackTrace = function(A, t) {
                Object.defineProperties(A, {
                    stack: {
                        configurable: !0,
                        get: r((function() {
                            return (Error.prepareStackTrace || n)(A, [])
                        }
                        ))
                    },
                    cachedStack: {
                        configurable: !0,
                        writable: !0,
                        enumerable: !1,
                        value: !0
                    }
                })
            }
            ,
            Error.getStackTrace = function(A) {
                if (A.cachedStack)
                    return A.stack;
                var t = (Error.prepareStackTrace || n)(A, []);
                try {
                    Object.defineProperties(A, {
                        stack: {
                            configurable: !0,
                            writable: !0,
                            enumerable: !1,
                            value: t
                        },
                        cachedStack: {
                            configurable: !0,
                            writable: !0,
                            enumerable: !1,
                            value: !0
                        }
                    })
                } catch (e) {}
                return t
            }
            ,
            {
                prepareStackTrace: n
            }
        }
    },
    56325: function(A, t, e) {
        var r = e(27247);
        A.exports = function() {
            return Error.getStackTrace = function(A) {
                return A.stack
            }
            ,
            {
                prepareStackTrace: r
            }
        }
    },
    9232: function(A, t, e) {
        "use strict";
        var r, n = e(29809)("http-errors"), i = e(77565), o = e(95657), s = e(77082), a = e(93127);
        function c(A) {
            return Number(String(A).charAt(0) + "00")
        }
        function g(A, t) {
            var e = Object.getOwnPropertyDescriptor(A, "name");
            e && e.configurable && (e.value = t,
            Object.defineProperty(A, "name", e))
        }
        function u(A) {
            return "Error" !== A.substr(-5) ? A + "Error" : A
        }
        A.exports = function A() {
            for (var t, e, r = 500, i = {}, s = 0; s < arguments.length; s++) {
                var a = arguments[s];
                if (a instanceof Error)
                    r = (t = a).status || t.statusCode || r;
                else
                    switch (typeof a) {
                    case "string":
                        e = a;
                        break;
                    case "number":
                        r = a,
                        0 !== s && n("non-first-argument status code; replace with createError(" + a + ", ...)");
                        break;
                    case "object":
                        i = a
                    }
            }
            "number" === typeof r && (r < 400 || r >= 600) && n("non-error status code; use only 4xx or 5xx status codes");
            ("number" !== typeof r || !o[r] && (r < 400 || r >= 600)) && (r = 500);
            var g = A[r] || A[c(r)];
            t || (t = g ? new g(e) : new Error(e || o[r]),
            Error.captureStackTrace(t, A));
            g && t instanceof g && t.status === r || (t.expose = r < 500,
            t.status = t.statusCode = r);
            for (var u in i)
                "status" !== u && "statusCode" !== u && (t[u] = i[u]);
            return t
        }
        ,
        A.exports.HttpError = function() {
            function A() {
                throw new TypeError("cannot construct abstract class")
            }
            return s(A, Error),
            A
        }(),
        A.exports.isHttpError = (r = A.exports.HttpError,
        function(A) {
            return !(!A || "object" !== typeof A) && (A instanceof r || A instanceof Error && "boolean" === typeof A.expose && "number" === typeof A.statusCode && A.status === A.statusCode)
        }
        ),
        function(A, t, e) {
            t.forEach((function(t) {
                var r, n = a(o[t]);
                switch (c(t)) {
                case 400:
                    r = function(A, t, e) {
                        var r = u(t);
                        function n(A) {
                            var t = null != A ? A : o[e]
                              , s = new Error(t);
                            return Error.captureStackTrace(s, n),
                            i(s, n.prototype),
                            Object.defineProperty(s, "message", {
                                enumerable: !0,
                                configurable: !0,
                                value: t,
                                writable: !0
                            }),
                            Object.defineProperty(s, "name", {
                                enumerable: !1,
                                configurable: !0,
                                value: r,
                                writable: !0
                            }),
                            s
                        }
                        return s(n, A),
                        g(n, r),
                        n.prototype.status = e,
                        n.prototype.statusCode = e,
                        n.prototype.expose = !0,
                        n
                    }(e, n, t);
                    break;
                case 500:
                    r = function(A, t, e) {
                        var r = u(t);
                        function n(A) {
                            var t = null != A ? A : o[e]
                              , s = new Error(t);
                            return Error.captureStackTrace(s, n),
                            i(s, n.prototype),
                            Object.defineProperty(s, "message", {
                                enumerable: !0,
                                configurable: !0,
                                value: t,
                                writable: !0
                            }),
                            Object.defineProperty(s, "name", {
                                enumerable: !1,
                                configurable: !0,
                                value: r,
                                writable: !0
                            }),
                            s
                        }
                        return s(n, A),
                        g(n, r),
                        n.prototype.status = e,
                        n.prototype.statusCode = e,
                        n.prototype.expose = !1,
                        n
                    }(e, n, t)
                }
                r && (A[t] = r,
                A[n] = r)
            }
            )),
            A["I'mateapot"] = n.function(A.ImATeapot, '"I\'mateapot"; use "ImATeapot" instead')
        }(A.exports, o.codes, A.exports.HttpError)
    },
    29809: function(A) {
        "use strict";
        function t(A, t) {
            if ("function" !== typeof A)
                throw new TypeError("argument fn must be a function");
            return A
        }
        function e(A, t, e) {
            if (!A || "object" !== typeof A && "function" !== typeof A)
                throw new TypeError("argument obj must be object");
            var r = Object.getOwnPropertyDescriptor(A, t);
            if (!r)
                throw new TypeError("must call property on owner object");
            if (!r.configurable)
                throw new TypeError("property must be configurable")
        }
        A.exports = function(A) {
            if (!A)
                throw new TypeError("argument namespace is required");
            function r(A) {}
            return r._file = void 0,
            r._ignored = !0,
            r._namespace = A,
            r._traced = !1,
            r._warned = Object.create(null),
            r.function = t,
            r.property = e,
            r
        }
    },
    77082: function(A) {
        "function" === typeof Object.create ? A.exports = function(A, t) {
            t && (A.super_ = t,
            A.prototype = Object.create(t.prototype, {
                constructor: {
                    value: A,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        }
        : A.exports = function(A, t) {
            if (t) {
                A.super_ = t;
                var e = function() {};
                e.prototype = t.prototype,
                A.prototype = new e,
                A.prototype.constructor = A
            }
        }
    },
    42623: function(module, exports, __webpack_require__) {
        var process = __webpack_require__(89885), __WEBPACK_AMD_DEFINE_RESULT__;
        (function() {
            "use strict";
            var ERROR = "input is invalid type"
              , WINDOW = "object" === typeof window
              , root = WINDOW ? window : {};
            root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
            var WEB_WORKER = !WINDOW && "object" === typeof self
              , NODE_JS = !root.JS_SHA256_NO_NODE_JS && "object" === typeof process && process.versions && process.versions.node;
            NODE_JS ? root = __webpack_require__.g : WEB_WORKER && (root = self);
            var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && module.exports
              , AMD = __webpack_require__.amdO
              , ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && "undefined" !== typeof ArrayBuffer
              , HEX_CHARS = "0123456789abcdef".split("")
              , EXTRA = [-2147483648, 8388608, 32768, 128]
              , SHIFT = [24, 16, 8, 0]
              , K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
              , OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"]
              , blocks = [];
            !root.JS_SHA256_NO_NODE_JS && Array.isArray || (Array.isArray = function(A) {
                return "[object Array]" === Object.prototype.toString.call(A)
            }
            ),
            !ARRAY_BUFFER || !root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(A) {
                return "object" === typeof A && A.buffer && A.buffer.constructor === ArrayBuffer
            }
            );
            var createOutputMethod = function(A, t) {
                return function(e) {
                    return new Sha256(t,!0).update(e)[A]()
                }
            }
              , createMethod = function(A) {
                var t = createOutputMethod("hex", A);
                NODE_JS && (t = nodeWrap(t, A)),
                t.create = function() {
                    return new Sha256(A)
                }
                ,
                t.update = function(A) {
                    return t.create().update(A)
                }
                ;
                for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
                    var r = OUTPUT_TYPES[e];
                    t[r] = createOutputMethod(r, A)
                }
                return t
            }
              , nodeWrap = function(method, is224) {
                var crypto = eval("require('crypto')")
                  , Buffer = eval("require('buffer').Buffer")
                  , algorithm = is224 ? "sha224" : "sha256"
                  , nodeMethod = function(A) {
                    if ("string" === typeof A)
                        return crypto.createHash(algorithm).update(A, "utf8").digest("hex");
                    if (null === A || void 0 === A)
                        throw new Error(ERROR);
                    return A.constructor === ArrayBuffer && (A = new Uint8Array(A)),
                    Array.isArray(A) || ArrayBuffer.isView(A) || A.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(A)).digest("hex") : method(A)
                };
                return nodeMethod
            }
              , createHmacOutputMethod = function(A, t) {
                return function(e, r) {
                    return new HmacSha256(e,t,!0).update(r)[A]()
                }
            }
              , createHmacMethod = function(A) {
                var t = createHmacOutputMethod("hex", A);
                t.create = function(t) {
                    return new HmacSha256(t,A)
                }
                ,
                t.update = function(A, e) {
                    return t.create(A).update(e)
                }
                ;
                for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
                    var r = OUTPUT_TYPES[e];
                    t[r] = createHmacOutputMethod(r, A)
                }
                return t
            };
            function Sha256(A, t) {
                t ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0,
                this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                A ? (this.h0 = 3238371032,
                this.h1 = 914150663,
                this.h2 = 812702999,
                this.h3 = 4144912697,
                this.h4 = 4290775857,
                this.h5 = 1750603025,
                this.h6 = 1694076839,
                this.h7 = 3204075428) : (this.h0 = 1779033703,
                this.h1 = 3144134277,
                this.h2 = 1013904242,
                this.h3 = 2773480762,
                this.h4 = 1359893119,
                this.h5 = 2600822924,
                this.h6 = 528734635,
                this.h7 = 1541459225),
                this.block = this.start = this.bytes = this.hBytes = 0,
                this.finalized = this.hashed = !1,
                this.first = !0,
                this.is224 = A
            }
            function HmacSha256(A, t, e) {
                var r, n = typeof A;
                if ("string" === n) {
                    var i, o = [], s = A.length, a = 0;
                    for (r = 0; r < s; ++r)
                        (i = A.charCodeAt(r)) < 128 ? o[a++] = i : i < 2048 ? (o[a++] = 192 | i >> 6,
                        o[a++] = 128 | 63 & i) : i < 55296 || i >= 57344 ? (o[a++] = 224 | i >> 12,
                        o[a++] = 128 | i >> 6 & 63,
                        o[a++] = 128 | 63 & i) : (i = 65536 + ((1023 & i) << 10 | 1023 & A.charCodeAt(++r)),
                        o[a++] = 240 | i >> 18,
                        o[a++] = 128 | i >> 12 & 63,
                        o[a++] = 128 | i >> 6 & 63,
                        o[a++] = 128 | 63 & i);
                    A = o
                } else {
                    if ("object" !== n)
                        throw new Error(ERROR);
                    if (null === A)
                        throw new Error(ERROR);
                    if (ARRAY_BUFFER && A.constructor === ArrayBuffer)
                        A = new Uint8Array(A);
                    else if (!Array.isArray(A) && (!ARRAY_BUFFER || !ArrayBuffer.isView(A)))
                        throw new Error(ERROR)
                }
                A.length > 64 && (A = new Sha256(t,!0).update(A).array());
                var c = []
                  , g = [];
                for (r = 0; r < 64; ++r) {
                    var u = A[r] || 0;
                    c[r] = 92 ^ u,
                    g[r] = 54 ^ u
                }
                Sha256.call(this, t, e),
                this.update(g),
                this.oKeyPad = c,
                this.inner = !0,
                this.sharedMemory = e
            }
            Sha256.prototype.update = function(A) {
                if (!this.finalized) {
                    var t, e = typeof A;
                    if ("string" !== e) {
                        if ("object" !== e)
                            throw new Error(ERROR);
                        if (null === A)
                            throw new Error(ERROR);
                        if (ARRAY_BUFFER && A.constructor === ArrayBuffer)
                            A = new Uint8Array(A);
                        else if (!Array.isArray(A) && (!ARRAY_BUFFER || !ArrayBuffer.isView(A)))
                            throw new Error(ERROR);
                        t = !0
                    }
                    for (var r, n, i = 0, o = A.length, s = this.blocks; i < o; ) {
                        if (this.hashed && (this.hashed = !1,
                        s[0] = this.block,
                        s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0),
                        t)
                            for (n = this.start; i < o && n < 64; ++i)
                                s[n >> 2] |= A[i] << SHIFT[3 & n++];
                        else
                            for (n = this.start; i < o && n < 64; ++i)
                                (r = A.charCodeAt(i)) < 128 ? s[n >> 2] |= r << SHIFT[3 & n++] : r < 2048 ? (s[n >> 2] |= (192 | r >> 6) << SHIFT[3 & n++],
                                s[n >> 2] |= (128 | 63 & r) << SHIFT[3 & n++]) : r < 55296 || r >= 57344 ? (s[n >> 2] |= (224 | r >> 12) << SHIFT[3 & n++],
                                s[n >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & n++],
                                s[n >> 2] |= (128 | 63 & r) << SHIFT[3 & n++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & A.charCodeAt(++i)),
                                s[n >> 2] |= (240 | r >> 18) << SHIFT[3 & n++],
                                s[n >> 2] |= (128 | r >> 12 & 63) << SHIFT[3 & n++],
                                s[n >> 2] |= (128 | r >> 6 & 63) << SHIFT[3 & n++],
                                s[n >> 2] |= (128 | 63 & r) << SHIFT[3 & n++]);
                        this.lastByteIndex = n,
                        this.bytes += n - this.start,
                        n >= 64 ? (this.block = s[16],
                        this.start = n - 64,
                        this.hash(),
                        this.hashed = !0) : this.start = n
                    }
                    return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0,
                    this.bytes = this.bytes % 4294967296),
                    this
                }
            }
            ,
            Sha256.prototype.finalize = function() {
                if (!this.finalized) {
                    this.finalized = !0;
                    var A = this.blocks
                      , t = this.lastByteIndex;
                    A[16] = this.block,
                    A[t >> 2] |= EXTRA[3 & t],
                    this.block = A[16],
                    t >= 56 && (this.hashed || this.hash(),
                    A[0] = this.block,
                    A[16] = A[1] = A[2] = A[3] = A[4] = A[5] = A[6] = A[7] = A[8] = A[9] = A[10] = A[11] = A[12] = A[13] = A[14] = A[15] = 0),
                    A[14] = this.hBytes << 3 | this.bytes >>> 29,
                    A[15] = this.bytes << 3,
                    this.hash()
                }
            }
            ,
            Sha256.prototype.hash = function() {
                var A, t, e, r, n, i, o, s, a, c = this.h0, g = this.h1, u = this.h2, h = this.h3, I = this.h4, l = this.h5, E = this.h6, B = this.h7, C = this.blocks;
                for (A = 16; A < 64; ++A)
                    t = ((n = C[A - 15]) >>> 7 | n << 25) ^ (n >>> 18 | n << 14) ^ n >>> 3,
                    e = ((n = C[A - 2]) >>> 17 | n << 15) ^ (n >>> 19 | n << 13) ^ n >>> 10,
                    C[A] = C[A - 16] + t + C[A - 7] + e << 0;
                for (a = g & u,
                A = 0; A < 64; A += 4)
                    this.first ? (this.is224 ? (i = 300032,
                    B = (n = C[0] - 1413257819) - 150054599 << 0,
                    h = n + 24177077 << 0) : (i = 704751109,
                    B = (n = C[0] - 210244248) - 1521486534 << 0,
                    h = n + 143694565 << 0),
                    this.first = !1) : (t = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10),
                    r = (i = c & g) ^ c & u ^ a,
                    B = h + (n = B + (e = (I >>> 6 | I << 26) ^ (I >>> 11 | I << 21) ^ (I >>> 25 | I << 7)) + (I & l ^ ~I & E) + K[A] + C[A]) << 0,
                    h = n + (t + r) << 0),
                    t = (h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10),
                    r = (o = h & c) ^ h & g ^ i,
                    E = u + (n = E + (e = (B >>> 6 | B << 26) ^ (B >>> 11 | B << 21) ^ (B >>> 25 | B << 7)) + (B & I ^ ~B & l) + K[A + 1] + C[A + 1]) << 0,
                    t = ((u = n + (t + r) << 0) >>> 2 | u << 30) ^ (u >>> 13 | u << 19) ^ (u >>> 22 | u << 10),
                    r = (s = u & h) ^ u & c ^ o,
                    l = g + (n = l + (e = (E >>> 6 | E << 26) ^ (E >>> 11 | E << 21) ^ (E >>> 25 | E << 7)) + (E & B ^ ~E & I) + K[A + 2] + C[A + 2]) << 0,
                    t = ((g = n + (t + r) << 0) >>> 2 | g << 30) ^ (g >>> 13 | g << 19) ^ (g >>> 22 | g << 10),
                    r = (a = g & u) ^ g & h ^ s,
                    I = c + (n = I + (e = (l >>> 6 | l << 26) ^ (l >>> 11 | l << 21) ^ (l >>> 25 | l << 7)) + (l & E ^ ~l & B) + K[A + 3] + C[A + 3]) << 0,
                    c = n + (t + r) << 0;
                this.h0 = this.h0 + c << 0,
                this.h1 = this.h1 + g << 0,
                this.h2 = this.h2 + u << 0,
                this.h3 = this.h3 + h << 0,
                this.h4 = this.h4 + I << 0,
                this.h5 = this.h5 + l << 0,
                this.h6 = this.h6 + E << 0,
                this.h7 = this.h7 + B << 0
            }
            ,
            Sha256.prototype.hex = function() {
                this.finalize();
                var A = this.h0
                  , t = this.h1
                  , e = this.h2
                  , r = this.h3
                  , n = this.h4
                  , i = this.h5
                  , o = this.h6
                  , s = this.h7
                  , a = HEX_CHARS[A >> 28 & 15] + HEX_CHARS[A >> 24 & 15] + HEX_CHARS[A >> 20 & 15] + HEX_CHARS[A >> 16 & 15] + HEX_CHARS[A >> 12 & 15] + HEX_CHARS[A >> 8 & 15] + HEX_CHARS[A >> 4 & 15] + HEX_CHARS[15 & A] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[15 & o];
                return this.is224 || (a += HEX_CHARS[s >> 28 & 15] + HEX_CHARS[s >> 24 & 15] + HEX_CHARS[s >> 20 & 15] + HEX_CHARS[s >> 16 & 15] + HEX_CHARS[s >> 12 & 15] + HEX_CHARS[s >> 8 & 15] + HEX_CHARS[s >> 4 & 15] + HEX_CHARS[15 & s]),
                a
            }
            ,
            Sha256.prototype.toString = Sha256.prototype.hex,
            Sha256.prototype.digest = function() {
                this.finalize();
                var A = this.h0
                  , t = this.h1
                  , e = this.h2
                  , r = this.h3
                  , n = this.h4
                  , i = this.h5
                  , o = this.h6
                  , s = this.h7
                  , a = [A >> 24 & 255, A >> 16 & 255, A >> 8 & 255, 255 & A, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o];
                return this.is224 || a.push(s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s),
                a
            }
            ,
            Sha256.prototype.array = Sha256.prototype.digest,
            Sha256.prototype.arrayBuffer = function() {
                this.finalize();
                var A = new ArrayBuffer(this.is224 ? 28 : 32)
                  , t = new DataView(A);
                return t.setUint32(0, this.h0),
                t.setUint32(4, this.h1),
                t.setUint32(8, this.h2),
                t.setUint32(12, this.h3),
                t.setUint32(16, this.h4),
                t.setUint32(20, this.h5),
                t.setUint32(24, this.h6),
                this.is224 || t.setUint32(28, this.h7),
                A
            }
            ,
            HmacSha256.prototype = new Sha256,
            HmacSha256.prototype.finalize = function() {
                if (Sha256.prototype.finalize.call(this),
                this.inner) {
                    this.inner = !1;
                    var A = this.array();
                    Sha256.call(this, this.is224, this.sharedMemory),
                    this.update(this.oKeyPad),
                    this.update(A),
                    Sha256.prototype.finalize.call(this)
                }
            }
            ;
            var exports = createMethod();
            exports.sha256 = exports,
            exports.sha224 = createMethod(!0),
            exports.sha256.hmac = createHmacMethod(),
            exports.sha224.hmac = createHmacMethod(!0),
            COMMON_JS ? module.exports = exports : (root.sha256 = exports.sha256,
            root.sha224 = exports.sha224,
            AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return exports
            }
            .call(exports, __webpack_require__, exports, module),
            void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
        }
        )()
    },
    61459: function(A) {
        A.exports = function() {
            "use strict";
            var A = Object.prototype.toString
              , t = Array.isArray || function(t) {
                return "[object Array]" === A.call(t)
            }
            ;
            function e(A) {
                return "function" === typeof A
            }
            function r(A) {
                return t(A) ? "array" : typeof A
            }
            function n(A) {
                return A.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            function i(A, t) {
                return null != A && "object" === typeof A && t in A
            }
            function o(A, t) {
                return null != A && "object" !== typeof A && A.hasOwnProperty && A.hasOwnProperty(t)
            }
            var s = RegExp.prototype.test;
            function a(A, t) {
                return s.call(A, t)
            }
            var c = /\S/;
            function g(A) {
                return !a(c, A)
            }
            var u = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            function h(A) {
                return String(A).replace(/[&<>"'`=\/]/g, (function(A) {
                    return u[A]
                }
                ))
            }
            var I = /\s*/
              , l = /\s+/
              , E = /\s*=/
              , B = /\s*\}/
              , C = /#|\^|\/|>|\{|&|=|!/;
            function Q(A, e) {
                if (!A)
                    return [];
                var r, i, o, s = !1, a = [], c = [], u = [], h = !1, Q = !1, y = "", w = 0;
                function M() {
                    if (h && !Q)
                        for (; u.length; )
                            delete c[u.pop()];
                    else
                        u = [];
                    h = !1,
                    Q = !1
                }
                function v(A) {
                    if ("string" === typeof A && (A = A.split(l, 2)),
                    !t(A) || 2 !== A.length)
                        throw new Error("Invalid tags: " + A);
                    r = new RegExp(n(A[0]) + "\\s*"),
                    i = new RegExp("\\s*" + n(A[1])),
                    o = new RegExp("\\s*" + n("}" + A[1]))
                }
                v(e || m.tags);
                for (var b, D, S, N, k, _, K = new p(A); !K.eos(); ) {
                    if (b = K.pos,
                    S = K.scanUntil(r))
                        for (var R = 0, F = S.length; R < F; ++R)
                            g(N = S.charAt(R)) ? (u.push(c.length),
                            y += N) : (Q = !0,
                            s = !0,
                            y += " "),
                            c.push(["text", N, b, b + 1]),
                            b += 1,
                            "\n" === N && (M(),
                            y = "",
                            w = 0,
                            s = !1);
                    if (!K.scan(r))
                        break;
                    if (h = !0,
                    D = K.scan(C) || "name",
                    K.scan(I),
                    "=" === D ? (S = K.scanUntil(E),
                    K.scan(E),
                    K.scanUntil(i)) : "{" === D ? (S = K.scanUntil(o),
                    K.scan(B),
                    K.scanUntil(i),
                    D = "&") : S = K.scanUntil(i),
                    !K.scan(i))
                        throw new Error("Unclosed tag at " + K.pos);
                    if (k = ">" == D ? [D, S, b, K.pos, y, w, s] : [D, S, b, K.pos],
                    w++,
                    c.push(k),
                    "#" === D || "^" === D)
                        a.push(k);
                    else if ("/" === D) {
                        if (!(_ = a.pop()))
                            throw new Error('Unopened section "' + S + '" at ' + b);
                        if (_[1] !== S)
                            throw new Error('Unclosed section "' + _[1] + '" at ' + b)
                    } else
                        "name" === D || "{" === D || "&" === D ? Q = !0 : "=" === D && v(S)
                }
                if (M(),
                _ = a.pop())
                    throw new Error('Unclosed section "' + _[1] + '" at ' + K.pos);
                return f(d(c))
            }
            function d(A) {
                for (var t, e, r = [], n = 0, i = A.length; n < i; ++n)
                    (t = A[n]) && ("text" === t[0] && e && "text" === e[0] ? (e[1] += t[1],
                    e[3] = t[3]) : (r.push(t),
                    e = t));
                return r
            }
            function f(A) {
                for (var t, e = [], r = e, n = [], i = 0, o = A.length; i < o; ++i)
                    switch ((t = A[i])[0]) {
                    case "#":
                    case "^":
                        r.push(t),
                        n.push(t),
                        r = t[4] = [];
                        break;
                    case "/":
                        n.pop()[5] = t[2],
                        r = n.length > 0 ? n[n.length - 1][4] : e;
                        break;
                    default:
                        r.push(t)
                    }
                return e
            }
            function p(A) {
                this.string = A,
                this.tail = A,
                this.pos = 0
            }
            function y(A, t) {
                this.view = A,
                this.cache = {
                    ".": this.view
                },
                this.parent = t
            }
            function w() {
                this.templateCache = {
                    _cache: {},
                    set: function(A, t) {
                        this._cache[A] = t
                    },
                    get: function(A) {
                        return this._cache[A]
                    },
                    clear: function() {
                        this._cache = {}
                    }
                }
            }
            p.prototype.eos = function() {
                return "" === this.tail
            }
            ,
            p.prototype.scan = function(A) {
                var t = this.tail.match(A);
                if (!t || 0 !== t.index)
                    return "";
                var e = t[0];
                return this.tail = this.tail.substring(e.length),
                this.pos += e.length,
                e
            }
            ,
            p.prototype.scanUntil = function(A) {
                var t, e = this.tail.search(A);
                switch (e) {
                case -1:
                    t = this.tail,
                    this.tail = "";
                    break;
                case 0:
                    t = "";
                    break;
                default:
                    t = this.tail.substring(0, e),
                    this.tail = this.tail.substring(e)
                }
                return this.pos += t.length,
                t
            }
            ,
            y.prototype.push = function(A) {
                return new y(A,this)
            }
            ,
            y.prototype.lookup = function(A) {
                var t, r = this.cache;
                if (r.hasOwnProperty(A))
                    t = r[A];
                else {
                    for (var n, s, a, c = this, g = !1; c; ) {
                        if (A.indexOf(".") > 0)
                            for (n = c.view,
                            s = A.split("."),
                            a = 0; null != n && a < s.length; )
                                a === s.length - 1 && (g = i(n, s[a]) || o(n, s[a])),
                                n = n[s[a++]];
                        else
                            n = c.view[A],
                            g = i(c.view, A);
                        if (g) {
                            t = n;
                            break
                        }
                        c = c.parent
                    }
                    r[A] = t
                }
                return e(t) && (t = t.call(this.view)),
                t
            }
            ,
            w.prototype.clearCache = function() {
                "undefined" !== typeof this.templateCache && this.templateCache.clear()
            }
            ,
            w.prototype.parse = function(A, t) {
                var e = this.templateCache
                  , r = A + ":" + (t || m.tags).join(":")
                  , n = "undefined" !== typeof e
                  , i = n ? e.get(r) : void 0;
                return void 0 == i && (i = Q(A, t),
                n && e.set(r, i)),
                i
            }
            ,
            w.prototype.render = function(A, t, e, r) {
                var n = this.getConfigTags(r)
                  , i = this.parse(A, n)
                  , o = t instanceof y ? t : new y(t,void 0);
                return this.renderTokens(i, o, e, A, r)
            }
            ,
            w.prototype.renderTokens = function(A, t, e, r, n) {
                for (var i, o, s, a = "", c = 0, g = A.length; c < g; ++c)
                    s = void 0,
                    "#" === (o = (i = A[c])[0]) ? s = this.renderSection(i, t, e, r, n) : "^" === o ? s = this.renderInverted(i, t, e, r, n) : ">" === o ? s = this.renderPartial(i, t, e, n) : "&" === o ? s = this.unescapedValue(i, t) : "name" === o ? s = this.escapedValue(i, t, n) : "text" === o && (s = this.rawValue(i)),
                    void 0 !== s && (a += s);
                return a
            }
            ,
            w.prototype.renderSection = function(A, r, n, i, o) {
                var s = this
                  , a = ""
                  , c = r.lookup(A[1]);
                function g(A) {
                    return s.render(A, r, n, o)
                }
                if (c) {
                    if (t(c))
                        for (var u = 0, h = c.length; u < h; ++u)
                            a += this.renderTokens(A[4], r.push(c[u]), n, i, o);
                    else if ("object" === typeof c || "string" === typeof c || "number" === typeof c)
                        a += this.renderTokens(A[4], r.push(c), n, i, o);
                    else if (e(c)) {
                        if ("string" !== typeof i)
                            throw new Error("Cannot use higher-order sections without the original template");
                        null != (c = c.call(r.view, i.slice(A[3], A[5]), g)) && (a += c)
                    } else
                        a += this.renderTokens(A[4], r, n, i, o);
                    return a
                }
            }
            ,
            w.prototype.renderInverted = function(A, e, r, n, i) {
                var o = e.lookup(A[1]);
                if (!o || t(o) && 0 === o.length)
                    return this.renderTokens(A[4], e, r, n, i)
            }
            ,
            w.prototype.indentPartial = function(A, t, e) {
                for (var r = t.replace(/[^ \t]/g, ""), n = A.split("\n"), i = 0; i < n.length; i++)
                    n[i].length && (i > 0 || !e) && (n[i] = r + n[i]);
                return n.join("\n")
            }
            ,
            w.prototype.renderPartial = function(A, t, r, n) {
                if (r) {
                    var i = this.getConfigTags(n)
                      , o = e(r) ? r(A[1]) : r[A[1]];
                    if (null != o) {
                        var s = A[6]
                          , a = A[5]
                          , c = A[4]
                          , g = o;
                        0 == a && c && (g = this.indentPartial(o, c, s));
                        var u = this.parse(g, i);
                        return this.renderTokens(u, t, r, g, n)
                    }
                }
            }
            ,
            w.prototype.unescapedValue = function(A, t) {
                var e = t.lookup(A[1]);
                if (null != e)
                    return e
            }
            ,
            w.prototype.escapedValue = function(A, t, e) {
                var r = this.getConfigEscape(e) || m.escape
                  , n = t.lookup(A[1]);
                if (null != n)
                    return "number" === typeof n && r === m.escape ? String(n) : r(n)
            }
            ,
            w.prototype.rawValue = function(A) {
                return A[1]
            }
            ,
            w.prototype.getConfigTags = function(A) {
                return t(A) ? A : A && "object" === typeof A ? A.tags : void 0
            }
            ,
            w.prototype.getConfigEscape = function(A) {
                return A && "object" === typeof A && !t(A) ? A.escape : void 0
            }
            ;
            var m = {
                name: "mustache.js",
                version: "4.2.0",
                tags: ["{{", "}}"],
                clearCache: void 0,
                escape: void 0,
                parse: void 0,
                render: void 0,
                Scanner: void 0,
                Context: void 0,
                Writer: void 0,
                set templateCache(A) {
                    M.templateCache = A
                },
                get templateCache() {
                    return M.templateCache
                }
            }
              , M = new w;
            return m.clearCache = function() {
                return M.clearCache()
            }
            ,
            m.parse = function(A, t) {
                return M.parse(A, t)
            }
            ,
            m.render = function(A, t, e, n) {
                if ("string" !== typeof A)
                    throw new TypeError('Invalid template! Template should be a "string" but "' + r(A) + '" was given as the first argument for mustache#render(template, view, partials)');
                return M.render(A, t, e, n)
            }
            ,
            m.escape = h,
            m.Scanner = p,
            m.Context = y,
            m.Writer = w,
            m
        }()
    },
    56046: function(A, t, e) {
        "use strict";
        var r = e(60197).Buffer
          , n = e(89885)
          , i = this && this.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Account = void 0;
        const o = i(e(13072))
          , s = i(e(80289))
          , a = e(31039)
          , c = e(75720)
          , g = e(67758)
          , u = e(99128)
          , h = e(74184)
          , I = e(83443)
          , l = e(87415)
          , E = i(e(77614));
        function B(A) {
            return JSON.parse(r.from(A).toString())
        }
        function C(A) {
            return r.from(JSON.stringify(A))
        }
        class Q {
            constructor(A, t) {
                this.accessKeyByPublicKeyCache = {},
                this.connection = A,
                this.accountId = t
            }
            get ready() {
                return s.default("Account.ready()")("not needed anymore, always ready"),
                Promise.resolve()
            }
            async fetchState() {
                s.default("Account.fetchState()")("use `Account.state()` instead")
            }
            async state() {
                return this.connection.provider.query({
                    request_type: "view_account",
                    account_id: this.accountId,
                    finality: "optimistic"
                })
            }
            printLogsAndFailures(A, t) {
                if (!n.env.NEAR_NO_LOGS)
                    for (const e of t)
                        console.log(`Receipt${e.receiptIds.length > 1 ? "s" : ""}: ${e.receiptIds.join(", ")}`),
                        this.printLogs(A, e.logs, "\t"),
                        e.failure && console.warn(`\tFailure [${A}]: ${e.failure}`)
            }
            printLogs(A, t, e="") {
                if (!n.env.NEAR_NO_LOGS)
                    for (const r of t)
                        console.log(`${e}Log [${A}]: ${r}`)
            }
            async signTransaction(A, t) {
                const e = await this.findAccessKey(A, t);
                if (!e)
                    throw new c.TypedError(`Can not sign transactions for account ${this.accountId} on network ${this.connection.networkId}, no matching key pair found in ${this.connection.signer}.`,"KeyNotFound");
                const {accessKey: r} = e
                  , n = (await this.connection.provider.block({
                    finality: "final"
                })).header.hash
                  , i = ++r.nonce;
                return await a.signTransaction(A, i, t, g.baseDecode(n), this.connection.signer, this.accountId, this.connection.networkId)
            }
            signAndSendTransaction(...A) {
                return "string" === typeof A[0] ? this.signAndSendTransactionV1(A[0], A[1]) : this.signAndSendTransactionV2(A[0])
            }
            signAndSendTransactionV1(A, t) {
                return s.default("Account.signAndSendTransaction(receiverId, actions")("use `Account.signAndSendTransaction(SignAndSendTransactionOptions)` instead"),
                this.signAndSendTransactionV2({
                    receiverId: A,
                    actions: t
                })
            }
            async signAndSendTransactionV2({receiverId: A, actions: t, returnError: e}) {
                let r, n;
                const i = await E.default(500, 12, 1.5, (async()=>{
                    [r,n] = await this.signTransaction(A, t);
                    const e = n.transaction.publicKey;
                    try {
                        return await this.connection.provider.sendTransaction(n)
                    } catch (i) {
                        if ("InvalidNonce" === i.type)
                            return h.logWarning(`Retrying transaction ${A}:${g.baseEncode(r)} with new nonce.`),
                            delete this.accessKeyByPublicKeyCache[e.toString()],
                            null;
                        if ("Expired" === i.type)
                            return h.logWarning(`Retrying transaction ${A}:${g.baseEncode(r)} due to expired block hash`),
                            null;
                        throw i.context = new c.ErrorContext(g.baseEncode(r)),
                        i
                    }
                }
                ));
                if (!i)
                    throw new c.TypedError("nonce retries exceeded for transaction. This usually means there are too many parallel requests with the same access key.","RetriesExceeded");
                const o = [i.transaction_outcome, ...i.receipts_outcome].reduce(((A,t)=>t.outcome.logs.length || "object" === typeof t.outcome.status && "object" === typeof t.outcome.status.Failure ? A.concat({
                    receiptIds: t.outcome.receipt_ids,
                    logs: t.outcome.logs,
                    failure: "undefined" != typeof t.outcome.status.Failure ? I.parseRpcError(t.outcome.status.Failure) : null
                }) : A), []);
                if (this.printLogsAndFailures(n.transaction.receiverId, o),
                !e && "object" === typeof i.status && "object" === typeof i.status.Failure)
                    throw i.status.Failure.error_message && i.status.Failure.error_type ? new c.TypedError(`Transaction ${i.transaction_outcome.id} failed. ${i.status.Failure.error_message}`,i.status.Failure.error_type) : I.parseResultError(i);
                return i
            }
            async findAccessKey(A, t) {
                const e = await this.connection.signer.getPublicKey(this.accountId, this.connection.networkId);
                if (!e)
                    return null;
                const r = this.accessKeyByPublicKeyCache[e.toString()];
                if (void 0 !== r)
                    return {
                        publicKey: e,
                        accessKey: r
                    };
                try {
                    const A = await this.connection.provider.query({
                        request_type: "view_access_key",
                        account_id: this.accountId,
                        public_key: e.toString(),
                        finality: "optimistic"
                    });
                    return this.accessKeyByPublicKeyCache[e.toString()] ? {
                        publicKey: e,
                        accessKey: this.accessKeyByPublicKeyCache[e.toString()]
                    } : (this.accessKeyByPublicKeyCache[e.toString()] = A,
                    {
                        publicKey: e,
                        accessKey: A
                    })
                } catch (n) {
                    if ("AccessKeyDoesNotExist" == n.type)
                        return null;
                    throw n
                }
            }
            async createAndDeployContract(A, t, e, r) {
                const n = a.fullAccessKey();
                await this.signAndSendTransaction({
                    receiverId: A,
                    actions: [a.createAccount(), a.transfer(r), a.addKey(u.PublicKey.from(t), n), a.deployContract(e)]
                });
                return new Q(this.connection,A)
            }
            async sendMoney(A, t) {
                return this.signAndSendTransaction({
                    receiverId: A,
                    actions: [a.transfer(t)]
                })
            }
            async createAccount(A, t, e) {
                const r = a.fullAccessKey();
                return this.signAndSendTransaction({
                    receiverId: A,
                    actions: [a.createAccount(), a.transfer(e), a.addKey(u.PublicKey.from(t), r)]
                })
            }
            async deleteAccount(A) {
                return this.signAndSendTransaction({
                    receiverId: this.accountId,
                    actions: [a.deleteAccount(A)]
                })
            }
            async deployContract(A) {
                return this.signAndSendTransaction({
                    receiverId: this.accountId,
                    actions: [a.deployContract(A)]
                })
            }
            async functionCall(...A) {
                return "string" === typeof A[0] ? this.functionCallV1(A[0], A[1], A[2], A[3], A[4]) : this.functionCallV2(A[0])
            }
            functionCallV1(A, t, e, r, n) {
                return s.default("Account.functionCall(contractId, methodName, args, gas, amount)")("use `Account.functionCall(FunctionCallOptions)` instead"),
                e = e || {},
                this.validateArgs(e),
                this.signAndSendTransaction({
                    receiverId: A,
                    actions: [a.functionCall(t, e, r || l.DEFAULT_FUNCTION_CALL_GAS, n)]
                })
            }
            functionCallV2({contractId: A, methodName: t, args: e={}, gas: r=l.DEFAULT_FUNCTION_CALL_GAS, attachedDeposit: n, walletMeta: i, walletCallbackUrl: o, stringify: s}) {
                this.validateArgs(e);
                const c = void 0 === s ? a.stringifyJsonOrBytes : s;
                return this.signAndSendTransaction({
                    receiverId: A,
                    actions: [a.functionCall(t, e, r, n, c)],
                    walletMeta: i,
                    walletCallbackUrl: o
                })
            }
            async addKey(A, t, e, r) {
                let n;
                return e || (e = []),
                Array.isArray(e) || (e = [e]),
                n = t ? a.functionCallAccessKey(t, e, r) : a.fullAccessKey(),
                this.signAndSendTransaction({
                    receiverId: this.accountId,
                    actions: [a.addKey(u.PublicKey.from(A), n)]
                })
            }
            async deleteKey(A) {
                return this.signAndSendTransaction({
                    receiverId: this.accountId,
                    actions: [a.deleteKey(u.PublicKey.from(A))]
                })
            }
            async stake(A, t) {
                return this.signAndSendTransaction({
                    receiverId: this.accountId,
                    actions: [a.stake(t, u.PublicKey.from(A))]
                })
            }
            validateArgs(A) {
                if (!(void 0 !== A.byteLength && A.byteLength === A.length) && (Array.isArray(A) || "object" !== typeof A))
                    throw new h.PositionalArgsError
            }
            async viewFunction(A, t, e={}, {parse: n=B, stringify: i=C}={}) {
                this.validateArgs(e);
                const o = i(e).toString("base64")
                  , s = await this.connection.provider.query({
                    request_type: "call_function",
                    account_id: A,
                    method_name: t,
                    args_base64: o,
                    finality: "optimistic"
                });
                return s.logs && this.printLogs(A, s.logs),
                s.result && s.result.length > 0 && n(r.from(s.result))
            }
            async viewState(A, t={
                finality: "optimistic"
            }) {
                const {values: e} = await this.connection.provider.query({
                    request_type: "view_state",
                    ...t,
                    account_id: this.accountId,
                    prefix_base64: r.from(A).toString("base64")
                });
                return e.map((({key: A, value: t})=>({
                    key: r.from(A, "base64"),
                    value: r.from(t, "base64")
                })))
            }
            async getAccessKeys() {
                const A = await this.connection.provider.query({
                    request_type: "view_access_key_list",
                    account_id: this.accountId,
                    finality: "optimistic"
                });
                return Array.isArray(A) ? A : A.keys
            }
            async getAccountDetails() {
                return {
                    authorizedApps: (await this.getAccessKeys()).filter((A=>"FullAccess" !== A.access_key.permission)).map((A=>{
                        const t = A.access_key.permission;
                        return {
                            contractId: t.FunctionCall.receiver_id,
                            amount: t.FunctionCall.allowance,
                            publicKey: A.public_key
                        }
                    }
                    ))
                }
            }
            async getAccountBalance() {
                const A = await this.connection.provider.experimental_protocolConfig({
                    finality: "final"
                })
                  , t = await this.state()
                  , e = new o.default(A.runtime_config.storage_amount_per_byte)
                  , r = new o.default(t.storage_usage).mul(e)
                  , n = new o.default(t.locked)
                  , i = new o.default(t.amount).add(n)
                  , s = i.sub(o.default.max(n, r));
                return {
                    total: i.toString(),
                    stateStaked: r.toString(),
                    staked: n.toString(),
                    available: s.toString()
                }
            }
        }
        t.Account = Q
    },
    12073: function(A, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.UrlAccountCreator = t.LocalAccountCreator = t.AccountCreator = void 0;
        const r = e(81313);
        class n {
        }
        t.AccountCreator = n;
        t.LocalAccountCreator = class extends n {
            constructor(A, t) {
                super(),
                this.masterAccount = A,
                this.initialBalance = t
            }
            async createAccount(A, t) {
                await this.masterAccount.createAccount(A, t, this.initialBalance)
            }
        }
        ;
        t.UrlAccountCreator = class extends n {
            constructor(A, t) {
                super(),
                this.connection = A,
                this.helperUrl = t
            }
            async createAccount(A, t) {
                await r.fetchJson(`${this.helperUrl}/account`, JSON.stringify({
                    newAccountId: A,
                    newAccountPublicKey: t.toString()
                }))
            }
        }
    },
    89656: function(A, t, e) {
        "use strict";
        var r = e(60197).Buffer
          , n = this && this.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Account2FA = t.AccountMultisig = t.MULTISIG_CONFIRM_METHODS = t.MULTISIG_CHANGE_METHODS = t.MULTISIG_DEPOSIT = t.MULTISIG_GAS = t.MULTISIG_ALLOWANCE = t.MULTISIG_STORAGE_KEY = void 0;
        const i = n(e(13072))
          , o = n(e(80289))
          , s = e(56046)
          , a = e(85781)
          , c = e(99128)
          , g = e(31039)
          , u = e(81313);
        t.MULTISIG_STORAGE_KEY = "__multisigRequest",
        t.MULTISIG_ALLOWANCE = new i.default(a.parseNearAmount("1")),
        t.MULTISIG_GAS = new i.default("100000000000000"),
        t.MULTISIG_DEPOSIT = new i.default("0"),
        t.MULTISIG_CHANGE_METHODS = ["add_request", "add_request_and_confirm", "delete_request", "confirm"],
        t.MULTISIG_CONFIRM_METHODS = ["confirm"];
        const h = {
            [t.MULTISIG_STORAGE_KEY]: null
        };
        class I extends s.Account {
            constructor(A, t, e) {
                super(A, t),
                this.storage = e.storage,
                this.onAddRequestResult = e.onAddRequestResult
            }
            async signAndSendTransactionWithAccount(A, t) {
                return super.signAndSendTransaction({
                    receiverId: A,
                    actions: t
                })
            }
            signAndSendTransaction(...A) {
                return "string" === typeof A[0] ? this._signAndSendTransaction({
                    receiverId: A[0],
                    actions: A[1]
                }) : this._signAndSendTransaction(A[0])
            }
            async _signAndSendTransaction({receiverId: A, actions: e}) {
                const {accountId: n} = this
                  , i = r.from(JSON.stringify({
                    request: {
                        receiver_id: A,
                        actions: E(e, n, A)
                    }
                }));
                let o;
                try {
                    o = await super.signAndSendTransaction({
                        receiverId: n,
                        actions: [g.functionCall("add_request_and_confirm", i, t.MULTISIG_GAS, t.MULTISIG_DEPOSIT)]
                    })
                } catch (a) {
                    if (a.toString().includes("Account has too many active requests. Confirm or delete some"))
                        return await this.deleteUnconfirmedRequests(),
                        await this.signAndSendTransaction(A, e);
                    throw a
                }
                if (!o.status)
                    throw new Error("Request failed");
                const s = {
                    ...o.status
                };
                if (!s.SuccessValue || "string" !== typeof s.SuccessValue)
                    throw new Error("Request failed");
                return this.setRequest({
                    accountId: n,
                    actions: e,
                    requestId: parseInt(r.from(s.SuccessValue, "base64").toString("ascii"), 10)
                }),
                this.onAddRequestResult && await this.onAddRequestResult(o),
                this.deleteUnconfirmedRequests(),
                o
            }
            async deleteUnconfirmedRequests() {
                const A = await this.getRequestIds()
                  , {requestId: e} = this.getRequest();
                for (const n of A)
                    if (n != e)
                        try {
                            await super.signAndSendTransaction({
                                receiverId: this.accountId,
                                actions: [g.functionCall("delete_request", {
                                    request_id: n
                                }, t.MULTISIG_GAS, t.MULTISIG_DEPOSIT)]
                            })
                        } catch (r) {
                            console.warn("Attempt to delete an earlier request before 15 minutes failed. Will try again.")
                        }
            }
            async getRequestIds() {
                return this.viewFunction(this.accountId, "list_request_ids")
            }
            getRequest() {
                return this.storage ? JSON.parse(this.storage.getItem(t.MULTISIG_STORAGE_KEY) || "{}") : h[t.MULTISIG_STORAGE_KEY]
            }
            setRequest(A) {
                if (this.storage)
                    return this.storage.setItem(t.MULTISIG_STORAGE_KEY, JSON.stringify(A));
                h[t.MULTISIG_STORAGE_KEY] = A
            }
        }
        t.AccountMultisig = I;
        t.Account2FA = class extends I {
            constructor(A, t, e) {
                super(A, t, e),
                this.helperUrl = "https://helper.testnet.near.org",
                this.helperUrl = e.helperUrl || this.helperUrl,
                this.storage = e.storage,
                this.sendCode = e.sendCode || this.sendCodeDefault,
                this.getCode = e.getCode || this.getCodeDefault,
                this.verifyCode = e.verifyCode || this.verifyCodeDefault,
                this.onConfirmResult = e.onConfirmResult
            }
            async signAndSendTransaction(...A) {
                if ("string" === typeof A[0]) {
                    return o.default("Account.signAndSendTransaction(receiverId, actions")("use `Account2FA.signAndSendTransaction(SignAndSendTransactionOptions)` instead"),
                    this.__signAndSendTransaction({
                        receiverId: A[0],
                        actions: A[1]
                    })
                }
                return this.__signAndSendTransaction(A[0])
            }
            async __signAndSendTransaction({receiverId: A, actions: t}) {
                await super.signAndSendTransaction({
                    receiverId: A,
                    actions: t
                }),
                await this.sendCode();
                const e = await this.promptAndVerify();
                return this.onConfirmResult && await this.onConfirmResult(e),
                e
            }
            async deployMultisig(A) {
                const {accountId: e} = this
                  , n = (await this.getRecoveryMethods()).data.filter((({kind: A, publicKey: t})=>("phrase" === A || "ledger" === A) && null !== t)).map((A=>A.publicKey))
                  , i = (await this.getAccessKeys()).filter((({public_key: A, access_key: {permission: t}})=>"FullAccess" === t && !n.includes(A))).map((A=>A.public_key)).map(l)
                  , o = l((await this.postSignedJson("/2fa/getAccessKey", {
                    accountId: e
                })).publicKey)
                  , s = r.from(JSON.stringify({
                    num_confirmations: 2
                }))
                  , a = [...i.map((A=>g.deleteKey(A))), ...i.map((A=>g.addKey(A, g.functionCallAccessKey(e, t.MULTISIG_CHANGE_METHODS, null)))), g.addKey(o, g.functionCallAccessKey(e, t.MULTISIG_CONFIRM_METHODS, null)), g.deployContract(A)];
                return "11111111111111111111111111111111" === (await this.state()).code_hash && a.push(g.functionCall("new", s, t.MULTISIG_GAS, t.MULTISIG_DEPOSIT)),
                console.log("deploying multisig contract for", e),
                await super.signAndSendTransactionWithAccount(e, a)
            }
            async disable(A) {
                const {accountId: t} = this
                  , e = (await this.getAccessKeys()).filter((({access_key: A})=>"FullAccess" !== A.permission)).filter((({access_key: A})=>{
                    const e = A.permission.FunctionCall;
                    return e.receiver_id === t && 4 === e.method_names.length && e.method_names.includes("add_request_and_confirm")
                }
                ))
                  , r = c.PublicKey.from((await this.postSignedJson("/2fa/getAccessKey", {
                    accountId: t
                })).publicKey)
                  , n = [g.deleteKey(r), ...e.map((({public_key: A})=>g.deleteKey(c.PublicKey.from(A)))), ...e.map((({public_key: A})=>g.addKey(c.PublicKey.from(A), null))), g.deployContract(A)];
                return console.log("disabling 2fa for", t),
                await this.signAndSendTransaction({
                    receiverId: t,
                    actions: n
                })
            }
            async sendCodeDefault() {
                const {accountId: A} = this
                  , {requestId: t} = this.getRequest()
                  , e = await this.get2faMethod();
                return await this.postSignedJson("/2fa/send", {
                    accountId: A,
                    method: e,
                    requestId: t
                }),
                t
            }
            async getCodeDefault(A) {
                throw new Error('There is no getCode callback provided. Please provide your own in AccountMultisig constructor options. It has a parameter method where method.kind is "email" or "phone".')
            }
            async promptAndVerify() {
                const A = await this.get2faMethod()
                  , t = await this.getCode(A);
                try {
                    return await this.verifyCode(t)
                } catch (e) {
                    if (console.warn("Error validating security code:", e),
                    e.toString().includes("invalid 2fa code provided") || e.toString().includes("2fa code not valid"))
                        return await this.promptAndVerify();
                    throw e
                }
            }
            async verifyCodeDefault(A) {
                const {accountId: t} = this
                  , e = this.getRequest();
                if (!e)
                    throw new Error("no request pending");
                const {requestId: r} = e;
                return await this.postSignedJson("/2fa/verify", {
                    accountId: t,
                    securityCode: A,
                    requestId: r
                })
            }
            async getRecoveryMethods() {
                const {accountId: A} = this;
                return {
                    accountId: A,
                    data: await this.postSignedJson("/account/recoveryMethods", {
                        accountId: A
                    })
                }
            }
            async get2faMethod() {
                let {data: A} = await this.getRecoveryMethods();
                if (A && A.length && (A = A.find((A=>0 === A.kind.indexOf("2fa-")))),
                !A)
                    return null;
                const {kind: t, detail: e} = A;
                return {
                    kind: t,
                    detail: e
                }
            }
            async signatureFor() {
                const {accountId: A} = this
                  , t = (await this.connection.provider.block({
                    finality: "final"
                })).header.height.toString()
                  , e = await this.connection.signer.signMessage(r.from(t), A, this.connection.networkId);
                return {
                    blockNumber: t,
                    blockNumberSignature: r.from(e.signature).toString("base64")
                }
            }
            async postSignedJson(A, t) {
                return await u.fetchJson(this.helperUrl + A, JSON.stringify({
                    ...t,
                    ...await this.signatureFor()
                }))
            }
        }
        ;
        const l = A=>c.PublicKey.from(A)
          , E = (A,e,n)=>A.map((A=>{
            const i = A.enum
              , {gas: o, publicKey: s, methodName: a, args: c, deposit: g, accessKey: u, code: h} = A[i]
              , I = {
                type: i[0].toUpperCase() + i.substr(1),
                gas: o && o.toString() || void 0,
                public_key: s && (l = s,
                l.toString().replace("ed25519:", "")) || void 0,
                method_name: a,
                args: c && r.from(c).toString("base64") || void 0,
                code: h && r.from(h).toString("base64") || void 0,
                amount: g && g.toString() || void 0,
                deposit: g && g.toString() || "0",
                permission: void 0
            };
            var l;
            if (u && (n === e && "fullAccess" !== u.permission.enum && (I.permission = {
                receiver_id: e,
                allowance: t.MULTISIG_ALLOWANCE.toString(),
                method_names: t.MULTISIG_CHANGE_METHODS
            }),
            "functionCall" === u.permission.enum)) {
                const {receiverId: A, methodNames: t, allowance: e} = u.permission.functionCall;
                I.permission = {
                    receiver_id: A,
                    allowance: e && e.toString() || void 0,
                    method_names: t
                }
            }
            return I
        }
        ))
    },
    38923: function(A, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.connect = void 0;
        const r = e(31359);
        t.connect = async function(A) {
            return new r.Near(A)
        }
    },
    61315: function(A, t, e) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(A, t, e, r) {
            void 0 === r && (r = e),
            Object.defineProperty(A, r, {
                enumerable: !0,
                get: function() {
                    return t[e]
                }
            })
        }
        : function(A, t, e, r) {
            void 0 === r && (r = e),
            A[r] = t[e]
        }
        )
          , n = this && this.__setModuleDefault || (Object.create ? function(A, t) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(A, t) {
            A.default = t
        }
        )
          , i = this && this.__importStar || function(A) {
            if (A && A.__esModule)
                return A;
            var t = {};
            if (null != A)
                for (var e in A)
                    "default" !== e && Object.hasOwnProperty.call(A, e) && r(t, A, e);
            return n(t, A),
            t
        }
          , o = this && this.__exportStar || function(A, t) {
            for (var e in A)
                "default" === e || t.hasOwnProperty(e) || r(t, A, e)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.keyStores = i(e(7545)),
        o(e(98242), t),
        o(e(38923), t),
        e(96816)
    },
    98242: function(A, t, e) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(A, t, e, r) {
            void 0 === r && (r = e),
            Object.defineProperty(A, r, {
                enumerable: !0,
                get: function() {
                    return t[e]
                }
            })
        }
        : function(A, t, e, r) {
            void 0 === r && (r = e),
            A[r] = t[e]
        }
        )
          , n = this && this.__setModuleDefault || (Object.create ? function(A, t) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(A, t) {
            A.default = t
        }
        )
          , i = this && this.__importStar || function(A) {
            if (A && A.__esModule)
                return A;
            var t = {};
            if (null != A)
                for (var e in A)
                    "default" !== e && Object.hasOwnProperty.call(A, e) && r(t, A, e);
            return n(t, A),
            t
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WalletConnection = t.WalletAccount = t.ConnectedWalletAccount = t.Near = t.KeyPair = t.Signer = t.InMemorySigner = t.Contract = t.Connection = t.Account = t.multisig = t.validators = t.transactions = t.utils = t.providers = t.accountCreator = void 0;
        const o = i(e(75720));
        t.providers = o;
        const s = i(e(17752));
        t.utils = s;
        const a = i(e(31039));
        t.transactions = a;
        const c = i(e(40606));
        t.validators = c;
        const g = e(56046);
        Object.defineProperty(t, "Account", {
            enumerable: !0,
            get: function() {
                return g.Account
            }
        });
        const u = i(e(89656));
        t.multisig = u;
        const h = i(e(12073));
        t.accountCreator = h;
        const I = e(43179);
        Object.defineProperty(t, "Connection", {
            enumerable: !0,
            get: function() {
                return I.Connection
            }
        });
        const l = e(89540);
        Object.defineProperty(t, "Signer", {
            enumerable: !0,
            get: function() {
                return l.Signer
            }
        }),
        Object.defineProperty(t, "InMemorySigner", {
            enumerable: !0,
            get: function() {
                return l.InMemorySigner
            }
        });
        const E = e(19655);
        Object.defineProperty(t, "Contract", {
            enumerable: !0,
            get: function() {
                return E.Contract
            }
        });
        const B = e(99128);
        Object.defineProperty(t, "KeyPair", {
            enumerable: !0,
            get: function() {
                return B.KeyPair
            }
        });
        const C = e(31359);
        Object.defineProperty(t, "Near", {
            enumerable: !0,
            get: function() {
                return C.Near
            }
        });
        const Q = e(39795);
        Object.defineProperty(t, "ConnectedWalletAccount", {
            enumerable: !0,
            get: function() {
                return Q.ConnectedWalletAccount
            }
        }),
        Object.defineProperty(t, "WalletAccount", {
            enumerable: !0,
            get: function() {
                return Q.WalletAccount
            }
        }),
        Object.defineProperty(t, "WalletConnection", {
            enumerable: !0,
            get: function() {
                return Q.WalletConnection
            }
        })
    },
    43179: function(A, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Connection = void 0;
        const r = e(75720)
          , n = e(89540);
        class i {
            constructor(A, t, e) {
                this.networkId = A,
                this.provider = t,
                this.signer = e
            }
            static fromConfig(A) {
                const t = function(A) {
                    switch (A.type) {
                    case void 0:
                        return A;
                    case "JsonRpcProvider":
                        return new r.JsonRpcProvider({
                            ...A.args
                        });
                    default:
                        throw new Error(`Unknown provider type ${A.type}`)
                    }
                }(A.provider)
                  , e = function(A) {
                    switch (A.type) {
                    case void 0:
                        return A;
                    case "InMemorySigner":
                        return new n.InMemorySigner(A.keyStore);
                    default:
                        throw new Error(`Unknown signer type ${A.type}`)
                    }
                }(A.signer);
                return new i(A.networkId,t,e)
            }
        }
        t.Connection = i
    },
    87415: function(A, t, e) {
        "use strict";
        var r = this && this.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.DEFAULT_FUNCTION_CALL_GAS = void 0;
        const n = r(e(13072));
        t.DEFAULT_FUNCTION_CALL_GAS = new n.default("30000000000000")
    },
    19655: function(A, t, e) {
        "use strict";
        var r = this && this.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Contract = void 0;
        const n = r(e(13072))
          , i = r(e(80289))
          , o = e(75720)
          , s = e(74184);
        function a(A, t) {
            return {
                [A]: (...A)=>t(...A)
            }[A]
        }
        const c = A=>A && void 0 !== A.byteLength && A.byteLength === A.length
          , g = A=>"[object Object]" === Object.prototype.toString.call(A);
        t.Contract = class {
            constructor(A, t, e) {
                this.account = A,
                this.contractId = t;
                const {viewMethods: r=[], changeMethods: n=[]} = e;
                r.forEach((A=>{
                    Object.defineProperty(this, A, {
                        writable: !1,
                        enumerable: !0,
                        value: a(A, (async(t={},e={},...r)=>{
                            if (r.length || !g(t) && !c(t) || !g(e))
                                throw new s.PositionalArgsError;
                            return this.account.viewFunction(this.contractId, A, t, e)
                        }
                        ))
                    })
                }
                )),
                n.forEach((A=>{
                    Object.defineProperty(this, A, {
                        writable: !1,
                        enumerable: !0,
                        value: a(A, (async(...t)=>{
                            if (t.length && (t.length > 3 || !g(t[0]) && !c(t[0])))
                                throw new s.PositionalArgsError;
                            if (t.length > 1 || !t[0] || !t[0].args) {
                                return i.default("contract.methodName(args, gas, amount)")("use `contract.methodName({ args, gas?, amount?, callbackUrl?, meta? })` instead"),
                                this._changeMethod({
                                    methodName: A,
                                    args: t[0],
                                    gas: t[1],
                                    amount: t[2]
                                })
                            }
                            return this._changeMethod({
                                methodName: A,
                                ...t[0]
                            })
                        }
                        ))
                    })
                }
                ))
            }
            async _changeMethod({args: A, methodName: t, gas: e, amount: r, meta: i, callbackUrl: a}) {
                !function(A) {
                    const t = "number, decimal string or BN";
                    for (const e of Object.keys(A)) {
                        const r = A[e];
                        if (r && !n.default.isBN(r) && isNaN(r))
                            throw new s.ArgumentTypeError(e,t,r)
                    }
                }({
                    gas: e,
                    amount: r
                });
                const c = await this.account.functionCall({
                    contractId: this.contractId,
                    methodName: t,
                    args: A,
                    gas: e,
                    attachedDeposit: r,
                    walletMeta: i,
                    walletCallbackUrl: a
                });
                return o.getTransactionLastResult(c)
            }
        }
    },
    7545: function(A, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.MergeKeyStore = t.BrowserLocalStorageKeyStore = t.InMemoryKeyStore = t.KeyStore = void 0;
        const r = e(71371);
        Object.defineProperty(t, "KeyStore", {
            enumerable: !0,
            get: function() {
                return r.KeyStore
            }
        });
        const n = e(48500);
        Object.defineProperty(t, "InMemoryKeyStore", {
            enumerable: !0,
            get: function() {
                return n.InMemoryKeyStore
            }
        });
        const i = e(29841);
        Object.defineProperty(t, "BrowserLocalStorageKeyStore", {
            enumerable: !0,
            get: function() {
                return i.BrowserLocalStorageKeyStore
            }
        });
        const o = e(33804);
        Object.defineProperty(t, "MergeKeyStore", {
            enumerable: !0,
            get: function() {
                return o.MergeKeyStore
            }
        })
    },
    29841: function(A, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.BrowserLocalStorageKeyStore = void 0;
        const r = e(71371)
          , n = e(99128);
        class i extends r.KeyStore {
            constructor(A=window.localStorage, t="near-api-js:keystore:") {
                super(),
                this.localStorage = A,
                this.prefix = t
            }
            async setKey(A, t, e) {
                this.localStorage.setItem(this.storageKeyForSecretKey(A, t), e.toString())
            }
            async getKey(A, t) {
                const e = this.localStorage.getItem(this.storageKeyForSecretKey(A, t));
                return e ? n.KeyPair.fromString(e) : null
            }
            async removeKey(A, t) {
                this.localStorage.removeItem(this.storageKeyForSecretKey(A, t))
            }
            async clear() {
                for (const A of this.storageKeys())
                    A.startsWith(this.prefix) && this.localStorage.removeItem(A)
            }
            async getNetworks() {
                const A = new Set;
                for (const t of this.storageKeys())
                    if (t.startsWith(this.prefix)) {
                        const e = t.substring(this.prefix.length).split(":");
                        A.add(e[1])
                    }
                return Array.from(A.values())
            }
            async getAccounts(A) {
                const t = new Array;
                for (const e of this.storageKeys())
                    if (e.startsWith(this.prefix)) {
                        const r = e.substring(this.prefix.length).split(":");
                        r[1] === A && t.push(r[0])
                    }
                return t
            }
            storageKeyForSecretKey(A, t) {
                return `${this.prefix}${t}:${A}`
            }
            *storageKeys() {
                for (let A = 0; A < this.localStorage.length; A++)
                    yield this.localStorage.key(A)
            }
        }
        t.BrowserLocalStorageKeyStore = i
    },
    48500: function(A, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.InMemoryKeyStore = void 0;
        const r = e(71371)
          , n = e(99128);
        class i extends r.KeyStore {
            constructor() {
                super(),
                this.keys = {}
            }
            async setKey(A, t, e) {
                this.keys[`${t}:${A}`] = e.toString()
            }
            async getKey(A, t) {
                const e = this.keys[`${t}:${A}`];
                return e ? n.KeyPair.fromString(e) : null
            }
            async removeKey(A, t) {
                delete this.keys[`${t}:${A}`]
            }
            async clear() {
                this.keys = {}
            }
            async getNetworks() {
                const A = new Set;
                return Object.keys(this.keys).forEach((t=>{
                    const e = t.split(":");
                    A.add(e[1])
                }
                )),
                Array.from(A.values())
            }
            async getAccounts(A) {
                const t = new Array;
                return Object.keys(this.keys).forEach((e=>{
                    const r = e.split(":");
                    r[r.length - 1] === A && t.push(r.slice(0, r.length - 1).join(":"))
                }
                )),
                t
            }
            toString() {
                return "InMemoryKeyStore"
            }
        }
        t.InMemoryKeyStore = i
    },
    71371: function(A, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.KeyStore = void 0;
        t.KeyStore = class {
        }
    },
    33804: function(A, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.MergeKeyStore = void 0;
        const r = e(71371);
        class n extends r.KeyStore {
            constructor(A, t={
                writeKeyStoreIndex: 0
            }) {
                super(),
                this.options = t,
                this.keyStores = A
            }
            async setKey(A, t, e) {
                await this.keyStores[this.options.writeKeyStoreIndex].setKey(A, t, e)
            }
            async getKey(A, t) {
                for (const e of this.keyStores) {
                    const r = await e.getKey(A, t);
                    if (r)
                        return r
                }
                return null
            }
            async removeKey(A, t) {
                for (const e of this.keyStores)
                    await e.removeKey(A, t)
            }
            async clear() {
                for (const A of this.keyStores)
                    await A.clear()
            }
            async getNetworks() {
                const A = new Set;
                for (const t of this.keyStores)
                    for (const e of await t.getNetworks())
                        A.add(e);
                return Array.from(A)
            }
            async getAccounts(A) {
                const t = new Set;
                for (const e of this.keyStores)
                    for (const r of await e.getAccounts(A))
                        t.add(r);
                return Array.from(t)
            }
            toString() {
                return `MergeKeyStore(${this.keyStores.join(", ")})`
            }
        }
        t.MergeKeyStore = n
    },
    31359: function(A, t, e) {
        "use strict";
        var r = this && this.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Near = void 0;
        const n = r(e(13072))
          , i = e(56046)
          , o = e(43179)
          , s = e(19655)
          , a = e(12073);
        t.Near = class {
            constructor(A) {
                if (this.config = A,
                this.connection = o.Connection.fromConfig({
                    networkId: A.networkId,
                    provider: {
                        type: "JsonRpcProvider",
                        args: {
                            url: A.nodeUrl,
                            headers: A.headers
                        }
                    },
                    signer: A.signer || {
                        type: "InMemorySigner",
                        keyStore: A.keyStore || A.deps.keyStore
                    }
                }),
                A.masterAccount) {
                    const t = A.initialBalance ? new n.default(A.initialBalance) : new n.default("500000000000000000000000000");
                    this.accountCreator = new a.LocalAccountCreator(new i.Account(this.connection,A.masterAccount),t)
                } else
                    A.helperUrl ? this.accountCreator = new a.UrlAccountCreator(this.connection,A.helperUrl) : this.accountCreator = null
            }
            async account(A) {
                return new i.Account(this.connection,A)
            }
            async createAccount(A, t) {
                if (!this.accountCreator)
                    throw new Error("Must specify account creator, either via masterAccount or helperUrl configuration settings.");
                return await this.accountCreator.createAccount(A, t),
                new i.Account(this.connection,A)
            }
            async loadContract(A, t) {
                const e = new i.Account(this.connection,t.sender);
                return new s.Contract(e,A,t)
            }
            async sendTokens(A, t, e) {
                console.warn("near.sendTokens is deprecated. Use `yourAccount.sendMoney` instead.");
                const r = new i.Account(this.connection,t);
                return (await r.sendMoney(e, A)).transaction_outcome.id
            }
        }
    },
    75720: function(A, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ErrorContext = t.TypedError = t.getTransactionLastResult = t.FinalExecutionStatusBasic = t.JsonRpcProvider = t.Provider = void 0;
        const r = e(99844);
        Object.defineProperty(t, "Provider", {
            enumerable: !0,
            get: function() {
                return r.Provider
            }
        }),
        Object.defineProperty(t, "getTransactionLastResult", {
            enumerable: !0,
            get: function() {
                return r.getTransactionLastResult
            }
        }),
        Object.defineProperty(t, "FinalExecutionStatusBasic", {
            enumerable: !0,
            get: function() {
                return r.FinalExecutionStatusBasic
            }
        });
        const n = e(14625);
        Object.defineProperty(t, "JsonRpcProvider", {
            enumerable: !0,
            get: function() {
                return n.JsonRpcProvider
            }
        }),
        Object.defineProperty(t, "TypedError", {
            enumerable: !0,
            get: function() {
                return n.TypedError
            }
        }),
        Object.defineProperty(t, "ErrorContext", {
            enumerable: !0,
            get: function() {
                return n.ErrorContext
            }
        })
    },
    14625: function(A, t, e) {
        "use strict";
        var r = e(60197).Buffer
          , n = e(89885)
          , i = this && this.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.JsonRpcProvider = t.ErrorContext = t.TypedError = void 0;
        const o = i(e(80289))
          , s = e(99844)
          , a = e(81313)
          , c = e(74184);
        Object.defineProperty(t, "TypedError", {
            enumerable: !0,
            get: function() {
                return c.TypedError
            }
        }),
        Object.defineProperty(t, "ErrorContext", {
            enumerable: !0,
            get: function() {
                return c.ErrorContext
            }
        });
        const g = e(67758)
          , u = i(e(77614))
          , h = e(83443);
        let I = 123;
        class l extends s.Provider {
            constructor(A) {
                if (super(),
                null != A && "object" == typeof A)
                    this.connection = A;
                else {
                    o.default("JsonRpcProvider(url?: string)")("use `JsonRpcProvider(connectionInfo: ConnectionInfo)` instead"),
                    this.connection = {
                        url: A
                    }
                }
            }
            async status() {
                return this.sendJsonRpc("status", [])
            }
            async sendTransaction(A) {
                const t = A.encode();
                return this.sendJsonRpc("broadcast_tx_commit", [r.from(t).toString("base64")])
            }
            async sendTransactionAsync(A) {
                const t = A.encode();
                return this.sendJsonRpc("broadcast_tx_async", [r.from(t).toString("base64")])
            }
            async txStatus(A, t) {
                return "string" === typeof A ? this.txStatusString(A, t) : this.txStatusUint8Array(A, t)
            }
            async txStatusUint8Array(A, t) {
                return this.sendJsonRpc("tx", [g.baseEncode(A), t])
            }
            async txStatusString(A, t) {
                return this.sendJsonRpc("tx", [A, t])
            }
            async txStatusReceipts(A, t) {
                return this.sendJsonRpc("EXPERIMENTAL_tx_status", [g.baseEncode(A), t])
            }
            async query(...A) {
                let t;
                if (1 === A.length)
                    t = await this.sendJsonRpc("query", A[0]);
                else {
                    const [e,r] = A;
                    t = await this.sendJsonRpc("query", [e, r])
                }
                if (t && t.error)
                    throw new c.TypedError(`Querying ${A} failed: ${t.error}.\n${JSON.stringify(t, null, 2)}`,h.getErrorTypeFromErrorMessage(t.error));
                return t
            }
            async block(A) {
                const {finality: t} = A;
                let {blockId: e} = A;
                if ("object" !== typeof A) {
                    o.default("JsonRpcProvider.block(blockId)")("use `block({ blockId })` or `block({ finality })` instead"),
                    e = A
                }
                return this.sendJsonRpc("block", {
                    block_id: e,
                    finality: t
                })
            }
            async blockChanges(A) {
                const {finality: t} = A
                  , {blockId: e} = A;
                return this.sendJsonRpc("EXPERIMENTAL_changes_in_block", {
                    block_id: e,
                    finality: t
                })
            }
            async chunk(A) {
                return this.sendJsonRpc("chunk", [A])
            }
            async validators(A) {
                return this.sendJsonRpc("validators", [A])
            }
            async experimental_genesisConfig() {
                return o.default("JsonRpcProvider.experimental_protocolConfig()")("use `experimental_protocolConfig({ sync_checkpoint: 'genesis' })` to fetch the up-to-date or genesis protocol config explicitly"),
                await this.sendJsonRpc("EXPERIMENTAL_protocol_config", {
                    sync_checkpoint: "genesis"
                })
            }
            async experimental_protocolConfig(A) {
                return await this.sendJsonRpc("EXPERIMENTAL_protocol_config", A)
            }
            async experimental_lightClientProof(A) {
                return o.default("JsonRpcProvider.experimental_lightClientProof(request)")("use `lightClientProof` instead"),
                await this.lightClientProof(A)
            }
            async lightClientProof(A) {
                return await this.sendJsonRpc("EXPERIMENTAL_light_client_proof", A)
            }
            async accessKeyChanges(A, t) {
                const {finality: e} = t
                  , {blockId: r} = t;
                return this.sendJsonRpc("EXPERIMENTAL_changes", {
                    changes_type: "all_access_key_changes",
                    account_ids: A,
                    block_id: r,
                    finality: e
                })
            }
            async singleAccessKeyChanges(A, t) {
                const {finality: e} = t
                  , {blockId: r} = t;
                return this.sendJsonRpc("EXPERIMENTAL_changes", {
                    changes_type: "single_access_key_changes",
                    keys: A,
                    block_id: r,
                    finality: e
                })
            }
            async accountChanges(A, t) {
                const {finality: e} = t
                  , {blockId: r} = t;
                return this.sendJsonRpc("EXPERIMENTAL_changes", {
                    changes_type: "account_changes",
                    account_ids: A,
                    block_id: r,
                    finality: e
                })
            }
            async contractStateChanges(A, t, e="") {
                const {finality: r} = t
                  , {blockId: n} = t;
                return this.sendJsonRpc("EXPERIMENTAL_changes", {
                    changes_type: "data_changes",
                    account_ids: A,
                    key_prefix_base64: e,
                    block_id: n,
                    finality: r
                })
            }
            async contractCodeChanges(A, t) {
                const {finality: e} = t
                  , {blockId: r} = t;
                return this.sendJsonRpc("EXPERIMENTAL_changes", {
                    changes_type: "contract_code_changes",
                    account_ids: A,
                    block_id: r,
                    finality: e
                })
            }
            async gasPrice(A) {
                return await this.sendJsonRpc("gas_price", [A])
            }
            async sendJsonRpc(A, t) {
                const e = await u.default(500, 12, 1.5, (async()=>{
                    try {
                        const e = {
                            method: A,
                            params: t,
                            id: I++,
                            jsonrpc: "2.0"
                        }
                          , r = await a.fetchJson(this.connection, JSON.stringify(e));
                        if (r.error) {
                            if ("object" === typeof r.error.data) {
                                if ("string" === typeof r.error.data.error_message && "string" === typeof r.error.data.error_type)
                                    throw new c.TypedError(r.error.data.error_message,r.error.data.error_type);
                                throw h.parseRpcError(r.error.data)
                            }
                            {
                                const A = `[${r.error.code}] ${r.error.message}: ${r.error.data}`;
                                if ("Timeout" === r.error.data || A.includes("Timeout error") || A.includes("query has timed out"))
                                    throw new c.TypedError(A,"TimeoutError");
                                throw new c.TypedError(A,h.getErrorTypeFromErrorMessage(r.error.data))
                            }
                        }
                        return r
                    } catch (e) {
                        if ("TimeoutError" === e.type)
                            return n.env.NEAR_NO_LOGS || console.warn(`Retrying request to ${A} as it has timed out`, t),
                            null;
                        throw e
                    }
                }
                ))
                  , {result: r} = e;
                if ("undefined" === typeof r)
                    throw new c.TypedError(`Exceeded 12 attempts for request to ${A}.`,"RetriesExceeded");
                return r
            }
        }
        t.JsonRpcProvider = l
    },
    99844: function(A, t, e) {
        "use strict";
        var r = e(60197).Buffer;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getTransactionLastResult = t.Provider = t.IdType = t.FinalExecutionStatusBasic = t.ExecutionStatusBasic = void 0,
        function(A) {
            A.Unknown = "Unknown",
            A.Pending = "Pending",
            A.Failure = "Failure"
        }(t.ExecutionStatusBasic || (t.ExecutionStatusBasic = {})),
        function(A) {
            A.NotStarted = "NotStarted",
            A.Started = "Started",
            A.Failure = "Failure"
        }(t.FinalExecutionStatusBasic || (t.FinalExecutionStatusBasic = {})),
        function(A) {
            A.Transaction = "transaction",
            A.Receipt = "receipt"
        }(t.IdType || (t.IdType = {}));
        t.Provider = class {
        }
        ,
        t.getTransactionLastResult = function(A) {
            if ("object" === typeof A.status && "string" === typeof A.status.SuccessValue) {
                const e = r.from(A.status.SuccessValue, "base64").toString();
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return e
                }
            }
            return null
        }
    },
    89540: function(A, t, e) {
        "use strict";
        var r = this && this.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.InMemorySigner = t.Signer = void 0;
        const n = r(e(42623))
          , i = e(99128)
          , o = e(48500);
        class s {
        }
        t.Signer = s;
        class a extends s {
            constructor(A) {
                super(),
                this.keyStore = A
            }
            static async fromKeyPair(A, t, e) {
                const r = new o.InMemoryKeyStore;
                return await r.setKey(A, t, e),
                new a(r)
            }
            async createKey(A, t) {
                const e = i.KeyPair.fromRandom("ed25519");
                return await this.keyStore.setKey(t, A, e),
                e.getPublicKey()
            }
            async getPublicKey(A, t) {
                const e = await this.keyStore.getKey(t, A);
                return null === e ? null : e.getPublicKey()
            }
            async signMessage(A, t, e) {
                const r = new Uint8Array(n.default.sha256.array(A));
                if (!t)
                    throw new Error("InMemorySigner requires provided account id");
                const i = await this.keyStore.getKey(e, t);
                if (null === i)
                    throw new Error(`Key for ${t} not found in ${e}`);
                return i.sign(r)
            }
            toString() {
                return `InMemorySigner(${this.keyStore})`
            }
        }
        t.InMemorySigner = a
    },
    31039: function(A, t, e) {
        "use strict";
        var r = e(60197).Buffer
          , n = this && this.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.signTransaction = t.createTransaction = t.SCHEMA = t.Action = t.SignedTransaction = t.Transaction = t.Signature = t.deleteAccount = t.deleteKey = t.addKey = t.stake = t.transfer = t.functionCall = t.stringifyJsonOrBytes = t.deployContract = t.createAccount = t.DeleteAccount = t.DeleteKey = t.AddKey = t.Stake = t.Transfer = t.FunctionCall = t.DeployContract = t.CreateAccount = t.IAction = t.functionCallAccessKey = t.fullAccessKey = t.AccessKey = t.AccessKeyPermission = t.FullAccessPermission = t.FunctionCallPermission = void 0;
        const i = n(e(42623))
          , o = e(97927)
          , s = e(67758)
          , a = e(99128);
        class c extends o.Assignable {
        }
        t.FunctionCallPermission = c;
        class g extends o.Assignable {
        }
        t.FullAccessPermission = g;
        class u extends o.Enum {
        }
        t.AccessKeyPermission = u;
        class h extends o.Assignable {
        }
        t.AccessKey = h,
        t.fullAccessKey = function() {
            return new h({
                nonce: 0,
                permission: new u({
                    fullAccess: new g({})
                })
            })
        }
        ,
        t.functionCallAccessKey = function(A, t, e) {
            return new h({
                nonce: 0,
                permission: new u({
                    functionCall: new c({
                        receiverId: A,
                        allowance: e,
                        methodNames: t
                    })
                })
            })
        }
        ;
        class I extends o.Assignable {
        }
        t.IAction = I;
        class l extends I {
        }
        t.CreateAccount = l;
        class E extends I {
        }
        t.DeployContract = E;
        class B extends I {
        }
        t.FunctionCall = B;
        class C extends I {
        }
        t.Transfer = C;
        class Q extends I {
        }
        t.Stake = Q;
        class d extends I {
        }
        t.AddKey = d;
        class f extends I {
        }
        t.DeleteKey = f;
        class p extends I {
        }
        function y(A) {
            return void 0 !== A.byteLength && A.byteLength === A.length ? A : r.from(JSON.stringify(A))
        }
        t.DeleteAccount = p,
        t.createAccount = function() {
            return new v({
                createAccount: new l({})
            })
        }
        ,
        t.deployContract = function(A) {
            return new v({
                deployContract: new E({
                    code: A
                })
            })
        }
        ,
        t.stringifyJsonOrBytes = y,
        t.functionCall = function(A, t, e, r, n=y) {
            return new v({
                functionCall: new B({
                    methodName: A,
                    args: n(t),
                    gas: e,
                    deposit: r
                })
            })
        }
        ,
        t.transfer = function(A) {
            return new v({
                transfer: new C({
                    deposit: A
                })
            })
        }
        ,
        t.stake = function(A, t) {
            return new v({
                stake: new Q({
                    stake: A,
                    publicKey: t
                })
            })
        }
        ,
        t.addKey = function(A, t) {
            return new v({
                addKey: new d({
                    publicKey: A,
                    accessKey: t
                })
            })
        }
        ,
        t.deleteKey = function(A) {
            return new v({
                deleteKey: new f({
                    publicKey: A
                })
            })
        }
        ,
        t.deleteAccount = function(A) {
            return new v({
                deleteAccount: new p({
                    beneficiaryId: A
                })
            })
        }
        ;
        class w extends o.Assignable {
        }
        t.Signature = w;
        class m extends o.Assignable {
            encode() {
                return s.serialize(t.SCHEMA, this)
            }
            static decode(A) {
                return s.deserialize(t.SCHEMA, m, A)
            }
        }
        t.Transaction = m;
        class M extends o.Assignable {
            encode() {
                return s.serialize(t.SCHEMA, this)
            }
            static decode(A) {
                return s.deserialize(t.SCHEMA, M, A)
            }
        }
        t.SignedTransaction = M;
        class v extends o.Enum {
        }
        function b(A, t, e, r, n, i) {
            return new m({
                signerId: A,
                publicKey: t,
                nonce: r,
                receiverId: e,
                actions: n,
                blockHash: i
            })
        }
        async function D(A, e, r, n) {
            const o = s.serialize(t.SCHEMA, A)
              , a = new Uint8Array(i.default.sha256.array(o))
              , c = await e.signMessage(o, r, n);
            return [a, new M({
                transaction: A,
                signature: new w({
                    keyType: A.publicKey.keyType,
                    data: c.signature
                })
            })]
        }
        t.Action = v,
        t.SCHEMA = new Map([[w, {
            kind: "struct",
            fields: [["keyType", "u8"], ["data", [64]]]
        }], [M, {
            kind: "struct",
            fields: [["transaction", m], ["signature", w]]
        }], [m, {
            kind: "struct",
            fields: [["signerId", "string"], ["publicKey", a.PublicKey], ["nonce", "u64"], ["receiverId", "string"], ["blockHash", [32]], ["actions", [v]]]
        }], [a.PublicKey, {
            kind: "struct",
            fields: [["keyType", "u8"], ["data", [32]]]
        }], [h, {
            kind: "struct",
            fields: [["nonce", "u64"], ["permission", u]]
        }], [u, {
            kind: "enum",
            field: "enum",
            values: [["functionCall", c], ["fullAccess", g]]
        }], [c, {
            kind: "struct",
            fields: [["allowance", {
                kind: "option",
                type: "u128"
            }], ["receiverId", "string"], ["methodNames", ["string"]]]
        }], [g, {
            kind: "struct",
            fields: []
        }], [v, {
            kind: "enum",
            field: "enum",
            values: [["createAccount", l], ["deployContract", E], ["functionCall", B], ["transfer", C], ["stake", Q], ["addKey", d], ["deleteKey", f], ["deleteAccount", p]]
        }], [l, {
            kind: "struct",
            fields: []
        }], [E, {
            kind: "struct",
            fields: [["code", ["u8"]]]
        }], [B, {
            kind: "struct",
            fields: [["methodName", "string"], ["args", ["u8"]], ["gas", "u64"], ["deposit", "u128"]]
        }], [C, {
            kind: "struct",
            fields: [["deposit", "u128"]]
        }], [Q, {
            kind: "struct",
            fields: [["stake", "u128"], ["publicKey", a.PublicKey]]
        }], [d, {
            kind: "struct",
            fields: [["publicKey", a.PublicKey], ["accessKey", h]]
        }], [f, {
            kind: "struct",
            fields: [["publicKey", a.PublicKey]]
        }], [p, {
            kind: "struct",
            fields: [["beneficiaryId", "string"]]
        }]]),
        t.createTransaction = b,
        t.signTransaction = async function(...A) {
            if (A[0].constructor === m) {
                const [t,e,r,n] = A;
                return D(t, e, r, n)
            }
            {
                const [t,e,r,n,i,o,s] = A;
                return D(b(o, await i.getPublicKey(o, s), t, e, r, n), i, o, s)
            }
        }
    },
    97927: function(A, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Assignable = t.Enum = void 0;
        t.Enum = class {
            constructor(A) {
                if (1 !== Object.keys(A).length)
                    throw new Error("Enum can only take single value");
                Object.keys(A).map((t=>{
                    this[t] = A[t],
                    this.enum = t
                }
                ))
            }
        }
        ;
        t.Assignable = class {
            constructor(A) {
                Object.keys(A).map((t=>{
                    this[t] = A[t]
                }
                ))
            }
        }
    },
    74184: function(A, t, e) {
        "use strict";
        var r = e(89885);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.logWarning = t.ErrorContext = t.TypedError = t.ArgumentTypeError = t.PositionalArgsError = void 0;
        class n extends Error {
            constructor() {
                super("Contract method calls expect named arguments wrapped in object, e.g. { argName1: argValue1, argName2: argValue2 }")
            }
        }
        t.PositionalArgsError = n;
        class i extends Error {
            constructor(A, t, e) {
                super(`Expected ${t} for '${A}' argument, but got '${JSON.stringify(e)}'`)
            }
        }
        t.ArgumentTypeError = i;
        class o extends Error {
            constructor(A, t, e) {
                super(A),
                this.type = t || "UntypedError",
                this.context = e
            }
        }
        t.TypedError = o;
        t.ErrorContext = class {
            constructor(A) {
                this.transactionHash = A
            }
        }
        ,
        t.logWarning = function(...A) {
            r.env.NEAR_NO_LOGS || console.warn(...A)
        }
    },
    77614: function(A, t) {
        "use strict";
        function e(A) {
            return new Promise((t=>setTimeout(t, A)))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = async function(A, t, r, n) {
            let i = A;
            for (let o = 0; o < t; o++) {
                const A = await n();
                if (A)
                    return A;
                await e(i),
                i *= r
            }
            return null
        }
    },
    85781: function(A, t, e) {
        "use strict";
        var r = this && this.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.parseNearAmount = t.formatNearAmount = t.NEAR_NOMINATION = t.NEAR_NOMINATION_EXP = void 0;
        const n = r(e(13072));
        t.NEAR_NOMINATION_EXP = 24,
        t.NEAR_NOMINATION = new n.default("10",10).pow(new n.default(t.NEAR_NOMINATION_EXP,10));
        const i = []
          , o = new n.default(10);
        for (let s = 0, a = new n.default(5); s < t.NEAR_NOMINATION_EXP; s++,
        a = a.mul(o))
            i[s] = a;
        t.formatNearAmount = function(A, e=t.NEAR_NOMINATION_EXP) {
            const r = new n.default(A,10);
            if (e !== t.NEAR_NOMINATION_EXP) {
                const A = t.NEAR_NOMINATION_EXP - e - 1;
                A > 0 && r.iadd(i[A])
            }
            const o = (A = r.toString()).substring(0, A.length - t.NEAR_NOMINATION_EXP) || "0"
              , s = A.substring(A.length - t.NEAR_NOMINATION_EXP).padStart(t.NEAR_NOMINATION_EXP, "0").substring(0, e);
            return `${function(A) {
                const t = /(-?\d+)(\d{3})/;
                for (; t.test(A); )
                    A = A.replace(t, "$1,$2");
                return A
            }(o)}.${s}`.replace(/\.?0*$/, "")
        }
        ,
        t.parseNearAmount = function(A) {
            if (!A)
                return null;
            const e = (A = A.replace(/,/g, "").trim()).split(".")
              , r = e[0]
              , n = e[1] || "";
            if (e.length > 2 || n.length > t.NEAR_NOMINATION_EXP)
                throw new Error(`Cannot parse '${A}' as NEAR amount`);
            return function(A) {
                if ("" === (A = A.replace(/^0+/, "")))
                    return "0";
                return A
            }(r + n.padEnd(t.NEAR_NOMINATION_EXP, "0"))
        }
    },
    17752: function(A, t, e) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(A, t, e, r) {
            void 0 === r && (r = e),
            Object.defineProperty(A, r, {
                enumerable: !0,
                get: function() {
                    return t[e]
                }
            })
        }
        : function(A, t, e, r) {
            void 0 === r && (r = e),
            A[r] = t[e]
        }
        )
          , n = this && this.__setModuleDefault || (Object.create ? function(A, t) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(A, t) {
            A.default = t
        }
        )
          , i = this && this.__importStar || function(A) {
            if (A && A.__esModule)
                return A;
            var t = {};
            if (null != A)
                for (var e in A)
                    "default" !== e && Object.hasOwnProperty.call(A, e) && r(t, A, e);
            return n(t, A),
            t
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.logWarning = t.rpc_errors = t.KeyPairEd25519 = t.KeyPair = t.PublicKey = t.format = t.enums = t.web = t.serialize = t.key_pair = void 0;
        const o = i(e(99128));
        t.key_pair = o;
        const s = i(e(53132));
        t.serialize = s;
        const a = i(e(81313));
        t.web = a;
        const c = i(e(97927));
        t.enums = c;
        const g = i(e(85781));
        t.format = g;
        const u = i(e(83443));
        t.rpc_errors = u;
        const h = e(99128);
        Object.defineProperty(t, "PublicKey", {
            enumerable: !0,
            get: function() {
                return h.PublicKey
            }
        }),
        Object.defineProperty(t, "KeyPair", {
            enumerable: !0,
            get: function() {
                return h.KeyPair
            }
        }),
        Object.defineProperty(t, "KeyPairEd25519", {
            enumerable: !0,
            get: function() {
                return h.KeyPairEd25519
            }
        });
        const I = e(74184);
        Object.defineProperty(t, "logWarning", {
            enumerable: !0,
            get: function() {
                return I.logWarning
            }
        })
    },
    99128: function(A, t, e) {
        "use strict";
        var r = this && this.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.KeyPairEd25519 = t.KeyPair = t.PublicKey = t.KeyType = void 0;
        const n = r(e(76771))
          , i = e(53132)
          , o = e(97927);
        var s;
        function a(A) {
            if ("ed25519" === A.toLowerCase())
                return s.ED25519;
            throw new Error(`Unknown key type ${A}`)
        }
        !function(A) {
            A[A.ED25519 = 0] = "ED25519"
        }(s = t.KeyType || (t.KeyType = {}));
        class c extends o.Assignable {
            static from(A) {
                return "string" === typeof A ? c.fromString(A) : A
            }
            static fromString(A) {
                const t = A.split(":");
                if (1 === t.length)
                    return new c({
                        keyType: s.ED25519,
                        data: i.base_decode(t[0])
                    });
                if (2 === t.length)
                    return new c({
                        keyType: a(t[0]),
                        data: i.base_decode(t[1])
                    });
                throw new Error("Invalid encoded key format, must be <curve>:<encoded key>")
            }
            toString() {
                return `${function(A) {
                    if (A === s.ED25519)
                        return "ed25519";
                    throw new Error(`Unknown key type ${A}`)
                }(this.keyType)}:${i.base_encode(this.data)}`
            }
            verify(A, t) {
                if (this.keyType === s.ED25519)
                    return n.default.sign.detached.verify(A, t, this.data);
                throw new Error(`Unknown key type ${this.keyType}`)
            }
        }
        t.PublicKey = c;
        class g {
            static fromRandom(A) {
                if ("ED25519" === A.toUpperCase())
                    return u.fromRandom();
                throw new Error(`Unknown curve ${A}`)
            }
            static fromString(A) {
                const t = A.split(":");
                if (1 === t.length)
                    return new u(t[0]);
                if (2 === t.length) {
                    if ("ED25519" === t[0].toUpperCase())
                        return new u(t[1]);
                    throw new Error(`Unknown curve: ${t[0]}`)
                }
                throw new Error("Invalid encoded key format, must be <curve>:<encoded key>")
            }
        }
        t.KeyPair = g;
        class u extends g {
            constructor(A) {
                super();
                const t = n.default.sign.keyPair.fromSecretKey(i.base_decode(A));
                this.publicKey = new c({
                    keyType: s.ED25519,
                    data: t.publicKey
                }),
                this.secretKey = A
            }
            static fromRandom() {
                const A = n.default.sign.keyPair();
                return new u(i.base_encode(A.secretKey))
            }
            sign(A) {
                return {
                    signature: n.default.sign.detached(A, i.base_decode(this.secretKey)),
                    publicKey: this.publicKey
                }
            }
            verify(A, t) {
                return this.publicKey.verify(A, t)
            }
            toString() {
                return `ed25519:${this.secretKey}`
            }
            getPublicKey() {
                return this.publicKey
            }
        }
        t.KeyPairEd25519 = u
    },
    83443: function(A, t, e) {
        "use strict";
        var r = this && this.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getErrorTypeFromErrorMessage = t.formatError = t.parseResultError = t.parseRpcError = t.ServerError = void 0;
        const n = r(e(61459))
          , i = r(e(56527))
          , o = r(e(87930))
          , s = e(98242)
          , a = e(74184)
          , c = {
            formatNear: ()=>(A,t)=>s.utils.format.formatNearAmount(t(A))
        };
        class g extends a.TypedError {
        }
        t.ServerError = g;
        class u extends g {
        }
        function h(A) {
            const t = {}
              , e = l(A, i.default.schema, t, "")
              , r = new g(I(e, t),e);
            return Object.assign(r, t),
            r
        }
        function I(A, t) {
            return "string" === typeof o.default[A] ? n.default.render(o.default[A], {
                ...t,
                ...c
            }) : JSON.stringify(t)
        }
        function l(A, t, e, r) {
            let n, i, o;
            for (const a in t) {
                if (s = A[a],
                "[object String]" === Object.prototype.toString.call(s))
                    return A[a];
                if (E(A[a]))
                    n = A[a],
                    i = t[a],
                    o = a;
                else {
                    if (!E(A.kind) || !E(A.kind[a]))
                        continue;
                    n = A.kind[a],
                    i = t[a],
                    o = a
                }
            }
            var s;
            if (n && i) {
                for (const A of Object.keys(i.props))
                    e[A] = n[A];
                return l(n, t, e, o)
            }
            return e.kind = A,
            r
        }
        function E(A) {
            return "[object Object]" === Object.prototype.toString.call(A)
        }
        t.parseRpcError = h,
        t.parseResultError = function(A) {
            const t = h(A.status.Failure)
              , e = new u;
            return Object.assign(e, t),
            e.type = t.type,
            e.message = t.message,
            e.transaction_outcome = A.transaction_outcome,
            e
        }
        ,
        t.formatError = I,
        t.getErrorTypeFromErrorMessage = function(A) {
            switch (!0) {
            case /^account .*? does not exist while viewing$/.test(A):
            case /^Account .*? doesn't exist$/.test(A):
                return "AccountDoesNotExist";
            case /^access key .*? does not exist while viewing$/.test(A):
                return "AccessKeyDoesNotExist";
            case /wasm execution failed with error: FunctionCallError\(CompilationError\(CodeDoesNotExist/.test(A):
                return "CodeDoesNotExist";
            case /Transaction nonce \d+ must be larger than nonce of the used access key \d+/.test(A):
                return "InvalidNonce";
            default:
                return "UntypedError"
            }
        }
    },
    53132: function(A, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = e(67758);
        Object.defineProperty(t, "base_encode", {
            enumerable: !0,
            get: function() {
                return r.baseEncode
            }
        }),
        Object.defineProperty(t, "base_decode", {
            enumerable: !0,
            get: function() {
                return r.baseDecode
            }
        }),
        Object.defineProperty(t, "serialize", {
            enumerable: !0,
            get: function() {
                return r.serialize
            }
        }),
        Object.defineProperty(t, "deserialize", {
            enumerable: !0,
            get: function() {
                return r.deserialize
            }
        }),
        Object.defineProperty(t, "BorshError", {
            enumerable: !0,
            get: function() {
                return r.BorshError
            }
        }),
        Object.defineProperty(t, "BinaryWriter", {
            enumerable: !0,
            get: function() {
                return r.BinaryWriter
            }
        }),
        Object.defineProperty(t, "BinaryReader", {
            enumerable: !0,
            get: function() {
                return r.BinaryReader
            }
        })
    },
    81313: function(A, t, e) {
        "use strict";
        var r = this && this.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.fetchJson = void 0;
        const n = r(e(9232))
          , i = r(e(77614))
          , o = e(75720)
          , s = e(74184);
        t.fetchJson = async function(A, t) {
            let e = {
                url: null
            };
            "string" === typeof A ? e.url = A : e = A;
            const r = await i.default(1e3, 10, 1.5, (async()=>{
                try {
                    const A = await fetch(e.url, {
                        method: t ? "POST" : "GET",
                        body: t || void 0,
                        headers: {
                            ...e.headers,
                            "Content-Type": "application/json"
                        }
                    });
                    if (!A.ok) {
                        if (503 === A.status)
                            return s.logWarning(`Retrying HTTP request for ${e.url} as it's not available now`),
                            null;
                        throw n.default(A.status, await A.text())
                    }
                    return A
                } catch (A) {
                    if (A.toString().includes("FetchError") || A.toString().includes("Failed to fetch"))
                        return s.logWarning(`Retrying HTTP request for ${e.url} because of error: ${A}`),
                        null;
                    throw A
                }
            }
            ));
            if (!r)
                throw new o.TypedError(`Exceeded 10 attempts for ${e.url}.`,"RetriesExceeded");
            return await r.json()
        }
    },
    40606: function(A, t, e) {
        "use strict";
        var r = this && this.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.diffEpochValidators = t.findSeatPrice = void 0;
        const n = r(e(13072))
          , i = r(e(80289));
        t.findSeatPrice = function(A, t, e, r) {
            if (r && r < 49)
                return function(A, t) {
                    const e = A.map((A=>new n.default(A.stake,10))).sort(((A,t)=>A.cmp(t)))
                      , r = new n.default(t)
                      , i = e.reduce(((A,t)=>A.add(t)));
                    if (i.lt(r))
                        throw new Error("Stakes are below seats");
                    let o = new n.default(1)
                      , s = i.add(new n.default(1));
                    for (; !o.eq(s.sub(new n.default(1))); ) {
                        const A = o.add(s).div(new n.default(2));
                        let t = !1
                          , i = new n.default(0);
                        for (let n = 0; n < e.length; ++n)
                            if (i = i.add(e[n].div(A)),
                            i.gte(r)) {
                                o = A,
                                t = !0;
                                break
                            }
                        t || (s = A)
                    }
                    return o
                }(A, t);
            if (!e) {
                i.default("findSeatPrice(validators, maxNumberOfSeats)")("`use `findSeatPrice(validators, maxNumberOfSeats, minimumStakeRatio)` instead"),
                e = [1, 6250]
            }
            return function(A, t, e) {
                if (2 != e.length)
                    throw Error("minimumStakeRatio should have 2 elements");
                const r = A.map((A=>new n.default(A.stake,10))).sort(((A,t)=>A.cmp(t)))
                  , i = r.reduce(((A,t)=>A.add(t)));
                return A.length < t ? i.mul(new n.default(e[0])).div(new n.default(e[1])) : r[0].add(new n.default(1))
            }(A, t, e)
        }
        ,
        t.diffEpochValidators = function(A, t) {
            const e = new Map;
            A.forEach((A=>e.set(A.account_id, A)));
            const r = new Set(t.map((A=>A.account_id)));
            return {
                newValidators: t.filter((A=>!e.has(A.account_id))),
                removedValidators: A.filter((A=>!r.has(A.account_id))),
                changedValidators: t.filter((A=>e.has(A.account_id) && e.get(A.account_id).stake != A.stake)).map((A=>({
                    current: e.get(A.account_id),
                    next: A
                })))
            }
        }
    },
    39795: function(A, t, e) {
        "use strict";
        var r = e(60197).Buffer
          , n = this && this.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ConnectedWalletAccount = t.WalletAccount = t.WalletConnection = void 0;
        const i = n(e(80289))
          , o = e(56046)
          , s = e(31039)
          , a = e(17752)
          , c = e(67758)
          , g = e(67758)
          , u = "pending_key";
        class h {
            constructor(A, t) {
                this._near = A;
                const e = t + "_wallet_auth_key"
                  , r = JSON.parse(window.localStorage.getItem(e));
                this._networkId = A.config.networkId,
                this._walletBaseUrl = A.config.walletUrl,
                t = t || A.config.contractName || "default",
                this._keyStore = A.connection.signer.keyStore,
                this._authData = r || {
                    allKeys: []
                },
                this._authDataKey = e,
                this.isSignedIn() || this._completeSignInWithAccessKey()
            }
            isSignedIn() {
                return !!this._authData.accountId
            }
            getAccountId() {
                return this._authData.accountId || ""
            }
            async requestSignIn(A={}, t, e, r) {
                let n;
                if ("string" === typeof A) {
                    i.default("requestSignIn(contractId, title)")("`title` ignored; use `requestSignIn({ contractId, methodNames, successUrl, failureUrl })` instead"),
                    n = {
                        contractId: A,
                        successUrl: e,
                        failureUrl: r
                    }
                } else
                    n = A;
                const o = new URL(window.location.href)
                  , s = new URL(this._walletBaseUrl + "/login/");
                if (s.searchParams.set("success_url", n.successUrl || o.href),
                s.searchParams.set("failure_url", n.failureUrl || o.href),
                n.contractId) {
                    const A = await this._near.account(n.contractId);
                    await A.state(),
                    s.searchParams.set("contract_id", n.contractId);
                    const t = a.KeyPair.fromRandom("ed25519");
                    s.searchParams.set("public_key", t.getPublicKey().toString()),
                    await this._keyStore.setKey(this._networkId, u + t.getPublicKey(), t)
                }
                n.methodNames && n.methodNames.forEach((A=>{
                    s.searchParams.append("methodNames", A)
                }
                )),
                window.location.assign(s.toString())
            }
            async requestSignTransactions(...A) {
                if (Array.isArray(A[0])) {
                    return i.default("WalletConnection.requestSignTransactions(transactions, callbackUrl, meta)")("use `WalletConnection.requestSignTransactions(RequestSignTransactionsOptions)` instead"),
                    this._requestSignTransactions({
                        transactions: A[0],
                        callbackUrl: A[1],
                        meta: A[2]
                    })
                }
                return this._requestSignTransactions(A[0])
            }
            async _requestSignTransactions({transactions: A, meta: t, callbackUrl: e}) {
                const n = new URL(window.location.href)
                  , i = new URL("sign",this._walletBaseUrl);
                i.searchParams.set("transactions", A.map((A=>g.serialize(s.SCHEMA, A))).map((A=>r.from(A).toString("base64"))).join(",")),
                i.searchParams.set("callbackUrl", e || n.href),
                t && i.searchParams.set("meta", t),
                window.location.assign(i.toString())
            }
            async _completeSignInWithAccessKey() {
                const A = new URL(window.location.href)
                  , t = A.searchParams.get("public_key") || ""
                  , e = (A.searchParams.get("all_keys") || "").split(",")
                  , r = A.searchParams.get("account_id") || "";
                r && (this._authData = {
                    accountId: r,
                    allKeys: e
                },
                window.localStorage.setItem(this._authDataKey, JSON.stringify(this._authData)),
                t && await this._moveKeyFromTempToPermanent(r, t)),
                A.searchParams.delete("public_key"),
                A.searchParams.delete("all_keys"),
                A.searchParams.delete("account_id"),
                A.searchParams.delete("meta"),
                A.searchParams.delete("transactionHashes"),
                window.history.replaceState({}, document.title, A.toString())
            }
            async _moveKeyFromTempToPermanent(A, t) {
                const e = await this._keyStore.getKey(this._networkId, u + t);
                await this._keyStore.setKey(this._networkId, A, e),
                await this._keyStore.removeKey(this._networkId, u + t)
            }
            signOut() {
                this._authData = {},
                window.localStorage.removeItem(this._authDataKey)
            }
            account() {
                return this._connectedAccount || (this._connectedAccount = new I(this,this._near.connection,this._authData.accountId)),
                this._connectedAccount
            }
        }
        t.WalletConnection = h,
        t.WalletAccount = h;
        class I extends o.Account {
            constructor(A, t, e) {
                super(t, e),
                this.walletConnection = A
            }
            signAndSendTransaction(...A) {
                return "string" === typeof A[0] ? this._signAndSendTransaction({
                    receiverId: A[0],
                    actions: A[1]
                }) : this._signAndSendTransaction(A[0])
            }
            async _signAndSendTransaction({receiverId: A, actions: t, walletMeta: e, walletCallbackUrl: r=window.location.href}) {
                const n = await this.connection.signer.getPublicKey(this.accountId, this.connection.networkId);
                let i = await this.accessKeyForTransaction(A, t, n);
                if (!i)
                    throw new Error(`Cannot find matching key for transaction sent to ${A}`);
                if (n && n.toString() === i.public_key)
                    try {
                        return await super.signAndSendTransaction({
                            receiverId: A,
                            actions: t
                        })
                    } catch (l) {
                        if ("NotEnoughAllowance" !== l.type)
                            throw l;
                        i = await this.accessKeyForTransaction(A, t)
                    }
                const o = await this.connection.provider.block({
                    finality: "final"
                })
                  , g = c.baseDecode(o.header.hash)
                  , u = a.PublicKey.from(i.public_key)
                  , h = i.access_key.nonce + 1
                  , I = s.createTransaction(this.accountId, u, A, h, t, g);
                return await this.walletConnection.requestSignTransactions({
                    transactions: [I],
                    meta: e,
                    callbackUrl: r
                }),
                new Promise(((A,t)=>{
                    setTimeout((()=>{
                        t(new Error("Failed to redirect to sign transaction"))
                    }
                    ), 1e3)
                }
                ))
            }
            async accessKeyMatchesTransaction(A, t, e) {
                const {access_key: {permission: r}} = A;
                if ("FullAccess" === r)
                    return !0;
                if (r.FunctionCall) {
                    const {receiver_id: A, method_names: n} = r.FunctionCall;
                    if (A === this.accountId && n.includes("add_request_and_confirm"))
                        return !0;
                    if (A === t) {
                        if (1 !== e.length)
                            return !1;
                        const [{functionCall: A}] = e;
                        return A && (!A.deposit || "0" === A.deposit.toString()) && (0 === n.length || n.includes(A.methodName))
                    }
                }
                return !1
            }
            async accessKeyForTransaction(A, t, e) {
                const r = await this.getAccessKeys();
                if (e) {
                    const n = r.find((A=>A.public_key.toString() === e.toString()));
                    if (n && await this.accessKeyMatchesTransaction(n, A, t))
                        return n
                }
                const n = this.walletConnection._authData.allKeys;
                for (const i of r)
                    if (-1 !== n.indexOf(i.public_key) && await this.accessKeyMatchesTransaction(i, A, t))
                        return i;
                return null
            }
        }
        t.ConnectedWalletAccount = I
    },
    46508: function(A, t, e) {
        e(60183),
        A.exports = e(1423)
    },
    26541: function(A) {
        var t = function() {
            var A = Object.create({
                Source: Object,
                config: {},
                buildArgs: []
            });
            function e(t) {
                var e = "config";
                if (t instanceof Function)
                    e = "Source";
                else if (t instanceof Array)
                    e = "buildArgs";
                else {
                    if (!(t instanceof Object))
                        throw new Error("Invalid configuration option.");
                    e = "config"
                }
                if (A.hasOwnProperty(e))
                    throw new Error("Duplicated configuration option: " + e + ".");
                A[e] = t
            }
            for (var r = 0, n = arguments.length; r < n; ++r)
                e(arguments[r]);
            var i = A.Source
              , o = A.config
              , s = A.buildArgs;
            return (i.extend || t.extend).call(i, o, s)
        };
        t.factory = function() {
            return function() {
                var A = this;
                A.build instanceof Function && A.build.apply(A, arguments),
                A.init instanceof Function && A.init.apply(A, arguments)
            }
        }
        ,
        t.extend = function(A, e) {
            var r, n = this;
            return A || (A = {}),
            A.prototype instanceof Object && A.prototype.constructor !== Object ? r = A.prototype.constructor : A.factory instanceof Function && (r = A.factory.call(n)),
            ((r = (n.clone || t.clone).call(n, r, e)).merge || t.merge).call(r, A),
            r
        }
        ,
        t.prototype.extend = function(A, e) {
            var r = (this.clone || t.prototype.clone).apply(this, e);
            return (r.merge || t.prototype.merge).call(r, A),
            r
        }
        ,
        t.clone = function(A, e) {
            var r = this;
            for (var n in A instanceof Function || (A = (r.factory || t.factory).call(r)),
            A.prototype = (r.prototype.clone || t.prototype.clone).apply(r.prototype, e || []),
            A.prototype.constructor = A,
            r)
                "prototype" !== n && (A[n] = r[n]);
            return A
        }
        ,
        t.prototype.clone = function() {
            var A = this
              , t = Object.create(A);
            return t.build instanceof Function && t.build.apply(t, arguments),
            t
        }
        ,
        t.merge = function(A) {
            var e = this;
            for (var r in A)
                "prototype" !== r && (e[r] = A[r]);
            return A.prototype instanceof Object && (e.prototype.merge || t.prototype.merge).call(e.prototype, A.prototype),
            e
        }
        ,
        t.prototype.merge = function(A) {
            for (var t in A)
                "constructor" !== t && (this[t] = A[t]);
            return this
        }
        ,
        t.absorb = function(A) {
            var e = this;
            for (var r in A)
                "prototype" === r || void 0 !== e[r] && e[r] !== Function.prototype[r] || (e[r] = A[r]);
            return A.prototype instanceof Object && (e.prototype.absorb || t.prototype.absorb).call(e.prototype, A.prototype),
            e
        }
        ,
        t.prototype.absorb = function(A) {
            var t = this;
            for (var e in A)
                "constructor" === e || void 0 !== t[e] && t[e] !== Object.prototype[e] || (t[e] = A[e]);
            return t
        }
        ,
        t.getAncestor = function() {
            var A = this;
            if (A !== A.prototype.constructor)
                return A.prototype.constructor
        }
        ,
        t.newInstance = function() {
            var A = this
              , t = Object.create(this.prototype);
            return A.apply(t, arguments),
            t
        }
        ,
        A.exports = t
    },
    29840: function(A) {
        A.exports = function() {
            throw new Error("Not implemented.")
        }
    },
    1423: function(A, t, e) {
        A.exports = {
            Class: e(26541),
            abstractMethod: e(29840)
        }
    },
    81651: function(A, t, e) {
        var r = e(60197)
          , n = r.Buffer;
        function i(A, t) {
            for (var e in A)
                t[e] = A[e]
        }
        function o(A, t, e) {
            return n(A, t, e)
        }
        n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? A.exports = r : (i(r, t),
        t.Buffer = o),
        o.prototype = Object.create(n.prototype),
        i(n, o),
        o.from = function(A, t, e) {
            if ("number" === typeof A)
                throw new TypeError("Argument must not be a number");
            return n(A, t, e)
        }
        ,
        o.alloc = function(A, t, e) {
            if ("number" !== typeof A)
                throw new TypeError("Argument must be a number");
            var r = n(A);
            return void 0 !== t ? "string" === typeof e ? r.fill(t, e) : r.fill(t) : r.fill(0),
            r
        }
        ,
        o.allocUnsafe = function(A) {
            if ("number" !== typeof A)
                throw new TypeError("Argument must be a number");
            return n(A)
        }
        ,
        o.allocUnsafeSlow = function(A) {
            if ("number" !== typeof A)
                throw new TypeError("Argument must be a number");
            return r.SlowBuffer(A)
        }
    },
    77565: function(A) {
        "use strict";
        A.exports = Object.setPrototypeOf || ({
            __proto__: []
        }instanceof Array ? function(A, t) {
            return A.__proto__ = t,
            A
        }
        : function(A, t) {
            for (var e in t)
                Object.prototype.hasOwnProperty.call(A, e) || (A[e] = t[e]);
            return A
        }
        )
    },
    95657: function(A, t, e) {
        "use strict";
        var r = e(50855);
        function n(A) {
            if ("number" === typeof A) {
                if (!n[A])
                    throw new Error("invalid status code: " + A);
                return A
            }
            if ("string" !== typeof A)
                throw new TypeError("code must be a number or string");
            var t = parseInt(A, 10);
            if (!isNaN(t)) {
                if (!n[t])
                    throw new Error("invalid status code: " + t);
                return t
            }
            if (!(t = n[A.toLowerCase()]))
                throw new Error('invalid status message: "' + A + '"');
            return t
        }
        A.exports = n,
        n.STATUS_CODES = r,
        n.codes = function(A, t) {
            var e = [];
            return Object.keys(t).forEach((function(r) {
                var n = t[r]
                  , i = Number(r);
                A[i] = n,
                A[n] = i,
                A[n.toLowerCase()] = i,
                e.push(i)
            }
            )),
            e
        }(n, r),
        n.redirect = {
            300: !0,
            301: !0,
            302: !0,
            303: !0,
            305: !0,
            307: !0,
            308: !0
        },
        n.empty = {
            204: !0,
            205: !0,
            304: !0
        },
        n.retry = {
            502: !0,
            503: !0,
            504: !0
        }
    },
    93127: function(A) {
        "use strict";
        A.exports = function(A) {
            return A.split(" ").map((function(A) {
                return A.slice(0, 1).toUpperCase() + A.slice(1)
            }
            )).join("").replace(/[^ _0-9a-z]/gi, "")
        }
    },
    76771: function(A, t, e) {
        !function(A) {
            "use strict";
            var t = function(A) {
                var t, e = new Float64Array(16);
                if (A)
                    for (t = 0; t < A.length; t++)
                        e[t] = A[t];
                return e
            }
              , r = function() {
                throw new Error("no PRNG")
            }
              , n = new Uint8Array(16)
              , i = new Uint8Array(32);
            i[0] = 9;
            var o = t()
              , s = t([1])
              , a = t([56129, 1])
              , c = t([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995])
              , g = t([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])
              , u = t([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553])
              , h = t([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214])
              , I = t([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
            function l(A, t, e, r) {
                A[t] = e >> 24 & 255,
                A[t + 1] = e >> 16 & 255,
                A[t + 2] = e >> 8 & 255,
                A[t + 3] = 255 & e,
                A[t + 4] = r >> 24 & 255,
                A[t + 5] = r >> 16 & 255,
                A[t + 6] = r >> 8 & 255,
                A[t + 7] = 255 & r
            }
            function E(A, t, e, r, n) {
                var i, o = 0;
                for (i = 0; i < n; i++)
                    o |= A[t + i] ^ e[r + i];
                return (1 & o - 1 >>> 8) - 1
            }
            function B(A, t, e, r) {
                return E(A, t, e, r, 16)
            }
            function C(A, t, e, r) {
                return E(A, t, e, r, 32)
            }
            function Q(A, t, e, r) {
                !function(A, t, e, r) {
                    for (var n, i = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, o = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, s = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, a = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, c = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, g = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, u = 255 & t[0] | (255 & t[1]) << 8 | (255 & t[2]) << 16 | (255 & t[3]) << 24, h = 255 & t[4] | (255 & t[5]) << 8 | (255 & t[6]) << 16 | (255 & t[7]) << 24, I = 255 & t[8] | (255 & t[9]) << 8 | (255 & t[10]) << 16 | (255 & t[11]) << 24, l = 255 & t[12] | (255 & t[13]) << 8 | (255 & t[14]) << 16 | (255 & t[15]) << 24, E = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, B = 255 & e[16] | (255 & e[17]) << 8 | (255 & e[18]) << 16 | (255 & e[19]) << 24, C = 255 & e[20] | (255 & e[21]) << 8 | (255 & e[22]) << 16 | (255 & e[23]) << 24, Q = 255 & e[24] | (255 & e[25]) << 8 | (255 & e[26]) << 16 | (255 & e[27]) << 24, d = 255 & e[28] | (255 & e[29]) << 8 | (255 & e[30]) << 16 | (255 & e[31]) << 24, f = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, p = i, y = o, w = s, m = a, M = c, v = g, b = u, D = h, S = I, N = l, k = E, _ = B, K = C, R = Q, F = d, U = f, G = 0; G < 20; G += 2)
                        p ^= (n = (K ^= (n = (S ^= (n = (M ^= (n = p + K | 0) << 7 | n >>> 25) + p | 0) << 9 | n >>> 23) + M | 0) << 13 | n >>> 19) + S | 0) << 18 | n >>> 14,
                        v ^= (n = (y ^= (n = (R ^= (n = (N ^= (n = v + y | 0) << 7 | n >>> 25) + v | 0) << 9 | n >>> 23) + N | 0) << 13 | n >>> 19) + R | 0) << 18 | n >>> 14,
                        k ^= (n = (b ^= (n = (w ^= (n = (F ^= (n = k + b | 0) << 7 | n >>> 25) + k | 0) << 9 | n >>> 23) + F | 0) << 13 | n >>> 19) + w | 0) << 18 | n >>> 14,
                        U ^= (n = (_ ^= (n = (D ^= (n = (m ^= (n = U + _ | 0) << 7 | n >>> 25) + U | 0) << 9 | n >>> 23) + m | 0) << 13 | n >>> 19) + D | 0) << 18 | n >>> 14,
                        p ^= (n = (m ^= (n = (w ^= (n = (y ^= (n = p + m | 0) << 7 | n >>> 25) + p | 0) << 9 | n >>> 23) + y | 0) << 13 | n >>> 19) + w | 0) << 18 | n >>> 14,
                        v ^= (n = (M ^= (n = (D ^= (n = (b ^= (n = v + M | 0) << 7 | n >>> 25) + v | 0) << 9 | n >>> 23) + b | 0) << 13 | n >>> 19) + D | 0) << 18 | n >>> 14,
                        k ^= (n = (N ^= (n = (S ^= (n = (_ ^= (n = k + N | 0) << 7 | n >>> 25) + k | 0) << 9 | n >>> 23) + _ | 0) << 13 | n >>> 19) + S | 0) << 18 | n >>> 14,
                        U ^= (n = (F ^= (n = (R ^= (n = (K ^= (n = U + F | 0) << 7 | n >>> 25) + U | 0) << 9 | n >>> 23) + K | 0) << 13 | n >>> 19) + R | 0) << 18 | n >>> 14;
                    p = p + i | 0,
                    y = y + o | 0,
                    w = w + s | 0,
                    m = m + a | 0,
                    M = M + c | 0,
                    v = v + g | 0,
                    b = b + u | 0,
                    D = D + h | 0,
                    S = S + I | 0,
                    N = N + l | 0,
                    k = k + E | 0,
                    _ = _ + B | 0,
                    K = K + C | 0,
                    R = R + Q | 0,
                    F = F + d | 0,
                    U = U + f | 0,
                    A[0] = p >>> 0 & 255,
                    A[1] = p >>> 8 & 255,
                    A[2] = p >>> 16 & 255,
                    A[3] = p >>> 24 & 255,
                    A[4] = y >>> 0 & 255,
                    A[5] = y >>> 8 & 255,
                    A[6] = y >>> 16 & 255,
                    A[7] = y >>> 24 & 255,
                    A[8] = w >>> 0 & 255,
                    A[9] = w >>> 8 & 255,
                    A[10] = w >>> 16 & 255,
                    A[11] = w >>> 24 & 255,
                    A[12] = m >>> 0 & 255,
                    A[13] = m >>> 8 & 255,
                    A[14] = m >>> 16 & 255,
                    A[15] = m >>> 24 & 255,
                    A[16] = M >>> 0 & 255,
                    A[17] = M >>> 8 & 255,
                    A[18] = M >>> 16 & 255,
                    A[19] = M >>> 24 & 255,
                    A[20] = v >>> 0 & 255,
                    A[21] = v >>> 8 & 255,
                    A[22] = v >>> 16 & 255,
                    A[23] = v >>> 24 & 255,
                    A[24] = b >>> 0 & 255,
                    A[25] = b >>> 8 & 255,
                    A[26] = b >>> 16 & 255,
                    A[27] = b >>> 24 & 255,
                    A[28] = D >>> 0 & 255,
                    A[29] = D >>> 8 & 255,
                    A[30] = D >>> 16 & 255,
                    A[31] = D >>> 24 & 255,
                    A[32] = S >>> 0 & 255,
                    A[33] = S >>> 8 & 255,
                    A[34] = S >>> 16 & 255,
                    A[35] = S >>> 24 & 255,
                    A[36] = N >>> 0 & 255,
                    A[37] = N >>> 8 & 255,
                    A[38] = N >>> 16 & 255,
                    A[39] = N >>> 24 & 255,
                    A[40] = k >>> 0 & 255,
                    A[41] = k >>> 8 & 255,
                    A[42] = k >>> 16 & 255,
                    A[43] = k >>> 24 & 255,
                    A[44] = _ >>> 0 & 255,
                    A[45] = _ >>> 8 & 255,
                    A[46] = _ >>> 16 & 255,
                    A[47] = _ >>> 24 & 255,
                    A[48] = K >>> 0 & 255,
                    A[49] = K >>> 8 & 255,
                    A[50] = K >>> 16 & 255,
                    A[51] = K >>> 24 & 255,
                    A[52] = R >>> 0 & 255,
                    A[53] = R >>> 8 & 255,
                    A[54] = R >>> 16 & 255,
                    A[55] = R >>> 24 & 255,
                    A[56] = F >>> 0 & 255,
                    A[57] = F >>> 8 & 255,
                    A[58] = F >>> 16 & 255,
                    A[59] = F >>> 24 & 255,
                    A[60] = U >>> 0 & 255,
                    A[61] = U >>> 8 & 255,
                    A[62] = U >>> 16 & 255,
                    A[63] = U >>> 24 & 255
                }(A, t, e, r)
            }
            function d(A, t, e, r) {
                !function(A, t, e, r) {
                    for (var n, i = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, o = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, s = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, a = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, c = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, g = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, u = 255 & t[0] | (255 & t[1]) << 8 | (255 & t[2]) << 16 | (255 & t[3]) << 24, h = 255 & t[4] | (255 & t[5]) << 8 | (255 & t[6]) << 16 | (255 & t[7]) << 24, I = 255 & t[8] | (255 & t[9]) << 8 | (255 & t[10]) << 16 | (255 & t[11]) << 24, l = 255 & t[12] | (255 & t[13]) << 8 | (255 & t[14]) << 16 | (255 & t[15]) << 24, E = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, B = 255 & e[16] | (255 & e[17]) << 8 | (255 & e[18]) << 16 | (255 & e[19]) << 24, C = 255 & e[20] | (255 & e[21]) << 8 | (255 & e[22]) << 16 | (255 & e[23]) << 24, Q = 255 & e[24] | (255 & e[25]) << 8 | (255 & e[26]) << 16 | (255 & e[27]) << 24, d = 255 & e[28] | (255 & e[29]) << 8 | (255 & e[30]) << 16 | (255 & e[31]) << 24, f = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, p = 0; p < 20; p += 2)
                        i ^= (n = (C ^= (n = (I ^= (n = (c ^= (n = i + C | 0) << 7 | n >>> 25) + i | 0) << 9 | n >>> 23) + c | 0) << 13 | n >>> 19) + I | 0) << 18 | n >>> 14,
                        g ^= (n = (o ^= (n = (Q ^= (n = (l ^= (n = g + o | 0) << 7 | n >>> 25) + g | 0) << 9 | n >>> 23) + l | 0) << 13 | n >>> 19) + Q | 0) << 18 | n >>> 14,
                        E ^= (n = (u ^= (n = (s ^= (n = (d ^= (n = E + u | 0) << 7 | n >>> 25) + E | 0) << 9 | n >>> 23) + d | 0) << 13 | n >>> 19) + s | 0) << 18 | n >>> 14,
                        f ^= (n = (B ^= (n = (h ^= (n = (a ^= (n = f + B | 0) << 7 | n >>> 25) + f | 0) << 9 | n >>> 23) + a | 0) << 13 | n >>> 19) + h | 0) << 18 | n >>> 14,
                        i ^= (n = (a ^= (n = (s ^= (n = (o ^= (n = i + a | 0) << 7 | n >>> 25) + i | 0) << 9 | n >>> 23) + o | 0) << 13 | n >>> 19) + s | 0) << 18 | n >>> 14,
                        g ^= (n = (c ^= (n = (h ^= (n = (u ^= (n = g + c | 0) << 7 | n >>> 25) + g | 0) << 9 | n >>> 23) + u | 0) << 13 | n >>> 19) + h | 0) << 18 | n >>> 14,
                        E ^= (n = (l ^= (n = (I ^= (n = (B ^= (n = E + l | 0) << 7 | n >>> 25) + E | 0) << 9 | n >>> 23) + B | 0) << 13 | n >>> 19) + I | 0) << 18 | n >>> 14,
                        f ^= (n = (d ^= (n = (Q ^= (n = (C ^= (n = f + d | 0) << 7 | n >>> 25) + f | 0) << 9 | n >>> 23) + C | 0) << 13 | n >>> 19) + Q | 0) << 18 | n >>> 14;
                    A[0] = i >>> 0 & 255,
                    A[1] = i >>> 8 & 255,
                    A[2] = i >>> 16 & 255,
                    A[3] = i >>> 24 & 255,
                    A[4] = g >>> 0 & 255,
                    A[5] = g >>> 8 & 255,
                    A[6] = g >>> 16 & 255,
                    A[7] = g >>> 24 & 255,
                    A[8] = E >>> 0 & 255,
                    A[9] = E >>> 8 & 255,
                    A[10] = E >>> 16 & 255,
                    A[11] = E >>> 24 & 255,
                    A[12] = f >>> 0 & 255,
                    A[13] = f >>> 8 & 255,
                    A[14] = f >>> 16 & 255,
                    A[15] = f >>> 24 & 255,
                    A[16] = u >>> 0 & 255,
                    A[17] = u >>> 8 & 255,
                    A[18] = u >>> 16 & 255,
                    A[19] = u >>> 24 & 255,
                    A[20] = h >>> 0 & 255,
                    A[21] = h >>> 8 & 255,
                    A[22] = h >>> 16 & 255,
                    A[23] = h >>> 24 & 255,
                    A[24] = I >>> 0 & 255,
                    A[25] = I >>> 8 & 255,
                    A[26] = I >>> 16 & 255,
                    A[27] = I >>> 24 & 255,
                    A[28] = l >>> 0 & 255,
                    A[29] = l >>> 8 & 255,
                    A[30] = l >>> 16 & 255,
                    A[31] = l >>> 24 & 255
                }(A, t, e, r)
            }
            var f = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
            function p(A, t, e, r, n, i, o) {
                var s, a, c = new Uint8Array(16), g = new Uint8Array(64);
                for (a = 0; a < 16; a++)
                    c[a] = 0;
                for (a = 0; a < 8; a++)
                    c[a] = i[a];
                for (; n >= 64; ) {
                    for (Q(g, c, o, f),
                    a = 0; a < 64; a++)
                        A[t + a] = e[r + a] ^ g[a];
                    for (s = 1,
                    a = 8; a < 16; a++)
                        s = s + (255 & c[a]) | 0,
                        c[a] = 255 & s,
                        s >>>= 8;
                    n -= 64,
                    t += 64,
                    r += 64
                }
                if (n > 0)
                    for (Q(g, c, o, f),
                    a = 0; a < n; a++)
                        A[t + a] = e[r + a] ^ g[a];
                return 0
            }
            function y(A, t, e, r, n) {
                var i, o, s = new Uint8Array(16), a = new Uint8Array(64);
                for (o = 0; o < 16; o++)
                    s[o] = 0;
                for (o = 0; o < 8; o++)
                    s[o] = r[o];
                for (; e >= 64; ) {
                    for (Q(a, s, n, f),
                    o = 0; o < 64; o++)
                        A[t + o] = a[o];
                    for (i = 1,
                    o = 8; o < 16; o++)
                        i = i + (255 & s[o]) | 0,
                        s[o] = 255 & i,
                        i >>>= 8;
                    e -= 64,
                    t += 64
                }
                if (e > 0)
                    for (Q(a, s, n, f),
                    o = 0; o < e; o++)
                        A[t + o] = a[o];
                return 0
            }
            function w(A, t, e, r, n) {
                var i = new Uint8Array(32);
                d(i, r, n, f);
                for (var o = new Uint8Array(8), s = 0; s < 8; s++)
                    o[s] = r[s + 16];
                return y(A, t, e, o, i)
            }
            function m(A, t, e, r, n, i, o) {
                var s = new Uint8Array(32);
                d(s, i, o, f);
                for (var a = new Uint8Array(8), c = 0; c < 8; c++)
                    a[c] = i[c + 16];
                return p(A, t, e, r, n, a, s)
            }
            var M = function(A) {
                var t, e, r, n, i, o, s, a;
                this.buffer = new Uint8Array(16),
                this.r = new Uint16Array(10),
                this.h = new Uint16Array(10),
                this.pad = new Uint16Array(8),
                this.leftover = 0,
                this.fin = 0,
                t = 255 & A[0] | (255 & A[1]) << 8,
                this.r[0] = 8191 & t,
                e = 255 & A[2] | (255 & A[3]) << 8,
                this.r[1] = 8191 & (t >>> 13 | e << 3),
                r = 255 & A[4] | (255 & A[5]) << 8,
                this.r[2] = 7939 & (e >>> 10 | r << 6),
                n = 255 & A[6] | (255 & A[7]) << 8,
                this.r[3] = 8191 & (r >>> 7 | n << 9),
                i = 255 & A[8] | (255 & A[9]) << 8,
                this.r[4] = 255 & (n >>> 4 | i << 12),
                this.r[5] = i >>> 1 & 8190,
                o = 255 & A[10] | (255 & A[11]) << 8,
                this.r[6] = 8191 & (i >>> 14 | o << 2),
                s = 255 & A[12] | (255 & A[13]) << 8,
                this.r[7] = 8065 & (o >>> 11 | s << 5),
                a = 255 & A[14] | (255 & A[15]) << 8,
                this.r[8] = 8191 & (s >>> 8 | a << 8),
                this.r[9] = a >>> 5 & 127,
                this.pad[0] = 255 & A[16] | (255 & A[17]) << 8,
                this.pad[1] = 255 & A[18] | (255 & A[19]) << 8,
                this.pad[2] = 255 & A[20] | (255 & A[21]) << 8,
                this.pad[3] = 255 & A[22] | (255 & A[23]) << 8,
                this.pad[4] = 255 & A[24] | (255 & A[25]) << 8,
                this.pad[5] = 255 & A[26] | (255 & A[27]) << 8,
                this.pad[6] = 255 & A[28] | (255 & A[29]) << 8,
                this.pad[7] = 255 & A[30] | (255 & A[31]) << 8
            };
            function v(A, t, e, r, n, i) {
                var o = new M(i);
                return o.update(e, r, n),
                o.finish(A, t),
                0
            }
            function b(A, t, e, r, n, i) {
                var o = new Uint8Array(16);
                return v(o, 0, e, r, n, i),
                B(A, t, o, 0)
            }
            function D(A, t, e, r, n) {
                var i;
                if (e < 32)
                    return -1;
                for (m(A, 0, t, 0, e, r, n),
                v(A, 16, A, 32, e - 32, A),
                i = 0; i < 16; i++)
                    A[i] = 0;
                return 0
            }
            function S(A, t, e, r, n) {
                var i, o = new Uint8Array(32);
                if (e < 32)
                    return -1;
                if (w(o, 0, 32, r, n),
                0 !== b(t, 16, t, 32, e - 32, o))
                    return -1;
                for (m(A, 0, t, 0, e, r, n),
                i = 0; i < 32; i++)
                    A[i] = 0;
                return 0
            }
            function N(A, t) {
                var e;
                for (e = 0; e < 16; e++)
                    A[e] = 0 | t[e]
            }
            function k(A) {
                var t, e, r = 1;
                for (t = 0; t < 16; t++)
                    e = A[t] + r + 65535,
                    r = Math.floor(e / 65536),
                    A[t] = e - 65536 * r;
                A[0] += r - 1 + 37 * (r - 1)
            }
            function _(A, t, e) {
                for (var r, n = ~(e - 1), i = 0; i < 16; i++)
                    r = n & (A[i] ^ t[i]),
                    A[i] ^= r,
                    t[i] ^= r
            }
            function K(A, e) {
                var r, n, i, o = t(), s = t();
                for (r = 0; r < 16; r++)
                    s[r] = e[r];
                for (k(s),
                k(s),
                k(s),
                n = 0; n < 2; n++) {
                    for (o[0] = s[0] - 65517,
                    r = 1; r < 15; r++)
                        o[r] = s[r] - 65535 - (o[r - 1] >> 16 & 1),
                        o[r - 1] &= 65535;
                    o[15] = s[15] - 32767 - (o[14] >> 16 & 1),
                    i = o[15] >> 16 & 1,
                    o[14] &= 65535,
                    _(s, o, 1 - i)
                }
                for (r = 0; r < 16; r++)
                    A[2 * r] = 255 & s[r],
                    A[2 * r + 1] = s[r] >> 8
            }
            function R(A, t) {
                var e = new Uint8Array(32)
                  , r = new Uint8Array(32);
                return K(e, A),
                K(r, t),
                C(e, 0, r, 0)
            }
            function F(A) {
                var t = new Uint8Array(32);
                return K(t, A),
                1 & t[0]
            }
            function U(A, t) {
                var e;
                for (e = 0; e < 16; e++)
                    A[e] = t[2 * e] + (t[2 * e + 1] << 8);
                A[15] &= 32767
            }
            function G(A, t, e) {
                for (var r = 0; r < 16; r++)
                    A[r] = t[r] + e[r]
            }
            function x(A, t, e) {
                for (var r = 0; r < 16; r++)
                    A[r] = t[r] - e[r]
            }
            function q(A, t, e) {
                var r, n, i = 0, o = 0, s = 0, a = 0, c = 0, g = 0, u = 0, h = 0, I = 0, l = 0, E = 0, B = 0, C = 0, Q = 0, d = 0, f = 0, p = 0, y = 0, w = 0, m = 0, M = 0, v = 0, b = 0, D = 0, S = 0, N = 0, k = 0, _ = 0, K = 0, R = 0, F = 0, U = e[0], G = e[1], x = e[2], q = e[3], L = e[4], J = e[5], Y = e[6], H = e[7], T = e[8], O = e[9], P = e[10], j = e[11], X = e[12], W = e[13], V = e[14], Z = e[15];
                i += (r = t[0]) * U,
                o += r * G,
                s += r * x,
                a += r * q,
                c += r * L,
                g += r * J,
                u += r * Y,
                h += r * H,
                I += r * T,
                l += r * O,
                E += r * P,
                B += r * j,
                C += r * X,
                Q += r * W,
                d += r * V,
                f += r * Z,
                o += (r = t[1]) * U,
                s += r * G,
                a += r * x,
                c += r * q,
                g += r * L,
                u += r * J,
                h += r * Y,
                I += r * H,
                l += r * T,
                E += r * O,
                B += r * P,
                C += r * j,
                Q += r * X,
                d += r * W,
                f += r * V,
                p += r * Z,
                s += (r = t[2]) * U,
                a += r * G,
                c += r * x,
                g += r * q,
                u += r * L,
                h += r * J,
                I += r * Y,
                l += r * H,
                E += r * T,
                B += r * O,
                C += r * P,
                Q += r * j,
                d += r * X,
                f += r * W,
                p += r * V,
                y += r * Z,
                a += (r = t[3]) * U,
                c += r * G,
                g += r * x,
                u += r * q,
                h += r * L,
                I += r * J,
                l += r * Y,
                E += r * H,
                B += r * T,
                C += r * O,
                Q += r * P,
                d += r * j,
                f += r * X,
                p += r * W,
                y += r * V,
                w += r * Z,
                c += (r = t[4]) * U,
                g += r * G,
                u += r * x,
                h += r * q,
                I += r * L,
                l += r * J,
                E += r * Y,
                B += r * H,
                C += r * T,
                Q += r * O,
                d += r * P,
                f += r * j,
                p += r * X,
                y += r * W,
                w += r * V,
                m += r * Z,
                g += (r = t[5]) * U,
                u += r * G,
                h += r * x,
                I += r * q,
                l += r * L,
                E += r * J,
                B += r * Y,
                C += r * H,
                Q += r * T,
                d += r * O,
                f += r * P,
                p += r * j,
                y += r * X,
                w += r * W,
                m += r * V,
                M += r * Z,
                u += (r = t[6]) * U,
                h += r * G,
                I += r * x,
                l += r * q,
                E += r * L,
                B += r * J,
                C += r * Y,
                Q += r * H,
                d += r * T,
                f += r * O,
                p += r * P,
                y += r * j,
                w += r * X,
                m += r * W,
                M += r * V,
                v += r * Z,
                h += (r = t[7]) * U,
                I += r * G,
                l += r * x,
                E += r * q,
                B += r * L,
                C += r * J,
                Q += r * Y,
                d += r * H,
                f += r * T,
                p += r * O,
                y += r * P,
                w += r * j,
                m += r * X,
                M += r * W,
                v += r * V,
                b += r * Z,
                I += (r = t[8]) * U,
                l += r * G,
                E += r * x,
                B += r * q,
                C += r * L,
                Q += r * J,
                d += r * Y,
                f += r * H,
                p += r * T,
                y += r * O,
                w += r * P,
                m += r * j,
                M += r * X,
                v += r * W,
                b += r * V,
                D += r * Z,
                l += (r = t[9]) * U,
                E += r * G,
                B += r * x,
                C += r * q,
                Q += r * L,
                d += r * J,
                f += r * Y,
                p += r * H,
                y += r * T,
                w += r * O,
                m += r * P,
                M += r * j,
                v += r * X,
                b += r * W,
                D += r * V,
                S += r * Z,
                E += (r = t[10]) * U,
                B += r * G,
                C += r * x,
                Q += r * q,
                d += r * L,
                f += r * J,
                p += r * Y,
                y += r * H,
                w += r * T,
                m += r * O,
                M += r * P,
                v += r * j,
                b += r * X,
                D += r * W,
                S += r * V,
                N += r * Z,
                B += (r = t[11]) * U,
                C += r * G,
                Q += r * x,
                d += r * q,
                f += r * L,
                p += r * J,
                y += r * Y,
                w += r * H,
                m += r * T,
                M += r * O,
                v += r * P,
                b += r * j,
                D += r * X,
                S += r * W,
                N += r * V,
                k += r * Z,
                C += (r = t[12]) * U,
                Q += r * G,
                d += r * x,
                f += r * q,
                p += r * L,
                y += r * J,
                w += r * Y,
                m += r * H,
                M += r * T,
                v += r * O,
                b += r * P,
                D += r * j,
                S += r * X,
                N += r * W,
                k += r * V,
                _ += r * Z,
                Q += (r = t[13]) * U,
                d += r * G,
                f += r * x,
                p += r * q,
                y += r * L,
                w += r * J,
                m += r * Y,
                M += r * H,
                v += r * T,
                b += r * O,
                D += r * P,
                S += r * j,
                N += r * X,
                k += r * W,
                _ += r * V,
                K += r * Z,
                d += (r = t[14]) * U,
                f += r * G,
                p += r * x,
                y += r * q,
                w += r * L,
                m += r * J,
                M += r * Y,
                v += r * H,
                b += r * T,
                D += r * O,
                S += r * P,
                N += r * j,
                k += r * X,
                _ += r * W,
                K += r * V,
                R += r * Z,
                f += (r = t[15]) * U,
                o += 38 * (y += r * x),
                s += 38 * (w += r * q),
                a += 38 * (m += r * L),
                c += 38 * (M += r * J),
                g += 38 * (v += r * Y),
                u += 38 * (b += r * H),
                h += 38 * (D += r * T),
                I += 38 * (S += r * O),
                l += 38 * (N += r * P),
                E += 38 * (k += r * j),
                B += 38 * (_ += r * X),
                C += 38 * (K += r * W),
                Q += 38 * (R += r * V),
                d += 38 * (F += r * Z),
                i = (r = (i += 38 * (p += r * G)) + (n = 1) + 65535) - 65536 * (n = Math.floor(r / 65536)),
                o = (r = o + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                s = (r = s + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                a = (r = a + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                c = (r = c + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                g = (r = g + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                u = (r = u + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                h = (r = h + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                I = (r = I + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                l = (r = l + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                E = (r = E + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                B = (r = B + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                C = (r = C + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                Q = (r = Q + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                d = (r = d + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                f = (r = f + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                i = (r = (i += n - 1 + 37 * (n - 1)) + (n = 1) + 65535) - 65536 * (n = Math.floor(r / 65536)),
                o = (r = o + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                s = (r = s + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                a = (r = a + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                c = (r = c + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                g = (r = g + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                u = (r = u + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                h = (r = h + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                I = (r = I + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                l = (r = l + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                E = (r = E + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                B = (r = B + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                C = (r = C + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                Q = (r = Q + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                d = (r = d + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                f = (r = f + n + 65535) - 65536 * (n = Math.floor(r / 65536)),
                i += n - 1 + 37 * (n - 1),
                A[0] = i,
                A[1] = o,
                A[2] = s,
                A[3] = a,
                A[4] = c,
                A[5] = g,
                A[6] = u,
                A[7] = h,
                A[8] = I,
                A[9] = l,
                A[10] = E,
                A[11] = B,
                A[12] = C,
                A[13] = Q,
                A[14] = d,
                A[15] = f
            }
            function L(A, t) {
                q(A, t, t)
            }
            function J(A, e) {
                var r, n = t();
                for (r = 0; r < 16; r++)
                    n[r] = e[r];
                for (r = 253; r >= 0; r--)
                    L(n, n),
                    2 !== r && 4 !== r && q(n, n, e);
                for (r = 0; r < 16; r++)
                    A[r] = n[r]
            }
            function Y(A, e) {
                var r, n = t();
                for (r = 0; r < 16; r++)
                    n[r] = e[r];
                for (r = 250; r >= 0; r--)
                    L(n, n),
                    1 !== r && q(n, n, e);
                for (r = 0; r < 16; r++)
                    A[r] = n[r]
            }
            function H(A, e, r) {
                var n, i, o = new Uint8Array(32), s = new Float64Array(80), c = t(), g = t(), u = t(), h = t(), I = t(), l = t();
                for (i = 0; i < 31; i++)
                    o[i] = e[i];
                for (o[31] = 127 & e[31] | 64,
                o[0] &= 248,
                U(s, r),
                i = 0; i < 16; i++)
                    g[i] = s[i],
                    h[i] = c[i] = u[i] = 0;
                for (c[0] = h[0] = 1,
                i = 254; i >= 0; --i)
                    _(c, g, n = o[i >>> 3] >>> (7 & i) & 1),
                    _(u, h, n),
                    G(I, c, u),
                    x(c, c, u),
                    G(u, g, h),
                    x(g, g, h),
                    L(h, I),
                    L(l, c),
                    q(c, u, c),
                    q(u, g, I),
                    G(I, c, u),
                    x(c, c, u),
                    L(g, c),
                    x(u, h, l),
                    q(c, u, a),
                    G(c, c, h),
                    q(u, u, c),
                    q(c, h, l),
                    q(h, g, s),
                    L(g, I),
                    _(c, g, n),
                    _(u, h, n);
                for (i = 0; i < 16; i++)
                    s[i + 16] = c[i],
                    s[i + 32] = u[i],
                    s[i + 48] = g[i],
                    s[i + 64] = h[i];
                var E = s.subarray(32)
                  , B = s.subarray(16);
                return J(E, E),
                q(B, B, E),
                K(A, B),
                0
            }
            function T(A, t) {
                return H(A, t, i)
            }
            function O(A, t) {
                return r(t, 32),
                T(A, t)
            }
            function P(A, t, e) {
                var r = new Uint8Array(32);
                return H(r, e, t),
                d(A, n, r, f)
            }
            M.prototype.blocks = function(A, t, e) {
                for (var r, n, i, o, s, a, c, g, u, h, I, l, E, B, C, Q, d, f, p, y = this.fin ? 0 : 2048, w = this.h[0], m = this.h[1], M = this.h[2], v = this.h[3], b = this.h[4], D = this.h[5], S = this.h[6], N = this.h[7], k = this.h[8], _ = this.h[9], K = this.r[0], R = this.r[1], F = this.r[2], U = this.r[3], G = this.r[4], x = this.r[5], q = this.r[6], L = this.r[7], J = this.r[8], Y = this.r[9]; e >= 16; )
                    h = u = 0,
                    h += (w += 8191 & (r = 255 & A[t + 0] | (255 & A[t + 1]) << 8)) * K,
                    h += (m += 8191 & (r >>> 13 | (n = 255 & A[t + 2] | (255 & A[t + 3]) << 8) << 3)) * (5 * Y),
                    h += (M += 8191 & (n >>> 10 | (i = 255 & A[t + 4] | (255 & A[t + 5]) << 8) << 6)) * (5 * J),
                    h += (v += 8191 & (i >>> 7 | (o = 255 & A[t + 6] | (255 & A[t + 7]) << 8) << 9)) * (5 * L),
                    u = (h += (b += 8191 & (o >>> 4 | (s = 255 & A[t + 8] | (255 & A[t + 9]) << 8) << 12)) * (5 * q)) >>> 13,
                    h &= 8191,
                    h += (D += s >>> 1 & 8191) * (5 * x),
                    h += (S += 8191 & (s >>> 14 | (a = 255 & A[t + 10] | (255 & A[t + 11]) << 8) << 2)) * (5 * G),
                    h += (N += 8191 & (a >>> 11 | (c = 255 & A[t + 12] | (255 & A[t + 13]) << 8) << 5)) * (5 * U),
                    h += (k += 8191 & (c >>> 8 | (g = 255 & A[t + 14] | (255 & A[t + 15]) << 8) << 8)) * (5 * F),
                    I = u += (h += (_ += g >>> 5 | y) * (5 * R)) >>> 13,
                    I += w * R,
                    I += m * K,
                    I += M * (5 * Y),
                    I += v * (5 * J),
                    u = (I += b * (5 * L)) >>> 13,
                    I &= 8191,
                    I += D * (5 * q),
                    I += S * (5 * x),
                    I += N * (5 * G),
                    I += k * (5 * U),
                    u += (I += _ * (5 * F)) >>> 13,
                    I &= 8191,
                    l = u,
                    l += w * F,
                    l += m * R,
                    l += M * K,
                    l += v * (5 * Y),
                    u = (l += b * (5 * J)) >>> 13,
                    l &= 8191,
                    l += D * (5 * L),
                    l += S * (5 * q),
                    l += N * (5 * x),
                    l += k * (5 * G),
                    E = u += (l += _ * (5 * U)) >>> 13,
                    E += w * U,
                    E += m * F,
                    E += M * R,
                    E += v * K,
                    u = (E += b * (5 * Y)) >>> 13,
                    E &= 8191,
                    E += D * (5 * J),
                    E += S * (5 * L),
                    E += N * (5 * q),
                    E += k * (5 * x),
                    B = u += (E += _ * (5 * G)) >>> 13,
                    B += w * G,
                    B += m * U,
                    B += M * F,
                    B += v * R,
                    u = (B += b * K) >>> 13,
                    B &= 8191,
                    B += D * (5 * Y),
                    B += S * (5 * J),
                    B += N * (5 * L),
                    B += k * (5 * q),
                    C = u += (B += _ * (5 * x)) >>> 13,
                    C += w * x,
                    C += m * G,
                    C += M * U,
                    C += v * F,
                    u = (C += b * R) >>> 13,
                    C &= 8191,
                    C += D * K,
                    C += S * (5 * Y),
                    C += N * (5 * J),
                    C += k * (5 * L),
                    Q = u += (C += _ * (5 * q)) >>> 13,
                    Q += w * q,
                    Q += m * x,
                    Q += M * G,
                    Q += v * U,
                    u = (Q += b * F) >>> 13,
                    Q &= 8191,
                    Q += D * R,
                    Q += S * K,
                    Q += N * (5 * Y),
                    Q += k * (5 * J),
                    d = u += (Q += _ * (5 * L)) >>> 13,
                    d += w * L,
                    d += m * q,
                    d += M * x,
                    d += v * G,
                    u = (d += b * U) >>> 13,
                    d &= 8191,
                    d += D * F,
                    d += S * R,
                    d += N * K,
                    d += k * (5 * Y),
                    f = u += (d += _ * (5 * J)) >>> 13,
                    f += w * J,
                    f += m * L,
                    f += M * q,
                    f += v * x,
                    u = (f += b * G) >>> 13,
                    f &= 8191,
                    f += D * U,
                    f += S * F,
                    f += N * R,
                    f += k * K,
                    p = u += (f += _ * (5 * Y)) >>> 13,
                    p += w * Y,
                    p += m * J,
                    p += M * L,
                    p += v * q,
                    u = (p += b * x) >>> 13,
                    p &= 8191,
                    p += D * G,
                    p += S * U,
                    p += N * F,
                    p += k * R,
                    w = h = 8191 & (u = (u = ((u += (p += _ * K) >>> 13) << 2) + u | 0) + (h &= 8191) | 0),
                    m = I += u >>>= 13,
                    M = l &= 8191,
                    v = E &= 8191,
                    b = B &= 8191,
                    D = C &= 8191,
                    S = Q &= 8191,
                    N = d &= 8191,
                    k = f &= 8191,
                    _ = p &= 8191,
                    t += 16,
                    e -= 16;
                this.h[0] = w,
                this.h[1] = m,
                this.h[2] = M,
                this.h[3] = v,
                this.h[4] = b,
                this.h[5] = D,
                this.h[6] = S,
                this.h[7] = N,
                this.h[8] = k,
                this.h[9] = _
            }
            ,
            M.prototype.finish = function(A, t) {
                var e, r, n, i, o = new Uint16Array(10);
                if (this.leftover) {
                    for (i = this.leftover,
                    this.buffer[i++] = 1; i < 16; i++)
                        this.buffer[i] = 0;
                    this.fin = 1,
                    this.blocks(this.buffer, 0, 16)
                }
                for (e = this.h[1] >>> 13,
                this.h[1] &= 8191,
                i = 2; i < 10; i++)
                    this.h[i] += e,
                    e = this.h[i] >>> 13,
                    this.h[i] &= 8191;
                for (this.h[0] += 5 * e,
                e = this.h[0] >>> 13,
                this.h[0] &= 8191,
                this.h[1] += e,
                e = this.h[1] >>> 13,
                this.h[1] &= 8191,
                this.h[2] += e,
                o[0] = this.h[0] + 5,
                e = o[0] >>> 13,
                o[0] &= 8191,
                i = 1; i < 10; i++)
                    o[i] = this.h[i] + e,
                    e = o[i] >>> 13,
                    o[i] &= 8191;
                for (o[9] -= 8192,
                r = (1 ^ e) - 1,
                i = 0; i < 10; i++)
                    o[i] &= r;
                for (r = ~r,
                i = 0; i < 10; i++)
                    this.h[i] = this.h[i] & r | o[i];
                for (this.h[0] = 65535 & (this.h[0] | this.h[1] << 13),
                this.h[1] = 65535 & (this.h[1] >>> 3 | this.h[2] << 10),
                this.h[2] = 65535 & (this.h[2] >>> 6 | this.h[3] << 7),
                this.h[3] = 65535 & (this.h[3] >>> 9 | this.h[4] << 4),
                this.h[4] = 65535 & (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14),
                this.h[5] = 65535 & (this.h[6] >>> 2 | this.h[7] << 11),
                this.h[6] = 65535 & (this.h[7] >>> 5 | this.h[8] << 8),
                this.h[7] = 65535 & (this.h[8] >>> 8 | this.h[9] << 5),
                n = this.h[0] + this.pad[0],
                this.h[0] = 65535 & n,
                i = 1; i < 8; i++)
                    n = (this.h[i] + this.pad[i] | 0) + (n >>> 16) | 0,
                    this.h[i] = 65535 & n;
                A[t + 0] = this.h[0] >>> 0 & 255,
                A[t + 1] = this.h[0] >>> 8 & 255,
                A[t + 2] = this.h[1] >>> 0 & 255,
                A[t + 3] = this.h[1] >>> 8 & 255,
                A[t + 4] = this.h[2] >>> 0 & 255,
                A[t + 5] = this.h[2] >>> 8 & 255,
                A[t + 6] = this.h[3] >>> 0 & 255,
                A[t + 7] = this.h[3] >>> 8 & 255,
                A[t + 8] = this.h[4] >>> 0 & 255,
                A[t + 9] = this.h[4] >>> 8 & 255,
                A[t + 10] = this.h[5] >>> 0 & 255,
                A[t + 11] = this.h[5] >>> 8 & 255,
                A[t + 12] = this.h[6] >>> 0 & 255,
                A[t + 13] = this.h[6] >>> 8 & 255,
                A[t + 14] = this.h[7] >>> 0 & 255,
                A[t + 15] = this.h[7] >>> 8 & 255
            }
            ,
            M.prototype.update = function(A, t, e) {
                var r, n;
                if (this.leftover) {
                    for ((n = 16 - this.leftover) > e && (n = e),
                    r = 0; r < n; r++)
                        this.buffer[this.leftover + r] = A[t + r];
                    if (e -= n,
                    t += n,
                    this.leftover += n,
                    this.leftover < 16)
                        return;
                    this.blocks(this.buffer, 0, 16),
                    this.leftover = 0
                }
                if (e >= 16 && (n = e - e % 16,
                this.blocks(A, t, n),
                t += n,
                e -= n),
                e) {
                    for (r = 0; r < e; r++)
                        this.buffer[this.leftover + r] = A[t + r];
                    this.leftover += e
                }
            }
            ;
            var j = D
              , X = S;
            var W = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
            function V(A, t, e, r) {
                for (var n, i, o, s, a, c, g, u, h, I, l, E, B, C, Q, d, f, p, y, w, m, M, v, b, D, S, N = new Int32Array(16), k = new Int32Array(16), _ = A[0], K = A[1], R = A[2], F = A[3], U = A[4], G = A[5], x = A[6], q = A[7], L = t[0], J = t[1], Y = t[2], H = t[3], T = t[4], O = t[5], P = t[6], j = t[7], X = 0; r >= 128; ) {
                    for (y = 0; y < 16; y++)
                        w = 8 * y + X,
                        N[y] = e[w + 0] << 24 | e[w + 1] << 16 | e[w + 2] << 8 | e[w + 3],
                        k[y] = e[w + 4] << 24 | e[w + 5] << 16 | e[w + 6] << 8 | e[w + 7];
                    for (y = 0; y < 80; y++)
                        if (n = _,
                        i = K,
                        o = R,
                        s = F,
                        a = U,
                        c = G,
                        g = x,
                        q,
                        h = L,
                        I = J,
                        l = Y,
                        E = H,
                        B = T,
                        C = O,
                        Q = P,
                        j,
                        v = 65535 & (M = j),
                        b = M >>> 16,
                        D = 65535 & (m = q),
                        S = m >>> 16,
                        v += 65535 & (M = (T >>> 14 | U << 18) ^ (T >>> 18 | U << 14) ^ (U >>> 9 | T << 23)),
                        b += M >>> 16,
                        D += 65535 & (m = (U >>> 14 | T << 18) ^ (U >>> 18 | T << 14) ^ (T >>> 9 | U << 23)),
                        S += m >>> 16,
                        v += 65535 & (M = T & O ^ ~T & P),
                        b += M >>> 16,
                        D += 65535 & (m = U & G ^ ~U & x),
                        S += m >>> 16,
                        v += 65535 & (M = W[2 * y + 1]),
                        b += M >>> 16,
                        D += 65535 & (m = W[2 * y]),
                        S += m >>> 16,
                        m = N[y % 16],
                        b += (M = k[y % 16]) >>> 16,
                        D += 65535 & m,
                        S += m >>> 16,
                        D += (b += (v += 65535 & M) >>> 16) >>> 16,
                        v = 65535 & (M = p = 65535 & v | b << 16),
                        b = M >>> 16,
                        D = 65535 & (m = f = 65535 & D | (S += D >>> 16) << 16),
                        S = m >>> 16,
                        v += 65535 & (M = (L >>> 28 | _ << 4) ^ (_ >>> 2 | L << 30) ^ (_ >>> 7 | L << 25)),
                        b += M >>> 16,
                        D += 65535 & (m = (_ >>> 28 | L << 4) ^ (L >>> 2 | _ << 30) ^ (L >>> 7 | _ << 25)),
                        S += m >>> 16,
                        b += (M = L & J ^ L & Y ^ J & Y) >>> 16,
                        D += 65535 & (m = _ & K ^ _ & R ^ K & R),
                        S += m >>> 16,
                        u = 65535 & (D += (b += (v += 65535 & M) >>> 16) >>> 16) | (S += D >>> 16) << 16,
                        d = 65535 & v | b << 16,
                        v = 65535 & (M = E),
                        b = M >>> 16,
                        D = 65535 & (m = s),
                        S = m >>> 16,
                        b += (M = p) >>> 16,
                        D += 65535 & (m = f),
                        S += m >>> 16,
                        K = n,
                        R = i,
                        F = o,
                        U = s = 65535 & (D += (b += (v += 65535 & M) >>> 16) >>> 16) | (S += D >>> 16) << 16,
                        G = a,
                        x = c,
                        q = g,
                        _ = u,
                        J = h,
                        Y = I,
                        H = l,
                        T = E = 65535 & v | b << 16,
                        O = B,
                        P = C,
                        j = Q,
                        L = d,
                        y % 16 === 15)
                            for (w = 0; w < 16; w++)
                                m = N[w],
                                v = 65535 & (M = k[w]),
                                b = M >>> 16,
                                D = 65535 & m,
                                S = m >>> 16,
                                m = N[(w + 9) % 16],
                                v += 65535 & (M = k[(w + 9) % 16]),
                                b += M >>> 16,
                                D += 65535 & m,
                                S += m >>> 16,
                                f = N[(w + 1) % 16],
                                v += 65535 & (M = ((p = k[(w + 1) % 16]) >>> 1 | f << 31) ^ (p >>> 8 | f << 24) ^ (p >>> 7 | f << 25)),
                                b += M >>> 16,
                                D += 65535 & (m = (f >>> 1 | p << 31) ^ (f >>> 8 | p << 24) ^ f >>> 7),
                                S += m >>> 16,
                                f = N[(w + 14) % 16],
                                b += (M = ((p = k[(w + 14) % 16]) >>> 19 | f << 13) ^ (f >>> 29 | p << 3) ^ (p >>> 6 | f << 26)) >>> 16,
                                D += 65535 & (m = (f >>> 19 | p << 13) ^ (p >>> 29 | f << 3) ^ f >>> 6),
                                S += m >>> 16,
                                S += (D += (b += (v += 65535 & M) >>> 16) >>> 16) >>> 16,
                                N[w] = 65535 & D | S << 16,
                                k[w] = 65535 & v | b << 16;
                    v = 65535 & (M = L),
                    b = M >>> 16,
                    D = 65535 & (m = _),
                    S = m >>> 16,
                    m = A[0],
                    b += (M = t[0]) >>> 16,
                    D += 65535 & m,
                    S += m >>> 16,
                    S += (D += (b += (v += 65535 & M) >>> 16) >>> 16) >>> 16,
                    A[0] = _ = 65535 & D | S << 16,
                    t[0] = L = 65535 & v | b << 16,
                    v = 65535 & (M = J),
                    b = M >>> 16,
                    D = 65535 & (m = K),
                    S = m >>> 16,
                    m = A[1],
                    b += (M = t[1]) >>> 16,
                    D += 65535 & m,
                    S += m >>> 16,
                    S += (D += (b += (v += 65535 & M) >>> 16) >>> 16) >>> 16,
                    A[1] = K = 65535 & D | S << 16,
                    t[1] = J = 65535 & v | b << 16,
                    v = 65535 & (M = Y),
                    b = M >>> 16,
                    D = 65535 & (m = R),
                    S = m >>> 16,
                    m = A[2],
                    b += (M = t[2]) >>> 16,
                    D += 65535 & m,
                    S += m >>> 16,
                    S += (D += (b += (v += 65535 & M) >>> 16) >>> 16) >>> 16,
                    A[2] = R = 65535 & D | S << 16,
                    t[2] = Y = 65535 & v | b << 16,
                    v = 65535 & (M = H),
                    b = M >>> 16,
                    D = 65535 & (m = F),
                    S = m >>> 16,
                    m = A[3],
                    b += (M = t[3]) >>> 16,
                    D += 65535 & m,
                    S += m >>> 16,
                    S += (D += (b += (v += 65535 & M) >>> 16) >>> 16) >>> 16,
                    A[3] = F = 65535 & D | S << 16,
                    t[3] = H = 65535 & v | b << 16,
                    v = 65535 & (M = T),
                    b = M >>> 16,
                    D = 65535 & (m = U),
                    S = m >>> 16,
                    m = A[4],
                    b += (M = t[4]) >>> 16,
                    D += 65535 & m,
                    S += m >>> 16,
                    S += (D += (b += (v += 65535 & M) >>> 16) >>> 16) >>> 16,
                    A[4] = U = 65535 & D | S << 16,
                    t[4] = T = 65535 & v | b << 16,
                    v = 65535 & (M = O),
                    b = M >>> 16,
                    D = 65535 & (m = G),
                    S = m >>> 16,
                    m = A[5],
                    b += (M = t[5]) >>> 16,
                    D += 65535 & m,
                    S += m >>> 16,
                    S += (D += (b += (v += 65535 & M) >>> 16) >>> 16) >>> 16,
                    A[5] = G = 65535 & D | S << 16,
                    t[5] = O = 65535 & v | b << 16,
                    v = 65535 & (M = P),
                    b = M >>> 16,
                    D = 65535 & (m = x),
                    S = m >>> 16,
                    m = A[6],
                    b += (M = t[6]) >>> 16,
                    D += 65535 & m,
                    S += m >>> 16,
                    S += (D += (b += (v += 65535 & M) >>> 16) >>> 16) >>> 16,
                    A[6] = x = 65535 & D | S << 16,
                    t[6] = P = 65535 & v | b << 16,
                    v = 65535 & (M = j),
                    b = M >>> 16,
                    D = 65535 & (m = q),
                    S = m >>> 16,
                    m = A[7],
                    b += (M = t[7]) >>> 16,
                    D += 65535 & m,
                    S += m >>> 16,
                    S += (D += (b += (v += 65535 & M) >>> 16) >>> 16) >>> 16,
                    A[7] = q = 65535 & D | S << 16,
                    t[7] = j = 65535 & v | b << 16,
                    X += 128,
                    r -= 128
                }
                return r
            }
            function Z(A, t, e) {
                var r, n = new Int32Array(8), i = new Int32Array(8), o = new Uint8Array(256), s = e;
                for (n[0] = 1779033703,
                n[1] = 3144134277,
                n[2] = 1013904242,
                n[3] = 2773480762,
                n[4] = 1359893119,
                n[5] = 2600822924,
                n[6] = 528734635,
                n[7] = 1541459225,
                i[0] = 4089235720,
                i[1] = 2227873595,
                i[2] = 4271175723,
                i[3] = 1595750129,
                i[4] = 2917565137,
                i[5] = 725511199,
                i[6] = 4215389547,
                i[7] = 327033209,
                V(n, i, t, e),
                e %= 128,
                r = 0; r < e; r++)
                    o[r] = t[s - e + r];
                for (o[e] = 128,
                o[(e = 256 - 128 * (e < 112 ? 1 : 0)) - 9] = 0,
                l(o, e - 8, s / 536870912 | 0, s << 3),
                V(n, i, o, e),
                r = 0; r < 8; r++)
                    l(A, 8 * r, n[r], i[r]);
                return 0
            }
            function z(A, e) {
                var r = t()
                  , n = t()
                  , i = t()
                  , o = t()
                  , s = t()
                  , a = t()
                  , c = t()
                  , u = t()
                  , h = t();
                x(r, A[1], A[0]),
                x(h, e[1], e[0]),
                q(r, r, h),
                G(n, A[0], A[1]),
                G(h, e[0], e[1]),
                q(n, n, h),
                q(i, A[3], e[3]),
                q(i, i, g),
                q(o, A[2], e[2]),
                G(o, o, o),
                x(s, n, r),
                x(a, o, i),
                G(c, o, i),
                G(u, n, r),
                q(A[0], s, a),
                q(A[1], u, c),
                q(A[2], c, a),
                q(A[3], s, u)
            }
            function $(A, t, e) {
                var r;
                for (r = 0; r < 4; r++)
                    _(A[r], t[r], e)
            }
            function AA(A, e) {
                var r = t()
                  , n = t()
                  , i = t();
                J(i, e[2]),
                q(r, e[0], i),
                q(n, e[1], i),
                K(A, n),
                A[31] ^= F(r) << 7
            }
            function tA(A, t, e) {
                var r, n;
                for (N(A[0], o),
                N(A[1], s),
                N(A[2], s),
                N(A[3], o),
                n = 255; n >= 0; --n)
                    $(A, t, r = e[n / 8 | 0] >> (7 & n) & 1),
                    z(t, A),
                    z(A, A),
                    $(A, t, r)
            }
            function eA(A, e) {
                var r = [t(), t(), t(), t()];
                N(r[0], u),
                N(r[1], h),
                N(r[2], s),
                q(r[3], u, h),
                tA(A, r, e)
            }
            function rA(A, e, n) {
                var i, o = new Uint8Array(64), s = [t(), t(), t(), t()];
                for (n || r(e, 32),
                Z(o, e, 32),
                o[0] &= 248,
                o[31] &= 127,
                o[31] |= 64,
                eA(s, o),
                AA(A, s),
                i = 0; i < 32; i++)
                    e[i + 32] = A[i];
                return 0
            }
            var nA = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
            function iA(A, t) {
                var e, r, n, i;
                for (r = 63; r >= 32; --r) {
                    for (e = 0,
                    n = r - 32,
                    i = r - 12; n < i; ++n)
                        t[n] += e - 16 * t[r] * nA[n - (r - 32)],
                        e = Math.floor((t[n] + 128) / 256),
                        t[n] -= 256 * e;
                    t[n] += e,
                    t[r] = 0
                }
                for (e = 0,
                n = 0; n < 32; n++)
                    t[n] += e - (t[31] >> 4) * nA[n],
                    e = t[n] >> 8,
                    t[n] &= 255;
                for (n = 0; n < 32; n++)
                    t[n] -= e * nA[n];
                for (r = 0; r < 32; r++)
                    t[r + 1] += t[r] >> 8,
                    A[r] = 255 & t[r]
            }
            function oA(A) {
                var t, e = new Float64Array(64);
                for (t = 0; t < 64; t++)
                    e[t] = A[t];
                for (t = 0; t < 64; t++)
                    A[t] = 0;
                iA(A, e)
            }
            function sA(A, e, r, n) {
                var i, o, s = new Uint8Array(64), a = new Uint8Array(64), c = new Uint8Array(64), g = new Float64Array(64), u = [t(), t(), t(), t()];
                Z(s, n, 32),
                s[0] &= 248,
                s[31] &= 127,
                s[31] |= 64;
                var h = r + 64;
                for (i = 0; i < r; i++)
                    A[64 + i] = e[i];
                for (i = 0; i < 32; i++)
                    A[32 + i] = s[32 + i];
                for (Z(c, A.subarray(32), r + 32),
                oA(c),
                eA(u, c),
                AA(A, u),
                i = 32; i < 64; i++)
                    A[i] = n[i];
                for (Z(a, A, r + 64),
                oA(a),
                i = 0; i < 64; i++)
                    g[i] = 0;
                for (i = 0; i < 32; i++)
                    g[i] = c[i];
                for (i = 0; i < 32; i++)
                    for (o = 0; o < 32; o++)
                        g[i + o] += a[i] * s[o];
                return iA(A.subarray(32), g),
                h
            }
            function aA(A, e, r, n) {
                var i, a = new Uint8Array(32), g = new Uint8Array(64), u = [t(), t(), t(), t()], h = [t(), t(), t(), t()];
                if (r < 64)
                    return -1;
                if (function(A, e) {
                    var r = t()
                      , n = t()
                      , i = t()
                      , a = t()
                      , g = t()
                      , u = t()
                      , h = t();
                    return N(A[2], s),
                    U(A[1], e),
                    L(i, A[1]),
                    q(a, i, c),
                    x(i, i, A[2]),
                    G(a, A[2], a),
                    L(g, a),
                    L(u, g),
                    q(h, u, g),
                    q(r, h, i),
                    q(r, r, a),
                    Y(r, r),
                    q(r, r, i),
                    q(r, r, a),
                    q(r, r, a),
                    q(A[0], r, a),
                    L(n, A[0]),
                    q(n, n, a),
                    R(n, i) && q(A[0], A[0], I),
                    L(n, A[0]),
                    q(n, n, a),
                    R(n, i) ? -1 : (F(A[0]) === e[31] >> 7 && x(A[0], o, A[0]),
                    q(A[3], A[0], A[1]),
                    0)
                }(h, n))
                    return -1;
                for (i = 0; i < r; i++)
                    A[i] = e[i];
                for (i = 0; i < 32; i++)
                    A[i + 32] = n[i];
                if (Z(g, A, r),
                oA(g),
                tA(u, h, g),
                eA(h, e.subarray(32)),
                z(u, h),
                AA(a, u),
                r -= 64,
                C(e, 0, a, 0)) {
                    for (i = 0; i < r; i++)
                        A[i] = 0;
                    return -1
                }
                for (i = 0; i < r; i++)
                    A[i] = e[i + 64];
                return r
            }
            var cA = 16
              , gA = 64
              , uA = 32
              , hA = 64;
            function IA(A, t) {
                if (32 !== A.length)
                    throw new Error("bad key size");
                if (24 !== t.length)
                    throw new Error("bad nonce size")
            }
            function lA() {
                for (var A = 0; A < arguments.length; A++)
                    if (!(arguments[A]instanceof Uint8Array))
                        throw new TypeError("unexpected type, use Uint8Array")
            }
            function EA(A) {
                for (var t = 0; t < A.length; t++)
                    A[t] = 0
            }
            A.lowlevel = {
                crypto_core_hsalsa20: d,
                crypto_stream_xor: m,
                crypto_stream: w,
                crypto_stream_salsa20_xor: p,
                crypto_stream_salsa20: y,
                crypto_onetimeauth: v,
                crypto_onetimeauth_verify: b,
                crypto_verify_16: B,
                crypto_verify_32: C,
                crypto_secretbox: D,
                crypto_secretbox_open: S,
                crypto_scalarmult: H,
                crypto_scalarmult_base: T,
                crypto_box_beforenm: P,
                crypto_box_afternm: j,
                crypto_box: function(A, t, e, r, n, i) {
                    var o = new Uint8Array(32);
                    return P(o, n, i),
                    j(A, t, e, r, o)
                },
                crypto_box_open: function(A, t, e, r, n, i) {
                    var o = new Uint8Array(32);
                    return P(o, n, i),
                    X(A, t, e, r, o)
                },
                crypto_box_keypair: O,
                crypto_hash: Z,
                crypto_sign: sA,
                crypto_sign_keypair: rA,
                crypto_sign_open: aA,
                crypto_secretbox_KEYBYTES: 32,
                crypto_secretbox_NONCEBYTES: 24,
                crypto_secretbox_ZEROBYTES: 32,
                crypto_secretbox_BOXZEROBYTES: cA,
                crypto_scalarmult_BYTES: 32,
                crypto_scalarmult_SCALARBYTES: 32,
                crypto_box_PUBLICKEYBYTES: 32,
                crypto_box_SECRETKEYBYTES: 32,
                crypto_box_BEFORENMBYTES: 32,
                crypto_box_NONCEBYTES: 24,
                crypto_box_ZEROBYTES: 32,
                crypto_box_BOXZEROBYTES: 16,
                crypto_sign_BYTES: gA,
                crypto_sign_PUBLICKEYBYTES: uA,
                crypto_sign_SECRETKEYBYTES: hA,
                crypto_sign_SEEDBYTES: 32,
                crypto_hash_BYTES: 64,
                gf: t,
                D: c,
                L: nA,
                pack25519: K,
                unpack25519: U,
                M: q,
                A: G,
                S: L,
                Z: x,
                pow2523: Y,
                add: z,
                set25519: N,
                modL: iA,
                scalarmult: tA,
                scalarbase: eA
            },
            A.randomBytes = function(A) {
                var t = new Uint8Array(A);
                return r(t, A),
                t
            }
            ,
            A.secretbox = function(A, t, e) {
                lA(A, t, e),
                IA(e, t);
                for (var r = new Uint8Array(32 + A.length), n = new Uint8Array(r.length), i = 0; i < A.length; i++)
                    r[i + 32] = A[i];
                return D(n, r, r.length, t, e),
                n.subarray(cA)
            }
            ,
            A.secretbox.open = function(A, t, e) {
                lA(A, t, e),
                IA(e, t);
                for (var r = new Uint8Array(cA + A.length), n = new Uint8Array(r.length), i = 0; i < A.length; i++)
                    r[i + cA] = A[i];
                return r.length < 32 || 0 !== S(n, r, r.length, t, e) ? null : n.subarray(32)
            }
            ,
            A.secretbox.keyLength = 32,
            A.secretbox.nonceLength = 24,
            A.secretbox.overheadLength = cA,
            A.scalarMult = function(A, t) {
                if (lA(A, t),
                32 !== A.length)
                    throw new Error("bad n size");
                if (32 !== t.length)
                    throw new Error("bad p size");
                var e = new Uint8Array(32);
                return H(e, A, t),
                e
            }
            ,
            A.scalarMult.base = function(A) {
                if (lA(A),
                32 !== A.length)
                    throw new Error("bad n size");
                var t = new Uint8Array(32);
                return T(t, A),
                t
            }
            ,
            A.scalarMult.scalarLength = 32,
            A.scalarMult.groupElementLength = 32,
            A.box = function(t, e, r, n) {
                var i = A.box.before(r, n);
                return A.secretbox(t, e, i)
            }
            ,
            A.box.before = function(A, t) {
                lA(A, t),
                function(A, t) {
                    if (32 !== A.length)
                        throw new Error("bad public key size");
                    if (32 !== t.length)
                        throw new Error("bad secret key size")
                }(A, t);
                var e = new Uint8Array(32);
                return P(e, A, t),
                e
            }
            ,
            A.box.after = A.secretbox,
            A.box.open = function(t, e, r, n) {
                var i = A.box.before(r, n);
                return A.secretbox.open(t, e, i)
            }
            ,
            A.box.open.after = A.secretbox.open,
            A.box.keyPair = function() {
                var A = new Uint8Array(32)
                  , t = new Uint8Array(32);
                return O(A, t),
                {
                    publicKey: A,
                    secretKey: t
                }
            }
            ,
            A.box.keyPair.fromSecretKey = function(A) {
                if (lA(A),
                32 !== A.length)
                    throw new Error("bad secret key size");
                var t = new Uint8Array(32);
                return T(t, A),
                {
                    publicKey: t,
                    secretKey: new Uint8Array(A)
                }
            }
            ,
            A.box.publicKeyLength = 32,
            A.box.secretKeyLength = 32,
            A.box.sharedKeyLength = 32,
            A.box.nonceLength = 24,
            A.box.overheadLength = A.secretbox.overheadLength,
            A.sign = function(A, t) {
                if (lA(A, t),
                t.length !== hA)
                    throw new Error("bad secret key size");
                var e = new Uint8Array(gA + A.length);
                return sA(e, A, A.length, t),
                e
            }
            ,
            A.sign.open = function(A, t) {
                if (lA(A, t),
                t.length !== uA)
                    throw new Error("bad public key size");
                var e = new Uint8Array(A.length)
                  , r = aA(e, A, A.length, t);
                if (r < 0)
                    return null;
                for (var n = new Uint8Array(r), i = 0; i < n.length; i++)
                    n[i] = e[i];
                return n
            }
            ,
            A.sign.detached = function(t, e) {
                for (var r = A.sign(t, e), n = new Uint8Array(gA), i = 0; i < n.length; i++)
                    n[i] = r[i];
                return n
            }
            ,
            A.sign.detached.verify = function(A, t, e) {
                if (lA(A, t, e),
                t.length !== gA)
                    throw new Error("bad signature size");
                if (e.length !== uA)
                    throw new Error("bad public key size");
                var r, n = new Uint8Array(gA + A.length), i = new Uint8Array(gA + A.length);
                for (r = 0; r < gA; r++)
                    n[r] = t[r];
                for (r = 0; r < A.length; r++)
                    n[r + gA] = A[r];
                return aA(i, n, n.length, e) >= 0
            }
            ,
            A.sign.keyPair = function() {
                var A = new Uint8Array(uA)
                  , t = new Uint8Array(hA);
                return rA(A, t),
                {
                    publicKey: A,
                    secretKey: t
                }
            }
            ,
            A.sign.keyPair.fromSecretKey = function(A) {
                if (lA(A),
                A.length !== hA)
                    throw new Error("bad secret key size");
                for (var t = new Uint8Array(uA), e = 0; e < t.length; e++)
                    t[e] = A[32 + e];
                return {
                    publicKey: t,
                    secretKey: new Uint8Array(A)
                }
            }
            ,
            A.sign.keyPair.fromSeed = function(A) {
                if (lA(A),
                32 !== A.length)
                    throw new Error("bad seed size");
                for (var t = new Uint8Array(uA), e = new Uint8Array(hA), r = 0; r < 32; r++)
                    e[r] = A[r];
                return rA(t, e, !0),
                {
                    publicKey: t,
                    secretKey: e
                }
            }
            ,
            A.sign.publicKeyLength = uA,
            A.sign.secretKeyLength = hA,
            A.sign.seedLength = 32,
            A.sign.signatureLength = gA,
            A.hash = function(A) {
                lA(A);
                var t = new Uint8Array(64);
                return Z(t, A, A.length),
                t
            }
            ,
            A.hash.hashLength = 64,
            A.verify = function(A, t) {
                return lA(A, t),
                0 !== A.length && 0 !== t.length && (A.length === t.length && 0 === E(A, 0, t, 0, A.length))
            }
            ,
            A.setPRNG = function(A) {
                r = A
            }
            ,
            function() {
                var t = "undefined" !== typeof self ? self.crypto || self.msCrypto : null;
                if (t && t.getRandomValues) {
                    A.setPRNG((function(A, e) {
                        var r, n = new Uint8Array(e);
                        for (r = 0; r < e; r += 65536)
                            t.getRandomValues(n.subarray(r, r + Math.min(e - r, 65536)));
                        for (r = 0; r < e; r++)
                            A[r] = n[r];
                        EA(n)
                    }
                    ))
                } else
                    (t = e(55024)) && t.randomBytes && A.setPRNG((function(A, e) {
                        var r, n = t.randomBytes(e);
                        for (r = 0; r < e; r++)
                            A[r] = n[r];
                        EA(n)
                    }
                    ))
            }()
        }(A.exports ? A.exports : self.nacl = self.nacl || {})
    },
    43930: function(A, t, e) {
        A.exports = e(41524)
    },
    64938: function(A) {
        A.exports = function(A) {
            var t, e = !1;
            return A instanceof Function || (e = !0,
            t = A,
            A = null),
            function() {
                return e || (e = !0,
                t = A.apply(this, arguments),
                A = null),
                t
            }
        }
    },
    63935: function(A) {
        A.exports = function A(t, e, r) {
            if (r || (r = []),
            r.length < t.length) {
                var n = t[r.length];
                for (var i in n)
                    r[r.length] = n[i],
                    A(t, e, r),
                    --r.length
            } else
                e.apply(null, r)
        }
    },
    41524: function(A, t, e) {
        A.exports = {
            cache: e(64938),
            eachCombination: e(63935)
        }
    },
    83138: function(A, t, e) {
        "use strict";
        var r = e(60197).Buffer
          , n = this && this.__awaiter || function(A, t, e, r) {
            return new (e || (e = Promise))((function(n, i) {
                function o(A) {
                    try {
                        a(r.next(A))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(A) {
                    try {
                        a(r.throw(A))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(A) {
                    var t;
                    A.done ? n(A.value) : (t = A.value,
                    t instanceof e ? t : new e((function(A) {
                        A(t)
                    }
                    ))).then(o, s)
                }
                a((r = r.apply(A, t || [])).next())
            }
            ))
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.readCustomSection = void 0;
        const i = e(95890);
        let o = new (e(92751).Walrus);
        t.readCustomSection = function(A, t) {
            return n(this, void 0, void 0, (function*() {
                if (!o.instance) {
                    const A = r.from(i.WALRUS_BYTES, "base64");
                    yield o.instantiate(A)
                }
                return o.readCustomSection(A, t)
            }
            ))
        }
    },
    49013: function(A, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.UTF8_ENCODED_LEN = t.utf8_encode = t.data_view = void 0;
        let e = new DataView(new ArrayBuffer);
        t.data_view = function(A) {
            return e.buffer !== A.buffer && (e = new DataView(A.buffer)),
            e
        }
        ;
        const r = new TextEncoder("utf-8");
        t.utf8_encode = function(A, e, n) {
            if ("string" !== typeof A)
                throw new TypeError("expected a string");
            if (0 === A.length)
                return t.UTF8_ENCODED_LEN = 0,
                1;
            let i = 0
              , o = 0
              , s = 0;
            for (; A.length > 0; ) {
                o = e(o, i, 1, i + A.length),
                i += A.length;
                const {read: t, written: a} = r.encodeInto(A, new Uint8Array(n.buffer,o + s,i - s));
                s += a,
                A = A.slice(t)
            }
            return i > s && (o = e(o, i, 1, s)),
            t.UTF8_ENCODED_LEN = s,
            o
        }
        ,
        t.UTF8_ENCODED_LEN = 0
    },
    92751: function(A, t, e) {
        "use strict";
        var r = this && this.__awaiter || function(A, t, e, r) {
            return new (e || (e = Promise))((function(n, i) {
                function o(A) {
                    try {
                        a(r.next(A))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(A) {
                    try {
                        a(r.throw(A))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(A) {
                    var t;
                    A.done ? n(A.value) : (t = A.value,
                    t instanceof e ? t : new e((function(A) {
                        A(t)
                    }
                    ))).then(o, s)
                }
                a((r = r.apply(A, t || [])).next())
            }
            ))
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Walrus = void 0;
        const n = e(49013);
        t.Walrus = class {
            addToImports(A) {}
            instantiate(A, t) {
                return r(this, void 0, void 0, (function*() {
                    if (t = t || {},
                    this.addToImports(t),
                    A instanceof WebAssembly.Instance)
                        this.instance = A;
                    else if (A instanceof WebAssembly.Module)
                        this.instance = yield WebAssembly.instantiate(A, t);
                    else if (A instanceof ArrayBuffer || A instanceof Uint8Array) {
                        const {instance: e} = yield WebAssembly.instantiate(A, t);
                        this.instance = e
                    } else {
                        const {instance: e} = yield WebAssembly.instantiateStreaming(A, t);
                        this.instance = e
                    }
                    this._exports = this.instance.exports
                }
                ))
            }
            readCustomSection(A, t) {
                const e = this._exports.memory
                  , r = this._exports.canonical_abi_realloc
                  , i = this._exports.canonical_abi_free
                  , o = A
                  , s = o.length
                  , a = r(0, 0, 1, 1 * s);
                new Uint8Array(e.buffer,a,1 * s).set(new Uint8Array(o.buffer,o.byteOffset,1 * s));
                const c = (0,
                n.utf8_encode)(t, r, e)
                  , g = n.UTF8_ENCODED_LEN
                  , u = this._exports["read-custom-section"](a, s, c, g);
                let h;
                switch ((0,
                n.data_view)(e).getInt32(u + 0, !0)) {
                case 0:
                    h = null;
                    break;
                case 1:
                    {
                        const A = (0,
                        n.data_view)(e).getInt32(u + 8, !0)
                          , t = (0,
                        n.data_view)(e).getInt32(u + 16, !0)
                          , r = new Uint8Array(e.buffer.slice(A, A + 1 * t));
                        i(A, t, 1),
                        h = r;
                        break
                    }
                default:
                    throw new RangeError("invalid variant discriminant for option")
                }
                return h
            }
        }
    },
    95890: function(A, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WALRUS_BYTES = void 0,
        t.WALRUS_BYTES = "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NgJMIAUgBUHIAGo2AkAgBSAFNgJIIAVBIGogBUEwahANIAVBIGogBSgCFCAGahBKIQELIABBATYCACAAIAE2AgQLIAVB0ABqJAAL/wECBH8BfgJAAkACQCAAEDkiBadBAXENAAJAAkACQCAFQgiIpyIBQRh0QRh1IgJBf0wNACABQf8BcSECDAELIAJB/wBxIQJBByEBA0AgABA5IgWnQQFxDQQgBUIIiKciA0EYdEEYdSEEAkAgAUEZSA0AIANB/wFxQQAgAWtBB3F2DQMLIANB/wBxIAF0IAJyIQIgAUEHaiEBIARBf0wNAAsLQgAhBQwDC0IBIQVBhKPAAEHUosAAIARBf0oiARtBIkEwIAEbIAAoAgwgACgCCGpBf2oQOyECDAILIAVCIIinIQJCASEFDAELIAVCIIinIQJCASEFCyACrUIghiAFhAupAgECfyMAQRBrIgIkAAJAAkAgACgCACIALQAADQAgASgCGEHIqMAAQQQgAUEcaigCACgCDBEIACEBDAELIAIgASgCGEHEqMAAQQQgAUEcaigCACgCDBEIADoACCACIAE2AgAgAkEAOgAJIAJBADYCBEEBIQEgAiAAQQFqNgIMIAIgAkEMakHohMAAEBkaIAItAAghAAJAAkAgAigCBCIDDQAgACEBDAELIABB/wFxDQAgAigCACEAAkAgA0EBRw0AIAItAAlB/wFxRQ0AIAAtAABBBHENAEEBIQEgACgCGEHkhMAAQQEgAEEcaigCACgCDBEIAA0BCyAAKAIYQeWEwABBASAAQRxqKAIAKAIMEQgAIQELIAFB/wFxQQBHIQELIAJBEGokACABC6UCAQJ/IwBBEGsiAiQAAkACQCAAKAIAIgAoAgANACABKAIYQciowABBBCABQRxqKAIAKAIMEQgAIQEMAQsgAiABKAIYQcSowABBBCABQRxqKAIAKAIMEQgAOgAIIAIgATYCACACQQA6AAkgAkEANgIEIAIgAEEEajYCDCACIAJBDGpB/KbAABAZGiACLQAIIQECQCACKAIEIgNFDQAgAUH/AXEhAEEBIQEgAA0AIAIoAgAhAAJAIANBAUcNACACLQAJQf8BcUUNACAALQAAQQRxDQBBASEBIAAoAhhB5ITAAEEBIABBHGooAgAoAgwRCAANAQsgACgCGEHlhMAAQQEgAEEcaigCACgCDBEI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QQE2AhAgBSAANgIMIAVBFjYCCCAFIAM2AgQgBSAENgIAIAJBEGokACAFC3MBBH8jAEEgayICJABBASEDAkAgACABEBoNACABQRxqKAIAIQQgASgCGCEFIAJBHGpBADYCACACQZihwAA2AhggAkIBNwIMIAJB+ILAADYCCCAFIAQgAkEIahAKDQAgAEEEaiABEBohAwsgAkEgaiQAIAMLeAECf0EBIQFBAEEAKALsqEAiAkEBajYC7KhAAkACQEEALQC4rEBFDQBBACgCwKxAQQFqIQEMAQtBAEEBOgC4rEALQQAgATYCwKxAAkAgAkEASA0AIAFBAksNAEEAKALoqEBBf0wNACABQQFLDQAgAEUNABBjAAsAC2wBAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRxqQQI2AgAgA0EsakEENgIAIANCAjcCDCADQayIwAA2AgggA0EENgIkIAMgA0EgajYCGCADIANBBGo2AiggAyADNgIgIANBCGogAhBGAAtsAQF/IwBBMGsiAyQAIAMgATYCBCADIAA2AgAgA0EcakECNgIAIANBLGpBBDYCACADQgI3AgwgA0HEg8AANgIIIANBBDYCJCADIANBIGo2AhggAyADNgIoIAMgA0EEajYCICADQQhqIAIQRgALbAEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBHGpBAjYCACADQSxqQQQ2AgAgA0ICNwIMIANBzIjAADYCCCADQQQ2AiQgAyADQSBqNgIYIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEEYAC2wBAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRxqQQI2AgAgA0EsakEENgIAIANCAjcCDCADQYCJwAA2AgggA0EENgIkIAMgA0EgajYCGCADIANBBGo2AiggAyADNgIgIANBCGogAhBGAAtjAQF/IwBBIGsiAiQAIAIgACgCADYCBCACQQhqQRBqIAFBEGopAgA3AwAgAkEIakEIaiABQQhqKQIANwMAIAIgASkCADcDCCACQQRqQdyCwAAgAkEIahAKIQEgAkEgaiQAIAELYwEBfyMAQSBrIgIkACACIAAoAgA2AgQgAkEIakEQaiABQRBqKQIANwMAIAJBCGpBCGogAUEIaikCADcDACACIAEpAgA3AwggAkEEakHwhsAAIAJBCGoQCiEBIAJBIGokACABC2ECAX8DfgJAAkAgACgCCCIBIAAoAgRJDQAgACgCDCABakEBEDCtQiCGIQJCASEDQgAhBAwBCyAAIAFBAWo2AgggACgCACABajEAAEIIhiEEQgAhAkIAIQMLIAQgAoQgA4QLYAEBfyMAQSBrIgIkACACIAA2AgQgAkEIakEQaiABQRBqKQIANwMAIAJBCGpBCGogAUEIaikCADcDACACIAEpAgA3AwggAkEEakHwhsAAIAJBCGoQCiEBIAJBIGokACABC1gBA38jAEEQayIDJAAgA0EIaiABEEAgAygCDCEEIAMoAgggACABEGAhBRBHIgBBADYCECAAIAI2AgwgACABNgIIIAAgBDYCBCAAIAU2AgAgA0EQaiQAIAALUAECfwJAIAAoAgAiA0EEaigCACADQQhqIgQoAgAiAGsgAk8NACADIAAgAhAnIAQoAgAhAAsgAygCACAAaiABIAIQYBogBCAAIAJqNgIAQQALSgEDf0EAIQMCQCACRQ0AAkADQCAALQAAIgQgAS0AACIFRw0BIABBAWohACABQQFqIQEgAkF/aiICRQ0CDAALCyAEIAVrIQMLIAMLVAEBfwJAAkACQCABQYCAxABGDQBBASEEIAAoAhggASAAQRxqKAIAKAIQEQYADQELIAINAUEAIQQLIAQPCyAAKAIYIAIgAyAAQRxqKAIAKAIMEQgAC08BAn9BACAAQQ9qQXhxIgJBeGo2AoysQEEAIAAgAmsgAWpBCGoiAzYChKxAIAJBfGogA0EBcjYCACAAIAFqQSg2AgRBAEGAgIABNgKorEALRwECfyMAQRBrIgIkAAJAAkAgAUF/TA0AIAJBCGogAUEBEE4gAigCCCIDDQEACxBFAAsgACABNgIEIAAgAzYCACACQRBqJAALRwEBfyMAQSBrIgMkACADQRRqQQA2AgAgA0GYocAANgIQIANCATcCBCADIAE2AhwgAyAANgIYIAMgA0EYajYCACADIAIQRgALPAACQAJAIAIgAUkNACACIARNDQEgAiAEIAUQNQALIAEgAiAFEDYACyAAIAIgAWs2AgQgACADIAFqNgIAC0oBAn9BACEAAkACQEEAKAKgrEAiAQ0AQf8fIQAMAQsDQCAAQQFqIQAgASgCCCIBDQALIABB/x8gAEH/H0sbIQALQQAgADYCsKxAC0YBAX8jAEEQayICJAAgAiABQYynwABBERBMNwMAIAIgADYCDCACQZ2nwABBBSACQQxqQaSnwAAQERAuIQAgAkEQaiQAIAALPwEBfyMAQSBrIgAkACAAQRxqQQA2AgAgAEGYocAANgIYIABCATcCDCAAQZyBwAA2AgggAEEIakGkgcAAEEYACz4BAX8jAEEgayICJAAgAkEBOgAYIAIgATYCFCACIAA2AhAgAkGAg8AANgIMIAJBmKHAADYCCCACQQhqEFYACzABAn8jAEEQayIAJAAgAEEIakEYQQQQTgJAIAAoAggiAUUNACAAQRBqJAAgAQ8LAAsxAAJAAkACQCABDQAgA0UNAiADIAIQDyECDAELIAAgASACIAMQBSECCyACDQAACyACCzUBAX8gAEEUaigCACECAkACQCAAQQRqKAIADgIAAAELIAINACABLQAQEDIACyABLQAQEDIACzABAX8QRyICQQA2AhAgAiABNgIMIAIgACkCADcCACACQQhqIABBCGooAgA2AgAgAgsnAQF/QQAhBAJAIAEgA2oiAyAATQ0AIAIgAWogAyAAaxAwIQQLIAQLJgBCgICAgBBCACAAKAIYIAEgAiAAQRxqKAIAKAIMEQgAGyAArYQLIAEBfwJAIABBLGooAgAiAUUNACAAKAIoIAFBBXQQUwsLIAACQCABRQ0AIAEgAhAPIQILIAAgATYCBCAAIAI2AgALGgEBfwJAIAAoAgQiAUUNACAAKAIAIAEQUwsLHAAgASgCGEHJmcAAQQUgAUEcaigCACgCDBEIAAsaAAJAIAANAEG/oMAAQStBiKHAABBBAAsgAAsUACAAKAIAIAEgACgCBCgCDBEGAAsOAAJAIAFFDQAgABAHCwsQACAAKAIAEE8gACgCABAHCxAAIAEgACgCACAAKAIEEAILDgAgACgCCBBRIAAQXgALEAAgASAAKAIAIAAoAgQQAgsOAAJAIAFFDQAgABAHCwsNACAAKAIAGgN/DAALCw0AIAAoAgAgASACEAYLCwAgADUCACABEBULCwAgACgCACABEBoLDQAgAUHEh8AAQQIQAgsJACAAIAEQSQALCgAgACABIAIQPQsKACAAIAEgAhAUCwYAIAAQTwsMAEKBuKqT9fPl7BQLAwAACwIACwIACwIACwIACwIACwIACwIACwvWqICAAAEAQYCA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X3UzMjogaW50ZWdlciB0b28gbGFyZ2VzdHJpbmcgc2l6ZSBvdXQgb2YgYm91bmRzaW52YWxpZCBVVEYtOCBlbmNvZGluZ21hZ2ljIGhlYWRlciBub3QgZGV0ZWN0ZWQ6IGJhZCBtYWdpYyBudW1iZXIvVXNlcnMvd2lsbGVtLy5jYXJnby9yZWdpc3RyeS9zcmMvZ2l0aHViLmNvbS0xZWNjNjI5OWRiOWVjODIzL3dhc21wYXJzZXItMC44NC4wL3NyYy9wYXJzZXIucnMAAAAAEhAAXQAAALsBAAAPAAAAdHJhaWxpbmcgYnl0ZXMgYXQgZW5kIG9mIHNlY3Rpb25tYWxmb3JtZWQgc2VjdGlvbiBpZHNlY3Rpb24gdG9vIGxhcmdlIHNlY3Rpb24gaXMgdG9vIGxhcmdlAACYEBAAAAAAALUSEAAVAAAAY29tcG9uZW50IG1vZHVsZWludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUAEhAAXQAAAJQCAAAiAAAAZGF0YSBjb3VudHN0YXJ0dW5rbm93biBiaW5hcnkgdmVyc2lvbnVuZXhwZWN0ZWQgY29udGVudCBpbiB0aGUgIHNlY3Rpb24ASRMQABoAAABjExAACAAAAB8AAAAEAAAABAAAACAAAABCaW5hcnlSZWFkZXJFcnJvcmlubmVyAAAhAAAABAAAAAQAAAAiAAAAQmluYXJ5UmVhZGVyRXJyb3JJbm5lcm1lc3NhZ2UAAAAjAAAABAAAAAQAAAAkAAAAb2Zmc2V0bmVlZGVkX2hpbnQAAAAlAAAABAAAAAQAAAAmAAAAY2FsbGVkIGBSZXN1bHQ6OnVud3JhcCgpYCBvbiBhbiBgRXJyYCB2YWx1ZQAnAAAAAAAAAAEAAAAoAAAAU29tZU5vbmUAt4CAgAAJcHJvZHVjZXJzAQxwcm9jZXNzZWQtYnkCBndhbHJ1cwYwLjEyLjAJd2FzbS1zbmlwBTAuNC4w"
    },
    16078: function(A, t, e) {
        "use strict";
        function r(A, t, e) {
            return t <= A && A <= e
        }
        function n(A) {
            if (void 0 === A)
                return {};
            if (A === Object(A))
                return A;
            throw TypeError("Could not convert argument to dictionary")
        }
        e.r(t),
        e.d(t, {
            TextDecoder: function() {
                return c
            },
            TextEncoder: function() {
                return g
            }
        });
        function i(A) {
            this.tokens = [].slice.call(A)
        }
        i.prototype = {
            endOfStream: function() {
                return !this.tokens.length
            },
            read: function() {
                return this.tokens.length ? this.tokens.shift() : -1
            },
            prepend: function(A) {
                if (Array.isArray(A))
                    for (var t = A; t.length; )
                        this.tokens.unshift(t.pop());
                else
                    this.tokens.unshift(A)
            },
            push: function(A) {
                if (Array.isArray(A))
                    for (var t = A; t.length; )
                        this.tokens.push(t.shift());
                else
                    this.tokens.push(A)
            }
        };
        var o = -1;
        function s(A, t) {
            if (A)
                throw TypeError("Decoder error");
            return t || 65533
        }
        var a = "utf-8";
        function c(A, t) {
            if (!(this instanceof c))
                return new c(A,t);
            if ((A = void 0 !== A ? String(A).toLowerCase() : a) !== a)
                throw new Error("Encoding not supported. Only utf-8 is supported");
            t = n(t),
            this._streaming = !1,
            this._BOMseen = !1,
            this._decoder = null,
            this._fatal = Boolean(t.fatal),
            this._ignoreBOM = Boolean(t.ignoreBOM),
            Object.defineProperty(this, "encoding", {
                value: "utf-8"
            }),
            Object.defineProperty(this, "fatal", {
                value: this._fatal
            }),
            Object.defineProperty(this, "ignoreBOM", {
                value: this._ignoreBOM
            })
        }
        function g(A, t) {
            if (!(this instanceof g))
                return new g(A,t);
            if ((A = void 0 !== A ? String(A).toLowerCase() : a) !== a)
                throw new Error("Encoding not supported. Only utf-8 is supported");
            t = n(t),
            this._streaming = !1,
            this._encoder = null,
            this._options = {
                fatal: Boolean(t.fatal)
            },
            Object.defineProperty(this, "encoding", {
                value: "utf-8"
            })
        }
        function u(A) {
            var t = A.fatal
              , e = 0
              , n = 0
              , i = 0
              , a = 128
              , c = 191;
            this.handler = function(A, g) {
                if (-1 === g && 0 !== i)
                    return i = 0,
                    s(t);
                if (-1 === g)
                    return o;
                if (0 === i) {
                    if (r(g, 0, 127))
                        return g;
                    if (r(g, 194, 223))
                        i = 1,
                        e = g - 192;
                    else if (r(g, 224, 239))
                        224 === g && (a = 160),
                        237 === g && (c = 159),
                        i = 2,
                        e = g - 224;
                    else {
                        if (!r(g, 240, 244))
                            return s(t);
                        240 === g && (a = 144),
                        244 === g && (c = 143),
                        i = 3,
                        e = g - 240
                    }
                    return e <<= 6 * i,
                    null
                }
                if (!r(g, a, c))
                    return e = i = n = 0,
                    a = 128,
                    c = 191,
                    A.prepend(g),
                    s(t);
                if (a = 128,
                c = 191,
                e += g - 128 << 6 * (i - (n += 1)),
                n !== i)
                    return null;
                var u = e;
                return e = i = n = 0,
                u
            }
        }
        function h(A) {
            A.fatal;
            this.handler = function(A, t) {
                if (-1 === t)
                    return o;
                if (r(t, 0, 127))
                    return t;
                var e, n;
                r(t, 128, 2047) ? (e = 1,
                n = 192) : r(t, 2048, 65535) ? (e = 2,
                n = 224) : r(t, 65536, 1114111) && (e = 3,
                n = 240);
                for (var i = [(t >> 6 * e) + n]; e > 0; ) {
                    var s = t >> 6 * (e - 1);
                    i.push(128 | 63 & s),
                    e -= 1
                }
                return i
            }
        }
        c.prototype = {
            decode: function(A, t) {
                var e;
                e = "object" === typeof A && A instanceof ArrayBuffer ? new Uint8Array(A) : "object" === typeof A && "buffer"in A && A.buffer instanceof ArrayBuffer ? new Uint8Array(A.buffer,A.byteOffset,A.byteLength) : new Uint8Array(0),
                t = n(t),
                this._streaming || (this._decoder = new u({
                    fatal: this._fatal
                }),
                this._BOMseen = !1),
                this._streaming = Boolean(t.stream);
                for (var r, s = new i(e), a = []; !s.endOfStream() && (r = this._decoder.handler(s, s.read())) !== o; )
                    null !== r && (Array.isArray(r) ? a.push.apply(a, r) : a.push(r));
                if (!this._streaming) {
                    do {
                        if ((r = this._decoder.handler(s, s.read())) === o)
                            break;
                        null !== r && (Array.isArray(r) ? a.push.apply(a, r) : a.push(r))
                    } while (!s.endOfStream());
                    this._decoder = null
                }
                return a.length && (-1 === ["utf-8"].indexOf(this.encoding) || this._ignoreBOM || this._BOMseen || (65279 === a[0] ? (this._BOMseen = !0,
                a.shift()) : this._BOMseen = !0)),
                function(A) {
                    for (var t = "", e = 0; e < A.length; ++e) {
                        var r = A[e];
                        r <= 65535 ? t += String.fromCharCode(r) : (r -= 65536,
                        t += String.fromCharCode(55296 + (r >> 10), 56320 + (1023 & r)))
                    }
                    return t
                }(a)
            }
        },
        g.prototype = {
            encode: function(A, t) {
                A = A ? String(A) : "",
                t = n(t),
                this._streaming || (this._encoder = new h(this._options)),
                this._streaming = Boolean(t.stream);
                for (var e, r = [], s = new i(function(A) {
                    for (var t = String(A), e = t.length, r = 0, n = []; r < e; ) {
                        var i = t.charCodeAt(r);
                        if (i < 55296 || i > 57343)
                            n.push(i);
                        else if (56320 <= i && i <= 57343)
                            n.push(65533);
                        else if (55296 <= i && i <= 56319)
                            if (r === e - 1)
                                n.push(65533);
                            else {
                                var o = A.charCodeAt(r + 1);
                                if (56320 <= o && o <= 57343) {
                                    var s = 1023 & i
                                      , a = 1023 & o;
                                    n.push(65536 + (s << 10) + a),
                                    r += 1
                                } else
                                    n.push(65533)
                            }
                        r += 1
                    }
                    return n
                }(A)); !s.endOfStream() && (e = this._encoder.handler(s, s.read())) !== o; )
                    Array.isArray(e) ? r.push.apply(r, e) : r.push(e);
                if (!this._streaming) {
                    for (; (e = this._encoder.handler(s, s.read())) !== o; )
                        Array.isArray(e) ? r.push.apply(r, e) : r.push(e);
                    this._encoder = null
                }
                return new Uint8Array(r)
            }
        }
    },
    56527: function(A) {
        "use strict";
        A.exports = JSON.parse('{"schema":{"BadUTF16":{"name":"BadUTF16","subtypes":[],"props":{}},"BadUTF8":{"name":"BadUTF8","subtypes":[],"props":{}},"BalanceExceeded":{"name":"BalanceExceeded","subtypes":[],"props":{}},"BreakpointTrap":{"name":"BreakpointTrap","subtypes":[],"props":{}},"CacheError":{"name":"CacheError","subtypes":["ReadError","WriteError","DeserializationError","SerializationError"],"props":{}},"CallIndirectOOB":{"name":"CallIndirectOOB","subtypes":[],"props":{}},"CannotAppendActionToJointPromise":{"name":"CannotAppendActionToJointPromise","subtypes":[],"props":{}},"CannotReturnJointPromise":{"name":"CannotReturnJointPromise","subtypes":[],"props":{}},"CodeDoesNotExist":{"name":"CodeDoesNotExist","subtypes":[],"props":{"account_id":""}},"CompilationError":{"name":"CompilationError","subtypes":["CodeDoesNotExist","PrepareError","WasmerCompileError"],"props":{}},"ContractSizeExceeded":{"name":"ContractSizeExceeded","subtypes":[],"props":{"limit":"","size":""}},"Deprecated":{"name":"Deprecated","subtypes":[],"props":{"method_name":""}},"Deserialization":{"name":"Deserialization","subtypes":[],"props":{}},"DeserializationError":{"name":"DeserializationError","subtypes":[],"props":{}},"EmptyMethodName":{"name":"EmptyMethodName","subtypes":[],"props":{}},"FunctionCallError":{"name":"FunctionCallError","subtypes":["CompilationError","LinkError","MethodResolveError","WasmTrap","WasmUnknownError","HostError","EvmError"],"props":{}},"GasExceeded":{"name":"GasExceeded","subtypes":[],"props":{}},"GasInstrumentation":{"name":"GasInstrumentation","subtypes":[],"props":{}},"GasLimitExceeded":{"name":"GasLimitExceeded","subtypes":[],"props":{}},"GenericTrap":{"name":"GenericTrap","subtypes":[],"props":{}},"GuestPanic":{"name":"GuestPanic","subtypes":[],"props":{"panic_msg":""}},"HostError":{"name":"HostError","subtypes":["BadUTF16","BadUTF8","GasExceeded","GasLimitExceeded","BalanceExceeded","EmptyMethodName","GuestPanic","IntegerOverflow","InvalidPromiseIndex","CannotAppendActionToJointPromise","CannotReturnJointPromise","InvalidPromiseResultIndex","InvalidRegisterId","IteratorWasInvalidated","MemoryAccessViolation","InvalidReceiptIndex","InvalidIteratorIndex","InvalidAccountId","InvalidMethodName","InvalidPublicKey","ProhibitedInView","NumberOfLogsExceeded","KeyLengthExceeded","ValueLengthExceeded","TotalLogLengthExceeded","NumberPromisesExceeded","NumberInputDataDependenciesExceeded","ReturnedValueLengthExceeded","ContractSizeExceeded","Deprecated"],"props":{}},"IllegalArithmetic":{"name":"IllegalArithmetic","subtypes":[],"props":{}},"IncorrectCallIndirectSignature":{"name":"IncorrectCallIndirectSignature","subtypes":[],"props":{}},"Instantiate":{"name":"Instantiate","subtypes":[],"props":{}},"IntegerOverflow":{"name":"IntegerOverflow","subtypes":[],"props":{}},"InternalMemoryDeclared":{"name":"InternalMemoryDeclared","subtypes":[],"props":{}},"InvalidAccountId":{"name":"InvalidAccountId","subtypes":[],"props":{"account_id":""}},"InvalidIteratorIndex":{"name":"InvalidIteratorIndex","subtypes":[],"props":{"iterator_index":""}},"InvalidMethodName":{"name":"InvalidMethodName","subtypes":[],"props":{}},"InvalidPromiseIndex":{"name":"InvalidPromiseIndex","subtypes":[],"props":{"promise_idx":""}},"InvalidPromiseResultIndex":{"name":"InvalidPromiseResultIndex","subtypes":[],"props":{"result_idx":""}},"InvalidPublicKey":{"name":"InvalidPublicKey","subtypes":[],"props":{}},"InvalidReceiptIndex":{"name":"InvalidReceiptIndex","subtypes":[],"props":{"receipt_index":""}},"InvalidRegisterId":{"name":"InvalidRegisterId","subtypes":[],"props":{"register_id":""}},"IteratorWasInvalidated":{"name":"IteratorWasInvalidated","subtypes":[],"props":{"iterator_index":""}},"KeyLengthExceeded":{"name":"KeyLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"LinkError":{"name":"LinkError","subtypes":[],"props":{"msg":""}},"Memory":{"name":"Memory","subtypes":[],"props":{}},"MemoryAccessViolation":{"name":"MemoryAccessViolation","subtypes":[],"props":{}},"MemoryOutOfBounds":{"name":"MemoryOutOfBounds","subtypes":[],"props":{}},"MethodEmptyName":{"name":"MethodEmptyName","subtypes":[],"props":{}},"MethodInvalidSignature":{"name":"MethodInvalidSignature","subtypes":[],"props":{}},"MethodNotFound":{"name":"MethodNotFound","subtypes":[],"props":{}},"MethodResolveError":{"name":"MethodResolveError","subtypes":["MethodEmptyName","MethodUTF8Error","MethodNotFound","MethodInvalidSignature"],"props":{}},"MethodUTF8Error":{"name":"MethodUTF8Error","subtypes":[],"props":{}},"MisalignedAtomicAccess":{"name":"MisalignedAtomicAccess","subtypes":[],"props":{}},"NumberInputDataDependenciesExceeded":{"name":"NumberInputDataDependenciesExceeded","subtypes":[],"props":{"limit":"","number_of_input_data_dependencies":""}},"NumberOfLogsExceeded":{"name":"NumberOfLogsExceeded","subtypes":[],"props":{"limit":""}},"NumberPromisesExceeded":{"name":"NumberPromisesExceeded","subtypes":[],"props":{"limit":"","number_of_promises":""}},"PrepareError":{"name":"PrepareError","subtypes":["Serialization","Deserialization","InternalMemoryDeclared","GasInstrumentation","StackHeightInstrumentation","Instantiate","Memory"],"props":{}},"ProhibitedInView":{"name":"ProhibitedInView","subtypes":[],"props":{"method_name":""}},"ReadError":{"name":"ReadError","subtypes":[],"props":{}},"ReturnedValueLengthExceeded":{"name":"ReturnedValueLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"Serialization":{"name":"Serialization","subtypes":[],"props":{}},"SerializationError":{"name":"SerializationError","subtypes":[],"props":{"hash":""}},"StackHeightInstrumentation":{"name":"StackHeightInstrumentation","subtypes":[],"props":{}},"StackOverflow":{"name":"StackOverflow","subtypes":[],"props":{}},"TotalLogLengthExceeded":{"name":"TotalLogLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"Unreachable":{"name":"Unreachable","subtypes":[],"props":{}},"ValueLengthExceeded":{"name":"ValueLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"WasmTrap":{"name":"WasmTrap","subtypes":["Unreachable","IncorrectCallIndirectSignature","MemoryOutOfBounds","CallIndirectOOB","IllegalArithmetic","MisalignedAtomicAccess","BreakpointTrap","StackOverflow","GenericTrap"],"props":{}},"WasmUnknownError":{"name":"WasmUnknownError","subtypes":[],"props":{}},"WasmerCompileError":{"name":"WasmerCompileError","subtypes":[],"props":{"msg":""}},"WriteError":{"name":"WriteError","subtypes":[],"props":{}},"AccessKeyNotFound":{"name":"AccessKeyNotFound","subtypes":[],"props":{"account_id":"","public_key":""}},"AccountAlreadyExists":{"name":"AccountAlreadyExists","subtypes":[],"props":{"account_id":""}},"AccountDoesNotExist":{"name":"AccountDoesNotExist","subtypes":[],"props":{"account_id":""}},"ActionError":{"name":"ActionError","subtypes":["AccountAlreadyExists","AccountDoesNotExist","CreateAccountOnlyByRegistrar","CreateAccountNotAllowed","ActorNoPermission","DeleteKeyDoesNotExist","AddKeyAlreadyExists","DeleteAccountStaking","LackBalanceForState","TriesToUnstake","TriesToStake","InsufficientStake","FunctionCallError","NewReceiptValidationError","OnlyImplicitAccountCreationAllowed"],"props":{"index":""}},"ActionsValidationError":{"name":"ActionsValidationError","subtypes":["DeleteActionMustBeFinal","TotalPrepaidGasExceeded","TotalNumberOfActionsExceeded","AddKeyMethodNamesNumberOfBytesExceeded","AddKeyMethodNameLengthExceeded","IntegerOverflow","InvalidAccountId","ContractSizeExceeded","FunctionCallMethodNameLengthExceeded","FunctionCallArgumentsLengthExceeded","UnsuitableStakingKey","FunctionCallZeroAttachedGas"],"props":{}},"ActorNoPermission":{"name":"ActorNoPermission","subtypes":[],"props":{"account_id":"","actor_id":""}},"AddKeyAlreadyExists":{"name":"AddKeyAlreadyExists","subtypes":[],"props":{"account_id":"","public_key":""}},"AddKeyMethodNameLengthExceeded":{"name":"AddKeyMethodNameLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"AddKeyMethodNamesNumberOfBytesExceeded":{"name":"AddKeyMethodNamesNumberOfBytesExceeded","subtypes":[],"props":{"limit":"","total_number_of_bytes":""}},"BalanceMismatchError":{"name":"BalanceMismatchError","subtypes":[],"props":{"final_accounts_balance":"","final_postponed_receipts_balance":"","incoming_receipts_balance":"","incoming_validator_rewards":"","initial_accounts_balance":"","initial_postponed_receipts_balance":"","new_delayed_receipts_balance":"","other_burnt_amount":"","outgoing_receipts_balance":"","processed_delayed_receipts_balance":"","slashed_burnt_amount":"","tx_burnt_amount":""}},"CostOverflow":{"name":"CostOverflow","subtypes":[],"props":{}},"CreateAccountNotAllowed":{"name":"CreateAccountNotAllowed","subtypes":[],"props":{"account_id":"","predecessor_id":""}},"CreateAccountOnlyByRegistrar":{"name":"CreateAccountOnlyByRegistrar","subtypes":[],"props":{"account_id":"","predecessor_id":"","registrar_account_id":""}},"DeleteAccountStaking":{"name":"DeleteAccountStaking","subtypes":[],"props":{"account_id":""}},"DeleteActionMustBeFinal":{"name":"DeleteActionMustBeFinal","subtypes":[],"props":{}},"DeleteKeyDoesNotExist":{"name":"DeleteKeyDoesNotExist","subtypes":[],"props":{"account_id":"","public_key":""}},"DepositWithFunctionCall":{"name":"DepositWithFunctionCall","subtypes":[],"props":{}},"Expired":{"name":"Expired","subtypes":[],"props":{}},"FunctionCallArgumentsLengthExceeded":{"name":"FunctionCallArgumentsLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"FunctionCallMethodNameLengthExceeded":{"name":"FunctionCallMethodNameLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"FunctionCallZeroAttachedGas":{"name":"FunctionCallZeroAttachedGas","subtypes":[],"props":{}},"InsufficientStake":{"name":"InsufficientStake","subtypes":[],"props":{"account_id":"","minimum_stake":"","stake":""}},"InvalidAccessKeyError":{"name":"InvalidAccessKeyError","subtypes":["AccessKeyNotFound","ReceiverMismatch","MethodNameMismatch","RequiresFullAccess","NotEnoughAllowance","DepositWithFunctionCall"],"props":{}},"InvalidChain":{"name":"InvalidChain","subtypes":[],"props":{}},"InvalidDataReceiverId":{"name":"InvalidDataReceiverId","subtypes":[],"props":{"account_id":""}},"InvalidNonce":{"name":"InvalidNonce","subtypes":[],"props":{"ak_nonce":"","tx_nonce":""}},"InvalidPredecessorId":{"name":"InvalidPredecessorId","subtypes":[],"props":{"account_id":""}},"InvalidReceiverId":{"name":"InvalidReceiverId","subtypes":[],"props":{"account_id":""}},"InvalidSignature":{"name":"InvalidSignature","subtypes":[],"props":{}},"InvalidSignerId":{"name":"InvalidSignerId","subtypes":[],"props":{"account_id":""}},"InvalidTxError":{"name":"InvalidTxError","subtypes":["InvalidAccessKeyError","InvalidSignerId","SignerDoesNotExist","InvalidNonce","InvalidReceiverId","InvalidSignature","NotEnoughBalance","LackBalanceForState","CostOverflow","InvalidChain","Expired","ActionsValidation"],"props":{}},"LackBalanceForState":{"name":"LackBalanceForState","subtypes":[],"props":{"account_id":"","amount":""}},"MethodNameMismatch":{"name":"MethodNameMismatch","subtypes":[],"props":{"method_name":""}},"NotEnoughAllowance":{"name":"NotEnoughAllowance","subtypes":[],"props":{"account_id":"","allowance":"","cost":"","public_key":""}},"NotEnoughBalance":{"name":"NotEnoughBalance","subtypes":[],"props":{"balance":"","cost":"","signer_id":""}},"OnlyImplicitAccountCreationAllowed":{"name":"OnlyImplicitAccountCreationAllowed","subtypes":[],"props":{"account_id":""}},"ReceiptValidationError":{"name":"ReceiptValidationError","subtypes":["InvalidPredecessorId","InvalidReceiverId","InvalidSignerId","InvalidDataReceiverId","ReturnedValueLengthExceeded","NumberInputDataDependenciesExceeded","ActionsValidation"],"props":{}},"ReceiverMismatch":{"name":"ReceiverMismatch","subtypes":[],"props":{"ak_receiver":"","tx_receiver":""}},"RequiresFullAccess":{"name":"RequiresFullAccess","subtypes":[],"props":{}},"SignerDoesNotExist":{"name":"SignerDoesNotExist","subtypes":[],"props":{"signer_id":""}},"TotalNumberOfActionsExceeded":{"name":"TotalNumberOfActionsExceeded","subtypes":[],"props":{"limit":"","total_number_of_actions":""}},"TotalPrepaidGasExceeded":{"name":"TotalPrepaidGasExceeded","subtypes":[],"props":{"limit":"","total_prepaid_gas":""}},"TriesToStake":{"name":"TriesToStake","subtypes":[],"props":{"account_id":"","balance":"","locked":"","stake":""}},"TriesToUnstake":{"name":"TriesToUnstake","subtypes":[],"props":{"account_id":""}},"TxExecutionError":{"name":"TxExecutionError","subtypes":["ActionError","InvalidTxError"],"props":{}},"UnsuitableStakingKey":{"name":"UnsuitableStakingKey","subtypes":[],"props":{"public_key":""}},"Closed":{"name":"Closed","subtypes":[],"props":{}},"InternalError":{"name":"InternalError","subtypes":[],"props":{}},"ServerError":{"name":"ServerError","subtypes":["TxExecutionError","Timeout","Closed","InternalError"],"props":{}},"Timeout":{"name":"Timeout","subtypes":[],"props":{}}}}')
    },
    87930: function(A) {
        "use strict";
        A.exports = JSON.parse('{"GasLimitExceeded":"Exceeded the maximum amount of gas allowed to burn per contract","MethodEmptyName":"Method name is empty","WasmerCompileError":"Wasmer compilation error: {{msg}}","GuestPanic":"Smart contract panicked: {{panic_msg}}","Memory":"Error creating Wasm memory","GasExceeded":"Exceeded the prepaid gas","MethodUTF8Error":"Method name is not valid UTF8 string","BadUTF16":"String encoding is bad UTF-16 sequence","WasmTrap":"WebAssembly trap: {{msg}}","GasInstrumentation":"Gas instrumentation failed or contract has denied instructions.","InvalidPromiseIndex":"{{promise_idx}} does not correspond to existing promises","InvalidPromiseResultIndex":"Accessed invalid promise result index: {{result_idx}}","Deserialization":"Error happened while deserializing the module","MethodNotFound":"Contract method is not found","InvalidRegisterId":"Accessed invalid register id: {{register_id}}","InvalidReceiptIndex":"VM Logic returned an invalid receipt index: {{receipt_index}}","EmptyMethodName":"Method name is empty in contract call","CannotReturnJointPromise":"Returning joint promise is currently prohibited","StackHeightInstrumentation":"Stack instrumentation failed","CodeDoesNotExist":"Cannot find contract code for account {{account_id}}","MethodInvalidSignature":"Invalid method signature","IntegerOverflow":"Integer overflow happened during contract execution","MemoryAccessViolation":"MemoryAccessViolation","InvalidIteratorIndex":"Iterator index {{iterator_index}} does not exist","IteratorWasInvalidated":"Iterator {{iterator_index}} was invalidated after its creation by performing a mutable operation on trie","InvalidAccountId":"VM Logic returned an invalid account id","Serialization":"Error happened while serializing the module","CannotAppendActionToJointPromise":"Actions can only be appended to non-joint promise.","InternalMemoryDeclared":"Internal memory declaration has been found in the module","Instantiate":"Error happened during instantiation","ProhibitedInView":"{{method_name}} is not allowed in view calls","InvalidMethodName":"VM Logic returned an invalid method name","BadUTF8":"String encoding is bad UTF-8 sequence","BalanceExceeded":"Exceeded the account balance","LinkError":"Wasm contract link error: {{msg}}","InvalidPublicKey":"VM Logic provided an invalid public key","ActorNoPermission":"Actor {{actor_id}} doesn\'t have permission to account {{account_id}} to complete the action","LackBalanceForState":"The account {{account_id}} wouldn\'t have enough balance to cover storage, required to have {{amount}} yoctoNEAR more","ReceiverMismatch":"Wrong AccessKey used for transaction: transaction is sent to receiver_id={{tx_receiver}}, but is signed with function call access key that restricted to only use with receiver_id={{ak_receiver}}. Either change receiver_id in your transaction or switch to use a FullAccessKey.","CostOverflow":"Transaction gas or balance cost is too high","InvalidSignature":"Transaction is not signed with the given public key","AccessKeyNotFound":"Signer \\"{{account_id}}\\" doesn\'t have access key with the given public_key {{public_key}}","NotEnoughBalance":"Sender {{signer_id}} does not have enough balance {{#formatNear}}{{balance}}{{/formatNear}} for operation costing {{#formatNear}}{{cost}}{{/formatNear}}","NotEnoughAllowance":"Access Key {account_id}:{public_key} does not have enough balance {{#formatNear}}{{allowance}}{{/formatNear}} for transaction costing {{#formatNear}}{{cost}}{{/formatNear}}","Expired":"Transaction has expired","DeleteAccountStaking":"Account {{account_id}} is staking and can not be deleted","SignerDoesNotExist":"Signer {{signer_id}} does not exist","TriesToStake":"Account {{account_id}} tried to stake {{#formatNear}}{{stake}}{{/formatNear}}, but has staked {{#formatNear}}{{locked}}{{/formatNear}} and only has {{#formatNear}}{{balance}}{{/formatNear}}","AddKeyAlreadyExists":"The public key {{public_key}} is already used for an existing access key","InvalidSigner":"Invalid signer account ID {{signer_id}} according to requirements","CreateAccountNotAllowed":"The new account_id {{account_id}} can\'t be created by {{predecessor_id}}","RequiresFullAccess":"The transaction contains more then one action, but it was signed with an access key which allows transaction to apply only one specific action. To apply more then one actions TX must be signed with a full access key","TriesToUnstake":"Account {{account_id}} is not yet staked, but tried to unstake","InvalidNonce":"Transaction nonce {{tx_nonce}} must be larger than nonce of the used access key {{ak_nonce}}","AccountAlreadyExists":"Can\'t create a new account {{account_id}}, because it already exists","InvalidChain":"Transaction parent block hash doesn\'t belong to the current chain","AccountDoesNotExist":"Can\'t complete the action because account {{account_id}} doesn\'t exist","MethodNameMismatch":"Transaction method name {{method_name}} isn\'t allowed by the access key","DeleteAccountHasRent":"Account {{account_id}} can\'t be deleted. It has {{#formatNear}}{{balance}}{{/formatNear}}, which is enough to cover the rent","DeleteAccountHasEnoughBalance":"Account {{account_id}} can\'t be deleted. It has {{#formatNear}}{{balance}}{{/formatNear}}, which is enough to cover it\'s storage","InvalidReceiver":"Invalid receiver account ID {{receiver_id}} according to requirements","DeleteKeyDoesNotExist":"Account {{account_id}} tries to remove an access key that doesn\'t exist","Timeout":"Timeout exceeded","Closed":"Connection closed"}')
    },
    50855: function(A) {
        "use strict";
        A.exports = JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","306":"(Unused)","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Unordered Collection","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}')
    }
}]);

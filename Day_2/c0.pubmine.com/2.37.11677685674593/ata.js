! function(t) {
    function e(e) {
        for (var n, i, o = e[0], s = e[1], a = 0, u = []; a < o.length; a++) i = o[a], Object.prototype.hasOwnProperty.call(r, i) && r[i] && u.push(r[i][0]), r[i] = 0;
        for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
        for (c && c(e); u.length;) u.shift()()
    }
    var n = {},
        r = {
            0: 0
        };

    function i(e) {
        if (n[e]) return n[e].exports;
        var r = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.e = function(t) {
        var e = [],
            n = r[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var o = new Promise((function(e, i) {
                    n = r[t] = [e, i]
                }));
                e.push(n[2] = o);
                var s, a = document.createElement("script");
                a.charset = "utf-8", a.timeout = 120, i.nc && a.setAttribute("nonce", i.nc), a.src = function(t) {
                    return i.p + "" + ({}[t] || t) + ".js"
                }(t);
                var c = new Error;
                s = function(e) {
                    a.onerror = a.onload = null, clearTimeout(u);
                    var n = r[t];
                    if (0 !== n) {
                        if (n) {
                            var i = e && ("load" === e.type ? "missing" : e.type),
                                o = e && e.target && e.target.src;
                            c.message = "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")", c.name = "ChunkLoadError", c.type = i, c.request = o, n[1](c)
                        }
                        r[t] = void 0
                    }
                };
                var u = setTimeout((function() {
                    s({
                        type: "timeout",
                        target: a
                    })
                }), 12e4);
                a.onerror = a.onload = s, document.head.appendChild(a)
            }
        return Promise.all(e)
    }, i.m = t, i.c = n, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "https://c0.pubmine.com/2.37.11677685674593/", i.oe = function(t) {
        throw console.error(t), t
    };
    var o = window.wpATAJsonpFunction = window.wpATAJsonpFunction || [],
        s = o.push.bind(o);
    o.push = e, o = o.slice();
    for (var a = 0; a < o.length; a++) e(o[a]);
    var c = s;
    i(i.s = 207)
}([function(t, e) {
    t.exports = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
}, function(t, e) {
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    t.exports = function(t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), t
    }
}, function(t, e) {
    function n(e) {
        return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, n(e)
    }
    t.exports = n
}, function(t, e) {
    t.exports = function(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(176);
    t.exports = function(t) {
        var e = "";
        return Object.keys(t).forEach((function(n) {
            return e += r(n) + ":" + t[n] + ";"
        })), e
    }
}, function(t, e, n) {
    var r = n(92);
    t.exports = function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && r(t, e)
    }
}, function(t, e, n) {
    var r = n(16),
        i = n(4);
    t.exports = function(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? i(t) : e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n.n(r),
        o = n(2),
        s = n.n(o),
        a = n(0),
        c = n.n(a),
        u = function() {
            function t() {
                i()(this, t)
            }
            return s()(t, null, [{
                key: "configure",
                value: function(e) {
                    t.config = e
                }
            }, {
                key: "error",
                value: function(t) {
                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e.toString = function() {
                        return t.toString()
                    }, e
                }((function(t, e) {
                    this.config && this.config.onError ? this.config.onError(t, e) : window.console && console.log(t, e)
                }))
            }]), t
        }();
    c()(u, "config", void 0), e.a = u
}, function(t, e, n) {
    var r = n(169),
        i = n(170),
        o = n(123),
        s = n(171);
    t.exports = function(t, e) {
        return r(t) || i(t, e) || o(t, e) || s()
    }
}, function(t, e, n) {
    t.exports = n(91)
}, function(t, e, n) {
    "use strict";
    var r = n(38),
        i = n(18),
        o = n(22);
    t.exports = function(t, e, n) {
        if (!r(t)) return n;
        if (!i(e)) return n;
        try {
            var s = e.split(".").reduce((function(t, e) {
                return t[e]
            }), t);
            return o(s) ? n : s
        } catch (t) {
            return n
        }
    }
}, function(t, e) {
    function n(t, e, n, r, i, o, s) {
        try {
            var a = t[o](s),
                c = a.value
        } catch (t) {
            return void n(t)
        }
        a.done ? e(c) : Promise.resolve(c).then(r, i)
    }
    t.exports = function(t) {
        return function() {
            var e = this,
                r = arguments;
            return new Promise((function(i, o) {
                var s = t.apply(e, r);

                function a(t) {
                    n(s, i, o, a, c, "next", t)
                }

                function c(t) {
                    n(s, i, o, a, c, "throw", t)
                }
                a(void 0)
            }))
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(14);
    t.exports = function(t, e) {
        var n, i = t.uri,
            o = t.timeout,
            s = new Image,
            a = function() {
                clearTimeout(n), s.onerror = null, s.onload = null, s.onerror = null
            };
        o && (n = window.setTimeout((function() {
            a(), r(e) && e("timeout")
        }), o)), s.onload = function() {
            a(), r(e) && e(void 0)
        }, s.onerror = function() {
            a(), r(e) && e("error")
        }, s.src = i
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return "function" == typeof t
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function() {}
}, function(t, e) {
    function n(e) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function(t) {
            return typeof t
        } : t.exports = n = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, n(e)
    }
    t.exports = n
}, function(t, e, n) {
    (function(e) {
        var n = function(t) {
            return t && t.Math == Math && t
        };
        t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")()
    }).call(this, n(98))
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return "string" == typeof t
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return "string" == typeof t && t.length > 0
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        return t.indexOf(e) > -1
    }
}, function(t, e, n) {
    var r = n(17),
        i = n(99),
        o = n(26),
        s = n(78),
        a = n(103),
        c = n(142),
        u = i("wks"),
        f = r.Symbol,
        l = c ? f : f && f.withoutSetter || s;
    t.exports = function(t) {
        return o(u, t) || (a && o(f, t) ? u[t] = f[t] : u[t] = l("Symbol." + t)), u[t]
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return void 0 === t
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    var r = n(172),
        i = n(173),
        o = n(123),
        s = n(174);
    t.exports = function(t) {
        return r(t) || i(t) || o(t) || s()
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "c", (function() {
        return d
    })), n.d(e, "a", (function() {
        return p
    })), n.d(e, "b", (function() {
        return h
    }));
    var r = n(27),
        i = n.n(r),
        o = n(11),
        s = n.n(o),
        a = n(14),
        c = n.n(a),
        u = n(8);

    function f(t) {
        var e = Date.now();
        return function(t) {
            return new i.a((function(e, n) {
                var r;
                window.setTimeout((function() {
                        clearTimeout(r), n && n("cmp ping timeout")
                    }), t),
                    function t() {
                        window.__tcfapi ? window.__tcfapi("ping", 2, (function(i, o) {
                            o && i.cmpLoaded ? e() : o ? r = window.setTimeout(t, 50) : n && n("cmp ping returned error with data: ".concat(JSON.stringify(i)))
                        })) : n && n("CMP is not defined")
                    }()
            }))
        }(t).then((function() {
            var n = Date.now() - e,
                r = t - n;
            return new i.a((function(t, e) {
                window.__tcfapi ? (window.__tcfapi("getTCData", 2, (function(n, r) {
                    r ? t(n) : e && e("cmp getTCData returned error with data: ".concat(JSON.stringify(n)))
                })), setTimeout((function() {
                    e && e("cmp getTCData timeout")
                }), r)) : e && e("CMP is not defined")
            }))
        }))
    }

    function l() {
        var t = s()(window, "__ATA_PP.gdpr_applies");
        return "boolean" == typeof t ? {
            gdprApplies: t
        } : {}
    }

    function d(t, e) {
        window.__tcfapi ? window.__tcfapi("addEventListener", 2, (function(n, r) {
            n.eventStatus && n.eventStatus === t && e(n, r)
        })) : u.a.error("Cannot set listener to CMP events. CMP is not defined")
    }

    function p() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500;
        return f(t).catch((function(t) {
            return u.a.error(t), l()
        }))
    }

    function h() {
        return c()(window.__tcfapi)
    }
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e, n) {
    "use strict";
    var r, i = n(56),
        o = n(14);
    ! function(t) {
        t.REJECTED = "rejected", t.RESOLVED = "resolved", t.PENDING = "pending"
    }(r || (r = {}));
    var s = function() {
        function t(t, e) {
            var n = this;
            this.status = r.PENDING, this.emitter = new i, this.onFulfilled = function(t) {
                n.status === r.PENDING && (n.status = r.RESOLVED, n.emitter.emit(r.RESOLVED, [t]))
            }, this.onRejected = function(t) {
                n.status === r.PENDING && (n.status = r.REJECTED, n.emitter.emit(r.REJECTED, [t]))
            };
            var o = function() {
                return t(n.onFulfilled, n.onRejected)
            };
            e ? o() : setTimeout(o, 0)
        }
        return t.resolve = function(e) {
            return new t((function(t) {
                t(e)
            }))
        }, t.reject = function(e) {
            return new t((function(t, n) {
                n(e)
            }))
        }, t.prototype.then = function(e, n) {
            var i = this;
            return new t((function(s, a) {
                i.emitter.on(r.RESOLVED, (function(n) {
                    if (o(e)) {
                        var r = e(n);
                        r instanceof t ? r.then(s, a) : s(r)
                    } else s(n)
                })), i.emitter.on(r.REJECTED, (function(e) {
                    if (o(n)) {
                        var r = n(e);
                        r instanceof t ? r.then(s, a) : s(r)
                    } else a(e)
                }))
            }), !0)
        }, t.prototype.catch = function(e) {
            var n = this;
            return new t((function(i) {
                o(e) && n.emitter.on(r.REJECTED, (function(n) {
                    var r = e(n);
                    r instanceof t ? r.then(i) : i(r)
                })), n.emitter.on(r.RESOLVED, i)
            }), !0)
        }, t
    }();
    t.exports = s
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, n) {
    var r = n(23);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(String(t) + " is not an object");
        return t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(19);
    t.exports = function(t, e) {
        if (void 0 === e && (e = window), r(t)) {
            var n = e.document,
                i = n.createElement("style");
            return n.body.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(n.createTextNode(t)), i
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        for (var n = 0, r = t.length; n < r; n++) {
            var i = t[n];
            if (e(i, n)) return i
        }
        return null
    }
}, function(t, e, n) {
    var r = n(35),
        i = n(101),
        o = n(29),
        s = n(102),
        a = Object.defineProperty;
    e.f = r ? a : function(t, e, n) {
        if (o(t), e = s(e, !0), o(n), i) try {
            return a(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(15),
        i = n(14);
    t.exports = function(t, e, n) {
        var o, s, a = document.createElement("script"),
            c = e instanceof HTMLElement && e;
        if (o = i(e) ? e : i(n) ? n : r, a.src = t, a.onload = function() {
                o(void 0)
            }, a.onerror = function() {
                o("error")
            }, c) s = c;
        else {
            var u = document.getElementsByTagName("head");
            s = u && 0 !== u.length ? u[0] : document.documentElement
        }
        s.appendChild(a)
    }
}, function(t, e, n) {
    var r = n(35),
        i = n(32),
        o = n(77);
    t.exports = r ? function(t, e, n) {
        return i.f(t, e, o(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var r = n(28);
    t.exports = !r((function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }))
}, function(t, e, n) {
    var r = n(17),
        i = n(34),
        o = n(26),
        s = n(75),
        a = n(79),
        c = n(37),
        u = c.get,
        f = c.enforce,
        l = String(String).split("String");
    (t.exports = function(t, e, n, a) {
        var c = !!a && !!a.unsafe,
            u = !!a && !!a.enumerable,
            d = !!a && !!a.noTargetGet;
        "function" == typeof n && ("string" != typeof e || o(n, "name") || i(n, "name", e), f(n).source = l.join("string" == typeof e ? e : "")), t !== r ? (c ? !d && t[e] && (u = !0) : delete t[e], u ? t[e] = n : i(t, e, n)) : u ? t[e] = n : s(e, n)
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && u(this).source || a(this)
    }))
}, function(t, e, n) {
    var r, i, o, s = n(104),
        a = n(17),
        c = n(23),
        u = n(34),
        f = n(26),
        l = n(80),
        d = n(60),
        p = a.WeakMap;
    if (s) {
        var h = new p,
            v = h.get,
            y = h.has,
            g = h.set;
        r = function(t, e) {
            return g.call(h, t, e), e
        }, i = function(t) {
            return v.call(h, t) || {}
        }, o = function(t) {
            return y.call(h, t)
        }
    } else {
        var m = l("state");
        d[m] = !0, r = function(t, e) {
            return u(t, m, e), e
        }, i = function(t) {
            return f(t, m) ? t[m] : {}
        }, o = function(t) {
            return f(t, m)
        }
    }
    t.exports = {
        set: r,
        get: i,
        has: o,
        enforce: function(t) {
            return o(t) ? i(t) : r(t, {})
        },
        getterFor: function(t) {
            return function(e) {
                var n;
                if (!c(e) || (n = i(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return n
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        var e = typeof t;
        return "object" === e && null != t || "function" === e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(20),
        i = n(94);
    t.exports = function(t, e) {
        var n = i(e);
        return 0 === n.length ? t : t + (r(t, "?") ? "&" : "?") + n
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return a
    }));
    var r = n(27),
        i = n.n(r),
        o = n(14),
        s = n.n(o);

    function a() {
        return new i.a((function(t) {
            window.__uspapi && s()(window.__uspapi) ? (window.__uspapi("getUSPData", 1, (function(e, n) {
                n && t(e.uspString), t(void 0)
            })), setTimeout((function() {
                return t(void 0)
            }), 100)) : t(void 0)
        }))
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e, n) {
    var r = n(62),
        i = n(17),
        o = function(t) {
            return "function" == typeof t ? t : void 0
        };
    t.exports = function(t, e) {
        return arguments.length < 2 ? o(r[t]) || o(i[t]) : r[t] && r[t][e] || i[t] && i[t][e]
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return "number" == typeof t
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return [].slice.call(t)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(20);
    t.exports = function(t, e, n) {
        var i = e + "=" + n;
        return t + (r(t, "?") ? "&" : "?") + i
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return l
    }));
    var r = n(1),
        i = n.n(r),
        o = n(2),
        s = n.n(o),
        a = n(0),
        c = n.n(a),
        u = n(20),
        f = n.n(u),
        l = "hbInSafeFrameRender",
        d = function() {
            function t() {
                i()(this, t), c()(this, "isSet", !1)
            }
            return s()(t, [{
                key: "isListenerSet",
                value: function() {
                    return this.isSet
                }
            }, {
                key: "setupListener",
                value: function() {
                    var t = this;
                    window.addEventListener("message", (function(e) {
                        t.isSet = !0, t.messageHandler(e)
                    }))
                }
            }, {
                key: "messageHandler",
                value: function(t) {
                    var e = t.data,
                        n = t.source,
                        r = t.origin;
                    if (f()("https://c0.pubmine.com", r)) try {
                        var i = JSON.parse(e),
                            o = i.message,
                            s = i.bidId;
                        if (o === l) {
                            var a = window.__ATA_HB;
                            if (a) {
                                var c = a.getCreativeByBidId && a.getCreativeByBidId(s),
                                    u = JSON.stringify({
                                        creative: c,
                                        message: l
                                    });
                                n.postMessage(u, "*")
                            }
                        }
                    } catch (t) {}
                }
            }]), t
        }();
    e.b = new d
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return function() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return new Promise((function(n, r) {
                t.apply(null, e.concat([function(t, e) {
                    t ? r(t) : n(e)
                }]))
            }))
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = Array.isArray
}, function(t, e, n) {
    "use strict";
    var r = n(55);
    t.exports = function(t) {
        return !r(t) && "object" == typeof t && Object.keys(t).length > 0
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e, n) {
    var r = n(17),
        i = n(84).f,
        o = n(34),
        s = n(36),
        a = n(75),
        c = n(146),
        u = n(87);
    t.exports = function(t, e) {
        var n, f, l, d, p, h = t.target,
            v = t.global,
            y = t.stat;
        if (n = v ? r : y ? r[h] || a(h, {}) : (r[h] || {}).prototype)
            for (f in e) {
                if (d = e[f], l = t.noTargetGet ? (p = i(n, f)) && p.value : n[f], !u(v ? f : h + (y ? "." : "#") + f, t.forced) && void 0 !== l) {
                    if (typeof d == typeof l) continue;
                    c(d, l)
                }(t.sham || l && l.sham) && o(d, "sham", !0), s(n, f, d, t)
            }
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t
    }
}, function(t, e, n) {
    var r = n(29),
        i = n(161),
        o = n(85),
        s = n(66),
        a = n(162),
        c = n(163),
        u = function(t, e) {
            this.stopped = t, this.result = e
        };
    (t.exports = function(t, e, n, f, l) {
        var d, p, h, v, y, g, m, b = s(e, n, f ? 2 : 1);
        if (l) d = t;
        else {
            if ("function" != typeof(p = a(t))) throw TypeError("Target is not iterable");
            if (i(p)) {
                for (h = 0, v = o(t.length); v > h; h++)
                    if ((y = f ? b(r(m = t[h])[0], m[1]) : b(t[h])) && y instanceof u) return y;
                return new u(!1)
            }
            d = p.call(t)
        }
        for (g = d.next; !(m = g.call(d)).done;)
            if ("object" == typeof(y = c(d, b, m.value, f)) && y && y instanceof u) return y;
        return new u(!1)
    }).stop = function(t) {
        return new u(!0, t)
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return null === t
    }
}, function(t, e, n) {
    "use strict";
    var r = function() {
        function t() {
            this.events = {}
        }
        return t.prototype.on = function(t, e) {
            if (this.events[t]) {
                if (-1 !== (n = this.events[t]).indexOf(e)) throw new Error('This handler has already been subcribed for "' + t + '" event');
                n.push(e)
            } else {
                var n;
                (n = []).push(e), this.events[t] = n
            }
        }, t.prototype.off = function(t, e) {
            var n = this.events[t],
                r = n.indexOf(e); - 1 !== r && n.splice(r, 1)
        }, t.prototype.emit = function(t, e) {
            void 0 === e && (e = []);
            var n = this.events[t];
            n && n.map((function(t) {
                e ? t.apply(void 0, e) : t()
            }))
        }, t
    }();
    t.exports = r
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        return -1 !== t.indexOf(e)
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return o
    }));
    var r = n(18),
        i = n.n(r);

    function o(t) {
        var e = t.gdprApplies,
            n = t.tcString;
        return {
            gdpr: "boolean" == typeof e ? Number(e) : void 0,
            gdpr_consent: i()(n) ? n : void 0
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(55),
        i = n(22);
    t.exports = function(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        if (r(t) || i(t)) throw new TypeError("Cannot convert undefined or null to object");
        for (var o = Object(t), s = 1; s < arguments.length; s++) {
            var a = arguments[s];
            if (null != a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (o[c] = a[c])
        }
        return o
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    var r = n(107),
        i = n(82);
    t.exports = function(t) {
        return r(i(t))
    }
}, function(t, e, n) {
    var r = n(17);
    t.exports = r
}, function(t, e, n) {
    var r = n(32).f,
        i = n(26),
        o = n(21)("toStringTag");
    t.exports = function(t, e, n) {
        t && !i(t = n ? t : t.prototype, o) && r(t, o, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, n) {
    var r = n(36);
    t.exports = function(t, e, n) {
        for (var i in e) r(t, i, e[i], n);
        return t
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return t
    }
}, function(t, e, n) {
    var r = n(53);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 0:
                return function() {
                    return t.call(e)
                };
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return t.call(e, n, r, i)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e, n) {
    var r = n(60),
        i = n(23),
        o = n(26),
        s = n(32).f,
        a = n(78),
        c = n(194),
        u = a("meta"),
        f = 0,
        l = Object.isExtensible || function() {
            return !0
        },
        d = function(t) {
            s(t, u, {
                value: {
                    objectID: "O" + ++f,
                    weakData: {}
                }
            })
        },
        p = t.exports = {
            REQUIRED: !1,
            fastKey: function(t, e) {
                if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!o(t, u)) {
                    if (!l(t)) return "F";
                    if (!e) return "E";
                    d(t)
                }
                return t[u].objectID
            },
            getWeakData: function(t, e) {
                if (!o(t, u)) {
                    if (!l(t)) return !0;
                    if (!e) return !1;
                    d(t)
                }
                return t[u].weakData
            },
            onFreeze: function(t) {
                return c && p.REQUIRED && l(t) && !o(t, u) && d(t), t
            }
        };
    r[u] = !0
}, function(t, e, n) {
    var r = n(3),
        i = n(92),
        o = n(177),
        s = n(178);

    function a(e) {
        var n = "function" == typeof Map ? new Map : void 0;
        return t.exports = a = function(t) {
            if (null === t || !o(t)) return t;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(t)) return n.get(t);
                n.set(t, e)
            }

            function e() {
                return s(t, arguments, r(this).constructor)
            }
            return e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), i(e, t)
        }, a(e)
    }
    t.exports = a
}, function(t, e, n) {
    "use strict";
    var r = n(31),
        i = n(20);
    t.exports = function(t, e) {
        void 0 === e && (e = document.cookie);
        var n = e.split("; "),
            o = r(n, (function(e) {
                return i(e, t + "=")
            }));
        return o ? o.split("=")[1] : ""
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t.length - 1;
        return function() {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return t.reduceRight((function(t, r, i) {
                return i === n ? r.apply(void 0, e) : r(t)
            }), void 0)
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return "boolean" == typeof t
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n) {
        var r = new RegExp(e, "g");
        return t.replace(r, n)
    }
}, function(t, e, n) {
    var r = n(74),
        i = n(36),
        o = n(143);
    r || i(Object.prototype, "toString", o, {
        unsafe: !0
    })
}, function(t, e, n) {
    var r = {};
    r[n(21)("toStringTag")] = "z", t.exports = "[object z]" === String(r)
}, function(t, e, n) {
    var r = n(17),
        i = n(34);
    t.exports = function(t, e) {
        try {
            i(r, t, e)
        } catch (n) {
            r[t] = e
        }
        return e
    }
}, function(t, e, n) {
    var r = n(17),
        i = n(23),
        o = r.document,
        s = i(o) && i(o.createElement);
    t.exports = function(t) {
        return s ? o.createElement(t) : {}
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    var n = 0,
        r = Math.random();
    t.exports = function(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36)
    }
}, function(t, e, n) {
    var r = n(100),
        i = Function.toString;
    "function" != typeof r.inspectSource && (r.inspectSource = function(t) {
        return i.call(t)
    }), t.exports = r.inspectSource
}, function(t, e, n) {
    var r = n(99),
        i = n(78),
        o = r("keys");
    t.exports = function(t) {
        return o[t] || (o[t] = i(t))
    }
}, function(t, e) {
    var n = Math.ceil,
        r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(51),
        i = n(152),
        o = n(110),
        s = n(113),
        a = n(63),
        c = n(34),
        u = n(36),
        f = n(21),
        l = n(50),
        d = n(52),
        p = n(109),
        h = p.IteratorPrototype,
        v = p.BUGGY_SAFARI_ITERATORS,
        y = f("iterator"),
        g = function() {
            return this
        };
    t.exports = function(t, e, n, f, p, m, b) {
        i(n, e, f);
        var w, x, S, k = function(t) {
                if (t === p && R) return R;
                if (!v && t in A) return A[t];
                switch (t) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this)
                }
            },
            O = e + " Iterator",
            E = !1,
            A = t.prototype,
            P = A[y] || A["@@iterator"] || p && A[p],
            R = !v && P || k(p),
            C = "Array" == e && A.entries || P;
        if (C && (w = o(C.call(new t)), h !== Object.prototype && w.next && (l || o(w) === h || (s ? s(w, h) : "function" != typeof w[y] && c(w, y, g)), a(w, O, !0, !0), l && (d[O] = g))), "values" == p && P && "values" !== P.name && (E = !0, R = function() {
                return P.call(this)
            }), l && !b || A[y] === R || c(A, y, R), d[e] = R, p)
            if (x = {
                    values: k("values"),
                    keys: m ? R : k("keys"),
                    entries: k("entries")
                }, b)
                for (S in x)(v || E || !(S in A)) && u(A, S, x[S]);
            else r({
                target: e,
                proto: !0,
                forced: v || E
            }, x);
        return x
    }
}, function(t, e, n) {
    var r = n(35),
        i = n(145),
        o = n(77),
        s = n(61),
        a = n(102),
        c = n(26),
        u = n(101),
        f = Object.getOwnPropertyDescriptor;
    e.f = r ? f : function(t, e) {
        if (t = s(t), e = a(e, !0), u) try {
            return f(t, e)
        } catch (t) {}
        if (c(t, e)) return o(!i.f.call(t, e), t[e])
    }
}, function(t, e, n) {
    var r = n(81),
        i = Math.min;
    t.exports = function(t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
    }
}, function(t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, e, n) {
    var r = n(28),
        i = /#|\.prototype\./,
        o = function(t, e) {
            var n = a[s(t)];
            return n == u || n != c && ("function" == typeof e ? r(e) : !!e)
        },
        s = o.normalize = function(t) {
            return String(t).replace(i, ".").toLowerCase()
        },
        a = o.data = {},
        c = o.NATIVE = "N",
        u = o.POLYFILL = "P";
    t.exports = o
}, function(t, e, n) {
    var r, i = n(29),
        o = n(154),
        s = n(86),
        a = n(60),
        c = n(112),
        u = n(76),
        f = n(80),
        l = f("IE_PROTO"),
        d = function() {},
        p = function(t) {
            return "<script>" + t + "<\/script>"
        },
        h = function() {
            try {
                r = document.domain && new ActiveXObject("htmlfile")
            } catch (t) {}
            var t, e;
            h = r ? function(t) {
                t.write(p("")), t.close();
                var e = t.parentWindow.Object;
                return t = null, e
            }(r) : ((e = u("iframe")).style.display = "none", c.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(p("document.F=Object")), t.close(), t.F);
            for (var n = s.length; n--;) delete h.prototype[s[n]];
            return h()
        };
    a[l] = !0, t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (d.prototype = i(t), n = new d, d.prototype = null, n[l] = t) : n = h(), void 0 === e ? n : o(n, e)
    }
}, function(t, e, n) {
    var r = n(17),
        i = n(157),
        o = n(158),
        s = n(34),
        a = n(21),
        c = a("iterator"),
        u = a("toStringTag"),
        f = o.values;
    for (var l in i) {
        var d = r[l],
            p = d && d.prototype;
        if (p) {
            if (p[c] !== f) try {
                s(p, c, f)
            } catch (t) {
                p[c] = f
            }
            if (p[u] || s(p, u, l), i[l])
                for (var h in o)
                    if (p[h] !== o[h]) try {
                        s(p, h, o[h])
                    } catch (t) {
                        p[h] = o[h]
                    }
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(53),
        i = function(t) {
            var e, n;
            this.promise = new t((function(t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = r
            })), this.resolve = r(e), this.reject = r(n)
        };
    t.exports.f = function(t) {
        return new i(t)
    }
}, function(t, e, n) {
    var r = function(t) {
        "use strict";
        var e = Object.prototype,
            n = e.hasOwnProperty,
            r = "function" == typeof Symbol ? Symbol : {},
            i = r.iterator || "@@iterator",
            o = r.asyncIterator || "@@asyncIterator",
            s = r.toStringTag || "@@toStringTag";

        function a(t, e, n, r) {
            var i = e && e.prototype instanceof f ? e : f,
                o = Object.create(i.prototype),
                s = new S(r || []);
            return o._invoke = function(t, e, n) {
                var r = "suspendedStart";
                return function(i, o) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === i) throw o;
                        return O()
                    }
                    for (n.method = i, n.arg = o;;) {
                        var s = n.delegate;
                        if (s) {
                            var a = b(s, n);
                            if (a) {
                                if (a === u) continue;
                                return a
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var f = c(t, e, n);
                        if ("normal" === f.type) {
                            if (r = n.done ? "completed" : "suspendedYield", f.arg === u) continue;
                            return {
                                value: f.arg,
                                done: n.done
                            }
                        }
                        "throw" === f.type && (r = "completed", n.method = "throw", n.arg = f.arg)
                    }
                }
            }(t, n, s), o
        }

        function c(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        t.wrap = a;
        var u = {};

        function f() {}

        function l() {}

        function d() {}
        var p = {};
        p[i] = function() {
            return this
        };
        var h = Object.getPrototypeOf,
            v = h && h(h(k([])));
        v && v !== e && n.call(v, i) && (p = v);
        var y = d.prototype = f.prototype = Object.create(p);

        function g(t) {
            ["next", "throw", "return"].forEach((function(e) {
                t[e] = function(t) {
                    return this._invoke(e, t)
                }
            }))
        }

        function m(t, e) {
            var r;
            this._invoke = function(i, o) {
                function s() {
                    return new e((function(r, s) {
                        ! function r(i, o, s, a) {
                            var u = c(t[i], t, o);
                            if ("throw" !== u.type) {
                                var f = u.arg,
                                    l = f.value;
                                return l && "object" == typeof l && n.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                    r("next", t, s, a)
                                }), (function(t) {
                                    r("throw", t, s, a)
                                })) : e.resolve(l).then((function(t) {
                                    f.value = t, s(f)
                                }), (function(t) {
                                    return r("throw", t, s, a)
                                }))
                            }
                            a(u.arg)
                        }(i, o, r, s)
                    }))
                }
                return r = r ? r.then(s, s) : s()
            }
        }

        function b(t, e) {
            var n = t.iterator[e.method];
            if (void 0 === n) {
                if (e.delegate = null, "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return u;
                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return u
            }
            var r = c(n, t.iterator, e.arg);
            if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, u;
            var i = r.arg;
            return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
        }

        function w(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function x(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function S(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(w, this), this.reset(!0)
        }

        function k(t) {
            if (t) {
                var e = t[i];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var r = -1,
                        o = function e() {
                            for (; ++r < t.length;)
                                if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e
                        };
                    return o.next = o
                }
            }
            return {
                next: O
            }
        }

        function O() {
            return {
                value: void 0,
                done: !0
            }
        }
        return l.prototype = y.constructor = d, d.constructor = l, d[s] = l.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === l || "GeneratorFunction" === (e.displayName || e.name))
        }, t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, s in t || (t[s] = "GeneratorFunction")), t.prototype = Object.create(y), t
        }, t.awrap = function(t) {
            return {
                __await: t
            }
        }, g(m.prototype), m.prototype[o] = function() {
            return this
        }, t.AsyncIterator = m, t.async = function(e, n, r, i, o) {
            void 0 === o && (o = Promise);
            var s = new m(a(e, n, r, i), o);
            return t.isGeneratorFunction(n) ? s : s.next().then((function(t) {
                return t.done ? t.value : s.next()
            }))
        }, g(y), y[s] = "Generator", y[i] = function() {
            return this
        }, y.toString = function() {
            return "[object Generator]"
        }, t.keys = function(t) {
            var e = [];
            for (var n in t) e.push(n);
            return e.reverse(),
                function n() {
                    for (; e.length;) {
                        var r = e.pop();
                        if (r in t) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
        }, t.values = k, S.prototype = {
            constructor: S,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                    for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var e = this;

                function r(n, r) {
                    return s.type = "throw", s.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var o = this.tryEntries[i],
                        s = o.completion;
                    if ("root" === o.tryLoc) return r("end");
                    if (o.tryLoc <= this.prev) {
                        var a = n.call(o, "catchLoc"),
                            c = n.call(o, "finallyLoc");
                        if (a && c) {
                            if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                        } else if (a) {
                            if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                        } else {
                            if (!c) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var i = this.tryEntries[r];
                    if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                        var o = i;
                        break
                    }
                }
                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                var s = o ? o.completion : {};
                return s.type = t, s.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(s)
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), x(n), u
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var i = r.arg;
                            x(n)
                        }
                        return i
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, e, n) {
                return this.delegate = {
                    iterator: k(t),
                    resultName: e,
                    nextLoc: n
                }, "next" === this.method && (this.arg = void 0), u
            }
        }, t
    }(t.exports);
    try {
        regeneratorRuntime = r
    } catch (t) {
        Function("r", "regeneratorRuntime = r")(r)
    }
}, function(t, e) {
    function n(e, r) {
        return t.exports = n = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, n(e, r)
    }
    t.exports = n
}, function(t, e) {
    t.exports = function(t) {
        var e = [];
        return e.toString = function() {
            return this.map((function(e) {
                var n = function(t, e) {
                    var n = t[1] || "",
                        r = t[3];
                    if (!r) return n;
                    if (e && "function" == typeof btoa) {
                        var i = (s = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
                            o = r.sources.map((function(t) {
                                return "/*# sourceURL=" + r.sourceRoot + t + " */"
                            }));
                        return [n].concat(o).concat([i]).join("\n")
                    }
                    var s;
                    return [n].join("\n")
                }(e, t);
                return e[2] ? "@media " + e[2] + "{" + n + "}" : n
            })).join("")
        }, e.i = function(t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                "number" == typeof o && (r[o] = !0)
            }
            for (i = 0; i < t.length; i++) {
                var s = t[i];
                "number" == typeof s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), e.push(s))
            }
        }, e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(55),
        i = n(22);
    t.exports = function(t) {
        var e = Object.keys(t),
            n = [];
        return e.forEach((function(e) {
            var o = t[e];
            r(o) || i(o) || n.push(e + "=" + encodeURIComponent(t[e]))
        })), n.join("&")
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function() {
        var t = 0;
        return function() {
            return "" + t++
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return t + "px"
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        var e = Object.keys(t),
            n = [];
        e.forEach((function(e) {
            var r = t[e];
            void 0 !== r && n.push(e + '="' + r + '"')
        }));
        var r = "" + n.join(" ");
        return r ? " " + r : ""
    }
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    var r = n(50),
        i = n(100);
    (t.exports = function(t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.6.5",
        mode: r ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e, n) {
    var r = n(17),
        i = n(75),
        o = r["__core-js_shared__"] || i("__core-js_shared__", {});
    t.exports = o
}, function(t, e, n) {
    var r = n(35),
        i = n(28),
        o = n(76);
    t.exports = !r && !i((function() {
        return 7 != Object.defineProperty(o("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, n) {
    var r = n(23);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
        if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e, n) {
    var r = n(28);
    t.exports = !!Object.getOwnPropertySymbols && !r((function() {
        return !String(Symbol())
    }))
}, function(t, e, n) {
    var r = n(17),
        i = n(79),
        o = r.WeakMap;
    t.exports = "function" == typeof o && /native code/.test(i(o))
}, function(t, e, n) {
    var r = n(74),
        i = n(41),
        o = n(21)("toStringTag"),
        s = "Arguments" == i(function() {
            return arguments
        }());
    t.exports = r ? i : function(t) {
        var e, n, r;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), o)) ? n : s ? i(e) : "Object" == (r = i(e)) && "function" == typeof e.callee ? "Arguments" : r
    }
}, function(t, e, n) {
    "use strict";
    var r = n(144).charAt,
        i = n(37),
        o = n(83),
        s = i.set,
        a = i.getterFor("String Iterator");
    o(String, "String", (function(t) {
        s(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
        })
    }), (function() {
        var t, e = a(this),
            n = e.string,
            i = e.index;
        return i >= n.length ? {
            value: void 0,
            done: !0
        } : (t = r(n, i), e.index += t.length, {
            value: t,
            done: !1
        })
    }))
}, function(t, e, n) {
    var r = n(28),
        i = n(41),
        o = "".split;
    t.exports = r((function() {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function(t) {
        return "String" == i(t) ? o.call(t, "") : Object(t)
    } : Object
}, function(t, e, n) {
    var r = n(26),
        i = n(61),
        o = n(149).indexOf,
        s = n(60);
    t.exports = function(t, e) {
        var n, a = i(t),
            c = 0,
            u = [];
        for (n in a) !r(s, n) && r(a, n) && u.push(n);
        for (; e.length > c;) r(a, n = e[c++]) && (~o(u, n) || u.push(n));
        return u
    }
}, function(t, e, n) {
    "use strict";
    var r, i, o, s = n(110),
        a = n(34),
        c = n(26),
        u = n(21),
        f = n(50),
        l = u("iterator"),
        d = !1;
    [].keys && ("next" in (o = [].keys()) ? (i = s(s(o))) !== Object.prototype && (r = i) : d = !0), null == r && (r = {}), f || c(r, l) || a(r, l, (function() {
        return this
    })), t.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: d
    }
}, function(t, e, n) {
    var r = n(26),
        i = n(111),
        o = n(80),
        s = n(153),
        a = o("IE_PROTO"),
        c = Object.prototype;
    t.exports = s ? Object.getPrototypeOf : function(t) {
        return t = i(t), r(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null
    }
}, function(t, e, n) {
    var r = n(82);
    t.exports = function(t) {
        return Object(r(t))
    }
}, function(t, e, n) {
    var r = n(42);
    t.exports = r("document", "documentElement")
}, function(t, e, n) {
    var r = n(29),
        i = n(156);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t, e = !1,
            n = {};
        try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array
        } catch (t) {}
        return function(n, o) {
            return r(n), i(o), e ? t.call(n, o) : n.__proto__ = o, n
        }
    }() : void 0)
}, function(t, e, n) {
    var r = n(17);
    t.exports = r.Promise
}, function(t, e, n) {
    "use strict";
    var r = n(42),
        i = n(32),
        o = n(21),
        s = n(35),
        a = o("species");
    t.exports = function(t) {
        var e = r(t),
            n = i.f;
        s && e && !e[a] && n(e, a, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e, n) {
    var r = n(21)("iterator"),
        i = !1;
    try {
        var o = 0,
            s = {
                next: function() {
                    return {
                        done: !!o++
                    }
                },
                return: function() {
                    i = !0
                }
            };
        s[r] = function() {
            return this
        }, Array.from(s, (function() {
            throw 2
        }))
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !i) return !1;
        var n = !1;
        try {
            var o = {};
            o[r] = function() {
                return {
                    next: function() {
                        return {
                            done: n = !0
                        }
                    }
                }
            }, t(o)
        } catch (t) {}
        return n
    }
}, function(t, e, n) {
    var r = n(29),
        i = n(53),
        o = n(21)("species");
    t.exports = function(t, e) {
        var n, s = r(t).constructor;
        return void 0 === s || null == (n = r(s)[o]) ? e : i(n)
    }
}, function(t, e, n) {
    var r, i, o, s = n(17),
        a = n(28),
        c = n(41),
        u = n(66),
        f = n(112),
        l = n(76),
        d = n(119),
        p = s.location,
        h = s.setImmediate,
        v = s.clearImmediate,
        y = s.process,
        g = s.MessageChannel,
        m = s.Dispatch,
        b = 0,
        w = {},
        x = function(t) {
            if (w.hasOwnProperty(t)) {
                var e = w[t];
                delete w[t], e()
            }
        },
        S = function(t) {
            return function() {
                x(t)
            }
        },
        k = function(t) {
            x(t.data)
        },
        O = function(t) {
            s.postMessage(t + "", p.protocol + "//" + p.host)
        };
    h && v || (h = function(t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return w[++b] = function() {
            ("function" == typeof t ? t : Function(t)).apply(void 0, e)
        }, r(b), b
    }, v = function(t) {
        delete w[t]
    }, "process" == c(y) ? r = function(t) {
        y.nextTick(S(t))
    } : m && m.now ? r = function(t) {
        m.now(S(t))
    } : g && !d ? (o = (i = new g).port2, i.port1.onmessage = k, r = u(o.postMessage, o, 1)) : !s.addEventListener || "function" != typeof postMessage || s.importScripts || a(O) || "file:" === p.protocol ? r = "onreadystatechange" in l("script") ? function(t) {
        f.appendChild(l("script")).onreadystatechange = function() {
            f.removeChild(this), x(t)
        }
    } : function(t) {
        setTimeout(S(t), 0)
    } : (r = O, s.addEventListener("message", k, !1))), t.exports = {
        set: h,
        clear: v
    }
}, function(t, e, n) {
    var r = n(120);
    t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r)
}, function(t, e, n) {
    var r = n(42);
    t.exports = r("navigator", "userAgent") || ""
}, function(t, e, n) {
    var r = n(29),
        i = n(23),
        o = n(90);
    t.exports = function(t, e) {
        if (r(t), i(e) && e.constructor === t) return e;
        var n = o.f(t);
        return (0, n.resolve)(e), n.promise
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return {
                error: !1,
                value: t()
            }
        } catch (t) {
            return {
                error: !0,
                value: t
            }
        }
    }
}, function(t, e, n) {
    var r = n(124);
    t.exports = function(t, e) {
        if (t) {
            if ("string" == typeof t) return r(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
        }
    }
}, function(t, e) {
    t.exports = function(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }
}, function(t, e, n) {
    "use strict";
    var r = n(51),
        i = n(17),
        o = n(87),
        s = n(36),
        a = n(67),
        c = n(54),
        u = n(65),
        f = n(23),
        l = n(28),
        d = n(116),
        p = n(63),
        h = n(195);
    t.exports = function(t, e, n) {
        var v = -1 !== t.indexOf("Map"),
            y = -1 !== t.indexOf("Weak"),
            g = v ? "set" : "add",
            m = i[t],
            b = m && m.prototype,
            w = m,
            x = {},
            S = function(t) {
                var e = b[t];
                s(b, t, "add" == t ? function(t) {
                    return e.call(this, 0 === t ? 0 : t), this
                } : "delete" == t ? function(t) {
                    return !(y && !f(t)) && e.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function(t) {
                    return y && !f(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                } : "has" == t ? function(t) {
                    return !(y && !f(t)) && e.call(this, 0 === t ? 0 : t)
                } : function(t, n) {
                    return e.call(this, 0 === t ? 0 : t, n), this
                })
            };
        if (o(t, "function" != typeof m || !(y || b.forEach && !l((function() {
                (new m).entries().next()
            }))))) w = n.getConstructor(e, t, v, g), a.REQUIRED = !0;
        else if (o(t, !0)) {
            var k = new w,
                O = k[g](y ? {} : -0, 1) != k,
                E = l((function() {
                    k.has(1)
                })),
                A = d((function(t) {
                    new m(t)
                })),
                P = !y && l((function() {
                    for (var t = new m, e = 5; e--;) t[g](e, e);
                    return !t.has(-0)
                }));
            A || ((w = e((function(e, n) {
                u(e, w, t);
                var r = h(new m, e, w);
                return null != n && c(n, r[g], r, v), r
            }))).prototype = b, b.constructor = w), (E || P) && (S("delete"), S("has"), v && S("get")), (P || O) && S(g), y && b.clear && delete b.clear
        }
        return x[t] = w, r({
            global: !0,
            forced: w != m
        }, x), p(w, t), y || n.setStrong(w, t, v), w
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        return n.indexOf(t) === e
    }
    t.exports = function(t) {
        return t.filter(r)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(44);
    t.exports = function(t) {
        var e = document.querySelectorAll(t);
        return r(e)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(180),
        i = n(181);
    t.exports = function() {
        var t = r(),
            e = i();
        return /Chrome/.test(t) && /Google Inc/.test(e)
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        var e = new Blob([t], {
            type: "text/javascript"
        });
        return new Worker(window.URL.createObjectURL(e))
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function() {
        var t = function() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        };
        return "" + t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n) {
        var r = function(i) {
            t.removeEventListener(e, r), n(i)
        };
        t.addEventListener(e, r)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(185);
    t.exports = function(t, e) {
        if (t.closest) return t.closest(e);
        var n = t;
        do {
            if (r(n, e)) return n;
            n = n.parentElement || n.parentNode
        } while (null !== n && 1 === n.nodeType);
        return null
    }
}, function(t, e, n) {
    "use strict";
    var r = n(57),
        i = n(186);
    t.exports = function(t, e) {
        if (0 !== e.length) {
            var n = t.className,
                o = i(n).filter((function(t) {
                    return !r(e, t)
                }));
            t.setAttribute("class", o.join(" "))
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(187);
    t.exports = function(t) {
        var e = [];
        return r(t, (function(t, n) {
            return e.push([String(n), t]), !0
        })), e
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return Object.keys(t).map((function(e) {
            return t[e]
        }))
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n, r, i, o, s, a) {
        void 0 === n && (n = -1), void 0 === a && (a = window.document);
        var c = [t + "=" + e];
        if (n > -1) {
            var u = new Date(Date.now() + 1e3 * n);
            c.push("expires=" + u.toUTCString())
        }
        r && c.push("path=" + r), i && c.push("domain=" + i), o && "https:" === location.protocol && c.push("secure"), s && ("None" === s ? o && "https:" === location.protocol && c.push("sameSite=" + s) : c.push("sameSite=" + s)), a.cookie = c.join("; ")
    }
}, function(t, e, n) {
    "use strict";
    var r = n(188),
        i = n(189);
    t.exports = function(t, e) {
        window.XDomainRequest ? i(t, new r, e) : i(t, new XMLHttpRequest, e)
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        var n;
        return void 0 === e && (e = 0),
            function() {
                for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                n || (n = !0, t.apply({}, r), setTimeout((function() {
                    return n = !1
                }), e))
            }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        var n;
        return void 0 === e && (e = 0),
            function() {
                for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                var o = function() {
                    n = null, t.apply({}, r)
                };
                e ? (clearTimeout(n), n = window.setTimeout(o, e)) : o()
            }
    }
}, , function(t, e, n) {
    n(73), n(106), n(89), n(160), n(167), n(168);
    var r = n(62);
    t.exports = r.Promise
}, function(t, e, n) {
    var r = n(103);
    t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function(t, e, n) {
    "use strict";
    var r = n(74),
        i = n(105);
    t.exports = r ? {}.toString : function() {
        return "[object " + i(this) + "]"
    }
}, function(t, e, n) {
    var r = n(81),
        i = n(82),
        o = function(t) {
            return function(e, n) {
                var o, s, a = String(i(e)),
                    c = r(n),
                    u = a.length;
                return c < 0 || c >= u ? t ? "" : void 0 : (o = a.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? t ? a.charAt(c) : o : t ? a.slice(c, c + 2) : s - 56320 + (o - 55296 << 10) + 65536
            }
        };
    t.exports = {
        codeAt: o(!1),
        charAt: o(!0)
    }
}, function(t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        o = i && !r.call({
            1: 2
        }, 1);
    e.f = o ? function(t) {
        var e = i(this, t);
        return !!e && e.enumerable
    } : r
}, function(t, e, n) {
    var r = n(26),
        i = n(147),
        o = n(84),
        s = n(32);
    t.exports = function(t, e) {
        for (var n = i(e), a = s.f, c = o.f, u = 0; u < n.length; u++) {
            var f = n[u];
            r(t, f) || a(t, f, c(e, f))
        }
    }
}, function(t, e, n) {
    var r = n(42),
        i = n(148),
        o = n(151),
        s = n(29);
    t.exports = r("Reflect", "ownKeys") || function(t) {
        var e = i.f(s(t)),
            n = o.f;
        return n ? e.concat(n(t)) : e
    }
}, function(t, e, n) {
    var r = n(108),
        i = n(86).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, i)
    }
}, function(t, e, n) {
    var r = n(61),
        i = n(85),
        o = n(150),
        s = function(t) {
            return function(e, n, s) {
                var a, c = r(e),
                    u = i(c.length),
                    f = o(s, u);
                if (t && n != n) {
                    for (; u > f;)
                        if ((a = c[f++]) != a) return !0
                } else
                    for (; u > f; f++)
                        if ((t || f in c) && c[f] === n) return t || f || 0;
                return !t && -1
            }
        };
    t.exports = {
        includes: s(!0),
        indexOf: s(!1)
    }
}, function(t, e, n) {
    var r = n(81),
        i = Math.max,
        o = Math.min;
    t.exports = function(t, e) {
        var n = r(t);
        return n < 0 ? i(n + e, 0) : o(n, e)
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    "use strict";
    var r = n(109).IteratorPrototype,
        i = n(88),
        o = n(77),
        s = n(63),
        a = n(52),
        c = function() {
            return this
        };
    t.exports = function(t, e, n) {
        var u = e + " Iterator";
        return t.prototype = i(r, {
            next: o(1, n)
        }), s(t, u, !1, !0), a[u] = c, t
    }
}, function(t, e, n) {
    var r = n(28);
    t.exports = !r((function() {
        function t() {}
        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    }))
}, function(t, e, n) {
    var r = n(35),
        i = n(32),
        o = n(29),
        s = n(155);
    t.exports = r ? Object.defineProperties : function(t, e) {
        o(t);
        for (var n, r = s(e), a = r.length, c = 0; a > c;) i.f(t, n = r[c++], e[n]);
        return t
    }
}, function(t, e, n) {
    var r = n(108),
        i = n(86);
    t.exports = Object.keys || function(t) {
        return r(t, i)
    }
}, function(t, e, n) {
    var r = n(23);
    t.exports = function(t) {
        if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
        return t
    }
}, function(t, e) {
    t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
}, function(t, e, n) {
    "use strict";
    var r = n(61),
        i = n(159),
        o = n(52),
        s = n(37),
        a = n(83),
        c = s.set,
        u = s.getterFor("Array Iterator");
    t.exports = a(Array, "Array", (function(t, e) {
        c(this, {
            type: "Array Iterator",
            target: r(t),
            index: 0,
            kind: e
        })
    }), (function() {
        var t = u(this),
            e = t.target,
            n = t.kind,
            r = t.index++;
        return !e || r >= e.length ? (t.target = void 0, {
            value: void 0,
            done: !0
        }) : "keys" == n ? {
            value: r,
            done: !1
        } : "values" == n ? {
            value: e[r],
            done: !1
        } : {
            value: [r, e[r]],
            done: !1
        }
    }), "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function(t, e, n) {
    var r = n(21),
        i = n(88),
        o = n(32),
        s = r("unscopables"),
        a = Array.prototype;
    null == a[s] && o.f(a, s, {
        configurable: !0,
        value: i(null)
    }), t.exports = function(t) {
        a[s][t] = !0
    }
}, function(t, e, n) {
    "use strict";
    var r, i, o, s, a = n(51),
        c = n(50),
        u = n(17),
        f = n(42),
        l = n(114),
        d = n(36),
        p = n(64),
        h = n(63),
        v = n(115),
        y = n(23),
        g = n(53),
        m = n(65),
        b = n(41),
        w = n(79),
        x = n(54),
        S = n(116),
        k = n(117),
        O = n(118).set,
        E = n(164),
        A = n(121),
        P = n(165),
        R = n(90),
        C = n(122),
        j = n(37),
        I = n(87),
        _ = n(21),
        T = n(166),
        D = _("species"),
        L = "Promise",
        M = j.get,
        F = j.set,
        B = j.getterFor(L),
        z = l,
        N = u.TypeError,
        U = u.document,
        H = u.process,
        V = f("fetch"),
        G = R.f,
        q = G,
        W = "process" == b(H),
        J = !!(U && U.createEvent && u.dispatchEvent),
        Y = I(L, (function() {
            if (!(w(z) !== String(z))) {
                if (66 === T) return !0;
                if (!W && "function" != typeof PromiseRejectionEvent) return !0
            }
            if (c && !z.prototype.finally) return !0;
            if (T >= 51 && /native code/.test(z)) return !1;
            var t = z.resolve(1),
                e = function(t) {
                    t((function() {}), (function() {}))
                };
            return (t.constructor = {})[D] = e, !(t.then((function() {})) instanceof e)
        })),
        Q = Y || !S((function(t) {
            z.all(t).catch((function() {}))
        })),
        K = function(t) {
            var e;
            return !(!y(t) || "function" != typeof(e = t.then)) && e
        },
        X = function(t, e, n) {
            if (!e.notified) {
                e.notified = !0;
                var r = e.reactions;
                E((function() {
                    for (var i = e.value, o = 1 == e.state, s = 0; r.length > s;) {
                        var a, c, u, f = r[s++],
                            l = o ? f.ok : f.fail,
                            d = f.resolve,
                            p = f.reject,
                            h = f.domain;
                        try {
                            l ? (o || (2 === e.rejection && et(t, e), e.rejection = 1), !0 === l ? a = i : (h && h.enter(), a = l(i), h && (h.exit(), u = !0)), a === f.promise ? p(N("Promise-chain cycle")) : (c = K(a)) ? c.call(a, d, p) : d(a)) : p(i)
                        } catch (t) {
                            h && !u && h.exit(), p(t)
                        }
                    }
                    e.reactions = [], e.notified = !1, n && !e.rejection && Z(t, e)
                }))
            }
        },
        $ = function(t, e, n) {
            var r, i;
            J ? ((r = U.createEvent("Event")).promise = e, r.reason = n, r.initEvent(t, !1, !0), u.dispatchEvent(r)) : r = {
                promise: e,
                reason: n
            }, (i = u["on" + t]) ? i(r) : "unhandledrejection" === t && P("Unhandled promise rejection", n)
        },
        Z = function(t, e) {
            O.call(u, (function() {
                var n, r = e.value;
                if (tt(e) && (n = C((function() {
                        W ? H.emit("unhandledRejection", r, t) : $("unhandledrejection", t, r)
                    })), e.rejection = W || tt(e) ? 2 : 1, n.error)) throw n.value
            }))
        },
        tt = function(t) {
            return 1 !== t.rejection && !t.parent
        },
        et = function(t, e) {
            O.call(u, (function() {
                W ? H.emit("rejectionHandled", t) : $("rejectionhandled", t, e.value)
            }))
        },
        nt = function(t, e, n, r) {
            return function(i) {
                t(e, n, i, r)
            }
        },
        rt = function(t, e, n, r) {
            e.done || (e.done = !0, r && (e = r), e.value = n, e.state = 2, X(t, e, !0))
        },
        it = function(t, e, n, r) {
            if (!e.done) {
                e.done = !0, r && (e = r);
                try {
                    if (t === n) throw N("Promise can't be resolved itself");
                    var i = K(n);
                    i ? E((function() {
                        var r = {
                            done: !1
                        };
                        try {
                            i.call(n, nt(it, t, r, e), nt(rt, t, r, e))
                        } catch (n) {
                            rt(t, r, n, e)
                        }
                    })) : (e.value = n, e.state = 1, X(t, e, !1))
                } catch (n) {
                    rt(t, {
                        done: !1
                    }, n, e)
                }
            }
        };
    Y && (z = function(t) {
        m(this, z, L), g(t), r.call(this);
        var e = M(this);
        try {
            t(nt(it, this, e), nt(rt, this, e))
        } catch (t) {
            rt(this, e, t)
        }
    }, (r = function(t) {
        F(this, {
            type: L,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = p(z.prototype, {
        then: function(t, e) {
            var n = B(this),
                r = G(k(this, z));
            return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = W ? H.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && X(this, n, !1), r.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), i = function() {
        var t = new r,
            e = M(t);
        this.promise = t, this.resolve = nt(it, t, e), this.reject = nt(rt, t, e)
    }, R.f = G = function(t) {
        return t === z || t === o ? new i(t) : q(t)
    }, c || "function" != typeof l || (s = l.prototype.then, d(l.prototype, "then", (function(t, e) {
        var n = this;
        return new z((function(t, e) {
            s.call(n, t, e)
        })).then(t, e)
    }), {
        unsafe: !0
    }), "function" == typeof V && a({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(t) {
            return A(z, V.apply(u, arguments))
        }
    }))), a({
        global: !0,
        wrap: !0,
        forced: Y
    }, {
        Promise: z
    }), h(z, L, !1, !0), v(L), o = f(L), a({
        target: L,
        stat: !0,
        forced: Y
    }, {
        reject: function(t) {
            var e = G(this);
            return e.reject.call(void 0, t), e.promise
        }
    }), a({
        target: L,
        stat: !0,
        forced: c || Y
    }, {
        resolve: function(t) {
            return A(c && this === o ? z : this, t)
        }
    }), a({
        target: L,
        stat: !0,
        forced: Q
    }, {
        all: function(t) {
            var e = this,
                n = G(e),
                r = n.resolve,
                i = n.reject,
                o = C((function() {
                    var n = g(e.resolve),
                        o = [],
                        s = 0,
                        a = 1;
                    x(t, (function(t) {
                        var c = s++,
                            u = !1;
                        o.push(void 0), a++, n.call(e, t).then((function(t) {
                            u || (u = !0, o[c] = t, --a || r(o))
                        }), i)
                    })), --a || r(o)
                }));
            return o.error && i(o.value), n.promise
        },
        race: function(t) {
            var e = this,
                n = G(e),
                r = n.reject,
                i = C((function() {
                    var i = g(e.resolve);
                    x(t, (function(t) {
                        i.call(e, t).then(n.resolve, r)
                    }))
                }));
            return i.error && r(i.value), n.promise
        }
    })
}, function(t, e, n) {
    var r = n(21),
        i = n(52),
        o = r("iterator"),
        s = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (i.Array === t || s[o] === t)
    }
}, function(t, e, n) {
    var r = n(105),
        i = n(52),
        o = n(21)("iterator");
    t.exports = function(t) {
        if (null != t) return t[o] || t["@@iterator"] || i[r(t)]
    }
}, function(t, e, n) {
    var r = n(29);
    t.exports = function(t, e, n, i) {
        try {
            return i ? e(r(n)[0], n[1]) : e(n)
        } catch (e) {
            var o = t.return;
            throw void 0 !== o && r(o.call(t)), e
        }
    }
}, function(t, e, n) {
    var r, i, o, s, a, c, u, f, l = n(17),
        d = n(84).f,
        p = n(41),
        h = n(118).set,
        v = n(119),
        y = l.MutationObserver || l.WebKitMutationObserver,
        g = l.process,
        m = l.Promise,
        b = "process" == p(g),
        w = d(l, "queueMicrotask"),
        x = w && w.value;
    x || (r = function() {
        var t, e;
        for (b && (t = g.domain) && t.exit(); i;) {
            e = i.fn, i = i.next;
            try {
                e()
            } catch (t) {
                throw i ? s() : o = void 0, t
            }
        }
        o = void 0, t && t.enter()
    }, b ? s = function() {
        g.nextTick(r)
    } : y && !v ? (a = !0, c = document.createTextNode(""), new y(r).observe(c, {
        characterData: !0
    }), s = function() {
        c.data = a = !a
    }) : m && m.resolve ? (u = m.resolve(void 0), f = u.then, s = function() {
        f.call(u, r)
    }) : s = function() {
        h.call(l, r)
    }), t.exports = x || function(t) {
        var e = {
            fn: t,
            next: void 0
        };
        o && (o.next = e), i || (i = e, s()), o = e
    }
}, function(t, e, n) {
    var r = n(17);
    t.exports = function(t, e) {
        var n = r.console;
        n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e))
    }
}, function(t, e, n) {
    var r, i, o = n(17),
        s = n(120),
        a = o.process,
        c = a && a.versions,
        u = c && c.v8;
    u ? i = (r = u.split("."))[0] + r[1] : s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/)) && (i = r[1]), t.exports = i && +i
}, function(t, e, n) {
    "use strict";
    var r = n(51),
        i = n(53),
        o = n(90),
        s = n(122),
        a = n(54);
    r({
        target: "Promise",
        stat: !0
    }, {
        allSettled: function(t) {
            var e = this,
                n = o.f(e),
                r = n.resolve,
                c = n.reject,
                u = s((function() {
                    var n = i(e.resolve),
                        o = [],
                        s = 0,
                        c = 1;
                    a(t, (function(t) {
                        var i = s++,
                            a = !1;
                        o.push(void 0), c++, n.call(e, t).then((function(t) {
                            a || (a = !0, o[i] = {
                                status: "fulfilled",
                                value: t
                            }, --c || r(o))
                        }), (function(t) {
                            a || (a = !0, o[i] = {
                                status: "rejected",
                                reason: t
                            }, --c || r(o))
                        }))
                    })), --c || r(o)
                }));
            return u.error && c(u.value), n.promise
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(51),
        i = n(50),
        o = n(114),
        s = n(28),
        a = n(42),
        c = n(117),
        u = n(121),
        f = n(36);
    r({
        target: "Promise",
        proto: !0,
        real: !0,
        forced: !!o && s((function() {
            o.prototype.finally.call({
                then: function() {}
            }, (function() {}))
        }))
    }, {
        finally: function(t) {
            var e = c(this, a("Promise")),
                n = "function" == typeof t;
            return this.then(n ? function(n) {
                return u(e, t()).then((function() {
                    return n
                }))
            } : t, n ? function(n) {
                return u(e, t()).then((function() {
                    throw n
                }))
            } : t)
        }
    }), i || "function" != typeof o || o.prototype.finally || f(o.prototype, "finally", a("Promise").prototype.finally)
}, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t)) return t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
}, function(t, e, n) {
    var r = n(124);
    t.exports = function(t) {
        if (Array.isArray(t)) return r(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
}, function(t, e, n) {
    (function(t) {
        /*!
         * weakmap-polyfill v2.0.2 - ECMAScript6 WeakMap polyfill
         * https://github.com/polygonplanet/weakmap-polyfill
         * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
         * @license MIT
         */
        ! function(t) {
            "use strict";
            if (!t.WeakMap) {
                var e = Object.prototype.hasOwnProperty,
                    n = function(t, e, n) {
                        Object.defineProperty ? Object.defineProperty(t, e, {
                            configurable: !0,
                            writable: !0,
                            value: n
                        }) : t[e] = n
                    };
                t.WeakMap = function() {
                    function t() {
                        if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
                        if (n(this, "_id", o("_WeakMap")), arguments.length > 0) throw new TypeError("WeakMap iterable is not supported")
                    }

                    function i(t, n) {
                        if (!r(t) || !e.call(t, "_id")) throw new TypeError(n + " method called on incompatible receiver " + typeof t)
                    }

                    function o(t) {
                        return t + "_" + s() + "." + s()
                    }

                    function s() {
                        return Math.random().toString().substring(2)
                    }
                    return n(t.prototype, "delete", (function(t) {
                        if (i(this, "delete"), !r(t)) return !1;
                        var e = t[this._id];
                        return !(!e || e[0] !== t) && (delete t[this._id], !0)
                    })), n(t.prototype, "get", (function(t) {
                        if (i(this, "get"), r(t)) {
                            var e = t[this._id];
                            return e && e[0] === t ? e[1] : void 0
                        }
                    })), n(t.prototype, "has", (function(t) {
                        if (i(this, "has"), !r(t)) return !1;
                        var e = t[this._id];
                        return !(!e || e[0] !== t)
                    })), n(t.prototype, "set", (function(t, e) {
                        if (i(this, "set"), !r(t)) throw new TypeError("Invalid value used as weak map key");
                        var o = t[this._id];
                        return o && o[0] === t ? (o[1] = e, this) : (n(t, this._id, [t, e]), this)
                    })), n(t, "_polyfill", !0), t
                }()
            }

            function r(t) {
                return Object(t) === t
            }
        }("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : this)
    }).call(this, n(98))
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        for (var e = "", n = 0, r = t; n < r.length; n++) {
            var i = r[n],
                o = i.toLowerCase();
            e += i === o ? o : "-" + o
        }
        return e
    }
}, function(t, e) {
    t.exports = function(t) {
        return -1 !== Function.toString.call(t).indexOf("[native code]")
    }
}, function(t, e, n) {
    var r = n(92),
        i = n(179);

    function o(e, n, s) {
        return i() ? t.exports = o = Reflect.construct : t.exports = o = function(t, e, n) {
            var i = [null];
            i.push.apply(i, e);
            var o = new(Function.bind.apply(t, i));
            return n && r(o, n.prototype), o
        }, o.apply(null, arguments)
    }
    t.exports = o
}, function(t, e) {
    t.exports = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (t) {
            return !1
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function() {
        return window.navigator && window.navigator.userAgent || ""
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function() {
        return window.navigator && window.navigator.vendor || ""
    }
}, function(t, e, n) {
    var r = n(183);
    t.exports = "string" == typeof r ? r : r.toString()
}, function(t, e, n) {
    (t.exports = n(93)(!1)).push([t.i, ".user-feedback__reason:hover {\n    color: #000 !important;\n}\n.user-feedback__slider:hover {\n    background-color: rgba(0,0,0,0.6) !important;\n    border: none !important;\n}", ""])
}, function(t, e, n) {
    window,
    t.exports = function(t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var i = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var i in t) n.d(r, i, function(e) {
                    return t[e]
                }.bind(null, i));
            return r
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 15)
    }([function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return "string" == typeof t && t.length > 0
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e = typeof t;
            return "object" === e && null != t || "function" === e
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(4),
            i = n(6);
        t.exports = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            if (r(t) || i(t)) throw new TypeError("Cannot convert undefined or null to object");
            for (var o = Object(t), s = 1; s < arguments.length; s++) {
                var a = arguments[s];
                if (null != a)
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (o[c] = a[c])
            }
            return o
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(4);
        t.exports = function(t) {
            return !r(t) && "object" == typeof t && Object.keys(t).length > 0
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return null === t
        }
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ESafeFrameEvents = e.EHostEvents = e.EBaseTargets = void 0,
            function(t) {
                t.TOP = "_top", t.SELF = "_self", t.BLANK = "_blank", t.PARENT = "_parent"
            }(e.EBaseTargets || (e.EBaseTargets = {})),
            function(t) {
                t.BEFORE_HOOK = "onBeforePosMsg", t.RENDER_END = "onEndPosRender", t.FAILURE = "onFailure", t.MESSAGE = "onPosMsg", t.RENDER_START = "onStartPosRender", t.SUCCESS = "onSuccess"
            }(e.EHostEvents || (e.EHostEvents = {})),
            function(t) {
                t.GEOMETRY_UPDATE = "geom-update", t.FOCUS_CHANGE = "focus-change", t.READ_COOKIE = "read-cookie", t.WRITE_COOKIE = "write-cookie", t.FAILURE = "failed", t.ERROR = "error"
            }(e.ESafeFrameEvents || (e.ESafeFrameEvents = {}))
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return void 0 === t
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return "function" == typeof t
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function() {}
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "default", (function() {
            return i
        }));
        var r = n(14);

        function i() {
            return r.a
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            return t.indexOf(e) > -1
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function() {
            var t = 0;
            return function() {
                return "" + t++
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            i = n(4),
            o = n(1),
            s = n(6);
        t.exports = function t(e, n, a) {
            void 0 === n && (n = ""), void 0 === a && (a = ".");
            var c = Object.keys(e),
                u = [];
            return c.forEach((function(r) {
                var c = e[r];
                if (o(c)) {
                    var f = n + r + a;
                    u.push(t(c, f))
                } else {
                    if (i(c) || s(c)) return;
                    var l = encodeURIComponent(n + r);
                    u.push(l + "=" + encodeURIComponent(c))
                }
            })), u.filter(r).join("&")
        }
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__assign || function() {
                return (r = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            },
            i = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(n(3)),
            s = i(n(0)),
            a = i(n(38)),
            c = function() {
                function t(t, e, n) {
                    var i;
                    this.shared = r({}, (0, a.default)()), (0, o.default)(t) && (this.shared = r(r({}, this.shared), t)), (0, s.default)(e) && (0, o.default)(n) && (this.nonShared = ((i = {})[e] = n, i)), Object.freeze(this)
                }
                return t.prototype.value = function(t, e) {
                    var n;
                    if ((0, s.default)(t)) {
                        var r = this.shared,
                            i = this.nonShared;
                        n = (0, s.default)(e) ? e in i ? i[e][t] : void 0 : r[t]
                    }
                    return n
                }, t
            }();
        e.default = c
    }, function(t) {
        t.exports = JSON.parse('{"a":"0.0.7"}')
    }, function(t, e, n) {
        "use strict";
        var r, i = (this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        })(n(16));
        try {
            window === top && (r = {
                host: new i.default,
                info: {
                    errs: [],
                    list: []
                }
            })
        } catch (t) {}
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = r(n(7)),
            o = r(n(3)),
            s = n(5),
            a = r(n(17)),
            c = r(n(20)),
            u = r(n(33)),
            f = r(n(35)),
            l = r(n(13));
        e.default = function() {
            var t = this;
            this.internalAPI = new c.default, this.boot = function() {
                return t.internalAPI.boot()
            }, this.status = function(e) {
                return t.internalAPI.status(e)
            }, this.nuke = function(e) {
                t.internalAPI.nuke(e)
            }, this.get = function(e) {
                return t.internalAPI.get(e)
            }, this.render = function(e) {
                t.internalAPI.render(e)
            }, this.Config = function(e) {
                var n = t.getGlobalConfig();
                if ((0, o.default)(n)) return n;
                for (var r in n = new a.default(e), s.EHostEvents)
                    if (s.EHostEvents.hasOwnProperty(r)) {
                        var c = r,
                            u = s.EHostEvents[c],
                            f = n[u];
                        (0, i.default)(f) && t.internalAPI.on(u, f)
                    }
                return t.updateGlobalConfig(n), n
            }, this.PosConfig = function(e, n, r) {
                var i = t.getGlobalConfig();
                !i && r && (r = t.Config(r));
                var o = new u.default(e, n, r);
                return i.positions[o.id] = o, t.updateGlobalConfig(i), o
            }, this.PosMeta = function(t, e, n) {
                return new l.default(t, e, n)
            }, this.Position = function(e, n, r, i) {
                var s;
                return i || (s = (0, o.default)(e) ? e.id : e) && ((i = t.getGlobalConfig().positions[s]) || (i = t.PosConfig({
                    id: s
                }, null))), new f.default(e, n, r, i)
            }, this.getGlobalConfig = function() {
                return t.internalAPI.getConfig()
            }, this.updateGlobalConfig = function(e) {
                t.internalAPI.setConfig(e)
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = r(n(8)),
            o = r(n(2)),
            s = r(n(18)),
            a = r(n(7)),
            c = r(n(0)),
            u = r(n(1)),
            f = r(n(9));
        e.default = function(t) {
            if (this.cdn = "", this.ver = (0, f.default)(), this.renderFile = "", this.hostFile = "", this.extFile = "", this.bootFile = "", this.to = 3e4, this.positions = {}, this.auto = !1, this.msgFile = "", this.debug = !1, this.onBeforePosMsg = i.default, this.onEndPosRender = i.default, this.onFailure = i.default, this.onPosMsg = i.default, this.onStartPosRender = i.default, this.onSuccess = i.default, (0, u.default)(t) && (0, o.default)(this, t), this.auto && (0, c.default)(this.bootFile)) {
                var e = (0, s.default)(window, "$sf.host.boot");
                e && (0, a.default)(e) && e()
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(1),
            i = n(19),
            o = n(6);
        t.exports = function(t, e, n) {
            if (!r(t)) return n;
            if (!i(e)) return n;
            try {
                var s = e.split(".").reduce((function(t, e) {
                    return t[e]
                }), t);
                return o(s) ? n : s
            } catch (t) {
                return n
            }
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            return "string" == typeof t
        }
    }, function(t, e, n) {
        "use strict";
        var r, i = this && this.__extends || (r = function(t, e) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            o = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = o(n(21)),
            a = n(22),
            c = o(n(26)),
            u = o(n(27)),
            f = o(n(28)),
            l = o(n(29)),
            d = o(n(8)),
            p = o(n(2)),
            h = o(n(10)),
            v = o(n(31)),
            y = o(n(0)),
            g = n(5),
            m = n(32),
            b = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.focus = !1, e.guids = {}, e.subscribed = !1, e.renderedPositionsMap = {}, e.getConfig = function() {
                        return (0, p.default)({}, e.config)
                    }, e.setConfig = function(t) {
                        e.config = (0, p.default)({}, e.config, t)
                    }, e.boot = function() {
                        return !0
                    }, e.status = function(t) {
                        return !1
                    }, e.nuke = function(t) {
                        var n = e.getConfig(),
                            r = n.positions || {};
                        "*" === t && (t = Object.keys(r)), (0, v.default)(t) || (t = [t]), t.forEach((function(t) {
                            e.nukePositionById(t), delete n.positions[t], delete e.renderedPositionsMap[t]
                        })), e.setConfig(n)
                    }, e.get = function(t) {
                        return e.getConfig().positions[t]
                    }, e.render = function(t) {
                        e.subscribed || e.setupListeners(), (0, v.default)(t) || (t = [t]), t.forEach(e.renderPosition)
                    }, e.nukePositionById = function(t) {
                        var e = document.getElementById(t);
                        if (e) {
                            var n = e.parentElement;
                            n.removeChild(e), n.removeAttribute("style")
                        }
                    }, e.renderPosition = function(t) {
                        var n = t.id,
                            r = e.getConfig(),
                            i = r.positions[n];
                        if (i) {
                            var o = i.w,
                                s = i.h,
                                a = i.z,
                                c = i.dest,
                                u = document.getElementById(c);
                            if (u) {
                                u.setAttribute("style", e.getDestStyles(o, s, a));
                                var f = e.setRenderingTimeout(n, r.to);
                                e.emit(g.EHostEvents.RENDER_START, [n]);
                                var l = e.createIframeForPosition(t, i, r, (function() {
                                    e.handleFrameRendered(l, n, f)
                                }));
                                u.appendChild(l)
                            }
                        }
                    }, e.createIframeForPosition = function(t, n, r, i) {
                        void 0 === i && (i = d.default);
                        var o = t.id,
                            s = n.w,
                            a = n.h,
                            c = n.z,
                            u = n.dest,
                            f = e.getRenderParams(t, r, u),
                            l = document.createElement("iframe"),
                            p = e.getFrameStyles(s, a, c);
                        return l.src = r.renderFile, l.referrerPolicy = "unsafe-url", l.id = o, l.name = JSON.stringify(f), e.setIframeAttributes(l, p), l.onload = function() {
                            e.setGuidForPosition(o, f.guid), i()
                        }, l
                    }, e.setRenderingTimeout = function(t, n) {
                        return window.setTimeout((function() {
                            e.nuke(t), e.emit(g.EHostEvents.MESSAGE, ["render-timeout", t]), e.emit(g.EHostEvents.FAILURE, [t])
                        }), n)
                    }, e.getDestStyles = function(t, e, n) {
                        return (0, l.default)({
                            height: "".concat(e, "px"),
                            position: "relative",
                            visibility: "inherit",
                            width: "".concat(t, "px"),
                            "z-index": n
                        })
                    }, e.getFrameStyles = function(t, e, n) {
                        return (0, l.default)({
                            border: "none",
                            display: "none",
                            height: "".concat(e, "px"),
                            left: 0,
                            margin: 0,
                            position: "absolute",
                            top: 0,
                            visibility: "hidden",
                            width: "".concat(t, "px"),
                            "z-index": n
                        })
                    }, e.getRenderParams = function(t, n, r) {
                        return {
                            conf: t.config,
                            geom: e.calcGeometry(r),
                            guid: (0, f.default)(),
                            has_focus: e.getFocus(),
                            host: (0, c.default)(),
                            html: t.html,
                            meta: t.meta,
                            src: n.renderFile
                        }
                    }, e.setIframeAttributes = function(t, e) {
                        void 0 === e && (e = ""), t.setAttribute("frameborder", "no"), t.setAttribute("scrolling", "no"), t.setAttribute("allowtranparency", "true"), t.setAttribute("hidefocus", "true"), t.setAttribute("tabindex", "-1"), t.setAttribute("marginwidth", "0"), t.setAttribute("marginheight", "0"), t.setAttribute("style", e)
                    }, e.handleFrameRendered = function(t, n, r) {
                        e.renderedPositionsMap[n] = !0, clearTimeout(r), t.removeAttribute("name"), t.style.visibility = "inherit", t.style.display = "block", e.emit(g.EHostEvents.RENDER_END, [n]), e.emit(g.EHostEvents.SUCCESS, [n])
                    }, e.handleMessage = function(t) {
                        try {
                            var n = e.getSafeFrameRenderFile();
                            if ((0, h.default)(n, t.origin)) {
                                var r = JSON.parse(t.data);
                                e.isValidMessageEvent(t.source, r) && (t.stopImmediatePropagation(), e.processMessage(r))
                            }
                        } catch (t) {}
                    }, e.isValidMessageEvent = function(t, n) {
                        var r = n.id,
                            i = n.guid;
                        if (!r || !i) return !1;
                        var o = document.getElementById(r);
                        if (o) {
                            var s = o.contentWindow,
                                a = e.getGuidForPosition(r);
                            return s === t && i === a
                        }
                        return !1
                    }, e.processMessage = function(t) {
                        var n = t.cmd,
                            r = t.id,
                            i = t.params.info || {};
                        switch (n) {
                            case g.ESafeFrameEvents.READ_COOKIE:
                                var o = i.cookie,
                                    s = void 0 === o ? "" : o;
                                e.tryToReadCookie(r, s);
                                break;
                            case g.ESafeFrameEvents.WRITE_COOKIE:
                                var a = i.cookie,
                                    c = (s = void 0 === a ? "" : a, i.value),
                                    u = void 0 === c ? "" : c;
                                e.tryToWriteCookie(r, s, u)
                        }
                    }, e.calcGeometry = function(t) {
                        return (0, m.calcElementGeometry)(t)
                    }, e.handleFocus = function(t) {
                        e.setFocus(!0)
                    }, e.handlerBlur = function(t) {
                        var n = document.hasFocus();
                        e.setFocus(n)
                    }, e.getFocus = function() {
                        return e.focus
                    }, e.setFocus = function(t) {
                        void 0 === t && (t = !1), e.focus = t, e.fireFocusChange(e.focus)
                    }, e.fireFocusChange = function(t) {
                        var n = e.getConfig();
                        n && Object.keys(n.positions || {}).forEach((function(n) {
                            var r = g.ESafeFrameEvents.FOCUS_CHANGE;
                            e.sendResponse({
                                cmd: r,
                                guid: e.getGuidForPosition(n),
                                id: n,
                                params: {
                                    cmd: r,
                                    info: t
                                }
                            })
                        }))
                    }, e.fireGeomUpdate = function() {
                        var t = e.getConfig();
                        t && Object.keys(t.positions || {}).forEach((function(t) {
                            var n = e.calcGeometry(t),
                                r = g.ESafeFrameEvents.GEOMETRY_UPDATE;
                            e.sendResponse({
                                cmd: r,
                                guid: e.getGuidForPosition(t),
                                id: t,
                                params: {
                                    cmd: r,
                                    info: n
                                }
                            })
                        }))
                    }, e.sendResponse = function(t) {
                        var n = t.params,
                            r = t.id;
                        if (e.isPositionRendered(r)) {
                            e.emit(g.EHostEvents.MESSAGE, [r, n.cmd, {
                                info: n.info
                            }]);
                            var i = document.getElementById(r);
                            i && i.contentWindow.postMessage(JSON.stringify(t), e.getSafeFrameRenderFile())
                        }
                    }, e.getGuidForPosition = function(t) {
                        return e.guids[t]
                    }, e.setGuidForPosition = function(t, n) {
                        e.guids[t] = n
                    }, e.tryToReadCookie = function(t, n) {
                        var r, i, o = g.ESafeFrameEvents.READ_COOKIE,
                            s = g.ESafeFrameEvents.FAILURE;
                        if ((0, y.default)(n)) {
                            var c = e.getConfig().positions[t].supports;
                            c && c[o] ? (r = (0, a.get)(n), s = o) : i = "No permissions for command execution"
                        } else i = "Wrong data format";
                        e.sendResponse({
                            cmd: s,
                            guid: e.getGuidForPosition(t),
                            id: t,
                            params: {
                                cmd: o,
                                info: r,
                                reason: i
                            }
                        })
                    }, e.tryToWriteCookie = function(t, n, r) {
                        var i, o, s = g.ESafeFrameEvents.WRITE_COOKIE,
                            c = g.ESafeFrameEvents.FAILURE;
                        if ((0, y.default)(n) && (0, y.default)(r)) {
                            var u = e.getConfig().positions[t].supports;
                            u && u[s] ? ((0, a.set)(n, r), (0, a.get)(n) === r ? (i = r, c = s) : o = "Failure when tried set cookie data") : o = "No permissions for command execution"
                        } else o = "Wrong data format";
                        e.sendResponse({
                            cmd: c,
                            guid: e.getGuidForPosition(t),
                            id: t,
                            params: {
                                cmd: s,
                                info: i,
                                reason: o
                            }
                        })
                    }, e.getSafeFrameRenderFile = function() {
                        return e.getConfig().renderFile
                    }, e
                }
                return i(e, t), e.prototype.setupListeners = function() {
                    window.addEventListener("message", this.handleMessage), window.addEventListener("resize", (0, s.default)(this.fireGeomUpdate, 1e3)), window.addEventListener("scroll", (0, s.default)(this.fireGeomUpdate, 1e3)), window.addEventListener("focus", this.handleFocus), window.addEventListener("blur", this.handlerBlur), this.subscribed = !0
                }, e.prototype.isPositionRendered = function(t) {
                    return this.renderedPositionsMap[t]
                }, e
            }(u.default);
        e.default = b
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            var n;
            return void 0 === e && (e = 0),
                function() {
                    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                    n || (n = !0, t.apply({}, r), setTimeout((function() {
                        return n = !1
                    }), e))
                }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(23),
            i = n(25);
        t.exports = {
            get: r,
            set: i
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(24),
            i = n(10);
        t.exports = function(t, e) {
            void 0 === e && (e = document.cookie);
            var n = e.split("; "),
                o = r(n, (function(e) {
                    return i(e, t + "=")
                }));
            return o ? o.split("=")[1] : ""
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e) {
            for (var n = 0, r = t.length; n < r; n++) {
                var i = t[n];
                if (e(i, n)) return i
            }
            return null
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t, e, n, r, i, o, s, a) {
            void 0 === n && (n = -1), void 0 === a && (a = window.document);
            var c = [t + "=" + e];
            if (n > -1) {
                var u = new Date(Date.now() + 1e3 * n);
                c.push("expires=" + u.toUTCString())
            }
            r && c.push("path=" + r), i && c.push("domain=" + i), o && "https:" === location.protocol && c.push("secure"), s && ("None" === s ? o && "https:" === location.protocol && c.push("sameSite=" + s) : c.push("sameSite=" + s)), a.cookie = c.join("; ")
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            void 0 === t && (t = window);
            var e = t.location;
            return e && (e.protocol + "//" + (e.host || e.hostname) || "")
        }
    }, function(t, e, n) {
        "use strict";
        var r = function() {
            function t() {
                this.events = {}
            }
            return t.prototype.on = function(t, e) {
                if (this.events[t]) {
                    if (-1 !== (n = this.events[t]).indexOf(e)) throw new Error('This handler has already been subcribed for "' + t + '" event');
                    n.push(e)
                } else {
                    var n;
                    (n = []).push(e), this.events[t] = n
                }
            }, t.prototype.off = function(t, e) {
                var n = this.events[t],
                    r = n.indexOf(e); - 1 !== r && n.splice(r, 1)
            }, t.prototype.emit = function(t, e) {
                void 0 === e && (e = []);
                var n = this.events[t];
                n && n.map((function(t) {
                    e ? t.apply(void 0, e) : t()
                }))
            }, t
        }();
        t.exports = r
    }, function(t, e, n) {
        "use strict";
        t.exports = function() {
            var t = function() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            };
            return "" + t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(30);
        t.exports = function(t) {
            var e = "";
            return Object.keys(t).forEach((function(n) {
                return e += r(n) + ":" + t[n] + ";"
            })), e
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            for (var e = "", n = 0, r = t; n < r.length; n++) {
                var i = r[n],
                    o = i.toLowerCase();
                e += i === o ? o : "-" + o
            }
            return e
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = Array.isArray
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__assign || function() {
            return (r = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }).apply(this, arguments)
        };

        function i() {
            var t = window.innerHeight || 0,
                e = window.innerWidth || 0,
                n = window.pageYOffset || 0,
                r = window.pageXOffset || 0;
            return {
                t: n,
                l: r,
                b: t + n,
                r: e + r,
                w: e,
                h: t
            }
        }

        function o(t) {
            if (!t) return {
                t: 0,
                l: 0,
                r: 0,
                b: 0,
                w: 0,
                h: 0,
                z: 0
            };
            var e = t.getBoundingClientRect(),
                n = e.top + window.pageYOffset,
                r = e.left + window.pageXOffset,
                i = e.width,
                o = e.height;
            return {
                t: n,
                l: r,
                b: n + o,
                r: r + i,
                w: i,
                h: o,
                z: parseInt(getComputedStyle(t).getPropertyValue("z-index"), 10) || 0
            }
        }

        function s(t, e) {
            var n = Math.min(e.r, t.r) - Math.max(e.l, t.l);
            n = (n = n < 0 ? 0 : n) > e.w ? e.w : n;
            var r = Math.min(e.b, t.b) - Math.max(e.t, t.t);
            r = (r = r < 0 ? 0 : r) > e.h ? e.h : r;
            var i = e.w > 0 ? Number((n / e.w).toFixed(2)) : 0,
                o = e.h > 0 ? Number((r / e.h).toFixed(2)) : 0;
            return {
                iv: Number((n * r / (e.w * e.h)).toFixed(2)) || 0,
                xiv: i,
                yiv: o
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.calcElementGeometry = e.calcElementVisiblePercents = e.getSafeFrameBoxGeometricInfo = e.getWindowBoxGeometricInfo = void 0, e.getWindowBoxGeometricInfo = i, e.getSafeFrameBoxGeometricInfo = o, e.calcElementVisiblePercents = s, e.calcElementGeometry = function(t) {
            var e = document.getElementById(t),
                n = i(),
                a = o(e),
                c = s(n, a);
            return {
                exp: r(r({}, a), {
                    xs: 0,
                    yx: 0
                }),
                self: r(r({}, a), c),
                win: n
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = r(n(11)),
            o = r(n(2)),
            s = r(n(12)),
            a = r(n(0)),
            c = r(n(1)),
            u = n(5),
            f = r(n(34)),
            l = (0, i.default)(),
            d = (0, f.default)(),
            p = function() {
                function t(t, e, n) {
                    this.bg = "transparent", this.css = "", this.dest = "", this.h = 0, this.id = "safeframe-pos-".concat(l()), this.size = "", this.tgt = u.EBaseTargets.BLANK, this.w = 0, this.z = 0, this.supports = d, (0, c.default)(t) ? (0, o.default)(this, t) : (0, a.default)(t) && (this.id = t), (0, a.default)(e) && (this.dest = e);
                    var r = this.w,
                        i = this.h,
                        s = this.size;
                    if (r && i) this.size = "".concat(r, "x").concat(i);
                    else if ((0, a.default)(s)) {
                        var f = s.split(/x/gi);
                        this.w = parseFloat(f[0]) || 0, this.h = parseFloat(f[1]) || 0
                    }
                    this.supports = (0, o.default)({}, d, this.supports)
                }
                return t.prototype.toString = function() {
                    return (0, s.default)(this)
                }, t
            }();
        e.default = p
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function() {
            return {
                "exp-ovr": 1,
                "exp-push": 0,
                "read-cookie": 0,
                "write-cookie": 0
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = r(n(11)),
            o = r(n(36)),
            s = r(n(2)),
            a = r(n(12)),
            c = r(n(3)),
            u = r(n(0)),
            f = r(n(1)),
            l = r(n(13)),
            d = (0, i.default)(),
            p = function() {
                function t(t, e, n, r) {
                    this.config = {}, this.html = "", this.id = "safeframe-pos-".concat(d()), this.meta = new l.default, arguments.length < 2 || ((0, f.default)(t) ? (0, s.default)(this, t) : (0, u.default)(t) && (this.id = t), (0, u.default)(e) ? this.html = e : this.src && (this.html = (0, o.default)("script", {
                        src: this.src
                    })), (0, c.default)(n) && (this.meta = n), (0, c.default)(r) && (this.config = r))
                }
                return t.prototype.toString = function() {
                    return (0, a.default)(this)
                }, t
            }();
        e.default = p
    }, function(t, e, n) {
        "use strict";
        var r = n(37);
        t.exports = function(t, e, n) {
            return void 0 === n && (n = ""), "<" + t + r(e) + ">" + n + "</" + t + ">"
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            var e = Object.keys(t),
                n = [];
            e.forEach((function(e) {
                var r = t[e];
                void 0 !== r && n.push(e + '="' + r + '"')
            }));
            var r = "" + n.join(" ");
            return r ? " " + r : ""
        }
    }, function(t, e, n) {
        "use strict";
        var r = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = r(n(39)),
            o = r(n(40)),
            s = r(n(9));
        e.default = function() {
            return {
                ck_on: Number((0, o.default)()),
                flash_ver: (0, i.default)(),
                sf_ver: (0, s.default)()
            }
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return parseInt(t, 10)
        }
        t.exports = function(t) {
            void 0 === t && (t = window);
            var e = "0",
                n = t.navigator;
            if (void 0 !== n.plugins && "object" == typeof n.plugins["Shockwave Flash"])(i = n.plugins["Shockwave Flash"].description) && void 0 !== n.mimeTypes && n.mimeTypes["application/x-shockwave-flash"] && n.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = [r((i = i.replace(/^.*\s+(\S+\s+\S+$)/, "$1")).replace(/^(.*)\..*$/, "$1")), r(i.replace(/^.*\.(.*)\s.*$/, "$1")), /[a-zA-Z]/.test(i) ? r(i.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0].join("."));
            else if (void 0 !== t.ActiveXObject) try {
                var i, o = new t.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                o && (i = o.GetVariable("$version")) && (e = [r((i = i.split(" ")[1].split(","))[0]), r(i[1]), r(i[2])].join("."))
            } catch (t) {}
            return e
        }
    }, function(t, e, n) {
        "use strict";
        t.exports = function(t) {
            void 0 === t && (t = window);
            var e = t.navigator;
            return !(!e || !e.cookieEnabled)
        }
    }])
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        var n = t.matches || t.msMatchesSelector || t.webkitMatchesSelector;
        return !!n && n.call(t, e)
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return t.trim().split(/\s+/)
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        for (var n in t) {
            if (t.hasOwnProperty(n))
                if (!1 === e(t[n], n, t)) return
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(95),
        i = n(15),
        o = n(14),
        s = {},
        a = function() {
            function t() {
                var e = this;
                this.addEventListener = i, this.removeEventListener = i, this.setRequestHeader = i, this.overrideMimeType = i, this.onTimeout = function() {
                    o(e.ontimeout) && e.ontimeout(), e.destroy()
                }, this.onError = function() {
                    o(e.onerror) && e.onerror(), e.destroy()
                }, this.onLoad = function() {
                    e.readyState = 4, e.responseText = e.xdr.responseText, e.status = 200, o(e.onreadystatechange) && e.onreadystatechange(), o(e.onload) && e.onload(), e.destroy()
                }, this.id = t.getID(), this.xdr = new window.XDomainRequest, this.xdr.onerror = this.onError, this.xdr.ontimeout = this.onTimeout, this.xdr.onprogress = i, this.xdr.onload = this.onLoad, s[this.id] = this.xdr
            }
            return t.prototype.dispatchEvent = function() {
                return !1
            }, t.prototype.open = function(t, e) {
                this.xdr.open(t, e)
            }, t.prototype.send = function(t) {
                var e = this;
                this.xdr.timeout = this.timeout, setTimeout((function() {
                    e.xdr.send(t)
                }), 0)
            }, t.prototype.getResponseHeader = function() {
                return ""
            }, t.prototype.getAllResponseHeaders = function() {
                return ""
            }, t.prototype.abort = function() {
                this.xdr.abort(), this.destroy()
            }, t.prototype.destroy = function() {
                delete s[this.id]
            }, t.getID = r(), t
        }();
    t.exports = a
}, function(t, e, n) {
    "use strict";
    var r = n(39);
    t.exports = function(t, e, n) {
        var i = t.method,
            o = t.data,
            s = t.headers,
            a = t.timeout,
            c = t.withCredentials,
            u = t.queryParams,
            f = t.url;
        if (u && (f = r(f, u)), e.open(i, f), s)
            for (var l in s) s.hasOwnProperty(l) && e.setRequestHeader(l, s[l]);
        c && (e.withCredentials = Boolean(c)), a && (e.timeout = a), e.onreadystatechange = function() {
            4 === e.readyState && (e.status >= 200 && e.status < 300 || 304 === e.status ? n && n(void 0, e.responseText) : 0 !== e.status && n && n("error: " + e.status))
        }, e.onerror = function() {
            n("error")
        }, e.ontimeout = function() {
            n("timeout")
        }, e.onabort = function() {
            n("aborted")
        }, e.send(o)
    }
}, function(t, e, n) {
    var r = n(191);
    t.exports = "string" == typeof r ? r : r.toString()
}, function(t, e, n) {
    (t.exports = n(93)(!1)).push([t.i, ".bottom-sticky__ad-container {\n    background: #f1f1f1;\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transform: translate(0,0);\n    transition: transform .2s ease-in-out;\n    user-select: none;\n    padding-top: 10px;\n    z-index: 49999;         /* AUTOMATTIC-2205 - because cookie consent banner has 50000 z-index */\n}\n.bottom-sticky__ad-container_hidden {\n    visibility: hidden;\n    transform: translate(0,1000px);\n}\n.bottom-sticky__ad-close-btn {\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    box-sizing: content-box;\n    border: 2px solid #9d9d9d;\n    right: 2px;\n    top: -14px;\n    border-radius: 50%;\n    background-color: #fff;\n    cursor: pointer;\n    overflow: hidden;\n    background-size: 12px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-width='4' stroke='%239d9d9d' d='M0 0l24 24M0 24L24 0'/%3E%3C/svg%3E\");\n}\n.bottom-sticky__ad-container .adtags-button {\n    color: #000;\n}", ""])
}, function(t, e, n) {
    n(193), n(73), n(106), n(89);
    var r = n(62);
    t.exports = r.Set
}, function(t, e, n) {
    "use strict";
    var r = n(125),
        i = n(196);
    t.exports = r("Set", (function(t) {
        return function() {
            return t(this, arguments.length ? arguments[0] : void 0)
        }
    }), i)
}, function(t, e, n) {
    var r = n(28);
    t.exports = !r((function() {
        return Object.isExtensible(Object.preventExtensions({}))
    }))
}, function(t, e, n) {
    var r = n(23),
        i = n(113);
    t.exports = function(t, e, n) {
        var o, s;
        return i && "function" == typeof(o = e.constructor) && o !== n && r(s = o.prototype) && s !== n.prototype && i(t, s), t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(32).f,
        i = n(88),
        o = n(64),
        s = n(66),
        a = n(65),
        c = n(54),
        u = n(83),
        f = n(115),
        l = n(35),
        d = n(67).fastKey,
        p = n(37),
        h = p.set,
        v = p.getterFor;
    t.exports = {
        getConstructor: function(t, e, n, u) {
            var f = t((function(t, r) {
                    a(t, f, e), h(t, {
                        type: e,
                        index: i(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }), l || (t.size = 0), null != r && c(r, t[u], t, n)
                })),
                p = v(e),
                y = function(t, e, n) {
                    var r, i, o = p(t),
                        s = g(t, e);
                    return s ? s.value = n : (o.last = s = {
                        index: i = d(e, !0),
                        key: e,
                        value: n,
                        previous: r = o.last,
                        next: void 0,
                        removed: !1
                    }, o.first || (o.first = s), r && (r.next = s), l ? o.size++ : t.size++, "F" !== i && (o.index[i] = s)), t
                },
                g = function(t, e) {
                    var n, r = p(t),
                        i = d(e);
                    if ("F" !== i) return r.index[i];
                    for (n = r.first; n; n = n.next)
                        if (n.key == e) return n
                };
            return o(f.prototype, {
                clear: function() {
                    for (var t = p(this), e = t.index, n = t.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete e[n.index], n = n.next;
                    t.first = t.last = void 0, l ? t.size = 0 : this.size = 0
                },
                delete: function(t) {
                    var e = p(this),
                        n = g(this, t);
                    if (n) {
                        var r = n.next,
                            i = n.previous;
                        delete e.index[n.index], n.removed = !0, i && (i.next = r), r && (r.previous = i), e.first == n && (e.first = r), e.last == n && (e.last = i), l ? e.size-- : this.size--
                    }
                    return !!n
                },
                forEach: function(t) {
                    for (var e, n = p(this), r = s(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.next : n.first;)
                        for (r(e.value, e.key, this); e && e.removed;) e = e.previous
                },
                has: function(t) {
                    return !!g(this, t)
                }
            }), o(f.prototype, n ? {
                get: function(t) {
                    var e = g(this, t);
                    return e && e.value
                },
                set: function(t, e) {
                    return y(this, 0 === t ? 0 : t, e)
                }
            } : {
                add: function(t) {
                    return y(this, t = 0 === t ? 0 : t, t)
                }
            }), l && r(f.prototype, "size", {
                get: function() {
                    return p(this).size
                }
            }), f
        },
        setStrong: function(t, e, n) {
            var r = e + " Iterator",
                i = v(e),
                o = v(r);
            u(t, e, (function(t, e) {
                h(this, {
                    type: r,
                    target: t,
                    state: i(t),
                    kind: e,
                    last: void 0
                })
            }), (function() {
                for (var t = o(this), e = t.kind, n = t.last; n && n.removed;) n = n.previous;
                return t.target && (t.last = n = n ? n.next : t.state.first) ? "keys" == e ? {
                    value: n.key,
                    done: !1
                } : "values" == e ? {
                    value: n.value,
                    done: !1
                } : {
                    value: [n.key, n.value],
                    done: !1
                } : (t.target = void 0, {
                    value: void 0,
                    done: !0
                })
            }), n ? "entries" : "values", !n, !0), f(e)
        }
    }
}, function(t, e, n) {
    n(73), n(198), n(89);
    var r = n(62);
    t.exports = r.WeakMap
}, function(t, e, n) {
    "use strict";
    var r, i = n(17),
        o = n(64),
        s = n(67),
        a = n(125),
        c = n(199),
        u = n(23),
        f = n(37).enforce,
        l = n(104),
        d = !i.ActiveXObject && "ActiveXObject" in i,
        p = Object.isExtensible,
        h = function(t) {
            return function() {
                return t(this, arguments.length ? arguments[0] : void 0)
            }
        },
        v = t.exports = a("WeakMap", h, c);
    if (l && d) {
        r = c.getConstructor(h, "WeakMap", !0), s.REQUIRED = !0;
        var y = v.prototype,
            g = y.delete,
            m = y.has,
            b = y.get,
            w = y.set;
        o(y, {
            delete: function(t) {
                if (u(t) && !p(t)) {
                    var e = f(this);
                    return e.frozen || (e.frozen = new r), g.call(this, t) || e.frozen.delete(t)
                }
                return g.call(this, t)
            },
            has: function(t) {
                if (u(t) && !p(t)) {
                    var e = f(this);
                    return e.frozen || (e.frozen = new r), m.call(this, t) || e.frozen.has(t)
                }
                return m.call(this, t)
            },
            get: function(t) {
                if (u(t) && !p(t)) {
                    var e = f(this);
                    return e.frozen || (e.frozen = new r), m.call(this, t) ? b.call(this, t) : e.frozen.get(t)
                }
                return b.call(this, t)
            },
            set: function(t, e) {
                if (u(t) && !p(t)) {
                    var n = f(this);
                    n.frozen || (n.frozen = new r), m.call(this, t) ? w.call(this, t, e) : n.frozen.set(t, e)
                } else w.call(this, t, e);
                return this
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var r = n(64),
        i = n(67).getWeakData,
        o = n(29),
        s = n(23),
        a = n(65),
        c = n(54),
        u = n(200),
        f = n(26),
        l = n(37),
        d = l.set,
        p = l.getterFor,
        h = u.find,
        v = u.findIndex,
        y = 0,
        g = function(t) {
            return t.frozen || (t.frozen = new m)
        },
        m = function() {
            this.entries = []
        },
        b = function(t, e) {
            return h(t.entries, (function(t) {
                return t[0] === e
            }))
        };
    m.prototype = {
        get: function(t) {
            var e = b(this, t);
            if (e) return e[1]
        },
        has: function(t) {
            return !!b(this, t)
        },
        set: function(t, e) {
            var n = b(this, t);
            n ? n[1] = e : this.entries.push([t, e])
        },
        delete: function(t) {
            var e = v(this.entries, (function(e) {
                return e[0] === t
            }));
            return ~e && this.entries.splice(e, 1), !!~e
        }
    }, t.exports = {
        getConstructor: function(t, e, n, u) {
            var l = t((function(t, r) {
                    a(t, l, e), d(t, {
                        type: e,
                        id: y++,
                        frozen: void 0
                    }), null != r && c(r, t[u], t, n)
                })),
                h = p(e),
                v = function(t, e, n) {
                    var r = h(t),
                        s = i(o(e), !0);
                    return !0 === s ? g(r).set(e, n) : s[r.id] = n, t
                };
            return r(l.prototype, {
                delete: function(t) {
                    var e = h(this);
                    if (!s(t)) return !1;
                    var n = i(t);
                    return !0 === n ? g(e).delete(t) : n && f(n, e.id) && delete n[e.id]
                },
                has: function(t) {
                    var e = h(this);
                    if (!s(t)) return !1;
                    var n = i(t);
                    return !0 === n ? g(e).has(t) : n && f(n, e.id)
                }
            }), r(l.prototype, n ? {
                get: function(t) {
                    var e = h(this);
                    if (s(t)) {
                        var n = i(t);
                        return !0 === n ? g(e).get(t) : n ? n[e.id] : void 0
                    }
                },
                set: function(t, e) {
                    return v(this, t, e)
                }
            } : {
                add: function(t) {
                    return v(this, t, !0)
                }
            }), l
        }
    }
}, function(t, e, n) {
    var r = n(66),
        i = n(107),
        o = n(111),
        s = n(85),
        a = n(201),
        c = [].push,
        u = function(t) {
            var e = 1 == t,
                n = 2 == t,
                u = 3 == t,
                f = 4 == t,
                l = 6 == t,
                d = 5 == t || l;
            return function(p, h, v, y) {
                for (var g, m, b = o(p), w = i(b), x = r(h, v, 3), S = s(w.length), k = 0, O = y || a, E = e ? O(p, S) : n ? O(p, 0) : void 0; S > k; k++)
                    if ((d || k in w) && (m = x(g = w[k], k, b), t))
                        if (e) E[k] = m;
                        else if (m) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return g;
                    case 6:
                        return k;
                    case 2:
                        c.call(E, g)
                } else if (f) return !1;
                return l ? -1 : u || f ? f : E
            }
        };
    t.exports = {
        forEach: u(0),
        map: u(1),
        filter: u(2),
        some: u(3),
        every: u(4),
        find: u(5),
        findIndex: u(6)
    }
}, function(t, e, n) {
    var r = n(23),
        i = n(202),
        o = n(21)("species");
    t.exports = function(t, e) {
        var n;
        return i(t) && ("function" != typeof(n = t.constructor) || n !== Array && !i(n.prototype) ? r(n) && null === (n = n[o]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === e ? 0 : e)
    }
}, function(t, e, n) {
    var r = n(41);
    t.exports = Array.isArray || function(t) {
        return "Array" == r(t)
    }
}, function(t, e, n) {
    var r = n(204);
    t.exports = "string" == typeof r ? r : r.toString()
}, function(t, e, n) {
    (t.exports = n(93)(!1)).push([t.i, ".ata-controls__complain-btn:hover,\n.ata-controls__privacy-btn:hover {\n    color: #666666 !important;\n}\n.ata-controls__complain-btn:active,\n.ata-controls__privacy-btn:active {\n    color: #5ac8fa !important;\n}\n.ata-controls__complain-btn_clicked,\n.ata-controls__complain-btn_clicked:hover,\n.ata-controls__complain-btn_clicked:active {\n    color: #000 !important;\n    cursor: default !important;\n}\n.ata-frame-wrapper {\n    overflow: hidden;\n    position: relative;\n}\n", ""])
}, , , function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(16),
        i = n.n(r),
        o = n(1),
        s = n.n(o),
        a = n(2),
        c = n.n(a),
        u = n(0),
        f = n.n(u),
        l = n(11),
        d = n.n(l),
        p = n(43),
        h = n.n(p),
        v = (n(141), n(10)),
        y = n.n(v),
        g = n(12),
        m = n.n(g),
        b = n(30),
        w = n.n(b),
        x = n(14),
        S = n.n(x),
        k = n(25),
        O = n(8),
        E = n(9),
        A = n.n(E),
        P = n(24),
        R = n.n(P),
        C = n(126),
        j = n.n(C),
        I = n(127),
        _ = n.n(I),
        T = n(20),
        D = n.n(T),
        L = "data:image/png;base64,",
        M = L + "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2NgYGD4DwABBAEAcCBlCwAAAABJRU5ErkJggg==",
        F = L + "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2NgYGD8DwABBgEB8Oyl4AAAAABJRU5ErkJggg==",
        B = L + "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2NgYGD6DwABCAECAKvsagAAAABJRU5ErkJggg==";

    function z(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function N(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? z(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function U(t) {
        return [].concat(R()(function(t) {
            var e = [];
            return D()(t, M) && e.push("NATIVE_IMAGE"), D()(t, B) && e.push("NATIVE_ICON"), D()(t, F) && e.push("NATIVE_LOGO"), e
        }(t)), R()(function(t) {
            for (var e, n = /\${(NATIVE_[A-Z]+)}/g, r = []; null !== (e = n.exec(t));) r.push(e[1]);
            return j()(r)
        }(t)))
    }

    function H(t) {
        return {
            id: t.getAttribute("id"),
            macroses: U(t.outerHTML)
        }
    }

    function V(t) {
        return Boolean(t.getAttribute("id"))
    }

    function G(t) {
        var e = document.querySelector(t.originalElementSelector);
        if (!e) return [];
        var n, r, i = (r = [(n = e).clientWidth, n.clientHeight], A()(r, 1)[0]);
        return _()(t.slotSelector).filter(V).map(H).map((function(t) {
            return N(N({}, t), {}, {
                width: i
            })
        }))
    }
    var q = n(57),
        W = n.n(q),
        J = n(95),
        Y = n.n(J),
        Q = n(5),
        K = n.n(Q),
        X = n(44),
        $ = n.n(X),
        Z = n(96),
        tt = n.n(Z);
    n(175);
    var et;

    function nt() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
        return {
            viewportHeight: t.innerHeight,
            viewportWidth: t.innerWidth
        }
    }! function(t) {
        t[t.OTHER = 0] = "OTHER", t[t.PARAGRAPH = 1] = "PARAGRAPH", t[t.STOP_ELEMENT = 2] = "STOP_ELEMENT"
    }(et || (et = {}));
    var rt = Y()();

    function it(t, e) {
        var n = A()(e, 2),
            r = n[0],
            i = n[1],
            o = document.createElement("p");
        return o.className = "inline-ad-slot", o.id = t, o.setAttribute("style", K()(function(t, e) {
            return {
                float: "left",
                height: tt()(e),
                margin: "0 auto",
                overflow: "hidden",
                width: tt()(t)
            }
        }(r, i))), o.setAttribute("data-adtags-width", String(r)), at(o), o
    }

    function ot(t) {
        return t.map((function(t) {
            var e = t.node,
                n = t.width,
                r = t.height,
                i = "inline-ad-".concat(rt()),
                o = it(i, [n, r]);
            return e.insertAdjacentElement("beforebegin", o), {
                height: r,
                id: i,
                width: n
            }
        }))
    }

    function st(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
        return $()(e.querySelectorAll(t))
    }

    function at(t) {
        t.setAttribute("data-adtags-visited", "true")
    }

    function ct(t, e, n) {
        for (var r = [], i = st(n, t), o = function(t, e) {
                var n = new WeakMap;
                return t.forEach((function(t) {
                    n.set(t, et.PARAGRAPH)
                })), e.forEach((function(t) {
                    n.set(t, et.STOP_ELEMENT)
                })), n
            }(st(e, t), i), s = t.firstElementChild; s;) {
            if ("true" !== s.getAttribute("data-adtags-visited")) {
                var a = o.get(s) || et.OTHER;
                r.push({
                    domElement: s,
                    type: a
                })
            }
            s = s.nextElementSibling
        }
        return r
    }

    function ut(t, e) {
        var n = !0;
        return e && e.domElement === t && (n = e.type !== et.STOP_ELEMENT), n
    }

    function ft(t, e, n, r, i, o) {
        for (var s, a = [], c = t.length, u = dt(e), f = (s = e, $()(s.children).filter((function(t) {
                var e = getComputedStyle(t).getPropertyValue("position");
                return "relative" === e || "absolute" === e
            }))), l = [].concat(R()(n), R()(ht(f))), d = n.map((function(t) {
                return t.domElement
            })), p = u + i, h = 0; h < c && !(r >= o); h++) {
            var v = t[h],
                y = v.domElement;
            if (v.type === et.PARAGRAPH) {
                at(y);
                var g = dt(y);
                if (g > p) {
                    var m = t[h - 1];
                    !ut(y.previousElementSibling, m) || W()(d, y) || pt(y, l) || (a.push(y), r++, p = g + i)
                }
            }
        }
        return a
    }

    function lt(t, e, n, r, i, o, s, a) {
        var c, u = ft(ct(t, n, e), t, r, i, o, a);
        if (u.length) {
            var f = (c = getComputedStyle(t).width, parseInt(c, 10));
            return s > f ? [] : u.map((function(t) {
                return {
                    height: 0,
                    node: t,
                    width: f
                }
            }))
        }
        return []
    }

    function dt(t) {
        return t.getBoundingClientRect().top + pageYOffset
    }

    function pt(t, e) {
        for (var n, r, i = !1, o = e.length, s = 0; s < o; s++) {
            var a = e[s],
                c = a.domElement,
                u = a.position;
            if (t !== c) {
                var f = vt(t);
                f.bottom = f.top, r = u, i = !((n = f).bottom < r.top || n.top > r.bottom || n.right < r.left || n.left > r.right)
            }
            if (i) break
        }
        return i
    }

    function ht(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return t.map((function(t) {
            return {
                domElement: t,
                position: vt(t, e)
            }
        }))
    }

    function vt(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = t.getBoundingClientRect(),
            r = n.top,
            i = n.left,
            o = n.width,
            s = n.height,
            a = r + pageYOffset,
            c = i + pageXOffset;
        return {
            bottom: a + s + e,
            left: c,
            right: c + o,
            top: a - e
        }
    }
    var yt = n(4),
        gt = n.n(yt),
        mt = n(6),
        bt = n.n(mt),
        wt = n(7),
        xt = n.n(wt),
        St = n(3),
        kt = n.n(St),
        Ot = n(68),
        Et = n.n(Ot);

    function At(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var Pt = function(t) {
            bt()(n, t);
            var e = At(n);

            function n(t, r) {
                return s()(this, n), e.call(this, "".concat(t, " input: ").concat(JSON.stringify(r)))
            }
            return n
        }(Et()(Error)),
        Rt = function t(e) {
            var n = this;
            s()(this, t), f()(this, "id", void 0), f()(this, "serverCreative", void 0), f()(this, "creativeLabel", void 0), f()(this, "creativeButtons", void 0), f()(this, "onElementViewable", void 0), f()(this, "onPassback", void 0), f()(this, "blcr", void 0), f()(this, "closeURL", void 0), f()(this, "reloadTime", void 0), f()(this, "isCMPDefined", !1), f()(this, "isGdprApplied", !1), f()(this, "viewablePixel", void 0);
            var r = e.creative,
                o = e.onElementViewable,
                a = e.onPassback,
                c = e.blcr,
                u = e.isCMPDefined,
                l = e.isGdprApplied,
                d = e.creativeUIConfig;
            if ("object" !== i()(r) || null === r) throw new Pt("data should be an object", r);
            if (this.serverCreative = r, this.onElementViewable = function(t) {
                    n.viewablePixel && o(n.viewablePixel), t && o(t)
                }, this.onPassback = a, this.blcr = c, this.isCMPDefined = u, this.isGdprApplied = l, "string" != typeof this.serverCreative.sid) throw new Pt("data.sid must be a string", r);
            this.id = this.serverCreative.sid;
            var p = this.serverCreative,
                h = p.close_url,
                v = p.reload_time,
                y = p.imp_view_url;
            "string" == typeof h && (this.closeURL = h), "number" == typeof v && (this.reloadTime = v), "string" == typeof y && (this.viewablePixel = y), this.creativeLabel = d.label, this.creativeButtons = {
                privacySettings: d.privacySettings,
                reportAd: d.reportAd
            }
        };

    function Ct(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var jt = function(t) {
        bt()(n, t);
        var e = Ct(n);

        function n(t) {
            var r;
            s()(this, n), r = e.call(this, t), f()(gt()(r), "passbackURL", void 0), f()(gt()(r), "passbackChain", void 0);
            var i = r.serverCreative,
                o = i.subs,
                a = i.passback_url;
            return r.passbackChain = r.parsePassbackChain(o), "string" == typeof a && (r.passbackURL = a), r
        }
        return c()(n, [{
            key: "parsePassbackChain",
            value: function(t) {
                if (Array.isArray(t)) return t.map((function(t) {
                    var e = t.data,
                        n = t.sandbox_url,
                        r = t.complain_url,
                        i = t.passback_url;
                    if ("string" == typeof e) return {
                        complainURL: r,
                        content: e,
                        passbackURL: i,
                        sandboxURL: n
                    };
                    throw new Error("subs[i].data must be a string")
                }))
            }
        }]), n
    }(Rt);

    function It(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var _t = function(t) {
            bt()(n, t);
            var e = It(n);

            function n(t) {
                var r;
                s()(this, n), r = e.call(this, t), f()(gt()(r), "size", void 0), f()(gt()(r), "content", void 0), f()(gt()(r), "sandboxURL", void 0), f()(gt()(r), "complainURL", void 0), f()(gt()(r), "fallbackURL", void 0), f()(gt()(r), "enableParallax", void 0), f()(gt()(r), "parallaxFailURL", void 0);
                var i = r.serverCreative,
                    o = i.s,
                    a = i.sandbox_url,
                    c = i.complain_url,
                    u = i.data,
                    l = i.fallback_url,
                    d = i.parallax,
                    p = i.parallax_fail_url;
                if (!Array.isArray(o) || "number" != typeof o[0] || "number" != typeof o[1]) throw new Pt("size must be [number,number]", r.serverCreative);
                if (r.size = o, "string" != typeof u) throw new Pt("data must be a string", r.serverCreative);
                return r.content = u, "string" == typeof a && (r.sandboxURL = a), "string" == typeof c && (r.complainURL = c), "string" == typeof l && (r.fallbackURL = l), r.enableParallax = Boolean(d), "string" == typeof p && (r.parallaxFailURL = p), r
            }
            return n
        }(jt),
        Tt = n(128),
        Dt = n.n(Tt),
        Lt = n(13),
        Mt = n.n(Lt),
        Ft = n(19),
        Bt = n.n(Ft);

    function zt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Nt(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? zt(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : zt(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var Ut = {
            height: "100%",
            position: "relative",
            width: "100%"
        },
        Ht = {
            height: "100%",
            position: "absolute",
            width: "100%"
        },
        Vt = {
            position: "fixed",
            top: "50%",
            transform: "translate(0, -50%)"
        };

    function Gt(t, e) {
        if (e.getProps().enableParallax) {
            var n = e.getSize();
            if (function(t, e) {
                    var n = e[1],
                        r = (window.innerHeight - n) / 2,
                        i = t.getBoundingClientRect(),
                        o = i.top,
                        s = i.bottom,
                        a = o + pageYOffset,
                        c = s + pageYOffset,
                        u = document.documentElement.offsetHeight;
                    return a >= r && u - c >= r
                }(t, n)) return e.setParallaxHeight(50),
                function(t, e) {
                    var n, r, i, o = A()(e, 2),
                        s = o[0],
                        a = o[1],
                        c = (n = a, r = document.createElement("div"), (i = Nt({}, Ut)).height = n > 0 ? "".concat(n, "px") : i.height, r.setAttribute("style", K()(i)), r),
                        u = function() {
                            var t = document.createElement("div"),
                                e = Dt()() ? Nt({
                                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                                }, Ht) : Nt({
                                    clip: "rect(0px auto auto 0px)"
                                }, Ht);
                            return t.setAttribute("style", K()(e)), t
                        }(),
                        f = function(t, e) {
                            var n = document.createElement("div");
                            return n.setAttribute("style", K()(Nt(Nt({}, Vt), {}, {
                                height: "".concat(e, "px"),
                                width: "".concat(t, "px")
                            }))), n
                        }(s, a);
                    return t.appendChild(c), c.appendChild(u), u.appendChild(f), f
                }(t, n);
            e.getCreatives().forEach((function(t) {
                if (t instanceof _t) {
                    var e = t.parallaxFailURL;
                    e && Bt()(e) && Mt()({
                        uri: e
                    })
                }
            }))
        }
        return t
    }
    var qt = n(97),
        Wt = n.n(qt),
        Jt = n(59),
        Yt = n.n(Jt),
        Qt = n(45),
        Kt = n.n(Qt);

    function Xt(t) {
        return [].slice.call(t)
    }

    function $t(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Zt(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? $t(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : $t(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var te, ee = ["Seen too often", "Not relevant", "Offensive", "Broken"],
        ne = "".concat("user-feedback", "__slider"),
        re = "".concat("user-feedback", "__reason"),
        ie = "".concat("user-feedback", "__thank-message"),
        oe = K()({
            boxSizing: "border-box",
            padding: "5px",
            textAlign: "center",
            display: "table-cell",
            verticalAlign: "middle",
            margin: 0,
            width: "100%"
        }),
        se = K()({
            boxSizing: "border-box",
            textAlign: "center",
            display: "table-cell",
            padding: 0,
            verticalAlign: "middle",
            position: "absolute",
            top: "50%",
            margin: "-25px 0 0 0"
        }),
        ae = K()({
            left: 0,
            right: 0
        }),
        ce = {
            borderRadius: "2px",
            position: "relative",
            overflow: "hidden",
            display: "inline-block",
            padding: "1px 5px",
            width: "95px",
            height: "40px",
            border: "none",
            backgroundColor: "#FFFFFF",
            cursor: "pointer",
            boxSizing: "border-box",
            margin: "8px auto 0",
            color: "#404040",
            fontWeight: "normal",
            textDecoration: "none"
        },
        ue = K()(Zt(Zt({}, ce), {}, {
            display: "block",
            width: "110px"
        })),
        fe = K()(Zt(Zt({}, ce), {}, {
            marginLeft: "-1px",
            marginTop: 0,
            boxShadow: "none",
            border: "1px solid #E0E0E0",
            height: "50px"
        })),
        le = K()(Zt(Zt({}, ce), {}, {
            marginLeft: "8px"
        })),
        de = K()(Zt(Zt({}, ce), {}, {
            marginLeft: "-1px",
            marginTop: 0,
            boxShadow: "none",
            border: "1px solid #E0E0E0",
            height: "50px",
            width: "60px"
        })),
        pe = K()(Zt(Zt({}, ce), {}, {
            display: "block",
            height: "15%",
            width: "50%"
        })),
        he = K()({
            width: "100%",
            height: "100%",
            display: "table",
            textAlign: "center",
            margin: 0,
            padding: 0
        }),
        ve = K()({
            verticalAlign: "middle",
            display: "table-cell",
            textAlign: "center",
            lineHeight: "14px",
            whiteSpace: "normal",
            margin: 0,
            padding: 0
        }),
        ye = K()({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            background: "#f1f1f1",
            whiteSpace: "nowrap",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: "12px",
            lineHeight: "12px",
            boxShadow: "0px 1px 2px 0px inset #999",
            margin: 0,
            display: "none",
            tableLayout: "fixed",
            letterSpacing: "0.2px",
            zIndex: 5e3,
            padding: 0
        }),
        ge = K()({
            color: "#808080",
            fontSize: "10px",
            lineHeight: "10px",
            textAlign: "center",
            margin: 0,
            padding: 0,
            position: "absolute",
            top: "4px",
            width: "100%"
        }),
        me = K()({
            color: "#404040",
            margin: "8px 0 0 0",
            whiteSpace: "normal",
            display: "none",
            textAlign: "center",
            padding: 0,
            lineHeight: "12px"
        }),
        be = K()({
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: "12px"
        }),
        we = {
            boxSizing: "border-box",
            position: "absolute",
            top: "50%",
            margin: "-25px 0 0 0",
            height: "50px",
            textAlign: "center",
            cursor: "pointer",
            width: "30px",
            border: "1px solid transparent",
            backgroundColor: "rgba(0,0,0,0.4)",
            padding: 0
        },
        xe = {
            boxSizing: "border-box",
            position: "absolute",
            top: "50%",
            left: "50%",
            height: "24px",
            width: "24px",
            margin: "-12px 0 0 -12px",
            padding: 0
        },
        Se = function(t) {
            return "url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 30 30\\' fill=\\'none\\' stroke=\\'%23fff\\' stroke-width=\\'4px\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'><path d=\\'".concat(t, "\\'/></svg>')")
        },
        ke = K()(Zt(Zt({}, we), {}, {
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
            left: 0
        })),
        Oe = K()(Zt(Zt({}, xe), {}, {
            backgroundImage: Se("M20,5L10,15L20,25")
        })),
        Ee = K()(Zt(Zt({}, we), {}, {
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
            right: 0
        })),
        Ae = K()(Zt(Zt({}, xe), {}, {
            backgroundImage: Se("M10,5L20,15L10,25")
        })),
        Pe = n(182),
        Re = function() {
            function t(e) {
                var n = this;
                s()(this, t), this.props = e, f()(this, "rootElement", void 0), f()(this, "templateType", void 0), f()(this, "visible", !1), f()(this, "isWide", !1), f()(this, "isNarrow", !1), f()(this, "clickHandler", (function(t) {
                    t.preventDefault();
                    var e = n.props.onSelectReason,
                        r = t.currentTarget;
                    if (D()(r.className, re)) {
                        var i = r.getAttribute("data-reason-id");
                        i && (e(i), n.onSubmit())
                    } else if (D()(r.className, ne)) {
                        var o, s = r.getAttribute("data-direction");
                        if (s && (null === (o = n.rootElement) || void 0 === o ? void 0 : o.firstElementChild)) {
                            var a = "left" === s ? "right" : "left";
                            n.rootElement.firstElementChild.style[s] = "0", n.rootElement.firstElementChild.style[a] = "", n.hideSliderButton(s), n.showSliderButton(a)
                        }
                    }
                })), this.insertStyles(e.window), this.templateType = e.responsive ? "responsive" : this.getTemplateType();
                var r = this.buildMarkup(),
                    i = e.container;
                i.insertAdjacentHTML("afterbegin", r), this.setupListeners();
                var o = i.querySelector(".".concat("user-feedback"));
                if (!o) throw new Error("The container width class ".concat("user-feedback", " is not found"));
                this.rootElement = o
            }
            return c()(t, [{
                key: "isVisible",
                value: function() {
                    return this.visible
                }
            }, {
                key: "show",
                value: function() {
                    this.props.onStateChange("onshow"), this.rootElement.style.display = "table", this.visible = !0
                }
            }, {
                key: "insertStyles",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                    Pe && S()(Pe.toString) && w()(Pe.toString(), t)
                }
            }, {
                key: "getTemplateType",
                value: function() {
                    var t = "square",
                        e = A()(this.props.size, 2),
                        n = e[0],
                        r = e[1],
                        i = n / r;
                    return r < 250 ? t = r >= 90 && i >= 4 ? "board" : "small" : i >= 4 ? t = "board" : r >= 250 && (t = "square"), t
                }
            }, {
                key: "getFormStyleByTemplate",
                value: function() {
                    var t = oe;
                    if ("small" === this.templateType) {
                        t = se;
                        var e = 95 * ee.length - 10,
                            n = 95 * Math.ceil(ee.length / 2),
                            r = A()(this.props.size, 1)[0];
                        r >= e && (t += ae, this.isWide = !0), r < n && (this.isNarrow = !0)
                    }
                    return t
                }
            }, {
                key: "getReasonStyle",
                value: function() {
                    var t;
                    switch (this.templateType) {
                        case "square":
                            t = ue;
                            break;
                        case "small":
                            t = this.isNarrow ? de : fe;
                            break;
                        case "board":
                            t = le;
                            break;
                        case "responsive":
                            t = pe
                    }
                    return t
                }
            }, {
                key: "buildMarkup",
                value: function() {
                    var t = this.getFormStyleByTemplate(),
                        e = this.getReasonStyle(),
                        n = "small" === this.templateType,
                        r = ee.map((function(t, r) {
                            var i = "";
                            return n && 0 === r && (i = "margin-left:0;"), '<a class="'.concat(re, '" ').concat("data-reason-id", '="').concat(r + 1, '" style="').concat(e, ";").concat(i, '">\n                <div style="').concat(he, '">\n                    <span style="').concat(ve, '">').concat(t, "</span>\n                </div>\n            </a>")
                        })).join(""),
                        i = ke,
                        o = Ee;
                    if (this.isNarrow) {
                        i += "width:20px;", o += "width:20px;"
                    }
                    var s = n && !this.isWide ? '\n            <a class="'.concat(ne, '" ').concat("data-direction", '="left" style="').concat(i, ';display: none;">\n                <div style="').concat(Oe, '"></div>\n            </a>\n            <a class="').concat(ne, '" ').concat("data-direction", '="right" style="').concat(o, '">\n                <div style="').concat(Ae, '"></div>\n            </a>\n        ') : "",
                        a = n ? "" : '<div style="'.concat(ge, '">').concat("Powered by wordads.co", "</div>");
                    return '\n            <div class="'.concat("user-feedback", '" style="').concat(ye, '">\n                ').concat(a, '\n                <div style="').concat(t, '">\n                    <div style="').concat(me, '" class="').concat(ie, '">\n                        <div style="').concat(be, '">').concat("We've received your report.", "</div>\n                        <br>\n                        ").concat("Thanks for your feedback!", "\n                    </div>\n                    ").concat(r, "\n                </div>\n                ").concat(s, "\n            </div>\n        ")
                }
            }, {
                key: "setupListeners",
                value: function() {
                    var t = this;
                    Xt(this.props.container.querySelectorAll("a")).forEach((function(e) {
                        e.addEventListener("click", t.clickHandler)
                    }))
                }
            }, {
                key: "onSubmit",
                value: function() {
                    this.props.onStateChange("onsubmit"), this.removeClickableElements(), this.showThankMessage(), this.updateStyles()
                }
            }, {
                key: "removeClickableElements",
                value: function() {
                    Xt(this.rootElement.querySelectorAll("a")).forEach((function(t) {
                        var e;
                        null === (e = t.parentElement) || void 0 === e || e.removeChild(t)
                    }))
                }
            }, {
                key: "showThankMessage",
                value: function() {
                    var t = this.rootElement.querySelector(".".concat(ie));
                    t && (t.style.display = "block")
                }
            }, {
                key: "updateStyles",
                value: function() {
                    "small" === this.templateType && (this.rootElement.firstElementChild.style.left = "0", this.rootElement.firstElementChild.style.right = "0")
                }
            }, {
                key: "getDirectedSliderButton",
                value: function(t) {
                    var e = ".".concat(ne, "[").concat("data-direction", '="').concat(t, '"]');
                    return this.rootElement.querySelector(e)
                }
            }, {
                key: "showSliderButton",
                value: function(t) {
                    var e = this.getDirectedSliderButton(t);
                    e && (e.style.display = "block")
                }
            }, {
                key: "hideSliderButton",
                value: function(t) {
                    var e = this.getDirectedSliderButton(t);
                    e && (e.style.display = "none")
                }
            }]), t
        }(),
        Ce = n(15),
        je = n.n(Ce),
        Ie = n(129),
        _e = n.n(Ie);
    ! function(t) {
        t[t.START = 0] = "START", t[t.PAUSE = 1] = "PAUSE", t[t.FINISH = 2] = "FINISH"
    }(te || (te = {}));
    var Te = function t() {
            var e = this;
            s()(this, t), f()(this, "timerWorker", void 0), f()(this, "callbacksMap", {}), f()(this, "startTimer", (function(t, n, r) {
                e.timerWorker.postMessage({
                    command: te.START,
                    guid: t,
                    timeout: n
                }), e.callbacksMap[t] = r
            })), f()(this, "pauseTimer", (function(t) {
                e.timerWorker.postMessage({
                    command: te.PAUSE,
                    guid: t
                })
            })), f()(this, "onMessage", (function(t) {
                var n = t.data,
                    r = n.command,
                    i = n.guid;
                if (r === te.FINISH) {
                    var o = e.callbacksMap[i];
                    o && (o(), delete e.callbacksMap[i])
                }
            })), this.timerWorker = _e()('var TIMER_COMMANDS;\n\n(function (TIMER_COMMANDS) {\n  TIMER_COMMANDS[TIMER_COMMANDS["START"] = 0] = "START";\n  TIMER_COMMANDS[TIMER_COMMANDS["PAUSE"] = 1] = "PAUSE";\n  TIMER_COMMANDS[TIMER_COMMANDS["FINISH"] = 2] = "FINISH";\n})(TIMER_COMMANDS || (TIMER_COMMANDS = {}));\n\nvar TICK_INTERVAL = 100;\nvar timersMap = {};\n\nfunction startTimer(_ref) {\n  var guid = _ref.guid,\n      timeout = _ref.timeout;\n  var timePassed = timersMap[guid] && timersMap[guid].timePassed;\n\n  if (typeof timePassed !== "undefined") {\n    timePassed += TICK_INTERVAL;\n  } else {\n    timePassed = 0;\n  }\n\n  if (timePassed > timeout) {\n    onTimerFinish(guid);\n  } else {\n    timersMap[guid] = {\n      timePassed: timePassed,\n      // @ts-ignore\n      timerId: setTimeout(function () {\n        startTimer({\n          guid: guid,\n          timeout: timeout\n        });\n      }, TICK_INTERVAL)\n    };\n  }\n}\n\nfunction pauseTimer(_ref2) {\n  var guid = _ref2.guid;\n  var timerId = timersMap[guid] && timersMap[guid].timerId;\n  clearTimeout(timerId);\n}\n\nfunction onTimerFinish(guid) {\n  removeTimer(guid); // @ts-ignore\n\n  postMessage({\n    command: TIMER_COMMANDS.FINISH,\n    guid: guid\n  });\n}\n\nfunction removeTimer(guid) {\n  pauseTimer({\n    guid: guid\n  });\n  delete timersMap[guid];\n}\n\nonmessage = function onmessage(_ref3) {\n  var data = _ref3.data;\n\n  if (!data.guid) {\n    return;\n  }\n\n  switch (data.command) {\n    case TIMER_COMMANDS.START:\n      {\n        startTimer(data);\n        break;\n      }\n\n    case TIMER_COMMANDS.PAUSE:\n      {\n        pauseTimer(data);\n        break;\n      }\n  }\n};'), this.timerWorker.onmessage = this.onMessage
        },
        De = n(130),
        Le = n.n(De),
        Me = function() {
            function t() {
                s()(this, t)
            }
            return c()(t, [{
                key: "getIntersectionRatio",
                value: function(t) {
                    var e = t.getBoundingClientRect();
                    return e.width * e.height >= 242500 ? .3 : .5
                }
            }]), t
        }(),
        Fe = function() {
            function t() {
                var e = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Me,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                s()(this, t), this.measurementStrategy = n, this.win = r, f()(this, "elements", new Map), f()(this, "observer", void 0), f()(this, "timerStrategy", void 0), f()(this, "onThresholdReach", (function(t) {
                    t.forEach((function(t) {
                        var n = e.elements.get(t.target);
                        if (n) {
                            var r = t.isIntersecting && e.isElementVisible(t, n);
                            !n.isVisible && r ? e.timerStrategy.startTimer(n.guid, n.visibilityThreshold, e.onTimerReach(t.target)) : n.isVisible && !r && e.timerStrategy.pauseTimer(n.guid), n.isVisible = r
                        }
                    }))
                })), f()(this, "onTimerReach", (function(t) {
                    return function() {
                        var n = e.elements.get(t);
                        null == n || n.callback(t), e.unsubscribe(t)
                    }
                }));
                for (var i = [], o = 0; o <= 1; o += .01) i.push(o);
                this.onThresholdReach = this.onThresholdReach.bind(this), this.observer = new r.IntersectionObserver(this.onThresholdReach, {
                    threshold: i
                })
            }
            return c()(t, null, [{
                key: "isSupported",
                value: function() {
                    return Boolean(window.Map) && Boolean(window.IntersectionObserver)
                }
            }]), c()(t, [{
                key: "setTimerStrategy",
                value: function(t) {
                    this.timerStrategy = t
                }
            }, {
                key: "observe",
                value: function(t, e) {
                    var n = this,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
                        i = this.measurementStrategy.getIntersectionRatio(t);
                    return this.elements.set(t, {
                            callback: e,
                            guid: Le()(),
                            intersectionBorders: this.getIntersectionBorders(i),
                            intersectionRatio: i,
                            isVisible: !1,
                            visibilityThreshold: r
                        }), this.observer.observe(t),
                        function() {
                            n.unsubscribe(t)
                        }
                }
            }, {
                key: "getIntersectionBorders",
                value: function(t) {
                    return [window.innerWidth * t, window.innerHeight * t]
                }
            }, {
                key: "isElementVisible",
                value: function(t, e) {
                    var n = t.intersectionRatio,
                        r = t.intersectionRect,
                        i = A()(e.intersectionBorders, 2),
                        o = i[0],
                        s = i[1];
                    return n >= e.intersectionRatio || r.width >= o && r.height >= s
                }
            }, {
                key: "unsubscribe",
                value: function(t) {
                    this.elements.has(t) && (this.observer.unobserve(t), this.elements.delete(t))
                }
            }]), t
        }(),
        Be = new(function() {
            function t() {
                s()(this, t), f()(this, "observer", void 0), Fe.isSupported() && (this.observer = new Fe, this.observer.setTimerStrategy(new Te))
            }
            return c()(t, [{
                key: "observeViewability",
                value: function(t) {
                    var e = t.element,
                        n = t.onElementViewable,
                        r = t.visibilityThreshold;
                    return this.observer ? this.observer.observe(e, n, r) : je.a
                }
            }]), t
        }());

    function ze(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Ne(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ze(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ze(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var Ue = {
        color: "#c8c7cc",
        cursor: "pointer",
        fontFamily: "Verdana, sans-serif",
        fontSize: "6px",
        letterSpacing: "0.3px",
        textTransform: "uppercase",
        verticalAlign: "middle"
    };

    function He(t) {
        var e = t.slotContainer,
            n = t.id,
            r = t.buttons,
            i = t.size,
            o = t.window;
        if (!e) throw new Error("Container doesn't exist");
        var s = A()(i, 1)[0],
            a = [];
        if (r.reportAd) {
            var c = r.reportAd.text;
            a.push({
                cssClass: "ata-controls__complain-btn",
                idPostfix: "__complain-btn",
                onClick: r.reportAd.onClick ? r.reportAd.onClick : je.a,
                style: Ne(Ne({}, Ue), {}, {
                    float: "right"
                }),
                text: c,
                type: "complain"
            })
        }
        if (r.privacySettings && a.push({
                cssClass: "ata-controls__privacy-btn",
                idPostfix: "__privacy-btn",
                onClick: r.privacySettings.onClick ? r.privacySettings.onClick : je.a,
                style: Ne(Ne({}, Ue), {}, {
                    float: "left"
                }),
                text: r.privacySettings.text,
                type: "button"
            }), a.length) {
            var u = {
                    cssClass: "ata-controls",
                    elements: a,
                    style: {
                        height: "".concat(10, "px"),
                        lineHeight: "".concat(10, "px"),
                        margin: 0,
                        padding: 0,
                        textAlign: "right",
                        width: "".concat(s, "px")
                    }
                },
                f = function(t, e) {
                    var n = e.elements.reduce((function(e, n) {
                        var r = n.idPostfix;
                        if (!r) throw new Error("idPostfix is required");
                        var i = n.style,
                            o = n.text,
                            s = n.cssClass;
                        if (!o) throw new Error("text is required");
                        return e + ['<span id="'.concat(t).concat(r, '" '), s ? 'class="'.concat(s, '"') : "", i ? 'style="'.concat(K()(i), '"') : "", ">".concat(o, "</span>")].join("")
                    }), "");
                    return ['<div id="'.concat(t, '__controls" '), e.cssClass ? 'class="'.concat(e.cssClass, '"') : "", e.style ? 'style="'.concat(K()(e.style), '"') : "", ">", n, "</div>"].join("")
                }(n, u);
            e.insertAdjacentHTML("beforeend", f), a.forEach((function(t) {
                var e = o.document.getElementById(n + t.idPostfix);
                e && t.onClick && e.addEventListener("click", t.onClick)
            }))
        }
    }
    var Ve = function() {
        function t(e) {
            var n = this;
            s()(this, t), this.props = e, f()(this, "messageHandler", (function(t) {
                var e = n.props,
                    r = e.slotId,
                    i = e.onPassback,
                    o = n.findSlotIframe(r);
                try {
                    var s = JSON.parse(t.data);
                    if ("passback" === s.event && s.slotId === r) return void i()
                } catch (t) {}
                o && "passback" === t.data && n.isMessageFromIframe(o, t) && i()
            }))
        }
        return c()(t, [{
            key: "subscribe",
            value: function() {
                this.props.window.addEventListener("message", this.messageHandler)
            }
        }, {
            key: "unsubscribe",
            value: function() {
                this.props.window.removeEventListener("message", this.messageHandler)
            }
        }, {
            key: "findSlotIframe",
            value: function(t) {
                var e = document.getElementById(t);
                return e ? e.querySelector("iframe") : null
            }
        }, {
            key: "isMessageFromIframe",
            value: function(t, e) {
                for (var n = e.source, r = t.contentWindow; n && n !== window.top;) {
                    if (r === n) return !0;
                    n = n.parent
                }
                return !1
            }
        }]), t
    }();

    function Ge(t, e, n) {
        var r = e.firstElementChild.contentWindow;
        if (!r) throw new Error("Can not get window of an iframe");
        var i = r.document;
        if (!i) throw new Error("Can not get document of an iframe window");
        try {
            i.open("text/html", "replace"), i.write(t), i.close()
        } catch (t) {}
    }
    var qe = n(184);

    function We(t, e, n) {
        var r = qe && qe.host;
        if (!r) throw new Error("Can't find SafeFrame host API");
        var i = n.id,
            o = n.size,
            s = n.sandboxURL,
            a = A()(o, 2),
            c = a[0],
            u = a[1],
            f = "sf-".concat(i),
            l = "safeframe-".concat(f);
        e.id = f, e.innerHTML = "";
        var d = K()({
                margin: 0,
                overflow: "hidden",
                padding: 0,
                position: "relative"
            }),
            p = {
                dest: f,
                h: u,
                html: t,
                id: l,
                w: c
            },
            h = (r.Config({
                onEndPosRender: function(t) {
                    var e = document.getElementById(t),
                        n = null == e ? void 0 : e.parentElement;
                    if (n) {
                        var r = n.getAttribute("style");
                        n.setAttribute("style", "".concat(r, ";").concat(d))
                    }
                },
                renderFile: s
            }), new r.PosConfig(p), new r.Position(p));
        r.render(h)
    }
    var Je = n(131),
        Ye = n.n(Je);

    function Qe(t, e, n) {
        var r = n.sandboxURL,
            i = e.firstElementChild;
        if (!i) throw new Error("frame is not the firstChile of adContainer");
        if (!r) throw new Error("creative must have sandboxURL");
        i.src = r, i.setAttribute("sandbox", "allow-popups-to-escape-sandbox allow-popups allow-forms allow-scripts allow-pointer-lock");
        var o = i.contentWindow;
        if (!o) throw new Error("Can not get window of an iframe");
        Ye()(i, "load", (function() {
            o.postMessage("sandbox" + t, "*")
        }))
    }

    function Ke(t, e) {
        var n = t.content,
            r = t.sandboxURL,
            i = Ge;
        r && (i = /sandbox\.html$/.test(r) ? Qe : We), i(n, e, t)
    }

    function Xe(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function $e(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Xe(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Xe(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var Ze = {
            font: "10px 'Open Sans', Arial, sans-serif",
            height: "12px",
            margin: 0,
            padding: 0,
            textAlign: "left"
        },
        tn = function() {
            function t(e) {
                var n = this;
                s()(this, t), this.props = e, f()(this, "passbackHandler", void 0), f()(this, "mainContainer", void 0), f()(this, "slotContainer", void 0), f()(this, "iframe", void 0), f()(this, "passbackChainIndex", -1), f()(this, "currentPassbackAd", void 0), f()(this, "lastTracked", Date.now()), f()(this, "parallaxHeight", 0), f()(this, "feedbackForm", void 0), f()(this, "complainBtn", void 0), f()(this, "unsubscribeViewabilityTracker", void 0), f()(this, "onComplain", (function(t, e) {
                    var n = Kt()(t, "type", e);
                    Mt()({
                        uri: n
                    })
                })), f()(this, "onFeedbackFormStateChange", (function(t) {
                    n.complainBtn && ("onshow" === t ? n.complainBtn.innerText = "Report submission" : "onsubmit" === t && (n.complainBtn.innerText = "Report submitted"), n.complainBtn.setAttribute("class", "ata-controls__complain-btn ata-controls__complain-btn_clicked"))
                }))
            }
            return c()(t, [{
                key: "getSize",
                value: function() {
                    var t = this.props,
                        e = t.creative,
                        n = t.label,
                        r = A()(e.size, 2),
                        i = r[0],
                        o = r[1],
                        s = e.complainURL ? 10 : 0,
                        a = 0;
                    if (n) {
                        var c = this.getLabelStyle();
                        a = parseInt(String(c.height), 10) || 0
                    }
                    return [i, o + s + a + this.parallaxHeight]
                }
            }, {
                key: "getProps",
                value: function() {
                    return this.props
                }
            }, {
                key: "getCreatives",
                value: function() {
                    return [this.props.creative]
                }
            }, {
                key: "render",
                value: function() {
                    var t = this,
                        e = this.props,
                        n = e.slotId,
                        r = e.creative,
                        i = e.window;
                    if (!this.validateSize()) throw new Error("The creative for the slot with id ".concat(n, " has incorrect size"));
                    var o = i.document.getElementById(n);
                    if (!o) throw new Error("the container width id ".concat(n, " is not found"));
                    this.mainContainer = o, this.slotContainer = Gt(o, this), (this.props.creative.passbackChain || this.props.creative.passbackURL) && (this.passbackHandler = new Ve({
                        onPassback: this.onPassback.bind(this),
                        slotId: n,
                        window: i
                    }), this.passbackHandler.subscribe()), this.setViewabilityTracker(o, r), this.renderContent(this.props.creative);
                    var s = r.complainURL;
                    if (s) {
                        var a = this.getFrameWrapper(this.slotContainer);
                        a && (this.feedbackForm = new Re({
                            container: a,
                            onSelectReason: function(e) {
                                return t.onComplain(s, e)
                            },
                            onStateChange: this.onFeedbackFormStateChange,
                            size: r.size,
                            window: i
                        }))
                    }
                    this.renderLabel(), this.renderControls()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.unsubscribeViewabilityTracker && this.unsubscribeViewabilityTracker(), this.mainContainer && (this.mainContainer.innerHTML = ""), this.passbackHandler && this.passbackHandler.unsubscribe()
                }
            }, {
                key: "setParallaxHeight",
                value: function(t) {
                    this.parallaxHeight = t
                }
            }, {
                key: "onPassback",
                value: function() {
                    var e;
                    this.notifyAboutPassback(), this.passbackChainIndex += 1;
                    var n = this.props.creative,
                        r = null === (e = n.passbackChain) || void 0 === e ? void 0 : e[this.passbackChainIndex];
                    r ? (this.currentPassbackAd = new t($e($e({}, this.props), {}, {
                        creative: $e($e($e({}, n), r), {}, {
                            passbackChain: void 0
                        })
                    })), this.currentPassbackAd.render()) : (this.collapseSlot(), O.a.error("The ad got a passback message, but there isn't the next creative to show"))
                }
            }, {
                key: "setViewabilityTracker",
                value: function(t, e) {
                    var n = e.onElementViewable;
                    this.unsubscribeViewabilityTracker = Be.observeViewability({
                        element: t,
                        onElementViewable: n
                    })
                }
            }, {
                key: "notifyAboutPassback",
                value: function() {
                    var t, e, n; - 1 === this.passbackChainIndex ? t = this.props.creative.passbackURL : t = null === (e = this.props.creative.passbackChain) || void 0 === e || null === (n = e[this.passbackChainIndex]) || void 0 === n ? void 0 : n.passbackURL;
                    if (t) {
                        var r = Date.now(),
                            i = this.lastTracked - r;
                        this.lastTracked = r, this.props.creative.onPassback(t, i)
                    }
                }
            }, {
                key: "validateSize",
                value: function() {
                    var t = this.getSize();
                    return A()(t, 1)[0] <= this.props.width
                }
            }, {
                key: "getContainerHTML",
                value: function() {
                    var t = this.props.slotId,
                        e = this.props.creative.size,
                        n = A()(e, 2),
                        r = n[0],
                        i = n[1],
                        o = "".concat(r, "px"),
                        s = "".concat(i, "px"),
                        a = "".concat(t, "_iframe"),
                        c = {
                            frameBorder: 0,
                            scrolling: "no",
                            src: "about:blank",
                            style: K()({
                                border: "none",
                                height: s,
                                margin: 0,
                                overflow: "hidden",
                                width: o
                            })
                        },
                        u = K()({
                            height: "100%",
                            margin: 0,
                            overflow: "hidden",
                            padding: 0,
                            position: "relative",
                            width: "100%"
                        }),
                        f = K()({
                            height: s,
                            width: o
                        }),
                        l = K()({
                            height: "100%",
                            width: "100%"
                        });
                    return '<div style="'.concat(f, '" class="').concat("ata-slot-container-wrapper", '">\n                <div style="').concat(l, '" class="').concat("ata-slot-container", '">\n                    <div style="').concat(u, '" class="').concat("ata-frame-wrapper", '">\n                        <iframe id="').concat(a, '" ').concat(Wt()(c), ' class="').concat("ata-frame", '"></iframe>\n                    </div>\n                </div>\n            </div>')
                }
            }, {
                key: "renderContent",
                value: function(t) {
                    this.slotContainer.innerHTML = this.getContainerHTML();
                    var e = this.getFrameWrapper(this.slotContainer);
                    if (this.iframe = null == e ? void 0 : e.firstElementChild, !e) throw new Error("iframe doesn't exists");
                    Ke(t, e)
                }
            }, {
                key: "getLabelStyle",
                value: function() {
                    var t = this.props.label;
                    return Yt()({}, null == t ? void 0 : t.style, Ze)
                }
            }, {
                key: "renderLabel",
                value: function() {
                    var t = this.props.label;
                    if (t) {
                        var e = K()(this.getLabelStyle()),
                            n = Wt()({
                                class: t.cssClass,
                                style: e
                            }),
                            r = "<div ".concat(n, ">").concat(t.text, "</div>");
                        this.slotContainer.insertAdjacentHTML("afterbegin", r)
                    }
                }
            }, {
                key: "renderControls",
                value: function() {
                    var t = this,
                        e = this.props,
                        n = e.creative,
                        r = e.buttons,
                        i = e.window,
                        o = n.id,
                        s = n.size,
                        a = n.complainURL,
                        c = n.isCMPDefined,
                        u = n.isGdprApplied,
                        f = a ? Yt()(r.reportAd, {
                            onClick: function(e) {
                                t.feedbackForm && !t.feedbackForm.isVisible() && t.feedbackForm.show()
                            }
                        }) : void 0;
                    He({
                        buttons: {
                            privacySettings: c && u ? r.privacySettings : void 0,
                            reportAd: f
                        },
                        id: o,
                        size: s,
                        slotContainer: this.slotContainer,
                        window: i
                    });
                    var l = this.props.window.document.getElementById("".concat(o, "__complain-btn"));
                    l && (this.complainBtn = l)
                }
            }, {
                key: "getFrameWrapper",
                value: function(t) {
                    return t.querySelector(".".concat("ata-frame-wrapper"))
                }
            }, {
                key: "collapseSlot",
                value: function() {
                    this.slotContainer.style.width = "0", this.slotContainer.style.height = "0", this.unsubscribeViewabilityTracker && this.unsubscribeViewabilityTracker()
                }
            }]), t
        }(),
        en = function() {
            function t(e) {
                s()(this, t), this.options = e, f()(this, "adsSizes", [])
            }
            return c()(t, [{
                key: "setAdSize",
                value: function(t) {
                    this.adsSizes.push(t)
                }
            }]), t
        }();

    function nn(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var rn = function(t) {
        bt()(n, t);
        var e = nn(n);

        function n() {
            var t;
            s()(this, n);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return t = e.call.apply(e, [this].concat(i)), f()(gt()(t), "fullSize", void 0), t
        }
        return c()(n, [{
            key: "getContainerStyle",
            value: function() {
                var t = this.getFullSize(),
                    e = A()(t, 2),
                    n = (e[0], e[1]);
                return K()({
                    display: "block",
                    height: "".concat(n, "px"),
                    margin: "0 auto",
                    overflow: "hidden",
                    padding: 0,
                    textAlign: "center"
                })
            }
        }, {
            key: "getAdStyle",
            value: function() {
                return K()({
                    display: "block",
                    margin: "0 auto"
                })
            }
        }, {
            key: "validateAdSize",
            value: function() {
                var t = A()(this.options.containerSize, 2),
                    e = t[0],
                    n = t[1],
                    r = this.getFullSize(),
                    i = A()(r, 2),
                    o = i[0],
                    s = i[1],
                    a = !0;
                return n && (a = n >= s), a && e >= o
            }
        }, {
            key: "getFullSize",
            value: function() {
                if (!this.fullSize) {
                    var t = 0,
                        e = 0;
                    this.adsSizes.forEach((function(n) {
                        var r = A()(n, 2),
                            i = r[0],
                            o = r[1];
                        t += o, i > e && (e = i)
                    })), this.fullSize = [e, t]
                }
                return this.fullSize
            }
        }]), n
    }(en);

    function on(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var sn = function(t) {
        bt()(n, t);
        var e = on(n);

        function n() {
            var t;
            s()(this, n);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return t = e.call.apply(e, [this].concat(i)), f()(gt()(t), "fullSize", void 0), t
        }
        return c()(n, [{
            key: "getContainerStyle",
            value: function() {
                return K()({
                    display: "block",
                    height: "".concat(this.calcContainerHeight(), "px"),
                    margin: "0 auto",
                    overflow: "hidden",
                    padding: 0,
                    textAlign: "center"
                })
            }
        }, {
            key: "getAdStyle",
            value: function() {
                return K()({
                    display: "inline-block",
                    margin: "0px ".concat(this.calcSideMargin(), "px"),
                    "vertical-align": "middle"
                })
            }
        }, {
            key: "validateAdSize",
            value: function() {
                var t = A()(this.options.containerSize, 1)[0],
                    e = this.getFullSize();
                return t >= A()(e, 1)[0]
            }
        }, {
            key: "getFullSize",
            value: function() {
                if (!this.fullSize) {
                    var t = 0,
                        e = 0;
                    this.adsSizes.forEach((function(n) {
                        var r = A()(n, 2),
                            i = r[0],
                            o = r[1];
                        e += i + 10, o > t && (t = o)
                    })), this.fullSize = [e, t]
                }
                return this.fullSize
            }
        }, {
            key: "calcContainerHeight",
            value: function() {
                return Math.max.apply(Math, R()(this.adsSizes.map((function(t) {
                    var e = A()(t, 2);
                    e[0];
                    return e[1]
                }))))
            }
        }, {
            key: "calcSideMargin",
            value: function() {
                var t = A()(this.options.containerSize, 1)[0],
                    e = this.getFullSize(),
                    n = A()(e, 1)[0],
                    r = 0;
                if (t !== n) {
                    var i = (t - n) / 2,
                        o = this.adsSizes.length;
                    r = Math.min(5, Math.round(i / o))
                }
                return r
            }
        }]), n
    }(en);
    var an, cn = function() {
        function t(e) {
            s()(this, t), this.props = e, f()(this, "ads", []), f()(this, "mainContainer", void 0), f()(this, "htmlMarkupElements", []), f()(this, "renderStrategy", void 0), f()(this, "compoundContainerId", void 0), f()(this, "compoundContainer", void 0), f()(this, "parallaxHeight", 0);
            var n = this.props.window.document.getElementById(e.slotId);
            if (!n) throw new Error("Container for slot ".concat(e.slotId, " is not found"));
            this.mainContainer = n;
            var r = this.props.slotId;
            this.compoundContainer = this.props.window.document.createElement("div"), this.compoundContainerId = "".concat(r, "-compound-container"), this.compoundContainer.setAttribute("id", this.compoundContainerId);
            var i, o, a = this.props,
                c = a.width,
                u = a.height,
                l = a.type;
            this.renderStrategy = (i = l, o = {
                containerId: this.compoundContainerId,
                containerSize: [c, u]
            }, "h" === i ? new rn(o) : new sn(o)), this.createAds(), Gt(n, this).appendChild(this.compoundContainer)
        }
        return c()(t, [{
            key: "getSize",
            value: function() {
                var t = this.renderStrategy.getFullSize(),
                    e = A()(t, 2);
                return [e[0], e[1] + this.parallaxHeight]
            }
        }, {
            key: "getProps",
            value: function() {
                return this.props
            }
        }, {
            key: "getCreatives",
            value: function() {
                return this.props.creatives
            }
        }, {
            key: "render",
            value: function() {
                if (!this.validateSize()) throw new Error("The creative for the slot with id ".concat(this.props.slotId, " has incorrect size"));
                this.appendHTMLToContainer(), this.appendStyles(), this.ads.forEach((function(t) {
                    t.render()
                }))
            }
        }, {
            key: "destroy",
            value: function() {
                this.mainContainer.innerHTML = ""
            }
        }, {
            key: "setParallaxHeight",
            value: function(t) {
                this.parallaxHeight = t
            }
        }, {
            key: "createAds",
            value: function() {
                var t = this,
                    e = this.props,
                    n = e.creatives,
                    r = e.label,
                    i = e.buttons;
                n.map((function(e) {
                    if (e instanceof _t) {
                        var n = e.id,
                            o = e.size,
                            s = A()(o, 1)[0],
                            a = new tn({
                                buttons: i,
                                creative: e,
                                label: r,
                                slotId: n,
                                width: s,
                                window: t.props.window
                            });
                        t.ads.push(a);
                        var c = a.getSize();
                        t.renderStrategy.setAdSize(c), t.htmlMarkupElements.push(t.createAdHTML(n, c))
                    }
                }))
            }
        }, {
            key: "validateSize",
            value: function() {
                return this.renderStrategy.validateAdSize()
            }
        }, {
            key: "createAdHTML",
            value: function(t, e) {
                var n = A()(e, 2),
                    r = n[0],
                    i = n[1],
                    o = K()({
                        height: "".concat(i, "px"),
                        padding: 0,
                        width: "".concat(r, "px")
                    });
                return '<div id="'.concat(t, '"\n            style="').concat(o, '"\n            class="').concat("compound-ad-unit", '">\n        </div>')
            }
        }, {
            key: "appendHTMLToContainer",
            value: function() {
                this.compoundContainer.innerHTML = this.htmlMarkupElements.join("")
            }
        }, {
            key: "appendStyles",
            value: function() {
                this.compoundContainer.setAttribute("style", this.renderStrategy.getContainerStyle()), w()("\n            #".concat(this.compoundContainerId, " .").concat("compound-ad-unit", " { ").concat(this.renderStrategy.getAdStyle(), " }\n        "))
            }
        }]), t
    }();

    function un(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }! function(t) {
        t.DISPLAY = "d", t.VIDEO = "v", t.NATIVE = "n", t.STICKY = "s"
    }(an || (an = {}));
    var fn = function(t) {
        bt()(n, t);
        var e = un(n);

        function n() {
            return s()(this, n), e.apply(this, arguments)
        }
        return n
    }(Rt);

    function ln(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function dn(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ln(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ln(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function pn(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var hn = function(t) {
        bt()(n, t);
        var e = pn(n);

        function n(t) {
            var r;
            s()(this, n), r = e.call(this, t), f()(gt()(r), "members", void 0), f()(gt()(r), "type", void 0), f()(gt()(r), "enableParallax", void 0);
            var i = r.serverCreative,
                o = i.com,
                a = i.type,
                c = i.parallax;
            if (!Array.isArray(o)) throw new Pt("Can't create CompoundAdResponse", r.serverCreative);
            return r.members = o.map((function(e, n) {
                return e.noad ? new fn(t) : new _t(dn(dn({}, t), {}, {
                    creative: dn(dn({}, e), {}, {
                        reload_time: void 0,
                        sid: r.generateId(n)
                    })
                }))
            })), "string" == typeof a && Bt()(a) ? r.type = a : r.type = "w", r.enableParallax = Boolean(c), r
        }
        return c()(n, [{
            key: "generateId",
            value: function(t) {
                var e = "".concat(this.id, "-compound");
                return "".concat(e, "-").concat(t)
            }
        }]), n
    }(Rt);

    function vn(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var yn = function(t) {
            bt()(n, t);
            var e = vn(n);

            function n(t) {
                var r;
                s()(this, n), r = e.call(this, t), f()(gt()(r), "size", void 0), f()(gt()(r), "content", void 0), f()(gt()(r), "fallbackURL", void 0);
                var i = r.serverCreative,
                    o = i.data,
                    a = i.fallback_url,
                    c = i.s;
                if (!Array.isArray(c) || "number" != typeof c[0] || "number" != typeof c[1]) throw new Pt("size must be [number,number]", r.serverCreative);
                if (r.size = c, "string" != typeof o) throw new Pt("data must be a string", r.serverCreative);
                return r.content = o, "string" == typeof a && (r.fallbackURL = a), r
            }
            return n
        }(jt),
        gn = n(31),
        mn = n.n(gn);

    function bn(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function wn(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? bn(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : bn(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function xn(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var Sn = function(t) {
        bt()(n, t);
        var e = xn(n);

        function n(t) {
            var r;
            s()(this, n), r = e.call(this, t), f()(gt()(r), "fallbackUrls", []), f()(gt()(r), "fallbackAdResponse", void 0), f()(gt()(r), "passbackURL", void 0);
            var o = r.serverCreative,
                a = o.fallback,
                c = o.passback_url;
            if (a) {
                if ("object" !== i()(a) || null === a) throw new Pt("fallback should be an object", a);
                if (a.noad) r.fallbackAdResponse = new fn(wn(wn({}, t), {}, {
                    creative: a
                }));
                else if (a.com) {
                    var u = new hn(wn(wn({}, t), {}, {
                        creative: a
                    }));
                    u.members.forEach((function(t) {
                        if (t instanceof _t) {
                            var e = t.fallbackURL;
                            e && r.fallbackUrls.push(e)
                        }
                    })), r.fallbackAdResponse = u
                } else if (a.do_not_wrap) {
                    var l = new yn(wn(wn({}, t), {}, {
                        creative: a
                    }));
                    "string" == typeof l.fallbackURL && r.fallbackUrls.push(l.fallbackURL), r.fallbackAdResponse = l
                } else {
                    var d = new _t(wn(wn({}, t), {}, {
                        creative: a
                    }));
                    "string" == typeof d.fallbackURL && r.fallbackUrls.push(d.fallbackURL), r.fallbackAdResponse = d
                }
                "string" == typeof r.serverCreative.fallback_url && r.fallbackUrls.push(r.serverCreative.fallback_url)
            }
            return "string" == typeof c && (r.passbackURL = c), r
        }
        return n
    }(Rt);

    function kn(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var On = function(t) {
        bt()(n, t);
        var e = kn(n);

        function n(t) {
            var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            s()(this, n), r = e.call(this, t), f()(gt()(r), "size", [0, 0]), f()(gt()(r), "markup", void 0), f()(gt()(r), "teadsId", void 0);
            var o = mn()(i, (function(t) {
                return "TDS" === t.code
            }));
            if (!o || !o.response) throw new Pt("Teads response is not found in response", i);
            var a = o.response,
                c = a[0];
            if (!c) throw new Pt("Teads bid is not found in response", o);
            r.teadsId = c.request && c.request.code;
            var u = c.prebidBidObject && c.prebidBidObject.ad;
            if ("string" != typeof u) throw new Pt("Teads ad data should be string", u);
            return r.markup = u, r
        }
        return n
    }(Sn);

    function En(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var An = function(t) {
        bt()(n, t);
        var e = En(n);

        function n(t) {
            var r;
            s()(this, n), r = e.call(this, t), f()(gt()(r), "playerType", void 0), f()(gt()(r), "videoErrorUrl", void 0), f()(gt()(r), "playerConfig", {}), f()(gt()(r), "vastXML", void 0), f()(gt()(r), "viewPixel", void 0), f()(gt()(r), "videoDebugFunction", void 0);
            var o = r.serverCreative,
                a = o.data,
                c = o.plc,
                u = o.adslot_view_url;
            if ("string" != typeof a) throw new Pt("data must be a string", a);
            r.vastXML = a, "string" == typeof u && (r.viewPixel = u), "object" === i()(c) && null !== c && (r.playerConfig = c);
            var l = t.playerType,
                d = t.videoErrorUrl,
                p = t.videoDebugFunction;
            return r.playerType = l, r.videoErrorUrl = d, S()(p) && (r.videoDebugFunction = p), r
        }
        return n
    }(Sn);

    function Pn(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var Rn = function(t) {
            bt()(n, t);
            var e = Pn(n);

            function n() {
                var t;
                s()(this, n);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return t = e.call.apply(e, [this].concat(i)), f()(gt()(t), "container", void 0), t
            }
            return c()(n, [{
                key: "render",
                value: function() {
                    var t = this.getProps(),
                        e = t.slotId,
                        n = t.creative,
                        r = t.window,
                        i = r.document.getElementById(e);
                    if (!i) throw new Error("the container width id ".concat(e, " is not found"));
                    this.container = i, this.setViewabilityTracker(i, n), (n.passbackChain || n.passbackURL) && (this.passbackHandler = new Ve({
                        onPassback: this.onPassback.bind(this),
                        slotId: e,
                        window: r
                    }), this.passbackHandler.subscribe());
                    var o = document.createRange().createContextualFragment(n.content);
                    this.container.appendChild(o)
                }
            }]), n
        }(tn),
        Cn = function() {
            function t(e) {
                s()(this, t), this.props = e
            }
            return c()(t, [{
                key: "render",
                value: function() {
                    var t = this.props,
                        e = t.slotId,
                        n = t.creative,
                        r = n.teadsId,
                        i = n.markup,
                        o = document.getElementById(e);
                    if (!o) throw new Error("Element with ".concat(e, " not found"));
                    var s = document.createElement("iframe");
                    s.setAttribute("style", "display: none"), o.insertBefore(s, o.firstElementChild), o.setAttribute("id", r), Ge(i, o)
                }
            }, {
                key: "getSize",
                value: function() {
                    return this.props.size
                }
            }, {
                key: "destroy",
                value: function() {}
            }]), t
        }();

    function jn(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function In(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? jn(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : jn(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var _n = new(function() {
        function t() {
            s()(this, t), f()(this, "store", {})
        }
        return c()(t, [{
            key: "setStore",
            value: function(t) {
                this.store = Object.freeze(In(In({}, this.store), t))
            }
        }, {
            key: "getStore",
            value: function() {
                return this.store
            }
        }]), t
    }());

    function Tn(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Dn(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Tn(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Tn(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var Ln = function() {
            function t(e) {
                var n = this;
                s()(this, t), this.props = e, f()(this, "playerId", ""), f()(this, "impressionCount", 0), f()(this, "slotContainer", void 0), f()(this, "feedbackForm", void 0), f()(this, "complainBtn", void 0), f()(this, "videoContainerId", void 0), f()(this, "size", void 0), f()(this, "store", _n), f()(this, "onImpression", (function() {
                    n.impressionCount++, n.renderControls(), Be.observeViewability({
                        element: n.slotContainer,
                        onElementViewable: n.onViewable,
                        visibilityThreshold: 2e3
                    })
                })), f()(this, "onComplete", (function() {
                    0 === n.impressionCount && n.props.onNoAd && n.props.onNoAd(), n.props.onComplete && n.props.onComplete()
                })), f()(this, "onLoaded", (function() {
                    var t = n.props.window.outstream.getAdExtensions(n.playerId),
                        e = n.getCreativeId(t);
                    Bt()(e) && n.store.setStore({
                        shownCreativesIds: [].concat(R()(n.getShownCreativesIds()), [e])
                    })
                })), f()(this, "playAd", (function() {
                    var t = n.props,
                        e = t.creative,
                        r = t.window,
                        i = e.videoErrorUrl,
                        o = e.playerType,
                        s = e.videoDebugFunction,
                        a = void 0 === s ? je.a : s,
                        c = Dn(Dn({}, e.playerConfig), {}, {
                            customMediaFilesFilter: n.duplicateAdsFilter,
                            logEventFn: a
                        }),
                        u = {
                            appendPlayerInfo: !0,
                            errorUrl: i,
                            format: "inread",
                            inViewTracker: e.viewPixel,
                            onComplete: n.onComplete,
                            onImpression: n.onImpression,
                            onLoaded: n.onLoaded,
                            selector: "#".concat(n.videoContainerId),
                            vastXml: e.vastXML,
                            vendor: o,
                            vendorConfig: c
                        };
                    n.playerId = r.outstream.play(u)
                })), f()(this, "onViewable", (function() {
                    var t = n.props.creative.onElementViewable,
                        e = n.props.window.outstream.getAdExtensions(n.playerId);
                    t(n.getPropertyFromExtensions(e, "imp_view_url"))
                })), f()(this, "calcVideoHeight", (function(t) {
                    return Math.round(t / (16 / 9)) + 24
                })), f()(this, "renderControls", (function() {
                    var t, e = n.props,
                        r = e.buttons,
                        i = e.creative,
                        o = e.size,
                        s = e.window,
                        a = s.outstream.getAdExtensions(n.playerId),
                        c = n.getPropertyFromExtensions(a, "complain_url");
                    c && (n.feedbackForm = new Re({
                        container: n.slotContainer.firstElementChild,
                        onSelectReason: function(t) {
                            return n.onComplain(c, t)
                        },
                        onStateChange: n.onFeedbackFormStateChange,
                        responsive: !0,
                        size: n.size,
                        window: s
                    }), t = Yt()(r.reportAd, {
                        onClick: function(t) {
                            n.feedbackForm && !n.feedbackForm.isVisible() && (s.outstream.pause(n.playerId), n.feedbackForm.show())
                        }
                    })), He({
                        buttons: {
                            reportAd: t
                        },
                        id: i.id,
                        size: o,
                        slotContainer: n.slotContainer,
                        window: s
                    });
                    var u = s.document.getElementById("".concat(i.id, "__complain-btn"));
                    u && (n.complainBtn = u)
                })), f()(this, "onComplain", (function(t, e) {
                    var r = Kt()(t, "type", e);
                    Mt()({
                        uri: r
                    }), setTimeout((function() {
                        n.props.window.outstream.close(n.playerId)
                    }), 3e3)
                })), f()(this, "onFeedbackFormStateChange", (function(t) {
                    n.complainBtn && ("onshow" === t ? n.complainBtn.innerText = "Report submission" : "onsubmit" === t && (n.complainBtn.innerText = "Report submitted"), n.complainBtn.setAttribute("class", "ata-controls__complain-btn ata-controls__complain-btn_clicked"))
                })), f()(this, "getShownCreativesIds", (function() {
                    var t = n.store.getStore().shownCreativesIds;
                    return void 0 === t ? [] : t
                })), f()(this, "getCreativeId", (function(t) {
                    var e = n.getPropertyFromExtensions(t, "creative");
                    return e ? "".concat(d()(e, "@id")) : ""
                })), f()(this, "duplicateAdsFilter", (function(t) {
                    var e = t.ad.getExtensions(),
                        r = n.getCreativeId(e),
                        i = n.getShownCreativesIds();
                    if (!W()(i, r)) return t
                }));
                var r = A()(e.size, 2),
                    i = r[0],
                    o = r[1];
                this.size = [i, o || this.calcVideoHeight(i)]
            }
            return c()(t, [{
                key: "render",
                value: function() {
                    var t = this,
                        e = this.props,
                        r = e.slotId,
                        i = e.beforeRender,
                        o = void 0 === i ? je.a : i,
                        s = document.getElementById(r);
                    if (!s) throw new Error("Element with id '".concat(r, "' not found"));
                    this.slotContainer = s, this.slotContainer.innerHTML = this.getContainerHTML(), o(), n.e(4).then(n.bind(null, 209)).then((function() {
                        t.playAd()
                    }))
                }
            }, {
                key: "getSize",
                value: function() {
                    var t = A()(this.size, 2);
                    return [t[0], t[1] + 10]
                }
            }, {
                key: "destroy",
                value: function() {}
            }, {
                key: "getPropertyFromExtensions",
                value: function(t, e) {
                    var n = mn()(t, (function(t) {
                        return "wordads" === d()(t, "@type")
                    }));
                    return d()(n, e, "")
                }
            }, {
                key: "getContainerHTML",
                value: function() {
                    var t = this.props.slotId,
                        e = A()(this.size, 1)[0],
                        n = K()({
                            height: "auto",
                            margin: 0,
                            overflow: "hidden",
                            padding: 0,
                            position: "relative",
                            width: "".concat(e, "px")
                        });
                    return this.videoContainerId = "".concat(t, "-video"), '<div id="'.concat(this.videoContainerId, '" style="').concat(n, '"></div>')
                }
            }]), t
        }(),
        Mn = function() {
            function t(e) {
                var n = this;
                s()(this, t), this.props = e, f()(this, "fallbackUrls", []), f()(this, "ad", void 0), f()(this, "fallbackAd", void 0), f()(this, "noVideo", !1), f()(this, "onNoAd", (function() {
                    n.noVideo = !0, n.firePassbackAndRenderFallback()
                })), f()(this, "beforeVideoRender", (function() {
                    var t = n.props.slotId;
                    if (!t) throw Error(".tryToRenderVastCreative elementId is empty");
                    var e = document.getElementById(t);
                    if (!e) throw new Error(".tryToRenderVastCreative. Element is not found");
                    var r = e.getAttribute("style"),
                        i = K()({
                            border: "0",
                            height: "".concat(e.style.height),
                            margin: "0",
                            padding: "0",
                            width: "".concat(e.style.width)
                        });
                    e.setAttribute("style", i), r && e.setAttribute("data-style-before-video", r)
                })), f()(this, "onVideoComplete", (function() {
                    if (!n.noVideo) {
                        var t = n.props.slotId;
                        if (t) {
                            var e = document.getElementById(t);
                            if (e) {
                                var r = e.getAttribute("data-style-before-video");
                                r && setTimeout((function() {
                                    return e.setAttribute("style", r)
                                }), 500)
                            } else O.a.error(".onVideoComlete element is not found")
                        } else O.a.error(".onVideoComplete  elementId is empty")
                    }
                }));
                var r = e,
                    i = r.creative,
                    o = r.slotId,
                    a = r.size,
                    c = A()(a, 2),
                    u = c[0],
                    l = c[1];
                if (i instanceof On) this.ad = new Cn({
                    creative: i,
                    size: a,
                    slotId: o
                });
                else {
                    if (!(i instanceof An)) throw new Error("Can't create ad for given props ".concat(JSON.stringify(e)));
                    this.ad = new Ln({
                        beforeRender: this.beforeVideoRender,
                        buttons: i.creativeButtons,
                        creative: i,
                        onComplete: this.onVideoComplete,
                        onNoAd: this.onNoAd,
                        size: a,
                        slotId: o,
                        window: window
                    })
                }
                var d = i.fallbackAdResponse,
                    p = i.fallbackUrls;
                if (d)
                    if (this.fallbackUrls = p, d instanceof hn) this.fallbackAd = new cn({
                        buttons: d.creativeButtons,
                        creatives: d.members,
                        enableParallax: d.enableParallax,
                        height: l,
                        label: d.creativeLabel,
                        slotId: o,
                        type: d.type,
                        width: u,
                        window: window
                    });
                    else if (d instanceof _t) this.fallbackAd = new tn({
                    buttons: d.creativeButtons,
                    creative: d,
                    enableParallax: d.enableParallax,
                    label: d.creativeLabel,
                    slotId: o,
                    width: u,
                    window: window
                });
                else if (d instanceof yn) this.fallbackAd = new Rn({
                    buttons: d.creativeButtons,
                    creative: d,
                    label: d.creativeLabel,
                    slotId: o,
                    width: u,
                    window: window
                });
                else {
                    if (!(d instanceof fn)) throw new Error("Can't create fallback ad for given props ".concat(JSON.stringify(e)));
                    this.fallbackAd = void 0
                }
            }
            return c()(t, [{
                key: "render",
                value: function() {
                    this.ad && this.ad.render()
                }
            }, {
                key: "getSize",
                value: function() {
                    var t;
                    return (null === (t = this.ad) || void 0 === t ? void 0 : t.getSize()) || this.props.size
                }
            }, {
                key: "destroy",
                value: function() {}
            }, {
                key: "firePassbackAndRenderFallback",
                value: function() {
                    var t = this.props.creative.passbackURL,
                        e = void 0 === t ? "" : t;
                    this.sendGetRequest(e), this.renderFallback()
                }
            }, {
                key: "renderFallback",
                value: function() {
                    if (this.fallbackAd) {
                        var t = this.props.afterFallbackRender,
                            e = void 0 === t ? je.a : t;
                        this.fallbackAd.render(), e(this.fallbackAd.getSize()), this.fireFallbackPixels()
                    }
                }
            }, {
                key: "sendGetRequest",
                value: function(t) {
                    Bt()(t) && Mt()({
                        uri: t
                    })
                }
            }, {
                key: "fireFallbackPixels",
                value: function() {
                    this.fallbackUrls.forEach(this.sendGetRequest)
                }
            }]), t
        }(),
        Fn = function() {
            function t(e) {
                s()(this, t), this.props = e, f()(this, "ad", void 0)
            }
            return c()(t, [{
                key: "getID",
                value: function() {
                    return this.props.elementId
                }
            }, {
                key: "showAd",
                value: function(t) {
                    this.createAd(t);
                    try {
                        var e;
                        null === (e = this.ad) || void 0 === e || e.render()
                    } catch (t) {
                        O.a.error("Can't render creative", t)
                    }
                }
            }, {
                key: "getProps",
                value: function() {
                    return this.props
                }
            }, {
                key: "onSlotRemovedFromDOM",
                value: function() {}
            }]), t
        }();

    function Bn(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var zn = function(t) {
            bt()(n, t);
            var e = Bn(n);

            function n() {
                var t;
                s()(this, n);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return t = e.call.apply(e, [this].concat(i)), f()(gt()(t), "appendStyles", (function(e) {
                    var n = t.getID(),
                        r = document.getElementById(n);
                    if (r) {
                        var i = A()(e, 1)[0],
                            o = t.ad instanceof Rn ? "visible" : "hidden",
                            s = K()({
                                display: "block",
                                height: "auto",
                                "margin-left": "auto",
                                "margin-right": "auto",
                                overflow: o,
                                padding: 0,
                                width: "".concat(i, "px")
                            });
                        r.setAttribute("style", s)
                    }
                })), t
            }
            return c()(n, [{
                key: "createAd",
                value: function(t) {
                    var e = this.props,
                        n = e.width,
                        r = e.height,
                        i = this.getID();
                    if (t instanceof Sn) this.ad = new Mn({
                        afterFallbackRender: this.appendStyles,
                        creative: t,
                        size: [n, r],
                        slotId: i
                    });
                    else if (t instanceof hn) this.ad = new cn({
                        buttons: t.creativeButtons,
                        creatives: t.members,
                        enableParallax: t.enableParallax,
                        height: r,
                        label: t.creativeLabel,
                        slotId: i,
                        type: t.type,
                        width: n,
                        window: window
                    });
                    else if (t instanceof _t) this.ad = new tn({
                        buttons: t.creativeButtons,
                        creative: t,
                        enableParallax: t.enableParallax,
                        label: t.creativeLabel,
                        slotId: i,
                        width: n,
                        window: window
                    });
                    else if (t instanceof yn) this.ad = new Rn({
                        buttons: t.creativeButtons,
                        creative: t,
                        label: t.creativeLabel,
                        slotId: i,
                        width: n,
                        window: window
                    });
                    else {
                        if (!(t instanceof fn)) throw new Error("Can't create ad for given props ".concat(JSON.stringify(t)));
                        this.ad = void 0
                    }
                }
            }, {
                key: "serialize",
                value: function() {
                    return {
                        format: "IAD",
                        m: [an.DISPLAY, an.NATIVE],
                        sid: this.getID(),
                        w: this.props.width
                    }
                }
            }, {
                key: "showAd",
                value: function(t) {
                    if (this.createAd(t), this.ad) try {
                        this.ad.render(), this.afterRender()
                    } catch (t) {
                        O.a.error("Can't render creative", t)
                    }
                }
            }, {
                key: "afterRender",
                value: function() {
                    this.ad && this.appendStyles(this.ad.getSize())
                }
            }]), n
        }(Fn),
        Nn = n(132),
        Un = n.n(Nn),
        Hn = n(133),
        Vn = n.n(Hn),
        Gn = n(134),
        qn = n.n(Gn),
        Wn = n(72),
        Jn = n.n(Wn);

    function Yn(t, e) {
        var n = A()(e, 2),
            r = n[0],
            i = n[1],
            o = new RegExp("\\${" + r + "}", "g");
        return t.replace(o, i)
    }

    function Qn(t, e, n) {
        t.addEventListener("click", (function(r) {
            e.forEach((function(t) {
                return Mt()({
                    uri: t
                })
            }));
            var i = r.target;
            Bt()(n) && function(t, e, n) {
                return !!Un()(e, "#".concat(n.id, ' a[href="').concat(t, '"]'))
            }(n, i, t) && (r.preventDefault(), window.open(n))
        }))
    }

    function Kn(t) {
        var e = t.id,
            n = t.macroses,
            r = t.removeClasses,
            i = t.imageSelector,
            o = t.style,
            s = t.imptrackers,
            a = void 0 === s ? [] : s,
            c = t.clicktrackers,
            u = void 0 === c ? [] : c,
            f = document.getElementById(e);
        if (f) {
            var l = function(t, e) {
                return qn()(e).reduce(Yn, t)
            }(f.outerHTML, n);
            if (l = function(t, e) {
                    var n = e.NATIVE_IMAGE,
                        r = e.NATIVE_LOGO,
                        i = e.NATIVE_ICON;
                    return n && (t = Jn()(t, M, n)), r && (t = Jn()(t, F, r)), i && (t = Jn()(t, B, i)), t
                }(l, n), f.outerHTML = l, f = document.getElementById(e), a.length && a.forEach((function(t) {
                    return Mt()({
                        uri: t
                    })
                })), u.length && Qn(f, u, n.NATIVE_CLICKURL), r && Vn()(f, r), i && o) $()(f.querySelectorAll(i)).forEach((function(t) {
                var e = t.getAttribute("style") || "";
                t.setAttribute("style", "".concat(e, ";").concat(o))
            }))
        }
    }

    function Xn(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function $n(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Xn(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Xn(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var Zn = function() {
        function t(e) {
            s()(this, t), this.props = e
        }
        return c()(t, [{
            key: "getSize",
            value: function() {
                return [this.props.width, 0]
            }
        }, {
            key: "render",
            value: function() {
                var t = this.props.adResponse,
                    e = t.id,
                    n = t.onElementViewable,
                    r = this.props.window.document.getElementById(e);
                r && Be.observeViewability({
                    element: r,
                    onElementViewable: n
                }), Kn($n($n({}, this.props), this.props.adResponse))
            }
        }, {
            key: "destroy",
            value: function() {}
        }]), t
    }();

    function tr(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var er = function(t) {
        bt()(n, t);
        var e = tr(n);

        function n(t) {
            var r;
            s()(this, n), r = e.call(this, t), f()(gt()(r), "macroses", void 0), f()(gt()(r), "imptrackers", []), f()(gt()(r), "clicktrackers", []);
            var i = r.serverCreative,
                o = i.data,
                a = i.clicktrackers,
                c = i.imptrackers;
            if (r.macroses = o, c) {
                if (!Array.isArray(c)) throw new Pt("imp trackers must be an array", c);
                r.imptrackers = c
            }
            if (a) {
                if (!Array.isArray(a)) throw new Pt("click trackers must be an array", a);
                r.clicktrackers = a
            }
            return r
        }
        return n
    }(Rt);

    function nr(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function rr(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var ir = function(t) {
            bt()(n, t);
            var e = rr(n);

            function n() {
                return s()(this, n), e.apply(this, arguments)
            }
            return c()(n, [{
                key: "createAd",
                value: function(t) {
                    if (t instanceof er) this.ad = new Zn(function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? nr(Object(n), !0).forEach((function(e) {
                                f()(t, e, n[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : nr(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }))
                        }
                        return t
                    }({
                        adResponse: t,
                        window: this.props.window || window
                    }, this.props));
                    else {
                        if (!(t instanceof fn)) throw new Error("Can't create ad for given props ".concat(JSON.stringify(t)));
                        this.ad = void 0
                    }
                }
            }, {
                key: "serialize",
                value: function() {
                    var t = this.props,
                        e = t.width;
                    return {
                        assets: t.macroses,
                        format: "NAT",
                        sid: this.getID(),
                        w: e
                    }
                }
            }]), n
        }(Fn),
        or = n(56);

    function sr(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var ar = {
            blur: !1,
            focus: !0,
            focusin: !0,
            focusout: !1,
            pagehide: !1,
            pageshow: !0
        },
        cr = new(function(t) {
            bt()(n, t);
            var e = sr(n);

            function n() {
                var t;
                return s()(this, n), t = e.call(this), f()(gt()(t), "pageVisibility", !0), f()(gt()(t), "visibilityHandler", (function(e) {
                    t.onVisibilityChange(!document.hidden)
                })), f()(gt()(t), "visibilityHandlerForOldBrowsers", (function(e) {
                    var n = e || window.event,
                        r = t.pageVisibility;
                    n.type in ar && (r = ar[n.type]), t.onVisibilityChange(r)
                })), t.setPageVisibilityListener(), t
            }
            return c()(n, [{
                key: "isPageVisible",
                value: function() {
                    return this.pageVisibility
                }
            }, {
                key: "setPageVisibilityListener",
                value: function() {
                    "hidden" in document ? document.addEventListener("visibilitychange", this.visibilityHandler) : "mozHidden" in document ? document.addEventListener("mozvisibilitychange", this.visibilityHandler) : "webkitHidden" in document ? document.addEventListener("webkitvisibilitychange", this.visibilityHandler) : "msHidden" in document ? document.addEventListener("msvisibilitychange", this.visibilityHandler) : "onfocusin" in document ? document.onfocusin = document.onfocusout = this.visibilityHandlerForOldBrowsers : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = this.visibilityHandlerForOldBrowsers
                }
            }, {
                key: "onVisibilityChange",
                value: function(t) {
                    this.pageVisibility = t, this.emit("pageVisibilityChange", [t])
                }
            }]), n
        }(n.n(or).a)),
        ur = function() {
            function t(e, n) {
                var r = this;
                s()(this, t), this.timeout = e, this.callback = n, f()(this, "timeoutId", 0), f()(this, "counterId", 0), f()(this, "msPassed", 0), f()(this, "isVisible", !0), f()(this, "isPaused", !1), f()(this, "visibilityChangeHandler", (function(t) {
                    r.isVisible = t, r.isVisible && !r.isPaused ? r.continueTimer() : r.pauseTimer()
                })), f()(this, "onTimeoutReach", (function() {
                    r.pauseTimer(), cr.off("pageVisibilityChange", r.visibilityChangeHandler), r.callback()
                })), cr.isPageVisible() && this.startTimer(), cr.on("pageVisibilityChange", this.visibilityChangeHandler)
            }
            return c()(t, [{
                key: "pause",
                value: function() {
                    this.isPaused = !0, this.pauseTimer()
                }
            }, {
                key: "continue",
                value: function() {
                    this.isPaused && this.isVisible && this.continueTimer(), this.isPaused = !1
                }
            }, {
                key: "startTimer",
                value: function() {
                    var t = this;
                    this.timeoutId = window.setTimeout(this.onTimeoutReach, this.timeout), this.msPassed = 0, this.counterId = window.setInterval((function() {
                        t.msPassed += 1e3
                    }), 1e3)
                }
            }, {
                key: "continueTimer",
                value: function() {
                    this.timeout = this.timeout - this.msPassed, this.startTimer()
                }
            }, {
                key: "pauseTimer",
                value: function() {
                    clearTimeout(this.timeoutId), clearInterval(this.counterId)
                }
            }]), t
        }();

    function fr(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var lr = function(t) {
        bt()(n, t);
        var e = fr(n);

        function n() {
            var t;
            s()(this, n);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return t = e.call.apply(e, [this].concat(i)), f()(gt()(t), "reloadTimer", null), f()(gt()(t), "reloadCounter", 0), t
        }
        return c()(n, [{
            key: "showAd",
            value: function(t) {
                if (this.createAd(t), this.ad) try {
                    this.beforeRender(), this.ad.render(), this.afterRender()
                } catch (t) {
                    O.a.error("Can't render creative", t)
                }
                this.setReloadTimeout()
            }
        }, {
            key: "stopReloadTimer",
            value: function() {
                var t;
                null === (t = this.reloadTimer) || void 0 === t || t.pause()
            }
        }, {
            key: "onSlotRemovedFromDOM",
            value: function() {
                this.stopReloadTimer()
            }
        }, {
            key: "getReloadCounter",
            value: function() {
                return this.reloadCounter
            }
        }, {
            key: "increaseReloadCounter",
            value: function() {
                this.reloadCounter += 1
            }
        }]), n
    }(Fn);

    function dr(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var pr = function(t) {
        bt()(n, t);
        var e = dr(n);

        function n(t) {
            var r;
            return s()(this, n), r = e.call(this, t), f()(gt()(r), "blcr", void 0), f()(gt()(r), "closeURL", void 0), f()(gt()(r), "adResponse", void 0), f()(gt()(r), "slotContainer", void 0), r.slotContainer = r.createSlot(), r
        }
        return c()(n, [{
            key: "serialize",
            value: function() {
                var t = this.getSlotSize(),
                    e = A()(t, 1)[0],
                    n = this.getReloadCounter();
                return {
                    blcr: this.blcr,
                    format: this.getSlotFormat(),
                    m: [an.DISPLAY, an.NATIVE],
                    r_count: n,
                    sid: this.getID(),
                    w: e
                }
            }
        }, {
            key: "createAd",
            value: function(t) {
                this.adResponse = t;
                var e = t instanceof fn;
                e || (this.blcr = t.blcr, this.closeURL = t.closeURL, this.ad && this.ad.destroy());
                var n = this.getID(),
                    r = this.getSlotSize(),
                    i = A()(r, 1)[0];
                if (t instanceof hn) this.ad = new cn({
                    buttons: t.creativeButtons,
                    creatives: t.members,
                    height: 0,
                    label: t.creativeLabel,
                    slotId: n,
                    type: t.type,
                    width: i,
                    window: window
                });
                else if (t instanceof _t) this.ad = new tn({
                    buttons: t.creativeButtons,
                    creative: t,
                    label: t.creativeLabel,
                    slotId: n,
                    width: i,
                    window: window
                });
                else {
                    if (!e) throw new Error("Can't create ad for given props ".concat(JSON.stringify(t)));
                    this.ad = void 0
                }
            }
        }, {
            key: "showAd",
            value: function(t) {
                if (this.createAd(t), this.ad) try {
                    this.beforeRender(), this.ad.render(), this.afterRender()
                } catch (t) {
                    O.a.error("Can't render creative", t)
                }
                this.setReloadTimeout()
            }
        }]), n
    }(lr);

    function hr(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var vr = function(t) {
        bt()(n, t);
        var e = hr(n);

        function n() {
            var t;
            s()(this, n);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return t = e.call.apply(e, [this].concat(i)), f()(gt()(t), "styleElementRef", void 0), f()(gt()(t), "minPageWidth", 0), t
        }
        return c()(n, [{
            key: "beforeRender",
            value: function() {
                this.resetStyles()
            }
        }, {
            key: "afterRender",
            value: function() {
                this.appendStyles()
            }
        }, {
            key: "getSlotFormat",
            value: function() {
                var t = this.getProps().position;
                return "left" === (void 0 === t ? "left" : t) ? "DPL" : "DPR"
            }
        }, {
            key: "getSlotSize",
            value: function() {
                var t = this.getProps();
                return [t.width, t.height]
            }
        }, {
            key: "createSlot",
            value: function() {
                var t = this.props.position,
                    e = void 0 === t ? "left" : t,
                    n = this.getID(),
                    r = document.createElement("div");
                return r.id = n, r.style[e] = "0", r.style.display = "none", document.body.appendChild(r), r
            }
        }, {
            key: "setReloadTimeout",
            value: function() {
                var t, e = this,
                    n = this.getProps().onReloadReady,
                    r = null === (t = this.adResponse) || void 0 === t ? void 0 : t.reloadTime;
                n && r && (this.reloadTimer = new ur(r, (function() {
                    e.isSlotHidden() || (n(e), e.increaseReloadCounter())
                })))
            }
        }, {
            key: "appendStyles",
            value: function() {
                if (!this.ad) throw new Error("ad has not been created yet");
                var t = this.ad.getSize(),
                    e = A()(t, 2),
                    n = (e[0], e[1]),
                    r = this.props,
                    i = r.position,
                    o = void 0 === i ? "left" : i,
                    s = r.contentSelector,
                    a = r.zIndex,
                    c = void 0 === a ? 16777271 : a,
                    u = K()(f()({
                        display: "block",
                        height: "".concat(n, "px"),
                        marginTop: "".concat(-n / 2, "px"),
                        position: "fixed",
                        top: "50%",
                        zIndex: c
                    }, o, 0));
                if (!this.slotContainer) throw new Error(".slotContainer is empty");
                this.slotContainer.setAttribute("style", u);
                var l = window.innerWidth,
                    d = l,
                    p = document.querySelector(s);
                if (p) {
                    var h = parseInt(getComputedStyle(this.slotContainer).getPropertyValue("width"), 10),
                        v = document.documentElement.clientWidth,
                        y = p.getBoundingClientRect(),
                        g = l - v;
                    if (y.right - y.width === y.left) d = l - (v - y.width - 2 * h);
                    else {
                        var m = y.x,
                            b = v - y.right,
                            x = Math.min(m, b);
                        d = y.width + h + x + g
                    }
                }
                var S = this.getID();
                this.styleElementRef = w()("\n            @media (max-width: ".concat(d - 1, "px) {\n                #").concat(S, " {\n                    display: none !important;\n                }\n            }\n        ")), this.minPageWidth = d
            }
        }, {
            key: "resetStyles",
            value: function() {
                var t, e = K()({
                    display: "none"
                });
                if (!this.slotContainer) throw new Error(".slotContainer is empty");
                this.slotContainer.setAttribute("style", e), (null === (t = this.styleElementRef) || void 0 === t ? void 0 : t.parentElement) && (this.styleElementRef.parentElement.removeChild(this.styleElementRef), this.styleElementRef = void 0)
            }
        }, {
            key: "isSlotHidden",
            value: function() {
                return window.innerWidth <= this.minPageWidth
            }
        }]), n
    }(pr);

    function yr(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function gr(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? yr(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yr(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var mr = function() {
            function t(e) {
                var n = this;
                s()(this, t), this.config = e, f()(this, "processDynamicSlots", m()(y.a.mark((function t() {
                    var e, r, i, o, s;
                    return y.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e = [], r = n.config.nativeCfg) try {
                                    i = r.postSelector, o = r.nativeSlotSelector, s = G({
                                        originalElementSelector: i,
                                        slotSelector: o
                                    }).map((function(t) {
                                        return new ir(gr(gr(gr({}, t), r), {}, {
                                            elementId: t.id
                                        }))
                                    })), e = e.concat(s)
                                } catch (t) {
                                    O.a.error("Can't process native slots", t)
                                }
                                if (n.config.inlineAds) try {
                                    e = e.concat(n.processInlineSlots())
                                } catch (t) {
                                    O.a.error("Can't process inline ads", t)
                                }
                                if (n.config.sidebarSticky) try {
                                    e = e.concat(n.processSidebarSticky())
                                } catch (t) {
                                    O.a.error("Can't process sticky ads", t)
                                }
                                try {
                                    n.config.onReadyToShow({
                                        slots: e
                                    })
                                } catch (t) {
                                    O.a.error("Can't show dynamic ads", t)
                                }
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))), "loading" !== document.readyState ? this.processDynamicSlots() : document.addEventListener("DOMContentLoaded", this.processDynamicSlots)
            }
            return c()(t, [{
                key: "processInlineSlots",
                value: function() {
                    var t = this.config.inlineAds;
                    return t ? function(t, e, n, r, i) {
                        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                            s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 20,
                            a = 0,
                            c = [],
                            u = st(t),
                            f = u.length;
                        if (f) {
                            for (var l = nt(), d = l.viewportHeight, p = Math.ceil(r * d), h = i ? st(i) : [], v = ht(h, p), y = 0; y < f && !(a >= s); y++) {
                                var g = lt(u[y], n, e, v, a, p, o, s);
                                c.push.apply(c, R()(g)), a += g.length
                            }
                            if (c.length) return ot(c)
                        }
                        return []
                    }(t.articleSelector, t.paragraphSelector, t.stopSelector, t.viewportRatio, t.resetSelector, t.minWidth, t.maxSlots).map((function(t) {
                        return new zn(gr({
                            elementId: t.id
                        }, t))
                    })) : []
                }
            }, {
                key: "processSidebarSticky",
                value: function() {
                    var t = this.config,
                        e = t.sidebarSticky,
                        n = t.onReloadReady;
                    if (!e) return [];
                    var r = e.contentSelector,
                        i = e.minWidth,
                        o = e.position,
                        s = e.zIndex,
                        a = function(t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                r = document.documentElement.clientWidth,
                                i = document.querySelector(e);
                            if (i) {
                                var o = i.getBoundingClientRect(),
                                    s = o[t],
                                    a = "right" === t ? r - s : s,
                                    c = "sidebar-sticky-ad",
                                    u = Math.max(0, Math.floor(a));
                                if (!(n > u)) return {
                                    id: c,
                                    width: u
                                }
                            }
                        }(o, r, i);
                    return a ? [new vr(gr(gr({}, a), {}, {
                        contentSelector: r,
                        elementId: a.id,
                        height: 0,
                        onReloadReady: n,
                        position: o,
                        zIndex: s
                    }))] : []
                }
            }]), t
        }(),
        br = n(46),
        wr = function() {
            function t(e) {
                var n = this;
                s()(this, t), this.slotRegistry = e, f()(this, "mutationObserver", void 0), this.mutationObserver = new MutationObserver((function(t) {
                    t.forEach((function(t) {
                        Xt(t.removedNodes).forEach((function(t) {
                            n.findAndUnregisterSlots(t)
                        }))
                    }))
                })), this.mutationObserver.observe(document.documentElement, {
                    childList: !0,
                    subtree: !0
                })
            }
            return c()(t, [{
                key: "findAndUnregisterSlots",
                value: function(t) {
                    var e = this,
                        n = this.slotRegistry,
                        r = t.id;
                    n.get(r) ? this.unregisterSlot(r) : n.keys().forEach((function(n) {
                        t.querySelector && t.querySelector("#".concat(n)) && e.unregisterSlot(n)
                    }))
                }
            }, {
                key: "unregisterSlot",
                value: function(t) {
                    this.slotRegistry.unregisterSlotAndReturnIt(t).onSlotRemovedFromDOM()
                }
            }]), t
        }(),
        xr = n(135),
        Sr = n.n(xr),
        kr = function() {
            function t() {
                s()(this, t), f()(this, "registeredSlotsMap", {})
            }
            return c()(t, [{
                key: "get",
                value: function(t) {
                    return this.registeredSlotsMap[t]
                }
            }, {
                key: "getAll",
                value: function() {
                    return Sr()(this.registeredSlotsMap)
                }
            }, {
                key: "keys",
                value: function() {
                    return Object.keys(this.registeredSlotsMap)
                }
            }, {
                key: "register",
                value: function(t) {
                    var e = this;
                    t.forEach((function(t) {
                        var n = t.getID();
                        e.registeredSlotsMap[n] || (e.registeredSlotsMap[n] = t)
                    }))
                }
            }, {
                key: "unregisterSlotAndReturnIt",
                value: function(t) {
                    var e = this.get(t);
                    return delete this.registeredSlotsMap[t], e
                }
            }]), t
        }(),
        Or = n(69),
        Er = n.n(Or),
        Ar = n(70),
        Pr = n.n(Ar),
        Rr = n(18),
        Cr = n.n(Rr),
        jr = "api",
        Ir = "linearity",
        _r = "protocols",
        Tr = "w",
        Dr = "h",
        Lr = "playbackmethods",
        Mr = "mimes",
        Fr = "startdelay",
        Br = 2,
        zr = 2,
        Nr = 3,
        Ur = 5,
        Hr = 6,
        Vr = 2,
        Gr = 1;
    var qr = function(t) {
            if ("function" == typeof t) {
                var e = {};
                return function() {
                    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    var o = JSON.stringify(r);
                    return o in e || (e[o] = t.apply(void 0, r)), e[o]
                }
            }
            throw new Error("the arg must be a function")
        }((function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.document,
                e = t.createElement("VIDEO"),
                n = ["video/ogg", "video/mp4", "application/x-mpegURL", "video/webm"];
            return n.filter((function(t) {
                return "" !== e.canPlayType(t)
            }))
        })),
        Wr = function(t, e) {
            var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qr;
            return n = {}, f()(n, Fr, 0), f()(n, jr, [Br]), f()(n, Ir, Gr), f()(n, _r, [zr, Nr, Ur, Hr]), f()(n, Tr, Math.floor(t)), f()(n, Dr, Math.floor(e)), f()(n, Lr, [Vr]), f()(n, Mr, ["application/javascript"].concat(R()(r()))), n
        },
        Jr = n(136),
        Yr = n.n(Jr),
        Qr = n(137),
        Kr = n.n(Qr),
        Xr = n(47),
        $r = n.n(Xr),
        Zr = n(39),
        ti = n.n(Zr),
        ei = n(71),
        ni = n.n(ei),
        ri = n(22),
        ii = n.n(ri),
        oi = n(40),
        si = n(58),
        ai = $r()(Mt.a);
    var ci = n(48),
        ui = n.n(ci),
        fi = n(49),
        li = n.n(fi);

    function di(t) {
        return t && Bt()(t) ? function(t, e) {
            return {
                config: {
                    complete: 1,
                    nodes: [{
                        asi: e,
                        hp: 1,
                        sid: t
                    }],
                    ver: "1.0"
                },
                validation: "strict"
            }
        }(t, "s.pubmine.com") : null
    }

    function pi(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function hi(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? pi(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pi(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var vi = 0;

    function yi(t, e) {
        var n = d()(e, "c"),
            r = d()(e, "ds", []),
            i = d()(e, "vs", []);
        "TDS" === n && i.length && (vi++, i = i.map((function(t) {
            return hi(hi({}, t), {}, {
                code: "".concat(d()(t, "code"), "_").concat(vi)
            })
        })));
        var o = d()(e, "to", 4e3),
            s = d()(e, "p", {}),
            a = function(t) {
                var e = d()(t, "schain", {});
                if (li()(e)) return {
                    config: e,
                    validation: "strict"
                }
            }(e),
            c = i.concat(r);
        return "string" == typeof n && t.push({
            code: n,
            displaySlots: r,
            params: s,
            schain: a,
            slots: c,
            timeout: o,
            videoSlots: i
        }), t
    }

    function gi(t) {
        return ui()(t) ? t.reduce(yi, []) : []
    }

    function mi(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function bi(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? mi(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : mi(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function wi(t) {
        switch (t.error) {
            case __ATA_HB.AdapterError.ADAPTER_ERROR:
                return "err";
            case __ATA_HB.AdapterError.BIDDER_TIMEOUT:
                return "to";
            default:
                return "err"
        }
    }

    function xi(t) {
        return t.split("x").map(Number)
    }

    function Si(t, e) {
        return {
            b: "nobid",
            c: t,
            r: e.request
        }
    }

    function ki(t, e) {
        return e.status === __ATA_HB.BidStatus.NO_BID ? e.size ? bi(bi({}, Si(t, e)), {}, {
            s: xi(e.size)
        }) : Si(t, e) : {
            b: {
                bid: e.value
            },
            c: t,
            crid: e.creativeId,
            s: xi(e.size)
        }
    }

    function Oi(t, e) {
        switch (e.mediaType) {
            case __ATA_HB.BidMediaType.VIDEO:
                return function(t, e) {
                    var n = ki(t, e),
                        r = n.b,
                        i = n.s,
                        o = n.c,
                        s = n.r,
                        a = n.crid;
                    return {
                        b: Cr()(r) ? r : bi(bi({}, r), {}, {
                            vast: e.vast
                        }),
                        c: o,
                        crid: a,
                        m: e.mediaType,
                        r: s,
                        s: i
                    }
                }(t, e);
            case __ATA_HB.BidMediaType.NATIVE:
                return function(t, e) {
                    var n = ki(t, e),
                        r = n.b,
                        i = n.s,
                        o = n.c,
                        s = n.r,
                        a = n.crid;
                    return {
                        b: Cr()(r) ? r : bi(bi({}, r), {}, {
                            assets: e.assets
                        }),
                        c: o,
                        crid: a,
                        m: e.mediaType,
                        r: s,
                        s: i
                    }
                }(t, e);
            case __ATA_HB.BidMediaType.DISPLAY:
                return function(t, e) {
                    return bi(bi({}, ki(t, e)), {}, {
                        b: e.status === __ATA_HB.BidStatus.NO_BID ? "nobid" : {
                            bid: e.value,
                            cid: e.bidId
                        },
                        m: e.mediaType
                    })
                }(t, e);
            default:
                return ki(t, e)
        }
    }

    function Ei(t, e) {
        var n = [];
        return t.forEach((function(t) {
            if (ii()(t.error)) Array.isArray(t.response) && t.response.forEach((function(e) {
                n.push(Oi(t.code, e))
            }));
            else {
                var r = mn()(e, (function(e) {
                        return t.code === e.code
                    })),
                    i = r.displaySlots,
                    o = r.videoSlots;
                i && i.forEach((function(e) {
                    n.push({
                        b: wi(t),
                        c: t.code,
                        r: e
                    })
                })), o && o.forEach((function(e) {
                    n.push({
                        b: wi(t),
                        c: t.code,
                        r: e
                    })
                }))
            }
        })), n
    }

    function Ai(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Pi(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Ai(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ai(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var Ri, Ci = $r()(Kr.a),
        ji = function() {
            function t(e) {
                var n;
                s()(this, t), this.config = e, f()(this, "isAdBlockPlusEnabled", void 0), f()(this, "adRequestCount", 0), f()(this, "apiUrl", void 0), this.setUserIdCookie(e), this.apiUrl = "//".concat(e.authority), this.isAdBlockPlusEnabled = (n = this.apiUrl, ai({
                    uri: n + "/pixel?id=15&type=img",
                    timeout: 1e3
                })).then((function() {
                    return !1
                })).catch((function(t) {
                    return "timeout" !== t || void 0
                }))
            }
            var e, n, r, o, a;
            return c()(t, [{
                key: "getAdsForSlots",
                value: (a = m()(y.a.mark((function t(e) {
                    var n, r, i, o, s, a, c, u, f, l, d, p, h = this;
                    return y.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n = e.slots, r = e.hb, i = (r = void 0 === r ? {} : r).response, o = void 0 === i ? [] : i, s = r.config, a = void 0 === s ? [] : s, c = {}, u = n.map((function(t) {
                                    return c[t.getID()] = t, t.serialize()
                                })), t.next = 7, this.getCommonPostRequestParams();
                            case 7:
                                return f = t.sent, t.next = 10, this.sendPostRequest("/adjr", Pi({
                                    count: ++this.adRequestCount,
                                    hb_bids: Ei(o, a),
                                    imp_delay: this.getImpDelay(),
                                    section_id: this.findSectionId(u),
                                    slots: u,
                                    vma: Number(this.config.isViewabilityMeasurable)
                                }, f));
                            case 10:
                                return l = t.sent, d = JSON.parse(l), this.setUserIdCookie(d), p = [], d.ads.forEach((function(t) {
                                    var e = c[t.sid];
                                    if (e) {
                                        var n;
                                        try {
                                            n = h.createAdResponse(t, e.getID(), o, 1 === f.gdpr)
                                        } catch (t) {
                                            return void O.a.error("Ad response validation failed", t)
                                        }
                                        p.push([e, n])
                                    }
                                })), t.abrupt("return", p);
                            case 16:
                            case "end":
                                return t.stop()
                        }
                    }), t, this)
                }))), function(t) {
                    return a.apply(this, arguments)
                })
            }, {
                key: "sendError",
                value: function(t, e) {
                    var n = ti()(this.apiUrl + "/jslog", {
                        m: e && e.toString(),
                        n: t,
                        pvid: this.config.pageViewID,
                        s: "err",
                        v: "2.37.11677685674593"
                    });
                    Mt()({
                        uri: n
                    })
                }
            }, {
                key: "getHBConfig",
                value: (o = m()(y.a.mark((function t(e) {
                    var n, r, i, o;
                    return y.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, this.getCommonPostRequestParams();
                            case 2:
                                return n = t.sent, r = Pi({
                                    slots: e.map((function(t) {
                                        return t.serialize()
                                    }))
                                }, n), t.next = 6, this.sendPostRequest("/adconf", r);
                            case 6:
                                return i = t.sent, o = JSON.parse(i), this.setUserIdCookie(o), t.abrupt("return", gi(o.hb));
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, this)
                }))), function(t) {
                    return o.apply(this, arguments)
                })
            }, {
                key: "setUserIdCookie",
                value: function(t) {
                    var e = t.tuuid;
                    e && "number" == typeof e.maxAge && "string" == typeof e.value && (Yr()("__ATA_tuuid", e.value, e.maxAge, "/", void 0, !0, "None"), this.config.userID = e.value)
                }
            }, {
                key: "sendPassback",
                value: function(t, e) {
                    var n = ti()(t, {
                        imp_delay: e
                    });
                    Mt()({
                        uri: n
                    })
                }
            }, {
                key: "sendViewabilityPixel",
                value: function(t) {
                    Bt()(t) && Mt()({
                        uri: t
                    })
                }
            }, {
                key: "sendVideoDebug",
                value: (r = m()(y.a.mark((function t(e, n) {
                    var r;
                    return y.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = {
                                    debug: n,
                                    player_id: e,
                                    plt: this.config.playerType
                                }, t.prev = 1, t.next = 4, this.sendPostRequest("/v_debug", r);
                            case 4:
                                t.next = 9;
                                break;
                            case 6:
                                t.prev = 6, t.t0 = t.catch(1), O.a.error("Can't send /v_debug", t.t0);
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }), t, this, [
                        [1, 6]
                    ])
                }))), function(t, e) {
                    return r.apply(this, arguments)
                })
            }, {
                key: "getVideoErrorURL",
                value: function() {
                    return this.apiUrl + "/adve"
                }
            }, {
                key: "createAdResponse",
                value: function(t, e, n, r) {
                    var o = {
                        blcr: t.blcr,
                        creative: t,
                        creativeUIConfig: this.config.creativeUIConfig,
                        isCMPDefined: this.config.isCMPDefined,
                        isGdprApplied: r,
                        onElementViewable: this.sendViewabilityPixel,
                        onPassback: this.sendPassback
                    };
                    if (t.noad) return new fn(o);
                    if (t.com) return new hn(o);
                    if (t.teads) return new On(o, n);
                    if (t.adslot_view_url) return new An(Pi(Pi({}, o), {}, {
                        playerType: this.config.playerType,
                        videoDebugFunction: this.config.videoDebug ? this.sendVideoDebug.bind(this, e) : void 0,
                        videoErrorUrl: this.getVideoErrorURL()
                    }));
                    if ("object" === i()(t.data) && null !== t.data) return new er(o);
                    if (t.do_not_wrap) return new yn(o);
                    if (!t.com && !t.adslot_view_url) return new _t(o);
                    throw new Error("Can't create parse AdResponse")
                }
            }, {
                key: "getCommonPostRequestParams",
                value: (n = m()(y.a.mark((function t() {
                    var e, n;
                    return y.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, this.isAdBlockPlusEnabled;
                            case 2:
                                if (e = t.sent, n = {}, !this.config.isCMPDefined) {
                                    t.next = 13;
                                    break
                                }
                                return t.prev = 5, t.next = 8, Object(k.a)();
                            case 8:
                                n = t.sent, t.next = 13;
                                break;
                            case 11:
                                t.prev = 11, t.t0 = t.catch(5);
                            case 13:
                                return t.t1 = Pi, t.t2 = ni()(e) ? Number(e) : void 0, t.t3 = this.config.pageParams, t.t4 = window.top !== window ? document.referrer : window.location.href, t.t5 = this.config.userID, t.next = 20, Object(oi.a)();
                            case 20:
                                return t.t6 = t.sent, t.t7 = "2.37.11677685674593", t.t8 = {
                                    player: Wr(640, 360),
                                    plt: this.config.playerType
                                }, t.t9 = {
                                    h: this.config.viewPort.height,
                                    w: this.config.viewPort.width
                                }, t.t10 = {
                                    ab: t.t2,
                                    pp: t.t3,
                                    ref: t.t4,
                                    tuuid: t.t5,
                                    us_privacy: t.t6,
                                    v: t.t7,
                                    video: t.t8,
                                    vp: t.t9
                                }, t.t11 = Object(si.a)(n), t.abrupt("return", (0, t.t1)(t.t10, t.t11));
                            case 27:
                            case "end":
                                return t.stop()
                        }
                    }), t, this, [
                        [5, 11]
                    ])
                }))), function() {
                    return n.apply(this, arguments)
                })
            }, {
                key: "sendPostRequest",
                value: (e = m()(y.a.mark((function t(e, n) {
                    var r, i, o;
                    return y.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = this.apiUrl + e, i = {
                                    mockserverSessionId: this.getMockserverSessionId(),
                                    pvid: this.config.pageViewID,
                                    rid: String(this.config.routeId)
                                }, o = {
                                    data: JSON.stringify(n),
                                    headers: {
                                        "Content-type": "text/plain"
                                    },
                                    method: "POST",
                                    queryParams: i,
                                    url: r,
                                    withCredentials: !0
                                }, t.abrupt("return", Ci(o));
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), t, this)
                }))), function(t, n) {
                    return e.apply(this, arguments)
                })
            }, {
                key: "findSectionId",
                value: function(t) {
                    var e = mn()(t, (function(t) {
                        return !ii()(t.section_id)
                    }));
                    return e ? e.section_id : void 0
                }
            }, {
                key: "getImpDelay",
                value: function() {
                    return this.config.libraryLoadedAt ? Date.now() - this.config.libraryLoadedAt : void 0
                }
            }, {
                key: "getMockserverSessionId",
                value: function() {
                    return Er()("mockserverSessionId") || window.mockserverSessionId || null
                }
            }]), t
        }(),
        Ii = n(33),
        _i = n.n(Ii);

    function Ti(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }! function(t) {
        t[t.IFRAME = 1] = "IFRAME", t[t.IMG = 2] = "IMG", t[t.SCRIPT = 3] = "SCRIPT"
    }(Ri || (Ri = {}));
    var Di = $r()(Mt.a);

    function Li(t, e) {
        t.forEach((function(t) {
            return function(t, e) {
                var n = t.url,
                    r = t.type;
                switch (r) {
                    case Ri.IFRAME:
                        ! function(t) {
                            var e = document.createElement("iframe");
                            e.setAttribute("style", "display: none"), e.src = t, document.body.appendChild(e)
                        }(n);
                        break;
                    case Ri.IMG:
                        Di({
                            uri: n
                        }).then(je.a).catch(je.a);
                        break;
                    case Ri.SCRIPT:
                        ! function(t) {
                            _i()(t, je.a)
                        }(n);
                        break;
                    default:
                        e(new Mi("Invalid type (".concat(r, ") for sync url: ").concat(n)))
                }
            }(t, e)
        }))
    }
    var Mi = function(t) {
        bt()(n, t);
        var e = Ti(n);

        function n() {
            return s()(this, n), e.apply(this, arguments)
        }
        return n
    }(Et()(Error));
    var Fi = n(138),
        Bi = n.n(Fi);

    function zi() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    function Ni(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var Ui, Hi, Vi = n(190),
        Gi = "".concat("bottom-sticky__ad", "-container"),
        qi = Gi,
        Wi = "".concat(Gi, " ").concat(Gi, "_hidden"),
        Ji = "".concat("bottom-sticky__ad", "-close-btn"),
        Yi = function(t) {
            bt()(n, t);
            var e = Ni(n);

            function n(t) {
                var r;
                return s()(this, n), r = e.call(this, t), f()(gt()(r), "isClosed", !1), f()(gt()(r), "lastPageYOffset", 0), f()(gt()(r), "slotRenderedTs", 0), f()(gt()(r), "isAdRendered", !1), f()(gt()(r), "onScroll", (function() {
                    var t;
                    pageYOffset < 0 || r.isClosed || !r.isAdRendered || (pageYOffset !== r.lastPageYOffset && (null === (t = r.slotContainer) || void 0 === t ? void 0 : t.className) && (pageYOffset < r.lastPageYOffset ? r.hideSlot() : r.showSlot()), r.lastPageYOffset = pageYOffset)
                })), r.insertStyles(), r.addListeners(), r
            }
            return c()(n, [{
                key: "beforeRender",
                value: function() {
                    this.isAdRendered = !1, this.resetStyles()
                }
            }, {
                key: "afterRender",
                value: function() {
                    this.showSlot(), this.slotRenderedTs = Date.now(), this.isAdRendered = !0
                }
            }, {
                key: "getSlotFormat",
                value: function() {
                    return this.getProps().format
                }
            }, {
                key: "getSlotSize",
                value: function() {
                    var t = zi();
                    return [t.width, t.height]
                }
            }, {
                key: "createSlot",
                value: function() {
                    var t = this.props,
                        e = t.width,
                        n = t.zIndex,
                        r = this.getID(),
                        i = K()({
                            margin: "0 auto",
                            width: "".concat(e, "px")
                        }),
                        o = n ? K()({
                            zIndex: n
                        }) : "",
                        s = '<div class="'.concat(Wi, '" id="').concat(qi, '" style="').concat(o, '">\n            <div class="').concat(Ji, '"></div>\n            <div id="').concat(r, '" style="').concat(i, '"></div>\n        </div>');
                    return document.body.insertAdjacentHTML("beforeend", s), document.getElementById(qi)
                }
            }, {
                key: "setReloadTimeout",
                value: function() {
                    var t, e = this,
                        n = this.getProps().onReloadReady,
                        r = null === (t = this.adResponse) || void 0 === t ? void 0 : t.reloadTime;
                    n && r && (this.reloadTimer = new ur(r, (function() {
                        n(e), e.increaseReloadCounter()
                    })))
                }
            }, {
                key: "addListeners",
                value: function() {
                    var t = document.querySelector(".".concat(Ji));
                    null == t || t.addEventListener("click", this.closeSlotContainer.bind(this)), this.onScroll = Bi()(this.onScroll, 100), window.addEventListener("scroll", this.onScroll)
                }
            }, {
                key: "removeListeners",
                value: function() {
                    window.removeEventListener("scroll", this.onScroll)
                }
            }, {
                key: "removeAdContainer",
                value: function() {
                    var t, e;
                    null === (t = this.slotContainer) || void 0 === t || null === (e = t.parentNode) || void 0 === e || e.removeChild(this.slotContainer)
                }
            }, {
                key: "closeSlotContainer",
                value: function() {
                    this.isClosed = !0, this.stopReloadTimer(), this.sendClosePixel(), this.removeAdContainer(), this.removeListeners()
                }
            }, {
                key: "showSlot",
                value: function() {
                    var t;
                    this.slotContainer.className = Gi, null === (t = this.reloadTimer) || void 0 === t || t.continue()
                }
            }, {
                key: "hideSlot",
                value: function() {
                    this.slotContainer.className = Wi, this.stopReloadTimer()
                }
            }, {
                key: "sendClosePixel",
                value: function() {
                    if (this.closeURL) {
                        var t = Date.now() - this.slotRenderedTs,
                            e = Kt()(this.closeURL, "msec", "".concat(t));
                        Mt()({
                            uri: e
                        })
                    }
                }
            }, {
                key: "insertStyles",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                    Vi && S()(Vi.toString) && w()(Vi.toString(), t)
                }
            }, {
                key: "resetStyles",
                value: function() {
                    if (!this.slotContainer) throw new Error(".slotContainer is empty");
                    this.slotContainer.className = Wi
                }
            }]), n
        }(pr);

    function Qi(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Ki(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Qi(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Qi(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }! function(t) {
        t[t.BEFORE_LIB_LOAD = 0] = "BEFORE_LIB_LOAD", t[t.AFTER_LIB_LOAD = 1] = "AFTER_LIB_LOAD"
    }(Ui || (Ui = {})),
    function(t) {
        t[t.IMMEDIATELY = 0] = "IMMEDIATELY", t[t.ON_DOM_CONTENT_LOADED = 1] = "ON_DOM_CONTENT_LOADED", t[t.ON_LOAD_COMPLETE = 2] = "ON_LOAD_COMPLETE"
    }(Hi || (Hi = {}));
    var Xi = n(38),
        $i = n.n(Xi);
    n(192), n(197);

    function Zi(t, e, n, r) {
        return to.apply(this, arguments)
    }

    function to() {
        return (to = m()(y.a.mark((function t(e, r, i, o) {
            var s, a, c, u;
            return y.a.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (0 !== e.length) {
                            t.next = 2;
                            break
                        }
                        return t.abrupt("return", []);
                    case 2:
                        return t.prev = 2, t.next = 5, n.e(3).then(n.t.bind(null, 210, 7));
                    case 5:
                        t.next = 10;
                        break;
                    case 7:
                        throw t.prev = 7, t.t0 = t.catch(2), new Error("Can't download hb lib");
                    case 10:
                        if (s = {}, !r) {
                            t.next = 26;
                            break
                        }
                        return t.prev = 12, t.next = 15, Object(k.a)();
                    case 15:
                        a = t.sent, c = a.gdprApplies, u = a.tcString, s = {
                            gdprApplies: c
                        }, Cr()(u) && (s.consentString = u), t.next = 24;
                        break;
                    case 22:
                        t.prev = 22, t.t1 = t.catch(12);
                    case 24:
                        t.next = 27;
                        break;
                    case 26:
                        $i()(i) && (s = i);
                    case 27:
                        return __ATA_HB.setPrebidConfig({
                            schain: di(o),
                            userSync: {
                                enableOverride: !0,
                                iframeEnabled: !0
                            }
                        }), t.abrupt("return", new Promise(function() {
                            var t = m()(y.a.mark((function t(n, r) {
                                return y.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.t0 = __ATA_HB, t.t1 = s, t.t2 = e, t.next = 6, Object(oi.a)();
                                        case 6:
                                            t.t3 = t.sent, t.t4 = {
                                                gdpr: t.t1,
                                                partners: t.t2,
                                                usPrivacy: t.t3
                                            }, t.t5 = n, t.t0.getBids.call(t.t0, t.t4, t.t5), t.next = 15;
                                            break;
                                        case 12:
                                            t.prev = 12, t.t6 = t.catch(0), r(t.t6);
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 12]
                                ])
                            })));
                            return function(e, n) {
                                return t.apply(this, arguments)
                            }
                        }()));
                    case 29:
                    case "end":
                        return t.stop()
                }
            }), t, null, [
                [2, 7],
                [12, 22]
            ])
        })))).apply(this, arguments)
    }
    var eo = function(t) {
        return !t
    };

    function no(t, e) {
        var n = {};
        for (var r in e)
            if (e.hasOwnProperty(r)) {
                var i = e[r];
                if (d()(i, "value")) n[r] = i.value;
                else {
                    if (!d()(i, "src") || !d()(i, "type")) continue;
                    var o = i,
                        s = d()(t, o.src);
                    if (o.type(s)) n[r] = o.map ? o.map(s) : s;
                    else {
                        if (o.required) return;
                        ii()(o.default) || (n[r] = o.default)
                    }
                }
            }
        return n
    }

    function ro(t) {
        return no(t, {
            consentString: {
                src: "gdpr.cs",
                type: no.string
            },
            gdprApplies: {
                src: "gdpr.ga",
                type: no.number,
                map: Boolean
            }
        }) || {}
    }
    no.string = Cr.a, no.number = h.a, no.boolean = ni.a, no.array = function(t) {
        return function(e) {
            return ui()(e) && !e.some(Pr()(eo, t))
        }
    };
    var io = function() {
        function t(e) {
            s()(this, t), this.context = e
        }
        var e, n;
        return c()(t, [{
            key: "show",
            value: (n = m()(y.a.mark((function t(e) {
                var n, r, i;
                return y.a.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (0 !== e.slots.length) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            if (r = this.context.getStore(), i = r.adServer) {
                                t.next = 6;
                                break
                            }
                            return O.a.error("Ad request failed", new Error("adServer must be initialized")), t.abrupt("return");
                        case 6:
                            return t.next = 8, i.getAdsForSlots(e);
                        case 8:
                            n = t.sent, ui()(n) ? n.forEach((function(t) {
                                var e = A()(t, 2),
                                    n = e[0],
                                    r = e[1];
                                try {
                                    n.showAd(r)
                                } catch (t) {
                                    O.a.error("Error while showing creative in ad ".concat(n), t)
                                }
                            })) : O.a.error("ads is not an array");
                        case 10:
                        case "end":
                            return t.stop()
                    }
                }), t, this)
            }))), function(t) {
                return n.apply(this, arguments)
            })
        }, {
            key: "requestHBAndShow",
            value: (e = m()(y.a.mark((function t(e) {
                var n, r, i, o, s, a, c;
                return y.a.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (0 !== e.slots.length) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            if (n = this.context.getStore(), r = n.cmp, i = n.adServer, o = n.config, i) {
                                t.next = 5;
                                break
                            }
                            throw new Error("adServer must be initialized");
                        case 5:
                            return s = [], a = [], t.prev = 7, t.next = 10, i.getHBConfig(e.slots);
                        case 10:
                            a = t.sent, t.next = 16;
                            break;
                        case 13:
                            t.prev = 13, t.t0 = t.catch(7), O.a.error("HB config request failed", t.t0);
                        case 16:
                            if (!a || !a.length) {
                                t.next = 27;
                                break
                            }
                            return c = ro(o), t.prev = 18, t.next = 21, Zi(a, r, c);
                        case 21:
                            s = t.sent, t.next = 27;
                            break;
                        case 24:
                            t.prev = 24, t.t1 = t.catch(18), O.a.error("HB request failed", t.t1);
                        case 27:
                            this.show({
                                slots: e.slots,
                                hb: {
                                    response: s,
                                    config: a
                                }
                            });
                        case 28:
                        case "end":
                            return t.stop()
                    }
                }), t, this, [
                    [7, 13],
                    [18, 24]
                ])
            }))), function(t) {
                return e.apply(this, arguments)
            })
        }]), t
    }();

    function oo(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var so = function(t) {
            bt()(n, t);
            var e = oo(n);

            function n() {
                var t;
                s()(this, n);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return t = e.call.apply(e, [this].concat(i)), f()(gt()(t), "showAds", function() {
                    var e = m()(y.a.mark((function e(n) {
                        return y.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    n.hb && li()(n.hb) ? t.show(n) : t.requestHBAndShow(n);
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()), t
            }
            return n
        }(io),
        ao = function() {
            function t(e) {
                var n = this;
                s()(this, t), this.props = e, f()(this, "observer", void 0), f()(this, "registeredSlotsMap", {}), f()(this, "fetchPolyfillPromise", void 0), f()(this, "onThresholdReach", (function(t) {
                    var e = [];
                    t.forEach((function(t) {
                        if (t.isIntersecting) {
                            var r = t.target.id,
                                i = n.registeredSlotsMap[r];
                            i && e.push(i)
                        }
                    })), n.props.showAdsCallback({
                        slots: e
                    })
                })), f()(this, "register", (function(t) {
                    t.forEach((function(t) {
                        var e, r = t.getID(),
                            i = document.getElementById(r);
                        i && (n.registeredSlotsMap[r] = t, null === (e = n.observer) || void 0 === e || e.observe(i))
                    }))
                })), this.fetchPolyfillPromise = this.fetchPolyfillIfNeeded(), this.fetchPolyfillPromise.then((function() {
                    n.observer = new IntersectionObserver(n.onThresholdReach, {
                        rootMargin: e.viewportMargin
                    }), delete n.fetchPolyfillPromise
                })).catch((function() {
                    O.a.error("Can't download Intersection Observer polyfill")
                }))
            }
            var e;
            return c()(t, [{
                key: "registerSlots",
                value: function(t) {
                    var e = this,
                        n = t.slots;
                    this.fetchPolyfillPromise ? this.fetchPolyfillPromise.then((function() {
                        return e.register(n)
                    })).catch((function() {
                        return e.props.showAdsCallback({
                            slots: n
                        })
                    })) : this.observer ? this.register(n) : this.props.showAdsCallback({
                        slots: n
                    })
                }
            }, {
                key: "unregisterSlots",
                value: function(t) {
                    var e = this;
                    t.slots.forEach((function(t) {
                        var n, r = t.getID(),
                            i = document.getElementById(r);
                        i && (delete e.registeredSlotsMap[r], null === (n = e.observer) || void 0 === n || n.unobserve(i))
                    }))
                }
            }, {
                key: "fetchPolyfillIfNeeded",
                value: (e = m()(y.a.mark((function t() {
                    return y.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!this.isIntersectionObserverSupported()) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", Promise.resolve());
                            case 4:
                                return t.abrupt("return", n.e(5).then(n.t.bind(null, 211, 7)));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t, this)
                }))), function() {
                    return e.apply(this, arguments)
                })
            }, {
                key: "isIntersectionObserverSupported",
                value: function() {
                    return Boolean(window.IntersectionObserver)
                }
            }]), t
        }(),
        co = function() {
            function t(e) {
                s()(this, t), this.props = e
            }
            return c()(t, [{
                key: "destroy",
                value: function() {}
            }, {
                key: "getSize",
                value: function() {
                    var t = A()(this.props.creative.size, 2);
                    return [t[0], t[1]]
                }
            }, {
                key: "render",
                value: function() {
                    var t = K()({
                            border: "none",
                            height: "0px",
                            margin: 0,
                            overflow: "hidden",
                            width: "0px"
                        }),
                        e = K()({
                            height: "0px",
                            width: "0px"
                        }),
                        n = document.createElement("div");
                    n.id = this.props.slotId, n.setAttribute("style", e);
                    var r = document.createElement("iframe");
                    r.setAttribute("style", t), n.appendChild(r), document.body.appendChild(n), Ke(this.props.creative, n)
                }
            }]), t
        }();

    function uo(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var fo = function(t) {
        bt()(n, t);
        var e = uo(n);

        function n() {
            return s()(this, n), e.apply(this, arguments)
        }
        return c()(n, [{
            key: "createAd",
            value: function(t) {
                if (t instanceof _t) {
                    var e = t.id,
                        n = t.size;
                    this.ad = new co({
                        buttons: t.creativeButtons,
                        creative: t,
                        slotId: e,
                        width: n[0],
                        window: window
                    })
                } else if (!(t instanceof fn)) throw new Error("Can't create ad for given props ".concat(JSON.stringify(t)))
            }
        }, {
            key: "serialize",
            value: function() {
                return {
                    format: "OGURY",
                    m: [an.DISPLAY],
                    sid: this.getID()
                }
            }
        }]), n
    }(Fn);

    function lo(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var po = function(t) {
            bt()(n, t);
            var e = lo(n);

            function n(t) {
                var r;
                return s()(this, n), (r = e.call(this, t)).context = t, f()(gt()(r), "lazyLoadObserver", void 0), f()(gt()(r), "showAds", function() {
                    var t = m()(y.a.mark((function t(e) {
                        var n, i, o, s;
                        return y.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (0 !== e.slots.length) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    n = [], i = [], o = [], s = [], e.slots.forEach((function(t) {
                                        t instanceof Yi ? n.push(t) : t instanceof vr ? i.push(t) : t instanceof fo ? s.push(t) : o.push(t)
                                    })), s.length && r.show({
                                        slots: s,
                                        hb: e.hb
                                    }), n.length && (e.hb && li()(e.hb) ? r.show({
                                        slots: n,
                                        hb: e.hb
                                    }) : r.requestHBAndShow({
                                        slots: n
                                    })), i.length && r.requestHBAndShow({
                                        slots: i
                                    }), o.length && r.registerSlots({
                                        slots: o
                                    });
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()), f()(gt()(r), "registerSlots", function() {
                    var t = m()(y.a.mark((function t(e) {
                        return y.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    r.lazyLoadObserver.registerSlots(e);
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()), r.lazyLoadObserver = new ao({
                    showAdsCallback: function(t) {
                        r.lazyLoadObserver.unregisterSlots(t), r.requestHBAndShow(t)
                    },
                    viewportMargin: r.getViewportMargin()
                }), r
            }
            return c()(n, [{
                key: "getViewportMargin",
                value: function() {
                    var t = zi().height,
                        e = this.context.getStore().config,
                        n = d()(e, "lazyload.viewportMarginRatio", .5);
                    return "".concat(t * n, "px")
                }
            }]), n
        }(io),
        ho = n(139),
        vo = n.n(ho),
        yo = function t(e) {
            s()(this, t), this.context = e
        };

    function go(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var mo = function(t) {
        bt()(r, t);
        var e, n = go(r);

        function r() {
            var t;
            s()(this, r);
            for (var e = arguments.length, i = new Array(e), o = 0; o < e; o++) i[o] = arguments[o];
            return t = n.call.apply(n, [this].concat(i)), f()(gt()(t), "processQueueDebounced", void 0), t
        }
        return c()(r, [{
            key: "onEnter",
            value: function() {
                this.processQueueDebounced = vo()(this.processAdQue.bind(this), 1), this.processQueueDebounced()
            }
        }, {
            key: "onExit",
            value: function() {}
        }, {
            key: "showAd",
            value: function(t) {
                this.context.getStore().slotQue.push(t), this.processQueueDebounced && this.processQueueDebounced()
            }
        }, {
            key: "processAdQue",
            value: (e = m()(y.a.mark((function t() {
                var e, n, r;
                return y.a.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (this.context) {
                                t.next = 2;
                                break
                            }
                            throw new Error(".processAdQue is called before onEnter");
                        case 2:
                            e = this.context.getStore(), n = e.slotQue, r = e.initialHB, this.context.showAds({
                                hb: {
                                    config: r && r.config,
                                    response: r && r.response
                                },
                                slots: n
                            }), this.context.setStore({
                                initialHB: void 0,
                                slotQue: []
                            });
                        case 5:
                        case "end":
                            return t.stop()
                    }
                }), t, this)
            }))), function() {
                return e.apply(this, arguments)
            })
        }]), r
    }(yo);

    function bo(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var wo = function(t) {
        bt()(r, t);
        var e, n = bo(r);

        function r() {
            return s()(this, r), n.apply(this, arguments)
        }
        return c()(r, [{
            key: "onEnter",
            value: function(t) {
                var e = this.getInitialHBConfig();
                e.length > 0 ? this.callBidders(e) : t.changeState(new mo(t))
            }
        }, {
            key: "onExit",
            value: function() {}
        }, {
            key: "showAd",
            value: function(t) {
                this.context.getStore().slotQue.push(t)
            }
        }, {
            key: "getInitialHBConfig",
            value: function() {
                var t = this.context.getStore().config;
                return gi(d()(t, "hb"))
            }
        }, {
            key: "callBidders",
            value: (e = m()(y.a.mark((function t(e) {
                var n, r, i, o, s, a;
                return y.a.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = this.context.getStore(), r = n.cmp, i = n.config, o = n.pubid, s = ro(i), t.prev = 2, t.next = 5, Zi(e, r, s, o);
                        case 5:
                            a = t.sent, this.context.setStore({
                                initialHB: {
                                    config: e,
                                    response: a
                                }
                            }), t.next = 12;
                            break;
                        case 9:
                            t.prev = 9, t.t0 = t.catch(2), O.a.error("Initial headerbidding failed", t.t0);
                        case 12:
                            this.context.changeState(new mo(this.context));
                        case 13:
                        case "end":
                            return t.stop()
                    }
                }), t, this, [
                    [2, 9]
                ])
            }))), function(t) {
                return e.apply(this, arguments)
            })
        }]), r
    }(yo);

    function xo(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function So(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? xo(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : xo(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function ko(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var Oo = function(t) {
        bt()(n, t);
        var e = ko(n);

        function n() {
            return s()(this, n), e.apply(this, arguments)
        }
        return c()(n, [{
            key: "onEnter",
            value: function(t) {
                this.setShowAdsStrategy(), this.initAdServer(), this.configureLogger(), this.initLibInjector(), this.callSyncUrls(), this.initThumbnailAd(), this.initStickyAds(), this.initDynamicAds(), t.changeState(new wo(this.context))
            }
        }, {
            key: "onExit",
            value: function() {}
        }, {
            key: "showAd",
            value: function(t) {
                this.context && this.context.getStore().slotQue.push(t)
            }
        }, {
            key: "setShowAdsStrategy",
            value: function() {
                var t = this.context.getStore().config;
                d()(t, "lazyload", !1) ? this.context.setShowAdsStrategy(new po(this.context)) : this.context.setShowAdsStrategy(new so(this.context))
            }
        }, {
            key: "initAdServer",
            value: function() {
                var t = this.context.getStore(),
                    e = t.config,
                    n = t.loaderProps,
                    r = this.context.getStore(),
                    i = r.cmp,
                    o = r.pageParams,
                    s = r.pubid,
                    a = this.getNativeConfig(),
                    c = this.getCreativeUIConfig(o),
                    u = no(e, {
                        authority: {
                            src: "sdom",
                            type: no.string,
                            default: "s.pubmine.com"
                        },
                        creativeUIConfig: {
                            value: c
                        },
                        isCMPDefined: {
                            value: i
                        },
                        isViewabilityMeasurable: {
                            value: Fe.isSupported()
                        },
                        libraryLoadedAt: {
                            value: n.createdAt
                        },
                        nativeCfg: {
                            value: a
                        },
                        pageParams: {
                            value: o
                        },
                        pageViewID: {
                            src: "pvid",
                            type: no.string
                        },
                        playerType: {
                            src: "plt",
                            type: no.string
                        },
                        pubid: {
                            value: s
                        },
                        routeId: {
                            value: n.rid
                        },
                        tuuid: {
                            value: no(e, {
                                maxAge: {
                                    src: "tuuid.maxAge",
                                    type: no.number,
                                    required: !0
                                },
                                value: {
                                    src: "tuuid.value",
                                    type: no.string,
                                    required: !0
                                }
                            })
                        },
                        userID: {
                            value: Er()("__ATA_tuuid")
                        },
                        videoDebug: {
                            src: "v_debug",
                            type: no.boolean
                        },
                        viewPort: {
                            value: zi()
                        }
                    });
                if (u) try {
                    this.context.setStore({
                        adServer: new ji(u)
                    })
                } catch (t) {
                    O.a.error("Can't initiate the ad server", t)
                } else O.a.error("Can't create config for server")
            }
        }, {
            key: "configureLogger",
            value: function() {
                var t = this.context.getStore().adServer;
                if (!t) throw new Error("adServer should be created before configureLogger call");
                O.a.configure({
                    onError: t.sendError.bind(t)
                })
            }
        }, {
            key: "isLibrary",
            value: function(t) {
                var e = no(t, {
                    cs: {
                        src: "cs",
                        type: no.string
                    },
                    ex: {
                        src: "ex",
                        type: no.number
                    },
                    url: {
                        src: "url",
                        type: no.string
                    },
                    when: {
                        src: "when",
                        type: no.number
                    }
                });
                return Boolean(e)
            }
        }, {
            key: "initLibInjector",
            value: function() {
                var t = no(this.context.getStore().config, {
                    libs: {
                        required: !0,
                        src: "libs",
                        type: no.array(this.isLibrary)
                    }
                });
                t && function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.document,
                        r = [],
                        i = [],
                        o = function(t) {
                            var r = t.url,
                                i = t.onLibLoaded;
                            return _i()(r, n.body, (function(t) {
                                t ? e({
                                    message: "Unable to fetch lib by following url: ".concat(r),
                                    name: "LibError"
                                }) : i()
                            }))
                        },
                        s = function(t) {
                            return function() {
                                if (t) try {
                                    window.eval(t)
                                } catch (n) {
                                    e({
                                        message: "Catch error (".concat(n, ") while executing code snippet: ").concat(t),
                                        name: "SnippetError"
                                    })
                                }
                            }
                        };
                    "complete" !== n.readyState && n.addEventListener("readystatechange", (function(t) {
                        var e = t.target.readyState;
                        "interactive" === e && i.length && i.forEach(o), "complete" === e && r.length && r.forEach(o)
                    })), t.forEach((function(t) {
                        var a = t.when,
                            c = t.url,
                            u = t.cs,
                            f = t.ex;
                        u && f === Ui.BEFORE_LIB_LOAD && s(u)();
                        var l = je.a;
                        u && f === Ui.AFTER_LIB_LOAD && (l = s(u)), c && (a === Hi.IMMEDIATELY ? _i()(c, (function(t) {
                            t && e({
                                message: "Unable to fetch lib by following url: ".concat(c),
                                name: "LibError"
                            })
                        })) : a === Hi.ON_LOAD_COMPLETE && "complete" !== n.readyState ? r.push({
                            onLibLoaded: l,
                            url: c
                        }) : a === Hi.ON_DOM_CONTENT_LOADED && "loading" === n.readyState ? i.push({
                            onLibLoaded: l,
                            url: c
                        }) : o({
                            onLibLoaded: l,
                            url: c
                        }))
                    }))
                }(t.libs, (function(t) {
                    O.a.error("injectLibs error", t)
                }))
            }
        }, {
            key: "isSyncUrl",
            value: function(t) {
                return Cr()(d()(t, "url")) && h()(d()(t, "type"))
            }
        }, {
            key: "callSyncUrls",
            value: function() {
                var t = no(this.context.getStore().config, {
                    syncUrls: {
                        required: !0,
                        src: "sync",
                        type: no.array(this.isSyncUrl)
                    }
                });
                t && Li(t.syncUrls, (function(t) {
                    O.a.error("callSyncUrls error", t)
                }))
            }
        }, {
            key: "parseStickyAd",
            value: function(t) {
                return no(t, {
                    format: {
                        map: function(t) {
                            switch (t) {
                                case "DPR":
                                    return "right";
                                case "DPL":
                                    return "left";
                                case "MTS":
                                    return "MTS";
                                default:
                                    return "unknown"
                            }
                        },
                        required: !0,
                        src: "format",
                        type: no.string
                    },
                    height: {
                        src: "h",
                        type: no.number,
                        required: !0
                    },
                    minHeight: {
                        src: "vph",
                        type: no.number
                    },
                    minWidth: {
                        src: "vpw",
                        type: no.number
                    },
                    padding: {
                        src: "pad",
                        type: no.number,
                        default: 0
                    },
                    width: {
                        src: "w",
                        type: no.number,
                        required: !0
                    },
                    zIndex: {
                        src: "z-index",
                        type: no.number
                    }
                })
            }
        }, {
            key: "initStickyAds",
            value: function() {
                var t, e, n, r, i = this,
                    o = this.context.getStore().config,
                    s = Pr()(Boolean, this.parseStickyAd),
                    a = no(o, {
                        stickyAds: {
                            map: function(t) {
                                return t.map(i.parseStickyAd).filter((function(t) {
                                    return !!t
                                }))
                            },
                            required: !0,
                            src: "stad",
                            type: no.array(s)
                        }
                    });
                a && (t = {
                    configs: a.stickyAds,
                    onReloadReady: function(t) {
                        i.context.showAds({
                            slots: [t]
                        })
                    },
                    showAd: this.context.showAd.bind(this.context)
                }, e = t.configs, n = t.showAd, r = t.onReloadReady, e.length && e.forEach((function(t) {
                    try {
                        "MTS" === t.format && n(new Yi(Ki(Ki({}, t), {}, {
                            elementId: "bottom-sticky-ad",
                            onReloadReady: r
                        })))
                    } catch (t) {
                        O.a.error("Can't init a sticky ad", t)
                    }
                })))
            }
        }, {
            key: "initThumbnailAd",
            value: function() {
                var t = this.context.getStore().config;
                d()(t, "ogury", !1) && this.context.showAd(new fo({
                    elementId: "ogury-thumbnail-ad"
                }))
            }
        }, {
            key: "getNativeConfig",
            value: function() {
                return no(this.context.getStore().config, {
                    imageSelector: {
                        src: "native_cfg.is",
                        type: no.string
                    },
                    nativeSlotSelector: {
                        src: "native_cfg.nss",
                        type: no.string,
                        required: !0
                    },
                    postSelector: {
                        src: "native_cfg.ps",
                        type: no.string,
                        required: !0
                    },
                    removeClasses: {
                        src: "native_cfg.rc",
                        type: no.array(no.string)
                    },
                    style: {
                        src: "native_cfg.st",
                        type: no.string
                    }
                })
            }
        }, {
            key: "getSidebarStickyConfig",
            value: function() {
                return no(this.context.getStore().config, {
                    contentSelector: {
                        src: "sds.c",
                        type: no.string,
                        required: !0
                    },
                    minWidth: {
                        src: "sds.mw",
                        type: no.number
                    },
                    position: {
                        src: "sds.p",
                        type: no.string,
                        map: function(t) {
                            return "l" === t ? "left" : "right"
                        }
                    },
                    zIndex: {
                        src: "sds.z-index",
                        type: no.number
                    }
                })
            }
        }, {
            key: "getInlineAdsConfig",
            value: function() {
                return no(this.context.getStore().config, {
                    articleSelector: {
                        src: "ia.a",
                        type: no.string,
                        required: !0
                    },
                    maxSlots: {
                        src: "ia.ms",
                        type: no.number
                    },
                    minWidth: {
                        src: "ia.mw",
                        type: no.number
                    },
                    paragraphSelector: {
                        src: "ia.p",
                        type: no.string,
                        required: !0
                    },
                    resetSelector: {
                        src: "ia.r",
                        type: no.string
                    },
                    stopSelector: {
                        src: "ia.s",
                        type: no.string
                    },
                    viewportRatio: {
                        src: "ia.v",
                        type: no.string,
                        required: !0,
                        map: Number
                    }
                })
            }
        }, {
            key: "initDynamicAds",
            value: function() {
                var t = this,
                    e = this.getNativeConfig(),
                    n = this.getSidebarStickyConfig(),
                    r = this.getInlineAdsConfig();
                if (this.context.setStore({
                        inlineAdsConfig: r
                    }), e || r || n) try {
                    var i = this.context.showAds.bind(this.context);
                    this.context.setStore({
                        modules: {
                            dynamicAds: new mr({
                                inlineAds: r,
                                nativeCfg: e,
                                onReadyToShow: i,
                                onReloadReady: function(e) {
                                    t.context && t.context.showAds({
                                        slots: [e]
                                    })
                                },
                                sidebarSticky: n
                            })
                        }
                    })
                } catch (t) {
                    O.a.error("Can't initiate dynamic ads", t)
                }
            }
        }, {
            key: "getCreativeUIConfig",
            value: function(t) {
                return {
                    label: So({
                        text: "Advertisement"
                    }, d()(t, "ad.label")),
                    privacySettings: So({
                        text: "Privacy Settings"
                    }, d()(t, "ad.privacySettings")),
                    reportAd: So({
                        text: "Report this ad"
                    }, d()(t, "ad.reportAd"))
                }
            }
        }]), n
    }(yo);

    function Eo(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Ao(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Eo(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Eo(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var Po = n(203),
        Ro = function() {
            function t(e, n, r) {
                var i = this;
                s()(this, t), f()(this, "store", void 0), f()(this, "state", void 0), f()(this, "showAdsStrategy", void 0), f()(this, "slotMutationObserver", void 0), f()(this, "slotRegistry", new kr), f()(this, "showAds", function() {
                    var t = m()(y.a.mark((function t(e) {
                        return y.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return i.slotRegistry.register(e.slots), t.abrupt("return", i.showAdsStrategy.showAds(e));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()), f()(this, "refreshSlots", m()(y.a.mark((function t() {
                    var e;
                    return y.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = i.slotRegistry.getAll(), t.abrupt("return", i.showAds({
                                    slots: e
                                }));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))));
                var o = d()(e, "pubid", "");
                this.store = {
                    cmp: Object(k.b)(),
                    config: e,
                    loaderProps: n,
                    modules: {},
                    pageParams: r,
                    pubid: o,
                    slotQue: []
                }, br.b.isListenerSet() || br.b.setupListener(), this.slotMutationObserver = new wr(this.slotRegistry), this.state = new Oo(this), this.state.onEnter && this.state.onEnter(this), this.insertStyles(), Object(k.b)() && Object(k.c)("useractioncomplete", (function(t, e) {
                    return i.refreshSlots()
                }))
            }
            return c()(t, [{
                key: "showAd",
                value: function(t) {
                    return this.state.showAd(t)
                }
            }, {
                key: "insertStyles",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                    Po && S()(Po.toString) && w()(Po.toString(), t)
                }
            }, {
                key: "insertInlineAds",
                value: function() {
                    var t = this.getStore().inlineAdsConfig;
                    t && new mr({
                        inlineAds: t,
                        onReadyToShow: this.showAds
                    })
                }
            }, {
                key: "changeState",
                value: function(t) {
                    "function" == typeof this.state.onExit && this.state.onExit(this), this.state = t, "function" == typeof this.state.onEnter && this.state.onEnter(this)
                }
            }, {
                key: "setStore",
                value: function(t) {
                    this.store = Object.freeze(Ao(Ao({}, this.store), t))
                }
            }, {
                key: "getStore",
                value: function() {
                    return this.store
                }
            }, {
                key: "setShowAdsStrategy",
                value: function(t) {
                    this.showAdsStrategy = t
                }
            }]), t
        }();

    function Co(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var jo = function(t) {
        bt()(n, t);
        var e = Co(n);

        function n() {
            return s()(this, n), e.apply(this, arguments)
        }
        return c()(n, [{
            key: "createAd",
            value: function(t) {
                var e = t.id;
                if (t instanceof hn) this.ad = new cn({
                    buttons: t.creativeButtons,
                    creatives: t.members,
                    height: 0,
                    slotId: e,
                    type: t.type,
                    width: this.props.width,
                    window: this.props.window || window
                });
                else if (t instanceof _t) this.ad = new tn({
                    buttons: t.creativeButtons,
                    creative: t,
                    slotId: e,
                    width: this.props.width,
                    window: this.props.window || window
                });
                else {
                    if (!(t instanceof fn)) throw new Error("Can't create ad for given props ".concat(JSON.stringify(t)));
                    this.ad = void 0
                }
            }
        }, {
            key: "showAd",
            value: function(t) {
                if (this.createAd(t), this.ad) try {
                    this.beforeRender(), this.ad.render()
                } catch (t) {
                    O.a.error("Can't render creative", t)
                }
            }
        }, {
            key: "serialize",
            value: function() {
                var t = this.props,
                    e = t.width,
                    n = t.siteId,
                    r = {
                        l: this.props.location,
                        m: [an.DISPLAY, an.NATIVE],
                        sid: this.getID(),
                        w: e
                    };
                return n || (r.section_id = this.props.sectionId), r
            }
        }, {
            key: "beforeRender",
            value: function() {
                var t = this.ad.getSize(),
                    e = A()(t, 2),
                    n = e[0],
                    r = e[1];
                this.props.window.context.renderStart({
                    height: r,
                    width: n
                })
            }
        }]), n
    }(Fn);

    function Io(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var _o = function(t) {
        bt()(n, t);
        var e = Io(n);

        function n() {
            return s()(this, n), e.apply(this, arguments)
        }
        return c()(n, [{
            key: "createAd",
            value: function(t) {
                if (t instanceof _t) {
                    var e = t.id,
                        n = t.complainURL,
                        r = t.creativeButtons;
                    this.ad = new tn({
                        buttons: r,
                        creative: t,
                        enableControls: Boolean(n),
                        slotId: e,
                        width: this.props.width,
                        window: this.props.window || window
                    })
                } else if (!(t instanceof fn)) throw new Error("Can't create ad for given props ".concat(JSON.stringify(t)))
            }
        }, {
            key: "showAd",
            value: function(t) {
                if (this.createAd(t), this.ad) try {
                    this.ad.render()
                } catch (t) {
                    O.a.error("Can't render creative", t)
                }
            }
        }, {
            key: "serialize",
            value: function() {
                var t = this.props,
                    e = t.width,
                    n = t.height,
                    r = t.siteId,
                    i = {
                        l: this.props.location,
                        m: [an.DISPLAY, an.NATIVE],
                        s: [e, n],
                        sid: this.getID()
                    };
                return r || (i.section_id = this.props.sectionId), i
            }
        }]), n
    }(Fn);

    function To(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var Do = function(t) {
        bt()(n, t);
        var e = To(n);

        function n(t) {
            var r;
            s()(this, n), r = e.call(this, t), f()(gt()(r), "blcr", void 0), f()(gt()(r), "adResponse", void 0), f()(gt()(r), "width", void 0);
            var i = document.getElementById(t.elementId);
            if (!i) throw new Error("DynamicAd element not found");
            var o = i.getBoundingClientRect().width;
            return o = Math.floor(o), i.setAttribute("data-adtags-width", String(o)), r.width = o, r
        }
        return c()(n, [{
            key: "createAd",
            value: function(t) {
                this.adResponse = t;
                var e = this.width;
                t instanceof fn || (this.blcr = t.blcr, this.ad && this.ad.destroy());
                var n = t.id,
                    r = t.creativeButtons,
                    i = t.creativeLabel;
                if (t instanceof hn) this.ad = new cn({
                    buttons: r,
                    creatives: t.members,
                    enableParallax: t.enableParallax,
                    height: 0,
                    label: i,
                    slotId: n,
                    type: t.type,
                    width: e,
                    window: window
                });
                else if (t instanceof _t) this.ad = new tn({
                    buttons: r,
                    creative: t,
                    enableParallax: t.enableParallax,
                    label: i,
                    slotId: n,
                    width: e,
                    window: window
                });
                else {
                    if (!(t instanceof fn)) throw new Error("Can't create ad for given props ".concat(JSON.stringify(t)));
                    this.ad = void 0
                }
            }
        }, {
            key: "serialize",
            value: function() {
                var t = this.props,
                    e = t.location,
                    n = t.formFactor,
                    r = this.getReloadCounter();
                return {
                    blcr: this.blcr,
                    ff: n,
                    l: e,
                    m: [an.DISPLAY, an.NATIVE],
                    r_count: r,
                    sid: this.getID(),
                    w: this.width
                }
            }
        }, {
            key: "setReloadTimeout",
            value: function() {
                var t, e = this,
                    n = this.getProps().onReloadReady,
                    r = null === (t = this.adResponse) || void 0 === t ? void 0 : t.reloadTime;
                n && r && (this.reloadTimer = new ur(r, (function() {
                    n(e), e.increaseReloadCounter()
                })))
            }
        }, {
            key: "beforeRender",
            value: function() {}
        }, {
            key: "afterRender",
            value: function() {
                this.appendStyles()
            }
        }, {
            key: "appendStyles",
            value: function() {
                if (this.ad) {
                    var t = this.getID(),
                        e = document.getElementById(t);
                    if (e) {
                        var n = this.ad.getSize(),
                            r = A()(n, 2),
                            i = r[0],
                            o = r[1],
                            s = K()({
                                display: "block",
                                height: "".concat(o, "px"),
                                margin: "0 auto",
                                overflow: "hidden",
                                padding: 0,
                                width: "".concat(i, "px")
                            });
                        e.setAttribute("style", s)
                    }
                }
            }
        }]), n
    }(lr);

    function Lo(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, r = kt()(t);
            if (e) {
                var i = kt()(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return xt()(this, n)
        }
    }
    var Mo = [640, 360],
        Fo = function(t) {
            bt()(n, t);
            var e = Lo(n);

            function n() {
                var t;
                s()(this, n);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return t = e.call.apply(e, [this].concat(i)), f()(gt()(t), "onVideoComplete", (function() {
                    var e = t.getID();
                    if (e) {
                        var n = document.getElementById(e);
                        if (n) {
                            var r = K()({
                                display: "none"
                            });
                            setTimeout((function() {
                                return n.setAttribute("style", r)
                            }), 500)
                        } else O.a.error(".onVideoComlete element is not found")
                    } else O.a.error(".onVideoComplete  elementId is empty")
                })), t
            }
            return c()(n, [{
                key: "createAd",
                value: function(t) {
                    var e = this.getID();
                    if (t instanceof On) this.ad = new Cn({
                        creative: t,
                        size: Mo,
                        slotId: e
                    });
                    else if (t instanceof An) {
                        var n = Mo[0],
                            r = document.getElementById(e);
                        this.ad = new Ln({
                            buttons: t.creativeButtons,
                            creative: t,
                            onComplete: this.onVideoComplete,
                            size: [(null == r ? void 0 : r.offsetWidth) || n, 0],
                            slotId: e,
                            window: this.props.window || window
                        })
                    } else {
                        if (!(t instanceof fn)) throw new Error("Can't create ad for given props ".concat(JSON.stringify(Rt)));
                        this.ad = void 0
                    }
                }
            }, {
                key: "serialize",
                value: function() {
                    var t = this.props,
                        e = t.siteId,
                        n = t.sectionId,
                        r = t.playerType,
                        i = {
                            m: [an.VIDEO],
                            s: Mo,
                            sid: this.getID(),
                            v: {
                                player: Wr.apply(void 0, Mo),
                                plt: r
                            }
                        };
                    return "number" != typeof e && (i.section_id = n), i
                }
            }]), n
        }(Fn);
    var Bo = Number.isInteger || function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    };

    function zo(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function No(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? zo(Object(n), !0).forEach((function(e) {
                f()(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : zo(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var Uo = function() {
        function t() {
            s()(this, t), f()(this, "cmd", void 0), f()(this, "app", void 0), f()(this, "config", void 0), f()(this, "pageParams", void 0), f()(this, "executeCommand", (function(t) {
                try {
                    t()
                } catch (t) {
                    O.a.error("__ATA can't execute a command from the que", t)
                }
                return 0
            }));
            var e = window.__ATA,
                n = window.__ATA_PP || {};
            if (e && Array.isArray(e.cmd) && (this.cmd = e.cmd, this.cmd.push = this.executeCommand), n && "object" === i()(n) && (this.pageParams = n), e && e.config && "object" === i()(e.config)) {
                if (!h()(e.rid)) return void O.a.error("__ATA.rid must be a number");
                var r = {
                    createdAt: e.createdAt,
                    rid: e.rid
                };
                this.app = new Ro(e.config, r, this.pageParams), this.config = e.config, this.processQueue()
            } else O.a.error("__ATA.config is not defined")
        }
        return c()(t, [{
            key: "initSlot",
            value: function(t, e) {
                try {
                    var n;
                    if ("string" != typeof t) throw new Error("".concat(".initSlot", " the first arg must a string"));
                    if ("object" !== i()(e) || null === e) throw new Error("".concat(".initSlot", " the second arg must an object"));
                    var r = e,
                        o = r.width,
                        s = r.height,
                        a = r.sectionId,
                        c = r.location,
                        u = r.window;
                    if ("number" != typeof o || "number" != typeof s) throw new Error("".concat(".initSlot", " params.width and params.height must be numbers"));
                    var f = null === (n = this.pageParams) || void 0 === n ? void 0 : n.siteid,
                        l = Boolean(d()(this.pageParams, "amp", !1)),
                        p = No(No({}, e), {}, {
                            elementId: t,
                            height: s,
                            location: "number" == typeof c && Bo(c) && c >= 0 ? c : void 0,
                            sectionId: "string" == typeof a ? a : void 0,
                            siteId: "number" == typeof f ? f : void 0,
                            width: o,
                            window: "object" === i()(u) && null !== u ? u : void 0
                        }),
                        h = l ? new jo(p) : new _o(p);
                    this.app && this.app.showAd(h)
                } catch (t) {
                    O.a.error("Can't show the banner ad with params ".concat(JSON.stringify(e)), t)
                }
            }
        }, {
            key: "initVideoSlot",
            value: function(t, e) {
                try {
                    if ("string" != typeof t) throw new Error("".concat(".initVideoSlot", " the first arg must a string"));
                    if ("object" !== i()(e) || null === e) throw new Error("".concat(".initVideoSlot", " the second arg must be an object"));
                    var n = e,
                        r = n.sectionId,
                        o = n.format;
                    if ("string" != typeof r) throw new Error("".concat(".initVideoSlot", " params.sectionId must be a string"));
                    if ("inread" !== o) throw new Error("".concat(".initVideoSlot", " params.format must be 'inread'"));
                    if (!this.config || "string" != typeof this.config.plt) throw new Error("the config doesn't have .plt field");
                    var s = new Fo({
                        elementId: t,
                        format: o,
                        playerType: this.config.plt,
                        sectionId: r,
                        siteId: this.pageParams && this.pageParams.siteid,
                        window: "object" === ("undefined" == typeof window ? "undefined" : i()(window)) && null !== window ? window : void 0
                    });
                    this.app && this.app.showAd(s)
                } catch (t) {
                    O.a.error("Can't show the video ad with params ".concat(JSON.stringify(e)), t)
                }
            }
        }, {
            key: "initDynamicSlot",
            value: function(t) {
                var e = this;
                try {
                    var n = ".initDynamicSlot";
                    if ("object" !== i()(t) || null === t) throw new Error("".concat(n, " params must be an object"));
                    var r = t,
                        o = r.id,
                        s = r.location,
                        a = r.formFactor;
                    if ("string" != typeof o) throw new Error("".concat(n, " params.id must be a string"));
                    if ("number" != typeof s || !Bo(s) || s < 0) throw new Error("".concat(n, " params.location must be a nonnegative integer"));
                    if ("string" != typeof a) throw new Error("".concat(n, " params.formFactor must be a string"));
                    var c = new Do({
                        elementId: o,
                        formFactor: a,
                        location: s,
                        onReloadReady: function(t) {
                            e.app && e.app.showAds({
                                slots: [t]
                            })
                        }
                    });
                    this.app && this.app.showAd(c)
                } catch (e) {
                    O.a.error("Can't show the dynamic ad with params ".concat(JSON.stringify(t)), e)
                }
            }
        }, {
            key: "insertStyles",
            value: function(t) {
                this.app && this.app.insertStyles(t)
            }
        }, {
            key: "insertInlineAds",
            value: function() {
                var t = this;
                this.cmd && this.cmd.push((function() {
                    t.app && t.app.insertInlineAds()
                }))
            }
        }, {
            key: "processQueue",
            value: function() {
                window.__ATA = this, this.cmd && (this.cmd.forEach(this.executeCommand), this.cmd.push = this.executeCommand)
            }
        }]), t
    }();
    e.default = new Uo
}]);
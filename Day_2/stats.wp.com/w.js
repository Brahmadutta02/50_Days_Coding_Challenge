! function(t) {
    var n = {};

    function e(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    e.m = t, e.c = n, e.d = function(t, n, o) {
        e.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: o
        })
    }, e.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, e.t = function(t, n) {
        if (1 & n && (t = e(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (e.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t)
            for (var i in t) e.d(o, i, function(n) {
                return t[n]
            }.bind(null, i));
        return o
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, e.p = "", e(e.s = 8)
}([function(t, n) {
    function e(n) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = e = function(t) {
            return typeof t
        } : t.exports = e = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, e(n)
    }
    t.exports = e
}, function(t, n, e) {
    "use strict";
    e.d(n, "b", (function() {
        return r
    })), e.d(n, "a", (function() {
        return a
    }));
    var o = null,
        i = function() {
            if (null == o) {
                o = "";
                var t, n = document.location.hostname.split(".");
                if ("undefined" != typeof TRACKS_COOKIE_DOMAIN) o = TRACKS_COOKIE_DOMAIN;
                else
                    for (var e = 1; e <= n.length; ++e)
                        if (t = "." + n.slice(-e).join("."), i = t, r = void 0, r = (new Date).getTime(), document.cookie = encodeURIComponent("tk_tc") + "=" + r + "; domain=" + i + "; path=/;", a("tc") == r) {
                            o = t;
                            break
                        }
                "" != o && (! function(t) {
                    var n = new Date;
                    n.setTime(n.getTime() - 1e3), document.cookie = encodeURIComponent("tk_tc") + "= ; domain=" + t + "; path=/; expires=" + n.toUTCString()
                }(o), o = "; domain=" + o)
            }
            var i, r;
            return o
        },
        r = function(t, n, e) {
            var o = encodeURIComponent("tk_" + t),
                r = new Date;
            void 0 === e && (e = 15768e4), document.location.hostname.match(/((^|\.)wp\.com$|^.?w\.org$)/) || (r.setTime(r.getTime() + 1e3 * e), document.cookie = o + "=" + encodeURIComponent(n) + i() + "; path=/; expires=" + r.toUTCString())
        },
        a = function(t) {
            var n = encodeURIComponent("tk_" + t) + "=",
                e = n.length,
                o = document.cookie.split("; "),
                i = o.length;
            for (1 === i && (i = (o = document.cookie.split(";")).length), i--; i >= 0; i--)
                if (o[i].substring(0, e) === n) return decodeURIComponent(o[i].substring(e));
            return null
        }
}, function(t, n, e) {
    "use strict";
    e.d(n, "a", (function() {
        return E
    }));
    var o = e(0),
        i = e.n(o),
        r = e(1);

    function a(t) {
        var n = [];
        if (window.crypto && window.crypto.getRandomValues) n = new Uint8Array(t), window.crypto.getRandomValues(n);
        else
            for (var e = 0; e < t; ++e) n[e] = Math.floor(256 * Math.random());
        return btoa(String.fromCharCode.apply(String, n))
    }
    var c, u, d, f, l, s, p, m;

    function v() {
        c = void 0, u = null, d = null, [], f = null, l = {}, s = {}, p = {}, m = {}
    }
    v();
    var h = function(t) {
        if (this.a = 1, t && t.length)
            for (var n = 0; n < t.length; n++) this.push(t[n])
    };
    h.prototype.push = function(t) {
        if (t)
            if ("object" == i()(t) && t.length) {
                var n = t.splice(0, 1);
                T[n] && T[n].apply(null, t)
            } else "function" == typeof t && t()
    };
    var w = function(t) {
            t._ui || t._ut || x(), k(), t._ui = t._ui || c, t._ut = t._ut || u, d && (t._ul = d);
            var n = new Date;
            t._ts = n.getTime(), t._tz = n.getTimezoneOffset() / 60;
            var e = window.navigator,
                o = window.screen;
            t._lg = e.language, t._pf = e.platform, t._ht = o.height, t._wd = o.width;
            var r = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
                a = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            t._sx = void 0 !== r ? r : 0, t._sy = void 0 !== a ? a : 0, void 0 !== document.location && (t._dl = document.location.toString()), void 0 !== document.referrer && (t._dr = document.referrer),
                function t(n, e) {
                    if (null == n || "object" !== i()(n)) return n;
                    for (var o in null != e && "object" === i()(e) || (e = n.constructor()), n) n.hasOwnProperty(o) && (e[o] = t(n[o]));
                    return e
                }(s, t), g(function(t) {
                    var n = [];
                    for (var e in t) t.hasOwnProperty(e) && n.push(encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
                    return n.join("&")
                }(t), t.use_beacon || !1)
        },
        g = function(t, n) {
            if (!navigator.userAgent.match(/wp-e2e-tests|bingbot|bot|borg|google(^tv)|yahoo|slurp|msnbot|msrbot|openbot|archiver|netresearch|lycos|scooter|altavista|teoma|gigabot|baiduspider|blitzbot|oegp|charlotte|furlbot|http%20client|polybot|htdig|ichiro|mogimogi|larbin|pompos|scrubby|searchsight|seekbot|semanticdiscovery|silk|snappy|speedy|spider|voila|vortex|voyager|zao|zeal|fast\-webcrawler|converacrawler|dataparksearch|findlinks|crawler|Netvibes|Sogou Pic Spider|ICC\-Crawler|Innovazion Crawler|Daumoa|EtaoSpider|A6\-Indexer|YisouSpider|Riddler|DBot|wsr\-agent|Xenu|SeznamBot|PaperLiBot|SputnikBot|CCBot|ProoXiBot|Scrapy|Genieo|Screaming Frog|YahooCacheSystem|CiBra|Nutch/) && !(t in p))
                if (p[t] = !0, window.fetch && n) y(t), fetch("//pixel.wp.com/t.gif?" + t + "&_rt=" + (new Date).getTime() + "&_=_", {
                    mode: "no-cors",
                    keepalive: !0
                }).then((function() {
                    _(t)
                }));
                else {
                    var e = new Image;
                    y(t), e.query = t, e.onload = function() {
                        delete p[t], e && _(e.query)
                    }, e.src = "//pixel.wp.com/t.gif?" + t + "&_rt=" + (new Date).getTime() + "&_=_", e.alt = ""
                }
        },
        y = function(t) {
            var n, e = S();
            for (n = 0; n < e.length; ++n)
                if (t == e[n]) return;
            e.push(t), b(e)
        },
        b = function(t) {
            for (; t.join(" ").length > 2048;) t = t.slice(1);
            I("qs", t.join(" "), 1800)
        },
        _ = function(t) {
            var n, e = [],
                o = S();
            for (n = 0; n < o.length; ++n) t != o[n] && e.push(o[n]);
            e.length !== o.length && b(e)
        },
        S = function() {
            var t = C("qs");
            return t ? t.split(" ") : []
        },
        k = function() {
            null === f && (f = window.setTimeout((function() {
                S().forEach((function(t) {
                    g(t, !1)
                })), f = null
            }), 100))
        },
        j = function() {
            return a(18)
        },
        C = function(t) {
            return Object(r.a)(t) || l[t]
        },
        I = function(t, n, e) {
            l[t] = e <= -1 ? null : n, Object(r.b)(t, n, e)
        },
        O = function() {
            var t = [],
                n = C("ai"),
                e = C("aip");
            return e && (t = e.split(",")), n && t.push(n), t
        },
        x = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (!c) {
                var n = C("ai");
                n ? (c = n, u = "anon") : t && (c = j(), u = "anon", I("ai", c))
            }
        },
        T = {
            storeContext: function(t) {
                "object" === i()(t) && (s = t)
            },
            identifyUser: function(t, n) {
                if (n && (d = n), "0" != t && "" != t && null != t && c != t) {
                    c = t, u = "wpcom:user_id";
                    for (var e = O(), o = 0; o < e.length; o++) w({
                        _en: "_aliasUser",
                        anonId: e[o]
                    });
                    I("ai", "", -1), I("aip", "", -1)
                }
            },
            identifyAnonUser: function(t) {
                if (x(!1), c != t)
                    if ("anon" === u || null === u) {
                        if ("anon" == u && c) {
                            var n = C("aip");
                            n = n ? n.split(",") : [];
                            for (var e = !1, o = 0; o < n.length; o++) c == n[o] && (e = !0);
                            e || (n.push(c), I("aip", n.join(",")))
                        }
                        I("ai", t), c = t, u = "anon"
                    } else w({
                        _en: "_aliasUser",
                        anonId: t
                    })
            },
            recordEvent: function(t, n, e) {
                "_setProperties" !== t && ((n = n || {})._en = t, "string" == typeof e && e.length > 0 && (m[e] || (m[e] = a(18)), n._ui = n._ui || m[e], n._ut = n._ut || "anon"), w(n))
            },
            setProperties: function(t) {
                t._en = "_setProperties", w(t)
            },
            clearIdentity: function() {
                c = null, d = null, I("ai", "", -1), I("aip", "", -1), x()
            }
        };

    function E() {
        return v(), window._tkq = window._tkq || [], window._tkq.a || (k(), window._tkq = new h(window._tkq)), T
    }
}, , , , , , function(t, n, e) {
    t.exports = e(10)
}, , function(t, n, e) {
    "use strict";
    e.r(n);
    var o = e(0),
        i = e.n(o);
    var r = e(2);
    window.wpcom = window.wpcom || {}, window._tkq = window._tkq || [], window._stq = window._stq || [], Array.prototype.forEach || (Array.prototype.forEach = function(t, n) {
        for (var e = 0, o = this.length; e < o; e++) t.call(n || this, this[e], e, this)
    }), window.wpcom.stats = function() {
        var t, n, e, o, r, a, c, u = (e = function(t, n, e) {
                "function" == typeof t.addEventListener ? t.addEventListener(n, e) : "object" === i()(t.attachEvent) && t.attachEvent("on" + n, e)
            }, o = function(t) {
                return "object" === i()(t) && t.target ? t.target : window.event.srcElement
            }, r = function(t) {
                var n = 0;
                "object" === ("undefined" == typeof InstallTrigger ? "undefined" : i()(InstallTrigger)) && (n = 100), 7 === d() && (n = 100), c(o(t), n)
            }, a = function(t) {
                c(o(t), 0)
            }, c = function(e, o) {
                try {
                    if ("object" !== i()(e)) return;
                    for (;
                        "A" !== e.nodeName;) {
                        if (void 0 === e.nodeName) return;
                        if ("object" !== i()(e.parentNode)) return;
                        e = e.parentNode
                    }
                    if (function(t) {
                            var n = document.location;
                            if (n.host === t.host) return !0;
                            if ("" === t.host) return !0;
                            if (n.protocol === t.protocol && n.host === t.hostname) {
                                if ("http:" === n.protocol && n.host + ":80" === t.host) return !0;
                                if ("https:" === n.protocol && n.host + ":443" === t.host) return !0
                            }
                            return !1
                        }(e)) return;
                    if ("javascript:" === e.protocol) return;
                    if (function(t) {
                            for (var n = t;
                                "BODY" !== n.nodeName;) {
                                if ("wpcombar" === n.id) return !0;
                                if ("wpadminbar" === n.id) return !0;
                                if ("wpadvert" === n.className) return !0;
                                if (n.className.indexOf("wpcom-masterbar") > -1) return !0;
                                if (void 0 === n.nodeName) return !0;
                                if ("object" !== i()(n.parentNode)) return !0;
                                n = n.parentNode
                            }
                            return !1
                        }(e)) return;
                    if (window._stq.push(["click", {
                            u: e.href,
                            r: void 0 !== e.rel ? e.rel : "0",
                            b: void 0 !== t ? t : "0",
                            p: void 0 !== n ? n : "0"
                        }]), o)
                        for (var r = new Date, a = r.getTime() + o; !((r = new Date).getTime() > a););
                } catch (t) {}
            }, {
                init: function(o, i) {
                    t = o, n = i, document.body ? (e(document.body, "click", r), e(document.body, "contextmenu", a)) : document && (e(document, "click", r), e(document, "contextmenu", a))
                }
            }),
            d = function() {
                var t = 0;
                if ("object" === ("undefined" == typeof navigator ? "undefined" : i()(navigator)) && "Microsoft Internet Explorer" == navigator.appName) {
                    var n = navigator.userAgent.match(/MSIE ([0-9]{1,})[\.0-9]{0,}/);
                    null !== n && (t = parseInt(n[1]))
                }
                return t
            },
            f = function(t) {
                var n, e = [];
                for (n in t) t.hasOwnProperty(n) && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                return e.join("&")
            },
            l = function(t, n, e) {
                var o = new Image;
                o.src = document.location.protocol + "//pixel.wp.com/" + t + "?" + n + "&rand=" + Math.random(), o.alt = "", "string" == typeof e && document.body && (o.id = e, s(e), document.body.appendChild(o))
            },
            s = function(t) {
                var n = document.createElement("style");
                n.innerHTML = "img#".concat(t, " {\n\t\t\tposition: absolute !important;\n\t\t\tclip: rect(0, 0, 0, 0);\n\t\t\tpadding: 0 !important;\n\t\t\tborder: 0 !important;\n\t\t\theight: 0 !important;\n\t\t\twidth: 0 !important;\n\t\t\toverflow: hidden;\n\t\t}"), document.body && document.body.appendChild(n)
            },
            p = function(t) {
                if (this.a = 1, t && t.length)
                    for (var n = 0; n < t.length; n++) this.push(t[n])
            };
        p.prototype.push = function(t) {
            if (t)
                if ("object" === i()(t) && t.length) {
                    var n = t.splice(0, 1);
                    h[n] && h[n].apply(null, t)
                } else "function" == typeof t && t()
        };
        var m, v = function() {
                window._stq.a || (window._stq = new p(window._stq))
            },
            h = {
                view: function(t) {
                    t.host = document.location.host, t.ref = document.referrer, l("g.gif", f(t), "wpstats")
                },
                extra: function(t) {
                    t.v = "wpcom-no-pv", l("g.gif", f(t), !1)
                },
                raw: function(t) {
                    l("g.gif", f(t), !1)
                },
                click: function(t) {
                    l("c.gif", f(t), !1)
                },
                clickTrackerInit: function(t, n) {
                    u.init(t, n)
                }
            },
            w = function t() {
                document.hidden || (document.removeEventListener("visibilitychange", t), v())
            };
        return 6 === d() && "complete" !== document.readyState && "object" === i()(document.attachEvent) ? document.attachEvent("onreadystatechange", (function(t) {
            "complete" === document.readyState && window.setTimeout(v, 250)
        })) : (m = "unknown", void 0 === document.visibilityState || "visible" !== document.visibilityState && "hidden" !== document.visibilityState && "prerender" !== document.visibilityState && "unloaded" !== document.visibilityState || (m = document.visibilityState), h.extra({
            "x_stats-initial-visibility": m
        }), void 0 !== document.hidden && document.hidden ? document.addEventListener("visibilitychange", w) : v()), h
    }(), window.wpcom.tracks = Object(r.a)()
}]);
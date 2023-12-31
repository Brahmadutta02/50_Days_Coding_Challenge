/*! For license information please see gprofiles.js.LICENSE.txt */ ! function() {
    var t = {
            210: function() {
                function t(e) {
                    return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, t(e)
                }! function() {
                    "use strict";
                    var e = "input is invalid type",
                        r = "object" === ("undefined" == typeof window ? "undefined" : t(window)),
                        a = r ? window : {};
                    a.JS_SHA256_NO_WINDOW && (r = !1), !r && "object" === ("undefined" == typeof self ? "undefined" : t(self)) && (a = self);
                    var i = !a.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                        s = "0123456789abcdef".split(""),
                        o = [-2147483648, 8388608, 32768, 128],
                        n = [24, 16, 8, 0],
                        c = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                        h = ["hex", "array", "digest", "arrayBuffer"],
                        l = [];
                    !a.JS_SHA256_NO_NODE_JS && Array.isArray || (Array.isArray = function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    }), !i || !a.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
                        return "object" === t(e) && e.buffer && e.buffer.constructor === ArrayBuffer
                    });
                    var u = function(t) {
                        return function(e) {
                            return new v(!0).update(e)[t]()
                        }
                    };

                    function v(t) {
                        t ? (l[0] = l[16] = l[1] = l[2] = l[3] = l[4] = l[5] = l[6] = l[7] = l[8] = l[9] = l[10] = l[11] = l[12] = l[13] = l[14] = l[15] = 0, this.blocks = l) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225, this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0
                    }
                    v.prototype.update = function(r) {
                        if (!this.finalized) {
                            var a, s = t(r);
                            if ("string" !== s) {
                                if ("object" !== s) throw new Error(e);
                                if (null === r) throw new Error(e);
                                if (i && r.constructor === ArrayBuffer) r = new Uint8Array(r);
                                else if (!(Array.isArray(r) || i && ArrayBuffer.isView(r))) throw new Error(e);
                                a = !0
                            }
                            for (var o, c, h = 0, l = r.length, u = this.blocks; h < l;) {
                                if (this.hashed && (this.hashed = !1, u[0] = this.block, u[16] = u[1] = u[2] = u[3] = u[4] = u[5] = u[6] = u[7] = u[8] = u[9] = u[10] = u[11] = u[12] = u[13] = u[14] = u[15] = 0), a)
                                    for (c = this.start; h < l && c < 64; ++h) u[c >> 2] |= r[h] << n[3 & c++];
                                else
                                    for (c = this.start; h < l && c < 64; ++h)(o = r.charCodeAt(h)) < 128 ? u[c >> 2] |= o << n[3 & c++] : o < 2048 ? (u[c >> 2] |= (192 | o >> 6) << n[3 & c++], u[c >> 2] |= (128 | 63 & o) << n[3 & c++]) : o < 55296 || o >= 57344 ? (u[c >> 2] |= (224 | o >> 12) << n[3 & c++], u[c >> 2] |= (128 | o >> 6 & 63) << n[3 & c++], u[c >> 2] |= (128 | 63 & o) << n[3 & c++]) : (o = 65536 + ((1023 & o) << 10 | 1023 & r.charCodeAt(++h)), u[c >> 2] |= (240 | o >> 18) << n[3 & c++], u[c >> 2] |= (128 | o >> 12 & 63) << n[3 & c++], u[c >> 2] |= (128 | o >> 6 & 63) << n[3 & c++], u[c >> 2] |= (128 | 63 & o) << n[3 & c++]);
                                this.lastByteIndex = c, this.bytes += c - this.start, c >= 64 ? (this.block = u[16], this.start = c - 64, this.hash(), this.hashed = !0) : this.start = c
                            }
                            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                        }
                    }, v.prototype.finalize = function() {
                        if (!this.finalized) {
                            this.finalized = !0;
                            var t = this.blocks,
                                e = this.lastByteIndex;
                            t[16] = this.block, t[e >> 2] |= o[3 & e], this.block = t[16], e >= 56 && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash()
                        }
                    }, v.prototype.hash = function() {
                        var t, e, r, a, i, s, o, n, h, l = this.h0,
                            u = this.h1,
                            v = this.h2,
                            f = this.h3,
                            d = this.h4,
                            p = this.h5,
                            g = this.h6,
                            m = this.h7,
                            _ = this.blocks;
                        for (t = 16; t < 64; ++t) e = ((i = _[t - 15]) >>> 7 | i << 25) ^ (i >>> 18 | i << 14) ^ i >>> 3, r = ((i = _[t - 2]) >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10, _[t] = _[t - 16] + e + _[t - 7] + r << 0;
                        for (h = u & v, t = 0; t < 64; t += 4) this.first ? (s = 704751109, m = (i = _[0] - 210244248) - 1521486534 << 0, f = i + 143694565 << 0, this.first = !1) : (e = (l >>> 2 | l << 30) ^ (l >>> 13 | l << 19) ^ (l >>> 22 | l << 10), a = (s = l & u) ^ l & v ^ h, m = f + (i = m + (r = (d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (d & p ^ ~d & g) + c[t] + _[t]) << 0, f = i + (e + a) << 0), e = (f >>> 2 | f << 30) ^ (f >>> 13 | f << 19) ^ (f >>> 22 | f << 10), a = (o = f & l) ^ f & u ^ s, g = v + (i = g + (r = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7)) + (m & d ^ ~m & p) + c[t + 1] + _[t + 1]) << 0, e = ((v = i + (e + a) << 0) >>> 2 | v << 30) ^ (v >>> 13 | v << 19) ^ (v >>> 22 | v << 10), a = (n = v & f) ^ v & l ^ o, p = u + (i = p + (r = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7)) + (g & m ^ ~g & d) + c[t + 2] + _[t + 2]) << 0, e = ((u = i + (e + a) << 0) >>> 2 | u << 30) ^ (u >>> 13 | u << 19) ^ (u >>> 22 | u << 10), a = (h = u & v) ^ u & f ^ n, d = l + (i = d + (r = (p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) + (p & g ^ ~p & m) + c[t + 3] + _[t + 3]) << 0, l = i + (e + a) << 0;
                        this.h0 = this.h0 + l << 0, this.h1 = this.h1 + u << 0, this.h2 = this.h2 + v << 0, this.h3 = this.h3 + f << 0, this.h4 = this.h4 + d << 0, this.h5 = this.h5 + p << 0, this.h6 = this.h6 + g << 0, this.h7 = this.h7 + m << 0
                    }, v.prototype.hex = function() {
                        this.finalize();
                        var t = this.h0,
                            e = this.h1,
                            r = this.h2,
                            a = this.h3,
                            i = this.h4,
                            o = this.h5,
                            n = this.h6,
                            c = this.h7;
                        return s[t >> 28 & 15] + s[t >> 24 & 15] + s[t >> 20 & 15] + s[t >> 16 & 15] + s[t >> 12 & 15] + s[t >> 8 & 15] + s[t >> 4 & 15] + s[15 & t] + s[e >> 28 & 15] + s[e >> 24 & 15] + s[e >> 20 & 15] + s[e >> 16 & 15] + s[e >> 12 & 15] + s[e >> 8 & 15] + s[e >> 4 & 15] + s[15 & e] + s[r >> 28 & 15] + s[r >> 24 & 15] + s[r >> 20 & 15] + s[r >> 16 & 15] + s[r >> 12 & 15] + s[r >> 8 & 15] + s[r >> 4 & 15] + s[15 & r] + s[a >> 28 & 15] + s[a >> 24 & 15] + s[a >> 20 & 15] + s[a >> 16 & 15] + s[a >> 12 & 15] + s[a >> 8 & 15] + s[a >> 4 & 15] + s[15 & a] + s[i >> 28 & 15] + s[i >> 24 & 15] + s[i >> 20 & 15] + s[i >> 16 & 15] + s[i >> 12 & 15] + s[i >> 8 & 15] + s[i >> 4 & 15] + s[15 & i] + s[o >> 28 & 15] + s[o >> 24 & 15] + s[o >> 20 & 15] + s[o >> 16 & 15] + s[o >> 12 & 15] + s[o >> 8 & 15] + s[o >> 4 & 15] + s[15 & o] + s[n >> 28 & 15] + s[n >> 24 & 15] + s[n >> 20 & 15] + s[n >> 16 & 15] + s[n >> 12 & 15] + s[n >> 8 & 15] + s[n >> 4 & 15] + s[15 & n] + s[c >> 28 & 15] + s[c >> 24 & 15] + s[c >> 20 & 15] + s[c >> 16 & 15] + s[c >> 12 & 15] + s[c >> 8 & 15] + s[c >> 4 & 15] + s[15 & c]
                    }, v.prototype.toString = v.prototype.hex, v.prototype.digest = function() {
                        this.finalize();
                        var t = this.h0,
                            e = this.h1,
                            r = this.h2,
                            a = this.h3,
                            i = this.h4,
                            s = this.h5,
                            o = this.h6,
                            n = this.h7;
                        return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n]
                    }, v.prototype.array = v.prototype.digest, v.prototype.arrayBuffer = function() {
                        this.finalize();
                        var t = new ArrayBuffer(32),
                            e = new DataView(t);
                        return e.setUint32(0, this.h0), e.setUint32(4, this.h1), e.setUint32(8, this.h2), e.setUint32(12, this.h3), e.setUint32(16, this.h4), e.setUint32(20, this.h5), e.setUint32(24, this.h6), e.setUint32(28, this.h7), t
                    };
                    var f = function() {
                        var t = u("hex");
                        t.create = function() {
                            return new v
                        }, t.update = function(e) {
                            return t.create().update(e)
                        };
                        for (var e = 0; e < h.length; ++e) {
                            var r = h[e];
                            t[r] = u(r)
                        }
                        return t
                    }();
                    f.sha256 = f, a.sha256 = f.sha256
                }()
            }
        },
        e = {};

    function r(a) {
        var i = e[a];
        if (void 0 !== i) return i.exports;
        var s = e[a] = {
            exports: {}
        };
        return t[a](s, s.exports, r), s.exports
    }
    r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return r.d(e, {
                a: e
            }), e
        }, r.d = function(t, e) {
            for (var a in e) r.o(e, a) && !r.o(t, a) && Object.defineProperty(t, a, {
                enumerable: !0,
                get: e[a]
            })
        }, r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        function() {
            "use strict";

            function t(e) {
                return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, t(e)
            }
            r(210), "undefined" == typeof console && (console = {
                log: function(t) {},
                debug: function(t) {}
            }), window.Gravatar = {
                profile_stack: {},
                profile_map: {},
                overTimeout: !1,
                outTimeout: !1,
                stopOver: !1,
                active_grav: !1,
                active_hash: !1,
                active_id: !1,
                active_type: !1,
                active_grav_clone: !1,
                profile_cb: null,
                stats_queue: [],
                throbber: null,
                disabled: !1,
                url_prefix: "https://en",
                supportsPassiveEvents: !1,
                services_order: ["wordpress", "tumblr", "twitter", "mastodon", "tiktok", "vimeo", "github", "stackoverflow", "foursquare", "tripit"],
                testSupportsPassiveEvents: function() {
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                Gravatar.supportsPassiveEvents = !0
                            }
                        });
                        addEventListener("testPassive", null, t), removeEventListener("testPassive", null, t)
                    } catch (t) {}
                },
                disable: function() {
                    Gravatar.disabled = !0, Gravatar.hide_card();
                    var t = new Date(2100, 1, 1, 1, 1, 1);
                    Gravatar.stat("disable"), -1 == window.location.host.search(/wordpress.com/i) ? document.cookie = "nohovercard=1; expires=" + t.toUTCString() + ";" : document.cookie = "nohovercard=1; expires=" + t.toUTCString() + "; domain=.wordpress.com; path=/"
                },
                mouseOut: function(t) {
                    t.stopImmediatePropagation(), Gravatar.stopOver = !0, Gravatar.outTimeout = setTimeout((function() {
                        Gravatar.hide_card()
                    }), 300)
                },
                getAvatarType: function(t) {
                    var e = t.match(/d=(\w*)\b/);
                    return e ? e[1] : "mm"
                },
                init: function(t, e) {
                    Gravatar.testSupportsPassiveEvents();
                    var r, a, i = document.cookie.split(";");
                    for (r = 0; r < i.length; r++) {
                        for (a = i[r];
                            " " == a.charAt(0);) a = a.substring(1, a.length);
                        if (0 == a.indexOf("nohovercard=1")) return
                    }
                    "https:" == window.location.protocol && (this.url_prefix = "https://secure"), this.attach_profiles(t, e), this.add_card_css();
                    var s = function(t) {
                        if (!Gravatar.disabled) {
                            var e = t && t.target;
                            if (e && Gravatar.closest(e, "img.grav-hashed")) {
                                if (t.preventDefault(), t.stopPropagation(), "mouseleave" == t.type || "mouseout" == t.type) return Gravatar.mouseOut.call(this, t);
                                Gravatar.stopOver = !1, Gravatar.active_id = e.getAttribute("id"), Gravatar.active_hash = Gravatar.active_id.split("-")[1], Gravatar.active_type = e.hasAttribute("src") ? Gravatar.getAvatarType(e.getAttribute("src")) : "mm", Gravatar.untilt_gravatar(), clearTimeout(Gravatar.overTimeout), !1 !== Gravatar.profile_map["g" + Gravatar.active_hash] && (Gravatar.stat("hover"), clearTimeout(Gravatar.outTimeout), Gravatar.tilt_gravatar(), Gravatar.fetch_profile_by_hash(Gravatar.active_hash, Gravatar.active_id), Gravatar.overTimeout = setTimeout((function() {
                                    Gravatar.show_card()
                                }), 600))
                            }
                        }
                    };
                    document.body.addEventListener("mouseover", s), document.body.addEventListener("mouseout", s);
                    var o = function(t) {
                        if (!Gravatar.disabled) {
                            var e = t && t.target;
                            e && Gravatar.closest(e, "div.gcard, img.grav-clone") && (t.preventDefault(), t.stopPropagation(), "mouseenter" == t.type || "mouseover" == t.type ? (Gravatar.stopOver = !1, clearTimeout(Gravatar.outTimeout)) : Gravatar.mouseOut.call(this, t))
                        }
                    };
                    document.body.addEventListener("mouseover", o), document.body.addEventListener("mouseout", o), addEventListener("scroll", (function() {
                        Gravatar.active_hash.length && Gravatar.hide_card()
                    }), !!Gravatar.supportsPassiveEvents && {
                        passive: !0
                    })
                },
                attach_profiles: function(t, e) {
                    if (setInterval(Gravatar.send_stats, 3e3), t = void 0 === t ? "body" : t, e && "string" == typeof e)
                        for (var r = document.querySelectorAll(e), a = 0; a < r.length; a++) r[a].classList.add("no-grav");
                    var i = document.querySelectorAll(t + ' img[src*="gravatar.com/avatar"]');
                    for (a = 0; a < i.length; a++) {
                        var s = i[a],
                            o = Gravatar.extract_hash(s);
                        if (o) {
                            var n = 0;
                            if (document.querySelector("#grav-" + o + "-" + n))
                                for (; document.querySelector("#grav-" + o + "-" + n);) n++;
                            s.setAttribute("id", "grav-" + o + "-" + n), s.setAttribute("title", ""), s.removeAttribute && s.removeAttribute("title"), s.parentNode && "A" === s.parentNode.tagName && (s.parentNode.setAttribute("title", ""), s.parentNode.removeAttribute && s.parentNode.removeAttribute("title")), s.classList.add("grav-hashed"), !Gravatar.closest(s, "#comments, .comments, #commentlist, .commentlist, .grav-hijack") && Gravatar.closest(s, "a") || s.classList.add("grav-hijack")
                        }
                    }
                },
                show_card: function() {
                    if (!Gravatar.stopOver) {
                        for (var t = this.profile_map["g" + Gravatar.active_hash], e = document.querySelectorAll(".gcard"), r = 0; r < e.length; r++) e[r].classList.add("hidden");
                        if ("fetching" == this.profile_stack["g" + Gravatar.active_hash]) return Gravatar.show_throbber(), this.listen(Gravatar.active_hash, "show_card"), void Gravatar.stat("wait");
                        if (void 0 === this.profile_stack["g" + Gravatar.active_hash]) return Gravatar.show_throbber(), this.listen(Gravatar.active_hash, "show_card"), void this.fetch_profile_by_hash(Gravatar.active_hash, t);
                        Gravatar.stat("show"), Gravatar.hide_throbber(), document.querySelector("#profile-" + this.active_hash) || this.build_card(this.active_hash, this.profile_stack["g" + this.active_hash], this.active_type), this.render_card(this.active_grav, "profile-" + this.active_hash)
                    }
                },
                hide_card: function() {
                    clearTimeout(Gravatar.overTimeout), this.untilt_gravatar();
                    var t = document.querySelector("#profile-" + this.active_hash + ".gcard");
                    t && Gravatar.fadeOut(t, (function() {
                        t.remove()
                    }))
                },
                render_card: function(t, e) {
                    var r = document.querySelector("#" + e),
                        a = Gravatar.getOffsets(t),
                        i = t && t.getBoundingClientRect(),
                        s = window.pageXOffset || document.documentElement.scrollLeft || 0;
                    if (null != a) {
                        var o = i.width,
                            n = i.height,
                            c = 5 + .4 * o,
                            h = r.getBoundingClientRect(),
                            l = h.width,
                            u = h.height;
                        l === window.innerWidth && (l = 400, u = 200);
                        var v = a.left - 17,
                            f = a.top - 7,
                            d = "pos-right";
                        a.left + o + c + l > window.innerWidth + s && (v = a.left - l + o + 17, d = "pos-left");
                        var p = .25 * n;
                        r.classList.remove("pos-right", "pos-left", "hidden"), r.classList.add(d), r.style.top = f - p + "px", r.style.left = v + "px";
                        var g = n / 2;
                        g = Math.min(g, u / 2 - 6, 53), g = Math.max(g, 0)
                    }
                    Gravatar.fadeIn(r)
                },
                get_social_link: function(t) {
                    switch (t) {
                        case "foursquare":
                            return "https://secure.gravatar.com/icons/foursquare.svg";
                        case "github":
                            return "https://secure.gravatar.com/icons/github.svg";
                        case "mastodon":
                            return "https://secure.gravatar.com/icons/mastodon-black.svg";
                        case "stackoverflow":
                            return "https://secure.gravatar.com/icons/stackoverflow.svg";
                        case "tiktok":
                            return "https://secure.gravatar.com/icons/tiktok.svg";
                        case "tripit":
                            return "https://secure.gravatar.com/icons/tripit.svg";
                        case "tumblr":
                            return "https://secure.gravatar.com/icons/tumblr.svg";
                        case "twitter":
                            return "https://secure.gravatar.com/icons/twitter-alt.svg";
                        case "vimeo":
                            return "https://secure.gravatar.com/icons/vimeo.svg";
                        case "wordpress":
                            return "https://secure.gravatar.com/icons/wordpress.svg";
                        default:
                            return null
                    }
                },
                get_social_link_title: function(t) {
                    switch (t) {
                        case "foursquare":
                            return "Foursquare";
                        case "github":
                            return "GitHub";
                        case "mastodon":
                            return "Mastodon";
                        case "stackoverflow":
                            return "StackOverflow";
                        case "tiktok":
                            return "TikTok";
                        case "tripit":
                            return "TripIt";
                        case "tumblr":
                            return "Tumblr";
                        case "twitter":
                            return "Twitter";
                        case "vimeo":
                            return "Vimeo";
                        case "wordpress":
                            return "WordPress";
                        default:
                            return null
                    }
                },
                get_social_image: function(t) {
                    var e = Gravatar.get_social_link(t);
                    if (e) return '<img class="gcard-services-icon" src="' + e + '" alt="' + t + '" />'
                },
                build_social_links: function(t) {
                    if (!t.length) return "";
                    var e = "";
                    return t.slice().sort((function(t, e) {
                        return Gravatar.services_order.indexOf(t.shortname) - Gravatar.services_order.indexOf(e.shortname)
                    })).forEach((function(t) {
                        var r = Gravatar.get_social_image(t.shortname),
                            a = Gravatar.get_social_link_title(t.shortname),
                            i = a ? 'title="' + a + '"' : "";
                        r && (e += '<a href="' + t.url + '" ' + i + " >" + r + "</a>")
                    })), '<div class="gcard-services">' + e + "</div>"
                },
                build_card: function(t, r, a) {
                    function i(t) {
                        var e, r = 0;
                        for (e in t) t.hasOwnProperty(e) && r++;
                        return r
                    }
                    e.init(r);
                    var s = e.get("urls"),
                        o = (e.get("photos"), e.get("accounts")),
                        n = 100;
                    i(s) > 3 ? n += 90 : n += 10 + 20 * i(s), i(o) > 0 && (n += 30);
                    var c = e.get("aboutMe");
                    n == (c = (c = c.replace(/<[^>]+>/gi, "")).toString().substr(0, n)).length && (c += '<a href="' + e.get("profileUrl") + '" target="_blank">&#8230;</a>');
                    var h = ["grav-inner"];
                    Gravatar.my_hash && t == Gravatar.my_hash && (h.push("grav-is-user"), c.length || (c = "<p>Want a better profile? <a class='grav-edit-profile' href='https://gravatar.com/profiles/edit/?noclose' target='_blank'>Click here</a>.</p>")), c.length && h.push("gcard-about");
                    var l = e.get("displayName");
                    l.length || (l = e.get("preferredUsername"));
                    var u = Gravatar.build_social_links(o),
                        v = !!c.length || !!u,
                        f = '\t\t\t<div id="profile-' + t + '" class="gcard grofile"> \t\t\t\t<div class="grav-inner"> \t\t\t\t\t<div class="grav-grav"> \t\t\t\t\t\t<a href="' + e.get("profileUrl") + '" target="_blank"> \t\t\t\t\t\t\t<img src="' + e.get("thumbnailUrl") + "?s=100&r=pg&d=" + (a || "mm") + '" width="100" height="100" /> \t\t\t\t\t\t</a> \t\t\t\t\t\t<div class="grav-info"> \t\t\t\t\t\t\t<h4><a href="' + e.get("profileUrl") + '" target="_blank">' + l + '</a></h4> \t\t\t\t\t\t\t<p class="grav-loc">' + e.get("currentLocation") + "</p> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t" + (v ? " \t\t\t\t\t\t<div> \t\t\t\t\t\t\t" + (c ? '<p class="grav-about">' + c + "</p>" : "") + "\t\t\t\t\t\t" + u + "\t\t\t\t\t\t</div>" : "") + "\t\t\t\t</div> \t\t\t</div>";
                    document.body.insertAdjacentHTML("beforeend", f);
                    for (var d = document.querySelector("#profile-" + t + " .grav-inner"), p = 0; p < h.length; p++) d.classList.add(h[p]);
                    if (!document.querySelector("#profile-" + t + " .gcard-links") && !document.querySelector("#profile-" + t + " .gcard-services")) {
                        var g = document.querySelector("#profile-" + t + " .grav-rightcol");
                        g && (g.style.width = "auto")
                    }
                    if (!document.querySelector("#profile-" + t + " .gcard-about")) {
                        var m = document.querySelector("#profile-" + t + " .grav-leftcol");
                        m && (m.style.width = "auto")
                    }

                    function _(t, e, r) {
                        for (var a = document.querySelectorAll(t), i = 0; i < a.length; i++) a[i].addEventListener(e, r)
                    }
                    "function" == typeof Gravatar.profile_cb && Gravatar.loaded_js(t, "profile-" + t), _("#profile-" + t + " a.grav-extra-comments", "click", (function(t) {
                        return Gravatar.stat("click_comment", t)
                    })), _("#profile-" + t + " a.grav-extra-likes", "click", (function(t) {
                        return Gravatar.stat("click_like", t)
                    })), _("#profile-" + t + " .grav-links a", "click", (function(t) {
                        return Gravatar.stat("click_link", t)
                    })), _("#profile-" + t + " .grav-services a", "click", (function(t) {
                        return Gravatar.stat("click_service", t)
                    })), _("#profile-" + t + " h4 a, #profile-" + t + " .grav-view-complete, #profile-" + t + " .grav-grav a", "click", (function(t) {
                        return Gravatar.stat("to_profile", t)
                    })), _("#profile-" + t + " a.grav-edit-profile", "click", (function(t) {
                        return Gravatar.stat("click_edit_profile", t)
                    }))
                },
                tilt_gravatar: function() {
                    if (this.active_grav = document.querySelector("img#" + this.active_id), !document.querySelector("img#grav-clone-" + this.active_hash)) {
                        this.active_grav_clone = this.active_grav.cloneNode(), this.active_grav_clone.setAttribute("id", "grav-clone-" + this.active_hash), this.active_grav_clone.classList.add("grav-clone");
                        var t = Gravatar.getOffsets(this.active_grav) || {
                                left: 0,
                                top: 0
                            },
                            e = getComputedStyle(this.active_grav),
                            r = (t.top, parseInt(e.paddingTop, 10), t.left, parseInt(e.paddingLeft, 10), document.createElement("div"));
                        if (this.active_grav.classList.contains("grav-hijack")) r.innerHTML = '<a href="https://gravatar.com/' + this.active_hash + '" class="grav-clone-a" target="_blank"></a>';
                        else {
                            var a = Gravatar.closest(this.active_grav, "a");
                            r.appendChild(a.cloneNode(!1))
                        }
                        this.active_grav_clone.classList.add("grav-tilt"), this.active_grav_clone.style.borderBottomWidth = this.active_grav.getBoundingClientRect().height / 5 + "px", this.active_grav_clone.classList.remove("grav-hashed")
                    }
                },
                untilt_gravatar: function() {
                    for (var t = document.querySelectorAll(".grav-tilt-parent"), e = 0; e < t.length; e++) {
                        var r = t[e];
                        r.remove ? r.remove() : r.parentNode && r.parentNode.removeChild(r)
                    }
                    Gravatar.hide_throbber()
                },
                show_throbber: function() {
                    if (!Gravatar.throbber) {
                        var t = document.createElement("div");
                        t.innerHTML = '<div id="grav-throbber" class="grav-throbber"><img src="' + this.url_prefix + '.gravatar.com/images/throbber.gif" alt="." width="15" height="15" /></div>', Gravatar.throbber = t.firstChild
                    }
                    document.body.appendChild(Gravatar.throbber);
                    var e = Gravatar.getOffsets(document.querySelector("#" + Gravatar.active_id)) || {
                        left: 0,
                        top: 0
                    };
                    Gravatar.throbber.style.top = e.top + 2 + "px", Gravatar.throbber.style.left = e.left + 1 + "px"
                },
                hide_throbber: function() {
                    Gravatar.throbber && (Gravatar.throbber.remove ? Gravatar.throbber.remove() : Gravatar.throbber.parentNode && Gravatar.throbber.parentNode.removeChild(Gravatar.throbber))
                },
                closest: function(t, e) {
                    if (t.closest) return t.closest(e);
                    var r = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
                        a = t;
                    do {
                        if (r.bind(a)(e)) return a;
                        a = a.parentElement || a.parentNode
                    } while (null !== a && 1 === a.nodeType);
                    return null
                },
                getOffsets: function(t) {
                    if (!t) return null;
                    var e = window.pageXOffset || document.documentElement.scrollLeft || 0,
                        r = window.pageYOffset || document.documentElement.scrollTop || 0,
                        a = t.getBoundingClientRect();
                    return {
                        left: a.left + e,
                        top: a.top + r
                    }
                },
                afterAnimation: function(t, e, r) {
                    if (t && r) {
                        var a = !1,
                            i = function i(s) {
                                s && "transitionend" === s.type && s.propertyName !== e || (a || (a = !0, r()), t && t.removeEventListener("transitionend", i))
                            };
                        t.addEventListener("transitionend", i), setTimeout(i, 200)
                    }
                },
                fadeIn: function(t, e) {
                    t.classList.remove("hidden"), t.classList.add("fadeout"), requestAnimationFrame((function() {
                        requestAnimationFrame((function() {
                            t.classList.remove("fadeout"), t.classList.add("fading", "fadein"), Gravatar.afterAnimation(t, "opacity", (function() {
                                t.classList.remove("fading", "fadein"), e && e()
                            }))
                        }))
                    }))
                },
                fadeOut: function(t, e) {
                    t.classList.add("fadein"), requestAnimationFrame((function() {
                        requestAnimationFrame((function() {
                            t.classList.remove("fadein"), t.classList.add("fading", "fadeout"), Gravatar.afterAnimation(t, "opacity", (function() {
                                t.classList.remove("fading", "fadeout"), t.classList.add("hidden"), e && e()
                            }))
                        }))
                    }))
                },
                fetch_profile_by_email: function(t) {
                    return this.fetch_profile_by_hash(this.sha256(t))
                },
                fetch_profile_by_hash: function(e, r) {
                    if (this.profile_map["g" + e] = r, this.profile_stack["g" + e] && "object" == t(this.profile_stack["g" + e])) return this.profile_stack["g" + e];
                    this.profile_stack["g" + e] = "fetching", Gravatar.stat("fetch"), this.load_js(this.url_prefix + ".gravatar.com/" + e + ".json?callback=Gravatar.fetch_profile_callback", (function() {
                        Gravatar.fetch_profile_error(e, r)
                    }))
                },
                fetch_profile_callback: function(e) {
                    e && "object" == t(e) && (this.profile_stack["g" + e.entry[0].requestHash] = e, this.notify(e.entry[0].requestHash))
                },
                fetch_profile_error: function(t, e) {
                    Gravatar.stat("profile_404"), Gravatar.profile_map["g" + t] = !1;
                    var r = document.querySelector("#" + e),
                        a = r.parentNode,
                        i = a && a.parentNode;
                    i && i.querySelector('a[href="https://gravatar.com/' + t + '"]') === a && i.replaceChild(r, a), e == Gravatar.active_id && Gravatar.hide_card()
                },
                listen: function(t, e) {
                    this.notify_stack || (this.notify_stack = {}), t = "g" + t, this.notify_stack[t] || (this.notify_stack[t] = []);
                    for (var r = 0; r < this.notify_stack[t].length; r++)
                        if (e == this.notify_stack[t][r]) return;
                    this.notify_stack[t][this.notify_stack[t].length] = e
                },
                notify: function(t) {
                    this.notify_stack || (this.notify_stack = {}), t = "g" + t, this.notify_stack[t] || (this.notify_stack[t] = []);
                    for (var e = 0; e < this.notify_stack[t].length; e++) 0 != this.notify_stack[t][e] && void 0 !== this.notify_stack[t][e] && (Gravatar[this.notify_stack[t][e]](t.substr(1)), this.notify_stack[t][e] = !1)
                },
                extract_hash: function(e) {
                    var r = e && e.getAttribute("src") || "",
                        a = /gravatar.com\/avatar\/([0-9a-f]{32,64})/.exec(r);
                    if (null != a && "object" == t(a) && 2 == a.length) a = a[1];
                    else {
                        if (null === (a = /gravatar_id\=([0-9a-f]{32,64})/.exec(r)) || "object" != t(a) || 2 != a.length) return !1;
                        a = a[1]
                    }
                    return a
                },
                load_js: function(t, e) {
                    if (this.loaded_scripts || (this.loaded_scripts = []), !this.loaded_scripts[t]) {
                        this.loaded_scripts[t] = !0;
                        var r = document.createElement("script");
                        r.src = t, r.type = "text/javascript", "function" == typeof e && (r.onerror = e), document.head.appendChild(r)
                    }
                },
                loaded_js: function(t, e) {
                    Gravatar.profile_cb(t, e)
                },
                add_card_css: function() {
                    if (!document.querySelector("#gravatar-card-css")) {
                        var t, e = document.querySelector('script[src*="/js/gprofiles."]'),
                            r = e && (e.getAttribute("src") || !1),
                            a = !1;
                        if (r ? (t = r.replace(/\/js\/gprofiles(?:\.dev)?\.js.*$/, ""), a = r.split("?")[1] || !1) : t = "//s.gravatar.com", !a) {
                            var i = new Date,
                                s = new Date(i.getFullYear(), 0, 1);
                            a = Math.ceil(((i - s) / 864e5 + s.getDay() + 1) / 7), a = "ver=" + i.getFullYear().toString() + a.toString()
                        }
                        t = t.replace(/^(https?\:)?\/\//, "");
                        var o = "<link rel='stylesheet' type='text/css' id='gravatar-card-css' href='" + (t = window.location.protocol + "//" + t) + "/dist/css/hovercard.min.css?" + a + "' />";
                        document.querySelector("#gravatar-card-services-css") || (o += "<link rel='stylesheet' type='text/css' id='gravatar-card-services-css' href='" + t + "/dist/css/services.min.css?" + a + "' />"), document.head.insertAdjacentHTML("beforeend", o)
                    }
                },
                sha256: function(t) {
                    return window.sha256(t.toString().trim().toLowerCase())
                },
                autofill: function(t, e) {
                    if (t.length && -1 != t.indexOf("@")) {
                        this.autofill_map = e;
                        var r = this.sha256(t);
                        void 0 === this.profile_stack["g" + r] ? (this.listen(r, "autofill_data"), this.fetch_profile_by_hash(r)) : this.autofill_data(r)
                    }
                },
                autofill_data: function(t) {
                    for (var r in e.init(this.profile_stack["g" + t]), this.autofill_map) {
                        var a = document.querySelector("#" + this.autofill_map[r]);
                        switch (r) {
                            case "url":
                                link = e.get("urls"), url = void 0 !== link[0] ? link[0].value : e.get("profileUrl"), a && (a.value = url);
                                break;
                            case "urls":
                                for (links = e.get("urls"), links_str = "", l = 0; l < links.length; l++) links_str += links[l].value + "\n";
                                a && (a.value = links_str);
                                break;
                            default:
                                if (parts = r.split(/\./), parts[1]) {
                                    switch (val = e.get(r), parts[0]) {
                                        case "ims":
                                        case "phoneNumbers":
                                            val = val.value;
                                            break;
                                        case "emails":
                                            val = val[0].value;
                                        case "accounts":
                                            val = val.url
                                    }
                                    a && (a.value = val)
                                } else a && (a.value = e.get(r))
                        }
                    }
                },
                whee: function() {
                    if (!Gravatar.whee.didWhee) {
                        if (Gravatar.whee.didWhee = !0, document.styleSheets && document.styleSheets[0]) document.styleSheets[0].insertRule(".grav-tag a { background-position: 22px 100% !important }", 0);
                        else
                            for (var t = document.querySelectorAll(".grav-tag a"), e = 0; e < t.length; e++) t[e].style.backgroundPosition = "22px 100%";
                        var r = document.querySelectorAll('img[src*="gravatar.com/"]');
                        for (e = 0; e < r.length; e++) r[e].classList.add("grav-whee");
                        return !1
                    }
                },
                stat: function(t, e) {
                    if (Gravatar.stats_queue.push(t), e) {
                        var r = e.metaKey || "_blank" === (e.currentTarget && e.currentTarget.getAttribute("target"));
                        return Gravatar.send_stats((function() {
                            r || (document.location = e.currentTarget.href)
                        })), r
                    }
                    Gravatar.stats_queue.length > 10 && Gravatar.send_stats()
                },
                send_stats: function(t) {
                    if (document.images) {
                        var e = Gravatar.stats_queue;
                        if (e.length) {
                            var r = new Date;
                            Gravatar.stats_queue = [];
                            var a = "https://pixel.wp.com/g.gif?v=wpcom2&x_grav-hover=" + e.join(",") + "&rand=" + Math.random().toString() + "-" + r.getTime(),
                                i = new Image(1, 1);
                            "function" == typeof t && (i.onload = t), i.src = a
                        }
                    }
                }
            };
            var e = {
                data: {},
                init: function(t) {
                    return "fetching" != t && void 0 !== t.entry[0] && void(e.data = t.entry[0])
                },
                get: function(t) {
                    if (-1 != t.indexOf(".")) {
                        if (parts = t.split(/\./), e.data[parts[0]]) {
                            if (e.data[parts[0]][parts[1]]) return e.data[parts[0]][parts[1]];
                            for (i = 0, s = e.data[parts[0]].length; i < s; i++)
                                if (e.data[parts[0]][i].type && parts[1] == e.data[parts[0]][i].type || e.data[parts[0]][i].shortname && parts[1] == e.data[parts[0]][i].shortname || e.data[parts[0]][i].primary && "primary" == parts[1]) return e.data[parts[0]][i]
                        }
                        return ""
                    }
                    return e.data[t] ? e.data[t] : "url" == t && e.data.urls.length ? e.data.urls[0].value : ""
                }
            }
        }()
}();
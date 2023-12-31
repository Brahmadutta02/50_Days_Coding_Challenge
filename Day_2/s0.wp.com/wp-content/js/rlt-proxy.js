(function() {
    var e;
    var t;
    var n;
    var o = [];
    var r = false;
    var i = "jetpack:wpcomRLT";

    function a(e) {
        var t = document.createElement("a");
        t.href = e;
        return t.origin
    }

    function c(t) {
        if (!e) {
            return
        }
        rltInjectToken(e, t.target.contentWindow, a(t.target.src))
    }

    function d() {
        var e = document.querySelectorAll("iframe");
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if (l(n)) {
                n.addEventListener("load", c)
            }
        }
        var o = new MutationObserver(function(e, t) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                if (o.type === "childList") {
                    for (var r = 0; r < o.addedNodes.length; r++) {
                        var i = o.addedNodes[r];
                        if (i instanceof HTMLElement && i.nodeName === "IFRAME" && l(i)) {
                            i.addEventListener("load", c)
                        }
                    }
                }
            }
        });
        o.observe(document.body, {
            subtree: true,
            childList: true
        })
    }

    function l(e) {
        if (!Array.isArray(n)) {
            return
        }
        return n.indexOf(a(e.src)) >= 0
    }

    function s(e, t, n) {
        if (t && typeof t.postMessage === "function") {
            try {
                t.postMessage(JSON.stringify({
                    type: "rltMessage",
                    data: {
                        event: "invalidate",
                        token: e,
                        sourceOrigin: window.location.origin
                    }
                }), n)
            } catch (e) {
                return
            }
        }
    }
    window.rltInvalidateToken = function(n, o) {
        if (n === e) {
            e = null
        }
        try {
            if (window.location === window.parent.location && window.localStorage) {
                if (window.localStorage.getItem(i) === n) {
                    window.localStorage.removeItem(i)
                }
            }
        } catch (e) {
            console.info("localstorage access for invalidate denied - probably blocked third-party access", window.location.href)
        }
        var r = document.querySelectorAll("iframe");
        for (var c = 0; c < r.length; c++) {
            var d = r[c];
            var f = a(d.src);
            if (f !== o && l(d)) {
                s(n, d.contentWindow, f)
            }
        }
        if (t && t !== o && window.parent) {
            s(n, window.parent, t)
        }
    };
    window.rltInjectToken = function(e, t, n) {
        if (t && typeof t.postMessage === "function") {
            try {
                t.postMessage(JSON.stringify({
                    type: "loginMessage",
                    data: {
                        event: "login",
                        success: true,
                        type: "rlt",
                        token: e,
                        sourceOrigin: window.location.origin
                    }
                }), n)
            } catch (e) {
                return
            }
        }
    };
    window.rltIsAuthenticated = function() {
        return !!e
    };
    window.rltGetToken = function() {
        return e
    };
    window.rltAddInitializationListener = function(t) {
        if (r) {
            t(e)
        } else {
            o.push(t)
        }
    };
    window.rltStoreToken = function(t) {
        e = t;
        try {
            if (window.location === window.parent.location && window.localStorage) {
                window.localStorage.setItem(i, t)
            }
        } catch (e) {
            console.info("localstorage access denied - probably blocked third-party access", window.location.href)
        }
    };
    window.rltInitialize = function(c) {
        if (!c || typeof window.postMessage !== "function") {
            return
        }
        e = c.token;
        n = c.iframeOrigins;
        t = c.parentOrigin;
        try {
            if (!e && window.location === window.parent.location && window.localStorage) {
                e = window.localStorage.getItem(i)
            }
        } catch (e) {
            console.info("localstorage access denied - probably blocked third-party access", window.location.href)
        }
        window.addEventListener("message", function(n) {
            var o = n && n.data;
            if (typeof o === "string") {
                try {
                    o = JSON.parse(o)
                } catch (e) {
                    return
                }
            }
            var r = o && o.type;
            var i = o && o.data;
            if (r !== "loginMessage") {
                return
            }
            if (i && i.type === "rlt" && i.token !== e) {
                rltStoreToken(i.token);
                var c = document.querySelectorAll("iframe");
                for (var d = 0; d < c.length; d++) {
                    var s = c[d];
                    if (l(s)) {
                        rltInjectToken(e, s.contentWindow, a(s.src))
                    }
                }
                if (t && t !== i.sourceOrigin && window.parent) {
                    rltInjectToken(e, window.parent, t)
                }
            }
        });
        window.addEventListener("message", function(t) {
            var n = t && t.data;
            if (typeof n === "string") {
                try {
                    n = JSON.parse(n)
                } catch (e) {
                    return
                }
            }
            var o = n && n.type;
            var r = n && n.data;
            if (o !== "rltMessage") {
                return
            }
            if (r && r.event === "invalidate" && r.token === e) {
                rltInvalidateToken(r.token)
            }
        });
        if (n) {
            if (document.readyState !== "loading") {
                d()
            } else {
                window.addEventListener("DOMContentLoaded", d)
            }
        }
        o.forEach(function(t) {
            t(e)
        });
        o = [];
        r = true
    }
})();
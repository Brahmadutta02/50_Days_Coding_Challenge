(function() {
    const e = window.wpcom || {};
    e.actionbar = {};
    e.actionbar.data = window.actionbardata;
    const t = e.actionbar.data;

    function n(e = {}, n = () => {}) {
        if (!e.action) {
            return
        }
        fetch(t.xhrURL, {
            method: "POST",
            body: new URLSearchParams(e),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then(n)
    }
    let s;

    function c() {
        if (!s) {
            s = new Promise((e, n) => {
                if (window.WPCOM_Proxy_Request) {
                    e(window.WPCOM_Proxy_Request)
                } else {
                    const s = document.createElement("script");
                    s.src = t.proxyScriptUrl;
                    s.async = true;
                    document.body.appendChild(s);
                    s.addEventListener("load", () => e(window.WPCOM_Proxy_Request));
                    s.addEventListener("error", e => n(e))
                }
            })
        }
        return s
    }

    function i(e, t, n = {}) {
        const s = {
            path: e,
            body: n,
            method: "POST",
            apiNamespace: t
        };
        c().then(e => e(s))
    }

    function o(e, t) {
        n({
            action: "actionbar_stats",
            stat: e
        }, t)
    }

    function r(e) {
        n({
            action: e,
            _wpnonce: t.nonce,
            source: "actionbar",
            blog_id: t.siteID
        })
    }
    let a = window.scrollY || window.pageYOffset || 0;
    if (window != window.top) {
        return
    }
    const l = document.querySelector("#actionbar");
    if (!l) {
        return
    }
    l.removeAttribute("style");
    if (t.statusMessage) {
        $(t.statusMessage)
    }
    let d = false;
    const u = l.querySelector(".actnbr-actn-follow");
    const f = l.querySelector("#toggle-input-notify-posts");
    const b = l.querySelector("#toggle-input-email-posts");
    const m = l.querySelector("#toggle-input-email-comments");
    const p = l.querySelectorAll(".segmented-control__link");
    const w = l.querySelector(".frequency-instantly");
    const _ = l.querySelector(".frequency-daily");
    const y = l.querySelector(".frequency-weekly");
    if (f) {
        f.addEventListener("click", e => {
            e.preventDefault();
            const n = e.target.parentElement.classList.toggle("is-checked");
            const s = `/read/sites/${t.siteID}/notification-subscriptions/${n?"new":"delete"}`;
            i(s, "wpcom/v2");
            P("wpcom_actionbar_site_notifications", {
                enabling: n,
                follow_source: "actionbar",
                url: t.siteURL
            })
        })
    }
    if (b) {
        b.addEventListener("click", e => {
            e.preventDefault();
            const n = e.target.parentElement.classList.toggle("is-checked");
            const s = `/read/site/${t.siteID}/post_email_subscriptions/${n?"new":"delete"}`;
            let c = {};
            if (n) {
                c.delivery_frequency = t.subsEmailDefault;
                p.forEach(e => e.parentElement.classList.remove("is-selected"));
                l.querySelector(`.frequency-${t.subsEmailDefault}`).parentElement.classList.add("is-selected")
            }
            l.querySelector("#email-new-posts-details").classList.toggle("is-visible", n);
            i(s, "rest/v1.2", c)
        })
    }
    if (m) {
        m.addEventListener("click", e => {
            e.preventDefault();
            const n = e.target.parentElement.classList.toggle("is-checked");
            const s = `/read/site/${t.siteID}/comment_email_subscriptions/${n?"new":"delete"}`;
            i(s, "rest/v1.2")
        })
    }
    const g = (e, n) => {
        p.forEach(e => e.parentElement.classList.remove("is-selected"));
        e.target.parentElement.classList.add("is-selected");
        const s = `/read/site/${t.siteID}/post_email_subscriptions/update`;
        i(s, "rest/v1.2", {
            delivery_frequency: n
        })
    };
    if (p.length > 0) {
        w.addEventListener("click", e => g(e, "instantly"));
        _.addEventListener("click", e => g(e, "daily"));
        y.addEventListener("click", e => g(e, "weekly"))
    }
    if (u) {
        u.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();
            d = true;
            if (t.isLoggedIn) {
                $(`<div class="actnbr-reader">${t.i18n.followedText}</div>`);
                o("followed");
                P("wpcom_actionbar_site_followed", {
                    follow_source: "actionbar",
                    url: t.siteURL
                });
                r("ab_subscribe_to_blog");
                const e = t.subsEmailDefault;
                if (e !== "never") {
                    b.click()
                }
                f && f.click()
            } else {
                R()
            }
        })
    }
    const L = l.querySelector(".actnbr-actn-following");
    if (L) {
        L.addEventListener("click", e => {
            e.preventDefault();
            L.classList.add("no-display");
            u.classList.remove("no-display");
            o("unfollowed");
            P("wpcom_actionbar_site_unfollowed", {
                follow_source: "actionbar",
                url: t.siteURL
            });
            r("ab_unsubscribe_from_blog");
            const n = l.querySelector(".actnbr-btn");
            n.classList.add("actnbr-hidden");
            const s = l.querySelectorAll(".actnbr-site-settings__toggle.is-checked");
            s.forEach(e => e.classList.remove("is-checked"))
        })
    }
    document.addEventListener("click", e => {
        const t = !!e.target.closest("#follow-bubble");
        if (t) {
            return
        }
        const n = l.querySelector(".actnbr-btn");
        if (d && !n.classList.contains("actnbr-hidden")) {
            d = false;
            n.classList.add("actnbr-hidden")
        }
    });
    const v = l.querySelector(".actnbr-shortlink a");
    if (v) {
        v.addEventListener("click", e => {
            e.preventDefault();
            if (window.electron) {
                window.electron.send("copy-text-to-clipboard", t.shortlink)
            } else {
                window.prompt("Shortlink: ", t.shortlink)
            }
        })
    }
    const h = l.querySelector(".actnbr-ellipsis");
    let q = false;
    if (h) {
        h.addEventListener("click", e => {
            const t = e.target.closest("a");
            if (t && t.classList.contains("actnbr-action")) {
                return false
            }
            h.classList.toggle("actnbr-hidden");
            setTimeout(() => {
                if (!h.classList.contains("actnbr-hidden")) {
                    o("show_more_menu");
                    q = true
                }
            }, 10)
        })
    }
    document.addEventListener("click", () => {
        if (q) {
            h.classList.add("actnbr-hidden");
            q = false
        }
    });
    const k = l.querySelector(".actnbr-fold");
    if (k) {
        k.addEventListener("click", e => {
            e.preventDefault();
            const s = k.querySelector("a");
            if (l.classList.contains("actnbr-folded")) {
                s.textContent = t.i18n.foldBar;
                l.classList.remove("actnbr-folded");
                n({
                    action: "unfold_actionbar"
                })
            } else {
                s.textContent = t.i18n.unfoldBar;
                l.classList.add("actnbr-folded");
                n({
                    action: "fold_actionbar"
                })
            }
        })
    }

    function S(e, t, n) {
        const s = l.querySelector(e);
        if (s) {
            s.addEventListener("click", x(t, n))
        }
    }
    S(".actnbr-sitename a", "clicked_site_title");
    S(".actnbr-customize a", "customized");
    S(".actnbr-folded-customize a", "customized");
    S(".actnbr-theme a", "explored_theme");
    S(".actnbr-edit a", "edited");
    S(".actnbr-stats a", "clicked_stats");
    S(".flb-report a", "reported_content");
    S(".actnbr-follows a", "managed_following");
    S(".actnbr-login-nudge a", "clicked_login_nudge");
    S(".actnbr-signup a", "clicked_signup_link");
    S(".actnbr-login a", "clicked_login_link");
    S(".actnbr-subs a", "clicked_manage_subs_link");
    S(".actnbr-reader a", "view_reader");
    if (v) {
        v.addEventListener("click", o("copied_shortlink"))
    }
    const E = l.querySelector(".actnbr-follow-bubble form");
    if (E) {
        E.addEventListener("submit", x("submit_follow_form", () => {
            const e = E.querySelector("button");
            if (e) {
                e.setAttribute("disabled", true)
            }
        }))
    }

    function D() {
        const e = window.scrollY || window.pageYOffset || 0;
        const t = l.classList.contains("actnbr-hidden");
        if (e < a) {
            l.classList.remove("actnbr-hidden")
        } else {
            if (!t && document.querySelectorAll("#actionbar > ul > li:not(.actnbr-hidden) > .actnbr-popover").length === 0) {
                l.classList.add("actnbr-hidden");
                l.querySelectorAll("li").forEach(e => e.classList.add("actnbr-hidden"))
            }
        }
        a = e
    }
    document.addEventListener("scroll", D, {
        passive: true
    });

    function P(e, t) {
        t = t || {};
        window._tkq = window._tkq || [];
        window._tkq.push(["recordEvent", e, t])
    }

    function x(e, t) {
        const n = {};
        return function s(s) {
            if (n[s.timeStamp]) {
                delete n[s.timeStamp];
                if (s.type === "submit") {
                    s.target.submit()
                }
                if (typeof t === "function") {
                    return t(s)
                }
                return true
            }
            s.preventDefault();
            s.stopPropagation();

            function c() {
                const e = new s.constructor(s.type, s);
                n[e.timeStamp] = true;
                s.target.dispatchEvent(e)
            }
            o(e, c)
        }
    }

    function R() {
        const e = l.querySelector(".actnbr-follow-bubble form");
        e.removeAttribute("style");
        const t = l.querySelector(".actnbr-btn");
        t && t.classList.toggle("actnbr-hidden");
        setTimeout(() => {
            l.querySelector(".actnbr-email-field").focus()
        }, 10)
    }

    function $(e) {
        u && u.classList.add("no-display");
        L && L.classList.remove("no-display");
        const t = l.querySelector(".actnbr-follow-bubble .actnbr-message");
        if (t) {
            t.innerHTML = e
        }
        const n = l.querySelector(".actnbr-btn");
        n && n.classList.remove("actnbr-hidden")
    }
})();
< html > < head > < meta name = "color-scheme"
content = "light dark" > < /head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">/ **
    *
    onetrust - banner - sdk *
    v6 .36 .0 *
    by OneTrust LLC *
    Copyright 2022 *
    /! function() {
        "use strict";
        var o = function(e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array & amp; & amp;

                function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var o in t) t.hasOwnProperty(o) & amp; & amp;
                    (e[o] = t[o])
                })(e, t)
        };
        var k, e, r = function() {
            return (r = Object.assign || function(e) {
                for (var t, o = 1, n = arguments.length; o & lt; n; o++)
                    for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) & amp; & amp;
                (e[r] = t[r]);
                return e
            }).apply(this, arguments)
        };

        function c(i, s, a, l) {
            return new(a = a || Promise)(function(e, t) {
                function o(e) {
                    try {
                        r(l.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function n(e) {
                    try {
                        r(l.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(t) {
                    t.done ? e(t.value) : new a(function(e) {
                        e(t.value)
                    }).then(o, n)
                }
                r((l = l.apply(i, s || [])).next())
            })
        }

        function C(o, n) {
            var r, i, s, e, a = {
                label: 0,
                sent: function() {
                    if (1 & amp; s[0]) throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            };
            return e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            }, "function" == typeof Symbol & amp; & amp;
            (e[Symbol.iterator] = function() {
                return this
            }), e;

            function t(t) {
                return function(e) {
                    return function(t) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (r = 1, i & amp; & amp;
                                (s = 2 & amp; t[0] ? i.return : t[0] ? i.throw || ((s = i.return) & amp; & amp; s.call(i), 0) : i.next) & amp; & amp; !(s = s.call(i, t[1])).done) return s;
                            switch (i = 0, s & amp; & amp;
                                (t = [2 & amp;t[0], s.value]), t[0]) {
                                case 0:
                                case 1:
                                    s = t;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, i = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(s = 0 & lt;
                                            (s = a.trys).length & amp; & amp; s[s.length - 1]) & amp; & amp;
                                        (6 === t[0] || 2 === t[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === t[0] & amp; & amp;
                                        (!s || t[1] & gt; s[0] & amp; & amp; t[1] & lt; s[3])) {
                                        a.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] & amp; & amp; a.label & lt; s[1]) {
                                        a.label = s[1], s = t;
                                        break
                                    }
                                    if (s & amp; & amp; a.label & lt; s[2]) {
                                        a.label = s[2], a.ops.push(t);
                                        break
                                    }
                                    s[2] & amp; & amp;
                                    a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            t = n.call(o, a)
                        } catch (e) {
                            t = [6, e], i = 0
                        } finally {
                            r = s = 0
                        }
                        if (5 & amp; t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        }

        function y() {
            for (var e = 0, t = 0, o = arguments.length; t & lt; o; t++) e += arguments[t].length;
            var n = Array(e),
                r = 0;
            for (t = 0; t & lt; o; t++)
                for (var i = arguments[t], s = 0, a = i.length; s & lt; a; s++, r++) n[r] = i[s];
            return n
        }(e = k = k || {})[e.ACTIVE = 0] = "ACTIVE", e[e.ALWAYS_ACTIVE = 1] = "ALWAYS_ACTIVE", e[e.EXPIRED = 2] = "EXPIRED", e[e.NO_CONSENT = 3] = "NO_CONSENT", e[e.OPT_OUT = 4] = "OPT_OUT", e[e.PENDING = 5] = "PENDING", e[e.WITHDRAWN = 6] = "WITHDRAWN";
        var t = setTimeout;

        function l(e) {
            return Boolean(e & amp; & amp; void 0 !== e.length)
        }

        function n() {}

        function i(e) {
            if (!(this instanceof i)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], h(e, this)
        }

        function s(o, n) {
            for (; 3 === o._state;) o = o._value;
            0 !== o._state ? (o._handled = !0, i._immediateFn(function() {
                var e = 1 === o._state ? n.onFulfilled : n.onRejected;
                if (null !== e) {
                    var t;
                    try {
                        t = e(o._value)
                    } catch (e) {
                        return void d(n.promise, e)
                    }
                    a(n.promise, t)
                } else(1 === o._state ? a : d)(n.promise, o._value)
            })) : o._deferreds.push(n)
        }

        function a(t, e) {
            try {
                if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                if (e & amp; & amp;
                    ("object" == typeof e || "function" == typeof e)) {
                    var o = e.then;
                    if (e instanceof i) return t._state = 3, t._value = e, void u(t);
                    if ("function" == typeof o) return void h((n = o, r = e, function() {
                        n.apply(r, arguments)
                    }), t)
                }
                t._state = 1, t._value = e, u(t)
            } catch (e) {
                d(t, e)
            }
            var n, r
        }

        function d(e, t) {
            e._state = 2, e._value = t, u(e)
        }

        function u(e) {
            2 === e._state & amp; & amp;
            0 === e._deferreds.length & amp; & amp;
            i._immediateFn(function() {
                e._handled || i._unhandledRejectionFn(e._value)
            });
            for (var t = 0, o = e._deferreds.length; t & lt; o; t++) s(e, e._deferreds[t]);
            e._deferreds = null
        }

        function p(e, t, o) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = o
        }

        function h(e, t) {
            var o = !1;
            try {
                e(function(e) {
                    o || (o = !0, a(t, e))
                }, function(e) {
                    o || (o = !0, d(t, e))
                })
            } catch (e) {
                if (o) return;
                o = !0, d(t, e)
            }
        }

        function g() {}
        i.prototype.catch = function(e) {
            return this.then(null, e)
        }, i.prototype.then = function(e, t) {
            var o = new this.constructor(n);
            return s(this, new p(e, t, o)), o
        }, i.prototype.finally = function(t) {
            var o = this.constructor;
            return this.then(function(e) {
                return o.resolve(t()).then(function() {
                    return e
                })
            }, function(e) {
                return o.resolve(t()).then(function() {
                    return o.reject(e)
                })
            })
        }, i.all = function(t) {
            return new i(function(n, r) {
                if (!l(t)) return r(new TypeError("Promise.all accepts an array"));
                var i = Array.prototype.slice.call(t);
                if (0 === i.length) return n([]);
                var s = i.length;

                function a(t, e) {
                    try {
                        if (e & amp; & amp;
                            ("object" == typeof e || "function" == typeof e)) {
                            var o = e.then;
                            if ("function" == typeof o) return void o.call(e, function(e) {
                                a(t, e)
                            }, r)
                        }
                        i[t] = e, 0 == --s & amp; & amp;
                        n(i)
                    } catch (e) {
                        r(e)
                    }
                }
                for (var e = 0; e & lt; i.length; e++) a(e, i[e])
            })
        }, i.resolve = function(t) {
            return t & amp; & amp;
            "object" == typeof t & amp; & amp;
            t.constructor === i ? t : new i(function(e) {
                e(t)
            })
        }, i.reject = function(o) {
            return new i(function(e, t) {
                t(o)
            })
        }, i.race = function(r) {
            return new i(function(e, t) {
                if (!l(r)) return t(new TypeError("Promise.race accepts an array"));
                for (var o = 0, n = r.length; o & lt; n; o++) i.resolve(r[o]).then(e, t)
            })
        }, i._immediateFn = "function" == typeof setImmediate ? function(e) {
            setImmediate(e)
        } : function(e) {
            t(e, 0)
        }, i._unhandledRejectionFn = function(e) {
            "undefined" != typeof console & amp; & amp;
            console & amp; & amp;
            console.warn("Possible Unhandled Promise Rejection:", e)
        };
        var f, v, m, b, P, S, A, T, G, I, E, L, _, V, B, w, x, O, W, N, D, H, F, R, q, M, U, j, z, K, J, Y, X, Q, $, Z, ee, te, oe, ne, re, ie, se, ae, le, ce, de, ue, pe, he, ge, Ce, ye, fe, ve, ke, me, be, Pe, Se, Ae, Te, Ie, Le = new(g.prototype.initPolyfill = function() {
            this.initArrayIncludesPolyfill(), this.initObjectAssignPolyfill(), this.initArrayFillPolyfill(), this.initClosestPolyfill(), this.initIncludesPolyfill(), this.initEndsWithPoly(), this.initCustomEventPolyfill(), this.promisesPolyfil()
        }, g.prototype.initArrayIncludesPolyfill = function() {
            Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                value: function(e) {
                    for (var t = [], o = 1; o & lt; arguments.length; o++) t[o - 1] = arguments[o];
                    if (null == this) throw new TypeError("Array.prototype.includes called on null or undefined");
                    var n = Object(this),
                        r = parseInt(n.length, 10) || 0;
                    if (0 === r) return !1;
                    var i, s, a = t[1] || 0;
                    for (0 & lt; = a ? i = a : (i = r + a) & lt; 0 & amp; & amp;
                        (i = 0); i & lt; r;) {
                        if (e === (s = n[i]) || e != e & amp; & amp; s != s) return !0;
                        i++
                    }
                    return !1
                },
                writable: !0,
                configurable: !0
            })
        }, g.prototype.initEndsWithPoly = function() {
            String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
                value: function(e, t) {
                    return (void 0 === t || t & gt; this.length) & amp; & amp;
                    (t = this.length), this.substring(t - e.length, t) === e
                },
                writable: !0,
                configurable: !0
            })
        }, g.prototype.initClosestPolyfill = function() {
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || Object.defineProperty(Element.prototype, "closest", {
                value: function(e) {
                    var t = this;
                    do {
                        if (t.matches(e)) return t;
                        t = t.parentElement || t.parentNode
                    } while (null !== t & amp; & amp; 1 === t.nodeType);
                    return null
                },
                writable: !0,
                configurable: !0
            })
        }, g.prototype.initIncludesPolyfill = function() {
            String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
                value: function(e, t) {
                    return "number" != typeof t & amp; & amp;
                    (t = 0), !(t + e.length & gt; this.length) & amp; & amp; - 1 !== this.indexOf(e, t)
                },
                writable: !0,
                configurable: !0
            })
        }, g.prototype.initObjectAssignPolyfill = function() {
            "function" != typeof Object.assign & amp; & amp;
            Object.defineProperty(Object, "assign", {
                value: function(e, t) {
                    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                    for (var o = Object(e), n = 1; n & lt; arguments.length; n++) {
                        var r = arguments[n];
                        if (null != r)
                            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) & amp; & amp;
                        (o[i] = r[i])
                    }
                    return o
                },
                writable: !0,
                configurable: !0
            })
        }, g.prototype.initArrayFillPolyfill = function() {
            Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
                value: function(e) {
                    if (null == this) throw new TypeError("this is null or not defined");
                    for (var t = Object(this), o = t.length & gt; & gt; & gt; 0, n = arguments[1] & gt; & gt; 0, r = n & lt; 0 ? Math.max(o + n, 0) : Math.min(n, o), i = arguments[2], s = void 0 === i ? o : i & gt; & gt; 0, a = s & lt; 0 ? Math.max(o + s, 0) : Math.min(s, o); r & lt; a;) t[r] = e, r++;
                    return t
                }
            })
        }, g.prototype.initCustomEventPolyfill = function() {
            if ("function" == typeof window.CustomEvent) return !1;

            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var o = document.createEvent("CustomEvent");
                return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o
            }
            e.prototype = window.Event.prototype, window.CustomEvent = e
        }, g.prototype.insertViewPortTag = function() {
            var e = document.querySelector('meta[name="viewport"]'),
                t = document.createElement("meta");
            t.name = "viewport", t.content = "width=device-width, initial-scale=1", e || document.head.appendChild(t)
        }, g.prototype.promisesPolyfil = function() {
            "undefined" == typeof Promise & amp; & amp;
            (window.Promise = i)
        }, g);
        (v = f = f || {})[v.Unknown = 0] = "Unknown", v[v.BannerCloseButton = 1] = "BannerCloseButton", v[v.ConfirmChoiceButton = 2] = "ConfirmChoiceButton", v[v.AcceptAll = 3] = "AcceptAll", v[v.RejectAll = 4] = "RejectAll", v[v.BannerSaveSettings = 5] = "BannerSaveSettings", v[v.ContinueWithoutAcceptingButton = 6] = "ContinueWithoutAcceptingButton", (b = m = m || {})[b.Banner = 1] = "Banner", b[b.PC = 2] = "PC", b[b.API = 3] = "API", (S = P = P || {}).AcceptAll = "AcceptAll", S.RejectAll = "RejectAll", S.UpdateConsent = "UpdateConsent", (T = A = A || {})[T.Purpose = 1] = "Purpose", T[T.SpecialFeature = 2] = "SpecialFeature", (I = G = G || {}).Legal = "legal", I.UserFriendly = "user_friendly", (L = E = E || {}).Top = "top", L.Bottom = "bottom", (V = _ = _ || {})[V.Banner = 0] = "Banner", V[V.PrefCenterHome = 1] = "PrefCenterHome", V[V.VendorList = 2] = "VendorList", V[V.CookieList = 3] = "CookieList", (w = B = B || {})[w.RightArrow = 39] = "RightArrow", w[w.LeftArrow = 37] = "LeftArrow", (O = x = x || {}).AfterTitle = "AfterTitle", O.AfterDescription = "AfterDescription", O.AfterDPD = "AfterDPD", (N = W = W || {}).PlusMinus = "Plusminus", N.Caret = "Caret", N.NoAccordion = "NoAccordion", (H = D = D || {}).Consent = "Consent", H.LI = "LI", H.AddtlConsent = "AddtlConsent", (R = F = F || {}).Iab1Pub = "eupubconsent", R.Iab2Pub = "eupubconsent-v2", R.Iab1Eu = "euconsent", R.Iab2Eu = "euconsent-v2", (M = q = q || {})[M.Disabled = 0] = "Disabled", M[M.Consent = 1] = "Consent", M[M.LegInt = 2] = "LegInt", (j = U = U || {})[j["Banner - Allow All"] = 1] = "Banner - Allow All", j[j["Banner - Reject All"] = 2] = "Banner - Reject All", j[j["Banner - Close"] = 3] = "Banner - Close", j[j["Preference Center - Allow All"] = 4] = "Preference Center - Allow All", j[j["Preference Center - Reject All"] = 5] = "Preference Center - Reject All", j[j["Preference Center - Confirm"] = 6] = "Preference Center - Confirm", (K = z = z || {}).Active = "1", K.InActive = "0", (Y = J = J || {}).Host = "Host", Y.GenVendor = "GenVen", (Q = X = X || {})[Q.Host = 1] = "Host", Q[Q.GenVen = 2] = "GenVen", Q[Q.HostAndGenVen = 3] = "HostAndGenVen", (Z = $ = $ || {})[Z.minDays = 1] = "minDays", Z[Z.maxDays = 30] = "maxDays", Z[Z.maxYear = 31536e3] = "maxYear", Z[Z.maxSecToDays = 86400] = "maxSecToDays", (te = ee = ee || {})[te.RTL = 0] = "RTL", te[te.LTR = 1] = "LTR", (ne = oe = oe || {})[ne.GoogleVendor = 1] = "GoogleVendor", ne[ne.GeneralVendor = 2] = "GeneralVendor", (ie = re = re || {})[ie.Days = 1] = "Days", ie[ie.Weeks = 7] = "Weeks", ie[ie.Months = 30] = "Months", ie[ie.Years = 365] = "Years", (ae = se = se || {}).Checkbox = "Checkbox", ae.Toggle = "Toggle", (ce = le = le || {}).SlideIn = "Slide_In", ce.FadeIn = "Fade_In", ce.RemoveAnimation = "Remove_Animation", (ue = de = de || {}).Link = "Link", ue.Icon = "Icon", (he = pe = pe || {}).consent = "consent", he.set = "set", (Ce = ge = ge || {}).update = "update", Ce.default = "default", Ce.ads_data_redaction = "ads_data_redaction", (fe = ye = ye || {}).analytics_storage = "analytics_storage", fe.ad_storage = "ad_storage", fe.functionality_storage = "functionality_storage", fe.personalization_storage = "personalization_storage", fe.security_storage = "security_storage", fe.region = "region", fe.wait_for_update = "wait_for_update", (ke = ve = ve || {}).granted = "granted", ke.denied = "denied", (be = me = me || {})[be.HostList = 0] = "HostList", be[be.IabVendors = 1] = "IabVendors", be[be.VendorServices = 2] = "VendorServices", (Se = Pe = Pe || {}).OBJECT_TO_LI = "ObjectToLI", Se.LI_ACTIVE_IF_LEGAL_BASIS = "LIActiveIfLegalBasis", (Te = Ae = Ae || {}).cookies = "cookies", Te.vendors = "vendors";
        var _e = "AwaitingReconsent",
            Ve = "consentId",
            Be = "geolocation",
            Ee = "interactionCount",
            we = "isIABGlobal",
            xe = "NotLandingPage",
            Ge = "isGpcEnabled",
            Oe = {
                ADDITIONAL_CONSENT_STRING: "OTAdditionalConsentString",
                ALERT_BOX_CLOSED: "OptanonAlertBoxClosed",
                OPTANON_CONSENT: "OptanonConsent",
                EU_PUB_CONSENT: "eupubconsent-v2",
                EU_CONSENT: "euconsent-v2",
                SELECTED_VARIANT: "OTVariant",
                OT_PREVIEW: "otpreview"
            },
            Ne = "CONFIRMED",
            De = "OPT_OUT",
            He = "NO_CHOICE",
            Fe = "NOTGIVEN",
            Re = "NO_OPT_OUT",
            qe = "always active",
            Me = "active",
            Ue = "inactive landingpage",
            je = "inactive",
            ze = "dnt",
            Ke = "LOCAL",
            We = "TEST",
            Je = "LOCAL_TEST",
            Ye = "data-language",
            Xe = "otCookieSettingsButton.json",
            Qe = "otCookieSettingsButtonRtl.json",
            $e = "otCenterRounded",
            Ze = "otFlat",
            et = "otFloatingRoundedCorner",
            tt = "otFloatingFlat",
            ot = "otFloatingRoundedIcon",
            nt = "otFloatingRounded",
            rt = "otChoicesBanner",
            it = "otNoBanner",
            st = "otPcCenter",
            at = "otPcList",
            lt = "otPcPanel",
            ct = "otPcPopup",
            dt = "otPcTab",
            ut = "hidebanner",
            pt = ((Ie = {})[re.Days] = "PCenterVendorListLifespanDay", Ie[re.Weeks] = "LfSpnWk", Ie[re.Months] = "PCenterVendorListLifespanMonth", Ie[re.Years] = "LfSpnYr", Ie),
            ht = "DNAC",
            gt = "Category",
            Ct = "Host",
            yt = "General Vendor",
            ft = "VendorService",
            vt = "BRANCH",
            kt = "COOKIE",
            mt = "IAB2_FEATURE",
            bt = "IAB2_PURPOSE",
            Pt = "IAB2_SPL_FEATURE",
            St = "IAB2_SPL_PURPOSE",
            At = "IAB2_STACK",
            Tt = ["IAB2_PURPOSE", "IAB2_STACK", "IAB2_FEATURE", "IAB2_SPL_PURPOSE", "IAB2_SPL_FEATURE"],
            It = ["COOKIE", "BRANCH", "IAB2_STACK"],
            Lt = ["IAB2_PURPOSE", "IAB2_SPL_FEATURE"],
            _t = ["IAB2_FEATURE", "IAB2_SPL_PURPOSE"],
            Vt = ["IAB2_PURPOSE", "IAB2_SPL_PURPOSE", "IAB2_FEATURE", "IAB2_SPL_FEATURE"],
            Bt = new function() {};

        function Et(e, t, o) {
            void 0 === o & amp; & amp;
            (o = !1);

            function n(e) {
                if (!e) return null;
                var t = e.trim();
                return ";" !== t.charAt(t.length - 1) & amp; & amp;
                (t += ";"), t.trim()
            }
            var i = n(e.getAttribute("style")),
                s = n(t),
                r = "";
            r = o & amp; & amp;
            i ? function() {
                for (var e = i.split(";").concat(s.split(";")).filter(function(e) {
                        return 0 !== e.length
                    }), t = "", o = "", n = e.length - 1; 0 & lt; = n; n--) {
                    var r = e[n].substring(0, e[n].indexOf(":")).trim();
                    t.indexOf(r) & lt;
                    0 & amp; & amp;
                    (t += r, o += e[n] + ";")
                }
                return o
            }() : s, e.setAttribute("style", r)
        }

        function wt() {}
        var xt, Gt = new(wt.prototype.convertKeyValueLowerCase = function(e) {
                for (var t in e) e[t.toLowerCase()] ? e[t.toLowerCase()] = e[t].toLowerCase() : (e[t] & amp; & amp;
                    (e[t.toLowerCase()] = e[t].toLowerCase()), delete e[t]);
                return e
            }, wt.prototype.arrToStr = function(e) {
                return e.toString()
            }, wt.prototype.strToArr = function(e) {
                return e ? e.split(",") : []
            }, wt.prototype.strToMap = function(e) {
                if (!e) return new Map;
                for (var t = new Map, o = 0, n = this.strToArr(e); o & lt; n.length; o++) {
                    var r = n[o].split(":");
                    t.set(r[0], "1" === r[1])
                }
                return t
            }, wt.prototype.empty = function(e) {
                var t = document.getElementById(e);
                if (t)
                    for (; t.hasChildNodes();) t.removeChild(t.lastChild)
            }, wt.prototype.show = function(e) {
                var t = document.getElementById(e);
                t & amp; & amp;
                Et(t, "display: block;", !0)
            }, wt.prototype.remove = function(e) {
                var t = document.getElementById(e);
                t & amp; & amp;
                t.parentNode & amp; & amp;
                t.parentNode.removeChild(t)
            }, wt.prototype.appendTo = function(e, t) {
                var o, n = document.getElementById(e);
                n & amp; & amp;
                ((o = document.createElement("div")).innerHTML = t, n.appendChild(o))
            }, wt.prototype.contains = function(e, t) {
                var o;
                for (o = 0; o & lt; e.length; o += 1)
                    if (e[o].toString().toLowerCase() === t.toString().toLowerCase()) return !0;
                return !1
            }, wt.prototype.indexOf = function(e, t) {
                var o;
                for (o = 0; o & lt; e.length; o += 1)
                    if (e[o] === t) return o;
                return -1
            }, wt.prototype.endsWith = function(e, t) {
                return -1 !== e.indexOf(t, e.length - t.length)
            }, wt.prototype.generateUUID = function() {
                var o = (new Date).getTime();
                return "undefined" != typeof performance & amp; & amp;
                "function" == typeof performance.now & amp; & amp;
                (o += performance.now()), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = (o + 16 * Math.random()) % 16 | 0;
                    return o = Math.floor(o / 16), ("x" === e ? t : 3 & amp; t | 8).toString(16)
                })
            }, wt.prototype.getActiveIdArray = function(e) {
                return e.filter(function(e) {
                    return "true" === e.split(":")[1]
                }).map(function(e) {
                    return parseInt(e.split(":")[0])
                })
            }, wt.prototype.distinctArray = function(e) {
                var t = new Array;
                return e.forEach(function(e) {
                    t.indexOf(e) & lt;
                    0 & amp; & amp;
                    t.push(e)
                }), t
            }, wt.prototype.findIndex = function(e, t) {
                for (var o = -1, n = 0; n & lt; e.length; n++)
                    if (void 0 !== e[n] & amp; & amp; t(e[n], n)) {
                        o = n;
                        break
                    } return o
            }, wt.prototype.getURL = function(e) {
                var t = document.createElement("a");
                return t.href = e, t
            }, wt.prototype.removeURLPrefixes = function(e) {
                return e.toLowerCase().replace(/(^\w+:|^)\/\//, "").replace("www.", "")
            }, wt.prototype.removeChild = function(e) {
                if (e)
                    if (e instanceof NodeList || e instanceof Array)
                        for (var t = 0; t & lt; e.length; t++) e[t].parentElement.removeChild(e[t]);
                    else e.parentElement.removeChild(e)
            }, wt.prototype.getRelativeURL = function(e, t, o) {
                if (void 0 === o & amp; & amp;
                    (o = !1), t) {
                    var n = "./" + e.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/").replace(".json", "");
                    return o ? n : n + ".js"
                }
                return e
            }, wt.prototype.setCheckedAttribute = function(e, t, o) {
                e & amp; & amp;
                (t = document.querySelector(e)), t & amp; & amp;
                (t.setAttribute("aria-checked", o.toString()), o ? t.setAttribute("checked", "") : t.removeAttribute("checked"), t.checked = o)
            }, wt.prototype.setDisabledAttribute = function(e, t, o) {
                e & amp; & amp;
                (t = document.querySelector(e)), t & amp; & amp;
                (o ? t.setAttribute("disabled", o.toString()) : t.removeAttribute("disabled"))
            }, wt.prototype.setHtmlAttributes = function(e, t) {
                for (var o in t) e.setAttribute(o, t[o]), e[o] = t[o]
            }, wt.prototype.calculateCookieLifespan = function(e) {
                if (e & lt; 0) return Rt.LifespanTypeText;
                var t = Math.floor(e / $.maxSecToDays);
                if (t & lt; $.minDays) return "&lt; 1 " + Rt.PCenterVendorListLifespanDay;
                if (t & lt; $.maxDays) return t + " " + Rt.PCenterVendorListLifespanDays;
                var o = Math.floor(t / $.maxDays);
                return 1 === o ? o + " " + Rt.PCenterVendorListLifespanMonth : o + " " + Rt.PCenterVendorListLifespanMonths
            }, wt.prototype.insertElement = function(e, t, o) {
                e & amp; & amp;
                t & amp; & amp;
                e.insertAdjacentElement(o, t)
            }, wt.prototype.customQuerySelector = function(t) {
                return function(e) {
                    return t.querySelector(e)
                }
            }, wt.prototype.customQuerySelectorAll = function(t) {
                return function(e) {
                    return t.querySelectorAll(e)
                }
            }, wt),
            Ot = (Nt.prototype.removeAlertBox = function() {
                null !== this.getCookie(Oe.ALERT_BOX_CLOSED) & amp; & amp;
                this.setCookie(Oe.ALERT_BOX_CLOSED, "", 0, !0)
            }, Nt.prototype.removeIab1 = function() {
                null !== this.getCookie(F.Iab1Pub) & amp; & amp;
                this.setCookie(F.Iab1Pub, "", 0, !0)
            }, Nt.prototype.removeIab2 = function() {
                null !== this.getCookie(F.Iab2Pub) & amp; & amp;
                this.setCookie(F.Iab2Pub, "", 0, !0)
            }, Nt.prototype.removeAddtlStr = function() {
                null !== this.getCookie(Oe.ADDITIONAL_CONSENT_STRING) & amp; & amp;
                this.setCookie(Oe.ADDITIONAL_CONSENT_STRING, "", 0, !0)
            }, Nt.prototype.removeVariant = function() {
                null !== this.getCookie(Oe.SELECTED_VARIANT) & amp; & amp;
                this.setCookie(Oe.SELECTED_VARIANT, "", 0, !0)
            }, Nt.prototype.removeOptanon = function() {
                null !== this.getCookie(Oe.OPTANON_CONSENT) & amp; & amp;
                this.setCookie(Oe.OPTANON_CONSENT, "", 0, !0)
            }, Nt.prototype.removePreview = function() {
                null !== this.getCookie(Oe.OT_PREVIEW) & amp; & amp;
                this.setCookie(Oe.OT_PREVIEW, "", 0, !0)
            }, Nt.prototype.writeCookieParam = function(e, t, o, n) {
                var r, i, s, a, l = {},
                    c = this.getCookie(e);
                if (c)
                    for (i = c.split("&amp;"), r = 0; r & lt; i.length; r += 1) s = i[r].split("="), l[decodeURIComponent(s[0])] = s[0] === t & amp; & amp;
                n ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
                l[t] = o;
                var d = Bt.moduleInitializer.TenantFeatures;
                d & amp; & amp;
                d.CookieV2CookieDateTimeInISO ? l.datestamp = (new Date).toISOString() : l.datestamp = (new Date).toString(), l.version = Mt.otSDKVersion, a = this.param(l), this.setCookie(e, a, Rt.ReconsentFrequencyDays)
            }, Nt.prototype.readCookieParam = function(e, t, o) {
                var n, r, i, s, a = this.getCookie(e);
                if (a) {
                    for (r = {}, i = a.split("&amp;"), n = 0; n & lt; i.length; n += 1) s = i[n].split("="), r[decodeURIComponent(s[0])] = o ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
                    return t & amp; & amp;
                    r[t] ? r[t] : t & amp; & amp;
                    !r[t] ? "" : r
                }
                return ""
            }, Nt.prototype.getCookie = function(e) {
                if (Bt & amp; & amp; Bt.moduleInitializer & amp; & amp; Bt.moduleInitializer.MobileSDK) {
                    var t = this.getCookieDataObj(e);
                    if (t) return t.value
                }
                if (Mt.isAMP & amp; & amp;
                    (Mt.ampData = JSON.parse(localStorage.getItem(Mt.dataDomainId)) || {}, Mt.ampData)) return Mt.ampData[e] || null;
                var o, n, r = e + "=",
                    i = document.cookie.split(";");
                for (o = 0; o & lt; i.length; o += 1) {
                    for (n = i[o];
                        " " === n.charAt(0);) n = n.substring(1, n.length);
                    if (0 === n.indexOf(r)) return n.substring(r.length, n.length)
                }
                return null
            }, Nt.prototype.setAmpStorage = function() {
                window.localStorage.setItem(Mt.dataDomainId, JSON.stringify(Mt.ampData))
            }, Nt.prototype.removeAmpStorage = function() {
                window.localStorage.removeItem(Mt.dataDomainId)
            }, Nt.prototype.handleAmp = function(e, t) {
                "" !== t ? Mt.ampData[e] = t : delete Mt.ampData[e], 0 === Object.keys(Mt.ampData).length ? this.removeAmpStorage() : this.setAmpStorage()
            }, Nt.prototype.setCookie = function(e, t, o, n, r) {
                if (void 0 === n & amp; & amp;
                    (n = !1), void 0 === r & amp; & amp;
                    (r = new Date), Mt.isAMP) this.handleAmp(e, t);
                else {
                    var i = void 0;
                    i = o ? (r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3), "; expires=" + r.toUTCString()) : n ? "; expires=" + new Date(0).toUTCString() : "";
                    var s = Bt.moduleInitializer,
                        a = s & amp; & amp;
                    s.Domain ? s.Domain.split("/") : [], l = "", c = s.TenantFeatures;
                    a.length & lt; = 1 ? a[1] = "" : l = a.slice(1).join("/");
                    var d = "Samesite=Lax";
                    c & amp; & amp;
                    c.CookiesSameSiteNone & amp; & amp;
                    (d = "Samesite=None; Secure");
                    var u = s.ScriptType === We || s.ScriptType === Je;
                    if (Mt.isPreview || !u & amp; & amp; !s.MobileSDK) p = t + i + "; path=/" + l + "; domain=." + a[0] + "; " + d, document.cookie = e + "=" + p;
                    else {
                        var p = t + i + "; path=/; " + d;
                        s.MobileSDK ? this.setCookieDataObj({
                            name: e,
                            value: t,
                            expires: i,
                            date: r,
                            domainAndPath: a
                        }) : document.cookie = e + "=" + p
                    }
                }
            }, Nt.prototype.setCookieDataObj = function(t) {
                if (t) {
                    Mt.otCookieData || (window.OneTrust & amp; & amp; window.OneTrust.otCookieData ? Mt.otCookieData = window.OneTrust.otCookieData : Mt.otCookieData = []);
                    var e = Gt.findIndex(Mt.otCookieData, function(e) {
                        return e.name === t.name
                    }); - 1 & lt;
                    e ? Mt.otCookieData[e] = t : Mt.otCookieData.push(t)
                }
            }, Nt.prototype.getCookieDataObj = function(t) {
                Mt.otCookieData & amp; & amp;
                0 !== Mt.otCookieData.length || (window.OneTrust & amp; & amp; window.OneTrust.otCookieData ? Mt.otCookieData = window.OneTrust.otCookieData : Mt.otCookieData = []);
                var e = Gt.findIndex(Mt.otCookieData, function(e) {
                    return e.name === t
                });
                if (0 & lt; = e) {
                    var o = Mt.otCookieData[e];
                    if (o.date) return new Date(o.date) & lt;
                    new Date ? (Mt.otCookieData.splice(e, 1), null) : o
                }
                return null
            }, Nt.prototype.param = function(e) {
                var t, o = "";
                for (t in e) e.hasOwnProperty(t) & amp; & amp;
                ("" !== o & amp; & amp;
                    (o += "&amp;"), o += t + "=" + encodeURIComponent(e[t]).replace(/%20/g, "+"));
                return o
            }, Nt);

        function Nt() {}
        var Dt = (Ht.prototype.setRegionRule = function(e) {
            this.rule = e
        }, Ht.prototype.getRegionRule = function() {
            return this.rule
        }, Ht.prototype.getRegionRuleType = function() {
            return this.multiVariantTestingEnabled & amp; & amp;
            this.selectedVariant ? this.selectedVariant.TemplateType : this.conditionalLogicEnabled & amp; & amp;
            !this.allConditionsFailed ? this.Condition.TemplateType : this.rule.Type
        }, Ht.prototype.canUseGoogleVendors = function(e) {
            return !!e & amp; & amp;
            (this.conditionalLogicEnabled & amp; & amp; !this.allConditionsFailed ? this.Condition.UseGoogleVendors : this.rule.UseGoogleVendors)
        }, Ht.prototype.initVariables = function() {
            this.consentableGrps = [], this.consentableIabGrps = [], this.iabGrps = [], this.iabGrpIdMap = {}, this.domainGrps = {}, this.iabGroups = {
                purposes: {},
                legIntPurposes: {},
                specialPurposes: {},
                features: {},
                specialFeatures: {}
            }
        }, Ht.prototype.init = function(e) {
            this.getGPCSignal(), this.initVariables();
            var t = e.DomainData;
            this.setPublicDomainData(JSON.parse(JSON.stringify(t))), this.domainDataMapper(t), this.commonDataMapper(e.CommonData), Rt.NtfyConfig = e.NtfyConfig || {}, this.setBannerName(), this.setPcName(), this.populateGPCSignal(), Rt.GoogleConsent.GCEnable & amp; & amp;
            this.initGCM()
        }, Ht.prototype.getGPCSignal = function() {
            this.gpcEnabled = !0 === navigator.globalPrivacyControl
        }, Ht.prototype.isValidConsentNoticeGroup = function(e, t) {
            if (!e.ShowInPopup) return !1;
            var o = e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds & amp; & amp;
            e.GeneralVendorsIds.length || e.VendorServices & amp; & amp;
            e.VendorServices.length, n = !1, r = !1, i = !1;
            if (e & amp; & amp; !e.Parent) {
                e.SubGroups.length & amp; & amp;
                (n = e.SubGroups.some(function(e) {
                    return e.GroupName & amp; & amp;
                    e.ShowInPopup & amp; & amp;
                    e.FirstPartyCookies.length
                }), r = e.SubGroups.some(function(e) {
                    return e.GroupName & amp; & amp;
                    e.ShowInPopup & amp; & amp;
                    (e.Hosts.length || e.GeneralVendorsIds & amp; & amp; e.GeneralVendorsIds.length)
                }), !t || e.FirstPartyCookies.length & amp; & amp; e.Hosts.length || (i = !e.SubGroups.some(function(e) {
                    return -1 === Tt.indexOf(e.Type)
                })));
                var s = e.SubGroups.some(function(e) {
                    return -1 & lt;
                    Tt.indexOf(e.Type)
                });
                (-1 & lt; Tt.indexOf(e.Type) || s) & amp; & amp;
                (e.ShowVendorList = !0), (e.Hosts.length || r || n) & amp; & amp;
                (e.ShowHostList = !0)
            }
            return o || -1 & lt;
            Tt.indexOf(e.Type) || n || r || i
        }, Ht.prototype.extractGroupIdForIabGroup = function(e) {
            return -1 & lt;
            e.indexOf("ISPV2_") ? e = e.replace("ISPV2_", "") : -1 & lt;
            e.indexOf("IABV2_") ? e = e.replace("IABV2_", "") : -1 & lt;
            e.indexOf("IFEV2_") ? e = e.replace("IFEV2_", "") : -1 & lt;
            e.indexOf("ISFV2_") & amp; & amp;
            (e = e.replace("ISFV2_", "")), e
        }, Ht.prototype.populateGroups = function(e, r) {
            var i = this,
                s = {},
                a = [];
            e.forEach(function(e) {
                var t = e.CustomGroupId;
                if (void 0 !== e.HasConsentOptOut & amp; & amp; e.IsIabPurpose || (e.HasConsentOptOut = !0), !(!r.IsIabEnabled & amp; & amp; - 1 & lt; Tt.indexOf(e.Type) || "IAB2" === i.iabType & amp; & amp;
                        (e.Type === bt || e.Type === At) & amp; & amp; !e.HasConsentOptOut & amp; & amp; !e.HasLegIntOptOut || e.Type === Pt & amp; & amp; !e.HasConsentOptOut) & amp; & amp;
                    (t !== Ft.purposeOneGrpId || e.ShowInPopup || (i.purposeOneTreatment = !0), i.grpContainLegalOptOut = e.HasLegIntOptOut || i.grpContainLegalOptOut, e.SubGroups = [], e.Parent ? a.push(e) : s[t] = e, "IAB2" === i.iabType & amp; & amp; - 1 & lt; Tt.indexOf(e.Type))) {
                    var o = i.extractGroupIdForIabGroup(t);
                    i.iabGrpIdMap[t] = o, e.IabGrpId = o;
                    var n = {
                        description: e.GroupDescription,
                        descriptionLegal: e.DescriptionLegal,
                        id: Number(o),
                        name: e.GroupName
                    };
                    switch (e.Type) {
                        case bt:
                            i.iabGroups.purposes[o] = n;
                            break;
                        case St:
                            i.iabGroups.specialPurposes[o] = n;
                            break;
                        case mt:
                            i.iabGroups.features[o] = n;
                            break;
                        case Pt:
                            i.iabGroups.specialFeatures[o] = n
                    }
                }
            }), a.forEach(function(e) {
                s[e.Parent] & amp; & amp;
                e.ShowInPopup & amp; & amp;
                (e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds & amp; & amp; e.GeneralVendorsIds.length || -1 & lt; Tt.indexOf(e.Type)) & amp; & amp;
                s[e.Parent].SubGroups.push(e)
            });
            var t = [];
            return Object.keys(s).forEach(function(e) {
                i.isValidConsentNoticeGroup(s[e], r.IsIabEnabled) & amp; & amp;
                (s[e].SubGroups.sort(function(e, t) {
                    return e.Order - t.Order
                }), t.push(s[e]))
            }), this.initGrpVar(t), t.sort(function(e, t) {
                return e.Order - t.Order
            })
        }, Ht.prototype.initGrpVar = function(e) {
            var o = this,
                n = !0,
                r = !0;
            e.forEach(function(e) {
                y([e], e.SubGroups).forEach(function(e) {
                    var t;
                    e.Type !== kt & amp; & amp;
                    e.Type !== bt & amp; & amp;
                    e.Type !== Pt || (o.domainGrps[e.PurposeId.toLowerCase()] = e.CustomGroupId), -1 & lt;
                    It.indexOf(e.Type) & amp; & amp;
                    o.consentableGrps.push(e), -1 & lt;
                    Lt.indexOf(e.Type) & amp; & amp;
                    o.consentableIabGrps.push(e), -1 === It.indexOf(e.Type) & amp; & amp;
                    o.iabGrps.push(e), o.gpcEnabled & amp; & amp;
                    e.IsGpcEnabled & amp; & amp;
                    (e.Status = je), (t = o.DNTEnabled & amp; & amp; e.IsDntEnabled ? ze : e.Status.toLowerCase()) !== Me & amp; & amp;
                    t !== Ue & amp; & amp;
                    t !== ze || (n = !1), t !== Ue & amp; & amp;
                    t !== qe & amp; & amp;
                    (r = !1), o.gpcForAGrpEnabled || (o.gpcForAGrpEnabled = e.IsGpcEnabled)
                })
            }), this.isOptInMode = n, this.isSoftOptInMode = r
        }, Ht.prototype.domainDataMapper = function(e) {
            var t = {
                AriaClosePreferences: e.AriaClosePreferences,
                AriaOpenPreferences: e.AriaOpenPreferences,
                AriaPrivacy: e.AriaPrivacy,
                CenterRounded: e.CenterRounded,
                Flat: e.Flat,
                FloatingFlat: e.FloatingFlat,
                FloatingRounded: e.FloatingRounded,
                FloatingRoundedCorner: e.FloatingRoundedCorner,
                FloatingRoundedIcon: e.FloatingRoundedIcon,
                VendorLevelOptOut: e.IsIabEnabled,
                AboutCookiesText: e.AboutCookiesText,
                AboutLink: e.AboutLink,
                AboutText: e.AboutText,
                ActiveText: e.ActiveText,
                AddLinksToCookiepedia: e.AddLinksToCookiepedia,
                AdvancedAnalyticsCategory: e.AdvancedAnalyticsCategory || "",
                AlertAllowCookiesText: e.AlertAllowCookiesText,
                AlertCloseText: e.AlertCloseText,
                AlertLayout: e.AlertLayout,
                AlertMoreInfoText: e.AlertMoreInfoText,
                AlertNoticeText: e.AlertNoticeText,
                AllowAllText: e.PreferenceCenterConfirmText,
                AlwaysActiveText: e.AlwaysActiveText,
                BannerAdditionalDescPlacement: e.BannerAdditionalDescPlacement,
                BannerAdditionalDescription: e.BannerAdditionalDescription,
                BannerCloseButtonText: e.BannerCloseButtonText,
                BannerDPDDescription: e.BannerDPDDescription || [],
                BannerDPDDescriptionFormat: e.BannerDPDDescriptionFormat || "",
                BannerDPDTitle: e.BannerDPDTitle || "",
                BannerFeatureDescription: e.BannerFeatureDescription,
                BannerFeatureTitle: e.BannerFeatureTitle,
                BannerIABPartnersLink: e.BannerIABPartnersLink,
                BannerInformationDescription: e.BannerInformationDescription,
                BannerInformationTitle: e.BannerInformationTitle,
                BannerNonIABVendorListText: e.BannerNonIABVendorListText,
                BannerPosition: e.BannerPosition,
                BannerPurposeDescription: e.BannerPurposeDescription,
                BannerPurposeTitle: e.BannerPurposeTitle,
                BannerRejectAllButtonText: e.BannerRejectAllButtonText,
                BannerRelativeFontSizesToggle: e.BannerRelativeFontSizesToggle,
                BannerSettingsButtonDisplayLink: e.BannerSettingsButtonDisplayLink,
                BannerShowRejectAllButton: e.BannerShowRejectAllButton,
                BannerTitle: e.BannerTitle,
                BCloseButtonType: e.BCloseButtonType,
                BContinueText: e.BContinueText,
                BCookiePolicyLinkScreenReader: e.BCookiePolicyLinkScreenReader,
                BImprintLinkScreenReader: e.BImprintLinkScreenReader,
                BInitialFocus: e.BInitialFocus,
                BInitialFocusLinkAndButton: e.BInitialFocusLinkAndButton,
                BRejectConsentType: e.BRejectConsentType,
                BSaveBtnTxt: e.BSaveBtnText,
                BShowImprintLink: e.BShowImprintLink,
                BShowPolicyLink: e.BShowPolicyLink,
                BShowSaveBtn: e.BShowSaveBtn,
                CategoriesText: e.CategoriesText || "Categories",
                cctId: e.cctId,
                ChoicesBanner: e.ChoicesBanner,
                CloseShouldAcceptAllCookies: e.CloseShouldAcceptAllCookies,
                CloseText: e.CloseText,
                ConfirmText: e.ConfirmText,
                ConsentModel: {
                    Name: e.ConsentModel
                },
                CookieListDescription: e.CookieListDescription,
                CookieListTitle: e.CookieListTitle,
                CookieSettingButtonText: e.CookieSettingButtonText,
                CookiesText: e.CookiesText || "Cookies",
                CookiesUsedText: e.CookiesUsedText,
                CustomJs: e.CustomJs,
                firstPartyTxt: e.CookieFirstPartyText,
                FooterDescriptionText: e.FooterDescriptionText,
                ForceConsent: e.ForceConsent,
                GeneralVendors: e.GeneralVendors,
                GeneralVendorsEnabled: e.PCenterUseGeneralVendorsToggle,
                GenVenOptOut: e.PCenterAllowVendorOptout,
                GlobalRestrictionEnabled: e.GlobalRestrictionEnabled,
                GlobalRestrictions: e.GlobalRestrictions,
                GoogleConsent: {
                    GCAdStorage: e.GCAdStorage,
                    GCAnalyticsStorage: e.GCAnalyticsStorage,
                    GCEnable: e.GCEnable,
                    GCFunctionalityStorage: e.GCFunctionalityStorage,
                    GCPersonalizationStorage: e.GCPersonalizationStorage,
                    GCRedactEnable: e.GCRedactEnable,
                    GCSecurityStorage: e.GCSecurityStorage,
                    GCWaitTime: e.GCWaitTime
                },
                GroupGenVenListLabel: e.PCenterGeneralVendorThirdPartyCookiesText,
                Groups: this.populateGroups(e.Groups, e),
                HideToolbarCookieList: e.HideToolbarCookieList,
                IabType: e.IabType,
                InactiveText: e.InactiveText,
                IsConsentLoggingEnabled: e.IsConsentLoggingEnabled,
                IsIabEnabled: e.IsIabEnabled,
                IsIabThirdPartyCookieEnabled: e.IsIabThirdPartyCookieEnabled,
                IsLifespanEnabled: e.IsLifespanEnabled,
                Language: e.Language,
                LastReconsentDate: e.LastReconsentDate,
                LfSpanSecs: e.PCLifeSpanSecs,
                LfSpnWk: e.PCLifeSpanWk,
                LfSpnWks: e.PCLifeSpanWks,
                LfSpnYr: e.PCLifeSpanYr,
                LfSpnYrs: e.PCLifeSpanYrs,
                LifespanDurationText: e.LifespanDurationText,
                LifespanText: e.LifespanText || "Lifespan",
                LifespanTypeText: e.LifespanTypeText || "Session",
                MainInfoText: e.MainInfoText,
                MainText: e.MainText,
                ManagePreferenceText: e.PreferenceCenterManagePreferencesText,
                NewVendorsInactiveEnabled: e.NewVendorsInactiveEnabled,
                NewWinTxt: e.PreferenceCenterMoreInfoScreenReader,
                NextPageAcceptAllCookies: e.NextPageAcceptAllCookies,
                NextPageCloseBanner: e.NextPageCloseBanner,
                NoBanner: e.NoBanner,
                OnClickAcceptAllCookies: e.OnClickAcceptAllCookies,
                OnClickCloseBanner: e.OnClickCloseBanner,
                OverriddenVendors: e.OverriddenVendors,
                OverridenGoogleVendors: e.OverridenGoogleVendors,
                PCAccordionStyle: W.Caret,
                PCActiveText: e.PCActiveText,
                PCCloseButtonType: e.PCCloseButtonType,
                PCContinueText: e.PCContinueText,
                PCCookiePolicyLinkScreenReader: e.PCCookiePolicyLinkScreenReader,
                PCCookiePolicyText: e.PCCookiePolicyText,
                PCenterAllowAllConsentText: e.PCenterAllowAllConsentText,
                PCenterApplyFiltersText: e.PCenterApplyFiltersText,
                PCenterBackText: e.PCenterBackText,
                PCenterCancelFiltersText: e.PCenterCancelFiltersText,
                PCenterClearFiltersText: e.PCenterClearFiltersText,
                PCenterConsentText: e.PCenterConsentText || "Consent",
                PCenterCookieListFilterAria: e.PCenterCookieListFilterAria || "Filter",
                PCenterCookieListSearch: e.PCenterCookieListSearch || "Search",
                PCenterCookieSearchAriaLabel: e.PCenterCookieSearchAriaLabel || "Cookie list search",
                PCenterCookiesListText: e.PCenterCookiesListText,
                PCenterEnableAccordion: e.PCenterEnableAccordion,
                PCenterFilterAppliedAria: e.PCenterFilterAppliedAria || "Applied",
                PCenterFilterClearedAria: e.PCenterFilterClearedAria || "Filters Cleared",
                PCenterFilterText: e.PCenterFilterText,
                PCenterGeneralVendorsText: e.PCenterGeneralVendorsText,
                PCenterLegIntColumnHeader: e.PCenterLegIntColumnHeader || "Legitimate Interest",
                PCenterLegitInterestText: e.PCenterLegitInterestText || "Legitimate Interest",
                PCenterRejectAllButtonText: e.PCenterRejectAllButtonText,
                PCenterSelectAllVendorsText: e.PCenterSelectAllVendorsText,
                PCenterShowRejectAllButton: e.PCenterShowRejectAllButton,
                PCenterUserIdDescriptionText: e.PCenterUserIdDescriptionText,
                PCenterUserIdNotYetConsentedText: e.PCenterUserIdNotYetConsentedText,
                PCenterUserIdTimestampTitleText: e.PCenterUserIdTimestampTitleText,
                PCenterUserIdTitleText: e.PCenterUserIdTitleText,
                PCenterVendorListDescText: e.PCenterVendorListDescText,
                PCenterVendorListDisclosure: e.PCenterVendorListDisclosure,
                PCenterVendorListFilterAria: e.PCenterVendorListFilterAria || "Filter",
                PCenterVendorListLifespan: e.PCenterVendorListLifespan,
                PCenterVendorListLifespanDay: e.PCenterVendorListLifespanDay,
                PCenterVendorListLifespanDays: e.PCenterVendorListLifespanDays,
                PCenterVendorListLifespanMonth: e.PCenterVendorListLifespanMonth,
                PCenterVendorListLifespanMonths: e.PCenterVendorListLifespanMonths,
                PCenterVendorListNonCookieUsage: e.PCenterVendorListNonCookieUsage,
                PCenterVendorListSearch: e.PCenterVendorListSearch || "Search",
                PCenterVendorListStorageDomain: e.PCenterVendorListStorageDomain,
                PCenterVendorListStorageIdentifier: e.PCenterVendorListStorageIdentifier,
                PCenterVendorListStoragePurposes: e.PCenterVendorListStoragePurposes,
                PCenterVendorListStorageType: e.PCenterVendorListStorageType,
                PCenterVendorSearchAriaLabel: e.PCenterVendorSearchAriaLabel || "Vendor list search",
                PCenterVendorsListText: e.PCenterVendorsListText,
                PCenterViewPrivacyPolicyText: e.PCenterViewPrivacyPolicyText,
                PCFirstPartyCookieListText: e.PCFirstPartyCookieListText || "First Party Cookies",
                PCGoogleVendorsText: e.PCGoogleVendorsText,
                PCGrpDescLinkPosition: e.PCGrpDescLinkPosition,
                PCGrpDescType: e.PCGrpDescType,
                PCGVenPolicyTxt: e.PCGeneralVendorsPolicyText,
                PCIABVendorsText: e.PCIABVendorsText,
                PCInactiveText: e.PCInactiveText,
                PCLogoAria: e.PCLogoScreenReader,
                PCOpensCookiesDetailsAlert: e.PCOpensCookiesDetailsAlert,
                PCenterVendorListScreenReader: e.PCenterVendorListScreenReader,
                PCOpensVendorDetailsAlert: e.PCOpensVendorDetailsAlert,
                PCShowConsentLabels: !(!e.Tab || !e.PCTemplateUpgrade) & amp; & amp;e.PCShowConsentLabels,
                PCShowPersistentCookiesHoverButton: e.PCShowPersistentCookiesHoverButton || !1,
                PCTemplateUpgrade: e.PCTemplateUpgrade,
                PCVendorFullLegalText: e.PCVendorFullLegalText,
                PCViewCookiesText: e.PCViewCookiesText,
                PCLayout: {
                    Center: e.Center,
                    List: e.List,
                    Panel: e.Panel,
                    Popup: e.Popup,
                    Tab: e.Tab
                },
                PCenterVendorListLinkText: e.PCenterVendorListLinkText,
                PCenterVendorListLinkAriaLabel: e.PCenterVendorListLinkAriaLabel,
                PreferenceCenterPosition: e.PreferenceCenterPosition,
                Publisher: e.publisher,
                PublisherCC: e.PublisherCC,
                ReconsentFrequencyDays: e.ReconsentFrequencyDays,
                ScrollAcceptAllCookies: e.ScrollAcceptAllCookies,
                ScrollCloseBanner: e.ScrollCloseBanner,
                ShowAlertNotice: e.ShowAlertNotice,
                showBannerCloseButton: e.showBannerCloseButton,
                ShowPreferenceCenterCloseButton: e.ShowPreferenceCenterCloseButton,
                ThirdPartyCookieListText: e.ThirdPartyCookieListText,
                thirdPartyTxt: e.CookieThirdPartyText,
                UseGoogleVendors: this.canUseGoogleVendors(e.PCTemplateUpgrade),
                VendorConsentModel: e.VendorConsentModel,
                VendorListText: e.VendorListText,
                Vendors: e.Vendors,
                PCCategoryStyle: e.PCCategoryStyle,
                VendorServiceConfig: {
                    PCVSOptOut: e.PCVSOptOut,
                    PCVSEnable: e.PCVSEnable,
                    PCVSAlwaysActive: e.PCVSAlwaysActive,
                    PCVSExpandCategory: e.PCVSExpandCategory,
                    PCVSExpandGroup: e.PCVSExpandGroup,
                    PCVSCategoryView: e.PCVSCategoryView,
                    PCVSNameText: e.PCVSNameText,
                    PCVSAllowAllText: e.PCVSAllowAllText,
                    PCVSListTitle: e.PCVSListTitle,
                    PCVSParentCompanyText: e.PCVSParentCompanyText,
                    PCVSAddressText: e.PCVSAddressText,
                    PCVSDefaultCategoryText: e.PCVSDefaultCategoryText,
                    PCVSDefaultDescriptionText: e.PCVSDefaultDescriptionText,
                    PCVSDPOEmailText: e.PCVSDPOEmailText,
                    PCVSDPOLinkText: e.PCVSDPOLinkText,
                    PCVSPrivacyPolicyLinkText: e.PCVSPrivacyPolicyLinkText,
                    PCVSCookiePolicyLinkText: e.PCVSCookiePolicyLinkText,
                    PCVSOptOutLinkText: e.PCVSOptOutLinkText,
                    PCVSLegalBasisText: e.PCVSLegalBasisText
                }
            };
            e.PCTemplateUpgrade & amp; & amp;
            (e.Center || e.Panel) & amp; & amp;
            e.PCAccordionStyle === W.PlusMinus & amp; & amp;
            (t.PCAccordionStyle = e.PCAccordionStyle), t.PCenterEnableAccordion = e.PCAccordionStyle !== W.NoAccordion, this.legIntSettings = e.LegIntSettings || {}, void 0 === this.legIntSettings.PAllowLI & amp; & amp;
            (this.legIntSettings.PAllowLI = !0), Bt.moduleInitializer.MobileSDK || (this.pagePushedDown = e.BannerPushesDownPage), Rt = r(r({}, Rt), t)
        }, Ht.prototype.commonDataMapper = function(e) {
            var t = {
                iabThirdPartyConsentUrl: e.IabThirdPartyCookieUrl,
                optanonHideAcceptButton: e.OptanonHideAcceptButton,
                optanonHideCookieSettingButton: e.OptanonHideCookieSettingButton,
                optanonStyle: e.OptanonStyle,
                optanonStaticContentLocation: e.OptanonStaticContentLocation,
                bannerCustomCSS: e.BannerCustomCSS.replace(/\\n/g, ""),
                pcCustomCSS: e.PCCustomCSS.replace(/\\n/g, ""),
                textColor: e.TextColor,
                buttonColor: e.ButtonColor,
                buttonTextColor: e.ButtonTextColor,
                bannerMPButtonColor: e.BannerMPButtonColor,
                bannerMPButtonTextColor: e.BannerMPButtonTextColor,
                backgroundColor: e.BackgroundColor,
                bannerAccordionBackgroundColor: e.BannerAccordionBackgroundColor,
                BContinueColor: e.BContinueColor,
                PCContinueColor: e.PCContinueColor,
                pcTextColor: e.PcTextColor,
                pcButtonColor: e.PcButtonColor,
                pcButtonTextColor: e.PcButtonTextColor,
                pcAccordionBackgroundColor: e.PcAccordionBackgroundColor,
                pcLinksTextColor: e.PcLinksTextColor,
                bannerLinksTextColor: e.BannerLinksTextColor,
                pcEnableToggles: e.PcEnableToggles,
                pcBackgroundColor: e.PcBackgroundColor,
                pcMenuColor: e.PcMenuColor,
                pcMenuHighLightColor: e.PcMenuHighLightColor,
                legacyBannerLayout: e.LegacyBannerLayout,
                optanonLogo: e.OptanonLogo,
                oneTrustFtrLogo: e.OneTrustFooterLogo,
                optanonCookieDomain: e.OptanonCookieDomain,
                cookiePersistentLogo: e.CookiePersistentLogo,
                optanonGroupIdPerformanceCookies: e.OptanonGroupIdPerformanceCookies,
                optanonGroupIdFunctionalityCookies: e.OptanonGroupIdFunctionalityCookies,
                optanonGroupIdTargetingCookies: e.OptanonGroupIdTargetingCookies,
                optanonGroupIdSocialCookies: e.OptanonGroupIdSocialCookies,
                optanonShowSubGroupCookies: e.ShowSubGroupCookies,
                useRTL: e.UseRTL,
                showBannerCookieSettings: e.ShowBannerCookieSettings,
                showBannerAcceptButton: e.ShowBannerAcceptButton,
                showCookieList: e.ShowCookieList,
                allowHostOptOut: e.AllowHostOptOut,
                CookiesV2NewCookiePolicy: e.CookiesV2NewCookiePolicy,
                cookieListTitleColor: e.CookieListTitleColor,
                cookieListGroupNameColor: e.CookieListGroupNameColor,
                cookieListTableHeaderColor: e.CookieListTableHeaderColor,
                CookieListTableHeaderBackgroundColor: e.CookieListTableHeaderBackgroundColor,
                cookieListPrimaryColor: e.CookieListPrimaryColor,
                cookieListCustomCss: e.CookieListCustomCss,
                pcShowCookieHost: e.PCShowCookieHost,
                pcShowCookieDuration: e.PCShowCookieDuration,
                pcShowCookieType: e.PCShowCookieType,
                pcShowCookieCategory: e.PCShowCookieCategory,
                pcShowCookieDescription: e.PCShowCookieDescription,
                ConsentIntegration: e.ConsentIntegration,
                ConsentPurposesText: e.BConsentPurposesText || "Consent Purposes",
                FeaturesText: e.BFeaturesText || "Features",
                LegitimateInterestPurposesText: e.BLegitimateInterestPurposesText || "Legitimate Interest Purposes",
                ConsentText: e.BConsentText || "Consent",
                LegitInterestText: e.BLegitInterestText || "Legit. Interest",
                pcDialogClose: e.PCDialogClose || "dialog closed",
                pCFooterLogoUrl: e.PCFooterLogoUrl,
                SpecialFeaturesText: e.BSpecialFeaturesText || "Special Features",
                SpecialPurposesText: e.BSpecialPurposesText || "Special Purposes",
                pcCListName: e.PCCListName || "Name",
                pcCListHost: e.PCCListHost || "Host",
                pcCListDuration: e.PCCListDuration || "Duration",
                pcCListType: e.PCCListType || "Type",
                pcCListCategory: e.PCCListCategory || "Category",
                pcCListDescription: e.PCCListDescription || "Description",
                IabLegalTextUrl: e.IabLegalTextUrl,
                pcLegIntButtonColor: e.PcLegIntButtonColor,
                pcLegIntButtonTextColor: e.PcLegIntButtonTextColor,
                PCenterExpandToViewText: e.PCenterExpandToViewText,
                BCategoryContainerColor: e.BCategoryContainerColor,
                BCategoryStyleColor: e.BCategoryStyleColor,
                BLineBreakColor: e.BLineBreakColor,
                BSaveBtnColor: e.BSaveBtnColor,
                BCategoryStyle: e.BCategoryStyle,
                BAnimation: e.BAnimation,
                BFocusBorderColor: e.BFocusBorderColor,
                PCFocusBorderColor: e.PCFocusBorderColor
            };
            Rt = r(r({}, Rt), t)
        }, Ht.prototype.setPublicDomainData = function(r) {
            this.pubDomainData = {
                AboutCookiesText: r.AboutCookiesText,
                AboutLink: r.AboutLink,
                AboutText: r.AboutText,
                ActiveText: r.ActiveText,
                AddLinksToCookiepedia: r.AddLinksToCookiepedia,
                AlertAllowCookiesText: r.AlertAllowCookiesText,
                AlertCloseText: r.AlertCloseText,
                AlertLayout: r.AlertLayout,
                AlertMoreInfoText: r.AlertMoreInfoText,
                AlertNoticeText: r.AlertNoticeText,
                AllowAllText: r.PreferenceCenterConfirmText,
                AlwaysActiveText: r.AlwaysActiveText,
                BAnimation: r.BAnimation,
                BannerCloseButtonText: r.BannerCloseButtonText,
                BannerDPDDescription: r.BannerDPDDescription || [],
                BannerDPDDescriptionFormat: r.BannerDPDDescriptionFormat || "",
                BannerDPDTitle: r.BannerDPDTitle || "",
                BannerFeatureDescription: r.BannerFeatureDescription,
                BannerFeatureTitle: r.BannerFeatureTitle,
                BannerIABPartnersLink: r.BannerIABPartnersLink,
                BannerInformationDescription: r.BannerInformationDescription,
                BannerInformationTitle: r.BannerInformationTitle,
                BannerPosition: r.BannerPosition,
                BannerPurposeDescription: r.BannerPurposeDescription,
                BannerPurposeTitle: r.BannerPurposeTitle,
                BannerRejectAllButtonText: r.BannerRejectAllButtonText,
                BannerRelativeFontSizesToggle: r.BannerRelativeFontSizesToggle,
                BannerSettingsButtonDisplayLink: r.BannerSettingsButtonDisplayLink,
                BannerShowRejectAllButton: r.BannerShowRejectAllButton,
                BannerTitle: r.BannerTitle,
                BCategoryContainerColor: r.BCategoryContainerColor,
                BCategoryStyle: r.BCategoryStyle,
                BCategoryStyleColor: r.BCategoryStyleColor,
                BCloseButtonType: r.BCloseButtonType,
                BContinueText: r.BContinueText,
                BInitialFocus: r.BInitialFocus,
                BInitialFocusLinkAndButton: r.BInitialFocusLinkAndButton,
                BLineBreakColor: r.BLineBreakColor,
                BRejectConsentType: r.BRejectConsentType,
                BSaveBtnColor: r.BSaveBtnColor,
                BSaveBtnTxt: r.BSaveBtnText,
                BShowSaveBtn: r.BShowSaveBtn,
                CategoriesText: r.CategoriesText,
                cctId: r.cctId,
                ChoicesBanner: r.ChoicesBanner,
                CloseShouldAcceptAllCookies: r.CloseShouldAcceptAllCookies,
                CloseText: r.CloseText,
                ConfirmText: r.ConfirmText,
                ConsentIntegrationData: null,
                ConsentModel: {
                    Name: r.ConsentModel
                },
                CookieListDescription: r.CookieListDescription,
                CookieListTitle: r.CookieListTitle,
                CookieSettingButtonText: r.CookieSettingButtonText,
                CookiesText: r.CookiesText,
                CookiesUsedText: r.CookiesUsedText,
                CustomJs: r.CustomJs,
                Domain: Bt.moduleInitializer.Domain,
                FooterDescriptionText: r.FooterDescriptionText,
                ForceConsent: r.ForceConsent,
                GeneralVendors: r.GeneralVendors,
                GoogleConsent: {
                    GCAdStorage: r.GCAdStorage,
                    GCAnalyticsStorage: r.GCAnalyticsStorage,
                    GCEnable: r.GCEnable,
                    GCFunctionalityStorage: r.GCFunctionalityStorage,
                    GCPersonalizationStorage: r.GCPersonalizationStorage,
                    GCRedactEnable: r.GCRedactEnable,
                    GCSecurityStorage: r.GCSecurityStorage,
                    GCWaitTime: r.GCWaitTime
                },
                Groups: null,
                HideToolbarCookieList: r.HideToolbarCookieList,
                IabType: r.IabType,
                InactiveText: r.InactiveText,
                IsBannerLoaded: !1,
                IsConsentLoggingEnabled: r.IsConsentLoggingEnabled,
                IsIABEnabled: r.IsIabEnabled,
                IsIabThirdPartyCookieEnabled: r.IsIabThirdPartyCookieEnabled,
                IsLifespanEnabled: r.IsLifespanEnabled,
                Language: r.Language,
                LastReconsentDate: r.LastReconsentDate,
                LifespanDurationText: r.LifespanDurationText,
                LifespanText: r.LifespanText,
                LifespanTypeText: r.LifespanTypeText,
                MainInfoText: r.MainInfoText,
                MainText: r.MainText,
                ManagePreferenceText: r.PreferenceCenterManagePreferencesText,
                NextPageAcceptAllCookies: r.NextPageAcceptAllCookies,
                NextPageCloseBanner: r.NextPageCloseBanner,
                NoBanner: r.NoBanner,
                OnClickAcceptAllCookies: r.OnClickAcceptAllCookies,
                OnClickCloseBanner: r.OnClickCloseBanner,
                OverridenGoogleVendors: r.OverridenGoogleVendors,
                PCAccordionStyle: W.Caret,
                PCCloseButtonType: r.PCCloseButtonType,
                PCContinueText: r.PCContinueText,
                PCenterAllowAllConsentText: r.PCenterAllowAllConsentText,
                PCenterApplyFiltersText: r.PCenterApplyFiltersText,
                PCenterBackText: r.PCenterBackText,
                PCenterCancelFiltersText: r.PCenterCancelFiltersText,
                PCenterClearFiltersText: r.PCenterClearFiltersText,
                PCenterCookieSearchAriaLabel: r.PCenterCookieSearchAriaLabel || "Cookie list search",
                PCenterCookiesListText: r.PCenterCookiesListText,
                PCenterEnableAccordion: r.PCenterEnableAccordion,
                PCenterExpandToViewText: r.PCenterExpandToViewText,
                PCenterFilterAppliedAria: r.PCenterFilterAppliedAria || "Applied",
                PCenterFilterClearedAria: r.PCenterFilterClearedAria || "Filters Cleared",
                PCenterFilterText: r.PCenterFilterText,
                PCenterRejectAllButtonText: r.PCenterRejectAllButtonText,
                PCenterSelectAllVendorsText: r.PCenterSelectAllVendorsText,
                PCenterShowRejectAllButton: r.PCenterShowRejectAllButton,
                PCenterUserIdDescriptionText: r.PCenterUserIdDescriptionText,
                PCenterUserIdNotYetConsentedText: r.PCenterUserIdNotYetConsentedText,
                PCenterUserIdTimestampTitleText: r.PCenterUserIdTimestampTitleText,
                PCenterUserIdTitleText: r.PCenterUserIdTitleText,
                PCenterVendorListDescText: r.PCenterVendorListDescText,
                PCenterVendorSearchAriaLabel: r.PCenterVendorSearchAriaLabel || "Vendor list search",
                PCenterVendorsListText: r.PCenterVendorsListText,
                PCenterViewPrivacyPolicyText: r.PCenterViewPrivacyPolicyText,
                PCFirstPartyCookieListText: r.PCFirstPartyCookieListText,
                PCGoogleVendorsText: r.PCGoogleVendorsText,
                PCGrpDescLinkPosition: r.PCGrpDescLinkPosition,
                PCGrpDescType: r.PCGrpDescType,
                PCIABVendorsText: r.PCIABVendorsText,
                PCLogoAria: r.PCLogoScreenReader,
                PCOpensCookiesDetailsAlert: r.PCOpensCookiesDetailsAlert,
                PCenterVendorListScreenReader: r.PCenterVendorListScreenReader,
                PCOpensVendorDetailsAlert: r.PCOpensVendorDetailsAlert,
                PCShowPersistentCookiesHoverButton: r.PCShowPersistentCookiesHoverButton,
                PCTemplateUpgrade: r.PCTemplateUpgrade,
                PCVendorFullLegalText: r.PCVendorFullLegalText,
                PCViewCookiesText: r.PCViewCookiesText,
                PCLayout: {
                    Center: r.Center,
                    List: r.List,
                    Panel: r.Panel,
                    Popup: r.Popup,
                    Tab: r.Tab
                },
                PCenterVendorListLinkText: r.PCenterVendorListLinkText,
                PCenterVendorListLinkAriaLabel: r.PCenterVendorListLinkAriaLabel,
                PreferenceCenterPosition: r.PreferenceCenterPosition,
                ScrollAcceptAllCookies: r.ScrollAcceptAllCookies,
                ScrollCloseBanner: r.ScrollCloseBanner,
                ShowAlertNotice: r.ShowAlertNotice,
                showBannerCloseButton: r.showBannerCloseButton,
                ShowPreferenceCenterCloseButton: r.ShowPreferenceCenterCloseButton,
                ThirdPartyCookieListText: r.ThirdPartyCookieListText,
                UseGoogleVendors: this.canUseGoogleVendors(r.PCTemplateUpgrade),
                VendorConsentModel: r.VendorConsentModel,
                VendorLevelOptOut: r.IsIabEnabled,
                VendorListText: r.VendorListText
            }, r.PCTemplateUpgrade & amp; & amp;
            (r.Center || r.Panel) & amp; & amp;
            r.PCAccordionStyle !== W.NoAccordion & amp; & amp;
            (this.pubDomainData.PCAccordionStyle = r.PCAccordionStyle), this.pubDomainData.PCenterEnableAccordion = r.PCAccordionStyle !== W.NoAccordion;
            var i = [];
            r.Groups.forEach(function(e) {
                var t, o;
                if (r.IsIabEnabled || !e.IsIabPurpose) {
                    e.Cookies = JSON.parse(JSON.stringify(e.FirstPartyCookies));
                    var n = null === (o = e.Hosts) || void 0 === o ? void 0 : o.reduce(function(e, t) {
                        return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
                    }, []);
                    (t = e.Cookies).push.apply(t, n), i.push(e)
                }
            }), this.pubDomainData.Groups = i
        }, Ht.prototype.setBannerScriptElement = function(e) {
            this.bannerScriptElement = e, this.setDomainElementAttributes()
        }, Ht.prototype.setGCMcallback = function() {
            window.otEventListeners & amp; & amp;
            window.otEventListeners.length & amp; & amp;
            window.otEventListeners.forEach(function(e) {
                e & amp; & amp;
                "consent.changed" === e.event & amp; & amp;
                (Ft.gcmUpdateCallback = e.listener)
            })
        }, Ht.prototype.setDomainElementAttributes = function() {
            this.bannerScriptElement & amp; & amp;
            (this.bannerScriptElement.hasAttribute("data-document-language") & amp; & amp; this.setUseDocumentLanguage("true" === this.bannerScriptElement.getAttribute("data-document-language")), this.bannerScriptElement.hasAttribute("data-ignore-ga") & amp; & amp;
                (this.ignoreGoogleAnlyticsCall = "true" === this.bannerScriptElement.getAttribute("data-ignore-ga")), this.bannerScriptElement.hasAttribute("data-ignore-html") & amp; & amp;
                (this.ignoreInjectingHtmlCss = "true" === this.bannerScriptElement.getAttribute("data-ignore-html")))
        }, Ht.prototype.setUseDocumentLanguage = function(e) {
            this.useDocumentLanguage = e
        }, Ht.prototype.setPcName = function() {
            var e = Rt.PCLayout;
            e.Center ? this.pcName = st : e.Panel ? this.pcName = lt : e.Popup ? this.pcName = ct : e.List ? this.pcName = at : e.Tab & amp; & amp;
            (this.pcName = dt)
        }, Ht.prototype.setBannerName = function() {
            Rt.Flat ? this.bannerName = Ze : Rt.FloatingRoundedCorner ? this.bannerName = et : Rt.FloatingFlat ? this.bannerName = tt : Rt.FloatingRounded ? this.bannerName = nt : Rt.FloatingRoundedIcon ? this.bannerName = ot : Rt.CenterRounded ? this.bannerName = $e : Rt.ChoicesBanner ? this.bannerName = rt : Rt.NoBanner & amp; & amp;
            (this.bannerName = it)
        }, Ht.prototype.populateGPCSignal = function() {
            var e = xt.readCookieParam(Oe.OPTANON_CONSENT, Ge),
                t = this.gpcForAGrpEnabled & amp; & amp;
            this.gpcEnabled ? "1" : "0";
            this.gpcValueChanged = e ? e != t : this.gpcForAGrpEnabled, this.gpcForAGrpEnabled & amp; & amp;
            xt.writeCookieParam(Oe.OPTANON_CONSENT, Ge, t)
        }, Ht.prototype.initGCM = function() {
            var o = [];
            Object.keys(this.rule.States).forEach(function(t) {
                Ft.rule.States[t].forEach(function(e) {
                    o.push((t + "-" + e).toUpperCase())
                })
            });
            var e = Ft.rule.Countries.map(function(e) {
                return e.toUpperCase()
            });
            Ft.gcmCountries = e.concat(o)
        }, Ht);

        function Ht() {
            var t = this;
            this.DNTEnabled = "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack, this.gpcEnabled = !1, this.gpcForAGrpEnabled = !1, this.pagePushedDown = !1, this.iabGroups = {
                purposes: {},
                legIntPurposes: {},
                specialPurposes: {},
                features: {},
                specialFeatures: {}
            }, this.iabType = null, this.grpContainLegalOptOut = !1, this.purposeOneTreatment = !1, this.ignoreInjectingHtmlCss = !1, this.ignoreGoogleAnlyticsCall = !1, this.mobileOnlineURL = [], this.iabGrpIdMap = {}, this.iabGrps = [], this.consentableGrps = [], this.consentableIabGrps = [], this.domainGrps = {}, this.thirdPartyiFrameLoaded = !1, this.thirdPartyiFrameResolve = null, this.thirdPartyiFramePromise = new Promise(function(e) {
                t.thirdPartyiFrameResolve = e
            }), this.isOptInMode = !1, this.isSoftOptInMode = !1, this.gpcValueChanged = !1, this.conditionalLogicEnabled = !1, this.allConditionsFailed = !1, this.canUseConditionalLogic = !1, this.gtmUpdatedinStub = !1, this.gcmDevIdSet = !1, this.purposeOneGrpId = "IABV2_1"
        }
        var Ft, Rt = {};

        function qt() {
            this.otSDKVersion = "6.36.0", this.isAMP = !1, this.ampData = {}, this.otCookieData = window.OneTrust & amp; & amp;
            window.OneTrust.otCookieData || [], this.syncRequired = !1, this.isIabSynced = !1, this.isGacSynced = !1, this.grpsSynced = [], this.syncedValidGrp = !1, this.groupsConsent = [], this.initialGroupsConsent = [], this.hostsConsent = [], this.initialHostConsent = [], this.genVendorsConsent = {}, this.vsConsent = new Map, this.initialGenVendorsConsent = {}, this.vendors = {
                list: [],
                searchParam: "",
                vendorTemplate: null,
                selectedVendors: [],
                selectedPurpose: [],
                selectedLegInt: [],
                selectedLegIntVendors: [],
                selectedSpecialFeatures: []
            }, this.initialVendors = {
                list: [],
                searchParam: "",
                vendorTemplate: null,
                selectedVendors: [],
                selectedPurpose: [],
                selectedLegInt: [],
                selectedLegIntVendors: [],
                selectedSpecialFeatures: []
            }, this.oneTrustIABConsent = {
                purpose: [],
                legimateInterest: [],
                features: [],
                specialFeatures: [],
                specialPurposes: [],
                vendors: [],
                legIntVendors: [],
                vendorList: null,
                IABCookieValue: ""
            }, this.initialOneTrustIABConsent = {
                purpose: [],
                legimateInterest: [],
                features: [],
                specialFeatures: [],
                specialPurposes: [],
                vendors: [],
                legIntVendors: [],
                vendorList: null,
                IABCookieValue: ""
            }, this.addtlVendors = {
                vendorConsent: [],
                vendorSelected: {}
            }, this.initialAddtlVendors = {
                vendorConsent: [],
                vendorSelected: {}
            }, this.addtlConsentVersion = "1~", this.initialAddtlVendorsList = {}, this.isAddtlConsent = !1, this.currentGlobalFilteredList = [], this.filterByIABCategories = [], this.filterByCategories = [], this.hosts = {
                hostTemplate: null,
                hostCookieTemplate: null
            }, this.generalVendors = {
                gvTemplate: null,
                gvCookieTemplate: null
            }, this.oneTrustAlwaysActiveHosts = [], this.alwaysActiveGenVendors = [], this.softOptInGenVendors = [], this.optInGenVendors = [], this.optanonHostList = [], this.srcExecGrps = [], this.htmlExecGrps = [], this.srcExecGrpsTemp = [], this.htmlExecGrpsTemp = [], this.isPCVisible = !1, this.dataGroupState = [], this.userLocation = {
                country: "",
                state: ""
            }, this.vendorsSetting = {}, this.dsParams = {}, this.isV2Stub = !1, this.fireOnetrustGrp = !1, this.showVendorService = !1, this.showGeneralVendors = !1, this.genVenOptOutEnabled = !1, this.vsIsActiveAndOptOut = !1, this.bAsset = {}, this.pcAsset = {}, this.csBtnAsset = {}, this.cStyles = {}, this.vendorDomInit = !1, this.genVendorDomInit = !1, this.syncNtfyContent = {}, this.ntfyRequired = !1, this.skipAddingHTML = !1, this.bnrAnimationInProg = !1, this.isPreview = !1, this.geoFromUrl = "", this.hideBanner = !1, this.setAttributePolyfillIsActive = !1, this.storageBaseURL = "", this.isKeyboardUser = !1
        }
        var Mt = new(qt.prototype.getVendorsInDomain = function() {
                var e, t;
                if (!Mt._vendorsInDomain) {
                    for (var o = new Map, n = 0, r = null != (e = Rt.Groups) ? e : []; n & lt; r.length; n++)
                        for (var i = r[n], s = 0, a = null != (t = i.VendorServices) ? t : []; s & lt; a.length; s++) {
                            var l = a[s],
                                c = Object.assign({}, i);
                            delete c.VendorServices, l.groupRef = c, o.set(l.CustomVendorServiceId, l)
                        }
                    Mt._vendorsInDomain = o
                }
                return Mt._vendorsInDomain
            }, qt.prototype.clearVendorsInDomain = function() {
                Mt._vendorsInDomain = null
            }, qt),
            Ut = (jt.insertAfter = function(e, t) {
                t.parentNode.insertBefore(e, t.nextSibling)
            }, jt.insertBefore = function(e, t) {
                t.parentNode.insertBefore(e, t)
            }, jt.inArray = function(e, t) {
                return t.indexOf(e)
            }, jt.ajax = function(e) {
                var t, o, n, r, i, s, a = null,
                    l = new XMLHttpRequest;
                t = e.type, o = e.url, e.dataType, n = e.contentType, r = e.data, i = e.success, a = e.error, s = e.sync, l.open(t, o, !s), l.setRequestHeader("Content-Type", n), l.onload = function() {
                    if (200 & lt; = this.status & amp; & amp; this.status & lt; 400) {
                        var e = JSON.parse(this.responseText);
                        i(e)
                    } else a({
                        message: "Error Loading Data",
                        statusCode: this.status
                    })
                }, l.onerror = function(e) {
                    a(e)
                }, "post" === t.toLowerCase() || "put" === t.toLowerCase() ? l.send(r) : l.send()
            }, jt.prevNextHelper = function(o, e, n) {
                var r = [];

                function i(e, t, o) {
                    t[e] & amp; & amp;
                    o ? o.includes(".") ? (t[e].classList[0] || t[e].classList.value & amp; & amp; t[e].classList.value.includes(o.split(".")[1])) & amp; & amp;
                    r.push(t[e]): o.includes("#") ? t[e].id === o.split("#")[1] & amp; & amp;
                    r.push(t[e]): t[e].tagName === document.createElement(o.trim()).tagName & amp; & amp;
                    r.push(t[e]): t[e] & amp; & amp;
                    r.push(t[e])
                }
                return "string" == typeof e ? Array.prototype.forEach.call(document.querySelectorAll(e), function(e, t) {
                    i(o, e, n)
                }) : i(o, e, n), r
            }, jt.browser = function() {
                var e, t, o;
                return navigator.sayswho = (t = navigator.userAgent, o = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(o[1]) ? "IE " + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "") : "Chrome" === o[1] & amp; & amp; null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e.slice(1).join(" ").replace("OPR", "Opera") : (o = o[2] ? [o[1], o[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) & amp; & amp; o.splice(1, 1, e[1]), o.join(" "))), {
                    version: parseInt(navigator.sayswho.split(" ")[1]),
                    type: navigator.sayswho.split(" ")[0],
                    userAgent: navigator.userAgent
                }
            }, jt.isNodeList = function(e) {
                var t = Object.prototype.toString.call(e);
                return "[object NodeList]" === t || "[object Array]" === t
            }, jt.prototype.fadeOut = function(e) {
                var t = this;
                if (void 0 === e & amp; & amp;
                    (e = 60), 1 & lt; = this.el.length)
                    for (var o = 0; o & lt; this.el.length; o++) {
                        var n = "\n                    visibility: hidden;\n                    opacity: 0;\n                    transition: visibility 0s " + e + "ms, opacity " + e + "ms linear;\n                ";
                        Et(this.el[o], n, !0)
                    }
                var r = setInterval(function() {
                    if (1 & lt; = t.el.length)
                        for (var e = 0; e & lt; t.el.length; e++) t.el[e].style.opacity & lt; = 0 & amp; & amp;
                    (Et(t.el[e], "display: none;", !0), clearInterval(r), "optanon-popup-bg" === t.el[e].id & amp; & amp; t.el[e].removeAttribute("style"))
                }, e);
                return this
            }, jt.prototype.hide = function() {
                if (1 & lt; = this.el.length)
                    for (var e = 0; e & lt; this.el.length; e++) Et(this.el[e], "display: none;", !0);
                else jt.isNodeList(this.el) || Et(this.el, "display: none;", !0);
                return this
            }, jt.prototype.show = function(e) {
                if (void 0 === e & amp; & amp;
                    (e = "block"), 1 & lt; = this.el.length)
                    for (var t = 0; t & lt; this.el.length; t++) Et(this.el[t], "display: " + e + ";", !0);
                else jt.isNodeList(this.el) || Et(this.el, "display: " + e + ";", !0);
                return this
            }, jt.prototype.remove = function() {
                if (1 & lt; = this.el.length)
                    for (var e = 0; e & lt; this.el.length; e++) this.el[e].parentNode.removeChild(this.el[e]);
                else this.el.parentNode.removeChild(this.el);
                return this
            }, jt.prototype.css = function(e) {
                if (e)
                    if (1 & lt; = this.el.length) {
                        if (!e.includes(":")) return this.el[0].style[e];
                        for (var t = 0; t & lt; this.el.length; t++) Et(this.el[t], e)
                    } else {
                        if (!e.includes(":")) return this.el.style[e];
                        Et(this.el, e)
                    } return this
            }, jt.prototype.removeClass = function(e) {
                if (1 & lt; = this.el.length)
                    for (var t = 0; t & lt; this.el.length; t++) this.el[t].classList ? this.el[t].classList.remove(e) : this.el[t].className = this.el[t].className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
                else this.el.classList ? this.el.classList.remove(e) : this.el.className = this.el.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ");
                return this
            }, jt.prototype.addClass = function(e) {
                if (1 & lt; = this.el.length)
                    for (var t = 0; t & lt; this.el.length; t++) this.el[t].classList ? this.el[t].classList.add(e) : this.el[t].className += " " + e;
                else this.el.classList ? this.el.classList.add(e) : this.el.className += " " + e;
                return this
            }, jt.prototype.on = function(r, i, s) {
                var e = this;
                if ("string" != typeof i)
                    if (this.el & amp; & amp;
                        "HTML" === this.el.nodeName & amp; & amp;
                        "load" === r || "resize" === r || "scroll" === r) switch (r) {
                            case "load":
                                window.onload = i;
                                break;
                            case "resize":
                                window.onresize = i;
                                break;
                            case "scroll":
                                window.onscroll = i
                        } else if (this.el & amp; & amp; 1 & lt; = this.el.length)
                            for (var t = 0; t & lt; this.el.length; t++) this.el[t].addEventListener(r, i);
                        else this.el & amp; & amp;
                this.el instanceof Element & amp; & amp;
                this.el.addEventListener(r, i);
                else if (this.el & amp; & amp;
                    "HTML" === this.el.nodeName & amp; & amp;
                    "load" === r || "resize" === r || "scroll" === r) switch (r) {
                    case "load":
                        window.onload = s;
                        break;
                    case "resize":
                        window.onresize = s;
                        break;
                    case "scroll":
                        window.onscroll = s
                } else {
                    var a = function(o) {
                        var n = o.target;
                        e.el.eventExecuted = !0, Array.prototype.forEach.call(document.querySelectorAll(i), function(e, t) {
                            Wt["" + r + i] & amp; & amp;
                            delete Wt["" + r + i], e.addEventListener(r, s), e === n & amp; & amp;
                            s & amp; & amp;
                            s.call(e, o)
                        }), e.el & amp; & amp;
                        e.el[0] ? e.el[0].removeEventListener(r, a) : e.el & amp; & amp;
                        e.el instanceof Element & amp; & amp;
                        e.el.removeEventListener(r, a)
                    };
                    if (this.el & amp; & amp; 1 & lt; = this.el.length)
                        for (t = 0; t & lt; this.el.length; t++) this.el[t].eventExecuted = !1, this.el[t].eventExecuted || this.el[t].addEventListener(r, a);
                    else this.el & amp; & amp;
                    (this.el.eventExecuted = !1, !this.el.eventExecuted & amp; & amp; this.el instanceof Element & amp; & amp;
                        (Wt["" + r + i] || (Wt["" + r + i] = !0, this.el.addEventListener(r, a))))
                }
                return this
            }, jt.prototype.off = function(e, t) {
                if (1 & lt; = this.el.length)
                    for (var o = 0; o & lt; this.el.length; o++) this.el[o].removeEventListener(e, t);
                else this.el.removeEventListener(e, t);
                return this
            }, jt.prototype.one = function(t, o) {
                var n = this;
                if (1 & lt; = this.el.length)
                    for (var e = 0; e & lt; this.el.length; e++) this.el[e].addEventListener(t, function(e) {
                        e.stopPropagation(), e.currentTarget.dataset.triggered || (o(), e.currentTarget.dataset.triggered = !0)
                    });
                else {
                    var r = function(e) {
                        e.stopPropagation(), o(), n.off(t, r)
                    };
                    this.el.addEventListener(t, r)
                }
                return this
            }, jt.prototype.trigger = function(e) {
                var t = new CustomEvent(e, {
                    customEvent: "yes"
                });
                return this.el.dispatchEvent(t), this
            }, jt.prototype.focus = function() {
                return 1 & lt; = this.el.length ? this.el[0].focus() : this.el.focus(), this
            }, jt.prototype.attr = function(e, t) {
                return this.el & amp; & amp;
                1 & lt; = this.el.length ? t ? ("class" === e ? this.addClass(t) : this.el[0].setAttribute(e, t), this) : this.el[0].getAttribute(e) : t & amp; & amp;
                this.el ? ("class" === e ? this.addClass(t) : this.el.setAttribute(e, t), this) : this.el & amp; & amp;
                this.el.getAttribute(e)
            }, jt.prototype.html = function(e) {
                if (null == e) return 1 & lt; = this.el.length ? this.el[0].innerHTML : this.el.innerHTML;
                if (1 & lt; = this.el.length)
                    for (var t = 0; t & lt; this.el.length; t++) this.el[t].innerHTML = e;
                else this.el.innerHTML = e;
                return this
            }, jt.prototype.append = function(o) {
                if ("string" != typeof o || o.includes("&lt;") || o.includes("&gt;"))
                    if (Array.isArray(o)) {
                        var n = this;
                        Array.prototype.forEach.call(o, function(e, t) {
                            document.querySelector(n.selector).appendChild(new jt(e, "ce").el)
                        })
                    } else if ("string" == typeof o || Array.isArray(o))
                    if ("string" == typeof this.selector) document.querySelector(this.selector).appendChild(new jt(o, "ce").el);
                    else if (this.useEl) {
                    var r = document.createDocumentFragment(),
                        i = !(!o.includes("&lt;th") & amp; & amp; !o.includes("&lt;td"));
                    if (i) {
                        var e = o.split(" ")[0].split("&lt;")[1];
                        r.appendChild(document.createElement(e)), r.firstChild.innerHTML = o
                    }
                    Array.prototype.forEach.call(this.el, function(e, t) {
                        i ? e.appendChild(r.firstChild) : e.appendChild(new jt(o, "ce").el)
                    })
                } else this.selector.appendChild(new jt(o, "ce").el);
                else if ("string" == typeof this.selector) document.querySelector(this.selector).appendChild(o);
                else if (1 & lt; = o.length)
                    for (var t = 0; t & lt; o.length; t++) this.selector.appendChild(o[t]);
                else this.selector.appendChild(o);
                else this.el.insertAdjacentText("beforeend", o);
                return this
            }, jt.prototype.text = function(o) {
                if (this.el) {
                    if (1 & lt; = this.el.length) {
                        if (!o) return this.el[0].textContent;
                        Array.prototype.forEach.call(this.el, function(e, t) {
                            e.textContent = o
                        })
                    } else {
                        if (!o) return this.el.textContent;
                        this.el.textContent = o
                    }
                    return this
                }
            }, jt.prototype.data = function(o, n) {
                if (this.el.length & lt; 1) return this;
                if (!(1 & lt; = this.el.length)) return r(this.el, n);

                function r(e, t) {
                    if (!t) return JSON.parse(e.getAttribute("data-" + o));
                    "object" == typeof t ? e.setAttribute("data-" + o, JSON.stringify(t)) : e.setAttribute("data-" + o, t)
                }
                return Array.prototype.forEach.call(this.el, function(e, t) {
                    r(e, n)
                }), this
            }, jt.prototype.height = function(e) {
                this.el.length & amp; & amp;
                (this.el = this.el[0]);
                for (var t = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-top").split("px")[0]), o = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-bottom").split("px")[0]), n = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-top").split("px")[0]), r = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-bottom").split("px")[0]), i = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("height").split("px")[0]), s = [t, o, n, r], a = 0, l = 0; l & lt; s.length; l++) 0 & lt;
                s[l] & amp; & amp;
                (a += s[l]);
                if (!e) return this.selector === document ? i : this.el.clientHeight - a;
                var c = e.toString().split(parseInt(e))[1] ? e.toString().split(parseInt(e))[1] : "px",
                    d = "number" == typeof e ? e : parseInt(e.toString().split(c)[0]);
                return (c & amp; & amp;
                    "px" === c || "%" === c || "em" === c || "rem" === c) & amp; & amp;
                (0 & lt; d ? Et(this.el, "height: " + (a + d + c) + ";", !0) : "auto" === e & amp; & amp; Et(this.el, "height: " + e + ";", !0)), this
            }, jt.prototype.each = function(e) {
                var t = !1;
                return void 0 === this.el.length & amp; & amp;
                (this.el = [this.el], t = !0), Array.prototype.forEach.call(this.el, e), t & amp; & amp;
                (this.el = this.el[0]), this
            }, jt.prototype.is = function(e) {
                return this.el.length ? (this.el[0].matches || this.el[0].matchesSelector || this.el[0].msMatchesSelector || this.el[0].mozMatchesSelector || this.el[0].webkitMatchesSelector || this.el[0].oMatchesSelector).call(this.el[0], e) : (this.el.matches || this.el.matchesSelector || this.el.msMatchesSelector || this.el.mozMatchesSelector || this.el.webkitMatchesSelector || this.el.oMatchesSelector).call(this.el, e)
            }, jt.prototype.filter = function(e) {
                return this.el = Array.prototype.filter.call(document.querySelectorAll(this.selector), e), this
            }, jt.prototype.animate = function(s, a) {
                var l, c = this;
                for (var e in this.el = document.querySelector(this.selector), s) l = e,
                    function() {
                        var e = parseInt(s[l]),
                            t = s[l].split(parseInt(s[l]))[1] ? s[l].split(parseInt(s[l]))[1] : "px",
                            o = "\n                      @keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      @-webkit-keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      @-moz-keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      ",
                            n = document.head.querySelector("#onetrust-style");
                        if (n ? n.innerHTML += o : ((i = document.createElement("style")).id = "onetrust-legacy-style", i.type = "text/css", i.innerHTML = o, document.head.appendChild(i)), jt.browser().type = jt.browser().version & lt; = 8) {
                            var r = "top" === l ? "-webkit-animation: slide-up-custom " : "-webkit-animation: slide-down-custom " + a + "ms ease-out forwards;";
                            Et(c.el, r)
                        } else {
                            var i = "\n                        animation-name: " + ("top" === l ? "slide-up-custom" : "slide-down-custom") + ";\n                        animation-duration: " + a + "ms;\n                        animation-fill-mode: forwards;\n                        animation-timing-function: ease-out;\n                    ";
                            Et(c.el, i, !0)
                        }
                    }();
                return this
            }, jt.prototype.scrollTop = function() {
                return this.el.scrollTop
            }, jt);

        function jt(e, t) {
            switch (void 0 === t & amp; & amp;
                (t = ""), this.selector = e, this.useEl = !1, t) {
                case "ce":
                    var o = jt.browser().type.toLowerCase(),
                        n = jt.browser().version;
                    if (n & lt; 10 & amp; & amp;
                        "safari" === o || "chrome" === o & amp; & amp; n & lt; = 44 || n & lt; = 40 & amp; & amp;
                        "firefox" === o) {
                        var r = document.implementation.createHTMLDocument();
                        r.body.innerHTML = e, this.el = r.body.children[0]
                    } else {
                        var i = document.createRange().createContextualFragment(e);
                        this.el = i.firstChild
                    }
                    this.length = 1;
                    break;
                case "":
                    this.el = e === document || e === window ? document.documentElement : "string" != typeof e ? e : document.querySelectorAll(e), this.length = e === document || e === window || "string" != typeof e ? 1 : this.el.length;
                    break;
                default:
                    this.length = 0
            }
        }

        function zt(e, t) {
            return void 0 === t & amp; & amp;
            (t = ""), new Ut(e, t)
        }
        var Kt, Wt = {},
            Jt = (Yt.prototype.addLogoUrls = function() {
                Kt.checkMobileOfflineRequest(Kt.getBannerVersionUrl()) || (Ft.mobileOnlineURL.push(Kt.updateCorrectUrl(Rt.optanonLogo)), Ft.mobileOnlineURL.push(Kt.updateCorrectUrl(Rt.oneTrustFtrLogo)))
            }, Yt.prototype.getCookieLabel = function(e, t, o) {
                if (void 0 === o & amp; & amp;
                    (o = !0), !e) return "";
                var n = e.Name;
                return t & amp; & amp;
                (n = '\n                &lt;a  class="cookie-label"\n                    href="' + (o ? "http://cookiepedia.co.uk/cookies/" : "http://cookiepedia.co.uk/host/") + e.Name + '"\n                    rel="noopener"\n                    target="_blank"\n                &gt;\n                    ' + e.Name + '&amp;nbsp;&lt;span class="ot-scrn-rdr"&gt;' + Rt.NewWinTxt + "&lt;/span&gt;\n                &lt;/a&gt;\n            "), n
            }, Yt.prototype.getBannerSDKAssestsUrl = function() {
                return this.getBannerVersionUrl() + "/assets"
            }, Yt.prototype.getBannerVersionUrl = function() {
                var e = Ft.bannerScriptElement.getAttribute("src");
                return "" + (-1 !== e.indexOf("/consent/") ? e.split("consent/")[0] + "scripttemplates/" : e.split("otSDKStub")[0]) + Bt.moduleInitializer.Version
            }, Yt.prototype.checkMobileOfflineRequest = function(e) {
                return Bt.moduleInitializer.MobileSDK & amp; & amp;
                new RegExp("^file://", "i").test(e)
            }, Yt.prototype.updateCorrectIABUrl = function(e) {
                var t = Bt.moduleInitializer.ScriptType;
                if (t === Ke || t === Je) {
                    var o = Gt.getURL(e),
                        n = Ft.bannerScriptElement,
                        r = n & amp; & amp;
                    n.getAttribute("src") ? Gt.getURL(n.getAttribute("src")) : null;
                    r & amp; & amp;
                    o & amp; & amp;
                    r.hostname !== o.hostname & amp; & amp;
                    (e = (e = (r = "" + Ft.bannerDataParentURL) + o.pathname.split("/").pop().replace(/(^\/?)/, "/")).replace(o.hostname, r.hostname))
                }
                return e
            }, Yt.prototype.updateCorrectUrl = function(e, t) {
                void 0 === t & amp; & amp;
                (t = !1);
                var o = Gt.getURL(e),
                    n = Ft.bannerScriptElement,
                    r = n & amp; & amp;
                n.getAttribute("src") ? Gt.getURL(n.getAttribute("src")) : null;
                if (r & amp; & amp; o & amp; & amp; r.hostname !== o.hostname) {
                    var i = Bt.moduleInitializer.ScriptType;
                    if (i === Ke || i === Je) {
                        if (t) return e;
                        e = (r = Ft.bannerDataParentURL + "/" + Ft.getRegionRule().Id) + o.pathname.replace(/(^\/?)/, "/")
                    } else e = e.replace(o.hostname, r.hostname)
                }
                return e
            }, Yt.prototype.isBundleOrStackActive = function(n, r) {
                void 0 === r & amp; & amp;
                (r = null);
                var i = Mt.oneTrustIABConsent,
                    s = !0;
                r = r || Mt.groupsConsent;
                for (var a = 0, e = function() {
                        var t = n.SubGroups[a];
                        if (t.Type === kt)(-1 & lt;
                            (e = Gt.findIndex(r, function(e) {
                                return e.split(":")[0] === t.CustomGroupId
                            })) & amp; & amp;
                            "0" === r[e].split(":")[1] || !r.length) & amp; & amp;
                        (s = !1);
                        else {
                            var e, o = t.Type === Pt ? i.specialFeatures : i.purpose;
                            (-1 & lt;
                                (e = Gt.findIndex(o, function(e) {
                                    return e.split(":")[0] === t.IabGrpId
                                })) & amp; & amp;
                                "false" === o[e].split(":")[1] || !o.length) & amp; & amp;
                            (s = !1)
                        }
                        a++
                    }; e(), s & amp; & amp; a & lt; n.SubGroups.length;);
                return s
            }, Yt.prototype.otFetchOfflineFile = function(r) {
                return c(this, void 0, void 0, function() {
                    var t, o, n;
                    return C(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return r = r.replace(".json", ".js"), t = r.split("/"), o = t[t.length - 1], n = o.split(".js")[0], [4, new Promise(function(e) {
                                    function t() {
                                        e(window[n])
                                    }
                                    Kt.jsonp(r, t, t)
                                })];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            }, Yt.prototype.jsonp = function(e, t, o) {
                Kt.checkMobileOfflineRequest(e) || Ft.mobileOnlineURL.push(e);
                var n = document.createElement("script"),
                    r = document.getElementsByTagName("head")[0];

                function i() {
                    t()
                }
                n.onreadystatechange = function() {
                    "loaded" !== this.readyState & amp; & amp;
                    "complete" !== this.readyState || i()
                }, n.onload = i, n.onerror = function() {
                    o()
                }, n.type = "text/javascript", n.async = !0, n.src = e, Mt.crossOrigin & amp; & amp;
                n.setAttribute("crossorigin", Mt.crossOrigin), r.appendChild(n)
            }, Yt.prototype.isCookiePolicyPage = function(e) {
                var t = !1,
                    o = Gt.removeURLPrefixes(window.location.href),
                    n = zt("&lt;div&gt;&lt;/div&gt;", "ce").el;
                zt(n).html(e);
                for (var r = n.querySelectorAll("a"), i = 0; i & lt; r.length; i++)
                    if (Gt.removeURLPrefixes(r[i].href) === o) {
                        t = !0;
                        break
                    } return t
            }, Yt.prototype.isBannerVisible = function() {
                var e = !1,
                    t = document.getElementById("onetrust-banner-sdk");
                return t & amp; & amp;
                t.getAttribute("style") & amp; & amp;
                (e = -1 !== t.getAttribute("style").indexOf("display: none") || -1 !== t.getAttribute("style").indexOf("display:none")), e
            }, Yt.prototype.hideBanner = function() {
                var e = this;
                Mt.bnrAnimationInProg ? setTimeout(function() {
                    return e.hideBanner()
                }, 100) : zt("#onetrust-banner-sdk").fadeOut(400)
            }, Yt.prototype.resetFocusToBody = function() {
                document.activeElement & amp; & amp;
                document.activeElement.blur()
            }, Yt.prototype.getDuration = function(e) {
                var t = e.Length,
                    o = e.DurationType,
                    n = "";
                if (!t || 0 === parseInt(t)) return Rt.LfSpanSecs;
                var r = parseInt(t);
                if (o) {
                    var i = 1 & lt;
                    (r = this.round_to_precision(r / o, .5)) ? pt[o] + "s": pt[o];
                    Rt.LifespanDurationText & amp; & amp;
                    1 === o & amp; & amp;
                    (i = "LifespanDurationText"), n = r + " " + Rt[i]
                } else n = this.getDurationText(r);
                return n
            }, Yt.prototype.isDateCurrent = function(e) {
                var t = e.split("/"),
                    o = parseInt(t[1]),
                    n = parseInt(t[0]),
                    r = parseInt(t[2]),
                    i = new Date,
                    s = i.getDate(),
                    a = i.getFullYear(),
                    l = i.getMonth() + 1;
                return a & lt;
                r || r === a & amp; & amp;
                l & lt;
                n || r === a & amp; & amp;
                n === l & amp; & amp;
                s & lt; = o
            }, Yt.prototype.insertFooterLogo = function(e) {
                var t = zt(e).el;
                if (t.length & amp; & amp; Rt.oneTrustFtrLogo) {
                    var o = Kt.updateCorrectUrl(Rt.oneTrustFtrLogo);
                    Kt.checkMobileOfflineRequest(Kt.getBannerVersionUrl()) & amp; & amp;
                    (o = Gt.getRelativeURL(o, !0, !0));
                    for (var n = 0; n & lt; t.length; n++) {
                        var r = t[n].querySelector("img"),
                            i = "Powered by OneTrust " + Rt.NewWinTxt;
                        zt(t[n]).attr("href", Rt.pCFooterLogoUrl), r.setAttribute("src", o), r.setAttribute("title", i), zt(t[n]).attr("aria-label", i)
                    }
                }
            }, Yt.prototype.getUTCFormattedDate = function(e) {
                var t = new Date(e);
                return t.getUTCFullYear() + "-" + (t.getUTCMonth() + 1).toString().padStart(2, "0") + "-" + t.getUTCDate().toString().toString().padStart(2, "0") + " " + t.getUTCHours() + ":" + t.getUTCMinutes().toString().toString().padStart(2, "0") + ":" + t.getUTCSeconds().toString().toString().padStart(2, "0")
            }, Yt.prototype.getDurationText = function(e) {
                return 365 & lt; = e ? (e /= 365, (e = this.round_to_precision(e, .5)) + " " + (1 & lt; e ? Rt.LfSpnYrs : Rt.LfSpnYr)) : Rt.LifespanDurationText ? e + " " + Rt.LifespanDurationText : e + " " + (1 & lt; e ? Rt.PCenterVendorListLifespanDays : Rt.PCenterVendorListLifespanDay)
            }, Yt.prototype.round_to_precision = function(e, t) {
                var o = +e + (void 0 === t ? .5 : t / 2);
                return o - o % (void 0 === t ? 1 : +t)
            }, Yt.prototype.isOptOutEnabled = function() {
                return Rt.PCTemplateUpgrade ? Mt.genVenOptOutEnabled : Rt.allowHostOptOut
            }, Yt.prototype.findUserType = function(e) {
                Mt.isKeyboardUser = !(!e || 0 !== e.detail)
            }, Yt);

        function Yt() {}
        var Xt, Qt = {
                P_Content: "#ot-pc-content",
                P_Logo: ".ot-pc-logo",
                P_Title: "#ot-pc-title",
                P_Policy_Txt: "#ot-pc-desc",
                P_Vendor_Title_Elm: "#ot-lst-title",
                P_Vendor_Title: "#ot-lst-title h3",
                P_Manage_Cookies_Txt: "#ot-category-title",
                P_Label_Txt: ".ot-label-txt",
                P_Category_Header: ".ot-cat-header",
                P_Category_Grp: ".ot-cat-grp",
                P_Category_Item: ".ot-cat-item",
                P_Vendor_List: "#ot-pc-lst",
                P_Vendor_Content: "#ot-lst-cnt",
                P_Vendor_Container: "#ot-ven-lst",
                P_Ven_Bx: "ot-ven-box",
                P_Ven_Name: ".ot-ven-name",
                P_Ven_Link: ".ot-ven-link",
                P_Ven_Ctgl: "ot-ven-ctgl",
                P_Ven_Ltgl: "ot-ven-litgl",
                P_Ven_Ltgl_Only: "ot-ven-litgl-only",
                P_Ven_Opts: ".ot-ven-opts",
                P_Triangle: "#ot-anchor",
                P_Fltr_Modal: "#ot-fltr-modal",
                P_Fltr_Options: ".ot-fltr-opts",
                P_Fltr_Option: ".ot-fltr-opt",
                P_Select_Cntr: "#ot-sel-blk",
                P_Host_Cntr: "#ot-host-lst",
                P_Host_Hdr: ".ot-host-hdr",
                P_Host_Desc: ".ot-host-desc",
                P_Li_Hdr: ".ot-pli-hdr",
                P_Li_Title: ".ot-li-title",
                P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
                P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
                P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
                P_Host_Title: ".ot-host-name",
                P_Leg_Select_All: ".ot-sel-all-hdr",
                P_Leg_Header: ".ot-li-hdr",
                P_Acc_Header: ".ot-acc-hdr",
                P_Cnsnt_Header: ".ot-consent-hdr",
                P_Tgl_Cntr: ".ot-tgl-cntr",
                P_CBx_Cntr: ".ot-chkbox",
                P_Sel_All_Host_El: "ot-selall-hostcntr",
                P_Sel_All_Vendor_Consent_El: "ot-selall-vencntr",
                P_Sel_All_Vendor_Leg_El: "ot-selall-licntr",
                P_c_Name: "ot-c-name",
                P_c_Host: "ot-c-host",
                P_c_Duration: "ot-c-duration",
                P_c_Type: "ot-c-type",
                P_c_Category: "ot-c-category",
                P_c_Desc: "ot-c-description",
                P_Host_View_Cookies: ".ot-host-expand",
                P_Host_Opt: ".ot-host-opt",
                P_Host_Info: ".ot-host-info",
                P_Arrw_Cntr: ".ot-arw-cntr",
                P_Acc_Txt: ".ot-acc-txt",
                P_Vendor_CheckBx: "ot-ven-chkbox",
                P_Vendor_LegCheckBx: "ot-ven-leg-chkbox",
                P_Host_UI: "ot-hosts-ui",
                P_Host_Cnt: "ot-host-cnt",
                P_Host_Bx: "ot-host-box",
                P_Ven_Dets: ".ot-ven-dets",
                P_Ven_Disc: ".ot-ven-disc",
                P_Gven_List: "#ot-gn-venlst",
                P_Close_Btn: ".ot-close-icon",
                P_Ven_Lst_Cntr: ".ot-vlst-cntr",
                P_Host_Lst_cntr: ".ot-hlst-cntr",
                P_Sub_Grp_Cntr: ".ot-subgrp-cntr",
                P_Subgrp_Desc: ".ot-subgrp-desc",
                P_Subgp_ul: ".ot-subgrps",
                P_Subgrp_li: ".ot-subgrp",
                P_Subgrp_Tgl_Cntr: ".ot-subgrp-tgl",
                P_Grp_Container: ".ot-grps-cntr",
                P_Privacy_Txt: "#ot-pvcy-txt",
                P_Privacy_Hdr: "#ot-pvcy-hdr",
                P_Active_Menu: "ot-active-menu",
                P_Desc_Container: ".ot-desc-cntr",
                P_Tab_Grp_Hdr: "ot-grp-hdr1",
                P_Search_Cntr: "#ot-search-cntr",
                P_Clr_Fltr_Txt: "#clear-filters-handler",
                P_Acc_Grp_Desc: ".ot-acc-grpdesc",
                P_Acc_Container: ".ot-acc-grpcntr",
                P_Line_Through: "line-through",
                P_Vendor_Search_Input: "#vendor-search-handler"
            },
            $t = {
                P_Grp_Container: ".groups-container",
                P_Content: "#ot-content",
                P_Category_Header: ".category-header",
                P_Desc_Container: ".description-container",
                P_Label_Txt: ".label-text",
                P_Acc_Grp_Desc: ".ot-accordion-group-pc-container",
                P_Leg_Int_Hdr: ".leg-int-header",
                P_Not_Always_Active: "p:not(.ot-always-active)",
                P_Category_Grp: ".category-group",
                P_Category_Item: ".category-item",
                P_Sub_Grp_Cntr: ".cookie-subgroups-container",
                P_Acc_Container: ".ot-accordion-pc-container",
                P_Close_Btn: ".pc-close-button",
                P_Logo: ".pc-logo",
                P_Title: "#pc-title",
                P_Privacy_Txt: "#privacy-text",
                P_Privacy_Hdr: "#pc-privacy-header",
                P_Policy_Txt: "#pc-policy-text",
                P_Manage_Cookies_Txt: "#manage-cookies-text",
                P_Vendor_Title: "#vendors-list-title",
                P_Vendor_Title_Elm: "#vendors-list-title",
                P_Vendor_List: "#vendors-list",
                P_Vendor_Content: "#vendor-list-content",
                P_Vendor_Container: "#vendors-list-container",
                P_Ven_Bx: "vendor-box",
                P_Ven_Name: ".vendor-title",
                P_Ven_Link: ".vendor-privacy-notice",
                P_Ven_Ctgl: "ot-vendor-consent-tgl",
                P_Ven_Ltgl: "ot-leg-int-tgl",
                P_Ven_Ltgl_Only: "ot-leg-int-tgl-only",
                P_Ven_Opts: ".vendor-options",
                P_Triangle: "#ot-triangle",
                P_Fltr_Modal: "#ot-filter-modal",
                P_Fltr_Options: ".ot-group-options",
                P_Fltr_Option: ".ot-group-option",
                P_Select_Cntr: "#select-all-container",
                P_Host_Cntr: "#hosts-list-container",
                P_Host_Hdr: ".host-info",
                P_Host_Desc: ".host-description",
                P_Host_Opt: ".host-option-group",
                P_Host_Info: ".vendor-host",
                P_Ven_Dets: ".vendor-purpose-groups",
                P_Ven_Disc: ".ot-ven-disc",
                P_Gven_List: "#ot-gn-venlst",
                P_Arrw_Cntr: ".ot-arrow-container",
                P_Li_Hdr: ".leg-int-header",
                P_Li_Title: ".leg-int-title",
                P_Acc_Txt: ".accordion-text",
                P_Tgl_Cntr: ".ot-toggle-group",
                P_CBx_Cntr: ".ot-chkbox-container",
                P_Host_Title: ".host-title",
                P_Leg_Select_All: ".leg-int-sel-all-hdr",
                P_Leg_Header: ".leg-int-hdr",
                P_Cnsnt_Header: ".consent-hdr",
                P_Acc_Header: ".accordion-header",
                P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
                P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
                P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
                P_Sel_All_Host_El: "select-all-hosts-input-container",
                P_Sel_All_Vendor_Consent_El: "select-all-vendors-input-container",
                P_Sel_All_Vendor_Leg_El: "select-all-vendors-leg-input-container",
                P_c_Name: "cookie-name-container",
                P_c_Host: "cookie-host-container",
                P_c_Duration: "cookie-duration-container",
                P_c_Type: "cookie-type-container",
                P_c_Category: "cookie-category-container",
                P_c_Desc: "cookie-description-container",
                P_Host_View_Cookies: ".host-view-cookies",
                P_Vendor_CheckBx: "vendor-chkbox",
                P_Vendor_LegCheckBx: "vendor-leg-chkbox",
                P_Host_UI: "hosts-list",
                P_Host_Cnt: "host-list-content",
                P_Host_Bx: "host-box",
                P_Ven_Lst_Cntr: ".category-vendors-list-container",
                P_Host_Lst_cntr: ".category-host-list-container",
                P_Subgrp_Desc: ".cookie-subgroups-description-legal",
                P_Subgp_ul: ".cookie-subgroups",
                P_Subgrp_li: ".cookie-subgroup",
                P_Subgrp_Tgl_Cntr: ".cookie-subgroup-toggle",
                P_Active_Menu: "active-group",
                P_Tab_Grp_Hdr: "group-toggle",
                P_Search_Cntr: "#search-container",
                P_Clr_Fltr_Txt: "#clear-filters-handler p",
                P_Vendor_Search_Input: "#vendor-search-handler"
            };

        function Zt() {}
        var eo, to = new(Zt.prototype.initializeBannerVariables = function(e) {
                var t, o = e.DomainData;
                Ft.iabType = o.IabType, t = o.PCTemplateUpgrade, Xt = t ? Qt : $t, Ft.init(e), Mt.showGeneralVendors = Rt.GeneralVendorsEnabled & amp; & amp;
                Rt.PCTemplateUpgrade, Mt.showVendorService = Bt.fp.CookieV2VendorServiceScript & amp; & amp;
                Rt.VendorServiceConfig.PCVSEnable & amp; & amp;
                "IAB2" !== Rt.IabType & amp; & amp;
                Rt.PCTemplateUpgrade, Mt.vsIsActiveAndOptOut = Mt.showVendorService & amp; & amp;
                Rt.VendorServiceConfig.PCVSOptOut, Mt.genVenOptOutEnabled = Mt.showGeneralVendors & amp; & amp;
                Rt.GenVenOptOut, Kt.addLogoUrls(), this.setGeolocationInCookies(), this.setOrUpdate3rdPartyIABConsentFlag()
            }, Zt.prototype.initializeVendorInOverriddenVendors = function(e, t) {
                Rt.OverriddenVendors[e] = {
                    disabledCP: [],
                    disabledLIP: [],
                    active: t,
                    legInt: !1,
                    consent: !1
                }
            }, Zt.prototype.applyGlobalRestrictionsonNewVendor = function(e, t, o, n) {
                var r = Rt.GlobalRestrictions,
                    i = Rt.OverriddenVendors;
                switch (i[t] || this.initializeVendorInOverriddenVendors(t, !0), i[t].disabledCP || (i[t].disabledCP = []), i[t].disabledLIP || (i[t].disabledLIP = []), r[o]) {
                    case q.Disabled:
                        n ? i[t].disabledCP.push(o) : i[t].disabledLIP.push(o), Rt.Publisher.restrictions[o][t] = q.Disabled;
                        break;
                    case q.Consent:
                        n ? (i[t].consent = !0, Rt.Publisher.restrictions[o][t] = q.Consent) : (i[t].disabledLIP.push(o), this.checkFlexiblePurpose(e, t, o, !1));
                        break;
                    case q.LegInt:
                        n ? (i[t].disabledCP.push(o), this.checkFlexiblePurpose(e, t, o, !0)) : (i[t].legInt = !0, Rt.Publisher.restrictions[o][t] = q.LegInt);
                        break;
                    case void 0:
                        n ? i[t].consent = !0 : i[t].legInt = !0
                }
            }, Zt.prototype.checkFlexiblePurpose = function(e, t, o, n) {
                e.flexiblePurposes.includes(o) ? (n ? Rt.OverriddenVendors[t].legInt = !0 : Rt.OverriddenVendors[t].consent = !0, Rt.Publisher.restrictions[o][t] = n ? q.LegInt : q.Consent) : Rt.Publisher.restrictions[o][t] = q.Disabled
            }, Zt.prototype.removeInActiveVendorsForTcf = function(i) {
                var s = this,
                    a = Mt.iabData.vendorListVersion,
                    e = Rt.Publisher,
                    l = Rt.GlobalRestrictionEnabled,
                    c = !(0 === Object.keys(e).length || e & amp; & amp; 0 === Object.keys(e.restrictions).length);
                Object.keys(i.vendors).forEach(function(t) {
                    var o = i.vendors[t];
                    o.iab2GVLVersion & gt;
                    a & amp; & amp;
                    (Rt.NewVendorsInactiveEnabled ? s.initializeVendorInOverriddenVendors(t, !1) : l & amp; & amp;
                        (o.purposes.forEach(function(e) {
                            s.applyGlobalRestrictionsonNewVendor(o, t, e, !0)
                        }), o.legIntPurposes.forEach(function(e) {
                            s.applyGlobalRestrictionsonNewVendor(o, t, e, !1)
                        })));
                    var e = !1;
                    Rt.IsIabThirdPartyCookieEnabled || (Ft.legIntSettings.PAllowLI ? Rt.OverriddenVendors[t] & amp; & amp; !Rt.OverriddenVendors[t].active & amp; & amp;
                        (e = !0) : -1 & lt; Rt.Vendors.indexOf(Number(t)) & amp; & amp;
                        (e = !0));
                    var n = !o.purposes.length & amp; & amp;
                    !o.flexiblePurposes.length;
                    Rt.OverriddenVendors[t] & amp; & amp;
                    !Rt.OverriddenVendors[t].consent & amp; & amp;
                    (n = !0);
                    var r = !0;
                    Ft.legIntSettings.PAllowLI & amp; & amp;
                    (!o.legIntPurposes.length || Rt.OverriddenVendors[t] & amp; & amp; !Rt.OverriddenVendors[t].legInt || (r = !1)), !n || !r || o.specialPurposes.length || o.features.length || o.specialFeatures.length || (e = !0), !l & amp; & amp;
                    c & amp; & amp;
                    o.iab2GVLVersion & gt;
                    a & amp; & amp;
                    (e = !0), e & amp; & amp;
                    delete i.vendors[t]
                })
            }, Zt.prototype.setPublisherRestrictions = function() {
                var e = Rt.Publisher;
                if (e & amp; & amp; e.restrictions) {
                    var s = this.iabStringSDK(),
                        t = e.restrictions,
                        a = Mt.iabData,
                        l = Mt.oneTrustIABConsent.vendorList.vendors;
                    Object.keys(t).forEach(function(n) {
                        var r, i = t[n],
                            e = Ft.iabGroups.purposes[n];
                        e & amp; & amp;
                        (r = {
                            description: e.description,
                            purposeId: e.id,
                            purposeName: e.name
                        }), Object.keys(i).forEach(function(e) {
                            if (Mt.vendorsSetting[e]) {
                                var t = Mt.vendorsSetting[e].arrIndex;
                                1 === i[e] & amp; & amp; - 1 === l[e].purposes.indexOf(Number(n)) ? a.vendors[t].purposes.push(r) : 2 === i[e] & amp; & amp; - 1 === l[e].legIntPurposes.indexOf(Number(n)) & amp; & amp;
                                a.vendors[t].legIntPurposes.push(r);
                                var o = s.purposeRestriction(Number(n), i[e]);
                                Mt.tcModel.publisherRestrictions.add(Number(e), o)
                            }
                        })
                    })
                }
            }, Zt.prototype.populateVendorListTCF = function() {
                return c(this, void 0, void 0, function() {
                    var t, o, n, r, i, s, a, l, c;
                    return C(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = this.iabStringSDK(), o = Mt.iabData, n = Kt.updateCorrectIABUrl(o.globalVendorListUrl), r = !this.isIABCrossConsentEnabled(), Kt.checkMobileOfflineRequest(Kt.getBannerVersionUrl()) ? [3, 1] : (Ft.mobileOnlineURL.push(n), i = t.gvl(n, Mt.gvlObj), [3, 3]);
                            case 1:
                                return a = (s = t).gvl, l = [null], [4, Kt.otFetchOfflineFile(Gt.getRelativeURL(n, !0))];
                            case 2:
                                i = a.apply(s, l.concat([e.sent()])), e.label = 3;
                            case 3:
                                return this.removeInActiveVendorsForTcf(i), Mt.oneTrustIABConsent.vendorList = i, this.assignIABDataWithGlobalVendorList(i), c = Mt, [4, t.tcModel(i)];
                            case 4:
                                c.tcModel = e.sent(), r & amp; & amp;
                                this.setPublisherRestrictions(), Mt.tcModel.cmpId = parseInt(o.cmpId), Mt.tcModel.cmpVersion = parseInt(o.cmpVersion);
                                try {
                                    Mt.tcModel.consentLanguage = Mt.consentLanguage
                                } catch (e) {
                                    Mt.tcModel.consentLanguage = "EN"
                                }
                                return Mt.tcModel.consentScreen = parseInt(o.consentScreen), Mt.tcModel.isServiceSpecific = r, Mt.tcModel.purposeOneTreatment = Ft.purposeOneTreatment, Rt.PublisherCC ? Mt.tcModel.publisherCountryCode = Rt.PublisherCC : Mt.userLocation.country & amp; & amp;
                                (Mt.tcModel.publisherCountryCode = Mt.userLocation.country), Mt.cmpApi = t.cmpApi(Mt.tcModel.cmpId, Mt.tcModel.cmpVersion, r, Rt.UseGoogleVendors ? {
                                    getTCData: this.addtlConsentString,
                                    getInAppTCData: this.addtlConsentString
                                } : void 0), null !== this.alertBoxCloseDate() & amp; & amp;
                                !this.needReconsent() || this.resetTCModel(), [2]
                        }
                    })
                })
            }, Zt.prototype.resetTCModel = function() {
                var e = this.iabStringSDK(),
                    t = Mt.tcModel.clone();
                if (t.unsetAll(), Ft.legIntSettings.PAllowLI) {
                    var o = Ft.consentableIabGrps.filter(function(e) {
                            return e.HasLegIntOptOut & amp; & amp;
                            e.Type === bt
                        }).map(function(e) {
                            return parseInt(Ft.iabGrpIdMap[e.CustomGroupId])
                        }),
                        n = Object.keys(Mt.vendorsSetting).filter(function(e) {
                            return Mt.vendorsSetting[e].legInt
                        }).map(function(e) {
                            return parseInt(e)
                        });
                    t.purposeLegitimateInterests.set(o), t.vendorLegitimateInterests.set(n), t.isServiceSpecific & amp; & amp;
                    t.publisherLegitimateInterests.set(o)
                }
                Mt.cmpApi.update(e.tcString().encode(t), !0)
            }, Zt.prototype.addtlConsentString = function(e, t, o) {
                t & amp; & amp;
                (t.addtlConsent = "" + Mt.addtlConsentVersion + (Mt.isAddtlConsent ? Mt.addtlVendors.vendorConsent.join(".") : "")), "function" == typeof e ? e(t, o) : console.error("__tcfapi received invalid parameters.")
            }, Zt.prototype.setIabData = function() {
                Mt.iabData = Bt.moduleInitializer.IabV2Data, Mt.iabData.consentLanguage = Mt.consentLanguage
            }, Zt.prototype.assignIABDataWithGlobalVendorList = function(r) {
                var i = Rt.OverriddenVendors;
                Mt.iabData.vendorListVersion = r.vendorListVersion, Mt.iabData.vendors = [], Object.keys(r.vendors).forEach(function(n) {
                    Mt.vendorsSetting[n] = {
                        consent: !0,
                        legInt: !0,
                        arrIndex: 0,
                        specialPurposesOnly: !1
                    };
                    var e = {},
                        t = r.vendors[n];
                    e.vendorId = n, e.vendorName = t.name, e.policyUrl = t.policyUrl, e.cookieMaxAge = Gt.calculateCookieLifespan(t.cookieMaxAgeSeconds), e.usesNonCookieAccess = t.usesNonCookieAccess, e.deviceStorageDisclosureUrl = t.deviceStorageDisclosureUrl || null;
                    var o = !t.legIntPurposes.length & amp; & amp;
                    !t.purposes.length & amp; & amp;
                    t.specialPurposes.length;
                    Ft.legIntSettings.PAllowLI & amp; & amp;
                    ((!i[n] || i[n].legInt) & amp; & amp;
                        (i[n] || t.legIntPurposes.length) || o) || (Mt.vendorsSetting[n].legInt = !1), Ft.legIntSettings.PAllowLI & amp; & amp;
                    o & amp; & amp;
                    (Mt.vendorsSetting[n].specialPurposesOnly = !0), i[n] & amp; & amp;
                    !i[n].consent || !i[n] & amp; & amp;
                    !t.purposes.length & amp; & amp;
                    !t.flexiblePurposes.length ? Mt.vendorsSetting[n].consent = !1 : t.purposes.length || t.flexiblePurposes.length || (Mt.vendorsSetting[n].consent = !1), e.features = t.features.map(function(e) {
                        var t, o = Ft.iabGroups.features[e];
                        return o & amp; & amp;
                        (t = {
                            description: o.description,
                            featureId: o.id,
                            featureName: o.name
                        }), t
                    }), e.specialFeatures = r.vendors[n].specialFeatures.reduce(function(e, t) {
                        var o = Ft.iabGroups.specialFeatures[t];
                        return o & amp; & amp;
                        e.push({
                            description: o.description,
                            featureId: o.id,
                            featureName: o.name
                        }), e
                    }, []), e.purposes = r.vendors[n].purposes.reduce(function(e, t) {
                        var o = Ft.iabGroups.purposes[t];
                        return !o || i[n] & amp; & amp;
                        i[n].disabledCP & amp; & amp; - 1 !== i[n].disabledCP.indexOf(t) || e.push({
                            description: o.description,
                            purposeId: o.id,
                            purposeName: o.name
                        }), e
                    }, []), e.legIntPurposes = r.vendors[n].legIntPurposes.reduce(function(e, t) {
                        var o = Ft.iabGroups.purposes[t];
                        return !o || i[n] & amp; & amp;
                        i[n].disabledLIP & amp; & amp; - 1 !== i[n].disabledLIP.indexOf(t) || e.push({
                            description: o.description,
                            purposeId: o.id,
                            purposeName: o.name
                        }), e
                    }, []), e.specialPurposes = t.specialPurposes.map(function(e) {
                        var t, o = Ft.iabGroups.specialPurposes[e];
                        return o & amp; & amp;
                        (t = {
                            description: o.description,
                            purposeId: o.id,
                            purposeName: o.name
                        }), t
                    }), Mt.iabData.vendors.push(e), Mt.vendorsSetting[n].arrIndex = Mt.iabData.vendors.length - 1
                })
            }, Zt.prototype.populateIABCookies = function() {
                return c(this, void 0, void 0, function() {
                    return C(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (!this.isIABCrossConsentEnabled()) return [3, 5];
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 3, , 4]), [4, this.setIAB3rdPartyCookie(Oe.EU_CONSENT, "", 0, !0)];
                            case 2:
                                return e.sent(), [3, 4];
                            case 3:
                                return e.sent(), this.setIABCookieData(), this.updateCrossConsentCookie(!1), [3, 4];
                            case 4:
                                return [3, 6];
                            case 5:
                                to.needReconsent() || this.setIABCookieData(), e.label = 6;
                            case 6:
                                return [2]
                        }
                    })
                })
            }, Zt.prototype.setIAB3rdPartyCookie = function(e, t, o, n) {
                var r = Rt.iabThirdPartyConsentUrl;
                try {
                    if (r & amp; & amp; document.body) return this.updateThirdPartyConsent(r, e, t, o, n);
                    throw new ReferenceError
                } catch (e) {
                    throw e
                }
            }, Zt.prototype.setIABCookieData = function() {
                Mt.oneTrustIABConsent.IABCookieValue = xt.getCookie(Oe.EU_PUB_CONSENT)
            }, Zt.prototype.updateThirdPartyConsent = function(n, r, i, s, a) {
                return c(this, void 0, void 0, function() {
                    var t, o;
                    return C(this, function(e) {
                        return t = window.location.protocol + "//" + n + "/?name=" + r + "&amp;value=" + i + "&amp;expire=" + s + "&amp;isFirstRequest=" + a, document.getElementById("onetrustIabCookie") ? (document.getElementById("onetrustIabCookie").contentWindow.location.replace(t), [2]) : (Et(o = document.createElement("iframe"), "display: none;", !0), o.id = "onetrustIabCookie", o.setAttribute("title", "OneTrust IAB Cookie"), o.src = t, document.body.appendChild(o), [2, new Promise(function(e) {
                            o.onload = function() {
                                Ft.thirdPartyiFrameResolve(), Ft.thirdPartyiFrameLoaded = !0, e()
                            }, o.onerror = function() {
                                throw Ft.thirdPartyiFrameResolve(), Ft.thirdPartyiFrameLoaded = !0, e(), new URIError
                            }
                        })])
                    })
                })
            }, Zt.prototype.setIABVendor = function(r, i) {
                if (void 0 === r & amp; & amp;
                    (r = !0), void 0 === i & amp; & amp;
                    (i = !1), Mt.iabData.vendors.forEach(function(e) {
                        var t = e.vendorId;
                        if (Ft.legIntSettings.PAllowLI) {
                            var o = void 0,
                                n = void 0;
                            n = i ? o = r : (o = !!Mt.vendorsSetting[t].consent & amp; & amp; r, Mt.vendorsSetting[t].legInt), Mt.oneTrustIABConsent.vendors.push(t.toString() + ":" + o), Mt.oneTrustIABConsent.legIntVendors.push(t.toString() + ":" + n)
                        } else Mt.oneTrustIABConsent.legIntVendors = [], Mt.oneTrustIABConsent.vendors.push(t.toString() + ":" + r)
                    }), Rt.UseGoogleVendors) {
                    var t = Mt.addtlVendors;
                    Object.keys(Mt.addtlVendorsList).forEach(function(e) {
                        r & amp; & amp;
                        (t.vendorSelected["" + e.toString()] = !0, t.vendorConsent.push("" + e.toString()))
                    })
                }
            }, Zt.prototype.setOrUpdate3rdPartyIABConsentFlag = function() {
                var e = this.getIABCrossConsentflagData();
                Rt.IsIabEnabled ? e & amp; & amp;
                !this.needReconsent() || this.updateCrossConsentCookie(Rt.IsIabThirdPartyCookieEnabled): e & amp; & amp;
                !this.reconsentRequired() & amp; & amp;
                "true" !== e || this.updateCrossConsentCookie(!1)
            }, Zt.prototype.isIABCrossConsentEnabled = function() {
                return "true" === this.getIABCrossConsentflagData()
            }, Zt.prototype.getIABCrossConsentflagData = function() {
                return xt.readCookieParam(Oe.OPTANON_CONSENT, we)
            }, Zt.prototype.setGeolocationInCookies = function() {
                var e = xt.readCookieParam(Oe.OPTANON_CONSENT, Be);
                if (Mt.userLocation & amp; & amp; !e & amp; & amp; this.isAlertBoxClosedAndValid()) {
                    var t = Mt.userLocation.country + ";" + Mt.userLocation.state;
                    this.setUpdateGeolocationCookiesData(t)
                } else this.reconsentRequired() & amp; & amp;
                e & amp; & amp;
                this.setUpdateGeolocationCookiesData("")
            }, Zt.prototype.iabStringSDK = function() {
                var e = Bt.moduleInitializer.otIABModuleData;
                if (Rt.IsIabEnabled & amp; & amp; e) return {
                    gvl: e.tcfSdkRef.gvl,
                    tcModel: e.tcfSdkRef.tcModel,
                    tcString: e.tcfSdkRef.tcString,
                    cmpApi: e.tcfSdkRef.cmpApi,
                    purposeRestriction: e.tcfSdkRef.purposeRestriction
                }
            }, Zt.prototype.setUpdateGeolocationCookiesData = function(e) {
                xt.writeCookieParam(Oe.OPTANON_CONSENT, Be, e)
            }, Zt.prototype.reconsentRequired = function() {
                return (Bt.moduleInitializer.MobileSDK || this.awaitingReconsent()) & amp; & amp;
                this.needReconsent()
            }, Zt.prototype.awaitingReconsent = function() {
                return "true" === xt.readCookieParam(Oe.OPTANON_CONSENT, _e)
            }, Zt.prototype.needReconsent = function() {
                var e = this.alertBoxCloseDate(),
                    t = Rt.LastReconsentDate;
                return e & amp; & amp;
                t & amp; & amp;
                new Date(t) & gt;
                new Date(e)
            }, Zt.prototype.updateCrossConsentCookie = function(e) {
                xt.writeCookieParam(Oe.OPTANON_CONSENT, we, e)
            }, Zt.prototype.alertBoxCloseDate = function() {
                return xt.getCookie(Oe.ALERT_BOX_CLOSED)
            }, Zt.prototype.isAlertBoxClosedAndValid = function() {
                return null !== this.alertBoxCloseDate() & amp; & amp;
                !this.reconsentRequired()
            }, Zt.prototype.generateLegIntButtonElements = function(e, t, o) {
                void 0 === o & amp; & amp;
                (o = !1);
                var n = e ? "display:none;" : "";
                return '&lt;div class="ot-leg-btn-container" data-group-id="' + t + '" data-el-id="' + t + '-leg-out" is-vendor="' + o + '"&gt;\n                    &lt;button class="ot-obj-leg-btn-handler ' + (e ? "ot-leg-int-enabled ot-inactive-leg-btn" : "ot-active-leg-btn") + '"&gt;\n                        &lt;svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"&gt;\n                            &lt;path fill="' + Rt.pcButtonTextColor + '" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/&gt;\n                        &lt;/svg&gt;\n                        &lt;span&gt;' + (e ? Ft.legIntSettings.PObjectLegIntText : Ft.legIntSettings.PObjectionAppliedText) + '\n                        &lt;/span&gt;\n                    &lt;/button&gt;\n                    &lt;button\n                        class="ot-remove-objection-handler"\n                            data-style="color:' + Rt.pcButtonColor + "; " + n + '"\n                    &gt;\n                        ' + Ft.legIntSettings.PRemoveObjectionText + "\n                    &lt;/button&gt;\n                &lt;/div&gt;"
            }, Zt.prototype.syncAlertBoxCookie = function(e) {
                var t = Rt.ReconsentFrequencyDays;
                xt.setCookie(Oe.ALERT_BOX_CLOSED, e, t, !1, new Date(e))
            }, Zt.prototype.syncCookieExpiry = function() {
                if (Mt.syncRequired) {
                    var e = Rt.ReconsentFrequencyDays,
                        t = xt.getCookie(Oe.ALERT_BOX_CLOSED),
                        o = xt.getCookie(Oe.OPTANON_CONSENT);
                    xt.setCookie(Oe.OPTANON_CONSENT, o, e, !1, new Date(t)), to.needReconsent() & amp; & amp;
                    xt.removeAlertBox();
                    var n = xt.getCookie(Oe.EU_PUB_CONSENT);
                    n & amp; & amp;
                    (to.isIABCrossConsentEnabled() ? xt.removeIab2() : xt.setCookie(Oe.EU_PUB_CONSENT, n, e, !1, new Date(t)));
                    var r = xt.getCookie(Oe.ADDITIONAL_CONSENT_STRING);
                    r & amp; & amp;
                    xt.setCookie(Oe.ADDITIONAL_CONSENT_STRING, r, e, !1, new Date(t))
                }
            }, Zt.prototype.syncOtPreviewCookie = function() {
                var e = xt.getCookie(Oe.OT_PREVIEW);
                e & amp; & amp;
                xt.setCookie(Oe.OT_PREVIEW, e, 1, !1)
            }, Zt.prototype.dispatchConsentEvent = function() {
                window.dispatchEvent(new CustomEvent("OTConsentApplied", {
                    OTConsentApplied: "yes"
                }))
            }, Zt),
            oo = (no.prototype.isAlwaysActiveGroup = function(e) {
                if (this.getGrpStatus(e)) {
                    var t = this.getGrpStatus(e).toLowerCase();
                    return e.Parent & amp; & amp;
                    t !== qe & amp; & amp;
                    (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()), t === qe
                }
                return !0
            }, no.prototype.getGrpStatus = function(e) {
                return e & amp; & amp;
                e.Status ? Ft.DNTEnabled & amp; & amp;
                e.IsDntEnabled ? ze : e.Status: ""
            }, no.prototype.getParentGroup = function(t) {
                if (t) {
                    var e = Rt.Groups.filter(function(e) {
                        return e.OptanonGroupId === t
                    });
                    return 0 & lt;
                    e.length ? e[0] : null
                }
                return null
            }, no.prototype.checkIfGroupHasConsent = function(t) {
                var e = Mt.groupsConsent,
                    o = Gt.findIndex(e, function(e) {
                        return e.split(":")[0] === t.CustomGroupId
                    });
                return -1 & lt;
                o & amp; & amp;
                "1" === e[o].split(":")[1]
            }, no.prototype.checkIsActiveByDefault = function(e) {
                if (this.getGrpStatus(e)) {
                    var t = this.getGrpStatus(e).toLowerCase();
                    return e.Parent & amp; & amp;
                    t !== qe & amp; & amp;
                    (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()), t === qe || t === Ue || t === Me || t === ze & amp; & amp;
                    !Ft.DNTEnabled
                }
                return !0
            }, no.prototype.getGroupById = function(e) {
                for (var t = null, o = 0, n = Rt.Groups; o & lt; n.length; o++) {
                    for (var r = n[o], i = 0, s = y(r.SubGroups, [r]); i & lt; s.length; i++) {
                        var a = s[i];
                        if (a.CustomGroupId === e) {
                            t = a;
                            break
                        }
                    }
                    if (t) break
                }
                return t
            }, no.prototype.isSoftOptInGrp = function(e) {
                if (e) {
                    var t = e & amp; & amp;
                    !e.Parent ? e : eo.getParentGroup(e.Parent);
                    return "inactive landingpage" === eo.getGrpStatus(t).toLowerCase()
                }
                return !1
            }, no.prototype.isOptInGrp = function(e) {
                return !!e & amp; & amp;
                "inactive" === eo.getGrpStatus(e).toLowerCase()
            }, no.prototype.getParentByGrp = function(e) {
                return e.Parent ? this.getGroupById(e.Parent) : null
            }, no.prototype.getVSById = function(e) {
                return Mt.getVendorsInDomain().get(e)
            }, no.prototype.getGrpByVendorId = function(e) {
                var t = null;
                return Mt.getVendorsInDomain().has(e) & amp; & amp;
                (t = Mt.getVendorsInDomain().get(e).groupRef), t
            }, no);

        function no() {}
        var ro, io = (so.prototype.ensureConsentId = function(e, t) {
            var o, n = !1,
                r = xt.readCookieParam(Oe.OPTANON_CONSENT, Ve, !0);
            if (o = !e & amp; & amp; t ? (n = !0, 1) : 0, r) {
                var i = parseInt(xt.readCookieParam(Oe.OPTANON_CONSENT, Ee), 10);
                isNaN(i) || (o = t ? ++i : i, n = !1)
            } else r = Gt.generateUUID(), xt.writeCookieParam(Oe.OPTANON_CONSENT, Ve, r);
            return xt.writeCookieParam(Oe.OPTANON_CONSENT, Ee, o), {
                id: r,
                count: o,
                addDfltInt: n
            }
        }, so.prototype.isAnonymousConsent = function() {
            var e = !0,
                t = Mt.dsParams;
            return t & amp; & amp;
            t.hasOwnProperty("isAnonymous") & amp; & amp;
            (e = t.isAnonymous), e
        }, so.prototype.isAuthUsr = function(e) {
            Mt.consentPreferences ? xt.writeCookieParam(Oe.OPTANON_CONSENT, "iType", "") : xt.writeCookieParam(Oe.OPTANON_CONSENT, "iType", "" + U[e])
        }, so.prototype.createConsentTxn = function(e, t, o, n) {
            void 0 === t & amp; & amp;
            (t = ""), void 0 === o & amp; & amp;
            (o = !1), void 0 === n & amp; & amp;
            (n = !0);
            var r = this.ensureConsentId(e, n),
                i = Rt.ConsentIntegration,
                s = window.navigator.userAgent,
                a = /OneTrustBot/.test(s);
            if (i.ConsentApi & amp; & amp; i.RequestInformation & amp; & amp; r.id & amp; & amp; !a) {
                var l = Bt.moduleInitializer;
                ro.noOptOutToogle = l.TenantFeatures.CookieV2NoOptOut;
                var c = Mt.bannerCloseSource;
                ro.isCloseByIconOrLink = c === f.BannerCloseButton || c === f.ContinueWithoutAcceptingButton;
                var d = {
                    requestInformation: i.RequestInformation,
                    identifier: r.id,
                    customPayload: {
                        Interaction: r.count,
                        AddDefaultInteraction: r.addDfltInt
                    },
                    isAnonymous: this.isAnonymousConsent(),
                    test: l.ScriptType === We || l.ScriptType === Je,
                    purposes: this.getConsetPurposes(e),
                    dsDataElements: {}
                };
                Mt.isV2Stub & amp; & amp;
                (d.syncGroup = Mt.syncGrpId, "IAB2" !== Ft.iabType || to.isIABCrossConsentEnabled() || (d.tcStringV2 = xt.getCookie(Oe.EU_PUB_CONSENT)), Rt.UseGoogleVendors & amp; & amp;
                    (d.gacString = xt.getCookie(Oe.ADDITIONAL_CONSENT_STRING)));
                var u = eo.getGroupById(Rt.AdvancedAnalyticsCategory);
                if (u & amp; & amp; this.canSendAdvancedAnalytics(d.purposes, u) & amp; & amp;
                    (d.dsDataElements = {
                        InteractionType: t,
                        Country: Mt & amp; & amp;Mt.userLocation ? Mt.userLocation.country : "",
                        UserAgent: s
                    }), !l.MobileSDK & amp; & amp; n & amp; & amp; d.purposes.length) {
                    var p = JSON.stringify(d);
                    e & amp; & amp;
                    navigator.sendBeacon ? (navigator.sendBeacon(i.ConsentApi, p), to.dispatchConsentEvent()) : !o & amp; & amp;
                    Ft.apiSource !== P.UpdateConsent & amp; & amp;
                    Mt.consentInteractionType === t || (Mt.isV2Stub & amp; & amp; t & amp; & amp; this.isAuthUsr(t), Ut.ajax({
                        url: i.ConsentApi,
                        type: "post",
                        dataType: "json",
                        contentType: "application/json",
                        data: JSON.stringify(d),
                        sync: e,
                        success: function() {
                            to.dispatchConsentEvent()
                        },
                        error: function() {
                            to.dispatchConsentEvent()
                        }
                    }))
                }
                Ft.pubDomainData.ConsentIntegrationData = {
                    consentApi: i.ConsentApi,
                    consentPayload: d
                }
            }
            Mt.consentInteractionType = t
        }, so.prototype.getGrpDetails = function(e, i) {
            var s = [];
            return e.forEach(function(e) {
                var t = e.split(":"),
                    o = t[0],
                    n = "true" === t[1] ? "1" : "0",
                    r = ro.getOptanonIdForIabGroup(o, i);
                s.push(r + ":" + n)
            }), s
        }, so.prototype.getOptanonIdForIabGroup = function(e, t) {
            var o;
            return t === A.Purpose ? o = "IABV2_" + e : t === A.SpecialFeature & amp; & amp;
            (o = "ISFV2_" + e), o
        }, so.prototype.getConsetPurposes = function(r) {
            var e, t, i = this,
                s = [],
                o = [],
                n = Mt.oneTrustIABConsent;
            return e = n & amp; & amp;
            n.purpose ? this.getGrpDetails(n.purpose, A.Purpose) : [], t = n & amp; & amp;
            n.specialFeatures ? this.getGrpDetails(n.specialFeatures, A.SpecialFeature) : [], o = y(n.specialPurposes, n.features), y(Mt.groupsConsent, e, t).forEach(function(e) {
                var t = e.split(":"),
                    o = eo.getGroupById(t[0]);
                if (o & amp; & amp; o.PurposeId) {
                    var n = i.getTransactionType(o, t, r);
                    s.push({
                        Id: o.PurposeId,
                        TransactionType: n.txnType
                    }), i.setVSConsentByGroup(o, n).forEach(function(e) {
                        return s.push(e)
                    })
                }
            }), o.forEach(function(e) {
                e.purposeId & amp; & amp;
                s.push({
                    Id: e.purposeId,
                    TransactionType: He
                })
            }), Mt.bannerCloseSource = f.Unknown, s
        }, so.prototype.setVSConsentByGroup = function(e, o) {
            var n = [];
            return Mt.showVendorService & amp; & amp;
            e.VendorServices & amp; & amp;
            e.VendorServices.forEach(function(e) {
                var t;
                t = o.useOwn ? Mt.vsConsent.get(e.CustomVendorServiceId) ? Ne : De : o.txnType, n.push({
                    Id: e.PurposeId,
                    TransactionType: t
                })
            }), n
        }, so.prototype.getTransactionType = function(e, t, o) {
            var n = {
                txnType: He,
                useOwn: !1
            };
            return e.Status === qe ? n.txnType = He : e.Status === je & amp; & amp;
            ro.isCloseByIconOrLink || o ? n.txnType = Fe : e.Status === Me & amp; & amp;
            ro.isCloseByIconOrLink ? n.txnType = ro.noOptOutToogle ? Re : Ne : (n.useOwn = !0, n.txnType = this.getTxnType(t[1])), n
        }, so.prototype.getTxnType = function(e) {
            return "0" === e ? De : Ne
        }, so.prototype.isPurposeConsentedTo = function(e, t) {
            var o = [Ne, He];
            return e.some(function(e) {
                return e.Id === t.PurposeId & amp; & amp; - 1 !== o.indexOf(e.TransactionType)
            })
        }, so.prototype.canSendAdvancedAnalytics = function(t, e) {
            var o = this;
            return "BRANCH" === e.Type || "IAB2_STACK" === e.Type ? e.SubGroups.length & amp; & amp;
            e.SubGroups.every(function(e) {
                return o.isPurposeConsentedTo(t, e)
            }): this.isPurposeConsentedTo(t, e)
        }, so);

        function so() {}
        var ao, lo = (co.prototype.isIabCookieValid = function() {
            var e = null;
            switch (Ft.iabType) {
                case "IAB2":
                    e = xt.getCookie("eupubconsent-v2")
            }
            return null !== e
        }, co.prototype.iabTypeIsChanged = function() {
            this.isIabCookieValid() || (xt.removeAlertBox(), xt.removeIab1())
        }, co.prototype.initializeIABModule = function() {
            return c(this, void 0, void 0, function() {
                return C(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return Rt.IsIabEnabled ? (Bt.moduleInitializer.otIABModuleData = window.otIabModule, to.setIabData(), [4, to.populateVendorListTCF()]) : [3, 2];
                        case 1:
                            return e.sent(), to.isIABCrossConsentEnabled() || this.iabTypeIsChanged(), to.populateIABCookies(), Rt.UseGoogleVendors & amp; & amp;
                            this.removeInActiveAddtlVendors(), [3, 3];
                        case 2:
                            xt.removeIab1(), e.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
        }, co.prototype.removeInActiveAddtlVendors = function() {
            var e = Rt.OverridenGoogleVendors;
            for (var t in Mt.addtlVendorsList) e & amp; & amp;
            e[t] & amp; & amp;
            !e[t].active & amp; & amp;
            delete Mt.addtlVendorsList[t]
        }, co.prototype.getIABConsentData = function() {
            var e = Mt.oneTrustIABConsent,
                t = to.iabStringSDK().tcString();
            Mt.tcModel.unsetAllPurposeConsents(), Mt.tcModel.unsetAllVendorConsents(), Mt.tcModel.unsetAllVendorLegitimateInterests(), Mt.tcModel.unsetAllSpecialFeatureOptins(), Mt.tcModel.unsetAllPurposeLegitimateInterests(), Mt.tcModel.publisherConsents.empty(), Mt.tcModel.publisherLegitimateInterests.empty(), Mt.tcModel.purposeConsents.set(Gt.getActiveIdArray(e.purpose)), Mt.tcModel.publisherConsents.set(Gt.getActiveIdArray(e.purpose));
            var o = Ft.legIntSettings.PAllowLI ? Gt.getActiveIdArray(e.legimateInterest) : [];
            Mt.tcModel.purposeLegitimateInterests.set(o), Mt.tcModel.publisherLegitimateInterests.set(o), Mt.tcModel.vendorConsents.set(Gt.getActiveIdArray(Gt.distinctArray(e.vendors))), Ft.legIntSettings.PAllowLI & amp; & amp;
            !o.length & amp; & amp;
            (e.legIntVendors = []), Mt.tcModel.vendorLegitimateInterests.set(Gt.getActiveIdArray(Gt.distinctArray(e.legIntVendors))), Mt.tcModel.specialFeatureOptins.set(Gt.getActiveIdArray(e.specialFeatures));
            var n = new Date,
                r = new Date(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), 0, 0, 0);
            Mt.tcModel.lastUpdated = r, Mt.tcModel.created = r;
            var i = t.encode(Mt.tcModel);
            return Mt.cmpApi.update(i, !1), i
        }, co.prototype.decodeTCString = function(e) {
            return to.iabStringSDK().tcString().decode(e)
        }, co.prototype.getVendorConsentsRequestV2 = function(e) {
            var o;
            return window.__tcfapi("getInAppTCData", 2, function(e, t) {
                o = [e, t]
            }), e.apply(this, o)
        }, co.prototype.getPingRequestForTcf = function(e) {
            var t;
            return window.__tcfapi("ping", 2, function(e) {
                t = [e]
            }), e.apply(this, t)
        }, co.prototype.populateVendorAndPurposeFromCookieData = function() {
            var r = Mt.oneTrustIABConsent,
                e = ao.decodeTCString(r.IABCookieValue),
                i = {},
                s = {};
            Ft.iabGrps.forEach(function(e) {
                e.Type === bt ? i[Ft.iabGrpIdMap[e.CustomGroupId]] = e : e.Type === Pt & amp; & amp;
                (s[Ft.iabGrpIdMap[e.CustomGroupId]] = e)
            });
            var a = [];
            e.vendorConsents.forEach(function(e, t) {
                var o = e;
                Mt.vendorsSetting[t] & amp; & amp;
                Mt.vendorsSetting[t].consent || !e || (a.push(t), o = !1), r.vendors.push(t + ":" + o)
            }), e.vendorConsents.unset(a), a = [], e.vendorLegitimateInterests.forEach(function(e, t) {
                var o = e;
                Mt.vendorsSetting[t] & amp; & amp;
                Mt.vendorsSetting[t].legInt || !e || (a.push(t), o = !1), r.legIntVendors.push(t + ":" + o)
            }), e.vendorLegitimateInterests.unset(a), a = [], e.purposeConsents.forEach(function(e, o) {
                var t = e;
                i[o] & amp; & amp;
                i[o].HasConsentOptOut || !e || (a.push(o), t = !1);
                var n = Gt.findIndex(r.purpose, function(e, t) {
                    return e.split(":")[0] === o.toString()
                }); - 1 === n ? r.purpose.push(o + ":" + t) : r.purpose[n] = o + ":" + t
            }), e.purposeConsents.unset(a), e.publisherConsents.unset(a), a = [], e.specialFeatureOptins.forEach(function(e, o) {
                var t = e;
                s[o] & amp; & amp;
                s[o].HasConsentOptOut || !e || (a.push(o), t = !1);
                var n = Gt.findIndex(r.specialFeatures, function(e, t) {
                    return e.split(":")[0] === o.toString()
                }); - 1 === n ? r.specialFeatures.push(o + ":" + t) : r.specialFeatures[n] = o + ":" + t
            }), e.specialFeatureOptins.unset(a), a = [], e.purposeLegitimateInterests.forEach(function(e, o) {
                var t = e;
                i[o] & amp; & amp;
                i[o].HasLegIntOptOut & amp; & amp;
                Ft.legIntSettings.PAllowLI || !e || (a.push(o), t = !1);
                var n = Gt.findIndex(r.legimateInterest, function(e, t) {
                    return e.split(":")[0] === o.toString()
                }); - 1 === n ? r.legimateInterest.push(o + ":" + t) : r.legimateInterest[n] = o + ":" + t
            }), e.purposeLegitimateInterests.unset(a), e.publisherLegitimateInterests.unset(a), this.syncBundleAndStack(), e.gvl = Mt.tcModel.gvl, e.isServiceSpecific = !to.isIABCrossConsentEnabled(), Mt.tcModel = e;
            var t = to.iabStringSDK().tcString().encode(e);
            to.isAlertBoxClosedAndValid() ? (r.IABCookieValue !== t & amp; & amp;
                (r.IABCookieValue = t, to.isIABCrossConsentEnabled() ? to.setIAB3rdPartyCookie(Oe.EU_CONSENT, r.IABCookieValue, Rt.ReconsentFrequencyDays, !1) : xt.setCookie(Oe.EU_PUB_CONSENT, r.IABCookieValue, Rt.ReconsentFrequencyDays)), Mt.cmpApi.update(t, !1)) : to.resetTCModel()
        }, co.prototype.syncBundleAndStack = function() {
            var e = xt.readCookieParam(Oe.OPTANON_CONSENT, "groups");
            Mt.groupsConsent = Gt.strToArr(e), Rt.Groups.forEach(function(t) {
                if (t.Type === vt || t.Type === At) {
                    var e = Kt.isBundleOrStackActive(t),
                        o = Gt.findIndex(Mt.groupsConsent, function(e) {
                            return e.split(":")[0] === t.CustomGroupId
                        }),
                        n = t.CustomGroupId + ":" + Number(e); - 1 & lt;
                    o ? Mt.groupsConsent[o] = n : Mt.groupsConsent.push(n)
                }
            }), xt.writeCookieParam(Oe.OPTANON_CONSENT, "groups", Mt.groupsConsent.join(","))
        }, co.prototype.populateGoogleConsent = function() {
            if (Rt.UseGoogleVendors) {
                var e = xt.getCookie(Oe.ADDITIONAL_CONSENT_STRING);
                e & amp; & amp;
                (Mt.isAddtlConsent = !0, Mt.addtlVendors.vendorConsent = e.replace(Mt.addtlConsentVersion, "").split("."))
            }
        }, co.prototype.isInitIABCookieData = function(e) {
            return "init" === e || to.needReconsent()
        }, co.prototype.updateFromGlobalConsent = function(e) {
            var t = Mt.oneTrustIABConsent;
            t.IABCookieValue = e, t.purpose = t.purpose || [], t.specialFeatures = t.specialFeatures || [], t.legIntVendors = [], t.legimateInterest = t.legimateInterest || [], t.vendors = [], ao.populateVendorAndPurposeFromCookieData(), xt.setCookie(Oe.EU_PUB_CONSENT, "", -1)
        }, co);

        function co() {}
        var uo, po = "groups",
            ho = "hosts",
            go = "genVendors",
            Co = "vs",
            yo = (fo.prototype.writeHstParam = function(e, t) {
                void 0 === t & amp; & amp;
                (t = null), xt.writeCookieParam(e, "hosts", Gt.arrToStr(t || Mt.hostsConsent))
            }, fo.prototype.writeGenVenCookieParam = function(e) {
                var t = Rt.GeneralVendors,
                    o = Mt.genVendorsConsent,
                    n = "";
                t.forEach(function(e) {
                    n += e.VendorCustomId + ":" + (o[e.VendorCustomId] ? "1" : "0") + ","
                }), xt.writeCookieParam(e, "genVendors", n)
            }, fo.prototype.writeVSConsentCookieParam = function(e) {
                var o = "";
                Mt.vsConsent.forEach(function(e, t) {
                    return o += t + ":" + (e ? "1" : "0") + ","
                }), o = o.slice(0, -1), xt.writeCookieParam(e, Co, o)
            }, fo.prototype.updateGroupsInCookie = function(e, t) {
                void 0 === t & amp; & amp;
                (t = null), xt.writeCookieParam(e, "groups", Gt.arrToStr(t || Mt.groupsConsent))
            }, fo.prototype.writeGrpParam = function(e, t) {
                void 0 === t & amp; & amp;
                (t = null), this.updateGroupsInCookie(e, t), Rt.IsIabEnabled & amp; & amp;
                to.isAlertBoxClosedAndValid() & amp; & amp;
                this.insertOrUpdateIabCookies()
            }, fo.prototype.insertOrUpdateIabCookies = function() {
                var e = Mt.oneTrustIABConsent;
                if (e.purpose & amp; & amp; e.vendors) {
                    Mt.isAddtlConsent = Rt.UseGoogleVendors, e.IABCookieValue = ao.getIABConsentData();
                    var t = Rt.ReconsentFrequencyDays;
                    to.isIABCrossConsentEnabled() ? to.setIAB3rdPartyCookie(Oe.EU_CONSENT, e.IABCookieValue, t, !1) : (xt.setCookie(Oe.EU_PUB_CONSENT, e.IABCookieValue, t), Rt.UseGoogleVendors & amp; & amp; xt.setCookie(Oe.ADDITIONAL_CONSENT_STRING, "" + Mt.addtlConsentVersion + Mt.addtlVendors.vendorConsent.join("."), t))
                }
            }, fo);

        function fo() {}
        var vo, ko = (mo.prototype.initGenVendorConsent = function() {
            var n = this;
            if (Rt.GenVenOptOut) {
                var e = Ft.consentableGrps,
                    t = xt.readCookieParam(Oe.OPTANON_CONSENT, "genVendors");
                t ? (Mt.genVendorsConsent = {}, t.split(",").forEach(function(e) {
                    if (e) {
                        var t = e.split(":");
                        "1" === t[1] & amp; & amp;
                        (Mt.genVendorsConsent[t[0]] = !0)
                    }
                })) : (Mt.genVendorsConsent = {}, e.forEach(function(e) {
                    var o = Mt.syncRequired ? eo.checkIfGroupHasConsent(e) : eo.checkIsActiveByDefault(e);
                    e.GeneralVendorsIds & amp; & amp;
                    e.GeneralVendorsIds.length & amp; & amp;
                    e.GeneralVendorsIds.forEach(function(e) {
                        var t = n.isGenVenPartOfAlwaysActiveGroup(e);
                        Mt.genVendorsConsent[e] = t || o
                    })
                }))
            } else Mt.genVendorsConsent = {}, uo.writeGenVenCookieParam(Oe.OPTANON_CONSENT)
        }, mo.prototype.populateGenVendorLists = function() {
            Ft.consentableGrps.forEach(function(e) {
                e.GeneralVendorsIds & amp; & amp;
                (eo.isAlwaysActiveGroup(e) ? e.GeneralVendorsIds.forEach(function(e) {
                    Mt.alwaysActiveGenVendors.push(e)
                }) : eo.isOptInGrp(e) ? e.GeneralVendorsIds.forEach(function(e) {
                    Mt.optInGenVendors.push(e)
                }) : eo.isSoftOptInGrp(e) & amp; & amp; e.GeneralVendorsIds.forEach(function(e) {
                    Mt.optInGenVendors.includes(e) || Mt.softOptInGenVendors.push(e)
                }))
            })
        }, mo.prototype.updateGenVendorStatus = function(e, t) {
            Mt.genVendorsConsent[e] = t || this.isGenVenPartOfAlwaysActiveGroup(e)
        }, mo.prototype.isGenVenPartOfAlwaysActiveGroup = function(e) {
            return Mt.alwaysActiveGenVendors.includes(e)
        }, mo);

        function mo() {}
        var bo, Po = (So.prototype.synchroniseCookieGroupData = function(e) {
            var t = xt.readCookieParam(Oe.OPTANON_CONSENT, "groups"),
                a = Gt.strToArr(t),
                l = Gt.strToArr(t.replace(/:0|:1/g, "")),
                c = to.needReconsent(),
                d = !to.isAlertBoxClosedAndValid(),
                u = !1,
                p = !1;
            e.forEach(function(e) {
                var t = e.CustomGroupId,
                    o = e.Type === vt || e.Type === At;
                if (-1 === Gt.indexOf(l, t)) {
                    if (o & amp; & amp; Rt.IsIabEnabled) return;
                    var n;
                    n = e.Type === vt ? Kt.isBundleOrStackActive(e, a) : (u = !0, eo.checkIsActiveByDefault(e)), p = !0, a.push(t + (n ? ":1" : ":0"))
                } else {
                    if (Ft.gpcEnabled & amp; & amp; e.IsGpcEnabled & amp; & amp;
                        (d || c)) - 1 & lt;
                    (i = a.indexOf(t + ":1")) & amp; & amp;
                    (p = !0, a[i] = t + ":0");
                    else if (Ft.gpcValueChanged & amp; & amp; d) {
                        var r = eo.checkIsActiveByDefault(e); - 1 & lt;
                        (i = a.indexOf(t + ":" + (r ? "0" : "1"))) & amp; & amp;
                        (p = !0, a[i] = t + (r ? ":1" : ":0"))
                    }
                    if (c & amp; & amp;
                        "false" === to.getIABCrossConsentflagData() & amp; & amp; o) {
                        var i, s = Kt.isBundleOrStackActive(e, a); - 1 & lt;
                        (i = a.indexOf(t + ":" + (s ? "0" : "1"))) & amp; & amp;
                        (p = !0, a[i] = t + (s ? ":1" : ":0"))
                    }
                }
            });
            for (var o = a.length, n = function() {
                    var t = a[o].replace(/:0|:1/g, "");
                    Rt.Groups.some(function(e) {
                        return (!c || e.Type !== At) & amp; & amp;
                        (e.CustomGroupId === t || e.SubGroups.some(function(e) {
                            return e.CustomGroupId === t
                        }))
                    }) || (p = !0, a.splice(o, 1))
                }; o--;) n();
            p & amp; & amp;
            (Mt.fireOnetrustGrp = !0, uo.updateGroupsInCookie(Oe.OPTANON_CONSENT, a), Mt.syncRequired & amp; & amp; u & amp; & amp; xt.removeAlertBox())
        }, So.prototype.groupHasConsent = function(t) {
            var e = Gt.strToArr(xt.readCookieParam(Oe.OPTANON_CONSENT, "groups")),
                o = Gt.findIndex(e, function(e) {
                    return e.split(":")[0] === t.CustomGroupId
                });
            return -1 & lt;
            o & amp; & amp;
            "1" === e[o].split(":")[1]
        }, So.prototype.synchroniseCookieHostData = function() {
            var n = this,
                e = xt.readCookieParam(Oe.OPTANON_CONSENT, "hosts"),
                r = Gt.strToArr(e),
                i = Gt.strToArr(e.replace(/:0|:1/g, "")),
                s = !1;
            Rt.Groups.forEach(function(e) {
                y(e.SubGroups, [e]).forEach(function(o) {
                    o.Hosts.length & amp; & amp;
                    o.Hosts.forEach(function(e) {
                        if (-1 === Gt.indexOf(i, e.HostId)) {
                            s = !0;
                            var t = Mt.syncRequired ? n.groupHasConsent(o) : eo.checkIsActiveByDefault(o);
                            r.push(e.HostId + (t ? ":1" : ":0"))
                        }
                    })
                })
            });
            for (var o = r.length, t = function() {
                    var t = r[o].replace(/:0|:1/g, "");
                    Rt.Groups.some(function(e) {
                        return y(e.SubGroups, [e]).some(function(e) {
                            return e.Hosts.some(function(e) {
                                return e.HostId === t
                            })
                        })
                    }) || (s = !0, r.splice(o, 1))
                }; o--;) t();
            s & amp; & amp;
            (Mt.fireOnetrustGrp = !0, uo.writeHstParam(Oe.OPTANON_CONSENT, r))
        }, So.prototype.toggleGroupHosts = function(e, t) {
            var o = this;
            e.Hosts.forEach(function(e) {
                o.updateHostStatus(e, t)
            })
        }, So.prototype.toggleGroupGenVendors = function(e, t) {
            e.GeneralVendorsIds.forEach(function(e) {
                vo.updateGenVendorStatus(e, t)
            })
        }, So.prototype.updateHostStatus = function(t, e) {
            var o = Gt.findIndex(Mt.hostsConsent, function(e) {
                return !t.isActive & amp; & amp;
                t.HostId === e.replace(/:0|:1/g, "")
            });
            if (-1 & lt; o) {
                var n = e || this.isHostPartOfAlwaysActiveGroup(t.HostId);
                Mt.hostsConsent[o] = t.HostId + ":" + (n ? "1" : "0")
            }
        }, So.prototype.isHostPartOfAlwaysActiveGroup = function(e) {
            return Mt.oneTrustAlwaysActiveHosts.includes(e)
        }, So);

        function So() {}
        var Ao, To = function() {
                this.assets = function() {
                    return {
                        name: "otCookiePolicy",
                        html: '&lt;div class="ot-sdk-cookie-policy ot-sdk-container"&gt;\n    &lt;h3 id="cookie-policy-title"&gt;Cookie Tracking Table&lt;/h3&gt;\n    &lt;div id="cookie-policy-description"&gt;&lt;/div&gt;\n    &lt;section&gt;\n        &lt;h4 class="ot-sdk-cookie-policy-group"&gt;Strictly Necessary Cookies&lt;/h4&gt;\n        &lt;p class="ot-sdk-cookie-policy-group-desc"&gt;group description&lt;/p&gt;\n        &lt;h5 class="cookies-used-header"&gt;Cookies Used&lt;/h5&gt;\n        &lt;ul class="cookies-list"&gt;\n            &lt;li&gt;Cookie 1&lt;/li&gt;\n        &lt;/ul&gt;\n        &lt;table&gt;\n            &lt;caption class="ot-scrn-rdr"&gt;caption&lt;/caption&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &lt;th scope="col" class="table-header host"&gt;Host&lt;/th&gt;\n                    &lt;th scope="col" class="table-header host-description"&gt;Host Description&lt;/th&gt;\n                    &lt;th scope="col" class="table-header cookies"&gt;Cookies&lt;/th&gt;\n                    &lt;th scope="col" class="table-header life-span"&gt;Life Span&lt;/th&gt;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &lt;tr&gt;\n                    &lt;td class="host-td" data-label="Host"&gt;&lt;span class="ot-mobile-border"&gt;&lt;/span&gt;&lt;a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&amp;_ga=2.157675898.1572084395.1556120090-1266459230.1555593548"&gt;Azure&lt;/a&gt;\n                    &lt;/td&gt;\n                    &lt;td class="host-description-td" data-label="Host Description"&gt;&lt;span\n                            class="ot-mobile-border"&gt;&lt;/span&gt;These\n                        cookies are used to make sure\n                        visitor page requests are routed to the same server in all browsing sessions.&lt;/td&gt;\n                    &lt;td class="cookies-td" data-label="Cookies"&gt;\n                        &lt;span class="ot-mobile-border"&gt;&lt;/span&gt;\n                        &lt;ul&gt;\n                            &lt;li&gt;ARRAffinity&lt;/li&gt;\n                        &lt;/ul&gt;\n                    &lt;/td&gt;\n                    &lt;td class="life-span-td" data-label="Life Span"&gt;&lt;span class="ot-mobile-border"&gt;&lt;/span&gt;\n                        &lt;ul&gt;\n                            &lt;li&gt;100 days&lt;/li&gt;\n                        &lt;/ul&gt;\n                    &lt;/td&gt;\n                &lt;/tr&gt;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n    &lt;/section&gt;\n    &lt;section class="subgroup"&gt;\n        &lt;h5 class="ot-sdk-cookie-policy-group"&gt;Strictly Necessary Cookies&lt;/h5&gt;\n        &lt;p class="ot-sdk-cookie-policy-group-desc"&gt;description&lt;/p&gt;\n        &lt;h6 class="cookies-used-header"&gt;Cookies Used&lt;/h6&gt;\n        &lt;ul class="cookies-list"&gt;\n            &lt;li&gt;Cookie 1&lt;/li&gt;\n        &lt;/ul&gt;\n        &lt;table&gt;\n            &lt;caption class="ot-scrn-rdr"&gt;caption&lt;/caption&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &lt;th scope="col" class="table-header host"&gt;Host&lt;/th&gt;\n                    &lt;th scope="col" class="table-header host-description"&gt;Host Description&lt;/th&gt;\n                    &lt;th scope="col" class="table-header cookies"&gt;Cookies&lt;/th&gt;\n                    &lt;th scope="col" class="table-header life-span"&gt;Life Span&lt;/th&gt;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &lt;tr&gt;\n                    &lt;td class="host-td" data-label="Host"&gt;&lt;span class="ot-mobile-border"&gt;&lt;/span&gt;&lt;a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&amp;_ga=2.157675898.1572084395.1556120090-1266459230.1555593548"&gt;Azure&lt;/a&gt;\n                    &lt;/td&gt;\n                    &lt;td class="host-description-td" data-label="Host Description"&gt;\n                        &lt;span class="ot-mobile-border"&gt;&lt;/span&gt;\n                        cookies are used to make sureng sessions.\n                    &lt;/td&gt;\n                    &lt;td class="cookies-td" data-label="Cookies"&gt;\n                        &lt;span class="ot-mobile-border"&gt;&lt;/span&gt;\n                        &lt;ul&gt;\n                            &lt;li&gt;ARRAffinity&lt;/li&gt;\n                        &lt;/ul&gt;\n                    &lt;/td&gt;\n                    &lt;td class="life-span-td" data-label="Life Span"&gt;&lt;span class="ot-mobile-border"&gt;&lt;/span&gt;\n                        &lt;ul&gt;\n                            &lt;li&gt;100 days&lt;/li&gt;\n                        &lt;/ul&gt;\n                    &lt;/td&gt;\n                &lt;/tr&gt;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n    &lt;/section&gt;\n&lt;/div&gt;\n\x3c!-- New Cookies policy Link--\x3e\n&lt;div id="ot-sdk-cookie-policy-v2" class="ot-sdk-cookie-policy ot-sdk-container"&gt;\n    &lt;h3 id="cookie-policy-title" class="ot-sdk-cookie-policy-title"&gt;Cookie Tracking Table&lt;/h3&gt;\n    &lt;div id="cookie-policy-description"&gt;&lt;/div&gt;\n    &lt;section&gt;\n        &lt;h4 class="ot-sdk-cookie-policy-group"&gt;Strictly Necessary Cookies&lt;/h4&gt;\n        &lt;p class="ot-sdk-cookie-policy-group-desc"&gt;group description&lt;/p&gt;\n        &lt;section class="ot-sdk-subgroup"&gt;\n            &lt;ul&gt;\n                &lt;li&gt;\n                    &lt;h5 class="ot-sdk-cookie-policy-group"&gt;Strictly Necessary Cookies&lt;/h5&gt;\n                    &lt;p class="ot-sdk-cookie-policy-group-desc"&gt;description&lt;/p&gt;\n                &lt;/li&gt;\n            &lt;/ul&gt;\n        &lt;/section&gt;\n        &lt;table&gt;\n            &lt;caption class="ot-scrn-rdr"&gt;caption&lt;/caption&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &lt;th scope="col" class="ot-table-header ot-host"&gt;Host&lt;/th&gt;\n                    &lt;th scope="col" class="ot-table-header ot-host-description"&gt;Host Description&lt;/th&gt;\n                    &lt;th scope="col" class="ot-table-header ot-cookies"&gt;Cookies&lt;/th&gt;\n                    &lt;th scope="col" class="ot-table-header ot-cookies-type"&gt;Type&lt;/th&gt;\n                    &lt;th scope="col" class="ot-table-header ot-life-span"&gt;Life Span&lt;/th&gt;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &lt;tr&gt;\n                    &lt;td class="ot-host-td" data-label="Host"&gt;&lt;span class="ot-mobile-border"&gt;&lt;/span&gt;&lt;a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&amp;_ga=2.157675898.1572084395.1556120090-1266459230.1555593548"&gt;Azure&lt;/a&gt;\n                    &lt;/td&gt;\n                    &lt;td class="ot-host-description-td" data-label="Host Description"&gt;\n                        &lt;span class="ot-mobile-border"&gt;&lt;/span&gt;\n                        cookies are used to make sureng sessions.\n                    &lt;/td&gt;\n                    &lt;td class="ot-cookies-td" data-label="Cookies"&gt;\n                        &lt;span class="ot-mobile-border"&gt;&lt;/span&gt;\n                        &lt;span class="ot-cookies-td-content"&gt;ARRAffinity&lt;/span&gt;\n                    &lt;/td&gt;\n                    &lt;td class="ot-cookies-type" data-label="Type"&gt;\n                        &lt;span class="ot-mobile-border"&gt;&lt;/span&gt;\n                        &lt;span class="ot-cookies-type-td-content"&gt;1st Party&lt;/span&gt;\n                    &lt;/td&gt;\n                    &lt;td class="ot-life-span-td" data-label="Life Span"&gt;\n                        &lt;span class="ot-mobile-border"&gt;&lt;/span&gt;\n                        &lt;span class="ot-life-span-td-content"&gt;100 days&lt;/span&gt;\n                    &lt;/td&gt;\n                &lt;/tr&gt;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n    &lt;/section&gt;\n&lt;/div&gt;',
                        css: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy&gt;section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-right:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:left}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;left:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;left:6px;width:40%;padding-right:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;left:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-right:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;left:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}",
                        cssRTL: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy&gt;section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-left:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:right}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;right:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-right:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;right:6px;width:40%;padding-left:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;right:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-left:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;right:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}"
                    }
                }
            },
            Io = (Lo.prototype.isLandingPage = function() {
                var e = xt.readCookieParam(Oe.OPTANON_CONSENT, "landingPath");
                return !e || e === location.href
            }, Lo.prototype.setLandingPathParam = function(e) {
                xt.writeCookieParam(Oe.OPTANON_CONSENT, "landingPath", e)
            }, Lo);

        function Lo() {}
        var _o, Vo = "#onetrust-banner-sdk",
            Bo = "#onetrust-pc-sdk",
            Eo = (wo.prototype.BannerPushDownHandler = function() {
                this.checkIsBrowserIE11OrBelow() || (_o.pushPageDown(Vo), zt(window).on("resize", function() {
                    "none" !== zt(Vo).css("display") & amp; & amp;
                    _o.pushPageDown(Vo)
                }))
            }, wo.prototype.pushPageUp = function() {
                zt("body").css("top: 0;")
            }, wo.prototype.checkIsBrowserIE11OrBelow = function() {
                var e = window.navigator.userAgent;
                return 0 & lt;
                e.indexOf("MSIE ") || 0 & lt;
                e.indexOf("Trident/")
            }, wo.prototype.pushPageDown = function(e) {
                var t = zt(e).height() + "px";
                zt(e).show().css("\n            bottom: auto;\n            position: absolute;\n            top: -" + t + ";\n        "), zt("body").css("\n            position: relative;\n            top: " + t + ";\n        ")
            }, wo);

        function wo() {}
        var xo, Go = (Oo.prototype.loadBanner = function() {
            Bt.moduleInitializer.ScriptDynamicLoadEnabled ? "complete" === document.readyState ? zt(window).trigger("otloadbanner") : window.addEventListener("load", function(e) {
                zt(window).trigger("otloadbanner")
            }) : "loading" !== document.readyState ? zt(window).trigger("otloadbanner") : window.addEventListener("DOMContentLoaded", function(e) {
                zt(window).trigger("otloadbanner")
            }), Ft.pubDomainData.IsBannerLoaded = !0
        }, Oo.prototype.OnConsentChanged = function(e) {
            var t = e.toString();
            xo.consentChangedEventMap[t] || (xo.consentChangedEventMap[t] = !0, window.addEventListener("consent.onetrust", e))
        }, Oo.prototype.triggerGoogleAnalyticsEvent = function(e, t, o, n) {
            var r = !1;
            if (Bt.moduleInitializer.GATrackToggle & amp; & amp;
                ("AS" === Bt.moduleInitializer.GATrackAssignedCategory || "" === Bt.moduleInitializer.GATrackAssignedCategory || window.OnetrustActiveGroups.includes("," + Bt.moduleInitializer.GATrackAssignedCategory + ",")) & amp; & amp;
                (r = !0), !Ft.ignoreGoogleAnlyticsCall & amp; & amp; r) {
                void 0 !== window._gaq & amp; & amp;
                window._gaq.push(["_trackEvent", e, t, o, n]), "function" == typeof window.ga & amp; & amp;
                window.ga("send", "event", e, t, o, n);
                var i = window[Ft.otDataLayer.name];
                !Ft.otDataLayer.ignore & amp; & amp;
                void 0 !== i & amp; & amp;
                i & amp; & amp;
                i.constructor === Array & amp; & amp;
                i.push({
                    event: "trackOptanonEvent",
                    optanonCategory: e,
                    optanonAction: t,
                    optanonLabel: o,
                    optanonValue: n
                })
            }
        }, Oo.prototype.setAlertBoxClosed = function(e) {
            var t = (new Date).toISOString();
            e ? xt.setCookie(Oe.ALERT_BOX_CLOSED, t, Rt.ReconsentFrequencyDays) : xt.setCookie(Oe.ALERT_BOX_CLOSED, t, 0), Ft.pagePushedDown & amp; & amp;
            !_o.checkIsBrowserIE11OrBelow() & amp; & amp;
            _o.pushPageUp();
            var o = zt(".onetrust-pc-dark-filter").el[0];
            o & amp; & amp;
            "none" !== getComputedStyle(o).getPropertyValue("display") & amp; & amp;
            zt(".onetrust-pc-dark-filter").fadeOut(400)
        }, Oo.prototype.updateConsentFromCookie = function(t) {
            return c(this, void 0, void 0, function() {
                return C(this, function(e) {
                    return t ? (ao.isInitIABCookieData(t) || ao.updateFromGlobalConsent(t), "init" === t & amp; & amp;
                        (xt.removeIab1(), to.isAlertBoxClosedAndValid() & amp; & amp; to.resetTCModel(), xt.removeAlertBox())) : (to.resetTCModel(), to.updateCrossConsentCookie(!1), to.setIABCookieData()), xo.assetPromise.then(function() {
                        xo.loadBanner()
                    }), [2]
                })
            })
        }, Oo);

        function Oo() {
            var t = this;
            this.consentChangedEventMap = {}, this.assetResolve = null, this.assetPromise = new Promise(function(e) {
                t.assetResolve = e
            })
        }
        var No, Do = "opt-out",
            Ho = "OneTrust Cookie Consent",
            Fo = "Banner Auto Close",
            Ro = "Banner Close Button",
            qo = "Banner - Continue without Accepting",
            Mo = "Banner - Confirm",
            Uo = "Preferences Close Button",
            jo = "Preference Center Opened From Banner",
            zo = "Preference Center Opened From Button",
            Ko = "Preference Center Opened From Function",
            Wo = "Preferences Save Settings",
            Jo = "Vendors List Opened From Function",
            Yo = "Floating Cookie Settings Open Button",
            Xo = "Floating Cookie Settings Close Button",
            Qo = "Preferences Toggle On",
            $o = "Preferences Toggle Off",
            Zo = "General Vendor Toggle On",
            en = "General Vendor Toggle Off",
            tn = "Host Toggle On",
            on = "Host Toggle Off",
            nn = "Preferences Legitimate Interest Objection",
            rn = "Preferences Legitimate Interest Remove Objection",
            sn = "IAB Vendor Toggle ON",
            an = "IAB Vendor Toggle Off",
            ln = "IAB Vendor Legitimate Interest Objection",
            cn = "IAB Vendor Legitimate Interest Remove Objection",
            dn = "Vendor Service Toggle On",
            un = "Vendor Service Toggle Off",
            pn = (hn.prototype.getDataLanguageCulture = function() {
                var e = Ft.bannerScriptElement;
                return e & amp; & amp;
                e.getAttribute(Ye) ? this.checkAndTansformLangCodeWithUnderdscore(e.getAttribute(Ye).toLowerCase()) : this.detectDocumentOrBrowserLanguage().toLowerCase()
            }, hn.prototype.checkAndTansformLangCodeWithUnderdscore = function(e) {
                return e.replace(/\_/, "-")
            }, hn.prototype.detectDocumentOrBrowserLanguage = function() {
                var e = "";
                if (Ft.langSwitcherPldr) {
                    var t = Gt.convertKeyValueLowerCase(Ft.langSwitcherPldr),
                        o = this.getUserLanguage().toLowerCase();
                    if (!(e = t[o] || t[o + "-" + o] || (t.default === o ? t.default : null)))
                        if (2 === o.length)
                            for (var n = 0; n & lt; Object.keys(t).length; n += 1) {
                                var r = Object.keys(t)[n];
                                if (r.substr(0, 2) === o) {
                                    e = t[r];
                                    break
                                }
                            } else 2 & lt;
                    o.length & amp; & amp;
                    (e = t[o.substr(0, 2)]);
                    e = e || t.default
                }
                return e
            }, hn.prototype.getUserLanguage = function() {
                return Ft.useDocumentLanguage ? this.checkAndTansformLangCodeWithUnderdscore(document.documentElement.lang) : navigator.languages & amp; & amp;
                navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage
            }, hn.prototype.isValidLanguage = function(e, t) {
                var o = Gt.convertKeyValueLowerCase(Ft.langSwitcherPldr);
                return !(!o || !o[t] & amp; & amp; !o[t + "-" + t] & amp; & amp; o.default !== t)
            }, hn.prototype.getLangJsonUrl = function(e) {
                void 0 === e & amp; & amp;
                (e = null);
                var t, o = Ft.getRegionRule();
                if (e) {
                    if (e = e.toLowerCase(), !this.isValidLanguage(o, e)) return null
                } else e = this.getDataLanguageCulture();
                return Mt.lang = e, Mt.consentLanguage = e.substr(0, 2), t = Ft.canUseConditionalLogic ? Ft.bannerDataParentURL + "/" + o.Id + "/" + Ft.Condition.Id + "/" + e : Ft.bannerDataParentURL + "/" + o.Id + "/" + e, Ft.multiVariantTestingEnabled & amp; & amp;
                (t = Ft.bannerDataParentURL + "/" + o.Id + "/variants/" + Ft.selectedVariant.Id + "/" + e), t
            }, hn.prototype.populateLangSwitcherPlhdr = function() {
                var e = Ft.getRegionRule();
                if (e) {
                    var t = e.Variants;
                    if (Ft.multiVariantTestingEnabled & amp; & amp; t) {
                        var o = xt.getCookie(Oe.SELECTED_VARIANT),
                            n = void 0;
                        o & amp; & amp;
                        (n = t[Gt.findIndex(t, function(e) {
                            return e.Id === o
                        })]), o & amp; & amp;
                        n || (n = t[Math.floor(Math.random() * t.length)]), Ft.langSwitcherPldr = n.LanguageSwitcherPlaceholder, Ft.selectedVariant = n
                    } else Ft.canUseConditionalLogic ? Ft.langSwitcherPldr = Ft.Condition.LanguageSwitcherPlaceholder : Ft.langSwitcherPldr = e.LanguageSwitcherPlaceholder
                }
            }, hn);

        function hn() {}
        var gn, Cn = (yn.prototype.getLangJson = function(e) {
            void 0 === e & amp; & amp;
            (e = null);
            var t = No.getLangJsonUrl(e);
            return t ? gn.otFetch(t + ".json") : Promise.resolve(null)
        }, yn.prototype.getPersistentCookieSvg = function() {
            var e = Rt.cookiePersistentLogo;
            return e ? gn.otFetch(e, !0) : Promise.resolve(null)
        }, yn.prototype.fetchGvlObj = function() {
            return this.otFetch(Bt.moduleInitializer.IabV2Data.globalVendorListUrl)
        }, yn.prototype.fetchGoogleVendors = function() {
            var e = Kt.updateCorrectIABUrl(Bt.moduleInitializer.GoogleData.googleVendorListUrl);
            return Kt.checkMobileOfflineRequest(Kt.getBannerVersionUrl()) ? Kt.otFetchOfflineFile(Gt.getRelativeURL(e, !0)) : (Ft.mobileOnlineURL.push(e), this.otFetch(e))
        }, yn.prototype.getStorageDisclosure = function(t) {
            return c(this, void 0, void 0, function() {
                return C(this, function(e) {
                    return [2, this.otFetch(t)]
                })
            })
        }, yn.prototype.loadCMP = function() {
            var o = this;
            return new Promise(function(e) {
                var t = o.checkIfRequiresPollyfill() ? "otTCF-ie" : "otTCF";
                Kt.jsonp(Kt.getBannerVersionUrl() + "/" + t + ".js", e, e)
            })
        }, yn.prototype.getCSBtnContent = function() {
            return c(this, void 0, void 0, function() {
                var t, o, n, r;
                return C(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = Rt.useRTL ? ee.RTL : ee.LTR, Mt.csBtnAsset[t] ? [3, 2] : (o = Kt.getBannerSDKAssestsUrl() + "/" + (Rt.useRTL ? Qe : Xe), n = Mt.csBtnAsset, r = t, [4, this.otFetch(o)]);
                        case 1:
                            n[r] = e.sent(), e.label = 2;
                        case 2:
                            return [2, Mt.csBtnAsset[t]]
                    }
                })
            })
        }, yn.prototype.getPcContent = function(s) {
            return void 0 === s & amp; & amp;
            (s = !1), c(this, void 0, void 0, function() {
                var t, o, n, r, i;
                return C(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = Rt.useRTL ? ee.RTL : ee.LTR, Mt.pcAsset[t] & amp; & amp;
                            !s ? [3, 2] : (o = Kt.getBannerSDKAssestsUrl(), Rt.PCTemplateUpgrade & amp; & amp;
                                (o += "/v2"), n = o + "/" + Ft.pcName + (Rt.useRTL ? "Rtl" : "") + ".json", r = Mt.pcAsset, i = t, [4, this.otFetch(n)]);
                        case 1:
                            r[i] = e.sent(), e.label = 2;
                        case 2:
                            return [2, Mt.pcAsset[t]]
                    }
                })
            })
        }, yn.prototype.getBannerContent = function(a, l) {
            return void 0 === a & amp; & amp;
            (a = !1), void 0 === l & amp; & amp;
            (l = null), c(this, void 0, void 0, function() {
                var t, o, n, r, i, s;
                return C(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = Rt.useRTL ? ee.RTL : ee.LTR, o = l || No.getDataLanguageCulture(), Mt.bAsset[t] & amp; & amp;
                            !a ? [3, 2] : (n = Ft.getRegionRule(), r = void 0, Bt.fp.CookieV2SSR ? (r = Ft.bannerDataParentURL + "/" + n.Id, Ft.canUseConditionalLogic & amp; & amp;
                                (r += "/" + Ft.Condition.Id), r += "/bLayout-" + o + ".json") : r = Kt.getBannerSDKAssestsUrl() + "/" + Ft.bannerName + (Rt.useRTL ? "Rtl" : "") + ".json", i = Mt.bAsset, s = t, [4, this.otFetch(r)]);
                        case 1:
                            i[s] = e.sent(), e.label = 2;
                        case 2:
                            return [2, Mt.bAsset[t]]
                    }
                })
            })
        }, yn.prototype.getCommonStyles = function(i) {
            return void 0 === i & amp; & amp;
            (i = !1), c(this, void 0, void 0, function() {
                var t, o, n, r;
                return C(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = Rt.useRTL ? ee.RTL : ee.LTR, Mt.cStyles[t] & amp; & amp;
                            !i ? [3, 2] : (o = Kt.getBannerSDKAssestsUrl() + "/otCommonStyles" + (Rt.useRTL ? "Rtl" : "") + ".css", n = Mt.cStyles, r = t, [4, this.otFetch(o, !0)]);
                        case 1:
                            n[r] = e.sent(), e.label = 2;
                        case 2:
                            return [2, Mt.cStyles[t]]
                    }
                })
            })
        }, yn.prototype.getSyncNtfyContent = function() {
            return c(this, void 0, void 0, function() {
                var t, o, n, r;
                return C(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = Rt.useRTL ? ee.RTL : ee.LTR, Mt.syncNtfyContent[t] ? [3, 2] : (o = Kt.getBannerSDKAssestsUrl() + "/otSyncNotification" + (Rt.useRTL ? "Rtl" : "") + ".json", n = Mt.syncNtfyContent, r = t, [4, this.otFetch(o)]);
                        case 1:
                            n[r] = e.sent(), e.label = 2;
                        case 2:
                            return [2, Mt.syncNtfyContent[t]]
                    }
                })
            })
        }, yn.prototype.getConsentProfile = function(e, t) {
            var o = this,
                n = {
                    Identifier: e,
                    TenantId: Mt.tenantId,
                    Authorization: t
                };
            return new Promise(function(e) {
                o.getJSON(Mt.consentApi, n, e, e)
            })
        }, yn.prototype.checkIfRequiresPollyfill = function() {
            var e = window.navigator.userAgent;
            return 0 & lt;
            e.indexOf("MSIE ") || 0 & lt;
            e.indexOf("Trident/") || "undefined" == typeof Set
        }, yn.prototype.otFetch = function(r, i) {
            return void 0 === i & amp; & amp;
            (i = !1), c(this, void 0, void 0, function() {
                var t, o, n = this;
                return C(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return Kt.checkMobileOfflineRequest(r) ? [4, Kt.otFetchOfflineFile(r)] : [3, 2];
                        case 1:
                            return [2, e.sent()];
                        case 2:
                            return e.trys.push([2, 9, , 10]), Ft.mobileOnlineURL.push(r), "undefined" != typeof fetch ? [3, 3] : [2, new Promise(function(e) {
                                n.getJSON(r, null, e, e, i)
                            })];
                        case 3:
                            return [4, fetch(r)];
                        case 4:
                            return t = e.sent(), i ? [4, t.text()] : [3, 6];
                        case 5:
                            return [2, e.sent()];
                        case 6:
                            return [4, t.json()];
                        case 7:
                            return [2, e.sent()];
                        case 8:
                            return [3, 10];
                        case 9:
                            return o = e.sent(), console.log("Error in fetch URL : " + r + " Exception :" + o), [3, 10];
                        case 10:
                            return [2]
                    }
                })
            })
        }, yn.prototype.getJSON = function(e, t, o, n, r) {
            void 0 === t & amp; & amp;
            (t = null), void 0 === r & amp; & amp;
            (r = !1);
            var i = new XMLHttpRequest;
            if (i.open("GET", e, !0), t)
                for (var s in t) i.setRequestHeader(s, t[s]);
            i.onload = function() {
                if (200 & lt; = this.status & amp; & amp; this.status & lt; 400 & amp; & amp; this.responseText) {
                    var e = void 0;
                    e = r ? this.responseText : JSON.parse(this.responseText), o(e)
                } else n({
                    message: "Error Loading Data",
                    statusCode: this.status
                })
            }, i.onerror = function(e) {
                n(e)
            }, i.send()
        }, yn);

        function yn() {}
        var fn, vn = (new To).assets(),
            kn = (mn.prototype.initializeFeaturesAndSpecialPurposes = function() {
                Mt.oneTrustIABConsent.features = [], Mt.oneTrustIABConsent.specialPurposes = [], Rt.Groups.forEach(function(e) {
                    if ("IAB2_FEATURE" === e.Type || "IAB2_SPL_PURPOSE" === e.Type) {
                        var t = {};
                        t.groupId = e.OptanonGroupId, t.purposeId = e.PurposeId, t.value = !0, "IAB2_FEATURE" === e.Type ? Mt.oneTrustIABConsent.features.push(t) : Mt.oneTrustIABConsent.specialPurposes.push(t)
                    }
                })
            }, mn.prototype.initGrpsAndHosts = function() {
                this.initializeGroupData(Ft.consentableGrps), Rt.showCookieList & amp; & amp;
                Kt.isOptOutEnabled() ? this.initializeHostData(Ft.consentableGrps) : (Mt.hostsConsent = [], uo.writeHstParam(Oe.OPTANON_CONSENT))
            }, mn.prototype.ensureHtmlGroupDataInitialised = function() {
                if (this.initGrpsAndHosts(), Mt.showGeneralVendors & amp; & amp;
                    (vo.populateGenVendorLists(), vo.initGenVendorConsent()), Rt.IsIabEnabled & amp; & amp;
                    (this.initializeIABData(), this.initializeFeaturesAndSpecialPurposes()), Mt.vsIsActiveAndOptOut & amp; & amp; this.initializeVendorsService(), to.setOrUpdate3rdPartyIABConsentFlag(), to.setGeolocationInCookies(), Rt.IsConsentLoggingEnabled) {
                    var e = window.OneTrust.dataSubjectParams || {},
                        t = xt.readCookieParam(Oe.OPTANON_CONSENT, "iType"),
                        o = "",
                        n = !1;
                    t & amp; & amp;
                    Mt.isV2Stub & amp; & amp;
                    e.id & amp; & amp;
                    e.token & amp; & amp;
                    (n = !0, o = U[t]), ro.createConsentTxn(!1, o, !1, n)
                }
            }, mn.prototype.initializeVendorsService = function() {
                var n = to.isAlertBoxClosedAndValid(),
                    e = xt.readCookieParam(Oe.OPTANON_CONSENT, Co),
                    r = Gt.strToMap(e);
                Mt.getVendorsInDomain().forEach(function(e, t) {
                    if (!r.has(t)) {
                        var o = !n & amp; & amp;
                        eo.checkIsActiveByDefault(e.groupRef);
                        r.set(t, o)
                    }
                }), Mt.vsConsent = r
            }, mn.prototype.initializeGroupData = function(e) {
                var t = xt.readCookieParam(Oe.OPTANON_CONSENT, po);
                t ? (bo.synchroniseCookieGroupData(e), t = xt.readCookieParam(Oe.OPTANON_CONSENT, po), Mt.groupsConsent = Gt.strToArr(t)) : (Mt.groupsConsent = [], e.forEach(function(e) {
                    Mt.groupsConsent.push(e.CustomGroupId + (eo.checkIsActiveByDefault(e) & amp; & amp; e.HasConsentOptOut ? ":1" : ":0"))
                }), Rt.IsConsentLoggingEnabled & amp; & amp; window.addEventListener("beforeunload", this.consentDefaulCall))
            }, mn.prototype.initializeHostData = function(e) {
                var t = xt.readCookieParam(Oe.OPTANON_CONSENT, "hosts");
                if (t) bo.synchroniseCookieHostData(), t = xt.readCookieParam(Oe.OPTANON_CONSENT, "hosts"), Mt.hostsConsent = Gt.strToArr(t), e.forEach(function(e) {
                    eo.isAlwaysActiveGroup(e) & amp; & amp;
                    e.Hosts.length & amp; & amp;
                    e.Hosts.forEach(function(e) {
                        Mt.oneTrustAlwaysActiveHosts.push(e.HostId)
                    })
                });
                else {
                    Mt.hostsConsent = [];
                    var r = {};
                    e.forEach(function(e) {
                        var o = eo.isAlwaysActiveGroup(e),
                            n = Mt.syncRequired ? bo.groupHasConsent(e) : eo.checkIsActiveByDefault(e);
                        e.Hosts.length & amp; & amp;
                        e.Hosts.forEach(function(e) {
                            if (r[e.HostId]) bo.updateHostStatus(e, n);
                            else {
                                r[e.HostId] = !0, o & amp; & amp;
                                Mt.oneTrustAlwaysActiveHosts.push(e.HostId);
                                var t = bo.isHostPartOfAlwaysActiveGroup(e.HostId);
                                Mt.hostsConsent.push(e.HostId + (t || n ? ":1" : ":0"))
                            }
                        })
                    })
                }
            }, mn.prototype.consentDefaulCall = function() {
                var e = parseInt(xt.readCookieParam(Oe.OPTANON_CONSENT, Ee), 10);
                !isNaN(e) & amp; & amp;
                0 !== e || (xo.triggerGoogleAnalyticsEvent(Ho, "Click", "No interaction"), Rt.IsConsentLoggingEnabled & amp; & amp; ro.createConsentTxn(!0), window.removeEventListener("beforeunload", fn.consentDefaulCall))
            }, mn.prototype.fetchAssets = function(g) {
                return void 0 === g & amp; & amp;
                (g = null), c(this, void 0, void 0, function() {
                    var t, o, n, r, i, s, a, l, c, d, u, p, h;
                    return C(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return i = Bt.moduleInitializer, s = to.isAlertBoxClosedAndValid(), a = !!g, l = !i.IsSuppressBanner || Rt.ShowAlertNotice & amp; & amp;
                                !s & amp; & amp;
                                i.IsSuppressBanner & amp; & amp;
                                !zt("#onetrust-banner-sdk").length, c = zt("#ot-sdk-btn").length || zt(".ot-sdk-show-settings").length || zt(".optanon-show-settings").length, d = "IAB2" === Rt.IabType ? !i.TenantFeatures.CookieV2RemoveSettingsIcon & amp; & amp;
                                !c: Rt.PCShowPersistentCookiesHoverButton, u = "true" === Mt.urlParams.get(ut), Mt.hideBanner = u, [4, Promise.all([!l || Rt.NoBanner || u ? Promise.resolve(null) : gn.getBannerContent(a, g), !i.IsSuppressPC || Mt.isPCVisible ? gn.getPcContent() : Promise.resolve(null), d ? gn.getCSBtnContent() : Promise.resolve(null), gn.getCommonStyles()])];
                            case 1:
                                return h = e.sent(), t = h[0], o = h[1], n = h[2], r = h[3], t & amp; & amp;
                                (p = t.html, Bt.fp.CookieV2SSR || (p = atob(t.html)), this.bannerGroup = {
                                    name: t.name,
                                    html: p,
                                    css: t.css
                                }), o & amp; & amp;
                                (this.preferenceCenterGroup = {
                                        name: o.name,
                                        html: atob(o.html),
                                        css: o.css
                                    }, Bt.isV2Template = Rt.PCTemplateUpgrade & amp; & amp;
                                    /otPcPanel|otPcCenter|otPcTab/.test(o.name)), r & amp; & amp;
                                (this.commonStyles = r), this.cookieListGroup = {
                                    name: vn.name,
                                    html: vn.html,
                                    css: Rt.useRTL ? vn.cssRTL : vn.css
                                }, n & amp; & amp;
                                (this.csBtnGroup = {
                                    name: "CookieSettingsButton",
                                    html: atob(n.html),
                                    css: n.css
                                }), [2]
                        }
                    })
                })
            }, mn.prototype.initializeIabPurposeConsentOnReload = function() {
                var t = this;
                Ft.consentableIabGrps.forEach(function(e) {
                    t.setIABConsent(e, !1), e.IsLegIntToggle = !0, t.setIABConsent(e, !1)
                })
            }, mn.prototype.initializeIABData = function(o, n, r) {
                var i = this;
                void 0 === o & amp; & amp;
                (o = !1), void 0 === n & amp; & amp;
                (n = !1), void 0 === r & amp; & amp;
                (r = !1);
                var e = Mt.oneTrustIABConsent;
                e.purpose = [], e.vendors = [], e.legIntVendors = [], e.specialFeatures = [], e.legimateInterest = [];
                var t = Mt.addtlVendors,
                    s = Rt.VendorConsentModel === Do;
                if (t.vendorConsent = [], !e.IABCookieValue || o || n || to.reconsentRequired()) {
                    Ft.consentableIabGrps.forEach(function(e) {
                        if (n & amp; & amp; !r) i.setIABConsent(e, eo.isAlwaysActiveGroup(e));
                        else if (r) e.HasConsentOptOut & amp; & amp;
                        i.setIABConsent(e, !1);
                        else {
                            var t = o & amp; & amp;
                            e.HasConsentOptOut;
                            i.setIABConsent(e, t), "IAB2_PURPOSE" === e.Type & amp; & amp;
                            (e.IsLegIntToggle = !0, i.setIABConsent(e, e.HasLegIntOptOut))
                        }
                    }), Rt.IsIabEnabled & amp; & amp;
                    r & amp; & amp;
                    (Mt.oneTrustIABConsent.legimateInterest = Mt.vendors.selectedLegInt.slice());
                    var a = o || !n & amp; & amp;
                    s;
                    r & amp; & amp;
                    (a = s), to.setIABVendor(a, r), !to.reconsentRequired() || o || n || to.resetTCModel()
                } else this.initializeIabPurposeConsentOnReload(), ao.populateGoogleConsent(), ao.populateVendorAndPurposeFromCookieData()
            }, mn.prototype.canSoftOptInInsertForGroup = function(e) {
                var t = eo.getGroupById(e);
                if (t) {
                    var o = t & amp; & amp;
                    !t.Parent ? t : eo.getParentGroup(t.Parent);
                    return "inactive landingpage" !== eo.getGrpStatus(o).toLowerCase() || !Ao.isLandingPage()
                }
            }, mn.prototype.setIABConsent = function(e, t) {
                e.Type === Pt ? this.setIabSpeciFeatureConsent(e, t) : e.IsLegIntToggle ? (this.setIabLegIntConsent(e, t), e.IsLegIntToggle = !1) : this.setIabPurposeConsent(e, t)
            }, mn.prototype.setIabPurposeConsent = function(o, n) {
                var r = !1;
                Mt.oneTrustIABConsent.purpose = Mt.oneTrustIABConsent.purpose.map(function(e) {
                    var t = e.split(":")[0];
                    return t === o.IabGrpId & amp; & amp;
                    (e = t + ":" + n, r = !0), e
                }), r || Mt.oneTrustIABConsent.purpose.push(o.IabGrpId + ":" + n)
            }, mn.prototype.setIabLegIntConsent = function(o, n) {
                var r = !1;
                Mt.oneTrustIABConsent.legimateInterest = Mt.oneTrustIABConsent.legimateInterest.map(function(e) {
                    var t = e.split(":")[0];
                    return t === o.IabGrpId & amp; & amp;
                    (e = t + ":" + n, r = !0), e
                }), r || Mt.oneTrustIABConsent.legimateInterest.push(o.IabGrpId + ":" + n)
            }, mn.prototype.setIabSpeciFeatureConsent = function(o, n) {
                var r = !1;
                Mt.oneTrustIABConsent.specialFeatures = Mt.oneTrustIABConsent.specialFeatures.map(function(e) {
                    var t = e.split(":")[0];
                    return t === o.IabGrpId & amp; & amp;
                    (e = t + ":" + n, r = !0), e
                }), r || Mt.oneTrustIABConsent.specialFeatures.push(o.IabGrpId + ":" + n)
            }, mn);

        function mn() {}
        var bn, Pn = (Sn.prototype.getAllowAllButton = function() {
            return zt("#onetrust-pc-sdk #accept-recommended-btn-handler")
        }, Sn.prototype.getSelectedVendors = function() {
            return zt("#onetrust-pc-sdk " + Xt.P_Tgl_Cntr + " .ot-checkbox input:checked")
        }, Sn);

        function Sn() {}
        var An, Tn = (In.prototype.setBannerFocus = function() {
            var e = Array.prototype.slice.call(zt("#onetrust-banner-sdk .onetrust-vendors-list-handler").el),
                t = Array.prototype.slice.call(zt('#onetrust-banner-sdk #onetrust-policy-text [href],#onetrust-banner-sdk #onetrust-policy-text button,#onetrust-banner-sdk #onetrust-policy-text [tabindex]:not([tabindex="-1"])').el),
                o = Array.prototype.slice.call(zt("#onetrust-banner-sdk .ot-bnr-save-handler").el),
                n = Array.prototype.slice.call(zt("#onetrust-banner-sdk #onetrust-pc-btn-handler").el),
                r = Array.prototype.concat.call(Array.prototype.slice.call(zt("#onetrust-banner-sdk .category-switch-handler:not([disabled])").el), Array.prototype.slice.call(zt("#onetrust-banner-sdk .ot-cat-lst button").el), e),
                i = Array.prototype.concat.call(t, r),
                s = Array.prototype.slice.call(zt("#onetrust-banner-sdk .onetrust-close-btn-handler").el);
            Ft.bannerName === tt & amp; & amp;
            (i = Array.prototype.concat.call(e, t));
            var a = Array.prototype.slice.call(zt("#onetrust-banner-sdk #onetrust-accept-btn-handler").el),
                l = Array.prototype.slice.call(zt("#onetrust-banner-sdk #onetrust-reject-all-handler").el),
                c = Array.prototype.concat.call(o, a, l, n);
            (Ft.bannerName !== Ze || Rt.IsIabEnabled) & amp; & amp;
            Ft.bannerName !== $e & amp; & amp;
            Ft.bannerName !== nt || (c = Array.prototype.concat.call(n, l, a));
            var d = Array.prototype.slice.call(zt("#onetrust-banner-sdk .ot-gv-list-handler").el);
            Ft.bannerName === rt ? (i = Array.prototype.concat.call(d, i), c = Array.prototype.slice.call(zt("#onetrust-banner-sdk #onetrust-button-group button").el)) : i = Array.prototype.concat.call(i, d), this.bannerEl = Array.prototype.concat.call(Array.prototype.slice.call(zt("#onetrust-banner-sdk #onetrust-cookie-btn").el), i, Array.prototype.slice.call(zt("#onetrust-banner-sdk .banner-option-input").el), c, Array.prototype.slice.call(zt("#onetrust-banner-sdk .ot-bnr-footer-logo a").el), s), this.banner = zt("#onetrust-banner-sdk").el[0], (Rt.BInitialFocus || Rt.BInitialFocusLinkAndButton || Rt.ForceConsent) & amp; & amp;
            (Rt.BInitialFocus ? this.banner.focus() : this.bannerEl[0].focus())
        }, In.prototype.handleBannerFocus = function(e, t) {
            var o = e.target,
                n = An.bannerEl,
                r = n.indexOf(o),
                i = n.length - 1,
                s = null;
            if (this.handleBannerFocusBodyReset(t, r, i)) Kt.resetFocusToBody();
            else if (this.banner === o) s = this.handleInitialBannerFocus(t, n, i, s);
            else
                for (; !s;) {
                    var a = void 0;
                    0 !== (a = t ? r & lt; = 0 ? n[i] : n[r - 1] : r === i ? n[0] : n[r + 1]).clientHeight || 0 !== a.offsetHeight ? s = a : t ? r-- : r++
                }
            s & amp; & amp;
            (e.preventDefault(), s.focus())
        }, In.prototype.handleBannerFocusBodyReset = function(e, t, o) {
            return !(Rt.ForceConsent || !Rt.BInitialFocus & amp; & amp; !Rt.BInitialFocusLinkAndButton || !(e & amp; & amp; 0 === t || !e & amp; & amp; t === o))
        }, In.prototype.handleInitialBannerFocus = function(e, t, o, n) {
            return e & amp; & amp;
            Rt.ForceConsent ? n = t[o] : e || (n = t[0]), n
        }, In.prototype.setPCFocus = function(e) {
            if (e & amp; & amp; !(e.length & lt; = 0)) {
                for (var t = 0; t & lt; e.length; t++) e[t].setAttribute("tabindex", "0");
                this.setFirstAndLast(e);
                var o = Rt.ShowPreferenceCenterCloseButton,
                    n = o ? this.getElementForFocus(e, Rt.PCLayout.Popup ? 2 : 1, !0) : null,
                    r = {
                        preventScroll: !0
                    };
                this.firstItem ? o ? n.focus(r) : this.firstItem.focus(r) : e[0].focus(), this.firstItem & amp; & amp;
                zt(this.firstItem).on("keydown", An.firstItemHandler), this.lastItem & amp; & amp;
                zt(this.lastItem).on("keydown", An.lastItemHandler)
            }
        }, In.prototype.setFirstAndLast = function(e) {
            this.firstItem = this.getElementForFocus(e, 0, !0), this.lastItem = this.firstItem ? this.getElementForFocus(e, e.length - 1, !1) : null
        }, In.prototype.setLastItem = function() {
            var e = this.getPCElements(),
                t = this.getElementForFocus(e, e.length - 1, !1);
            t !== this.lastItem & amp; & amp;
            (zt(this.lastItem).off("keydown", An.lastItemHandler), this.lastItem = t, zt(t).on("keydown", An.lastItemHandler))
        }, In.prototype.getPCElements = function() {
            var e = "#onetrust-pc-sdk #close-pc-btn-handler,\n            #onetrust-pc-sdk .back-btn-handler,\n            #onetrust-pc-sdk ." + Xt.P_Active_Menu + ',\n            #onetrust-pc-sdk input,\n            #onetrust-pc-sdk a,\n            #onetrust-pc-sdk [tabindex="0"] button,\n            #onetrust-pc-sdk .save-preference-btn-handler,\n            #onetrust-pc-sdk .ot-pc-refuse-all-handler,\n            #onetrust-pc-sdk #accept-recommended-btn-handler';
            return Mt.pcLayer === _.CookieList ? e += " ,#onetrust-pc-sdk " + Xt.P_Content + " .powered-by-logo" : e += ",#onetrust-pc-sdk #vendor-list-save-btn .powered-by-logo", Array.prototype.slice.call(zt(e).el)
        }, In.prototype.getActiveTab = function() {
            return document.querySelector('#onetrust-pc-sdk .category-menu-switch-handler[tabindex="0"]')
        }, In.prototype.getElementForFocus = function(e, t, o) {
            for (var n = e[t]; o ? n & amp; & amp; null === n.offsetParent & amp; & amp; t & lt; e.length - 1 : n & amp; & amp; null === n.offsetParent & amp; & amp; 0 & lt; t;) n = e[t], o ? ++t : --t;
            return n
        }, In.prototype.firstItemHandler = function(e) {
            var t = document.getElementById("onetrust-banner-sdk");
            if (9 === e.keyCode & amp; & amp; e.shiftKey & amp; & amp; An.firstItem !== t) e.preventDefault(), An.lastItem.focus();
            else {
                var o = "close-pc-btn-handler" === e.target.id & amp; & amp;
                ("13" === e.keyCode || "32" === e.keyCode || "Enter" === e.code || "Space" === e.code);
                if (Rt.PCLayout.Tab & amp; & amp; Mt.pcLayer === _.PrefCenterHome & amp; & amp; !o) {
                    var n = An.getActiveTab();
                    n & amp; & amp;
                    (e.preventDefault(), n.focus())
                }
            }
        }, In.prototype.lastItemHandler = function(e) {
            if (9 === e.keyCode & amp; & amp; !e.shiftKey) {
                e.preventDefault();
                var t = Mt.pcLayer === _.VendorList || Mt.pcLayer === _.CookieList;
                Rt.PCLayout.Tab & amp; & amp;
                Mt.isPCVisible & amp; & amp;
                !Rt.ShowPreferenceCenterCloseButton & amp; & amp;
                !t ? An.getActiveTab().focus() : An.firstItem.focus()
            }
        }, In);

        function In() {
            this.bannerEl = []
        }
        var Ln, _n = (Vn.prototype.getAllGroupElements = function() {
            return document.querySelectorAll("div#onetrust-pc-sdk " + Xt.P_Category_Grp + " " + Xt.P_Category_Item + ":not(.ot-vnd-item)")
        }, Vn.prototype.toggleGrpElements = function(e, t, o, n) {
            void 0 === n & amp; & amp;
            (n = !1), Ft.pcName === dt & amp; & amp;
            Rt.PCTemplateUpgrade & amp; & amp;
            (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
            for (var r = e.querySelectorAll('input[class*="category-switch-handler"]'), i = 0; i & lt; r.length; i++) {
                var s = r[i].getAttribute("id").includes("leg-out");
                n & amp; & amp;
                (!n || s) || (Gt.setCheckedAttribute(null, r[i], o), r[i] & amp; & amp; Rt.PCShowConsentLabels & amp; & amp;
                    (r[i].parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? Rt.PCActiveText : Rt.PCInactiveText))
            }
            Ft.legIntSettings.PAllowLI & amp; & amp;
            Ft.legIntSettings.PShowLegIntBtn & amp; & amp;
            t.Type === bt & amp; & amp;
            t.HasLegIntOptOut & amp; & amp;
            !n & amp; & amp;
            Ln.updateLegIntBtnElement(e.querySelector(".ot-leg-btn-container"), o)
        }, Vn.prototype.toogleAllSubGrpElements = function(e, t) {
            if (e.ShowSubgroup) {
                var o = e.CustomGroupId,
                    n = this.getGroupElementByOptanonGroupId(o.toString());
                Ln.toogleSubGroupElement(n, t, e.IsLegIntToggle)
            } else this.updateHiddenSubGroupData(e, t)
        }, Vn.prototype.toogleSubGroupElement = function(e, t, o, n) {
            void 0 === o & amp; & amp;
            (o = !1), void 0 === n & amp; & amp;
            (n = !1), Ft.pcName === dt & amp; & amp;
            Rt.PCTemplateUpgrade & amp; & amp;
            (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
            for (var r = e.querySelectorAll("li" + Xt.P_Subgrp_li), i = 0; i & lt; r.length; i++) {
                var s = eo.getGroupById(r[i].getAttribute("data-optanongroupid")),
                    a = s.OptanonGroupId,
                    l = eo.getParentGroup(s.Parent);
                Ft.legIntSettings.PAllowLI & amp; & amp;
                Ft.legIntSettings.PShowLegIntBtn & amp; & amp;
                o & amp; & amp;
                s.Type === bt & amp; & amp;
                s.HasLegIntOptOut & amp; & amp;
                l.ShowSubgroupToggle & amp; & amp;
                Ln.updateLegIntBtnElement(r[i], t);
                var c = o ? "[id='ot-sub-group-id-" + a + "-leg-out']" : "[id='ot-sub-group-id-" + a + "']",
                    d = r[i].querySelector('input[class*="cookie-subgroup-handler"]' + c);
                Gt.setCheckedAttribute(null, d, t), d & amp; & amp;
                Rt.PCShowConsentLabels & amp; & amp;
                (d.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = t ? Rt.PCActiveText : Rt.PCInactiveText), n || (s.IsLegIntToggle = o, Ln.toggleGrpStatus(s, t), s.IsLegIntToggle = !1, bo.toggleGroupHosts(s, t), Mt.genVenOptOutEnabled & amp; & amp; bo.toggleGroupGenVendors(s, t))
            }
        }, Vn.prototype.toggleGrpStatus = function(e, t) {
            var o = e.IsLegIntToggle & amp; & amp;
            e.Type === bt ? t ? rn : nn : t ? Qo : $o;
            xo.triggerGoogleAnalyticsEvent(Ho, o, e.GroupName + ": " + e.OptanonGroupId), t ? this.updateEnabledGroupData(e) : this.updateDisabledGroupData(e)
        }, Vn.prototype.setInputID = function(e, t, o, n, r) {
            zt(e).attr("id", t), zt(e).attr("name", t), zt(e).data("optanonGroupId", o), Gt.setCheckedAttribute(null, e, n), zt(e).attr("aria-labelledby", r)
        }, Vn.prototype.updateEnabledGroupData = function(e) {
            if (-1 & lt; Lt.indexOf(e.Type)) this.updateIabGroupData(e, !0);
            else {
                var t = Ln.getGroupVariable(),
                    o = Gt.indexOf(t, e.CustomGroupId + ":0"); - 1 !== o & amp; & amp;
                (t[o] = e.CustomGroupId + ":1")
            }
        }, Vn.prototype.updateDisabledGroupData = function(e) {
            if (-1 & lt; Lt.indexOf(e.Type)) this.updateIabGroupData(e, !1);
            else if (e.Status !== qe) {
                var t = Ln.getGroupVariable(),
                    o = Gt.indexOf(t, e.CustomGroupId + ":1"); - 1 !== o & amp; & amp;
                (t[o] = e.CustomGroupId + ":0")
            }
        }, Vn.prototype.updateIabGroupData = function(e, t) {
            if (e.Type === Pt) this.updateIabSpecialFeatureData(e.IabGrpId, t);
            else {
                var o = e.IsLegIntToggle ? Mt.vendors.selectedLegInt : Mt.vendors.selectedPurpose;
                this.updateIabPurposeData(e.IabGrpId, t, o)
            }
        }, Vn.prototype.isAllSubgroupsDisabled = function(e) {
            return !e.SubGroups.some(function(e) {
                return Ln.isGroupActive(e)
            })
        }, Vn.prototype.isAllSubgroupsEnabled = function(e) {
            return !e.SubGroups.some(function(e) {
                return Ln.IsGroupInActive(e)
            })
        }, Vn.prototype.toggleGroupHtmlElement = function(e, t, o) {
            if (Ft.legIntSettings.PAllowLI & amp; & amp; Ft.legIntSettings.PShowLegIntBtn & amp; & amp; e.Type === bt & amp; & amp; e.HasLegIntOptOut) {
                var n = document.querySelector("[data-el-id=" + t + "]");
                n & amp; & amp;
                this.updateLegIntBtnElement(n, o)
            }
            var r = zt("#ot-group-id-" + t).el[0];
            Gt.setCheckedAttribute(null, r, o), r & amp; & amp;
            Rt.PCShowConsentLabels & amp; & amp;
            (r.parentElement.querySelector(".ot-label-status").innerHTML = o ? Rt.PCActiveText : Rt.PCInactiveText)
        }, Vn.prototype.updateLegIntBtnElement = function(e, t) {
            var o = Ft.legIntSettings,
                n = e.querySelector(".ot-obj-leg-btn-handler"),
                r = e.querySelector(".ot-remove-objection-handler");
            t ? (n.classList.add("ot-inactive-leg-btn"), n.classList.add("ot-leg-int-enabled"), n.classList.remove("ot-active-leg-btn")) : (n.classList.add("ot-active-leg-btn"), n.classList.remove("ot-inactive-leg-btn"), n.classList.remove("ot-leg-int-enabled")), n.querySelector("span").innerText = t ? o.PObjectLegIntText : o.PObjectionAppliedText, Et(r, "display: " + (t ? "none" : "inline-block") + ";", !0)
        }, Vn.prototype.isGroupActive = function(e) {
            return -1 & lt;
            Lt.indexOf(e.Type) ? -1 !== this.isIabPurposeActive(e) : -1 !== Ut.inArray(e.CustomGroupId + ":1", Ln.getGroupVariable())
        }, Vn.prototype.safeFormattedGroupDescription = function(e) {
            return e & amp; & amp;
            e.GroupDescription ? e.GroupDescription.replace(/\r\n/g, "&lt;br&gt;") : ""
        }, Vn.prototype.canInsertForGroup = function(e, t) {
            void 0 === t & amp; & amp;
            (t = !1);
            var o, n = null != e & amp; & amp;
            void 0 !== e, r = xt.readCookieParam(Oe.OPTANON_CONSENT, "groups"), i = Mt.groupsConsent.join(","), s = xt.readCookieParam(Oe.OPTANON_CONSENT, "hosts"), a = Mt.hostsConsent.join(",");
            if (t) return !0;
            r === i & amp; & amp;
            s === a || fn.ensureHtmlGroupDataInitialised();
            var l = [];
            if (Mt.showGeneralVendors)
                for (var c = 0, d = Object.entries(Mt.genVendorsConsent); c & lt; d.length; c++) {
                    var u = d[c],
                        p = u[0],
                        h = u[1];
                    l.push(p + ":" + (h ? "1" : "0"))
                }
            Mt.showVendorService & amp; & amp;
            Mt.vsConsent.forEach(function(e, t) {
                l.push(t + ":" + (e ? "1" : "0"))
            });
            var g = Mt.groupsConsent.concat(Mt.hostsConsent).concat(l);
            o = Gt.contains(g, e + ":1");
            var C = this.doesHostExist(e),
                y = this.doesGroupExist(e),
                f = !1;
            Mt.showGeneralVendors ? f = this.doesGenVendorExist(e) : Mt.showVendorService & amp; & amp;
            (f = this.doesVendorServiceExist(e));
            var v = !(!C & amp; & amp; !f) || o & amp; & amp;
            fn.canSoftOptInInsertForGroup(e);
            return !(!n || !(o & amp; & amp; v || !y & amp; & amp; !C & amp; & amp; !f))
        }, Vn.prototype.setAllowAllButton = function() {
            var t = 0,
                e = Rt.Groups.some(function(e) {
                    if (-1 === _t.indexOf(e.Type)) return Ln.IsGroupInActive(e) & amp; & amp;
                    t++, e.SubGroups.some(function(e) {
                        return Ln.IsGroupInActive(e)
                    }) & amp; & amp;
                    t++, 1 & lt; = t
                }),
                o = bn.getAllowAllButton();
            return e ? o.show("inline-block") : o.hide(), An.lastItem & amp; & amp;
            An.setLastItem(), e
        }, Vn.prototype.getGroupVariable = function() {
            return Mt.groupsConsent
        }, Vn.prototype.IsGroupInActive = function(e) {
            return -1 & lt;
            Lt.indexOf(e.Type) ? -1 === this.isIabPurposeActive(e) : !(-1 & lt; _t.indexOf(e.Type)) & amp; & amp; - 1 === Ut.inArray(e.CustomGroupId + ":1", Ln.getGroupVariable())
        }, Vn.prototype.updateIabPurposeData = function(t, e, o) {
            var n = Gt.findIndex(o, function(e) {
                return e.split(":")[0] === t
            });
            o[n = -1 === n ? Number(t) : n] = t + ":" + e
        }, Vn.prototype.updateIabSpecialFeatureData = function(t, e) {
            var o = Gt.findIndex(Mt.vendors.selectedSpecialFeatures, function(e) {
                return e.split(":")[0] === t
            });
            o = -1 === o ? Number(t) : o, Mt.vendors.selectedSpecialFeatures[o] = t + ":" + e
        }, Vn.prototype.getGroupElementByOptanonGroupId = function(e) {
            return document.querySelector("#onetrust-pc-sdk " + Xt.P_Category_Grp + " " + Xt.P_Category_Item + '[data-optanongroupid=\n            "' + e + '"]')
        }, Vn.prototype.updateHiddenSubGroupData = function(e, t) {
            e.SubGroups.forEach(function(e) {
                Ln.toggleGrpStatus(e, t), bo.toggleGroupHosts(e, t), Mt.genVenOptOutEnabled & amp; & amp;
                bo.toggleGroupGenVendors(e, t)
            })
        }, Vn.prototype.isIabPurposeActive = function(e) {
            var t;
            return t = e.Type === Pt ? Mt.vendors.selectedSpecialFeatures : e.IsLegIntToggle ? Mt.vendors.selectedLegInt : Mt.vendors.selectedPurpose, Ut.inArray(e.IabGrpId + ":true", t)
        }, Vn.prototype.doesGroupExist = function(e) {
            return !!eo.getGroupById(e)
        }, Vn.prototype.doesHostExist = function(e) {
            var t = Mt.hostsConsent;
            return -1 !== t.indexOf(e + ":0") || -1 !== t.indexOf(e + ":1")
        }, Vn.prototype.doesGenVendorExist = function(t) {
            return !!Rt.GeneralVendors & amp; & amp;
            !!Rt.GeneralVendors.find(function(e) {
                return e.VendorCustomId === t
            })
        }, Vn.prototype.doesVendorServiceExist = function(e) {
            return Mt.getVendorsInDomain().has(e)
        }, Vn);

        function Vn() {}
        var Bn, En = (wn.prototype.insertCookiePolicyHtml = function() {
            if (zt(this.ONETRUST_COOKIE_POLICY).length) {
                var e, t = document.createDocumentFragment();
                if (fn.cookieListGroup) {
                    var o = Rt.CookiesV2NewCookiePolicy ? ".ot-sdk-cookie-policy" : "#ot-sdk-cookie-policy-v2",
                        n = document.createElement("div");
                    zt(n).html(fn.cookieListGroup.html), n.removeChild(n.querySelector(o)), e = n.querySelector(".ot-sdk-cookie-policy"), Rt.useRTL & amp; & amp;
                    zt(e).attr("dir", "rtl")
                }
                e.querySelector("#cookie-policy-title").innerHTML = Rt.CookieListTitle || "", e.querySelector("#cookie-policy-description").innerHTML = Rt.CookieListDescription || "";
                var r = e.querySelector("section"),
                    i = e.querySelector("section tbody tr"),
                    s = null,
                    a = null;
                Rt.CookiesV2NewCookiePolicy || (s = e.querySelector("section.subgroup"), a = e.querySelector("section.subgroup tbody tr"), zt(e).el.removeChild(e.querySelector("section.subgroup"))), zt(e).el.removeChild(e.querySelector("section")), !zt("#ot-sdk-cookie-policy").length & amp; & amp;
                zt("#optanon-cookie-policy").length ? zt("#optanon-cookie-policy").append('&lt;div id="ot-sdk-cookie-policy"&gt;&lt;/div&gt;') : (zt("#ot-sdk-cookie-policy").html(""), zt("#optanon-cookie-policy").html(""));
                for (var l = 0; l & lt; Rt.Groups.length; l++)
                    if (Rt.CookiesV2NewCookiePolicy) this.insertGroupHTMLV2(Rt, Rt.Groups, r, l, i, e, t);
                    else if (this.insertGroupHTML(Rt, Rt.Groups, r, l, i, e, t), Rt.Groups[l].ShowSubgroup)
                    for (var c = 0; c & lt; Rt.Groups[l].SubGroups.length; c++) this.insertGroupHTML(Rt, Rt.Groups[l].SubGroups, s, c, a, e, t)
            }
        }, wn.prototype.insertGroupHTMLV2 = function(a, e, t, o, l, n, r) {
            var i, c, s = this;

            function d(e) {
                return u.querySelector(e)
            }
            i = e[o];
            var u = t.cloneNode(!0),
                p = e[o].SubGroups;
            zt(d("tbody")).html("");
            var h = i.Hosts.slice(),
                g = i.FirstPartyCookies.slice(),
                C = h.length || g.length ? i.GroupName : "";
            if (e[o].ShowSubgroup & amp; & amp; p.length) {
                var y = u.querySelector("section.ot-sdk-subgroup ul li");
                p.forEach(function(e) {
                    var t = y.cloneNode(!0);
                    h = h.concat(e.Hosts), g = g.concat(e.FirstPartyCookies), (e.Hosts.length || e.FirstPartyCookies.length) & amp; & amp;
                    (C += "," + e.GroupName), zt(t.querySelector(".ot-sdk-cookie-policy-group")).html(e.GroupName), zt(t.querySelector(".ot-sdk-cookie-policy-group-desc")).html(s.groupsClass.safeFormattedGroupDescription(e)), zt(y.parentElement).append(t)
                }), u.querySelector("section.ot-sdk-subgroup ul").removeChild(y)
            } else u.removeChild(u.querySelector("section.ot-sdk-subgroup"));
            a.IsLifespanEnabled ? zt(d("th.ot-life-span")).el.innerHTML = a.LifespanText : zt(d("thead tr")).el.removeChild(zt(d("th.ot-life-span")).el), zt(d("th.ot-cookies")).el.innerHTML = a.CookiesText, zt(d("th.ot-host")).el.innerHTML = a.CategoriesText, zt(d("th.ot-cookies-type")).el.innerHTML = a.CookiesUsedText;
            var f = this.transformFirstPartyCookies(g, h, i),
                v = !1;
            f.some(function(e) {
                return e.Description
            }) ? v = !0 : zt(d("thead tr")).el.removeChild(zt(d("th.ot-host-description")).el), zt(d(".ot-sdk-cookie-policy-group")).html(i.GroupName), zt(d(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(i));
            for (var k = function(e) {
                    function t(e) {
                        return o.querySelector(e)
                    }
                    var o = l.cloneNode(!0);
                    zt(t(".ot-cookies-td span")).text(""), zt(t(".ot-life-span-td span")).text(""), zt(t(".ot-cookies-type span")).text(""), zt(t(".ot-cookies-td .ot-cookies-td-content")).html(""), zt(t(".ot-host-td")).html(""), zt(t(".ot-host-description-td")).html('&lt;span class="ot-mobile-border"&gt;&lt;/span&gt;&lt;p&gt;' + f[e].Description + "&lt;/p&gt; ");
                    for (var n = [], r = [], i = 0; i & lt; f[e].Cookies.length; i++)(c = f[e].Cookies[i]).IsSession ? n.push(a.LifespanTypeText) : n.push(Kt.getDuration(c)), r.push(f[e].Type ? '&lt;a href="https://cookiepedia.co.uk/cookies/' + c.Name + '" rel="noopener" target="_blank" aria-label="' + c.Name + " " + Rt.NewWinTxt + '"&gt;' + c.Name + "&lt;/a&gt;" : c.Name);
                    zt(t(".ot-host-td")).append('&lt;span class="ot-mobile-border"&gt;&lt;/span&gt;'), t(".ot-host-td").setAttribute("data-label", a.CategoriesText), t(".ot-cookies-td").setAttribute("data-label", a.CookiesText), t(".ot-cookies-type").setAttribute("data-label", a.CookiesUsedText), t(".ot-life-span-td").setAttribute("data-label", a.LifespanText);
                    var s = f[e].DisplayName || f[e].HostName;
                    zt(t(".ot-host-td")).append(f[e].Type ? s : '&lt;a href="https://cookiepedia.co.uk/host/' + c.Host + '" rel="noopener" target="_blank" aria-label="' + s + " " + Rt.NewWinTxt + '"&gt;' + s + "&lt;/a&gt;"), t(".ot-cookies-td .ot-cookies-td-content").insertAdjacentHTML("beforeend", r.join(", ")), t(".ot-life-span-td .ot-life-span-td-content").innerText = n.join(", "), t(".ot-cookies-type .ot-cookies-type-td-content").innerText = f[e].Type ? Rt.firstPartyTxt : Rt.thirdPartyTxt, a.IsLifespanEnabled || o.removeChild(t("td.ot-life-span-td")), v || o.removeChild(t("td.ot-host-description-td")), zt(d("tbody")).append(o)
                }, m = 0; m & lt; f.length; m++) k(m);
            0 === f.length ? u.removeChild(u.querySelector("table")) : zt(d("caption")).el.innerHTML = C, zt(n).append(u), zt(r).append(n), zt("#ot-sdk-cookie-policy").append(r)
        }, wn.prototype.insertGroupHTML = function(a, e, t, o, l, n, r) {
            var i, s, c, d;

            function u(e) {
                return p.querySelector(e)
            }
            i = e[o];
            var p = t.cloneNode(!0);
            zt(u("caption")).el.innerHTML = i.GroupName, zt(u("tbody")).html(""), zt(u("thead tr")), a.IsLifespanEnabled ? zt(u("th.life-span")).el.innerHTML = a.LifespanText : zt(u("thead tr")).el.removeChild(zt(u("th.life-span")).el), zt(u("th.cookies")).el.innerHTML = a.CookiesText, zt(u("th.host")).el.innerHTML = a.CategoriesText;
            var h = !1;
            if (i.Hosts.some(function(e) {
                    return e.description
                }) ? h = !0 : zt(u("thead tr")).el.removeChild(zt(u("th.host-description")).el), zt(u(".ot-sdk-cookie-policy-group")).html(i.GroupName), zt(u(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(i)), 0 & lt; i.FirstPartyCookies.length) {
                zt(u(".cookies-used-header")).html(a.CookiesUsedText), zt(u(".cookies-list")).html("");
                for (var g = 0; g & lt; i.FirstPartyCookies.length; g++) s = i.FirstPartyCookies[g], zt(u(".cookies-list")).append("&lt;li&gt; " + Kt.getCookieLabel(s, a.AddLinksToCookiepedia) + " &lt;li&gt;")
            } else p.removeChild(u(".cookies-used-header")), p.removeChild(u(".cookies-list"));
            c = i.Hosts;
            for (var C = function(e) {
                    function t(e) {
                        return o.querySelector(e)
                    }
                    var o = l.cloneNode(!0);
                    zt(t(".cookies-td ul")).html(""), zt(t(".life-span-td ul")).html(""), zt(t(".host-td")).html(""), zt(t(".host-description-td")).html('&lt;span class="ot-mobile-border"&gt;&lt;/span&gt;&lt;p&gt;' + c[e].Description + "&lt;/p&gt; ");
                    for (var n = 0; n & lt; c[e].Cookies.length; n++) {
                        var r = "";
                        r = (d = c[e].Cookies[n]).IsSession ? a.LifespanTypeText : 0 === d.Length ? "&lt;1 " + a.LifespanDurationText || a.PCenterVendorListLifespanDays : d.Length + " " + a.LifespanDurationText || a.PCenterVendorListLifespanDays;
                        var i = a.IsLifespanEnabled ? "&amp;nbsp;(" + r + ")" : "";
                        if (zt(t(".cookies-td ul")).append("&lt;li&gt; " + d.Name + " " + i + " &lt;/li&gt;"), a.IsLifespanEnabled) {
                            var s = d.Length ? d.Length + " days" : "N/A";
                            zt(t(".life-span-td ul")).append("&lt;li&gt;" + s + "&lt;/li&gt;")
                        }
                        0 === n & amp; & amp;
                        (zt(t(".host-td")).append('&lt;span class="ot-mobile-border"&gt;&lt;/span&gt;'), zt(t(".host-td")).append('&lt;a href="https://cookiepedia.co.uk/host/' + d.Host + '" rel="noopener" target="_blank"\n                        aria-label="' + (c[e].DisplayName || c[e].HostName) + " " + Rt.NewWinTxt + '"&gt;' + (c[e].DisplayName || c[e].HostName) + "&lt;/a&gt;"))
                    }
                    h || o.removeChild(t("td.host-description-td")), zt(u("tbody")).append(o)
                }, y = 0; y & lt; c.length; y++) C(y);
            0 === c.length & amp; & amp;
            zt(u("table")).el.removeChild(zt(u("thead")).el), zt(n).append(p), zt(r).append(n), zt("#ot-sdk-cookie-policy").append(r)
        }, wn.prototype.transformFirstPartyCookies = function(e, t, o) {
            var n = this,
                r = t.slice();
            e.forEach(function(e) {
                n.populateHostGroup(e, r, Rt.firstPartyTxt)
            });
            var i = o.GeneralVendorsIds;
            this.populateGenVendor(i, o, r);
            var s = o.SubGroups;
            return s.length & amp; & amp;
            s.forEach(function(e) {
                var t = e.GeneralVendorsIds;
                n.populateGenVendor(t, e, r)
            }), r
        }, wn.prototype.populateGenVendor = function(e, o, n) {
            var r = this;
            e.length & amp; & amp;
            e.forEach(function(t) {
                var e = Rt.GeneralVendors.find(function(e) {
                    return e.VendorCustomId === t
                });
                e.Cookies.length & amp; & amp;
                e.Cookies.forEach(function(e) {
                    if (e.category === o.GroupName) {
                        var t = e.isThirdParty ? "" : Rt.firstPartyTxt;
                        r.populateHostGroup(e, n, t)
                    }
                })
            })
        }, wn.prototype.populateHostGroup = function(t, e, o) {
            e.some(function(e) {
                if (e.HostName === t.Host & amp; & amp; e.Type === o) return e.Cookies.push(t), !0
            }) || e.unshift({
                HostName: t.Host,
                DisplayName: t.Host,
                HostId: "",
                Description: "",
                Type: o,
                Cookies: [t]
            })
        }, wn);

        function wn() {
            this.groupsClass = Ln, this.ONETRUST_COOKIE_POLICY = "#ot-sdk-cookie-policy, #optanon-cookie-policy"
        }
        var xn, Gn = function() {};
        var On, Nn = (Dn.prototype.updateFilterSelection = function(e) {
            var t, o;
            void 0 === e & amp; & amp;
            (e = !1), o = e ? (t = Mt.filterByCategories, "data-optanongroupid") : (t = Mt.filterByIABCategories, "data-purposeid");
            for (var n = zt("#onetrust-pc-sdk .category-filter-handler").el, r = 0; r & lt; n.length; r++) {
                var i = n[r].getAttribute(o),
                    s = -1 & lt;
                t.indexOf(i);
                Gt.setCheckedAttribute(null, n[r], s)
            }
        }, Dn.prototype.cancelHostFilter = function() {
            for (var e = zt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t & lt; e.length; t++) {
                var o = e[t].getAttribute("data-optanongroupid"),
                    n = 0 & lt; = Mt.filterByCategories.indexOf(o);
                Gt.setCheckedAttribute(null, e[t], n)
            }
        }, Dn.prototype.updateHostFilterList = function() {
            for (var e = zt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t & lt; e.length; t++) {
                var o = e[t].getAttribute("data-optanongroupid");
                if (e[t].checked & amp; & amp; Mt.filterByCategories.indexOf(o) & lt; 0) Mt.filterByCategories.push(o);
                else if (!e[t].checked & amp; & amp; - 1 & lt; Mt.filterByCategories.indexOf(o)) {
                    var n = Mt.filterByCategories;
                    Mt.filterByCategories.splice(n.indexOf(o), 1)
                }
            }
            return Mt.filterByCategories
        }, Dn.prototype.InitializeHostList = function() {
            Mt.hosts.hostTemplate = zt(Xt.P_Vendor_List + " " + Xt.P_Host_Cntr + " li").el[0].cloneNode(!0), Mt.hosts.hostCookieTemplate = zt(Xt.P_Vendor_List + " " + Xt.P_Host_Cntr + " " + Xt.P_Host_Opt + " li").el[0].cloneNode(!0)
        }, Dn.prototype.getCookiesForGroup = function(t) {
            var o = [],
                n = [];
            return t.FirstPartyCookies.length & amp; & amp;
            t.FirstPartyCookies.forEach(function(e) {
                n.push(r(r({}, e), {
                    groupName: t.GroupName
                }))
            }), t.Hosts.length & amp; & amp;
            t.Hosts.forEach(function(e) {
                o.push(r(r({}, e), {
                    isActive: "always active" === eo.getGrpStatus(t).toLowerCase(),
                    groupName: t.GroupName,
                    Type: J.Host
                }))
            }), {
                firstPartyCookiesList: n,
                thirdPartyCookiesList: o
            }
        }, Dn.prototype.reactivateSrcTag = function(e) {
            var t = ["src"];
            e.setAttribute(t[0], e.getAttribute("data-" + t[0])), e.removeAttribute("data-src")
        }, Dn.prototype.reactivateScriptTag = function(e) {
            var t = e.parentNode,
                o = document.createElement(e.tagName);
            o.innerHTML = e.innerHTML;
            var n = e.attributes;
            if (0 & lt; n.length)
                for (var r = 0; r & lt; n.length; r++) "type" !== n[r].name ? o.setAttribute(n[r].name, n[r].value, !0) : o.setAttribute("type", "text/javascript", !0);
            t.appendChild(o), t.removeChild(e)
        }, Dn.prototype.reactivateTag = function(e, t) {
            var o, n = !0;
            if ((o = Mt.showVendorService ? e.className.match(/ot-vscat(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/ot-vscat-/i)[1].split("-") : e.className.match(/optanon-category(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/optanon-category-/i)[1].split("-")) & amp; & amp; 0 & lt; o.length) {
                for (var r = 0; r & lt; o.length; r++)
                    if (!Ln.canInsertForGroup(o[r].trim())) {
                        n = !1;
                        break
                    } n & amp; & amp;
                (t ? this.reactivateSrcTag(e) : this.reactivateScriptTag(e))
            }
        }, Dn.prototype.substitutePlainTextScriptTags = function() {
            var t = this,
                e = Mt.showVendorService ? "ot-vscat" : "optanon-category",
                o = [].slice.call(document.querySelectorAll('script[class*="' + e + '"]')),
                n = [].slice.call(document.querySelectorAll('*[class*="' + e + '"]'));
            Array.prototype.forEach.call(n, function(e) {
                "SCRIPT" !== e.tagName & amp; & amp;
                e.hasAttribute("data-src") & amp; & amp;
                t.reactivateTag(e, !0)
            }), Array.prototype.forEach.call(o, function(e) {
                e.hasAttribute("type") & amp; & amp;
                "text/plain" === e.getAttribute("type") & amp; & amp;
                t.reactivateTag(e, !1)
            })
        }, Dn);

        function Dn() {}
        var Hn, Fn = (Rn.prototype.getSearchQuery = function(e) {
            var t = this,
                o = e.trim().split(/\s+/g);
            return new RegExp(o.map(function(e) {
                return t.escapeRegExp(e)
            }).join("|") + "(.+)?", "gi")
        }, Rn.prototype.escapeRegExp = function(e) {
            return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&amp;")
        }, Rn.prototype.setGlobalFilteredList = function(e) {
            return Mt.currentGlobalFilteredList = e
        }, Rn.prototype.filterList = function(t, e, n) {
            var o = n & amp; & amp;
            n.length;
            if ("" === t & amp; & amp; !o) return this.setGlobalFilteredList(e);
            if (o) {
                var r = zt("#onetrust-pc-sdk " + Xt.P_Fltr_Options + " input").el.length,
                    i = [],
                    s = !1;
                r !== n.length ? e.forEach(function(o) {
                    s = !0, o.vendorName & amp; & amp;
                    n.forEach(function(e) {
                        var t = parseInt(Ft.iabGrpIdMap[e]); - 1 & lt;
                        e.indexOf("IFEV2_") ? (o.features || []).forEach(function(e) {
                            e.featureId === t & amp; & amp;
                            i.push(o)
                        }) : -1 & lt;
                        e.indexOf("ISFV2_") ? o.specialFeatures.forEach(function(e) {
                            e.featureId === t & amp; & amp;
                            i.push(o)
                        }) : -1 & lt;
                        e.indexOf("ISPV2_") ? (o.specialPurposes || []).forEach(function(e) {
                            e.purposeId === t & amp; & amp;
                            i.push(o)
                        }) : (o.purposes.forEach(function(e) {
                            e.purposeId === t & amp; & amp;
                            i.push(o)
                        }), o.legIntPurposes.forEach(function(e) {
                            e.purposeId === t & amp; & amp;
                            i.push(o)
                        }))
                    })
                }) : i = e, s & amp; & amp;
                (i = i.filter(function(e, t, o) {
                    return o.indexOf(e) === t
                })), this.setGlobalFilteredList(i)
            }
            return "" === t ? Mt.currentGlobalFilteredList : Mt.currentGlobalFilteredList.filter(function(e) {
                if (e.vendorName) return e.vendorName.toLowerCase().includes(t.toLowerCase())
            })
        }, Rn.prototype.loadVendorList = function(e, t) {
            void 0 === e & amp; & amp;
            (e = "");
            var o = Mt.vendors;
            Mt.currentGlobalFilteredList = o.list, e ? (o.searchParam = e, Mt.filterByIABCategories = [], On.updateFilterSelection(!1)) : o.searchParam !== e ? o.searchParam = "" : t = Mt.filterByIABCategories;
            var n = this.filterList(o.searchParam, o.list, t);
            zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).el[0].scrollTop = 0, this.initVendorsData(e, n)
        }, Rn.prototype.searchVendors = function(e, t, o, n) {
            if (n) {
                var r = this.getSearchQuery(n),
                    i = 0;
                for (var s in t)
                    if (s) {
                        var a = o === oe.GoogleVendor ? s : t[s].VendorCustomId,
                            l = zt("" + e.vendorAccBtn + a).el[0].parentElement;
                        r.lastIndex = 0, r.test(t[s][e.name]) ? (Et(l, this._displayNull, !0), i++) : Et(l, "display: none;", !0)
                    } 0 === i ? (zt(e.accId).hide(), o === oe.GoogleVendor ? this.hasGoogleVendors = !1 : this.hasGenVendors = !1) : (o === oe.GoogleVendor ? this.hasGoogleVendors = !0 : this.hasGenVendors = !0, zt(e.accId).show()), this.showEmptyResults(!this.hasGoogleVendors & amp; & amp; !this.hasIabVendors & amp; & amp; !this.hasGenVendors, n)
            } else
                for (var c = zt(" " + e.venListId + ' li[style^="display: none"]').el, d = 0; d & lt; c.length; d++) Et(c[d], this._displayNull, !0);
            var u = zt("#onetrust-pc-sdk " + e.selectAllEvntHndlr).el[0];
            document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " &gt; input[checked]") ? Gt.setCheckedAttribute("", u, !0) : Gt.setCheckedAttribute("", u, !1), document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " &gt; input:not([checked])") ? u.parentElement.classList.add("line-through") : u.parentElement.classList.remove("line-through")
        }, Rn.prototype.initGoogleVendors = function() {
            this.populateAddtlVendors(Mt.addtlVendorsList), this.venAdtlSelAllTglEvent()
        }, Rn.prototype.initGenVendors = function() {
            this.populateGeneralVendors(), Rt.GenVenOptOut & amp; & amp;
            Rt.GeneralVendors & amp; & amp;
            Rt.GeneralVendors.length & amp; & amp;
            this.genVenSelectAllTglEvent()
        }, Rn.prototype.resetAddtlVendors = function() {
            Hn.searchVendors(Hn.googleSearchSelectors, Mt.addtlVendorsList, oe.GoogleVendor), this.showConsentHeader()
        }, Rn.prototype.venAdtlSelAllTglEvent = function() {
            Hn.selectAllEventHandler({
                vendorsList: '#ot-addtl-venlst li:not([style^="display: none"]) .ot-ven-adtlctgl input',
                selAllCntr: "#onetrust-pc-sdk #ot-selall-adtlvencntr",
                selAllChkbox: "#onetrust-pc-sdk #ot-selall-adtlven-handler"
            })
        }, Rn.prototype.genVenSelectAllTglEvent = function() {
            var e = {
                vendorsList: Xt.P_Gven_List + ' li:not([style^="display: none"]) .ot-ven-gvctgl input',
                selAllCntr: "#onetrust-pc-sdk #ot-selall-gnvencntr",
                selAllChkbox: "#onetrust-pc-sdk #ot-selall-gnven-handler"
            };
            Hn.selectAllEventHandler(e)
        }, Rn.prototype.selectAllEventHandler = function(e) {
            for (var t = zt(e.vendorsList).el, o = zt(e.selAllCntr).el[0], n = zt(e.selAllChkbox).el[0], r = !0, i = 0; i & lt; t.length; i++) {
                if (!t[i].checked) {
                    r = !1;
                    break
                }
                r = !0
            }
            o & amp; & amp;
            (r ? o.classList.remove("line-through") : o.classList.add("line-through")), n.checked = !0;
            for (var s = 0; s & lt; t.length & amp; & amp; !t[s].checked; s++) s !== t.length - 1 || t[s].checked || (n.checked = !1);
            Gt.setCheckedAttribute("", n, n.checked)
        }, Rn.prototype.vendorLegIntToggleEvent = function() {
            for (var e = zt(Xt.P_Vendor_Container + ' li:not([style^="display: none"]) .' + Xt.P_Ven_Ltgl + " input").el, t = zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Leg_El).el[0], o = zt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0], n = !0, r = 0; r & lt; e.length; r++) {
                if (!e[r].checked) {
                    n = !1;
                    break
                }
                n = !0
            }
            n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
            for (var i = 0; i & lt; e.length & amp; & amp; !e[i].checked; i++) i !== e.length - 1 || e[i].checked || (o.checked = !1);
            Gt.setCheckedAttribute("", o, o.checked)
        }, Rn.prototype.vendorsListEvent = function() {
            for (var e = zt(Xt.P_Vendor_Container + ' li:not([style^="display: none"]) .' + Xt.P_Ven_Ctgl + " input").el, t = zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Consent_El).el[0], o = zt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0], n = !0, r = 0; r & lt; e.length; r++) {
                if (!e[r].checked) {
                    n = !1;
                    break
                }
                n = !0
            }
            n ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
            for (var i = 0; i & lt; e.length & amp; & amp; !e[i].checked; i++) i !== e.length - 1 || e[i].checked || (o.checked = !1);
            Gt.setCheckedAttribute("", o, o.checked)
        }, Rn.prototype.showEmptyResults = function(e, t, o) {
            void 0 === o & amp; & amp;
            (o = !1);
            var n = zt("#onetrust-pc-sdk #no-results");
            e ? this.setNoResultsContent(t, o) : (zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).removeClass("no-results"), n.length & amp; & amp; n.remove())
        }, Rn.prototype.playSearchStatus = function(e) {
            var t = e ? document.querySelectorAll(Xt.P_Host_Cntr + " &gt; li") : document.querySelectorAll(Xt.P_Vendor_Container + ' li:not([style$="none;"]),' + Xt.P_Gven_List + ' li:not([style$="none;"])'),
                o = t.length,
                n = zt('#onetrust-pc-sdk [role="status"]');
            o ? n.text(t.length + " " + (e ? "host" : "vendor") + (1 & lt; o ? "s" : "") + " returned.") : n.el[0].textContent = ""
        }, Rn.prototype.setNoResultsContent = function(e, t) {
            void 0 === t & amp; & amp;
            (t = !1);
            var o = zt("#onetrust-pc-sdk #no-results").el[0];
            if (!o) {
                var n = document.createElement("div"),
                    r = document.createElement("p"),
                    i = document.createTextNode(" did not match any " + (t ? "hosts." : "vendors.")),
                    s = document.createElement("span");
                return n.id = "no-results", s.id = "user-text", s.innerText = e, r.appendChild(s), r.appendChild(i), n.appendChild(r), zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).addClass("no-results"), zt("#vendor-search-handler").el[0].setAttribute("aria-describedby", n.id), zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).append(n)
            }
            o.querySelector("span").innerText = e
        }, Rn.prototype.searchHostList = function(e) {
            var t = Mt.currentGlobalFilteredList;
            e & amp; & amp;
            (t = this.searchList(e, t)), this.initHostData(e, t)
        }, Rn.prototype.searchList = function(e, t) {
            var o = this.getSearchQuery(e);
            return t.filter(function(e) {
                return o.lastIndex = 0, o.test(e.DisplayName || e.HostName)
            })
        }, Rn.prototype.setListSearchValues = function(e) {
            var t = Rt.PCenterVendorSearchAriaLabel,
                o = Rt.PCenterVendorListSearch,
                n = Rt.PCenterVendorsListText;
            e === Ae.cookies & amp; & amp;
            (t = Rt.PCenterCookieSearchAriaLabel, o = Rt.PCenterCookieListSearch, n = Rt.PCenterCookiesListText), document.querySelector("#onetrust-pc-sdk " + Xt.P_Vendor_Title).innerText = n;
            var r = zt("#onetrust-pc-sdk " + Xt.P_Vendor_Search_Input);
            r.el[0].placeholder = o, r.attr("aria-label", t)
        }, Rn.prototype.initHostData = function(e, d) {
            var u = this;
            Mt.optanonHostList = d;
            var p = Bt.isV2Template,
                h = Ft.pcName,
                g = Kt.isOptOutEnabled(),
                C = !1;
            this.setBackBtnTxt(), zt(Xt.P_Vendor_List + " #select-all-text-container p").html(Rt.PCenterAllowAllConsentText), zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " ul" + Xt.P_Host_Cntr).html(""), this.showEmptyResults(d & amp; & amp; 0 === d.length, e, !0), Rt.GeneralVendorsEnabled & amp; & amp;
            (Bt.isV2Template || h !== dt) & amp; & amp;
            this.setListSearchValues(Ae.vendors), Rt.GeneralVendorsEnabled || !Bt.isV2Template & amp; & amp;
            h === dt || this.setListSearchValues(Ae.cookies), zt("#filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, Rt.PCenterCookieListFilterAria), zt("#filter-btn-handler title").html(Rt.PCenterCookieListFilterAria), Bt.isV2Template & amp; & amp;
            zt("#ot-sel-blk span:first-child").html(Rt.PCenterAllowAllConsentText || Rt.ConsentText);
            for (var t = function(o) {
                    var n = Mt.hosts.hostTemplate.cloneNode(!0),
                        e = n.querySelector("." + Xt.P_Host_Bx),
                        t = d[o].DisplayName || d[o].HostName;
                    e & amp; & amp;
                    Gt.setHtmlAttributes(e, {
                        id: "host-" + o,
                        name: "host-" + o,
                        "aria-label": t + " " + Rt.PCViewCookiesText,
                        "aria-controls": "ot-host-acc-txt-" + o
                    });
                    var r = n.querySelector(Xt.P_Acc_Txt);
                    if (r & amp; & amp; Gt.setHtmlAttributes(r, {
                            id: "ot-host-acc-txt-" + o,
                            role: "region",
                            "aria-labelledby": e.id
                        }), !g || d[o].isFirstParty) {
                        var i = n.querySelector(".ot-host-tgl");
                        i & amp; & amp;
                        i.parentElement.removeChild(i)
                    } else {
                        var s = void 0;
                        p ? ((s = xn.chkboxEl.cloneNode(!0)).classList.add("ot-host-tgl"), s.querySelector("input").classList.add("host-checkbox-handler"), h === dt ? n.querySelector(Xt.P_Host_Hdr).insertAdjacentElement("beforeBegin", s) : n.querySelector(Xt.P_Tgl_Cntr).insertAdjacentElement("beforeEnd", s)) : s = n.querySelector(".ot-host-tgl"), Gt.setHtmlAttributes(s.querySelector("input"), {
                            id: "ot-host-chkbox-" + o,
                            "aria-label": t,
                            hostId: d[o].HostId,
                            ckType: d[o].Type
                        }), s.querySelector("label").setAttribute("for", "ot-host-chkbox-" + o), (d[o].Type === J.GenVendor ? Mt.genVendorsConsent[d[o].HostId] : -1 !== Mt.hostsConsent.indexOf(d[o].HostId + ":1")) ? (Gt.setCheckedAttribute(null, s.querySelector("input"), !0), d[o].isActive ? Gt.setDisabledAttribute(null, s.querySelector("input"), !0) : C = C || !0) : (C = !0, Gt.setCheckedAttribute(null, s.querySelector("input"), !1)), s.querySelector(Xt.P_Label_Txt).innerText = t
                    }
                    if (Rt.PCAccordionStyle === W.PlusMinus) n.querySelector(Xt.P_Acc_Header).insertAdjacentElement("afterBegin", xn.plusMinusEl.cloneNode(!0));
                    else if (p) {
                        var a = xn.arrowEl.cloneNode(!0);
                        h === dt ? n.querySelector(Xt.P_Host_View_Cookies).insertAdjacentElement("afterend", a) : n.querySelector(Xt.P_Tgl_Cntr).insertAdjacentElement("beforeEnd", a)
                    }
                    Rt.AddLinksToCookiepedia & amp; & amp;
                    !d[o].isFirstParty & amp; & amp;
                    (t = '\n                    &lt;a  class="cookie-label"\n                        href="http://cookiepedia.co.uk/host/' + d[o].HostName + '"\n                        rel="noopener"\n                        target="_blank"\n                    &gt;\n                        ' + t + '&amp;nbsp;&lt;span class="ot-scrn-rdr"&gt;' + Rt.NewWinTxt + "&lt;/span&gt;\n                    &lt;/a&gt;\n                "), n.querySelector(Xt.P_Host_Title).innerHTML = t, n.querySelector(Xt.P_Host_Desc).innerHTML = d[o].Description, d[o].PrivacyPolicy & amp; & amp;
                    Rt.pcShowCookieHost & amp; & amp;
                    n.querySelector(Xt.P_Host_Desc).insertAdjacentHTML("afterend", '&lt;a href="' + d[o].PrivacyPolicy + '" rel="noopener" target="_blank"&gt;' + (p ? Rt.PCGVenPolicyTxt : Rt.PCCookiePolicyText) + '&amp;nbsp;&lt;span class="ot-scrn-rdr"&gt;' + Rt.NewWinTxt + "&lt;/span&gt;&lt;/a&gt;");
                    var l = n.querySelector(Xt.P_Host_View_Cookies);
                    if (Mt.showGeneralVendors & amp; & amp; !d[o].Cookies.length ? (Gt.removeChild(l), zt(n).addClass("ot-hide-acc")) : Rt.PCViewCookiesText & amp; & amp;
                        (l.innerHTML = Rt.PCViewCookiesText), !d[o].Description || !Rt.pcShowCookieHost) {
                        var c = n.querySelector(Xt.P_Host_Desc);
                        c.parentElement.removeChild(c)
                    }
                    zt(n.querySelector(Xt.P_Host_Opt)).html(""), d[o].Cookies.forEach(function(e) {
                        var t = u.getCookieElement(e, d[o]);
                        zt(n.querySelector(Xt.P_Host_Opt)).append(t)
                    }), zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " ul" + Xt.P_Host_Cntr).append(n)
                }, o = 0; o & lt; d.length; o++) t(o);
            var n = 1 === d.length & amp; & amp;
            d[0].HostName === Rt.PCFirstPartyCookieListText;
            if (Kt.isOptOutEnabled() & amp; & amp; !n) {
                Gt.setDisabledAttribute("#onetrust-pc-sdk #select-all-hosts-groups-handler", null, !C);
                for (var r = zt("#onetrust-pc-sdk " + Xt.P_Host_Cntr + " .ot-host-tgl input").el, i = 0; i & lt; r.length; i++) r[i].addEventListener("click", this.hostsListEvent);
                zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr).removeClass("ot-hide"), this.hostsListEvent()
            } else zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr).addClass("ot-hide")
        }, Rn.prototype.hostsListEvent = function() {
            for (var e = zt("#onetrust-pc-sdk " + Xt.P_Host_Cntr + " .ot-host-tgl input").el, t = zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Host_El).el[0], o = zt("#onetrust-pc-sdk #select-all-hosts-groups-handler").el[0], n = zt("#onetrust-pc-sdk " + Xt.P_Cnsnt_Header).el[0], r = !0, i = 0; i & lt; e.length; i++) {
                if (!e[i].checked) {
                    r = !1;
                    break
                }
                r = !0
            }
            r ? t.classList.remove("line-through") : t.classList.add("line-through"), o.checked = !0;
            for (var s = 0; s & lt; e.length & amp; & amp; !e[s].checked; s++) s !== e.length - 1 || e[s].checked || (o.checked = !1);
            Gt.setCheckedAttribute("", o, o.checked), o & amp; & amp;
            n & amp; & amp;
            o.setAttribute(this.ARIA_LABEL_ATTRIBUTE, n.textContent + " " + Rt.PCenterSelectAllVendorsText)
        }, Rn.prototype.loadHostList = function(e, o) {
            void 0 === e & amp; & amp;
            (e = "");
            var n = [],
                r = [],
                t = [];
            if (Mt.cookieListType !== X.GenVen & amp; & amp;
                (Rt.Groups.forEach(function(e) {
                    y(e.SubGroups, [e]).forEach(function(e) {
                        if (o.length) {
                            if (-1 !== o.indexOf(e.CustomGroupId)) {
                                var t = On.getCookiesForGroup(e);
                                r = y(r, t.firstPartyCookiesList), n = y(n, t.thirdPartyCookiesList)
                            }
                        } else t = On.getCookiesForGroup(e), r = y(r, t.firstPartyCookiesList), n = y(n, t.thirdPartyCookiesList)
                    })
                }), r.length & amp; & amp; n.unshift({
                    HostName: Rt.PCFirstPartyCookieListText,
                    DisplayName: Rt.PCFirstPartyCookieListText,
                    HostId: "first-party-cookies-group",
                    isFirstParty: !0,
                    Cookies: r,
                    Description: ""
                })), Mt.showGeneralVendors) {
                var i = this.getFilteredGenVendorsList(o),
                    s = this.mapGenVendorListToHostFormat(i);
                t = y(n, s)
            } else t = n;
            Mt.currentGlobalFilteredList = t, this.initHostData(e, t)
        }, Rn.prototype.mapGenVendorListToHostFormat = function(e) {
            return e.map(function(e) {
                return {
                    Cookies: e.Cookies,
                    DisplayName: e.Name,
                    HostName: e.Name,
                    HostId: e.VendorCustomId,
                    Description: e.Description,
                    Type: J.GenVendor,
                    PrivacyPolicy: e.PrivacyPolicyUrl,
                    isActive: -1 & lt;Mt.alwaysActiveGenVendors.indexOf(e.VendorCustomId)
                }
            })
        }, Rn.prototype.mapGenVendorToHostFormat = function(e) {
            return {
                Cookies: e.Cookies,
                DisplayName: e.Name,
                HostName: e.Name,
                HostId: e.VendorCustomId,
                Description: e.Description,
                Type: J.GenVendor
            }
        }, Rn.prototype.getFilteredGenVendorsList = function(t) {
            var o = [],
                e = [];
            if (t.length) {
                Rt.Groups.forEach(function(e) {
                    y(e.SubGroups, [e]).forEach(function(e) {
                        -1 !== t.indexOf(e.CustomGroupId) & amp; & amp;
                        e.GeneralVendorsIds & amp; & amp;
                        e.GeneralVendorsIds.forEach(function(e) {
                            o.push(e)
                        })
                    })
                });
                var n = Rt.GeneralVendors;
                return o.length & amp; & amp;
                (e = n.filter(function(e) {
                    if (-1 & lt; o.indexOf(e.VendorCustomId)) return e
                })), e
            }
            return Rt.GeneralVendors
        }, Rn.prototype.initVendorsData = function(e, t) {
            var o = this,
                n = t,
                r = Mt.vendors.list;
            if (this.setBackBtnTxt(), zt(Xt.P_Vendor_List + " #select-all-text-container p").html(Rt.PCenterAllowAllConsentText), Bt.isV2Template & amp; & amp;
                (zt("#ot-sel-blk span:first-child").html(Rt.PCenterAllowAllConsentText || Rt.ConsentText), zt("#ot-sel-blk span:last-child").html(Rt.LegitInterestText), zt("#onetrust-pc-sdk " + Xt.P_Cnsnt_Header).html(Rt.PCenterAllowAllConsentText), Ft.legIntSettings.PAllowLI & amp; & amp; !Ft.legIntSettings.PShowLegIntBtn & amp; & amp; zt("#onetrust-pc-sdk .ot-sel-all-hdr .ot-li-hdr").html(Rt.PCenterLegitInterestText), Ft.legIntSettings.PAllowLI & amp; & amp; !Ft.legIntSettings.PShowLegIntBtn || Et(zt("#ot-sel-blk span:first-child").el[0], "max-width: 100%;", !0)), zt("#onetrust-pc-sdk #filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, Rt.PCenterVendorListFilterAria), zt("#onetrust-pc-sdk #filter-btn-handler title").html(Rt.PCenterVendorListFilterAria), this.hasIabVendors = 0 & lt; n.length, this.showEmptyResults(!this.hasGoogleVendors & amp; & amp; !this.hasIabVendors & amp; & amp; !this.hasGenVendors, e, !1), 0 === n.length ? zt("#ot-lst-cnt .ot-acc-cntr").hide() : zt("#ot-lst-cnt .ot-acc-cntr").show(), zt("#onetrust-pc-sdk " + Xt.P_Vendor_Container + " ." + Xt.P_Ven_Bx).length !== r.length & amp; & amp; this.attachVendorsToDOM(), n.length !== r.length) r.forEach(function(e) {
                var t = zt(Xt.P_Vendor_Container + " #IAB" + e.vendorId).el[0].parentElement; - 1 === n.indexOf(e) ? Et(t, "display: none;", !0) : Et(t, o._displayNull, !0)
            });
            else
                for (var i = zt(Xt.P_Vendor_Container + ' li[style^="display: none"]').el, s = 0; s & lt; i.length; s++) Et(i[s], this._displayNull, !0);
            !Bt.isV2Template & amp; & amp;
            Ft.pcName === dt || this.setListSearchValues(Ae.vendors);
            var a = document.querySelector("#vdr-lst-dsc");
            if (!a & amp; & amp; Rt.PCenterVendorListDescText)
                if ((a = document.createElement("p")).id = "vdr-lst-dsc", zt(a).html(Rt.PCenterVendorListDescText), Ft.pcName !== dt & amp; & amp; Ft.pcName !== at) {
                    var l = document.querySelector("#onetrust-pc-sdk " + Xt.P_Vendor_Title_Elm);
                    l & amp; & amp;
                    l.insertAdjacentElement("afterend", a)
                } else {
                    var c = document.querySelector(Xt.P_Vendor_Content + " .ot-sdk-row");
                    c & amp; & amp;
                    c.insertAdjacentElement("beforebegin", a)
                } zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr).removeClass("ot-hide"), this.vendorsListEvent(), Ft.legIntSettings.PAllowLI & amp; & amp;
            this.vendorLegIntToggleEvent()
        }, Rn.prototype.updateVendorsDOMToggleStatus = function(e, t) {
            void 0 === t & amp; & amp;
            (t = !1);
            for (var o = zt(Xt.P_Vendor_Container + " " + Xt.P_Tgl_Cntr).el, n = Rt.VendorConsentModel === Do, r = 0; r & lt; o.length; r++) {
                var i = o[r].querySelector("." + Xt.P_Ven_Ctgl + " input"),
                    s = o[r].querySelector("." + Xt.P_Ven_Ltgl + " input");
                t ? (i & amp; & amp; Gt.setCheckedAttribute("", i, n), s & amp; & amp; Gt.setCheckedAttribute("", s, n)) : (i & amp; & amp; Gt.setCheckedAttribute("", i, e), s & amp; & amp; Gt.setCheckedAttribute("", s, e))
            }
            var a = zt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
            if (a) {
                a.parentElement.classList.remove("line-through");
                var l = t ? n : e;
                Gt.setCheckedAttribute("", a, l)
            }
            var c = zt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
            c & amp; & amp;
            (c.parentElement.classList.remove("line-through"), l = t ? n : e, Gt.setCheckedAttribute("", c, l)), Rt.UseGoogleVendors & amp; & amp;
            (t ? this.updateGoogleCheckbox(n) : this.updateGoogleCheckbox(e)), Mt.showGeneralVendors & amp; & amp;
            Rt.GenVenOptOut & amp; & amp;
            this.updateGenVenCheckbox(e)
        }, Rn.prototype.updateGenVenCheckbox = function(e) {
            for (var t = zt(Xt.P_Gven_List + " .ot-ven-gvctgl input").el, o = 0; o & lt; t.length; o++) Gt.setCheckedAttribute("", t[o], e);
            var n = zt("#onetrust-pc-sdk #ot-selall-gnven-handler").el[0];
            n & amp; & amp;
            (n.parentElement.classList.remove("line-through"), Gt.setCheckedAttribute("", n, e))
        }, Rn.prototype.updateGoogleCheckbox = function(e) {
            for (var t = zt("#ot-addtl-venlst .ot-tgl-cntr input").el, o = 0; o & lt; t.length; o++) Gt.setCheckedAttribute("", t[o], e);
            var n = zt("#onetrust-pc-sdk #ot-selall-adtlven-handler").el[0];
            n & amp; & amp;
            (n.parentElement.classList.remove("line-through"), Gt.setCheckedAttribute("", n, e))
        }, Rn.prototype.updateVendorDisclosure = function(e, t) {
            var o = zt(Xt.P_Vendor_Container + " #IAB" + e).el[0].parentElement;
            if (t & amp; & amp; t.disclosures) {
                var r = o.querySelector(Xt.P_Ven_Dets),
                    i = o.querySelector(Xt.P_Ven_Disc).cloneNode(!0),
                    n = i.cloneNode(!0);
                n.innerHTML = "&lt;p&gt;&lt;b&gt;" + Rt.PCenterVendorListDisclosure + ": &lt;/b&gt;&lt;/p&gt;", r.insertAdjacentElement("beforeend", n), t.disclosures.forEach(function(e) {
                    var t = i.cloneNode(!0),
                        o = "&lt;p&gt;" + Rt.PCenterVendorListStorageIdentifier + " &lt;/p&gt; &lt;p&gt;" + (e.name || e.identifier) + " &lt;/p&gt;";
                    if (e.type & amp; & amp;
                        (o += "&lt;p&gt;" + Rt.PCenterVendorListStorageType + " &lt;/p&gt; &lt;p&gt;" + e.type + " &lt;/p&gt;"), e.maxAgeSeconds) {
                        var n = Gt.calculateCookieLifespan(e.maxAgeSeconds);
                        o += "&lt;p&gt;" + Rt.PCenterVendorListLifespan + " &lt;/p&gt; &lt;p&gt;" + n + " &lt;/p&gt;"
                    }
                    e.domain & amp; & amp;
                    (o += "&lt;p&gt;" + Rt.PCenterVendorListStorageDomain + " &lt;/p&gt; &lt;p&gt;" + e.domain + " &lt;/p&gt;"), e.purposes & amp; & amp;
                    (o += "&lt;p&gt;" + Rt.PCenterVendorListStoragePurposes + " &lt;/p&gt; &lt;p&gt;" + e.purposes + " &lt;/p&gt;"), t.innerHTML = o, r.insertAdjacentElement("beforeend", t)
                })
            }
        }, Rn.prototype.addDescriptionElement = function(e, t) {
            var o = document.createElement("p");
            o.innerHTML = t || "", e.parentNode.insertBefore(o, e)
        }, Rn.prototype.attachVendorsToDOM = function() {
            var R, q, M = Mt.vendors.list,
                U = Rt.IabType,
                j = Ft.pcName,
                z = Mt.vendors.vendorTemplate.cloneNode(!0);
            Mt.discVendors = {}, Bt.isV2Template & amp; & amp;
            (R = z.querySelector(".ot-ven-pur").cloneNode(!0), q = z.querySelector(Xt.P_Ven_Disc).cloneNode(!0), zt(z.querySelector(".ot-ven-dets")).html(""));
            for (var e = function(e) {
                    var t = z.cloneNode(!0),
                        o = M[e].vendorId,
                        n = M[e].vendorName,
                        r = t.querySelector("." + Xt.P_Ven_Bx),
                        i = Mt.vendorsSetting[o],
                        s = t.querySelector(Xt.P_Ven_Link);
                    Gt.setHtmlAttributes(r, {
                        id: "IAB" + o,
                        name: "IAB" + o,
                        "aria-controls": "IAB-ACC-TXT" + o,
                        "aria-label": n
                    }), r.nextElementSibling.setAttribute("for", "IAB" + o), t.querySelector(Xt.P_Ven_Name).innerText = n, Gt.setHtmlAttributes(s, {
                        href: M[e].policyUrl,
                        rel: "noopener",
                        target: "_blank"
                    }), s.innerHTML = Rt.PCenterViewPrivacyPolicyText + "&amp;nbsp;&lt;span class='ot-scrn-rdr'&gt;" + n + " " + Rt.NewWinTxt + "&lt;/span&gt;";
                    var a = Bt.isV2Template ? xn.chkboxEl.cloneNode(!0) : t.querySelector(".ot-checkbox"),
                        l = a.cloneNode(!0),
                        c = a.cloneNode(!0),
                        d = t.querySelector(Xt.P_Tgl_Cntr);
                    Bt.isV2Template || a.parentElement.removeChild(a);
                    var u = t.querySelector(Xt.P_Arrw_Cntr);
                    if (i.consent) {
                        c.classList.add(Xt.P_Ven_Ctgl);
                        var p = -1 !== Ut.inArray(o + ":true", Mt.vendors.selectedVendors),
                            h = c.querySelector("input");
                        if (Bt.isV2Template) {
                            h.classList.add("vendor-checkbox-handler");
                            var g = c.querySelector(".ot-label-status");
                            Rt.PCShowConsentLabels ? g.innerHTML = p ? Rt.PCActiveText : Rt.PCInactiveText : Gt.removeChild(g)
                        }
                        Gt.setCheckedAttribute("", h, p), Gt.setHtmlAttributes(h, {
                            id: Xt.P_Vendor_CheckBx + "-" + e,
                            vendorid: o,
                            "aria-label": n
                        }), c.querySelector("label").setAttribute("for", Xt.P_Vendor_CheckBx + "-" + e), c.querySelector(Xt.P_Label_Txt).textContent = n, j === dt ? Rt.PCTemplateUpgrade ? d.insertAdjacentElement("beforeend", c) : zt(d).append(c) : d.insertBefore(c, u)
                    }
                    if (i.legInt & amp; & amp; !i.specialPurposesOnly) {
                        var C = -1 !== Ut.inArray(o + ":true", Mt.vendors.selectedLegIntVendors);
                        if (Ft.legIntSettings.PShowLegIntBtn) {
                            var y = to.generateLegIntButtonElements(C, o, !0);
                            t.querySelector(Xt.P_Acc_Txt).insertAdjacentHTML("beforeend", y);
                            var f = t.querySelector(".ot-remove-objection-handler");
                            f & amp; & amp;
                            Et(f, f.getAttribute("data-style"))
                        } else h = l.querySelector("input"), Bt.isV2Template & amp; & amp;
                        (h.classList.add("vendor-checkbox-handler"), g = l.querySelector(".ot-label-status"), Rt.PCShowConsentLabels ? g.innerHTML = C ? Rt.PCActiveText : Rt.PCInactiveText : Gt.removeChild(g)), l.classList.add(Xt.P_Ven_Ltgl), h.classList.remove("vendor-checkbox-handler"), h.classList.add("vendor-leg-checkbox-handler"), Gt.setCheckedAttribute("", h, C), Gt.setHtmlAttributes(h, {
                            id: Xt.P_Vendor_LegCheckBx + "-" + e,
                            "leg-vendorid": o,
                            "aria-label": n
                        }), l.querySelector("label").setAttribute("for", Xt.P_Vendor_LegCheckBx + "-" + e), l.querySelector(Xt.P_Label_Txt).textContent = n, t.querySelector("." + Xt.P_Ven_Ctgl) & amp; & amp;
                        (u = t.querySelector("." + Xt.P_Ven_Ctgl)), j !== dt || d.children.length ? d.insertBefore(l, u) : zt(d).append(l), i.consent || j !== dt || l.classList.add(Xt.P_Ven_Ltgl_Only)
                    }
                    Bt.isV2Template & amp; & amp;
                    (d.insertAdjacentElement("beforeend", xn.arrowEl.cloneNode(!0)), Rt.PCAccordionStyle !== W.Caret & amp; & amp; t.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", xn.plusMinusEl.cloneNode(!0)));
                    var v = t.querySelector(Xt.P_Acc_Txt);
                    if (v & amp; & amp; Gt.setHtmlAttributes(v, {
                            id: "IAB-ACC-TXT" + o,
                            "aria-labelledby": "IAB-ACC-TXT" + o,
                            role: "region"
                        }), M[e].deviceStorageDisclosureUrl & amp; & amp;
                        (Gt.setHtmlAttributes(r, {
                            "disc-vid": o
                        }), Mt.discVendors[o] = {
                            isFetched: !1,
                            disclosureUrl: M[e].deviceStorageDisclosureUrl
                        }), Bt.isV2Template) K.populateVendorDetailsHtml(t, R, M[e], q);
                    else {
                        var k = t.querySelector(".vendor-option-purpose"),
                            m = t.querySelector(".vendor-consent-group"),
                            b = t.querySelector(".legitimate-interest"),
                            P = t.querySelector(".legitimate-interest-group"),
                            S = t.querySelector(".spl-purpose"),
                            A = t.querySelector(".spl-purpose-grp"),
                            T = t.querySelector(".vendor-feature"),
                            I = t.querySelector(".vendor-feature-group"),
                            L = t.querySelector(".vendor-spl-feature"),
                            _ = t.querySelector(".vendor-spl-feature-grp"),
                            V = m.cloneNode(!0),
                            B = P.cloneNode(!0),
                            E = A.cloneNode(!0),
                            w = I.cloneNode(!0),
                            x = _.cloneNode(!0);
                        q = t.querySelector(Xt.P_Ven_Disc);
                        var G = t.querySelector(Xt.P_Ven_Dets),
                            O = q.cloneNode(!0);
                        q.parentElement.removeChild(q), K.attachVendorDisclosure(O, M[e]), G.insertAdjacentElement("afterbegin", O), m.parentElement.removeChild(m), i.consent & amp; & amp;
                        (zt(k.querySelector("p")).text(Rt.ConsentPurposesText), M[e].purposes.forEach(function(e) {
                            zt(V.querySelector(".consent-category")).text(e.purposeName);
                            var t = V.querySelector(".consent-status");
                            t & amp; & amp;
                            V.removeChild(t), b.insertAdjacentHTML("beforebegin", V.outerHTML)
                        })), i.consent || k.parentElement.removeChild(k);
                        var N = B.querySelector(".vendor-opt-out-handler");
                        "IAB2" === Rt.IabType & amp; & amp;
                        N.parentElement.removeChild(N), P.parentElement.removeChild(P), i.legInt & amp; & amp;
                        (zt(b.querySelector("p")).text(Rt.LegitimateInterestPurposesText), Ft.legIntSettings.PAllowLI & amp; & amp;
                            "IAB2" === Rt.IabType & amp; & amp; M[e].legIntPurposes.forEach(function(e) {
                                zt(B.querySelector(".consent-category")).text(e.purposeName), b.insertAdjacentHTML("afterend", B.outerHTML)
                            })), i.legInt || b.parentElement.removeChild(b), A.parentElement.removeChild(A), "IAB2" === U & amp; & amp;
                        M[e].specialPurposes.forEach(function(e) {
                            zt(E.querySelector(".consent-category")).text(e.purposeName), S.insertAdjacentHTML("afterend", E.outerHTML)
                        }), 0 === M[e].specialPurposes.length ? S.parentElement.removeChild(S) : zt(S.querySelector("p")).text(Rt.SpecialPurposesText), I.parentElement.removeChild(I), zt(T.querySelector("p")).text(Rt.FeaturesText), M[e].features.forEach(function(e) {
                            zt(w.querySelector(".consent-category")).text(e.featureName), T.insertAdjacentHTML("afterend", w.outerHTML)
                        }), 0 === M[e].features.length & amp; & amp;
                        T.parentElement.removeChild(T), L.parentElement.removeChild(_), "IAB2" === U & amp; & amp;
                        M[e].specialFeatures.forEach(function(e) {
                            zt(x.querySelector(".consent-category")).text(e.featureName), L.insertAdjacentHTML("afterend", x.outerHTML)
                        }), 0 === M[e].specialFeatures.length ? L.parentElement.removeChild(L) : zt(L.querySelector("p")).text(Rt.SpecialFeaturesText);
                        var D = r.parentElement.querySelector(".vendor-purposes p");
                        D.parentElement.removeChild(D)
                    }
                    zt("#onetrust-pc-sdk " + Xt.P_Vendor_Container).append(t);
                    var H = zt("#onetrust-pc-sdk " + Xt.P_Sel_All_Vendor_Consent_Handler).el[0];
                    H & amp; & amp;
                    H.setAttribute(K.ARIA_LABEL_ATTRIBUTE, Rt.PCenterSelectAllVendorsText + " " + Rt.LegitInterestText);
                    var F = zt("#onetrust-pc-sdk " + Xt.P_Sel_All_Vendor_Leg_Handler).el[0];
                    F & amp; & amp;
                    F.setAttribute(K.ARIA_LABEL_ATTRIBUTE, Rt.PCenterSelectAllVendorsText + " " + Rt.ConsentText)
                }, K = this, t = 0; t & lt; M.length; t++) e(t)
        }, Rn.prototype.populateVendorDetailsHtml = function(e, t, o, n) {
            var r = e.querySelector(".ot-ven-dets"),
                i = Mt.vendorsSetting[o.vendorId],
                s = n.cloneNode(!0);
            if (this.attachVendorDisclosure(s, o), r.insertAdjacentElement("beforeEnd", s), i.consent) {
                var a = t.cloneNode(!0),
                    l = "&lt;h4&gt;" + Rt.ConsentPurposesText + "&lt;/h4&gt;";
                l += "&lt;ul&gt;", o.purposes.forEach(function(e) {
                    l += "&lt;li&gt;&lt;p&gt;" + e.purposeName + "&lt;/p&gt;&lt;/li&gt;"
                }), l += "&lt;/ul&gt;", a.innerHTML = l, r.insertAdjacentElement("beforeEnd", a)
            }
            if (i.legInt & amp; & amp; o.legIntPurposes.length) {
                var c = t.cloneNode(!0),
                    d = "&lt;h4&gt;" + Rt.LegitimateInterestPurposesText + "&lt;/h4&gt;";
                d += "&lt;ul&gt;", o.legIntPurposes.forEach(function(e) {
                    d += "&lt;li&gt;&lt;p&gt;" + e.purposeName + "&lt;/p&gt;&lt;/li&gt;"
                }), d += "&lt;/ul&gt;", c.innerHTML = d, r.insertAdjacentElement("beforeEnd", c)
            }
            if ("IAB2" === Ft.iabType & amp; & amp; o.specialPurposes.length) {
                var u = t.cloneNode(!0),
                    p = "&lt;h4&gt;" + Rt.SpecialPurposesText + "&lt;/h4&gt;";
                p += "&lt;ul&gt;", o.specialPurposes.forEach(function(e) {
                    p += "&lt;li&gt;&lt;p&gt;" + e.purposeName + "&lt;/p&gt;&lt;/li&gt;"
                }), p += "&lt;/ul&gt;", u.innerHTML = p, r.insertAdjacentElement("beforeEnd", u)
            }
            if (o.features.length) {
                var h = t.cloneNode(!0),
                    g = "&lt;h4&gt;" + Rt.FeaturesText + "&lt;/h4&gt;";
                g += "&lt;ul&gt;", o.features.forEach(function(e) {
                    g += "&lt;li&gt;&lt;p&gt;" + e.featureName + "&lt;/p&gt;&lt;/li&gt;"
                }), g += "&lt;/ul&gt;", h.innerHTML = g, r.insertAdjacentElement("beforeEnd", h)
            }
            if ("IAB2" === Ft.iabType & amp; & amp; o.specialFeatures.length) {
                var C = t.cloneNode(!0),
                    y = "&lt;h4&gt;" + Rt.SpecialFeaturesText + "&lt;/h4&gt;";
                y += "&lt;ul&gt;", o.specialFeatures.forEach(function(e) {
                    y += "&lt;li&gt;&lt;p&gt;" + e.featureName + "&lt;/p&gt;&lt;/li&gt;"
                }), y += "&lt;/ul&gt;", C.innerHTML = y, r.insertAdjacentElement("beforeEnd", C)
            }
        }, Rn.prototype.InitializeVendorList = function() {
            if (Mt.vendors.list = Mt.iabData ? Mt.iabData.vendors : null, Mt.vendors.vendorTemplate = zt(Xt.P_Vendor_Container + " li").el[0].cloneNode(!0), zt("#onetrust-pc-sdk " + Xt.P_Vendor_Container).html(""), !Bt.isV2Template & amp; & amp; Ft.pcName === dt) {
                var e, t = Mt.vendors.vendorTemplate.querySelectorAll(Xt.P_Acc_Header);
                Ft.legIntSettings.PAllowLI & amp; & amp;
                "IAB2" === Ft.iabType ? (e = t[0]).parentElement.removeChild(e) : (e = t[1]).parentElement.removeChild(e)
            }
        }, Rn.prototype.cancelVendorFilter = function() {
            for (var e = zt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t & lt; e.length; t++) {
                var o = e[t].getAttribute("data-purposeid"),
                    n = 0 & lt; = Mt.filterByIABCategories.indexOf(o);
                Gt.setCheckedAttribute(null, e[t], n)
            }
        }, Rn.prototype.attachVendorDisclosure = function(e, t) {
            var o = "&lt;h4&gt;" + Rt.PCenterVendorListLifespan + " :&lt;/h4&gt;&lt;span&gt; " + t.cookieMaxAge + "&lt;/span&gt;";
            t.usesNonCookieAccess & amp; & amp;
            (o += "&lt;p&gt;" + Rt.PCenterVendorListNonCookieUsage + "&lt;/p&gt;"), e.innerHTML = o
        }, Rn.prototype.updateVendorFilterList = function() {
            for (var e = zt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t & lt; e.length; t++) {
                var o = e[t].getAttribute("data-purposeid");
                if (e[t].checked & amp; & amp; Mt.filterByIABCategories.indexOf(o) & lt; 0) Mt.filterByIABCategories.push(o);
                else if (!e[t].checked & amp; & amp; - 1 & lt; Mt.filterByIABCategories.indexOf(o)) {
                    var n = Mt.filterByIABCategories;
                    Mt.filterByIABCategories.splice(n.indexOf(o), 1)
                }
            }
            return Mt.filterByIABCategories
        }, Rn.prototype.saveVendorStatus = function() {
            var e = Mt.vendors,
                t = Mt.oneTrustIABConsent;
            t.purpose = e.selectedPurpose.slice(), t.legimateInterest = e.selectedLegInt.slice(), t.vendors = e.selectedVendors.slice(), t.legIntVendors = e.selectedLegIntVendors.slice(), t.specialFeatures = e.selectedSpecialFeatures.slice();
            var o = Mt.addtlVendors;
            o.vendorConsent = Object.keys(o.vendorSelected)
        }, Rn.prototype.updateIabVariableReference = function() {
            var e = Mt.oneTrustIABConsent,
                t = Mt.vendors;
            t.selectedPurpose = e.purpose.slice(), t.selectedLegInt = e.legimateInterest.slice(), t.selectedVendors = e.vendors.slice(), t.selectedLegIntVendors = e.legIntVendors.slice(), t.selectedSpecialFeatures = e.specialFeatures.slice();
            var o = Mt.addtlVendors;
            o.vendorSelected = {}, o.vendorConsent.forEach(function(e) {
                o.vendorSelected[e] = !0
            })
        }, Rn.prototype.allowAllhandler = function() {
            fn.initializeIABData(!0, !1)
        }, Rn.prototype.rejectAllHandler = function(e) {
            void 0 === e & amp; & amp;
            (e = !1), fn.initializeIABData(!1, !0, e)
        }, Rn.prototype.populateAddtlVendors = function(e) {
            var t = Rt.PCAccordionStyle === W.Caret ? xn.arrowEl.cloneNode(!0) : xn.plusMinusEl.cloneNode(!0),
                o = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
                n = o.cloneNode(!0);
            Gt.removeChild(n.querySelector("#ot-selall-hostcntr")), Gt.removeChild(o.querySelector("#ot-selall-vencntr")), Gt.removeChild(o.querySelector("#ot-selall-licntr"));
            var r = xn.accordionEl.cloneNode(!0);
            r.classList.add("ot-iab-acc"), r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t.cloneNode(!0)), r.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "&lt;div class='ot-vensec-title'&gt;" + Rt.PCIABVendorsText + "&lt;/div&gt;"), r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n), r.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", zt("#ot-ven-lst").el[0]), zt("#ot-lst-cnt .ot-sdk-column").append(r), r.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, Rt.PCIABVendorsText), this.iabAccInit = !0;
            var i = n.cloneNode(!0);
            Gt.removeChild(i.querySelector("#ot-selall-licntr")), i.querySelector(".ot-chkbox").id = "ot-selall-adtlvencntr", i.querySelector("input").id = "ot-selall-adtlven-handler", i.querySelector("label").setAttribute("for", "ot-selall-adtlven-handler");
            var s = xn.accordionEl.cloneNode(!0);
            s.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t.cloneNode(!0)), s.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "&lt;div class='ot-vensec-title'&gt;" + Rt.PCGoogleVendorsText + "&lt;/div&gt;"), s.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", i), s.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "&lt;ul id='ot-addtl-venlst'&gt;&lt;/ul&gt;"), s.classList.add("ot-adtlv-acc"), s.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, Rt.PCGoogleVendorsText);
            var a = Mt.vendors.vendorTemplate.cloneNode(!0);
            for (var l in a.querySelector("button").classList.remove("ot-ven-box"), a.querySelector("button").classList.add("ot-addtl-venbox"), Gt.removeChild(a.querySelector(".ot-acc-txt")), e)
                if (e[l]) {
                    var c = a.cloneNode(!0),
                        d = e[l].name;
                    c.querySelector(Xt.P_Ven_Name).innerText = d;
                    var u = c.querySelector("button");
                    Gt.setHtmlAttributes(u, {
                        id: "Adtl-IAB" + l
                    }), Gt.setHtmlAttributes(c.querySelector(Xt.P_Ven_Link), {
                        href: e[l].policyUrl,
                        rel: "noopener",
                        target: "_blank"
                    }), c.querySelector(Xt.P_Ven_Link).innerHTML = Rt.PCenterViewPrivacyPolicyText + "&amp;nbsp;&lt;span class='ot-scrn-rdr'&gt;" + d + " " + Rt.NewWinTxt + "&lt;/span&gt;";
                    var p = xn.chkboxEl.cloneNode(!0);
                    p.classList.remove("ot-ven-ctgl"), p.classList.add("ot-ven-adtlctgl");
                    var h = Boolean(Mt.addtlVendors.vendorSelected[l]),
                        g = p.querySelector("input");
                    g.classList.add("ot-addtlven-chkbox-handler");
                    var C = p.querySelector(".ot-label-status");
                    Rt.PCShowConsentLabels ? C.innerHTML = h ? Rt.PCActiveText : Rt.PCInactiveText : Gt.removeChild(C), Gt.setCheckedAttribute("", g, h), Gt.setHtmlAttributes(g, {
                        id: "ot-addtlven-chkbox-" + l,
                        "addtl-vid": l,
                        "aria-label": d
                    }), p.querySelector("label").setAttribute("for", "ot-addtlven-chkbox-" + l), p.querySelector(Xt.P_Label_Txt).textContent = d;
                    var y = c.querySelector(Xt.P_Tgl_Cntr);
                    zt(y).append(p), y.insertAdjacentElement("beforeend", xn.arrowEl.cloneNode(!0)), Rt.PCAccordionStyle !== W.Caret & amp; & amp;
                    c.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", xn.plusMinusEl.cloneNode(!0)), zt(s.querySelector("#ot-addtl-venlst")).append(c)
                } zt("#ot-lst-cnt .ot-sdk-column").append(s), zt("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr &gt; input", function(e) {
                Gt.setCheckedAttribute(null, e.target, e.target.checked)
            }), this.showConsentHeader()
        }, Rn.prototype.populateGeneralVendors = function() {
            var p = this,
                e = Rt.GeneralVendors,
                t = document.querySelector(".ot-gv-acc"),
                h = !!t;
            if (!e.length) return this.hasGenVendors = !1, void(t & amp; & amp; zt(t).hide());
            this.hasGenVendors = !0, t & amp; & amp;
            zt(t).show();
            var o = Rt.PCAccordionStyle === W.Caret ? xn.arrowEl.cloneNode(!0) : xn.plusMinusEl.cloneNode(!0);
            this.iabAccInit || this.addIabAccordion();
            var n = document.createElement("div");
            n.setAttribute("class", "ot-sel-all-chkbox");
            var r = xn.chkboxEl.cloneNode(!0);
            r.id = "ot-selall-gnvencntr", r.querySelector("input").id = "ot-selall-gnven-handler", r.querySelector("label").setAttribute("for", "ot-selall-gnven-handler"), zt(n).append(r);
            var g = xn.accordionEl.cloneNode(!0);
            g.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o.cloneNode(!0)), g.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "&lt;div class='ot-vensec-title'&gt;" + Rt.PCenterGeneralVendorsText + "&lt;/div&gt;"), Rt.GenVenOptOut & amp; & amp;
            g.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n), g.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "&lt;ul id='ot-gn-venlst'&gt;&lt;/ul&gt;"), g.classList.add("ot-gv-acc"), g.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, Rt.PCenterGeneralVendorsText);
            var C = Mt.vendors.vendorTemplate.cloneNode(!0);
            C.querySelector("button").classList.remove("ot-ven-box"), C.querySelector("button").classList.add("ot-gv-venbox"), zt(C.querySelector(".ot-acc-txt")).html('&lt;ul class="ot-host-opt"&gt;&lt;/ul&gt;'), h & amp; & amp;
            zt("" + Xt.P_Gven_List).html("");
            var y = !0;
            e.forEach(function(e) {
                var o = p.mapGenVendorToHostFormat(e),
                    n = C.cloneNode(!0),
                    t = e.VendorCustomId,
                    r = e.Name,
                    i = n.querySelector(Xt.P_Ven_Link);
                n.querySelector(Xt.P_Ven_Name).innerText = r;
                var s = n.querySelector("button");
                if (Gt.setHtmlAttributes(s, {
                        id: "Gn-" + t
                    }), e.PrivacyPolicyUrl ? (Gt.setHtmlAttributes(i, {
                        href: e.PrivacyPolicyUrl,
                        rel: "noopener",
                        target: "_blank"
                    }), i.innerHTML = Rt.PCGVenPolicyTxt + "&amp;nbsp;&lt;span class='ot-scrn-rdr'&gt;" + r + " " + Rt.NewWinTxt + "&lt;/span&gt;") : i.classList.add("ot-hide"), p.addDescriptionElement(i, e.Description), Rt.GenVenOptOut) {
                    var a = xn.chkboxEl.cloneNode(!0);
                    a.classList.remove("ot-ven-ctgl"), a.classList.add("ot-ven-gvctgl");
                    var l = Boolean(Mt.genVendorsConsent[t]),
                        c = a.querySelector("input");
                    c.classList.add("ot-gnven-chkbox-handler");
                    var d = a.querySelector(".ot-label-status");
                    Rt.PCShowConsentLabels ? d.innerHTML = l ? Rt.PCActiveText : Rt.PCInactiveText : Gt.removeChild(d), Gt.setCheckedAttribute("", c, l), Gt.setHtmlAttributes(c, {
                        id: "ot-gnven-chkbox-" + t,
                        "gn-vid": t,
                        "aria-label": r
                    }), vo.isGenVenPartOfAlwaysActiveGroup(t) ? Gt.setDisabledAttribute(null, c, !0) : y = !1, a.querySelector("label").setAttribute("for", "ot-gnven-chkbox-" + t), a.querySelector(Xt.P_Label_Txt).textContent = r;
                    var u = n.querySelector(Xt.P_Tgl_Cntr);
                    zt(u).append(a), u.insertAdjacentElement("beforeend", xn.arrowEl.cloneNode(!0))
                }
                Rt.PCAccordionStyle !== W.Caret & amp; & amp;
                n.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", xn.plusMinusEl.cloneNode(!0)), e.Cookies.length || zt(n).addClass("ot-hide-acc"), e.Cookies.forEach(function(e) {
                    var t = p.getCookieElement(e, o);
                    zt(n.querySelector(".ot-host-opt")).append(t)
                }), h ? zt("" + Xt.P_Gven_List).append(n) : zt(g.querySelector("" + Xt.P_Gven_List)).append(n)
            }), h || zt("#ot-lst-cnt .ot-sdk-column").append(g), zt("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr &gt; input", function(e) {
                Gt.setCheckedAttribute(null, e.target, e.target.checked)
            }), this.showConsentHeader(), y & amp; & amp;
            Gt.setDisabledAttribute("#ot-selall-gnven-handler", null, !0)
        }, Rn.prototype.addIabAccordion = function() {
            var e = Rt.PCAccordionStyle === W.Caret ? xn.arrowEl.cloneNode(!0) : xn.plusMinusEl.cloneNode(!0),
                t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
                o = t.cloneNode(!0);
            Gt.removeChild(o.querySelector("#ot-selall-hostcntr")), Gt.removeChild(t.querySelector("#ot-selall-vencntr")), Gt.removeChild(t.querySelector("#ot-selall-licntr"));
            var n = xn.accordionEl.cloneNode(!0);
            n.classList.add("ot-iab-acc"), n.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)), n.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "&lt;div class='ot-vensec-title'&gt;" + Rt.PCIABVendorsText + "&lt;/div&gt;"), n.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o), n.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", zt("#ot-ven-lst").el[0]), zt("#ot-lst-cnt .ot-sdk-column").append(n), n.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, Rt.PCIABVendorsText), this.iabAccInit = !0
        }, Rn.prototype.showConsentHeader = function() {
            var e = Ft.legIntSettings;
            zt("#onetrust-pc-sdk .ot-sel-all-hdr").show(), e.PAllowLI & amp; & amp;
            !e.PShowLegIntBtn || zt("#onetrust-pc-sdk .ot-li-hdr").hide()
        }, Rn.prototype.setBackBtnTxt = function() {
            Bt.isV2Template ? (zt(Xt.P_Vendor_List + " .back-btn-handler").attr(this.ARIA_LABEL_ATTRIBUTE, Rt.PCenterBackText), zt(Xt.P_Vendor_List + " .back-btn-handler title").html(Rt.PCenterBackText)) : zt(Xt.P_Vendor_List + " .back-btn-handler .pc-back-button-text").html(Rt.PCenterBackText)
        }, Rn.prototype.getCookieElement = function(e, t) {
            var o = Mt.hosts.hostCookieTemplate.cloneNode(!0),
                n = o.querySelector("div").cloneNode(!0);
            n.classList.remove("cookie-name-container"), zt(o).html("");
            var r = e.Name;
            Rt.AddLinksToCookiepedia & amp; & amp;
            t.isFirstParty & amp; & amp;
            (r = Kt.getCookieLabel(e, Rt.AddLinksToCookiepedia));
            var i = n.cloneNode(!0);
            if (i.classList.add(Xt.P_c_Name), i.querySelector("div:nth-child(1)").innerHTML = Rt.pcCListName, i.querySelector("div:nth-child(2)").innerHTML = r, zt(o).append(i), Rt.pcShowCookieHost) {
                var s = n.cloneNode(!0);
                s.classList.add(Xt.P_c_Host), s.querySelector("div:nth-child(1)").innerHTML = Rt.pcCListHost, s.querySelector("div:nth-child(2)").innerHTML = e.Host, zt(o).append(s)
            }
            if (Rt.pcShowCookieDuration) {
                var a = n.cloneNode(!0);
                a.classList.add(Xt.P_c_Duration), a.querySelector("div:nth-child(1)").innerHTML = Rt.pcCListDuration, a.querySelector("div:nth-child(2)").innerHTML = e.IsSession ? Rt.LifespanTypeText : Kt.getDuration(e), zt(o).append(a)
            }
            if (Rt.pcShowCookieType) {
                var l = t.Type === J.GenVendor ? !e.isThirdParty : t.isFirstParty,
                    c = n.cloneNode(!0);
                c.classList.add(Xt.P_c_Type), c.querySelector("div:nth-child(1)").innerHTML = Rt.pcCListType, c.querySelector("div:nth-child(2)").innerHTML = l ? Rt.firstPartyTxt : Rt.thirdPartyTxt, zt(o).append(c)
            }
            if (Rt.pcShowCookieCategory) {
                var d = void 0;
                if (d = t.Type === J.GenVendor ? e.category : t.isFirstParty ? e.groupName : t.groupName) {
                    var u = n.cloneNode(!0);
                    u.classList.add(Xt.P_c_Category), u.querySelector("div:nth-child(1)").innerHTML = Rt.pcCListCategory, u.querySelector("div:nth-child(2)").innerHTML = d, zt(o).append(u)
                }
            }
            if (Rt.pcShowCookieDescription & amp; & amp; e.description) {
                var p = n.cloneNode(!0);
                p.classList.add(Xt.P_c_Desc), p.querySelector("div:nth-child(1)").innerHTML = Rt.pcCListDescription, p.querySelector("div:nth-child(2)").innerHTML = e.description, zt(o).append(p)
            }
            return o
        }, Rn);

        function Rn() {
            this.hasIabVendors = !1, this.hasGoogleVendors = !1, this.hasGenVendors = !1, this.iabAccInit = !1, this._displayNull = "display: '';", this.ARIA_LABEL_ATTRIBUTE = "aria-label", this.googleSearchSelectors = {
                vendorAccBtn: "#ot-addtl-venlst #Adtl-IAB",
                name: "name",
                accId: ".ot-adtlv-acc",
                selectAllEvntHndlr: "#ot-selall-adtlven-handler",
                venListId: "#ot-addtl-venlst",
                ctgl: ".ot-ven-adtlctgl"
            }, this.genVendorSearchSelectors = {
                vendorAccBtn: "#ot-gn-venlst #Gn-",
                name: "Name",
                accId: ".ot-gv-acc",
                selectAllEvntHndlr: "#ot-selall-gnven-handler",
                venListId: "#ot-gn-venlst",
                ctgl: ".ot-ven-gvctgl"
            }
        }
        var qn, Mn = (Un.prototype.updateGtmMacros = function(e) {
            void 0 === e & amp; & amp;
            (e = !0);
            var n = [];
            Mt.groupsConsent.forEach(function(e) {
                var t = e.replace(":1", ""),
                    o = eo.getGrpStatus(eo.getGroupById(t)).toLowerCase() === qe;
                Gt.endsWith(e, ":1") & amp; & amp;
                (fn.canSoftOptInInsertForGroup(t) || o) & amp; & amp;
                n.push(t)
            }), Mt.hostsConsent.forEach(function(e) {
                Gt.endsWith(e, ":1") & amp; & amp;
                n.push(e.replace(":1", ""))
            }), Mt.showGeneralVendors & amp; & amp;
            Rt.GenVenOptOut & amp; & amp;
            Rt.GeneralVendors.forEach(function(e) {
                Mt.genVendorsConsent[e.VendorCustomId] & amp; & amp;
                (Mt.softOptInGenVendors.includes(e.VendorCustomId) & amp; & amp; Ao.isLandingPage() || n.push(e.VendorCustomId))
            }), Mt.vsIsActiveAndOptOut & amp; & amp;
            Mt.getVendorsInDomain().forEach(function(e) {
                Mt.vsConsent.get(e.CustomVendorServiceId) & amp; & amp;
                n.push(e.CustomVendorServiceId)
            });
            var t, o, r = "," + Gt.arrToStr(n) + ",";
            Rt.GoogleConsent.GCEnable & amp; & amp;
            this.updateGCMTags(n), window.OnetrustActiveGroups = r, window.OptanonActiveGroups = r, Ft.gcmUpdateCallback & amp; & amp;
            Ft.gcmUpdateCallback(), Ft.otDataLayer.ignore || void 0 === this._window[Ft.otDataLayer.name] || this._window[Ft.otDataLayer.name].constructor !== Array ? !Ft.otDataLayer.ignore & amp; & amp;
            Ft.otDataLayer.name & amp; & amp;
            (this._window[Ft.otDataLayer.name] = [{
                event: "OneTrustLoaded",
                OnetrustActiveGroups: r
            }, {
                event: "OptanonLoaded",
                OptanonActiveGroups: r
            }]): (this._window[Ft.otDataLayer.name].push({
                event: "OneTrustLoaded",
                OnetrustActiveGroups: r
            }), this._window[Ft.otDataLayer.name].push({
                event: "OptanonLoaded",
                OptanonActiveGroups: r
            })), !e & amp; & amp;
            Ft.gtmUpdatedinStub || (t = new CustomEvent("consent.onetrust", {
                detail: n
            }));
            var i = xt.readCookieParam(Oe.OPTANON_CONSENT, "groups");
            !Mt.fireOnetrustGrp & amp; & amp;
            i & amp; & amp;
            !e & amp; & amp;
            Ft.gtmUpdatedinStub || (Mt.fireOnetrustGrp = !1, !Ft.otDataLayer.ignore & amp; & amp; this._window[Ft.otDataLayer.name] & amp; & amp; this._window[Ft.otDataLayer.name].constructor === Array & amp; & amp; this._window[Ft.otDataLayer.name].push({
                event: "OneTrustGroupsUpdated",
                OnetrustActiveGroups: r
            }), o = new CustomEvent("OneTrustGroupsUpdated", {
                detail: n
            })), setTimeout(function() {
                t & amp; & amp;
                window.dispatchEvent(t), o & amp; & amp;
                window.dispatchEvent(o)
            })
        }, Un.prototype.updateGCMTags = function(e) {
            var t = {};
            if (this.canUpdateGCMCategories()) {
                if (Rt.GoogleConsent.GCAdStorage !== ht) {
                    var o = e.includes(Rt.GoogleConsent.GCAdStorage) ? ve.granted : ve.denied;
                    t[ye.ad_storage] = o
                }
                if (Rt.GoogleConsent.GCAnalyticsStorage !== ht) {
                    var n = e.includes(Rt.GoogleConsent.GCAnalyticsStorage) ? ve.granted : ve.denied;
                    t[ye.analytics_storage] = n
                }
                if (Rt.GoogleConsent.GCFunctionalityStorage !== ht) {
                    var r = e.includes(Rt.GoogleConsent.GCFunctionalityStorage) ? ve.granted : ve.denied;
                    t[ye.functionality_storage] = r
                }
                if (Rt.GoogleConsent.GCPersonalizationStorage !== ht) {
                    var i = e.includes(Rt.GoogleConsent.GCPersonalizationStorage) ? ve.granted : ve.denied;
                    t[ye.personalization_storage] = i
                }
                if (Rt.GoogleConsent.GCSecurityStorage !== ht) {
                    var s = e.includes(Rt.GoogleConsent.GCSecurityStorage) ? ve.granted : ve.denied;
                    t[ye.security_storage] = s
                }
            }
            var a = xt.getCookie(Oe.ALERT_BOX_CLOSED),
                l = Ft.getRegionRule().Global;
            if ("function" != typeof window.gtag) {
                var c = this._window;
                window.gtag = function(e, t, o) {
                    Ft.otDataLayer.ignore || (c[Ft.otDataLayer.name] ? c[Ft.otDataLayer.name].push(arguments) : c[Ft.otDataLayer.name] = [arguments])
                }
            }
            "function" == typeof window.gtag & amp; & amp;
            (Ft.gcmDevIdSet || (window.gtag(pe.set, "developer_id.dYWJhMj", !0), Ft.gcmDevIdSet = !0), a & amp; & amp;
                (l || (t[ye.region] = Ft.gcmCountries), 0 !== Object.keys(t).length & amp; & amp; window.gtag(pe.consent, ge.update, t)))
        }, Un.prototype.canUpdateGCMCategories = function() {
            return Rt.GoogleConsent.GCAdStorage !== ht || Rt.GoogleConsent.GCAnalyticsStorage !== ht || Rt.GoogleConsent.GCFunctionalityStorage !== ht || Rt.GoogleConsent.GCPersonalizationStorage !== ht || Rt.GoogleConsent.GCSecurityStorage !== ht
        }, Un);

        function Un() {
            this._window = window
        }
        var jn, zn = "Banner",
            Kn = "Preference Center",
            Wn = "API",
            Jn = "Close",
            Yn = "Allow All",
            Xn = "Reject All",
            Qn = "Confirm",
            $n = "Confirm",
            Zn = "Continue without Accepting",
            er = (tr.prototype.showConsentNotice = function() {
                switch (!Rt.NoBanner || Rt.ForceConsent ? zt(".onetrust-pc-dark-filter").removeClass("ot-hide") : zt(".onetrust-pc-dark-filter").addClass("ot-hide"), zt("#onetrust-pc-sdk").removeClass("ot-hide"), Ft.pcName) {
                    case lt:
                        zt("#onetrust-pc-sdk").el[0].classList.contains("ot-animated") || zt("#onetrust-pc-sdk").addClass("ot-animated");
                        var e = Rt.PreferenceCenterPosition,
                            t = Rt.useRTL,
                            o = t ? "right" : "left",
                            n = t ? "left" : "right";
                        zt("#onetrust-pc-sdk").el[0].classList.contains("ot-slide-out-" + ("right" === e ? n : o)) & amp; & amp;
                        zt("#onetrust-pc-sdk").removeClass("ot-slide-out-" + ("right" === e ? n : o)), zt("#onetrust-pc-sdk").addClass("ot-slide-in-" + ("right" === e ? n : o))
                }
                Ln.setAllowAllButton(), An.setPCFocus(An.getPCElements()), Rt.NoBanner & amp; & amp;
                Rt.ScrollCloseBanner || this.pcHasScroll()
            }, tr.prototype.hideConsentNoticeV2 = function() {
                if (0 !== zt(this.ONETRUST_PC_SDK).length) {
                    if (Bt.isV2Template & amp; & amp; this.closePCText(), Rt.ForceConsent & amp; & amp; !Kt.isCookiePolicyPage(Rt.AlertNoticeText) & amp; & amp; !to.isAlertBoxClosedAndValid() & amp; & amp; Rt.ShowAlertNotice ? zt("" + this.ONETRUST_PC_DARK_FILTER).css("z-index: 2147483645;").show() : zt("" + this.ONETRUST_PC_DARK_FILTER).fadeOut(Rt.PCLayout.Panel ? 500 : 400), Rt.PCLayout.Panel) {
                        var e = Rt.PreferenceCenterPosition,
                            t = Rt.useRTL,
                            o = t ? "right" : "left",
                            n = t ? "left" : "right";
                        zt("" + this.ONETRUST_PC_SDK).removeClass("ot-slide-in-" + ("right" === e ? n : o)), zt("" + this.ONETRUST_PC_SDK).addClass("ot-slide-out-" + ("right" === e ? n : o))
                    }
                    if (zt("" + this.ONETRUST_PC_SDK).fadeOut(Rt.PCLayout.Panel ? 500 : 400), Mt.isPCVisible = !1, (!Rt.NoBanner || !Rt.ScrollCloseBanner) & amp; & amp; this.bodyStyleChanged) {
                        var r = zt("html").el[0],
                            i = zt("body").el[0];
                        this.htmlStyleProp ? Et(r, this.htmlStyleProp, !1) : r.removeAttribute("style"), this.bodyStyleProp ? Et(i, this.bodyStyleProp, !1) : i.removeAttribute("style"), this.bodyStyleChanged = !1
                    }
                    if (Mt.pcLayer = _.Banner, Mt.pcSource || to.isAlertBoxClosedAndValid()) Mt.pcSource ? (Mt.pcSource.focus(), Mt.pcSource = null) : Rt.BInitialFocus ? Kt.resetFocusToBody() : this.setFocusOnPage();
                    else {
                        var s = zt("#onetrust-banner-sdk #onetrust-pc-btn-handler").el[0];
                        s & amp; & amp;
                        s.focus()
                    }
                } else this.setFocusOnPage()
            }, tr.prototype.setFocusOnPage = function() {
                var e = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
                Mt.isKeyboardUser & amp; & amp;
                e.length & amp; & amp;
                e[0].focus()
            }, tr.prototype.closePCText = function() {
                var e = document.querySelector("#onetrust-pc-sdk span[aria-live]"),
                    t = Rt.AboutCookiesText;
                e.innerText = t + " " + Rt.pcDialogClose
            }, tr.prototype.pcHasScroll = function() {
                var e = zt(Xt.P_Grp_Container).el[0] || zt("#onetrust-pc-sdk " + Xt.P_Content).el[0];
                if (e.scrollHeight & gt; e.clientHeight) {
                    this.bodyStyleChanged = !0;
                    var t = zt("body");
                    t.length & amp; & amp;
                    (this.bodyStyleProp = t.el[0].style.cssText, this.htmlStyleProp = zt("html").el[0].style.cssText, Et(zt("html").el[0], "overflow: hidden;", !0), Et(zt("body").el[0], "overflow: hidden;", !0))
                }
            }, tr.prototype.checkIfPcSdkContainerExist = function() {
                return !zt("#onetrust-pc-sdk").length
            }, tr);

        function tr() {
            this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter", this.bodyStyleChanged = !1
        }
        var or, nr = (rr.prototype.init = function() {
            this.insertHtml(), this.insertCss(), this.showNty(), this.initHandler()
        }, rr.prototype.getContent = function() {
            return c(this, void 0, void 0, function() {
                return C(this, function(e) {
                    return [2, gn.getSyncNtfyContent().then(function(e) {
                        Mt.syncNtfyGrp = {
                            name: e.name,
                            html: atob(e.html),
                            css: e.css
                        }
                    })]
                })
            })
        }, rr.prototype.insertHtml = function() {
            function e(e) {
                return t.querySelector(e)
            }
            this.removeHtml();
            var t = document.createDocumentFragment(),
                o = document.createElement("div");
            zt(o).html(Mt.syncNtfyGrp.html);
            var n = o.querySelector(this.El);
            Rt.BannerRelativeFontSizesToggle & amp; & amp;
            zt(n).addClass("otRelFont"), Rt.useRTL & amp; & amp;
            zt(n).attr("dir", "rtl"), zt(t).append(n);
            var r = Rt.NtfyConfig;
            this.initHtml("Sync", r.Sync, e, t.querySelector(this.El)), r.ShowCS ? zt(e(".ot-pc-handler")).html(r.CSTxt) : (zt(n).addClass("ot-hide-csbtn"), e(".ot-sync-btncntr").parentElement.removeChild(e(".ot-sync-btncntr")));
            var i = document.createElement("div");
            zt(i).append(t), zt("#onetrust-consent-sdk").append(i.firstChild)
        }, rr.prototype.initHandler = function() {
            zt(this.El + " .ot-sync-close-handler").on("click", function() {
                return or.close()
            })
        }, rr.prototype.showNty = function() {
            var e = zt(this.El);
            e.css("bottom: -300px;"), e.animate({
                bottom: "1em;"
            }, 1e3), setTimeout(function() {
                e.css("bottom: 1rem;")
            }, 1e3), e.focus()
        }, rr.prototype.changeState = function() {
            setTimeout(function() {
                or.refreshState()
            }, 1500)
        }, rr.prototype.refreshState = function() {
            function e(e) {
                return t.querySelector(e)
            }
            var t = zt(this.El).el[0];
            t.classList.add("ot-nty-complete"), t.classList.remove("ot-nty-sync");
            var o = Rt.NtfyConfig;
            this.initHtml("Complete", o.Complete, e, t), o.ShowCS & amp; & amp;
            ("LINK" === o.CSType & amp; & amp; zt(e(".ot-pc-handler")).addClass("ot-pc-link"), zt(".ot-sync-btncntr").show("inline-block"), this.alignContent(), zt(window).on("resize", function() {
                return or.resizeEvent
            })), setTimeout(function() {
                or.close()
            }, 1e3 * Rt.NtfyConfig.NtfyDuration)
        }, rr.prototype.insertCss = function() {
            var e = document.getElementById("onetrust-style");
            e.innerHTML += Mt.syncNtfyGrp.css, e.innerHTML += this.addCustomStyles()
        }, rr.prototype.addCustomStyles = function() {
            var e = Rt.NtfyConfig,
                t = e.Sync,
                o = e.Complete,
                n = e.CSButton,
                r = e.CSLink;
            return "\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync {\n            background-color: " + t.BgColor + ";\n            border: 1px solid " + t.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-refresh&gt;g {\n            fill: " + t.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync #ot-sync-title {\n            text-align: " + t.TitleAlign + ";\n            color: " + t.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync .ot-sync-desc  {\n            text-align: " + t.DescAlign + ";\n            color: " + t.DescColor + "; \n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete {\n            background-color: " + o.BgColor + ";\n            border: 1px solid " + o.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-check&gt;g {\n            fill: " + o.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete #ot-sync-title {\n            text-align: " + o.TitleAlign + ";\n            color: " + o.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete .ot-sync-desc  {\n            text-align: " + o.DescAlign + ";\n            color: " + o.DescColor + "; \n        }\n        " + ("BUTTON" === e.CSType ? "\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler {\n            background-color: " + n.BgColor + ";\n            border: 1px solid " + n.BdrColor + ";\n            color: " + n.Color + ";\n            text-align: " + n.Align + ";\n        }" : " #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler.ot-pc-link {\n            color: " + r.Color + ";\n            text-align: " + r.Align + ";\n        }") + "\n        "
        }, rr.prototype.initHtml = function(e, t, o, n) {
            var r = "Sync" === e ? ".ot-sync-refresh" : ".ot-sync-check",
                i = "Complete" === e ? ".ot-sync-refresh" : ".ot-sync-check";
            t.ShowIcon ? (zt(o(r)).show(), zt(o(i)).hide(), zt(o(".ot-sync-icon")).show("inline-block"), n.classList.remove("ot-hide-icon")) : (zt(o(".ot-sync-icon")).hide(), n.classList.add("ot-hide-icon")), t.Title ? zt(o("#ot-sync-title")).html(t.Title) : zt(o("#ot-sync-title")).hide(), t.Desc ? zt(o(".ot-sync-desc")).html(t.Desc) : zt(o(".ot-sync-desc")).hide(), t.ShowClose ? (zt(o(".ot-sync-close-handler")).show("inline-block"), zt(o(".ot-close-icon")).attr("aria-label", t.CloseAria), n.classList.remove("ot-hide-close")) : (zt(o(".ot-sync-close-handler")).hide(), n.classList.add("ot-hide-close"))
        }, rr.prototype.close = function() {
            this.hideSyncNtfy(), Kt.resetFocusToBody()
        }, rr.prototype.hideSyncNtfy = function() {
            Rt.NtfyConfig.ShowCS & amp; & amp;
            window.removeEventListener("resize", or.resizeEvent), zt("#ot-sync-ntfy").fadeOut(400)
        }, rr.prototype.removeHtml = function() {
            var e = zt(this.El).el;
            e & amp; & amp;
            Gt.removeChild(e)
        }, rr.prototype.alignContent = function() {
            zt(".ot-sync-btncntr").el[0].clientHeight & gt;
            zt(".ot-sync-titlecntr").el[0].clientHeight & amp; & amp;
            (zt(".ot-sync-titlecntr").addClass("ot-pos-abs"), zt(".ot-sync-btncntr").addClass("ot-pos-rel"))
        }, rr.prototype.resizeEvent = function() {
            window.innerWidth & lt; = 896 & amp; & amp;
            or.alignContent()
        }, rr);

        function rr() {
            this.El = "#ot-sync-ntfy"
        }
        var ir, sr = (ar.prototype.toggleVendorConsent = function(e, t) {
            void 0 === e & amp; & amp;
            (e = []), void 0 === t & amp; & amp;
            (t = null), e.length || (e = Mt.oneTrustIABConsent.vendors), e.forEach(function(e) {
                var t = e.split(":"),
                    o = t[0],
                    n = t[1],
                    r = zt(Xt.P_Vendor_Container + " ." + Xt.P_Ven_Ctgl + ' [vendorid="' + o + '"]').el[0];
                r & amp; & amp;
                Gt.setCheckedAttribute("", r, "true" === n)
            });
            var o = zt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
            if (o) {
                var n = Gt.getActiveIdArray(Gt.distinctArray(e));
                null === t & amp; & amp;
                (t = n.length === e.length), t || 0 === n.length ? o.parentElement.classList.remove(Qt.P_Line_Through) : o.parentElement.classList.add(Qt.P_Line_Through), Gt.setCheckedAttribute("", o, t)
            }
        }, ar.prototype.toggleVendorLi = function(e, t) {
            void 0 === e & amp; & amp;
            (e = []), void 0 === t & amp; & amp;
            (t = null), e.length || (e = Mt.oneTrustIABConsent.legIntVendors), e.forEach(function(e) {
                var t = e.split(":"),
                    o = t[0],
                    n = t[1],
                    r = zt(Xt.P_Vendor_Container + " ." + Xt.P_Ven_Ltgl + ' [leg-vendorid="' + o + '"]').el[0];
                r & amp; & amp;
                Gt.setCheckedAttribute("", r, "true" === n)
            });
            var o = zt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
            if (o) {
                var n = Gt.getActiveIdArray(Gt.distinctArray(e));
                null === t & amp; & amp;
                (t = n.length === e.length), t || 0 === n.length ? o.parentElement.classList.remove(Qt.P_Line_Through) : o.parentElement.classList.add(Qt.P_Line_Through), Gt.setCheckedAttribute("", o, t)
            }
        }, ar.prototype.updateVendorLegBtns = function(e) {
            void 0 === e & amp; & amp;
            (e = []), e.length || (e = Mt.oneTrustIABConsent.legIntVendors), e.forEach(function(e) {
                var t = e.split(":"),
                    o = t[0],
                    n = t[1],
                    r = zt(Xt.P_Vendor_Container + ' .ot-leg-btn-container[data-group-id="' + o + '"]').el[0];
                r & amp; & amp;
                Ln.updateLegIntBtnElement(r, "true" === n)
            })
        }, ar);

        function ar() {}
        var lr, cr = (dr.prototype.setFilterList = function(t) {
            var o = this,
                n = zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal + " " + Xt.P_Fltr_Option).el[0].cloneNode(!0);
            zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal + " " + Xt.P_Fltr_Options).html(""), (Bt.isV2Template || Rt.PCLayout.Popup) & amp; & amp;
            zt("#onetrust-pc-sdk #filter-cancel-handler").html(Rt.PCenterCancelFiltersText || "Cancel"), !Bt.isV2Template & amp; & amp;
            Rt.PCLayout.Popup || (zt("#onetrust-pc-sdk " + Xt.P_Clr_Fltr_Txt).html(Rt.PCenterClearFiltersText), zt("#filter-btn-handler").el[0].setAttribute("aria-label", Rt.PCenterFilterText)), zt("#onetrust-pc-sdk #filter-apply-handler").html(Rt.PCenterApplyFiltersText), t ? Ft.consentableGrps.forEach(function(e) {
                (Mt.cookieListType === X.GenVen || Mt.cookieListType === X.HostAndGenVen ? e.Hosts.length || e.FirstPartyCookies.length || e.GeneralVendorsIds & amp; & amp; e.GeneralVendorsIds.length : e.Hosts.length || e.FirstPartyCookies.length) & amp; & amp;
                o.filterGroupOptionSetter(n, e, t)
            }) : Ft.iabGrps.forEach(function(e) {
                o.filterGroupOptionSetter(n, e, t)
            })
        }, dr.prototype.setFilterListByGroup = function(e, t) {
            var o = this;
            if (!e || e.length & lt; = 0) zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal + " " + Xt.P_Fltr_Options).html("");
            else {
                var n = zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal + " " + Xt.P_Fltr_Option).el[0].cloneNode(!0);
                zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal + " " + Xt.P_Fltr_Options).html(""), (Bt.isV2Template || Rt.PCLayout.Popup) & amp; & amp;
                zt("#onetrust-pc-sdk #filter-cancel-handler").html(Rt.PCenterCancelFiltersText || "Cancel"), !Bt.isV2Template & amp; & amp;
                Rt.PCLayout.Popup || (zt("#onetrust-pc-sdk " + Xt.P_Clr_Fltr_Txt).html(Rt.PCenterClearFiltersText), zt("#filter-btn-handler").el[0].setAttribute("aria-label", Rt.PCenterFilterText)), zt("#onetrust-pc-sdk #filter-apply-handler").html(Rt.PCenterApplyFiltersText), e.forEach(function(e) {
                    o.filterGroupOptionSetter(n, e, t)
                })
            }
        }, dr.prototype.filterGroupOptionSetter = function(e, t, o) {
            var n = t.CustomGroupId,
                r = n + "-filter",
                i = e.cloneNode(!0);
            zt(Xt.P_Fltr_Modal + " " + Xt.P_Fltr_Options).append(i), zt(i.querySelector("input")).attr("id", r), zt(i.querySelector("label")).attr("for", r), Bt.isV2Template ? zt(i.querySelector(Xt.P_Label_Txt)).html(t.GroupName) : zt(i.querySelector("label span")).html(t.GroupName), zt(i.querySelector("input")).attr(o ? "data-optanongroupid" : "data-purposeid", n)
        }, dr);

        function dr() {
            this.bodyScrollProp = "", this.htmlScrollProp = "", this.ONETRUST_PC_SDK = "#onetrust-pc-sdk", this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter"
        }
        var ur, pr = (hr.prototype.initialiseCssReferences = function() {
            var e, t = "";
            document.getElementById("onetrust-style") ? e = document.getElementById("onetrust-style") : ((e = document.createElement("style")).id = "onetrust-style", Bt.fp.CookieV2CSP & amp; & amp; Mt.nonce & amp; & amp; e.setAttribute("nonce", Mt.nonce)), fn.commonStyles & amp; & amp;
            (t += fn.commonStyles), fn.bannerGroup & amp; & amp;
            (t += fn.bannerGroup.css, Bt.fp.CookieV2SSR || (t += this.addCustomBannerCSS()), Rt.bannerCustomCSS & amp; & amp;
                (t += Rt.bannerCustomCSS)), fn.preferenceCenterGroup & amp; & amp;
            (t += fn.preferenceCenterGroup.css, t += this.addCustomPreferenceCenterCSS()), fn.cookieListGroup & amp; & amp;
            (t += fn.cookieListGroup.css, t += this.addCustomCookieListCSS()), Rt.cookiePersistentLogo & amp; & amp;
            !Rt.cookiePersistentLogo.includes("ot_guard_logo.svg") & amp; & amp;
            (t += ".ot-floating-button__front{background-image:url('" + Rt.cookiePersistentLogo + "')}"), this.processedCSS = t, Ft.ignoreInjectingHtmlCss || (e.textContent = t, zt(document.head).append(e))
        }, hr);

        function hr() {
            this.processedCSS = "", this.addCustomBannerCSS = function() {
                var e = Rt.backgroundColor,
                    t = Rt.buttonColor,
                    o = Rt.textColor,
                    n = Rt.buttonTextColor,
                    r = Rt.bannerMPButtonColor,
                    i = Rt.bannerMPButtonTextColor,
                    s = Rt.bannerAccordionBackgroundColor,
                    a = Rt.BSaveBtnColor,
                    l = Rt.BCategoryContainerColor,
                    c = Rt.BLineBreakColor,
                    d = Rt.BCategoryStyleColor,
                    u = Rt.bannerLinksTextColor,
                    p = Rt.BFocusBorderColor,
                    h = "\n        " + (Ft.bannerName === tt ? e ? "#onetrust-consent-sdk #onetrust-banner-sdk .ot-sdk-container {\n                    background-color: " + e + ";}" : "" : e ? "#onetrust-consent-sdk #onetrust-banner-sdk {background-color: " + e + ";}" : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-policy-title,\n                    #onetrust-consent-sdk #onetrust-policy-text,\n                    #onetrust-consent-sdk .ot-b-addl-desc,\n                    #onetrust-consent-sdk .ot-dpd-desc,\n                    #onetrust-consent-sdk .ot-dpd-title,\n                    #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,\n                    #onetrust-banner-sdk .ot-cat-header {\n                        color: " + o + ";\n                    }" : "") + "\n            " + (s ? "#onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {\n                    background-color: " + s + ";}" : "") + "\n            " + (u ? " #onetrust-consent-sdk #onetrust-banner-sdk a[href],\n                    #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,\n                    #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn\n                        {\n                            color: " + u + ";\n                        }" : "");
                if ((t || n) & amp; & amp;
                    (h += "#onetrust-consent-sdk #onetrust-accept-btn-handler,\n                         #onetrust-banner-sdk #onetrust-reject-all-handler {\n                            " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (n ? "color: " + n + ";" : "") + "\n            }"), p & amp; & amp;
                    (h += "\n            #onetrust-consent-sdk #onetrust-banner-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-banner-sdk:focus {\n               outline-color: " + p + ";\n               outline-width: 1px;\n            }"), (i || r) & amp; & amp;
                    (h += "\n            #onetrust-consent-sdk #onetrust-pc-btn-handler,\n            #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {\n                " + (i ? "color: " + i + "; border-color: " + i + ";" : "") + "\n                background-color: \n                " + (r & amp; & amp; !Rt.BannerSettingsButtonDisplayLink ? r : e) + ";\n            }"), Ft.bannerName === rt) {
                    var g = void 0,
                        C = void 0,
                        y = void 0,
                        f = void 0,
                        v = void 0;
                    a & amp; & amp;
                    (g = "color: " + n + ";border-color: " + n + ";background-color: " + a + ";"), l & amp; & amp;
                    (C = "background-color: " + l + ";"), c & amp; & amp;
                    (y = "border-color: " + c + ";"), d & amp; & amp;
                    (f = "background-color: " + d + ";", v = "border-color: " + d + ";"), p & amp; & amp;
                    (h += "\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-tgl input:focus+.ot-switch .ot-switch-nob,\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-chkbox input:focus + label::before {\n                    outline-color: " + p + ";\n                    outline-width: 1px;\n                }"), h += "#onetrust-banner-sdk .ot-bnr-save-handler {" + g + "}#onetrust-banner-sdk .ot-cat-lst {" + C + "}#onetrust-banner-sdk .ot-cat-bdr {" + y + "}#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob:before,#onetrust-banner-sdk .ot-chkbox input:checked~label::before {" + f + "}#onetrust-banner-sdk .ot-chkbox label::before,#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob {" + v + "}#onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {background: inherit}"
                }
                return Rt.BCloseButtonType === de.Link & amp; & amp;
                (h += "#onetrust-banner-sdk.ot-close-btn-link .banner-close-button {color: " + Rt.BContinueColor + "}"), h
            }, this.addCustomPreferenceCenterCSS = function() {
                var e = Rt.pcBackgroundColor,
                    t = Rt.pcButtonColor,
                    o = Rt.pcTextColor,
                    n = Rt.pcButtonTextColor,
                    r = Rt.pcLinksTextColor,
                    i = Rt.PCenterEnableAccordion,
                    s = Rt.pcAccordionBackgroundColor,
                    a = Rt.pcMenuColor,
                    l = Rt.pcMenuHighLightColor,
                    c = Rt.pcLegIntButtonColor,
                    d = Rt.pcLegIntButtonTextColor,
                    u = Rt.PCFocusBorderColor,
                    p = "\n            " + (e ? (Ft.pcName === at ? "#onetrust-consent-sdk #onetrust-pc-sdk .group-parent-container,\n                        #onetrust-consent-sdk #onetrust-pc-sdk .manage-pc-container,\n                        #onetrust-pc-sdk " + Xt.P_Vendor_List : "#onetrust-consent-sdk #onetrust-pc-sdk") + ",\n                #onetrust-consent-sdk " + Xt.P_Search_Cntr + ",\n                " + (i & amp; & amp; Ft.pcName === at ? "#onetrust-consent-sdk #onetrust-pc-sdk .ot-accordion-layout" + Xt.P_Category_Item : "#onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle") + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Tab_Grp_Hdr + " .checkbox,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Title + ":after\n                " + (Bt.isV2Template ? ",#onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,\n                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,\n                        #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Triangle : "") + " {\n                    background-color: " + e + ";\n                }\n               " : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-pc-sdk h3,\n                #onetrust-consent-sdk #onetrust-pc-sdk h4,\n                #onetrust-consent-sdk #onetrust-pc-sdk h5,\n                #onetrust-consent-sdk #onetrust-pc-sdk h6,\n                #onetrust-consent-sdk #onetrust-pc-sdk p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Vendor_Container + " " + Xt.P_Ven_Opts + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Policy_Txt + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Li_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Leg_Select_All + " span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Host_Cntr + " " + Xt.P_Host_Info + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Fltr_Modal + " #modal-header,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Vendor_List + " " + Xt.P_Select_Cntr + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Vendor_List + " " + Xt.P_Vendor_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Vendor_List + " .back-btn-handler p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Vendor_List + " " + Xt.P_Ven_Name + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Vendor_List + " " + Xt.P_Vendor_Container + " .consent-category,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler \n                {\n                    color: " + o + ";\n                }" : "") + "\n            " + (r ? " #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Ven_Link + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Host_Cntr + " " + Xt.P_Host_Title + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Host_Cntr + " " + Xt.P_Acc_Header + " " + Xt.P_Host_View_Cookies + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Host_Cntr + " " + Xt.P_Host_Info + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Content + " " + Xt.P_Policy_Txt + " .ot-link-btn\n                    {\n                        color: " + r + ";\n                    }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover { text-decoration: underline;}\n            " + (i & amp; & amp; s ? "#onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Acc_Container + Xt.P_Acc_Txt + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Acc_Txt + " " + Xt.P_Subgrp_Tgl_Cntr + " .ot-switch.ot-toggle\n             {\n                background-color: " + s + ";\n            }" : "") + "\n            " + (s ? " #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Host_Cntr + " " + Xt.P_Host_Info + ",\n                    " + (Bt.isV2Template ? "#onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Acc_Txt + " .ot-ven-dets" : "#onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Acc_Txt + " " + Xt.P_Ven_Opts) + "\n                            {\n                                background-color: " + s + ";\n                            }" : "") + "\n        ";
                return (t || n) & amp; & amp;
                (p += "#onetrust-consent-sdk #onetrust-pc-sdk \n            button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {\n                " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (n ? "color: " + n + ";" : "") + "\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk ." + Xt.P_Active_Menu + " {\n                " + (t ? "border-color: " + t + ";" : "") + "\n            }\n            " + (Ft.pcName === at ? "#onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Category_Item + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk.ot-leg-opt-out " + Xt.P_Li_Hdr + "{\n                border-color: " + t + ";\n            }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler{\n                background-color: transparent;\n                border: 1px solid transparent;\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {\n                " + (c ? "background-color: " + c + ";" : "") + "\n                " + (d ? "color: " + d + "; border-color: " + d + ";" : "") + "\n            }\n            "), u & amp; & amp;
                (p += '\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-tgl input:focus + .ot-switch, .ot-switch .ot-switch-nob, .ot-switch .ot-switch-nob:before,\n            #onetrust-pc-sdk .ot-checkbox input[type="checkbox"]:focus + label::before,\n            #onetrust-pc-sdk .ot-chkbox input[type="checkbox"]:focus + label::before {\n                outline-color: ' + u + ";\n                outline-width: 1px;\n            }\n            #onetrust-pc-sdk .ot-host-item &gt; button:focus, #onetrust-pc-sdk .ot-ven-item &gt; button:focus {\n                border: 1px solid " + u + ";\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-vlst-cntr &gt; a:focus {\n               outline: 1px solid " + u + ";\n            }"), Rt.PCCloseButtonType === de.Link & amp; & amp;
                (p += "#onetrust-pc-sdk.ot-close-btn-link .ot-close-icon {color: " + Rt.PCContinueColor + "}"), Ft.pcName === dt & amp; & amp;
                (a & amp; & amp;
                    (p += "#onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {\n                    background-color: " + a + "\n                }"), l & amp; & amp;
                    (p += "#onetrust-consent-sdk #onetrust-pc-sdk ." + Xt.P_Active_Menu + " {\n                    background-color: " + l + "\n                }")), !Rt.PCTemplateUpgrade & amp; & amp;
                u & amp; & amp;
                (p += '\n            #onetrust-pc-sdk input[type="checkbox"]:focus + .accordion-header,\n            #onetrust-pc-sdk .category-item .ot-switch.ot-toggle input:focus + .ot-switch-label,\n            #onetrust-pc-sdk .checkbox input:focus + label::after {\n                outline-color: ' + u + ";\n                outline-width: 1px;\n            }"), Rt.pcCustomCSS & amp; & amp;
                (p += Rt.pcCustomCSS), p
            }, this.addCustomCookieListCSS = function() {
                var e = Rt.CookiesV2NewCookiePolicy ? "-v2.ot-sdk-cookie-policy" : "",
                    t = "\n                " + (Rt.cookieListPrimaryColor ? "\n                    #ot-sdk-cookie-policy" + e + " h5,\n                    #ot-sdk-cookie-policy" + e + " h6,\n                    #ot-sdk-cookie-policy" + e + " li,\n                    #ot-sdk-cookie-policy" + e + " p,\n                    #ot-sdk-cookie-policy" + e + " a,\n                    #ot-sdk-cookie-policy" + e + " span,\n                    #ot-sdk-cookie-policy" + e + " td,\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-description {\n                        color: " + Rt.cookieListPrimaryColor + ";\n                    }" : "") + "\n                    " + (Rt.cookieListTableHeaderColor ? "#ot-sdk-cookie-policy" + e + " th {\n                        color: " + Rt.cookieListTableHeaderColor + ";\n                    }" : "") + "\n                    " + (Rt.cookieListGroupNameColor ? "#ot-sdk-cookie-policy" + e + " .ot-sdk-cookie-policy-group {\n                        color: " + Rt.cookieListGroupNameColor + ";\n                    }" : "") + "\n                    " + (Rt.cookieListTitleColor ? "\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-title {\n                            color: " + Rt.cookieListTitleColor + ";\n                        }\n                    " : "") + "\n            " + (e & amp; & amp; Rt.CookieListTableHeaderBackgroundColor ? "\n                    #ot-sdk-cookie-policy" + e + " table th {\n                            background-color: " + Rt.CookieListTableHeaderBackgroundColor + ";\n                        }\n                    " : "") + "\n            ";
                return Rt.cookieListCustomCss & amp; & amp;
                (t += Rt.cookieListCustomCss), t
            }
        }

        function gr() {
            return Rt.PCCategoryStyle === se.Toggle ? xn.toggleEl.cloneNode(!0) : xn.chkboxEl.cloneNode(!0)
        }
        var Cr, yr = (fr.prototype.setHtmlTemplate = function(e) {
            Cr.setInternalData(), Cr.rootHtml = e, Cr.cloneHtmlElements()
        }, fr.prototype.getVendorListEle = function(e) {
            var t = document.createDocumentFragment(),
                r = document.createElement("div");
            r.classList.add("ot-vs-list");
            var i = Rt.VendorServiceConfig.PCVSExpandGroup;
            return e.forEach(function(e, t) {
                var o = "ot-vs-lst-id-" + t,
                    n = Cr.createVendor(e.groupRef, e, i, o);
                r.appendChild(n)
            }), t.appendChild(r), t
        }, fr.prototype.insertVendorServiceHtml = function(e, t) {
            if (e & amp; & amp; e.VendorServices & amp; & amp; !(e.VendorServices.length & lt; = 0) & amp; & amp; t) {
                var o = document.createDocumentFragment();
                Cr.setVendorContainer(o, e), Cr.setVendorList(o, e), t.appendChild(o)
            }
        }, fr.prototype.toggleVendorService = function(e, t, o, n) {
            var r = eo.getGroupById(e),
                i = eo.getVSById(t);
            if (n = n || Cr.getVendorInputElement(i.CustomVendorServiceId), Cr.setVendorServiceState(n, i, o), o) Cr.changeGroupState(r, o, Cr.isToggle);
            else {
                var s = r,
                    a = eo.getParentByGrp(r);
                a & amp; & amp;
                (s = a), Cr.checkGroupChildrenState(s) || Cr.changeGroupState(r, !1, Cr.isToggle)
            }
        }, fr.prototype.setVendorStateByGroup = function(e, t) {
            var o = e.VendorServices;
            if (Mt.showVendorService & amp; & amp; o)
                for (var n = 0, r = o; n & lt; r.length; n++) {
                    var i = r[n],
                        s = Cr.getVendorInputElement(i.CustomVendorServiceId);
                    Cr.setVendorServiceState(s, i, t)
                }
        }, fr.prototype.resetVendorUIState = function(e) {
            e.forEach(function(e, t) {
                var o = Cr.getVendorInputElement(t);
                Cr.changeVendorServiceUIState(o, e)
            })
        }, fr.prototype.setVendorServiceState = function(e, t, o) {
            Cr.changeVendorServiceState(t, o), Cr.changeVendorServiceUIState(e, o);
            var n = o ? dn : un;
            xo.triggerGoogleAnalyticsEvent(Ho, n, t.ServiceName + ": " + t.CustomVendorServiceId)
        }, fr.prototype.removeVSUITemplate = function(e) {
            var t = e.querySelector(".ot-vnd-serv");
            t & amp; & amp;
            e.removeChild(t)
        }, fr.prototype.consentAll = function(o) {
            Mt.getVendorsInDomain().forEach(function(e) {
                var t = o;
                o || (t = eo.isAlwaysActiveGroup(e.groupRef)), Cr.toggleVendorService(e.groupRef.CustomGroupId, e.CustomVendorServiceId, t || o)
            })
        }, fr.prototype.cloneHtmlElements = function() {
            var e = Cr.rootHtml.querySelector(".ot-vnd-serv");
            if (e) {
                var t = e.querySelector(".ot-vnd-serv-hdr-cntr"),
                    o = e.querySelector(".ot-vnd-lst-cont"),
                    n = o.querySelector(".ot-vnd-item"),
                    r = n.querySelector(".ot-vnd-info");
                Cr.vendorLabelContainerClone = t.cloneNode(!0), e.removeChild(t), Cr.vendorInfoClone = r.cloneNode(!0), n.querySelector(".ot-vnd-info-cntr").removeChild(r), Cr.vendorItemClone = n.cloneNode(!0), o.removeChild(n), Cr.vendorListContainerClone = o.cloneNode(!0), e.removeChild(o), Cr.vendorServMainContainerClone = e.cloneNode(!0), Cr.rootHtml.removeChild(e)
            }
        }, fr.prototype.setInternalData = function() {
            Cr.isToggle = Rt.PCCategoryStyle === se.Toggle;
            var e = Rt.VendorServiceConfig;
            Cr.stringTranslation = new Map, Cr.stringTranslation.set("ServiceName", e.PCVSNameText || "ServiceName"), Cr.stringTranslation.set("ParentCompany", e.PCVSParentCompanyText || "ParentCompany"), Cr.stringTranslation.set("Address", e.PCVSAddressText || "Address"), Cr.stringTranslation.set("DefaultCategoryName", e.PCVSDefaultCategoryText || "DefaultCategoryName"), Cr.stringTranslation.set("Description", e.PCVSDefaultDescriptionText || "Description"), Cr.stringTranslation.set("DPOEmail", e.PCVSDPOEmailText || "DPOEmail"), Cr.stringTranslation.set("DPOLink", e.PCVSDPOLinkText || "DPOLink"), Cr.stringTranslation.set("PrivacyPolicyLink", e.PCVSPrivacyPolicyLinkText || "PrivacyPolicyLink"), Cr.stringTranslation.set("CookiePolicyLink", e.PCVSCookiePolicyLinkText || "CookiePolicyLink"), Cr.stringTranslation.set("OptOutLink", e.PCVSOptOutLinkText || "OptOutLink"), Cr.stringTranslation.set("LegalBasis", e.PCVSLegalBasisText || "LegalBasis")
        }, fr.prototype.setVendorContainer = function(e, t) {
            var o = Cr.vendorServMainContainerClone.cloneNode(!0);
            o.setAttribute("data-group-id", t.CustomGroupId);
            var n = Cr.vendorLabelContainerClone.cloneNode(!0);
            n.querySelector(".ot-vnd-serv-hdr").innerHTML = Rt.VendorServiceConfig.PCVSListTitle, o.appendChild(n), e.appendChild(o)
        }, fr.prototype.setVendorList = function(e, t) {
            for (var o = 0, n = t.VendorServices, r = n.length, i = e.querySelector(".ot-vnd-serv"), s = Cr.vendorListContainerClone.cloneNode(), a = Rt.VendorServiceConfig.PCVSExpandCategory; o & lt; r; o++) {
                var l = Cr.createVendor(t, n[o], a);
                s.appendChild(l)
            }
            i.appendChild(s)
        }, fr.prototype.createVendor = function(e, t, o, n) {
            var r = Cr.vendorItemClone.cloneNode(!0);
            r.setAttribute("data-vnd-id", t.CustomVendorServiceId), Cr.setExpandVendorList(r, o), Cr.setVendorHeader(e, t, r, n);
            var i = r.querySelector(".ot-vnd-info-cntr");
            return Cr.setVendorInfo(i, t), r
        }, fr.prototype.setExpandVendorList = function(e, t) {
            e.querySelector("button").setAttribute("aria-expanded", "" + t)
        }, fr.prototype.setVendorHeader = function(e, t, o, n) {
            var r = Rt.VendorServiceConfig.PCVSAlwaysActive,
                i = "always active" === eo.getGrpStatus(e).toLowerCase(),
                s = o.querySelector(".ot-acc-hdr");
            i & amp; & amp;
            s.classList.add("ot-always-active-group");
            var a = null;
            i & amp; & amp;
            Rt.PCCategoryStyle === se.Toggle || (a = Cr.setHeaderInputStyle(e, t, i, n));
            var l = Cr.setHeaderText(t, s),
                c = Cr.setHeaderAccordionIcon();
            s.appendChild(l);
            var d = Cr.getPositionForElement(Rt.PCAccordionStyle, Cr.isToggle),
                u = d.positionIcon,
                p = d.positionInput;
            if (a & amp; & amp; s.insertAdjacentElement(p, a), i & amp; & amp; r) {
                var h = Cr.getAlwaysActiveElement();
                s.insertAdjacentElement("beforeend", h)
            }
            s.insertAdjacentElement(u, c)
        }, fr.prototype.getPositionForElement = function(e, t) {
            var o = "beforeend",
                n = "beforeend";
            return t & amp; & amp;
            e === W.PlusMinus & amp; & amp;
            (o = "afterbegin"), t || (n = "afterbegin"), {
                positionIcon: o,
                positionInput: n
            }
        }, fr.prototype.setHeaderAccordionIcon = function() {
            return Rt.PCAccordionStyle === W.Caret ? xn.arrowEl.cloneNode(!0) : xn.plusMinusEl.cloneNode(!0)
        }, fr.prototype.setHeaderText = function(e, t) {
            var o = t.querySelector(".ot-cat-header"),
                n = o.cloneNode();
            return t.removeChild(o), n.innerText = e.ServiceName, n
        }, fr.prototype.setHeaderInputStyle = function(e, t, o, n) {
            if (!Rt.VendorServiceConfig.PCVSOptOut) return null;
            var r = eo.checkIsActiveByDefault(e),
                i = !1,
                s = Mt.vsConsent;
            i = s.has(t.CustomVendorServiceId) ? s.get(t.CustomVendorServiceId) : r;
            var a = gr();
            a.querySelector("input").classList.add("category-switch-handler");
            var l = a.querySelector("input"),
                c = t.CustomVendorServiceId,
                d = null != n ? n : "ot-vendor-id-" + c,
                u = "ot-vendor-header-id-" + c;
            zt(l).attr("id", d), zt(l).attr("name", d), zt(l).attr("aria-labelledby", u), zt(l).data("ot-vs-id", c), zt(l).data("optanongroupid", e.CustomGroupId), l.disabled = o, Gt.setCheckedAttribute(null, l, i);
            var p = Cr.isToggle ? d : u;
            return zt(a.querySelector("label")).attr("for", p), zt(a.querySelector(".ot-label-txt")).html(t.ServiceName), a
        }, fr.prototype.getAlwaysActiveElement = function() {
            var e = document.createElement("div");
            return e.classList.add("ot-always-active"), e.innerText = Rt.AlwaysActiveText, e
        }, fr.prototype.setVendorInfo = function(e, t) {
            var o;
            for (o in t)
                if (!Cr.skipVendorInfoKey(o, t)) {
                    var n = t[o],
                        r = Cr.vendorInfoClone.cloneNode(!0);
                    r.dataset.vndInfoKey = o + "-" + t.CustomVendorServiceId;
                    var i = r.querySelector(".ot-vnd-lbl"),
                        s = r.querySelector(".ot-vnd-cnt");
                    i.innerHTML = Cr.getLocalizedString(o), s.innerHTML = n, e.appendChild(r)
                }
        }, fr.prototype.skipVendorInfoKey = function(e, t) {
            return "VendorServiceId" === e || "DefaultCategoryId" === e || "ServiceName" === e || "groupRef" === e || "CustomVendorServiceId" === e || "PurposeId" === e || !t[e]
        }, fr.prototype.getLocalizedString = function(e) {
            return Cr.stringTranslation.has(e) ? Cr.stringTranslation.get(e) : "DEFAULT"
        }, fr.prototype.checkGroupChildrenState = function(e) {
            for (var t, o, n = 0, r = null != (t = e.SubGroups) ? t : []; n & lt; r.length; n++) {
                var i = r[n];
                if (Cr.checkGroupChildrenState(i)) return !0
            }
            for (var s = 0, a = null != (o = e.VendorServices) ? o : []; s & lt; a.length; s++) {
                var l = a[s];
                if (Mt.vsConsent.get(l.CustomVendorServiceId)) return !0
            }
            return !1
        }, fr.prototype.changeVendorServiceState = function(e, t) {
            Mt.vsConsent.set(e.CustomVendorServiceId, t)
        }, fr.prototype.changeVendorServiceUIState = function(e, t) {
            e & amp; & amp;
            (Gt.setCheckedAttribute(null, e, t), Cr.isToggle & amp; & amp; e.parentElement.querySelector(".ot-switch-nob").setAttribute("aria-checked", "" + t))
        }, fr.prototype.changeGroupState = function(e, t, o) {
            var n = eo.getParentByGrp(e);
            n & amp; & amp;
            Cr.changeGroupState(n, t, o), Ln.toggleGrpStatus(e, t), Cr.updateGroupUIState(e.CustomGroupId, t, o)
        }, fr.prototype.updateGroupUIState = function(e, t, o) {
            var n = document.querySelector("#ot-group-id-" + e);
            n & amp; & amp;
            (Gt.setCheckedAttribute(null, n, t), o & amp; & amp; n.parentElement.querySelector(".ot-switch-nob").setAttribute("aria-checked", "" + t))
        }, fr.prototype.getVendorInputElement = function(e) {
            return document.getElementById("ot-vendor-id-" + e)
        }, fr);

        function fr() {}
        var vr, kr = (mr.prototype.insertPcHtml = function() {
            vr.jsonAddAboutCookies(Rt);
            var t = document.createDocumentFragment();
            if (fn.preferenceCenterGroup) {
                var e = document.createElement("div");
                zt(e).html(fn.preferenceCenterGroup.html);
                var o = e.querySelector("#onetrust-pc-sdk");
                /Chrome|Safari/i.test(navigator.userAgent) & amp; & amp;
                /Google Inc|Apple Computer/i.test(navigator.vendor) || zt(o).addClass("ot-sdk-not-webkit"), Rt.useRTL & amp; & amp;
                zt(o).attr("dir", "rtl"), Ft.legIntSettings.PAllowLI & amp; & amp;
                "IAB2" === Ft.iabType & amp; & amp;
                (zt(o).addClass("ot-leg-opt-out"), Ft.legIntSettings.PShowLegIntBtn & amp; & amp; zt(o).addClass("ot-leg-btn")), Rt.BannerRelativeFontSizesToggle & amp; & amp;
                zt(o).addClass("otRelFont"), Rt.PCShowConsentLabels & amp; & amp;
                zt(o).addClass("ot-tgl-with-label"), (Rt.UseGoogleVendors || Mt.showGeneralVendors) & amp; & amp;
                zt(o).addClass("ot-addtl-vendors"), "right" === Rt.PreferenceCenterPosition & amp; & amp;
                zt(o).addClass(Rt.useRTL ? "right-rtl" : "right"), zt(t).append(o);
                var n = function(e) {
                        return t.querySelector(e)
                    },
                    r = function(e) {
                        return t.querySelectorAll(e)
                    },
                    i = zt(r(Xt.P_Close_Btn)).el;
                if (Rt.ShowPreferenceCenterCloseButton)
                    for (Rt.CloseText || (Rt.CloseText = "Close Preference Center"), s = 0; s & lt; i.length; s++) Rt.PCCloseButtonType === de.Link & amp; & amp;
                Rt.PCTemplateUpgrade ? (zt(i[s]).html(Rt.PCContinueText), zt(o).addClass("ot-close-btn-link"), zt(i[s]).el.removeAttribute("aria-label")) : zt(i[s]).el.setAttribute("aria-label", Rt.CloseText);
                else
                    for (var s = 0; s & lt; i.length; s++) zt(i[s].parentElement).el.removeChild(i[s]);
                Rt.Language & amp; & amp;
                Rt.Language.Culture & amp; & amp;
                zt(n("#onetrust-pc-sdk")).attr("lang", Rt.Language.Culture);
                var a = n(Xt.P_Logo);
                if (a & amp; & amp; Rt.optanonLogo) {
                    var l = Kt.updateCorrectUrl(Rt.optanonLogo);
                    Kt.checkMobileOfflineRequest(Kt.getBannerVersionUrl()) & amp; & amp;
                    (l = Gt.getRelativeURL(l, !0, !0)), zt(a).attr("style", 'background-image: url("' + l + '");\n                    background-position: ' + (Rt.useRTL ? "right" : "left") + ";"), Rt.PCLogoAria & amp; & amp;
                    zt(a).attr("aria-label", Rt.PCLogoAria)
                }
                if (Kt.insertFooterLogo(r(".ot-pc-footer-logo a")), zt(n(Xt.P_Title)).html(Rt.MainText), Rt.PCCloseButtonType === de.Link & amp; & amp; Rt.PCTemplateUpgrade & amp; & amp; Ft.pcName === dt & amp; & amp; zt(n(Xt.P_Title)).addClass("ot-pc-title-shrink"), zt(n(Bo)).attr("aria-label", Rt.MainText), Ft.pcName === dt & amp; & amp;
                    (zt(n(Xt.P_Privacy_Txt)).html(Rt.AboutCookiesText), zt(n(Xt.P_Privacy_Hdr)).html(Rt.AboutCookiesText)), zt(n(Xt.P_Policy_Txt)).html(Rt.MainInfoText), Rt.AboutText & amp; & amp; zt(n(Xt.P_Policy_Txt)).html(zt(n(Xt.P_Policy_Txt)).html() + '\n                &lt;br/&gt;&lt;a href="' + Rt.AboutLink + '" class="privacy-notice-link" rel="noopener" target="_blank"\n                        aria-label="' + Rt.PCCookiePolicyLinkScreenReader + '"&gt;' + Rt.AboutText + "&lt;/a&gt;"), Rt.PCenterVendorListLinkText) {
                    var c = !Rt.IsIabEnabled & amp; & amp;
                    Mt.showGeneralVendors ? "ot-gv-list-handler" : "onetrust-vendors-list-handler";
                    n(Xt.P_Policy_Txt).insertAdjacentHTML("beforeend", '&lt;button class="ot-link-btn ' + c + '" aria-label="' + Rt.PCenterVendorListLinkAriaLabel + '"&gt;\n                ' + Rt.PCenterVendorListLinkText + "\n                &lt;/button&gt;")
                }
                if (Rt.PCTemplateUpgrade & amp; & amp; Rt.PCenterUserIdTitleText & amp; & amp; Rt.IsConsentLoggingEnabled) {
                    var d = xt.readCookieParam(Oe.OPTANON_CONSENT, Ve);
                    if (n(Xt.P_Policy_Txt).insertAdjacentHTML("beforeend", '&lt;div class="ot-userid-title"&gt;&lt;span&gt;' + Rt.PCenterUserIdTitleText + ": &lt;/span&gt; " + d + "&lt;/div&gt;"), Rt.PCenterUserIdDescriptionText & amp; & amp; n(Xt.P_Policy_Txt).insertAdjacentHTML("beforeend", '&lt;div class="ot-userid-desc"&gt;' + Rt.PCenterUserIdDescriptionText + "&lt;/div&gt;"), Rt.PCenterUserIdTimestampTitleText) {
                        var u = xt.getCookie(Oe.ALERT_BOX_CLOSED),
                            p = u & amp; & amp;
                        Kt.getUTCFormattedDate(u), h = p || Rt.PCenterUserIdNotYetConsentedText;
                        n(Xt.P_Policy_Txt).insertAdjacentHTML("beforeend", '&lt;div class="ot-userid-timestamp"&gt;&lt;span&gt;' + Rt.PCenterUserIdTimestampTitleText + ": &lt;/span&gt; " + h + "&lt;/div&gt;")
                    }
                }
                Rt.ConfirmText.trim() ? zt(n("#accept-recommended-btn-handler")).html(Rt.ConfirmText) : n("#accept-recommended-btn-handler").parentElement.removeChild(n("#accept-recommended-btn-handler"));
                var g = r(".save-preference-btn-handler");
                for (s = 0; s & lt; g.length; s++) zt(g[s]).html(Rt.AllowAllText);
                var C = r(".ot-pc-refuse-all-handler");
                if (Rt.PCenterShowRejectAllButton & amp; & amp; Rt.PCenterRejectAllButtonText.trim())
                    for (s = 0; s & lt; C.length; s++) zt(C[s]).html(Rt.PCenterRejectAllButtonText);
                else Gt.removeChild(C);
                var y = n(Xt.P_Manage_Cookies_Txt),
                    f = zt(y);
                if (y & amp; & amp;
                    (f.html(Rt.ManagePreferenceText), Rt.ManagePreferenceText || f.attr(this._ariaHidden, !0)), vr.initializePreferenceCenterGroups(n, t), !Rt.IsIabEnabled) {
                    var v = n(Xt.P_Vendor_Container);
                    v & amp; & amp;
                    v.parentElement.removeChild(v)
                }
                if (!Rt.showCookieList & amp; & amp; !Mt.showGeneralVendors) {
                    var k = n(Xt.P_Host_Cntr);
                    k & amp; & amp;
                    k.parentElement.removeChild(k)
                }
            }
            var m = document.createElement("iframe");
            m.setAttribute("class", "ot-text-resize"), m.setAttribute("title", "onetrust-text-resize"), Et(m, "position: absolute; top: -50000px; width: 100em;"), m.setAttribute(this._ariaHidden, "true"), zt(t.querySelector("#onetrust-pc-sdk")).append(m);
            var b = document.getElementById("onetrust-consent-sdk");
            zt(b).append(t), Ft.ignoreInjectingHtmlCss || zt(document.body).append(b), (Rt.showCookieList || Mt.showGeneralVendors) & amp; & amp;
            On.InitializeHostList()
        }, mr.prototype.setParentGroupName = function(e, t, o, n) {
            var r = e.querySelector(".category-header,.ot-cat-header,.category-menu-switch-handler&gt;h3");
            zt(r).html(t), zt(r).attr("id", o), Ft.pcName === dt & amp; & amp;
            (e.querySelector(Xt.P_Category_Header).innerHTML = t, e.querySelector("" + Xt.P_Desc_Container).setAttribute("id", n), e.querySelector(".category-menu-switch-handler").setAttribute("aria-controls", n))
        }, mr.prototype.setLegIntButton = function(e, t, o, n) {
            void 0 === o & amp; & amp;
            (o = !1);
            var r = !0; - 1 & lt;
            Mt.vendors.selectedLegInt.indexOf(t.IabGrpId + ":false") & amp; & amp;
            (r = !1);
            var i = to.generateLegIntButtonElements(r, t.OptanonGroupId);
            o ? n.insertAdjacentHTML("afterend", i) : e.insertAdjacentHTML("beforeend", i);
            var s = e.querySelector(".ot-remove-objection-handler");
            s & amp; & amp;
            Et(s, s.getAttribute("data-style"))
        }, mr.prototype.setParentGroupDescription = function(e, t, o, n, r) {
            var i = Ln.safeFormattedGroupDescription(t),
                s = e.querySelector("p:not(.ot-always-active)"),
                a = e.querySelector(Xt.P_Acc_Grp_Desc),
                l = s || a;
            return -1 & lt;
            Vt.indexOf(t.Type) & amp; & amp;
            o.PCGrpDescType === G.Legal ? i = t.DescriptionLegal : l.classList.add("ot-category-desc"), Ft.legIntSettings.PAllowLI & amp; & amp;
            !Ft.legIntSettings.PShowLegIntBtn & amp; & amp;
            (t.SubGroups.some(function(e) {
                return e.HasLegIntOptOut
            }) || t.HasLegIntOptOut ? l.parentElement.classList.add("ot-leg-border-color") : Gt.removeChild(e.querySelector(Xt.P_Li_Hdr))), Ft.pcName !== dt & amp; & amp;
            l.setAttribute("id", n), zt(l).html(i), t.Type === At & amp; & amp;
            Gt.removeChild(l), l
        }, mr.prototype.cloneOtHtmlEls = function(e) {
            var t = /otPcPanel|otPcCenter/;
            xn.toggleEl = zt(e(".ot-tgl")).el.cloneNode(!0), xn.arrowEl = zt(e("#onetrust-pc-sdk &gt; " + Xt.P_Arrw_Cntr)).el.cloneNode(!0), xn.subGrpEl = zt(e(Xt.P_Sub_Grp_Cntr)).el.cloneNode(!0), xn.vListEl = zt(e(Xt.P_Ven_Lst_Cntr)).el.cloneNode(!0), xn.cListEl = zt(e(Xt.P_Host_Lst_cntr)).el.cloneNode(!0), xn.chkboxEl = zt(e(Xt.P_CBx_Cntr)).el.cloneNode(!0), xn.accordionEl = zt(e(".ot-acc-cntr")).el.cloneNode(!0), t.test(Ft.pcName) & amp; & amp;
            (xn.plusMinusEl = zt(e(".ot-plus-minus")).el.cloneNode(!0)), Gt.removeChild(e(".ot-tgl")), Gt.removeChild(e("#onetrust-pc-sdk &gt; " + Xt.P_Arrw_Cntr)), Gt.removeChild(e(Xt.P_Sub_Grp_Cntr)), Gt.removeChild(e(Xt.P_Ven_Lst_Cntr)), Gt.removeChild(e(Xt.P_Host_Lst_cntr)), Gt.removeChild(e(Xt.P_CBx_Cntr)), Gt.removeChild(e(".ot-acc-cntr")), t.test(Ft.pcName) & amp; & amp;
            Gt.removeChild(e(".ot-plus-minus"))
        }, mr.prototype.insertSelectAllEls = function(e) {
            var t = e(Xt.P_Select_Cntr + " .ot-sel-all-chkbox"),
                o = gr();
            o.id = Xt.P_Sel_All_Host_El, o.querySelector("input").id = "select-all-hosts-groups-handler", o.querySelector("label").setAttribute("for", "select-all-hosts-groups-handler"), zt(t).append(o);
            var n = gr();
            n.id = Xt.P_Sel_All_Vendor_Consent_El, n.querySelector("input").id = "select-all-vendor-groups-handler", n.querySelector("label").setAttribute("for", "select-all-vendor-groups-handler"), zt(t).append(n);
            var r = gr();
            r.id = Xt.P_Sel_All_Vendor_Leg_El, r.querySelector("input").id = "select-all-vendor-leg-handler", r.querySelector("label").setAttribute("for", "select-all-vendor-leg-handler"), zt(t).append(r)
        }, mr.prototype.initializePreferenceCenterGroups = function(e, t) {
            var o = Ft.pcName;
            if (Bt.isV2Template) {
                vr.cloneOtHtmlEls(e);
                var n = xn.chkboxEl.cloneNode(!0);
                n.querySelector("input").classList.add("category-filter-handler"), zt(e(Xt.P_Fltr_Modal + " " + Xt.P_Fltr_Option)).append(n), vr.insertSelectAllEls(e)
            }
            var r = zt(e("#onetrust-pc-sdk " + Xt.P_Category_Grp));
            o === st || o === lt || o === at ? Rt.PCenterEnableAccordion ? Gt.removeChild(r.el.querySelector(Xt.P_Category_Item + ":not(.ot-accordion-layout)")) : Gt.removeChild(r.el.querySelector(Xt.P_Category_Item + ".ot-accordion-layout")) : o === dt & amp; & amp;
            (Rt.PCenterEnableAccordion = !1);
            var i, s = e("#onetrust-pc-sdk " + Xt.P_Category_Item),
                a = Bt.isV2Template ? xn.subGrpEl.cloneNode(!0) : zt(e(Xt.P_Sub_Grp_Cntr)),
                l = Bt.isV2Template ? "" : zt(e(Xt.P_Acc_Container + " " + Xt.P_Sub_Grp_Cntr));
            Rt.PCTemplateUpgrade & amp; & amp;
            /otPcTab/.test(o) & amp; & amp;
            (i = e(".ot-abt-tab").cloneNode(!0), Gt.removeChild(e(".ot-abt-tab"))), r.el.removeChild(s), Bt.isV2Template ? Rt.PCAccordionStyle === W.Caret & amp; & amp;
            (zt(e("#onetrust-pc-sdk " + Xt.P_Vendor_List)).addClass("ot-enbl-chr"), Rt.PCenterEnableAccordion & amp; & amp; zt(e("#onetrust-pc-sdk " + Xt.P_Content)).addClass("ot-enbl-chr")): zt(s.querySelector(Xt.P_Sub_Grp_Cntr)).remove();
            var c = Rt.Groups.filter(function(e) {
                    return e.Order
                }),
                d = 0 === r.el.children.length,
                u = e(Xt.P_Li_Hdr) || s.querySelector(Xt.P_Li_Hdr);
            Ft.legIntSettings.PAllowLI & amp; & amp;
            Ft.grpContainLegalOptOut & amp; & amp;
            "IAB2" === Rt.IabType & amp; & amp;
            !Ft.legIntSettings.PShowLegIntBtn ? (u.querySelector("span:first-child").innerText = Rt.ConsentText, u.querySelector("span:last-child").innerText = Rt.LegitInterestText, Bt.isV2Template & amp; & amp;
                (u.querySelector("span:first-child").innerText = Rt.PCenterConsentText, u.querySelector("span:last-child").innerText = Rt.PCenterLegIntColumnHeader), Rt.PCenterEnableAccordion & amp; & amp; u ? u.classList.add("ot-leg-border-color") : "otPcList" === o & amp; & amp; s.insertAdjacentElement("afterbegin", u)) : (Gt.removeChild(e("#onetrust-pc-sdk " + Xt.P_Li_Hdr)), Gt.removeChild(s.querySelector(Xt.P_Li_Hdr)));
            var p = e(".ot-tab-desc");
            Rt.PCTemplateUpgrade & amp; & amp;
            (Mt.showVendorService ? Cr.setHtmlTemplate(e("#onetrust-pc-sdk")) : Cr.removeVSUITemplate(e("#onetrust-pc-sdk")));
            for (var h = 0; h & lt; c.length; h++) {
                var g = c[h],
                    C = g.GroupName,
                    y = g.CustomGroupId,
                    f = s.cloneNode(!0),
                    v = "ot-group-id-" + y,
                    k = "ot-header-id-" + y,
                    m = "ot-desc-id-" + y;
                (f = zt(f).el).setAttribute("data-optanongroupid", y);
                var b = f.querySelector("input,button");
                b & amp; & amp;
                (b.setAttribute("aria-controls", m), b.setAttribute("aria-labelledby", k)), vr.setParentGroupName(f, C, k, m), o === ct & amp; & amp;
                (g.ShowVendorList & amp; & amp;
                    "IAB2" === Rt.IabType ? (Gt.removeChild(f.querySelector("p:not(.ot-always-active)")), Gt.removeChild(f.querySelector(Xt.P_Acc_Txt + ":not(" + Xt.P_Acc_Container + ")")), g.SubGroups.length || Bt.isV2Template || Gt.removeChild(f.querySelector(Xt.P_Sub_Grp_Cntr))) : Gt.removeChild(f.querySelector(Xt.P_Acc_Container)));
                var P = vr.setParentGroupDescription(f, g, Rt, m, v);
                Bt.isV2Template ? vr.setToggle(f, P, g, v, k) : vr.setToggleProps(f, P, g, v, k);
                var S = !!e("#onetrust-pc-sdk " + Xt.P_Category_Grp).querySelector(Xt.P_Category_Item),
                    A = r.el.querySelectorAll(Xt.P_Category_Item + ":not(.ot-vnd-item)");
                if (A = A[A.length - 1], d ? r.append(f) : S ? Ut.insertAfter(f, A) : Ut.insertAfter(f, r.el.querySelector(Xt.P_Li_Hdr) || r.el.querySelector("h3")), 0 & lt; g.SubGroups.length & amp; & amp; g.ShowSubgroup) {
                    var T = o === ct & amp; & amp;
                    g.ShowVendorList & amp; & amp;
                    "IAB2" === Rt.IabType & amp; & amp;
                    !Rt.PCTemplateUpgrade;
                    vr.setSubGrps(g, T ? l : a, f, Rt)
                }
                var I = Rt.PCGrpDescLinkPosition === E.Top;
                g.Type === At & amp; & amp;
                I & amp; & amp;
                (P = f.querySelector(Xt.P_Sub_Grp_Cntr));
                var L = I ? P : null;
                if (vr.setVendorListBtn(f, e, t, g, L, Rt), vr.setHostListBtn(f, e, t, g), Mt.showVendorService & amp; & amp; Rt.VendorServiceConfig.PCVSCategoryView) {
                    var _ = Xt.P_Acc_Txt;
                    o === dt & amp; & amp;
                    (_ = Xt.P_Desc_Container);
                    var V = f.querySelector(_);
                    Cr.insertVendorServiceHtml(g, V)
                }
                Mt.dataGroupState.push(g)
            }
            if ("otPcTab" === o)
                if (i & amp; & amp; e("#onetrust-pc-sdk " + Xt.P_Category_Grp).insertAdjacentElement("afterbegin", i), p & amp; & amp; 640 & lt; window.innerWidth & amp; & amp; zt(p).append(t.querySelectorAll("#onetrust-pc-sdk " + Xt.P_Desc_Container)), Rt.IsIabEnabled) e(Xt.P_Desc_Container + " .category-vendors-list-handler").innerHTML = Rt.VendorListText + "&amp;#x200E;";
                else {
                    var B = e(Xt.P_Desc_Container + " .category-vendors-list-handler");
                    B & amp; & amp;
                    B.parentElement.removeChild(B)
                }
        }, mr.prototype.jsonAddAboutCookies = function(e) {
            var t = {};
            return t.GroupName = e.AboutCookiesText, t.GroupDescription = e.MainInfoText, t.ShowInPopup = !0, t.Order = 0, t.IsAboutGroup = !0, t
        }, mr.prototype.setVendorListBtn = function(e, t, o, n, r, i) {
            var s = Ft.pcName;
            if (n.ShowVendorList) {
                var a = void 0,
                    l = void 0;
                if (Bt.isV2Template ? a = (l = xn.vListEl.cloneNode(!0)).querySelector(".category-vendors-list-handler") : l = (a = e.querySelector(".category-vendors-list-handler")).parentElement, a.innerHTML = i.VendorListText + "&amp;#x200E;", a.setAttribute("aria-label", Rt.PCOpensVendorDetailsAlert), a.setAttribute("data-parent-id", n.CustomGroupId), i.PCGrpDescType === G.UserFriendly & amp; & amp; a.insertAdjacentHTML("afterend", "&lt;a href='" + Rt.IabLegalTextUrl + "?lang=" + Mt.consentLanguage + "' rel=\"noopener\" target='_blank'&gt;&amp;nbsp;|&amp;nbsp;" + i.PCVendorFullLegalText + '&amp;nbsp;&lt;span class="ot-scrn-rdr"&gt;' + Rt.NewWinTxt + "&lt;/span&gt;&lt;/a&gt;"), Bt.isV2Template) {
                    var c = e;
                    s === dt ? c = e.querySelector("" + Xt.P_Desc_Container) : i.PCenterEnableAccordion & amp; & amp;
                    (c = e.querySelector(Xt.P_Acc_Txt)), c.insertAdjacentElement("beforeend", l)
                }
                r & amp; & amp;
                r.insertAdjacentElement("beforebegin", l)
            } else if (!Bt.isV2Template) {
                if (s !== lt & amp; & amp; s !== st || i.PCenterEnableAccordion) {
                    if (s === ct || s === lt || s === st & amp; & amp; i.PCenterEnableAccordion) {
                        var d = t("#vendor-list-container"),
                            u = e.querySelector(Xt.P_Acc_Txt);
                        d & amp; & amp;
                        o.querySelector("" + Xt.P_Content).removeChild(d), Bt.isV2Template || zt(u).el.removeChild(u.querySelector(Xt.P_Ven_Lst_Cntr))
                    }
                } else Gt.removeChild(e.querySelector(Xt.P_Ven_Lst_Cntr));
                if (s === dt || s === at) {
                    var p = e.querySelector(Xt.P_Ven_Lst_Cntr);
                    p & amp; & amp;
                    p.parentElement.removeChild(p)
                }
            }
        }, mr.prototype.setHostListBtn = function(e, t, o, n) {
            var r = Ft.pcName,
                i = !1;
            Rt.showCookieList & amp; & amp;
            (i = -1 & lt; Gt.findIndex(y(n.SubGroups, [n]), function(e) {
                return -1 === Tt.indexOf(e.Type) & amp; & amp;
                e.FirstPartyCookies.length
            }));
            var s = Mt.showGeneralVendors & amp; & amp;
            n.GeneralVendorsIds & amp; & amp;
            n.GeneralVendorsIds.length;
            if (!Mt.showVendorService & amp; & amp;
                (Rt.showCookieList || Mt.showGeneralVendors) & amp; & amp;
                (n.ShowHostList || i || s)) {
                var a = void 0;
                if (Bt.isV2Template) {
                    var l = xn.cListEl.cloneNode(!0);
                    a = l.querySelector(".category-host-list-handler");
                    var c = e;
                    r === dt ? c = e.querySelector("" + Xt.P_Desc_Container) : Rt.PCenterEnableAccordion & amp; & amp;
                    (c = e.querySelector(Xt.P_Acc_Txt)), c.insertAdjacentElement("beforeend", l)
                } else a = e.querySelector(".category-host-list-handler");
                if (a) {
                    var d = Mt.showGeneralVendors ? Rt.GroupGenVenListLabel : Rt.ThirdPartyCookieListText,
                        u = Mt.showGeneralVendors ? Rt.PCenterVendorListScreenReader : Rt.PCOpensCookiesDetailsAlert;
                    a.innerHTML = d + "&amp;#x200E;", a.setAttribute("aria-label", u), a.setAttribute("data-parent-id", n.CustomGroupId)
                }
            } else if (r === ct) {
                var p = t("#vendor-list-container"),
                    h = e.querySelector(Xt.P_Acc_Txt);
                p & amp; & amp;
                o.querySelector("" + Xt.P_Content).removeChild(p), h.querySelector(Xt.P_Host_Lst_cntr) & amp; & amp;
                zt(h).el.removeChild(h.querySelector(Xt.P_Host_Lst_cntr))
            } else {
                var g = e.querySelector(Xt.P_Host_Lst_cntr);
                g & amp; & amp;
                g.parentElement.removeChild(g)
            }
        }, mr.prototype.setSubGrps = function(T, I, L, _) {
            var V = this,
                B = Ft.pcName,
                E = _.PCGrpDescType === G.Legal,
                w = y(Lt, It),
                x = B === ct & amp; & amp;
            T.ShowVendorList & amp; & amp;
            "IAB2" === _.IabType;
            if (x & amp; & amp; !Rt.PCTemplateUpgrade) {
                var e = L.querySelector(Xt.P_Sub_Grp_Cntr);
                e.parentElement.removeChild(e)
            }
            T.SubGroups.forEach(function(e) {
                var t;
                "IAB2" !== Ft.iabType || e.Type !== bt || e.HasConsentOptOut || (t = !0);
                var o, n, r = Bt.isV2Template ? I.cloneNode(!0) : I.el.cloneNode(!0),
                    i = r.querySelector(Xt.P_Subgp_ul),
                    s = r.querySelector(Xt.P_Subgrp_li).cloneNode(!0),
                    a = e.CustomGroupId,
                    l = "ot-sub-group-id-" + a,
                    c = eo.getGrpStatus(e).toLowerCase(),
                    d = eo.getGrpStatus(T).toLowerCase(),
                    u = s.querySelector(".cookie-subgroup&gt;h4, .cookie-subgroup&gt;h5, .cookie-subgroup&gt;h6, .ot-subgrp&gt;h4, .ot-subgrp&gt;h5, .ot-subgrp&gt;h6"),
                    p = s.querySelector(Xt.P_Tgl_Cntr);
                s.setAttribute("data-optanongroupid", a), Bt.isV2Template ? ((n = xn.toggleEl.cloneNode(!0)).querySelector("input").setAttribute("data-optanongroupid", a), n.querySelector("input").classList.add("cookie-subgroup-handler"), o = n.cloneNode(!0), p.insertAdjacentElement("beforeend", o)) : (o = s.querySelector(".ot-toggle")).querySelector("input").setAttribute("data-optanongroupid", a), zt(r.querySelector(Xt.P_Subgp_ul)).html(""), zt(u).html(e.GroupName), o.querySelector("input").setAttribute("id", l), o.querySelector("input").setAttribute("aria-label", e.GroupName), o.querySelector("label").setAttribute("for", l);
                var h = zt(s.querySelector(Xt.P_Subgrp_Desc));
                if (x) {
                    var g = e.DescriptionLegal & amp; & amp;
                    E ? e.DescriptionLegal : e.GroupDescription;
                    h.html(g)
                } else {
                    g = Ln.safeFormattedGroupDescription(e);
                    var C = !1; - 1 & lt;
                    Vt.indexOf(e.Type) & amp; & amp;
                    E & amp; & amp;
                    (C = !0, g = e.DescriptionLegal), _.PCenterEnableAccordion & amp; & amp;
                    C || (h = zt(s.querySelector("p"))), T.ShowSubGroupDescription ? h.html(g) : h.html("")
                }
                if (T.ShowSubgroupToggle & amp; & amp; - 1 & lt; w.indexOf(e.Type)) {
                    var y = Ln.isGroupActive(e);
                    y & amp; & amp;
                    (s.querySelector("input").setAttribute("checked", ""), "always active" === d & amp; & amp; - 1 === Vt.indexOf(e.Type) & amp; & amp;
                        (s.querySelector("input").disabled = !0, s.querySelector("input").setAttribute("disabled", !0)));
                    var f = p.querySelector(".ot-label-status");
                    if (Rt.PCShowConsentLabels ? f.innerHTML = y ? Rt.PCActiveText : Rt.PCInactiveText : Gt.removeChild(f), Ft.legIntSettings.PAllowLI & amp; & amp; e.Type === bt & amp; & amp; e.HasLegIntOptOut)
                        if (Ft.legIntSettings.PShowLegIntBtn) vr.setLegIntButton(s, e);
                        else {
                            var v = p.cloneNode(!0);
                            p.insertAdjacentElement("afterend", v);
                            var k = v.querySelector(".ot-label-status"),
                                m = v.querySelector("input");
                            m.setAttribute("id", l + "-leg-out"), v.querySelector("label").setAttribute("for", l + "-leg-out"), e.IsLegIntToggle = !0;
                            var b = Ln.isGroupActive(e);
                            Rt.PCShowConsentLabels ? k.innerHTML = b ? Rt.PCActiveText : Rt.PCInactiveText : Gt.removeChild(k), Gt.setCheckedAttribute(null, m, b), e.IsLegIntToggle = !1
                        }
                } else "always active" === c & amp; & amp;
                (T.ShowSubgroupToggle || -1 === _t.indexOf(e.Type)) || (t = !0);
                if (t & amp; & amp;
                    (o.classList.add("ot-hide-tgl"), o.querySelector("input").setAttribute(V._ariaHidden, !0)), "always active" !== c || t || (o & amp; & amp; o.parentElement.removeChild(o), s.querySelector(Xt.P_Tgl_Cntr).classList.add("ot-always-active-subgroup"), vr.setAlwaysActive(s, !0)), "COOKIE" === e.Type & amp; & amp; - 1 !== e.Parent.indexOf("STACK") & amp; & amp; Et(r, "display: none;"), zt(i).append(s), Bt.isV2Template) {
                    var P = L;
                    "otPcTab" === B ? P = L.querySelector("" + Xt.P_Desc_Container) : _.PCenterEnableAccordion & amp; & amp;
                    (P = L.querySelector(Xt.P_Acc_Txt)), P.insertAdjacentElement("beforeend", r)
                } else {
                    var S = L.querySelector(Xt.P_Category_Item + " " + Xt.P_Ven_Lst_Cntr);
                    S & amp; & amp;
                    S.insertAdjacentElement("beforebegin", r)
                }
                if (Mt.showVendorService & amp; & amp; Rt.VendorServiceConfig.PCVSCategoryView) {
                    var A = i;
                    Cr.insertVendorServiceHtml(T, A)
                }
            })
        }, mr.prototype.getInputEle = function(e) {
            return Mt.showVendorService ? (Rt.PCCategoryStyle === se.Checkbox & amp; & amp; e.classList.add("ot-checkbox-consent"), gr()) : xn.toggleEl.cloneNode(!0)
        }, mr.prototype.setToggle = function(e, t, o, n, r) {
            var i = vr.getInputEle(e);
            i.querySelector("input").classList.add("category-switch-handler");
            var s = i.querySelector("input"),
                a = e.querySelector(Xt.P_Category_Header),
                l = Ln.isGroupActive(o),
                c = "always active" === eo.getGrpStatus(o).toLowerCase(),
                d = o.OptanonGroupId.toString(),
                u = !0;
            if ("IAB2" !== Ft.iabType || o.Type !== bt & amp; & amp; o.Type !== At || o.HasConsentOptOut || (u = !1), zt(i.querySelector("label")).attr("for", n), zt(i.querySelector(".ot-label-txt")).html(o.GroupName), Ft.legIntSettings.PAllowLI & amp; & amp; o.Type === bt & amp; & amp; o.HasLegIntOptOut)
                if (Ft.legIntSettings.PShowLegIntBtn) vr.setLegIntButton(e, o, !0, t);
                else {
                    var p = i.cloneNode(!0);
                    o.IsLegIntToggle = !0;
                    var h = Ln.isGroupActive(o),
                        g = p.querySelector(".ot-label-status");
                    Rt.PCShowConsentLabels ? g.innerHTML = h ? Rt.PCActiveText : Rt.PCInactiveText : Gt.removeChild(g), o.IsLegIntToggle = !1, Ln.setInputID(p.querySelector("input"), n + "-leg-out", d, h, r), zt(p.querySelector("label")).attr("for", n + "-leg-out"), a.insertAdjacentElement("afterend", p)
                } var C = i.querySelector(".ot-label-status");
            Rt.PCShowConsentLabels ? C.innerHTML = l ? Rt.PCActiveText : Rt.PCInactiveText : Gt.removeChild(C);
            var y = Rt.PCCategoryStyle === se.Toggle;
            !c & amp; & amp;
            u || !y || (i.classList.add("ot-hide-tgl"), i.querySelector("input").setAttribute(this._ariaHidden, "true")), u & amp; & amp;
            (Mt.showVendorService ? (c & amp; & amp;
                (vr.setAlwaysActive(e), i.querySelector("input").setAttribute("disabled", "true")), c & amp; & amp; y || vr.insertAccordionInputHeader(a, i), Ln.setInputID(s, n, d, l, r), vr.insertAccordionPointer(e, a)) : (vr.insertAccordionPointer(e, a), c ? vr.setAlwaysActive(e) : (vr.insertAccordionInputHeader(a, i), Ln.setInputID(s, n, d, l, r))))
        }, mr.prototype.insertAccordionInputHeader = function(e, t) {
            if (Mt.showVendorService) {
                var o = "beforebegin";
                Rt.PCCategoryStyle === se.Toggle & amp; & amp;
                (o = "afterend"), e.insertAdjacentElement(o, t)
            } else e.insertAdjacentElement("afterend", t)
        }, mr.prototype.insertAccordionPointer = function(e, t) {
            if (e.classList.add("ot-vs-config"), Rt.PCenterEnableAccordion)
                if (Mt.showVendorService) {
                    var o = e.querySelector(Xt.P_Acc_Header),
                        n = void 0,
                        r = void 0;
                    n = Rt.PCAccordionStyle === W.Caret ? (r = "beforeend", xn.arrowEl.cloneNode(!0)) : (r = Rt.PCCategoryStyle === se.Checkbox ? "beforeend" : "afterbegin", xn.plusMinusEl.cloneNode(!0)), o.insertAdjacentElement(r, n)
                } else Rt.PCAccordionStyle === W.Caret ? t.insertAdjacentElement("afterend", xn.arrowEl.cloneNode(!0)) : t.insertAdjacentElement("beforebegin", xn.plusMinusEl.cloneNode(!0))
        }, mr.prototype.setToggleProps = function(e, t, o, n, r) {
            var i = e.querySelectorAll("input:not(.cookie-subgroup-handler)"),
                s = e.querySelectorAll("label"),
                a = Ln.isGroupActive(o),
                l = o.CustomGroupId,
                c = e.querySelector(".label-text");
            c & amp; & amp;
            zt(c).html(o.GroupName);
            for (var d = 0; d & lt; i.length; d++)
                if (s[d] & amp; & amp; zt(s[d]).attr("for", n), 2 & lt; = i.length & amp; & amp; 0 === d) zt(i[d]).attr("id", n + "-toggle");
                else {
                    var u = !0;
                    if ("IAB2" !== Ft.iabType || o.Type !== bt & amp; & amp; o.Type !== At || o.HasConsentOptOut || (u = !1), Ft.legIntSettings.PAllowLI & amp; & amp; o.Type === bt & amp; & amp; o.HasLegIntOptOut)
                        if (Ft.legIntSettings.PShowLegIntBtn) vr.setLegIntButton(e, o, !0, t);
                        else {
                            var p = e.querySelector(Xt.P_Tgl_Cntr + ":not(" + Xt.P_Subgrp_Tgl_Cntr + ")") || e.querySelector(".ot-toggle"),
                                h = p.cloneNode(!0);
                            p.insertAdjacentElement("afterend", h);
                            var g = h.querySelector("input");
                            o.IsLegIntToggle = !0;
                            var C = Ln.isGroupActive(o);
                            o.IsLegIntToggle = !1, Ln.setInputID(g, n + "-leg-out", l, C, r), zt(h.querySelector("label")).attr("for", n + "-leg-out"), Gt.removeChild(h.querySelector(Xt.P_Arrw_Cntr))
                        } var y = "always active" === eo.getGrpStatus(o).toLowerCase();
                    if (y || !u) {
                        var f = i[d].closest(".ot-toggle");
                        f & amp; & amp;
                        (f.classList.add("ot-hide-tgl"), f.querySelector("input").setAttribute(this._ariaHidden, !0))
                    }
                    u & amp; & amp;
                    (y & amp; & amp; vr.setAlwaysActive(e), Ln.setInputID(i[d], n, l, a, r))
                }
        }, mr.prototype.setAlwaysActive = function(e, t) {
            void 0 === t & amp; & amp;
            (t = !1);
            var o = Ft.pcName;
            if (o === ct || o === dt || t) e.querySelector(Xt.P_Tgl_Cntr).insertAdjacentElement("afterbegin", zt("&lt;div class='ot-always-active'&gt;" + Rt.AlwaysActiveText + "&lt;/div&gt;", "ce").el);
            else {
                var n = e.querySelector(Xt.P_Category_Header);
                !Bt.isV2Template & amp; & amp;
                Rt.PCenterEnableAccordion & amp; & amp;
                (n = e.querySelector(Xt.P_Arrw_Cntr)), zt(n).el.insertAdjacentElement("afterend", zt("&lt;div class='ot-always-active'&gt;" + Rt.AlwaysActiveText + "&lt;/div&gt;", "ce").el)
            }
            if (Rt.PCenterEnableAccordion) {
                var r = e.querySelector(Xt.P_Acc_Header);
                r & amp; & amp;
                r.classList.add("ot-always-active-group")
            } else {
                var i = e.querySelector("" + Xt.P_Desc_Container);
                i & amp; & amp;
                i.classList.add("ot-always-active-group"), e.classList.add("ot-always-active-group")
            }
        }, mr);

        function mr() {
            this._ariaHidden = "aria-hidden"
        }
        var br, Pr = (Sr.prototype.showBanner = function() {
            var e = Ft.bannerName,
                t = zt(this.El);
            Mt.skipAddingHTML & amp; & amp;
            "none" === getComputedStyle(t.el[0]).getPropertyValue("display") & amp; & amp;
            e !== et & amp; & amp;
            e !== Ze & amp; & amp;
            e !== nt ? t.css("display: block;") : Rt.BAnimation === le.SlideIn ? this.slideInAnimation(t, e) : Rt.BAnimation === le.FadeIn & amp; & amp;
            t.addClass("ot-fade-in")
        }, Sr.prototype.insertAlertHtml = function() {
            function e(e) {
                return r.querySelector(e)
            }

            function t(e) {
                return r.querySelectorAll(e)
            }
            var o = this,
                n = Rt.BannerPurposeTitle || Rt.BannerPurposeDescription || Rt.BannerFeatureTitle || Rt.BannerFeatureDescription || Rt.BannerInformationTitle || Rt.BannerInformationDescription,
                r = document.createDocumentFragment(),
                i = Ft.bannerName,
                s = document.createElement("div");
            zt(s).html(fn.bannerGroup.html);
            var a = s.querySelector("#onetrust-banner-sdk");
            if (Bt.fp.CookieV2SSR) zt(r).append(a), this._rejectBtn = e("#onetrust-reject-all-handler"), this._acceptBtn = e("#onetrust-accept-btn-handler");
            else {
                var l = [{
                    type: "purpose",
                    titleKey: "BannerPurposeTitle",
                    descriptionKey: "BannerPurposeDescription",
                    identifier: "purpose-option"
                }, {
                    type: "feature",
                    titleKey: "BannerFeatureTitle",
                    descriptionKey: "BannerFeatureDescription",
                    identifier: "feature-option"
                }, {
                    type: "information",
                    titleKey: "BannerInformationTitle",
                    descriptionKey: "BannerInformationDescription",
                    identifier: "information-option"
                }];
                if (fn.bannerGroup) {
                    Rt.BannerRelativeFontSizesToggle & amp; & amp;
                    zt(a).addClass("otRelFont"), (Rt.BInitialFocus || Rt.BInitialFocusLinkAndButton) & amp; & amp;
                    a.setAttribute("tabindex", "0"), Rt.useRTL & amp; & amp;
                    zt(a).attr("dir", "rtl"), "IAB2" === Ft.iabType & amp; & amp;
                    Rt.BannerDPDDescription.length & amp; & amp;
                    zt(a).addClass("ot-iab-2");
                    var c = Rt.BannerPosition;
                    if (c & amp; & amp;
                        ("bottom-left" === c ? zt(a).addClass("ot-bottom-left") : "bottom-right" === c ? zt(a).addClass("ot-bottom-right") : zt(a).addClass(c)), zt(r).append(a), Rt.BannerTitle ? (zt(e("#onetrust-policy-title")).html(Rt.BannerTitle), zt(e('[role="alertdialog"]')).attr("aria-label", Rt.BannerTitle)) : (Gt.removeChild(e("#onetrust-policy-title")), zt(e("#onetrust-banner-sdk")).addClass("ot-wo-title"), zt(e('[role="alertdialog"]')).attr("aria-label", Rt.AriaPrivacy)), !Rt.IsIabEnabled & amp; & amp; Mt.showGeneralVendors & amp; & amp; Rt.BannerNonIABVendorListText) {
                        var d = document.createElement("div");
                        d.setAttribute("id", "ot-gv-link-ctnr"), zt(d).html('&lt;button class="ot-link-btn ot-gv-list-handler"&gt;' + Rt.BannerNonIABVendorListText + "&lt;/button&gt;"), zt(e("#onetrust-policy")).el.appendChild(d)
                    }
                    zt(e("#onetrust-policy-text")).html(Rt.AlertNoticeText), Rt.BShowPolicyLink & amp; & amp;
                    Rt.BShowImprintLink & amp; & amp;
                    zt(e("#onetrust-policy-text a")).length ? (zt(e("#onetrust-policy-text a:first-child")).attr("aria-label", Rt.BCookiePolicyLinkScreenReader), zt(e("#onetrust-policy-text a:last-child")).attr("aria-label", Rt.BImprintLinkScreenReader)) : Rt.BShowPolicyLink & amp; & amp;
                    zt(e("#onetrust-policy-text a")).length ? zt(e("#onetrust-policy-text a")).attr("aria-label", Rt.BCookiePolicyLinkScreenReader) : Rt.BShowImprintLink & amp; & amp;
                    zt(e("#onetrust-policy-text a")).length & amp; & amp;
                    zt(e("#onetrust-policy-text a")).attr("aria-label", Rt.BImprintLinkScreenReader), "IAB2" === Rt.IabType & amp; & amp;
                    Rt.BannerDPDDescription.length & amp; & amp;
                    i !== rt ? (zt(e(".ot-dpd-container .ot-dpd-title")).html(Rt.BannerDPDTitle), zt(e(".ot-dpd-container .ot-dpd-desc")).html(Rt.BannerDPDDescription.join(",&amp;nbsp;"))) : Gt.removeChild(e(".ot-dpd-container"));
                    var u = zt(e("#onetrust-group-container"));
                    "IAB2" === Ft.iabType & amp; & amp;
                    Rt.BannerAdditionalDescription.trim() & amp; & amp;
                    this.setAdditionalDesc(e);
                    var p = "IAB2" === Rt.IabType & amp; & amp;
                    Rt.BannerDPDDescription.length ? i !== rt ? zt(e(".ot-dpd-container .ot-dpd-desc")) : u : zt(e("#onetrust-policy-text"));
                    Rt.IsIabEnabled & amp; & amp;
                    Rt.BannerIABPartnersLink & amp; & amp;
                    p.append('&lt;button class="ot-link-btn onetrust-vendors-list-handler"&gt;\n                ' + Rt.BannerIABPartnersLink + "\n                &lt;/button&gt;"), Rt.showBannerAcceptButton ? (this._acceptBtn = e("#onetrust-accept-btn-handler"), zt(this._acceptBtn).html(Rt.AlertAllowCookiesText), i !== nt || Rt.showBannerCookieSettings || Rt.BannerShowRejectAllButton || zt(this._acceptBtn.parentElement).addClass("accept-btn-only")) : Gt.removeChild(e("#onetrust-accept-btn-handler")), Rt.BannerShowRejectAllButton & amp; & amp;
                    Rt.BannerRejectAllButtonText.trim() ? (this._rejectBtn = e("#onetrust-reject-all-handler"), zt(this._rejectBtn).html(Rt.BannerRejectAllButtonText), e("#onetrust-button-group-parent").classList.add("has-reject-all-button")) : (Gt.removeChild(e("#onetrust-reject-all-handler")), Gt.removeChild(e("#onetrust-reject-btn-container")));
                    var h = zt(e("#onetrust-pc-btn-handler"));
                    Rt.showBannerCookieSettings ? (h.html(Rt.AlertMoreInfoText), Rt.BannerSettingsButtonDisplayLink & amp; & amp; h.addClass("cookie-setting-link"), i !== nt || Rt.showBannerAcceptButton || h.addClass("cookie-settings-btn-only")) : Gt.removeChild(h.el);
                    var g = !Rt.showBannerAcceptButton & amp; & amp;
                    !Rt.showBannerCookieSettings & amp; & amp;
                    !Rt.BannerShowRejectAllButton;
                    g & amp; & amp;
                    e("#onetrust-button-group-parent").parentElement.removeChild(e("#onetrust-button-group-parent"));
                    var C = Rt.showBannerCloseButton,
                        y = zt(t(".banner-close-button")).el,
                        f = e("#onetrust-button-group"),
                        v = Rt.BCloseButtonType === de.Link;
                    if (C)
                        for (k = 0; k & lt; y.length; k++) v ? (zt(y[k]).html(Rt.BContinueText), zt(a).addClass("ot-close-btn-link"), zt(y[k]).addClass("ot-close-link"), zt(y[k]).removeClass("onetrust-close-btn-ui"), zt(y[k]).removeClass("ot-close-icon"), i !== tt & amp; & amp; i !== ot || (f.insertAdjacentElement("afterbegin", e(".onetrust-close-btn-handler").parentElement), zt(y[k]).attr("tabindex", "1"))) : zt(y[k]).el.setAttribute("aria-label", Rt.BannerCloseButtonText || "Close Cookie Banner");
                    else {
                        for (var k = 0; k & lt; y.length; k++) zt(y[k].parentElement).el.removeChild(y[k]);
                        i !== Ze & amp; & amp;
                        i !== ot || Gt.removeChild(e("#onetrust-close-btn-container-mobile"))
                    }
                    if (i === Ze & amp; & amp;
                        ("IAB2" === Ft.iabType & amp; & amp;
                            (u.removeClass("ot-sdk-eight"), Rt.showBannerAcceptButton & amp; & amp; f.insertAdjacentElement("afterbegin", this._acceptBtn), Rt.showBannerCookieSettings & amp; & amp; f.insertAdjacentElement("beforeend", e("#onetrust-pc-btn-handler"))), C & amp; & amp; !g & amp; & amp;
                            "IAB2" === Ft.iabType ? u.addClass("ot-sdk-nine") : C & amp; & amp; g ? u.addClass("ot-sdk-eleven") : !C & amp; & amp; g ? u.addClass("ot-sdk-twelve") : C || g || "IAB2" !== Ft.iabType || (u.addClass("ot-sdk-ten"), zt(e("#onetrust-button-group-parent")).addClass("ot-sdk-two"), zt(e("#onetrust-button-group-parent")).removeClass("ot-sdk-three"))), C & amp; & amp; i === tt & amp; & amp;
                        "IAB2" === Ft.iabType & amp; & amp; !v) {
                        var m = e(".banner-close-btn-container");
                        m.parentElement.removeChild(m), zt(a).el.insertAdjacentElement("beforeEnd", m), zt(e("#onetrust-banner-sdk .ot-sdk-container")).addClass("ot-top-cntr")
                    }
                    var b = zt(e("#banner-options")).el;
                    n ? (i === ot ? this.setFloatingRoundedIconBannerCmpOptions(e, l) : (this.setCmpBannerOptions(e, l), i === rt & amp; & amp; u.el.insertAdjacentElement("beforeend", b)), zt(window).on("resize", function() {
                        window.innerWidth & lt; = 896 & amp; & amp;
                        o.setBannerOptionContent()
                    })) : (Ft.bannerName === tt & amp; & amp;
                        (b = zt(e(".banner-options-card")).el), Gt.removeChild(b))
                }
            }
            Ft.bannerName === rt & amp; & amp;
            Bt.moduleInitializer.IsSuppressPC & amp; & amp;
            (Mt.dataGroupState = Rt.Groups.filter(function(e) {
                return e.Order
            })), Ft.bannerName === rt & amp; & amp;
            (this._fourBtns = Rt.BannerShowRejectAllButton & amp; & amp; Rt.showBannerAcceptButton & amp; & amp; Rt.showBannerCookieSettings & amp; & amp; Rt.BShowSaveBtn, this._saveBtn = e(".ot-bnr-save-handler"), this._settingsBtn = e("#onetrust-pc-btn-handler"), this._btnsCntr = e(".banner-actions-container"), Rt.BShowSaveBtn ? zt(this._saveBtn).html(Rt.BSaveBtnTxt) : (Gt.removeChild(this._saveBtn), this._saveBtn = null), Kt.insertFooterLogo(t(".ot-bnr-footer-logo a")), this._descriptCntr = e(".ot-cat-lst"), this.setBannerBtn(), window.addEventListener("resize", function() {
                o.setBannerBtn()
            }), this._fourBtns & amp; & amp; zt(e("#onetrust-banner-sdk")).addClass("has-reject-all-button"), this.insertGrps(e));
            var P = document.createElement("div");
            zt(P).append(r), Ft.ignoreInjectingHtmlCss || (zt("#onetrust-consent-sdk").append(P.firstChild), n & amp; & amp; this.setBannerOptionContent()), this.setBnrBtnGrpAlignment()
        }, Sr.prototype.setBnrBtnGrpAlignment = function() {
            var e = zt("#onetrust-group-container").el,
                t = zt("#onetrust-button-group-parent").el;
            (e.length & amp; & amp; e[0].clientHeight) & lt;
            (t.length & amp; & amp; t[0].clientHeight) ? zt("#onetrust-banner-sdk").removeClass("vertical-align-content"): zt("#onetrust-banner-sdk").addClass("vertical-align-content");
            var o = document.querySelector("#onetrust-button-group-parent button:first-of-type"),
                n = document.querySelector("#onetrust-button-group-parent button:last-of-type");
            n & amp; & amp;
            o & amp; & amp;
            1 & lt;
            Math.abs(n.offsetTop - o.offsetTop) & amp; & amp;
            zt("#onetrust-banner-sdk").addClass("ot-buttons-fw")
        }, Sr.prototype.slideInAnimation = function(e, t) {
            t === Ze ? "bottom" === Rt.BannerPosition ? (e.css("bottom: -99px;"), e.animate({
                bottom: "0px"
            }, 1e3), Mt.bnrAnimationInProg = !0, setTimeout(function() {
                e.css("bottom: 0px;"), Mt.bnrAnimationInProg = !1
            }, 1e3)) : (e.css("top: -99px; bottom: auto;"), Ft.pagePushedDown & amp; & amp; !_o.checkIsBrowserIE11OrBelow() ? _o.BannerPushDownHandler() : (e.animate({
                top: "0"
            }, 1e3), Mt.bnrAnimationInProg = !0, setTimeout(function() {
                e.css("top: 0px; bottom: auto;"), Mt.bnrAnimationInProg = !1
            }, 1e3))) : t !== et & amp; & amp;
            t !== nt || (e.css("bottom: -300px;"), e.animate({
                bottom: "1em"
            }, 2e3), Mt.bnrAnimationInProg = !0, setTimeout(function() {
                e.css("bottom: 1rem;"), Mt.bnrAnimationInProg = !1
            }, 2e3))
        }, Sr.prototype.setBannerBtn = function() {
            window.innerWidth & lt; = 600 ? (Gt.insertElement(this._btnsCntr, this._settingsBtn, "afterbegin"), Gt.insertElement(this._btnsCntr, this._saveBtn, "afterbegin"), Gt.insertElement(this._btnsCntr, this._acceptBtn, "afterbegin"), Gt.insertElement(this._btnsCntr, this._rejectBtn, "afterbegin")) : this._fourBtns ? (this._descriptCntr.insertAdjacentElement("beforeend", this._settingsBtn), this._acceptBtn.insertAdjacentElement("beforebegin", this._rejectBtn), this._btnsCntr.insertAdjacentElement("beforebegin", this._saveBtn)) : (Gt.insertElement(this._btnsCntr, this._settingsBtn, "beforebegin"), Gt.insertElement(this._btnsCntr, this._saveBtn, this._settingsBtn ? "afterbegin" : "beforebegin"), Gt.insertElement(this._btnsCntr, this._rejectBtn, "beforeend"), Gt.insertElement(this._btnsCntr, this._acceptBtn, "beforeend"))
        }, Sr.prototype.setCmpBannerOptions = function(i, e) {
            var s = zt(i("#banner-options .banner-option")).el.cloneNode(!0);
            zt(i("#banner-options")).html("");
            var a = 1;
            e.forEach(function(e) {
                var t = s.cloneNode(!0),
                    o = Rt[e.titleKey],
                    n = Rt[e.descriptionKey];
                if (o || n) {
                    t.querySelector(".banner-option-header :first-child").innerHTML = o;
                    var r = t.querySelector(".banner-option-details");
                    n ? (r.setAttribute("id", "option-details-" + a++), r.innerHTML = n) : r.parentElement.removeChild(r), zt(i("#banner-options")).el.appendChild(t)
                }
            })
        }, Sr.prototype.setFloatingRoundedIconBannerCmpOptions = function(r, e) {
            var i = zt(r("#banner-options button")).el.cloneNode(!0),
                n = zt(r(".banner-option-details")).el.cloneNode(!0);
            zt(r("#banner-options")).html(""), e.forEach(function(e) {
                var t = i.cloneNode(!0),
                    o = Rt[e.titleKey],
                    n = Rt[e.descriptionKey];
                (o || n) & amp; & amp;
                (t.setAttribute("id", e.identifier), t.querySelector(".banner-option-header :first-child").innerHTML = o, zt(r("#banner-options")).el.appendChild(t))
            }), e.forEach(function(e) {
                var t = Rt[e.descriptionKey];
                if (t) {
                    var o = n.cloneNode(!0);
                    o.innerHTML = t, o.classList.add(e.identifier), zt(r("#banner-options")).el.appendChild(o)
                }
            })
        }, Sr.prototype.setBannerOptionContent = function() {
            Ft.bannerName !== Ze & amp; & amp;
            Ft.bannerName !== ot || setTimeout(function() {
                if (window.innerWidth & lt; 769) {
                    var e = zt("#banner-options").el[0];
                    zt("#onetrust-group-container").el[0].appendChild(e)
                } else e = zt("#banner-options").el[0], Ft.bannerName === ot ? zt(".banner-content").el[0].appendChild(e) : zt("#onetrust-banner-sdk .ot-sdk-container").el[0].appendChild(e)
            })
        }, Sr.prototype.setAdditionalDesc = function(e) {
            var t = Rt.BannerAdditionalDescPlacement,
                o = document.createElement("span");
            o.classList.add("ot-b-addl-desc"), o.innerHTML = Rt.BannerAdditionalDescription;
            var n = e("#onetrust-policy-text");
            if (t === x.AfterTitle) n.insertAdjacentElement("beforeBegin", o);
            else if (t === x.AfterDescription) n.insertAdjacentElement("afterEnd", o);
            else if (t === x.AfterDPD) {
                var r = e(".ot-dpd-container .ot-dpd-desc");
                Rt.ChoicesBanner & amp; & amp;
                (r = e("#onetrust-group-container")), r.insertAdjacentElement("beforeEnd", o)
            }
        }, Sr.prototype.insertGrps = function(e) {
            var p = e(".ot-cat-item").cloneNode(!0);
            Gt.removeChild(e(".ot-cat-item")), Rt.BCategoryStyle === se.Checkbox ? Gt.removeChild(p.querySelector(".ot-tgl")) : (Gt.removeChild(p.querySelector(".ot-chkbox")), zt(p).addClass("ot-cat-bdr"));
            var h = e(".ot-cat-lst ul");
            Rt.Groups.forEach(function(e) {
                var t = p.cloneNode(!0),
                    o = t.querySelector(".ot-tgl,.ot-chkbox"),
                    n = e.GroupName,
                    r = e.CustomGroupId,
                    i = "ot-bnr-grp-id-" + r,
                    s = "ot-bnr-hdr-id-" + r,
                    a = -1 !== _t.indexOf(e.Type),
                    l = eo.getGrpStatus(e).toLowerCase() === qe || a,
                    c = Ln.isGroupActive(e) || a;
                zt(o.querySelector("label")).attr("for", i), zt(o.querySelector(".ot-label-txt")).html(e.GroupName);
                var d = o.querySelector("input");
                l & amp; & amp;
                (Rt.BCategoryStyle === se.Toggle ? (Gt.removeChild(o), t.insertAdjacentElement("beforeend", zt("&lt;div class='ot-always-active'&gt;" + Rt.AlwaysActiveText + "&lt;/div&gt;", "ce").el)) : zt(d).attr("disabled", !0)), d.classList.add("category-switch-handler"), Ln.setInputID(d, i, r, c, s);
                var u = t.querySelector("h4");
                zt(u).html(n), zt(u).attr("id", s), zt(h).append(t)
            })
        }, Sr);

        function Sr() {
            this.El = "#onetrust-banner-sdk", this._saveBtn = null, this._settingsBtn = null, this._acceptBtn = null, this._rejectBtn = null, this._descriptCntr = null, this._btnsCntr = null, this._fourBtns = !1
        }
        var Ar, Tr = (Ir.prototype.setHeaderConfig = function() {
            Ar.setHeader(), Ar.setSearchInput(), Ar.setHeaderUIConsent();
            var e = Ar.getGroupsForFilter();
            lr.setFilterListByGroup(e, !1)
        }, Ir.prototype.filterVendorByString = function(e) {
            Ar.searchQuery = e, Ar.filterVendorByGroupOrQuery()
        }, Ir.prototype.filterVendorByGroup = function(e) {
            Ar.filterGroups = e, Ar.filterVendorByGroupOrQuery()
        }, Ir.prototype.showVSList = function() {
            Ar.removeListeners(), Ar.showEmptyResults(!1, ""), Ar.clearUIElementsInMain(), Ar.addVSList(Mt.getVendorsInDomain())
        }, Ir.prototype.showEmptyResults = function(e, t) {
            if (e) this.setNoResultsContent(t);
            else {
                zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).removeClass("no-results");
                var o = zt("#onetrust-pc-sdk #no-results");
                o.length & amp; & amp;
                o.remove()
            }
        }, Ir.prototype.setNoResultsContent = function(e) {
            var t = zt("#onetrust-pc-sdk #no-results").el[0];
            if (!t) {
                var o = document.createElement("div"),
                    n = document.createElement("p"),
                    r = document.createTextNode(" did not match any vendors."),
                    i = document.createElement("span");
                return o.id = "no-results", i.id = "user-text", i.innerText = e, n.appendChild(i), n.appendChild(r), o.appendChild(n), zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).addClass("no-results"), zt("#vendor-search-handler").el[0].setAttribute("aria-describedby", o.id), zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).append(o)
            }
            t.querySelector("span").innerText = e
        }, Ir.prototype.getGroupsFilter = function() {
            for (var e = [], t = 0, o = zt("#onetrust-pc-sdk .category-filter-handler").el; t & lt; o.length; t++) {
                var n = o[t],
                    r = n.getAttribute("data-purposeid");
                n.checked & amp; & amp;
                e.push(r)
            }
            return e
        }, Ir.prototype.cancelFilter = function() {
            for (var e = 0, t = zt("#onetrust-pc-sdk .category-filter-handler").el; e & lt; t.length; e++) {
                var o = t[e],
                    n = o.getAttribute("data-optanongroupid"),
                    r = 0 & lt; = Mt.filterByCategories.indexOf(n);
                Gt.setCheckedAttribute(null, o, r)
            }
            var i = Ar.getGroupsFilter();
            Ar.filterVendorByGroup(i)
        }, Ir.prototype.clearFilter = function() {
            Ar.searchQuery = "", Ar.filterGroups = []
        }, Ir.prototype.toggleVendors = function(r) {
            Mt.getVendorsInDomain().forEach(function(e, t) {
                if (!eo.isAlwaysActiveGroup(e.groupRef)) {
                    var o = document.getElementById("ot-vendor-id-" + t),
                        n = document.getElementById("ot-vs-lst-id-" + t);
                    Cr.toggleVendorService(e.groupRef.CustomGroupId, t, r, o), Cr.toggleVendorService(e.groupRef.CustomGroupId, t, r, n)
                }
            })
        }, Ir.prototype.hideVendorList = function() {
            Ar.removeListeners(), Ar.clearUIElementsInMain()
        }, Ir.prototype.addListeners = function() {
            zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " .ot-vs-list .category-switch-handler").on("click", Ar.toggleVendorHandler), zt("#onetrust-pc-sdk").on("click", ".ot-vs-list", Lr.onCategoryItemToggle.bind(this))
        }, Ir.prototype.removeListeners = function() {
            document.querySelectorAll("#onetrust-pc-sdk .ot-vs-list .category-switch-handler").forEach(function(e) {
                return e.removeEventListener("click", Lr.toggleGroupORVendorHandler)
            });
            var e = document.querySelector("#onetrust-pc-sdk .ot-vs-list");
            null != e & amp; & amp;
            e.removeEventListener("click", Lr.onCategoryItemToggle)
        }, Ir.prototype.toggleVendorHandler = function(e) {
            Lr.toggleVendorFromListHandler(e), Ar.checkAllowAllCheckedValue()
        }, Ir.prototype.filterVendorByGroupOrQuery = function() {
            var o = new Map;
            Mt.getVendorsInDomain().forEach(function(e, t) {
                Ar.checkVendorConditions(e) & amp; & amp;
                o.set(t, e)
            }), Ar.showEmptyResults(o.size & lt; = 0, Ar.searchQuery), Ar.removeListeners(), Ar.clearUIElementsInMain(), Ar.addVSList(o)
        }, Ir.prototype.checkVendorConditions = function(e) {
            return !("" !== Ar.searchQuery & amp; & amp; e.ServiceName.toLowerCase().indexOf(Ar.searchQuery.toLowerCase()) & lt; 0 || 0 & lt; Ar.filterGroups.length & amp; & amp; Ar.filterGroups.indexOf(e.groupRef.CustomGroupId) & lt; 0)
        }, Ir.prototype.addVSList = function(e) {
            var t = zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " .ot-sdk-column"),
                o = Cr.getVendorListEle(e);
            t.append(o), Ar.addListeners()
        }, Ir.prototype.getGroupsForFilter = function() {
            var t = new Map;
            return Mt.getVendorsInDomain().forEach(function(e) {
                t.has(e.groupRef.CustomGroupId) || t.set(e.groupRef.CustomGroupId, e.groupRef)
            }), Array.from(t.values())
        }, Ir.prototype.clearUIElementsInMain = function() {
            zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " ul" + Xt.P_Host_Cntr).html(""), zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " ul" + Xt.P_Host_Cntr).hide(), zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " ul" + Xt.P_Vendor_Container).html(""), zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " ul" + Xt.P_Vendor_Container).hide();
            var e = zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " .ot-vs-list");
            e & amp; & amp;
            e.length & amp; & amp;
            e.remove()
        }, Ir.prototype.setHeader = function() {
            var e = Rt.VendorServiceConfig.PCVSListTitle,
                t = document.querySelector("#onetrust-pc-sdk " + Xt.P_Vendor_Title);
            t & amp; & amp;
            (t.innerText = e)
        }, Ir.prototype.setSearchInput = function() {
            var e = Rt.PCenterCookieListSearch,
                t = Rt.PCenterCookieSearchAriaLabel,
                o = zt("#onetrust-pc-sdk " + Xt.P_Vendor_Search_Input);
            o.el[0].placeholder = e, o.attr("aria-label", t)
        }, Ir.prototype.setHeaderUIConsent = function() {
            var e;
            if (zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr).addClass("ot-vnd-list-cnt"), zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr + " .ot-sel-all").addClass("ot-vs-selc-all"), Rt.PCCategoryStyle === se.Toggle & amp; & amp;
                (zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr + " .ot-sel-all").addClass("ot-toggle-conf"), Rt.PCAccordionStyle === W.Caret & amp; & amp; zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr + " .ot-sel-all").addClass("ot-caret-conf")), zt("#onetrust-pc-sdk " + Xt.P_Leg_Select_All).hide(), zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Host_El).hide(), zt("#onetrust-pc-sdk " + Xt.P_Host_Cntr).hide(), zt(Xt.P_Vendor_List + " #select-all-text-container").hide(), zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Leg_El).hide(), zt("#onetrust-pc-sdk " + Xt.P_Vendor_Container).show(), zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr).show(), zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Consent_El).show("inline-block"), zt("#onetrust-pc-sdk " + Xt.P_Vendor_List).removeClass(Xt.P_Host_UI), zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).removeClass(Xt.P_Host_Cnt), !document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox .sel-all-hdr")) {
                var t = document.createElement("h4");
                t.className = "sel-all-hdr", t.textContent = (null === (e = Rt.VendorServiceConfig) || void 0 === e ? void 0 : e.PCVSAllowAllText) || "PCVSAllowAllText";
                var o = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox"),
                    n = Rt.PCCategoryStyle === se.Checkbox ? "beforeend" : "afterbegin";
                o.insertAdjacentElement(n, t)
            }
            Ar.checkAllowAllCheckedValue()
        }, Ir.prototype.checkAllowAllCheckedValue = function() {
            var t = !0;
            Mt.vsConsent.forEach(function(e) {
                e || (t = !1)
            });
            var e = document.getElementById("#select-all-vendor-groups-handler");
            Gt.setCheckedAttribute(null, e, t)
        }, Ir);

        function Ir() {
            this.searchQuery = "", this.filterGroups = []
        }
        var Lr, _r = (Vr.prototype.initCookieSettingHandlers = function() {
            zt(document).on("click", ".optanon-show-settings, .optanon-toggle-display, .ot-sdk-show-settings, .ot-pc-handler", this.cookiesSettingsBoundListener)
        }, Vr.prototype.initFlgtCkStgBtnEventHandlers = function() {
            zt(".ot-floating-button__open").on("click", Lr.floatingCookieSettingOpenBtnClicked), zt(".ot-floating-button__close").on("click", Lr.floatingCookieSettingCloseBtnClicked)
        }, Vr.prototype.floatingCookieSettingOpenBtnClicked = function(e) {
            zt(Lr.fltgBtnSltr).addClass("ot-pc-open"), Rt.cookiePersistentLogo.includes("ot_guard_logo.svg") & amp; & amp;
            zt(Lr.fltgBtnFSltr).attr("aria-hidden", "true"), zt(Lr.fltgBtnBSltr).attr("aria-hidden", ""), zt(Lr.fltgBtnFrontBtn).el[0].setAttribute("aria-label", ""), zt(Lr.fltgBtnFrontBtn).el[0].setAttribute("aria-hidden", !0), zt(Lr.fltgBtnBackBtn).el[0].setAttribute("aria-label", Rt.AriaClosePreferences), zt(Lr.fltgBtnBackBtn).el[0].setAttribute("aria-hidden", !1), xo.triggerGoogleAnalyticsEvent(Ho, Yo), Lr.showCookieSettingsHandler(e)
        }, Vr.prototype.floatingCookieSettingCloseBtnClicked = function(e) {
            zt(Lr.fltgBtnFrontBtn).el[0].setAttribute("aria-label", Rt.AriaOpenPreferences), zt(Lr.fltgBtnFrontBtn).el[0].setAttribute("aria-hidden", !1), zt(Lr.fltgBtnBackBtn).el[0].setAttribute("aria-label", ""), zt(Lr.fltgBtnBackBtn).el[0].setAttribute("aria-hidden", !0), e & amp; & amp;
            (xo.triggerGoogleAnalyticsEvent(Ho, Xo), Lr.hideCookieSettingsHandler(e))
        }, Vr.prototype.initialiseLegIntBtnHandlers = function() {
            zt(document).on("click", ".ot-obj-leg-btn-handler", Lr.onLegIntButtonClick), zt(document).on("click", ".ot-remove-objection-handler", Lr.onLegIntButtonClick)
        }, Vr.prototype.initialiseAddtlVenHandler = function() {
            zt("#onetrust-pc-sdk #ot-addtl-venlst").on("click", Lr.selectVendorsGroupHandler), zt("#onetrust-pc-sdk #ot-selall-adtlven-handler").on("click", Lr.selAllAdtlVenHandler)
        }, Vr.prototype.initializeGenVenHandlers = function() {
            zt("#onetrust-pc-sdk #ot-gn-venlst .ot-gnven-chkbox-handler").on("click", Lr.genVendorToggled), zt("#onetrust-pc-sdk #ot-gn-venlst .ot-gv-venbox").on("click", Lr.genVendorDetails), zt("#onetrust-pc-sdk #ot-selall-gnven-handler").on("click", Lr.selectAllGenVenHandler)
        }, Vr.prototype.initialiseConsentNoticeHandlers = function() {
            var e = this,
                t = 37,
                o = 39;
            if (Ft.pcName === dt & amp; & amp; Lr.categoryMenuSwitchHandler(), zt("#onetrust-pc-sdk .onetrust-close-btn-handler").on("click", Lr.bannerCloseButtonHandler), zt("#onetrust-pc-sdk #accept-recommended-btn-handler").on("click", Br.allowAllEventHandler.bind(this, !0)), zt("#onetrust-pc-sdk .ot-pc-refuse-all-handler").on("click", Br.rejectAllEventHandler.bind(this, !0)), zt("#onetrust-pc-sdk #close-pc-btn-handler").on("click", Lr.hideCookieSettingsHandler), zt(document).on("keydown", function(e) {
                    var t = document.getElementById("onetrust-pc-sdk"),
                        o = "none" !== window.getComputedStyle(t).display;
                    if (27 === e.keyCode & amp; & amp; t & amp; & amp; o) {
                        var n = zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal).el[0];
                        "block" === n.style.display || "0px" & lt;
                        n.style.width ? (Lr.closeFilter(), zt("#onetrust-pc-sdk #filter-btn-handler").focus()) : Rt.NoBanner & amp; & amp;
                        !Rt.ShowPreferenceCenterCloseButton || Lr.hideCookieSettingsHandler(), Lr.confirmPC()
                    }(o & amp; & amp; 32 === e.keyCode || "Space" === e.code || 13 === e.keyCode || "Enter" === e.code) & amp; & amp;
                    Kt.findUserType(e)
                }), zt("#onetrust-pc-sdk #vendor-close-pc-btn-handler").on("click", Lr.hideCookieSettingsHandler), zt("#onetrust-pc-sdk .category-switch-handler").on("click", Lr.toggleGroupORVendorHandler), zt("#onetrust-pc-sdk .cookie-subgroup-handler").on("click", Lr.toggleSubCategory), zt("#onetrust-pc-sdk .category-menu-switch-handler").on("keydown", function(e) {
                    Ft.pcName === dt & amp; & amp;
                    (e.keyCode !== t & amp; & amp; e.keyCode !== o || (Rt.PCTemplateUpgrade ? Lr.changeSelectedTabV2(e) : Lr.changeSelectedTab(e)))
                }), zt("#onetrust-pc-sdk").on("click", Xt.P_Category_Item + " &gt; input:first-child," + Xt.P_Category_Item + " &gt; button:first-child", Lr.onCategoryItemToggle.bind(this)), (Rt.showCookieList || Mt.showGeneralVendors) & amp; & amp;
                (zt("#onetrust-pc-sdk .category-host-list-handler").on("click", function(e) {
                    Mt.showGeneralVendors & amp; & amp;
                    Rt.showCookieList ? Mt.cookieListType = X.HostAndGenVen : Mt.showGeneralVendors ? Mt.cookieListType = X.GenVen : Mt.cookieListType = X.Host, Lr.pcLinkSource = e.target, Lr.loadCookieList(e.target)
                }), Kt.isOptOutEnabled() ? (zt("#onetrust-pc-sdk #select-all-hosts-groups-handler").on("click", Lr.selectAllHostsGroupsHandler), zt("#onetrust-pc-sdk " + Xt.P_Host_Cntr).on("click", Lr.selectHostsGroupHandler)) : zt("#onetrust-pc-sdk " + Xt.P_Host_Cntr).on("click", Lr.toggleAccordionStatus)), Rt.IsIabEnabled & amp; & amp;
                (zt("#onetrust-pc-sdk .category-vendors-list-handler").on("click", function(e) {
                    Lr.pcLinkSource = e.target, Lr.showVendorsList(e.target)
                }), zt("#onetrust-pc-sdk " + Xt.P_Vendor_Container).on("click", Lr.selectVendorsGroupHandler), Rt.UseGoogleVendors || Lr.bindSelAllHandlers(), Lr.initialiseLegIntBtnHandlers()), Rt.IsIabEnabled || Rt.showCookieList || Mt.showGeneralVendors || Mt.showVendorService) {
                zt(document).on("click", ".back-btn-handler", Lr.backBtnHandler), zt("#onetrust-pc-sdk #vendor-search-handler").on("keyup", function(e) {
                    var t = e.target.value.trim();
                    Mt.showVendorService ? Ar.filterVendorByString(t) : Lr.isCookieList ? Hn.searchHostList(t) : (Hn.loadVendorList(t, []), Rt.UseGoogleVendors & amp; & amp; Hn.searchVendors(Hn.googleSearchSelectors, Mt.addtlVendorsList, oe.GoogleVendor, t), Mt.showGeneralVendors & amp; & amp; Rt.GeneralVendors.length & amp; & amp; Hn.searchVendors(Hn.genVendorSearchSelectors, Rt.GeneralVendors, oe.GeneralVendor, t)), Hn.playSearchStatus(Lr.isCookieList)
                }), zt("#onetrust-pc-sdk #filter-btn-handler").on("click", Lr.toggleVendorFiltersHandler), zt("#onetrust-pc-sdk #filter-apply-handler").on("click", Lr.applyFilterHandler), zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal).on("click", Lr.tglFltrOptionHandler), !Bt.isV2Template & amp; & amp;
                Ft.pcName !== ct || zt("#onetrust-pc-sdk #filter-cancel-handler").on("click", Lr.cancelFilterHandler), !Bt.isV2Template & amp; & amp;
                Ft.pcName === ct || zt("#onetrust-pc-sdk #clear-filters-handler").on("click", Lr.clearFiltersHandler), Bt.isV2Template ? zt("#onetrust-pc-sdk #filter-cancel-handler").on("keydown", function(e) {
                    9 !== e.keyCode & amp; & amp;
                    "tab" !== e.code || e.shiftKey || (e.preventDefault(), zt("#onetrust-pc-sdk #clear-filters-handler").el[0].focus())
                }) : zt("#onetrust-pc-sdk #filter-apply-handler").on("keydown", function(e) {
                    9 !== e.keyCode & amp; & amp;
                    "tab" !== e.code || e.shiftKey || (e.preventDefault(), zt("#onetrust-pc-sdk .category-filter-handler").el[0].focus())
                });
                var n = zt("#onetrust-pc-sdk .category-filter-handler").el;
                zt(n[0]).on("keydown", function(e) {
                    9 !== e.keyCode & amp; & amp;
                    "tab" !== e.code || !e.shiftKey || (e.preventDefault(), zt("#onetrust-pc-sdk #filter-apply-handler").el[0].focus())
                })
            }
            Rt.NoBanner & amp; & amp;
            (Rt.OnClickCloseBanner & amp; & amp; document.body.addEventListener("click", Br.bodyClickEvent), Rt.ScrollCloseBanner & amp; & amp; window.addEventListener("scroll", Br.scrollCloseBanner)), zt("#onetrust-pc-sdk .ot-gv-list-handler").on("click", function(t) {
                return c(e, void 0, void 0, function() {
                    return C(this, function(e) {
                        return Mt.cookieListType = X.GenVen, Lr.loadCookieList(t.target), [2]
                    })
                })
            }), Mt.showVendorService & amp; & amp;
            (Lr.bindSelAllHandlers(), zt("#onetrust-pc-sdk .onetrust-vendors-list-handler").on("click", function() {
                return Lr.showVendorsList(null, !0)
            }))
        }, Vr.prototype.bindSelAllHandlers = function() {
            zt("#onetrust-pc-sdk #select-all-vendor-leg-handler").on("click", Lr.selectAllVendorsLegIntHandler), zt("#onetrust-pc-sdk #select-all-vendor-groups-handler").on("click", Lr.SelectAllVendorConsentHandler)
        }, Vr.prototype.hideCookieSettingsHandler = function(e) {
            return void 0 === e & amp; & amp;
            (e = window.event), xo.triggerGoogleAnalyticsEvent(Ho, Uo), jn.hideConsentNoticeV2(), Lr.getResizeElement().removeEventListener("resize", Lr.setCenterLayoutFooterHeight), window.removeEventListener("resize", Lr.setCenterLayoutFooterHeight), !Bt.isV2Template & amp; & amp;
            Ft.pcName !== ct || Lr.closeFilter(!1), Ft.pcName === at & amp; & amp;
            zt("#onetrust-pc-sdk " + Xt.P_Content).removeClass("ot-hide"), Br.hideVendorsList(), fn.csBtnGroup & amp; & amp;
            (zt(Lr.fltgBtnSltr).removeClass("ot-pc-open"), Lr.floatingCookieSettingCloseBtnClicked(null)), Lr.confirmPC(e), Br.resetConsent(), !1
        }, Vr.prototype.selectAllHostsGroupsHandler = function(e) {
            var t = e.target.checked,
                o = zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Host_El).el[0],
                n = o.classList.contains("line-through"),
                r = zt("#onetrust-pc-sdk .host-checkbox-handler").el;
            Gt.setCheckedAttribute("#select-all-hosts-groups-handler", null, t);
            for (var i = 0; i & lt; r.length; i++) r[i].getAttribute("disabled") || Gt.setCheckedAttribute(null, r[i], t);
            Mt.optanonHostList.forEach(function(e) {
                bo.updateHostStatus(e, t)
            }), r.forEach(function(e) {
                vo.updateGenVendorStatus(e.getAttribute("hostId"), t)
            }), n & amp; & amp;
            o.classList.remove("line-through")
        }, Vr.prototype.selectHostsGroupHandler = function(e) {
            Lr.toggleAccordionStatus(e);
            var t = e.target.getAttribute("hostId"),
                o = e.target.getAttribute("ckType"),
                n = e.target.checked;
            if (null !== t) {
                if (o === J.GenVendor) {
                    var r = Rt.GeneralVendors.find(function(e) {
                        return e.VendorCustomId === t
                    }).Name;
                    xo.triggerGoogleAnalyticsEvent(Ho, n ? Zo : en, r + ": VEN_" + t), vo.updateGenVendorStatus(t, n)
                } else {
                    var i = Gt.findIndex(Mt.optanonHostList, function(e) {
                            return e.HostId === t
                        }),
                        s = Mt.optanonHostList[i];
                    Lr.toggleHostStatus(s, n)
                }
                Gt.setCheckedAttribute(null, e.target, n)
            }
        }, Vr.prototype.onCategoryItemToggle = function(e) {
            e.stopPropagation(), "BUTTON" === e.target.tagName & amp; & amp;
            (Ft.pcName === at & amp; & amp; this.setPcListContainerHeight(), Lr.toggleAccordionStatus(e))
        }, Vr.prototype.toggleAccordionStatus = function(e) {
            var t = e.target;
            if (t & amp; & amp; t.getAttribute("aria-expanded")) {
                var o = "true" === t.getAttribute("aria-expanded") ? "false" : "true";
                t.setAttribute("aria-expanded", o)
            }
        }, Vr.prototype.toggleHostStatus = function(e, t) {
            xo.triggerGoogleAnalyticsEvent(Ho, t ? tn : on, e.HostName + ": H_" + e.HostId), bo.updateHostStatus(e, t)
        }, Vr.prototype.toggleBannerOptions = function(e) {
            zt(".banner-option-input").each(function(e) {
                zt(e).el.setAttribute("aria-expanded", !1)
            }), Lr.toggleAccordionStatus(e)
        }, Vr.prototype.bannerCloseButtonHandler = function(e) {
            if (zt(document).off("keydown", Lr.shiftBannerFocus), e & amp; & amp; e.target & amp; & amp; e.target.className) {
                var t = e.target.className;
                if (-1 & lt; t.indexOf("save-preference-btn-handler")) Mt.bannerCloseSource = f.ConfirmChoiceButton, xo.triggerGoogleAnalyticsEvent(Ho, Wo);
                else if (-1 & lt; t.indexOf("banner-close-button")) {
                    Mt.bannerCloseSource = f.BannerCloseButton;
                    var o = Ro; - 1 & lt;
                    t.indexOf("ot-close-link") & amp; & amp;
                    (o = qo, Mt.bannerCloseSource = f.ContinueWithoutAcceptingButton), xo.triggerGoogleAnalyticsEvent(Ho, o)
                } else - 1 & lt;
                t.indexOf("ot-bnr-save-handler") & amp; & amp;
                (Mt.bannerCloseSource = f.BannerSaveSettings, xo.triggerGoogleAnalyticsEvent(Ho, Mo))
            }
            return Br.hideVendorsList(), Br.bannerCloseButtonHandler()
        }, Vr.prototype.onLegIntButtonClick = function(e) {
            if (e) {
                var t = e.currentTarget,
                    o = "true" === t.parentElement.getAttribute("is-vendor"),
                    n = t.parentElement.getAttribute("data-group-id"),
                    r = !t.classList.contains("ot-leg-int-enabled");
                if (o) Lr.onVendorToggle(n, D.LI);
                else {
                    var i = eo.getGroupById(n);
                    i.Parent ? Lr.updateSubGroupToggles(i, r, !0) : Lr.updateGroupToggles(i, r, !0)
                }
                Ln.updateLegIntBtnElement(t.parentElement, r)
            }
        }, Vr.prototype.updateGroupToggles = function(t, o, e) {
            bo.toggleGroupHosts(t, o), Mt.genVenOptOutEnabled & amp; & amp;
            bo.toggleGroupGenVendors(t, o), t.IsLegIntToggle = e, Ln.toggleGrpStatus(t, o), t.SubGroups & amp; & amp;
            t.SubGroups.length & amp; & amp;
            (Ft.bannerName === rt & amp; & amp; Bt.moduleInitializer.IsSuppressPC & amp; & amp; t.SubGroups.length ? t.SubGroups.forEach(function(e) {
                e.IsLegIntToggle = t.IsLegIntToggle, Ln.toggleGrpStatus(e, o), e.IsLegIntToggle = !1, bo.toggleGroupHosts(e, o), Mt.genVenOptOutEnabled & amp; & amp;
                bo.toggleGroupGenVendors(e, o), Cr.setVendorStateByGroup(e, o)
            }) : Ln.toogleAllSubGrpElements(t, o)), Cr.setVendorStateByGroup(t, o), this.allowAllVisible(Ln.setAllowAllButton()), t.IsLegIntToggle = !1
        }, Vr.prototype.updateSubGroupToggles = function(e, t, o) {
            bo.toggleGroupHosts(e, t), Mt.genVenOptOutEnabled & amp; & amp;
            bo.toggleGroupGenVendors(e, t);
            var n = eo.getGroupById(e.Parent);
            e.IsLegIntToggle = o, n.IsLegIntToggle = e.IsLegIntToggle;
            var r = Ln.isGroupActive(n);
            t ? (Ln.toggleGrpStatus(e, !0), Ln.isAllSubgroupsEnabled(n) & amp; & amp; !r & amp; & amp;
                (Ln.toggleGrpStatus(n, !0), bo.toggleGroupHosts(n, t), Mt.genVenOptOutEnabled & amp; & amp; bo.toggleGroupGenVendors(n, t), Ln.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !0))) : (Ln.toggleGrpStatus(e, !1), Ln.isAllSubgroupsDisabled(n) & amp; & amp; r ? (Ln.toggleGrpStatus(n, !1), bo.toggleGroupHosts(n, t), Mt.genVenOptOutEnabled & amp; & amp; bo.toggleGroupGenVendors(n, t), Ln.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), t)) : (Ln.toggleGrpStatus(n, !1), bo.toggleGroupHosts(n, !1), Mt.genVenOptOutEnabled & amp; & amp; bo.toggleGroupGenVendors(n, t), Ln.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !1))), this.allowAllVisible(Ln.setAllowAllButton()), e.IsLegIntToggle = !1, n.IsLegIntToggle = e.IsLegIntToggle
        }, Vr.prototype.hideCategoryContainer = function(e) {
            void 0 === e & amp; & amp;
            (e = !1);
            var t = Ft.pcName;
            this.isCookieList = e, Rt.PCTemplateUpgrade ? zt("#onetrust-pc-sdk " + Xt.P_Content).addClass("ot-hide") : zt("#onetrust-pc-sdk .ot-main-content").hide(), zt("#onetrust-pc-sdk " + Xt.P_Vendor_List).removeClass("ot-hide"), t !== ct & amp; & amp;
            t !== at & amp; & amp;
            zt("#onetrust-pc-sdk #close-pc-btn-handler.main").hide(), t === at & amp; & amp;
            Et(zt("#onetrust-pc-sdk").el[0], 'height: "";', !0), Mt.showVendorService ? Ar.setHeaderConfig() : (e ? Lr.setCookieListTemplate() : Lr.setVendorListTemplate(), lr.setFilterList(e))
        }, Vr.prototype.setCookieListTemplate = function() {
            var e = Bt.isV2Template;
            zt(Xt.P_Vendor_List + " #select-all-text-container").show("inline-block"), zt("#onetrust-pc-sdk " + Xt.P_Host_Cntr).show(), Kt.isOptOutEnabled() ? zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Host_El).show("inline-block") : zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Host_El).hide(), zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Leg_El).hide(), zt("#onetrust-pc-sdk " + Xt.P_Leg_Header).hide(), e || zt("#onetrust-pc-sdk " + Xt.P_Leg_Select_All).hide(), zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Consent_El).hide(), zt("#onetrust-pc-sdk  " + Xt.P_Vendor_Container).hide(), (Rt.UseGoogleVendors || Mt.showGeneralVendors) & amp; & amp;
            zt("#onetrust-pc-sdk .ot-acc-cntr").hide(), zt("#onetrust-pc-sdk " + Xt.P_Vendor_List).addClass(Xt.P_Host_UI), zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).addClass(Xt.P_Host_Cnt)
        }, Vr.prototype.setVendorListTemplate = function() {
            zt("#onetrust-pc-sdk " + Xt.P_Vendor_Container).show(), zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Consent_El).show("inline-block"), Rt.UseGoogleVendors & amp; & amp;
            zt("#onetrust-pc-sdk .ot-acc-cntr").show(), Ft.legIntSettings.PAllowLI & amp; & amp;
            "IAB2" === Ft.iabType ? (zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr).show(Bt.isV2Template ? void 0 : "inline-block"), zt("#onetrust-pc-sdk " + Xt.P_Leg_Select_All).show("inline-block"), zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Leg_El).show("inline-block"), zt(Xt.P_Vendor_List + " #select-all-text-container").hide(), Ft.legIntSettings.PShowLegIntBtn ? (zt("#onetrust-pc-sdk " + Xt.P_Leg_Header).hide(), zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Leg_El).hide()) : zt("#onetrust-pc-sdk " + Xt.P_Leg_Header).show()) : (zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr).show(), zt(Xt.P_Vendor_List + " #select-all-text-container").show("inline-block"), zt("#onetrust-pc-sdk " + Xt.P_Leg_Select_All).hide(), zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Leg_El).hide()), zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Host_El).hide(), zt("#onetrust-pc-sdk " + Xt.P_Host_Cntr).hide(), zt("#onetrust-pc-sdk " + Xt.P_Vendor_List).removeClass(Xt.P_Host_UI), zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).removeClass(Xt.P_Host_Cnt)
        }, Vr.prototype.showAllVendors = function(t) {
            return c(this, void 0, void 0, function() {
                return C(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Lr.fetchAndSetupPC()];
                        case 1:
                            return e.sent(), Lr.showVendorsList(null, !0), Mt.isPCVisible ? [3, 3] : [4, Lr.showCookieSettingsHandler(t)];
                        case 2:
                            e.sent(), e.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
        }, Vr.prototype.fetchAndSetupPC = function() {
            return c(this, void 0, void 0, function() {
                var t, o;
                return C(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return Bt.moduleInitializer.IsSuppressPC & amp; & amp;
                            0 === zt("#onetrust-pc-sdk").length ? [4, gn.getPcContent()] : [3, 2];
                        case 1:
                            t = e.sent(), fn.preferenceCenterGroup = {
                                name: t.name,
                                html: atob(t.html),
                                css: t.css
                            }, Bt.isV2Template = Rt.PCTemplateUpgrade & amp; & amp;
                            /otPcPanel|otPcCenter|otPcTab/.test(t.name), (o = document.getElementById("onetrust-style")).innerHTML += fn.preferenceCenterGroup.css, o.innerHTML += ur.addCustomPreferenceCenterCSS(), vr.insertPcHtml(), Lr.initialiseConsentNoticeHandlers(), Rt.IsIabEnabled & amp; & amp;
                            Hn.InitializeVendorList(), e.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, Vr.prototype.setVendorContent = function() {
            zt("#onetrust-pc-sdk #filter-count").text(Mt.filterByIABCategories.length.toString()), Hn.loadVendorList("", Mt.filterByIABCategories), Rt.UseGoogleVendors & amp; & amp;
            (Mt.vendorDomInit ? Hn.resetAddtlVendors() : (Hn.initGoogleVendors(), zt("#onetrust-pc-sdk").on("click", ".ot-acc-cntr &gt; button", Lr.toggleAccordionStatus.bind(this)))), Mt.vendorDomInit || (Mt.vendorDomInit = !0, Lr.initialiseLegIntBtnHandlers(), Rt.UseGoogleVendors & amp; & amp;
                (Lr.initialiseAddtlVenHandler(), Lr.bindSelAllHandlers())), Mt.showGeneralVendors & amp; & amp;
            !Mt.genVendorDomInit & amp; & amp;
            (Mt.genVendorDomInit = !0, Hn.initGenVendors(), Lr.initializeGenVenHandlers(), Rt.UseGoogleVendors || (Lr.bindSelAllHandlers(), zt("#onetrust-pc-sdk").on("click", ".ot-acc-cntr &gt; button", Lr.toggleAccordionStatus.bind(this))))
        }, Vr.prototype.showVendorsList = function(e, t) {
            if (void 0 === t & amp; & amp;
                (t = !1), Lr.hideCategoryContainer(!1), Mt.showVendorService) Ar.showVSList();
            else {
                if (!t) {
                    var o = e.getAttribute("data-parent-id");
                    if (o) {
                        var n = eo.getGroupById(o);
                        if (n) {
                            var r = y(n.SubGroups, [n]).reduce(function(e, t) {
                                return -1 & lt;
                                Tt.indexOf(t.Type) & amp; & amp;
                                e.push(t.CustomGroupId), e
                            }, []);
                            Mt.filterByIABCategories = y(Mt.filterByIABCategories, r)
                        }
                    }
                }
                Lr.setVendorContent(), On.updateFilterSelection(!1)
            }
            return Mt.pcLayer = _.VendorList, e & amp; & amp;
            An.setPCFocus(An.getPCElements()), this.setSearchInputFocus(), !1
        }, Vr.prototype.loadCookieList = function(e) {
            Mt.filterByCategories = [], Lr.hideCategoryContainer(!0);
            var t = e & amp; & amp;
            e.getAttribute("data-parent-id");
            if (t) {
                var o = eo.getGroupById(t);
                Mt.filterByCategories.push(t), o.SubGroups.length & amp; & amp;
                o.SubGroups.forEach(function(e) {
                    if (-1 === Tt.indexOf(e.Type)) {
                        var t = e.CustomGroupId;
                        Mt.filterByCategories.indexOf(t) & lt;
                        0 & amp; & amp;
                        Mt.filterByCategories.push(t)
                    }
                })
            }
            return Hn.loadHostList("", Mt.filterByCategories), zt("#onetrust-pc-sdk #filter-count").text(Mt.filterByCategories.length.toString()), On.updateFilterSelection(!0), Mt.pcLayer = _.CookieList, An.setPCFocus(An.getPCElements()), this.setSearchInputFocus(), !1
        }, Vr.prototype.selectAllVendorsLegIntHandler = function(e) {
            var t = zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Leg_El).el[0],
                o = t.classList.contains("line-through"),
                n = zt(Xt.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-leg-checkbox-handler').el,
                r = e.target.checked,
                i = {};
            Mt.vendors.selectedLegIntVendors.map(function(e, t) {
                i[e.split(":")[0]] = t
            });
            for (var s = 0; s & lt; n.length; s++) {
                Gt.setCheckedAttribute(null, n[s], r), Rt.PCShowConsentLabels & amp; & amp;
                (n[s].parentElement.querySelector(".ot-label-status").innerHTML = r ? Rt.PCActiveText : Rt.PCInactiveText);
                var a = n[s].getAttribute("leg-vendorid"),
                    l = i[a];
                void 0 === l & amp; & amp;
                (l = a), Mt.vendors.selectedLegIntVendors[l] = a + ":" + r
            }
            o & amp; & amp;
            t.classList.remove("line-through"), Gt.setCheckedAttribute(null, e.target, r)
        }, Vr.prototype.selAllAdtlVenHandler = function(e) {
            for (var t = zt("#onetrust-pc-sdk #ot-selall-adtlvencntr").el[0], o = t.classList.contains("line-through"), n = zt("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el, r = e.target.checked, i = 0; i & lt; n.length; i++) Gt.setCheckedAttribute(null, n[i], r), Rt.PCShowConsentLabels & amp; & amp;
            (n[i].parentElement.querySelector(".ot-label-status").innerHTML = r ? Rt.PCActiveText : Rt.PCInactiveText);
            r ? Rt.UseGoogleVendors & amp; & amp;
            Object.keys(Mt.addtlVendorsList).forEach(function(e) {
                Mt.addtlVendors.vendorSelected[e] = !0
            }): Mt.addtlVendors.vendorSelected = {}, o & amp; & amp;
            t.classList.remove("line-through")
        }, Vr.prototype.selectAllGenVenHandler = function(e) {
            var t = e.target.checked;
            Lr.selectAllHandler({
                selAllEl: "#onetrust-pc-sdk #ot-selall-gnvencntr",
                vendorBoxes: "#onetrust-pc-sdk .ot-gnven-chkbox-handler"
            }, "genven", t)
        }, Vr.prototype.selectAllHandler = function(e, t, o) {
            for (var n = zt(e.selAllEl).el[0], r = n.classList.contains("line-through"), i = zt(e.vendorBoxes).el, s = 0; s & lt; i.length; s++) "genven" === t & amp; & amp;
            !o & amp; & amp;
            Mt.alwaysActiveGenVendors.includes(i[s].getAttribute("gn-vid")) ? (Gt.setDisabledAttribute(null, i[s], !0), Gt.setCheckedAttribute(null, i[s], !0)) : Gt.setCheckedAttribute(null, i[s], o), Rt.PCShowConsentLabels & amp; & amp;
            (i[s].parentElement.querySelector(".ot-label-status").innerHTML = o ? Rt.PCActiveText : Rt.PCInactiveText);
            o ? "googleven" === t & amp; & amp;
            Rt.UseGoogleVendors ? Object.keys(Mt.addtlVendorsList).forEach(function(e) {
                Mt.addtlVendors.vendorSelected[e] = !0
            }) : "genven" === t & amp; & amp;
            Mt.showGeneralVendors & amp; & amp;
            Rt.GeneralVendors.forEach(function(e) {
                Mt.genVendorsConsent[e.VendorCustomId] = !0
            }): "googleven" === t ? Mt.addtlVendors.vendorSelected = {} : (Mt.genVendorsConsent = {}, Mt.alwaysActiveGenVendors.forEach(function(e) {
                Mt.genVendorsConsent[e] = !0
            })), r & amp; & amp;
            n.classList.remove("line-through")
        }, Vr.prototype.SelectAllVendorConsentHandler = function(e) {
            var t = e.target.checked;
            if (Mt.showVendorService) Ar.toggleVendors(t);
            else {
                var o = zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Consent_El).el[0],
                    n = o.classList.contains("line-through"),
                    r = zt(Xt.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-checkbox-handler').el,
                    i = {};
                Mt.vendors.selectedVendors.map(function(e, t) {
                    i[e.split(":")[0]] = t
                });
                for (var s = 0; s & lt; r.length; s++) {
                    Gt.setCheckedAttribute(null, r[s], t), Rt.PCShowConsentLabels & amp; & amp;
                    (r[s].parentElement.querySelector(".ot-label-status").innerHTML = t ? Rt.PCActiveText : Rt.PCInactiveText);
                    var a = r[s].getAttribute("vendorid"),
                        l = i[a];
                    void 0 === l & amp; & amp;
                    (l = a), Mt.vendors.selectedVendors[l] = a + ":" + t
                }
                n & amp; & amp;
                o.classList.remove("line-through")
            }
            Gt.setCheckedAttribute(null, e.target, t)
        }, Vr.prototype.onVendorToggle = function(n, e) {
            var t = Mt.vendors,
                o = Mt.addtlVendors,
                r = e === D.LI ? t.selectedLegIntVendors : e === D.AddtlConsent ? [] : t.selectedVendors,
                i = !1,
                s = Number(n);
            r.some(function(e, t) {
                var o = e.split(":");
                if (o[0] === n) return s = t, i = "true" === o[1], !0
            }), e === D.LI ? (xo.triggerGoogleAnalyticsEvent(Ho, i ? ln : cn, t.list.find(function(e) {
                return e.vendorId === n
            }).vendorName + ": IABV2_" + n), t.selectedLegIntVendors[s] = n + ":" + !i, Ft.legIntSettings.PShowLegIntBtn || Hn.vendorLegIntToggleEvent()) : e === D.AddtlConsent ? (o.vendorSelected[n] ? delete o.vendorSelected[n] : o.vendorSelected[n] = !0, Hn.venAdtlSelAllTglEvent()) : (xo.triggerGoogleAnalyticsEvent(Ho, i ? an : sn, t.list.find(function(e) {
                return e.vendorId === n
            }).vendorName + ": IABV2_" + n), t.selectedVendors[s] = n + ":" + !i, Hn.vendorsListEvent())
        }, Vr.prototype.onVendorDisclosure = function(n) {
            return c(this, void 0, void 0, function() {
                var t, o;
                return C(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return (t = Mt.discVendors)[n].isFetched ? [3, 2] : (t[n].isFetched = !0, [4, gn.getStorageDisclosure(t[n].disclosureUrl)]);
                        case 1:
                            o = e.sent(), Hn.updateVendorDisclosure(n, o), e.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, Vr.prototype.tglFltrOptionHandler = function(e) {
            e & amp; & amp;
            e.target.classList.contains("category-filter-handler") & amp; & amp;
            Gt.setCheckedAttribute(null, e.target, e.target.checked)
        }, Vr.prototype.selectVendorsGroupHandler = function(e) {
            Lr.toggleAccordionStatus(e);
            var t = e.target.getAttribute("leg-vendorid"),
                o = e.target.getAttribute("vendorid"),
                n = e.target.getAttribute("addtl-vid"),
                r = e.target.getAttribute("disc-vid");
            t ? Lr.onVendorToggle(t, D.LI) : o ? Lr.onVendorToggle(o, D.Consent) : n & amp; & amp;
            Lr.onVendorToggle(n, D.AddtlConsent), r & amp; & amp;
            Lr.onVendorDisclosure(r), (t || o || n) & amp; & amp;
            (Gt.setCheckedAttribute(null, e.target, e.target.checked), Rt.PCShowConsentLabels & amp; & amp;
                (e.target.parentElement.querySelector(".ot-label-status").innerHTML = e.target.checked ? Rt.PCActiveText : Rt.PCInactiveText))
        }, Vr.prototype.toggleVendorFiltersHandler = function() {
            var e = !1,
                t = zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal).el[0];
            switch (Ft.pcName) {
                case lt:
                case st:
                case at:
                case dt:
                    if (e = "block" === t.style.display) Lr.closeFilter();
                    else {
                        var o = zt("#onetrust-pc-sdk " + Xt.P_Triangle).el[0];
                        zt(o).attr("style", "display: block;"), zt(t).attr("style", "display: block;");
                        var n = Array.prototype.slice.call(t.querySelectorAll("[href], input, button"));
                        An.setPCFocus(n)
                    }
                    break;
                case ct:
                    896 & lt;
                    window.innerWidth || 896 & lt;
                    window.screen.height ? Et(t, "width: 400px;", !0) : Et(t, "height: 100%; width: 100%;"), t.querySelector(".ot-checkbox input").focus();
                    break;
                default:
                    return
            }
            Bt.isV2Template & amp; & amp;
            !e & amp; & amp;
            (zt("#onetrust-pc-sdk").addClass("ot-shw-fltr"), zt("#onetrust-pc-sdk .ot-fltr-scrlcnt").el[0].scrollTop = 0)
        }, Vr.prototype.clearFiltersHandler = function() {
            Lr.setAriaLabelforButtonInFilter(Rt.PCenterFilterClearedAria);
            for (var e = zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal + " input").el, t = 0; t & lt; e.length; t++) Gt.setCheckedAttribute(null, e[t], !1);
            Lr.isCookieList ? Mt.filterByCategories = [] : Mt.filterByIABCategories = []
        }, Vr.prototype.cancelFilterHandler = function() {
            Mt.showVendorService ? Ar.cancelFilter() : Lr.isCookieList ? On.cancelHostFilter() : Hn.cancelVendorFilter(), Lr.closeFilter(), zt("#onetrust-pc-sdk #filter-btn-handler").focus()
        }, Vr.prototype.applyFilterHandler = function() {
            var e;
            Lr.setAriaLabelforButtonInFilter(Rt.PCenterFilterAppliedAria), Mt.showVendorService ? (e = Ar.getGroupsFilter(), Ar.filterVendorByGroup(e)) : Lr.isCookieList ? (e = On.updateHostFilterList(), Hn.loadHostList("", e)) : (e = Hn.updateVendorFilterList(), Hn.loadVendorList("", e)), zt("#onetrust-pc-sdk #filter-count").text(String(e.length)), Lr.closeFilter(), zt("#onetrust-pc-sdk #filter-btn-handler").focus()
        }, Vr.prototype.setAriaLabelforButtonInFilter = function(e) {
            var t = document.querySelector("#onetrust-pc-sdk span[aria-live]");
            t || ((t = document.createElement("span")).classList.add("ot-scrn-rdr"), t.setAttribute("aria-atomic", "true"), document.getElementById("onetrust-pc-sdk").appendChild(t)), t.setAttribute("aria-atomic", "true"), t.setAttribute("aria-relevant", "additions"), t.setAttribute("aria-live", "assertive"), t.setAttribute("aria-label", e), Lr.timeCallback & amp; & amp;
            clearTimeout(Lr.timeCallback), Lr.timeCallback = setTimeout(function() {
                Lr.timeCallback = null, t.setAttribute("aria-label", "")
            }, 900)
        }, Vr.prototype.setPcListContainerHeight = function() {
            zt("#onetrust-pc-sdk " + Xt.P_Content).el[0].classList.contains("ot-hide") ? Et(zt("#onetrust-pc-sdk").el[0], 'height: "";', !0) : setTimeout(function() {
                var e = window.innerHeight;
                768 & lt; = window.innerWidth & amp; & amp;
                600 & lt; = window.innerHeight & amp; & amp;
                (e = .8 * window.innerHeight), !zt("#onetrust-pc-sdk " + Xt.P_Content).el[0].scrollHeight || zt("#onetrust-pc-sdk " + Xt.P_Content).el[0].scrollHeight & gt; = e ? Et(zt("#onetrust-pc-sdk").el[0], "height: " + e + "px;", !0) : Et(zt("#onetrust-pc-sdk").el[0], "height: auto;", !0)
            })
        }, Vr.prototype.changeSelectedTab = function(e) {
            var t, o = zt("#onetrust-pc-sdk .category-menu-switch-handler"),
                n = 0,
                r = zt(o.el[0]);
            o.each(function(e, t) {
                zt(e).el.classList.contains(Xt.P_Active_Menu) & amp; & amp;
                (n = t, zt(e).el.classList.remove(Xt.P_Active_Menu), r = zt(e))
            }), e.keyCode === B.RightArrow ? t = n + 1 & gt; = o.el.length ? zt(o.el[0]) : zt(o.el[n + 1]): e.keyCode === B.LeftArrow & amp; & amp;
            (t = zt(n - 1 & lt; 0 ? o.el[o.el.length - 1] : o.el[n - 1])), this.tabMenuToggle(t, r)
        }, Vr.prototype.changeSelectedTabV2 = function(e) {
            var t, o = e.target.parentElement;
            e.keyCode === B.RightArrow ? t = o.nextElementSibling || o.parentElement.firstChild : e.keyCode === B.LeftArrow & amp; & amp;
            (t = o.previousElementSibling || o.parentElement.lastChild);
            var n = t.querySelector(".category-menu-switch-handler");
            n.focus(), this.groupTabClick(n)
        }, Vr.prototype.categoryMenuSwitchHandler = function() {
            for (var t = this, e = zt("#onetrust-pc-sdk .category-menu-switch-handler").el, o = 0; o & lt; e.length; o++) e[o].addEventListener("click", this.groupTabClick), e[o].addEventListener("keydown", function(e) {
                if (32 === e.keyCode || "space" === e.code) return t.groupTabClick(e.currentTarget), e.preventDefault(), !1
            })
        }, Vr.prototype.groupTabClick = function(e) {
            var t = zt("#onetrust-pc-sdk " + Xt.P_Grp_Container).el[0],
                o = t.querySelector("." + Xt.P_Active_Menu),
                n = e.currentTarget || e,
                r = n.getAttribute("aria-controls");
            o.setAttribute("tabindex", -1), o.setAttribute("aria-selected", !1), o.classList.remove(Xt.P_Active_Menu), t.querySelector(Xt.P_Desc_Container + ":not(.ot-hide)").classList.add("ot-hide"), t.querySelector("#" + r).classList.remove("ot-hide"), n.setAttribute("tabindex", 0), n.setAttribute("aria-selected", !0), n.classList.add(Xt.P_Active_Menu)
        }, Vr.prototype.tabMenuToggle = function(e, t) {
            e.el.setAttribute("tabindex", 0), e.el.setAttribute("aria-selected", !0), t.el.setAttribute("tabindex", -1), t.el.setAttribute("aria-selected", !1), e.focus(), t.el.parentElement.parentElement.querySelector("" + Xt.P_Desc_Container).classList.add("ot-hide"), e.el.parentElement.parentElement.querySelector("" + Xt.P_Desc_Container).classList.remove("ot-hide"), e.el.classList.add(Xt.P_Active_Menu)
        }, Vr.prototype.closeFilter = function(e) {
            if (void 0 === e & amp; & amp;
                (e = !0), !jn.checkIfPcSdkContainerExist()) {
                var t = zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal).el[0],
                    o = zt("#onetrust-pc-sdk " + Xt.P_Triangle).el[0];
                Ft.pcName === ct ? 896 & lt;
                window.innerWidth || 896 & lt;
                window.screen.height ? Et(t, "width: 0;", !0) : Et(t, "height: 0;"): Et(t, "display: none;"), o & amp; & amp;
                zt(o).attr("style", "display: none;"), Bt.isV2Template & amp; & amp;
                zt("#onetrust-pc-sdk").removeClass("ot-shw-fltr"), e & amp; & amp;
                An.setFirstAndLast(An.getPCElements())
            }
        }, Vr.prototype.setBackButtonFocus = function() {
            zt("#onetrust-pc-sdk .back-btn-handler").el[0].focus()
        }, Vr.prototype.setSearchInputFocus = function() {
            zt("#onetrust-pc-sdk #vendor-search-handler").el[0].focus()
        }, Vr.prototype.setCenterLayoutFooterHeight = function() {
            var e = Lr.pc;
            if (Lr.setMainContentHeight(), Ft.pcName === dt & amp; & amp; e) {
                var t = e.querySelectorAll("" + Xt.P_Desc_Container),
                    o = e.querySelectorAll("li .category-menu-switch-handler");
                if (!e.querySelector(".category-menu-switch-handler + " + Xt.P_Desc_Container) & amp; & amp; window.innerWidth & lt; 640)
                    for (var n = 0; n & lt; t.length; n++) o[n].insertAdjacentElement("afterend", t[n]);
                else e.querySelector(".category-menu-switch-handler + " + Xt.P_Desc_Container) & amp; & amp;
                640 & lt;
                window.innerWidth & amp; & amp;
                zt(e.querySelector(".ot-tab-desc")).append(t)
            }
        }, Vr.prototype.setMainContentHeight = function() {
            var e = this.pc,
                t = e.querySelector(".ot-pc-footer"),
                o = e.querySelector(".ot-pc-header"),
                n = e.querySelectorAll(".ot-pc-footer button"),
                r = n[n.length - 1],
                i = Rt.PCLayout;
            if (e.classList.remove("ot-ftr-stacked"), n[0] & amp; & amp; r & amp; & amp; 1 & lt; Math.abs(n[0].offsetTop - r.offsetTop) & amp; & amp; e.classList.add("ot-ftr-stacked"), !Rt.PCTemplateUpgrade & amp; & amp; !i.Center) {
                var s = e.clientHeight - t.clientHeight - o.clientHeight - 3;
                if (Rt.PCTemplateUpgrade & amp; & amp; !i.Tab & amp; & amp; Rt.PCenterVendorListDescText) {
                    var a = zt("#vdr-lst-dsc").el;
                    s = s - (a.length & amp; & amp; a[0].clientHeight) - 10
                }
                Et(e.querySelector("" + Xt.P_Vendor_List), "height: " + s + "px;", !0)
            }
            var l = e.querySelector("" + Xt.P_Content);
            if (Rt.PCTemplateUpgrade & amp; & amp; i.Center) {
                var c = 600 & lt;
                window.innerWidth & amp; & amp;
                475 & lt;
                window.innerHeight;
                if (!this.pcBodyHeight & amp; & amp; c & amp; & amp;
                    (this.pcBodyHeight = l.scrollHeight), c) {
                    var d = this.pcBodyHeight + t.clientHeight + o.clientHeight + 20;
                    d & gt;
                    .8 * window.innerHeight || 0 === this.pcBodyHeight ? Et(e, "height: " + .8 * window.innerHeight + "px;", !0) : Et(e, "height: " + d + "px;", !0)
                } else Et(e, "height: 100%;", !0)
            } else Et(e.querySelector("" + Xt.P_Content), "height: " + (e.clientHeight - t.clientHeight - o.clientHeight - 3) + "px;", !0)
        }, Vr.prototype.allowAllVisible = function(e) {
            e !== this.allowVisible & amp; & amp;
            Rt.PCLayout.Tab & amp; & amp;
            Rt.PCTemplateUpgrade & amp; & amp;
            (this.pc & amp; & amp; this.setMainContentHeight(), this.allowVisible = e)
        }, Vr.prototype.restorePc = function() {
            Mt.pcLayer === _.CookieList ? (Lr.hideCategoryContainer(!0), Hn.loadHostList("", Mt.filterByCategories), zt("#onetrust-pc-sdk #filter-count").text(Mt.filterByCategories.length.toString())) : Mt.pcLayer === _.VendorList & amp; & amp;
            (Lr.hideCategoryContainer(!1), Lr.setVendorContent()), Mt.isPCVisible = !1, Lr.toggleInfoDisplay(), Mt.pcLayer !== _.VendorList & amp; & amp;
            Mt.pcLayer !== _.CookieList || (On.updateFilterSelection(Mt.pcLayer === _.CookieList), Lr.setBackButtonFocus(), An.setPCFocus(An.getPCElements()))
        }, Vr.prototype.toggleInfoDisplay = function() {
            return c(this, void 0, void 0, function() {
                var t, o;
                return C(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return fn.csBtnGroup & amp; & amp;
                            (zt(Lr.fltgBtnSltr).addClass("ot-pc-open"), Lr.otGuardLogoPromise.then(function() {
                                Rt.cookiePersistentLogo.includes("ot_guard_logo.svg") & amp; & amp;
                                zt(Lr.fltgBtnFSltr).attr("aria-hidden", "true")
                            }), zt(Lr.fltgBtnBSltr).attr("aria-hidden", "")), [4, Lr.fetchAndSetupPC()];
                        case 1:
                            return e.sent(), Ft.pcName === at & amp; & amp;
                            this.setPcListContainerHeight(), void 0 !== Mt.pcLayer & amp; & amp;
                            Mt.pcLayer !== _.Banner || (Mt.pcLayer = _.PrefCenterHome), t = zt("#onetrust-pc-sdk").el[0], zt(".onetrust-pc-dark-filter").el[0].removeAttribute("style"), t.removeAttribute("style"), Mt.isPCVisible || (jn.showConsentNotice(), Mt.isPCVisible = !0, Rt.PCTemplateUpgrade & amp; & amp;
                                (this.pc = t, o = t.querySelector("#accept-recommended-btn-handler"), this.allowVisible = o & amp; & amp; 0 & lt; o.clientHeight, this.setCenterLayoutFooterHeight(), Lr.getResizeElement().addEventListener("resize", Lr.setCenterLayoutFooterHeight), window.addEventListener("resize", Lr.setCenterLayoutFooterHeight))), window.dispatchEvent(new CustomEvent("OneTrustPCLoaded", {
                                OneTrustPCLoaded: "yes"
                            })), Lr.captureInitialConsent(), [2]
                    }
                })
            })
        }, Vr.prototype.close = function(e) {
            Rt.BCloseButtonType === de.Link ? Mt.bannerCloseSource = f.ContinueWithoutAcceptingButton : Mt.bannerCloseSource = f.BannerCloseButton, Br.bannerCloseButtonHandler(e), Lr.getResizeElement().removeEventListener("resize", Lr.setCenterLayoutFooterHeight), window.removeEventListener("resize", Lr.setCenterLayoutFooterHeight)
        }, Vr.prototype.closePreferenceCenter = function(e) {
            e & amp; & amp;
            e.preventDefault(), window.location.href = "http://otsdk//consentChanged"
        }, Vr.prototype.initializeAlartHtmlAndHandler = function() {
            Mt.skipAddingHTML = 0 & lt;
            zt("#onetrust-banner-sdk").length, Mt.skipAddingHTML || br.insertAlertHtml(), this.initialiseAlertHandlers()
        }, Vr.prototype.initialiseAlertHandlers = function() {
            var e = this;
            br.showBanner(), Rt.ForceConsent & amp; & amp;
            !Kt.isCookiePolicyPage(Rt.AlertNoticeText) & amp; & amp;
            zt(".onetrust-pc-dark-filter").removeClass("ot-hide").css("z-index:2147483645;"), Rt.OnClickCloseBanner & amp; & amp;
            document.body.addEventListener("click", Br.bodyClickEvent), Rt.ScrollCloseBanner & amp; & amp;
            (window.addEventListener("scroll", Br.scrollCloseBanner), zt(document).on("click", ".onetrust-close-btn-handler", Br.rmScrollAndClickBodyEvents), zt(document).on("click", "#onetrust-accept-btn-handler", Br.rmScrollAndClickBodyEvents), zt(document).on("click", "#accept-recommended-btn-handler", Br.rmScrollAndClickBodyEvents)), (Rt.IsIabEnabled || Rt.UseGoogleVendors || Mt.showGeneralVendors) & amp; & amp;
            !Mt.showVendorService & amp; & amp;
            zt(document).on("click", ".onetrust-vendors-list-handler", Lr.showAllVendors), Rt.FloatingRoundedIcon & amp; & amp;
            zt("#onetrust-banner-sdk #onetrust-cookie-btn").on("click", function(e) {
                Mt.pcSource = e.currentTarget, Lr.showCookieSettingsHandler(e)
            }), zt("#onetrust-banner-sdk .onetrust-close-btn-handler, #onetrust-banner-sdk .ot-bnr-save-handler").on("click", Lr.bannerCloseButtonHandler), zt("#onetrust-banner-sdk #onetrust-pc-btn-handler").on("click", Lr.showCookieSettingsHandler), zt("#onetrust-banner-sdk #onetrust-accept-btn-handler").on("click", Br.allowAllEventHandler.bind(this, !1)), zt("#onetrust-banner-sdk #onetrust-reject-all-handler").on("click", Br.rejectAllEventHandler.bind(this, !1)), zt("#onetrust-banner-sdk .banner-option-input").on("click", Ft.bannerName === ot ? Lr.toggleBannerOptions : Lr.toggleAccordionStatus), zt("#onetrust-banner-sdk .ot-gv-list-handler").on("click", function(t) {
                return c(e, void 0, void 0, function() {
                    return C(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return Mt.cookieListType = X.GenVen, [4, Lr.fetchAndSetupPC()];
                            case 1:
                                return e.sent(), Lr.loadCookieList(t.target), Lr.showCookieSettingsHandler(t), [2]
                        }
                    })
                })
            }), zt("#onetrust-banner-sdk .category-switch-handler").on("click", Lr.toggleBannerCategory);
            var t = document.getElementById("onetrust-banner-sdk");
            Rt.ForceConsent & amp; & amp;
            t & amp; & amp;
            "none" !== window.getComputedStyle(t).display & amp; & amp;
            zt(document).on("keydown", Lr.shiftBannerFocus), zt("#onetrust-banner-sdk").on("keydown", function(e) {
                32 !== e.keyCode & amp; & amp;
                "Space" !== e.code & amp; & amp;
                13 !== e.keyCode & amp; & amp;
                "Enter" !== e.code || Kt.findUserType(e)
            })
        }, Vr.prototype.getResizeElement = function() {
            var e = document.querySelector("#onetrust-pc-sdk .ot-text-resize");
            return e ? e.contentWindow || e : document
        }, Vr.prototype.insertCookieSettingText = function(e) {
            var t, o;
            void 0 === e & amp; & amp;
            (e = !1);
            for (var n = Rt.CookieSettingButtonText, r = zt(".ot-sdk-show-settings").el, i = zt(".optanon-toggle-display").el, s = 0; s & lt; r.length; s++) zt(r[s]).text(n), zt(i[s]).text(n);
            e ? (null !== (t = document.querySelector(".ot-sdk-show-settings")) & amp; & amp; void 0 !== t & amp; & amp; t.addEventListener("click", this.cookiesSettingsBoundListener), null !== (o = document.querySelector(".optanon-toggle-display")) & amp; & amp; void 0 !== o & amp; & amp; o.addEventListener("click", this.cookiesSettingsBoundListener)) : Lr.initCookieSettingHandlers()
        }, Vr.prototype.genVendorToggled = function(e) {
            var t = e.target.getAttribute("gn-vid");
            vo.updateGenVendorStatus(t, e.target.checked);
            var o = Rt.GeneralVendors.find(function(e) {
                return e.VendorCustomId === t
            }).Name;
            xo.triggerGoogleAnalyticsEvent(Ho, e.target.checked ? Zo : en, o + ": VEN_" + t), Hn.genVenSelectAllTglEvent()
        }, Vr.prototype.genVendorDetails = function(e) {
            Lr.toggleAccordionStatus(e)
        }, Vr.prototype.confirmPC = function(e) {
            var t = to.isAlertBoxClosedAndValid();
            Rt.NoBanner & amp; & amp;
            Rt.ShowPreferenceCenterCloseButton & amp; & amp;
            !t & amp; & amp;
            Br.bannerCloseButtonHandler();
            var o = Kt.isBannerVisible();
            !Bt.moduleInitializer.MobileSDK || !t & amp; & amp;
            o || Lr.closePreferenceCenter(e)
        }, Vr.prototype.captureInitialConsent = function() {
            Mt.initialGroupsConsent = JSON.parse(JSON.stringify(Mt.groupsConsent)), Mt.initialHostConsent = JSON.parse(JSON.stringify(Mt.hostsConsent)), Mt.showGeneralVendors & amp; & amp;
            (Mt.initialGenVendorsConsent = JSON.parse(JSON.stringify(Mt.genVendorsConsent))), Rt.IsIabEnabled & amp; & amp;
            (Mt.initialOneTrustIABConsent = JSON.parse(JSON.stringify(Mt.oneTrustIABConsent)), Mt.initialVendors = JSON.parse(JSON.stringify(Mt.vendors)), Mt.initialVendors.vendorTemplate = Mt.vendors.vendorTemplate), Rt.UseGoogleVendors & amp; & amp;
            (Mt.initialAddtlVendorsList = JSON.parse(JSON.stringify(Mt.addtlVendorsList)), Mt.initialAddtlVendors = JSON.parse(JSON.stringify(Mt.addtlVendors))), Mt.vsIsActiveAndOptOut & amp; & amp;
            (Mt.initialVendorsServiceConsent = new Map(Mt.vsConsent))
        }, Vr);

        function Vr() {
            var t = this;
            this.fltgBtnSltr = "#ot-sdk-btn-floating", this.fltgBtnFrontBtn = ".ot-floating-button__front button", this.fltgBtnBackBtn = ".ot-floating-button__back button", this.fltgBtnFSltr = ".ot-floating-button__front svg", this.fltgBtnBSltr = ".ot-floating-button__back svg", this.pc = null, this.allowVisible = !1, this.pcLinkSource = null, this.isCookieList = !1, this.otGuardLogoResolve = null, this.otGuardLogoPromise = new Promise(function(e) {
                t.otGuardLogoResolve = e
            }), this.showCookieSettingsHandler = function(i) {
                return c(t, void 0, void 0, function() {
                    var t, o, n, r;
                    return C(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return i & amp; & amp;
                                i.stopPropagation(), i & amp; & amp;
                                i.target & amp; & amp;
                                (t = i.target.className, o = "onetrust-pc-btn-handler" === i.target.id, n = "ot-sdk-show-settings" === t, (o || n) & amp; & amp;
                                    (r = o ? jo : zo, xo.triggerGoogleAnalyticsEvent(Ho, r)), Mt.pcSource = i.target), [4, Lr.toggleInfoDisplay()];
                            case 1:
                                return e.sent(), [2, !1]
                        }
                    })
                })
            }, this.cookiesSettingsBoundListener = this.showCookieSettingsHandler.bind(this), this.backBtnHandler = function() {
                return Mt.showVendorService & amp; & amp;
                Ar.hideVendorList(), Br.hideVendorsList(), Ft.pcName === at & amp; & amp;
                (zt("#onetrust-pc-sdk " + Xt.P_Content).removeClass("ot-hide"), zt("#onetrust-pc-sdk").el[0].removeAttribute("style"), t.setPcListContainerHeight()), zt("#onetrust-pc-sdk #filter-count").text("0"), zt("#onetrust-pc-sdk #vendor-search-handler").length & amp; & amp;
                (zt("#onetrust-pc-sdk #vendor-search-handler").el[0].value = ""), Mt.currentGlobalFilteredList = [], Mt.filterByCategories = [], Mt.filterByIABCategories = [], Mt.vendors.searchParam = "", Lr.closeFilter(), Mt.pcLayer = _.PrefCenterHome, t.pcLinkSource ? (t.pcLinkSource.focus(), t.pcLinkSource = null) : An.setPCFocus(An.getPCElements()), !1
            }, this.bannerCloseBoundListener = this.bannerCloseButtonHandler.bind(this), this.toggleGroupORVendorHandler = function(e) {
                var t = e.currentTarget,
                    o = t.dataset.otVsId;
                o ? Lr.toggleVendorServiceHandler.bind(this)(e) : (o = t.dataset.optanongroupid) & amp; & amp;
                Lr.toggleV2Category.bind(this)()
            }, this.toggleVendorFromListHandler = function(e) {
                var t = e.currentTarget,
                    o = t.checked,
                    n = t.dataset.otVsId,
                    r = t.dataset.optanongroupid,
                    i = document.getElementById("ot-vendor-id-" + n);
                Cr.toggleVendorService(r, n, o, i)
            }, this.toggleVendorServiceHandler = function(e) {
                var t = e.currentTarget,
                    o = t.checked,
                    n = t.dataset.otVsId,
                    r = t.dataset.optanongroupid;
                Cr.toggleVendorService(r, n, o, t);
                var i = eo.getVSById(n);
                Lr.setAriaLabelforButtonInFilter(i.ServiceName)
            }, this.toggleV2Category = function(e, t, o, n) {
                if (!t) {
                    var r = this.getAttribute("data-optanongroupid"),
                        i = "function" == typeof this.getAttribute,
                        s = Gt.findIndex(Mt.dataGroupState, function(e) {
                            return i & amp; & amp;
                            e.CustomGroupId === r
                        });
                    t = Mt.dataGroupState[s]
                }
                var a;
                if (void 0 === o & amp; & amp;
                    (o = zt(this).is(":checked")), Rt.ChoicesBanner & amp; & amp; Gt.setCheckedAttribute("#ot-bnr-grp-id-" + t.CustomGroupId, null, o), n) document.querySelector("#ot-group-id-" + n) & amp; & amp;
                (Gt.setCheckedAttribute("#ot-group-id-" + n, null, o), a = document.querySelector("#ot-group-id-" + n));
                else {
                    a = this, Gt.setCheckedAttribute(null, this, o);
                    var l = a.parentElement.querySelector(".ot-switch-nob");
                    Bt.fp.CookieV2VendorServiceScript ? Rt.PCCategoryStyle === se.Toggle & amp; & amp;
                    l & amp; & amp;
                    l.setAttribute("aria-checked", o): Rt.PCTemplateUpgrade & amp; & amp;
                    l & amp; & amp;
                    l.setAttribute("aria-checked", o)
                }
                Rt.PCShowConsentLabels & amp; & amp;
                (a.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? Rt.PCActiveText : Rt.PCInactiveText);
                var c = this instanceof HTMLElement & amp; & amp; - 1 !== this.getAttribute("id").indexOf("-leg-out");
                Lr.setAriaLabelforButtonInFilter(t.GroupName), Lr.updateGroupToggles(t, o, c)
            }, this.toggleBannerCategory = function() {
                var t = this,
                    e = Gt.findIndex(Mt.dataGroupState, function(e) {
                        return "function" == typeof t.getAttribute & amp; & amp;
                        e.CustomGroupId === t.getAttribute("data-optanongroupid")
                    }),
                    o = Mt.dataGroupState[e],
                    n = zt(t).is(":checked");
                Lr.toggleV2Category(null, o, n, o.CustomGroupId)
            }, this.shiftBannerFocus = function(e) {
                "Tab" === e.code & amp; & amp;
                An.handleBannerFocus(e, e.shiftKey)
            }, this.toggleSubCategory = function(e, t, o, n) {
                t = t || this.getAttribute("data-optanongroupid");
                var r, i = eo.getGroupById(t);
                void 0 === o & amp; & amp;
                (o = zt(this).is(":checked")), n ? (Gt.setCheckedAttribute("#ot-sub-group-id-" + n, null, o), r = document.querySelector("#ot-sub-group-id-" + n)) : (r = this, Gt.setCheckedAttribute(null, this, o)), Rt.PCShowConsentLabels & amp; & amp;
                (r.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? Rt.PCActiveText : Rt.PCInactiveText);
                var s = this instanceof HTMLElement & amp; & amp; - 1 !== this.getAttribute("id").indexOf("-leg-out");
                Lr.setAriaLabelforButtonInFilter(i.GroupName), Lr.updateSubGroupToggles(i, o, s)
            }
        }
        var Br, Er = (wr.prototype.updateDataSubjectTimestamp = function() {
            var e = to.alertBoxCloseDate(),
                t = e & amp; & amp;
            Kt.getUTCFormattedDate(e);
            zt(".ot-userid-timestamp").html(Rt.PCenterUserIdTimestampTitleText + ": " + t)
        }, wr.prototype.closeBanner = function(e) {
            this.closeOptanonAlertBox(), e ? this.allowAll(!1) : this.close(!1)
        }, wr.prototype.allowAll = function(e, t) {
            void 0 === t & amp; & amp;
            (t = !1), Bt.moduleInitializer.MobileSDK ? window.OneTrust.AllowAll() : this.AllowAllV2(e, t)
        }, wr.prototype.bannerActionsHandler = function(t, n, e) {
            var r = this;
            void 0 === e & amp; & amp;
            (e = !1), Ao.setLandingPathParam(xe), Mt.groupsConsent = [], Mt.hostsConsent = [], Mt.genVendorsConsent = {};
            var i = {};
            Rt.Groups.forEach(function(e) {
                if (e.IsAboutGroup) return !1;
                y(e.SubGroups, [e]).forEach(function(e) {
                    var o = r.getGroupStatus(t, n, e);
                    r.setGroupConsent(o, e), e.Hosts.length & amp; & amp;
                    Kt.isOptOutEnabled() & amp; & amp;
                    e.Hosts.forEach(function(e) {
                        if (i[e.HostId]) bo.updateHostStatus(e, o);
                        else {
                            i[e.HostId] = !0;
                            var t = bo.isHostPartOfAlwaysActiveGroup(e.HostId) || o;
                            Mt.hostsConsent.push(e.HostId + ":" + (t ? "1" : "0"))
                        }
                    }), Mt.genVenOptOutEnabled & amp; & amp;
                    e.GeneralVendorsIds & amp; & amp;
                    e.GeneralVendorsIds.length & amp; & amp;
                    e.GeneralVendorsIds.forEach(function(e) {
                        vo.updateGenVendorStatus(e, o)
                    })
                })
            }), Rt.IsIabEnabled & amp; & amp;
            (t ? this.iab.allowAllhandler() : this.iab.rejectAllHandler(e)), jn.hideConsentNoticeV2(), uo.writeGrpParam(Oe.OPTANON_CONSENT), uo.writeHstParam(Oe.OPTANON_CONSENT), Mt.genVenOptOutEnabled & amp; & amp;
            uo.writeGenVenCookieParam(Oe.OPTANON_CONSENT), Mt.vsIsActiveAndOptOut & amp; & amp;
            uo.writeVSConsentCookieParam(Oe.OPTANON_CONSENT), On.substitutePlainTextScriptTags(), qn.updateGtmMacros(), this.executeOptanonWrapper()
        }, wr.prototype.getGroupStatus = function(e, t, o) {
            return !!e || !!t & amp; & amp;
            eo.isAlwaysActiveGroup(o)
        }, wr.prototype.setGroupConsent = function(e, t) {
            -1 & lt;
            It.indexOf(t.Type) & amp; & amp;
            Mt.groupsConsent.push(t.CustomGroupId + ":" + (e & amp; & amp; t.HasConsentOptOut ? "1" : "0"))
        }, wr.prototype.nextPageCloseBanner = function() {
            Ao.isLandingPage() || to.isAlertBoxClosedAndValid() || this.closeBanner(Rt.NextPageAcceptAllCookies)
        }, wr.prototype.rmScrollAndClickBodyEvents = function() {
            Rt.ScrollCloseBanner & amp; & amp;
            window.removeEventListener("scroll", this.scrollCloseBanner), Rt.OnClickCloseBanner & amp; & amp;
            document.body.removeEventListener("click", this.bodyClickEvent)
        }, wr.prototype.onClickCloseBanner = function(e) {
            to.isAlertBoxClosedAndValid() || (xo.triggerGoogleAnalyticsEvent(Ho, Fo), this.closeBanner(Rt.OnClickAcceptAllCookies), e.stopPropagation()), Br.rmScrollAndClickBodyEvents()
        }, wr.prototype.scrollCloseBanner = function() {
            var e = zt(document).height() - zt(window).height();
            0 === e & amp; & amp;
            (e = zt(window).height());
            var t = 100 * zt(window).scrollTop() / e;
            t & lt; = 0 & amp; & amp;
            (t = 100 * (document.scrollingElement & amp; & amp; document.scrollingElement.scrollTop || document.documentElement & amp; & amp; document.documentElement.scrollTop || document.body & amp; & amp; document.body.scrollTop) / (document.scrollingElement & amp; & amp; document.scrollingElement.scrollHeight || document.documentElement & amp; & amp; document.documentElement.scrollHeight || document.body & amp; & amp; document.body.scrollHeight)), 25 & lt;
            t & amp; & amp;
            !to.isAlertBoxClosedAndValid() & amp; & amp;
            (!Mt.isPCVisible || Rt.NoBanner) ? (xo.triggerGoogleAnalyticsEvent(Ho, Fo), Br.closeBanner(Rt.ScrollAcceptAllCookies), Br.rmScrollAndClickBodyEvents()) : to.isAlertBoxClosedAndValid() & amp; & amp;
            Br.rmScrollAndClickBodyEvents()
        }, wr.prototype.AllowAllV2 = function(e, t) {
            void 0 === t & amp; & amp;
            (t = !1);
            for (var o = this.groupsClass.getAllGroupElements(), n = 0; n & lt; o.length; n++) {
                var r = eo.getGroupById(o[n].getAttribute("data-optanongroupid"));
                this.groupsClass.toggleGrpElements(o[n], r, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !1, !0), this.groupsClass.toogleSubGroupElement(o[n], !0, !0, !0)
            }
            Mt.showVendorService & amp; & amp;
            Cr.consentAll(!0), this.bannerActionsHandler(!0, !1), this.consentTransactions(e, !0, t), Rt.IsIabEnabled & amp; & amp;
            (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!0), this.updateVendorLegBtns(!0))
        }, wr.prototype.rejectAll = function(e, t) {
            void 0 === t & amp; & amp;
            (t = !1);
            var o, n, r = t ? U[5] : U[2],
                i = this.groupsClass.getAllGroupElements();
            n = Bt.fp.CookieV2RejectAll ? (o = !t & amp; & amp; Rt.BannerShowRejectAllButton & amp; & amp; Rt.BRejectConsentType === Pe.OBJECT_TO_LI || t & amp; & amp; Rt.PCenterShowRejectAllButton & amp; & amp; Rt.BRejectConsentType === Pe.OBJECT_TO_LI, Rt.IsIabEnabled & amp; & amp;
                (!t & amp; & amp; Rt.BannerShowRejectAllButton & amp; & amp; Rt.BRejectConsentType === Pe.LI_ACTIVE_IF_LEGAL_BASIS || t & amp; & amp; Rt.PCenterShowRejectAllButton & amp; & amp; Rt.BRejectConsentType === Pe.LI_ACTIVE_IF_LEGAL_BASIS)) : !(o = !0);
            for (var s = 0; s & lt; i.length; s++) {
                var a = eo.getGroupById(i[s].getAttribute("data-optanongroupid"));
                "always active" !== eo.getGrpStatus(a).toLowerCase() & amp; & amp;
                (Ln.toggleGrpElements(i[s], a, !1, n), this.groupsClass.toogleSubGroupElement(i[s], !1, !1, !0), (!Rt.IsIabEnabled || Rt.IsIabEnabled & amp; & amp; o) & amp; & amp; this.groupsClass.toogleSubGroupElement(i[s], !1, !0, !0))
            }
            Mt.showVendorService & amp; & amp;
            Cr.consentAll(!1), this.bannerActionsHandler(!1, !0, n), r !== Mt.consentInteractionType & amp; & amp;
            this.consentTransactions(e, !1, t), Rt.IsIabEnabled & amp; & amp;
            (this.iab.updateIabVariableReference(), this.iab.updateVendorsDOMToggleStatus(!1, n), n || this.updateVendorLegBtns(!1))
        }, wr.prototype.executeCustomScript = function() {
            Rt.CustomJs & amp; & amp;
            new Function(Rt.CustomJs)()
        }, wr.prototype.updateConsentData = function(e) {
            Ao.setLandingPathParam(xe), Rt.IsIabEnabled & amp; & amp;
            !e & amp; & amp;
            this.iab.saveVendorStatus(), uo.writeGrpParam(Oe.OPTANON_CONSENT), uo.writeHstParam(Oe.OPTANON_CONSENT), Mt.showGeneralVendors & amp; & amp;
            Rt.GenVenOptOut & amp; & amp;
            uo.writeGenVenCookieParam(Oe.OPTANON_CONSENT), Mt.vsIsActiveAndOptOut & amp; & amp;
            uo.writeVSConsentCookieParam(Oe.OPTANON_CONSENT), On.substitutePlainTextScriptTags(), qn.updateGtmMacros()
        }, wr.prototype.close = function(e, t) {
            if (void 0 === t & amp; & amp;
                (t = m.Banner), jn.hideConsentNoticeV2(), this.updateConsentData(e), Rt.IsConsentLoggingEnabled) {
                var o = t === m.PC ? Qn : t === m.Banner ? Jn : Ft.apiSource,
                    n = t === m.PC ? Kn : t === m.Banner ? zn : Wn;
                Mt.bannerCloseSource === f.ContinueWithoutAcceptingButton & amp; & amp;
                (o = Zn), Mt.bannerCloseSource === f.BannerSaveSettings & amp; & amp;
                (o = $n), ro.createConsentTxn(!1, n + " - " + o, t === m.PC)
            } else to.dispatchConsentEvent();
            this.executeOptanonWrapper()
        }, wr.prototype.executeOptanonWrapper = function() {
            try {
                if (this.executeCustomScript(), "function" == typeof window.OptanonWrapper & amp; & amp;
                    "undefined" !== window.OptanonWrapper) {
                    window.OptanonWrapper();
                    for (var e = 0, t = Mt.srcExecGrpsTemp; e & lt; t.length; e++) {
                        var o = t[e]; - 1 === Mt.srcExecGrps.indexOf(o) & amp; & amp;
                        Mt.srcExecGrps.push(o)
                    }
                    Mt.srcExecGrpsTemp = [];
                    for (var n = 0, r = Mt.htmlExecGrpsTemp; n & lt; r.length; n++) o = r[n], -1 === Mt.htmlExecGrps.indexOf(o) & amp; & amp;
                    Mt.htmlExecGrps.push(o);
                    Mt.htmlExecGrpsTemp = []
                }
            } catch (e) {
                console.warn("Error in Optanon wrapper, please review your code. " + e)
            }
        }, wr.prototype.updateVendorLegBtns = function(e) {
            if (Ft.legIntSettings.PAllowLI & amp; & amp; Ft.legIntSettings.PShowLegIntBtn)
                for (var t = zt(Xt.P_Vendor_Container + " .ot-leg-btn-container").el, o = 0; o & lt; t.length; o++) this.groupsClass.updateLegIntBtnElement(t[o], e)
        }, wr.prototype.showFltgCkStgButton = function() {
            var e = zt("#ot-sdk-btn-floating");
            e.removeClass("ot-hide"), e.removeClass("ot-pc-open"), Rt.cookiePersistentLogo.includes("ot_guard_logo.svg") & amp; & amp;
            zt(".ot-floating-button__front svg").attr("aria-hidden", ""), zt(".ot-floating-button__back svg").attr("aria-hidden", "true")
        }, wr.prototype.consentTransactions = function(e, t, o) {
            void 0 === o & amp; & amp;
            (o = !1), ro & amp; & amp;
            !e & amp; & amp;
            Rt.IsConsentLoggingEnabled ? ro.createConsentTxn(!1, (o ? Kn : zn) + " - " + (t ? Yn : Xn), o) : to.dispatchConsentEvent()
        }, wr.prototype.hideVendorsList = function() {
            jn.checkIfPcSdkContainerExist() || (Rt.PCTemplateUpgrade ? zt("#onetrust-pc-sdk " + Xt.P_Content).removeClass("ot-hide") : zt("#onetrust-pc-sdk .ot-main-content").show(), zt("#onetrust-pc-sdk #close-pc-btn-handler.main").show(), zt("#onetrust-pc-sdk " + Xt.P_Vendor_List).addClass("ot-hide"))
        }, wr.prototype.resetConsent = function() {
            var e = this;
            Mt.groupsConsent = JSON.parse(JSON.stringify(Mt.initialGroupsConsent)), Mt.hostsConsent = JSON.parse(JSON.stringify(Mt.initialHostConsent)), Mt.showGeneralVendors & amp; & amp;
            (Mt.genVendorsConsent = JSON.parse(JSON.stringify(Mt.initialGenVendorsConsent))), Mt.vsIsActiveAndOptOut & amp; & amp;
            (Mt.vsConsent = new Map(Mt.initialVendorsServiceConsent)), Rt.IsIabEnabled & amp; & amp;
            (Mt.oneTrustIABConsent = JSON.parse(JSON.stringify(Mt.initialOneTrustIABConsent)), Mt.vendors = JSON.parse(JSON.stringify(Mt.initialVendors)), Mt.vendors.vendorTemplate = Mt.initialVendors.vendorTemplate), Rt.UseGoogleVendors & amp; & amp;
            (Mt.addtlVendors = JSON.parse(JSON.stringify(Mt.initialAddtlVendors)), Mt.addtlVendorsList = JSON.parse(JSON.stringify(Mt.initialAddtlVendorsList))), this.updateConsentData(!1), setTimeout(function() {
                e.resetConsentUI()
            }, 400)
        }, wr.prototype.resetConsentUI = function() {
            Ln.getAllGroupElements().forEach(function(e) {
                var t = e.getAttribute("data-optanongroupid"),
                    o = eo.getGroupById(t),
                    n = Br.isGroupActive(o, t);
                Ft.pcName === dt & amp; & amp;
                Rt.PCTemplateUpgrade & amp; & amp;
                (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
                var r = e.querySelector(".ot-label-status");
                if (Rt.PCShowConsentLabels & amp; & amp; r & amp; & amp;
                    (r.innerHTML = n ? Rt.PCActiveText : Rt.PCInactiveText), o.Type === vt || o.Type === At) {
                    var i = Kt.isBundleOrStackActive(o, Mt.initialGroupsConsent),
                        s = e.querySelector('input[class*="category-switch-handler"]');
                    Gt.setCheckedAttribute(null, s, i);
                    for (var a = e.querySelectorAll("li" + Xt.P_Subgrp_li), l = 0; l & lt; a.length; l++) {
                        var c = eo.getGroupById(a[l].getAttribute("data-optanongroupid")),
                            d = c.OptanonGroupId,
                            u = Br.isGroupActive(c, d),
                            p = a[l].querySelector('input[class*="cookie-subgroup-handler"]'),
                            h = a[l].querySelector(".ot-label-status");
                        Rt.PCShowConsentLabels & amp; & amp;
                        h & amp; & amp;
                        (r.innerHTML = u ? Rt.PCActiveText : Rt.PCInactiveText), Gt.setCheckedAttribute(null, p, u), Br.resetLegIntButton(c, a[l])
                    }
                } else s = e.querySelector('input[class*="category-switch-handler"]'), Gt.setCheckedAttribute(null, s, n), Br.resetLegIntButton(o, e)
            }), Rt.IsIabEnabled & amp; & amp;
            ir.toggleVendorConsent();
            var e = zt("#onetrust-pc-sdk .ot-gnven-chkbox-handler").el;
            if (Mt.showGeneralVendors & amp; & amp; e & amp; & amp; e.length) {
                for (var t = 0, o = e; t & lt; o.length; t++) {
                    var n = (l = o[t]).getAttribute("gn-vid"),
                        r = Boolean(Mt.genVendorsConsent[n]);
                    Gt.setCheckedAttribute("", l, r), vo.updateGenVendorStatus(n, r)
                }
                Hn.genVenSelectAllTglEvent()
            }
            var i = zt("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el;
            if (Rt.UseGoogleVendors & amp; & amp; i & amp; & amp; i.length)
                for (var s = 0, a = i; s & lt; a.length; s++) {
                    var l;
                    n = (l = a[s]).getAttribute("addtl-vid"), Mt.addtlVendorsList[n] & amp; & amp;
                    (r = Boolean(Mt.addtlVendors.vendorSelected[n]), Gt.setCheckedAttribute("", l, r))
                }
            Mt.vsIsActiveAndOptOut & amp; & amp;
            Cr.resetVendorUIState(Mt.vsConsent)
        }, wr.prototype.isGroupActive = function(e, t) {
            var o;
            if (e.IabGrpId) {
                var n = void 0;
                n = e.Type === Pt ? Mt.initialVendors.selectedSpecialFeatures : e.IsLegIntToggle ? Mt.initialVendors.selectedLegInt : Mt.initialVendors.selectedPurpose, o = -1 !== Ut.inArray(e.IabGrpId + ":true", n)
            } else o = -1 !== Ut.inArray(t + ":1", Mt.initialGroupsConsent);
            return o
        }, wr.prototype.resetLegIntButton = function(e, t) {
            if (Ft.legIntSettings.PAllowLI & amp; & amp; e.Type === bt & amp; & amp; e.HasLegIntOptOut & amp; & amp; Ft.legIntSettings.PShowLegIntBtn) {
                var o = !0; - 1 & lt;
                Mt.vendors.selectedLegInt.indexOf(e.IabGrpId + ":false") & amp; & amp;
                (o = !1), Ln.updateLegIntBtnElement(t, o)
            }
        }, wr.prototype.handleTogglesOnSingularConsentUpdate = function(e, t, o) {
            if (this.closeOptanonAlertBox(), e === gt)
                for (var n = eo.getGroupById(t), r = this.groupsClass.getAllGroupElements(), i = 0; i & lt; r.length; i++) {
                    var s = eo.getGroupById(r[i].getAttribute("data-optanongroupid"));
                    if (s.OptanonGroupId === n.OptanonGroupId & amp; & amp; !s.Parent) {
                        Lr.toggleV2Category(null, s, o, s.CustomGroupId);
                        break
                    }
                    var a = s.SubGroups.find(function(e) {
                        return e.OptanonGroupId === n.OptanonGroupId
                    });
                    a & amp; & amp;
                    Lr.toggleSubCategory(null, a.CustomGroupId, o, a.CustomGroupId)
                } else if (e === ft) {
                    var l = eo.getGrpByVendorId(t);
                    l & amp; & amp;
                    Cr.toggleVendorService(l.CustomGroupId, t, o)
                } this.close(!1, m.API)
        }, wr);

        function wr() {
            var o = this;
            this.iab = Hn, this.groupsClass = Ln, this.closeOptanonAlertBox = function() {
                if (Kt.hideBanner(), Rt.NtfyConfig.ShowNtfy & amp; & amp; or.hideSyncNtfy(), Ft.isOptInMode || !Ft.isOptInMode & amp; & amp; !to.isAlertBoxClosedAndValid()) xo.setAlertBoxClosed(!0), Rt.PCTemplateUpgrade & amp; & amp;
                Rt.PCenterUserIdTitleText & amp; & amp;
                Rt.IsConsentLoggingEnabled & amp; & amp;
                o.updateDataSubjectTimestamp();
                else if (to.isAlertBoxClosedAndValid()) {
                    var e = zt(".onetrust-pc-dark-filter").el[0];
                    e & amp; & amp;
                    "none" !== getComputedStyle(e).getPropertyValue("display") & amp; & amp;
                    zt(".onetrust-pc-dark-filter").fadeOut(400)
                }
                fn.csBtnGroup & amp; & amp;
                o.showFltgCkStgButton()
            }, this.bodyClickEvent = function(e) {
                var t = e.target;
                t.closest("#onetrust-banner-sdk") || t.closest("#onetrust-pc-sdk") || t.closest(".onetrust-pc-dark-filter") || t.closest(".ot-sdk-show-settings") || t.closest(".optanon-show-settings") || t.closest(".optanon-toggle-display") || Br.onClickCloseBanner(e)
            }, this.bannerCloseButtonHandler = function(e) {
                if (void 0 === e & amp; & amp;
                    (e = !1), Br.closeOptanonAlertBox(), Bt.moduleInitializer.MobileSDK) window.OneTrust.Close();
                else {
                    var t = Mt.bannerCloseSource === f.ConfirmChoiceButton ? m.PC : m.Banner;
                    Br.close(e, t)
                }
                return !1
            }, this.allowAllEventHandler = function(e) {
                void 0 === e & amp; & amp;
                (e = !1), zt(document).off("keydown", Lr.shiftBannerFocus);
                var t = e ? "Preferences Allow All" : "Banner Accept Cookies";
                xo.triggerGoogleAnalyticsEvent(Ho, t), o.allowAllEvent(!1, e), o.hideVendorsList()
            }, this.allowAllEvent = function(e, t) {
                void 0 === e & amp; & amp;
                (e = !1), void 0 === t & amp; & amp;
                (t = !1), o.closeOptanonAlertBox(), Br.allowAll(e, t)
            }, this.rejectAllEventHandler = function(e) {
                void 0 === e & amp; & amp;
                (e = !1), zt(document).off("keydown", Lr.shiftBannerFocus);
                var t = e ? "Preferences Reject All" : "Banner Reject All";
                xo.triggerGoogleAnalyticsEvent(Ho, t), Bt.moduleInitializer.MobileSDK ? window.OneTrust.RejectAll() : (o.rejectAllEvent(!1, e), o.hideVendorsList())
            }, this.rejectAllEvent = function(e, t) {
                void 0 === e & amp; & amp;
                (e = !1), void 0 === t & amp; & amp;
                (t = !1), o.closeOptanonAlertBox(), to.isIABCrossConsentEnabled() ? Ft.thirdPartyiFrameLoaded ? o.rejectAll(e, t) : Ft.thirdPartyiFramePromise.then(function() {
                    o.rejectAll(e, t)
                }) : o.rejectAll(e, t)
            }
        }
        var xr, Gr = (Or.prototype.initBanner = function() {
            this.canImpliedConsentLandingPage(), Bt.moduleInitializer.CookieSPAEnabled ? zt(window).on("otloadbanner", this.windowLoadBanner.bind(this)) : zt(window).one("otloadbanner", this.windowLoadBanner.bind(this))
        }, Or.prototype.insertCSBtnHtmlAndCss = function(e) {
            document.getElementById("onetrust-style").innerHTML += fn.csBtnGroup.css;
            var t = document.createElement("div");
            zt(t).html(fn.csBtnGroup.html);
            var o = t.querySelector("#ot-sdk-btn-floating");
            e & amp; & amp;
            o & amp; & amp;
            zt(o).removeClass("ot-hide"), zt("#onetrust-consent-sdk").append(o), Rt.cookiePersistentLogo & amp; & amp;
            (Rt.cookiePersistentLogo.includes("ot_guard_logo.svg") ? this.applyPersistentSvgOnDOM() : zt(".ot-floating-button__front, .ot-floating-button__back").addClass("custom-persistent-icon"))
        }, Or.prototype.applyPersistentSvgOnDOM = function() {
            return c(this, void 0, void 0, function() {
                var t;
                return C(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, gn.getPersistentCookieSvg()];
                        case 1:
                            return t = e.sent(), zt(this.FLOATING_COOKIE_FRONT_BTN).html(t), Lr.otGuardLogoResolve(!0), [2]
                    }
                })
            })
        }, Or.prototype.canImpliedConsentLandingPage = function() {
            this.isImpliedConsent() & amp; & amp;
            !Ao.isLandingPage() & amp; & amp;
            "true" === xt.readCookieParam(Oe.OPTANON_CONSENT, _e) & amp; & amp;
            this.checkForRefreshCloseImplied()
        }, Or.prototype.isImpliedConsent = function() {
            return Rt.ConsentModel & amp; & amp;
            "implied consent" === Rt.ConsentModel.Name.toLowerCase()
        }, Or.prototype.checkForRefreshCloseImplied = function() {
            Br.closeOptanonAlertBox(), Br.close(!0)
        }, Or.prototype.hideCustomHtml = function() {
            var e = document.getElementById("onetrust-banner-sdk");
            e & amp; & amp;
            Et(e, "display: none;")
        }, Or.prototype.windowLoadBanner = function() {
            return c(this, void 0, void 0, function() {
                var t, o, n, r, i, s, a, l, c, d;
                return C(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return this.core.substitutePlainTextScriptTags(), t = Bt.moduleInitializer, zt("#onetrust-consent-sdk").length ? n = document.getElementById("onetrust-consent-sdk") : (n = document.createElement("div"), zt(n).attr("id", "onetrust-consent-sdk"), zt(document.body).append(n)), zt(".onetrust-pc-dark-filter").length || (o = document.createElement("div"), zt(o).attr("class", "onetrust-pc-dark-filter"), zt(o).attr("class", "ot-hide"), zt(o).attr("class", "ot-fade-in"), n.firstChild ? n.insertBefore(o, n.firstChild) : zt(n).append(o)), Rt.IsIabEnabled & amp; & amp;
                            this.iab.updateIabVariableReference(), r = to.isAlertBoxClosedAndValid(), i = Rt.ShowAlertNotice & amp; & amp;
                            !r & amp; & amp;
                            !Rt.NoBanner & amp; & amp;
                            !Mt.hideBanner, s = Rt.ShowAlertNotice & amp; & amp;
                            !r & amp; & amp;
                            Rt.NoBanner, Mt.ntfyRequired ? (this.hideCustomHtml(), or.init(), or.changeState()) : i ? Lr.initializeAlartHtmlAndHandler() : this.hideCustomHtml(), t.IsSuppressPC || (vr.insertPcHtml(), Lr.initialiseConsentNoticeHandlers(), Rt.IsIabEnabled & amp; & amp; this.iab.InitializeVendorList()), t.RemoteActionsEnabled & amp; & amp;
                            ((a = document.getElementById("hbbtv")) & amp; & amp; a.remove(), (l = document.createElement("script")).id = "hbbtv", l.src = Mt.storageBaseURL + "/scripttemplates/" + Bt.moduleInitializer.Version + "/hbbtv.js", l.type = "text/javascript", zt(document.body).append(l)), this.insertCSBtn(!i), s ? [4, Lr.toggleInfoDisplay()] : [3, 2];
                        case 1:
                            e.sent(), e.label = 2;
                        case 2:
                            return Lr.insertCookieSettingText(), c = zt(this.FLOATING_COOKIE_BTN), d = zt(this.FLOATING_COOKIE_FRONT_BTN), c.length & amp; & amp;
                            (c.attr("title", Rt.CookieSettingButtonText), d.el[0].setAttribute("aria-label", Rt.AriaOpenPreferences)), Bn.insertCookiePolicyHtml(), Br.executeOptanonWrapper(), xt.readCookieParam(Oe.OPTANON_CONSENT, po) || uo.writeGrpParam(Oe.OPTANON_CONSENT), xt.readCookieParam(Oe.OPTANON_CONSENT, ho) || uo.writeHstParam(Oe.OPTANON_CONSENT), Mt.showGeneralVendors & amp; & amp;
                            !xt.readCookieParam(Oe.OPTANON_CONSENT, go) & amp; & amp;
                            uo.writeGenVenCookieParam(Oe.OPTANON_CONSENT), Mt.vsIsActiveAndOptOut & amp; & amp;
                            !xt.readCookieParam(Oe.OPTANON_CONSENT, Co) & amp; & amp;
                            uo.writeVSConsentCookieParam(Oe.OPTANON_CONSENT), i & amp; & amp;
                            An.setBannerFocus(), [2]
                    }
                })
            })
        }, Or.prototype.insertCSBtn = function(e) {
            fn.csBtnGroup & amp; & amp;
            (this.insertCSBtnHtmlAndCss(e), Lr.initFlgtCkStgBtnEventHandlers())
        }, Or);

        function Or() {
            this.iab = Hn, this.core = On, this.FLOATING_COOKIE_BTN = "#ot-sdk-btn-floating", this.FLOATING_COOKIE_FRONT_BTN = "#ot-sdk-btn-floating .ot-floating-button__front .ot-floating-button__open"
        }
        var Nr, Dr = (Hr.prototype.initialiseLandingPath = function() {
            var e = to.needReconsent();
            if (Ao.isLandingPage()) Ao.setLandingPathParam(location.href);
            else {
                if (e & amp; & amp; !to.awaitingReconsent()) return Ao.setLandingPathParam(location.href), void xt.writeCookieParam(Oe.OPTANON_CONSENT, _e, !0);
                e || xt.writeCookieParam(Oe.OPTANON_CONSENT, _e, !1), Ao.setLandingPathParam(xe), Ft.isSoftOptInMode & amp; & amp;
                !Bt.moduleInitializer.MobileSDK & amp; & amp;
                xo.setAlertBoxClosed(!0), Rt.NextPageCloseBanner & amp; & amp;
                Rt.ShowAlertNotice & amp; & amp;
                Br.nextPageCloseBanner()
            }
        }, Hr);

        function Hr() {}
        var Fr, Rr = (qr.prototype.IsAlertBoxClosedAndValid = function() {
            return to.isAlertBoxClosedAndValid()
        }, qr.prototype.LoadBanner = function() {
            xo.loadBanner()
        }, qr.prototype.Init = function(e) {
            void 0 === e & amp; & amp;
            (e = !1), Le.insertViewPortTag(), fn.ensureHtmlGroupDataInitialised(), qn.updateGtmMacros(!1), Nr.initialiseLandingPath(), e || ur.initialiseCssReferences()
        }, qr.prototype.FetchAndDownloadPC = function() {
            Lr.fetchAndSetupPC()
        }, qr.prototype.ToggleInfoDisplay = function() {
            xo.triggerGoogleAnalyticsEvent(Ho, Ko), Lr.toggleInfoDisplay()
        }, qr.prototype.Close = function(e) {
            Lr.close(e)
        }, qr.prototype.AllowAll = function(e) {
            Br.allowAllEvent(e)
        }, qr.prototype.RejectAll = function(e) {
            Br.rejectAllEvent(e)
        }, qr.prototype.setDataSubjectIdV2 = function(e, t) {
            void 0 === t & amp; & amp;
            (t = !1), e & amp; & amp;
            e.trim() & amp; & amp;
            (e = e.replace(/ /g, ""), xt.writeCookieParam(Oe.OPTANON_CONSENT, Ve, e, !0), Mt.dsParams.isAnonymous = t)
        }, qr.prototype.getDataSubjectId = function() {
            return xt.readCookieParam(Oe.OPTANON_CONSENT, Ve, !0)
        }, qr.prototype.synchroniseCookieWithPayload = function(i) {
            var e = xt.readCookieParam(Oe.OPTANON_CONSENT, "groups"),
                t = Gt.strToArr(e),
                s = [];
            t.forEach(function(e) {
                var t = e.split(":"),
                    o = eo.getGroupById(t[0]),
                    n = Gt.findIndex(i, function(e) {
                        return e.Id === o.PurposeId
                    }),
                    r = i[n];
                r ? r.TransactionType === Ne ? (s.push(t[0] + ":1"), o.Parent ? Lr.toggleSubCategory(null, o.CustomGroupId, !0, o.CustomGroupId) : Lr.toggleV2Category(null, o, !0, o.CustomGroupId)) : (s.push(t[0] + ":0"), o.Parent ? Lr.toggleSubCategory(null, o.CustomGroupId, !1, o.CustomGroupId) : Lr.toggleV2Category(null, o, !1, o.CustomGroupId)) : s.push(t[0] + ":" + t[1])
            }), uo.writeGrpParam(Oe.OPTANON_CONSENT, s)
        }, qr.prototype.getGeolocationData = function() {
            return Mt.userLocation
        }, qr.prototype.TriggerGoogleAnalyticsEvent = function(e, t, o, n) {
            xo.triggerGoogleAnalyticsEvent(e, t, o, n)
        }, qr.prototype.ReconsentGroups = function() {
            var r = !1,
                e = xt.readCookieParam(Oe.OPTANON_CONSENT, "groups"),
                i = Gt.strToArr(e),
                s = Gt.strToArr(e.replace(/:0|:1/g, "")),
                a = !1,
                t = xt.readCookieParam(Oe.OPTANON_CONSENT, "hosts"),
                l = Gt.strToArr(t),
                c = Gt.strToArr(t.replace(/:0|:1/g, "")),
                d = ["inactive", "inactive landingpage", "do not track"];
            e & amp; & amp;
            (Rt.Groups.forEach(function(e) {
                y(e.SubGroups, [e]).forEach(function(e) {
                    var t = e.CustomGroupId,
                        o = Gt.indexOf(s, t);
                    if (-1 !== o) {
                        var n = eo.getGrpStatus(e).toLowerCase(); - 1 & lt;
                        d.indexOf(n) & amp; & amp;
                        (r = !0, i[o] = t + ("inactive landingpage" === n ? ":1" : ":0"))
                    }
                })
            }), r & amp; & amp; uo.writeGrpParam(Oe.OPTANON_CONSENT, i)), t & amp; & amp;
            (Rt.Groups.forEach(function(e) {
                y(e.SubGroups, [e]).forEach(function(n) {
                    n.Hosts.forEach(function(e) {
                        var t = Gt.indexOf(c, e.HostId);
                        if (-1 !== t) {
                            var o = eo.getGrpStatus(n).toLowerCase(); - 1 & lt;
                            d.indexOf(o) & amp; & amp;
                            (a = !0, l[t] = e.HostId + ("inactive landingpage" === o ? ":1" : ":0"))
                        }
                    })
                })
            }), a & amp; & amp; uo.writeHstParam(Oe.OPTANON_CONSENT, l))
        }, qr.prototype.SetAlertBoxClosed = function(e) {
            xo.setAlertBoxClosed(e)
        }, qr.prototype.GetDomainData = function() {
            return Ft.pubDomainData
        }, qr.prototype.setGeoLocation = function(e, t) {
            void 0 === t & amp; & amp;
            (t = ""), Mt.userLocation = {
                country: e,
                state: t
            }
        }, qr.prototype.changeLang = function(t) {
            if (t !== Mt.lang) {
                var o = Bt.moduleInitializer;
                gn.getLangJson(t).then(function(e) {
                    e ? (Ft.init(e), fn.fetchAssets(t).then(function() {
                        var e = document.getElementById("onetrust-style");
                        e & amp; & amp;
                        (e.textContent = ""), ur.initialiseCssReferences(), o.IsSuppressPC & amp; & amp;
                        !Mt.isPCVisible || (Gt.removeChild(zt("#onetrust-pc-sdk").el), Mt.vendorDomInit = !1, Mt.genVendorDomInit = !1, vr.insertPcHtml(), Lr.initialiseConsentNoticeHandlers(), Rt.IsIabEnabled & amp; & amp; Hn.InitializeVendorList(), Mt.isPCVisible & amp; & amp; Lr.restorePc());
                        var t = !0;
                        to.isAlertBoxClosedAndValid() || o.IsSuppressBanner & amp; & amp;
                        (!o.IsSuppressBanner || Mt.skipAddingHTML) || Rt.NoBanner || (Gt.removeChild(zt("#onetrust-banner-sdk").el), Lr.initializeAlartHtmlAndHandler(), t = !1), Fr.initCookiePolicyAndSettings(), Gt.removeChild(zt("#ot-sdk-btn-floating").el), xr.insertCSBtn(t), Fr.processedHtml = null
                    })) : console.error("Language:" + t + " doesn't exist for the geo rule")
                })
            }
        }, qr.prototype.initCookiePolicyAndSettings = function(e) {
            var t, o;
            void 0 === e & amp; & amp;
            (e = !1), e & amp; & amp;
            (null !== (t = document.querySelector(".ot-sdk-show-settings")) & amp; & amp; void 0 !== t & amp; & amp; t.removeEventListener("click", Lr.cookiesSettingsBoundListener), null !== (o = document.querySelector(".optanon-toggle-display")) & amp; & amp; void 0 !== o & amp; & amp; o.removeEventListener("click", Lr.cookiesSettingsBoundListener)), Bn.insertCookiePolicyHtml(), Lr.insertCookieSettingText(e)
        }, qr.prototype.showVendorsList = function() {
            Mt.pcLayer !== _.VendorList & amp; & amp;
            (Lr.showAllVendors(), xo.triggerGoogleAnalyticsEvent(Ho, Jo))
        }, qr.prototype.getTestLogData = function() {
            var e = Rt.Groups,
                t = Ft.pubDomainData,
                o = Bt.moduleInitializer.Version;
            console.info("%cWelcome to OneTrust Log", "padding: 8px; background-color: #43c233; color: white; font-style: italic; border: 1px solid black; font-size: 1.5em;"), console.info("Script is for: %c" + (t.Domain ? t.Domain : Rt.optanonCookieDomain), "padding: 4px 6px; font-style: italic; border: 2px solid #43c233; font-size: 12px;"), console.info("Script Version Published: " + o), console.info("The consent model is: " + t.ConsentModel.Name);
            var n = null !== to.alertBoxCloseDate();
            console.info("Consent has " + (n ? "" : "not ") + "been given " + (n ? "ðŸ‘" : "ðŸ›‘"));
            var r = [];
            e.forEach(function(e) {
                var t = "";
                t = e.Status & amp; & amp;
                "always active" === e.Status.toLowerCase() ? "Always Active" : Ln.isGroupActive(e) ? "Active" : "Inactive", r.push({
                    CustomGroupId: e.CustomGroupId,
                    GroupName: e.GroupName,
                    Status: t
                })
            }), console.groupCollapsed("Current Category Status"), console.table(r), console.groupEnd();
            var i = [];
            t.GeneralVendors.forEach(function(e) {
                i.push({
                    CustomGroupId: e.VendorCustomId,
                    Name: e.Name,
                    Status: Fr.isCategoryActive(e.VendorCustomId) ? "active" : "inactive"
                })
            }), console.groupCollapsed("General Vendor Ids"), console.table(i), console.groupEnd();
            var s = Ft.getRegionRule(),
                a = Mt.userLocation,
                l = Bt.moduleInitializer.GeoRuleGroupName;
            Ft.conditionalLogicEnabled ? console.groupCollapsed("Geolocation, Template &amp; Condition") : console.groupCollapsed("Geolocation and Template"), Mt.userLocation.country & amp; & amp;
            console.info("The Geolocation is " + a.country.toUpperCase()), console.info("The Geolocation rule is " + s.Name), console.info("The GeolocationRuleGroup is " + l), Ft.canUseConditionalLogic ? (console.info("The Condition name is " + Ft.Condition.Name), console.info("The TemplateName is " + Ft.Condition.TemplateName)) : console.info("The TemplateName is " + s.TemplateName), console.groupEnd();
            var c = e.filter(function(e) {
                return Ln.isGroupActive(e) & amp; & amp;
                "COOKIE" === e.Type
            });
            console.groupCollapsed("The cookies expected to be active if blocking has been implemented are"), c.forEach(function(e) {
                console.groupCollapsed(e.GroupName);
                var t = Fr.getAllFormatCookiesForAGroup(e);
                console.table(t, ["Name", "Host", "description"]), console.groupEnd()
            }), console.groupEnd()
        }, qr.prototype.isCategoryActive = function(e) {
            return -1 !== window.OptanonActiveGroups.indexOf(e)
        }, qr.prototype.getAllFormatCookiesForAGroup = function(e) {
            var t, o = [];
            return e.FirstPartyCookies.forEach(function(e) {
                return o.push({
                    Name: e.Name,
                    Host: e.Host,
                    Description: e.description
                })
            }), (null === (t = e.Hosts) || void 0 === t ? void 0 : t.reduce(function(e, t) {
                return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
            }, [])).forEach(function(e) {
                return o.push({
                    Name: e.Name,
                    Host: e.Host,
                    Description: e.description
                })
            }), o
        }, qr.prototype.updateSingularConsent = function(e, t) {
            Ft.apiSource = P.UpdateConsent;
            var o = t.split(":")[0],
                n = t.split(":")[1],
                r = Boolean(Number(n));
            e === gt ? "always active" === eo.getGrpStatus(eo.getGroupById(o)) || (Fr.updateConsentArray(Mt.groupsConsent, o, n), Br.handleTogglesOnSingularConsentUpdate(e, o, r)) : e === Ct ? (Fr.updateConsentArray(Mt.hostsConsent, o, n), Br.handleTogglesOnSingularConsentUpdate(e)) : e === yt ? (Mt.genVendorsConsent[o] = r, Br.handleTogglesOnSingularConsentUpdate(e)) : e === ft & amp; & amp;
            Br.handleTogglesOnSingularConsentUpdate(e, o, r)
        }, qr.prototype.vendorServiceEnabled = function() {
            return Mt.showVendorService
        }, qr.prototype.updateGCM = function(e) {
            e || console.error("No callback passed to the UpdateGCM"), Ft.gcmUpdateCallback = e
        }, qr.prototype.updateConsentArray = function(e, t, o) {
            var n = e.findIndex(function(e) {
                return e.includes(t + ":0") || e.includes(t + ":1")
            }); - 1 & lt;
            n ? e[n] = t + ":" + o : e.push(t + ":" + o)
        }, qr);

        function qr() {
            this.processedHtml = "", this.useGeoLocationService = !0, this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid, this.InitializeBanner = function() {
                return xr.initBanner()
            }, this.getHTML = function() {
                return document.getElementById("onetrust-banner-sdk") || (vr.insertPcHtml(), br.insertAlertHtml()), Fr.processedHtml || (Fr.processedHtml = document.querySelector("#onetrust-consent-sdk").outerHTML), Fr.processedHtml
            }, this.getCSS = function() {
                return ur.processedCSS
            }, this.setConsentProfile = function(e) {
                if (e.customPayload) {
                    var t = e.customPayload;
                    t.Interaction & amp; & amp;
                    xt.writeCookieParam(Oe.OPTANON_CONSENT, Ee, t.Interaction)
                }
                Fr.setDataSubjectIdV2(e.identifier, e.isAnonymous), Fr.synchroniseCookieWithPayload(e.purposes), Br.executeOptanonWrapper()
            }, this.InsertScript = function(e, t, o, n, r, i) {
                var s, a = null != n & amp; & amp;
                void 0 !== n, l = a & amp; & amp;
                void 0 !== n.ignoreGroupCheck & amp; & amp;
                !0 === n.ignoreGroupCheck;
                if (Ln.canInsertForGroup(r, l) & amp; & amp; !Gt.contains(Mt.srcExecGrps, r)) {
                    Mt.srcExecGrpsTemp.push(r), a & amp; & amp;
                    void 0 !== n.deleteSelectorContent & amp; & amp;
                    !0 === n.deleteSelectorContent & amp; & amp;
                    Gt.empty(t);
                    var c = document.createElement("script");
                    switch (null != o & amp; & amp; void 0 !== o & amp; & amp;
                        (s = !1, c.onload = c.onreadystatechange = function() {
                            s || this.readyState & amp; & amp;
                            "loaded" !== this.readyState & amp; & amp;
                            "complete" !== this.readyState || (s = !0, o())
                        }), c.type = "text/javascript", c.src = e, i & amp; & amp;
                        (c.async = i), t) {
                        case "head":
                            document.getElementsByTagName("head")[0].appendChild(c);
                            break;
                        case "body":
                            document.getElementsByTagName("body")[0].appendChild(c);
                            break;
                        default:
                            var d = document.getElementById(t);
                            d & amp; & amp;
                            (d.appendChild(c), a & amp; & amp; void 0 !== n.makeSelectorVisible & amp; & amp; !0 === n.makeSelectorVisible & amp; & amp; Gt.show(t))
                    }
                    if (a & amp; & amp; void 0 !== n.makeElementsVisible)
                        for (var u = 0, p = n.makeElementsVisible; u & lt; p.length; u++) {
                            var h = p[u];
                            Gt.show(h)
                        }
                    if (a & amp; & amp; void 0 !== n.deleteElements)
                        for (var g = 0, C = n.deleteElements; g & lt; C.length; g++) {
                            h = C[g];
                            Gt.remove(h)
                        }
                }
            }, this.InsertHtml = function(e, t, o, n, r) {
                var i = null != n & amp; & amp;
                void 0 !== n, s = i & amp; & amp;
                void 0 !== n.ignoreGroupCheck & amp; & amp;
                !0 === n.ignoreGroupCheck;
                if (Ln.canInsertForGroup(r, s) & amp; & amp; !Gt.contains(Mt.htmlExecGrps, r)) {
                    if (Mt.htmlExecGrpsTemp.push(r), i & amp; & amp; void 0 !== n.deleteSelectorContent & amp; & amp; !0 === n.deleteSelectorContent & amp; & amp; Gt.empty(t), Gt.appendTo(t, e), i & amp; & amp; void 0 !== n.makeSelectorVisible & amp; & amp; !0 === n.makeSelectorVisible & amp; & amp; Gt.show(t), i & amp; & amp; void 0 !== n.makeElementsVisible)
                        for (var a = 0, l = n.makeElementsVisible; a & lt; l.length; a++) {
                            var c = l[a];
                            Gt.show(c)
                        }
                    if (i & amp; & amp; void 0 !== n.deleteElements)
                        for (var d = 0, u = n.deleteElements; d & lt; u.length; d++) {
                            c = u[d];
                            Gt.remove(c)
                        }
                    null != o & amp; & amp;
                    void 0 !== o & amp; & amp;
                    o()
                }
            }, this.BlockGoogleAnalytics = function(e, t) {
                window["ga-disable-" + e] = !Ln.canInsertForGroup(t)
            }
        }
        var Mr, Ur, jr, zr, Kr = (o(Ur = Jr, jr = Mr = Rr), Ur.prototype = null === jr ? Object.create(jr) : (Wr.prototype = jr.prototype, new Wr), Jr.prototype.Close = function(e) {
            Br.closeBanner(!1), window.location.href = "http://otsdk//consentChanged"
        }, Jr.prototype.RejectAll = function(e) {
            Br.rejectAllEvent(), window.location.href = "http://otsdk//consentChanged"
        }, Jr.prototype.AllowAll = function(e) {
            Br.AllowAllV2(e), window.location.href = "http://otsdk//consentChanged"
        }, Jr.prototype.ToggleInfoDisplay = function() {
            Lr.toggleInfoDisplay()
        }, Jr);

        function Wr() {
            this.constructor = Ur
        }

        function Jr() {
            var e = null !== Mr & amp; & amp;
            Mr.apply(this, arguments) || this;
            return e.mobileOnlineURL = Ft.mobileOnlineURL, e
        }
        var Yr, Xr = (Qr.prototype.syncConsentProfile = function(e, t, o) {
            void 0 === o & amp; & amp;
            (o = !1), e ? (Mt.dsParams.id = e.trim(), Fr.setDataSubjectIdV2(e)) : e = Mt.dsParams.id, o & amp; & amp;
            (Mt.dsParams.isAnonymous = o), t = t || Mt.dsParams.token, e & amp; & amp;
            t & amp; & amp;
            gn.getConsentProfile(e, t).then(function(e) {
                return Yr.consentProfileCallback(e)
            })
        }, Qr.prototype.getConsentValue = function(e) {
            var t = null;
            switch (e) {
                case k[k.ACTIVE]:
                case k[k.ALWAYS_ACTIVE]:
                    t = z.Active;
                    break;
                case k[k.EXPIRED]:
                case k[k.OPT_OUT]:
                case k[k.PENDING]:
                case k[k.WITHDRAWN]:
                    t = z.InActive
            }
            return t
        }, Qr.prototype.isCookieGroup = function(e) {
            return !/IABV2|ISPV2|IFEV2|ISFV2/.test(e)
        }, Qr.prototype.syncPreferences = function(e, t) {
            void 0 === t & amp; & amp;
            (t = !1);
            var o = xt.getCookie(Oe.ALERT_BOX_CLOSED),
                n = o,
                r = !1,
                i = !0,
                s = !1,
                a = Gt.strToArr(xt.readCookieParam(Oe.OPTANON_CONSENT, "groups"));
            if (e & amp; & amp; e.preferences.length)
                for (var l = 0, c = e.preferences; l & lt; c.length; l++) {
                    var d = c[l],
                        u = d.status === k[k.NO_CONSENT],
                        p = Ft.domainGrps[d.id];
                    if (p)
                        if (-1 & lt; Mt.grpsSynced.indexOf(p) & amp; & amp;
                            (Mt.syncedValidGrp = !0), u & amp; & amp; a.length) {
                            for (var h = -1, g = 0; g & lt; a.length; g++)
                                if (a[g].split(":")[0] === p) {
                                    h = g;
                                    break
                                } - 1 & lt;
                            h & amp; & amp;
                            (a.splice(h, 1), Mt.grpsSynced.push(p))
                        } else if (!u & amp; & amp;
                        (!o || new Date(d.lastInteractionDate) & gt; new Date(n))) {
                        var C = this.getConsentValue(d.status);
                        if (s = !0, o = d.lastInteractionDate, !t & amp; & amp; this.isCookieGroup(p)) {
                            var y = p + ":" + C,
                                f = -1;
                            for (g = 0; g & lt; a.length; g++) {
                                var v = a[g].split(":");
                                if (v[0] === p) {
                                    v[1] !== C & amp; & amp;
                                    (a[g] = y, r = !0), f = g;
                                    break
                                }
                            } - 1 === f & amp; & amp;
                            (a.push(y), r = !0)
                        }
                    }
                } else i = !1;
            return {
                alertBoxCookieVal: o,
                groupsConsent: a,
                profileFound: i,
                syncRequired: r,
                syncOnlyDate: s = s & amp; & amp;!r
            }
        }, Qr.prototype.hideBannerAndPc = function() {
            var e = Kt.isBannerVisible();
            e & amp; & amp;
            Kt.hideBanner(), (e || Mt.isPCVisible) & amp; & amp;
            jn.hideConsentNoticeV2()
        }, Qr.prototype.setOptanonConsentCookie = function(e, t) {
            if (e.syncRequired) {
                xt.writeCookieParam(Oe.OPTANON_CONSENT, "groups", e.groupsConsent.toString());
                var o = xt.getCookie(Oe.OPTANON_CONSENT);
                xt.setCookie(Oe.OPTANON_CONSENT, o, t, !1, new Date(e.alertBoxCookieVal))
            }
        }, Qr.prototype.setIabCookie = function(e, t, o) {
            o.syncGroups & amp; & amp;
            o.syncGroups[Mt.syncGrpId] & amp; & amp;
            o.syncGroups[Mt.syncGrpId].tcStringV2 ? xt.getCookie(Oe.EU_PUB_CONSENT) !== o.syncGroups[Mt.syncGrpId].tcStringV2 & amp; & amp;
            (e.syncRequired = !0, xt.setCookie(Oe.EU_PUB_CONSENT, o.syncGroups[Mt.syncGrpId].tcStringV2, t, !1, new Date(e.alertBoxCookieVal))): e.profileFound = !1
        }, Qr.prototype.setAddtlVendorsCookie = function(e, t) {
            Rt.UseGoogleVendors & amp; & amp;
            (xt.getCookie(Oe.ADDITIONAL_CONSENT_STRING) || xt.setCookie(Oe.ADDITIONAL_CONSENT_STRING, Mt.addtlConsentVersion, t, !1, new Date(e.alertBoxCookieVal)))
        }, Qr.prototype.createTrans = function() {
            var e = xt.readCookieParam(Oe.OPTANON_CONSENT, "iType");
            ro.createConsentTxn(!1, U[e], !1, !0)
        }, Qr.prototype.updateGrpsDom = function() {
            for (var e = function(e) {
                    var t = e.getAttribute("data-optanongroupid"),
                        o = eo.getGroupById(t),
                        n = !0,
                        r = Gt.findIndex(Mt.groupsConsent, function(e) {
                            return e.split(":")[0] === t
                        }); - 1 & lt;
                    r & amp; & amp;
                    Mt.groupsConsent[r].split(":")[1] === z.InActive & amp; & amp;
                    (n = !1), Ln.toggleGrpElements(e, o, n), Ln.toogleSubGroupElement(e, n, !1, !0), Ln.toogleSubGroupElement(e, n, !0, !0)
                }, t = 0, o = Ln.getAllGroupElements(); t & lt; o.length; t++) e(o[t])
        }, Qr.prototype.updateVendorsDom = function() {
            Rt.IsIabEnabled & amp; & amp;
            (Hn.updateIabVariableReference(), ir.toggleVendorConsent(), Ft.legIntSettings.PAllowLI & amp; & amp;
                (Ft.legIntSettings.PShowLegIntBtn ? ir.updateVendorLegBtns() : ir.toggleVendorLi()))
        }, Qr.prototype.consentProfileCallback = function(r) {
            return c(this, void 0, void 0, function() {
                var t, o, n;
                return C(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = this.syncPreferences(r), o = Rt.ReconsentFrequencyDays, n = to.isIABCrossConsentEnabled(), this.setOptanonConsentCookie(t, o), Rt.IsIabEnabled & amp; & amp;
                            !n & amp; & amp;
                            this.setIabCookie(t, o, r), t.syncOnlyDate & amp; & amp;
                            (to.syncAlertBoxCookie(t.alertBoxCookieVal), to.syncCookieExpiry()), t.syncRequired & amp; & amp;
                            t.profileFound ? (Mt.syncRequired = t.syncRequired, to.syncAlertBoxCookie(t.alertBoxCookieVal), this.setAddtlVendorsCookie(t, o), this.hideBannerAndPc(), fn.initGrpsAndHosts(), !n & amp; & amp; Rt.NtfyConfig.ShowNtfy & amp; & amp; to.isAlertBoxClosedAndValid() ? [4, or.getContent()] : [3, 2]) : [3, 3];
                        case 1:
                            e.sent(), or.init(), or.changeState(), e.label = 2;
                        case 2:
                            return Rt.IsIabEnabled & amp; & amp;
                            (to.setIABCookieData(), ao.populateVendorAndPurposeFromCookieData()), this.updateGrpsDom(), this.updateVendorsDom(), Ao.setLandingPathParam(xe), On.substitutePlainTextScriptTags(), qn.updateGtmMacros(!0), Br.executeOptanonWrapper(), [3, 4];
                        case 3:
                            !t.profileFound & amp; & amp;
                            t.alertBoxCookieVal & amp; & amp;
                            this.createTrans(), e.label = 4;
                        case 4:
                            return [2]
                    }
                })
            })
        }, Qr);

        function Qr() {}
        var $r, Zr = (ei.prototype.removeCookies = function() {
            xt.removePreview(), xt.removeOptanon(), xt.removeAlertBox(), xt.removeIab2(), xt.removeAddtlStr(), xt.removeVariant(), Mt.isPreview & amp; & amp;
            $r.setPreviewCookie(), Mt.urlParams.get("otreset") & amp; & amp;
            Mt.urlParams.set("otreset", "false");
            var e = window.location.pathname + "?" + Mt.urlParams.toString() + window.location.hash;
            $r.replaceHistory(e)
        }, ei.prototype.setPreviewCookie = function() {
            var e = new Date;
            e.setTime(e.getTime() + 864e5);
            var t = Mt.geoFromUrl ? "&amp;geo=" + Mt.geoFromUrl : "",
                o = "expiry=" + e.toISOString() + t;
            xt.setCookie(Oe.OT_PREVIEW, o, 1, !1)
        }, ei.prototype.bindStopPreviewEvent = function() {
            (window.attachEvent || window.addEventListener)("message", function(e) {
                return $r.onMessage(e)
            })
        }, ei.prototype.replaceHistory = function(e) {
            history.pushState({}, "", e), location.reload()
        }, ei.prototype.onMessage = function(e) {
            "string" == typeof e.data & amp; & amp;
            e.data === $r.CLEAR_COOKIES & amp; & amp;
            ($r.removeCookies(), e.source & amp; & amp; e.source.postMessage & amp; & amp; e.source.postMessage($r.CLEARED_COOKIES, e.origin))
        }, ei);

        function ei() {
            this.CLEAR_COOKIES = "CLEAR_OT_COOKIES", this.CLEARED_COOKIES = "CLEARED_OT_COOKIES"
        }

        function ti(e) {
            if (e) {
                var t = window.atob(e);
                return Function('"use strict"; return ' + t)()
            }
        }
        Le.initPolyfill(), xt = new Ot, Kt = new Jt, Ft = new Dt, No = new pn, $r = new Zr,
            function() {
                var e, t = window.otStubData;
                if (t) {
                    Bt.moduleInitializer = t.domainData, Bt.fp = Bt.moduleInitializer.TenantFeatures, Mt.isAMP = t.isAmp, Mt.dataDomainId = t.domainId, Mt.isPreview = t.isPreview, Mt.urlParams = t.urlParams, Mt.isV2Stub = t.isV2Stub || !1, Ft.gtmUpdatedinStub = t.gtmUpdated, t.isReset ? $r.removeCookies() : t.isPreview & amp; & amp;
                    $r.setPreviewCookie(), Ft.setBannerScriptElement(t.stubElement), Ft.setRegionRule(t.regionRule), Bt.fp.CookieV2TargetedTemplates & amp; & amp;
                    (Ft.conditionalLogicEnabled = !(null === (e = Ft.getRegionRule().Conditions) || void 0 === e || !e.length), Ft.conditionalLogicEnabled & amp; & amp;
                        (function() {
                            for (var e = Ft.getRegionRule(), t = 0; t & lt; e.Conditions.length; t++) try {
                                if (ti(e.Conditions[t].Expression)) return Ft.Condition = e.Conditions[t]
                            } catch (e) {
                                console.warn(e);
                                continue
                            }
                            Ft.allConditionsFailed = !0
                        }(), Ft.canUseConditionalLogic = !Ft.allConditionsFailed)), Mt.userLocation = t.userLocation, Mt.crossOrigin = t.crossOrigin, Ft.bannerDataParentURL = t.bannerBaseDataURL, Ft.mobileOnlineURL = y(Ft.mobileOnlineURL, t.mobileOnlineURL);
                    var o = Ft.getRegionRule();
                    Ft.multiVariantTestingEnabled = Bt.moduleInitializer.MultiVariantTestingEnabled & amp; & amp;
                    0 & lt;
                    o.Variants.length & amp; & amp;
                    Kt.isDateCurrent(o.TestEndTime), Ft.otDataLayer = t.otDataLayer, Mt.grpsSynced = t.grpsSynced || [], Mt.isIabSynced = t.isIabSynced, Mt.isGacSynced = t.isGacSynced, Mt.syncRequired = t.isIabSynced || t.isGacSynced || t.grpsSynced & amp; & amp;
                    0 & lt;
                    t.grpsSynced.length, Mt.consentPreferences = t.preferences, Mt.syncGrpId = t.syncGrpId, Mt.consentApi = t.consentApi, Mt.tenantId = t.tenantId, Mt.geoFromUrl = t.geoFromUrl, Mt.nonce = t.nonce, Mt.setAttributePolyfillIsActive = t.setAttributePolyfillIsActive, Mt.storageBaseURL = t.storageBaseURL, No.populateLangSwitcherPlhdr(), window.otStubData = {
                        userLocation: Mt.userLocation
                    }, window.OneTrustStub = null
                }
            }(),
            function() {
                c(this, void 0, void 0, function() {
                    var t, o, n, r, i, s;
                    return C(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return eo = new oo, Ln = new _n, bn = new Pn, Hn = new Fn, On = new Nn, Br = new Er, Lr = new _r, vr = new kr, br = new Pr, xr = new Gr, Bn = new En, ur = new pr, vo = new ko, fn = new kn, qn = new Mn, Nr = new Dr, xo = new Go, xn = new Gn, Yr = new Xr, ir = new sr, gn = new Cn, An = new Tn, jn = new er, Cr = new yr, Ar = new Tr, Bt.moduleInitializer.MobileSDK ? zr = new Kr : Fr = new Rr, ao = new lo, Ft.setGCMcallback(), t = Ft.getRegionRule(), o = Ft.canUseConditionalLogic ? Ft.Condition.UseGoogleVendors : t.UseGoogleVendors, "IAB2" !== Ft.getRegionRuleType() ? [3, 2] : [4, Promise.all([gn.getLangJson(), gn.fetchGvlObj(), o ? gn.fetchGoogleVendors() : Promise.resolve(null), gn.loadCMP()])];
                            case 1:
                                return s = e.sent(), n = s[0], r = s[1], i = s[2], Mt.gvlObj = r, Mt.addtlVendorsList = i ? i.vendors : null, [3, 4];
                            case 2:
                                return [4, gn.getLangJson()];
                            case 3:
                                n = e.sent(), e.label = 4;
                            case 4:
                                return function(r) {
                                    c(this, void 0, void 0, function() {
                                        var t, o, n;
                                        return C(this, function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return window.OneTrust = window.Optanon = Object.assign({}, window.OneTrust, function(e) {
                                                            var t, o = Bt.moduleInitializer.MobileSDK;
                                                            t = o ? zr : Fr;
                                                            var n = {
                                                                AllowAll: t.AllowAll,
                                                                BlockGoogleAnalytics: t.BlockGoogleAnalytics,
                                                                Close: t.Close,
                                                                getCSS: t.getCSS,
                                                                GetDomainData: t.GetDomainData,
                                                                getGeolocationData: t.getGeolocationData,
                                                                getHTML: t.getHTML,
                                                                Init: t.Init,
                                                                InitializeBanner: t.InitializeBanner,
                                                                initializeCookiePolicyHtml: t.initCookiePolicyAndSettings,
                                                                InsertHtml: t.InsertHtml,
                                                                InsertScript: t.InsertScript,
                                                                IsAlertBoxClosed: t.IsAlertBoxClosed,
                                                                IsAlertBoxClosedAndValid: t.IsAlertBoxClosedAndValid,
                                                                LoadBanner: t.LoadBanner,
                                                                OnConsentChanged: xo.OnConsentChanged,
                                                                ReconsentGroups: t.ReconsentGroups,
                                                                RejectAll: t.RejectAll,
                                                                SetAlertBoxClosed: t.SetAlertBoxClosed,
                                                                setGeoLocation: t.setGeoLocation,
                                                                ToggleInfoDisplay: t.ToggleInfoDisplay,
                                                                TriggerGoogleAnalyticsEvent: t.TriggerGoogleAnalyticsEvent,
                                                                useGeoLocationService: t.useGeoLocationService,
                                                                FetchAndDownloadPC: t.FetchAndDownloadPC,
                                                                changeLanguage: t.changeLang,
                                                                testLog: t.getTestLogData,
                                                                UpdateConsent: t.updateSingularConsent,
                                                                IsVendorServiceEnabled: t.vendorServiceEnabled,
                                                                UpdateGCM: t.updateGCM
                                                            };
                                                            e.IsConsentLoggingEnabled & amp; & amp;
                                                            (n.getDataSubjectId = t.getDataSubjectId, n.setConsentProfile = t.setConsentProfile, n.setDataSubjectId = t.setDataSubjectIdV2, Mt.isV2Stub & amp; & amp;
                                                                (n.syncConsentProfile = Yr.syncConsentProfile));
                                                            o & amp; & amp;
                                                            (n.mobileOnlineURL = t.mobileOnlineURL, n.otCookieData = Mt.otCookieData);
                                                            e.IsIabEnabled & amp; & amp;
                                                            (n.updateConsentFromCookies = xo.updateConsentFromCookie, n.getPingRequest = ao.getPingRequestForTcf, n.getVendorConsentsRequestV2 = ao.getVendorConsentsRequestV2, n.showVendorsList = t.showVendorsList);
                                                            return n
                                                        }(r.DomainData)), to.initializeBannerVariables(r), uo = new yo, bo = new Po, ro = new io, _o = new Eo, Ao = new Io, lr = new cr, or = new nr,
                                                        function() {
                                                            var o = window.OTExternalConsent;
                                                            if (o & amp; & amp; o.consentedDate & amp; & amp;
                                                                (o.groups || o.tcString || o.addtlString)) {
                                                                var n = [],
                                                                    e = o.groups.split(",");
                                                                e.forEach(function(e) {
                                                                    var t = e.split(":");
                                                                    n.push({
                                                                        lastInteractionDate: o.consentedDate,
                                                                        status: "1" === t[1] ? k[k.ACTIVE] : k[k.OPT_OUT],
                                                                        id: t[0]
                                                                    }), Mt.grpsSynced.push(t[0])
                                                                }), Mt.consentPreferences = {
                                                                    preferences: n,
                                                                    syncGroups: null
                                                                }, Mt.syncRequired = !0, uo.updateGroupsInCookie(Oe.OPTANON_CONSENT, e), xt.setCookie(Oe.ALERT_BOX_CLOSED, o.consentedDate, 365), o.tcString & amp; & amp;
                                                                (Mt.isIabSynced = !0, xt.setCookie(Oe.EU_PUB_CONSENT, o.tcString, 365)), o.addtlString & amp; & amp;
                                                                (Mt.isGacSynced = !0, xt.setCookie(Oe.ADDITIONAL_CONSENT_STRING, "" + o.addtlString, 365))
                                                            }
                                                        }(), Mt.isPreview & amp; & amp;
                                                    (to.syncOtPreviewCookie(), $r.bindStopPreviewEvent()), t = Yr.syncPreferences(Mt.consentPreferences, !0), (Mt.syncRequired || t.syncRequired) & amp; & amp;
                                                    to.syncAlertBoxCookie(t.alertBoxCookieVal), to.syncCookieExpiry(), o = window.OneTrust.dataSubjectParams || {}, (Mt.dsParams = o).id & amp; & amp;
                                                    Fr.setDataSubjectIdV2(o.id, o.isAnonymous), Ft.multiVariantTestingEnabled & amp; & amp;
                                                    Ft.selectedVariant & amp; & amp;
                                                    xt.setCookie(Oe.SELECTED_VARIANT, Ft.selectedVariant.Id, Rt.ReconsentFrequencyDays), [4, ao.initializeIABModule()];
                                                case 1:
                                                    return e.sent(), window.OneTrust.Init(!0), [4, fn.fetchAssets()];
                                                case 2:
                                                    return (e.sent(), xr.initBanner(), xo.assetResolve(!0), ur.initialiseCssReferences(), n = to.isIABCrossConsentEnabled(), (Mt.syncedValidGrp || Mt.isIabSynced || Mt.isGacSynced) & amp; & amp; !n & amp; & amp; Rt.NtfyConfig.ShowNtfy & amp; & amp; to.isAlertBoxClosedAndValid()) ? (Mt.ntfyRequired = !0, [4, or.getContent()]) : [3, 4];
                                                case 3:
                                                    e.sent(), e.label = 4;
                                                case 4:
                                                    return n || window.OneTrust.LoadBanner(), [2]
                                            }
                                        })
                                    })
                                }(n), [2]
                        }
                    })
                })
            }()
    }(); <
/pre></body > < /html>
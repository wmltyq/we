(function () {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function () {
        return !1
    };
    NEJ.P = function (DC4G) {
        if (!DC4G || !DC4G.length) return null;
        var bem4q = window;
        for (var a = DC4G.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; bem4q = bem4q[a[i]] = bem4q[a[i]] || {}, i++) ;
        return bem4q
    };
    NEJ.Q = function (bL5Q, DC4G) {
        bL5Q = bL5Q || NEJ.O;
        var bs5x = DC4G.split(".");
        for (var i = 0, l = bs5x.length; i < l; i++) {
            bL5Q = bL5Q[bs5x[i]];
            if (!bL5Q) break
        }
        return bL5Q
    };
    NEJ.C = function () {
        var bJD2x = function () {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bEl0x = function (D4H, bz5E) {
            for (var x in bz5E) if (D4H == bz5E[x]) return x;
            return null
        };
        var byb9S = {cw5B: 0, bl5q: 1, bC5H: 2, bW5b: 3, bJ5O: 4, fe7X: 5, kg8Y: 6, eD6x: 7},
            us1x = {cE6y: 0, bn5s: 1, bF5K: 2, ci5n: 3, bQ5V: 4, gM7F: 5, lq9h: 6, gj7c: 7};
        return function () {
            var fP7I = function () {
                this.bEI0x();
                return this.cw5B.apply(this, arguments)
            };
            fP7I.prototype.bEI0x = NEJ.F;
            fP7I.prototype.cw5B = NEJ.F;
            fP7I.N5S = function (BM4Q, bKv2x) {
                if (bJD2x(BM4Q)) return;
                if (bKv2x == null || !!bKv2x) NEJ.X(this, BM4Q, bJD2x);
                this.bWb6V = BM4Q;
                this.cs5x = BM4Q.prototype;
                var bI5N = function () {
                };
                bI5N.prototype = BM4Q.prototype;
                this.prototype = new bI5N;
                var DF4J = this.prototype;
                DF4J.constructor = this;
                var cl5q;
                for (var x in byb9S) {
                    cl5q = bEl0x(byb9S[x], us1x);
                    if (!cl5q || !this.cs5x[x]) continue;
                    DF4J[x] = function (W5b) {
                        return function () {
                            this[W5b].apply(this, arguments)
                        }
                    }(cl5q)
                }
                var DG4K = {};
                for (var x in us1x) {
                    cl5q = bEl0x(us1x[x], byb9S);
                    if (!cl5q || !this.cs5x[cl5q]) continue;
                    DG4K[cl5q] = BM4Q;
                    DF4J[x] = function (W5b) {
                        return function () {
                            var m4q, bI5N = this.bxT9K[W5b], bag2x = bI5N.prototype[W5b];
                            this.bxT9K[W5b] = bI5N.bWb6V || BM4Q;
                            if (!!bag2x) m4q = bag2x.apply(this, arguments);
                            this.bxT9K[W5b] = BM4Q;
                            return m4q
                        }
                    }(cl5q)
                }
                DF4J.bEI0x = function () {
                    this.bxT9K = NEJ.X({}, DG4K)
                };
                DF4J.cKt4x = DF4J.cE6y;
                return DF4J
            };
            return fP7I
        }
    }();
    NEJ.X = function (gq7j, bR5W, dZ6T) {
        if (!gq7j || !bR5W) return gq7j;
        dZ6T = dZ6T || NEJ.F;
        for (var x in bR5W) {
            if (bR5W.hasOwnProperty(x) && !dZ6T(bR5W[x], x)) gq7j[x] = bR5W[x]
        }
        return gq7j
    };
    NEJ.EX = function (gq7j, bR5W) {
        if (!gq7j || !bR5W) return gq7j;
        for (var x in gq7j) {
            if (gq7j.hasOwnProperty(x) && bR5W[x] != null) gq7j[x] = bR5W[x]
        }
        return gq7j
    };
    var Ij6d = Function.prototype;
    Ij6d.eH6B = function (lM9D, wJ2x) {
        var f = NEJ.F, wJ2x = wJ2x || f, lM9D = lM9D || f, dx6r = this;
        return function () {
            var d4h = {args: NEJ.R.slice.call(arguments, 0)};
            lM9D(d4h);
            if (!d4h.stopped) {
                d4h.value = dx6r.apply(this, d4h.args);
                wJ2x(d4h)
            }
            return d4h.value
        }
    };
    Ij6d.f4j = function () {
        var bf5k = arguments, gq7j = arguments[0], bxO9F = this;
        return function () {
            var tG1x = NEJ.R.slice.call(bf5k, 1);
            NEJ.R.push.apply(tG1x, arguments);
            return bxO9F.apply(gq7j || window, tG1x)
        }
    };
    Ij6d.eA6u = function () {
        var bf5k = arguments, gq7j = NEJ.R.shift.call(bf5k), bxO9F = this;
        return function () {
            NEJ.R.push.apply(arguments, bf5k);
            return bxO9F.apply(gq7j || window, arguments)
        }
    };
    var Ij6d = String.prototype;
    if (!Ij6d.trim) {
        Ij6d.trim = function () {
            var df6Z = /(?:^\s+)|(?:\s+$)/g;
            return function () {
                return this.replace(df6Z, "")
            }
        }()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, O5T = c4g("nej.p"), wg2x = window.navigator.platform,
        uA2x = window.navigator.userAgent;
    var lt9k = {mac: wg2x, win: wg2x, linux: wg2x, ipad: uA2x, ipod: uA2x, iphone: wg2x, android: uA2x};
    O5T.Ik6e = lt9k;
    for (var x in lt9k) lt9k[x] = (new RegExp(x, "i")).test(lt9k[x]);
    lt9k.ios = lt9k.ipad || lt9k.iphone || lt9k.ipod;
    lt9k.tablet = lt9k.ipad;
    lt9k.desktop = lt9k.mac || lt9k.win || lt9k.linux && !lt9k.android;
    var iC8u = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {css: "", pro: "", clz: ""}
    };
    O5T.dr6l = iC8u;
    if (/msie\s+(.*?);/i.test(uA2x) || /trident\/.+rv:([\d\.]+)/i.test(uA2x)) {
        iC8u.engine = "trident";
        iC8u.browser = "ie";
        iC8u.version = RegExp.$1;
        iC8u.prefix = {css: "ms", pro: "ms", clz: "MS", evt: "MS"};
        var mM9D = {6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0"};
        iC8u.release = mM9D[document.documentMode] || mM9D[parseInt(iC8u.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(uA2x)) {
        iC8u.engine = "webkit";
        iC8u.release = RegExp.$1 || "";
        iC8u.prefix = {css: "webkit", pro: "webkit", clz: "WebKit"}
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(uA2x)) {
        iC8u.engine = "gecko";
        iC8u.release = RegExp.$1 || "";
        iC8u.browser = "firefox";
        iC8u.prefix = {css: "Moz", pro: "moz", clz: "Moz"};
        if (/firefox\/(.*?)(?=\s|$)/i.test(uA2x)) iC8u.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(uA2x)) {
        iC8u.engine = "presto";
        iC8u.release = RegExp.$1 || "";
        iC8u.browser = "opera";
        iC8u.prefix = {css: "O", pro: "o", clz: "O"};
        if (/version\/(.*?)(?=\s|$)/i.test(uA2x)) iC8u.version = RegExp.$1 || ""
    }
    if (iC8u.browser == "unknow") {
        var mM9D = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = mM9D.length, W5b; i < l; i++) {
            W5b = mM9D[i] == "safari" ? "version" : mM9D[i];
            if ((new RegExp(W5b + "/(.*?)(?=\\s|$)", "i")).test(uA2x)) {
                iC8u.browser = mM9D[i];
                iC8u.version = RegExp.$1.trim();
                break
            }
        }
    }
    O5T.bMe2x = {};
    var bah2x = iC8u.engine != "trident";
    O5T.nB9s = {
        gecko: iC8u.engine != "gecko",
        webkit: iC8u.engine != "webkit",
        presto: iC8u.engine != "presto",
        trident0: bah2x || iC8u.release > "2.0",
        trident1: bah2x || iC8u.release < "6.0",
        trident2: bah2x || iC8u.release > "3.0",
        trident: bah2x || iC8u.release >= "6.0"
    }
})();
(function () {
    var iB8t = NEJ.P("nej.c"), R5W = {};
    var bxD9u = function () {
        var df6Z = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (Y5d) {
            Y5d = Y5d || "";
            if (df6Z.test(Y5d)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var Qt9k = function () {
        var bOK3x = function (i4m, bz5E) {
            if (!i4m || !i4m.length) return;
            for (var i = 0, l = i4m.length, jR8J; i < l; i++) {
                jR8J = i4m[i];
                if (jR8J.indexOf("://") > 0) bz5E[bxD9u(jR8J)] = jR8J
            }
        };
        var bh5m = {
            portrait: {name: "portrait", dft: "portrait/"},
            "ajax.swf": {name: "ajax", dft: "nej_proxy_flash.swf"},
            "chart.swf": {name: "chart", dft: "nej_flex_chart.swf"},
            "audio.swf": {name: "audio", dft: "nej_player_audio.swf"},
            "video.swf": {name: "video", dft: "nej_player_video.swf"},
            "clipboard.swf": {name: "clipboard", dft: "nej_clipboard.swf"}
        };
        return function (bR5W) {
            iB8t.It6n("root", bR5W.root || "/res/");
            var bxb8T, fZ7S = iB8t.B4F("root");
            for (var x in bh5m) {
                bxb8T = bh5m[x];
                iB8t.It6n(x, bR5W[bxb8T.name] || fZ7S + bxb8T.dft)
            }
            var CY4c = bR5W.p_csrf;
            if (CY4c == !0) {
                CY4c = {cookie: "AntiCSRF", param: "AntiCSRF"}
            }
            iB8t.It6n("csrf", NEJ.EX({cookie: "", param: ""}, CY4c));
            R5W.frames = {};
            bOK3x(bR5W.p_frame, R5W.frames);
            R5W.flashs = {};
            bOK3x(bR5W.p_flash, R5W.flashs)
        }
    }();
    iB8t.It6n = function (K4O, D4H) {
        R5W[K4O] = D4H
    };
    iB8t.B4F = function (K4O) {
        return R5W[K4O]
    };
    iB8t.bWh6b = function (Y5d) {
        var qk0x = bxD9u(Y5d);
        return R5W.frames[qk0x] || qk0x + "/res/nej_proxy_frame.html"
    };
    iB8t.bWi6c = function (Y5d) {
        return R5W.flashs[bxD9u(Y5d)]
    };
    Qt9k(window.NEJ_CONF || NEJ.O)
})();
(function () {
    var c4g = NEJ.P, O5T = c4g("nej.p"), iB8t = c4g("nej.c"), bR5W = window.NEJ_CONF || NEJ.O;
    if (O5T.nB9s.trident) return;
    iB8t.It6n("storage.swf", bR5W.storage || iB8t.B4F("root") + "nej_storage.swf");
    if (O5T.dr6l.release < "4.0") {
        iB8t.It6n("blank.png", bR5W.blank || iB8t.B4F("root") + "nej_blank.gif")
    }
    var i4m = bR5W.xdr, gL7E = /^(https?:\/\/.*?)(?=\/|$)/i, kn8f = /[\/?=&]/i;
    var bJG2x = function (Y5d) {
        return (gL7E.test(Y5d) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i4m && !!i4m.length) for (var i = i4m.length - 1, Y5d, K4O; i >= 0; i--) {
        Y5d = i4m[i];
        K4O = bJG2x(Y5d);
        if (!!K4O) iB8t.It6n(K4O, Y5d)
    }
    iB8t.cKo4s = function (Y5d) {
        var K4O = bJG2x(Y5d);
        if (!K4O) {
            if (kn8f.test(Y5d)) {
                K4O = location.protocol + "//" + location.host
            } else if (Y5d.indexOf("://") < 0) {
                K4O = location.protocol + "//" + Y5d
            } else {
                K4O = Y5d
            }
        }
        return iB8t.B4F(K4O) || K4O + "/res/nej_xdomain.html"
    }
})();
(function () {
    var c4g = NEJ.P, iB8t = c4g("nej.c"), O5T = c4g("nej.g"), gG7z = +(new Date);
    O5T.cKn3x = 1e4 - gG7z;
    O5T.bwV8N = 10001 - gG7z;
    O5T.cKl3x = 10002 - gG7z;
    O5T.bSM5R = 10003 - gG7z;
    O5T.bWp6j = 10004 - gG7z;
    O5T.cKj3x = 10005 - gG7z;
    O5T.bwC8u = 10006 - gG7z;
    O5T.bWt6n = 10007 - gG7z;
    O5T.yg3x = "Content-Type";
    O5T.cKf3x = "text/plain";
    O5T.DH4L = "multipart/form-data";
    O5T.bWv6p = "application/x-www-form-urlencoded";
    O5T.bwt8l = iB8t.B4F("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
    var c4g = NEJ.P, fy7r = NEJ.R, O5T = c4g("nej.p"), a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        be5j = c4g("nej.h");
    var kh8Z = O5T.dr6l.prefix, bPD3x = O5T.bMe2x,
        bWz6t = {scale: "scale({x|1},{y|1})", rotate: "rotate({a})", translate: "translate({x},{y})"}, bWD6x = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        }, Te0x = {
            transition: !0,
            transform: !0,
            animation: !0,
            keyframes: !0,
            box: !0,
            "box-pack": !0,
            "box-flex": !0,
            marquee: !0,
            "border-radius": !0,
            "user-select": !0
        };
    var Qt9k = function () {
        var sX1x = be5j.bBR0x();
        bPD3x.css3d = !!sX1x && sX1x.m41 != null;
        var df6Z = /-([a-z])/g;
        for (var x in Te0x) {
            Te0x[bBT0x(x)] = Te0x[x]
        }
    };
    var bBT0x = function () {
        var df6Z = /-([a-z])/g;
        return function (W5b) {
            W5b = W5b || "";
            return W5b.replace(df6Z, function ($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bBX0x = function (W5b) {
        return (!bPD3x.css3d ? bWz6t : bWD6x)[W5b]
    };
    var bCu0x = function () {
        var df6Z = /\s+/;
        return function (fP7I) {
            fP7I = (fP7I || "").trim();
            return !!fP7I ? fP7I.split(df6Z) : null
        }
    }();
    var bbv3x = function (F4J, u4y, fP7I) {
        F4J = a4e.B4F(F4J);
        if (!F4J) return;
        k4o.bd5i(bCu0x(fP7I), function (ed6X) {
            F4J.classList[u4y](ed6X)
        })
    };
    be5j.Ix6r = function (i4m) {
        return fy7r.slice.call(i4m, 0)
    };
    be5j.bwi8a = function (F4J) {
        return be5j.Ix6r(F4J.children)
    };
    be5j.bwc8U = function (F4J, fP7I) {
        return be5j.Ix6r(F4J.getElementsByClassName(fP7I))
    };
    be5j.bwb8T = function (F4J, Iy6s) {
        bbv3x(F4J, "add", Iy6s)
    };
    be5j.bvV8N = function (F4J, Iz6t) {
        bbv3x(F4J, "remove", Iz6t)
    };
    be5j.Ux0x = function (F4J, Iz6t, Iy6s) {
        bbv3x(F4J, "remove", Iz6t);
        bbv3x(F4J, "add", Iy6s)
    };
    be5j.bvO8G = function (F4J, fP7I) {
        F4J = a4e.B4F(F4J);
        if (!F4J) return !1;
        var i4m = F4J.classList;
        if (!i4m || !i4m.length) return !1;
        return k4o.di6c(bCu0x(fP7I), function (ed6X) {
            return i4m.contains(ed6X)
        }) >= 0
    };
    be5j.bvN8F = function (F4J, ed6X) {
    };
    be5j.bvG8y = function (F4J) {
    };
    be5j.bvC8u = function (gf7Y, nJ9A) {
        gf7Y.selectionEnd = nJ9A.end || 0;
        gf7Y.selectionStart = nJ9A.start || 0;
        gf7Y.focus()
    };
    be5j.bvB8t = function (gf7Y) {
        return {end: gf7Y.selectionEnd, start: gf7Y.selectionStart}
    };
    be5j.bvy8q = function () {
        var DL4P = function (ed6X, d4h) {
            var F4J = h4l.X5c(d4h);
            if (!F4J.value) a4e.x4B(F4J, ed6X)
        };
        var IJ6D = function (ed6X, d4h) {
            a4e.y4C(h4l.X5c(d4h), ed6X)
        };
        return function (F4J, fk7d, ed6X) {
            if (fk7d == 1) {
                h4l.s4w(F4J, "blur", DL4P.f4j(null, ed6X))
            }
            if (fk7d == 1 || fk7d == -1) {
                h4l.s4w(F4J, "focus", IJ6D.f4j(null, ed6X))
            }
        }
    }();
    be5j.buT8L = function (G4K) {
        return (new XMLSerializer).serializeToString(G4K) || ""
    };
    be5j.buK8C = function (CV4Z) {
        var fZ7S = (new DOMParser).parseFromString(CV4Z, "text/xml").documentElement;
        return fZ7S.nodeName == "parsererror" ? null : fZ7S
    };
    be5j.buG8y = function (F4J) {
    };
    be5j.nN0x = function (F4J) {
        return null
    };
    be5j.buD8v = function (F4J) {
        return null
    };
    be5j.buy8q = function (dR6L) {
    };
    be5j.but8l = function () {
        var bf5k = be5j.Ix6r(arguments);
        bf5k[0] = a4e.B4F(bf5k[0]);
        if (!bf5k[0]) return null;
        bf5k[1] = (bf5k[1] || "").toLowerCase();
        if (!bf5k[1]) return null;
        return bf5k
    };
    be5j.BF4J = function () {
        var wx2x = {touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup"}, jl8d = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var bWE6y = function (u4y) {
            return (kh8Z.evt || kh8Z.pro) + u4y
        };
        return function () {
            var bf5k = be5j.but8l.apply(be5j, arguments);
            if (!bf5k) return;
            var bcP3x = jl8d[bf5k[1]], bcR3x = wx2x[bf5k[1]];
            if (!!bcP3x) {
                bf5k[4] = bf5k[1];
                bf5k[1] = bWE6y(bcP3x)
            } else if (!!bcR3x) {
                var W5b = "on" + bf5k[1];
                if (!(W5b in bf5k[0])) {
                    bf5k[4] = bf5k[1];
                    bf5k[1] = bcR3x
                }
            }
            return bf5k
        }
    }();
    be5j.bul8d = function () {
        var bf5k = arguments;
        bf5k[0].addEventListener(bf5k[1], bf5k[2], !!bf5k[3])
    };
    be5j.bdr3x = function () {
        var bf5k = arguments;
        bf5k[0].removeEventListener(bf5k[1], bf5k[2], !!bf5k[3])
    };
    be5j.buh8Z = function (F4J, u4y, e4i) {
        var d4h = document.createEvent("Event");
        d4h.initEvent(u4y, !0, !0);
        NEJ.X(d4h, e4i);
        F4J.dispatchEvent(d4h)
    };
    be5j.bBR0x = function () {
        var gL7E = /\((.*?)\)/, kn8f = /\s*,\s*/, i4m = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var beP4T = function (sX1x) {
            var in8f = {};
            if (gL7E.test(sX1x || "")) {
                k4o.bd5i(RegExp.$1.split(kn8f), function (D4H, r4v) {
                    in8f[i4m[r4v]] = D4H || ""
                })
            }
            return in8f
        };
        return function (sX1x) {
            if (!!window.CSSMatrix) return new CSSMatrix(sX1x);
            var W5b = kh8Z.clz + "CSSMatrix";
            if (!!window[W5b]) return new window[W5b](sX1x || "");
            return beP4T(sX1x)
        }
    }();
    be5j.bFY1x = function () {
        var df6Z = /\{(.*?)\}/g;
        return function (W5b, bz5E) {
            bz5E = bz5E || o;
            var oW0x = bBX0x(W5b);
            return !oW0x ? "" : oW0x.replace(df6Z, function ($1, $2) {
                var bs5x = $2.split("|");
                return bz5E[bs5x[0]] || bs5x[1] || "0"
            })
        }
    }();
    be5j.buc8U = function (F4J, W5b, D4H) {
        F4J.style[be5j.bJA2x(W5b)] = D4H
    };
    be5j.bJA2x = function () {
        var df6Z = /^[a-z]/, btZ8R = kh8Z.css;
        var bWF6z = function (W5b) {
            return W5b.replace(df6Z, function ($1) {
                return btZ8R + $1.toUpperCase()
            })
        };
        return function (W5b) {
            W5b = bBT0x(W5b);
            var bWL6F = be5j.bWQ6K(W5b, Te0x);
            return bWL6F ? bWF6z(W5b) : W5b
        }
    }();
    be5j.bWQ6K = function () {
        var df6Z = /^([a-z]+?)[A-Z]/;
        return function (W5b, bz5E) {
            if (!bz5E[W5b]) {
                if (df6Z.test(W5b)) W5b = RegExp.$1
            }
            return !!bz5E[W5b]
        }
    }();
    be5j.bWW6Q = function () {
        var df6Z = /\$<(.*?)>/gi, btZ8R = "-" + kh8Z.css.toLowerCase() + "-";
        return function (km8e) {
            return km8e.replace(df6Z, function ($1, $2) {
                var fu7n = $2, bs5x = fu7n.split("|"), oW0x = bBX0x(bs5x[0]);
                if (!!oW0x) {
                    return be5j.bFY1x(bs5x[0], k4o.hq8i(bs5x[1]))
                }
                return !be5j.bWX6R(fu7n, Te0x) ? fu7n : btZ8R + fu7n
            })
        }
    }();
    be5j.bWX6R = function (W5b, bz5E) {
        return !!bz5E[W5b]
    };
    be5j.btR8J = function (cj5o, km8e) {
        cj5o.textContent = km8e
    };
    be5j.btQ8I = function (cj5o, km8e) {
        var zH3x = cj5o.sheet, bq5v = zH3x.cssRules.length;
        zH3x.insertRule(km8e, bq5v);
        return zH3x.cssRules[bq5v]
    };
    be5j.cJS3x = function (F4J, e4i) {
    };
    be5j.WF1x = function (WL1x) {
        return (WL1x || "").toLowerCase() != "transparent"
    };
    be5j.bXb6V = function (F4J) {
    };
    be5j.btx8p = function (F4J, W5b) {
        if (!!F4J.getAttribute) return F4J.getAttribute(W5b);
        return ""
    };
    be5j.XC1x = function (eO7H) {
        a4e.cL6F(eO7H)
    };
    Qt9k()
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), h4l = c4g("nej.v"), O5T = c4g("nej.p"), be5j = c4g("nej.h");
    if (O5T.nB9s.trident0) return;
    var gG7z = +(new Date);
    R5W = {};
    be5j.bvN8F = be5j.bvN8F.eH6B(function (d4h) {
        d4h.stopped = !0;
        var bf5k = d4h.args, C4G = a4e.lP9G(bf5k[0]), K4O = "hover-" + C4G;
        if (!C4G || !!R5W[K4O]) return;
        R5W[K4O] = !0;
        h4l.s4w(C4G, "mouseenter", a4e.y4C.f4j(a4e, C4G, bf5k[1]));
        h4l.s4w(C4G, "mouseleave", a4e.x4B.f4j(a4e, C4G, bf5k[1]))
    });
    be5j.bvG8y = function () {
        var cJQ3x = function () {
        };
        return be5j.bvG8y.eH6B(function (d4h) {
            d4h.stopped = !0;
            var F4J = d4h.args[0], C4G = "fixed-" + a4e.lP9G(F4J);
            if (!!R5W[C4G]) return;
            var bh5m = {};
            R5W[C4G] = bh5m
        })
    }();
    be5j.buG8y = be5j.buG8y.eH6B(function (d4h) {
        d4h.stopped = !0;
        var F4J = d4h.args[0], cj5o = F4J.style, bFF1x = a4e.oy0x();
        cj5o.width = bFF1x.scrollWidth + "px";
        cj5o.height = bFF1x.scrollHeight + "px"
    });
    be5j.nN0x = be5j.nN0x.eH6B(function (d4h) {
        d4h.stopped = !0;
        var F4J = d4h.args[0], lp9g = R5W[F4J.msk];
        if (!lp9g) {
            F4J.msk = gG7z++;
            lp9g = a4e.dj6d("iframe");
            lp9g.style.position = "absolute";
            R5W[F4J.msk] = lp9g
        }
        d4h.value = lp9g;
        var cj5o = lp9g.style;
        cj5o.top = (parseInt(a4e.dh6b(F4J, "top")) || 0) + "px";
        cj5o.left = (parseInt(a4e.dh6b(F4J, "left")) || 0) + "px";
        cj5o.width = F4J.offsetWidth + "px";
        cj5o.height = F4J.offsetHeight + "px";
        F4J.insertAdjacentElement("beforeBegin", lp9g)
    });
    be5j.buD8v = be5j.buD8v.eH6B(function (d4h) {
        d4h.stopped = !0;
        var lp9g = R5W[d4h.args[0].msk];
        if (!!lp9g) a4e.mS9J(lp9g)
    })
})();
(function () {
    var c4g = NEJ.P, O5T = c4g("nej.p"), a4e = c4g("nej.e"), be5j = c4g("nej.h");
    if (O5T.nB9s.trident1) return;
    be5j.BF4J = function () {
        var wx2x = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return be5j.BF4J.eH6B(function (d4h) {
            var bf5k = be5j.but8l.apply(be5j, d4h.args);
            if (!bf5k) {
                d4h.stopped = !0;
                return
            }
            var u4y = wx2x[bf5k[1]];
            if (!!u4y && ("on" + u4y).toLowerCase() in bf5k[0]) {
                bf5k[4] = bf5k[1];
                bf5k[1] = u4y;
                d4h.stopped = !0;
                d4h.value = bf5k
            }
        })
    }();
    be5j.WF1x = function (WL1x) {
        return !0
    };
    be5j.XC1x = be5j.XC1x.eH6B(function (d4h) {
        d4h.stopped = !0;
        var eO7H = d4h.args[0];
        a4e.ba5f(eO7H, "display", "none");
        try {
            eO7H.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {
        }
    })
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, O5T = c4g("nej.p"), a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        be5j = c4g("nej.h"), btv8n = {};
    if (O5T.nB9s.trident) return;
    be5j.Ix6r = be5j.Ix6r.eH6B(function (d4h) {
        d4h.stopped = !0;
        var i4m = d4h.args[0];
        if (!i4m) {
            d4h.value = null;
            return
        }
        var r4v = 0, m4q = [];
        while (!!i4m[r4v]) {
            m4q.push(i4m[r4v++])
        }
        d4h.value = m4q
    });
    be5j.bwi8a = be5j.bwi8a.eH6B(function (d4h) {
        d4h.stopped = !0;
        var bs5x = [];
        k4o.bd5i(d4h.args[0].childNodes, function (g4k) {
            if (g4k.nodeType == 1) bs5x.push(g4k)
        });
        d4h.value = bs5x
    });
    be5j.bwc8U = be5j.bwc8U.eH6B(function (d4h) {
        var F4J = d4h.args[0];
        if (!!F4J.getElementsByClassName) return;
        d4h.stopped = !0;
        var m4q = [], QP9G = new RegExp("(\\s|^)(?:" + d4h.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k4o.bd5i(F4J.getElementsByTagName("*"), function (g4k) {
            if (QP9G.test(g4k.className)) m4q.push(g4k)
        });
        d4h.value = m4q
    });
    be5j.bvC8u = be5j.bvC8u.eH6B(function (d4h) {
        var gf7Y = d4h.args[0], nJ9A = d4h.args[1];
        if (gf7Y.selectionStart == null) {
            d4h.stopped = !0;
            var dd6X = gf7Y.createTextRange();
            dd6X.collapse(!0);
            dd6X.moveStart("character", nJ9A.start);
            dd6X.moveEnd("character", nJ9A.end - nJ9A.start);
            dd6X.select();
            gf7Y.focus()
        }
    });
    be5j.bvB8t = be5j.bvB8t.eH6B(function (d4h) {
        var gf7Y = d4h.args[0];
        gf7Y.focus();
        if (gf7Y.selectionStart == null) {
            d4h.stopped = !0;
            var bMS3x = document.selection.createRange();
            var bOi3x = gf7Y.createTextRange();
            bOi3x.moveToBookmark(bMS3x.getBookmark());
            var btp7i = gf7Y.createTextRange();
            btp7i.collapse(!0);
            btp7i.setEndPoint("EndToStart", bOi3x);
            var hA8s = btp7i.text.length;
            d4h.value = {start: hA8s, end: hA8s + bMS3x.text.length}
        }
    });
    be5j.buT8L = be5j.buT8L.eH6B(function (d4h) {
        if (!!window.XMLSerializer) return;
        d4h.stopped = !0;
        var F4J = d4h.args[0];
        d4h.value = F4J.xml != null ? F4J.xml : F4J.outHTML
    });
    be5j.buK8C = function () {
        var Ra9R = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bXJ6D = function () {
            try {
                for (var i = 0, l = Ra9R.length; i < l; i++) return new ActiveXObject(Ra9R[i])
            } catch (ex) {
                return null
            }
        };
        return be5j.buK8C.eH6B(function (d4h) {
            if (!!window.DOMParser) return;
            d4h.stopped = !0;
            var nY0x = bXJ6D();
            if (!!nY0x && nY0x.loadXML(d4h.args[0]) && !nY0x.parseError.errorCode) d4h.value = nY0x.documentElement
        })
    }();
    be5j.BF4J = function () {
        var jl8d = {input: "propertychange", load: "readystatechange"};
        for (var x in jl8d) btv8n[jl8d[x]] = !0;
        var bYb7U = function (F4J, u4y) {
            if ("on" + u4y in F4J) return null;
            return jl8d[u4y] || ""
        };
        var bYg7Z = function (u4y, dx6r) {
            var cA5F = dx6r;
            switch (u4y) {
                case"readystatechange":
                    cA5F = function (d4h) {
                        var F4J = h4l.X5c(d4h) || this;
                        if (F4J.readyState == "loaded" || F4J.readyState == "complete") {
                            d4h.target = F4J;
                            dx6r.call(F4J, d4h)
                        }
                    };
                    break;
                case"propertychange":
                    cA5F = function (d4h) {
                        var F4J = h4l.X5c(d4h) || this;
                        if ("value" in F4J && d4h.propertyName == "value") {
                            d4h.target = F4J;
                            dx6r.call(F4J, d4h)
                        }
                    };
                    break
            }
            return cA5F
        };
        return be5j.BF4J.eH6B(function (d4h) {
            var bf5k = be5j.but8l.apply(be5j, d4h.args);
            if (!bf5k) {
                d4h.stopped = !0;
                return
            }
            var u4y = bYb7U(bf5k[0], bf5k[1]);
            if (!!u4y) {
                d4h.stopped = !0;
                bf5k[4] = bf5k[1];
                bf5k[1] = u4y;
                if (!!bf5k[2]) {
                    bf5k[5] = bf5k[2];
                    bf5k[2] = bYg7Z(bf5k[1], bf5k[2])
                }
                d4h.value = bf5k
            }
        }, function (d4h) {
            var bf5k = d4h.value;
            if (!bf5k[0] || !k4o.gK7D(bf5k[2])) return;
            if (!k4o.gK7D(bf5k[5])) bf5k[5] = bf5k[2];
            bf5k[2] = bf5k[2].f4j(bf5k[0])
        })
    }();
    be5j.bul8d = be5j.bul8d.eH6B(function (d4h) {
        var bf5k = d4h.args;
        if (!!btv8n[bf5k[1]] || !document.addEventListener) {
            d4h.stopped = !0;
            bf5k[0].attachEvent("on" + bf5k[1], bf5k[2])
        }
    });
    be5j.bdr3x = be5j.bdr3x.eH6B(function (d4h) {
        var bf5k = d4h.args;
        if (!!btv8n[bf5k[1]] || !document.removeEventListener) {
            d4h.stopped = !0;
            bf5k[0].detachEvent("on" + bf5k[1], bf5k[2])
        }
    });
    be5j.buh8Z = be5j.buh8Z.eH6B(function (d4h) {
        if (!document.createEvent) {
            d4h.stopped = !0;
            var bf5k = d4h.args, bTU5Z = document.createEventObject();
            NEJ.X(bTU5Z, bf5k[2]);
            try {
                bf5k[0].fireEvent("on" + bf5k[1], bTU5Z)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    be5j.buc8U = be5j.buc8U.eH6B(function (d4h) {
        var bf5k = d4h.args, W5b = bf5k[1].toLowerCase();
        if (W5b == "opacity" && !(W5b in document.body.style)) {
            bf5k[1] = "filter";
            bf5k[2] = "alpha(opacity=" + bf5k[2] * 100 + ")"
        }
    });
    be5j.btR8J = function () {
        var fo7h = 30;
        return be5j.btR8J.eH6B(function (d4h) {
            var F4J = d4h.args[0];
            if (!F4J.styleSheet) return;
            d4h.stopped = !0;
            var km8e = d4h.args[1];
            var i4m = document.styleSheets;
            if (i4m.length > fo7h) {
                F4J = i4m[fo7h];
                km8e = F4J.cssText + km8e
            } else {
                F4J = F4J.styleSheet
            }
            F4J.cssText = km8e
        })
    }();
    be5j.btQ8I = be5j.btQ8I.eH6B(function (d4h) {
        var bf5k = d4h.args, zH3x = bf5k[0].sheet;
        if (!!zH3x) return;
        d4h.stopped = !0;
        var zH3x = bf5k[0].styleSheet, bq5v = zH3x.rules.length, bs5x = bf5k[1].split(/[\{\}]/);
        zH3x.addRule(bs5x[0], bs5x[1], bq5v);
        d4h.value = zH3x.rules[bq5v]
    });
    be5j.bvy8q = function () {
        var DL4P = function (ed6X, d4h) {
            a4e.x4B(h4l.X5c(d4h), ed6X)
        };
        return be5j.bvy8q.eH6B(function (d4h) {
            if (O5T.dr6l.release >= "4.0") return;
            var bf5k = d4h.args;
            if (bf5k[1] != 1) {
                h4l.s4w(bf5k[0], "blur", DL4P.f4j(null, bf5k[2]));
                bf5k[1] = -1
            }
        })
    }();
    be5j.WF1x = function (WL1x) {
        return !0
    };
    be5j.btx8p = be5j.btx8p.eH6B(function (d4h) {
        var bf5k = d4h.args, g4k = (bf5k[0].attributes || bb5g)[bf5k[1]];
        if (!!g4k) {
            d4h.stopped = !0;
            d4h.value = g4k.value
        }
    }, function (d4h) {
        var bf5k = d4h.args;
        if (bf5k[1] == "maxlength" && d4h.value == 2147483647) d4h.value = ""
    });
    if (O5T.dr6l.release < 5) {
        be5j.buy8q = function () {
            var eg6a, eO7H, kt8l = [], bth7a = "cb-" + +(new Date),
                bo5t = '<script>parent.nej.h["' + bth7a + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bBY0x = function () {
                eg6a = window.clearTimeout(eg6a);
                if (!kt8l.length) return;
                var dR6L = kt8l.shift();
                try {
                    var xv2x = eO7H.contentWindow.document;
                    xv2x.open();
                    xv2x.write("<head><title>");
                    xv2x.write(document.title);
                    xv2x.write("</title>");
                    xv2x.write(bo5t.replace("#<HASH>", encodeURIComponent(dR6L)));
                    xv2x.write("</head><body></body>");
                    if (location.hostname != document.domain) xv2x.domain = document.domain;
                    xv2x.close();
                    be5j[bth7a] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    kt8l.unshift(dR6L)
                }
                eg6a = window.setTimeout(bBY0x, 50)
            };
            return be5j.buy8q.eH6B(function (d4h) {
                d4h.stopped = !0;
                var dR6L = d4h.args[0];
                if (!!be5j[bth7a] || !eO7H && !dR6L) return;
                kt8l.push(dR6L);
                if (!eO7H) eO7H = a4e.YH2x();
                bBY0x()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {
    }
})();
(function () {
    var c4g = NEJ.P, h4l = c4g("nej.v"), be5j = c4g("nej.h"), O5T = c4g("nej.p"), YW2x = O5T.bMe2x;
    if (O5T.nB9s.gecko) return;
    var Qt9k = function () {
        YW2x.css3d = YW2x.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function (iP8H, F4J) {
            if (!iP8H || !F4J) return;
            switch (iP8H) {
                case"beforeEnd":
                    this.appendChild(F4J);
                    return;
                case"beforeBegin":
                    this.parentNode.insertBefore(F4J, this);
                    return;
                case"afterBegin":
                    !this.firstChild ? this.appendChild(F4J) : this.insertBefore(F4J, this.firstChild);
                    return;
                case"afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(F4J) : this.parentNode.insertBefore(F4J, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (bo5t) {
                this.textContent = bo5t
            })
        }
    };
    be5j.BF4J = function () {
        var gL7E = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return be5j.BF4J.eH6B(function (d4h) {
            var bf5k = d4h.args;
            if (gL7E.test(bf5k[1] || "")) {
                d4h.stopped = !0;
                d4h.value = bf5k
            }
        })
    }();
    be5j.bXb6V = function () {
        var bYi7b = function (d4h) {
            h4l.bg5l(d4h);
            h4l.X5c(d4h).control.click()
        };
        return function (F4J) {
            h4l.s4w(F4J, "click", bYi7b)
        }
    }();
    Qt9k()
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), be5j = c4g("nej.h");
    var Zi2x = function () {
        var mM9D = !!document.body.classList;
        return function () {
            return mM9D
        }
    }();
    var bFw1x = function () {
        var df6Z = /\s+/g;
        return function (fP7I) {
            fP7I = (fP7I || "").trim();
            return !fP7I ? null : new RegExp("(\\s|^)(?:" + fP7I.replace(df6Z, "|") + ")(?=\\s|$)", "g")
        }
    }();
    be5j.Ux0x = be5j.Ux0x.eH6B(function (d4h) {
        if (Zi2x()) return;
        d4h.stopped = !0;
        var bf5k = d4h.args, F4J = a4e.B4F(bf5k[0]);
        if (!F4J || !bf5k[1] && !bf5k[2]) return;
        var fP7I = F4J.className || "";
        var Iy6s = " " + (bf5k[2] || ""), Iz6t = bFw1x((bf5k[1] || "") + Iy6s);
        !!Iz6t && (fP7I = fP7I.replace(Iz6t, "$1"));
        F4J.className = (fP7I + Iy6s).replace(/\s+/g, " ").trim()
    });
    be5j.bwb8T = be5j.bwb8T.eH6B(function (d4h) {
        if (Zi2x()) return;
        d4h.stopped = !0;
        var bf5k = d4h.args;
        be5j.Ux0x(bf5k[0], "", bf5k[1])
    });
    be5j.bvV8N = be5j.bvV8N.eH6B(function (d4h) {
        if (Zi2x()) return;
        d4h.stopped = !0;
        var bf5k = d4h.args;
        be5j.Ux0x(bf5k[0], bf5k[1], "")
    });
    be5j.bvO8G = be5j.bvO8G.eH6B(function (d4h) {
        if (Zi2x()) return;
        d4h.stopped = !0;
        var bf5k = d4h.args, F4J = a4e.B4F(bf5k[0]);
        if (!F4J) {
            d4h.value = !1;
            return
        }
        var df6Z = bFw1x(bf5k[1]);
        d4h.value = !df6Z ? !1 : df6Z.test(F4J.className || "")
    })
})();
(function () {
    var c4g = NEJ.P, O5T = c4g("nej.p"), be5j = c4g("nej.h");
    if (O5T.nB9s.webkit) return;
    be5j.WF1x = function (WL1x) {
        return !0
    }
})();
(function () {
    var c4g = NEJ.P, be5j = c4g("nej.h"), a4e = c4g("nej.e"), k4o = c4g("nej.u"), h4l = c4g("nej.v"),
        cZ6T = c4g("nej.x"), R5W = {};
    var bFG1x = function (F4J) {
        F4J = a4e.B4F(F4J);
        if (!F4J || !R5W[F4J.id]) return;
        var Zj2x = !0, C4G = F4J.id;
        k4o.eI6C(R5W[C4G], function () {
            Zj2x = !1;
            return !0
        });
        if (Zj2x) delete R5W[C4G]
    };
    h4l.s4w = cZ6T.s4w = function () {
        var bZe7X = function () {
            var bf5k = be5j.BF4J.apply(be5j, arguments);
            if (!bf5k || !bf5k[2]) return;
            var uo1x = a4e.lP9G(bf5k[0]), pk0x = R5W[uo1x] || {};
            R5W[uo1x] = pk0x;
            uo1x = bf5k[4] || bf5k[1];
            var BP4T = pk0x[uo1x] || [];
            pk0x[uo1x] = BP4T;
            BP4T.push({type: bf5k[1], func: bf5k[2], capt: !!bf5k[3], sfun: bf5k[5] || bf5k[2]});
            return bf5k.slice(0, 4)
        };
        return function () {
            var bf5k = bZe7X.apply(null, arguments);
            if (!!bf5k) be5j.bul8d.apply(be5j, bf5k);
            return this
        }
    }();
    h4l.mo9f = cZ6T.mo9f = function () {
        var bZf7Y = function () {
            var tG1x = arguments, uo1x = a4e.lP9G(tG1x[0]), pk0x = R5W[uo1x], u4y = (tG1x[1] || "").toLowerCase(),
                d4h = tG1x[2];
            if (!pk0x || !u4y || !d4h) return;
            pk0x = pk0x[u4y];
            if (!pk0x) return;
            var bZg7Z = !!tG1x[3], r4v = k4o.di6c(pk0x, function (jl8d) {
                return d4h == jl8d.sfun && bZg7Z == jl8d.capt
            });
            if (r4v < 0) return;
            var jl8d = pk0x.splice(r4v, 1)[0];
            return !jl8d ? null : [a4e.B4F(uo1x), jl8d.type, jl8d.func, jl8d.capt]
        };
        return function () {
            var bf5k = bZf7Y.apply(null, arguments);
            if (!!bf5k) {
                be5j.bdr3x.apply(be5j, bf5k);
                bFG1x(bf5k[0])
            }
            return this
        }
    }();
    h4l.he7X = cZ6T.he7X = function () {
        var bKB2x = function () {
            var tG1x = arguments, uo1x = a4e.lP9G(tG1x[0]), pk0x = R5W[uo1x], BP4T = (tG1x[1] || "").toLowerCase();
            if (!pk0x || !BP4T) return;
            var F4J = a4e.B4F(uo1x);
            k4o.nk9b(pk0x[BP4T], function (jl8d, r4v, i4m) {
                be5j.bdr3x(F4J, jl8d.type, jl8d.func, jl8d.capt);
                i4m.splice(r4v, 1)
            });
            delete pk0x[BP4T]
        };
        var bZh7a = function (F4J) {
            F4J = a4e.B4F(F4J);
            if (!F4J) return;
            var C4G = F4J.id;
            k4o.eI6C(R5W[C4G], function (i4m, u4y) {
                bKB2x(C4G, u4y)
            });
            delete R5W[C4G]
        };
        return function (F4J, u4y) {
            !u4y ? bZh7a(F4J) : bKB2x(F4J, u4y);
            bFG1x(F4J);
            return this
        }
    }();
    h4l.X5c = function () {
        var bsH7A;
        var Jl6f = function (W5b, F4J) {
            var bs5x = W5b.split(":");
            if (bs5x.length > 1) {
                if (!bsH7A) bsH7A = {c: a4e.bE5J, d: a4e.t4x, a: a4e.gJ7C};
                var Jm6g = bsH7A[bs5x[0]];
                if (!!Jm6g) return !!Jm6g(F4J, bs5x[1]);
                W5b = bs5x[1]
            }
            return !!a4e.gJ7C(F4J, W5b) || !!a4e.t4x(F4J, W5b) || a4e.bE5J(F4J, W5b)
        };
        return function (d4h) {
            if (!d4h) return null;
            var F4J = d4h.target || d4h.srcElement, dZ6T = arguments[1];
            if (!dZ6T) return F4J;
            if (k4o.fC7v(dZ6T)) dZ6T = Jl6f.f4j(null, dZ6T);
            if (k4o.gK7D(dZ6T)) {
                while (F4J) {
                    if (!!dZ6T(F4J)) return F4J;
                    F4J = F4J.parentNode
                }
                return null
            }
            return F4J
        }
    }();
    h4l.bg5l = function (d4h) {
        h4l.tW1x(d4h);
        h4l.cn5s(d4h);
        return this
    };
    h4l.tW1x = function (d4h) {
        if (!!d4h) {
            !!d4h.stopPropagation ? d4h.stopPropagation() : d4h.cancelBubble = !0
        }
        return this
    };
    h4l.cn5s = function (d4h) {
        if (!!d4h) {
            !!d4h.preventDefault ? d4h.preventDefault() : d4h.returnValue = !1
        }
        return this
    };
    h4l.cJG3x = function () {
        var ru1x = !1;
        var bZv7o = function () {
            if (ru1x) return;
            ru1x = !0;
            h4l.s4w(document, "click", bZK7D, !0)
        };
        var bZK7D = function (d4h) {
            var F4J = h4l.X5c(d4h), bZW7P = a4e.t4x(F4J, "stopped");
            if (bZW7P == "true") {
                h4l.bg5l(d4h);
                a4e.t4x(F4J, "stopped", "false")
            }
        };
        return function (d4h) {
            if (!d4h) return;
            if (d4h.type == "click") {
                h4l.bg5l(d4h);
                return
            }
            bZv7o();
            a4e.t4x(h4l.X5c(d4h), "stopped", "true")
        }
    }();
    h4l.jG8y = function (d4h) {
        return d4h.pageX != null ? d4h.pageX : d4h.clientX + a4e.oy0x().scrollLeft
    };
    h4l.lZ9Q = function (d4h) {
        return d4h.pageY != null ? d4h.pageY : d4h.clientY + a4e.oy0x().scrollTop
    };
    h4l.z4D = cZ6T.z4D = function (F4J, u4y, e4i) {
        var bf5k = be5j.BF4J(F4J, u4y);
        if (!!bf5k) be5j.buh8Z(bf5k[0], bf5k[1], e4i);
        return this
    };
    c4g("dbg").dumpEV = function () {
        return R5W
    };
    cZ6T.isChange = !0
})();
(function () {
    var o = !0, w = null;
    (function (B) {
        function v(a) {
            if ("bug-string-char-index" == a) return "a" != "a"[0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify, b = "function" == typeof d && l;
                    if (b) {
                        (f = function () {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({a: [f, o, !1, w, "\0\b\n\f\r\t"]}) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c) return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a) try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try {
                                    e = !a('"\t"')
                                } catch (g) {
                                }
                                if (e) try {
                                    e = 1 !== a("01")
                                } catch (i) {
                                }
                            }
                        }
                    } catch (O) {
                        e = !1
                    }
                    if (!c) return e
                }
                return b && e
            }
        }

        var m = {}.toString, p, C, r, D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {
        }
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l) var t = Math.floor, J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                z = function (a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty)) p = function (a) {
                var f = {}, c;
                if ((f.__proto__ = w, f.__proto__ = {toString: 1}, f).toString != m) p = function (a) {
                    var f = this.__proto__, a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                }; else {
                    c = f.constructor;
                    p = function (a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = {"boolean": 1, number: 1, string: 1, "undefined": 1};
            C = function (a, f) {
                var c = 0, b, h, n;
                (b = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h) p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ? function (a, f) {
                    var c = {}, b = m.call(a) == "[object Function]", d;
                    for (d in a) !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                } : function (a, f) {
                    var c = m.call(a) == "[object Function]", b, d;
                    for (b in a) !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b)
                }; else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function (a, f) {
                        var c = m.call(a) == "[object Function]", b, d;
                        if (d = !c) if (d = typeof a.constructor != "function") {
                            d = typeof a.hasOwnProperty;
                            d = d == "object" ? !!a.hasOwnProperty : !K[d]
                        }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a) !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b)) ;
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"},
                    u = function (a, f) {
                        return ("000000" + (f || 0)).slice(-a)
                    }, G = function (a) {
                        var f = '"', b = 0, d = a.length, h = d > 10 && s, n;
                        for (h && (n = a.split("")); b < d; b++) {
                            var e = a.charCodeAt(b);
                            switch (e) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    f = f + L[e];
                                    break;
                                default:
                                    if (e < 32) {
                                        f = f + ("\\u00" + u(2, e.toString(16)));
                                        break
                                    }
                                    f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                            }
                        }
                        return f + '"'
                    }, E = function (a, b, c, d, h, n, e) {
                        var g = b[a], i, j, k, l, q, s, v, x, y;
                        try {
                            g = b[a]
                        } catch (A) {
                        }
                        if (typeof g == "object" && g) {
                            i = m.call(g);
                            if (i == "[object Date]" && !p.call(g, "toJSON")) if (g > -1 / 0 && g < 1 / 0) {
                                if (z) {
                                    k = t(g / 864e5);
                                    for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++) ;
                                    for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++) ;
                                    k = 1 + k - z(i, j);
                                    l = (g % 864e5 + 864e5) % 864e5;
                                    q = t(l / 36e5) % 24;
                                    s = t(l / 6e4) % 60;
                                    v = t(l / 1e3) % 60;
                                    l = l % 1e3
                                } else {
                                    i = g.getUTCFullYear();
                                    j = g.getUTCMonth();
                                    k = g.getUTCDate();
                                    q = g.getUTCHours();
                                    s = g.getUTCMinutes();
                                    v = g.getUTCSeconds();
                                    l = g.getUTCMilliseconds()
                                }
                                g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                            } else g = w; else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                        }
                        c && (g = c.call(b, a, g));
                        if (g === w) return "null";
                        i = m.call(g);
                        if (i == "[object Boolean]") return "" + g;
                        if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if (i == "[object String]") return G("" + g);
                        if (typeof g == "object") {
                            for (a = e.length; a--;) if (e[a] === g) throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h;
                            if (i == "[object Array]") {
                                j = 0;
                                for (a = g.length; j < a; y || (y = o), j++) {
                                    i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i)
                                }
                                a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                            } else {
                                C(d || g, function (a) {
                                    var b = E(a, g, c, d, h, n, e);
                                    b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                    y || (y = o)
                                });
                                a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                            }
                            e.pop();
                            return a
                        }
                    };
                k.stringify = function (a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b) if (m.call(b) == "[object Function]") h = b; else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1)) ;
                    }
                    if (c) if (m.call(c) == "[object Number]") {
                        if ((c = c - c % 1) > 0) {
                            d = "";
                            for (c > 10 && (c = 10); d.length < c; d = d + " ") ;
                        }
                    } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                    N = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"}, b, A,
                    j = function () {
                        b = A = w;
                        throw SyntaxError()
                    }, q = function () {
                        for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                            e = a.charCodeAt(b);
                            switch (e) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    b++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    c = s ? a.charAt(b) : a[b];
                                    b++;
                                    return c;
                                case 34:
                                    c = "@";
                                    for (b++; b < f;) {
                                        e = a.charCodeAt(b);
                                        if (e < 32) j(); else if (e == 92) {
                                            e = a.charCodeAt(++b);
                                            switch (e) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    c = c + N[e];
                                                    b++;
                                                    break;
                                                case 117:
                                                    d = ++b;
                                                    for (h = b + 4; b < h; b++) {
                                                        e = a.charCodeAt(b);
                                                        e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                                    }
                                                    c = c + M("0x" + a.slice(d, b));
                                                    break;
                                                default:
                                                    j()
                                            }
                                        } else {
                                            if (e == 34) break;
                                            e = a.charCodeAt(b);
                                            for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
                                            c = c + a.slice(d, b)
                                        }
                                    }
                                    if (a.charCodeAt(b) == 34) {
                                        b++;
                                        return c
                                    }
                                    j();
                                default:
                                    d = b;
                                    if (e == 45) {
                                        k = o;
                                        e = a.charCodeAt(++b)
                                    }
                                    if (e >= 48 && e <= 57) {
                                        for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++) ;
                                        if (a.charCodeAt(b) == 46) {
                                            for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++) ;
                                            h == b && j();
                                            b = h
                                        }
                                        e = a.charCodeAt(b);
                                        if (e == 101 || e == 69) {
                                            e = a.charCodeAt(++b);
                                            (e == 43 || e == 45) && b++;
                                            for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++) ;
                                            h == b && j();
                                            b = h
                                        }
                                        return +a.slice(d, b)
                                    }
                                    k && j();
                                    if (a.slice(b, b + 4) == "true") {
                                        b = b + 4;
                                        return o
                                    }
                                    if (a.slice(b, b + 5) == "false") {
                                        b = b + 5;
                                        return false
                                    }
                                    if (a.slice(b, b + 4) == "null") {
                                        b = b + 4;
                                        return w
                                    }
                                    j()
                            }
                        }
                        return "$"
                    }, F = function (a) {
                        var b, c;
                        a == "$" && j();
                        if (typeof a == "string") {
                            if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                            if (a == "[") {
                                for (b = []; ; c || (c = o)) {
                                    a = q();
                                    if (a == "]") break;
                                    if (c) if (a == ",") {
                                        a = q();
                                        a == "]" && j()
                                    } else j();
                                    a == "," && j();
                                    b.push(F(a))
                                }
                                return b
                            }
                            if (a == "{") {
                                for (b = {}; ; c || (c = o)) {
                                    a = q();
                                    if (a == "}") break;
                                    if (c) if (a == ",") {
                                        a = q();
                                        a == "}" && j()
                                    } else j();
                                    (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q())
                                }
                                return b
                            }
                            j()
                        }
                        return a
                    }, I = function (a, b, c) {
                        c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c
                    }, H = function (a, b, c) {
                        var d = a[b], h;
                        if (typeof d == "object" && d) if (m.call(d) == "[object Array]") for (h = d.length; h--;) I(d, h, c); else C(d, function (a) {
                            I(d, a, c)
                        });
                        return c.call(a, b, d)
                    };
                k.parse = function (a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function () {
            return k
        })
    })(this)
})();
(function () {
    var c4g = NEJ.P, O5T = c4g("nej.p");
    if (O5T.nB9s.trident0) return;
    JSON.parse = JSON.parse.eH6B(function (d4h) {
        var cO6I = d4h.args[0] || "";
        if (cO6I.length >= 5e5) {
            d4h.stopped = !0;
            d4h.value = eval("(" + cO6I + ")")
        }
    })
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, em6g = c4g("nej.g"), a4e = c4g("nej.e"), k4o = c4g("nej.u"),
        h4l = c4g("nej.v"), be5j = c4g("nej.h"), cZ6T = c4g("nej.x"), Jt6n, brW7P = {},
        R5W = document.createDocumentFragment();
    a4e.lP9G = cZ6T.lP9G = function (F4J) {
        F4J = a4e.B4F(F4J);
        if (!F4J) return;
        var C4G = !!F4J.id ? F4J.id : "auto-id-" + k4o.TV0x(16);
        F4J.id = C4G;
        if (a4e.B4F(C4G) != F4J) brW7P[C4G] = F4J;
        return C4G
    };
    a4e.B4F = cZ6T.B4F = function (F4J) {
        var g4k = brW7P["" + F4J];
        if (!!g4k) return g4k;
        if (!k4o.fC7v(F4J) && !k4o.sN1x(F4J)) return F4J;
        return document.getElementById(F4J)
    };
    a4e.dk6e = cZ6T.dk6e = function (F4J, ed6X) {
        F4J = a4e.B4F(F4J);
        if (!F4J) return null;
        var i4m = be5j.bwi8a(F4J);
        if (!!ed6X) k4o.nk9b(i4m, function (g4k, r4v) {
            if (!a4e.bE5J(g4k, ed6X)) i4m.splice(r4v, 1)
        });
        return i4m
    };
    a4e.H4L = cZ6T.H4L = function (F4J, fP7I) {
        F4J = a4e.B4F(F4J);
        return !F4J ? null : be5j.bwc8U(F4J, fP7I.trim())
    };
    a4e.bFa1x = cZ6T.bFa1x = function (F4J) {
        F4J = a4e.B4F(F4J);
        if (!!F4J) {
            F4J = F4J.parentNode;
            while (!!F4J) {
                if (F4J.scrollHeight > F4J.clientHeight) break;
                F4J = F4J.parentNode
            }
            if (!!F4J) return F4J
        }
        var pk0x = document.body.scrollHeight, BP4T = document.documentElement.scrollHeight;
        return BP4T >= pk0x ? document.documentElement : document.body
    };
    a4e.oy0x = function () {
        var bFs1x = function (i4m) {
            var m4q = 0;
            k4o.bd5i(i4m, function (eG6A) {
                if (!eG6A) return;
                if (!m4q) {
                    m4q = eG6A
                } else {
                    m4q = Math.min(m4q, eG6A)
                }
            });
            return m4q
        };
        return function (xv2x) {
            var JB6v = xv2x || document, By4C = JB6v.body, BA4E = JB6v.documentElement, m4q = {
                scrollTop: Math.max(By4C.scrollTop, BA4E.scrollTop),
                scrollLeft: Math.max(By4C.scrollLeft, BA4E.scrollLeft),
                clientWidth: bFs1x([By4C.clientWidth, By4C.offsetWidth, BA4E.clientWidth, BA4E.offsetWidth]),
                clientHeight: bFs1x([By4C.clientHeight, By4C.offsetHeight, BA4E.clientHeight, BA4E.offsetHeight])
            };
            m4q.scrollWidth = Math.max(m4q.clientWidth, By4C.scrollWidth, BA4E.scrollWidth);
            m4q.scrollHeight = Math.max(m4q.clientHeight, By4C.scrollHeight, BA4E.scrollHeight);
            return m4q
        }
    }();
    a4e.cJA3x = function (fo7h, pq0x) {
        var m4q = NEJ.X({}, pq0x), bHp1x = fo7h.width / fo7h.height, beE4I = pq0x.width / pq0x.height;
        if (bHp1x > beE4I && pq0x.height > fo7h.height) {
            m4q.height = fo7h.height;
            m4q.width = m4q.height * beE4I
        }
        if (bHp1x < beE4I && pq0x.width > fo7h.width) {
            m4q.width = fo7h.width;
            m4q.height = m4q.width / beE4I
        }
        return m4q
    };
    a4e.cJz3x = function () {
        var df6Z = /\s+/;
        var vj2x = {
            left: function () {
                return 0
            }, center: function (hF8x, pq0x) {
                return (hF8x.width - pq0x.width) / 2
            }, right: function (hF8x, pq0x) {
                return hF8x.width - pq0x.width
            }, top: function () {
                return 0
            }, middle: function (hF8x, pq0x) {
                return (hF8x.height - pq0x.height) / 2
            }, bottom: function (hF8x, pq0x) {
                return hF8x.height - pq0x.height
            }
        };
        return function (hF8x, pq0x, or0x) {
            var m4q = {}, bs5x = (or0x || "").split(df6Z), gy7r = vj2x[bs5x[1]] || vj2x.middle,
                gW7P = vj2x[bs5x[0]] || vj2x.center;
            m4q.top = gy7r(hF8x, pq0x);
            m4q.left = gW7P(hF8x, pq0x);
            return m4q
        }
    }();
    a4e.sO1x = cZ6T.sO1x = function (F4J, ed6X) {
        be5j.bvN8F(F4J, ed6X || a4e.t4x(F4J, "hover") || "js-hover");
        return this
    };
    a4e.JF6z = cZ6T.JF6z = function (F4J) {
        F4J = a4e.B4F(F4J);
        if (!F4J) return;
        be5j.bvG8y(F4J)
    };
    a4e.caw7p = cZ6T.caw7p = function () {
        var R5W = {}, bKU2x = 2;
        var caQ7J = function (C4G, ed6X, d4h) {
            R5W[C4G] = [h4l.jG8y(d4h), h4l.lZ9Q(d4h)];
            a4e.y4C(C4G, ed6X)
        };
        var cbo7h = function (C4G, ed6X, d4h) {
            var bM5R = R5W[C4G];
            if (!k4o.eL7E(bM5R)) return;
            var cbF7y = Math.abs(h4l.jG8y(d4h) - bM5R[0]), cbH8z = Math.abs(h4l.lZ9Q(d4h) - bM5R[1]);
            if (cbF7y > bKU2x || cbH8z > bKU2x) bqA7t(C4G, ed6X)
        };
        var bqA7t = function (C4G, ed6X) {
            if (k4o.eL7E(R5W[C4G])) {
                R5W[C4G] = -1;
                a4e.x4B(C4G, ed6X)
            }
        };
        return function (F4J, ed6X) {
            var C4G = a4e.lP9G(F4J);
            if (!C4G || R5W[C4G] != null) return;
            R5W[C4G] = -1;
            ed6X = ed6X || a4e.t4x(C4G, "highlight") || "js-highlight";
            h4l.s4w(C4G, "touchstart", caQ7J.f4j(null, C4G, ed6X));
            h4l.s4w(document, "touchmove", cbo7h.f4j(null, C4G, ed6X));
            h4l.s4w(document, "touchend", bqA7t.f4j(null, C4G, ed6X));
            h4l.s4w(document, "touchcancel", bqA7t.f4j(null, C4G, ed6X))
        }
    }();
    a4e.AE3x = cZ6T.AE3x = function () {
        var cbX8P = function (C4G, ed6X, cbY8Q) {
            var F4J = a4e.B4F(C4G), d4h = {clazz: ed6X, target: F4J};
            if (a4e.bE5J(F4J, ed6X)) {
                d4h.toggled = !1;
                a4e.x4B(F4J, ed6X)
            } else {
                d4h.toggled = !0;
                a4e.y4C(F4J, ed6X)
            }
            cbY8Q.call(null, d4h)
        };
        return function (F4J, e4i) {
            F4J = a4e.B4F(F4J);
            if (!!F4J) {
                var in8f = {ontoggle: br5w, clazz: "js-toggle", element: F4J.parentNode};
                if (k4o.fC7v(e4i)) {
                    var g4k = a4e.B4F(e4i);
                    !!g4k ? in8f.element = g4k : in8f.clazz = e4i
                } else {
                    NEJ.EX(in8f, e4i);
                    in8f.element = a4e.B4F(in8f.element)
                }
                var C4G = a4e.lP9G(in8f.element);
                h4l.s4w(F4J, "click", cbX8P.f4j(null, C4G, in8f.clazz, in8f.ontoggle || br5w))
            }
            return this
        }
    }();
    a4e.my9p = cZ6T.my9p = function (F4J, e4i) {
        F4J = a4e.B4F(F4J);
        if (!F4J) return;
        var fk7d = 0, ed6X = "js-focus";
        if (k4o.sN1x(e4i)) {
            fk7d = e4i
        } else if (k4o.fC7v(e4i)) {
            ed6X = e4i
        } else if (k4o.lG9x(e4i)) {
            fk7d = e4i.mode || fk7d;
            ed6X = e4i.clazz || ed6X
        }
        var D4H = parseInt(a4e.t4x(F4J, "mode"));
        if (!isNaN(D4H)) fk7d = D4H;
        D4H = a4e.t4x(F4J, "focus");
        if (!!D4H) ed6X = D4H;
        be5j.bvy8q(F4J, fk7d, ed6X);
        return this
    };
    a4e.dj6d = function () {
        var bz5E = {
            a: {href: "#", hideFocus: !0},
            style: {type: "text/css"},
            link: {type: "text/css", rel: "stylesheet"},
            iframe: {frameBorder: 0},
            script: {defer: !0, type: "text/javascript"}
        };
        return function (fw7p, fP7I, bI5N) {
            var F4J = document.createElement(fw7p);
            NEJ.X(F4J, bz5E[fw7p.toLowerCase()]);
            if (!!fP7I) F4J.className = fP7I;
            bI5N = a4e.B4F(bI5N);
            if (!!bI5N) bI5N.appendChild(F4J);
            return F4J
        }
    }();
    a4e.YH2x = function () {
        var ccA8s = function () {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var cdc8U = function (W5b) {
            W5b = W5b.trim();
            if (!W5b) return a4e.dj6d("iframe");
            var eO7H;
            try {
                eO7H = document.createElement('<iframe name="' + W5b + '"></iframe>');
                eO7H.frameBorder = 0
            } catch (e) {
                eO7H = a4e.dj6d("iframe");
                eO7H.name = W5b
            }
            return eO7H
        };
        return function (e4i) {
            e4i = e4i || bb5g;
            var eO7H = cdc8U(e4i.name || "");
            if (!e4i.visible) eO7H.style.display = "none";
            if (k4o.gK7D(e4i.onload)) h4l.s4w(eO7H, "load", function (d4h) {
                if (!eO7H.src) return;
                h4l.he7X(eO7H, "load");
                e4i.onload(d4h)
            });
            var bI5N = e4i.parent;
            if (k4o.gK7D(bI5N)) {
                try {
                    bI5N(eO7H)
                } catch (e) {
                }
            } else {
                (a4e.B4F(bI5N) || document.body).appendChild(eO7H)
            }
            var cV6P = e4i.src || ccA8s();
            window.setTimeout(function () {
                eO7H.src = cV6P
            }, 0);
            return eO7H
        }
    }();
    a4e.cL6F = cZ6T.cL6F = function () {
        var bTt5y = function (Af3x) {
            Af3x.src = em6g.bwt8l
        };
        var bUy6s = function (en6h) {
            en6h.src = "about:blank"
        };
        return function (F4J, cds8k) {
            F4J = a4e.B4F(F4J);
            if (!F4J) return this;
            if (!cds8k) h4l.he7X(F4J);
            delete brW7P[F4J.id];
            var fw7p = F4J.tagName;
            if (fw7p == "IFRAME") {
                bUy6s(F4J)
            } else if (fw7p == "IMG") {
                bTt5y(F4J)
            } else if (!!F4J.getElementsByTagName) {
                k4o.bd5i(F4J.getElementsByTagName("img"), bTt5y);
                k4o.bd5i(F4J.getElementsByTagName("iframe"), bUy6s)
            }
            if (!!F4J.parentNode) {
                F4J.parentNode.removeChild(F4J)
            }
            return this
        }
    }();
    a4e.mS9J = cZ6T.mS9J = function (F4J) {
        F4J = a4e.B4F(F4J);
        if (!!F4J) R5W.appendChild(F4J);
        return this
    };
    a4e.bVz6t = cZ6T.bVz6t = function (F4J) {
        F4J = a4e.B4F(F4J);
        if (!F4J) return;
        k4o.nk9b(F4J.childNodes, function (g4k) {
            a4e.cL6F(g4k)
        })
    };
    a4e.JW6Q = cZ6T.JW6Q = function () {
        var ed6X, gL7E = /\s+/;
        var cdL8D = function () {
            if (!!ed6X) return;
            ed6X = a4e.to1x(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a4e.bzT9K()
        };
        return function (F4J, e4i) {
            F4J = a4e.B4F(F4J);
            if (!F4J) return;
            cdL8D();
            e4i = e4i || bb5g;
            var bI5N = F4J.parentNode;
            if (!a4e.bE5J(bI5N, ed6X)) {
                bI5N = a4e.dj6d("span", ed6X);
                F4J.insertAdjacentElement("beforeBegin", bI5N);
                bI5N.appendChild(F4J)
            }
            var bBk0x = e4i.nid || "", g4k = a4e.H4L(bI5N, bBk0x || ed6X + "-show")[0];
            if (!g4k) {
                var ec6W = ((e4i.clazz || "") + " " + bBk0x).trim();
                ec6W = ed6X + "-show" + (!ec6W ? "" : " ") + ec6W;
                g4k = a4e.dj6d(e4i.tag || "span", ec6W);
                bI5N.appendChild(g4k)
            }
            var ec6W = e4i.clazz;
            if (!!ec6W) {
                ec6W = (ec6W || "").trim().split(gL7E)[0] + "-parent";
                a4e.y4C(bI5N, ec6W)
            }
            return g4k
        }
    }();
    a4e.t4x = cZ6T.t4x = function () {
        var bqi7b = {}, fw7p = "data-", df6Z = /\-(.{1})/gi;
        var Eh4l = function (F4J) {
            var C4G = a4e.lP9G(F4J);
            if (!!bqi7b[C4G]) return;
            var bz5E = {};
            k4o.bd5i(F4J.attributes, function (g4k) {
                var K4O = g4k.nodeName;
                if (K4O.indexOf(fw7p) != 0) return;
                K4O = K4O.replace(fw7p, "").replace(df6Z, function ($1, $2) {
                    return $2.toUpperCase()
                });
                bz5E[K4O] = g4k.nodeValue || ""
            });
            bqi7b[C4G] = bz5E
        };
        return function (F4J, K4O, D4H) {
            F4J = a4e.B4F(F4J);
            if (!F4J) return null;
            var XB1x = F4J.dataset;
            if (!XB1x) {
                Eh4l(F4J);
                XB1x = bqi7b[F4J.id]
            }
            if (D4H !== undefined) XB1x[K4O] = D4H;
            return XB1x[K4O]
        }
    }();
    a4e.gJ7C = cZ6T.gJ7C = function (F4J, W5b, D4H) {
        F4J = a4e.B4F(F4J);
        if (!F4J) return "";
        if (D4H !== undefined && !!F4J.setAttribute) F4J.setAttribute(W5b, D4H);
        return be5j.btx8p(F4J, W5b)
    };
    a4e.nR0x = function (dV6P) {
        var rK1x = document.createElement("div");
        rK1x.innerHTML = dV6P;
        var i4m = a4e.dk6e(rK1x);
        return i4m.length > 1 ? rK1x : i4m[0]
    };
    a4e.cdX8P = cZ6T.cdX8P = function (F4J) {
        F4J = a4e.B4F(F4J);
        return !F4J ? "" : be5j.buT8L(F4J)
    };
    a4e.bEb0x = function (CV4Z) {
        CV4Z = (CV4Z || "").trim();
        return !CV4Z ? null : be5j.buK8C(CV4Z)
    };
    a4e.ces8k = function (cK6E, u4y) {
        cK6E = cK6E || "";
        switch (u4y) {
            case"xml":
                cK6E = a4e.bEb0x(cK6E);
                break;
            case"json":
                try {
                    cK6E = JSON.parse(cK6E)
                } catch (ex) {
                    cK6E = null
                }
                break
        }
        return cK6E
    };
    a4e.hU8M = cZ6T.hU8M = function () {
        var cfl8d = function (F4J) {
            return F4J == document.body || F4J == document.documentElement
        };
        return function (ee6Y, nb9S) {
            ee6Y = a4e.B4F(ee6Y);
            if (!ee6Y) return null;
            nb9S = a4e.B4F(nb9S) || null;
            var m4q = {x: 0, y: 0}, bpG7z, dq6k, Yx2x;
            while (!!ee6Y && ee6Y != nb9S) {
                bpG7z = cfl8d(ee6Y);
                dq6k = bpG7z ? 0 : ee6Y.scrollLeft;
                Yx2x = parseInt(a4e.dh6b(ee6Y, "borderLeftWidth")) || 0;
                m4q.x += ee6Y.offsetLeft + Yx2x - dq6k;
                dq6k = bpG7z ? 0 : ee6Y.scrollTop;
                Yx2x = parseInt(a4e.dh6b(ee6Y, "borderTopWidth")) || 0;
                m4q.y += ee6Y.offsetTop + Yx2x - dq6k;
                ee6Y = ee6Y.offsetParent
            }
            return m4q
        }
    }();
    a4e.mX9O = cZ6T.mX9O = function (F4J) {
        var bi5n = a4e.hU8M(F4J);
        window.scrollTo(bi5n.x, bi5n.y);
        return this
    };
    a4e.cIY3x = function (sX1x) {
        sX1x = (sX1x || "").trim();
        return be5j.bBR0x(sX1x)
    };
    a4e.cfp8h = cZ6T.cfp8h = function (F4J, W5b, bz5E) {
        F4J = a4e.B4F(F4J);
        if (!F4J) return this;
        var D4H = be5j.bFY1x(W5b, bz5E);
        if (!D4H) return this;
        a4e.ba5f(F4J, "transform", D4H);
        return this
    };
    a4e.fb7U = cZ6T.fb7U = function (F4J, bz5E) {
        F4J = a4e.B4F(F4J);
        if (!!F4J) k4o.eI6C(bz5E, function (D4H, W5b) {
            a4e.ba5f(F4J, W5b, D4H)
        });
        return this
    };
    a4e.cfE8w = cZ6T.cfE8w = function (gf7Y, e4i) {
        gf7Y = a4e.B4F(gf7Y);
        if (!gf7Y) return {start: 0, end: 0};
        if (k4o.sN1x(e4i)) e4i = {start: e4i, end: e4i};
        if (e4i != null) {
            if (e4i.end == null) e4i.end = e4i.start || 0;
            be5j.bvC8u(gf7Y, e4i)
        } else {
            e4i = be5j.bvB8t(gf7Y)
        }
        return e4i
    };
    a4e.ba5f = cZ6T.ba5f = function (F4J, W5b, D4H) {
        F4J = a4e.B4F(F4J);
        if (!!F4J) be5j.buc8U(F4J, W5b, D4H);
        return this
    };
    a4e.dh6b = cZ6T.dh6b = function (F4J, W5b) {
        F4J = a4e.B4F(F4J);
        if (!F4J) return "";
        var hi7b = !window.getComputedStyle ? F4J.currentStyle || bb5g : window.getComputedStyle(F4J, null);
        return hi7b[be5j.bJA2x(W5b)] || ""
    };
    a4e.bHG1x = function () {
        var df6Z = /[\s\r\n]+/gi;
        return function (cj5o) {
            cj5o = (cj5o || "").trim().replace(df6Z, " ");
            if (!cj5o) return;
            var g4k = a4e.dj6d("style");
            document.head.appendChild(g4k);
            be5j.btR8J(g4k, be5j.bWW6Q(cj5o));
            return g4k
        }
    }();
    a4e.bHS1x = function (Av3x) {
        try {
            Av3x = Av3x.trim();
            if (!!Av3x) return (new Function(Av3x))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a4e.to1x = function () {
        var df6Z = /#<.*?>/g, gG7z = +(new Date);
        return function (km8e) {
            if (!Jt6n) Jt6n = [];
            var fP7I = "auto-" + gG7z++;
            Jt6n.push(km8e.replace(df6Z, fP7I));
            return fP7I
        }
    }();
    a4e.bzT9K = function () {
        if (!!Jt6n) {
            a4e.bHG1x(Jt6n.join(""));
            Jt6n = null
        }
        return this
    };
    a4e.cIV3x = function (cj5o, km8e) {
        cj5o = a4e.B4F(cj5o);
        return !cj5o ? null : be5j.btQ8I(cj5o, km8e)
    };
    a4e.y4C = cZ6T.y4C = function () {
        be5j.bwb8T.apply(be5j, arguments);
        return this
    };
    a4e.x4B = cZ6T.x4B = function () {
        be5j.bvV8N.apply(be5j, arguments);
        return this
    };
    a4e.fj7c = cZ6T.fj7c = function () {
        be5j.Ux0x.apply(be5j, arguments);
        return this
    };
    a4e.bE5J = cZ6T.bE5J = function () {
        return be5j.bvO8G.apply(be5j, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cZ6T.isChange = !0
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, fy7r = NEJ.R, br5w = NEJ.F, a4e = c4g("nej.e"), be5j = c4g("nej.h"),
        k4o = c4g("nej.u");
    var El4p = function (j4n, u4y) {
        try {
            u4y = u4y.toLowerCase();
            if (j4n === null) return u4y == "null";
            if (j4n === undefined) return u4y == "undefined";
            return bb5g.toString.call(j4n).toLowerCase() == "[object " + u4y + "]"
        } catch (e) {
            return !1
        }
    };
    k4o.gK7D = function (j4n) {
        return El4p(j4n, "function")
    };
    k4o.fC7v = function (j4n) {
        return El4p(j4n, "string")
    };
    k4o.sN1x = function (j4n) {
        return El4p(j4n, "number")
    };
    k4o.cIU3x = function (j4n) {
        return El4p(j4n, "boolean")
    };
    k4o.Em4q = function (j4n) {
        return El4p(j4n, "date")
    };
    k4o.eL7E = function (j4n) {
        return El4p(j4n, "array")
    };
    k4o.lG9x = function (j4n) {
        return El4p(j4n, "object")
    };
    k4o.fv7o = function () {
        var df6Z = /[^\x00-\xfff]/g;
        return function (bo5t) {
            return ("" + (bo5t || "")).replace(df6Z, "**").length
        }
    }();
    k4o.di6c = function (i4m, p4t) {
        var dZ6T = k4o.gK7D(p4t) ? p4t : function (D4H) {
            return D4H === p4t
        }, r4v = k4o.eI6C(i4m, dZ6T);
        return r4v != null ? r4v : -1
    };
    k4o.cIQ3x = function () {
        var bKM2x;
        var NS8K = function (i4m, pp0x, po0x) {
            if (pp0x > po0x) return -1;
            var Eq5v = Math.ceil((pp0x + po0x) / 2), m4q = bKM2x(i4m[Eq5v], Eq5v, i4m);
            if (m4q == 0) return Eq5v;
            if (m4q < 0) return NS8K(i4m, pp0x, Eq5v - 1);
            return NS8K(i4m, Eq5v + 1, po0x)
        };
        return function (i4m, Jm6g) {
            bKM2x = Jm6g || br5w;
            return NS8K(i4m, 0, i4m.length - 1)
        }
    }();
    k4o.nk9b = function (i4m, cA5F, P5U) {
        if (!i4m || !i4m.length || !k4o.gK7D(cA5F)) return null;
        for (var i = i4m.length - 1; i >= 0; i--) if (!!cA5F.call(P5U, i4m[i], i, i4m)) return i;
        return null
    };
    k4o.bd5i = function (i4m, cA5F, P5U) {
        if (!i4m || !i4m.length || !k4o.gK7D(cA5F)) return this;
        if (!!i4m.forEach) {
            i4m.forEach(cA5F, P5U);
            return this
        }
        for (var i = 0, l = i4m.length; i < l; i++) cA5F.call(P5U, i4m[i], i, i4m);
        return this
    };
    k4o.eI6C = function (i4m, cA5F, P5U) {
        if (!i4m || !k4o.gK7D(cA5F)) return null;
        if (i4m.length != null) {
            if (i4m.length > 0) for (var i = 0, l = i4m.length; i < l; i++) if (!!cA5F.call(P5U, i4m[i], i, i4m)) return i
        }
        if (k4o.lG9x(i4m)) {
            for (var x in i4m) if (i4m.hasOwnProperty(x) && !!cA5F.call(P5U, i4m[x], x, i4m)) return x
        }
        return null
    };
    k4o.cgp9g = function (jq8i, cgs9j, e4i) {
        jq8i = jq8i || [];
        e4i = e4i || bb5g;
        var bPr3x = !!e4i.union, xt2x = !!e4i.begin, Zu2x = e4i.compare, cgP9G = bPr3x && xt2x ? k4o.nk9b : k4o.bd5i;
        cgP9G(cgs9j, function (p4t) {
            if (!!Zu2x) Zu2x = Zu2x.eA6u(p4t);
            var r4v = k4o.di6c(jq8i, Zu2x || p4t);
            if (r4v >= 0) jq8i.splice(r4v, 1);
            if (bPr3x) jq8i[xt2x ? "unshift" : "push"](p4t)
        });
        return jq8i
    };
    k4o.Dq4u = function (bz5E, bo5t) {
        if (!bz5E || !bo5t || !bo5t.replace) return bo5t || "";
        return bo5t.replace(bz5E.r, function ($1) {
            var m4q = bz5E[!bz5E.i ? $1.toLowerCase() : $1];
            return m4q != null ? m4q : $1
        })
    };
    k4o.dH6B = function () {
        var bz5E = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function (bo5t) {
            return k4o.Dq4u(bz5E, bo5t)
        }
    }();
    k4o.Dw4A = function () {
        var bz5E = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (bo5t) {
            return k4o.Dq4u(bz5E, bo5t)
        }
    }();
    k4o.ih8Z = function () {
        var bz5E = {i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g}, cgV9M = ["上午", "下午"],
            cgX9O = ["A.M.", "P.M."], boE6y = ["日", "一", "二", "三", "四", "五", "六"],
            chc9T = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            chI9z = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var Oo8g = function (gX7Q) {
            gX7Q = parseInt(gX7Q) || 0;
            return (gX7Q < 10 ? "0" : "") + gX7Q
        };
        var chO9F = function (qf0x) {
            return qf0x < 12 ? 0 : 1
        };
        return function (bA5F, Kr6l, cia9R) {
            if (!bA5F || !Kr6l) return "";
            bA5F = k4o.baa2x(bA5F);
            bz5E.yyyy = bA5F.getFullYear();
            bz5E.yy = ("" + bz5E.yyyy).substr(2);
            bz5E.M = bA5F.getMonth() + 1;
            bz5E.MM = Oo8g(bz5E.M);
            bz5E.eM = chI9z[bz5E.M - 1];
            bz5E.cM = chc9T[bz5E.M - 1];
            bz5E.d = bA5F.getDate();
            bz5E.dd = Oo8g(bz5E.d);
            bz5E.H = bA5F.getHours();
            bz5E.HH = Oo8g(bz5E.H);
            bz5E.m = bA5F.getMinutes();
            bz5E.mm = Oo8g(bz5E.m);
            bz5E.s = bA5F.getSeconds();
            bz5E.ss = Oo8g(bz5E.s);
            bz5E.ms = bA5F.getMilliseconds();
            bz5E.w = boE6y[bA5F.getDay()];
            var bzH9y = chO9F(bz5E.H);
            bz5E.ct = cgV9M[bzH9y];
            bz5E.et = cgX9O[bzH9y];
            if (!!cia9R) {
                bz5E.H = bz5E.H % 12
            }
            return k4o.Dq4u(bz5E, Kr6l)
        }
    }();
    k4o.baa2x = function (bA5F) {
        var da6U = bA5F;
        if (k4o.fC7v(bA5F)) da6U = new Date(Date.parse(bA5F));
        if (!k4o.Em4q(bA5F)) da6U = new Date(bA5F);
        return da6U
    };
    k4o.JF6z = function (cii9Z, ciE9v) {
        return (new Number(cii9Z)).toFixed(ciE9v)
    };
    k4o.bot6n = function () {
        var gL7E = /([^\/:])\/.*$/, kn8f = /\/[^\/]+$/, Ev5A = /[#\?]/, boq6k = location.href.split(/[?#]/)[0],
            tz1x = document.createElement("a");
        var bom6g = function (jn8f) {
            return (jn8f || "").indexOf("://") > 0
        };
        var bCe0x = function (jn8f) {
            return (jn8f || "").split(Ev5A)[0].replace(kn8f, "/")
        };
        var ciI9z = function (jn8f, fZ7S) {
            if (jn8f.indexOf("/") == 0) return fZ7S.replace(gL7E, "$1") + jn8f;
            return bCe0x(fZ7S) + jn8f
        };
        boq6k = bCe0x(boq6k);
        return function (jn8f, fZ7S) {
            jn8f = (jn8f || "").trim();
            if (!bom6g(fZ7S)) fZ7S = boq6k;
            if (!jn8f) return fZ7S;
            if (bom6g(jn8f)) return jn8f;
            jn8f = ciI9z(jn8f, fZ7S);
            tz1x.href = jn8f;
            jn8f = tz1x.href;
            return bom6g(jn8f) ? jn8f : tz1x.getAttribute("href", 4)
        }
    }();
    k4o.cjc9T = function () {
        var df6Z = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (Y5d) {
            if (df6Z.test(Y5d || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k4o.bCN0x = function (G4K, in8f) {
        if (!G4K) return in8f;
        var W5b = G4K.tagName.toLowerCase(), i4m = a4e.dk6e(G4K);
        if (!i4m || !i4m.length) {
            in8f[W5b] = G4K.textContent || G4K.text || "";
            return in8f
        }
        var cl5q = {};
        in8f[W5b] = cl5q;
        k4o.bd5i(i4m, function (g4k) {
            k4o.bCN0x(g4k, cl5q)
        });
        return in8f
    };
    k4o.cIt3x = function (CV4Z) {
        try {
            return k4o.bCN0x(a4e.bEb0x(CV4Z), {})
        } catch (ex) {
            return null
        }
    };
    k4o.OE8w = function (hX8P, OI8A) {
        var in8f = {};
        k4o.bd5i((hX8P || "").split(OI8A), function (W5b) {
            var bbu3x = W5b.split("=");
            if (!bbu3x || !bbu3x.length) return;
            var K4O = bbu3x.shift();
            if (!K4O) return;
            in8f[decodeURIComponent(K4O)] = decodeURIComponent(bbu3x.join("="))
        });
        return in8f
    };
    k4o.vH2x = function (gq7j, OI8A, ckh0x) {
        if (!gq7j) return "";
        var bs5x = [];
        for (var x in gq7j) {
            bs5x.push(encodeURIComponent(x) + "=" + (!!ckh0x ? encodeURIComponent(gq7j[x]) : gq7j[x]))
        }
        return bs5x.join(OI8A || ",")
    };
    k4o.hq8i = function (bv5A) {
        return k4o.OE8w(bv5A, "&")
    };
    k4o.cD6x = function (gq7j) {
        return k4o.vH2x(gq7j, "&", !0)
    };
    k4o.cIr3x = function (gq7j) {
        return be5j.Ix6r(gq7j)
    };
    k4o.cIq3x = function (i4m, dZ6T) {
        var m4q = {};
        k4o.bd5i(i4m, function (p4t) {
            var K4O = p4t;
            if (!!dZ6T) {
                K4O = dZ6T(p4t)
            }
            m4q[K4O] = p4t
        });
        return m4q
    };
    k4o.cIp3x = function (gX7Q, gc7V) {
        var ckn0x = ("" + gX7Q).length, ckq0x = Math.max(1, parseInt(gc7V) || 0), dq6k = ckq0x - ckn0x;
        if (dq6k > 0) {
            gX7Q = (new Array(dq6k + 1)).join("0") + gX7Q
        }
        return "" + gX7Q
    };
    k4o.bbS3x = function (gq7j, W5b) {
        if (!k4o.eL7E(W5b)) {
            try {
                delete gq7j[W5b]
            } catch (e) {
                gq7j[W5b] = undefined
            }
            return this
        }
        k4o.bd5i(W5b, k4o.bbS3x.f4j(k4o, gq7j));
        return this
    };
    k4o.TV0x = function () {
        var bGr1x = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (bq5v) {
            bq5v = bq5v || 10;
            var m4q = [];
            for (var i = 0, bGs1x; i < bq5v; ++i) {
                bGs1x = Math.floor(Math.random() * bGr1x.length);
                m4q.push(bGr1x.charAt(bGs1x))
            }
            return m4q.join("")
        }
    }();
    k4o.DA4E = function (fE7x, fo7h) {
        return Math.floor(Math.random() * (fo7h - fE7x) + fE7x)
    };
    k4o.ol0x = function (bq5v) {
        bq5v = Math.max(0, Math.min(bq5v || 8, 30));
        var fE7x = Math.pow(10, bq5v - 1), fo7h = fE7x * 10;
        return k4o.DA4E(fE7x, fo7h).toString()
    };
    k4o.bbZ3x = function () {
        var gG7z = +(new Date);
        return function () {
            return "" + gG7z++
        }
    }()
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, fy7r = NEJ.R, br5w = NEJ.F, h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        O5T = c4g("nej.ut"), oI0x;
    if (!!O5T.cJ6D) return;
    O5T.cJ6D = NEJ.C();
    oI0x = O5T.cJ6D.prototype;
    O5T.cJ6D.A4E = function (e4i) {
        e4i = e4i || {};
        var cF6z = !!this.AV4Z && this.AV4Z.shift();
        if (!cF6z) {
            cF6z = new this(e4i);
            this.ckw0x = (this.ckw0x || 0) + 1
        }
        cF6z.bl5q(e4i);
        return cF6z
    };
    O5T.cJ6D.T5Y = function () {
        var Po9f = function (p4t, r4v, i4m) {
            p4t.T5Y();
            i4m.splice(r4v, 1)
        };
        return function (cF6z) {
            if (!cF6z) return null;
            if (!k4o.eL7E(cF6z)) {
                if (!(cF6z instanceof this)) {
                    var fP7I = cF6z.constructor;
                    if (!!fP7I.T5Y) fP7I.T5Y(cF6z);
                    return null
                }
                if (cF6z == this.fg7Z) delete this.fg7Z;
                if (cF6z == this.BB4F) delete this.BB4F;
                cF6z.bC5H();
                if (!this.AV4Z) this.AV4Z = [];
                if (k4o.di6c(this.AV4Z, cF6z) < 0) {
                    this.AV4Z.push(cF6z)
                }
                return null
            }
            k4o.nk9b(cF6z, Po9f, this)
        }
    }();
    O5T.cJ6D.gm7f = function (e4i) {
        e4i = e4i || {};
        if (!this.fg7Z) this.fg7Z = this.A4E(e4i);
        return this.fg7Z
    };
    O5T.cJ6D.bKi2x = function (e4i, rT1x) {
        e4i = e4i || {};
        if (!!rT1x && !!this.BB4F) {
            this.BB4F.T5Y();
            delete this.BB4F
        }
        if (!this.BB4F) {
            this.BB4F = this.A4E(e4i)
        } else {
            this.BB4F.bl5q(e4i)
        }
        return this.BB4F
    };
    oI0x.cw5B = function () {
        var gG7z = +(new Date);
        return function () {
            this.id = gG7z++;
            this.lV9M = {};
            this.bKJ2x = {}
        }
    }();
    oI0x.bl5q = function (e4i) {
        this.bne6Y(e4i)
    };
    oI0x.bC5H = function () {
        this.he7X();
        this.KO6I()
    };
    oI0x.bX5c = function () {
        var gG7z = +(new Date);
        var ckT0x = function (bf5k) {
            if (!bf5k || bf5k.length < 3) return;
            this.bKJ2x["de-" + gG7z++] = bf5k;
            h4l.s4w.apply(h4l, bf5k)
        };
        return function (i4m) {
            k4o.bd5i(i4m, ckT0x, this)
        }
    }();
    oI0x.KO6I = function () {
        var ckV0x = function (bf5k, K4O, bz5E) {
            delete bz5E[K4O];
            h4l.mo9f.apply(h4l, bf5k)
        };
        return function () {
            k4o.eI6C(this.bKJ2x, ckV0x)
        }
    }();
    oI0x.cIi3x = function (dZ6T) {
        dZ6T = dZ6T || br5w;
        k4o.eI6C(this, function (EC5H, K4O, bz5E) {
            if (!!EC5H && !!EC5H.T5Y && !dZ6T(EC5H)) {
                delete bz5E[K4O];
                EC5H.T5Y()
            }
        })
    };
    oI0x.T5Y = function () {
        this.constructor.T5Y(this)
    };
    oI0x.bmH6B = function (u4y) {
        var d4h = this.lV9M[u4y.toLowerCase()];
        return !!d4h && d4h !== br5w
    };
    oI0x.s4w = function (u4y, d4h) {
        this.wq2x.apply(this, arguments);
        return this
    };
    oI0x.mo9f = function (u4y, d4h) {
        var u4y = (u4y || "").toLowerCase(), eh6b = this.lV9M[u4y];
        if (!k4o.eL7E(eh6b)) {
            if (eh6b == d4h) delete this.lV9M[u4y];
            return
        }
        k4o.nk9b(eh6b, function (ev6p, r4v, i4m) {
            if (ev6p == d4h) i4m.splice(r4v, 1)
        })
    };
    oI0x.wq2x = function (u4y, d4h) {
        if (!!u4y && k4o.gK7D(d4h)) this.lV9M[u4y.toLowerCase()] = d4h;
        return this
    };
    oI0x.bne6Y = function () {
        var cmQ0x = function (d4h, u4y) {
            this.wq2x(u4y, d4h)
        };
        return function (eh6b) {
            k4o.eI6C(eh6b, cmQ0x, this);
            return this
        }
    }();
    oI0x.he7X = function () {
        var bmC6w = function (d4h, u4y) {
            this.he7X(u4y)
        };
        return function (u4y) {
            var u4y = (u4y || "").toLowerCase();
            if (!!u4y) {
                delete this.lV9M[u4y]
            } else {
                k4o.eI6C(this.lV9M, bmC6w, this)
            }
            return this
        }
    }();
    oI0x.bmB6v = function (u4y, d4h) {
        if (!u4y || !k4o.gK7D(d4h)) return this;
        u4y = u4y.toLowerCase();
        var eh6b = this.lV9M[u4y];
        if (!eh6b) {
            this.lV9M[u4y] = d4h;
            return this
        }
        if (!k4o.eL7E(eh6b)) {
            this.lV9M[u4y] = [eh6b]
        }
        this.lV9M[u4y].push(d4h);
        return this
    };
    oI0x.z4D = function (u4y) {
        var d4h = this.lV9M[(u4y || "").toLowerCase()];
        if (!d4h) return this;
        var bf5k = fy7r.slice.call(arguments, 1);
        if (!k4o.eL7E(d4h)) return d4h.apply(this, bf5k);
        k4o.bd5i(d4h, function (dx6r) {
            try {
                dx6r.apply(this, bf5k)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    O5T.beT4X = function () {
        var R5W = {};
        return function (C4G, fP7I, e4i) {
            var fh7a = fP7I.cnQ1x;
            if (!fh7a) {
                fh7a = k4o.TV0x(10);
                fP7I.cnQ1x = fh7a
            }
            var K4O = C4G + "-" + fh7a, cF6z = R5W[K4O];
            if (!!e4i && !cF6z) {
                cF6z = fP7I.A4E(e4i);
                cF6z.T5Y = cF6z.T5Y.eH6B(function (d4h) {
                    delete R5W[K4O];
                    delete cF6z.T5Y
                });
                R5W[K4O] = cF6z
            }
            return cF6z
        }
    }()
})();
(function () {
    var o = NEJ.O, u = NEJ.P("nej.u"), j = NEJ.P("nej.j");
    j.gx7q = function () {
        var da6U = new Date, con1x = +da6U, bmp6j = 864e5;
        var coC1x = function (W5b) {
            var rE1x = document.cookie, ui1x = "\\b" + W5b + "=", Wt1x = rE1x.search(ui1x);
            if (Wt1x < 0) return "";
            Wt1x += ui1x.length - 2;
            var xe2x = rE1x.indexOf(";", Wt1x);
            if (xe2x < 0) xe2x = rE1x.length;
            return rE1x.substring(Wt1x, xe2x) || ""
        };
        return function (W5b, j4n) {
            if (j4n === undefined) return coC1x(W5b);
            if (u.fC7v(j4n)) {
                if (!!j4n) {
                    document.cookie = W5b + "=" + j4n + ";";
                    return j4n
                }
                j4n = {expires: -100}
            }
            j4n = j4n || o;
            var rE1x = W5b + "=" + (j4n.value || "") + ";";
            delete j4n.value;
            if (j4n.expires !== undefined) {
                da6U.setTime(con1x + j4n.expires * bmp6j);
                j4n.expires = da6U.toGMTString()
            }
            rE1x += u.vH2x(j4n, ";");
            document.cookie = rE1x
        }
    }()
})();
(function () {
    var c4g = NEJ.P, br5w = NEJ.F, iB8t = c4g("nej.c"), em6g = c4g("nej.g"), a4e = c4g("nej.e"), v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"), O5T = c4g("nej.ut.j"), k4o = c4g("nej.u"), b4f;
    if (!!O5T.Lg7Z) return;
    O5T.Lg7Z = NEJ.C();
    b4f = O5T.Lg7Z.N5S(I4M.cJ6D);
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.qb0x = {noescape: false, url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4};
        NEJ.EX(this.qb0x, e4i);
        var CY4c = iB8t.B4F("csrf");
        if ((/^\/[^\/]/.test(this.qb0x.url) || this.qb0x.url.indexOf(location.protocol + "//" + location.host) == 0) && !!CY4c.cookie && !!CY4c.param) {
            var bv5A = encodeURIComponent(CY4c.param) + "=" + encodeURIComponent(v4z.gx7q(CY4c.cookie) || ""),
                OI8A = this.qb0x.url.indexOf("?") < 0 ? "?" : "&";
            this.qb0x.url += OI8A + bv5A
        }
        this.WB1x = e4i.headers || {};
        var bo5t = this.WB1x[em6g.yg3x];
        if (bo5t == null) this.WB1x[em6g.yg3x] = em6g.bWv6p
    };
    b4f.bC5H = function () {
        this.bF5K();
        delete this.AH3x;
        delete this.qb0x;
        delete this.WB1x
    };
    b4f.coJ1x = function (bo5t) {
        var bz5E = {r: /\<|\>/g, "<": "&lt;", ">": "&gt;"};
        if (!this.qb0x.noescape) {
            return k4o.Dq4u(bz5E, bo5t)
        } else {
            return bo5t
        }
    };
    b4f.vy2x = function (d4h) {
        var ex6r = d4h.status;
        if (ex6r == -1) {
            this.z4D("onerror", {code: em6g.bSM5R, message: "请求[" + this.qb0x.url + "]超时！"});
            return
        }
        if (("" + ex6r).indexOf("2") != 0) {
            this.z4D("onerror", {
                data: ex6r,
                code: em6g.bwC8u,
                message: "服务器返回异常状态[" + ex6r + "]!",
                extData: d4h.result
            });
            return
        }
        this.z4D("onload", a4e.ces8k(this.coJ1x(d4h.result), this.qb0x.type))
    };
    b4f.cp5u = br5w;
    b4f.blW6Q = function (j4n) {
        var Y5d = this.qb0x.url;
        if (!Y5d) {
            this.z4D("onerror", {code: em6g.bwV8N, message: "没有输入请求地址！"});
            return this
        }
        try {
            this.qb0x.data = j4n == null ? null : j4n;
            var d4h = {request: this.qb0x, headers: this.WB1x};
            try {
                this.z4D("onbeforerequest", d4h)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.cp5u(d4h)
        } catch (e) {
            this.z4D("onerror", {code: em6g.bwC8u, message: "请求[" + Y5d + "]失败:" + e.message + "！"})
        }
        return this
    };
    b4f.ky8q = br5w
})();
(function () {
    var c4g = NEJ.P, br5w = NEJ.F, be5j = c4g("nej.h"), em6g = c4g("nej.g"), k4o = c4g("nej.u"), O5T = c4g("nej.ut.j"),
        R5W = {}, QG9x;
    if (!!O5T.WR1x) return;
    O5T.WR1x = NEJ.C();
    QG9x = O5T.WR1x.N5S(O5T.Lg7Z);
    QG9x.bC5H = function () {
        this.bF5K();
        window.clearTimeout(this.ei6c);
        delete this.ei6c;
        try {
            this.sK1x.onreadystatechange = br5w;
            this.sK1x.abort()
        } catch (e) {
        }
        delete this.sK1x
    };
    QG9x.cp5u = function () {
        var coQ1x = function (D4H, K4O) {
            this.sK1x.setRequestHeader(K4O, D4H)
        };
        return function (e4i) {
            var gl7e = e4i.request, pe0x = e4i.headers;
            this.sK1x = be5j.blM6G();
            if (pe0x[em6g.yg3x] === em6g.DH4L) {
                delete pe0x[em6g.yg3x];
                this.sK1x.upload.onprogress = this.gu7n.f4j(this, 1);
                if (gl7e.data.tagName === "FORM") gl7e.data = new FormData(gl7e.data)
            }
            this.sK1x.onreadystatechange = this.gu7n.f4j(this, 2);
            if (gl7e.timeout != 0) {
                this.ei6c = window.setTimeout(this.gu7n.f4j(this, 3), gl7e.timeout)
            }
            this.sK1x.open(gl7e.method, gl7e.url, !gl7e.sync);
            k4o.eI6C(pe0x, coQ1x, this);
            if (!!this.qb0x.cookie && "withCredentials" in this.sK1x) this.sK1x.withCredentials = !0;
            this.sK1x.send(gl7e.data)
        }
    }();
    QG9x.gu7n = function (u4y) {
        switch (u4y) {
            case 1:
                this.z4D("onuploading", arguments[1]);
                break;
            case 2:
                if (this.sK1x.readyState == 4) this.vy2x({
                    status: this.sK1x.status,
                    result: this.sK1x.responseText || ""
                });
                break;
            case 3:
                this.vy2x({status: -1});
                break
        }
    };
    QG9x.ky8q = function () {
        this.vy2x({status: 0});
        return this
    }
})();
(function () {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var QZ9Q = {}, XF1x = [], bDS0x = /\s+/g, gG7z = +(new Date), Lw7p, bR5W, hI8A;
    var EJ5O = function () {
        var gL7E = /^\s*[\[\{'"].*?[\]\}'"]\s*$/, kn8f = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            Ev5A = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i, blm5r = /^new\s+/,
            cpm1x = /['"]/;
        var cpo1x = function (D4H) {
            if (gL7E.test(D4H)) return;
            D4H = D4H.split(".")[0].trim();
            if (!D4H || cpm1x.test(D4H)) return;
            D4H = D4H.replace(blm5r, "");
            try {
                if (Ev5A.test(D4H)) return;
                hI8A[D4H] = 1
            } catch (e) {
            }
        };
        return function (bo5t) {
            bo5t = bo5t || "";
            if (!bo5t || gL7E.test(bo5t)) return;
            var bs5x = bo5t.split(kn8f);
            for (var i = 0, l = bs5x.length; i < l; i++) cpo1x(bs5x[i])
        }
    }();
    var cpq1x = function (dL6F) {
        if (dL6F[2] != "in") throw"bad for loop statement: " + dL6F.join(" ");
        XF1x.push(dL6F[1]);
        EJ5O(dL6F[3]);
        return "var __HASH__" + dL6F[1] + " = " + dL6F[3] + "," + dL6F[1] + "," + dL6F[1] + "_count=0;" + "if (!!__HASH__" + dL6F[1] + ")" + "for(var " + dL6F[1] + "_key in __HASH__" + dL6F[1] + "){" + dL6F[1] + " = __HASH__" + dL6F[1] + "[" + dL6F[1] + "_key];" + "if (typeof(" + dL6F[1] + ')=="function") continue;' + dL6F[1] + "_count++;"
    };
    var cps1x = function () {
        var dL6F = XF1x[XF1x.length - 1];
        return "}; if(!__HASH__" + dL6F + "||!" + dL6F + "_count){"
    };
    var cpt1x = function () {
        XF1x.pop();
        return "};"
    };
    var cpu1x = function (dL6F) {
        if (dL6F[2] != "as") throw"bad for list loop statement: " + dL6F.join(" ");
        var RP0x = dL6F[1].split("..");
        if (RP0x.length > 1) {
            EJ5O(RP0x[0]);
            EJ5O(RP0x[1]);
            return "for(var " + dL6F[3] + "," + dL6F[3] + "_index=0," + dL6F[3] + "_beg=" + RP0x[0] + "," + dL6F[3] + "_end=" + RP0x[1] + "," + dL6F[3] + "_length=parseInt(" + dL6F[3] + "_end-" + dL6F[3] + "_beg+1);" + dL6F[3] + "_index<" + dL6F[3] + "_length;" + dL6F[3] + "_index++){" + dL6F[3] + " = " + dL6F[3] + "_beg+" + dL6F[3] + "_index;"
        } else {
            EJ5O(dL6F[1]);
            return "for(var __LIST__" + dL6F[3] + " = " + dL6F[1] + "," + dL6F[3] + "," + dL6F[3] + "_index=0," + dL6F[3] + "_length=__LIST__" + dL6F[3] + ".length;" + dL6F[3] + "_index<" + dL6F[3] + "_length;" + dL6F[3] + "_index++){" + dL6F[3] + " = __LIST__" + dL6F[3] + "[" + dL6F[3] + "_index];"
        }
    };
    var cpv1x = function (dL6F) {
        if (!dL6F || !dL6F.length) return;
        dL6F.shift();
        var W5b = dL6F[0].split("(")[0];
        return "var " + W5b + " = function" + dL6F.join("").replace(W5b, "") + "{var __OUT=[];"
    };
    var cpw1x = function (dL6F) {
        if (!dL6F[1]) throw"bad include statement: " + dL6F.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var blb5g = function (kh8Z, dL6F) {
        EJ5O(dL6F.slice(1).join(" "));
        return kh8Z
    };
    var cpB1x = function (dL6F) {
        return blb5g("if(", dL6F)
    };
    var cpI1x = function (dL6F) {
        return blb5g("}else if(", dL6F)
    };
    var cpM1x = function (dL6F) {
        return blb5g("var ", dL6F)
    };
    bR5W = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {pfix: cpB1x, sfix: "){", pmin: 1},
            "else": {pfix: "}else{"},
            elseif: {pfix: cpI1x, sfix: "){", pdft: "true"},
            "/if": {pfix: "}"},
            "for": {pfix: cpq1x, pmin: 3},
            forelse: {pfix: cps1x},
            "/for": {pfix: cpt1x},
            list: {pfix: cpu1x, pmin: 3},
            "/list": {pfix: "};"},
            "break": {pfix: "break;"},
            "var": {pfix: cpM1x, sfix: ";"},
            macro: {pfix: cpv1x},
            "/macro": {pfix: 'return __OUT.join("");};'},
            trim: {
                pfix: function () {
                    Lw7p = !0
                }
            },
            "/trim": {
                pfix: function () {
                    Lw7p = null
                }
            },
            inline: {pfix: cpw1x, pmin: 1, sfix: "));}"}
        },
        ext: {
            seed: function (kh8Z) {
                return (kh8Z || "") + "" + gG7z
            }, "default": function (D4H, kx8p) {
                return D4H || kx8p
            }
        }
    };
    var cpO1x = function () {
        var cqe1x = /\\([\{\}])/g;
        return function (bo5t, jJ8B) {
            bo5t = bo5t.replace(cqe1x, "$1");
            var dL6F = bo5t.slice(1, -1).split(bDS0x), bh5m = bR5W.def[dL6F[0]];
            if (!bh5m) {
                YS2x(bo5t, jJ8B);
                return
            }
            if (!!bh5m.pmin && bh5m.pmin >= dL6F.length) throw"Statement needs more parameters:" + bo5t;
            jJ8B.push(!!bh5m.pfix && typeof bh5m.pfix != "string" ? bh5m.pfix(dL6F) : bh5m.pfix || "");
            if (!!bh5m.sfix) {
                if (dL6F.length <= 1) {
                    if (!!bh5m.pdft) jJ8B.push(bh5m.pdft)
                } else {
                    for (var i = 1, l = dL6F.length; i < l; i++) {
                        if (i > 1) jJ8B.push(" ");
                        jJ8B.push(dL6F[i])
                    }
                }
                jJ8B.push(bh5m.sfix)
            }
        }
    }();
    var bIj1x = function (LG7z, jJ8B) {
        if (!LG7z || !LG7z.length) return;
        if (LG7z.length == 1) {
            var bkJ5O = LG7z.pop();
            EJ5O(bkJ5O);
            jJ8B.push(bkJ5O == "" ? '""' : bkJ5O);
            return
        }
        var bkH5M = LG7z.pop().split(":");
        jJ8B.push("__MDF['" + bkH5M.shift() + "'](");
        bIj1x(LG7z, jJ8B);
        if (bkH5M.length > 0) {
            var bf5k = bkH5M.join(":");
            EJ5O(bf5k);
            jJ8B.push("," + bf5k)
        }
        jJ8B.push(")")
    };
    var YS2x = function (bo5t, jJ8B) {
        if (!bo5t) return;
        var wo2x = bo5t.split("\n");
        if (!wo2x || !wo2x.length) return;
        for (var i = 0, l = wo2x.length, hB8t; i < l; i++) {
            hB8t = wo2x[i];
            if (!!Lw7p) {
                hB8t = hB8t.trim();
                if (!hB8t) continue
            }
            cqi1x(hB8t, jJ8B);
            if (!!Lw7p && i < l - 1) jJ8B.push("__OUT.push('\\n');")
        }
    };
    var cqi1x = function () {
        var cql1x = /\|\|/g, cqp1x = /#@@#/g;
        return function (bo5t, jJ8B) {
            var Sz0x = "}", SH0x = -1, bq5v = bo5t.length, xt2x, fX7Q, LV7O, bar2x, Td0x;
            while (SH0x + Sz0x.length < bq5v) {
                xt2x = "${";
                fX7Q = "}";
                LV7O = bo5t.indexOf(xt2x, SH0x + Sz0x.length);
                if (LV7O < 0) break;
                if (bo5t.charAt(LV7O + 2) == "%") {
                    xt2x = "${%";
                    fX7Q = "%}"
                }
                bar2x = bo5t.indexOf(fX7Q, LV7O + xt2x.length);
                if (bar2x < 0) break;
                bav2x(bo5t.substring(SH0x + Sz0x.length, LV7O), jJ8B);
                Td0x = bo5t.substring(LV7O + xt2x.length, bar2x).replace(cql1x, "#@@#").split("|");
                for (var i = 0, l = Td0x.length; i < l; Td0x[i] = Td0x[i].replace(cqp1x, "||"), i++) ;
                jJ8B.push("__OUT.push(");
                bIj1x(Td0x, jJ8B);
                jJ8B.push(");");
                Sz0x = fX7Q;
                SH0x = bar2x
            }
            bav2x(bo5t.substring(SH0x + Sz0x.length), jJ8B)
        }
    }();
    var bav2x = function () {
        var bz5E = {r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'"};
        var cqx1x = function (bo5t) {
            return (bo5t || "").replace(bz5E.r, function ($1) {
                return bz5E[$1] || $1
            })
        };
        return function (bo5t, jJ8B) {
            if (!bo5t) return;
            jJ8B.push("__OUT.push('" + cqx1x(bo5t) + "');")
        }
    }();
    var cqy1x = function () {
        var cqz1x = /\t/g, cqA1x = /\n/g, cqD1x = /\r\n?/g;
        var bND3x = function (bo5t, xt2x) {
            var r4v = bo5t.indexOf("}", xt2x + 1);
            while (bo5t.charAt(r4v - 1) == "\\") {
                r4v = bo5t.indexOf("}", r4v + 1)
            }
            return r4v
        };
        var cqF1x = function () {
            var bs5x = [], ES5X = arguments[0];
            for (var x in ES5X) {
                x = (x || "").trim();
                if (!x) continue;
                bs5x.push(x + "=$v('" + x + "')")
            }
            return bs5x.length > 0 ? "var " + bs5x.join(",") + ";" : ""
        };
        return function (bo5t) {
            hI8A = {};
            bo5t = bo5t.replace(cqD1x, "\n").replace(cqz1x, "    ");
            var sL1x = ["if(!__CTX) return '';", ""];
            sL1x.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            sL1x.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            sL1x.push("__OUT=[];");
            var EU5Z = -1, bq5v = bo5t.length;
            var nA9r, Mg7Z, Tv0x, Tz0x, Cj4n, TA0x, biT5Y, TD0x;
            while (EU5Z + 1 < bq5v) {
                nA9r = EU5Z;
                nA9r = bo5t.indexOf("{", nA9r + 1);
                while (nA9r >= 0) {
                    Mg7Z = bND3x(bo5t, nA9r);
                    Tv0x = bo5t.substring(nA9r, Mg7Z);
                    Tz0x = Tv0x.match(bR5W.blk);
                    if (!!Tz0x) {
                        Cj4n = Tz0x[1].length + 1;
                        TA0x = bo5t.indexOf("}", nA9r + Cj4n);
                        if (TA0x >= 0) {
                            biT5Y = TA0x - nA9r - Cj4n <= 0 ? "{/" + Tz0x[1] + "}" : Tv0x.substr(Cj4n + 1);
                            Cj4n = bo5t.indexOf(biT5Y, TA0x + 1);
                            if (Cj4n >= 0) {
                                YS2x(bo5t.substring(EU5Z + 1, nA9r), sL1x);
                                TD0x = bo5t.substring(TA0x + 1, Cj4n);
                                switch (Tz0x[1]) {
                                    case"cdata":
                                        bav2x(TD0x, sL1x);
                                        break;
                                    case"minify":
                                        bav2x(TD0x.replace(cqA1x, " ").replace(bDS0x, " "), sL1x);
                                        break;
                                    case"eval":
                                        if (!!TD0x) sL1x.push("__OUT.push((function(){" + TD0x + "})());");
                                        break
                                }
                                nA9r = EU5Z = Cj4n + biT5Y.length - 1
                            }
                        }
                    } else if (bo5t.charAt(nA9r - 1) != "$" && bo5t.charAt(nA9r - 1) != "\\" && Tv0x.substr(Tv0x.charAt(1) == "/" ? 2 : 1).search(bR5W.tag) == 0) {
                        break
                    }
                    nA9r = bo5t.indexOf("{", nA9r + 1)
                }
                if (nA9r < 0) break;
                Mg7Z = bND3x(bo5t, nA9r);
                if (Mg7Z < 0) break;
                YS2x(bo5t.substring(EU5Z + 1, nA9r), sL1x);
                cpO1x(bo5t.substring(nA9r, Mg7Z + 1), sL1x);
                EU5Z = Mg7Z
            }
            YS2x(bo5t.substring(EU5Z + 1), sL1x);
            sL1x.push(';return __OUT.join("");');
            sL1x[1] = cqF1x(hI8A);
            hI8A = null;
            return new Function("__CTX", "__MDF", sL1x.join(""))
        }
    }();
    TrimPath.seed = function () {
        return gG7z
    };
    TrimPath.merge = function () {
        var TF0x = {};
        TrimPath.dump = function () {
            return {func: TF0x, text: QZ9Q}
        };
        return function (fh7a, j4n, kc8U) {
            try {
                j4n = j4n || {};
                if (!TF0x[fh7a] && !QZ9Q[fh7a]) return "";
                if (!TF0x[fh7a]) {
                    TF0x[fh7a] = cqy1x(QZ9Q[fh7a]);
                    delete QZ9Q[fh7a]
                }
                if (!!kc8U) {
                    for (var x in bR5W.ext) if (!kc8U[x]) kc8U[x] = bR5W.ext[x]
                }
                return TF0x[fh7a](j4n, kc8U || bR5W.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var cqJ1x = +(new Date);
        return function (bo5t, fh7a) {
            if (!bo5t) return "";
            fh7a = fh7a || "ck_" + cqJ1x++;
            QZ9Q[fh7a] = bo5t;
            return fh7a
        }
    }()
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), k4o = c4g("nej.u"), ey6s = {}, bST5Y = {};
    a4e.Mi7b = TrimPath.seed;
    a4e.cd5i = function () {
        var bTv5A = function (C4G) {
            return !a4e.iH8z ? "" : a4e.iH8z(C4G)
        };
        return function (fh7a, j4n, kc8U) {
            j4n = NEJ.X(NEJ.X({}, bST5Y), j4n);
            j4n.inline = bTv5A;
            kc8U = NEJ.X(NEJ.X({}, ey6s), kc8U);
            kc8U.rand = k4o.ol0x;
            kc8U.format = k4o.ih8Z;
            kc8U.escape = k4o.dH6B;
            kc8U.inline = bTv5A;
            return TrimPath.merge(fh7a, j4n, kc8U)
        }
    }();
    a4e.eB6v = function (bo5t, crg1x) {
        if (!bo5t) return "";
        var fh7a, F4J = a4e.B4F(bo5t);
        if (!!F4J) {
            fh7a = F4J.id;
            bo5t = F4J.value || F4J.innerText;
            if (!crg1x) a4e.cL6F(F4J)
        }
        return TrimPath.parse(bo5t, fh7a)
    };
    a4e.dA6u = function (bI5N, fh7a, j4n, kc8U) {
        bI5N = a4e.B4F(bI5N);
        if (!!bI5N) bI5N.innerHTML = a4e.cd5i(fh7a, j4n, kc8U);
        return this
    };
    a4e.cHv3x = function (bz5E) {
        NEJ.X(ey6s, bz5E)
    };
    a4e.crv2x = function (bz5E) {
        NEJ.X(bST5Y, bz5E)
    };
    c4g("dbg").dumpJST = function () {
        return TrimPath.dump()
    }
})();
(function () {
    var dy6s = NEJ.P("nej.p"), O5T = window, lt9k = dy6s.Ik6e, bVd6X = lt9k.ipad || lt9k.iphone;
    if (!bVd6X && !!O5T.requestAnimationFrame && !!O5T.cancelRequestAnimationFrame) return;
    var kh8Z = dy6s.dr6l.prefix.pro;
    if (!bVd6X && !!O5T[kh8Z + "RequestAnimationFrame"] && !!O5T[kh8Z + "CancelRequestAnimationFrame"]) {
        O5T.requestAnimationFrame = O5T[kh8Z + "RequestAnimationFrame"];
        O5T.cancelRequestAnimationFrame = O5T[kh8Z + "CancelRequestAnimationFrame"];
        return
    }
    var bbz3x = lt9k.desktop ? 80 : lt9k.ios ? 50 : 30;
    O5T.requestAnimationFrame = function (cA5F) {
        return window.setTimeout(function () {
            try {
                cA5F(+(new Date))
            } catch (ex) {
            }
        }, 1e3 / bbz3x)
    };
    O5T.cancelRequestAnimationFrame = function (C4G) {
        window.clearTimeout(C4G);
        return this
    }
})();
(function () {
    var c4g = NEJ.P, br5w = NEJ.F, k4o = c4g("nej.u"), a4e = c4g("nej.e"), h4l = c4g("nej.v"), be5j = c4g("nej.h"),
        cZ6T = c4g("nej.x"), bbA3x = c4g("nej.ut.j.cb"), ge7X;
    if (!!a4e.sv1x) return;
    a4e.sv1x = cZ6T.sv1x = function () {
        var R5W = {}, gL7E = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (d4h) {
            var C4G = decodeURIComponent(d4h.target), u4y = d4h.type.toLowerCase();
            var dx6r = R5W[C4G + "-on" + u4y];
            if (!!dx6r) {
                try {
                    dx6r(d4h)
                } catch (e) {
                }
                return
            }
            var cR6L = R5W[C4G + "-tgt"];
            if (!!cR6L && gL7E.test(u4y)) {
                bzJ9A(cR6L, d4h)
            }
        };
        var biz5E = function (e4i) {
            var bI5N = a4e.B4F(e4i.parent) || document.body, dV6P = a4e.cd5i(ge7X, e4i);
            bI5N.insertAdjacentHTML(!e4i.hidden ? "beforeEnd" : "afterBegin", dV6P)
        };
        var bzJ9A = function (C4G, d4h) {
            var u4y = d4h.type.toLowerCase();
            requestAnimationFrame(function () {
                h4l.z4D(C4G, u4y)
            })
        };
        var crA2x = function (hW8O) {
            return !!hW8O && !!hW8O.inited && !!hW8O.inited()
        };
        var TQ0x = function (C4G) {
            var bs5x = [document.embeds[C4G], a4e.B4F(C4G), document[C4G], window[C4G]], r4v = k4o.eI6C(bs5x, crA2x),
                hW8O = bs5x[r4v], biw5B = C4G + "-count";
            R5W[biw5B]++;
            if (!!hW8O || R5W[biw5B] > 100) {
                R5W[C4G](hW8O);
                delete R5W[C4G];
                delete R5W[biw5B];
                return
            }
            window.setTimeout(TQ0x.f4j(null, C4G), 300)
        };
        var crI2x = function (e4i) {
            var C4G = e4i.id, cm5r = e4i.params;
            if (!cm5r) {
                cm5r = {};
                e4i.params = cm5r
            }
            var hI8A = cm5r.flashvars || "";
            hI8A += (!hI8A ? "" : "&") + ("id=" + C4G);
            if (!e4i.hidden && (!!e4i.target || be5j.WF1x(cm5r.wmode))) {
                var hV8N = a4e.lP9G(e4i.target) || a4e.lP9G(e4i.parent), bbP3x = k4o.bbZ3x();
                bbA3x["cb" + bbP3x] = bzJ9A.f4j(null, hV8N);
                hI8A += "&onevent=nej.ut.j.cb.cb" + bbP3x;
                R5W[C4G + "-tgt"] = hV8N
            }
            cm5r.flashvars = hI8A;
            k4o.eI6C(e4i, function (D4H, K4O) {
                if (k4o.gK7D(D4H) && K4O != "onready") {
                    R5W[C4G + "-" + K4O] = D4H
                }
            })
        };
        return function (e4i) {
            e4i = NEJ.X({}, e4i);
            if (!e4i.src) return;
            var C4G = "flash_" + k4o.bbZ3x();
            e4i.id = C4G;
            crI2x(e4i);
            biz5E(e4i);
            if (!e4i.onready) return;
            R5W[C4G] = e4i.onready;
            R5W[C4G + "-count"] = 0;
            TQ0x(C4G)
        }
    }();
    ge7X = a4e.eB6v('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cZ6T.isChange = !0
})();
(function () {
    var c4g = NEJ.P, iB8t = c4g("nej.c"), a4e = c4g("nej.e"), k4o = c4g("nej.u"), O5T = c4g("nej.ut.j"),
        bbA3x = c4g("nej.ut.j.cb"), R5W = {}, gG7z = +(new Date), bir5w;
    if (!!O5T.bij5o) return;
    bbA3x["ld" + gG7z] = function (K4O, cK6E) {
        var jZ8R = R5W[K4O];
        if (!jZ8R) return;
        delete R5W[K4O];
        jZ8R.vy2x({status: 200, result: cK6E})
    };
    bbA3x["er" + gG7z] = function (K4O, ex6r) {
        var jZ8R = R5W[K4O];
        if (!jZ8R) return;
        delete R5W[K4O];
        jZ8R.vy2x({status: ex6r || 0})
    };
    O5T.bij5o = NEJ.C();
    bir5w = O5T.bij5o.N5S(O5T.Lg7Z);
    bir5w.cp5u = function (e4i) {
        var hW8O = R5W.flash;
        if (k4o.eL7E(hW8O)) {
            hW8O.push(this.cp5u.f4j(this, e4i));
            return
        }
        if (!hW8O) {
            R5W.flash = [this.cp5u.f4j(this, e4i)];
            a4e.sv1x({
                hidden: !0, src: iB8t.B4F("ajax.swf"), onready: function (hW8O) {
                    if (!hW8O) return;
                    var i4m = R5W.flash;
                    R5W.flash = hW8O;
                    k4o.nk9b(i4m, function (dx6r) {
                        try {
                            dx6r()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.AH3x = "swf-" + k4o.ol0x();
        R5W[this.AH3x] = this;
        var j4n = NEJ.EX({url: "", data: null, method: "GET"}, e4i.request);
        j4n.key = this.AH3x;
        j4n.headers = e4i.headers;
        j4n.onerror = "nej.ut.j.cb.er" + gG7z;
        j4n.onloaded = "nej.ut.j.cb.ld" + gG7z;
        var bCG0x = iB8t.bWi6c(j4n.url);
        if (!!bCG0x) j4n.policyURL = bCG0x;
        hW8O.request(j4n)
    };
    bir5w.ky8q = function () {
        delete R5W[this.AH3x];
        this.vy2x({status: 0});
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, be5j = c4g("nej.h");
    be5j.bCM0x = function () {
        var df6Z = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (kR9I) {
            kR9I = kR9I || "";
            if (df6Z.test(kR9I)) return RegExp.$1;
            return "*"
        }
    }();
    be5j.big5l = function (j4n) {
        return j4n
    };
    be5j.bid5i = function (bci3x, e4i) {
        if (!bci3x.postMessage) return;
        e4i = e4i || bb5g;
        bci3x.postMessage(be5j.big5l(e4i.data), be5j.bCM0x(e4i.origin))
    }
})();
(function () {
    var c4g = NEJ.P, br5w = NEJ.F, a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), O5T = c4g("nej.ut"), b4f;
    if (!!O5T.fK7D) return;
    O5T.fK7D = NEJ.C();
    b4f = O5T.fK7D.N5S(O5T.cJ6D);
    b4f.cw5B = function () {
        this.S5X = {};
        this.cE6y()
    };
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.Uh0x = a4e.B4F(e4i.element) || window;
        this.bEG0x(e4i.event);
        this.crW2x();
        this.z4D("oninit")
    };
    b4f.bC5H = function () {
        var Ff5k = function (D4H, K4O, bz5E) {
            if (!k4o.eL7E(D4H)) {
                k4o.bbS3x(this.Uh0x, K4O)
            }
            delete bz5E[K4O]
        };
        return function () {
            this.bF5K();
            k4o.eI6C(this.S5X, Ff5k, this);
            delete this.Uh0x
        }
    }();
    b4f.bcp3x = function (F4J, u4y) {
        F4J = a4e.B4F(F4J);
        return F4J == this.Uh0x && (!u4y || !!this.S5X["on" + u4y])
    };
    b4f.bEG0x = function (d4h) {
        if (k4o.fC7v(d4h)) {
            var W5b = "on" + d4h;
            if (!this.S5X[W5b]) {
                this.S5X[W5b] = this.crY2x.f4j(this, d4h)
            }
            this.bER0x(d4h);
            return
        }
        if (k4o.eL7E(d4h)) {
            k4o.bd5i(d4h, this.bEG0x, this)
        }
    };
    b4f.bER0x = function (u4y) {
        var d4h = "on" + u4y, dx6r = this.Uh0x[d4h], bES0x = this.S5X[d4h];
        if (dx6r != bES0x) {
            this.bcs3x(u4y);
            if (!!dx6r && dx6r != br5w) this.bFf1x(u4y, dx6r);
            this.Uh0x[d4h] = bES0x
        }
    };
    b4f.bFf1x = function (u4y, dx6r, crZ2x) {
        var i4m = this.S5X[u4y];
        if (!i4m) {
            i4m = [];
            this.S5X[u4y] = i4m
        }
        if (k4o.gK7D(dx6r)) {
            !crZ2x ? i4m.push(dx6r) : i4m.unshift(dx6r)
        }
    };
    b4f.bcs3x = function (u4y, dx6r) {
        var i4m = this.S5X[u4y];
        if (!i4m || !i4m.length) return;
        if (!dx6r) {
            delete this.S5X[u4y];
            return
        }
        k4o.nk9b(i4m, function (D4H, r4v, Mu7n) {
            if (dx6r === D4H) {
                Mu7n.splice(r4v, 1);
                return !0
            }
        })
    };
    b4f.crY2x = function (u4y, d4h) {
        d4h = d4h || {noargs: !0};
        d4h.type = u4y;
        this.z4D("ondispatch", d4h);
        if (!!d4h.stopped) return;
        k4o.bd5i(this.S5X[u4y], function (dx6r) {
            try {
                dx6r(d4h)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b4f.crW2x = function () {
        var bhq4u = function (d4h) {
            var bf5k = d4h.args, u4y = bf5k[1].toLowerCase();
            if (this.bcp3x(bf5k[0], u4y)) {
                d4h.stopped = !0;
                this.bER0x(u4y);
                this.bFf1x(u4y, bf5k[2], bf5k[3]);
                this.z4D("oneventadd", {type: u4y, listener: bf5k[2]})
            }
        };
        var csa2x = function (d4h) {
            var bf5k = d4h.args, u4y = bf5k[1].toLowerCase();
            if (this.bcp3x(bf5k[0], u4y)) {
                d4h.stopped = !0;
                this.bcs3x(u4y, bf5k[2])
            }
        };
        var bmC6w = function (d4h) {
            var bf5k = d4h.args, u4y = (bf5k[1] || "").toLowerCase();
            if (this.bcp3x(bf5k[0])) {
                if (!!u4y) {
                    this.bcs3x(u4y);
                    return
                }
                k4o.eI6C(this.S5X, function (D4H, K4O) {
                    if (k4o.eL7E(D4H)) {
                        this.bcs3x(K4O)
                    }
                }, this)
            }
        };
        var csK2x = function (d4h) {
            var bf5k = d4h.args, u4y = bf5k[1].toLowerCase();
            if (this.bcp3x(bf5k[0], u4y)) {
                d4h.stopped = !0;
                bf5k[0]["on" + u4y].apply(bf5k[0], bf5k.slice(2))
            }
        };
        return function () {
            if (!!this.csN2x) return;
            this.csN2x = true;
            h4l.s4w = h4l.s4w.eH6B(bhq4u.f4j(this));
            h4l.mo9f = h4l.mo9f.eH6B(csa2x.f4j(this));
            h4l.he7X = h4l.he7X.eH6B(bmC6w.f4j(this));
            h4l.z4D = h4l.z4D.eH6B(csK2x.f4j(this))
        }
    }()
})();
(function () {
    var c4g = NEJ.P, O5T = c4g("nej.p"), be5j = c4g("nej.h"), k4o = c4g("nej.u"), h4l = c4g("nej.v"),
        I4M = c4g("nej.ut");
    if (O5T.nB9s.trident) return;
    if (!!window.postMessage) {
        be5j.big5l = be5j.big5l.eH6B(function (d4h) {
            d4h.stopped = !0;
            d4h.value = JSON.stringify(d4h.args[0])
        });
        return
    }
    var K4O = "MSG|", kt8l = [];
    var ctY2x = function () {
        var W5b = unescape(window.name || "").trim();
        if (!W5b || W5b.indexOf(K4O) != 0) return;
        window.name = "";
        var m4q = k4o.OE8w(W5b.replace(K4O, ""), "|"), kR9I = (m4q.origin || "").toLowerCase();
        if (!!kR9I && kR9I != "*" && location.href.toLowerCase().indexOf(kR9I) != 0) return;
        h4l.z4D(window, "message", {
            data: JSON.parse(m4q.data || "null"),
            source: window.frames[m4q.self] || m4q.self,
            origin: be5j.bCM0x(m4q.ref || document.referrer)
        })
    };
    var cut2x = function () {
        var bdo3x;
        var cuN2x = function (bz5E, r4v, i4m) {
            if (k4o.di6c(bdo3x, bz5E.w) < 0) {
                bdo3x.push(bz5E.w);
                i4m.splice(r4v, 1);
                bz5E.w.name = bz5E.d
            }
        };
        return function () {
            bdo3x = [];
            k4o.nk9b(kt8l, cuN2x);
            bdo3x = null
        }
    }();
    be5j.bid5i = function () {
        var cve2x = function (j4n) {
            var m4q = {};
            j4n = j4n || bb5g;
            m4q.origin = j4n.origin || "";
            m4q.ref = location.href;
            m4q.self = j4n.source;
            m4q.data = JSON.stringify(j4n.data);
            return K4O + k4o.vH2x(m4q, "|", !0)
        };
        return be5j.bid5i.eH6B(function (d4h) {
            d4h.stopped = !0;
            var bf5k = d4h.args;
            kt8l.unshift({w: bf5k[0], d: escape(cve2x(bf5k[1]))})
        })
    }();
    I4M.fK7D.A4E({element: window, event: "message"});
    window.setInterval(cut2x, 100);
    window.setInterval(ctY2x, 20)
})();
(function () {
    var c4g = NEJ.P, be5j = c4g("nej.h"), a4e = c4g("nej.e"), v4z = c4g("nej.j");
    v4z.cvr3x = function () {
        var gC7v = window.name || "_parent", cvu3x = {gy7r: window.top, gC7v: window, bI5N: window.parent};
        return function (cR6L, e4i) {
            if (typeof cR6L == "string") {
                cR6L = cvu3x[cR6L] || window.frames[cR6L];
                if (!cR6L) return this
            }
            var j4n = NEJ.X({origin: "*", source: gC7v}, e4i);
            be5j.bid5i(cR6L, j4n);
            return this
        }
    }()
})();
(function () {
    var c4g = NEJ.P, iB8t = c4g("nej.c"), a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        v4z = c4g("nej.j"), O5T = c4g("nej.ut.j"), R5W = {}, bdx3x;
    if (!!O5T.bgK4O) return;
    O5T.bgK4O = NEJ.C();
    bdx3x = O5T.bgK4O.N5S(O5T.Lg7Z);
    bdx3x.cw5B = function () {
        var fa7T = "NEJ-AJAX-DATA:", Eh4l = !1;
        var bgH4L = function (d4h) {
            var j4n = d4h.data;
            if (j4n.indexOf(fa7T) != 0) return;
            j4n = JSON.parse(j4n.replace(fa7T, ""));
            var jZ8R = R5W[j4n.key];
            if (!jZ8R) return;
            delete R5W[j4n.key];
            j4n.result = decodeURIComponent(j4n.result || "");
            jZ8R.vy2x(j4n)
        };
        var bgz4D = function () {
            if (!Eh4l) {
                Eh4l = !0;
                h4l.s4w(window, "message", bgH4L)
            }
        };
        return function () {
            this.cE6y();
            bgz4D()
        }
    }();
    bdx3x.cp5u = function (e4i) {
        var gl7e = e4i.request, jZ8R = iB8t.bWh6b(gl7e.url), en6h = R5W[jZ8R];
        if (k4o.eL7E(en6h)) {
            en6h.push(this.cp5u.f4j(this, e4i));
            return
        }
        if (!en6h) {
            R5W[jZ8R] = [this.cp5u.f4j(this, e4i)];
            a4e.YH2x({
                src: jZ8R, visible: !1, onload: function (d4h) {
                    var i4m = R5W[jZ8R];
                    R5W[jZ8R] = h4l.X5c(d4h).contentWindow;
                    k4o.nk9b(i4m, function (dx6r) {
                        try {
                            dx6r()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.AH3x = "frm-" + k4o.ol0x();
        R5W[this.AH3x] = this;
        var j4n = NEJ.EX({url: "", data: null, timeout: 0, method: "GET"}, gl7e);
        j4n.key = this.AH3x;
        j4n.headers = e4i.headers;
        v4z.cvr3x(R5W[jZ8R], {data: j4n})
    };
    bdx3x.ky8q = function () {
        delete R5W[this.AH3x];
        this.vy2x({status: 0});
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, em6g = c4g("nej.g"), a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        v4z = c4g("nej.j"), O5T = c4g("nej.ut.j"), R5W = {}, MC7v;
    if (!!O5T.bgs4w) return;
    O5T.bgs4w = NEJ.C();
    MC7v = O5T.bgs4w.N5S(O5T.Lg7Z);
    MC7v.cw5B = function () {
        var fa7T = "NEJ-UPLOAD-RESULT:", Eh4l = !1;
        var bgH4L = function (d4h) {
            var j4n = d4h.data;
            if (j4n.indexOf(fa7T) != 0) return;
            j4n = JSON.parse(j4n.replace(fa7T, ""));
            var jZ8R = R5W[j4n.key];
            if (!jZ8R) return;
            delete R5W[j4n.key];
            jZ8R.vy2x(decodeURIComponent(j4n.result))
        };
        var bgz4D = function () {
            if (!Eh4l) {
                Eh4l = !0;
                h4l.s4w(window, "message", bgH4L)
            }
        };
        return function () {
            this.cE6y();
            bgz4D()
        }
    }();
    MC7v.bC5H = function () {
        this.bF5K();
        a4e.cL6F(this.bgo4s);
        delete this.bgo4s;
        window.clearTimeout(this.ei6c);
        delete this.ei6c
    };
    MC7v.vy2x = function (cK6E) {
        var Q5V;
        try {
            Q5V = JSON.parse(cK6E);
            this.z4D("onload", Q5V)
        } catch (e) {
            this.z4D("onerror", {code: em6g.bWp6j, message: cK6E})
        }
    };
    MC7v.cp5u = function () {
        var cvA3x = function () {
            var mT9K, cK6E;
            try {
                var mT9K = this.bgo4s.contentWindow.document.body, cK6E = mT9K.innerText || mT9K.textContent
            } catch (e) {
                return
            }
            this.vy2x(cK6E)
        };
        var bgm4q = function (Y5d, fk7d, rE1x) {
            v4z.bm5r(Y5d, {
                type: "json",
                method: "POST",
                cookie: rE1x,
                mode: parseInt(fk7d) || 0,
                onload: function (j4n) {
                    if (!this.ei6c) return;
                    this.z4D("onuploading", j4n);
                    this.ei6c = window.setTimeout(bgm4q.f4j(this, Y5d, fk7d, rE1x), 1e3)
                }.f4j(this),
                onerror: function (ca5f) {
                    if (!this.ei6c) return;
                    this.ei6c = window.setTimeout(bgm4q.f4j(this, Y5d, fk7d, rE1x), 1e3)
                }.f4j(this)
            })
        };
        return function (e4i) {
            var gl7e = e4i.request, pe0x = e4i.headers, fm7f = gl7e.data, W5b = "fom-" + k4o.ol0x();
            R5W[W5b] = this;
            fm7f.target = W5b;
            fm7f.method = "POST";
            fm7f.enctype = em6g.DH4L;
            fm7f.encoding = em6g.DH4L;
            var Y5d = fm7f.action || "", lw9n = Y5d.indexOf("?") <= 0 ? "?" : "&";
            fm7f.action = Y5d + lw9n + "_proxy_=form";
            this.bgo4s = a4e.YH2x({
                name: W5b, onload: function (d4h) {
                    var en6h = h4l.X5c(d4h);
                    h4l.s4w(en6h, "load", cvA3x.f4j(this));
                    fm7f.submit();
                    var bKC2x = (fm7f.nej_query || bb5g).value;
                    if (!bKC2x) return;
                    var fk7d = (fm7f.nej_mode || bb5g).value, rE1x = (fm7f.nej_cookie || bb5g).value == "true";
                    this.ei6c = window.setTimeout(bgm4q.f4j(this, bKC2x, fk7d, rE1x), 100)
                }.f4j(this)
            })
        }
    }();
    MC7v.ky8q = function () {
        this.z4D("onerror", {code: em6g.bWt6n, message: "客户端终止文件上传"});
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, be5j = c4g("nej.h"), O5T = c4g("nej.ut.j");
    be5j.blM6G = function () {
        return new XMLHttpRequest
    };
    be5j.bgg4k = function (fk7d, bei4m, e4i) {
        var bz5E = !!bei4m ? {2: O5T.bgs4w} : {2: O5T.bgK4O, 3: O5T.bij5o};
        return (bz5E[fk7d] || O5T.WR1x).A4E(e4i)
    }
})();
(function () {
    var c4g = NEJ.P, O5T = c4g("nej.p"), be5j = c4g("nej.h");
    if (O5T.nB9s.trident) return;
    be5j.blM6G = function () {
        var Ra9R = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cwj3x = function () {
            for (var i = 0, l = Ra9R.length; i < l; i++) {
                try {
                    return new ActiveXObject(Ra9R[i])
                } catch (e) {
                }
            }
            return null
        };
        return be5j.blM6G.eH6B(function (d4h) {
            if (!!window.XMLHttpRequest) return;
            d4h.stopped = !0;
            d4h.value = cwj3x()
        })
    }();
    be5j.bgg4k = function () {
        var DG4K = {0: 2, 1: 3};
        return be5j.bgg4k.eH6B(function (d4h) {
            var bf5k = d4h.args, fk7d = bf5k[0] || 0;
            bf5k[0] = !!bf5k[1] ? 2 : DG4K[fk7d] || fk7d
        })
    }()
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, be5j = c4g("nej.h"), em6g = c4g("nej.g"), k4o = c4g("nej.u"),
        v4z = c4g("nej.j"), O5T = c4g("nej.ut.j"), oj0x = {}, Jl6f = br5w;
    v4z.ky8q = function (fh7a) {
        var R5W = oj0x[fh7a];
        if (!R5W) return this;
        R5W.req.ky8q();
        return this
    };
    v4z.ben4r = function (dZ6T) {
        Jl6f = dZ6T || br5w;
        return this
    };
    v4z.bm5r = function () {
        var jL8D = (location.protocol + "//" + location.host).toLowerCase();
        var cwo3x = function (Y5d) {
            var kR9I = k4o.cjc9T(Y5d);
            return !!kR9I && kR9I != jL8D
        };
        var cwq3x = function (pe0x) {
            return (pe0x || bb5g)[em6g.yg3x] == em6g.DH4L
        };
        var cwv0x = function (e4i) {
            var bei4m = cwq3x(e4i.headers);
            if (!cwo3x(e4i.url) && !bei4m) return O5T.WR1x.A4E(e4i);
            return be5j.bgg4k(e4i.mode, bei4m, e4i)
        };
        var Ff5k = function (fh7a) {
            var R5W = oj0x[fh7a];
            if (!R5W) return;
            if (!!R5W.req) R5W.req.T5Y();
            delete oj0x[fh7a]
        };
        var bNu3x = function (fh7a, u4y) {
            var R5W = oj0x[fh7a];
            if (!R5W) return;
            Ff5k(fh7a);
            try {
                var d4h = {type: u4y, result: arguments[2]};
                Jl6f(d4h);
                if (!d4h.stopped) (R5W[u4y] || br5w)(d4h.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var yX3x = function (fh7a, j4n) {
            bNu3x(fh7a, "onload", j4n)
        };
        var Az3x = function (fh7a, ca5f) {
            bNu3x(fh7a, "onerror", ca5f)
        };
        return function (Y5d, e4i) {
            e4i = e4i || {};
            var fh7a = k4o.ol0x(), R5W = {onload: e4i.onload || br5w, onerror: e4i.onerror || br5w};
            oj0x[fh7a] = R5W;
            e4i.onload = yX3x.f4j(null, fh7a);
            e4i.onerror = Az3x.f4j(null, fh7a);
            if (!!e4i.query) {
                var lw9n = Y5d.indexOf("?") < 0 ? "?" : "&", bv5A = e4i.query;
                if (k4o.lG9x(bv5A)) bv5A = k4o.cD6x(bv5A);
                if (!!bv5A) Y5d += lw9n + bv5A
            }
            e4i.url = Y5d;
            R5W.req = cwv0x(e4i);
            R5W.req.blW6Q(e4i.data);
            return fh7a
        }
    }();
    v4z.hP8H = function (fm7f, e4i) {
        var dM6G = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(dM6G, e4i);
        dM6G.data = fm7f;
        dM6G.method = "POST";
        dM6G.timeout = 0;
        dM6G.headers[em6g.yg3x] = em6g.DH4L;
        return v4z.bm5r(fm7f.action, dM6G)
    }
})();
(function () {
    var c4g = NEJ.P, br5w = NEJ.F, em6g = c4g("nej.g"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), I4M = c4g("nej.ut"),
        O5T = c4g("nej.ut.j"), mv9m, gS7L = 6e4;
    if (!!O5T.Vw1x) return;
    O5T.Vw1x = NEJ.C();
    mv9m = O5T.Vw1x.N5S(I4M.cJ6D);
    mv9m.cw5B = function () {
        this.cE6y();
        this.Vz1x = {onerror: this.cww0x.f4j(this), onloaded: this.cwx0x.f4j(this)};
        if (!this.constructor.S5X) this.constructor.S5X = {loaded: {}}
    };
    mv9m.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.MP7I = e4i.version;
        this.bfP4T = e4i.timeout;
        this.Vz1x.version = this.MP7I;
        this.Vz1x.timeout = this.bfP4T
    };
    mv9m.bRR5W = function (K4O) {
        delete this.constructor.S5X[K4O]
    };
    mv9m.AX4b = function (K4O) {
        return this.constructor.S5X[K4O]
    };
    mv9m.bSh5m = function (K4O, j4n) {
        this.constructor.S5X[K4O] = j4n
    };
    mv9m.beQ4U = br5w;
    mv9m.bSt5y = function (gl7e) {
        h4l.he7X(gl7e)
    };
    mv9m.bfL4P = function (gl7e) {
        gl7e.src = this.ld9U;
        document.head.appendChild(gl7e)
    };
    mv9m.Bm4q = function () {
        var R5W = this.AX4b(this.ld9U);
        if (!R5W) return;
        window.clearTimeout(R5W.timer);
        this.bSt5y(R5W.request);
        delete R5W.bind;
        delete R5W.timer;
        delete R5W.request;
        this.bRR5W(this.ld9U);
        this.AX4b("loaded")[this.ld9U] = !0
    };
    mv9m.beW4a = function (W5b) {
        var R5W = this.AX4b(this.ld9U);
        if (!R5W) return;
        var i4m = R5W.bind;
        this.Bm4q();
        if (!!i4m && i4m.length > 0) {
            var cF6z;
            while (i4m.length) {
                cF6z = i4m.shift();
                try {
                    cF6z.z4D(W5b, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cF6z.T5Y()
            }
        }
    };
    mv9m.dO6I = function (ca5f) {
        this.beW4a("onerror", ca5f)
    };
    mv9m.bTh5m = function () {
        this.beW4a("onloaded")
    };
    mv9m.cwz0x = function (Y5d) {
        this.constructor.A4E(this.Vz1x).MU7N(Y5d)
    };
    mv9m.bTx5C = function (ca5f) {
        var R5W = this.AX4b(this.xy2x);
        if (!R5W) return;
        if (!!ca5f) R5W.error++;
        R5W.loaded++;
        if (R5W.loaded < R5W.total) return;
        this.bRR5W(this.xy2x);
        this.z4D(R5W.error > 0 ? "onerror" : "onloaded")
    };
    mv9m.cww0x = function (ca5f) {
        this.bTx5C(!0)
    };
    mv9m.cwx0x = function () {
        this.bTx5C()
    };
    mv9m.MU7N = function (Y5d) {
        Y5d = k4o.bot6n(Y5d);
        if (!Y5d) {
            this.z4D("onerror", {code: em6g.bwV8N, message: "请指定要载入的资源地址！"});
            return this
        }
        this.ld9U = Y5d;
        if (!!this.MP7I) this.ld9U += (this.ld9U.indexOf("?") < 0 ? "?" : "&") + this.MP7I;
        if (this.AX4b("loaded")[this.ld9U]) {
            try {
                this.z4D("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.T5Y();
            return this
        }
        var R5W = this.AX4b(this.ld9U), gl7e;
        if (!!R5W) {
            R5W.bind.unshift(this);
            R5W.timer = window.clearTimeout(R5W.timer)
        } else {
            gl7e = this.beQ4U();
            R5W = {request: gl7e, bind: [this]};
            this.bSh5m(this.ld9U, R5W);
            h4l.s4w(gl7e, "load", this.bTh5m.f4j(this));
            h4l.s4w(gl7e, "error", this.dO6I.f4j(this, {code: em6g.bwC8u, message: "无法加载指定资源文件[" + this.ld9U + "]！"}))
        }
        if (this.bfP4T != 0) R5W.timer = window.setTimeout(this.dO6I.f4j(this, {
            code: em6g.bSM5R,
            message: "指定资源文件[" + this.ld9U + "]载入超时！"
        }), this.bfP4T || gS7L);
        if (!!gl7e) this.bfL4P(gl7e);
        this.z4D("onloading");
        return this
    };
    mv9m.bTN5S = function (i4m) {
        if (!i4m || !i4m.length) {
            this.z4D("onerror", {code: em6g.bwV8N, message: "请指定要载入的资源队列！"});
            return this
        }
        this.xy2x = k4o.ol0x();
        var R5W = {error: 0, loaded: 0, total: i4m.length};
        this.bSh5m(this.xy2x, R5W);
        for (var i = 0, l = i4m.length; i < l; i++) {
            if (!i4m[i]) {
                R5W.total--;
                continue
            }
            this.cwz0x(i4m[i])
        }
        this.z4D("onloading");
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, a4e = c4g("nej.e"), be5j = c4g("nej.h"), O5T = c4g("nej.ut.j"), VR1x;
    if (!!O5T.bfx4B) return;
    O5T.bfx4B = NEJ.C();
    VR1x = O5T.bfx4B.N5S(O5T.Vw1x);
    VR1x.beQ4U = function () {
        var eO7H = a4e.dj6d("iframe");
        eO7H.width = 0;
        eO7H.height = 0;
        eO7H.style.display = "none";
        return eO7H
    };
    VR1x.bfL4P = function (gl7e) {
        gl7e.src = this.ld9U;
        document.body.appendChild(gl7e)
    };
    VR1x.dO6I = function (ca5f) {
        var eO7H = (this.AX4b(this.ld9U) || bb5g).request;
        this.beW4a("onerror", ca5f);
        be5j.XC1x(eO7H)
    };
    VR1x.bTh5m = function () {
        var mT9K = null, eO7H = (this.AX4b(this.ld9U) || bb5g).request;
        try {
            mT9K = eO7H.contentWindow.document.body
        } catch (ex) {
        }
        this.beW4a("onloaded", mT9K);
        be5j.XC1x(eO7H)
    }
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), O5T = c4g("nej.ut.j"), bfy4C;
    if (!!O5T.bfb4f) return;
    O5T.bfb4f = NEJ.C();
    bfy4C = O5T.bfb4f.N5S(O5T.Vw1x);
    bfy4C.beQ4U = function () {
        return a4e.dj6d("link")
    };
    bfy4C.bfL4P = function (gl7e) {
        gl7e.href = this.ld9U;
        document.head.appendChild(gl7e)
    }
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), O5T = c4g("nej.ut.j"), beZ4d;
    if (!!O5T.beV4Z) return;
    O5T.beV4Z = NEJ.C();
    beZ4d = O5T.beV4Z.N5S(O5T.Vw1x);
    beZ4d.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.bVa6U = e4i.async;
        this.bfK4O = e4i.charset;
        this.Vz1x.async = !1;
        this.Vz1x.charset = this.bfK4O
    };
    beZ4d.beQ4U = function () {
        var gl7e = a4e.dj6d("script");
        if (this.bVa6U != null) gl7e.async = !!this.bVa6U;
        if (this.bfK4O != null) gl7e.charset = this.bfK4O;
        return gl7e
    };
    beZ4d.bSt5y = function (gl7e) {
        a4e.cL6F(gl7e)
    }
})();
(function () {
    var c4g = NEJ.P, v4z = c4g("nej.j"), O5T = c4g("nej.ut.j");
    v4z.cwA0x = function (Y5d, e4i) {
        O5T.beV4Z.A4E(e4i).MU7N(Y5d);
        return this
    };
    v4z.cwB0x = function (i4m, e4i) {
        O5T.beV4Z.A4E(e4i).bTN5S(i4m);
        return this
    };
    v4z.cGp2x = function (Y5d, e4i) {
        O5T.bfb4f.A4E(e4i).MU7N(Y5d);
        return this
    };
    v4z.cxv0x = function (i4m, e4i) {
        O5T.bfb4f.A4E(e4i).bTN5S(i4m);
        return this
    };
    v4z.bzg9X = function (Y5d, e4i) {
        O5T.bfx4B.A4E(e4i).MU7N(Y5d);
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"), R5W = {}, sU1x = +(new Date) + "-";
    a4e.cX6R = function () {
        var cz5E = 0;
        var VA1x = function () {
            if (cz5E > 0) return;
            cz5E = 0;
            h4l.z4D(document, "templateready");
            h4l.he7X(document, "templateready")
        };
        var beM4Q = function (gf7Y, e4i) {
            var cV6P = a4e.t4x(gf7Y, "src");
            if (!cV6P) return;
            e4i = e4i || bb5g;
            var fZ7S = e4i.root;
            if (!fZ7S) {
                fZ7S = gf7Y.ownerDocument.location.href
            } else {
                fZ7S = k4o.bot6n(fZ7S)
            }
            cV6P = cV6P.split(",");
            k4o.bd5i(cV6P, function (D4H, r4v, i4m) {
                i4m[r4v] = k4o.bot6n(D4H, fZ7S)
            });
            return cV6P
        };
        var cxE0x = function (gf7Y, e4i) {
            if (!gf7Y) return;
            var cV6P = beM4Q(gf7Y, e4i);
            if (!!cV6P) v4z.cxv0x(cV6P, {version: a4e.t4x(gf7Y, "version")});
            a4e.bHG1x(gf7Y.value)
        };
        var cxF0x = function (D4H) {
            cz5E--;
            a4e.bHS1x(D4H);
            VA1x()
        };
        var cxI0x = function (gf7Y, e4i) {
            if (!gf7Y) return;
            var cV6P = beM4Q(gf7Y, e4i), fu7n = gf7Y.value;
            if (!!cV6P) {
                cz5E++;
                var e4i = {version: a4e.t4x(gf7Y, "version"), onloaded: cxF0x.f4j(null, fu7n)};
                window.setTimeout(v4z.cwB0x.f4j(v4z, cV6P, e4i), 0);
                return
            }
            a4e.bHS1x(fu7n)
        };
        var cxK0x = function (mT9K) {
            cz5E--;
            a4e.cX6R(mT9K);
            VA1x()
        };
        var cxL0x = function (gf7Y, e4i) {
            if (!gf7Y) return;
            var cV6P = beM4Q(gf7Y, e4i)[0];
            if (!!cV6P) {
                cz5E++;
                var e4i = {version: a4e.t4x(gf7Y, "version"), onloaded: cxK0x};
                window.setTimeout(v4z.bzg9X.f4j(v4z, cV6P, e4i), 0)
            }
        };
        var cxM0x = function (C4G, cK6E) {
            cz5E--;
            a4e.ML7E(C4G, cK6E || "");
            VA1x()
        };
        var cxN0x = function (gf7Y, e4i) {
            if (!gf7Y || !gf7Y.id) return;
            var C4G = gf7Y.id, cV6P = beM4Q(gf7Y, e4i)[0];
            if (!!cV6P) {
                cz5E++;
                var Y5d = cV6P + (cV6P.indexOf("?") < 0 ? "?" : "&") + (a4e.t4x(gf7Y, "version") || ""),
                    e4i = {type: "text", method: "GET", onload: cxM0x.f4j(null, C4G)};
                window.setTimeout(v4z.bm5r.f4j(v4z, Y5d, e4i), 0)
            }
        };
        var cyk0x = function (g4k, e4i) {
            var u4y = g4k.name.toLowerCase();
            switch (u4y) {
                case"jst":
                    a4e.eB6v(g4k, !0);
                    return;
                case"txt":
                    a4e.ML7E(g4k.id, g4k.value || "");
                    return;
                case"ntp":
                    a4e.jm8e(g4k.value || "", g4k.id);
                    return;
                case"js":
                    cxI0x(g4k, e4i);
                    return;
                case"css":
                    cxE0x(g4k, e4i);
                    return;
                case"html":
                    cxL0x(g4k, e4i);
                    return;
                case"res":
                    cxN0x(g4k, e4i);
                    return
            }
        };
        I4M.fK7D.A4E({element: document, event: "templateready", oneventadd: VA1x});
        return function (F4J, e4i) {
            F4J = a4e.B4F(F4J);
            if (!!F4J) {
                var i4m = F4J.tagName == "TEXTAREA" ? [F4J] : F4J.getElementsByTagName("textarea");
                k4o.bd5i(i4m, function (g4k) {
                    cyk0x(g4k, e4i)
                });
                a4e.cL6F(F4J, !0)
            }
            VA1x();
            return this
        }
    }();
    a4e.ML7E = function (K4O, D4H) {
        R5W[K4O] = D4H || "";
        return this
    };
    a4e.iH8z = function (K4O) {
        return R5W[K4O] || ""
    };
    a4e.jm8e = function (F4J, K4O) {
        K4O = K4O || k4o.ol0x();
        F4J = a4e.B4F(F4J) || F4J;
        a4e.ML7E(sU1x + K4O, F4J);
        a4e.mS9J(F4J);
        return K4O
    };
    a4e.dD6x = function (K4O) {
        if (!K4O) return null;
        K4O = sU1x + K4O;
        var D4H = a4e.iH8z(K4O);
        if (!D4H) return null;
        if (k4o.fC7v(D4H)) {
            D4H = a4e.nR0x(D4H);
            a4e.ML7E(K4O, D4H)
        }
        return D4H.cloneNode(!0)
    };
    a4e.CH4L = function () {
        var Jl6f = function (D4H, K4O) {
            return K4O == "offset" || K4O == "limit"
        };
        return function (i4m, p4t, e4i) {
            var bs5x = [];
            if (!i4m || !i4m.length || !p4t) return bs5x;
            e4i = e4i || bb5g;
            var dt6n = i4m.length, jY8Q = parseInt(e4i.offset) || 0,
                fX7Q = Math.min(dt6n, jY8Q + (parseInt(e4i.limit) || dt6n)),
                ct5y = {total: i4m.length, range: [jY8Q, fX7Q]};
            NEJ.X(ct5y, e4i, Jl6f);
            for (var i = jY8Q, cF6z; i < fX7Q; i++) {
                ct5y.index = i;
                ct5y.data = i4m[i];
                cF6z = p4t.A4E(ct5y);
                var C4G = cF6z.Fp5u();
                R5W[C4G] = cF6z;
                cF6z.T5Y = cF6z.T5Y.eH6B(function (C4G, cF6z) {
                    delete R5W[C4G];
                    delete cF6z.T5Y
                }.f4j(null, C4G, cF6z));
                bs5x.push(cF6z)
            }
            return bs5x
        }
    }();
    a4e.bCH0x = function (C4G) {
        return R5W[C4G]
    };
    a4e.cFZ2x = function (ec6W, e4i) {
        e4i = e4i || bb5g;
        a4e.cX6R(e4i.tid || "template-box");
        h4l.s4w(document, "templateready", function () {
            ec6W.A4E().z4D("onshow", e4i)
        })
    };
    c4g("dbg").dumpTC = function () {
        return R5W
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, a4e = c4g("nej.e"), k4o = c4g("nej.u"), I4M = c4g("nej.ut"),
        O5T = c4g("nej.ui"), b4f;
    if (!!O5T.el6f) return;
    O5T.el6f = NEJ.C();
    b4f = O5T.el6f.N5S(I4M.cJ6D);
    b4f.cw5B = function () {
        this.cE6y();
        a4e.bzT9K();
        this.ch5m();
        this.bW5b()
    };
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.cym0x(e4i.clazz);
        this.bDm0x(e4i.parent)
    };
    b4f.bC5H = function () {
        this.bF5K();
        this.bDE0x();
        delete this.gh7a;
        a4e.mS9J(this.o4s);
        a4e.x4B(this.o4s, this.bfZ4d);
        delete this.bfZ4d
    };
    b4f.ch5m = br5w;
    b4f.bW5b = function () {
        if (!this.cf5k) this.MJ7C();
        this.o4s = a4e.dD6x(this.cf5k);
        if (!this.o4s) this.o4s = a4e.dj6d("div", this.mj9a);
        a4e.y4C(this.o4s, this.mj9a)
    };
    b4f.MJ7C = br5w;
    b4f.cym0x = function (ed6X) {
        this.bfZ4d = ed6X || "";
        a4e.y4C(this.o4s, this.bfZ4d)
    };
    b4f.czS1x = function () {
        if (!this.mj9a) return;
        a4e.y4C(this.gh7a, this.mj9a + "-parent")
    };
    b4f.bDE0x = function () {
        if (!this.mj9a) return;
        a4e.x4B(this.gh7a, this.mj9a + "-parent")
    };
    b4f.lB9s = function () {
        return this.o4s
    };
    b4f.bDm0x = function (bI5N) {
        if (!this.o4s) return this;
        this.bDE0x();
        if (k4o.gK7D(bI5N)) {
            this.gh7a = bI5N(this.o4s)
        } else {
            this.gh7a = a4e.B4F(bI5N);
            if (!!this.gh7a) this.gh7a.appendChild(this.o4s)
        }
        this.czS1x();
        return this
    };
    b4f.J4N = function () {
        if (!this.gh7a || !this.o4s || this.o4s.parentNode == this.gh7a) return this;
        this.gh7a.appendChild(this.o4s);
        return this
    };
    b4f.bt5y = function () {
        a4e.mS9J(this.o4s);
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, a4e = c4g("nej.e"), k4o = c4g("nej.u"), be5j = c4g("nej.h"),
        O5T = c4g("nej.ui"), wB2x, bEU0x;
    if (!!O5T.Vk1x) return;
    O5T.Vk1x = NEJ.C();
    wB2x = O5T.Vk1x.N5S(O5T.el6f);
    bEU0x = O5T.Vk1x.cs5x;
    wB2x.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.wq2x("oncontentready", e4i.oncontentready || this.czV1x.f4j(this));
        this.cAq1x = !!e4i.nohack;
        this.cAv1x = !!e4i.destroyable;
        this.MG7z(e4i.content)
    };
    wB2x.bC5H = function () {
        this.z4D("onbeforerecycle");
        this.bF5K();
        this.bdW4a();
        this.MG7z("");
        a4e.fb7U(this.o4s, {top: "", left: ""})
    };
    wB2x.czV1x = br5w;
    wB2x.ME7x = br5w;
    wB2x.bdW4a = function () {
        a4e.mS9J(this.o4s);
        if (!!this.nN0x) {
            this.nN0x = be5j.buD8v(this.o4s);
            delete this.nN0x
        }
    };
    wB2x.MG7z = function (bo5t) {
        if (!this.o4s || !this.AF3x || bo5t == null) return this;
        bo5t = bo5t || "";
        k4o.fC7v(bo5t) ? this.AF3x.innerHTML = bo5t : this.AF3x.appendChild(bo5t);
        this.z4D("oncontentready", this.AF3x);
        return this
    };
    wB2x.gD7w = function (bi5n) {
        var D4H = bi5n.top;
        if (D4H != null) {
            D4H += "px";
            a4e.ba5f(this.o4s, "top", D4H);
            a4e.ba5f(this.nN0x, "top", D4H)
        }
        var D4H = bi5n.left;
        if (D4H != null) {
            D4H += "px";
            a4e.ba5f(this.o4s, "left", D4H);
            a4e.ba5f(this.nN0x, "left", D4H)
        }
        return this
    };
    wB2x.J4N = function () {
        a4e.ba5f(this.o4s, "visibility", "hidden");
        bEU0x.J4N.apply(this, arguments);
        this.ME7x();
        a4e.ba5f(this.o4s, "visibility", "");
        if (!this.cAq1x) {
            this.nN0x = be5j.nN0x(this.o4s)
        }
        return this
    };
    wB2x.bt5y = function () {
        this.cAv1x ? this.T5Y() : this.bdW4a();
        return this
    }
})();
(function () {
    var c4g = NEJ.P, br5w = NEJ.F, k4o = c4g("nej.u"), a4e = c4g("nej.e"), O5T = c4g("nej.ui"), BW4a;
    if (!!O5T.bdS4W) return;
    O5T.bdS4W = NEJ.C();
    BW4a = O5T.bdS4W.N5S(O5T.el6f);
    BW4a.bl5q = function (e4i) {
        this.UY1x();
        this.bn5s(this.cAA1x(e4i));
        this.cg5l.onbeforerecycle = this.T5Y.f4j(this);
        this.oU0x = this.bgC4G()
    };
    BW4a.bC5H = function () {
        this.z4D("onbeforerecycle");
        this.bF5K();
        delete this.cg5l;
        a4e.mS9J(this.o4s);
        var AU4Y = this.oU0x;
        if (!!AU4Y) {
            delete this.oU0x;
            AU4Y.T5Y()
        }
    };
    BW4a.bgC4G = br5w;
    BW4a.cAA1x = function (e4i) {
        var m4q = {};
        k4o.eI6C(e4i, function (p4t, K4O) {
            this.cg5l.hasOwnProperty(K4O) ? this.cg5l[K4O] = p4t : m4q[K4O] = p4t
        }, this);
        return m4q
    };
    BW4a.UY1x = function () {
        this.cg5l = {clazz: "", parent: null, content: this.o4s, destroyable: !1, oncontentready: null, nohack: !1}
    };
    BW4a.J4N = function () {
        if (!!this.oU0x) this.oU0x.J4N();
        this.z4D("onaftershow");
        return this
    };
    BW4a.bt5y = function () {
        if (!!this.oU0x) this.oU0x.bt5y();
        return this
    }
})();
(function () {
    var c4g = NEJ.P, em6g = c4g("nej.g"), be5j = c4g("nej.h"), a4e = c4g("nej.e"), k4o = c4g("nej.u"),
        h4l = c4g("nej.v"), O5T = c4g("nej.ui"), UR0x, bHh1x;
    if (!!O5T.MB7u) return;
    var iX8P = a4e.to1x(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + em6g.bwt8l + ");}");
    O5T.MB7u = NEJ.C();
    UR0x = O5T.MB7u.N5S(O5T.el6f);
    bHh1x = O5T.MB7u.cs5x;
    UR0x.bl5q = function (e4i) {
        this.bn5s(e4i);
        var bo5t = e4i.content || "&nbsp;";
        k4o.fC7v(bo5t) ? this.o4s.innerHTML = bo5t : this.o4s.appendChild(bo5t)
    };
    UR0x.bC5H = function () {
        this.bF5K();
        this.o4s.innerHTML = "&nbsp;"
    };
    UR0x.ch5m = function () {
        this.mj9a = iX8P
    };
    UR0x.J4N = function () {
        be5j.buG8y(this.o4s);
        bHh1x.J4N.apply(this, arguments);
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, a4e = c4g("nej.e"), h4l = c4g("nej.v"), O5T = c4g("nej.ut"), wp2x;
    if (!!O5T.wb2x) return;
    O5T.wb2x = NEJ.C();
    wp2x = O5T.wb2x.N5S(O5T.cJ6D);
    wp2x.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.cAW1x = !!e4i.overflow;
        this.o4s = a4e.B4F(e4i.body);
        this.Bk4o = a4e.B4F(e4i.view) || a4e.bFa1x(this.o4s);
        this.bJi2x = a4e.B4F(e4i.mbar) || this.o4s;
        this.bdC3x = parseInt(e4i.direction) || 0;
        if (!!e4i.isRelative) {
            this.o4s.style.position = "relative";
            this.bgL4P = true;
            this.bgM4Q()
        }
        this.bX5c([[document, "mouseup", this.bgR4V.f4j(this)], [document, "mousemove", this.bgX4b.f4j(this)], [this.bJi2x, "mousedown", this.UJ0x.f4j(this)]])
    };
    wp2x.bgM4Q = function () {
        if (!!this.bgL4P) {
            this.My7r = a4e.hU8M(this.o4s, this.Bk4o);
            this.My7r.x -= parseInt(a4e.dh6b(this.o4s, "left")) || 0;
            this.My7r.y -= parseInt(a4e.dh6b(this.o4s, "top")) || 0
        }
    };
    wp2x.bC5H = function () {
        this.bF5K();
        delete this.o4s;
        delete this.bJi2x;
        delete this.Bk4o
    };
    wp2x.bhl4p = function () {
        return {
            x: Math.max(this.Bk4o.clientWidth, this.Bk4o.scrollWidth) - this.o4s.offsetWidth,
            y: Math.max(this.Bk4o.clientHeight, this.Bk4o.scrollHeight) - this.o4s.offsetHeight
        }
    };
    wp2x.UJ0x = function (d4h) {
        h4l.bg5l(d4h);
        if (!!this.hT8L) return;
        this.hT8L = {x: h4l.jG8y(d4h), y: h4l.lZ9Q(d4h)};
        this.bKA2x = this.bhl4p();
        this.z4D("ondragstart", d4h)
    };
    wp2x.bgX4b = function (d4h) {
        if (!this.hT8L) return;
        var bi5n = {x: h4l.jG8y(d4h), y: h4l.lZ9Q(d4h)};
        var pu0x = bi5n.x - this.hT8L.x, px0x = bi5n.y - this.hT8L.y, D4H = {
            top: (parseInt(a4e.dh6b(this.o4s, "top")) || 0) + px0x,
            left: (parseInt(a4e.dh6b(this.o4s, "left")) || 0) + pu0x
        };
        if (this.bgL4P) {
            this.bgM4Q();
            D4H.top = D4H.top + this.My7r.y;
            D4H.left = D4H.left + this.My7r.x
        }
        this.hT8L = bi5n;
        this.gD7w(D4H)
    };
    wp2x.bgR4V = function (d4h) {
        if (!this.hT8L) return;
        delete this.bKA2x;
        delete this.hT8L;
        this.z4D("ondragend", this.bhp4t())
    };
    wp2x.gD7w = function (d4h) {
        if (!this.cAW1x) {
            var bKL2x = this.bKA2x || this.bhl4p();
            d4h.top = Math.min(bKL2x.y, Math.max(0, d4h.top));
            d4h.left = Math.min(bKL2x.x, Math.max(0, d4h.left))
        }
        var cj5o = this.o4s.style;
        if (this.bgL4P) {
            this.bgM4Q();
            d4h.top = d4h.top - this.My7r.y;
            d4h.left = d4h.left - this.My7r.x
        }
        if (this.bdC3x == 0 || this.bdC3x == 2) cj5o.top = d4h.top + "px";
        if (this.bdC3x == 0 || this.bdC3x == 1) cj5o.left = d4h.left + "px";
        this.z4D("onchange", d4h);
        return this
    };
    wp2x.bhp4t = function () {
        return {left: parseInt(a4e.dh6b(this.o4s, "left")) || 0, top: parseInt(a4e.dh6b(this.o4s, "top")) || 0}
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, a4e = NEJ.P("nej.e"), h4l = NEJ.P("nej.v"), k4o = NEJ.P("nej.u"),
        I4M = NEJ.P("nej.ut"), O5T = NEJ.P("nej.ui"), iX8P, ge7X, b4f, L5Q;
    if (!!O5T.bcS3x) return;
    O5T.bcS3x = NEJ.C();
    b4f = O5T.bcS3x.N5S(O5T.Vk1x);
    L5Q = O5T.bcS3x.cs5x;
    b4f.cw5B = function () {
        this.rP1x = {};
        this.kG9x = {onchange: this.bgX4b.f4j(this)};
        this.cE6y()
    };
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.cBA1x(e4i.mask);
        this.cBI1x(e4i.align);
        this.BR4V(e4i.title);
        if (!e4i.draggable) return;
        this.iS8K = I4M.wb2x.A4E(this.kG9x)
    };
    b4f.bC5H = function () {
        this.bF5K();
        delete this.qH0x;
        delete this.Uy0x;
        if (!!this.BX4b) {
            this.BX4b.T5Y();
            delete this.BX4b
        }
        if (!!this.iS8K) {
            this.iS8K.T5Y();
            delete this.iS8K
        }
    };
    b4f.ch5m = function () {
        this.mj9a = iX8P;
        this.cf5k = ge7X
    };
    b4f.bW5b = function () {
        this.ci5n();
        var i4m = a4e.dk6e(this.o4s);
        this.AF3x = i4m[1];
        this.kG9x.mbar = i4m[0];
        this.kG9x.body = this.o4s;
        h4l.s4w(i4m[2], "mousedown", this.cCa1x.f4j(this));
        h4l.s4w(this.kG9x.mbar, "mousedown", this.UJ0x.f4j(this));
        this.bNR3x = a4e.dk6e(this.kG9x.mbar)[0]
    };
    b4f.cCa1x = function (d4h) {
        h4l.bg5l(d4h);
        this.z4D("onclose", d4h);
        if (!d4h.stopped) {
            this.bt5y()
        }
    };
    b4f.UJ0x = function (d4h) {
        h4l.z4D(document, "click")
    };
    b4f.bgX4b = function (d4h) {
        if (!this.nN0x) return;
        a4e.fb7U(this.nN0x, {top: d4h.top + "px", left: d4h.left + "px"})
    };
    b4f.ME7x = function () {
        var ev6p = [function () {
            return 0
        }, function (nW0x, mR9I, bi5n, K4O) {
            if (K4O == "top" && window.top != window.self) {
                var bcJ3x = 0, Fw5B = 0;
                if (top.g_topBarHeight) bcJ3x = top.g_topBarHeight;
                if (top.g_bottomBarShow && top.g_bottomBarHeight) Fw5B = top.g_bottomBarHeight;
                if (nW0x.top <= bcJ3x) {
                    var bhA4E = Math.max(0, (mR9I.height - (bcJ3x - nW0x.top) - Fw5B - bi5n.height) / 2);
                    return bhA4E + bcJ3x
                } else {
                    var bhA4E = Math.max(0, (mR9I.height - Fw5B - bi5n.height) / 2);
                    return bhA4E + nW0x.top
                }
            }
            return Math.max(0, nW0x[K4O] + (mR9I[iy8q[K4O]] - bi5n[iy8q[K4O]]) / 2)
        }, function (nW0x, mR9I, bi5n, K4O) {
            return nW0x[K4O] + (mR9I[iy8q[K4O]] - bi5n[iy8q[K4O]])
        }], cCr1x = ["left", "top"], iy8q = {left: "width", top: "height"};
        return function () {
            var D4H = {}, cj5o = this.o4s.style, jD8v = a4e.oy0x(), nW0x = {left: jD8v.scrollLeft, top: jD8v.scrollTop},
                mR9I = {width: jD8v.clientWidth, height: jD8v.clientHeight},
                bi5n = {width: this.o4s.offsetWidth, height: this.o4s.offsetHeight},
                dq6k = {left: jD8v.clientWidth - this.o4s.offsetWidth, top: jD8v.clientHeight - this.o4s.offsetHeight};
            k4o.bd5i(cCr1x, function (K4O, r4v) {
                var dx6r = ev6p[this.qH0x[r4v]];
                if (!dx6r) return;
                D4H[K4O] = dx6r(nW0x, mR9I, bi5n, K4O)
            }, this);
            this.gD7w(D4H)
        }
    }();
    b4f.cCw1x = function () {
        if (!this.BX4b) {
            if (!this.Uy0x) return;
            this.rP1x.parent = this.gh7a;
            this.BX4b = this.Uy0x.A4E(this.rP1x)
        }
        this.BX4b.J4N()
    };
    b4f.bdW4a = function () {
        if (!!this.BX4b) this.BX4b.bt5y();
        L5Q.bdW4a.apply(this, arguments)
    };
    b4f.cBA1x = function (lp9g) {
        if (!!lp9g) {
            if (lp9g instanceof O5T.MB7u) {
                this.BX4b = lp9g;
                return
            }
            if (k4o.gK7D(lp9g)) {
                this.Uy0x = lp9g;
                return
            }
            this.Uy0x = O5T.MB7u;
            if (k4o.fC7v(lp9g)) this.rP1x.clazz = lp9g;
            return
        }
        this.Uy0x = null
    };
    b4f.BR4V = function (ep6j, dV6P) {
        if (!!this.bNR3x) {
            var bag2x = !dV6P ? "innerText" : "innerHTML";
            this.bNR3x[bag2x] = ep6j || "标题"
        }
        return this
    };
    b4f.cBI1x = function () {
        var df6Z = /\s+/, cCx1x = {left: 0, center: 1, right: 2, auto: 3},
            cCy1x = {top: 0, middle: 1, bottom: 2, auto: 3};
        return function (or0x) {
            this.qH0x = (or0x || "").split(df6Z);
            var cl5q = cCx1x[this.qH0x[0]];
            if (cl5q == null) cl5q = 1;
            this.qH0x[0] = cl5q;
            var cl5q = cCy1x[this.qH0x[1]];
            if (cl5q == null) cl5q = 1;
            this.qH0x[1] = cl5q;
            return this
        }
    }();
    b4f.J4N = function () {
        L5Q.J4N.apply(this, arguments);
        this.cCw1x();
        return this
    };
    iX8P = a4e.to1x(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    ge7X = a4e.jm8e('<div class="' + iX8P + '"><div class="zbar"><div class="zttl f-thide">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function () {
    var c4g = NEJ.P, k4o = c4g("nej.u"), O5T = c4g("nej.ui"), bhD4H;
    if (!!O5T.bcA3x) return;
    O5T.bcA3x = NEJ.C();
    bhD4H = O5T.bcA3x.N5S(O5T.bdS4W);
    bhD4H.bgC4G = function () {
        return O5T.bcS3x.A4E(this.cg5l)
    };
    bhD4H.UY1x = function () {
        O5T.bcA3x.cs5x.UY1x.apply(this, arguments);
        this.cg5l.mask = null;
        this.cg5l.title = "标题";
        this.cg5l.align = "";
        this.cg5l.draggable = !1;
        this.cg5l.onclose = null
    }
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), bc5h = c4g("nej.ui"), n4r = c4g("nm.l"), b4f, L5Q;
    n4r.eo6i = NEJ.C();
    b4f = n4r.eo6i.N5S(bc5h.bcA3x);
    b4f.bl5q = function (e4i) {
        e4i.clazz = "m-layer z-show " + (e4i.clazz || "");
        e4i.nohack = true;
        e4i.draggable = true;
        this.bn5s(e4i)
    };
    b4f.dY6S = function (g4k, bG5L) {
        if (!g4k) return;
        a4e.ba5f(g4k, "display", !bG5L ? "none" : "");
        g4k.lastChild.innerText = bG5L || ""
    };
    b4f.dS6M = function (gP7I, db6V, Ur0x, Up0x) {
        var ec6W = "js-lock";
        if (db6V === undefined) return a4e.bE5J(gP7I, ec6W);
        !db6V ? a4e.x4B(gP7I, ec6W) : a4e.y4C(gP7I, ec6W);
        gP7I.firstChild.innerText = !db6V ? Ur0x : Up0x
    };
    n4r.eo6i.J4N = function (e4i) {
        e4i = e4i || {};
        if (e4i.mask === undefined) e4i.mask = "m-mask";
        if (e4i.parent === undefined) e4i.parent = document.body;
        if (e4i.draggable === undefined) e4i.draggable = true;
        !!this.fg7Z && this.fg7Z.T5Y();
        this.fg7Z = this.A4E(e4i);
        this.fg7Z.J4N(e4i);
        return this.fg7Z
    };
    n4r.eo6i.bt5y = function () {
        !!this.fg7Z && this.fg7Z.T5Y()
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), q4u = c4g("nm.d"),
        l4p = c4g("nm.x"), n4r = c4g("nm.l"), b4f, L5Q;
    n4r.bhK5P = NEJ.C();
    b4f = n4r.bhK5P.N5S(n4r.eo6i);
    L5Q = n4r.bhK5P.cs5x;
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        if (e4i.bubble === undefined) e4i.bubble = true;
        this.Uj0x = e4i.bubble;
        this.qR0x = e4i.message || ""
    };
    b4f.ch5m = function () {
        this.cf5k = a4e.jm8e('<div class="lyct f-cb f-tc"></div>')
    };
    b4f.bW5b = function () {
        this.ci5n();
        h4l.s4w(this.o4s, "click", this.cM6G.f4j(this))
    };
    b4f.cM6G = function (d4h) {
        var g4k = h4l.X5c(d4h, "d:action");
        if (!g4k) return;
        if (g4k.href) h4l.cn5s(d4h);
        if (a4e.t4x(g4k, "action") == "close") this.bt5y();
        if (this.Uj0x === !1) h4l.tW1x(d4h);
        this.z4D("onaction", a4e.t4x(g4k, "action"))
    };
    b4f.J4N = function () {
        L5Q.J4N.call(this);
        this.o4s.innerHTML = this.qR0x
    };
    var gG7z = a4e.eB6v('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l4p.mV9M = function () {
        var eg6a;
        var cF6z;
        var bhQ5V = function (eN7G, V5a) {
            if (k4o.gK7D(eN7G, "function") && eN7G(V5a) != -1) cF6z.T5Y()
        };
        var Dt4x = function () {
            !!cF6z && cF6z.bt5y()
        };
        return function (e4i) {
            clearTimeout(eg6a);
            e4i = e4i || {};
            e4i.title = e4i.title || "提示";
            e4i.clazz = e4i.clazz || "";
            e4i.parent = e4i.parent || document.body;
            e4i.buttons = e4i.buttons || [];
            e4i.message = a4e.cd5i(gG7z, e4i);
            e4i.onaction = bhQ5V.f4j(null, e4i.action);
            if (e4i.mask === undefined) e4i.mask = true;
            if (e4i.draggable === undefined) e4i.draggable = true;
            !!cF6z && cF6z.T5Y();
            cF6z = n4r.bhK5P.A4E(e4i);
            cF6z.J4N();
            if (e4i.autoclose) eg6a = setTimeout(Dt4x.f4j(null), 2e3);
            return cF6z
        }
    }();
    l4p.fs7l = function (e4i) {
        e4i = e4i || {};
        e4i.clazz = e4i.clazz || "m-layer-w1";
        e4i.buttons = [{klass: "u-btn2-2", action: "close", text: e4i.btntxt || "确定"}];
        var cF6z = l4p.mV9M(e4i);
        return cF6z
    };
    l4p.ho7h = function (e4i) {
        e4i = e4i || {};
        e4i.clazz = e4i.clazz || "m-layer-w2";
        e4i.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e4i.btnok || "确定",
            style: e4i.okstyle || ""
        }, {klass: "u-btn2-1", action: "close", text: e4i.btncc || "取消", style: e4i.ccstyle || ""}];
        var cF6z = l4p.mV9M(e4i);
        return cF6z
    }
})();
(function () {
    var c4g = NEJ.P, br5w = NEJ.F, a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u");
    a4e.cCD1x = function () {
        var gL7E = /[\r\n]/gi, R5W = {};
        var cCJ1x = function (cO6I) {
            return (cO6I || "").replace(gL7E, "aa").length
        };
        var bVs6m = function (C4G) {
            var bh5m = R5W[C4G], bVy6s = a4e.B4F(C4G), qV0x = a4e.B4F(C4G + "-counter");
            if (!bVy6s || !bh5m) return;
            var d4h = {input: bVy6s.value};
            d4h.length = bh5m.onlength(d4h.input);
            d4h.delta = bh5m.max - d4h.length;
            bh5m.onchange(d4h);
            qV0x.innerHTML = d4h.value || "剩余" + d4h.delta + "个字"
        };
        return function (F4J, e4i) {
            var C4G = a4e.lP9G(F4J);
            if (!C4G || !!R5W[C4G]) return;
            var bh5m = NEJ.X({}, e4i);
            bh5m.onchange = bh5m.onchange || br5w;
            bh5m.onlength = cCJ1x;
            if (!bh5m.max) {
                var bVT6N = parseInt(a4e.gJ7C(C4G, "maxlength")), byx9o = parseInt(a4e.t4x(C4G, "maxLength"));
                bh5m.max = bVT6N || byx9o || 100;
                if (!bVT6N && !!byx9o) bh5m.onlength = k4o.fv7o
            }
            R5W[C4G] = bh5m;
            h4l.s4w(C4G, "input", bVs6m.f4j(null, C4G));
            var g4k = a4e.JW6Q(C4G, {nid: bh5m.nid || "js-counter", clazz: bh5m.clazz});
            bh5m.xid = C4G + "-counter";
            g4k.id = bh5m.xid;
            bVs6m(C4G)
        }
    }()
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), be5j = c4g("nej.h");
    be5j.bhV5a = function (F4J, ed6X) {
    }
})();
(function () {
    var c4g = NEJ.P, br5w = NEJ.F, O5T = c4g("nej.p"), a4e = c4g("nej.e"), h4l = c4g("nej.v"), be5j = c4g("nej.h");
    if (O5T.nB9s.trident) return;
    be5j.bhV5a = function () {
        var R5W = {};
        var IJ6D = function (d4h) {
            var dn6h = h4l.X5c(d4h);
            if (!!dn6h.value) return;
            a4e.ba5f(a4e.JW6Q(dn6h), "display", "none")
        };
        var DL4P = function (d4h) {
            var dn6h = h4l.X5c(d4h);
            if (!!dn6h.value) return;
            a4e.ba5f(a4e.JW6Q(dn6h), "display", "")
        };
        var cCM1x = function (dn6h, ed6X) {
            var C4G = a4e.lP9G(dn6h), iV8N = a4e.JW6Q(dn6h, {tag: "label", clazz: ed6X});
            iV8N.htmlFor = C4G;
            var cK6E = a4e.gJ7C(dn6h, "placeholder") || "";
            iV8N.innerText = cK6E == "null" ? "" : cK6E;
            var ce5j = dn6h.offsetHeight + "px";
            a4e.fb7U(iV8N, {left: 0, display: !dn6h.value ? "" : "none"})
        };
        return be5j.bhV5a.eH6B(function (d4h) {
            d4h.stopped = !0;
            var bf5k = d4h.args, dn6h = a4e.B4F(bf5k[0]);
            if (!!R5W[dn6h.id]) return;
            cCM1x(dn6h, bf5k[1]);
            R5W[dn6h.id] = !0;
            h4l.s4w(dn6h, "blur", DL4P.f4j(null));
            h4l.s4w(dn6h, "focus", IJ6D.f4j(null))
        })
    }()
})();
(function () {
    var c4g = NEJ.P, be5j = c4g("nej.h"), a4e = c4g("nej.e"), cZ6T = c4g("nej.x");
    a4e.gr7k = cZ6T.gr7k = function (F4J, ed6X) {
        be5j.bhV5a(F4J, a4e.t4x(F4J, "holder") || ed6X || "js-placeholder");
        return this
    };
    cZ6T.isChange = !0
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        O5T = c4g("nej.ut"), hN8F;
    if (!!O5T.Ue0x) return;
    O5T.Ue0x = NEJ.C();
    hN8F = O5T.Ue0x.N5S(O5T.cJ6D);
    hN8F.cw5B = function () {
        this.cE6y();
        this.Fz5E = {tp: {nid: "js-nej-tp"}, ok: {nid: "js-nej-ok"}, er: {nid: "js-nej-er"}}
    };
    hN8F.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.go7h = document.forms[e4i.form] || a4e.B4F(e4i.form);
        this.bX5c([[this.go7h, "keypress", this.cCQ1x.f4j(this)]]);
        this.qR0x = e4i.message || {};
        this.qR0x.pass = this.qR0x.pass || "&nbsp;";
        var fk7d = this.pS0x(this.go7h, "focusMode", 1);
        if (!isNaN(fk7d)) {
            this.bAi9Z = {mode: fk7d, clazz: e4i.focus}
        }
        this.AQ3x = e4i.holder;
        this.Fz5E.tp.clazz = "js-mhd " + (e4i.tip || "js-tip");
        this.Fz5E.ok.clazz = "js-mhd " + (e4i.pass || "js-pass");
        this.Fz5E.er.clazz = "js-mhd " + (e4i.error || "js-error");
        this.bAs9j = e4i.invalid || "js-invalid";
        this.cCZ1x(e4i);
        this.gI7B();
        if (!!this.AS4W) this.AS4W.focus()
    };
    hN8F.bC5H = function () {
        this.bF5K();
        delete this.qR0x;
        delete this.AS4W;
        delete this.FA5F;
        delete this.go7h;
        delete this.bBt0x;
        delete this.TR0x
    };
    hN8F.pS0x = function (g4k, xA2x, u4y) {
        var D4H = a4e.t4x(g4k, xA2x);
        switch (u4y) {
            case 1:
                return parseInt(D4H);
            case 2:
                return (D4H || "").toLowerCase() == "true";
            case 3:
                return this.biA5F(D4H)
        }
        return D4H
    };
    hN8F.Bb4f = function (D4H, u4y) {
        if (u4y == "date") return this.biA5F(D4H);
        return parseInt(D4H)
    };
    hN8F.bbH3x = function () {
        var kn8f = /^button|submit|reset|image|hidden|file$/i;
        return function (g4k) {
            g4k = this.B4F(g4k) || g4k;
            var u4y = g4k.type;
            return !!g4k.name && !kn8f.test(g4k.type || "")
        }
    }();
    hN8F.cDd1x = function () {
        var kn8f = /^hidden$/i;
        return function (g4k) {
            if (this.bbH3x(g4k)) return !0;
            g4k = this.B4F(g4k) || g4k;
            var u4y = g4k.type || "";
            return kn8f.test(u4y)
        }
    }();
    hN8F.biA5F = function () {
        var df6Z = /[-\/]/;
        var cDS2x = function (D4H) {
            if (!D4H) return "";
            D4H = D4H.split(df6Z);
            D4H.push(D4H.shift());
            return D4H.join("/")
        };
        return function (D4H) {
            if ((D4H || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(cDS2x(D4H))
        }
    }();
    hN8F.cCQ1x = function (d4h) {
        if (d4h.keyCode != 13) return;
        this.z4D("onenter", d4h)
    };
    hN8F.cEa2x = function (C4G, W5b) {
        var sq1x = this.TR0x[W5b], D4H = this.pS0x(C4G, W5b);
        if (!D4H || !sq1x) return;
        this.bbE3x(C4G, sq1x);
        this.biC5H(C4G, W5b, D4H)
    };
    hN8F.cEc2x = function (C4G, W5b) {
        try {
            var bCL0x = this.pS0x(C4G, W5b);
            if (!bCL0x) return;
            var D4H = new RegExp(bCL0x);
            this.biC5H(C4G, W5b, D4H);
            this.bbE3x(C4G, this.TR0x[W5b])
        } catch (e) {
        }
    };
    hN8F.cEj2x = function (C4G, W5b) {
        var sq1x = this.TR0x[W5b];
        if (!!sq1x && this.pS0x(C4G, W5b, 2)) this.bbE3x(C4G, sq1x)
    };
    hN8F.biI5N = function (C4G, W5b, D4H) {
        D4H = parseInt(D4H);
        if (isNaN(D4H)) return;
        this.biC5H(C4G, W5b, D4H);
        this.bbE3x(C4G, this.TR0x[W5b])
    };
    hN8F.bCW0x = function (C4G, W5b) {
        this.biI5N(C4G, W5b, this.pS0x(C4G, W5b))
    };
    hN8F.bCY0x = function (C4G, W5b) {
        this.biI5N(C4G, W5b, a4e.gJ7C(C4G, W5b))
    };
    hN8F.bDa0x = function (C4G, W5b, u4y) {
        var D4H = this.Bb4f(this.pS0x(C4G, W5b), this.pS0x(C4G, "type"));
        this.biI5N(C4G, W5b, D4H)
    };
    hN8F.cEo2x = function () {
        var gL7E = /^input|textarea$/i;
        var IJ6D = function (d4h) {
            this.pZ0x(h4l.X5c(d4h))
        };
        var DL4P = function (d4h) {
            var g4k = h4l.X5c(d4h);
            if (!this.pS0x(g4k, "ignore", 2)) {
                this.bDl0x(g4k)
            }
        };
        return function (g4k) {
            if (this.pS0x(g4k, "autoFocus", 2)) this.AS4W = g4k;
            var rl1x = a4e.gJ7C(g4k, "placeholder");
            if (!!rl1x && rl1x != "null") a4e.gr7k(g4k, this.AQ3x);
            if (!!this.bAi9Z && gL7E.test(g4k.tagName)) a4e.my9p(g4k, this.bAi9Z);
            var C4G = a4e.lP9G(g4k);
            this.cEj2x(C4G, "required");
            this.cEa2x(C4G, "type");
            this.cEc2x(C4G, "pattern");
            this.bCY0x(C4G, "maxlength");
            this.bCY0x(C4G, "minlength");
            this.bCW0x(C4G, "maxLength");
            this.bCW0x(C4G, "minLength");
            this.bDa0x(C4G, "min");
            this.bDa0x(C4G, "max");
            var W5b = g4k.name;
            this.qR0x[W5b + "-tip"] = this.pS0x(g4k, "tip");
            this.qR0x[W5b + "-error"] = this.pS0x(g4k, "message");
            this.pZ0x(g4k);
            var bx5C = this.FA5F[C4G], j4n = (bx5C || bb5g).data || bb5g, TH0x = this.pS0x(g4k, "counter", 2);
            if (TH0x && (j4n.maxlength || j4n.maxLength)) {
                a4e.cCD1x(C4G, {nid: this.Fz5E.tp.nid, clazz: "js-counter"})
            }
            if (!!bx5C && gL7E.test(g4k.tagName)) {
                this.bX5c([[g4k, "focus", IJ6D.f4j(this)], [g4k, "blur", DL4P.f4j(this)]])
            } else if (this.pS0x(g4k, "focus", 2)) {
                this.bX5c([[g4k, "focus", IJ6D.f4j(this)]])
            }
        }
    }();
    hN8F.cCZ1x = function () {
        var FC5H = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function (v) {
                return !v || !isNaN(this.biA5F(v))
            }
        };
        var cEp2x = {
            required: function (g4k) {
                var u4y = g4k.type, cEv2x = !g4k.value, cEy2x = (u4y == "checkbox" || u4y == "radio") && !g4k.checked;
                if (cEy2x || cEv2x) return -1
            }, type: function (g4k, e4i) {
                var df6Z = this.bBt0x[e4i.type], fu7n = g4k.value.trim(), cEA2x = !!df6Z.test && !df6Z.test(fu7n),
                    cEU2x = k4o.gK7D(df6Z) && !df6Z.call(this, fu7n);
                if (cEA2x || cEU2x) return -2
            }, pattern: function (g4k, e4i) {
                if (!e4i.pattern.test(g4k.value)) return -3
            }, maxlength: function (g4k, e4i) {
                if (g4k.value.length > e4i.maxlength) return -4
            }, minlength: function (g4k, e4i) {
                if (g4k.value.length < e4i.minlength) return -5
            }, maxLength: function (g4k, e4i) {
                if (k4o.fv7o(g4k.value) > e4i.maxLength) return -4
            }, minLength: function (g4k, e4i) {
                if (k4o.fv7o(g4k.value) < e4i.minLength) return -5
            }, min: function (g4k, e4i) {
                var gX7Q = this.Bb4f(g4k.value, e4i.type);
                if (isNaN(gX7Q) || gX7Q < e4i.min) return -6
            }, max: function (g4k, e4i) {
                var gX7Q = this.Bb4f(g4k.value, e4i.type);
                if (isNaN(gX7Q) || gX7Q > e4i.max) return -7
            }
        };
        return function (e4i) {
            this.bBt0x = NEJ.X(NEJ.X({}, FC5H), e4i.type);
            this.TR0x = NEJ.X(NEJ.X({}, cEp2x), e4i.attr)
        }
    }();
    hN8F.bbE3x = function (C4G, zc3x) {
        if (!k4o.gK7D(zc3x)) return;
        var bx5C = this.FA5F[C4G];
        if (!bx5C || !bx5C.func) {
            bx5C = bx5C || {};
            bx5C.func = [];
            this.FA5F[C4G] = bx5C
        }
        bx5C.func.push(zc3x)
    };
    hN8F.biC5H = function (C4G, W5b, D4H) {
        if (!W5b) return;
        var bx5C = this.FA5F[C4G];
        if (!bx5C || !bx5C.data) {
            bx5C = bx5C || {};
            bx5C.data = {};
            this.FA5F[C4G] = bx5C
        }
        bx5C.data[W5b] = D4H
    };
    hN8F.bDl0x = function (g4k) {
        g4k = this.B4F(g4k) || g4k;
        var bx5C = this.FA5F[a4e.lP9G(g4k)];
        if (!g4k || !bx5C || !this.bbH3x(g4k)) return !0;
        var m4q;
        k4o.eI6C(bx5C.func, function (ev6p) {
            m4q = ev6p.call(this, g4k, bx5C.data);
            return m4q != null
        }, this);
        if (m4q == null) {
            var d4h = {target: g4k, form: this.go7h};
            this.z4D("oncheck", d4h);
            m4q = d4h.value
        }
        var d4h = {target: g4k, form: this.go7h};
        if (m4q != null) {
            d4h.code = m4q;
            this.z4D("oninvalid", d4h);
            if (!d4h.stopped) {
                this.cEZ2x(g4k, d4h.value || this.qR0x[g4k.name + m4q])
            }
        } else {
            this.z4D("onvalid", d4h);
            if (!d4h.stopped) this.cEY2x(g4k, d4h.value)
        }
        return m4q == null
    };
    hN8F.zk3x = function () {
        var cEX2x = function (bcP3x, bcR3x) {
            return bcP3x == bcR3x ? "block" : "none"
        };
        var cEW2x = function (g4k, u4y, bG5L) {
            var rl1x = bEX0x.call(this, g4k, u4y);
            if (!rl1x && !!bG5L) rl1x = a4e.JW6Q(g4k, this.Fz5E[u4y]);
            return rl1x
        };
        var bEX0x = function (g4k, u4y) {
            var rl1x;
            if (u4y == "tp") rl1x = a4e.B4F(g4k.name + "-tip");
            if (!rl1x) rl1x = a4e.H4L(g4k.parentNode, this.Fz5E[u4y].nid)[0];
            return rl1x
        };
        return function (g4k, bG5L, u4y) {
            g4k = this.B4F(g4k) || g4k;
            if (!g4k) return;
            u4y == "er" ? a4e.y4C(g4k, this.bAs9j) : a4e.x4B(g4k, this.bAs9j);
            var rl1x = cEW2x.call(this, g4k, u4y, bG5L);
            if (!!rl1x && !!bG5L) rl1x.innerHTML = bG5L;
            k4o.eI6C(this.Fz5E, function (D4H, K4O) {
                a4e.ba5f(bEX0x.call(this, g4k, K4O), "display", cEX2x(u4y, K4O))
            }, this)
        }
    }();
    hN8F.pZ0x = function (g4k, bG5L) {
        this.zk3x(g4k, bG5L || this.qR0x[g4k.name + "-tip"], "tp");
        return this
    };
    hN8F.cEY2x = function (g4k, bG5L) {
        this.zk3x(g4k, bG5L || this.qR0x[g4k.name + "-pass"] || this.qR0x.pass, "ok");
        return this
    };
    hN8F.cEZ2x = function (g4k, bG5L) {
        this.zk3x(g4k, bG5L || this.qR0x[g4k.name + "-error"], "er");
        return this
    };
    hN8F.iO8G = function () {
        var gL7E = /^(?:radio|checkbox)$/i;
        var cEV2x = function (D4H) {
            return D4H == null ? "" : D4H
        };
        var bFk1x = function (D4H, g4k) {
            if (gL7E.test(g4k.type || "")) {
                g4k.checked = D4H == g4k.value
            } else {
                g4k.value = cEV2x(D4H)
            }
        };
        return function (W5b, D4H) {
            var g4k = this.B4F(W5b);
            if (!g4k) return this;
            if (g4k.tagName == "SELECT" || !g4k.length) {
                bFk1x(D4H, g4k)
            } else {
                k4o.bd5i(g4k, bFk1x.f4j(null, D4H))
            }
            return this
        }
    }();
    hN8F.B4F = function (W5b) {
        return this.go7h.elements[W5b]
    };
    hN8F.cFb2x = function () {
        return this.go7h
    };
    hN8F.baX3x = function () {
        var gL7E = /^radio|checkbox$/i, kn8f = /^number|date$/;
        var cET2x = function (bz5E, g4k) {
            var W5b = g4k.name, D4H = g4k.value, bx5C = bz5E[W5b], u4y = this.pS0x(g4k, "type");
            if (kn8f.test(u4y)) D4H = this.Bb4f(D4H, u4y);
            if (gL7E.test(g4k.type) && !g4k.checked) {
                D4H = this.pS0x(g4k, "value");
                if (!D4H) return
            }
            if (!!bx5C) {
                if (!k4o.eL7E(bx5C)) {
                    bx5C = [bx5C];
                    bz5E[W5b] = bx5C
                }
                bx5C.push(D4H)
            } else {
                bz5E[W5b] = D4H
            }
        };
        return function () {
            var m4q = {};
            k4o.bd5i(this.go7h.elements, function (g4k) {
                if (this.cDd1x(g4k)) cET2x.call(this, m4q, g4k)
            }, this);
            return m4q
        }
    }();
    hN8F.To0x = function () {
        var cES2x = function (g4k) {
            if (this.bbH3x(g4k)) this.pZ0x(g4k)
        };
        return function () {
            this.go7h.reset();
            k4o.bd5i(this.go7h.elements, cES2x, this);
            return this
        }
    }();
    hN8F.cHL3x = function () {
        this.go7h.submit();
        return this
    };
    hN8F.gI7B = function () {
        var cEF2x = function (g4k) {
            if (this.bbH3x(g4k)) this.cEo2x(g4k)
        };
        return function () {
            this.FA5F = {};
            k4o.bd5i(this.go7h.elements, cEF2x, this);
            return this
        }
    }();
    hN8F.cEE2x = function (g4k) {
        g4k = this.B4F(g4k) || g4k;
        if (!!g4k) return this.bDl0x(g4k);
        var m4q = !0;
        k4o.bd5i(this.go7h.elements, function (g4k) {
            var jw8o = this.cEE2x(g4k);
            m4q = m4q && jw8o
        }, this);
        return m4q
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, a4e = c4g("nej.e"), h4l = c4g("nej.v"), I4M = c4g("nej.ut"), k4o = c4g("nej.u"),
        l4p = c4g("nm.x"), n4r = c4g("nm.l"), b4f, L5Q;
    n4r.baG2x = NEJ.C();
    b4f = n4r.baG2x.N5S(n4r.eo6i);
    L5Q = n4r.baG2x.cs5x;
    b4f.bW5b = function () {
        this.ci5n();
        h4l.s4w(this.o4s, "click", this.cM6G.f4j(this));
        h4l.s4w(document, "mousewheel", this.Co4s.f4j(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.Co4s.f4j(this))
    };
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        if (e4i.jst) {
            this.o4s.innerHTML = a4e.cd5i(e4i.jst, e4i.data)
        } else if (e4i.ntp) {
            this.o4s.appendChild(a4e.dD6x(e4i.ntp))
        } else if (e4i.txt) {
            this.o4s.innerHTML = a4e.iH8z(e4i.txt)
        } else if (e4i.html) {
            this.o4s.innerHTML = e4i.html
        }
        var Tf0x = this.o4s.getElementsByTagName("form");
        if (Tf0x.length) {
            this.go7h = I4M.Ue0x.A4E({form: Tf0x[0]})
        }
        this.FG5L = a4e.dk6e(this.o4s)[0]
    };
    b4f.bC5H = function () {
        this.z4D("ondestroy");
        this.bF5K();
        this.o4s.innerHTML = "";
        delete this.FG5L
    };
    b4f.cM6G = function (d4h) {
        var g4k = h4l.X5c(d4h, "d:action"), j4n = this.go7h ? this.go7h.baX3x() : null,
            d4h = {action: a4e.t4x(g4k, "action")};
        if (j4n) d4h.data = j4n;
        if (d4h.action) {
            this.z4D("onaction", d4h);
            if (d4h.stopped) return;
            this.bt5y()
        }
    };
    b4f.Co4s = function (d4h) {
        if (!this.FG5L) return;
        h4l.bg5l(d4h);
        var dq6k = d4h.wheelDelta || -d4h.detail;
        this.FG5L.scrollTop -= dq6k
    };
    l4p.ki8a = function (e4i) {
        e4i.destroyable = e4i.destroyable || true;
        e4i.title = e4i.title || "提示";
        e4i.draggable = true;
        e4i.parent = e4i.parent || document.body;
        e4i.mask = e4i.mask || true;
        var AU4Y = n4r.baG2x.A4E(e4i);
        AU4Y.J4N();
        return AU4Y
    }
})();
(function () {
    var p = NEJ.P("nej.u");
    var bGB1x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Tb0x = {}, FH5M = {};
    for (var i = 0, l = bGB1x.length, c; i < l; i++) {
        c = bGB1x.charAt(i);
        Tb0x[i] = c;
        FH5M[c] = i
    }
    var cED2x = function (iD8v) {
        var r4v = 0, c, m4q = [];
        while (r4v < iD8v.length) {
            c = iD8v[r4v];
            if (c < 128) {
                m4q.push(String.fromCharCode(c));
                r4v++
            } else if (c > 191 && c < 224) {
                m4q.push(String.fromCharCode((c & 31) << 6 | iD8v[r4v + 1] & 63));
                r4v += 2
            } else {
                m4q.push(String.fromCharCode((c & 15) << 12 | (iD8v[r4v + 1] & 63) << 6 | iD8v[r4v + 2] & 63));
                r4v += 3
            }
        }
        return m4q.join("")
    };
    var cEz2x = function () {
        var hB8t = /\r\n/g;
        return function (j4n) {
            j4n = j4n.replace(hB8t, "\n");
            var m4q = [], mM9D = String.fromCharCode(237);
            if (mM9D.charCodeAt(0) < 0) for (var i = 0, l = j4n.length, c; i < l; i++) {
                c = j4n.charCodeAt(i);
                c > 0 ? m4q.push(c) : m4q.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
            } else for (var i = 0, l = j4n.length, c; i < l; i++) {
                c = j4n.charCodeAt(i);
                if (c < 128) m4q.push(c); else if (c > 127 && c < 2048) m4q.push(c >> 6 | 192, c & 63 | 128); else m4q.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
            }
            return m4q
        }
    }();
    var LY7R = function (iD8v) {
        var r4v = 0, m4q = [], fk7d = iD8v.length % 3;
        if (fk7d == 1) iD8v.push(0, 0);
        if (fk7d == 2) iD8v.push(0);
        while (r4v < iD8v.length) {
            m4q.push(Tb0x[iD8v[r4v] >> 2], Tb0x[(iD8v[r4v] & 3) << 4 | iD8v[r4v + 1] >> 4], Tb0x[(iD8v[r4v + 1] & 15) << 2 | iD8v[r4v + 2] >> 6], Tb0x[iD8v[r4v + 2] & 63]);
            r4v += 3
        }
        if (fk7d == 1) m4q[m4q.length - 1] = m4q[m4q.length - 2] = "=";
        if (fk7d == 2) m4q[m4q.length - 1] = "=";
        return m4q.join("")
    };
    var bHl1x = function () {
        var rT1x = /\n|\r|=/g;
        return function (j4n) {
            var r4v = 0, m4q = [];
            j4n = j4n.replace(rT1x, "");
            for (var i = 0, l = j4n.length; i < l; i += 4) m4q.push(FH5M[j4n.charAt(i)] << 2 | FH5M[j4n.charAt(i + 1)] >> 4, (FH5M[j4n.charAt(i + 1)] & 15) << 4 | FH5M[j4n.charAt(i + 2)] >> 2, (FH5M[j4n.charAt(i + 2)] & 3) << 6 | FH5M[j4n.charAt(i + 3)]);
            var bq5v = m4q.length, fk7d = j4n.length % 4;
            if (fk7d == 2) m4q = m4q.slice(0, bq5v - 2);
            if (fk7d == 3) m4q = m4q.slice(0, bq5v - 1);
            return m4q
        }
    }();
    p.cFe2x = function (j4n) {
        return cED2x(bHl1x(j4n))
    };
    p.cEu2x = function (j4n) {
        var iD8v = bHl1x(j4n), dt6n = iD8v.length, iB8t;
        var r4v = 0;
        while (iB8t = iD8v[r4v]) {
            if (iB8t > 128) {
                iD8v[r4v] = iB8t - 256
            }
            r4v++
        }
        return iD8v
    };
    p.cEt2x = function (j4n) {
        try {
            return window.btoa(j4n)
        } catch (ex) {
            return LY7R(cEz2x(j4n))
        }
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, h4l = c4g("nej.v"), a4e = c4g("nej.e"), v4z = c4g("nej.j"), O5T = c4g("nej.p"),
        k4o = c4g("nej.u"), n4r = c4g("nm.l"), w4A = c4g("nm.w"), bD5I = c4g("nej.ui"), q4u = c4g("nm.d"),
        l4p = c4g("nm.x"), b4f, L5Q;
    var TYPE_MAP = {13: "playlist", 17: "program", 18: "song", 19: "album"};
    n4r.bII1x = NEJ.C();
    b4f = n4r.bII1x.N5S(n4r.eo6i);
    b4f.ch5m = function () {
        this.cf5k = "m-download-layer"
    };
    b4f.bW5b = function () {
        this.ci5n();
        var i4m = a4e.H4L(this.o4s, "j-flag");
        this.bjX5c = i4m[0];
        this.bka5f = i4m[1];
        this.bJf2x = i4m[2];
        v4z.bm5r("/client/version/get", {type: "json", onload: this.cEs2x.f4j(this)});
        if (O5T.Ik6e.mac) {
            a4e.x4B(this.bjX5c.parentNode, "f-hide");
            a4e.y4C(this.bka5f.parentNode, "f-hide");
            a4e.y4C(this.bJf2x, "f-hide")
        } else {
            a4e.y4C(this.bjX5c.parentNode, "f-hide");
            a4e.x4B(this.bka5f.parentNode, "f-hide");
            a4e.x4B(this.bJf2x, "f-hide")
        }
    };
    b4f.bl5q = function (e4i) {
        e4i.clazz = " m-layer-down";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "下载";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bn5s(e4i);
        this.bX5c([[this.o4s, "click", this.bT5Y.f4j(this)]]);
        this.ez6t = TYPE_MAP[e4i.type];
        this.gY7R = e4i.id
    };
    b4f.bC5H = function () {
        this.bF5K()
    };
    b4f.De4i = function () {
        this.bt5y()
    };
    b4f.FK5P = function (d4h) {
        this.z4D("onok", D4H);
        this.bt5y()
    };
    b4f.bT5Y = function (d4h) {
        var g4k = h4l.X5c(d4h, "d:action");
        switch (a4e.t4x(g4k, "action")) {
            case"download":
                this.bt5y();
                window.open(a4e.t4x(g4k, "src"));
                break;
            case"orpheus":
                this.bt5y();
                location.href = "orpheus://" + k4o.cEt2x(JSON.stringify({
                    type: this.ez6t,
                    id: this.gY7R,
                    cmd: "download"
                }));
                break
        }
    };
    b4f.cEs2x = function (d4h) {
        if ((d4h || bb5g).code == 200) {
            this.MP7I = d4h.data;
            this.bjX5c.innerText = "V" + this.MP7I.mac;
            this.bka5f.innerText = "V" + this.MP7I.pc
        }
    };
    l4p.LU7N = function (e4i) {
        n4r.bII1x.A4E(e4i).J4N()
    }
})();
(function () {
    var c4g = NEJ.P, l4p = c4g("nm.x");
    var FullscreenApi = {};
    var apiMap = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]];
    var specApi = apiMap[0];
    var browserApi;
    for (var i = 0; i < apiMap.length; i++) {
        if (apiMap[i][1] in document) {
            browserApi = apiMap[i];
            break
        }
    }
    if (browserApi) {
        for (var i = 0; i < browserApi.length; i++) {
            FullscreenApi[specApi[i]] = browserApi[i]
        }
    }
    l4p.FL5Q = FullscreenApi
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, k4o = c4g("nej.u"), q4u = c4g("nm.d"), bR5W = {};
    q4u.B4F = function (K4O) {
        return bR5W[K4O]
    };
    q4u.ne9V = function (K4O, bh5m) {
        bR5W[K4O] = bh5m
    };
    q4u.fp7i = function (j4n) {
        k4o.eI6C(j4n, function (p4t, K4O) {
            var bh5m = bR5W[K4O] || {};
            NEJ.X(bh5m, p4t);
            bR5W[K4O] = bh5m
        })
    }
})();
(function () {
    var c4g = NEJ.P, br5w = NEJ.F, be5j = c4g("nej.h");
    be5j.ZL2x = function (K4O) {
        return localStorage.getItem(K4O)
    };
    be5j.ZH2x = function (K4O, D4H) {
        localStorage.setItem(K4O, D4H)
    };
    be5j.bkg5l = function (K4O) {
        localStorage.removeItem(K4O)
    };
    be5j.bkh5m = function () {
        localStorage.clear()
    };
    be5j.cEr2x = function () {
        var m4q = [];
        for (var i = 0, l = localStorage.length; i < l; i++) m4q.push(localStorage.key(i));
        return m4q
    };
    be5j.bkn5s = function () {
        (document.onstorageready || br5w)()
    };
    be5j.bko5t = function () {
        return !0
    }
})();
(function () {
    var c4g = NEJ.P, O5T = c4g("nej.p"), iB8t = c4g("nej.c"), be5j = c4g("nej.h"), ti1x;
    if (O5T.nB9s.trident || !!window.localStorage) return;
    var cEq2x = function () {
        var rK1x, eg6a;
        var biz5E = function () {
            rK1x = document.createElement("div");
            NEJ.X(rK1x.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", rK1x);
            rK1x.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iB8t.B4F("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var TQ0x = function () {
            eg6a = window.clearTimeout(eg6a);
            var hW8O = rK1x.getElementsByTagName("object")[0];
            if (!!hW8O.initStorage) {
                delete rK1x;
                ti1x = hW8O;
                ti1x.initStorage("nej-storage");
                (document.onstorageready || br5w)();
                return
            }
            eg6a = window.setTimeout(TQ0x, 500)
        };
        return function () {
            if (!!ti1x) return;
            biz5E();
            TQ0x()
        }
    }();
    be5j.ZL2x = be5j.ZL2x.eH6B(function (d4h) {
        d4h.stopped = !0;
        if (!ti1x) return;
        d4h.value = ti1x.getItem(d4h.args[0])
    });
    be5j.ZH2x = be5j.ZH2x.eH6B(function (d4h) {
        d4h.stopped = !0;
        if (!ti1x) return;
        var bf5k = d4h.args;
        ti1x.setItem(bf5k[0], bf5k[1])
    });
    be5j.bkg5l = be5j.bkg5l.eH6B(function (d4h) {
        d4h.stopped = !0;
        if (!ti1x) return;
        ti1x.removeItem(d4h.args[0])
    });
    be5j.bkh5m = be5j.bkh5m.eH6B(function (d4h) {
        d4h.stopped = !0;
        if (!!ti1x) ti1x.clear()
    });
    be5j.bkn5s = be5j.bkn5s.eH6B(function (d4h) {
        d4h.stopped = !0;
        cEq2x()
    });
    be5j.bko5t = be5j.bko5t.eH6B(function (d4h) {
        d4h.stopped = !0;
        d4h.value = !!ti1x
    })
})();
(function () {
    var c4g = NEJ.P, k4o = c4g("nej.u"), h4l = c4g("nej.v"), be5j = c4g("nej.h"), v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"), R5W = {};
    v4z.vF2x = function (K4O, D4H) {
        var bLo2x = JSON.stringify(D4H);
        try {
            be5j.ZH2x(K4O, bLo2x)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bLo2x != be5j.ZL2x(K4O)) R5W[K4O] = D4H;
        return this
    };
    v4z.tu1x = function (K4O) {
        var j4n = JSON.parse(be5j.ZL2x(K4O) || "null");
        return j4n == null ? R5W[K4O] : j4n
    };
    v4z.bLI2x = function (K4O, D4H) {
        var j4n = v4z.tu1x(K4O);
        if (j4n == null) {
            j4n = D4H;
            v4z.vF2x(K4O, j4n)
        }
        return j4n
    };
    v4z.LP7I = function (K4O) {
        delete R5W[K4O];
        be5j.bkg5l(K4O);
        return this
    };
    v4z.cFg2x = function () {
        var bkA5F = function (p4t, K4O, bz5E) {
            delete bz5E[K4O]
        };
        return function () {
            k4o.eI6C(R5W, bkA5F);
            be5j.bkh5m();
            return this
        }
    }();
    v4z.cFh2x = function (m4q) {
        m4q = m4q || {};
        k4o.bd5i(be5j.cEr2x(), function (K4O) {
            m4q[K4O] = v4z.tu1x(K4O)
        });
        return m4q
    };
    I4M.fK7D.A4E({
        element: document, event: "storageready", oneventadd: function () {
            if (be5j.bko5t()) {
                document.onstorageready()
            }
        }
    });
    var cEn2x = function () {
        var cEl2x = function (D4H, K4O, bz5E) {
            be5j.ZH2x(K4O, JSON.stringify(D4H));
            delete bz5E[K4O]
        };
        return function () {
            k4o.eI6C(R5W, cEl2x)
        }
    }();
    h4l.s4w(document, "storageready", cEn2x);
    be5j.bkn5s()
})();
(function () {
    var c4g = NEJ.P, h4l = c4g("nej.v"), k4o = c4g("nej.u"), O5T = c4g("nej.ut"), LK7D;
    if (!!O5T.bkI5N) return;
    O5T.bkI5N = NEJ.C();
    LK7D = O5T.bkI5N.N5S(O5T.cJ6D);
    LK7D.cw5B = function () {
        var gG7z = +(new Date), na9R = "dat-" + gG7z;
        return function () {
            this.cE6y();
            var R5W = this.constructor[na9R];
            if (!R5W) {
                R5W = {};
                this.constructor[na9R] = R5W
            }
            this.S5X = R5W
        }
    }();
    LK7D.B4F = function (K4O) {
        return this.S5X[K4O]
    };
    LK7D.ne9V = function (K4O, D4H) {
        var mZ9Q = this.S5X[K4O];
        this.S5X[K4O] = D4H;
        h4l.z4D(localCache, "cachechange", {key: K4O, type: "set", oldValue: mZ9Q, newValue: D4H});
        return this
    };
    LK7D.cL6F = function (K4O) {
        var mZ9Q = this.S5X[K4O];
        k4o.bbS3x(this.S5X, K4O);
        h4l.z4D(localCache, "cachechange", {key: K4O, type: "delete", oldValue: mZ9Q, newValue: undefined});
        return mZ9Q
    };
    LK7D.Za2x = function (DC4G) {
        return NEJ.Q(this.S5X, DC4G)
    };
    window.localCache = O5T.bkI5N.A4E();
    O5T.fK7D.A4E({element: localCache, event: "cachechange"})
})();
(function () {
    var c4g = NEJ.P, fy7r = NEJ.R, br5w = NEJ.F, k4o = c4g("nej.u"), v4z = c4g("nej.j"), O5T = c4g("nej.ut"),
        na9R = "dat-" + +(new Date), mY9P;
    if (!!O5T.bkK5P) return;
    O5T.bkK5P = NEJ.C();
    mY9P = O5T.bkK5P.N5S(O5T.cJ6D);
    mY9P.cw5B = function () {
        this.cE6y();
        this.S5X = this.constructor[na9R];
        if (!this.S5X) {
            this.S5X = {};
            this.S5X[na9R + "-l"] = {};
            this.constructor[na9R] = this.S5X
        }
    };
    mY9P.rC1x = function (K4O) {
        return this.S5X[K4O]
    };
    mY9P.qu0x = function (K4O, D4H) {
        this.S5X[K4O] = D4H
    };
    mY9P.lQ9H = function (K4O, kx8p) {
        var j4n = this.rC1x(K4O);
        if (j4n == null) {
            j4n = kx8p;
            this.qu0x(K4O, j4n)
        }
        return j4n
    };
    mY9P.cEk2x = function (K4O) {
        if (K4O != null) {
            delete this.S5X[K4O];
            return
        }
        k4o.eI6C(this.S5X, function (p4t, K4O) {
            if (K4O == na9R + "-l") return;
            this.cEk2x(K4O)
        }, this)
    };
    mY9P.cFi2x = function (K4O) {
        if (!!v4z.LP7I) return v4z.LP7I(K4O)
    };
    mY9P.cEf2x = function (K4O) {
        if (!!v4z.tu1x) return v4z.tu1x(K4O)
    };
    mY9P.cEe2x = function (K4O, D4H) {
        if (!!v4z.vF2x) v4z.vF2x(K4O, D4H)
    };
    mY9P.FX5c = function (K4O, kx8p) {
        var j4n = this.RR0x(K4O);
        if (j4n == null) {
            j4n = kx8p;
            this.wI2x(K4O, j4n)
        }
        return j4n
    };
    mY9P.RR0x = function (K4O) {
        var j4n = this.rC1x(K4O);
        if (j4n != null) return j4n;
        j4n = this.cEf2x(K4O);
        if (j4n != null) this.qu0x(K4O, j4n);
        return j4n
    };
    mY9P.wI2x = function (K4O, D4H) {
        this.cEe2x(K4O, D4H);
        this.qu0x(K4O, D4H)
    };
    mY9P.bRz5E = function (K4O) {
        if (K4O != null) {
            delete this.S5X[K4O];
            if (!!v4z.LP7I) v4z.LP7I(K4O);
            return
        }
        k4o.eI6C(this.S5X, function (p4t, K4O) {
            if (K4O == na9R + "-l") return;
            this.bRz5E(K4O)
        }, this)
    };
    mY9P.cFj2x = function () {
        this.bRz5E();
        return this
    };
    mY9P.cFk2x = function (K4O) {
        var j4n = this.S5X[na9R + "-l"];
        delete j4n[K4O]
    };
    mY9P.blc5h = function (K4O) {
        var j4n = this.S5X[na9R + "-l"], bf5k = fy7r.slice.call(arguments, 1);
        k4o.bd5i(j4n[K4O], function (cA5F) {
            try {
                cA5F.apply(null, bf5k)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j4n[K4O]
    };
    mY9P.bld5i = function (K4O, cA5F) {
        cA5F = cA5F || br5w;
        var i4m = this.S5X[na9R + "-l"][K4O];
        if (!i4m) {
            i4m = [cA5F];
            this.S5X[na9R + "-l"][K4O] = i4m;
            return !1
        }
        i4m.push(cA5F);
        return !0
    };
    mY9P.cDZ2x = function (i4m, bi5n, gc7V) {
        if (!i4m) return !1;
        bi5n = parseInt(bi5n) || 0;
        gc7V = parseInt(gc7V) || 0;
        if (!gc7V) {
            if (!i4m.loaded) return !1;
            gc7V = i4m.length
        }
        if (!!i4m.loaded) gc7V = Math.min(gc7V, i4m.length - bi5n);
        for (var i = 0; i < gc7V; i++) if (!i4m[bi5n + i]) return !1;
        return !0
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, k4o = c4g("nej.u"), O5T = c4g("nej.ut"), b4f, L5Q;
    if (!!O5T.RO0x) return;
    O5T.RO0x = NEJ.C();
    b4f = O5T.RO0x.N5S(O5T.bkK5P);
    L5Q = O5T.RO0x.cs5x;
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.xy2x = e4i.key || "id";
        this.bk5p = e4i.data || bb5g;
        this.cDY2x = !!e4i.autogc;
        this.cDW2x(e4i.id)
    };
    b4f.bC5H = function () {
        this.bF5K();
        if (!!this.ei6c) {
            this.bSL5Q()
        }
    };
    b4f.cDW2x = function (C4G) {
        var R5W;
        if (!!C4G) {
            R5W = this.S5X[C4G];
            if (!R5W) {
                R5W = {};
                this.S5X[C4G] = R5W
            }
        }
        R5W = R5W || this.S5X;
        R5W.hash = R5W.hash || {};
        this.RN0x = R5W
    };
    b4f.bSL5Q = function () {
        this.ei6c = window.clearTimeout(this.ei6c);
        var bz5E = {};
        k4o.eI6C(this.RN0x, function (i4m, K4O) {
            if (K4O == "hash") return;
            if (!k4o.eL7E(i4m)) return;
            k4o.bd5i(i4m, function (p4t) {
                if (!p4t) return;
                bz5E[p4t[this.xy2x]] = !0
            }, this)
        }, this);
        k4o.eI6C(this.Yq1x(), function (p4t, C4G, dR6L) {
            if (!bz5E[C4G]) {
                delete dR6L[C4G]
            }
        })
    };
    b4f.cDV2x = function () {
        if (!!this.ei6c) {
            this.ei6c = window.clearTimeout(this.ei6c)
        }
        this.ei6c = window.setTimeout(this.bSL5Q.f4j(this), 150)
    };
    b4f.Bs4w = function (p4t, Yj1x) {
        p4t = this.bTf5k(p4t, Yj1x) || p4t;
        if (!p4t) return null;
        var K4O = p4t[this.xy2x];
        if (K4O != null) {
            var ib8T = this.Yq1x()[K4O];
            if (!!ib8T) p4t = NEJ.X(ib8T, p4t);
            this.Yq1x()[K4O] = p4t
        }
        delete p4t.bTi5n;
        return p4t
    };
    b4f.bTf5k = br5w;
    b4f.blh5m = function (K4O, p4t) {
        if (!p4t) return;
        if (!k4o.eL7E(p4t)) {
            var i4m = this.hD8v(K4O), p4t = this.Bs4w(p4t, K4O);
            if (!!p4t) i4m.unshift(p4t);
            return
        }
        k4o.nk9b(p4t, this.blh5m.f4j(this, K4O))
    };
    b4f.RA0x = function (K4O, cB5G) {
        var i4m = this.hD8v(K4O);
        i4m.length = Math.max(i4m.length, cB5G);
        this.bli5n(K4O);
        return this
    };
    b4f.kw8o = function (K4O) {
        return this.hD8v(K4O).length
    };
    b4f.bli5n = function (K4O, ox0x) {
        this.hD8v(K4O).loaded = ox0x != !1;
        return this
    };
    b4f.Ye1x = function (K4O) {
        return !!this.hD8v(K4O).loaded
    };
    b4f.wh2x = function (K4O, i4m) {
        this.vw2x(K4O);
        this.blj5o({key: K4O, offset: 0, limit: i4m.length + 1}, {list: i4m, total: i4m.length})
    };
    b4f.hD8v = function () {
        var FY5d = function (K4O) {
            return (K4O || "") + (!K4O ? "" : "-") + "list"
        };
        return function (K4O) {
            var K4O = FY5d(K4O), i4m = this.RN0x[K4O];
            if (!i4m) {
                i4m = [];
                this.RN0x[K4O] = i4m
            }
            return i4m
        }
    }();
    b4f.Yq1x = function () {
        var dR6L = this.RN0x.hash;
        if (!dR6L) {
            dR6L = {};
            this.RN0x.hash = dR6L
        }
        return dR6L
    };
    b4f.blp5u = function () {
        var FY5d = function (e4i) {
            return "r-" + e4i.key
        };
        return function (e4i) {
            var iY8Q = NEJ.X({}, e4i), nZ0x = FY5d(iY8Q);
            if (!this.bld5i(nZ0x, this.z4D.f4j(this))) {
                iY8Q.rkey = nZ0x;
                iY8Q.onload = this.cDU2x.f4j(this, iY8Q);
                this.z4D("dopullrefresh", iY8Q)
            }
            return this
        }
    }();
    b4f.cDU2x = function (e4i, i4m) {
        this.blh5m(e4i.key, i4m);
        this.blc5h(e4i.rkey, "onpullrefresh", e4i)
    };
    b4f.lO9F = function () {
        var FY5d = function (e4i) {
            return "r-" + e4i.key + "-" + e4i.offset + "-" + e4i.limit
        };
        return function (e4i) {
            e4i = e4i || bb5g;
            var iY8Q = {
                key: "" + e4i.key || "",
                ext: e4i.ext || null,
                data: e4i.data || null,
                offset: parseInt(e4i.offset) || 0,
                limit: parseInt(e4i.limit) || 0
            }, i4m = this.hD8v(iY8Q.key);
            if (this.cDZ2x(i4m, iY8Q.offset, iY8Q.limit)) {
                this.z4D("onlistload", iY8Q);
                return this
            }
            var nZ0x = FY5d(iY8Q);
            if (!this.bld5i(nZ0x, this.z4D.f4j(this))) {
                iY8Q.rkey = nZ0x;
                iY8Q.onload = this.blj5o.f4j(this, iY8Q);
                this.z4D("doloadlist", iY8Q)
            }
            return this
        }
    }();
    b4f.blj5o = function () {
        var Ff5k = function (p4t, r4v, i4m) {
            if (!!p4t) {
                return !0
            }
            i4m.splice(r4v, 1)
        };
        return function (e4i, m4q) {
            e4i = e4i || bb5g;
            var K4O = e4i.key, bi5n = e4i.offset, bVJ6D = this.hD8v(K4O);
            var i4m = m4q || [];
            if (!k4o.eL7E(i4m)) {
                i4m = m4q.result || m4q.list || [];
                var cB5G = parseInt(m4q.total);
                if (!isNaN(cB5G) || cB5G > i4m.length) {
                    this.RA0x(K4O, cB5G)
                }
            }
            k4o.bd5i(i4m, function (p4t, r4v) {
                bVJ6D[bi5n + r4v] = this.Bs4w(p4t, K4O)
            }, this);
            if (i4m.length < e4i.limit) {
                this.bli5n(K4O);
                k4o.nk9b(bVJ6D, Ff5k)
            }
            this.blc5h(e4i.rkey, "onlistload", e4i)
        }
    }();
    b4f.vw2x = function () {
        var Ff5k = function (p4t, r4v, i4m) {
            i4m.splice(r4v, 1)
        };
        return function (K4O) {
            var i4m = this.hD8v(K4O);
            k4o.nk9b(i4m, Ff5k);
            this.bli5n(K4O, !1);
            if (this.cDY2x) {
                this.cDV2x()
            }
            return this
        }
    }();
    b4f.bVS6M = function (p4t, Yj1x) {
        return !p4t.bTi5n
    };
    b4f.eJ6D = function (C4G) {
        return this.Yq1x()[C4G]
    };
    b4f.cFl2x = function (C4G) {
        var p4t = this.eJ6D(C4G);
        if (!!p4t) p4t.bTi5n = !0
    };
    b4f.XY1x = function () {
        var FY5d = function (e4i) {
            return "r-" + e4i.key + "-" + e4i.id
        };
        return function (e4i) {
            e4i = e4i || bb5g;
            var C4G = e4i[this.xy2x], iY8Q = {id: C4G, ext: e4i.ext, data: e4i.data || {}, key: "" + e4i.key || ""};
            p4t = this.eJ6D(C4G);
            iY8Q.data[this.xy2x] = C4G;
            if (!!p4t && this.bVS6M(p4t, iY8Q.key)) {
                this.z4D("onitemload", iY8Q);
                return this
            }
            var nZ0x = FY5d(iY8Q);
            if (!this.bld5i(nZ0x, this.z4D.f4j(this))) {
                iY8Q.rkey = nZ0x;
                iY8Q.onload = this.cDR2x.f4j(this, iY8Q);
                this.z4D("doloaditem", iY8Q)
            }
            return this
        }
    }();
    b4f.cDR2x = function (e4i, p4t) {
        e4i = e4i || bb5g;
        this.Bs4w(p4t, e4i.key);
        this.blc5h(e4i.rkey, "onitemload", e4i)
    };
    b4f.jI8A = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.yM3x.f4j(this, e4i);
        this.z4D("doadditem", e4i)
    };
    b4f.yM3x = function (e4i, p4t) {
        var K4O = e4i.key;
        p4t = this.Bs4w(p4t, K4O);
        if (!!p4t) {
            var fa7T = 0, i4m = this.hD8v(K4O);
            if (!e4i.push) {
                fa7T = -1;
                var bi5n = e4i.offset || 0;
                i4m.splice(bi5n, 0, p4t)
            } else if (i4m.loaded) {
                fa7T = 1;
                i4m.push(p4t)
            } else {
                i4m.length++
            }
        }
        var d4h = {key: K4O, flag: fa7T, data: p4t, action: "add", ext: e4i.ext};
        this.z4D("onitemadd", d4h);
        return d4h
    };
    b4f.Lx7q = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.bls5x.f4j(this, e4i);
        this.z4D("dodeleteitem", e4i)
    };
    b4f.bls5x = function (e4i, bzq9h) {
        var p4t, K4O = e4i.key;
        if (!!bzq9h) {
            p4t = this.eJ6D(e4i.id) || null;
            var C4G = e4i.id, cDQ2x = this.xy2x, i4m = this.hD8v(K4O), r4v = k4o.di6c(i4m, function (ib8T) {
                return !!ib8T && ib8T[cDQ2x] == C4G
            });
            if (r4v >= 0) i4m.splice(r4v, 1)
        }
        var d4h = {key: K4O, data: p4t, action: "delete", ext: e4i.ext};
        this.z4D("onitemdelete", d4h);
        return d4h
    };
    b4f.XU1x = function (e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.cDO2x.f4j(this, e4i);
        this.z4D("doupdateitem", e4i)
    };
    b4f.cDO2x = function (e4i, p4t) {
        var K4O = e4i.key;
        if (!!p4t) p4t = this.Bs4w(p4t, K4O);
        var d4h = {key: K4O, data: p4t, action: "update", ext: e4i.ext};
        this.z4D("onitemupdate", d4h);
        return d4h
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, k4o = c4g("nej.u"), O5T = c4g("nej.ut"), b4f;
    if (!!O5T.blv5A) return;
    O5T.blv5A = NEJ.C();
    b4f = O5T.blv5A.N5S(O5T.RO0x);
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.bne6Y({
            doloadlist: this.XR1x.f4j(this),
            doloaditem: this.blw5B.f4j(this),
            doadditem: this.bzO9F.f4j(this),
            dodeleteitem: this.XP1x.f4j(this),
            doupdateitem: this.XN1x.f4j(this),
            dopullrefresh: this.bAb9S.f4j(this)
        })
    };
    b4f.XR1x = br5w;
    b4f.bAb9S = br5w;
    b4f.blw5B = br5w;
    b4f.bzO9F = br5w;
    b4f.XP1x = br5w;
    b4f.XN1x = br5w
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, k4o = c4g("nej.u"), h4l = c4g("nej.v"), v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"), l4p = c4g("nm.x"), q4u = c4g("nm.d"), b4f, L5Q;
    q4u.hJ8B = NEJ.C();
    b4f = q4u.hJ8B.N5S(I4M.blv5A);
    b4f.cp5u = function () {
        var CI4M = location.protocol + "//" + location.host;
        var cDN2x = function (bs5x, j4n) {
            var bz5E = {conf: {}, data: {}, urls: []};
            k4o.bd5i(bs5x, function (K4O, r4v, i4m) {
                var bh5m = q4u.B4F(K4O);
                if (!bh5m) return;
                var bly5D = bAz9q(bh5m.url, j4n[K4O]);
                bz5E.urls.push(bly5D);
                bz5E.conf[bly5D] = bh5m;
                bz5E.data[bly5D] = JSON.stringify(j4n[K4O] == null ? "" : j4n[K4O])
            });
            return bz5E
        };
        var bAz9q = function (Y5d, j4n) {
            return Y5d.replace(/\{(.*?)\}/gi, function ($1, $2) {
                return j4n[$2] || $1
            })
        };
        var bAF9w = function (bh5m, e4i, d4h) {
            h4l.z4D(window, "requesterror", d4h);
            if (!!d4h.stopped) return;
            var CN4R = bh5m.onerror || e4i.onerror;
            if (k4o.fC7v(CN4R)) {
                this.z4D(CN4R, d4h, e4i)
            } else {
                (CN4R || br5w).call(this, d4h, e4i)
            }
            var d4h = {result: d4h, option: e4i};
            this.z4D("onerror", d4h);
            if (!d4h.stopped) (bh5m.onmessage || br5w).call(this, d4h.result.code, d4h.result)
        };
        var bBb0x = function (Q5V, bh5m, e4i) {
            var m4q = Q5V;
            if (k4o.gK7D(bh5m.format)) {
                m4q = bh5m.format.call(this, Q5V, e4i)
            }
            return m4q
        };
        var yX3x = function (Q5V, bh5m, e4i, us1x) {
            if (k4o.gK7D(bh5m.beforeload)) {
                bh5m.beforeload.call(this, Q5V, e4i, bh5m)
            }
            if (Q5V && Q5V.code != null && Q5V.code != 200) {
                bAF9w.call(this, bh5m, e4i, {
                    key: e4i.key,
                    code: Q5V.code,
                    message: Q5V.message || "",
                    captchaId: Q5V.captchaId,
                    ext: Q5V
                });
                return
            }
            var m4q = Q5V;
            if (!us1x) {
                m4q = bBb0x.call(this, Q5V, bh5m, e4i)
            } else if (k4o.gK7D(bh5m.format)) {
                var blz5E = [];
                k4o.bd5i(us1x.urls, function (Y5d) {
                    blz5E.push(bBb0x.call(this, Q5V[Y5d], us1x.conf[Y5d], e4i))
                }, this);
                blz5E.push(e4i);
                m4q = bh5m.format.apply(this, blz5E)
            }
            var ou0x = bh5m.onload || e4i.onload, bBs0x = bh5m.finaly || e4i.finaly || br5w;
            if (k4o.fC7v(ou0x)) {
                bBs0x.call(this, this.z4D(ou0x, m4q), e4i)
            } else {
                bBs0x.call(this, (ou0x || br5w).call(this, m4q), e4i)
            }
        };
        var Az3x = function (bh5m, e4i, ca5f) {
            bAF9w.call(this, bh5m, e4i, {key: e4i.key, code: ca5f.code || -1, message: ca5f.message || ""})
        };
        return function (bh5m, e4i) {
            if (k4o.fC7v(bh5m)) {
                bh5m = q4u.B4F(bh5m)
            }
            delete e4i.value;
            (bh5m.filter || br5w).call(this, e4i, bh5m);
            var Q5V = e4i.value;
            if (!!Q5V) {
                yX3x.call(this, Q5V, bh5m, e4i);
                return
            }
            var Y5d, j4n = e4i.data || bb5g, Ai3x = {
                cookie: !0,
                type: bh5m.rtype || "json",
                method: bh5m.type || "POST",
                onerror: Az3x.f4j(this, bh5m, e4i),
                noescape: bh5m.noescape
            };
            if (k4o.eL7E(bh5m.url)) {
                var us1x = cDN2x(bh5m.url, j4n);
                Y5d = CI4M + "/api/batch";
                Ai3x.data = k4o.cD6x(us1x.data);
                Ai3x.onload = yX3x.eA6u(this, bh5m, e4i, us1x);
                Ai3x.headers = {"batch-method": "POST"};
                delete us1x.data
            } else {
                var kh8Z = bh5m.url.indexOf(":") < 0 ? CI4M : "";
                Y5d = bAz9q(kh8Z + bh5m.url, j4n);
                Ai3x.data = k4o.cD6x(e4i.data);
                Ai3x.onload = yX3x.eA6u(this, bh5m, e4i)
            }
            if (Ai3x.method == "GET") Ai3x.query = Ai3x.data;
            return v4z.bm5r(Y5d, Ai3x)
        }
    }();
    b4f.Gb5g = function () {
        var gL7E = /^get|list|pull$/i;
        return function (bBF0x, e4i) {
            var K4O = e4i.key, bh5m = q4u.B4F(K4O.split("-")[0] + "-" + bBF0x);
            if (gL7E.test(bBF0x) && K4O.indexOf("post-") < 0) bh5m.type = "GET";
            this.cp5u(bh5m, e4i)
        }
    }();
    b4f.cFm2x = function (K4O, i4m) {
        var cB5G = i4m.length;
        this.blj5o({key: K4O, offset: 0, limit: cB5G + 1}, {list: i4m, total: cB5G})
    };
    b4f.XR1x = function (e4i) {
        this.Gb5g("list", e4i)
    };
    b4f.blw5B = function (e4i) {
        this.Gb5g("get", e4i)
    };
    b4f.bAb9S = function (e4i) {
        this.Gb5g("pull", e4i)
    };
    b4f.bzO9F = function (e4i) {
        this.Gb5g("add", e4i)
    };
    b4f.XP1x = function (e4i) {
        this.Gb5g("del", e4i)
    };
    b4f.XN1x = function (e4i) {
        this.Gb5g("update", e4i)
    };
    b4f.cDI2x = function (p4t) {
        this.Bs4w(p4t)
    };
    I4M.fK7D.A4E({element: window, event: "requesterror"})
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, h4l = c4g("nej.v"), I4M = c4g("nej.ut"), q4u = c4g("nm.d"), blB5G = {},
        b4f, L5Q;
    var vq2x = function (m4q, e4i) {
        m4q.conf = e4i.conf;
        return m4q
    };
    q4u.fp7i({
        "res-mv-get": {
            type: "GET", url: "/api/v1/mv/detail", format: function (Q5V, e4i) {
                return vq2x({mv: Q5V}, e4i)
            }
        },
        "res-song-get": {
            type: "GET", url: "/api/song/detail", format: function (m4q, e4i) {
                if (!!m4q.songs && m4q.songs.length > 0) m4q.song = m4q.songs[0]; else m4q.song = blB5G;
                delete m4q.songs;
                return vq2x(m4q, e4i)
            }, filter: function (e4i) {
                e4i.data.ids = "[" + e4i.data.id + "]"
            }
        },
        "res-program-get": {type: "GET", url: "/api/dj/program/detail", format: vq2x},
        "res-album-get": {type: "GET", url: "/api/album/{id}", format: vq2x},
        "res-playlist-get": {
            type: "GET", url: "/api/playlist/detail", format: function (m4q, e4i) {
                m4q.playlist = m4q.result;
                delete m4q.result;
                return vq2x(m4q, e4i)
            }
        },
        "res-mv-play": {type: "GET", url: "/api/song/mv/play", format: vq2x},
        "res-playlist-play": {type: "GET", url: "/api/playlist/update/playcount", format: vq2x},
        "res-program-play": {type: "GET", url: "/api/dj/program/listen", format: vq2x},
        "res-djradio-get": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e4i) {
                var i4m = e4i.data.id.split("-");
                e4i.data.radioId = i4m[0];
                e4i.data.asc = i4m[1] == 2;
                e4i.data.limit = 1e3;
                delete e4i.data.id
            }, format: function (Q5V, e4i) {
                var cDH2x = {id: e4i.data.radioId, programs: Q5V.programs};
                return vq2x({djradio: cDH2x}, e4i)
            }
        },
        "res-hotSongs-get": {type: "GET", url: "/api/artist/{id}", format: vq2x},
        "res-lyric-get": {
            type: "GET", url: "/api/song/lyric", filter: function (e4i) {
                e4i.data.lv = 0;
                e4i.data.tv = 0
            }, format: function (m4q, e4i) {
                var wy2x = {lyric: "", nolyric: true};
                if (m4q.code == 200 && m4q.lrc && m4q.lrc.lyric) {
                    wy2x.lyric = m4q.lrc.lyric;
                    wy2x.nolyric = false
                } else {
                    wy2x.nolyric = true
                }
                return vq2x({lyric: wy2x}, e4i)
            }
        }
    });
    q4u.wC2x = NEJ.C();
    b4f = q4u.wC2x.N5S(q4u.hJ8B);
    b4f.cDF2x = function (u4y, cS6M) {
        return this.rC1x(this.XE1x(u4y, cS6M))
    };
    b4f.Rn0x = function (u4y, cS6M, e4i) {
        e4i = e4i || {};
        var j4n = this.rC1x(this.XE1x(u4y, cS6M));
        if (j4n && (u4y != 13 && u4y != 19 || e4i.conf && e4i.conf.useCache)) {
            this.z4D("onresourceload", u4y, cS6M, j4n, e4i.conf);
            return
        }
        e4i.data = {id: cS6M};
        e4i.onload = this.cDE2x.f4j(this, u4y, cS6M);
        e4i.onerror = this.cDD2x.f4j(this, u4y, cS6M);
        this.cp5u("res-" + this.Do4s(u4y) + "-get", e4i)
    };
    b4f.cDE2x = function (u4y, cS6M, m4q) {
        var j4n = m4q[this.Do4s(u4y)];
        this.qu0x(this.XE1x(u4y, cS6M), j4n);
        this.z4D("onresourceload", u4y, cS6M, j4n, m4q.conf)
    };
    b4f.cDD2x = function (u4y, cS6M, m4q, e4i) {
        if (m4q.code != 404) {
            this.z4D("onresourceerror", u4y, cS6M, m4q.code);
            return
        }
        this.qu0x(this.XE1x(u4y, cS6M), blB5G);
        this.z4D("onresourceload", u4y, cS6M, blB5G, e4i.conf)
    };
    b4f.cFn2x = function (u4y, e4i) {
        this.cp5u("res-" + this.Do4s(u4y) + "-play", e4i)
    };
    b4f.XE1x = function (u4y, cS6M) {
        return "res-" + this.Do4s(u4y) + "-" + cS6M
    };
    b4f.Do4s = function (u4y) {
        var bz5E = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bz5E[u4y]
    };
    q4u.wC2x.Ls7l = function (u4y, cS6M) {
        if (!this.fg7Z) this.fg7Z = q4u.wC2x.A4E({});
        return this.fg7Z.cDF2x(u4y, cS6M)
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, h4l = c4g("nej.v"), k4o = c4g("nej.u"), I4M = c4g("nej.ut"),
        q4u = c4g("nm.d"), l4p = c4g("nm.x"), blF6z = /^[1-9][0-9]*$/, b4f, L5Q;
    var LOCAL_LOG_KEY = "local-log";
    q4u.fp7i({
        "bi-log": {url: "/api/feedback/weblog"},
        "bi-batch-log": {url: "/api/feedback/weblog"},
        "plus-mv-count": {url: "/api/song/mv/play"},
        "plus-song-count": {url: "/api/song/play"},
        "plus-dj-count": {type: "GET", url: "/api/dj/program/listen"},
        "plus-playlist-count": {type: "GET", url: "/api/playlist/update/playcount"}
    });
    q4u.hO8G = NEJ.C();
    b4f = q4u.hO8G.N5S(q4u.hJ8B);
    b4f.eV7O = function (V5a, bh5m) {
        if (!V5a || !bh5m) return;
        if (k4o.fC7v(bh5m)) {
            try {
                bh5m = JSON.parse(bh5m)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a4e)
                }
            }
        }
        if (!k4o.lG9x(bh5m)) return;
        this.cp5u("bi-log", {data: {logs: JSON.stringify([{action: V5a, json: bh5m}])}});
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + V5a + ", json=" + JSON.stringify(bh5m))
        }
    };
    b4f.Xk1x = function (on0x) {
        if (!k4o.eL7E(on0x)) return;
        this.cp5u("bi-batch-log", {data: {logs: JSON.stringify(on0x)}})
    };
    b4f.bDh0x = function (bh5m) {
        if (!bh5m || !bh5m.type || !bh5m.rid) return;
        var om0x = bh5m.type;
        if (blF6z.test(om0x)) {
            om0x = this.Do4s(om0x)
        }
        if (!om0x) return;
        if (om0x == "playlist") om0x = "list";
        this.eV7O("search", {type: om0x, id: bh5m.rid || null, keyword: bh5m.keyword || null})
    };
    b4f.QY9P = function () {
        var cDy2x = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function (bh5m) {
            if (!bh5m || !bh5m.type || !bh5m.rid) return;
            if (bh5m.play === undefined) bh5m.play = true;
            var om0x = bh5m.type;
            if (blF6z.test(om0x)) {
                om0x = this.Do4s(om0x)
            }
            if (!om0x) return;
            if (om0x == "playlist") om0x = "list";
            var Q5V = {id: bh5m.rid, type: om0x};
            if (om0x == "song" && bh5m.source) {
                Q5V.source = this.bDz0x(bh5m.source);
                if (!!bh5m.sourceid) Q5V.sourceid = bh5m.sourceid
            }
            this.eV7O(!bh5m.play ? "addto" : "play", Q5V);
            if (om0x == "song" && bh5m.hash && bh5m.hash.match(cDy2x)) {
                this.eV7O(!bh5m.play ? "addto" : "play", {type: RegExp.$1, id: RegExp.$2})
            }
        }
    }();
    b4f.blN6H = function (C4G, bA5F, ee6Y, Gc5h) {
        var Q5V = {type: "song", wifi: 0, download: 0};
        var cDv2x = {1: "ui", 2: "playend", 3: "interrupt", 4: "exception"};
        Q5V.id = C4G;
        Q5V.time = Math.round(bA5F);
        Q5V.end = k4o.fC7v(Gc5h) ? Gc5h : cDv2x[Gc5h] || "";
        if (ee6Y && ee6Y.fid) {
            Q5V.source = this.bDz0x(ee6Y.fid);
            Q5V.sourceId = ee6Y.fdata
        }
        this.eV7O("play", Q5V)
    };
    b4f.bDT0x = function (u4y, cS6M) {
        if (!u4y || !cS6M) return;
        if (blF6z.test(u4y)) u4y = this.Do4s(u4y);
        if (u4y != "playlist" && u4y != "dj") return;
        var bh5m = q4u.B4F("plus-" + u4y + "-count");
        if (!bh5m) return !1;
        this.cp5u(bh5m, {data: {id: cS6M}});
        var R5W = this.lQ9H("play-hist-" + u4y, []);
        if (k4o.di6c(R5W, cS6M) < 0) {
            R5W.push(cS6M);
            return !0
        }
        return !1
    };
    b4f.Do4s = function (u4y) {
        var bz5E = {1: "user", 2: "artist", 13: "playlist", 17: "dj", 18: "song", 19: "album", 21: "mv", 31: "toplist"};
        return bz5E[u4y]
    };
    b4f.bDz0x = function (Lm7f) {
        var bz5E = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bz5E[Lm7f]
    };
    b4f.bEi0x = function (hc7V) {
        var on0x = this.FX5c(LOCAL_LOG_KEY, []);
        on0x.unshift(hc7V);
        if (on0x.length > 200) {
            on0x.length = 200
        }
        this.wI2x(LOCAL_LOG_KEY, on0x)
    };
    b4f.cDt2x = function () {
        return this.RR0x(LOCAL_LOG_KEY)
    };
    b4f.eq6k = function (Q5V) {
        this.eV7O("play", Q5V)
    };
    var bEy0x = q4u.hO8G.gm7f();
    l4p.sA1x = function () {
        bEy0x.eV7O.apply(bEy0x, arguments)
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, h4l = c4g("nej.v"), v4z = c4g("nej.j"), I4M = c4g("nej.ut"),
        a4e = c4g("nej.e"), k4o = c4g("nej.u"), n4r = c4g("nm.l"), l4p = c4g("nm.x"), q4u = c4g("nm.d");
    var FullscreenApi = l4p.FL5Q || {};
    if (!q4u.wC2x) return;
    var R5W = q4u.wC2x.A4E({onresourceload: cDr2x});
    var wd2x = q4u.hO8G.gm7f();

    function cDr2x(u4y, cS6M, j4n, bh5m) {
        var i4m = [];
        switch (parseInt(u4y)) {
            case 2:
                i4m = j4n;
                break;
            case 13:
                i4m = j4n.tracks;
                break;
            case 18:
                i4m.push(j4n);
                break;
            case 19:
                i4m = j4n.songs;
                break;
            case 21:
                if (j4n.mp && j4n.mp.fee && j4n.mp.pl <= 0) {
                    l4p.WX1x(j4n.data.id, j4n.mp.fee);
                    return
                }
                break
        }
        if (l4p.Lj7c(i4m, true, null, u4y == 19 ? {source: "album", sourceid: cS6M} : null) == 0) {
            return
        }
        l4p.fs7l({clazz: "m-layer-w2", bubble: !1, message: bh5m.message})
    }

    function cDq2x(d4h, oc0x, yo3x, ey6s) {
        ey6s = ey6s || {};
        if (d4h.action == "ok") {
            if (yo3x) {
                location.dispatch2("/payfee?songId=" + yo3x)
            } else {
                location.dispatch2("/payfee?fee=" + oc0x || 1)
            }
            wd2x.eV7O("click", {
                type: "tobuyvip",
                name: "box",
                source: ey6s.source || "song",
                sourceid: ey6s.sourceid || yo3x || 0
            })
        } else if (d4h.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + yo3x);
            wd2x.eV7O("click", {
                type: "tobuyone",
                name: "box",
                source: ey6s.source || "song",
                sourceid: ey6s.sourceid || yo3x || 0
            })
        }
    }

    function QI9z(bG5L) {
        l4p.fs7l({clazz: "m-layer-w2", bubble: !1, message: bG5L, btntxt: "知道了"})
    }

    function QH9y(bG5L, Q5V) {
        QI9z((Q5V || bb5g).toast || bG5L)
    }

    l4p.iu8m = function (bG5L, C4G, u4y, cDo2x, bj5o) {
        bG5L = bG5L || "由于版权保护，您所在的地区暂时无法使用。";
        if (cDo2x && bj5o && bj5o.privilege && bj5o.privilege.toast) {
            v4z.bm5r("/api/song/toast", {
                query: {id: bj5o.id},
                type: "json",
                onload: QH9y.f4j(this, bG5L),
                onerror: QH9y.f4j(this, bG5L)
            })
        } else if (C4G && u4y) {
            R5W.Rn0x(u4y, C4G, {conf: {message: bG5L, useCache: u4y != 18}})
        } else {
            QI9z(bG5L)
        }
    };
    l4p.uX2x = function (oc0x, yo3x, u4y, ey6s, nq9h) {
        var bR5W, oW0x = "m-popup-info", blU6O = "单首购买", bmb6V = "马上去开通", cU6O = "唱片公司要求，当前歌曲须付费使用。", bFx1x = true;
        try {
            bR5W = top.api.feeMessage || {}
        } catch (e) {
            bR5W = {}
        }
        if (oc0x == 1 || oc0x == 8 || oc0x == 16) {
            if (u4y == "song") {
                oW0x = "m-popup-song-buy";
                cU6O = bR5W["vip2"] || cU6O;
                bmb6V = bR5W["vip2button"] || "包月购买";
                blU6O = bR5W["vip2link"] || blU6O;
                if (nq9h && nq9h.flag !== undefined) {
                    var bs5x = nq9h.flag.toString(2).split("");
                    if (parseInt(bs5x.pop(), 10) == 1) {
                        bFx1x = false
                    }
                }
            } else {
                cU6O = bR5W["vip"] || cU6O
            }
        } else if (oc0x == 4) {
            cU6O = bR5W["album"] || cU6O;
            bmb6V = "立即订购"
        } else {
            cU6O = bR5W["unknow"] || cU6O
        }
        l4p.ki8a({
            clazz: "m-layer-w5",
            html: a4e.cd5i(oW0x, {songTxt: blU6O, tip: cU6O, oktext: bmb6V, cctext: "以后再说", showSongText: bFx1x}),
            onaction: cDq2x.eA6u(null, oc0x, yo3x, ey6s)
        })
    };
    l4p.bFB1x = function (hy8q, gi7b) {
        l4p.ho7h({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function (u4y) {
                if (u4y == "ok") {
                    l4p.LU7N({id: hy8q, type: gi7b})
                }
            }
        })
    };
    l4p.WX1x = function (kB9s, oc0x) {
        var bR5W, cU6O = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bR5W = top.api.feeMessage || {}
        } catch (e) {
            bR5W = {}
        }
        if (oc0x == 1 || oc0x == 8) {
            cU6O = bR5W["vip"] || cU6O
        } else if (oc0x == 4) {
            cU6O = bR5W["album"] || cU6O
        } else {
            cU6O = bR5W["unknow"] || cU6O
        }
        return l4p.ki8a({
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            clazz: "m-layer-w5",
            html: a4e.cd5i("m-popup-info", {tip: cU6O, oktext: "马上去开通", cctext: "以后再说"}),
            onaction: function (d4h) {
                if (d4h.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + kB9s);
                    wd2x.eV7O("click", {type: "tobuyone", name: "box", source: "mv", sourceid: kB9s || 0})
                }
            }
        })
    };
    l4p.Lj7c = function () {
        function compareFee(cDn2x, cDk2x) {
            var bz5E = {1: 99, 8: 99, 4: 88, 16: 99};
            return (bz5E[cDn2x] || 0) - (bz5E[cDk2x] || 0)
        }

        return function (i4m, cU6O, rQ1x, ey6s) {
            rQ1x = rQ1x || {};
            var zc3x = [], Li7b = {}, bFZ1x = 0, bGc1x = 0, Lh7a = null;
            if (!i4m || !i4m.length) return zc3x;
            k4o.bd5i(i4m, function (bj5o) {
                var fA7t = l4p.qq0x(bj5o);
                if (fA7t == 0) {
                    zc3x.push(bj5o)
                } else if (fA7t == 10) {
                    if (bj5o.privilege) {
                        bj5o.fee = bj5o.privilege.fee
                    }
                    if (compareFee(bj5o.fee, Li7b.fee) > 0) {
                        Li7b = bj5o
                    }
                } else if (fA7t == 11) {
                    ++bFZ1x;
                    if (!rQ1x.play) zc3x.push(bj5o)
                } else if (fA7t == 1e3) {
                    ++bGc1x;
                    if (!rQ1x.download) zc3x.push(bj5o)
                } else if (fA7t == 100) {
                    Lh7a = bj5o
                }
            });
            if (zc3x.length == 0 && cU6O) {
                if (bFZ1x == i4m.length) {
                    var uj1x = i4m[0].privilege || {};
                    if (uj1x.payed) {
                        l4p.iu8m("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l4p.uX2x(uj1x.fee, null, null, ey6s)
                    }
                } else if (bGc1x == i4m.length) {
                    l4p.iu8m("因版权方要求，该歌曲不支持下载")
                } else if (Li7b.id) {
                    l4p.uX2x(Li7b.fee, Li7b.id, null, ey6s, Li7b.privilege)
                } else {
                    if (Lh7a && i4m.length == 1 && Lh7a.privilege && Lh7a.privilege.st < 0 && Lh7a.privilege.toast) {
                        l4p.iu8m(null, null, null, true, Lh7a)
                    } else {
                        l4p.iu8m()
                    }
                }
            }
            return zc3x
        }
    }();
    l4p.qq0x = function (bj5o) {
        if (!bj5o) return 0;
        var fA7t = bj5o.privilege;
        if (bj5o.program) return 0;
        if (window.GAbroad) return 100;
        if (fA7t) {
            if (fA7t.st != null && fA7t.st < 0) {
                return 100
            }
            if (fA7t.fee > 0 && fA7t.fee != 8 && fA7t.payed == 0 && fA7t.pl <= 0) return 10;
            if (fA7t.fee == 16) return 11;
            if ((fA7t.fee == 0 || fA7t.payed) && fA7t.pl > 0 && fA7t.dl == 0) return 1e3;
            if (fA7t.pl == 0 && fA7t.dl == 0) return 100;
            return 0
        } else {
            var ex6r = bj5o.status != null ? bj5o.status : bj5o.st != null ? bj5o.st : 0;
            if (bj5o.status >= 0) return 0;
            if (bj5o.fee > 0) return 10;
            return 100
        }
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, fy7r = NEJ.R, a4e = c4g("nej.e"), h4l = c4g("nej.v"),
        k4o = c4g("nej.u"), I4M = c4g("nej.ut"), w4A = c4g("nm.w"), b4f;
    if (!!w4A.bGt1x) return;
    var cl5q = ~[];
    cl5q = {
        bGw1x: ++cl5q,
        cDi2x: (![] + "")[cl5q],
        kl8d: ++cl5q,
        Lf7Y: (![] + "")[cl5q],
        Wq1x: (cl5q[cl5q] + "")[cl5q],
        bGX1x: ++cl5q,
        cFp2x: ({} + "")[cl5q],
        cDf2x: (cl5q[cl5q] + "")[cl5q],
        cDe1x: (![] + "")[cl5q],
        Qj9a: ++cl5q,
        VZ1x: (!"" + "")[cl5q],
        cFq2x: ++cl5q,
        BD4H: ++cl5q,
        bHr1x: ({} + "")[cl5q],
        wW2x: ++cl5q,
        cDb1x: ++cl5q,
        cFr2x: ++cl5q,
        cFs2x: ++cl5q
    };
    cl5q.KY6S = (cl5q.KY6S = cl5q + "")[cl5q.BD4H] + (cl5q.KX6R = cl5q.KY6S[cl5q.kl8d]) + (cl5q.bfp4t = (cl5q.Gl5q + "")[cl5q.kl8d]) + (!cl5q + "")[cl5q.Qj9a] + (cl5q.Gm5r = cl5q.KY6S[cl5q.wW2x]) + (cl5q.Gl5q = (!"" + "")[cl5q.kl8d]) + (cCW1x = (!"" + "")[cl5q.bGX1x]) + cl5q.KY6S[cl5q.BD4H] + cl5q.Gm5r + cl5q.KX6R + cl5q.Gl5q;
    cl5q.bfp4t = cl5q.Gl5q + (!"" + "")[cl5q.Qj9a] + cl5q.Gm5r + cCW1x + cl5q.Gl5q + cl5q.bfp4t;
    cl5q.Gl5q = cl5q.bGw1x[cl5q.KY6S][cl5q.KY6S];
    w4A.bGt1x = cl5q
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, h4l = c4g("nej.v"), a4e = c4g("nej.e"), O5T = c4g("nej.ui"), b4f;
    if (!!O5T.bfj4n) return;
    var iX8P = a4e.to1x(".#<uispace>{position:absolute;background:#fff;}");
    O5T.bfj4n = NEJ.C();
    b4f = O5T.bfj4n.N5S(O5T.Vk1x);
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.bX5c([[document, "click", this.sV1x.f4j(this)]]);
        this.cCU1x = !!e4i.nostop;
        this.bJB2x = {top: e4i.top, left: e4i.left}
    };
    b4f.bC5H = function () {
        delete this.xO3x;
        delete this.bmy6s;
        delete this.qH0x;
        delete this.bJH2x;
        delete this.bfe4i;
        delete this.bJB2x;
        this.bF5K()
    };
    b4f.ch5m = function () {
        this.mj9a = iX8P
    };
    b4f.bW5b = function () {
        this.ci5n();
        this.AF3x = this.o4s;
        h4l.s4w(this.o4s, "click", this.cCT1x.f4j(this))
    };
    b4f.sV1x = function (d4h) {
        if (d4h.button != 2) this.bt5y()
    };
    b4f.cCT1x = function (d4h) {
        if (this.cCU1x) return;
        h4l.tW1x(d4h);
        var F4J = h4l.X5c(d4h);
        if (F4J.tagName == "A") h4l.cn5s(d4h)
    };
    b4f.cCS1x = function () {
        var df6Z = /\s+/i;
        return function (or0x) {
            or0x = (or0x || "").trim().toLowerCase().split(df6Z);
            or0x[0] = or0x[0] || "bottom";
            or0x[1] = or0x[1] || "left";
            this.qH0x = or0x
        }
    }();
    b4f.cCR1x = function (or0x) {
        var m4q = {}, nd9U = this.bmy6s, cFt2x = a4e.oy0x(), cC6w = this.o4s.offsetWidth, ce5j = this.o4s.offsetHeight;
        switch (or0x[0]) {
            case"top":
                m4q.top = nd9U.top - ce5j;
                m4q.left = or0x[1] == "right" ? nd9U.left + nd9U.width - cC6w : nd9U.left;
                break;
            case"left":
                m4q.left = nd9U.left - cC6w;
                m4q.top = or0x[1] == "bottom" ? nd9U.top + nd9U.height - ce5j : nd9U.top;
                break;
            case"right":
                m4q.left = nd9U.left + nd9U.width;
                m4q.top = or0x[1] == "bottom" ? nd9U.top + nd9U.height - ce5j : nd9U.top;
                break;
            default:
                m4q.top = nd9U.top + nd9U.height;
                m4q.left = or0x[1] == "right" ? nd9U.left + nd9U.width - cC6w : nd9U.left;
                break
        }
        return m4q
    };
    b4f.ME7x = function () {
        if (!this.bJH2x) {
            this.gD7w(this.bJB2x);
            return
        }
        if (!!this.bfe4i) {
            this.gD7w(this.xO3x);
            return
        }
        if (!!this.bmy6s) this.gD7w(this.cCR1x(this.qH0x))
    };
    b4f.cCP1x = function (F4J, dq6k, d4h) {
        dq6k = dq6k || bb5g;
        var bKE2x = a4e.oy0x(), cZ6T = h4l.jG8y(d4h) + (dq6k.left || 0), hv8n = h4l.lZ9Q(d4h) + (dq6k.top || 0),
            cC6w = F4J.offsetWidth + (dq6k.right || 0), ce5j = F4J.offsetHeight + (dq6k.bottom || 0),
            KS6M = bKE2x.scrollWidth, bmN6H = bKE2x.scrollHeight, bmO6I = cZ6T + cC6w, bmP6J = hv8n + ce5j;
        switch (this.qH0x[0]) {
            case"top":
                hv8n = bmP6J > bmN6H ? hv8n - ce5j : hv8n;
                if (this.qH0x[1] == "right") {
                    cZ6T = cZ6T - cC6w < 0 ? 0 : cZ6T - cC6w
                } else {
                    cZ6T = bmO6I > KS6M ? KS6M - cC6w : cZ6T
                }
                break;
            case"left":
                cZ6T = bmO6I > KS6M ? KS6M - cC6w : cZ6T;
                if (this.qH0x[1] == "top") {
                    hv8n = bmP6J > bmN6H ? hv8n - ce5j : hv8n
                } else {
                    hv8n = hv8n - ce5j < 0 ? hv8n : hv8n - ce5j
                }
                break;
            case"right":
                cZ6T = cZ6T - cC6w < 0 ? 0 : cZ6T - cC6w;
                if (this.qH0x[1] == "top") {
                    hv8n = bmP6J > bmN6H ? hv8n - ce5j : hv8n
                } else {
                    hv8n = hv8n - ce5j < 0 ? hv8n : hv8n - ce5j
                }
                break;
            default:
                hv8n = hv8n - ce5j < 0 ? hv8n : hv8n - ce5j;
                if (this.qH0x[1] == "left") {
                    cZ6T = bmO6I > KS6M ? KS6M - cC6w : cZ6T
                } else {
                    cZ6T = cZ6T - cC6w < 0 ? 0 : cZ6T - cC6w
                }
                break
        }
        return {top: hv8n, left: cZ6T}
    };
    b4f.bmQ6K = function () {
        var cCN1x = function (F4J, dq6k) {
            F4J = a4e.B4F(F4J);
            if (!F4J) return;
            dq6k = dq6k || bb5g;
            var bi5n = a4e.hU8M(F4J);
            return {
                top: bi5n.y - (dq6k.top || 0),
                left: bi5n.x - (dq6k.left || 0),
                width: F4J.offsetWidth + (dq6k.right || 0),
                height: F4J.offsetHeight + (dq6k.bottom || 0)
            }
        };
        return function (e4i) {
            e4i = e4i || bb5g;
            this.bfe4i = e4i.event;
            this.cCS1x(e4i.align);
            if (!!this.bfe4i) this.xO3x = this.cCP1x(e4i.target, e4i.delta, this.bfe4i);
            this.bmy6s = cCN1x(e4i.target, e4i.delta);
            this.bJH2x = !!e4i.fitable;
            this.J4N();
            return this
        }
    }()
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), O5T = c4g("nej.ui"), b4f,
        L5Q;
    if (!!O5T.CE4I) return;
    O5T.CE4I = NEJ.C();
    b4f = O5T.CE4I.N5S(O5T.bdS4W);
    L5Q = O5T.CE4I.cs5x;
    O5T.CE4I.cFu2x = function () {
        var cCL1x = function (d4h, C4G, fP7I, kr8j, PH9y) {
            var cF6z, K4O = C4G + "-i", R5W = fP7I.zg3x, bMs2x = !!kr8j.noclear, bMI2x = !!kr8j.toggled;
            if (k4o.gK7D(kr8j.onbeforeclick)) {
                var bdL4P = kr8j.noclear, cCK1x = kr8j.toggled;
                try {
                    kr8j.onbeforeclick(kr8j)
                } catch (e) {
                }
                bMs2x = !!kr8j.noclear;
                bMI2x = !!kr8j.toggled;
                kr8j.toggled = cCK1x;
                kr8j.noclear = bdL4P
            }
            var EC5H = R5W[K4O];
            if (bMI2x && !!EC5H) {
                EC5H.bt5y();
                return
            }
            h4l.bg5l(d4h);
            if (!bMs2x) {
                h4l.z4D(document, "click");
                cF6z = fP7I.A4E(kr8j)
            } else {
                cF6z = fP7I.bKi2x(kr8j, !0)
            }
            R5W[K4O] = cF6z;
            cF6z.wq2x("onbeforerecycle", function () {
                delete R5W[K4O]
            });
            cF6z.bmQ6K(PH9y)
        };
        return function (g4k, e4i) {
            g4k = a4e.B4F(g4k);
            if (!g4k) return this;
            if (!this.zg3x) this.zg3x = {};
            var C4G = a4e.lP9G(g4k);
            if (!!this.zg3x[C4G]) return this;
            e4i = NEJ.X({}, e4i);
            var PH9y = NEJ.EX({align: "", delta: null, fitable: !1}, e4i);
            PH9y.target = C4G;
            e4i.destroyable = !0;
            if (!e4i.fixed) {
                PH9y.fitable = !0;
                e4i.parent = document.body
            }
            this.zg3x[C4G] = [C4G, e4i.event || "click", cCL1x.eA6u(null, C4G, this, e4i, PH9y)];
            h4l.s4w.apply(h4l, this.zg3x[C4G]);
            return this
        }
    }();
    O5T.CE4I.cFv2x = function (g4k) {
        if (!this.zg3x) return this;
        var C4G = a4e.lP9G(g4k), d4h = this.zg3x[C4G];
        if (!d4h) return this;
        delete this.zg3x[C4G];
        h4l.mo9f.apply(h4l, d4h);
        var cF6z = this.zg3x[C4G + "-i"];
        if (!!cF6z) cF6z.bt5y();
        return this
    };
    b4f.bgC4G = function () {
        return O5T.bfj4n.A4E(this.cg5l)
    };
    b4f.UY1x = function () {
        L5Q.UY1x.apply(this, arguments);
        this.cg5l.top = null;
        this.cg5l.left = null;
        this.cg5l.nostop = !1
    };
    b4f.bmQ6K = function (e4i) {
        if (!!this.oU0x) this.oU0x.bmQ6K(e4i);
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bc5h = c4g("nej.ui"), n4r = c4g("nm.l"), b4f, L5Q;
    n4r.bna6U = NEJ.C();
    b4f = n4r.bna6U.N5S(bc5h.CE4I);
    b4f.bl5q = function (e4i) {
        e4i.nohack = true;
        this.bn5s(e4i)
    }
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), n4r = c4g("nm.l"), l4p = c4g("nm.x"), b4f, L5Q;
    var FullscreenApi = l4p.FL5Q || {};
    n4r.Z5e = NEJ.C();
    b4f = n4r.Z5e.N5S(n4r.bna6U);
    L5Q = n4r.Z5e.cs5x;
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.ez6t = e4i.type || 1
    };
    b4f.bW5b = function () {
        this.ci5n();
        this.o4s = a4e.nR0x(this.cCH1x());
        var i4m = a4e.dk6e(this.o4s);
        this.ry1x = i4m[0];
        this.cu5z = i4m[1]
    };
    b4f.cCH1x = function () {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b4f.ME7x = function () {
        var D4H = {}, cj5o = this.o4s.style, jD8v = a4e.oy0x(), nW0x = {left: jD8v.scrollLeft, top: jD8v.scrollTop},
            dq6k = {left: jD8v.clientWidth - this.o4s.offsetWidth, top: jD8v.clientHeight - this.o4s.offsetHeight};
        D4H.top = Math.max(0, nW0x.top + dq6k.top / 2);
        D4H.left = Math.max(0, nW0x.left + dq6k.left / 2);
        this.oU0x.gD7w(D4H)
    };
    b4f.J4N = function (e4i) {
        L5Q.J4N.call(this);
        this.ME7x();
        this.ez6t == 1 ? a4e.fj7c(this.ry1x, "u-icn-32", "u-icn-31") : a4e.fj7c(this.ry1x, "u-icn-31", "u-icn-32");
        this.cu5z.innerHTML = e4i.tip || ""
    };
    window.g_showTipCard = n4r.Z5e.J4N = function () {
        var eg6a;
        return function (e4i) {
            clearTimeout(eg6a);
            if (e4i.parent === undefined) e4i.parent = document[FullscreenApi.fullscreenElement] || document.body;
            if (e4i.autoclose === undefined) e4i.autoclose = true;
            e4i.clazz = "m-sysmsg";
            !!this.fg7Z && this.fg7Z.T5Y();
            this.fg7Z = this.A4E(e4i);
            this.fg7Z.J4N(e4i);
            if (e4i.autoclose) eg6a = setTimeout(this.bt5y.f4j(this), 2e3)
        }.f4j(n4r.Z5e)
    }();
    n4r.Z5e.bt5y = function () {
        !!this.fg7Z && this.fg7Z.bt5y()
    }
})();
(function () {
    var c4g = NEJ.P, v4z = c4g("nej.j"), k4o = c4g("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v4z.bm5r = v4z.bm5r.eH6B(function (d4h) {
            e4i = d4h.args[1];
            e4i.query = e4i.query || {};
            if (k4o.fC7v(e4i.query)) e4i.query = k4o.hq8i(e4i.query);
            e4i.query.ref = "mail"
        })
    }
})();
(function () {
    var c4g = NEJ.P, br5w = NEJ.F, fy7r = NEJ.R, I4M = c4g("nej.ut"), k4o = c4g("nej.u"), h4l = c4g("nej.v"),
        v4z = c4g("nej.j"), q4u = c4g("nm.d"), n4r = c4g("nm.l"), K4O = "playlist-tracks_", b4f;
    q4u.fp7i({
        "playlist_my-list": {
            url: "/api/user/playlist", type: "GET", format: function (Q5V, e4i) {
                this.cCG1x(Q5V.playlist);
                return {total: 0, list: fy7r}
            }, onerror: function () {
                this.z4D("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create", format: function (Q5V, e4i) {
                var np9g = Q5V.playlist;
                np9g.creator = GUser;
                np9g.isHost = !0;
                np9g.typeFlag = "playlist";
                return np9g
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.ic8U, "listchange", d4h)
            }, onmessage: function () {
                var mk9b = {507: "歌单数量超过上限！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (bY5d) {
                    n4r.Z5e.J4N({tip: mk9b[bY5d] || "创建失败", type: 2})
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete", type: "GET", filter: function (e4i) {
                e4i.id = e4i.data.pid
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.ic8U, "listchange", d4h)
            }, onmessage: function () {
                var mk9b = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (bY5d) {
                    n4r.Z5e.J4N({tip: mk9b[bY5d] || "删除失败", type: 2})
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET", url: "/api/playlist/subscribe", filter: function (e4i) {
                var ey6s = e4i.ext || {};
                e4i.ext = NEJ.X(ey6s, e4i.data);
                e4i.data = {id: e4i.ext.id}
            }, format: function (Q5V, e4i) {
                n4r.Z5e.J4N({tip: "收藏成功" + (Q5V.point > 0 ? ' 获得<em class="s-fc6">' + Q5V.point + "积分</em>" : "")});
                var p4t = e4i.ext;
                p4t.subscribedCount++;
                return p4t
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.cCF1x, "listchange", d4h);
                h4l.z4D(q4u.cCF1x, "itemchange", {attr: "subscribedCount", data: d4h.data})
            }, onmessage: function () {
                var mk9b = {404: "歌单不存在！", 501: "歌单已经收藏！", 506: "歌单收藏数量超过上限！"};
                return function (bY5d) {
                    n4r.Z5e.J4N({type: 2, tip: mk9b[bY5d] || "收藏失败，请稍后再试！"})
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe", type: "GET", filter: function (e4i) {
                e4i.id = e4i.data.id = e4i.data.pid
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.ic8U, "listchange", d4h)
            }, onmessage: function () {
                var mk9b = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (bY5d) {
                    n4r.Z5e.J4N({tip: mk9b[bY5d], type: 2})
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function (e4i) {
                var j4n = e4i.data, bdu3x = {};
                bdu3x["playlist-update-name"] = {id: j4n.id, name: j4n.name};
                bdu3x["playlist-update-tag"] = {id: j4n.id, tags: j4n.tags.join(";")};
                bdu3x["playlist-update-desc"] = {id: j4n.id, desc: j4n.description};
                e4i.data = bdu3x;
                e4i.ext = j4n
            },
            format: function (W5b, qB0x, PA9r, e4i) {
                if (W5b.code == 200 && qB0x.code == 200 && PA9r.code == 200) {
                    e4i.ext.allSuccess = true;
                    n4r.Z5e.J4N({tip: "保存成功"})
                } else if (W5b.code == 407 || qB0x.code == 407 || PA9r.code == 407) {
                    e4i.ext.allSuccess = false;
                    n4r.Z5e.J4N({type: 2, tip: "输入内容包含关键字"})
                } else {
                    e4i.ext.allSuccess = false;
                    n4r.Z5e.J4N({type: 2, tip: "保存失败"})
                }
                return this.eJ6D(e4i.ext.id)
            },
            finaly: function (d4h, e4i) {
                h4l.z4D(q4u.ic8U, "listchange", d4h)
            },
            onmessage: function (bY5d) {
                n4r.Z5e.J4N({type: 2, tip: "保存失败"})
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name", format: function (Q5V, e4i) {
                var p4t = this.eJ6D(e4i.ext.id);
                if (Q5V.code == 200) p4t.name = e4i.ext.name;
                return Q5V
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update", format: function (Q5V, e4i) {
                var p4t = this.eJ6D(e4i.ext.id);
                if (Q5V.code == 200) p4t.tags = e4i.ext.tags;
                return Q5V
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update", format: function (Q5V, e4i) {
                var p4t = this.eJ6D(e4i.ext.id);
                if (Q5V.code == 200) p4t.description = e4i.ext.description;
                return Q5V
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update", filter: function (e4i) {
                e4i.url = e4i.data.url;
                delete e4i.data.url
            }, format: function (Q5V, e4i) {
                n4r.Z5e.J4N({tip: "保存成功"});
                var p4t = this.eJ6D(e4i.data.id);
                p4t.coverImgUrl = e4i.url;
                e4i.ext = p4t;
                return p4t
            }, onmessage: function (bY5d) {
                n4r.Z5e.J4N({type: 2, tip: "保存失败"})
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.ic8U, "itemchange", {attr: "coverImgUrl", data: e4i.ext})
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount", type: "GET", format: function (Q5V, e4i) {
                var np9g = this.eJ6D(e4i.data.id);
                if (!np9g) return;
                np9g.playCount++;
                h4l.z4D(q4u.ic8U, "itemchange", {attr: "playcount", data: np9g})
            }
        }
    });
    q4u.ic8U = NEJ.C();
    b4f = q4u.ic8U.N5S(q4u.hJ8B);
    b4f.cw5B = function () {
        this.cE6y()
    };
    b4f.bQa3x = function () {
        var do6i = GUser.userId;
        this.lO9F({limit: 1001, key: "playlist_my-" + do6i, data: {offset: 0, limit: 1001, uid: do6i}})
    };
    b4f.cCG1x = function (i4m) {
        var do6i = GUser.userId, iQ8I = [], bQq3x = [];
        k4o.bd5i(i4m, function (p4t) {
            p4t.typeFlag = "playlist";
            if (p4t.creator && p4t.creator.userId == do6i) {
                if (p4t.specialType == 5) p4t.name = "我喜欢的音乐";
                p4t.isHost = !0;
                iQ8I.push(p4t)
            } else {
                bQq3x.push(p4t)
            }
        });
        this.wh2x("playlist_new-" + do6i, iQ8I);
        this.wh2x("playlist_fav-" + do6i, bQq3x)
    };
    b4f.cCE1x = function (j4n) {
        this.cp5u("playlist-update-cover", {data: j4n})
    };
    b4f.cFw2x = function () {
        var Pl9c = this.cCC1x.B4F("host-plist");
        if (Pl9c.length == 0) {
            return
        }
        if (Pl9c.length == 1 && Pl9c[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = Pl9c.length; i < len; i++) {
            var p4t = Pl9c[i];
            if (p4t.trackCount > 0) return p4t.id
        }
        return this.cCC1x.B4F("host-plist")[0].id
    };
    b4f.cCB1x = function (C4G) {
        if (GUser && GUser.userId > 0) {
            this.cp5u("playlist-upcount", {data: {id: C4G}})
        }
    };
    b4f.Gz5E = function () {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b4f.cFx2x = function () {
        return GUser.userId
    };
    b4f.GA5F = function (p4t) {
        if (p4t.userId == GUser.userId && p4t.specialType == 5) p4t.name = "我喜欢的音乐";
        h4l.z4D(this.constructor, "itemchange", {data: this.Bs4w(p4t)});
        return p4t
    };
    I4M.fK7D.A4E({element: q4u.ic8U, event: ["listchange", "playcountchange", "itemchange"]})
})();
(function () {
    var c4g = NEJ.P, fy7r = NEJ.R, br5w = NEJ.F, bb5g = NEJ.O, I4M = c4g("nej.ut"), h4l = c4g("nej.v"),
        k4o = c4g("nej.u"), l4p = c4g("nm.x"), q4u = c4g("nm.d"), n4r = c4g("nm.l"), b4f, L5Q;
    q4u.fp7i({
        "program-get": {
            url: "/api/dj/program/detail", format: function (Q5V) {
                return Q5V.program
            }
        }, "program_djradio-list": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e4i) {
                e4i.data.limit = 1e3;
                delete e4i.data.id
            }, format: function (Q5V, e4i) {
                var bRn5s = [], qs0x = Q5V.programs;
                if (qs0x) {
                    for (var i = 0, l = qs0x.length; i < l; i++) {
                        if (qs0x[i].programFeeType < 10 || qs0x[i].buyed) {
                            bRn5s.push(qs0x[i])
                        }
                    }
                }
                return bRn5s
            }
        }, "program_fav-list": {
            url: "/api/djprogram/subscribed/paged", format: function (Q5V, e4i) {
                return Q5V.programs
            }, onerror: "onlisterror"
        }, "program_fav-add": {
            url: "/api/djprogram/subscribe", filter: function (e4i) {
                e4i.ext = e4i.data;
                e4i.data = {id: e4i.ext.id};
                e4i.id = e4i.data.id
            }, format: function (Q5V, e4i) {
                n4r.Z5e.J4N({tip: "收藏成功"});
                var p4t = e4i.ext;
                p4t.subscribedCount++;
                p4t.subscribed = !0;
                return p4t
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.rb0x, "listchange", d4h)
            }, onmessage: function () {
                var mk9b = {404: "节目不存在！", 501: "节目已收藏！"};
                return function (bY5d) {
                    n4r.Z5e.J4N({type: 2, tip: mk9b[bY5d] || "收藏失败！"})
                }
            }()
        }, "program_fav-del": {
            url: "/api/djprogram/unsubscribe", finaly: function (d4h, e4i) {
                h4l.z4D(q4u.rb0x, "listchange", d4h)
            }, onmessage: function () {
                var mk9b = {404: "节目不存在！", 502: "没有收藏此节目！"};
                return function (bY5d) {
                    l4p.bnC6w({txt: mk9b[bY5d] || "取消收藏失败！"})
                }
            }()
        }, "program-update-count": {
            type: "GET", url: "/api/dj/program/listen", filter: function (e4i) {
                var p4t = this.eJ6D(e4i.data.id) || bb5g;
                e4i.ext = (p4t.listenerCount || 0) + 1
            }, format: function (Q5V, e4i) {
                var p4t = this.eJ6D(e4i.data.id);
                if (!!p4t) {
                    p4t.listenerCount = Math.max(e4i.ext, p4t.listenerCount || 0)
                }
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.rb0x, "itemchange", {attr: "playCount", data: this.eJ6D(e4i.data.id)})
            }
        }, "program-like": {
            url: "/api/resource/like", filter: function (e4i) {
                e4i.data = {threadId: "A_DJ_1_" + e4i.id}
            }, format: function (Q5V, e4i) {
                var p4t = e4i.ext.data || this.eJ6D(e4i.id);
                p4t.liked = true;
                p4t.likedCount++;
                e4i.ext.data = p4t;
                try {
                    top.player.setLike(p4t)
                } catch (e) {
                }
                return p4t
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.rb0x, "itemchange", {attr: "likedCount", data: e4i.ext.data})
            }
        }, "program-unlike": {
            url: "/api/resource/unlike", filter: function (e4i) {
                e4i.data = {threadId: "A_DJ_1_" + e4i.id}
            }, format: function (Q5V, e4i) {
                var p4t = e4i.ext.data || this.eJ6D(e4i.id);
                p4t.liked = false;
                p4t.likedCount--;
                e4i.ext.data = p4t;
                try {
                    top.player.setLike(p4t)
                } catch (e) {
                }
                return p4t
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.rb0x, "itemchange", {attr: "likedCount", data: e4i.ext.data})
            }
        }
    });
    q4u.rb0x = NEJ.C();
    b4f = q4u.rb0x.N5S(q4u.hJ8B);
    b4f.cFy2x = function () {
        var do6i = GUser.userId;
        this.lO9F({limit: 1001, key: "program_fav-" + do6i, data: {offset: 0, limit: 1e3, uid: do6i}})
    };
    b4f.cFz2x = function (de6Y) {
        var qr0x = de6Y[this.xy2x];
        l4p.cCv1x(4, function (R5W) {
            R5W.wh2x("track_program-" + qr0x, de6Y.songs)
        });
        delete de6Y.songs;
        var bP5U = de6Y.mainSong;
        l4p.cCv1x(4, function (R5W) {
            R5W.wh2x("track_program_main-" + qr0x, !bP5U ? [] : [bP5U])
        });
        de6Y.mainSong = (bP5U || bb5g).id
    };
    b4f.cFB2x = function (C4G) {
        var de6Y = this.eJ6D(C4G), do6i = localCache.Za2x("host.profile.userId");
        return !!de6Y && de6Y.dj.userId == do6i
    };
    b4f.cFC2x = function (C4G) {
        return !1
    };
    b4f.GA5F = function (p4t) {
        h4l.z4D(this.constructor, "itemchange", {attr: "detail", data: this.Bs4w(p4t)});
        return p4t
    };
    b4f.cCB1x = function (C4G) {
        this.cp5u("program-update-count", {data: {id: C4G}})
    };
    l4p.bSI5N = function (e4i) {
        var R5W = q4u.rb0x.A4E({
            onitemadd: function () {
                (e4i.onsuccess || br5w)()
            }, onerror: function () {
                (e4i.onerror || br5w)()
            }
        });
        if (e4i.data.liked) {
            R5W.ux2x(e4i.data)
        } else {
            R5W.ps0x(e4i.data)
        }
    };
    b4f.ps0x = function (de6Y) {
        if (!l4p.gT7M()) return;
        var ct5y = {ext: {}};
        if (k4o.lG9x(de6Y)) {
            ct5y.id = de6Y.id;
            ct5y.ext.data = de6Y
        } else {
            ct5y.id = de6Y
        }
        this.cp5u("program-like", ct5y)
    };
    b4f.ux2x = function (de6Y) {
        if (!l4p.gT7M()) return;
        var ct5y = {ext: {}};
        if (k4o.lG9x(de6Y)) {
            ct5y.id = de6Y.id;
            ct5y.ext.data = de6Y
        } else {
            ct5y.id = de6Y
        }
        this.cp5u("program-unlike", ct5y)
    };
    I4M.fK7D.A4E({element: q4u.rb0x, event: ["listchange", "itemchange"]})
})();
(function () {
    var c4g = NEJ.P, br5w = NEJ.F, fy7r = NEJ.R, I4M = c4g("nej.ut"), k4o = c4g("nej.u"), h4l = c4g("nej.v"),
        v4z = c4g("nej.j"), q4u = c4g("nm.d"), n4r = c4g("nm.l"), l4p = c4g("nm.x"), K4O = "playlist-tracks_",
        l4p = c4g("nm.x"), b4f;
    q4u.fp7i({
        "track-get": {
            url: "/api/v3/song/detail", filter: function (e4i) {
                e4i.data.c = JSON.stringify([{id: e4i.data.id}])
            }, format: function (Q5V, e4i) {
                var bj5o = l4p.GB5G(Q5V.songs[0]);
                bj5o.privilege = Q5V.privileges[0];
                return bj5o
            }
        }, "track_playlist-list": {
            url: "/api/v3/playlist/detail", filter: function (e4i) {
                e4i.data.n = 1e3
            }, format: function (Q5V, e4i) {
                var hC8u = [];
                this.tR1x.GA5F(Q5V.playlist);
                k4o.bd5i(Q5V.playlist.tracks, function (bP5U, r4v) {
                    var bTa5f = l4p.GB5G(bP5U);
                    bTa5f.privilege = Q5V.privileges[r4v];
                    hC8u.push(bTa5f)
                }, this);
                return hC8u
            }
        }, "track_album-list": {
            url: "/api/v1/album/{id}", format: function (Q5V, e4i) {
                var hC8u = [];
                k4o.bd5i(Q5V.songs, function (bj5o) {
                    hC8u.push(l4p.GB5G(bj5o))
                });
                return hC8u
            }
        }, "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks", filter: function (e4i) {
                var bz5E = {}, j4n = e4i.data, cCj1x = this.hD8v(e4i.key) || [];
                GC5H = [];
                k4o.bd5i(cCj1x, function (bP5U) {
                    var C4G = k4o.lG9x(bP5U) ? bP5U.id : bP5U;
                    bz5E[C4G] = true
                });
                e4i.ext = [];
                k4o.bd5i(j4n.tracks, function (bP5U) {
                    var C4G = k4o.lG9x(bP5U) ? bP5U.id : bP5U;
                    if (!bz5E[C4G]) {
                        GC5H.push(C4G);
                        bz5E[C4G] = true;
                        e4i.ext.push(bP5U)
                    }
                });
                j4n.trackIds = JSON.stringify(GC5H);
                j4n.op = "add";
                if (!GC5H.length) {
                    e4i.value = {code: 502}
                }
            }, format: function (Q5V, e4i) {
                n4r.Z5e.J4N({tip: "已添加至歌单"});
                var np9g = this.tR1x.eJ6D(e4i.data.pid);
                if (!!Q5V.coverImgUrl) np9g.coverImgUrl = Q5V.coverImgUrl;
                k4o.nk9b(e4i.ext, function (bP5U) {
                    this.yM3x(e4i, k4o.lG9x(bP5U) ? bP5U : null);
                    if (!!np9g) np9g.trackCount++
                }, this);
                h4l.z4D(q4u.ic8U, "itemchange", {data: np9g || {}, cmd: "add"});
                this.z4D("onaddsuccess");
                return null
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.ws2x, "listchange", {key: e4i.key, action: "refresh"});
                var qr0x = e4i.data.pid, cB5G = this.kw8o(e4i.key)
            }, onmessage: function () {
                var mk9b = {502: "歌曲已存在！", 505: "歌单已满！"};
                return function (bY5d) {
                    setTimeout(function () {
                        n4r.Z5e.J4N({tip: mk9b[bY5d] || "添加失败，请稍后再试！", type: 2})
                    }, 0)
                }
            }()
        }, "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks", filter: function (e4i) {
                var j4n = e4i.data;
                e4i.ext = j4n.trackIds;
                j4n.trackIds = JSON.stringify(j4n.trackIds);
                j4n.op = "del"
            }, format: function (Q5V, e4i) {
                var np9g = this.tR1x.eJ6D(e4i.data.pid);
                k4o.bd5i(e4i.ext, function (C4G) {
                    this.bls5x({id: C4G, key: "track_playlist-" + e4i.data.pid}, !0);
                    if (!!np9g) np9g.trackCount = Math.max(0, np9g.trackCount - 1)
                }, this);
                h4l.z4D(q4u.ic8U, "itemchange", {data: np9g || {}, cmd: "del"});
                return null
            }, finaly: function (d4h, e4i) {
                h4l.z4D(q4u.ws2x, "listchange", {key: e4i.key, action: "refresh"})
            }, onmessage: function (bY5d) {
                l4p.bnC6w({text: "歌曲删除失败！"})
            }
        }, "track_program-list": {
            url: "/api/dj/program/detail", format: function (Q5V, e4i) {
                return this.bTm5r.GA5F(Q5V.program).songs
            }, onerror: "onlisterror"
        }, "track_listen_record-list": {
            url: "/api/v1/play/record", format: function (Q5V, e4i) {
                var i4m = [];
                if (e4i.data.type == -1) {
                    if (Q5V.weekData && Q5V.weekData.length) {
                        e4i.data.type = 1
                    } else {
                        e4i.data.type = 0
                    }
                }
                if (e4i.data.type == 1) {
                    i4m = this.bTp5u(Q5V.weekData)
                } else {
                    i4m = this.bTp5u(Q5V.allData)
                }
                return i4m
            }, onerror: "onlisterror"
        }, "track_day-list": {
            url: "/api/v2/discovery/recommend/songs", format: function (Q5V, e4i) {
                var on0x = [], i4m = Q5V.recommend || [];
                k4o.bd5i(i4m, function (bj5o, r4v) {
                    on0x.push({
                        action: "recommendimpress",
                        json: {alg: bj5o.alg, scene: "user-song", position: r4v, id: bj5o.id}
                    })
                });
                this.kI9z.Xk1x(on0x);
                e4i.limit = i4m.length;
                return i4m
            }, onerror: "onlisterror"
        }, "track_lyric-get": {
            type: "GET", url: "/api/song/lyric", filter: function (e4i) {
                e4i.data.lv = 0;
                e4i.data.tv = 0
            }, format: function (m4q, e4i) {
                return m4q
            }, onload: "onlyricload", onerror: "onlyricerror"
        }
    });
    q4u.ws2x = NEJ.C();
    b4f = q4u.ws2x.N5S(q4u.hJ8B);
    b4f.cw5B = function () {
        this.cE6y();
        this.tR1x = q4u.ic8U.A4E();
        this.bTm5r = q4u.rb0x.A4E();
        this.kI9z = q4u.hO8G.A4E()
    };
    b4f.bTp5u = function (i4m) {
        var m4q = [], fo7h = 0;
        k4o.bd5i(i4m, function (p4t, r4v) {
            var bj5o = l4p.GB5G(p4t.song);
            if (r4v == 0) {
                fo7h = p4t.score
            }
            bj5o.max = fo7h;
            bj5o.playCount = p4t.playCount;
            bj5o.score = p4t.score;
            m4q.push(bj5o)
        });
        return m4q
    };
    I4M.fK7D.A4E({element: q4u.ws2x, event: ["listchange"]})
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, cy5D = c4g("nm.pc");
    var bnH6B = {playlist: "A_PL_0_", dj: "A_DJ_1_", program: "A_DJ_1_", album: "R_AL_3_", song: "R_SO_4_"};
    var qK0x = function (bR5W) {
        var CI4M = "orpheus://orpheus";
        window.top.postMessage(JSON.stringify(bR5W), CI4M)
    };
    var cCi1x = function (lY9P) {
        var kR9I = "http://" + location.host + "/",
            Pe9V = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/,
            dQ6K = Pe9V.exec(lY9P);
        if (!dQ6K) return cCh1x(lY9P);
        var gi7b = dQ6K[2], hy8q = dQ6K[3], do6i = dQ6K[4] || "", jt8l = "";
        switch (gi7b) {
            case"album":
                jt8l = "#/m/album/comment/?rid=" + bnH6B[gi7b] + hy8q + "&id=" + hy8q;
                break;
            case"playlist":
                jt8l = "#/m/playlist/comment/?rid=" + bnH6B[gi7b] + hy8q + "&id=" + hy8q;
                break;
            case"song":
            case"dj":
            case"program":
                jt8l = "#/m/song?rid=" + bnH6B[gi7b] + hy8q;
                break;
            case"event":
                jt8l = "#/m/friend/event/?id=" + hy8q + "&uid=" + do6i;
                break;
            case"user/home":
                jt8l = "#/m/personal/?uid=" + hy8q;
                break;
            case"mv":
                jt8l = "#/m2/mv/?id=" + hy8q;
                break;
            case"activity":
                jt8l = "#/m/friend/activity?id=" + hy8q;
                break;
            case"video":
                jt8l = "#/m2/mv/?id=" + hy8q + "&type=1";
                break;
            default:
                jt8l = "#/m/" + gi7b + "/?id=" + hy8q
        }
        return kR9I + jt8l
    };
    var cCh1x = function (lY9P) {
        var cCe1x = /http:\/\/player\.youku\.com\/embed\/(.+)/;
        var dQ6K = cCe1x.exec(lY9P);
        if (dQ6K) return "http://v.youku.com/v_show/id_" + dQ6K[1];
        return lY9P
    };
    cy5D.eq6k = function (gi7b, hy8q) {
        qK0x({name: "play", args: {type: gi7b, id: hy8q}})
    };
    cy5D.fD7w = function () {
        qK0x({name: "pause"})
    };
    cy5D.AW4a = function (lY9P) {
        qK0x({name: "open", args: {link: cCi1x(lY9P)}})
    };
    cy5D.kL9C = function (gi7b, hy8q, cK6E) {
        qK0x({name: "share", args: {type: gi7b, id: hy8q, shareContent: cK6E}})
    };
    cy5D.bVp6j = function (gi7b, hy8q) {
        qK0x({name: "comment", args: {type: gi7b, id: hy8q}})
    };
    cy5D.cCd1x = function () {
        qK0x({name: "init"})
    };
    cy5D.AZ4d = function (ce5j) {
        qK0x({name: "setHeight", args: {height: ce5j}})
    };
    cy5D.im8e = function (bG5L, U5Z) {
        qK0x({name: "toast", args: {message: bG5L || "", state: U5Z}})
    };
    cy5D.GE5J = function (lY9P) {
        qK0x({name: "login", args: {link: lY9P}})
    };
    cy5D.bVP6J = function (Bh4l) {
        qK0x({name: "topbar", args: {show: !!Bh4l}})
    };
    cy5D.cCc1x = function (bx5C) {
        qK0x({name: "refreshtopbar", args: {info: bx5C}})
    };
    cy5D.cBZ1x = function (bs5x, r4v) {
        qK0x({name: "big", args: {arr: bs5x, index: r4v}})
    };
    cy5D.LU7N = function (cx5C) {
        qK0x({name: "download", args: {img: cx5C}})
    };
    cy5D.byy9p = function (cBX1x) {
        qK0x({name: "scrollable", args: {scrollable: cBX1x}})
    }
})();
(function () {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function (f) {
            if (null == f || void 0 == f) return f;
            if (0 != f.length % 2) throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++) if (f.charAt(c) == g[a]) {
                    b.push(a.toString(16));
                    break
                }
            }
            return decodeURIComponent(b.join(""))
        }
    }

    var k = (new J).d, d = (new J).d, e = (new J).d, f = (new J).d, g = (new J).d;
    (function () {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function () {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function () {
                function d(b, c) {
                    if (null == b) return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++));
                    return f
                }

                function f(b) {
                    if (null == b) return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }

                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15]) return za(L);
                    if (h.length >= L) {
                        var c = a[15], l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L) throw Error(b[134]);
                            for (var d = a[15]; d < L; d++) l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
                    return c
                }

                function e(h) {
                    var c = a[405];
                    if (null != h) for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15]) h = new String(b[0]); else {
                        for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }

                function k(h, c, l) {
                    var d,
                        f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74], e = [];
                    if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g); else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g); else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]); else throw Error(b[111]);
                    return e.join(b[0])
                }

                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
                    return c
                }

                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l) throw Error(b[131]);
                        if (h.length < f) throw Error(b[134]);
                        for (var e = a[15]; e < f; e++) l[d + e] = h[c + e]
                    }
                }

                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }

                function ma(h) {
                    if (null == h || void 0 == h) return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++) if (h.charAt(d) == b[27]) if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]); else throw Error(b[146]); else c.push(h.charCodeAt(d));
                    return c
                }

                function Na(b) {
                    if (null == b || b.length == a[15]) return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23], g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }

                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }

                function na(b, c) {
                    if (null == b || null == c || b.length != c.length) return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
                    return d
                }

                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }

                function Oa(a, b) {
                    return x(a + b)
                }

                function x(c) {
                    if (c < a[290]) return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282]) return c;
                    if (c > a[282]) return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }

                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try {
                            var g = h[e];
                            l()(g) && f.push(g)
                        } catch (k) {
                        }
                        return f.join(b[56])
                    }

                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c
                        }

                        var d = [c[21], c[141], B[6]], l = [], f = c[139], e = b[327], g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
                        return function (c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]), g = l[f];
                                if (e.height !== g.height || e.width !== g.width) return !0
                            }
                            return !1
                        }
                    }

                    function f() {
                        var a = null, h = null, d = [];
                        try {
                            h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {
                        }
                        if (!a) return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {
                        }
                        try {
                            d.push(e(a, h))
                        } catch (k) {
                        }
                        return d.join(b[56])
                    }

                    function e(h, d) {
                        try {
                            var f = c[76], l = b[240], g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](), X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }

                    function g() {
                        var h = C[b[167]](b[155]), d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]]) return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++) try {
                            C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h)
                        } catch (e) {
                            d.push(b[349])
                        }
                        return d.join(b[54])
                    }

                    function k() {
                        try {
                            var h = C[b[167]](c[79]), d = h[B[7]](b[354]), f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }

                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }

                    function r() {
                        if (!y[b[4]]) return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [], f = {};
                        d.push(p(y[b[4]], function (h) {
                            f[h.name] = a[541];
                            var d = p(h, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function (a) {
                            if (f[a]) return b[0];
                            a = y[b[4]][a];
                            if (!a) return b[0];
                            var h = p(a, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }

                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function (a) {
                            try {
                                return new window[b[355]](a), a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }

                    function p(a, b, h) {
                        var c = [];
                        if (null == a) return c;
                        if (I && a.map === I) return a.map(b, h);
                        E(a, function (a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }

                    function E(b, h) {
                        if (null !== b) if (z && b.forEach === z) b.forEach(h, void 0); else if (b.length === +b.length) for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++) ; else for (c in b) if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
                    }

                    var z = Array.prototype.forEach, I = Array.prototype.map,
                        n = {e: M, j: !0, i: !0, h: !0, b: !0, a: !0};
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function () {
                        var h = [], l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i) try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch (r) {
                                e = !1
                            }
                            if (e) try {
                                h.push(k()), n.b && h.push(f())
                            } catch (E) {
                                h.push(b[59])
                            }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
                        return u
                    }
                }

                function M(h) {
                    var c = a[88], d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try {
                            var q = parseInt(B.charAt(z) + b[0]), p = q || q === a[15] ? p + q : p + a[541];
                            E++
                        } catch (n) {
                            p += a[541], E++
                        }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch (A) {
                            u++, H += C
                        }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }

                function ba(h, c) {
                    if (h < a[15] || h >= a[43]) throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }

                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c) throw Error(b[87]);
                    if (a.length == c) return a;
                    for (var e = [], f = a.length; f < c; f++) e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }

                function U(b, c) {
                    if (b <= a[15]) return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++) d.push(c);
                    return d
                }

                function r(a) {
                    return null == a || void 0 == a
                }

                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }

                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c)) return !1;
                    try {
                        if (r(window[a.f])) return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }

                function v(c, d) {
                    if (r(c)) return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d) return f
                    }
                }

                function da() {
                    var h;
                    a:{
                        if (!r(q)) for (h = a[15]; h < q.length; h++) {
                            var d = q[h];
                            if (d.g && !Ra(d)) {
                                h = d;
                                break a
                            }
                        }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else e = v(q, c[172])
                                                } else e = v(q, b[342])
                                            } else e = v(q, c[30])
                                        } else e = v(q, c[16])
                                    } else e = v(q, B[2])
                                } else e = v(q, b[320])
                            } else e = v(q, c[58])
                        } else e = v(q, c[89])
                    } else e = h;
                    return e
                }

                function Sa() {
                    var a = da();
                    if (!r(a)) return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a)) return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }

                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta, f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }

                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }

                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]], e = b[0];
                    if (null == h || void 0 == h) return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++) if (h.hasOwnProperty(d[f])) {
                            var g = b[29] + d[f] + b[262], k;
                            k = b[0] + h[d[f]];
                            k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                            e += g + k + b[191]
                        }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }

                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }

                function Da(a) {
                    window[pa] = a
                }

                function Ea(a) {
                    window[qa] = a
                }

                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++) e.push(c);
                    return e.join(b[0])
                }

                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }

                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0]) a = window[qa];
                    return a
                }

                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0]) return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }

                function ga(c) {
                    if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }

                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0]) a = window[pa];
                    return a
                }

                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0]) return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }

                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }

                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15])) for (var c = a[15]; c < K.length; c++) {
                        var d = K[c];
                        (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                    }
                }

                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0, t = {v: b[227]}, l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({b: Xa, a: Ya})).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1
                    }
                    try {
                        var v = l = Ca(t), t = Za;
                        if (null == t || void 0 == t) throw Error(b[120]);
                        if (null == v || void 0 == v) v = b[0];
                        var q = v, y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y), p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301], z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p), p = na(p, g(y)), E = p = g(p), I;
                        if (null == A || void 0 == A || A.length == a[15]) I = za(F); else {
                            var n = A.length, J = a[15], J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++) z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15]) throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++) I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N) M = null; else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w) Q = null; else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p), ia;
                            w = xa;
                            D = E;
                            if (null == w) ia = null; else if (null == D) ia = w; else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E), ja = f(xa), ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G) ka = null; else if (G.length == a[15]) ka = b[0]; else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;) if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya; else {
                                    u.push(k(G, R, G.length - R));
                                    break
                                }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({ec: b[43], em: ga.message}), h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }

                m.prototype = {
                    toString: function () {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0, Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]], y = window[c[6]], N = a[16], T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158], L = a[158], ha = a[23], va = a[23], d = function (b, c) {
                        if (null == b) return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++));
                        return e
                    }, Za = b[345], S = b[299], V = c[100], fa = a[91], ea = b[275], Ta = ea.length, sa = a[444],
                    ta = a[396], Ya = !1, Xa = !1, O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56], A = function (d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
                        }
                        return null
                    }(O, A), pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(), K = function (c) {
                        var d = [];
                        if (!c) return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                        return d
                    }(O);
                K.push(null);
                K.push(b[38] + O);
                (function (d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function () {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1; else {
                        var c;
                        if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function () {
})();
(function () {
    var byD9u;
    var ut1x = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cBW1x = 0;
    var byX9O = 0;
    var bzb9S = 1;
    var bzf9W = 0;
    var bnT6N = "";
    var bzj9a = "";
    var bzn9e = "";
    var bbg3x = "";
    var bbd3x = "";
    var bnU6O = "";
    var bzC9t = 0;
    var bzF9w = "";
    var Kx6r = "";
    var GI5N = 0;
    var bnW6Q = ntes_get_domain();
    var bnX6R = null;
    var cFF2x = "//analytics.163.com";
    var cBP1x = function () {
    };

    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }

    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }

    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bnW6Q
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bnW6Q
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bnW6Q
    }

    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }

    function ntes_get_flashver() {
        var f = "", n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {
                    }
                }
            }
        }
        return f
    }

    var cBO1x = 0;
    var OD8v = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * OD8v))
    }

    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }

    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }

    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }

    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }

    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }

    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }

    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }

    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }

    function str2binl(d) {
        var c = new Array;
        var a = (1 << OD8v) - 1;
        for (var b = 0; b < d.length * OD8v; b += OD8v) {
            c[b >> 5] |= (d.charCodeAt(b / OD8v) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = cBO1x ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }

    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }

    function ntes_get_navigation_info() {
        bbg3x = "-";
        bnU6O = "-";
        bbd3x = "-";
        var c = window.self, b = window.screen, a = window.navigator;
        if (c.screen) {
            bbg3x = b.width + "x" + b.height;
            bnU6O = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                bbg3x = f.width + "x" + f.height
            }
        }
        if (a.language) {
            bbd3x = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                bbd3x = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bzC9t = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function cFG2x(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100), a, d = f || cBP1x;
        a = window[e] = new Image;
        a.onload = function () {
            window[e] = null;
            d()
        };
        a.onerror = function () {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }

    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || byD9u;
        bnT6N = escape(a || document.location);
        bzj9a = escape(m || document.title);
        bzn9e = l === true ? "" : escape(l || document.referrer);
        bzF9w = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bnX6R == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bnX6R = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bnT6N.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bnX6R) {
                ut1x = fetch_visitor_hash();
                byX9O = 1;
                ntes_set_cookie_long("_ntes_nnid", ut1x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", ut1x)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            ut1x = h.substr(0, o);
            GI5N = h.substr(o + 1, p - o - 1);
            if (GI5N == 0) {
                GI5N = (new Date).getTime();
                f = true
            }
            if (!ut1x) {
                ut1x = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", ut1x + "," + GI5N);
                ntes_set_cookie_long("_ntes_nuid", ut1x)
            }
            if (GI5N != 0 && b - GI5N > 365 * 86400 * 1e3) {
                GI5N = 0;
                ntes_set_cookie_long("_ntes_nnid", ut1x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", ut1x)
            }
        }

        function c(q, i) {
            var s = ntes_get_cookie(q), r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }

        Kx6r = c("P_INFO", "P_OINFO");
        Kx6r = Kx6r ? Kx6r.substr(0, Kx6r.indexOf("|")) : "";
        bzf9W = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", ut1x, "&_nvtm=", cBW1x, "&_nvsf=", bzb9S, "&_nvfi=", byX9O, "&_nlag=", bbd3x, "&_nlmf=", bzC9t, "&_nres=", bbg3x, "&_nscd=", bnU6O, "&_nstm=", bzf9W, "&_nurl=", bnT6N, "&_ntit=", bzj9a, "&_nref=", bzn9e, "&_nfla=", bzF9w, "&_nssn=", Kx6r, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bzb9S = 0;
        neteaseTracker.callback = null
    }

    byD9u = "iad";
    neteaseTracker()
})();
(function () {
})();
var CryptoJS = CryptoJS || function (u, p) {
    var d = {}, l = d.lib = {}, s = function () {
    }, t = l.Base = {
        extend: function (a) {
            s.prototype = this;
            var c = new s;
            a && c.mixIn(a);
            c.hasOwnProperty("init") || (c.init = function () {
                c.$super.init.apply(this, arguments)
            });
            c.init.prototype = c;
            c.$super = this;
            return c
        }, create: function () {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a
        }, init: function () {
        }, mixIn: function (a) {
            for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
        }, clone: function () {
            return this.init.prototype.extend(this)
        }
    }, r = l.WordArray = t.extend({
        init: function (a, c) {
            a = this.words = a || [];
            this.sigBytes = c != p ? c : 4 * a.length
        }, toString: function (a) {
            return (a || v).stringify(this)
        }, concat: function (a) {
            var c = this.words, e = a.words, j = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (j % 4) for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4); else if (65535 < e.length) for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2]; else c.push.apply(c, e);
            this.sigBytes += a;
            return this
        }, clamp: function () {
            var a = this.words, c = this.sigBytes;
            a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
            a.length = u.ceil(c / 4)
        }, clone: function () {
            var a = t.clone.call(this);
            a.words = this.words.slice(0);
            return a
        }, random: function (a) {
            for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
            return new r.init(c, a)
        }
    }), w = d.enc = {}, v = w.Hex = {
        stringify: function (a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) {
                var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                e.push((k >>> 4).toString(16));
                e.push((k & 15).toString(16))
            }
            return e.join("")
        }, parse: function (a) {
            for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
            return new r.init(e, c / 2)
        }
    }, b = w.Latin1 = {
        stringify: function (a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
            return e.join("")
        }, parse: function (a) {
            for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
            return new r.init(e, c)
        }
    }, x = w.Utf8 = {
        stringify: function (a) {
            try {
                return decodeURIComponent(escape(b.stringify(a)))
            } catch (c) {
                throw Error("Malformed UTF-8 data")
            }
        }, parse: function (a) {
            return b.parse(unescape(encodeURIComponent(a)))
        }
    }, q = l.BufferedBlockAlgorithm = t.extend({
        reset: function () {
            this.j4n = new r.init;
            this.bAp9g = 0
        }, baH2x: function (a) {
            "string" == typeof a && (a = x.parse(a));
            this.j4n.concat(a);
            this.bAp9g += a.sigBytes
        }, BI4M: function (a) {
            var c = this.j4n, e = c.words, j = c.sigBytes, k = this.blockSize, b = j / (4 * k),
                b = a ? u.ceil(b) : u.max((b | 0) - this.bAn9e, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
                for (var q = 0; q < a; q += k) this.bAr9i(e, q);
                q = e.splice(0, a);
                c.sigBytes -= j
            }
            return new r.init(q, j)
        }, clone: function () {
            var a = t.clone.call(this);
            a.j4n = this.j4n.clone();
            return a
        }, bAn9e: 0
    });
    l.Hasher = q.extend({
        cfg: t.extend(), init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        }, reset: function () {
            q.reset.call(this);
            this.bog6a()
        }, update: function (a) {
            this.baH2x(a);
            this.BI4M();
            return this
        }, finalize: function (a) {
            a && this.baH2x(a);
            return this.baw2x()
        }, blockSize: 16, bof6Z: function (a) {
            return function (b, e) {
                return (new a.init(e)).finalize(b)
            }
        }, cBH1x: function (a) {
            return function (b, e) {
                return (new n.HMAC.init(a, e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function () {
    var u = CryptoJS, p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function (d) {
            var l = d.words, p = d.sigBytes, t = this.bz5E;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3) for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64)) for (; d.length % 4;) d.push(l);
            return d.join("")
        }, parse: function (d) {
            var l = d.length, s = this.bz5E, t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++) if (w % 4) {
                var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4), b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                r++
            }
            return p.create(t, r)
        }, bz5E: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function (u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        bog6a: function () {
            this.dR6L = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        }, bAr9i: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a, e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dR6L.words, c = q[n + 0], e = q[n + 1], j = q[n + 2], k = q[n + 3], z = q[n + 4], r = q[n + 5],
                t = q[n + 6], w = q[n + 7], v = q[n + 8], A = q[n + 9], B = q[n + 10], C = q[n + 11], u = q[n + 12],
                D = q[n + 13], E = q[n + 14], x = q[n + 15], f = a[0], m = a[1], g = a[2], h = a[3],
                f = p(f, m, g, h, c, 7, b[0]), h = p(h, f, m, g, e, 12, b[1]), g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]), f = p(f, m, g, h, z, 7, b[4]), h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]), m = p(m, g, h, f, w, 22, b[7]), f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]), g = p(g, h, f, m, B, 17, b[10]), m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]), h = p(h, f, m, g, D, 12, b[13]), g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]), f = d(f, m, g, h, e, 5, b[16]), h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]), m = d(m, g, h, f, c, 20, b[19]), f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]), g = d(g, h, f, m, x, 14, b[22]), m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]), h = d(h, f, m, g, E, 9, b[25]), g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]), f = d(f, m, g, h, D, 5, b[28]), h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]), m = d(m, g, h, f, u, 20, b[31]), f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]), g = l(g, h, f, m, C, 16, b[34]), m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]), h = l(h, f, m, g, z, 11, b[37]), g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]), f = l(f, m, g, h, D, 4, b[40]), h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]), m = l(m, g, h, f, t, 23, b[43]), f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]), g = l(g, h, f, m, x, 16, b[46]), m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]), h = s(h, f, m, g, w, 10, b[49]), g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]), f = s(f, m, g, h, u, 6, b[52]), h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]), m = s(m, g, h, f, e, 21, b[55]), f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]), g = s(g, h, f, m, t, 15, b[58]), m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]), h = s(h, f, m, g, C, 10, b[61]), g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        }, baw2x: function () {
            var b = this.j4n, n = b.words, a = 8 * this.bAp9g, c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.BI4M();
            b = this.dR6L;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        }, clone: function () {
            var b = v.clone.call(this);
            b.dR6L = this.dR6L.clone();
            return b
        }
    });
    t.MD5 = v.bof6Z(r);
    t.HmacMD5 = v.cBH1x(r)
})(Math);
(function () {
    var u = CryptoJS, p = u.lib, d = p.Base, l = p.WordArray, p = u.algo, s = p.EvpKDF = d.extend({
        cfg: d.extend({keySize: 4, hasher: p.MD5, iterations: 1}), init: function (d) {
            this.cfg = this.cfg.extend(d)
        }, compute: function (d, r) {
            for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                n && s.update(n);
                var n = s.update(d).finalize(r);
                s.reset();
                for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                b.concat(n)
            }
            b.sigBytes = 4 * q;
            return b
        }
    });
    u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function (u) {
    var p = CryptoJS, d = p.lib, l = d.Base, s = d.WordArray, t = d.BufferedBlockAlgorithm, r = p.enc.Base64,
        w = p.algo.EvpKDF, v = d.Cipher = t.extend({
            cfg: l.extend(), createEncryptor: function (e, a) {
                return this.create(this.boh6b, e, a)
            }, createDecryptor: function (e, a) {
                return this.create(this.cBy1x, e, a)
            }, init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.bAO9F = e;
                this.K4O = a;
                this.reset()
            }, reset: function () {
                t.reset.call(this);
                this.bog6a()
            }, process: function (e) {
                this.baH2x(e);
                return this.BI4M()
            }, finalize: function (e) {
                e && this.baH2x(e);
                return this.baw2x()
            }, keySize: 4, ivSize: 4, boh6b: 1, cBy1x: 2, bof6Z: function (e) {
                return {
                    encrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    }, decrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        baw2x: function () {
            return this.BI4M(!0)
        }, blockSize: 1
    });
    var b = p.mode = {}, x = function (e, a, b) {
        var c = this.bAV9M;
        c ? this.bAV9M = u : c = this.bAW9N;
        for (var d = 0; d < b; d++) e[a + d] ^= c[d]
    }, q = (d.BlockCipherMode = l.extend({
        createEncryptor: function (e, a) {
            return this.Encryptor.create(e, a)
        }, createDecryptor: function (e, a) {
            return this.Decryptor.create(e, a)
        }, init: function (e, a) {
            this.bAX9O = e;
            this.bAV9M = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bAX9O, c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bAW9N = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bAX9O, c = b.blockSize, d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bAW9N = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function (a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        }, unpad: function (a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({mode: b, padding: q}), reset: function () {
            v.reset.call(this);
            var a = this.cfg, b = a.iv, a = a.mode;
            if (this.bAO9F == this.boh6b) var c = a.createEncryptor; else c = a.createDecryptor, this.bAn9e = 1;
            this.fk7d = c.call(a, this, b && b.words)
        }, bAr9i: function (a, b) {
            this.fk7d.processBlock(a, b)
        }, baw2x: function () {
            var a = this.cfg.padding;
            if (this.bAO9F == this.boh6b) {
                a.pad(this.j4n, this.blockSize);
                var b = this.BI4M(!0)
            } else b = this.BI4M(!0), a.unpad(b);
            return b
        }, blockSize: 4
    });
    var n = d.CipherParams = l.extend({
        init: function (a) {
            this.mixIn(a)
        }, toString: function (a) {
            return (a || this.formatter).stringify(this)
        }
    }), b = (p.format = {}).OpenSSL = {
        stringify: function (a) {
            var b = a.ciphertext;
            a = a.salt;
            return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
        }, parse: function (a) {
            a = r.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = s.create(b.slice(2, 4));
                b.splice(0, 4);
                a.sigBytes -= 16
            }
            return n.create({ciphertext: a, salt: c})
        }
    }, a = d.SerializableCipher = l.extend({
        cfg: l.extend({format: b}), encrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            var l = a.createEncryptor(c, d);
            b = l.finalize(b);
            l = l.cfg;
            return n.create({
                ciphertext: b,
                key: c,
                iv: l.iv,
                algorithm: a,
                mode: l.mode,
                padding: l.padding,
                blockSize: a.blockSize,
                formatter: d.format
            })
        }, decrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            b = this.beP4T(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        }, beP4T: function (a, b) {
            return "string" == typeof a ? b.parse(a, this) : a
        }
    }), p = (p.kdf = {}).OpenSSL = {
        execute: function (a, b, c, d) {
            d || (d = s.random(8));
            a = w.create({keySize: b + c}).compute(a, d);
            c = s.create(a.words.slice(b), 4 * c);
            a.sigBytes = 4 * b;
            return n.create({key: a, iv: c, salt: d})
        }
    }, c = d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({kdf: p}), encrypt: function (b, c, d, l) {
            l = this.cfg.extend(l);
            d = l.kdf.execute(d, b.keySize, b.ivSize);
            l.iv = d.iv;
            b = a.encrypt.call(this, b, c, d.key, l);
            b.mixIn(d);
            return b
        }, decrypt: function (b, c, d, l) {
            l = this.cfg.extend(l);
            c = this.beP4T(c, l.format);
            d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
            l.iv = d.iv;
            return a.decrypt.call(this, b, c, d.key, l)
        }
    })
}();
(function () {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4, k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e], F = a[z], G = a[F], y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], d = d.AES = p.extend({
        bog6a: function () {
            for (var a = this.K4O, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cBw1x = d + 6) + 1), e = this.cBv1x = [], j = 0; j < a; j++) if (j < d) e[j] = c[j]; else {
                var k = e[j - 1];
                j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                e[j] = e[j - d] ^ k
            }
            c = this.cBu1x = [];
            for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        }, encryptBlock: function (a, b) {
            this.bAY0x(a, b, this.cBv1x, t, r, w, v, l)
        }, decryptBlock: function (a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this.bAY0x(a, c, this.cBu1x, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        }, bAY0x: function (a, b, c, d, e, j, l, f) {
            for (var m = this.cBw1x, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++], s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++], t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++], n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++], g = q, h = s, k = t;
            q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
            s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
            t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
            n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
            a[b] = q;
            a[b + 1] = s;
            a[b + 2] = t;
            a[b + 3] = n
        }, keySize: 8
    });
    u.AES = p.bof6Z(d)
})();

function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
}

function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}

function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;) c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
    }
    return g.substring(0, g.length - 1)
}

function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "), d = "";
    for (e = 0; e < c.length; ++e) for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}

function setMaxDigits(a) {
    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}

function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
}

function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);) ++c;
    if (c == a.length) d = new BigInt; else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}

function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}

function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}

function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
    return b
}

function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}

function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}

function digitToHex(a) {
    var b = 15, c = "";
    for (i = 0; 4 > i; ++i) c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}

function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
    return b
}

function charToHex(a) {
    var h, b = 48, c = b + 9, d = 97, e = d + 25, f = 65, g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}

function hexToDigit(a) {
    var d, b = 0, c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d) b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}

function biFromHex(a) {
    var d, e, b = new BigInt, c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}

function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0), d = c ? 1 : 0, e = new BigInt, f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c, e
}

function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}

function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg; else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}

function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg; else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}

function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];) --b;
    return b
}

function biNumBits(a) {
    var e, b = biHighIndex(a), c = a.digits[b], d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
    return e
}

function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt, e = biHighIndex(a), f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg, c
}

function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d, result
}

function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}

function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}

function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}

function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}

function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}

function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b), c
}

function biCompare(a, b) {
    if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c) if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}

function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a), d = biNumBits(b), e = b.isNeg;
    if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k);) ++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;) --f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
}

function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}

function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}

function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}

function biPow(a, b) {
    for (var c = bigOne, d = a; ;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d)
    }
    return c
}

function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b; ;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}

function BarrettMu(a) {
    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}

function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1), c = biMultiply(b, this.mu), d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1), f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1), h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}

function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}

function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b; ;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
        d = this.multiplyMod(d, d)
    }
    return c
}

var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks,
    biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1,
    biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
!function () {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1) e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
        return c
    }

    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b), d = CryptoJS.enc.Utf8.parse("0102030405060708"),
            e = CryptoJS.enc.Utf8.parse(a), f = CryptoJS.AES.encrypt(e, c, {iv: d, mode: CryptoJS.mode.CBC});
        return f.toString()
    }

    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }

    function d(d, e, f, g) {
        var h = {}, i = a(16);
        return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }

    window.asrsea = d, window.ecnonasr = e
}();
(function () {
    var c4g = NEJ.P, em6g = c4g("nej.g"), v4z = c4g("nej.j"), k4o = c4g("nej.u"), Ow8o = c4g("nm.x.ek");
    Ow8o.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    Ow8o.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function () {
    var c4g = NEJ.P, em6g = c4g("nej.g"), v4z = c4g("nej.j"), k4o = c4g("nej.u"), Ow8o = c4g("nm.x.ek"),
        l4p = c4g("nm.x");
    if (v4z.bm5r.redefine) return;
    window.GEnc = true;
    var bor6l = function (cBs1x) {
        var m4q = [];
        k4o.bd5i(cBs1x, function (cBr1x) {
            m4q.push(Ow8o.emj[cBr1x])
        });
        return m4q.join("")
    };
    var cBq1x = v4z.bm5r;
    v4z.bm5r = function (Y5d, e4i) {
        var j4n = {}, e4i = NEJ.X({}, e4i), lw9n = Y5d.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(Y5d) && !(e4i.headers && e4i.headers[em6g.yg3x] == em6g.DH4L) && !e4i.noEnc) {
            if (lw9n != -1) {
                j4n = k4o.hq8i(Y5d.substring(lw9n + 1));
                Y5d = Y5d.substring(0, lw9n)
            }
            if (e4i.query) {
                j4n = NEJ.X(j4n, k4o.fC7v(e4i.query) ? k4o.hq8i(e4i.query) : e4i.query)
            }
            if (e4i.data) {
                j4n = NEJ.X(j4n, k4o.fC7v(e4i.data) ? k4o.hq8i(e4i.data) : e4i.data)
            }
            j4n["csrf_token"] = v4z.gx7q("__csrf");
            Y5d = Y5d.replace("api", "weapi");
            e4i.method = "post";
            delete e4i.query;
            var bBB0x = window.asrsea(JSON.stringify(j4n), bor6l(["流泪", "强"]), bor6l(Ow8o.md), bor6l(["爱心", "女孩", "惊恐", "大笑"]));
            e4i.data = k4o.cD6x({params: bBB0x.encText, encSecKey: bBB0x.encSecKey})
        }
        cBq1x(Y5d, e4i)
    };
    v4z.bm5r.redefine = true
})();
(function () {
    window.setTimeout(function () {
        if (!location.href.match(/^https?:\/\/([a-zA-Z0-9\-]+?\.)*?music\.163\.com($|\/)/gi)) return;
        var getNode = function (tagName, attrName, attrValue) {
            if (!tagName || !attrName || !attrValue) return null;
            var nodes = document.getElementsByTagName(tagName);
            if (nodes && nodes.length) {
                for (var i = 0, ii = nodes.length; i < ii; i++) {
                    if ((nodes[i][attrName] || "").toLowerCase() == attrValue.toLowerCase()) {
                        return nodes[i]
                    }
                }
            }
            return null
        };
        var meta = getNode("meta", "name", "robots");
        if (meta && (meta.content || "").toLowerCase() == "nofollow") return;
        var canonicalURL, curProtocol;
        var link = getNode("link", "rel", "canonical");
        if (link && link.href) canonicalURL = link.href;
        if (!canonicalURL) {
            curProtocol = location.protocol.split(":")[0]
        } else {
            curProtocol = canonicalURL.split(":")[0]
        }
        if (!canonicalURL) canonicalURL = location.href;
        var pushHref = String(curProtocol).toLowerCase() === "https" ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif" : "//api.share.baidu.com/s.gif";
        var params = [];
        if (document.referrer) {
            params.push("r=" + encodeURIComponent(document.referrer))
        }
        params.push("l=" + encodeURIComponent(canonicalURL));
        (new Image).src = pushHref + "?" + params.join("&")
    }, 3e3)
})();
(function () {
})();
(function () {
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), dy6s = c4g("nej.p"), k4o = c4g("nej.u"), h4l = c4g("nej.v"),
        v4z = c4g("nej.j"), dE6y = c4g("nm.u"), l4p = c4g("nm.x"), q4u = c4g("nm.d"), n4r = c4g("nm.l"),
        cy5D = c4g("nm.pc"), boF6z = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png", j4n = {
            "大笑": "86",
            "可爱": "85",
            "憨笑": "359",
            "色": "95",
            "亲亲": "363",
            "惊恐": "96",
            "流泪": "356",
            "亲": "362",
            "呆": "352",
            "哀伤": "342",
            "呲牙": "343",
            "吐舌": "348",
            "撇嘴": "353",
            "怒": "361",
            "奸笑": "341",
            "汗": "97",
            "痛苦": "346",
            "惶恐": "354",
            "生病": "350",
            "口罩": "351",
            "大哭": "357",
            "晕": "355",
            "发怒": "115",
            "开心": "360",
            "鬼脸": "94",
            "皱眉": "87",
            "流感": "358",
            "爱心": "33",
            "心碎": "34",
            "钟情": "303",
            "星星": "309",
            "生气": "314",
            "便便": "89",
            "强": "13",
            "弱": "372",
            "拜": "14",
            "牵手": "379",
            "跳舞": "380",
            "禁止": "374",
            "这边": "262",
            "爱意": "106",
            "示爱": "376",
            "嘴唇": "367",
            "狗": "81",
            "猫": "78",
            "猪": "100",
            "兔子": "459",
            "小鸡": "450",
            "公鸡": "461",
            "幽灵": "116",
            "圣诞": "411",
            "外星": "101",
            "钻石": "52",
            "礼物": "107",
            "男孩": "0",
            "女孩": "1",
            "蛋糕": "337",
            18: "186",
            "圈": "312",
            "叉": "313"
        }, cBm1x = function () {
            if (h4l && h4l.z4D) {
                h4l.dispatchEventalias = h4l.z4D
            }
        };
    cBm1x();
    l4p.boH6B = function (bP5U) {
        if (!bP5U || bP5U.copyrightId === undefined || !!bP5U.program) return false;
        if (window.GAbroad) {
            bP5U.fee = 0;
            return true
        }
        if (bP5U.status < 0) return true;
        var Om8e;
        if (typeof GCopyrights !== "undefined") Om8e = GCopyrights;
        try {
            if (!Om8e && !!top.GCopyrights) Om8e = top.GCopyrights
        } catch (e) {
        }
        if (Om8e) {
            var r4v = k4o.di6c(Om8e, bP5U.copyrightId);
            if (r4v >= 0) return true
        }
        return false
    };
    l4p.boQ6K = function () {
        var Ce4i = /^\/m\/(song|album|artist|playlist|dj|search)\?/, wx2x = {
            2: "artist",
            13: "playlist",
            17: "dj",
            19: "album",
            18: "song",
            31: "toplist",
            32: "searchsong",
            33: "searchlyric",
            34: "event",
            70: "djradio",
            24: "day",
            50: "record"
        }, cBh1x = {
            song: "单曲",
            album: "专辑",
            artist: "歌手",
            playlist: "歌单",
            dj: "电台节目",
            searchsong: "单曲搜索",
            searchlyric: "歌词搜索",
            toplist: "榜单",
            event: "动态",
            djradio: "电台",
            day: "每日歌曲推荐",
            record: "听歌排行榜"
        };
        var cBg1x = function (K4O, j4n, Og8Y) {
            switch (K4O) {
                case"event":
                    j4n = j4n.split("|");
                    return "/event?id=" + j4n[0] + "&uid=" + j4n[1];
                case"searchsong":
                case"searchlyric":
                    var u4y = K4O == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(j4n) + "&type=" + u4y;
                case"toplist":
                    return "/discover/toplist?id=" + j4n + "&_hash=songlist-" + Og8Y;
                case"day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + Og8Y;
                    ;
                case"record":
                    j4n = j4n.split("|");
                    return "/user/songs/rank?id=" + j4n[0] + "&cat=" + j4n[1];
                    break;
                default:
                    return "/" + K4O + "?id=" + j4n + "&_hash=songlist-" + Og8Y
            }
        };
        return function (ee6Y, Og8Y) {
            if (!ee6Y) return null;
            var Lm7f = ee6Y.fid || (ee6Y.type != 18 ? ee6Y.type : null), boT6N = ee6Y.fdata || ee6Y.rid,
                bCm0x = ee6Y.page || ee6Y.fhref;
            var K4O = wx2x[Lm7f];
            if (!K4O) {
                var zz3x = (bCm0x || "").match(Ce4i);
                if (zz3x) K4O = zz3x[1]
            }
            if (!K4O) return null;
            return {title: cBh1x[K4O], link: !wx2x[Lm7f] ? bCm0x : cBg1x(K4O, boT6N, Og8Y), fid: Lm7f, fdata: boT6N}
        }
    }();
    l4p.Zp2x = function (kx8p) {
        var dp6j = kx8p;
        if (typeof GUser !== "undefined" && GUser.userId > 0) dp6j = GUser;
        return dp6j
    };
    l4p.gT7M = function () {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l4p.Kl6f = function () {
        var Ce4i = /#(.*?)$/;
        return function (gy7r) {
            var jL8D = gy7r === false ? location : top.location;
            return Ce4i.test(jL8D.href) ? RegExp.$1 : ""
        }
    }();
    l4p.Ct4x = function () {
        var Cu4y = a4e.dj6d("audio"), cBd1x = Cu4y.canPlayType && Cu4y.canPlayType("audio/mpeg");
        if (cBd1x) return 2;
        var cBb1x = l4p.bpk6e().supported;
        if (cBb1x) return 1;
        return 0
    };
    l4p.bpk6e = function () {
        var gq7j, bpo6i = !1, bpr6l = "";
        if (dy6s.dr6l.browser == "ie") {
            try {
                gq7j = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gq7j = null
            }
            if (gq7j) {
                bpo6i = !0;
                bpr6l = gq7j.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gq7j = navigator.plugins["Shockwave Flash"];
                if (gq7j) {
                    bpo6i = !0;
                    bpr6l = gq7j.description
                }
            }
        }
        return {supported: bpo6i, version: bpr6l}
    };
    l4p.sI1x = function () {
        return "网易云音乐"
    };
    l4p.cBa1x = function () {
        return j4n
    };
    l4p.bDg0x = function (cK6E) {
        var C4G = j4n[cK6E];
        return C4G == null ? "" : boF6z.replace("{ID}", C4G)
    };
    l4p.wO2x = function (bo5t, ec6W, CG4K) {
        if (!bo5t) return "";
        if (!!CG4K) {
            bo5t = l4p.cAZ1x(bo5t)
        }
        return l4p.YE2x(l4p.cAY1x(bo5t, ec6W))
    };
    l4p.YC2x = function () {
        var Pe9V = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        }, bpF7y = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        }, cAX1x = {
            r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        }, cAT1x = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cAQ1x = function (dJ6D, bpH7A) {
            dJ6D = Ke6Y(dJ6D);
            if (!!bpH7A) {
                dJ6D = dJ6D.replace(Pe9V.MLINE, "\n\n").replace(Pe9V.LING, "</br>")
            }
            dJ6D = l4p.YE2x(dJ6D);
            return dJ6D
        };
        var Ke6Y = function (bo5t) {
            return k4o.Dq4u(cAX1x, bo5t)
        };
        return function (dJ6D, e4i, dC6w) {
            e4i = e4i || {};
            dC6w = dC6w || {};
            dC6w.actHash = {};
            var cAK1x = !!e4i.parseLink, cAF1x = !!e4i.parseAct, cAE1x = e4i.linkTpl || bpF7y.LINK,
                cAD1x = e4i.atTpl || bpF7y.AT, cAC1x = e4i.atUrl || "/user/home?nickname=",
                cAB1x = e4i.actTpl || bpF7y.ACT, bpH7A = !!e4i.keepSpace, bpR7K = e4i.linkKlass || "s-fc7";
            cFP2x = e4i.actBiJson || "";
            if (!dJ6D) return "";
            dJ6D = dJ6D.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var lH9y = cAT1x[cAK1x + 2 * cAF1x], df6Z = Pe9V[lH9y], bs5x = null, jN8F = null, gt7m = 0, cFQ2x = "",
                cFR2x = "";
            var qh0x = [];
            df6Z.lastIndex = 0;
            while (bs5x = df6Z.exec(dJ6D)) {
                var dQ6K = {html: "", before: bs5x.index - 1, after: bs5x.index + bs5x[0].length};
                if (bs5x[1]) {
                    var jN8F = bs5x[2].replace(/[^\x00-\xff]/g, "**");
                    if (jN8F.length < 4 || jN8F.length > 32) {
                    } else {
                        var GV5a = a4e.eB6v(cAD1x);
                        dQ6K.html = a4e.cd5i(GV5a, {
                            value: Ke6Y(bs5x[2]),
                            url: encodeURI(cAC1x + bs5x[2]),
                            klass: bpR7K
                        });
                        qh0x.push(dQ6K)
                    }
                } else if (bs5x.length > 8 && bs5x[4]) {
                    var GV5a = a4e.eB6v(cAE1x);
                    dQ6K.html = a4e.cd5i(GV5a, {value: Ke6Y(bs5x[4]), url: bs5x[4], klass: bpR7K});
                    qh0x.push(dQ6K)
                } else {
                    var bET0x = lH9y == "ACT_NOLINK" ? 4 : 9;
                    var GV5a = a4e.eB6v(cAB1x);
                    dQ6K.html = a4e.cd5i(GV5a, {value: Ke6Y(bs5x[bET0x]), klass: bpR7K});
                    qh0x.push(dQ6K);
                    dC6w.actHash[bs5x[bET0x].slice(1, -1)] = true
                }
            }
            var bpU7N = qh0x.length, kx8p = {before: dJ6D.length - 1, after: 0}, bqc7V = "";
            for (var i = 0; i <= bpU7N; i++) {
                var hA8s, fX7Q;
                hA8s = (qh0x[i - 1] || kx8p).after;
                fX7Q = (qh0x[i] || kx8p).before;
                if (fX7Q >= hA8s && hA8s >= 0 && fX7Q <= dJ6D.length - 1) {
                    bqc7V += cAQ1x(dJ6D.substring(hA8s, fX7Q + 1), bpH7A)
                }
                if (qh0x[i]) {
                    bqc7V += qh0x[i].html
                }
            }
            return bqc7V
        }
    }();
    l4p.cAZ1x = function () {
        var df6Z = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function (bo5t) {
            return (bo5t || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(df6Z, function ($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l4p.cAY1x = function () {
        var df6Z = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var ev6p = function (jN8F, ec6W) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(jN8F) + '" class="' + (ec6W || "") + '">@' + jN8F + "</a>"
        };
        return function (bo5t, ec6W) {
            return (bo5t || "").replace(df6Z, function ($0, $1) {
                return ev6p($1, ec6W)
            })
        }
    }();
    l4p.YE2x = function () {
        var df6Z = /\[(.*?)\]/g;
        return function (bo5t) {
            return (bo5t || "").replace(df6Z, function ($1, $2) {
                var Y5d = l4p.bDg0x($2);
                return !Y5d ? $1 : '<img src="' + Y5d + '"/>'
            })
        }
    }();
    l4p.AE3x = function (F4J, ec6W) {
        a4e.bE5J(F4J, ec6W) ? a4e.x4B(F4J, ec6W) : a4e.y4C(F4J, ec6W)
    };
    l4p.JZ6T = function (cR6L, kR9I) {
        cR6L = a4e.B4F(cR6L);
        kR9I = a4e.B4F(kR9I);
        if (!cR6L || !kR9I) return !1;
        for (kR9I = kR9I.parentNode; !!kR9I && kR9I != cR6L; kR9I = kR9I.parentNode) ;
        return kR9I == cR6L
    };
    l4p.lj9a = function () {
        var bFe1x = function (gX7Q) {
            return (gX7Q < 10 ? "0" : "") + gX7Q
        };
        return function (kX9O) {
            kX9O = parseInt(kX9O) || 0;
            if (!kX9O) return "00:00";
            var ze3x = Math.floor(kX9O % 60), cAr1x = Math.floor(kX9O / 60);
            return bFe1x(cAr1x) + ":" + bFe1x(ze3x)
        }
    }();
    l4p.zb3x = function (fR7K, wY2x) {
        if (!fR7K || fR7K.length == 0) return "";
        wY2x = wY2x || "/";
        var bs5x = [];
        for (var i = fR7K.length - 1; i >= 0; i--) {
            bs5x.unshift(fR7K[i].name)
        }
        return bs5x.join(wY2x)
    };
    l4p.rU1x = function () {
        var Ni7b = function (ij8b, ec6W, cR6L, WT1x) {
            var ev6p = WT1x ? l4p.bqt7m : k4o.dH6B;
            if (!ij8b || !ij8b.name) return "";
            if (!ij8b.id) return '<span class="' + ec6W + '">' + ev6p(ij8b.name) + "</span>";
            return "<a" + (cR6L ? ' target="_blank"' : "") + ' class="' + ec6W + '" href="/artist?id=' + ij8b.id + '" hidefocus="true">' + ev6p(ij8b.name) + "</a>"
        };
        return function (fR7K, W5b, wY2x, cR6L, bFL1x, WT1x) {
            if (!fR7K || !fR7K.length) return "";
            wY2x = wY2x || "/";
            W5b = W5b || "";
            JT6N = "";
            var ep6j = [];
            for (var i = 0, i4m = [], tB1x = [], fH7A; i < fR7K.length; ++i) {
                ep6j.push(fR7K[i].name);
                if (!fR7K[i] || fR7K[i].id <= 0) {
                    tB1x.push(fR7K[i]);
                    continue
                }
                if (k4o.gK7D(W5b)) {
                    fH7A = W5b(fR7K[i])
                } else {
                    fH7A = Ni7b(fR7K[i], W5b, cR6L, WT1x)
                }
                if (fH7A && bFL1x && fR7K[i].tns && fR7K[i].tns.length > 0) {
                    JT6N = k4o.dH6B(fR7K[i].tns[0]);
                    fH7A += '<span class="s-fc8" title="' + JT6N + '"> - (' + JT6N + ")</span>"
                }
                !!fH7A && i4m.push(fH7A)
            }
            for (var i = 0, fH7A; i < tB1x.length; ++i) {
                if (k4o.gK7D(W5b)) {
                    fH7A = W5b(tB1x[i])
                } else {
                    fH7A = Ni7b(tB1x[i], W5b, cR6L, WT1x)
                }
                if (fH7A && bFL1x && tB1x[i].tns && tB1x[i].tns.length > 0) {
                    JT6N = k4o.dH6B(tB1x[i].tns[0]);
                    fH7A += '<span class="s-fc8" title="' + JT6N + '"> - (' + JT6N + ")</span>"
                }
                !!fH7A && i4m.push(fH7A)
            }
            return '<span title="' + ep6j.join(wY2x) + '">' + i4m.join(wY2x) + "</span>"
        }
    }();
    l4p.yT3x = function (fz7s, qd0x) {
        qd0x = qd0x || "86";
        return !!fz7s && (qd0x == "86" ? /^\d{11}$/ : /^\d+$/).test(fz7s)
    };
    l4p.cFS2x = function (fz7s) {
        if (!l4p.yT3x(fz7s)) return fz7s;
        return fz7s.substring(0, 3) + "****" + fz7s.substr(7)
    };
    l4p.kv8n = function () {
        var df6Z = /^\s+$/g;
        return function (hX8P) {
            return !hX8P || df6Z.test(hX8P)
        }
    }();
    l4p.Na7T = function () {
        var bqF7y = /[^\x00-\xfff]/g;
        return function (hX8P) {
            var cAp1x = hX8P.match(bqF7y) || [], dt6n = cAp1x.length;
            return hX8P.length + dt6n
        }
    }();
    l4p.AM3x = function () {
        var bqF7y = /[^\x00-\xfff]/;
        return function (hX8P, eG6A) {
            for (var i = 0, len = hX8P.length; i < len && eG6A > 0; i++) {
                if (bqF7y.test(hX8P.charAt(i))) {
                    eG6A -= 2;
                    if (eG6A < 0) {
                        break
                    }
                } else {
                    eG6A -= 1
                }
            }
            return hX8P.substring(0, i)
        }
    }();
    l4p.AN3x = function (hX8P, eG6A, TH0x) {
        eG6A = eG6A || 10;
        TH0x = TH0x || nej.p.dr6l.engine == "trident" && parseInt(nej.p.dr6l.release) < 5;
        if (TH0x && l4p.Na7T(hX8P) > eG6A) {
            return l4p.AM3x(hX8P, eG6A) + "..."
        } else {
            return hX8P
        }
    };
    l4p.bGA1x = function (g4k) {
        return g4k === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(g4k.type || g4k.href || ~g4k.tabIndex)
    };
    l4p.cAn1x = function (d4h, cR6L) {
        if (!d4h || !cR6L) return !0;
        var g4k, u4y = d4h.type.toLowerCase();
        if (u4y == "mouseout") {
            g4k = d4h.relatedTarget || d4h.toElement
        } else if (u4y == "mouseover") {
            g4k = d4h.relatedTarget || d4h.fromElement
        }
        return !g4k || g4k !== cR6L && !l4p.JZ6T(cR6L, g4k)
    };
    l4p.sO1x = function () {
        R5W = {};
        return function (g4k, ed6X) {
            var C4G = a4e.lP9G(g4k), K4O = "hover-" + C4G;
            if (!ed6X || !C4G || !!R5W[K4O]) return;
            R5W[K4O] = !0;
            h4l.s4w(C4G, "mouseover", function () {
                var bqN7G = a4e.H4L(g4k, "hshow") || [];
                var bqO7H = a4e.H4L(g4k, "icn-dislike") || [];
                a4e.y4C(C4G, "z-hover");
                a4e.ba5f(bqN7G[0], "display", "block");
                a4e.ba5f(bqO7H[0], "display", "block")
            });
            h4l.s4w(C4G, "mouseout", function () {
                var bqN7G = a4e.H4L(g4k, "hshow") || [];
                var bqO7H = a4e.H4L(g4k, "icn-dislike") || [];
                a4e.x4B(C4G, "z-hover");
                a4e.ba5f(bqN7G[0], "display", "none");
                a4e.ba5f(bqO7H[0], "display", "none")
            })
        }
    }();
    l4p.bGT1x = function () {
        var bz5E = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function (hX8P) {
            return k4o.Dq4u(bz5E, hX8P)
        }
    }();
    l4p.yF3x = function (bA5F) {
        if (k4o.Em4q(bA5F)) bA5F = bA5F.getTime();
        var eS7L = new Date, kf8X = eS7L.getTime() - bA5F;
        if (kf8X <= 6e4) return "刚刚";
        var nm9d = eS7L.getHours() * 36e5 + eS7L.getMinutes() * 6e4 + eS7L.getSeconds() * 1e3;
        if (kf8X <= nm9d) {
            if (kf8X < 36e5) {
                var Ha5f = Math.floor(kf8X / 6e4);
                return Ha5f + "分钟前"
            }
            return k4o.ih8Z(bA5F, "HH:mm")
        } else {
            if (kf8X < nm9d + 864e5) {
                return "昨天" + k4o.ih8Z(bA5F, "HH:mm")
            } else {
                var gE7x = eS7L.getFullYear(), Vv1x = new Date(gE7x, 0, 1);
                var nm9d = eS7L.getTime() - Vv1x.getTime();
                if (kf8X < nm9d) {
                    return k4o.ih8Z(bA5F, "M月d日 HH:mm")
                }
                return k4o.ih8Z(bA5F, "yyyy年M月d日")
            }
        }
    };
    l4p.cAm1x = function (bA5F) {
        if (k4o.Em4q(bA5F)) bA5F = bA5F.getTime();
        var eS7L = new Date, kf8X = eS7L.getTime() - bA5F;
        var nm9d = eS7L.getHours() * 36e5 + eS7L.getMinutes() * 6e4 + eS7L.getSeconds() * 1e3;
        if (kf8X <= nm9d) {
            return "今天" + k4o.ih8Z(bA5F, "HH:mm")
        } else {
            if (kf8X < nm9d + 864e5) {
                return "昨天" + k4o.ih8Z(bA5F, "HH:mm")
            } else {
                return k4o.ih8Z(bA5F, "yy-MM-dd HH:mm")
            }
        }
    };
    l4p.cAl1x = function (bA5F) {
        if (k4o.Em4q(bA5F)) bA5F = bA5F.getTime();
        var eS7L = new Date, kf8X = eS7L.getTime() - bA5F;
        if (kf8X <= 6e4) return "刚刚";
        var nm9d = eS7L.getHours() * 36e5 + eS7L.getMinutes() * 6e4 + eS7L.getSeconds() * 1e3;
        if (kf8X <= nm9d) {
            if (kf8X < 36e5) {
                var Ha5f = Math.floor(kf8X / 6e4);
                return Ha5f + "分钟前"
            }
            return k4o.ih8Z(bA5F, "HH:mm")
        } else {
            if (kf8X < nm9d + 864e5) {
                return "昨天" + k4o.ih8Z(bA5F, "HH:mm")
            } else if (kf8X < nm9d + 864e5 * 6) {
                var gE7x = eS7L.getFullYear(), Vv1x = new Date(gE7x, 0, 1);
                var nm9d = eS7L.getTime() - Vv1x.getTime();
                if (kf8X < nm9d) {
                    return k4o.ih8Z(bA5F, "M月d日 HH:mm")
                }
                return k4o.ih8Z(bA5F, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l4p.VT1x = function () {
        var df6Z = /\{(.*?)\}/gi;
        return function (oW0x, j4n) {
            return (oW0x || "").replace(df6Z, function ($1, $2) {
                var D4H = j4n[$2];
                return D4H == null ? $1 : D4H
            })
        }
    }();
    l4p.fp7i = function () {
        var bf5k = Array.prototype.slice.call(arguments, 0), oW0x = bf5k.shift();
        if (oW0x) {
            return oW0x.replace(/{(\d+)}/g, function ($1, $2) {
                return $2 < bf5k.length ? bf5k[$2] : $1
            })
        }
        return ""
    };
    l4p.JI6C = function (i4m, ec6W, kh8Z) {
        return "";
        kh8Z = kh8Z || " - ";
        if (i4m && i4m.length) {
            return kh8Z + (!!ec6W ? '<span class="' + ec6W + '">' + i4m[0] + "</span>" : i4m[0])
        }
        return ""
    };
    l4p.bHR1x = function () {
        if (window.getSelection) {
            var sk1x = window.getSelection();
            if (sk1x && sk1x.focusNode && sk1x.focusNode.tagName) {
                var Bd4h = a4e.dk6e(sk1x.focusNode);
                for (var i = 0, yu3x; i < Bd4h.length; ++i) {
                    yu3x = Bd4h[i].tagName;
                    if (!yu3x) continue;
                    yu3x = yu3x.toLowerCase();
                    if (yu3x == "textarea" || yu3x == "input") return !0
                }
            }
        } else if (document.selection) {
            var dd6X = document.selection.createRange();
            if (dd6X) {
                var g4k = dd6X.parentElement();
                if (g4k && g4k.tagName) {
                    var yu3x = g4k.tagName.toLowerCase();
                    if (yu3x == "textarea" || yu3x == "input") return !0
                }
            }
        }
        return !1
    };
    l4p.Bg4k = function (fG7z) {
        if (/^[A-Z]\:\\/i.test(fG7z)) {
            fG7z = fG7z.split("\\")
        } else {
            fG7z = fG7z.split("/")
        }
        fG7z = fG7z[fG7z.length - 1];
        return fG7z
    };
    l4p.cAk1x = function () {
        var FC5H = [13, 17, 34, 19, 18, 21];
        return function (C4G) {
            var bs5x = (C4G || "").split("_");
            return {type: FC5H[bs5x[2]] || -1, id: bs5x[3] || ""}
        }
    }();
    l4p.bJd2x = function (gq7j) {
        if (!gq7j) {
            return true
        }
        for (var k in gq7j) {
            return false
        }
        return true
    };
    l4p.brb7U = function (dp6j) {
        if (!dp6j) {
            return ""
        }
        if (4 == dp6j.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dp6j.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dp6j.expertTags && dp6j.expertTags.length || !l4p.bJd2x(dp6j.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l4p.Vd1x = function (hH8z) {
        if (!hH8z) return "";
        var dt6n = hH8z.length, iq8i = [];
        iq8i[0] = dt6n / 3 | 0;
        iq8i[1] = iq8i[0] + ((dt6n - iq8i[0]) / 2 | 0);
        return hH8z.substring(0, iq8i[0]) + hH8z.substring(iq8i[0], iq8i[1]).replace(/\d/g, "*") + hH8z.substring(iq8i[1], dt6n)
    };
    l4p.cFT2x = function (r4v, cB5G) {
        return (r4v % cB5G + cB5G) % cB5G
    };
    l4p.brg7Z = function () {
        var FC5H = {0: "playlist", 1: "program", 2: "event", 3: "album", 4: "song", 5: "mv", 6: "topic", 62: "video"};
        return function (C4G) {
            var bs5x = (C4G || "").split("_"), m4q = {type: FC5H[bs5x[2]] || -1, id: bs5x[3] || ""};
            if (m4q.type == "event") {
                m4q.uid = bs5x[4] || "";
                return "/" + m4q.type + "?id=" + m4q.id + "&uid=" + m4q.uid
            }
            return "/" + m4q.type + "?id=" + m4q.id
        }
    }();
    l4p.bri7b = function () {
        var FC5H = {0: "歌单", 1: "电台节目", 2: "动态", 3: "专辑", 4: "单曲", 5: "MV", 6: "专栏文章", 62: "视频"};
        return function (C4G) {
            var bs5x = (C4G || "").split("_");
            return FC5H[bs5x[2]] || "资源"
        }
    }();
    l4p.cAh1x = function (bv5A) {
        var qs = bv5A.length > 0 ? bv5A.substring(1) : "", args = {}, items = qs.length ? qs.split("&") : [],
            item = null, name = null, value = null, i = 0, len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    l4p.brs7l = function (os0x, UP0x) {
        var bdY4c = 0, ex6r = new Array;
        k4o.bd5i(os0x, function (Y5d, r4v) {
            var cx5C = a4e.dj6d("img");
            cx5C.src = Y5d;
            h4l.s4w(cx5C, "load", function (r4v, d4h) {
                ex6r[r4v] = 1;
                bdY4c++;
                if (bdY4c == os0x.length) UP0x(os0x, ex6r)
            }.f4j(this, r4v));
            h4l.s4w(cx5C, "error", function (d4h, r4v) {
                ex6r[r4v] = 0;
                bdY4c++;
                if (bdY4c == os0x.length) UP0x(os0x, ex6r)
            }.f4j(this, r4v))
        })
    };
    l4p.JC6w = function (i4m, dZ6T) {
        var m4q = [];
        k4o.bd5i(i4m, function (p4t, r4v, P5U) {
            m4q.push(dZ6T(p4t, r4v, P5U))
        });
        return m4q
    };
    l4p.ben4r = function (i4m, dZ6T, P5U) {
        var m4q = [];
        k4o.bd5i(i4m, function (p4t, r4v) {
            if (dZ6T.call(P5U, p4t, r4v, i4m)) {
                m4q.push(p4t)
            }
        });
        return m4q
    };
    l4p.bJY2x = function (bo5t) {
        return k4o.dH6B((bo5t || "").replace(/\s{2,}/g, " ").trim())
    };
    var cAe1x = {r: /\<|\>/g, "<": "&lt;", ">": "&gt;"};
    l4p.cAd1x = function (bo5t) {
        return k4o.Dq4u(cAe1x, bo5t)
    };
    l4p.brK7D = function (bj5o) {
        if (bj5o.transNames && bj5o.transNames.length) {
            return bj5o.transNames[0]
        } else if (bj5o.alias && bj5o.alias.length) {
            return bj5o.alias[0]
        }
    };
    l4p.brL7E = function (PA9r) {
        if (PA9r) {
            return PA9r.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l4p.brT7M = function (g4k) {
        var g4k = a4e.B4F(g4k), cK6E = g4k && g4k.getElementsByTagName("textarea")[0], K4O = a4e.t4x(g4k, "key"),
            brU7N = a4e.t4x(g4k, "simple") == "1", cAc1x = a4e.t4x(g4k, "pvnamed") == "1", cAb1x = q4u.ws2x.gm7f();
        if (!(g4k && cK6E && K4O)) return;
        var bbQ3x, bsc7V, bbB3x;
        bbQ3x = a4e.H4L(a4e.B4F("m-playlist"), "j-img");
        k4o.bd5i(bbQ3x, function (iZ8R) {
            if (!bbB3x && a4e.t4x(iZ8R, "key")) {
                bbB3x = a4e.t4x(iZ8R, "key");
                iZ8R.removeAttribute("data-key")
            }
        });
        bbQ3x = a4e.H4L(a4e.B4F("m-playlist"), "m-info");
        k4o.bd5i(bbQ3x, function (iZ8R) {
            if (!bsc7V && iZ8R.id && iZ8R.id.indexOf("auto-id-") == 0) {
                bsc7V = iZ8R.id.slice(8, 12)
            }
        });
        var D4H = cK6E.value || cK6E.defaultValue;
        if (bbB3x) {
            D4H = decodeURIComponent(k4o.cAa1x(D4H, "param=" + bsc7V + bbB3x))
        }
        D4H = JSON.parse(D4H);
        if (cAc1x) {
            l4p.czX1x(D4H)
        }
        if (brU7N) {
            D4H = l4p.GB5G(D4H)
        }
        cAb1x.wh2x(K4O, D4H);
        g4k.innerHTML = "";
        return K4O
    };
    l4p.czW1x = function (pT0x) {
        if (!pT0x.onbeforelistload) {
            pT0x.onbeforelistload = function (d4h) {
                d4h.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!pT0x.onemptylist) {
            pT0x.onemptylist = function (d4h) {
                d4h.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (pT0x.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return pT0x
    };
    l4p.czX1x = function (hC8u) {
        k4o.bd5i(hC8u, function (bP5U) {
            bP5U.privilege = bP5U.pv;
            delete bP5U.pv
        })
    };
    l4p.GB5G = function (ik8c) {
        if (k4o.eL7E(ik8c)) {
            var dC6w = [];
            k4o.bd5i(ik8c, function (brU7N) {
                dC6w.push(bLA2x(brU7N))
            });
            return dC6w
        } else {
            return bLA2x(ik8c)
        }

        function bLA2x(ik8c) {
            if (!ik8c) return null;
            var dC6w = {
                album: ik8c.al,
                alias: ik8c.alia || ik8c.ala || [],
                artists: ik8c.ar || [],
                commentThreadId: "R_SO_4_" + ik8c.id,
                copyrightId: ik8c.cp || 0,
                duration: ik8c.dt || 0,
                id: ik8c.id,
                mvid: ik8c.mv || 0,
                name: ik8c.name || "",
                cd: ik8c.cd,
                position: ik8c.no || 0,
                ringtone: ik8c.rt,
                rtUrl: ik8c.rtUrl,
                status: ik8c.st || 0,
                pstatus: ik8c.pst || 0,
                fee: ik8c.fee || 0,
                version: ik8c.v || 0,
                eq: ik8c.eq,
                songType: ik8c.t || 0,
                mst: ik8c.mst,
                score: ik8c.pop || 0,
                ftype: ik8c.ftype,
                rtUrls: ik8c.rtUrls,
                transNames: ik8c.tns,
                privilege: ik8c.privilege,
                lyrics: ik8c.lyrics
            };
            return dC6w
        }
    };
    l4p.cFU2x = function () {
        var g4k = a4e.nR0x('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(g4k);
        h4l.s4w(g4k, "click", function (d4h) {
            h4l.bg5l(d4h);
            a4e.cL6F(g4k)
        })
    };
    l4p.iJ8B = function (cz5E) {
        if (cz5E < 1e5) {
            return cz5E
        } else if (cz5E < 1e8) {
            return Math.floor(cz5E / 1e3) / 10 + "万"
        } else {
            return Math.floor(cz5E / 1e7) / 10 + "亿"
        }
    };
    l4p.vv2x = function (cz5E, cK6E) {
        return "<i>" + (cz5E ? "(" + cz5E + ")" : cK6E) + "</i>"
    };
    l4p.bMg2x = function (u4y, hZ8R) {
        var e4i = {};
        if (!k4o.lG9x(hZ8R)) {
            return e4i
        }
        switch (parseInt(u4y)) {
            case 17:
                e4i.title = hZ8R.name;
                e4i.author = (hZ8R.radio || []).name;
                e4i.picUrl = hZ8R.coverUrl;
                e4i.category = hZ8R.radio.category;
                break;
            case 19:
                e4i.title = hZ8R.name;
                e4i.author = l4p.zb3x(hZ8R.artists);
                e4i.authors = l4p.zb3x(hZ8R.artists, " / ");
                e4i.picUrl = hZ8R.picUrl;
                break;
            case 13:
                e4i.title = hZ8R.name;
                e4i.author = (hZ8R.creator || []).nickname;
                e4i.picUrl = hZ8R.coverImgUrl;
                break;
            case 18:
                e4i.title = hZ8R.name;
                e4i.author = l4p.zb3x(hZ8R.artists);
                e4i.picUrl = (hZ8R.album || []).picUrl;
                break;
            case 20:
                e4i.title = hZ8R.name;
                e4i.author = "";
                e4i.picUrl = hZ8R.img1v1Url;
                break;
            case 21:
                e4i.title = hZ8R.name;
                e4i.author = hZ8R.artistName;
                e4i.authors = l4p.zb3x(hZ8R.artists, " / ");
                e4i.picUrl = hZ8R.newCover || hZ8R.cover;
                break;
            case 70:
                e4i.title = hZ8R.name;
                e4i.author = (hZ8R.dj || []).nickname;
                e4i.picUrl = hZ8R.picUrl;
                e4i.category = hZ8R.category;
                break;
            default:
                break
        }
        return e4i
    };
    l4p.bMy2x = function () {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l4p.SY0x = function (ev6p, nX0x, e4i) {
        var bL5Q, bf5k, m4q;
        var gS7L = null;
        var vB2x = 0;
        if (!e4i) e4i = {};
        var xQ3x = function () {
            vB2x = e4i.leading === false ? 0 : +(new Date);
            gS7L = null;
            m4q = ev6p.apply(bL5Q, bf5k);
            if (!gS7L) bL5Q = bf5k = null
        };
        return function () {
            var eS7L = +(new Date);
            if (!vB2x && e4i.leading === false) vB2x = eS7L;
            var Hl5q = nX0x - (eS7L - vB2x);
            bL5Q = this;
            bf5k = arguments;
            if (Hl5q <= 0 || Hl5q > nX0x) {
                if (gS7L) {
                    clearTimeout(gS7L);
                    gS7L = null
                }
                vB2x = eS7L;
                m4q = ev6p.apply(bL5Q, bf5k);
                if (!gS7L) bL5Q = bf5k = null
            } else if (!gS7L && e4i.trailing !== false) {
                gS7L = setTimeout(xQ3x, Hl5q)
            }
            return m4q
        }
    };
    l4p.Jo6i = function (ev6p, nX0x, pf0x) {
        var gS7L, bf5k, bL5Q, Cc4g, m4q;
        var xQ3x = function () {
            var gt7m = new Date - Cc4g;
            if (gt7m < nX0x && gt7m >= 0) {
                gS7L = setTimeout(xQ3x, nX0x - gt7m)
            } else {
                gS7L = null;
                if (!pf0x) {
                    m4q = ev6p.apply(bL5Q, bf5k);
                    if (!gS7L) bL5Q = bf5k = null
                }
            }
        };
        return function () {
            bL5Q = this;
            bf5k = arguments;
            Cc4g = new Date;
            var SJ0x = pf0x && !gS7L;
            if (!gS7L) gS7L = setTimeout(xQ3x, nX0x);
            if (SJ0x) {
                m4q = ev6p.apply(bL5Q, bf5k);
                bL5Q = bf5k = null
            }
            return m4q
        }
    };
    l4p.SF0x = function (g4k, hs8k) {
        if (g4k) {
            var g4k = g4k.firstElementChild;
            if (g4k) {
                g4k.firstElementChild && (g4k = g4k.firstElementChild);
                g4k.setAttribute("xlink:href", "/style/pc/svg/" + hs8k)
            }
        }
    };
    l4p.bNO3x = function (ep6j) {
        if (!ep6j || !ep6j.length) {
            return
        }
        ep6j = /^#(.+?)#$/.exec(ep6j)[1];
        ep6j = ep6j.replace(/\s/g, " ");
        v4z.bm5r("/api/act/detail", {
            type: "json",
            method: "post",
            data: k4o.cD6x({actname: ep6j}),
            onload: function (Q5V) {
                if (!Q5V || Q5V.code != 200 || !Q5V.act) {
                    n4r.Z5e.J4N({type: 2, tip: "该话题暂未创建"})
                } else {
                    location.dispatch2("/activity?id=" + Q5V.act.actId)
                }
            },
            onerror: function (ca5f) {
                n4r.Z5e.J4N({type: 2, tip: "操作失败，请稍后再试"})
            }
        })
    };
    l4p.czU1x = function (ep6j) {
        if (!ep6j || !ep6j.length) {
            return
        }
        var SA0x = location.host;
        ep6j = /^#(.+?)#$/.exec(ep6j)[1];
        ep6j = ep6j.replace(/\s/g, " ");
        v4z.bm5r("/api/act/detail", {
            type: "json",
            method: "post",
            data: k4o.cD6x({actname: ep6j}),
            onload: function (Q5V) {
                if (!Q5V || Q5V.code != 200 || !Q5V.act) {
                    cy5D.im8e("该话题暂未创建")
                } else {
                    cy5D.AW4a(SA0x + "/activity?id=" + Q5V.act.actId)
                }
            },
            onerror: function (ca5f) {
                cy5D.im8e("操作失败，请稍后再试")
            }
        })
    };
    l4p.bsq7j = function (xL2x, sJ1x) {
        if (!xL2x || !sJ1x) return false;
        if (xL2x == sJ1x) return true;
        return l4p.bsq7j(xL2x, sJ1x.parentNode)
    };
    a4e.cH6B = function (bI5N, iT8L) {
        if (!bI5N) return null;
        if (!iT8L) return bI5N.firstChild;
        return a4e.H4L(bI5N, iT8L)[0]
    };
    l4p.bOO3x = function (hX8P) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(hX8P)
    };
    l4p.bPp3x = function (hX8P, Sy0x) {
        Sy0x = Sy0x || "86";
        if (Sy0x == "86") return /^\d{11}$/.test(hX8P);
        return /^\d+$/.test(hX8P)
    };
    l4p.cFV2x = function (vY2x) {
        if (!vY2x) {
            return "0b"
        }
        var czR1x = ["Bytes", "KB", "MB", "GB"];
        var bc5h = Math.floor(Math.log(vY2x) / Math.log(1024));
        return (vY2x / Math.pow(1024, Math.floor(bc5h))).toFixed(bc5h == 1 ? 0 : 1) + czR1x[bc5h]
    };
    l4p.bPK3x = function (dJ6D, fo7h, czQ1x) {
        if (!dJ6D) return dJ6D;
        var dt6n = k4o.fv7o(dJ6D);
        if (dt6n <= fo7h) return dJ6D;
        var bsy7r = dt6n - dJ6D.length, bsz7s = dJ6D.length - bsy7r;
        var fE7x = Math.ceil(fo7h / 2), czO1x = fo7h, bQk3x = 0;
        if (bsy7r < fE7x) fE7x = fo7h - bsy7r;
        if (bsz7s < fo7h) fo7h = bsz7s + Math.ceil((fo7h - bsz7s) / 2);
        while (fE7x <= fo7h) {
            bQk3x = k4o.fv7o(dJ6D.substr(0, fE7x));
            var bsA7t = czO1x - bQk3x;
            if (bsA7t == 0) break;
            if (bsA7t == 1) {
                var czN1x = k4o.fv7o(dJ6D.charAt(fE7x));
                if (czN1x == 1) {
                    fE7x++;
                    break
                } else {
                    break
                }
            }
            fE7x += Math.floor(bsA7t / 2)
        }
        return dJ6D.substr(0, fE7x) + (!!czQ1x ? "" : "...")
    };
    l4p.czL1x = function (bq5v) {
        bq5v = bq5v || 10;
        var cO6I = "";
        for (var i = 0; i < bq5v; i++) {
            cO6I += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cO6I
    };
    var czK1x = /([A-Za-z0-9 \.\-\(\)\!\?])/, czJ1x = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/,
        czI1x = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bQY5d = function (czH1x) {
        var bq5v = k4o.DA4E(1, 5), czG1x = Math.random() < .5, iQ8I = "";
        if (czH1x) {
            if (czG1x) {
                while (bq5v >= 0) {
                    iQ8I += czI1x[k4o.DA4E(0, 500)];
                    bq5v--
                }
            } else {
                iQ8I = l4p.czL1x(bq5v)
            }
        } else {
            iQ8I = k4o.TV0x(bq5v)
        }
        return '<div class="soil">' + iQ8I + "</div>"
    };
    l4p.bqt7m = function (eu6o) {
        eu6o = k4o.Dw4A(eu6o);
        try {
            var bq5v = eu6o.length, r4v = k4o.DA4E(1, bq5v - 1);
            while (r4v < bq5v) {
                if (czJ1x.test(eu6o.charAt(r4v))) {
                    return k4o.dH6B(eu6o.slice(0, r4v)) + bQY5d(true) + k4o.dH6B(eu6o.slice(r4v))
                } else if (czK1x.test(eu6o.charAt(r4v))) {
                    return k4o.dH6B(eu6o.slice(0, r4v)) + bQY5d() + k4o.dH6B(eu6o.slice(r4v))
                } else {
                    r4v++
                }
            }
            return k4o.dH6B(eu6o)
        } catch (e) {
            return k4o.dH6B(eu6o)
        }
    };
    l4p.ZG2x = function (lo9f, mJ9A) {
        return "//nos.netease.com/" + lo9f + "/" + mJ9A
    };
    l4p.czE0x = function (fG7z) {
        var dQ6K = /(.+)(\.[^\.]+$)/.exec(fG7z);
        return dQ6K ? {filename: dQ6K[1], suffix: dQ6K[2]} : {filename: fG7z || "", suffix: ""}
    };
    l4p.bRp5u = function (bs5x, czB0x) {
        var dC6w = [];
        k4o.bd5i(bs5x, function (ib8T) {
            dC6w.push(czB0x(ib8T))
        });
        return dC6w
    };
    var czA0x = {
        title: "name",
        durationms: "duration",
        coverUrl: "cover",
        playTime: "playCount",
        vid: "id",
        subscribed: "subed"
    };
    l4p.bRy5D = function (yd3x) {
        var j4n = NEJ.X({}, yd3x);
        k4o.eI6C(yd3x, function (p4t, K4O) {
            var bRC5H = czA0x[K4O];
            if (bRC5H) {
                j4n[bRC5H] = p4t
            }
        });
        var RJ0x = yd3x.creator || [];
        if (!k4o.eL7E(RJ0x)) {
            RJ0x = [RJ0x]
        }
        if (RJ0x) {
            j4n.artists = [];
            k4o.bd5i(RJ0x, function (p4t) {
                j4n.artists.push({name: p4t.nickname || p4t.userName, id: p4t.userId})
            })
        }
        if (!!yd3x.aliaName) {
            j4n.alias = [yd3x.aliaName]
        }
        if (!!yd3x.transName) {
            j4n.transNames = [yd3x.transName]
        }
        return j4n
    };
    l4p.czy0x = function (Y5d) {
        return (Y5d || "").replace(/^https?:/, "")
    };
    l4p.GA5F = function (cO6I) {
        if (!k4o.fC7v(cO6I)) return cO6I;
        var dC6w = null;
        try {
            dC6w = JSON.parse(cO6I)
        } catch (_e) {
        }
        return dC6w
    };
    var czv0x = '<span class="s-fc7 f-tdn">${value}</span>';
    l4p.czu0x = function (cK6E, td1x, e4i) {
        e4i = e4i || {};
        if (!td1x) {
            return k4o.dH6B(cK6E)
        }
        cK6E = k4o.Dw4A(cK6E);
        var qh0x = [], bs5x = null, QP9G = new RegExp(l4p.bGT1x(td1x), "gi"), oW0x = e4i.tpl || czv0x;
        while (bs5x = QP9G.exec(cK6E)) {
            var dQ6K = {html: "", before: bs5x.index - 1, after: bs5x.index + bs5x[0].length};
            var GV5a = a4e.eB6v(oW0x);
            dQ6K.html = a4e.cd5i(GV5a, {value: k4o.dH6B(bs5x[0])});
            qh0x.push(dQ6K)
        }
        var bpU7N = qh0x.length, kx8p = {before: cK6E.length - 1, after: 0}, dC6w = "";
        for (var i = 0; i <= bpU7N; i++) {
            var hA8s, fX7Q;
            hA8s = (qh0x[i - 1] || kx8p).after;
            fX7Q = (qh0x[i] || kx8p).before;
            if (fX7Q >= hA8s && hA8s >= 0 && fX7Q <= cK6E.length - 1) {
                dC6w += k4o.dH6B(cK6E.substring(hA8s, fX7Q + 1))
            }
            if (qh0x[i]) {
                dC6w += qh0x[i].html
            }
        }
        return dC6w
    };
    l4p.oe0x = function () {
        if (!window.WM) {
            var g4k = document.createElement("script");
            var qk0x = window.location.hostname;
            var bSj5o = window.location.protocol;
            a4e.gJ7C(g4k, "type", "text/javascript");
            if (qk0x === "music.163.com") {
                a4e.gJ7C(g4k, "src", bSj5o + "//s3.music.126.net/js/web2/3rd/acstatic-dun.min.js")
            } else {
                a4e.gJ7C(g4k, "src", bSj5o + "//" + qk0x + "/js/web2/3rd/acstatic-dun.min.js")
            }
            g4k.onload = function (data) {
                initWatchman({
                    productNumber: "YD00000558929251", onload: function (instance) {
                        window.WM = instance
                    }
                })
            };
            document.body.appendChild(g4k)
        }
    };
    l4p.sy1x = function (ou0x) {
        if (window.WM) {
            window.WM.getToken("bd5d2f973ef74cd2a61325a412ae54d9", ou0x)
        }
    };
    l4p.CS4W = function (ou0x) {
        if (window.WM) {
            window.WM.getToken("0b0cdd23ed1144a0b78de049edc09824", ou0x)
        }
    }
})();
(function () {
    var k4o = NEJ.P("nej.u");

    function czr0x() {
        var CU4Y = function (hY8Q) {
            if (hY8Q < -128) {
                return CU4Y(128 - (-128 - hY8Q))
            } else if (hY8Q >= -128 && hY8Q <= 127) {
                return hY8Q
            } else if (hY8Q > 127) {
                return CU4Y(-129 + hY8Q - 127)
            } else {
                throw new Error("1001")
            }
        };
        var czq0x = function (hY8Q, bi5n) {
            return CU4Y(hY8Q + bi5n)
        };
        var czp0x = function (Zc2x, btg7Z) {
            if (Zc2x == null) {
                return null
            }
            if (btg7Z == null) {
                return Zc2x
            }
            var qO0x = [];
            var czo0x = btg7Z.length;
            for (var i = 0, bq5v = Zc2x.length; i < bq5v; i++) {
                qO0x[i] = czq0x(Zc2x[i], btg7Z[i % czo0x])
            }
            return qO0x
        };
        var czn0x = function (Yv2x) {
            if (Yv2x == null) {
                return Yv2x
            }
            var qO0x = [];
            var czk0x = Yv2x.length;
            for (var i = 0, bq5v = czk0x; i < bq5v; i++) {
                qO0x[i] = CU4Y(0 - Yv2x[i])
            }
            return qO0x
        };
        var czh0x = function (btl7e, QS9J) {
            btl7e = CU4Y(btl7e);
            QS9J = CU4Y(QS9J);
            return CU4Y(btl7e ^ QS9J)
        };
        var bTq5v = function (QR9I, bts8k) {
            if (QR9I == null || bts8k == null || QR9I.length != bts8k.length) {
                return QR9I
            }
            var qO0x = [];
            var czg0x = QR9I.length;
            for (var i = 0, bq5v = czg0x; i < bq5v; i++) {
                qO0x[i] = czh0x(QR9I[i], bts8k[i])
            }
            return qO0x
        };
        var bTB5G = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var czf0x = function (dy6s) {
            var IX6R = [];
            IX6R.push(bTB5G[dy6s >>> 4 & 15]);
            IX6R.push(bTB5G[dy6s & 15]);
            return IX6R.join("")
        };
        var bTK5P = function (vY2x) {
            var bq5v = vY2x.length;
            if (vY2x == null || bq5v < 0) {
                return new String("")
            }
            var IX6R = [];
            for (var i = 0; i < bq5v; i++) {
                IX6R.push(czf0x(vY2x[i]))
            }
            return IX6R.join("")
        };
        var bTL5Q = function (Ya1x) {
            if (Ya1x == null || Ya1x.length == 0) {
                return Ya1x
            }
            var btw8o = new String(Ya1x);
            var qO0x = [];
            var bq5v = btw8o.length / 2;
            var bi5n = 0;
            for (var i = 0; i < bq5v; i++) {
                var po0x = parseInt(btw8o.charAt(bi5n++), 16) << 4;
                var pp0x = parseInt(btw8o.charAt(bi5n++), 16);
                qO0x[i] = CU4Y(po0x + pp0x)
            }
            return qO0x
        };
        var bTW5b = function (cO6I) {
            if (cO6I == null || cO6I == undefined) {
                return cO6I
            }
            var Qy9p = encodeURIComponent(cO6I);
            var vY2x = [];
            var bUi6c = Qy9p.length;
            for (var i = 0; i < bUi6c; i++) {
                if (Qy9p.charAt(i) == "%") {
                    if (i + 2 < bUi6c) {
                        vY2x.push(bTL5Q(Qy9p.charAt(++i) + "" + Qy9p.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    vY2x.push(Qy9p.charCodeAt(i))
                }
            }
            return vY2x
        };
        var czc0x = function (xh2x) {
            var bc5h = 0;
            bc5h += (xh2x[0] & 255) << 24;
            bc5h += (xh2x[1] & 255) << 16;
            bc5h += (xh2x[2] & 255) << 8;
            bc5h += xh2x[3] & 255;
            return bc5h
        };
        var cFX2x = function (bc5h) {
            var xh2x = [];
            xh2x[0] = bc5h >>> 24 & 255;
            xh2x[1] = bc5h >>> 16 & 255;
            xh2x[2] = bc5h >>> 8 & 255;
            xh2x[3] = bc5h & 255;
            return xh2x
        };
        var cyY0x = function (cV6P, btE8w, bq5v) {
            var dC6w = [];
            if (cV6P == null || cV6P.length == 0) {
                return dC6w
            }
            if (cV6P.length < bq5v) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq5v; i++) {
                dC6w[i] = cV6P[btE8w + i]
            }
            return dC6w
        };
        var btI8A = function (cV6P, btE8w, se1x, cyT0x, bq5v) {
            if (cV6P == null || cV6P.length == 0) {
                return se1x
            }
            if (se1x == null) {
                throw new Error("1004")
            }
            if (cV6P.length < bq5v) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq5v; i++) {
                se1x[cyT0x + i] = cV6P[btE8w + i]
            }
            return se1x
        };
        var cyQ0x = function (bq5v) {
            var bs5x = [];
            for (var i = 0; i < bq5v; i++) {
                bs5x[i] = 0
            }
            return bs5x
        };
        var cyP0x = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var IV6P = 64;
        var WZ1x = 64;
        var bVw6q = 4;
        var cyO0x = function (qJ0x) {
            var bVE6y = [];
            if (qJ0x == null || qJ0x == undefined || qJ0x.length == 0) {
                return cyQ0x(WZ1x)
            }
            if (qJ0x.length >= WZ1x) {
                return cyY0x(qJ0x, 0, WZ1x)
            } else {
                for (var i = 0; i < WZ1x; i++) {
                    bVE6y[i] = qJ0x[i % qJ0x.length]
                }
            }
            return bVE6y
        };
        var cyN0x = function (WJ1x) {
            if (WJ1x == null || WJ1x.length % IV6P != 0) {
                throw new Error("1005")
            }
            var btP8H = [];
            var bi5n = 0;
            var cyM0x = WJ1x.length / IV6P;
            for (var i = 0; i < cyM0x; i++) {
                btP8H[i] = [];
                for (var j = 0; j < IV6P; j++) {
                    btP8H[i][j] = WJ1x[bi5n++]
                }
            }
            return btP8H
        };
        var cyL0x = function (bVU6O) {
            var po0x = bVU6O >>> 4 & 15;
            var pp0x = bVU6O & 15;
            var bi5n = po0x * 16 + pp0x;
            return cyP0x[bi5n]
        };
        var byh9Y = function (btT8L) {
            if (btT8L == null) {
                return null
            }
            var byt9k = [];
            for (var i = 0, bq5v = btT8L.length; i < bq5v; i++) {
                byt9k[i] = cyL0x(btT8L[i])
            }
            return byt9k
        };
        var byu9l = function (IS6M, qJ0x) {
            if (IS6M == null) {
                return null
            }
            if (IS6M.length == 0) {
                return []
            }
            if (IS6M.length % IV6P != 0) {
                throw new Error("1005")
            }
            qJ0x = cyO0x(qJ0x);
            var btY8Q = qJ0x;
            var bub8T = cyN0x(IS6M);
            var Pu9l = [];
            var cyK0x = bub8T.length;
            for (var i = 0; i < cyK0x; i++) {
                var bue8W = byh9Y(bub8T[i]);
                bue8W = byh9Y(bue8W);
                var buf8X = bTq5v(bue8W, btY8Q);
                var cyJ0x = czp0x(buf8X, czn0x(btY8Q));
                buf8X = bTq5v(cyJ0x, qJ0x);
                btI8A(buf8X, 0, Pu9l, i * IV6P, IV6P);
                btY8Q = bub8T[i]
            }
            var bze9V = [];
            btI8A(Pu9l, Pu9l.length - bVw6q, bze9V, 0, bVw6q);
            var bq5v = czc0x(bze9V);
            if (bq5v > Pu9l.length) {
                throw new Error("1006")
            }
            var qO0x = [];
            btI8A(Pu9l, 0, qO0x, 0, bq5v);
            return qO0x
        };
        var cyI0x = function (beA4E, K4O) {
            if (beA4E == null) {
                return null
            }
            var bzi9Z = new String(beA4E);
            if (bzi9Z.length == 0) {
                return []
            }
            var IS6M = bTL5Q(bzi9Z);
            if (K4O == null || K4O == undefined) {
                throw new Error("1007")
            }
            var qJ0x = bTW5b(K4O);
            return byu9l(IS6M, qJ0x)
        };
        this.cyH0x = function (beA4E, K4O) {
            var bui8a = cyI0x(beA4E, K4O);
            var Hw5B = new String(bTK5P(bui8a));
            var zy3x = [];
            var bun8f = Hw5B.length / 2;
            var bi5n = 0;
            for (var i = 0; i < bun8f; i++) {
                zy3x.push("%");
                zy3x.push(Hw5B.charAt(bi5n++));
                zy3x.push(Hw5B.charAt(bi5n++))
            }
            return zy3x.join("")
        };
        k4o.cAa1x = function (buo8g, K4O) {
            return k4o.cyG0x(k4o.cEu2x(buo8g), K4O)
        };
        k4o.cyG0x = function (buo8g, K4O) {
            var bui8a = byu9l(buo8g, bTW5b(K4O));
            var Hw5B = new String(bTK5P(bui8a));
            var zy3x = [];
            var bun8f = Hw5B.length / 2;
            var bi5n = 0;
            for (var i = 0; i < bun8f; i++) {
                zy3x.push("%");
                zy3x.push(Hw5B.charAt(bi5n++));
                zy3x.push(Hw5B.charAt(bi5n++))
            }
            return zy3x.join("")
        }
    }

    window.settmusic = (new czr0x).cyH0x
})();
(function () {
    var c4g = NEJ.P, br5w = NEJ.F, I4M = c4g("nej.ut"), k4o = c4g("nej.u"), h4l = c4g("nej.v"), v4z = c4g("nej.j"),
        q4u = c4g("nm.d"), l4p = c4g("nm.x"), K4O = "Search-tracks_", b4f;
    q4u.fp7i({
        "search-suggest": {
            url: "/api/search/suggest/web", type: "POST", format: function (Q5V) {
                return Q5V
            }, onerror: function (Q5V, e4i) {
                if (Q5V.code == 407) {
                    e4i.onForbidden()
                }
            }
        },
        "search-multimatch": {url: "/api/search/suggest/multimatch", type: "GET"},
        "search-list": {
            url: "/api/cloudsearch/get/web", type: "post", noescape: true, filter: function (e4i, bh5m) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cyF0x(parseInt(e4i.data.type)) || "suggest",
                    keyword: e4i.data.s,
                    offset: e4i.offset
                })
            }, format: function (Q5V, e4i) {
                if (Q5V.abroad) {
                    try {
                        Q5V.result = JSON.parse(decodeURIComponent(settmusic(Q5V.result, q4u.sk)))
                    } catch (e) {
                    }
                }
                Q5V.result = Q5V.result || {};
                var i4m, cB5G, hM8E = [], pA0x = e4i.data.s || "", gc7V = e4i.data.limit,
                    u4y = parseInt(e4i.data.type) || 1, m4q = Q5V.result;
                switch (u4y) {
                    case 1:
                        i4m = this.bzK9B(m4q.songs, e4i.data.hlpretag, e4i.data.hlposttag);
                        cB5G = m4q.songCount;
                        break;
                    case 10:
                        i4m = m4q.albums;
                        cB5G = m4q.albumCount;
                        break;
                    case 100:
                        i4m = m4q.artists;
                        cB5G = m4q.artistCount;
                        break;
                    case 1e3:
                        i4m = m4q.playlists;
                        cB5G = m4q.playlistCount;
                        break;
                    case 1002:
                        i4m = m4q.userprofiles;
                        cB5G = m4q.userprofileCount;
                        break;
                    case 1004:
                        i4m = m4q.mvs;
                        cB5G = m4q.mvCount;
                        break;
                    case 1014:
                        i4m = l4p.bRp5u(m4q.videos, l4p.bRy5D);
                        cB5G = m4q.videoCount;
                        break;
                    case 1006:
                        i4m = this.bzK9B(m4q.songs, e4i.data.hlpretag, e4i.data.hlposttag);
                        cB5G = m4q.songCount;
                        break;
                    case 1009:
                        var qG0x = m4q.djRadios;
                        if (!!qG0x) {
                            k4o.bd5i(qG0x, function (D4H, r4v, cyE0x) {
                                D4H.xid = D4H.id;
                                D4H.id = D4H.id + "_rad"
                            });
                            if (qG0x.length) {
                                this.wh2x("radio_search-" + e4i.data.s, qG0x)
                            }
                        }
                        cB5G = Math.min(m4q.djprogramCount, 500);
                        i4m = m4q.djprograms || [];
                        if (e4i.data.isPub) {
                            k4o.nk9b(qG0x, function (D4H, r4v, cyE0x) {
                                D4H.stype = 1;
                                i4m.unshift(D4H)
                            });
                            cB5G = Math.min(i4m.length, 500)
                        }
                        break
                }
                this.z4D("onsearchload", Q5V);
                if (i4m && i4m.length) {
                    for (var i = 0; i < gc7V; i++) {
                        if (i < i4m.length) {
                            hM8E.push(i4m[i])
                        } else {
                            hM8E.push(null)
                        }
                    }
                }
                return {more: !0, total: Math.min(cB5G || 0, pA0x.length < 3 ? 500 : 5e3), list: hM8E}
            }, onerror: function (Q5V, e4i) {
                e4i.onload(e4i, []);
                if (k4o.gK7D(e4i.onerror)) {
                    e4i.onerror(Q5V)
                }
            }
        }
    });
    q4u.HB5G = NEJ.C();
    b4f = q4u.HB5G.N5S(q4u.hJ8B);
    b4f.cw5B = function () {
        this.cE6y()
    };
    b4f.cyD0x = function (K4O, e4i) {
        if (!K4O) return;
        if (!!this.bzQ9H) v4z.ky8q(this.bzQ9H);
        this.bzQ9H = this.cp5u("search-suggest", NEJ.X({data: {s: K4O, limit: 8}}, e4i))
    };
    b4f.cyA0x = function (K4O, e4i) {
        if (!K4O) return;
        this.cp5u("search-multimatch", NEJ.X({data: {s: K4O}}, e4i))
    };
    b4f.bzK9B = function () {
        var cyz0x = function (hB8t, bzU9L, bzV9M) {
            var cyy0x = hB8t.match(new RegExp(bzU9L + "(.+?)" + bzV9M, "gi")), cz5E = 0;
            k4o.bd5i(cyy0x, function (p4t) {
                cz5E += p4t.replace(new RegExp(bzU9L, "g"), "").replace(new RegExp(bzV9M, "g"), "").length
            });
            return cz5E
        };
        return function (jx8p, cyx0x, cyw0x) {
            var bAj9a = [];
            k4o.bd5i(jx8p, function (bj5o, bc5h) {
                bj5o = l4p.GB5G(bj5o);
                var baD2x = bj5o.lyrics || [], dt6n = baD2x.length, jY8Q = 0, cB5G = 4, ban2x = {l: 0, v: 0}, buW8O;
                if (dt6n > 4) {
                    k4o.bd5i(baD2x, function (hB8t, r4v) {
                        var bAq9h = cyz0x(hB8t, cyx0x, cyw0x);
                        if (bAq9h > ban2x.v) {
                            ban2x.v = bAq9h;
                            ban2x.l = r4v
                        }
                    });
                    jY8Q = ban2x.l;
                    jY8Q = Math.max(jY8Q, 0);
                    buW8O = dt6n - jY8Q - 4;
                    if (buW8O < 0) jY8Q += buW8O;
                    bj5o.lrcAbstractEnd = jY8Q + cB5G - 1
                } else {
                    bj5o.lrcAbstractEnd = dt6n - 1
                }
                bj5o.lrcAbstractStart = jY8Q;
                bj5o.indexId = (baD2x && baD2x.length ? "L" : "NL") + bj5o.id;
                bAj9a.push(bj5o)
            });
            return bAj9a
        }
    }();
    b4f.cyF0x = function (u4y) {
        switch (u4y) {
            case 1:
                return "song";
                break;
            case 100:
                return "artist";
                break;
            case 10:
                return "album";
                break;
            case 1004:
                return "mv";
                break;
            case 1014:
                return "video";
                break;
            case 1006:
                return "lyric";
                break;
            case 1e3:
                return "list";
                break;
            case 1009:
                return "djradio";
                break;
            case 1002:
                return "user";
                break;
            default:
                return "suggest";
                break
        }
    }
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), I4M = c4g("nej.ut"),
        v4z = c4g("nej.j"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), E4I = c4g("nm.m"), n4r = c4g("nm.l"),
        dw6q = c4g("nm.i"), M5R = c4g("nm.m.sch"), b4f, L5Q;
    var ZW2x = {songs: 1, artists: 100, albums: 10, playlists: 1e3, mvs: 1004};
    M5R.NK8C = NEJ.C();
    b4f = M5R.NK8C.N5S(I4M.cJ6D);
    b4f.cw5B = function (g4k) {
        this.cE6y();
        this.bW5b(g4k);
        this.S5X = q4u.HB5G.gm7f()
    };
    b4f.bW5b = function (g4k) {
        this.o4s = g4k;
        var i4m = a4e.H4L(g4k, "j-flag");
        this.eT7M = i4m[0];
        this.buZ8R = i4m[1];
        this.cr5w = i4m[2];
        this.nu9l = i4m[3];
        h4l.s4w(this.eT7M, "input", this.gg7Z.f4j(this));
        h4l.s4w(this.eT7M, "keyup", this.gg7Z.f4j(this));
        h4l.s4w(this.eT7M, "focus", this.gQ7J.f4j(this));
        h4l.s4w(this.buZ8R, "click", this.gQ7J.f4j(this));
        h4l.s4w(this.eT7M, "blur", this.bva8S.f4j(this));
        h4l.s4w(this.cr5w, "click", this.Zw2x.f4j(this));
        h4l.s4w(this.o4s, "keydown", this.bve8W.f4j(this));
        h4l.s4w(this.o4s, "keypress", this.Zo2x.f4j(this));
        h4l.s4w(this.nu9l, "mouseover", this.Ny8q.f4j(this));
        h4l.s4w(this.nu9l, "mouseout", this.Ny8q.f4j(this));
        if (this.eT7M.value) {
            this.eT7M.value = ""
        }
        if (this.eT7M.style.opacity != null) {
            this.eT7M.style.opacity = 1
        }
    };
    b4f.gg7Z = function (d4h) {
        if (d4h.type == "keyup" && d4h.keyCode == 8 || d4h.keyCode == 46) {
            this.HI6C()
        } else if (d4h.type == "input" || d4h.type == "propertychange") {
            setTimeout(this.HI6C.f4j(this), 0)
        }
    };
    b4f.gQ7J = function () {
        this.Aj3x(this.buZ8R, !1);
        a4e.y4C(this.o4s, "m-srch-fcs");
        this.eT7M.focus();
        this.HI6C();
        a4e.y4C((a4e.H4L("g-topbar", "j-showoff") || [])[0], "f-hide")
    };
    b4f.bva8S = function () {
        if (!this.eT7M.value) {
            this.Aj3x(this.buZ8R, !0)
        }
        var HJ6D = a4e.H4L(this.nu9l, "slt");
        if (this.Yl1x(this.nu9l) && HJ6D.length > 0 && a4e.t4x(HJ6D[0], "type")) {
            var hs8k = HJ6D[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hs8k)) {
                window.log("search", {rid: RegExp.$2, type: RegExp.$1, keyword: this.eT7M.value})
            }
            this.bvn8f(HJ6D[0].href)
        }
        this.Aj3x(this.nu9l, !1);
        a4e.x4B(this.o4s, "m-srch-fcs")
    };
    b4f.Aj3x = function (g4k, mi9Z) {
        a4e.ba5f(g4k, "display", !mi9Z ? "none" : "")
    };
    b4f.Yl1x = function (g4k) {
        return a4e.dh6b(g4k, "display") != "none"
    };
    b4f.HI6C = function () {
        var cyv0x = function (hX8P) {
            hX8P = k4o.Dw4A(hX8P);
            var eG6A = this.o4s.clientWidth > 250 ? 41 : 17;
            if (l4p.Na7T(hX8P) > eG6A) {
                hX8P = l4p.AM3x(hX8P, eG6A) + "..."
            }
            return k4o.dH6B(hX8P)
        };
        var XK1x = function (m4q) {
            return m4q.songs && m4q.songs.length || m4q.albums && m4q.albums.length || m4q.artists && m4q.artists.length || m4q.playlists && m4q.playlists.length
        };
        var ou0x = function (td1x, d4h) {
            if (!l4p.bGA1x(this.eT7M) || l4p.kv8n(this.eT7M.value)) {
                this.Aj3x(this.nu9l, !1);
                return
            }
            d4h.keyword = k4o.dH6B(td1x);
            var dV6P = a4e.cd5i("m-search-suggest", d4h, {mark: l4p.czu0x.eA6u(this, td1x), cutStr: cyv0x.f4j(this)}),
                ug1x = d4h.result.order;
            this.nu9l.innerHTML = dV6P;
            this.Aj3x(this.nu9l, XK1x(d4h.result) ? !0 : !1);
            if (!!ug1x && !!ug1x.length && ZW2x[ug1x[0]]) {
                this.bvq8i = {keyword: td1x, type: ZW2x[ug1x[0]]}
            }
        };
        var cyu0x = function () {
            this.Aj3x(this.nu9l, !1);
            return
        };
        return function () {
            var D4H = this.eT7M.value;
            if (l4p.kv8n(D4H)) {
                this.Aj3x(this.nu9l, !1);
                return
            }
            this.S5X.cyD0x(D4H, {onload: ou0x.f4j(this, D4H), onForbidden: cyu0x.f4j(this)})
        }
    }();
    b4f.Zo2x = function (d4h) {
        if (d4h.keyCode != 13) return;
        var HJ6D = a4e.H4L(this.nu9l, "slt");
        if (this.Yl1x(this.nu9l) && HJ6D.length > 0) {
            this.bvn8f(HJ6D[0].href);
            this.Aj3x(this.nu9l, !1);
            return
        }
        this.Zw2x();
        this.Aj3x(this.nu9l, !1)
    };
    b4f.bve8W = function (d4h) {
        if (!this.Yl1x(this.nu9l)) return;
        var i4m = a4e.H4L(this.nu9l, "xtag"), dt6n = i4m.length, r4v = k4o.di6c(i4m, function (p4t) {
            return a4e.bE5J(p4t, "slt")
        });
        switch (d4h.keyCode) {
            case 38:
                if (r4v >= 0) a4e.x4B(i4m[r4v], "slt");
                a4e.y4C(i4m[r4v <= 0 ? dt6n - 1 : r4v - 1], "slt");
                break;
            case 40:
                if (r4v >= 0) a4e.x4B(i4m[r4v], "slt");
                a4e.y4C(i4m[(r4v + 1) % dt6n], "slt");
                break
        }
    };
    b4f.Ny8q = function (d4h) {
        if (!this.Yl1x(this.nu9l)) return;
        var MY7R, F4J = h4l.X5c(d4h), i4m = a4e.H4L(this.nu9l, "xtag");
        if (F4J.tagName.toLowerCase() == "a") MY7R = F4J; else if (F4J.parentNode.tagName.toLowerCase() == "a") MY7R = F4J.parentNode;
        if (!MY7R) return;
        k4o.bd5i(i4m, function (p4t) {
            a4e.x4B(p4t, "slt");
            a4e.t4x(p4t, "type", "")
        });
        if (d4h.type == "mouseout") return;
        a4e.y4C(MY7R, "slt");
        a4e.t4x(MY7R, "type", "mouse")
    };
    b4f.Zw2x = function () {
        var dR6L = location.hash, r4v = dR6L.indexOf("?"), bv5A = k4o.hq8i(dR6L.substring(r4v + 1));
        bv5A.s = this.eT7M.value;
        if (l4p.kv8n(bv5A.s)) return;
        if (!bv5A.type && this.bvq8i && this.bvq8i.keyword == bv5A.s) {
            bv5A.type = this.bvq8i.type
        }
        this.bvn8f("/search/#/?" + k4o.cD6x(bv5A));
        this.eT7M.blur()
    };
    b4f.bvn8f = function (Y5d) {
        if (location.dispatch2) {
            location.dispatch2(Y5d)
        } else {
            location.href = Y5d
        }
    };
    M5R.NK8C.cyt0x = function () {
        var i4m = a4e.H4L(document.body, "j-suggest");
        k4o.bd5i(i4m, function (p4t) {
            new M5R.NK8C(p4t)
        })
    };
    M5R.NK8C.cyt0x()
})();
(function () {
    var c4g = NEJ.P, br5w = NEJ.F, I4M = c4g("nej.ut"), k4o = c4g("nej.u"), h4l = c4g("nej.v"), v4z = c4g("nej.j"),
        q4u = c4g("nm.d"), b4f;
    q4u.fp7i({
        "mv_artist-list": {
            url: "/api/artist/mvs", type: "get", format: function (Q5V) {
                return {total: Q5V.size || 0, list: Q5V.mvs || []}
            }
        }, "album_artist-list": {
            url: "/api/artist/albums/{id}", type: "get", format: function (Q5V) {
                return {total: Q5V.size || 0, list: Q5V.hotAlbums || []}
            }
        }, "ydcailing_post-list": {
            url: "/api/cailing/all", type: "POST", format: function (Q5V) {
                return Q5V.result.songs
            }
        }, "wo-list": {
            url: "/api/unicom/wo/content", format: function (Q5V, e4i) {
                if (e4i.offset == 0) {
                    var qt0x = Q5V.data[0];
                    this.z4D("onfirstload", qt0x);
                    Q5V.data.splice(0, 1);
                    return Q5V.data
                } else {
                    return Q5V.data
                }
            }
        }
    });
    q4u.HL6F = NEJ.C();
    b4f = q4u.HL6F.N5S(q4u.hJ8B);
    b4f.cw5B = function () {
        this.cE6y()
    };
    b4f.bvw8o = function () {
        var sU1x = "LOCAL_FLAG";
        return function (u4y, cyr0x) {
            var j4n = this.FX5c(sU1x, {});
            if (j4n[u4y]) {
                return true
            } else {
                if (!cyr0x) {
                    j4n[u4y] = true;
                    this.wI2x(sU1x, j4n)
                }
                return false
            }
        }
    }()
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), k4o = c4g("nej.u"), O5T = c4g("nej.ut"), bvE8w;
    if (!!O5T.op0x) return;
    O5T.op0x = NEJ.C();
    bvE8w = O5T.op0x.N5S(O5T.cJ6D);
    bvE8w.bl5q = function () {
        var cyq0x = function (d4h) {
            d4h.matched = d4h.source == d4h.target
        };
        return function (e4i) {
            e4i.oncheck = e4i.oncheck || cyq0x;
            this.bn5s(e4i);
            this.bU5Z = e4i.list;
            this.ji8a = e4i.dataset || "id";
            this.kQ9H = e4i.selected || "js-selected"
        }
    }();
    bvE8w.oa0x = function (D4H) {
        var F4J, d4h = {target: D4H};
        k4o.bd5i(this.bU5Z, function (g4k) {
            delete d4h.matched;
            d4h.source = a4e.t4x(g4k, this.ji8a);
            this.z4D("oncheck", d4h);
            if (!d4h.matched) {
                a4e.x4B(g4k, this.kQ9H)
            } else {
                F4J = g4k;
                a4e.y4C(g4k, this.kQ9H)
            }
        }, this);
        return F4J
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, a4e = c4g("nej.e"), O5T = c4g("nej.ut"), qm0x;
    if (!!O5T.dg6a) return;
    O5T.dg6a = NEJ.C();
    qm0x = O5T.dg6a.N5S(O5T.cJ6D);
    qm0x.cw5B = function () {
        this.je8W = {};
        this.cE6y();
        this.bJ5O()
    };
    qm0x.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.bvH8z = e4i.umi || "";
        this.Ci4m = e4i.dispatcher;
        this.IA6u = e4i.composite || bb5g;
        this.bne6Y({
            onshow: this.fe7X.f4j(this),
            onhide: this.kg8Y.f4j(this),
            onrefresh: this.eD6x.f4j(this),
            onmessage: this.qy0x.f4j(this),
            onbeforehide: this.cyp0x.f4j(this)
        })
    };
    qm0x.bC5H = function () {
        delete this.bvH8z;
        this.je8W = {};
        this.bF5K()
    };
    qm0x.vP2x = function (d4h) {
        if (!!d4h) d4h.stopped = !0
    };
    qm0x.bJ5O = br5w;
    qm0x.fe7X = br5w;
    qm0x.kg8Y = br5w;
    qm0x.eD6x = br5w;
    qm0x.qy0x = br5w;
    qm0x.cyp0x = br5w;
    qm0x.nw9n = function (nb9S, bG5L, fk7d) {
        this.Ci4m.bwp8h({to: nb9S, mode: fk7d || 0, data: bG5L, from: this.bvH8z})
    };
    qm0x.cFY2x = function (u4y, j4n) {
        this.Ci4m.Cp4t(u4y, {from: this.bvH8z, data: j4n})
    };
    qm0x.cGa2x = function () {
        this.Ci4m.ms9j.apply(this.Ci4m, arguments)
    };
    qm0x.cyj0x = function () {
        return this.je8W
    };
    a4e.bbh3x = function () {
        if (!!window.dispatcher) {
            dispatcher.bDG0x.apply(dispatcher, arguments)
        }
    }
})();
(function () {
    var c4g = NEJ.P, br5w = NEJ.F, bb5g = NEJ.O, a4e = c4g("nej.e"), k4o = c4g("nej.u"), O5T = c4g("nej.ut"), zU3x;
    if (!!O5T.du6o) return;
    O5T.du6o = NEJ.C();
    zU3x = O5T.du6o.N5S(O5T.dg6a);
    zU3x.cyi0x = function (e4i) {
        var bI5N;
        if (!bI5N) {
            var j4n = e4i.input || bb5g;
            bI5N = a4e.B4F(j4n.parent)
        }
        if (!bI5N) {
            var j4n = e4i.data || bb5g;
            bI5N = a4e.B4F(j4n.parent)
        }
        if (!bI5N) {
            bI5N = a4e.B4F(e4i.parent)
        }
        return bI5N
    };
    zU3x.fe7X = function (e4i) {
        var bI5N = this.cyi0x(e4i);
        if (!!bI5N && !!this.o4s) bI5N.appendChild(this.o4s);
        this.gM7F(e4i);
        this.bDW0x("onshow", e4i);
        this.eD6x(e4i)
    };
    zU3x.eD6x = function (e4i) {
        this.gj7c(e4i);
        this.bDW0x("onrefresh", e4i)
    };
    zU3x.kg8Y = function () {
        this.lq9h();
        this.cyh0x();
        a4e.mS9J(this.o4s)
    };
    zU3x.bEa0x = function () {
        var gL7E = /^onshow|onrefresh|delay$/;
        return function (ck5p) {
            return gL7E.test(ck5p)
        }
    }();
    zU3x.bEc0x = br5w;
    zU3x.bDW0x = function () {
        var bEd0x = function (bv5A, e4i, ck5p, qr0x) {
            if (this.bEa0x(qr0x)) return;
            if (!!bv5A) ck5p += (ck5p.indexOf("?") > 1 ? "&" : "?") + bv5A;
            var dn6h = this.bEc0x(qr0x, e4i) || {};
            dn6h.location = e4i;
            dn6h.parent = this.je8W[qr0x];
            this.Ci4m.is8k(ck5p, {input: dn6h})
        };
        return function (u4y, e4i) {
            if (!e4i.nodelay) {
                if (!!this.IA6u.delay) return;
                var bEj0x = this.IA6u[u4y] || bb5g;
                if (bEj0x.delay) return
            }
            var bv5A = k4o.cD6x(e4i.param) || "";
            if (u4y == "onrefresh") {
                k4o.eI6C(this.IA6u, bEd0x.f4j(this, bv5A, e4i))
            }
            k4o.eI6C(bEj0x, bEd0x.f4j(this, bv5A, e4i))
        }
    }();
    zU3x.cyh0x = function () {
        var Dt4x = function (ck5p, qr0x) {
            if (!this.bEa0x(qr0x)) this.Ci4m.bt5y(ck5p)
        };
        return function () {
            k4o.eI6C(this.IA6u, Dt4x, this);
            k4o.eI6C(this.IA6u.onshow, Dt4x, this);
            k4o.eI6C(this.IA6u.onrefresh, Dt4x, this)
        }
    }()
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), h4l = c4g("nej.v"), I4M = c4g("nej.ut"), v4z = c4g("nej.j"),
        k4o = c4g("nej.u"), E4I = c4g("nm.m"), l4p = c4g("nm.x"), q4u = c4g("nm.d"), b4f, L5Q;
    E4I.SS0x = NEJ.C();
    b4f = E4I.SS0x.N5S(I4M.cJ6D);
    b4f.cw5B = function () {
        this.cE6y();
        this.o4s = a4e.B4F("g-topbar");
        var i4m = a4e.H4L(this.o4s, "j-tflag");
        this.bws8k = i4m[0];
        this.HO6I = i4m[1];
        this.bEo0x = i4m[2];
        this.bwy8q = i4m[3];
        this.cyg0x = I4M.op0x.A4E({list: this.bws8k.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.bwB8t = I4M.op0x.A4E({list: this.bwy8q.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.bX5c([[this.o4s, "click", this.Sg0x.f4j(this)], [this.HO6I, "click", this.cM6G.f4j(this)], [this.HO6I, "mouseout", this.bEA0x.f4j(this, 0)], [this.HO6I, "mouseover", this.bEA0x.f4j(this, 1)]]);
        window.scrollTopbar = this.cyf0x.f4j(this);
        window.matchNav = this.bED0x.f4j(this);
        window.polling = this.vr2x.f4j(this);
        this.bwJ8B = q4u.HL6F.A4E();
        this.cye0x();
        this.Iu6o();
        var bv5A = k4o.hq8i(location.href.split("?")[1]) || {};
        if (bv5A.market) {
            a4e.B4F("topbar-download-link").href = "/download?market=" + bv5A.market
        }
        var bxd9U = a4e.H4L(this.o4s, "j-showoff");
        if (bxd9U && !this.bwJ8B.bvw8o("newMvSearch")) {
            a4e.x4B(bxd9U[0], "f-hide");
            window.setTimeout(function () {
                a4e.y4C(bxd9U[0], "f-hide")
            }, 5e3)
        }
        l4p.oe0x()
    };
    b4f.vr2x = function (d4h) {
        var dR6L = l4p.Kl6f();
        if (!/^\/msg/.test(dR6L)) {
            var wS2x = 0;
            wS2x += d4h.comment;
            wS2x += d4h.forward;
            wS2x += d4h.msg;
            wS2x += d4h.notice;
            if (wS2x > 0) {
                wS2x = wS2x > 99 ? "99+" : wS2x;
                this.Ri9Z.innerText = wS2x;
                this.Is6m.innerText = wS2x;
                a4e.x4B(this.Ri9Z, "f-hide");
                a4e.x4B(this.Is6m, "f-hide");
                this.bfk4o = true
            } else {
                a4e.y4C(this.Ri9Z, "f-hide");
                a4e.y4C(this.Is6m, "f-hide");
                this.bfk4o = false
            }
            var eW7P = "/at";
            if (d4h.notice) eW7P = "/notify";
            if (d4h.comment) eW7P = "/comment";
            if (d4h.msg > 0) eW7P = "/private";
            if (d4h.forward > 0) eW7P = "/at";
            this.Is6m.parentNode.href = "/msg/#" + eW7P
        } else {
            this.Is6m.parentNode.href = "javascript:;";
            a4e.y4C(this.Ri9Z, "f-hide");
            a4e.y4C(this.Is6m, "f-hide");
            this.bfk4o = false
        }
        var i4m = a4e.H4L(this.bws8k, "j-t");
        if (!/^\/friend/.test(dR6L)) {
            if (i4m && i4m.length) {
                a4e.ba5f(i4m[0], "display", d4h.event > 0 ? "" : "none")
            }
        } else {
            a4e.ba5f(i4m[0], "display", "none")
        }
    };
    b4f.cM6G = function (d4h) {
        var g4k = h4l.X5c(d4h, "d:action");
        if (g4k) {
            switch (a4e.t4x(g4k, "action")) {
                case"login":
                    h4l.cn5s(d4h);
                    var u4y = a4e.t4x(g4k, "type");
                    if (u4y) {
                        if (u4y == "sina" || u4y == "tencent") {
                            this.CQ4U = g4k.href;
                            l4p.CS4W(this.kV9M.f4j(this))
                        } else top.login(u4y == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case"logout":
                    h4l.cn5s(d4h);
                    top.logout();
                    break;
                case"viewStore":
                    if (!this.bwJ8B.bvw8o("storeNew")) {
                        a4e.y4C(this.cGb2x, "f-vhide")
                    }
                    break;
                case"viewLevel":
                    if (!this.bwJ8B.bvw8o("levelNew")) {
                        a4e.y4C(this.cGc2x, "f-vhide")
                    }
                    break
            }
        }
    };
    b4f.kV9M = function (cG6A) {
        this.CQ4U += "&checkToken=" + cG6A || "";
        top.open(this.CQ4U)
    };
    b4f.Sg0x = function (d4h) {
        var g4k = h4l.X5c(d4h, "d:action");
        if (!g4k) return;
        var V5a = a4e.t4x(g4k, "action");
        switch (V5a) {
            case"bilog":
                var bxv9m = a4e.t4x(g4k, "logAction"), bxz9q = a4e.t4x(g4k, "logJson");
                window.log(bxv9m, bxz9q);
                break
        }
    };
    b4f.bEA0x = function (Ir6l, d4h) {
        if (this.bxA9r) {
            this.bxA9r.style.display = !Ir6l ? "none" : "";
            (Ir6l || !this.bfk4o ? a4e.y4C : a4e.x4B).call(window, this.Ri9Z, "f-hide")
        }
    };
    b4f.cyf0x = function (ga7T) {
        a4e.ba5f(this.o4s, "top", -ga7T + "px")
    };
    b4f.bED0x = function (eW7P, cyb0x) {
        this.cyg0x.oa0x(eW7P);
        if (eW7P == "discover") {
            a4e.y4C(this.bEo0x, "f-hide");
            a4e.x4B(this.bwy8q, "f-hide");
            window.g_topBarHeight = 105;
            this.bwB8t.oa0x(cyb0x)
        } else {
            a4e.x4B(this.bEo0x, "f-hide");
            a4e.y4C(this.bwy8q, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b4f.cye0x = function () {
        var en6h = a4e.B4F("g_iframe");
        if (!en6h) return;
        var gy7r = en6h.contentWindow.document.getElementById("g_top");
        this.bED0x(a4e.t4x(gy7r, "module"), a4e.t4x(gy7r, "sub"))
    };
    var Xd1x = {}, bFt1x = /\/\/\w+/, cya0x = {
        avatarUrl: function (a, b) {
            a = a || "";
            b = b || "";
            return a.replace(bFt1x, "") !== b.replace(bFt1x, "")
        }, userId: true, nickname: true, reward: true, topic: true, djStatus: true
    };
    b4f.cxW0x = function (bcQ3x) {
        var nU0x = k4o.di6c(cya0x, function (D4H, K4O) {
            if (k4o.gK7D(D4H)) {
                return D4H(bcQ3x[K4O], Xd1x[K4O])
            } else {
                return bcQ3x[K4O] !== Xd1x[K4O]
            }
        });
        Xd1x = bcQ3x;
        return bcQ3x[nU0x]
    };
    b4f.Iu6o = function () {
        var dp6j = GUser || {}, cxV0x = GUserAcc || {};
        if (dp6j && dp6j.userId) {
            var bFH1x = NEJ.X(dp6j, cxV0x);
            if (this.cxW0x(bFH1x)) {
                a4e.dA6u(this.HO6I, "m-topbar-user-login", bFH1x)
            }
        } else {
            Xd1x = {};
            this.HO6I.innerHTML = a4e.iH8z("m-topbar-user-unlogin");
            var i4m = a4e.H4L(this.bws8k, "j-t");
            a4e.ba5f(i4m[0], "display", "none")
        }
        a4e.x4B(this.HO6I, "f-hide");
        this.bfk4o = false;
        var i4m = a4e.H4L(this.HO6I, "j-uflag");
        if (dp6j && dp6j.userId) {
            this.Ri9Z = i4m.shift();
            this.bxA9r = i4m.shift();
            this.Is6m = i4m.shift()
        } else {
            this.bxA9r = i4m.shift()
        }
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, h4l = c4g("nej.v"), I4M = c4g("nej.ut"), q4u = c4g("nm.d"), b4f, L5Q;
    q4u.fp7i({
        "polling-get": {
            type: "GET", url: "/api/pl/count", format: function (Q5V) {
                h4l.z4D(q4u.tq1x, "message", Q5V)
            }
        }
    });
    q4u.tq1x = NEJ.C();
    b4f = q4u.tq1x.N5S(q4u.hJ8B);
    b4f.bce3x = function () {
        this.cp5u("polling-get", {})
    };
    b4f.uL2x = function () {
        var eg6a;
        return function () {
            if (!!eg6a) return;
            eg6a = window.setInterval(this.bce3x.f4j(this), 1e5);
            this.bce3x()
        }
    }();
    I4M.fK7D.A4E({event: "message", element: q4u.tq1x})
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function () {
    (function (exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function (host, details) {
            var uri = io.util.parseUri(host), uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function (exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function (str) {
            var m = re.exec(str || ""), uri = {}, i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function (uri) {
            var protocol = uri.protocol, host = uri.host, port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function (base, addition) {
            var query = util.chunkQuery(base || ""), components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function (qs) {
            var query = {}, params = qs.split("&"), i = 0, l = params.length, kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function (fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function (element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function (xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {
                }
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function () {
                pageLoaded = true
            })
        }
        util.defer = function (fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function () {
                setTimeout(fn, 100)
            })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [], depth = typeof deep == "undefined" ? 2 : deep, prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        };
        util.mixin = function (ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function (ctor, ctor2) {
            function f() {
            }

            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray || function (obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function (arr, arr2) {
            var ret = [], longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function (arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {
            }
            return j <= i ? -1 : i
        };
        util.toArray = function (enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function (exports, io) {
        exports.EventEmitter = EventEmitter;

        function EventEmitter() {
        }

        EventEmitter.prototype.on = function (name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function (name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }

            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function (name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function (name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function (name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function (name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {parse: nativeJSON.parse, stringify: nativeJSON.stringify}
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }

        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent,
            meta = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap, partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case"string":
                    return quote(value);
                case"number":
                    return isFinite(value) ? String(value) : "null";
                case"boolean":
                case"null":
                    return String(value);
                case"object":
                    if (!value) {
                        return "null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }

        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {"": value})
        };
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({"": j}, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function (exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON, indexOf = io.util.indexOf;
        parser.encodePacket = function (packet) {
            var type = indexOf(packets, packet.type), id = packet.id || "", endpoint = packet.endpoint || "",
                ack = packet.ack, data = null;
            switch (packet.type) {
                case"error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                        adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case"message":
                    if (packet.data !== "") data = packet.data;
                    break;
                case"event":
                    var ev = {name: packet.name};
                    if (packet.args && packet.args.length) {
                        ev.args = packet.args
                    }
                    data = JSON.stringify(ev);
                    break;
                case"json":
                    data = JSON.stringify(packet.data);
                    break;
                case"connect":
                    if (packet.qs) data = packet.qs;
                    break;
                case"ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function (packets) {
            var decoded = "";
            if (packets.length == 1) return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function (data) {
            var pieces = data.match(regexp);
            if (!pieces) return {};
            var id = pieces[2] || "", data = pieces[5] || "",
                packet = {type: packets[pieces[1]], endpoint: pieces[4] || ""};
            if (id) {
                packet.id = id;
                if (pieces[3]) packet.ack = "data"; else packet.ack = true
            }
            switch (packet.type) {
                case"error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case"message":
                    packet.data = data || "";
                    break;
                case"event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) {
                    }
                    packet.args = packet.args || [];
                    break;
                case"json":
                    try {
                        packet.data = JSON.parse(data)
                    } catch (e) {
                    }
                    break;
                case"connect":
                    packet.qs = data || "";
                    break;
                case"ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try {
                                packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                            } catch (e) {
                            }
                        }
                    }
                    break;
                case"disconnect":
                case"heartbeat":
                    break
            }
            return packet
        };
        parser.decodePayload = function (data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io) {
        exports.Transport = Transport;

        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }

        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function () {
            return true
        };
        Transport.prototype.onData = function (data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function (packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function () {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function () {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function () {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function () {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function () {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function () {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function (packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function (heartbeat) {
            this.packet({type: "heartbeat"})
        };
        Transport.prototype.onOpen = function () {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function () {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function () {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function (socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.Socket = Socket;

        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function () {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }

        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function (name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({type: "connect"})
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function () {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };

        function empty() {
        }

        Socket.prototype.handshake = function (fn) {
            var self = this, options = this.options;

            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }

            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0], script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function (data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function (override) {
            var transports = override || this.transports, match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function (fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function (sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function () {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();

                function connect(transports) {
                    if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport) return self.publish("connect_failed");
                    self.transport.ready(self, function () {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function () {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {
                                        }
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }

                connect(self.transports);
                self.once("connect", function () {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function () {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats()) return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function () {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function (data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function (v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function () {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function () {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({type: "disconnect"})
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function () {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function () {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function () {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function () {
            this.open = true
        };
        Socket.prototype.onClose = function () {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function (packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function (err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function (reason) {
            var wasConnected = this.connected, wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        };
        Socket.prototype.reconnect = function () {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this, maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"], limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({type: "connect"})
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }

            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }

            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.SocketNamespace = SocketNamespace;

        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }

        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function () {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function (packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function (data, fn) {
            var packet = {type: this.flags.json ? "json" : "message", data: data};
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function (name) {
            var args = Array.prototype.slice.call(arguments, 1), lastArg = args[args.length - 1],
                packet = {type: "event", name: name};
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function () {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({type: "disconnect"});
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function (packet) {
            var self = this;

            function ack() {
                self.packet({type: "ack", args: io.util.toArray(arguments), ackId: packet.id})
            }

            switch (packet.type) {
                case"connect":
                    this.$emit("connect");
                    break;
                case"disconnect":
                    if (this.name === "") {
                        this.socket.onDisconnect(packet.reason || "booted")
                    } else {
                        this.$emit("disconnect", packet.reason)
                    }
                    break;
                case"message":
                case"json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") {
                        params.push(ack)
                    } else if (packet.ack) {
                        this.packet({type: "ack", ackId: packet.id})
                    }
                    this.$emit.apply(this, params);
                    break;
                case"event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data") params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case"ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case"error":
                    if (packet.advice) {
                        this.socket.onError(packet)
                    } else {
                        if (packet.reason == "unauthorized") {
                            this.$emit("connect_failed", packet.reason)
                        } else {
                            this.$emit("error", packet.reason)
                        }
                    }
                    break
            }
        };

        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }

        Flag.prototype.send = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.websocket = WS;

        function WS(socket) {
            io.Transport.apply(this, arguments)
        }

        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function () {
            var query = io.util.query(this.socket.options.query), self = this, Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function () {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function (ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function () {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function (e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function (data) {
                var self = this;
                setTimeout(function () {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function (data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function (arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function () {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function (e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function () {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function () {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function () {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.flashsocket = Flashsocket;

        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }

        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function () {
            var self = this, args = arguments;
            WebSocket.ZO2x(function () {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function () {
            var self = this, args = arguments;
            WebSocket.ZO2x(function () {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function () {
            WebSocket.Uk0x.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function (socket, fn) {
            function init() {
                var options = socket.options, port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bxI9z();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }

            var self = this;
            if (document.body) return init();
            io.util.load(init)
        };
        Flashsocket.check = function () {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function () {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function () {
            var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window,
                j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false,
                a = false, n, G, m = true, M = function () {
                    var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(), Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah), ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1", ag = [0, 0, 0], ab = null;
                    if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                        ab = t.plugins[S].description;
                        if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                            T = true;
                            X = false;
                            ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                            ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                        }
                    } else {
                        if (typeof O[["Active"].concat("Object").join("X")] != D) {
                            try {
                                var ad = new (window[["Active"].concat("Object").join("X")])(W);
                                if (ad) {
                                    ab = ad.GetVariable("$version");
                                    if (ab) {
                                        X = true;
                                        ab = ab.split(" ")[1].split(",");
                                        ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                    }
                                }
                            } catch (Z) {
                            }
                        }
                    }
                    return {w3: aa, pv: ag, wk: af, ie: X, win: ae, mac: ac}
                }(), k = function () {
                    if (!M.w3) {
                        return
                    }
                    if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                        f()
                    }
                    if (!J) {
                        if (typeof j.addEventListener != D) {
                            j.addEventListener("DOMContentLoaded", f, false)
                        }
                        if (M.ie && M.win) {
                            j.attachEvent(x, function () {
                                if (j.readyState == "complete") {
                                    j.detachEvent(x, arguments.callee);
                                    f()
                                }
                            });
                            if (O == top) {
                                (function () {
                                    if (J) {
                                        return
                                    }
                                    try {
                                        j.documentElement.doScroll("left")
                                    } catch (X) {
                                        setTimeout(arguments.callee, 0);
                                        return
                                    }
                                    f()
                                })()
                            }
                        }
                        if (M.wk) {
                            (function () {
                                if (J) {
                                    return
                                }
                                if (!/loaded|complete/.test(j.readyState)) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                        s(f)
                    }
                }();

            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }

            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }

            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function () {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }

            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }

            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function () {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }

            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {success: false, id: Y};
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }

            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }

            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }

            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {success: false, id: X};
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function () {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }

            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function () {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }

            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }

            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }

            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }

            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function () {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }

            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }

            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {
                }
                return X
            }

            function C(X) {
                return j.createElement(X)
            }

            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }

            function F(Z) {
                var Y = M.pv, X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }

            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }

            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }

            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }

            var d = function () {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function () {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function (ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({success: false, id: ab})
                        }
                    }
                }, getObjectById: function (X) {
                    if (M.w3) {
                        return z(X)
                    }
                }, embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {success: false, id: ah};
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function () {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                }, switchOffAutoHideShow: function () {
                    m = false
                }, ua: M, getFlashPlayerVersion: function () {
                    return {major: M.pv[0], minor: M.pv[1], release: M.pv[2]}
                }, hasFlashPlayerVersion: F, createSWF: function (Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                }, showExpressInstall: function (Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                }, removeSWF: function (X) {
                    if (M.w3) {
                        y(X)
                    }
                }, createCSS: function (aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                }, addDomLoadEvent: K, addLoadEvent: s, getQueryParamValue: function (aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                }, expressInstallCallback: function () {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }
    (function () {
        if ("undefined" == typeof window || window.WebSocket) return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function () {
                }, error: function () {
                }
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function (url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.gY7R = WebSocket.cxU0x++;
            WebSocket.bGb1x[self.gY7R] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.lV9M = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function () {
                WebSocket.ZO2x(function () {
                    WebSocket.pF0x.create(self.gY7R, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function (data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw"INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.pF0x.send(this.gY7R, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function () {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.pF0x.close(this.gY7R)
        };
        WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
            if (!(type in this.lV9M)) {
                this.lV9M[type] = []
            }
            this.lV9M[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
            if (!(type in this.lV9M)) return;
            var events = this.lV9M[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function (event) {
            var events = this.lV9M[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.cxT0x = function (flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bGf1x(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bGf1x("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cxQ0x("message", data)
            } else {
                throw"unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bGf1x = function (type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {type: type, bubbles: false, cancelable: false}
            }
        };
        WebSocket.prototype.cxQ0x = function (type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {type: type, data: data, bubbles: false, cancelable: false}
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.pF0x = null;
        WebSocket.bGb1x = {};
        WebSocket.Uk0x = [];
        WebSocket.cxU0x = 0;
        WebSocket.loadFlashPolicyFile = function (url) {
            WebSocket.ZO2x(function () {
                WebSocket.pF0x.loadManualPolicyFile(url)
            })
        };
        WebSocket.bxI9z = function () {
            if (WebSocket.pF0x) return;
            if (WebSocket.cxP0x) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.cxP0x
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.cxO0x()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function (e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.cGd2x = function () {
            setTimeout(function () {
                WebSocket.pF0x = document.getElementById("webSocketFlash");
                WebSocket.pF0x.setCallerUrl(location.href);
                WebSocket.pF0x.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.Uk0x.length; ++i) {
                    WebSocket.Uk0x[i]()
                }
                WebSocket.Uk0x = []
            }, 0)
        };
        WebSocket.cGe2x = function () {
            setTimeout(function () {
                try {
                    var events = WebSocket.pF0x.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bGb1x[events[i].webSocketId].cxT0x(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cGf2x = function (message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dY6S = function (message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.ZO2x = function (task) {
            if (WebSocket.pF0x) {
                task()
            } else {
                WebSocket.Uk0x.push(task)
            }
        };
        WebSocket.cxO0x = function () {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function () {
                    WebSocket.bxI9z()
                }, false)
            } else {
                window.attachEvent("onload", function () {
                    WebSocket.bxI9z()
                })
            }
        }
    })();
    (function (exports, io, global) {
        exports.XHR = XHR;

        function XHR(socket) {
            if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }

        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function () {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function (payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function (data) {
            this.post(data);
            return this
        };

        function empty() {
        }

        XHR.prototype.post = function (data) {
            var self = this;
            this.socket.setBuffer(true);

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }

            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function () {
            this.onClose();
            return this
        };
        XHR.prototype.request = function (method) {
            var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {
                }
            }
            return req
        };
        XHR.prototype.scheme = function () {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function (socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {
            }
            return false
        };
        XHR.xdomainCheck = function (socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.htmlfile = HTMLFile;

        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }

        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function () {
            this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this, query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function () {
                self.destroy()
            })
        };
        HTMLFile.prototype.c4g = function (data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {
            }
        };
        HTMLFile.prototype.destroy = function () {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {
                }
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function () {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function (socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {
                }
            }
            return false
        };
        HTMLFile.xdomainCheck = function () {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports["xhr-polling"] = XHRPolling;

        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }

        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function () {
            return false
        };
        XHRPolling.prototype.open = function () {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };

        function empty() {
        }

        XHRPolling.prototype.get = function () {
            if (!this.isOpen) return;
            var self = this;

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }

            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }

            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function () {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {
                }
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function (socket, fn) {
            var self = this;
            io.util.defer(function () {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;

        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function (msg) {
                self.c4g(msg)
            })
        }

        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function (data) {
            var self = this, query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"), area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index, iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;

            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }

            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }

            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {
            }
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function () {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function () {
            var self = this, script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function () {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function () {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.c4g = function (msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function (socket, fn) {
            var self = this;
            if (!indicator) return fn.call(this);
            io.util.load(function () {
                fn.call(self)
            })
        };
        JSONPPolling.check = function () {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function () {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function () {
            return io
        })
    }
})();
(function () {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function (arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {
    }

    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function (n) {
        if (!this.eh6b) this.eh6b = {};
        this.bGp1x = n
    };
    EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        if (type === "error") {
            if (!this.eh6b || !this.eh6b.error || isArray(this.eh6b.error) && !this.eh6b.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.eh6b) return false;
        var handler = this.eh6b[type];
        if (!handler) return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    var l = arguments.length;
                    var args = new Array(l - 1);
                    for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                    handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.eh6b) this.eh6b = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.eh6b[type]) {
            this.eh6b[type] = listener
        } else if (isArray(this.eh6b[type])) {
            this.eh6b[type].push(listener)
        } else {
            this.eh6b[type] = [this.eh6b[type], listener]
        }
        if (isArray(this.eh6b[type]) && !this.eh6b[type].warned) {
            var m;
            if (this.bGp1x !== undefined) {
                m = this.bGp1x
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.eh6b[type].length > m) {
                this.eh6b[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.eh6b[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;

        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }

        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.eh6b || !this.eh6b[type]) return this;
        var list = this.eh6b[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.eh6b[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (arguments.length === 0) {
            this.eh6b = {};
            return this
        }
        var events = this.eh6b && this.eh6b[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.eh6b[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function (type) {
        if (!this.eh6b) this.eh6b = {};
        if (!this.eh6b[type]) this.eh6b[type] = [];
        if (!isArray(this.eh6b[type])) {
            this.eh6b[type] = [this.eh6b[type]]
        }
        return this.eh6b[type]
    }
})();
(function () {
    if (typeof Object.create !== "function") {
        Object.create = function (o) {
            function F() {
            }

            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function (host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {"force new connection": true, reconnect: true, "max reconnection attempts": 50}
        } else {
            params = {"force new connection": true, reconnect: false}
        }
        socket = io.connect(url, params);
        socket.on("connect", function () {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function () {
            pomelo.emit("reconnect")
        });
        socket.on("message", function (data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function (err) {
            cb(err)
        });
        socket.on("disconnect", function (reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function (method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function (method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function (method, msgId, msg) {
        var path = route + method;
        var rs = {id: msgId, route: path, msg: msg};
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function (msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function () {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function (msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function () {
                    notify("heartbeat", {flag: "online", domain: current_domain, user: current_user})
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function (message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function (ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function (opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function (opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function (opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function (opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function (opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function () {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function (domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {user: user, msgIds: msgIds, types: types, domain: domain};
        notify("ack", message)
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, h4l = c4g("nej.v"), k4o = c4g("nej.u"), I4M = c4g("nej.ut"),
        l4p = c4g("nm.x"), dE6y = c4g("nm.u"), q4u = c4g("nm.d"), Rq0x = c4g("pomelo"), U5Z = 0, b4f, L5Q;
    q4u.fp7i({
        "polling-init": {
            url: "/api/push/init", format: function (Q5V) {
                U5Z = 2;
                var tc1x = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey,
                    secret: "bec0b878892740c498505a85eb3dcec9"
                }, j4n = Q5V.account || bb5g, do6i = GUser.userId;
                Rq0x.init(tc1x.host, tc1x.port, true, this.cxJ0x.f4j(this, {
                    user: do6i,
                    nonce: j4n.nonce,
                    domain: tc1x.domain,
                    productKey: tc1x.key,
                    signature: j4n.signature,
                    expire_time: j4n.expireTime
                }))
            }, onerror: function () {
                return this.bxR9I()
            }
        }
    });
    q4u.Dv4z = NEJ.C();
    b4f = q4u.Dv4z.N5S(q4u.hJ8B);
    b4f.cw5B = function () {
        var ru1x = !1;
        return function (e4i) {
            if (!ru1x) {
                ru1x = !0
            }
            this.cE6y(e4i);
            Rq0x.on("specify", this.qy0x.f4j(this));
            Rq0x.on("broadcast", this.qy0x.f4j(this))
        }
    }();
    b4f.qy0x = function (d4h) {
        k4o.bd5i(d4h, function (bG5L) {
            h4l.z4D(q4u.Dv4z, "message", bG5L)
        }, this)
    };
    b4f.bxR9I = function () {
        var bA5F = 500;
        return function () {
            U5Z = 0;
            Rq0x.disconnect();
            if (bA5F > 6e4) bA5F = 500;
            bA5F *= 2
        }
    }();
    b4f.cxJ0x = function (e4i, ca5f) {
        if (!!ca5f) {
            return this.bxR9I()
        }
        U5Z = 3;
        Rq0x.registerAndBind(e4i, function (m4q) {
            if (m4q.code != 200) {
                return this.bxR9I()
            }
            U5Z = 4
        }.f4j(this))
    };
    b4f.cGh2x = function () {
        dE6y.cxG0x.gm7f().cGi2x()
    };
    b4f.cGj2x = function () {
        dE6y.cxG0x.gm7f().cGk2x()
    };
    b4f.bxX9O = function () {
        var ru1x = !1;
        return function () {
            if (ru1x) return;
            ru1x = !0;
            this.cp5u("polling-init", {})
        }
    }();
    I4M.fK7D.A4E({event: "message", element: q4u.Dv4z})
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, a4e = c4g("nej.e"), h4l = c4g("nej.v"), v4z = c4g("nej.j"), dy6s = c4g("nej.p"),
        k4o = c4g("nej.u"), n4r = c4g("nm.l"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), cy5D = c4g("api"), b4f, L5Q;
    var ge7X = a4e.jm8e('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n4r.bxY9P = NEJ.C();
    b4f = n4r.bxY9P.N5S(n4r.eo6i);
    L5Q = n4r.bxY9P.cs5x;
    b4f.bl5q = function (e4i) {
        e4i.title = "意见反馈";
        this.bn5s(e4i)
    };
    b4f.ch5m = function () {
        this.cf5k = ge7X
    };
    b4f.bW5b = function () {
        this.ci5n();
        this.hE8w = {};
        var KA6u = a4e.H4L;
        var Id6X = h4l.s4w;
        this.hE8w.submit_btn = KA6u(this.o4s, "u-btn2")[0];
        this.hE8w.cancle_btn = KA6u(this.o4s, "u-btn2")[1];
        this.hE8w.prompt_msg = KA6u(this.o4s, "u-err")[0];
        this.hE8w.zs = KA6u(this.o4s, "zs")[0];
        a4e.ba5f(this.hE8w.zs, "display", "none");
        this.hE8w.fb_txt = KA6u(this.o4s, "u-txt")[0];
        this.hE8w.contact = KA6u(this.o4s, "u-txt")[1];
        a4e.gr7k(this.hE8w.fb_txt, "holder");
        a4e.gr7k(this.hE8w.contact, "holder");
        if (a4e.bE5J(this.hE8w.fb_txt.parentNode, "holder-parent")) {
            a4e.ba5f(this.hE8w.fb_txt.parentNode, "display", "block")
        }
        if (a4e.bE5J(this.hE8w.contact.parentNode, "holder-parent")) {
            a4e.ba5f(this.hE8w.contact.parentNode, "display", "block")
        }
        Id6X(this.hE8w.submit_btn, "click", this.cxC0x.f4j(this));
        Id6X(this.hE8w.cancle_btn, "click", this.cxB0x.f4j(this));
        Id6X(this.hE8w.prompt_msg, "msgShow", this.cxA0x.f4j(this));
        Id6X(this.hE8w.fb_txt, "keyup", this.wf2x.f4j(this));
        Id6X(this.hE8w.fb_txt, "input", this.fW7P.f4j(this));
        Id6X(this.hE8w.contact, "keyup", this.cxz0x.f4j(this));
        Id6X(this.hE8w.contact, "input", this.bHq1x.f4j(this));
        this.kI9z = q4u.hO8G.A4E()
    };
    b4f.cxC0x = function (d4h) {
        h4l.bg5l(d4h);
        if (this.cQ6K()) return;
        var bo5t = this.hE8w.fb_txt.value.trim();
        var bq5v = bo5t.length;
        var e4i = {type: "json", method: "post", noEnc: true};
        var bHF1x = this.hE8w.contact.value.trim();
        var bcF3x = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l4p.bpk6e(),
            contact: bHF1x
        };
        var j4n = {content: bo5t, client: "web", xInfo: JSON.stringify(bcF3x)}, on0x = this.kI9z.cDt2x();
        if (on0x && on0x.length) {
            j4n.log = on0x.join("\n")
        }
        if (bq5v == 0) {
            this.hE8w.prompt_msg.innerHTML = "反馈内容不能为空";
            a4e.ba5f(this.hE8w.prompt_msg, "display", "block");
            return
        }
        if (bHF1x.length > 100) {
            this.hE8w.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a4e.ba5f(this.hE8w.prompt_msg, "display", "block");
            return
        }
        this.cQ6K(true);
        e4i.data = k4o.cD6x(j4n);
        e4i.onload = this.cxy0x.f4j(this);
        e4i.onerror = this.jb8T.f4j(this);
        v4z.bm5r("/api/feedback/web", e4i)
    };
    b4f.fW7P = function (d4h) {
        var bq5v = this.hE8w.fb_txt.value.trim().length;
        if (bq5v > 0) a4e.ba5f(this.hE8w.prompt_msg, "display", "none");
        dy6s.dr6l.browser == "ie" && dy6s.dr6l.version < "7.0" ? setTimeout(this.gg7Z.f4j(this), 0) : this.gg7Z()
    };
    b4f.wf2x = function (d4h) {
        if (d4h.keyCode === 8) this.gg7Z()
    };
    b4f.gg7Z = function () {
        var bq5v = this.hE8w.fb_txt.value.trim().length;
        this.hE8w.zs.innerHTML = !bq5v ? "0/140" : bq5v + "/140"
    };
    b4f.bHq1x = function (d4h) {
        var bq5v = this.hE8w.contact.value.trim().length;
        if (bq5v > 0) a4e.ba5f(this.hE8w.prompt_msg, "display", "none")
    };
    b4f.cxz0x = function (d4h) {
        if (d4h.keyCode === 8) this.bHq1x()
    };
    b4f.cxB0x = function (d4h) {
        h4l.cn5s(d4h);
        this.bt5y()
    };
    b4f.cxA0x = function (d4h) {
        var g4k = h4l.X5c(d4h);
        g4k.innerHTML = "请输入反馈内容"
    };
    b4f.cGm2x = function (cGn2x) {
        var g4k = h4l.X5c(d4h);
        g4k.innerHTML = ""
    };
    b4f.cxy0x = function (m4q) {
        this.cQ6K(false);
        this.bt5y();
        n4r.Z5e.J4N({tip: "意见发送成功", autoclose: true})
    };
    b4f.jb8T = function (m4q) {
        this.cQ6K(false);
        n4r.Z5e.J4N({tip: "意见发送失败", autoclose: true})
    };
    b4f.cQ6K = function (db6V) {
        return this.dS6M(this.hE8w.submit_btn, db6V, "发送意见", "发送中...")
    };
    b4f.J4N = function () {
        L5Q.J4N.call(this);
        this.cQ6K(false);
        this.hE8w.fb_txt.value = "";
        this.hE8w.contact.value = "";
        a4e.ba5f(this.hE8w.prompt_msg, "display", "none");
        this.gg7Z()
    };
    l4p.cxt0x = function (e4i) {
        e4i = e4i || {};
        if (e4i.title === undefined) e4i.title = "意见反馈";
        n4r.bxY9P.J4N(e4i)
    };
    cy5D.feedback = l4p.feedback = l4p.cxt0x
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, O5T = c4g("nej.ui"), b4f;
    if (!!O5T.xR3x) return;
    O5T.xR3x = NEJ.C();
    b4f = O5T.xR3x.N5S(O5T.el6f);
    b4f.cw5B = function () {
        this.gY7R = this.bIE1x();
        this.cE6y()
    };
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.cq5v = e4i.index;
        this.gz7s = e4i.total;
        this.hw8o = e4i.range;
        this.gI7B(e4i.data)
    };
    b4f.bC5H = function () {
        this.bF5K();
        delete this.bk5p;
        delete this.cq5v;
        delete this.gz7s;
        delete this.hw8o
    };
    b4f.iA8s = br5w;
    b4f.bIE1x = function () {
        var gG7z = +(new Date);
        return function () {
            return "itm-" + ++gG7z
        }
    }();
    b4f.Fp5u = function () {
        return this.gY7R
    };
    b4f.ii8a = function () {
        return this.bk5p
    };
    b4f.gI7B = function (j4n) {
        this.bk5p = j4n || {};
        this.iA8s(this.bk5p)
    }
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), h4l = c4g("nej.v"), O5T = c4g("nej.ui"), b4f, L5Q;
    if (!!O5T.vs2x) return;
    O5T.vs2x = NEJ.C();
    b4f = O5T.vs2x.N5S(O5T.xR3x);
    L5Q = O5T.vs2x.cs5x;
    b4f.bl5q = function (e4i) {
        this.cxs0x = e4i.pkey || "id";
        this.bn5s(e4i)
    };
    b4f.HY6S = function (j4n) {
        this.z4D("ondelete", {ext: j4n, id: this.Fp5u(), data: this.ii8a(), body: this.lB9s()})
    };
    b4f.sY1x = function (j4n) {
        this.z4D("onupdate", {ext: j4n, id: this.Fp5u(), data: this.ii8a(), body: this.lB9s()})
    };
    b4f.gI7B = function (j4n) {
        L5Q.gI7B.apply(this, arguments);
        this.gY7R = this.bk5p[this.cxs0x] || this.bIE1x()
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, fy7r = NEJ.R, a4e = c4g("nej.e"), k4o = c4g("nej.u"), O5T = c4g("nej.ui"), b4f, iX8P,
        bxG9x;
    if (!!O5T.bxF9w) return;
    O5T.bxF9w = NEJ.C();
    b4f = O5T.bxF9w.N5S(O5T.el6f);
    b4f.bl5q = function (e4i) {
        this.bdq3x = NEJ.X({}, e4i);
        this.fT7M = NEJ.X({}, e4i);
        delete this.bdq3x.onchange;
        this.fT7M.onchange = this.fY7R.f4j(this);
        this.bn5s(e4i);
        this.cxr0x({number: e4i.number, label: e4i.label || bb5g})
    };
    b4f.bC5H = function () {
        this.bF5K();
        if (!!this.ll9c) {
            this.ll9c.T5Y();
            delete this.ll9c
        }
        delete this.bdq3x;
        delete this.fT7M;
        this.cxq0x();
        this.o4s.innerHTML = "&nbsp;"
    };
    b4f.ch5m = function () {
        this.mj9a = iX8P
    };
    b4f.cxr0x = function (j4n) {
        a4e.dA6u(this.o4s, bxG9x, j4n);
        var gG7z = a4e.Mi7b();
        this.fT7M.list = a4e.H4L(this.o4s, "js-i-" + gG7z);
        this.fT7M.pbtn = (a4e.H4L(this.o4s, "js-p-" + gG7z) || fy7r)[0];
        this.fT7M.nbtn = (a4e.H4L(this.o4s, "js-n-" + gG7z) || fy7r)[0]
    };
    b4f.bW5b = function () {
        this.ci5n()
    };
    b4f.cGq2x = function (j4n) {
        return a4e.cd5i(bxG9x, j4n)
    };
    b4f.fY7R = function (d4h) {
        if (this.Nl7e) return;
        var r4v = d4h.index, cB5G = d4h.total;
        this.Nl7e = !0;
        this.No7h(r4v, cB5G);
        k4o.bd5i(this.ZB2x, function (tj1x) {
            tj1x.No7h(r4v, cB5G)
        });
        this.Nl7e = !1;
        this.z4D("onchange", d4h)
    };
    b4f.f4j = function (bI5N) {
        bI5N = a4e.B4F(bI5N);
        if (!bI5N) return this;
        var ct5y = NEJ.X({}, this.bdq3x);
        ct5y.parent = bI5N;
        ct5y.index = this.tm1x();
        ct5y.total = this.kw8o();
        var tj1x = this.constructor.A4E(ct5y);
        tj1x.wq2x("onchange", this.fT7M.onchange);
        if (!this.ZB2x) this.ZB2x = [];
        this.ZB2x.push(tj1x);
        return this
    };
    b4f.cxq0x = function () {
        var bkA5F = function (tj1x, r4v, i4m) {
            tj1x.T5Y();
            i4m.splice(r4v, 1)
        };
        return function () {
            k4o.nk9b(this.ZB2x, bkA5F)
        }
    }();
    b4f.lb9S = function (r4v) {
        if (!this.ll9c) return;
        this.ll9c.lb9S(r4v)
    };
    b4f.tm1x = function () {
        if (!this.ll9c) return 1;
        return this.ll9c.tm1x()
    };
    b4f.kw8o = function () {
        if (!this.ll9c) return 1;
        return this.ll9c.kw8o()
    };
    b4f.No7h = function (r4v, cB5G) {
        if (!this.ll9c) return;
        this.ll9c.No7h(r4v, cB5G)
    };
    b4f.buA8s = function (cB5G) {
        if (!this.ll9c) return;
        this.ll9c.buA8s(cB5G)
    };
    iX8P = a4e.to1x(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bxG9x = a4e.eB6v('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        O5T = c4g("nej.ut"), b4f;
    if (!!O5T.bdT4X) return;
    O5T.bdT4X = NEJ.C();
    b4f = O5T.bdT4X.N5S(O5T.cJ6D);
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.bdV4Z = e4i.pbtn;
        this.cr5w = e4i.nbtn;
        this.bee4i = e4i.sbtn;
        this.WU1x = e4i.ebtn;
        this.ji8a = e4i.event || "click";
        this.kQ9H = e4i.selected || "js-selected";
        this.nV0x = e4i.disabled || "js-disabled";
        this.cxo0x(e4i.list);
        this.No7h(e4i.index || 1, e4i.total || 1)
    };
    b4f.bC5H = function () {
        this.bF5K();
        delete this.bU5Z;
        delete this.ji8a;
        delete this.bdV4Z;
        delete this.cr5w;
        delete this.bee4i;
        delete this.WU1x;
        delete this.bLh2x;
        delete this.gz7s;
        delete this.cq5v;
        delete this.kQ9H;
        delete this.nV0x
    };
    b4f.cxo0x = function () {
        var brG7z = function (g4k) {
            this.bU5Z.push(g4k);
            this.bX5c([[g4k, this.ji8a, this.cv5A.eA6u(this, 0)]])
        };
        return function (i4m) {
            this.bU5Z = [];
            this.bX5c([[this.bdV4Z, "click", this.cv5A.eA6u(this, -1)], [this.cr5w, "click", this.cv5A.eA6u(this, 1)], [this.bee4i, "click", this.cv5A.eA6u(this, -2)], [this.WU1x, "click", this.cv5A.eA6u(this, 2)]]);
            k4o.bd5i(i4m, brG7z, this)
        }
    }();
    b4f.He5j = function (g4k, r4v) {
        if (r4v == null) {
            g4k.innerText = "";
            a4e.ba5f(g4k, "display", "none");
            a4e.x4B(g4k, this.kQ9H)
        } else {
            g4k.innerText = r4v;
            a4e.ba5f(g4k, "display", "");
            r4v == this.cq5v ? a4e.y4C(g4k, this.kQ9H) : a4e.x4B(g4k, this.kQ9H)
        }
    };
    b4f.bro7h = function () {
        if (this.cq5v <= 1) {
            a4e.y4C(this.bdV4Z, this.nV0x);
            a4e.y4C(this.bee4i, this.nV0x)
        } else {
            a4e.x4B(this.bdV4Z, this.nV0x);
            a4e.x4B(this.bee4i, this.nV0x)
        }
        if (this.cq5v >= this.gz7s) {
            a4e.y4C(this.cr5w, this.nV0x);
            a4e.y4C(this.WU1x, this.nV0x)
        } else {
            a4e.x4B(this.cr5w, this.nV0x);
            a4e.x4B(this.WU1x, this.nV0x)
        }
    };
    b4f.WI1x = br5w;
    b4f.bpO7H = function () {
        this.WI1x();
        this.bro7h();
        this.z4D("onchange", {last: this.bLh2x, total: this.gz7s, index: this.cq5v, ext: this.boO6I})
    };
    b4f.bLR2x = function (r4v) {
        r4v = parseInt(r4v);
        if (isNaN(r4v) || this.gz7s == null) return !1;
        r4v = Math.max(1, Math.min(r4v, this.gz7s));
        this.bLh2x = this.cq5v;
        this.cq5v = r4v;
        return !0
    };
    b4f.boA6u = function (cB5G) {
        cB5G = parseInt(cB5G);
        if (isNaN(cB5G) || cB5G < 1) return !1;
        this.gz7s = cB5G;
        return !0
    };
    b4f.cv5A = function (d4h, fa7T) {
        h4l.cn5s(d4h);
        var F4J = h4l.X5c(d4h);
        if (!F4J || a4e.bE5J(F4J, this.kQ9H) || a4e.bE5J(F4J, this.nV0x)) return;
        var r4v = F4J.innerText;
        switch (fa7T) {
            case 1:
            case-1:
                r4v = this.cq5v + fa7T;
                break;
            case 2:
                r4v = this.gz7s;
                break;
            case-2:
                r4v = 1;
                break
        }
        this.lb9S(r4v)
    };
    b4f.tm1x = function () {
        return this.cq5v
    };
    b4f.lb9S = function (r4v) {
        var cxn0x = this.cq5v;
        this.bLR2x(r4v);
        if (cxn0x != this.cq5v) this.bpO7H();
        return this
    };
    b4f.kw8o = function () {
        return this.gz7s
    };
    b4f.RA0x = function (cB5G) {
        if (this.boA6u(cB5G) && this.cq5v != null) {
            this.cq5v = 1;
            this.bpO7H()
        }
        return this
    };
    b4f.buA8s = function (cB5G) {
        if (this.boA6u(cB5G)) {
            this.WI1x();
            this.bro7h()
        }
        return this
    };
    b4f.No7h = function (r4v, cB5G) {
        if (!this.boA6u(cB5G) || !this.bLR2x(r4v)) return this;
        this.bpO7H();
        return this
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, a4e = c4g("nej.e"), k4o = c4g("nej.u"), cZ6T = c4g("nej.x"), O5T = c4g("nej.ut"),
        b4f;
    if (!!O5T.OG8y) return;
    O5T.OG8y = NEJ.C();
    b4f = O5T.OG8y.N5S(O5T.bdT4X);
    b4f.cw5B = function () {
        this.cE6y();
        var g4k = a4e.dj6d("span", "zdot");
        g4k.innerText = "...";
        this.bbb3x = [g4k.cloneNode(true), g4k]
    };
    b4f.bC5H = function () {
        this.bF5K();
        this.bMH2x()
    };
    b4f.bMH2x = function () {
        a4e.mS9J(this.bbb3x[0]);
        a4e.mS9J(this.bbb3x[1])
    };
    b4f.WI1x = function () {
        this.boO6I = {last: !1, first: !1, list: this.bU5Z};
        this.bMH2x();
        this.He5j(this.bU5Z[0], 1);
        var bM5R = 1, bq5v = this.bU5Z.length;
        if (this.gz7s < bq5v) {
            for (var rj1x; bM5R < bq5v; bM5R++) {
                rj1x = bM5R + 1;
                this.He5j(this.bU5Z[bM5R], rj1x > this.gz7s ? null : rj1x)
            }
            return
        }
        if (this.cq5v > 1) {
            var cz5E = Math.floor((bq5v - 2) / 2), cxm0x = this.gz7s - bq5v + 2, hA8s = Math.max(2, this.cq5v - cz5E);
            if (this.gz7s >= bq5v) {
                hA8s = Math.min(hA8s, cxm0x)
            }
            if (hA8s > 2) {
                this.bU5Z[0].insertAdjacentElement("afterEnd", this.bbb3x[0]);
                this.boO6I.first = !0
            }
            for (var r4v; ; bM5R++) {
                r4v = hA8s + bM5R - 1;
                if (r4v > this.cq5v) break;
                this.He5j(this.bU5Z[bM5R], r4v)
            }
        }
        if (this.cq5v < this.gz7s) {
            var r4v, hA8s = this.cq5v + 1;
            for (var i = 0, l = bq5v - 2; ; i++, bM5R++) {
                r4v = hA8s + i;
                if (bM5R > l || r4v > this.gz7s) break;
                this.He5j(this.bU5Z[bM5R], r4v)
            }
            if (r4v < this.gz7s) {
                this.bU5Z[bM5R].insertAdjacentElement("beforeBegin", this.bbb3x[1]);
                this.boO6I.last = !0
            }
            if (r4v <= this.gz7s) {
                this.He5j(this.bU5Z[bM5R++], this.gz7s)
            }
        }
        for (; bM5R < bq5v; bM5R++) {
            this.He5j(this.bU5Z[bM5R])
        }
    };
    a4e.cxl0x = cZ6T.cxl0x = function (bI5N, e4i) {
        var C4G = a4e.lP9G(bI5N);
        if (!C4G) return null;
        if (!O5T.beT4X(C4G, O5T.OG8y)) {
            e4i = e4i || {};
            var i4m = !e4i.clazz ? a4e.dk6e(C4G) : a4e.H4L(C4G, e4i.clazz);
            e4i.pbtn = i4m.shift();
            e4i.nbtn = i4m.pop();
            e4i.list = i4m;
            delete e4i.clazz
        }
        return O5T.beT4X(C4G, O5T.OG8y, e4i || bb5g)
    };
    cZ6T.isChange = !0
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, fy7r = NEJ.R, a4e = c4g("nej.e"), k4o = c4g("nej.u"), I4M = c4g("nej.ut"),
        O5T = c4g("nej.ui"), b4f, L5Q, ge7X;
    if (!!O5T.OQ8I) return;
    O5T.OQ8I = NEJ.C();
    b4f = O5T.OQ8I.N5S(O5T.bxF9w);
    L5Q = O5T.OQ8I.cs5x;
    b4f.bl5q = function (e4i) {
        e4i.number = parseInt(e4i.number) || 9;
        this.bn5s(e4i);
        this.ll9c = I4M.OG8y.A4E(this.fT7M)
    };
    b4f.fY7R = function (d4h) {
        if (!!this.bdq3x.noend) {
            var bMZ3x = d4h.ext || bb5g, i4m = bMZ3x.list || fy7r;
            if (bMZ3x.last) {
                a4e.ba5f(i4m[i4m.length - 1], "display", "none")
            }
        }
        L5Q.fY7R.apply(this, arguments)
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        bc5h = c4g("nej.ui"), O5T = c4g("nej.ut"), b4f;
    if (!!O5T.bbX3x) return;
    O5T.bbX3x = NEJ.C();
    b4f = O5T.bbX3x.N5S(O5T.cJ6D);
    b4f.bl5q = function (e4i) {
        this.iU8M = {};
        this.bn5s(e4i);
        this.il8d = a4e.B4F(e4i.parent);
        this.ff7Y = {parent: this.il8d};
        this.oH0x = parseInt(e4i.limit) || 10;
        this.yN3x = parseInt(e4i.first) || this.oH0x;
        this.cxk0x(e4i.item);
        this.cxj0x(e4i.cache || bb5g);
        this.cxi0x(e4i.pager || bb5g);
        this.gI7B()
    };
    b4f.bC5H = function () {
        this.z4D("onbeforerecycle");
        this.Pk9b();
        this.bF5K();
        if (this.iU8M.clear) {
            this.S5X.vw2x(this.iU8M.key)
        }
        this.S5X.T5Y();
        if (!!this.jy8q) {
            this.jy8q.T5Y();
            delete this.jy8q
        }
        delete this.bOa3x;
        delete this.fT7M;
        delete this.bcD3x;
        delete this.S5X;
        delete this.il8d;
        delete this.Pr9i;
        delete this.ff7Y;
        delete this.iU8M
    };
    b4f.bOr3x = function () {
        var df6Z = /\{(.*?)\}/gi, cxh0x = function (oW0x, j4n) {
            return (oW0x || "{id}{seed}").replace(df6Z, function ($1, $2) {
                var D4H = j4n[$2];
                return D4H == null ? $1 : D4H
            })
        };
        return function (C4G) {
            var K4O = cxh0x(this.ff7Y.jstIdTempalte, {id: C4G, seed: a4e.Mi7b()});
            if (!this.ff7Y.jstIdType) {
                return a4e.B4F(K4O)
            } else if (this.ff7Y.jstIdType == 1) {
                return (a4e.H4L(this.il8d, K4O) || [])[0]
            }
        }
    }();
    b4f.BT4X = function (bM5R, bi5n, gc7V, bq5v) {
        var m4q = {index: 1, total: 1};
        if (bi5n >= bM5R) {
            m4q.index = Math.floor((bi5n - bM5R) / gc7V) + 2
        }
        if (bq5v > bM5R) {
            m4q.total = Math.ceil((bq5v - bM5R) / gc7V) + 1
        }
        return m4q
    };
    b4f.bOF3x = function (K4O) {
        delete this.Pr9i;
        this.KI6C = K4O;
        this.bX5c([[this.il8d, "click", this.cxg0x.f4j(this)]])
    };
    b4f.cxk0x = function (p4t) {
        if (k4o.fC7v(p4t)) {
            this.bOF3x(p4t);
            return
        }
        NEJ.X(this.ff7Y, p4t);
        var ec6W = this.ff7Y.klass;
        delete this.ff7Y.klass;
        if (k4o.fC7v(ec6W)) {
            this.bOF3x(ec6W);
            return
        }
        delete this.KI6C;
        this.Pr9i = ec6W;
        this.ff7Y.ondelete = this.z4D.f4j(this, "ondelete");
        this.ff7Y.onupdate = this.z4D.f4j(this, "onupdate")
    };
    b4f.cxj0x = function (R5W) {
        var ec6W = R5W.klass, kr8j = NEJ.X({}, R5W);
        this.iU8M.key = kr8j.lkey;
        this.iU8M.data = kr8j.data || {};
        this.iU8M.clear = !!kr8j.clear;
        this.ff7Y.pkey = kr8j.key || "id";
        kr8j.onlistload = this.bng6a.f4j(this);
        kr8j.onpullrefresh = this.cxf0x.f4j(this);
        if (!!ec6W && "onlistchange" in ec6W) {
            this.bX5c([[ec6W, "listchange", this.bmu6o.f4j(this)]])
        } else {
            kr8j.onitemadd = this.bfn4r.f4j(this);
            kr8j.onitemdelete = this.VX1x.f4j(this);
            kr8j.onitemupdate = this.bPF3x.f4j(this)
        }
        this.S5X = (ec6W || O5T.RO0x).A4E(kr8j);
        if (R5W.total != null) {
            this.S5X.RA0x(this.iU8M.key, R5W.total)
        }
        if (!!R5W.list) {
            this.S5X.wh2x(this.iU8M.key, R5W.list)
        }
    };
    b4f.cxi0x = function (tj1x) {
        this.bOa3x = tj1x.klass || bc5h.OQ8I;
        this.fT7M = NEJ.X({}, tj1x);
        if (k4o.eL7E(tj1x.parent)) {
            this.fT7M.parent = tj1x.parent[0];
            this.Qm9d = tj1x.parent.slice(1);
            if (!this.Qm9d || !this.Qm9d.length) {
                delete this.Qm9d
            }
        }
        delete this.fT7M.klass
    };
    b4f.Pk9b = function () {
        var gL7E = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this.z4D("onbeforelistclear", {parent: this.il8d});
            if (!!this.fQ7J && this.fQ7J.length > 0) {
                this.fQ7J = this.Pr9i.T5Y(this.fQ7J);
                delete this.fQ7J
            }
            if (gL7E.test(this.il8d.tagName)) {
                a4e.bVz6t(this.il8d)
            } else {
                this.il8d.innerHTML = ""
            }
        }
    }();
    b4f.bkG5L = function (Zl2x) {
        if (!!this.fT7M.fixed) return;
        a4e.ba5f(this.fT7M.parent, "display", Zl2x);
        k4o.bd5i(this.Qm9d, function (bI5N) {
            a4e.ba5f(bI5N, "display", Zl2x)
        }, this)
    };
    b4f.bks5x = function () {
        var r4v = this.fT7M.index || 1;
        delete this.fT7M.index;
        if (!!this.jy8q) {
            r4v = this.jy8q.tm1x()
        }
        this.Cg4k({last: r4v, index: r4v})
    };
    b4f.Cg4k = function (d4h) {
        this.z4D("onpagechange", d4h)
    };
    b4f.bQh3x = function (bi5n) {
        this.iU8M.offset = bi5n;
        this.XR1x()
    };
    b4f.bQi3x = function (e4i) {
        return e4i
    };
    b4f.XR1x = function () {
        this.SB0x();
        var j4n = this.iU8M.data;
        j4n.offset = this.iU8M.offset;
        var qt0x = j4n.offset == 0;
        j4n.total = qt0x;
        this.iU8M.limit = qt0x ? this.yN3x : this.oH0x;
        j4n.limit = this.iU8M.limit;
        this.S5X.lO9F(this.bQi3x(NEJ.X({}, this.iU8M)))
    };
    b4f.bng6a = function (e4i) {
        if (e4i.key != this.iU8M.key || e4i.offset != this.iU8M.offset) return;
        this.ZQ2x();
        var i4m = this.S5X.hD8v(e4i.key);
        if (!i4m || !i4m.length) {
            this.bjT5Y();
            return
        }
        var gc7V = e4i.limit, bi5n = e4i.offset;
        if (this.bjf5k(i4m, bi5n, gc7V)) return;
        this.z4D("onbeforelistrender", {list: i4m, offset: bi5n, parent: this.il8d});
        if (!!this.KI6C) {
            this.ff7Y.xlist = i4m;
            this.ff7Y.beg = bi5n;
            this.ff7Y.end = Math.min(i4m.length, bi5n + gc7V) - 1;
            this.ff7Y.act = "list";
            var dV6P = a4e.cd5i(this.KI6C, this.ff7Y);
            this.Ub0x(dV6P)
        } else {
            this.ff7Y.limit = gc7V;
            this.ff7Y.offset = bi5n;
            var hu8m = a4e.CH4L(i4m, this.Pr9i, this.ff7Y);
            this.Uv0x(hu8m)
        }
        this.z4D("onafterlistrender", {list: i4m, offset: bi5n, parent: this.il8d})
    };
    b4f.cxf0x = function (e4i) {
        if (!this.bcD3x) return;
        delete this.bcD3x;
        this.ZQ2x("onafterpullrefresh");
        this.gI7B()
    };
    b4f.bQU5Z = function (r4v, cB5G) {
        if (!!this.jy8q) {
            var xe2x = this.jy8q.tm1x(), cxd0x = this.jy8q.kw8o();
            if (xe2x > cB5G || cB5G != cxd0x) {
                this.jy8q.T5Y();
                delete this.jy8q;
                this.Cg4k({last: xe2x, index: Math.min(r4v, cB5G)});
                return !0
            }
        } else {
            this.fT7M.index = r4v;
            this.fT7M.total = cB5G;
            this.jy8q = this.bOa3x.A4E(this.fT7M);
            this.jy8q.wq2x("onchange", this.Cg4k.f4j(this));
            k4o.bd5i(this.Qm9d, function (bI5N) {
                this.jy8q.f4j(bI5N)
            }, this)
        }
    };
    b4f.bcO3x = function () {
        var gG7z = +(new Date);
        return function (j4n) {
            var C4G = j4n[this.ff7Y.pkey];
            if (!C4G) {
                j4n["dirty-data"] = !0;
                j4n[this.ff7Y.pkey] = "dirty-" + gG7z++
            }
            return j4n
        }
    }();
    b4f.bdE4I = function (j4n) {
        var C4G = j4n[this.ff7Y.pkey];
        if (!!j4n["dirty-data"]) {
            delete j4n["dirty-data"];
            delete j4n[this.ff7Y.pkey]
        }
        return C4G
    };
    b4f.beh4l = function () {
        var cxc0x = function (kW9N, mT9K) {
            this.il8d.insertAdjacentElement(kW9N, mT9K)
        };
        return function (kW9N, j4n) {
            var Mu7n = [j4n];
            if (!!this.KI6C) {
                this.ff7Y.xlist = Mu7n;
                this.ff7Y.beg = 0;
                this.ff7Y.end = 0;
                this.ff7Y.act = "add";
                this.Ub0x(a4e.cd5i(this.KI6C, this.ff7Y), kW9N)
            } else {
                this.ff7Y.limit = 1;
                this.ff7Y.offset = 0;
                this.ff7Y.parent = cxc0x.f4j(this, kW9N);
                var hu8m = a4e.CH4L(Mu7n, this.Pr9i, this.ff7Y);
                this.ff7Y.parent = this.il8d;
                this.Uv0x(hu8m)
            }
        }
    }();
    b4f.SB0x = br5w;
    b4f.ZQ2x = function (W5b) {
        var d4h = {parent: this.il8d};
        this.z4D(W5b || "onafterlistload", d4h);
        if (!d4h.stopped) {
            a4e.mS9J(this.cu5z)
        }
    };
    b4f.bjf5k = br5w;
    b4f.beo4s = function (bG5L, kW9N) {
        if (k4o.fC7v(bG5L)) {
            if (!this.cu5z) this.cu5z = a4e.dj6d("div");
            this.cu5z.innerHTML = bG5L
        } else {
            this.cu5z = bG5L
        }
        this.il8d.insertAdjacentElement(kW9N || "beforeEnd", this.cu5z)
    };
    b4f.zk3x = function (W5b, kx8p, kW9N) {
        var d4h = {parent: this.il8d};
        this.z4D(W5b, d4h);
        if (!d4h.stopped) {
            this.beo4s(d4h.value || kx8p, kW9N)
        }
    };
    b4f.bjT5Y = br5w;
    b4f.Ub0x = br5w;
    b4f.Uv0x = br5w;
    b4f.cxg0x = function () {
        var gL7E = /^(?:delete|update)$/;
        return function (d4h) {
            var g4k = h4l.X5c(d4h, "d:action");
            if (!g4k) return;
            var V5a = a4e.t4x(g4k, "action");
            if (!gL7E.test(V5a)) return;
            var C4G = a4e.t4x(g4k, "id");
            if (!C4G) return;
            var p4t = this.S5X.eJ6D(C4G);
            if (!p4t) return;
            h4l.bg5l(d4h);
            this.z4D("on" + V5a, {data: p4t, id: p4t[this.ff7Y.pkey], body: a4e.B4F(this.bOr3x(C4G))})
        }
    }();
    b4f.bfn4r = br5w;
    b4f.XP1x = function (d4h) {
        var j4n = d4h.data || {}, e4i = {data: j4n, key: this.iU8M.key, id: j4n[this.ff7Y.pkey]};
        this.z4D("onbeforedelete", e4i);
        this.S5X.Lx7q(e4i)
    };
    b4f.VX1x = br5w;
    b4f.XN1x = function (d4h) {
        var j4n = d4h.data || {}, e4i = {data: j4n, key: this.iU8M.key};
        this.z4D("onbeforeupdate", e4i);
        this.S5X.XU1x(e4i)
    };
    b4f.bPF3x = function (d4h) {
        this.VJ1x(d4h, "onafterupdate");
        if (d4h.stopped) return;
        var C4G = d4h.data[this.ff7Y.pkey];
        if (!!this.fQ7J) {
            var p4t = a4e.bCH0x(C4G);
            if (!!p4t) p4t.gI7B(d4h.data)
        } else {
            var g4k = a4e.B4F(C4G + "" + a4e.Mi7b());
            if (!g4k) return;
            var i4m = this.S5X.hD8v(d4h.key), r4v = k4o.di6c(i4m, d4h.data);
            if (r4v < 0) return;
            this.ff7Y.list = i4m;
            this.ff7Y.beg = r4v;
            this.ff7Y.end = r4v;
            this.ff7Y.act = "update";
            var dV6P = a4e.cd5i(this.KI6C, this.ff7Y);
            g4k.insertAdjacentHTML("afterEnd", dV6P);
            a4e.cL6F(g4k)
        }
    };
    b4f.VJ1x = function (d4h, W5b) {
        var p4t = d4h.data;
        if (!p4t || p4t[this.ff7Y.pkey] == null) {
            this.z4D("onerror", d4h);
            d4h.stopped = !0
        }
        if (!d4h.stopped) {
            this.z4D(W5b, d4h)
        }
    };
    b4f.bin5s = br5w;
    b4f.bip5u = br5w;
    b4f.bmu6o = function (d4h) {
        if (d4h.key != this.iU8M.key) return;
        switch (d4h.action) {
            case"add":
                this.bfn4r(d4h);
                break;
            case"delete":
                this.VX1x(d4h);
                break;
            case"update":
                this.bPF3x(d4h);
                break;
            case"refresh":
                this.gI7B();
                break;
            case"unshift":
                this.bip5u(d4h.offset, d4h.limit);
                break;
            case"append":
                this.bin5s(d4h.offset, d4h.limit);
                break
        }
    };
    b4f.qe0x = function (p4t) {
        this.XN1x({data: p4t})
    };
    b4f.mB9s = function (p4t) {
        this.XP1x({data: p4t})
    };
    b4f.ud1x = function (p4t) {
        this.S5X.jI8A({data: p4t, key: this.iU8M.key})
    };
    b4f.uc1x = function () {
        return this.S5X
    };
    b4f.biG5L = function (j4n) {
        this.beh4l("afterBegin", this.bcO3x(j4n));
        return this.bdE4I(j4n)
    };
    b4f.bRM5R = function (j4n) {
        this.beh4l("beforeEnd", this.bcO3x(j4n));
        return this.bdE4I(j4n)
    };
    b4f.gI7B = function () {
        this.Pk9b();
        this.bks5x()
    };
    b4f.cGr2x = function () {
        this.S5X.vw2x(this.iU8M.key);
        this.gI7B()
    };
    b4f.blp5u = function () {
        if (!!this.bcD3x) return;
        this.bcD3x = !0;
        this.zk3x("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        var i4m = this.S5X.hD8v(this.iU8M.key);
        if (i4m && i4m[0]) {
            this.iU8M.data.aftertime = i4m[0].eventTime || ""
        }
        this.S5X.blp5u({key: this.iU8M.key, data: this.iU8M.data})
    };
    b4f.kw8o = function () {
        return this.S5X.kw8o(this.iU8M.key)
    };
    b4f.bRP5U = function () {
        return this.jy8q
    };
    b4f.Ye1x = function () {
        return this.S5X.Ye1x(this.iU8M.key)
    };
    b4f.cxa0x = function () {
        return this.fQ7J
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, fy7r = NEJ.R, k4o = c4g("nej.u"), a4e = c4g("nej.e"), O5T = c4g("nej.ut"), b4f, L5Q;
    if (!!O5T.kk8c) return;
    O5T.kk8c = NEJ.C();
    b4f = O5T.kk8c.N5S(O5T.bbX3x);
    L5Q = O5T.kk8c.cs5x;
    b4f.BT4X = function (bi5n, bq5v) {
        return L5Q.BT4X.call(this, this.yN3x, bi5n, this.oH0x, bq5v)
    };
    b4f.bjb5g = function (r4v) {
        var bi5n = 0;
        if (r4v > 1) bi5n = this.yN3x + (r4v - 2) * this.oH0x;
        return bi5n
    };
    b4f.Cg4k = function (d4h) {
        L5Q.Cg4k.apply(this, arguments);
        if (!d4h.stopped) {
            this.bQh3x(this.bjb5g(d4h.index))
        }
    };
    b4f.SB0x = function () {
        this.Pk9b();
        this.zk3x("onbeforelistload", "列表加载中...")
    };
    b4f.ZQ2x = function () {
        L5Q.ZQ2x.apply(this, arguments);
        this.Pk9b()
    };
    b4f.bjf5k = function (i4m, bi5n, gc7V) {
        var bx5C = this.BT4X(bi5n, i4m.length);
        if (this.bQU5Z(bx5C.index, bx5C.total)) return !0;
        this.bkG5L(bx5C.total > 1 ? "" : "none")
    };
    b4f.bjT5Y = function () {
        this.zk3x("onemptylist", "没有列表数据！")
    };
    b4f.beo4s = function (bG5L, kW9N) {
        if (!kW9N && k4o.fC7v(bG5L)) {
            this.il8d.innerHTML = bG5L;
            return
        }
        L5Q.beo4s.apply(this, arguments)
    };
    b4f.Ub0x = function (dV6P) {
        this.il8d.innerHTML = dV6P
    };
    b4f.Uv0x = function (hu8m) {
        this.fQ7J = hu8m
    };
    b4f.bfn4r = function (d4h) {
        this.VJ1x(d4h, "onafteradd");
        if (!d4h.stopped) this.gI7B()
    };
    b4f.VX1x = function (d4h) {
        this.VJ1x(d4h, "onafterdelete");
        if (!d4h.stopped) this.gI7B()
    };
    b4f.bin5s = function (bi5n, gc7V) {
        var r4v = 1;
        if (!!this.jy8q) {
            r4v = this.jy8q.tm1x()
        }
        var jY8Q = this.bjb5g(r4v), fX7Q = jY8Q + (r4v > 1 ? this.oH0x : this.yN3x);
        if (bi5n >= fX7Q && !!this.jy8q) {
            var bx5C = this.BT4X(0, this.kw8o());
            this.jy8q.buA8s(bx5C.total);
            this.bkG5L(bx5C.total > 1 ? "" : "none")
        } else {
            this.gI7B()
        }
    };
    b4f.bip5u = function (bi5n, gc7V) {
        var r4v = 1;
        if (!!this.jy8q) {
            r4v = this.jy8q.tm1x()
        }
        var jY8Q = this.bjb5g(r4v), bx5C = this.BT4X(jY8Q, this.kw8o());
        this.Cg4k({last: r4v, index: bx5C.index})
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, a4e = c4g("nej.e"), h4l = c4g("nej.v"), I4M = c4g("nej.ut"),
        k4o = c4g("nej.u"), l4p = c4g("nm.x"), q4u = c4g("nm.d"), w4A = c4g("nm.w"), fo7h = 40, b4f, L5Q;
    w4A.baP3x = NEJ.C();
    b4f = w4A.baP3x.N5S(I4M.cJ6D);
    L5Q = w4A.baP3x.cs5x;
    b4f.cw5B = function () {
        this.cE6y()
    };
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.Tn0x = e4i.inputer;
        this.bjx5C = e4i.tipper;
        this.bX5c([[this.Tn0x, "input", this.fW7P.f4j(this)]])
    };
    b4f.bC5H = function () {
        this.bF5K();
        this.LR7K(null, null)
    };
    b4f.fW7P = function (d4h) {
        if (d4h && d4h.type == "keyup" && (d4h.keyCode != 8 || d4h.keyCode != 68)) return;
        var W5b = this.Tn0x.value, cGs2x;
        if (l4p.Na7T(W5b) > fo7h) {
            this.Tn0x.value = l4p.AM3x(W5b, fo7h);
            this.LR7K("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.f4j(this))
        } else if (W5b.indexOf("#") >= 0 || W5b.indexOf("@") >= 0) {
            this.LR7K("歌单名不能包含字符“@”和“#”！")
        } else {
            this.LR7K(null, null);
            this.z4D("onchange", {value: W5b})
        }
    };
    b4f.cwY0x = function () {
        this.fW7P()
    };
    b4f.LR7K = function () {
        var C4G = 0;
        return function (dJ6D, bSE5J) {
            if (!!C4G) window.clearTimeout(C4G);
            if (!dJ6D) {
                a4e.y4C(this.bjx5C, "f-vhide");
                this.bSG5L = !1;
                return
            }
            this.bjx5C.innerHTML = '<i class="u-icn u-icn-25"></i>' + dJ6D;
            a4e.x4B(this.bjx5C, "f-vhide");
            this.bSG5L = !0;
            if (k4o.gK7D(bSE5J)) C4G = window.setTimeout(function () {
                this.LR7K(null, null);
                bSE5J()
            }.f4j(this), 1e3)
        }
    }();
    b4f.bSH5M = function () {
        if (this.bSG5L) return !1;
        if (l4p.kv8n(this.Tn0x.value)) {
            this.LR7K("歌单名不能为空");
            return !1
        }
        return !0
    };
    b4f.gb7U = function () {
        return this.Tn0x.value
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, h4l = c4g("nej.v"), a4e = c4g("nej.e"), v4z = c4g("nej.j"), n4r = c4g("nm.l"),
        w4A = c4g("nm.w"), bD5I = c4g("nej.ui"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), b4f, L5Q;
    n4r.Zt2x = NEJ.C();
    b4f = n4r.Zt2x.N5S(n4r.eo6i);
    L5Q = n4r.Zt2x.cs5x;
    b4f.cw5B = function () {
        this.cE6y()
    };
    b4f.bW5b = function () {
        this.ci5n();
        var i4m = a4e.H4L(this.o4s, "j-flag");
        this.Yz2x = {inputer: i4m[0], tipper: i4m[1]};
        this.iK8C = {onerror: this.bSP5U.f4j(this), onitemadd: this.bSP5U.f4j(this)};
        this.lN9E = i4m[2];
        h4l.s4w(i4m[2], "click", this.EH5M.f4j(this));
        h4l.s4w(i4m[3], "click", this.De4i.f4j(this));
        h4l.s4w(this.o4s, "keypress", this.bSY5d.f4j(this))
    };
    b4f.ch5m = function () {
        this.cf5k = "m-wgt-create"
    };
    b4f.bl5q = function (e4i) {
        e4i.clazz = " m-layer-w2";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "新建歌单";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bn5s(e4i);
        this.Yz2x.inputer.value = e4i.name || "";
        this.uP2x = w4A.baP3x.A4E(this.Yz2x);
        this.uP2x.cwY0x();
        this.S5X = q4u.ic8U.A4E(this.iK8C);
        setTimeout(function () {
            this.Yz2x.inputer.focus()
        }.f4j(this), 0)
    };
    b4f.bC5H = function () {
        this.bF5K();
        if (this.uP2x) {
            this.uP2x.T5Y();
            delete this.uP2x
        }
        this.sR1x(!1);
        this.Yz2x.inputer.value = ""
    };
    b4f.sR1x = function (PQ9H) {
        this.oB0x = PQ9H;
        if (PQ9H) {
            this.lN9E.innerHTML = "<i>新建中...</i>";
            a4e.y4C(this.lN9E, "u-btn2-dis")
        } else {
            this.lN9E.innerHTML = "<i>新 建</i>";
            a4e.x4B(this.lN9E, "u-btn2-dis")
        }
    };
    b4f.EH5M = function () {
        if (this.oB0x || !this.uP2x.bSH5M()) return;
        var ct5y = {key: "playlist_new-" + GUser.userId, data: {name: this.uP2x.gb7U()}, offset: 1};
        this.S5X.jI8A(ct5y);
        this.sR1x(!0)
    };
    b4f.bSP5U = function (d4h) {
        var bY5d = (d4h.result || bb5g).code;
        if (!bY5d) {
            this.z4D("onsuccess", d4h.data)
        } else {
            this.z4D("onerror", d4h)
        }
        this.bt5y()
    };
    b4f.De4i = function () {
        this.bt5y()
    };
    b4f.bSY5d = function (d4h) {
        if (d4h.keyCode == 13) this.EH5M()
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"), v4z = c4g("nej.j"), l4p = c4g("nm.x"), q4u = c4g("nm.d"), n4r = c4g("nm.l"), b4f, L5Q;
    n4r.bpy6s = NEJ.C();
    b4f = n4r.bpy6s.N5S(n4r.eo6i);
    L5Q = n4r.bpy6s.cs5x;
    b4f.cw5B = function () {
        this.cE6y()
    };
    b4f.bW5b = function () {
        this.ci5n();
        var i4m = a4e.H4L(this.o4s, "j-flag");
        this.iI8A = {
            limit: 301,
            parent: i4m[1],
            cache: {klass: q4u.ic8U, lkey: "playlist_new-" + GUser.userId, onlisterror: this.bpz6t.f4j(this)},
            item: {klass: "m-wgt-subscribe-item", cutStr: l4p.AN3x, escape: k4o.dH6B}
        };
        this.iK8C = {onsuccess: this.XW1x.f4j(this), onerror: this.dO6I.f4j(this)};
        h4l.s4w(i4m[0], "click", this.EH5M.f4j(this));
        h4l.s4w(i4m[1], "click", this.kH9y.f4j(this))
    };
    b4f.ch5m = function () {
        this.cf5k = "m-wgt-subscribe"
    };
    b4f.bl5q = function (e4i) {
        e4i.parent = e4i.parent || document.body;
        e4i.clazz = " m-layer-w2";
        e4i.title = "添加到歌单";
        e4i.draggable = !0;
        e4i.mask = !0;
        this.bn5s(e4i);
        this.XG1x = (e4i.tracks || []).reverse();
        this.iI8A.item.size = this.XG1x.length;
        this.iK8C.name = e4i.name || "";
        this.bTw5B = q4u.ws2x.A4E({onaddsuccess: this.Dd4h.f4j(this)});
        this.tR1x = q4u.ic8U.A4E({onlistload: this.cwX0x.f4j(this)});
        this.tR1x.bQa3x();
        k4o.bd5i(this.XG1x, function (p4t, r4v, i4m) {
            if (!k4o.lG9x(p4t)) {
                i4m[r4v] = this.bTw5B.eJ6D(p4t) || p4t
            }
        }, this)
    };
    b4f.cwX0x = function () {
        if (this.dK6E) this.dK6E.T5Y();
        this.dK6E = I4M.kk8c.A4E(this.iI8A)
    };
    b4f.EH5M = function () {
        this.bt5y();
        if (this.Eg4k) this.Eg4k.T5Y();
        this.Eg4k = n4r.Zt2x.A4E(this.iK8C);
        this.Eg4k.J4N()
    };
    b4f.kH9y = function () {
        var cwV0x = function (g4k) {
            while (g4k && g4k != document) {
                if (g4k.tagName.toLowerCase() == "li") {
                    return g4k
                }
                g4k = g4k.parentNode
            }
        };
        return function (d4h) {
            h4l.cn5s(d4h);
            var F4J = h4l.X5c(d4h), Ae3x = cwV0x(F4J);
            if (!!Ae3x && !a4e.bE5J(Ae3x, "dis")) {
                this.XW1x({id: a4e.t4x(Ae3x, "id")})
            }
        }
    }();
    b4f.XW1x = function (d4h) {
        var C4G = d4h.id;
        if (!C4G || !this.XG1x.length) return;
        this.bTw5B.jI8A({key: "track_playlist-" + C4G, data: {tracks: this.XG1x, pid: C4G}});
        this.bt5y()
    };
    b4f.Dd4h = function () {
        this.z4D("onsuccess");
        n4r.Z5e.J4N({tip: "收藏成功"})
    };
    b4f.dO6I = function (d4h) {
        this.bt5y();
        this.z4D("onerror", d4h);
        var cU6O = "收藏失败";
        switch (d4h.code) {
            case 405:
                cU6O = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                cU6O = "歌单数量超过限制";
                break;
            case 502:
                cU6O = "歌曲已经存在"
        }
        n4r.Z5e.J4N({tip: cU6O, type: 2})
    };
    b4f.bpz6t = function () {
        this.bt5y();
        n4r.Z5e.J4N({tip: "列表下载失败，请稍后再试", type: 2})
    };
    l4p.ms9j = function (e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n4r.bpy6s.J4N(e4i)
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, dy6s = c4g("nej.p"), a4e = c4g("nej.e"), h4l = c4g("nej.v"),
        v4z = c4g("nej.j"), k4o = c4g("nej.u"), l4p = c4g("nm.x");
    var bqR7K, ox0x, Y5d = decodeURIComponent(location.href),
        jZ8R = /.+(https?:\/\/.+\/proxy.html)/.test(Y5d) ? RegExp.$1 : "";
    if (!!jZ8R) {
        v4z.vF2x("mail_proxy_url", jZ8R)
    } else {
        jZ8R = v4z.tu1x("mail_proxy_url") || "about:blank"
    }
    bqR7K = a4e.YH2x({
        src: jZ8R, onload: function () {
            ox0x = true
        }
    });
    var bTM5R = function () {
        v4z.gx7q("USER_TRIGGER", {value: true, expire: 1 / (24 * 60), path: "/"})
    };
    var cwU0x = function () {
        if (dy6s.dr6l.browser == "ie" && parseInt(dy6s.dr6l.version) < 9) {
            l4p.fs7l({clazz: "m-layer-w2", message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"});
            return false
        }
        return true
    };
    l4p.Js6m = function (u4y, C4G, V5a) {
        if (!cwU0x()) return;
        bTM5R();
        if (V5a == "stop") {
            if (!ox0x) throw"proxy not loaded";
            bTM5R();
            bqR7K.contentWindow.location.replace(jZ8R + "#" + k4o.cD6x({
                to: "ifrmMusic",
                message: JSON.stringify({s: +(new Date), action: "stop"})
            }))
        } else {
            bqR7K.contentWindow.location.replace(jZ8R + "#" + k4o.cD6x({
                to: "ifrmMusic",
                message: JSON.stringify({type: u4y, id: C4G, s: +(new Date), action: V5a})
            }))
        }
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, a4e = c4g("nej.e"), h4l = c4g("nej.v"), v4z = c4g("nej.j"),
        k4o = c4g("nej.u"), l4p = c4g("nm.x"), n4r = c4g("nm.l"), q4u = c4g("nm.d");
    var kI9z = q4u.hO8G.A4E();
    var oz0x = q4u.ws2x.A4E({onlistload: cwT0x, onitemload: cwS0x, onerror: dO6I});
    var DY4c = q4u.rb0x.A4E({onlistload: cwR0x, onitemload: cwQ0x, onerror: dO6I});
    var bUw6q = {};

    function wt2x(d4h) {
        var g4k = h4l.X5c(d4h, "d:resAction"), V5a = a4e.t4x(g4k, "resAction");
        if (g4k && (V5a == "play" || V5a == "addto")) {
            var u4y = parseInt(a4e.t4x(g4k, "resType"));
            bUE6y({
                action: V5a,
                type: u4y,
                id: a4e.t4x(g4k, "resId"),
                from: a4e.t4x(g4k, "resFrom"),
                data: a4e.t4x(g4k, "resData"),
                order: a4e.t4x(g4k, "resOrder"),
                node: g4k
            });
            if (u4y != 13) bUF6z(g4k)
        }
    }

    function bUE6y(bR5W) {
        var V5a = bR5W.action, u4y = bR5W.type, C4G = bR5W.id, ee6Y = bR5W.from, j4n = bR5W.data, ug1x = bR5W.order,
            e4i = {
                limit: 1e3,
                offset: 0,
                data: {id: C4G},
                ext: {id: C4G, action: V5a, type: u4y, from: ee6Y, data: j4n, node: bR5W.node}
            };
        if (V5a != "play" && V5a != "addto" || !u4y) return;
        if (window.GRef && GRef == "mail") {
            l4p.Js6m(u4y, C4G, V5a);
            return
        }
        switch (u4y) {
            case 13:
                e4i.key = "track_playlist-" + C4G;
                oz0x.lO9F(e4i);
                break;
            case 17:
                e4i.key = "program";
                e4i.id = C4G;
                DY4c.XY1x(e4i);
                if (V5a == "play") {
                    v4z.bm5r("/api/dj/program/listen", {query: {id: C4G}})
                }
                break;
            case 18:
                e4i.key = "track";
                e4i.id = C4G;
                oz0x.XY1x(e4i);
                break;
            case 19:
                e4i.key = "track_album-" + C4G;
                oz0x.lO9F(e4i);
                break;
            case 24:
                e4i.key = "track_day";
                oz0x.lO9F(e4i);
                break;
            case 2:
                e4i.key = "track_artist_top-" + C4G;
                oz0x.lO9F(e4i);
                break;
            case 70:
                e4i.key = "program_djradio-" + C4G + "-" + ug1x;
                e4i.data.radioId = C4G;
                e4i.data.asc = ug1x == 2;
                DY4c.lO9F(e4i);
                break
        }
    }

    function bUJ6D(i4m) {
        var m4q = [];
        k4o.bd5i(i4m, function (p4t) {
            if (p4t.mainSong) {
                p4t.mainSong.program = p4t;
                m4q.push(p4t.mainSong);
                p4t.localupdatetime = +(new Date);
                oz0x.cDI2x(p4t.mainSong);
                p4t.mainTrackId = p4t.mainSong.id;
                delete p4t.mainSong
            } else {
                var bUK6E = oz0x.eJ6D(p4t.mainTrackId);
                bUK6E && m4q.push(bUK6E)
            }
        });
        return m4q
    }

    function ZZ2x(i4m, e4i) {
        var rT1x = e4i.action == "play" && e4i.type != 17 && e4i.type != 18, gd7W = e4i.action == "play";
        if (!i4m.length) return;
        if (e4i.type == 19) {
            i4m = l4p.Lj7c(i4m, true, {play: true}, {source: "album", sourceid: e4i.id})
        } else {
            i4m = l4p.Lj7c(i4m, true, {play: true})
        }
        k4o.bd5i(i4m, function (p4t) {
            p4t.source = l4p.boQ6K({fid: e4i.from, fdata: e4i.data, type: e4i.type, rid: e4i.id}, p4t.id)
        });
        top.player.addTo(i4m, rT1x, gd7W);
        kI9z.QY9P({rid: e4i.id, type: e4i.type, hash: l4p.Kl6f(), play: gd7W, source: e4i.from, sourceid: e4i.data})
    }

    function cwT0x(d4h) {
        var ey6s = d4h.ext || {};
        i4m = oz0x.hD8v(d4h.key);
        ZZ2x(i4m, ey6s);
        if (ey6s.type == 13 && ey6s.action == "play" && i4m && i4m.length > 0) {
            bUF6z(ey6s.node);
            v4z.bm5r("/api/playlist/update/playcount", {query: {id: ey6s.id}})
        }
    }

    function cwS0x(d4h) {
        var i4m = [oz0x.eJ6D(d4h.id)], bj5o = i4m[0], qz0x = l4p.qq0x(bj5o), uj1x = bj5o.privilege || {};
        if (qz0x == 10) {
            l4p.uX2x(uj1x.fee || bj5o.fee, bj5o.id, "song", null, uj1x)
        } else if (qz0x == 100) {
            l4p.iu8m(null, null, null, true, bj5o)
        } else if (qz0x == 11) {
            l4p.bFB1x(bj5o.id, 18)
        } else {
            ZZ2x(i4m, d4h.ext)
        }
    }

    function cwR0x(d4h) {
        var i4m = bUJ6D(DY4c.hD8v(d4h.key));
        ZZ2x(i4m, d4h.ext)
    }

    function cwQ0x(d4h) {
        var i4m = bUJ6D([DY4c.eJ6D(d4h.id)]);
        ZZ2x(i4m, d4h.ext)
    }

    function dO6I() {
        top.player.tipPlay("无法播放，音乐已下线")
    }

    function bUF6z(g4k) {
        var u4y = a4e.t4x(g4k, "resType"), C4G = a4e.t4x(g4k, "resId"), K4O = u4y + "-" + C4G;
        if (bUw6q[K4O]) return;
        var bUV6P = a4e.B4F("play-count"), btf7Y = a4e.H4L(g4k.parentNode, "nb"), Rc9T = null;
        if (bUV6P) {
            Rc9T = bUV6P
        } else {
            Rc9T = !!btf7Y && !!btf7Y[0] ? btf7Y[0] : null
        }
        if (Rc9T) {
            var cz5E = Rc9T.innerHTML;
            if (/^\d+$/.test(cz5E)) {
                Rc9T.innerText = +cz5E + 1
            }
            bUw6q[K4O] = true
        }
    }

    l4p.cwP0x = function (g4k) {
        h4l.s4w(g4k || document.body, "click", wt2x.f4j(this))
    };
    l4p.cwO0x = function (V5a, u4y, C4G) {
        bUE6y({action: V5a, type: u4y, id: C4G})
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, h4l = c4g("nej.v"), k4o = c4g("nej.u"), v4z = c4g("nej.j"),
        I4M = c4g("nej.ut"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), b4f, L5Q;
    q4u.fp7i({
        "share-all": {
            url: "/api/share/friends/resource", format: function (m4q, e4i) {
                this.cwM0x(m4q, e4i)
            }, onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns", format: function (m4q, e4i) {
                this.z4D("onshareall", e4i.result)
            }, onerror: function (m4q, e4i) {
                this.z4D("onshareall", e4i.result)
            }
        },
        "share-private": {url: "/api/msg/private/send", onload: "onshareprivate", onerror: "onshareerror"},
        share_img_compound: {
            url: "/upload/event/img/compound", type: "POST", format: function (m4q, e4i) {
                e4i.options.picUrl = m4q.picUrl;
                this.bVj6d(e4i.options, e4i.result)
            }, onerror: function (m4q, e4i) {
                this.z4D("onshareall", e4i.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get", format: function (Q5V, e4i) {
                this.qu0x("vid_info-" + e4i.data.nosKey, Q5V);
                return Q5V
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit", filter: function (e4i) {
            }, format: function (m4q, e4i) {
                e4i.data = e4i.data2;
                this.cp5u("share-all", e4i)
            }, onerror: "onshareerror"
        }
    });
    q4u.bug8Y = NEJ.C();
    b4f = q4u.bug8Y.N5S(q4u.hJ8B);
    b4f.cwL0x = function () {
        var vU2x = function (Q5V, e4i) {
            e4i.times++;
            if (e4i.times > 10) {
                this.z4D("onvinfoerror", e4i.key, Q5V)
            } else {
                setTimeout(ev6p.f4j(this, e4i), e4i.times * 1e3)
            }
        };
        var Aw3x = function (Q5V, e4i) {
            this.z4D("onvinfo", e4i.key, Q5V)
        };
        var ev6p = function (e4i) {
            var Y5d = e4i.url;
            v4z.bm5r(Y5d + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: Aw3x.eA6u(this, e4i),
                onerror: vU2x.eA6u(this, e4i)
            })
        };
        return function (e4i) {
            e4i.times = 0;
            ev6p.call(this, e4i)
        }
    }();
    b4f.cGu2x = function () {
        var DD4H;
        var vU2x = function (Q5V, e4i) {
            if (Q5V.code > 0) {
                clearInterval(this.DB4F);
                this.z4D("onviderror", e4i.data.nosKey)
            }
        };
        var Aw3x = function (K4O, Q5V) {
            if (Q5V.vid && Q5V.covers) {
                clearInterval(this.DB4F);
                this.z4D("onvid", K4O, Q5V)
            }
        };
        var ev6p = function (e4i) {
            if (+(new Date) - DD4H > 60 * 60 * 1e3) {
                clearInterval(this.DB4F);
                this.z4D("onviderror", e4i.data.nosKey);
                return
            }
            e4i.onload = Aw3x.f4j(this, e4i.data.nosKey);
            e4i.onerror = vU2x.f4j(this);
            this.cp5u("vid-get", e4i)
        };
        return function (e4i) {
            if (!e4i || !e4i.data) return;
            DD4H = +(new Date);
            this.DB4F = clearInterval(this.DB4F);
            this.DB4F = setInterval(ev6p.f4j(this, e4i), 1e4);
            ev6p.apply(this, arguments)
        }
    }();
    b4f.cwI0x = function () {
        this.DB4F = clearInterval(this.DB4F)
    };
    b4f.cwM0x = function (m4q, ot0x) {
        if (m4q.event && ot0x.snsTypes) {
            if (ot0x.pics) {
                var bVH6B = [];
                for (var i = 0, len = ot0x.pics.length; i < len; i++) {
                    bVH6B[i] = ot0x.pics[i].originId
                }
                this.cp5u("share_img_compound", {data: {picIds: bVH6B.join(",")}, options: ot0x, result: m4q})
            } else {
                ot0x.picUrl = ot0x.picUrl;
                this.bVj6d(ot0x, m4q)
            }
        } else {
            this.z4D("onshareall", m4q)
        }
        var wd2x = q4u.hO8G.A4E();
        wd2x.eV7O(ot0x.isPub ? "pubevent" : "shareevent", {id: m4q.id})
    };
    b4f.bVj6d = function (ot0x, m4q) {
        var ct5y = {}, d4h = m4q.event || {};
        ct5y.eventid = d4h.id;
        ct5y.eventtype = d4h.type;
        ot0x.picUrl && (ct5y.picUrl = ot0x.picUrl);
        ct5y.snsTypes = ot0x.snsTypes;
        ct5y.msg = ot0x.data.msg || "";
        ct5y.type = ot0x.data.type;
        ot0x.data.id && (ct5y.id = ot0x.data.id);
        if (ct5y.eventtype == 41) {
            var Q5V = l4p.GA5F(d4h.json);
            ct5y.eventtype = 39;
            if (ct5y.msg) {
                ct5y.msg += "  "
            }
            ct5y.msg += "分享" + Q5V.video.creator.nickname + "的视频《" + Q5V.video.title + "》";
            delete ct5y.id
        }
        this.cp5u("share-sns", {data: ct5y, result: m4q})
    };
    b4f.cwH0x = function (e4i) {
        var j4n = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            checkToken: "",
            uuid: "publish-" + +(new Date) + k4o.ol0x(5)
        };
        j4n = NEJ.EX(j4n, e4i);
        if (j4n.id < 0) {
            delete j4n.id;
            j4n.type = "noresource"
        }
        if (!j4n.threadId) {
            delete j4n.threadId
        }
        if (!j4n.actId) {
            delete j4n.actId
        }
        if (!j4n.pics) {
            delete j4n.pics
        } else {
            j4n.pics = JSON.stringify(j4n.pics)
        }
        this.cp5u("share-all", {
            data: j4n,
            snsTypes: e4i.snsTypes,
            picUrl: e4i.picUrl,
            pics: e4i.pics,
            isPub: e4i.isPub
        })
    };
    b4f.cwG0x = function (e4i) {
        this.cp5u("share-private", e4i)
    };
    b4f.cwE0x = function (e4i) {
        this.cp5u("video-submit", e4i)
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, h4l = c4g("nej.v"), k4o = c4g("nej.u"), I4M = c4g("nej.ut"),
        q4u = c4g("nm.d"), l4p = c4g("nm.x"), n4r = c4g("nm.l"), b4f, L5Q;
    var cwD0x = {40: !0};
    q4u.fp7i({
        "event-list": {
            url: "/api/v1/event/get", filter: function (e4i) {
                e4i.data.getcounts = true;
                e4i.data.pagesize = e4i.data.limit;
                if (e4i.data.offset == 0) {
                    e4i.data.lasttime = -1
                }
                delete e4i.data.offset
            }, format: function (Q5V, e4i) {
                Q5V.event = l4p.ben4r(Q5V.event, function (p4t, r4v) {
                    return !cwD0x[p4t.type]
                });
                this.cwC0x(Q5V.event);
                e4i.data.lasttime = Q5V.lasttime;
                if (Q5V.event.length) {
                    Q5V.event.length = e4i.limit
                }
                return {list: Q5V.event, total: Q5V.size}
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews", format: function (Q5V, e4i) {
                return {list: Q5V.events, total: Q5V.count}
            }
        },
        "event-pull": {
            url: "/api/event/getnews", filter: function (e4i) {
                e4i.data.pagesize = 20
            }, format: function (Q5V, e4i) {
                return Q5V.event
            }
        },
        "ievent-get": {type: "GET", url: "/api/event/get", onload: "oneventload", onerror: "oneventloaderror"},
        "ievent-new-get": {type: "GET", url: "/api/event/getnews", onload: "oneventnewload"},
        "ievent_user-list": {
            type: "GET", url: "/api/event/get/{userId}", filter: function (e4i) {
                if (e4i.data.offset == 0) {
                    e4i.data.time = -1
                }
                delete e4i.data.offset;
                e4i.data.getcounts = true
            }, format: function (Q5V, e4i) {
                e4i.data.time = Q5V.lasttime;
                var i4m = Q5V.events;
                if (Q5V.more && i4m.length < e4i.data.limit) {
                    i4m = this.Iw6q(i4m, e4i.data.limit)
                }
                return {list: i4m, total: Q5V.size}
            }
        },
        "ievent-res-get": {
            url: "/api/res/status", format: function (m4q, e4i) {
                m4q.conf = e4i.conf;
                return m4q
            }
        },
        "ievent-like": {
            url: "/api/resource/like", onload: "oneventlike", filter: function (e4i, bh5m) {
                if (e4i.like) {
                    if (e4i.comment) {
                        bh5m.url = "/api/v1/comment/like"
                    } else {
                        bh5m.url = "/api/resource/like"
                    }
                    bh5m.onload = "oneventlike";
                    bh5m.onerror = "oneventlikeerr"
                } else {
                    if (e4i.comment) {
                        bh5m.url = "/api/v1/comment/unlike"
                    } else {
                        bh5m.url = "/api/resource/unlike"
                    }
                    bh5m.onload = "oneventunlike";
                    bh5m.onerror = "oneventunlikeerr"
                }
            }, format: function (m4q, e4i) {
                m4q.eid = e4i.eid;
                m4q.origin = e4i.origin;
                m4q.ext = e4i.ext;
                return m4q
            }, onmessage: function (bY5d, m4q) {
                if (bY5d == 250) {
                    n4r.Z5e.J4N({tip: m4q.message || m4q.msg || "点赞异常", type: 2});
                    return
                }
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete", format: function (m4q, e4i) {
                m4q.id = e4i.data.id;
                return m4q
            }
        },
        "event-del": {
            url: "/api/event/delete", filter: function (e4i, bh5m) {
                if (e4i.data.type == "nointer") {
                    bh5m.url = "/api/event/rcmd/reject"
                } else if (e4i.data.transcoding) {
                    bh5m.url = "/api/event/video/transcoding/delete"
                } else {
                    bh5m.url = "/api/event/delete"
                }
            }, format: function (m4q, e4i) {
                m4q.id = e4i.data.id;
                return m4q
            }
        },
        "event_activity-del": {
            url: "/api/event/delete", format: function (m4q, e4i) {
                m4q.id = e4i.data.id;
                return m4q
            }
        },
        "event_activity-list": {
            url: "/api/act/event", filter: function (e4i) {
                e4i.data.lasttime = e4i.data.lasttime || -1;
                e4i.data.pagesize = e4i.data.limit;
                e4i.data.getcounts = true;
                delete e4i.data.offset
            }, format: function (Q5V, e4i) {
                e4i.data.lasttime = Q5V.lasttime;
                var i4m = Q5V.events;
                if (Q5V.more) i4m = this.Iw6q(i4m, e4i.data.pagesize);
                return {list: i4m, total: Q5V.size}
            }, onerror: "onlisterror"
        }
    });
    q4u.Au3x = NEJ.C();
    b4f = q4u.Au3x.N5S(q4u.hJ8B);
    b4f.cw5B = function () {
        this.cE6y()
    };
    b4f.bvM8E = function (u4y, cS6M) {
        return u4y + "-" + cS6M
    };
    b4f.cGv2x = function (e4i) {
        this.cp5u("ievent-get", e4i)
    };
    b4f.cGx2x = function (e4i) {
        this.cp5u("ievent-new-get", e4i)
    };
    b4f.cGy2x = function (e4i) {
        this.cp5u("ievent-user-get", e4i)
    };
    b4f.cGz2x = function (u4y, cS6M) {
        return this.rC1x(this.bvM8E(u4y, cS6M))
    };
    b4f.cGA2x = function (IR6L, e4i) {
        if (!IR6L || !IR6L.length) return;
        e4i = e4i || {};
        var bz5E = {song: 2, album: 4, playlist: 1, mv: 3, program: 5};
        for (var i = 0, GC5H = [], byC9t = [], j4n; i < IR6L.length; ++i) {
            j4n = IR6L[i];
            j4n = this.rC1x(this.bvM8E(j4n.type, j4n.id));
            if (!j4n) {
                GC5H.push(IR6L[i].id);
                byC9t.push(bz5E[IR6L[i].type] || 0)
            }
        }
        if (!GC5H.length) {
            this.z4D("oneventresload", e4i.conf);
            return
        }
        e4i.data = {ids: JSON.stringify(GC5H), types: JSON.stringify(byC9t)};
        e4i.onload = this.cwu0x.f4j(this);
        this.cp5u("ievent-res-get", e4i)
    };
    b4f.cwu0x = function (m4q) {
        if (m4q.code != 200) {
            this.z4D("oneventreserror", m4q.code);
            return
        }
        var bz5E = {1: "playlist", 2: "song", 3: "mv", 4: "album", 5: "program"};
        for (var i = 0, i4m = m4q.results; i < i4m.length; ++i) {
            this.qu0x(this.bvM8E(bz5E[i4m[i].type], i4m[i].id), i4m[i])
        }
        this.z4D("oneventresload", m4q.conf)
    };
    b4f.byE9v = function (j4n) {
        var K4O = "event-list";
        this.blh5m(K4O, j4n);
        this.z4D("onitemadd", {key: K4O, action: "add", data: j4n, flag: -1})
    };
    b4f.ps0x = function (e4i) {
        this.cp5u("ievent-like", e4i)
    };
    b4f.mB9s = function (e4i) {
        this.cp5u("ievent-delete", e4i)
    };
    b4f.Iw6q = function (i4m, gc7V) {
        for (var i = i4m.length; i < gc7V; i++) i4m.push(null);
        return i4m
    };
    b4f.cwC0x = function (i4m) {
        var m4q = [];
        if (!i4m || !i4m.length) return;
        k4o.bd5i(i4m, function (d4h) {
            d4h.biData = this.byG9x(d4h)
        }, this)
    };
    b4f.byG9x = function () {
        var ZW2x = {32: "comment", 33: "activity", 34: "recomment_artist"},
            cws0x = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function (d4h) {
            var Q5V = {
                id: d4h.id,
                sourceid: d4h.user.userId,
                alg: d4h.rcmdInfo ? d4h.rcmdInfo.alg : null,
                contentType: ZW2x[d4h.type] || (k4o.di6c(cws0x, d4h.type) != -1 ? "user_event" : "other")
            };
            return Q5V
        }
    }();
    b4f.DS4W = function (cwp3x, d4h) {
        var Q5V = this.byG9x(d4h);
        Q5V.actionType = cwp3x;
        if (window.log) log("eventclick", Q5V)
    };
    b4f.cGC2x = function (e4i) {
        this.cp5u("event_latest-list", e4i)
    }
})();
(function (factory) {
    window.SparkMD5 = factory()
})(function (undefined) {
    "use strict";
    var add32 = function (a, b) {
        return a + b & 4294967295
    }, hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }

    function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0
    }

    function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
        }
        return md5blks
    }

    function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
        }
        return md5blks
    }

    function md51(s) {
        var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)))
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function md51_array(a) {
        var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function rhex(n) {
        var s = "", j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
        }
        return s
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i])
        }
        return x.join("")
    }

    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function (x, y) {
            var lsw = (x & 65535) + (y & 65535), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }

            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray,
                    sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);
                return target
            }
        })()
    }

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str))
        }
        return str
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i)
        }
        return returnUInt8Array ? arr : buff
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer
    }

    function hexToBinaryString(hex) {
        var bytes = [], length = hex.length, x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16))
        }
        return String.fromCharCode.apply(String, bytes)
    }

    function SparkMD5() {
        this.reset()
    }

    SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this
    };
    SparkMD5.prototype.appendBinary = function (contents) {
        this.rH1x += contents;
        this.bq5v += contents.length;
        var length = this.rH1x.length, i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dR6L, md5blk(this.rH1x.substring(i - 64, i)))
        }
        this.rH1x = this.rH1x.substring(i - 64);
        return this
    };
    SparkMD5.prototype.end = function (raw) {
        var buff = this.rH1x, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.oV0x(tail, length);
        ret = hex(this.dR6L);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.prototype.reset = function () {
        this.rH1x = "";
        this.bq5v = 0;
        this.dR6L = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.prototype.getState = function () {
        return {buff: this.rH1x, length: this.bq5v, hash: this.dR6L}
    };
    SparkMD5.prototype.setState = function (state) {
        this.rH1x = state.buff;
        this.bq5v = state.length;
        this.dR6L = state.hash;
        return this
    };
    SparkMD5.prototype.destroy = function () {
        delete this.dR6L;
        delete this.rH1x;
        delete this.bq5v
    };
    SparkMD5.prototype.oV0x = function (tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dR6L, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bq5v * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dR6L, tail)
    };
    SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    };
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    SparkMD5.ArrayBuffer = function () {
        this.reset()
    };
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this.rH1x.buffer, arr, true), length = buff.length, i;
        this.bq5v += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dR6L, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.rH1x = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    };
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this.rH1x, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.oV0x(tail, length);
        ret = hex(this.dR6L);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this.rH1x = new Uint8Array(0);
        this.bq5v = 0;
        this.dR6L = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    };
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.oV0x = SparkMD5.prototype.oV0x;
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    return SparkMD5
});
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, a4e = c4g("nej.e"), h4l = c4g("nej.v"), v4z = c4g("nej.j"),
        em6g = c4g("nej.g"), k4o = c4g("nej.u"), fH7A = c4g("nej.n"), I4M = c4g("nej.ut"), l4p = c4g("nm.x"),
        q4u = c4g("nm.d"), iE8w = c4g("nm.x.nos"), w4A = c4g("nm.w");
    var cwn3x = 1024 * 256, cwm3x = 1024 * 1024 * 2, qN0x = {TOKEN_ERROR: -100, DNS_ERROR: -101},
        bzl9c = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : br5w,
        qP0x = {MD5_DONE: .2, TOKEN_GET: .22, DNS_GET: .24, UPLOADED: 1},
        jz8r = {AUDIO: "audio", IMAGE: "image", TXT: "txt", RAR: "rar", OTHER: "other", VIDEO: "video"};
    var oj0x = {};
    var wd2x = q4u.hO8G.A4E();
    iE8w.cGD2x = function () {
        return jz8r
    };
    var cwi3x = function () {
        return k4o.ol0x(6) + +(new Date)
    };
    var JR6L = function (iM8E, e4i) {
        if (!oj0x[e4i.taskId]) {
            return
        }
        (e4i.onuploading || br5w).call(this, iM8E)
    };
    var bqb7U = function (R5W) {
        var cwh3x = R5W.md5, cT6N = R5W.file, cwg3x = cwh3x + cT6N.size;
        return "nos_file_hash_" + cwg3x
    };
    var cwf3x = function (R5W) {
        var K4O = bqb7U(R5W), j4n = v4z.bLI2x(K4O, "{}");
        try {
            j4n = JSON.parse(j4n)
        } catch (e) {
            j4n = {}
        }
        return j4n
    };
    var cwe3x = function (R5W, e4i) {
        if (!R5W.md5) {
            return
        }
        var K4O = bqb7U(R5W), j4n = v4z.bLI2x(K4O, "{}");
        try {
            j4n = JSON.parse(j4n)
        } catch (e) {
            j4n = {}
        }
        NEJ.X(j4n, e4i);
        v4z.vF2x(K4O, JSON.stringify(j4n))
    };
    var cwd3x = function (R5W) {
        var K4O = bqb7U(R5W);
        v4z.LP7I(K4O)
    };
    var cwb3x = function (R5W, eN7G) {
        var Y5d = R5W.urls[Math.min(R5W.urlIndex, R5W.urls.length - 1)], cT6N = R5W.file, lo9f = R5W.bucket,
            mJ9A = R5W.objectKey, cG6A = R5W.token, bL5Q = R5W.context, pe0x = {},
            NU8M = bzl9c.call(cT6N, R5W.beg, R5W.end),
            bv5A = {offset: R5W.beg, complete: R5W.lastChunk || false, version: "1.0"};
        if (bL5Q) {
            bv5A.context = bL5Q
        }
        pe0x["x-nos-token"] = cG6A;
        pe0x[em6g.yg3x] = cT6N.type;
        R5W.reqId = v4z.bm5r(Y5d + "/" + lo9f + "/" + mJ9A, {
            type: "json",
            method: "POST",
            headers: pe0x,
            query: bv5A,
            data: NU8M,
            onload: eN7G.onload,
            onerror: eN7G.onerror
        })
    };
    var cwa3x = function (m4q, R5W, e4i) {
        m4q = {
            code: 200,
            fileName: e4i.file.name,
            size: e4i.file.size,
            type: e4i.file.type,
            bucket: R5W.bucket,
            docId: R5W.docId,
            objectKey: R5W.objectKey,
            url: "//nos.netease.com/" + R5W.bucket + "/" + R5W.objectKey
        };
        cwd3x(R5W);
        if (!oj0x[e4i.taskId]) {
            return
        }
        delete oj0x[e4i.taskId];
        wd2x.eV7O("sysaction", {type: "nosuploadsuccess", location: location.href, result: JSON.stringify(m4q)});
        (e4i.onsuccess || br5w).call(this, m4q)
    };
    var cvZ3x = function (m4q, e4i) {
        (e4i.onerror || br5w).call(this, m4q)
    };
    var cvW3x = function (m4q, R5W, e4i) {
        R5W.context = m4q.context;
        R5W.beg = m4q.offset;
        var iM8E = R5W.beg / R5W.file.size;
        cwe3x(R5W, {
            bucket: R5W.bucket,
            objectKey: R5W.objectKey,
            token: R5W.token,
            context: R5W.context,
            beg: R5W.beg,
            updateTime: +(new Date)
        });
        iM8E = qP0x.DNS_GET + (qP0x.UPLOADED - qP0x.DNS_GET) * iM8E;
        JR6L(iM8E, e4i);
        if (R5W.lastChunk) {
            cwa3x(m4q, R5W, e4i)
        } else {
            ZR2x(R5W, e4i)
        }
    };
    var cvV3x = function (m4q, R5W, e4i) {
        wd2x.eV7O("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: m4q.data,
            body: m4q.extData,
            ext: JSON.stringify(R5W),
            timging: +(new Date) - R5W.chuckUploadStartTime
        });
        if (R5W.urlIndex < Math.max(R5W.urls.length - 1, 5)) {
            R5W.urlIndex++;
            ZR2x(R5W, e4i)
        } else {
            cvZ3x(m4q, e4i)
        }
    };
    var ZR2x = function (R5W, e4i) {
        if (!R5W || R5W.step == -1) {
            return
        }
        R5W.end = R5W.beg + cwn3x;
        if (R5W.end >= R5W.file.size) {
            R5W.end = R5W.file.size;
            R5W.lastChunk = true
        }
        R5W.chuckUploadStartTime = +(new Date);
        cwb3x(R5W, {onload: cvW3x.eA6u(this, R5W, e4i), onerror: cvV3x.eA6u(this, R5W, e4i)})
    };
    var cvT3x = function (m4q, R5W, e4i) {
        R5W.beg = m4q.offset;
        var iM8E = R5W.beg / R5W.file.size;
        iM8E = qP0x.DNS_GET + (qP0x.UPLOADED - qP0x.DNS_GET) * iM8E;
        JR6L(iM8E, e4i);
        ZR2x(R5W, e4i)
    };
    var cvS3x = function (m4q, R5W, e4i) {
        R5W.beg = 0;
        delete R5W.context;
        boe6Y(R5W, e4i)
    };
    var bAh9Y = function (Pv9m, R5W, e4i) {
        R5W.lastChunk = false;
        R5W.urls = Pv9m;
        R5W.urlIndex = 0;
        JR6L(qP0x.DNS_GET, e4i);
        if (R5W.fromExist) {
            delete R5W.fromExist;
            var Y5d = R5W.urls[Math.min(R5W.urlIndex, R5W.urls.length - 1)], lo9f = R5W.bucket, mJ9A = R5W.objectKey,
                cG6A = R5W.token, bL5Q = R5W.context, pe0x = {}, bv5A = {context: bL5Q, version: "1.0"};
            pe0x["x-nos-token"] = cG6A;
            R5W.reqId = v4z.bm5r(Y5d + "/" + lo9f + "/" + mJ9A + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: pe0x,
                query: bv5A,
                onload: cvT3x.eA6u(this, R5W, e4i),
                onerror: cvS3x.eA6u(this, R5W, e4i)
            })
        } else {
            R5W.beg = 0;
            ZR2x(R5W, e4i)
        }
    };
    var cvN3x = function (m4q, R5W, e4i) {
        m4q.code = qN0x.DNS_ERROR;
        (e4i.onerror || br5w).call(this, m4q)
    };
    var bAk9b = function (j4n, e4i) {
        var m4q = j4n.result || {}, lo9f = m4q.bucket, mJ9A = m4q.objectKey, cG6A = m4q.token, R5W = oj0x[e4i.taskId];
        if (!lo9f || !mJ9A || !cG6A || !R5W) {
            m4q.code = qN0x.TOKEN_ERROR;
            (e4i.onerror || br5w).call(this, m4q);
            return
        }
        R5W.bucket = lo9f;
        R5W.objectKey = mJ9A;
        R5W.docId = m4q.docId;
        R5W.token = cG6A;
        JR6L(qP0x.TOKEN_GET, e4i);
        if (location.protocol == "https:") {
            bAh9Y(["//nosup-hz1.127.net"], R5W, e4i)
        } else {
            R5W.reqId = iE8w.cvM3x({
                bucket: lo9f,
                onload: bAh9Y.eA6u(this, R5W, e4i),
                onerror: cvN3x.eA6u(this, R5W, e4i)
            })
        }
        R5W.step = 1
    };
    var cvL3x = function (m4q, e4i) {
        m4q.code = qN0x.TOKEN_ERROR;
        (e4i.onerror || br5w).call(this, m4q)
    };
    var boe6Y = function (R5W, e4i) {
        var cT6N = e4i.file, eP7I = cT6N.name || "", ey6s = eP7I.split(".").pop();
        iE8w.beI4M(NEJ.X({
            filename: eP7I,
            ext: ey6s,
            onload: bAk9b.eA6u(this, e4i),
            onerror: cvL3x.eA6u(this, e4i)
        }, e4i, function (p4t) {
            return k4o.gK7D(p4t) || k4o.lG9x(p4t)
        }))
    };
    var cvK3x = function (R5W, e4i) {
        if (!R5W || R5W.step == -1) {
            return
        }
        R5W.md5 = R5W.spark.end();
        var La7T = cwf3x(R5W) || {}, lo9f = La7T.bucket, mJ9A = La7T.objectKey, cG6A = La7T.token;
        if (!lo9f || !mJ9A || !cG6A) {
            boe6Y(R5W, e4i)
        } else {
            R5W.context = La7T.context;
            R5W.beg = La7T.beg;
            R5W.fromExist = true;
            bAk9b({result: La7T}, e4i)
        }
    };
    var cvJ3x = function (EG5L, R5W, e4i) {
        if (!R5W || R5W.step == -1) {
            return
        }
        R5W.beg = R5W.end;
        var iM8E = R5W.beg / R5W.file.size;
        iM8E = 0 + qP0x.MD5_DONE * iM8E;
        JR6L(iM8E, e4i);
        R5W.spark.append(EG5L.result);
        if (R5W.lastChunk) {
            cvK3x(R5W, e4i)
        } else {
            bAC9t(R5W, e4i)
        }
    };
    var cvI3x = function (m4q, R5W, e4i) {
        R5W.md5 = "";
        boe6Y(R5W, e4i)
    };
    var bAC9t = function (R5W, e4i) {
        if (!R5W || R5W.step == -1) {
            return
        }
        R5W.end = R5W.beg + cwm3x;
        if (R5W.end >= R5W.file.size) {
            R5W.end = R5W.file.size;
            R5W.lastChunk = true
        }
        var EG5L = new FileReader;
        EG5L.onload = cvJ3x.f4j(this, EG5L, R5W, e4i);
        EG5L.onerror = cvI3x.f4j(this, EG5L, R5W, e4i);
        EG5L.readAsArrayBuffer(bzl9c.call(R5W.file, R5W.beg, R5W.end))
    };
    iE8w.hP8H = function (e4i) {
        var cT6N = e4i.file, eP7I = cT6N.name || "", ey6s = eP7I.split(".").pop(), EI5N = cwi3x();
        e4i.taskId = EI5N;
        oj0x[EI5N] = {step: 0};
        JR6L(0, e4i);
        var R5W = oj0x[EI5N];
        R5W.id = EI5N;
        R5W.file = cT6N;
        R5W.beg = 0;
        R5W.lastChunk = false;
        R5W.spark = new SparkMD5.ArrayBuffer;
        var cvG3x = e4i.onerror || br5w;
        e4i.onerror = function () {
            if (!oj0x[EI5N]) {
                return
            }
            delete oj0x[EI5N];
            cvG3x.apply(this, arguments)
        };
        wd2x.eV7O("sysaction", {type: "nosuploadstart", location: location.href});
        bAC9t(R5W, e4i);
        return EI5N
    };
    iE8w.ky8q = function (C4G) {
        var R5W = oj0x[C4G];
        if (R5W) {
            if (R5W.step == 0) {
                delete oj0x[C4G]
            } else {
                R5W.step = -1;
                if (R5W.reqId) {
                    v4z.ky8q(R5W.reqId)
                }
                delete oj0x[C4G]
            }
        }
    };
    iE8w.beI4M = function () {
        var yX3x = function (m4q, e4i) {
            (e4i.onload || br5w).call(this, m4q)
        };
        var Az3x = function (m4q, e4i) {
            (e4i.onerror || br5w).call(this, m4q)
        };
        var bAN9E = JSON.stringify({code: 200, size: "$(ObjectSize)"});
        return function (e4i) {
            var XT1x = e4i.returnBody || bAN9E;
            if (k4o.lG9x(XT1x)) {
                try {
                    JSON.stringify(XT1x)
                } catch (e) {
                    XT1x = bAN9E
                }
            }
            return v4z.bm5r("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e4i.filename || "",
                    ext: e4i.ext || "",
                    type: e4i.type || jz8r.OTHER,
                    bucket: e4i.bucket || "",
                    local: e4i.local || false,
                    nos_product: e4i.nosProduct || 0,
                    return_body: XT1x
                },
                onload: yX3x.eA6u(this, e4i),
                onerror: Az3x.eA6u(this, e4i)
            })
        }
    }();
    iE8w.cvM3x = function () {
        var cvC3x = "//wanproxy.127.net/lbs";
        var yX3x = function (m4q, e4i) {
            if (m4q.lbs) {
            }
            var Pv9m = m4q.upload;
            if (!Pv9m || !Pv9m.length) {
                Az3x(m4q, e4i)
            }
            (e4i.onload || br5w).call(this, Pv9m)
        };
        var Az3x = function (m4q, e4i) {
            (e4i.onerror || br5w).call(this, m4q)
        };
        return function (e4i) {
            var lo9f = e4i.bucket;
            return v4z.bm5r(cvC3x, {
                method: "GET",
                type: "json",
                query: {version: "1.0", bucketname: lo9f},
                onload: yX3x.eA6u(this, e4i),
                onerror: Az3x.eA6u(this, e4i)
            })
        }
    }();
    iE8w.XV1x = function () {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), v4z = c4g("nej.j"),
        cb5g = c4g("nej.ut"), bD5I = c4g("nej.ui"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), iE8w = c4g("nm.x.nos"),
        E4I = c4g("nm.m"), n4r = c4g("nm.l"), w4A = c4g("nm.w"), b4f, L5Q;
    var ge7X = a4e.jm8e('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    w4A.LI7B = NEJ.C();
    b4f = w4A.LI7B.N5S(bD5I.el6f);
    b4f.ch5m = function () {
        this.cf5k = ge7X
    };
    b4f.bW5b = function () {
        this.ci5n();
        this.bH5M = this.o4s;
        this.hz8r = a4e.H4L(this.o4s, "j-file")[0];
        h4l.s4w(this.hz8r, "change", this.pE0x.f4j(this))
    };
    b4f.bl5q = function (e4i) {
        e4i = e4i || {};
        this.bn5s(e4i);
        this.hz8r.id = e4i.inputId || "";
        this.hz8r.accept = e4i.accept || "*";
        this.wK2x = e4i
    };
    b4f.baJ3x = function () {
        return a4e.lP9G(this.hz8r)
    };
    b4f.pE0x = function (d4h) {
        if (this.hz8r.value == "") return;
        var kK9B = this.hz8r.value.split("\\"), eP7I = kK9B.length > 0 ? kK9B[kK9B.length - 1] : kK9B[0],
            oD0x = (this.hz8r.files || [{}])[0];
        var cm5r = {files: this.hz8r.files, filename: eP7I, size: oD0x.size, cancelUpload: false};
        this.z4D("onchange", cm5r);
        if (cm5r.cancelUpload) {
            this.hz8r.value = "";
            return
        }
        if (cm5r.stopped) {
            return
        }
        this.Tu0x()
    };
    b4f.Tu0x = function () {
        if (this.hz8r.value == "") return;
        var kK9B = this.hz8r.value.split("\\"), eP7I = kK9B.length > 0 ? kK9B[kK9B.length - 1] : kK9B[0],
            ey6s = (eP7I.split(".") || []).pop(), oD0x = (this.hz8r.files || [{}])[0],
            EW5b = (oD0x.type || "").split("/").shift();
        if (oD0x.size > 100 * 1024 * 1024) {
            return this.lX9O("onerror", {code: -200})
        }
        this.z4D("onuploading", 0);
        this.bBD0x = iE8w.beI4M(NEJ.X({
            onload: this.TB0x.eA6u(this, eP7I),
            onerror: this.lX9O.f4j(this)
        }, this.wK2x, function (p4t) {
            return k4o.gK7D(p4t) || k4o.lG9x(p4t)
        }))
    };
    b4f.TB0x = function (bN5S, eP7I) {
        var m4q = bN5S.result || {}, lo9f = m4q.bucket, mJ9A = m4q.objectKey, cG6A = m4q.token;
        if (!lo9f || !mJ9A || !cG6A) {
            bN5S.code = -100;
            this.lX9O.call(this, bN5S);
            return
        }
        var oD0x = (this.hz8r.files || [{}])[0];
        var hM8E = a4e.dk6e(this.bH5M);
        hM8E[0].value = mJ9A;
        hM8E[1].value = cG6A;
        hM8E[2].value = "json";
        if (oD0x.type && oD0x.type.indexOf("audio") == 0) {
            hM8E[3].value = "audio/mpeg"
        } else {
            hM8E[3].value = oD0x.type || ""
        }
        this.bH5M.action = "//nos.netease.com/" + lo9f;
        this.Fa5f = m4q;
        this.rx1x = eP7I;
        this.z4D("onuploading", .2);
        this.hP8H()
    };
    b4f.hP8H = function () {
        this.bBD0x = v4z.hP8H(this.bH5M, {
            type: "json",
            onload: this.vL2x.f4j(this),
            onerror: this.lX9O.f4j(this),
            onuploading: this.bcf3x.f4j(this)
        })
    };
    b4f.ky8q = function () {
        v4z.ky8q(this.bBD0x);
        this.bH5M.reset()
    };
    b4f.vL2x = function (bN5S) {
        var cG6A = this.Fa5f, eP7I = this.rx1x, oD0x = (this.hz8r.files || [{}])[0], kx8p = {
            code: 200,
            fileName: eP7I,
            size: oD0x.size,
            bucket: cG6A.bucket,
            docId: cG6A.docId,
            objectKey: cG6A.objectKey,
            url: "//nos.netease.com/" + cG6A.bucket + "/" + cG6A.objectKey
        };
        if (!bN5S) {
            bN5S = kx8p
        }
        if (!bN5S.code || bN5S.code == 200) {
            this.z4D("onsuccess", NEJ.X(kx8p, bN5S))
        } else {
            this.z4D("onerror", bN5S)
        }
        this.bH5M.reset()
    };
    b4f.lX9O = function (bN5S) {
        this.z4D("onerror", bN5S);
        this.bH5M.reset()
    };
    b4f.bcf3x = function (iM8E) {
        this.z4D("onuploading", .2 + iM8E.loaded / iM8E.total * .8)
    }
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), v4z = c4g("nej.j"),
        cb5g = c4g("nej.ut"), bD5I = c4g("nej.ui"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), iE8w = c4g("nm.x.nos"),
        E4I = c4g("nm.m"), n4r = c4g("nm.l"), w4A = c4g("nm.w"), b4f, L5Q;
    w4A.Ui0x = NEJ.C();
    b4f = w4A.Ui0x.N5S(cb5g.cJ6D);
    b4f.bl5q = function (e4i) {
        e4i = e4i || {};
        this.bn5s(e4i);
        this.bcm3x = w4A.LI7B.A4E(NEJ.X({
            parent: e4i.parent,
            onchange: this.pE0x.f4j(this),
            onuploading: this.z4D.f4j(this, "onuploading"),
            onsuccess: this.z4D.f4j(this, "onsuccess"),
            onerror: this.z4D.f4j(this, "onerror")
        }, e4i, function (p4t) {
            return k4o.gK7D(p4t) || k4o.lG9x(p4t)
        }));
        if (e4i.multiple && iE8w.XV1x()) {
            a4e.gJ7C(this.bcm3x.baJ3x(), "multiple", true)
        }
        this.wK2x = e4i
    };
    b4f.pE0x = function (e4i) {
        var eP7I = e4i.filename, ey6s = (eP7I.split(".") || []).pop();
        this.bCb0x = (e4i.files || [{}])[0];
        this.z4D("onchange", e4i);
        if (iE8w.XV1x() && !e4i.stopped && !e4i.cancelUpload) {
            this.Tu0x(true);
            e4i.stopped = true
        }
    };
    b4f.baJ3x = function () {
        return this.bcm3x.baJ3x()
    };
    b4f.cvB3x = function () {
        return this.bCb0x
    };
    b4f.Tu0x = function (fa7T, cT6N) {
        cT6N = cT6N || this.bCb0x;
        if (iE8w.XV1x()) {
            this.bCd0x = iE8w.hP8H(NEJ.X({
                file: cT6N,
                local: this.wK2x.bucket && this.wK2x.bucket.length,
                onuploading: this.z4D.f4j(this, "onuploading"),
                onsuccess: this.z4D.f4j(this, "onsuccess"),
                onerror: this.z4D.f4j(this, "onerror")
            }, this.wK2x, function (p4t) {
                return k4o.gK7D(p4t) || k4o.lG9x(p4t)
            }));
            return this.bCd0x
        } else if (!fa7T) {
            this.bcm3x.Tu0x()
        }
    };
    b4f.ky8q = function (C4G) {
        C4G = C4G || this.bCd0x;
        if (C4G) {
            iE8w.ky8q(C4G)
        }
        this.bcm3x.ky8q()
    }
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), em6g = c4g("nej.g"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        v4z = c4g("nej.j"), fH7A = c4g("nej.n"), I4M = c4g("nej.ut"), bc5h = c4g("nej.ui"), w4A = c4g("nm.w"),
        n4r = c4g("nm.l"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), M5R = c4g("nm.x.f"), iE8w = c4g("nm.x.nos"), b4f, L5Q,
        bhm4q = {0: "", "-1": "不能添加重复图片", "-10": "最多只能添加9张", "-3": "请选择不超过5M的图片"}, bhg4k = 5 * 1024 * 1024, cGE2x = 80,
        bdh3x = /\.(bmp|jpg|jpeg|png|gif)$/i;
    w4A.bCk0x = NEJ.C();
    b4f = w4A.bCk0x.N5S(I4M.wb2x);
    b4f.bhl4p = function () {
        return {x: this.Bk4o.clientWidth - this.o4s.offsetWidth, y: this.Bk4o.clientHeight - this.o4s.offsetHeight}
    };
    w4A.bgY4c = NEJ.C();
    b4f = w4A.bgY4c.N5S(bc5h.el6f);
    b4f.ch5m = function () {
        this.cf5k = "m-xwgt-share-upload"
    };
    b4f.bW5b = function () {
        this.ci5n();
        var i4m = a4e.H4L(this.o4s, "j-flag");
        this.bef4j = i4m.shift();
        this.MR7K = i4m.shift();
        this.VL1x = i4m.shift();
        this.bCv0x = {
            onchange: this.bCC0x.eA6u(this, 0),
            onerror: this.dO6I.f4j(this),
            onsuccess: this.rA1x.f4j(this),
            multiple: true,
            parent: this.MR7K,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.bfD4H = {
            onchange: this.bCC0x.eA6u(this, 1),
            onerror: this.dO6I.f4j(this),
            onsuccess: this.rA1x.f4j(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.cvz3x = w4A.Ui0x.A4E(this.bCv0x)
    };
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.bfD4H.parent = e4i.button;
        this.MK7D && this.MK7D.T5Y();
        this.MK7D = w4A.Ui0x.A4E(this.bfD4H);
        this.o4s.style.display = "none";
        if (!!this.eY7R) {
            for (var i = this.eY7R.length - 1; i >= 0; i--) {
                a4e.cL6F(this.eY7R[i].element, false);
                if (this.eY7R[i].dragger) this.eY7R[i].dragger.T5Y()
            }
        }
        this.eY7R = [];
        if (this.Cr4v) {
            clearTimeout(this.Cr4v)
        }
        this.bea4e(0);
        this.UW1x = 0;
        this.bX5c([[this.bCv0x.parent, "click", this.bCX0x.f4j(this)], [this.bfD4H.parent, "click", this.bCX0x.f4j(this)]])
    };
    b4f.bC5H = function () {
        h4l.he7X(this.uf1x, "click");
        if (!!this.eY7R) {
            for (var i = this.eY7R.length - 1; i >= 0; i--) {
                a4e.cL6F(this.eY7R[i].element, false);
                if (this.eY7R[i].dragger) this.eY7R[i].dragger.T5Y()
            }
        }
        this.eY7R = [];
        if (this.Cr4v) {
            clearTimeout(this.Cr4v)
        }
        this.Cr4v = 0;
        this.MK7D && this.MK7D.T5Y();
        delete this.MK7D;
        this.bF5K()
    };
    b4f.bCX0x = function (d4h) {
        if (!iE8w.XV1x() && this.eY7R.doing) {
            h4l.bg5l(d4h)
        }
    };
    b4f.bCC0x = function (e4i, r4v) {
        var nE9v = e4i.files, ha7T;
        e4i.stopped = true;
        if (!nE9v) {
            if (e4i.filename) {
                nE9v = [{name: e4i.filename, isIE: true}]
            }
        }
        for (var i = 0, len = nE9v.length; i < len; i++) {
            if (!bdh3x.test(nE9v[i].name)) {
                this.bhF5K({path: nE9v[i].name, index: r4v, status: -4, fail: "这不是<br>图片"})
            } else if (nE9v[i].size > bhg4k) {
                this.bhO5T(-3);
                this.bhF5K({path: nE9v[i].name, index: r4v, status: -3, fail: "上传<br>失败"})
            } else {
                this.bhF5K({path: nE9v[i].name, file: nE9v[i], index: r4v, status: 0})
            }
        }
    };
    b4f.bhF5K = function (tV1x) {
        if (this.eY7R.length >= 9) {
            this.bhO5T(-10, 3e3, this.bDi0x.f4j(this));
            return
        }
        this.cvy3x(tV1x);
        this.eY7R.push(tV1x);
        if (!!this.eY7R.length) {
            this.o4s.style.display = ""
        }
        if (this.eY7R.length >= 9) {
            this.MR7K.style.display = "none"
        } else {
            this.MR7K.style.display = ""
        }
        this.Mo7h()
    };
    b4f.Mo7h = function () {
        var bim5r = -1, bDn0x = 0;
        for (var i = 0, l = this.eY7R.length; i < l; i++) {
            if (this.eY7R[i].status == 1) {
                return
            }
            if (this.eY7R[i].status == 0 && bim5r < 0) {
                bim5r = i
            }
            if (this.eY7R[i].status == 2 || this.eY7R[i].status < 0) {
                bDn0x++
            }
        }
        var p4t = this.eY7R[bim5r];
        if (p4t) {
            (p4t.index == 0 ? this.cvz3x : this.MK7D).Tu0x(false, p4t.file);
            p4t.status = 1;
            this.eY7R.doing = p4t;
            this.z4D("onstartupload", {})
        } else if (bDn0x == this.eY7R.length) {
            this.z4D("onfinishupload", {})
        }
    };
    b4f.biJ5O = function () {
        return this.eY7R.doing || {}
    };
    b4f.dO6I = function (d4h) {
        var tV1x = this.biJ5O();
        tV1x.status = -4;
        tV1x.fail = "上传<br>失败";
        this.bDq0x(tV1x);
        this.eY7R.doing = null;
        this.Mo7h()
    };
    b4f.rA1x = function (d4h) {
        var tV1x = this.biJ5O(), dQ6K = d4h.fileName.match(bdh3x);
        tV1x.picUrl = d4h.url;
        v4z.bm5r("/upload/event/img/v1", {
            query: {imgid: d4h.docId, format: dQ6K[1]},
            type: "json",
            onload: this.bDr0x.f4j(this),
            onerror: this.bDr0x.f4j(this)
        })
    };
    b4f.bDr0x = function (d4h) {
        if (d4h && d4h.code == 200 && d4h.picInfo) {
            var tV1x = this.biJ5O();
            tV1x.status = 2;
            var bx5C = NEJ.X({}, d4h.picInfo);
            bx5C.originId = bx5C.originIdStr;
            bx5C.squareId = bx5C.squareIdStr;
            bx5C.rectangleId = bx5C.rectangleIdStr;
            bx5C.pcSquareId = bx5C.pcSquareIdStr;
            bx5C.pcRectangleId = bx5C.pcRectangleIdStr;
            bx5C.originJpgId = bx5C.originJpgIdStr || bx5C.originJpgId;
            tV1x.picInfo = bx5C;
            this.bDq0x(tV1x);
            this.eY7R.doing = null;
            this.Mo7h()
        } else {
            this.dO6I(d4h)
        }
    };
    b4f.bhO5T = function (r4v, kX9O, eN7G) {
        if (this.UW1x < r4v) {
            return
        }
        if (this.Cr4v) {
            clearTimeout(this.Cr4v);
            this.Cr4v = 0
        }
        if (kX9O) {
            this.VL1x.innerText = bhm4q[r4v * 1];
            this.UW1x = r4v;
            this.Cr4v = setTimeout(this.bea4e.f4j(this, r4v, eN7G), kX9O)
        } else {
            this.VL1x.innerText = bhm4q[r4v];
            this.UW1x = r4v
        }
        this.VL1x.style.display = ""
    };
    b4f.bea4e = function (r4v, eN7G) {
        if (r4v && this.UW1x !== r4v) {
            return
        }
        this.UW1x = 0;
        this.VL1x.innerText = bhm4q[0];
        this.VL1x.style.display = "none";
        eN7G && eN7G()
    };
    b4f.cvy3x = function (cT6N) {
        var j4n = {};
        if (cT6N.fail) {
            j4n.fail = cT6N.fail
        }
        var dV6P = a4e.cd5i("m-xwgt-share-upload-preview", j4n);
        cT6N.element = a4e.nR0x(dV6P);
        h4l.s4w(a4e.H4L(cT6N.element, "del")[0], "mousedown", this.cvx3x.f4j(this, cT6N), false);
        this.bef4j.insertBefore(cT6N.element, this.bef4j.lastElementChild);
        cT6N.dragger = w4A.bCk0x.A4E({
            view: this.bef4j.parentNode,
            body: cT6N.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.UJ0x.f4j(this, cT6N),
            onchange: this.cvv3x.f4j(this, cT6N),
            ondragend: this.bgR4V.f4j(this, cT6N)
        })
    };
    b4f.bDq0x = function (cT6N) {
        if (!cT6N || !cT6N.element) {
            return false
        }
        var j4n = {};
        if (cT6N.fail) {
            j4n.fail = cT6N.fail
        } else {
            j4n.url = cT6N.picUrl
        }
        a4e.y4C(cT6N.element, "z-fail");
        cT6N.element.firstChild.outerHTML = a4e.cd5i("m-xwgt-share-upload-preview-img", j4n)
    };
    b4f.UJ0x = function (p4t, kW9N) {
        a4e.y4C(p4t.element, "z-sel")
    };
    b4f.cvv3x = function (p4t, kW9N) {
        var cGF2x, gt7m = this.eY7R.length - 1, nU0x;
        for (var i = gt7m; i >= 0; i--) {
            a4e.x4B(this.eY7R[i].element, "z-jump");
            if (this.eY7R[i] == p4t) {
                nU0x = i
            } else {
                a4e.fb7U(this.eY7R[i].element, {left: "", top: ""})
            }
        }
        var Tr0x = {x: 46 + 92 * (nU0x % 5) + kW9N.left, y: 46 + 92 * (nU0x / 5 >> 0) + kW9N.top};
        var bjN5S = Tr0x.x / 92 >> 0, bjQ5V = Tr0x.y / 92 >> 0, zi3x = Math.max(0, Math.min(gt7m, bjQ5V * 5 + bjN5S));
        if (zi3x == nU0x) {
            return
        }
        var cvs3x = zi3x < nU0x;
        for (var i = Math.min(zi3x, nU0x); i <= Math.max(zi3x, nU0x); i++) {
            if (i !== nU0x) {
                var bDL0x = i % 5;
                if (cvs3x) {
                    if (bDL0x == 4) {
                        a4e.fb7U(this.eY7R[i].element, {left: "-368px", top: "92px"})
                    } else {
                        a4e.fb7U(this.eY7R[i].element, {left: "92px", top: ""})
                    }
                } else {
                    if (bDL0x == 0) {
                        a4e.fb7U(this.eY7R[i].element, {left: "368px", top: "-92px"})
                    } else {
                        a4e.fb7U(this.eY7R[i].element, {left: "-92px", top: ""})
                    }
                }
            }
        }
    };
    b4f.bgR4V = function (p4t, kW9N) {
        var cGG2x, gt7m = this.eY7R.length - 1, nU0x;
        for (var i = gt7m; i >= 0; i--) {
            a4e.fb7U(this.eY7R[i].element, {left: "", top: ""});
            if (this.eY7R[i] == p4t) {
                nU0x = i
            }
        }
        a4e.x4B(p4t.element, "z-sel");
        var Tr0x = {x: 46 + 92 * (nU0x % 5) + kW9N.left, y: 46 + 92 * (nU0x / 5 >> 0) + kW9N.top};
        var bjN5S = Tr0x.x / 92 >> 0, bjQ5V = Tr0x.y / 92 >> 0, zi3x = Math.max(0, Math.min(gt7m, bjQ5V * 5 + bjN5S));
        if (zi3x == nU0x) {
            return
        }
        this.bef4j.insertBefore(p4t.element, (this.eY7R[zi3x + (zi3x > nU0x ? 1 : 0)] || {}).element || this.MR7K);
        this.eY7R.splice(nU0x, 1);
        this.eY7R.splice(zi3x, 0, p4t)
    };
    b4f.cvx3x = function (p4t, d4h) {
        a4e.cL6F(p4t.element, false);
        if (p4t.dragger) p4t.dragger.T5Y();
        delete p4t.dragger;
        var r4v = -1;
        for (var i = this.eY7R.length - 1; i >= 0; i--) {
            if (this.eY7R[i] == p4t) {
                r4v = i;
                break
            }
        }
        this.eY7R.splice(r4v, r4v >= 0 ? 1 : 0);
        delete p4t;
        if (this.eY7R.length >= 9) {
            this.MR7K.style.display = "none"
        } else {
            this.MR7K.style.display = ""
        }
        if (!this.eY7R.length) {
            this.o4s.style.display = "none";
            this.bea4e(0)
        } else {
            this.bDi0x()
        }
        if (this.eY7R.doing == p4t) {
            this.eY7R.doing = null
        }
        this.Mo7h()
    };
    b4f.bDi0x = function () {
        var bDR0x = false;
        for (var i = 0, len = this.eY7R.length; i < len; i++) {
            if (this.eY7R[i].status == -3) {
                bDR0x = true
            }
        }
        if (bDR0x) {
            this.bhO5T(-3)
        } else {
            this.bea4e(-3)
        }
    };
    b4f.SK0x = function () {
        var dC6w = [];
        for (var i = this.eY7R.length - 1; i >= 0; i--) {
            if (this.eY7R[i].status == 2) {
                dC6w.unshift(this.eY7R[i].picInfo)
            }
        }
        return dC6w
    };
    I4M.fK7D.A4E({element: w4A.bgY4c, event: ["onstartupload", "onfinishupload"]})
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, fy7r = NEJ.R, a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        bc5h = c4g("nej.ui"), O5T = c4g("nej.ut"), b4f, L5Q;
    if (!!O5T.nD9u) return;
    O5T.nD9u = NEJ.C();
    b4f = O5T.nD9u.N5S(O5T.bbX3x);
    L5Q = O5T.nD9u.cs5x;
    b4f.bl5q = function (e4i) {
        this.cvp3x(e4i.more);
        this.FM5R = a4e.B4F(e4i.sbody);
        this.cvn2x = e4i.fixScrollPosition;
        this.bX5c([[this.FM5R, "scroll", this.cvm2x.f4j(this)]]);
        var dq6k = e4i.delta;
        if (dq6k == null) dq6k = 30;
        this.SD0x = Math.max(0, dq6k);
        var cz5E = parseInt(e4i.count) || 0;
        this.jH8z = Math.max(0, cz5E);
        var gX7Q = parseInt(e4i.number) || 0;
        if (gX7Q > 1 && gX7Q <= cz5E) {
            this.Bb4f = gX7Q
        }
        this.bn5s(e4i)
    };
    b4f.bC5H = function () {
        this.bF5K();
        delete this.Cf4j;
        delete this.FM5R;
        delete this.tQ1x;
        delete this.Zh2x
    };
    b4f.BT4X = function (bi5n, bq5v) {
        var bM5R = this.yN3x + (this.jH8z - 1) * this.oH0x, gc7V = this.jH8z * this.oH0x;
        return L5Q.BT4X.call(this, bM5R, bi5n, gc7V, bq5v)
    };
    b4f.cvp3x = function (Zg2x) {
        this.Cf4j = a4e.B4F(Zg2x);
        this.bX5c([[this.Cf4j, "click", this.oE0x.f4j(this)]])
    };
    b4f.bkV5a = function (F4J) {
        F4J = F4J || {};
        if (this.tQ1x || !F4J) return;
        if (!F4J.scrollHeight) F4J = a4e.oy0x();
        var bi5n = a4e.hU8M(this.il8d, this.cvn2x ? F4J : null),
            dq6k = bi5n.y + this.il8d.offsetHeight - F4J.scrollTop - F4J.clientHeight,
            bkW5b = F4J.scrollHeight <= F4J.clientHeight;
        if (dq6k <= this.SD0x || bkW5b && !this.tQ1x) {
            this.oE0x()
        }
    };
    b4f.cvm2x = function (d4h) {
        if (this.tQ1x) return;
        this.bkV5a(h4l.X5c(d4h))
    };
    b4f.Cg4k = function (d4h) {
        L5Q.Cg4k.apply(this, arguments);
        if (!d4h.stopped) {
            this.Pk9b();
            var bi5n = 0;
            if (d4h.index > 1) {
                bi5n = this.yN3x + ((d4h.index - 1) * this.jH8z - 1) * this.oH0x
            }
            this.hT8L = bi5n;
            this.oE0x()
        }
    };
    b4f.bQi3x = function (e4i) {
        if (!!this.Bb4f) {
            var dq6k = e4i.offset > 0 ? this.oH0x : this.yN3x, gc7V = dq6k + this.oH0x * (this.Bb4f - 1);
            this.hT8L = e4i.offset + gc7V;
            e4i.data.limit = gc7V;
            e4i.limit = gc7V;
            delete this.Bb4f
        }
        return e4i
    };
    b4f.bng6a = function (e4i) {
        delete this.Zh2x;
        L5Q.bng6a.apply(this, arguments);
        this.bEp0x()
    };
    b4f.bmu6o = function (d4h) {
        if (d4h.key != this.iU8M.key) return;
        switch (d4h.action) {
            case"refresh":
            case"append":
                delete this.Zh2x;
                break
        }
        L5Q.bmu6o.apply(this, arguments)
    };
    b4f.SB0x = function () {
        this.zk3x("onbeforelistload", "列表加载中...");
        a4e.ba5f(this.Cf4j, "display", "none")
    };
    b4f.bjf5k = function (i4m, bi5n, gc7V) {
        var bq5v = i4m.length, blk5p = i4m.loaded ? bi5n + gc7V >= bq5v : bi5n + gc7V > bq5v;
        this.hT8L = Math.min(this.hT8L, bq5v);
        a4e.ba5f(this.Cf4j, "display", blk5p ? "none" : "");
        if (blk5p) this.tQ1x = !0;
        if (this.jH8z > 0) {
            var bx5C = this.BT4X(bi5n, i4m.length);
            if (this.bQU5Z(bx5C.index, bx5C.total)) return !0;
            var dq6k = this.yN3x - this.oH0x, gX7Q = this.jH8z * this.oH0x;
            this.tQ1x = (bi5n + gc7V - dq6k) % gX7Q == 0 || blk5p;
            a4e.ba5f(this.Cf4j, "display", this.tQ1x ? "none" : "");
            this.bkG5L(this.tQ1x && bx5C.total > 1 ? "" : "none")
        }
    };
    b4f.bjT5Y = function () {
        this.hT8L = 0;
        this.tQ1x = !0;
        this.zk3x("onemptylist", "没有列表数据！")
    };
    b4f.Ub0x = function (dV6P, kW9N) {
        this.il8d.insertAdjacentHTML(kW9N || "beforeEnd", dV6P)
    };
    b4f.Uv0x = function (hu8m) {
        this.fQ7J = this.fQ7J || [];
        if (k4o.eL7E(hu8m)) {
            fy7r.push.apply(this.fQ7J, hu8m)
        } else {
            this.fQ7J.push(hu8m)
        }
    };
    b4f.bfn4r = function (d4h) {
        a4e.mS9J(this.cu5z);
        this.VJ1x(d4h, "onafteradd");
        var fa7T = d4h.flag;
        if (d4h.stopped || !fa7T) return;
        if (this.jH8z > 0) {
            this.bks5x();
            return
        }
        this.hT8L += 1;
        fa7T == -1 ? this.biG5L(d4h.data) : this.bRM5R(d4h.data)
    };
    b4f.VX1x = function (d4h) {
        this.VJ1x(d4h, "onafterdelete");
        if (d4h.stopped) return;
        if (this.jH8z > 0) {
            this.bks5x();
            return
        }
        var C4G = d4h.data[this.ff7Y.pkey];
        if (!!this.fQ7J) {
            var p4t = a4e.bCH0x(C4G), r4v = k4o.di6c(this.fQ7J, p4t);
            if (r4v >= 0) {
                this.fQ7J.splice(r4v, 1);
                this.hT8L -= 1
            }
            if (!!p4t) p4t.T5Y()
        } else {
            var g4k = a4e.B4F(this.bOr3x(C4G));
            if (!!g4k) this.hT8L -= 1;
            a4e.cL6F(g4k)
        }
        if (this.hT8L <= 0) this.oE0x()
    };
    b4f.bin5s = function (bi5n, gc7V) {
        if (bi5n != this.hT8L) return;
        if (this.Ye1x()) {
            this.tQ1x = !1;
            this.bEp0x()
        }
    };
    b4f.bip5u = function (bi5n, gc7V) {
        if (bi5n != 0) return;
        var Mu7n = this.S5X.hD8v(this.iU8M.key);
        for (var i = gc7V - 1; i >= 0; i--) {
            this.biG5L(Mu7n[i])
        }
    };
    b4f.bEp0x = function () {
        var F4J = this.FM5R;
        if (!F4J || this.tQ1x) return;
        this.bkV5a(this.FM5R)
    };
    b4f.gI7B = function () {
        delete this.tQ1x;
        L5Q.gI7B.apply(this, arguments)
    };
    b4f.oE0x = function () {
        if (!!this.Zh2x) return;
        this.Zh2x = !0;
        var bi5n = this.hT8L;
        this.hT8L += bi5n == 0 ? this.yN3x : this.oH0x;
        this.bQh3x(bi5n)
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, a4e = c4g("nej.e"), k4o = c4g("nej.u"), h4l = c4g("nej.v"), cZ6T = c4g("nej.x"),
        O5T = c4g("nej.ut"), b4f;
    if (!!O5T.FZ5e) return;
    O5T.FZ5e = NEJ.C();
    b4f = O5T.FZ5e.N5S(O5T.cJ6D);
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.ji8a = e4i.event || "click";
        this.kQ9H = e4i.selected || "js-selected";
        this.nV0x = e4i.disabled || "js-disabled";
        this.bEs0x = !!e4i.inverse;
        this.cvj2x(e4i.list);
        this.Rt0x(e4i.index || 0)
    };
    b4f.bC5H = function () {
        var cvi2x = function (g4k) {
            this.blP6J(g4k, !1)
        };
        return function () {
            this.bF5K();
            k4o.bd5i(this.bU5Z, cvi2x, this);
            delete this.bU5Z;
            delete this.ji8a;
            delete this.cq5v;
            delete this.nV0x;
            delete this.kQ9H;
            delete this.bEs0x
        }
    }();
    b4f.cvj2x = function () {
        var brG7z = function (p4t) {
            if (!p4t) return;
            this.bU5Z.push(p4t);
            var r4v = this.bU5Z.length - 1, dx6r = this.blS6M[r4v];
            if (!dx6r) {
                dx6r = this.Rt0x.f4j(this, r4v);
                this.blS6M[r4v] = dx6r
            }
            this.bX5c([[p4t, this.ji8a, dx6r]])
        };
        return function (i4m) {
            this.bU5Z = [];
            if (!this.blS6M) this.blS6M = [];
            k4o.bd5i(i4m, brG7z, this)
        }
    }();
    b4f.blP6J = function (F4J, cvh2x) {
        !!cvh2x && !this.bEs0x ? a4e.y4C(F4J, this.kQ9H) : a4e.x4B(F4J, this.kQ9H)
    };
    b4f.Rt0x = function (r4v, Qx9o, j4n) {
        var F4J = this.bU5Z[r4v];
        if (Qx9o != !0 && (r4v == this.cq5v || !F4J || a4e.bE5J(F4J, this.nV0x))) {
            h4l.cn5s(arguments[1]);
            return this
        }
        var d4h = {index: r4v, last: this.cq5v, list: this.lO9F(), data: j4n || a4e.t4x(F4J, "value")};
        this.cq5v = r4v;
        F4J = this.bU5Z[d4h.last];
        if (!!F4J) this.blP6J(F4J, !1);
        F4J = this.bU5Z[this.cq5v];
        this.blP6J(F4J, !0);
        this.z4D("onchange", d4h);
        if (!d4h.nostop) h4l.cn5s(arguments[1]);
        return this
    };
    b4f.tm1x = function () {
        return this.cq5v
    };
    b4f.lO9F = function () {
        return this.bU5Z
    };
    a4e.cvg2x = cZ6T.cvg2x = function (bI5N, e4i) {
        var C4G = a4e.lP9G(bI5N);
        if (!C4G) return null;
        if (!O5T.beT4X(C4G, O5T.FZ5e)) {
            e4i = e4i || {};
            e4i.list = !e4i.clazz ? a4e.dk6e(C4G) : a4e.H4L(C4G, e4i.clazz);
            delete e4i.clazz
        }
        return O5T.beT4X(C4G, O5T.FZ5e, e4i || bb5g)
    };
    cZ6T.isChange = !0
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, k4o = c4g("nej.u"), v4z = c4g("nej.j"), l4p = c4g("nm.x");
    var SETTING_KEY = "player-setting";
    var nC9t = {mode: 4, volume: .8, autoPlay: false, index: 0, lock: false};
    nC9t = v4z.tu1x(SETTING_KEY) || nC9t;
    l4p.bmr6l = function () {
        return nC9t
    };
    l4p.Gi5n = function (Gj5o) {
        if (Gj5o) {
            nC9t = Gj5o;
            v4z.vF2x(SETTING_KEY, Gj5o)
        }
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), I4M = c4g("nej.ut"),
        l4p = c4g("nm.x"), q4u = c4g("nm.d"), hc7V = c4g("nm.w.player.log");
    var kI9z = q4u.hO8G.A4E();
    var LogLevel = {ERROR: 10, INFO: 6, DEBUG: 2};
    var hh7a = function (u4y, bG5L, qz0x) {
        var cK6E = l4p.fp7i("{0} {1} {2}", k4o.ih8Z(new Date, "yyyy-MM-dd HH:mm:ss"), u4y, bG5L);
        if (qz0x == LogLevel.ERROR) {
            kI9z.eV7O("playerror", {message: bG5L})
        }
        if (qz0x >= LogLevel.INFO) {
            kI9z.bEi0x(cK6E)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cK6E)
        }
    };
    hc7V.cc5h = function () {
        hh7a("PLAY_ERROR", l4p.fp7i.apply(null, arguments), LogLevel.ERROR)
    };
    hc7V.pG0x = function () {
        hh7a("PLAY_INFO", l4p.fp7i.apply(null, arguments), LogLevel.INFO)
    };
    hc7V.cGH2x = function () {
        hh7a("PLAY_DEBUG", l4p.fp7i.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), h4l = c4g("nej.v"), I4M = c4g("nej.ut"), k4o = c4g("nej.u"), w4A = c4g("nm.w"),
        eN7G = c4g("flash.cb");
    var eh6b = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var Go5t, bez4D, vC2x;
    w4A.cvc2x = function (u4y, cA5F) {
        if (u4y != "flash") {
            if (!Go5t) {
                Go5t = a4e.dj6d("audio");
                k4o.bd5i(eh6b, function (u4y) {
                    h4l.s4w(Go5t, u4y, onMediaCallBack)
                })
            }
            if (Go5t && Go5t.canPlayType && Go5t.canPlayType("audio/mpeg")) {
                cA5F(new MediaWrap("audio"));
                return
            }
        }
        if (!bez4D) {
            a4e.sv1x({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {allowscriptaccess: "always"},
                onready: function (hW8O) {
                    bez4D = hW8O;
                    k4o.bd5i(eh6b, function (u4y) {
                        eN7G[u4y] = onMediaCallBack;
                        bez4D.addCallback(u4y, "flash.cb." + u4y)
                    });
                    cA5F(new MediaWrap("flash"))
                }.f4j(this)
            })
        } else {
            cA5F(new MediaWrap("flash"))
        }
    };

    function MediaWrap(Gs5x) {
        var gU7N;
        I4M.fK7D.A4E({element: this, event: eh6b.concat(["interrupt", "recover"])});
        gU7N = Gs5x == "audio" ? Go5t : bez4D;
        this.type = Gs5x;
        this.destroy = function () {
        };
        this.setSrc = function (Y5d) {
            if (vC2x != this) {
                var gt7m = vC2x;
                if (gt7m) {
                    gt7m.interrupt()
                }
                vC2x = this
            }
            if (Gs5x == "flash") {
                gU7N.setSrc(Y5d)
            } else {
                gU7N.src = Y5d
            }
        };
        this.play = function () {
            if (vC2x != this) {
                var gt7m = vC2x;
                if (gt7m) {
                    gt7m.interrupt();
                    vC2x = this;
                    this.recover()
                } else {
                    vC2x = this
                }
            }
            if (Gs5x == "flash") {
                gU7N.as_play()
            } else {
                gU7N.play()
            }
        };
        this.pause = function () {
            if (vC2x != this) return;
            if (Gs5x == "flash") {
                gU7N.as_pause()
            } else {
                gU7N.pause()
            }
        };
        this.load = function () {
            if (vC2x != this) return;
            if (Gs5x == "flash") {
                gU7N.as_load()
            } else {
                gU7N.load()
            }
        };
        this.interrupt = function () {
            onMediaCallBack({type: "interrupt"})
        };
        this.recover = function () {
            onMediaCallBack({type: "recover"})
        };
        this.getMedia = function () {
            return gU7N
        };
        var oF0x = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k4o.bd5i(oF0x, function (W5b) {
            var Pt9k = "get" + W5b, Ps9j = "set" + W5b;
            if (Gs5x == "flash") {
                if (!this[Pt9k]) {
                    this[Pt9k] = function () {
                        return gU7N[Pt9k]()
                    }
                }
                if (!this[Ps9j]) {
                    this[Ps9j] = function (value) {
                        gU7N[Ps9j](value)
                    }
                }
            } else {
                var bFg1x = W5b.slice(0, 1).toLowerCase() + W5b.slice(1);
                if (!this[Pt9k]) {
                    this[Pt9k] = function () {
                        return gU7N[bFg1x]
                    }
                }
                if (!this[Ps9j]) {
                    this[Ps9j] = function (value) {
                        gU7N[bFg1x] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(d4h) {
        if (vC2x) {
            h4l.z4D(vC2x, d4h.type, d4h)
        }
    }
})();
(function () {
    var c4g = NEJ.P, h4l = c4g("nej.v"), v4z = c4g("nej.j"), I4M = c4g("nej.ut"), dy6s = c4g("nej.p"),
        w4A = c4g("nm.w"), l4p = c4g("nm.x"), hc7V = c4g("nm.w.player.log"), b4f;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {MEDIA_ERR_ABORTED: 1, MEDIA_ERR_NETWORK: 2, MEDIA_ERR_DECODE: 3, MEDIA_ERR_SRC_NOT_SUPPORTED: 4};
    var ErrorType = {INFO_GET_ERR: 1, NET_ERR: 2, UNKNOWN_ERR: 10};
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {NONE: 0, GET_URL: 1, RELOAD: 2, SWITCH_CDN: 3};
    var bFj1x = false;
    w4A.fS7L = NEJ.C();
    b4f = w4A.fS7L.N5S(I4M.cJ6D);
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.cP6J = {};
        this.bcn3x(e4i.media);
        v4z.bm5r("/api/cdns", {
            type: "json", onload: function (d4h) {
                if (d4h.code) {
                    this.ro1x = d4h.data
                }
            }.f4j(this)
        })
    };
    b4f.bC5H = function () {
        this.bF5K();
        delete this.cP6J
    };
    b4f.bch3x = function (bj5o) {
        if (!bj5o) return;
        var xd2x = this.cP6J.volume;
        if (this.dW6Q) {
            this.dW6Q.pause()
        }
        this.cP6J = {time: 0, id: bj5o.id, duration: bj5o.duration / 1e3, play: this.cP6J.play, stalledRetryCount: 0};
        if (xd2x != null) {
            this.cP6J.volume = xd2x
        }
        this.cP6J.loadState = LoadState.LOAD_START;
        this.bFy1x(bj5o.id);
        hc7V.pG0x("play song id: {0}", bj5o.id)
    };
    b4f.eq6k = function () {
        if (this.cP6J.error) {
            this.cP6J.error = null;
            if (this.cP6J.error == ErrorType.INFO_GET_ERR || this.bFz1x()) {
                this.bFA1x()
            } else {
                this.Pd8V()
            }
        } else {
            if (this.dW6Q) {
                this.dW6Q.play()
            }
        }
        this.cP6J.play = true;
        this.qn0x("play")
    };
    b4f.fD7w = function () {
        if (this.dW6Q) {
            this.dW6Q.pause()
        }
        this.cP6J.play = false;
        this.qn0x("pause")
    };
    b4f.oJ0x = function (bA5F) {
        if (this.dW6Q) {
            this.dW6Q.setCurrentTime(bA5F)
        }
        this.cP6J.time = bA5F;
        hc7V.pG0x("seek to: {0}", bA5F)
    };
    b4f.bnV6P = function () {
        return this.cP6J.duration || 0
    };
    b4f.up1x = function () {
        return !!this.cP6J.play
    };
    b4f.mF9w = function (Ou8m) {
        this.cP6J.volume = Ou8m;
        if (this.dW6Q) {
            this.dW6Q.setVolume(Ou8m)
        }
    };
    b4f.bak2x = function () {
        return this.cP6J.time
    };
    b4f.bcn3x = function (u4y) {
        w4A.cvc2x(u4y, function (gU7N) {
            this.dW6Q = gU7N;
            hc7V.pG0x("media loaded: {0}", gU7N.type);
            this.bX5c([[this.dW6Q, "loadedmetadata", this.cvb2x.f4j(this)], [this.dW6Q, "ended", this.cva2x.f4j(this)], [this.dW6Q, "waiting", this.yB3x.f4j(this)], [this.dW6Q, "play", this.uq1x.f4j(this)], [this.dW6Q, "pause", this.bpi6c.f4j(this)], [this.dW6Q, "playing", this.NQ8I.f4j(this)], [this.dW6Q, "timeupdate", this.cuY2x.f4j(this)], [this.dW6Q, "progress", this.ri1x.f4j(this)], [this.dW6Q, "stalled", this.bpP7I.f4j(this)], [this.dW6Q, "interrupt", this.fD7w.f4j(this)], [this.dW6Q, "recover", this.cuX2x.f4j(this)], [this.dW6Q, "error", this.dO6I.f4j(this)]]);
            if (this.cP6J) {
                if (this.cP6J.loadState == LoadState.LOAD_START || this.cP6J.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bqd7W();
                    if (this.cP6J.volume != null) {
                        this.dW6Q.setVolume(this.cP6J.volume)
                    }
                }
            }
        }.f4j(this))
    };
    b4f.cuV2x = function (u4y) {
        this.KO6I();
        this.dW6Q.destroy();
        this.cP6J.loadState = LoadState.IN_SWITCH_MEDIA;
        this.yB3x();
        this.bcn3x(u4y);
        hc7V.pG0x("switch media")
    };
    b4f.cGI2x = function () {
        return this.dW6Q
    };
    b4f.bFy1x = function () {
        this.yB3x();
        v4z.bm5r("/api/song/enhance/player/url", {
            type: "json",
            query: {ids: JSON.stringify([this.cP6J.id]), br: DEFAULT_BR},
            onload: this.bGn1x.f4j(this),
            onerror: this.bGn1x.f4j(this)
        })
    };
    b4f.bGn1x = function (d4h) {
        if (d4h.code == 200 && d4h.data && d4h.data.length) {
            var bx5C = d4h.data[0];
            if (!bx5C.url) {
                this.cP6J.error = ErrorType.INFO_GET_ERR;
                this.qn0x("error", {code: this.cP6J.error});
                return
            }
            this.cP6J.playUrl = bx5C.url;
            this.cP6J.expireTime = (new Date).getTime() + bx5C.expi * 1e3;
            this.bqd7W()
        } else {
            this.cP6J.error = ErrorType.INFO_GET_ERR;
            this.qn0x("error", {code: this.cP6J.error});
            hc7V.cc5h("info load error")
        }
    };
    b4f.bqd7W = function () {
        if (this.dW6Q) {
            var Y5d = this.cP6J.playUrl;
            if (this.cP6J.time > 0 && (this.cP6J.loadState == LoadState.IN_RE_GET_URL || this.cP6J.loadState == LoadState.IN_RE_GET_URL)) {
                Y5d += "#t=" + this.cP6J.time
            }
            this.dW6Q.setSrc(Y5d);
            hc7V.pG0x("load mp3: {0},loadState: {1}.", Y5d, this.cP6J.loadState)
        }
    };
    b4f.bGo1x = function () {
        if (/#t=(\d+)$/.test(this.dW6Q.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b4f.Pd8V = function () {
        var bA5F = parseInt(this.cP6J.time) || 0, cuT2x = this.bGo1x();
        if (bA5F === cuT2x) {
            this.dW6Q.load()
        } else {
            this.dW6Q.setSrc(this.cP6J.playUrl + "#t=" + bA5F)
        }
        this.cP6J.loadState = LoadState.IN_RELOAD;
        this.yB3x();
        hc7V.pG0x("reload from: {0}", bA5F)
    };
    b4f.bFA1x = function () {
        this.cP6J.loadState = LoadState.IN_RE_GET_URL;
        this.bFy1x()
    };
    b4f.bGq1x = function () {
        var qk0x = getHost(this.cP6J.playUrl);
        if (qk0x) {
            for (var i = 0; i < this.ro1x.length; i++) {
                var iq8i = this.ro1x[i] || [], r4v = iq8i.indexOf(qk0x);
                if (r4v >= 0 && iq8i.length > 1) {
                    return iq8i[(r4v + 1) % iq8i.length]
                }
            }
        }

        function getHost(Y5d) {
            if (CDN_HOST_REG.test(Y5d)) return RegExp.$1
        }
    };
    b4f.cuS2x = function () {
        this.cP6J.playUrl = this.cP6J.playUrl.replace(CDN_HOST_REG, this.bGq1x());
        this.cP6J.loadState = LoadState.IN_SWITCH_CDN;
        this.bqd7W();
        this.yB3x()
    };
    b4f.cvb2x = function () {
        if (this.cP6J.loadState == LoadState.LOAD_START) {
            this.cP6J.loadState = LoadState.LOADED_META;
            if (this.dW6Q.type == "audio") {
                this.cP6J.duration = this.dW6Q.getDuration()
            }
            this.qn0x("loadedmeta", {duration: this.cP6J.duration})
        } else {
            this.cP6J.loadState = LoadState.LOADED_META
        }
        if (this.cP6J.play) {
            this.dW6Q.play()
        } else {
            this.dW6Q.pause()
        }
        if (this.cP6J.time && parseInt(this.cP6J.time) != this.bGo1x()) {
            this.dW6Q.setCurrentTime(this.cP6J.time)
        }
        this.JL6F();
        this.NQ8I();
        bFj1x = true;
        hc7V.pG0x("loaded meta")
    };
    b4f.cva2x = function () {
        this.cP6J.ended = true;
        this.qn0x("ended")
    };
    b4f.yB3x = function () {
        if (!this.cP6J.waiting) {
            this.cP6J.waiting = true;
            this.cP6J.waitTimestamp = +(new Date);
            this.qn0x("waiting")
        }
    };
    b4f.NQ8I = function () {
        this.cP6J.waiting = false;
        this.cP6J.waitTimestamp = 0;
        this.qn0x("playing")
    };
    b4f.uq1x = function () {
        this.qn0x("play")
    };
    b4f.bpi6c = function () {
        this.qn0x("pause")
    };
    b4f.cuY2x = function () {
        if (this.cP6J.loadState != LoadState.LOADED_META) return;
        var bA5F = this.dW6Q.getCurrentTime();
        if (this.cP6J.waiting && bA5F > this.cP6J.time) {
            this.NQ8I()
        }
        this.cP6J.time = bA5F;
        this.qn0x("timeupdate", {time: this.cP6J.time, duration: this.cP6J.duration})
    };
    b4f.ri1x = function (d4h) {
        if (this.cP6J.loadState != LoadState.LOADED_META) return;
        var m4q = {};
        if (d4h.data) {
            m4q.total = d4h.data.total;
            m4q.loaded = d4h.data.loaded
        } else {
            var yy3x = this.dW6Q.getBuffered(), bA5F = this.dW6Q.getCurrentTime(), ox0x = 0;
            for (var i = 0; i < yy3x.length; i++) {
                if (bA5F > yy3x.start(i) && bA5F < yy3x.end(i)) {
                    ox0x = yy3x.end(i);
                    break
                }
            }
            m4q.total = this.cP6J.duration;
            m4q.loaded = Math.min(ox0x, m4q.total)
        }
        this.qn0x("progress", m4q)
    };
    b4f.JL6F = function () {
        if (this.cP6J.retry) {
            clearTimeout(this.cP6J.retry.tid);
            this.cP6J.retry = null
        }
    };
    b4f.dO6I = function () {
        var ca5f = this.dW6Q.getError();
        hc7V.cc5h("media error code: {0}, netState: {1}", ca5f.code, this.dW6Q.getNetworkState());
        if (ca5f.code == MediaError.MEDIA_ERR_NETWORK || ca5f.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Gj5o = l4p.bmr6l();
            if (!this.cP6J.retry) {
                this.cP6J.retry = {level: RetryLevel.NONE}
            } else {
                window.clearTimeout(this.cP6J.retry.tid)
            }
            if (this.cP6J.retry.level == RetryLevel.NONE) {
                if (this.bFz1x()) {
                    this.cP6J.retry.level = RetryLevel.GET_URL;
                    this.bFA1x();
                    hc7V.pG0x("Url expired, get url.")
                } else {
                    this.cP6J.retry.level = RetryLevel.RELOAD;
                    this.cP6J.retry.tid = setTimeout(this.Pd8V.f4j(this), 3e3);
                    hc7V.pG0x("Reload mp3 3s later.")
                }
            } else if (this.cP6J.retry.level == RetryLevel.GET_URL) {
                this.cP6J.retry.level = RetryLevel.RELOAD;
                this.cP6J.retry.tid = setTimeout(this.Pd8V.f4j(this), 3e3);
                hc7V.pG0x("Reload mp3 3s later.")
            } else if (this.cP6J.retry.level == RetryLevel.RELOAD) {
                this.cP6J.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bGq1x()) {
                    this.cP6J.retry.tid = setTimeout(this.cuS2x.f4j(this), 5e3);
                    hc7V.pG0x("Switch CDN 5s later.")
                } else {
                    this.cP6J.retry.tid = setTimeout(this.Pd8V.f4j(this), 5e3);
                    hc7V.pG0x("Reload mp3 5s later.")
                }
            } else if (!bFj1x && this.dW6Q.type == "audio" && !Gj5o.useFlash && !dy6s.Ik6e.mac && l4p.bpk6e().supported) {
                Gj5o.useFlash = true;
                l4p.Gi5n(Gj5o);
                this.cuV2x("flash")
            } else {
                this.JL6F();
                this.fD7w();
                this.cP6J.error = ErrorType.NET_ERR;
                this.qn0x("error", {code: this.cP6J.error});
                hc7V.cc5h("error can not retry.")
            }
        } else {
            this.JL6F();
            this.fD7w();
            this.cP6J.error = ErrorType.UNKNOWN_ERR;
            this.qn0x("error", {code: this.cP6J.error});
            hc7V.cc5h("error can not retry.")
        }
    };
    b4f.bpP7I = function () {
        var hV8N = 0, bGv1x = 5e3;
        return function () {
            this.yB3x();
            clearTimeout(hV8N);
            setTimeout(function () {
                var eS7L = +(new Date);
                if (this.cP6J.waiting && eS7L - this.cP6J.waitTimestamp >= bGv1x && this.cP6J.stalledRetryCount < MAX_STALLED_RETRY) {
                    hc7V.pG0x("stalled too long retry.");
                    this.cP6J.stalledRetryCount++;
                    this.Pd8V()
                }
            }.f4j(this), bGv1x);
            hc7V.pG0x("stalled")
        }
    }();
    b4f.bFz1x = function () {
        var eS7L = +(new Date);
        return eS7L > this.cP6J.expireTime
    };
    b4f.cuX2x = function () {
        var bA5F = parseInt(this.cP6J.time) || 0;
        this.dW6Q.setSrc(this.cP6J.playUrl + "#t=" + bA5F);
        this.cP6J.loadState = LoadState.IN_RELOAD;
        this.yB3x();
        hc7V.pG0x("recover from: {0}", bA5F)
    };
    b4f.qn0x = function (V5a, j4n) {
        h4l.z4D(w4A.fS7L, "playaction", {action: V5a, data: j4n || {}})
    };
    I4M.fK7D.A4E({element: w4A.fS7L, event: ["playaction"]})
})();
(function () {
    if (!(window == top)) {
        return
    }
    var c4g = NEJ.P, h4l = c4g("nej.v"), I4M = c4g("nej.ut"), w4A = c4g("nm.w"), b4f;
    w4A.Hd5i = NEJ.C();
    b4f = w4A.Hd5i.N5S(w4A.fS7L);
    L5Q = w4A.Hd5i.cs5x;
    b4f.cw5B = function () {
        this.cE6y()
    };
    b4f.cuR2x = function (bP5U) {
        this.bch3x(bP5U);
        this.eq6k()
    };
    b4f.brp7i = function () {
        this.fD7w()
    };
    b4f.wt2x = function (d4h) {
        if (d4h.action == "play") {
            this.fD7w()
        }
    };
    b4f.qn0x = function (V5a, j4n) {
        h4l.z4D(w4A.Hd5i, "tmpplayaction", {action: V5a, data: j4n || {}, tmp: true})
    };
    b4f.tt1x = function () {
        return this.cP6J
    };
    I4M.fK7D.A4E({element: w4A.Hd5i, event: ["tmpplayaction"]})
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), fH7A = c4g("nej.n"),
        v4z = c4g("nej.j"), I4M = c4g("nej.ut"), bc5h = c4g("nej.ui"), w4A = c4g("nm.w"), n4r = c4g("nm.l"),
        lc9T = c4g("nm.c"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), b4f, L5Q,
        bcN3x = [{item: "m-publish-search-single", type: 1}, {
            item: "m-publish-search-artist",
            type: 100
        }, {item: "m-publish-search-album", type: 10}, {
            item: "m-publish-search-mv",
            type: 1004
        }, {item: "m-publish-search-playlist", type: 1e3}, {item: "m-publish-search-djRadio", type: 1009}];
    var brS7L = {song: 0, artist: 1, album: 2, mv: 3, playlist: 4, djradio: 5};
    w4A.bsf7Y = NEJ.C();
    b4f = w4A.bsf7Y.N5S(bc5h.el6f);
    b4f.cw5B = function (e4i) {
        this.cE6y(e4i);
        var i4m = a4e.H4L(this.o4s, "j-flag");
        this.cGJ2x = i4m.shift();
        this.cuO2x = i4m.shift();
        this.Jj6d = i4m.shift();
        this.btk7d = i4m.shift();
        this.btC8u = [i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift()];
        this.Xq1x = i4m.shift();
        this.bHg1x = i4m.shift();
        this.so1x = {list: this.btC8u, selected: "z-curr", onchange: this.bHi1x.f4j(this)};
        h4l.s4w(this.Jj6d, "input", this.Wg1x.f4j(this));
        h4l.s4w(this.Jj6d, "propertychange", this.Wg1x.f4j(this));
        h4l.s4w(this.Jj6d, "keyup", this.Wg1x.f4j(this));
        h4l.s4w(this.cuO2x, "click", this.Wg1x.f4j(this));
        h4l.s4w(this.Xq1x, "click", this.cM6G.f4j(this));
        h4l.s4w(this.bHg1x, "click", function () {
            this.z4D("oncancel", {})
        }.f4j(this));
        this.S5X = q4u.HB5G.gm7f();
        this.Pp9g = top.nm.w.Hd5i.gm7f();
        I4M.fK7D.A4E({element: top.nm.w.Hd5i, event: ["tmpplayaction"]});
        this.rP1x = {limit: 100, offset: 0, parent: this.Xq1x, onbeforelistload: this.qv0x.f4j(this)};
        q4u.sk = "fuck" + a4e.t4x(this.btk7d, "xname") + "458";
        h4l.s4w(top.nm.w.Hd5i, "tmpplayaction", this.wt2x.f4j(this))
    };
    b4f.ch5m = function () {
        this.cf5k = "m-xwgt-publish-search"
    };
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        if (!!this.Bn4r) {
            this.Bn4r.T5Y();
            delete this.Bn4r
        }
        this.so1x.index = brS7L[e4i.type || "song"];
        this.Bn4r = I4M.FZ5e.A4E(this.so1x);
        this.Jj6d.value = "";
        this.Jj6d.focus();
        this.uN2x = "";
        this.cGK2x = 0;
        if (e4i.showMV == true) {
            this.btC8u[brS7L["mv"]].parentNode.style.display = "";
            a4e.y4C(this.btk7d, "srchtab-1")
        } else {
            this.btC8u[brS7L["mv"]].parentNode.style.display = "none";
            a4e.x4B(this.btk7d, "srchtab-1")
        }
        if (!!this.dK6E) {
            this.dK6E = this.dK6E.T5Y()
        }
        if (e4i.hideBack) {
            a4e.y4C(this.bHg1x.parentNode, "f-hide")
        }
    };
    b4f.bC5H = function () {
        this.Pp9g.brp7i();
        this.bF5K()
    };
    b4f.Wg1x = function () {
        var value = this.Jj6d.value.trim();
        if (value && value.length) {
            if (value != this.uN2x) {
                this.uN2x = value;
                this.bHi1x({index: this.Bn4r.tm1x()})
            }
        } else {
            if (this.dK6E) {
                this.dK6E = this.dK6E.T5Y()
            }
        }
        this.uN2x = value
    };
    b4f.cM6G = function () {
        var cuM2x = function (F4J) {
            return a4e.bE5J(F4J, "sitm") || a4e.bE5J(F4J, "itm") || a4e.bE5J(F4J, "mv-item")
        }, cuL2x = function (F4J) {
            return a4e.bE5J(F4J, "ply")
        }, bHz1x = function () {
            n4r.Z5e.J4N({type: 2, tip: "因合作方要求，该资源需付费使用"})
        }, cuK2x = function () {
            n4r.Z5e.J4N({type: 2, tip: "因合作方要求，该资源需下载后播放"})
        }, buk8c = function (bj5o) {
            if (bj5o && bj5o.privilege && bj5o.privilege.toast) {
                v4z.bm5r("/api/song/toast", {
                    query: {id: bj5o.id},
                    type: "json",
                    onload: QH9y.f4j(this),
                    onerror: QH9y.f4j(this)
                })
            } else {
                QI9z()
            }
        }, QH9y = function (Q5V) {
            QI9z((Q5V || bb5g).toast)
        }, QI9z = function (bG5L) {
            n4r.Z5e.J4N({type: 2, tip: bG5L || "因合作方要求，该资源暂时下架>_<"})
        };
        return function (d4h) {
            var Hy5D = h4l.X5c(d4h, cuL2x), i4m = h4l.X5c(d4h, cuM2x), ex6r = this.Pp9g.tt1x();
            if (!!i4m) {
                h4l.bg5l(d4h);
                this.OS8K = a4e.t4x(i4m, "id");
                this.OO8G = a4e.t4x(i4m, "type");
                if (this.OO8G == 18) {
                    var bP5U = this.S5X.eJ6D(this.OS8K), qz0x = l4p.qq0x(bP5U);
                    if (!Hy5D) {
                        if (qz0x == 10) {
                            bHz1x();
                            return
                        } else if (qz0x == 100) {
                            buk8c(bP5U);
                            return
                        }
                    } else {
                        if (qz0x == 10) {
                            bHz1x();
                            return
                        } else if (qz0x == 100) {
                            buk8c(bP5U);
                            return
                        } else if (qz0x == 11) {
                            cuK2x();
                            return
                        } else {
                            a4e.x4B(this.Bl4p, "z-pause z-loading");
                            if (Hy5D == this.Bl4p && ex6r.play && !ex6r.ended) {
                                this.Pp9g.brp7i()
                            } else {
                                this.Bl4p = Hy5D;
                                this.Pp9g.cuR2x(bP5U)
                            }
                            return
                        }
                    }
                } else if (this.OO8G == 70) {
                    if (a4e.bE5J(i4m, "z-noprogram")) {
                        n4r.Z5e.J4N({type: 2, tip: "不能分享没有节目的电台"});
                        return
                    }
                }
                this.cuH2x()
            }
        }
    }();
    b4f.cuH2x = function () {
        var hZ8R = this.S5X.eJ6D(this.OS8K), th1x = l4p.bMg2x(this.OO8G, hZ8R);
        th1x.title = th1x.title || "";
        th1x.author = th1x.author || "";
        th1x.picUrl = th1x.picUrl || "";
        th1x.authors = th1x.authors || "";
        if (this.OO8G == 70) {
            this.OS8K = this.OS8K.slice(0, -4)
        }
        this.z4D("onfinish", {id: this.OS8K, type: this.OO8G, data: th1x})
    };
    b4f.wt2x = function (d4h) {
        var j4n = d4h.data;
        if (!this.Bl4p) {
            return
        }
        switch (d4h.action) {
            case"play":
                a4e.fj7c(this.Bl4p, "z-pause z-play", "z-loading");
                break;
            case"pause":
            case"ended":
                a4e.x4B(this.Bl4p, "z-pause z-loading");
                break;
            case"error":
                n4r.Z5e.J4N({type: 2, tip: "试听遇到问题，播放失败"});
                a4e.x4B(this.Bl4p, "z-pause z-loading");
                break;
            case"playing":
                a4e.fj7c(this.Bl4p, "z-loading", "z-pause");
                break;
            case"waiting":
                a4e.fj7c(this.Bl4p, "z-pause", "z-loading");
                break
        }
    };
    b4f.cuF2x = function (d4h) {
        if (d4h.result.code == 407) {
            this.Xq1x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.Xq1x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b4f.bHi1x = function (d4h) {
        if (!this.uN2x || d4h.index < 0 || d4h.index > 5) {
            return
        }
        this.Pp9g.brp7i();
        var bh5m = bcN3x[d4h.index], e4i = NEJ.X({}, this.rP1x);
        e4i.cache = {klass: q4u.HB5G, clear: true, onerror: this.cuF2x.f4j(this)};
        e4i.cache.lkey = "search-publish-" + bh5m.type + "-" + this.uN2x;
        e4i.item = {klass: bh5m.item, getRestrictLevel: l4p.qq0x, dur2time: l4p.lj9a};
        if (!e4i.cache.data) {
            e4i.cache.data = {}
        }
        e4i.cache.data.s = this.uN2x;
        e4i.cache.data.type = bh5m.type;
        e4i.cache.data.isPub = true;
        if (bh5m.type == 1) {
            e4i.cache.data.hlpretag = '<span class="s-fc7">';
            e4i.cache.data.hlposttag = "</span>"
        }
        e4i.onemptylist = this.cuE2x.f4j(this, this.uN2x);
        if (!!this.HF5K) this.S5X.vw2x(this.HF5K);
        if (!!this.dK6E) {
            this.dK6E = this.dK6E.T5Y()
        }
        this.dK6E = I4M.nD9u.A4E(e4i);
        this.HF5K = e4i.cache.lkey
    };
    b4f.qv0x = function (d4h) {
        d4h.value = a4e.iH8z("m-publish-search-loading")
    };
    b4f.cuE2x = function (K4O, d4h) {
        a4e.dA6u(d4h.parent, "m-publish-emtpy-message", {key: K4O});
        d4h.stopped = true
    }
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), h4l = c4g("nej.v"), dy6s = c4g("nej.p"), v4z = c4g("nej.j"),
        cb5g = c4g("nej.ut"), bD5I = c4g("nej.ui"), w4A = c4g("nm.w"), b4f, L5Q;
    var cuC2x = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    w4A.HG6A = NEJ.C();
    b4f = w4A.HG6A.N5S(bD5I.el6f);
    var ge7X = a4e.eB6v("m-wgt-receiverInput");
    var cuq2x = a4e.eB6v("m-wgt-receiverList");
    var iX8P = a4e.to1x(cuC2x);
    var cun2x = a4e.eB6v('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b4f.cw5B = function (e4i) {
        this.bk5p = [];
        this.xw2x = e4i.receiver || null;
        this.cul2x = e4i.unique || false;
        this.nz9q = e4i.err;
        this.bJb2x(this.bJc2x, e4i.uid);
        this.cE6y(e4i)
    };
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.Nf7Y();
        this.Nd7W();
        this.WV1x();
        if (e4i.receiver) this.bwd8V(e4i.receiver.nickname, e4i.receiver.userId);
        a4e.ba5f(this.AQ3x, "display", "block");
        a4e.ba5f(this.bwl8d, "cursor", "text");
        a4e.ba5f(this.AQ3x, "cursor", "text")
    };
    b4f.ch5m = function () {
        var j4n = this.bJw2x();
        this.cf5k = a4e.jm8e(a4e.cd5i(ge7X, {receiver: this.xw2x, users: j4n}));
        this.mj9a = iX8P
    };
    b4f.bW5b = function () {
        this.ci5n();
        var bS5X = a4e.H4L(this.o4s, "j-flag");
        var hu8m = a4e.H4L(this.o4s, "j-item");
        this.bwl8d = bS5X[0];
        this.bJz2x = bS5X[1];
        this.ef6Z = bS5X[2];
        this.AQ3x = bS5X[3];
        this.ZN2x = bS5X[4];
        this.bxe9V = bS5X[5];
        this.fQ7J = hu8m;
        a4e.y4C(this.fQ7J[0], "j-selected");
        h4l.s4w(this.ef6Z, "keyup", this.bxp9g.f4j(this));
        h4l.s4w(this.ef6Z, "keydown", this.QB9s.f4j(this));
        h4l.s4w(this.ef6Z, "focus", this.lr9i.f4j(this));
        h4l.s4w(this.ZN2x, "click", this.cuk2x.f4j(this));
        h4l.s4w(this.bwl8d, "click", this.cuj2x.f4j(this));
        h4l.s4w(document.body, "click", this.oK0x.f4j(this));
        h4l.s4w(this.ef6Z, "input", this.fW7P.f4j(this));
        h4l.s4w(this.ef6Z, "blur", this.nT0x.f4j(this))
    };
    b4f.bC5H = function (e4i) {
        h4l.mo9f(document.body, "click", this.oK0x.f4j(this));
        this.bF5K();
        this.WV1x();
        this.cug2x();
        this.oK0x()
    };
    b4f.bxp9g = function (d4h) {
        h4l.bg5l(d4h);
        var jX8P = d4h.keyCode || d4h.which;
        var bo5t = this.ef6Z.value;
        var bq5v = this.fQ7J.length;
        var sD1x = a4e.H4L(this.o4s, "j-selected")[0];
        switch (jX8P) {
            case 13:
                var lg9X = a4e.gJ7C(sD1x, "data-username");
                var ip8h = a4e.gJ7C(sD1x, "data-userId");
                this.bwd8V(lg9X, ip8h);
                this.oK0x();
                this.ef6Z.value = "";
                break;
            case 38:
                var r4v = a4e.gJ7C(sD1x, "data-index") - 1 < 0 ? bq5v - 1 : a4e.gJ7C(sD1x, "data-index") - 1;
                a4e.x4B(sD1x, "j-selected");
                a4e.y4C(this.fQ7J[r4v], "j-selected");
                break;
            case 40:
                var r4v = parseInt(a4e.gJ7C(sD1x, "data-index")) + 1 >= bq5v ? 0 : parseInt(a4e.gJ7C(sD1x, "data-index")) + 1;
                a4e.x4B(sD1x, "j-selected");
                a4e.y4C(this.fQ7J[r4v], "j-selected");
                break;
            default:
                this.xH2x()
        }
    };
    b4f.QB9s = function (d4h) {
        var jX8P = d4h.keyCode || d4h.which;
        var bo5t = this.ef6Z.value;
        var r4v = a4e.H4L(this.o4s, "j-receiver").length - 1;
        if (jX8P === 8 && bo5t === "") this.cuf2x(r4v)
    };
    b4f.fW7P = function (d4h) {
        var bo5t = this.ef6Z.value;
        if (bo5t.length > 10) {
            this.ef6Z.value = bo5t.substring(0, 10);
            return
        }
        dy6s.dr6l.browser == "ie" && dy6s.dr6l.version < "7.0" ? setTimeout(this.bxU9L.f4j(this), 0) : this.bxU9L();
        this.Nd7W()
    };
    b4f.lr9i = function () {
        if (this.bk5p[0]) this.xH2x(); else this.bJb2x(this.cuc2x);
        a4e.ba5f(this.AQ3x, "display", "none")
    };
    b4f.nT0x = function () {
        var bq5v = a4e.H4L(this.o4s, "j-receiver").length;
        if (this.ef6Z.value.trim() == "" && bq5v <= 0) a4e.ba5f(this.AQ3x, "display", "block")
    };
    b4f.bwd8V = function (lg9X, ip8h) {
        var KD6x = this.Ve1x();
        if (KD6x.length >= 10) {
            this.dY6S();
            return
        }
        var bc5h;
        for (bc5h = 0; bc5h < KD6x.length; bc5h++) {
            if (KD6x[bc5h] == ip8h) {
                this.oK0x();
                return
            }
        }
        if (!lg9X || !ip8h) return;
        var g4k = a4e.dD6x(a4e.jm8e(a4e.cd5i(cun2x, {username: lg9X, userId: ip8h})));
        var bI5N = this.bJz2x.parentNode;
        if (this.cul2x) {
            this.WV1x()
        }
        bI5N.insertBefore(g4k, this.bJz2x);
        this.ef6Z.value = "";
        var bq5v = a4e.H4L(this.o4s, "j-receiver").length;
        if (bq5v > 1) a4e.ba5f(this.AQ3x, "display", "none");
        this.bxU9L();
        this.Nd7W()
    };
    b4f.WV1x = function () {
        var Ul0x = a4e.H4L(this.o4s, "j-receiver");
        var bc5h;
        if (Ul0x.length > 0) {
            for (bc5h = 0; bc5h < Ul0x.length; bc5h++) {
                a4e.cL6F(Ul0x[bc5h], false)
            }
        }
    };
    b4f.cug2x = function () {
        this.ef6Z.value = ""
    };
    b4f.cuf2x = function (r4v) {
        this.dY6S(!0);
        var Ul0x = a4e.H4L(this.o4s, "j-receiver");
        a4e.cL6F(Ul0x[r4v], false);
        this.Nd7W()
    };
    b4f.xH2x = function () {
        var bo5t = this.ef6Z.value;
        var bv5A = bo5t.trim().toLowerCase();
        var j4n;
        bv5A = bv5A.replace(/\[/g, "\\[");
        bv5A = bv5A.replace(/\]/g, "\\]");
        j4n = this.bJw2x(bv5A);
        this.cub2x(j4n)
    };
    b4f.oK0x = function (d4h) {
        a4e.ba5f(this.ZN2x, "display", "none")
    };
    b4f.dY6S = function (dM6G) {
        if (dM6G && this.nz9q) {
            a4e.ba5f(this.nz9q, "display", "none");
            return
        }
        if (this.nz9q) a4e.ba5f(this.nz9q, "display", "block")
    };
    b4f.cuk2x = function (d4h) {
        h4l.cn5s(d4h);
        var bO5T = d4h.target || d4h.srcElement;
        if (a4e.bE5J(bO5T, "j-flag")) return;
        var bI5N = bO5T.nodeName.toLowerCase() == "a" ? bO5T.parentNode : bO5T.parentNode.parentNode;
        var lg9X = a4e.gJ7C(bI5N, "data-username");
        var ip8h = a4e.gJ7C(bI5N, "data-userId");
        this.bwd8V(lg9X, ip8h);
        this.oK0x();
        a4e.ba5f(this.AQ3x, "display", "none")
    };
    b4f.cuj2x = function (d4h) {
        h4l.bg5l(d4h);
        var bO5T = d4h.target || d4h.srcElement;
        if (a4e.bE5J(bO5T.parentNode, "j-receiver")) {
            a4e.cL6F(bO5T.parentNode, false);
            this.dY6S(!0);
            this.Nd7W()
        } else this.ef6Z.focus()
    };
    b4f.bxU9L = function () {
        this.bxe9V.innerHTML = this.ef6Z.value;
        var cC6w = this.bxe9V.offsetWidth + 2;
        a4e.ba5f(this.ef6Z, "width", cC6w + "px")
    };
    b4f.Nd7W = function () {
        var Xv1x = a4e.hU8M(this.ef6Z, this.o4s).y;
        var bLc2x = Math.floor((Xv1x - 8) / 27);
        if (bLc2x < 0) return;
        a4e.ba5f(this.bwl8d, "height", 19 + bLc2x * 29 + "px")
    };
    b4f.Nf7Y = function () {
        var pC0x = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < pC0x.length; i++) {
            a4e.ba5f(this.bxe9V, pC0x[i], a4e.dh6b(this.ef6Z, pC0x[i]))
        }
    };
    b4f.bJb2x = function (cA5F, C4G) {
        var do6i = C4G ? C4G : window.GUser.userId;
        var Y5d = "/api/user/getfollows/" + do6i;
        var gl7e = v4z.bm5r(Y5d, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: cA5F.f4j(this),
            onerror: function (j4n) {
                this.bk5p = []
            },
            onbeforerequest: function (j4n) {
            }
        })
    };
    b4f.bJc2x = function (j4n) {
        this.bk5p = JSON.parse(j4n).follow || [];
        var C4G = GUser.userId;
        for (var i = 0; i < this.bk5p.length; i++) {
            if (this.bk5p[i].userId == C4G) {
                this.bk5p.splice(i, 1);
                continue
            }
            this.bk5p[i].avatarUrl = this.bk5p[i].avatarUrl + "?param=30y30"
        }
    };
    b4f.cuc2x = function (j4n) {
        if (this.bk5p[0]) return;
        this.bJc2x(j4n);
        this.xH2x()
    };
    b4f.bJw2x = function (bv5A) {
        var bv5A = bv5A ? bv5A : "";
        this.bk5p = this.bk5p[0] ? this.bk5p : [];
        var bq5v = this.bk5p.length;
        var NF8x = this.Ve1x();
        var sZ1x = [];
        var Rg9X, Uu0x, bxW9N;
        if (!this.bk5p[0]) return sZ1x;
        for (var bc5h = 0; bc5h < bq5v; bc5h++) {
            bxW9N = false;
            for (var v4z = 0; v4z < NF8x.length; v4z++) {
                if (this.bk5p[bc5h].userId == NF8x[v4z]) {
                    bxW9N = true;
                    break
                }
            }
            if (bxW9N) continue;
            Rg9X = this.bk5p[bc5h].nickname.toLowerCase().search(bv5A);
            Uu0x = this.bk5p[bc5h].py ? this.bk5p[bc5h].py.toLowerCase().search(bv5A) : -1;
            if (Rg9X !== -1 || Uu0x != -1) sZ1x.push(this.bk5p[bc5h])
        }
        return sZ1x
    };
    b4f.cub2x = function (j4n) {
        a4e.dA6u(this.ZN2x, cuq2x, {users: j4n});
        a4e.y4C(a4e.H4L(this.o4s, "j-item")[0], "j-selected");
        this.fQ7J = a4e.H4L(this.o4s, "j-item");
        a4e.ba5f(this.ZN2x, "display", "block")
    };
    b4f.Ve1x = function () {
        var sZ1x = a4e.H4L(this.o4s, "j-receiver") || [];
        var ip8h = [];
        for (var i = 0; i < sZ1x.length; i++) {
            ip8h.push(a4e.gJ7C(sZ1x[i], "data-id"))
        }
        return ip8h
    };
    b4f.cGN2x = function () {
        var ip8h = this.Ve1x();
        var sZ1x = [];
        for (var i = 0; i < ip8h.length; i++) {
            for (var j = 0; j < this.bk5p.length; j++) {
                if (ip8h[i] == this.bk5p[j].userId) sZ1x.push(this.bk5p[j])
            }
        }
        return sZ1x
    };
    b4f.ctZ2x = function () {
        this.WV1x()
    };
    w4A.HG6A.J4N = function (e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n4r.oL0x.J4N({title: "登录"});
            return
        }
        e4i = e4i || {};
        if (e4i.parent === undefined) e4i.parent = document.body;
        !!this.fg7Z && this.fg7Z.T5Y();
        this.fg7Z = this.A4E(e4i)
    };
    w4A.HG6A.bt5y = function () {
        !!this.fg7Z && this.fg7Z.T5Y()
    };
    w4A.HG6A.Ic6W = function () {
        return this.oK0x()
    };
    w4A.HG6A.cGO2x = function () {
        return this.xH2x()
    }
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), k4o = c4g("nej.u"), h4l = c4g("nej.v"), l4p = c4g("nm.x"), n4r = c4g("nm.l"),
        b4f, L5Q;
    n4r.Ii6c = NEJ.C();
    b4f = n4r.Ii6c.N5S(n4r.bna6U);
    L5Q = n4r.Ii6c.cs5x;
    b4f.bl5q = function () {
        var Ib6V;
        var ctV2x = function (D4H, K4O) {
            Ib6V = Ib6V || [];
            if (K4O != "18") Ib6V.push({key: K4O, value: D4H})
        };
        return function (e4i) {
            this.bn5s(e4i);
            if (e4i.upwards) {
                a4e.y4C(this.o4s, "m-emts-up")
            } else {
                a4e.x4B(this.o4s, "m-emts-up")
            }
            if (e4i.rightwards) {
                a4e.y4C(this.o4s, "m-emts-right")
            } else {
                a4e.x4B(this.o4s, "m-emts-right")
            }
            if (!Ib6V) {
                var bz5E = l4p.cBa1x();
                k4o.eI6C(bz5E, ctV2x)
            }
            var bq5v = Ib6V.length;
            Ib6V.splice(bq5v - 2, 0, {key: "18", value: "186"});
            this.Yh1x = Ib6V;
            this.ctS2x = !!e4i.autoHide
        }
    }();
    b4f.ch5m = function () {
        this.cf5k = "ntp-portrait"
    };
    b4f.bW5b = function () {
        this.ci5n();
        var i4m = a4e.H4L(this.o4s, "j-flag");
        this.bK5P = i4m[0];
        this.ctQ2x = i4m[1];
        this.ctP2x = i4m[2];
        this.ctM2x = i4m[3];
        h4l.s4w(this.bK5P, "click", this.yk3x.f4j(this));
        h4l.s4w(this.ctQ2x, "click", this.HZ6T.f4j(this, 1));
        h4l.s4w(this.ctM2x, "click", this.HZ6T.f4j(this, 2))
    };
    b4f.bxM9D = function (r4v) {
        this.ber4v = r4v;
        var bi5n = (r4v - 1) * 50;
        var i4m = this.Yh1x.slice(bi5n, Math.min(bi5n + 50, this.Yh1x.length));
        this.bK5P.innerHTML = a4e.cd5i("jst-portrait", {plist: i4m}, {purl: l4p.bDg0x});
        this.ctP2x.innerText = r4v + "/" + Math.ceil(this.Yh1x.length / 50)
    };
    b4f.HZ6T = function (r4v) {
        var ctL2x = Math.ceil(this.Yh1x.length / 50);
        if (r4v == 1 && this.ber4v == 1 || r4v == 2 && this.ber4v == ctL2x) return;
        r4v == 1 ? this.bxM9D(this.ber4v - 1) : this.bxM9D(this.ber4v + 1)
    };
    b4f.yk3x = function (d4h) {
        var F4J = h4l.X5c(d4h, "d:text");
        if (!F4J) return;
        var d4h = {url: a4e.t4x(F4J, "url"), text: a4e.t4x(F4J, "text")};
        this.z4D("onselect", d4h);
        if (this.ctS2x && !d4h.stopped) {
            this.bt5y()
        }
    };
    b4f.J4N = function () {
        L5Q.J4N.call(this);
        this.bxM9D(1)
    }
})();
(function () {
    var c4g = NEJ.P, h4l = c4g("nej.v"), k4o = c4g("nej.u"), dy6s = c4g("nej.p"), be5j = c4g("nej.h"),
        I4M = c4g("nej.ut"), kn8f = /^[#?]+/, Ev5A = /#(.*?)$/, yl3x = window,
        bxL9C = !history.pushState || dy6s.Ik6e.android || !history.auto;
    var Xb1x = function (Y5d, bxK9B) {
        yl3x.history[!bxK9B ? "pushState" : "replaceState"](null, document.title, Y5d)
    };
    var Xx1x = function () {
        return location.parse(yl3x.location.href)
    };
    Xb1x = Xb1x.eH6B(function (d4h) {
        if (!bxL9C) return;
        var bf5k = d4h.args;
        d4h.stopped = !0;
        Y5d = bf5k[0].replace(kn8f, "");
        !bf5k[1] ? yl3x.location.hash = Y5d : yl3x.location.replace("#" + Y5d)
    });
    Xx1x = Xx1x.eH6B(function (d4h) {
        if (!bxL9C) return;
        d4h.stopped = !0;
        var dR6L = Ev5A.test(yl3x.location.href) ? RegExp.$1 : "";
        d4h.value = location.parse(dR6L.replace(kn8f, ""))
    });
    location.redirect = function (Y5d, bxK9B) {
        Xb1x(Y5d, bxK9B);
        return this
    };
    location.active = function () {
        var eg6a, Y5d, jL8D, db6V, UP0x;
        var bxJ9A = function (hs8k) {
            if (!!db6V) {
                db6V = !1;
                return
            }
            var d4h = {oldValue: jL8D, newValue: Xx1x()};
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h4l.z4D(location, "beforeurlchange", d4h);
                if (d4h.stopped) {
                    if (!!jL8D) {
                        db6V = !0;
                        Xb1x(jL8D.href, !0)
                    }
                    return
                }
            }
            Y5d = yl3x.location.href;
            jL8D = d4h.newValue;
            h4l.z4D(location, "urlchange", jL8D);
            be5j.buy8q(jL8D.href)
        };
        var bNB3x = function () {
            if (Y5d != yl3x.location.href) bxJ9A();
            eg6a = requestAnimationFrame(bNB3x)
        };
        return function (bL5Q) {
            if (!!UP0x) return this;
            UP0x = !0;
            yl3x = bL5Q || window;
            if (bxL9C && "onhashchange" in window && dy6s.nB9s.trident2) {
                h4l.s4w(yl3x, "hashchange", bxJ9A);
                bxJ9A()
            } else if (!eg6a) {
                eg6a = requestAnimationFrame(bNB3x)
            }
            return this
        }
    }();
    location.parse = function () {
        var gL7E = /^https?:\/\/.*?\//i, kn8f = /[?#]/;
        return function (Y5d) {
            var m4q = {href: Y5d};
            Y5d = (Y5d || "").replace(gL7E, "/").split(kn8f);
            var cz5E = 1;
            if (Y5d[0] == "/" && (Y5d[1] || "").indexOf("/") == 0) cz5E = 2;
            m4q.path = Y5d.splice(0, cz5E).join("?");
            m4q.query = k4o.hq8i(Y5d.join("&"));
            return m4q
        }
    }();
    location.same = function (Y5d) {
        return Xx1x().href == Y5d
    };
    I4M.fK7D.A4E({element: location, event: ["beforeurlchange", "urlchange"]})
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), h4l = c4g("nej.v"), gv7o = c4g("nm.ut");
    gv7o.uz2x = function (eu6o) {
        var hk7d = {text: "", start: 0, end: 0};
        if (eu6o.setSelectionRange) {
            hk7d.start = eu6o.selectionStart;
            hk7d.end = eu6o.selectionEnd;
            hk7d.text = hk7d.start != hk7d.end ? eu6o.value.substring(hk7d.start, hk7d.end) : ""
        } else if (document.selection) {
            var i, Zm2x = document.selection.createRange(), yw3x = document.body.createTextRange();
            yw3x.moveToElementText(eu6o);
            hk7d.text = Zm2x.text;
            hk7d.bookmark = Zm2x.getBookmark();
            for (i = 0; yw3x.compareEndPoints("StartToStart", Zm2x) < 0 && Zm2x.moveStart("character", -1) !== 0; i++) {
                if (eu6o.value.charAt(i) == "\n") {
                    i++
                }
            }
            hk7d.start = i;
            hk7d.end = hk7d.text.length + hk7d.start
        }
        return hk7d
    };
    gv7o.ZP2x = function (eu6o, hk7d) {
        var yw3x;
        if (!hk7d) {
            hk7d = {text: "", start: 0, end: 0}
        }
        eu6o.focus();
        if (eu6o.setSelectionRange) {
            eu6o.setSelectionRange(hk7d.start, hk7d.end)
        } else if (eu6o.createTextRange) {
            yw3x = eu6o.createTextRange();
            if (eu6o.value.length === hk7d.start) {
                yw3x.collapse(false);
                yw3x.select()
            } else {
                yw3x.moveToBookmark(hk7d.bookmark);
                yw3x.select()
            }
        }
    };
    gv7o.Il6f = function (eu6o, hk7d, cK6E) {
        var hk7d = hk7d || {text: "", start: 0, end: 0};
        var bxH9y, bOh3x, yw3x, Uw0x, bOk3x, bOn3x, HX6R;
        this.ZP2x(eu6o, hk7d);
        if (eu6o.setSelectionRange) {
            bxH9y = eu6o.value;
            bOh3x = bxH9y.substring(0, hk7d.start) + cK6E + bxH9y.substring(hk7d.end);
            bOk3x = bOn3x = hk7d.start + cK6E.length;
            HX6R = eu6o.scrollTop;
            eu6o.value = bOh3x;
            if (eu6o.scrollTop != HX6R) {
                eu6o.scrollTop = HX6R
            }
            eu6o.setSelectionRange(bOk3x, bOn3x)
        } else if (eu6o.createTextRange) {
            Uw0x = document.selection.createRange();
            Uw0x.text = cK6E;
            Uw0x.setEndPoint("StartToEnd", Uw0x);
            Uw0x.select()
        }
        h4l.z4D(eu6o, "keyup")
    }
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), h4l = c4g("nej.v"), dy6s = c4g("nej.p"), k4o = c4g("nej.u"),
        cb5g = c4g("nej.ut"), w4A = c4g("nm.w"), gv7o = c4g("nm.ut"), b4f;
    w4A.bOt3x = NEJ.C();
    b4f = w4A.bOt3x.N5S(cb5g.cJ6D);
    b4f.cw5B = function (e4i) {
        this.cE6y(e4i)
    };
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.gn7g = e4i.txt;
        this.HW6Q = e4i.sgtsContainer;
        this.bOB3x = e4i.sgtsList[0];
        this.bcI3x = e4i.sgtsItem;
        this.oN0x = e4i.rangeData;
        this.In6h = e4i.atIndex;
        a4e.y4C(this.bcI3x[0], "selected-item");
        this.Vp1x()
    };
    b4f.bC5H = function () {
        this.bF5K();
        h4l.mo9f(document.body, "keyup", this.bPj3x.f4j(this));
        h4l.mo9f(document.body, "click", this.bPl3x.f4j(this))
    };
    b4f.Vp1x = function () {
        this.bX5c([[document.body, "keyup", this.bPj3x.f4j(this)], [document.body, "click", this.bPl3x.f4j(this)], [this.gn7g, "keydown", this.bPm3x.f4j(this)], [this.gn7g, "keypress", this.bPm3x.f4j(this)], [this.bOB3x, "click", this.bPn3x.f4j(this)], [this.bOB3x, "mouseover", this.HV6P.f4j(this)]])
    };
    b4f.HV6P = function (d4h) {
        var bO5T = h4l.X5c(d4h);
        var p4t = a4e.H4L(this.HW6Q, "selected-item");
        if (a4e.bE5J(bO5T, "j-sgt")) {
            a4e.x4B(p4t[0], "selected-item");
            a4e.y4C(bO5T, "selected-item")
        }
    };
    b4f.bPj3x = function (d4h) {
        var p4t = a4e.H4L(this.HW6Q, "selected-item");
        var bq5v = this.bcI3x.length;
        var jX8P = d4h.keyCode || d4h.which;
        var r4v, j4n;
        switch (jX8P) {
            case 38:
                r4v = a4e.gJ7C(p4t[0], "data-index") - 1 < 0 ? bq5v - 1 : a4e.gJ7C(p4t[0], "data-index") - 1;
                a4e.x4B(p4t[0], "selected-item");
                a4e.y4C(this.bcI3x[r4v], "selected-item");
                break;
            case 40:
                r4v = parseInt(a4e.gJ7C(p4t[0], "data-index")) + 1 >= bq5v ? 0 : parseInt(a4e.gJ7C(p4t[0], "data-index")) + 1;
                a4e.x4B(p4t[0], "selected-item");
                a4e.y4C(this.bcI3x[r4v], "selected-item");
                break;
            case 13:
                this.bPn3x(d4h);
                break;
            case 27:
                this.oK0x();
                break;
            case 32:
                var bo5t = this.gn7g.value;
                var r4v = gv7o.uz2x(this.gn7g);
                if (bo5t.charAt(r4v.start - 1) !== " ") return;
                this.oK0x();
                break
        }
    };
    b4f.bPm3x = function (d4h) {
        var jX8P = d4h.keyCode || d4h.which;
        if (jX8P === 13 || jX8P === 38 || jX8P === 40) {
            h4l.cn5s(d4h);
            d4h.keyCode = 0;
            d4h.which = 0;
            d4h.returnvalue = false
        }
    };
    b4f.bPl3x = function (d4h) {
        var bO5T = d4h.target || d4h.srcElement;
        if (bO5T === this.gn7g) return;
        this.oK0x()
    };
    b4f.bPn3x = function (d4h) {
        h4l.bg5l(d4h);
        var p4t = a4e.H4L(this.HW6Q, "selected-item")[0];
        var sD1x = d4h.target || d4h.srcElement;
        var u4y = d4h.type;
        if (a4e.bE5J(sD1x, "lst")) return;
        if (u4y == "click") {
            a4e.x4B(p4t, "selected-item");
            a4e.y4C(sD1x, "selected-item")
        } else sD1x = p4t;
        var j4n = sD1x.innerHTML + " ";
        this.oK0x();
        var hk7d = this.oN0x;
        hk7d.start = this.In6h + 1;
        if (dy6s.dr6l.browser == "ie" && dy6s.dr6l.version < "9.0") {
            this.gn7g.value = this.gn7g.value.substring(0, hk7d.start) + this.gn7g.value.substring(hk7d.end, this.gn7g.value.length);
            hk7d.end = hk7d.start
        }
        gv7o.Il6f(this.gn7g, hk7d, j4n);
        h4l.z4D(this.gn7g, "keyup")
    };
    b4f.oK0x = function (d4h) {
        if (!!this.HW6Q) a4e.ba5f(this.HW6Q, "display", "none");
        this.T5Y()
    };
    b4f.xH2x = function (d4h) {
        if (!!this.HW6Q) a4e.ba5f(this.HW6Q, "display", "block")
    }
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), v4z = c4g("nej.j"), w4A = c4g("nm.w"),
        cb5g = c4g("nej.ut"), bD5I = c4g("nej.ui"), b4f;
    var ctK2x = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var ctJ2x = a4e.eB6v("m-wgt-atlist");
    var iX8P = a4e.to1x(ctK2x);
    w4A.bPv3x = NEJ.C();
    b4f = w4A.bPv3x.N5S(bD5I.el6f);
    b4f.cw5B = function (e4i) {
        this.fT7M = {};
        this.cE6y()
    };
    b4f.bl5q = function (e4i) {
        this.fT7M.txt = a4e.B4F(e4i.target);
        this.fT7M.data = e4i.data;
        this.fT7M.offset = e4i.offset;
        this.fT7M.rangeData = e4i.rangeData;
        this.fT7M.atIndex = e4i.atIndex;
        this.ctI2x(e4i);
        this.bn5s(e4i);
        this.fT7M.sgtsContainer = this.o4s;
        this.fT7M.sgtsList = a4e.H4L(this.o4s, "lst");
        this.fT7M.sgtsItem = a4e.H4L(this.o4s, "f-thide");
        this.To0x(e4i);
        this.ctF2x = w4A.bOt3x.A4E(this.fT7M)
    };
    b4f.bC5H = function (e4i) {
        this.bF5K();
        this.ctF2x.T5Y()
    };
    b4f.ch5m = function () {
        this.mj9a = iX8P
    };
    b4f.bW5b = function () {
        this.ci5n()
    };
    b4f.ctI2x = function (e4i) {
        this.o4s = a4e.dD6x(a4e.jm8e(a4e.cd5i(ctJ2x, e4i.data)))
    };
    b4f.To0x = function (e4i) {
        var bPy3x = a4e.H4L(this.o4s, "selected-item")[0];
        if (bPy3x) a4e.x4B(bPy3x, "selected-item");
        var cZ6T = e4i.offset.x + "px";
        var hv8n = e4i.offset.y + "px";
        a4e.ba5f(this.o4s, "left", cZ6T);
        a4e.ba5f(this.o4s, "top", hv8n)
    }
})();
(function () {
    var c4g = NEJ.P, v4z = c4g("nej.j"), gv7o = c4g("nm.ut");
    gv7o.bPC3x = function (bo5t) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var df6Z = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var Ip6j = bo5t.match(df6Z) || [];
        for (var bc5h = 0; bc5h < Ip6j.length; bc5h++) {
            Ip6j[bc5h] = Ip6j[bc5h].split("@")[1]
        }
        Ip6j = Ip6j.reverse();
        var ip8h = GUser.userId;
        var ctE2x = v4z.tu1x("mentioners" + ip8h) || [];
        var ka8S = Ip6j.concat(ctE2x);
        if (ka8S.length > 10) ka8S = ka8S.slice(0, 10);
        v4z.vF2x("mentioners" + ip8h, ka8S)
    };
    gv7o.ctD2x = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var ip8h = GUser.userId;
        return v4z.tu1x("mentioners" + ip8h) || []
    }
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), h4l = c4g("nej.v"), dy6s = c4g("nej.p"), v4z = c4g("nej.j"),
        k4o = c4g("nej.u"), cb5g = c4g("nej.ut"), w4A = c4g("nm.w"), gv7o = c4g("nm.ut"), l4p = c4g("nm.x"), b4f;
    var FullscreenApi = l4p.FL5Q || {};
    w4A.bPL3x = NEJ.C();
    b4f = w4A.bPL3x.N5S(cb5g.cJ6D);
    b4f.cw5B = function (e4i) {
        this.cE6y(e4i);
        this.bPN3x()
    };
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.gn7g = e4i.txt;
        this.o4s = e4i.body;
        this.bPV3x = e4i.before;
        this.Nl7e = e4i.flag;
        this.ctB2x = e4i.after;
        this.qI0x = [];
        if (dy6s.dr6l.browser != "ie") {
            setTimeout(function () {
                this.mc9T()
            }.f4j(this), 0)
        }
        this.Vp1x()
    };
    b4f.bC5H = function () {
        this.bF5K();
        if (this.vf2x) this.vf2x.T5Y();
        delete this.vf2x
    };
    b4f.Vp1x = function () {
        this.bX5c([[this.gn7g, "keyup", this.bQe3x.f4j(this, this.gn7g)], [this.gn7g, "click", this.bQe3x.f4j(this, this.gn7g)], [this.gn7g, "focus", this.mc9T.f4j(this)]])
    };
    b4f.mc9T = function (d4h) {
        this.oN0x = gv7o.uz2x(this.gn7g)
    };
    b4f.bPN3x = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var do6i = window.GUser.userId;
        var Y5d = "/api/user/getfollows/" + do6i;
        var gl7e = v4z.bm5r(Y5d, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function (j4n) {
                window.GFollowers = JSON.parse(j4n).follow
            }.f4j(this),
            onerror: function (j4n) {
            },
            onbeforerequest: function (j4n) {
            }
        })
    };
    b4f.bQf3x = function (index) {
        var D4H = this.gn7g.value, bi5n, bxx9o, bxw9n, Px9o;
        this.bPV3x.innerHTML = k4o.dH6B(D4H.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var mM9D = a4e.H4L(this.bPV3x, "j-test");
        for (var bc5h = 0; bc5h < mM9D.length; bc5h++) {
            mM9D[bc5h].innerText = " "
        }
        this.Nl7e.innerHTML = D4H.charAt(index);
        this.ctB2x.innerHTML = k4o.dH6B(D4H.substr(index + 1, D4H.length));
        Px9o = parseInt(a4e.dh6b(this.gn7g, "lineHeight"));
        a4e.ba5f(this.o4s, "display", "block");
        bxx9o = a4e.hU8M(this.Nl7e, this.o4s);
        bxw9n = a4e.hU8M(this.gn7g);
        a4e.ba5f(this.o4s, "display", "none");
        var cZ6T = bxx9o.x + bxw9n.x;
        var hv8n = bxx9o.y + bxw9n.y + Px9o;
        bi5n = {x: cZ6T, y: hv8n};
        this.ctz2x(bi5n)
    };
    b4f.bQe3x = function (eu6o, d4h) {
        h4l.cn5s(d4h);
        var eu6o = eu6o;
        var D4H = eu6o.value;
        var bq5v = D4H.length;
        var r4v = gv7o.uz2x(eu6o).start;
        var bQn3x = 0;
        var jX8P = d4h.keyCode || d4h.which;
        var ka8S;
        this.oN0x = gv7o.uz2x(eu6o);
        var bQo3x = false;
        for (var i = 1; i < 20; i++) {
            ka8S = r4v - i;
            if (D4H.charAt(ka8S) === " ") break;
            if (D4H.charAt(ka8S) === "@") {
                bQo3x = true;
                this.In6h = bQn3x = ka8S;
                break
            }
        }
        if (bQo3x && d4h.shiftKey === false && jX8P !== 38 && jX8P !== 40) {
            if (jX8P !== 27 && jX8P !== 13) {
                this.vf2x ? this.vf2x.T5Y() : null;
                this.bQf3x(bQn3x)
            }
        } else if (jX8P !== 38 && jX8P !== 40 && d4h.keyCode !== 32) {
            this.vf2x ? this.vf2x.T5Y() : null
        }
    };
    b4f.ctz2x = function (bi5n) {
        var bi5n = bi5n;
        var j4n = this.vh2x();
        var e4i = {
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            offset: bi5n,
            data: j4n,
            target: this.gn7g,
            rangeData: this.oN0x,
            atIndex: this.In6h
        };
        this.vf2x ? this.vf2x.T5Y() : null;
        this.vf2x = w4A.bPv3x.A4E(e4i)
    };
    b4f.vh2x = function () {
        var cty2x = gv7o.uz2x(this.gn7g).start;
        var ctw2x = this.In6h + 1;
        var bQs3x = gv7o.ctD2x() || [];
        var bQt3x = [];
        var bv5A = this.gn7g.value.substring(ctw2x, cty2x).toLowerCase();
        bv5A = bv5A.replace(/\[/g, "\\[");
        bv5A = bv5A.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.qI0x = window.GFollowers[0] ? window.GFollowers : []
        } else this.qI0x = [];
        if (!this.qI0x[0]) this.bPN3x();
        for (var bc5h = 0; bc5h < bQs3x.length; bc5h++) {
            for (var v4z = 0; v4z < this.qI0x.length; v4z++) {
                if (this.qI0x[v4z].nickname == bQs3x[bc5h]) bQt3x.push(this.qI0x[v4z])
            }
        }
        this.qI0x = k4o.cgp9g(this.qI0x, bQt3x, {union: true, begin: true});
        var ctv2x = this.qI0x.length;
        var baW3x = [];
        var Rg9X, Uu0x;
        if (!this.qI0x[0]) return {suggests: baW3x};
        for (var i = 0; i < ctv2x; i++) {
            Rg9X = this.qI0x[i].nickname.toLowerCase().search(bv5A);
            Uu0x = this.qI0x[i].py ? this.qI0x[i].py.toLowerCase().search(bv5A) : -1;
            if (Rg9X !== -1 || Uu0x != -1) baW3x.push(this.qI0x[i]);
            if (baW3x.length === 10) break
        }
        return {suggests: baW3x}
    };
    b4f.PW9N = function () {
        var hk7d = this.oN0x || {text: "", start: 0, end: 0};
        h4l.z4D(this.gn7g, "focus");
        gv7o.Il6f(this.gn7g, hk7d, "@");
        this.oN0x = gv7o.uz2x(this.gn7g);
        this.In6h = hk7d.start;
        this.bQf3x(this.In6h)
    };
    b4f.Ic6W = function () {
        if (this.vf2x) this.vf2x.T5Y()
    }
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), v4z = c4g("nej.j"), w4A = c4g("nm.w"),
        cb5g = c4g("nej.ut"), bD5I = c4g("nej.ui"), b4f;
    var ctt2x = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var cts2x = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var ge7X = a4e.jm8e(cts2x);
    var iX8P = a4e.to1x(ctt2x);
    w4A.PX9O = NEJ.C();
    b4f = w4A.PX9O.N5S(bD5I.el6f);
    b4f.cw5B = function (e4i) {
        this.fT7M = {};
        this.cE6y()
    };
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i);
        this.fT7M.txt = a4e.B4F(e4i.target);
        this.Nf7Y();
        this.Qe9V = w4A.bPL3x.A4E(this.fT7M)
    };
    b4f.bC5H = function (e4i) {
        this.bF5K();
        this.Qe9V.T5Y()
    };
    b4f.ch5m = function () {
        this.cf5k = ge7X;
        this.mj9a = iX8P
    };
    b4f.bW5b = function () {
        this.ci5n();
        var i4m = a4e.dk6e(a4e.B4F(this.o4s));
        this.fT7M.body = this.o4s;
        this.fT7M.before = i4m[0];
        this.fT7M.flag = i4m[1];
        this.fT7M.after = i4m[2]
    };
    b4f.Nf7Y = function () {
        var pC0x = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < pC0x.length; i++) {
            if (pC0x[i] === "width" && a4e.dh6b(this.fT7M.txt, pC0x[i]) == "100%") {
                var ctr2x = this.fT7M.txt.offsetWidth;
                if (!ctr2x) {
                    setTimeout(function () {
                        a4e.ba5f(this.o4s, pC0x[i], this.fT7M.txt.offsetWidth + "px")
                    }.f4j(this), 300)
                } else {
                    a4e.ba5f(this.o4s, pC0x[i], this.fT7M.txt.offsetWidth + "px")
                }
                continue
            }
            a4e.ba5f(this.o4s, pC0x[i], a4e.dh6b(this.fT7M.txt, pC0x[i]))
        }
    };
    b4f.PW9N = function () {
        this.Qe9V.PW9N()
    };
    b4f.Ic6W = function () {
        this.Qe9V.Ic6W()
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, fy7r = NEJ.R, a4e = c4g("nej.e"), h4l = c4g("nej.v"),
        k4o = c4g("nej.u"), I4M = c4g("nej.ut"), lc9T = c4g("nm.c"), R5W = {}, b4f;
    if (!!lc9T.bxs9j) return;
    lc9T.bxs9j = NEJ.C();
    b4f = lc9T.bxs9j.N5S(I4M.cJ6D);
    b4f.cw5B = function () {
        this.cE6y()
    };
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i)
    };
    b4f.bC5H = function () {
        this.bF5K()
    };
    b4f.HU6O = function (fh7a, cA5F, bdQ4U) {
        if (R5W[fh7a]) {
            this.gA7t("register commonJST[" + fh7a + "] duplicate");
            return
        }
        if (!k4o.gK7D(cA5F)) {
            cA5F = ctl.comJST.cti2x(fh7a, cA5F, bdQ4U)
        }
        R5W[fh7a] = cA5F
    };
    b4f.ctg2x = function (beL4P) {
        if (k4o.eL7E(beL4P)) {
            k4o.bd5i(beL4P, function (p4t) {
                ctl.comJST.HU6O.apply(this, p4t)
            }, this)
        } else if (k4o.lG9x(beL4P)) {
            k4o.eI6C(beL4P, function (fu7n, K4O) {
                ctl.comJST.HU6O(K4O, fu7n)
            })
        }
    };
    b4f.cti2x = function (fh7a, vl2x, bdQ4U) {
        vl2x = vl2x || {};
        NEJ.X(vl2x, {comJST: this.nx9o});
        if (vl2x.resetDataName && !k4o.eL7E(vl2x.resetDataName)) {
            vl2x.resetDataName = [vl2x.resetDataName]
        }
        return function () {
            var j4n = arguments[0], kc8U = arguments[1];
            if (vl2x.resetDataName) {
                var ka8S = {};
                for (var i = 0, ii = vl2x.resetDataName.length; i < ii; i++) {
                    ka8S[vl2x.resetDataName[i]] = arguments[i]
                }
                j4n = ka8S;
                kc8U = arguments[ii]
            }
            NEJ.X(j4n, vl2x, dZ6T);
            if (bdQ4U) {
                kc8U = kc8U || {};
                NEJ.X(kc8U, bdQ4U)
            }
            return a4e.cd5i(fh7a, j4n, kc8U)
        }
    };
    b4f.nx9o = function (fh7a) {
        if (!R5W[fh7a]) {
            this.gA7t("commonJST[" + fh7a + "] is unregister");
            return ""
        } else {
            return R5W[fh7a].apply(null, fy7r.slice.call(arguments, 1))
        }
    };
    b4f.dump = function () {
        return R5W
    };
    b4f.gA7t = function (ctc2x) {
        if (console && console.log) {
            console.log(ctc2x)
        }
    };
    var dZ6T = function (fu7n, K4O) {
        return K4O == "resetDataName"
    };
    c4g("ctl").comJST = lc9T.bxs9j.gm7f();
    a4e.crv2x({comJST: c4g("ctl").comJST.nx9o})
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, br5w = NEJ.F, fy7r = NEJ.R, a4e = c4g("nej.e"), h4l = c4g("nej.v"),
        k4o = c4g("nej.u"), I4M = c4g("nej.ut"), lc9T = c4g("nm.c"), l4p = c4g("nm.x"), R5W = {}, b4f;
    if (!!lc9T.bxo9f) return;
    lc9T.bxo9f = NEJ.C();
    b4f = lc9T.bxo9f.N5S(I4M.cJ6D);
    b4f.cw5B = function () {
        this.cE6y();
        var e4i = {
            "com-mv-artists": function (fR7K, ed6X, Rf9W, bxn9e) {
                return a4e.cd5i("com-mv-artists", {
                    artists: fR7K,
                    clazz: ed6X,
                    boxClazz: bxn9e,
                    mark: Rf9W || function (cO6I) {
                        return cO6I
                    },
                    escape: k4o.dH6B,
                    comJST: ctl.comJST.nx9o
                })
            },
            "com-album-artists": function (fR7K, ed6X, Rf9W, bxn9e) {
                return a4e.cd5i("com-album-artists", {
                    artists: fR7K,
                    clazz: ed6X,
                    boxClazz: bxn9e,
                    mark: Rf9W || function (cO6I) {
                        return cO6I
                    },
                    escape: k4o.dH6B,
                    comJST: ctl.comJST.nx9o
                })
            },
            "com-artists-title": {resetDataName: ["artists"], escape: k4o.dH6B},
            "com-user-type": function (dp6j, ed6X, lM9D, wJ2x, bRA5F) {
                return a4e.cd5i("com-user-type", {
                    x: dp6j,
                    clazz: ed6X || "",
                    clazz2: typeof bRA5F == "undefined" ? "icn" : bRA5F,
                    before: lM9D || "",
                    after: wJ2x || "",
                    isEmptyObject: l4p.bJd2x
                })
            }
        };
        for (var C4G in e4i) {
            ctl.comJST.HU6O(C4G, e4i[C4G])
        }
    };
    b4f.bl5q = function (e4i) {
        this.bn5s(e4i)
    };
    b4f.bC5H = function () {
        this.bF5K()
    };
    c4g("ctl").comJSTUtil = lc9T.bxo9f.gm7f()
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, a4e = c4g("nej.e"), dy6s = c4g("nej.p"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"), v4z = c4g("nej.j"), w4A = c4g("nm.w"), gv7o = c4g("nm.ut"), q4u = c4g("nm.d"),
        l4p = c4g("nm.x"), n4r = c4g("nm.l"), bxg9X = [2, 3], ec6W = ["sn", "db"], b4f, L5Q, ctb2x = {
            13: "playlist",
            17: "djprogram",
            18: "song",
            19: "album",
            20: "artist",
            21: "mv",
            24: "topic",
            25: "activity",
            70: "djradio",
            38: "concert",
            39: "video",
            41: "cloudvideo"
        }, Wy1x = {
            djprogram: "节目",
            album: "专辑",
            playlist: "歌单",
            song: "单曲",
            yunsong: "单曲",
            artist: "歌手",
            mv: "MV",
            topic: "音乐专栏",
            djradio: "电台",
            concert: "演出",
            video: "视频",
            cloudvideo: "视频"
        }, bRG5L = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by ",
            cloudvideo: " by "
        }, csX2x = {0: 13, 1: 17, 3: 19, 4: 18, 5: 21, 6: 24, 14: 70, 17: 20}, HR6L = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
        }, FullscreenApi = l4p.FL5Q || {};
    n4r.oP0x = NEJ.C();
    b4f = n4r.oP0x.N5S(n4r.eo6i);
    L5Q = n4r.oP0x.cs5x;
    b4f.bl5q = function (e4i) {
        if (e4i.onclose === undefined) {
            e4i.onclose = this.bRQ5V.f4j(this)
        }
        this.bn5s(e4i);
        this.zr3x = e4i.isPub;
        this.jM8E = e4i.rid || -1;
        this.ez6t = e4i.type || -1;
        this.bwZ8R = e4i.purl;
        this.Rv0x = e4i.name || "";
        this.RI0x = e4i.author || "";
        this.bwW8O = e4i.authors || "";
        this.Yk1x = e4i.actId;
        this.Yn1x = e4i.actName;
        this.bSy5D = e4i.title;
        this.Yo1x = {};
        this.csW2x = e4i.mesg || "";
        this.csV2x = e4i.placeholder || "说点什么吧";
        this.bwO8G = e4i.hideTip;
        this.csU2x = e4i.videoJumpUrl;
        var i4m, eS7L = +(new Date);
        try {
            i4m = top.localCache.B4F("user") || {}
        } catch (e) {
            i4m = {}
        }
        for (var i = 0, i4m = i4m.bindings || [], cG6A; i < i4m.length; ++i) {
            cG6A = !i4m[i].tokenJsonStr ? null : JSON.parse(i4m[i].tokenJsonStr);
            if (!cG6A || cG6A.expires_in === undefined) continue;
            var YZ2x = parseInt(cG6A.expires_in), Zf2x = parseInt(i4m[i].refreshTime),
                csT2x = (YZ2x + Zf2x) * 1e3 - 5 * 60 * 1e3;
            if (csT2x > eS7L) this.Yo1x[i4m[i].type] = !0
        }
        this.xw2x = w4A.HG6A.A4E({parent: this.Zv2x, err: this.bSO5T});
        if (this.hx8p) {
            this.hx8p.T5Y()
        }
        this.hx8p = w4A.PX9O.A4E({parent: document.body, target: this.ew6q});
        if (this.ez6t == 24 || this.ez6t == 21 || this.ez6t == 41 || this.HQ6K()) {
            this.zB3x.style.display = "none"
        } else {
            this.zB3x.style.display = "";
            this.oR0x = w4A.bgY4c.A4E({
                parent: this.bwz8r,
                button: this.zB3x,
                onstartupload: this.bTd5i.f4j(this, true),
                onfinishupload: this.bTd5i.f4j(this, false)
            })
        }
        if (this.HQ6K()) {
            this.qi0x.innerText = "";
            a4e.y4C(this.qi0x, "info-video");
            a4e.y4C(this.bwu8m, "f-hide")
        } else {
            a4e.x4B(this.bwu8m, "f-hide")
        }
    };
    b4f.bC5H = function () {
        this.bF5K();
        if (this.xw2x) {
            this.xw2x.T5Y();
            delete this.xw2x
        }
        if (this.hx8p) {
            this.hx8p.T5Y();
            delete this.hx8p
        }
        if (this.oR0x) {
            this.oR0x.T5Y();
            delete this.oR0x
        }
        if (this.mO9F) {
            this.mO9F.T5Y();
            delete this.mO9F
        }
    };
    b4f.ch5m = function () {
        this.cf5k = "m-wgt-sharewin"
    };
    b4f.bW5b = function () {
        this.ci5n();
        this.bTl5q = a4e.dk6e(this.o4s)[0];
        var bu5z = a4e.H4L(this.o4s, "j-flag");
        this.qF0x = bu5z.shift();
        this.bSO5T = bu5z.shift();
        this.Zv2x = bu5z.shift();
        this.ew6q = bu5z.shift();
        this.qi0x = bu5z.shift();
        this.bwr8j = bu5z.shift();
        this.csS2x = bu5z.shift();
        this.zB3x = bu5z.shift();
        this.cu5z = bu5z.shift();
        this.bwz8r = bu5z.shift();
        this.Cs4w = bu5z.shift();
        this.cGS3x = bu5z.shift();
        this.bwu8m = bu5z.shift();
        this.ek6e = bu5z.shift();
        this.bbx3x = a4e.H4L(this.bwu8m, "j-t");
        this.Bn4r = I4M.FZ5e.A4E({list: a4e.dk6e(this.qF0x), selected: "z-slt", onchange: this.bwm8e.f4j(this)});
        if (dy6s.dr6l.browser == "ie" && dy6s.dr6l.version < "8.0") {
            a4e.ba5f(this.Zv2x, "position", "relative");
            a4e.ba5f(this.Zv2x, "zIndex", "10")
        }
        h4l.s4w(window, "snsbind", this.Tg0x.f4j(this));
        h4l.s4w(this.ew6q, "input", this.fW7P.f4j(this));
        h4l.s4w(this.ew6q, "keyup", this.wf2x.f4j(this));
        h4l.s4w(this.o4s, "click", this.cM6G.f4j(this));
        this.S5X = q4u.bug8Y.A4E();
        this.S5X.s4w("onshareall", this.bbU3x.f4j(this, 0));
        this.S5X.s4w("onshareerror", this.jb8T.f4j(this));
        this.S5X.s4w("onshareprivate", this.bbU3x.f4j(this, 1));
        this.bbV3x = q4u.Au3x.A4E();
        this.gA7t = q4u.hO8G.A4E();
        try {
            this.Tm0x = top.api.sharePermission
        } catch (e) {
        }
        if (!this.Tm0x) {
            this.Tm0x = HR6L;
            v4z.bm5r("/api/event/user/permission", {
                type: "json", onload: function (d4h) {
                    if (d4h.code == 200) {
                        this.Tm0x = NEJ.EX(HR6L, d4h)
                    }
                }.f4j(this)
            })
        }
        l4p.oe0x()
    };
    b4f.bwm8e = function (d4h) {
        d4h.index == 0 ? a4e.x4B(this.bTl5q, "m-plshare") : a4e.y4C(this.bTl5q, "m-plshare");
        this.Zv2x.style.display = d4h.index == 0 ? "none" : "";
        this.csS2x.style.display = d4h.index == 0 ? "" : "none";
        this.zB3x.style.display = d4h.index == 0 ? "" : "none";
        if (this.ez6t == 24 || this.ez6t == 21) {
            this.zB3x.style.display = "none"
        }
        this.bSO5T.style.display = "none";
        this.ew6q.value = "";
        this.cc5h();
        this.HN6H();
        if (d4h.index == 0) {
            var cC6w = a4e.dh6b(this.ew6q, "width");
            if (cC6w == "auto" || !cC6w) {
                return
            } else {
                if (this.hx8p) {
                    this.hx8p.T5Y()
                }
                this.hx8p = w4A.PX9O.A4E({parent: document.body, target: this.ew6q})
            }
            this.bwz8r.style.display = ""
        } else {
            if (this.hx8p) {
                this.hx8p.T5Y();
                delete this.hx8p
            }
            this.bwz8r.style.display = "none"
        }
    };
    b4f.cM6G = function (d4h) {
        var g4k = h4l.X5c(d4h, "d:action");
        if (!g4k) return;
        if (a4e.t4x(g4k, "action") == "search") {
            h4l.cn5s(d4h)
        } else if (a4e.t4x(g4k, "default") === undefined) {
            h4l.cn5s(d4h)
        }
        switch (a4e.t4x(g4k, "action")) {
            case"txt":
                this.mc9T();
                break;
            case"search":
                if (this.HQ6K()) {
                    top.location.href = this.csU2x
                } else if (this.zr3x && this.ez6t != 24) {
                    if (this.mO9F) {
                        this.mO9F.T5Y()
                    }
                    this.mO9F = w4A.bsf7Y.A4E({
                        parent: this.o4s.parentNode,
                        onfinish: this.bwj8b.f4j(this),
                        oncancel: this.csM2x.f4j(this)
                    });
                    this.bwe8W = true;
                    this.o4s.style.display = "none";
                    this.HM6G(this.jM8E < 0 ? "添加音乐" : "更换音乐")
                }
                break;
            case"at":
                h4l.tW1x(d4h);
                !!this.hp8h && this.hp8h.bt5y();
                this.hx8p.PW9N();
                this.gg7Z();
                break;
            case"emot":
                h4l.tW1x(d4h);
                !!this.hx8p && this.hx8p.Ic6W();
                if (!this.hp8h) {
                    this.hp8h = n4r.Ii6c.A4E({parent: this.bwr8j});
                    this.hp8h.s4w("onselect", this.yk3x.f4j(this))
                }
                this.hp8h.J4N();
                break;
            case"upload":
                break;
            case"sns":
                h4l.bg5l(d4h);
                var bvW8O, bv5A, u4y = a4e.t4x(g4k, "type");
                if (!this.Yo1x[u4y]) {
                    bvW8O = g4k.href.split("?");
                    bv5A = k4o.hq8i(bvW8O[1]);
                    bv5A["csrf_token"] = v4z.gx7q("__csrf");
                    top.open(bvW8O[0] + "?" + k4o.cD6x(bv5A));
                    return
                }
                var bz5E = {2: "sn", 3: "db", 4: "rr"};
                l4p.AE3x(g4k, "u-slg-" + bz5E[u4y] + "-gray");
                break;
            case"close":
                !!this.hp8h && this.hp8h.bt5y();
                this.bRQ5V();
                break;
            case"share":
                h4l.bg5l(d4h);
                if (this.HQ6K()) {
                    if (!a4e.bE5J(g4k, "u-btn2-2-dis")) {
                        this.csL2x()
                    }
                } else if (a4e.bE5J(g4k, "u-btn2-2-dis")) {
                    if (!this.Tm0x.pubEventWithoutResource && this.jM8E < 0) {
                        this.csJ2x()
                    } else {
                    }
                } else if (this.jM8E < 0 && !this.ew6q.value && this.oR0x && this.oR0x.SK0x().length == 0) {
                    n4r.Z5e.J4N({type: 2, tip: "请输入内容"})
                } else {
                    this.csI2x()
                }
                break
        }
    };
    b4f.csJ2x = function () {
        var ue1x = 0, bvT8L = function () {
            if (ue1x % 2) {
                a4e.x4B(this.qi0x, "z-show")
            } else {
                a4e.y4C(this.qi0x, "z-show")
            }
            ue1x++;
            if (ue1x > 5) {
                clearInterval(eg6a)
            }
        }, eg6a;
        return function () {
            ue1x = 0;
            clearInterval(eg6a);
            eg6a = setInterval(bvT8L.f4j(this), 200)
        }
    }();
    b4f.Tg0x = function (m4q) {
        m4q = m4q.result;
        this.Yo1x[m4q.type] = !0;
        var r4v = k4o.di6c(bxg9X, m4q.type), cj5o = "u-slg-" + ec6W[r4v] + "-gray";
        a4e.x4B(this.bbx3x[r4v], cj5o)
    };
    b4f.bwj8b = function (bx5C) {
        var j4n = bx5C.data;
        this.jM8E = bx5C.id;
        this.ez6t = bx5C.type;
        this.o4s.style.display = "";
        this.HM6G(this.bSy5D);
        this.mO9F && this.mO9F.T5Y();
        this.bwe8W = false;
        this.bwZ8R = j4n.picUrl;
        this.Rv0x = j4n.title || "";
        this.RI0x = j4n.author || "";
        this.bwW8O = j4n.authors || "";
        this.csH2x();
        this.bfd4h()
    };
    b4f.csM2x = function () {
        this.mO9F && this.mO9F.T5Y();
        this.o4s.style.display = "";
        this.HM6G(this.bSy5D);
        this.bwe8W = false;
        this.bfd4h()
    };
    b4f.yk3x = function (d4h) {
        var bo5t = "[" + d4h.text + "]";
        gv7o.Il6f(this.ew6q, this.oN0x, bo5t);
        this.gg7Z()
    };
    b4f.fW7P = function (d4h) {
        dy6s.dr6l.browser == "ie" && dy6s.dr6l.version < "7.0" ? setTimeout(this.gg7Z.f4j(this), 0) : this.gg7Z()
    };
    b4f.wf2x = function (d4h) {
        this.mc9T();
        if (d4h.keyCode == 8) this.gg7Z()
    };
    b4f.gg7Z = function () {
        this.mc9T();
        this.HN6H()
    };
    b4f.HN6H = function () {
        var bq5v = Math.ceil(k4o.fv7o(this.ew6q.value.trim()) / 2);
        this.cu5z.innerText = 140 - bq5v;
        bq5v > 140 ? a4e.fj7c(this.cu5z, "s-fc4", "s-fc6") : a4e.fj7c(this.cu5z, "s-fc6", "s-fc4")
    };
    b4f.csI2x = function () {
        if (this.cQ6K()) return;
        if (k4o.fv7o(this.ew6q.value.trim()) > 280) {
            this.cc5h("字数超过140个字符");
            return
        }
        l4p.sy1x(this.csF2x.f4j(this))
    };
    b4f.csF2x = function (cG6A) {
        var u4y = this.Bn4r.tm1x(), j4n;
        if (u4y == 0) {
            for (var i = 0, IB6v = []; i < this.bbx3x.length; ++i) {
                if (!a4e.bE5J(this.bbx3x[i], "u-slg-" + ec6W[i] + "-gray")) IB6v.push(bxg9X[i])
            }
            this.cQ6K(!0);
            j4n = {
                id: this.jM8E,
                msg: this.ew6q.value.trim(),
                type: this.bfq4u(this.ez6t),
                picUrl: this.bwZ8R,
                snsTypes: IB6v.join(","),
                isPub: this.zr3x,
                checkToken: cG6A || ""
            };
            if (this.Yk1x > 0) {
                j4n.actId = this.Yk1x;
                if (this.Yn1x) {
                    j4n.msg = "#" + this.Yn1x + "#" + j4n.msg
                }
            }
            var ov0x = this.oR0x && this.oR0x.SK0x();
            if (ov0x && ov0x.length) {
                j4n.pics = ov0x
            }
            this.S5X.cwH0x(j4n)
        } else {
            var sZ1x = this.xw2x.Ve1x();
            if (sZ1x.length <= 0) {
                this.cc5h("请至少选择一位好友");
                return
            }
            this.S5X.cwG0x({
                data: {
                    id: this.jM8E,
                    msg: this.ew6q.value.trim(),
                    type: this.bfq4u(this.ez6t == 41 ? 39 : this.ez6t),
                    userIds: "[" + sZ1x.join(",") + "]",
                    checkToken: cG6A || ""
                }
            })
        }
    };
    b4f.csL2x = function () {
        if (this.cQ6K()) {
            return
        }
        this.gA7t.eV7O("click", {target: "share", targetid: "button", page: "sharevideo"});
        if (k4o.fv7o(this.ew6q.value.trim()) > 280) {
            this.cc5h("字数超过140个字符");
            return
        }
        l4p.sy1x(this.csD2x.bind(this))
    };
    b4f.csD2x = function (cG6A) {
        this.cQ6K(!0);
        var j4n = {msg: this.ew6q.value.trim() || "", type: "video", checkToken: cG6A || ""},
            csC2x = {videoId: this.jM8E};
        if (this.Yk1x > 0) {
            j4n.actId = this.Yk1x;
            if (this.Yn1x) {
                j4n.msg = "#" + this.Yn1x + "#" + j4n.msg
            }
        }
        j4n.videoinfo = JSON.stringify(csC2x);
        this.S5X.cwE0x({data: {videoId: this.jM8E, commit: true}, data2: j4n, snsTypes: ""})
    };
    b4f.bbU3x = function (u4y, m4q) {
        this.cQ6K(!1);
        this.bt5y();
        if (!this.bwO8G) {
            if (this.HQ6K()) {
                n4r.Z5e.J4N({tip: "视频将在转码完成后自动发出", autoclose: true})
            } else {
                n4r.Z5e.J4N({
                    tip: "分享成功" + (m4q.point > 0 ? ' 获得<em class="s-fc6">' + m4q.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h4l.z4D(n4r.oP0x, "sharesuccess", {isPrivate: u4y, rid: this.jM8E, rtype: this.ez6t, data: m4q.event});
        this.z4D("onshare")
    };
    b4f.jb8T = function (m4q) {
        this.cQ6K(!1);
        var bG5L = "分享失败";
        if (m4q.code) {
            switch (m4q.code) {
                case 250:
                    bG5L = m4q.message || m4q.msg || (this.zr3x ? "发布异常" : "分享异常");
                    break;
                case 404:
                    bG5L = "分享的资源不存在";
                    break;
                case 407:
                    bG5L = "输入内容包含有关键字";
                    break;
                case 408:
                    bG5L = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    bG5L = m4q.message || "根据对方设置，你没有该操作权限";
                    break;
                case 329:
                    return l4p.fs7l({clazz: "m-layer-w2", btntxt: "知道了", message: "当前账号存在较多未完成发布的视频<br>请稍后再试"})
            }
        }
        this.cc5h(bG5L)
    };
    b4f.mc9T = function () {
        this.oN0x = gv7o.uz2x(this.ew6q)
    };
    b4f.cc5h = function (bG5L) {
        this.dY6S(this.ek6e, bG5L)
    };
    b4f.cQ6K = function (db6V) {
        return this.dS6M(this.Cs4w, db6V, "分享", "分享中...")
    };
    b4f.bfq4u = function (hY8Q) {
        return ctb2x[hY8Q] || ""
    };
    b4f.csB2x = function () {
        var eu6o, wi2x = this.bfq4u(this.ez6t);
        this.qi0x.style.display = "";
        if (this.jM8E < 0) {
            this.qi0x.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.Rv0x) {
                this.qi0x.style.display = "none";
                return
            }
            var Wl1x = this.zr3x && this.ez6t != 24;
            eu6o = (Wy1x[wi2x] ? Wy1x[wi2x] + "：" : "") + this.Rv0x + (bRG5L[wi2x] || " ") + (wi2x == "mv" || wi2x == "album" ? this.bwW8O || this.RI0x : this.RI0x);
            a4e.dA6u(this.qi0x, "m-xwgt-share-infobar", {canChange: Wl1x, info: eu6o});
            if (Wl1x) {
                a4e.x4B(this.qi0x, "z-dis")
            } else {
                a4e.y4C(this.qi0x, "z-dis")
            }
        }
        a4e.x4B(this.qi0x, "info-video")
    };
    b4f.csH2x = function () {
        var wi2x = this.bfq4u(this.ez6t),
            eu6o = (Wy1x[wi2x] ? Wy1x[wi2x] + "：" : "") + this.Rv0x + (bRG5L[wi2x] || " ") + (wi2x == "mv" || wi2x == "album" ? this.bwW8O || this.RI0x : this.RI0x);
        Wl1x = this.zr3x && this.ez6t != 24;
        if (this.HQ6K()) {
        } else {
            a4e.x4B(this.qi0x, "info-video");
            a4e.dA6u(this.qi0x, "m-xwgt-share-infobar", {canChange: Wl1x, isPub: this.zr3x, info: eu6o})
        }
    };
    b4f.csA2x = function () {
        var ID6x = this.ew6q.value;
        if (this.zr3x) {
            if (!!this.bwe8W) {
                return !!ID6x && !!ID6x.length || !!this.oR0x && this.oR0x.SK0x().length > 0
            } else {
                return !(this.jM8E < 0) || !!ID6x && !!ID6x.length || !!this.oR0x && this.oR0x.SK0x().length > 0
            }
        } else {
            return !!ID6x && !!ID6x.length || !!this.oR0x && this.oR0x.SK0x().length > 0
        }
    };
    b4f.bfd4h = function () {
        var bVb6V = false;
        if (!this.zr3x || this.Tm0x.pubEventWithoutResource || !(this.jM8E < 0)) {
            bVb6V = true
        }
        if (bVb6V) {
            a4e.x4B(this.Cs4w, "u-btn2-2-dis")
        } else {
            a4e.y4C(this.Cs4w, "u-btn2-2-dis")
        }
    };
    b4f.bTd5i = function (bvv8n) {
        if (bvv8n) {
            a4e.y4C(this.Cs4w, "u-btn2-2-dis")
        } else {
            this.bfd4h()
        }
    };
    b4f.bRQ5V = function (d4h) {
        if (d4h) {
            d4h.stopped = true
        }
        if (this.csA2x()) {
            l4p.ho7h({
                parent: document[FullscreenApi.fullscreenElement] || document.body,
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function (V5a) {
                    if (V5a == "ok") {
                        this.z4D("forceclose", {});
                        this.bt5y();
                        h4l.z4D(n4r.oP0x, "shareclose", {})
                    }
                }.f4j(this)
            })
        } else {
            this.z4D("forceclose", {});
            this.bt5y();
            h4l.z4D(n4r.oP0x, "shareclose", {})
        }
    };
    b4f.HM6G = function (ep6j, dV6P) {
        this.oU0x.BR4V(ep6j, dV6P)
    };
    b4f.Wz1x = function (u4y) {
        this.gA7t.eV7O("page", {type: u4y})
    };
    b4f.HQ6K = function () {
        return this.ez6t == 39
    };
    b4f.J4N = function () {
        var csz2x = function (p4t, r4v) {
            var cj5o = "u-slg-" + ec6W[r4v] + "-gray";
            !this.Yo1x[bxg9X[r4v]] ? a4e.y4C(p4t, cj5o) : a4e.x4B(p4t, cj5o)
        };
        return function () {
            L5Q.J4N.call(this);
            this.o4s.style.display = "";
            this.cc5h();
            this.cQ6K(!1);
            this.Bn4r.Rt0x(0);
            this.ew6q.focus();
            this.ew6q.value = this.csW2x || "";
            this.ew6q.placeholder = this.csV2x || "";
            if (!this.HQ6K()) {
                this.csB2x()
            } else {
                a4e.y4C(this.qi0x, "info-video");
                a4e.dA6u(this.qi0x, "m-xwgt-share-videobar", {title: this.Rv0x, picUrl: this.bwZ8R})
            }
            this.gg7Z();
            this.xw2x.ctZ2x();
            k4o.bd5i(this.bbx3x, csz2x, this);
            this.mc9T();
            if (this.zr3x) {
                this.qF0x.style.display = "none"
            } else {
                this.qF0x.style.display = ""
            }
            this.bfd4h()
        }
    }();
    b4f.bt5y = function (d4h) {
        L5Q.bt5y.call(this);
        !!this.hp8h && this.hp8h.bt5y();
        if (this.xw2x) {
            this.xw2x.T5Y();
            delete this.xw2x
        }
        if (this.hx8p) {
            this.hx8p.T5Y();
            delete this.hx8p
        }
        if (this.oR0x) {
            this.oR0x.T5Y();
            delete this.oR0x
        }
        if (this.bVh6b) {
            this.bVh6b = this.bVh6b.T5Y()
        }
        if (this.mO9F) {
            this.mO9F.T5Y();
            delete this.mO9F
        }
    };
    l4p.kL9C = function (e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e4i.title === undefined) {
            e4i.title = "分享"
        }
        if (e4i.actId && e4i.type != 39) {
            var u4y = csX2x[e4i.resourceType], bV5a = e4i.resourceJson, hZ8R;
            if (k4o.fC7v(bV5a)) {
                try {
                    bV5a = JSON.parse(bV5a)
                } catch (e) {
                }
            }
            if (u4y) {
                hZ8R = l4p.bMg2x(u4y, bV5a);
                e4i.name = hZ8R.title;
                e4i.author = hZ8R.author;
                e4i.picUrl = hZ8R.picUrl;
                e4i.type = u4y;
                e4i.rid = (bV5a || []).id
            }
        }
        n4r.oP0x.J4N(e4i)
    };
    I4M.fK7D.A4E({element: n4r.oP0x, event: ["sharesuccess", "shareclose"]})
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, h4l = c4g("nej.v"), a4e = c4g("nej.e"), v4z = c4g("nej.j"), n4r = c4g("nm.l"),
        w4A = c4g("nm.w"), bD5I = c4g("nej.ui"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), b4f, L5Q;
    n4r.WY1x = NEJ.C();
    b4f = n4r.WY1x.N5S(n4r.eo6i);
    L5Q = n4r.WY1x.cs5x;
    b4f.cw5B = function () {
        this.cE6y()
    };
    b4f.bW5b = function () {
        this.ci5n();
        var i4m = a4e.H4L(this.o4s, "j-flag");
        h4l.s4w(i4m[0], "click", this.FK5P.f4j(this))
    };
    b4f.ch5m = function () {
        this.cf5k = "m-import-ok"
    };
    b4f.bl5q = function (e4i) {
        e4i.parent = e4i.parent || document.body;
        e4i.title = "歌曲同步完成";
        this.bn5s(e4i)
    };
    b4f.bC5H = function () {
        this.bF5K()
    };
    b4f.FK5P = function (d4h) {
        this.bt5y();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b4f.De4i = function () {
        this.bt5y()
    };
    b4f.bSY5d = function (d4h) {
        if (d4h.keyCode == 13) this.EH5M()
    }
})();
(function () {
    var c4g = NEJ.P, bb5g = NEJ.O, h4l = c4g("nej.v"), a4e = c4g("nej.e"), v4z = c4g("nej.j"), O5T = c4g("nej.p"),
        k4o = c4g("nej.u"), n4r = c4g("nm.l"), w4A = c4g("nm.w"), bD5I = c4g("nej.ui"), q4u = c4g("nm.d"),
        l4p = c4g("nm.x"), b4f, L5Q;
    n4r.bVl6f = NEJ.C();
    b4f = n4r.bVl6f.N5S(n4r.eo6i);
    b4f.ch5m = function () {
        this.cf5k = "m-programtips-layer"
    };
    b4f.bW5b = function () {
        this.ci5n();
        this.bU5Z = a4e.H4L(this.o4s, "j-flag")
    };
    b4f.bl5q = function (e4i) {
        if (e4i.inner) {
            var innerNode = a4e.H4L(this.o4s, "wrap-p")[0];
            if (innerNode) {
                innerNode.innerHTML = e4i.inner
            }
        }
        e4i.clazz = " m-layer-programtips " + (e4i.clazz || "");
        e4i.parent = e4i.parent || document.body;
        e4i.title = e4i.title || "付费内容提示";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bn5s(e4i);
        this.gY7R = e4i.id;
        this.cst2x = e4i.radiotype;
        this.ld9U = location.protocol + "//" + (this.bvs8k() || "music.163.com") + "/m/" + this.cst2x + "?id=" + this.gY7R;
        this.ld9U = e4i.url || this.ld9U;
        this.csq2x()
    };
    b4f.bC5H = function () {
        this.bF5K()
    };
    b4f.De4i = function () {
        this.bt5y()
    };
    b4f.FK5P = function (d4h) {
        this.z4D("onok", D4H);
        this.bt5y()
    };
    l4p.bvr8j = function (e4i) {
        n4r.bVl6f.A4E(e4i).J4N()
    };
    b4f.csq2x = function () {
        v4z.bm5r("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k4o.cD6x({url: this.ld9U, size: 180}),
            onload: function (j4n) {
                if (j4n.code == 200) {
                    this.csp2x(j4n.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.f4j(this)
        })
    };
    b4f.bvs8k = function () {
        var SA0x = location.host;
        if (SA0x.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b4f.csp2x = function (jU8M) {
        this.bU5Z[0].style.backgroundImage = "url(" + jU8M + ")"
    }
})();
(function () {
    var c4g = NEJ.P, a4e = c4g("nej.e"), dy6s = c4g("nej.p"), h4l = c4g("nej.v"), k4o = c4g("nej.u"),
        I4M = c4g("nej.ut"), v4z = c4g("nej.j"), q4u = c4g("nm.d"), l4p = c4g("nm.x"), E4I = c4g("nm.m"),
        n4r = c4g("nm.l"), M5R = c4g("nm.m.f"), b4f, L5Q;
    E4I.dg6a = NEJ.C();
    b4f = E4I.dg6a.N5S(I4M.du6o);
    b4f.bJ5O = function () {
        var ru1x = !1;
        return function () {
            if (ru1x) return;
            ru1x = !0;
            this.bQ5V();
            if (top == self) {
                return
            }
            this.uh1x = a4e.B4F("g_backtop");
            if (window.GRef != "mail") {
            } else {
                this.bVA6u()
            }
            I4M.fK7D.A4E({element: window, event: ["share", "playchange", "snsbind", "playstatechange"]});
            this.bX5c([[window, "scroll", this.BN4R.f4j(this)], [document, "keyup", this.cso2x.f4j(this)], [document.body, "click", this.sV1x.f4j(this)], [document, "mouseup", this.csn2x.f4j(this)], [this.uh1x, "click", this.Nb7U.f4j(this)], [q4u.tq1x, "message", this.vr2x.f4j(this)]]);
            l4p.cwP0x(document.body);
            this.BN4R();
            if (this.BK4O !== false && typeof GUser !== "undefined" && GUser.userId > 0) q4u.tq1x.gm7f().uL2x();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dy6s.dr6l.browser == "ie" && parseInt(dy6s.dr6l.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var hi7b = top.player.getPlaying();
                    if (hi7b && hi7b.track && hi7b.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + hi7b.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {
            }
            window.share = this.Ap3x.f4j(this);
            this.kz8r = q4u.hO8G.A4E();
            window.log = this.hh7a.f4j(this);
            var ui1x = location.search;
            if (ui1x) {
                var bv5A = ui1x.substr(ui1x.indexOf("?") + 1), gq7j = k4o.hq8i(bv5A);
                if (gq7j && gq7j["_hash"]) location.hash = gq7j["_hash"]
            }
        }
    }();
    b4f.cso2x = function (d4h) {
        var g4k = h4l.X5c(d4h);
        try {
            if (d4h.keyCode == 80 && l4p.bHR1x() || ["textarea", "input"].indexOf(g4k.tagName.toLowerCase()) >= 0) return;
            h4l.z4D(top.document, "keyup", {ctrlKey: d4h.ctrlKey, keyCode: d4h.keyCode})
        } catch (e) {
        }
    };
    b4f.sV1x = function (d4h) {
        var g4k = h4l.X5c(d4h);
        if (g4k && g4k.tagName == "INPUT") return;
        var g4k = h4l.X5c(d4h, "d:pid");
        if (g4k) {
            h4l.cn5s(d4h);
            var qr0x = a4e.t4x(g4k, "pid"), BG4K = a4e.t4x(g4k, "ptype"), V5a = a4e.t4x(g4k, "action") || "play";
            switch (V5a) {
                case"subscribe":
                    l4p.ms9j({tracks: [qr0x]});
                    break
            }
        }
        g4k = h4l.X5c(d4h, "d:resAction");
        if (g4k && g4k.className.indexOf("-dis") == -1) {
            var cS6M = a4e.t4x(g4k, "resId"), u4y = a4e.t4x(g4k, "resType"), bvm8e = a4e.t4x(g4k, "resRadiotype"),
                bvj8b = a4e.t4x(g4k, "resRadioid"), ee6Y = a4e.t4x(g4k, "resFrom"), j4n = a4e.t4x(g4k, "resData"),
                V5a = a4e.t4x(g4k, "resAction"), buk8c = a4e.t4x(g4k, "resCopyright"),
                Yt2x = a4e.t4x(g4k, "resAuditstatus");
            if (V5a != "log" && V5a != "bilog") h4l.cn5s(d4h);
            switch (V5a) {
                case"log":
                    j4n = (j4n || "").split("|");
                    if (!!j4n[0]) {
                        var bh5m = {id: cS6M, alg: j4n[2] || "itembased", scene: j4n[3], position: j4n[1] || 0};
                        if (!!j4n[4]) bh5m.srcid = j4n[4];
                        window.log(j4n[0], bh5m)
                    }
                    break;
                case"bilog":
                    var bxv9m = a4e.t4x(g4k, "logAction"), bxz9q = a4e.t4x(g4k, "logJson");
                    window.log(bxv9m, bxz9q);
                    break;
                case"share":
                    if (Yt2x && Yt2x == 1) {
                        l4p.iu8m("由于版权问题，该节目暂时无法分享。")
                    } else {
                        share(cS6M, u4y, a4e.t4x(g4k, "resPic"), a4e.t4x(g4k, "resName"), a4e.t4x(g4k, "resAuthor"), a4e.t4x(g4k, "resAuthors"))
                    }
                    break;
                case"fav":
                case"subscribe":
                    if (u4y == 18) {
                        var qz0x = a4e.t4x(g4k, "resLevel"), oc0x = a4e.t4x(g4k, "resFee");
                        if (qz0x == 10) {
                            l4p.uX2x(oc0x, cS6M, "song");
                            break
                        }
                        l4p.ms9j({tracks: [cS6M]})
                    }
                    break;
                case"download":
                    l4p.LU7N({id: cS6M, type: u4y});
                    break;
                case"programtips":
                    if (Yt2x && Yt2x == 1) {
                        l4p.iu8m("由于版权问题，该节目暂时无法分享。")
                    } else {
                        l4p.bvr8j({id: bvj8b, radiotype: bvm8e})
                    }
                    break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(d4h)
        } catch (e) {
        }
    };
    b4f.csn2x = function (d4h) {
        try {
            h4l.z4D(top.document, "mouseup")
        } catch (e) {
        }
    };
    b4f.BN4R = function () {
        var csm2x = function () {
            var ce5j = window.innerHeight;
            if (!k4o.sN1x(ce5j)) ce5j = (document.documentElement || document.body).clientHeight;
            return ce5j
        };
        return function (d4h) {
            if (!this.uh1x) return;
            var Yw2x = csm2x(), ga7T = document.documentElement.scrollTop || document.body.scrollTop;
            a4e.ba5f(this.uh1x, "display", ga7T > 0 ? "" : "none");
            if (dy6s.dr6l.browser == "ie" && dy6s.dr6l.version < "7.0") {
                var gy7r = Math.min(document.body.clientHeight, Yw2x + ga7T) - 204;
                a4e.ba5f(this.uh1x, "top", gy7r + "px")
            }
        }
    }();
    b4f.Nb7U = function (d4h) {
        h4l.cn5s(d4h);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b4f.Ap3x = function () {
        var bvi8a = function (d4h) {
            h4l.z4D(window, "share", d4h)
        };
        return function (cS6M, u4y, Ah3x, W5b, HH6B, HE5J) {
            l4p.kL9C({
                rid: cS6M,
                type: u4y,
                purl: Ah3x,
                name: W5b,
                author: HH6B,
                authors: HE5J,
                onshare: bvi8a.f4j(this)
            })
        }
    }();
    b4f.hh7a = function (V5a, bh5m) {
        try {
            top.log(V5a, bh5m)
        } catch (e) {
            if (V5a.indexOf("new|") == 0) {
                return this.kz8r.eV7O(V5a.slice(4), bh5m)
            }
            switch (V5a) {
                case"play":
                    this.kz8r.eq6k(bh5m);
                    break;
                case"search":
                    this.kz8r.bDh0x(bh5m);
                    break;
                default:
                    this.kz8r.eV7O(V5a, bh5m)
            }
        }
    };
    b4f.bVA6u = function () {
        var Zd2x, bvf8X = false, bs5x = [45, 60];
        var csl2x = function (bG5L) {
            if (bG5L.title != "MailBoxImport") return;
            var Q5V = JSON.parse(bG5L.content || "null") || bb5g;
            if (Q5V.status == 10) {
                n4r.WY1x.A4E().J4N();
                window.clearTimeout(Zd2x)
            }
        };
        var ou0x = function (d4h) {
            if (d4h.code == 200) {
                if (d4h.status == 1) {
                    h4l.s4w(q4u.Dv4z, "message", csl2x.f4j(this));
                    q4u.Dv4z.A4E().bxX9O();
                    bvf8X = true
                } else {
                    if (bvf8X) {
                        if (d4h.status == 10) {
                            n4r.WY1x.A4E().J4N();
                            h4l.he7X(q4u.Dv4z, "message");
                            window.clearTimeout(Zd2x);
                            bvf8X = false
                        }
                    } else {
                        window.clearTimeout(Zd2x)
                    }
                }
            }
        };
        return function () {
            var ub1x = bs5x.shift() * 1e3;
            v4z.bm5r("/api/musicbox/mail/status", {type: "json", method: "get", onload: ou0x.f4j(this)});
            if (ub1x) {
                Zd2x = window.setTimeout(arguments.callee, ub1x)
            }
        }
    }();
    b4f.vr2x = function (d4h) {
        try {
            top.polling(d4h)
        } catch (e) {
        }
    }
})()
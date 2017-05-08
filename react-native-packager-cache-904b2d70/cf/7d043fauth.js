/*! @license Firebase v3.9.0
Build: rev-cc77c9e
Terms: https://firebase.google.com/terms/ */

var firebase = require('./app');
(function () {
  (function () {
    var h,
        aa = aa || {},
        l = this,
        ba = function ba() {},
        ca = function ca(a) {
      var b = typeof a;if ("object" == b) {
        if (a) {
          if (a instanceof Array) return "array";if (a instanceof Object) return b;var c = Object.prototype.toString.call(a);if ("[object Window]" == c) return "object";if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
        } else return "null";
      } else if ("function" == b && "undefined" == typeof a.call) return "object";return b;
    },
        da = function da(a) {
      return null === a;
    },
        ea = function ea(a) {
      return "array" == ca(a);
    },
        fa = function fa(a) {
      var b = ca(a);return "array" == b || "object" == b && "number" == typeof a.length;
    },
        m = function m(a) {
      return "string" == typeof a;
    },
        ga = function ga(a) {
      return "number" == typeof a;
    },
        p = function p(a) {
      return "function" == ca(a);
    },
        ha = function ha(a) {
      var b = typeof a;return "object" == b && null != a || "function" == b;
    },
        ia = function ia(a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
        ja = function ja(a, b, c) {
      if (!a) throw Error();if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);return function () {
          var c = Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c, d);return a.apply(b, c);
        };
      }return function () {
        return a.apply(b, arguments);
      };
    },
        _q = function q(a, b, c) {
      _q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;return _q.apply(null, arguments);
    },
        ka = function ka(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);return function () {
        var b = c.slice();b.push.apply(b, arguments);return a.apply(this, b);
      };
    },
        la = Date.now || function () {
      return +new Date();
    },
        r = function r(a, b) {
      function c() {}c.prototype = b.prototype;a.xd = b.prototype;a.prototype = new c();a.prototype.constructor = a;a.Tf = function (a, c, f) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) {
          d[e - 2] = arguments[e];
        }return b.prototype[c].apply(a, d);
      };
    };var t = function t(a) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, t);else {
        var b = Error().stack;b && (this.stack = b);
      }a && (this.message = String(a));
    };r(t, Error);t.prototype.name = "CustomError";var ma = function ma(a, b) {
      for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
        d += c.shift() + e.shift();
      }return d + c.join("%s");
    },
        na = String.prototype.trim ? function (a) {
      return a.trim();
    } : function (a) {
      return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    },
        oa = /&/g,
        pa = /</g,
        qa = />/g,
        ra = /"/g,
        sa = /'/g,
        ta = /\x00/g,
        ua = /[\x00&<>"']/,
        u = function u(a, b) {
      return -1 != a.indexOf(b);
    },
        va = function va(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };var wa = function wa(a, b) {
      b.unshift(a);t.call(this, ma.apply(null, b));b.shift();
    };r(wa, t);wa.prototype.name = "AssertionError";
    var xa = function xa(a, b, c, d) {
      var e = "Assertion failed";if (c) var e = e + (": " + c),
          f = d;else a && (e += ": " + a, f = b);throw new wa("" + e, f || []);
    },
        v = function v(a, b, c) {
      a || xa("", null, b, Array.prototype.slice.call(arguments, 2));
    },
        ya = function ya(a, b) {
      throw new wa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    },
        za = function za(a, b, c) {
      ga(a) || xa("Expected number but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));return a;
    },
        Aa = function Aa(a, b, c) {
      m(a) || xa("Expected string but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
    },
        Ba = function Ba(a, b, c) {
      p(a) || xa("Expected function but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
    };var Ca = Array.prototype.indexOf ? function (a, b, c) {
      v(null != a.length);return Array.prototype.indexOf.call(a, b, c);
    } : function (a, b, c) {
      c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, c) : -1;for (; c < a.length; c++) {
        if (c in a && a[c] === b) return c;
      }return -1;
    },
        w = Array.prototype.forEach ? function (a, b, c) {
      v(null != a.length);Array.prototype.forEach.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++) {
        f in e && b.call(c, e[f], f, a);
      }
    },
        Da = function Da(a, b) {
      for (var c = m(a) ? a.split("") : a, d = a.length - 1; 0 <= d; --d) {
        d in c && b.call(void 0, c[d], d, a);
      }
    },
        Ea = Array.prototype.map ? function (a, b, c) {
      v(null != a.length);return Array.prototype.map.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = Array(d), f = m(a) ? a.split("") : a, g = 0; g < d; g++) {
        g in f && (e[g] = b.call(c, f[g], g, a));
      }return e;
    },
        Fa = Array.prototype.some ? function (a, b, c) {
      v(null != a.length);return Array.prototype.some.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++) {
        if (f in e && b.call(c, e[f], f, a)) return !0;
      }return !1;
    },
        Ha = function Ha(a) {
      var b;a: {
        b = Ga;for (var c = a.length, d = m(a) ? a.split("") : a, e = 0; e < c; e++) {
          if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;break a;
          }
        }b = -1;
      }return 0 > b ? null : m(a) ? a.charAt(b) : a[b];
    },
        Ia = function Ia(a, b) {
      return 0 <= Ca(a, b);
    },
        Ka = function Ka(a, b) {
      b = Ca(a, b);var c;(c = 0 <= b) && Ja(a, b);return c;
    },
        Ja = function Ja(a, b) {
      v(null != a.length);return 1 == Array.prototype.splice.call(a, b, 1).length;
    },
        La = function La(a, b) {
      var c = 0;Da(a, function (d, e) {
        b.call(void 0, d, e, a) && Ja(a, e) && c++;
      });
    },
        Ma = function Ma(a) {
      return Array.prototype.concat.apply([], arguments);
    },
        Na = function Na(a) {
      var b = a.length;if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) {
          c[d] = a[d];
        }return c;
      }return [];
    };var Oa = function Oa(a) {
      return Ea(a, function (a) {
        a = a.toString(16);return 1 < a.length ? a : "0" + a;
      }).join("");
    };var Pa;a: {
      var Qa = l.navigator;if (Qa) {
        var Ra = Qa.userAgent;if (Ra) {
          Pa = Ra;break a;
        }
      }Pa = "";
    }var x = function x(a) {
      return u(Pa, a);
    };var Sa = function Sa(a, b) {
      for (var c in a) {
        b.call(void 0, a[c], c, a);
      }
    },
        Ta = function Ta(a) {
      var b = [],
          c = 0,
          d;for (d in a) {
        b[c++] = a[d];
      }return b;
    },
        Ua = function Ua(a) {
      var b = [],
          c = 0,
          d;for (d in a) {
        b[c++] = d;
      }return b;
    },
        Va = function Va(a) {
      for (var b in a) {
        return !1;
      }return !0;
    },
        Wa = function Wa(a, b) {
      for (var c in a) {
        if (!(c in b) || a[c] !== b[c]) return !1;
      }for (c in b) {
        if (!(c in a)) return !1;
      }return !0;
    },
        Xa = function Xa(a) {
      var b = {},
          c;for (c in a) {
        b[c] = a[c];
      }return b;
    },
        Ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Za = function Za(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];for (c in d) {
          a[c] = d[c];
        }for (var f = 0; f < Ya.length; f++) {
          c = Ya[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
      }
    };var $a = function $a(a) {
      $a[" "](a);return a;
    };$a[" "] = ba;var bb = function bb(a, b) {
      var c = ab;return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
    };var cb = x("Opera"),
        y = x("Trident") || x("MSIE"),
        eb = x("Edge"),
        fb = eb || y,
        gb = x("Gecko") && !(u(Pa.toLowerCase(), "webkit") && !x("Edge")) && !(x("Trident") || x("MSIE")) && !x("Edge"),
        hb = u(Pa.toLowerCase(), "webkit") && !x("Edge"),
        ib = function ib() {
      var a = l.document;return a ? a.documentMode : void 0;
    },
        jb;
    a: {
      var kb = "",
          lb = function () {
        var a = Pa;if (gb) return (/rv\:([^\);]+)(\)|;)/.exec(a)
        );if (eb) return (/Edge\/([\d\.]+)/.exec(a)
        );if (y) return (/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
        );if (hb) return (/WebKit\/(\S+)/.exec(a)
        );if (cb) return (/(?:Version)[ \/]?(\S+)/.exec(a)
        );
      }();lb && (kb = lb ? lb[1] : "");if (y) {
        var mb = ib();if (null != mb && mb > parseFloat(kb)) {
          jb = String(mb);break a;
        }
      }jb = kb;
    }
    var nb = jb,
        ab = {},
        z = function z(a) {
      return bb(a, function () {
        for (var b = 0, c = na(String(nb)).split("."), d = na(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
          var g = c[f] || "",
              k = d[f] || "";do {
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];if (0 == g[0].length && 0 == k[0].length) break;b = va(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || va(0 == g[2].length, 0 == k[2].length) || va(g[2], k[2]);g = g[3];k = k[3];
          } while (0 == b);
        }return 0 <= b;
      });
    },
        ob;var pb = l.document;
    ob = pb && y ? ib() || ("CSS1Compat" == pb.compatMode ? parseInt(nb, 10) : 5) : void 0;var qb = null,
        rb = null,
        tb = function tb(a) {
      var b = "";sb(a, function (a) {
        b += String.fromCharCode(a);
      });return b;
    },
        sb = function sb(a, b) {
      function c(b) {
        for (; d < a.length;) {
          var c = a.charAt(d++),
              e = rb[c];if (null != e) return e;if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
        }return b;
      }ub();for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            k = c(64);if (64 === k && -1 === e) break;b(e << 2 | f >> 4);64 != g && (b(f << 4 & 240 | g >> 2), 64 != k && b(g << 6 & 192 | k));
      }
    },
        ub = function ub() {
      if (!qb) {
        qb = {};rb = {};for (var a = 0; 65 > a; a++) {
          qb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), rb[qb[a]] = a, 62 <= a && (rb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a);
        }
      }
    };var vb = function vb() {
      this.Da = -1;
    };var yb = function yb(a, b) {
      this.Da = 64;this.ec = l.Uint8Array ? new Uint8Array(this.Da) : Array(this.Da);this.Fc = this.hb = 0;this.h = [];this.lf = a;this.Wd = b;this.Mf = l.Int32Array ? new Int32Array(64) : Array(64);void 0 !== wb || (wb = l.Int32Array ? new Int32Array(xb) : xb);this.reset();
    },
        wb;r(yb, vb);for (var zb = [], Ab = 0; 63 > Ab; Ab++) {
      zb[Ab] = 0;
    }var Bb = Ma(128, zb);yb.prototype.reset = function () {
      this.Fc = this.hb = 0;this.h = l.Int32Array ? new Int32Array(this.Wd) : Na(this.Wd);
    };
    var Cb = function Cb(a) {
      var b = a.ec;v(b.length == a.Da);for (var c = a.Mf, d = 0, e = 0; e < b.length;) {
        c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
      }for (b = 16; 64 > b; b++) {
        var e = c[b - 15] | 0,
            d = c[b - 2] | 0,
            f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0,
            g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;c[b] = f + g | 0;
      }for (var d = a.h[0] | 0, e = a.h[1] | 0, k = a.h[2] | 0, n = a.h[3] | 0, C = a.h[4] | 0, db = a.h[5] | 0, Pb = a.h[6] | 0, f = a.h[7] | 0, b = 0; 64 > b; b++) {
        var Ah = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & k ^ e & k) | 0,
            g = C & db ^ ~C & Pb,
            f = f + ((C >>> 6 | C << 26) ^ (C >>> 11 | C << 21) ^ (C >>> 25 | C << 7)) | 0,
            g = g + (wb[b] | 0) | 0,
            g = f + (g + (c[b] | 0) | 0) | 0,
            f = Pb,
            Pb = db,
            db = C,
            C = n + g | 0,
            n = k,
            k = e,
            e = d,
            d = g + Ah | 0;
      }a.h[0] = a.h[0] + d | 0;a.h[1] = a.h[1] + e | 0;a.h[2] = a.h[2] + k | 0;a.h[3] = a.h[3] + n | 0;a.h[4] = a.h[4] + C | 0;a.h[5] = a.h[5] + db | 0;a.h[6] = a.h[6] + Pb | 0;a.h[7] = a.h[7] + f | 0;
    };
    yb.prototype.update = function (a, b) {
      void 0 === b && (b = a.length);var c = 0,
          d = this.hb;if (m(a)) for (; c < b;) {
        this.ec[d++] = a.charCodeAt(c++), d == this.Da && (Cb(this), d = 0);
      } else if (fa(a)) for (; c < b;) {
        var e = a[c++];if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0))) throw Error("message must be a byte array");this.ec[d++] = e;d == this.Da && (Cb(this), d = 0);
      } else throw Error("message must be string or array");this.hb = d;this.Fc += b;
    };
    yb.prototype.digest = function () {
      var a = [],
          b = 8 * this.Fc;56 > this.hb ? this.update(Bb, 56 - this.hb) : this.update(Bb, this.Da - (this.hb - 56));for (var c = 63; 56 <= c; c--) {
        this.ec[c] = b & 255, b /= 256;
      }Cb(this);for (c = b = 0; c < this.lf; c++) {
        for (var d = 24; 0 <= d; d -= 8) {
          a[b++] = this.h[c] >> d & 255;
        }
      }return a;
    };
    var xb = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];var Eb = function Eb() {
      yb.call(this, 8, Db);
    };r(Eb, yb);var Db = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];var Fb = function Fb() {
      this.Ga = this.Ga;this.tc = this.tc;
    };Fb.prototype.Ga = !1;Fb.prototype.isDisposed = function () {
      return this.Ga;
    };Fb.prototype.cb = function () {
      if (this.tc) for (; this.tc.length;) {
        this.tc.shift()();
      }
    };var Gb = !y || 9 <= Number(ob),
        Hb = y && !z("9");!hb || z("528");gb && z("1.9b") || y && z("8") || cb && z("9.5") || hb && z("528");gb && !z("8") || y && z("9");var Ib = function Ib(a, b) {
      this.type = a;this.currentTarget = this.target = b;this.defaultPrevented = this.nb = !1;this.ee = !0;
    };Ib.prototype.preventDefault = function () {
      this.defaultPrevented = !0;this.ee = !1;
    };var Jb = function Jb(a, b) {
      Ib.call(this, a ? a.type : "");this.relatedTarget = this.currentTarget = this.target = null;this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;this.key = "";this.charCode = this.keyCode = 0;this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;this.eb = this.state = null;a && this.init(a, b);
    };r(Jb, Ib);
    Jb.prototype.init = function (a, b) {
      var c = this.type = a.type,
          d = a.changedTouches ? a.changedTouches[0] : null;this.target = a.target || a.srcElement;this.currentTarget = b;if (b = a.relatedTarget) {
        if (gb) {
          var e;a: {
            try {
              $a(b.nodeName);e = !0;break a;
            } catch (f) {}e = !1;
          }e || (b = null);
        }
      } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);this.relatedTarget = b;null === d ? (this.offsetX = hb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = hb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);this.button = a.button;this.keyCode = a.keyCode || 0;this.key = a.key || "";this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);this.ctrlKey = a.ctrlKey;this.altKey = a.altKey;this.shiftKey = a.shiftKey;this.metaKey = a.metaKey;this.state = a.state;this.eb = a;a.defaultPrevented && this.preventDefault();
    };Jb.prototype.preventDefault = function () {
      Jb.xd.preventDefault.call(this);var a = this.eb;if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Hb) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
      } catch (b) {}
    };Jb.prototype.Pe = function () {
      return this.eb;
    };var Kb = "closure_listenable_" + (1E6 * Math.random() | 0),
        Lb = 0;var Mb = function Mb(a, b, c, d, e) {
      this.listener = a;this.xc = null;this.src = b;this.type = c;this.capture = !!d;this.kc = e;this.key = ++Lb;this.rb = this.dc = !1;
    },
        Nb = function Nb(a) {
      a.rb = !0;a.listener = null;a.xc = null;a.src = null;a.kc = null;
    };var Ob = function Ob(a) {
      this.src = a;this.G = {};this.$b = 0;
    };Ob.prototype.add = function (a, b, c, d, e) {
      var f = a.toString();a = this.G[f];a || (a = this.G[f] = [], this.$b++);var g = Qb(a, b, d, e);-1 < g ? (b = a[g], c || (b.dc = !1)) : (b = new Mb(b, this.src, f, !!d, e), b.dc = c, a.push(b));return b;
    };Ob.prototype.remove = function (a, b, c, d) {
      a = a.toString();if (!(a in this.G)) return !1;var e = this.G[a];b = Qb(e, b, c, d);return -1 < b ? (Nb(e[b]), Ja(e, b), 0 == e.length && (delete this.G[a], this.$b--), !0) : !1;
    };
    var Rb = function Rb(a, b) {
      var c = b.type;c in a.G && Ka(a.G[c], b) && (Nb(b), 0 == a.G[c].length && (delete a.G[c], a.$b--));
    };Ob.prototype.Uc = function (a, b, c, d) {
      a = this.G[a.toString()];var e = -1;a && (e = Qb(a, b, c, d));return -1 < e ? a[e] : null;
    };var Qb = function Qb(a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];if (!f.rb && f.listener == b && f.capture == !!c && f.kc == d) return e;
      }return -1;
    };var Sb = "closure_lm_" + (1E6 * Math.random() | 0),
        Tb = {},
        Ub = 0,
        Vb = function Vb(a, b, c, d, e) {
      if (ea(b)) for (var f = 0; f < b.length; f++) {
        Vb(a, b[f], c, d, e);
      } else c = Wb(c), a && a[Kb] ? a.listen(b, c, d, e) : Xb(a, b, c, !1, d, e);
    },
        Xb = function Xb(a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");var g = !!e,
          k = Yb(a);k || (a[Sb] = k = new Ob(a));c = k.add(b, c, d, e, f);if (!c.xc) {
        d = Zb();c.xc = d;d.src = a;d.listener = c;if (a.addEventListener) a.addEventListener(b.toString(), d, g);else if (a.attachEvent) a.attachEvent($b(b.toString()), d);else throw Error("addEventListener and attachEvent are unavailable.");
        Ub++;
      }
    },
        Zb = function Zb() {
      var a = ac,
          b = Gb ? function (c) {
        return a.call(b.src, b.listener, c);
      } : function (c) {
        c = a.call(b.src, b.listener, c);if (!c) return c;
      };return b;
    },
        bc = function bc(a, b, c, d, e) {
      if (ea(b)) for (var f = 0; f < b.length; f++) {
        bc(a, b[f], c, d, e);
      } else c = Wb(c), a && a[Kb] ? cc(a, b, c, d, e) : Xb(a, b, c, !0, d, e);
    },
        dc = function dc(a, b, c, d, e) {
      if (ea(b)) for (var f = 0; f < b.length; f++) {
        dc(a, b[f], c, d, e);
      } else c = Wb(c), a && a[Kb] ? a.fa.remove(String(b), c, d, e) : a && (a = Yb(a)) && (b = a.Uc(b, c, !!d, e)) && ec(b);
    },
        ec = function ec(a) {
      if (!ga(a) && a && !a.rb) {
        var b = a.src;if (b && b[Kb]) Rb(b.fa, a);else {
          var c = a.type,
              d = a.xc;b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent($b(c), d);Ub--;(c = Yb(b)) ? (Rb(c, a), 0 == c.$b && (c.src = null, b[Sb] = null)) : Nb(a);
        }
      }
    },
        $b = function $b(a) {
      return a in Tb ? Tb[a] : Tb[a] = "on" + a;
    },
        gc = function gc(a, b, c, d) {
      var e = !0;if (a = Yb(a)) if (b = a.G[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
        var f = b[a];f && f.capture == c && !f.rb && (f = fc(f, d), e = e && !1 !== f);
      }return e;
    },
        fc = function fc(a, b) {
      var c = a.listener,
          d = a.kc || a.src;a.dc && ec(a);return c.call(d, b);
    },
        ac = function ac(a, b) {
      if (a.rb) return !0;if (!Gb) {
        if (!b) a: {
          b = ["window", "event"];for (var c = l, d; d = b.shift();) {
            if (null != c[d]) c = c[d];else {
              b = null;break a;
            }
          }b = c;
        }d = b;b = new Jb(d, this);c = !0;if (!(0 > d.keyCode || void 0 != d.returnValue)) {
          a: {
            var e = !1;if (0 == d.keyCode) try {
              d.keyCode = -1;break a;
            } catch (g) {
              e = !0;
            }if (e || void 0 == d.returnValue) d.returnValue = !0;
          }d = [];for (e = b.currentTarget; e; e = e.parentNode) {
            d.push(e);
          }a = a.type;for (e = d.length - 1; !b.nb && 0 <= e; e--) {
            b.currentTarget = d[e];var f = gc(d[e], a, !0, b),
                c = c && f;
          }for (e = 0; !b.nb && e < d.length; e++) {
            b.currentTarget = d[e], f = gc(d[e], a, !1, b), c = c && f;
          }
        }return c;
      }return fc(a, new Jb(b, this));
    },
        Yb = function Yb(a) {
      a = a[Sb];return a instanceof Ob ? a : null;
    },
        hc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Wb = function Wb(a) {
      v(a, "Listener can not be null.");if (p(a)) return a;v(a.handleEvent, "An object listener must have handleEvent method.");a[hc] || (a[hc] = function (b) {
        return a.handleEvent(b);
      });return a[hc];
    };var ic = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var kc = function kc() {
      this.Cc = "";this.we = jc;
    };kc.prototype.Eb = !0;kc.prototype.Bb = function () {
      return this.Cc;
    };kc.prototype.toString = function () {
      return "Const{" + this.Cc + "}";
    };var lc = function lc(a) {
      if (a instanceof kc && a.constructor === kc && a.we === jc) return a.Cc;ya("expected object of type Const, got '" + a + "'");return "type_error:Const";
    },
        jc = {},
        mc = function mc(a) {
      var b = new kc();b.Cc = a;return b;
    };mc("");var oc = function oc() {
      this.wc = "";this.xe = nc;
    };oc.prototype.Eb = !0;oc.prototype.Bb = function () {
      return this.wc;
    };oc.prototype.toString = function () {
      return "TrustedResourceUrl{" + this.wc + "}";
    };var nc = {};var qc = function qc() {
      this.pa = "";this.ve = pc;
    };qc.prototype.Eb = !0;qc.prototype.Bb = function () {
      return this.pa;
    };qc.prototype.toString = function () {
      return "SafeUrl{" + this.pa + "}";
    };
    var rc = function rc(a) {
      if (a instanceof qc && a.constructor === qc && a.ve === pc) return a.pa;ya("expected object of type SafeUrl, got '" + a + "' of type " + ca(a));return "type_error:SafeUrl";
    },
        sc = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
        uc = function uc(a) {
      if (a instanceof qc) return a;a = a.Eb ? a.Bb() : String(a);sc.test(a) || (a = "about:invalid#zClosurez");return tc(a);
    },
        pc = {},
        tc = function tc(a) {
      var b = new qc();b.pa = a;return b;
    };tc("about:blank");var xc = function xc(a) {
      var b = [];vc(new wc(), a, b);return b.join("");
    },
        wc = function wc() {
      this.yc = void 0;
    },
        vc = function vc(a, b, c) {
      if (null == b) c.push("null");else {
        if ("object" == typeof b) {
          if (ea(b)) {
            var d = b;b = d.length;c.push("[");for (var e = "", f = 0; f < b; f++) {
              c.push(e), e = d[f], vc(a, a.yc ? a.yc.call(d, String(f), e) : e, c), e = ",";
            }c.push("]");return;
          }if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
            c.push("{");f = "";for (d in b) {
              Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), yc(d, c), c.push(":"), vc(a, a.yc ? a.yc.call(b, d, e) : e, c), f = ","));
            }c.push("}");return;
          }
        }switch (typeof b) {case "string":
            yc(b, c);break;case "number":
            c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");break;case "boolean":
            c.push(String(b));break;case "function":
            c.push("null");break;default:
            throw Error("Unknown type: " + typeof b);}
      }
    },
        zc = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\u000b" },
        Ac = /\uffff/.test("\uFFFF") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        yc = function yc(a, b) {
      b.push('"', a.replace(Ac, function (a) {
        var b = zc[a];b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), zc[a] = b);return b;
      }), '"');
    };var Bc = function Bc() {};Bc.prototype.Dd = null;var Cc = function Cc(a) {
      return a.Dd || (a.Dd = a.$c());
    };var Dc,
        Ec = function Ec() {};r(Ec, Bc);Ec.prototype.fc = function () {
      var a = Fc(this);return a ? new ActiveXObject(a) : new XMLHttpRequest();
    };Ec.prototype.$c = function () {
      var a = {};Fc(this) && (a[0] = !0, a[1] = !0);return a;
    };
    var Fc = function Fc(a) {
      if (!a.Vd && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
          var d = b[c];try {
            return new ActiveXObject(d), a.Vd = d;
          } catch (e) {}
        }throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }return a.Vd;
    };Dc = new Ec();var Gc = function Gc() {};r(Gc, Bc);Gc.prototype.fc = function () {
      var a = new XMLHttpRequest();if ("withCredentials" in a) return a;if ("undefined" != typeof XDomainRequest) return new Hc();throw Error("Unsupported browser");
    };Gc.prototype.$c = function () {
      return {};
    };
    var Hc = function Hc() {
      this.ua = new XDomainRequest();this.readyState = 0;this.onreadystatechange = null;this.responseText = "";this.status = -1;this.statusText = this.responseXML = null;this.ua.onload = _q(this.Re, this);this.ua.onerror = _q(this.Sd, this);this.ua.onprogress = _q(this.Se, this);this.ua.ontimeout = _q(this.Te, this);
    };h = Hc.prototype;h.open = function (a, b, c) {
      if (null != c && !c) throw Error("Only async requests are supported.");this.ua.open(a, b);
    };
    h.send = function (a) {
      if (a) {
        if ("string" == typeof a) this.ua.send(a);else throw Error("Only string data is supported");
      } else this.ua.send();
    };h.abort = function () {
      this.ua.abort();
    };h.setRequestHeader = function () {};h.Re = function () {
      this.status = 200;this.responseText = this.ua.responseText;Ic(this, 4);
    };h.Sd = function () {
      this.status = 500;this.responseText = "";Ic(this, 4);
    };h.Te = function () {
      this.Sd();
    };h.Se = function () {
      this.status = 200;Ic(this, 1);
    };var Ic = function Ic(a, b) {
      a.readyState = b;if (a.onreadystatechange) a.onreadystatechange();
    };var Jc = function Jc(a, b, c) {
      this.ef = c;this.Fe = a;this.wf = b;this.sc = 0;this.lc = null;
    };Jc.prototype.get = function () {
      var a;0 < this.sc ? (this.sc--, a = this.lc, this.lc = a.next, a.next = null) : a = this.Fe();return a;
    };Jc.prototype.put = function (a) {
      this.wf(a);this.sc < this.ef && (this.sc++, a.next = this.lc, this.lc = a);
    };var Kc = function Kc(a) {
      l.setTimeout(function () {
        throw a;
      }, 0);
    },
        Lc,
        Mc = function Mc() {
      var a = l.MessageChannel;"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !x("Presto") && (a = function a() {
        var a = document.createElement("IFRAME");a.style.display = "none";a.src = "";document.documentElement.appendChild(a);var b = a.contentWindow,
            a = b.document;a.open();a.write("");a.close();var c = "callImmediate" + Math.random(),
            d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
            a = _q(function (a) {
          if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage();
        }, this);b.addEventListener("message", a, !1);this.port1 = {};this.port2 = { postMessage: function postMessage() {
            b.postMessage(c, d);
          } };
      });if ("undefined" !== typeof a && !x("Trident") && !x("MSIE")) {
        var b = new a(),
            c = {},
            d = c;b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;var a = c.Gd;c.Gd = null;a();
          }
        };return function (a) {
          d.next = { Gd: a };d = d.next;b.port2.postMessage(0);
        };
      }return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
        var b = document.createElement("SCRIPT");b.onreadystatechange = function () {
          b.onreadystatechange = null;b.parentNode.removeChild(b);b = null;a();a = null;
        };document.documentElement.appendChild(b);
      } : function (a) {
        l.setTimeout(a, 0);
      };
    };var Nc = function Nc() {
      this.Jc = this.Za = null;
    },
        Pc = new Jc(function () {
      return new Oc();
    }, function (a) {
      a.reset();
    }, 100);Nc.prototype.add = function (a, b) {
      var c = Pc.get();c.set(a, b);this.Jc ? this.Jc.next = c : (v(!this.Za), this.Za = c);this.Jc = c;
    };Nc.prototype.remove = function () {
      var a = null;this.Za && (a = this.Za, this.Za = this.Za.next, this.Za || (this.Jc = null), a.next = null);return a;
    };var Oc = function Oc() {
      this.next = this.scope = this.Tc = null;
    };Oc.prototype.set = function (a, b) {
      this.Tc = a;this.scope = b;this.next = null;
    };
    Oc.prototype.reset = function () {
      this.next = this.scope = this.Tc = null;
    };var Uc = function Uc(a, b) {
      Qc || Rc();Sc || (Qc(), Sc = !0);Tc.add(a, b);
    },
        Qc,
        Rc = function Rc() {
      if (-1 != String(l.Promise).indexOf("[native code]")) {
        var a = l.Promise.resolve(void 0);Qc = function Qc() {
          a.then(Vc);
        };
      } else Qc = function Qc() {
        var a = Vc;!p(l.setImmediate) || l.Window && l.Window.prototype && !x("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (Lc || (Lc = Mc()), Lc(a)) : l.setImmediate(a);
      };
    },
        Sc = !1,
        Tc = new Nc(),
        Vc = function Vc() {
      for (var a; a = Tc.remove();) {
        try {
          a.Tc.call(a.scope);
        } catch (b) {
          Kc(b);
        }Pc.put(a);
      }Sc = !1;
    };!gb && !y || y && 9 <= Number(ob) || gb && z("1.9.1");y && z("9");var Xc = function Xc() {
      this.pa = "";this.ue = Wc;
    };Xc.prototype.Eb = !0;Xc.prototype.Bb = function () {
      return this.pa;
    };Xc.prototype.toString = function () {
      return "SafeHtml{" + this.pa + "}";
    };var Yc = function Yc(a) {
      if (a instanceof Xc && a.constructor === Xc && a.ue === Wc) return a.pa;ya("expected object of type SafeHtml, got '" + a + "' of type " + ca(a));return "type_error:SafeHtml";
    },
        Wc = {};Xc.prototype.$e = function (a) {
      this.pa = a;return this;
    };var $c = function $c(a, b) {
      Sa(b, function (b, d) {
        b && b.Eb && (b = b.Bb());"style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Zc.hasOwnProperty(d) ? a.setAttribute(Zc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
      });
    },
        Zc = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };var ad = function ad(a) {
      a.prototype.then = a.prototype.then;a.prototype.$goog_Thenable = !0;
    },
        bd = function bd(a) {
      if (!a) return !1;try {
        return !!a.$goog_Thenable;
      } catch (b) {
        return !1;
      }
    };var A = function A(a, b) {
      this.N = 0;this.ra = void 0;this.bb = this.na = this.s = null;this.jc = this.Sc = !1;if (a != ba) try {
        var c = this;a.call(b, function (a) {
          cd(c, 2, a);
        }, function (a) {
          if (!(a instanceof dd)) try {
            if (a instanceof Error) throw a;throw Error("Promise rejected.");
          } catch (e) {}cd(c, 3, a);
        });
      } catch (d) {
        cd(this, 3, d);
      }
    },
        ed = function ed() {
      this.next = this.context = this.jb = this.Oa = this.child = null;this.xb = !1;
    };ed.prototype.reset = function () {
      this.context = this.jb = this.Oa = this.child = null;this.xb = !1;
    };
    var fd = new Jc(function () {
      return new ed();
    }, function (a) {
      a.reset();
    }, 100),
        gd = function gd(a, b, c) {
      var d = fd.get();d.Oa = a;d.jb = b;d.context = c;return d;
    },
        B = function B(a) {
      if (a instanceof A) return a;var b = new A(ba);cd(b, 2, a);return b;
    },
        D = function D(a) {
      return new A(function (b, c) {
        c(a);
      });
    },
        id = function id(a, b, c) {
      hd(a, b, c, null) || Uc(ka(b, a));
    },
        jd = function jd(a) {
      return new A(function (b) {
        var c = a.length,
            d = [];if (c) for (var e = function e(a, _e, f) {
          c--;d[a] = _e ? { Ne: !0, value: f } : { Ne: !1, reason: f };0 == c && b(d);
        }, f = 0, g; f < a.length; f++) {
          g = a[f], id(g, ka(e, f, !0), ka(e, f, !1));
        } else b(d);
      });
    };A.prototype.then = function (a, b, c) {
      null != a && Ba(a, "opt_onFulfilled should be a function.");null != b && Ba(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return kd(this, p(a) ? a : null, p(b) ? b : null, c);
    };ad(A);var md = function md(a, b) {
      b = gd(b, b, void 0);b.xb = !0;ld(a, b);return a;
    };A.prototype.f = function (a, b) {
      return kd(this, null, a, b);
    };A.prototype.cancel = function (a) {
      0 == this.N && Uc(function () {
        var b = new dd(a);nd(this, b);
      }, this);
    };
    var nd = function nd(a, b) {
      if (0 == a.N) if (a.s) {
        var c = a.s;if (c.na) {
          for (var d = 0, e = null, f = null, g = c.na; g && (g.xb || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next) {
            e || (f = g);
          }e && (0 == c.N && 1 == d ? nd(c, b) : (f ? (d = f, v(c.na), v(null != d), d.next == c.bb && (c.bb = d), d.next = d.next.next) : od(c), pd(c, e, 3, b)));
        }a.s = null;
      } else cd(a, 3, b);
    },
        ld = function ld(a, b) {
      a.na || 2 != a.N && 3 != a.N || qd(a);v(null != b.Oa);a.bb ? a.bb.next = b : a.na = b;a.bb = b;
    },
        kd = function kd(a, b, c, d) {
      var e = gd(null, null, null);e.child = new A(function (a, g) {
        e.Oa = b ? function (c) {
          try {
            var e = b.call(d, c);a(e);
          } catch (C) {
            g(C);
          }
        } : a;e.jb = c ? function (b) {
          try {
            var e = c.call(d, b);void 0 === e && b instanceof dd ? g(b) : a(e);
          } catch (C) {
            g(C);
          }
        } : g;
      });e.child.s = a;ld(a, e);return e.child;
    };A.prototype.Jf = function (a) {
      v(1 == this.N);this.N = 0;cd(this, 2, a);
    };A.prototype.Kf = function (a) {
      v(1 == this.N);this.N = 0;cd(this, 3, a);
    };
    var cd = function cd(a, b, c) {
      0 == a.N && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.N = 1, hd(c, a.Jf, a.Kf, a) || (a.ra = c, a.N = b, a.s = null, qd(a), 3 != b || c instanceof dd || rd(a, c)));
    },
        hd = function hd(a, b, c, d) {
      if (a instanceof A) return null != b && Ba(b, "opt_onFulfilled should be a function."), null != c && Ba(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), ld(a, gd(b || ba, c || null, d)), !0;if (bd(a)) return a.then(b, c, d), !0;if (ha(a)) try {
        var e = a.then;if (p(e)) return sd(a, e, b, c, d), !0;
      } catch (f) {
        return c.call(d, f), !0;
      }return !1;
    },
        sd = function sd(a, b, c, d, e) {
      var f = !1,
          g = function g(a) {
        f || (f = !0, c.call(e, a));
      },
          k = function k(a) {
        f || (f = !0, d.call(e, a));
      };try {
        b.call(a, g, k);
      } catch (n) {
        k(n);
      }
    },
        qd = function qd(a) {
      a.Sc || (a.Sc = !0, Uc(a.Je, a));
    },
        od = function od(a) {
      var b = null;a.na && (b = a.na, a.na = b.next, b.next = null);a.na || (a.bb = null);null != b && v(null != b.Oa);return b;
    };A.prototype.Je = function () {
      for (var a; a = od(this);) {
        pd(this, a, this.N, this.ra);
      }this.Sc = !1;
    };
    var pd = function pd(a, b, c, d) {
      if (3 == c && b.jb && !b.xb) for (; a && a.jc; a = a.s) {
        a.jc = !1;
      }if (b.child) b.child.s = null, td(b, c, d);else try {
        b.xb ? b.Oa.call(b.context) : td(b, c, d);
      } catch (e) {
        ud.call(null, e);
      }fd.put(b);
    },
        td = function td(a, b, c) {
      2 == b ? a.Oa.call(a.context, c) : a.jb && a.jb.call(a.context, c);
    },
        rd = function rd(a, b) {
      a.jc = !0;Uc(function () {
        a.jc && ud.call(null, b);
      });
    },
        ud = Kc,
        dd = function dd(a) {
      t.call(this, a);
    };r(dd, t);dd.prototype.name = "cancel";
    var vd = function vd(a, b) {
      this.zc = [];this.$d = a;this.Jd = b || null;this.Cb = this.fb = !1;this.ra = void 0;this.ud = this.Cd = this.Nc = !1;this.Gc = 0;this.s = null;this.Oc = 0;
    };vd.prototype.cancel = function (a) {
      if (this.fb) this.ra instanceof vd && this.ra.cancel();else {
        if (this.s) {
          var b = this.s;delete this.s;a ? b.cancel(a) : (b.Oc--, 0 >= b.Oc && b.cancel());
        }this.$d ? this.$d.call(this.Jd, this) : this.ud = !0;this.fb || wd(this, new xd());
      }
    };vd.prototype.Hd = function (a, b) {
      this.Nc = !1;yd(this, a, b);
    };
    var yd = function yd(a, b, c) {
      a.fb = !0;a.ra = c;a.Cb = !b;zd(a);
    },
        Bd = function Bd(a) {
      if (a.fb) {
        if (!a.ud) throw new Ad();a.ud = !1;
      }
    };vd.prototype.callback = function (a) {
      Bd(this);Cd(a);yd(this, !0, a);
    };
    var wd = function wd(a, b) {
      Bd(a);Cd(b);yd(a, !1, b);
    },
        Cd = function Cd(a) {
      v(!(a instanceof vd), "An execution sequence may not be initiated with a blocking Deferred.");
    },
        Gd = function Gd(a) {
      var b = Dd("https://apis.google.com/js/client.js?onload=" + Ed);Fd(b, null, a, void 0);
    },
        Fd = function Fd(a, b, c, d) {
      v(!a.Cd, "Blocking Deferreds can not be re-used");a.zc.push([b, c, d]);a.fb && zd(a);
    };vd.prototype.then = function (a, b, c) {
      var d,
          e,
          f = new A(function (a, b) {
        d = a;e = b;
      });Fd(this, d, function (a) {
        a instanceof xd ? f.cancel() : e(a);
      });return f.then(a, b, c);
    };
    ad(vd);
    var Hd = function Hd(a) {
      return Fa(a.zc, function (a) {
        return p(a[1]);
      });
    },
        zd = function zd(a) {
      if (a.Gc && a.fb && Hd(a)) {
        var b = a.Gc,
            c = Id[b];c && (l.clearTimeout(c.Db), delete Id[b]);a.Gc = 0;
      }a.s && (a.s.Oc--, delete a.s);for (var b = a.ra, d = c = !1; a.zc.length && !a.Nc;) {
        var e = a.zc.shift(),
            f = e[0],
            g = e[1],
            e = e[2];if (f = a.Cb ? g : f) try {
          var k = f.call(e || a.Jd, b);void 0 !== k && (a.Cb = a.Cb && (k == b || k instanceof Error), a.ra = b = k);if (bd(b) || "function" === typeof l.Promise && b instanceof l.Promise) d = !0, a.Nc = !0;
        } catch (n) {
          b = n, a.Cb = !0, Hd(a) || (c = !0);
        }
      }a.ra = b;d && (k = _q(a.Hd, a, !0), d = _q(a.Hd, a, !1), b instanceof vd ? (Fd(b, k, d), b.Cd = !0) : b.then(k, d));c && (b = new Jd(b), Id[b.Db] = b, a.Gc = b.Db);
    },
        Ad = function Ad() {
      t.call(this);
    };r(Ad, t);Ad.prototype.message = "Deferred has already fired";Ad.prototype.name = "AlreadyCalledError";var xd = function xd() {
      t.call(this);
    };r(xd, t);xd.prototype.message = "Deferred was canceled";xd.prototype.name = "CanceledError";var Jd = function Jd(a) {
      this.Db = l.setTimeout(_q(this.If, this), 0);this.P = a;
    };
    Jd.prototype.If = function () {
      v(Id[this.Db], "Cannot throw an error that is not scheduled.");delete Id[this.Db];throw this.P;
    };var Id = {};var Dd = function Dd(a) {
      var b = new oc();b.wc = a;return Kd(b);
    },
        Kd = function Kd(a) {
      var b = {},
          c = b.document || document,
          d;a instanceof oc && a.constructor === oc && a.xe === nc ? d = a.wc : (ya("expected object of type TrustedResourceUrl, got '" + a + "' of type " + ca(a)), d = "type_error:TrustedResourceUrl");var e = document.createElement("SCRIPT");a = { fe: e, Zb: void 0 };var f = new vd(Ld, a),
          g = null,
          k = null != b.timeout ? b.timeout : 5E3;0 < k && (g = window.setTimeout(function () {
        Md(e, !0);wd(f, new Nd(1, "Timeout reached for loading script " + d));
      }, k), a.Zb = g);e.onload = e.onreadystatechange = function () {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Md(e, b.Uf || !1, g), f.callback(null));
      };e.onerror = function () {
        Md(e, !0, g);wd(f, new Nd(0, "Error while loading script " + d));
      };a = b.attributes || {};Za(a, { type: "text/javascript", charset: "UTF-8", src: d });$c(e, a);Od(c).appendChild(e);return f;
    },
        Od = function Od(a) {
      var b;return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement;
    },
        Ld = function Ld() {
      if (this && this.fe) {
        var a = this.fe;a && "SCRIPT" == a.tagName && Md(a, !0, this.Zb);
      }
    },
        Md = function Md(a, b, c) {
      null != c && l.clearTimeout(c);a.onload = ba;a.onerror = ba;a.onreadystatechange = ba;b && window.setTimeout(function () {
        a && a.parentNode && a.parentNode.removeChild(a);
      }, 0);
    },
        Nd = function Nd(a, b) {
      var c = "Jsloader error (code #" + a + ")";b && (c += ": " + b);t.call(this, c);this.code = a;
    };r(Nd, t);var Pd = "StopIteration" in l ? l.StopIteration : { message: "StopIteration", stack: "" },
        Qd = function Qd() {};Qd.prototype.next = function () {
      throw Pd;
    };Qd.prototype.ye = function () {
      return this;
    };var Rd = function Rd(a, b) {
      this.ga = {};this.w = [];this.wb = this.o = 0;var c = arguments.length;if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");for (var d = 0; d < c; d += 2) {
          this.set(arguments[d], arguments[d + 1]);
        }
      } else a && this.addAll(a);
    };Rd.prototype.Z = function () {
      Sd(this);for (var a = [], b = 0; b < this.w.length; b++) {
        a.push(this.ga[this.w[b]]);
      }return a;
    };Rd.prototype.oa = function () {
      Sd(this);return this.w.concat();
    };Rd.prototype.yb = function (a) {
      return Td(this.ga, a);
    };
    Rd.prototype.remove = function (a) {
      return Td(this.ga, a) ? (delete this.ga[a], this.o--, this.wb++, this.w.length > 2 * this.o && Sd(this), !0) : !1;
    };var Sd = function Sd(a) {
      if (a.o != a.w.length) {
        for (var b = 0, c = 0; b < a.w.length;) {
          var d = a.w[b];Td(a.ga, d) && (a.w[c++] = d);b++;
        }a.w.length = c;
      }if (a.o != a.w.length) {
        for (var e = {}, c = b = 0; b < a.w.length;) {
          d = a.w[b], Td(e, d) || (a.w[c++] = d, e[d] = 1), b++;
        }a.w.length = c;
      }
    };h = Rd.prototype;h.get = function (a, b) {
      return Td(this.ga, a) ? this.ga[a] : b;
    };
    h.set = function (a, b) {
      Td(this.ga, a) || (this.o++, this.w.push(a), this.wb++);this.ga[a] = b;
    };h.addAll = function (a) {
      var b;a instanceof Rd ? (b = a.oa(), a = a.Z()) : (b = Ua(a), a = Ta(a));for (var c = 0; c < b.length; c++) {
        this.set(b[c], a[c]);
      }
    };h.forEach = function (a, b) {
      for (var c = this.oa(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);a.call(b, f, e, this);
      }
    };h.clone = function () {
      return new Rd(this);
    };
    h.ye = function (a) {
      Sd(this);var b = 0,
          c = this.wb,
          d = this,
          e = new Qd();e.next = function () {
        if (c != d.wb) throw Error("The map has changed since the iterator was created");if (b >= d.w.length) throw Pd;var e = d.w[b++];return a ? e : d.ga[e];
      };return e;
    };var Td = function Td(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    };var Ud = function Ud(a) {
      if (a.Z && "function" == typeof a.Z) return a.Z();if (m(a)) return a.split("");if (fa(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) {
          b.push(a[d]);
        }return b;
      }return Ta(a);
    },
        Vd = function Vd(a) {
      if (a.oa && "function" == typeof a.oa) return a.oa();if (!a.Z || "function" != typeof a.Z) {
        if (fa(a) || m(a)) {
          var b = [];a = a.length;for (var c = 0; c < a; c++) {
            b.push(c);
          }return b;
        }return Ua(a);
      }
    },
        Wd = function Wd(a, b) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);else if (fa(a) || m(a)) w(a, b, void 0);else for (var c = Vd(a), d = Ud(a), e = d.length, f = 0; f < e; f++) {
        b.call(void 0, d[f], c && c[f], a);
      }
    };var Xd = function Xd(a, b, c, d, e) {
      this.reset(a, b, c, d, e);
    };Xd.prototype.Md = null;var Yd = 0;Xd.prototype.reset = function (a, b, c, d, e) {
      "number" == typeof e || Yd++;d || la();this.Ib = a;this.hf = b;delete this.Md;
    };Xd.prototype.ie = function (a) {
      this.Ib = a;
    };var Zd = function Zd(a) {
      this.jf = a;this.Td = this.Pc = this.Ib = this.s = null;
    },
        $d = function $d(a, b) {
      this.name = a;this.value = b;
    };$d.prototype.toString = function () {
      return this.name;
    };var ae = new $d("SEVERE", 1E3),
        be = new $d("CONFIG", 700),
        ce = new $d("FINE", 500);Zd.prototype.getParent = function () {
      return this.s;
    };Zd.prototype.ie = function (a) {
      this.Ib = a;
    };var de = function de(a) {
      if (a.Ib) return a.Ib;if (a.s) return de(a.s);ya("Root logger has no level set.");return null;
    };
    Zd.prototype.log = function (a, b, c) {
      if (a.value >= de(this).value) for (p(b) && (b = b()), a = new Xd(a, String(b), this.jf), c && (a.Md = c), c = "log:" + a.hf, l.console && (l.console.timeStamp ? l.console.timeStamp(c) : l.console.markTimeline && l.console.markTimeline(c)), l.msWriteProfilerMark && l.msWriteProfilerMark(c), c = this; c;) {
        var d = c,
            e = a;if (d.Td) for (var f = 0; b = d.Td[f]; f++) {
          b(e);
        }c = c.getParent();
      }
    };
    var ee = {},
        fe = null,
        ge = function ge(a) {
      fe || (fe = new Zd(""), ee[""] = fe, fe.ie(be));var b;if (!(b = ee[a])) {
        b = new Zd(a);var c = a.lastIndexOf("."),
            d = a.substr(c + 1),
            c = ge(a.substr(0, c));c.Pc || (c.Pc = {});c.Pc[d] = b;b.s = c;ee[a] = b;
      }return b;
    };var he = function he() {
      Fb.call(this);this.fa = new Ob(this);this.ze = this;this.hd = null;
    };r(he, Fb);he.prototype[Kb] = !0;h = he.prototype;h.addEventListener = function (a, b, c, d) {
      Vb(this, a, b, c, d);
    };h.removeEventListener = function (a, b, c, d) {
      dc(this, a, b, c, d);
    };
    h.dispatchEvent = function (a) {
      ie(this);var b,
          c = this.hd;if (c) {
        b = [];for (var d = 1; c; c = c.hd) {
          b.push(c), v(1E3 > ++d, "infinite loop");
        }
      }c = this.ze;d = a.type || a;if (m(a)) a = new Ib(a, c);else if (a instanceof Ib) a.target = a.target || c;else {
        var e = a;a = new Ib(d, c);Za(a, e);
      }var e = !0,
          f;if (b) for (var g = b.length - 1; !a.nb && 0 <= g; g--) {
        f = a.currentTarget = b[g], e = je(f, d, !0, a) && e;
      }a.nb || (f = a.currentTarget = c, e = je(f, d, !0, a) && e, a.nb || (e = je(f, d, !1, a) && e));if (b) for (g = 0; !a.nb && g < b.length; g++) {
        f = a.currentTarget = b[g], e = je(f, d, !1, a) && e;
      }return e;
    };
    h.cb = function () {
      he.xd.cb.call(this);if (this.fa) {
        var a = this.fa,
            b = 0,
            c;for (c in a.G) {
          for (var d = a.G[c], e = 0; e < d.length; e++) {
            ++b, Nb(d[e]);
          }delete a.G[c];a.$b--;
        }
      }this.hd = null;
    };h.listen = function (a, b, c, d) {
      ie(this);return this.fa.add(String(a), b, !1, c, d);
    };
    var cc = function cc(a, b, c, d, e) {
      a.fa.add(String(b), c, !0, d, e);
    },
        je = function je(a, b, c, d) {
      b = a.fa.G[String(b)];if (!b) return !0;b = b.concat();for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];if (g && !g.rb && g.capture == c) {
          var k = g.listener,
              n = g.kc || g.src;g.dc && Rb(a.fa, g);e = !1 !== k.call(n, d) && e;
        }
      }return e && 0 != d.ee;
    };he.prototype.Uc = function (a, b, c, d) {
      return this.fa.Uc(String(a), b, c, d);
    };var ie = function ie(a) {
      v(a.fa, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
    };var E = function E(a, b) {
      a && a.log(ce, b, void 0);
    };var ke = function ke(a, b, c) {
      if (p(a)) c && (a = _q(a, c));else if (a && "function" == typeof a.handleEvent) a = _q(a.handleEvent, a);else throw Error("Invalid listener argument");return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
    },
        le = function le(a) {
      var b = null;return new A(function (c, d) {
        b = ke(function () {
          c(void 0);
        }, a);-1 == b && d(Error("Failed to schedule timer."));
      }).f(function (a) {
        l.clearTimeout(b);throw a;
      });
    };var me = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        ne = function ne(a, b) {
      if (a) {
        a = a.split("&");for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
              e,
              f = null;0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];b(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "");
        }
      }
    };var F = function F(a) {
      he.call(this);this.headers = new Rd();this.Lc = a || null;this.va = !1;this.Kc = this.b = null;this.Hb = this.Zd = this.qc = "";this.Ka = this.Yc = this.oc = this.Rc = !1;this.sb = 0;this.Ec = null;this.de = "";this.Hc = this.sf = this.te = !1;
    };r(F, he);var oe = F.prototype,
        pe = ge("goog.net.XhrIo");oe.U = pe;var qe = /^https?$/i,
        re = ["POST", "PUT"];
    F.prototype.send = function (a, b, c, d) {
      if (this.b) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.qc + "; newUri=" + a);b = b ? b.toUpperCase() : "GET";this.qc = a;this.Hb = "";this.Zd = b;this.Rc = !1;this.va = !0;this.b = this.Lc ? this.Lc.fc() : Dc.fc();this.Kc = this.Lc ? Cc(this.Lc) : Cc(Dc);this.b.onreadystatechange = _q(this.be, this);this.sf && "onprogress" in this.b && (this.b.onprogress = _q(function (a) {
        this.ae(a, !0);
      }, this), this.b.upload && (this.b.upload.onprogress = _q(this.ae, this)));try {
        E(this.U, se(this, "Opening Xhr")), this.Yc = !0, this.b.open(b, String(a), !0), this.Yc = !1;
      } catch (f) {
        E(this.U, se(this, "Error opening Xhr: " + f.message));this.P(5, f);return;
      }a = c || "";var e = this.headers.clone();d && Wd(d, function (a, b) {
        e.set(b, a);
      });d = Ha(e.oa());c = l.FormData && a instanceof l.FormData;!Ia(re, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");e.forEach(function (a, b) {
        this.b.setRequestHeader(b, a);
      }, this);this.de && (this.b.responseType = this.de);"withCredentials" in this.b && this.b.withCredentials !== this.te && (this.b.withCredentials = this.te);try {
        te(this), 0 < this.sb && (this.Hc = ue(this.b), E(this.U, se(this, "Will abort after " + this.sb + "ms if incomplete, xhr2 " + this.Hc)), this.Hc ? (this.b.timeout = this.sb, this.b.ontimeout = _q(this.Zb, this)) : this.Ec = ke(this.Zb, this.sb, this)), E(this.U, se(this, "Sending request")), this.oc = !0, this.b.send(a), this.oc = !1;
      } catch (f) {
        E(this.U, se(this, "Send error: " + f.message)), this.P(5, f);
      }
    };var ue = function ue(a) {
      return y && z(9) && ga(a.timeout) && void 0 !== a.ontimeout;
    },
        Ga = function Ga(a) {
      return "content-type" == a.toLowerCase();
    };
    F.prototype.Zb = function () {
      "undefined" != typeof aa && this.b && (this.Hb = "Timed out after " + this.sb + "ms, aborting", E(this.U, se(this, this.Hb)), this.dispatchEvent("timeout"), this.abort(8));
    };F.prototype.P = function (a, b) {
      this.va = !1;this.b && (this.Ka = !0, this.b.abort(), this.Ka = !1);this.Hb = b;ve(this);we(this);
    };var ve = function ve(a) {
      a.Rc || (a.Rc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
    };
    F.prototype.abort = function () {
      this.b && this.va && (E(this.U, se(this, "Aborting")), this.va = !1, this.Ka = !0, this.b.abort(), this.Ka = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), we(this));
    };F.prototype.cb = function () {
      this.b && (this.va && (this.va = !1, this.Ka = !0, this.b.abort(), this.Ka = !1), we(this, !0));F.xd.cb.call(this);
    };F.prototype.be = function () {
      this.isDisposed() || (this.Yc || this.oc || this.Ka ? xe(this) : this.nf());
    };F.prototype.nf = function () {
      xe(this);
    };
    var xe = function xe(a) {
      if (a.va && "undefined" != typeof aa) if (a.Kc[1] && 4 == ye(a) && 2 == ze(a)) E(a.U, se(a, "Local request error detected and ignored"));else if (a.oc && 4 == ye(a)) ke(a.be, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == ye(a)) {
        E(a.U, se(a, "Request complete"));a.va = !1;try {
          var b = ze(a),
              c;a: switch (b) {case 200:case 201:case 202:case 204:case 206:case 304:case 1223:
              c = !0;break a;default:
              c = !1;}var d;if (!(d = c)) {
            var e;if (e = 0 === b) {
              var f = String(a.qc).match(me)[1] || null;if (!f && l.self && l.self.location) var g = l.self.location.protocol,
                  f = g.substr(0, g.length - 1);e = !qe.test(f ? f.toLowerCase() : "");
            }d = e;
          }if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");else {
            var k;try {
              k = 2 < ye(a) ? a.b.statusText : "";
            } catch (n) {
              E(a.U, "Can not get status: " + n.message), k = "";
            }a.Hb = k + " [" + ze(a) + "]";ve(a);
          }
        } finally {
          we(a);
        }
      }
    };F.prototype.ae = function (a, b) {
      v("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Ae(a, "progress"));this.dispatchEvent(Ae(a, b ? "downloadprogress" : "uploadprogress"));
    };
    var Ae = function Ae(a, b) {
      return { type: b, lengthComputable: a.lengthComputable, loaded: a.loaded, total: a.total };
    },
        we = function we(a, b) {
      if (a.b) {
        te(a);var c = a.b,
            d = a.Kc[0] ? ba : null;a.b = null;a.Kc = null;b || a.dispatchEvent("ready");try {
          c.onreadystatechange = d;
        } catch (e) {
          (a = a.U) && a.log(ae, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
        }
      }
    },
        te = function te(a) {
      a.b && a.Hc && (a.b.ontimeout = null);ga(a.Ec) && (l.clearTimeout(a.Ec), a.Ec = null);
    },
        ye = function ye(a) {
      return a.b ? a.b.readyState : 0;
    },
        ze = function ze(a) {
      try {
        return 2 < ye(a) ? a.b.status : -1;
      } catch (b) {
        return -1;
      }
    },
        Be = function Be(a) {
      try {
        return a.b ? a.b.responseText : "";
      } catch (b) {
        return E(a.U, "Can not get responseText: " + b.message), "";
      }
    },
        se = function se(a, b) {
      return b + " [" + a.Zd + " " + a.qc + " " + ze(a) + "]";
    };var G = function G(a, b) {
      this.ea = this.Xa = this.ha = "";this.lb = null;this.Ja = this.xa = "";this.S = this.df = !1;var c;a instanceof G ? (this.S = void 0 !== b ? b : a.S, Ce(this, a.ha), c = a.Xa, H(this), this.Xa = c, De(this, a.ea), Ee(this, a.lb), Fe(this, a.xa), Ge(this, a.W.clone()), a = a.Ja, H(this), this.Ja = a) : a && (c = String(a).match(me)) ? (this.S = !!b, Ce(this, c[1] || "", !0), a = c[2] || "", H(this), this.Xa = He(a), De(this, c[3] || "", !0), Ee(this, c[4]), Fe(this, c[5] || "", !0), Ge(this, c[6] || "", !0), a = c[7] || "", H(this), this.Ja = He(a)) : (this.S = !!b, this.W = new I(null, 0, this.S));
    };G.prototype.toString = function () {
      var a = [],
          b = this.ha;b && a.push(Ie(b, Je, !0), ":");var c = this.ea;if (c || "file" == b) a.push("//"), (b = this.Xa) && a.push(Ie(b, Je, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.lb, null != c && a.push(":", String(c));if (c = this.xa) this.ea && "/" != c.charAt(0) && a.push("/"), a.push(Ie(c, "/" == c.charAt(0) ? Ke : Le, !0));(c = this.W.toString()) && a.push("?", c);(c = this.Ja) && a.push("#", Ie(c, Me));return a.join("");
    };
    G.prototype.resolve = function (a) {
      var b = this.clone(),
          c = !!a.ha;c ? Ce(b, a.ha) : c = !!a.Xa;if (c) {
        var d = a.Xa;H(b);b.Xa = d;
      } else c = !!a.ea;c ? De(b, a.ea) : c = null != a.lb;d = a.xa;if (c) Ee(b, a.lb);else if (c = !!a.xa) {
        if ("/" != d.charAt(0)) if (this.ea && !this.xa) d = "/" + d;else {
          var e = b.xa.lastIndexOf("/");-1 != e && (d = b.xa.substr(0, e + 1) + d);
        }e = d;if (".." == e || "." == e) d = "";else if (u(e, "./") || u(e, "/.")) {
          for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], g = 0; g < e.length;) {
            var k = e[g++];"." == k ? d && g == e.length && f.push("") : ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0);
          }d = f.join("/");
        } else d = e;
      }c ? Fe(b, d) : c = "" !== a.W.toString();c ? Ge(b, a.W.clone()) : c = !!a.Ja;c && (a = a.Ja, H(b), b.Ja = a);return b;
    };G.prototype.clone = function () {
      return new G(this);
    };
    var Ce = function Ce(a, b, c) {
      H(a);a.ha = c ? He(b, !0) : b;a.ha && (a.ha = a.ha.replace(/:$/, ""));
    },
        De = function De(a, b, c) {
      H(a);a.ea = c ? He(b, !0) : b;
    },
        Ee = function Ee(a, b) {
      H(a);if (b) {
        b = Number(b);if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);a.lb = b;
      } else a.lb = null;
    },
        Fe = function Fe(a, b, c) {
      H(a);a.xa = c ? He(b, !0) : b;
    },
        Ge = function Ge(a, b, c) {
      H(a);b instanceof I ? (a.W = b, a.W.td(a.S)) : (c || (b = Ie(b, Ne)), a.W = new I(b, 0, a.S));
    },
        J = function J(a, b, c) {
      H(a);a.W.set(b, c);
    },
        Oe = function Oe(a, b) {
      return a.W.get(b);
    };
    G.prototype.removeParameter = function (a) {
      H(this);this.W.remove(a);return this;
    };var H = function H(a) {
      if (a.df) throw Error("Tried to modify a read-only Uri");
    };G.prototype.td = function (a) {
      this.S = a;this.W && this.W.td(a);return this;
    };
    var Pe = function Pe(a) {
      return a instanceof G ? a.clone() : new G(a, void 0);
    },
        Qe = function Qe(a, b) {
      var c = new G(null, void 0);Ce(c, "https");a && De(c, a);b && Fe(c, b);return c;
    },
        He = function He(a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    },
        Ie = function Ie(a, b, c) {
      return m(a) ? (a = encodeURI(a).replace(b, Re), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    },
        Re = function Re(a) {
      a = a.charCodeAt(0);return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    },
        Je = /[#\/\?@]/g,
        Le = /[\#\?:]/g,
        Ke = /[\#\?]/g,
        Ne = /[\#\?@]/g,
        Me = /#/g,
        I = function I(a, b, c) {
      this.o = this.l = null;this.O = a || null;this.S = !!c;
    },
        Se = function Se(a) {
      a.l || (a.l = new Rd(), a.o = 0, a.O && ne(a.O, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
      }));
    },
        Ue = function Ue(a) {
      var b = Vd(a);if ("undefined" == typeof b) throw Error("Keys are undefined");var c = new I(null, 0, void 0);a = Ud(a);for (var d = 0; d < b.length; d++) {
        var e = b[d],
            f = a[d];ea(f) ? Te(c, e, f) : c.add(e, f);
      }return c;
    };h = I.prototype;
    h.add = function (a, b) {
      Se(this);this.O = null;a = this.R(a);var c = this.l.get(a);c || this.l.set(a, c = []);c.push(b);this.o = za(this.o) + 1;return this;
    };h.remove = function (a) {
      Se(this);a = this.R(a);return this.l.yb(a) ? (this.O = null, this.o = za(this.o) - this.l.get(a).length, this.l.remove(a)) : !1;
    };h.yb = function (a) {
      Se(this);a = this.R(a);return this.l.yb(a);
    };h.oa = function () {
      Se(this);for (var a = this.l.Z(), b = this.l.oa(), c = [], d = 0; d < b.length; d++) {
        for (var e = a[d], f = 0; f < e.length; f++) {
          c.push(b[d]);
        }
      }return c;
    };
    h.Z = function (a) {
      Se(this);var b = [];if (m(a)) this.yb(a) && (b = Ma(b, this.l.get(this.R(a))));else {
        a = this.l.Z();for (var c = 0; c < a.length; c++) {
          b = Ma(b, a[c]);
        }
      }return b;
    };h.set = function (a, b) {
      Se(this);this.O = null;a = this.R(a);this.yb(a) && (this.o = za(this.o) - this.l.get(a).length);this.l.set(a, [b]);this.o = za(this.o) + 1;return this;
    };h.get = function (a, b) {
      a = a ? this.Z(a) : [];return 0 < a.length ? String(a[0]) : b;
    };var Te = function Te(a, b, c) {
      a.remove(b);0 < c.length && (a.O = null, a.l.set(a.R(b), Na(c)), a.o = za(a.o) + c.length);
    };
    I.prototype.toString = function () {
      if (this.O) return this.O;if (!this.l) return "";for (var a = [], b = this.l.oa(), c = 0; c < b.length; c++) {
        for (var d = b[c], e = encodeURIComponent(String(d)), d = this.Z(d), f = 0; f < d.length; f++) {
          var g = e;"" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));a.push(g);
        }
      }return this.O = a.join("&");
    };I.prototype.clone = function () {
      var a = new I();a.O = this.O;this.l && (a.l = this.l.clone(), a.o = this.o);return a;
    };I.prototype.R = function (a) {
      a = String(a);this.S && (a = a.toLowerCase());return a;
    };
    I.prototype.td = function (a) {
      a && !this.S && (Se(this), this.O = null, this.l.forEach(function (a, c) {
        var b = c.toLowerCase();c != b && (this.remove(c), Te(this, b, a));
      }, this));this.S = a;
    };var Ve = function Ve() {
      var a = K();return y && !!ob && 11 == ob || /Edge\/\d+/.test(a);
    },
        We = function We() {
      return l.window && l.window.location.href || "";
    },
        Xe = function Xe(a, b) {
      b = b || l.window;var c = "about:blank";a && (c = rc(uc(a)));b.location.href = c;
    },
        Ye = function Ye(a, b) {
      var c = [],
          d;for (d in a) {
        d in b ? typeof a[d] != typeof b[d] ? c.push(d) : ea(a[d]) ? Wa(a[d], b[d]) || c.push(d) : "object" == typeof a[d] && null != a[d] && null != b[d] ? 0 < Ye(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
      }for (d in b) {
        d in a || c.push(d);
      }return c;
    },
        $e = function $e() {
      var a;
      a = K();a = "Chrome" != Ze(a) ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;return a && 30 > a ? !1 : !y || !ob || 9 < ob;
    },
        af = function af(a) {
      a = (a || K()).toLowerCase();return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1;
    },
        bf = function bf(a) {
      a = a || l.window;try {
        a.close();
      } catch (b) {}
    },
        cf = function cf(a, b, c) {
      var d = Math.floor(1E9 * Math.random()).toString();b = b || 500;c = c || 600;var e = (window.screen.availHeight - c) / 2,
          f = (window.screen.availWidth - b) / 2;b = { width: b, height: c, top: 0 < e ? e : 0, left: 0 < f ? f : 0, location: !0, resizable: !0, statusbar: !0, toolbar: !1 };c = K().toLowerCase();d && (b.target = d, u(c, "crios/") && (b.target = "_blank"));"Firefox" == Ze(K()) && (a = a || "http://localhost", b.scrollbars = !0);var g;c = a || "about:blank";(d = b) || (d = {});a = window;b = c instanceof qc ? c : uc("undefined" != typeof c.href ? c.href : String(c));c = d.target || c.target;e = [];for (g in d) {
        switch (g) {case "width":case "height":case "top":case "left":
            e.push(g + "=" + d[g]);break;case "target":case "noreferrer":
            break;
          default:
            e.push(g + "=" + (d[g] ? 1 : 0));}
      }g = e.join(",");(x("iPhone") && !x("iPod") && !x("iPad") || x("iPad") || x("iPod")) && a.navigator && a.navigator.standalone && c && "_self" != c ? (g = a.document.createElement("A"), "undefined" != typeof HTMLAnchorElement && "undefined" != typeof Location && "undefined" != typeof Element && (e = g && (g instanceof HTMLAnchorElement || !(g instanceof Location || g instanceof Element)), f = ha(g) ? g.constructor.displayName || g.constructor.name || Object.prototype.toString.call(g) : void 0 === g ? "undefined" : null === g ? "null" : typeof g, v(e, "Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s", f)), b = b instanceof qc ? b : uc(b), g.href = rc(b), g.setAttribute("target", c), d.noreferrer && g.setAttribute("rel", "noreferrer"), d = document.createEvent("MouseEvent"), d.initMouseEvent("click", !0, !0, a, 1), g.dispatchEvent(d), g = {}) : d.noreferrer ? (g = a.open("", c, g), d = rc(b), g && (fb && u(d, ";") && (d = "'" + d.replace(/'/g, "%27") + "'"), g.opener = null, a = mc("b/12014412, meta tag with sanitized URL"), ua.test(d) && (-1 != d.indexOf("&") && (d = d.replace(oa, "&amp;")), -1 != d.indexOf("<") && (d = d.replace(pa, "&lt;")), -1 != d.indexOf(">") && (d = d.replace(qa, "&gt;")), -1 != d.indexOf('"') && (d = d.replace(ra, "&quot;")), -1 != d.indexOf("'") && (d = d.replace(sa, "&#39;")), -1 != d.indexOf("\x00") && (d = d.replace(ta, "&#0;"))), d = '<META HTTP-EQUIV="refresh" content="0; url=' + d + '">', Aa(lc(a), "must provide justification"), v(!/^[\s\xa0]*$/.test(lc(a)), "must provide non-empty justification"), g.document.write(Yc(new Xc().$e(d))), g.document.close())) : g = a.open(rc(b), c, g);if (g) try {
        g.focus();
      } catch (k) {}return g;
    },
        df = function df(a) {
      return new A(function (b) {
        var c = function c() {
          le(2E3).then(function () {
            if (!a || a.closed) b();else return c();
          });
        };return c();
      });
    },
        ef = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
        ff = function ff() {
      var a = null;return new A(function (b) {
        "complete" == l.document.readyState ? b() : (a = function a() {
          b();
        }, bc(window, "load", a));
      }).f(function (b) {
        dc(window, "load", a);throw b;
      });
    },
        hf = function hf() {
      return gf(void 0) ? ff().then(function () {
        return new A(function (a, b) {
          var c = l.document,
              d = setTimeout(function () {
            b(Error("Cordova framework is not ready."));
          }, 1E3);c.addEventListener("deviceready", function () {
            clearTimeout(d);a();
          }, !1);
        });
      }) : D(Error("Cordova must run in an Android or iOS file scheme."));
    },
        gf = function gf(a) {
      a = a || K();return !("file:" !== jf() || !a.toLowerCase().match(/iphone|ipad|ipod|android/));
    },
        kf = function kf() {
      var a = l.window;try {
        return !(!a || a == a.top);
      } catch (b) {
        return !1;
      }
    },
        L = function L() {
      return firebase.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : firebase.INTERNAL.hasOwnProperty("node") ? "Node" : "Browser";
    },
        lf = function lf() {
      var a = L();return "ReactNative" === a || "Node" === a;
    },
        Ze = function Ze(a) {
      var b = a.toLowerCase();if (u(b, "opera/") || u(b, "opr/") || u(b, "opios/")) return "Opera";if (u(b, "iemobile")) return "IEMobile";if (u(b, "msie") || u(b, "trident/")) return "IE";if (u(b, "edge/")) return "Edge";if (u(b, "firefox/")) return "Firefox";if (u(b, "silk/")) return "Silk";if (u(b, "blackberry")) return "Blackberry";if (u(b, "webos")) return "Webos";if (!u(b, "safari/") || u(b, "chrome/") || u(b, "crios/") || u(b, "android")) {
        if (!u(b, "chrome/") && !u(b, "crios/") || u(b, "edge/")) {
          if (u(b, "android")) return "Android";
          if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length) return a[1];
        } else return "Chrome";
      } else return "Safari";return "Other";
    },
        mf = function mf(a) {
      var b = L();return ("Browser" === b ? Ze(K()) : b) + "/JsCore/" + a;
    },
        K = function K() {
      return l.navigator && l.navigator.userAgent || "";
    },
        M = function M(a, b) {
      a = a.split(".");b = b || l;for (var c = 0; c < a.length && "object" == typeof b && null != b; c++) {
        b = b[a[c]];
      }c != a.length && (b = void 0);return b;
    },
        pf = function pf() {
      var a;if (a = (nf() || "chrome-extension:" === jf() || gf()) && !lf()) a: {
        try {
          var b = l.localStorage,
              c = of();if (b) {
            b.setItem(c, "1");b.removeItem(c);a = Ve() ? !!l.indexedDB : !0;break a;
          }
        } catch (d) {}a = !1;
      }return a;
    },
        nf = function nf() {
      return "http:" === jf() || "https:" === jf();
    },
        jf = function jf() {
      return l.location && l.location.protocol || null;
    },
        qf = function qf(a) {
      a = a || K();return af(a) || "Firefox" == Ze(a) ? !1 : !0;
    },
        rf = function rf(a) {
      return "undefined" === typeof a ? null : xc(a);
    },
        sf = function sf(a) {
      var b = {},
          c;for (c in a) {
        a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);
      }return b;
    },
        tf = function tf(a) {
      if (null !== a) return JSON.parse(a);
    },
        of = function of(a) {
      return a ? a : "" + Math.floor(1E9 * Math.random()).toString();
    },
        uf = function uf(a) {
      a = a || K();return "Safari" == Ze(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? !1 : !0;
    },
        vf = function vf() {
      var a = l.___jsl;if (a && a.H) for (var b in a.H) {
        if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP) for (var c = 0; c < a.CP.length; c++) {
          a.CP[c] = null;
        }
      }
    },
        wf = function wf() {
      return l.navigator && "boolean" === typeof l.navigator.onLine ? l.navigator.onLine : !0;
    },
        xf = function xf(a, b, c, d) {
      if (a > b) throw Error("Short delay should be less than long delay!");
      this.Ff = a;this.gf = b;a = c || K();d = d || L();this.cf = af(a) || "ReactNative" === d;
    };xf.prototype.get = function () {
      return this.cf ? this.gf : this.Ff;
    };
    var yf = function yf() {
      var a = l.document;return a && "undefined" !== typeof a.visibilityState ? "visible" == a.visibilityState : !0;
    },
        zf = function zf() {
      var a = l.document,
          _b = null;return yf() || !a ? B() : new A(function (c) {
        _b = function b() {
          yf() && (a.removeEventListener("visibilitychange", _b, !1), c());
        };a.addEventListener("visibilitychange", _b, !1);
      }).f(function (c) {
        a.removeEventListener("visibilitychange", _b, !1);throw c;
      });
    };var Af = {},
        Bf = function Bf(a) {
      Af[a] || (Af[a] = !0, "undefined" !== typeof console && "function" === typeof console.warn && console.warn(a));
    };var Cf;try {
      var Df = {};Object.defineProperty(Df, "abcd", { configurable: !0, enumerable: !0, value: 1 });Object.defineProperty(Df, "abcd", { configurable: !0, enumerable: !0, value: 2 });Cf = 2 == Df.abcd;
    } catch (a) {
      Cf = !1;
    }
    var N = function N(a, b, c) {
      Cf ? Object.defineProperty(a, b, { configurable: !0, enumerable: !0, value: c }) : a[b] = c;
    },
        Ef = function Ef(a, b) {
      Cf ? Object.defineProperty(a, "provider", { configurable: !0, enumerable: !0, get: function get() {
          Bf("firebase.auth.AuthCredential.provider is deprecated. Please use the providerId field instead.");return b;
        } }) : a.provider = b;
    },
        Ff = function Ff(a, b) {
      if (b) for (var c in b) {
        b.hasOwnProperty(c) && N(a, c, b[c]);
      }
    },
        Gf = function Gf(a) {
      var b = {};Ff(b, a);return b;
    },
        Hf = function Hf(a) {
      var b = {},
          c;for (c in a) {
        a.hasOwnProperty(c) && (b[c] = a[c]);
      }return b;
    },
        If = function If(a, b) {
      if (!b || !b.length) return !0;if (!a) return !1;for (var c = 0; c < b.length; c++) {
        var d = a[b[c]];if (void 0 === d || null === d || "" === d) return !1;
      }return !0;
    },
        Jf = function Jf(a) {
      var b = a;if ("object" == typeof a && null != a) {
        var b = "length" in a ? [] : {},
            c;for (c in a) {
          N(b, c, Jf(a[c]));
        }
      }return b;
    };var Kf = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
        Lf = ["client_id", "response_type", "scope", "redirect_uri", "state"],
        Mf = { Pf: { Mb: 500, Lb: 600, providerId: "facebook.com", qd: Lf }, Qf: { Mb: 500, Lb: 620, providerId: "github.com", qd: Lf }, Rf: { Mb: 515, Lb: 680, providerId: "google.com", qd: Lf }, Sf: { Mb: 485, Lb: 705, providerId: "twitter.com", qd: Kf } },
        Nf = function Nf(a) {
      for (var b in Mf) {
        if (Mf[b].providerId == a) return Mf[b];
      }return null;
    };var O = function O(a, b) {
      this.code = "auth/" + a;this.message = b || Of[a] || "";
    };r(O, Error);O.prototype.C = function () {
      return { code: this.code, message: this.message };
    };O.prototype.toJSON = function () {
      return this.C();
    };
    var Pf = function Pf(a) {
      var b = a && a.code;return b ? new O(b.substring(5), a.message) : null;
    },
        Of = { "argument-error": "", "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.", "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.", "captcha-check-failed": "",
      "code-expired": "", "cordova-not-ready": "Cordova framework is not ready.", "cors-unsupported": "This browser is not supported.", "credential-already-in-use": "This credential is already associated with a different user account.", "custom-token-mismatch": "The custom token corresponds to a different audience.", "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.", "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
      "email-already-in-use": "The email address is already in use by another account.", "expired-action-code": "The action code has expired. ", "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.", "internal-error": "An internal error has occurred.", "invalid-app-credential": "", "invalid-app-id": "The mobile app identifier is not registed for the current project.", "invalid-user-token": "The user's credential is no longer valid. The user must sign in again.",
      "invalid-auth-event": "An internal error has occurred.", "invalid-verification-code": "", "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.", "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.", "invalid-email": "The email address is badly formatted.", "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
      "invalid-credential": "The supplied auth credential is malformed or has expired.", "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.", "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
      "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.", "wrong-password": "The password is invalid or the user does not have a password.", "invalid-identifier-number": "", "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.", "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
      "invalid-verification-id": "", "missing-iframe-start": "An internal error has occurred.", "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.", "missing-app-credential": "", "missing-verification-code": "", "missing-identifier-number": "", "missing-verification-id": "", "app-deleted": "This instance of FirebaseApp has been deleted.", "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
      "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.", "no-auth-event": "An internal error has occurred.", "no-such-provider": "User was not linked to an account with the given provider.", "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.", "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
      "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.", "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.", "provider-already-linked": "User can only be linked to one identity for the given provider.", "quota-exceeded": "", "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.", "redirect-operation-pending": "A redirect sign-in operation is already pending.", timeout: "The operation has timed out.",
      "user-token-expired": "The user's credential is no longer valid. The user must sign in again.", "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.", "user-cancelled": "User did not grant your application the permissions it requested.", "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.", "user-disabled": "The user account has been disabled by an administrator.", "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
      "user-signed-out": "", "weak-password": "The password must be 6 characters long or more.", "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled." };var P = function P(a, b, c, d, e) {
      this.da = a;this.J = b || null;this.tb = c || null;this.sd = d || null;this.P = e || null;if (this.tb || this.P) {
        if (this.tb && this.P) throw new O("invalid-auth-event");if (this.tb && !this.sd) throw new O("invalid-auth-event");
      } else throw new O("invalid-auth-event");
    };P.prototype.ic = function () {
      return this.sd;
    };P.prototype.getError = function () {
      return this.P;
    };P.prototype.C = function () {
      return { type: this.da, eventId: this.J, urlResponse: this.tb, sessionId: this.sd, error: this.P && this.P.C() };
    };
    var Qf = function Qf(a) {
      a = a || {};return a.type ? new P(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && Pf(a.error)) : null;
    };var Rf = function Rf(a) {
      var b = "unauthorized-domain",
          c = void 0,
          d = Pe(a);a = d.ea;d = d.ha;"chrome-extension" == d ? c = ma("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : "http" == d || "https" == d ? c = ma("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b = "operation-not-supported-in-this-environment";O.call(this, b, c);
    };r(Rf, O);var Sf = function Sf(a) {
      this.ff = a.sub;la();this.gc = a.email || null;
    };var Tf = function Tf(a, b) {
      return a.then(function (a) {
        if (a.idToken) {
          var c;a: {
            var e = a.idToken.split(".");if (3 == e.length) {
              for (var e = e[1], f = (4 - e.length % 4) % 4, g = 0; g < f; g++) {
                e += ".";
              }try {
                var k = JSON.parse(tb(e));if (k.sub && k.iss && k.aud && k.exp) {
                  c = new Sf(k);break a;
                }
              } catch (n) {}
            }c = null;
          }if (!c || b != c.ff) throw new O("user-mismatch");return a;
        }throw new O("user-mismatch");
      }).f(function (a) {
        throw a && a.code && "auth/user-not-found" == a.code ? new O("user-mismatch") : a;
      });
    },
        Uf = function Uf(a, b) {
      if (b.idToken || b.accessToken) b.idToken && N(this, "idToken", b.idToken), b.accessToken && N(this, "accessToken", b.accessToken);else if (b.oauthToken && b.oauthTokenSecret) N(this, "accessToken", b.oauthToken), N(this, "secret", b.oauthTokenSecret);else throw new O("internal-error", "failed to construct a credential");Ef(this, a);N(this, "providerId", a);
    };Uf.prototype.Ab = function (a) {
      return Vf(a, Wf(this));
    };Uf.prototype.cd = function (a, b) {
      var c = Wf(this);c.idToken = b;return Xf(a, c);
    };Uf.prototype.ed = function (a, b) {
      var c = Wf(this);return Tf(Yf(a, c), b);
    };
    var Wf = function Wf(a) {
      var b = {};a.idToken && (b.id_token = a.idToken);a.accessToken && (b.access_token = a.accessToken);a.secret && (b.oauth_token_secret = a.secret);b.providerId = a.providerId;return { postBody: Ue(b).toString(), requestUri: "http://localhost" };
    };Uf.prototype.C = function () {
      var a = { providerId: this.providerId };this.idToken && (a.oauthIdToken = this.idToken);this.accessToken && (a.oauthAccessToken = this.accessToken);this.secret && (a.oauthTokenSecret = this.secret);return a;
    };
    var Zf = function Zf(a, b) {
      this.vf = b || [];Ff(this, { providerId: a, isOAuthProvider: !0 });this.Id = {};
    };Zf.prototype.setCustomParameters = function (a) {
      this.Id = Xa(a);return this;
    };var Q = function Q(a) {
      Zf.call(this, a, Lf);this.rd = [];
    };r(Q, Zf);Q.prototype.addScope = function (a) {
      Ia(this.rd, a) || this.rd.push(a);return this;
    };Q.prototype.Rd = function () {
      return Na(this.rd);
    };
    Q.prototype.credential = function (a, b) {
      if (!a && !b) throw new O("argument-error", "credential failed: must provide the ID token and/or the access token.");return new Uf(this.providerId, { idToken: a || null, accessToken: b || null });
    };var $f = function $f() {
      Q.call(this, "facebook.com");
    };r($f, Q);N($f, "PROVIDER_ID", "facebook.com");
    var ag = function ag(a) {
      if (!a) throw new O("argument-error", "credential failed: expected 1 argument (the OAuth access token).");var b = a;ha(a) && (b = a.accessToken);return new $f().credential(null, b);
    },
        bg = function bg() {
      Q.call(this, "github.com");
    };r(bg, Q);N(bg, "PROVIDER_ID", "github.com");
    var cg = function cg(a) {
      if (!a) throw new O("argument-error", "credential failed: expected 1 argument (the OAuth access token).");var b = a;ha(a) && (b = a.accessToken);return new bg().credential(null, b);
    },
        dg = function dg() {
      Q.call(this, "google.com");this.addScope("profile");
    };r(dg, Q);N(dg, "PROVIDER_ID", "google.com");var eg = function eg(a, b) {
      var c = a;ha(a) && (c = a.idToken, b = a.accessToken);return new dg().credential(c, b);
    },
        fg = function fg() {
      Zf.call(this, "twitter.com", Kf);
    };r(fg, Zf);N(fg, "PROVIDER_ID", "twitter.com");
    var gg = function gg(a, b) {
      var c = a;ha(c) || (c = { oauthToken: a, oauthTokenSecret: b });if (!c.oauthToken || !c.oauthTokenSecret) throw new O("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");return new Uf("twitter.com", c);
    },
        hg = function hg(a, b) {
      this.gc = a;this.jd = b;Ef(this, "password");N(this, "providerId", "password");
    };hg.prototype.Ab = function (a) {
      return R(a, ig, { email: this.gc, password: this.jd });
    };hg.prototype.cd = function (a, b) {
      return R(a, jg, { idToken: b, email: this.gc, password: this.jd });
    };
    hg.prototype.ed = function (a, b) {
      return Tf(this.Ab(a), b);
    };hg.prototype.C = function () {
      return { email: this.gc, password: this.jd };
    };var kg = function kg() {
      Ff(this, { providerId: "password", isOAuthProvider: !1 });
    };Ff(kg, { PROVIDER_ID: "password" });var lg = function lg(a) {
      if (!(a.Bd && a.Ad || a.Yb && a.ya)) throw new O("internal-error");this.I = a;N(this, "providerId", "identifier");
    };lg.prototype.Ab = function (a) {
      return a.se(mg(this));
    };lg.prototype.cd = function (a, b) {
      var c = mg(this);c.idToken = b;return R(a, ng, c);
    };
    lg.prototype.ed = function (a, b) {
      var c = mg(this);c.operation = "REAUTH";a = R(a, og, c);return Tf(a, b);
    };lg.prototype.C = function () {
      var a = { providerId: "identifier" };this.I.Bd && (a.verificationId = this.I.Bd);this.I.Ad && (a.verificationCode = this.I.Ad);this.I.Yb && (a.temporaryProof = this.I.Yb);this.I.ya && (a.identifierNumber = this.I.ya);return a;
    };
    var mg = function mg(a) {
      return a.I.Yb && a.I.ya ? { temporaryProof: a.I.Yb, identifierNumber: a.I.ya } : { sessionInfo: a.I.Bd, code: a.I.Ad };
    },
        pg = function pg(a) {
      try {
        this.Ce = a || firebase.auth();
      } catch (b) {
        throw new O("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.identifierAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
      }Ff(this, { providerId: "identifier", isOAuthProvider: !1 });
    };
    pg.prototype.se = function (a, b) {
      var c = this.Ce.g;return B(b.verify()).then(function (d) {
        if (!m(d)) throw new O("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch (b.type) {case "recaptcha":
            return R(c, qg, { identifierNumber: a, recaptchaToken: d });default:
            throw new O("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}
      });
    };Ff(pg, { PROVIDER_ID: "identifier" });
    var rg = function rg(a) {
      if (a.temporaryProof && a.identifierNumber) return new lg({ Yb: a.temporaryProof, ya: a.identifierNumber });var b = a && a.providerId;if (!b || "password" === b) return null;var c = a && a.oauthAccessToken,
          d = a && a.oauthTokenSecret;a = a && a.oauthIdToken;try {
        switch (b) {case "google.com":
            return eg(a, c);case "facebook.com":
            return ag(c);case "github.com":
            return cg(c);case "twitter.com":
            return gg(c, d);default:
            return new Q(b).credential(a, c);}
      } catch (e) {
        return null;
      }
    },
        sg = function sg(a) {
      if (!a.isOAuthProvider) throw new O("invalid-oauth-provider");
    };var tg = function tg(a, b, c) {
      O.call(this, a, c);a = b || {};a.email && N(this, "email", a.email);a.ya && N(this, "identifierNumber", a.ya);a.credential && N(this, "credential", a.credential);
    };r(tg, O);tg.prototype.C = function () {
      var a = { code: this.code, message: this.message };this.email && (a.email = this.email);this.identifierNumber && (a.identifierNumber = this.identifierNumber);var b = this.credential && this.credential.C();b && Za(a, b);return a;
    };tg.prototype.toJSON = function () {
      return this.C();
    };
    var ug = function ug(a) {
      if (a.code) {
        var b = a.code || "";0 == b.indexOf("auth/") && (b = b.substring(5));var c = { credential: rg(a) };if (a.email) c.email = a.email;else if (a.identifierNumber) c.ya = a.identifierNumber;else return new O(b, a.message || void 0);return new tg(b, c, a.message);
      }return null;
    };var vg = function vg(a) {
      this.Of = a;
    };r(vg, Bc);vg.prototype.fc = function () {
      return new this.Of();
    };vg.prototype.$c = function () {
      return {};
    };
    var S = function S(a, b, c) {
      var d;d = "Node" == L();d = l.XMLHttpRequest || d && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest;if (!d) throw new O("internal-error", "The XMLHttpRequest compatibility library was not found.");this.j = a;a = b || {};this.Bf = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";this.Cf = a.secureTokenTimeout || wg;this.ge = Xa(a.secureTokenHeaders || xg);this.Le = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.Me = a.firebaseTimeout || yg;this.Pd = Xa(a.firebaseHeaders || zg);c && (this.Pd["X-Client-Version"] = c, this.ge["X-Client-Version"] = c);this.Ee = new Gc();this.Nf = new vg(d);
    },
        Ag,
        wg = new xf(3E4, 6E4),
        xg = { "Content-Type": "application/x-www-form-urlencoded" },
        yg = new xf(3E4, 6E4),
        zg = { "Content-Type": "application/json" },
        Cg = function Cg(a, b, c, d, e, f, g) {
      wf() ? ($e() ? a = _q(a.Ef, a) : (Ag || (Ag = new A(function (a, b) {
        Bg(a, b);
      })), a = _q(a.Df, a)), a(b, c, d, e, f, g)) : c && c(null);
    };
    S.prototype.Ef = function (a, b, c, d, e, f) {
      var g = "Node" == L(),
          k = lf() ? g ? new F(this.Nf) : new F() : new F(this.Ee),
          n;f && (k.sb = Math.max(0, f), n = setTimeout(function () {
        k.dispatchEvent("timeout");
      }, f));k.listen("complete", function () {
        n && clearTimeout(n);var a = null;try {
          a = JSON.parse(Be(this)) || null;
        } catch (db) {
          a = null;
        }b && b(a);
      });cc(k, "ready", function () {
        n && clearTimeout(n);this.Ga || (this.Ga = !0, this.cb());
      });cc(k, "timeout", function () {
        n && clearTimeout(n);this.Ga || (this.Ga = !0, this.cb());b && b(null);
      });k.send(a, c, d, e);
    };
    var Ed = "__fcb" + Math.floor(1E6 * Math.random()).toString(),
        Bg = function Bg(a, b) {
      ((window.gapi || {}).client || {}).request ? a() : (l[Ed] = function () {
        ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"));
      }, Gd(function () {
        b(Error("CORS_UNSUPPORTED"));
      }));
    };
    S.prototype.Df = function (a, b, c, d, e) {
      var f = this;Ag.then(function () {
        window.gapi.client.setApiKey(f.j);var g = window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({ path: a, method: c, body: d, headers: e, authType: "none", callback: function callback(a) {
            window.gapi.auth.setToken(g);b && b(a);
          } });
      }).f(function (a) {
        b && b({ error: { message: a && a.message || "CORS_UNSUPPORTED" } });
      });
    };
    var Eg = function Eg(a, b) {
      return new A(function (c, d) {
        "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? Cg(a, a.Bf + "?key=" + encodeURIComponent(a.j), function (a) {
          a ? a.error ? d(Dg(a)) : a.access_token && a.refresh_token ? c(a) : d(new O("internal-error")) : d(new O("network-request-failed"));
        }, "POST", Ue(b).toString(), a.ge, a.Cf.get()) : d(new O("internal-error"));
      });
    },
        Fg = function Fg(a, b, c, d, e, f) {
      var g = Pe(a.Le + b);J(g, "key", a.j);f && J(g, "cb", la().toString());var k = "GET" == c;if (k) for (var n in d) {
        d.hasOwnProperty(n) && J(g, n, d[n]);
      }return new A(function (b, f) {
        Cg(a, g.toString(), function (a) {
          a ? a.error ? f(Dg(a, e || {})) : b(a) : f(new O("network-request-failed"));
        }, c, k ? void 0 : xc(sf(d)), a.Pd, a.Me.get());
      });
    },
        Gg = function Gg(a) {
      if (!ic.test(a.email)) throw new O("invalid-email");
    },
        Hg = function Hg(a) {
      "email" in a && Gg(a);
    },
        Jg = function Jg(a, b) {
      return R(a, Ig, { identifier: b, continueUri: nf() ? We() : "http://localhost" }).then(function (a) {
        return a.allProviders || [];
      });
    },
        Lg = function Lg(a) {
      return R(a, Kg, {}).then(function (a) {
        return a.authorizedDomains || [];
      });
    },
        Mg = function Mg(a) {
      if (!a.idToken) throw new O("internal-error");
    },
        Ng = function Ng(a) {
      if (a.identifierNumber || a.temporaryProof) {
        if (!a.identifierNumber || !a.temporaryProof) throw new O("internal-error");
      } else {
        if (!a.sessionInfo) throw new O("missing-verification-id");if (!a.code) throw new O("missing-verification-code");
      }
    };S.prototype.signInAnonymously = function () {
      return R(this, Og, {});
    };S.prototype.updateEmail = function (a, b) {
      return R(this, Pg, { idToken: a, email: b });
    };S.prototype.updatePassword = function (a, b) {
      return R(this, jg, { idToken: a, password: b });
    };var Qg = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };
    S.prototype.updateProfile = function (a, b) {
      var c = { idToken: a },
          d = [];Sa(Qg, function (a, f) {
        var e = b[f];null === e ? d.push(a) : f in b && (c[f] = e);
      });d.length && (c.deleteAttribute = d);return R(this, Pg, c);
    };S.prototype.sendPasswordResetEmail = function (a) {
      return R(this, Rg, { requestType: "PASSWORD_RESET", email: a });
    };S.prototype.sendEmailVerification = function (a) {
      return R(this, Sg, { requestType: "VERIFY_EMAIL", idToken: a });
    };S.prototype.se = function (a) {
      return R(this, Tg, a);
    };
    var Vg = function Vg(a, b, c) {
      return R(a, Ug, { idToken: b, deleteProvider: c });
    },
        Wg = function Wg(a) {
      if (!a.requestUri || !a.sessionId && !a.postBody) throw new O("internal-error");
    },
        Xg = function Xg(a) {
      var b = null;a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = ug(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = ug(a)) : "EMAIL_EXISTS" == a.errorMessage && (a.code = "email-already-in-use", b = ug(a));if (b) throw b;if (!a.idToken) throw new O("internal-error");
    },
        Vf = function Vf(a, b) {
      b.returnIdpCredential = !0;return R(a, Yg, b);
    },
        Xf = function Xf(a, b) {
      b.returnIdpCredential = !0;return R(a, Zg, b);
    },
        Yf = function Yf(a, b) {
      b.returnIdpCredential = !0;b.autoCreate = !1;return R(a, $g, b);
    },
        ah = function ah(a) {
      if (!a.oobCode) throw new O("invalid-action-code");
    };S.prototype.confirmPasswordReset = function (a, b) {
      return R(this, bh, { oobCode: a, newPassword: b });
    };S.prototype.checkActionCode = function (a) {
      return R(this, ch, { oobCode: a });
    };S.prototype.applyActionCode = function (a) {
      return R(this, dh, { oobCode: a });
    };
    var dh = { endpoint: "setAccountInfo", A: ah, Wa: "email" },
        ch = { endpoint: "resetPassword", A: ah, Y: function Y(a) {
        if (!a.email || !a.requestType) throw new O("internal-error");
      } },
        eh = { endpoint: "signupNewUser", A: function A(a) {
        Gg(a);if (!a.password) throw new O("weak-password");
      }, Y: Mg, sa: !0 },
        Ig = { endpoint: "createAuthUri" },
        fh = { endpoint: "deleteAccount", Ua: ["idToken"] },
        Ug = { endpoint: "setAccountInfo", Ua: ["idToken", "deleteProvider"], A: function A(a) {
        if (!ea(a.deleteProvider)) throw new O("internal-error");
      } },
        gh = { endpoint: "getAccountInfo" },
        Sg = { endpoint: "getOobConfirmationCode", Ua: ["idToken", "requestType"], A: function A(a) {
        if ("VERIFY_EMAIL" != a.requestType) throw new O("internal-error");
      }, Wa: "email" },
        Rg = { endpoint: "getOobConfirmationCode", Ua: ["requestType"], A: function A(a) {
        if ("PASSWORD_RESET" != a.requestType) throw new O("internal-error");Gg(a);
      }, Wa: "email" },
        Kg = { De: !0, endpoint: "getProjectConfig", We: "GET" },
        bh = { endpoint: "resetPassword", A: ah, Wa: "email" },
        qg = { endpoint: "sendVerificationCode", Ua: ["identifierNumber", "recaptchaToken"], Wa: "sessionInfo" },
        Pg = { endpoint: "setAccountInfo",
      Ua: ["idToken"], A: Hg, sa: !0 },
        jg = { endpoint: "setAccountInfo", Ua: ["idToken"], A: function A(a) {
        Hg(a);if (!a.password) throw new O("weak-password");
      }, Y: Mg, sa: !0 },
        Og = { endpoint: "signupNewUser", Y: Mg, sa: !0 },
        Yg = { endpoint: "verifyAssertion", A: Wg, Y: Xg, sa: !0 },
        $g = { endpoint: "verifyAssertion", A: Wg, Y: function Y(a) {
        if (a.errorMessage && "USER_NOT_FOUND" == a.errorMessage) throw new O("user-not-found");if (!a.idToken) throw new O("internal-error");
      }, sa: !0 },
        Zg = { endpoint: "verifyAssertion", A: function A(a) {
        Wg(a);if (!a.idToken) throw new O("internal-error");
      }, Y: Xg, sa: !0 },
        hh = { endpoint: "verifyCustomToken", A: function A(a) {
        if (!a.token) throw new O("invalid-custom-token");
      }, Y: Mg, sa: !0 },
        ig = { endpoint: "verifyPassword", A: function A(a) {
        Gg(a);if (!a.password) throw new O("wrong-password");
      }, Y: Mg, sa: !0 },
        Tg = { endpoint: "verifyidentifierNumber", A: Ng, Y: Mg },
        ng = { endpoint: "verifyidentifierNumber", A: function A(a) {
        if (!a.idToken) throw new O("internal-error");Ng(a);
      }, Y: function Y(a) {
        if (a.temporaryProof) throw a.code = "credential-already-in-use", ug(a);Mg(a);
      } },
        og = { Ge: { USER_NOT_FOUND: "user-not-found" },
      endpoint: "verifyidentifierNumber", A: Ng, Y: Mg },
        R = function R(a, b, c) {
      if (!If(c, b.Ua)) return D(new O("internal-error"));var d = b.We || "POST",
          e;return B(c).then(b.A).then(function () {
        b.sa && (c.returnSecureToken = !0);return Fg(a, b.endpoint, d, c, b.Ge, b.De || !1);
      }).then(function (a) {
        return e = a;
      }).then(b.Y).then(function () {
        if (!b.Wa) return e;if (!(b.Wa in e)) throw new O("internal-error");return e[b.Wa];
      });
    },
        Dg = function Dg(a, b) {
      var c;c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";var d = { keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized" };
      if (c = d[c] ? new O(d[c]) : null) return c;c = a.error && a.error.message || "";d = { INVALID_CUSTOM_TOKEN: "invalid-custom-token", CREDENTIAL_MISMATCH: "custom-token-mismatch", MISSING_CUSTOM_TOKEN: "internal-error", INVALID_IDENTIFIER: "invalid-email", MISSING_CONTINUE_URI: "internal-error", INVALID_EMAIL: "invalid-email", INVALID_PASSWORD: "wrong-password", USER_DISABLED: "user-disabled", MISSING_PASSWORD: "internal-error", EMAIL_EXISTS: "email-already-in-use", PASSWORD_LOGIN_DISABLED: "operation-not-allowed", INVALID_IDP_RESPONSE: "invalid-credential",
        FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use", INVALID_MESSAGE_PAYLOAD: "invalid-message-payload", INVALID_RECIPIENT_EMAIL: "invalid-recipient-email", INVALID_SENDER: "invalid-sender", EMAIL_NOT_FOUND: "user-not-found", EXPIRED_OOB_CODE: "expired-action-code", INVALID_OOB_CODE: "invalid-action-code", MISSING_OOB_CODE: "internal-error", CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login", INVALID_ID_TOKEN: "invalid-user-token", TOKEN_EXPIRED: "user-token-expired", USER_NOT_FOUND: "user-token-expired",
        CORS_UNSUPPORTED: "cors-unsupported", DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated", INVALID_APP_ID: "invalid-app-id", TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests", WEAK_PASSWORD: "weak-password", OPERATION_NOT_ALLOWED: "operation-not-allowed", USER_CANCELLED: "user-cancelled", CAPTCHA_CHECK_FAILED: "captcha-check-failed", INVALID_APP_CREDENTIAL: "invalid-app-credential", INVALID_CODE: "invalid-verification-code", INVALID_identifier_NUMBER: "invalid-identifier-number", INVALID_SESSION_INFO: "invalid-verification-id",
        INVALID_TEMPORARY_PROOF: "invalid-credential", MISSING_APP_CREDENTIAL: "missing-app-credential", MISSING_CODE: "missing-verification-code", MISSING_identifier_NUMBER: "missing-identifier-number", MISSING_SESSION_INFO: "missing-verification-id", QUOTA_EXCEEDED: "quota-exceeded", SESSION_EXPIRED: "code-expired" };Za(d, b || {});b = (b = c.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < b.length ? b[1] : void 0;for (var e in d) {
        if (0 === c.indexOf(e)) return new O(d[e], b);
      }!b && a && (b = rf(a));return new O("internal-error", b);
    };var ih = function ih(a) {
      this.V = a;
    };ih.prototype.value = function () {
      return this.V;
    };ih.prototype.je = function (a) {
      this.V.style = a;return this;
    };var jh = function jh(a) {
      this.V = a || {};
    };jh.prototype.value = function () {
      return this.V;
    };jh.prototype.je = function (a) {
      this.V.style = a;return this;
    };var lh = function lh(a) {
      this.Lf = a;this.nc = null;this.gd = kh(this);
    },
        mh = function mh(a) {
      var b = new jh();b.V.where = document.body;b.V.url = a.Lf;b.V.messageHandlersFilter = M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.V.attributes = b.V.attributes || {};new ih(b.V.attributes).je({ position: "absolute", top: "-100px", width: "1px", height: "1px" });b.V.dontclear = !0;return b;
    },
        kh = function kh(a) {
      return nh().then(function () {
        return new A(function (b, c) {
          M("gapi.iframes.getContext")().open(mh(a).value(), function (d) {
            a.nc = d;a.nc.restyle({ setHideOnLeave: !1 });
            var e = setTimeout(function () {
              c(Error("Network Error"));
            }, oh.get()),
                f = function f() {
              clearTimeout(e);b();
            };d.ping(f).then(f, function () {
              c(Error("Network Error"));
            });
          });
        });
      });
    };lh.prototype.sendMessage = function (a) {
      var b = this;return this.gd.then(function () {
        return new A(function (c) {
          b.nc.send(a.type, a, c, M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
        });
      });
    };
    var ph = function ph(a, b) {
      a.gd.then(function () {
        a.nc.register("authEvent", b, M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
      });
    },
        qh = new xf(3E4, 6E4),
        oh = new xf(5E3, 15E3),
        nh = function nh() {
      return new A(function (a, b) {
        if (wf()) {
          var c = function c() {
            vf();M("gapi.load")("gapi.iframes", { callback: a, ontimeout: function ontimeout() {
                vf();b(Error("Network Error"));
              }, timeout: qh.get() });
          };if (M("gapi.iframes.Iframe")) a();else if (M("gapi.load")) c();else {
            var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();l[d] = function () {
              M("gapi.load") ? c() : b(Error("Network Error"));
            };B(Dd("https://apis.google.com/js/api.js?onload=" + d)).f(function () {
              b(Error("Network Error"));
            });
          }
        } else b(Error("Network Error"));
      });
    };var rh = function rh(a, b, c) {
      this.v = a;this.j = b;this.D = c;this.Ya = null;this.ac = Qe(this.v, "/__/auth/iframe");J(this.ac, "apiKey", this.j);J(this.ac, "appName", this.D);
    };rh.prototype.setVersion = function (a) {
      this.Ya = a;return this;
    };rh.prototype.toString = function () {
      this.Ya ? J(this.ac, "v", this.Ya) : this.ac.removeParameter("v");return this.ac.toString();
    };var sh = function sh(a, b, c, d, e) {
      this.v = a;this.j = b;this.D = c;this.Be = d;this.Ya = this.J = this.pd = null;this.Pb = e;
    };sh.prototype.setVersion = function (a) {
      this.Ya = a;return this;
    };
    sh.prototype.toString = function () {
      var a = Qe(this.v, "/__/auth/handler");J(a, "apiKey", this.j);J(a, "appName", this.D);J(a, "authType", this.Be);if (this.Pb.isOAuthProvider) {
        J(a, "providerId", this.Pb.providerId);var b = this.Pb,
            c = sf(b.Id),
            d;for (d in c) {
          c[d] = c[d].toString();
        }b = b.vf;c = Xa(c);for (d = 0; d < b.length; d++) {
          var e = b[d];e in c && delete c[e];
        }Va(c) || J(a, "customParameters", rf(c));
      }"function" === typeof this.Pb.Rd && (b = this.Pb.Rd(), b.length && J(a, "scopes", b.join(",")));this.pd ? J(a, "redirectUrl", this.pd) : a.removeParameter("redirectUrl");
      this.J ? J(a, "eventId", this.J) : a.removeParameter("eventId");this.Ya ? J(a, "v", this.Ya) : a.removeParameter("v");if (this.bc) for (var f in this.bc) {
        this.bc.hasOwnProperty(f) && !Oe(a, f) && J(a, f, this.bc[f]);
      }return a.toString();
    };
    var th = function th(a, b, c, d) {
      this.v = a;this.j = b;this.D = c;this.Oe = (this.Ea = d || null) ? mf(this.Ea) : null;d = this.Ea;this.Xe = new rh(a, b, c).setVersion(d).toString();this.ma = [];this.g = new S(b, null, this.Oe);this.pc = this.wa = null;
    },
        uh = function uh(a) {
      var b = We();return Lg(a).then(function (a) {
        a: {
          for (var c = Pe(b), e = c.ha, c = c.ea, f = 0; f < a.length; f++) {
            var g;var k = a[f];g = c;var n = e;0 == k.indexOf("chrome-extension://") ? g = Pe(k).ea == g && "chrome-extension" == n : "http" != n && "https" != n ? g = !1 : ef.test(k) ? g = g == k : (k = k.split(".").join("\\."), g = new RegExp("^(.+\\." + k + "|" + k + ")$", "i").test(g));if (g) {
              a = !0;break a;
            }
          }a = !1;
        }if (!a) throw new Rf(We());
      });
    };h = th.prototype;h.Gb = function () {
      if (this.pc) return this.pc;var a = this;return this.pc = ff().then(function () {
        a.mc = new lh(a.Xe);vh(a);
      });
    };h.Vb = function (a, b, c) {
      var d = new O("popup-closed-by-user"),
          e = new O("web-storage-unsupported"),
          f = this,
          g = !1;return this.La().then(function () {
        wh(f).then(function (c) {
          c || (a && bf(a), b(e), g = !0);
        });
      }).f(function () {}).then(function () {
        if (!g) return df(a);
      }).then(function () {
        if (!g) return le(c).then(function () {
          b(d);
        });
      });
    };
    h.ke = function () {
      var a = K();return !qf(a) && !uf(a);
    };h.Ud = function () {
      return !1;
    };h.Nb = function (a, b, c, d, e, f, g) {
      if (!a) return D(new O("popup-blocked"));if (g && !qf()) return this.La().f(function (b) {
        bf(a);e(b);
      }), d(), B();this.wa || (this.wa = uh(this.g));var k = this;return this.wa.then(function () {
        var b = k.La().f(function (b) {
          bf(a);e(b);throw b;
        });d();return b;
      }).then(function () {
        sg(c);if (!g) {
          var d = xh(k.v, k.j, k.D, b, c, null, f, k.Ea);Xe(d, a);
        }
      }).f(function (a) {
        "auth/network-request-failed" == a.code && (k.wa = null);throw a;
      });
    };
    h.Ob = function (a, b, c) {
      this.wa || (this.wa = uh(this.g));var d = this;return this.wa.then(function () {
        sg(b);var e = xh(d.v, d.j, d.D, a, b, We(), c, d.Ea);Xe(e);
      });
    };h.La = function () {
      var a = this;return this.Gb().then(function () {
        return a.mc.gd;
      }).f(function () {
        a.wa = null;throw new O("network-request-failed");
      });
    };h.ne = function () {
      return !0;
    };
    var xh = function xh(a, b, c, d, e, f, g, k, n) {
      a = new sh(a, b, c, d, e);a.pd = f;a.J = g;f = a.setVersion(k);f.bc = Xa(n || null);return f.toString();
    },
        vh = function vh(a) {
      if (!a.mc) throw Error("IfcHandler must be initialized!");ph(a.mc, function (b) {
        var c = {};if (b && b.authEvent) {
          var d = !1;b = Qf(b.authEvent);for (c = 0; c < a.ma.length; c++) {
            d = a.ma[c](b) || d;
          }c = {};c.status = d ? "ACK" : "ERROR";return B(c);
        }c.status = "ERROR";return B(c);
      });
    },
        wh = function wh(a) {
      var b = { type: "webStorageSupport" };return a.Gb().then(function () {
        return a.mc.sendMessage(b);
      }).then(function (a) {
        if (a && a.length && "undefined" !== typeof a[0].webStorageSupport) return a[0].webStorageSupport;throw Error();
      });
    };th.prototype.$a = function (a) {
      this.ma.push(a);
    };th.prototype.Tb = function (a) {
      La(this.ma, function (b) {
        return b == a;
      });
    };var yh = function yh(a) {
      this.B = a || firebase.INTERNAL.reactNative && firebase.INTERNAL.reactNative.AsyncStorage;if (!this.B) throw new O("internal-error", "The React Native compatibility library was not found.");
    };h = yh.prototype;h.get = function (a) {
      return B(this.B.getItem(a)).then(function (a) {
        return a && tf(a);
      });
    };h.set = function (a, b) {
      return B(this.B.setItem(a, rf(b)));
    };h.remove = function (a) {
      return B(this.B.removeItem(a));
    };h.ab = function () {};h.Ta = function () {};var zh = function zh() {
      this.B = {};
    };h = zh.prototype;h.get = function (a) {
      return B(this.B[a]);
    };h.set = function (a, b) {
      this.B[a] = b;return B();
    };h.remove = function (a) {
      delete this.B[a];return B();
    };h.ab = function () {};h.Ta = function () {};var Ch = function Ch() {
      if (!Bh()) {
        if ("Node" == L()) throw new O("internal-error", "The LocalStorage compatibility library was not found.");throw new O("web-storage-unsupported");
      }this.B = l.localStorage || firebase.INTERNAL.node.localStorage;
    },
        Bh = function Bh() {
      var a = "Node" == L(),
          a = l.localStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage;if (!a) return !1;try {
        return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
      } catch (b) {
        return !1;
      }
    };h = Ch.prototype;
    h.get = function (a) {
      var b = this;return B().then(function () {
        var c = b.B.getItem(a);return tf(c);
      });
    };h.set = function (a, b) {
      var c = this;return B().then(function () {
        var d = rf(b);null === d ? c.remove(a) : c.B.setItem(a, d);
      });
    };h.remove = function (a) {
      var b = this;return B().then(function () {
        b.B.removeItem(a);
      });
    };h.ab = function (a) {
      l.window && Vb(l.window, "storage", a);
    };h.Ta = function (a) {
      l.window && dc(l.window, "storage", a);
    };var Dh = function Dh() {
      this.B = {};
    };h = Dh.prototype;h.get = function () {
      return B(null);
    };h.set = function () {
      return B();
    };h.remove = function () {
      return B();
    };h.ab = function () {};h.Ta = function () {};var Fh = function Fh() {
      if (!Eh()) {
        if ("Node" == L()) throw new O("internal-error", "The SessionStorage compatibility library was not found.");throw new O("web-storage-unsupported");
      }this.B = l.sessionStorage || firebase.INTERNAL.node.sessionStorage;
    },
        Eh = function Eh() {
      var a = "Node" == L(),
          a = l.sessionStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage;if (!a) return !1;try {
        return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
      } catch (b) {
        return !1;
      }
    };h = Fh.prototype;
    h.get = function (a) {
      var b = this;return B().then(function () {
        var c = b.B.getItem(a);return tf(c);
      });
    };h.set = function (a, b) {
      var c = this;return B().then(function () {
        var d = rf(b);null === d ? c.remove(a) : c.B.setItem(a, d);
      });
    };h.remove = function (a) {
      var b = this;return B().then(function () {
        b.B.removeItem(a);
      });
    };h.ab = function () {};h.Ta = function () {};var Gh = function Gh(a, b, c, d, e, f) {
      if (!window.indexedDB) throw new O("web-storage-unsupported");this.He = a;this.fd = b;this.Qc = c;this.re = d;this.wb = e;this.$ = {};this.Wb = [];this.Jb = 0;this.Ye = f || l.indexedDB;
    },
        Hh,
        Ih = function Ih(a) {
      return new A(function (b, c) {
        var d = a.Ye.open(a.He, a.wb);d.onerror = function (a) {
          c(Error(a.target.errorCode));
        };d.onupgradeneeded = function (b) {
          b = b.target.result;try {
            b.createObjectStore(a.fd, { keyPath: a.Qc });
          } catch (f) {
            c(f);
          }
        };d.onsuccess = function (a) {
          b(a.target.result);
        };
      });
    },
        Jh = function Jh(a) {
      a.Xd || (a.Xd = Ih(a));return a.Xd;
    },
        Kh = function Kh(a, b) {
      return b.objectStore(a.fd);
    },
        Lh = function Lh(a, b, c) {
      return b.transaction([a.fd], c ? "readwrite" : "readonly");
    },
        Mh = function Mh(a) {
      return new A(function (b, c) {
        a.onsuccess = function (a) {
          a && a.target ? b(a.target.result) : b();
        };a.onerror = function (a) {
          c(Error(a.target.errorCode));
        };
      });
    };h = Gh.prototype;
    h.set = function (a, b) {
      var c = !1,
          d,
          e = this;return md(Jh(this).then(function (b) {
        d = b;b = Kh(e, Lh(e, d, !0));return Mh(b.get(a));
      }).then(function (f) {
        var g = Kh(e, Lh(e, d, !0));if (f) return f.value = b, Mh(g.put(f));e.Jb++;c = !0;f = {};f[e.Qc] = a;f[e.re] = b;return Mh(g.add(f));
      }).then(function () {
        e.$[a] = b;
      }), function () {
        c && e.Jb--;
      });
    };h.get = function (a) {
      var b = this;return Jh(this).then(function (c) {
        return Mh(Kh(b, Lh(b, c, !1)).get(a));
      }).then(function (a) {
        return a && a.value;
      });
    };
    h.remove = function (a) {
      var b = !1,
          c = this;return md(Jh(this).then(function (d) {
        b = !0;c.Jb++;return Mh(Kh(c, Lh(c, d, !0))["delete"](a));
      }).then(function () {
        delete c.$[a];
      }), function () {
        b && c.Jb--;
      });
    };
    h.Hf = function () {
      var a = this;return Jh(this).then(function (b) {
        var c = Kh(a, Lh(a, b, !1));return c.getAll ? Mh(c.getAll()) : new A(function (a, b) {
          var d = [],
              e = c.openCursor();e.onsuccess = function (b) {
            (b = b.target.result) ? (d.push(b.value), b["continue"]()) : a(d);
          };e.onerror = function (a) {
            b(Error(a.target.errorCode));
          };
        });
      }).then(function (b) {
        var c = {},
            d = [];if (0 == a.Jb) {
          for (d = 0; d < b.length; d++) {
            c[b[d][a.Qc]] = b[d][a.re];
          }d = Ye(a.$, c);a.$ = c;
        }return d;
      });
    };h.ab = function (a) {
      0 == this.Wb.length && this.vd();this.Wb.push(a);
    };
    h.Ta = function (a) {
      La(this.Wb, function (b) {
        return b == a;
      });0 == this.Wb.length && this.Bc();
    };h.vd = function () {
      var a = this;this.Bc();var b = function b() {
        a.kd = le(800).then(_q(a.Hf, a)).then(function (b) {
          0 < b.length && w(a.Wb, function (a) {
            a(b);
          });
        }).then(b).f(function (a) {
          "STOP_EVENT" != a.message && b();
        });return a.kd;
      };b();
    };h.Bc = function () {
      this.kd && this.kd.cancel("STOP_EVENT");
    };var Qh = function Qh() {
      this.Ld = { Browser: Nh, Node: Oh, ReactNative: Ph }[L()];
    },
        Rh,
        Nh = { M: Ch, yd: Fh },
        Oh = { M: Ch, yd: Fh },
        Ph = { M: yh, yd: Dh };var Sh = function Sh(a) {
      var b = {},
          c = a.email,
          d = a.newEmail;a = a.requestType;if (!c || !a) throw Error("Invalid provider user info!");b.fromEmail = d || null;b.email = c;N(this, "operation", a);N(this, "data", Jf(b));
    };var Th = function Th(a, b, c, d, e, f) {
      this.pf = a;this.xf = b;this.Qe = c;this.rc = d;this.zd = e;this.yf = !!f;this.kb = null;this.Ma = this.rc;if (this.zd < this.rc) throw Error("Proactive refresh lower bound greater than upper bound!");
    };Th.prototype.start = function () {
      this.Ma = this.rc;Uh(this, !0);
    };
    var Vh = function Vh(a, b) {
      if (b) return a.Ma = a.rc, a.Qe();b = a.Ma;a.Ma *= 2;a.Ma > a.zd && (a.Ma = a.zd);return b;
    },
        Uh = function Uh(a, b) {
      a.stop();a.kb = le(Vh(a, b)).then(function () {
        return a.yf ? B() : zf();
      }).then(function () {
        return a.pf();
      }).then(function () {
        Uh(a, !0);
      }).f(function (b) {
        a.xf(b) && Uh(a, !1);
      });
    };Th.prototype.stop = function () {
      this.kb && (this.kb.cancel(), this.kb = null);
    };var ai = function ai(a) {
      var b = {};b["facebook.com"] = Wh;b["google.com"] = Xh;b["github.com"] = Yh;b["twitter.com"] = Zh;var c = a && a.providerId;return c ? b[c] ? new b[c](a) : new $h(a) : null;
    },
        $h = function $h(a) {
      var b = tf(a.rawUserInfo || "{}");a = a.providerId;if (!a) throw Error("Invalid additional user info!");N(this, "profile", Jf(b || {}));N(this, "providerId", a);
    },
        Wh = function Wh(a) {
      $h.call(this, a);if ("facebook.com" != this.providerId) throw Error("Invalid provider id!");
    };r(Wh, $h);
    var Yh = function Yh(a) {
      $h.call(this, a);if ("github.com" != this.providerId) throw Error("Invalid provider id!");N(this, "username", this.profile && this.profile.login || null);
    };r(Yh, $h);var Xh = function Xh(a) {
      $h.call(this, a);if ("google.com" != this.providerId) throw Error("Invalid provider id!");
    };r(Xh, $h);var Zh = function Zh(a) {
      $h.call(this, a);if ("twitter.com" != this.providerId) throw Error("Invalid provider id!");N(this, "username", a.screenName || null);
    };r(Zh, $h);var bi = function bi(a, b, c, d) {
      this.kf = a;this.he = b;this.zf = c;this.Ub = d;this.T = {};Rh || (Rh = new Qh());a = Rh;try {
        var e;Ve() ? (Hh || (Hh = new Gh("firebaseLocalStorageDb", "firebaseLocalStorage", "fbase_key", "value", 1)), e = Hh) : e = new a.Ld.M();this.Qa = e;
      } catch (f) {
        this.Qa = new zh(), this.Ub = !0;
      }try {
        this.Dc = new a.Ld.yd();
      } catch (f) {
        this.Dc = new zh();
      }this.wd = _q(this.le, this);this.$ = {};
    },
        ci,
        di = function di() {
      ci || (ci = new bi("firebase", ":", !uf(K()) && kf() ? !0 : !1, qf()));return ci;
    };h = bi.prototype;
    h.R = function (a, b) {
      return this.kf + this.he + a.name + (b ? this.he + b : "");
    };h.get = function (a, b) {
      return (a.M ? this.Qa : this.Dc).get(this.R(a, b));
    };h.remove = function (a, b) {
      b = this.R(a, b);a.M && !this.Ub && (this.$[b] = null);return (a.M ? this.Qa : this.Dc).remove(b);
    };h.set = function (a, b, c) {
      var d = this.R(a, c),
          e = this,
          f = a.M ? this.Qa : this.Dc;return f.set(d, b).then(function () {
        return f.get(d);
      }).then(function (b) {
        a.M && !this.Ub && (e.$[d] = b);
      });
    };
    h.addListener = function (a, b, c) {
      a = this.R(a, b);this.Ub || (this.$[a] = l.localStorage.getItem(a));Va(this.T) && this.vd();this.T[a] || (this.T[a] = []);this.T[a].push(c);
    };h.removeListener = function (a, b, c) {
      a = this.R(a, b);this.T[a] && (La(this.T[a], function (a) {
        return a == c;
      }), 0 == this.T[a].length && delete this.T[a]);Va(this.T) && this.Bc();
    };h.vd = function () {
      this.Qa.ab(this.wd);this.Ub || Ve() || ei(this);
    };
    var ei = function ei(a) {
      fi(a);a.dd = setInterval(function () {
        for (var b in a.T) {
          var c = l.localStorage.getItem(b),
              d = a.$[b];c != d && (a.$[b] = c, c = new Jb({ type: "storage", key: b, target: window, oldValue: d, newValue: c, rf: !0 }), a.le(c));
        }
      }, 1E3);
    },
        fi = function fi(a) {
      a.dd && (clearInterval(a.dd), a.dd = null);
    };bi.prototype.Bc = function () {
      this.Qa.Ta(this.wd);fi(this);
    };
    bi.prototype.le = function (a) {
      if (a && a.Pe) {
        var b = a.eb.key;"undefined" !== typeof a.eb.rf ? this.Qa.Ta(this.wd) : fi(this);if (this.zf) {
          var c = l.localStorage.getItem(b);a = a.eb.newValue;a != c && (a ? l.localStorage.setItem(b, a) : a || l.localStorage.removeItem(b));
        }this.$[b] = l.localStorage.getItem(b);this.Ed(b);
      } else w(a, _q(this.Ed, this));
    };bi.prototype.Ed = function (a) {
      this.T[a] && w(this.T[a], function (a) {
        a();
      });
    };var gi = function gi(a, b) {
      this.u = a;this.i = b || di();
    },
        hi = { name: "authEvent", M: !0 },
        ii = function ii(a) {
      return a.i.get(hi, a.u).then(function (a) {
        return Qf(a);
      });
    };gi.prototype.$a = function (a) {
      this.i.addListener(hi, this.u, a);
    };gi.prototype.Tb = function (a) {
      this.i.removeListener(hi, this.u, a);
    };var ji = function ji(a) {
      this.i = a || di();
    },
        ki = { name: "sessionId", M: !1 };ji.prototype.ic = function (a) {
      return this.i.get(ki, a);
    };var li = function li(a, b, c, d, e, f) {
      this.v = a;this.j = b;this.D = c;this.Ea = d || null;this.me = b + ":" + c;this.Af = new ji();this.Qd = new gi(this.me);this.Zc = null;this.ma = [];this.bf = e || 500;this.tf = f || 2E3;this.Fb = this.uc = null;
    },
        mi = function mi(a) {
      return new O("invalid-cordova-configuration", a);
    };
    li.prototype.La = function () {
      return this.ad ? this.ad : this.ad = hf().then(function () {
        if ("function" !== typeof M("universalLinks.subscribe", l)) throw mi("cordova-universal-links-plugin is not installed");if ("undefined" === typeof M("BuildInfo.packageName", l)) throw mi("cordova-plugin-buildinfo is not installed");if ("function" !== typeof M("cordova.plugins.browsertab.openUrl", l)) throw mi("cordova-plugin-browsertab is not installed");if ("function" !== typeof M("cordova.InAppBrowser.open", l)) throw mi("cordova-plugin-inappbrowser is not installed");
      }, function () {
        throw new O("cordova-not-ready");
      });
    };var ni = function ni() {
      for (var a = 20, b = []; 0 < a;) {
        b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
      }return b.join("");
    },
        oi = function oi(a) {
      var b = new Eb();b.update(a);return Oa(b.digest());
    };h = li.prototype;h.Vb = function (a, b) {
      b(new O("operation-not-supported-in-this-environment"));return B();
    };h.Nb = function () {
      return D(new O("operation-not-supported-in-this-environment"));
    };h.ne = function () {
      return !1;
    };h.ke = function () {
      return !0;
    };
    h.Ud = function () {
      return !0;
    };
    h.Ob = function (a, b, c) {
      if (this.uc) return D(new O("redirect-operation-pending"));var d = this,
          e = l.document,
          f = null,
          g = null,
          k = null,
          n = null;return this.uc = md(B().then(function () {
        sg(b);return pi(d);
      }).then(function () {
        return qi(d, a, b, c);
      }).then(function () {
        return new A(function (a, b) {
          g = function g() {
            var b = M("cordova.plugins.browsertab.close", l);a();"function" === typeof b && b();d.Fb && "function" === typeof d.Fb.close && (d.Fb.close(), d.Fb = null);return !1;
          };d.$a(g);k = function k() {
            f || (f = le(d.tf).then(function () {
              b(new O("redirect-cancelled-by-user"));
            }));
          };n = function n() {
            yf() && k();
          };e.addEventListener("resume", k, !1);K().toLowerCase().match(/android/) || e.addEventListener("visibilitychange", n, !1);
        }).f(function (a) {
          return ri(d).then(function () {
            throw a;
          });
        });
      }), function () {
        k && e.removeEventListener("resume", k, !1);n && e.removeEventListener("visibilitychange", n, !1);f && f.cancel();g && d.Tb(g);d.uc = null;
      });
    };
    var qi = function qi(a, b, c, d) {
      var e = ni(),
          f = new P(b, d, null, e, new O("no-auth-event")),
          g = M("BuildInfo.packageName", l);if ("string" !== typeof g) throw new O("invalid-cordova-configuration");var k = M("BuildInfo.displayName", l),
          n = {};if (K().toLowerCase().match(/iphone|ipad|ipod/)) n.ibi = g;else if (K().toLowerCase().match(/android/)) n.apn = g;else return D(new O("operation-not-supported-in-this-environment"));k && (n.appDisplayName = k);e = oi(e);n.sessionId = e;var C = xh(a.v, a.j, a.D, b, c, null, d, a.Ea, n);return a.La().then(function () {
        var b = a.me;return a.Af.i.set(hi, f.C(), b);
      }).then(function () {
        var b = M("cordova.plugins.browsertab.isAvailable", l);if ("function" !== typeof b) throw new O("invalid-cordova-configuration");var c = null;b(function (b) {
          if (b) {
            c = M("cordova.plugins.browsertab.openUrl", l);if ("function" !== typeof c) throw new O("invalid-cordova-configuration");c(C);
          } else {
            c = M("cordova.InAppBrowser.open", l);if ("function" !== typeof c) throw new O("invalid-cordova-configuration");b = c;var d;d = K();d = !(!d.match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !d.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
            a.Fb = b(C, d ? "_blank" : "_system", "location=yes");
          }
        });
      });
    },
        si = function si(a, b) {
      for (var c = 0; c < a.ma.length; c++) {
        try {
          a.ma[c](b);
        } catch (d) {}
      }
    },
        pi = function pi(a) {
      a.Zc || (a.Zc = a.La().then(function () {
        return new A(function (b) {
          var c = function c(d) {
            b(d);a.Tb(c);return !1;
          };a.$a(c);ti(a);
        });
      }));return a.Zc;
    },
        ri = function ri(a) {
      var b = null;return ii(a.Qd).then(function (c) {
        b = c;c = a.Qd;return c.i.remove(hi, c.u);
      }).then(function () {
        return b;
      });
    },
        ti = function ti(a) {
      var b = M("universalLinks.subscribe", l);if ("function" !== typeof b) throw new O("invalid-cordova-configuration");
      var c = new P("unknown", null, null, null, new O("no-auth-event")),
          d = !1,
          e = le(a.bf).then(function () {
        return ri(a).then(function () {
          d || si(a, c);
        });
      }),
          f = function f(b) {
        d = !0;e && e.cancel();ri(a).then(function (d) {
          var e = c;if (d && b && b.url) {
            var e = null,
                f;f = b.url;var g = Pe(f),
                k = Oe(g, "link"),
                n = Oe(Pe(k), "link"),
                g = Oe(g, "deep_link_id");f = Oe(Pe(g), "link") || g || n || k || f;-1 != f.indexOf("/__/auth/callback") && (e = Pe(f), e = tf(Oe(e, "firebaseError") || null), e = (e = "object" === typeof e ? Pf(e) : null) ? new P(d.da, d.J, null, null, e) : new P(d.da, d.J, f, d.ic()));
            e = e || c;
          }si(a, e);
        });
      },
          g = l.handleOpenURL;l.handleOpenURL = function (a) {
        0 == a.indexOf(M("BuildInfo.packageName", l) + "://") && f({ url: a });if ("function" === typeof g) try {
          g(a);
        } catch (n) {
          console.error(n);
        }
      };b(null, f);
    };li.prototype.$a = function (a) {
      this.ma.push(a);pi(this).f(function (b) {
        "auth/invalid-cordova-configuration" === b.code && (b = new P("unknown", null, null, null, new O("no-auth-event")), a(b));
      });
    };li.prototype.Tb = function (a) {
      La(this.ma, function (b) {
        return b == a;
      });
    };var ui = function ui(a) {
      this.u = a;this.i = di();
    },
        vi = { name: "pendingRedirect", M: !1 },
        wi = function wi(a) {
      return a.i.set(vi, "pending", a.u);
    },
        xi = function xi(a) {
      return a.i.remove(vi, a.u);
    },
        yi = function yi(a) {
      return a.i.get(vi, a.u).then(function (a) {
        return "pending" == a;
      });
    };var T = function T(a, b, c) {
      this.v = a;this.j = b;this.D = c;this.Xb = [];this.ib = !1;this.Mc = _q(this.Wc, this);this.Ra = new zi(this);this.ld = new Ai(this);this.Kb = new ui(this.j + ":" + this.D);this.Aa = {};this.Aa.unknown = this.Ra;this.Aa.signInViaRedirect = this.Ra;this.Aa.linkViaRedirect = this.Ra;this.Aa.reauthViaRedirect = this.Ra;this.Aa.signInViaPopup = this.ld;this.Aa.linkViaPopup = this.ld;this.Aa.reauthViaPopup = this.ld;this.K = Bi(this.v, this.j, this.D);
    },
        Bi = function Bi(a, b, c) {
      var d = firebase.SDK_VERSION || null;return gf() ? new li(a, b, c, d) : new th(a, b, c, d);
    };T.prototype.reset = function () {
      this.ib = !1;this.K.Tb(this.Mc);this.K = Bi(this.v, this.j, this.D);
    };T.prototype.Gb = function () {
      var a = this;this.ib || (this.ib = !0, this.K.$a(this.Mc));var b = this.K;return this.K.La().f(function (c) {
        a.K == b && a.reset();throw c;
      });
    };var Ei = function Ei(a) {
      a.K.ke() && a.Gb().f(function (b) {
        var c = new P("unknown", null, null, null, new O("operation-not-supported-in-this-environment"));Ci(b) && a.Wc(c);
      });a.K.Ud() || Di(a.Ra);
    };
    T.prototype.subscribe = function (a) {
      Ia(this.Xb, a) || this.Xb.push(a);if (!this.ib) {
        var b = this;yi(this.Kb).then(function (a) {
          a ? xi(b.Kb).then(function () {
            b.Gb().f(function (a) {
              var c = new P("unknown", null, null, null, new O("operation-not-supported-in-this-environment"));Ci(a) && b.Wc(c);
            });
          }) : Ei(b);
        }).f(function () {
          Ei(b);
        });
      }
    };T.prototype.unsubscribe = function (a) {
      La(this.Xb, function (b) {
        return b == a;
      });
    };
    T.prototype.Wc = function (a) {
      if (!a) throw new O("invalid-auth-event");for (var b = !1, c = 0; c < this.Xb.length; c++) {
        var d = this.Xb[c];if (d.Fd(a.da, a.J)) {
          (b = this.Aa[a.da]) && b.ce(a, d);b = !0;break;
        }
      }Di(this.Ra);return b;
    };var Fi = new xf(2E3, 1E4),
        Gi = new xf(3E4, 6E4);T.prototype.getRedirectResult = function () {
      return this.Ra.getRedirectResult();
    };T.prototype.Nb = function (a, b, c, d, e) {
      var f = this;return this.K.Nb(a, b, c, function () {
        f.ib || (f.ib = !0, f.K.$a(f.Mc));
      }, function () {
        f.reset();
      }, d, e);
    };
    var Ci = function Ci(a) {
      return a && "auth/cordova-not-ready" == a.code ? !0 : !1;
    };T.prototype.Ob = function (a, b, c) {
      var d = this,
          e;return wi(this.Kb).then(function () {
        return d.K.Ob(a, b, c).f(function (a) {
          if (Ci(a)) throw new O("operation-not-supported-in-this-environment");e = a;return xi(d.Kb).then(function () {
            throw e;
          });
        }).then(function () {
          return d.K.ne() ? new A(function () {}) : xi(d.Kb).then(function () {
            return d.getRedirectResult();
          }).then(function () {}).f(function () {});
        });
      });
    };
    T.prototype.Vb = function (a, b, c, d) {
      return this.K.Vb(c, function (c) {
        a.Va(b, null, c, d);
      }, Fi.get());
    };var Hi = {},
        Ii = function Ii(a, b, c) {
      var d = b + ":" + c;Hi[d] || (Hi[d] = new T(a, b, c));return Hi[d];
    },
        zi = function zi(a) {
      this.i = a;this.qb = null;this.Rb = [];this.Qb = [];this.ob = null;this.od = !1;
    };zi.prototype.reset = function () {
      this.qb = null;this.ob && (this.ob.cancel(), this.ob = null);
    };
    zi.prototype.ce = function (a, b) {
      if (!a) return D(new O("invalid-auth-event"));this.reset();this.od = !0;var c = a.da,
          d = a.J,
          e = a.getError() && "auth/web-storage-unsupported" == a.getError().code,
          f = a.getError() && "auth/operation-not-supported-in-this-environment" == a.getError().code;"unknown" != c || e || f ? a = a.P ? this.md(a, b) : b.zb(c, d) ? this.nd(a, b) : D(new O("invalid-auth-event")) : (Ji(this, !1, null, null), a = B());return a;
    };var Di = function Di(a) {
      a.od || (a.od = !0, Ji(a, !1, null, null));
    };
    zi.prototype.md = function (a) {
      Ji(this, !0, null, a.getError());return B();
    };zi.prototype.nd = function (a, b) {
      var c = this;b = b.zb(a.da, a.J);var d = a.tb,
          e = a.ic(),
          f = !!a.da.match(/Redirect$/);return b(d, e).then(function (a) {
        Ji(c, f, a, null);
      }).f(function (a) {
        Ji(c, f, null, a);
      });
    };
    var Ki = function Ki(a, b) {
      a.qb = function () {
        return D(b);
      };if (a.Qb.length) for (var c = 0; c < a.Qb.length; c++) {
        a.Qb[c](b);
      }
    },
        Li = function Li(a, b) {
      a.qb = function () {
        return B(b);
      };if (a.Rb.length) for (var c = 0; c < a.Rb.length; c++) {
        a.Rb[c](b);
      }
    },
        Ji = function Ji(a, b, c, d) {
      b ? d ? Ki(a, d) : Li(a, c) : Li(a, { user: null });a.Rb = [];a.Qb = [];
    };zi.prototype.getRedirectResult = function () {
      var a = this;return new A(function (b, c) {
        a.qb ? a.qb().then(b, c) : (a.Rb.push(b), a.Qb.push(c), Mi(a));
      });
    };
    var Mi = function Mi(a) {
      var b = new O("timeout");a.ob && a.ob.cancel();a.ob = le(Gi.get()).then(function () {
        a.qb || Ji(a, !0, null, b);
      });
    },
        Ai = function Ai(a) {
      this.i = a;
    };Ai.prototype.ce = function (a, b) {
      if (!a) return D(new O("invalid-auth-event"));var c = a.da,
          d = a.J;return a.P ? this.md(a, b) : b.zb(c, d) ? this.nd(a, b) : D(new O("invalid-auth-event"));
    };Ai.prototype.md = function (a, b) {
      b.Va(a.da, null, a.getError(), a.J);return B();
    };
    Ai.prototype.nd = function (a, b) {
      var c = a.J,
          d = a.da,
          e = b.zb(d, c),
          f = a.tb;a = a.ic();return e(f, a).then(function (a) {
        b.Va(d, a, null, c);
      }).f(function (a) {
        b.Va(d, null, a, c);
      });
    };var Ni = function Ni(a) {
      this.g = a;this.Ba = this.X = null;this.Ha = 0;
    };Ni.prototype.C = function () {
      return { apiKey: this.g.j, refreshToken: this.X, accessToken: this.Ba, expirationTime: this.Ha };
    };
    var Pi = function Pi(a, b) {
      var c = b.idToken,
          d = b.refreshToken;b = Oi(b.expiresIn);a.Ba = c;a.Ha = b;a.X = d;
    },
        Oi = function Oi(a) {
      return la() + 1E3 * parseInt(a, 10);
    },
        Qi = function Qi(a, b) {
      return Eg(a.g, b).then(function (b) {
        a.Ba = b.access_token;a.Ha = Oi(b.expires_in);a.X = b.refresh_token;return { accessToken: a.Ba, expirationTime: a.Ha, refreshToken: a.X };
      }).f(function (b) {
        "auth/user-token-expired" == b.code && (a.X = null);throw b;
      });
    };
    Ni.prototype.getToken = function (a) {
      a = !!a;return this.Ba && !this.X ? D(new O("user-token-expired")) : a || !this.Ba || la() > this.Ha - 3E4 ? this.X ? Qi(this, { grant_type: "refresh_token", refresh_token: this.X }) : B(null) : B({ accessToken: this.Ba, expirationTime: this.Ha, refreshToken: this.X });
    };var Ri = function Ri(a, b, c, d, e) {
      Ff(this, { uid: a, displayName: d || null, photoURL: e || null, email: c || null, providerId: b });
    },
        Si = function Si(a, b) {
      Ib.call(this, a);for (var c in b) {
        this[c] = b[c];
      }
    };r(Si, Ib);
    var U = function U(a, b, c) {
      this.ba = [];this.j = a.apiKey;this.D = a.appName;this.v = a.authDomain || null;a = firebase.SDK_VERSION ? mf(firebase.SDK_VERSION) : null;this.g = new S(this.j, null, a);this.ia = new Ni(this.g);Ti(this, b.idToken);Pi(this.ia, b);N(this, "refreshToken", this.ia.X);Ui(this, c || {});he.call(this);this.vc = !1;this.v && pf() && (this.m = Ii(this.v, this.j, this.D));this.Ac = [];this.ka = null;this.mb = Vi(this);this.vb = _q(this.Xc, this);
    };r(U, he);U.prototype.Xc = function () {
      this.mb.kb && (this.mb.stop(), this.mb.start());
    };
    var Vi = function Vi(a) {
      return new Th(function () {
        return a.getToken(!0);
      }, function (a) {
        return a && "auth/network-request-failed" == a.code ? !0 : !1;
      }, function () {
        var b = a.ia.Ha - la() - 3E5;return 0 < b ? b : 0;
      }, 3E4, 96E4, !1);
    },
        Wi = function Wi(a) {
      a.Kd || a.mb.kb || (a.mb.start(), dc(a, "tokenChanged", a.vb), Vb(a, "tokenChanged", a.vb));
    },
        Xi = function Xi(a) {
      dc(a, "tokenChanged", a.vb);a.mb.stop();
    },
        Ti = function Ti(a, b) {
      a.Yd = b;N(a, "_lat", b);
    },
        Yi = function Yi(a, b) {
      La(a.Ac, function (a) {
        return a == b;
      });
    },
        Zi = function Zi(a) {
      for (var b = [], c = 0; c < a.Ac.length; c++) {
        b.push(a.Ac[c](a));
      }return jd(b).then(function () {
        return a;
      });
    },
        $i = function $i(a) {
      a.m && !a.vc && (a.vc = !0, a.m.subscribe(a));
    },
        Ui = function Ui(a, b) {
      Ff(a, { uid: b.uid, displayName: b.displayName || null, photoURL: b.photoURL || null, email: b.email || null, emailVerified: b.emailVerified || !1, identifierNumber: b.identifierNumber || null, isAnonymous: b.isAnonymous || !1, providerData: [] });
    };N(U.prototype, "providerId", "firebase");
    var aj = function aj() {},
        bj = function bj(a) {
      return B().then(function () {
        if (a.Kd) throw new O("app-deleted");
      });
    },
        cj = function cj(a) {
      return Ea(a.providerData, function (a) {
        return a.providerId;
      });
    },
        ej = function ej(a, b) {
      b && (dj(a, b.providerId), a.providerData.push(b));
    },
        dj = function dj(a, b) {
      La(a.providerData, function (a) {
        return a.providerId == b;
      });
    },
        fj = function fj(a, b, c) {
      ("uid" != b || c) && a.hasOwnProperty(b) && N(a, b, c);
    };
    U.prototype.copy = function (a) {
      var b = this;b != a && (Ff(this, { uid: a.uid, displayName: a.displayName, photoURL: a.photoURL, email: a.email, emailVerified: a.emailVerified, identifierNumber: a.identifierNumber, isAnonymous: a.isAnonymous, providerData: [] }), w(a.providerData, function (a) {
        ej(b, a);
      }), this.ia = a.ia, N(this, "refreshToken", this.ia.X));
    };U.prototype.reload = function () {
      var a = this;return this.c(bj(this).then(function () {
        return gj(a).then(function () {
          return Zi(a);
        }).then(aj);
      }));
    };
    var gj = function gj(a) {
      return a.getToken().then(function (b) {
        var c = a.isAnonymous;return hj(a, b).then(function () {
          c || fj(a, "isAnonymous", !1);return b;
        });
      });
    };U.prototype.getToken = function (a) {
      var b = this;return this.c(bj(this).then(function () {
        return b.ia.getToken(a);
      }).then(function (a) {
        if (!a) throw new O("internal-error");a.accessToken != b.Yd && (Ti(b, a.accessToken), b.Na());fj(b, "refreshToken", a.refreshToken);return a.accessToken;
      }));
    };
    var ij = function ij(a, b) {
      b.idToken && a.Yd != b.idToken && (Pi(a.ia, b), a.Na(), Ti(a, b.idToken), fj(a, "refreshToken", a.ia.X));
    };U.prototype.Na = function () {
      this.dispatchEvent(new Si("tokenChanged"));
    };var hj = function hj(a, b) {
      return R(a.g, gh, { idToken: b }).then(_q(a.qf, a));
    };
    U.prototype.qf = function (a) {
      a = a.users;if (!a || !a.length) throw new O("internal-error");a = a[0];Ui(this, { uid: a.localId, displayName: a.displayName, photoURL: a.photoUrl, email: a.email, emailVerified: !!a.emailVerified, identifierNumber: a.identifierNumber });for (var b = jj(a), c = 0; c < b.length; c++) {
        ej(this, b[c]);
      }fj(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
    };
    var jj = function jj(a) {
      return (a = a.providerUserInfo) && a.length ? Ea(a, function (a) {
        return new Ri(a.rawId, a.providerId, a.email, a.displayName, a.photoUrl);
      }) : [];
    },
        lj = function lj(a, b) {
      var c = null;return a.c(b.ed(a.g, a.uid).then(function (b) {
        ij(a, b);c = kj(a, b, "reauthenticate");a.ka = null;return a.reload();
      }).then(function () {
        return c;
      }), !0);
    };U.prototype.reauthenticate = function (a) {
      Bf("firebase.User.prototype.reauthenticate is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");return this.reauthenticateWithCredential(a);
    };
    U.prototype.reauthenticateWithCredential = function (a) {
      return lj(this, a).then(function () {});
    };var mj = function mj(a, b) {
      return gj(a).then(function () {
        if (Ia(cj(a), b)) return Zi(a).then(function () {
          throw new O("provider-already-linked");
        });
      });
    },
        oj = function oj(a, b) {
      var c = null;return a.c(mj(a, b.providerId).then(function () {
        return a.getToken();
      }).then(function (c) {
        return b.cd(a.g, c);
      }).then(function (b) {
        c = kj(a, b, "link");return nj(a, b);
      }).then(function () {
        return c;
      }));
    };
    U.prototype.link = function (a) {
      Bf("firebase.User.prototype.link is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");return this.linkWithCredential(a);
    };U.prototype.linkWithCredential = function (a) {
      return oj(this, a).then(function (a) {
        return a.user;
      });
    };var kj = function kj(a, b, c) {
      var d = rg(b);b = ai(b);return Gf({ user: a, credential: d, additionalUserInfo: b, operationType: c });
    },
        nj = function nj(a, b) {
      ij(a, b);return a.reload().then(function () {
        return a;
      });
    };h = U.prototype;
    h.updateEmail = function (a) {
      var b = this;return this.c(this.getToken().then(function (c) {
        return b.g.updateEmail(c, a);
      }).then(function (a) {
        ij(b, a);return b.reload();
      }));
    };h.updatePassword = function (a) {
      var b = this;return this.c(this.getToken().then(function (c) {
        return b.g.updatePassword(c, a);
      }).then(function (a) {
        ij(b, a);return b.reload();
      }));
    };
    h.updateProfile = function (a) {
      if (void 0 === a.displayName && void 0 === a.photoURL) return bj(this);var b = this;return this.c(this.getToken().then(function (c) {
        return b.g.updateProfile(c, { displayName: a.displayName, photoUrl: a.photoURL });
      }).then(function (a) {
        ij(b, a);fj(b, "displayName", a.displayName || null);fj(b, "photoURL", a.photoUrl || null);return Zi(b);
      }).then(aj));
    };
    h.unlink = function (a) {
      var b = this;return this.c(gj(this).then(function (c) {
        return Ia(cj(b), a) ? Vg(b.g, c, [a]).then(function (a) {
          var c = {};w(a.providerUserInfo || [], function (a) {
            c[a.providerId] = !0;
          });w(cj(b), function (a) {
            c[a] || dj(b, a);
          });return Zi(b);
        }) : Zi(b).then(function () {
          throw new O("no-such-provider");
        });
      }));
    };
    h["delete"] = function () {
      var a = this;return this.c(this.getToken().then(function (b) {
        return R(a.g, fh, { idToken: b });
      }).then(function () {
        a.dispatchEvent(new Si("userDeleted"));
      })).then(function () {
        for (var b = 0; b < a.ba.length; b++) {
          a.ba[b].cancel("app-deleted");
        }a.ba = [];a.Kd = !0;Xi(a);N(a, "refreshToken", null);a.m && a.m.unsubscribe(a);
      });
    };
    h.Fd = function (a, b) {
      return "linkViaPopup" == a && (this.ca || null) == b && this.aa || "reauthViaPopup" == a && (this.ca || null) == b && this.aa || "linkViaRedirect" == a && (this.za || null) == b || "reauthViaRedirect" == a && (this.za || null) == b ? !0 : !1;
    };h.Va = function (a, b, c, d) {
      "linkViaPopup" != a && "reauthViaPopup" != a || d != (this.ca || null) || (c && this.Pa ? this.Pa(c) : b && !c && this.aa && this.aa(b), this.F && (this.F.cancel(), this.F = null), delete this.aa, delete this.Pa);
    };
    h.zb = function (a, b) {
      return "linkViaPopup" == a && b == (this.ca || null) ? _q(this.Nd, this) : "reauthViaPopup" == a && b == (this.ca || null) ? _q(this.Od, this) : "linkViaRedirect" == a && (this.za || null) == b ? _q(this.Nd, this) : "reauthViaRedirect" == a && (this.za || null) == b ? _q(this.Od, this) : null;
    };h.hc = function () {
      return of(this.uid + ":::");
    };var qj = function qj(a, b) {
      return pj(a, "linkViaPopup", b, function () {
        return mj(a, b.providerId).then(function () {
          return Zi(a);
        });
      }, !1);
    };
    U.prototype.linkWithPopup = function (a) {
      return qj(this, a).then(function (a) {
        return a ? Gf({ user: a.user, credential: a.credential, operationType: a.operationType }) : a;
      });
    };var rj = function rj(a, b) {
      return pj(a, "reauthViaPopup", b, function () {
        return B();
      }, !0);
    };U.prototype.reauthenticateWithPopup = function (a) {
      return rj(this, a).then(function (a) {
        return a ? Gf({ user: a.user, credential: a.credential, operationType: a.operationType }) : a;
      });
    };
    var pj = function pj(a, b, c, d, e) {
      if (!pf()) return D(new O("operation-not-supported-in-this-environment"));if (a.ka && !e) return D(a.ka);var f = Nf(c.providerId),
          g = a.hc(),
          k = null;(!qf() || kf()) && a.v && c.isOAuthProvider && (k = xh(a.v, a.j, a.D, b, c, null, g, firebase.SDK_VERSION || null));var n = cf(k, f && f.Mb, f && f.Lb);d = d().then(function () {
        sj(a);if (!e) return a.getToken().then(function () {});
      }).then(function () {
        return a.m.Nb(n, b, c, g, !!k);
      }).then(function () {
        return new A(function (c, d) {
          a.Va(b, null, new O("cancelled-popup-request"), a.ca || null);a.aa = c;a.Pa = d;a.ca = g;a.F = a.m.Vb(a, b, n, g);
        });
      }).then(function (a) {
        n && bf(n);return a;
      }).f(function (a) {
        n && bf(n);throw a;
      });return a.c(d, e);
    };U.prototype.linkWithRedirect = function (a) {
      var b = this;return tj(this, "linkViaRedirect", a, function () {
        return mj(b, a.providerId);
      }, !1);
    };U.prototype.reauthenticateWithRedirect = function (a) {
      return tj(this, "reauthViaRedirect", a, function () {
        return B();
      }, !0);
    };
    var tj = function tj(a, b, c, d, e) {
      if (!pf()) return D(new O("operation-not-supported-in-this-environment"));if (a.ka && !e) return D(a.ka);var f = null,
          g = a.hc();d = d().then(function () {
        sj(a);if (!e) return a.getToken().then(function () {});
      }).then(function () {
        a.za = g;return Zi(a);
      }).then(function (b) {
        a.Sa && (b = a.Sa, b = b.i.set(uj, a.C(), b.u));return b;
      }).then(function () {
        return a.m.Ob(b, c, g);
      }).f(function (b) {
        f = b;if (a.Sa) return vj(a.Sa);throw f;
      }).then(function () {
        if (f) throw f;
      });return a.c(d, e);
    },
        sj = function sj(a) {
      if (!a.m || !a.vc) {
        if (a.m && !a.vc) throw new O("internal-error");throw new O("auth-domain-config-required");
      }
    };U.prototype.Nd = function (a, b) {
      var c = this;this.F && (this.F.cancel(), this.F = null);var d = null,
          e = this.getToken().then(function (d) {
        return Xf(c.g, { requestUri: a, sessionId: b, idToken: d });
      }).then(function (a) {
        d = kj(c, a, "link");return nj(c, a);
      }).then(function () {
        return d;
      });return this.c(e);
    };
    U.prototype.Od = function (a, b) {
      var c = this;this.F && (this.F.cancel(), this.F = null);var d = null,
          e = B().then(function () {
        return Tf(Yf(c.g, { requestUri: a, sessionId: b }), c.uid);
      }).then(function (a) {
        d = kj(c, a, "reauthenticate");ij(c, a);c.ka = null;return c.reload();
      }).then(function () {
        return d;
      });return this.c(e, !0);
    };U.prototype.sendEmailVerification = function () {
      var a = this;return this.c(this.getToken().then(function (b) {
        return a.g.sendEmailVerification(b);
      }).then(function (b) {
        if (a.email != b) return a.reload();
      }).then(function () {}));
    };
    U.prototype.c = function (a, b) {
      var c = this,
          d = wj(this, a, b);this.ba.push(d);md(d, function () {
        Ka(c.ba, d);
      });return d;
    };var wj = function wj(a, b, c) {
      return a.ka && !c ? (b.cancel(), D(a.ka)) : b.f(function (b) {
        !b || "auth/user-disabled" != b.code && "auth/user-token-expired" != b.code || (a.ka || a.dispatchEvent(new Si("userInvalidated")), a.ka = b);throw b;
      });
    };U.prototype.toJSON = function () {
      return this.C();
    };
    U.prototype.C = function () {
      var a = { uid: this.uid, displayName: this.displayName, photoURL: this.photoURL, email: this.email, emailVerified: this.emailVerified, identifierNumber: this.identifierNumber, isAnonymous: this.isAnonymous, providerData: [], apiKey: this.j, appName: this.D, authDomain: this.v, stsTokenManager: this.ia.C(), redirectEventId: this.za || null };w(this.providerData, function (b) {
        a.providerData.push(Hf(b));
      });return a;
    };
    var xj = function xj(a) {
      if (!a.apiKey) return null;var b = { apiKey: a.apiKey, authDomain: a.authDomain, appName: a.appName },
          c = {};if (a.stsTokenManager && a.stsTokenManager.accessToken && a.stsTokenManager.expirationTime) c.idToken = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null, c.expiresIn = (a.stsTokenManager.expirationTime - la()) / 1E3;else return null;var d = new U(b, c, a);a.providerData && w(a.providerData, function (a) {
        a && ej(d, Gf(a));
      });a.redirectEventId && (d.za = a.redirectEventId);return d;
    },
        yj = function yj(a, b, c) {
      var d = new U(a, b);c && (d.Sa = c);return d.reload().then(function () {
        return d;
      });
    };var zj = function zj(a) {
      this.u = a;this.i = di();
    },
        uj = { name: "redirectUser", M: !1 },
        vj = function vj(a) {
      return a.i.remove(uj, a.u);
    },
        Aj = function Aj(a, b) {
      return a.i.get(uj, a.u).then(function (a) {
        a && b && (a.authDomain = b);return xj(a || {});
      });
    };var Bj = function Bj(a) {
      this.u = a;this.i = di();
    },
        Cj = { name: "authUser", M: !0 },
        Dj = function Dj(a, b) {
      return a.i.set(Cj, b.C(), a.u);
    },
        Ej = function Ej(a) {
      return a.i.remove(Cj, a.u);
    },
        Fj = function Fj(a, b) {
      return a.i.get(Cj, a.u).then(function (a) {
        a && b && (a.authDomain = b);return xj(a || {});
      });
    };var W = function W(a) {
      this.Fa = !1;N(this, "app", a);if (V(this).options && V(this).options.apiKey) a = firebase.SDK_VERSION ? mf(firebase.SDK_VERSION) : null, this.g = new S(V(this).options && V(this).options.apiKey, null, a);else throw new O("invalid-api-key");this.ba = [];this.Ca = [];this.ub = [];this.mf = firebase.INTERNAL.createSubscribe(_q(this.Ze, this));this.Ic = void 0;firebase.INTERNAL.createSubscribe(_q(this.af, this));Gj(this, null);this.ta = new Bj(V(this).options.apiKey + ":" + V(this).name);this.pb = new zj(V(this).options.apiKey + ":" + V(this).name);this.cc = this.c(Hj(this));this.qa = this.c(Ij(this));this.bd = !1;this.Vc = _q(this.Gf, this);this.qe = _q(this.gb, this);this.vb = _q(this.Xc, this);this.oe = _q(this.Ue, this);this.pe = _q(this.Ve, this);Jj(this);this.INTERNAL = {};this.INTERNAL["delete"] = _q(this["delete"], this);this.Ia = 0;
    };W.prototype.toJSON = function () {
      return { apiKey: V(this).options.apiKey, authDomain: V(this).options.authDomain, appName: V(this).name, currentUser: X(this) && X(this).C() };
    };
    var Kj = function Kj(a) {
      return a.Ie || D(new O("auth-domain-config-required"));
    },
        Jj = function Jj(a) {
      var b = V(a).options.authDomain,
          c = V(a).options.apiKey;b && pf() && (a.Ie = a.cc.then(function () {
        if (!a.Fa) return a.m = Ii(b, c, V(a).name), a.m.subscribe(a), X(a) && $i(X(a)), a.Sb && ($i(a.Sb), a.Sb = null), a.m;
      }));
    };h = W.prototype;h.Fd = function (a, b) {
      switch (a) {case "unknown":case "signInViaRedirect":
          return !0;case "signInViaPopup":
          return this.ca == b && !!this.aa;default:
          return !1;}
    };
    h.Va = function (a, b, c, d) {
      "signInViaPopup" == a && this.ca == d && (c && this.Pa ? this.Pa(c) : b && !c && this.aa && this.aa(b), this.F && (this.F.cancel(), this.F = null), delete this.aa, delete this.Pa);
    };h.zb = function (a, b) {
      return "signInViaRedirect" == a || "signInViaPopup" == a && this.ca == b && this.aa ? _q(this.Ke, this) : null;
    };
    h.Ke = function (a, b) {
      var c = this;a = { requestUri: a, sessionId: b };this.F && (this.F.cancel(), this.F = null);var d = null,
          e = null,
          f = Vf(c.g, a).then(function (a) {
        d = rg(a);e = ai(a);return a;
      });a = c.cc.then(function () {
        return f;
      }).then(function (a) {
        return Lj(c, a);
      }).then(function () {
        return Gf({ user: X(c), credential: d, additionalUserInfo: e, operationType: "signIn" });
      });return this.c(a);
    };h.hc = function () {
      return of();
    };
    var Mj = function Mj(a, b) {
      if (!pf()) return D(new O("operation-not-supported-in-this-environment"));var c = Nf(b.providerId),
          d = a.hc(),
          e = null;(!qf() || kf()) && V(a).options.authDomain && b.isOAuthProvider && (e = xh(V(a).options.authDomain, V(a).options.apiKey, V(a).name, "signInViaPopup", b, null, d, firebase.SDK_VERSION || null));var f = cf(e, c && c.Mb, c && c.Lb),
          c = Kj(a).then(function (a) {
        return a.Nb(f, "signInViaPopup", b, d, !!e);
      }).then(function () {
        return new A(function (b, c) {
          a.Va("signInViaPopup", null, new O("cancelled-popup-request"), a.ca);a.aa = b;a.Pa = c;a.ca = d;a.F = a.m.Vb(a, "signInViaPopup", f, d);
        });
      }).then(function (a) {
        f && bf(f);return a;
      }).f(function (a) {
        f && bf(f);throw a;
      });return a.c(c);
    };W.prototype.signInWithPopup = function (a) {
      return Mj(this, a).then(function (a) {
        return a ? Gf({ user: a.user, credential: a.credential, operationType: a.operationType }) : a;
      });
    };W.prototype.getRedirectResult = function () {
      return Nj(this).then(function (a) {
        return a ? Gf({ user: a.user, credential: a.credential, operationType: a.operationType }) : a;
      });
    };
    W.prototype.signInWithRedirect = function (a) {
      if (!pf()) return D(new O("operation-not-supported-in-this-environment"));var b = this,
          c = Kj(this).then(function () {
        return b.m.Ob("signInViaRedirect", a);
      });return this.c(c);
    };
    var Nj = function Nj(a) {
      if (!pf()) return D(new O("operation-not-supported-in-this-environment"));var b = Kj(a).then(function () {
        return a.m.getRedirectResult();
      });return a.c(b);
    },
        Lj = function Lj(a, b) {
      var c = {};c.apiKey = V(a).options.apiKey;c.authDomain = V(a).options.authDomain;c.appName = V(a).name;return a.cc.then(function () {
        return yj(c, b, a.pb);
      }).then(function (b) {
        if (X(a) && b.uid == X(a).uid) return X(a).copy(b), a.gb(b);Gj(a, b);$i(b);return a.gb(b);
      }).then(function () {
        a.Na();
      });
    },
        Gj = function Gj(a, b) {
      X(a) && (Yi(X(a), a.qe), dc(X(a), "tokenChanged", a.vb), dc(X(a), "userDeleted", a.oe), dc(X(a), "userInvalidated", a.pe), Xi(X(a)));b && (b.Ac.push(a.qe), Vb(b, "tokenChanged", a.vb), Vb(b, "userDeleted", a.oe), Vb(b, "userInvalidated", a.pe), 0 < a.Ia && Wi(b));N(a, "currentUser", b);
    };W.prototype.signOut = function () {
      var a = this,
          b = this.qa.then(function () {
        if (!X(a)) return B();Gj(a, null);return Ej(a.ta).then(function () {
          a.Na();
        });
      });return this.c(b);
    };
    var Oj = function Oj(a) {
      var b = Aj(a.pb, V(a).options.authDomain).then(function (b) {
        if (a.Sb = b) b.Sa = a.pb;return vj(a.pb);
      });return a.c(b);
    },
        Hj = function Hj(a) {
      var b = V(a).options.authDomain,
          c = Oj(a).then(function () {
        return Fj(a.ta, b);
      }).then(function (b) {
        return b ? (b.Sa = a.pb, a.Sb && (a.Sb.za || null) == (b.za || null) ? b : b.reload().then(function () {
          return Dj(a.ta, b).then(function () {
            return b;
          });
        }).f(function (c) {
          return "auth/network-request-failed" == c.code ? b : Ej(a.ta);
        })) : null;
      }).then(function (b) {
        Gj(a, b || null);
      });return a.c(c);
    },
        Ij = function Ij(a) {
      return a.cc.then(function () {
        return a.getRedirectResult();
      }).f(function () {}).then(function () {
        if (!a.Fa) return a.Vc();
      }).f(function () {}).then(function () {
        if (!a.Fa) {
          a.bd = !0;var b = a.ta;b.i.addListener(Cj, b.u, a.Vc);
        }
      });
    };h = W.prototype;h.Gf = function () {
      var a = this;return Fj(this.ta, V(this).options.authDomain).then(function (b) {
        if (!a.Fa) {
          var c;if (c = X(a) && b) {
            c = X(a).uid;var d = b.uid;c = void 0 === c || null === c || "" === c || void 0 === d || null === d || "" === d ? !1 : c == d;
          }if (c) return X(a).copy(b), X(a).getToken();if (X(a) || b) Gj(a, b), b && ($i(b), b.Sa = a.pb), a.m && a.m.subscribe(a), a.Na();
        }
      });
    };h.gb = function (a) {
      return Dj(this.ta, a);
    };h.Xc = function () {
      this.Na();this.gb(X(this));
    };h.Ue = function () {
      this.signOut();
    };
    h.Ve = function () {
      this.signOut();
    };var Pj = function Pj(a, b) {
      var c = null,
          d = null;return a.c(b.then(function (b) {
        c = rg(b);d = ai(b);return Lj(a, b);
      }).then(function () {
        return Gf({ user: X(a), credential: c, additionalUserInfo: d, operationType: "signIn" });
      }));
    };h = W.prototype;h.Ze = function (a) {
      var b = this;this.addAuthTokenListener(function () {
        a.next(X(b));
      });
    };h.af = function (a) {
      var b = this;Qj(this, function () {
        a.next(X(b));
      });
    };
    h.onAuthStateChanged = function (a, b, c) {
      var d = this;this.bd && firebase.Promise.resolve().then(function () {
        p(a) ? a(X(d)) : p(a.next) && a.next(X(d));
      });return this.mf(a, b, c);
    };h.getToken = function (a) {
      var b = this,
          c = this.qa.then(function () {
        return X(b) ? X(b).getToken(a).then(function (a) {
          return { accessToken: a };
        }) : null;
      });return this.c(c);
    };h.signInWithCustomToken = function (a) {
      var b = this;return this.qa.then(function () {
        return Pj(b, R(b.g, hh, { token: a }));
      }).then(function (a) {
        a = a.user;fj(a, "isAnonymous", !1);return b.gb(a);
      }).then(function () {
        return X(b);
      });
    };
    h.signInWithEmailAndPassword = function (a, b) {
      var c = this;return this.qa.then(function () {
        return Pj(c, R(c.g, ig, { email: a, password: b }));
      }).then(function (a) {
        return a.user;
      });
    };h.createUserWithEmailAndPassword = function (a, b) {
      var c = this;return this.qa.then(function () {
        return Pj(c, R(c.g, eh, { email: a, password: b }));
      }).then(function (a) {
        return a.user;
      });
    };h.signInWithCredential = function (a) {
      return Rj(this, a).then(function (a) {
        return a.user;
      });
    };var Rj = function Rj(a, b) {
      return a.qa.then(function () {
        return Pj(a, b.Ab(a.g));
      });
    };
    W.prototype.signInAnonymously = function () {
      var a = X(this),
          b = this;return a && a.isAnonymous ? B(a) : this.qa.then(function () {
        return Pj(b, b.g.signInAnonymously());
      }).then(function (a) {
        a = a.user;fj(a, "isAnonymous", !0);return b.gb(a);
      }).then(function () {
        return X(b);
      });
    };var V = function V(a) {
      return a.app;
    },
        X = function X(a) {
      return a.currentUser;
    };W.prototype.getUid = function () {
      return X(this) && X(this).uid || null;
    };var Sj = function Sj(a) {
      return X(a) && X(a)._lat || null;
    };h = W.prototype;
    h.Na = function () {
      if (this.bd) {
        for (var a = 0; a < this.Ca.length; a++) {
          if (this.Ca[a]) this.Ca[a](Sj(this));
        }if (this.Ic !== this.getUid() && this.ub.length) for (this.Ic = this.getUid(), a = 0; a < this.ub.length; a++) {
          if (this.ub[a]) this.ub[a](Sj(this));
        }
      }
    };h.Ae = function (a) {
      this.addAuthTokenListener(a);this.Ia++;0 < this.Ia && X(this) && Wi(X(this));
    };h.uf = function (a) {
      var b = this;w(this.Ca, function (c) {
        c == a && b.Ia--;
      });0 > this.Ia && (this.Ia = 0);0 == this.Ia && X(this) && Xi(X(this));this.removeAuthTokenListener(a);
    };
    h.addAuthTokenListener = function (a) {
      var b = this;this.Ca.push(a);this.c(this.qa.then(function () {
        b.Fa || Ia(b.Ca, a) && a(Sj(b));
      }));
    };h.removeAuthTokenListener = function (a) {
      La(this.Ca, function (b) {
        return b == a;
      });
    };var Qj = function Qj(a, b) {
      a.ub.push(b);a.c(a.qa.then(function () {
        !a.Fa && Ia(a.ub, b) && a.Ic !== a.getUid() && (a.Ic = a.getUid(), b(Sj(a)));
      }));
    };h = W.prototype;
    h["delete"] = function () {
      this.Fa = !0;for (var a = 0; a < this.ba.length; a++) {
        this.ba[a].cancel("app-deleted");
      }this.ba = [];this.ta && (a = this.ta, a.i.removeListener(Cj, a.u, this.Vc));this.m && this.m.unsubscribe(this);return firebase.Promise.resolve();
    };h.c = function (a) {
      var b = this;this.ba.push(a);md(a, function () {
        Ka(b.ba, a);
      });return a;
    };h.fetchProvidersForEmail = function (a) {
      return this.c(Jg(this.g, a));
    };h.verifyPasswordResetCode = function (a) {
      return this.checkActionCode(a).then(function (a) {
        return a.data.email;
      });
    };
    h.confirmPasswordReset = function (a, b) {
      return this.c(this.g.confirmPasswordReset(a, b).then(function () {}));
    };h.checkActionCode = function (a) {
      return this.c(this.g.checkActionCode(a).then(function (a) {
        return new Sh(a);
      }));
    };h.applyActionCode = function (a) {
      return this.c(this.g.applyActionCode(a).then(function () {}));
    };h.sendPasswordResetEmail = function (a) {
      return this.c(this.g.sendPasswordResetEmail(a).then(function () {}));
    };var Tj = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),
        Y = function Y(a, b) {
      return { name: a || "", ja: "a valid string", optional: !!b, la: m };
    },
        Z = function Z(a) {
      return { name: a || "", ja: "a valid object", optional: !1, la: ha };
    },
        Uj = function Uj(a, b) {
      return { name: a || "", ja: "a function", optional: !!b, la: p };
    },
        Vj = function Vj() {
      return { name: "", ja: "null", optional: !1, la: da };
    },
        Wj = function Wj() {
      return { name: "credential", ja: "a valid credential", optional: !1, la: function la(a) {
          return a ? !!a.Ab : !1;
        } };
    },
        Xj = function Xj() {
      return { name: "authProvider",
        ja: "a valid Auth provider", optional: !1, la: function la(a) {
          return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"));
        } };
    },
        Yj = function Yj(a, b, c, d) {
      return { name: c || "", ja: a.ja + " or " + b.ja, optional: !!d, la: function la(c) {
          return a.la(c) || b.la(c);
        } };
    };var ak = function ak(a, b) {
      for (var c in b) {
        var d = b[c].name;a[d] = Zj(d, a[c], b[c].a);
      }
    },
        bk = function bk(a, b, c, d) {
      a[b] = Zj(b, c, d);
    },
        Zj = function Zj(a, b, c) {
      if (!c) return b;var d = ck(a);a = function a() {
        var a = Array.prototype.slice.call(arguments),
            e;a: {
          e = Array.prototype.slice.call(a);var k;k = 0;for (var n = !1, C = 0; C < c.length; C++) {
            if (c[C].optional) n = !0;else {
              if (n) throw new O("internal-error", "Argument validator encountered a required argument after an optional argument.");k++;
            }
          }n = c.length;if (e.length < k || n < e.length) e = "Expected " + (k == n ? 1 == k ? "1 argument" : k + " arguments" : k + "-" + n + " arguments") + " but got " + e.length + ".";else {
            for (k = 0; k < e.length; k++) {
              if (n = c[k].optional && void 0 === e[k], !c[k].la(e[k]) && !n) {
                e = c[k];if (0 > k || k >= Tj.length) throw new O("internal-error", "Argument validator received an unsupported number of arguments.");e = Tj[k] + " argument " + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.ja + ".";break a;
              }
            }e = null;
          }
        }if (e) throw new O("argument-error", d + " failed: " + e);return b.apply(this, a);
      };for (var e in b) {
        a[e] = b[e];
      }for (e in b.prototype) {
        a.prototype[e] = b.prototype[e];
      }return a;
    },
        ck = function ck(a) {
      a = a.split(".");return a[a.length - 1];
    };ak(W.prototype, { applyActionCode: { name: "applyActionCode", a: [Y("code")] }, checkActionCode: { name: "checkActionCode", a: [Y("code")] }, confirmPasswordReset: { name: "confirmPasswordReset", a: [Y("code"), Y("newPassword")] }, createUserWithEmailAndPassword: { name: "createUserWithEmailAndPassword", a: [Y("email"), Y("password")] }, fetchProvidersForEmail: { name: "fetchProvidersForEmail", a: [Y("email")] }, getRedirectResult: { name: "getRedirectResult", a: [] }, onAuthStateChanged: { name: "onAuthStateChanged", a: [Yj(Z(), Uj(), "nextOrObserver"), Uj("opt_error", !0), Uj("opt_completed", !0)] }, sendPasswordResetEmail: { name: "sendPasswordResetEmail", a: [Y("email")] }, signInAnonymously: { name: "signInAnonymously", a: [] }, signInWithCredential: { name: "signInWithCredential", a: [Wj()] }, signInWithCustomToken: { name: "signInWithCustomToken", a: [Y("token")] }, signInWithEmailAndPassword: { name: "signInWithEmailAndPassword", a: [Y("email"), Y("password")] }, signInWithPopup: { name: "signInWithPopup", a: [Xj()] }, signInWithRedirect: { name: "signInWithRedirect", a: [Xj()] }, signOut: { name: "signOut",
        a: [] }, toJSON: { name: "toJSON", a: [Y(null, !0)] }, verifyPasswordResetCode: { name: "verifyPasswordResetCode", a: [Y("code")] } });
    ak(U.prototype, { "delete": { name: "delete", a: [] }, getToken: { name: "getToken", a: [{ name: "opt_forceRefresh", ja: "a boolean", optional: !0, la: function la(a) {
            return "boolean" == typeof a;
          } }] }, link: { name: "link", a: [Wj()] }, linkWithCredential: { name: "linkWithCredential", a: [Wj()] }, linkWithPopup: { name: "linkWithPopup", a: [Xj()] }, linkWithRedirect: { name: "linkWithRedirect", a: [Xj()] }, reauthenticate: { name: "reauthenticate", a: [Wj()] }, reauthenticateWithCredential: { name: "reauthenticateWithCredential", a: [Wj()] }, reauthenticateWithPopup: { name: "reauthenticateWithPopup",
        a: [Xj()] }, reauthenticateWithRedirect: { name: "reauthenticateWithRedirect", a: [Xj()] }, reload: { name: "reload", a: [] }, sendEmailVerification: { name: "sendEmailVerification", a: [] }, toJSON: { name: "toJSON", a: [Y(null, !0)] }, unlink: { name: "unlink", a: [Y("provider")] }, updateEmail: { name: "updateEmail", a: [Y("email")] }, updatePassword: { name: "updatePassword", a: [Y("password")] }, updateProfile: { name: "updateProfile", a: [Z("profile")] } });ak(A.prototype, { f: { name: "catch" }, then: { name: "then" } });
    bk(kg, "credential", function (a, b) {
      return new hg(a, b);
    }, [Y("email"), Y("password")]);ak($f.prototype, { addScope: { name: "addScope", a: [Y("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [Z("customOAuthParameters")] } });bk($f, "credential", ag, [Yj(Y(), Z(), "token")]);ak(bg.prototype, { addScope: { name: "addScope", a: [Y("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [Z("customOAuthParameters")] } });bk(bg, "credential", cg, [Yj(Y(), Z(), "token")]);
    ak(dg.prototype, { addScope: { name: "addScope", a: [Y("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [Z("customOAuthParameters")] } });bk(dg, "credential", eg, [Yj(Y(), Yj(Z(), Vj()), "idToken"), Yj(Y(), Vj(), "accessToken", !0)]);ak(fg.prototype, { setCustomParameters: { name: "setCustomParameters", a: [Z("customOAuthParameters")] } });bk(fg, "credential", gg, [Yj(Y(), Z(), "token"), Y("secret", !0)]);ak(O.prototype, { toJSON: { name: "toJSON", a: [Y(null, !0)] } });ak(tg.prototype, { toJSON: { name: "toJSON", a: [Y(null, !0)] } });
    ak(Rf.prototype, { toJSON: { name: "toJSON", a: [Y(null, !0)] } });
    (function () {
      if ("undefined" !== typeof firebase && firebase.INTERNAL && firebase.INTERNAL.registerService) {
        var a = { Auth: W, Error: O };bk(a, "EmailAuthProvider", kg, []);bk(a, "FacebookAuthProvider", $f, []);bk(a, "GithubAuthProvider", bg, []);bk(a, "GoogleAuthProvider", dg, []);bk(a, "TwitterAuthProvider", fg, []);firebase.INTERNAL.registerService("auth", function (a, c) {
          a = new W(a);c({ INTERNAL: { getUid: _q(a.getUid, a), getToken: _q(a.getToken, a), addAuthTokenListener: _q(a.Ae, a), removeAuthTokenListener: _q(a.uf, a) } });return a;
        }, a, function (a, c) {
          if ("create" === a) try {
            c.auth();
          } catch (d) {}
        });firebase.INTERNAL.extendNamespace({ User: U });
      } else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
    })();
  }).call(this);
}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
module.exports = firebase.auth;
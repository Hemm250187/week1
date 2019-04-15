"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* axios v0.18.0 | (c) 2018 by Matt Zabriskie */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.axios = t() : e.axios = t();
}(void 0, function () {
  return function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = n[r] = {
        exports: {},
        id: r,
        loaded: !1
      };
      return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports;
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0);
  }([function (e, t, n) {
    e.exports = n(1);
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      var t = new s(e),
          n = i(s.prototype.request, t);
      return o.extend(n, s.prototype, t), o.extend(n, t), n;
    }

    var o = n(2),
        i = n(3),
        s = n(5),
        u = n(6),
        a = r(u);
    a.Axios = s, a.create = function (e) {
      return r(o.merge(u, e));
    }, a.Cancel = n(23), a.CancelToken = n(24), a.isCancel = n(20), a.all = function (e) {
      return Promise.all(e);
    }, a.spread = n(25), e.exports = a, e.exports["default"] = a;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return "[object Array]" === R.call(e);
    }

    function o(e) {
      return "[object ArrayBuffer]" === R.call(e);
    }

    function i(e) {
      return "undefined" != typeof FormData && e instanceof FormData;
    }

    function s(e) {
      var t;
      return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
    }

    function u(e) {
      return "string" == typeof e;
    }

    function a(e) {
      return "number" == typeof e;
    }

    function c(e) {
      return "undefined" == typeof e;
    }

    function f(e) {
      return null !== e && "object" == _typeof(e);
    }

    function p(e) {
      return "[object Date]" === R.call(e);
    }

    function d(e) {
      return "[object File]" === R.call(e);
    }

    function l(e) {
      return "[object Blob]" === R.call(e);
    }

    function h(e) {
      return "[object Function]" === R.call(e);
    }

    function m(e) {
      return f(e) && h(e.pipe);
    }

    function y(e) {
      return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
    }

    function w(e) {
      return e.replace(/^\s*/, "").replace(/\s*$/, "");
    }

    function g() {
      return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
    }

    function v(e, t) {
      if (null !== e && "undefined" != typeof e) if ("object" != _typeof(e) && (e = [e]), r(e)) for (var n = 0, o = e.length; n < o; n++) {
        t.call(null, e[n], n, e);
      } else for (var i in e) {
        Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
      }
    }

    function x() {
      function e(e, n) {
        "object" == _typeof(t[n]) && "object" == _typeof(e) ? t[n] = x(t[n], e) : t[n] = e;
      }

      for (var t = {}, n = 0, r = arguments.length; n < r; n++) {
        v(arguments[n], e);
      }

      return t;
    }

    function b(e, t, n) {
      return v(t, function (t, r) {
        n && "function" == typeof t ? e[r] = E(t, n) : e[r] = t;
      }), e;
    }

    var E = n(3),
        C = n(4),
        R = Object.prototype.toString;
    e.exports = {
      isArray: r,
      isArrayBuffer: o,
      isBuffer: C,
      isFormData: i,
      isArrayBufferView: s,
      isString: u,
      isNumber: a,
      isObject: f,
      isUndefined: c,
      isDate: p,
      isFile: d,
      isBlob: l,
      isFunction: h,
      isStream: m,
      isURLSearchParams: y,
      isStandardBrowserEnv: g,
      forEach: v,
      merge: x,
      extend: b,
      trim: w
    };
  }, function (e, t) {
    "use strict";

    e.exports = function (e, t) {
      return function () {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) {
          n[r] = arguments[r];
        }

        return e.apply(t, n);
      };
    };
  }, function (e, t) {
    function n(e) {
      return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
    }

    function r(e) {
      return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0));
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */


    e.exports = function (e) {
      return null != e && (n(e) || r(e) || !!e._isBuffer);
    };
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      this.defaults = e, this.interceptors = {
        request: new s(),
        response: new s()
      };
    }

    var o = n(6),
        i = n(2),
        s = n(17),
        u = n(18);
    r.prototype.request = function (e) {
      "string" == typeof e && (e = i.merge({
        url: arguments[0]
      }, arguments[1])), e = i.merge(o, {
        method: "get"
      }, this.defaults, e), e.method = e.method.toLowerCase();
      var t = [u, void 0],
          n = Promise.resolve(e);

      for (this.interceptors.request.forEach(function (e) {
        t.unshift(e.fulfilled, e.rejected);
      }), this.interceptors.response.forEach(function (e) {
        t.push(e.fulfilled, e.rejected);
      }); t.length;) {
        n = n.then(t.shift(), t.shift());
      }

      return n;
    }, i.forEach(["delete", "get", "head", "options"], function (e) {
      r.prototype[e] = function (t, n) {
        return this.request(i.merge(n || {}, {
          method: e,
          url: t
        }));
      };
    }), i.forEach(["post", "put", "patch"], function (e) {
      r.prototype[e] = function (t, n, r) {
        return this.request(i.merge(r || {}, {
          method: e,
          url: t,
          data: n
        }));
      };
    }), e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      !i.isUndefined(e) && i.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
    }

    function o() {
      var e;
      return "undefined" != typeof XMLHttpRequest ? e = n(8) : "undefined" != typeof process && (e = n(8)), e;
    }

    var i = n(2),
        s = n(7),
        u = {
      "Content-Type": "application/x-www-form-urlencoded"
    },
        a = {
      adapter: o(),
      transformRequest: [function (e, t) {
        return s(t, "Content-Type"), i.isFormData(e) || i.isArrayBuffer(e) || i.isBuffer(e) || i.isStream(e) || i.isFile(e) || i.isBlob(e) ? e : i.isArrayBufferView(e) ? e.buffer : i.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : i.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
      }],
      transformResponse: [function (e) {
        if ("string" == typeof e) try {
          e = JSON.parse(e);
        } catch (e) {}
        return e;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      validateStatus: function validateStatus(e) {
        return e >= 200 && e < 300;
      }
    };
    a.headers = {
      common: {
        Accept: "application/json, text/plain, */*"
      }
    }, i.forEach(["delete", "get", "head"], function (e) {
      a.headers[e] = {};
    }), i.forEach(["post", "put", "patch"], function (e) {
      a.headers[e] = i.merge(u);
    }), e.exports = a;
  }, function (e, t, n) {
    "use strict";

    var r = n(2);

    e.exports = function (e, t) {
      r.forEach(e, function (n, r) {
        r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]);
      });
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(2),
        o = n(9),
        i = n(12),
        s = n(13),
        u = n(14),
        a = n(10),
        c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(15);

    e.exports = function (e) {
      return new Promise(function (t, f) {
        var p = e.data,
            d = e.headers;
        r.isFormData(p) && delete d["Content-Type"];
        var l = new XMLHttpRequest(),
            h = "onreadystatechange",
            m = !1;

        if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in l || u(e.url) || (l = new window.XDomainRequest(), h = "onload", m = !0, l.onprogress = function () {}, l.ontimeout = function () {}), e.auth) {
          var y = e.auth.username || "",
              w = e.auth.password || "";
          d.Authorization = "Basic " + c(y + ":" + w);
        }

        if (l.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), l.timeout = e.timeout, l[h] = function () {
          if (l && (4 === l.readyState || m) && (0 !== l.status || l.responseURL && 0 === l.responseURL.indexOf("file:"))) {
            var n = "getAllResponseHeaders" in l ? s(l.getAllResponseHeaders()) : null,
                r = e.responseType && "text" !== e.responseType ? l.response : l.responseText,
                i = {
              data: r,
              status: 1223 === l.status ? 204 : l.status,
              statusText: 1223 === l.status ? "No Content" : l.statusText,
              headers: n,
              config: e,
              request: l
            };
            o(t, f, i), l = null;
          }
        }, l.onerror = function () {
          f(a("Network Error", e, null, l)), l = null;
        }, l.ontimeout = function () {
          f(a("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", l)), l = null;
        }, r.isStandardBrowserEnv()) {
          var g = n(16),
              v = (e.withCredentials || u(e.url)) && e.xsrfCookieName ? g.read(e.xsrfCookieName) : void 0;
          v && (d[e.xsrfHeaderName] = v);
        }

        if ("setRequestHeader" in l && r.forEach(d, function (e, t) {
          "undefined" == typeof p && "content-type" === t.toLowerCase() ? delete d[t] : l.setRequestHeader(t, e);
        }), e.withCredentials && (l.withCredentials = !0), e.responseType) try {
          l.responseType = e.responseType;
        } catch (t) {
          if ("json" !== e.responseType) throw t;
        }
        "function" == typeof e.onDownloadProgress && l.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && l.upload && l.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
          l && (l.abort(), f(e), l = null);
        }), void 0 === p && (p = null), l.send(p);
      });
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(10);

    e.exports = function (e, t, n) {
      var o = n.config.validateStatus;
      n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(11);

    e.exports = function (e, t, n, o, i) {
      var s = new Error(e);
      return r(s, t, n, o, i);
    };
  }, function (e, t) {
    "use strict";

    e.exports = function (e, t, n, r, o) {
      return e.config = t, n && (e.code = n), e.request = r, e.response = o, e;
    };
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }

    var o = n(2);

    e.exports = function (e, t, n) {
      if (!t) return e;
      var i;
      if (n) i = n(t);else if (o.isURLSearchParams(t)) i = t.toString();else {
        var s = [];
        o.forEach(t, function (e, t) {
          null !== e && "undefined" != typeof e && (o.isArray(e) ? t += "[]" : e = [e], o.forEach(e, function (e) {
            o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)), s.push(r(t) + "=" + r(e));
          }));
        }), i = s.join("&");
      }
      return i && (e += (e.indexOf("?") === -1 ? "?" : "&") + i), e;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(2),
        o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];

    e.exports = function (e) {
      var t,
          n,
          i,
          s = {};
      return e ? (r.forEach(e.split("\n"), function (e) {
        if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
          if (s[t] && o.indexOf(t) >= 0) return;
          "set-cookie" === t ? s[t] = (s[t] ? s[t] : []).concat([n]) : s[t] = s[t] ? s[t] + ", " + n : n;
        }
      }), s) : s;
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(2);
    e.exports = r.isStandardBrowserEnv() ? function () {
      function e(e) {
        var t = e;
        return n && (o.setAttribute("href", t), t = o.href), o.setAttribute("href", t), {
          href: o.href,
          protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
          host: o.host,
          search: o.search ? o.search.replace(/^\?/, "") : "",
          hash: o.hash ? o.hash.replace(/^#/, "") : "",
          hostname: o.hostname,
          port: o.port,
          pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
        };
      }

      var t,
          n = /(msie|trident)/i.test(navigator.userAgent),
          o = document.createElement("a");
      return t = e(window.location.href), function (n) {
        var o = r.isString(n) ? e(n) : n;
        return o.protocol === t.protocol && o.host === t.host;
      };
    }() : function () {
      return function () {
        return !0;
      };
    }();
  }, function (e, t) {
    "use strict";

    function n() {
      this.message = "String contains an invalid character";
    }

    function r(e) {
      for (var t, r, i = String(e), s = "", u = 0, a = o; i.charAt(0 | u) || (a = "=", u % 1); s += a.charAt(63 & t >> 8 - u % 1 * 8)) {
        if (r = i.charCodeAt(u += .75), r > 255) throw new n();
        t = t << 8 | r;
      }

      return s;
    }

    var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    n.prototype = new Error(), n.prototype.code = 5, n.prototype.name = "InvalidCharacterError", e.exports = r;
  }, function (e, t, n) {
    "use strict";

    var r = n(2);
    e.exports = r.isStandardBrowserEnv() ? function () {
      return {
        write: function write(e, t, n, o, i, s) {
          var u = [];
          u.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()), r.isString(o) && u.push("path=" + o), r.isString(i) && u.push("domain=" + i), s === !0 && u.push("secure"), document.cookie = u.join("; ");
        },
        read: function read(e) {
          var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove: function remove(e) {
          this.write(e, "", Date.now() - 864e5);
        }
      };
    }() : function () {
      return {
        write: function write() {},
        read: function read() {
          return null;
        },
        remove: function remove() {}
      };
    }();
  }, function (e, t, n) {
    "use strict";

    function r() {
      this.handlers = [];
    }

    var o = n(2);
    r.prototype.use = function (e, t) {
      return this.handlers.push({
        fulfilled: e,
        rejected: t
      }), this.handlers.length - 1;
    }, r.prototype.eject = function (e) {
      this.handlers[e] && (this.handlers[e] = null);
    }, r.prototype.forEach = function (e) {
      o.forEach(this.handlers, function (t) {
        null !== t && e(t);
      });
    }, e.exports = r;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }

    var o = n(2),
        i = n(19),
        s = n(20),
        u = n(6),
        a = n(21),
        c = n(22);

    e.exports = function (e) {
      r(e), e.baseURL && !a(e.url) && (e.url = c(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), o.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
        delete e.headers[t];
      });
      var t = e.adapter || u.adapter;
      return t(e).then(function (t) {
        return r(e), t.data = i(t.data, t.headers, e.transformResponse), t;
      }, function (t) {
        return s(t) || (r(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
      });
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(2);

    e.exports = function (e, t, n) {
      return r.forEach(n, function (n) {
        e = n(e, t);
      }), e;
    };
  }, function (e, t) {
    "use strict";

    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  }, function (e, t) {
    "use strict";

    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  }, function (e, t) {
    "use strict";

    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  }, function (e, t) {
    "use strict";

    function n(e) {
      this.message = e;
    }

    n.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }, n.prototype.__CANCEL__ = !0, e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if ("function" != typeof e) throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var n = this;
      e(function (e) {
        n.reason || (n.reason = new o(e), t(n.reason));
      });
    }

    var o = n(23);
    r.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }, r.source = function () {
      var e,
          t = new r(function (t) {
        e = t;
      });
      return {
        token: t,
        cancel: e
      };
    }, e.exports = r;
  }, function (e, t) {
    "use strict";

    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  }]);
});
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * better-normal-scroll v1.0.1
 * (c) 2016-2017 ustbhuangyi
 * Released under the MIT License.
 */
!function (t, i) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : t.BScroll = i();
}(void 0, function () {
  "use strict";

  function t(t) {
    return !1 !== v && ("standard" === v ? t : v + t.charAt(0).toUpperCase() + t.substr(1));
  }

  function i(t, i, e, s) {
    t.addEventListener(i, e, {
      passive: !1,
      capture: !!s
    });
  }

  function e(t, i, e, s) {
    t.removeEventListener(i, e, {
      passive: !1,
      capture: !!s
    });
  }

  function s(t) {
    for (var i = 0, e = 0; t;) {
      i -= t.offsetLeft, e -= t.offsetTop, t = t.offsetParent;
    }

    return {
      left: i,
      top: e
    };
  }

  function o(t) {
    if (t instanceof window.SVGElement) {
      var i = t.getBoundingClientRect();
      return {
        top: i.top,
        left: i.left,
        width: i.width,
        height: i.height
      };
    }

    return {
      top: t.offsetTop,
      left: t.offsetLeft,
      width: t.offsetWidth,
      height: t.offsetHeight
    };
  }

  function n(t, i) {
    for (var e in i) {
      if (i[e].test(t[e])) return !0;
    }

    return !1;
  }

  function r(t, i) {
    var e = document.createEvent("Event");
    e.initEvent(i, !0, !0), e.pageX = t.pageX, e.pageY = t.pageY, t.target.dispatchEvent(e);
  }

  function h(t) {
    var i = t.target;

    if (!/(SELECT|INPUT|TEXTAREA)/i.test(i.tagName)) {
      var e = document.createEvent(window.MouseEvent ? "MouseEvents" : "Event");
      e.initEvent("click", !0, !0), e._constructed = !0, i.dispatchEvent(e);
    }
  }

  function a(t, i) {
    i.firstChild ? l(t, i.firstChild) : i.appendChild(t);
  }

  function l(t, i) {
    i.parentNode.insertBefore(t, i);
  }

  function p(t, i, e, s, o, n) {
    var r = t - i,
        h = Math.abs(r) / e,
        a = n.deceleration,
        l = n.itemHeight,
        p = n.swipeBounceTime,
        c = n.wheel,
        u = n.swipeTime,
        d = c ? 4 : 15,
        m = t + h / a * (r < 0 ? -1 : 1);
    return c && l && (m = Math.round(m / l) * l), m < s ? (m = o ? s - o / d * h : s, u = p) : m > 0 && (m = o ? o / d * h : 0, u = p), {
      destination: Math.round(m),
      duration: u
    };
  }

  function c() {
    return window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date();
  }

  function u(t) {
    console.error("[BScroll warn]: " + t);
  }

  function d(t, i) {
    this.wrapper = "string" == typeof t ? document.querySelector(t) : t, this.wrapper || u("can not resolve the wrapper dom"), this.scroller = this.wrapper.children[0], this.scroller || u("the wrapper need at least one child element to be scroller"), this.scrollerStyle = this.scroller.style, this._init(t, i);
  }

  var m = function () {
    function t(t, i) {
      var e = [],
          s = !0,
          o = !1,
          n = void 0;

      try {
        for (var r, h = t[Symbol.iterator](); !(s = (r = h.next()).done) && (e.push(r.value), !i || e.length !== i); s = !0) {
          ;
        }
      } catch (t) {
        o = !0, n = t;
      } finally {
        try {
          !s && h["return"] && h["return"]();
        } finally {
          if (o) throw n;
        }
      }

      return e;
    }

    return function (i, e) {
      if (Array.isArray(i)) return i;
      if (Symbol.iterator in Object(i)) return t(i, e);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(),
      g = function g(t) {
    if (Array.isArray(t)) {
      for (var i = 0, e = Array(t.length); i < t.length; i++) {
        e[i] = t[i];
      }

      return e;
    }

    return Array.from(t);
  },
      f = document.createElement("div").style,
      v = function () {
    var t = {
      webkit: "webkitTransform",
      Moz: "MozTransform",
      O: "OTransform",
      ms: "msTransform",
      standard: "transform"
    };

    for (var i in t) {
      if (void 0 !== f[t[i]]) return i;
    }

    return !1;
  }(),
      y = t("transform"),
      w = t("perspective") in f,
      T = "ontouchstart" in window,
      x = !1 !== y,
      b = t("transition") in f,
      S = {
    transform: y,
    transitionTimingFunction: t("transitionTimingFunction"),
    transitionDuration: t("transitionDuration"),
    transitionDelay: t("transitionDelay"),
    transformOrigin: t("transformOrigin"),
    transitionEnd: t("transitionEnd")
  },
      X = 1,
      Y = {
    touchstart: X,
    touchmove: X,
    touchend: X,
    mousedown: 2,
    mousemove: 2,
    mouseup: 2
  },
      M = {
    startX: 0,
    startY: 0,
    scrollX: !1,
    scrollY: !0,
    freeScroll: !1,
    directionLockThreshold: 5,
    eventPassthrough: "",
    bounce: !0,
    bounceTime: 700,
    momentum: !0,
    momentumLimitTime: 300,
    momentumLimitDistance: 15,
    swipeTime: 2500,
    swipeBounceTime: 500,
    deceleration: .001,
    flickLimitTime: 200,
    flickLimitDistance: 100,
    resizePolling: 60,
    probeType: 0,
    preventDefault: !0,
    preventDefaultException: {
      tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
    },
    HWCompositing: !0,
    useTransition: !0,
    useTransform: !0,
    bindToWrapper: !1,
    disableMouse: !1,
    disableTouch: !1,
    wheel: !1,
    snap: !1
  },
      E = {
    swipe: {
      style: "cubic-bezier(0.23, 1, 0.32, 1)",
      fn: function fn(t) {
        return 1 + --t * t * t * t * t;
      }
    },
    swipeBounce: {
      style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      fn: function fn(t) {
        return t * (2 - t);
      }
    },
    bounce: {
      style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
      fn: function fn(t) {
        return 1 - --t * t * t * t;
      }
    }
  },
      P = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function (t) {
    return window.setTimeout(t, (t.interval || 100 / 60) / 2);
  },
      _ = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (t) {
    window.clearTimeout(t);
  };

  return function (t) {
    t.prototype._init = function (t, i) {
      this._handleOptions(i), this._events = {}, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._addDOMEvents(), this._initExtFeatures(), this.refresh(), this.options.snap || this.scrollTo(this.options.startX, this.options.startY), this.enable();
    }, t.prototype._handleOptions = function (t) {
      this.options = Object.assign({}, M, t), this.translateZ = this.options.HWCompositing && w ? " translateZ(0)" : "", this.options.useTransition = this.options.useTransition && b, this.options.useTransform = this.options.useTransform && x, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollX = "horizontal" !== this.options.eventPassthrough && this.options.scrollX, this.options.scrollY = "vertical" !== this.options.eventPassthrough && this.options.scrollY, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, !0 === this.options.tap && (this.options.tap = "tap");
    }, t.prototype._addDOMEvents = function () {
      var t = i;

      this._handleEvents(t);
    }, t.prototype._removeDOMEvents = function () {
      var t = e;

      this._handleEvents(t);
    }, t.prototype._handleEvents = function (t) {
      var i = this.options.bindToWrapper ? this.wrapper : window;
      t(window, "orientationchange", this), t(window, "resize", this), this.options.click && t(this.wrapper, "click", this), this.options.disableMouse || (t(this.wrapper, "mousedown", this), t(i, "mousemove", this), t(i, "mousecancel", this), t(i, "mouseup", this)), T && !this.options.disableTouch && (t(this.wrapper, "touchstart", this), t(i, "touchmove", this), t(i, "touchcancel", this), t(i, "touchend", this)), t(this.scroller, S.transitionEnd, this);
    }, t.prototype._initExtFeatures = function () {
      this.options.snap && this._initSnap();
    }, t.prototype.handleEvent = function (t) {
      switch (t.type) {
        case "touchstart":
        case "mousedown":
          this._start(t);

          break;

        case "touchmove":
        case "mousemove":
          this._move(t);

          break;

        case "touchend":
        case "mouseup":
        case "touchcancel":
        case "mousecancel":
          this._end(t);

          break;

        case "orientationchange":
        case "resize":
          this._resize();

          break;

        case "transitionend":
        case "webkitTransitionEnd":
        case "oTransitionEnd":
        case "MSTransitionEnd":
          this._transitionEnd(t);

          break;

        case "click":
          !this.enabled || t._constructed || /(SELECT|INPUT|TEXTAREA)/i.test(t.target.tagName) || (t.preventDefault(), t.stopPropagation());
      }
    }, t.prototype.refresh = function () {
      this.wrapper.offsetHeight, this.wrapperWidth = parseInt(this.wrapper.style.width) || this.wrapper.clientWidth, this.wrapperHeight = parseInt(this.wrapper.style.height) || this.wrapper.clientHeight, this.scrollerWidth = parseInt(this.scroller.style.width) || this.scroller.clientWidth, this.scrollerHeight = parseInt(this.scroller.style.height) || this.scroller.clientHeight;
      var t = this.options.wheel;
      t ? (this.items = this.scroller.children, this.options.itemHeight = this.itemHeight = this.items.length ? this.items[0].clientHeight : 0, void 0 === this.selectedIndex && (this.selectedIndex = t.selectedIndex), this.options.startY = -this.selectedIndex * this.itemHeight, this.maxScrollX = 0, this.maxScrollY = -this.itemHeight * (this.items.length - 1)) : (this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight), this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = s(this.wrapper), this.trigger("refresh"), this.resetPosition();
    }, t.prototype.enable = function () {
      this.enabled = !0;
    }, t.prototype.disable = function () {
      this.enabled = !1;
    };
  }(d), function (t) {
    t.prototype._start = function (t) {
      var i = Y[t.type];

      if ((i === X || 0 === t.button) && !(!this.enabled || this.destroyed || this.initiated && this.initiated !== i)) {
        this.initiated = i, this.options.preventDefault && !n(t.target, this.options.preventDefaultException) && t.preventDefault(), this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = c(), this.options.wheel && (this.target = t.target), this.stop();
        var e = t.touches ? t.touches[0] : t;
        this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = e.pageX, this.pointY = e.pageY, this.trigger("beforeScrollStart");
      }
    }, t.prototype._move = function (t) {
      if (this.enabled && !this.destroyed && Y[t.type] === this.initiated) {
        this.options.preventDefault && t.preventDefault();
        var i = t.touches ? t.touches[0] : t,
            e = i.pageX - this.pointX,
            s = i.pageY - this.pointY;
        this.pointX = i.pageX, this.pointY = i.pageY, this.distX += e, this.distY += s;
        var o = Math.abs(this.distX),
            n = Math.abs(this.distY),
            r = c();

        if (!(r - this.endTime > this.options.momentumLimitTime && n < this.options.momentumLimitDistance && o < this.options.momentumLimitDistance)) {
          if (this.directionLocked || this.options.freeScroll || (o > n + this.options.directionLockThreshold ? this.directionLocked = "h" : n >= o + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" === this.directionLocked) {
            if ("vertical" === this.options.eventPassthrough) t.preventDefault();else if ("horizontal" === this.options.eventPassthrough) return void (this.initiated = !1);
            s = 0;
          } else if ("v" === this.directionLocked) {
            if ("horizontal" === this.options.eventPassthrough) t.preventDefault();else if ("vertical" === this.options.eventPassthrough) return void (this.initiated = !1);
            e = 0;
          }

          e = this.hasHorizontalScroll ? e : 0, s = this.hasVerticalScroll ? s : 0;
          var h = this.x + e,
              a = this.y + s;
          (h > 0 || h < this.maxScrollX) && (h = this.options.bounce ? this.x + e / 3 : h > 0 ? 0 : this.maxScrollX), (a > 0 || a < this.maxScrollY) && (a = this.options.bounce ? this.y + s / 3 : a > 0 ? 0 : this.maxScrollY), this.moved || (this.moved = !0, this.trigger("scrollStart")), this._translate(h, a), r - this.startTime > this.options.momentumLimitTime && (this.startTime = r, this.startX = this.x, this.startY = this.y, 1 === this.options.probeType && this.trigger("scroll", {
            x: this.x,
            y: this.y
          })), this.options.probeType > 1 && this.trigger("scroll", {
            x: this.x,
            y: this.y
          });
          var l = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft,
              p = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
              u = this.pointX - l,
              d = this.pointY - p;
          (u > document.documentElement.clientWidth - this.options.momentumLimitDistance || u < this.options.momentumLimitDistance || d < this.options.momentumLimitDistance || d > document.documentElement.clientHeight - this.options.momentumLimitDistance) && this._end(t);
        }
      }
    }, t.prototype._end = function (t) {
      if (this.enabled && !this.destroyed && Y[t.type] === this.initiated && (this.initiated = !1, this.options.preventDefault && !n(t.target, this.options.preventDefaultException) && t.preventDefault(), this.trigger("touchEnd", {
        x: this.x,
        y: this.y
      }), !this.resetPosition(this.options.bounceTime, E.bounce))) {
        this.isInTransition = !1;
        var i = Math.round(this.x),
            e = Math.round(this.y);

        if (this.moved) {
          this.scrollTo(i, e);
          var o = i - this.absStartX,
              a = e - this.absStartY;
          this.directionX = o > 0 ? -1 : o < 0 ? 1 : 0, this.directionY = a > 0 ? -1 : a < 0 ? 1 : 0, this.endTime = c();
          var l = this.endTime - this.startTime,
              u = Math.abs(i - this.startX),
              d = Math.abs(e - this.startY);
          if (this._events.flick && l < this.options.flickLimitTime && u < this.options.flickLimitDistance && d < this.options.flickLimitDistance) this.trigger("flick");else {
            var m = 0;

            if (this.options.momentum && l < this.options.momentumLimitTime && (d > this.options.momentumLimitDistance || u > this.options.momentumLimitDistance)) {
              var g = this.hasHorizontalScroll ? p(this.x, this.startX, l, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options) : {
                destination: i,
                duration: 0
              },
                  f = this.hasVerticalScroll ? p(this.y, this.startY, l, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options) : {
                destination: e,
                duration: 0
              };
              i = g.destination, e = f.destination, m = Math.max(g.duration, f.duration), this.isInTransition = 1;
            } else this.options.wheel && (e = Math.round(e / this.itemHeight) * this.itemHeight, m = this.options.wheel.adjustTime || 400);

            var v = E.swipe;

            if (this.options.snap) {
              var y = this._nearestSnap(i, e);

              this.currentPage = y, m = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(i - y.x), 1e3), Math.min(Math.abs(e - y.y), 1e3)), 300), i = y.x, e = y.y, this.directionX = 0, this.directionY = 0, v = E.bounce;
            }

            if (i !== this.x || e !== this.y) return (i > 0 || i < this.maxScrollX || e > 0 || e < this.maxScrollY) && (v = E.swipeBounce), void this.scrollTo(i, e, m, v);
            this.options.wheel && (this.selectedIndex = 0 | Math.abs(this.y / this.itemHeight)), this.trigger("scrollEnd", {
              x: this.x,
              y: this.y
            });
          }
        } else {
          if (this.options.wheel) {
            if (this.target && "wheel-scroll" === this.target.className) {
              var w = Math.abs(Math.round(e / this.itemHeight)),
                  T = Math.round((this.pointY + s(this.target).top - this.itemHeight / 2) / this.itemHeight);
              this.target = this.items[w + T];
            }

            this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, !0, !0, E.swipe);
          } else this.options.tap && r(t, this.options.tap), this.options.click && h(t);

          this.trigger("scrollCancel");
        }
      }
    }, t.prototype._resize = function () {
      var t = this;
      this.enabled && (clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function () {
        t.refresh();
      }, this.options.resizePolling));
    }, t.prototype._startProbe = function () {
      function t() {
        var e = i.getComputedPosition();
        i.trigger("scroll", e), i.isInTransition && (i.probeTimer = P(t));
      }

      _(this.probeTimer), this.probeTimer = P(t);
      var i = this;
    }, t.prototype._transitionTime = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      if (this.scrollerStyle[S.transitionDuration] = t + "ms", this.options.wheel) for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[S.transitionDuration] = t + "ms";
      }
    }, t.prototype._transitionTimingFunction = function (t) {
      if (this.scrollerStyle[S.transitionTimingFunction] = t, this.options.wheel) for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[S.transitionTimingFunction] = t;
      }
    }, t.prototype._transitionEnd = function (t) {
      t.target === this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime, E.bounce) || (this.isInTransition = !1, this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      })));
    }, t.prototype._translate = function (t, i) {
      if (this.options.useTransform ? this.scrollerStyle[S.transform] = "translate(" + t + "px," + i + "px)" + this.translateZ : (t = Math.round(t), i = Math.round(i), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = i + "px"), this.options.wheel) for (var e = 0; e < this.items.length; e++) {
        var s = this.options.wheel.rotate * (i / this.itemHeight + e);
        this.items[e].style[S.transform] = "rotateX(" + s + "deg)";
      }
      this.x = t, this.y = i;
    }, t.prototype._animate = function (t, i, e, s) {
      function o() {
        var p = c();
        if (p >= l) return n.isAnimating = !1, n._translate(t, i), void (n.resetPosition(n.options.bounceTime) || n.trigger("scrollEnd", {
          x: n.x,
          y: n.y
        }));
        var u = s(p = (p - a) / e),
            d = (t - r) * u + r,
            m = (i - h) * u + h;
        n._translate(d, m), n.isAnimating && P(o), 3 === n.probeType && n.trigger("scroll", {
          x: this.x,
          y: this.y
        });
      }

      var n = this,
          r = this.x,
          h = this.y,
          a = c(),
          l = a + e;
      this.isAnimating = !0, o();
    }, t.prototype.scrollBy = function (t, i) {
      var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.bounce;
      t = this.x + t, i = this.y + i, this.scrollTo(t, i, e, s);
    }, t.prototype.scrollTo = function (t, i) {
      var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.bounce;
      this.isInTransition = this.options.useTransition && e > 0 && (t !== this.x || i !== this.y), !e || this.options.useTransition ? (this._transitionTimingFunction(s.style), this._transitionTime(e), this._translate(t, i), e && 3 === this.options.probeType && this._startProbe(), this.options.wheel && (i > 0 ? this.selectedIndex = 0 : i < this.maxScrollY ? this.selectedIndex = this.items.length - 1 : this.selectedIndex = 0 | Math.abs(i / this.itemHeight))) : this._animate(t, i, e, s.fn);
    }, t.prototype.scrollToElement = function (t, i, e, o, n) {
      if (t && (t = t.nodeType ? t : this.scroller.querySelector(t), !this.options.wheel || "wheel-item" === t.className)) {
        var r = s(t);
        r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, !0 === e && (e = Math.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), !0 === o && (o = Math.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= e || 0, r.top -= o || 0, r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top, this.options.wheel && (r.top = Math.round(r.top / this.itemHeight) * this.itemHeight), this.scrollTo(r.left, r.top, i, n);
      }
    }, t.prototype.resetPosition = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.bounce,
          e = this.x;
      !this.hasHorizontalScroll || e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX);
      var s = this.y;
      return !this.hasVerticalScroll || s > 0 ? s = 0 : s < this.maxScrollY && (s = this.maxScrollY), (e !== this.x || s !== this.y) && (this.scrollTo(e, s, t, i), !0);
    }, t.prototype.getComputedPosition = function () {
      var t = window.getComputedStyle(this.scroller, null),
          i = void 0,
          e = void 0;
      return this.options.useTransform ? (i = +((t = t[S.transform].split(")")[0].split(", "))[12] || t[4]), e = +(t[13] || t[5])) : (i = +t.left.replace(/[^-\d.]/g, ""), e = +t.top.replace(/[^-\d.]/g, "")), {
        x: i,
        y: e
      };
    }, t.prototype.stop = function () {
      if (this.options.useTransition && this.isInTransition) {
        this.isInTransition = !1;
        var t = this.getComputedPosition();
        this._translate(t.x, t.y), this.options.wheel ? this.target = this.items[Math.round(-t.y / this.itemHeight)] : this.trigger("scrollEnd", {
          x: this.x,
          y: this.y
        });
      } else !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }));
    }, t.prototype.destroy = function () {
      this._removeDOMEvents(), this.destroyed = !0, this.trigger("destroy");
    };
  }(d), function (t) {
    t.prototype.on = function (t, i) {
      var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this;
      this._events[t] || (this._events[t] = []), this._events[t].push([i, e]);
    }, t.prototype.once = function (t, i) {
      function e() {
        this.off(t, e), o || (o = !0, i.apply(s, arguments));
      }

      var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
          o = !1;
      this.on(t, e);
    }, t.prototype.off = function (t, i) {
      var e = this._events[t];
      if (e) for (var s = e.length; s--;) {
        e[s][0] === i && (e[s][0] = void 0);
      }
    }, t.prototype.trigger = function (t) {
      var i = this._events[t];
      if (i) for (var e = i.length, s = [].concat(g(i)), o = 0; o < e; o++) {
        var n = s[o],
            r = m(n, 2),
            h = r[0],
            a = r[1];
        h && h.apply(a, [].slice.call(arguments, 1));
      }
    };
  }(d), function (t) {
    t.prototype._initSnap = function () {
      var t = this;
      this.currentPage = {};
      var i = this.options.snap;

      if (i.loop) {
        var e = this.scroller.children;
        e.length > 0 && (a(e[e.length - 1].cloneNode(!0), this.scroller), this.scroller.appendChild(e[1].cloneNode(!0)));
      }

      var s = i.el;
      "string" == typeof s && (s = this.scroller.querySelectorAll(s)), this.on("refresh", function () {
        if (t.pages = [], t.wrapperWidth && t.wrapperHeight && t.scrollerWidth && t.scrollerHeight) {
          var e = i.stepX || t.wrapperWidth,
              n = i.stepY || t.wrapperHeight,
              r = 0,
              h = void 0,
              a = void 0,
              l = void 0,
              p = 0,
              c = void 0,
              u = 0,
              d = void 0,
              m = void 0;
          if (s) for (c = s.length, d = -1; p < c; p++) {
            m = o(s[p]), (0 === p || m.left <= o(s[p - 1]).left) && (u = 0, d++), t.pages[u] || (t.pages[u] = []), r = Math.max(-m.left, t.maxScrollX), h = Math.max(-m.top, t.maxScrollY), a = r - Math.round(m.width / 2), l = h - Math.round(m.height / 2), t.pages[u][d] = {
              x: r,
              y: h,
              width: m.width,
              height: m.height,
              cx: a,
              cy: l
            }, r > t.maxScrollX && u++;
          } else for (a = Math.round(e / 2), l = Math.round(n / 2); r > -t.scrollerWidth;) {
            for (t.pages[p] = [], c = 0, h = 0; h > -t.scrollerHeight;) {
              t.pages[p][c] = {
                x: Math.max(r, t.maxScrollX),
                y: Math.max(h, t.maxScrollY),
                width: e,
                height: n,
                cx: r - a,
                cy: h - l
              }, h -= n, c++;
            }

            r -= e, p++;
          }
          var g = i.loop ? 1 : 0;
          t.goToPage(t.currentPage.pageX || g, t.currentPage.pageY || 0, 0);
          var f = i.threshold;
          f % 1 == 0 ? (t.snapThresholdX = f, t.snapThresholdY = f) : (t.snapThresholdX = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width * f), t.snapThresholdY = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height * f));
        }
      }), this.on("scrollEnd", function () {
        i.loop && (0 === t.currentPage.pageX && t.goToPage(t.pages.length - 2, t.currentPage.pageY, 0), t.currentPage.pageX === t.pages.length - 1 && t.goToPage(1, t.currentPage.pageY, 0));
      }), this.on("flick", function () {
        var e = i.speed || Math.max(Math.max(Math.min(Math.abs(t.x - t.startX), 1e3), Math.min(Math.abs(t.y - t.startY), 1e3)), 300);
        t.goToPage(t.currentPage.pageX + t.directionX, t.currentPage.pageY + t.directionY, e);
      });
    }, t.prototype._nearestSnap = function (t, i) {
      if (!this.pages.length) return {
        x: 0,
        y: 0,
        pageX: 0,
        pageY: 0
      };
      var e = 0;
      if (Math.abs(t - this.absStartX) <= this.snapThresholdX && Math.abs(i - this.absStartY) <= this.snapThresholdY) return this.currentPage;
      t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), i > 0 ? i = 0 : i < this.maxScrollY && (i = this.maxScrollY);

      for (var s = this.pages.length; e < s; e++) {
        if (t >= this.pages[e][0].cx) {
          t = this.pages[e][0].x;
          break;
        }
      }

      s = this.pages[e].length;

      for (var o = 0; o < s; o++) {
        if (i >= this.pages[0][o].cy) {
          i = this.pages[0][o].y;
          break;
        }
      }

      return e === this.currentPage.pageX && ((e += this.directionX) < 0 ? e = 0 : e >= this.pages.length && (e = this.pages.length - 1), t = this.pages[e][0].x), o === this.currentPage.pageY && ((o += this.directionY) < 0 ? o = 0 : o >= this.pages[0].length && (o = this.pages[0].length - 1), i = this.pages[0][o].y), {
        x: t,
        y: i,
        pageX: e,
        pageY: o
      };
    }, t.prototype.goToPage = function (t, i, e) {
      var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.bounce,
          o = this.options.snap;
      t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), i >= this.pages[t].length ? i = this.pages[t].length - 1 : i < 0 && (i = 0);
      var n = this.pages[t][i].x,
          r = this.pages[t][i].y;
      e = void 0 === e ? o.speed || Math.max(Math.max(Math.min(Math.abs(n - this.x), 1e3), Math.min(Math.abs(r - this.y), 1e3)), 300) : e, this.currentPage = {
        x: n,
        y: r,
        pageX: t,
        pageY: i
      }, this.scrollTo(n, r, e, s);
    }, t.prototype.next = function (t, i) {
      var e = this.currentPage.pageX,
          s = this.currentPage.pageY;
      ++e >= this.pages.length && this.hasVerticalScroll && (e = 0, s++), this.goToPage(e, s, t, i);
    }, t.prototype.prev = function (t, i) {
      var e = this.currentPage.pageX,
          s = this.currentPage.pageY;
      --e < 0 && this.hasVerticalScroll && (e = 0, s--), this.goToPage(e, s, t, i);
    }, t.prototype.getCurrentPage = function () {
      return this.options.snap && this.currentPage;
    };
  }(d), function (t) {
    t.prototype.wheelTo = function (t) {
      this.options.wheel && (this.y = -t * this.itemHeight, this.scrollTo(0, this.y));
    }, t.prototype.getSelectedIndex = function () {
      return this.options.wheel && this.selectedIndex;
    };
  }(d), d.Version = "1.0.1", d;
});
"use strict";

(function (d, f) {
  // d: window
  // f: window['lib']
  var s = d.document;
  var c = s.documentElement; // html

  var m = s.querySelector('meta[name="viewport"]');
  var n = s.querySelector('meta[name="flexible"]');
  var a = 0;
  var r = 0;
  var b = 0;
  var l;
  var e = f.flexible || (f.flexible = {});

  if (n) {
    var j = n.getAttribute("content");

    if (j) {
      var q = j.match(/initial\-dpr=([\d\.]+)/);
      var h = j.match(/maximum\-dpr=([\d\.]+)/);

      if (q) {
        a = parseFloat(q[1]);
        r = parseFloat((1 / a).toFixed(2));
      }

      if (h) {
        a = parseFloat(h[1]);
        r = parseFloat((1 / a).toFixed(2));
      }
    }
  }

  if (!a && !r) {
    // d:window
    var p = d.navigator.appVersion.match(/android/gi);
    var o = d.navigator.appVersion.match(/iphone/gi);
    var k = d.devicePixelRatio; // 获取设备像素比 = 物理像素 / 设备独立像素

    if (k >= 3 && (!a || a >= 3)) {
      a = 3;
    } else {
      if (k >= 2 && (!a || a >= 2)) {
        a = 2;
      } else {
        a = 1;
      }
    }

    console.log(a); // 3,2,1

    r = 1 / a; // 初始比例  // 0.3333  0.5   1
  } // c:html


  c.setAttribute("data-dpr", a); // 动态添加data-drp显示设备像素比
  // 动态添加meta

  m = s.createElement("meta");
  m.setAttribute("name", "viewport");
  m.setAttribute("content", "width=device-width, initial-scale=" + r + ", maximum-scale=" + r + ", minimum-scale=" + r + ", user-scalable=no"); // <meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no">

  if (c.firstElementChild) {
    c.firstElementChild.appendChild(m);
  } else {
    var g = s.createElement("div");
    g.appendChild(m);
    s.write(g.innerHTML);
  }

  function i() {
    // c:html
    var u = c.getBoundingClientRect().width; // 布局视图的宽 = 设备尺寸 * 像素比

    console.log(u); // iphone  u=>375   a=>2

    if (u / a > 540) {
      u = 540 * a;
    } // 根据设备像素比计算设计尺寸


    var w = u / 10; // 动态设置字体大小

    console.log(w); // w=>37.5

    c.style.fontSize = w + "px";
    e.rem = d.rem = w;
    var v = parseFloat(c.style.fontSize),
        // 37.5
    t = parseFloat(window.getComputedStyle(c).getPropertyValue("font-size"));
    console.log("flexible.refreshRem: fontSize && finalFontSize => ", v, t);

    if (v !== t) {
      c.style.fontSize = v * (v / t) + "px";
      console.log("flexible.refreshRem.fixed: fontSize  => ", c.style.fontSize);
    }
  }

  d.addEventListener("resize", function () {
    clearTimeout(l);
    l = setTimeout(i, 300);
  }, false);
  d.addEventListener("pageshow", function (t) {
    if (t.persisted) {
      clearTimeout(l);
      l = setTimeout(i, 300);
    }
  }, false);

  if (s.readyState === "complete") {
    s.body.style.fontSize = 12 * a + "px";
  } else {
    s.addEventListener("DOMContentLoaded", function (t) {
      s.body.style.fontSize = 12 * a + "px";
    }, false);
  }

  i();
  e.dpr = d.dpr = a;
  e.refreshRem = i;

  e.rem2px = function (u) {
    var t = parseFloat(u) * this.rem;

    if (typeof u === "string" && u.match(/rem$/)) {
      t += "px";
    }

    return t;
  };

  e.px2rem = function (u) {
    var t = parseFloat(u) / this.rem;

    if (typeof u === "string" && u.match(/px$/)) {
      t += "rem";
    }

    return t;
  };
})(window, window["lib"] || (window["lib"] = {}));
"use strict";
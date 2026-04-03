(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) r(c);
  new MutationObserver(c => {
    for (const m of c)
      if (m.type === "childList")
        for (const d of m.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && r(d)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function o(c) {
    const m = {};
    return c.integrity && (m.integrity = c.integrity), c.referrerPolicy && (m.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? m.credentials = "include" : c.crossOrigin === "anonymous" ? m.credentials = "omit" : m.credentials = "same-origin", m
  }

  function r(c) {
    if (c.ep) return;
    c.ep = !0;
    const m = o(c);
    fetch(c.href, m)
  }
})();
var Nu = {
    exports: {}
  },
  rl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I0;

function jv() {
  if (I0) return rl;
  I0 = 1;
  var i = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");

  function o(r, c, m) {
    var d = null;
    if (m !== void 0 && (d = "" + m), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      m = {};
      for (var y in c) y !== "key" && (m[y] = c[y])
    } else m = c;
    return c = m.ref, {
      $$typeof: i,
      type: r,
      key: d,
      ref: c !== void 0 ? c : null,
      props: m
    }
  }
  return rl.Fragment = l, rl.jsx = o, rl.jsxs = o, rl
}
var tm;

function Mv() {
  return tm || (tm = 1, Nu.exports = jv()), Nu.exports
}
var h = Mv(),
  Eu = {
    exports: {}
  },
  it = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var em;

function Nv() {
  if (em) return it;
  em = 1;
  var i = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    m = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    B = Symbol.iterator;

  function C(A) {
    return A === null || typeof A != "object" ? null : (A = B && A[B] || A["@@iterator"], typeof A == "function" ? A : null)
  }
  var _ = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {}
    },
    H = Object.assign,
    X = {};

  function q(A, U, G) {
    this.props = A, this.context = U, this.refs = X, this.updater = G || _
  }
  q.prototype.isReactComponent = {}, q.prototype.setState = function (A, U) {
    if (typeof A != "object" && typeof A != "function" && A != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, A, U, "setState")
  }, q.prototype.forceUpdate = function (A) {
    this.updater.enqueueForceUpdate(this, A, "forceUpdate")
  };

  function Z() {}
  Z.prototype = q.prototype;

  function Y(A, U, G) {
    this.props = A, this.context = U, this.refs = X, this.updater = G || _
  }
  var nt = Y.prototype = new Z;
  nt.constructor = Y, H(nt, q.prototype), nt.isPureReactComponent = !0;
  var W = Array.isArray;

  function tt() {}
  var Q = {
      H: null,
      A: null,
      T: null,
      S: null
    },
    $ = Object.prototype.hasOwnProperty;

  function bt(A, U, G) {
    var k = G.ref;
    return {
      $$typeof: i,
      type: A,
      key: U,
      ref: k !== void 0 ? k : null,
      props: G
    }
  }

  function zt(A, U) {
    return bt(A.type, U, A.props)
  }

  function Qt(A) {
    return typeof A == "object" && A !== null && A.$$typeof === i
  }

  function Jt(A) {
    var U = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + A.replace(/[=:]/g, function (G) {
      return U[G]
    })
  }
  var We = /\/+/g;

  function Me(A, U) {
    return typeof A == "object" && A !== null && A.key != null ? Jt("" + A.key) : U.toString(36)
  }

  function oe(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (typeof A.status == "string" ? A.then(tt, tt) : (A.status = "pending", A.then(function (U) {
          A.status === "pending" && (A.status = "fulfilled", A.value = U)
        }, function (U) {
          A.status === "pending" && (A.status = "rejected", A.reason = U)
        })), A.status) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason
        }
    }
    throw A
  }

  function z(A, U, G, k, lt) {
    var rt = typeof A;
    (rt === "undefined" || rt === "boolean") && (A = null);
    var xt = !1;
    if (A === null) xt = !0;
    else switch (rt) {
      case "bigint":
      case "string":
      case "number":
        xt = !0;
        break;
      case "object":
        switch (A.$$typeof) {
          case i:
          case l:
            xt = !0;
            break;
          case x:
            return xt = A._init, z(xt(A._payload), U, G, k, lt)
        }
    }
    if (xt) return lt = lt(A), xt = k === "" ? "." + Me(A, 0) : k, W(lt) ? (G = "", xt != null && (G = xt.replace(We, "$&/") + "/"), z(lt, U, G, "", function (pi) {
      return pi
    })) : lt != null && (Qt(lt) && (lt = zt(lt, G + (lt.key == null || A && A.key === lt.key ? "" : ("" + lt.key).replace(We, "$&/") + "/") + xt)), U.push(lt)), 1;
    xt = 0;
    var ie = k === "" ? "." : k + ":";
    if (W(A))
      for (var _t = 0; _t < A.length; _t++) k = A[_t], rt = ie + Me(k, _t), xt += z(k, U, G, rt, lt);
    else if (_t = C(A), typeof _t == "function")
      for (A = _t.call(A), _t = 0; !(k = A.next()).done;) k = k.value, rt = ie + Me(k, _t++), xt += z(k, U, G, rt, lt);
    else if (rt === "object") {
      if (typeof A.then == "function") return z(oe(A), U, G, k, lt);
      throw U = String(A), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.")
    }
    return xt
  }

  function L(A, U, G) {
    if (A == null) return A;
    var k = [],
      lt = 0;
    return z(A, k, "", "", function (rt) {
      return U.call(G, rt, lt++)
    }), k
  }

  function J(A) {
    if (A._status === -1) {
      var U = A._result;
      U = U(), U.then(function (G) {
        (A._status === 0 || A._status === -1) && (A._status = 1, A._result = G)
      }, function (G) {
        (A._status === 0 || A._status === -1) && (A._status = 2, A._result = G)
      }), A._status === -1 && (A._status = 0, A._result = U)
    }
    if (A._status === 1) return A._result.default;
    throw A._result
  }
  var ft = typeof reportError == "function" ? reportError : function (A) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var U = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof A == "object" && A !== null && typeof A.message == "string" ? String(A.message) : String(A),
          error: A
        });
        if (!window.dispatchEvent(U)) return
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", A);
        return
      }
      console.error(A)
    },
    pt = {
      map: L,
      forEach: function (A, U, G) {
        L(A, function () {
          U.apply(this, arguments)
        }, G)
      },
      count: function (A) {
        var U = 0;
        return L(A, function () {
          U++
        }), U
      },
      toArray: function (A) {
        return L(A, function (U) {
          return U
        }) || []
      },
      only: function (A) {
        if (!Qt(A)) throw Error("React.Children.only expected to receive a single React element child.");
        return A
      }
    };
  return it.Activity = b, it.Children = pt, it.Component = q, it.Fragment = o, it.Profiler = c, it.PureComponent = Y, it.StrictMode = r, it.Suspense = g, it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, it.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function (A) {
      return Q.H.useMemoCache(A)
    }
  }, it.cache = function (A) {
    return function () {
      return A.apply(null, arguments)
    }
  }, it.cacheSignal = function () {
    return null
  }, it.cloneElement = function (A, U, G) {
    if (A == null) throw Error("The argument must be a React element, but you passed " + A + ".");
    var k = H({}, A.props),
      lt = A.key;
    if (U != null)
      for (rt in U.key !== void 0 && (lt = "" + U.key), U) !$.call(U, rt) || rt === "key" || rt === "__self" || rt === "__source" || rt === "ref" && U.ref === void 0 || (k[rt] = U[rt]);
    var rt = arguments.length - 2;
    if (rt === 1) k.children = G;
    else if (1 < rt) {
      for (var xt = Array(rt), ie = 0; ie < rt; ie++) xt[ie] = arguments[ie + 2];
      k.children = xt
    }
    return bt(A.type, lt, k)
  }, it.createContext = function (A) {
    return A = {
      $$typeof: d,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, A.Provider = A, A.Consumer = {
      $$typeof: m,
      _context: A
    }, A
  }, it.createElement = function (A, U, G) {
    var k, lt = {},
      rt = null;
    if (U != null)
      for (k in U.key !== void 0 && (rt = "" + U.key), U) $.call(U, k) && k !== "key" && k !== "__self" && k !== "__source" && (lt[k] = U[k]);
    var xt = arguments.length - 2;
    if (xt === 1) lt.children = G;
    else if (1 < xt) {
      for (var ie = Array(xt), _t = 0; _t < xt; _t++) ie[_t] = arguments[_t + 2];
      lt.children = ie
    }
    if (A && A.defaultProps)
      for (k in xt = A.defaultProps, xt) lt[k] === void 0 && (lt[k] = xt[k]);
    return bt(A, rt, lt)
  }, it.createRef = function () {
    return {
      current: null
    }
  }, it.forwardRef = function (A) {
    return {
      $$typeof: y,
      render: A
    }
  }, it.isValidElement = Qt, it.lazy = function (A) {
    return {
      $$typeof: x,
      _payload: {
        _status: -1,
        _result: A
      },
      _init: J
    }
  }, it.memo = function (A, U) {
    return {
      $$typeof: p,
      type: A,
      compare: U === void 0 ? null : U
    }
  }, it.startTransition = function (A) {
    var U = Q.T,
      G = {};
    Q.T = G;
    try {
      var k = A(),
        lt = Q.S;
      lt !== null && lt(G, k), typeof k == "object" && k !== null && typeof k.then == "function" && k.then(tt, ft)
    } catch (rt) {
      ft(rt)
    } finally {
      U !== null && G.types !== null && (U.types = G.types), Q.T = U
    }
  }, it.unstable_useCacheRefresh = function () {
    return Q.H.useCacheRefresh()
  }, it.use = function (A) {
    return Q.H.use(A)
  }, it.useActionState = function (A, U, G) {
    return Q.H.useActionState(A, U, G)
  }, it.useCallback = function (A, U) {
    return Q.H.useCallback(A, U)
  }, it.useContext = function (A) {
    return Q.H.useContext(A)
  }, it.useDebugValue = function () {}, it.useDeferredValue = function (A, U) {
    return Q.H.useDeferredValue(A, U)
  }, it.useEffect = function (A, U) {
    return Q.H.useEffect(A, U)
  }, it.useEffectEvent = function (A) {
    return Q.H.useEffectEvent(A)
  }, it.useId = function () {
    return Q.H.useId()
  }, it.useImperativeHandle = function (A, U, G) {
    return Q.H.useImperativeHandle(A, U, G)
  }, it.useInsertionEffect = function (A, U) {
    return Q.H.useInsertionEffect(A, U)
  }, it.useLayoutEffect = function (A, U) {
    return Q.H.useLayoutEffect(A, U)
  }, it.useMemo = function (A, U) {
    return Q.H.useMemo(A, U)
  }, it.useOptimistic = function (A, U) {
    return Q.H.useOptimistic(A, U)
  }, it.useReducer = function (A, U, G) {
    return Q.H.useReducer(A, U, G)
  }, it.useRef = function (A) {
    return Q.H.useRef(A)
  }, it.useState = function (A) {
    return Q.H.useState(A)
  }, it.useSyncExternalStore = function (A, U, G) {
    return Q.H.useSyncExternalStore(A, U, G)
  }, it.useTransition = function () {
    return Q.H.useTransition()
  }, it.version = "19.2.0", it
}
var nm;

function yc() {
  return nm || (nm = 1, Eu.exports = Nv()), Eu.exports
}
var F = yc(),
  Du = {
    exports: {}
  },
  ul = {},
  Cu = {
    exports: {}
  },
  wu = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var am;

function Ev() {
  return am || (am = 1, (function (i) {
    function l(z, L) {
      var J = z.length;
      z.push(L);
      t: for (; 0 < J;) {
        var ft = J - 1 >>> 1,
          pt = z[ft];
        if (0 < c(pt, L)) z[ft] = L, z[J] = pt, J = ft;
        else break t
      }
    }

    function o(z) {
      return z.length === 0 ? null : z[0]
    }

    function r(z) {
      if (z.length === 0) return null;
      var L = z[0],
        J = z.pop();
      if (J !== L) {
        z[0] = J;
        t: for (var ft = 0, pt = z.length, A = pt >>> 1; ft < A;) {
          var U = 2 * (ft + 1) - 1,
            G = z[U],
            k = U + 1,
            lt = z[k];
          if (0 > c(G, J)) k < pt && 0 > c(lt, G) ? (z[ft] = lt, z[k] = J, ft = k) : (z[ft] = G, z[U] = J, ft = U);
          else if (k < pt && 0 > c(lt, J)) z[ft] = lt, z[k] = J, ft = k;
          else break t
        }
      }
      return L
    }

    function c(z, L) {
      var J = z.sortIndex - L.sortIndex;
      return J !== 0 ? J : z.id - L.id
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      i.unstable_now = function () {
        return m.now()
      }
    } else {
      var d = Date,
        y = d.now();
      i.unstable_now = function () {
        return d.now() - y
      }
    }
    var g = [],
      p = [],
      x = 1,
      b = null,
      B = 3,
      C = !1,
      _ = !1,
      H = !1,
      X = !1,
      q = typeof setTimeout == "function" ? setTimeout : null,
      Z = typeof clearTimeout == "function" ? clearTimeout : null,
      Y = typeof setImmediate < "u" ? setImmediate : null;

    function nt(z) {
      for (var L = o(p); L !== null;) {
        if (L.callback === null) r(p);
        else if (L.startTime <= z) r(p), L.sortIndex = L.expirationTime, l(g, L);
        else break;
        L = o(p)
      }
    }

    function W(z) {
      if (H = !1, nt(z), !_)
        if (o(g) !== null) _ = !0, tt || (tt = !0, Jt());
        else {
          var L = o(p);
          L !== null && oe(W, L.startTime - z)
        }
    }
    var tt = !1,
      Q = -1,
      $ = 5,
      bt = -1;

    function zt() {
      return X ? !0 : !(i.unstable_now() - bt < $)
    }

    function Qt() {
      if (X = !1, tt) {
        var z = i.unstable_now();
        bt = z;
        var L = !0;
        try {
          t: {
            _ = !1,
            H && (H = !1, Z(Q), Q = -1),
            C = !0;
            var J = B;
            try {
              e: {
                for (nt(z), b = o(g); b !== null && !(b.expirationTime > z && zt());) {
                  var ft = b.callback;
                  if (typeof ft == "function") {
                    b.callback = null, B = b.priorityLevel;
                    var pt = ft(b.expirationTime <= z);
                    if (z = i.unstable_now(), typeof pt == "function") {
                      b.callback = pt, nt(z), L = !0;
                      break e
                    }
                    b === o(g) && r(g), nt(z)
                  } else r(g);
                  b = o(g)
                }
                if (b !== null) L = !0;
                else {
                  var A = o(p);
                  A !== null && oe(W, A.startTime - z), L = !1
                }
              }
              break t
            }
            finally {
              b = null, B = J, C = !1
            }
            L = void 0
          }
        }
        finally {
          L ? Jt() : tt = !1
        }
      }
    }
    var Jt;
    if (typeof Y == "function") Jt = function () {
      Y(Qt)
    };
    else if (typeof MessageChannel < "u") {
      var We = new MessageChannel,
        Me = We.port2;
      We.port1.onmessage = Qt, Jt = function () {
        Me.postMessage(null)
      }
    } else Jt = function () {
      q(Qt, 0)
    };

    function oe(z, L) {
      Q = q(function () {
        z(i.unstable_now())
      }, L)
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function (z) {
      z.callback = null
    }, i.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < z ? Math.floor(1e3 / z) : 5
    }, i.unstable_getCurrentPriorityLevel = function () {
      return B
    }, i.unstable_next = function (z) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = B
      }
      var J = B;
      B = L;
      try {
        return z()
      } finally {
        B = J
      }
    }, i.unstable_requestPaint = function () {
      X = !0
    }, i.unstable_runWithPriority = function (z, L) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3
      }
      var J = B;
      B = z;
      try {
        return L()
      } finally {
        B = J
      }
    }, i.unstable_scheduleCallback = function (z, L, J) {
      var ft = i.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? ft + J : ft) : J = ft, z) {
        case 1:
          var pt = -1;
          break;
        case 2:
          pt = 250;
          break;
        case 5:
          pt = 1073741823;
          break;
        case 4:
          pt = 1e4;
          break;
        default:
          pt = 5e3
      }
      return pt = J + pt, z = {
        id: x++,
        callback: L,
        priorityLevel: z,
        startTime: J,
        expirationTime: pt,
        sortIndex: -1
      }, J > ft ? (z.sortIndex = J, l(p, z), o(g) === null && z === o(p) && (H ? (Z(Q), Q = -1) : H = !0, oe(W, J - ft))) : (z.sortIndex = pt, l(g, z), _ || C || (_ = !0, tt || (tt = !0, Jt()))), z
    }, i.unstable_shouldYield = zt, i.unstable_wrapCallback = function (z) {
      var L = B;
      return function () {
        var J = B;
        B = L;
        try {
          return z.apply(this, arguments)
        } finally {
          B = J
        }
      }
    }
  })(wu)), wu
}
var im;

function Dv() {
  return im || (im = 1, Cu.exports = Ev()), Cu.exports
}
var zu = {
    exports: {}
  },
  ne = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lm;

function Cv() {
  if (lm) return ne;
  lm = 1;
  var i = yc();

  function l(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++) p += "&args[]=" + encodeURIComponent(arguments[x])
    }
    return "Minified React error #" + g + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function o() {}
  var r = {
      d: {
        f: o,
        r: function () {
          throw Error(l(522))
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o
      },
      p: 0,
      findDOMNode: null
    },
    c = Symbol.for("react.portal");

  function m(g, p, x) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: g,
      containerInfo: p,
      implementation: x
    }
  }
  var d = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

  function y(g, p) {
    if (g === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : ""
  }
  return ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, ne.createPortal = function (g, p) {
    var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(l(299));
    return m(g, p, null, x)
  }, ne.flushSync = function (g) {
    var p = d.T,
      x = r.p;
    try {
      if (d.T = null, r.p = 2, g) return g()
    } finally {
      d.T = p, r.p = x, r.d.f()
    }
  }, ne.preconnect = function (g, p) {
    typeof g == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, r.d.C(g, p))
  }, ne.prefetchDNS = function (g) {
    typeof g == "string" && r.d.D(g)
  }, ne.preinit = function (g, p) {
    if (typeof g == "string" && p && typeof p.as == "string") {
      var x = p.as,
        b = y(x, p.crossOrigin),
        B = typeof p.integrity == "string" ? p.integrity : void 0,
        C = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      x === "style" ? r.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
        crossOrigin: b,
        integrity: B,
        fetchPriority: C
      }) : x === "script" && r.d.X(g, {
        crossOrigin: b,
        integrity: B,
        fetchPriority: C,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      })
    }
  }, ne.preinitModule = function (g, p) {
    if (typeof g == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var x = y(p.as, p.crossOrigin);
          r.d.M(g, {
            crossOrigin: x,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          })
        }
      } else p == null && r.d.M(g)
  }, ne.preload = function (g, p) {
    if (typeof g == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var x = p.as,
        b = y(x, p.crossOrigin);
      r.d.L(g, x, {
        crossOrigin: b,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      })
    }
  }, ne.preloadModule = function (g, p) {
    if (typeof g == "string")
      if (p) {
        var x = y(p.as, p.crossOrigin);
        r.d.m(g, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: x,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        })
      } else r.d.m(g)
  }, ne.requestFormReset = function (g) {
    r.d.r(g)
  }, ne.unstable_batchedUpdates = function (g, p) {
    return g(p)
  }, ne.useFormState = function (g, p, x) {
    return d.H.useFormState(g, p, x)
  }, ne.useFormStatus = function () {
    return d.H.useHostTransitionStatus()
  }, ne.version = "19.2.0", ne
}
var sm;

function wv() {
  if (sm) return zu.exports;
  sm = 1;

  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
    } catch (l) {
      console.error(l)
    }
  }
  return i(), zu.exports = Cv(), zu.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var om;

function zv() {
  if (om) return ul;
  om = 1;
  var i = Dv(),
    l = yc(),
    o = wv();

  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n])
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function c(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
  }

  function m(t) {
    var e = t,
      n = t;
    if (t.alternate)
      for (; e.return;) e = e.return;
    else {
      t = e;
      do e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return; while (t)
    }
    return e.tag === 3 ? n : null
  }

  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
    }
    return null
  }

  function y(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
    }
    return null
  }

  function g(t) {
    if (m(t) !== t) throw Error(r(188))
  }

  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (e = m(t), e === null) throw Error(r(188));
      return e !== t ? null : t
    }
    for (var n = t, a = e;;) {
      var s = n.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (a = s.return, a !== null) {
          n = a;
          continue
        }
        break
      }
      if (s.child === u.child) {
        for (u = s.child; u;) {
          if (u === n) return g(s), t;
          if (u === a) return g(s), e;
          u = u.sibling
        }
        throw Error(r(188))
      }
      if (n.return !== a.return) n = s, a = u;
      else {
        for (var f = !1, v = s.child; v;) {
          if (v === n) {
            f = !0, n = s, a = u;
            break
          }
          if (v === a) {
            f = !0, a = s, n = u;
            break
          }
          v = v.sibling
        }
        if (!f) {
          for (v = u.child; v;) {
            if (v === n) {
              f = !0, n = u, a = s;
              break
            }
            if (v === a) {
              f = !0, a = u, n = s;
              break
            }
            v = v.sibling
          }
          if (!f) throw Error(r(189))
        }
      }
      if (n.alternate !== a) throw Error(r(190))
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e
  }

  function x(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null;) {
      if (e = x(t), e !== null) return e;
      t = t.sibling
    }
    return null
  }
  var b = Object.assign,
    B = Symbol.for("react.element"),
    C = Symbol.for("react.transitional.element"),
    _ = Symbol.for("react.portal"),
    H = Symbol.for("react.fragment"),
    X = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    Z = Symbol.for("react.consumer"),
    Y = Symbol.for("react.context"),
    nt = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    tt = Symbol.for("react.suspense_list"),
    Q = Symbol.for("react.memo"),
    $ = Symbol.for("react.lazy"),
    bt = Symbol.for("react.activity"),
    zt = Symbol.for("react.memo_cache_sentinel"),
    Qt = Symbol.iterator;

  function Jt(t) {
    return t === null || typeof t != "object" ? null : (t = Qt && t[Qt] || t["@@iterator"], typeof t == "function" ? t : null)
  }
  var We = Symbol.for("react.client.reference");

  function Me(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === We ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case H:
        return "Fragment";
      case q:
        return "Profiler";
      case X:
        return "StrictMode";
      case W:
        return "Suspense";
      case tt:
        return "SuspenseList";
      case bt:
        return "Activity"
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case _:
        return "Portal";
      case Y:
        return t.displayName || "Context";
      case Z:
        return (t._context.displayName || "Context") + ".Consumer";
      case nt:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case Q:
        return e = t.displayName || null, e !== null ? e : Me(t.type) || "Memo";
      case $:
        e = t._payload, t = t._init;
        try {
          return Me(t(e))
        } catch {}
    }
    return null
  }
  var oe = Array.isArray,
    z = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    L = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    J = {
      pending: !1,
      data: null,
      method: null,
      action: null
    },
    ft = [],
    pt = -1;

  function A(t) {
    return {
      current: t
    }
  }

  function U(t) {
    0 > pt || (t.current = ft[pt], ft[pt] = null, pt--)
  }

  function G(t, e) {
    pt++, ft[pt] = t.current, t.current = e
  }
  var k = A(null),
    lt = A(null),
    rt = A(null),
    xt = A(null);

  function ie(t, e) {
    switch (G(rt, e), G(lt, t), G(k, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? T0(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI) e = T0(e), t = B0(e, t);
        else switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0
        }
    }
    U(k), G(k, t)
  }

  function _t() {
    U(k), U(lt), U(rt)
  }

  function pi(t) {
    t.memoizedState !== null && G(xt, t);
    var e = k.current,
      n = B0(e, t.type);
    e !== n && (G(lt, t), G(k, n))
  }

  function Nl(t) {
    lt.current === t && (U(k), U(lt)), xt.current === t && (U(xt), il._currentValue = J)
  }
  var ro, Wc;

  function kn(t) {
    if (ro === void 0) try {
      throw Error()
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      ro = e && e[1] || "", Wc = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
    }
    return `
` + ro + t + Wc
  }
  var uo = !1;

  function co(t, e) {
    if (!t || uo) return "";
    uo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var V = function () {
                throw Error()
              };
              if (Object.defineProperty(V.prototype, "props", {
                  set: function () {
                    throw Error()
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(V, [])
                } catch (D) {
                  var E = D
                }
                Reflect.construct(t, [], V)
              } else {
                try {
                  V.call()
                } catch (D) {
                  E = D
                }
                t.call(V.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (D) {
                E = D
              }(V = t()) && typeof V.catch == "function" && V.catch(function () {})
            }
          } catch (D) {
            if (D && E && typeof D.stack == "string") return [D.stack, E.stack]
          }
          return [null, null]
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      s && s.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var u = a.DetermineComponentFrameRoot(),
        f = u[0],
        v = u[1];
      if (f && v) {
        var S = f.split(`
`),
          N = v.split(`
`);
        for (s = a = 0; a < S.length && !S[a].includes("DetermineComponentFrameRoot");) a++;
        for (; s < N.length && !N[s].includes("DetermineComponentFrameRoot");) s++;
        if (a === S.length || s === N.length)
          for (a = S.length - 1, s = N.length - 1; 1 <= a && 0 <= s && S[a] !== N[s];) s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (S[a] !== N[s]) {
            if (a !== 1 || s !== 1)
              do
                if (a--, s--, 0 > s || S[a] !== N[s]) {
                  var w = `
` + S[a].replace(" at new ", " at ");
                  return t.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", t.displayName)), w
                } while (1 <= a && 0 <= s);
            break
          }
      }
    } finally {
      uo = !1, Error.prepareStackTrace = n
    }
    return (n = t ? t.displayName || t.name : "") ? kn(n) : ""
  }

  function ny(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return kn(t.type);
      case 16:
        return kn("Lazy");
      case 13:
        return t.child !== e && e !== null ? kn("Suspense Fallback") : kn("Suspense");
      case 19:
        return kn("SuspenseList");
      case 0:
      case 15:
        return co(t.type, !1);
      case 11:
        return co(t.type.render, !1);
      case 1:
        return co(t.type, !0);
      case 31:
        return kn("Activity");
      default:
        return ""
    }
  }

  function $c(t) {
    try {
      var e = "",
        n = null;
      do e += ny(t, n), n = t, t = t.return; while (t);
      return e
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack
    }
  }
  var fo = Object.prototype.hasOwnProperty,
    ho = i.unstable_scheduleCallback,
    mo = i.unstable_cancelCallback,
    ay = i.unstable_shouldYield,
    iy = i.unstable_requestPaint,
    ye = i.unstable_now,
    ly = i.unstable_getCurrentPriorityLevel,
    Ic = i.unstable_ImmediatePriority,
    tf = i.unstable_UserBlockingPriority,
    El = i.unstable_NormalPriority,
    sy = i.unstable_LowPriority,
    ef = i.unstable_IdlePriority,
    oy = i.log,
    ry = i.unstable_setDisableYieldValue,
    yi = null,
    ge = null;

  function xn(t) {
    if (typeof oy == "function" && ry(t), ge && typeof ge.setStrictMode == "function") try {
      ge.setStrictMode(yi, t)
    } catch {}
  }
  var ve = Math.clz32 ? Math.clz32 : fy,
    uy = Math.log,
    cy = Math.LN2;

  function fy(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (uy(t) / cy | 0) | 0
  }
  var Dl = 256,
    Cl = 262144,
    wl = 4194304;

  function Jn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t
    }
  }

  function zl(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var s = 0,
      u = t.suspendedLanes,
      f = t.pingedLanes;
    t = t.warmLanes;
    var v = a & 134217727;
    return v !== 0 ? (a = v & ~u, a !== 0 ? s = Jn(a) : (f &= v, f !== 0 ? s = Jn(f) : n || (n = v & ~t, n !== 0 && (s = Jn(n))))) : (v = a & ~u, v !== 0 ? s = Jn(v) : f !== 0 ? s = Jn(f) : n || (n = a & ~t, n !== 0 && (s = Jn(n)))), s === 0 ? 0 : e !== 0 && e !== s && (e & u) === 0 && (u = s & -s, n = e & -e, u >= n || u === 32 && (n & 4194048) !== 0) ? e : s
  }

  function gi(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
  }

  function dy(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1
    }
  }

  function nf() {
    var t = wl;
    return wl <<= 1, (wl & 62914560) === 0 && (wl = 4194304), t
  }

  function po(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e
  }

  function vi(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
  }

  function hy(t, e, n, a, s, u) {
    var f = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var v = t.entanglements,
      S = t.expirationTimes,
      N = t.hiddenUpdates;
    for (n = f & ~n; 0 < n;) {
      var w = 31 - ve(n),
        V = 1 << w;
      v[w] = 0, S[w] = -1;
      var E = N[w];
      if (E !== null)
        for (N[w] = null, w = 0; w < E.length; w++) {
          var D = E[w];
          D !== null && (D.lane &= -536870913)
        }
      n &= ~V
    }
    a !== 0 && af(t, a, 0), u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(f & ~e))
  }

  function af(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - ve(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930
  }

  function lf(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n;) {
      var a = 31 - ve(n),
        s = 1 << a;
      s & e | t[a] & e && (t[a] |= e), n &= ~s
    }
  }

  function sf(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : yo(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
  }

  function yo(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0
    }
    return t
  }

  function go(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
  }

  function of () {
    var t = L.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Z0(t.type))
  }

  function rf(t, e) {
    var n = L.p;
    try {
      return L.p = t, e()
    } finally {
      L.p = n
    }
  }
  var bn = Math.random().toString(36).slice(2),
    Pt = "__reactFiber$" + bn,
    re = "__reactProps$" + bn,
    xa = "__reactContainer$" + bn,
    vo = "__reactEvents$" + bn,
    my = "__reactListeners$" + bn,
    py = "__reactHandles$" + bn,
    uf = "__reactResources$" + bn,
    xi = "__reactMarker$" + bn;

  function xo(t) {
    delete t[Pt], delete t[re], delete t[vo], delete t[my], delete t[py]
  }

  function ba(t) {
    var e = t[Pt];
    if (e) return e;
    for (var n = t.parentNode; n;) {
      if (e = n[xa] || n[Pt]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = C0(t); t !== null;) {
            if (n = t[Pt]) return n;
            t = C0(t)
          }
        return e
      }
      t = n, n = t.parentNode
    }
    return null
  }

  function Sa(t) {
    if (t = t[Pt] || t[xa]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t
    }
    return null
  }

  function bi(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33))
  }

  function Ta(t) {
    var e = t[uf];
    return e || (e = t[uf] = {
      hoistableStyles: new Map,
      hoistableScripts: new Map
    }), e
  }

  function Kt(t) {
    t[xi] = !0
  }
  var cf = new Set,
    ff = {};

  function Pn(t, e) {
    Ba(t, e), Ba(t + "Capture", e)
  }

  function Ba(t, e) {
    for (ff[t] = e, t = 0; t < e.length; t++) cf.add(e[t])
  }
  var yy = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
    df = {},
    hf = {};

  function gy(t) {
    return fo.call(hf, t) ? !0 : fo.call(df, t) ? !1 : yy.test(t) ? hf[t] = !0 : (df[t] = !0, !1)
  }

  function Ol(t, e, n) {
    if (gy(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return
            }
        }
        t.setAttribute(e, "" + n)
      }
  }

  function Rl(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return
      }
      t.setAttribute(e, "" + n)
    }
  }

  function $e(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return
      }
      t.setAttributeNS(e, n, "" + a)
    }
  }

  function Ne(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return ""
    }
  }

  function mf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
  }

  function vy(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var s = a.get,
        u = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return s.call(this)
        },
        set: function (f) {
          n = "" + f, u.call(this, f)
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function () {
          return n
        },
        setValue: function (f) {
          n = "" + f
        },
        stopTracking: function () {
          t._valueTracker = null, delete t[e]
        }
      }
    }
  }

  function bo(t) {
    if (!t._valueTracker) {
      var e = mf(t) ? "checked" : "value";
      t._valueTracker = vy(t, e, "" + t[e])
    }
  }

  function pf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      a = "";
    return t && (a = mf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1
  }

  function Vl(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body
    } catch {
      return t.body
    }
  }
  var xy = /[\n"\\]/g;

  function Ee(t) {
    return t.replace(xy, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " "
    })
  }

  function So(t, e, n, a, s, u, f, v) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ne(e)) : t.value !== "" + Ne(e) && (t.value = "" + Ne(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? To(t, f, Ne(e)) : n != null ? To(t, f, Ne(n)) : a != null && t.removeAttribute("value"), s == null && u != null && (t.defaultChecked = !!u), s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + Ne(v) : t.removeAttribute("name")
  }

  function yf(t, e, n, a, s, u, f, v) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        bo(t);
        return
      }
      n = n != null ? "" + Ne(n) : "", e = e != null ? "" + Ne(e) : n, v || e === t.value || (t.value = e), t.defaultValue = e
    }
    a = a ?? s, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = v ? t.checked : !!a, t.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), bo(t)
  }

  function To(t, e, n) {
    e === "number" && Vl(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n)
  }

  function Aa(t, e, n, a) {
    if (t = t.options, e) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++) s = e.hasOwnProperty("$" + t[n].value), t[n].selected !== s && (t[n].selected = s), s && a && (t[n].defaultSelected = !0)
    } else {
      for (n = "" + Ne(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          t[s].selected = !0, a && (t[s].defaultSelected = !0);
          return
        }
        e !== null || t[s].disabled || (e = t[s])
      }
      e !== null && (e.selected = !0)
    }
  }

  function gf(t, e, n) {
    if (e != null && (e = "" + Ne(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return
    }
    t.defaultValue = n != null ? "" + Ne(n) : ""
  }

  function vf(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(r(92));
        if (oe(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0]
        }
        n = a
      }
      n == null && (n = ""), e = n
    }
    n = Ne(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), bo(t)
  }

  function ja(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return
      }
    }
    t.textContent = e
  }
  var by = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

  function xf(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || by.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px"
  }

  function bf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (t = t.style, n != null) {
      for (var a in n) !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var s in e) a = e[s], e.hasOwnProperty(s) && n[s] !== a && xf(t, s, a)
    } else
      for (var u in e) e.hasOwnProperty(u) && xf(t, u, e[u])
  }

  function Bo(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0
    }
  }
  var Sy = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]),
    Ty = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

  function _l(t) {
    return Ty.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
  }

  function Ie() {}
  var Ao = null;

  function jo(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
  }
  var Ma = null,
    Na = null;

  function Sf(t) {
    var e = Sa(t);
    if (e && (t = e.stateNode)) {
      var n = t[re] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (So(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode;) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + Ee("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var s = a[re] || null;
                if (!s) throw Error(r(90));
                So(a, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name)
              }
            }
            for (e = 0; e < n.length; e++) a = n[e], a.form === t.form && pf(a)
          }
          break t;
        case "textarea":
          gf(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Aa(t, !!n.multiple, e, !1)
      }
    }
  }
  var Mo = !1;

  function Tf(t, e, n) {
    if (Mo) return t(e, n);
    Mo = !0;
    try {
      var a = t(e);
      return a
    } finally {
      if (Mo = !1, (Ma !== null || Na !== null) && (Bs(), Ma && (e = Ma, t = Na, Na = Ma = null, Sf(e), t)))
        for (e = 0; e < t.length; e++) Sf(t[e])
    }
  }

  function Si(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[re] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(r(231, e, typeof n));
    return n
  }
  var tn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    No = !1;
  if (tn) try {
    var Ti = {};
    Object.defineProperty(Ti, "passive", {
      get: function () {
        No = !0
      }
    }), window.addEventListener("test", Ti, Ti), window.removeEventListener("test", Ti, Ti)
  } catch {
    No = !1
  }
  var Sn = null,
    Eo = null,
    Ul = null;

  function Bf() {
    if (Ul) return Ul;
    var t, e = Eo,
      n = e.length,
      a, s = "value" in Sn ? Sn.value : Sn.textContent,
      u = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var f = n - t;
    for (a = 1; a <= f && e[n - a] === s[u - a]; a++);
    return Ul = s.slice(t, 1 < a ? 1 - a : void 0)
  }

  function Ll(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
  }

  function Hl() {
    return !0
  }

  function Af() {
    return !1
  }

  function ue(t) {
    function e(n, a, s, u, f) {
      this._reactName = n, this._targetInst = s, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var v in t) t.hasOwnProperty(v) && (n = t[v], this[v] = n ? n(u) : u[v]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Hl : Af, this.isPropagationStopped = Af, this
    }
    return b(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Hl)
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Hl)
      },
      persist: function () {},
      isPersistent: Hl
    }), e
  }
  var Wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    Fl = ue(Wn),
    Bi = b({}, Wn, {
      view: 0,
      detail: 0
    }),
    By = ue(Bi),
    Do, Co, Ai, ql = b({}, Bi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: zo,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
      },
      movementX: function (t) {
        return "movementX" in t ? t.movementX : (t !== Ai && (Ai && t.type === "mousemove" ? (Do = t.screenX - Ai.screenX, Co = t.screenY - Ai.screenY) : Co = Do = 0, Ai = t), Do)
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Co
      }
    }),
    jf = ue(ql),
    Ay = b({}, ql, {
      dataTransfer: 0
    }),
    jy = ue(Ay),
    My = b({}, Bi, {
      relatedTarget: 0
    }),
    wo = ue(My),
    Ny = b({}, Wn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    Ey = ue(Ny),
    Dy = b({}, Wn, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData
      }
    }),
    Cy = ue(Dy),
    wy = b({}, Wn, {
      data: 0
    }),
    Mf = ue(wy),
    zy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    },
    Oy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    },
    Ry = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };

  function Vy(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Ry[t]) ? !!e[t] : !1
  }

  function zo() {
    return Vy
  }
  var _y = b({}, Bi, {
      key: function (t) {
        if (t.key) {
          var e = zy[t.key] || t.key;
          if (e !== "Unidentified") return e
        }
        return t.type === "keypress" ? (t = Ll(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Oy[t.keyCode] || "Unidentified" : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: zo,
      charCode: function (t) {
        return t.type === "keypress" ? Ll(t) : 0
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
      },
      which: function (t) {
        return t.type === "keypress" ? Ll(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
      }
    }),
    Uy = ue(_y),
    Ly = b({}, ql, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }),
    Nf = ue(Ly),
    Hy = b({}, Bi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zo
    }),
    Fy = ue(Hy),
    qy = b({}, Wn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    Yy = ue(qy),
    Gy = b({}, ql, {
      deltaX: function (t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
      },
      deltaY: function (t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    Xy = ue(Gy),
    Qy = b({}, Wn, {
      newState: 0,
      oldState: 0
    }),
    Zy = ue(Qy),
    Ky = [9, 13, 27, 32],
    Oo = tn && "CompositionEvent" in window,
    ji = null;
  tn && "documentMode" in document && (ji = document.documentMode);
  var ky = tn && "TextEvent" in window && !ji,
    Ef = tn && (!Oo || ji && 8 < ji && 11 >= ji),
    Df = " ",
    Cf = !1;

  function wf(t, e) {
    switch (t) {
      case "keyup":
        return Ky.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1
    }
  }

  function zf(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
  }
  var Ea = !1;

  function Jy(t, e) {
    switch (t) {
      case "compositionend":
        return zf(e);
      case "keypress":
        return e.which !== 32 ? null : (Cf = !0, Df);
      case "textInput":
        return t = e.data, t === Df && Cf ? null : t;
      default:
        return null
    }
  }

  function Py(t, e) {
    if (Ea) return t === "compositionend" || !Oo && wf(t, e) ? (t = Bf(), Ul = Eo = Sn = null, Ea = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which)
        }
        return null;
      case "compositionend":
        return Ef && e.locale !== "ko" ? null : e.data;
      default:
        return null
    }
  }
  var Wy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };

  function Of(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Wy[t.type] : e === "textarea"
  }

  function Rf(t, e, n, a) {
    Ma ? Na ? Na.push(a) : Na = [a] : Ma = a, e = Cs(e, "onChange"), 0 < e.length && (n = new Fl("onChange", "change", null, n, a), t.push({
      event: n,
      listeners: e
    }))
  }
  var Mi = null,
    Ni = null;

  function $y(t) {
    y0(t, 0)
  }

  function Yl(t) {
    var e = bi(t);
    if (pf(e)) return t
  }

  function Vf(t, e) {
    if (t === "change") return e
  }
  var _f = !1;
  if (tn) {
    var Ro;
    if (tn) {
      var Vo = "oninput" in document;
      if (!Vo) {
        var Uf = document.createElement("div");
        Uf.setAttribute("oninput", "return;"), Vo = typeof Uf.oninput == "function"
      }
      Ro = Vo
    } else Ro = !1;
    _f = Ro && (!document.documentMode || 9 < document.documentMode)
  }

  function Lf() {
    Mi && (Mi.detachEvent("onpropertychange", Hf), Ni = Mi = null)
  }

  function Hf(t) {
    if (t.propertyName === "value" && Yl(Ni)) {
      var e = [];
      Rf(e, Ni, t, jo(t)), Tf($y, e)
    }
  }

  function Iy(t, e, n) {
    t === "focusin" ? (Lf(), Mi = e, Ni = n, Mi.attachEvent("onpropertychange", Hf)) : t === "focusout" && Lf()
  }

  function tg(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Yl(Ni)
  }

  function eg(t, e) {
    if (t === "click") return Yl(e)
  }

  function ng(t, e) {
    if (t === "input" || t === "change") return Yl(e)
  }

  function ag(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
  }
  var xe = typeof Object.is == "function" ? Object.is : ag;

  function Ei(t, e) {
    if (xe(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var n = Object.keys(t),
      a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var s = n[a];
      if (!fo.call(e, s) || !xe(t[s], e[s])) return !1
    }
    return !0
  }

  function Ff(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t
  }

  function qf(t, e) {
    var n = Ff(t);
    t = 0;
    for (var a; n;) {
      if (n.nodeType === 3) {
        if (a = t + n.textContent.length, t <= e && a >= e) return {
          node: n,
          offset: e - t
        };
        t = a
      }
      t: {
        for (; n;) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t
          }
          n = n.parentNode
        }
        n = void 0
      }
      n = Ff(n)
    }
  }

  function Yf(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Yf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
  }

  function Gf(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Vl(t.document); e instanceof t.HTMLIFrameElement;) {
      try {
        var n = typeof e.contentWindow.location.href == "string"
      } catch {
        n = !1
      }
      if (n) t = e.contentWindow;
      else break;
      e = Vl(t.document)
    }
    return e
  }

  function _o(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
  }
  var ig = tn && "documentMode" in document && 11 >= document.documentMode,
    Da = null,
    Uo = null,
    Di = null,
    Lo = !1;

  function Xf(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Lo || Da == null || Da !== Vl(a) || (a = Da, "selectionStart" in a && _o(a) ? a = {
      start: a.selectionStart,
      end: a.selectionEnd
    } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Di && Ei(Di, a) || (Di = a, a = Cs(Uo, "onSelect"), 0 < a.length && (e = new Fl("onSelect", "select", null, e, n), t.push({
      event: e,
      listeners: a
    }), e.target = Da)))
  }

  function $n(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
  }
  var Ca = {
      animationend: $n("Animation", "AnimationEnd"),
      animationiteration: $n("Animation", "AnimationIteration"),
      animationstart: $n("Animation", "AnimationStart"),
      transitionrun: $n("Transition", "TransitionRun"),
      transitionstart: $n("Transition", "TransitionStart"),
      transitioncancel: $n("Transition", "TransitionCancel"),
      transitionend: $n("Transition", "TransitionEnd")
    },
    Ho = {},
    Qf = {};
  tn && (Qf = document.createElement("div").style, "AnimationEvent" in window || (delete Ca.animationend.animation, delete Ca.animationiteration.animation, delete Ca.animationstart.animation), "TransitionEvent" in window || delete Ca.transitionend.transition);

  function In(t) {
    if (Ho[t]) return Ho[t];
    if (!Ca[t]) return t;
    var e = Ca[t],
      n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Qf) return Ho[t] = e[n];
    return t
  }
  var Zf = In("animationend"),
    Kf = In("animationiteration"),
    kf = In("animationstart"),
    lg = In("transitionrun"),
    sg = In("transitionstart"),
    og = In("transitioncancel"),
    Jf = In("transitionend"),
    Pf = new Map,
    Fo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Fo.push("scrollEnd");

  function qe(t, e) {
    Pf.set(t, e), Pn(e, [t])
  }
  var Gl = typeof reportError == "function" ? reportError : function (t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
          error: t
        });
        if (!window.dispatchEvent(e)) return
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return
      }
      console.error(t)
    },
    De = [],
    wa = 0,
    qo = 0;

  function Xl() {
    for (var t = wa, e = qo = wa = 0; e < t;) {
      var n = De[e];
      De[e++] = null;
      var a = De[e];
      De[e++] = null;
      var s = De[e];
      De[e++] = null;
      var u = De[e];
      if (De[e++] = null, a !== null && s !== null) {
        var f = a.pending;
        f === null ? s.next = s : (s.next = f.next, f.next = s), a.pending = s
      }
      u !== 0 && Wf(n, s, u)
    }
  }

  function Ql(t, e, n, a) {
    De[wa++] = t, De[wa++] = e, De[wa++] = n, De[wa++] = a, qo |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a)
  }

  function Yo(t, e, n, a) {
    return Ql(t, e, n, a), Zl(t)
  }

  function ta(t, e) {
    return Ql(t, null, null, e), Zl(t)
  }

  function Wf(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var s = !1, u = t.return; u !== null;) u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (s = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, s && e !== null && (s = 31 - ve(n), t = u.hiddenUpdates, a = t[s], a === null ? t[s] = [e] : a.push(e), e.lane = n | 536870912), u) : null
  }

  function Zl(t) {
    if (50 < Wi) throw Wi = 0, Wr = null, Error(r(185));
    for (var e = t.return; e !== null;) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null
  }
  var za = {};

  function rg(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
  }

  function be(t, e, n, a) {
    return new rg(t, e, n, a)
  }

  function Go(t) {
    return t = t.prototype, !(!t || !t.isReactComponent)
  }

  function en(t, e) {
    var n = t.alternate;
    return n === null ? (n = be(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n
  }

  function $f(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t
  }

  function Kl(t, e, n, a, s, u) {
    var f = 0;
    if (a = t, typeof t == "function") Go(t) && (f = 1);
    else if (typeof t == "string") f = hv(t, n, k.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case bt:
        return t = be(31, n, e, s), t.elementType = bt, t.lanes = u, t;
      case H:
        return ea(n.children, s, u, e);
      case X:
        f = 8, s |= 24;
        break;
      case q:
        return t = be(12, n, e, s | 2), t.elementType = q, t.lanes = u, t;
      case W:
        return t = be(13, n, e, s), t.elementType = W, t.lanes = u, t;
      case tt:
        return t = be(19, n, e, s), t.elementType = tt, t.lanes = u, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case Y:
            f = 10;
            break t;
          case Z:
            f = 9;
            break t;
          case nt:
            f = 11;
            break t;
          case Q:
            f = 14;
            break t;
          case $:
            f = 16, a = null;
            break t
        }
        f = 29, n = Error(r(130, t === null ? "null" : typeof t, "")), a = null
    }
    return e = be(f, n, e, s), e.elementType = t, e.type = a, e.lanes = u, e
  }

  function ea(t, e, n, a) {
    return t = be(7, t, a, e), t.lanes = n, t
  }

  function Xo(t, e, n) {
    return t = be(6, t, null, e), t.lanes = n, t
  }

  function If(t) {
    var e = be(18, null, null, 0);
    return e.stateNode = t, e
  }

  function Qo(t, e, n) {
    return e = be(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e
  }
  var td = new WeakMap;

  function Ce(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = td.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: $c(e)
      }, td.set(t, e), e)
    }
    return {
      value: t,
      source: e,
      stack: $c(e)
    }
  }
  var Oa = [],
    Ra = 0,
    kl = null,
    Ci = 0,
    we = [],
    ze = 0,
    Tn = null,
    Qe = 1,
    Ze = "";

  function nn(t, e) {
    Oa[Ra++] = Ci, Oa[Ra++] = kl, kl = t, Ci = e
  }

  function ed(t, e, n) {
    we[ze++] = Qe, we[ze++] = Ze, we[ze++] = Tn, Tn = t;
    var a = Qe;
    t = Ze;
    var s = 32 - ve(a) - 1;
    a &= ~(1 << s), n += 1;
    var u = 32 - ve(e) + s;
    if (30 < u) {
      var f = s - s % 5;
      u = (a & (1 << f) - 1).toString(32), a >>= f, s -= f, Qe = 1 << 32 - ve(e) + s | n << s | a, Ze = u + t
    } else Qe = 1 << u | n << s | a, Ze = t
  }

  function Zo(t) {
    t.return !== null && (nn(t, 1), ed(t, 1, 0))
  }

  function Ko(t) {
    for (; t === kl;) kl = Oa[--Ra], Oa[Ra] = null, Ci = Oa[--Ra], Oa[Ra] = null;
    for (; t === Tn;) Tn = we[--ze], we[ze] = null, Ze = we[--ze], we[ze] = null, Qe = we[--ze], we[ze] = null
  }

  function nd(t, e) {
    we[ze++] = Qe, we[ze++] = Ze, we[ze++] = Tn, Qe = e.id, Ze = e.overflow, Tn = t
  }
  var Wt = null,
    Nt = null,
    mt = !1,
    Bn = null,
    Oe = !1,
    ko = Error(r(519));

  function An(t) {
    var e = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw wi(Ce(e, t)), ko
  }

  function ad(t) {
    var e = t.stateNode,
      n = t.type,
      a = t.memoizedProps;
    switch (e[Pt] = t, e[re] = a, n) {
      case "dialog":
        ct("cancel", e), ct("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ct("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ii.length; n++) ct(Ii[n], e);
        break;
      case "source":
        ct("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ct("error", e), ct("load", e);
        break;
      case "details":
        ct("toggle", e);
        break;
      case "input":
        ct("invalid", e), yf(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
        break;
      case "select":
        ct("invalid", e);
        break;
      case "textarea":
        ct("invalid", e), vf(e, a.value, a.defaultValue, a.children)
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || b0(e.textContent, n) ? (a.popover != null && (ct("beforetoggle", e), ct("toggle", e)), a.onScroll != null && ct("scroll", e), a.onScrollEnd != null && ct("scrollend", e), a.onClick != null && (e.onclick = Ie), e = !0) : e = !1, e || An(t, !0)
  }

  function id(t) {
    for (Wt = t.return; Wt;) switch (Wt.tag) {
      case 5:
      case 31:
      case 13:
        Oe = !1;
        return;
      case 27:
      case 3:
        Oe = !0;
        return;
      default:
        Wt = Wt.return
    }
  }

  function Va(t) {
    if (t !== Wt) return !1;
    if (!mt) return id(t), mt = !0, !1;
    var e = t.tag,
      n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || du(t.type, t.memoizedProps)), n = !n), n && Nt && An(t), id(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Nt = D0(t)
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Nt = D0(t)
    } else e === 27 ? (e = Nt, Ln(t.type) ? (t = gu, gu = null, Nt = t) : Nt = e) : Nt = Wt ? Ve(t.stateNode.nextSibling) : null;
    return !0
  }

  function na() {
    Nt = Wt = null, mt = !1
  }

  function Jo() {
    var t = Bn;
    return t !== null && (he === null ? he = t : he.push.apply(he, t), Bn = null), t
  }

  function wi(t) {
    Bn === null ? Bn = [t] : Bn.push(t)
  }
  var Po = A(null),
    aa = null,
    an = null;

  function jn(t, e, n) {
    G(Po, e._currentValue), e._currentValue = n
  }

  function ln(t) {
    t._currentValue = Po.current, U(Po)
  }

  function Wo(t, e, n) {
    for (; t !== null;) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return
    }
  }

  function $o(t, e, n, a) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null;) {
      var u = s.dependencies;
      if (u !== null) {
        var f = s.child;
        u = u.firstContext;
        t: for (; u !== null;) {
          var v = u;
          u = s;
          for (var S = 0; S < e.length; S++)
            if (v.context === e[S]) {
              u.lanes |= n, v = u.alternate, v !== null && (v.lanes |= n), Wo(u.return, n, t), a || (f = null);
              break t
            } u = v.next
        }
      } else if (s.tag === 18) {
        if (f = s.return, f === null) throw Error(r(341));
        f.lanes |= n, u = f.alternate, u !== null && (u.lanes |= n), Wo(f, n, t), f = null
      } else f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null;) {
          if (f === t) {
            f = null;
            break
          }
          if (s = f.sibling, s !== null) {
            s.return = f.return, f = s;
            break
          }
          f = f.return
        }
      s = f
    }
  }

  function _a(t, e, n, a) {
    t = null;
    for (var s = e, u = !1; s !== null;) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(r(387));
        if (f = f.memoizedProps, f !== null) {
          var v = s.type;
          xe(s.pendingProps.value, f.value) || (t !== null ? t.push(v) : t = [v])
        }
      } else if (s === xt.current) {
        if (f = s.alternate, f === null) throw Error(r(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(il) : t = [il])
      }
      s = s.return
    }
    t !== null && $o(e, t, n, a), e.flags |= 262144
  }

  function Jl(t) {
    for (t = t.firstContext; t !== null;) {
      if (!xe(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next
    }
    return !1
  }

  function ia(t) {
    aa = t, an = null, t = t.dependencies, t !== null && (t.firstContext = null)
  }

  function $t(t) {
    return ld(aa, t)
  }

  function Pl(t, e) {
    return aa === null && ia(t), ld(t, e)
  }

  function ld(t, e) {
    var n = e._currentValue;
    if (e = {
        context: e,
        memoizedValue: n,
        next: null
      }, an === null) {
      if (t === null) throw Error(r(308));
      an = e, t.dependencies = {
        lanes: 0,
        firstContext: e
      }, t.flags |= 524288
    } else an = an.next = e;
    return n
  }
  var ug = typeof AbortController < "u" ? AbortController : function () {
      var t = [],
        e = this.signal = {
          aborted: !1,
          addEventListener: function (n, a) {
            t.push(a)
          }
        };
      this.abort = function () {
        e.aborted = !0, t.forEach(function (n) {
          return n()
        })
      }
    },
    cg = i.unstable_scheduleCallback,
    fg = i.unstable_NormalPriority,
    Ft = {
      $$typeof: Y,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };

  function Io() {
    return {
      controller: new ug,
      data: new Map,
      refCount: 0
    }
  }

  function zi(t) {
    t.refCount--, t.refCount === 0 && cg(fg, function () {
      t.controller.abort()
    })
  }
  var Oi = null,
    tr = 0,
    Ua = 0,
    La = null;

  function dg(t, e) {
    if (Oi === null) {
      var n = Oi = [];
      tr = 0, Ua = au(), La = {
        status: "pending",
        value: void 0,
        then: function (a) {
          n.push(a)
        }
      }
    }
    return tr++, e.then(sd, sd), e
  }

  function sd() {
    if (--tr === 0 && Oi !== null) {
      La !== null && (La.status = "fulfilled");
      var t = Oi;
      Oi = null, Ua = 0, La = null;
      for (var e = 0; e < t.length; e++)(0, t[e])()
    }
  }

  function hg(t, e) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s)
        }
      };
    return t.then(function () {
      a.status = "fulfilled", a.value = e;
      for (var s = 0; s < n.length; s++)(0, n[s])(e)
    }, function (s) {
      for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)(0, n[s])(void 0)
    }), a
  }
  var od = z.S;
  z.S = function (t, e) {
    Xh = ye(), typeof e == "object" && e !== null && typeof e.then == "function" && dg(t, e), od !== null && od(t, e)
  };
  var la = A(null);

  function er() {
    var t = la.current;
    return t !== null ? t : Mt.pooledCache
  }

  function Wl(t, e) {
    e === null ? G(la, la.current) : G(la, e.pool)
  }

  function rd() {
    var t = er();
    return t === null ? null : {
      parent: Ft._currentValue,
      pool: t
    }
  }
  var Ha = Error(r(460)),
    nr = Error(r(474)),
    $l = Error(r(542)),
    Il = {
      then: function () {}
    };

  function ud(t) {
    return t = t.status, t === "fulfilled" || t === "rejected"
  }

  function cd(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Ie, Ie), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, dd(t), t;
      default:
        if (typeof e.status == "string") e.then(Ie, Ie);
        else {
          if (t = Mt, t !== null && 100 < t.shellSuspendCounter) throw Error(r(482));
          t = e, t.status = "pending", t.then(function (a) {
            if (e.status === "pending") {
              var s = e;
              s.status = "fulfilled", s.value = a
            }
          }, function (a) {
            if (e.status === "pending") {
              var s = e;
              s.status = "rejected", s.reason = a
            }
          })
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, dd(t), t
        }
        throw oa = e, Ha
    }
  }

  function sa(t) {
    try {
      var e = t._init;
      return e(t._payload)
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (oa = n, Ha) : n
    }
  }
  var oa = null;

  function fd() {
    if (oa === null) throw Error(r(459));
    var t = oa;
    return oa = null, t
  }

  function dd(t) {
    if (t === Ha || t === $l) throw Error(r(483))
  }
  var Fa = null,
    Ri = 0;

  function ts(t) {
    var e = Ri;
    return Ri += 1, Fa === null && (Fa = []), cd(Fa, t, e)
  }

  function Vi(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null
  }

  function es(t, e) {
    throw e.$$typeof === B ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
  }

  function hd(t) {
    function e(j, T) {
      if (t) {
        var M = j.deletions;
        M === null ? (j.deletions = [T], j.flags |= 16) : M.push(T)
      }
    }

    function n(j, T) {
      if (!t) return null;
      for (; T !== null;) e(j, T), T = T.sibling;
      return null
    }

    function a(j) {
      for (var T = new Map; j !== null;) j.key !== null ? T.set(j.key, j) : T.set(j.index, j), j = j.sibling;
      return T
    }

    function s(j, T) {
      return j = en(j, T), j.index = 0, j.sibling = null, j
    }

    function u(j, T, M) {
      return j.index = M, t ? (M = j.alternate, M !== null ? (M = M.index, M < T ? (j.flags |= 67108866, T) : M) : (j.flags |= 67108866, T)) : (j.flags |= 1048576, T)
    }

    function f(j) {
      return t && j.alternate === null && (j.flags |= 67108866), j
    }

    function v(j, T, M, O) {
      return T === null || T.tag !== 6 ? (T = Xo(M, j.mode, O), T.return = j, T) : (T = s(T, M), T.return = j, T)
    }

    function S(j, T, M, O) {
      var I = M.type;
      return I === H ? w(j, T, M.props.children, O, M.key) : T !== null && (T.elementType === I || typeof I == "object" && I !== null && I.$$typeof === $ && sa(I) === T.type) ? (T = s(T, M.props), Vi(T, M), T.return = j, T) : (T = Kl(M.type, M.key, M.props, null, j.mode, O), Vi(T, M), T.return = j, T)
    }

    function N(j, T, M, O) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== M.containerInfo || T.stateNode.implementation !== M.implementation ? (T = Qo(M, j.mode, O), T.return = j, T) : (T = s(T, M.children || []), T.return = j, T)
    }

    function w(j, T, M, O, I) {
      return T === null || T.tag !== 7 ? (T = ea(M, j.mode, O, I), T.return = j, T) : (T = s(T, M), T.return = j, T)
    }

    function V(j, T, M) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return T = Xo("" + T, j.mode, M), T.return = j, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case C:
            return M = Kl(T.type, T.key, T.props, null, j.mode, M), Vi(M, T), M.return = j, M;
          case _:
            return T = Qo(T, j.mode, M), T.return = j, T;
          case $:
            return T = sa(T), V(j, T, M)
        }
        if (oe(T) || Jt(T)) return T = ea(T, j.mode, M, null), T.return = j, T;
        if (typeof T.then == "function") return V(j, ts(T), M);
        if (T.$$typeof === Y) return V(j, Pl(j, T), M);
        es(j, T)
      }
      return null
    }

    function E(j, T, M, O) {
      var I = T !== null ? T.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return I !== null ? null : v(j, T, "" + M, O);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case C:
            return M.key === I ? S(j, T, M, O) : null;
          case _:
            return M.key === I ? N(j, T, M, O) : null;
          case $:
            return M = sa(M), E(j, T, M, O)
        }
        if (oe(M) || Jt(M)) return I !== null ? null : w(j, T, M, O, null);
        if (typeof M.then == "function") return E(j, T, ts(M), O);
        if (M.$$typeof === Y) return E(j, T, Pl(j, M), O);
        es(j, M)
      }
      return null
    }

    function D(j, T, M, O, I) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint") return j = j.get(M) || null, v(T, j, "" + O, I);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case C:
            return j = j.get(O.key === null ? M : O.key) || null, S(T, j, O, I);
          case _:
            return j = j.get(O.key === null ? M : O.key) || null, N(T, j, O, I);
          case $:
            return O = sa(O), D(j, T, M, O, I)
        }
        if (oe(O) || Jt(O)) return j = j.get(M) || null, w(T, j, O, I, null);
        if (typeof O.then == "function") return D(j, T, M, ts(O), I);
        if (O.$$typeof === Y) return D(j, T, M, Pl(T, O), I);
        es(T, O)
      }
      return null
    }

    function K(j, T, M, O) {
      for (var I = null, yt = null, P = T, ot = T = 0, ht = null; P !== null && ot < M.length; ot++) {
        P.index > ot ? (ht = P, P = null) : ht = P.sibling;
        var gt = E(j, P, M[ot], O);
        if (gt === null) {
          P === null && (P = ht);
          break
        }
        t && P && gt.alternate === null && e(j, P), T = u(gt, T, ot), yt === null ? I = gt : yt.sibling = gt, yt = gt, P = ht
      }
      if (ot === M.length) return n(j, P), mt && nn(j, ot), I;
      if (P === null) {
        for (; ot < M.length; ot++) P = V(j, M[ot], O), P !== null && (T = u(P, T, ot), yt === null ? I = P : yt.sibling = P, yt = P);
        return mt && nn(j, ot), I
      }
      for (P = a(P); ot < M.length; ot++) ht = D(P, j, ot, M[ot], O), ht !== null && (t && ht.alternate !== null && P.delete(ht.key === null ? ot : ht.key), T = u(ht, T, ot), yt === null ? I = ht : yt.sibling = ht, yt = ht);
      return t && P.forEach(function (Gn) {
        return e(j, Gn)
      }), mt && nn(j, ot), I
    }

    function et(j, T, M, O) {
      if (M == null) throw Error(r(151));
      for (var I = null, yt = null, P = T, ot = T = 0, ht = null, gt = M.next(); P !== null && !gt.done; ot++, gt = M.next()) {
        P.index > ot ? (ht = P, P = null) : ht = P.sibling;
        var Gn = E(j, P, gt.value, O);
        if (Gn === null) {
          P === null && (P = ht);
          break
        }
        t && P && Gn.alternate === null && e(j, P), T = u(Gn, T, ot), yt === null ? I = Gn : yt.sibling = Gn, yt = Gn, P = ht
      }
      if (gt.done) return n(j, P), mt && nn(j, ot), I;
      if (P === null) {
        for (; !gt.done; ot++, gt = M.next()) gt = V(j, gt.value, O), gt !== null && (T = u(gt, T, ot), yt === null ? I = gt : yt.sibling = gt, yt = gt);
        return mt && nn(j, ot), I
      }
      for (P = a(P); !gt.done; ot++, gt = M.next()) gt = D(P, j, ot, gt.value, O), gt !== null && (t && gt.alternate !== null && P.delete(gt.key === null ? ot : gt.key), T = u(gt, T, ot), yt === null ? I = gt : yt.sibling = gt, yt = gt);
      return t && P.forEach(function (Av) {
        return e(j, Av)
      }), mt && nn(j, ot), I
    }

    function jt(j, T, M, O) {
      if (typeof M == "object" && M !== null && M.type === H && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case C:
            t: {
              for (var I = M.key; T !== null;) {
                if (T.key === I) {
                  if (I = M.type, I === H) {
                    if (T.tag === 7) {
                      n(j, T.sibling), O = s(T, M.props.children), O.return = j, j = O;
                      break t
                    }
                  } else if (T.elementType === I || typeof I == "object" && I !== null && I.$$typeof === $ && sa(I) === T.type) {
                    n(j, T.sibling), O = s(T, M.props), Vi(O, M), O.return = j, j = O;
                    break t
                  }
                  n(j, T);
                  break
                } else e(j, T);
                T = T.sibling
              }
              M.type === H ? (O = ea(M.props.children, j.mode, O, M.key), O.return = j, j = O) : (O = Kl(M.type, M.key, M.props, null, j.mode, O), Vi(O, M), O.return = j, j = O)
            }
            return f(j);
          case _:
            t: {
              for (I = M.key; T !== null;) {
                if (T.key === I)
                  if (T.tag === 4 && T.stateNode.containerInfo === M.containerInfo && T.stateNode.implementation === M.implementation) {
                    n(j, T.sibling), O = s(T, M.children || []), O.return = j, j = O;
                    break t
                  } else {
                    n(j, T);
                    break
                  }
                else e(j, T);
                T = T.sibling
              }
              O = Qo(M, j.mode, O),
              O.return = j,
              j = O
            }
            return f(j);
          case $:
            return M = sa(M), jt(j, T, M, O)
        }
        if (oe(M)) return K(j, T, M, O);
        if (Jt(M)) {
          if (I = Jt(M), typeof I != "function") throw Error(r(150));
          return M = I.call(M), et(j, T, M, O)
        }
        if (typeof M.then == "function") return jt(j, T, ts(M), O);
        if (M.$$typeof === Y) return jt(j, T, Pl(j, M), O);
        es(j, M)
      }
      return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, T !== null && T.tag === 6 ? (n(j, T.sibling), O = s(T, M), O.return = j, j = O) : (n(j, T), O = Xo(M, j.mode, O), O.return = j, j = O), f(j)) : n(j, T)
    }
    return function (j, T, M, O) {
      try {
        Ri = 0;
        var I = jt(j, T, M, O);
        return Fa = null, I
      } catch (P) {
        if (P === Ha || P === $l) throw P;
        var yt = be(29, P, null, j.mode);
        return yt.lanes = O, yt.return = j, yt
      } finally {}
    }
  }
  var ra = hd(!0),
    md = hd(!1),
    Mn = !1;

  function ar(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    }
  }

  function ir(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    })
  }

  function Nn(t) {
    return {
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    }
  }

  function En(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (vt & 2) !== 0) {
      var s = a.pending;
      return s === null ? e.next = e : (e.next = s.next, s.next = e), a.pending = e, e = Zl(t), Wf(t, null, n), e
    }
    return Ql(t, a, e, n), Zl(t)
  }

  function _i(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, lf(t, n)
    }
  }

  function lr(t, e) {
    var n = t.updateQueue,
      a = t.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var s = null,
        u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? s = u = f : u = u.next = f, n = n.next
        } while (n !== null);
        u === null ? s = u = e : u = u.next = e
      } else s = u = e;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = n;
      return
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e
  }
  var sr = !1;

  function Ui() {
    if (sr) {
      var t = La;
      if (t !== null) throw t
    }
  }

  function Li(t, e, n, a) {
    sr = !1;
    var s = t.updateQueue;
    Mn = !1;
    var u = s.firstBaseUpdate,
      f = s.lastBaseUpdate,
      v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var S = v,
        N = S.next;
      S.next = null, f === null ? u = N : f.next = N, f = S;
      var w = t.alternate;
      w !== null && (w = w.updateQueue, v = w.lastBaseUpdate, v !== f && (v === null ? w.firstBaseUpdate = N : v.next = N, w.lastBaseUpdate = S))
    }
    if (u !== null) {
      var V = s.baseState;
      f = 0, w = N = S = null, v = u;
      do {
        var E = v.lane & -536870913,
          D = E !== v.lane;
        if (D ? (dt & E) === E : (a & E) === E) {
          E !== 0 && E === Ua && (sr = !0), w !== null && (w = w.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          t: {
            var K = t,
              et = v;E = e;
            var jt = n;
            switch (et.tag) {
              case 1:
                if (K = et.payload, typeof K == "function") {
                  V = K.call(jt, V, E);
                  break t
                }
                V = K;
                break t;
              case 3:
                K.flags = K.flags & -65537 | 128;
              case 0:
                if (K = et.payload, E = typeof K == "function" ? K.call(jt, V, E) : K, E == null) break t;
                V = b({}, V, E);
                break t;
              case 2:
                Mn = !0
            }
          }
          E = v.callback, E !== null && (t.flags |= 64, D && (t.flags |= 8192), D = s.callbacks, D === null ? s.callbacks = [E] : D.push(E))
        } else D = {
          lane: E,
          tag: v.tag,
          payload: v.payload,
          callback: v.callback,
          next: null
        }, w === null ? (N = w = D, S = V) : w = w.next = D, f |= E;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null) break;
          D = v, v = D.next, D.next = null, s.lastBaseUpdate = D, s.shared.pending = null
        }
      } while (!0);
      w === null && (S = V), s.baseState = S, s.firstBaseUpdate = N, s.lastBaseUpdate = w, u === null && (s.shared.lanes = 0), On |= f, t.lanes = f, t.memoizedState = V
    }
  }

  function pd(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e)
  }

  function yd(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) pd(n[t], e)
  }
  var qa = A(null),
    ns = A(0);

  function gd(t, e) {
    t = mn, G(ns, t), G(qa, e), mn = t | e.baseLanes
  }

  function or() {
    G(ns, mn), G(qa, qa.current)
  }

  function rr() {
    mn = ns.current, U(qa), U(ns)
  }
  var Se = A(null),
    Re = null;

  function Dn(t) {
    var e = t.alternate;
    G(Ut, Ut.current & 1), G(Se, t), Re === null && (e === null || qa.current !== null || e.memoizedState !== null) && (Re = t)
  }

  function ur(t) {
    G(Ut, Ut.current), G(Se, t), Re === null && (Re = t)
  }

  function vd(t) {
    t.tag === 22 ? (G(Ut, Ut.current), G(Se, t), Re === null && (Re = t)) : Cn()
  }

  function Cn() {
    G(Ut, Ut.current), G(Se, Se.current)
  }

  function Te(t) {
    U(Se), Re === t && (Re = null), U(Ut)
  }
  var Ut = A(0);

  function as(t) {
    for (var e = t; e !== null;) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || pu(n) || yu(n))) return e
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue
      }
      if (e === t) break;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) return null;
        e = e.return
      }
      e.sibling.return = e.return, e = e.sibling
    }
    return null
  }
  var sn = 0,
    st = null,
    Bt = null,
    qt = null,
    is = !1,
    Ya = !1,
    ua = !1,
    ls = 0,
    Hi = 0,
    Ga = null,
    mg = 0;

  function Ot() {
    throw Error(r(321))
  }

  function cr(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!xe(t[n], e[n])) return !1;
    return !0
  }

  function fr(t, e, n, a, s, u) {
    return sn = u, st = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, z.H = t === null || t.memoizedState === null ? eh : Mr, ua = !1, u = n(a, s), ua = !1, Ya && (u = bd(e, n, a, s)), xd(t), u
  }

  function xd(t) {
    z.H = Yi;
    var e = Bt !== null && Bt.next !== null;
    if (sn = 0, qt = Bt = st = null, is = !1, Hi = 0, Ga = null, e) throw Error(r(300));
    t === null || Yt || (t = t.dependencies, t !== null && Jl(t) && (Yt = !0))
  }

  function bd(t, e, n, a) {
    st = t;
    var s = 0;
    do {
      if (Ya && (Ga = null), Hi = 0, Ya = !1, 25 <= s) throw Error(r(301));
      if (s += 1, qt = Bt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0)
      }
      z.H = nh, u = e(n, a)
    } while (Ya);
    return u
  }

  function pg() {
    var t = z.H,
      e = t.useState()[0];
    return e = typeof e.then == "function" ? Fi(e) : e, t = t.useState()[0], (Bt !== null ? Bt.memoizedState : null) !== t && (st.flags |= 1024), e
  }

  function dr() {
    var t = ls !== 0;
    return ls = 0, t
  }

  function hr(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n
  }

  function mr(t) {
    if (is) {
      for (t = t.memoizedState; t !== null;) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next
      }
      is = !1
    }
    sn = 0, qt = Bt = st = null, Ya = !1, Hi = ls = 0, Ga = null
  }

  function le() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return qt === null ? st.memoizedState = qt = t : qt = qt.next = t, qt
  }

  function Lt() {
    if (Bt === null) {
      var t = st.alternate;
      t = t !== null ? t.memoizedState : null
    } else t = Bt.next;
    var e = qt === null ? st.memoizedState : qt.next;
    if (e !== null) qt = e, Bt = t;
    else {
      if (t === null) throw st.alternate === null ? Error(r(467)) : Error(r(310));
      Bt = t, t = {
        memoizedState: Bt.memoizedState,
        baseState: Bt.baseState,
        baseQueue: Bt.baseQueue,
        queue: Bt.queue,
        next: null
      }, qt === null ? st.memoizedState = qt = t : qt = qt.next = t
    }
    return qt
  }

  function ss() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    }
  }

  function Fi(t) {
    var e = Hi;
    return Hi += 1, Ga === null && (Ga = []), t = cd(Ga, t, e), e = st, (qt === null ? e.memoizedState : qt.next) === null && (e = e.alternate, z.H = e === null || e.memoizedState === null ? eh : Mr), t
  }

  function os(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Fi(t);
      if (t.$$typeof === Y) return $t(t)
    }
    throw Error(r(438, String(t)))
  }

  function pr(t) {
    var e = null,
      n = st.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var a = st.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function (s) {
          return s.slice()
        }),
        index: 0
      })))
    }
    if (e == null && (e = {
        data: [],
        index: 0
      }), n === null && (n = ss(), st.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = zt;
    return e.index++, n
  }

  function on(t, e) {
    return typeof e == "function" ? e(t) : e
  }

  function rs(t) {
    var e = Lt();
    return yr(e, Bt, t)
  }

  function yr(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var s = t.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (s !== null) {
        var f = s.next;
        s.next = u.next, u.next = f
      }
      e.baseQueue = s = u, a.pending = null
    }
    if (u = t.baseState, s === null) t.memoizedState = u;
    else {
      e = s.next;
      var v = f = null,
        S = null,
        N = e,
        w = !1;
      do {
        var V = N.lane & -536870913;
        if (V !== N.lane ? (dt & V) === V : (sn & V) === V) {
          var E = N.revertLane;
          if (E === 0) S !== null && (S = S.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }), V === Ua && (w = !0);
          else if ((sn & E) === E) {
            N = N.next, E === Ua && (w = !0);
            continue
          } else V = {
            lane: 0,
            revertLane: N.revertLane,
            gesture: null,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, S === null ? (v = S = V, f = u) : S = S.next = V, st.lanes |= E, On |= E;
          V = N.action, ua && n(u, V), u = N.hasEagerState ? N.eagerState : n(u, V)
        } else E = {
          lane: V,
          revertLane: N.revertLane,
          gesture: N.gesture,
          action: N.action,
          hasEagerState: N.hasEagerState,
          eagerState: N.eagerState,
          next: null
        }, S === null ? (v = S = E, f = u) : S = S.next = E, st.lanes |= V, On |= V;
        N = N.next
      } while (N !== null && N !== e);
      if (S === null ? f = u : S.next = v, !xe(u, t.memoizedState) && (Yt = !0, w && (n = La, n !== null))) throw n;
      t.memoizedState = u, t.baseState = f, t.baseQueue = S, a.lastRenderedState = u
    }
    return s === null && (a.lanes = 0), [t.memoizedState, a.dispatch]
  }

  function gr(t) {
    var e = Lt(),
      n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch,
      s = n.pending,
      u = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = s = s.next;
      do u = t(u, f.action), f = f.next; while (f !== s);
      xe(u, e.memoizedState) || (Yt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u
    }
    return [u, a]
  }

  function Sd(t, e, n) {
    var a = st,
      s = Lt(),
      u = mt;
    if (u) {
      if (n === void 0) throw Error(r(407));
      n = n()
    } else n = e();
    var f = !xe((Bt || s).memoizedState, n);
    if (f && (s.memoizedState = n, Yt = !0), s = s.queue, br(Ad.bind(null, a, s, t), [t]), s.getSnapshot !== e || f || qt !== null && qt.memoizedState.tag & 1) {
      if (a.flags |= 2048, Xa(9, {
          destroy: void 0
        }, Bd.bind(null, a, s, n, e), null), Mt === null) throw Error(r(349));
      u || (sn & 127) !== 0 || Td(a, e, n)
    }
    return n
  }

  function Td(t, e, n) {
    t.flags |= 16384, t = {
      getSnapshot: e,
      value: n
    }, e = st.updateQueue, e === null ? (e = ss(), st.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t))
  }

  function Bd(t, e, n, a) {
    e.value = n, e.getSnapshot = a, jd(e) && Md(t)
  }

  function Ad(t, e, n) {
    return n(function () {
      jd(e) && Md(t)
    })
  }

  function jd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !xe(t, n)
    } catch {
      return !0
    }
  }

  function Md(t) {
    var e = ta(t, 2);
    e !== null && me(e, t, 2)
  }

  function vr(t) {
    var e = le();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), ua) {
        xn(!0);
        try {
          n()
        } finally {
          xn(!1)
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: on,
      lastRenderedState: t
    }, e
  }

  function Nd(t, e, n, a) {
    return t.baseState = n, yr(t, Bt, typeof a == "function" ? a : on)
  }

  function yg(t, e, n, a, s) {
    if (fs(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          u.listeners.push(f)
        }
      };
      z.T !== null ? n(!0) : u.isTransition = !1, a(u), n = e.pending, n === null ? (u.next = e.pending = u, Ed(e, u)) : (u.next = n.next, e.pending = n.next = u)
    }
  }

  function Ed(t, e) {
    var n = e.action,
      a = e.payload,
      s = t.state;
    if (e.isTransition) {
      var u = z.T,
        f = {};
      z.T = f;
      try {
        var v = n(s, a),
          S = z.S;
        S !== null && S(f, v), Dd(t, e, v)
      } catch (N) {
        xr(t, e, N)
      } finally {
        u !== null && f.types !== null && (u.types = f.types), z.T = u
      }
    } else try {
      u = n(s, a), Dd(t, e, u)
    } catch (N) {
      xr(t, e, N)
    }
  }

  function Dd(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function (a) {
      Cd(t, e, a)
    }, function (a) {
      return xr(t, e, a)
    }) : Cd(t, e, n)
  }

  function Cd(t, e, n) {
    e.status = "fulfilled", e.value = n, wd(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Ed(t, n)))
  }

  function xr(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do e.status = "rejected", e.reason = n, wd(e), e = e.next; while (e !== a)
    }
    t.action = null
  }

  function wd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++)(0, t[e])()
  }

  function zd(t, e) {
    return e
  }

  function Od(t, e) {
    if (mt) {
      var n = Mt.formState;
      if (n !== null) {
        t: {
          var a = st;
          if (mt) {
            if (Nt) {
              e: {
                for (var s = Nt, u = Oe; s.nodeType !== 8;) {
                  if (!u) {
                    s = null;
                    break e
                  }
                  if (s = Ve(s.nextSibling), s === null) {
                    s = null;
                    break e
                  }
                }
                u = s.data,
                s = u === "F!" || u === "F" ? s : null
              }
              if (s) {
                Nt = Ve(s.nextSibling), a = s.data === "F!";
                break t
              }
            }
            An(a)
          }
          a = !1
        }
        a && (e = n[0])
      }
    }
    return n = le(), n.memoizedState = n.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zd,
      lastRenderedState: e
    }, n.queue = a, n = $d.bind(null, st, a), a.dispatch = n, a = vr(!1), u = jr.bind(null, st, !1, a.queue), a = le(), s = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = s, n = yg.bind(null, st, s, u, n), s.dispatch = n, a.memoizedState = t, [e, n, !1]
  }

  function Rd(t) {
    var e = Lt();
    return Vd(e, Bt, t)
  }

  function Vd(t, e, n) {
    if (e = yr(t, e, zd)[0], t = rs(on)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
      var a = Fi(e)
    } catch (f) {
      throw f === Ha ? $l : f
    } else a = e;
    e = Lt();
    var s = e.queue,
      u = s.dispatch;
    return n !== e.memoizedState && (st.flags |= 2048, Xa(9, {
      destroy: void 0
    }, gg.bind(null, s, n), null)), [a, u, t]
  }

  function gg(t, e) {
    t.action = e
  }

  function _d(t) {
    var e = Lt(),
      n = Bt;
    if (n !== null) return Vd(e, n, t);
    Lt(), e = e.memoizedState, n = Lt();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1]
  }

  function Xa(t, e, n, a) {
    return t = {
      tag: t,
      create: n,
      deps: a,
      inst: e,
      next: null
    }, e = st.updateQueue, e === null && (e = ss(), st.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t
  }

  function Ud() {
    return Lt().memoizedState
  }

  function us(t, e, n, a) {
    var s = le();
    st.flags |= t, s.memoizedState = Xa(1 | e, {
      destroy: void 0
    }, n, a === void 0 ? null : a)
  }

  function cs(t, e, n, a) {
    var s = Lt();
    a = a === void 0 ? null : a;
    var u = s.memoizedState.inst;
    Bt !== null && a !== null && cr(a, Bt.memoizedState.deps) ? s.memoizedState = Xa(e, u, n, a) : (st.flags |= t, s.memoizedState = Xa(1 | e, u, n, a))
  }

  function Ld(t, e) {
    us(8390656, 8, t, e)
  }

  function br(t, e) {
    cs(2048, 8, t, e)
  }

  function vg(t) {
    st.flags |= 4;
    var e = st.updateQueue;
    if (e === null) e = ss(), st.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t)
    }
  }

  function Hd(t) {
    var e = Lt().memoizedState;
    return vg({
        ref: e,
        nextImpl: t
      }),
      function () {
        if ((vt & 2) !== 0) throw Error(r(440));
        return e.impl.apply(void 0, arguments)
      }
  }

  function Fd(t, e) {
    return cs(4, 2, t, e)
  }

  function qd(t, e) {
    return cs(4, 4, t, e)
  }

  function Yd(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null)
      }
    }
    if (e != null) return t = t(), e.current = t,
      function () {
        e.current = null
      }
  }

  function Gd(t, e, n) {
    n = n != null ? n.concat([t]) : null, cs(4, 4, Yd.bind(null, e, t), n)
  }

  function Sr() {}

  function Xd(t, e) {
    var n = Lt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && cr(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t)
  }

  function Qd(t, e) {
    var n = Lt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && cr(e, a[1])) return a[0];
    if (a = t(), ua) {
      xn(!0);
      try {
        t()
      } finally {
        xn(!1)
      }
    }
    return n.memoizedState = [a, e], a
  }

  function Tr(t, e, n) {
    return n === void 0 || (sn & 1073741824) !== 0 && (dt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Zh(), st.lanes |= t, On |= t, n)
  }

  function Zd(t, e, n, a) {
    return xe(n, e) ? n : qa.current !== null ? (t = Tr(t, n, a), xe(t, e) || (Yt = !0), t) : (sn & 42) === 0 || (sn & 1073741824) !== 0 && (dt & 261930) === 0 ? (Yt = !0, t.memoizedState = n) : (t = Zh(), st.lanes |= t, On |= t, e)
  }

  function Kd(t, e, n, a, s) {
    var u = L.p;
    L.p = u !== 0 && 8 > u ? u : 8;
    var f = z.T,
      v = {};
    z.T = v, jr(t, !1, e, n);
    try {
      var S = s(),
        N = z.S;
      if (N !== null && N(v, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var w = hg(S, a);
        qi(t, e, w, je(t))
      } else qi(t, e, a, je(t))
    } catch (V) {
      qi(t, e, {
        then: function () {},
        status: "rejected",
        reason: V
      }, je())
    } finally {
      L.p = u, f !== null && v.types !== null && (f.types = v.types), z.T = f
    }
  }

  function xg() {}

  function Br(t, e, n, a) {
    if (t.tag !== 5) throw Error(r(476));
    var s = kd(t).queue;
    Kd(t, s, e, J, n === null ? xg : function () {
      return Jd(t), n(a)
    })
  }

  function kd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: J,
      baseState: J,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: on,
        lastRenderedState: J
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: on,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e
  }

  function Jd(t) {
    var e = kd(t);
    e.next === null && (e = t.alternate.memoizedState), qi(t, e.next.queue, {}, je())
  }

  function Ar() {
    return $t(il)
  }

  function Pd() {
    return Lt().memoizedState
  }

  function Wd() {
    return Lt().memoizedState
  }

  function bg(t) {
    for (var e = t.return; e !== null;) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = je();
          t = Nn(n);
          var a = En(e, t, n);
          a !== null && (me(a, e, n), _i(a, e, n)), e = {
            cache: Io()
          }, t.payload = e;
          return
      }
      e = e.return
    }
  }

  function Sg(t, e, n) {
    var a = je();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, fs(t) ? Id(e, n) : (n = Yo(t, e, n, a), n !== null && (me(n, t, a), th(n, e, a)))
  }

  function $d(t, e, n) {
    var a = je();
    qi(t, e, n, a)
  }

  function qi(t, e, n, a) {
    var s = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (fs(t)) Id(e, s);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
        var f = e.lastRenderedState,
          v = u(f, n);
        if (s.hasEagerState = !0, s.eagerState = v, xe(v, f)) return Ql(t, e, s, 0), Mt === null && Xl(), !1
      } catch {} finally {}
      if (n = Yo(t, e, s, a), n !== null) return me(n, t, a), th(n, e, a), !0
    }
    return !1
  }

  function jr(t, e, n, a) {
    if (a = {
        lane: 2,
        revertLane: au(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, fs(t)) {
      if (e) throw Error(r(479))
    } else e = Yo(t, n, a, 2), e !== null && me(e, t, 2)
  }

  function fs(t) {
    var e = t.alternate;
    return t === st || e !== null && e === st
  }

  function Id(t, e) {
    Ya = is = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e
  }

  function th(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, lf(t, n)
    }
  }
  var Yi = {
    readContext: $t,
    use: os,
    useCallback: Ot,
    useContext: Ot,
    useEffect: Ot,
    useImperativeHandle: Ot,
    useLayoutEffect: Ot,
    useInsertionEffect: Ot,
    useMemo: Ot,
    useReducer: Ot,
    useRef: Ot,
    useState: Ot,
    useDebugValue: Ot,
    useDeferredValue: Ot,
    useTransition: Ot,
    useSyncExternalStore: Ot,
    useId: Ot,
    useHostTransitionStatus: Ot,
    useFormState: Ot,
    useActionState: Ot,
    useOptimistic: Ot,
    useMemoCache: Ot,
    useCacheRefresh: Ot
  };
  Yi.useEffectEvent = Ot;
  var eh = {
      readContext: $t,
      use: os,
      useCallback: function (t, e) {
        return le().memoizedState = [t, e === void 0 ? null : e], t
      },
      useContext: $t,
      useEffect: Ld,
      useImperativeHandle: function (t, e, n) {
        n = n != null ? n.concat([t]) : null, us(4194308, 4, Yd.bind(null, e, t), n)
      },
      useLayoutEffect: function (t, e) {
        return us(4194308, 4, t, e)
      },
      useInsertionEffect: function (t, e) {
        us(4, 2, t, e)
      },
      useMemo: function (t, e) {
        var n = le();
        e = e === void 0 ? null : e;
        var a = t();
        if (ua) {
          xn(!0);
          try {
            t()
          } finally {
            xn(!1)
          }
        }
        return n.memoizedState = [a, e], a
      },
      useReducer: function (t, e, n) {
        var a = le();
        if (n !== void 0) {
          var s = n(e);
          if (ua) {
            xn(!0);
            try {
              n(e)
            } finally {
              xn(!1)
            }
          }
        } else s = e;
        return a.memoizedState = a.baseState = s, t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: s
        }, a.queue = t, t = t.dispatch = Sg.bind(null, st, t), [a.memoizedState, t]
      },
      useRef: function (t) {
        var e = le();
        return t = {
          current: t
        }, e.memoizedState = t
      },
      useState: function (t) {
        t = vr(t);
        var e = t.queue,
          n = $d.bind(null, st, e);
        return e.dispatch = n, [t.memoizedState, n]
      },
      useDebugValue: Sr,
      useDeferredValue: function (t, e) {
        var n = le();
        return Tr(n, t, e)
      },
      useTransition: function () {
        var t = vr(!1);
        return t = Kd.bind(null, st, t.queue, !0, !1), le().memoizedState = t, [!1, t]
      },
      useSyncExternalStore: function (t, e, n) {
        var a = st,
          s = le();
        if (mt) {
          if (n === void 0) throw Error(r(407));
          n = n()
        } else {
          if (n = e(), Mt === null) throw Error(r(349));
          (dt & 127) !== 0 || Td(a, e, n)
        }
        s.memoizedState = n;
        var u = {
          value: n,
          getSnapshot: e
        };
        return s.queue = u, Ld(Ad.bind(null, a, u, t), [t]), a.flags |= 2048, Xa(9, {
          destroy: void 0
        }, Bd.bind(null, a, u, n, e), null), n
      },
      useId: function () {
        var t = le(),
          e = Mt.identifierPrefix;
        if (mt) {
          var n = Ze,
            a = Qe;
          n = (a & ~(1 << 32 - ve(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = ls++, 0 < n && (e += "H" + n.toString(32)), e += "_"
        } else n = mg++, e = "_" + e + "r_" + n.toString(32) + "_";
        return t.memoizedState = e
      },
      useHostTransitionStatus: Ar,
      useFormState: Od,
      useActionState: Od,
      useOptimistic: function (t) {
        var e = le();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return e.queue = n, e = jr.bind(null, st, !0, n), n.dispatch = e, [t, e]
      },
      useMemoCache: pr,
      useCacheRefresh: function () {
        return le().memoizedState = bg.bind(null, st)
      },
      useEffectEvent: function (t) {
        var e = le(),
          n = {
            impl: t
          };
        return e.memoizedState = n,
          function () {
            if ((vt & 2) !== 0) throw Error(r(440));
            return n.impl.apply(void 0, arguments)
          }
      }
    },
    Mr = {
      readContext: $t,
      use: os,
      useCallback: Xd,
      useContext: $t,
      useEffect: br,
      useImperativeHandle: Gd,
      useInsertionEffect: Fd,
      useLayoutEffect: qd,
      useMemo: Qd,
      useReducer: rs,
      useRef: Ud,
      useState: function () {
        return rs(on)
      },
      useDebugValue: Sr,
      useDeferredValue: function (t, e) {
        var n = Lt();
        return Zd(n, Bt.memoizedState, t, e)
      },
      useTransition: function () {
        var t = rs(on)[0],
          e = Lt().memoizedState;
        return [typeof t == "boolean" ? t : Fi(t), e]
      },
      useSyncExternalStore: Sd,
      useId: Pd,
      useHostTransitionStatus: Ar,
      useFormState: Rd,
      useActionState: Rd,
      useOptimistic: function (t, e) {
        var n = Lt();
        return Nd(n, Bt, t, e)
      },
      useMemoCache: pr,
      useCacheRefresh: Wd
    };
  Mr.useEffectEvent = Hd;
  var nh = {
    readContext: $t,
    use: os,
    useCallback: Xd,
    useContext: $t,
    useEffect: br,
    useImperativeHandle: Gd,
    useInsertionEffect: Fd,
    useLayoutEffect: qd,
    useMemo: Qd,
    useReducer: gr,
    useRef: Ud,
    useState: function () {
      return gr(on)
    },
    useDebugValue: Sr,
    useDeferredValue: function (t, e) {
      var n = Lt();
      return Bt === null ? Tr(n, t, e) : Zd(n, Bt.memoizedState, t, e)
    },
    useTransition: function () {
      var t = gr(on)[0],
        e = Lt().memoizedState;
      return [typeof t == "boolean" ? t : Fi(t), e]
    },
    useSyncExternalStore: Sd,
    useId: Pd,
    useHostTransitionStatus: Ar,
    useFormState: _d,
    useActionState: _d,
    useOptimistic: function (t, e) {
      var n = Lt();
      return Bt !== null ? Nd(n, Bt, t, e) : (n.baseState = t, [t, n.queue.dispatch])
    },
    useMemoCache: pr,
    useCacheRefresh: Wd
  };
  nh.useEffectEvent = Hd;

  function Nr(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : b({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n)
  }
  var Er = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var a = je(),
        s = Nn(a);
      s.payload = e, n != null && (s.callback = n), e = En(t, s, a), e !== null && (me(e, t, a), _i(e, t, a))
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var a = je(),
        s = Nn(a);
      s.tag = 1, s.payload = e, n != null && (s.callback = n), e = En(t, s, a), e !== null && (me(e, t, a), _i(e, t, a))
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = je(),
        a = Nn(n);
      a.tag = 2, e != null && (a.callback = e), e = En(t, a, n), e !== null && (me(e, t, n), _i(e, t, n))
    }
  };

  function ah(t, e, n, a, s, u, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, f) : e.prototype && e.prototype.isPureReactComponent ? !Ei(n, a) || !Ei(s, u) : !0
  }

  function ih(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && Er.enqueueReplaceState(e, e.state, null)
  }

  function ca(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e) a !== "ref" && (n[a] = e[a])
    }
    if (t = t.defaultProps) {
      n === e && (n = b({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s])
    }
    return n
  }

  function lh(t) {
    Gl(t)
  }

  function sh(t) {
    console.error(t)
  }

  function oh(t) {
    Gl(t)
  }

  function ds(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, {
        componentStack: e.stack
      })
    } catch (a) {
      setTimeout(function () {
        throw a
      })
    }
  }

  function rh(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      })
    } catch (s) {
      setTimeout(function () {
        throw s
      })
    }
  }

  function Dr(t, e, n) {
    return n = Nn(n), n.tag = 3, n.payload = {
      element: null
    }, n.callback = function () {
      ds(t, e)
    }, n
  }

  function uh(t) {
    return t = Nn(t), t.tag = 3, t
  }

  function ch(t, e, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = a.value;
      t.payload = function () {
        return s(u)
      }, t.callback = function () {
        rh(e, n, a)
      }
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function () {
      rh(e, n, a), typeof s != "function" && (Rn === null ? Rn = new Set([this]) : Rn.add(this));
      var v = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: v !== null ? v : ""
      })
    })
  }

  function Tg(t, e, n, a, s) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && _a(e, n, s, !0), n = Se.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Re === null ? As() : n.alternate === null && Rt === 0 && (Rt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, a === Il ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = new Set([a]) : e.add(a), tu(t, a, s)), !1;
          case 22:
            return n.flags |= 65536, a === Il ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = new Set([a]) : n.add(a)), tu(t, a, s)), !1
        }
        throw Error(r(435, n.tag))
      }
      return tu(t, a, s), As(), !1
    }
    if (mt) return e = Se.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = s, a !== ko && (t = Error(r(422), {
      cause: a
    }), wi(Ce(t, n)))) : (a !== ko && (e = Error(r(423), {
      cause: a
    }), wi(Ce(e, n))), t = t.current.alternate, t.flags |= 65536, s &= -s, t.lanes |= s, a = Ce(a, n), s = Dr(t.stateNode, a, s), lr(t, s), Rt !== 4 && (Rt = 2)), !1;
    var u = Error(r(520), {
      cause: a
    });
    if (u = Ce(u, n), Pi === null ? Pi = [u] : Pi.push(u), Rt !== 4 && (Rt = 2), e === null) return !0;
    a = Ce(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = s & -s, n.lanes |= t, t = Dr(n.stateNode, a, t), lr(n, t), !1;
        case 1:
          if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Rn === null || !Rn.has(u)))) return n.flags |= 65536, s &= -s, n.lanes |= s, s = uh(s), ch(s, t, n, a), lr(n, s), !1
      }
      n = n.return
    } while (n !== null);
    return !1
  }
  var Cr = Error(r(461)),
    Yt = !1;

  function It(t, e, n, a) {
    e.child = t === null ? md(e, null, n, a) : ra(e, t.child, n, a)
  }

  function fh(t, e, n, a, s) {
    n = n.render;
    var u = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var v in a) v !== "ref" && (f[v] = a[v])
    } else f = a;
    return ia(e), a = fr(t, e, n, f, u, s), v = dr(), t !== null && !Yt ? (hr(t, e, s), rn(t, e, s)) : (mt && v && Zo(e), e.flags |= 1, It(t, e, a, s), e.child)
  }

  function dh(t, e, n, a, s) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !Go(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, hh(t, e, u, a, s)) : (t = Kl(n.type, null, a, e, e.mode, s), t.ref = e.ref, t.return = e, e.child = t)
    }
    if (u = t.child, !Lr(t, s)) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ei, n(f, a) && t.ref === e.ref) return rn(t, e, s)
    }
    return e.flags |= 1, t = en(u, a), t.ref = e.ref, t.return = e, e.child = t
  }

  function hh(t, e, n, a, s) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Ei(u, a) && t.ref === e.ref)
        if (Yt = !1, e.pendingProps = a = u, Lr(t, s))(t.flags & 131072) !== 0 && (Yt = !0);
        else return e.lanes = t.lanes, rn(t, e, s)
    }
    return wr(t, e, n, a, s)
  }

  function mh(t, e, n, a) {
    var s = a.children,
      u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, t !== null) {
          for (a = e.child = t.child, s = 0; a !== null;) s = s | a.lanes | a.childLanes, a = a.sibling;
          a = s & ~u
        } else a = 0, e.child = null;
        return ph(t, e, u, n, a)
      }
      if ((n & 536870912) !== 0) e.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, t !== null && Wl(e, u !== null ? u.cachePool : null), u !== null ? gd(e, u) : or(), vd(e);
      else return a = e.lanes = 536870912, ph(t, e, u !== null ? u.baseLanes | n : n, n, a)
    } else u !== null ? (Wl(e, u.cachePool), gd(e, u), Cn(), e.memoizedState = null) : (t !== null && Wl(e, null), or(), Cn());
    return It(t, e, s, n), e.child
  }

  function Gi(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling
  }

  function ph(t, e, n, a, s) {
    var u = er();
    return u = u === null ? null : {
      parent: Ft._currentValue,
      pool: u
    }, e.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, t !== null && Wl(e, null), or(), vd(e), t !== null && _a(t, e, a, !0), e.childLanes = s, null
  }

  function hs(t, e) {
    return e = ps({
      mode: e.mode,
      children: e.children
    }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e
  }

  function yh(t, e, n) {
    return ra(e, t.child, null, n), t = hs(e, e.pendingProps), t.flags |= 2, Te(e), e.memoizedState = null, t
  }

  function Bg(t, e, n) {
    var a = e.pendingProps,
      s = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (mt) {
        if (a.mode === "hidden") return t = hs(e, a), e.lanes = 536870912, Gi(null, t);
        if (ur(e), (t = Nt) ? (t = E0(t, Oe), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: Tn !== null ? {
              id: Qe,
              overflow: Ze
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, n = If(t), n.return = e, e.child = n, Wt = e, Nt = null)) : t = null, t === null) throw An(e);
        return e.lanes = 536870912, null
      }
      return hs(e, a)
    }
    var u = t.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (ur(e), s)
        if (e.flags & 256) e.flags &= -257, e = yh(t, e, n);
        else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
      else throw Error(r(558));
      else if (Yt || _a(t, e, n, !1), s = (n & t.childLanes) !== 0, Yt || s) {
        if (a = Mt, a !== null && (f = sf(a, n), f !== 0 && f !== u.retryLane)) throw u.retryLane = f, ta(t, f), me(a, t, f), Cr;
        As(), e = yh(t, e, n)
      } else t = u.treeContext, Nt = Ve(f.nextSibling), Wt = e, mt = !0, Bn = null, Oe = !1, t !== null && nd(e, t), e = hs(e, a), e.flags |= 4096;
      return e
    }
    return t = en(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t
  }

  function ms(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816)
    }
  }

  function wr(t, e, n, a, s) {
    return ia(e), n = fr(t, e, n, a, void 0, s), a = dr(), t !== null && !Yt ? (hr(t, e, s), rn(t, e, s)) : (mt && a && Zo(e), e.flags |= 1, It(t, e, n, s), e.child)
  }

  function gh(t, e, n, a, s, u) {
    return ia(e), e.updateQueue = null, n = bd(e, a, n, s), xd(t), a = dr(), t !== null && !Yt ? (hr(t, e, u), rn(t, e, u)) : (mt && a && Zo(e), e.flags |= 1, It(t, e, n, u), e.child)
  }

  function vh(t, e, n, a, s) {
    if (ia(e), e.stateNode === null) {
      var u = za,
        f = n.contextType;
      typeof f == "object" && f !== null && (u = $t(f)), u = new n(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Er, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, ar(e), f = n.contextType, u.context = typeof f == "object" && f !== null ? $t(f) : za, u.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (Nr(e, n, f, a), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && Er.enqueueReplaceState(u, u.state, null), Li(e, a, u, s), Ui(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0
    } else if (t === null) {
      u = e.stateNode;
      var v = e.memoizedProps,
        S = ca(n, v);
      u.props = S;
      var N = u.context,
        w = n.contextType;
      f = za, typeof w == "object" && w !== null && (f = $t(w));
      var V = n.getDerivedStateFromProps;
      w = typeof V == "function" || typeof u.getSnapshotBeforeUpdate == "function", v = e.pendingProps !== v, w || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (v || N !== f) && ih(e, u, a, f), Mn = !1;
      var E = e.memoizedState;
      u.state = E, Li(e, a, u, s), Ui(), N = e.memoizedState, v || E !== N || Mn ? (typeof V == "function" && (Nr(e, n, V, a), N = e.memoizedState), (S = Mn || ah(e, n, S, a, E, N, f)) ? (w || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = N), u.props = a, u.state = N, u.context = f, a = S) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1)
    } else {
      u = e.stateNode, ir(t, e), f = e.memoizedProps, w = ca(n, f), u.props = w, V = e.pendingProps, E = u.context, N = n.contextType, S = za, typeof N == "object" && N !== null && (S = $t(N)), v = n.getDerivedStateFromProps, (N = typeof v == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== V || E !== S) && ih(e, u, a, S), Mn = !1, E = e.memoizedState, u.state = E, Li(e, a, u, s), Ui();
      var D = e.memoizedState;
      f !== V || E !== D || Mn || t !== null && t.dependencies !== null && Jl(t.dependencies) ? (typeof v == "function" && (Nr(e, n, v, a), D = e.memoizedState), (w = Mn || ah(e, n, w, a, E, D, S) || t !== null && t.dependencies !== null && Jl(t.dependencies)) ? (N || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, D, S), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, D, S)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && E === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && E === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = D), u.props = a, u.state = D, u.context = S, a = w) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && E === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && E === t.memoizedState || (e.flags |= 1024), a = !1)
    }
    return u = a, ms(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = ra(e, t.child, null, s), e.child = ra(e, null, n, s)) : It(t, e, n, s), e.memoizedState = u.state, t = e.child) : t = rn(t, e, s), t
  }

  function xh(t, e, n, a) {
    return na(), e.flags |= 256, It(t, e, n, a), e.child
  }
  var zr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };

  function Or(t) {
    return {
      baseLanes: t,
      cachePool: rd()
    }
  }

  function Rr(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Ae), t
  }

  function bh(t, e, n) {
    var a = e.pendingProps,
      s = !1,
      u = (e.flags & 128) !== 0,
      f;
    if ((f = u) || (f = t !== null && t.memoizedState === null ? !1 : (Ut.current & 2) !== 0), f && (s = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (mt) {
        if (s ? Dn(e) : Cn(), (t = Nt) ? (t = E0(t, Oe), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: Tn !== null ? {
              id: Qe,
              overflow: Ze
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, n = If(t), n.return = e, e.child = n, Wt = e, Nt = null)) : t = null, t === null) throw An(e);
        return yu(t) ? e.lanes = 32 : e.lanes = 536870912, null
      }
      var v = a.children;
      return a = a.fallback, s ? (Cn(), s = e.mode, v = ps({
        mode: "hidden",
        children: v
      }, s), a = ea(a, s, n, null), v.return = e, a.return = e, v.sibling = a, e.child = v, a = e.child, a.memoizedState = Or(n), a.childLanes = Rr(t, f, n), e.memoizedState = zr, Gi(null, a)) : (Dn(e), Vr(e, v))
    }
    var S = t.memoizedState;
    if (S !== null && (v = S.dehydrated, v !== null)) {
      if (u) e.flags & 256 ? (Dn(e), e.flags &= -257, e = _r(t, e, n)) : e.memoizedState !== null ? (Cn(), e.child = t.child, e.flags |= 128, e = null) : (Cn(), v = a.fallback, s = e.mode, a = ps({
        mode: "visible",
        children: a.children
      }, s), v = ea(v, s, n, null), v.flags |= 2, a.return = e, v.return = e, a.sibling = v, e.child = a, ra(e, t.child, null, n), a = e.child, a.memoizedState = Or(n), a.childLanes = Rr(t, f, n), e.memoizedState = zr, e = Gi(null, a));
      else if (Dn(e), yu(v)) {
        if (f = v.nextSibling && v.nextSibling.dataset, f) var N = f.dgst;
        f = N, a = Error(r(419)), a.stack = "", a.digest = f, wi({
          value: a,
          source: null,
          stack: null
        }), e = _r(t, e, n)
      } else if (Yt || _a(t, e, n, !1), f = (n & t.childLanes) !== 0, Yt || f) {
        if (f = Mt, f !== null && (a = sf(f, n), a !== 0 && a !== S.retryLane)) throw S.retryLane = a, ta(t, a), me(f, t, a), Cr;
        pu(v) || As(), e = _r(t, e, n)
      } else pu(v) ? (e.flags |= 192, e.child = t.child, e = null) : (t = S.treeContext, Nt = Ve(v.nextSibling), Wt = e, mt = !0, Bn = null, Oe = !1, t !== null && nd(e, t), e = Vr(e, a.children), e.flags |= 4096);
      return e
    }
    return s ? (Cn(), v = a.fallback, s = e.mode, S = t.child, N = S.sibling, a = en(S, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = S.subtreeFlags & 65011712, N !== null ? v = en(N, v) : (v = ea(v, s, n, null), v.flags |= 2), v.return = e, a.return = e, a.sibling = v, e.child = a, Gi(null, a), a = e.child, v = t.child.memoizedState, v === null ? v = Or(n) : (s = v.cachePool, s !== null ? (S = Ft._currentValue, s = s.parent !== S ? {
      parent: S,
      pool: S
    } : s) : s = rd(), v = {
      baseLanes: v.baseLanes | n,
      cachePool: s
    }), a.memoizedState = v, a.childLanes = Rr(t, f, n), e.memoizedState = zr, Gi(t.child, a)) : (Dn(e), n = t.child, t = n.sibling, n = en(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n)
  }

  function Vr(t, e) {
    return e = ps({
      mode: "visible",
      children: e
    }, t.mode), e.return = t, t.child = e
  }

  function ps(t, e) {
    return t = be(22, t, null, e), t.lanes = 0, t
  }

  function _r(t, e, n) {
    return ra(e, t.child, null, n), t = Vr(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
  }

  function Sh(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Wo(t.return, e, n)
  }

  function Ur(t, e, n, a, s, u) {
    var f = t.memoizedState;
    f === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: s,
      treeForkCount: u
    } : (f.isBackwards = e, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = n, f.tailMode = s, f.treeForkCount = u)
  }

  function Th(t, e, n) {
    var a = e.pendingProps,
      s = a.revealOrder,
      u = a.tail;
    a = a.children;
    var f = Ut.current,
      v = (f & 2) !== 0;
    if (v ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, G(Ut, f), It(t, e, a, n), a = mt ? Ci : 0, !v && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null;) {
      if (t.tag === 13) t.memoizedState !== null && Sh(t, n, e);
      else if (t.tag === 19) Sh(t, n, e);
      else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue
      }
      if (t === e) break t;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) break t;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
    switch (s) {
      case "forwards":
        for (n = e.child, s = null; n !== null;) t = n.alternate, t !== null && as(t) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), Ur(e, !1, s, n, u, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null;) {
          if (t = s.alternate, t !== null && as(t) === null) {
            e.child = s;
            break
          }
          t = s.sibling, s.sibling = n, n = s, s = t
        }
        Ur(e, !0, n, null, u, a);
        break;
      case "together":
        Ur(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null
    }
    return e.child
  }

  function rn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), On |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (_a(t, e, n, !1), (n & e.childLanes) === 0) return null
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, n = en(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null;) t = t.sibling, n = n.sibling = en(t, t.pendingProps), n.return = e;
      n.sibling = null
    }
    return e.child
  }

  function Lr(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Jl(t)))
  }

  function Ag(t, e, n) {
    switch (e.tag) {
      case 3:
        ie(e, e.stateNode.containerInfo), jn(e, Ft, t.memoizedState.cache), na();
        break;
      case 27:
      case 5:
        pi(e);
        break;
      case 4:
        ie(e, e.stateNode.containerInfo);
        break;
      case 10:
        jn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return e.flags |= 128, ur(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (Dn(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? bh(t, e, n) : (Dn(e), t = rn(t, e, n), t !== null ? t.sibling : null);
        Dn(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (a = (n & e.childLanes) !== 0, a || (_a(t, e, n, !1), a = (n & e.childLanes) !== 0), s) {
          if (a) return Th(t, e, n);
          e.flags |= 128
        }
        if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), G(Ut, Ut.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, mh(t, e, n, e.pendingProps);
      case 24:
        jn(e, Ft, t.memoizedState.cache)
    }
    return rn(t, e, n)
  }

  function Bh(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Yt = !0;
      else {
        if (!Lr(t, n) && (e.flags & 128) === 0) return Yt = !1, Ag(t, e, n);
        Yt = (t.flags & 131072) !== 0
      }
    else Yt = !1, mt && (e.flags & 1048576) !== 0 && ed(e, Ci, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = sa(e.elementType), e.type = t, typeof t == "function") Go(t) ? (a = ca(t, a), e.tag = 1, e = vh(null, e, t, a, n)) : (e.tag = 0, e = wr(null, e, t, a, n));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === nt) {
                e.tag = 11, e = fh(null, e, t, a, n);
                break t
              } else if (s === Q) {
                e.tag = 14, e = dh(null, e, t, a, n);
                break t
              }
            }
            throw e = Me(t) || t, Error(r(306, e, ""))
          }
        }
        return e;
      case 0:
        return wr(t, e, e.type, e.pendingProps, n);
      case 1:
        return a = e.type, s = ca(a, e.pendingProps), vh(t, e, a, s, n);
      case 3:
        t: {
          if (ie(e, e.stateNode.containerInfo), t === null) throw Error(r(387));a = e.pendingProps;
          var u = e.memoizedState;s = u.element,
          ir(t, e),
          Li(e, a, null, n);
          var f = e.memoizedState;
          if (a = f.cache, jn(e, Ft, a), a !== u.cache && $o(e, [Ft], n, !0), Ui(), a = f.element, u.isDehydrated)
            if (u = {
                element: a,
                isDehydrated: !1,
                cache: f.cache
              }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = xh(t, e, a, n);
              break t
            } else if (a !== s) {
            s = Ce(Error(r(424)), e), wi(s), e = xh(t, e, a, n);
            break t
          } else {
            switch (t = e.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t
            }
            for (Nt = Ve(t.firstChild), Wt = e, mt = !0, Bn = null, Oe = !0, n = md(e, null, a, n), e.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling
          } else {
            if (na(), a === s) {
              e = rn(t, e, n);
              break t
            }
            It(t, e, a, n)
          }
          e = e.child
        }
        return e;
      case 26:
        return ms(t, e), t === null ? (n = R0(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : mt || (n = e.type, t = e.pendingProps, a = ws(rt.current).createElement(n), a[Pt] = e, a[re] = t, te(a, n, t), Kt(a), e.stateNode = a) : e.memoizedState = R0(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return pi(e), t === null && mt && (a = e.stateNode = w0(e.type, e.pendingProps, rt.current), Wt = e, Oe = !0, s = Nt, Ln(e.type) ? (gu = s, Nt = Ve(a.firstChild)) : Nt = s), It(t, e, e.pendingProps.children, n), ms(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && mt && ((s = a = Nt) && (a = tv(a, e.type, e.pendingProps, Oe), a !== null ? (e.stateNode = a, Wt = e, Nt = Ve(a.firstChild), Oe = !1, s = !0) : s = !1), s || An(e)), pi(e), s = e.type, u = e.pendingProps, f = t !== null ? t.memoizedProps : null, a = u.children, du(s, u) ? a = null : f !== null && du(s, f) && (e.flags |= 32), e.memoizedState !== null && (s = fr(t, e, pg, null, null, n), il._currentValue = s), ms(t, e), It(t, e, a, n), e.child;
      case 6:
        return t === null && mt && ((t = n = Nt) && (n = ev(n, e.pendingProps, Oe), n !== null ? (e.stateNode = n, Wt = e, Nt = null, t = !0) : t = !1), t || An(e)), null;
      case 13:
        return bh(t, e, n);
      case 4:
        return ie(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = ra(e, null, a, n) : It(t, e, a, n), e.child;
      case 11:
        return fh(t, e, e.type, e.pendingProps, n);
      case 7:
        return It(t, e, e.pendingProps, n), e.child;
      case 8:
        return It(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return It(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return a = e.pendingProps, jn(e, e.type, a.value), It(t, e, a.children, n), e.child;
      case 9:
        return s = e.type._context, a = e.pendingProps.children, ia(e), s = $t(s), a = a(s), e.flags |= 1, It(t, e, a, n), e.child;
      case 14:
        return dh(t, e, e.type, e.pendingProps, n);
      case 15:
        return hh(t, e, e.type, e.pendingProps, n);
      case 19:
        return Th(t, e, n);
      case 31:
        return Bg(t, e, n);
      case 22:
        return mh(t, e, n, e.pendingProps);
      case 24:
        return ia(e), a = $t(Ft), t === null ? (s = er(), s === null && (s = Mt, u = Io(), s.pooledCache = u, u.refCount++, u !== null && (s.pooledCacheLanes |= n), s = u), e.memoizedState = {
          parent: a,
          cache: s
        }, ar(e), jn(e, Ft, s)) : ((t.lanes & n) !== 0 && (ir(t, e), Li(e, null, null, n), Ui()), s = t.memoizedState, u = e.memoizedState, s.parent !== a ? (s = {
          parent: a,
          cache: a
        }, e.memoizedState = s, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s), jn(e, Ft, a)) : (a = u.cache, jn(e, Ft, a), a !== s.cache && $o(e, [Ft], n, !0))), It(t, e, e.pendingProps.children, n), e.child;
      case 29:
        throw e.pendingProps
    }
    throw Error(r(156, e.tag))
  }

  function un(t) {
    t.flags |= 4
  }

  function Hr(t, e, n, a, s) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (s & 335544128) === s)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Ph()) t.flags |= 8192;
      else throw oa = Il, nr
    } else t.flags &= -16777217
  }

  function Ah(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (t.flags |= 16777216, !H0(e))
      if (Ph()) t.flags |= 8192;
      else throw oa = Il, nr
  }

  function ys(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? nf() : 536870912, t.lanes |= e, ka |= e)
  }

  function Xi(t, e) {
    if (!mt) switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null;) e.alternate !== null && (n = e), e = e.sibling;
        n === null ? t.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = t.tail;
        for (var a = null; n !== null;) n.alternate !== null && (a = n), n = n.sibling;
        a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null
    }
  }

  function Et(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      a = 0;
    if (e)
      for (var s = t.child; s !== null;) n |= s.lanes | s.childLanes, a |= s.subtreeFlags & 65011712, a |= s.flags & 65011712, s.return = t, s = s.sibling;
    else
      for (s = t.child; s !== null;) n |= s.lanes | s.childLanes, a |= s.subtreeFlags, a |= s.flags, s.return = t, s = s.sibling;
    return t.subtreeFlags |= a, t.childLanes = n, e
  }

  function jg(t, e, n) {
    var a = e.pendingProps;
    switch (Ko(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Et(e), null;
      case 1:
        return Et(e), null;
      case 3:
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), ln(Ft), _t(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Va(e) ? un(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Jo())), Et(e), null;
      case 26:
        var s = e.type,
          u = e.memoizedState;
        return t === null ? (un(e), u !== null ? (Et(e), Ah(e, u)) : (Et(e), Hr(e, s, null, a, n))) : u ? u !== t.memoizedState ? (un(e), Et(e), Ah(e, u)) : (Et(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && un(e), Et(e), Hr(e, s, t, a, n)), null;
      case 27:
        if (Nl(e), n = rt.current, s = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && un(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return Et(e), null
          }
          t = k.current, Va(e) ? ad(e) : (t = w0(s, a, n), e.stateNode = t, un(e))
        }
        return Et(e), null;
      case 5:
        if (Nl(e), s = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && un(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return Et(e), null
          }
          if (u = k.current, Va(e)) ad(e);
          else {
            var f = ws(rt.current);
            switch (u) {
              case 1:
                u = f.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                u = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    u = f.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    u = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                    break;
                  case "script":
                    u = f.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                    break;
                  case "select":
                    u = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? f.createElement(s, {
                      is: a.is
                    }) : f.createElement(s)
                }
            }
            u[Pt] = e, u[re] = a;
            t: for (f = e.child; f !== null;) {
              if (f.tag === 5 || f.tag === 6) u.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue
              }
              if (f === e) break t;
              for (; f.sibling === null;) {
                if (f.return === null || f.return === e) break t;
                f = f.return
              }
              f.sibling.return = f.return, f = f.sibling
            }
            e.stateNode = u;
            t: switch (te(u, s, a), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1
            }
            a && un(e)
          }
        }
        return Et(e), Hr(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && un(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(r(166));
          if (t = rt.current, Va(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, s = Wt, s !== null) switch (s.tag) {
              case 27:
              case 5:
                a = s.memoizedProps
            }
            t[Pt] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || b0(t.nodeValue, n)), t || An(e, !0)
          } else t = ws(t).createTextNode(a), t[Pt] = e, e.stateNode = t
        }
        return Et(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Va(e), n !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[Pt] = e
            } else na(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Et(e), t = !1
          } else n = Jo(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t) return e.flags & 256 ? (Te(e), e) : (Te(e), null);
          if ((e.flags & 128) !== 0) throw Error(r(558))
        }
        return Et(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (s = Va(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(r(317));
              s[Pt] = e
            } else na(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Et(e), s = !1
          } else s = Jo(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), s = !0;
          if (!s) return e.flags & 256 ? (Te(e), e) : (Te(e), null)
        }
        return Te(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, s = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (s = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== s && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), ys(e, e.updateQueue), Et(e), null);
      case 4:
        return _t(), t === null && ou(e.stateNode.containerInfo), Et(e), null;
      case 10:
        return ln(e.type), Et(e), null;
      case 19:
        if (U(Ut), a = e.memoizedState, a === null) return Et(e), null;
        if (s = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (s) Xi(a, !1);
          else {
            if (Rt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null;) {
                if (u = as(t), u !== null) {
                  for (e.flags |= 128, Xi(a, !1), t = u.updateQueue, e.updateQueue = t, ys(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null;) $f(n, t), n = n.sibling;
                  return G(Ut, Ut.current & 1 | 2), mt && nn(e, a.treeForkCount), e.child
                }
                t = t.sibling
              }
            a.tail !== null && ye() > Ss && (e.flags |= 128, s = !0, Xi(a, !1), e.lanes = 4194304)
          }
        else {
          if (!s)
            if (t = as(u), t !== null) {
              if (e.flags |= 128, s = !0, t = t.updateQueue, e.updateQueue = t, ys(e, t), Xi(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !mt) return Et(e), null
            } else 2 * ye() - a.renderingStartTime > Ss && n !== 536870912 && (e.flags |= 128, s = !0, Xi(a, !1), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u)
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ye(), t.sibling = null, n = Ut.current, G(Ut, s ? n & 1 | 2 : n & 1), mt && nn(e, a.treeForkCount), t) : (Et(e), null);
      case 22:
      case 23:
        return Te(e), rr(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Et(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Et(e), n = e.updateQueue, n !== null && ys(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && U(la), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), ln(Ft), Et(e), null;
      case 25:
        return null;
      case 30:
        return null
    }
    throw Error(r(156, e.tag))
  }

  function Mg(t, e) {
    switch (Ko(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return ln(Ft), _t(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Nl(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Te(e), e.alternate === null) throw Error(r(340));
          na()
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Te(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(r(340));
          na()
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return U(Ut), null;
      case 4:
        return _t(), null;
      case 10:
        return ln(e.type), null;
      case 22:
      case 23:
        return Te(e), rr(), t !== null && U(la), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return ln(Ft), null;
      case 25:
        return null;
      default:
        return null
    }
  }

  function jh(t, e) {
    switch (Ko(e), e.tag) {
      case 3:
        ln(Ft), _t();
        break;
      case 26:
      case 27:
      case 5:
        Nl(e);
        break;
      case 4:
        _t();
        break;
      case 31:
        e.memoizedState !== null && Te(e);
        break;
      case 13:
        Te(e);
        break;
      case 19:
        U(Ut);
        break;
      case 10:
        ln(e.type);
        break;
      case 22:
      case 23:
        Te(e), rr(), t !== null && U(la);
        break;
      case 24:
        ln(Ft)
    }
  }

  function Qi(t, e) {
    try {
      var n = e.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var u = n.create,
              f = n.inst;
            a = u(), f.destroy = a
          }
          n = n.next
        } while (n !== s)
      }
    } catch (v) {
      Tt(e, e.return, v)
    }
  }

  function wn(t, e, n) {
    try {
      var a = e.updateQueue,
        s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var f = a.inst,
              v = f.destroy;
            if (v !== void 0) {
              f.destroy = void 0, s = e;
              var S = n,
                N = v;
              try {
                N()
              } catch (w) {
                Tt(s, S, w)
              }
            }
          }
          a = a.next
        } while (a !== u)
      }
    } catch (w) {
      Tt(e, e.return, w)
    }
  }

  function Mh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        yd(e, n)
      } catch (a) {
        Tt(t, t.return, a)
      }
    }
  }

  function Nh(t, e, n) {
    n.props = ca(t.type, t.memoizedProps), n.state = t.memoizedState;
    try {
      n.componentWillUnmount()
    } catch (a) {
      Tt(t, e, a)
    }
  }

  function Zi(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode
        }
        typeof n == "function" ? t.refCleanup = n(a) : n.current = a
      }
    } catch (s) {
      Tt(t, e, s)
    }
  }

  function Ke(t, e) {
    var n = t.ref,
      a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function") try {
        a()
      } catch (s) {
        Tt(t, e, s)
      } finally {
        t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
      } else if (typeof n == "function") try {
        n(null)
      } catch (s) {
        Tt(t, e, s)
      } else n.current = null
  }

  function Eh(t) {
    var e = t.type,
      n = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet)
      }
    }
    catch (s) {
      Tt(t, t.return, s)
    }
  }

  function Fr(t, e, n) {
    try {
      var a = t.stateNode;
      kg(a, t.type, n, e), a[re] = e
    } catch (s) {
      Tt(t, t.return, s)
    }
  }

  function Dh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ln(t.type) || t.tag === 4
  }

  function qr(t) {
    t: for (;;) {
      for (; t.sibling === null;) {
        if (t.return === null || Dh(t.return)) return null;
        t = t.return
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
        if (t.tag === 27 && Ln(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child
      }
      if (!(t.flags & 2)) return t.stateNode
    }
  }

  function Yr(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6) t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Ie));
    else if (a !== 4 && (a === 27 && Ln(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null))
      for (Yr(t, e, n), t = t.sibling; t !== null;) Yr(t, e, n), t = t.sibling
  }

  function gs(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (a !== 4 && (a === 27 && Ln(t.type) && (n = t.stateNode), t = t.child, t !== null))
      for (gs(t, e, n), t = t.sibling; t !== null;) gs(t, e, n), t = t.sibling
  }

  function Ch(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var a = t.type, s = e.attributes; s.length;) e.removeAttributeNode(s[0]);
      te(e, a, n), e[Pt] = t, e[re] = n
    } catch (u) {
      Tt(t, t.return, u)
    }
  }
  var cn = !1,
    Gt = !1,
    Gr = !1,
    wh = typeof WeakSet == "function" ? WeakSet : Set,
    kt = null;

  function Ng(t, e) {
    if (t = t.containerInfo, cu = Ls, t = Gf(t), _o(t)) {
      if ("selectionStart" in t) var n = {
        start: t.selectionStart,
        end: t.selectionEnd
      };
      else t: {
        n = (n = t.ownerDocument) && n.defaultView || window;
        var a = n.getSelection && n.getSelection();
        if (a && a.rangeCount !== 0) {
          n = a.anchorNode;
          var s = a.anchorOffset,
            u = a.focusNode;
          a = a.focusOffset;
          try {
            n.nodeType, u.nodeType
          } catch {
            n = null;
            break t
          }
          var f = 0,
            v = -1,
            S = -1,
            N = 0,
            w = 0,
            V = t,
            E = null;
          e: for (;;) {
            for (var D; V !== n || s !== 0 && V.nodeType !== 3 || (v = f + s), V !== u || a !== 0 && V.nodeType !== 3 || (S = f + a), V.nodeType === 3 && (f += V.nodeValue.length), (D = V.firstChild) !== null;) E = V, V = D;
            for (;;) {
              if (V === t) break e;
              if (E === n && ++N === s && (v = f), E === u && ++w === a && (S = f), (D = V.nextSibling) !== null) break;
              V = E, E = V.parentNode
            }
            V = D
          }
          n = v === -1 || S === -1 ? null : {
            start: v,
            end: S
          }
        } else n = null
      }
      n = n || {
        start: 0,
        end: 0
      }
    } else n = null;
    for (fu = {
        focusedElem: t,
        selectionRange: n
      }, Ls = !1, kt = e; kt !== null;)
      if (e = kt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, kt = t;
      else
        for (; kt !== null;) {
          switch (e = kt, u = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (n = 0; n < t.length; n++) s = t[n], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                t = void 0, n = e, s = u.memoizedProps, u = u.memoizedState, a = n.stateNode;
                try {
                  var K = ca(n.type, s);
                  t = a.getSnapshotBeforeUpdate(K, u), a.__reactInternalSnapshotBeforeUpdate = t
                } catch (et) {
                  Tt(n, n.return, et)
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9) mu(t);
                else if (n === 1) switch (t.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    mu(t);
                    break;
                  default:
                    t.textContent = ""
                }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163))
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, kt = t;
            break
          }
          kt = e.return
        }
  }

  function zh(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        dn(t, n), a & 4 && Qi(5, n);
        break;
      case 1:
        if (dn(t, n), a & 4)
          if (t = n.stateNode, e === null) try {
            t.componentDidMount()
          } catch (f) {
            Tt(n, n.return, f)
          } else {
            var s = ca(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate)
            } catch (f) {
              Tt(n, n.return, f)
            }
          }
        a & 64 && Mh(n), a & 512 && Zi(n, n.return);
        break;
      case 3:
        if (dn(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null) switch (n.child.tag) {
            case 27:
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode
          }
          try {
            yd(t, e)
          } catch (f) {
            Tt(n, n.return, f)
          }
        }
        break;
      case 27:
        e === null && a & 4 && Ch(n);
      case 26:
      case 5:
        dn(t, n), e === null && a & 4 && Eh(n), a & 512 && Zi(n, n.return);
        break;
      case 12:
        dn(t, n);
        break;
      case 31:
        dn(t, n), a & 4 && Vh(t, n);
        break;
      case 13:
        dn(t, n), a & 4 && _h(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = _g.bind(null, n), nv(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || cn, !a) {
          e = e !== null && e.memoizedState !== null || Gt, s = cn;
          var u = Gt;
          cn = a, (Gt = e) && !u ? hn(t, n, (n.subtreeFlags & 8772) !== 0) : dn(t, n), cn = s, Gt = u
        }
        break;
      case 30:
        break;
      default:
        dn(t, n)
    }
  }

  function Oh(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Oh(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && xo(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
  }
  var Dt = null,
    ce = !1;

  function fn(t, e, n) {
    for (n = n.child; n !== null;) Rh(t, e, n), n = n.sibling
  }

  function Rh(t, e, n) {
    if (ge && typeof ge.onCommitFiberUnmount == "function") try {
      ge.onCommitFiberUnmount(yi, n)
    } catch {}
    switch (n.tag) {
      case 26:
        Gt || Ke(n, e), fn(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Gt || Ke(n, e);
        var a = Dt,
          s = ce;
        Ln(n.type) && (Dt = n.stateNode, ce = !1), fn(t, e, n), el(n.stateNode), Dt = a, ce = s;
        break;
      case 5:
        Gt || Ke(n, e);
      case 6:
        if (a = Dt, s = ce, Dt = null, fn(t, e, n), Dt = a, ce = s, Dt !== null)
          if (ce) try {
            (Dt.nodeType === 9 ? Dt.body : Dt.nodeName === "HTML" ? Dt.ownerDocument.body : Dt).removeChild(n.stateNode)
          } catch (u) {
            Tt(n, e, u)
          } else try {
            Dt.removeChild(n.stateNode)
          } catch (u) {
            Tt(n, e, u)
          }
        break;
      case 18:
        Dt !== null && (ce ? (t = Dt, M0(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode), ni(t)) : M0(Dt, n.stateNode));
        break;
      case 4:
        a = Dt, s = ce, Dt = n.stateNode.containerInfo, ce = !0, fn(t, e, n), Dt = a, ce = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        wn(2, n, e), Gt || wn(4, n, e), fn(t, e, n);
        break;
      case 1:
        Gt || (Ke(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && Nh(n, e, a)), fn(t, e, n);
        break;
      case 21:
        fn(t, e, n);
        break;
      case 22:
        Gt = (a = Gt) || n.memoizedState !== null, fn(t, e, n), Gt = a;
        break;
      default:
        fn(t, e, n)
    }
  }

  function Vh(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        ni(t)
      } catch (n) {
        Tt(e, e.return, n)
      }
    }
  }

  function _h(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      ni(t)
    } catch (n) {
      Tt(e, e.return, n)
    }
  }

  function Eg(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new wh), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new wh), e;
      default:
        throw Error(r(435, t.tag))
    }
  }

  function vs(t, e) {
    var n = Eg(t);
    e.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var s = Ug.bind(null, t, a);
        a.then(s, s)
      }
    })
  }

  function fe(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a],
          u = t,
          f = e,
          v = f;
        t: for (; v !== null;) {
          switch (v.tag) {
            case 27:
              if (Ln(v.type)) {
                Dt = v.stateNode, ce = !1;
                break t
              }
              break;
            case 5:
              Dt = v.stateNode, ce = !1;
              break t;
            case 3:
            case 4:
              Dt = v.stateNode.containerInfo, ce = !0;
              break t
          }
          v = v.return
        }
        if (Dt === null) throw Error(r(160));
        Rh(u, f, s), Dt = null, ce = !1, u = s.alternate, u !== null && (u.return = null), s.return = null
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null;) Uh(e, t), e = e.sibling
  }
  var Ye = null;

  function Uh(t, e) {
    var n = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        fe(e, t), de(t), a & 4 && (wn(3, t, t.return), Qi(3, t), wn(5, t, t.return));
        break;
      case 1:
        fe(e, t), de(t), a & 512 && (Gt || n === null || Ke(n, n.return)), a & 64 && cn && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var s = Ye;
        if (fe(e, t), de(t), a & 512 && (Gt || n === null || Ke(n, n.return)), a & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (a = t.memoizedState, n === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type,
                  n = t.memoizedProps,
                  s = s.ownerDocument || s;e: switch (a) {
                    case "title":
                      u = s.getElementsByTagName("title")[0], (!u || u[xi] || u[Pt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = s.createElement(a), s.head.insertBefore(u, s.querySelector("head > title"))), te(u, a, n), u[Pt] = t, Kt(u), a = u;
                      break t;
                    case "link":
                      var f = U0("link", "href", s).get(a + (n.href || ""));
                      if (f) {
                        for (var v = 0; v < f.length; v++)
                          if (u = f[v], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            f.splice(v, 1);
                            break e
                          }
                      }
                      u = s.createElement(a), te(u, a, n), s.head.appendChild(u);
                      break;
                    case "meta":
                      if (f = U0("meta", "content", s).get(a + (n.content || ""))) {
                        for (v = 0; v < f.length; v++)
                          if (u = f[v], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            f.splice(v, 1);
                            break e
                          }
                      }
                      u = s.createElement(a), te(u, a, n), s.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, a))
                  }
                  u[Pt] = t,
                  Kt(u),
                  a = u
                }
                t.stateNode = a
              }
          else L0(s, t.type, t.stateNode);
          else t.stateNode = _0(s, a, t.memoizedProps);
          else u !== a ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, a === null ? L0(s, t.type, t.stateNode) : _0(s, a, t.memoizedProps)) : a === null && t.stateNode !== null && Fr(t, t.memoizedProps, n.memoizedProps)
        }
        break;
      case 27:
        fe(e, t), de(t), a & 512 && (Gt || n === null || Ke(n, n.return)), n !== null && a & 4 && Fr(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (fe(e, t), de(t), a & 512 && (Gt || n === null || Ke(n, n.return)), t.flags & 32) {
          s = t.stateNode;
          try {
            ja(s, "")
          } catch (K) {
            Tt(t, t.return, K)
          }
        }
        a & 4 && t.stateNode != null && (s = t.memoizedProps, Fr(t, s, n !== null ? n.memoizedProps : s)), a & 1024 && (Gr = !0);
        break;
      case 6:
        if (fe(e, t), de(t), a & 4) {
          if (t.stateNode === null) throw Error(r(162));
          a = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = a
          } catch (K) {
            Tt(t, t.return, K)
          }
        }
        break;
      case 3:
        if (Rs = null, s = Ye, Ye = zs(e.containerInfo), fe(e, t), Ye = s, de(t), a & 4 && n !== null && n.memoizedState.isDehydrated) try {
          ni(e.containerInfo)
        } catch (K) {
          Tt(t, t.return, K)
        }
        Gr && (Gr = !1, Lh(t));
        break;
      case 4:
        a = Ye, Ye = zs(t.stateNode.containerInfo), fe(e, t), de(t), Ye = a;
        break;
      case 12:
        fe(e, t), de(t);
        break;
      case 31:
        fe(e, t), de(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, vs(t, a)));
        break;
      case 13:
        fe(e, t), de(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (bs = ye()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, vs(t, a)));
        break;
      case 22:
        s = t.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null,
          N = cn,
          w = Gt;
        if (cn = N || s, Gt = w || S, fe(e, t), Gt = w, cn = N, de(t), a & 8192) t: for (e = t.stateNode, e._visibility = s ? e._visibility & -2 : e._visibility | 1, s && (n === null || S || cn || Gt || fa(t)), n = null, e = t;;) {
          if (e.tag === 5 || e.tag === 26) {
            if (n === null) {
              S = n = e;
              try {
                if (u = S.stateNode, s) f = u.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                else {
                  v = S.stateNode;
                  var V = S.memoizedProps.style,
                    E = V != null && V.hasOwnProperty("display") ? V.display : null;
                  v.style.display = E == null || typeof E == "boolean" ? "" : ("" + E).trim()
                }
              } catch (K) {
                Tt(S, S.return, K)
              }
            }
          } else if (e.tag === 6) {
            if (n === null) {
              S = e;
              try {
                S.stateNode.nodeValue = s ? "" : S.memoizedProps
              } catch (K) {
                Tt(S, S.return, K)
              }
            }
          } else if (e.tag === 18) {
            if (n === null) {
              S = e;
              try {
                var D = S.stateNode;
                s ? N0(D, !0) : N0(S.stateNode, !1)
              } catch (K) {
                Tt(S, S.return, K)
              }
            }
          } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
            e.child.return = e, e = e.child;
            continue
          }
          if (e === t) break t;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break t;
            n === e && (n = null), e = e.return
          }
          n === e && (n = null), e.sibling.return = e.return, e = e.sibling
        }
        a & 4 && (a = t.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, vs(t, n))));
        break;
      case 19:
        fe(e, t), de(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, vs(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        fe(e, t), de(t)
    }
  }

  function de(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null;) {
          if (Dh(a)) {
            n = a;
            break
          }
          a = a.return
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              u = qr(t);
            gs(t, u, s);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (ja(f, ""), n.flags &= -33);
            var v = qr(t);
            gs(t, v, f);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              N = qr(t);
            Yr(t, N, S);
            break;
          default:
            throw Error(r(161))
        }
      } catch (w) {
        Tt(t, t.return, w)
      }
      t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
  }

  function Lh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null;) {
        var e = t;
        Lh(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling
      }
  }

  function dn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null;) zh(t, e.alternate, e), e = e.sibling
  }

  function fa(t) {
    for (t = t.child; t !== null;) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          wn(4, e, e.return), fa(e);
          break;
        case 1:
          Ke(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Nh(e, e.return, n), fa(e);
          break;
        case 27:
          el(e.stateNode);
        case 26:
        case 5:
          Ke(e, e.return), fa(e);
          break;
        case 22:
          e.memoizedState === null && fa(e);
          break;
        case 30:
          fa(e);
          break;
        default:
          fa(e)
      }
      t = t.sibling
    }
  }

  function hn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
      var a = e.alternate,
        s = t,
        u = e,
        f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          hn(s, u, n), Qi(4, u);
          break;
        case 1:
          if (hn(s, u, n), a = u, s = a.stateNode, typeof s.componentDidMount == "function") try {
            s.componentDidMount()
          } catch (N) {
            Tt(a, a.return, N)
          }
          if (a = u, s = a.updateQueue, s !== null) {
            var v = a.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++) pd(S[s], v)
            } catch (N) {
              Tt(a, a.return, N)
            }
          }
          n && f & 64 && Mh(u), Zi(u, u.return);
          break;
        case 27:
          Ch(u);
        case 26:
        case 5:
          hn(s, u, n), n && a === null && f & 4 && Eh(u), Zi(u, u.return);
          break;
        case 12:
          hn(s, u, n);
          break;
        case 31:
          hn(s, u, n), n && f & 4 && Vh(s, u);
          break;
        case 13:
          hn(s, u, n), n && f & 4 && _h(s, u);
          break;
        case 22:
          u.memoizedState === null && hn(s, u, n), Zi(u, u.return);
          break;
        case 30:
          break;
        default:
          hn(s, u, n)
      }
      e = e.sibling
    }
  }

  function Xr(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && zi(n))
  }

  function Qr(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && zi(t))
  }

  function Ge(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) Hh(t, e, n, a), e = e.sibling
  }

  function Hh(t, e, n, a) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ge(t, e, n, a), s & 2048 && Qi(9, e);
        break;
      case 1:
        Ge(t, e, n, a);
        break;
      case 3:
        Ge(t, e, n, a), s & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && zi(t)));
        break;
      case 12:
        if (s & 2048) {
          Ge(t, e, n, a), t = e.stateNode;
          try {
            var u = e.memoizedProps,
              f = u.id,
              v = u.onPostCommit;
            typeof v == "function" && v(f, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
          } catch (S) {
            Tt(e, e.return, S)
          }
        } else Ge(t, e, n, a);
        break;
      case 31:
        Ge(t, e, n, a);
        break;
      case 13:
        Ge(t, e, n, a);
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, f = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Ge(t, e, n, a) : Ki(t, e) : u._visibility & 2 ? Ge(t, e, n, a) : (u._visibility |= 2, Qa(t, e, n, a, (e.subtreeFlags & 10256) !== 0 || !1)), s & 2048 && Xr(f, e);
        break;
      case 24:
        Ge(t, e, n, a), s & 2048 && Qr(e.alternate, e);
        break;
      default:
        Ge(t, e, n, a)
    }
  }

  function Qa(t, e, n, a, s) {
    for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null;) {
      var u = t,
        f = e,
        v = n,
        S = a,
        N = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Qa(u, f, v, S, s), Qi(8, f);
          break;
        case 23:
          break;
        case 22:
          var w = f.stateNode;
          f.memoizedState !== null ? w._visibility & 2 ? Qa(u, f, v, S, s) : Ki(u, f) : (w._visibility |= 2, Qa(u, f, v, S, s)), s && N & 2048 && Xr(f.alternate, f);
          break;
        case 24:
          Qa(u, f, v, S, s), s && N & 2048 && Qr(f.alternate, f);
          break;
        default:
          Qa(u, f, v, S, s)
      }
      e = e.sibling
    }
  }

  function Ki(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) {
        var n = t,
          a = e,
          s = a.flags;
        switch (a.tag) {
          case 22:
            Ki(n, a), s & 2048 && Xr(a.alternate, a);
            break;
          case 24:
            Ki(n, a), s & 2048 && Qr(a.alternate, a);
            break;
          default:
            Ki(n, a)
        }
        e = e.sibling
      }
  }
  var ki = 8192;

  function Za(t, e, n) {
    if (t.subtreeFlags & ki)
      for (t = t.child; t !== null;) Fh(t, e, n), t = t.sibling
  }

  function Fh(t, e, n) {
    switch (t.tag) {
      case 26:
        Za(t, e, n), t.flags & ki && t.memoizedState !== null && mv(n, Ye, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Za(t, e, n);
        break;
      case 3:
      case 4:
        var a = Ye;
        Ye = zs(t.stateNode.containerInfo), Za(t, e, n), Ye = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = ki, ki = 16777216, Za(t, e, n), ki = a) : Za(t, e, n));
        break;
      default:
        Za(t, e, n)
    }
  }

  function qh(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do e = t.sibling, t.sibling = null, t = e; while (t !== null)
    }
  }

  function Ji(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          kt = a, Gh(a, t)
        }
      qh(t)
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) Yh(t), t = t.sibling
  }

  function Yh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ji(t), t.flags & 2048 && wn(9, t, t.return);
        break;
      case 3:
        Ji(t);
        break;
      case 12:
        Ji(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, xs(t)) : Ji(t);
        break;
      default:
        Ji(t)
    }
  }

  function xs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          kt = a, Gh(a, t)
        }
      qh(t)
    }
    for (t = t.child; t !== null;) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          wn(8, e, e.return), xs(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, xs(e));
          break;
        default:
          xs(e)
      }
      t = t.sibling
    }
  }

  function Gh(t, e) {
    for (; kt !== null;) {
      var n = kt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          wn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++
          }
          break;
        case 24:
          zi(n.memoizedState.cache)
      }
      if (a = n.child, a !== null) a.return = n, kt = a;
      else t: for (n = t; kt !== null;) {
        a = kt;
        var s = a.sibling,
          u = a.return;
        if (Oh(a), a === n) {
          kt = null;
          break t
        }
        if (s !== null) {
          s.return = u, kt = s;
          break t
        }
        kt = u
      }
    }
  }
  var Dg = {
      getCacheForType: function (t) {
        var e = $t(Ft),
          n = e.data.get(t);
        return n === void 0 && (n = t(), e.data.set(t, n)), n
      },
      cacheSignal: function () {
        return $t(Ft).controller.signal
      }
    },
    Cg = typeof WeakMap == "function" ? WeakMap : Map,
    vt = 0,
    Mt = null,
    ut = null,
    dt = 0,
    St = 0,
    Be = null,
    zn = !1,
    Ka = !1,
    Zr = !1,
    mn = 0,
    Rt = 0,
    On = 0,
    da = 0,
    Kr = 0,
    Ae = 0,
    ka = 0,
    Pi = null,
    he = null,
    kr = !1,
    bs = 0,
    Xh = 0,
    Ss = 1 / 0,
    Ts = null,
    Rn = null,
    Zt = 0,
    Vn = null,
    Ja = null,
    pn = 0,
    Jr = 0,
    Pr = null,
    Qh = null,
    Wi = 0,
    Wr = null;

  function je() {
    return (vt & 2) !== 0 && dt !== 0 ? dt & -dt : z.T !== null ? au() : of ()
  }

  function Zh() {
    if (Ae === 0)
      if ((dt & 536870912) === 0 || mt) {
        var t = Cl;
        Cl <<= 1, (Cl & 3932160) === 0 && (Cl = 262144), Ae = t
      } else Ae = 536870912;
    return t = Se.current, t !== null && (t.flags |= 32), Ae
  }

  function me(t, e, n) {
    (t === Mt && (St === 2 || St === 9) || t.cancelPendingCommit !== null) && (Pa(t, 0), _n(t, dt, Ae, !1)), vi(t, n), ((vt & 2) === 0 || t !== Mt) && (t === Mt && ((vt & 2) === 0 && (da |= n), Rt === 4 && _n(t, dt, Ae, !1)), ke(t))
  }

  function Kh(t, e, n) {
    if ((vt & 6) !== 0) throw Error(r(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || gi(t, e),
      s = a ? Og(t, e) : Ir(t, e, !0),
      u = a;
    do {
      if (s === 0) {
        Ka && !a && _n(t, e, 0, !1);
        break
      } else {
        if (n = t.current.alternate, u && !wg(n)) {
          s = Ir(t, e, !1), u = !1;
          continue
        }
        if (s === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u) var f = 0;
          else f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            e = f;
            t: {
              var v = t;s = Pi;
              var S = v.current.memoizedState.isDehydrated;
              if (S && (Pa(v, f).flags |= 256), f = Ir(v, f, !1), f !== 2) {
                if (Zr && !S) {
                  v.errorRecoveryDisabledLanes |= u, da |= u, s = 4;
                  break t
                }
                u = he, he = s, u !== null && (he === null ? he = u : he.push.apply(he, u))
              }
              s = f
            }
            if (u = !1, s !== 2) continue
          }
        }
        if (s === 1) {
          Pa(t, 0), _n(t, e, 0, !0);
          break
        }
        t: {
          switch (a = t, u = s, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              _n(a, e, Ae, !zn);
              break t;
            case 2:
              he = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329))
          }
          if ((e & 62914560) === e && (s = bs + 300 - ye(), 10 < s)) {
            if (_n(a, e, Ae, !zn), zl(a, 0, !0) !== 0) break t;
            pn = e, a.timeoutHandle = A0(kh.bind(null, a, n, he, Ts, kr, e, Ae, da, ka, zn, u, "Throttled", -0, 0), s);
            break t
          }
          kh(a, n, he, Ts, kr, e, Ae, da, ka, zn, u, null, -0, 0)
        }
      }
      break
    } while (!0);
    ke(t)
  }

  function kh(t, e, n, a, s, u, f, v, S, N, w, V, E, D) {
    if (t.timeoutHandle = -1, V = e.subtreeFlags, V & 8192 || (V & 16785408) === 16785408) {
      V = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ie
      }, Fh(e, u, V);
      var K = (u & 62914560) === u ? bs - ye() : (u & 4194048) === u ? Xh - ye() : 0;
      if (K = pv(V, K), K !== null) {
        pn = u, t.cancelPendingCommit = K(n0.bind(null, t, e, u, n, a, s, f, v, S, w, V, null, E, D)), _n(t, u, f, !N);
        return
      }
    }
    n0(t, e, u, n, a, s, f, v, S)
  }

  function wg(t) {
    for (var e = t;;) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var s = n[a],
            u = s.getSnapshot;
          s = s.value;
          try {
            if (!xe(u(), s)) return !1
          } catch {
            return !1
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) return !0;
          e = e.return
        }
        e.sibling.return = e.return, e = e.sibling
      }
    }
    return !0
  }

  function _n(t, e, n, a) {
    e &= ~Kr, e &= ~da, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var s = e; 0 < s;) {
      var u = 31 - ve(s),
        f = 1 << u;
      a[u] = -1, s &= ~f
    }
    n !== 0 && af(t, n, e)
  }

  function Bs() {
    return (vt & 6) === 0 ? ($i(0), !1) : !0
  }

  function $r() {
    if (ut !== null) {
      if (St === 0) var t = ut.return;
      else t = ut, an = aa = null, mr(t), Fa = null, Ri = 0, t = ut;
      for (; t !== null;) jh(t.alternate, t), t = t.return;
      ut = null
    }
  }

  function Pa(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1, Wg(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), pn = 0, $r(), Mt = t, ut = n = en(t.current, null), dt = e, St = 0, Be = null, zn = !1, Ka = gi(t, e), Zr = !1, ka = Ae = Kr = da = On = Rt = 0, he = Pi = null, kr = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a;) {
        var s = 31 - ve(a),
          u = 1 << s;
        e |= t[s], a &= ~u
      }
    return mn = e, Xl(), n
  }

  function Jh(t, e) {
    st = null, z.H = Yi, e === Ha || e === $l ? (e = fd(), St = 3) : e === nr ? (e = fd(), St = 4) : St = e === Cr ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Be = e, ut === null && (Rt = 1, ds(t, Ce(e, t.current)))
  }

  function Ph() {
    var t = Se.current;
    return t === null ? !0 : (dt & 4194048) === dt ? Re === null : (dt & 62914560) === dt || (dt & 536870912) !== 0 ? t === Re : !1
  }

  function Wh() {
    var t = z.H;
    return z.H = Yi, t === null ? Yi : t
  }

  function $h() {
    var t = z.A;
    return z.A = Dg, t
  }

  function As() {
    Rt = 4, zn || (dt & 4194048) !== dt && Se.current !== null || (Ka = !0), (On & 134217727) === 0 && (da & 134217727) === 0 || Mt === null || _n(Mt, dt, Ae, !1)
  }

  function Ir(t, e, n) {
    var a = vt;
    vt |= 2;
    var s = Wh(),
      u = $h();
    (Mt !== t || dt !== e) && (Ts = null, Pa(t, e)), e = !1;
    var f = Rt;
    t: do try {
        if (St !== 0 && ut !== null) {
          var v = ut,
            S = Be;
          switch (St) {
            case 8:
              $r(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Se.current === null && (e = !0);
              var N = St;
              if (St = 0, Be = null, Wa(t, v, S, N), n && Ka) {
                f = 0;
                break t
              }
              break;
            default:
              N = St, St = 0, Be = null, Wa(t, v, S, N)
          }
        }
        zg(), f = Rt;
        break
      } catch (w) {
        Jh(t, w)
      }
      while (!0);
      return e && t.shellSuspendCounter++, an = aa = null, vt = a, z.H = s, z.A = u, ut === null && (Mt = null, dt = 0, Xl()), f
  }

  function zg() {
    for (; ut !== null;) Ih(ut)
  }

  function Og(t, e) {
    var n = vt;
    vt |= 2;
    var a = Wh(),
      s = $h();
    Mt !== t || dt !== e ? (Ts = null, Ss = ye() + 500, Pa(t, e)) : Ka = gi(t, e);
    t: do try {
        if (St !== 0 && ut !== null) {
          e = ut;
          var u = Be;
          e: switch (St) {
            case 1:
              St = 0, Be = null, Wa(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (ud(u)) {
                St = 0, Be = null, t0(e);
                break
              }
              e = function () {
                St !== 2 && St !== 9 || Mt !== t || (St = 7), ke(t)
              }, u.then(e, e);
              break t;
            case 3:
              St = 7;
              break t;
            case 4:
              St = 5;
              break t;
            case 7:
              ud(u) ? (St = 0, Be = null, t0(e)) : (St = 0, Be = null, Wa(t, e, u, 7));
              break;
            case 5:
              var f = null;
              switch (ut.tag) {
                case 26:
                  f = ut.memoizedState;
                case 5:
                case 27:
                  var v = ut;
                  if (f ? H0(f) : v.stateNode.complete) {
                    St = 0, Be = null;
                    var S = v.sibling;
                    if (S !== null) ut = S;
                    else {
                      var N = v.return;
                      N !== null ? (ut = N, js(N)) : ut = null
                    }
                    break e
                  }
              }
              St = 0, Be = null, Wa(t, e, u, 5);
              break;
            case 6:
              St = 0, Be = null, Wa(t, e, u, 6);
              break;
            case 8:
              $r(), Rt = 6;
              break t;
            default:
              throw Error(r(462))
          }
        }
        Rg();
        break
      } catch (w) {
        Jh(t, w)
      }
      while (!0);
      return an = aa = null, z.H = a, z.A = s, vt = n, ut !== null ? 0 : (Mt = null, dt = 0, Xl(), Rt)
  }

  function Rg() {
    for (; ut !== null && !ay();) Ih(ut)
  }

  function Ih(t) {
    var e = Bh(t.alternate, t, mn);
    t.memoizedProps = t.pendingProps, e === null ? js(t) : ut = e
  }

  function t0(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = gh(n, e, e.pendingProps, e.type, void 0, dt);
        break;
      case 11:
        e = gh(n, e, e.pendingProps, e.type.render, e.ref, dt);
        break;
      case 5:
        mr(e);
      default:
        jh(n, e), e = ut = $f(e, mn), e = Bh(n, e, mn)
    }
    t.memoizedProps = t.pendingProps, e === null ? js(t) : ut = e
  }

  function Wa(t, e, n, a) {
    an = aa = null, mr(e), Fa = null, Ri = 0;
    var s = e.return;
    try {
      if (Tg(t, s, e, n, dt)) {
        Rt = 1, ds(t, Ce(n, t.current)), ut = null;
        return
      }
    } catch (u) {
      if (s !== null) throw ut = s, u;
      Rt = 1, ds(t, Ce(n, t.current)), ut = null;
      return
    }
    e.flags & 32768 ? (mt || a === 1 ? t = !0 : Ka || (dt & 536870912) !== 0 ? t = !1 : (zn = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Se.current, a !== null && a.tag === 13 && (a.flags |= 16384))), e0(e, t)) : js(e)
  }

  function js(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        e0(e, zn);
        return
      }
      t = e.return;
      var n = jg(e.alternate, e, mn);
      if (n !== null) {
        ut = n;
        return
      }
      if (e = e.sibling, e !== null) {
        ut = e;
        return
      }
      ut = e = t
    } while (e !== null);
    Rt === 0 && (Rt = 5)
  }

  function e0(t, e) {
    do {
      var n = Mg(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, ut = n;
        return
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        ut = t;
        return
      }
      ut = t = n
    } while (t !== null);
    Rt = 6, ut = null
  }

  function n0(t, e, n, a, s, u, f, v, S) {
    t.cancelPendingCommit = null;
    do Ms(); while (Zt !== 0);
    if ((vt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (u = e.lanes | e.childLanes, u |= qo, hy(t, n, u, f, v, S), t === Mt && (ut = Mt = null, dt = 0), Ja = e, Vn = t, pn = n, Jr = u, Pr = s, Qh = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Lg(El, function () {
          return o0(), null
        })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = z.T, z.T = null, s = L.p, L.p = 2, f = vt, vt |= 4;
        try {
          Ng(t, e, n)
        } finally {
          vt = f, L.p = s, z.T = a
        }
      }
      Zt = 1, a0(), i0(), l0()
    }
  }

  function a0() {
    if (Zt === 1) {
      Zt = 0;
      var t = Vn,
        e = Ja,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        n = z.T, z.T = null;
        var a = L.p;
        L.p = 2;
        var s = vt;
        vt |= 4;
        try {
          Uh(e, t);
          var u = fu,
            f = Gf(t.containerInfo),
            v = u.focusedElem,
            S = u.selectionRange;
          if (f !== v && v && v.ownerDocument && Yf(v.ownerDocument.documentElement, v)) {
            if (S !== null && _o(v)) {
              var N = S.start,
                w = S.end;
              if (w === void 0 && (w = N), "selectionStart" in v) v.selectionStart = N, v.selectionEnd = Math.min(w, v.value.length);
              else {
                var V = v.ownerDocument || document,
                  E = V && V.defaultView || window;
                if (E.getSelection) {
                  var D = E.getSelection(),
                    K = v.textContent.length,
                    et = Math.min(S.start, K),
                    jt = S.end === void 0 ? et : Math.min(S.end, K);
                  !D.extend && et > jt && (f = jt, jt = et, et = f);
                  var j = qf(v, et),
                    T = qf(v, jt);
                  if (j && T && (D.rangeCount !== 1 || D.anchorNode !== j.node || D.anchorOffset !== j.offset || D.focusNode !== T.node || D.focusOffset !== T.offset)) {
                    var M = V.createRange();
                    M.setStart(j.node, j.offset), D.removeAllRanges(), et > jt ? (D.addRange(M), D.extend(T.node, T.offset)) : (M.setEnd(T.node, T.offset), D.addRange(M))
                  }
                }
              }
            }
            for (V = [], D = v; D = D.parentNode;) D.nodeType === 1 && V.push({
              element: D,
              left: D.scrollLeft,
              top: D.scrollTop
            });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < V.length; v++) {
              var O = V[v];
              O.element.scrollLeft = O.left, O.element.scrollTop = O.top
            }
          }
          Ls = !!cu, fu = cu = null
        } finally {
          vt = s, L.p = a, z.T = n
        }
      }
      t.current = e, Zt = 2
    }
  }

  function i0() {
    if (Zt === 2) {
      Zt = 0;
      var t = Vn,
        e = Ja,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = z.T, z.T = null;
        var a = L.p;
        L.p = 2;
        var s = vt;
        vt |= 4;
        try {
          zh(t, e.alternate, e)
        } finally {
          vt = s, L.p = a, z.T = n
        }
      }
      Zt = 3
    }
  }

  function l0() {
    if (Zt === 4 || Zt === 3) {
      Zt = 0, iy();
      var t = Vn,
        e = Ja,
        n = pn,
        a = Qh;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Zt = 5 : (Zt = 0, Ja = Vn = null, s0(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (s === 0 && (Rn = null), go(n), e = e.stateNode, ge && typeof ge.onCommitFiberRoot == "function") try {
        ge.onCommitFiberRoot(yi, e, void 0, (e.current.flags & 128) === 128)
      } catch {}
      if (a !== null) {
        e = z.T, s = L.p, L.p = 2, z.T = null;
        try {
          for (var u = t.onRecoverableError, f = 0; f < a.length; f++) {
            var v = a[f];
            u(v.value, {
              componentStack: v.stack
            })
          }
        } finally {
          z.T = e, L.p = s
        }
      }(pn & 3) !== 0 && Ms(), ke(t), s = t.pendingLanes, (n & 261930) !== 0 && (s & 42) !== 0 ? t === Wr ? Wi++ : (Wi = 0, Wr = t) : Wi = 0, $i(0)
    }
  }

  function s0(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, zi(e)))
  }

  function Ms() {
    return a0(), i0(), l0(), o0()
  }

  function o0() {
    if (Zt !== 5) return !1;
    var t = Vn,
      e = Jr;
    Jr = 0;
    var n = go(pn),
      a = z.T,
      s = L.p;
    try {
      L.p = 32 > n ? 32 : n, z.T = null, n = Pr, Pr = null;
      var u = Vn,
        f = pn;
      if (Zt = 0, Ja = Vn = null, pn = 0, (vt & 6) !== 0) throw Error(r(331));
      var v = vt;
      if (vt |= 4, Yh(u.current), Hh(u, u.current, f, n), vt = v, $i(0, !1), ge && typeof ge.onPostCommitFiberRoot == "function") try {
        ge.onPostCommitFiberRoot(yi, u)
      } catch {}
      return !0
    } finally {
      L.p = s, z.T = a, s0(t, e)
    }
  }

  function r0(t, e, n) {
    e = Ce(n, e), e = Dr(t.stateNode, e, 2), t = En(t, e, 2), t !== null && (vi(t, 2), ke(t))
  }

  function Tt(t, e, n) {
    if (t.tag === 3) r0(t, t, n);
    else
      for (; e !== null;) {
        if (e.tag === 3) {
          r0(e, t, n);
          break
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Rn === null || !Rn.has(a))) {
            t = Ce(n, t), n = uh(2), a = En(e, n, 2), a !== null && (ch(n, a, e, t), vi(a, 2), ke(a));
            break
          }
        }
        e = e.return
      }
  }

  function tu(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Cg;
      var s = new Set;
      a.set(e, s)
    } else s = a.get(e), s === void 0 && (s = new Set, a.set(e, s));
    s.has(n) || (Zr = !0, s.add(n), t = Vg.bind(null, t, e, n), e.then(t, t))
  }

  function Vg(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Mt === t && (dt & n) === n && (Rt === 4 || Rt === 3 && (dt & 62914560) === dt && 300 > ye() - bs ? (vt & 2) === 0 && Pa(t, 0) : Kr |= n, ka === dt && (ka = 0)), ke(t)
  }

  function u0(t, e) {
    e === 0 && (e = nf()), t = ta(t, e), t !== null && (vi(t, e), ke(t))
  }

  function _g(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), u0(t, n)
  }

  function Ug(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314))
    }
    a !== null && a.delete(e), u0(t, n)
  }

  function Lg(t, e) {
    return ho(t, e)
  }
  var Ns = null,
    $a = null,
    eu = !1,
    Es = !1,
    nu = !1,
    Un = 0;

  function ke(t) {
    t !== $a && t.next === null && ($a === null ? Ns = $a = t : $a = $a.next = t), Es = !0, eu || (eu = !0, Fg())
  }

  function $i(t, e) {
    if (!nu && Es) {
      nu = !0;
      do
        for (var n = !1, a = Ns; a !== null;) {
          if (t !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var f = a.suspendedLanes,
                v = a.pingedLanes;
              u = (1 << 31 - ve(42 | t) + 1) - 1, u &= s & ~(f & ~v), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
            }
            u !== 0 && (n = !0, h0(a, u))
          } else u = dt, u = zl(a, a === Mt ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || gi(a, u) || (n = !0, h0(a, u));
          a = a.next
        }
      while (n);
      nu = !1
    }
  }

  function Hg() {
    c0()
  }

  function c0() {
    Es = eu = !1;
    var t = 0;
    Un !== 0 && Pg() && (t = Un);
    for (var e = ye(), n = null, a = Ns; a !== null;) {
      var s = a.next,
        u = f0(a, e);
      u === 0 ? (a.next = null, n === null ? Ns = s : n.next = s, s === null && ($a = n)) : (n = a, (t !== 0 || (u & 3) !== 0) && (Es = !0)), a = s
    }
    Zt !== 0 && Zt !== 5 || $i(t), Un !== 0 && (Un = 0)
  }

  function f0(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, s = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u;) {
      var f = 31 - ve(u),
        v = 1 << f,
        S = s[f];
      S === -1 ? ((v & n) === 0 || (v & a) !== 0) && (s[f] = dy(v, e)) : S <= e && (t.expiredLanes |= v), u &= ~v
    }
    if (e = Mt, n = dt, n = zl(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, n === 0 || t === e && (St === 2 || St === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && mo(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || gi(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && mo(a), go(n)) {
        case 2:
        case 8:
          n = tf;
          break;
        case 32:
          n = El;
          break;
        case 268435456:
          n = ef;
          break;
        default:
          n = El
      }
      return a = d0.bind(null, t), n = ho(n, a), t.callbackPriority = e, t.callbackNode = n, e
    }
    return a !== null && a !== null && mo(a), t.callbackPriority = 2, t.callbackNode = null, 2
  }

  function d0(t, e) {
    if (Zt !== 0 && Zt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (Ms() && t.callbackNode !== n) return null;
    var a = dt;
    return a = zl(t, t === Mt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (Kh(t, a, e), f0(t, ye()), t.callbackNode != null && t.callbackNode === n ? d0.bind(null, t) : null)
  }

  function h0(t, e) {
    if (Ms()) return null;
    Kh(t, e, !0)
  }

  function Fg() {
    $g(function () {
      (vt & 6) !== 0 ? ho(Ic, Hg) : c0()
    })
  }

  function au() {
    if (Un === 0) {
      var t = Ua;
      t === 0 && (t = Dl, Dl <<= 1, (Dl & 261888) === 0 && (Dl = 256)), Un = t
    }
    return Un
  }

  function m0(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : _l("" + t)
  }

  function p0(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t
  }

  function qg(t, e, n, a, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var u = m0((s[re] || null).action),
        f = a.submitter;
      f && (e = (e = f[re] || null) ? m0(e.formAction) : f.getAttribute("formAction"), e !== null && (u = e, f = null));
      var v = new Fl("action", "action", null, a, s);
      t.push({
        event: v,
        listeners: [{
          instance: null,
          listener: function () {
            if (a.defaultPrevented) {
              if (Un !== 0) {
                var S = f ? p0(s, f) : new FormData(s);
                Br(n, {
                  pending: !0,
                  data: S,
                  method: s.method,
                  action: u
                }, null, S)
              }
            } else typeof u == "function" && (v.preventDefault(), S = f ? p0(s, f) : new FormData(s), Br(n, {
              pending: !0,
              data: S,
              method: s.method,
              action: u
            }, u, S))
          },
          currentTarget: s
        }]
      })
    }
  }
  for (var iu = 0; iu < Fo.length; iu++) {
    var lu = Fo[iu],
      Yg = lu.toLowerCase(),
      Gg = lu[0].toUpperCase() + lu.slice(1);
    qe(Yg, "on" + Gg)
  }
  qe(Zf, "onAnimationEnd"), qe(Kf, "onAnimationIteration"), qe(kf, "onAnimationStart"), qe("dblclick", "onDoubleClick"), qe("focusin", "onFocus"), qe("focusout", "onBlur"), qe(lg, "onTransitionRun"), qe(sg, "onTransitionStart"), qe(og, "onTransitionCancel"), qe(Jf, "onTransitionEnd"), Ba("onMouseEnter", ["mouseout", "mouseover"]), Ba("onMouseLeave", ["mouseout", "mouseover"]), Ba("onPointerEnter", ["pointerout", "pointerover"]), Ba("onPointerLeave", ["pointerout", "pointerover"]), Pn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Pn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Pn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Pn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Pn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Xg = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ii));

  function y0(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n],
        s = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var v = a[f],
              S = v.instance,
              N = v.currentTarget;
            if (v = v.listener, S !== u && s.isPropagationStopped()) break t;
            u = v, s.currentTarget = N;
            try {
              u(s)
            } catch (w) {
              Gl(w)
            }
            s.currentTarget = null, u = S
          } else
            for (f = 0; f < a.length; f++) {
              if (v = a[f], S = v.instance, N = v.currentTarget, v = v.listener, S !== u && s.isPropagationStopped()) break t;
              u = v, s.currentTarget = N;
              try {
                u(s)
              } catch (w) {
                Gl(w)
              }
              s.currentTarget = null, u = S
            }
      }
    }
  }

  function ct(t, e) {
    var n = e[vo];
    n === void 0 && (n = e[vo] = new Set);
    var a = t + "__bubble";
    n.has(a) || (g0(e, t, 2, !1), n.add(a))
  }

  function su(t, e, n) {
    var a = 0;
    e && (a |= 4), g0(n, t, a, e)
  }
  var Ds = "_reactListening" + Math.random().toString(36).slice(2);

  function ou(t) {
    if (!t[Ds]) {
      t[Ds] = !0, cf.forEach(function (n) {
        n !== "selectionchange" && (Xg.has(n) || su(n, !1, t), su(n, !0, t))
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ds] || (e[Ds] = !0, su("selectionchange", !1, e))
    }
  }

  function g0(t, e, n, a) {
    switch (Z0(e)) {
      case 2:
        var s = vv;
        break;
      case 8:
        s = xv;
        break;
      default:
        s = Tu
    }
    n = s.bind(null, e, n, t), s = void 0, !No || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), a ? s !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: s
    }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
      passive: s
    }) : t.addEventListener(e, n, !1)
  }

  function ru(t, e, n, a, s) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null) t: for (;;) {
      if (a === null) return;
      var f = a.tag;
      if (f === 3 || f === 4) {
        var v = a.stateNode.containerInfo;
        if (v === s) break;
        if (f === 4)
          for (f = a.return; f !== null;) {
            var S = f.tag;
            if ((S === 3 || S === 4) && f.stateNode.containerInfo === s) return;
            f = f.return
          }
        for (; v !== null;) {
          if (f = ba(v), f === null) return;
          if (S = f.tag, S === 5 || S === 6 || S === 26 || S === 27) {
            a = u = f;
            continue t
          }
          v = v.parentNode
        }
      }
      a = a.return
    }
    Tf(function () {
      var N = u,
        w = jo(n),
        V = [];
      t: {
        var E = Pf.get(t);
        if (E !== void 0) {
          var D = Fl,
            K = t;
          switch (t) {
            case "keypress":
              if (Ll(n) === 0) break t;
            case "keydown":
            case "keyup":
              D = Uy;
              break;
            case "focusin":
              K = "focus", D = wo;
              break;
            case "focusout":
              K = "blur", D = wo;
              break;
            case "beforeblur":
            case "afterblur":
              D = wo;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              D = jf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = jy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = Fy;
              break;
            case Zf:
            case Kf:
            case kf:
              D = Ey;
              break;
            case Jf:
              D = Yy;
              break;
            case "scroll":
            case "scrollend":
              D = By;
              break;
            case "wheel":
              D = Xy;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = Cy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = Nf;
              break;
            case "toggle":
            case "beforetoggle":
              D = Zy
          }
          var et = (e & 4) !== 0,
            jt = !et && (t === "scroll" || t === "scrollend"),
            j = et ? E !== null ? E + "Capture" : null : E;
          et = [];
          for (var T = N, M; T !== null;) {
            var O = T;
            if (M = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || M === null || j === null || (O = Si(T, j), O != null && et.push(tl(T, O, M))), jt) break;
            T = T.return
          }
          0 < et.length && (E = new D(E, K, null, n, w), V.push({
            event: E,
            listeners: et
          }))
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (E = t === "mouseover" || t === "pointerover", D = t === "mouseout" || t === "pointerout", E && n !== Ao && (K = n.relatedTarget || n.fromElement) && (ba(K) || K[xa])) break t;
          if ((D || E) && (E = w.window === w ? w : (E = w.ownerDocument) ? E.defaultView || E.parentWindow : window, D ? (K = n.relatedTarget || n.toElement, D = N, K = K ? ba(K) : null, K !== null && (jt = m(K), et = K.tag, K !== jt || et !== 5 && et !== 27 && et !== 6) && (K = null)) : (D = null, K = N), D !== K)) {
            if (et = jf, O = "onMouseLeave", j = "onMouseEnter", T = "mouse", (t === "pointerout" || t === "pointerover") && (et = Nf, O = "onPointerLeave", j = "onPointerEnter", T = "pointer"), jt = D == null ? E : bi(D), M = K == null ? E : bi(K), E = new et(O, T + "leave", D, n, w), E.target = jt, E.relatedTarget = M, O = null, ba(w) === N && (et = new et(j, T + "enter", K, n, w), et.target = M, et.relatedTarget = jt, O = et), jt = O, D && K) e: {
              for (et = Qg, j = D, T = K, M = 0, O = j; O; O = et(O)) M++;O = 0;
              for (var I = T; I; I = et(I)) O++;
              for (; 0 < M - O;) j = et(j),
              M--;
              for (; 0 < O - M;) T = et(T),
              O--;
              for (; M--;) {
                if (j === T || T !== null && j === T.alternate) {
                  et = j;
                  break e
                }
                j = et(j), T = et(T)
              }
              et = null
            }
            else et = null;
            D !== null && v0(V, E, D, et, !1), K !== null && jt !== null && v0(V, jt, K, et, !0)
          }
        }
        t: {
          if (E = N ? bi(N) : window, D = E.nodeName && E.nodeName.toLowerCase(), D === "select" || D === "input" && E.type === "file") var yt = Vf;
          else if (Of(E))
            if (_f) yt = ng;
            else {
              yt = tg;
              var P = Iy
            }
          else D = E.nodeName,
          !D || D.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? N && Bo(N.elementType) && (yt = Vf) : yt = eg;
          if (yt && (yt = yt(t, N))) {
            Rf(V, yt, n, w);
            break t
          }
          P && P(t, E, N),
          t === "focusout" && N && E.type === "number" && N.memoizedProps.value != null && To(E, "number", E.value)
        }
        switch (P = N ? bi(N) : window, t) {
          case "focusin":
            (Of(P) || P.contentEditable === "true") && (Da = P, Uo = N, Di = null);
            break;
          case "focusout":
            Di = Uo = Da = null;
            break;
          case "mousedown":
            Lo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Lo = !1, Xf(V, n, w);
            break;
          case "selectionchange":
            if (ig) break;
          case "keydown":
          case "keyup":
            Xf(V, n, w)
        }
        var ot;
        if (Oo) t: {
          switch (t) {
            case "compositionstart":
              var ht = "onCompositionStart";
              break t;
            case "compositionend":
              ht = "onCompositionEnd";
              break t;
            case "compositionupdate":
              ht = "onCompositionUpdate";
              break t
          }
          ht = void 0
        }
        else Ea ? wf(t, n) && (ht = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (ht = "onCompositionStart");ht && (Ef && n.locale !== "ko" && (Ea || ht !== "onCompositionStart" ? ht === "onCompositionEnd" && Ea && (ot = Bf()) : (Sn = w, Eo = "value" in Sn ? Sn.value : Sn.textContent, Ea = !0)), P = Cs(N, ht), 0 < P.length && (ht = new Mf(ht, t, null, n, w), V.push({
          event: ht,
          listeners: P
        }), ot ? ht.data = ot : (ot = zf(n), ot !== null && (ht.data = ot)))),
        (ot = ky ? Jy(t, n) : Py(t, n)) && (ht = Cs(N, "onBeforeInput"), 0 < ht.length && (P = new Mf("onBeforeInput", "beforeinput", null, n, w), V.push({
          event: P,
          listeners: ht
        }), P.data = ot)),
        qg(V, t, N, n, w)
      }
      y0(V, e)
    })
  }

  function tl(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    }
  }

  function Cs(t, e) {
    for (var n = e + "Capture", a = []; t !== null;) {
      var s = t,
        u = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || u === null || (s = Si(t, n), s != null && a.unshift(tl(t, s, u)), s = Si(t, e), s != null && a.push(tl(t, s, u))), t.tag === 3) return a;
      t = t.return
    }
    return []
  }

  function Qg(t) {
    if (t === null) return null;
    do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
    return t || null
  }

  function v0(t, e, n, a, s) {
    for (var u = e._reactName, f = []; n !== null && n !== a;) {
      var v = n,
        S = v.alternate,
        N = v.stateNode;
      if (v = v.tag, S !== null && S === a) break;
      v !== 5 && v !== 26 && v !== 27 || N === null || (S = N, s ? (N = Si(n, u), N != null && f.unshift(tl(n, N, S))) : s || (N = Si(n, u), N != null && f.push(tl(n, N, S)))), n = n.return
    }
    f.length !== 0 && t.push({
      event: e,
      listeners: f
    })
  }
  var Zg = /\r\n?/g,
    Kg = /\u0000|\uFFFD/g;

  function x0(t) {
    return (typeof t == "string" ? t : "" + t).replace(Zg, `
`).replace(Kg, "")
  }

  function b0(t, e) {
    return e = x0(e), x0(t) === e
  }

  function At(t, e, n, a, s, u) {
    switch (n) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || ja(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && ja(t, "" + a);
        break;
      case "className":
        Rl(t, "class", a);
        break;
      case "tabIndex":
        Rl(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Rl(t, n, a);
        break;
      case "style":
        bf(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          Rl(t, "data", a);
          break
        }
        case "src":
        case "href":
          if (a === "" && (e !== "a" || n !== "href")) {
            t.removeAttribute(n);
            break
          }
          if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(n);
            break
          }
          a = _l("" + a), t.setAttribute(n, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break
          } else typeof u == "function" && (n === "formAction" ? (e !== "input" && At(t, e, "name", s.name, s, null), At(t, e, "formEncType", s.formEncType, s, null), At(t, e, "formMethod", s.formMethod, s, null), At(t, e, "formTarget", s.formTarget, s, null)) : (At(t, e, "encType", s.encType, s, null), At(t, e, "method", s.method, s, null), At(t, e, "target", s.target, s, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(n);
            break
          }
          a = _l("" + a), t.setAttribute(n, a);
          break;
        case "onClick":
          a != null && (t.onclick = Ie);
          break;
        case "onScroll":
          a != null && ct("scroll", t);
          break;
        case "onScrollEnd":
          a != null && ct("scrollend", t);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
            if (n = a.__html, n != null) {
              if (s.children != null) throw Error(r(60));
              t.innerHTML = n
            }
          }
          break;
        case "multiple":
          t.multiple = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "muted":
          t.muted = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
            t.removeAttribute("xlink:href");
            break
          }
          n = _l("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "" + a) : t.removeAttribute(n);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
          break;
        case "capture":
        case "download":
          a === !0 ? t.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
          break;
        case "rowSpan":
        case "start":
          a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
          break;
        case "popover":
          ct("beforetoggle", t), ct("toggle", t), Ol(t, "popover", a);
          break;
        case "xlinkActuate":
          $e(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          $e(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          $e(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          $e(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          $e(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          $e(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          $e(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          $e(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          $e(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          Ol(t, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Sy.get(n) || n, Ol(t, n, a))
    }
  }

  function uu(t, e, n, a, s, u) {
    switch (n) {
      case "style":
        bf(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (n = a.__html, n != null) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = n
          }
        }
        break;
      case "children":
        typeof a == "string" ? ja(t, a) : (typeof a == "number" || typeof a == "bigint") && ja(t, "" + a);
        break;
      case "onScroll":
        a != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ct("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Ie);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ff.hasOwnProperty(n)) t: {
          if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), e = n.slice(2, s ? n.length - 7 : void 0), u = t[re] || null, u = u != null ? u[n] : null, typeof u == "function" && t.removeEventListener(e, u, s), typeof a == "function")) {
            typeof u != "function" && u !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, a, s);
            break t
          }
          n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : Ol(t, n, a)
        }
    }
  }

  function te(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ct("error", t), ct("load", t);
        var a = !1,
          s = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var f = n[u];
            if (f != null) switch (u) {
              case "src":
                a = !0;
                break;
              case "srcSet":
                s = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                At(t, e, u, f, n, null)
            }
          } s && At(t, e, "srcSet", n.srcSet, n, null), a && At(t, e, "src", n.src, n, null);
        return;
      case "input":
        ct("invalid", t);
        var v = u = f = s = null,
          S = null,
          N = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var w = n[a];
            if (w != null) switch (a) {
              case "name":
                s = w;
                break;
              case "type":
                f = w;
                break;
              case "checked":
                S = w;
                break;
              case "defaultChecked":
                N = w;
                break;
              case "value":
                u = w;
                break;
              case "defaultValue":
                v = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(r(137, e));
                break;
              default:
                At(t, e, a, w, n, null)
            }
          } yf(t, u, v, S, N, f, s, !1);
        return;
      case "select":
        ct("invalid", t), a = f = u = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (v = n[s], v != null)) switch (s) {
            case "value":
              u = v;
              break;
            case "defaultValue":
              f = v;
              break;
            case "multiple":
              a = v;
            default:
              At(t, e, s, v, n, null)
          }
        e = u, n = f, t.multiple = !!a, e != null ? Aa(t, !!a, e, !1) : n != null && Aa(t, !!a, n, !0);
        return;
      case "textarea":
        ct("invalid", t), u = s = a = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (v = n[f], v != null)) switch (f) {
            case "value":
              a = v;
              break;
            case "defaultValue":
              s = v;
              break;
            case "children":
              u = v;
              break;
            case "dangerouslySetInnerHTML":
              if (v != null) throw Error(r(91));
              break;
            default:
              At(t, e, f, v, n, null)
          }
        vf(t, a, s, u);
        return;
      case "option":
        for (S in n)
          if (n.hasOwnProperty(S) && (a = n[S], a != null)) switch (S) {
            case "selected":
              t.selected = a && typeof a != "function" && typeof a != "symbol";
              break;
            default:
              At(t, e, S, a, n, null)
          }
        return;
      case "dialog":
        ct("beforetoggle", t), ct("toggle", t), ct("cancel", t), ct("close", t);
        break;
      case "iframe":
      case "object":
        ct("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ii.length; a++) ct(Ii[a], t);
        break;
      case "image":
        ct("error", t), ct("load", t);
        break;
      case "details":
        ct("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ct("error", t), ct("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (N in n)
          if (n.hasOwnProperty(N) && (a = n[N], a != null)) switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(r(137, e));
            default:
              At(t, e, N, a, n, null)
          }
        return;
      default:
        if (Bo(e)) {
          for (w in n) n.hasOwnProperty(w) && (a = n[w], a !== void 0 && uu(t, e, w, a, n, void 0));
          return
        }
    }
    for (v in n) n.hasOwnProperty(v) && (a = n[v], a != null && At(t, e, v, a, n, null))
  }

  function kg(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          u = null,
          f = null,
          v = null,
          S = null,
          N = null,
          w = null;
        for (D in n) {
          var V = n[D];
          if (n.hasOwnProperty(D) && V != null) switch (D) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              S = V;
            default:
              a.hasOwnProperty(D) || At(t, e, D, null, a, V)
          }
        }
        for (var E in a) {
          var D = a[E];
          if (V = n[E], a.hasOwnProperty(E) && (D != null || V != null)) switch (E) {
            case "type":
              u = D;
              break;
            case "name":
              s = D;
              break;
            case "checked":
              N = D;
              break;
            case "defaultChecked":
              w = D;
              break;
            case "value":
              f = D;
              break;
            case "defaultValue":
              v = D;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (D != null) throw Error(r(137, e));
              break;
            default:
              D !== V && At(t, e, E, D, a, V)
          }
        }
        So(t, f, v, S, N, w, u, s);
        return;
      case "select":
        D = f = v = E = null;
        for (u in n)
          if (S = n[u], n.hasOwnProperty(u) && S != null) switch (u) {
            case "value":
              break;
            case "multiple":
              D = S;
            default:
              a.hasOwnProperty(u) || At(t, e, u, null, a, S)
          }
        for (s in a)
          if (u = a[s], S = n[s], a.hasOwnProperty(s) && (u != null || S != null)) switch (s) {
            case "value":
              E = u;
              break;
            case "defaultValue":
              v = u;
              break;
            case "multiple":
              f = u;
            default:
              u !== S && At(t, e, s, u, a, S)
          }
        e = v, n = f, a = D, E != null ? Aa(t, !!n, E, !1) : !!a != !!n && (e != null ? Aa(t, !!n, e, !0) : Aa(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        D = E = null;
        for (v in n)
          if (s = n[v], n.hasOwnProperty(v) && s != null && !a.hasOwnProperty(v)) switch (v) {
            case "value":
              break;
            case "children":
              break;
            default:
              At(t, e, v, null, a, s)
          }
        for (f in a)
          if (s = a[f], u = n[f], a.hasOwnProperty(f) && (s != null || u != null)) switch (f) {
            case "value":
              E = s;
              break;
            case "defaultValue":
              D = s;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (s != null) throw Error(r(91));
              break;
            default:
              s !== u && At(t, e, f, s, a, u)
          }
        gf(t, E, D);
        return;
      case "option":
        for (var K in n)
          if (E = n[K], n.hasOwnProperty(K) && E != null && !a.hasOwnProperty(K)) switch (K) {
            case "selected":
              t.selected = !1;
              break;
            default:
              At(t, e, K, null, a, E)
          }
        for (S in a)
          if (E = a[S], D = n[S], a.hasOwnProperty(S) && E !== D && (E != null || D != null)) switch (S) {
            case "selected":
              t.selected = E && typeof E != "function" && typeof E != "symbol";
              break;
            default:
              At(t, e, S, E, a, D)
          }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var et in n) E = n[et], n.hasOwnProperty(et) && E != null && !a.hasOwnProperty(et) && At(t, e, et, null, a, E);
        for (N in a)
          if (E = a[N], D = n[N], a.hasOwnProperty(N) && E !== D && (E != null || D != null)) switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (E != null) throw Error(r(137, e));
              break;
            default:
              At(t, e, N, E, a, D)
          }
        return;
      default:
        if (Bo(e)) {
          for (var jt in n) E = n[jt], n.hasOwnProperty(jt) && E !== void 0 && !a.hasOwnProperty(jt) && uu(t, e, jt, void 0, a, E);
          for (w in a) E = a[w], D = n[w], !a.hasOwnProperty(w) || E === D || E === void 0 && D === void 0 || uu(t, e, w, E, a, D);
          return
        }
    }
    for (var j in n) E = n[j], n.hasOwnProperty(j) && E != null && !a.hasOwnProperty(j) && At(t, e, j, null, a, E);
    for (V in a) E = a[V], D = n[V], !a.hasOwnProperty(V) || E === D || E == null && D == null || At(t, e, V, E, a, D)
  }

  function S0(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1
    }
  }

  function Jg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var s = n[a],
          u = s.transferSize,
          f = s.initiatorType,
          v = s.duration;
        if (u && v && S0(f)) {
          for (f = 0, v = s.responseEnd, a += 1; a < n.length; a++) {
            var S = n[a],
              N = S.startTime;
            if (N > v) break;
            var w = S.transferSize,
              V = S.initiatorType;
            w && S0(V) && (S = S.responseEnd, f += w * (S < v ? 1 : (v - N) / (S - N)))
          }
          if (--a, e += 8 * (u + f) / (s.duration / 1e3), t++, 10 < t) break
        }
      }
      if (0 < t) return e / t / 1e6
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5
  }
  var cu = null,
    fu = null;

  function ws(t) {
    return t.nodeType === 9 ? t : t.ownerDocument
  }

  function T0(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0
    }
  }

  function B0(t, e) {
    if (t === 0) switch (e) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0
    }
    return t === 1 && e === "foreignObject" ? 0 : t
  }

  function du(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
  }
  var hu = null;

  function Pg() {
    var t = window.event;
    return t && t.type === "popstate" ? t === hu ? !1 : (hu = t, !0) : (hu = null, !1)
  }
  var A0 = typeof setTimeout == "function" ? setTimeout : void 0,
    Wg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    j0 = typeof Promise == "function" ? Promise : void 0,
    $g = typeof queueMicrotask == "function" ? queueMicrotask : typeof j0 < "u" ? function (t) {
      return j0.resolve(null).then(t).catch(Ig)
    } : A0;

  function Ig(t) {
    setTimeout(function () {
      throw t
    })
  }

  function Ln(t) {
    return t === "head"
  }

  function M0(t, e) {
    var n = e,
      a = 0;
    do {
      var s = n.nextSibling;
      if (t.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$" || n === "/&") {
          if (a === 0) {
            t.removeChild(s), ni(e);
            return
          }
          a--
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") a++;
      else if (n === "html") el(t.ownerDocument.documentElement);
      else if (n === "head") {
        n = t.ownerDocument.head, el(n);
        for (var u = n.firstChild; u;) {
          var f = u.nextSibling,
            v = u.nodeName;
          u[xi] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = f
        }
      } else n === "body" && el(t.ownerDocument.body);
      n = s
    } while (n);
    ni(e)
  }

  function N0(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8)
        if (n = a.data, n === "/$") {
          if (t === 0) break;
          t--
        } else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = a
    } while (n)
  }

  function mu(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          mu(n), xo(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue
      }
      t.removeChild(n)
    }
  }

  function tv(t, e, n, a) {
    for (; t.nodeType === 1;) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
      } else if (a) {
        if (!t[xi]) switch (e) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (u !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (u = t.getAttribute("src"), (u !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t
        }
      } else if (e === "input" && t.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === u) return t
      } else return t;
      if (t = Ve(t.nextSibling), t === null) break
    }
    return null
  }

  function ev(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3;)
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Ve(t.nextSibling), t === null)) return null;
    return t
  }

  function E0(t, e) {
    for (; t.nodeType !== 8;)
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ve(t.nextSibling), t === null)) return null;
    return t
  }

  function pu(t) {
    return t.data === "$?" || t.data === "$~"
  }

  function yu(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
  }

  function nv(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var a = function () {
        e(), n.removeEventListener("DOMContentLoaded", a)
      };
      n.addEventListener("DOMContentLoaded", a), t._reactRetry = a
    }
  }

  function Ve(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
        if (e === "/$" || e === "/&") return null
      }
    }
    return t
  }
  var gu = null;

  function D0(t) {
    t = t.nextSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return Ve(t.nextSibling);
          e--
        } else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++
      }
      t = t.nextSibling
    }
    return null
  }

  function C0(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--
        } else n !== "/$" && n !== "/&" || e++
      }
      t = t.previousSibling
    }
    return null
  }

  function w0(t, e, n) {
    switch (e = ws(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451))
    }
  }

  function el(t) {
    for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
    xo(t)
  }
  var _e = new Map,
    z0 = new Set;

  function zs(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
  }
  var yn = L.d;
  L.d = {
    f: av,
    r: iv,
    D: lv,
    C: sv,
    L: ov,
    m: rv,
    X: cv,
    S: uv,
    M: fv
  };

  function av() {
    var t = yn.f(),
      e = Bs();
    return t || e
  }

  function iv(t) {
    var e = Sa(t);
    e !== null && e.tag === 5 && e.type === "form" ? Jd(e) : yn.r(t)
  }
  var Ia = typeof document > "u" ? null : document;

  function O0(t, e, n) {
    var a = Ia;
    if (a && typeof e == "string" && e) {
      var s = Ee(e);
      s = 'link[rel="' + t + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), z0.has(s) || (z0.add(s), t = {
        rel: t,
        crossOrigin: n,
        href: e
      }, a.querySelector(s) === null && (e = a.createElement("link"), te(e, "link", t), Kt(e), a.head.appendChild(e)))
    }
  }

  function lv(t) {
    yn.D(t), O0("dns-prefetch", t, null)
  }

  function sv(t, e) {
    yn.C(t, e), O0("preconnect", t, e)
  }

  function ov(t, e, n) {
    yn.L(t, e, n);
    var a = Ia;
    if (a && t && e) {
      var s = 'link[rel="preload"][as="' + Ee(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + Ee(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + Ee(n.imageSizes) + '"]')) : s += '[href="' + Ee(t) + '"]';
      var u = s;
      switch (e) {
        case "style":
          u = ti(t);
          break;
        case "script":
          u = ei(t)
      }
      _e.has(u) || (t = b({
        rel: "preload",
        href: e === "image" && n && n.imageSrcSet ? void 0 : t,
        as: e
      }, n), _e.set(u, t), a.querySelector(s) !== null || e === "style" && a.querySelector(nl(u)) || e === "script" && a.querySelector(al(u)) || (e = a.createElement("link"), te(e, "link", t), Kt(e), a.head.appendChild(e)))
    }
  }

  function rv(t, e) {
    yn.m(t, e);
    var n = Ia;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        s = 'link[rel="modulepreload"][as="' + Ee(a) + '"][href="' + Ee(t) + '"]',
        u = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ei(t)
      }
      if (!_e.has(u) && (t = b({
          rel: "modulepreload",
          href: t
        }, e), _e.set(u, t), n.querySelector(s) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(al(u))) return
        }
        a = n.createElement("link"), te(a, "link", t), Kt(a), n.head.appendChild(a)
      }
    }
  }

  function uv(t, e, n) {
    yn.S(t, e, n);
    var a = Ia;
    if (a && t) {
      var s = Ta(a).hoistableStyles,
        u = ti(t);
      e = e || "default";
      var f = s.get(u);
      if (!f) {
        var v = {
          loading: 0,
          preload: null
        };
        if (f = a.querySelector(nl(u))) v.loading = 5;
        else {
          t = b({
            rel: "stylesheet",
            href: t,
            "data-precedence": e
          }, n), (n = _e.get(u)) && vu(t, n);
          var S = f = a.createElement("link");
          Kt(S), te(S, "link", t), S._p = new Promise(function (N, w) {
            S.onload = N, S.onerror = w
          }), S.addEventListener("load", function () {
            v.loading |= 1
          }), S.addEventListener("error", function () {
            v.loading |= 2
          }), v.loading |= 4, Os(f, e, a)
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: v
        }, s.set(u, f)
      }
    }
  }

  function cv(t, e) {
    yn.X(t, e);
    var n = Ia;
    if (n && t) {
      var a = Ta(n).hoistableScripts,
        s = ei(t),
        u = a.get(s);
      u || (u = n.querySelector(al(s)), u || (t = b({
        src: t,
        async: !0
      }, e), (e = _e.get(s)) && xu(t, e), u = n.createElement("script"), Kt(u), te(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(s, u))
    }
  }

  function fv(t, e) {
    yn.M(t, e);
    var n = Ia;
    if (n && t) {
      var a = Ta(n).hoistableScripts,
        s = ei(t),
        u = a.get(s);
      u || (u = n.querySelector(al(s)), u || (t = b({
        src: t,
        async: !0,
        type: "module"
      }, e), (e = _e.get(s)) && xu(t, e), u = n.createElement("script"), Kt(u), te(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(s, u))
    }
  }

  function R0(t, e, n, a) {
    var s = (s = rt.current) ? zs(s) : null;
    if (!s) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = ti(n.href), n = Ta(s).hoistableStyles, a = n.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = ti(n.href);
          var u = Ta(s).hoistableStyles,
            f = u.get(t);
          if (f || (s = s.ownerDocument || s, f = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, u.set(t, f), (u = s.querySelector(nl(t))) && !u._p && (f.instance = u, f.state.loading = 5), _e.has(t) || (n = {
              rel: "preload",
              as: "style",
              href: n.href,
              crossOrigin: n.crossOrigin,
              integrity: n.integrity,
              media: n.media,
              hrefLang: n.hrefLang,
              referrerPolicy: n.referrerPolicy
            }, _e.set(t, n), u || dv(s, t, n, f.state))), e && a === null) throw Error(r(528, ""));
          return f
        }
        if (e && a !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ei(n), n = Ta(s).hoistableScripts, a = n.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(e, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(r(444, t))
    }
  }

  function ti(t) {
    return 'href="' + Ee(t) + '"'
  }

  function nl(t) {
    return 'link[rel="stylesheet"][' + t + "]"
  }

  function V0(t) {
    return b({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    })
  }

  function dv(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function () {
      return a.loading |= 1
    }), e.addEventListener("error", function () {
      return a.loading |= 2
    }), te(e, "link", n), Kt(e), t.head.appendChild(e))
  }

  function ei(t) {
    return '[src="' + Ee(t) + '"]'
  }

  function al(t) {
    return "script[async]" + t
  }

  function _0(t, e, n) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var a = t.querySelector('style[data-href~="' + Ee(n.href) + '"]');
        if (a) return e.instance = a, Kt(a), a;
        var s = b({}, n, {
          "data-href": n.href,
          "data-precedence": n.precedence,
          href: null,
          precedence: null
        });
        return a = (t.ownerDocument || t).createElement("style"), Kt(a), te(a, "style", s), Os(a, n.precedence, t), e.instance = a;
      case "stylesheet":
        s = ti(n.href);
        var u = t.querySelector(nl(s));
        if (u) return e.state.loading |= 4, e.instance = u, Kt(u), u;
        a = V0(n), (s = _e.get(s)) && vu(a, s), u = (t.ownerDocument || t).createElement("link"), Kt(u);
        var f = u;
        return f._p = new Promise(function (v, S) {
          f.onload = v, f.onerror = S
        }), te(u, "link", a), e.state.loading |= 4, Os(u, n.precedence, t), e.instance = u;
      case "script":
        return u = ei(n.src), (s = t.querySelector(al(u))) ? (e.instance = s, Kt(s), s) : (a = n, (s = _e.get(u)) && (a = b({}, n), xu(a, s)), t = t.ownerDocument || t, s = t.createElement("script"), Kt(s), te(s, "link", a), t.head.appendChild(s), e.instance = s);
      case "void":
        return null;
      default:
        throw Error(r(443, e.type))
    } else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Os(a, n.precedence, t));
    return e.instance
  }

  function Os(t, e, n) {
    for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = a.length ? a[a.length - 1] : null, u = s, f = 0; f < a.length; f++) {
      var v = a[f];
      if (v.dataset.precedence === e) u = v;
      else if (u !== s) break
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild))
  }

  function vu(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title)
  }

  function xu(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity)
  }
  var Rs = null;

  function U0(t, e, n) {
    if (Rs === null) {
      var a = new Map,
        s = Rs = new Map;
      s.set(n, a)
    } else s = Rs, a = s.get(n), a || (a = new Map, s.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) {
      var u = n[s];
      if (!(u[xi] || u[Pt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(e) || "";
        f = t + f;
        var v = a.get(f);
        v ? v.push(u) : a.set(f, [u])
      }
    }
    return a
  }

  function L0(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null)
  }

  function hv(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0
        }
        case "script":
          if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0
    }
    return !1
  }

  function H0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
  }

  function mv(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = ti(a.href),
          u = e.querySelector(nl(s));
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Vs.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, Kt(u);
          return
        }
        u = e.ownerDocument || e, a = V0(a), (s = _e.get(s)) && vu(a, s), u = u.createElement("link"), Kt(u);
        var f = u;
        f._p = new Promise(function (v, S) {
          f.onload = v, f.onerror = S
        }), te(u, "link", a), n.instance = u
      }
      t.stylesheets === null && (t.stylesheets = new Map), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = Vs.bind(t), e.addEventListener("load", n), e.addEventListener("error", n))
    }
  }
  var bu = 0;

  function pv(t, e) {
    return t.stylesheets && t.count === 0 && Us(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function (n) {
      var a = setTimeout(function () {
        if (t.stylesheets && Us(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u()
        }
      }, 6e4 + e);
      0 < t.imgBytes && bu === 0 && (bu = 62500 * Jg());
      var s = setTimeout(function () {
        if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Us(t, t.stylesheets), t.unsuspend)) {
          var u = t.unsuspend;
          t.unsuspend = null, u()
        }
      }, (t.imgBytes > bu ? 50 : 800) + e);
      return t.unsuspend = n,
        function () {
          t.unsuspend = null, clearTimeout(a), clearTimeout(s)
        }
    } : null
  }

  function Vs() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Us(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t()
      }
    }
  }
  var _s = null;

  function Us(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, _s = new Map, e.forEach(yv, t), _s = null, Vs.call(t))
  }

  function yv(t, e) {
    if (!(e.state.loading & 4)) {
      var n = _s.get(t);
      if (n) var a = n.get(null);
      else {
        n = new Map, _s.set(t, n);
        for (var s = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < s.length; u++) {
          var f = s[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), a = f)
        }
        a && n.set(null, a)
      }
      s = e.instance, f = s.getAttribute("data-precedence"), u = n.get(f) || a, u === a && n.set(null, s), n.set(f, s), this.count++, a = Vs.bind(this), s.addEventListener("load", a), s.addEventListener("error", a), u ? u.parentNode.insertBefore(s, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(s, t.firstChild)), e.state.loading |= 4
    }
  }
  var il = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0
  };

  function gv(t, e, n, a, s, u, f, v, S) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = po(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = po(0), this.hiddenUpdates = po(null), this.identifierPrefix = a, this.onUncaughtError = s, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = new Map
  }

  function F0(t, e, n, a, s, u, f, v, S, N, w, V) {
    return t = new gv(t, e, n, f, S, N, w, V, v), e = 1, u === !0 && (e |= 24), u = be(3, null, null, e), t.current = u, u.stateNode = t, e = Io(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, ar(u), t
  }

  function q0(t) {
    return t ? (t = za, t) : za
  }

  function Y0(t, e, n, a, s, u) {
    s = q0(s), a.context === null ? a.context = s : a.pendingContext = s, a = Nn(e), a.payload = {
      element: n
    }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = En(t, a, e), n !== null && (me(n, t, e), _i(n, t, e))
  }

  function G0(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e
    }
  }

  function Su(t, e) {
    G0(t, e), (t = t.alternate) && G0(t, e)
  }

  function X0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ta(t, 67108864);
      e !== null && me(e, t, 67108864), Su(t, 67108864)
    }
  }

  function Q0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = je();
      e = yo(e);
      var n = ta(t, e);
      n !== null && me(n, t, e), Su(t, e)
    }
  }
  var Ls = !0;

  function vv(t, e, n, a) {
    var s = z.T;
    z.T = null;
    var u = L.p;
    try {
      L.p = 2, Tu(t, e, n, a)
    } finally {
      L.p = u, z.T = s
    }
  }

  function xv(t, e, n, a) {
    var s = z.T;
    z.T = null;
    var u = L.p;
    try {
      L.p = 8, Tu(t, e, n, a)
    } finally {
      L.p = u, z.T = s
    }
  }

  function Tu(t, e, n, a) {
    if (Ls) {
      var s = Bu(a);
      if (s === null) ru(t, e, a, Hs, n), K0(t, a);
      else if (Sv(s, t, e, n, a)) a.stopPropagation();
      else if (K0(t, a), e & 4 && -1 < bv.indexOf(t)) {
        for (; s !== null;) {
          var u = Sa(s);
          if (u !== null) switch (u.tag) {
            case 3:
              if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                var f = Jn(u.pendingLanes);
                if (f !== 0) {
                  var v = u;
                  for (v.pendingLanes |= 2, v.entangledLanes |= 2; f;) {
                    var S = 1 << 31 - ve(f);
                    v.entanglements[1] |= S, f &= ~S
                  }
                  ke(u), (vt & 6) === 0 && (Ss = ye() + 500, $i(0))
                }
              }
              break;
            case 31:
            case 13:
              v = ta(u, 2), v !== null && me(v, u, 2), Bs(), Su(u, 2)
          }
          if (u = Bu(a), u === null && ru(t, e, a, Hs, n), u === s) break;
          s = u
        }
        s !== null && a.stopPropagation()
      } else ru(t, e, a, null, n)
    }
  }

  function Bu(t) {
    return t = jo(t), Au(t)
  }
  var Hs = null;

  function Au(t) {
    if (Hs = null, t = ba(t), t !== null) {
      var e = m(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = d(e), t !== null) return t;
          t = null
        } else if (n === 31) {
          if (t = y(e), t !== null) return t;
          t = null
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null
        } else e !== t && (t = null)
      }
    }
    return Hs = t, null
  }

  function Z0(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ly()) {
          case Ic:
            return 2;
          case tf:
            return 8;
          case El:
          case sy:
            return 32;
          case ef:
            return 268435456;
          default:
            return 32
        }
        default:
          return 32
    }
  }
  var ju = !1,
    Hn = null,
    Fn = null,
    qn = null,
    ll = new Map,
    sl = new Map,
    Yn = [],
    bv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

  function K0(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Hn = null;
        break;
      case "dragenter":
      case "dragleave":
        Fn = null;
        break;
      case "mouseover":
      case "mouseout":
        qn = null;
        break;
      case "pointerover":
      case "pointerout":
        ll.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        sl.delete(e.pointerId)
    }
  }

  function ol(t, e, n, a, s, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [s]
    }, e !== null && (e = Sa(e), e !== null && X0(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t)
  }

  function Sv(t, e, n, a, s) {
    switch (e) {
      case "focusin":
        return Hn = ol(Hn, t, e, n, a, s), !0;
      case "dragenter":
        return Fn = ol(Fn, t, e, n, a, s), !0;
      case "mouseover":
        return qn = ol(qn, t, e, n, a, s), !0;
      case "pointerover":
        var u = s.pointerId;
        return ll.set(u, ol(ll.get(u) || null, t, e, n, a, s)), !0;
      case "gotpointercapture":
        return u = s.pointerId, sl.set(u, ol(sl.get(u) || null, t, e, n, a, s)), !0
    }
    return !1
  }

  function k0(t) {
    var e = ba(t.target);
    if (e !== null) {
      var n = m(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = d(n), e !== null) {
            t.blockedOn = e, rf(t.priority, function () {
              Q0(n)
            });
            return
          }
        } else if (e === 31) {
          if (e = y(n), e !== null) {
            t.blockedOn = e, rf(t.priority, function () {
              Q0(n)
            });
            return
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return
        }
      }
    }
    t.blockedOn = null
  }

  function Fs(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
      var n = Bu(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(n.type, n);
        Ao = a, n.target.dispatchEvent(a), Ao = null
      } else return e = Sa(n), e !== null && X0(e), t.blockedOn = n, !1;
      e.shift()
    }
    return !0
  }

  function J0(t, e, n) {
    Fs(t) && n.delete(e)
  }

  function Tv() {
    ju = !1, Hn !== null && Fs(Hn) && (Hn = null), Fn !== null && Fs(Fn) && (Fn = null), qn !== null && Fs(qn) && (qn = null), ll.forEach(J0), sl.forEach(J0)
  }

  function qs(t, e) {
    t.blockedOn === e && (t.blockedOn = null, ju || (ju = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, Tv)))
  }
  var Ys = null;

  function P0(t) {
    Ys !== t && (Ys = t, i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
      Ys === t && (Ys = null);
      for (var e = 0; e < t.length; e += 3) {
        var n = t[e],
          a = t[e + 1],
          s = t[e + 2];
        if (typeof a != "function") {
          if (Au(a || n) === null) continue;
          break
        }
        var u = Sa(n);
        u !== null && (t.splice(e, 3), e -= 3, Br(u, {
          pending: !0,
          data: s,
          method: n.method,
          action: a
        }, a, s))
      }
    }))
  }

  function ni(t) {
    function e(S) {
      return qs(S, t)
    }
    Hn !== null && qs(Hn, t), Fn !== null && qs(Fn, t), qn !== null && qs(qn, t), ll.forEach(e), sl.forEach(e);
    for (var n = 0; n < Yn.length; n++) {
      var a = Yn[n];
      a.blockedOn === t && (a.blockedOn = null)
    }
    for (; 0 < Yn.length && (n = Yn[0], n.blockedOn === null);) k0(n), n.blockedOn === null && Yn.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var s = n[a],
          u = n[a + 1],
          f = s[re] || null;
        if (typeof u == "function") f || P0(n);
        else if (f) {
          var v = null;
          if (u && u.hasAttribute("formAction")) {
            if (s = u, f = u[re] || null) v = f.formAction;
            else if (Au(s) !== null) continue
          } else v = f.action;
          typeof v == "function" ? n[a + 1] = v : (n.splice(a, 3), a -= 3), P0(n)
        }
      }
  }

  function W0() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function () {
          return new Promise(function (f) {
            return s = f
          })
        },
        focusReset: "manual",
        scroll: "manual"
      })
    }

    function e() {
      s !== null && (s(), s = null), a || setTimeout(n, 20)
    }

    function n() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        })
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        s = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100),
        function () {
          a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), s !== null && (s(), s = null)
        }
    }
  }

  function Mu(t) {
    this._internalRoot = t
  }
  Gs.prototype.render = Mu.prototype.render = function (t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var n = e.current,
      a = je();
    Y0(n, a, t, e, null, null)
  }, Gs.prototype.unmount = Mu.prototype.unmount = function () {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Y0(t.current, 2, null, t, null, null), Bs(), e[xa] = null
    }
  };

  function Gs(t) {
    this._internalRoot = t
  }
  Gs.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = of ();
      t = {
        blockedOn: null,
        target: t,
        priority: e
      };
      for (var n = 0; n < Yn.length && e !== 0 && e < Yn[n].priority; n++);
      Yn.splice(n, 0, t), n === 0 && k0(t)
    }
  };
  var $0 = l.version;
  if ($0 !== "19.2.0") throw Error(r(527, $0, "19.2.0"));
  L.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = p(e), t = t !== null ? x(t) : null, t = t === null ? null : t.stateNode, t
  };
  var Bv = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xs.isDisabled && Xs.supportsFiber) try {
      yi = Xs.inject(Bv), ge = Xs
    } catch {}
  }
  return ul.createRoot = function (t, e) {
    if (!c(t)) throw Error(r(299));
    var n = !1,
      a = "",
      s = lh,
      u = sh,
      f = oh;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (s = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = F0(t, 1, !1, null, null, n, a, null, s, u, f, W0), t[xa] = e.current, ou(t), new Mu(e)
  }, ul.hydrateRoot = function (t, e, n) {
    if (!c(t)) throw Error(r(299));
    var a = !1,
      s = "",
      u = lh,
      f = sh,
      v = oh,
      S = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError), n.formState !== void 0 && (S = n.formState)), e = F0(t, 1, !0, e, n ?? null, a, s, S, u, f, v, W0), e.context = q0(null), n = e.current, a = je(), a = yo(a), s = Nn(a), s.callback = null, En(n, s, a), n = a, e.current.lanes = n, vi(e, n), ke(e), t[xa] = e.current, ou(t), new Gs(e)
  }, ul.version = "19.2.0", ul
}
var rm;

function Ov() {
  if (rm) return Du.exports;
  rm = 1;

  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
    } catch (l) {
      console.error(l)
    }
  }
  return i(), Du.exports = zv(), Du.exports
}
var Rv = Ov();
const gc = F.createContext({});

function vc(i) {
  const l = F.useRef(null);
  return l.current === null && (l.current = i()), l.current
}
const xc = typeof window < "u",
  Bp = xc ? F.useLayoutEffect : F.useEffect,
  io = F.createContext(null);

function bc(i, l) {
  i.indexOf(l) === -1 && i.push(l)
}

function Sc(i, l) {
  const o = i.indexOf(l);
  o > -1 && i.splice(o, 1)
}
const gn = (i, l, o) => o > l ? l : o < i ? i : o;
let Tc = () => {};
const vn = {},
  Ap = i => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);

function jp(i) {
  return typeof i == "object" && i !== null
}
const Mp = i => /^0[^.\s]+$/u.test(i);

function Bc(i) {
  let l;
  return () => (l === void 0 && (l = i()), l)
}
const Fe = i => i,
  Vv = (i, l) => o => l(i(o)),
  Bl = (...i) => i.reduce(Vv),
  gl = (i, l, o) => {
    const r = l - i;
    return r === 0 ? 1 : (o - i) / r
  };
class Ac {
  constructor() {
    this.subscriptions = []
  }
  add(l) {
    return bc(this.subscriptions, l), () => Sc(this.subscriptions, l)
  }
  notify(l, o, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, o, r);
      else
        for (let m = 0; m < c; m++) {
          const d = this.subscriptions[m];
          d && d(l, o, r)
        }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}
const Je = i => i * 1e3,
  He = i => i / 1e3;

function Np(i, l) {
  return l ? i * (1e3 / l) : 0
}
const Ep = (i, l, o) => (((1 - 3 * o + 3 * l) * i + (3 * o - 6 * l)) * i + 3 * l) * i,
  _v = 1e-7,
  Uv = 12;

function Lv(i, l, o, r, c) {
  let m, d, y = 0;
  do d = l + (o - l) / 2, m = Ep(d, r, c) - i, m > 0 ? o = d : l = d; while (Math.abs(m) > _v && ++y < Uv);
  return d
}

function Al(i, l, o, r) {
  if (i === l && o === r) return Fe;
  const c = m => Lv(m, 0, 1, i, o);
  return m => m === 0 || m === 1 ? m : Ep(c(m), l, r)
}
const Dp = i => l => l <= .5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2,
  Cp = i => l => 1 - i(1 - l),
  wp = Al(.33, 1.53, .69, .99),
  jc = Cp(wp),
  zp = Dp(jc),
  Op = i => (i *= 2) < 1 ?.5 * jc(i) : .5 * (2 - Math.pow(2, -10 * (i - 1))),
  Mc = i => 1 - Math.sin(Math.acos(i)),
  Rp = Cp(Mc),
  Vp = Dp(Mc),
  Hv = Al(.42, 0, 1, 1),
  Fv = Al(0, 0, .58, 1),
  _p = Al(.42, 0, .58, 1),
  qv = i => Array.isArray(i) && typeof i[0] != "number",
  Up = i => Array.isArray(i) && typeof i[0] == "number",
  Yv = {
    linear: Fe,
    easeIn: Hv,
    easeInOut: _p,
    easeOut: Fv,
    circIn: Mc,
    circInOut: Vp,
    circOut: Rp,
    backIn: jc,
    backInOut: zp,
    backOut: wp,
    anticipate: Op
  },
  Gv = i => typeof i == "string",
  um = i => {
    if (Up(i)) {
      Tc(i.length === 4);
      const [l, o, r, c] = i;
      return Al(l, o, r, c)
    } else if (Gv(i)) return Yv[i];
    return i
  },
  Qs = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

function Xv(i, l) {
  let o = new Set,
    r = new Set,
    c = !1,
    m = !1;
  const d = new WeakSet;
  let y = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };

  function g(x) {
    d.has(x) && (p.schedule(x), i()), x(y)
  }
  const p = {
    schedule: (x, b = !1, B = !1) => {
      const _ = B && c ? o : r;
      return b && d.add(x), _.has(x) || _.add(x), x
    },
    cancel: x => {
      r.delete(x), d.delete(x)
    },
    process: x => {
      if (y = x, c) {
        m = !0;
        return
      }
      c = !0, [o, r] = [r, o], o.forEach(g), o.clear(), c = !1, m && (m = !1, p.process(x))
    }
  };
  return p
}
const Qv = 40;

function Lp(i, l) {
  let o = !1,
    r = !0;
  const c = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1
    },
    m = () => o = !0,
    d = Qs.reduce((Y, nt) => (Y[nt] = Xv(m), Y), {}),
    {
      setup: y,
      read: g,
      resolveKeyframes: p,
      preUpdate: x,
      update: b,
      preRender: B,
      render: C,
      postRender: _
    } = d,
    H = () => {
      const Y = vn.useManualTiming ? c.timestamp : performance.now();
      o = !1, vn.useManualTiming || (c.delta = r ? 1e3 / 60 : Math.max(Math.min(Y - c.timestamp, Qv), 1)), c.timestamp = Y, c.isProcessing = !0, y.process(c), g.process(c), p.process(c), x.process(c), b.process(c), B.process(c), C.process(c), _.process(c), c.isProcessing = !1, o && l && (r = !1, i(H))
    },
    X = () => {
      o = !0, r = !0, c.isProcessing || i(H)
    };
  return {
    schedule: Qs.reduce((Y, nt) => {
      const W = d[nt];
      return Y[nt] = (tt, Q = !1, $ = !1) => (o || X(), W.schedule(tt, Q, $)), Y
    }, {}),
    cancel: Y => {
      for (let nt = 0; nt < Qs.length; nt++) d[Qs[nt]].cancel(Y)
    },
    state: c,
    steps: d
  }
}
const {
  schedule: Ct,
  cancel: Qn,
  state: ee,
  steps: Ou
} = Lp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Fe, !0);
let Js;

function Zv() {
  Js = void 0
}
const pe = {
    now: () => (Js === void 0 && pe.set(ee.isProcessing || vn.useManualTiming ? ee.timestamp : performance.now()), Js),
    set: i => {
      Js = i, queueMicrotask(Zv)
    }
  },
  Hp = i => l => typeof l == "string" && l.startsWith(i),
  Nc = Hp("--"),
  Kv = Hp("var(--"),
  Ec = i => Kv(i) ? kv.test(i.split("/*")[0].trim()) : !1,
  kv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  di = {
    test: i => typeof i == "number",
    parse: parseFloat,
    transform: i => i
  },
  vl = {
    ...di,
    transform: i => gn(0, 1, i)
  },
  Zs = {
    ...di,
    default: 1
  },
  dl = i => Math.round(i * 1e5) / 1e5,
  Dc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Jv(i) {
  return i == null
}
const Pv = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Cc = (i, l) => o => !!(typeof o == "string" && Pv.test(o) && o.startsWith(i) || l && !Jv(o) && Object.prototype.hasOwnProperty.call(o, l)),
  Fp = (i, l, o) => r => {
    if (typeof r != "string") return r;
    const [c, m, d, y] = r.match(Dc);
    return {
      [i]: parseFloat(c),
      [l]: parseFloat(m),
      [o]: parseFloat(d),
      alpha: y !== void 0 ? parseFloat(y) : 1
    }
  },
  Wv = i => gn(0, 255, i),
  Ru = {
    ...di,
    transform: i => Math.round(Wv(i))
  },
  pa = {
    test: Cc("rgb", "red"),
    parse: Fp("red", "green", "blue"),
    transform: ({
      red: i,
      green: l,
      blue: o,
      alpha: r = 1
    }) => "rgba(" + Ru.transform(i) + ", " + Ru.transform(l) + ", " + Ru.transform(o) + ", " + dl(vl.transform(r)) + ")"
  };

function $v(i) {
  let l = "",
    o = "",
    r = "",
    c = "";
  return i.length > 5 ? (l = i.substring(1, 3), o = i.substring(3, 5), r = i.substring(5, 7), c = i.substring(7, 9)) : (l = i.substring(1, 2), o = i.substring(2, 3), r = i.substring(3, 4), c = i.substring(4, 5), l += l, o += o, r += r, c += c), {
    red: parseInt(l, 16),
    green: parseInt(o, 16),
    blue: parseInt(r, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  }
}
const Ju = {
    test: Cc("#"),
    parse: $v,
    transform: pa.transform
  },
  jl = i => ({
    test: l => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: l => `${l}${i}`
  }),
  Xn = jl("deg"),
  Pe = jl("%"),
  at = jl("px"),
  Iv = jl("vh"),
  t2 = jl("vw"),
  cm = {
    ...Pe,
    parse: i => Pe.parse(i) / 100,
    transform: i => Pe.transform(i * 100)
  },
  ai = {
    test: Cc("hsl", "hue"),
    parse: Fp("hue", "saturation", "lightness"),
    transform: ({
      hue: i,
      saturation: l,
      lightness: o,
      alpha: r = 1
    }) => "hsla(" + Math.round(i) + ", " + Pe.transform(dl(l)) + ", " + Pe.transform(dl(o)) + ", " + dl(vl.transform(r)) + ")"
  },
  Xt = {
    test: i => pa.test(i) || Ju.test(i) || ai.test(i),
    parse: i => pa.test(i) ? pa.parse(i) : ai.test(i) ? ai.parse(i) : Ju.parse(i),
    transform: i => typeof i == "string" ? i : i.hasOwnProperty("red") ? pa.transform(i) : ai.transform(i),
    getAnimatableNone: i => {
      const l = Xt.parse(i);
      return l.alpha = 0, Xt.transform(l)
    }
  },
  e2 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function n2(i) {
  return isNaN(i) && typeof i == "string" && (i.match(Dc) ?.length || 0) + (i.match(e2) ?.length || 0) > 0
}
const qp = "number",
  Yp = "color",
  a2 = "var",
  i2 = "var(",
  fm = "${}",
  l2 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function xl(i) {
  const l = i.toString(),
    o = [],
    r = {
      color: [],
      number: [],
      var: []
    },
    c = [];
  let m = 0;
  const y = l.replace(l2, g => (Xt.test(g) ? (r.color.push(m), c.push(Yp), o.push(Xt.parse(g))) : g.startsWith(i2) ? (r.var.push(m), c.push(a2), o.push(g)) : (r.number.push(m), c.push(qp), o.push(parseFloat(g))), ++m, fm)).split(fm);
  return {
    values: o,
    split: y,
    indexes: r,
    types: c
  }
}

function Gp(i) {
  return xl(i).values
}

function Xp(i) {
  const {
    split: l,
    types: o
  } = xl(i), r = l.length;
  return c => {
    let m = "";
    for (let d = 0; d < r; d++)
      if (m += l[d], c[d] !== void 0) {
        const y = o[d];
        y === qp ? m += dl(c[d]) : y === Yp ? m += Xt.transform(c[d]) : m += c[d]
      } return m
  }
}
const s2 = i => typeof i == "number" ? 0 : Xt.test(i) ? Xt.getAnimatableNone(i) : i;

function o2(i) {
  const l = Gp(i);
  return Xp(i)(l.map(s2))
}
const Zn = {
  test: n2,
  parse: Gp,
  createTransformer: Xp,
  getAnimatableNone: o2
};

function Vu(i, l, o) {
  return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? i + (l - i) * 6 * o : o < 1 / 2 ? l : o < 2 / 3 ? i + (l - i) * (2 / 3 - o) * 6 : i
}

function r2({
  hue: i,
  saturation: l,
  lightness: o,
  alpha: r
}) {
  i /= 360, l /= 100, o /= 100;
  let c = 0,
    m = 0,
    d = 0;
  if (!l) c = m = d = o;
  else {
    const y = o < .5 ? o * (1 + l) : o + l - o * l,
      g = 2 * o - y;
    c = Vu(g, y, i + 1 / 3), m = Vu(g, y, i), d = Vu(g, y, i - 1 / 3)
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(m * 255),
    blue: Math.round(d * 255),
    alpha: r
  }
}

function Is(i, l) {
  return o => o > 0 ? l : i
}
const wt = (i, l, o) => i + (l - i) * o,
  _u = (i, l, o) => {
    const r = i * i,
      c = o * (l * l - r) + r;
    return c < 0 ? 0 : Math.sqrt(c)
  },
  u2 = [Ju, pa, ai],
  c2 = i => u2.find(l => l.test(i));

function dm(i) {
  const l = c2(i);
  if (!l) return !1;
  let o = l.parse(i);
  return l === ai && (o = r2(o)), o
}
const hm = (i, l) => {
    const o = dm(i),
      r = dm(l);
    if (!o || !r) return Is(i, l);
    const c = {
      ...o
    };
    return m => (c.red = _u(o.red, r.red, m), c.green = _u(o.green, r.green, m), c.blue = _u(o.blue, r.blue, m), c.alpha = wt(o.alpha, r.alpha, m), pa.transform(c))
  },
  Pu = new Set(["none", "hidden"]);

function f2(i, l) {
  return Pu.has(i) ? o => o <= 0 ? i : l : o => o >= 1 ? l : i
}

function d2(i, l) {
  return o => wt(i, l, o)
}

function wc(i) {
  return typeof i == "number" ? d2 : typeof i == "string" ? Ec(i) ? Is : Xt.test(i) ? hm : p2 : Array.isArray(i) ? Qp : typeof i == "object" ? Xt.test(i) ? hm : h2 : Is
}

function Qp(i, l) {
  const o = [...i],
    r = o.length,
    c = i.map((m, d) => wc(m)(m, l[d]));
  return m => {
    for (let d = 0; d < r; d++) o[d] = c[d](m);
    return o
  }
}

function h2(i, l) {
  const o = {
      ...i,
      ...l
    },
    r = {};
  for (const c in o) i[c] !== void 0 && l[c] !== void 0 && (r[c] = wc(i[c])(i[c], l[c]));
  return c => {
    for (const m in r) o[m] = r[m](c);
    return o
  }
}

function m2(i, l) {
  const o = [],
    r = {
      color: 0,
      var: 0,
      number: 0
    };
  for (let c = 0; c < l.values.length; c++) {
    const m = l.types[c],
      d = i.indexes[m][r[m]],
      y = i.values[d] ?? 0;
    o[c] = y, r[m]++
  }
  return o
}
const p2 = (i, l) => {
  const o = Zn.createTransformer(l),
    r = xl(i),
    c = xl(l);
  return r.indexes.var.length === c.indexes.var.length && r.indexes.color.length === c.indexes.color.length && r.indexes.number.length >= c.indexes.number.length ? Pu.has(i) && !c.values.length || Pu.has(l) && !r.values.length ? f2(i, l) : Bl(Qp(m2(r, c), c.values), o) : Is(i, l)
};

function Zp(i, l, o) {
  return typeof i == "number" && typeof l == "number" && typeof o == "number" ? wt(i, l, o) : wc(i)(i, l)
}
const y2 = i => {
    const l = ({
      timestamp: o
    }) => i(o);
    return {
      start: (o = !0) => Ct.update(l, o),
      stop: () => Qn(l),
      now: () => ee.isProcessing ? ee.timestamp : pe.now()
    }
  },
  Kp = (i, l, o = 10) => {
    let r = "";
    const c = Math.max(Math.round(l / o), 2);
    for (let m = 0; m < c; m++) r += Math.round(i(m / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0,r.length-2)})`
  },
  to = 2e4;

function zc(i) {
  let l = 0;
  const o = 50;
  let r = i.next(l);
  for (; !r.done && l < to;) l += o, r = i.next(l);
  return l >= to ? 1 / 0 : l
}

function g2(i, l = 100, o) {
  const r = o({
      ...i,
      keyframes: [0, l]
    }),
    c = Math.min(zc(r), to);
  return {
    type: "keyframes",
    ease: m => r.next(c * m).value / l,
    duration: He(c)
  }
}
const v2 = 5;

function kp(i, l, o) {
  const r = Math.max(l - v2, 0);
  return Np(o - i(r), l - r)
}
const Vt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
      granular: .01,
      default: 2
    },
    restDelta: {
      granular: .005,
      default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
  },
  Uu = .001;

function x2({
  duration: i = Vt.duration,
  bounce: l = Vt.bounce,
  velocity: o = Vt.velocity,
  mass: r = Vt.mass
}) {
  let c, m, d = 1 - l;
  d = gn(Vt.minDamping, Vt.maxDamping, d), i = gn(Vt.minDuration, Vt.maxDuration, He(i)), d < 1 ? (c = p => {
    const x = p * d,
      b = x * i,
      B = x - o,
      C = Wu(p, d),
      _ = Math.exp(-b);
    return Uu - B / C * _
  }, m = p => {
    const b = p * d * i,
      B = b * o + o,
      C = Math.pow(d, 2) * Math.pow(p, 2) * i,
      _ = Math.exp(-b),
      H = Wu(Math.pow(p, 2), d);
    return (-c(p) + Uu > 0 ? -1 : 1) * ((B - C) * _) / H
  }) : (c = p => {
    const x = Math.exp(-p * i),
      b = (p - o) * i + 1;
    return -Uu + x * b
  }, m = p => {
    const x = Math.exp(-p * i),
      b = (o - p) * (i * i);
    return x * b
  });
  const y = 5 / i,
    g = S2(c, m, y);
  if (i = Je(i), isNaN(g)) return {
    stiffness: Vt.stiffness,
    damping: Vt.damping,
    duration: i
  }; {
    const p = Math.pow(g, 2) * r;
    return {
      stiffness: p,
      damping: d * 2 * Math.sqrt(r * p),
      duration: i
    }
  }
}
const b2 = 12;

function S2(i, l, o) {
  let r = o;
  for (let c = 1; c < b2; c++) r = r - i(r) / l(r);
  return r
}

function Wu(i, l) {
  return i * Math.sqrt(1 - l * l)
}
const T2 = ["duration", "bounce"],
  B2 = ["stiffness", "damping", "mass"];

function mm(i, l) {
  return l.some(o => i[o] !== void 0)
}

function A2(i) {
  let l = {
    velocity: Vt.velocity,
    stiffness: Vt.stiffness,
    damping: Vt.damping,
    mass: Vt.mass,
    isResolvedFromDuration: !1,
    ...i
  };
  if (!mm(i, B2) && mm(i, T2))
    if (i.visualDuration) {
      const o = i.visualDuration,
        r = 2 * Math.PI / (o * 1.2),
        c = r * r,
        m = 2 * gn(.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      l = {
        ...l,
        mass: Vt.mass,
        stiffness: c,
        damping: m
      }
    } else {
      const o = x2(i);
      l = {
        ...l,
        ...o,
        mass: Vt.mass
      }, l.isResolvedFromDuration = !0
    } return l
}

function eo(i = Vt.visualDuration, l = Vt.bounce) {
  const o = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: l
  } : i;
  let {
    restSpeed: r,
    restDelta: c
  } = o;
  const m = o.keyframes[0],
    d = o.keyframes[o.keyframes.length - 1],
    y = {
      done: !1,
      value: m
    },
    {
      stiffness: g,
      damping: p,
      mass: x,
      duration: b,
      velocity: B,
      isResolvedFromDuration: C
    } = A2({
      ...o,
      velocity: -He(o.velocity || 0)
    }),
    _ = B || 0,
    H = p / (2 * Math.sqrt(g * x)),
    X = d - m,
    q = He(Math.sqrt(g / x)),
    Z = Math.abs(X) < 5;
  r || (r = Z ? Vt.restSpeed.granular : Vt.restSpeed.default), c || (c = Z ? Vt.restDelta.granular : Vt.restDelta.default);
  let Y;
  if (H < 1) {
    const W = Wu(q, H);
    Y = tt => {
      const Q = Math.exp(-H * q * tt);
      return d - Q * ((_ + H * q * X) / W * Math.sin(W * tt) + X * Math.cos(W * tt))
    }
  } else if (H === 1) Y = W => d - Math.exp(-q * W) * (X + (_ + q * X) * W);
  else {
    const W = q * Math.sqrt(H * H - 1);
    Y = tt => {
      const Q = Math.exp(-H * q * tt),
        $ = Math.min(W * tt, 300);
      return d - Q * ((_ + H * q * X) * Math.sinh($) + W * X * Math.cosh($)) / W
    }
  }
  const nt = {
    calculatedDuration: C && b || null,
    next: W => {
      const tt = Y(W);
      if (C) y.done = W >= b;
      else {
        let Q = W === 0 ? _ : 0;
        H < 1 && (Q = W === 0 ? Je(_) : kp(Y, W, tt));
        const $ = Math.abs(Q) <= r,
          bt = Math.abs(d - tt) <= c;
        y.done = $ && bt
      }
      return y.value = y.done ? d : tt, y
    },
    toString: () => {
      const W = Math.min(zc(nt), to),
        tt = Kp(Q => nt.next(W * Q).value, W, 30);
      return W + "ms " + tt
    },
    toTransition: () => {}
  };
  return nt
}
eo.applyToOptions = i => {
  const l = g2(i, 100, eo);
  return i.ease = l.ease, i.duration = Je(l.duration), i.type = "keyframes", i
};

function $u({
  keyframes: i,
  velocity: l = 0,
  power: o = .8,
  timeConstant: r = 325,
  bounceDamping: c = 10,
  bounceStiffness: m = 500,
  modifyTarget: d,
  min: y,
  max: g,
  restDelta: p = .5,
  restSpeed: x
}) {
  const b = i[0],
    B = {
      done: !1,
      value: b
    },
    C = $ => y !== void 0 && $ < y || g !== void 0 && $ > g,
    _ = $ => y === void 0 ? g : g === void 0 || Math.abs(y - $) < Math.abs(g - $) ? y : g;
  let H = o * l;
  const X = b + H,
    q = d === void 0 ? X : d(X);
  q !== X && (H = q - b);
  const Z = $ => -H * Math.exp(-$ / r),
    Y = $ => q + Z($),
    nt = $ => {
      const bt = Z($),
        zt = Y($);
      B.done = Math.abs(bt) <= p, B.value = B.done ? q : zt
    };
  let W, tt;
  const Q = $ => {
    C(B.value) && (W = $, tt = eo({
      keyframes: [B.value, _(B.value)],
      velocity: kp(Y, $, B.value),
      damping: c,
      stiffness: m,
      restDelta: p,
      restSpeed: x
    }))
  };
  return Q(0), {
    calculatedDuration: null,
    next: $ => {
      let bt = !1;
      return !tt && W === void 0 && (bt = !0, nt($), Q($)), W !== void 0 && $ >= W ? tt.next($ - W) : (!bt && nt($), B)
    }
  }
}

function j2(i, l, o) {
  const r = [],
    c = o || vn.mix || Zp,
    m = i.length - 1;
  for (let d = 0; d < m; d++) {
    let y = c(i[d], i[d + 1]);
    if (l) {
      const g = Array.isArray(l) ? l[d] || Fe : l;
      y = Bl(g, y)
    }
    r.push(y)
  }
  return r
}

function M2(i, l, {
  clamp: o = !0,
  ease: r,
  mixer: c
} = {}) {
  const m = i.length;
  if (Tc(m === l.length), m === 1) return () => l[0];
  if (m === 2 && l[0] === l[1]) return () => l[1];
  const d = i[0] === i[1];
  i[0] > i[m - 1] && (i = [...i].reverse(), l = [...l].reverse());
  const y = j2(l, r, c),
    g = y.length,
    p = x => {
      if (d && x < i[0]) return l[0];
      let b = 0;
      if (g > 1)
        for (; b < i.length - 2 && !(x < i[b + 1]); b++);
      const B = gl(i[b], i[b + 1], x);
      return y[b](B)
    };
  return o ? x => p(gn(i[0], i[m - 1], x)) : p
}

function N2(i, l) {
  const o = i[i.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = gl(0, l, r);
    i.push(wt(o, 1, c))
  }
}

function E2(i) {
  const l = [0];
  return N2(l, i.length - 1), l
}

function D2(i, l) {
  return i.map(o => o * l)
}

function C2(i, l) {
  return i.map(() => l || _p).splice(0, i.length - 1)
}

function hl({
  duration: i = 300,
  keyframes: l,
  times: o,
  ease: r = "easeInOut"
}) {
  const c = qv(r) ? r.map(um) : um(r),
    m = {
      done: !1,
      value: l[0]
    },
    d = D2(o && o.length === l.length ? o : E2(l), i),
    y = M2(d, l, {
      ease: Array.isArray(c) ? c : C2(l, c)
    });
  return {
    calculatedDuration: i,
    next: g => (m.value = y(g), m.done = g >= i, m)
  }
}
const w2 = i => i !== null;

function Oc(i, {
  repeat: l,
  repeatType: o = "loop"
}, r, c = 1) {
  const m = i.filter(w2),
    y = c < 0 || l && o !== "loop" && l % 2 === 1 ? 0 : m.length - 1;
  return !y || r === void 0 ? m[y] : r
}
const z2 = {
  decay: $u,
  inertia: $u,
  tween: hl,
  keyframes: hl,
  spring: eo
};

function Jp(i) {
  typeof i.type == "string" && (i.type = z2[i.type])
}
class Rc {
  constructor() {
    this.updateFinished()
  }
  get finished() {
    return this._finished
  }
  updateFinished() {
    this._finished = new Promise(l => {
      this.resolve = l
    })
  }
  notifyFinished() {
    this.resolve()
  }
  then(l, o) {
    return this.finished.then(l, o)
  }
}
const O2 = i => i / 100;
class Vc extends Rc {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const {
        motionValue: o
      } = this.options;
      o && o.updatedAt !== pe.now() && this.tick(pe.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop ?.())
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause()
  }
  initAnimation() {
    const {
      options: l
    } = this;
    Jp(l);
    const {
      type: o = hl,
      repeat: r = 0,
      repeatDelay: c = 0,
      repeatType: m,
      velocity: d = 0
    } = l;
    let {
      keyframes: y
    } = l;
    const g = o || hl;
    g !== hl && typeof y[0] != "number" && (this.mixKeyframes = Bl(O2, Zp(y[0], y[1])), y = [0, 100]);
    const p = g({
      ...l,
      keyframes: y
    });
    m === "mirror" && (this.mirroredGenerator = g({
      ...l,
      keyframes: [...y].reverse(),
      velocity: -d
    })), p.calculatedDuration === null && (p.calculatedDuration = zc(p));
    const {
      calculatedDuration: x
    } = p;
    this.calculatedDuration = x, this.resolvedDuration = x + c, this.totalDuration = this.resolvedDuration * (r + 1) - c, this.generator = p
  }
  updateTime(l) {
    const o = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = o
  }
  tick(l, o = !1) {
    const {
      generator: r,
      totalDuration: c,
      mixKeyframes: m,
      mirroredGenerator: d,
      resolvedDuration: y,
      calculatedDuration: g
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: p = 0,
      keyframes: x,
      repeat: b,
      repeatType: B,
      repeatDelay: C,
      type: _,
      onUpdate: H,
      finalKeyframe: X
    } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), o ? this.currentTime = l : this.updateTime(l);
    const q = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1),
      Z = this.playbackSpeed >= 0 ? q < 0 : q > c;
    this.currentTime = Math.max(q, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let Y = this.currentTime,
      nt = r;
    if (b) {
      const $ = Math.min(this.currentTime, c) / y;
      let bt = Math.floor($),
        zt = $ % 1;
      !zt && $ >= 1 && (zt = 1), zt === 1 && bt--, bt = Math.min(bt, b + 1), !!(bt % 2) && (B === "reverse" ? (zt = 1 - zt, C && (zt -= C / y)) : B === "mirror" && (nt = d)), Y = gn(0, 1, zt) * y
    }
    const W = Z ? {
      done: !1,
      value: x[0]
    } : nt.next(Y);
    m && (W.value = m(W.value));
    let {
      done: tt
    } = W;
    !Z && g !== null && (tt = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const Q = this.holdTime === null && (this.state === "finished" || this.state === "running" && tt);
    return Q && _ !== $u && (W.value = Oc(x, this.options, X, this.speed)), H && H(W.value), Q && this.finish(), W
  }
  then(l, o) {
    return this.finished.then(l, o)
  }
  get duration() {
    return He(this.calculatedDuration)
  }
  get iterationDuration() {
    const {
      delay: l = 0
    } = this.options || {};
    return this.duration + He(l)
  }
  get time() {
    return He(this.currentTime)
  }
  set time(l) {
    l = Je(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), this.driver ?.start(!1)
  }
  get speed() {
    return this.playbackSpeed
  }
  set speed(l) {
    this.updateTime(pe.now());
    const o = this.playbackSpeed !== l;
    this.playbackSpeed = l, o && (this.time = He(this.currentTime))
  }
  play() {
    if (this.isStopped) return;
    const {
      driver: l = y2,
      startTime: o
    } = this.options;
    this.driver || (this.driver = l(c => this.tick(c))), this.options.onPlay ?.();
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = o ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
  }
  pause() {
    this.state = "paused", this.updateTime(pe.now()), this.holdTime = this.currentTime
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete ?.()
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel ?.()
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0)
  }
  sample(l) {
    return this.startTime = 0, this.tick(l, !0)
  }
  attachTimeline(l) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver ?.stop(), l.observe(this)
  }
}

function R2(i) {
  for (let l = 1; l < i.length; l++) i[l] ?? (i[l] = i[l - 1])
}
const ya = i => i * 180 / Math.PI,
  Iu = i => {
    const l = ya(Math.atan2(i[1], i[0]));
    return tc(l)
  },
  V2 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: i => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
    rotate: Iu,
    rotateZ: Iu,
    skewX: i => ya(Math.atan(i[1])),
    skewY: i => ya(Math.atan(i[2])),
    skew: i => (Math.abs(i[1]) + Math.abs(i[2])) / 2
  },
  tc = i => (i = i % 360, i < 0 && (i += 360), i),
  pm = Iu,
  ym = i => Math.sqrt(i[0] * i[0] + i[1] * i[1]),
  gm = i => Math.sqrt(i[4] * i[4] + i[5] * i[5]),
  _2 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: ym,
    scaleY: gm,
    scale: i => (ym(i) + gm(i)) / 2,
    rotateX: i => tc(ya(Math.atan2(i[6], i[5]))),
    rotateY: i => tc(ya(Math.atan2(-i[2], i[0]))),
    rotateZ: pm,
    rotate: pm,
    skewX: i => ya(Math.atan(i[4])),
    skewY: i => ya(Math.atan(i[1])),
    skew: i => (Math.abs(i[1]) + Math.abs(i[4])) / 2
  };

function ec(i) {
  return i.includes("scale") ? 1 : 0
}

function nc(i, l) {
  if (!i || i === "none") return ec(l);
  const o = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (o) r = _2, c = o;
  else {
    const y = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = V2, c = y
  }
  if (!c) return ec(l);
  const m = r[l],
    d = c[1].split(",").map(L2);
  return typeof m == "function" ? m(d) : d[m]
}
const U2 = (i, l) => {
  const {
    transform: o = "none"
  } = getComputedStyle(i);
  return nc(o, l)
};

function L2(i) {
  return parseFloat(i.trim())
}
const hi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
  mi = new Set(hi),
  vm = i => i === di || i === at,
  H2 = new Set(["x", "y", "z"]),
  F2 = hi.filter(i => !H2.has(i));

function q2(i) {
  const l = [];
  return F2.forEach(o => {
    const r = i.getValue(o);
    r !== void 0 && (l.push([o, r.get()]), r.set(o.startsWith("scale") ? 1 : 0))
  }), l
}
const ga = {
  width: ({
    x: i
  }, {
    paddingLeft: l = "0",
    paddingRight: o = "0"
  }) => i.max - i.min - parseFloat(l) - parseFloat(o),
  height: ({
    y: i
  }, {
    paddingTop: l = "0",
    paddingBottom: o = "0"
  }) => i.max - i.min - parseFloat(l) - parseFloat(o),
  top: (i, {
    top: l
  }) => parseFloat(l),
  left: (i, {
    left: l
  }) => parseFloat(l),
  bottom: ({
    y: i
  }, {
    top: l
  }) => parseFloat(l) + (i.max - i.min),
  right: ({
    x: i
  }, {
    left: l
  }) => parseFloat(l) + (i.max - i.min),
  x: (i, {
    transform: l
  }) => nc(l, "x"),
  y: (i, {
    transform: l
  }) => nc(l, "y")
};
ga.translateX = ga.x;
ga.translateY = ga.y;
const va = new Set;
let ac = !1,
  ic = !1,
  lc = !1;

function Pp() {
  if (ic) {
    const i = Array.from(va).filter(r => r.needsMeasurement),
      l = new Set(i.map(r => r.element)),
      o = new Map;
    l.forEach(r => {
      const c = q2(r);
      c.length && (o.set(r, c), r.render())
    }), i.forEach(r => r.measureInitialState()), l.forEach(r => {
      r.render();
      const c = o.get(r);
      c && c.forEach(([m, d]) => {
        r.getValue(m) ?.set(d)
      })
    }), i.forEach(r => r.measureEndState()), i.forEach(r => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
    })
  }
  ic = !1, ac = !1, va.forEach(i => i.complete(lc)), va.clear()
}

function Wp() {
  va.forEach(i => {
    i.readKeyframes(), i.needsMeasurement && (ic = !0)
  })
}

function Y2() {
  lc = !0, Wp(), Pp(), lc = !1
}
class _c {
  constructor(l, o, r, c, m, d = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = o, this.name = r, this.motionValue = c, this.element = m, this.isAsync = d
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (va.add(this), ac || (ac = !0, Ct.read(Wp), Ct.resolveKeyframes(Pp))) : (this.readKeyframes(), this.complete())
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: l,
      name: o,
      element: r,
      motionValue: c
    } = this;
    if (l[0] === null) {
      const m = c ?.get(),
        d = l[l.length - 1];
      if (m !== void 0) l[0] = m;
      else if (r && o) {
        const y = r.readValue(o, d);
        y != null && (l[0] = y)
      }
      l[0] === void 0 && (l[0] = d), c && m === void 0 && c.set(l[0])
    }
    R2(l)
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(l = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), va.delete(this)
  }
  cancel() {
    this.state === "scheduled" && (va.delete(this), this.state = "pending")
  }
  resume() {
    this.state === "pending" && this.scheduleResolve()
  }
}
const G2 = i => i.startsWith("--");

function X2(i, l, o) {
  G2(l) ? i.style.setProperty(l, o) : i.style[l] = o
}
const Q2 = Bc(() => window.ScrollTimeline !== void 0),
  Z2 = {};

function K2(i, l) {
  const o = Bc(i);
  return () => Z2[l] ?? o()
}
const $p = K2(() => {
    try {
      document.createElement("div").animate({
        opacity: 0
      }, {
        easing: "linear(0, 1)"
      })
    } catch {
      return !1
    }
    return !0
  }, "linearEasing"),
  fl = ([i, l, o, r]) => `cubic-bezier(${i}, ${l}, ${o}, ${r})`,
  xm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: fl([0, .65, .55, 1]),
    circOut: fl([.55, 0, 1, .45]),
    backIn: fl([.31, .01, .66, -.59]),
    backOut: fl([.33, 1.53, .69, .99])
  };

function Ip(i, l) {
  if (i) return typeof i == "function" ? $p() ? Kp(i, l) : "ease-out" : Up(i) ? fl(i) : Array.isArray(i) ? i.map(o => Ip(o, l) || xm.easeOut) : xm[i]
}

function k2(i, l, o, {
  delay: r = 0,
  duration: c = 300,
  repeat: m = 0,
  repeatType: d = "loop",
  ease: y = "easeOut",
  times: g
} = {}, p = void 0) {
  const x = {
    [l]: o
  };
  g && (x.offset = g);
  const b = Ip(y, c);
  Array.isArray(b) && (x.easing = b);
  const B = {
    delay: r,
    duration: c,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: m + 1,
    direction: d === "reverse" ? "alternate" : "normal"
  };
  return p && (B.pseudoElement = p), i.animate(x, B)
}

function t1(i) {
  return typeof i == "function" && "applyToOptions" in i
}

function J2({
  type: i,
  ...l
}) {
  return t1(i) && $p() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l)
}
class P2 extends Rc {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !l) return;
    const {
      element: o,
      name: r,
      keyframes: c,
      pseudoElement: m,
      allowFlatten: d = !1,
      finalKeyframe: y,
      onComplete: g
    } = l;
    this.isPseudoElement = !!m, this.allowFlatten = d, this.options = l, Tc(typeof l.type != "string");
    const p = J2(l);
    this.animation = k2(o, r, c, p, m), p.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !m) {
        const x = Oc(c, this.options, y, this.speed);
        this.updateMotionValue ? this.updateMotionValue(x) : X2(o, r, x), this.animation.cancel()
      }
      g ?.(), this.notifyFinished()
    }
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished())
  }
  pause() {
    this.animation.pause()
  }
  complete() {
    this.animation.finish ?.()
  }
  cancel() {
    try {
      this.animation.cancel()
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const {
      state: l
    } = this;
    l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
  }
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles ?.()
  }
  get duration() {
    const l = this.animation.effect ?.getComputedTiming ?.().duration || 0;
    return He(Number(l))
  }
  get iterationDuration() {
    const {
      delay: l = 0
    } = this.options || {};
    return this.duration + He(l)
  }
  get time() {
    return He(Number(this.animation.currentTime) || 0)
  }
  set time(l) {
    this.finishedTime = null, this.animation.currentTime = Je(l)
  }
  get speed() {
    return this.animation.playbackRate
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), this.animation.playbackRate = l
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState
  }
  get startTime() {
    return Number(this.animation.startTime)
  }
  set startTime(l) {
    this.animation.startTime = l
  }
  attachTimeline({
    timeline: l,
    observe: o
  }) {
    return this.allowFlatten && this.animation.effect ?.updateTiming({
      easing: "linear"
    }), this.animation.onfinish = null, l && Q2() ? (this.animation.timeline = l, Fe) : o(this)
  }
}
const e1 = {
  anticipate: Op,
  backInOut: zp,
  circInOut: Vp
};

function W2(i) {
  return i in e1
}

function $2(i) {
  typeof i.ease == "string" && W2(i.ease) && (i.ease = e1[i.ease])
}
const bm = 10;
class I2 extends P2 {
  constructor(l) {
    $2(l), Jp(l), super(l), l.startTime && (this.startTime = l.startTime), this.options = l
  }
  updateMotionValue(l) {
    const {
      motionValue: o,
      onUpdate: r,
      onComplete: c,
      element: m,
      ...d
    } = this.options;
    if (!o) return;
    if (l !== void 0) {
      o.set(l);
      return
    }
    const y = new Vc({
        ...d,
        autoplay: !1
      }),
      g = Je(this.finishedTime ?? this.time);
    o.setWithVelocity(y.sample(g - bm).value, y.sample(g).value, bm), y.stop()
  }
}
const Sm = (i, l) => l === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && (Zn.test(i) || i === "0") && !i.startsWith("url("));

function tx(i) {
  const l = i[0];
  if (i.length === 1) return !0;
  for (let o = 0; o < i.length; o++)
    if (i[o] !== l) return !0
}

function ex(i, l, o, r) {
  const c = i[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const m = i[i.length - 1],
    d = Sm(c, l),
    y = Sm(m, l);
  return !d || !y ? !1 : tx(i) || (o === "spring" || t1(o)) && r
}

function sc(i) {
  i.duration = 0, i.type = "keyframes"
}
const nx = new Set(["opacity", "clipPath", "filter", "transform"]),
  ax = Bc(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function ix(i) {
  const {
    motionValue: l,
    name: o,
    repeatDelay: r,
    repeatType: c,
    damping: m,
    type: d
  } = i;
  if (!(l ?.owner ?.current instanceof HTMLElement)) return !1;
  const {
    onUpdate: g,
    transformTemplate: p
  } = l.owner.getProps();
  return ax() && o && nx.has(o) && (o !== "transform" || !p) && !g && !r && c !== "mirror" && m !== 0 && d !== "inertia"
}
const lx = 40;
class sx extends Rc {
  constructor({
    autoplay: l = !0,
    delay: o = 0,
    type: r = "keyframes",
    repeat: c = 0,
    repeatDelay: m = 0,
    repeatType: d = "loop",
    keyframes: y,
    name: g,
    motionValue: p,
    element: x,
    ...b
  }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline ?.()), this.keyframeResolver ?.cancel()
    }, this.createdAt = pe.now();
    const B = {
        autoplay: l,
        delay: o,
        type: r,
        repeat: c,
        repeatDelay: m,
        repeatType: d,
        name: g,
        motionValue: p,
        element: x,
        ...b
      },
      C = x ?.KeyframeResolver || _c;
    this.keyframeResolver = new C(y, (_, H, X) => this.onKeyframesResolved(_, H, B, !X), g, p, x), this.keyframeResolver ?.scheduleResolve()
  }
  onKeyframesResolved(l, o, r, c) {
    this.keyframeResolver = void 0;
    const {
      name: m,
      type: d,
      velocity: y,
      delay: g,
      isHandoff: p,
      onUpdate: x
    } = r;
    this.resolvedAt = pe.now(), ex(l, m, d, y) || ((vn.instantAnimations || !g) && x ?.(Oc(l, r, o)), l[0] = l[l.length - 1], sc(r), r.repeat = 0);
    const B = {
        startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > lx ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
        finalKeyframe: o,
        ...r,
        keyframes: l
      },
      C = !p && ix(B) ? new I2({
        ...B,
        element: B.motionValue.owner.current
      }) : new Vc(B);
    C.finished.then(() => this.notifyFinished()).catch(Fe), this.pendingTimeline && (this.stopTimeline = C.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = C
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished
  }
  then(l, o) {
    return this.finished.finally(l).then(() => {})
  }
  get animation() {
    return this._animation || (this.keyframeResolver ?.resume(), Y2()), this._animation
  }
  get duration() {
    return this.animation.duration
  }
  get iterationDuration() {
    return this.animation.iterationDuration
  }
  get time() {
    return this.animation.time
  }
  set time(l) {
    this.animation.time = l
  }
  get speed() {
    return this.animation.speed
  }
  get state() {
    return this.animation.state
  }
  set speed(l) {
    this.animation.speed = l
  }
  get startTime() {
    return this.animation.startTime
  }
  attachTimeline(l) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l, () => this.stop()
  }
  play() {
    this.animation.play()
  }
  pause() {
    this.animation.pause()
  }
  complete() {
    this.animation.complete()
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver ?.cancel()
  }
}
const ox = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function rx(i) {
  const l = ox.exec(i);
  if (!l) return [, ];
  const [, o, r, c] = l;
  return [`--${o??r}`, c]
}

function n1(i, l, o = 1) {
  const [r, c] = rx(i);
  if (!r) return;
  const m = window.getComputedStyle(l).getPropertyValue(r);
  if (m) {
    const d = m.trim();
    return Ap(d) ? parseFloat(d) : d
  }
  return Ec(c) ? n1(c, l, o + 1) : c
}

function Uc(i, l) {
  return i ?. [l] ?? i ?.default ?? i
}
const a1 = new Set(["width", "height", "top", "left", "right", "bottom", ...hi]),
  ux = {
    test: i => i === "auto",
    parse: i => i
  },
  i1 = i => l => l.test(i),
  l1 = [di, at, Pe, Xn, t2, Iv, ux],
  Tm = i => l1.find(i1(i));

function cx(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || Mp(i) : !0
}
const fx = new Set(["brightness", "contrast", "saturate", "opacity"]);

function dx(i) {
  const [l, o] = i.slice(0, -1).split("(");
  if (l === "drop-shadow") return i;
  const [r] = o.match(Dc) || [];
  if (!r) return i;
  const c = o.replace(r, "");
  let m = fx.has(l) ? 1 : 0;
  return r !== o && (m *= 100), l + "(" + m + c + ")"
}
const hx = /\b([a-z-]*)\(.*?\)/gu,
  oc = {
    ...Zn,
    getAnimatableNone: i => {
      const l = i.match(hx);
      return l ? l.map(dx).join(" ") : i
    }
  },
  Bm = {
    ...di,
    transform: Math.round
  },
  mx = {
    rotate: Xn,
    rotateX: Xn,
    rotateY: Xn,
    rotateZ: Xn,
    scale: Zs,
    scaleX: Zs,
    scaleY: Zs,
    scaleZ: Zs,
    skew: Xn,
    skewX: Xn,
    skewY: Xn,
    distance: at,
    translateX: at,
    translateY: at,
    translateZ: at,
    x: at,
    y: at,
    z: at,
    perspective: at,
    transformPerspective: at,
    opacity: vl,
    originX: cm,
    originY: cm,
    originZ: at
  },
  Lc = {
    borderWidth: at,
    borderTopWidth: at,
    borderRightWidth: at,
    borderBottomWidth: at,
    borderLeftWidth: at,
    borderRadius: at,
    radius: at,
    borderTopLeftRadius: at,
    borderTopRightRadius: at,
    borderBottomRightRadius: at,
    borderBottomLeftRadius: at,
    width: at,
    maxWidth: at,
    height: at,
    maxHeight: at,
    top: at,
    right: at,
    bottom: at,
    left: at,
    padding: at,
    paddingTop: at,
    paddingRight: at,
    paddingBottom: at,
    paddingLeft: at,
    margin: at,
    marginTop: at,
    marginRight: at,
    marginBottom: at,
    marginLeft: at,
    backgroundPositionX: at,
    backgroundPositionY: at,
    ...mx,
    zIndex: Bm,
    fillOpacity: vl,
    strokeOpacity: vl,
    numOctaves: Bm
  },
  px = {
    ...Lc,
    color: Xt,
    backgroundColor: Xt,
    outlineColor: Xt,
    fill: Xt,
    stroke: Xt,
    borderColor: Xt,
    borderTopColor: Xt,
    borderRightColor: Xt,
    borderBottomColor: Xt,
    borderLeftColor: Xt,
    filter: oc,
    WebkitFilter: oc
  },
  s1 = i => px[i];

function o1(i, l) {
  let o = s1(i);
  return o !== oc && (o = Zn), o.getAnimatableNone ? o.getAnimatableNone(l) : void 0
}
const yx = new Set(["auto", "none", "0"]);

function gx(i, l, o) {
  let r = 0,
    c;
  for (; r < i.length && !c;) {
    const m = i[r];
    typeof m == "string" && !yx.has(m) && xl(m).values.length && (c = i[r]), r++
  }
  if (c && o)
    for (const m of l) i[m] = o1(o, c)
}
class vx extends _c {
  constructor(l, o, r, c, m) {
    super(l, o, r, c, m, !0)
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: l,
      element: o,
      name: r
    } = this;
    if (!o || !o.current) return;
    super.readKeyframes();
    for (let g = 0; g < l.length; g++) {
      let p = l[g];
      if (typeof p == "string" && (p = p.trim(), Ec(p))) {
        const x = n1(p, o.current);
        x !== void 0 && (l[g] = x), g === l.length - 1 && (this.finalKeyframe = p)
      }
    }
    if (this.resolveNoneKeyframes(), !a1.has(r) || l.length !== 2) return;
    const [c, m] = l, d = Tm(c), y = Tm(m);
    if (d !== y)
      if (vm(d) && vm(y))
        for (let g = 0; g < l.length; g++) {
          const p = l[g];
          typeof p == "string" && (l[g] = parseFloat(p))
        } else ga[r] && (this.needsMeasurement = !0)
  }
  resolveNoneKeyframes() {
    const {
      unresolvedKeyframes: l,
      name: o
    } = this, r = [];
    for (let c = 0; c < l.length; c++)(l[c] === null || cx(l[c])) && r.push(c);
    r.length && gx(l, r, o)
  }
  measureInitialState() {
    const {
      element: l,
      unresolvedKeyframes: o,
      name: r
    } = this;
    if (!l || !l.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ga[r](l.measureViewportBox(), window.getComputedStyle(l.current)), o[0] = this.measuredOrigin;
    const c = o[o.length - 1];
    c !== void 0 && l.getValue(r, c).jump(c, !1)
  }
  measureEndState() {
    const {
      element: l,
      name: o,
      unresolvedKeyframes: r
    } = this;
    if (!l || !l.current) return;
    const c = l.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const m = r.length - 1,
      d = r[m];
    r[m] = ga[o](l.measureViewportBox(), window.getComputedStyle(l.current)), d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d), this.removedTransforms ?.length && this.removedTransforms.forEach(([y, g]) => {
      l.getValue(y).set(g)
    }), this.resolveNoneKeyframes()
  }
}

function r1(i, l, o) {
  if (i instanceof EventTarget) return [i];
  if (typeof i == "string") {
    const c = document.querySelectorAll(i);
    return c ? Array.from(c) : []
  }
  return Array.from(i)
}
const u1 = (i, l) => l && typeof i == "number" ? l.transform(i) : i;

function c1(i) {
  return jp(i) && "offsetHeight" in i
}
const Am = 30,
  xx = i => !isNaN(parseFloat(i));
class bx {
  constructor(l, o = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = r => {
      const c = pe.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.events.change ?.notify(this.current), this.dependents))
        for (const m of this.dependents) m.dirty()
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = o.owner
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = pe.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = xx(this.current))
  }
  setPrevFrameValue(l = this.current) {
    this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt
  }
  onChange(l) {
    return this.on("change", l)
  }
  on(l, o) {
    this.events[l] || (this.events[l] = new Ac);
    const r = this.events[l].add(o);
    return l === "change" ? () => {
      r(), Ct.read(() => {
        this.events.change.getSize() || this.stop()
      })
    } : r
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear()
  }
  attach(l, o) {
    this.passiveEffect = l, this.stopPassiveEffect = o
  }
  set(l) {
    this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l)
  }
  setWithVelocity(l, o, r) {
    this.set(o), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - r
  }
  jump(l, o = !0) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, o && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
  }
  dirty() {
    this.events.change ?.notify(this.current)
  }
  addDependent(l) {
    this.dependents || (this.dependents = new Set), this.dependents.add(l)
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l)
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    const l = pe.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Am) return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, Am);
    return Np(parseFloat(this.current) - parseFloat(this.prevFrameValue), o)
  }
  start(l) {
    return this.stop(), new Promise(o => {
      this.hasAnimated = !0, this.animation = l(o), this.events.animationStart && this.events.animationStart.notify()
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
    })
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
  }
  isAnimating() {
    return !!this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    this.dependents ?.clear(), this.events.destroy ?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
  }
}

function ui(i, l) {
  return new bx(i, l)
}
const {
  schedule: Hc
} = Lp(queueMicrotask, !1), Xe = {
  x: !1,
  y: !1
};

function f1() {
  return Xe.x || Xe.y
}

function Sx(i) {
  return i === "x" || i === "y" ? Xe[i] ? null : (Xe[i] = !0, () => {
    Xe[i] = !1
  }) : Xe.x || Xe.y ? null : (Xe.x = Xe.y = !0, () => {
    Xe.x = Xe.y = !1
  })
}

function d1(i, l) {
  const o = r1(i),
    r = new AbortController,
    c = {
      passive: !0,
      ...l,
      signal: r.signal
    };
  return [o, c, () => r.abort()]
}

function jm(i) {
  return !(i.pointerType === "touch" || f1())
}

function Tx(i, l, o = {}) {
  const [r, c, m] = d1(i, o), d = y => {
    if (!jm(y)) return;
    const {
      target: g
    } = y, p = l(g, y);
    if (typeof p != "function" || !g) return;
    const x = b => {
      jm(b) && (p(b), g.removeEventListener("pointerleave", x))
    };
    g.addEventListener("pointerleave", x, c)
  };
  return r.forEach(y => {
    y.addEventListener("pointerenter", d, c)
  }), m
}
const h1 = (i, l) => l ? i === l ? !0 : h1(i, l.parentElement) : !1,
  Fc = i => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1,
  Bx = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function Ax(i) {
  return Bx.has(i.tagName) || i.tabIndex !== -1
}
const Ps = new WeakSet;

function Mm(i) {
  return l => {
    l.key === "Enter" && i(l)
  }
}

function Lu(i, l) {
  i.dispatchEvent(new PointerEvent("pointer" + l, {
    isPrimary: !0,
    bubbles: !0
  }))
}
const jx = (i, l) => {
  const o = i.currentTarget;
  if (!o) return;
  const r = Mm(() => {
    if (Ps.has(o)) return;
    Lu(o, "down");
    const c = Mm(() => {
        Lu(o, "up")
      }),
      m = () => Lu(o, "cancel");
    o.addEventListener("keyup", c, l), o.addEventListener("blur", m, l)
  });
  o.addEventListener("keydown", r, l), o.addEventListener("blur", () => o.removeEventListener("keydown", r), l)
};

function Nm(i) {
  return Fc(i) && !f1()
}

function Mx(i, l, o = {}) {
  const [r, c, m] = d1(i, o), d = y => {
    const g = y.currentTarget;
    if (!Nm(y)) return;
    Ps.add(g);
    const p = l(g, y),
      x = (C, _) => {
        window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", B), Ps.has(g) && Ps.delete(g), Nm(C) && typeof p == "function" && p(C, {
          success: _
        })
      },
      b = C => {
        x(C, g === window || g === document || o.useGlobalTarget || h1(g, C.target))
      },
      B = C => {
        x(C, !1)
      };
    window.addEventListener("pointerup", b, c), window.addEventListener("pointercancel", B, c)
  };
  return r.forEach(y => {
    (o.useGlobalTarget ? window : y).addEventListener("pointerdown", d, c), c1(y) && (y.addEventListener("focus", p => jx(p, c)), !Ax(y) && !y.hasAttribute("tabindex") && (y.tabIndex = 0))
  }), m
}

function m1(i) {
  return jp(i) && "ownerSVGElement" in i
}

function Nx(i) {
  return m1(i) && i.tagName === "svg"
}
const ae = i => !!(i && i.getVelocity),
  Ex = [...l1, Xt, Zn],
  Dx = i => Ex.find(i1(i)),
  qc = F.createContext({
    transformPagePoint: i => i,
    isStatic: !1,
    reducedMotion: "never"
  });

function Em(i, l) {
  if (typeof i == "function") return i(l);
  i != null && (i.current = l)
}

function Cx(...i) {
  return l => {
    let o = !1;
    const r = i.map(c => {
      const m = Em(c, l);
      return !o && typeof m == "function" && (o = !0), m
    });
    if (o) return () => {
      for (let c = 0; c < r.length; c++) {
        const m = r[c];
        typeof m == "function" ? m() : Em(i[c], null)
      }
    }
  }
}

function wx(...i) {
  return F.useCallback(Cx(...i), i)
}
class zx extends F.Component {
  getSnapshotBeforeUpdate(l) {
    const o = this.props.childRef.current;
    if (o && l.isPresent && !this.props.isPresent) {
      const r = o.offsetParent,
        c = c1(r) && r.offsetWidth || 0,
        m = this.props.sizeRef.current;
      m.height = o.offsetHeight || 0, m.width = o.offsetWidth || 0, m.top = o.offsetTop, m.left = o.offsetLeft, m.right = c - m.width - m.left
    }
    return null
  }
  componentDidUpdate() {}
  render() {
    return this.props.children
  }
}

function Ox({
  children: i,
  isPresent: l,
  anchorX: o,
  root: r
}) {
  const c = F.useId(),
    m = F.useRef(null),
    d = F.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0
    }),
    {
      nonce: y
    } = F.useContext(qc),
    g = wx(m, i ?.ref);
  return F.useInsertionEffect(() => {
    const {
      width: p,
      height: x,
      top: b,
      left: B,
      right: C
    } = d.current;
    if (l || !m.current || !p || !x) return;
    const _ = o === "left" ? `left: ${B}` : `right: ${C}`;
    m.current.dataset.motionPopId = c;
    const H = document.createElement("style");
    y && (H.nonce = y);
    const X = r ?? document.head;
    return X.appendChild(H), H.sheet && H.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${x}px !important;
            ${_}px !important;
            top: ${b}px !important;
          }
        `), () => {
      X.contains(H) && X.removeChild(H)
    }
  }, [l]), h.jsx(zx, {
    isPresent: l,
    childRef: m,
    sizeRef: d,
    children: F.cloneElement(i, {
      ref: g
    })
  })
}
const Rx = ({
  children: i,
  initial: l,
  isPresent: o,
  onExitComplete: r,
  custom: c,
  presenceAffectsLayout: m,
  mode: d,
  anchorX: y,
  root: g
}) => {
  const p = vc(Vx),
    x = F.useId();
  let b = !0,
    B = F.useMemo(() => (b = !1, {
      id: x,
      initial: l,
      isPresent: o,
      custom: c,
      onExitComplete: C => {
        p.set(C, !0);
        for (const _ of p.values())
          if (!_) return;
        r && r()
      },
      register: C => (p.set(C, !1), () => p.delete(C))
    }), [o, p, r]);
  return m && b && (B = {
    ...B
  }), F.useMemo(() => {
    p.forEach((C, _) => p.set(_, !1))
  }, [o]), F.useEffect(() => {
    !o && !p.size && r && r()
  }, [o]), d === "popLayout" && (i = h.jsx(Ox, {
    isPresent: o,
    anchorX: y,
    root: g,
    children: i
  })), h.jsx(io.Provider, {
    value: B,
    children: i
  })
};

function Vx() {
  return new Map
}

function p1(i = !0) {
  const l = F.useContext(io);
  if (l === null) return [!0, null];
  const {
    isPresent: o,
    onExitComplete: r,
    register: c
  } = l, m = F.useId();
  F.useEffect(() => {
    if (i) return c(m)
  }, [i]);
  const d = F.useCallback(() => i && r && r(m), [m, r, i]);
  return !o && r ? [!1, d] : [!0]
}
const Ks = i => i.key || "";

function Dm(i) {
  const l = [];
  return F.Children.forEach(i, o => {
    F.isValidElement(o) && l.push(o)
  }), l
}
const Cm = ({
    children: i,
    custom: l,
    initial: o = !0,
    onExitComplete: r,
    presenceAffectsLayout: c = !0,
    mode: m = "sync",
    propagate: d = !1,
    anchorX: y = "left",
    root: g
  }) => {
    const [p, x] = p1(d), b = F.useMemo(() => Dm(i), [i]), B = d && !p ? [] : b.map(Ks), C = F.useRef(!0), _ = F.useRef(b), H = vc(() => new Map), [X, q] = F.useState(b), [Z, Y] = F.useState(b);
    Bp(() => {
      C.current = !1, _.current = b;
      for (let tt = 0; tt < Z.length; tt++) {
        const Q = Ks(Z[tt]);
        B.includes(Q) ? H.delete(Q) : H.get(Q) !== !0 && H.set(Q, !1)
      }
    }, [Z, B.length, B.join("-")]);
    const nt = [];
    if (b !== X) {
      let tt = [...b];
      for (let Q = 0; Q < Z.length; Q++) {
        const $ = Z[Q],
          bt = Ks($);
        B.includes(bt) || (tt.splice(Q, 0, $), nt.push($))
      }
      return m === "wait" && nt.length && (tt = nt), Y(Dm(tt)), q(b), null
    }
    const {
      forceRender: W
    } = F.useContext(gc);
    return h.jsx(h.Fragment, {
      children: Z.map(tt => {
        const Q = Ks(tt),
          $ = d && !p ? !1 : b === Z || B.includes(Q),
          bt = () => {
            if (H.has(Q)) H.set(Q, !0);
            else return;
            let zt = !0;
            H.forEach(Qt => {
              Qt || (zt = !1)
            }), zt && (W ?.(), Y(_.current), d && x ?.(), r && r())
          };
        return h.jsx(Rx, {
          isPresent: $,
          initial: !C.current || o ? void 0 : !1,
          custom: l,
          presenceAffectsLayout: c,
          mode: m,
          root: g,
          onExitComplete: $ ? void 0 : bt,
          anchorX: y,
          children: tt
        }, Q)
      })
    })
  },
  y1 = F.createContext({
    strict: !1
  }),
  wm = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  },
  ci = {};
for (const i in wm) ci[i] = {
  isEnabled: l => wm[i].some(o => !!l[o])
};

function _x(i) {
  for (const l in i) ci[l] = {
    ...ci[l],
    ...i[l]
  }
}
const Ux = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function no(i) {
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || Ux.has(i)
}
let g1 = i => !no(i);

function Lx(i) {
  typeof i == "function" && (g1 = l => l.startsWith("on") ? !no(l) : i(l))
}
try {
  Lx(require("@emotion/is-prop-valid").default)
} catch {}

function Hx(i, l, o) {
  const r = {};
  for (const c in i) c === "values" && typeof i.values == "object" || (g1(c) || o === !0 && no(c) || !l && !no(c) || i.draggable && c.startsWith("onDrag")) && (r[c] = i[c]);
  return r
}
const lo = F.createContext({});

function so(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function"
}

function bl(i) {
  return typeof i == "string" || Array.isArray(i)
}
const Yc = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  Gc = ["initial", ...Yc];

function oo(i) {
  return so(i.animate) || Gc.some(l => bl(i[l]))
}

function v1(i) {
  return !!(oo(i) || i.variants)
}

function Fx(i, l) {
  if (oo(i)) {
    const {
      initial: o,
      animate: r
    } = i;
    return {
      initial: o === !1 || bl(o) ? o : void 0,
      animate: bl(r) ? r : void 0
    }
  }
  return i.inherit !== !1 ? l : {}
}

function qx(i) {
  const {
    initial: l,
    animate: o
  } = Fx(i, F.useContext(lo));
  return F.useMemo(() => ({
    initial: l,
    animate: o
  }), [zm(l), zm(o)])
}

function zm(i) {
  return Array.isArray(i) ? i.join(" ") : i
}
const Sl = {};

function Yx(i) {
  for (const l in i) Sl[l] = i[l], Nc(l) && (Sl[l].isCSSVariable = !0)
}

function x1(i, {
  layout: l,
  layoutId: o
}) {
  return mi.has(i) || i.startsWith("origin") || (l || o !== void 0) && (!!Sl[i] || i === "opacity")
}
const Gx = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  },
  Xx = hi.length;

function Qx(i, l, o) {
  let r = "",
    c = !0;
  for (let m = 0; m < Xx; m++) {
    const d = hi[m],
      y = i[d];
    if (y === void 0) continue;
    let g = !0;
    if (typeof y == "number" ? g = y === (d.startsWith("scale") ? 1 : 0) : g = parseFloat(y) === 0, !g || o) {
      const p = u1(y, Lc[d]);
      if (!g) {
        c = !1;
        const x = Gx[d] || d;
        r += `${x}(${p}) `
      }
      o && (l[d] = p)
    }
  }
  return r = r.trim(), o ? r = o(l, c ? "" : r) : c && (r = "none"), r
}

function Xc(i, l, o) {
  const {
    style: r,
    vars: c,
    transformOrigin: m
  } = i;
  let d = !1,
    y = !1;
  for (const g in l) {
    const p = l[g];
    if (mi.has(g)) {
      d = !0;
      continue
    } else if (Nc(g)) {
      c[g] = p;
      continue
    } else {
      const x = u1(p, Lc[g]);
      g.startsWith("origin") ? (y = !0, m[g] = x) : r[g] = x
    }
  }
  if (l.transform || (d || o ? r.transform = Qx(l, i.transform, o) : r.transform && (r.transform = "none")), y) {
    const {
      originX: g = "50%",
      originY: p = "50%",
      originZ: x = 0
    } = m;
    r.transformOrigin = `${g} ${p} ${x}`
  }
}
const Qc = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});

function b1(i, l, o) {
  for (const r in l) !ae(l[r]) && !x1(r, o) && (i[r] = l[r])
}

function Zx({
  transformTemplate: i
}, l) {
  return F.useMemo(() => {
    const o = Qc();
    return Xc(o, l, i), Object.assign({}, o.vars, o.style)
  }, [l])
}

function Kx(i, l) {
  const o = i.style || {},
    r = {};
  return b1(r, o, i), Object.assign(r, Zx(i, l)), r
}

function kx(i, l) {
  const o = {},
    r = Kx(i, l);
  return i.drag && i.dragListener !== !1 && (o.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = i.drag === !0 ? "none" : `pan-${i.drag==="x"?"y":"x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (o.tabIndex = 0), o.style = r, o
}
const Jx = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  },
  Px = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };

function Wx(i, l, o = 1, r = 0, c = !0) {
  i.pathLength = 1;
  const m = c ? Jx : Px;
  i[m.offset] = at.transform(-r);
  const d = at.transform(l),
    y = at.transform(o);
  i[m.array] = `${d} ${y}`
}

function S1(i, {
  attrX: l,
  attrY: o,
  attrScale: r,
  pathLength: c,
  pathSpacing: m = 1,
  pathOffset: d = 0,
  ...y
}, g, p, x) {
  if (Xc(i, y, p), g) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return
  }
  i.attrs = i.style, i.style = {};
  const {
    attrs: b,
    style: B
  } = i;
  b.transform && (B.transform = b.transform, delete b.transform), (B.transform || b.transformOrigin) && (B.transformOrigin = b.transformOrigin ?? "50% 50%", delete b.transformOrigin), B.transform && (B.transformBox = x ?.transformBox ?? "fill-box", delete b.transformBox), l !== void 0 && (b.x = l), o !== void 0 && (b.y = o), r !== void 0 && (b.scale = r), c !== void 0 && Wx(b, c, m, d, !1)
}
const T1 = () => ({
    ...Qc(),
    attrs: {}
  }),
  B1 = i => typeof i == "string" && i.toLowerCase() === "svg";

function $x(i, l, o, r) {
  const c = F.useMemo(() => {
    const m = T1();
    return S1(m, l, B1(r), i.transformTemplate, i.style), {
      ...m.attrs,
      style: {
        ...m.style
      }
    }
  }, [l]);
  if (i.style) {
    const m = {};
    b1(m, i.style, i), c.style = {
      ...m,
      ...c.style
    }
  }
  return c
}
const Ix = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Zc(i) {
  return typeof i != "string" || i.includes("-") ? !1 : !!(Ix.indexOf(i) > -1 || /[A-Z]/u.test(i))
}

function tb(i, l, o, {
  latestValues: r
}, c, m = !1) {
  const y = (Zc(i) ? $x : kx)(l, r, c, i),
    g = Hx(l, typeof i == "string", m),
    p = i !== F.Fragment ? {
      ...g,
      ...y,
      ref: o
    } : {},
    {
      children: x
    } = l,
    b = F.useMemo(() => ae(x) ? x.get() : x, [x]);
  return F.createElement(i, {
    ...p,
    children: b
  })
}

function Om(i) {
  const l = [{}, {}];
  return i ?.values.forEach((o, r) => {
    l[0][r] = o.get(), l[1][r] = o.getVelocity()
  }), l
}

function Kc(i, l, o, r) {
  if (typeof l == "function") {
    const [c, m] = Om(r);
    l = l(o !== void 0 ? o : i.custom, c, m)
  }
  if (typeof l == "string" && (l = i.variants && i.variants[l]), typeof l == "function") {
    const [c, m] = Om(r);
    l = l(o !== void 0 ? o : i.custom, c, m)
  }
  return l
}

function Ws(i) {
  return ae(i) ? i.get() : i
}

function eb({
  scrapeMotionValuesFromProps: i,
  createRenderState: l
}, o, r, c) {
  return {
    latestValues: nb(o, r, c, i),
    renderState: l()
  }
}

function nb(i, l, o, r) {
  const c = {},
    m = r(i, {});
  for (const B in m) c[B] = Ws(m[B]);
  let {
    initial: d,
    animate: y
  } = i;
  const g = oo(i),
    p = v1(i);
  l && p && !g && i.inherit !== !1 && (d === void 0 && (d = l.initial), y === void 0 && (y = l.animate));
  let x = o ? o.initial === !1 : !1;
  x = x || d === !1;
  const b = x ? y : d;
  if (b && typeof b != "boolean" && !so(b)) {
    const B = Array.isArray(b) ? b : [b];
    for (let C = 0; C < B.length; C++) {
      const _ = Kc(i, B[C]);
      if (_) {
        const {
          transitionEnd: H,
          transition: X,
          ...q
        } = _;
        for (const Z in q) {
          let Y = q[Z];
          if (Array.isArray(Y)) {
            const nt = x ? Y.length - 1 : 0;
            Y = Y[nt]
          }
          Y !== null && (c[Z] = Y)
        }
        for (const Z in H) c[Z] = H[Z]
      }
    }
  }
  return c
}
const A1 = i => (l, o) => {
  const r = F.useContext(lo),
    c = F.useContext(io),
    m = () => eb(i, l, r, c);
  return o ? m() : vc(m)
};

function kc(i, l, o) {
  const {
    style: r
  } = i, c = {};
  for (const m in r)(ae(r[m]) || l.style && ae(l.style[m]) || x1(m, i) || o ?.getValue(m) ?.liveStyle !== void 0) && (c[m] = r[m]);
  return c
}
const ab = A1({
  scrapeMotionValuesFromProps: kc,
  createRenderState: Qc
});

function j1(i, l, o) {
  const r = kc(i, l, o);
  for (const c in i)
    if (ae(i[c]) || ae(l[c])) {
      const m = hi.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      r[m] = i[c]
    } return r
}
const ib = A1({
    scrapeMotionValuesFromProps: j1,
    createRenderState: T1
  }),
  lb = Symbol.for("motionComponentSymbol");

function ii(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current")
}

function sb(i, l, o) {
  return F.useCallback(r => {
    r && i.onMount && i.onMount(r), l && (r ? l.mount(r) : l.unmount()), o && (typeof o == "function" ? o(r) : ii(o) && (o.current = r))
  }, [l])
}
const Jc = i => i.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  ob = "framerAppearId",
  M1 = "data-" + Jc(ob),
  N1 = F.createContext({});

function rb(i, l, o, r, c) {
  const {
    visualElement: m
  } = F.useContext(lo), d = F.useContext(y1), y = F.useContext(io), g = F.useContext(qc).reducedMotion, p = F.useRef(null);
  r = r || d.renderer, !p.current && r && (p.current = r(i, {
    visualState: l,
    parent: m,
    props: o,
    presenceContext: y,
    blockInitialAnimation: y ? y.initial === !1 : !1,
    reducedMotionConfig: g
  }));
  const x = p.current,
    b = F.useContext(N1);
  x && !x.projection && c && (x.type === "html" || x.type === "svg") && ub(p.current, o, c, b);
  const B = F.useRef(!1);
  F.useInsertionEffect(() => {
    x && B.current && x.update(o, y)
  });
  const C = o[M1],
    _ = F.useRef(!!C && !window.MotionHandoffIsComplete ?.(C) && window.MotionHasOptimisedAnimation ?.(C));
  return Bp(() => {
    x && (B.current = !0, window.MotionIsMounted = !0, x.updateFeatures(), x.scheduleRenderMicrotask(), _.current && x.animationState && x.animationState.animateChanges())
  }), F.useEffect(() => {
    x && (!_.current && x.animationState && x.animationState.animateChanges(), _.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete ?.(C)
    }), _.current = !1), x.enteringChildren = void 0)
  }), x
}

function ub(i, l, o, r) {
  const {
    layoutId: c,
    layout: m,
    drag: d,
    dragConstraints: y,
    layoutScroll: g,
    layoutRoot: p,
    layoutCrossfade: x
  } = l;
  i.projection = new o(i.latestValues, l["data-framer-portal-id"] ? void 0 : E1(i.parent)), i.projection.setOptions({
    layoutId: c,
    layout: m,
    alwaysMeasureLayout: !!d || y && ii(y),
    visualElement: i,
    animationType: typeof m == "string" ? m : "both",
    initialPromotionConfig: r,
    crossfade: x,
    layoutScroll: g,
    layoutRoot: p
  })
}

function E1(i) {
  if (i) return i.options.allowProjection !== !1 ? i.projection : E1(i.parent)
}

function Hu(i, {
  forwardMotionProps: l = !1
} = {}, o, r) {
  o && _x(o);
  const c = Zc(i) ? ib : ab;

  function m(y, g) {
    let p;
    const x = {
        ...F.useContext(qc),
        ...y,
        layoutId: cb(y)
      },
      {
        isStatic: b
      } = x,
      B = qx(y),
      C = c(y, b);
    if (!b && xc) {
      fb();
      const _ = db(x);
      p = _.MeasureLayout, B.visualElement = rb(i, C, x, r, _.ProjectionNode)
    }
    return h.jsxs(lo.Provider, {
      value: B,
      children: [p && B.visualElement ? h.jsx(p, {
        visualElement: B.visualElement,
        ...x
      }) : null, tb(i, y, sb(C, B.visualElement, g), C, b, l)]
    })
  }
  m.displayName = `motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;
  const d = F.forwardRef(m);
  return d[lb] = i, d
}

function cb({
  layoutId: i
}) {
  const l = F.useContext(gc).id;
  return l && i !== void 0 ? l + "-" + i : i
}

function fb(i, l) {
  F.useContext(y1).strict
}

function db(i) {
  const {
    drag: l,
    layout: o
  } = ci;
  if (!l && !o) return {};
  const r = {
    ...l,
    ...o
  };
  return {
    MeasureLayout: l ?.isEnabled(i) || o ?.isEnabled(i) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  }
}

function hb(i, l) {
  if (typeof Proxy > "u") return Hu;
  const o = new Map,
    r = (m, d) => Hu(m, d, i, l),
    c = (m, d) => r(m, d);
  return new Proxy(c, {
    get: (m, d) => d === "create" ? r : (o.has(d) || o.set(d, Hu(d, void 0, i, l)), o.get(d))
  })
}

function D1({
  top: i,
  left: l,
  right: o,
  bottom: r
}) {
  return {
    x: {
      min: l,
      max: o
    },
    y: {
      min: i,
      max: r
    }
  }
}

function mb({
  x: i,
  y: l
}) {
  return {
    top: l.min,
    right: i.max,
    bottom: l.max,
    left: i.min
  }
}

function pb(i, l) {
  if (!l) return i;
  const o = l({
      x: i.left,
      y: i.top
    }),
    r = l({
      x: i.right,
      y: i.bottom
    });
  return {
    top: o.y,
    left: o.x,
    bottom: r.y,
    right: r.x
  }
}

function Fu(i) {
  return i === void 0 || i === 1
}

function rc({
  scale: i,
  scaleX: l,
  scaleY: o
}) {
  return !Fu(i) || !Fu(l) || !Fu(o)
}

function ma(i) {
  return rc(i) || C1(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY
}

function C1(i) {
  return Rm(i.x) || Rm(i.y)
}

function Rm(i) {
  return i && i !== "0%"
}

function ao(i, l, o) {
  const r = i - o,
    c = l * r;
  return o + c
}

function Vm(i, l, o, r, c) {
  return c !== void 0 && (i = ao(i, c, r)), ao(i, o, r) + l
}

function uc(i, l = 0, o = 1, r, c) {
  i.min = Vm(i.min, l, o, r, c), i.max = Vm(i.max, l, o, r, c)
}

function w1(i, {
  x: l,
  y: o
}) {
  uc(i.x, l.translate, l.scale, l.originPoint), uc(i.y, o.translate, o.scale, o.originPoint)
}
const _m = .999999999999,
  Um = 1.0000000000001;

function yb(i, l, o, r = !1) {
  const c = o.length;
  if (!c) return;
  l.x = l.y = 1;
  let m, d;
  for (let y = 0; y < c; y++) {
    m = o[y], d = m.projectionDelta;
    const {
      visualElement: g
    } = m.options;
    g && g.props.style && g.props.style.display === "contents" || (r && m.options.layoutScroll && m.scroll && m !== m.root && si(i, {
      x: -m.scroll.offset.x,
      y: -m.scroll.offset.y
    }), d && (l.x *= d.x.scale, l.y *= d.y.scale, w1(i, d)), r && ma(m.latestValues) && si(i, m.latestValues))
  }
  l.x < Um && l.x > _m && (l.x = 1), l.y < Um && l.y > _m && (l.y = 1)
}

function li(i, l) {
  i.min = i.min + l, i.max = i.max + l
}

function Lm(i, l, o, r, c = .5) {
  const m = wt(i.min, i.max, c);
  uc(i, l, o, m, r)
}

function si(i, l) {
  Lm(i.x, l.x, l.scaleX, l.scale, l.originX), Lm(i.y, l.y, l.scaleY, l.scale, l.originY)
}

function z1(i, l) {
  return D1(pb(i.getBoundingClientRect(), l))
}

function gb(i, l, o) {
  const r = z1(i, o),
    {
      scroll: c
    } = l;
  return c && (li(r.x, c.offset.x), li(r.y, c.offset.y)), r
}
const Hm = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  }),
  oi = () => ({
    x: Hm(),
    y: Hm()
  }),
  Fm = () => ({
    min: 0,
    max: 0
  }),
  Ht = () => ({
    x: Fm(),
    y: Fm()
  }),
  cc = {
    current: null
  },
  O1 = {
    current: !1
  };

function vb() {
  if (O1.current = !0, !!xc)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"),
        l = () => cc.current = i.matches;
      i.addEventListener("change", l), l()
    } else cc.current = !1
}
const xb = new WeakMap;

function bb(i, l, o) {
  for (const r in l) {
    const c = l[r],
      m = o[r];
    if (ae(c)) i.addValue(r, c);
    else if (ae(m)) i.addValue(r, ui(c, {
      owner: i
    }));
    else if (m !== c)
      if (i.hasValue(r)) {
        const d = i.getValue(r);
        d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c)
      } else {
        const d = i.getStaticValue(r);
        i.addValue(r, ui(d !== void 0 ? d : c, {
          owner: i
        }))
      }
  }
  for (const r in o) l[r] === void 0 && i.removeValue(r);
  return l
}
const qm = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Sb {
  scrapeMotionValuesFromProps(l, o, r) {
    return {}
  }
  constructor({
    parent: l,
    props: o,
    presenceContext: r,
    reducedMotionConfig: c,
    blockInitialAnimation: m,
    visualState: d
  }, y = {}) {
    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = _c, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const B = pe.now();
      this.renderScheduledAt < B && (this.renderScheduledAt = B, Ct.render(this.render, !1, !0))
    };
    const {
      latestValues: g,
      renderState: p
    } = d;
    this.latestValues = g, this.baseTarget = {
      ...g
    }, this.initialValues = o.initial ? {
      ...g
    } : {}, this.renderState = p, this.parent = l, this.props = o, this.presenceContext = r, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.options = y, this.blockInitialAnimation = !!m, this.isControllingVariants = oo(o), this.isVariantNode = v1(o), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(l && l.current);
    const {
      willChange: x,
      ...b
    } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (const B in b) {
      const C = b[B];
      g[B] !== void 0 && ae(C) && C.set(g[B])
    }
  }
  mount(l) {
    this.current = l, xb.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((o, r) => this.bindToMotionValue(r, o)), O1.current || vb(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : cc.current, this.parent ?.addChild(this), this.update(this.props, this.presenceContext)
  }
  unmount() {
    this.projection && this.projection.unmount(), Qn(this.notifyUpdate), Qn(this.render), this.valueSubscriptions.forEach(l => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent ?.removeChild(this);
    for (const l in this.events) this.events[l].clear();
    for (const l in this.features) {
      const o = this.features[l];
      o && (o.unmount(), o.isMounted = !1)
    }
    this.current = null
  }
  addChild(l) {
    this.children.add(l), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(l)
  }
  removeChild(l) {
    this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l)
  }
  bindToMotionValue(l, o) {
    this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
    const r = mi.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", d => {
      this.latestValues[l] = d, this.props.onUpdate && Ct.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
    });
    let m;
    window.MotionCheckAppearSync && (m = window.MotionCheckAppearSync(this, l, o)), this.valueSubscriptions.set(l, () => {
      c(), m && m(), o.owner && o.stop()
    })
  }
  sortNodePosition(l) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current)
  }
  updateFeatures() {
    let l = "animation";
    for (l in ci) {
      const o = ci[l];
      if (!o) continue;
      const {
        isEnabled: r,
        Feature: c
      } = o;
      if (!this.features[l] && c && r(this.props) && (this.features[l] = new c(this)), this.features[l]) {
        const m = this.features[l];
        m.isMounted ? m.update() : (m.mount(), m.isMounted = !0)
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props)
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ht()
  }
  getStaticValue(l) {
    return this.latestValues[l]
  }
  setStaticValue(l, o) {
    this.latestValues[l] = o
  }
  update(l, o) {
    (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = o;
    for (let r = 0; r < qm.length; r++) {
      const c = qm[r];
      this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const m = "on" + c,
        d = l[m];
      d && (this.propEventSubscriptions[c] = this.on(c, d))
    }
    this.prevMotionValues = bb(this, this.scrapeMotionValuesFromProps(l, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
  }
  getProps() {
    return this.props
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
  }
  addVariantChild(l) {
    const o = this.getClosestVariantNode();
    if (o) return o.variantChildren && o.variantChildren.add(l), () => o.variantChildren.delete(l)
  }
  addValue(l, o) {
    const r = this.values.get(l);
    o !== r && (r && this.removeValue(l), this.bindToMotionValue(l, o), this.values.set(l, o), this.latestValues[l] = o.get())
  }
  removeValue(l) {
    this.values.delete(l);
    const o = this.valueSubscriptions.get(l);
    o && (o(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState)
  }
  hasValue(l) {
    return this.values.has(l)
  }
  getValue(l, o) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let r = this.values.get(l);
    return r === void 0 && o !== void 0 && (r = ui(o === null ? void 0 : o, {
      owner: this
    }), this.addValue(l, r)), r
  }
  readValue(l, o) {
    let r = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
    return r != null && (typeof r == "string" && (Ap(r) || Mp(r)) ? r = parseFloat(r) : !Dx(r) && Zn.test(o) && (r = o1(l, o)), this.setBaseTarget(l, ae(r) ? r.get() : r)), ae(r) ? r.get() : r
  }
  setBaseTarget(l, o) {
    this.baseTarget[l] = o
  }
  getBaseTarget(l) {
    const {
      initial: o
    } = this.props;
    let r;
    if (typeof o == "string" || typeof o == "object") {
      const m = Kc(this.props, o, this.presenceContext ?.custom);
      m && (r = m[l])
    }
    if (o && r !== void 0) return r;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !ae(c) ? c : this.initialValues[l] !== void 0 && r === void 0 ? void 0 : this.baseTarget[l]
  }
  on(l, o) {
    return this.events[l] || (this.events[l] = new Ac), this.events[l].add(o)
  }
  notify(l, ...o) {
    this.events[l] && this.events[l].notify(...o)
  }
  scheduleRenderMicrotask() {
    Hc.render(this.render)
  }
}
class R1 extends Sb {
  constructor() {
    super(...arguments), this.KeyframeResolver = vx
  }
  sortInstanceNodePosition(l, o) {
    return l.compareDocumentPosition(o) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(l, o) {
    return l.style ? l.style[o] : void 0
  }
  removeValueFromRenderState(l, {
    vars: o,
    style: r
  }) {
    delete o[l], delete r[l]
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const {
      children: l
    } = this.props;
    ae(l) && (this.childSubscription = l.on("change", o => {
      this.current && (this.current.textContent = `${o}`)
    }))
  }
}

function V1(i, {
  style: l,
  vars: o
}, r, c) {
  const m = i.style;
  let d;
  for (d in l) m[d] = l[d];
  c ?.applyProjectionStyles(m, r);
  for (d in o) m.setProperty(d, o[d])
}

function Tb(i) {
  return window.getComputedStyle(i)
}
class Bb extends R1 {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = V1
  }
  readValueFromInstance(l, o) {
    if (mi.has(o)) return this.projection ?.isProjecting ? ec(o) : U2(l, o); {
      const r = Tb(l),
        c = (Nc(o) ? r.getPropertyValue(o) : r[o]) || 0;
      return typeof c == "string" ? c.trim() : c
    }
  }
  measureInstanceViewportBox(l, {
    transformPagePoint: o
  }) {
    return z1(l, o)
  }
  build(l, o, r) {
    Xc(l, o, r.transformTemplate)
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return kc(l, o, r)
  }
}
const _1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function Ab(i, l, o, r) {
  V1(i, l, void 0, r);
  for (const c in l.attrs) i.setAttribute(_1.has(c) ? c : Jc(c), l.attrs[c])
}
class jb extends R1 {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ht
  }
  getBaseTargetFromProps(l, o) {
    return l[o]
  }
  readValueFromInstance(l, o) {
    if (mi.has(o)) {
      const r = s1(o);
      return r && r.default || 0
    }
    return o = _1.has(o) ? o : Jc(o), l.getAttribute(o)
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return j1(l, o, r)
  }
  build(l, o, r) {
    S1(l, o, this.isSVGTag, r.transformTemplate, r.style)
  }
  renderInstance(l, o, r, c) {
    Ab(l, o, r, c)
  }
  mount(l) {
    this.isSVGTag = B1(l.tagName), super.mount(l)
  }
}
const Mb = (i, l) => Zc(i) ? new jb(l) : new Bb(l, {
  allowProjection: i !== F.Fragment
});

function ri(i, l, o) {
  const r = i.getProps();
  return Kc(r, l, o !== void 0 ? o : r.custom, i)
}
const fc = i => Array.isArray(i);

function Nb(i, l, o) {
  i.hasValue(l) ? i.getValue(l).set(o) : i.addValue(l, ui(o))
}

function Eb(i) {
  return fc(i) ? i[i.length - 1] || 0 : i
}

function Db(i, l) {
  const o = ri(i, l);
  let {
    transitionEnd: r = {},
    transition: c = {},
    ...m
  } = o || {};
  m = {
    ...m,
    ...r
  };
  for (const d in m) {
    const y = Eb(m[d]);
    Nb(i, d, y)
  }
}

function Cb(i) {
  return !!(ae(i) && i.add)
}

function dc(i, l) {
  const o = i.getValue("willChange");
  if (Cb(o)) return o.add(l);
  if (!o && vn.WillChange) {
    const r = new vn.WillChange("auto");
    i.addValue("willChange", r), r.add(l)
  }
}

function U1(i) {
  return i.props[M1]
}
const wb = i => i !== null;

function zb(i, {
  repeat: l,
  repeatType: o = "loop"
}, r) {
  const c = i.filter(wb),
    m = l && o !== "loop" && l % 2 === 1 ? 0 : c.length - 1;
  return c[m]
}
const Ob = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  },
  Rb = i => ({
    type: "spring",
    stiffness: 550,
    damping: i === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }),
  Vb = {
    type: "keyframes",
    duration: .8
  },
  _b = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
  },
  Ub = (i, {
    keyframes: l
  }) => l.length > 2 ? Vb : mi.has(i) ? i.startsWith("scale") ? Rb(l[1]) : Ob : _b;

function Lb({
  when: i,
  delay: l,
  delayChildren: o,
  staggerChildren: r,
  staggerDirection: c,
  repeat: m,
  repeatType: d,
  repeatDelay: y,
  from: g,
  elapsed: p,
  ...x
}) {
  return !!Object.keys(x).length
}
const Pc = (i, l, o, r = {}, c, m) => d => {
  const y = Uc(r, i) || {},
    g = y.delay || r.delay || 0;
  let {
    elapsed: p = 0
  } = r;
  p = p - Je(g);
  const x = {
    keyframes: Array.isArray(o) ? o : [null, o],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...y,
    delay: -p,
    onUpdate: B => {
      l.set(B), y.onUpdate && y.onUpdate(B)
    },
    onComplete: () => {
      d(), y.onComplete && y.onComplete()
    },
    name: i,
    motionValue: l,
    element: m ? void 0 : c
  };
  Lb(y) || Object.assign(x, Ub(i, x)), x.duration && (x.duration = Je(x.duration)), x.repeatDelay && (x.repeatDelay = Je(x.repeatDelay)), x.from !== void 0 && (x.keyframes[0] = x.from);
  let b = !1;
  if ((x.type === !1 || x.duration === 0 && !x.repeatDelay) && (sc(x), x.delay === 0 && (b = !0)), (vn.instantAnimations || vn.skipAnimations) && (b = !0, sc(x), x.delay = 0), x.allowFlatten = !y.type && !y.ease, b && !m && l.get() !== void 0) {
    const B = zb(x.keyframes, y);
    if (B !== void 0) {
      Ct.update(() => {
        x.onUpdate(B), x.onComplete()
      });
      return
    }
  }
  return y.isSync ? new Vc(x) : new sx(x)
};

function Hb({
  protectedKeys: i,
  needsAnimating: l
}, o) {
  const r = i.hasOwnProperty(o) && l[o] !== !0;
  return l[o] = !1, r
}

function L1(i, l, {
  delay: o = 0,
  transitionOverride: r,
  type: c
} = {}) {
  let {
    transition: m = i.getDefaultTransition(),
    transitionEnd: d,
    ...y
  } = l;
  r && (m = r);
  const g = [],
    p = c && i.animationState && i.animationState.getState()[c];
  for (const x in y) {
    const b = i.getValue(x, i.latestValues[x] ?? null),
      B = y[x];
    if (B === void 0 || p && Hb(p, x)) continue;
    const C = {
        delay: o,
        ...Uc(m || {}, x)
      },
      _ = b.get();
    if (_ !== void 0 && !b.isAnimating && !Array.isArray(B) && B === _ && !C.velocity) continue;
    let H = !1;
    if (window.MotionHandoffAnimation) {
      const q = U1(i);
      if (q) {
        const Z = window.MotionHandoffAnimation(q, x, Ct);
        Z !== null && (C.startTime = Z, H = !0)
      }
    }
    dc(i, x), b.start(Pc(x, b, B, i.shouldReduceMotion && a1.has(x) ? {
      type: !1
    } : C, i, H));
    const X = b.animation;
    X && g.push(X)
  }
  return d && Promise.all(g).then(() => {
    Ct.update(() => {
      d && Db(i, d)
    })
  }), g
}

function H1(i, l, o, r = 0, c = 1) {
  const m = Array.from(i).sort((p, x) => p.sortNodePosition(x)).indexOf(l),
    d = i.size,
    y = (d - 1) * r;
  return typeof o == "function" ? o(m, d) : c === 1 ? m * r : y - m * r
}

function hc(i, l, o = {}) {
  const r = ri(i, l, o.type === "exit" ? i.presenceContext ?.custom : void 0);
  let {
    transition: c = i.getDefaultTransition() || {}
  } = r || {};
  o.transitionOverride && (c = o.transitionOverride);
  const m = r ? () => Promise.all(L1(i, r, o)) : () => Promise.resolve(),
    d = i.variantChildren && i.variantChildren.size ? (g = 0) => {
      const {
        delayChildren: p = 0,
        staggerChildren: x,
        staggerDirection: b
      } = c;
      return Fb(i, l, g, p, x, b, o)
    } : () => Promise.resolve(),
    {
      when: y
    } = c;
  if (y) {
    const [g, p] = y === "beforeChildren" ? [m, d] : [d, m];
    return g().then(() => p())
  } else return Promise.all([m(), d(o.delay)])
}

function Fb(i, l, o = 0, r = 0, c = 0, m = 1, d) {
  const y = [];
  for (const g of i.variantChildren) g.notify("AnimationStart", l), y.push(hc(g, l, {
    ...d,
    delay: o + (typeof r == "function" ? 0 : r) + H1(i.variantChildren, g, r, c, m)
  }).then(() => g.notify("AnimationComplete", l)));
  return Promise.all(y)
}

function qb(i, l, o = {}) {
  i.notify("AnimationStart", l);
  let r;
  if (Array.isArray(l)) {
    const c = l.map(m => hc(i, m, o));
    r = Promise.all(c)
  } else if (typeof l == "string") r = hc(i, l, o);
  else {
    const c = typeof l == "function" ? ri(i, l, o.custom) : l;
    r = Promise.all(L1(i, c, o))
  }
  return r.then(() => {
    i.notify("AnimationComplete", l)
  })
}

function F1(i, l) {
  if (!Array.isArray(l)) return !1;
  const o = l.length;
  if (o !== i.length) return !1;
  for (let r = 0; r < o; r++)
    if (l[r] !== i[r]) return !1;
  return !0
}
const Yb = Gc.length;

function q1(i) {
  if (!i) return;
  if (!i.isControllingVariants) {
    const o = i.parent ? q1(i.parent) || {} : {};
    return i.props.initial !== void 0 && (o.initial = i.props.initial), o
  }
  const l = {};
  for (let o = 0; o < Yb; o++) {
    const r = Gc[o],
      c = i.props[r];
    (bl(c) || c === !1) && (l[r] = c)
  }
  return l
}
const Gb = [...Yc].reverse(),
  Xb = Yc.length;

function Qb(i) {
  return l => Promise.all(l.map(({
    animation: o,
    options: r
  }) => qb(i, o, r)))
}

function Zb(i) {
  let l = Qb(i),
    o = Ym(),
    r = !0;
  const c = g => (p, x) => {
    const b = ri(i, x, g === "exit" ? i.presenceContext ?.custom : void 0);
    if (b) {
      const {
        transition: B,
        transitionEnd: C,
        ..._
      } = b;
      p = {
        ...p,
        ..._,
        ...C
      }
    }
    return p
  };

  function m(g) {
    l = g(i)
  }

  function d(g) {
    const {
      props: p
    } = i, x = q1(i.parent) || {}, b = [], B = new Set;
    let C = {},
      _ = 1 / 0;
    for (let X = 0; X < Xb; X++) {
      const q = Gb[X],
        Z = o[q],
        Y = p[q] !== void 0 ? p[q] : x[q],
        nt = bl(Y),
        W = q === g ? Z.isActive : null;
      W === !1 && (_ = X);
      let tt = Y === x[q] && Y !== p[q] && nt;
      if (tt && r && i.manuallyAnimateOnMount && (tt = !1), Z.protectedKeys = {
          ...C
        }, !Z.isActive && W === null || !Y && !Z.prevProp || so(Y) || typeof Y == "boolean") continue;
      const Q = Kb(Z.prevProp, Y);
      let $ = Q || q === g && Z.isActive && !tt && nt || X > _ && nt,
        bt = !1;
      const zt = Array.isArray(Y) ? Y : [Y];
      let Qt = zt.reduce(c(q), {});
      W === !1 && (Qt = {});
      const {
        prevResolvedValues: Jt = {}
      } = Z, We = {
        ...Jt,
        ...Qt
      }, Me = L => {
        $ = !0, B.has(L) && (bt = !0, B.delete(L)), Z.needsAnimating[L] = !0;
        const J = i.getValue(L);
        J && (J.liveStyle = !1)
      };
      for (const L in We) {
        const J = Qt[L],
          ft = Jt[L];
        if (C.hasOwnProperty(L)) continue;
        let pt = !1;
        fc(J) && fc(ft) ? pt = !F1(J, ft) : pt = J !== ft, pt ? J != null ? Me(L) : B.add(L) : J !== void 0 && B.has(L) ? Me(L) : Z.protectedKeys[L] = !0
      }
      Z.prevProp = Y, Z.prevResolvedValues = Qt, Z.isActive && (C = {
        ...C,
        ...Qt
      }), r && i.blockInitialAnimation && ($ = !1);
      const oe = tt && Q;
      $ && (!oe || bt) && b.push(...zt.map(L => {
        const J = {
          type: q
        };
        if (typeof L == "string" && r && !oe && i.manuallyAnimateOnMount && i.parent) {
          const {
            parent: ft
          } = i, pt = ri(ft, L);
          if (ft.enteringChildren && pt) {
            const {
              delayChildren: A
            } = pt.transition || {};
            J.delay = H1(ft.enteringChildren, i, A)
          }
        }
        return {
          animation: L,
          options: J
        }
      }))
    }
    if (B.size) {
      const X = {};
      if (typeof p.initial != "boolean") {
        const q = ri(i, Array.isArray(p.initial) ? p.initial[0] : p.initial);
        q && q.transition && (X.transition = q.transition)
      }
      B.forEach(q => {
        const Z = i.getBaseTarget(q),
          Y = i.getValue(q);
        Y && (Y.liveStyle = !0), X[q] = Z ?? null
      }), b.push({
        animation: X
      })
    }
    let H = !!b.length;
    return r && (p.initial === !1 || p.initial === p.animate) && !i.manuallyAnimateOnMount && (H = !1), r = !1, H ? l(b) : Promise.resolve()
  }

  function y(g, p) {
    if (o[g].isActive === p) return Promise.resolve();
    i.variantChildren ?.forEach(b => b.animationState ?.setActive(g, p)), o[g].isActive = p;
    const x = d(g);
    for (const b in o) o[b].protectedKeys = {};
    return x
  }
  return {
    animateChanges: d,
    setActive: y,
    setAnimateFunction: m,
    getState: () => o,
    reset: () => {
      o = Ym(), r = !0
    }
  }
}

function Kb(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !F1(l, i) : !1
}

function ha(i = !1) {
  return {
    isActive: i,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  }
}

function Ym() {
  return {
    animate: ha(!0),
    whileInView: ha(),
    whileHover: ha(),
    whileTap: ha(),
    whileDrag: ha(),
    whileFocus: ha(),
    exit: ha()
  }
}
class Kn {
  constructor(l) {
    this.isMounted = !1, this.node = l
  }
  update() {}
}
class kb extends Kn {
  constructor(l) {
    super(l), l.animationState || (l.animationState = Zb(l))
  }
  updateAnimationControlsSubscription() {
    const {
      animate: l
    } = this.node.getProps();
    so(l) && (this.unmountControls = l.subscribe(this.node))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const {
      animate: l
    } = this.node.getProps(), {
      animate: o
    } = this.node.prevProps || {};
    l !== o && this.updateAnimationControlsSubscription()
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls ?.()
  }
}
let Jb = 0;
class Pb extends Kn {
  constructor() {
    super(...arguments), this.id = Jb++
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
      isPresent: l,
      onExitComplete: o
    } = this.node.presenceContext, {
      isPresent: r
    } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === r) return;
    const c = this.node.animationState.setActive("exit", !l);
    o && !l && c.then(() => {
      o(this.id)
    })
  }
  mount() {
    const {
      register: l,
      onExitComplete: o
    } = this.node.presenceContext || {};
    o && o(this.id), l && (this.unmount = l(this.id))
  }
  unmount() {}
}
const Wb = {
  animation: {
    Feature: kb
  },
  exit: {
    Feature: Pb
  }
};

function Tl(i, l, o, r = {
  passive: !0
}) {
  return i.addEventListener(l, o, r), () => i.removeEventListener(l, o)
}

function Ml(i) {
  return {
    point: {
      x: i.pageX,
      y: i.pageY
    }
  }
}
const $b = i => l => Fc(l) && i(l, Ml(l));

function ml(i, l, o, r) {
  return Tl(i, l, $b(o), r)
}
const Y1 = 1e-4,
  Ib = 1 - Y1,
  t3 = 1 + Y1,
  G1 = .01,
  e3 = 0 - G1,
  n3 = 0 + G1;

function se(i) {
  return i.max - i.min
}

function a3(i, l, o) {
  return Math.abs(i - l) <= o
}

function Gm(i, l, o, r = .5) {
  i.origin = r, i.originPoint = wt(l.min, l.max, i.origin), i.scale = se(o) / se(l), i.translate = wt(o.min, o.max, i.origin) - i.originPoint, (i.scale >= Ib && i.scale <= t3 || isNaN(i.scale)) && (i.scale = 1), (i.translate >= e3 && i.translate <= n3 || isNaN(i.translate)) && (i.translate = 0)
}

function pl(i, l, o, r) {
  Gm(i.x, l.x, o.x, r ? r.originX : void 0), Gm(i.y, l.y, o.y, r ? r.originY : void 0)
}

function Xm(i, l, o) {
  i.min = o.min + l.min, i.max = i.min + se(l)
}

function i3(i, l, o) {
  Xm(i.x, l.x, o.x), Xm(i.y, l.y, o.y)
}

function Qm(i, l, o) {
  i.min = l.min - o.min, i.max = i.min + se(l)
}

function yl(i, l, o) {
  Qm(i.x, l.x, o.x), Qm(i.y, l.y, o.y)
}

function Le(i) {
  return [i("x"), i("y")]
}
const X1 = ({
    current: i
  }) => i ? i.ownerDocument.defaultView : null,
  Zm = (i, l) => Math.abs(i - l);

function l3(i, l) {
  const o = Zm(i.x, l.x),
    r = Zm(i.y, l.y);
  return Math.sqrt(o ** 2 + r ** 2)
}
class Q1 {
  constructor(l, o, {
    transformPagePoint: r,
    contextWindow: c = window,
    dragSnapToOrigin: m = !1,
    distanceThreshold: d = 3
  } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const B = Yu(this.lastMoveEventInfo, this.history),
          C = this.startEvent !== null,
          _ = l3(B.offset, {
            x: 0,
            y: 0
          }) >= this.distanceThreshold;
        if (!C && !_) return;
        const {
          point: H
        } = B, {
          timestamp: X
        } = ee;
        this.history.push({
          ...H,
          timestamp: X
        });
        const {
          onStart: q,
          onMove: Z
        } = this.handlers;
        C || (q && q(this.lastMoveEvent, B), this.startEvent = this.lastMoveEvent), Z && Z(this.lastMoveEvent, B)
      }, this.handlePointerMove = (B, C) => {
        this.lastMoveEvent = B, this.lastMoveEventInfo = qu(C, this.transformPagePoint), Ct.update(this.updatePoint, !0)
      }, this.handlePointerUp = (B, C) => {
        this.end();
        const {
          onEnd: _,
          onSessionEnd: H,
          resumeAnimation: X
        } = this.handlers;
        if (this.dragSnapToOrigin && X && X(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const q = Yu(B.type === "pointercancel" ? this.lastMoveEventInfo : qu(C, this.transformPagePoint), this.history);
        this.startEvent && _ && _(B, q), H && H(B, q)
      }, !Fc(l)) return;
    this.dragSnapToOrigin = m, this.handlers = o, this.transformPagePoint = r, this.distanceThreshold = d, this.contextWindow = c || window;
    const y = Ml(l),
      g = qu(y, this.transformPagePoint),
      {
        point: p
      } = g,
      {
        timestamp: x
      } = ee;
    this.history = [{
      ...p,
      timestamp: x
    }];
    const {
      onSessionStart: b
    } = o;
    b && b(l, Yu(g, this.history)), this.removeListeners = Bl(ml(this.contextWindow, "pointermove", this.handlePointerMove), ml(this.contextWindow, "pointerup", this.handlePointerUp), ml(this.contextWindow, "pointercancel", this.handlePointerUp))
  }
  updateHandlers(l) {
    this.handlers = l
  }
  end() {
    this.removeListeners && this.removeListeners(), Qn(this.updatePoint)
  }
}

function qu(i, l) {
  return l ? {
    point: l(i.point)
  } : i
}

function Km(i, l) {
  return {
    x: i.x - l.x,
    y: i.y - l.y
  }
}

function Yu({
  point: i
}, l) {
  return {
    point: i,
    delta: Km(i, Z1(l)),
    offset: Km(i, s3(l)),
    velocity: o3(l, .1)
  }
}

function s3(i) {
  return i[0]
}

function Z1(i) {
  return i[i.length - 1]
}

function o3(i, l) {
  if (i.length < 2) return {
    x: 0,
    y: 0
  };
  let o = i.length - 1,
    r = null;
  const c = Z1(i);
  for (; o >= 0 && (r = i[o], !(c.timestamp - r.timestamp > Je(l)));) o--;
  if (!r) return {
    x: 0,
    y: 0
  };
  const m = He(c.timestamp - r.timestamp);
  if (m === 0) return {
    x: 0,
    y: 0
  };
  const d = {
    x: (c.x - r.x) / m,
    y: (c.y - r.y) / m
  };
  return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d
}

function r3(i, {
  min: l,
  max: o
}, r) {
  return l !== void 0 && i < l ? i = r ? wt(l, i, r.min) : Math.max(i, l) : o !== void 0 && i > o && (i = r ? wt(o, i, r.max) : Math.min(i, o)), i
}

function km(i, l, o) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: o !== void 0 ? i.max + o - (i.max - i.min) : void 0
  }
}

function u3(i, {
  top: l,
  left: o,
  bottom: r,
  right: c
}) {
  return {
    x: km(i.x, o, c),
    y: km(i.y, l, r)
  }
}

function Jm(i, l) {
  let o = l.min - i.min,
    r = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([o, r] = [r, o]), {
    min: o,
    max: r
  }
}

function c3(i, l) {
  return {
    x: Jm(i.x, l.x),
    y: Jm(i.y, l.y)
  }
}

function f3(i, l) {
  let o = .5;
  const r = se(i),
    c = se(l);
  return c > r ? o = gl(l.min, l.max - r, i.min) : r > c && (o = gl(i.min, i.max - c, l.min)), gn(0, 1, o)
}

function d3(i, l) {
  const o = {};
  return l.min !== void 0 && (o.min = l.min - i.min), l.max !== void 0 && (o.max = l.max - i.min), o
}
const mc = .35;

function h3(i = mc) {
  return i === !1 ? i = 0 : i === !0 && (i = mc), {
    x: Pm(i, "left", "right"),
    y: Pm(i, "top", "bottom")
  }
}

function Pm(i, l, o) {
  return {
    min: Wm(i, l),
    max: Wm(i, o)
  }
}

function Wm(i, l) {
  return typeof i == "number" ? i : i[l] || 0
}
const m3 = new WeakMap;
class p3 {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
      x: 0,
      y: 0
    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ht(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l
  }
  start(l, {
    snapToCursor: o = !1,
    distanceThreshold: r
  } = {}) {
    const {
      presenceContext: c
    } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const m = b => {
        const {
          dragSnapToOrigin: B
        } = this.getProps();
        B ? this.pauseAnimation() : this.stopAnimation(), o && this.snapToCursor(Ml(b).point)
      },
      d = (b, B) => {
        const {
          drag: C,
          dragPropagation: _,
          onDragStart: H
        } = this.getProps();
        if (C && !_ && (this.openDragLock && this.openDragLock(), this.openDragLock = Sx(C), !this.openDragLock)) return;
        this.latestPointerEvent = b, this.latestPanInfo = B, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Le(q => {
          let Z = this.getAxisMotionValue(q).get() || 0;
          if (Pe.test(Z)) {
            const {
              projection: Y
            } = this.visualElement;
            if (Y && Y.layout) {
              const nt = Y.layout.layoutBox[q];
              nt && (Z = se(nt) * (parseFloat(Z) / 100))
            }
          }
          this.originPoint[q] = Z
        }), H && Ct.postRender(() => H(b, B)), dc(this.visualElement, "transform");
        const {
          animationState: X
        } = this.visualElement;
        X && X.setActive("whileDrag", !0)
      },
      y = (b, B) => {
        this.latestPointerEvent = b, this.latestPanInfo = B;
        const {
          dragPropagation: C,
          dragDirectionLock: _,
          onDirectionLock: H,
          onDrag: X
        } = this.getProps();
        if (!C && !this.openDragLock) return;
        const {
          offset: q
        } = B;
        if (_ && this.currentDirection === null) {
          this.currentDirection = y3(q), this.currentDirection !== null && H && H(this.currentDirection);
          return
        }
        this.updateAxis("x", B.point, q), this.updateAxis("y", B.point, q), this.visualElement.render(), X && X(b, B)
      },
      g = (b, B) => {
        this.latestPointerEvent = b, this.latestPanInfo = B, this.stop(b, B), this.latestPointerEvent = null, this.latestPanInfo = null
      },
      p = () => Le(b => this.getAnimationState(b) === "paused" && this.getAxisMotionValue(b).animation ?.play()),
      {
        dragSnapToOrigin: x
      } = this.getProps();
    this.panSession = new Q1(l, {
      onSessionStart: m,
      onStart: d,
      onMove: y,
      onSessionEnd: g,
      resumeAnimation: p
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: x,
      distanceThreshold: r,
      contextWindow: X1(this.visualElement)
    })
  }
  stop(l, o) {
    const r = l || this.latestPointerEvent,
      c = o || this.latestPanInfo,
      m = this.isDragging;
    if (this.cancel(), !m || !c || !r) return;
    const {
      velocity: d
    } = c;
    this.startAnimation(d);
    const {
      onDragEnd: y
    } = this.getProps();
    y && Ct.postRender(() => y(r, c))
  }
  cancel() {
    this.isDragging = !1;
    const {
      projection: l,
      animationState: o
    } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const {
      dragPropagation: r
    } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), o && o.setActive("whileDrag", !1)
  }
  updateAxis(l, o, r) {
    const {
      drag: c
    } = this.getProps();
    if (!r || !ks(l, c, this.currentDirection)) return;
    const m = this.getAxisMotionValue(l);
    let d = this.originPoint[l] + r[l];
    this.constraints && this.constraints[l] && (d = r3(d, this.constraints[l], this.elastic[l])), m.set(d)
  }
  resolveConstraints() {
    const {
      dragConstraints: l,
      dragElastic: o
    } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection ?.layout, c = this.constraints;
    l && ii(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && r ? this.constraints = u3(r.layoutBox, l) : this.constraints = !1, this.elastic = h3(o), c !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Le(m => {
      this.constraints !== !1 && this.getAxisMotionValue(m) && (this.constraints[m] = d3(r.layoutBox[m], this.constraints[m]))
    })
  }
  resolveRefConstraints() {
    const {
      dragConstraints: l,
      onMeasureDragConstraints: o
    } = this.getProps();
    if (!l || !ii(l)) return !1;
    const r = l.current,
      {
        projection: c
      } = this.visualElement;
    if (!c || !c.layout) return !1;
    const m = gb(r, c.root, this.visualElement.getTransformPagePoint());
    let d = c3(c.layout.layoutBox, m);
    if (o) {
      const y = o(mb(d));
      this.hasMutatedConstraints = !!y, y && (d = D1(y))
    }
    return d
  }
  startAnimation(l) {
    const {
      drag: o,
      dragMomentum: r,
      dragElastic: c,
      dragTransition: m,
      dragSnapToOrigin: d,
      onDragTransitionEnd: y
    } = this.getProps(), g = this.constraints || {}, p = Le(x => {
      if (!ks(x, o, this.currentDirection)) return;
      let b = g && g[x] || {};
      d && (b = {
        min: 0,
        max: 0
      });
      const B = c ? 200 : 1e6,
        C = c ? 40 : 1e7,
        _ = {
          type: "inertia",
          velocity: r ? l[x] : 0,
          bounceStiffness: B,
          bounceDamping: C,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...m,
          ...b
        };
      return this.startAxisValueAnimation(x, _)
    });
    return Promise.all(p).then(y)
  }
  startAxisValueAnimation(l, o) {
    const r = this.getAxisMotionValue(l);
    return dc(this.visualElement, l), r.start(Pc(l, r, 0, o, this.visualElement, !1))
  }
  stopAnimation() {
    Le(l => this.getAxisMotionValue(l).stop())
  }
  pauseAnimation() {
    Le(l => this.getAxisMotionValue(l).animation ?.pause())
  }
  getAnimationState(l) {
    return this.getAxisMotionValue(l).animation ?.state
  }
  getAxisMotionValue(l) {
    const o = `_drag${l.toUpperCase()}`,
      r = this.visualElement.getProps(),
      c = r[o];
    return c || this.visualElement.getValue(l, (r.initial ? r.initial[l] : void 0) || 0)
  }
  snapToCursor(l) {
    Le(o => {
      const {
        drag: r
      } = this.getProps();
      if (!ks(o, r, this.currentDirection)) return;
      const {
        projection: c
      } = this.visualElement, m = this.getAxisMotionValue(o);
      if (c && c.layout) {
        const {
          min: d,
          max: y
        } = c.layout.layoutBox[o];
        m.set(l[o] - wt(d, y, .5))
      }
    })
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const {
      drag: l,
      dragConstraints: o
    } = this.getProps(), {
      projection: r
    } = this.visualElement;
    if (!ii(o) || !r || !this.constraints) return;
    this.stopAnimation();
    const c = {
      x: 0,
      y: 0
    };
    Le(d => {
      const y = this.getAxisMotionValue(d);
      if (y && this.constraints !== !1) {
        const g = y.get();
        c[d] = f3({
          min: g,
          max: g
        }, this.constraints[d])
      }
    });
    const {
      transformTemplate: m
    } = this.visualElement.getProps();
    this.visualElement.current.style.transform = m ? m({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Le(d => {
      if (!ks(d, l, null)) return;
      const y = this.getAxisMotionValue(d),
        {
          min: g,
          max: p
        } = this.constraints[d];
      y.set(wt(g, p, c[d]))
    })
  }
  addListeners() {
    if (!this.visualElement.current) return;
    m3.set(this.visualElement, this);
    const l = this.visualElement.current,
      o = ml(l, "pointerdown", g => {
        const {
          drag: p,
          dragListener: x = !0
        } = this.getProps();
        p && x && this.start(g)
      }),
      r = () => {
        const {
          dragConstraints: g
        } = this.getProps();
        ii(g) && g.current && (this.constraints = this.resolveRefConstraints())
      },
      {
        projection: c
      } = this.visualElement,
      m = c.addEventListener("measure", r);
    c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()), Ct.read(r);
    const d = Tl(window, "resize", () => this.scalePositionWithinConstraints()),
      y = c.addEventListener("didUpdate", (({
        delta: g,
        hasLayoutChanged: p
      }) => {
        this.isDragging && p && (Le(x => {
          const b = this.getAxisMotionValue(x);
          b && (this.originPoint[x] += g[x].translate, b.set(b.get() + g[x].translate))
        }), this.visualElement.render())
      }));
    return () => {
      d(), o(), m(), y && y()
    }
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: o = !1,
        dragDirectionLock: r = !1,
        dragPropagation: c = !1,
        dragConstraints: m = !1,
        dragElastic: d = mc,
        dragMomentum: y = !0
      } = l;
    return {
      ...l,
      drag: o,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: m,
      dragElastic: d,
      dragMomentum: y
    }
  }
}

function ks(i, l, o) {
  return (l === !0 || l === i) && (o === null || o === i)
}

function y3(i, l = 10) {
  let o = null;
  return Math.abs(i.y) > l ? o = "y" : Math.abs(i.x) > l && (o = "x"), o
}
class g3 extends Kn {
  constructor(l) {
    super(l), this.removeGroupControls = Fe, this.removeListeners = Fe, this.controls = new p3(l)
  }
  mount() {
    const {
      dragControls: l
    } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Fe
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners()
  }
}
const $m = i => (l, o) => {
  i && Ct.postRender(() => i(l, o))
};
class v3 extends Kn {
  constructor() {
    super(...arguments), this.removePointerDownListener = Fe
  }
  onPointerDown(l) {
    this.session = new Q1(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: X1(this.node)
    })
  }
  createPanHandlers() {
    const {
      onPanSessionStart: l,
      onPanStart: o,
      onPan: r,
      onPanEnd: c
    } = this.node.getProps();
    return {
      onSessionStart: $m(l),
      onStart: $m(o),
      onMove: r,
      onEnd: (m, d) => {
        delete this.session, c && Ct.postRender(() => c(m, d))
      }
    }
  }
  mount() {
    this.removePointerDownListener = ml(this.node.current, "pointerdown", l => this.onPointerDown(l))
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end()
  }
}
const $s = {
  hasAnimatedSinceResize: !0,
  hasEverUpdated: !1
};

function Im(i, l) {
  return l.max === l.min ? 0 : i / (l.max - l.min) * 100
}
const cl = {
    correct: (i, l) => {
      if (!l.target) return i;
      if (typeof i == "string")
        if (at.test(i)) i = parseFloat(i);
        else return i;
      const o = Im(i, l.target.x),
        r = Im(i, l.target.y);
      return `${o}% ${r}%`
    }
  },
  x3 = {
    correct: (i, {
      treeScale: l,
      projectionDelta: o
    }) => {
      const r = i,
        c = Zn.parse(i);
      if (c.length > 5) return r;
      const m = Zn.createTransformer(i),
        d = typeof c[0] != "number" ? 1 : 0,
        y = o.x.scale * l.x,
        g = o.y.scale * l.y;
      c[0 + d] /= y, c[1 + d] /= g;
      const p = wt(y, g, .5);
      return typeof c[2 + d] == "number" && (c[2 + d] /= p), typeof c[3 + d] == "number" && (c[3 + d] /= p), m(c)
    }
  };
let Gu = !1;
class b3 extends F.Component {
  componentDidMount() {
    const {
      visualElement: l,
      layoutGroup: o,
      switchLayoutGroup: r,
      layoutId: c
    } = this.props, {
      projection: m
    } = l;
    Yx(S3), m && (o.group && o.group.add(m), r && r.register && c && r.register(m), Gu && m.root.didUpdate(), m.addEventListener("animationComplete", () => {
      this.safeToRemove()
    }), m.setOptions({
      ...m.options,
      onExitComplete: () => this.safeToRemove()
    })), $s.hasEverUpdated = !0
  }
  getSnapshotBeforeUpdate(l) {
    const {
      layoutDependency: o,
      visualElement: r,
      drag: c,
      isPresent: m
    } = this.props, {
      projection: d
    } = r;
    return d && (d.isPresent = m, Gu = !0, c || l.layoutDependency !== o || o === void 0 || l.isPresent !== m ? d.willUpdate() : this.safeToRemove(), l.isPresent !== m && (m ? d.promote() : d.relegate() || Ct.postRender(() => {
      const y = d.getStack();
      (!y || !y.members.length) && this.safeToRemove()
    }))), null
  }
  componentDidUpdate() {
    const {
      projection: l
    } = this.props.visualElement;
    l && (l.root.didUpdate(), Hc.postRender(() => {
      !l.currentAnimation && l.isLead() && this.safeToRemove()
    }))
  }
  componentWillUnmount() {
    const {
      visualElement: l,
      layoutGroup: o,
      switchLayoutGroup: r
    } = this.props, {
      projection: c
    } = l;
    Gu = !0, c && (c.scheduleCheckAfterUnmount(), o && o.group && o.group.remove(c), r && r.deregister && r.deregister(c))
  }
  safeToRemove() {
    const {
      safeToRemove: l
    } = this.props;
    l && l()
  }
  render() {
    return null
  }
}

function K1(i) {
  const [l, o] = p1(), r = F.useContext(gc);
  return h.jsx(b3, {
    ...i,
    layoutGroup: r,
    switchLayoutGroup: F.useContext(N1),
    isPresent: l,
    safeToRemove: o
  })
}
const S3 = {
  borderRadius: {
    ...cl,
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  },
  borderTopLeftRadius: cl,
  borderTopRightRadius: cl,
  borderBottomLeftRadius: cl,
  borderBottomRightRadius: cl,
  boxShadow: x3
};

function T3(i, l, o) {
  const r = ae(i) ? i : ui(i);
  return r.start(Pc("", r, l, o)), r.animation
}
const B3 = (i, l) => i.depth - l.depth;
class A3 {
  constructor() {
    this.children = [], this.isDirty = !1
  }
  add(l) {
    bc(this.children, l), this.isDirty = !0
  }
  remove(l) {
    Sc(this.children, l), this.isDirty = !0
  }
  forEach(l) {
    this.isDirty && this.children.sort(B3), this.isDirty = !1, this.children.forEach(l)
  }
}

function j3(i, l) {
  const o = pe.now(),
    r = ({
      timestamp: c
    }) => {
      const m = c - o;
      m >= l && (Qn(r), i(m - l))
    };
  return Ct.setup(r, !0), () => Qn(r)
}
const k1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  M3 = k1.length,
  tp = i => typeof i == "string" ? parseFloat(i) : i,
  ep = i => typeof i == "number" || at.test(i);

function N3(i, l, o, r, c, m) {
  c ? (i.opacity = wt(0, o.opacity ?? 1, E3(r)), i.opacityExit = wt(l.opacity ?? 1, 0, D3(r))) : m && (i.opacity = wt(l.opacity ?? 1, o.opacity ?? 1, r));
  for (let d = 0; d < M3; d++) {
    const y = `border${k1[d]}Radius`;
    let g = np(l, y),
      p = np(o, y);
    if (g === void 0 && p === void 0) continue;
    g || (g = 0), p || (p = 0), g === 0 || p === 0 || ep(g) === ep(p) ? (i[y] = Math.max(wt(tp(g), tp(p), r), 0), (Pe.test(p) || Pe.test(g)) && (i[y] += "%")) : i[y] = p
  }(l.rotate || o.rotate) && (i.rotate = wt(l.rotate || 0, o.rotate || 0, r))
}

function np(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius
}
const E3 = J1(0, .5, Rp),
  D3 = J1(.5, .95, Fe);

function J1(i, l, o) {
  return r => r < i ? 0 : r > l ? 1 : o(gl(i, l, r))
}

function ap(i, l) {
  i.min = l.min, i.max = l.max
}

function Ue(i, l) {
  ap(i.x, l.x), ap(i.y, l.y)
}

function ip(i, l) {
  i.translate = l.translate, i.scale = l.scale, i.originPoint = l.originPoint, i.origin = l.origin
}

function lp(i, l, o, r, c) {
  return i -= l, i = ao(i, 1 / o, r), c !== void 0 && (i = ao(i, 1 / c, r)), i
}

function C3(i, l = 0, o = 1, r = .5, c, m = i, d = i) {
  if (Pe.test(l) && (l = parseFloat(l), l = wt(d.min, d.max, l / 100) - d.min), typeof l != "number") return;
  let y = wt(m.min, m.max, r);
  i === m && (y -= l), i.min = lp(i.min, l, o, y, c), i.max = lp(i.max, l, o, y, c)
}

function sp(i, l, [o, r, c], m, d) {
  C3(i, l[o], l[r], l[c], l.scale, m, d)
}
const w3 = ["x", "scaleX", "originX"],
  z3 = ["y", "scaleY", "originY"];

function op(i, l, o, r) {
  sp(i.x, l, w3, o ? o.x : void 0, r ? r.x : void 0), sp(i.y, l, z3, o ? o.y : void 0, r ? r.y : void 0)
}

function rp(i) {
  return i.translate === 0 && i.scale === 1
}

function P1(i) {
  return rp(i.x) && rp(i.y)
}

function up(i, l) {
  return i.min === l.min && i.max === l.max
}

function O3(i, l) {
  return up(i.x, l.x) && up(i.y, l.y)
}

function cp(i, l) {
  return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max)
}

function W1(i, l) {
  return cp(i.x, l.x) && cp(i.y, l.y)
}

function fp(i) {
  return se(i.x) / se(i.y)
}

function dp(i, l) {
  return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint
}
class R3 {
  constructor() {
    this.members = []
  }
  add(l) {
    bc(this.members, l), l.scheduleRender()
  }
  remove(l) {
    if (Sc(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o)
    }
  }
  relegate(l) {
    const o = this.members.findIndex(c => l === c);
    if (o === 0) return !1;
    let r;
    for (let c = o; c >= 0; c--) {
      const m = this.members[c];
      if (m.isPresent !== !1) {
        r = m;
        break
      }
    }
    return r ? (this.promote(r), !0) : !1
  }
  promote(l, o) {
    const r = this.lead;
    if (l !== r && (this.prevLead = r, this.lead = l, l.show(), r)) {
      r.instance && r.scheduleRender(), l.scheduleRender(), l.resumeFrom = r, o && (l.resumeFrom.preserveOpacity = !0), r.snapshot && (l.snapshot = r.snapshot, l.snapshot.latestValues = r.animationValues || r.latestValues), l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
      const {
        crossfade: c
      } = l.options;
      c === !1 && r.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach(l => {
      const {
        options: o,
        resumingFrom: r
      } = l;
      o.onExitComplete && o.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
    })
  }
  scheduleRender() {
    this.members.forEach(l => {
      l.instance && l.scheduleRender(!1)
    })
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}

function V3(i, l, o) {
  let r = "";
  const c = i.x.translate / l.x,
    m = i.y.translate / l.y,
    d = o ?.z || 0;
  if ((c || m || d) && (r = `translate3d(${c}px, ${m}px, ${d}px) `), (l.x !== 1 || l.y !== 1) && (r += `scale(${1/l.x}, ${1/l.y}) `), o) {
    const {
      transformPerspective: p,
      rotate: x,
      rotateX: b,
      rotateY: B,
      skewX: C,
      skewY: _
    } = o;
    p && (r = `perspective(${p}px) ${r}`), x && (r += `rotate(${x}deg) `), b && (r += `rotateX(${b}deg) `), B && (r += `rotateY(${B}deg) `), C && (r += `skewX(${C}deg) `), _ && (r += `skewY(${_}deg) `)
  }
  const y = i.x.scale * l.x,
    g = i.y.scale * l.y;
  return (y !== 1 || g !== 1) && (r += `scale(${y}, ${g})`), r || "none"
}
const Xu = ["", "X", "Y", "Z"],
  _3 = 1e3;
let U3 = 0;

function Qu(i, l, o, r) {
  const {
    latestValues: c
  } = l;
  c[i] && (o[i] = c[i], l.setStaticValue(i, 0), r && (r[i] = 0))
}

function $1(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i) return;
  const {
    visualElement: l
  } = i.options;
  if (!l) return;
  const o = U1(l);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const {
      layout: c,
      layoutId: m
    } = i.options;
    window.MotionCancelOptimisedAnimation(o, "transform", Ct, !(c || m))
  }
  const {
    parent: r
  } = i;
  r && !r.hasCheckedOptimisedAppear && $1(r)
}

function I1({
  attachResizeListener: i,
  defaultParent: l,
  measureScroll: o,
  checkIsScrollRoot: r,
  resetTransform: c
}) {
  return class {
    constructor(d = {}, y = l ?.()) {
      this.id = U3++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
        x: 1,
        y: 1
      }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(F3), this.nodes.forEach(X3), this.nodes.forEach(Q3), this.nodes.forEach(q3)
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = d, this.root = y ? y.root || y : this, this.path = y ? [...y.path, y] : [], this.parent = y, this.depth = y ? y.depth + 1 : 0;
      for (let g = 0; g < this.path.length; g++) this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new A3)
    }
    addEventListener(d, y) {
      return this.eventHandlers.has(d) || this.eventHandlers.set(d, new Ac), this.eventHandlers.get(d).add(y)
    }
    notifyListeners(d, ...y) {
      const g = this.eventHandlers.get(d);
      g && g.notify(...y)
    }
    hasListeners(d) {
      return this.eventHandlers.has(d)
    }
    mount(d) {
      if (this.instance) return;
      this.isSVG = m1(d) && !Nx(d), this.instance = d;
      const {
        layoutId: y,
        layout: g,
        visualElement: p
      } = this.options;
      if (p && !p.current && p.mount(d), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (g || y) && (this.isLayoutDirty = !0), i) {
        let x, b = 0;
        const B = () => this.root.updateBlockedByResize = !1;
        Ct.read(() => {
          b = window.innerWidth
        }), i(d, () => {
          const C = window.innerWidth;
          C !== b && (b = C, this.root.updateBlockedByResize = !0, x && x(), x = j3(B, 250), $s.hasAnimatedSinceResize && ($s.hasAnimatedSinceResize = !1, this.nodes.forEach(pp)))
        })
      }
      y && this.root.registerSharedNode(y, this), this.options.animate !== !1 && p && (y || g) && this.addEventListener("didUpdate", ({
        delta: x,
        hasLayoutChanged: b,
        hasRelativeLayoutChanged: B,
        layout: C
      }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return
        }
        const _ = this.options.transition || p.getDefaultTransition() || P3,
          {
            onLayoutAnimationStart: H,
            onLayoutAnimationComplete: X
          } = p.getProps(),
          q = !this.targetLayout || !W1(this.targetLayout, C),
          Z = !b && B;
        if (this.options.layoutRoot || this.resumeFrom || Z || b && (q || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const Y = {
            ...Uc(_, "layout"),
            onPlay: H,
            onComplete: X
          };
          (p.shouldReduceMotion || this.options.layoutRoot) && (Y.delay = 0, Y.type = !1), this.startAnimation(Y), this.setAnimationOrigin(x, Z)
        } else b || pp(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = C
      })
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const d = this.getStack();
      d && d.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Qn(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Z3), this.animationId++)
    }
    getTransformTemplate() {
      const {
        visualElement: d
      } = this.options;
      return d && d.getProps().transformTemplate
    }
    willUpdate(d = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && $1(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = !0;
      for (let x = 0; x < this.path.length; x++) {
        const b = this.path[x];
        b.shouldResetTransform = !0, b.updateScroll("snapshot"), b.options.layoutRoot && b.willUpdate(!1)
      }
      const {
        layoutId: y,
        layout: g
      } = this.options;
      if (y === void 0 && !g) return;
      const p = this.getTransformTemplate();
      this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0, this.updateSnapshot(), d && this.notifyListeners("willUpdate")
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(hp);
        return
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(mp);
        return
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(G3), this.nodes.forEach(L3), this.nodes.forEach(H3)) : this.nodes.forEach(mp), this.clearAllSnapshots();
      const y = pe.now();
      ee.delta = gn(0, 1e3 / 60, y - ee.timestamp), ee.timestamp = y, ee.isProcessing = !0, Ou.update.process(ee), Ou.preRender.process(ee), Ou.render.process(ee), ee.isProcessing = !1
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Hc.read(this.scheduleUpdate))
    }
    clearAllSnapshots() {
      this.nodes.forEach(Y3), this.sharedNodes.forEach(K3)
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Ct.preRender(this.updateProjection, !1, !0))
    }
    scheduleCheckAfterUnmount() {
      Ct.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
      })
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !se(this.snapshot.measuredBox.x) && !se(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let g = 0; g < this.path.length; g++) this.path[g].updateScroll();
      const d = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Ht(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const {
        visualElement: y
      } = this.options;
      y && y.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0)
    }
    updateScroll(d = "measure") {
      let y = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (y = !1), y && this.instance) {
        const g = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: g,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : g
        }
      }
    }
    resetTransform() {
      if (!c) return;
      const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        y = this.projectionDelta && !P1(this.projectionDelta),
        g = this.getTransformTemplate(),
        p = g ? g(this.latestValues, "") : void 0,
        x = p !== this.prevTransformTemplateValue;
      d && this.instance && (y || ma(this.latestValues) || x) && (c(this.instance, p), this.shouldResetTransform = !1, this.scheduleRender())
    }
    measure(d = !0) {
      const y = this.measurePageBox();
      let g = this.removeElementScroll(y);
      return d && (g = this.removeTransform(g)), W3(g), {
        animationId: this.root.animationId,
        measuredBox: y,
        layoutBox: g,
        latestValues: {},
        source: this.id
      }
    }
    measurePageBox() {
      const {
        visualElement: d
      } = this.options;
      if (!d) return Ht();
      const y = d.measureViewportBox();
      if (!(this.scroll ?.wasRoot || this.path.some($3))) {
        const {
          scroll: p
        } = this.root;
        p && (li(y.x, p.offset.x), li(y.y, p.offset.y))
      }
      return y
    }
    removeElementScroll(d) {
      const y = Ht();
      if (Ue(y, d), this.scroll ?.wasRoot) return y;
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g],
          {
            scroll: x,
            options: b
          } = p;
        p !== this.root && x && b.layoutScroll && (x.wasRoot && Ue(y, d), li(y.x, x.offset.x), li(y.y, x.offset.y))
      }
      return y
    }
    applyTransform(d, y = !1) {
      const g = Ht();
      Ue(g, d);
      for (let p = 0; p < this.path.length; p++) {
        const x = this.path[p];
        !y && x.options.layoutScroll && x.scroll && x !== x.root && si(g, {
          x: -x.scroll.offset.x,
          y: -x.scroll.offset.y
        }), ma(x.latestValues) && si(g, x.latestValues)
      }
      return ma(this.latestValues) && si(g, this.latestValues), g
    }
    removeTransform(d) {
      const y = Ht();
      Ue(y, d);
      for (let g = 0; g < this.path.length; g++) {
        const p = this.path[g];
        if (!p.instance || !ma(p.latestValues)) continue;
        rc(p.latestValues) && p.updateSnapshot();
        const x = Ht(),
          b = p.measurePageBox();
        Ue(x, b), op(y, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, x)
      }
      return ma(this.latestValues) && op(y, this.latestValues), y
    }
    setTargetDelta(d) {
      this.targetDelta = d, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0
      }
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ee.timestamp && this.relativeParent.resolveTargetDelta(!0)
    }
    resolveTargetDelta(d = !1) {
      const y = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = y.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = y.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = y.isSharedProjectionDirty);
      const g = !!this.resumingFrom || this !== y;
      if (!(d || g && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent ?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      const {
        layout: x,
        layoutId: b
      } = this.options;
      if (!(!this.layout || !(x || b))) {
        if (this.resolvedRelativeTargetAt = ee.timestamp, !this.targetDelta && !this.relativeTarget) {
          const B = this.getClosestProjectingParent();
          B && B.layout && this.animationProgress !== 1 ? (this.relativeParent = B, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ht(), this.relativeTargetOrigin = Ht(), yl(this.relativeTargetOrigin, this.layout.layoutBox, B.layout.layoutBox), Ue(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ht(), this.targetWithTransforms = Ht()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), i3(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ue(this.target, this.layout.layoutBox), w1(this.target, this.targetDelta)) : Ue(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const B = this.getClosestProjectingParent();
          B && !!B.resumingFrom == !!this.resumingFrom && !B.options.layoutScroll && B.target && this.animationProgress !== 1 ? (this.relativeParent = B, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ht(), this.relativeTargetOrigin = Ht(), yl(this.relativeTargetOrigin, this.target, B.target), Ue(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || rc(this.parent.latestValues) || C1(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
    }
    calcProjection() {
      const d = this.getLead(),
        y = !!this.resumingFrom || this !== d;
      let g = !0;
      if ((this.isProjectionDirty || this.parent ?.isProjectionDirty) && (g = !1), y && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1), this.resolvedRelativeTargetAt === ee.timestamp && (g = !1), g) return;
      const {
        layout: p,
        layoutId: x
      } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(p || x)) return;
      Ue(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        B = this.treeScale.y;
      yb(this.layoutCorrected, this.treeScale, this.path, y), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = Ht());
      const {
        target: C
      } = d;
      if (!C) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return
      }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ip(this.prevProjectionDelta.x, this.projectionDelta.x), ip(this.prevProjectionDelta.y, this.projectionDelta.y)), pl(this.projectionDelta, this.layoutCorrected, C, this.latestValues), (this.treeScale.x !== b || this.treeScale.y !== B || !dp(this.projectionDelta.x, this.prevProjectionDelta.x) || !dp(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", C))
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(d = !0) {
      if (this.options.visualElement ?.scheduleRender(), d) {
        const y = this.getStack();
        y && y.scheduleRender()
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = oi(), this.projectionDelta = oi(), this.projectionDeltaWithTransform = oi()
    }
    setAnimationOrigin(d, y = !1) {
      const g = this.snapshot,
        p = g ? g.latestValues : {},
        x = {
          ...this.latestValues
        },
        b = oi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !y;
      const B = Ht(),
        C = g ? g.source : void 0,
        _ = this.layout ? this.layout.source : void 0,
        H = C !== _,
        X = this.getStack(),
        q = !X || X.members.length <= 1,
        Z = !!(H && !q && this.options.crossfade === !0 && !this.path.some(J3));
      this.animationProgress = 0;
      let Y;
      this.mixTargetDelta = nt => {
        const W = nt / 1e3;
        yp(b.x, d.x, W), yp(b.y, d.y, W), this.setTargetDelta(b), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (yl(B, this.layout.layoutBox, this.relativeParent.layout.layoutBox), k3(this.relativeTarget, this.relativeTargetOrigin, B, W), Y && O3(this.relativeTarget, Y) && (this.isProjectionDirty = !1), Y || (Y = Ht()), Ue(Y, this.relativeTarget)), H && (this.animationValues = x, N3(x, p, this.latestValues, W, Z, q)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = W
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation(d) {
      this.notifyListeners("animationStart"), this.currentAnimation ?.stop(), this.resumingFrom ?.currentAnimation ?.stop(), this.pendingAnimation && (Qn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ct.update(() => {
        $s.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = ui(0)), this.currentAnimation = T3(this.motionValue, [0, 1e3], {
          ...d,
          velocity: 0,
          isSync: !0,
          onUpdate: y => {
            this.mixTargetDelta(y), d.onUpdate && d.onUpdate(y)
          },
          onStop: () => {},
          onComplete: () => {
            d.onComplete && d.onComplete(), this.completeAnimation()
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
      })
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const d = this.getStack();
      d && d.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(_3), this.currentAnimation.stop()), this.completeAnimation()
    }
    applyTransformsToTarget() {
      const d = this.getLead();
      let {
        targetWithTransforms: y,
        target: g,
        layout: p,
        latestValues: x
      } = d;
      if (!(!y || !g || !p)) {
        if (this !== d && this.layout && p && ty(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
          g = this.target || Ht();
          const b = se(this.layout.layoutBox.x);
          g.x.min = d.target.x.min, g.x.max = g.x.min + b;
          const B = se(this.layout.layoutBox.y);
          g.y.min = d.target.y.min, g.y.max = g.y.min + B
        }
        Ue(y, g), si(y, x), pl(this.projectionDeltaWithTransform, this.layoutCorrected, y, x)
      }
    }
    registerSharedNode(d, y) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new R3), this.sharedNodes.get(d).add(y);
      const p = y.options.initialPromotionConfig;
      y.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(y) : void 0
      })
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0
    }
    getLead() {
      const {
        layoutId: d
      } = this.options;
      return d ? this.getStack() ?.lead || this : this
    }
    getPrevLead() {
      const {
        layoutId: d
      } = this.options;
      return d ? this.getStack() ?.prevLead : void 0
    }
    getStack() {
      const {
        layoutId: d
      } = this.options;
      if (d) return this.root.sharedNodes.get(d)
    }
    promote({
      needsReset: d,
      transition: y,
      preserveFollowOpacity: g
    } = {}) {
      const p = this.getStack();
      p && p.promote(this, g), d && (this.projectionDelta = void 0, this.needsReset = !0), y && this.setOptions({
        transition: y
      })
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1
    }
    resetSkewAndRotation() {
      const {
        visualElement: d
      } = this.options;
      if (!d) return;
      let y = !1;
      const {
        latestValues: g
      } = d;
      if ((g.z || g.rotate || g.rotateX || g.rotateY || g.rotateZ || g.skewX || g.skewY) && (y = !0), !y) return;
      const p = {};
      g.z && Qu("z", d, p, this.animationValues);
      for (let x = 0; x < Xu.length; x++) Qu(`rotate${Xu[x]}`, d, p, this.animationValues), Qu(`skew${Xu[x]}`, d, p, this.animationValues);
      d.render();
      for (const x in p) d.setStaticValue(x, p[x]), this.animationValues && (this.animationValues[x] = p[x]);
      d.scheduleRender()
    }
    applyProjectionStyles(d, y) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        d.visibility = "hidden";
        return
      }
      const g = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, d.visibility = "", d.opacity = "", d.pointerEvents = Ws(y ?.pointerEvents) || "", d.transform = g ? g(this.latestValues, "") : "none";
        return
      }
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, d.pointerEvents = Ws(y ?.pointerEvents) || ""), this.hasProjected && !ma(this.latestValues) && (d.transform = g ? g({}, "") : "none", this.hasProjected = !1);
        return
      }
      d.visibility = "";
      const x = p.animationValues || p.latestValues;
      this.applyTransformsToTarget();
      let b = V3(this.projectionDeltaWithTransform, this.treeScale, x);
      g && (b = g(x, b)), d.transform = b;
      const {
        x: B,
        y: C
      } = this.projectionDelta;
      d.transformOrigin = `${B.origin*100}% ${C.origin*100}% 0`, p.animationValues ? d.opacity = p === this ? x.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : x.opacityExit : d.opacity = p === this ? x.opacity !== void 0 ? x.opacity : "" : x.opacityExit !== void 0 ? x.opacityExit : 0;
      for (const _ in Sl) {
        if (x[_] === void 0) continue;
        const {
          correct: H,
          applyTo: X,
          isCSSVariable: q
        } = Sl[_], Z = b === "none" ? x[_] : H(x[_], p);
        if (X) {
          const Y = X.length;
          for (let nt = 0; nt < Y; nt++) d[X[nt]] = Z
        } else q ? this.options.visualElement.renderState.vars[_] = Z : d[_] = Z
      }
      this.options.layoutId && (d.pointerEvents = p === this ? Ws(y ?.pointerEvents) || "" : "none")
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach(d => d.currentAnimation ?.stop()), this.root.nodes.forEach(hp), this.root.sharedNodes.clear()
    }
  }
}

function L3(i) {
  i.updateLayout()
}

function H3(i) {
  const l = i.resumeFrom ?.snapshot || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const {
      layoutBox: o,
      measuredBox: r
    } = i.layout, {
      animationType: c
    } = i.options, m = l.source !== i.layout.source;
    c === "size" ? Le(x => {
      const b = m ? l.measuredBox[x] : l.layoutBox[x],
        B = se(b);
      b.min = o[x].min, b.max = b.min + B
    }) : ty(c, l.layoutBox, o) && Le(x => {
      const b = m ? l.measuredBox[x] : l.layoutBox[x],
        B = se(o[x]);
      b.max = b.min + B, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[x].max = i.relativeTarget[x].min + B)
    });
    const d = oi();
    pl(d, o, l.layoutBox);
    const y = oi();
    m ? pl(y, i.applyTransform(r, !0), l.measuredBox) : pl(y, o, l.layoutBox);
    const g = !P1(d);
    let p = !1;
    if (!i.resumeFrom) {
      const x = i.getClosestProjectingParent();
      if (x && !x.resumeFrom) {
        const {
          snapshot: b,
          layout: B
        } = x;
        if (b && B) {
          const C = Ht();
          yl(C, l.layoutBox, b.layoutBox);
          const _ = Ht();
          yl(_, o, B.layoutBox), W1(C, _) || (p = !0), x.options.layoutRoot && (i.relativeTarget = _, i.relativeTargetOrigin = C, i.relativeParent = x)
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: o,
      snapshot: l,
      delta: y,
      layoutDelta: d,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: p
    })
  } else if (i.isLead()) {
    const {
      onExitComplete: o
    } = i.options;
    o && o()
  }
  i.options.transition = void 0
}

function F3(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty))
}

function q3(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1
}

function Y3(i) {
  i.clearSnapshot()
}

function hp(i) {
  i.clearMeasurements()
}

function mp(i) {
  i.isLayoutDirty = !1
}

function G3(i) {
  const {
    visualElement: l
  } = i.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform()
}

function pp(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0
}

function X3(i) {
  i.resolveTargetDelta()
}

function Q3(i) {
  i.calcProjection()
}

function Z3(i) {
  i.resetSkewAndRotation()
}

function K3(i) {
  i.removeLeadSnapshot()
}

function yp(i, l, o) {
  i.translate = wt(l.translate, 0, o), i.scale = wt(l.scale, 1, o), i.origin = l.origin, i.originPoint = l.originPoint
}

function gp(i, l, o, r) {
  i.min = wt(l.min, o.min, r), i.max = wt(l.max, o.max, r)
}

function k3(i, l, o, r) {
  gp(i.x, l.x, o.x, r), gp(i.y, l.y, o.y, r)
}

function J3(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0
}
const P3 = {
    duration: .45,
    ease: [.4, 0, .1, 1]
  },
  vp = i => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i),
  xp = vp("applewebkit/") && !vp("chrome/") ? Math.round : Fe;

function bp(i) {
  i.min = xp(i.min), i.max = xp(i.max)
}

function W3(i) {
  bp(i.x), bp(i.y)
}

function ty(i, l, o) {
  return i === "position" || i === "preserve-aspect" && !a3(fp(l), fp(o), .2)
}

function $3(i) {
  return i !== i.root && i.scroll ?.wasRoot
}
const I3 = I1({
    attachResizeListener: (i, l) => Tl(i, "resize", l),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }),
  Zu = {
    current: void 0
  },
  ey = I1({
    measureScroll: i => ({
      x: i.scrollLeft,
      y: i.scrollTop
    }),
    defaultParent: () => {
      if (!Zu.current) {
        const i = new I3({});
        i.mount(window), i.setOptions({
          layoutScroll: !0
        }), Zu.current = i
      }
      return Zu.current
    },
    resetTransform: (i, l) => {
      i.style.transform = l !== void 0 ? l : "none"
    },
    checkIsScrollRoot: i => window.getComputedStyle(i).position === "fixed"
  }),
  t4 = {
    pan: {
      Feature: v3
    },
    drag: {
      Feature: g3,
      ProjectionNode: ey,
      MeasureLayout: K1
    }
  };

function Sp(i, l, o) {
  const {
    props: r
  } = i;
  i.animationState && r.whileHover && i.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o,
    m = r[c];
  m && Ct.postRender(() => m(l, Ml(l)))
}
class e4 extends Kn {
  mount() {
    const {
      current: l
    } = this.node;
    l && (this.unmount = Tx(l, (o, r) => (Sp(this.node, r, "Start"), c => Sp(this.node, c, "End"))))
  }
  unmount() {}
}
class n4 extends Kn {
  constructor() {
    super(...arguments), this.isActive = !1
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible")
    } catch {
      l = !0
    }!l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
  }
  mount() {
    this.unmount = Bl(Tl(this.node.current, "focus", () => this.onFocus()), Tl(this.node.current, "blur", () => this.onBlur()))
  }
  unmount() {}
}

function Tp(i, l, o) {
  const {
    props: r
  } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled) return;
  i.animationState && r.whileTap && i.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o),
    m = r[c];
  m && Ct.postRender(() => m(l, Ml(l)))
}
class a4 extends Kn {
  mount() {
    const {
      current: l
    } = this.node;
    l && (this.unmount = Mx(l, (o, r) => (Tp(this.node, r, "Start"), (c, {
      success: m
    }) => Tp(this.node, c, m ? "End" : "Cancel")), {
      useGlobalTarget: this.node.props.globalTapTarget
    }))
  }
  unmount() {}
}
const pc = new WeakMap,
  Ku = new WeakMap,
  i4 = i => {
    const l = pc.get(i.target);
    l && l(i)
  },
  l4 = i => {
    i.forEach(i4)
  };

function s4({
  root: i,
  ...l
}) {
  const o = i || document;
  Ku.has(o) || Ku.set(o, {});
  const r = Ku.get(o),
    c = JSON.stringify(l);
  return r[c] || (r[c] = new IntersectionObserver(l4, {
    root: i,
    ...l
  })), r[c]
}

function o4(i, l, o) {
  const r = s4(l);
  return pc.set(i, o), r.observe(i), () => {
    pc.delete(i), r.unobserve(i)
  }
}
const r4 = {
  some: 0,
  all: 1
};
class u4 extends Kn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
  }
  startObserver() {
    this.unmount();
    const {
      viewport: l = {}
    } = this.node.getProps(), {
      root: o,
      margin: r,
      amount: c = "some",
      once: m
    } = l, d = {
      root: o ? o.current : void 0,
      rootMargin: r,
      threshold: typeof c == "number" ? c : r4[c]
    }, y = g => {
      const {
        isIntersecting: p
      } = g;
      if (this.isInView === p || (this.isInView = p, m && !p && this.hasEnteredView)) return;
      p && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", p);
      const {
        onViewportEnter: x,
        onViewportLeave: b
      } = this.node.getProps(), B = p ? x : b;
      B && B(g)
    };
    return o4(this.node.current, d, y)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const {
      props: l,
      prevProps: o
    } = this.node;
    ["amount", "margin", "root"].some(c4(l, o)) && this.startObserver()
  }
  unmount() {}
}

function c4({
  viewport: i = {}
}, {
  viewport: l = {}
} = {}) {
  return o => i[o] !== l[o]
}
const f4 = {
    inView: {
      Feature: u4
    },
    tap: {
      Feature: a4
    },
    focus: {
      Feature: n4
    },
    hover: {
      Feature: e4
    }
  },
  d4 = {
    layout: {
      ProjectionNode: ey,
      MeasureLayout: K1
    }
  },
  h4 = {
    ...Wb,
    ...f4,
    ...t4,
    ...d4
  },
  R = hb(h4, Mb),
  m4 = {
    some: 0,
    all: 1
  };

function p4(i, l, {
  root: o,
  margin: r,
  amount: c = "some"
} = {}) {
  const m = r1(i),
    d = new WeakMap,
    y = p => {
      p.forEach(x => {
        const b = d.get(x.target);
        if (x.isIntersecting !== !!b)
          if (x.isIntersecting) {
            const B = l(x.target, x);
            typeof B == "function" ? d.set(x.target, B) : g.unobserve(x.target)
          } else typeof b == "function" && (b(x), d.delete(x.target))
      })
    },
    g = new IntersectionObserver(y, {
      root: o,
      rootMargin: r,
      threshold: typeof c == "number" ? c : m4[c]
    });
  return m.forEach(p => g.observe(p)), () => g.disconnect()
}

function fi(i, {
  root: l,
  margin: o,
  amount: r,
  once: c = !1,
  initial: m = !1
} = {}) {
  const [d, y] = F.useState(m);
  return F.useEffect(() => {
    if (!i.current || c && d) return;
    const g = () => (y(!0), c ? void 0 : () => y(!1)),
      p = {
        root: l && l.current || void 0,
        margin: o,
        amount: r
      };
    return p4(i.current, g, p)
  }, [l, i, o, c, r]), d
}
const y4 = () => {
    const [i, l] = F.useState({
      x: 0,
      y: 0
    });
    F.useEffect(() => {
      const r = c => {
        l({
          x: (c.clientX / window.innerWidth - .5) * 20,
          y: (c.clientY / window.innerHeight - .5) * 20
        })
      };
      return window.addEventListener("mousemove", r), () => window.removeEventListener("mousemove", r)
    }, []);
    const o = {
      animate: r => ({
        y: [0, -30, 0],
        x: [0, Math.sin(r) * 20, 0],
        opacity: [.3, .8, .3],
        scale: [1, 1.2, 1],
        transition: {
          duration: 3 + r * .5,
          repeat: 1 / 0,
          ease: "easeInOut"
        }
      })
    };
    return h.jsxs("section", {
      className: "relative min-h-screen bg-[#181A20] myhero overflow-hidden flex items-center justify-center -8",
      children: [h.jsx("div", {
        className: "absolute inset-0 bg-gradient-radial from-[#F0B90B]/10 via-transparent to-transparent"
      }), h.jsx("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [...Array(30)].map((r, c) => h.jsx(R.div, {
          custom: c,
          variants: o,
          animate: "animate",
          className: "absolute w-2 h-2 rounded-full bg-[#F0B90B]",
          style: {
            left: `${Math.random()*100}%`,
            top: `${Math.random()*100}%`,
            filter: "blur(1px)",
            boxShadow: "0 0 20px #F0B90B"
          }
        }, c))
      }), h.jsx(R.div, {
        className: "absolute inset-0 flex items-center justify-center",
        animate: {
          rotate: 360
        },
        transition: {
          duration: 40,
          repeat: 1 / 0,
          ease: "linear"
        },
        children: h.jsx("div", {
          className: "w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border-2 border-[#F0B90B]/20"
        })
      }), h.jsx(R.div, {
        className: "absolute inset-0 flex items-center justify-center",
        animate: {
          rotate: -360
        },
        transition: {
          duration: 30,
          repeat: 1 / 0,
          ease: "linear"
        },
        children: h.jsx("div", {
          className: "w-[700px] h-[700px] md:w-[900px] md:h-[900px] rounded-full border border-[#FFD43B]/10"
        })
      }), h.jsxs("div", {
        className: "relative z-10 max-w-7xl mx-auto px-6 py-20 text-center",
        children: [h.jsx(R.div, {
          initial: {
            scale: 0,
            rotate: -180,
            opacity: 0
          },
          animate: {
            scale: 1,
            rotate: 0,
            opacity: 1
          },
          transition: {
            duration: 1,
            ease: [.16, 1, .3, 1]
          },
          style: {
            x: i.x,
            y: i.y
          },
          className: "relative mb-12",
          children: h.jsxs(R.div, {
            animate: {
              y: [0, -20, 0]
            },
            transition: {
              duration: 4,
              repeat: 1 / 0,
              ease: "easeInOut"
            },
            className: "relative inline-block",
            children: [h.jsx("div", {
              className: "absolute inset-0 bg-[#F0B90B]/30 blur-3xl rounded-full scale-150"
              
            }), h.jsx("div", {
              className: "relative w-64 h-64 mx-auto z-2",
              style: { marginTop: "100px"
              },
              children: h.jsx("img", {
                src: "./logo1.png",
                alt: "金钱自由",
                className: "w-full h-full object-contain drop-shadow-2xl"
              })
            }), h.jsx(R.div, {
              animate: {
                rotate: 360
              },
              transition: {
                duration: 20,
                repeat: 1 / 0,
                ease: "linear"
              },
              className: "absolute inset-0 flex items-center justify-center",
              children: [...Array(8)].map((r, c) => h.jsx("div", {
                className: "absolute w-12 h-12 bg-[#F0B90B] rounded-full flex items-center justify-center shadow-lg shadow-[#F0B90B]/50",
                style: {
                  transform: `rotate(${c*45}deg) translateY(-150px)`
                },
                children: h.jsx("img", {
                  src: "./binanceblack.png",
                  alt: "binance logo",
                  className: "w-6 h-6"
                })
              }, c))
            })]
          })
        }), h.jsx(R.h2, {
          initial: {
            y: 30,
            opacity: 0
          },
          animate: {
            y: 0,
            opacity: 1
          },
          transition: {
            delay: .4,
            duration: .8,
            ease: [.16, 1, .3, 1]
          },
          className: "text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4",
          children: "金钱自由"
        }), h.jsx(R.p, {
          initial: {
            y: 30,
            opacity: 0
          },
          animate: {
            y: 0,
            opacity: 1
          },
          transition: {
            delay: .5,
            duration: .8,
            ease: [.16, 1, .3, 1]
          },
          className: "text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto",
          children: "Powered by BNB Chain | Built for the community"
        }), h.jsxs(R.div, {
          initial: {
            y: 30,
            opacity: 0
          },
          animate: {
            y: 0,
            opacity: 1
          },
          transition: {
            delay: .6,
            duration: .8,
            ease: [.16, 1, .3, 1]
          },
          className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
          children: [h.jsxs(R.a, {
            href: "https://pancakeswap.finance/swap?outputCurrency=0x1f2329d6f765b2cb4d054c6677e9d065f38b4444&chain=bsc",
            target: "_blank",
            whileHover: {
              scale: 1.05,
              boxShadow: "0 0 40px rgba(240, 185, 11, 0.6)"
            },
            whileTap: {
              scale: .95
            },
            className: "group relative px-8 py-4 bg-gradient-to-r from-[#F0B90B] to-[#FFD43B] text-[#181A20] font-bold text-lg rounded-full overflow-hidden shadow-lg shadow-[#F0B90B]/30 transition-all",
            children: [h.jsx("span", {
              className: "relative z-10",
              children: "Buy $金钱自由"
            }), h.jsx(R.div, {
              className: "absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity",
              whileHover: {
                scale: 1.5
              }
            })]
          }), h.jsx(R.a, {
            href: "https://t.me/financialfreecz",
            target: "_blank",
            whileHover: {
              scale: 1.05
            },
            whileTap: {
              scale: .95
            },
            className: "px-8 py-4 border-2 border-[#F0B90B] text-[#F0B90B] font-bold text-lg rounded-full hover:bg-[#F0B90B]/10 transition-all",
            children: "Join Community"
          })]
        }), h.jsxs(R.div, {
          initial: {
            y: 30,
            opacity: 0
          },
          animate: {
            y: 0,
            opacity: 1
          },
          transition: {
            delay: .7,
            duration: .8,
            ease: [.16, 1, .3, 1]
          },
          className: "mt-12 inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-[#F0B90B]/20 rounded-full",
          children: [h.jsx("span", {
            className: "text-gray-400 text-sm",
            children: "Contract:"
          }), h.jsx("span", {
            className: "text-white font-mono text-sm",
            children: "0x1f2329d6f765b2cb4d054c6677e9d065f38b4444"
          }), h.jsx("button", {
            className: "text-[#F0B90B] hover:text-[#FFD43B] transition-colors",
            children: h.jsx("svg", {
              className: "w-5 h-5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: h.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              })
            })
          })]
        })]
      }), h.jsx("div", {
        className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#181A20] to-transparent"
      })]
    })
  },
  g4 = () => {
    const i = F.useRef(null),
      l = fi(i, {
        once: !0,
        amount: .3
      }),
      o = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: .2,
            delayChildren: .1
          }
        }
      },
      r = {
        hidden: {
          y: 60,
          opacity: 0
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: .8,
            ease: [.16, 1, .3, 1]
          }
        }
      },
      c = {
        hidden: {
          x: -100,
          opacity: 0,
          scale: .8
        },
        visible: {
          x: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
            ease: [.16, 1, .3, 1]
          }
        }
      },
      m = [{
        label: "Community Members",
        value: "1K+"
      }, {
        label: "BNB Chain",
        value: "Native"
      }, {
        label: "CZ",
        value: "Official"
      }];
    return h.jsxs("section", {
      ref: i,
      className: "relative min-h-screen bg-[#181A20] py-20 md:py-32 overflow-hidden",
      children: [h.jsx("div", {
        className: "absolute inset-0 bg-gradient-to-b from-[#181A20] via-[#1a1d26] to-[#181A20]"
      }), h.jsx("div", {
        className: "absolute inset-0 opacity-10",
        children: h.jsx("div", {
          className: "absolute inset-0",
          style: {
            backgroundImage: "linear-gradient(#F0B90B 1px, transparent 1px), linear-gradient(90deg, #F0B90B 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }
        })
      }), h.jsx(R.div, {
        initial: {
          scale: 0,
          opacity: 0
        },
        animate: l ? {
          scale: 1,
          opacity: .1
        } : {},
        transition: {
          duration: 1.5,
          ease: "easeOut"
        },
        className: "absolute top-1/4 left-1/4 w-96 h-96 bg-[#F0B90B] rounded-full blur-[120px]"
      }), h.jsx("div", {
        className: "relative z-10 max-w-7xl mx-auto px-6",
        children: h.jsxs(R.div, {
          variants: o,
          initial: "hidden",
          animate: l ? "visible" : "hidden",
          className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
          children: [h.jsxs(R.div, {
            variants: c,
            className: "relative order-2 lg:order-1",
            children: [h.jsx("div", {
              className: "absolute inset-0 flex items-center justify-center",
              children: h.jsx(R.div, {
                animate: {
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                },
                transition: {
                  duration: 20,
                  repeat: 1 / 0,
                  ease: "linear"
                },
                className: "w-[400px] h-[400px] bg-gradient-to-r from-[#F0B90B] to-[#FFD43B] rounded-full blur-[100px] opacity-30"
              })
            }), h.jsx(R.div, {
              animate: {
                rotate: 360
              },
              transition: {
                duration: 40,
                repeat: 1 / 0,
                ease: "linear"
              },
              className: "absolute inset-0 flex items-center justify-center",
              children: h.jsx("svg", {
                width: "500",
                height: "500",
                viewBox: "0 0 500 500",
                className: "text-[#F0B90B]/20",
                children: h.jsx("polygon", {
                  points: "250,50 450,150 450,350 250,450 50,350 50,150",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2"
                })
              })
            }), h.jsx(R.div, {
              animate: {
                y: [0, -20, 0]
              },
              transition: {
                duration: 5,
                repeat: 1 / 0,
                ease: "easeInOut"
              },
              className: "relative z-10",
              children: h.jsxs("div", {
                className: "relative w-full max-w-md mx-auto",
                children: [h.jsx(R.div, {
                  animate: {
                    rotate: -360
                  },
                  transition: {
                    duration: 25,
                    repeat: 1 / 0,
                    ease: "linear"
                  },
                  className: "absolute inset-0 border-4 border-[#F0B90B]/30 rounded-full",
                  style: {
                    padding: "10%"
                  }
                }), h.jsxs("div", {
                  className: "relative p-8",
                  children: [h.jsx("img", {
                    src: "./palluu1.png",
                    alt: "金钱自由 Character",
                    className: "w-full h-auto object-contain drop-shadow-2xl"
                  }), [...Array(4)].map((d, y) => h.jsx(R.div, {
                    animate: {
                      y: [0, -15, 0],
                      opacity: [.5, 1, .5]
                    },
                    transition: {
                      duration: 3,
                      repeat: 1 / 0,
                      delay: y * .5,
                      ease: "easeInOut"
                    },
                    className: "absolute",
                    style: {
                      top: `${20+y*20}%`,
                      left: y % 2 === 0 ? "-5%" : "95%"
                    },
                    children: h.jsx("div", {
                      className: "w-8 h-8 bg-[#F0B90B] rounded-full flex items-center justify-center shadow-lg shadow-[#F0B90B]/50",
                      children: h.jsx("img", {
                        src: "binanceblack.png",
                        alt: "binance logo",
                        className: "w-5 h-5"
                      })
                    })
                  }, y))]
                })]
              })
            })]
          }), h.jsxs(R.div, {
            variants: o,
            className: "order-1 lg:order-2 space-y-8",
            children: [h.jsxs(R.div, {
              variants: r,
              className: "inline-flex items-center gap-2 px-4 py-2 bg-[#F0B90B]/10 border border-[#F0B90B]/20 rounded-full",
              children: [h.jsx("div", {
                className: "w-2 h-2 bg-[#F0B90B] rounded-full animate-pulse"
              }), h.jsx("span", {
                className: "text-[#F0B90B] text-sm font-semibold uppercase tracking-wider",
                children: "About 金钱自由"
              })]
            }), h.jsxs(R.h2, {
              variants: r,
              className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight",
              style: {
                fontFamily: "Orbitron, sans-serif"
              },
              children: ["金钱自由"]
            }), h.jsxs(R.div, {
              variants: r,
              className: "space-y-4",
              children: [h.jsx("p", {
                className: "text-lg md:text-xl text-gray-300 leading-relaxed",
                children: "金钱自由 is a unique memecoin on the BNB Chain, created as a heartfelt tribute to Binance's remarkable journey in the cryptocurrency world."
              })]
            }), h.jsx(R.div, {
              variants: r,
              className: "grid grid-cols-3 gap-4 pt-4",
              children: m.map((d, y) => h.jsxs(R.div, {
                whileHover: {
                  scale: 1.05,
                  y: -5
                },
                className: "relative p-4 bg-gradient-to-br from-[#F0B90B]/10 to-transparent border border-[#F0B90B]/20 rounded-xl backdrop-blur-sm group cursor-pointer",
                children: [h.jsx("div", {
                  className: "absolute inset-0 bg-gradient-to-br from-[#F0B90B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                }), h.jsxs("div", {
                  className: "relative",
                  children: [h.jsx("div", {
                    className: "text-2xl md:text-3xl font-bold text-[#F0B90B] mb-1",
                    children: d.value
                  }), h.jsx("div", {
                    className: "text-xs md:text-sm text-gray-400",
                    children: d.label
                  })]
                })]
              }, y))
            })]
          })]
        })
      }), h.jsx("div", {
        className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F0B90B]/30 to-transparent"
      })]
    })
  },
  v4 = () => {
    const i = F.useRef(null),
      l = fi(i, {
        once: !0,
        amount: .3
      }),
      [o, r] = F.useState(!1),
      [c, m] = F.useState(null),
      d = "0x1f2329d6f765b2cb4d054c6677e9d065f38b4444",
      y = [{
        label: "Liquidity Pool",
        percentage: 40,
        color: "#F0B90B",
        description: "Locked for trading stability"
      }, {
        label: "Community Rewards",
        percentage: 30,
        color: "#FFD43B",
        description: "Distributed to holders"
      }, {
        label: "Development",
        percentage: 15,
        color: "#FFA500",
        description: "Platform growth & innovation"
      }, {
        label: "Marketing",
        percentage: 10,
        color: "#FF8C00",
        description: "Global expansion campaigns"
      }, {
        label: "Team & Advisors",
        percentage: 5,
        color: "#FF7700",
        description: "Vested for 24 months"
      }],
      g = [{
        label: "Token Name",
        value: "金钱自由"
      }, {
        label: "Symbol",
        value: "金钱自由"
      }, {
        label: "Network",
        value: "BNB Chain"
      }],
      p = () => {
        navigator.clipboard.writeText(d), r(!0), setTimeout(() => r(!1), 2e3)
      },
      x = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: .15,
            delayChildren: .1
          }
        }
      },
      b = {
        hidden: {
          y: 60,
          opacity: 0
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: .8,
            ease: [.16, 1, .3, 1]
          }
        }
      };
    return (() => {
      let C = 0;
      return y.map(_ => {
        const H = C / 100 * 360;
        C += _.percentage;
        const X = C / 100 * 360;
        return {
          ..._,
          startAngle: H,
          endAngle: X
        }
      })
    })(), h.jsxs("section", {
      ref: i,
      className: "relative min-h-screen bg-[#181A20] py-20 md:py-32 overflow-hidden",
      children: [h.jsx("div", {
        className: "absolute inset-0 bg-gradient-to-b from-[#181A20] via-[#1a1d26] to-[#181A20]"
      }), h.jsx("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [...Array(20)].map((C, _) => h.jsx(R.div, {
          className: "absolute w-1 h-1 bg-[#F0B90B] rounded-full",
          animate: {
            y: [0, -30, 0],
            x: [0, Math.sin(_) * 15, 0],
            opacity: [.2, .6, .2]
          },
          transition: {
            duration: 4 + _ * .3,
            repeat: 1 / 0,
            ease: "easeInOut"
          },
          style: {
            left: `${Math.random()*100}%`,
            top: `${Math.random()*100}%`
          }
        }, _))
      }), h.jsx(R.div, {
        initial: {
          scale: 0,
          opacity: 0
        },
        animate: l ? {
          scale: 1,
          opacity: .08
        } : {},
        transition: {
          duration: 1.5,
          ease: "easeOut"
        },
        className: "absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#F0B90B] rounded-full blur-[150px]"
      }), h.jsx("div", {
        className: "relative z-10 max-w-7xl mx-auto px-6",
        children: h.jsxs(R.div, {
          variants: x,
          initial: "hidden",
          animate: l ? "visible" : "hidden",
          className: "space-y-16",
          children: [h.jsxs("div", {
            className: "text-center space-y-6",
            children: [h.jsxs(R.div, {
              variants: b,
              className: "inline-flex items-center gap-2 px-4 py-2 bg-[#F0B90B]/10 border border-[#F0B90B]/20 rounded-full",
              children: [h.jsx("div", {
                className: "w-2 h-2 bg-[#F0B90B] rounded-full animate-pulse"
              }), h.jsx("span", {
                className: "text-[#F0B90B] text-sm font-semibold uppercase tracking-wider",
                children: "Tokenomics"
              })]
            }), h.jsx(R.p, {
              variants: b,
              className: "text-lg md:text-xl text-gray-400 max-w-2xl mx-auto",
              children: "Built on BNB Chain with a fair and transparent token economy designed for long-term sustainability"
            })]
          }), h.jsx(R.div, {
            variants: b,
            className: "max-w-3xl mx-auto",
            children: h.jsxs("div", {
              className: "relative p-6 bg-gradient-to-br from-[#F0B90B]/5 via-[#1a1d26] to-[#181A20] border border-[#F0B90B]/20 rounded-2xl backdrop-blur-sm overflow-hidden group",
              children: [h.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-[#F0B90B]/0 via-[#F0B90B]/5 to-[#F0B90B]/0 opacity-0 group-hover:opacity-100 transition-opacity"
              }), h.jsxs("div", {
                className: "relative flex flex-col md:flex-row items-center justify-between gap-4",
                children: [h.jsxs("div", {
                  className: "flex-1 space-y-2",
                  children: [h.jsx("div", {
                    className: "text-sm text-gray-400 uppercase tracking-wider",
                    children: "Contract Address"
                  }), h.jsx("div", {
                    className: "font-mono text-white text-sm md:text-base break-all",
                    children: d
                  })]
                }), h.jsx(R.button, {
                  whileHover: {
                    scale: 1.05
                  },
                  whileTap: {
                    scale: .95
                  },
                  onClick: p,
                  className: "flex items-center gap-2 px-6 py-3 bg-[#F0B90B] text-[#181A20] font-semibold rounded-full hover:bg-[#FFD43B] transition-colors",
                  children: o ? h.jsxs(h.Fragment, {
                    children: [h.jsx("svg", {
                      className: "w-5 h-5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: h.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M5 13l4 4L19 7"
                      })
                    }), "Copied!"]
                  }) : h.jsxs(h.Fragment, {
                    children: [h.jsx("svg", {
                      className: "w-5 h-5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: h.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      })
                    }), "Copy"]
                  })
                })]
              })]
            })
          }), h.jsx(R.div, {
            variants: b,
            className: "grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto items-center",
            children: g.map((C, _) => h.jsxs(R.div, {
              whileHover: {
                scale: 1.05,
                y: -5
              },
              className: "relative p-6 bg-gradient-to-br from-[#F0B90B]/10 to-transparent border border-[#F0B90B]/20 rounded-xl backdrop-blur-sm group cursor-pointer overflow-hidden",
              children: [h.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-br from-[#F0B90B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              }), h.jsxs("div", {
                className: "relative space-y-2",
                children: [h.jsx("div", {
                  className: "text-sm text-gray-400",
                  children: C.label
                }), h.jsx("div", {
                  className: "text-xl md:text-2xl font-bold text-white",
                  children: C.value
                })]
              })]
            }, _))
          })]
        })
      }), h.jsx("div", {
        className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F0B90B]/30 to-transparent"
      })]
    })
  },
  x4 = () => {
    const i = F.useRef(null),
      l = fi(i, {
        once: !0,
        amount: .3
      }),
      o = [{
        name: "Twitter",
        icon: h.jsx("svg", {
          className: "w-6 h-6",
          fill: "currentColor",
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          })
        }),
        handle: "@financialfreecz",
        link: "https://x.com/financialfreecz",
        color: "#1DA1F2",
        gradient: "from-[#1DA1F2] to-[#0D8BD9]"
      }, {
        name: "Telegram",
        icon: h.jsx("svg", {
          className: "w-6 h-6",
          fill: "currentColor",
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"
          })
        }),
        handle: "Join our Telegram",
        link: "https://t.me/financialfreecz",
        color: "#0088cc",
        gradient: "from-[#0088cc] to-[#006699]"
      }, {
        name: "Dextools",
        icon: h.jsx("svg", {
          className: "w-6 h-6",
          fill: "currentColor",
          viewBox: "0 -.058 754.779 867.058",
          children: h.jsx("path", {
            d: "m280.395 49.025c-51.649 26.905-93.905 49.672-93.896 50.598.023 2.39 123.959 65.156 128.358 65.003 2.001-.067 16.517-6.749 32.256-14.847l28.621-14.721 31.258 16.067 31.256 16.07 51.188-23.001c77.13-34.659 85.141-38.457 83.885-39.733-1.666-1.693-29.331-16.555-104.388-56.07-36.274-19.098-71.481-37.823-78.24-41.612-6.758-3.789-13.21-6.837-14.337-6.778s-44.311 22.12-95.961 49.024zm-226.532 117.306-53.766 27.772v121.886c0 67.038.706 121.885 1.572 121.885.863 0 27.316-11.467 58.783-25.482l57.213-25.482v-128.476l27.958 15.232a33224.294 33224.294 0 0 0 64.671 35.109l36.712 19.877 16.336-7.387a3822.03 3822.03 0 0 0 30.674-14.056c7.885-3.672 27.241-12.39 43.012-19.377 15.771-6.99 30.37-14.019 32.44-15.621 2.75-2.128-30.782-20.658-124.025-68.54-70.285-36.093-130.046-65.509-132.802-65.368s-29.206 12.752-58.778 28.028zm529.148 7.799c-36.618 16.531-66.604 30.717-66.638 31.526-.032.808 19.926 12.675 44.354 26.367 24.426 13.695 44.412 25.632 44.412 26.531 0 .897-21.615 11.37-48.03 23.278-26.419 11.905-93.194 42.061-148.393 67.014l-184.954 83.602c-46.525 21.032-88.462 39.989-93.193 42.132-95.03 43.019-121.15 54.956-124.737 57.005-3.607 2.063-4.424 14.048-5.066 74.201l-.766 71.744 48.08 24.498 48.079 24.497 66.669-30.088c36.669-16.547 66.669-30.953 66.669-32.014 0-1.058-6.776-5.473-15.054-9.815-8.282-4.342-25.378-13.954-37.995-21.364-12.616-7.411-25.196-14.21-27.958-15.112-2.761-.899-4.98-2.472-4.935-3.498.046-1.023 29.404-14.968 65.236-30.991 69.597-31.117 122.858-55.1 237.202-106.809a305577.39 305577.39 0 0 1 153.411-69.31c44.948-20.288 97.208-43.983 116.134-52.655l34.41-15.767.765-72.561.769-72.558-48.765-25.03c-26.822-13.765-49.748-24.994-50.95-24.953-1.201.038-32.141 13.595-68.756 30.13zm153.872 261.772c-7.186 3.51-21.38 10.082-31.542 14.603s-29.446 13.222-42.852 19.339l-24.374 11.117-.556 63.702c-.307 35.035-1.597 63.545-2.867 63.36-2.885-.429-48.567-23.857-94.487-48.463-33.143-17.757-35.225-18.463-43.013-14.606-4.502 2.231-31.413 14.3-59.801 26.825-28.389 12.523-52.541 23.587-53.677 24.589-1.133 1 56.002 31.967 126.97 68.819l129.029 67.003 55.119-28.513c30.312-15.68 56.088-29.983 57.275-31.782 2.672-4.045 2.443-242.93-.232-242.607-1.058.127-7.806 3.104-14.992 6.614zm-305.227 280.391a25013.26 25013.26 0 0 0 -28.675 12.349c-28.856 12.484-23.201 12.898-57.531-4.192-22.865-11.382-32.721-14.894-36.999-13.189-3.209 1.278-30.826 13.703-61.376 27.61-30.548 13.907-56.602 25.285-57.898 25.285-12.817 0 8.491 12.731 90.714 54.207l96.428 48.637 40.572-20.03c22.315-11.017 67.323-33.078 100.021-49.024 32.695-15.95 59.042-29.413 58.549-29.921-.497-.506-27.893-14.574-60.883-31.262l-59.982-30.338z"
          })
        }),
        handle: "View Chart",
        link: "https://www.dextools.io/app/en/bnb/pair-explorer/0x1f2329d6f765b2cb4d054c6677e9d065f38b4444",
        color: "#08d3f7ff",
        gradient: "from-[#5865F2] to-[#4752C4]"
      }],
      r = [{
        icon: "🎯",
        title: "Holder Rewards",
        description: "Earn passive rewards just by holding 金钱自由 tokens"
      }, {
        icon: "🚀",
        title: "Exclusive Access",
        description: "Early access to new features and community events"
      }, {
        icon: "🤝",
        title: "Governance Rights",
        description: "Vote on key decisions and shape the future of 金钱自由"
      }, {
        icon: "🎨",
        title: "NFT Drops",
        description: "Exclusive 金钱自由 NFT collections for community members"
      }],
      c = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: .15,
            delayChildren: .1
          }
        }
      },
      m = {
        hidden: {
          y: 60,
          opacity: 0
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: .8,
            ease: [.16, 1, .3, 1]
          }
        }
      };
    return h.jsxs("section", {
      ref: i,
      className: "relative h-fit bg-[#181A20] py-20 md:py-32 overflow-hidden",
      children: [h.jsx("div", {
        className: "absolute inset-0 bg-gradient-to-b from-[#181A20] via-[#1a1d26] to-[#181A20]"
      }), h.jsx("div", {
        className: "absolute inset-0 opacity-5",
        children: h.jsx("div", {
          className: "absolute inset-0",
          style: {
            backgroundImage: "radial-gradient(circle, #F0B90B 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }
        })
      }), h.jsx("div", {
        className: "absolute inset-0",
        children: [...Array(15)].map((d, y) => h.jsx(R.div, {
          className: "absolute",
          animate: {
            y: [0, -100, 0],
            x: [0, Math.sin(y) * 50, 0],
            opacity: [.2, .5, .2]
          },
          transition: {
            duration: 5 + y * .5,
            repeat: 1 / 0,
            ease: "easeInOut"
          },
          style: {
            left: `${10+y*6}%`,
            top: `${20+y%5*15}%`
          },
          children: h.jsx("div", {
            className: "text-4xl opacity-30",
            children: ["💎", "🚀", "⭐", "🔥", "💰"][y % 5]
          })
        }, y))
      }), h.jsx(R.div, {
        initial: {
          scale: 0,
          opacity: 0
        },
        animate: l ? {
          scale: 1,
          opacity: .06
        } : {},
        transition: {
          duration: 1.5,
          ease: "easeOut"
        },
        className: "absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#F0B90B] rounded-full blur-[150px]"
      }), h.jsx("div", {
        className: "relative z-10 max-w-7xl mx-auto px-6",
        children: h.jsxs("div", {
          className: "space-y-16",
          children: [h.jsxs("div", {
            className: "text-center space-y-6",
            children: [h.jsxs(R.div, {
              variants: m,
              className: "inline-flex items-center gap-2 px-4 py-2 bg-[#F0B90B]/10 border border-[#F0B90B]/20 rounded-full",
              children: [h.jsx("div", {
                className: "w-2 h-2 bg-[#F0B90B] rounded-full animate-pulse"
              }), h.jsx("span", {
                className: "text-[#F0B90B] text-sm font-semibold uppercase tracking-wider",
                children: "Join the Movement"
              })]
            }), h.jsxs(R.h2, {
              variants: m,
              className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white",
              style: {
                fontFamily: "Orbitron, sans-serif"
              },
              children: ["Community", " ", h.jsx("span", {
                className: "bg-gradient-to-r from-[#F0B90B] to-[#FFD43B] bg-clip-text text-transparent",
                children: "First"
              })]
            }), h.jsx(R.p, {
              variants: m,
              className: "text-lg md:text-xl text-gray-400 max-w-2xl mx-auto",
              children: "Join thousands of 金钱自由 holders and be part of the most vibrant community on BNB Chain"
            })]
          }), h.jsx(R.div, {
            variants: c,
            className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto",
            children: o.map((d, y) => h.jsxs(R.a, {
              variants: m,
              href: d.link,
              target: "_blank",
              rel: "noopener noreferrer",
              whileHover: {
                scale: 1.05,
                y: -10
              },
              whileTap: {
                scale: .95
              },
              className: "group relative p-6 bg-gradient-to-br from-[#1a1d26] to-[#181A20] border border-[#F0B90B]/20 rounded-2xl overflow-hidden cursor-pointer",
              children: [h.jsx("div", {
                className: `absolute inset-0 bg-gradient-to-br ${d.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`
              }), h.jsx(R.div, {
                className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity",
                style: {
                  background: `radial-gradient(circle at 50% 50%, ${d.color}15, transparent 70%)`
                }
              }), h.jsxs("div", {
                className: "relative flex items-center gap-4",
                children: [h.jsx(R.div, {
                  whileHover: {
                    rotate: 360
                  },
                  transition: {
                    duration: .5
                  },
                  className: "flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#F0B90B]/20 to-transparent border border-[#F0B90B]/30 rounded-xl flex items-center justify-center",
                  style: {
                    boxShadow: `0 0 20px ${d.color}30`
                  },
                  children: h.jsx("div", {
                    style: {
                      color: d.color
                    },
                    children: d.icon
                  })
                }), h.jsxs("div", {
                  className: "flex-1",
                  children: [h.jsx("h3", {
                    className: "text-xl font-bold text-white mb-1",
                    children: d.name
                  }), h.jsx("p", {
                    className: "text-sm text-gray-400",
                    children: d.handle
                  })]
                }), h.jsx(R.div, {
                  className: "text-[#F0B90B] opacity-0 group-hover:opacity-100 transition-opacity",
                  animate: {
                    x: [0, 5, 0]
                  },
                  transition: {
                    duration: 1,
                    repeat: 1 / 0
                  },
                  children: h.jsx("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: h.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M17 8l4 4m0 0l-4 4m4-4H3"
                    })
                  })
                })]
              })]
            }, y))
          }), h.jsx(R.div, {
            variants: c,
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
            children: r.map((d, y) => h.jsxs(R.div, {
              variants: m,
              whileHover: {
                scale: 1.05,
                y: -5
              },
              className: "relative p-6 bg-gradient-to-br from-[#F0B90B]/5 to-transparent border border-[#F0B90B]/20 rounded-xl group cursor-pointer",
              children: [h.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-br from-[#F0B90B]/0 to-[#F0B90B]/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
              }), h.jsxs("div", {
                className: "relative space-y-3",
                children: [h.jsx("div", {
                  className: "text-4xl",
                  children: d.icon
                }), h.jsx("h4", {
                  className: "text-lg font-bold text-white",
                  children: d.title
                }), h.jsx("p", {
                  className: "text-sm text-gray-400",
                  children: d.description
                })]
              })]
            }, y))
          }), h.jsxs(R.div, {
            variants: m,
            className: "relative p-8 md:p-12 bg-gradient-to-r from-[#F0B90B]/10 via-[#FFD43B]/10 to-[#F0B90B]/10 border border-[#F0B90B]/30 rounded-3xl overflow-hidden",
            children: [h.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-r from-[#F0B90B]/5 to-[#FFD43B]/5 opacity-50"
            }), h.jsx(R.div, {
              animate: {
                scale: [1, 1.2, 1],
                opacity: [.3, .5, .3]
              },
              transition: {
                duration: 4,
                repeat: 1 / 0
              },
              className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F0B90B] rounded-full blur-[100px]"
            }), h.jsxs("div", {
              className: "relative text-center space-y-6",
              children: [h.jsxs("h3", {
                className: "text-3xl md:text-4xl font-bold text-white",
                children: ["Ready to Join the", " ", h.jsx("span", {
                  className: "bg-gradient-to-r from-[#F0B90B] to-[#FFD43B] bg-clip-text text-transparent",
                  children: "金钱自由 Revolution?"
                })]
              }), h.jsx("p", {
                className: "text-lg text-gray-300 max-w-2xl mx-auto",
                children: "Connect with thousands of holders, stay updated on the latest news, and be part of the most exciting community on BNB Chain"
              }), h.jsx(R.a, {
                href: "https://t.me/financialfreecz",
                target: "_blank",
                rel: "noopener noreferrer",
                whileHover: {
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(240, 185, 11, 0.5)"
                },
                whileTap: {
                  scale: .95
                },
                className: "inline-block px-10 py-4 bg-gradient-to-r from-[#F0B90B] to-[#FFD43B] text-[#181A20] font-bold text-lg rounded-full shadow-lg shadow-[#F0B90B]/30 hover:shadow-[#F0B90B]/50 transition-all",
                children: "Join Community Now"
              })]
            })]
          })]
        })
      }), h.jsx("div", {
        className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F0B90B]/30 to-transparent"
      })]
    })
  },
  b4 = () => {
    const i = F.useRef(null),
      l = fi(i, {
        once: !0,
        amount: .2
      }),
      o = [{
        phase: "Phase 1",
        title: "Launch & Foundation",
        status: "completed",
        quarter: "Q1 2025",
        items: ["Token launch on BNB Chain", "Initial liquidity pool creation", "Community building & social channels", "Website & branding launch", "CoinGecko & CoinMarketCap listing"],
        icon: h.jsx("svg", {
          className: "w-8 h-8",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          })
        })
      }, {
        phase: "Phase 2",
        title: "Growth & Expansion",
        status: "in-progress",
        quarter: "Q2 2025",
        items: ["Major CEX listings (Binance, KuCoin)", "Strategic partnerships with DeFi protocols", "金钱自由 NFT collection launch", "Community rewards program", "Global marketing campaign"],
        icon: h.jsx("svg", {
          className: "w-8 h-8",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          })
        })
      }, {
        phase: "Phase 3",
        title: "Utility & Innovation",
        status: "upcoming",
        quarter: "Q3 2025",
        items: ["金钱自由 staking platform launch", "Integration with Binance ecosystem", "Mobile app development", "Cross-chain bridge implementation", "Governance token mechanics"],
        icon: h.jsx("svg", {
          className: "w-8 h-8",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          })
        })
      }, {
        phase: "Phase 4",
        title: "Ecosystem Dominance",
        status: "upcoming",
        quarter: "Q4 2025",
        items: ["金钱自由 DeFi suite launch", "GameFi integration & play-to-earn", "Metaverse presence & virtual events", "Major brand collaborations", "Global community events"],
        icon: h.jsx("svg", {
          className: "w-8 h-8",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          })
        })
      }, {
        phase: "Phase 5",
        title: "The Future",
        status: "future",
        quarter: "2026+",
        items: ["金钱自由 DAO governance implementation", "Layer 2 scaling solutions", "Enterprise partnerships", "Global adoption initiatives", "Innovation lab for new features"],
        icon: h.jsx("svg", {
          className: "w-8 h-8",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          children: h.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          })
        })
      }],
      r = d => {
        switch (d) {
          case "completed":
            return {
              bg: "bg-green-500", text: "text-green-500", glow: "shadow-green-500/50"
            };
          case "in-progress":
            return {
              bg: "bg-[#F0B90B]", text: "text-[#F0B90B]", glow: "shadow-[#F0B90B]/50"
            };
          case "upcoming":
            return {
              bg: "bg-blue-500", text: "text-blue-500", glow: "shadow-blue-500/50"
            };
          case "future":
            return {
              bg: "bg-purple-500", text: "text-purple-500", glow: "shadow-purple-500/50"
            };
          default:
            return {
              bg: "bg-gray-500", text: "text-gray-500", glow: "shadow-gray-500/50"
            }
        }
      },
      c = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: .3,
            delayChildren: .2
          }
        }
      },
      m = {
        hidden: {
          y: 60,
          opacity: 0
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: .8,
            ease: [.16, 1, .3, 1]
          }
        }
      };
    return h.jsxs("section", {
      ref: i,
      className: "relative min-h-screen bg-[#181A20] py-20 md:py-32 overflow-hidden",
      children: [h.jsx("div", {
        className: "absolute inset-0 bg-gradient-to-b from-[#181A20] via-[#1a1d26] to-[#181A20]"
      }), h.jsx("div", {
        className: "absolute inset-0 opacity-5",
        children: h.jsx(R.div, {
          animate: {
            backgroundPosition: ["0% 0%", "100% 100%"]
          },
          transition: {
            duration: 20,
            repeat: 1 / 0,
            ease: "linear"
          },
          className: "absolute inset-0",
          style: {
            backgroundImage: "linear-gradient(45deg, #F0B90B 1px, transparent 1px), linear-gradient(-45deg, #F0B90B 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }
        })
      }), h.jsx("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [...Array(8)].map((d, y) => h.jsx(R.div, {
          className: "absolute",
          animate: {
            y: [0, -50, 0],
            rotate: [0, 360],
            opacity: [.1, .3, .1]
          },
          transition: {
            duration: 10 + y * 2,
            repeat: 1 / 0,
            ease: "easeInOut",
            delay: y * .5
          },
          style: {
            left: `${10+y*12}%`,
            top: `${20+y%3*25}%`
          },
          children: h.jsx("svg", {
            className: "w-12 h-12 text-[#F0B90B]",
            viewBox: "0 0 126.61 126.61",
            children: h.jsx("path", {
              fill: "currentColor",
              opacity: "0.3",
              d: "M38.73 53.2l24.59-24.58 24.6 24.6 14.3-14.31L63.32 0 24.43 38.89l14.3 14.31zM0 63.31l14.3-14.3 14.31 14.3-14.31 14.3L0 63.31zm38.73 10.11l24.59 24.59 24.6-24.6 14.31 14.29-38.9 38.91-38.91-38.88 14.3-14.31zM97.88 63.32L112.18 49l14.43 14.35-14.35 14.33-14.38-14.36z"
            })
          })
        }, y))
      }), h.jsx(R.div, {
        initial: {
          scale: 0,
          opacity: 0
        },
        animate: l ? {
          scale: 1,
          opacity: .08
        } : {},
        transition: {
          duration: 1.5,
          ease: "easeOut"
        },
        className: "absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#F0B90B] rounded-full blur-[180px]"
      }), h.jsx("div", {
        className: "relative z-10 max-w-7xl mx-auto px-6",
        children: h.jsxs(R.div, {
          variants: c,
          initial: "hidden",
          animate: l ? "visible" : "hidden",
          className: "space-y-16",
          children: [h.jsxs("div", {
            className: "text-center space-y-6",
            children: [h.jsxs(R.div, {
              variants: m,
              className: "inline-flex items-center gap-2 px-4 py-2 bg-[#F0B90B]/10 border border-[#F0B90B]/20 rounded-full",
              children: [h.jsx("div", {
                className: "w-2 h-2 bg-[#F0B90B] rounded-full animate-pulse"
              }), h.jsx("span", {
                className: "text-[#F0B90B] text-sm font-semibold uppercase tracking-wider",
                children: "Our Journey"
              })]
            }), h.jsxs(R.h2, {
              variants: m,
              className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white",
              style: {
                fontFamily: "Orbitron, sans-serif"
              },
              children: ["The", " ", h.jsx("span", {
                className: "bg-gradient-to-r from-[#F0B90B] to-[#FFD43B] bg-clip-text text-transparent",
                children: "Roadmap"
              })]
            }), h.jsx(R.p, {
              variants: m,
              className: "text-lg md:text-xl text-gray-400 max-w-2xl mx-auto",
              children: "From launch to global domination — follow 金钱自由's journey to becoming the most iconic mascot token on BNB Chain"
            })]
          }), h.jsxs("div", {
            className: "relative",
            children: [h.jsx("div", {
              className: "hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F0B90B] via-[#FFD43B] to-[#F0B90B] transform -translate-x-1/2"
            }), h.jsx("div", {
              className: "md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F0B90B] via-[#FFD43B] to-[#F0B90B]"
            }), h.jsx("div", {
              className: "space-y-0",
              children: o.map((d, y) => {
                const g = F.useRef(null),
                  p = fi(g, {
                    once: !0,
                    amount: .5
                  }),
                  x = r(d.status),
                  b = y % 2 === 0;
                return h.jsxs(R.div, {
                  ref: g,
                  initial: {
                    opacity: 0,
                    x: b ? -100 : 100
                  },
                  animate: p ? {
                    opacity: 1,
                    x: 0
                  } : {},
                  transition: {
                    duration: .8,
                    delay: y * .2,
                    ease: [.16, 1, .3, 1]
                  },
                  className: "relative",
                  children: [h.jsxs("div", {
                    className: "hidden md:grid md:grid-cols-2 gap-8 mb-20",
                    children: [h.jsx("div", {
                      className: `${b?"text-right pr-12":"order-2 pl-12"}`,
                      children: b && h.jsx(ku, {
                        phase: d,
                        statusColors: x,
                        align: "right"
                      })
                    }), h.jsx("div", {
                      className: "absolute left-1/2 top-0 transform -translate-x-1/2 z-10",
                      children: h.jsxs(R.div, {
                        initial: {
                          scale: 0,
                          rotate: -180
                        },
                        animate: p ? {
                          scale: 1,
                          rotate: 0
                        } : {},
                        transition: {
                          duration: .6,
                          delay: y * .2 + .3
                        },
                        className: "relative",
                        children: [h.jsx(R.div, {
                          animate: {
                            scale: [1, 1.3, 1],
                            opacity: [.5, 0, .5]
                          },
                          transition: {
                            duration: 2,
                            repeat: 1 / 0,
                            ease: "easeInOut"
                          },
                          className: `absolute inset-0 ${x.bg} rounded-full blur-xl`
                        }), h.jsx("div", {
                          className: `relative w-20 h-20 ${x.bg} rounded-full flex items-center justify-center text-[#181A20] shadow-lg ${x.glow}`,
                          children: d.icon
                        }), d.status === "completed" && h.jsx(R.div, {
                          initial: {
                            scale: 0
                          },
                          animate: p ? {
                            scale: 1
                          } : {},
                          className: "absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50",
                          children: h.jsx("svg", {
                            className: "w-4 h-4 text-white",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: h.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 3,
                              d: "M5 13l4 4L19 7"
                            })
                          })
                        })]
                      })
                    }), h.jsx("div", {
                      className: `${b?"order-1 pr-12":"text-left pl-12"}`,
                      children: !b && h.jsx(ku, {
                        phase: d,
                        statusColors: x,
                        align: "left"
                      })
                    })]
                  }), h.jsxs("div", {
                    className: "md:hidden relative pl-20 mb-16",
                    children: [h.jsxs(R.div, {
                      initial: {
                        scale: 0,
                        rotate: -180
                      },
                      animate: p ? {
                        scale: 1,
                        rotate: 0
                      } : {},
                      transition: {
                        duration: .6
                      },
                      className: "absolute left-0 top-0",
                      children: [h.jsx("div", {
                        className: `relative w-16 h-16 ${x.bg} rounded-full flex items-center justify-center text-[#181A20] shadow-lg ${x.glow}`,
                        children: h.jsx("div", {
                          className: "scale-75",
                          children: d.icon
                        })
                      }), d.status === "completed" && h.jsx("div", {
                        className: "absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50",
                        children: h.jsx("svg", {
                          className: "w-3 h-3 text-white",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: h.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 3,
                            d: "M5 13l4 4L19 7"
                          })
                        })
                      })]
                    }), h.jsx(ku, {
                      phase: d,
                      statusColors: x,
                      align: "left"
                    })]
                  })]
                }, y)
              })
            })]
          }), h.jsx(R.div, {
            variants: m,
            className: "flex flex-wrap justify-center gap-6 pt-8",
            children: [{
              status: "completed",
              label: "Completed"
            }, {
              status: "in-progress",
              label: "In Progress"
            }, {
              status: "upcoming",
              label: "Upcoming"
            }, {
              status: "future",
              label: "Future"
            }].map((d, y) => {
              const g = r(d.status);
              return h.jsxs("div", {
                className: "flex items-center gap-2",
                children: [h.jsx("div", {
                  className: `w-3 h-3 ${g.bg} rounded-full shadow-lg ${g.glow}`
                }), h.jsx("span", {
                  className: "text-sm text-gray-400",
                  children: d.label
                })]
              }, y)
            })
          })]
        })
      }), h.jsx("div", {
        className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F0B90B]/30 to-transparent"
      })]
    })
  },
  ku = ({
    phase: i,
    statusColors: l,
    align: o
  }) => h.jsxs(R.div, {
    whileHover: {
      scale: 1.02,
      y: -5
    },
    className: `relative p-6 bg-gradient-to-br from-[#1a1d26] to-[#181A20] border border-[#F0B90B]/20 rounded-2xl group cursor-pointer ${o==="right"?"text-right":"text-left"}`,
    children: [h.jsx("div", {
      className: "absolute inset-0 bg-gradient-to-br from-[#F0B90B]/0 to-[#F0B90B]/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
    }), h.jsxs("div", {
      className: "relative space-y-4",
      children: [h.jsxs("div", {
        className: `inline-flex items-center gap-2 px-3 py-1 bg-[#F0B90B]/10 border border-[#F0B90B]/30 rounded-full ${o==="right"?"ml-auto":""}`,
        children: [h.jsx("span", {
          className: "text-[#F0B90B] text-xs font-bold uppercase",
          children: i.phase
        }), h.jsx("div", {
          className: `w-2 h-2 ${l.bg} rounded-full`
        })]
      }), h.jsx("div", {
        className: "text-sm text-gray-500 font-semibold",
        children: i.quarter
      }), h.jsx("h3", {
        className: "text-2xl md:text-3xl font-bold text-white",
        style: {
          fontFamily: "Orbitron, sans-serif"
        },
        children: i.title
      }), h.jsx("ul", {
        className: `space-y-2 ${o==="right"?"text-right":"text-left"}`,
        children: i.items.map((r, c) => h.jsxs(R.li, {
          initial: {
            opacity: 0,
            x: o === "right" ? 20 : -20
          },
          whileInView: {
            opacity: 1,
            x: 0
          },
          transition: {
            duration: .4,
            delay: c * .1
          },
          className: "flex items-start gap-2 text-gray-400",
          style: {
            flexDirection: o === "right" ? "row-reverse" : "row"
          },
          children: [h.jsx("div", {
            className: `flex-shrink-0 w-1.5 h-1.5 ${l.bg} rounded-full mt-2`
          }), h.jsx("span", {
            className: "text-sm leading-relaxed",
            children: r
          })]
        }, c))
      })]
    })]
  }),
  S4 = () => {
    const [i, l] = F.useState(!1), o = "0x1f2329d6f765b2cb4d054c6677e9d065f38b4444", r = {
      Product: [{
        name: "About 金钱自由",
        href: "#about"
      }, {
        name: "Tokenomics",
        href: "#tokenomics"
      }, {
        name: "Roadmap",
        href: "#roadmap"
      }, {
        name: "Whitepaper",
        href: "#"
      }],
      Community: [{
        name: "Twitter",
        href: " https://x.com/financialfreecz"
      }, {
        name: "Telegram",
        href: "https://t.me/financialfreecz"
      }],
      Resources: [{
        name: "Documentation",
        href: "#"
      }, {
        name: "Brand Assets",
        href: "#"
      }, {
        name: "Support",
        href: "#"
      }, {
        name: "FAQ",
        href: "#"
      }],
      Legal: [{
        name: "Terms of Service",
        href: "#"
      }, {
        name: "Privacy Policy",
        href: "#"
      }, {
        name: "Disclaimer",
        href: "#"
      }, {
        name: "Cookie Policy",
        href: "#"
      }]
    }, c = [{
      name: "X",
      href: " https://x.com/financialfreecz",
      icon: h.jsx("svg", {
        className: "w-5 h-5",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        children: h.jsx("path", {
          d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        })
      })
    }, {
      name: "Telegram",
      href: "https://t.me/financialfreecz",
      icon: h.jsx("svg", {
        className: "w-5 h-5",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        children: h.jsx("path", {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"
        })
      })
    }], m = () => {
      navigator.clipboard.writeText(o), l(!0), setTimeout(() => l(!1), 2e3)
    };
    return h.jsxs("footer", {
      className: "relative bg-[#181A20] overflow-hidden",
      children: [h.jsx("div", {
        className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F0B90B] to-transparent"
      }), h.jsx("div", {
        className: "absolute inset-0 opacity-5",
        children: h.jsx("div", {
          className: "absolute inset-0",
          style: {
            backgroundImage: "radial-gradient(circle, #F0B90B 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }
        })
      }), h.jsx("div", {
        className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F0B90B] opacity-5 blur-[120px]"
      }), h.jsxs("div", {
        className: "relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8",
        children: [h.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12",
          children: [h.jsxs("div", {
            className: "lg:col-span-2 space-y-6",
            children: [h.jsxs(R.div, {
              initial: {
                scale: 0,
                rotate: -180
              },
              whileInView: {
                scale: 1,
                rotate: 0
              },
              viewport: {
                once: !0
              },
              transition: {
                duration: .6
              },
              className: "flex items-center gap-3",
              children: [h.jsxs("div", {
                className: "relative",
                children: [h.jsx(R.div, {
                  animate: {
                    scale: [1, 1.3, 1],
                    opacity: [.3, .6, .3]
                  },
                  transition: {
                    duration: 2,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                  },
                  className: "absolute inset-0 bg-[#F0B90B] rounded-full blur-xl"
                }), h.jsx("div", {
                  className: "relative w-16 h-16 bg-gradient-to-br from-[#F0B90B] to-[#FFD43B] rounded-full flex items-center justify-center shadow-lg shadow-[#F0B90B]/50",
                  children: h.jsx("span", {
                    className: "text-3xl",
                    children: h.jsx("img", {
                      src: "./palluu.png",
                      alt: "logo",
                      className: "w-full"
                    })
                  })
                })]
              }), h.jsxs("div", {
                children: [h.jsx("h3", {
                  className: "text-2xl font-bold bg-gradient-to-r from-[#F0B90B] to-[#FFD43B] bg-clip-text text-transparent",
                  style: {
                    fontFamily: "Orbitron, sans-serif"
                  },
                  children: "金钱自由"
                }), h.jsx("p", {
                  className: "text-xs text-gray-500",
                  children: "金钱自由 Token"
                })]
              })]
            }), h.jsx("p", {
              className: "text-sm text-gray-400 leading-relaxed",
              children: "The official 金钱自由 token on BNB Chain. Join the community and be part of the revolution."
            }), h.jsx("div", {
              className: "flex items-center gap-3",
              children: c.map((d, y) => h.jsxs(R.a, {
                href: d.href,
                target: "_blank",
                rel: "noopener noreferrer",
                whileHover: {
                  scale: 1.1,
                  y: -2
                },
                whileTap: {
                  scale: .95
                },
                className: "w-10 h-10 bg-[#1a1d26] border border-[#F0B90B]/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#F0B90B] hover:border-[#F0B90B]/50 hover:bg-[#F0B90B]/5 transition-all group",
                children: [h.jsx(R.div, {
                  className: "absolute inset-0 bg-[#F0B90B] opacity-0 group-hover:opacity-10 rounded-lg blur-lg",
                  whileHover: {
                    scale: 1.5
                  }
                }), d.icon]
              }, y))
            })]
          }), Object.entries(r).map(([d, y], g) => h.jsxs(R.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            viewport: {
              once: !0
            },
            transition: {
              duration: .5,
              delay: g * .1
            },
            className: "space-y-4",
            children: [h.jsx("h4", {
              className: "text-sm font-bold text-white uppercase tracking-wider",
              children: d
            }), h.jsx("ul", {
              className: "space-y-2",
              children: y.map((p, x) => h.jsx("li", {
                children: h.jsx(R.a, {
                  href: p.href,
                  whileHover: {
                    x: 5
                  },
                  className: "group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#F0B90B] transition-colors relative",
                  children: h.jsxs("span", {
                    className: "relative",
                    children: [p.name, h.jsx(R.span, {
                      className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F0B90B] to-[#FFD43B] group-hover:w-full transition-all duration-300"
                    })]
                  })
                })
              }, x))
            })]
          }, d))]
        }), h.jsx(R.div, {
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0
          },
          className: "mb-8",
          children: h.jsxs("div", {
            className: "relative p-6 bg-gradient-to-r from-[#1a1d26] via-[#181A20] to-[#1a1d26] border border-[#F0B90B]/20 rounded-2xl overflow-hidden group",
            children: [h.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-r from-[#F0B90B]/0 via-[#F0B90B]/5 to-[#F0B90B]/0 opacity-0 group-hover:opacity-100 transition-opacity"
            }), h.jsxs("div", {
              className: "relative flex flex-col md:flex-row items-center justify-between gap-4",
              children: [h.jsxs("div", {
                className: "flex-1 space-y-2 text-center md:text-left",
                children: [h.jsx("div", {
                  className: "text-xs text-gray-500 uppercase tracking-wider",
                  children: "Contract Address"
                }), h.jsx("div", {
                  className: "font-mono text-white text-sm md:text-base break-all",
                  children: o
                })]
              }), h.jsx(R.button, {
                whileHover: {
                  scale: 1.05
                },
                whileTap: {
                  scale: .95
                },
                onClick: m,
                className: "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F0B90B] to-[#FFD43B] text-[#181A20] font-semibold rounded-full hover:shadow-lg hover:shadow-[#F0B90B]/50 transition-all",
                children: i ? h.jsxs(h.Fragment, {
                  children: [h.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: h.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M5 13l4 4L19 7"
                    })
                  }), "Copied!"]
                }) : h.jsxs(h.Fragment, {
                  children: [h.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: h.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    })
                  }), "Copy"]
                })
              })]
            })]
          })
        }), h.jsx("div", {
          className: "h-px bg-gradient-to-r from-transparent via-[#F0B90B]/30 to-transparent mb-8"
        }), h.jsxs("div", {
          className: "flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500",
          children: [h.jsxs(R.div, {
            initial: {
              opacity: 0
            },
            whileInView: {
              opacity: 1
            },
            viewport: {
              once: !0
            },
            className: "flex flex-col md:flex-row items-center gap-2 text-center md:text-left",
            children: [h.jsx("p", {
              children: "© 2026 金钱自由. All rights reserved."
            }), h.jsx("span", {
              className: "hidden md:inline text-[#F0B90B]",
              children: "•"
            }), h.jsxs("p", {
              className: "flex items-center gap-2",
              children: ["Powered by", h.jsxs(R.span, {
                whileHover: {
                  scale: 1.05
                },
                className: "inline-flex items-center gap-1 font-semibold text-[#F0B90B]",
                children: [h.jsx("svg", {
                  className: "w-4 h-4",
                  viewBox: "0 0 126.61 126.61",
                  children: h.jsx("path", {
                    fill: "currentColor",
                    d: "M38.73 53.2l24.59-24.58 24.6 24.6 14.3-14.31L63.32 0 24.43 38.89l14.3 14.31zM0 63.31l14.3-14.3 14.31 14.3-14.31 14.3L0 63.31zm38.73 10.11l24.59 24.59 24.6-24.6 14.31 14.29-38.9 38.91-38.91-38.88 14.3-14.31zM97.88 63.32L112.18 49l14.43 14.35-14.35 14.33-14.38-14.36z"
                  })
                }), "Binance"]
              }), h.jsx("span", {
                className: "text-gray-600",
                children: "|"
              }), h.jsx("span", {
                className: "text-gray-400",
                children: "BNB Chain"
              })]
            })]
          }), h.jsxs(R.div, {
            initial: {
              opacity: 0
            },
            whileInView: {
              opacity: 1
            },
            viewport: {
              once: !0
            },
            className: "flex items-center gap-4",
            children: [h.jsx(R.a, {
              href: "#",
              whileHover: {
                scale: 1.05
              },
              className: "hover:text-[#F0B90B] transition-colors",
              children: "Terms"
            }), h.jsx("span", {
              className: "text-[#F0B90B]",
              children: "•"
            }), h.jsx(R.a, {
              href: "#",
              whileHover: {
                scale: 1.05
              },
              className: "hover:text-[#F0B90B] transition-colors",
              children: "Privacy"
            }), h.jsx("span", {
              className: "text-[#F0B90B]",
              children: "•"
            }), h.jsx(R.a, {
              href: "#",
              whileHover: {
                scale: 1.05
              },
              className: "hover:text-[#F0B90B] transition-colors",
              children: "Disclaimer"
            })]
          })]
        }), h.jsx(R.div, {
          initial: {
            opacity: 0
          },
          whileInView: {
            opacity: 1
          },
          viewport: {
            once: !0
          },
          className: "mt-8 p-4 bg-[#1a1d26]/50 border border-[#F0B90B]/10 rounded-xl",
          children: [h.jsxs("p", {
            className: "text-xs text-gray-500 text-center leading-relaxed",
            children: [h.jsx("span", {
              className: "text-[#F0B90B] font-semibold",
              children: "Disclaimer:"
            }), " ", "Digital assets, including meme coins, are highly speculative and carry significant risk. Prices can fluctuate wildly and may drop to zero. This is a public, decentralized, and permissionless platform."]
          }),h.jsxs("br", {
            className: "text-xs text-gray-500 text-center leading-relaxed",
            
          }),h.jsxs("p", {
            className: "text-xs text-gray-500 text-center leading-relaxed",
            children: ["You are solely responsible for assessing your financial situation, risk appetite, and the credibility of any project. Always do your own research (DYOR). Learn more at Binance Academy and review our Terms of Use."]
          })]
        }), h.jsx(R.button, {
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: !0
          },
          whileHover: {
            scale: 1.1,
            y: -5
          },
          whileTap: {
            scale: .95
          },
          onClick: () => window.scrollTo({
            top: 0,
            behavior: "smooth"
          }),
          className: "fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#F0B90B] to-[#FFD43B] rounded-full flex items-center justify-center text-[#181A20] shadow-lg shadow-[#F0B90B]/30 hover:shadow-[#F0B90B]/50 transition-all z-50",
          children: h.jsx("svg", {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: h.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 10l7-7m0 0l7 7m-7-7v18"
            })
          })
        })]
      })]
    })
  },
  T4 = () => {
    const i = F.useRef(null),
      l = F.useRef(null),
      o = fi(i, {
        once: !0,
        amount: .3
      }),
      [r, c] = F.useState(!0),
      [m, d] = F.useState(!0),
      [y, g] = F.useState(!1);
    F.useEffect(() => {
      l.current && (r ? l.current.play().catch(_ => console.log("Video play error:", _)) : l.current.pause())
    }, [r]);
    const p = () => {
        c(!r)
      },
      x = () => {
        l.current && (l.current.muted = !m, d(!m))
      },
      b = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: .2,
            delayChildren: .3
          }
        }
      },
      B = {
        hidden: {
          y: 60,
          opacity: 0
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: .8,
            ease: [.16, 1, .3, 1]
          }
        }
      },
      C = [{
        icon: "🎯",
        text: "Community First"
      }, {
        icon: "🚀",
        text: "Innovation Driven"
      }, {
        icon: "💎",
        text: "Premium Quality"
      }, {
        icon: "🔥",
        text: "Built to Last"
      }];
    return h.jsxs("section", {
      ref: i,
      className: "relative min-h-screen bg-[#181A20] overflow-hidden flex items-center justify-center py-4",
      children: [h.jsxs("div", {
        className: "absolute inset-0",
        children: [h.jsxs("div", {
          className: "absolute inset-0 bg-gradient-to-br from-[#181A20] via-[#1a1d26] to-[#181A20]",
          children: [
            [...Array(30)].map((_, H) => h.jsx(R.div, {
              className: "absolute w-2 h-2 bg-[#F0B90B] rounded-full",
              animate: {
                y: [0, -100, 0],
                x: [0, Math.sin(H) * 50, 0],
                opacity: [.2, .6, .2],
                scale: [1, 1.5, 1]
              },
              transition: {
                duration: 5 + H * .3,
                repeat: 1 / 0,
                ease: "easeInOut"
              },
              style: {
                left: `${Math.random()*100}%`,
                top: `${Math.random()*100}%`,
                filter: "blur(1px)"
              }
            }, H)), h.jsx(R.div, {
              className: "absolute inset-0 flex items-center justify-center",
              animate: {
                rotate: 360
              },
              transition: {
                duration: 40,
                repeat: 1 / 0,
                ease: "linear"
              },
              children: h.jsx("div", {
                className: "w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full border border-[#F0B90B]/10"
              })
            }), h.jsx(R.div, {
              className: "absolute inset-0 flex items-center justify-center",
              animate: {
                rotate: -360
              },
              transition: {
                duration: 30,
                repeat: 1 / 0,
                ease: "linear"
              },
              children: h.jsx("div", {
                className: "w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] rounded-full border-2 border-[#F0B90B]/5"
              })
            })
          ]
        }), h.jsx("video", {
          ref: l,
          className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${y?"opacity-50":"opacity-0"}`,
          autoPlay: !0,
          loop: !0,
          muted: m,
          playsInline: !0,
          onLoadedData: () => g(!0),
          poster: "/api/placeholder/1920/1080",
          children: h.jsx("source", {
            src: "./vid3.mp4",
            type: "video/mp4"
          })
        }), h.jsx("div", {
          className: "absolute inset-0 bg-gradient-to-b from-[#181A20]/60 via-[#181A20]/80 to-[#181A20]"
        }), h.jsx(R.div, {
          animate: {
            opacity: [.3, .5, .3]
          },
          transition: {
            duration: 4,
            repeat: 1 / 0,
            ease: "easeInOut"
          },
          className: "absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#181A20]"
        })]
      }), h.jsx("div", {
        className: "relative z-10 max-w-7xl mx-auto px-6 text-center",
        children: h.jsxs(R.div, {
          variants: b,
          initial: "hidden",
          animate: o ? "visible" : "hidden",
          className: "space-y-12",
          children: [h.jsxs(R.div, {
            variants: B,
            className: "space-y-6",
            children: [h.jsx(R.div, {
              initial: {
                scale: 0,
                rotate: -180
              },
              animate: o ? {
                scale: 1,
                rotate: 0
              } : {},
              transition: {
                duration: .8,
                ease: [.16, 1, .3, 1]
              },
              className: "inline-block",
              children: h.jsxs("div", {
                className: "relative",
                children: [h.jsx(R.div, {
                  animate: {
                    scale: [1, 1.5, 1],
                    opacity: [.3, .6, .3]
                  },
                  transition: {
                    duration: 3,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                  },
                  className: "absolute inset-0 bg-[#F0B90B] rounded-full blur-3xl"
                }), h.jsx("div", {
                  className: "relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#F0B90B] to-[#FFD43B] rounded-full flex items-center justify-center shadow-2xl shadow-[#F0B90B]/50",
                  children: h.jsx("span", {
                    className: "text-5xl md:text-6xl",
                    children: h.jsx("img", {
                      src: "selfie1.png",
                      alt: "",
                      className: "rounded-full"
                    })
                  })
                })]
              })
            }), h.jsxs("h2", {
              className: "text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight px-4",
              children: ["The Spirit of", " ", h.jsx("span", {
                className: "bg-gradient-to-r from-[#F0B90B] via-[#FFD43B] to-[#F0B90B] bg-clip-text text-transparent animate-gradient",
                children: "Binance"
              }), h.jsx("br", {}), h.jsx("span", {
                className: "text-3xl md:text-5xl lg:text-6xl",
                children: "in 金钱自由"
              })]
            })]
          }), h.jsxs(R.p, {
            variants: B,
            className: "text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4",
            children: ["Experience the energy, innovation, and community spirit that makes", " ", h.jsx("span", {
              className: "text-[#F0B90B] font-semibold",
              children: "金钱自由"
            }), " more than just a token"]
          }), h.jsx(R.div, {
            variants: B,
            className: "flex flex-wrap items-center justify-center gap-4 px-4",
            children: C.map((_, H) => h.jsxs(R.div, {
              initial: {
                opacity: 0,
                scale: 0
              },
              animate: o ? {
                opacity: 1,
                scale: 1
              } : {},
              transition: {
                duration: .5,
                delay: .8 + H * .1
              },
              whileHover: {
                scale: 1.1,
                y: -5
              },
              className: "group relative px-6 py-3 bg-gradient-to-r from-[#1a1d26] to-[#181A20] border border-[#F0B90B]/30 rounded-full backdrop-blur-sm cursor-pointer overflow-hidden",
              children: [h.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-[#F0B90B]/0 via-[#F0B90B]/10 to-[#F0B90B]/0 opacity-0 group-hover:opacity-100 transition-opacity"
              }), h.jsxs("div", {
                className: "relative flex items-center gap-2",
                children: [h.jsx("span", {
                  className: "text-2xl",
                  children: _.icon
                }), h.jsx("span", {
                  className: "text-sm md:text-base font-semibold text-white",
                  children: _.text
                })]
              })]
            }, H))
          }), h.jsxs(R.div, {
            variants: B,
            className: "flex items-center justify-center gap-4",
            children: [h.jsxs(R.button, {
              whileHover: {
                scale: 1.1
              },
              whileTap: {
                scale: .95
              },
              onClick: p,
              className: "group relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#F0B90B] to-[#FFD43B] rounded-full flex items-center justify-center shadow-lg shadow-[#F0B90B]/50 hover:shadow-[#F0B90B]/70 transition-all",
              children: [h.jsx(R.div, {
                animate: {
                  scale: [1, 1.3, 1],
                  opacity: [.5, 0, .5]
                },
                transition: {
                  duration: 2,
                  repeat: 1 / 0,
                  ease: "easeInOut"
                },
                className: "absolute inset-0 bg-[#F0B90B] rounded-full blur-lg"
              }), h.jsx("div", {
                className: "relative text-[#181A20]",
                children: r ? h.jsx("svg", {
                  className: "w-8 h-8 md:w-10 md:h-10",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  children: h.jsx("path", {
                    d: "M6 4h4v16H6V4zm8 0h4v16h-4V4z"
                  })
                }) : h.jsx("svg", {
                  className: "w-8 h-8 md:w-10 md:h-10 ml-1",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  children: h.jsx("path", {
                    d: "M8 5v14l11-7z"
                  })
                })
              }), h.jsx(R.div, {
                animate: {
                  rotate: 360
                },
                transition: {
                  duration: 3,
                  repeat: 1 / 0,
                  ease: "linear"
                },
                className: "absolute inset-0 rounded-full border-2 border-[#181A20]/20",
                style: {
                  borderTopColor: "transparent",
                  borderRightColor: "transparent"
                }
              })]
            }), h.jsx(R.button, {
              whileHover: {
                scale: 1.1
              },
              whileTap: {
                scale: .95
              },
              onClick: x,
              className: "relative w-12 h-12 md:w-14 md:h-14 bg-[#1a1d26] border border-[#F0B90B]/30 rounded-full flex items-center justify-center text-[#F0B90B] hover:bg-[#F0B90B]/10 hover:border-[#F0B90B]/50 transition-all",
              children: m ? h.jsxs("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: [h.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                }), h.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                })]
              }) : h.jsx("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: h.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                })
              })
            }), h.jsxs(R.div, {
              initial: {
                opacity: 0,
                x: -20
              },
              animate: o ? {
                opacity: 1,
                x: 0
              } : {},
              transition: {
                duration: .6,
                delay: 1
              },
              className: "hidden md:flex items-center gap-2 px-4 py-2 bg-[#1a1d26]/80 border border-[#F0B90B]/20 rounded-full backdrop-blur-sm",
              children: [h.jsx("div", {
                className: "w-2 h-2 bg-[#F0B90B] rounded-full animate-pulse"
              }), h.jsx("span", {
                className: "text-sm text-gray-400",
                children: r ? "Playing" : "Paused"
              })]
            })]
          })]
        })
      }), h.jsx("div", {
        className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#181A20] to-transparent pointer-events-none"
      })]
    })
  },
  B4 = () => {
    const [i, l] = F.useState(!1), [o, r] = F.useState(!1), [c, m] = F.useState("hero"), d = [{
      name: "Home",
      href: "#hero"
    }, {
      name: "About",
      href: "#about"
    }, {
      name: "Tokenomics",
      href: "#tokenomics"
    }, {
      name: "Community",
      href: "#community"
    }, {
      name: "Roadmap",
      href: "#roadmap"
    }];
    F.useEffect(() => {
      const g = () => {
        l(window.scrollY > 50);
        const p = d.map(b => b.href.substring(1)),
          x = window.scrollY + 100;
        for (const b of p) {
          const B = document.getElementById(b);
          if (B) {
            const C = B.offsetTop,
              _ = C + B.offsetHeight;
            if (x >= C && x < _) {
              m(b);
              break
            }
          }
        }
      };
      return window.addEventListener("scroll", g), () => window.removeEventListener("scroll", g)
    }, []), F.useEffect(() => (o ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset", () => {
      document.body.style.overflow = "unset"
    }), [o]);
    const y = g => {
      r(!1);
      const p = document.querySelector(g);
      p && p.scrollIntoView({
        behavior: "smooth"
      })
    };
    return h.jsxs(h.Fragment, {
      children: [h.jsxs(R.nav, {
        initial: {
          y: -100
        },
        animate: {
          y: 0
        },
        transition: {
          duration: .6,
          ease: [.16, 1, .3, 1]
        },
        className: `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${i?"bg-[#181A20]/95 backdrop-blur-xl border-b border-[#F0B90B]/20 shadow-lg shadow-[#F0B90B]/5":"bg-transparent"}`,
        children: [h.jsx("div", {
          className: "max-w-7xl mx-auto px-6 py-4",
          children: h.jsxs("div", {
            className: "flex items-center justify-between",
            children: [h.jsxs(R.a, {
              href: "#hero",
              onClick: g => {
                g.preventDefault(), y("#hero")
              },
              whileHover: {
                scale: 1.05
              },
              whileTap: {
                scale: .95
              },
              className: "flex items-center gap-3 group",
              children: [h.jsxs("div", {
                className: "relative",
                children: [h.jsx(R.div, {
                  animate: {
                    scale: [1, 1.3, 1],
                    opacity: [.3, .6, .3]
                  },
                  transition: {
                    duration: 2,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                  },
                  className: "absolute inset-0 bg-[#F0B90B] rounded-full blur-lg"
                }), h.jsx("div", {
                  className: "relative w-12 h-12 bg-gradient-to-br from-[#F0B90B] to-[#FFD43B] rounded-full flex items-center justify-center shadow-lg shadow-[#F0B90B]/30",
                  children: h.jsx("span", {
                    className: "text-2xl",
                    children: h.jsx("img", {
                      src: "selfie1.png",
                      alt: "logo",
                      className: "rounded-full"
                    })
                  })
                })]
              }), h.jsxs("div", {
                className: "hidden sm:block",
                children: [h.jsx("h1", {
                  className: "text-2xl font-bold bg-gradient-to-r from-[#F0B90B] to-[#FFD43B] bg-clip-text text-transparent",
                  style: {
                    fontFamily: "Orbitron, sans-serif"
                  },
                  children: "金钱自由"
                }), h.jsx("p", {
                  className: "text-xs text-gray-500 -mt-1",
                  children: "金钱自由"
                })]
              })]
            }), h.jsx("div", {
              className: "hidden lg:flex items-center gap-2",
              children: d.map((g, p) => {
                const x = c === g.href.substring(1);
                return h.jsxs(R.a, {
                  href: g.href,
                  onClick: b => {
                    b.preventDefault(), y(g.href)
                  },
                  initial: {
                    opacity: 0,
                    y: -20
                  },
                  animate: {
                    opacity: 1,
                    y: 0
                  },
                  transition: {
                    duration: .5,
                    delay: p * .1
                  },
                  whileHover: {
                    scale: 1.05
                  },
                  whileTap: {
                    scale: .95
                  },
                  className: `relative px-4 py-2 rounded-full font-medium transition-all ${x?"text-[#F0B90B]":"text-gray-300 hover:text-white"}`,
                  children: [g.name, x && h.jsx(R.div, {
                    layoutId: "activeNav",
                    className: "absolute inset-0 bg-[#F0B90B]/10 border border-[#F0B90B]/30 rounded-full",
                    transition: {
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }
                  }), h.jsx(R.div, {
                    className: "absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-[#F0B90B] to-[#FFD43B] opacity-0 group-hover:opacity-100 transition-opacity",
                    whileHover: {
                      scaleX: 1
                    },
                    initial: {
                      scaleX: 0
                    }
                  })]
                }, p)
              })
            }), h.jsxs(R.a, {
              href: "https://pancakeswap.finance/swap?outputCurrency=0x1f2329d6f765b2cb4d054c6677e9d065f38b4444&chain=bsc",
              target:"_blank",
              initial: {
                opacity: 0,
                scale: .8
              },
              animate: {
                opacity: 1,
                scale: 1
              },
              transition: {
                duration: .5,
                delay: .6
              },
              whileHover: {
                scale: 1.05,
                boxShadow: "0 0 30px rgba(240, 185, 11, 0.5)"
              },
              whileTap: {
                scale: .95
              },
              className: "hidden lg:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F0B90B] to-[#FFD43B] text-[#181A20] font-bold rounded-full shadow-lg shadow-[#F0B90B]/30 hover:shadow-[#F0B90B]/50 transition-all",
              children: ["Buy $金钱自由", h.jsx("svg", {
                className: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: h.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M13 7l5 5m0 0l-5 5m5-5H6"
                })
              })]
            }), h.jsx(R.button, {
              whileTap: {
                scale: .9
              },
              onClick: () => r(!o),
              className: "lg:hidden w-12 h-12 bg-[#1a1d26] border border-[#F0B90B]/30 rounded-xl flex items-center justify-center text-[#F0B90B] hover:bg-[#F0B90B]/10 transition-all",
              children: h.jsx(Cm, {
                mode: "wait",
                children: o ? h.jsx(R.svg, {
                  initial: {
                    rotate: -90,
                    opacity: 0
                  },
                  animate: {
                    rotate: 0,
                    opacity: 1
                  },
                  exit: {
                    rotate: 90,
                    opacity: 0
                  },
                  transition: {
                    duration: .2
                  },
                  className: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: h.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                  })
                }, "close") : h.jsx(R.svg, {
                  initial: {
                    rotate: 90,
                    opacity: 0
                  },
                  animate: {
                    rotate: 0,
                    opacity: 1
                  },
                  exit: {
                    rotate: -90,
                    opacity: 0
                  },
                  transition: {
                    duration: .2
                  },
                  className: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: h.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M4 6h16M4 12h16M4 18h16"
                  })
                }, "menu")
              })
            })]
          })
        }), i && h.jsx(R.div, {
          initial: {
            scaleX: 0
          },
          animate: {
            scaleX: 1
          },
          className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F0B90B]/50 to-transparent origin-center"
        })]
      }), h.jsx(Cm, {
        children: o && h.jsxs(h.Fragment, {
          children: [h.jsx(R.div, {
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            exit: {
              opacity: 0
            },
            onClick: () => r(!1),
            className: "fixed inset-0 z-30 bg-[#181A20]/95 backdrop-blur-xl lg:hidden"
          }), h.jsx(R.div, {
            initial: {
              x: "100%"
            },
            animate: {
              x: 0
            },
            exit: {
              x: "100%"
            },
            transition: {
              type: "spring",
              damping: 30,
              stiffness: 300
            },
            className: "fixed top-0 right-0 bottom-0 z-40 w-full max-w-sm bg-gradient-to-br from-[#1a1d26] to-[#181A20] border-l border-[#F0B90B]/20 shadow-2xl lg:hidden overflow-y-auto",
            children: h.jsxs("div", {
              className: "p-6 space-y-8",
              children: [h.jsxs("div", {
                className: "flex items-center justify-between pb-6 border-b border-[#F0B90B]/20",
                children: [h.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [h.jsx("div", {
                    className: "relative w-12 h-12 bg-gradient-to-br from-[#F0B90B] to-[#FFD43B] rounded-full flex items-center justify-center shadow-lg shadow-[#F0B90B]/30",
                    children: h.jsx("span", {
                      className: "text-2xl",
                      children: "🎭"
                    })
                  }), h.jsxs("div", {
                    children: [h.jsx("h2", {
                      className: "text-xl font-bold bg-gradient-to-r from-[#F0B90B] to-[#FFD43B] bg-clip-text text-transparent",
                      style: {
                        fontFamily: "Orbitron, sans-serif"
                      },
                      children: "金钱自由"
                    }), h.jsx("p", {
                      className: "text-xs text-gray-500",
                      children: "金钱自由 Token"
                    })]
                  })]
                }), h.jsx(R.button, {
                  whileTap: {
                    scale: .9
                  },
                  onClick: () => r(!1),
                  className: "w-10 h-10 bg-[#1a1d26] border border-[#F0B90B]/30 rounded-lg flex items-center justify-center text-[#F0B90B]",
                  children: h.jsx("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: h.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  })
                })]
              }), h.jsx("nav", {
                className: "space-y-2",
                children: d.map((g, p) => {
                  const x = c === g.href.substring(1);
                  return h.jsxs(R.a, {
                    href: g.href,
                    onClick: b => {
                      b.preventDefault(), y(g.href)
                    },
                    initial: {
                      opacity: 0,
                      x: 50
                    },
                    animate: {
                      opacity: 1,
                      x: 0
                    },
                    transition: {
                      duration: .3,
                      delay: p * .05
                    },
                    whileTap: {
                      scale: .98
                    },
                    className: `group relative flex items-center justify-between p-4 rounded-xl transition-all ${x?"bg-[#F0B90B]/10 border border-[#F0B90B]/30":"bg-[#1a1d26]/50 border border-transparent hover:border-[#F0B90B]/20"}`,
                    children: [h.jsxs("div", {
                      className: "flex items-center gap-4",
                      children: [h.jsx("div", {
                        className: `w-2 h-2 rounded-full transition-all ${x?"bg-[#F0B90B] scale-100":"bg-gray-600 scale-75"}`
                      }), h.jsx("span", {
                        className: `font-semibold transition-colors ${x?"text-[#F0B90B]":"text-gray-300 group-hover:text-white"}`,
                        children: g.name
                      })]
                    }), h.jsx("svg", {
                      className: `w-5 h-5 transition-all ${x?"text-[#F0B90B] translate-x-0":"text-gray-600 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`,
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: h.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M9 5l7 7-7 7"
                      })
                    }), x && h.jsx(R.div, {
                      layoutId: "activeMobileNav",
                      className: "absolute inset-0 bg-gradient-to-r from-[#F0B90B]/5 to-[#FFD43B]/5 rounded-xl",
                      transition: {
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }
                    })]
                  }, p)
                })
              }), h.jsxs("div", {
                className: "space-y-4 pt-6 border-t border-[#F0B90B]/20",
                children: [h.jsxs(R.a, {
                  href: "#tokenomics",
                  onClick: g => {
                    g.preventDefault(), y("https://dexscreener.com/bsc/0x1f2329d6f765b2cb4d054c6677e9d065f38b4444")
                  },
                  initial: {
                    opacity: 0,
                    y: 20
                  },
                  animate: {
                    opacity: 1,
                    y: 0
                  },
                  transition: {
                    duration: .5,
                    delay: .4
                  },
                  whileTap: {
                    scale: .98
                  },
                  className: "flex items-center justify-center gap-2 w-full p-4 bg-gradient-to-r from-[#F0B90B] to-[#FFD43B] text-[#181A20] font-bold rounded-xl shadow-lg shadow-[#F0B90B]/30",
                  children: ["Buy $金钱自由", h.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: h.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M13 7l5 5m0 0l-5 5m5-5H6"
                    })
                  })]
                }), h.jsx("div", {
                  className: "flex items-center justify-center gap-3",
                  children: [{
                    icon: h.jsx("svg", {
                      className: "w-5 h-5",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      children: h.jsx("path", {
                        d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                      })
                    }),
                    href: " https://x.com/financialfreecz"
                  }, {
                    icon: h.jsx("svg", {
                      className: "w-5 h-5",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      children: h.jsx("path", {
                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"
                      })
                    }),
                    href: "#"
                  }].map((g, p) => h.jsx(R.a, {
                    href: g.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    whileTap: {
                      scale: .9
                    },
                    className: "w-12 h-12 bg-[#1a1d26] border border-[#F0B90B]/20 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#F0B90B] hover:border-[#F0B90B]/50 transition-all",
                    children: g.icon
                  }, p))
                })]
              }), h.jsxs("div", {
                className: "p-4 bg-[#1a1d26]/50 border border-[#F0B90B]/10 rounded-xl",
                children: [h.jsx("p", {
                  className: "text-xs text-gray-500 mb-2 uppercase tracking-wider",
                  children: "Contract"
                }), h.jsx("p", {
                  className: "text-xs font-mono text-gray-400 break-all",
                  children: "0x1f2329d6f765b2cb4d054c6677e9d065f38b4444"
                })]
              })]
            })
          })]
        })
      })]
    })
  };

function A4() {
  return h.jsxs(h.Fragment, {
    children: [h.jsx(B4, {
      id: "nav"
    }), h.jsxs("main", {
      children: [h.jsx("section", {
        id: "hero",
        children: h.jsx(y4, {})
      }), h.jsx("section", {
        id: "about",
        children: h.jsx(g4, {})
      }), h.jsx("section", {
        id: "tokenomics",
        children: h.jsx(v4, {})
      }), h.jsx("section", {
        id: "community",
        children: h.jsx(x4, {})
      }), h.jsx("section", {
        id: "roadmap",
        children: h.jsx(b4, {})
      }), h.jsx("section", {
        id: "videos",
        children: h.jsx(T4, {})
      })]
    }), h.jsx(S4, {})]
  })
}
Rv.createRoot(document.getElementById("root")).render(h.jsx(F.StrictMode, {
  children: h.jsx(A4, {})
}));
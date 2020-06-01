/*
     vEngine v1.0.0
     渲染引擎由vDper提供技术支持
  */
!
function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).vEngine = e()
} (this,
function() {
  var t = "undefined" != typeof globalThis ? globalThis: "undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self ? self: {};
  function e(t, e) {
    return t(e = {
      exports: {}
    },
    e.exports),
    e.exports
  }
  function n(t) {
    return t && t.Math == Math && t
  }
  function a(t) {
    try {
      return !! t()
    } catch(t) {
      return ! 0
    }
  }
  function b(t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    }
  }
  function o(t) {
    return S.call(t).slice(8, -1)
  }
  function c(t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t
  }
  function p(t) {
    return A(c(t))
  }
  function s(t, e) {
    if (!O(t)) return t;
    var n, i;
    if (e && "function" == typeof(n = t.toString) && !O(i = n.call(t))) return i;
    if ("function" == typeof(n = t.valueOf) && !O(i = n.call(t))) return i;
    if (!e && "function" == typeof(n = t.toString) && !O(i = n.call(t))) return i;
    throw TypeError("Can't convert object to primitive value")
  }
  function i(t) {
    return j ? T.createElement(t) : {}
  }
  function r(t, e) {
    var n = z[R(t)];
    return n == B || n != C && ("function" == typeof e ? a(e) : !!e)
  }
  function u(t) {
    if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
    return t
  }
  function w(i, o, t) {
    if (u(i), void 0 === o) return i;
    switch (t) {
    case 0:
      return function() {
        return i.call(o)
      };
    case 1:
      return function(t) {
        return i.call(o, t)
      };
    case 2:
      return function(t, e) {
        return i.call(o, t, e)
      };
    case 3:
      return function(t, e, n) {
        return i.call(o, t, e, n)
      }
    }
    return function() {
      return i.apply(o, arguments)
    }
  }
  function g(i) {
    function t(t, e, n) {
      if (this instanceof i) {
        switch (arguments.length) {
        case 0:
          return new i;
        case 1:
          return new i(t);
        case 2:
          return new i(t, e)
        }
        return new i(t, e, n)
      }
      return i.apply(this, arguments)
    }
    return t.prototype = i.prototype,
    t
  }
  function D(t, e) {
    var n, i, o, s, a, r, c, p, u = t.target,
    l = t.global,
    d = t.stat,
    h = t.proto,
    f = l ? y: d ? y[u] : (y[u] || {}).prototype,
    m = l ? W: W[u] || (W[u] = {}),
    v = m.prototype;
    for (o in e) n = !F(l ? o: u + (d ? ".": "#") + o, t.forced) && f && E(f, o),
    a = m[o],
    n && (r = t.noTargetGet ? (p = Z(f, o)) && p.value: f[o]),
    s = n && r ? r: e[o],
    n && typeof a == typeof s || (c = t.bind && n ? w(s, y) : t.wrap && n ? g(s) : h && "function" == typeof s ? w(Function.call, s) : s, (t.sham || s && s.sham || a && a.sham) && Y(c, "sham", !0), m[o] = c, h && (E(W, i = u + "Prototype") || Y(W, i, {}), W[i][o] = s, t.real && v && !v[o] && Y(v, o, s)))
  }
  function l(t) {
    return "function" == typeof t ? t: void 0
  }
  function d(t, e) {
    return arguments.length < 2 ? l(W[t]) || l(y[t]) : W[t] && W[t][e] || y[t] && y[t][e]
  }
  function h(t, e, n) {
    var i = n.charAt(e - 1),
    o = n.charAt(e + 1);
    return X.test(t) && !V.test(o) || V.test(t) && !X.test(i) ? "\\u" + t.charCodeAt(0).toString(16) : t
  }
  var y = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")(),
  f = !a(function() {
    return 7 != Object.defineProperty({},
    1, {
      get: function() {
        return 7
      }
    })[1]
  }),
  m = {}.propertyIsEnumerable,
  v = Object.getOwnPropertyDescriptor,
  x = {
    f: v && !m.call({
      1 : 2
    },
    1) ?
    function(t) {
      var e = v(this, t);
      return !! e && e.enumerable
    }: m
  },
  S = {}.toString,
  k = "".split,
  A = a(function() {
    return ! Object("z").propertyIsEnumerable(0)
  }) ?
  function(t) {
    return "String" == o(t) ? k.call(t, "") : Object(t)
  }: Object,
  O = function(t) {
    return "object" == typeof t ? null !== t: "function" == typeof t
  },
  P = {}.hasOwnProperty,
  E = function(t, e) {
    return P.call(t, e)
  },
  T = y.document,
  j = O(T) && O(T.createElement),
  I = !f && !a(function() {
    return 7 != Object.defineProperty(i("div"), "a", {
      get: function() {
        return 7
      }
    }).a
  }),
  M = Object.getOwnPropertyDescriptor,
  L = {
    f: f ? M: function(t, e) {
      if (t = p(t), e = s(e, !0), I) try {
        return M(t, e)
      } catch(t) {}
      if (E(t, e)) return b(!x.f.call(t, e), t[e])
    }
  },
  H = /#|\.prototype\./,
  R = r.normalize = function(t) {
    return String(t).replace(H, ".").toLowerCase()
  },
  z = r.data = {},
  C = r.NATIVE = "N",
  B = r.POLYFILL = "P",
  F = r,
  W = {},
  N = function(t) {
    if (!O(t)) throw TypeError(String(t) + " is not an object");
    return t
  },
  _ = Object.defineProperty,
  G = {
    f: f ? _: function(t, e, n) {
      if (N(t), e = s(e, !0), N(n), I) try {
        return _(t, e, n)
      } catch(t) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
      return "value" in n && (t[e] = n.value),
      t
    }
  },
  Y = f ?
  function(t, e, n) {
    return G.f(t, e, b(1, n))
  }: function(t, e, n) {
    return t[e] = n,
    t
  },
  Z = L.f,
  U = d("JSON", "stringify"),
  J = /[\uD800-\uDFFF]/g,
  X = /^[\uD800-\uDBFF]$/,
  V = /^[\uDC00-\uDFFF]$/,
  Q = a(function() {
    return '"\\udf06\\ud834"' !== U("\udf06\ud834") || '"\\udead"' !== U("\udead")
  });
  U && D({
    target: "JSON",
    stat: !0,
    forced: Q
  },
  {
    stringify: function(t, e, n) {
      var i = U.apply(null, arguments);
      return "string" == typeof i ? i.replace(J, h) : i
    }
  }),
  W.JSON || (W.JSON = {
    stringify: JSON.stringify
  });
  var q = function(t, e, n) {
    return W.JSON.stringify.apply(null, arguments)
  },
  K = {},
  $ = "__core-js_shared__",
  tt = y[$] ||
  function(e, n) {
    try {
      Y(y, e, n)
    } catch(t) {
      y[e] = n
    }
    return n
  } ($, {}),
  et = Function.toString;
  "function" != typeof tt.inspectSource && (tt.inspectSource = function(t) {
    return et.call(t)
  });
  function nt(t) {
    return "Symbol(" + String(void 0 === t ? "": t) + ")_" + (++vt + gt).toString(36)
  }
  function it(t) {
    return yt[t] || (yt[t] = nt(t))
  }
  var ot, st, at, rt, ct, pt, ut, lt, dt = tt.inspectSource,
  ht = y.WeakMap,
  ft = "function" == typeof ht && /native code/.test(dt(ht)),
  mt = e(function(t) { (t.exports = function(t, e) {
      return tt[t] || (tt[t] = void 0 !== e ? e: {})
    })("versions", []).push({
      version: "3.6.4",
      mode: "pure",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    })
  }),
  vt = 0,
  gt = Math.random(),
  yt = mt("keys"),
  xt = {},
  bt = y.WeakMap;
  ut = ft ? (ot = new bt, st = ot.get, at = ot.has, rt = ot.set, ct = function(t, e) {
    return rt.call(ot, t, e),
    e
  },
  pt = function(t) {
    return st.call(ot, t) || {}
  },
  function(t) {
    return at.call(ot, t)
  }) : (lt = it("state"), xt[lt] = !0, ct = function(t, e) {
    return Y(t, lt, e),
    e
  },
  pt = function(t) {
    return E(t, lt) ? t[lt] : {}
  },
  function(t) {
    return E(t, lt)
  });
  function wt(t) {
    return Object(c(t))
  }
  function Dt(t) {
    return E(Lt, t) || (It && E(Ht, t) ? Lt[t] = Ht[t] : Lt[t] = Rt("Symbol." + t)),
    Lt[t]
  }
  var St, kt, At, Ot = {
    set: ct,
    get: pt,
    has: ut,
    enforce: function(t) {
      return ut(t) ? pt(t) : ct(t, {})
    },
    getterFor: function(n) {
      return function(t) {
        var e;
        if (!O(t) || (e = pt(t)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
        return e
      }
    }
  },
  Pt = !a(function() {
    function t() {}
    return t.prototype.constructor = null,
    Object.getPrototypeOf(new t) !== t.prototype
  }),
  Et = it("IE_PROTO"),
  Tt = Object.prototype,
  jt = Pt ? Object.getPrototypeOf: function(t) {
    return t = wt(t),
    E(t, Et) ? t[Et] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype: t instanceof Object ? Tt: null
  },
  It = !!Object.getOwnPropertySymbols && !a(function() {
    return ! String(Symbol())
  }),
  Mt = It && !Symbol.sham && "symbol" == typeof Symbol.iterator,
  Lt = mt("wks"),
  Ht = y.Symbol,
  Rt = Mt ? Ht: Ht && Ht.withoutSetter || nt,
  zt = (Dt("iterator"), !1); [].keys && ("next" in (At = [].keys()) ? (kt = jt(jt(At))) !== Object.prototype && (St = kt) : zt = !0),
  null == St && (St = {});
  function Ct(t) {
    return isNaN(t = +t) ? 0 : (0 < t ? Jt: Ut)(t)
  }
  function Bt(t) {
    return 0 < t ? Xt(Ct(t), 9007199254740991) : 0
  }
  function Ft(t, e) {
    var n = Ct(t);
    return n < 0 ? Vt(n + e, 0) : Qt(n, e)
  }
  function Wt(r) {
    return function(t, e, n) {
      var i, o = p(t),
      s = Bt(o.length),
      a = Ft(n, s);
      if (r && e != e) {
        for (; a < s;) if ((i = o[a++]) != i) return ! 0
      } else for (; a < s; a++) if ((r || a in o) && o[a] === e) return r || a || 0;
      return ! r && -1
    }
  }
  function Nt(t, e) {
    var n, i = p(t),
    o = 0,
    s = [];
    for (n in i) ! E(xt, n) && E(i, n) && s.push(n);
    for (; e.length > o;) E(i, n = e[o++]) && (~Kt(s, n) || s.push(n));
    return s
  }
  function _t() {}
  function Gt(t) {
    return "<script>" + t + "</" + oe + ">"
  }
  var Yt, Zt = {
    IteratorPrototype: St,
    BUGGY_SAFARI_ITERATORS: zt
  },
  Ut = Math.ceil,
  Jt = Math.floor,
  Xt = Math.min,
  Vt = Math.max,
  Qt = Math.min,
  qt = {
    includes: Wt(!0),
    indexOf: Wt(!1)
  },
  Kt = qt.indexOf,
  $t = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
  te = Object.keys ||
  function(t) {
    return Nt(t, $t)
  },
  ee = f ? Object.defineProperties: function(t, e) {
    N(t);
    for (var n, i = te(e), o = i.length, s = 0; s < o;) G.f(t, n = i[s++], e[n]);
    return t
  },
  ne = d("document", "documentElement"),
  ie = "prototype",
  oe = "script",
  se = it("IE_PROTO"),
  ae = function() {
    try {
      Yt = document.domain && new ActiveXObject("htmlfile")
    } catch(t) {}
    var t, e;
    ae = Yt ?
    function(t) {
      t.write(Gt("")),
      t.close();
      var e = t.parentWindow.Object;
      return t = null,
      e
    } (Yt) : ((e = i("iframe")).style.display = "none", ne.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(Gt("document.F=Object")), t.close(), t.F);
    for (var n = $t.length; n--;) delete ae[ie][$t[n]];
    return ae()
  };
  xt[se] = !0;
  var re = Object.create ||
  function(t, e) {
    var n;
    return null !== t ? (_t[ie] = N(t), n = new _t, _t[ie] = null, n[se] = t) : n = ae(),
    void 0 === e ? n: ee(n, e)
  },
  ce = {};
  ce[Dt("toStringTag")] = "z";
  function pe(t, e, n, i) {
    var o;
    t && (o = n ? t: t.prototype, E(o, be) || xe(o, be, {
      configurable: !0,
      value: e
    }), i && !fe && Y(o, "toString", ye))
  }
  function ue() {
    return this
  }
  function le(t, e, n, i) {
    i && i.enumerable ? t[e] = n: Y(t, e, n)
  }
  function de() {
    return this
  }
  function he(t, e, n, i, o, s, a) {
    var r, c, p;
    function u(t) {
      if (t === o && y) return y;
      if (!ke && t in v) return v[t];
      switch (t) {
      case "keys":
      case Oe:
      case Pe:
        return function() {
          return new n(this, t)
        }
      }
      return function() {
        return new n(this)
      }
    }
    c = i,
    p = e + " Iterator",
    (r = n).prototype = re(we, {
      next: b(1, c)
    }),
    pe(r, p, !1, !0),
    K[p] = ue;
    var l, d, h, f = e + " Iterator",
    m = !1,
    v = t.prototype,
    g = v[Ae] || v["@@iterator"] || o && v[o],
    y = !ke && g || u(o),
    x = "Array" == e && v.entries || g;
    if (x && (l = jt(x.call(new t)), Se !== Object.prototype && l.next && (pe(l, f, !0, !0), K[f] = de)), o == Oe && g && g.name !== Oe && (m = !0, y = function() {
      return g.call(this)
    }), a && v[Ae] !== y && Y(v, Ae, y), K[e] = y, o) if (d = {
      values: u(Oe),
      keys: s ? y: u("keys"),
      entries: u(Pe)
    },
    a) for (h in d) ! ke && !m && h in v || le(v, h, d[h]);
    else D({
      target: e,
      proto: !0,
      forced: ke || m
    },
    d);
    return d
  }
  var fe = "[object z]" === String(ce),
  me = Dt("toStringTag"),
  ve = "Arguments" == o(function() {
    return arguments
  } ()),
  ge = fe ? o: function(t) {
    var e, n, i;
    return void 0 === t ? "Undefined": null === t ? "Null": "string" == typeof(n = function(t, e) {
      try {
        return t[e]
      } catch(t) {}
    } (e = Object(t), me)) ? n: ve ? o(e) : "Object" == (i = o(e)) && "function" == typeof e.callee ? "Arguments": i
  },
  ye = fe ? {}.toString: function() {
    return "[object " + ge(this) + "]"
  },
  xe = G.f,
  be = Dt("toStringTag"),
  we = Zt.IteratorPrototype,
  De = Object.setPrototypeOf || ("__proto__" in {} ?
  function() {
    var n, i = !1,
    t = {};
    try { (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []),
      i = t instanceof Array
    } catch(t) {}
    return function(t, e) {
      return N(t),
      function(t) {
        if (!O(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
      } (e),
      i ? n.call(t, e) : t.__proto__ = e,
      t
    }
  } () : void 0),
  Se = Zt.IteratorPrototype,
  ke = Zt.BUGGY_SAFARI_ITERATORS,
  Ae = Dt("iterator"),
  Oe = "values",
  Pe = "entries",
  Ee = "Array Iterator",
  Te = Ot.set,
  je = Ot.getterFor(Ee);
  he(Array, "Array",
  function(t, e) {
    Te(this, {
      type: Ee,
      target: p(t),
      index: 0,
      kind: e
    })
  },
  function() {
    var t = je(this),
    e = t.target,
    n = t.kind,
    i = t.index++;
    return ! e || i >= e.length ? {
      value: t.target = void 0,
      done: !0
    }: "keys" == n ? {
      value: i,
      done: !1
    }: "values" == n ? {
      value: e[i],
      done: !1
    }: {
      value: [i, e[i]],
      done: !1
    }
  },
  "values");
  K.Arguments = K.Array;
  var Ie = Dt("toStringTag");
  for (var Me in {
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
  }) {
    var Le = y[Me],
    He = Le && Le.prototype;
    He && ge(He) !== Ie && Y(He, Ie, Me),
    K[Me] = K.Array
  }
  function Re(t, e) {
    var n;
    return We(t) && ("function" == typeof(n = t.constructor) && (n === Array || We(n.prototype)) || O(n) && null === (n = n[Ne])) && (n = void 0),
    new(void 0 === n ? Array: n)(0 === e ? 0 : e)
  }
  function ze(h) {
    var f = 1 == h,
    m = 2 == h,
    v = 3 == h,
    g = 4 == h,
    y = 6 == h,
    x = 5 == h || y;
    return function(t, e, n, i) {
      for (var o, s, a = wt(t), r = A(a), c = w(e, n, 3), p = Bt(r.length), u = 0, l = i || Re, d = f ? l(t, p) : m ? l(t, 0) : void 0; u < p; u++) if ((x || u in r) && (s = c(o = r[u], u, a), h)) if (f) d[u] = s;
      else if (s) switch (h) {
      case 3:
        return ! 0;
      case 5:
        return o;
      case 6:
        return u;
      case 2:
        _e.call(d, o)
      } else if (g) return ! 1;
      return y ? -1 : v || g ? g: d
    }
  }
  function Ce(t, e) {
    var n = [][t];
    return !! n && a(function() {
      n.call(null, e ||
      function() {
        throw 1
      },
      1)
    })
  }
  function Be(t) {
    throw t
  }
  function Fe(t, e) {
    if (E(Ze, t)) return Ze[t];
    var n = [][t],
    i = !!E(e = e || {},
    "ACCESSORS") && e.ACCESSORS,
    o = E(e, 0) ? e[0] : Be,
    s = E(e, 1) ? e[1] : void 0;
    return Ze[t] = !!n && !a(function() {
      if (i && !f) return 1;
      var t = {
        length: -1
      };
      i ? Ye(t, 1, {
        enumerable: !0,
        get: Be
      }) : t[1] = 1,
      n.call(t, o, s)
    })
  }
  var We = Array.isArray ||
  function(t) {
    return "Array" == o(t)
  },
  Ne = Dt("species"),
  _e = [].push,
  Ge = {
    forEach: ze(0),
    map: ze(1),
    filter: ze(2),
    some: ze(3),
    every: ze(4),
    find: ze(5),
    findIndex: ze(6)
  },
  Ye = Object.defineProperty,
  Ze = {},
  Ue = Ge.forEach,
  Je = Ce("forEach"),
  Xe = Fe("forEach"),
  Ve = Je && Xe ? [].forEach: function(t, e) {
    return Ue(this, t, 1 < arguments.length ? e: void 0)
  };
  D({
    target: "Array",
    proto: !0,
    forced: [].forEach != Ve
  },
  {
    forEach: Ve
  });
  function Qe(t) {
    return W[t + "Prototype"]
  }
  function qe(t) {
    var e = W.Symbol || (W.Symbol = {});
    E(e, t) || on(e, t, {
      value: nn.f(t)
    })
  }
  var Ke = Qe("Array").forEach,
  $e = Array.prototype,
  tn = {
    DOMTokenList: !0,
    NodeList: !0
  },
  en = function(t) {
    var e = t.forEach;
    return t === $e || t instanceof Array && e === $e.forEach || tn.hasOwnProperty(ge(t)) ? Ke: e
  },
  nn = {
    f: Dt
  },
  on = G.f;
  qe("iterator");
  function sn(r) {
    return function(t, e) {
      var n, i, o = String(c(t)),
      s = Ct(e),
      a = o.length;
      return s < 0 || a <= s ? r ? "": void 0 : (n = o.charCodeAt(s)) < 55296 || 56319 < n || s + 1 === a || (i = o.charCodeAt(s + 1)) < 56320 || 57343 < i ? r ? o.charAt(s) : n: r ? o.slice(s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536
    }
  }
  var an = {
    codeAt: sn(!1),
    charAt: sn(!0)
  }.charAt,
  rn = "String Iterator",
  cn = Ot.set,
  pn = Ot.getterFor(rn);
  he(String, "String",
  function(t) {
    cn(this, {
      type: rn,
      string: String(t),
      index: 0
    })
  },
  function() {
    var t, e = pn(this),
    n = e.string,
    i = e.index;
    return i >= n.length ? {
      value: void 0,
      done: !0
    }: (t = an(n, i), e.index += t.length, {
      value: t,
      done: !1
    })
  });
  function un(t, e, n) {
    var i = s(e);
    i in t ? G.f(t, i, b(0, n)) : t[i] = n
  }
  var ln, dn, hn = nn.f("iterator"),
  fn = d("navigator", "userAgent") || "",
  mn = y.process,
  vn = mn && mn.versions,
  gn = vn && vn.v8;
  gn ? dn = (ln = gn.split("."))[0] + ln[1] : fn && (!(ln = fn.match(/Edge\/(\d+)/)) || 74 <= ln[1]) && (ln = fn.match(/Chrome\/(\d+)/)) && (dn = ln[1]);
  function yn(e) {
    return 51 <= xn || !a(function() {
      var t = [];
      return (t.constructor = {})[bn] = function() {
        return {
          foo: 1
        }
      },
      1 !== t[e](Boolean).foo
    })
  }
  var xn = dn && +dn,
  bn = Dt("species"),
  wn = Dt("isConcatSpreadable"),
  Dn = 9007199254740991,
  Sn = "Maximum allowed index exceeded",
  kn = 51 <= xn || !a(function() {
    var t = [];
    return t[wn] = !1,
    t.concat()[0] !== t
  }),
  An = yn("concat");
  D({
    target: "Array",
    proto: !0,
    forced: !kn || !An
  },
  {
    concat: function(t) {
      for (var e, n, i, o = wt(this), s = Re(o, 0), a = 0, r = -1, c = arguments.length; r < c; r++) if (function(t) {
        if (!O(t)) return ! 1;
        var e = t[wn];
        return void 0 !== e ? !!e: We(t)
      } (i = -1 === r ? o: arguments[r])) {
        if (n = Bt(i.length), Dn < a + n) throw TypeError(Sn);
        for (e = 0; e < n; e++, a++) e in i && un(s, a, i[e])
      } else {
        if (Dn <= a) throw TypeError(Sn);
        un(s, a++, i)
      }
      return s.length = a,
      s
    }
  });
  function On(t, e) {
    var n = Kn[t] = re(Un[Nn]);
    return Gn(n, {
      type: Wn,
      tag: t,
      description: e
    }),
    f || (n.description = e),
    n
  }
  function Pn(e, t) {
    N(e);
    var n = p(t),
    i = te(n).concat(pi(n));
    return Bn(i,
    function(t) {
      f && !ci.call(n, t) || ri(e, t, n[t])
    }),
    e
  }
  function En(t, e) {
    var n = p(t),
    i = s(e, !0);
    if (n !== Zn || !E(Kn, i) || E($n, i)) {
      var o = Xn(n, i);
      return ! o || !E(Kn, i) || E(n, Fn) && n[Fn][i] || (o.enumerable = !0),
      o
    }
  }
  function Tn(t) {
    var e = Qn(p(t)),
    n = [];
    return Bn(e,
    function(t) {
      E(Kn, t) || E(xt, t) || n.push(t)
    }),
    n
  }
  var jn, In = $t.concat("length", "prototype"),
  Mn = {
    f: Object.getOwnPropertyNames ||
    function(t) {
      return Nt(t, In)
    }
  },
  Ln = Mn.f,
  Hn = {}.toString,
  Rn = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
  zn = {
    f: function(t) {
      return Rn && "[object Window]" == Hn.call(t) ?
      function(t) {
        try {
          return Ln(t)
        } catch(t) {
          return Rn.slice()
        }
      } (t) : Ln(p(t))
    }
  },
  Cn = {
    f: Object.getOwnPropertySymbols
  },
  Bn = Ge.forEach,
  Fn = it("hidden"),
  Wn = "Symbol",
  Nn = "prototype",
  _n = Dt("toPrimitive"),
  Gn = Ot.set,
  Yn = Ot.getterFor(Wn),
  Zn = Object[Nn],
  Un = y.Symbol,
  Jn = d("JSON", "stringify"),
  Xn = L.f,
  Vn = G.f,
  Qn = zn.f,
  qn = x.f,
  Kn = mt("symbols"),
  $n = mt("op-symbols"),
  ti = mt("string-to-symbol-registry"),
  ei = mt("symbol-to-string-registry"),
  ni = mt("wks"),
  ii = y.QObject,
  oi = !ii || !ii[Nn] || !ii[Nn].findChild,
  si = f && a(function() {
    return 7 != re(Vn({},
    "a", {
      get: function() {
        return Vn(this, "a", {
          value: 7
        }).a
      }
    })).a
  }) ?
  function(t, e, n) {
    var i = Xn(Zn, e);
    i && delete Zn[e],
    Vn(t, e, n),
    i && t !== Zn && Vn(Zn, e, i)
  }: Vn,
  ai = Mt ?
  function(t) {
    return "symbol" == typeof t
  }: function(t) {
    return Object(t) instanceof Un
  },
  ri = function(t, e, n) {
    t === Zn && ri($n, e, n),
    N(t);
    var i = s(e, !0);
    return N(n),
    E(Kn, i) ? (n.enumerable ? (E(t, Fn) && t[Fn][i] && (t[Fn][i] = !1), n = re(n, {
      enumerable: b(0, !1)
    })) : (E(t, Fn) || Vn(t, Fn, b(1, {})), t[Fn][i] = !0), si(t, i, n)) : Vn(t, i, n)
  },
  ci = function(t) {
    var e = s(t, !0),
    n = qn.call(this, e);
    return ! (this === Zn && E(Kn, e) && !E($n, e)) && (!(n || !E(this, e) || !E(Kn, e) || E(this, Fn) && this[Fn][e]) || n)
  },
  pi = function(t) {
    var e = t === Zn,
    n = Qn(e ? $n: p(t)),
    i = [];
    return Bn(n,
    function(t) { ! E(Kn, t) || e && !E(Zn, t) || i.push(Kn[t])
    }),
    i
  };
  It || (le((Un = function(t) {
    if (this instanceof Un) throw TypeError("Symbol is not a constructor");
    var e = arguments.length && void 0 !== t ? String(t) : void 0,
    n = nt(e),
    i = function(t) {
      this === Zn && i.call($n, t),
      E(this, Fn) && E(this[Fn], n) && (this[Fn][n] = !1),
      si(this, n, b(1, t))
    };
    return f && oi && si(Zn, n, {
      configurable: !0,
      set: i
    }),
    On(n, e)
  })[Nn], "toString",
  function() {
    return Yn(this).tag
  }), le(Un, "withoutSetter",
  function(t) {
    return On(nt(t), t)
  }), x.f = ci, G.f = ri, L.f = En, Mn.f = zn.f = Tn, Cn.f = pi, nn.f = function(t) {
    return On(Dt(t), t)
  },
  f && Vn(Un[Nn], "description", {
    configurable: !0,
    get: function() {
      return Yn(this).description
    }
  })),
  D({
    global: !0,
    wrap: !0,
    forced: !It,
    sham: !It
  },
  {
    Symbol: Un
  }),
  Bn(te(ni),
  function(t) {
    qe(t)
  }),
  D({
    target: Wn,
    stat: !0,
    forced: !It
  },
  {
    for: function(t) {
      var e = String(t);
      if (E(ti, e)) return ti[e];
      var n = Un(e);
      return ti[e] = n,
      ei[n] = e,
      n
    },
    keyFor: function(t) {
      if (!ai(t)) throw TypeError(t + " is not a symbol");
      if (E(ei, t)) return ei[t]
    },
    useSetter: function() {
      oi = !0
    },
    useSimple: function() {
      oi = !1
    }
  }),
  D({
    target: "Object",
    stat: !0,
    forced: !It,
    sham: !f
  },
  {
    create: function(t, e) {
      return void 0 === e ? re(t) : Pn(re(t), e)
    },
    defineProperty: ri,
    defineProperties: Pn,
    getOwnPropertyDescriptor: En
  }),
  D({
    target: "Object",
    stat: !0,
    forced: !It
  },
  {
    getOwnPropertyNames: Tn,
    getOwnPropertySymbols: pi
  }),
  D({
    target: "Object",
    stat: !0,
    forced: a(function() {
      Cn.f(1)
    })
  },
  {
    getOwnPropertySymbols: function(t) {
      return Cn.f(wt(t))
    }
  }),
  Jn && (jn = !It || a(function() {
    var t = Un();
    return "[null]" != Jn([t]) || "{}" != Jn({
      a: t
    }) || "{}" != Jn(Object(t))
  }), D({
    target: "JSON",
    stat: !0,
    forced: jn
  },
  {
    stringify: function(t, e, n) {
      for (var i, o = [t], s = 1; s < arguments.length;) o.push(arguments[s++]);
      if ((O(i = e) || void 0 !== t) && !ai(t)) return We(e) || (e = function(t, e) {
        if ("function" == typeof i && (e = i.call(this, t, e)), !ai(e)) return e
      }),
      o[1] = e,
      Jn.apply(null, o)
    }
  })),
  Un[Nn][_n] || Y(Un[Nn], _n, Un[Nn].valueOf),
  pe(Un, Wn),
  xt[Fn] = !0,
  qe("asyncIterator"),
  qe("hasInstance"),
  qe("isConcatSpreadable"),
  qe("match"),
  qe("matchAll"),
  qe("replace"),
  qe("search"),
  qe("species"),
  qe("split"),
  qe("toPrimitive"),
  qe("toStringTag"),
  qe("unscopables"),
  pe(Math, "Math", !0),
  pe(y.JSON, "JSON", !0);
  var ui = W.Symbol;
  qe("asyncDispose"),
  qe("dispose"),
  qe("observable"),
  qe("patternMatch"),
  qe("replaceAll");
  var li = ui,
  di = e(function(e) {
    function n(t) {
      return e.exports = n = "function" == typeof li && "symbol" == typeof hn ?
      function(t) {
        return typeof t
      }: function(t) {
        return t && "function" == typeof li && t.constructor === li && t !== li.prototype ? "symbol": typeof t
      },
      n(t)
    }
    e.exports = n
  });
  function hi(t) {
    return "[object Array]" === Object.prototype.toString.call(t)
  }
  function fi(t) {
    return "[object Object]" === Object.prototype.toString.call(t)
  }
  function mi(t) {
    return null == t
  }
  function vi(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
    if (!t) return t;
    var n = {};
    for (var i in hi(t) && (n = []), t) {
      var o = t[i];
      o && "object" === di(o) && (hi(o) || (e ? o.constructor === Object: fi(o))) ? n[i] = vi(o, e) : n[i] = null === o ? null: o
    }
    return n
  }
  function gi() {
    var o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
    s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
    a = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
    if (hi(o) || hi(s)) throw new Error("仅支持对象间的合并!");
    for (var t in s) !
    function(n) {
      var i, t = o[n],
      e = s[n];
      o.hasOwnProperty(n) && (e && "object" === di(e) ? e.constructor === Object ? t && "object" === di(t) && t.constructor === Object ? o[n] = gi(t, e, a) : o[n] = vi(e, a) : e.constructor === Array ? (i = vi(t, a) || [], o[n] = [], en(e).call(e,
      function(t, e) {
        t && "object" === di(t) ? t.constructor === Object && i[e] && "object" === di(i[e]) && i[e].constructor === Object ? o[n].push(gi(i[e], t, a)) : o[n].push(vi(t, a)) : null === t ? o[n].push(null) : o[n].push(t)
      })) : o[n] = e: o[n] = null === e ? null: e)
    } (t);
    return o
  }
  function yi() {
    var o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
    s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
    a = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
    if (hi(o) || hi(s)) throw new Error("仅支持对象的合并!");
    for (var t in s) !
    function(n) {
      var i, t = o[n],
      e = s[n];
      e && "object" === di(e) ? e.constructor === Object ? t && "object" === di(t) && t.constructor === Object ? o[n] = yi(t, e, a) : o[n] = vi(e, a) : e.constructor === Array ? (i = vi(t, a) || [], o[n] = [], en(e).call(e,
      function(t, e) {
        t && "object" === di(t) ? t.constructor === Object && i[e] && "object" === di(i[e]) && i[e].constructor === Object ? o[n].push(yi(i[e], t, a)) : o[n].push(vi(t, a)) : null === t ? o[n].push(null) : o[n].push(t)
      })) : o[n] = e: o[n] = null === e ? null: e
    } (t);
    return o
  }
  var xi = Object.freeze({
    __proto__: null,
    isArray: hi,
    isObject: fi,
    isEmpty: mi,
    cloneDeep: vi,
    assign: gi,
    assignDeep: yi,
    cloneDeepByJSON: function() {
      var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.parse(q(t))
    }
  });
  function bi(t) {
    return t && 1 === t.nodeType
  }
  function wi(o) {
    return function(t, e) {
      var n = 2 < arguments.length,
      i = n ? Si.call(arguments, 2) : void 0;
      return o(n ?
      function() { ("function" == typeof t ? t: Function(t)).apply(this, i)
      }: t, e)
    }
  }
  var Di = Object.freeze({
    __proto__: null,
    isElement: bi
  }),
  Si = [].slice,
  ki = /MSIE .\./.test(fn);
  D({
    global: !0,
    bind: !0,
    forced: ki
  },
  {
    setTimeout: wi(y.setTimeout),
    setInterval: wi(y.setInterval)
  });
  var Ai = W.setTimeout;
  function Oi(t) {
    return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
    function(t) {
      Ai(function() {
        if (!t) throw new Error("requestAnimationFrame need a callback function!");
        t()
      },
      16.66)
    })(t)
  }
  function Pi(t) { (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame)(t)
  }
  function Ei(n) {
    return function(t) {
      var e = String(c(t));
      return 1 & n && (e = e.replace(Mi, "")),
      2 & n && (e = e.replace(Li, "")),
      e
    }
  }
  var Ti = Object.freeze({
    __proto__: null,
    requestAnimationFrame: Oi,
    cancelAnimationFrame: Pi,
    copyTextContent: function(t, e) {
      try {
        var n = document.createElement("input"),
        i = document.querySelector("body");
        i.insertAdjacentElement("beforeend", n),
        n.setAttribute("value", t),
        n.select(),
        document.execCommand && document.execCommand("copy"),
        i.removeChild(n),
        e && e(!0)
      } catch(t) {
        console.error(t),
        e && e(!1)
      }
    }
  }),
  ji = "\t\n\v\f\r                　\u2028\u2029\ufeff",
  Ii = "[" + ji + "]",
  Mi = RegExp("^" + Ii + Ii + "*"),
  Li = RegExp(Ii + Ii + "*$"),
  Hi = {
    start: Ei(1),
    end: Ei(2),
    trim: Ei(3)
  }.trim,
  Ri = y.parseInt,
  zi = /^[+-]?0[Xx]/,
  Ci = 8 !== Ri(ji + "08") || 22 !== Ri(ji + "0x16") ?
  function(t, e) {
    var n = Hi(String(t));
    return Ri(n, e >>> 0 || (zi.test(n) ? 16 : 10))
  }: Ri;
  D({
    global: !0,
    forced: parseInt != Ci
  },
  {
    parseInt: Ci
  });
  var Bi = W.parseInt;
  function Fi(t) {
    var e = (t = gi({
      width: 200,
      height: 200,
      zIndex: 0,
      dpr: window.devicePixelRatio
    },
    t)).dpr || window.devicePixelRatio || 1,
    n = document.createElement("canvas");
    return n.style.position = "absolute",
    n.style.left = "0px",
    n.style.top = "0px",
    n.style.zIndex = t.zIndex,
    n.style.transformOrigin = "0 0",
    n.style.width = t.width + "px",
    n.style.height = t.height + "px",
    n.width = t.width * e,
    n.height = t.height * e,
    n
  }
  function Wi(t) {
    t.width = t.width
  }
  function Ni(t, e, n, i) {
    return n > t[0] && n < e[0] && i > t[1] && i < e[1]
  }
  function _i(t) {
    if (!bi(t)) throw new Error("请传入正确的HTML图片元素, 当前: ".concat(t));
    try {
      if (0 < t.width && 0 < t.height) {
        var e = Fi({
          width: t.width,
          height: t.height
        }).getContext("2d");
        e.drawImage(t, 0, 0, t.width, t.height);
        for (var n = e.getImageData(0, 0, t.width, t.height), i = 0; i < n.data.length; i += 4) {
          var o = Gi([n.data[i], n.data[i + 1], n.data[i] + 2]);
          n.data[i] = o,
          n.data[i + 1] = o,
          n.data[i + 2] = o
        }
        e.putImageData(n, 0, 0),
        t.src = e.canvas.toDataURL("image/png", 1)
      }
    } catch(t) {
      console.warn("图片置灰失败： "),
      console.warn(t)
    }
    return t
  }
  function Gi() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [0, 0, 0];
    return Bi(.3 * t[0] + .59 * t[1] + .11 * t[2])
  }
  var Yi = Object.freeze({
    __proto__: null,
    createCanvas: Fi,
    clearCanvas: Wi,
    mouseInRect: Ni,
    grayPicture: _i,
    grayAlgorithm: Gi
  });
  function Zi(t, e) {
    if (e = gi({
      width: "320px",
      height: "240px",
      transitionDuration: ".35s, .35s",
      transitionTimingFunction: "ease-in-out, ease-in-out",
      transitionProperty: "transform, opacity"
    },
    e), !bi(t)) throw new Error("请传入正确的HTML元素, 当前传参为: ".concat(t));
    var n;
    return "yes" === t.getAttribute("data-handled") || (t.style.transformOrigin = "0 0", t.style.transform = "scale(1)", t.style.overflow = "hidden", "fixed" !== (n = window.getComputedStyle(t, null).position) && "absolute" !== n && (t.style.position = "relative"), t.setAttribute("data-handled", "yes"), t.style.transitionProperty = e.transitionProperty, t.style.transitionTimingFunction = e.transitionTimingFunction, t.style.transitionDuration = e.transitionDuration, t.style.width = e.width, t.style.height = e.height),
    t
  }
  function Ui(t) {
    if (!bi(t)) throw new Error("请传入正确的HTML元素, 当前传参为: ".concat(t));
    t.removeAttribute("data-handled"),
    t.style.transform = null,
    t.style.transformOrigin = null,
    t.style.transition = null,
    t.style.width = null,
    t.style.height = null,
    t.style.overflow = null,
    t.style.position = null,
    t.style.cursor = null,
    t.innerHTML = ""
  }
  var Ji = Object.freeze({
    __proto__: null,
    sceneElInit: Zi,
    sceneElDestroy: Ui
  });
  function Xi(t) {
    return (t || "").replace(/\s/, "")
  }
  var Vi = Object.freeze({
    __proto__: null,
    isSymbol: function(t) {
      return ! /([a-z]|[A-Z]|[0-9]|[\u4e00-\u9fa5])/.test(t)
    },
    isChinese: function(t) {
      return /[\u4e00-\u9fa5]/.test(t)
    },
    trim: Xi
  }),
  Qi = Object.freeze({
    __proto__: null,
    objectHelper: xi,
    elementHelper: Di,
    bomHelper: Ti,
    sceneHelper: Ji,
    canvasHelper: Yi,
    stringHelper: Vi
  }),
  qi = [],
  Ki = qi.sort,
  $i = a(function() {
    qi.sort(void 0)
  }),
  to = a(function() {
    qi.sort(null)
  }),
  eo = Ce("sort");
  D({
    target: "Array",
    proto: !0,
    forced: $i || !to || !eo
  },
  {
    sort: function(t) {
      return void 0 === t ? Ki.call(wt(this)) : Ki.call(wt(this), u(t))
    }
  });
  var no = Qe("Array").sort,
  io = Array.prototype,
  oo = function(t) {
    var e = t.sort;
    return t === io || t instanceof Array && e === io.sort ? no: e
  };
  D({
    target: "Array",
    stat: !0
  },
  {
    isArray: We
  });
  var so = W.Array.isArray;
  var ao = function(t, e) { (null == e || e > t.length) && (e = t.length);
    for (var n = 0,
    i = new Array(e); n < e; n++) i[n] = t[n];
    return i
  };
  function ro(e, t, n, i) {
    try {
      return i ? t(N(n)[0], n[1]) : t(n)
    } catch(t) {
      var o = e.
      return;
      throw void 0 !== o && N(o.call(e)),
      t
    }
  }
  function co(t) {
    return void 0 !== t && (K.Array === t || ho[lo] === t)
  }
  function po(t) {
    if (null != t) return t[fo] || t["@@iterator"] || K[ge(t)]
  }
  var uo = function(t) {
    if (so(t)) return ao(t)
  },
  lo = Dt("iterator"),
  ho = Array.prototype,
  fo = Dt("iterator"),
  mo = Dt("iterator"),
  vo = !1;
  try {
    var go = 0,
    yo = {
      next: function() {
        return {
          done: !!go++
        }
      },
      return: function() {
        vo = !0
      }
    };
    yo[mo] = function() {
      return this
    },
    Array.from(yo,
    function() {
      throw 2
    })
  } catch(t) {}
  var xo = !
  function(t, e) {
    if (!e && !vo) return ! 1;
    var n = !1;
    try {
      var i = {};
      i[mo] = function() {
        return {
          next: function() {
            return {
              done: n = !0
            }
          }
        }
      },
      t(i)
    } catch(t) {}
    return n
  } (function(t) {
    Array.from(t)
  });
  D({
    target: "Array",
    stat: !0,
    forced: xo
  },
  {
    from: function(t, e, n) {
      var i, o, s, a, r, c, p = wt(t),
      u = "function" == typeof this ? this: Array,
      l = arguments.length,
      d = 1 < l ? e: void 0,
      h = void 0 !== d,
      f = po(p),
      m = 0;
      if (h && (d = w(d, 2 < l ? n: void 0, 2)), null == f || u == Array && co(f)) for (o = new u(i = Bt(p.length)); m < i; m++) c = h ? d(p[m], m) : p[m],
      un(o, m, c);
      else for (r = (a = f.call(p)).next, o = new u; ! (s = r.call(a)).done; m++) c = h ? ro(a, d, [s.value, m], !0) : s.value,
      un(o, m, c);
      return o.length = m,
      o
    }
  });
  var bo = W.Array.from,
  wo = Dt("iterator"),
  Do = function(t) {
    var e = Object(t);
    return void 0 !== e[wo] || "@@iterator" in e || K.hasOwnProperty(ge(e))
  };
  var So = function(t) {
    if (void 0 !== li && Do(Object(t))) return bo(t)
  },
  ko = yn("slice"),
  Ao = Fe("slice", {
    ACCESSORS: !0,
    0 : 0,
    1 : 2
  }),
  Oo = Dt("species"),
  Po = [].slice,
  Eo = Math.max;
  D({
    target: "Array",
    proto: !0,
    forced: !ko || !Ao
  },
  {
    slice: function(t, e) {
      var n, i, o, s = p(this),
      a = Bt(s.length),
      r = Ft(t, a),
      c = Ft(void 0 === e ? a: e, a);
      if (We(s) && (("function" == typeof(n = s.constructor) && (n === Array || We(n.prototype)) || O(n) && null === (n = n[Oo])) && (n = void 0), n === Array || void 0 === n)) return Po.call(s, r, c);
      for (i = new(void 0 === n ? Array: n)(Eo(c - r, 0)), o = 0; r < c; r++, o++) r in s && un(i, o, s[r]);
      return i.length = o,
      i
    }
  });
  var To = Qe("Array").slice,
  jo = Array.prototype,
  Io = function(t) {
    var e = t.slice;
    return t === jo || t instanceof Array && e === jo.slice ? To: e
  };
  var Mo = function(t, e) {
    var n;
    if (t) {
      if ("string" == typeof t) return ao(t, e);
      var i = Io(n = Object.prototype.toString.call(t)).call(n, 8, -1);
      return "Object" === i && t.constructor && (i = t.constructor.name),
      "Map" === i || "Set" === i ? bo(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? ao(t, e) : void 0
    }
  };
  var Lo = function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  };
  var Ho = function(t) {
    return uo(t) || So(t) || Mo(t) || Lo()
  },
  Ro = [].slice,
  zo = {},
  Co = Function.bind ||
  function(e) {
    var n = u(this),
    i = Ro.call(arguments, 1),
    o = function() {
      var t = i.concat(Ro.call(arguments));
      return this instanceof o ?
      function(t, e, n) {
        if (! (e in zo)) {
          for (var i = [], o = 0; o < e; o++) i[o] = "a[" + o + "]";
          zo[e] = Function("C,a", "return new C(" + i.join(",") + ")")
        }
        return zo[e](t, n)
      } (n, t.length, t) : n.apply(e, t)
    };
    return O(n.prototype) && (o.prototype = n.prototype),
    o
  };
  D({
    target: "Function",
    proto: !0
  },
  {
    bind: Co
  });
  var Bo = Qe("Function").bind,
  Fo = Function.prototype,
  Wo = function(t) {
    var e = t.bind;
    return t === Fo || t instanceof Function && e === Fo.bind ? Bo: e
  };
  var No = function(t, e) {
    if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
  };
  D({
    target: "Object",
    stat: !0,
    forced: !f,
    sham: !f
  },
  {
    defineProperty: G.f
  });
  var _o = e(function(t) {
    var i = W.Object,
    e = t.exports = function(t, e, n) {
      return i.defineProperty(t, e, n)
    };
    i.defineProperty.sham && (e.sham = !0)
  });
  function Go(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1,
      i.configurable = !0,
      "value" in i && (i.writable = !0),
      _o(t, i.key, i)
    }
  }
  var Yo = function(t, e, n) {
    return e && Go(t.prototype, e),
    n && Go(t, n),
    t
  },
  Zo = d("Reflect", "construct"),
  Uo = a(function() {
    function t() {}
    return ! (Zo(function() {},
    [], t) instanceof t)
  }),
  Jo = !a(function() {
    Zo(function() {})
  }),
  Xo = Uo || Jo;
  D({
    target: "Reflect",
    stat: !0,
    forced: Xo,
    sham: Xo
  },
  {
    construct: function(t, e, n) {
      u(t),
      N(e);
      var i = arguments.length < 3 ? t: u(n);
      if (Jo && !Uo) return Zo(t, e, i);
      if (t == i) {
        switch (e.length) {
        case 0:
          return new t;
        case 1:
          return new t(e[0]);
        case 2:
          return new t(e[0], e[1]);
        case 3:
          return new t(e[0], e[1], e[2]);
        case 4:
          return new t(e[0], e[1], e[2], e[3])
        }
        var o = [null];
        return o.push.apply(o, e),
        new(Co.apply(t, o))
      }
      var s = i.prototype,
      a = re(O(s) ? s: Object.prototype),
      r = Function.apply.call(t, a, e);
      return O(r) ? r: a
    }
  });
  var Vo = W.Reflect.construct;
  var Qo = function(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
  };
  D({
    target: "Object",
    stat: !0,
    sham: !f
  },
  {
    create: re
  });
  var qo = W.Object,
  Ko = function(t, e) {
    return qo.create(t, e)
  };
  D({
    target: "Object",
    stat: !0
  },
  {
    setPrototypeOf: De
  });
  var $o = W.Object.setPrototypeOf,
  ts = e(function(n) {
    function i(t, e) {
      return n.exports = i = $o ||
      function(t, e) {
        return t.__proto__ = e,
        t
      },
      i(t, e)
    }
    n.exports = i
  });
  var es = function(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Ko(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }),
    e && ts(t, e)
  };
  var ns = function(t, e) {
    return ! e || "object" !== di(e) && "function" != typeof e ? Qo(t) : e
  },
  is = L.f,
  os = a(function() {
    is(1)
  });
  D({
    target: "Object",
    stat: !0,
    forced: !f || os,
    sham: !f
  },
  {
    getOwnPropertyDescriptor: function(t, e) {
      return is(p(t), e)
    }
  });
  var ss = e(function(t) {
    var n = W.Object,
    e = t.exports = function(t, e) {
      return n.getOwnPropertyDescriptor(t, e)
    };
    n.getOwnPropertyDescriptor.sham && (e.sham = !0)
  });
  D({
    target: "Reflect",
    stat: !0
  },
  {
    get: function t(e, n) {
      var i, o, s = arguments.length < 3 ? e: arguments[2];
      return N(e) === s ? e[n] : (i = L.f(e, n)) ? E(i, "value") ? i.value: void 0 === i.get ? void 0 : i.get.call(s) : O(o = jt(e)) ? t(o, n, s) : void 0
    }
  });
  var as = W.Reflect.get,
  rs = a(function() {
    jt(1)
  });
  D({
    target: "Object",
    stat: !0,
    forced: rs,
    sham: !Pt
  },
  {
    getPrototypeOf: function(t) {
      return jt(wt(t))
    }
  });
  var cs = W.Object.getPrototypeOf,
  ps = e(function(e) {
    function n(t) {
      return e.exports = n = $o ? cs: function(t) {
        return t.__proto__ || cs(t)
      },
      n(t)
    }
    e.exports = n
  });
  var us = function(t, e) {
    for (; ! Object.prototype.hasOwnProperty.call(t, e) && null !== (t = ps(t)););
    return t
  },
  ls = e(function(i) {
    function o(t, e, n) {
      return "undefined" != typeof Reflect && as ? i.exports = o = as: i.exports = o = function(t, e, n) {
        var i = us(t, e);
        if (i) {
          var o = ss(i, e);
          return o.get ? o.get.call(n) : o.value
        }
      },
      o(t, e, n || t)
    }
    i.exports = o
  }),
  ds = function() {
    function e(t) {
      No(this, e),
      this.scene = t,
      this.width = 0,
      this.height = 0,
      this.position = [0, 0],
      this.zIndex = 0,
      this.zLevel = 0,
      this.initCheck()
    }
    return Yo(e, [{
      key: "getWidth",
      value: function() {
        return this.width
      }
    },
    {
      key: "setWidth",
      value: function(t) {
        this.width = t
      }
    },
    {
      key: "getHeight",
      value: function() {
        return this.height
      }
    },
    {
      key: "setHeight",
      value: function(t) {
        this.height = t
      }
    },
    {
      key: "getPosition",
      value: function() {
        return this.position
      }
    },
    {
      key: "setPosition",
      value: function(t) {
        this.position = t
      }
    },
    {
      key: "getZIndex",
      value: function() {
        return this.zIndex
      }
    },
    {
      key: "setZIndex",
      value: function(t) {
        this.zIndex = t
      }
    },
    {
      key: "getZLevel",
      value: function() {
        return this.zLevel
      }
    },
    {
      key: "setZLevel",
      value: function(t) {
        this.zLevel = t
      }
    },
    {
      key: "initCheck",
      value: function() {
        if (!this.scene) throw new Error("请传入创景实例!")
      }
    },
    {
      key: "updateOptions",
      value: function(t) {
        this.options = gi(this.options, t),
        mi(this.options.width) || this.setWidth(this.options.width),
        mi(this.options.height) || this.setHeight(this.options.height),
        mi(this.options.position) || this.setPosition(this.options.position),
        mi(this.options.zLevel) || this.setZLevel(this.options.zLevel),
        mi(this.options.zIndex) || this.setZIndex(this.options.zIndex)
      }
    },
    {
      key: "update",
      value: function() {
        throw new Error("请实现update方法!")
      }
    },
    {
      key: "render",
      value: function() {
        throw new Error("请实现render方法!")
      }
    },
    {
      key: "destroy",
      value: function() {
        throw new Error("请实现destroy方法!")
      }
    },
    {
      key: "event",
      value: function() {
        throw new Error("请实现event方法!")
      }
    }]),
    e
  } ();
  function hs(i) {
    var o = function() {
      if ("undefined" == typeof Reflect || !Vo) return ! 1;
      if (Vo.sham) return ! 1;
      if ("function" == typeof Proxy) return ! 0;
      try {
        return Date.prototype.toString.call(Vo(Date, [],
        function() {})),
        !0
      } catch(t) {
        return ! 1
      }
    } ();
    return function() {
      var t, e, n = ps(i);
      return e = o ? (t = ps(this).constructor, Vo(n, arguments, t)) : n.apply(this, arguments),
      ns(this, e)
    }
  }
  var fs = {
    width: 520,
    height: 520,
    position: [0, 0],
    backgroundColor: "#fff",
    zIndex: 0
  },
  ms = function() {
    es(s, ds);
    var o = hs(s);
    function s(t, e) {
      var n, i;
      return No(this, s),
      (i = o.call(this, t)).options = vi(fs),
      ls((n = Qo(i), ps(s.prototype)), "updateOptions", n).call(n, e),
      i
    }
    return Yo(s, [{
      key: "update",
      value: function() {
        ls(ps(s.prototype), "setWidth", this).call(this, this.options.width),
        ls(ps(s.prototype), "setHeight", this).call(this, this.options.height),
        ls(ps(s.prototype), "setPosition", this).call(this, this.options.position),
        ls(ps(s.prototype), "setZIndex", this).call(this, this.options.zIndex)
      }
    },
    {
      key: "render",
      value: function(t) {
        t.save(),
        t.fillStyle = this.options.backgroundColor,
        t.fillRect(this.position[0], this.position[1], this.width, this.height),
        t.restore()
      }
    },
    {
      key: "event",
      value: function() {}
    },
    {
      key: "destroy",
      value: function() {}
    }]),
    s
  } ();
  function vs(i) {
    var o = function() {
      if ("undefined" == typeof Reflect || !Vo) return ! 1;
      if (Vo.sham) return ! 1;
      if ("function" == typeof Proxy) return ! 0;
      try {
        return Date.prototype.toString.call(Vo(Date, [],
        function() {})),
        !0
      } catch(t) {
        return ! 1
      }
    } ();
    return function() {
      var t, e, n = ps(i);
      return e = o ? (t = ps(this).constructor, Vo(n, arguments, t)) : n.apply(this, arguments),
      ns(this, e)
    }
  }
  var gs = {
    width: 100,
    height: 100,
    position: [0, 0],
    zIndex: 1,
    lineType: "dashed"
  },
  ys = function() {
    es(s, ds);
    var o = vs(s);
    function s(t, e) {
      var n, i;
      return No(this, s),
      (i = o.call(this, t)).options = vi(gs),
      ls((n = Qo(i), ps(s.prototype)), "updateOptions", n).call(n, e),
      i
    }
    return Yo(s, [{
      key: "update",
      value: function() {}
    },
    {
      key: "render",
      value: function(t) {
        if (!this.scene.options.edit.grid) return ! 1;
        t.save();
        var e = window.devicePixelRatio * this.scene.options.scale * this.scene.options.zoom,
        n = window.devicePixelRatio * this.scene.options.zoom;
        t.strokeStyle = "#897a00",
        t.lineWidth = Math.max(1 / n, .1),
        "solid" === this.options.lineType ? t.setLineDash([1, 1]) : "dashed" === this.options.lineType ? t.setLineDash([8 / n, 4 / n]) : t.setLineDash([this.options.lineType[0] / n, this.options.lineType[1] / n]),
        t.beginPath();
        for (var i = -this.scene.options.translate[1] / e, o = 0; o < this.options.width; o++) o % Math.floor(60 / n) == 0 && 0 !== o && (t.moveTo(o, 0), t.lineTo(o, this.options.height));
        t.stroke(),
        t.beginPath(),
        t.textAlign = "left",
        t.textBaseline = "top";
        for (var s = -this.scene.options.translate[0] / e, a = 0; a < this.options.height; a++) a % Math.floor(60 / n) == 0 && 0 !== a && (t.moveTo(0, a), t.lineTo(this.options.width, a));
        t.stroke(),
        t.beginPath();
        for (var r = 0; r < this.options.width; r++) r % Math.floor(6 / n) == 0 && 0 !== r && (t.moveTo(r, i), t.lineTo(r, 4 / n + i));
        t.stroke(),
        t.beginPath();
        for (var c = 0; c < this.options.width; c++) c % Math.floor(6 / n) == 0 && 0 !== c && (t.moveTo(s, c), t.lineTo(4 / n + s, c));
        t.stroke(),
        t.fillStyle = "#785500",
        t.textAlign = "left",
        t.textBaseline = "top",
        t.font = "normal normal normal ".concat(12 / n, "px Microsoft YaHei UI");
        for (var p = 0; p < this.options.width; p++) p % Math.floor(60 / n) == 0 && 0 !== p && t.fillText(p + "", p + 2.5 / n, 10 / n + i);
        for (var u = 0; u < this.options.height; u++) u % Math.floor(60 / n) == 0 && 0 !== u ? t.fillText(u + "", 10 / n + s, u + 10 / n) : 0 === u && t.fillText(u + "", 10 / n, 10 / n);
        t.restore()
      }
    },
    {
      key: "event",
      value: function() {}
    },
    {
      key: "destroy",
      value: function() {}
    }]),
    s
  } (),
  xs = qt.indexOf,
  bs = [].indexOf,
  ws = !!bs && 1 / [1].indexOf(1, -0) < 0,
  Ds = Ce("indexOf"),
  Ss = Fe("indexOf", {
    ACCESSORS: !0,
    1 : 0
  });
  D({
    target: "Array",
    proto: !0,
    forced: ws || !Ds || !Ss
  },
  {
    indexOf: function(t, e) {
      return ws ? bs.apply(this, arguments) || 0 : xs(this, t, 1 < arguments.length ? e: void 0)
    }
  });
  var ks = Qe("Array").indexOf,
  As = Array.prototype,
  Os = function(t) {
    var e = t.indexOf;
    return t === As || t instanceof Array && e === As.indexOf ? ks: e
  },
  Ps = Qe("Array").keys,
  Es = Array.prototype,
  Ts = {
    DOMTokenList: !0,
    NodeList: !0
  },
  js = function(t) {
    var e = t.keys;
    return t === Es || t instanceof Array && e === Es.keys || Ts.hasOwnProperty(ge(t)) ? Ps: e
  },
  Is = yn("splice"),
  Ms = Fe("splice", {
    ACCESSORS: !0,
    0 : 0,
    1 : 2
  }),
  Ls = Math.max,
  Hs = Math.min;
  D({
    target: "Array",
    proto: !0,
    forced: !Is || !Ms
  },
  {
    splice: function(t, e) {
      var n, i, o, s, a, r, c = wt(this),
      p = Bt(c.length),
      u = Ft(t, p),
      l = arguments.length;
      if (0 === l ? n = i = 0 : i = 1 === l ? (n = 0, p - u) : (n = l - 2, Hs(Ls(Ct(e), 0), p - u)), 9007199254740991 < p + n - i) throw TypeError("Maximum allowed length exceeded");
      for (o = Re(c, i), s = 0; s < i; s++)(a = u + s) in c && un(o, s, c[a]);
      if (n < (o.length = i)) {
        for (s = u; s < p - i; s++) r = s + n,
        (a = s + i) in c ? c[r] = c[a] : delete c[r];
        for (s = p; p - i + n < s; s--) delete c[s - 1]
      } else if (i < n) for (s = p - i; u < s; s--) r = s + n - 1,
      (a = s + i - 1) in c ? c[r] = c[a] : delete c[r];
      for (s = 0; s < n; s++) c[s + u] = arguments[s + 2];
      return c.length = p - i + n,
      o
    }
  });
  var Rs = Qe("Array").splice,
  zs = Array.prototype,
  Cs = function(t) {
    var e = t.splice;
    return t === zs || t instanceof Array && e === zs.splice ? Rs: e
  },
  Bs = {
    mouse: {
      drag: {
        cursor: {
        default:
          null,
          active: null
        }
      }
    },
    on: {
      resize: null,
      drag: null,
      keyup: null,
      click: null,
      move: null
    },
    filterComponent: ["Grid", "Background", "Lines"]
  },
  Fs = function() {
    function i(t, e) {
      var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      No(this, i),
      this.options = vi(Bs),
      this.element = n,
      this.scene = e,
      this.x = 0,
      this.y = 0,
      this.clickActive = !1,
      this.dragActive = !1,
      this.keys = [],
      this.inter = {
        click: -1,
        drag: -1
      },
      this.eventList = [],
      this.updateOptions(t)
    }
    return Yo(i, [{
      key: "getMouseX",
      value: function() {
        return this.x
      }
    },
    {
      key: "getMouseY",
      value: function() {
        return this.y
      }
    },
    {
      key: "getMouseClickActive",
      value: function() {
        return this.clickActive
      }
    },
    {
      key: "getMouseDragActive",
      value: function() {
        return this.dragActive
      }
    },
    {
      key: "init",
      value: function() {
        this.element && this.mount(this.element)
      }
    },
    {
      key: "mount",
      value: function(t) {
        if (!bi(t)) throw new Error("事件元素挂载失败，传入元素为: ".concat(t));
        this.element = t,
        this.resize(),
        this.addEvent("resize", this.resize, this, window),
        this.element.style.cursor = this.options.mouse.drag.cursor.
      default,
        this.addEvent("mousedown", this.dragHandle),
        this.addEvent("mousewheel", this.zoomHandle),
        this.addEvent("keydown", this.keydownHandle, this, window),
        this.addEvent("keyup", this.keyUpHandle, this, window),
        this.addEvent("click", this.mouseClickHandle),
        this.addEvent("mousemove", this.mousemoveHandle)
      }
    },
    {
      key: "updateOptions",
      value: function(t) {
        this.options = gi(this.options, t)
      }
    },
    {
      key: "addEvent",
      value: function(t, e, n, i) {
        var o;
        n = n || this,
        (i = bi(i) || i === window || i === document ? i: this.element) && (o = Wo(e).call(e, n), i.addEventListener(t, o), this.eventList.push({
          eventName: t,
          handle: e,
          context: n,
          _handle: o
        }), "mousewheel" === t && this.addEvent("DOMMouseScroll", e, n, i))
      }
    },
    {
      key: "removeEvent",
      value: function(t, e, n, i) {
        var o, s, a, r;
        n = n || this,
        (i = bi(i) || i === window || i === document ? i: this.element) && (s = (o = this.findEventInList(t, e, n)).targetEventListItem, null !== (a = o.targetEventListItemIndex) && null !== s && (Cs(r = this.eventList).call(r, a, 1), i.removeEventListener(t, s._handle), "mousewheel" === t && this.removeEvent("DOMMouseScroll", e, n, i)))
      }
    },
    {
      key: "findEventInList",
      value: function(t, e, n) {
        for (var i = null,
        o = null,
        s = 0; s < this.eventList.length; s++) {
          var a = this.eventList[s];
          if (a.eventName === t && a.context === n && a.handle === e) {
            o = s,
            i = a;
            break
          }
        }
        return {
          targetEventListItem: i,
          targetEventListItemIndex: o
        }
      }
    },
    {
      key: "resize",
      value: function(t) {
        var e;
        this.scene.state.mounted ? (clearTimeout(this.inter.resize), this.inter.resize = Ai(Wo(e = this.resizeHandle).call(e, this, t), 100)) : this.resizeHandle(t)
      }
    },
    {
      key: "resizeHandle",
      value: function() {
        var t, e, n = this; ! this.element || (t = this.element.parentNode) && (e = window.getComputedStyle(this.element, null).transition, this.scene.state.mounted || (this.element.style.transition = null), this.element.style.transform = "scale(".concat(t.offsetWidth / this.element.offsetWidth, ")"), clearTimeout(this.inter.resizeTransition), this.inter.resizeTransition = Ai(function() {
          return n.element && (n.element.style.transition = e)
        },
        200)),
        this.options.on.resize && this.options.on.resize(this.scene)
      }
    },
    {
      key: "dragHandle",
      value: function(i) {
        var o = this,
        s = i.offsetX,
        a = i.offsetY;
        this.element.style.cursor = this.options.mouse.drag.cursor.active;
        function e(t) {
          o.dragActive = !0;
          var e = t.offsetX - s,
          n = t.offsetY - a;
          s = t.offsetX,
          a = t.offsetY,
          o.outRangeHandle([o.scene.options.translate[0] + e, o.scene.options.translate[1] + n]),
          o.mousemoveHandle(i),
          o.options.on.drag && o.options.on.drag(o.x, o.y, o)
        }
        document.addEventListener("mousemove", e),
        document.addEventListener("mouseup",
        function t() {
          o.element.style.cursor = o.options.mouse.drag.cursor.
        default,
          document.removeEventListener("mousemove", e),
          document.removeEventListener("mouseup", t),
          o.mousemoveHandle(i),
          o.options.on.drag && o.options.on.drag(o.x, o.y, o),
          clearTimeout(o.inter.drag),
          o.inter.drag = Ai(function() {
            o.dragActive = !1
          },
          200)
        })
      }
    },
    {
      key: "zoomHandle",
      value: function(t) {
        var e = 0;
        t.wheelDelta ? (e = t.wheelDelta / 120, window.opera && (e = -e)) : t.detail && (e = -t.detail / 3);
        var n = this.scene.options.zoom,
        i = this.scene.options.zoom + .2 * e;
        this.scene.options.zoom = Math.min(this.scene.options.zoomMax, Math.max(this.scene.options.zoomMin, i));
        var o = this.scene.options.translate[0],
        s = this.scene.options.translate[1],
        a = (t.offsetX * this.scene.devicePixelRatio - o) / (this.scene.options.width * this.scene.options.scale * n * this.scene.devicePixelRatio) * (this.scene.options.width * this.scene.options.scale * this.scene.options.zoom * this.scene.devicePixelRatio) - (t.offsetX * this.scene.devicePixelRatio - o),
        r = (t.offsetY * this.scene.devicePixelRatio - s) / (this.scene.options.height * this.scene.options.scale * n * this.scene.devicePixelRatio) * (this.scene.options.height * this.scene.options.scale * this.scene.options.zoom * this.scene.devicePixelRatio) - (t.offsetY * this.scene.devicePixelRatio - s);
        this.outRangeHandle([o - a, s - r])
      }
    },
    {
      key: "outRangeHandle",
      value: function(t) {
        0 < (t = t || [this.scene.options.translate[0], this.scene.options.translate[1]])[0] && (t[0] = 0),
        0 < t[1] && (t[1] = 0);
        var e = this.scene.options.width * this.scene.options.scale * this.scene.devicePixelRatio * (this.scene.options.zoom - 1),
        n = this.scene.options.height * this.scene.options.scale * this.scene.devicePixelRatio * (this.scene.options.zoom - 1);
        t[0] < -e && (t[0] = -e),
        t[1] < -n && (t[1] = -n),
        this.scene.options.translate = t
      }
    },
    {
      key: "keydownHandle",
      value: function(t) {
        js(this).push(t.keyCode)
      }
    },
    {
      key: "keyUpHandle",
      value: function() {
        this.inEditingHandle(),
        this.keys = []
      }
    },
    {
      key: "mouseClickHandle",
      value: function(t) {
        var i = this;
        if (this.dragActive) return ! 1;
        this.mousemoveHandle(t),
        this.clickActive = !0,
        clearTimeout(this.inter.click),
        this.inter.click = Ai(function() {
          var t;
          i.clickActive = !1;
          var n = [];
          en(t = i.scene.components).call(t,
          function(t) {
            var e;
            Ni([t.
          case.getPosition()[0] - t.
          case.getWidth() / 2, t.
          case.getPosition()[1] - t.
          case.getHeight() / 2], [t.
          case.getPosition()[0] + t.
          case.getWidth() / 2, t.
          case.getPosition()[1] + t.
          case.getHeight() / 2], i.x, i.y) && -1 === Os(e = i.options.filterComponent).call(e, t.type) && n.push(t)
          }),
          i.options.on.click && i.options.on.click(n, {
            x: i.x,
            y: i.y,
            e: i
          })
        },
        200)
      }
    },
    {
      key: "mousemoveHandle",
      value: function(t) {
        this.x = (t.offsetX * this.scene.devicePixelRatio - this.scene.options.translate[0]) / (this.scene.options.zoom * this.scene.options.scale * this.scene.devicePixelRatio),
        this.y = (t.offsetY * this.scene.devicePixelRatio - this.scene.options.translate[1]) / (this.scene.options.zoom * this.scene.options.scale * this.scene.devicePixelRatio),
        this.options.on.move && this.options.on.move(this.x, this.y, this)
      }
    },
    {
      key: "inEditingHandle",
      value: function() {
        var t, n = [17, 18, 69],
        e = [];
        en(t = js(this)).call(t,
        function(t) { - 1 === Os(e).call(e, t) && e.push(t)
        });
        var i = !0;
        e.length !== n.length ? i = !1 : en(e).call(e,
        function(t, e) {
          t !== n[e] && (i = !1)
        }),
        i && (this.scene.options.edit.enable = !this.scene.options.edit.enable, this.scene.editingHandle()),
        this.options.on.keyup && this.options.on.keyup(e)
      }
    },
    {
      key: "destroy",
      value: function() {
        this.removeEvent("resize", this.resize, this, window),
        this.removeEvent("mousedown", this.dragHandle),
        this.removeEvent("mousewheel", this.zoomHandle),
        this.removeEvent("keydown", this.keydownHandle, this, window),
        this.removeEvent("keyup", this.keyUpHandle, this, window),
        this.removeEvent("click", this.mouseClickHandle),
        this.removeEvent("mousemove", this.mousemoveHandle)
      }
    }]),
    i
  } ();
  D({
    target: "Array",
    proto: !0
  },
  {
    fill: function(t, e, n) {
      for (var i = wt(this), o = Bt(i.length), s = arguments.length, a = Ft(1 < s ? e: void 0, o), r = 2 < s ? n: void 0, c = void 0 === r ? o: Ft(r, o); a < c;) i[a++] = t;
      return i
    }
  });
  var Ws = Qe("Array").fill,
  Ns = Array.prototype,
  _s = function(t) {
    var e = t.fill;
    return t === Ns || t instanceof Array && e === Ns.fill ? Ws: e
  };
  function Gs(i) {
    var o = function() {
      if ("undefined" == typeof Reflect || !Vo) return ! 1;
      if (Vo.sham) return ! 1;
      if ("function" == typeof Proxy) return ! 0;
      try {
        return Date.prototype.toString.call(Vo(Date, [],
        function() {})),
        !0
      } catch(t) {
        return ! 1
      }
    } ();
    return function() {
      var t, e, n = ps(i);
      return e = o ? (t = ps(this).constructor, Vo(n, arguments, t)) : n.apply(this, arguments),
      ns(this, e)
    }
  }
  var Ys = {
    width: 52,
    height: 52,
    color: "#0096cb",
    borderColor: "#0096cb"
  },
  Zs = function() {
    es(o, ds);
    var i = Gs(o);
    function o(t, e) {
      var n;
      return No(this, o),
      (n = i.call(this, t)).options = vi(Ys),
      n.ctx = null,
      n.updateOptions(e),
      n
    }
    return Yo(o, [{
      key: "updateOptions",
      value: function(t) {
        ls(ps(o.prototype), "updateOptions", this).call(this, t),
        this.ctx = null,
        this.ctx = Fi({
          width: this.getWidth(),
          height: this.getHeight(),
          dpr: this.scene.devicePixelRatio
        }).getContext("2d")
      }
    },
    {
      key: "update",
      value: function() {}
    },
    {
      key: "render",
      value: function() {
        var t;
        this.ctx.save(),
        this.ctx.scale(this.scene.devicePixelRatio, this.scene.devicePixelRatio),
        this.ctx.fillStyle = this.options.color;
        var e = this.getWidth() / 2,
        n = this.getHeight() / 2,
        i = Math.min(e, n);
        this.ctx.beginPath(),
        this.ctx.arc(e, n, .8 * i, 0, 2 * Math.PI),
        _s(t = this.ctx).call(t),
        this.ctx.strokeStyle = this.options.borderColor,
        this.ctx.stroke(),
        this.ctx.restore()
      }
    },
    {
      key: "event",
      value: function() {}
    },
    {
      key: "destroy",
      value: function() {}
    }]),
    o
  } ();
  function Us(i) {
    var o = function() {
      if ("undefined" == typeof Reflect || !Vo) return ! 1;
      if (Vo.sham) return ! 1;
      if ("function" == typeof Proxy) return ! 0;
      try {
        return Date.prototype.toString.call(Vo(Date, [],
        function() {})),
        !0
      } catch(t) {
        return ! 1
      }
    } ();
    return function() {
      var t, e, n = ps(i);
      return e = o ? (t = ps(this).constructor, Vo(n, arguments, t)) : n.apply(this, arguments),
      ns(this, e)
    }
  }
  var Js = {
    text: "",
    width: 128,
    height: 40,
    position: [0, 0],
    borderColor: "#2780ff",
    borderRadius: 6,
    backgroundColor: "#e9f3fc",
    boxShadow: {
      color: "rgba(0,61,113,0.69)",
      blur: 6,
      offsetX: 0,
      offsetY: 3
    },
    textShadow: {
      color: "rgba(0,61,113,0.69)",
      blur: 6,
      offsetX: 0,
      offsetY: 3
    },
    font: {
      size: 24,
      color: "#0069f6"
    },
    zIndex: 52
  },
  Xs = function() {
    es(s, ds);
    var o = Us(s);
    function s(t, e) {
      var n, i;
      return No(this, s),
      (i = o.call(this, t)).options = vi(Js),
      ls((n = Qo(i), ps(s.prototype)), "updateOptions", n).call(n, e),
      i
    }
    return Yo(s, [{
      key: "update",
      value: function() {}
    },
    {
      key: "event",
      value: function(t) {
        var e = this;
        Ni([this.getPosition()[0] - this.getWidth() / 2, this.getPosition()[1] - this.getHeight() / 2], [this.getPosition()[0] + this.getWidth() / 2, this.getPosition()[1] + this.getHeight() / 2], t.x, t.y) && (this.scene.element.style.cursor = "pointer", clearTimeout(this._cursor_inter), this._cursor_inter = Ai(function() {
          e.scene.element.style.cursor = e.scene.options.mouse.drag.cursor.
        default
        },
        20))
      }
    },
    {
      key: "render",
      value: function(t) {
        t.save(),
        t.textBaseline = "middle",
        t.textAlign = "center",
        t.font = "normal normal normal ".concat(this.options.font.size, "px Microsoft YaHei UI"),
        this.setWidth(Math.max(t.measureText(this.options.text).width + 32, this.getWidth())),
        t.translate.apply(t, Ho(this.getPosition()));
        var e = -this.getWidth() / 2,
        n = -this.getHeight() / 2,
        i = this.getWidth() / 2,
        o = this.getHeight() / 2;
        t.beginPath(),
        t.fillStyle = this.options.backgroundColor,
        t.strokeStyle = this.options.borderColor;
        var s = this.options.borderRadius;
        t.moveTo(e + s, n),
        t.lineTo(i - s, n),
        t.arc(i - s, n + s, s, 1.5 * Math.PI, 2 * Math.PI),
        t.lineTo(i, o - s),
        t.arc(i - s, o - s, s, 0, .5 * Math.PI),
        t.lineTo(e + s, o),
        t.arc(e + s, o - s, s, .5 * Math.PI, Math.PI),
        t.lineTo(e, n + s),
        t.arc(e + s, n + s, s, Math.PI, 1.5 * Math.PI),
        _s(t).call(t),
        t.shadowBlur = this.options.boxShadow.blur,
        t.shadowColor = this.options.boxShadow.color,
        t.shadowOffsetX = this.options.boxShadow.offsetX,
        t.shadowOffsetY = this.options.boxShadow.offsetY,
        t.stroke(),
        t.fillStyle = this.options.font.color,
        t.shadowBlur = this.options.textShadow.blur,
        t.shadowColor = this.options.textShadow.color,
        t.shadowOffsetX = this.options.textShadow.offsetX,
        t.shadowOffsetY = this.options.textShadow.offsetY,
        t.fillText(this.options.text, 0, 0),
        t.restore()
      }
    },
    {
      key: "destroy",
      value: function() {}
    }]),
    s
  } ();
  function Vs(i) {
    var o = function() {
      if ("undefined" == typeof Reflect || !Vo) return ! 1;
      if (Vo.sham) return ! 1;
      if ("function" == typeof Proxy) return ! 0;
      try {
        return Date.prototype.toString.call(Vo(Date, [],
        function() {})),
        !0
      } catch(t) {
        return ! 1
      }
    } ();
    return function() {
      var t, e, n = ps(i);
      return e = o ? (t = ps(this).constructor, Vo(n, arguments, t)) : n.apply(this, arguments),
      ns(this, e)
    }
  }
  function Qs(t, e, n) {
    if (! (t instanceof e)) throw TypeError("Incorrect " + (n ? n + " ": "") + "invocation");
    return t
  }
  function qs(t, e, n) {
    for (var i in e) n && n.unsafe && t[i] ? t[i] = e[i] : le(t, i, e[i], n);
    return t
  }
  var Ks, $s, ta, ea, na, ia, oa, sa, aa, ra, ca, pa = {
    name: "",
    width: 106,
    height: 106,
    position: [0, 0],
    symbol: "circle",
    zIndex: 2,
    extData: null
  },
  ua = function() {
    es(i, ds);
    var n = Vs(i);
    function i(t) {
      var e;
      return No(this, i),
      (e = n.call(this, t)).options = vi(pa),
      e.symbol = null,
      e.label = null,
      e
    }
    return Yo(i, [{
      key: "updateOptions",
      value: function(t) {
        this.options = yi(vi(pa), t),
        ls(ps(i.prototype), "updateOptions", this).call(this, t),
        this.options.symbol && fi(this.options.symbol) ? (this.symbol = new Image, this.symbol.setAttribute("src", this.options.symbol.image)) : "circle" === this.options.symbol ? this.symbol = new Zs(this.scene, this.options) : this.symbol = null,
        this.label || (this.label = new Xs(this.scene), this.scene.components.push({
          type: "Label",
        case:
          this.label
        }));
        var e = {}; - 1 === this.options.state && (e = {
          backgroundColor: "#ccc",
          borderColor: "#ccc",
          font: {
            color: "#e5e5e5"
          }
        }),
        this.label.updateOptions(yi({
          position: [this.getPosition()[0], this.getPosition()[1] + this.getHeight() / 2 + 32],
          text: this.options.name
        },
        e))
      }
    },
    {
      key: "update",
      value: function() {}
    },
    {
      key: "render",
      value: function(t) {
        t.save(),
        t.translate.apply(t, Ho(this.options.position));
        var e = null;
        this.symbol && 1 === this.symbol.nodeType ? e = this.options.symbol.gray ? _i(this.symbol) : this.symbol: this.symbol && "object" === di(this.symbol) && (this.symbol.render(), e = this.symbol.ctx.canvas),
        e && t.drawImage(e, -this.getWidth() / 2, -this.getHeight() / 2, this.getWidth(), this.getHeight()),
        t.restore()
      }
    },
    {
      key: "event",
      value: function() {}
    },
    {
      key: "destroy",
      value: function() {}
    }]),
    i
  } (),
  la = Qe("Array").concat,
  da = Array.prototype,
  ha = function(t) {
    var e = t.concat;
    return t === da || t instanceof Array && e === da.concat ? la: e
  },
  fa = !a(function() {
    return Object.isExtensible(Object.preventExtensions({}))
  }),
  ma = e(function(t) {
    function n(t) {
      e(t, i, {
        value: {
          objectID: "O" + ++o,
          weakData: {}
        }
      })
    }
    var e = G.f,
    i = nt("meta"),
    o = 0,
    s = Object.isExtensible ||
    function() {
      return ! 0
    },
    a = t.exports = {
      REQUIRED: !1,
      fastKey: function(t, e) {
        if (!O(t)) return "symbol" == typeof t ? t: ("string" == typeof t ? "S": "P") + t;
        if (!E(t, i)) {
          if (!s(t)) return "F";
          if (!e) return "E";
          n(t)
        }
        return t[i].objectID
      },
      getWeakData: function(t, e) {
        if (!E(t, i)) {
          if (!s(t)) return ! 0;
          if (!e) return ! 1;
          n(t)
        }
        return t[i].weakData
      },
      onFreeze: function(t) {
        return fa && a.REQUIRED && s(t) && !E(t, i) && n(t),
        t
      }
    };
    xt[i] = !0
  }),
  va = (ma.REQUIRED, ma.fastKey, ma.getWeakData, ma.onFreeze, e(function(t) {
    function h(t, e) {
      this.stopped = t,
      this.result = e
    } (t.exports = function(t, e, n, i, o) {
      var s, a, r, c, p, u, l, d = w(e, n, i ? 2 : 1);
      if (o) s = t;
      else {
        if ("function" != typeof(a = po(t))) throw TypeError("Target is not iterable");
        if (co(a)) {
          for (r = 0, c = Bt(t.length); r < c; r++) if ((p = i ? d(N(l = t[r])[0], l[1]) : d(t[r])) && p instanceof h) return p;
          return new h(!1)
        }
        s = a.call(t)
      }
      for (u = s.next; ! (l = u.call(s)).done;) if ("object" == typeof(p = ro(s, d, l.value, i)) && p && p instanceof h) return p;
      return new h(!1)
    }).stop = function(t) {
      return new h(!0, t)
    }
  })),
  ga = G.f,
  ya = Ge.forEach,
  xa = Ot.set,
  ba = Ot.getterFor,
  wa = Dt("species"),
  Da = G.f,
  Sa = ma.fastKey,
  ka = Ot.set,
  Aa = Ot.getterFor,
  Oa = ($s = function(e) {
    return function(t) {
      return e(this, arguments.length ? t: void 0)
    }
  },
  ta = {
    getConstructor: function(t, n, i, o) {
      function s(t, e, n) {
        var i, o, s = r(t),
        a = c(t, e);
        return a ? a.value = n: (s.last = a = {
          index: o = Sa(e, !0),
          key: e,
          value: n,
          previous: i = s.last,
          next: void 0,
          removed: !1
        },
        s.first || (s.first = a), i && (i.next = a), f ? s.size++:t.size++, "F" !== o && (s.index[o] = a)),
        t
      }
      var a = t(function(t, e) {
        Qs(t, a, n),
        ka(t, {
          type: n,
          index: re(null),
          first: void 0,
          last: void 0,
          size: 0
        }),
        f || (t.size = 0),
        null != e && va(e, t[o], t, i)
      }),
      r = Aa(n),
      c = function(t, e) {
        var n, i = r(t),
        o = Sa(e);
        if ("F" !== o) return i.index[o];
        for (n = i.first; n; n = n.next) if (n.key == e) return n
      };
      return qs(a.prototype, {
        clear: function() {
          for (var t = r(this), e = t.index, n = t.first; n;) n.removed = !0,
          n.previous && (n.previous = n.previous.next = void 0),
          delete e[n.index],
          n = n.next;
          t.first = t.last = void 0,
          f ? t.size = 0 : this.size = 0
        },
        delete: function(t) {
          var e, n, i = r(this),
          o = c(this, t);
          return o && (e = o.next, n = o.previous, delete i.index[o.index], o.removed = !0, n && (n.next = e), e && (e.previous = n), i.first == o && (i.first = e), i.last == o && (i.last = n), f ? i.size--:this.size--),
          !!o
        },
        forEach: function(t, e) {
          for (var n, i = r(this), o = w(t, 1 < arguments.length ? e: void 0, 3); n = n ? n.next: i.first;) for (o(n.value, n.key, this); n && n.removed;) n = n.previous
        },
        has: function(t) {
          return !! c(this, t)
        }
      }),
      qs(a.prototype, i ? {
        get: function(t) {
          var e = c(this, t);
          return e && e.value
        },
        set: function(t, e) {
          return s(this, 0 === t ? 0 : t, e)
        }
      }: {
        add: function(t) {
          return s(this, t = 0 === t ? 0 : t, t)
        }
      }),
      f && Da(a.prototype, "size", {
        get: function() {
          return r(this).size
        }
      }),
      a
    },
    setStrong: function(t, e, n) {
      var i, o, s = e + " Iterator",
      a = Aa(e),
      r = Aa(s);
      he(t, e,
      function(t, e) {
        ka(this, {
          type: s,
          target: t,
          state: a(t),
          kind: e,
          last: void 0
        })
      },
      function() {
        for (var t = r(this), e = t.kind, n = t.last; n && n.removed;) n = n.previous;
        return t.target && (t.last = n = n ? n.next: t.state.first) ? "keys" == e ? {
          value: n.key,
          done: !1
        }: "values" == e ? {
          value: n.value,
          done: !1
        }: {
          value: [n.key, n.value],
          done: !1
        }: {
          value: t.target = void 0,
          done: !0
        }
      },
      n ? "entries": "values", !n, !0),
      i = d(e),
      o = G.f,
      f && i && !i[wa] && o(i, wa, {
        configurable: !0,
        get: function() {
          return this
        }
      })
    }
  },
  ia = -1 !== (Ks = "Map").indexOf("Map"), oa = -1 !== Ks.indexOf("Weak"), sa = ia ? "set": "add", aa = y[Ks], ra = aa && aa.prototype, ca = {},
  f && "function" == typeof aa && (oa || ra.forEach && !a(function() { (new aa).entries().next()
  })) ? (ea = $s(function(t, e) {
    xa(Qs(t, ea, Ks), {
      type: Ks,
      collection: new aa
    }),
    null != e && va(e, t[sa], t, ia)
  }), na = ba(Ks), ya(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"],
  function(o) {
    var s = "add" == o || "set" == o;
    o in ra && (!oa || "clear" != o) && Y(ea.prototype, o,
    function(t, e) {
      var n = na(this).collection;
      if (!s && oa && !O(t)) return "get" == o && void 0;
      var i = n[o](0 === t ? 0 : t, e);
      return s ? this: i
    })
  }), oa || ga(ea.prototype, "size", {
    configurable: !0,
    get: function() {
      return na(this).collection.size
    }
  })) : (ea = ta.getConstructor($s, Ks, ia, sa), ma.REQUIRED = !0), pe(ea, Ks, !1, !0), ca[Ks] = ea, D({
    global: !0,
    forced: !0
  },
  ca), oa || ta.setStrong(ea, Ks, ia), new W.Map);
  Oa.set("快速入所", {
    id: 0,
    icon: "快速入所.png"
  }),
  Oa.set("验证收回", {
    id: 1,
    icon: "验证收回.png"
  }),
  Oa.set("收回登记", {
    id: 2,
    icon: "收回登记.png"
  }),
  Oa.set("健康检查", {
    id: 3,
    icon: "健康检查.png"
  }),
  Oa.set("所领导意见", {
    id: 4,
    icon: "所领导意见.png"
  }),
  Oa.set("暂不收押", {
    id: 5,
    icon: "暂不收押.png"
  }),
  Oa.set("收押开证", {
    id: 6,
    icon: "收押开证.png"
  }),
  Oa.set("附物登记", {
    id: 7,
    icon: "附物登记.png"
  }),
  Oa.set("入所登记", {
    id: 8,
    icon: "入所登记.png"
  }),
  Oa.set("告知", {
    id: 9,
    icon: "告知.png"
  }),
  Oa.set("生物特征", {
    id: 10,
    icon: "生物特征.png"
  }),
  Oa.set("今日出所", {
    id: 11,
    icon: "今日出所.png"
  }),
  Oa.set("文书补打", {
    id: 12,
    icon: "文书补打.png"
  }),
  Oa.set("附物/财务退还", {
    id: 13,
    icon: "附物或财物退还.png"
  }),
  Oa.set("回所确认", {
    id: 14,
    icon: "回所确认.png"
  }),
  Oa.set("鉴定", {
    id: 15,
    icon: "鉴定.png"
  }),
  Oa.set("审查担保", {
    id: 16,
    icon: "审查担保.png"
  }),
  Oa.set("证件核对", {
    id: 17,
    icon: "证件核对.png"
  }),
  Oa.set("变更羁押期限", {
    id: 18,
    icon: "变更羁押期限.png"
  }),
  Oa.set("回执", {
    id: 19,
    icon: "回执.png"
  }),
  Oa.set("执行", {
    id: 20,
    icon: "执行.png"
  }),
  Oa.set("退讯", {
    id: 21,
    icon: "退讯.png"
  }),
  Oa.set("信件寄出处理", {
    id: 22,
    icon: "信件寄出处理.png"
  }),
  Oa.set("人员维护", {
    id: 23,
    icon: "人员维护.png"
  }),
  Oa.set("材料转递", {
    id: 24,
    icon: "材料转递.png"
  }),
  Oa.set("政策兑现", {
    id: 25,
    icon: "政策兑现.png"
  }),
  Oa.set("接班", {
    id: 26,
    icon: "接班.png"
  }),
  Oa.set("领导查看-重病号查询", {
    id: 27,
    icon: "领导查看-重病号查询.png"
  }),
  Oa.set("联系家属", {
    id: 28,
    icon: "联系家属.png"
  }),
  Oa.set("武器归还", {
    id: 29,
    icon: "武器归还.png"
  }),
  Oa.set("带出监室", {
    id: 30,
    icon: "带出监室.png"
  }),
  Oa.set("重病号分布图", {
    id: 31,
    icon: "重病号分布图.png"
  }),
  Oa.set("邮寄家属", {
    id: 32,
    icon: "邮寄家属.png"
  }),
  Oa.set("前台办理", {
    id: 33,
    icon: "前台办理.png"
  }),
  Oa.set("安检机安检", {
    id: 34,
    icon: "安检机安检.png"
  }),
  Oa.set("管教送物", {
    id: 35,
    icon: "管教送物.png"
  }),
  Oa.set("另行处理", {
    id: 36,
    icon: "另行处理.png"
  }),
  Oa.set("保证金收取", {
    id: 37,
    icon: "保证金收取.png"
  }),
  Oa.set("已请假人员", {
    id: 38,
    icon: "已请假人员.png"
  }),
  Oa.set("错录人员删除", {
    id: 39,
    icon: "错录人员删除.png"
  }),
  Oa.set("误出所人员恢复", {
    id: 40,
    icon: "误出所人员恢复.png"
  }),
  Oa.set("信息员管理", {
    id: 41,
    icon: "信息员管理.png"
  }),
  Oa.set("查证情况", {
    id: 42,
    icon: "查证情况.png"
  }),
  Oa.set("处理情况", {
    id: 43,
    icon: "处理情况.png"
  }),
  Oa.set("日常清监", {
    id: 44,
    icon: "日常清监.png"
  }),
  Oa.set("所领导讲评", {
    id: 45,
    icon: "所领导讲评.png"
  }),
  Oa.set("验证登记", {
    id: 46,
    icon: "收回登记.png"
  }),
  Oa.set("安全检查", {
    id: 47,
    icon: "健康检查.png"
  }),
  Oa.set("生物特征采集", {
    id: 48,
    icon: "生物特征采集.png"
  }),
  Oa.set("接济物品", {
    id: 49,
    icon: "附物登记.png"
  }),
  Oa.set("今日出所", {
    id: 50,
    icon: "今日出所.png"
  }),
  Oa.set("出所登记", {
    id: 51,
    icon: "入所登记.png"
  }),
  Oa.set("所领导审批", {
    id: 52,
    icon: "所领导意见.png"
  }),
  Oa.set("文书补打", {
    id: 53,
    icon: "文书补打.png"
  }),
  Oa.set("出所", {
    id: 54,
    icon: "今日出所.png"
  }),
  Oa.set("出所通知", {
    id: 55,
    icon: "告知.png"
  }),
  Oa.set("附物/财务退还", {
    id: 56,
    icon: "附物或财物退还.png"
  }),
  Oa.set("临时出所登记", {
    id: 57,
    icon: "入所登记.png"
  }),
  Oa.set("领导审批", {
    id: 58,
    icon: "所领导意见.png"
  }),
  Oa.set("回所确认", {
    id: 59,
    icon: "回所确认.png"
  }),
  Oa.set("申请", {
    id: 60,
    icon: "入所登记.png"
  }),
  Oa.set("所务会意见", {
    id: 61,
    icon: "所领导意见.png"
  }),
  Oa.set("鉴定", {
    id: 62,
    icon: "鉴定.png"
  }),
  Oa.set("审查担保", {
    id: 63,
    icon: "审查担保.png"
  }),
  Oa.set("证件核对", {
    id: 64,
    icon: "证件核对.png"
  }),
  Oa.set("延期登记", {
    id: 65,
    icon: "入所登记.png"
  }),
  Oa.set("批量延期", {
    id: 66,
    icon: "入所登记.png"
  }),
  Oa.set("变更羁押期限", {
    id: 67,
    icon: "变更羁押期限.png"
  }),
  Oa.set("签收", {
    id: 68,
    icon: "入所登记.png"
  }),
  Oa.set("回执", {
    id: 69,
    icon: "回执.png"
  }),
  Oa.set("办案环节变动", {
    id: 70,
    icon: "变更羁押期限.png"
  }),
  Oa.set("结案", {
    id: 71,
    icon: "回所确认.png"
  }),
  Oa.set("执行", {
    id: 72,
    icon: "执行.png"
  }),
  Oa.set("处理结果登记", {
    id: 73,
    icon: "入所登记.png"
  }),
  Oa.set("接受纠正违法", {
    id: 74,
    icon: "执行.png"
  }),
  Oa.set("纠正违法反馈", {
    id: 75,
    icon: "回执.png"
  }),
  Oa.set("鉴定开始登记", {
    id: 76,
    icon: "入所登记.png"
  }),
  Oa.set("鉴定结束登记", {
    id: 77,
    icon: "入所登记.png"
  }),
  Oa.set("核对凭证", {
    id: 78,
    icon: "证件核对.png"
  }),
  Oa.set("提解出所登记", {
    id: 79,
    icon: "入所登记.png"
  }),
  Oa.set("监区提人登记", {
    id: 80,
    icon: "入所登记.png"
  }),
  Oa.set("提解回所安全检查", {
    id: 81,
    icon: "健康检查.png"
  }),
  Oa.set("提讯登记", {
    id: 82,
    icon: "入所登记.png"
  }),
  Oa.set("退讯", {
    id: 83,
    icon: "退讯.png"
  }),
  Oa.set("会见登记", {
    id: 84,
    icon: "入所登记.png"
  }),
  Oa.set("会见完毕安全检查", {
    id: 85,
    icon: "健康检查.png"
  }),
  Oa.set("带入监室", {
    id: 86,
    icon: "回所确认.png"
  }),
  Oa.set("登记呈报", {
    id: 87,
    icon: "入所登记.png"
  }),
  Oa.set("预约会见", {
    id: 88,
    icon: "入所登记.png"
  }),
  Oa.set("外来人员登记", {
    id: 89,
    icon: "入所登记.png"
  }),
  Oa.set("离开登记", {
    id: 90,
    icon: "入所登记.png"
  }),
  Oa.set("监室调整登记", {
    id: 91,
    icon: "入所登记.png"
  }),
  Oa.set("中队/警署意见", {
    id: 92,
    icon: "所领导意见.png"
  }),
  Oa.set("名单打印", {
    id: 93,
    icon: "文书补打.png"
  }),
  Oa.set("监室调整确定", {
    id: 94,
    icon: "所领导意见.png"
  }),
  Oa.set("主协管设置", {
    id: 95,
    icon: "入所登记.png"
  }),
  Oa.set("物建呈报", {
    id: 96,
    icon: "告知.png"
  }),
  Oa.set("撤销登记", {
    id: 97,
    icon: "入所登记.png"
  }),
  Oa.set("撤销中队长/警署意见", {
    id: 98,
    icon: "所领导意见.png"
  }),
  Oa.set("情况反馈", {
    id: 99,
    icon: "回执.png"
  }),
  Oa.set("收信登记", {
    id: 100,
    icon: "入所登记.png"
  }),
  Oa.set("信件转接处理", {
    id: 101,
    icon: "回执.png"
  }),
  Oa.set("发信登记", {
    id: 102,
    icon: "入所登记.png"
  }),
  Oa.set("处理审批", {
    id: 103,
    icon: "所领导意见.png"
  }),
  Oa.set("信件寄出处理", {
    id: 104,
    icon: "信件寄出处理.png"
  }),
  Oa.set("人员维护", {
    id: 105,
    icon: "人员维护.png"
  }),
  Oa.set("中队警组意见", {
    id: 106,
    icon: "所领导意见.png"
  }),
  Oa.set("解除呈批", {
    id: 107,
    icon: "入所登记.png"
  }),
  Oa.set("解除中队/警组意见", {
    id: 108,
    icon: "所领导意见.png"
  }),
  Oa.set("解除所领导意见", {
    id: 109,
    icon: "所领导意见.png"
  }),
  Oa.set("奖励呈批", {
    id: 110,
    icon: "入所登记.png"
  }),
  Oa.set("奖励情况登记", {
    id: 111,
    icon: "入所登记.png"
  }),
  Oa.set("处罚呈报", {
    id: 112,
    icon: "入所登记.png"
  }),
  Oa.set("所长意见", {
    id: 113,
    icon: "所领导意见.png"
  }),
  Oa.set("延长呈报", {
    id: 114,
    icon: "入所登记.png"
  }),
  Oa.set("延长所领导意见", {
    id: 115,
    icon: "所领导意见.png"
  }),
  Oa.set("解除处罚登记", {
    id: 116,
    icon: "入所登记.png"
  }),
  Oa.set("械具使用呈批", {
    id: 117,
    icon: "入所登记.png"
  }),
  Oa.set("械具使用登记", {
    id: 118,
    icon: "入所登记.png"
  }),
  Oa.set("械具提前解除", {
    id: 119,
    icon: "入所登记.png"
  }),
  Oa.set("延长中队/警署意见", {
    id: 120,
    icon: "所领导意见.png"
  }),
  Oa.set("延长或提前解除呈报", {
    id: 121,
    icon: "入所登记.png"
  }),
  Oa.set("线索登记", {
    id: 122,
    icon: "入所登记.png"
  }),
  Oa.set("线索登记表打印", {
    id: 123,
    icon: "入所登记.png"
  }),
  Oa.set("材料转递", {
    id: 124,
    icon: "材料转递.png"
  }),
  Oa.set("转递反馈", {
    id: 125,
    icon: "回执.png"
  }),
  Oa.set("政策兑现", {
    id: 126,
    icon: "政策兑现.png"
  }),
  Oa.set("禁闭设置", {
    id: 127,
    icon: "入所登记.png"
  }),
  Oa.set("医生意见", {
    id: 128,
    icon: "健康检查.png"
  }),
  Oa.set("中队长意见", {
    id: 129,
    icon: "所领导意见.png"
  }),
  Oa.set("禁闭延长", {
    id: 130,
    icon: "回所确认.png"
  }),
  Oa.set("禁闭解除", {
    id: 131,
    icon: "回所确认.png"
  }),
  Oa.set("救济物品申领", {
    id: 132,
    icon: "入所登记.png"
  }),
  Oa.set("文明监室设置", {
    id: 133,
    icon: "入所登记.png"
  }),
  Oa.set("文明监室撤销", {
    id: 134,
    icon: "回所确认.png"
  }),
  Oa.set("严管设置", {
    id: 135,
    icon: "入所登记.png"
  }),
  Oa.set("严管撤销", {
    id: 136,
    icon: "回所确认.png"
  }),
  Oa.set("严管延长", {
    id: 137,
    icon: "回所确认.png"
  }),
  Oa.set("交班", {
    id: 138,
    icon: "入所登记.png"
  }),
  Oa.set("接班", {
    id: 139,
    icon: "接班.png"
  }),
  Oa.set("领导查看", {
    id: 140,
    icon: "领导查看.png"
  }),
  Oa.set("单独关押设置", {
    id: 141,
    icon: "入所登记.png"
  }),
  Oa.set("中队长审批", {
    id: 142,
    icon: "所领导意见.png"
  }),
  Oa.set("带入关押监室", {
    id: 143,
    icon: "回所确认.png"
  }),
  Oa.set("亲情电话申请", {
    id: 144,
    icon: "入所登记.png"
  }),
  Oa.set("联系家属", {
    id: 145,
    icon: "联系家属.png"
  }),
  Oa.set("武器使用呈批", {
    id: 146,
    icon: "入所登记.png"
  }),
  Oa.set("武器归还", {
    id: 147,
    icon: "武器归还.png"
  }),
  Oa.set("加减刑申请", {
    id: 148,
    icon: "入所登记.png"
  }),
  Oa.set("投诉处理登记", {
    id: 149,
    icon: "入所登记.png"
  }),
  Oa.set("登记处理结果", {
    id: 150,
    icon: "入所登记.png"
  }),
  Oa.set("就医登记", {
    id: 151,
    icon: "入所登记.png"
  }),
  Oa.set("带出监室", {
    id: 152,
    icon: "带出监室.png"
  }),
  Oa.set("住院治疗确认", {
    id: 153,
    icon: "回所确认.png"
  }),
  Oa.set("治疗信息录入", {
    id: 154,
    icon: "入所登记.png"
  }),
  Oa.set("重病号登记", {
    id: 155,
    icon: "入所登记.png"
  }),
  Oa.set("解除重病号", {
    id: 156,
    icon: "回所确认.png"
  }),
  Oa.set("重病号查询", {
    id: 157,
    icon: "领导查看.png"
  }),
  Oa.set("重病号分布图", {
    id: 158,
    icon: "重病号分布图.png"
  }),
  Oa.set("伤情补录", {
    id: 159,
    icon: "入所登记.png"
  }),
  Oa.set("入所体检补录", {
    id: 160,
    icon: "入所登记.png"
  }),
  Oa.set("半年体检补录", {
    id: 161,
    icon: "入所登记.png"
  }),
  Oa.set("申请联系", {
    id: 162,
    icon: "入所登记.png"
  }),
  Oa.set("接待民警联系", {
    id: 163,
    icon: "联系家属.png"
  }),
  Oa.set("购药申请", {
    id: 164,
    icon: "入所登记.png"
  }),
  Oa.set("管教审批", {
    id: 165,
    icon: "所领导意见.png"
  }),
  Oa.set("医生确认", {
    id: 166,
    icon: "回所确认.png"
  }),
  Oa.set("送药验证", {
    id: 167,
    icon: "验证收回.png"
  }),
  Oa.set("精神异常登记", {
    id: 168,
    icon: "入所登记.png"
  }),
  Oa.set("解除精神异常", {
    id: 169,
    icon: "回所确认.png"
  }),
  Oa.set("精神异常查询", {
    id: 170,
    icon: "领导查看.png"
  }),
  Oa.set("物品补领", {
    id: 171,
    icon: "附物登记.png"
  }),
  Oa.set("在押人员申请", {
    id: 172,
    icon: "入所登记.png"
  }),
  Oa.set("管教队确认", {
    id: 173,
    icon: "回所确认.png"
  }),
  Oa.set("邮寄家属", {
    id: 174,
    icon: "邮寄家属.png"
  }),
  Oa.set("前台办理", {
    id: 175,
    icon: "前台办理.png"
  }),
  Oa.set("安检机安检", {
    id: 176,
    icon: "安检机安检.png"
  }),
  Oa.set("管教送物", {
    id: 177,
    icon: "管教送物.png"
  }),
  Oa.set("在押人员确认", {
    id: 178,
    icon: "回所确认.png"
  }),
  Oa.set("管教确认", {
    id: 179,
    icon: "回所确认.png"
  }),
  Oa.set("管教中队审批", {
    id: 180,
    icon: "所领导意见.png"
  }),
  Oa.set("综合中队审批", {
    id: 181,
    icon: "所领导意见.png"
  }),
  Oa.set("关系登记", {
    id: 182,
    icon: "入所登记.png"
  }),
  Oa.set("数据查询", {
    id: 183,
    icon: "领导查看.png"
  }),
  Oa.set("检验凭证", {
    id: 184,
    icon: "证件核对.png"
  }),
  Oa.set("简要登记", {
    id: 185,
    icon: "入所登记.png"
  }),
  Oa.set("另行处理", {
    id: 186,
    icon: "另行处理.png"
  }),
  Oa.set("告知后带入拘室", {
    id: 187,
    icon: "告知.png"
  }),
  Oa.set("回所登记", {
    id: 188,
    icon: "入所登记.png"
  }),
  Oa.set("带入拘室", {
    id: 189,
    icon: "回所确认.png"
  }),
  Oa.set("管教核定", {
    id: 190,
    icon: "所领导意见.png"
  }),
  Oa.set("所长审批", {
    id: 191,
    icon: "所领导意见.png"
  }),
  Oa.set("附物返还", {
    id: 192,
    icon: "附物或财物退还.png"
  }),
  Oa.set("开证打印", {
    id: 193,
    icon: "文书补打.png"
  }),
  Oa.set("管教意见", {
    id: 194,
    icon: "所领导意见.png"
  }),
  Oa.set("警组审核", {
    id: 195,
    icon: "所领导意见.png"
  }),
  Oa.set("分管局领导意见", {
    id: 196,
    icon: "所领导意见.png"
  }),
  Oa.set("登记离所", {
    id: 197,
    icon: "入所登记.png"
  }),
  Oa.set("管教鉴定", {
    id: 198,
    icon: "鉴定.png"
  }),
  Oa.set("财务返还", {
    id: 199,
    icon: "回执.png"
  }),
  Oa.set("离所", {
    id: 200,
    icon: "带出监室.png"
  }),
  Oa.set("申请担保", {
    id: 201,
    icon: "审查担保.png"
  }),
  Oa.set("请假呈批", {
    id: 202,
    icon: "入所登记.png"
  }),
  Oa.set("主管意见", {
    id: 203,
    icon: "所领导意见.png"
  }),
  Oa.set("保证金收取", {
    id: 204,
    icon: "保证金收取.png"
  }),
  Oa.set("离所登记", {
    id: 205,
    icon: "入所登记.png"
  }),
  Oa.set("到期未归处理", {
    id: 206,
    icon: "另行处理.png"
  }),
  Oa.set("已请假人员", {
    id: 207,
    icon: "已请假人员.png"
  }),
  Oa.set("登记呈批", {
    id: 208,
    icon: "入所登记.png"
  }),
  Oa.set("安排会见", {
    id: 209,
    icon: "执行.png"
  }),
  Oa.set("会毕登记", {
    id: 210,
    icon: "入所登记.png"
  }),
  Oa.set("拘留区提人登记", {
    id: 211,
    icon: "入所登记.png"
  }),
  Oa.set("接访情况登记", {
    id: 212,
    icon: "入所登记.png"
  }),
  Oa.set("落实工作", {
    id: 213,
    icon: "入所登记.png"
  }),
  Oa.set("视察登记", {
    id: 214,
    icon: "入所登记.png"
  }),
  Oa.set("落实情况", {
    id: 215,
    icon: "执行.png"
  }),
  Oa.set("安排提讯", {
    id: 216,
    icon: "执行.png"
  }),
  Oa.set("讯完登记", {
    id: 217,
    icon: "入所登记.png"
  }),
  Oa.set("送物登记", {
    id: 218,
    icon: "入所登记.png"
  }),
  Oa.set("接收", {
    id: 219,
    icon: "接班.png"
  }),
  Oa.set("派发物品", {
    id: 220,
    icon: "政策兑现.png"
  }),
  Oa.set("申请登记", {
    id: 221,
    icon: "入所登记.png"
  }),
  Oa.set("上级审查", {
    id: 222,
    icon: "所领导意见.png"
  }),
  Oa.set("活动安排", {
    id: 223,
    icon: "执行.png"
  }),
  Oa.set("完毕登记", {
    id: 224,
    icon: "入所登记.png"
  }),
  Oa.set("管教呈批", {
    id: 225,
    icon: "入所登记.png"
  }),
  Oa.set("通话登记", {
    id: 226,
    icon: "入所登记.png"
  }),
  Oa.set("错录人员删除", {
    id: 227,
    icon: "错录人员删除.png"
  }),
  Oa.set("误出所人员恢复", {
    id: 228,
    icon: "误出所人员恢复.png"
  }),
  Oa.set("法律手续变更", {
    id: 229,
    icon: "变更羁押期限.png"
  }),
  Oa.set("交班登记", {
    id: 230,
    icon: "入所登记.png"
  }),
  Oa.set("交班领导确认", {
    id: 231,
    icon: "所领导意见.png"
  }),
  Oa.set("接班确认", {
    id: 232,
    icon: "回所确认.png"
  }),
  Oa.set("接班领导确认", {
    id: 233,
    icon: "所领导意见.png"
  }),
  Oa.set("警组意见", {
    id: 234,
    icon: "所领导意见.png"
  }),
  Oa.set("奖励情况", {
    id: 235,
    icon: "政策兑现.png"
  }),
  Oa.set("文明个人登记", {
    id: 236,
    icon: "入所登记.png"
  }),
  Oa.set("取消文明个人", {
    id: 237,
    icon: "入所登记.png"
  }),
  Oa.set("文明个人查询", {
    id: 238,
    icon: "领导查看.png"
  }),
  Oa.set("文明拘室登记", {
    id: 239,
    icon: "入所登记.png"
  }),
  Oa.set("取消文明拘室", {
    id: 240,
    icon: "入所登记.png"
  }),
  Oa.set("文明拘室查询", {
    id: 241,
    icon: "领导查看.png"
  }),
  Oa.set("材料登记表打印", {
    id: 242,
    icon: "入所登记.png"
  }),
  Oa.set("使用登记", {
    id: 243,
    icon: "入所登记.png"
  }),
  Oa.set("延长登记", {
    id: 244,
    icon: "入所登记.png"
  }),
  Oa.set("提前解除登记", {
    id: 245,
    icon: "入所登记.png"
  }),
  Oa.set("解除械具使用", {
    id: 246,
    icon: "回所确认.png"
  }),
  Oa.set("办案机关书面委托", {
    id: 247,
    icon: "材料转递.png"
  }),
  Oa.set("收发信件登记", {
    id: 248,
    icon: "入所登记.png"
  }),
  Oa.set("信件传递", {
    id: 249,
    icon: "材料转递.png"
  }),
  Oa.set("往来电讯登记", {
    id: 250,
    icon: "入所登记.png"
  }),
  Oa.set("电讯传递", {
    id: 251,
    icon: "材料转递.png"
  }),
  Oa.set("物件呈批", {
    id: 252,
    icon: "入所登记.png"
  }),
  Oa.set("信息员管理", {
    id: 253,
    icon: "信息员管理.png"
  }),
  Oa.set("撤销登记", {
    id: 254,
    icon: "入所登记.png"
  }),
  Oa.set("信息录入", {
    id: 255,
    icon: "入所登记.png"
  }),
  Oa.set("信息传递", {
    id: 256,
    icon: "材料转递.png"
  }),
  Oa.set("查证情况", {
    id: 257,
    icon: "查证情况.png"
  }),
  Oa.set("处理情况", {
    id: 258,
    icon: "处理情况.png"
  }),
  Oa.set("拘室调整登记", {
    id: 259,
    icon: "入所登记.png"
  }),
  Oa.set("主管所领导意见", {
    id: 260,
    icon: "所领导意见.png"
  }),
  Oa.set("拘室调整确认", {
    id: 261,
    icon: "回所确认.png"
  }),
  Oa.set("批量拘室调整", {
    id: 262,
    icon: "入所登记.png"
  }),
  Oa.set("严管呈批", {
    id: 263,
    icon: "入所登记.png"
  }),
  Oa.set("严管解除", {
    id: 264,
    icon: "回所确认.png"
  }),
  Oa.set("谈话登记", {
    id: 265,
    icon: "入所登记.png"
  }),
  Oa.set("谈话查询", {
    id: 266,
    icon: "领导查看.png"
  }),
  Oa.set("集体教育登记", {
    id: 267,
    icon: "入所登记.png"
  }),
  Oa.set("集体教育检索", {
    id: 268,
    icon: "领导查看.png"
  }),
  Oa.set("医生巡诊登记", {
    id: 269,
    icon: "入所登记.png"
  }),
  Oa.set("巡诊查询", {
    id: 270,
    icon: "领导查看.png"
  }),
  Oa.set("诊断结果录入", {
    id: 271,
    icon: "入所登记.png"
  }),
  Oa.set("医生派药", {
    id: 272,
    icon: "执行.png"
  }),
  Oa.set("所内就医查询", {
    id: 273,
    icon: "领导查看.png"
  }),
  Oa.set("医生呈批", {
    id: 274,
    icon: "入所登记.png"
  }),
  Oa.set("警长意见", {
    id: 275,
    icon: "所领导意见.png"
  }),
  Oa.set("死亡登记", {
    id: 276,
    icon: "入所登记.png"
  }),
  Oa.set("死亡鉴定", {
    id: 277,
    icon: "鉴定.png"
  }),
  Oa.set("伤情登记", {
    id: 278,
    icon: "入所登记.png"
  }),
  Oa.set("伤情查询", {
    id: 279,
    icon: "领导查看.png"
  }),
  Oa.set("重病号分配图", {
    id: 280,
    icon: "重病号分布图.png"
  }),
  Oa.set("心理咨询登记", {
    id: 281,
    icon: "入所登记.png"
  }),
  Oa.set("心理咨询处理", {
    id: 282,
    icon: "另行处理.png"
  }),
  Oa.set("心理咨询查询", {
    id: 283,
    icon: "领导查看.png"
  }),
  Oa.set("卫生防疫登记", {
    id: 284,
    icon: "入所登记.png"
  }),
  Oa.set("卫生防疫查询", {
    id: 285,
    icon: "领导查看.png"
  }),
  Oa.set("风险评估登记", {
    id: 286,
    icon: "入所登记.png"
  }),
  Oa.set("动态分析记录", {
    id: 287,
    icon: "入所登记.png"
  }),
  Oa.set("记录查询", {
    id: 288,
    icon: "领导查看.png"
  }),
  Oa.set("日常清监", {
    id: 289,
    icon: "日常清监.png"
  }),
  Oa.set("安全大检查", {
    id: 290,
    icon: "健康检查.png"
  }),
  Oa.set("处理", {
    id: 291,
    icon: "另行处理.png"
  }),
  Oa.set("所领导讲评", {
    id: 292,
    icon: "所领导讲评.png"
  }),
  Oa.set("所领导确认", {
    id: 293,
    icon: "所领导意见.png"
  }),
  Oa.set("事故", {
    id: 294,
    icon: "件登记入所登记.png"
  }),
  Oa.set("处理情况", {
    id: 295,
    icon: "处理情况.png"
  }),
  Oa.set("演练登记", {
    id: 296,
    icon: "入所登记.png"
  }),
  Oa.set("演练情况", {
    id: 297,
    icon: "处理情况.png"
  }),
  Oa.set("改进落实", {
    id: 298,
    icon: "执行.png"
  }),
  Oa.set("指纹采集", {
    id: 299,
    icon: "生物特征采集.png"
  }),
  Oa.set("指纹查询", {
    id: 300,
    icon: "领导查看.png"
  }),
  Oa.set("设置领导审批", {
    id: 301,
    icon: "领导查看.png"
  }),
  Oa.set("撤销领导审批", {
    id: 302,
    icon: "领导查看.png"
  }),
  Oa.set("设置医生意见", {
    id: 303,
    icon: "入所登记.png"
  }),
  Oa.set("设置领导审批", {
    id: 304,
    icon: "领导查看.png"
  }),
  Oa.set("设置中队长意见", {
    id: 305,
    icon: "所领导意见.png"
  }),
  Oa.set("延长医生意见", {
    id: 306,
    icon: "入所登记.png"
  }),
  Oa.set("延长中队长意见", {
    id: 307,
    icon: "所领导意见.png"
  }),
  Oa.set("延长领导审批", {
    id: 308,
    icon: "领导查看.png"
  }),
  Oa.set("解除医生意见", {
    id: 309,
    icon: "入所登记.png"
  }),
  Oa.set("解除中队长意见", {
    id: 310,
    icon: "所领导意见.png"
  }),
  Oa.set("解除领导审批", {
    id: 311,
    icon: "领导查看.png"
  }),
  Oa.set("设置领导审批", {
    id: 312,
    icon: "领导查看.png"
  }),
  Oa.set("撤销领导审批", {
    id: 313,
    icon: "领导查看.png"
  }),
  Oa.set("延长领导审批", {
    id: 314,
    icon: "领导查看.png"
  });
  var Pa = {
    resourceRoot: "/plugin-flowchart/scene/static/img/"
  },
  Ea = [{
    name: "收押入所",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "验证登记",
        position: [120, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "快速入所",
        position: [120, 128],
        extData: {
          events: 0
        }
      },
      {
        name: "回所登记",
        position: [120, 678],
        extData: {
          events: 0
        }
      },
      {
        name: "健康检查",
        position: [400, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导意见",
        position: [400, 678],
        extData: {
          events: 0
        }
      },
      {
        name: "安全检查",
        position: [680, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "暂不收押",
        position: [680, 678],
        extData: {
          events: 0
        }
      },
      {
        name: "附物登记",
        position: [960, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "接济物品",
        position: [960, 678],
        extData: {
          events: 0
        }
      },
      {
        name: "生物特征",
        position: [960, 128],
        extData: {
          events: 0
        }
      },
      {
        name: "告知",
        position: [1240, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "入所登记",
        position: [1520, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "收押开证",
        position: [1520, 128],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "验证登记"
        },
        end: {
          name: "健康检查"
        }
      },
      {
        start: {
          name: "回所登记"
        },
        end: {
          name: "健康检查"
        }
      },
      {
        start: {
          name: "健康检查"
        },
        end: {
          name: "安全检查"
        }
      },
      {
        start: {
          name: "健康检查"
        },
        end: {
          name: "所领导意见"
        }
      },
      {
        start: {
          name: "所领导意见"
        },
        end: {
          name: "暂不收押"
        }
      },
      {
        start: {
          name: "所领导意见"
        },
        end: {
          name: "安全检查"
        }
      },
      {
        start: {
          name: "安全检查"
        },
        end: {
          name: "附物登记"
        }
      },
      {
        start: {
          name: "安全检查"
        },
        end: {
          name: "生物特征"
        }
      },
      {
        start: {
          name: "生物特征"
        },
        end: {
          name: "告知"
        }
      },
      {
        start: {
          name: "附物登记"
        },
        end: {
          name: "告知"
        }
      },
      {
        start: {
          name: "告知"
        },
        end: {
          name: "入所登记"
        }
      }]
    }]
  },
  {
    name: "出所管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "出所登记",
        position: [250, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导审批",
        position: [650, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "文书补打",
        position: [1050, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "出所",
        position: [1450, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "今日出所",
        position: [250, 128],
        extData: {
          events: 0
        }
      },
      {
        name: "出所通知",
        position: [1450, 712],
        extData: {
          events: 0
        }
      },
      {
        name: "附物/财务退还",
        position: [1450, 128],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "出所登记"
        },
        end: {
          name: "所领导审批"
        }
      },
      {
        start: {
          name: "所领导审批"
        },
        end: {
          name: "文书补打"
        }
      },
      {
        start: {
          name: "文书补打"
        },
        end: {
          name: "出所"
        }
      }]
    }]
  },
  {
    name: "临时出所",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "临时出所登记",
        position: [160, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [460, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "出所",
        position: [760, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "回所确认",
        position: [1060, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "临时出所登记"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "出所"
        }
      },
      {
        start: {
          name: "出所"
        },
        end: {
          name: "回所确认"
        }
      },
      {
        start: {
          name: "临时出所登记"
        },
        end: {
          name: "出所"
        }
      }]
    }]
  },
  {
    name: "暂予监外执行",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "申请",
        position: [80, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "所务会意见",
        position: [380, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "鉴定",
        position: [680, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "审查担保",
        position: [980, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "出所",
        position: [1280, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "申请"
        },
        end: {
          name: "所务会意见"
        }
      },
      {
        start: {
          name: "所务会意见"
        },
        end: {
          name: "鉴定"
        }
      },
      {
        start: {
          name: "鉴定"
        },
        end: {
          name: "审查担保"
        }
      },
      {
        start: {
          name: "审查担保"
        },
        end: {
          name: "出所"
        }
      }]
    }]
  },
  {
    name: "延期",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "证件核对",
        position: [280, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "延期登记",
        position: [572, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "批量延期",
        position: [864, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "变更羁押期限",
        position: [280, 526],
        state: -1,
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "证件核对"
        },
        end: {
          name: "延期登记"
        }
      }]
    }]
  },
  {
    name: "环节变动",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "签收",
        position: [280, 414],
        state: -1,
        extData: {
          events: 0
        }
      },
      {
        name: "回执",
        position: [572, 414],
        state: -1,
        extData: {
          events: 0
        }
      },
      {
        name: "办案环节变动",
        position: [864, 414],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "签收"
        },
        end: {
          name: "回执"
        }
      }]
    }]
  },
  {
    name: "处理结果",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "结案",
        position: [280, 414],
        state: -1,
        extData: {
          events: 0
        }
      },
      {
        name: "执行",
        position: [572, 414],
        state: -1,
        extData: {
          events: 0
        }
      },
      {
        name: "处理结果登记",
        position: [864, 414],
        extData: {
          events: 0
        }
      }]
    }]
  },
  {
    name: "协同执行督导",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "接受纠正违法",
        position: [280, 414],
        state: -1,
        extData: {
          events: 0
        }
      },
      {
        name: "纠正违法反馈",
        position: [572, 414],
        state: -1,
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "接受纠正违法"
        },
        end: {
          name: "纠正违法反馈"
        }
      }]
    }]
  },
  {
    name: "精神病鉴定",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "鉴定开始登记",
        position: [280, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "鉴定结束登记",
        position: [572, 414],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "鉴定开始登记"
        },
        end: {
          name: "鉴定结束登记"
        }
      }]
    }]
  },
  {
    name: "提解",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "核对凭证",
        position: [250, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "提解出所登记",
        position: [650, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "监区提人登记",
        position: [1050, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "提解回所安全检查",
        position: [1450, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "核对凭证"
        },
        end: {
          name: "提解出所登记"
        }
      },
      {
        start: {
          name: "提解出所登记"
        },
        end: {
          name: "监区提人登记"
        }
      },
      {
        start: {
          name: "监区提人登记"
        },
        end: {
          name: "提解回所安全检查"
        }
      }]
    }]
  },
  {
    name: "提讯",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "核对凭证",
        position: [80, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "提讯登记",
        position: [380, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "监区提人登记",
        position: [680, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "安全检查",
        position: [980, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "退讯",
        position: [1280, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "核对凭证"
        },
        end: {
          name: "提讯登记"
        }
      },
      {
        start: {
          name: "提讯登记"
        },
        end: {
          name: "监区提人登记"
        }
      },
      {
        start: {
          name: "监区提人登记"
        },
        end: {
          name: "安全检查"
        }
      },
      {
        start: {
          name: "安全检查"
        },
        end: {
          name: "退讯"
        }
      }]
    }]
  },
  {
    name: "家属会见",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "会见登记",
        position: [80, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [380, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "监区提人登记",
        position: [680, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "会见完毕安全检查",
        position: [980, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "带入监室",
        position: [1280, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "会见登记"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "监区提人登记"
        }
      },
      {
        start: {
          name: "监区提人登记"
        },
        end: {
          name: "会见完毕安全检查"
        }
      },
      {
        start: {
          name: "会见完毕安全检查"
        },
        end: {
          name: "带入监室"
        }
      },
      {
        start: {
          name: "会见登记"
        },
        end: {
          name: "监区提人登记"
        }
      }]
    }]
  },
  {
    name: "律师会见",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "核对凭证",
        position: [250, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "登记呈报",
        position: [650, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "监区提人登记",
        position: [1050, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "会见完毕安全检查",
        position: [1450, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "预约会见",
        position: [650, 520],
        state: -1,
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "核对凭证"
        },
        end: {
          name: "登记呈报"
        }
      },
      {
        start: {
          name: "登记呈报"
        },
        end: {
          name: "监区提人登记"
        }
      },
      {
        start: {
          name: "监区提人登记"
        },
        end: {
          name: "会见完毕安全检查"
        }
      },
      {
        start: {
          name: "预约会见"
        },
        end: {
          name: "监区提人登记"
        }
      }]
    }]
  },
  {
    name: "外来人员登记",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "外来人员登记",
        position: [280, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "离开登记",
        position: [572, 414],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "外来人员登记"
        },
        end: {
          name: "离开登记"
        }
      }]
    }]
  },
  {
    name: "监控调整",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "监室调整登记",
        position: [152, 472],
        extData: {
          events: 0
        }
      },
      {
        name: "中队/警署意见",
        position: [472, 472],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [808, 273],
        extData: {
          events: 0
        }
      },
      {
        name: "名单打印",
        position: [1142, 130],
        extData: {
          events: 0
        }
      },
      {
        name: "监室调整确定",
        position: [1142, 472],
        extData: {
          events: 0
        }
      },
      {
        name: "主协管设置",
        position: [1495, 703],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "监室调整登记"
        },
        end: {
          name: "中队/警署意见"
        }
      },
      {
        start: {
          name: "中队/警署意见"
        },
        end: {
          name: "监室调整确定"
        }
      },
      {
        start: {
          name: "中队/警署意见"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "名单打印"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "监室调整确定"
        }
      }]
    }]
  },
  {
    name: "耳目管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "物建呈报",
        position: [120, 268],
        extData: {
          events: 0
        }
      },
      {
        name: "中队/警署意见",
        position: [400, 268],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导意见",
        position: [680, 268],
        extData: {
          events: 0
        }
      },
      {
        name: "撤销登记",
        position: [960, 588],
        extData: {
          events: 0
        }
      },
      {
        name: "撤销中队长/警署意见",
        position: [1240, 588],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [1520, 588],
        extData: {
          events: 0
        }
      },
      {
        name: "情况反馈",
        position: [1520, 268],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "物建呈报"
        },
        end: {
          name: "中队/警署意见"
        }
      },
      {
        start: {
          name: "中队/警署意见"
        },
        end: {
          name: "所领导意见"
        }
      },
      {
        start: {
          name: "所领导意见"
        },
        end: {
          name: "撤销登记"
        }
      },
      {
        start: {
          name: "撤销登记"
        },
        end: {
          name: "撤销中队长/警署意见"
        }
      },
      {
        start: {
          name: "撤销中队长/警署意见"
        },
        end: {
          name: "领导审批"
        }
      }]
    }]
  },
  {
    name: "信件管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "收信登记",
        position: [120, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [400, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "信件转接处理",
        position: [680, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "发信登记",
        position: [960, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "处理审批",
        position: [1240, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "信件寄出处理",
        position: [1520, 403],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "收信登记"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "信件转接处理"
        }
      },
      {
        start: {
          name: "发信登记"
        },
        end: {
          name: "处理审批"
        }
      },
      {
        start: {
          name: "处理审批"
        },
        end: {
          name: "信件寄出处理"
        }
      }]
    }]
  },
  {
    name: "重点人员",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "人员维护",
        position: [120, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "中队警组意见",
        position: [400, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导意见",
        position: [680, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "解除呈批",
        position: [960, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "解除中队/警组意见",
        position: [1240, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "解除所领导意见",
        position: [1520, 403],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "人员维护"
        },
        end: {
          name: "中队警组意见"
        }
      },
      {
        start: {
          name: "中队警组意见"
        },
        end: {
          name: "所领导意见"
        }
      },
      {
        start: {
          name: "解除呈批"
        },
        end: {
          name: "解除中队/警组意见"
        }
      },
      {
        start: {
          name: "解除中队/警组意见"
        },
        end: {
          name: "解除所领导意见"
        }
      }]
    }]
  },
  {
    name: "奖励管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "奖励呈批",
        position: [250, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "中队/警署意见",
        position: [650, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导审批",
        position: [1050, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "奖励情况登记",
        position: [1450, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "奖励呈批"
        },
        end: {
          name: "中队/警署意见"
        }
      },
      {
        start: {
          name: "中队/警署意见"
        },
        end: {
          name: "所领导审批"
        }
      },
      {
        start: {
          name: "所领导审批"
        },
        end: {
          name: "奖励情况登记"
        }
      }]
    }]
  },
  {
    name: "处罚管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "处罚呈报",
        position: [172, 355],
        extData: {
          events: 0
        }
      },
      {
        name: "中队/警署意见",
        position: [430, 355],
        extData: {
          events: 0
        }
      },
      {
        name: "解除处罚登记",
        position: [1468, 355],
        extData: {
          events: 0
        }
      },
      {
        name: "延长呈报",
        position: [810, 660],
        extData: {
          events: 0
        }
      },
      {
        name: "延长所领导意见",
        position: [1160, 660],
        extData: {
          events: 0
        }
      },
      {
        name: "所长意见",
        position: [704, 128],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "处罚呈报"
        },
        end: {
          name: "中队/警署意见"
        }
      },
      {
        start: {
          name: "中队/警署意见"
        },
        end: {
          name: "解除处罚登记"
        }
      },
      {
        start: {
          name: "中队/警署意见"
        },
        end: {
          name: "延长呈报"
        }
      },
      {
        start: {
          name: "延长呈报"
        },
        end: {
          name: "延长所领导意见"
        }
      },
      {
        start: {
          name: "延长所领导意见"
        },
        end: {
          name: "解除处罚登记"
        }
      }]
    }]
  },
  {
    name: "械具使用",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "械具使用呈批",
        position: [250, 168],
        extData: {
          events: 0
        }
      },
      {
        name: "中队/警署意见",
        position: [550, 168],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导审批",
        position: [850, 168],
        extData: {
          events: 0
        }
      },
      {
        name: "械具使用登记",
        position: [1150, 168],
        extData: {
          events: 0
        }
      },
      {
        name: "械具提前解除",
        position: [1450, 168],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [1450, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "延长中队/警署意见",
        position: [1150, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "延长或提前解除呈报",
        position: [850, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "械具使用呈批"
        },
        end: {
          name: "中队/警署意见"
        }
      },
      {
        start: {
          name: "中队/警署意见"
        },
        end: {
          name: "所领导审批"
        }
      },
      {
        start: {
          name: "所领导审批"
        },
        end: {
          name: "械具使用登记"
        }
      },
      {
        start: {
          name: "延长或提前解除呈报"
        },
        end: {
          name: "延长中队/警署意见"
        }
      },
      {
        start: {
          name: "延长中队/警署意见"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "械具提前解除"
        }
      }]
    }]
  },
  {
    name: "协助破案",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "线索登记",
        position: [250, 466],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导意见",
        position: [550, 466],
        extData: {
          events: 0
        }
      },
      {
        name: "材料转递",
        position: [850, 466],
        extData: {
          events: 0
        }
      },
      {
        name: "转递反馈",
        position: [1150, 466],
        extData: {
          events: 0
        }
      },
      {
        name: "政策兑现",
        position: [1450, 466],
        extData: {
          events: 0
        }
      },
      {
        name: "线索登记表打印",
        position: [850, 140],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "线索登记"
        },
        end: {
          name: "所领导意见"
        }
      },
      {
        start: {
          name: "所领导意见"
        },
        end: {
          name: "材料转递"
        }
      },
      {
        start: {
          name: "所领导意见"
        },
        end: {
          name: "线索登记表打印"
        }
      },
      {
        start: {
          name: "材料转递"
        },
        end: {
          name: "转递反馈"
        }
      },
      {
        start: {
          name: "转递反馈"
        },
        end: {
          name: "政策兑现"
        }
      }]
    }]
  },
  {
    name: "禁闭管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "禁闭设置",
        position: [80, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "设置医生意见",
        position: [367, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "设置中队长意见",
        position: [662, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "设置领导审批",
        position: [958, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "禁闭延长",
        position: [670, 214],
        extData: {
          events: 0
        }
      },
      {
        name: "延长医生意见",
        position: [960, 214],
        extData: {
          events: 0
        }
      },
      {
        name: "延长中队长意见",
        position: [1250, 214],
        extData: {
          events: 0
        }
      },
      {
        name: "延长领导审批",
        position: [1555, 214],
        extData: {
          events: 0
        }
      },
      {
        name: "禁闭解除",
        position: [670, 614],
        extData: {
          events: 0
        }
      },
      {
        name: "解除医生意见",
        position: [960, 614],
        extData: {
          events: 0
        }
      },
      {
        name: "解除中队长意见",
        position: [1250, 614],
        extData: {
          events: 0
        }
      },
      {
        name: "解除领导审批",
        position: [1555, 614],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "禁闭设置"
        },
        end: {
          name: "设置医生意见"
        }
      },
      {
        start: {
          name: "设置医生意见"
        },
        end: {
          name: "设置中队长意见"
        }
      },
      {
        start: {
          name: "设置中队长意见"
        },
        end: {
          name: "设置领导审批"
        }
      },
      {
        start: {
          name: "禁闭延长",
          position: [670, 214]
        },
        end: {
          name: "延长医生意见",
          position: [960, 214]
        }
      },
      {
        start: {
          name: "延长医生意见",
          position: [960, 214]
        },
        end: {
          name: "延长中队长意见",
          position: [1250, 214]
        }
      },
      {
        start: {
          name: "延长中队长意见",
          position: [1250, 214]
        },
        end: {
          name: "延长领导审批",
          position: [1555, 214]
        }
      },
      {
        start: {
          name: "禁闭解除",
          position: [670, 614]
        },
        end: {
          name: "解除医生意见",
          position: [960, 614]
        }
      },
      {
        start: {
          name: "解除医生意见",
          position: [960, 614]
        },
        end: {
          name: "解除中队长意见",
          position: [1250, 614]
        }
      },
      {
        start: {
          name: "解除中队长意见",
          position: [1250, 614]
        },
        end: {
          name: "解除领导审批",
          position: [1555, 614]
        }
      }]
    }]
  },
  {
    name: "救济品申领",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "救济物品申领",
        position: [280, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [572, 414],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "救济物品申领"
        },
        end: {
          name: "领导审批"
        }
      }]
    }]
  },
  {
    name: "管教管理-文明监室",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "文明监室设置",
        position: [280, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [572, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "文明监室撤销",
        position: [1105, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [1405, 414],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "文明监室设置"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "文明监室撤销"
        },
        end: {
          name: "领导审批",
          position: [1405, 414]
        }
      }]
    }]
  },
  {
    name: "严管人员",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "严管设置",
        position: [280, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "设置领导审批",
        position: [572, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "严管撤销",
        position: [1105, 214],
        extData: {
          events: 0
        }
      },
      {
        name: "撤销领导审批",
        position: [1405, 214],
        extData: {
          events: 0
        }
      },
      {
        name: "严管延长",
        position: [1105, 614],
        extData: {
          events: 0
        }
      },
      {
        name: "延长领导审批",
        position: [1405, 614],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "严管设置"
        },
        end: {
          name: "设置领导审批"
        }
      },
      {
        start: {
          name: "严管撤销"
        },
        end: {
          name: "撤销领导审批",
          position: [1405, 214]
        }
      },
      {
        start: {
          name: "严管延长"
        },
        end: {
          name: "延长领导审批",
          position: [1405, 614]
        }
      }]
    }]
  },
  {
    name: "岗位交接班",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "交班",
        position: [488, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "接班",
        position: [808, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导查看",
        position: [1150, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "交班"
        },
        end: {
          name: "接班"
        }
      }]
    }]
  },
  {
    name: "单独关押",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "单独关押设置",
        position: [250, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "中队长审批",
        position: [650, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [1050, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "带入关押监室",
        position: [1450, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "单独关押设置"
        },
        end: {
          name: "中队长审批"
        }
      },
      {
        start: {
          name: "中队长审批"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "带入关押监室"
        }
      }]
    }]
  },
  {
    name: "亲情电话",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "亲情电话申请",
        position: [250, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "中队长审批",
        position: [650, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导审批",
        position: [1050, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "联系家属",
        position: [1450, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "亲情电话申请"
        },
        end: {
          name: "中队长审批"
        }
      },
      {
        start: {
          name: "中队长审批"
        },
        end: {
          name: "所领导审批"
        }
      },
      {
        start: {
          name: "所领导审批"
        },
        end: {
          name: "联系家属"
        }
      }]
    }]
  },
  {
    name: "武器使用",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "武器使用呈批",
        position: [488, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导审批",
        position: [808, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "武器归还",
        position: [1150, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "武器使用呈批"
        },
        end: {
          name: "所领导审批"
        }
      },
      {
        start: {
          name: "所领导审批"
        },
        end: {
          name: "武器归还"
        }
      }]
    }]
  },
  {
    name: "加减刑",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "加减刑申请",
        position: [610, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [1066, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "加减刑申请"
        },
        end: {
          name: "领导审批"
        }
      }]
    }]
  },
  {
    name: "投诉处理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "投诉处理登记",
        position: [488, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [808, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "登记处理结果",
        position: [1150, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "投诉处理登记"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "登记处理结果"
        }
      }]
    }]
  },
  {
    name: "就医管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "就医登记",
        position: [80, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [330, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "带出监室",
        position: [580, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "住院治疗确认",
        position: [830, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "带入监室",
        position: [1080, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "治疗信息录入",
        position: [1330, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "就医登记"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "带出监室"
        }
      },
      {
        start: {
          name: "带出监室"
        },
        end: {
          name: "住院治疗确认"
        }
      },
      {
        start: {
          name: "住院治疗确认"
        },
        end: {
          name: "带入监室"
        }
      },
      {
        start: {
          name: "带入监室"
        },
        end: {
          name: "治疗信息录入"
        }
      }]
    }]
  },
  {
    name: "重病号管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "重病号登记",
        position: [390, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "解除重病号",
        position: [680, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "重病号查询",
        position: [980, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "重病号分布图",
        position: [1270, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "重病号登记"
        },
        end: {
          name: "解除重病号"
        }
      },
      {
        start: {
          name: "解除重病号"
        },
        end: {
          name: "重病号查询"
        }
      },
      {
        start: {
          name: "重病号查询"
        },
        end: {
          name: "重病号分布图"
        }
      }]
    }]
  },
  {
    name: "医疗信息补录",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "伤情补录",
        position: [400, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "入所体检补录",
        position: [700, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "半年体检补录",
        position: [1e3, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "伤情补录"
        },
        end: {
          name: "入所体检补录"
        }
      },
      {
        start: {
          name: "入所体检补录"
        },
        end: {
          name: "半年体检补录"
        }
      }]
    }]
  },
  {
    name: "家属联系",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "申请联系",
        position: [250, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "中队长审批",
        position: [650, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [1050, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "接待民警联系",
        position: [1450, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "申请联系"
        },
        end: {
          name: "中队长审批"
        }
      },
      {
        start: {
          name: "中队长审批"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "接待民警联系"
        }
      }]
    }]
  },
  {
    name: "自备药品申请",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "购药申请",
        position: [250, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "管教审批",
        position: [550, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "医生确认",
        position: [850, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导审批",
        position: [1150, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "送药验证",
        position: [1450, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "购药申请"
        },
        end: {
          name: "管教审批"
        }
      },
      {
        start: {
          name: "管教审批"
        },
        end: {
          name: "医生确认"
        }
      },
      {
        start: {
          name: "医生确认"
        },
        end: {
          name: "所领导审批"
        }
      },
      {
        start: {
          name: "所领导审批"
        },
        end: {
          name: "送药验证"
        }
      }]
    }]
  },
  {
    name: "精神异常管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "精神异常登记",
        position: [463, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "解除精神异常",
        position: [877, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "精神异常查询",
        position: [1223, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "精神异常登记"
        },
        end: {
          name: "解除精神异常"
        }
      },
      {
        start: {
          name: "解除精神异常"
        },
        end: {
          name: "精神异常查询"
        }
      }]
    }]
  },
  {
    name: "交接班",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "交班",
        position: [463, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "接班",
        position: [877, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导查看",
        position: [1223, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "交班"
        },
        end: {
          name: "接班"
        }
      }]
    }]
  },
  {
    name: "巡控管理——文明监室",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "文明监室设置",
        position: [280, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "设置领导审批",
        position: [572, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "文明监室撤销",
        position: [1105, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "撤销领导审批",
        position: [1405, 414],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "文明监室设置"
        },
        end: {
          name: "设置领导审批"
        }
      },
      {
        start: {
          name: "文明监室撤销"
        },
        end: {
          name: "撤销领导审批",
          position: [1405, 414]
        }
      }]
    }]
  },
  {
    name: "家属送物",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "物品补领",
        position: [90, 214],
        extData: {
          events: 0
        }
      },
      {
        name: "在押人员申请",
        position: [100, 480],
        extData: {
          events: 0
        }
      },
      {
        name: "管教确认",
        position: [300, 480],
        extData: {
          events: 0
        }
      },
      {
        name: "管教中队审批",
        position: [500, 480],
        extData: {
          events: 0
        }
      },
      {
        name: "邮寄家属",
        position: [700, 480],
        extData: {
          events: 0
        }
      },
      {
        name: "前台办理",
        position: [900, 480],
        extData: {
          events: 0
        }
      },
      {
        name: "安检机安检",
        position: [1100, 480],
        extData: {
          events: 0
        }
      },
      {
        name: "管教送物",
        position: [1300, 480],
        extData: {
          events: 0
        }
      },
      {
        name: "在押人员确认",
        position: [1500, 480],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "在押人员申请"
        },
        end: {
          name: "管教确认"
        }
      },
      {
        start: {
          name: "管教确认"
        },
        end: {
          name: "管教中队审批"
        }
      },
      {
        start: {
          name: "管教中队审批"
        },
        end: {
          name: "邮寄家属"
        }
      },
      {
        start: {
          name: "邮寄家属"
        },
        end: {
          name: "前台办理"
        }
      },
      {
        start: {
          name: "前台办理"
        },
        end: {
          name: "安检机安检"
        }
      },
      {
        start: {
          name: "安检机安检"
        },
        end: {
          name: "管教送物"
        }
      },
      {
        start: {
          name: "管教送物"
        },
        end: {
          name: "在押人员确认"
        }
      }]
    }]
  },
  {
    name: "购物管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "在押人员申请",
        position: [120, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "管教确认",
        position: [400, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "管教中队审批",
        position: [680, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导审批",
        position: [960, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "综合中队审批",
        position: [1240, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "在押人员确认",
        position: [1520, 403],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "在押人员申请"
        },
        end: {
          name: "管教确认"
        }
      },
      {
        start: {
          name: "管教确认"
        },
        end: {
          name: "管教中队审批"
        }
      },
      {
        start: {
          name: "管教中队审批"
        },
        end: {
          name: "所领导审批"
        }
      },
      {
        start: {
          name: "管教中队审批"
        },
        end: {
          name: "所领导审批"
        }
      },
      {
        start: {
          name: "所领导审批"
        },
        end: {
          name: "综合中队审批"
        }
      },
      {
        start: {
          name: "综合中队审批"
        },
        end: {
          name: "在押人员确认"
        }
      }]
    }]
  }],
  Ta = Object.freeze({
    __proto__: null,
    maps: Oa,
    api: Pa,
    flows: Ea
  }),
  ja = [].reverse,
  Ia = [1, 2];
  D({
    target: "Array",
    proto: !0,
    forced: String(Ia) === String(Ia.reverse())
  },
  {
    reverse: function() {
      return We(this) && (this.length = this.length),
      ja.call(this)
    }
  });
  function Ma(t) {
    this.options = gi({
      min: 0,
      max: 1,
      current: 0,
      durationTime: 1e3,
      timeline: 0,
      reverse: !1,
      loop: !1,
      aMaxHandle: null,
      aMinHandle: null
    },
    t),
    this.init()
  }
  var La = Qe("Array").reverse,
  Ha = Array.prototype,
  Ra = function(t) {
    var e = t.reverse;
    return t === Ha || t instanceof Array && e === Ha.reverse ? La: e
  };
  function za(i) {
    var o = function() {
      if ("undefined" == typeof Reflect || !Vo) return ! 1;
      if (Vo.sham) return ! 1;
      if ("function" == typeof Proxy) return ! 0;
      try {
        return Date.prototype.toString.call(Vo(Date, [],
        function() {})),
        !0
      } catch(t) {
        return ! 1
      }
    } ();
    return function() {
      var t, e, n = ps(i);
      return e = o ? (t = ps(this).constructor, Vo(n, arguments, t)) : n.apply(this, arguments),
      ns(this, e)
    }
  }
  Ma.prototype = {
    constructor: Ma,
    init: function() {
      if ("number" != typeof this.options.min) throw new Error("min 应该是一个数字型数据!");
      if ("number" != typeof this.options.max) throw new Error("max 应该是一个数字型数据!");
      if ("number" != typeof this.options.current) throw new Error("current 应该是一个数字型数据!");
      if ("number" != typeof this.options.durationTime) throw new Error("durationTime 应该是一个数字型数据!");
      if (this.options.min >= this.options.max) throw new Error("开始状态应小于结束状态!");
      this.options.current = this.options.min,
      0 === this.options.current && Ra(this.options) && (this.options.current = this.options.max),
      this.options.timeline = this.options.durationTime * (this.options.current / (this.options.max - this.options.min))
    },
    update: function(t) {
      var e = (this.options.max - this.options.min) / this.options.durationTime;
      Ra(this.options) ? this.options.current -= e * t: this.options.current += e * t,
      Ra(this.options) ? this.options.current < this.options.min && (this.options.current = this.options.min, this.options.aMinHandle && this.options.aMinHandle(), this.options.loop && (this.options.reverse = !1)) : this.options.current > this.options.max && (this.options.current = this.options.max, this.options.aMaxHandle && this.options.aMaxHandle(), this.options.loop && (this.options.reverse = !0))
    },
    getCurrent: function() {
      return this.options.current
    }
  };
  var Ca = {
    state: 1,
    events: 0
  },
  Ba = function() {
    es(a, ua);
    var i = za(a);
    function a(t, e) {
      var n;
      return No(this, a),
      (n = i.call(this, t, e)).animation = {
        opacity: null,
        scale: null
      },
      n.inter = -1,
      n.updateOptions(e),
      n
    }
    return Yo(a, [{
      key: "stateHandle",
      value: function(t) {
        var e = "normal",
        n = !1;
        switch (t) {
        case 1:
          e = "normal";
          break;
        case 0:
          e = "warning";
          break;
        case - 1 : e = "normal",
          n = !0
        }
        return {
          state: e,
          gray: n
        }
      }
    },
    {
      key: "updateOptions",
      value: function(t) {
        this.options = yi(vi(Ca), t),
        -1 !== this.options.state && 0 < this.options.extData.events && (this.options.state = 0);
        var e, n, i, o = (e = this.options.name, Oa.get(Xi(e)) || null),
        s = this.stateHandle(this.options.state);
        this.options.symbol = o ? {
          image: ha(n = ha(i = "".concat(Pa.resourceRoot)).call(i, s.state, "/")).call(n, o.icon),
          gray: s.gray
        }: "circle",
        this.options.events = this.options.extData.events || 0,
        ls(ps(a.prototype), "updateOptions", this).call(this, this.options),
        0 === this.options.state ? this.animation.opacity = new Ma({
          durationTime: 1e3,
          loop: !0
        }) : (this.animation.opacity = null, this.animation.scale = null)
      }
    },
    {
      key: "event",
      value: function(t) {
        var e = this;
        Ni([this.getPosition()[0] - this.getWidth() / 2, this.getPosition()[1] - this.getHeight() / 2], [this.getPosition()[0] + this.getWidth() / 2, this.getPosition()[1] + this.getHeight() / 2], t.x, t.y) && (this.scene.element.style.cursor = "pointer", clearTimeout(this._cursor_inter), this._cursor_inter = Ai(function() {
          e.scene.element.style.cursor = e.scene.options.mouse.drag.cursor.
        default
        },
        20))
      }
    },
    {
      key: "update",
      value: function(t) {
        this.animation.opacity && this.animation.opacity.update(t),
        this.animation.scale && this.animation.scale.update(t)
      }
    },
    {
      key: "render",
      value: function(t) {
        var e, n, i;
        t.save(),
        0 === this.options.state && (n = t.globalAlpha, this.animation.opacity && (t.globalAlpha = this.animation.opacity.getCurrent()), t.fillStyle = "#ccc", t.shadowBlur = 32, t.shadowColor = "#f00", t.beginPath(), t.arc.apply(t, ha(e = Ho(this.getPosition())).call(e, [this.getWidth() / 2, 0, 2 * Math.PI])), _s(t).call(t), t.globalAlpha = n, this.setWidth(1.1 * this.options.height), this.setHeight(1.1 * this.options.height)),
        ls(ps(a.prototype), "render", this).call(this, t),
        1 === this.options.state || (0 === this.options.state ? (i = [this.getPosition()[0] + this.getWidth() / 2 - 16, this.getPosition()[1] - this.getHeight() / 2 + 16], t.beginPath(), t.fillStyle = "#f00", t.arc.apply(t, ha(i).call(i, [16, 0, 2 * Math.PI])), _s(t).call(t), t.font = "normal normal normal 14px Microsoft YaHei UI Light", t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = "#fff", t.fillText(99 < this.options.events ? "99+": this.options.events, i[0], i[1] + 14 * .1)) : this.options.state),
        t.restore()
      }
    },
    {
      key: "destroy",
      value: function() {}
    }]),
    a
  } (),
  Fa = Ge.filter,
  Wa = yn("filter"),
  Na = Fe("filter");
  D({
    target: "Array",
    proto: !0,
    forced: !Wa || !Na
  },
  {
    filter: function(t, e) {
      return Fa(this, t, 1 < arguments.length ? e: void 0)
    }
  });
  var _a = Qe("Array").filter,
  Ga = Array.prototype,
  Ya = function(t) {
    var e = t.filter;
    return t === Ga || t instanceof Array && e === Ga.filter ? _a: e
  };
  function Za(i) {
    var o = function() {
      if ("undefined" == typeof Reflect || !Vo) return ! 1;
      if (Vo.sham) return ! 1;
      if ("function" == typeof Proxy) return ! 0;
      try {
        return Date.prototype.toString.call(Vo(Date, [],
        function() {})),
        !0
      } catch(t) {
        return ! 1
      }
    } ();
    return function() {
      var t, e, n = ps(i);
      return e = o ? (t = ps(this).constructor, Vo(n, arguments, t)) : n.apply(this, arguments),
      ns(this, e)
    }
  }
  var Ua = {
    zIndex: 1,
    lineStyle: {
      width: 6,
      color: "#0096cb"
    },
    start: {
      name: "",
      position: null,
      symbol: "circle",
      symbolWidth: 18,
      symbolHeight: 18
    },
    end: {
      name: "",
      position: null,
      symbol: {
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAWCAYAAABOm/V6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2QjdBMTFCQTlENjExMUVBQjNDMkIxMDVFOENGNkJDQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2QjdBMTFCQjlENjExMUVBQjNDMkIxMDVFOENGNkJDQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZCN0ExMUI4OUQ2MTExRUFCM0MyQjEwNUU4Q0Y2QkNBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZCN0ExMUI5OUQ2MTExRUFCM0MyQjEwNUU4Q0Y2QkNBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+2qnBxwAAAmxJREFUeNpiFC2ccJpdUcfg++Wji3jsApIZcIBv5/ZTVR0yYGKTUdFlFhRlAWpI+nJ40xJcCqmtDsUR387sj/nz6skvEIfH1i/628lde7H6kMrqUBzB5xW35tvp3T5/Xj3+CRLgMndz+nZq10F0hdRWh+IIsEbvxN1fT+62/f3i4Q+wRjM3u29n953EsIDK6lAcAQL8vkmnv53abfnrwfUPYI3GTmbfLx+/9XH9DBZkDdRWh+IIsEa/lAvfLx4x+HX/Glgjp66lKruawQ2gRh5aqmNCdxW/f+rD75ePaf28feE1iM+hbaHMrmFyHahRgFbqmLDFEdAHz39cOaH149qph2CNmiYyHHo2dz9unC1PC3WM8osv4ky1oPgDBt8toOsVQXxQsH6/ctyc3zf5FjXV4XUEVCMTq7z6KS5DB2MGRkYGUEJjU9AUpKY6JkIFCX9gxr//v36+g/EZ2TjYqa2OoCNAdQG3hYcryNWgfP/9/AFvaqtjwRMNHGyK2qe4jBx1Qfzfj29/+XbhsBMo/1NbHQsOB7ABE9BVYAJSAicgYLyB8jsou9FCHQsWB/AB8/EVYDaSBfF/3rn4+sfVU6ZYDKaaOhRHAPOtNNC1Z4GuFgdruHnuGTBv6wIT0ztaqmNB1sCpb3MFmK3AJRmwnL/z685FfaCGb+gGU1MdvMT8uGmOAaeB3TW4hotHrgE16GIYTGV18GwqGJ5vxWnksIdVSokTrOHcgQtAviG6wk9b5lFVHTJgFoopu84qrcwFzsMnd+3jMnW2wlrnc/FSVR1Kmvjz/tVTJh4B5R83zuwCFiJeuBRSWx0yAAgwAOGBqbDn8XQAAAAAAElFTkSuQmCC"
      },
      symbolWidth: 33,
      symbolHeight: 22
    }
  },
  Ja = function() {
    es(a, ds);
    var i = Za(a);
    function a(t, e) {
      var n;
      return No(this, a),
      (n = i.call(this, t)).options = vi(Ua),
      n.arrowRight = !0,
      n.arrowTop = !0,
      n.startScatter = null,
      n.endScatter = null,
      n.startSymbol = null,
      n.endSymbol = null,
      n.updateOptions(e),
      n
    }
    return Yo(a, [{
      key: "updateOptions",
      value: function(t) {
        var e, n, i, o, s = this;
        ls(ps(a.prototype), "updateOptions", this).call(this, t),
        this.options.start.position ? this.startScatter = Ya(e = this.scene.components).call(e,
        function(t) {
          var e;
          return - 1 !== Os(e = t.type.toLowerCase()).call(e, "scatter") && t.
        case.options.name === s.options.start.name && t.
        case.getPosition()[0] === s.options.start.position[0] && t.
        case.getPosition()[1] === s.options.start.position[1]
        })[0] || null: this.startScatter = Ya(n = this.scene.components).call(n,
        function(t) {
          var e;
          return - 1 !== Os(e = t.type.toLowerCase()).call(e, "scatter") && t.
        case.options.name === s.options.start.name
        })[0] || null,
        this.options.end.position ? this.endScatter = Ya(i = this.scene.components).call(i,
        function(t) {
          var e;
          return - 1 !== Os(e = t.type.toLowerCase()).call(e, "scatter") && t.
        case.options.name === s.options.end.name && t.
        case.getPosition()[0] === s.options.end.position[0] && t.
        case.getPosition()[1] === s.options.end.position[1]
        })[0] || null: this.endScatter = Ya(o = this.scene.components).call(o,
        function(t) {
          var e;
          return - 1 !== Os(e = t.type.toLowerCase()).call(e, "scatter") && t.
        case.options.name === s.options.end.name
        })[0] || null,
        this.startScatter && this.endScatter ? (this.arrowRight = 0 < this.endScatter.
      case.getPosition()[0] - this.startScatter.
      case.getPosition()[0], this.arrowTop = this.endScatter.
      case.getPosition()[1] - this.startScatter.
      case.getPosition()[1] < 0, -1 === this.startScatter.
      case.options.state || -1 === this.endScatter.
      case.options.state ? this.options.lineStyle.color = "#ccc": this.options.lineStyle.color = Ua.lineStyle.color) : this.startScatter ? console.warn("未匹配到名为: ".concat(this.options.end.name, "  的业务点!")) : console.warn("未匹配到名为: ".concat(this.options.start.name, "  的业务点!")),
        this.startSymbol = this.symbolHandle(this.options.start.symbol, this.options.start.symbolWidth, this.options.start.symbolHeight, this.options.lineStyle.color),
        this.endSymbol = this.symbolHandle(this.options.end.symbol, this.options.end.symbolWidth, this.options.end.symbolHeight, this.options.lineStyle.color)
      }
    },
    {
      key: "symbolHandle",
      value: function(t, e, n, i) {
        var o = null;
        return t && fi(t) ? (o = new Image).setAttribute("src", t.image) : "circle" === t && (o = new Zs(this.scene, {
          width: e,
          height: n,
          color: i,
          borderColor: i
        })),
        o
      }
    },
    {
      key: "symbolDrawHandle",
      value: function(t, e, n, i, o, s) {
        var a = null;
        return t && 1 === t.nodeType ? a = -1 === this.startScatter.
      case.options.state || -1 === this.endScatter.
      case.options.state ? _i(t) : t: t && "object" === di(t) && (t.render(), a = this.startSymbol.ctx.canvas),
        a && (e.save(), e.translate(n + o / 2, i + s / 2), e.rotate(this.arrowRight ? 0 : Math.PI), e.drawImage(a, -o / 2, -s / 2, o, s), e.restore()),
        a
      }
    },
    {
      key: "update",
      value: function() {}
    },
    {
      key: "event",
      value: function() {}
    },
    {
      key: "render",
      value: function(t) {
        var e, n, i, o, s, a, r, c, p;
        this.startScatter && this.endScatter && (t.save(), n = (e = this.startScatter.
      case).getPosition(), o = (i = this.endScatter.
      case).getPosition(), s = 100, t.lineWidth = this.options.lineStyle.width, t.strokeStyle = this.options.lineStyle.color, t.beginPath(), Math.abs(n[0] - o[0]) < 100 ? (this.arrowTop ? (t.moveTo(n[0], n[1] - e.getHeight() / 2), t.lineTo(o[0], o[1] + e.getHeight() / 2)) : (t.moveTo(n[0], n[1] + e.getHeight() / 2), t.lineTo(o[0], o[1] - e.getHeight() / 2)), t.stroke()) : (a = n[0] + e.getWidth() / 2 + 12, r = n[1], c = o[0] - i.getWidth() / 2 - 12 - this.options.end.symbolWidth, p = o[1], this.arrowRight ? (Math.abs(n[1] - o[1]) < 16 ? t.moveTo(a, r) : this.arrowTop ? (t.moveTo(a, r), t.lineTo(a + s - 16, r), t.arc(a + s - 16, r - 16, 16, .5 * Math.PI, 2 * Math.PI, !0), t.lineTo(a + s, p + 16), t.arc(a + s + 16, p + 16, 16, Math.PI, 1.5 * Math.PI)) : (t.moveTo(a, r), t.lineTo(a + s - 16, r), t.arc(a + s - 16, r + 16, 16, 1.5 * Math.PI, 2 * Math.PI), t.lineTo(a + s, p - 16), t.arc(a + s + 16, p - 16, 16, Math.PI, .5 * Math.PI, !0)), t.lineTo(c, p), t.stroke()) : (a = n[0] - e.getWidth() / 2 - 12, r = n[1], c = o[0] + i.getWidth() / 2 + 12 + this.options.end.symbolWidth, p = o[1], Math.abs(n[1] - o[1]) < 16 ? (t.moveTo(a, r), t.lineTo(c, p)) : (this.arrowTop ? (t.moveTo(a, r), t.lineTo(a - s + 16, r), t.arc(a - s + 16, r - 16, 16, .5 * Math.PI, Math.PI), t.lineTo(a - s, p + 16), t.arc(a - s - 16, p + 16, 16, 0, 1.5 * Math.PI, !0)) : (t.moveTo(a, r), t.lineTo(a - s + 16, r), t.arc(a - s + 16, r + 16, 16, 1.5 * Math.PI, Math.PI, !0), t.lineTo(a - s, p - 16), t.arc(a - s - 16, p - 16, 16, 0, .5 * Math.PI)), t.lineTo(c, p), t.stroke())), this.symbolDrawHandle(this.startSymbol, t, a - this.options.start.symbolWidth / 2, r - this.options.start.symbolHeight / 2, this.options.start.symbolWidth, this.options.start.symbolHeight), this.symbolDrawHandle(this.endSymbol, t, c + (this.arrowRight ? 0 : -this.options.end.symbolWidth), p - this.options.end.symbolHeight / 2, this.options.end.symbolWidth, this.options.end.symbolHeight)), t.restore())
      }
    },
    {
      key: "destroy",
      value: function() {}
    }]),
    a
  } ();
  return {
    version: "1.0.0",
    helper: Qi,
    config: Ta,
    VEngine: function() {
      function e(t) {
        No(this, e),
        this.options = gi({
          element: null,
          width: 1920,
          height: 1080,
          scale: 1,
          zoom: 1,
          zoomMin: 1,
          zoomMax: 5,
          translate: [0, 0],
          edit: {
            enable: !1,
            grid: !1
          },
          on: {
            init: null,
            mount: null,
            resize: null,
            destroy: null,
            drag: null,
            click: null,
            move: null
          },
          mouse: {
            drag: {
              cursor: {
              default:
                "url(https://webapi.amap.com/theme/v1.3/openhand.cur), default",
                active: "url(https://webapi.amap.com/theme/v1.3/closedhand.cur), default"
              }
            }
          }
        },
        t),
        this.element = null,
        this.ctx = null,
        this.devicePixelRatio = window.devicePixelRatio || 1,
        this.state = {
          mounted: !1
        },
        this.frame = {
          raf: -1,
          time: {
            now: 0,
            diff: 0
          }
        },
        this.inter = {
          resizeTransition: -1,
          resize: -1
        },
        this.components = [],
        this.sceneEvent = new Fs(this.options, this),
        this.init()
      }
      return Yo(e, [{
        key: "init",
        value: function() {
          this.ctx = Fi({
            width: this.options.width * this.options.scale,
            height: this.options.height * this.options.scale,
            dpr: this.devicePixelRatio
          }).getContext("2d"),
          this.options.element && this.mount(this.options.element),
          this.options.on.init && this.options.on.init(this)
        }
      },
      {
        key: "mount",
        value: function(e) {
          if (this.state.mounted) throw new Error("当前场景已经挂载到 ".concat(this.element, " 上了, 若想再次挂载，请先调用场景的destroy方法!"));
          this.element = Zi(e, {
            width: this.options.width * this.options.scale + "px",
            height: this.options.height * this.options.scale + "px"
          });
          try {
            this.element.appendChild(this.ctx.canvas)
          } catch(t) {
            return this.init(),
            this.mount(e),
            !1
          }
          this.sceneEvent.mount(this.element),
          this.state.mounted = !0,
          this.options.on.mount && this.options.on.mount(this),
          this.editingHandle()
        }
      },
      {
        key: "setOptionsCheck",
        value: function() {}
      },
      {
        key: "setOptions",
        value: function(t) {
          t = gi({
            edit: this.options.edit,
            series: null
          },
          t),
          this.setOptionsCheck(t),
          this.options = gi(this.options, t),
          this.editingHandle(),
          this.destroyAllComponent(),
          this.components.push({
            type: "Grid",
          case:
            new ys(this, {
              width: this.options.width,
              height: this.options.height
            })
          }),
          this.components.push({
            type: "Background",
          case:
            new ms(this, {
              width: this.options.width,
              height: this.options.height
            })
          }),
          this.seriesHandle(t.series),
          Pi(this.frame.raf),
          this.render()
        }
      },
      {
        key: "seriesHandle",
        value: function(t) {
          var o = this;
          hi(t) && en(t).call(t,
          function(t) {
            var e, n, i;
            switch (t.type) {
            case "Scatter":
              hi(t.data) && en(e = t.data).call(e,
              function(t) {
                o.components.push({
                  type: "Scatter",
                case:
                  new ua(o, t)
                })
              });
              break;
            case "BusinessScatter":
              hi(t.data) && en(n = t.data).call(n,
              function(t) {
                o.components.push({
                  type: "BusinessScatter",
                case:
                  new Ba(o, t)
                })
              });
              break;
            case "Lines":
              hi(t.data) && en(i = t.data).call(i,
              function(t) {
                o.components.push({
                  type: "Lines",
                case:
                  new Ja(o, t)
                })
              })
            }
          })
        }
      },
      {
        key: "render",
        value: function(t) {
          var e, n, i, o, s = this;
          this.frame.raf = Oi(Wo(e = this.render).call(e, this)),
          t && (this.frame.time.diff = Math.min(t - this.frame.time.now, 20), this.frame.time.now = t, Wi(this.ctx.canvas), this.ctx.save(), (n = this.ctx).translate.apply(n, Ho(this.options.translate)), this.ctx.scale(this.options.scale * this.devicePixelRatio * this.options.zoom, this.options.scale * this.devicePixelRatio * this.options.zoom), this.components = oo(i = this.components).call(i,
          function(t, e) {
            return t.
          case.getZIndex() - e.
          case.getZIndex()
          }), en(o = this.components).call(o,
          function(t) {
            t.
          case && t.
          case.update(s.frame.time.diff),
            t.
          case && t.
          case.render(s.ctx),
            t.
          case && t.
          case.event(s.sceneEvent)
          }), this.ctx.restore())
        }
      },
      {
        key: "editingHandle",
        value: function() {
          this.options.edit.enable ? this.options.edit.grid = !0 : this.options.edit.grid = !1
        }
      },
      {
        key: "resetZoomAndTranslate",
        value: function() {
          this.options.zoom = 1,
          this.options.translate = [0, 0]
        }
      },
      {
        key: "destroyAllComponent",
        value: function() {
          var t;
          en(t = this.components).call(t,
          function(t) {
            t.
          case.destroy()
          }),
          this.components = []
        }
      },
      {
        key: "destroy",
        value: function() {
          this.sceneEvent && this.sceneEvent.destroy(),
          this.destroyAllComponent(),
          this.element && Ui(this.element),
          this.element = null,
          this.ctx = null,
          this.state.mounted = !1,
          Pi(this.frame.raf),
          this.frame.time.now = 0,
          this.frame.time.diff = 0,
          this.resetZoomAndTranslate(),
          this.options.on.destroy && this.options.on.destroy(this)
        }
      }]),
      e
    } ()
  }
});
/*
     vEngine v1.0.0
     渲染引擎由vDper提供技术支持
  */
!
function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).vEngine = e()
} (this,
function() {
  var t = "undefined" != typeof globalThis ? globalThis: "undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self ? self: {};
  function e(t, e) {
    return t(e = {
      exports: {}
    },
    e.exports),
    e.exports
  }
  function n(t) {
    return t && t.Math == Math && t
  }
  function a(t) {
    try {
      return !! t()
    } catch(t) {
      return ! 0
    }
  }
  function b(t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    }
  }
  function o(t) {
    return S.call(t).slice(8, -1)
  }
  function c(t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t
  }
  function p(t) {
    return A(c(t))
  }
  function s(t, e) {
    if (!O(t)) return t;
    var n, i;
    if (e && "function" == typeof(n = t.toString) && !O(i = n.call(t))) return i;
    if ("function" == typeof(n = t.valueOf) && !O(i = n.call(t))) return i;
    if (!e && "function" == typeof(n = t.toString) && !O(i = n.call(t))) return i;
    throw TypeError("Can't convert object to primitive value")
  }
  function i(t) {
    return j ? T.createElement(t) : {}
  }
  function r(t, e) {
    var n = z[R(t)];
    return n == B || n != C && ("function" == typeof e ? a(e) : !!e)
  }
  function u(t) {
    if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
    return t
  }
  function w(i, o, t) {
    if (u(i), void 0 === o) return i;
    switch (t) {
    case 0:
      return function() {
        return i.call(o)
      };
    case 1:
      return function(t) {
        return i.call(o, t)
      };
    case 2:
      return function(t, e) {
        return i.call(o, t, e)
      };
    case 3:
      return function(t, e, n) {
        return i.call(o, t, e, n)
      }
    }
    return function() {
      return i.apply(o, arguments)
    }
  }
  function g(i) {
    function t(t, e, n) {
      if (this instanceof i) {
        switch (arguments.length) {
        case 0:
          return new i;
        case 1:
          return new i(t);
        case 2:
          return new i(t, e)
        }
        return new i(t, e, n)
      }
      return i.apply(this, arguments)
    }
    return t.prototype = i.prototype,
    t
  }
  function D(t, e) {
    var n, i, o, s, a, r, c, p, u = t.target,
    l = t.global,
    d = t.stat,
    h = t.proto,
    f = l ? y: d ? y[u] : (y[u] || {}).prototype,
    m = l ? W: W[u] || (W[u] = {}),
    v = m.prototype;
    for (o in e) n = !F(l ? o: u + (d ? ".": "#") + o, t.forced) && f && E(f, o),
    a = m[o],
    n && (r = t.noTargetGet ? (p = Z(f, o)) && p.value: f[o]),
    s = n && r ? r: e[o],
    n && typeof a == typeof s || (c = t.bind && n ? w(s, y) : t.wrap && n ? g(s) : h && "function" == typeof s ? w(Function.call, s) : s, (t.sham || s && s.sham || a && a.sham) && Y(c, "sham", !0), m[o] = c, h && (E(W, i = u + "Prototype") || Y(W, i, {}), W[i][o] = s, t.real && v && !v[o] && Y(v, o, s)))
  }
  function l(t) {
    return "function" == typeof t ? t: void 0
  }
  function d(t, e) {
    return arguments.length < 2 ? l(W[t]) || l(y[t]) : W[t] && W[t][e] || y[t] && y[t][e]
  }
  function h(t, e, n) {
    var i = n.charAt(e - 1),
    o = n.charAt(e + 1);
    return X.test(t) && !V.test(o) || V.test(t) && !X.test(i) ? "\\u" + t.charCodeAt(0).toString(16) : t
  }
  var y = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")(),
  f = !a(function() {
    return 7 != Object.defineProperty({},
    1, {
      get: function() {
        return 7
      }
    })[1]
  }),
  m = {}.propertyIsEnumerable,
  v = Object.getOwnPropertyDescriptor,
  x = {
    f: v && !m.call({
      1 : 2
    },
    1) ?
    function(t) {
      var e = v(this, t);
      return !! e && e.enumerable
    }: m
  },
  S = {}.toString,
  k = "".split,
  A = a(function() {
    return ! Object("z").propertyIsEnumerable(0)
  }) ?
  function(t) {
    return "String" == o(t) ? k.call(t, "") : Object(t)
  }: Object,
  O = function(t) {
    return "object" == typeof t ? null !== t: "function" == typeof t
  },
  P = {}.hasOwnProperty,
  E = function(t, e) {
    return P.call(t, e)
  },
  T = y.document,
  j = O(T) && O(T.createElement),
  I = !f && !a(function() {
    return 7 != Object.defineProperty(i("div"), "a", {
      get: function() {
        return 7
      }
    }).a
  }),
  M = Object.getOwnPropertyDescriptor,
  L = {
    f: f ? M: function(t, e) {
      if (t = p(t), e = s(e, !0), I) try {
        return M(t, e)
      } catch(t) {}
      if (E(t, e)) return b(!x.f.call(t, e), t[e])
    }
  },
  H = /#|\.prototype\./,
  R = r.normalize = function(t) {
    return String(t).replace(H, ".").toLowerCase()
  },
  z = r.data = {},
  C = r.NATIVE = "N",
  B = r.POLYFILL = "P",
  F = r,
  W = {},
  N = function(t) {
    if (!O(t)) throw TypeError(String(t) + " is not an object");
    return t
  },
  _ = Object.defineProperty,
  G = {
    f: f ? _: function(t, e, n) {
      if (N(t), e = s(e, !0), N(n), I) try {
        return _(t, e, n)
      } catch(t) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
      return "value" in n && (t[e] = n.value),
      t
    }
  },
  Y = f ?
  function(t, e, n) {
    return G.f(t, e, b(1, n))
  }: function(t, e, n) {
    return t[e] = n,
    t
  },
  Z = L.f,
  U = d("JSON", "stringify"),
  J = /[\uD800-\uDFFF]/g,
  X = /^[\uD800-\uDBFF]$/,
  V = /^[\uDC00-\uDFFF]$/,
  Q = a(function() {
    return '"\\udf06\\ud834"' !== U("\udf06\ud834") || '"\\udead"' !== U("\udead")
  });
  U && D({
    target: "JSON",
    stat: !0,
    forced: Q
  },
  {
    stringify: function(t, e, n) {
      var i = U.apply(null, arguments);
      return "string" == typeof i ? i.replace(J, h) : i
    }
  }),
  W.JSON || (W.JSON = {
    stringify: JSON.stringify
  });
  var q = function(t, e, n) {
    return W.JSON.stringify.apply(null, arguments)
  },
  K = {},
  $ = "__core-js_shared__",
  tt = y[$] ||
  function(e, n) {
    try {
      Y(y, e, n)
    } catch(t) {
      y[e] = n
    }
    return n
  } ($, {}),
  et = Function.toString;
  "function" != typeof tt.inspectSource && (tt.inspectSource = function(t) {
    return et.call(t)
  });
  function nt(t) {
    return "Symbol(" + String(void 0 === t ? "": t) + ")_" + (++vt + gt).toString(36)
  }
  function it(t) {
    return yt[t] || (yt[t] = nt(t))
  }
  var ot, st, at, rt, ct, pt, ut, lt, dt = tt.inspectSource,
  ht = y.WeakMap,
  ft = "function" == typeof ht && /native code/.test(dt(ht)),
  mt = e(function(t) { (t.exports = function(t, e) {
      return tt[t] || (tt[t] = void 0 !== e ? e: {})
    })("versions", []).push({
      version: "3.6.4",
      mode: "pure",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    })
  }),
  vt = 0,
  gt = Math.random(),
  yt = mt("keys"),
  xt = {},
  bt = y.WeakMap;
  ut = ft ? (ot = new bt, st = ot.get, at = ot.has, rt = ot.set, ct = function(t, e) {
    return rt.call(ot, t, e),
    e
  },
  pt = function(t) {
    return st.call(ot, t) || {}
  },
  function(t) {
    return at.call(ot, t)
  }) : (lt = it("state"), xt[lt] = !0, ct = function(t, e) {
    return Y(t, lt, e),
    e
  },
  pt = function(t) {
    return E(t, lt) ? t[lt] : {}
  },
  function(t) {
    return E(t, lt)
  });
  function wt(t) {
    return Object(c(t))
  }
  function Dt(t) {
    return E(Lt, t) || (It && E(Ht, t) ? Lt[t] = Ht[t] : Lt[t] = Rt("Symbol." + t)),
    Lt[t]
  }
  var St, kt, At, Ot = {
    set: ct,
    get: pt,
    has: ut,
    enforce: function(t) {
      return ut(t) ? pt(t) : ct(t, {})
    },
    getterFor: function(n) {
      return function(t) {
        var e;
        if (!O(t) || (e = pt(t)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
        return e
      }
    }
  },
  Pt = !a(function() {
    function t() {}
    return t.prototype.constructor = null,
    Object.getPrototypeOf(new t) !== t.prototype
  }),
  Et = it("IE_PROTO"),
  Tt = Object.prototype,
  jt = Pt ? Object.getPrototypeOf: function(t) {
    return t = wt(t),
    E(t, Et) ? t[Et] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype: t instanceof Object ? Tt: null
  },
  It = !!Object.getOwnPropertySymbols && !a(function() {
    return ! String(Symbol())
  }),
  Mt = It && !Symbol.sham && "symbol" == typeof Symbol.iterator,
  Lt = mt("wks"),
  Ht = y.Symbol,
  Rt = Mt ? Ht: Ht && Ht.withoutSetter || nt,
  zt = (Dt("iterator"), !1); [].keys && ("next" in (At = [].keys()) ? (kt = jt(jt(At))) !== Object.prototype && (St = kt) : zt = !0),
  null == St && (St = {});
  function Ct(t) {
    return isNaN(t = +t) ? 0 : (0 < t ? Jt: Ut)(t)
  }
  function Bt(t) {
    return 0 < t ? Xt(Ct(t), 9007199254740991) : 0
  }
  function Ft(t, e) {
    var n = Ct(t);
    return n < 0 ? Vt(n + e, 0) : Qt(n, e)
  }
  function Wt(r) {
    return function(t, e, n) {
      var i, o = p(t),
      s = Bt(o.length),
      a = Ft(n, s);
      if (r && e != e) {
        for (; a < s;) if ((i = o[a++]) != i) return ! 0
      } else for (; a < s; a++) if ((r || a in o) && o[a] === e) return r || a || 0;
      return ! r && -1
    }
  }
  function Nt(t, e) {
    var n, i = p(t),
    o = 0,
    s = [];
    for (n in i) ! E(xt, n) && E(i, n) && s.push(n);
    for (; e.length > o;) E(i, n = e[o++]) && (~Kt(s, n) || s.push(n));
    return s
  }
  function _t() {}
  function Gt(t) {
    return "<script>" + t + "</" + oe + ">"
  }
  var Yt, Zt = {
    IteratorPrototype: St,
    BUGGY_SAFARI_ITERATORS: zt
  },
  Ut = Math.ceil,
  Jt = Math.floor,
  Xt = Math.min,
  Vt = Math.max,
  Qt = Math.min,
  qt = {
    includes: Wt(!0),
    indexOf: Wt(!1)
  },
  Kt = qt.indexOf,
  $t = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
  te = Object.keys ||
  function(t) {
    return Nt(t, $t)
  },
  ee = f ? Object.defineProperties: function(t, e) {
    N(t);
    for (var n, i = te(e), o = i.length, s = 0; s < o;) G.f(t, n = i[s++], e[n]);
    return t
  },
  ne = d("document", "documentElement"),
  ie = "prototype",
  oe = "script",
  se = it("IE_PROTO"),
  ae = function() {
    try {
      Yt = document.domain && new ActiveXObject("htmlfile")
    } catch(t) {}
    var t, e;
    ae = Yt ?
    function(t) {
      t.write(Gt("")),
      t.close();
      var e = t.parentWindow.Object;
      return t = null,
      e
    } (Yt) : ((e = i("iframe")).style.display = "none", ne.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(Gt("document.F=Object")), t.close(), t.F);
    for (var n = $t.length; n--;) delete ae[ie][$t[n]];
    return ae()
  };
  xt[se] = !0;
  var re = Object.create ||
  function(t, e) {
    var n;
    return null !== t ? (_t[ie] = N(t), n = new _t, _t[ie] = null, n[se] = t) : n = ae(),
    void 0 === e ? n: ee(n, e)
  },
  ce = {};
  ce[Dt("toStringTag")] = "z";
  function pe(t, e, n, i) {
    var o;
    t && (o = n ? t: t.prototype, E(o, be) || xe(o, be, {
      configurable: !0,
      value: e
    }), i && !fe && Y(o, "toString", ye))
  }
  function ue() {
    return this
  }
  function le(t, e, n, i) {
    i && i.enumerable ? t[e] = n: Y(t, e, n)
  }
  function de() {
    return this
  }
  function he(t, e, n, i, o, s, a) {
    var r, c, p;
    function u(t) {
      if (t === o && y) return y;
      if (!ke && t in v) return v[t];
      switch (t) {
      case "keys":
      case Oe:
      case Pe:
        return function() {
          return new n(this, t)
        }
      }
      return function() {
        return new n(this)
      }
    }
    c = i,
    p = e + " Iterator",
    (r = n).prototype = re(we, {
      next: b(1, c)
    }),
    pe(r, p, !1, !0),
    K[p] = ue;
    var l, d, h, f = e + " Iterator",
    m = !1,
    v = t.prototype,
    g = v[Ae] || v["@@iterator"] || o && v[o],
    y = !ke && g || u(o),
    x = "Array" == e && v.entries || g;
    if (x && (l = jt(x.call(new t)), Se !== Object.prototype && l.next && (pe(l, f, !0, !0), K[f] = de)), o == Oe && g && g.name !== Oe && (m = !0, y = function() {
      return g.call(this)
    }), a && v[Ae] !== y && Y(v, Ae, y), K[e] = y, o) if (d = {
      values: u(Oe),
      keys: s ? y: u("keys"),
      entries: u(Pe)
    },
    a) for (h in d) ! ke && !m && h in v || le(v, h, d[h]);
    else D({
      target: e,
      proto: !0,
      forced: ke || m
    },
    d);
    return d
  }
  var fe = "[object z]" === String(ce),
  me = Dt("toStringTag"),
  ve = "Arguments" == o(function() {
    return arguments
  } ()),
  ge = fe ? o: function(t) {
    var e, n, i;
    return void 0 === t ? "Undefined": null === t ? "Null": "string" == typeof(n = function(t, e) {
      try {
        return t[e]
      } catch(t) {}
    } (e = Object(t), me)) ? n: ve ? o(e) : "Object" == (i = o(e)) && "function" == typeof e.callee ? "Arguments": i
  },
  ye = fe ? {}.toString: function() {
    return "[object " + ge(this) + "]"
  },
  xe = G.f,
  be = Dt("toStringTag"),
  we = Zt.IteratorPrototype,
  De = Object.setPrototypeOf || ("__proto__" in {} ?
  function() {
    var n, i = !1,
    t = {};
    try { (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []),
      i = t instanceof Array
    } catch(t) {}
    return function(t, e) {
      return N(t),
      function(t) {
        if (!O(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
      } (e),
      i ? n.call(t, e) : t.__proto__ = e,
      t
    }
  } () : void 0),
  Se = Zt.IteratorPrototype,
  ke = Zt.BUGGY_SAFARI_ITERATORS,
  Ae = Dt("iterator"),
  Oe = "values",
  Pe = "entries",
  Ee = "Array Iterator",
  Te = Ot.set,
  je = Ot.getterFor(Ee);
  he(Array, "Array",
  function(t, e) {
    Te(this, {
      type: Ee,
      target: p(t),
      index: 0,
      kind: e
    })
  },
  function() {
    var t = je(this),
    e = t.target,
    n = t.kind,
    i = t.index++;
    return ! e || i >= e.length ? {
      value: t.target = void 0,
      done: !0
    }: "keys" == n ? {
      value: i,
      done: !1
    }: "values" == n ? {
      value: e[i],
      done: !1
    }: {
      value: [i, e[i]],
      done: !1
    }
  },
  "values");
  K.Arguments = K.Array;
  var Ie = Dt("toStringTag");
  for (var Me in {
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
  }) {
    var Le = y[Me],
    He = Le && Le.prototype;
    He && ge(He) !== Ie && Y(He, Ie, Me),
    K[Me] = K.Array
  }
  function Re(t, e) {
    var n;
    return We(t) && ("function" == typeof(n = t.constructor) && (n === Array || We(n.prototype)) || O(n) && null === (n = n[Ne])) && (n = void 0),
    new(void 0 === n ? Array: n)(0 === e ? 0 : e)
  }
  function ze(h) {
    var f = 1 == h,
    m = 2 == h,
    v = 3 == h,
    g = 4 == h,
    y = 6 == h,
    x = 5 == h || y;
    return function(t, e, n, i) {
      for (var o, s, a = wt(t), r = A(a), c = w(e, n, 3), p = Bt(r.length), u = 0, l = i || Re, d = f ? l(t, p) : m ? l(t, 0) : void 0; u < p; u++) if ((x || u in r) && (s = c(o = r[u], u, a), h)) if (f) d[u] = s;
      else if (s) switch (h) {
      case 3:
        return ! 0;
      case 5:
        return o;
      case 6:
        return u;
      case 2:
        _e.call(d, o)
      } else if (g) return ! 1;
      return y ? -1 : v || g ? g: d
    }
  }
  function Ce(t, e) {
    var n = [][t];
    return !! n && a(function() {
      n.call(null, e ||
      function() {
        throw 1
      },
      1)
    })
  }
  function Be(t) {
    throw t
  }
  function Fe(t, e) {
    if (E(Ze, t)) return Ze[t];
    var n = [][t],
    i = !!E(e = e || {},
    "ACCESSORS") && e.ACCESSORS,
    o = E(e, 0) ? e[0] : Be,
    s = E(e, 1) ? e[1] : void 0;
    return Ze[t] = !!n && !a(function() {
      if (i && !f) return 1;
      var t = {
        length: -1
      };
      i ? Ye(t, 1, {
        enumerable: !0,
        get: Be
      }) : t[1] = 1,
      n.call(t, o, s)
    })
  }
  var We = Array.isArray ||
  function(t) {
    return "Array" == o(t)
  },
  Ne = Dt("species"),
  _e = [].push,
  Ge = {
    forEach: ze(0),
    map: ze(1),
    filter: ze(2),
    some: ze(3),
    every: ze(4),
    find: ze(5),
    findIndex: ze(6)
  },
  Ye = Object.defineProperty,
  Ze = {},
  Ue = Ge.forEach,
  Je = Ce("forEach"),
  Xe = Fe("forEach"),
  Ve = Je && Xe ? [].forEach: function(t, e) {
    return Ue(this, t, 1 < arguments.length ? e: void 0)
  };
  D({
    target: "Array",
    proto: !0,
    forced: [].forEach != Ve
  },
  {
    forEach: Ve
  });
  function Qe(t) {
    return W[t + "Prototype"]
  }
  function qe(t) {
    var e = W.Symbol || (W.Symbol = {});
    E(e, t) || on(e, t, {
      value: nn.f(t)
    })
  }
  var Ke = Qe("Array").forEach,
  $e = Array.prototype,
  tn = {
    DOMTokenList: !0,
    NodeList: !0
  },
  en = function(t) {
    var e = t.forEach;
    return t === $e || t instanceof Array && e === $e.forEach || tn.hasOwnProperty(ge(t)) ? Ke: e
  },
  nn = {
    f: Dt
  },
  on = G.f;
  qe("iterator");
  function sn(r) {
    return function(t, e) {
      var n, i, o = String(c(t)),
      s = Ct(e),
      a = o.length;
      return s < 0 || a <= s ? r ? "": void 0 : (n = o.charCodeAt(s)) < 55296 || 56319 < n || s + 1 === a || (i = o.charCodeAt(s + 1)) < 56320 || 57343 < i ? r ? o.charAt(s) : n: r ? o.slice(s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536
    }
  }
  var an = {
    codeAt: sn(!1),
    charAt: sn(!0)
  }.charAt,
  rn = "String Iterator",
  cn = Ot.set,
  pn = Ot.getterFor(rn);
  he(String, "String",
  function(t) {
    cn(this, {
      type: rn,
      string: String(t),
      index: 0
    })
  },
  function() {
    var t, e = pn(this),
    n = e.string,
    i = e.index;
    return i >= n.length ? {
      value: void 0,
      done: !0
    }: (t = an(n, i), e.index += t.length, {
      value: t,
      done: !1
    })
  });
  function un(t, e, n) {
    var i = s(e);
    i in t ? G.f(t, i, b(0, n)) : t[i] = n
  }
  var ln, dn, hn = nn.f("iterator"),
  fn = d("navigator", "userAgent") || "",
  mn = y.process,
  vn = mn && mn.versions,
  gn = vn && vn.v8;
  gn ? dn = (ln = gn.split("."))[0] + ln[1] : fn && (!(ln = fn.match(/Edge\/(\d+)/)) || 74 <= ln[1]) && (ln = fn.match(/Chrome\/(\d+)/)) && (dn = ln[1]);
  function yn(e) {
    return 51 <= xn || !a(function() {
      var t = [];
      return (t.constructor = {})[bn] = function() {
        return {
          foo: 1
        }
      },
      1 !== t[e](Boolean).foo
    })
  }
  var xn = dn && +dn,
  bn = Dt("species"),
  wn = Dt("isConcatSpreadable"),
  Dn = 9007199254740991,
  Sn = "Maximum allowed index exceeded",
  kn = 51 <= xn || !a(function() {
    var t = [];
    return t[wn] = !1,
    t.concat()[0] !== t
  }),
  An = yn("concat");
  D({
    target: "Array",
    proto: !0,
    forced: !kn || !An
  },
  {
    concat: function(t) {
      for (var e, n, i, o = wt(this), s = Re(o, 0), a = 0, r = -1, c = arguments.length; r < c; r++) if (function(t) {
        if (!O(t)) return ! 1;
        var e = t[wn];
        return void 0 !== e ? !!e: We(t)
      } (i = -1 === r ? o: arguments[r])) {
        if (n = Bt(i.length), Dn < a + n) throw TypeError(Sn);
        for (e = 0; e < n; e++, a++) e in i && un(s, a, i[e])
      } else {
        if (Dn <= a) throw TypeError(Sn);
        un(s, a++, i)
      }
      return s.length = a,
      s
    }
  });
  function On(t, e) {
    var n = Kn[t] = re(Un[Nn]);
    return Gn(n, {
      type: Wn,
      tag: t,
      description: e
    }),
    f || (n.description = e),
    n
  }
  function Pn(e, t) {
    N(e);
    var n = p(t),
    i = te(n).concat(pi(n));
    return Bn(i,
    function(t) {
      f && !ci.call(n, t) || ri(e, t, n[t])
    }),
    e
  }
  function En(t, e) {
    var n = p(t),
    i = s(e, !0);
    if (n !== Zn || !E(Kn, i) || E($n, i)) {
      var o = Xn(n, i);
      return ! o || !E(Kn, i) || E(n, Fn) && n[Fn][i] || (o.enumerable = !0),
      o
    }
  }
  function Tn(t) {
    var e = Qn(p(t)),
    n = [];
    return Bn(e,
    function(t) {
      E(Kn, t) || E(xt, t) || n.push(t)
    }),
    n
  }
  var jn, In = $t.concat("length", "prototype"),
  Mn = {
    f: Object.getOwnPropertyNames ||
    function(t) {
      return Nt(t, In)
    }
  },
  Ln = Mn.f,
  Hn = {}.toString,
  Rn = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
  zn = {
    f: function(t) {
      return Rn && "[object Window]" == Hn.call(t) ?
      function(t) {
        try {
          return Ln(t)
        } catch(t) {
          return Rn.slice()
        }
      } (t) : Ln(p(t))
    }
  },
  Cn = {
    f: Object.getOwnPropertySymbols
  },
  Bn = Ge.forEach,
  Fn = it("hidden"),
  Wn = "Symbol",
  Nn = "prototype",
  _n = Dt("toPrimitive"),
  Gn = Ot.set,
  Yn = Ot.getterFor(Wn),
  Zn = Object[Nn],
  Un = y.Symbol,
  Jn = d("JSON", "stringify"),
  Xn = L.f,
  Vn = G.f,
  Qn = zn.f,
  qn = x.f,
  Kn = mt("symbols"),
  $n = mt("op-symbols"),
  ti = mt("string-to-symbol-registry"),
  ei = mt("symbol-to-string-registry"),
  ni = mt("wks"),
  ii = y.QObject,
  oi = !ii || !ii[Nn] || !ii[Nn].findChild,
  si = f && a(function() {
    return 7 != re(Vn({},
    "a", {
      get: function() {
        return Vn(this, "a", {
          value: 7
        }).a
      }
    })).a
  }) ?
  function(t, e, n) {
    var i = Xn(Zn, e);
    i && delete Zn[e],
    Vn(t, e, n),
    i && t !== Zn && Vn(Zn, e, i)
  }: Vn,
  ai = Mt ?
  function(t) {
    return "symbol" == typeof t
  }: function(t) {
    return Object(t) instanceof Un
  },
  ri = function(t, e, n) {
    t === Zn && ri($n, e, n),
    N(t);
    var i = s(e, !0);
    return N(n),
    E(Kn, i) ? (n.enumerable ? (E(t, Fn) && t[Fn][i] && (t[Fn][i] = !1), n = re(n, {
      enumerable: b(0, !1)
    })) : (E(t, Fn) || Vn(t, Fn, b(1, {})), t[Fn][i] = !0), si(t, i, n)) : Vn(t, i, n)
  },
  ci = function(t) {
    var e = s(t, !0),
    n = qn.call(this, e);
    return ! (this === Zn && E(Kn, e) && !E($n, e)) && (!(n || !E(this, e) || !E(Kn, e) || E(this, Fn) && this[Fn][e]) || n)
  },
  pi = function(t) {
    var e = t === Zn,
    n = Qn(e ? $n: p(t)),
    i = [];
    return Bn(n,
    function(t) { ! E(Kn, t) || e && !E(Zn, t) || i.push(Kn[t])
    }),
    i
  };
  It || (le((Un = function(t) {
    if (this instanceof Un) throw TypeError("Symbol is not a constructor");
    var e = arguments.length && void 0 !== t ? String(t) : void 0,
    n = nt(e),
    i = function(t) {
      this === Zn && i.call($n, t),
      E(this, Fn) && E(this[Fn], n) && (this[Fn][n] = !1),
      si(this, n, b(1, t))
    };
    return f && oi && si(Zn, n, {
      configurable: !0,
      set: i
    }),
    On(n, e)
  })[Nn], "toString",
  function() {
    return Yn(this).tag
  }), le(Un, "withoutSetter",
  function(t) {
    return On(nt(t), t)
  }), x.f = ci, G.f = ri, L.f = En, Mn.f = zn.f = Tn, Cn.f = pi, nn.f = function(t) {
    return On(Dt(t), t)
  },
  f && Vn(Un[Nn], "description", {
    configurable: !0,
    get: function() {
      return Yn(this).description
    }
  })),
  D({
    global: !0,
    wrap: !0,
    forced: !It,
    sham: !It
  },
  {
    Symbol: Un
  }),
  Bn(te(ni),
  function(t) {
    qe(t)
  }),
  D({
    target: Wn,
    stat: !0,
    forced: !It
  },
  {
    for: function(t) {
      var e = String(t);
      if (E(ti, e)) return ti[e];
      var n = Un(e);
      return ti[e] = n,
      ei[n] = e,
      n
    },
    keyFor: function(t) {
      if (!ai(t)) throw TypeError(t + " is not a symbol");
      if (E(ei, t)) return ei[t]
    },
    useSetter: function() {
      oi = !0
    },
    useSimple: function() {
      oi = !1
    }
  }),
  D({
    target: "Object",
    stat: !0,
    forced: !It,
    sham: !f
  },
  {
    create: function(t, e) {
      return void 0 === e ? re(t) : Pn(re(t), e)
    },
    defineProperty: ri,
    defineProperties: Pn,
    getOwnPropertyDescriptor: En
  }),
  D({
    target: "Object",
    stat: !0,
    forced: !It
  },
  {
    getOwnPropertyNames: Tn,
    getOwnPropertySymbols: pi
  }),
  D({
    target: "Object",
    stat: !0,
    forced: a(function() {
      Cn.f(1)
    })
  },
  {
    getOwnPropertySymbols: function(t) {
      return Cn.f(wt(t))
    }
  }),
  Jn && (jn = !It || a(function() {
    var t = Un();
    return "[null]" != Jn([t]) || "{}" != Jn({
      a: t
    }) || "{}" != Jn(Object(t))
  }), D({
    target: "JSON",
    stat: !0,
    forced: jn
  },
  {
    stringify: function(t, e, n) {
      for (var i, o = [t], s = 1; s < arguments.length;) o.push(arguments[s++]);
      if ((O(i = e) || void 0 !== t) && !ai(t)) return We(e) || (e = function(t, e) {
        if ("function" == typeof i && (e = i.call(this, t, e)), !ai(e)) return e
      }),
      o[1] = e,
      Jn.apply(null, o)
    }
  })),
  Un[Nn][_n] || Y(Un[Nn], _n, Un[Nn].valueOf),
  pe(Un, Wn),
  xt[Fn] = !0,
  qe("asyncIterator"),
  qe("hasInstance"),
  qe("isConcatSpreadable"),
  qe("match"),
  qe("matchAll"),
  qe("replace"),
  qe("search"),
  qe("species"),
  qe("split"),
  qe("toPrimitive"),
  qe("toStringTag"),
  qe("unscopables"),
  pe(Math, "Math", !0),
  pe(y.JSON, "JSON", !0);
  var ui = W.Symbol;
  qe("asyncDispose"),
  qe("dispose"),
  qe("observable"),
  qe("patternMatch"),
  qe("replaceAll");
  var li = ui,
  di = e(function(e) {
    function n(t) {
      return e.exports = n = "function" == typeof li && "symbol" == typeof hn ?
      function(t) {
        return typeof t
      }: function(t) {
        return t && "function" == typeof li && t.constructor === li && t !== li.prototype ? "symbol": typeof t
      },
      n(t)
    }
    e.exports = n
  });
  function hi(t) {
    return "[object Array]" === Object.prototype.toString.call(t)
  }
  function fi(t) {
    return "[object Object]" === Object.prototype.toString.call(t)
  }
  function mi(t) {
    return null == t
  }
  function vi(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
    if (!t) return t;
    var n = {};
    for (var i in hi(t) && (n = []), t) {
      var o = t[i];
      o && "object" === di(o) && (hi(o) || (e ? o.constructor === Object: fi(o))) ? n[i] = vi(o, e) : n[i] = null === o ? null: o
    }
    return n
  }
  function gi() {
    var o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
    s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
    a = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
    if (hi(o) || hi(s)) throw new Error("仅支持对象间的合并!");
    for (var t in s) !
    function(n) {
      var i, t = o[n],
      e = s[n];
      o.hasOwnProperty(n) && (e && "object" === di(e) ? e.constructor === Object ? t && "object" === di(t) && t.constructor === Object ? o[n] = gi(t, e, a) : o[n] = vi(e, a) : e.constructor === Array ? (i = vi(t, a) || [], o[n] = [], en(e).call(e,
      function(t, e) {
        t && "object" === di(t) ? t.constructor === Object && i[e] && "object" === di(i[e]) && i[e].constructor === Object ? o[n].push(gi(i[e], t, a)) : o[n].push(vi(t, a)) : null === t ? o[n].push(null) : o[n].push(t)
      })) : o[n] = e: o[n] = null === e ? null: e)
    } (t);
    return o
  }
  function yi() {
    var o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
    s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
    a = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
    if (hi(o) || hi(s)) throw new Error("仅支持对象的合并!");
    for (var t in s) !
    function(n) {
      var i, t = o[n],
      e = s[n];
      e && "object" === di(e) ? e.constructor === Object ? t && "object" === di(t) && t.constructor === Object ? o[n] = yi(t, e, a) : o[n] = vi(e, a) : e.constructor === Array ? (i = vi(t, a) || [], o[n] = [], en(e).call(e,
      function(t, e) {
        t && "object" === di(t) ? t.constructor === Object && i[e] && "object" === di(i[e]) && i[e].constructor === Object ? o[n].push(yi(i[e], t, a)) : o[n].push(vi(t, a)) : null === t ? o[n].push(null) : o[n].push(t)
      })) : o[n] = e: o[n] = null === e ? null: e
    } (t);
    return o
  }
  var xi = Object.freeze({
    __proto__: null,
    isArray: hi,
    isObject: fi,
    isEmpty: mi,
    cloneDeep: vi,
    assign: gi,
    assignDeep: yi,
    cloneDeepByJSON: function() {
      var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.parse(q(t))
    }
  });
  function bi(t) {
    return t && 1 === t.nodeType
  }
  function wi(o) {
    return function(t, e) {
      var n = 2 < arguments.length,
      i = n ? Si.call(arguments, 2) : void 0;
      return o(n ?
      function() { ("function" == typeof t ? t: Function(t)).apply(this, i)
      }: t, e)
    }
  }
  var Di = Object.freeze({
    __proto__: null,
    isElement: bi
  }),
  Si = [].slice,
  ki = /MSIE .\./.test(fn);
  D({
    global: !0,
    bind: !0,
    forced: ki
  },
  {
    setTimeout: wi(y.setTimeout),
    setInterval: wi(y.setInterval)
  });
  var Ai = W.setTimeout;
  function Oi(t) {
    return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
    function(t) {
      Ai(function() {
        if (!t) throw new Error("requestAnimationFrame need a callback function!");
        t()
      },
      16.66)
    })(t)
  }
  function Pi(t) { (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame)(t)
  }
  function Ei(n) {
    return function(t) {
      var e = String(c(t));
      return 1 & n && (e = e.replace(Mi, "")),
      2 & n && (e = e.replace(Li, "")),
      e
    }
  }
  var Ti = Object.freeze({
    __proto__: null,
    requestAnimationFrame: Oi,
    cancelAnimationFrame: Pi,
    copyTextContent: function(t, e) {
      try {
        var n = document.createElement("input"),
        i = document.querySelector("body");
        i.insertAdjacentElement("beforeend", n),
        n.setAttribute("value", t),
        n.select(),
        document.execCommand && document.execCommand("copy"),
        i.removeChild(n),
        e && e(!0)
      } catch(t) {
        console.error(t),
        e && e(!1)
      }
    }
  }),
  ji = "\t\n\v\f\r                　\u2028\u2029\ufeff",
  Ii = "[" + ji + "]",
  Mi = RegExp("^" + Ii + Ii + "*"),
  Li = RegExp(Ii + Ii + "*$"),
  Hi = {
    start: Ei(1),
    end: Ei(2),
    trim: Ei(3)
  }.trim,
  Ri = y.parseInt,
  zi = /^[+-]?0[Xx]/,
  Ci = 8 !== Ri(ji + "08") || 22 !== Ri(ji + "0x16") ?
  function(t, e) {
    var n = Hi(String(t));
    return Ri(n, e >>> 0 || (zi.test(n) ? 16 : 10))
  }: Ri;
  D({
    global: !0,
    forced: parseInt != Ci
  },
  {
    parseInt: Ci
  });
  var Bi = W.parseInt;
  function Fi(t) {
    var e = (t = gi({
      width: 200,
      height: 200,
      zIndex: 0,
      dpr: window.devicePixelRatio
    },
    t)).dpr || window.devicePixelRatio || 1,
    n = document.createElement("canvas");
    return n.style.position = "absolute",
    n.style.left = "0px",
    n.style.top = "0px",
    n.style.zIndex = t.zIndex,
    n.style.transformOrigin = "0 0",
    n.style.width = t.width + "px",
    n.style.height = t.height + "px",
    n.width = t.width * e,
    n.height = t.height * e,
    n
  }
  function Wi(t) {
    t.width = t.width
  }
  function Ni(t, e, n, i) {
    return n > t[0] && n < e[0] && i > t[1] && i < e[1]
  }
  function _i(t) {
    if (!bi(t)) throw new Error("请传入正确的HTML图片元素, 当前: ".concat(t));
    try {
      if (0 < t.width && 0 < t.height) {
        var e = Fi({
          width: t.width,
          height: t.height
        }).getContext("2d");
        e.drawImage(t, 0, 0, t.width, t.height);
        for (var n = e.getImageData(0, 0, t.width, t.height), i = 0; i < n.data.length; i += 4) {
          var o = Gi([n.data[i], n.data[i + 1], n.data[i] + 2]);
          n.data[i] = o,
          n.data[i + 1] = o,
          n.data[i + 2] = o
        }
        e.putImageData(n, 0, 0),
        t.src = e.canvas.toDataURL("image/png", 1)
      }
    } catch(t) {
      console.warn("图片置灰失败： "),
      console.warn(t)
    }
    return t
  }
  function Gi() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [0, 0, 0];
    return Bi(.3 * t[0] + .59 * t[1] + .11 * t[2])
  }
  var Yi = Object.freeze({
    __proto__: null,
    createCanvas: Fi,
    clearCanvas: Wi,
    mouseInRect: Ni,
    grayPicture: _i,
    grayAlgorithm: Gi
  });
  function Zi(t, e) {
    if (e = gi({
      width: "320px",
      height: "240px",
      transitionDuration: ".35s, .35s",
      transitionTimingFunction: "ease-in-out, ease-in-out",
      transitionProperty: "transform, opacity"
    },
    e), !bi(t)) throw new Error("请传入正确的HTML元素, 当前传参为: ".concat(t));
    var n;
    return "yes" === t.getAttribute("data-handled") || (t.style.transformOrigin = "0 0", t.style.transform = "scale(1)", t.style.overflow = "hidden", "fixed" !== (n = window.getComputedStyle(t, null).position) && "absolute" !== n && (t.style.position = "relative"), t.setAttribute("data-handled", "yes"), t.style.transitionProperty = e.transitionProperty, t.style.transitionTimingFunction = e.transitionTimingFunction, t.style.transitionDuration = e.transitionDuration, t.style.width = e.width, t.style.height = e.height),
    t
  }
  function Ui(t) {
    if (!bi(t)) throw new Error("请传入正确的HTML元素, 当前传参为: ".concat(t));
    t.removeAttribute("data-handled"),
    t.style.transform = null,
    t.style.transformOrigin = null,
    t.style.transition = null,
    t.style.width = null,
    t.style.height = null,
    t.style.overflow = null,
    t.style.position = null,
    t.style.cursor = null,
    t.innerHTML = ""
  }
  var Ji = Object.freeze({
    __proto__: null,
    sceneElInit: Zi,
    sceneElDestroy: Ui
  });
  function Xi(t) {
    return (t || "").replace(/\s/, "")
  }
  var Vi = Object.freeze({
    __proto__: null,
    isSymbol: function(t) {
      return ! /([a-z]|[A-Z]|[0-9]|[\u4e00-\u9fa5])/.test(t)
    },
    isChinese: function(t) {
      return /[\u4e00-\u9fa5]/.test(t)
    },
    trim: Xi
  }),
  Qi = Object.freeze({
    __proto__: null,
    objectHelper: xi,
    elementHelper: Di,
    bomHelper: Ti,
    sceneHelper: Ji,
    canvasHelper: Yi,
    stringHelper: Vi
  }),
  qi = [],
  Ki = qi.sort,
  $i = a(function() {
    qi.sort(void 0)
  }),
  to = a(function() {
    qi.sort(null)
  }),
  eo = Ce("sort");
  D({
    target: "Array",
    proto: !0,
    forced: $i || !to || !eo
  },
  {
    sort: function(t) {
      return void 0 === t ? Ki.call(wt(this)) : Ki.call(wt(this), u(t))
    }
  });
  var no = Qe("Array").sort,
  io = Array.prototype,
  oo = function(t) {
    var e = t.sort;
    return t === io || t instanceof Array && e === io.sort ? no: e
  };
  D({
    target: "Array",
    stat: !0
  },
  {
    isArray: We
  });
  var so = W.Array.isArray;
  var ao = function(t, e) { (null == e || e > t.length) && (e = t.length);
    for (var n = 0,
    i = new Array(e); n < e; n++) i[n] = t[n];
    return i
  };
  function ro(e, t, n, i) {
    try {
      return i ? t(N(n)[0], n[1]) : t(n)
    } catch(t) {
      var o = e.
      return;
      throw void 0 !== o && N(o.call(e)),
      t
    }
  }
  function co(t) {
    return void 0 !== t && (K.Array === t || ho[lo] === t)
  }
  function po(t) {
    if (null != t) return t[fo] || t["@@iterator"] || K[ge(t)]
  }
  var uo = function(t) {
    if (so(t)) return ao(t)
  },
  lo = Dt("iterator"),
  ho = Array.prototype,
  fo = Dt("iterator"),
  mo = Dt("iterator"),
  vo = !1;
  try {
    var go = 0,
    yo = {
      next: function() {
        return {
          done: !!go++
        }
      },
      return: function() {
        vo = !0
      }
    };
    yo[mo] = function() {
      return this
    },
    Array.from(yo,
    function() {
      throw 2
    })
  } catch(t) {}
  var xo = !
  function(t, e) {
    if (!e && !vo) return ! 1;
    var n = !1;
    try {
      var i = {};
      i[mo] = function() {
        return {
          next: function() {
            return {
              done: n = !0
            }
          }
        }
      },
      t(i)
    } catch(t) {}
    return n
  } (function(t) {
    Array.from(t)
  });
  D({
    target: "Array",
    stat: !0,
    forced: xo
  },
  {
    from: function(t, e, n) {
      var i, o, s, a, r, c, p = wt(t),
      u = "function" == typeof this ? this: Array,
      l = arguments.length,
      d = 1 < l ? e: void 0,
      h = void 0 !== d,
      f = po(p),
      m = 0;
      if (h && (d = w(d, 2 < l ? n: void 0, 2)), null == f || u == Array && co(f)) for (o = new u(i = Bt(p.length)); m < i; m++) c = h ? d(p[m], m) : p[m],
      un(o, m, c);
      else for (r = (a = f.call(p)).next, o = new u; ! (s = r.call(a)).done; m++) c = h ? ro(a, d, [s.value, m], !0) : s.value,
      un(o, m, c);
      return o.length = m,
      o
    }
  });
  var bo = W.Array.from,
  wo = Dt("iterator"),
  Do = function(t) {
    var e = Object(t);
    return void 0 !== e[wo] || "@@iterator" in e || K.hasOwnProperty(ge(e))
  };
  var So = function(t) {
    if (void 0 !== li && Do(Object(t))) return bo(t)
  },
  ko = yn("slice"),
  Ao = Fe("slice", {
    ACCESSORS: !0,
    0 : 0,
    1 : 2
  }),
  Oo = Dt("species"),
  Po = [].slice,
  Eo = Math.max;
  D({
    target: "Array",
    proto: !0,
    forced: !ko || !Ao
  },
  {
    slice: function(t, e) {
      var n, i, o, s = p(this),
      a = Bt(s.length),
      r = Ft(t, a),
      c = Ft(void 0 === e ? a: e, a);
      if (We(s) && (("function" == typeof(n = s.constructor) && (n === Array || We(n.prototype)) || O(n) && null === (n = n[Oo])) && (n = void 0), n === Array || void 0 === n)) return Po.call(s, r, c);
      for (i = new(void 0 === n ? Array: n)(Eo(c - r, 0)), o = 0; r < c; r++, o++) r in s && un(i, o, s[r]);
      return i.length = o,
      i
    }
  });
  var To = Qe("Array").slice,
  jo = Array.prototype,
  Io = function(t) {
    var e = t.slice;
    return t === jo || t instanceof Array && e === jo.slice ? To: e
  };
  var Mo = function(t, e) {
    var n;
    if (t) {
      if ("string" == typeof t) return ao(t, e);
      var i = Io(n = Object.prototype.toString.call(t)).call(n, 8, -1);
      return "Object" === i && t.constructor && (i = t.constructor.name),
      "Map" === i || "Set" === i ? bo(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? ao(t, e) : void 0
    }
  };
  var Lo = function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  };
  var Ho = function(t) {
    return uo(t) || So(t) || Mo(t) || Lo()
  },
  Ro = [].slice,
  zo = {},
  Co = Function.bind ||
  function(e) {
    var n = u(this),
    i = Ro.call(arguments, 1),
    o = function() {
      var t = i.concat(Ro.call(arguments));
      return this instanceof o ?
      function(t, e, n) {
        if (! (e in zo)) {
          for (var i = [], o = 0; o < e; o++) i[o] = "a[" + o + "]";
          zo[e] = Function("C,a", "return new C(" + i.join(",") + ")")
        }
        return zo[e](t, n)
      } (n, t.length, t) : n.apply(e, t)
    };
    return O(n.prototype) && (o.prototype = n.prototype),
    o
  };
  D({
    target: "Function",
    proto: !0
  },
  {
    bind: Co
  });
  var Bo = Qe("Function").bind,
  Fo = Function.prototype,
  Wo = function(t) {
    var e = t.bind;
    return t === Fo || t instanceof Function && e === Fo.bind ? Bo: e
  };
  var No = function(t, e) {
    if (! (t instanceof e)) throw new TypeError("Cannot call a class as a function")
  };
  D({
    target: "Object",
    stat: !0,
    forced: !f,
    sham: !f
  },
  {
    defineProperty: G.f
  });
  var _o = e(function(t) {
    var i = W.Object,
    e = t.exports = function(t, e, n) {
      return i.defineProperty(t, e, n)
    };
    i.defineProperty.sham && (e.sham = !0)
  });
  function Go(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1,
      i.configurable = !0,
      "value" in i && (i.writable = !0),
      _o(t, i.key, i)
    }
  }
  var Yo = function(t, e, n) {
    return e && Go(t.prototype, e),
    n && Go(t, n),
    t
  },
  Zo = d("Reflect", "construct"),
  Uo = a(function() {
    function t() {}
    return ! (Zo(function() {},
    [], t) instanceof t)
  }),
  Jo = !a(function() {
    Zo(function() {})
  }),
  Xo = Uo || Jo;
  D({
    target: "Reflect",
    stat: !0,
    forced: Xo,
    sham: Xo
  },
  {
    construct: function(t, e, n) {
      u(t),
      N(e);
      var i = arguments.length < 3 ? t: u(n);
      if (Jo && !Uo) return Zo(t, e, i);
      if (t == i) {
        switch (e.length) {
        case 0:
          return new t;
        case 1:
          return new t(e[0]);
        case 2:
          return new t(e[0], e[1]);
        case 3:
          return new t(e[0], e[1], e[2]);
        case 4:
          return new t(e[0], e[1], e[2], e[3])
        }
        var o = [null];
        return o.push.apply(o, e),
        new(Co.apply(t, o))
      }
      var s = i.prototype,
      a = re(O(s) ? s: Object.prototype),
      r = Function.apply.call(t, a, e);
      return O(r) ? r: a
    }
  });
  var Vo = W.Reflect.construct;
  var Qo = function(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
  };
  D({
    target: "Object",
    stat: !0,
    sham: !f
  },
  {
    create: re
  });
  var qo = W.Object,
  Ko = function(t, e) {
    return qo.create(t, e)
  };
  D({
    target: "Object",
    stat: !0
  },
  {
    setPrototypeOf: De
  });
  var $o = W.Object.setPrototypeOf,
  ts = e(function(n) {
    function i(t, e) {
      return n.exports = i = $o ||
      function(t, e) {
        return t.__proto__ = e,
        t
      },
      i(t, e)
    }
    n.exports = i
  });
  var es = function(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Ko(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }),
    e && ts(t, e)
  };
  var ns = function(t, e) {
    return ! e || "object" !== di(e) && "function" != typeof e ? Qo(t) : e
  },
  is = L.f,
  os = a(function() {
    is(1)
  });
  D({
    target: "Object",
    stat: !0,
    forced: !f || os,
    sham: !f
  },
  {
    getOwnPropertyDescriptor: function(t, e) {
      return is(p(t), e)
    }
  });
  var ss = e(function(t) {
    var n = W.Object,
    e = t.exports = function(t, e) {
      return n.getOwnPropertyDescriptor(t, e)
    };
    n.getOwnPropertyDescriptor.sham && (e.sham = !0)
  });
  D({
    target: "Reflect",
    stat: !0
  },
  {
    get: function t(e, n) {
      var i, o, s = arguments.length < 3 ? e: arguments[2];
      return N(e) === s ? e[n] : (i = L.f(e, n)) ? E(i, "value") ? i.value: void 0 === i.get ? void 0 : i.get.call(s) : O(o = jt(e)) ? t(o, n, s) : void 0
    }
  });
  var as = W.Reflect.get,
  rs = a(function() {
    jt(1)
  });
  D({
    target: "Object",
    stat: !0,
    forced: rs,
    sham: !Pt
  },
  {
    getPrototypeOf: function(t) {
      return jt(wt(t))
    }
  });
  var cs = W.Object.getPrototypeOf,
  ps = e(function(e) {
    function n(t) {
      return e.exports = n = $o ? cs: function(t) {
        return t.__proto__ || cs(t)
      },
      n(t)
    }
    e.exports = n
  });
  var us = function(t, e) {
    for (; ! Object.prototype.hasOwnProperty.call(t, e) && null !== (t = ps(t)););
    return t
  },
  ls = e(function(i) {
    function o(t, e, n) {
      return "undefined" != typeof Reflect && as ? i.exports = o = as: i.exports = o = function(t, e, n) {
        var i = us(t, e);
        if (i) {
          var o = ss(i, e);
          return o.get ? o.get.call(n) : o.value
        }
      },
      o(t, e, n || t)
    }
    i.exports = o
  }),
  ds = function() {
    function e(t) {
      No(this, e),
      this.scene = t,
      this.width = 0,
      this.height = 0,
      this.position = [0, 0],
      this.zIndex = 0,
      this.zLevel = 0,
      this.initCheck()
    }
    return Yo(e, [{
      key: "getWidth",
      value: function() {
        return this.width
      }
    },
    {
      key: "setWidth",
      value: function(t) {
        this.width = t
      }
    },
    {
      key: "getHeight",
      value: function() {
        return this.height
      }
    },
    {
      key: "setHeight",
      value: function(t) {
        this.height = t
      }
    },
    {
      key: "getPosition",
      value: function() {
        return this.position
      }
    },
    {
      key: "setPosition",
      value: function(t) {
        this.position = t
      }
    },
    {
      key: "getZIndex",
      value: function() {
        return this.zIndex
      }
    },
    {
      key: "setZIndex",
      value: function(t) {
        this.zIndex = t
      }
    },
    {
      key: "getZLevel",
      value: function() {
        return this.zLevel
      }
    },
    {
      key: "setZLevel",
      value: function(t) {
        this.zLevel = t
      }
    },
    {
      key: "initCheck",
      value: function() {
        if (!this.scene) throw new Error("请传入创景实例!")
      }
    },
    {
      key: "updateOptions",
      value: function(t) {
        this.options = gi(this.options, t),
        mi(this.options.width) || this.setWidth(this.options.width),
        mi(this.options.height) || this.setHeight(this.options.height),
        mi(this.options.position) || this.setPosition(this.options.position),
        mi(this.options.zLevel) || this.setZLevel(this.options.zLevel),
        mi(this.options.zIndex) || this.setZIndex(this.options.zIndex)
      }
    },
    {
      key: "update",
      value: function() {
        throw new Error("请实现update方法!")
      }
    },
    {
      key: "render",
      value: function() {
        throw new Error("请实现render方法!")
      }
    },
    {
      key: "destroy",
      value: function() {
        throw new Error("请实现destroy方法!")
      }
    },
    {
      key: "event",
      value: function() {
        throw new Error("请实现event方法!")
      }
    }]),
    e
  } ();
  function hs(i) {
    var o = function() {
      if ("undefined" == typeof Reflect || !Vo) return ! 1;
      if (Vo.sham) return ! 1;
      if ("function" == typeof Proxy) return ! 0;
      try {
        return Date.prototype.toString.call(Vo(Date, [],
        function() {})),
        !0
      } catch(t) {
        return ! 1
      }
    } ();
    return function() {
      var t, e, n = ps(i);
      return e = o ? (t = ps(this).constructor, Vo(n, arguments, t)) : n.apply(this, arguments),
      ns(this, e)
    }
  }
  var fs = {
    width: 520,
    height: 520,
    position: [0, 0],
    backgroundColor: "#fff",
    zIndex: 0
  },
  ms = function() {
    es(s, ds);
    var o = hs(s);
    function s(t, e) {
      var n, i;
      return No(this, s),
      (i = o.call(this, t)).options = vi(fs),
      ls((n = Qo(i), ps(s.prototype)), "updateOptions", n).call(n, e),
      i
    }
    return Yo(s, [{
      key: "update",
      value: function() {
        ls(ps(s.prototype), "setWidth", this).call(this, this.options.width),
        ls(ps(s.prototype), "setHeight", this).call(this, this.options.height),
        ls(ps(s.prototype), "setPosition", this).call(this, this.options.position),
        ls(ps(s.prototype), "setZIndex", this).call(this, this.options.zIndex)
      }
    },
    {
      key: "render",
      value: function(t) {
        t.save(),
        t.fillStyle = this.options.backgroundColor,
        t.fillRect(this.position[0], this.position[1], this.width, this.height),
        t.restore()
      }
    },
    {
      key: "event",
      value: function() {}
    },
    {
      key: "destroy",
      value: function() {}
    }]),
    s
  } ();
  function vs(i) {
    var o = function() {
      if ("undefined" == typeof Reflect || !Vo) return ! 1;
      if (Vo.sham) return ! 1;
      if ("function" == typeof Proxy) return ! 0;
      try {
        return Date.prototype.toString.call(Vo(Date, [],
        function() {})),
        !0
      } catch(t) {
        return ! 1
      }
    } ();
    return function() {
      var t, e, n = ps(i);
      return e = o ? (t = ps(this).constructor, Vo(n, arguments, t)) : n.apply(this, arguments),
      ns(this, e)
    }
  }
  var gs = {
    width: 100,
    height: 100,
    position: [0, 0],
    zIndex: 1,
    lineType: "dashed"
  },
  ys = function() {
    es(s, ds);
    var o = vs(s);
    function s(t, e) {
      var n, i;
      return No(this, s),
      (i = o.call(this, t)).options = vi(gs),
      ls((n = Qo(i), ps(s.prototype)), "updateOptions", n).call(n, e),
      i
    }
    return Yo(s, [{
      key: "update",
      value: function() {}
    },
    {
      key: "render",
      value: function(t) {
        if (!this.scene.options.edit.grid) return ! 1;
        t.save();
        var e = window.devicePixelRatio * this.scene.options.scale * this.scene.options.zoom,
        n = window.devicePixelRatio * this.scene.options.zoom;
        t.strokeStyle = "#897a00",
        t.lineWidth = Math.max(1 / n, .1),
        "solid" === this.options.lineType ? t.setLineDash([1, 1]) : "dashed" === this.options.lineType ? t.setLineDash([8 / n, 4 / n]) : t.setLineDash([this.options.lineType[0] / n, this.options.lineType[1] / n]),
        t.beginPath();
        for (var i = -this.scene.options.translate[1] / e, o = 0; o < this.options.width; o++) o % Math.floor(60 / n) == 0 && 0 !== o && (t.moveTo(o, 0), t.lineTo(o, this.options.height));
        t.stroke(),
        t.beginPath(),
        t.textAlign = "left",
        t.textBaseline = "top";
        for (var s = -this.scene.options.translate[0] / e, a = 0; a < this.options.height; a++) a % Math.floor(60 / n) == 0 && 0 !== a && (t.moveTo(0, a), t.lineTo(this.options.width, a));
        t.stroke(),
        t.beginPath();
        for (var r = 0; r < this.options.width; r++) r % Math.floor(6 / n) == 0 && 0 !== r && (t.moveTo(r, i), t.lineTo(r, 4 / n + i));
        t.stroke(),
        t.beginPath();
        for (var c = 0; c < this.options.width; c++) c % Math.floor(6 / n) == 0 && 0 !== c && (t.moveTo(s, c), t.lineTo(4 / n + s, c));
        t.stroke(),
        t.fillStyle = "#785500",
        t.textAlign = "left",
        t.textBaseline = "top",
        t.font = "normal normal normal ".concat(12 / n, "px Microsoft YaHei UI");
        for (var p = 0; p < this.options.width; p++) p % Math.floor(60 / n) == 0 && 0 !== p && t.fillText(p + "", p + 2.5 / n, 10 / n + i);
        for (var u = 0; u < this.options.height; u++) u % Math.floor(60 / n) == 0 && 0 !== u ? t.fillText(u + "", 10 / n + s, u + 10 / n) : 0 === u && t.fillText(u + "", 10 / n, 10 / n);
        t.restore()
      }
    },
    {
      key: "event",
      value: function() {}
    },
    {
      key: "destroy",
      value: function() {}
    }]),
    s
  } (),
  xs = qt.indexOf,
  bs = [].indexOf,
  ws = !!bs && 1 / [1].indexOf(1, -0) < 0,
  Ds = Ce("indexOf"),
  Ss = Fe("indexOf", {
    ACCESSORS: !0,
    1 : 0
  });
  D({
    target: "Array",
    proto: !0,
    forced: ws || !Ds || !Ss
  },
  {
    indexOf: function(t, e) {
      return ws ? bs.apply(this, arguments) || 0 : xs(this, t, 1 < arguments.length ? e: void 0)
    }
  });
  var ks = Qe("Array").indexOf,
  As = Array.prototype,
  Os = function(t) {
    var e = t.indexOf;
    return t === As || t instanceof Array && e === As.indexOf ? ks: e
  },
  Ps = Qe("Array").keys,
  Es = Array.prototype,
  Ts = {
    DOMTokenList: !0,
    NodeList: !0
  },
  js = function(t) {
    var e = t.keys;
    return t === Es || t instanceof Array && e === Es.keys || Ts.hasOwnProperty(ge(t)) ? Ps: e
  },
  Is = yn("splice"),
  Ms = Fe("splice", {
    ACCESSORS: !0,
    0 : 0,
    1 : 2
  }),
  Ls = Math.max,
  Hs = Math.min;
  D({
    target: "Array",
    proto: !0,
    forced: !Is || !Ms
  },
  {
    splice: function(t, e) {
      var n, i, o, s, a, r, c = wt(this),
      p = Bt(c.length),
      u = Ft(t, p),
      l = arguments.length;
      if (0 === l ? n = i = 0 : i = 1 === l ? (n = 0, p - u) : (n = l - 2, Hs(Ls(Ct(e), 0), p - u)), 9007199254740991 < p + n - i) throw TypeError("Maximum allowed length exceeded");
      for (o = Re(c, i), s = 0; s < i; s++)(a = u + s) in c && un(o, s, c[a]);
      if (n < (o.length = i)) {
        for (s = u; s < p - i; s++) r = s + n,
        (a = s + i) in c ? c[r] = c[a] : delete c[r];
        for (s = p; p - i + n < s; s--) delete c[s - 1]
      } else if (i < n) for (s = p - i; u < s; s--) r = s + n - 1,
      (a = s + i - 1) in c ? c[r] = c[a] : delete c[r];
      for (s = 0; s < n; s++) c[s + u] = arguments[s + 2];
      return c.length = p - i + n,
      o
    }
  });
  var Rs = Qe("Array").splice,
  zs = Array.prototype,
  Cs = function(t) {
    var e = t.splice;
    return t === zs || t instanceof Array && e === zs.splice ? Rs: e
  },
  Bs = {
    mouse: {
      drag: {
        cursor: {
        default:
          null,
          active: null
        }
      }
    },
    on: {
      resize: null,
      drag: null,
      keyup: null,
      click: null,
      move: null
    },
    filterComponent: ["Grid", "Background", "Lines"]
  },
  Fs = function() {
    function i(t, e) {
      var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      No(this, i),
      this.options = vi(Bs),
      this.element = n,
      this.scene = e,
      this.x = 0,
      this.y = 0,
      this.clickActive = !1,
      this.dragActive = !1,
      this.keys = [],
      this.inter = {
        click: -1,
        drag: -1
      },
      this.eventList = [],
      this.updateOptions(t)
    }
    return Yo(i, [{
      key: "getMouseX",
      value: function() {
        return this.x
      }
    },
    {
      key: "getMouseY",
      value: function() {
        return this.y
      }
    },
    {
      key: "getMouseClickActive",
      value: function() {
        return this.clickActive
      }
    },
    {
      key: "getMouseDragActive",
      value: function() {
        return this.dragActive
      }
    },
    {
      key: "init",
      value: function() {
        this.element && this.mount(this.element)
      }
    },
    {
      key: "mount",
      value: function(t) {
        if (!bi(t)) throw new Error("事件元素挂载失败，传入元素为: ".concat(t));
        this.element = t,
        this.resize(),
        this.addEvent("resize", this.resize, this, window),
        this.element.style.cursor = this.options.mouse.drag.cursor.
      default,
        this.addEvent("mousedown", this.dragHandle),
        this.addEvent("mousewheel", this.zoomHandle),
        this.addEvent("keydown", this.keydownHandle, this, window),
        this.addEvent("keyup", this.keyUpHandle, this, window),
        this.addEvent("click", this.mouseClickHandle),
        this.addEvent("mousemove", this.mousemoveHandle)
      }
    },
    {
      key: "updateOptions",
      value: function(t) {
        this.options = gi(this.options, t)
      }
    },
    {
      key: "addEvent",
      value: function(t, e, n, i) {
        var o;
        n = n || this,
        (i = bi(i) || i === window || i === document ? i: this.element) && (o = Wo(e).call(e, n), i.addEventListener(t, o), this.eventList.push({
          eventName: t,
          handle: e,
          context: n,
          _handle: o
        }), "mousewheel" === t && this.addEvent("DOMMouseScroll", e, n, i))
      }
    },
    {
      key: "removeEvent",
      value: function(t, e, n, i) {
        var o, s, a, r;
        n = n || this,
        (i = bi(i) || i === window || i === document ? i: this.element) && (s = (o = this.findEventInList(t, e, n)).targetEventListItem, null !== (a = o.targetEventListItemIndex) && null !== s && (Cs(r = this.eventList).call(r, a, 1), i.removeEventListener(t, s._handle), "mousewheel" === t && this.removeEvent("DOMMouseScroll", e, n, i)))
      }
    },
    {
      key: "findEventInList",
      value: function(t, e, n) {
        for (var i = null,
        o = null,
        s = 0; s < this.eventList.length; s++) {
          var a = this.eventList[s];
          if (a.eventName === t && a.context === n && a.handle === e) {
            o = s,
            i = a;
            break
          }
        }
        return {
          targetEventListItem: i,
          targetEventListItemIndex: o
        }
      }
    },
    {
      key: "resize",
      value: function(t) {
        var e;
        this.scene.state.mounted ? (clearTimeout(this.inter.resize), this.inter.resize = Ai(Wo(e = this.resizeHandle).call(e, this, t), 100)) : this.resizeHandle(t)
      }
    },
    {
      key: "resizeHandle",
      value: function() {
        var t, e, n = this; ! this.element || (t = this.element.parentNode) && (e = window.getComputedStyle(this.element, null).transition, this.scene.state.mounted || (this.element.style.transition = null), this.element.style.transform = "scale(".concat(t.offsetWidth / this.element.offsetWidth, ")"), clearTimeout(this.inter.resizeTransition), this.inter.resizeTransition = Ai(function() {
          return n.element && (n.element.style.transition = e)
        },
        200)),
        this.options.on.resize && this.options.on.resize(this.scene)
      }
    },
    {
      key: "dragHandle",
      value: function(i) {
        var o = this,
        s = i.offsetX,
        a = i.offsetY;
        this.element.style.cursor = this.options.mouse.drag.cursor.active;
        function e(t) {
          o.dragActive = !0;
          var e = t.offsetX - s,
          n = t.offsetY - a;
          s = t.offsetX,
          a = t.offsetY,
          o.outRangeHandle([o.scene.options.translate[0] + e, o.scene.options.translate[1] + n]),
          o.mousemoveHandle(i),
          o.options.on.drag && o.options.on.drag(o.x, o.y, o)
        }
        document.addEventListener("mousemove", e),
        document.addEventListener("mouseup",
        function t() {
          o.element.style.cursor = o.options.mouse.drag.cursor.
        default,
          document.removeEventListener("mousemove", e),
          document.removeEventListener("mouseup", t),
          o.mousemoveHandle(i),
          o.options.on.drag && o.options.on.drag(o.x, o.y, o),
          clearTimeout(o.inter.drag),
          o.inter.drag = Ai(function() {
            o.dragActive = !1
          },
          200)
        })
      }
    },
    {
      key: "zoomHandle",
      value: function(t) {
        var e = 0;
        t.wheelDelta ? (e = t.wheelDelta / 120, window.opera && (e = -e)) : t.detail && (e = -t.detail / 3);
        var n = this.scene.options.zoom,
        i = this.scene.options.zoom + .2 * e;
        this.scene.options.zoom = Math.min(this.scene.options.zoomMax, Math.max(this.scene.options.zoomMin, i));
        var o = this.scene.options.translate[0],
        s = this.scene.options.translate[1],
        a = (t.offsetX * this.scene.devicePixelRatio - o) / (this.scene.options.width * this.scene.options.scale * n * this.scene.devicePixelRatio) * (this.scene.options.width * this.scene.options.scale * this.scene.options.zoom * this.scene.devicePixelRatio) - (t.offsetX * this.scene.devicePixelRatio - o),
        r = (t.offsetY * this.scene.devicePixelRatio - s) / (this.scene.options.height * this.scene.options.scale * n * this.scene.devicePixelRatio) * (this.scene.options.height * this.scene.options.scale * this.scene.options.zoom * this.scene.devicePixelRatio) - (t.offsetY * this.scene.devicePixelRatio - s);
        this.outRangeHandle([o - a, s - r])
      }
    },
    {
      key: "outRangeHandle",
      value: function(t) {
        0 < (t = t || [this.scene.options.translate[0], this.scene.options.translate[1]])[0] && (t[0] = 0),
        0 < t[1] && (t[1] = 0);
        var e = this.scene.options.width * this.scene.options.scale * this.scene.devicePixelRatio * (this.scene.options.zoom - 1),
        n = this.scene.options.height * this.scene.options.scale * this.scene.devicePixelRatio * (this.scene.options.zoom - 1);
        t[0] < -e && (t[0] = -e),
        t[1] < -n && (t[1] = -n),
        this.scene.options.translate = t
      }
    },
    {
      key: "keydownHandle",
      value: function(t) {
        js(this).push(t.keyCode)
      }
    },
    {
      key: "keyUpHandle",
      value: function() {
        this.inEditingHandle(),
        this.keys = []
      }
    },
    {
      key: "mouseClickHandle",
      value: function(t) {
        var i = this;
        if (this.dragActive) return ! 1;
        this.mousemoveHandle(t),
        this.clickActive = !0,
        clearTimeout(this.inter.click),
        this.inter.click = Ai(function() {
          var t;
          i.clickActive = !1;
          var n = [];
          en(t = i.scene.components).call(t,
          function(t) {
            var e;
            Ni([t.
          case.getPosition()[0] - t.
          case.getWidth() / 2, t.
          case.getPosition()[1] - t.
          case.getHeight() / 2], [t.
          case.getPosition()[0] + t.
          case.getWidth() / 2, t.
          case.getPosition()[1] + t.
          case.getHeight() / 2], i.x, i.y) && -1 === Os(e = i.options.filterComponent).call(e, t.type) && n.push(t)
          }),
          i.options.on.click && i.options.on.click(n, {
            x: i.x,
            y: i.y,
            e: i
          })
        },
        200)
      }
    },
    {
      key: "mousemoveHandle",
      value: function(t) {
        this.x = (t.offsetX * this.scene.devicePixelRatio - this.scene.options.translate[0]) / (this.scene.options.zoom * this.scene.options.scale * this.scene.devicePixelRatio),
        this.y = (t.offsetY * this.scene.devicePixelRatio - this.scene.options.translate[1]) / (this.scene.options.zoom * this.scene.options.scale * this.scene.devicePixelRatio),
        this.options.on.move && this.options.on.move(this.x, this.y, this)
      }
    },
    {
      key: "inEditingHandle",
      value: function() {
        var t, n = [17, 18, 69],
        e = [];
        en(t = js(this)).call(t,
        function(t) { - 1 === Os(e).call(e, t) && e.push(t)
        });
        var i = !0;
        e.length !== n.length ? i = !1 : en(e).call(e,
        function(t, e) {
          t !== n[e] && (i = !1)
        }),
        i && (this.scene.options.edit.enable = !this.scene.options.edit.enable, this.scene.editingHandle()),
        this.options.on.keyup && this.options.on.keyup(e)
      }
    },
    {
      key: "destroy",
      value: function() {
        this.removeEvent("resize", this.resize, this, window),
        this.removeEvent("mousedown", this.dragHandle),
        this.removeEvent("mousewheel", this.zoomHandle),
        this.removeEvent("keydown", this.keydownHandle, this, window),
        this.removeEvent("keyup", this.keyUpHandle, this, window),
        this.removeEvent("click", this.mouseClickHandle),
        this.removeEvent("mousemove", this.mousemoveHandle)
      }
    }]),
    i
  } ();
  D({
    target: "Array",
    proto: !0
  },
  {
    fill: function(t, e, n) {
      for (var i = wt(this), o = Bt(i.length), s = arguments.length, a = Ft(1 < s ? e: void 0, o), r = 2 < s ? n: void 0, c = void 0 === r ? o: Ft(r, o); a < c;) i[a++] = t;
      return i
    }
  });
  var Ws = Qe("Array").fill,
  Ns = Array.prototype,
  _s = function(t) {
    var e = t.fill;
    return t === Ns || t instanceof Array && e === Ns.fill ? Ws: e
  };
  function Gs(i) {
    var o = function() {
      if ("undefined" == typeof Reflect || !Vo) return ! 1;
      if (Vo.sham) return ! 1;
      if ("function" == typeof Proxy) return ! 0;
      try {
        return Date.prototype.toString.call(Vo(Date, [],
        function() {})),
        !0
      } catch(t) {
        return ! 1
      }
    } ();
    return function() {
      var t, e, n = ps(i);
      return e = o ? (t = ps(this).constructor, Vo(n, arguments, t)) : n.apply(this, arguments),
      ns(this, e)
    }
  }
  var Ys = {
    width: 52,
    height: 52,
    color: "#0096cb",
    borderColor: "#0096cb"
  },
  Zs = function() {
    es(o, ds);
    var i = Gs(o);
    function o(t, e) {
      var n;
      return No(this, o),
      (n = i.call(this, t)).options = vi(Ys),
      n.ctx = null,
      n.updateOptions(e),
      n
    }
    return Yo(o, [{
      key: "updateOptions",
      value: function(t) {
        ls(ps(o.prototype), "updateOptions", this).call(this, t),
        this.ctx = null,
        this.ctx = Fi({
          width: this.getWidth(),
          height: this.getHeight(),
          dpr: this.scene.devicePixelRatio
        }).getContext("2d")
      }
    },
    {
      key: "update",
      value: function() {}
    },
    {
      key: "render",
      value: function() {
        var t;
        this.ctx.save(),
        this.ctx.scale(this.scene.devicePixelRatio, this.scene.devicePixelRatio),
        this.ctx.fillStyle = this.options.color;
        var e = this.getWidth() / 2,
        n = this.getHeight() / 2,
        i = Math.min(e, n);
        this.ctx.beginPath(),
        this.ctx.arc(e, n, .8 * i, 0, 2 * Math.PI),
        _s(t = this.ctx).call(t),
        this.ctx.strokeStyle = this.options.borderColor,
        this.ctx.stroke(),
        this.ctx.restore()
      }
    },
    {
      key: "event",
      value: function() {}
    },
    {
      key: "destroy",
      value: function() {}
    }]),
    o
  } ();
  function Us(i) {
    var o = function() {
      if ("undefined" == typeof Reflect || !Vo) return ! 1;
      if (Vo.sham) return ! 1;
      if ("function" == typeof Proxy) return ! 0;
      try {
        return Date.prototype.toString.call(Vo(Date, [],
        function() {})),
        !0
      } catch(t) {
        return ! 1
      }
    } ();
    return function() {
      var t, e, n = ps(i);
      return e = o ? (t = ps(this).constructor, Vo(n, arguments, t)) : n.apply(this, arguments),
      ns(this, e)
    }
  }
  var Js = {
    text: "",
    width: 128,
    height: 40,
    position: [0, 0],
    borderColor: "#2780ff",
    borderRadius: 6,
    backgroundColor: "#e9f3fc",
    boxShadow: {
      color: "rgba(0,61,113,0.69)",
      blur: 6,
      offsetX: 0,
      offsetY: 3
    },
    textShadow: {
      color: "rgba(0,61,113,0.69)",
      blur: 6,
      offsetX: 0,
      offsetY: 3
    },
    font: {
      size: 24,
      color: "#0069f6"
    },
    zIndex: 52
  },
  Xs = function() {
    es(s, ds);
    var o = Us(s);
    function s(t, e) {
      var n, i;
      return No(this, s),
      (i = o.call(this, t)).options = vi(Js),
      ls((n = Qo(i), ps(s.prototype)), "updateOptions", n).call(n, e),
      i
    }
    return Yo(s, [{
      key: "update",
      value: function() {}
    },
    {
      key: "event",
      value: function(t) {
        var e = this;
        Ni([this.getPosition()[0] - this.getWidth() / 2, this.getPosition()[1] - this.getHeight() / 2], [this.getPosition()[0] + this.getWidth() / 2, this.getPosition()[1] + this.getHeight() / 2], t.x, t.y) && (this.scene.element.style.cursor = "pointer", clearTimeout(this._cursor_inter), this._cursor_inter = Ai(function() {
          e.scene.element.style.cursor = e.scene.options.mouse.drag.cursor.
        default
        },
        20))
      }
    },
    {
      key: "render",
      value: function(t) {
        t.save(),
        t.textBaseline = "middle",
        t.textAlign = "center",
        t.font = "normal normal normal ".concat(this.options.font.size, "px Microsoft YaHei UI"),
        this.setWidth(Math.max(t.measureText(this.options.text).width + 32, this.getWidth())),
        t.translate.apply(t, Ho(this.getPosition()));
        var e = -this.getWidth() / 2,
        n = -this.getHeight() / 2,
        i = this.getWidth() / 2,
        o = this.getHeight() / 2;
        t.beginPath(),
        t.fillStyle = this.options.backgroundColor,
        t.strokeStyle = this.options.borderColor;
        var s = this.options.borderRadius;
        t.moveTo(e + s, n),
        t.lineTo(i - s, n),
        t.arc(i - s, n + s, s, 1.5 * Math.PI, 2 * Math.PI),
        t.lineTo(i, o - s),
        t.arc(i - s, o - s, s, 0, .5 * Math.PI),
        t.lineTo(e + s, o),
        t.arc(e + s, o - s, s, .5 * Math.PI, Math.PI),
        t.lineTo(e, n + s),
        t.arc(e + s, n + s, s, Math.PI, 1.5 * Math.PI),
        _s(t).call(t),
        t.shadowBlur = this.options.boxShadow.blur,
        t.shadowColor = this.options.boxShadow.color,
        t.shadowOffsetX = this.options.boxShadow.offsetX,
        t.shadowOffsetY = this.options.boxShadow.offsetY,
        t.stroke(),
        t.fillStyle = this.options.font.color,
        t.shadowBlur = this.options.textShadow.blur,
        t.shadowColor = this.options.textShadow.color,
        t.shadowOffsetX = this.options.textShadow.offsetX,
        t.shadowOffsetY = this.options.textShadow.offsetY,
        t.fillText(this.options.text, 0, 0),
        t.restore()
      }
    },
    {
      key: "destroy",
      value: function() {}
    }]),
    s
  } ();
  function Vs(i) {
    var o = function() {
      if ("undefined" == typeof Reflect || !Vo) return ! 1;
      if (Vo.sham) return ! 1;
      if ("function" == typeof Proxy) return ! 0;
      try {
        return Date.prototype.toString.call(Vo(Date, [],
        function() {})),
        !0
      } catch(t) {
        return ! 1
      }
    } ();
    return function() {
      var t, e, n = ps(i);
      return e = o ? (t = ps(this).constructor, Vo(n, arguments, t)) : n.apply(this, arguments),
      ns(this, e)
    }
  }
  function Qs(t, e, n) {
    if (! (t instanceof e)) throw TypeError("Incorrect " + (n ? n + " ": "") + "invocation");
    return t
  }
  function qs(t, e, n) {
    for (var i in e) n && n.unsafe && t[i] ? t[i] = e[i] : le(t, i, e[i], n);
    return t
  }
  var Ks, $s, ta, ea, na, ia, oa, sa, aa, ra, ca, pa = {
    name: "",
    width: 106,
    height: 106,
    position: [0, 0],
    symbol: "circle",
    zIndex: 2,
    extData: null
  },
  ua = function() {
    es(i, ds);
    var n = Vs(i);
    function i(t) {
      var e;
      return No(this, i),
      (e = n.call(this, t)).options = vi(pa),
      e.symbol = null,
      e.label = null,
      e
    }
    return Yo(i, [{
      key: "updateOptions",
      value: function(t) {
        this.options = yi(vi(pa), t),
        ls(ps(i.prototype), "updateOptions", this).call(this, t),
        this.options.symbol && fi(this.options.symbol) ? (this.symbol = new Image, this.symbol.setAttribute("src", this.options.symbol.image)) : "circle" === this.options.symbol ? this.symbol = new Zs(this.scene, this.options) : this.symbol = null,
        this.label || (this.label = new Xs(this.scene), this.scene.components.push({
          type: "Label",
        case:
          this.label
        }));
        var e = {}; - 1 === this.options.state && (e = {
          backgroundColor: "#ccc",
          borderColor: "#ccc",
          font: {
            color: "#e5e5e5"
          }
        }),
        this.label.updateOptions(yi({
          position: [this.getPosition()[0], this.getPosition()[1] + this.getHeight() / 2 + 32],
          text: this.options.name
        },
        e))
      }
    },
    {
      key: "update",
      value: function() {}
    },
    {
      key: "render",
      value: function(t) {
        t.save(),
        t.translate.apply(t, Ho(this.options.position));
        var e = null;
        this.symbol && 1 === this.symbol.nodeType ? e = this.options.symbol.gray ? _i(this.symbol) : this.symbol: this.symbol && "object" === di(this.symbol) && (this.symbol.render(), e = this.symbol.ctx.canvas),
        e && t.drawImage(e, -this.getWidth() / 2, -this.getHeight() / 2, this.getWidth(), this.getHeight()),
        t.restore()
      }
    },
    {
      key: "event",
      value: function() {}
    },
    {
      key: "destroy",
      value: function() {}
    }]),
    i
  } (),
  la = Qe("Array").concat,
  da = Array.prototype,
  ha = function(t) {
    var e = t.concat;
    return t === da || t instanceof Array && e === da.concat ? la: e
  },
  fa = !a(function() {
    return Object.isExtensible(Object.preventExtensions({}))
  }),
  ma = e(function(t) {
    function n(t) {
      e(t, i, {
        value: {
          objectID: "O" + ++o,
          weakData: {}
        }
      })
    }
    var e = G.f,
    i = nt("meta"),
    o = 0,
    s = Object.isExtensible ||
    function() {
      return ! 0
    },
    a = t.exports = {
      REQUIRED: !1,
      fastKey: function(t, e) {
        if (!O(t)) return "symbol" == typeof t ? t: ("string" == typeof t ? "S": "P") + t;
        if (!E(t, i)) {
          if (!s(t)) return "F";
          if (!e) return "E";
          n(t)
        }
        return t[i].objectID
      },
      getWeakData: function(t, e) {
        if (!E(t, i)) {
          if (!s(t)) return ! 0;
          if (!e) return ! 1;
          n(t)
        }
        return t[i].weakData
      },
      onFreeze: function(t) {
        return fa && a.REQUIRED && s(t) && !E(t, i) && n(t),
        t
      }
    };
    xt[i] = !0
  }),
  va = (ma.REQUIRED, ma.fastKey, ma.getWeakData, ma.onFreeze, e(function(t) {
    function h(t, e) {
      this.stopped = t,
      this.result = e
    } (t.exports = function(t, e, n, i, o) {
      var s, a, r, c, p, u, l, d = w(e, n, i ? 2 : 1);
      if (o) s = t;
      else {
        if ("function" != typeof(a = po(t))) throw TypeError("Target is not iterable");
        if (co(a)) {
          for (r = 0, c = Bt(t.length); r < c; r++) if ((p = i ? d(N(l = t[r])[0], l[1]) : d(t[r])) && p instanceof h) return p;
          return new h(!1)
        }
        s = a.call(t)
      }
      for (u = s.next; ! (l = u.call(s)).done;) if ("object" == typeof(p = ro(s, d, l.value, i)) && p && p instanceof h) return p;
      return new h(!1)
    }).stop = function(t) {
      return new h(!0, t)
    }
  })),
  ga = G.f,
  ya = Ge.forEach,
  xa = Ot.set,
  ba = Ot.getterFor,
  wa = Dt("species"),
  Da = G.f,
  Sa = ma.fastKey,
  ka = Ot.set,
  Aa = Ot.getterFor,
  Oa = ($s = function(e) {
    return function(t) {
      return e(this, arguments.length ? t: void 0)
    }
  },
  ta = {
    getConstructor: function(t, n, i, o) {
      function s(t, e, n) {
        var i, o, s = r(t),
        a = c(t, e);
        return a ? a.value = n: (s.last = a = {
          index: o = Sa(e, !0),
          key: e,
          value: n,
          previous: i = s.last,
          next: void 0,
          removed: !1
        },
        s.first || (s.first = a), i && (i.next = a), f ? s.size++:t.size++, "F" !== o && (s.index[o] = a)),
        t
      }
      var a = t(function(t, e) {
        Qs(t, a, n),
        ka(t, {
          type: n,
          index: re(null),
          first: void 0,
          last: void 0,
          size: 0
        }),
        f || (t.size = 0),
        null != e && va(e, t[o], t, i)
      }),
      r = Aa(n),
      c = function(t, e) {
        var n, i = r(t),
        o = Sa(e);
        if ("F" !== o) return i.index[o];
        for (n = i.first; n; n = n.next) if (n.key == e) return n
      };
      return qs(a.prototype, {
        clear: function() {
          for (var t = r(this), e = t.index, n = t.first; n;) n.removed = !0,
          n.previous && (n.previous = n.previous.next = void 0),
          delete e[n.index],
          n = n.next;
          t.first = t.last = void 0,
          f ? t.size = 0 : this.size = 0
        },
        delete: function(t) {
          var e, n, i = r(this),
          o = c(this, t);
          return o && (e = o.next, n = o.previous, delete i.index[o.index], o.removed = !0, n && (n.next = e), e && (e.previous = n), i.first == o && (i.first = e), i.last == o && (i.last = n), f ? i.size--:this.size--),
          !!o
        },
        forEach: function(t, e) {
          for (var n, i = r(this), o = w(t, 1 < arguments.length ? e: void 0, 3); n = n ? n.next: i.first;) for (o(n.value, n.key, this); n && n.removed;) n = n.previous
        },
        has: function(t) {
          return !! c(this, t)
        }
      }),
      qs(a.prototype, i ? {
        get: function(t) {
          var e = c(this, t);
          return e && e.value
        },
        set: function(t, e) {
          return s(this, 0 === t ? 0 : t, e)
        }
      }: {
        add: function(t) {
          return s(this, t = 0 === t ? 0 : t, t)
        }
      }),
      f && Da(a.prototype, "size", {
        get: function() {
          return r(this).size
        }
      }),
      a
    },
    setStrong: function(t, e, n) {
      var i, o, s = e + " Iterator",
      a = Aa(e),
      r = Aa(s);
      he(t, e,
      function(t, e) {
        ka(this, {
          type: s,
          target: t,
          state: a(t),
          kind: e,
          last: void 0
        })
      },
      function() {
        for (var t = r(this), e = t.kind, n = t.last; n && n.removed;) n = n.previous;
        return t.target && (t.last = n = n ? n.next: t.state.first) ? "keys" == e ? {
          value: n.key,
          done: !1
        }: "values" == e ? {
          value: n.value,
          done: !1
        }: {
          value: [n.key, n.value],
          done: !1
        }: {
          value: t.target = void 0,
          done: !0
        }
      },
      n ? "entries": "values", !n, !0),
      i = d(e),
      o = G.f,
      f && i && !i[wa] && o(i, wa, {
        configurable: !0,
        get: function() {
          return this
        }
      })
    }
  },
  ia = -1 !== (Ks = "Map").indexOf("Map"), oa = -1 !== Ks.indexOf("Weak"), sa = ia ? "set": "add", aa = y[Ks], ra = aa && aa.prototype, ca = {},
  f && "function" == typeof aa && (oa || ra.forEach && !a(function() { (new aa).entries().next()
  })) ? (ea = $s(function(t, e) {
    xa(Qs(t, ea, Ks), {
      type: Ks,
      collection: new aa
    }),
    null != e && va(e, t[sa], t, ia)
  }), na = ba(Ks), ya(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"],
  function(o) {
    var s = "add" == o || "set" == o;
    o in ra && (!oa || "clear" != o) && Y(ea.prototype, o,
    function(t, e) {
      var n = na(this).collection;
      if (!s && oa && !O(t)) return "get" == o && void 0;
      var i = n[o](0 === t ? 0 : t, e);
      return s ? this: i
    })
  }), oa || ga(ea.prototype, "size", {
    configurable: !0,
    get: function() {
      return na(this).collection.size
    }
  })) : (ea = ta.getConstructor($s, Ks, ia, sa), ma.REQUIRED = !0), pe(ea, Ks, !1, !0), ca[Ks] = ea, D({
    global: !0,
    forced: !0
  },
  ca), oa || ta.setStrong(ea, Ks, ia), new W.Map);
  Oa.set("快速入所", {
    id: 0,
    icon: "快速入所.png"
  }),
  Oa.set("验证收回", {
    id: 1,
    icon: "验证收回.png"
  }),
  Oa.set("收回登记", {
    id: 2,
    icon: "收回登记.png"
  }),
  Oa.set("健康检查", {
    id: 3,
    icon: "健康检查.png"
  }),
  Oa.set("所领导意见", {
    id: 4,
    icon: "所领导意见.png"
  }),
  Oa.set("暂不收押", {
    id: 5,
    icon: "暂不收押.png"
  }),
  Oa.set("收押开证", {
    id: 6,
    icon: "收押开证.png"
  }),
  Oa.set("附物登记", {
    id: 7,
    icon: "附物登记.png"
  }),
  Oa.set("入所登记", {
    id: 8,
    icon: "入所登记.png"
  }),
  Oa.set("告知", {
    id: 9,
    icon: "告知.png"
  }),
  Oa.set("生物特征", {
    id: 10,
    icon: "生物特征.png"
  }),
  Oa.set("今日出所", {
    id: 11,
    icon: "今日出所.png"
  }),
  Oa.set("文书补打", {
    id: 12,
    icon: "文书补打.png"
  }),
  Oa.set("附物/财务退还", {
    id: 13,
    icon: "附物或财物退还.png"
  }),
  Oa.set("回所确认", {
    id: 14,
    icon: "回所确认.png"
  }),
  Oa.set("鉴定", {
    id: 15,
    icon: "鉴定.png"
  }),
  Oa.set("审查担保", {
    id: 16,
    icon: "审查担保.png"
  }),
  Oa.set("证件核对", {
    id: 17,
    icon: "证件核对.png"
  }),
  Oa.set("变更羁押期限", {
    id: 18,
    icon: "变更羁押期限.png"
  }),
  Oa.set("回执", {
    id: 19,
    icon: "回执.png"
  }),
  Oa.set("执行", {
    id: 20,
    icon: "执行.png"
  }),
  Oa.set("退讯", {
    id: 21,
    icon: "退讯.png"
  }),
  Oa.set("信件寄出处理", {
    id: 22,
    icon: "信件寄出处理.png"
  }),
  Oa.set("人员维护", {
    id: 23,
    icon: "人员维护.png"
  }),
  Oa.set("材料转递", {
    id: 24,
    icon: "材料转递.png"
  }),
  Oa.set("政策兑现", {
    id: 25,
    icon: "政策兑现.png"
  }),
  Oa.set("接班", {
    id: 26,
    icon: "接班.png"
  }),
  Oa.set("领导查看-重病号查询", {
    id: 27,
    icon: "领导查看-重病号查询.png"
  }),
  Oa.set("联系家属", {
    id: 28,
    icon: "联系家属.png"
  }),
  Oa.set("武器归还", {
    id: 29,
    icon: "武器归还.png"
  }),
  Oa.set("带出监室", {
    id: 30,
    icon: "带出监室.png"
  }),
  Oa.set("重病号分布图", {
    id: 31,
    icon: "重病号分布图.png"
  }),
  Oa.set("邮寄家属", {
    id: 32,
    icon: "邮寄家属.png"
  }),
  Oa.set("前台办理", {
    id: 33,
    icon: "前台办理.png"
  }),
  Oa.set("安检机安检", {
    id: 34,
    icon: "安检机安检.png"
  }),
  Oa.set("管教送物", {
    id: 35,
    icon: "管教送物.png"
  }),
  Oa.set("另行处理", {
    id: 36,
    icon: "另行处理.png"
  }),
  Oa.set("保证金收取", {
    id: 37,
    icon: "保证金收取.png"
  }),
  Oa.set("已请假人员", {
    id: 38,
    icon: "已请假人员.png"
  }),
  Oa.set("错录人员删除", {
    id: 39,
    icon: "错录人员删除.png"
  }),
  Oa.set("误出所人员恢复", {
    id: 40,
    icon: "误出所人员恢复.png"
  }),
  Oa.set("信息员管理", {
    id: 41,
    icon: "信息员管理.png"
  }),
  Oa.set("查证情况", {
    id: 42,
    icon: "查证情况.png"
  }),
  Oa.set("处理情况", {
    id: 43,
    icon: "处理情况.png"
  }),
  Oa.set("日常清监", {
    id: 44,
    icon: "日常清监.png"
  }),
  Oa.set("所领导讲评", {
    id: 45,
    icon: "所领导讲评.png"
  }),
  Oa.set("验证登记", {
    id: 46,
    icon: "收回登记.png"
  }),
  Oa.set("安全检查", {
    id: 47,
    icon: "健康检查.png"
  }),
  Oa.set("生物特征采集", {
    id: 48,
    icon: "生物特征采集.png"
  }),
  Oa.set("接济物品", {
    id: 49,
    icon: "附物登记.png"
  }),
  Oa.set("今日出所", {
    id: 50,
    icon: "今日出所.png"
  }),
  Oa.set("出所登记", {
    id: 51,
    icon: "入所登记.png"
  }),
  Oa.set("所领导审批", {
    id: 52,
    icon: "所领导意见.png"
  }),
  Oa.set("文书补打", {
    id: 53,
    icon: "文书补打.png"
  }),
  Oa.set("出所", {
    id: 54,
    icon: "今日出所.png"
  }),
  Oa.set("出所通知", {
    id: 55,
    icon: "告知.png"
  }),
  Oa.set("附物/财务退还", {
    id: 56,
    icon: "附物或财物退还.png"
  }),
  Oa.set("临时出所登记", {
    id: 57,
    icon: "入所登记.png"
  }),
  Oa.set("领导审批", {
    id: 58,
    icon: "所领导意见.png"
  }),
  Oa.set("回所确认", {
    id: 59,
    icon: "回所确认.png"
  }),
  Oa.set("申请", {
    id: 60,
    icon: "入所登记.png"
  }),
  Oa.set("所务会意见", {
    id: 61,
    icon: "所领导意见.png"
  }),
  Oa.set("鉴定", {
    id: 62,
    icon: "鉴定.png"
  }),
  Oa.set("审查担保", {
    id: 63,
    icon: "审查担保.png"
  }),
  Oa.set("证件核对", {
    id: 64,
    icon: "证件核对.png"
  }),
  Oa.set("延期登记", {
    id: 65,
    icon: "入所登记.png"
  }),
  Oa.set("批量延期", {
    id: 66,
    icon: "入所登记.png"
  }),
  Oa.set("变更羁押期限", {
    id: 67,
    icon: "变更羁押期限.png"
  }),
  Oa.set("签收", {
    id: 68,
    icon: "入所登记.png"
  }),
  Oa.set("回执", {
    id: 69,
    icon: "回执.png"
  }),
  Oa.set("办案环节变动", {
    id: 70,
    icon: "变更羁押期限.png"
  }),
  Oa.set("结案", {
    id: 71,
    icon: "回所确认.png"
  }),
  Oa.set("执行", {
    id: 72,
    icon: "执行.png"
  }),
  Oa.set("处理结果登记", {
    id: 73,
    icon: "入所登记.png"
  }),
  Oa.set("接受纠正违法", {
    id: 74,
    icon: "执行.png"
  }),
  Oa.set("纠正违法反馈", {
    id: 75,
    icon: "回执.png"
  }),
  Oa.set("鉴定开始登记", {
    id: 76,
    icon: "入所登记.png"
  }),
  Oa.set("鉴定结束登记", {
    id: 77,
    icon: "入所登记.png"
  }),
  Oa.set("核对凭证", {
    id: 78,
    icon: "证件核对.png"
  }),
  Oa.set("题解出所登记", {
    id: 79,
    icon: "入所登记.png"
  }),
  Oa.set("监区提人登记", {
    id: 80,
    icon: "入所登记.png"
  }),
  Oa.set("题解回所安全检查", {
    id: 81,
    icon: "健康检查.png"
  }),
  Oa.set("提讯登记", {
    id: 82,
    icon: "入所登记.png"
  }),
  Oa.set("退讯", {
    id: 83,
    icon: "退讯.png"
  }),
  Oa.set("会见登记", {
    id: 84,
    icon: "入所登记.png"
  }),
  Oa.set("会见完毕安全检查", {
    id: 85,
    icon: "健康检查.png"
  }),
  Oa.set("带入监室", {
    id: 86,
    icon: "回所确认.png"
  }),
  Oa.set("登记呈报", {
    id: 87,
    icon: "入所登记.png"
  }),
  Oa.set("预约会见", {
    id: 88,
    icon: "入所登记.png"
  }),
  Oa.set("外来人员登记", {
    id: 89,
    icon: "入所登记.png"
  }),
  Oa.set("离开登记", {
    id: 90,
    icon: "入所登记.png"
  }),
  Oa.set("监室调整登记", {
    id: 91,
    icon: "入所登记.png"
  }),
  Oa.set("中队/警署意见", {
    id: 92,
    icon: "所领导意见.png"
  }),
  Oa.set("名单打印", {
    id: 93,
    icon: "文书补打.png"
  }),
  Oa.set("监室调整确定", {
    id: 94,
    icon: "所领导意见.png"
  }),
  Oa.set("主协管设置", {
    id: 95,
    icon: "入所登记.png"
  }),
  Oa.set("物建呈报", {
    id: 96,
    icon: "告知.png"
  }),
  Oa.set("撤销登记", {
    id: 97,
    icon: "入所登记.png"
  }),
  Oa.set("撤销中队长/警署意见", {
    id: 98,
    icon: "所领导意见.png"
  }),
  Oa.set("情况反馈", {
    id: 99,
    icon: "回执.png"
  }),
  Oa.set("收信登记", {
    id: 100,
    icon: "入所登记.png"
  }),
  Oa.set("信件转接处理", {
    id: 101,
    icon: "回执.png"
  }),
  Oa.set("发信登记", {
    id: 102,
    icon: "入所登记.png"
  }),
  Oa.set("处理审批", {
    id: 103,
    icon: "所领导意见.png"
  }),
  Oa.set("信件寄出处理", {
    id: 104,
    icon: "信件寄出处理.png"
  }),
  Oa.set("人员维护", {
    id: 105,
    icon: "人员维护.png"
  }),
  Oa.set("中队警组意见", {
    id: 106,
    icon: "所领导意见.png"
  }),
  Oa.set("解除呈批", {
    id: 107,
    icon: "入所登记.png"
  }),
  Oa.set("解除中队/警组意见", {
    id: 108,
    icon: "所领导意见.png"
  }),
  Oa.set("解除所领导意见", {
    id: 109,
    icon: "所领导意见.png"
  }),
  Oa.set("奖励呈批", {
    id: 110,
    icon: "入所登记.png"
  }),
  Oa.set("奖励情况登记", {
    id: 111,
    icon: "入所登记.png"
  }),
  Oa.set("处罚呈报", {
    id: 112,
    icon: "入所登记.png"
  }),
  Oa.set("所长意见", {
    id: 113,
    icon: "所领导意见.png"
  }),
  Oa.set("延长呈报", {
    id: 114,
    icon: "入所登记.png"
  }),
  Oa.set("延长所领导意见", {
    id: 115,
    icon: "所领导意见.png"
  }),
  Oa.set("解除处罚登记", {
    id: 116,
    icon: "入所登记.png"
  }),
  Oa.set("械具使用呈批", {
    id: 117,
    icon: "入所登记.png"
  }),
  Oa.set("械具使用登记", {
    id: 118,
    icon: "入所登记.png"
  }),
  Oa.set("械具提前解除", {
    id: 119,
    icon: "入所登记.png"
  }),
  Oa.set("延长中队/警署意见", {
    id: 120,
    icon: "所领导意见.png"
  }),
  Oa.set("延长或提前解除呈报", {
    id: 121,
    icon: "入所登记.png"
  }),
  Oa.set("线索登记", {
    id: 122,
    icon: "入所登记.png"
  }),
  Oa.set("线索登记表打印", {
    id: 123,
    icon: "入所登记.png"
  }),
  Oa.set("材料转递", {
    id: 124,
    icon: "材料转递.png"
  }),
  Oa.set("转递反馈", {
    id: 125,
    icon: "回执.png"
  }),
  Oa.set("政策兑现", {
    id: 126,
    icon: "政策兑现.png"
  }),
  Oa.set("禁闭设置", {
    id: 127,
    icon: "入所登记.png"
  }),
  Oa.set("医生意见", {
    id: 128,
    icon: "健康检查.png"
  }),
  Oa.set("中队长意见", {
    id: 129,
    icon: "所领导意见.png"
  }),
  Oa.set("禁闭延长", {
    id: 130,
    icon: "回所确认.png"
  }),
  Oa.set("禁闭解除", {
    id: 131,
    icon: "回所确认.png"
  }),
  Oa.set("救济物品申领", {
    id: 132,
    icon: "入所登记.png"
  }),
  Oa.set("文明监室设置", {
    id: 133,
    icon: "入所登记.png"
  }),
  Oa.set("文明监室撤销", {
    id: 134,
    icon: "回所确认.png"
  }),
  Oa.set("严管设置", {
    id: 135,
    icon: "入所登记.png"
  }),
  Oa.set("严管撤销", {
    id: 136,
    icon: "回所确认.png"
  }),
  Oa.set("严管延长", {
    id: 137,
    icon: "回所确认.png"
  }),
  Oa.set("交班", {
    id: 138,
    icon: "入所登记.png"
  }),
  Oa.set("接班", {
    id: 139,
    icon: "接班.png"
  }),
  Oa.set("领导查看", {
    id: 140,
    icon: "领导查看.png"
  }),
  Oa.set("单独关押设置", {
    id: 141,
    icon: "入所登记.png"
  }),
  Oa.set("中队长审批", {
    id: 142,
    icon: "所领导意见.png"
  }),
  Oa.set("带入关押监室", {
    id: 143,
    icon: "回所确认.png"
  }),
  Oa.set("亲情电话申请", {
    id: 144,
    icon: "入所登记.png"
  }),
  Oa.set("联系家属", {
    id: 145,
    icon: "联系家属.png"
  }),
  Oa.set("武器使用呈批", {
    id: 146,
    icon: "入所登记.png"
  }),
  Oa.set("武器归还", {
    id: 147,
    icon: "武器归还.png"
  }),
  Oa.set("加减刑申请", {
    id: 148,
    icon: "入所登记.png"
  }),
  Oa.set("投诉处理登记", {
    id: 149,
    icon: "入所登记.png"
  }),
  Oa.set("登记处理结果", {
    id: 150,
    icon: "入所登记.png"
  }),
  Oa.set("就医登记", {
    id: 151,
    icon: "入所登记.png"
  }),
  Oa.set("带出监室", {
    id: 152,
    icon: "带出监室.png"
  }),
  Oa.set("住院治疗确认", {
    id: 153,
    icon: "回所确认.png"
  }),
  Oa.set("治疗信息录入", {
    id: 154,
    icon: "入所登记.png"
  }),
  Oa.set("重病号登记", {
    id: 155,
    icon: "入所登记.png"
  }),
  Oa.set("解除重病号", {
    id: 156,
    icon: "回所确认.png"
  }),
  Oa.set("重病号查询", {
    id: 157,
    icon: "领导查看.png"
  }),
  Oa.set("重病号分布图", {
    id: 158,
    icon: "重病号分布图.png"
  }),
  Oa.set("伤情补录", {
    id: 159,
    icon: "入所登记.png"
  }),
  Oa.set("入所体检补录", {
    id: 160,
    icon: "入所登记.png"
  }),
  Oa.set("半年体检补录", {
    id: 161,
    icon: "入所登记.png"
  }),
  Oa.set("申请联系", {
    id: 162,
    icon: "入所登记.png"
  }),
  Oa.set("接待民警联系", {
    id: 163,
    icon: "联系家属.png"
  }),
  Oa.set("购药申请", {
    id: 164,
    icon: "入所登记.png"
  }),
  Oa.set("管教审批", {
    id: 165,
    icon: "所领导意见.png"
  }),
  Oa.set("医生确认", {
    id: 166,
    icon: "回所确认.png"
  }),
  Oa.set("送药验证", {
    id: 167,
    icon: "验证收回.png"
  }),
  Oa.set("精神异常登记", {
    id: 168,
    icon: "入所登记.png"
  }),
  Oa.set("解除精神异常", {
    id: 169,
    icon: "回所确认.png"
  }),
  Oa.set("精神异常查询", {
    id: 170,
    icon: "领导查看.png"
  }),
  Oa.set("物品补领", {
    id: 171,
    icon: "附物登记.png"
  }),
  Oa.set("在押人员申请", {
    id: 172,
    icon: "入所登记.png"
  }),
  Oa.set("管教队确认", {
    id: 173,
    icon: "回所确认.png"
  }),
  Oa.set("邮寄家属", {
    id: 174,
    icon: "邮寄家属.png"
  }),
  Oa.set("前台办理", {
    id: 175,
    icon: "前台办理.png"
  }),
  Oa.set("安检机安检", {
    id: 176,
    icon: "安检机安检.png"
  }),
  Oa.set("管教送物", {
    id: 177,
    icon: "管教送物.png"
  }),
  Oa.set("在押人员确认", {
    id: 178,
    icon: "回所确认.png"
  }),
  Oa.set("管教确认", {
    id: 179,
    icon: "回所确认.png"
  }),
  Oa.set("管教中队审批", {
    id: 180,
    icon: "所领导意见.png"
  }),
  Oa.set("综合中队审批", {
    id: 181,
    icon: "所领导意见.png"
  }),
  Oa.set("关系登记", {
    id: 182,
    icon: "入所登记.png"
  }),
  Oa.set("数据查询", {
    id: 183,
    icon: "领导查看.png"
  }),
  Oa.set("检验凭证", {
    id: 184,
    icon: "证件核对.png"
  }),
  Oa.set("简要登记", {
    id: 185,
    icon: "入所登记.png"
  }),
  Oa.set("另行处理", {
    id: 186,
    icon: "另行处理.png"
  }),
  Oa.set("告知后带入拘室", {
    id: 187,
    icon: "告知.png"
  }),
  Oa.set("回所登记", {
    id: 188,
    icon: "入所登记.png"
  }),
  Oa.set("带入拘室", {
    id: 189,
    icon: "回所确认.png"
  }),
  Oa.set("管教核定", {
    id: 190,
    icon: "所领导意见.png"
  }),
  Oa.set("所长审批", {
    id: 191,
    icon: "所领导意见.png"
  }),
  Oa.set("附物返还", {
    id: 192,
    icon: "附物或财物退还.png"
  }),
  Oa.set("开证打印", {
    id: 193,
    icon: "文书补打.png"
  }),
  Oa.set("管教意见", {
    id: 194,
    icon: "所领导意见.png"
  }),
  Oa.set("警组审核", {
    id: 195,
    icon: "所领导意见.png"
  }),
  Oa.set("分管局领导意见", {
    id: 196,
    icon: "所领导意见.png"
  }),
  Oa.set("登记离所", {
    id: 197,
    icon: "入所登记.png"
  }),
  Oa.set("管教鉴定", {
    id: 198,
    icon: "鉴定.png"
  }),
  Oa.set("财务返还", {
    id: 199,
    icon: "回执.png"
  }),
  Oa.set("离所", {
    id: 200,
    icon: "带出监室.png"
  }),
  Oa.set("申请担保", {
    id: 201,
    icon: "审查担保.png"
  }),
  Oa.set("请假呈批", {
    id: 202,
    icon: "入所登记.png"
  }),
  Oa.set("主管意见", {
    id: 203,
    icon: "所领导意见.png"
  }),
  Oa.set("保证金收取", {
    id: 204,
    icon: "保证金收取.png"
  }),
  Oa.set("离所登记", {
    id: 205,
    icon: "入所登记.png"
  }),
  Oa.set("到期未归处理", {
    id: 206,
    icon: "另行处理.png"
  }),
  Oa.set("已请假人员", {
    id: 207,
    icon: "已请假人员.png"
  }),
  Oa.set("登记呈批", {
    id: 208,
    icon: "入所登记.png"
  }),
  Oa.set("安排会见", {
    id: 209,
    icon: "执行.png"
  }),
  Oa.set("会毕登记", {
    id: 210,
    icon: "入所登记.png"
  }),
  Oa.set("拘留区提人登记", {
    id: 211,
    icon: "入所登记.png"
  }),
  Oa.set("接访情况登记", {
    id: 212,
    icon: "入所登记.png"
  }),
  Oa.set("落实工作", {
    id: 213,
    icon: "入所登记.png"
  }),
  Oa.set("视察登记", {
    id: 214,
    icon: "入所登记.png"
  }),
  Oa.set("落实情况", {
    id: 215,
    icon: "执行.png"
  }),
  Oa.set("安排提讯", {
    id: 216,
    icon: "执行.png"
  }),
  Oa.set("讯完登记", {
    id: 217,
    icon: "入所登记.png"
  }),
  Oa.set("送物登记", {
    id: 218,
    icon: "入所登记.png"
  }),
  Oa.set("接收", {
    id: 219,
    icon: "接班.png"
  }),
  Oa.set("派发物品", {
    id: 220,
    icon: "政策兑现.png"
  }),
  Oa.set("申请登记", {
    id: 221,
    icon: "入所登记.png"
  }),
  Oa.set("上级审查", {
    id: 222,
    icon: "所领导意见.png"
  }),
  Oa.set("活动安排", {
    id: 223,
    icon: "执行.png"
  }),
  Oa.set("完毕登记", {
    id: 224,
    icon: "入所登记.png"
  }),
  Oa.set("管教呈批", {
    id: 225,
    icon: "入所登记.png"
  }),
  Oa.set("通话登记", {
    id: 226,
    icon: "入所登记.png"
  }),
  Oa.set("错录人员删除", {
    id: 227,
    icon: "错录人员删除.png"
  }),
  Oa.set("误出所人员恢复", {
    id: 228,
    icon: "误出所人员恢复.png"
  }),
  Oa.set("法律手续变更", {
    id: 229,
    icon: "变更羁押期限.png"
  }),
  Oa.set("交班登记", {
    id: 230,
    icon: "入所登记.png"
  }),
  Oa.set("交班领导确认", {
    id: 231,
    icon: "所领导意见.png"
  }),
  Oa.set("接班确认", {
    id: 232,
    icon: "回所确认.png"
  }),
  Oa.set("接班领导确认", {
    id: 233,
    icon: "所领导意见.png"
  }),
  Oa.set("警组意见", {
    id: 234,
    icon: "所领导意见.png"
  }),
  Oa.set("奖励情况", {
    id: 235,
    icon: "政策兑现.png"
  }),
  Oa.set("文明个人登记", {
    id: 236,
    icon: "入所登记.png"
  }),
  Oa.set("取消文明个人", {
    id: 237,
    icon: "入所登记.png"
  }),
  Oa.set("文明个人查询", {
    id: 238,
    icon: "领导查看.png"
  }),
  Oa.set("文明拘室登记", {
    id: 239,
    icon: "入所登记.png"
  }),
  Oa.set("取消文明拘室", {
    id: 240,
    icon: "入所登记.png"
  }),
  Oa.set("文明拘室查询", {
    id: 241,
    icon: "领导查看.png"
  }),
  Oa.set("材料登记表打印", {
    id: 242,
    icon: "入所登记.png"
  }),
  Oa.set("使用登记", {
    id: 243,
    icon: "入所登记.png"
  }),
  Oa.set("延长登记", {
    id: 244,
    icon: "入所登记.png"
  }),
  Oa.set("提前解除登记", {
    id: 245,
    icon: "入所登记.png"
  }),
  Oa.set("解除械具使用", {
    id: 246,
    icon: "回所确认.png"
  }),
  Oa.set("办案机关书面委托", {
    id: 247,
    icon: "材料转递.png"
  }),
  Oa.set("收发信件登记", {
    id: 248,
    icon: "入所登记.png"
  }),
  Oa.set("信件传递", {
    id: 249,
    icon: "材料转递.png"
  }),
  Oa.set("往来电讯登记", {
    id: 250,
    icon: "入所登记.png"
  }),
  Oa.set("电讯传递", {
    id: 251,
    icon: "材料转递.png"
  }),
  Oa.set("物件呈批", {
    id: 252,
    icon: "入所登记.png"
  }),
  Oa.set("信息员管理", {
    id: 253,
    icon: "信息员管理.png"
  }),
  Oa.set("撤销登记", {
    id: 254,
    icon: "入所登记.png"
  }),
  Oa.set("信息录入", {
    id: 255,
    icon: "入所登记.png"
  }),
  Oa.set("信息传递", {
    id: 256,
    icon: "材料转递.png"
  }),
  Oa.set("查证情况", {
    id: 257,
    icon: "查证情况.png"
  }),
  Oa.set("处理情况", {
    id: 258,
    icon: "处理情况.png"
  }),
  Oa.set("拘室调整登记", {
    id: 259,
    icon: "入所登记.png"
  }),
  Oa.set("主管所领导意见", {
    id: 260,
    icon: "所领导意见.png"
  }),
  Oa.set("拘室调整确认", {
    id: 261,
    icon: "回所确认.png"
  }),
  Oa.set("批量拘室调整", {
    id: 262,
    icon: "入所登记.png"
  }),
  Oa.set("严管呈批", {
    id: 263,
    icon: "入所登记.png"
  }),
  Oa.set("严管解除", {
    id: 264,
    icon: "回所确认.png"
  }),
  Oa.set("谈话登记", {
    id: 265,
    icon: "入所登记.png"
  }),
  Oa.set("谈话查询", {
    id: 266,
    icon: "领导查看.png"
  }),
  Oa.set("集体教育登记", {
    id: 267,
    icon: "入所登记.png"
  }),
  Oa.set("集体教育检索", {
    id: 268,
    icon: "领导查看.png"
  }),
  Oa.set("医生巡诊登记", {
    id: 269,
    icon: "入所登记.png"
  }),
  Oa.set("巡诊查询", {
    id: 270,
    icon: "领导查看.png"
  }),
  Oa.set("诊断结果录入", {
    id: 271,
    icon: "入所登记.png"
  }),
  Oa.set("医生派药", {
    id: 272,
    icon: "执行.png"
  }),
  Oa.set("所内就医查询", {
    id: 273,
    icon: "领导查看.png"
  }),
  Oa.set("医生呈批", {
    id: 274,
    icon: "入所登记.png"
  }),
  Oa.set("警长意见", {
    id: 275,
    icon: "所领导意见.png"
  }),
  Oa.set("死亡登记", {
    id: 276,
    icon: "入所登记.png"
  }),
  Oa.set("死亡鉴定", {
    id: 277,
    icon: "鉴定.png"
  }),
  Oa.set("伤情登记", {
    id: 278,
    icon: "入所登记.png"
  }),
  Oa.set("伤情查询", {
    id: 279,
    icon: "领导查看.png"
  }),
  Oa.set("重病号分配图", {
    id: 280,
    icon: "重病号分布图.png"
  }),
  Oa.set("心理咨询登记", {
    id: 281,
    icon: "入所登记.png"
  }),
  Oa.set("心理咨询处理", {
    id: 282,
    icon: "另行处理.png"
  }),
  Oa.set("心理咨询查询", {
    id: 283,
    icon: "领导查看.png"
  }),
  Oa.set("卫生防疫登记", {
    id: 284,
    icon: "入所登记.png"
  }),
  Oa.set("卫生防疫查询", {
    id: 285,
    icon: "领导查看.png"
  }),
  Oa.set("风险评估登记", {
    id: 286,
    icon: "入所登记.png"
  }),
  Oa.set("动态分析记录", {
    id: 287,
    icon: "入所登记.png"
  }),
  Oa.set("记录查询", {
    id: 288,
    icon: "领导查看.png"
  }),
  Oa.set("日常清监", {
    id: 289,
    icon: "日常清监.png"
  }),
  Oa.set("安全大检查", {
    id: 290,
    icon: "健康检查.png"
  }),
  Oa.set("处理", {
    id: 291,
    icon: "另行处理.png"
  }),
  Oa.set("所领导讲评", {
    id: 292,
    icon: "所领导讲评.png"
  }),
  Oa.set("所领导确认", {
    id: 293,
    icon: "所领导意见.png"
  }),
  Oa.set("事故", {
    id: 294,
    icon: "件登记入所登记.png"
  }),
  Oa.set("处理情况", {
    id: 295,
    icon: "处理情况.png"
  }),
  Oa.set("演练登记", {
    id: 296,
    icon: "入所登记.png"
  }),
  Oa.set("演练情况", {
    id: 297,
    icon: "处理情况.png"
  }),
  Oa.set("改进落实", {
    id: 298,
    icon: "执行.png"
  }),
  Oa.set("指纹采集", {
    id: 299,
    icon: "生物特征采集.png"
  }),
  Oa.set("指纹查询", {
    id: 300,
    icon: "领导查看.png"
  }),
  Oa.set("设置领导审批", {
    id: 301,
    icon: "领导查看.png"
  }),
  Oa.set("撤销领导审批", {
    id: 302,
    icon: "领导查看.png"
  }),
  Oa.set("设置医生意见", {
    id: 303,
    icon: "入所登记.png"
  }),
  Oa.set("设置领导审批", {
    id: 304,
    icon: "领导查看.png"
  }),
  Oa.set("设置中队长意见", {
    id: 305,
    icon: "所领导意见.png"
  }),
  Oa.set("延长医生意见", {
    id: 306,
    icon: "入所登记.png"
  }),
  Oa.set("延长中队长意见", {
    id: 307,
    icon: "所领导意见.png"
  }),
  Oa.set("延长领导审批", {
    id: 308,
    icon: "领导查看.png"
  }),
  Oa.set("解除医生意见", {
    id: 309,
    icon: "入所登记.png"
  }),
  Oa.set("解除中队长意见", {
    id: 310,
    icon: "所领导意见.png"
  }),
  Oa.set("解除领导审批", {
    id: 311,
    icon: "领导查看.png"
  }),
  Oa.set("设置领导审批", {
    id: 312,
    icon: "领导查看.png"
  }),
  Oa.set("撤销领导审批", {
    id: 313,
    icon: "领导查看.png"
  }),
  Oa.set("延长领导审批", {
    id: 314,
    icon: "领导查看.png"
  });
  var Pa = {
    resourceRoot: "/plugin-flowchart/scene/static/img/"
  },
  Ea = [{
    name: "收押入所",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "验证登记",
        position: [120, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "快速入所",
        position: [120, 128],
        extData: {
          events: 0
        }
      },
      {
        name: "回所登记",
        position: [120, 678],
        extData: {
          events: 0
        }
      },
      {
        name: "健康检查",
        position: [400, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导意见",
        position: [400, 678],
        extData: {
          events: 0
        }
      },
      {
        name: "安全检查",
        position: [680, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "暂不收押",
        position: [680, 678],
        extData: {
          events: 0
        }
      },
      {
        name: "附物登记",
        position: [960, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "接济物品",
        position: [960, 678],
        extData: {
          events: 0
        }
      },
      {
        name: "生物特征",
        position: [960, 128],
        extData: {
          events: 0
        }
      },
      {
        name: "告知",
        position: [1240, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "入所登记",
        position: [1520, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "收押开证",
        position: [1520, 128],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "验证登记"
        },
        end: {
          name: "健康检查"
        }
      },
      {
        start: {
          name: "回所登记"
        },
        end: {
          name: "健康检查"
        }
      },
      {
        start: {
          name: "健康检查"
        },
        end: {
          name: "安全检查"
        }
      },
      {
        start: {
          name: "健康检查"
        },
        end: {
          name: "所领导意见"
        }
      },
      {
        start: {
          name: "所领导意见"
        },
        end: {
          name: "暂不收押"
        }
      },
      {
        start: {
          name: "所领导意见"
        },
        end: {
          name: "安全检查"
        }
      },
      {
        start: {
          name: "安全检查"
        },
        end: {
          name: "附物登记"
        }
      },
      {
        start: {
          name: "安全检查"
        },
        end: {
          name: "生物特征"
        }
      },
      {
        start: {
          name: "生物特征"
        },
        end: {
          name: "告知"
        }
      },
      {
        start: {
          name: "附物登记"
        },
        end: {
          name: "告知"
        }
      },
      {
        start: {
          name: "告知"
        },
        end: {
          name: "入所登记"
        }
      }]
    }]
  },
  {
    name: "出所管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "出所登记",
        position: [250, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导审批",
        position: [650, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "文书补打",
        position: [1050, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "出所",
        position: [1450, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "今日出所",
        position: [250, 128],
        extData: {
          events: 0
        }
      },
      {
        name: "出所通知",
        position: [1450, 712],
        extData: {
          events: 0
        }
      },
      {
        name: "附物/财务退还",
        position: [1450, 128],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "出所登记"
        },
        end: {
          name: "所领导审批"
        }
      },
      {
        start: {
          name: "所领导审批"
        },
        end: {
          name: "文书补打"
        }
      },
      {
        start: {
          name: "文书补打"
        },
        end: {
          name: "出所"
        }
      }]
    }]
  },
  {
    name: "临时出所",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "临时出所登记",
        position: [160, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [460, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "出所",
        position: [760, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "回所确认",
        position: [1060, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "临时出所登记"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "出所"
        }
      },
      {
        start: {
          name: "出所"
        },
        end: {
          name: "回所确认"
        }
      },
      {
        start: {
          name: "临时出所登记"
        },
        end: {
          name: "出所"
        }
      }]
    }]
  },
  {
    name: "暂予监外执行",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "申请",
        position: [80, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "所务会意见",
        position: [380, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "鉴定",
        position: [680, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "审查担保",
        position: [980, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "出所",
        position: [1280, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "申请"
        },
        end: {
          name: "所务会意见"
        }
      },
      {
        start: {
          name: "所务会意见"
        },
        end: {
          name: "鉴定"
        }
      },
      {
        start: {
          name: "鉴定"
        },
        end: {
          name: "审查担保"
        }
      },
      {
        start: {
          name: "审查担保"
        },
        end: {
          name: "出所"
        }
      }]
    }]
  },
  {
    name: "延期",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "证件核对",
        position: [280, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "延期登记",
        position: [572, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "批量延期",
        position: [864, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "变更羁押期限",
        position: [280, 526],
        state: -1,
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "证件核对"
        },
        end: {
          name: "延期登记"
        }
      }]
    }]
  },
  {
    name: "环节变动",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "签收",
        position: [280, 414],
        state: -1,
        extData: {
          events: 0
        }
      },
      {
        name: "回执",
        position: [572, 414],
        state: -1,
        extData: {
          events: 0
        }
      },
      {
        name: "办案环节变动",
        position: [864, 414],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "签收"
        },
        end: {
          name: "回执"
        }
      }]
    }]
  },
  {
    name: "处理结果",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "结案",
        position: [280, 414],
        state: -1,
        extData: {
          events: 0
        }
      },
      {
        name: "执行",
        position: [572, 414],
        state: -1,
        extData: {
          events: 0
        }
      },
      {
        name: "处理结果登记",
        position: [864, 414],
        extData: {
          events: 0
        }
      }]
    }]
  },
  {
    name: "协同执行督导",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "接受纠正违法",
        position: [280, 414],
        state: -1,
        extData: {
          events: 0
        }
      },
      {
        name: "纠正违法反馈",
        position: [572, 414],
        state: -1,
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "接受纠正违法"
        },
        end: {
          name: "纠正违法反馈"
        }
      }]
    }]
  },
  {
    name: "精神病鉴定",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "鉴定开始登记",
        position: [280, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "鉴定结束登记",
        position: [572, 414],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "鉴定开始登记"
        },
        end: {
          name: "鉴定结束登记"
        }
      }]
    }]
  },
  {
    name: "提解",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "核对凭证",
        position: [250, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "题解出所登记",
        position: [650, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "监区提人登记",
        position: [1050, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "题解回所安全检查",
        position: [1450, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "核对凭证"
        },
        end: {
          name: "题解出所登记"
        }
      },
      {
        start: {
          name: "题解出所登记"
        },
        end: {
          name: "监区提人登记"
        }
      },
      {
        start: {
          name: "监区提人登记"
        },
        end: {
          name: "题解回所安全检查"
        }
      }]
    }]
  },
  {
    name: "提讯",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "核对凭证",
        position: [80, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "提讯登记",
        position: [380, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "监区提人登记",
        position: [680, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "安全检查",
        position: [980, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "退讯",
        position: [1280, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "核对凭证"
        },
        end: {
          name: "提讯登记"
        }
      },
      {
        start: {
          name: "提讯登记"
        },
        end: {
          name: "监区提人登记"
        }
      },
      {
        start: {
          name: "监区提人登记"
        },
        end: {
          name: "安全检查"
        }
      },
      {
        start: {
          name: "安全检查"
        },
        end: {
          name: "退讯"
        }
      }]
    }]
  },
  {
    name: "家属会见",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "会见登记",
        position: [80, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [380, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "监区提人登记",
        position: [680, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "会见完毕安全检查",
        position: [980, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "带入监室",
        position: [1280, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "会见登记"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "监区提人登记"
        }
      },
      {
        start: {
          name: "监区提人登记"
        },
        end: {
          name: "会见完毕安全检查"
        }
      },
      {
        start: {
          name: "会见完毕安全检查"
        },
        end: {
          name: "带入监室"
        }
      },
      {
        start: {
          name: "会见登记"
        },
        end: {
          name: "监区提人登记"
        }
      }]
    }]
  },
  {
    name: "律师会见",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "核对凭证",
        position: [250, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "登记呈报",
        position: [650, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "监区提人登记",
        position: [1050, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "会见完毕安全检查",
        position: [1450, 260],
        extData: {
          events: 0
        }
      },
      {
        name: "预约会见",
        position: [650, 520],
        state: -1,
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "核对凭证"
        },
        end: {
          name: "登记呈报"
        }
      },
      {
        start: {
          name: "登记呈报"
        },
        end: {
          name: "监区提人登记"
        }
      },
      {
        start: {
          name: "监区提人登记"
        },
        end: {
          name: "会见完毕安全检查"
        }
      },
      {
        start: {
          name: "预约会见"
        },
        end: {
          name: "监区提人登记"
        }
      }]
    }]
  },
  {
    name: "外来人员登记",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "外来人员登记",
        position: [280, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "离开登记",
        position: [572, 414],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "外来人员登记"
        },
        end: {
          name: "离开登记"
        }
      }]
    }]
  },
  {
    name: "监控调整",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "监室调整登记",
        position: [152, 472],
        extData: {
          events: 0
        }
      },
      {
        name: "中队/警署意见",
        position: [472, 472],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [808, 273],
        extData: {
          events: 0
        }
      },
      {
        name: "名单打印",
        position: [1142, 130],
        extData: {
          events: 0
        }
      },
      {
        name: "监室调整确定",
        position: [1142, 472],
        extData: {
          events: 0
        }
      },
      {
        name: "主协管设置",
        position: [1495, 703],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "监室调整登记"
        },
        end: {
          name: "中队/警署意见"
        }
      },
      {
        start: {
          name: "中队/警署意见"
        },
        end: {
          name: "监室调整确定"
        }
      },
      {
        start: {
          name: "中队/警署意见"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "名单打印"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "监室调整确定"
        }
      }]
    }]
  },
  {
    name: "耳目管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "物建呈报",
        position: [120, 268],
        extData: {
          events: 0
        }
      },
      {
        name: "中队/警署意见",
        position: [400, 268],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导意见",
        position: [680, 268],
        extData: {
          events: 0
        }
      },
      {
        name: "撤销登记",
        position: [960, 588],
        extData: {
          events: 0
        }
      },
      {
        name: "撤销中队长/警署意见",
        position: [1240, 588],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [1520, 588],
        extData: {
          events: 0
        }
      },
      {
        name: "情况反馈",
        position: [1520, 268],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "物建呈报"
        },
        end: {
          name: "中队/警署意见"
        }
      },
      {
        start: {
          name: "中队/警署意见"
        },
        end: {
          name: "所领导意见"
        }
      },
      {
        start: {
          name: "所领导意见"
        },
        end: {
          name: "撤销登记"
        }
      },
      {
        start: {
          name: "撤销登记"
        },
        end: {
          name: "撤销中队长/警署意见"
        }
      },
      {
        start: {
          name: "撤销中队长/警署意见"
        },
        end: {
          name: "领导审批"
        }
      }]
    }]
  },
  {
    name: "信件管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "收信登记",
        position: [120, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [400, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "信件转接处理",
        position: [680, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "发信登记",
        position: [960, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "处理审批",
        position: [1240, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "信件寄出处理",
        position: [1520, 403],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "收信登记"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "信件转接处理"
        }
      },
      {
        start: {
          name: "发信登记"
        },
        end: {
          name: "处理审批"
        }
      },
      {
        start: {
          name: "处理审批"
        },
        end: {
          name: "信件寄出处理"
        }
      }]
    }]
  },
  {
    name: "重点人员",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "人员维护",
        position: [120, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "中队警组意见",
        position: [400, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导意见",
        position: [680, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "解除呈批",
        position: [960, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "解除中队/警组意见",
        position: [1240, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "解除所领导意见",
        position: [1520, 403],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "人员维护"
        },
        end: {
          name: "中队警组意见"
        }
      },
      {
        start: {
          name: "中队警组意见"
        },
        end: {
          name: "所领导意见"
        }
      },
      {
        start: {
          name: "解除呈批"
        },
        end: {
          name: "解除中队/警组意见"
        }
      },
      {
        start: {
          name: "解除中队/警组意见"
        },
        end: {
          name: "解除所领导意见"
        }
      }]
    }]
  },
  {
    name: "奖励管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "奖励呈批",
        position: [250, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "中队/警署意见",
        position: [650, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导审批",
        position: [1050, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "奖励情况登记",
        position: [1450, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "奖励呈批"
        },
        end: {
          name: "中队/警署意见"
        }
      },
      {
        start: {
          name: "中队/警署意见"
        },
        end: {
          name: "所领导审批"
        }
      },
      {
        start: {
          name: "所领导审批"
        },
        end: {
          name: "奖励情况登记"
        }
      }]
    }]
  },
  {
    name: "处罚管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "处罚呈报",
        position: [172, 355],
        extData: {
          events: 0
        }
      },
      {
        name: "中队/警署意见",
        position: [430, 355],
        extData: {
          events: 0
        }
      },
      {
        name: "解除处罚登记",
        position: [1468, 355],
        extData: {
          events: 0
        }
      },
      {
        name: "延长呈报",
        position: [810, 660],
        extData: {
          events: 0
        }
      },
      {
        name: "延长所领导意见",
        position: [1160, 660],
        extData: {
          events: 0
        }
      },
      {
        name: "所长意见",
        position: [704, 128],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "处罚呈报"
        },
        end: {
          name: "中队/警署意见"
        }
      },
      {
        start: {
          name: "中队/警署意见"
        },
        end: {
          name: "解除处罚登记"
        }
      },
      {
        start: {
          name: "中队/警署意见"
        },
        end: {
          name: "延长呈报"
        }
      },
      {
        start: {
          name: "延长呈报"
        },
        end: {
          name: "延长所领导意见"
        }
      },
      {
        start: {
          name: "延长所领导意见"
        },
        end: {
          name: "解除处罚登记"
        }
      }]
    }]
  },
  {
    name: "械具使用",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "械具使用呈批",
        position: [250, 168],
        extData: {
          events: 0
        }
      },
      {
        name: "中队/警署意见",
        position: [550, 168],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导审批",
        position: [850, 168],
        extData: {
          events: 0
        }
      },
      {
        name: "械具使用登记",
        position: [1150, 168],
        extData: {
          events: 0
        }
      },
      {
        name: "械具提前解除",
        position: [1450, 168],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [1450, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "延长中队/警署意见",
        position: [1150, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "延长或提前解除呈报",
        position: [850, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "械具使用呈批"
        },
        end: {
          name: "中队/警署意见"
        }
      },
      {
        start: {
          name: "中队/警署意见"
        },
        end: {
          name: "所领导审批"
        }
      },
      {
        start: {
          name: "所领导审批"
        },
        end: {
          name: "械具使用登记"
        }
      },
      {
        start: {
          name: "延长或提前解除呈报"
        },
        end: {
          name: "延长中队/警署意见"
        }
      },
      {
        start: {
          name: "延长中队/警署意见"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "械具提前解除"
        }
      }]
    }]
  },
  {
    name: "协助破案",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "线索登记",
        position: [250, 466],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导意见",
        position: [550, 466],
        extData: {
          events: 0
        }
      },
      {
        name: "材料转递",
        position: [850, 466],
        extData: {
          events: 0
        }
      },
      {
        name: "转递反馈",
        position: [1150, 466],
        extData: {
          events: 0
        }
      },
      {
        name: "政策兑现",
        position: [1450, 466],
        extData: {
          events: 0
        }
      },
      {
        name: "线索登记表打印",
        position: [850, 140],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "线索登记"
        },
        end: {
          name: "所领导意见"
        }
      },
      {
        start: {
          name: "所领导意见"
        },
        end: {
          name: "材料转递"
        }
      },
      {
        start: {
          name: "所领导意见"
        },
        end: {
          name: "线索登记表打印"
        }
      },
      {
        start: {
          name: "材料转递"
        },
        end: {
          name: "转递反馈"
        }
      },
      {
        start: {
          name: "转递反馈"
        },
        end: {
          name: "政策兑现"
        }
      }]
    }]
  },
  {
    name: "禁闭管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "禁闭设置",
        position: [80, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "设置医生意见",
        position: [367, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "设置中队长意见",
        position: [662, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "设置领导审批",
        position: [958, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "禁闭延长",
        position: [670, 214],
        extData: {
          events: 0
        }
      },
      {
        name: "延长医生意见",
        position: [960, 214],
        extData: {
          events: 0
        }
      },
      {
        name: "延长中队长意见",
        position: [1250, 214],
        extData: {
          events: 0
        }
      },
      {
        name: "延长领导审批",
        position: [1555, 214],
        extData: {
          events: 0
        }
      },
      {
        name: "禁闭解除",
        position: [670, 614],
        extData: {
          events: 0
        }
      },
      {
        name: "解除医生意见",
        position: [960, 614],
        extData: {
          events: 0
        }
      },
      {
        name: "解除中队长意见",
        position: [1250, 614],
        extData: {
          events: 0
        }
      },
      {
        name: "解除领导审批",
        position: [1555, 614],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "禁闭设置"
        },
        end: {
          name: "设置医生意见"
        }
      },
      {
        start: {
          name: "设置医生意见"
        },
        end: {
          name: "设置中队长意见"
        }
      },
      {
        start: {
          name: "设置中队长意见"
        },
        end: {
          name: "设置领导审批"
        }
      },
      {
        start: {
          name: "禁闭延长",
          position: [670, 214]
        },
        end: {
          name: "延长医生意见",
          position: [960, 214]
        }
      },
      {
        start: {
          name: "延长医生意见",
          position: [960, 214]
        },
        end: {
          name: "延长中队长意见",
          position: [1250, 214]
        }
      },
      {
        start: {
          name: "延长中队长意见",
          position: [1250, 214]
        },
        end: {
          name: "延长领导审批",
          position: [1555, 214]
        }
      },
      {
        start: {
          name: "禁闭解除",
          position: [670, 614]
        },
        end: {
          name: "解除医生意见",
          position: [960, 614]
        }
      },
      {
        start: {
          name: "解除医生意见",
          position: [960, 614]
        },
        end: {
          name: "解除中队长意见",
          position: [1250, 614]
        }
      },
      {
        start: {
          name: "解除中队长意见",
          position: [1250, 614]
        },
        end: {
          name: "解除领导审批",
          position: [1555, 614]
        }
      }]
    }]
  },
  {
    name: "救济品申领",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "救济物品申领",
        position: [280, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [572, 414],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "救济物品申领"
        },
        end: {
          name: "领导审批"
        }
      }]
    }]
  },
  {
    name: "管教管理-文明监室",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "文明监室设置",
        position: [280, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [572, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "文明监室撤销",
        position: [1105, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [1405, 414],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "文明监室设置"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "文明监室撤销"
        },
        end: {
          name: "领导审批",
          position: [1405, 414]
        }
      }]
    }]
  },
  {
    name: "严管人员",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "严管设置",
        position: [280, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "设置领导审批",
        position: [572, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "严管撤销",
        position: [1105, 214],
        extData: {
          events: 0
        }
      },
      {
        name: "撤销领导审批",
        position: [1405, 214],
        extData: {
          events: 0
        }
      },
      {
        name: "严管延长",
        position: [1105, 614],
        extData: {
          events: 0
        }
      },
      {
        name: "延长领导审批",
        position: [1405, 614],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "严管设置"
        },
        end: {
          name: "设置领导审批"
        }
      },
      {
        start: {
          name: "严管撤销"
        },
        end: {
          name: "撤销领导审批",
          position: [1405, 214]
        }
      },
      {
        start: {
          name: "严管延长"
        },
        end: {
          name: "延长领导审批",
          position: [1405, 614]
        }
      }]
    }]
  },
  {
    name: "岗位交接班",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "交班",
        position: [488, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "接班",
        position: [808, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导查看",
        position: [1150, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "交班"
        },
        end: {
          name: "接班"
        }
      }]
    }]
  },
  {
    name: "单独关押",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "单独关押设置",
        position: [250, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "中队长审批",
        position: [650, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [1050, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "带入关押监室",
        position: [1450, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "单独关押设置"
        },
        end: {
          name: "中队长审批"
        }
      },
      {
        start: {
          name: "中队长审批"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "带入关押监室"
        }
      }]
    }]
  },
  {
    name: "亲情电话",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "亲情电话申请",
        position: [250, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "中队长审批",
        position: [650, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导审批",
        position: [1050, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "联系家属",
        position: [1450, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "亲情电话申请"
        },
        end: {
          name: "中队长审批"
        }
      },
      {
        start: {
          name: "中队长审批"
        },
        end: {
          name: "所领导审批"
        }
      },
      {
        start: {
          name: "所领导审批"
        },
        end: {
          name: "联系家属"
        }
      }]
    }]
  },
  {
    name: "武器使用",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "武器使用呈批",
        position: [488, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导审批",
        position: [808, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "武器归还",
        position: [1150, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "武器使用呈批"
        },
        end: {
          name: "所领导审批"
        }
      },
      {
        start: {
          name: "所领导审批"
        },
        end: {
          name: "武器归还"
        }
      }]
    }]
  },
  {
    name: "加减刑",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "加减刑申请",
        position: [610, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [1066, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "加减刑申请"
        },
        end: {
          name: "领导审批"
        }
      }]
    }]
  },
  {
    name: "投诉处理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "投诉处理登记",
        position: [488, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [808, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "登记处理结果",
        position: [1150, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "投诉处理登记"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "登记处理结果"
        }
      }]
    }]
  },
  {
    name: "就医管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "就医登记",
        position: [80, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [330, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "带出监室",
        position: [580, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "住院治疗确认",
        position: [830, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "带入监室",
        position: [1080, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "治疗信息录入",
        position: [1330, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "就医登记"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "带出监室"
        }
      },
      {
        start: {
          name: "带出监室"
        },
        end: {
          name: "住院治疗确认"
        }
      },
      {
        start: {
          name: "住院治疗确认"
        },
        end: {
          name: "带入监室"
        }
      },
      {
        start: {
          name: "带入监室"
        },
        end: {
          name: "治疗信息录入"
        }
      }]
    }]
  },
  {
    name: "重病号管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "重病号登记",
        position: [390, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "解除重病号",
        position: [680, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "重病号查询",
        position: [980, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "重病号分布图",
        position: [1270, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "重病号登记"
        },
        end: {
          name: "解除重病号"
        }
      },
      {
        start: {
          name: "解除重病号"
        },
        end: {
          name: "重病号查询"
        }
      },
      {
        start: {
          name: "重病号查询"
        },
        end: {
          name: "重病号分布图"
        }
      }]
    }]
  },
  {
    name: "医疗信息补录",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "伤情补录",
        position: [400, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "入所体检补录",
        position: [700, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "半年体检补录",
        position: [1e3, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "伤情补录"
        },
        end: {
          name: "入所体检补录"
        }
      },
      {
        start: {
          name: "入所体检补录"
        },
        end: {
          name: "半年体检补录"
        }
      }]
    }]
  },
  {
    name: "家属联系",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "申请联系",
        position: [250, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "中队长审批",
        position: [650, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导审批",
        position: [1050, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "接待民警联系",
        position: [1450, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "申请联系"
        },
        end: {
          name: "中队长审批"
        }
      },
      {
        start: {
          name: "中队长审批"
        },
        end: {
          name: "领导审批"
        }
      },
      {
        start: {
          name: "领导审批"
        },
        end: {
          name: "接待民警联系"
        }
      }]
    }]
  },
  {
    name: "自备药品申请",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "购药申请",
        position: [250, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "管教审批",
        position: [550, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "医生确认",
        position: [850, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导审批",
        position: [1150, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "送药验证",
        position: [1450, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "购药申请"
        },
        end: {
          name: "管教审批"
        }
      },
      {
        start: {
          name: "管教审批"
        },
        end: {
          name: "医生确认"
        }
      },
      {
        start: {
          name: "医生确认"
        },
        end: {
          name: "所领导审批"
        }
      },
      {
        start: {
          name: "所领导审批"
        },
        end: {
          name: "送药验证"
        }
      }]
    }]
  },
  {
    name: "精神异常管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "精神异常登记",
        position: [463, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "解除精神异常",
        position: [877, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "精神异常查询",
        position: [1223, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "精神异常登记"
        },
        end: {
          name: "解除精神异常"
        }
      },
      {
        start: {
          name: "解除精神异常"
        },
        end: {
          name: "精神异常查询"
        }
      }]
    }]
  },
  {
    name: "交接班",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "交班",
        position: [463, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "接班",
        position: [877, 420],
        extData: {
          events: 0
        }
      },
      {
        name: "领导查看",
        position: [1223, 420],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "交班"
        },
        end: {
          name: "接班"
        }
      }]
    }]
  },
  {
    name: "巡控管理——文明监室",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "文明监室设置",
        position: [280, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "设置领导审批",
        position: [572, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "文明监室撤销",
        position: [1105, 414],
        extData: {
          events: 0
        }
      },
      {
        name: "撤销领导审批",
        position: [1405, 414],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "文明监室设置"
        },
        end: {
          name: "设置领导审批"
        }
      },
      {
        start: {
          name: "文明监室撤销"
        },
        end: {
          name: "撤销领导审批",
          position: [1405, 414]
        }
      }]
    }]
  },
  {
    name: "家属送物",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "物品补领",
        position: [90, 214],
        extData: {
          events: 0
        }
      },
      {
        name: "在押人员申请",
        position: [100, 480],
        extData: {
          events: 0
        }
      },
      {
        name: "管教确认",
        position: [300, 480],
        extData: {
          events: 0
        }
      },
      {
        name: "管教中队审批",
        position: [500, 480],
        extData: {
          events: 0
        }
      },
      {
        name: "邮寄家属",
        position: [700, 480],
        extData: {
          events: 0
        }
      },
      {
        name: "前台办理",
        position: [900, 480],
        extData: {
          events: 0
        }
      },
      {
        name: "安检机安检",
        position: [1100, 480],
        extData: {
          events: 0
        }
      },
      {
        name: "管教送物",
        position: [1300, 480],
        extData: {
          events: 0
        }
      },
      {
        name: "在押人员确认",
        position: [1500, 480],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "在押人员申请"
        },
        end: {
          name: "管教确认"
        }
      },
      {
        start: {
          name: "管教确认"
        },
        end: {
          name: "管教中队审批"
        }
      },
      {
        start: {
          name: "管教中队审批"
        },
        end: {
          name: "邮寄家属"
        }
      },
      {
        start: {
          name: "邮寄家属"
        },
        end: {
          name: "前台办理"
        }
      },
      {
        start: {
          name: "前台办理"
        },
        end: {
          name: "安检机安检"
        }
      },
      {
        start: {
          name: "安检机安检"
        },
        end: {
          name: "管教送物"
        }
      },
      {
        start: {
          name: "管教送物"
        },
        end: {
          name: "在押人员确认"
        }
      }]
    }]
  },
  {
    name: "购物管理",
    config: [{
      type: "BusinessScatter",
      data: [{
        name: "在押人员申请",
        position: [120, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "管教确认",
        position: [400, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "管教中队审批",
        position: [680, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "所领导审批",
        position: [960, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "综合中队审批",
        position: [1240, 403],
        extData: {
          events: 0
        }
      },
      {
        name: "在押人员确认",
        position: [1520, 403],
        extData: {
          events: 0
        }
      }]
    },
    {
      type: "Lines",
      data: [{
        start: {
          name: "在押人员申请"
        },
        end: {
          name: "管教确认"
        }
      },
      {
        start: {
          name: "管教确认"
        },
        end: {
          name: "管教中队审批"
        }
      },
      {
        start: {
          name: "管教中队审批"
        },
        end: {
          name: "所领导审批"
        }
      },
      {
        start: {
          name: "管教中队审批"
        },
        end: {
          name: "所领导审批"
        }
      },
      {
        start: {
          name: "所领导审批"
        },
        end: {
          name: "综合中队审批"
        }
      },
      {
        start: {
          name: "综合中队审批"
        },
        end: {
          name: "在押人员确认"
        }
      }]
    }]
  }],
  Ta = Object.freeze({
    __proto__: null,
    maps: Oa,
    api: Pa,
    flows: Ea
  }),
  ja = [].reverse,
  Ia = [1, 2];
  D({
    target: "Array",
    proto: !0,
    forced: String(Ia) === String(Ia.reverse())
  },
  {
    reverse: function() {
      return We(this) && (this.length = this.length),
      ja.call(this)
    }
  });
  function Ma(t) {
    this.options = gi({
      min: 0,
      max: 1,
      current: 0,
      durationTime: 1e3,
      timeline: 0,
      reverse: !1,
      loop: !1,
      aMaxHandle: null,
      aMinHandle: null
    },
    t),
    this.init()
  }
  var La = Qe("Array").reverse,
  Ha = Array.prototype,
  Ra = function(t) {
    var e = t.reverse;
    return t === Ha || t instanceof Array && e === Ha.reverse ? La: e
  };
  function za(i) {
    var o = function() {
      if ("undefined" == typeof Reflect || !Vo) return ! 1;
      if (Vo.sham) return ! 1;
      if ("function" == typeof Proxy) return ! 0;
      try {
        return Date.prototype.toString.call(Vo(Date, [],
        function() {})),
        !0
      } catch(t) {
        return ! 1
      }
    } ();
    return function() {
      var t, e, n = ps(i);
      return e = o ? (t = ps(this).constructor, Vo(n, arguments, t)) : n.apply(this, arguments),
      ns(this, e)
    }
  }
  Ma.prototype = {
    constructor: Ma,
    init: function() {
      if ("number" != typeof this.options.min) throw new Error("min 应该是一个数字型数据!");
      if ("number" != typeof this.options.max) throw new Error("max 应该是一个数字型数据!");
      if ("number" != typeof this.options.current) throw new Error("current 应该是一个数字型数据!");
      if ("number" != typeof this.options.durationTime) throw new Error("durationTime 应该是一个数字型数据!");
      if (this.options.min >= this.options.max) throw new Error("开始状态应小于结束状态!");
      this.options.current = this.options.min,
      0 === this.options.current && Ra(this.options) && (this.options.current = this.options.max),
      this.options.timeline = this.options.durationTime * (this.options.current / (this.options.max - this.options.min))
    },
    update: function(t) {
      var e = (this.options.max - this.options.min) / this.options.durationTime;
      Ra(this.options) ? this.options.current -= e * t: this.options.current += e * t,
      Ra(this.options) ? this.options.current < this.options.min && (this.options.current = this.options.min, this.options.aMinHandle && this.options.aMinHandle(), this.options.loop && (this.options.reverse = !1)) : this.options.current > this.options.max && (this.options.current = this.options.max, this.options.aMaxHandle && this.options.aMaxHandle(), this.options.loop && (this.options.reverse = !0))
    },
    getCurrent: function() {
      return this.options.current
    }
  };
  var Ca = {
    state: 1,
    events: 0
  },
  Ba = function() {
    es(a, ua);
    var i = za(a);
    function a(t, e) {
      var n;
      return No(this, a),
      (n = i.call(this, t, e)).animation = {
        opacity: null,
        scale: null
      },
      n.inter = -1,
      n.updateOptions(e),
      n
    }
    return Yo(a, [{
      key: "stateHandle",
      value: function(t) {
        var e = "normal",
        n = !1;
        switch (t) {
        case 1:
          e = "normal";
          break;
        case 0:
          e = "warning";
          break;
        case - 1 : e = "normal",
          n = !0
        }
        return {
          state: e,
          gray: n
        }
      }
    },
    {
      key: "updateOptions",
      value: function(t) {
        this.options = yi(vi(Ca), t),
        -1 !== this.options.state && 0 < this.options.extData.events && (this.options.state = 0);
        var e, n, i, o = (e = this.options.name, Oa.get(Xi(e)) || null),
        s = this.stateHandle(this.options.state);
        this.options.symbol = o ? {
          image: ha(n = ha(i = "".concat(Pa.resourceRoot)).call(i, s.state, "/")).call(n, o.icon),
          gray: s.gray
        }: "circle",
        this.options.events = this.options.extData.events || 0,
        ls(ps(a.prototype), "updateOptions", this).call(this, this.options),
        0 === this.options.state ? this.animation.opacity = new Ma({
          durationTime: 1e3,
          loop: !0
        }) : (this.animation.opacity = null, this.animation.scale = null)
      }
    },
    {
      key: "event",
      value: function(t) {
        var e = this;
        Ni([this.getPosition()[0] - this.getWidth() / 2, this.getPosition()[1] - this.getHeight() / 2], [this.getPosition()[0] + this.getWidth() / 2, this.getPosition()[1] + this.getHeight() / 2], t.x, t.y) && (this.scene.element.style.cursor = "pointer", clearTimeout(this._cursor_inter), this._cursor_inter = Ai(function() {
          e.scene.element.style.cursor = e.scene.options.mouse.drag.cursor.
        default
        },
        20))
      }
    },
    {
      key: "update",
      value: function(t) {
        this.animation.opacity && this.animation.opacity.update(t),
        this.animation.scale && this.animation.scale.update(t)
      }
    },
    {
      key: "render",
      value: function(t) {
        var e, n, i;
        t.save(),
        0 === this.options.state && (n = t.globalAlpha, this.animation.opacity && (t.globalAlpha = this.animation.opacity.getCurrent()), t.fillStyle = "#ccc", t.shadowBlur = 32, t.shadowColor = "#f00", t.beginPath(), t.arc.apply(t, ha(e = Ho(this.getPosition())).call(e, [this.getWidth() / 2, 0, 2 * Math.PI])), _s(t).call(t), t.globalAlpha = n, this.setWidth(1.1 * this.options.height), this.setHeight(1.1 * this.options.height)),
        ls(ps(a.prototype), "render", this).call(this, t),
        1 === this.options.state || (0 === this.options.state ? (i = [this.getPosition()[0] + this.getWidth() / 2 - 16, this.getPosition()[1] - this.getHeight() / 2 + 16], t.beginPath(), t.fillStyle = "#f00", t.arc.apply(t, ha(i).call(i, [16, 0, 2 * Math.PI])), _s(t).call(t), t.font = "normal normal normal 14px Microsoft YaHei UI Light", t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = "#fff", t.fillText(99 < this.options.events ? "99+": this.options.events, i[0], i[1] + 14 * .1)) : this.options.state),
        t.restore()
      }
    },
    {
      key: "destroy",
      value: function() {}
    }]),
    a
  } (),
  Fa = Ge.filter,
  Wa = yn("filter"),
  Na = Fe("filter");
  D({
    target: "Array",
    proto: !0,
    forced: !Wa || !Na
  },
  {
    filter: function(t, e) {
      return Fa(this, t, 1 < arguments.length ? e: void 0)
    }
  });
  var _a = Qe("Array").filter,
  Ga = Array.prototype,
  Ya = function(t) {
    var e = t.filter;
    return t === Ga || t instanceof Array && e === Ga.filter ? _a: e
  };
  function Za(i) {
    var o = function() {
      if ("undefined" == typeof Reflect || !Vo) return ! 1;
      if (Vo.sham) return ! 1;
      if ("function" == typeof Proxy) return ! 0;
      try {
        return Date.prototype.toString.call(Vo(Date, [],
        function() {})),
        !0
      } catch(t) {
        return ! 1
      }
    } ();
    return function() {
      var t, e, n = ps(i);
      return e = o ? (t = ps(this).constructor, Vo(n, arguments, t)) : n.apply(this, arguments),
      ns(this, e)
    }
  }
  var Ua = {
    zIndex: 1,
    lineStyle: {
      width: 6,
      color: "#0096cb"
    },
    start: {
      name: "",
      position: null,
      symbol: "circle",
      symbolWidth: 18,
      symbolHeight: 18
    },
    end: {
      name: "",
      position: null,
      symbol: {
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAWCAYAAABOm/V6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2QjdBMTFCQTlENjExMUVBQjNDMkIxMDVFOENGNkJDQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2QjdBMTFCQjlENjExMUVBQjNDMkIxMDVFOENGNkJDQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZCN0ExMUI4OUQ2MTExRUFCM0MyQjEwNUU4Q0Y2QkNBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZCN0ExMUI5OUQ2MTExRUFCM0MyQjEwNUU4Q0Y2QkNBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+2qnBxwAAAmxJREFUeNpiFC2ccJpdUcfg++Wji3jsApIZcIBv5/ZTVR0yYGKTUdFlFhRlAWpI+nJ40xJcCqmtDsUR387sj/nz6skvEIfH1i/628lde7H6kMrqUBzB5xW35tvp3T5/Xj3+CRLgMndz+nZq10F0hdRWh+IIsEbvxN1fT+62/f3i4Q+wRjM3u29n953EsIDK6lAcAQL8vkmnv53abfnrwfUPYI3GTmbfLx+/9XH9DBZkDdRWh+IIsEa/lAvfLx4x+HX/Glgjp66lKruawQ2gRh5aqmNCdxW/f+rD75ePaf28feE1iM+hbaHMrmFyHahRgFbqmLDFEdAHz39cOaH149qph2CNmiYyHHo2dz9unC1PC3WM8osv4ky1oPgDBt8toOsVQXxQsH6/ctyc3zf5FjXV4XUEVCMTq7z6KS5DB2MGRkYGUEJjU9AUpKY6JkIFCX9gxr//v36+g/EZ2TjYqa2OoCNAdQG3hYcryNWgfP/9/AFvaqtjwRMNHGyK2qe4jBx1Qfzfj29/+XbhsBMo/1NbHQsOB7ABE9BVYAJSAicgYLyB8jsou9FCHQsWB/AB8/EVYDaSBfF/3rn4+sfVU6ZYDKaaOhRHAPOtNNC1Z4GuFgdruHnuGTBv6wIT0ztaqmNB1sCpb3MFmK3AJRmwnL/z685FfaCGb+gGU1MdvMT8uGmOAaeB3TW4hotHrgE16GIYTGV18GwqGJ5vxWnksIdVSokTrOHcgQtAviG6wk9b5lFVHTJgFoopu84qrcwFzsMnd+3jMnW2wlrnc/FSVR1Kmvjz/tVTJh4B5R83zuwCFiJeuBRSWx0yAAgwAOGBqbDn8XQAAAAAAElFTkSuQmCC"
      },
      symbolWidth: 33,
      symbolHeight: 22
    }
  },
  Ja = function() {
    es(a, ds);
    var i = Za(a);
    function a(t, e) {
      var n;
      return No(this, a),
      (n = i.call(this, t)).options = vi(Ua),
      n.arrowRight = !0,
      n.arrowTop = !0,
      n.startScatter = null,
      n.endScatter = null,
      n.startSymbol = null,
      n.endSymbol = null,
      n.updateOptions(e),
      n
    }
    return Yo(a, [{
      key: "updateOptions",
      value: function(t) {
        var e, n, i, o, s = this;
        ls(ps(a.prototype), "updateOptions", this).call(this, t),
        this.options.start.position ? this.startScatter = Ya(e = this.scene.components).call(e,
        function(t) {
          var e;
          return - 1 !== Os(e = t.type.toLowerCase()).call(e, "scatter") && t.
        case.options.name === s.options.start.name && t.
        case.getPosition()[0] === s.options.start.position[0] && t.
        case.getPosition()[1] === s.options.start.position[1]
        })[0] || null: this.startScatter = Ya(n = this.scene.components).call(n,
        function(t) {
          var e;
          return - 1 !== Os(e = t.type.toLowerCase()).call(e, "scatter") && t.
        case.options.name === s.options.start.name
        })[0] || null,
        this.options.end.position ? this.endScatter = Ya(i = this.scene.components).call(i,
        function(t) {
          var e;
          return - 1 !== Os(e = t.type.toLowerCase()).call(e, "scatter") && t.
        case.options.name === s.options.end.name && t.
        case.getPosition()[0] === s.options.end.position[0] && t.
        case.getPosition()[1] === s.options.end.position[1]
        })[0] || null: this.endScatter = Ya(o = this.scene.components).call(o,
        function(t) {
          var e;
          return - 1 !== Os(e = t.type.toLowerCase()).call(e, "scatter") && t.
        case.options.name === s.options.end.name
        })[0] || null,
        this.startScatter && this.endScatter ? (this.arrowRight = 0 < this.endScatter.
      case.getPosition()[0] - this.startScatter.
      case.getPosition()[0], this.arrowTop = this.endScatter.
      case.getPosition()[1] - this.startScatter.
      case.getPosition()[1] < 0, -1 === this.startScatter.
      case.options.state || -1 === this.endScatter.
      case.options.state ? this.options.lineStyle.color = "#ccc": this.options.lineStyle.color = Ua.lineStyle.color) : this.startScatter ? console.warn("未匹配到名为: ".concat(this.options.end.name, "  的业务点!")) : console.warn("未匹配到名为: ".concat(this.options.start.name, "  的业务点!")),
        this.startSymbol = this.symbolHandle(this.options.start.symbol, this.options.start.symbolWidth, this.options.start.symbolHeight, this.options.lineStyle.color),
        this.endSymbol = this.symbolHandle(this.options.end.symbol, this.options.end.symbolWidth, this.options.end.symbolHeight, this.options.lineStyle.color)
      }
    },
    {
      key: "symbolHandle",
      value: function(t, e, n, i) {
        var o = null;
        return t && fi(t) ? (o = new Image).setAttribute("src", t.image) : "circle" === t && (o = new Zs(this.scene, {
          width: e,
          height: n,
          color: i,
          borderColor: i
        })),
        o
      }
    },
    {
      key: "symbolDrawHandle",
      value: function(t, e, n, i, o, s) {
        var a = null;
        return t && 1 === t.nodeType ? a = -1 === this.startScatter.
      case.options.state || -1 === this.endScatter.
      case.options.state ? _i(t) : t: t && "object" === di(t) && (t.render(), a = this.startSymbol.ctx.canvas),
        a && (e.save(), e.translate(n + o / 2, i + s / 2), e.rotate(this.arrowRight ? 0 : Math.PI), e.drawImage(a, -o / 2, -s / 2, o, s), e.restore()),
        a
      }
    },
    {
      key: "update",
      value: function() {}
    },
    {
      key: "event",
      value: function() {}
    },
    {
      key: "render",
      value: function(t) {
        var e, n, i, o, s, a, r, c, p;
        this.startScatter && this.endScatter && (t.save(), n = (e = this.startScatter.
      case).getPosition(), o = (i = this.endScatter.
      case).getPosition(), s = 100, t.lineWidth = this.options.lineStyle.width, t.strokeStyle = this.options.lineStyle.color, t.beginPath(), Math.abs(n[0] - o[0]) < 100 ? (this.arrowTop ? (t.moveTo(n[0], n[1] - e.getHeight() / 2), t.lineTo(o[0], o[1] + e.getHeight() / 2)) : (t.moveTo(n[0], n[1] + e.getHeight() / 2), t.lineTo(o[0], o[1] - e.getHeight() / 2)), t.stroke()) : (a = n[0] + e.getWidth() / 2 + 12, r = n[1], c = o[0] - i.getWidth() / 2 - 12 - this.options.end.symbolWidth, p = o[1], this.arrowRight ? (Math.abs(n[1] - o[1]) < 16 ? t.moveTo(a, r) : this.arrowTop ? (t.moveTo(a, r), t.lineTo(a + s - 16, r), t.arc(a + s - 16, r - 16, 16, .5 * Math.PI, 2 * Math.PI, !0), t.lineTo(a + s, p + 16), t.arc(a + s + 16, p + 16, 16, Math.PI, 1.5 * Math.PI)) : (t.moveTo(a, r), t.lineTo(a + s - 16, r), t.arc(a + s - 16, r + 16, 16, 1.5 * Math.PI, 2 * Math.PI), t.lineTo(a + s, p - 16), t.arc(a + s + 16, p - 16, 16, Math.PI, .5 * Math.PI, !0)), t.lineTo(c, p), t.stroke()) : (a = n[0] - e.getWidth() / 2 - 12, r = n[1], c = o[0] + i.getWidth() / 2 + 12 + this.options.end.symbolWidth, p = o[1], Math.abs(n[1] - o[1]) < 16 ? (t.moveTo(a, r), t.lineTo(c, p)) : (this.arrowTop ? (t.moveTo(a, r), t.lineTo(a - s + 16, r), t.arc(a - s + 16, r - 16, 16, .5 * Math.PI, Math.PI), t.lineTo(a - s, p + 16), t.arc(a - s - 16, p + 16, 16, 0, 1.5 * Math.PI, !0)) : (t.moveTo(a, r), t.lineTo(a - s + 16, r), t.arc(a - s + 16, r + 16, 16, 1.5 * Math.PI, Math.PI, !0), t.lineTo(a - s, p - 16), t.arc(a - s - 16, p - 16, 16, 0, .5 * Math.PI)), t.lineTo(c, p), t.stroke())), this.symbolDrawHandle(this.startSymbol, t, a - this.options.start.symbolWidth / 2, r - this.options.start.symbolHeight / 2, this.options.start.symbolWidth, this.options.start.symbolHeight), this.symbolDrawHandle(this.endSymbol, t, c + (this.arrowRight ? 0 : -this.options.end.symbolWidth), p - this.options.end.symbolHeight / 2, this.options.end.symbolWidth, this.options.end.symbolHeight)), t.restore())
      }
    },
    {
      key: "destroy",
      value: function() {}
    }]),
    a
  } ();
  return {
    version: "1.0.0",
    helper: Qi,
    config: Ta,
    VEngine: function() {
      function e(t) {
        No(this, e),
        this.options = gi({
          element: null,
          width: 1920,
          height: 1080,
          scale: 1,
          zoom: 1,
          zoomMin: 1,
          zoomMax: 5,
          translate: [0, 0],
          edit: {
            enable: !1,
            grid: !1
          },
          on: {
            init: null,
            mount: null,
            resize: null,
            destroy: null,
            drag: null,
            click: null,
            move: null
          },
          mouse: {
            drag: {
              cursor: {
              default:
                "url(https://webapi.amap.com/theme/v1.3/openhand.cur), default",
                active: "url(https://webapi.amap.com/theme/v1.3/closedhand.cur), default"
              }
            }
          }
        },
        t),
        this.element = null,
        this.ctx = null,
        this.devicePixelRatio = window.devicePixelRatio || 1,
        this.state = {
          mounted: !1
        },
        this.frame = {
          raf: -1,
          time: {
            now: 0,
            diff: 0
          }
        },
        this.inter = {
          resizeTransition: -1,
          resize: -1
        },
        this.components = [],
        this.sceneEvent = new Fs(this.options, this),
        this.init()
      }
      return Yo(e, [{
        key: "init",
        value: function() {
          this.ctx = Fi({
            width: this.options.width * this.options.scale,
            height: this.options.height * this.options.scale,
            dpr: this.devicePixelRatio
          }).getContext("2d"),
          this.options.element && this.mount(this.options.element),
          this.options.on.init && this.options.on.init(this)
        }
      },
      {
        key: "mount",
        value: function(e) {
          if (this.state.mounted) throw new Error("当前场景已经挂载到 ".concat(this.element, " 上了, 若想再次挂载，请先调用场景的destroy方法!"));
          this.element = Zi(e, {
            width: this.options.width * this.options.scale + "px",
            height: this.options.height * this.options.scale + "px"
          });
          try {
            this.element.appendChild(this.ctx.canvas)
          } catch(t) {
            return this.init(),
            this.mount(e),
            !1
          }
          this.sceneEvent.mount(this.element),
          this.state.mounted = !0,
          this.options.on.mount && this.options.on.mount(this),
          this.editingHandle()
        }
      },
      {
        key: "setOptionsCheck",
        value: function() {}
      },
      {
        key: "setOptions",
        value: function(t) {
          t = gi({
            edit: this.options.edit,
            series: null
          },
          t),
          this.setOptionsCheck(t),
          this.options = gi(this.options, t),
          this.editingHandle(),
          this.destroyAllComponent(),
          this.components.push({
            type: "Grid",
          case:
            new ys(this, {
              width: this.options.width,
              height: this.options.height
            })
          }),
          this.components.push({
            type: "Background",
          case:
            new ms(this, {
              width: this.options.width,
              height: this.options.height
            })
          }),
          this.seriesHandle(t.series),
          Pi(this.frame.raf),
          this.render()
        }
      },
      {
        key: "seriesHandle",
        value: function(t) {
          var o = this;
          hi(t) && en(t).call(t,
          function(t) {
            var e, n, i;
            switch (t.type) {
            case "Scatter":
              hi(t.data) && en(e = t.data).call(e,
              function(t) {
                o.components.push({
                  type: "Scatter",
                case:
                  new ua(o, t)
                })
              });
              break;
            case "BusinessScatter":
              hi(t.data) && en(n = t.data).call(n,
              function(t) {
                o.components.push({
                  type: "BusinessScatter",
                case:
                  new Ba(o, t)
                })
              });
              break;
            case "Lines":
              hi(t.data) && en(i = t.data).call(i,
              function(t) {
                o.components.push({
                  type: "Lines",
                case:
                  new Ja(o, t)
                })
              })
            }
          })
        }
      },
      {
        key: "render",
        value: function(t) {
          var e, n, i, o, s = this;
          this.frame.raf = Oi(Wo(e = this.render).call(e, this)),
          t && (this.frame.time.diff = Math.min(t - this.frame.time.now, 20), this.frame.time.now = t, Wi(this.ctx.canvas), this.ctx.save(), (n = this.ctx).translate.apply(n, Ho(this.options.translate)), this.ctx.scale(this.options.scale * this.devicePixelRatio * this.options.zoom, this.options.scale * this.devicePixelRatio * this.options.zoom), this.components = oo(i = this.components).call(i,
          function(t, e) {
            return t.
          case.getZIndex() - e.
          case.getZIndex()
          }), en(o = this.components).call(o,
          function(t) {
            t.
          case && t.
          case.update(s.frame.time.diff),
            t.
          case && t.
          case.render(s.ctx),
            t.
          case && t.
          case.event(s.sceneEvent)
          }), this.ctx.restore())
        }
      },
      {
        key: "editingHandle",
        value: function() {
          this.options.edit.enable ? this.options.edit.grid = !0 : this.options.edit.grid = !1
        }
      },
      {
        key: "resetZoomAndTranslate",
        value: function() {
          this.options.zoom = 1,
          this.options.translate = [0, 0]
        }
      },
      {
        key: "destroyAllComponent",
        value: function() {
          var t;
          en(t = this.components).call(t,
          function(t) {
            t.
          case.destroy()
          }),
          this.components = []
        }
      },
      {
        key: "destroy",
        value: function() {
          this.sceneEvent && this.sceneEvent.destroy(),
          this.destroyAllComponent(),
          this.element && Ui(this.element),
          this.element = null,
          this.ctx = null,
          this.state.mounted = !1,
          Pi(this.frame.raf),
          this.frame.time.now = 0,
          this.frame.time.diff = 0,
          this.resetZoomAndTranslate(),
          this.options.on.destroy && this.options.on.destroy(this)
        }
      }]),
      e
    } ()
  }
});
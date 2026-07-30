import {
  FilterMatchMode
} from "./chunk-LZW7E2AV.js";
import {
  B,
  G,
  H,
  N,
  N2,
  Z,
  ae,
  c,
  de,
  fe,
  l,
  p,
  s,
  v,
  x
} from "./chunk-EYMFUDBV.js";
import {
  DOCUMENT,
  Injectable,
  InjectionToken,
  PLATFORM_ID,
  Subject,
  effect,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-TSUBXBF2.js";
import {
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/@primeuix/styled/dist/index.mjs
var nt = Object.defineProperty;
var ot = Object.defineProperties;
var it = Object.getOwnPropertyDescriptors;
var te = Object.getOwnPropertySymbols;
var Se = Object.prototype.hasOwnProperty;
var Oe = Object.prototype.propertyIsEnumerable;
var ye = (e, t2, s2) => t2 in e ? nt(e, t2, { enumerable: true, configurable: true, writable: true, value: s2 }) : e[t2] = s2;
var y = (e, t2) => {
  for (var s2 in t2 || (t2 = {})) Se.call(t2, s2) && ye(e, s2, t2[s2]);
  if (te) for (var s2 of te(t2)) Oe.call(t2, s2) && ye(e, s2, t2[s2]);
  return e;
};
var C = (e, t2) => ot(e, it(t2));
var V = (e, t2) => {
  var s2 = {};
  for (var r in e) Se.call(e, r) && t2.indexOf(r) < 0 && (s2[r] = e[r]);
  if (e != null && te) for (var r of te(e)) t2.indexOf(r) < 0 && Oe.call(e, r) && (s2[r] = e[r]);
  return s2;
};
var ct = v();
var R = ct;
var P = /{([^}]*)}/g;
var re = /(\d+\s+[+*/-]\s+\d+)/g;
var ne = /var\([^)]+\)/g;
function K2(e) {
  return c(e) ? e.replace(/[A-Z]/g, (t2, s2) => s2 === 0 ? t2 : "." + t2.toLowerCase()).toLowerCase() : e;
}
function Pe(e) {
  return s(e) && Object.prototype.hasOwnProperty.call(e, "$value") && Object.prototype.hasOwnProperty.call(e, "$type") ? e.$value : e;
}
function pt(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function oe(e = "", t2 = "") {
  return pt(`${c(e, false) && c(t2, false) ? `${e}-` : e}${t2}`);
}
function ce(e = "", t2 = "") {
  return `--${oe(e, t2)}`;
}
function gt(e = "") {
  let t2 = (e.match(/{/g) || []).length, s2 = (e.match(/}/g) || []).length;
  return (t2 + s2) % 2 !== 0;
}
function L(e, t2 = "", s2 = "", r = [], o2) {
  if (c(e)) {
    let i2 = e.trim();
    if (gt(i2)) return;
    if (H(i2, P)) {
      let n2 = i2.replaceAll(P, (u2) => {
        let a2 = u2.replace(/{|}/g, "").split(".").filter((l3) => !r.some((c3) => H(l3, c3)));
        return `var(${ce(s2, fe(a2.join("-")))}${l(o2) ? `, ${o2}` : ""})`;
      });
      return H(n2.replace(ne, "0"), re) ? `calc(${n2})` : n2;
    }
    return i2;
  } else if (Z(e)) return e;
}
function $e(e, t2, s2) {
  c(t2, false) && e.push(`${t2}:${s2};`);
}
function j(e, t2) {
  return e ? `${e}{${t2}}` : "";
}
function ue(e, t2) {
  if (e.indexOf("dt(") === -1) return e;
  function s2(n2, u2) {
    let m2 = [], a2 = 0, l3 = "", c3 = null, p3 = 0;
    for (; a2 <= n2.length; ) {
      let g2 = n2[a2];
      if ((g2 === '"' || g2 === "'" || g2 === "`") && n2[a2 - 1] !== "\\" && (c3 = c3 === g2 ? null : g2), !c3 && (g2 === "(" && p3++, g2 === ")" && p3--, (g2 === "," || a2 === n2.length) && p3 === 0)) {
        let f2 = l3.trim();
        f2.startsWith("dt(") ? m2.push(ue(f2, u2)) : m2.push(r(f2)), l3 = "", a2++;
        continue;
      }
      g2 !== void 0 && (l3 += g2), a2++;
    }
    return m2;
  }
  function r(n2) {
    let u2 = n2[0];
    if ((u2 === '"' || u2 === "'" || u2 === "`") && n2[n2.length - 1] === u2) return n2.slice(1, -1);
    let m2 = Number(n2);
    return isNaN(m2) ? n2 : m2;
  }
  let o2 = [], i2 = [];
  for (let n2 = 0; n2 < e.length; n2++) if (e[n2] === "d" && e.slice(n2, n2 + 3) === "dt(") i2.push(n2), n2 += 2;
  else if (e[n2] === ")" && i2.length > 0) {
    let u2 = i2.pop();
    i2.length === 0 && o2.push([u2, n2]);
  }
  if (!o2.length) return e;
  for (let n2 = o2.length - 1; n2 >= 0; n2--) {
    let [u2, m2] = o2[n2], a2 = e.slice(u2 + 3, m2), l3 = s2(a2, t2), c3 = t2(...l3);
    e = e.slice(0, u2) + c3 + e.slice(m2 + 1);
  }
  return e;
}
var St = (e, t2) => {
  let s2 = e.split("."), r = "";
  for (let o2 = 0; o2 < s2.length; o2++) {
    let i2 = K2(s2[o2]);
    t2.lastIndex = 0, !t2.test(i2) && (r = r ? `${r}.${i2}` : i2);
  }
  return r;
};
var he = (e, t2, s2, r, o2) => {
  if (typeof e != "string") return e != null ? e : S.getTokenValue(t2);
  if (P.lastIndex = 0, !P.test(e)) return e;
  let i2 = t2.slice(0, t2.indexOf(".")), n2 = e.replace(P, (u2) => {
    let m2 = u2.slice(1, -1), a2 = m2.indexOf(".");
    if ((a2 === -1 ? m2 : m2.slice(0, a2)) !== i2) return u2;
    let l3 = S.getTokenValue(m2);
    return l3 == null ? u2 : `${l3}`;
  });
  return L(n2, void 0, s2, [r], o2);
};
var Ot = (e, t2, s2, r) => {
  var l3, c3, p3, g2;
  let o2 = St(e, s2), i2 = S.tokens, n2 = i2.__strictCache;
  n2 || (n2 = /* @__PURE__ */ new Map(), Object.defineProperty(i2, "__strictCache", { value: n2, enumerable: false, configurable: true }));
  let u2 = r == null || typeof r != "object", m2 = u2 && r != null ? `${t2}|${o2}|${r}` : `${t2}|${o2}`, a2 = u2 ? n2.get(m2) : void 0;
  if (a2 === void 0 && (!u2 || !n2.has(m2))) {
    let f2 = (l3 = i2[o2]) == null ? void 0 : l3.paths, h3 = f2 == null ? void 0 : f2.find((k) => k.scheme === "none"), d2 = (c3 = f2 == null ? void 0 : f2.find((k) => k.scheme === "light")) != null ? c3 : h3, T = (p3 = f2 == null ? void 0 : f2.find((k) => k.scheme === "dark")) != null ? p3 : h3;
    if (d2 && T && d2 !== T) {
      let k = he(d2.value, o2, t2, s2, r), b2 = he(T.value, o2, t2, s2, r);
      a2 = k === b2 ? k : `light-dark(${k},${b2})`;
    } else a2 = he((g2 = d2 != null ? d2 : T) == null ? void 0 : g2.value, o2, t2, s2, r);
    u2 && n2.set(m2, a2);
  }
  return S.hasScopedTokenPath(o2) ? L(`{${o2}}`, void 0, t2, [s2], a2) : a2;
};
var us = (e) => {
  var i2, n2, u2;
  let t2 = S.getTheme(), s2 = `${(i2 = pe(t2, e, void 0, "variable")) != null ? i2 : ""}`, r = (u2 = (n2 = s2.match(/--[\w-]+/g)) == null ? void 0 : n2[0]) != null ? u2 : "", o2 = pe(t2, e, void 0, "value");
  return { name: r, variable: s2, value: o2 };
};
var N3 = (e, t2, s2) => pe(S.getTheme(), e, t2, s2);
var pe = (e = {}, t2, s2, r) => {
  var m2, a2, l3, c3, p3, g2, f2, h3, d2, T;
  if (!t2) return "";
  let o2 = (m2 = S.defaults) == null ? void 0 : m2.variable, i2 = (p3 = (a2 = e == null ? void 0 : e.options) == null ? void 0 : a2.prefix) != null ? p3 : (c3 = (l3 = S.defaults) == null ? void 0 : l3.options) == null ? void 0 : c3.prefix, n2 = (T = (d2 = (g2 = e == null ? void 0 : e.options) == null ? void 0 : g2.cssVariables) != null ? d2 : (h3 = (f2 = S.defaults) == null ? void 0 : f2.options) == null ? void 0 : h3.cssVariables) != null ? T : true;
  if (r === "value") return S.getTokenValue(t2);
  if (p(r) && !n2) return Ot(t2, i2, o2.excludedKeyRegex, s2);
  let u2 = H(t2, P) ? t2 : `{${t2}}`;
  return L(u2, void 0, i2, [o2.excludedKeyRegex], s2);
};
var xt = (...e) => {
  var t2;
  return `${(t2 = N3(...e)) != null ? t2 : ""}`;
};
function gs(e, ...t2) {
  if (e instanceof Array) {
    let s2 = e.reduce((r, o2, i2) => {
      var n2;
      return r + o2 + ((n2 = x(t2[i2], { dt: N3 })) != null ? n2 : "");
    }, "");
    return ue(s2, xt);
  }
  return x(e, { dt: N3 });
}
function ge(e, t2 = {}) {
  let s2 = S.defaults.variable, { prefix: r = s2.prefix, selector: o2 = s2.selector, excludedKeyRegex: i2 = s2.excludedKeyRegex } = t2, n2 = [], u2 = [], m2 = [{ node: e, path: r }];
  for (; m2.length; ) {
    let { node: l3, path: c3 } = m2.pop();
    for (let p3 in l3) {
      let g2 = l3[p3], f2 = Pe(g2), d2 = H(p3, i2) ? oe(c3) : oe(c3, fe(p3));
      if (s(f2)) m2.push({ node: f2, path: d2 });
      else {
        let T = ce(d2), k = L(f2, d2, r, [i2]);
        $e(u2, T, k == null ? k : `${k}`);
        let b2 = d2;
        r && b2.startsWith(r + "-") && (b2 = b2.slice(r.length + 1)), n2.push(b2.replace(/-/g, "."));
      }
    }
  }
  let a2 = u2.join("");
  return { value: u2, tokens: n2, declarations: a2, css: j(o2, a2) };
}
var $ = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e) {
  return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
} }, attr: { pattern: /^\[(.*)\]$/, resolve(e) {
  return { type: "attr", selector: `:root${e},:host${e}`, matched: this.pattern.test(e.trim()) };
} }, media: { pattern: /^@media (.*)$/, resolve(e) {
  return { type: "media", selector: e, matched: this.pattern.test(e.trim()) };
} }, system: { pattern: /^system$/, resolve(e) {
  return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e.trim()) };
} }, custom: { resolve(e) {
  return { type: "custom", selector: e, matched: true };
} } }, resolve(e) {
  let t2 = Object.keys(this.rules).filter((s2) => s2 !== "custom").map((s2) => this.rules[s2]);
  return [e].flat().map((s2) => {
    var r;
    return (r = t2.map((o2) => o2.resolve(s2)).find((o2) => o2.matched)) != null ? r : this.rules.custom.resolve(s2);
  });
} }, _toVariables(e, t2) {
  return ge(e, { prefix: t2 == null ? void 0 : t2.prefix });
}, getCommon({ name: e = "", theme: t2 = {}, params: s2, set: r, defaults: o2 }) {
  var k, b2, O2, v3, E, _, w2;
  let { preset: i2, options: n2 } = t2, u2, m2, a2, l3, c3, p3, g2;
  if (l(i2)) {
    let { primitive: z, semantic: G3, extend: I2 } = i2, f2 = G3 || {}, { colorScheme: ae2 } = f2, U = V(f2, ["colorScheme"]), h3 = I2 || {}, { colorScheme: H2 } = h3, M2 = V(h3, ["colorScheme"]), d2 = ae2 || {}, { dark: B2 } = d2, W2 = V(d2, ["dark"]), T = H2 || {}, { dark: q } = T, F2 = V(T, ["dark"]), Z2 = l(z) ? this._toVariables({ primitive: z }, n2) : {}, J2 = l(U) ? this._toVariables({ semantic: U }, n2) : {}, Q2 = l(W2) ? this._toVariables({ light: W2 }, n2) : {}, Y = l(B2) ? this._toVariables({ dark: B2 }, n2) : {}, ee = l(M2) ? this._toVariables({ semantic: M2 }, n2) : {}, Te = l(F2) ? this._toVariables({ light: F2 }, n2) : {}, be = l(q) ? this._toVariables({ dark: q }, n2) : {}, [Ke, Xe] = [(k = Z2.declarations) != null ? k : "", Z2.tokens], [ze, Ge] = [(b2 = J2.declarations) != null ? b2 : "", J2.tokens || []], [Ie, Ue] = [(O2 = Q2.declarations) != null ? O2 : "", Q2.tokens || []], [He, We] = [(v3 = Y.declarations) != null ? v3 : "", Y.tokens || []], [qe, Fe] = [(E = ee.declarations) != null ? E : "", ee.tokens || []], [Ze, Je] = [(_ = Te.declarations) != null ? _ : "", Te.tokens || []], [Qe, Ye] = [(w2 = be.declarations) != null ? w2 : "", be.tokens || []];
    u2 = this.transformCSS(e, Ke, "light", "variable", n2, r, o2), m2 = Xe;
    let et = this.transformCSS(e, `${ze}${Ie}`, "light", "variable", n2, r, o2), tt = this.transformCSS(e, `${He}`, "dark", "variable", n2, r, o2);
    a2 = `${et}${tt}`, l3 = [.../* @__PURE__ */ new Set([...Ge, ...Ue, ...We])];
    let st = this.transformCSS(e, `${qe}${Ze}color-scheme:light`, "light", "variable", n2, r, o2), rt = this.transformCSS(e, `${Qe}color-scheme:dark`, "dark", "variable", n2, r, o2);
    c3 = `${st}${rt}`, p3 = [.../* @__PURE__ */ new Set([...Fe, ...Je, ...Ye])], g2 = x(i2.css, { dt: N3 });
  }
  return { primitive: { css: u2, tokens: m2 }, semantic: { css: a2, tokens: l3 }, global: { css: c3, tokens: p3 }, style: g2 };
}, getPreset({ name: e = "", preset: t2 = {}, options: s2, params: r, set: o2, defaults: i2, selector: n2, isScopedTokenPaths: u2 }) {
  var c3, d2, T, k;
  let m2, a2, l3;
  if (l(t2) && ((c3 = s2 == null ? void 0 : s2.cssVariables) == null || c3 || u2)) {
    let b2 = e.replace("-directive", ""), p3 = t2, { colorScheme: O2, extend: v3, css: E } = p3, _ = V(p3, ["colorScheme", "extend", "css"]), g2 = v3 || {}, { colorScheme: w2 } = g2, z = V(g2, ["colorScheme"]), f2 = O2 || {}, { dark: G3 } = f2, I2 = V(f2, ["dark"]), h3 = w2 || {}, { dark: ae2 } = h3, U = V(h3, ["dark"]), H2 = l(_) ? this._toVariables({ [b2]: y(y({}, _), z) }, s2) : {}, M2 = l(I2) ? this._toVariables({ [b2]: y(y({}, I2), U) }, s2) : {}, B2 = l(G3) ? this._toVariables({ [b2]: y(y({}, G3), ae2) }, s2) : {}, [W2, q] = [(d2 = H2.declarations) != null ? d2 : "", H2.tokens || []], [F2, Z2] = [(T = M2.declarations) != null ? T : "", M2.tokens || []], [J2, Q2] = [(k = B2.declarations) != null ? k : "", B2.tokens || []], Y = this.transformCSS(b2, `${W2}${F2}`, "light", "variable", s2, o2, i2, n2), ee = this.transformCSS(b2, J2, "dark", "variable", s2, o2, i2, n2);
    m2 = `${Y}${ee}`, a2 = [.../* @__PURE__ */ new Set([...q, ...Z2, ...Q2])], l3 = x(E, { dt: N3 });
  }
  return { css: m2, tokens: a2, style: l3 };
}, getScopedSelector(e, t2) {
  if (!(!(t2 != null && t2.scoped) || !e)) return `[data-styled="${e}"]`;
}, getPresetC({ name: e = "", theme: t2 = {}, params: s2, set: r, defaults: o2 }) {
  var a2;
  let { preset: i2, options: n2 } = t2, u2 = (a2 = i2 == null ? void 0 : i2.components) == null ? void 0 : a2[e], m2 = this.getScopedSelector(e, n2);
  return this.getPreset({ name: e, preset: u2, options: n2, params: s2, set: r, defaults: o2, selector: m2 });
}, getPresetD({ name: e = "", theme: t2 = {}, params: s2, set: r, defaults: o2 }) {
  var l3, c3;
  let i2 = e.replace("-directive", ""), { preset: n2, options: u2 } = t2, m2 = ((l3 = n2 == null ? void 0 : n2.components) == null ? void 0 : l3[i2]) || ((c3 = n2 == null ? void 0 : n2.directives) == null ? void 0 : c3[i2]), a2 = this.getScopedSelector(i2, u2);
  return this.getPreset({ name: i2, preset: m2, options: u2, params: s2, set: r, defaults: o2, selector: a2 });
}, applyDarkColorScheme(e) {
  let t2 = e.darkModeSelector;
  return !(t2 === "none" || t2 === false);
}, getColorSchemeOption(e, t2) {
  var s2;
  return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === true ? t2.options.darkModeSelector : (s2 = e.darkModeSelector) != null ? s2 : t2.options.darkModeSelector) : [];
}, getLayerOrder(e, t2 = {}, s2, r) {
  let { cssLayer: o2 } = t2;
  return o2 ? `@layer ${x(o2.order || o2.name || "primeui", s2)}` : "";
}, getCommonStyleSheet({ name: e = "", theme: t2 = {}, params: s2, props: r = {}, set: o2, defaults: i2 }) {
  let n2 = this.getCommon({ name: e, theme: t2, params: s2, set: o2, defaults: i2 }), u2 = Object.entries(r).reduce((m2, [a2, l3]) => (m2.push(`${a2}="${G(l3)}"`), m2), []).join(" ");
  return Object.entries(n2 || {}).reduce((m2, [a2, l3]) => {
    if (s(l3) && Object.hasOwn(l3, "css")) {
      let c3 = B(l3.css), p3 = `${a2}-variables`;
      m2.push(`<style type="text/css" data-primevue-style-id="${p3}" ${u2}>${c3}</style>`);
    }
    return m2;
  }, []).join("");
}, getStyleSheet({ name: e = "", theme: t2 = {}, params: s2, props: r = {}, set: o2, defaults: i2 }) {
  var a2;
  let n2 = { name: e, theme: t2, params: s2, set: o2, defaults: i2 }, u2 = (a2 = e.includes("-directive") ? this.getPresetD(n2) : this.getPresetC(n2)) == null ? void 0 : a2.css, m2 = Object.entries(r).reduce((l3, [c3, p3]) => (l3.push(`${c3}="${G(p3)}"`), l3), []).join(" ");
  return u2 ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${m2}>${B(u2)}</style>` : "";
}, createTokens(e = {}, t2, s2 = "", r = "", o2 = {}) {
  let i2 = function(a2, l3, c3, p3) {
    return a2.replace(P, (g2) => {
      var T;
      let f2 = g2.slice(1, -1), h3 = this.tokens[f2];
      if (!h3) return console.warn(`Token not found for path: ${f2}`), "__UNRESOLVED__";
      let d2 = h3.computed(l3, c3, p3);
      if (Array.isArray(d2) && d2.length === 2) {
        let k = d2[0].value, b2 = d2[1].value;
        return k === b2 ? k != null ? k : "__UNRESOLVED__" : `light-dark(${k},${b2})`;
      }
      return (T = d2 == null ? void 0 : d2.value) != null ? T : "__UNRESOLVED__";
    });
  }, n2 = function(a2, l3, c3, p3) {
    if (a2.indexOf("light-dark(") === -1) return a2;
    let g2 = [], f2 = a2.length, h3 = 0;
    for (; h3 < f2; ) {
      let d2 = a2.indexOf("light-dark(", h3);
      if (d2 === -1) {
        g2.push(a2.slice(h3));
        break;
      }
      g2.push(a2.slice(h3, d2));
      let T = 1, k = d2 + 11, b2 = -1;
      for (; k < f2 && T > 0; ) {
        let _ = a2.charCodeAt(k);
        _ === 40 ? T++ : _ === 41 ? T-- : _ === 44 && T === 1 && b2 === -1 && (b2 = k), k++;
      }
      if (T !== 0 || b2 === -1) {
        g2.push(a2.slice(d2));
        break;
      }
      let O2 = a2.slice(d2 + 11, b2).trim(), v3 = a2.slice(b2 + 1, k - 1).trim(), E = l3 && l3 !== "none" ? l3 : null;
      if (E === "light") g2.push(n2.call(this, O2, "light", c3, p3));
      else if (E === "dark") g2.push(n2.call(this, v3, "dark", c3, p3));
      else {
        let _ = i2.call(this, n2.call(this, O2, "light", c3, p3), "light", c3, p3), w2 = i2.call(this, n2.call(this, v3, "dark", c3, p3), "dark", c3, p3);
        g2.push(_ === w2 ? _ : `light-dark(${_},${w2})`);
      }
      h3 = k;
    }
    return g2.join("");
  }, u2 = function(a2, l3 = {}, c3 = []) {
    if (c3.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: a2, path: this.path, paths: l3, value: void 0 };
    c3.push(this.path), l3.name = this.path, l3.binding || (l3.binding = {});
    let p3 = this.value;
    if (typeof this.value == "string") {
      let g2 = this.value.trim(), f2 = g2.indexOf("light-dark(") !== -1, h3 = g2.indexOf("{") !== -1;
      if (f2 || h3) {
        let d2 = f2 ? n2.call(this, g2, a2, l3, c3) : g2, T = d2.indexOf("{") !== -1 ? i2.call(this, d2, a2, l3, c3) : d2;
        re.lastIndex = 0, ne.lastIndex = 0, p3 = re.test(T.replace(ne, "0")) ? `calc(${T})` : T;
      }
    }
    return p(l3.binding) && delete l3.binding, c3.pop(), { colorScheme: a2, path: this.path, paths: l3, value: typeof p3 == "string" && p3.indexOf("__UNRESOLVED__") !== -1 ? void 0 : p3 };
  }, m2 = (a2, l3, c3) => {
    Object.entries(a2).forEach(([p3, g2]) => {
      let f2 = H(p3, t2.variable.excludedKeyRegex) ? l3 : l3 ? `${l3}.${K2(p3)}` : K2(p3), h3 = c3 ? `${c3}.${p3}` : p3;
      s(g2) ? m2(g2, f2, h3) : (o2[f2] || (o2[f2] = { paths: [], computed: (d2, T = {}, k = []) => {
        let b2 = o2[f2].paths;
        if (b2.length === 1) {
          let O2 = b2[0], v3 = O2.scheme !== "none" ? O2.scheme : d2;
          return O2.computed(v3, T.binding, k);
        } else if (d2 && d2 !== "none") for (let O2 = 0; O2 < b2.length; O2++) {
          let v3 = b2[O2];
          if (v3.scheme === d2) return v3.computed(d2, T.binding, k);
        }
        return b2.map((O2) => O2.computed(O2.scheme, T[O2.scheme], k));
      } }), o2[f2].paths.push({ path: h3, value: g2, scheme: h3.includes("colorScheme.light") ? "light" : h3.includes("colorScheme.dark") ? "dark" : "none", computed: u2, tokens: o2 }));
    });
  };
  return m2(e, s2, r), o2;
}, getTokenValue(e, t2, s2) {
  var p3, g2, f2;
  let r = e.__cache;
  r || (r = /* @__PURE__ */ new Map(), Object.defineProperty(e, "__cache", { value: r, enumerable: false, configurable: true }));
  let o2 = r.get(t2);
  if (o2 !== void 0 || r.has(t2)) return o2;
  let i2 = s2.variable.excludedKeyRegex, n2 = t2.split("."), u2 = [];
  for (let h3 = 0; h3 < n2.length; h3++) {
    let d2 = n2[h3];
    i2.lastIndex = 0, i2.test(d2.toLowerCase()) || u2.push(d2);
  }
  let m2 = u2.join("."), a2 = t2.indexOf("colorScheme.light") !== -1 ? "light" : t2.indexOf("colorScheme.dark") !== -1 ? "dark" : void 0, l3 = e[m2];
  if (!l3) {
    r.set(t2, void 0);
    return;
  }
  let c3;
  if (a2) {
    let h3 = l3.computed(a2);
    if (Array.isArray(h3)) {
      for (let d2 = 0; d2 < h3.length; d2++) if (((p3 = h3[d2]) == null ? void 0 : p3.colorScheme) === a2) {
        c3 = h3[d2].value;
        break;
      }
    } else c3 = h3 == null ? void 0 : h3.value;
  } else {
    let h3 = l3.computed("light"), d2 = l3.computed("dark"), T, k;
    if (Array.isArray(h3)) {
      for (let b2 = 0; b2 < h3.length; b2++) if (((g2 = h3[b2]) == null ? void 0 : g2.colorScheme) === "light") {
        T = h3[b2].value;
        break;
      }
    } else T = h3 == null ? void 0 : h3.value;
    if (Array.isArray(d2)) {
      for (let b2 = 0; b2 < d2.length; b2++) if (((f2 = d2[b2]) == null ? void 0 : f2.colorScheme) === "dark") {
        k = d2[b2].value;
        break;
      }
    } else k = d2 == null ? void 0 : d2.value;
    T === void 0 && k === void 0 ? c3 = void 0 : T === void 0 ? c3 = k : k === void 0 || T === k ? c3 = T : c3 = `light-dark(${T},${k})`;
  }
  return r.set(t2, c3), c3;
}, getSelectorRule(e, t2, s2, r, o2 = ":root,:host") {
  return s2 === "class" || s2 === "attr" ? j(l(t2) ? `${e}${t2},${e} ${t2}` : e, r) : j(e, j(t2 != null ? t2 : o2, r));
}, transformCSS(e, t2, s2, r, o2 = {}, i2, n2, u2) {
  var m2, a2;
  if (l(t2)) {
    let { cssLayer: l3 } = o2;
    if (r !== "style") {
      let c3 = this.getColorSchemeOption(o2, n2), p3 = (a2 = (m2 = n2 == null ? void 0 : n2.variable) == null ? void 0 : m2.selector) != null ? a2 : ":root,:host";
      t2 = s2 === "dark" ? c3.reduce((g2, { type: f2, selector: h3 }) => (l(h3) && (g2 += h3.includes("[CSS]") ? h3.replace("[CSS]", t2) : this.getSelectorRule(h3, u2, f2, t2, p3)), g2), "") : j(u2 != null ? u2 : p3, t2);
    }
    if (l3) {
      let c3 = { name: "primeui", order: "primeui" };
      s(l3) && (c3.name = x(l3.name, { name: e, type: r })), l(c3.name) && (t2 = j(`@layer ${c3.name}`, t2), i2 == null || i2.layerNames(c3.name));
    }
    return t2;
  }
  return "";
} };
var S = { defaults: { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: false, cssVariables: true, scoped: false } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, _scopedTokenPaths: /* @__PURE__ */ new Set(), update(e = {}) {
  let { theme: t2 } = e;
  t2 && (this._theme = C(y({}, t2), { options: y(y({}, this.defaults.options), t2.options) }), this._tokens = $.createTokens(this.preset, this.defaults), this.resetCaches());
}, get theme() {
  return this._theme;
}, get preset() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.preset) || {};
}, get options() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.options) || {};
}, get tokens() {
  return this._tokens;
}, hasScopedTokenPath(e) {
  return this._scopedTokenPaths.has(e);
}, getScopedTokenPaths() {
  return [...this._scopedTokenPaths];
}, addScopedToken(e) {
  let t2 = false;
  return e && Object.keys(e).length && N(e).forEach((s2) => {
    let r = ae(s2);
    this._scopedTokenPaths.has(r) || (this._scopedTokenPaths.add(r), t2 = true);
  }), t2;
}, clearScopedTokenPaths() {
  this._scopedTokenPaths.clear();
}, getTheme() {
  return this.theme;
}, setTheme(e) {
  this.update({ theme: e }), R.emit("theme:change", e);
}, getPreset() {
  return this.preset;
}, setPreset(e) {
  this._theme = C(y({}, this.theme), { preset: e }), this._tokens = $.createTokens(e, this.defaults), this.resetCaches(), R.emit("preset:change", e), R.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(e) {
  this._theme = C(y({}, this.theme), { options: e }), this.resetStyleCaches(), R.emit("options:change", e), R.emit("theme:change", this.theme);
}, resetStyleCaches() {
  this.clearLoadedStyleNames(), this.clearLayerNames();
}, resetCaches() {
  this.resetStyleCaches(), this.clearScopedTokenPaths();
}, getLayerNames() {
  return [...this._layerNames];
}, setLayerNames(e) {
  this._layerNames.add(e);
}, clearLayerNames() {
  this._layerNames.clear();
}, getLoadedStyleNames() {
  return this._loadedStyleNames;
}, isStyleNameLoaded(e) {
  return this._loadedStyleNames.has(e);
}, setLoadedStyleName(e) {
  this._loadedStyleNames.add(e);
}, deleteLoadedStyleName(e) {
  this._loadedStyleNames.delete(e);
}, clearLoadedStyleNames() {
  this._loadedStyleNames.clear();
}, getTokenValue(e) {
  return $.getTokenValue(this.tokens, e, this.defaults);
}, getCommon(e = "", t2) {
  return $.getCommon({ name: e, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(e = "", t2) {
  let s2 = { name: e, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return $.getPresetC(s2);
}, getDirective(e = "", t2) {
  let s2 = { name: e, theme: this.theme, params: t2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return $.getPresetD(s2);
}, getCustomPreset(e = "", t2, s2, r) {
  let o2 = { name: e, preset: t2, options: this.options, selector: s2, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) }, isScopedTokenPaths: true };
  return $.getPreset(o2);
}, getLayerOrderCSS(e = "") {
  return $.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(e = "", t2, s2 = "style", r) {
  return $.transformCSS(e, t2, r, s2, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(e = "", t2, s2 = {}) {
  return $.getCommonStyleSheet({ name: e, theme: this.theme, params: t2, props: s2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(e, t2, s2 = {}) {
  return $.getStyleSheet({ name: e, theme: this.theme, params: t2, props: s2, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(e) {
  this._loadingStyles.add(e);
}, onStyleUpdated(e) {
  this._loadingStyles.add(e);
}, onStyleLoaded(e, { name: t2 }) {
  this._loadingStyles.size && (this._loadingStyles.delete(t2), R.emit(`theme:${t2}:load`, e), this._loadingStyles.size || R.emit("theme:load"));
} };

// node_modules/@primeuix/styles/dist/base/index.mjs
var style = "\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n\n    .p-component {\n        font-family: dt('typography.font.family');\n        font-feature-settings: inherit;\n        line-height: dt('typography.line.height');\n    }\n\n    .p-collapsible-enter-active {\n        animation: p-animate-collapsible-expand 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    .p-collapsible-leave-active {\n        animation: p-animate-collapsible-collapse 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    @keyframes p-animate-collapsible-expand {\n        from {\n            grid-template-rows: 0fr;\n        }\n        to {\n            grid-template-rows: 1fr;\n        }\n    }\n\n    @keyframes p-animate-collapsible-collapse {\n        from {\n            grid-template-rows: 1fr;\n        }\n        to {\n            grid-template-rows: 0fr;\n        }\n    }\n\n    .p-disabled,\n    .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-disabled,\n    .p-component:disabled {\n        opacity: dt('disabled.opacity');\n    }\n\n    .pi {\n        font-size: dt('icon.size');\n    }\n\n    .p-icon {\n        width: var(--px-icon-size, dt('icon.size'));\n        height: var(--px-icon-size, dt('icon.size'));\n        flex-shrink: 0;\n    }\n\n    .p-icon-spin {\n        -webkit-animation: p-icon-spin 2s infinite linear;\n        animation: p-icon-spin 2s infinite linear;\n    }\n\n    @-webkit-keyframes p-icon-spin {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        100% {\n            -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n        }\n    }\n\n    @keyframes p-icon-spin {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        100% {\n            -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n        }\n    }\n\n    .p-overlay-mask {\n        background: var(--px-mask-background, dt('mask.background'));\n        color: dt('mask.color');\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-overlay-mask-enter-active {\n        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;\n    }\n\n    .p-overlay-mask-leave-active {\n        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;\n    }\n\n    @keyframes p-animate-overlay-mask-enter {\n        from {\n            background: transparent;\n        }\n        to {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n    }\n    @keyframes p-animate-overlay-mask-leave {\n        from {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n        to {\n            background: transparent;\n        }\n    }\n\n    .p-anchored-overlay-enter-active {\n        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    .p-anchored-overlay-leave-active {\n        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    @keyframes p-animate-anchored-overlay-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n\n    @keyframes p-animate-anchored-overlay-leave {\n        to {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-usestyle.mjs
var _id = 0;
var UseStyle = class _UseStyle {
  document = inject(DOCUMENT);
  use(css2, options = {}) {
    let isLoaded = false;
    let cssRef = css2;
    let styleRef = null;
    const {
      immediate = true,
      manual = false,
      name = `style_${++_id}`,
      id = void 0,
      media = void 0,
      nonce = void 0,
      first = false,
      props = {}
    } = options;
    if (!this.document) return;
    styleRef = this.document.querySelector(`style[data-primeng-style-id="${name}"]`) || id && this.document.getElementById(id) || this.document.createElement("style");
    if (styleRef) {
      if (!styleRef.isConnected) {
        cssRef = css2;
        const HEAD = this.document.head;
        de(styleRef, "nonce", nonce);
        first && HEAD.firstChild ? HEAD.insertBefore(styleRef, HEAD.firstChild) : HEAD.appendChild(styleRef);
        N2(styleRef, {
          type: "text/css",
          media,
          nonce,
          "data-primeng-style-id": name
        });
      }
      if (styleRef.textContent !== cssRef) {
        styleRef.textContent = cssRef;
      }
    }
    return {
      id,
      name,
      el: styleRef,
      css: cssRef
    };
  }
  static ɵfac = function UseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UseStyle)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _UseStyle,
    factory: _UseStyle.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-base.mjs
var base = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(name) {
    return this._loadedStyleNames.has(name);
  },
  setLoadedStyleName(name) {
    this._loadedStyleNames.add(name);
  },
  deleteLoadedStyleName(name) {
    this._loadedStyleNames.delete(name);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  }
};
var css = (
  /*css*/
  `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`
);
var BaseStyle = class _BaseStyle {
  name = "base";
  useStyle = inject(UseStyle);
  css = void 0;
  style = void 0;
  classes = {};
  inlineStyles = {};
  load = (style2, options = {}, transform = (cs) => cs) => {
    const computedStyle = transform(gs`${x(style2, {
      dt: N3
    })}`);
    return computedStyle ? this.useStyle.use(B(computedStyle), __spreadValues({
      name: this.name
    }, options)) : {};
  };
  loadCSS = (options = {}) => {
    return this.load(this.css, options);
  };
  loadStyle = (options = {}, style2 = "") => {
    return this.load(this.style, options, (computedStyle = "") => S.transformCSS(options.name || this.name, `${computedStyle}${gs`${style2}`}`));
  };
  loadBaseCSS = (options = {}) => {
    return this.load(css, options);
  };
  loadBaseStyle = (options = {}, style$1 = "") => {
    return this.load(style, options, (computedStyle = "") => S.transformCSS(options.name || this.name, `${computedStyle}${gs`${style$1}`}`));
  };
  getCommonTheme = (params) => {
    return S.getCommon(this.name, params);
  };
  getComponentTheme = (params) => {
    return S.getComponent(this.name, params);
  };
  getPresetTheme = (preset, selector, params) => {
    return S.getCustomPreset(this.name, preset, selector, params);
  };
  getLayerOrderThemeCSS = () => {
    return S.getLayerOrderCSS(this.name);
  };
  getStyleSheet = (extendedCSS = "", props = {}) => {
    if (this.css) {
      const _css = x(this.css, {
        dt: N3
      });
      const _style = B(gs`${_css}${extendedCSS}`);
      const _props = Object.entries(props).reduce((acc, [k, v3]) => acc.push(`${k}="${v3}"`) && acc, []).join(" ");
      return `<style type="text/css" data-primeng-style-id="${this.name}" ${_props}>${_style}</style>`;
    }
    return "";
  };
  getCommonThemeStyleSheet = (params, props = {}) => {
    return S.getCommonStyleSheet(this.name, params, props);
  };
  getThemeStyleSheet = (params, props = {}) => {
    let css2 = [S.getStyleSheet(this.name, params, props)];
    if (this.style) {
      const name = this.name === "base" ? "global-style" : `${this.name}-style`;
      const _css = gs`${x(this.style, {
        dt: N3
      })}`;
      const _style = B(S.transformCSS(name, _css));
      const _props = Object.entries(props).reduce((acc, [k, v3]) => acc.push(`${k}="${v3}"`) && acc, []).join(" ");
      css2.push(`<style type="text/css" data-primeng-style-id="${name}" ${_props}>${_style}</style>`);
    }
    return css2.join("");
  };
  static ɵfac = function BaseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseStyle)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _BaseStyle,
    factory: _BaseStyle.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseStyle, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@noble/ed25519/index.js
var ed25519_CURVE = {
  p: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,
  n: 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,
  h: 8n,
  a: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,
  d: 0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,
  Gx: 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,
  Gy: 0x6666666666666666666666666666666666666666666666666666666666666658n
};
var { p: P2, n: N4, Gx, Gy, a: _a, d: _d } = ed25519_CURVE;
var h = 8n;
var L2 = 32;
var L22 = 64;
var err = (m2 = "") => {
  throw new Error(m2);
};
var isBig = (n2) => typeof n2 === "bigint";
var isStr = (s2) => typeof s2 === "string";
var isBytes = (a2) => a2 instanceof Uint8Array || ArrayBuffer.isView(a2) && a2.constructor.name === "Uint8Array";
var abytes = (a2, l3) => !isBytes(a2) || typeof l3 === "number" && l3 > 0 && a2.length !== l3 ? err("Uint8Array expected") : a2;
var u8n = (len) => new Uint8Array(len);
var u8fr = (buf) => Uint8Array.from(buf);
var padh = (n2, pad) => n2.toString(16).padStart(pad, "0");
var bytesToHex = (b2) => Array.from(abytes(b2)).map((e) => padh(e, 2)).join("");
var C2 = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
var _ch = (ch) => {
  if (ch >= C2._0 && ch <= C2._9)
    return ch - C2._0;
  if (ch >= C2.A && ch <= C2.F)
    return ch - (C2.A - 10);
  if (ch >= C2.a && ch <= C2.f)
    return ch - (C2.a - 10);
  return;
};
var hexToBytes = (hex) => {
  const e = "hex invalid";
  if (!isStr(hex))
    return err(e);
  const hl = hex.length;
  const al = hl / 2;
  if (hl % 2)
    return err(e);
  const array = u8n(al);
  for (let ai = 0, hi = 0; ai < al; ai++, hi += 2) {
    const n1 = _ch(hex.charCodeAt(hi));
    const n2 = _ch(hex.charCodeAt(hi + 1));
    if (n1 === void 0 || n2 === void 0)
      return err(e);
    array[ai] = n1 * 16 + n2;
  }
  return array;
};
var toU8 = (a2, len) => abytes(isStr(a2) ? hexToBytes(a2) : u8fr(abytes(a2)), len);
var cr = () => globalThis?.crypto;
var subtle = () => cr()?.subtle ?? err("crypto.subtle must be defined");
var concatBytes = (...arrs) => {
  const r = u8n(arrs.reduce((sum, a2) => sum + abytes(a2).length, 0));
  let pad = 0;
  arrs.forEach((a2) => {
    r.set(a2, pad);
    pad += a2.length;
  });
  return r;
};
var randomBytes = (len = L2) => {
  const c3 = cr();
  return c3.getRandomValues(u8n(len));
};
var big = BigInt;
var arange = (n2, min, max, msg = "bad number: out of range") => isBig(n2) && min <= n2 && n2 < max ? n2 : err(msg);
var M = (a2, b2 = P2) => {
  const r = a2 % b2;
  return r >= 0n ? r : b2 + r;
};
var modN = (a2) => M(a2, N4);
var invert = (num, md) => {
  if (num === 0n || md <= 0n)
    err("no inverse n=" + num + " mod=" + md);
  let a2 = M(num, md), b2 = md, x3 = 0n, y3 = 1n, u2 = 1n, v3 = 0n;
  while (a2 !== 0n) {
    const q = b2 / a2, r = b2 % a2;
    const m2 = x3 - u2 * q, n2 = y3 - v3 * q;
    b2 = a2, a2 = r, x3 = u2, y3 = v3, u2 = m2, v3 = n2;
  }
  return b2 === 1n ? M(x3, md) : err("no inverse");
};
var callHash = (name) => {
  const fn = etc[name];
  if (typeof fn !== "function")
    err("hashes." + name + " not set");
  return fn;
};
var apoint = (p3) => p3 instanceof Point ? p3 : err("Point expected");
var B256 = 2n ** 256n;
var Point = class _Point {
  static BASE;
  static ZERO;
  ex;
  ey;
  ez;
  et;
  constructor(ex, ey, ez, et) {
    const max = B256;
    this.ex = arange(ex, 0n, max);
    this.ey = arange(ey, 0n, max);
    this.ez = arange(ez, 1n, max);
    this.et = arange(et, 0n, max);
    Object.freeze(this);
  }
  static fromAffine(p3) {
    return new _Point(p3.x, p3.y, 1n, M(p3.x * p3.y));
  }
  /** RFC8032 5.1.3: Uint8Array to Point. */
  static fromBytes(hex, zip215 = false) {
    const d2 = _d;
    const normed = u8fr(abytes(hex, L2));
    const lastByte = hex[31];
    normed[31] = lastByte & ~128;
    const y3 = bytesToNumLE(normed);
    const max = zip215 ? B256 : P2;
    arange(y3, 0n, max);
    const y22 = M(y3 * y3);
    const u2 = M(y22 - 1n);
    const v3 = M(d2 * y22 + 1n);
    let { isValid, value: x3 } = uvRatio(u2, v3);
    if (!isValid)
      err("bad point: y not sqrt");
    const isXOdd = (x3 & 1n) === 1n;
    const isLastByteOdd = (lastByte & 128) !== 0;
    if (!zip215 && x3 === 0n && isLastByteOdd)
      err("bad point: x==0, isLastByteOdd");
    if (isLastByteOdd !== isXOdd)
      x3 = M(-x3);
    return new _Point(x3, y3, 1n, M(x3 * y3));
  }
  /** Checks if the point is valid and on-curve. */
  assertValidity() {
    const a2 = _a;
    const d2 = _d;
    const p3 = this;
    if (p3.is0())
      throw new Error("bad point: ZERO");
    const { ex: X, ey: Y, ez: Z2, et: T } = p3;
    const X2 = M(X * X);
    const Y2 = M(Y * Y);
    const Z22 = M(Z2 * Z2);
    const Z4 = M(Z22 * Z22);
    const aX2 = M(X2 * a2);
    const left = M(Z22 * M(aX2 + Y2));
    const right = M(Z4 + M(d2 * M(X2 * Y2)));
    if (left !== right)
      throw new Error("bad point: equation left != right (1)");
    const XY = M(X * Y);
    const ZT = M(Z2 * T);
    if (XY !== ZT)
      throw new Error("bad point: equation left != right (2)");
    return this;
  }
  /** Equality check: compare points P&Q. */
  equals(other) {
    const { ex: X1, ey: Y1, ez: Z1 } = this;
    const { ex: X2, ey: Y2, ez: Z2 } = apoint(other);
    const X1Z2 = M(X1 * Z2);
    const X2Z1 = M(X2 * Z1);
    const Y1Z2 = M(Y1 * Z2);
    const Y2Z1 = M(Y2 * Z1);
    return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
  }
  is0() {
    return this.equals(I);
  }
  /** Flip point over y coordinate. */
  negate() {
    return new _Point(M(-this.ex), this.ey, this.ez, M(-this.et));
  }
  /** Point doubling. Complete formula. Cost: `4M + 4S + 1*a + 6add + 1*2`. */
  double() {
    const { ex: X1, ey: Y1, ez: Z1 } = this;
    const a2 = _a;
    const A2 = M(X1 * X1);
    const B2 = M(Y1 * Y1);
    const C3 = M(2n * M(Z1 * Z1));
    const D = M(a2 * A2);
    const x1y1 = X1 + Y1;
    const E = M(M(x1y1 * x1y1) - A2 - B2);
    const G3 = D + B2;
    const F2 = G3 - C3;
    const H2 = D - B2;
    const X3 = M(E * F2);
    const Y3 = M(G3 * H2);
    const T3 = M(E * H2);
    const Z3 = M(F2 * G3);
    return new _Point(X3, Y3, Z3, T3);
  }
  /** Point addition. Complete formula. Cost: `8M + 1*k + 8add + 1*2`. */
  add(other) {
    const { ex: X1, ey: Y1, ez: Z1, et: T1 } = this;
    const { ex: X2, ey: Y2, ez: Z2, et: T2 } = apoint(other);
    const a2 = _a;
    const d2 = _d;
    const A2 = M(X1 * X2);
    const B2 = M(Y1 * Y2);
    const C3 = M(T1 * d2 * T2);
    const D = M(Z1 * Z2);
    const E = M((X1 + Y1) * (X2 + Y2) - A2 - B2);
    const F2 = M(D - C3);
    const G3 = M(D + C3);
    const H2 = M(B2 - a2 * A2);
    const X3 = M(E * F2);
    const Y3 = M(G3 * H2);
    const T3 = M(E * H2);
    const Z3 = M(F2 * G3);
    return new _Point(X3, Y3, Z3, T3);
  }
  /**
   * Point-by-scalar multiplication. Scalar must be in range 1 <= n < CURVE.n.
   * Uses {@link wNAF} for base point.
   * Uses fake point to mitigate side-channel leakage.
   * @param n scalar by which point is multiplied
   * @param safe safe mode guards against timing attacks; unsafe mode is faster
   */
  multiply(n2, safe = true) {
    if (!safe && (n2 === 0n || this.is0()))
      return I;
    arange(n2, 1n, N4);
    if (n2 === 1n)
      return this;
    if (this.equals(G2))
      return wNAF(n2).p;
    let p3 = I;
    let f2 = G2;
    for (let d2 = this; n2 > 0n; d2 = d2.double(), n2 >>= 1n) {
      if (n2 & 1n)
        p3 = p3.add(d2);
      else if (safe)
        f2 = f2.add(d2);
    }
    return p3;
  }
  /** Convert point to 2d xy affine point. (X, Y, Z) ∋ (x=X/Z, y=Y/Z) */
  toAffine() {
    const { ex: x3, ey: y3, ez: z } = this;
    if (this.equals(I))
      return { x: 0n, y: 1n };
    const iz = invert(z, P2);
    if (M(z * iz) !== 1n)
      err("invalid inverse");
    return { x: M(x3 * iz), y: M(y3 * iz) };
  }
  toBytes() {
    const { x: x3, y: y3 } = this.assertValidity().toAffine();
    const b2 = numTo32bLE(y3);
    b2[31] |= x3 & 1n ? 128 : 0;
    return b2;
  }
  toHex() {
    return bytesToHex(this.toBytes());
  }
  // encode to hex string
  clearCofactor() {
    return this.multiply(big(h), false);
  }
  isSmallOrder() {
    return this.clearCofactor().is0();
  }
  isTorsionFree() {
    let p3 = this.multiply(N4 / 2n, false).double();
    if (N4 % 2n)
      p3 = p3.add(this);
    return p3.is0();
  }
  static fromHex(hex, zip215) {
    return _Point.fromBytes(toU8(hex), zip215);
  }
  get x() {
    return this.toAffine().x;
  }
  get y() {
    return this.toAffine().y;
  }
  toRawBytes() {
    return this.toBytes();
  }
};
var G2 = new Point(Gx, Gy, 1n, M(Gx * Gy));
var I = new Point(0n, 1n, 1n, 0n);
Point.BASE = G2;
Point.ZERO = I;
var numTo32bLE = (num) => hexToBytes(padh(arange(num, 0n, B256), L22)).reverse();
var bytesToNumLE = (b2) => big("0x" + bytesToHex(u8fr(abytes(b2)).reverse()));
var pow2 = (x3, power) => {
  let r = x3;
  while (power-- > 0n) {
    r *= r;
    r %= P2;
  }
  return r;
};
var pow_2_252_3 = (x3) => {
  const x22 = x3 * x3 % P2;
  const b2 = x22 * x3 % P2;
  const b4 = pow2(b2, 2n) * b2 % P2;
  const b5 = pow2(b4, 1n) * x3 % P2;
  const b10 = pow2(b5, 5n) * b5 % P2;
  const b20 = pow2(b10, 10n) * b10 % P2;
  const b40 = pow2(b20, 20n) * b20 % P2;
  const b80 = pow2(b40, 40n) * b40 % P2;
  const b160 = pow2(b80, 80n) * b80 % P2;
  const b240 = pow2(b160, 80n) * b80 % P2;
  const b250 = pow2(b240, 10n) * b10 % P2;
  const pow_p_5_8 = pow2(b250, 2n) * x3 % P2;
  return { pow_p_5_8, b2 };
};
var RM1 = 0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n;
var uvRatio = (u2, v3) => {
  const v32 = M(v3 * v3 * v3);
  const v7 = M(v32 * v32 * v3);
  const pow = pow_2_252_3(u2 * v7).pow_p_5_8;
  let x3 = M(u2 * v32 * pow);
  const vx2 = M(v3 * x3 * x3);
  const root1 = x3;
  const root2 = M(x3 * RM1);
  const useRoot1 = vx2 === u2;
  const useRoot2 = vx2 === M(-u2);
  const noRoot = vx2 === M(-u2 * RM1);
  if (useRoot1)
    x3 = root1;
  if (useRoot2 || noRoot)
    x3 = root2;
  if ((M(x3) & 1n) === 1n)
    x3 = M(-x3);
  return { isValid: useRoot1 || useRoot2, value: x3 };
};
var modL_LE = (hash) => modN(bytesToNumLE(hash));
var sha512s = (...m2) => callHash("sha512Sync")(...m2);
var hashFinishS = (res) => res.finish(sha512s(res.hashable));
var veriOpts = { zip215: true };
var _verify = (sig, msg, pub, opts = veriOpts) => {
  sig = toU8(sig, L22);
  msg = toU8(msg);
  pub = toU8(pub, L2);
  const { zip215 } = opts;
  let A2;
  let R2;
  let s2;
  let SB;
  let hashable = Uint8Array.of();
  try {
    A2 = Point.fromHex(pub, zip215);
    R2 = Point.fromHex(sig.slice(0, L2), zip215);
    s2 = bytesToNumLE(sig.slice(L2, L22));
    SB = G2.multiply(s2, false);
    hashable = concatBytes(R2.toBytes(), A2.toBytes(), msg);
  } catch (error) {
  }
  const finish = (hashed) => {
    if (SB == null)
      return false;
    if (!zip215 && A2.isSmallOrder())
      return false;
    const k = modL_LE(hashed);
    const RkA = R2.add(A2.multiply(k, false));
    return RkA.add(SB.negate()).clearCofactor().is0();
  };
  return { hashable, finish };
};
var verify = (s2, m2, p3, opts = veriOpts) => hashFinishS(_verify(s2, m2, p3, opts));
var etc = {
  sha512Async: async (...messages) => {
    const s2 = subtle();
    const m2 = concatBytes(...messages);
    return u8n(await s2.digest("SHA-512", m2.buffer));
  },
  sha512Sync: void 0,
  bytesToHex,
  hexToBytes,
  concatBytes,
  mod: M,
  invert,
  randomBytes
};
var W = 8;
var scalarBits = 256;
var pwindows = Math.ceil(scalarBits / W) + 1;
var pwindowSize = 2 ** (W - 1);
var precompute = () => {
  const points = [];
  let p3 = G2;
  let b2 = p3;
  for (let w2 = 0; w2 < pwindows; w2++) {
    b2 = p3;
    points.push(b2);
    for (let i2 = 1; i2 < pwindowSize; i2++) {
      b2 = b2.add(p3);
      points.push(b2);
    }
    p3 = b2.double();
  }
  return points;
};
var Gpows = void 0;
var ctneg = (cnd, p3) => {
  const n2 = p3.negate();
  return cnd ? n2 : p3;
};
var wNAF = (n2) => {
  const comp = Gpows || (Gpows = precompute());
  let p3 = I;
  let f2 = G2;
  const pow_2_w = 2 ** W;
  const maxNum = pow_2_w;
  const mask = big(pow_2_w - 1);
  const shiftBy = big(W);
  for (let w2 = 0; w2 < pwindows; w2++) {
    let wbits = Number(n2 & mask);
    n2 >>= shiftBy;
    if (wbits > pwindowSize) {
      wbits -= maxNum;
      n2 += 1n;
    }
    const off = w2 * pwindowSize;
    const offF = off;
    const offP = off + Math.abs(wbits) - 1;
    const isEven = w2 % 2 !== 0;
    const isNeg = wbits < 0;
    if (wbits === 0) {
      f2 = f2.add(ctneg(isEven, comp[offF]));
    } else {
      p3 = p3.add(ctneg(isNeg, comp[offP]));
    }
  }
  return { p: p3, f: f2 };
};

// node_modules/@noble/hashes/utils.js
function isBytes2(a2) {
  return a2 instanceof Uint8Array || ArrayBuffer.isView(a2) && a2.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in a2 && a2.BYTES_PER_ELEMENT === 1;
}
function abytes2(value, length, title = "") {
  const bytes = isBytes2(value);
  const len = value?.length;
  const needsLen = length !== void 0;
  if (!bytes || needsLen && len !== length) {
    const prefix = title && `"${title}" `;
    const ofLen = needsLen ? ` of length ${length}` : "";
    const got = bytes ? `length=${len}` : `type=${typeof value}`;
    const message = prefix + "expected Uint8Array" + ofLen + ", got " + got;
    if (!bytes)
      throw new TypeError(message);
    throw new RangeError(message);
  }
  return value;
}
function aexists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function aoutput(out, instance) {
  abytes2(out, void 0, "digestInto() output");
  const min = instance.outputLen;
  if (out.length < min) {
    throw new RangeError('"digestInto() output" expected to be of length >=' + min);
  }
}
function clean(...arrays) {
  for (let i2 = 0; i2 < arrays.length; i2++) {
    arrays[i2].fill(0);
  }
}
function createView(arr) {
  return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
  return word << 32 - shift | word >>> shift;
}
var isLE = (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
var hasHexBuiltin = (() => (
  // @ts-ignore
  typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function"
))();
var hexes = Array.from({ length: 256 }, (_, i2) => i2.toString(16).padStart(2, "0"));
function createHasher(hashCons, info = {}) {
  const hashC = (msg, opts) => hashCons(opts).update(msg).digest();
  const tmp = hashCons(void 0);
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.canXOF = tmp.canXOF;
  hashC.create = (opts) => hashCons(opts);
  Object.assign(hashC, info);
  return Object.freeze(hashC);
}
var oidNist = (suffix) => ({
  // Current NIST hashAlgs suffixes used here fit in one DER subidentifier octet.
  // Larger suffix values would need base-128 OID encoding and a different length byte.
  oid: Uint8Array.from([6, 9, 96, 134, 72, 1, 101, 3, 4, 2, suffix])
});

// node_modules/@noble/hashes/_md.js
function Chi(a2, b2, c3) {
  return a2 & b2 ^ ~a2 & c3;
}
function Maj(a2, b2, c3) {
  return a2 & b2 ^ a2 & c3 ^ b2 & c3;
}
var HashMD = class {
  blockLen;
  outputLen;
  canXOF = false;
  padOffset;
  isLE;
  // For partial updates less than block size
  buffer;
  view;
  finished = false;
  length = 0;
  pos = 0;
  destroyed = false;
  constructor(blockLen, outputLen, padOffset, isLE2) {
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE2;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    aexists(this);
    abytes2(data);
    const { view, buffer, blockLen } = this;
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    aexists(this);
    aoutput(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE: isLE2 } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    clean(this.buffer.subarray(pos));
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i2 = pos; i2 < blockLen; i2++)
      buffer[i2] = 0;
    view.setBigUint64(blockLen - 8, BigInt(this.length * 8), isLE2);
    this.process(view, 0);
    const oview = createView(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen must be aligned to 32bit");
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i2 = 0; i2 < outLen; i2++)
      oview.setUint32(4 * i2, state[i2], isLE2);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to) {
    to ||= new this.constructor();
    to.set(...this.get());
    const { blockLen, buffer, length, finished, destroyed, pos } = this;
    to.destroyed = destroyed;
    to.finished = finished;
    to.length = length;
    to.pos = pos;
    if (length % blockLen)
      to.buffer.set(buffer);
    return to;
  }
  clone() {
    return this._cloneInto();
  }
};
var SHA256_IV = Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
var SHA224_IV = Uint32Array.from([
  3238371032,
  914150663,
  812702999,
  4144912697,
  4290775857,
  1750603025,
  1694076839,
  3204075428
]);
var SHA384_IV = Uint32Array.from([
  3418070365,
  3238371032,
  1654270250,
  914150663,
  2438529370,
  812702999,
  355462360,
  4144912697,
  1731405415,
  4290775857,
  2394180231,
  1750603025,
  3675008525,
  1694076839,
  1203062813,
  3204075428
]);
var SHA512_IV = Uint32Array.from([
  1779033703,
  4089235720,
  3144134277,
  2227873595,
  1013904242,
  4271175723,
  2773480762,
  1595750129,
  1359893119,
  2917565137,
  2600822924,
  725511199,
  528734635,
  4215389547,
  1541459225,
  327033209
]);

// node_modules/@noble/hashes/_u64.js
var U32_MASK64 = BigInt(2 ** 32 - 1);
var _32n = BigInt(32);
function fromBig(n2, le = false) {
  if (le)
    return { h: Number(n2 & U32_MASK64), l: Number(n2 >> _32n & U32_MASK64) };
  return { h: Number(n2 >> _32n & U32_MASK64) | 0, l: Number(n2 & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  const len = lst.length;
  let Ah = new Uint32Array(len);
  let Al = new Uint32Array(len);
  for (let i2 = 0; i2 < len; i2++) {
    const { h: h3, l: l3 } = fromBig(lst[i2], le);
    [Ah[i2], Al[i2]] = [h3, l3];
  }
  return [Ah, Al];
}
var shrSH = (h3, _l, s2) => h3 >>> s2;
var shrSL = (h3, l3, s2) => h3 << 32 - s2 | l3 >>> s2;
var rotrSH = (h3, l3, s2) => h3 >>> s2 | l3 << 32 - s2;
var rotrSL = (h3, l3, s2) => h3 << 32 - s2 | l3 >>> s2;
var rotrBH = (h3, l3, s2) => h3 << 64 - s2 | l3 >>> s2 - 32;
var rotrBL = (h3, l3, s2) => h3 >>> s2 - 32 | l3 << 64 - s2;
function add(Ah, Al, Bh, Bl) {
  const l3 = (Al >>> 0) + (Bl >>> 0);
  return { h: Ah + Bh + (l3 / 2 ** 32 | 0) | 0, l: l3 | 0 };
}
var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;

// node_modules/@noble/hashes/sha2.js
var SHA256_K = Uint32Array.from([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var SHA256_W = new Uint32Array(64);
var SHA2_32B = class extends HashMD {
  constructor(outputLen) {
    super(64, outputLen, 8, false);
  }
  get() {
    const { A: A2, B: B2, C: C3, D, E, F: F2, G: G3, H: H2 } = this;
    return [A2, B2, C3, D, E, F2, G3, H2];
  }
  // prettier-ignore
  set(A2, B2, C3, D, E, F2, G3, H2) {
    this.A = A2 | 0;
    this.B = B2 | 0;
    this.C = C3 | 0;
    this.D = D | 0;
    this.E = E | 0;
    this.F = F2 | 0;
    this.G = G3 | 0;
    this.H = H2 | 0;
  }
  process(view, offset) {
    for (let i2 = 0; i2 < 16; i2++, offset += 4)
      SHA256_W[i2] = view.getUint32(offset, false);
    for (let i2 = 16; i2 < 64; i2++) {
      const W15 = SHA256_W[i2 - 15];
      const W2 = SHA256_W[i2 - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
      const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
      SHA256_W[i2] = s1 + SHA256_W[i2 - 7] + s0 + SHA256_W[i2 - 16] | 0;
    }
    let { A: A2, B: B2, C: C3, D, E, F: F2, G: G3, H: H2 } = this;
    for (let i2 = 0; i2 < 64; i2++) {
      const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
      const T1 = H2 + sigma1 + Chi(E, F2, G3) + SHA256_K[i2] + SHA256_W[i2] | 0;
      const sigma0 = rotr(A2, 2) ^ rotr(A2, 13) ^ rotr(A2, 22);
      const T2 = sigma0 + Maj(A2, B2, C3) | 0;
      H2 = G3;
      G3 = F2;
      F2 = E;
      E = D + T1 | 0;
      D = C3;
      C3 = B2;
      B2 = A2;
      A2 = T1 + T2 | 0;
    }
    A2 = A2 + this.A | 0;
    B2 = B2 + this.B | 0;
    C3 = C3 + this.C | 0;
    D = D + this.D | 0;
    E = E + this.E | 0;
    F2 = F2 + this.F | 0;
    G3 = G3 + this.G | 0;
    H2 = H2 + this.H | 0;
    this.set(A2, B2, C3, D, E, F2, G3, H2);
  }
  roundClean() {
    clean(SHA256_W);
  }
  destroy() {
    this.destroyed = true;
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    clean(this.buffer);
  }
};
var _SHA256 = class extends SHA2_32B {
  // We cannot use array here since array allows indexing by variable
  // which means optimizer/compiler cannot use registers.
  A = SHA256_IV[0] | 0;
  B = SHA256_IV[1] | 0;
  C = SHA256_IV[2] | 0;
  D = SHA256_IV[3] | 0;
  E = SHA256_IV[4] | 0;
  F = SHA256_IV[5] | 0;
  G = SHA256_IV[6] | 0;
  H = SHA256_IV[7] | 0;
  constructor() {
    super(32);
  }
};
var _SHA224 = class extends SHA2_32B {
  A = SHA224_IV[0] | 0;
  B = SHA224_IV[1] | 0;
  C = SHA224_IV[2] | 0;
  D = SHA224_IV[3] | 0;
  E = SHA224_IV[4] | 0;
  F = SHA224_IV[5] | 0;
  G = SHA224_IV[6] | 0;
  H = SHA224_IV[7] | 0;
  constructor() {
    super(28);
  }
};
var K512 = (() => split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((n2) => BigInt(n2))))();
var SHA512_Kh = (() => K512[0])();
var SHA512_Kl = (() => K512[1])();
var SHA512_W_H = new Uint32Array(80);
var SHA512_W_L = new Uint32Array(80);
var SHA2_64B = class extends HashMD {
  constructor(outputLen) {
    super(128, outputLen, 16, false);
  }
  // prettier-ignore
  get() {
    const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
  }
  // prettier-ignore
  set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
    this.Ah = Ah | 0;
    this.Al = Al | 0;
    this.Bh = Bh | 0;
    this.Bl = Bl | 0;
    this.Ch = Ch | 0;
    this.Cl = Cl | 0;
    this.Dh = Dh | 0;
    this.Dl = Dl | 0;
    this.Eh = Eh | 0;
    this.El = El | 0;
    this.Fh = Fh | 0;
    this.Fl = Fl | 0;
    this.Gh = Gh | 0;
    this.Gl = Gl | 0;
    this.Hh = Hh | 0;
    this.Hl = Hl | 0;
  }
  process(view, offset) {
    for (let i2 = 0; i2 < 16; i2++, offset += 4) {
      SHA512_W_H[i2] = view.getUint32(offset);
      SHA512_W_L[i2] = view.getUint32(offset += 4);
    }
    for (let i2 = 16; i2 < 80; i2++) {
      const W15h = SHA512_W_H[i2 - 15] | 0;
      const W15l = SHA512_W_L[i2 - 15] | 0;
      const s0h = rotrSH(W15h, W15l, 1) ^ rotrSH(W15h, W15l, 8) ^ shrSH(W15h, W15l, 7);
      const s0l = rotrSL(W15h, W15l, 1) ^ rotrSL(W15h, W15l, 8) ^ shrSL(W15h, W15l, 7);
      const W2h = SHA512_W_H[i2 - 2] | 0;
      const W2l = SHA512_W_L[i2 - 2] | 0;
      const s1h = rotrSH(W2h, W2l, 19) ^ rotrBH(W2h, W2l, 61) ^ shrSH(W2h, W2l, 6);
      const s1l = rotrSL(W2h, W2l, 19) ^ rotrBL(W2h, W2l, 61) ^ shrSL(W2h, W2l, 6);
      const SUMl = add4L(s0l, s1l, SHA512_W_L[i2 - 7], SHA512_W_L[i2 - 16]);
      const SUMh = add4H(SUMl, s0h, s1h, SHA512_W_H[i2 - 7], SHA512_W_H[i2 - 16]);
      SHA512_W_H[i2] = SUMh | 0;
      SHA512_W_L[i2] = SUMl | 0;
    }
    let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    for (let i2 = 0; i2 < 80; i2++) {
      const sigma1h = rotrSH(Eh, El, 14) ^ rotrSH(Eh, El, 18) ^ rotrBH(Eh, El, 41);
      const sigma1l = rotrSL(Eh, El, 14) ^ rotrSL(Eh, El, 18) ^ rotrBL(Eh, El, 41);
      const CHIh = Eh & Fh ^ ~Eh & Gh;
      const CHIl = El & Fl ^ ~El & Gl;
      const T1ll = add5L(Hl, sigma1l, CHIl, SHA512_Kl[i2], SHA512_W_L[i2]);
      const T1h = add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i2], SHA512_W_H[i2]);
      const T1l = T1ll | 0;
      const sigma0h = rotrSH(Ah, Al, 28) ^ rotrBH(Ah, Al, 34) ^ rotrBH(Ah, Al, 39);
      const sigma0l = rotrSL(Ah, Al, 28) ^ rotrBL(Ah, Al, 34) ^ rotrBL(Ah, Al, 39);
      const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
      const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
      Hh = Gh | 0;
      Hl = Gl | 0;
      Gh = Fh | 0;
      Gl = Fl | 0;
      Fh = Eh | 0;
      Fl = El | 0;
      ({ h: Eh, l: El } = add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
      Dh = Ch | 0;
      Dl = Cl | 0;
      Ch = Bh | 0;
      Cl = Bl | 0;
      Bh = Ah | 0;
      Bl = Al | 0;
      const All = add3L(T1l, sigma0l, MAJl);
      Ah = add3H(All, T1h, sigma0h, MAJh);
      Al = All | 0;
    }
    ({ h: Ah, l: Al } = add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
    ({ h: Bh, l: Bl } = add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
    ({ h: Ch, l: Cl } = add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
    ({ h: Dh, l: Dl } = add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
    ({ h: Eh, l: El } = add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
    ({ h: Fh, l: Fl } = add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
    ({ h: Gh, l: Gl } = add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
    ({ h: Hh, l: Hl } = add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
    this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
  }
  roundClean() {
    clean(SHA512_W_H, SHA512_W_L);
  }
  destroy() {
    this.destroyed = true;
    clean(this.buffer);
    this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var _SHA512 = class extends SHA2_64B {
  Ah = SHA512_IV[0] | 0;
  Al = SHA512_IV[1] | 0;
  Bh = SHA512_IV[2] | 0;
  Bl = SHA512_IV[3] | 0;
  Ch = SHA512_IV[4] | 0;
  Cl = SHA512_IV[5] | 0;
  Dh = SHA512_IV[6] | 0;
  Dl = SHA512_IV[7] | 0;
  Eh = SHA512_IV[8] | 0;
  El = SHA512_IV[9] | 0;
  Fh = SHA512_IV[10] | 0;
  Fl = SHA512_IV[11] | 0;
  Gh = SHA512_IV[12] | 0;
  Gl = SHA512_IV[13] | 0;
  Hh = SHA512_IV[14] | 0;
  Hl = SHA512_IV[15] | 0;
  constructor() {
    super(64);
  }
};
var _SHA384 = class extends SHA2_64B {
  Ah = SHA384_IV[0] | 0;
  Al = SHA384_IV[1] | 0;
  Bh = SHA384_IV[2] | 0;
  Bl = SHA384_IV[3] | 0;
  Ch = SHA384_IV[4] | 0;
  Cl = SHA384_IV[5] | 0;
  Dh = SHA384_IV[6] | 0;
  Dl = SHA384_IV[7] | 0;
  Eh = SHA384_IV[8] | 0;
  El = SHA384_IV[9] | 0;
  Fh = SHA384_IV[10] | 0;
  Fl = SHA384_IV[11] | 0;
  Gh = SHA384_IV[12] | 0;
  Gl = SHA384_IV[13] | 0;
  Hh = SHA384_IV[14] | 0;
  Hl = SHA384_IV[15] | 0;
  constructor() {
    super(48);
  }
};
var T224_IV = Uint32Array.from([
  2352822216,
  424955298,
  1944164710,
  2312950998,
  502970286,
  855612546,
  1738396948,
  1479516111,
  258812777,
  2077511080,
  2011393907,
  79989058,
  1067287976,
  1780299464,
  286451373,
  2446758561
]);
var T256_IV = Uint32Array.from([
  573645204,
  4230739756,
  2673172387,
  3360449730,
  596883563,
  1867755857,
  2520282905,
  1497426621,
  2519219938,
  2827943907,
  3193839141,
  1401305490,
  721525244,
  746961066,
  246885852,
  2177182882
]);
var _SHA512_224 = class extends SHA2_64B {
  Ah = T224_IV[0] | 0;
  Al = T224_IV[1] | 0;
  Bh = T224_IV[2] | 0;
  Bl = T224_IV[3] | 0;
  Ch = T224_IV[4] | 0;
  Cl = T224_IV[5] | 0;
  Dh = T224_IV[6] | 0;
  Dl = T224_IV[7] | 0;
  Eh = T224_IV[8] | 0;
  El = T224_IV[9] | 0;
  Fh = T224_IV[10] | 0;
  Fl = T224_IV[11] | 0;
  Gh = T224_IV[12] | 0;
  Gl = T224_IV[13] | 0;
  Hh = T224_IV[14] | 0;
  Hl = T224_IV[15] | 0;
  constructor() {
    super(28);
  }
};
var _SHA512_256 = class extends SHA2_64B {
  Ah = T256_IV[0] | 0;
  Al = T256_IV[1] | 0;
  Bh = T256_IV[2] | 0;
  Bl = T256_IV[3] | 0;
  Ch = T256_IV[4] | 0;
  Cl = T256_IV[5] | 0;
  Dh = T256_IV[6] | 0;
  Dl = T256_IV[7] | 0;
  Eh = T256_IV[8] | 0;
  El = T256_IV[9] | 0;
  Fh = T256_IV[10] | 0;
  Fl = T256_IV[11] | 0;
  Gh = T256_IV[12] | 0;
  Gl = T256_IV[13] | 0;
  Hh = T256_IV[14] | 0;
  Hl = T256_IV[15] | 0;
  constructor() {
    super(32);
  }
};
var sha256 = createHasher(
  () => new _SHA256(),
  oidNist(1)
);
var sha224 = createHasher(
  () => new _SHA224(),
  oidNist(4)
);
var sha512 = createHasher(
  () => new _SHA512(),
  oidNist(3)
);
var sha384 = createHasher(
  () => new _SHA384(),
  oidNist(2)
);
var sha512_256 = createHasher(
  () => new _SHA512_256(),
  oidNist(6)
);
var sha512_224 = createHasher(
  () => new _SHA512_224(),
  oidNist(5)
);

// node_modules/@primeui/license-manager/dist/index.mjs
var t = Object.defineProperty;
var i = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty;
var a = Object.prototype.propertyIsEnumerable;
var o = (e, r, i2) => r in e ? t(e, r, { enumerable: true, configurable: true, writable: true, value: i2 }) : e[r] = i2;
var u = (e, r, t2) => new Promise((i2, n2) => {
  var a2 = (e2) => {
    try {
      u2(t2.next(e2));
    } catch (e3) {
      n2(e3);
    }
  }, o2 = (e2) => {
    try {
      u2(t2.throw(e2));
    } catch (e3) {
      n2(e3);
    }
  }, u2 = (e2) => e2.done ? i2(e2.value) : Promise.resolve(e2.value).then(a2, o2);
  u2((t2 = t2.apply(e, r)).next());
});
function c2(e) {
  const r = {};
  for (let e2 = 0; e2 < 64; e2++) r["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[e2]] = e2;
  const t2 = e.replace(/=+$/, ""), i2 = Math.floor(6 * t2.length / 8), n2 = new Uint8Array(i2);
  let a2 = 0, o2 = 0, u2 = 0;
  for (let e2 = 0; e2 < t2.length; e2++) {
    const i3 = r[t2[e2]];
    if (void 0 === i3) throw new Error("Invalid base64url character");
    a2 = a2 << 6 | i3, o2 += 6, o2 >= 8 && (o2 -= 8, n2[u2++] = a2 >> o2 & 255);
  }
  return n2;
}
var l2 = "primeui";
var d = "primeui-pro:";
var p2 = { primeui: "primeui", scheduler: "primeui-pro:scheduler", texteditor: "primeui-pro:text-editor", charts: "primeui-pro:charts", diagram: "primeui-pro:diagram", pdfviewer: "primeui-pro:pdf-viewer", taskboard: "primeui-pro:task-board", datagrid: "primeui-pro:datagrid", ganttchart: "primeui-pro:gantt-chart", filemanager: "primeui-pro:file-manager" };
var f = { primeui: "PrimeUI", scheduler: "Scheduler", texteditor: "TextEditor", charts: "Charts", diagram: "Diagram", pdfviewer: "PDF Viewer", taskboard: "Task Board", datagrid: "DataGrid", ganttchart: "Gantt", filemanager: "File Manager" };
function m(e, r = "PrimeUI") {
  switch (e) {
    case "active":
      return `${r} license is active.`;
    case "grace":
      return `${r} license is in its grace period. Renew soon to keep using this version.`;
    case "expired":
      return `${r} license does not cover this version. Renew at primeui.store, or downgrade to a version released within your updates window.`;
    case "tampered":
      return `${r} license signature is invalid.`;
    case "wrong-product":
      return `License does not cover ${r}.`;
    case "missing":
      return `No license key configured for ${r}.`;
    case "invalid":
      return `${r} license is malformed.`;
    case "unconfigured":
      return `${r} license is not configured.`;
    default:
      return `${r} license status unknown.`;
  }
}
var y2 = 864e5;
function g(e, r, t2 = {}) {
  return ((e2, r2) => {
    for (var t3 in r2 || (r2 = {})) n.call(r2, t3) && o(e2, t3, r2[t3]);
    if (i) for (var t3 of i(r2)) a.call(r2, t3) && o(e2, t3, r2[t3]);
    return e2;
  })({ valid: "active" === e || "grace" === e, status: e, message: m(e, r) }, t2);
}
function v2(t2, i2) {
  return u(this, null, function* () {
    var n2, a2;
    const o2 = i2.productLabel;
    if ("string" != typeof t2 || !t2.includes(".")) return g("invalid", o2);
    const u2 = t2.split(".");
    if (2 !== u2.length) return g("invalid", o2);
    const [s2, p3] = u2;
    let f2, m2, v3;
    try {
      f2 = (function(e) {
        const r = c2(e), t3 = new TextDecoder().decode(r);
        return JSON.parse(t3);
      })(s2);
    } catch (e) {
      return g("invalid", o2);
    }
    if (!f2 || "object" != typeof f2 || "string" != typeof f2.product || "string" != typeof f2.type || "number" != typeof f2.exp || "number" != typeof f2.iat || "string" != typeof f2.id) return g("invalid", o2);
    try {
      m2 = c2(p3), v3 = new TextEncoder().encode(s2);
    } catch (e) {
      return g("invalid", o2);
    }
    const h3 = null != (n2 = i2.publicKeyOverride) ? n2 : "dae75e66b9f59bebf87d4bb29ca6494f37deccfcc2b132b98ee159ee7505373b";
    let b2;
    try {
      b2 = (function(e) {
        if (e.length % 2 != 0) throw new Error("Invalid hex length");
        const r = new Uint8Array(e.length / 2);
        for (let t3 = 0; t3 < r.length; t3++) r[t3] = parseInt(e.substr(2 * t3, 2), 16);
        return r;
      })(h3);
    } catch (e) {
      return g("invalid", o2);
    }
    let w2 = false;
    try {
      etc.sha512Sync || (etc.sha512Sync = (...t3) => sha512(etc.concatBytes(...t3))), w2 = verify(m2, v3, b2);
    } catch (e) {
      return g("tampered", o2, { payload: f2 });
    }
    if (!w2) return g("tampered", o2, { payload: f2 });
    if (!(function(e, r) {
      return e.product === r || !(!r.startsWith(d) || e.product !== l2 || "commercial" !== e.tier);
    })(f2, i2.product)) return g("wrong-product", o2, { payload: f2 });
    const x3 = 1e3 * f2.exp, D = Date.now(), O2 = Math.floor((x3 - D) / y2), P3 = (function(e) {
      if (void 0 === e) return null;
      if ("number" == typeof e) return 1e3 * e;
      const r = Date.parse(e);
      return Number.isNaN(r) ? null : r;
    })(i2.releaseDate);
    if (null !== P3 && P3 > x3) return g("expired", o2, { daysUntilExpiry: O2, payload: f2 });
    if ((function(e) {
      return "community" === e.tier;
    })(f2)) {
      if (D > x3 + (null != (a2 = i2.graceDays) ? a2 : 30) * y2) return g("expired", o2, { daysUntilExpiry: O2, payload: f2 });
      if (D > x3) return g("grace", o2, { daysUntilExpiry: O2, payload: f2 });
    }
    return g("active", o2, { daysUntilExpiry: O2, payload: f2 });
  });
}
function h2(e, r) {
  return { valid: false, status: e, message: m(e, r) };
}
function b(e, r) {
  const t2 = null == r ? void 0 : r.graceDays, i2 = null == r ? void 0 : r.publicKeyOverride;
  return { verify(r2, n2) {
    return u(this, null, function* () {
      var a2;
      const o2 = p2[r2], u2 = null != (a2 = f[r2]) ? a2 : "PrimeUI", c3 = null == n2 ? void 0 : n2.releaseDate;
      if (!o2) return h2("invalid", u2);
      const s2 = e[r2], l3 = e.primeui;
      if (s2) {
        const e2 = yield v2(s2, { product: o2, productLabel: u2, releaseDate: c3, graceDays: t2, publicKeyOverride: i2 });
        if (e2.valid) return e2;
        if ("wrong-product" !== e2.status) return e2;
      }
      return l3 && "primeui" !== r2 && o2.startsWith(d) ? v2(l3, { product: o2, productLabel: u2, releaseDate: c3, graceDays: t2, publicKeyOverride: i2 }) : h2(s2 ? "wrong-product" : "missing", u2);
    });
  }, has(r2) {
    const t3 = p2[r2];
    return !!t3 && (!!e[r2] || "primeui" !== r2 && t3.startsWith(d) && !!e.primeui);
  } };
}
var w = null;
function x2(e, r) {
  if (!e) throw new Error("[@primeui/license-manager] registerLicense: keys argument is required.");
  return w = b(e, r);
}
function O(e, r) {
  var t2;
  if (!w) {
    const r2 = null != (t2 = f[e]) ? t2 : "PrimeUI";
    return Promise.resolve({ valid: false, status: "unconfigured", message: m("unconfigured", r2) });
  }
  return w.verify(e, r);
}

// node_modules/primeng/fesm2022/primeng-license.mjs
function showInvalidLicenseBanner() {
  if (typeof document === "undefined")
    return;
  if (document.getElementById("p-license-host"))
    return;
  const host = document.createElement("div");
  host.id = "p-license-host";
  host.style.cssText = "all:initial;position:fixed;bottom:16px;right:16px;z-index:2147483647;pointer-events:none;";
  const shadow = host.attachShadow({ mode: "closed" });
  shadow.innerHTML = '<div role="alert" style="padding:10px 14px;background:#991b1b;color:#fff;font:600 13px/1.2 system-ui,-apple-system,sans-serif;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,0.2);">Invalid PrimeUI License</div>';
  document.body.appendChild(host);
}

// node_modules/primeng/fesm2022/primeng-config.mjs
var ThemeProvider = class _ThemeProvider {
  // @todo define type for theme
  theme = signal(
    void 0,
    ...ngDevMode ? [{
      debugName: "theme"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  csp = signal(
    {
      nonce: void 0
    },
    ...ngDevMode ? [{
      debugName: "csp"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  isThemeChanged = false;
  document = inject(DOCUMENT);
  baseStyle = inject(BaseStyle);
  constructor() {
    effect(() => {
      R.on("theme:change", (newTheme) => {
        untracked(() => {
          this.isThemeChanged = true;
          this.theme.set(newTheme);
        });
      });
    });
    effect(() => {
      const themeValue = this.theme();
      if (this.document && themeValue) {
        if (!this.isThemeChanged) {
          this.onThemeChange(themeValue);
        }
        this.isThemeChanged = false;
      }
    });
  }
  ngOnDestroy() {
    S.clearLoadedStyleNames();
    R.clear();
  }
  onThemeChange(value) {
    S.setTheme(value);
    if (this.document) {
      this.loadCommonTheme();
    }
  }
  loadCommonTheme() {
    if (this.theme() === "none") return;
    if (!S.isStyleNameLoaded("common")) {
      const {
        primitive,
        semantic,
        global,
        style: style2
      } = this.baseStyle.getCommonTheme?.() || {};
      const styleOptions = {
        nonce: this.csp?.()?.nonce
      };
      this.baseStyle.load(primitive?.css, __spreadValues({
        name: "primitive-variables"
      }, styleOptions));
      this.baseStyle.load(semantic?.css, __spreadValues({
        name: "semantic-variables"
      }, styleOptions));
      this.baseStyle.load(global?.css, __spreadValues({
        name: "global-variables"
      }, styleOptions));
      this.baseStyle.loadBaseStyle(__spreadValues({
        name: "global-style"
      }, styleOptions), style2);
      S.setLoadedStyleName("common");
    }
  }
  setThemeConfig(config) {
    const {
      theme,
      csp
    } = config || {};
    if (theme) this.theme.set(theme);
    if (csp) this.csp.set(csp);
  }
  static ɵfac = function ThemeProvider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeProvider)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ThemeProvider,
    factory: _ThemeProvider.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeProvider, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var PrimeNG = class _PrimeNG extends ThemeProvider {
  ripple = signal(
    false,
    ...ngDevMode ? [{
      debugName: "ripple"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  platformId = inject(PLATFORM_ID);
  inputVariant = signal(
    null,
    ...ngDevMode ? [{
      debugName: "inputVariant"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  _verified = signal(
    null,
    ...ngDevMode ? [{
      debugName: "_verified"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  verified = this._verified.asReadonly();
  _setVerified(value) {
    this._verified.set(value);
  }
  overlayAppendTo = signal(
    "self",
    ...ngDevMode ? [{
      debugName: "overlayAppendTo"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  overlayOptions = {};
  csp = signal(
    {
      nonce: void 0
    },
    ...ngDevMode ? [{
      debugName: "csp"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  unstyled = signal(
    void 0,
    ...ngDevMode ? [{
      debugName: "unstyled"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  pt = signal(
    void 0,
    ...ngDevMode ? [{
      debugName: "pt"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  ptOptions = signal(
    void 0,
    ...ngDevMode ? [{
      debugName: "ptOptions"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  filterMatchModeOptions = {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  };
  translation = {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    is: "Is",
    isNot: "Is not",
    before: "Before",
    after: "After",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    completed: "Completed",
    upload: "Upload",
    cancel: "Cancel",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    dateFormat: "mm/dd/yy",
    firstDayOfWeek: 0,
    today: "Today",
    weekHeader: "Wk",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyMessage: "No results found",
    searchMessage: "Search results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyFilterMessage: "No results found",
    fileChosenMessage: "Files",
    noFileChosenMessage: "No file chosen",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      previousPageLabel: "Previous Page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      expand: "Expand",
      collapse: "Collapse",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List",
      selectColor: "Select a color",
      removeLabel: "Remove",
      browseFiles: "Browse Files",
      maximizeLabel: "Maximize",
      minimizeLabel: "Minimize"
    }
  };
  zIndex = {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  };
  translationSource = new Subject();
  translationObserver = this.translationSource.asObservable();
  getTranslation(key) {
    return this.translation[key];
  }
  setTranslation(value) {
    this.translation = __spreadValues(__spreadValues({}, this.translation), value);
    this.translationSource.next(this.translation);
  }
  setConfig(config) {
    const {
      csp,
      ripple,
      inputVariant,
      theme,
      overlayOptions,
      translation,
      filterMatchModeOptions,
      overlayAppendTo,
      zIndex,
      ptOptions,
      pt: pt2,
      unstyled
    } = config || {};
    if (csp) this.csp.set(csp);
    if (overlayAppendTo) this.overlayAppendTo.set(overlayAppendTo);
    if (ripple) this.ripple.set(ripple);
    if (inputVariant) this.inputVariant.set(inputVariant);
    if (overlayOptions) this.overlayOptions = overlayOptions;
    if (translation) this.setTranslation(translation);
    if (filterMatchModeOptions) this.filterMatchModeOptions = filterMatchModeOptions;
    if (zIndex) this.zIndex = zIndex;
    if (pt2) this.pt.set(pt2);
    if (ptOptions) this.ptOptions.set(ptOptions);
    if (unstyled) this.unstyled.set(unstyled);
    if (theme) this.setThemeConfig({
      theme,
      csp
    });
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵPrimeNG_BaseFactory;
    return function PrimeNG_Factory(__ngFactoryType__) {
      return (ɵPrimeNG_BaseFactory || (ɵPrimeNG_BaseFactory = ɵɵgetInheritedFactory(_PrimeNG)))(__ngFactoryType__ || _PrimeNG);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _PrimeNG,
    factory: _PrimeNG.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNG, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PRIME_NG_CONFIG = new InjectionToken("PRIME_NG_CONFIG");
var RELEASE_DATE = "2026-07-15";
function providePrimeNG(...features) {
  const providers = features?.map((feature) => ({
    provide: PRIME_NG_CONFIG,
    useValue: feature,
    multi: false
  }));
  const initializer = provideAppInitializer(() => {
    const PrimeNGConfig = inject(PrimeNG);
    features?.forEach((feature) => PrimeNGConfig.setConfig(feature));
    const license = features?.map((f2) => f2.license).find(Boolean);
    if (license) x2({
      primeui: license
    });
    O("primeui", {
      releaseDate: RELEASE_DATE
    }).then((result) => {
      PrimeNGConfig._setVerified(result.valid);
      if (!result.valid) {
        console.warn(`[PrimeUI] ${result.message}`);
        showInvalidLicenseBanner();
      }
    });
    return;
  });
  return makeEnvironmentProviders([...providers, initializer]);
}

export {
  R,
  us,
  S,
  base,
  BaseStyle,
  showInvalidLicenseBanner,
  ThemeProvider,
  PrimeNG,
  PRIME_NG_CONFIG,
  providePrimeNG
};
//# sourceMappingURL=chunk-CLUFAI2Y.js.map

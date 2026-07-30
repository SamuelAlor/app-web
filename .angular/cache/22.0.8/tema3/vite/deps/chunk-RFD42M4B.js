import {
  BaseComponent,
  PARENT_INSTANCE
} from "./chunk-4QODECAJ.js";
import {
  Bind,
  BindModule
} from "./chunk-ZXVB2GSU.js";
import {
  BaseStyle
} from "./chunk-CLUFAI2Y.js";
import {
  CoreIcon,
  ICON_TEMPLATE
} from "./chunk-44PBYXHW.js";
import {
  R,
  T,
  W,
  re,
  se,
  te,
  ue
} from "./chunk-EYMFUDBV.js";
import {
  CommonModule
} from "./chunk-TZXUY4MK.js";
import {
  Component,
  Directive,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  afterRenderEffect,
  computed,
  effect,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  untracked,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵgetInheritedFactory,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵrepeater,
  ɵɵrepeaterCreate
} from "./chunk-TSUBXBF2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/@primeicons/core/dist/esm/icons/times.mjs
var e = { name: "times", meta: { tags: ["times", "close", "cancel", "delete", "remove"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M14.4199 4.51962C14.7128 4.22696 15.1876 4.22685 15.4805 4.51962C15.7731 4.81246 15.7731 5.28732 15.4805 5.58016L11.0606 10L15.4805 14.4199C15.773 14.7129 15.7732 15.1877 15.4805 15.4805C15.1877 15.7732 14.7128 15.773 14.4199 15.4805L10 11.0606L5.58014 15.4805C5.2873 15.7731 4.81245 15.7731 4.5196 15.4805C4.22682 15.1876 4.22692 14.7128 4.5196 14.4199L8.93949 10L4.5196 5.58016C4.22676 5.28727 4.22673 4.8125 4.5196 4.51962C4.81248 4.22677 5.28726 4.22678 5.58014 4.51962L10 8.93951L14.4199 4.51962Z", fill: "currentColor", key: "ow8ecl" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-times.mjs
var _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
function Times_For_1_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "path");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function Times_For_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "circle");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function Times_For_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "rect");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function Times_For_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "line");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function Times_For_1_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "polyline");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function Times_For_1_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "polygon");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function Times_For_1_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "ellipse");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function Times_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, Times_For_1_Case_0_Template, 1, 9, ":svg:path")(1, Times_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, Times_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, Times_For_1_Case_3_Template, 1, 7, ":svg:line")(4, Times_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, Times_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, Times_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
  }
  if (rf & 2) {
    let tmp_10_0;
    const node_r1 = ctx.$implicit;
    ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
  }
}
var Times = class _Times extends CoreIcon {
  constructor() {
    super();
    this._icon = e;
  }
  static ɵfac = function Times_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Times)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Times,
    selectors: [["svg", "data-p-icon", "times"]],
    features: [ɵɵInheritDefinitionFeature],
    decls: 2,
    vars: 0,
    template: function Times_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, Times_For_1_Template, 7, 1, null, null, _forTrack0);
      }
      if (rf & 2) {
        ɵɵrepeater(ctx.iconNodes());
      }
    },
    encapsulation: 2,
    changeDetection: 1
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Times, [{
    type: Component,
    args: [{
      selector: 'svg[data-p-icon="times"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeuix/motion/dist/index.mjs
var J = Object.defineProperty;
var N = Object.getOwnPropertySymbols;
var K = Object.prototype.hasOwnProperty;
var Q = Object.prototype.propertyIsEnumerable;
var S = (t, o, e2) => o in t ? J(t, o, { enumerable: true, configurable: true, writable: true, value: e2 }) : t[o] = e2;
var x = (t, o) => {
  for (var e2 in o || (o = {})) K.call(o, e2) && S(t, e2, o[e2]);
  if (N) for (var e2 of N(o)) Q.call(o, e2) && S(t, e2, o[e2]);
  return t;
};
var k = (t, o, e2) => new Promise((i, u) => {
  var a = (s) => {
    try {
      h(e2.next(s));
    } catch (f) {
      u(f);
    }
  }, M = (s) => {
    try {
      h(e2.throw(s));
    } catch (f) {
      u(f);
    }
  }, h = (s) => s.done ? i(s.value) : Promise.resolve(s.value).then(a, M);
  h((e2 = e2.apply(t, o)).next());
});
var p = "animation";
var E = "transition";
var Z = ["data-enter-phase", "data-enter-from", "data-enter-to", "data-enter-active", "data-leave-phase", "data-leave-from", "data-leave-to", "data-leave-active"];
function j(t) {
  return t ? t.disabled || !!(t.safe && te()) : false;
}
function V(t, o) {
  return t ? x(x({}, t), Object.entries(o).reduce((e2, [i, u]) => {
    var a;
    return e2[i] = (a = t[i]) != null ? a : u, e2;
  }, {})) : x({}, o);
}
function _(t) {
  let { name: o, enterClass: e2, leaveClass: i } = t || {};
  return { enter: { from: (e2 == null ? void 0 : e2.from) || `${o}-enter-from`, to: (e2 == null ? void 0 : e2.to) || `${o}-enter-to`, active: (e2 == null ? void 0 : e2.active) || `${o}-enter-active` }, leave: { from: (i == null ? void 0 : i.from) || `${o}-leave-from`, to: (i == null ? void 0 : i.to) || `${o}-leave-to`, active: (i == null ? void 0 : i.active) || `${o}-leave-active` } };
}
function C(t) {
  return { enter: { onBefore: t == null ? void 0 : t.onBeforeEnter, onStart: t == null ? void 0 : t.onEnter, onAfter: t == null ? void 0 : t.onAfterEnter, onCancelled: t == null ? void 0 : t.onEnterCancelled }, leave: { onBefore: t == null ? void 0 : t.onBeforeLeave, onStart: t == null ? void 0 : t.onLeave, onAfter: t == null ? void 0 : t.onAfterLeave, onCancelled: t == null ? void 0 : t.onLeaveCancelled } };
}
function R2(t, o) {
  let e2 = window.getComputedStyle(t), i = (d) => {
    let l = e2[`${d}Duration`].split(", ").map(se), m = e2[`${d}Delay`].split(", ").map(se);
    return m.length < l.length && m.length > 0 && (m = l.map((v, b) => m[b % m.length])), [m, l];
  }, [u, a] = i(E), [M, h] = i(p), s = Math.max(...a.map((d, l) => d + u[l])), f = Math.max(...h.map((d, l) => d + M[l])), r, n = 0, c = 0;
  return o === E ? s > 0 && (r = E, n = s, c = a.length) : o === p ? f > 0 && (r = p, n = f, c = h.length) : (n = Math.max(s, f), r = n > 0 ? s > f ? E : p : void 0, c = r ? r === E ? a.length : h.length : 0), { type: r, timeout: n, count: c };
}
function q(t, o) {
  return typeof t == "number" ? t : t != null && typeof t == "object" && t[o] != null ? t[o] : null;
}
function W2(t, o) {
  return t ? `--${t}-${o}` : `--${o}`;
}
function g(t, o, e2) {
  let { autoHeight: i, autoWidth: u, cssVarPrefix: a } = o, M = typeof e2 == "object";
  i && ue(t, W2(a, "height"), M ? e2.height : e2), u && ue(t, W2(a, "width"), M ? e2.width : e2);
}
function P(t, o) {
  if (!o.autoHeight && !o.autoWidth) return;
  let e2 = t.scrollHeight, i = t.scrollWidth;
  if (!e2 || !i) {
    let u = T(t);
    e2 || (e2 = u.height), i || (i = u.width);
  }
  g(t, o, { height: e2 + "px", width: i + "px" });
}
function z(t, o) {
  t.setAttribute(`data-${o}-phase`, "");
}
function O(t, o, e2) {
  t.removeAttribute("data-enter-from"), t.removeAttribute("data-enter-to"), t.removeAttribute("data-leave-from"), t.removeAttribute("data-leave-to"), t.setAttribute(`data-${o}-${e2}`, ""), t.setAttribute(`data-${o}-active`, "");
}
function T2(t) {
  t.removeAttribute("data-enter-phase"), t.removeAttribute("data-leave-phase");
}
function B(t) {
  Z.forEach((o) => t.removeAttribute(o));
}
var tt = Object.freeze({ name: "p", safe: true, disabled: false, enter: true, leave: true, autoHeight: true, autoWidth: true, cssVarPrefix: "" });
function dt(t, o) {
  if (!t) throw new Error("Element is required.");
  let e2 = {}, i = false, u = {}, a = null, M = {}, h = (r) => {
    for (let n of Object.keys(e2)) delete e2[n];
    if (Object.assign(e2, V(r, tt)), !e2.enter && !e2.leave) throw new Error("Enter or leave must be true.");
    M = C(e2), i = j(e2), u = _(e2), a = null;
  }, s = (r) => k(null, null, function* () {
    a == null || a();
    let n = t, { onBefore: c, onStart: d, onAfter: l, onCancelled: m } = M[r] || {}, v = { element: t };
    if (z(n, r), i) {
      c == null || c(v), d == null || d(v), l == null || l(v), T2(n), g(n, e2, r === "enter" ? "auto" : "0px");
      return;
    }
    let { from: b, active: A, to: H } = u[r] || {};
    return c == null || c(v), r === "enter" ? g(n, e2, "0px") : r === "leave" && P(n, e2), R(n, b), R(n, A), O(n, r, "from"), n.offsetHeight, r === "enter" ? P(n, e2) : r === "leave" && g(n, e2, "0px"), W(n, b), R(n, H), O(n, r, "to"), d == null || d(v), new Promise((D) => {
      let U = q(e2.duration, r), w = () => {
        W(n, [H, A]), a = null, B(n), T2(n);
      }, G = () => {
        w(), l == null || l(v), D(), r === "enter" ? g(n, e2, "auto") : r === "leave" && g(n, e2, "0px");
      }, L = () => {
      };
      a = () => {
        L(), w(), m == null || m(v), D();
      }, L = ot(n, e2.type, U, G);
    });
  });
  h(o), g(t, e2, "0px");
  let f = { enter: () => e2.enter ? s("enter") : Promise.resolve(), leave: () => e2.leave ? s("leave") : Promise.resolve(), cancel: () => {
    a == null || a(), a = null;
  }, update: (r, n) => {
    if (!r) throw new Error("Element is required.");
    t = r, f.cancel(), n && h(n);
  } };
  return e2.appear && f.enter(), f;
}
var et = 0;
function ot(t, o, e2, i) {
  let u = t._motionEndId = ++et, a = () => {
    u === t._motionEndId && i();
  };
  if (e2 != null) {
    let m = setTimeout(a, e2);
    return () => clearTimeout(m);
  }
  let { type: M, timeout: h, count: s } = R2(t, o);
  if (!M) return i(), () => {
  };
  let f = M + "end", r = 0, n = () => {
    t.removeEventListener(f, d, true), clearTimeout(l);
  }, c = () => {
    n(), a();
  }, d = (m) => {
    m.target === t && ++r >= s && c();
  };
  t.addEventListener(f, d, { capture: true });
  let l = setTimeout(() => {
    r < s && c();
  }, h + 1);
  return n;
}

// node_modules/primeng/fesm2022/primeng-motion.mjs
var _c0 = ["*"];
function Motion_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var originalStyles = /* @__PURE__ */ new WeakMap();
function applyHiddenStyles(element, strategy) {
  if (!element) return;
  if (!originalStyles.has(element)) {
    originalStyles.set(element, {
      display: element.style.display,
      visibility: element.style.visibility,
      maxHeight: element.style.maxHeight
    });
  }
  switch (strategy) {
    case "display":
      element.style.display = "none";
      break;
    case "visibility":
      element.style.visibility = "hidden";
      element.style.maxHeight = "0";
      break;
  }
}
function resetStyles(element, strategy) {
  if (!element) return;
  const original = originalStyles.get(element) ?? element.style;
  switch (strategy) {
    case "display":
      element.style.display = original?.display || "";
      break;
    case "visibility":
      element.style.visibility = original?.visibility || "";
      element.style.maxHeight = original?.maxHeight || "";
      break;
  }
  originalStyles.delete(element);
}
var style = (
  /*css*/
  `
    .p-motion {
        display: block;
    }
`
);
var classes = {
  root: "p-motion"
};
var MotionStyle = class _MotionStyle extends BaseStyle {
  name = "motion";
  style = style;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMotionStyle_BaseFactory;
    return function MotionStyle_Factory(__ngFactoryType__) {
      return (ɵMotionStyle_BaseFactory || (ɵMotionStyle_BaseFactory = ɵɵgetInheritedFactory(_MotionStyle)))(__ngFactoryType__ || _MotionStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _MotionStyle,
    factory: _MotionStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionStyle, [{
    type: Injectable
  }], null, null);
})();
var MotionClasses;
(function(MotionClasses2) {
  MotionClasses2["root"] = "p-motion";
})(MotionClasses || (MotionClasses = {}));
var MOTION_INSTANCE = new InjectionToken("MOTION_INSTANCE");
var Motion = class _Motion extends BaseComponent {
  $pcMotion = inject(MOTION_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    const options = this.options();
    const optionsAttrs = options?.root || {};
    this.bindDirectiveInstance.setAttrs(__spreadValues(__spreadValues({}, this.ptms(["host", "root"])), optionsAttrs));
  }
  _componentStyle = inject(MotionStyle);
  /******************** Inputs ********************/
  /**
   * Whether the element is visible or not.
   * @group Props
   */
  visible = input(
    false,
    ...ngDevMode ? [{
      debugName: "visible"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Whether to mount the element on enter.
   * @group Props
   */
  mountOnEnter = input(
    true,
    ...ngDevMode ? [{
      debugName: "mountOnEnter"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Whether to unmount the element on leave.
   * @group Props
   */
  unmountOnLeave = input(
    true,
    ...ngDevMode ? [{
      debugName: "unmountOnLeave"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * The name of the motion. It can be a predefined motion name or a custom one.
   * phases:
   *     [name]-enter
   *     [name]-enter-active
   *     [name]-enter-to
   *     [name]-leave
   *     [name]-leave-active
   *     [name]-leave-to
   * @group Props
   */
  name = input(
    void 0,
    ...ngDevMode ? [{
      debugName: "name"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * The type of the motion, valid values 'transition' and 'animation'.
   * @group Props
   */
  type = input(
    void 0,
    ...ngDevMode ? [{
      debugName: "type"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Whether the motion is safe.
   * @group Props
   */
  safe = input(
    void 0,
    ...ngDevMode ? [{
      debugName: "safe"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Whether the motion is disabled.
   * @group Props
   */
  disabled = input(
    false,
    ...ngDevMode ? [{
      debugName: "disabled"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Whether the motion should appear.
   * @group Props
   */
  appear = input(
    false,
    ...ngDevMode ? [{
      debugName: "appear"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Whether the motion should enter.
   * @group Props
   */
  enter = input(
    true,
    ...ngDevMode ? [{
      debugName: "enter"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Whether the motion should leave.
   * @group Props
   */
  leave = input(
    true,
    ...ngDevMode ? [{
      debugName: "leave"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * The duration of the motion.
   * @group Props
   */
  duration = input(
    void 0,
    ...ngDevMode ? [{
      debugName: "duration"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * The hide strategy of the motion, valid values 'display' and 'visibility'.
   * @group Props
   */
  hideStrategy = input(
    "display",
    ...ngDevMode ? [{
      debugName: "hideStrategy"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * The enter from class of the motion.
   * @group Props
   */
  enterFromClass = input(
    void 0,
    ...ngDevMode ? [{
      debugName: "enterFromClass"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * The enter to class of the motion.
   * @group Props
   */
  enterToClass = input(
    void 0,
    ...ngDevMode ? [{
      debugName: "enterToClass"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * The enter active class of the motion.
   * @group Props
   */
  enterActiveClass = input(
    void 0,
    ...ngDevMode ? [{
      debugName: "enterActiveClass"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * The leave from class of the motion.
   * @group Props
   */
  leaveFromClass = input(
    void 0,
    ...ngDevMode ? [{
      debugName: "leaveFromClass"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * The leave to class of the motion.
   * @group Props
   */
  leaveToClass = input(
    void 0,
    ...ngDevMode ? [{
      debugName: "leaveToClass"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * The leave active class of the motion.
   * @group Props
   */
  leaveActiveClass = input(
    void 0,
    ...ngDevMode ? [{
      debugName: "leaveActiveClass"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /******************** All Inputs ********************/
  /**
   * The motion options.
   * @group Props
   */
  options = input(
    {},
    ...ngDevMode ? [{
      debugName: "options"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /******************** Outputs ********************/
  /**
   * Callback fired before the enter transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onBeforeEnter = output();
  /**
   * Callback fired when the enter transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onEnter = output();
  /**
   * Callback fired after the enter transition/animation ends.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onAfterEnter = output();
  /**
   * Callback fired when the enter transition/animation is cancelled.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onEnterCancelled = output();
  /**
   * Callback fired before the leave transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onBeforeLeave = output();
  /**
   * Callback fired when the leave transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onLeave = output();
  /**
   * Callback fired after the leave transition/animation ends.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onAfterLeave = output();
  /**
   * Callback fired when the leave transition/animation is cancelled.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onLeaveCancelled = output();
  /******************** Computed ********************/
  motionOptions = computed(
    () => {
      const options = this.options();
      return {
        name: options.name ?? this.name(),
        type: options.type ?? this.type(),
        safe: options.safe ?? this.safe(),
        disabled: options.disabled ?? this.disabled(),
        appear: false,
        enter: options.enter ?? this.enter(),
        leave: options.leave ?? this.leave(),
        duration: options.duration ?? this.duration(),
        enterClass: {
          from: options.enterClass?.from ?? (!options.name ? this.enterFromClass() : void 0),
          to: options.enterClass?.to ?? (!options.name ? this.enterToClass() : void 0),
          active: options.enterClass?.active ?? (!options.name ? this.enterActiveClass() : void 0)
        },
        leaveClass: {
          from: options.leaveClass?.from ?? (!options.name ? this.leaveFromClass() : void 0),
          to: options.leaveClass?.to ?? (!options.name ? this.leaveToClass() : void 0),
          active: options.leaveClass?.active ?? (!options.name ? this.leaveActiveClass() : void 0)
        },
        onBeforeEnter: options.onBeforeEnter ?? this.handleBeforeEnter,
        onEnter: options.onEnter ?? this.handleEnter,
        onAfterEnter: options.onAfterEnter ?? this.handleAfterEnter,
        onEnterCancelled: options.onEnterCancelled ?? this.handleEnterCancelled,
        onBeforeLeave: options.onBeforeLeave ?? this.handleBeforeLeave,
        onLeave: options.onLeave ?? this.handleLeave,
        onAfterLeave: options.onAfterLeave ?? this.handleAfterLeave,
        onLeaveCancelled: options.onLeaveCancelled ?? this.handleLeaveCancelled
      };
    },
    ...ngDevMode ? [{
      debugName: "motionOptions"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  motion;
  isInitialMount = true;
  cancelled = false;
  destroyed = false;
  rendered = signal(
    false,
    ...ngDevMode ? [{
      debugName: "rendered"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  handleBeforeEnter = (event) => !this.destroyed && this.onBeforeEnter.emit(event);
  handleEnter = (event) => !this.destroyed && this.onEnter.emit(event);
  handleAfterEnter = (event) => !this.destroyed && this.onAfterEnter.emit(event);
  handleEnterCancelled = (event) => !this.destroyed && this.onEnterCancelled.emit(event);
  handleBeforeLeave = (event) => !this.destroyed && this.onBeforeLeave.emit(event);
  handleLeave = (event) => !this.destroyed && this.onLeave.emit(event);
  handleAfterLeave = (event) => !this.destroyed && this.onAfterLeave.emit(event);
  handleLeaveCancelled = (event) => !this.destroyed && this.onLeaveCancelled.emit(event);
  constructor() {
    super();
    effect(() => {
      const hideStrategy = this.hideStrategy();
      if (this.isInitialMount) {
        applyHiddenStyles(this.$el, hideStrategy);
        this.rendered.set(this.visible() && this.mountOnEnter() || !this.mountOnEnter());
      } else if (this.visible() && !this.rendered()) {
        applyHiddenStyles(this.$el, hideStrategy);
        this.rendered.set(true);
      }
    });
    effect(() => {
      if (!this.motion) {
        this.motion = dt(this.$el, this.motionOptions());
      } else {
      }
    });
    afterRenderEffect(async () => {
      if (!this.$el) return;
      const shouldAppear = this.isInitialMount && this.visible() && this.appear();
      const hideStrategy = this.hideStrategy();
      if (this.visible()) {
        await re();
        resetStyles(this.$el, hideStrategy);
        if (shouldAppear || !this.isInitialMount) {
          this.applyMotionDuration("enter");
          this.motion?.enter();
        }
      } else if (!this.isInitialMount) {
        await re();
        this.applyMotionDuration("leave");
        this.motion?.leave()?.then(async () => {
          if (this.$el && !this.cancelled && !this.visible()) {
            applyHiddenStyles(this.$el, hideStrategy);
            if (this.unmountOnLeave()) {
              await re();
              if (!this.cancelled) {
                this.rendered.set(false);
              }
            }
          }
        });
      }
      this.isInitialMount = false;
    });
  }
  applyMotionDuration(phase) {
    const options = untracked(this.motionOptions);
    const ms = q(options.duration, phase);
    if (ms == null || !this.$el) return;
    const el = this.$el;
    const durationValue = `${ms}ms`;
    if (options.type === "transition") {
      el.style.transitionDuration = durationValue;
    } else {
      el.style.animationDuration = durationValue;
    }
  }
  onDestroy() {
    this.destroyed = true;
    this.cancelled = true;
    this.motion?.cancel();
    this.motion = void 0;
    resetStyles(this.$el, this.hideStrategy());
    this.$el?.remove();
    this.isInitialMount = true;
  }
  static ɵfac = function Motion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Motion)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Motion,
    selectors: [["p-motion"]],
    hostVars: 2,
    hostBindings: function Motion_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("root"));
      }
    },
    inputs: {
      visible: [1, "visible"],
      mountOnEnter: [1, "mountOnEnter"],
      unmountOnLeave: [1, "unmountOnLeave"],
      name: [1, "name"],
      type: [1, "type"],
      safe: [1, "safe"],
      disabled: [1, "disabled"],
      appear: [1, "appear"],
      enter: [1, "enter"],
      leave: [1, "leave"],
      duration: [1, "duration"],
      hideStrategy: [1, "hideStrategy"],
      enterFromClass: [1, "enterFromClass"],
      enterToClass: [1, "enterToClass"],
      enterActiveClass: [1, "enterActiveClass"],
      leaveFromClass: [1, "leaveFromClass"],
      leaveToClass: [1, "leaveToClass"],
      leaveActiveClass: [1, "leaveActiveClass"],
      options: [1, "options"]
    },
    outputs: {
      onBeforeEnter: "onBeforeEnter",
      onEnter: "onEnter",
      onAfterEnter: "onAfterEnter",
      onEnterCancelled: "onEnterCancelled",
      onBeforeLeave: "onBeforeLeave",
      onLeave: "onLeave",
      onAfterLeave: "onAfterLeave",
      onLeaveCancelled: "onLeaveCancelled"
    },
    features: [ɵɵProvidersFeature([MotionStyle, {
      provide: MOTION_INSTANCE,
      useExisting: _Motion
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Motion
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 1,
    template: function Motion_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵconditionalCreate(0, Motion_Conditional_0_Template, 1, 0);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.rendered() ? 0 : -1);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Motion, [{
    type: Component,
    args: [{
      selector: "p-motion",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: `
        @if (rendered()) {
            <ng-content />
        }
    `,
      providers: [MotionStyle, {
        provide: MOTION_INSTANCE,
        useExisting: Motion
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Motion
      }],
      host: {
        "[class]": "cx('root')"
      },
      hostDirectives: [Bind]
    }]
  }], () => [], {
    visible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }],
    mountOnEnter: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "mountOnEnter",
        required: false
      }]
    }],
    unmountOnLeave: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "unmountOnLeave",
        required: false
      }]
    }],
    name: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "name",
        required: false
      }]
    }],
    type: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "type",
        required: false
      }]
    }],
    safe: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "safe",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    appear: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appear",
        required: false
      }]
    }],
    enter: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "enter",
        required: false
      }]
    }],
    leave: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "leave",
        required: false
      }]
    }],
    duration: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "duration",
        required: false
      }]
    }],
    hideStrategy: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "hideStrategy",
        required: false
      }]
    }],
    enterFromClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "enterFromClass",
        required: false
      }]
    }],
    enterToClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "enterToClass",
        required: false
      }]
    }],
    enterActiveClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "enterActiveClass",
        required: false
      }]
    }],
    leaveFromClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "leaveFromClass",
        required: false
      }]
    }],
    leaveToClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "leaveToClass",
        required: false
      }]
    }],
    leaveActiveClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "leaveActiveClass",
        required: false
      }]
    }],
    options: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "options",
        required: false
      }]
    }],
    onBeforeEnter: [{
      type: Output,
      args: ["onBeforeEnter"]
    }],
    onEnter: [{
      type: Output,
      args: ["onEnter"]
    }],
    onAfterEnter: [{
      type: Output,
      args: ["onAfterEnter"]
    }],
    onEnterCancelled: [{
      type: Output,
      args: ["onEnterCancelled"]
    }],
    onBeforeLeave: [{
      type: Output,
      args: ["onBeforeLeave"]
    }],
    onLeave: [{
      type: Output,
      args: ["onLeave"]
    }],
    onAfterLeave: [{
      type: Output,
      args: ["onAfterLeave"]
    }],
    onLeaveCancelled: [{
      type: Output,
      args: ["onLeaveCancelled"]
    }]
  });
})();
var MOTION_DIRECTIVE_INSTANCE = new InjectionToken("MOTION_DIRECTIVE_INSTANCE");
var MotionDirective = class _MotionDirective extends BaseComponent {
  $pcMotionDirective = inject(MOTION_DIRECTIVE_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  /******************** Inputs ********************/
  /**
   * Whether the element is visible or not.
   * @group Props
   */
  visible = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "visible"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotion"
  }));
  /**
   * The name of the motion. It can be a predefined motion name or a custom one.
   * phases:
   *     [name]-enter
   *     [name]-enter-active
   *     [name]-enter-to
   *     [name]-leave
   *     [name]-leave-active
   *     [name]-leave-to
   * @group Props
   */
  name = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "name"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionName"
  }));
  /**
   * The type of the motion, valid values 'transition' and 'animation'.
   * @group Props
   */
  type = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "type"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionType"
  }));
  /**
   * Whether the motion is safe.
   * @group Props
   */
  safe = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "safe"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionSafe"
  }));
  /**
   * Whether the motion is disabled.
   * @group Props
   */
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionDisabled"
  }));
  /**
   * Whether the motion should appear.
   * @group Props
   */
  appear = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "appear"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionAppear"
  }));
  /**
   * Whether the motion should enter.
   * @group Props
   */
  enter = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "enter"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionEnter"
  }));
  /**
   * Whether the motion should leave.
   * @group Props
   */
  leave = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "leave"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionLeave"
  }));
  /**
   * The duration of the motion.
   * @group Props
   */
  duration = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "duration"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionDuration"
  }));
  /**
   * The hide strategy of the motion, valid values 'display' and 'visibility'.
   * @group Props
   */
  hideStrategy = input("display", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "hideStrategy"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionHideStrategy"
  }));
  /**
   * The enter from class of the motion.
   * @group Props
   */
  enterFromClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "enterFromClass"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionEnterFromClass"
  }));
  /**
   * The enter to class of the motion.
   * @group Props
   */
  enterToClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "enterToClass"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionEnterToClass"
  }));
  /**
   * The enter active class of the motion.
   * @group Props
   */
  enterActiveClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "enterActiveClass"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionEnterActiveClass"
  }));
  /**
   * The leave from class of the motion.
   * @group Props
   */
  leaveFromClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "leaveFromClass"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionLeaveFromClass"
  }));
  /**
   * The leave to class of the motion.
   * @group Props
   */
  leaveToClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "leaveToClass"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionLeaveToClass"
  }));
  /**
   * The leave active class of the motion.
   * @group Props
   */
  leaveActiveClass = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "leaveActiveClass"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionLeaveActiveClass"
  }));
  /******************** All Inputs ********************/
  /**
   * The motion options.
   * @group Props
   */
  options = input({}, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "options"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "pMotionOptions"
  }));
  /******************** Outputs ********************/
  /**
   * Callback fired before the enter transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onBeforeEnter = output({
    alias: "pMotionOnBeforeEnter"
  });
  /**
   * Callback fired when the enter transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onEnter = output({
    alias: "pMotionOnEnter"
  });
  /**
   * Callback fired after the enter transition/animation ends.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onAfterEnter = output({
    alias: "pMotionOnAfterEnter"
  });
  /**
   * Callback fired when the enter transition/animation is cancelled.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onEnterCancelled = output({
    alias: "pMotionOnEnterCancelled"
  });
  /**
   * Callback fired before the leave transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onBeforeLeave = output({
    alias: "pMotionOnBeforeLeave"
  });
  /**
   * Callback fired when the leave transition/animation starts.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onLeave = output({
    alias: "pMotionOnLeave"
  });
  /**
   * Callback fired after the leave transition/animation ends.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onAfterLeave = output({
    alias: "pMotionOnAfterLeave"
  });
  /**
   * Callback fired when the leave transition/animation is cancelled.
   * @param {MotionEvent} [event] - The event object containing details about the motion.
   * @param {Element} event.element - The element being transitioned/animated.
   * @group Emits
   */
  onLeaveCancelled = output({
    alias: "pMotionOnLeaveCancelled"
  });
  /******************** Computed ********************/
  motionOptions = computed(
    () => {
      const options = this.options() ?? {};
      return {
        name: options.name ?? this.name(),
        type: options.type ?? this.type(),
        safe: options.safe ?? this.safe(),
        disabled: options.disabled ?? this.disabled(),
        appear: false,
        enter: options.enter ?? this.enter(),
        leave: options.leave ?? this.leave(),
        duration: options.duration ?? this.duration(),
        enterClass: {
          from: options.enterClass?.from ?? (!options.name ? this.enterFromClass() : void 0),
          to: options.enterClass?.to ?? (!options.name ? this.enterToClass() : void 0),
          active: options.enterClass?.active ?? (!options.name ? this.enterActiveClass() : void 0)
        },
        leaveClass: {
          from: options.leaveClass?.from ?? (!options.name ? this.leaveFromClass() : void 0),
          to: options.leaveClass?.to ?? (!options.name ? this.leaveToClass() : void 0),
          active: options.leaveClass?.active ?? (!options.name ? this.leaveActiveClass() : void 0)
        },
        onBeforeEnter: options.onBeforeEnter ?? this.handleBeforeEnter,
        onEnter: options.onEnter ?? this.handleEnter,
        onAfterEnter: options.onAfterEnter ?? this.handleAfterEnter,
        onEnterCancelled: options.onEnterCancelled ?? this.handleEnterCancelled,
        onBeforeLeave: options.onBeforeLeave ?? this.handleBeforeLeave,
        onLeave: options.onLeave ?? this.handleLeave,
        onAfterLeave: options.onAfterLeave ?? this.handleAfterLeave,
        onLeaveCancelled: options.onLeaveCancelled ?? this.handleLeaveCancelled
      };
    },
    ...ngDevMode ? [{
      debugName: "motionOptions"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  motion;
  isInitialMount = true;
  cancelled = false;
  destroyed = false;
  handleBeforeEnter = (event) => !this.destroyed && this.onBeforeEnter.emit(event);
  handleEnter = (event) => !this.destroyed && this.onEnter.emit(event);
  handleAfterEnter = (event) => !this.destroyed && this.onAfterEnter.emit(event);
  handleEnterCancelled = (event) => !this.destroyed && this.onEnterCancelled.emit(event);
  handleBeforeLeave = (event) => !this.destroyed && this.onBeforeLeave.emit(event);
  handleLeave = (event) => !this.destroyed && this.onLeave.emit(event);
  handleAfterLeave = (event) => !this.destroyed && this.onAfterLeave.emit(event);
  handleLeaveCancelled = (event) => !this.destroyed && this.onLeaveCancelled.emit(event);
  constructor() {
    super();
    afterRenderEffect(() => {
      if (!this.$el) return;
      this.motion ??= dt(this.$el, untracked(this.motionOptions));
      const shouldAppear = this.isInitialMount && this.visible() && this.appear();
      const hideStrategy = this.hideStrategy();
      if (this.visible()) {
        resetStyles(this.$el, hideStrategy);
        if (shouldAppear || !this.isInitialMount) {
          this.applyMotionDuration("enter");
          this.motion?.enter();
        }
      } else if (!this.isInitialMount) {
        this.applyMotionDuration("leave");
        this.motion?.leave()?.then(() => {
          if (this.$el && !this.cancelled && !this.visible()) {
            applyHiddenStyles(this.$el, hideStrategy);
          }
        });
      } else {
        applyHiddenStyles(this.$el, hideStrategy);
      }
      this.isInitialMount = false;
    });
  }
  applyMotionDuration(phase) {
    const options = untracked(this.motionOptions);
    const ms = q(options.duration, phase);
    if (ms == null || !this.$el) return;
    const el = this.$el;
    const durationValue = `${ms}ms`;
    if (options.type === "transition") {
      el.style.transitionDuration = durationValue;
    } else {
      el.style.animationDuration = durationValue;
    }
  }
  onDestroy() {
    this.destroyed = true;
    this.cancelled = true;
    this.motion?.cancel();
    this.motion = void 0;
    resetStyles(this.$el, this.hideStrategy());
    this.$el?.remove();
    this.isInitialMount = true;
  }
  static ɵfac = function MotionDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MotionDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MotionDirective,
    selectors: [["", "pMotion", ""]],
    inputs: {
      visible: [1, "pMotion", "visible"],
      name: [1, "pMotionName", "name"],
      type: [1, "pMotionType", "type"],
      safe: [1, "pMotionSafe", "safe"],
      disabled: [1, "pMotionDisabled", "disabled"],
      appear: [1, "pMotionAppear", "appear"],
      enter: [1, "pMotionEnter", "enter"],
      leave: [1, "pMotionLeave", "leave"],
      duration: [1, "pMotionDuration", "duration"],
      hideStrategy: [1, "pMotionHideStrategy", "hideStrategy"],
      enterFromClass: [1, "pMotionEnterFromClass", "enterFromClass"],
      enterToClass: [1, "pMotionEnterToClass", "enterToClass"],
      enterActiveClass: [1, "pMotionEnterActiveClass", "enterActiveClass"],
      leaveFromClass: [1, "pMotionLeaveFromClass", "leaveFromClass"],
      leaveToClass: [1, "pMotionLeaveToClass", "leaveToClass"],
      leaveActiveClass: [1, "pMotionLeaveActiveClass", "leaveActiveClass"],
      options: [1, "pMotionOptions", "options"]
    },
    outputs: {
      onBeforeEnter: "pMotionOnBeforeEnter",
      onEnter: "pMotionOnEnter",
      onAfterEnter: "pMotionOnAfterEnter",
      onEnterCancelled: "pMotionOnEnterCancelled",
      onBeforeLeave: "pMotionOnBeforeLeave",
      onLeave: "pMotionOnLeave",
      onAfterLeave: "pMotionOnAfterLeave",
      onLeaveCancelled: "pMotionOnLeaveCancelled"
    },
    features: [ɵɵProvidersFeature([MotionStyle, {
      provide: MOTION_DIRECTIVE_INSTANCE,
      useExisting: _MotionDirective
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _MotionDirective
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionDirective, [{
    type: Directive,
    args: [{
      selector: "[pMotion]",
      standalone: true,
      providers: [MotionStyle, {
        provide: MOTION_DIRECTIVE_INSTANCE,
        useExisting: MotionDirective
      }, {
        provide: PARENT_INSTANCE,
        useExisting: MotionDirective
      }]
    }]
  }], () => [], {
    visible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotion",
        required: false
      }]
    }],
    name: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionName",
        required: false
      }]
    }],
    type: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionType",
        required: false
      }]
    }],
    safe: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionSafe",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionDisabled",
        required: false
      }]
    }],
    appear: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionAppear",
        required: false
      }]
    }],
    enter: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnter",
        required: false
      }]
    }],
    leave: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeave",
        required: false
      }]
    }],
    duration: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionDuration",
        required: false
      }]
    }],
    hideStrategy: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionHideStrategy",
        required: false
      }]
    }],
    enterFromClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnterFromClass",
        required: false
      }]
    }],
    enterToClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnterToClass",
        required: false
      }]
    }],
    enterActiveClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionEnterActiveClass",
        required: false
      }]
    }],
    leaveFromClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeaveFromClass",
        required: false
      }]
    }],
    leaveToClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeaveToClass",
        required: false
      }]
    }],
    leaveActiveClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionLeaveActiveClass",
        required: false
      }]
    }],
    options: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pMotionOptions",
        required: false
      }]
    }],
    onBeforeEnter: [{
      type: Output,
      args: ["pMotionOnBeforeEnter"]
    }],
    onEnter: [{
      type: Output,
      args: ["pMotionOnEnter"]
    }],
    onAfterEnter: [{
      type: Output,
      args: ["pMotionOnAfterEnter"]
    }],
    onEnterCancelled: [{
      type: Output,
      args: ["pMotionOnEnterCancelled"]
    }],
    onBeforeLeave: [{
      type: Output,
      args: ["pMotionOnBeforeLeave"]
    }],
    onLeave: [{
      type: Output,
      args: ["pMotionOnLeave"]
    }],
    onAfterLeave: [{
      type: Output,
      args: ["pMotionOnAfterLeave"]
    }],
    onLeaveCancelled: [{
      type: Output,
      args: ["pMotionOnLeaveCancelled"]
    }]
  });
})();
var MotionModule = class _MotionModule {
  static ɵfac = function MotionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MotionModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MotionModule,
    imports: [Motion, MotionDirective],
    exports: [Motion, MotionDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Motion]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionModule, [{
    type: NgModule,
    args: [{
      imports: [Motion, MotionDirective],
      exports: [Motion, MotionDirective]
    }]
  }], null, null);
})();

export {
  Times,
  MotionDirective,
  MotionModule
};
//# sourceMappingURL=chunk-RFD42M4B.js.map

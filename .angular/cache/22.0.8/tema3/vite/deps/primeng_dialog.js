import {
  ButtonDirective,
  DomHandler,
  blockBodyScroll,
  unblockBodyScroll
} from "./chunk-3S5J5XOE.js";
import "./chunk-6CWJZXQL.js";
import {
  MotionDirective,
  MotionModule,
  Times
} from "./chunk-RFD42M4B.js";
import "./chunk-REXQYCQU.js";
import {
  BaseComponent,
  PARENT_INSTANCE
} from "./chunk-4QODECAJ.js";
import {
  Bind
} from "./chunk-ZXVB2GSU.js";
import {
  BaseStyle
} from "./chunk-CLUFAI2Y.js";
import {
  CoreIcon,
  ICON_TEMPLATE
} from "./chunk-44PBYXHW.js";
import {
  OverlayService,
  SharedModule,
  TranslationKeys
} from "./chunk-LZW7E2AV.js";
import {
  C2 as C,
  Ht,
  I,
  L,
  Nt,
  Q,
  W,
  Wt,
  de,
  h,
  k,
  s2 as s,
  wt
} from "./chunk-EYMFUDBV.js";
import {
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-TZXUY4MK.js";
import "./chunk-EZXZ43RR.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  contentChild,
  effect,
  inject,
  input,
  model,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-TSUBXBF2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/primeng/fesm2022/primeng-focustrap.mjs
var FocusTrap = class _FocusTrap extends BaseComponent {
  /**
   * When set as true, focus wouldn't be managed.
   * @group Props
   */
  pFocusTrapDisabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "pFocusTrapDisabled"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  firstHiddenFocusableElement;
  lastHiddenFocusableElement;
  constructor() {
    super();
    effect(() => {
      const disabled = this.pFocusTrapDisabled();
      if (isPlatformBrowser(this.platformId)) {
        if (disabled) {
          this.removeHiddenFocusableElements();
        } else if (!this.firstHiddenFocusableElement && !this.lastHiddenFocusableElement) {
          this.createHiddenFocusableElements();
        }
      }
    });
  }
  onInit() {
    if (isPlatformBrowser(this.platformId) && !this.pFocusTrapDisabled()) {
      !this.firstHiddenFocusableElement && !this.lastHiddenFocusableElement && this.createHiddenFocusableElements();
    }
  }
  removeHiddenFocusableElements() {
    if (this.firstHiddenFocusableElement && this.firstHiddenFocusableElement.parentNode) {
      this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement);
    }
    if (this.lastHiddenFocusableElement && this.lastHiddenFocusableElement.parentNode) {
      this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement);
    }
    this.firstHiddenFocusableElement = null;
    this.lastHiddenFocusableElement = null;
  }
  getComputedSelector(selector) {
    return `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${selector ?? ""}`;
  }
  createHiddenFocusableElements() {
    const tabindex = "0";
    const createFocusableElement = (onFocus) => {
      return Q("span", {
        class: "p-hidden-accessible p-hidden-focusable",
        tabindex,
        role: "presentation",
        "aria-hidden": true,
        "data-p-hidden-accessible": true,
        "data-p-hidden-focusable": true,
        onFocus: onFocus?.bind(this)
      });
    };
    this.firstHiddenFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
    this.lastHiddenFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);
    this.firstHiddenFocusableElement.setAttribute("data-pc-section", "firstfocusableelement");
    this.lastHiddenFocusableElement.setAttribute("data-pc-section", "lastfocusableelement");
    this.el.nativeElement.prepend(this.firstHiddenFocusableElement);
    this.el.nativeElement.append(this.lastHiddenFocusableElement);
  }
  onFirstHiddenElementFocus(event) {
    const {
      currentTarget,
      relatedTarget
    } = event;
    const focusableElement = relatedTarget === this.lastHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? Wt(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.lastHiddenFocusableElement;
    Ht(focusableElement);
  }
  onLastHiddenElementFocus(event) {
    const {
      currentTarget,
      relatedTarget
    } = event;
    const focusableElement = relatedTarget === this.firstHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? Nt(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.firstHiddenFocusableElement;
    Ht(focusableElement);
  }
  static ɵfac = function FocusTrap_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusTrap)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _FocusTrap,
    selectors: [["", "pFocusTrap", ""]],
    inputs: {
      pFocusTrapDisabled: [1, "pFocusTrapDisabled"]
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrap, [{
    type: Directive,
    args: [{
      selector: "[pFocusTrap]",
      standalone: true
    }]
  }], () => [], {
    pFocusTrapDisabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pFocusTrapDisabled",
        required: false
      }]
    }]
  });
})();
var FocusTrapModule = class _FocusTrapModule {
  static ɵfac = function FocusTrapModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusTrapModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _FocusTrapModule,
    imports: [FocusTrap],
    exports: [FocusTrap]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapModule, [{
    type: NgModule,
    args: [{
      imports: [FocusTrap],
      exports: [FocusTrap]
    }]
  }], null, null);
})();

// node_modules/@primeicons/core/dist/esm/icons/window-maximize.mjs
var C2 = { name: "window-maximize", meta: { tags: ["window-maximize", "enlarge", "full-screen", "expand", "increase"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M6 12.25C6.9665 12.25 7.75 13.0335 7.75 14V17C7.75 17.9665 6.9665 18.75 6 18.75H3C2.0335 18.75 1.25 17.9665 1.25 17V14C1.25 13.0335 2.0335 12.25 3 12.25H6ZM16 1.25C17.5142 1.25 18.75 2.48579 18.75 4V16C18.75 17.5142 17.5142 18.75 16 18.75H10C9.58579 18.75 9.25 18.4142 9.25 18C9.25 17.5858 9.58579 17.25 10 17.25H16C16.6858 17.25 17.25 16.6858 17.25 16V4C17.25 3.31421 16.6858 2.75 16 2.75H4C3.31421 2.75 2.75 3.31421 2.75 4V10C2.75 10.4142 2.41421 10.75 2 10.75C1.58579 10.75 1.25 10.4142 1.25 10V4C1.25 2.48579 2.48579 1.25 4 1.25H16ZM3 13.75C2.86193 13.75 2.75 13.8619 2.75 14V17C2.75 17.1381 2.86193 17.25 3 17.25H6C6.13807 17.25 6.25 17.1381 6.25 17V14C6.25 13.8619 6.13807 13.75 6 13.75H3ZM14 5.25C14.045 5.25 14.089 5.25413 14.1318 5.26172C14.1374 5.2627 14.1429 5.26354 14.1484 5.26465C14.1618 5.26733 14.1744 5.27298 14.1875 5.27637C14.2207 5.28495 14.2541 5.29344 14.2861 5.30664C14.3153 5.31868 14.342 5.33512 14.3691 5.35059C14.4263 5.3831 14.4816 5.421 14.5303 5.46973C14.5787 5.51812 14.616 5.5732 14.6484 5.62988C14.664 5.65703 14.6803 5.68375 14.6924 5.71289C14.7131 5.76289 14.7279 5.81459 14.7373 5.86719C14.745 5.91035 14.75 5.95462 14.75 6V10C14.75 10.4142 14.4142 10.75 14 10.75C13.5858 10.75 13.25 10.4142 13.25 10V7.81055L10.0303 11.0303C9.73738 11.3232 9.26262 11.3232 8.96973 11.0303C8.67683 10.7374 8.67683 10.2626 8.96973 9.96973L12.1895 6.75H10C9.58579 6.75 9.25 6.41421 9.25 6C9.25 5.58579 9.58579 5.25 10 5.25H14Z", fill: "currentColor", key: "zaqlif" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-window-maximize.mjs
var _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
function WindowMaximize_For_1_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "path");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function WindowMaximize_For_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "circle");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function WindowMaximize_For_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "rect");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function WindowMaximize_For_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "line");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function WindowMaximize_For_1_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "polyline");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function WindowMaximize_For_1_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "polygon");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function WindowMaximize_For_1_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "ellipse");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function WindowMaximize_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, WindowMaximize_For_1_Case_0_Template, 1, 9, ":svg:path")(1, WindowMaximize_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, WindowMaximize_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, WindowMaximize_For_1_Case_3_Template, 1, 7, ":svg:line")(4, WindowMaximize_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, WindowMaximize_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, WindowMaximize_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
  }
  if (rf & 2) {
    let tmp_10_0;
    const node_r1 = ctx.$implicit;
    ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
  }
}
var WindowMaximize = class _WindowMaximize extends CoreIcon {
  constructor() {
    super();
    this._icon = C2;
  }
  static ɵfac = function WindowMaximize_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WindowMaximize)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _WindowMaximize,
    selectors: [["svg", "data-p-icon", "window-maximize"]],
    features: [ɵɵInheritDefinitionFeature],
    decls: 2,
    vars: 0,
    template: function WindowMaximize_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, WindowMaximize_For_1_Template, 7, 1, null, null, _forTrack0);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowMaximize, [{
    type: Component,
    args: [{
      selector: 'svg[data-p-icon="window-maximize"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/@primeicons/core/dist/esm/icons/window-minimize.mjs
var C3 = { name: "window-minimize", meta: { tags: ["window-minimize", "shrink", "small-screen", "collapse", "decrease-size"] }, svg: { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" }, nodes: [["path", { d: "M6 12.25C6.9665 12.25 7.75 13.0335 7.75 14V17C7.75 17.9665 6.9665 18.75 6 18.75H3C2.0335 18.75 1.25 17.9665 1.25 17V14C1.25 13.0335 2.0335 12.25 3 12.25H6ZM16 1.25C17.5142 1.25 18.75 2.48579 18.75 4V16C18.75 17.5142 17.5142 18.75 16 18.75H10C9.58579 18.75 9.25 18.4142 9.25 18C9.25 17.5858 9.58579 17.25 10 17.25H16C16.6858 17.25 17.25 16.6858 17.25 16V4C17.25 3.31421 16.6858 2.75 16 2.75H4C3.31421 2.75 2.75 3.31421 2.75 4V10C2.75 10.4142 2.41421 10.75 2 10.75C1.58579 10.75 1.25 10.4142 1.25 10V4C1.25 2.48579 2.48579 1.25 4 1.25H16ZM3 13.75C2.86193 13.75 2.75 13.8619 2.75 14V17C2.75 17.1381 2.86193 17.25 3 17.25H6C6.13807 17.25 6.25 17.1381 6.25 17V14C6.25 13.8619 6.13807 13.75 6 13.75H3ZM13.4697 5.46973C13.7626 5.17683 14.2374 5.17683 14.5303 5.46973C14.8232 5.76262 14.8232 6.23738 14.5303 6.53027L11.3105 9.75H13.5C13.9142 9.75 14.25 10.0858 14.25 10.5C14.25 10.9142 13.9142 11.25 13.5 11.25H9.5C9.45462 11.25 9.41035 11.245 9.36719 11.2373C9.36165 11.2363 9.3561 11.2355 9.35059 11.2344C9.3372 11.2317 9.32464 11.2261 9.31152 11.2227C9.27828 11.214 9.24492 11.2057 9.21289 11.1924C9.18375 11.1803 9.15703 11.164 9.12988 11.1484C9.0732 11.116 9.01812 11.0787 8.96973 11.0303C8.921 10.9816 8.8831 10.9263 8.85059 10.8691C8.83512 10.842 8.81868 10.8153 8.80664 10.7861C8.78603 10.7361 8.77106 10.6844 8.76172 10.6318C8.75413 10.589 8.75 10.545 8.75 10.5V6.5C8.75 6.08579 9.08579 5.75 9.5 5.75C9.91421 5.75 10.25 6.08579 10.25 6.5V8.68945L13.4697 5.46973Z", fill: "currentColor", key: "2tiixc" }]] };

// node_modules/@primeicons/angular/fesm2022/primeicons-angular-window-minimize.mjs
var _forTrack02 = ($index, $item) => $item[1]["key"] || $index;
function WindowMinimize_For_1_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "path");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function WindowMinimize_For_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "circle");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function WindowMinimize_For_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "rect");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function WindowMinimize_For_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "line");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function WindowMinimize_For_1_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "polyline");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function WindowMinimize_For_1_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "polygon");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function WindowMinimize_For_1_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵdomElement(0, "ellipse");
  }
  if (rf & 2) {
    const node_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
  }
}
function WindowMinimize_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, WindowMinimize_For_1_Case_0_Template, 1, 9, ":svg:path")(1, WindowMinimize_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, WindowMinimize_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, WindowMinimize_For_1_Case_3_Template, 1, 7, ":svg:line")(4, WindowMinimize_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, WindowMinimize_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, WindowMinimize_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
  }
  if (rf & 2) {
    let tmp_10_0;
    const node_r1 = ctx.$implicit;
    ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
  }
}
var WindowMinimize = class _WindowMinimize extends CoreIcon {
  constructor() {
    super();
    this._icon = C3;
  }
  static ɵfac = function WindowMinimize_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WindowMinimize)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _WindowMinimize,
    selectors: [["svg", "data-p-icon", "window-minimize"]],
    features: [ɵɵInheritDefinitionFeature],
    decls: 2,
    vars: 0,
    template: function WindowMinimize_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, WindowMinimize_For_1_Template, 7, 1, null, null, _forTrack02);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowMinimize, [{
    type: Component,
    args: [{
      selector: 'svg[data-p-icon="window-minimize"]',
      standalone: true,
      template: ICON_TEMPLATE
    }]
  }], () => [], null);
})();

// node_modules/primeng/fesm2022/primeng-utils.mjs
function ZIndexUtils() {
  let zIndexes = [];
  const generateZIndex = (key, baseZIndex) => {
    let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : { key, value: baseZIndex };
    let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 2;
    zIndexes.push({ key, value: newZIndex });
    return newZIndex;
  };
  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };
  const getCurrentZIndex = () => {
    return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
  };
  const getZIndex = (el) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, baseZIndex));
      }
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: () => getCurrentZIndex(),
    generateZIndex,
    revertZIndex
  };
}
var zindexutils = ZIndexUtils();

// node_modules/@primeuix/styles/dist/dialog/index.mjs
var style = "\n    .p-dialog {\n        max-height: 90%;\n        transform: scale(1);\n        border-radius: dt('dialog.border.radius');\n        box-shadow: dt('dialog.shadow');\n        background: dt('dialog.background');\n        border: 1px solid dt('dialog.border.color');\n        color: dt('dialog.color');\n        will-change: transform;\n    }\n\n    .p-dialog-content {\n        overflow-y: auto;\n        padding: dt('dialog.content.padding');\n        flex-grow: 1;\n    }\n\n    .p-dialog-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        flex-shrink: 0;\n        padding: dt('dialog.header.padding');\n    }\n\n    .p-dialog-title {\n        font-weight: dt('dialog.title.font.weight');\n        font-size: dt('dialog.title.font.size');\n    }\n\n    .p-dialog-footer {\n        flex-shrink: 0;\n        padding: dt('dialog.footer.padding');\n        display: flex;\n        justify-content: flex-end;\n        gap: dt('dialog.footer.gap');\n    }\n\n    .p-dialog-header-actions {\n        display: flex;\n        align-items: center;\n        gap: dt('dialog.header.gap');\n    }\n\n    .p-dialog-top .p-dialog,\n    .p-dialog-bottom .p-dialog,\n    .p-dialog-left .p-dialog,\n    .p-dialog-right .p-dialog,\n    .p-dialog-topleft .p-dialog,\n    .p-dialog-topright .p-dialog,\n    .p-dialog-bottomleft .p-dialog,\n    .p-dialog-bottomright .p-dialog {\n        margin: 1rem;\n    }\n\n    .p-dialog-maximized {\n        width: 100vw !important;\n        height: 100vh !important;\n        top: 0px !important;\n        left: 0px !important;\n        max-height: 100%;\n        height: 100%;\n        border-radius: 0;\n    }\n\n    .p-dialog .p-resizable-handle {\n        position: absolute;\n        font-size: 0.1px;\n        display: block;\n        cursor: se-resize;\n        width: 12px;\n        height: 12px;\n        right: 1px;\n        bottom: 1px;\n    }\n\n    .p-dialog-enter-active {\n        animation: p-animate-dialog-enter 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    .p-dialog-leave-active {\n        animation: p-animate-dialog-leave 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    @keyframes p-animate-dialog-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n\n    @keyframes p-animate-dialog-leave {\n        to {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-dialog.mjs
var _c0 = ["header"];
var _c1 = ["content"];
var _c2 = ["footer"];
var _c3 = ["closeicon"];
var _c4 = ["maximizeicon"];
var _c5 = ["minimizeicon"];
var _c6 = ["headless"];
var _c7 = ["titlebar"];
var _c8 = ["*", [["p-footer"]]];
var _c9 = ["*", "p-footer"];
function Dialog_Conditional_0_Conditional_1_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dialog_Conditional_0_Conditional_1_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headlessTemplate());
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12);
    ɵɵlistener("mousedown", function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_0_Template_div_mousedown_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.initResize($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.cx("resizeHandle"));
    ɵɵstyleProp("z-index", 90);
    ɵɵproperty("pBind", ctx_r1.ptm("resizeHandle"));
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r1.cx("title"));
    ɵɵproperty("id", ctx_r1.ariaLabelledBy())("pBind", ctx_r1.ptm("title"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.header());
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵclassMap(ctx_r1.toggleIcon());
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 19);
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 20);
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Conditional_2_Conditional_0_Template, 1, 0, ":svg:svg", 19);
    ɵɵconditionalCreate(1, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Conditional_2_Conditional_1_Template, 1, 0, ":svg:svg", 20);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵconditional(ctx_r1.showMaximizeSvg() ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showMinimizeSvg() ? 1 : -1);
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Conditional_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Conditional_3_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.maximizeIconTemplate());
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.minimizeIconTemplate());
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r1.maximize());
    })("keydown.enter", function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Template_button_keydown_enter_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r1.maximize());
    });
    ɵɵconditionalCreate(1, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Conditional_1_Template, 1, 2, "span", 18);
    ɵɵconditionalCreate(2, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Conditional_2_Template, 2, 2);
    ɵɵconditionalCreate(3, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Conditional_3_Template, 1, 1, "ng-container");
    ɵɵconditionalCreate(4, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Conditional_4_Template, 1, 1, "ng-container");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r1.cx("pcMaximizeButton"));
    ɵɵproperty("pButton", ctx_r1.maximizeButtonProps())("tabindex", ctx_r1.maximizeButtonTabindex())("pButtonPT", ctx_r1.ptm("pcMaximizeButton"))("pButtonUnstyled", ctx_r1.unstyled());
    ɵɵattribute("aria-label", ctx_r1.maximizeButtonAriaLabel())("data-pc-group-section", "headericon");
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showToggleIcon() ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showDefaultMaximizeIcon() ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showMaximizeIconTemplate() ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showMinimizeIconTemplate() ? 4 : -1);
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_6_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(7);
    ɵɵclassMap(ctx_r1.closeIcon());
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_6_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 21);
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_6_Conditional_1_Conditional_0_Template, 1, 2, "span", 18)(1, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_6_Conditional_1_Conditional_1_Template, 1, 0, ":svg:svg", 21);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵconditional(ctx_r1.closeIcon() ? 0 : 1);
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_6_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_6_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.closeIconTemplate());
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_6_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r1.close($event));
    })("keydown.enter", function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_6_Template_button_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r1.close($event));
    });
    ɵɵconditionalCreate(1, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_6_Conditional_1_Template, 2, 1);
    ɵɵconditionalCreate(2, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_6_Conditional_2_Template, 1, 1, "ng-container");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r1.cx("pcCloseButton"));
    ɵɵproperty("pButton", ctx_r1.closeButtonProps())("tabindex", ctx_r1.closeTabindex())("pButtonPT", ctx_r1.ptm("pcCloseButton"))("pButtonUnstyled", ctx_r1.unstyled());
    ɵɵattribute("aria-label", ctx_r1.closeAriaLabel())("data-pc-group-section", "headericon");
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showDefaultCloseIcon ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.closeIconTemplate() ? 2 : -1);
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12, 2);
    ɵɵlistener("mousedown", function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Template_div_mousedown_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.initDrag($event));
    });
    ɵɵconditionalCreate(2, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_2_Template, 2, 5, "span", 13);
    ɵɵtemplate(3, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_ng_container_3_Template, 1, 0, "ng-container", 14);
    ɵɵelementStart(4, "div", 11);
    ɵɵconditionalCreate(5, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_5_Template, 5, 12, "button", 15);
    ɵɵconditionalCreate(6, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Conditional_6_Template, 3, 10, "button", 15);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.cx("header"));
    ɵɵproperty("pBind", ctx_r1.ptm("header"));
    ɵɵadvance(2);
    ɵɵconditional(!ctx_r1.headerTemplate() ? 2 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate())("ngTemplateOutletContext", ctx_r1.headerTemplateContext());
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("headerActions"));
    ɵɵproperty("pBind", ctx_r1.ptm("headerActions"));
    ɵɵadvance();
    ɵɵconditional(ctx_r1.maximizable() ? 5 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.closable() ? 6 : -1);
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_5_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate());
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11, 3);
    ɵɵprojection(2, 1);
    ɵɵtemplate(3, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_6_ng_container_3_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.cx("footer"));
    ɵɵproperty("pBind", ctx_r1.ptm("footer"));
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate());
  }
}
function Dialog_Conditional_0_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_0_Template, 1, 5, "div", 9);
    ɵɵconditionalCreate(1, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_1_Template, 7, 11, "div", 10);
    ɵɵelementStart(2, "div", 11, 1);
    ɵɵprojection(4);
    ɵɵconditionalCreate(5, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_5_Template, 1, 1, "ng-container");
    ɵɵelementEnd();
    ɵɵconditionalCreate(6, Dialog_Conditional_0_Conditional_1_Conditional_3_Conditional_6_Template, 4, 4, "div", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵconditional(ctx_r1.resizable() ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.showHeader() ? 1 : -1);
    ɵɵadvance();
    ɵɵstyleMap(ctx_r1.contentStyle());
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("content"), ctx_r1.contentStyleClass()));
    ɵɵproperty("pBind", ctx_r1.ptm("content"));
    ɵɵadvance(3);
    ɵɵconditional(ctx_r1.contentTemplate() ? 5 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.footerTemplate() ? 6 : -1);
  }
}
function Dialog_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7, 0);
    ɵɵlistener("pMotionOnBeforeEnter", function Dialog_Conditional_0_Conditional_1_Template_div_pMotionOnBeforeEnter_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onBeforeEnter($event));
    })("pMotionOnAfterEnter", function Dialog_Conditional_0_Conditional_1_Template_div_pMotionOnAfterEnter_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onAfterEnter($event));
    })("pMotionOnBeforeLeave", function Dialog_Conditional_0_Conditional_1_Template_div_pMotionOnBeforeLeave_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onBeforeLeave($event));
    })("pMotionOnAfterLeave", function Dialog_Conditional_0_Conditional_1_Template_div_pMotionOnAfterLeave_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onAfterLeave($event));
    });
    ɵɵconditionalCreate(2, Dialog_Conditional_0_Conditional_1_Conditional_2_Template, 1, 1, "ng-container")(3, Dialog_Conditional_0_Conditional_1_Conditional_3_Template, 7, 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵstyleMap(ctx_r1.sx("root"));
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass()));
    ɵɵproperty("pBind", ctx_r1.ptm("root"))("pFocusTrapDisabled", ctx_r1.focusTrapDisabled())("pMotion", ctx_r1.visible())("pMotionAppear", true)("pMotionName", "p-dialog")("pMotionOptions", ctx_r1.computedMotionOptions());
    ɵɵattribute("role", ctx_r1.role())("aria-labelledby", ctx_r1.ariaLabelledBy())("aria-modal", true)("data-p", ctx_r1.dataP());
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.headlessTemplate() ? 2 : 3);
  }
}
function Dialog_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("pMotionOnAfterLeave", function Dialog_Conditional_0_Template_div_pMotionOnAfterLeave_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMaskAfterLeave());
    });
    ɵɵconditionalCreate(1, Dialog_Conditional_0_Conditional_1_Template, 4, 15, "div", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r1.sx("mask"));
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("mask"), ctx_r1.maskStyleClass()));
    ɵɵproperty("pBind", ctx_r1.ptm("mask"))("pMotion", ctx_r1.maskVisible)("pMotionAppear", true)("pMotionEnterActiveClass", ctx_r1.maskEnterActiveClass())("pMotionLeaveActiveClass", ctx_r1.maskLeaveActiveClass())("pMotionOptions", ctx_r1.computedMaskMotionOptions());
    ɵɵattribute("data-p-scrollblocker-active", ctx_r1.scrollBlockerActive())("data-p", ctx_r1.dataP());
    ɵɵadvance();
    ɵɵconditional(ctx_r1.renderDialog() ? 1 : -1);
  }
}
var inlineStyles = {
  mask: ({
    instance
  }) => {
    const position = instance.position();
    const modal = instance.modal();
    const maskStyle = instance.maskStyle();
    return __spreadValues({
      position: "fixed",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      display: "flex",
      justifyContent: position === "left" || position === "topleft" || position === "bottomleft" ? "flex-start" : position === "right" || position === "topright" || position === "bottomright" ? "flex-end" : "center",
      alignItems: position === "top" || position === "topleft" || position === "topright" ? "flex-start" : position === "bottom" || position === "bottomleft" || position === "bottomright" ? "flex-end" : "center",
      pointerEvents: modal ? "auto" : "none"
    }, maskStyle);
  },
  root: ({
    instance
  }) => {
    const style2 = instance.style();
    return __spreadValues({
      display: "flex",
      flexDirection: "column",
      pointerEvents: "auto"
    }, style2);
  }
};
var classes = {
  mask: ({
    instance
  }) => {
    const positions = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"];
    const position = instance.position();
    const pos = positions.find((item) => item === position);
    return ["p-dialog-mask", {
      "p-overlay-mask": instance.modal()
    }, pos ? `p-dialog-${pos}` : ""];
  },
  root: ({
    instance
  }) => ["p-dialog p-component", {
    "p-dialog-maximized": instance.maximizable() && instance.maximized()
  }],
  header: "p-dialog-header",
  title: "p-dialog-title",
  resizeHandle: "p-resizable-handle",
  headerActions: "p-dialog-header-actions",
  pcMaximizeButton: "p-dialog-maximize-button",
  pcCloseButton: "p-dialog-close-button",
  content: () => ["p-dialog-content"],
  footer: "p-dialog-footer"
};
var DialogStyle = class _DialogStyle extends BaseStyle {
  name = "dialog";
  style = style;
  classes = classes;
  inlineStyles = inlineStyles;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵDialogStyle_BaseFactory;
    return function DialogStyle_Factory(__ngFactoryType__) {
      return (ɵDialogStyle_BaseFactory || (ɵDialogStyle_BaseFactory = ɵɵgetInheritedFactory(_DialogStyle)))(__ngFactoryType__ || _DialogStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _DialogStyle,
    factory: _DialogStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogStyle, [{
    type: Injectable
  }], null, null);
})();
var DialogClasses;
(function(DialogClasses2) {
  DialogClasses2["mask"] = "p-dialog-mask";
  DialogClasses2["root"] = "p-dialog";
  DialogClasses2["header"] = "p-dialog-header";
  DialogClasses2["title"] = "p-dialog-title";
  DialogClasses2["headerActions"] = "p-dialog-header-actions";
  DialogClasses2["pcMaximizeButton"] = "p-dialog-maximize-button";
  DialogClasses2["pcCloseButton"] = "p-dialog-close-button";
  DialogClasses2["content"] = "p-dialog-content";
  DialogClasses2["footer"] = "p-dialog-footer";
})(DialogClasses || (DialogClasses = {}));
var DIALOG_INSTANCE = new InjectionToken("DIALOG_INSTANCE");
var Dialog = class _Dialog extends BaseComponent {
  componentName = "Dialog";
  hostName = input(
    "",
    ...ngDevMode ? [{
      debugName: "hostName"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  $pcDialog = inject(DIALOG_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  /**
   * Title text of the dialog.
   * @group Props
   */
  header = input(
    ...ngDevMode ? [void 0, {
      debugName: "header"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Enables dragging to change the position using header.
   * @group Props
   */
  draggable = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "draggable"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Enables resizing of the content.
   * @group Props
   */
  resizable = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "resizable"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Style of the content section.
   * @group Props
   */
  contentStyle = input(
    ...ngDevMode ? [void 0, {
      debugName: "contentStyle"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Style class of the content.
   * @group Props
   */
  contentStyleClass = input(
    ...ngDevMode ? [void 0, {
      debugName: "contentStyleClass"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Defines if background should be blocked when dialog is displayed.
   * @group Props
   */
  modal = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "modal"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Specifies if pressing escape key should hide the dialog.
   * @group Props
   */
  closeOnEscape = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "closeOnEscape"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Specifies if clicking the modal background should hide the dialog.
   * @group Props
   */
  dismissableMask = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "dismissableMask"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * When enabled dialog is displayed in RTL direction.
   * @group Props
   */
  rtl = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "rtl"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  closable = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "closable"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Object literal to define widths per screen size.
   * @group Props
   */
  breakpoints = input(
    ...ngDevMode ? [void 0, {
      debugName: "breakpoints"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass = input(
    ...ngDevMode ? [void 0, {
      debugName: "styleClass"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Style class of the mask.
   * @group Props
   */
  maskStyleClass = input(
    ...ngDevMode ? [void 0, {
      debugName: "maskStyleClass"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Style of the mask.
   * @group Props
   */
  maskStyle = input(
    ...ngDevMode ? [void 0, {
      debugName: "maskStyle"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Whether to show the header or not.
   * @group Props
   */
  showHeader = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "showHeader"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Whether background scroll should be blocked when dialog is visible.
   * @group Props
   */
  blockScroll = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "blockScroll"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "autoZIndex"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = input(0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "baseZIndex"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  /**
   * Minimum value for the left coordinate of dialog in dragging.
   * @group Props
   */
  minX = input(0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "minX"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  /**
   * Minimum value for the top coordinate of dialog in dragging.
   * @group Props
   */
  minY = input(0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "minY"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  /**
   * When enabled, first focusable element receives focus on show.
   * @group Props
   */
  focusOnShow = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "focusOnShow"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Whether the dialog can be displayed full screen.
   * @group Props
   */
  maximizable = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "maximizable"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Keeps dialog in the viewport.
   * @group Props
   */
  keepInViewport = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "keepInViewport"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * When enabled, can only focus on elements inside the dialog.
   * @group Props
   */
  focusTrap = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "focusTrap"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * The motion options for the mask.
   * @group Props
   */
  maskMotionOptions = input(
    void 0,
    ...ngDevMode ? [{
      debugName: "maskMotionOptions"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  computedMaskMotionOptions = computed(
    () => {
      return __spreadValues(__spreadValues({}, this.ptm("maskMotion")), this.maskMotionOptions());
    },
    ...ngDevMode ? [{
      debugName: "computedMaskMotionOptions"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  maskEnterActiveClass = computed(
    () => this.modal() ? "p-overlay-mask-enter-active" : "",
    ...ngDevMode ? [{
      debugName: "maskEnterActiveClass"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  maskLeaveActiveClass = computed(
    () => this.modal() ? "p-overlay-mask-leave-active" : "",
    ...ngDevMode ? [{
      debugName: "maskLeaveActiveClass"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * The motion options.
   * @group Props
   */
  motionOptions = input(
    void 0,
    ...ngDevMode ? [{
      debugName: "motionOptions"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  computedMotionOptions = computed(
    () => {
      return __spreadValues(__spreadValues({}, this.ptm("motion")), this.motionOptions());
    },
    ...ngDevMode ? [{
      debugName: "computedMotionOptions"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Name of the close icon.
   * @group Props
   */
  closeIcon = input(
    ...ngDevMode ? [void 0, {
      debugName: "closeIcon"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Defines a string that labels the close button for accessibility.
   * @group Props
   */
  closeAriaLabel = input(
    ...ngDevMode ? [void 0, {
      debugName: "closeAriaLabel"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Index of the close button in tabbing order.
   * @group Props
   */
  closeTabindex = input(
    "0",
    ...ngDevMode ? [{
      debugName: "closeTabindex"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Name of the minimize icon.
   * @group Props
   */
  minimizeIcon = input(
    ...ngDevMode ? [void 0, {
      debugName: "minimizeIcon"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Name of the maximize icon.
   * @group Props
   */
  maximizeIcon = input(
    ...ngDevMode ? [void 0, {
      debugName: "maximizeIcon"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Configuration object forwarded to the underlying button.
   * @group Props
   */
  closeButtonProps = input(
    {
      severity: "secondary",
      variant: "text",
      rounded: true
    },
    ...ngDevMode ? [{
      debugName: "closeButtonProps"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Configuration object forwarded to the underlying button.
   * @group Props
   */
  maximizeButtonProps = input(
    {
      severity: "secondary",
      variant: "text",
      rounded: true
    },
    ...ngDevMode ? [{
      debugName: "maximizeButtonProps"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Specifies the visibility of the dialog.
   * @group Props
   */
  visible = model(
    false,
    ...ngDevMode ? [{
      debugName: "visible"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Inline style of the component.
   * @group Props
   */
  style = input(
    ...ngDevMode ? [void 0, {
      debugName: "style"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Position of the dialog, options are "center", "top", "bottom", "left", "right", "topleft", "topright", "bottomleft" or "bottomright".
   * @group Props
   */
  position = input(
    ...ngDevMode ? [void 0, {
      debugName: "position"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Role attribute of html element.
   * @group Emits
   */
  role = input(
    "dialog",
    ...ngDevMode ? [{
      debugName: "role"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(
    void 0,
    ...ngDevMode ? [{
      debugName: "appendTo"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Callback to invoke when dialog is shown.
   * @group Emits
   */
  onShow = output();
  /**
   * Callback to invoke when dialog is hidden.
   * @group Emits
   */
  onHide = output();
  /**
   * Callback to invoke when dialog resizing is initiated.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onResizeInit = output();
  /**
   * Callback to invoke when dialog resizing is completed.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onResizeEnd = output();
  /**
   * Callback to invoke when dialog dragging is initiated.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onDragStart = output();
  /**
   * Callback to invoke when dialog dragging is completed.
   * @param {DragEvent} event - Drag event.
   * @group Emits
   */
  onDragEnd = output();
  /**
   * Callback to invoke when dialog maximized or unmaximized.
   * @group Emits
   */
  onMaximize = output();
  headerViewChild = viewChild(
    "titlebar",
    ...ngDevMode ? [{
      debugName: "headerViewChild"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  contentViewChild = viewChild(
    "content",
    ...ngDevMode ? [{
      debugName: "contentViewChild"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  footerViewChild = viewChild(
    "footer",
    ...ngDevMode ? [{
      debugName: "footerViewChild"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Custom header template.
   * @group Templates
   */
  headerTemplate = contentChild("header", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "headerTemplate"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  /**
   * Custom content template.
   * @group Templates
   */
  contentTemplate = contentChild("content", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "contentTemplate"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  /**
   * Custom footer template.
   * @group Templates
   */
  footerTemplate = contentChild("footer", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "footerTemplate"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  /**
   * Custom close icon template.
   * @group Templates
   */
  closeIconTemplate = contentChild("closeicon", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "closeIconTemplate"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  /**
   * Custom maximize icon template.
   * @group Templates
   */
  maximizeIconTemplate = contentChild("maximizeicon", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "maximizeIconTemplate"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  /**
   * Custom minimize icon template.
   * @group Templates
   */
  minimizeIconTemplate = contentChild("minimizeicon", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "minimizeIconTemplate"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  /**
   * Custom headless template.
   * @group Templates
   */
  headlessTemplate = contentChild("headless", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "headlessTemplate"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  $appendTo = computed(
    () => this.appendTo() || this.config.overlayAppendTo(),
    ...ngDevMode ? [{
      debugName: "$appendTo"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  renderMask = signal(
    false,
    ...ngDevMode ? [{
      debugName: "renderMask"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  renderDialog = signal(
    false,
    ...ngDevMode ? [{
      debugName: "renderDialog"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  maskVisible;
  container = signal(
    null,
    ...ngDevMode ? [{
      debugName: "container"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  wrapper;
  dragging;
  ariaId = s("pn_id_") + "_header";
  ariaLabelledBy = computed(
    () => this.header() !== null ? this.ariaId : null,
    ...ngDevMode ? [{
      debugName: "ariaLabelledBy"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  headerTemplateContext = computed(
    () => ({
      ariaLabelledBy: this.ariaLabelledBy()
    }),
    ...ngDevMode ? [{
      debugName: "headerTemplateContext"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  documentDragListener;
  documentDragEndListener;
  resizing;
  documentResizeListener;
  documentResizeEndListener;
  documentEscapeListener;
  maskClickListener;
  lastPageX;
  lastPageY;
  preventVisibleChangePropagation;
  maximized = signal(
    false,
    ...ngDevMode ? [{
      debugName: "maximized"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  preMaximizeContentHeight;
  preMaximizeContainerWidth;
  preMaximizeContainerHeight;
  preMaximizePageX;
  preMaximizePageY;
  id = s("pn_id_");
  _style = {};
  originalStyle;
  styleElement = null;
  _componentStyle = inject(DialogStyle);
  overlayService = inject(OverlayService);
  zIndexForLayering;
  get maximizeLabel() {
    return this.translate(TranslationKeys.ARIA, "maximizeLabel");
  }
  get minimizeLabel() {
    return this.translate(TranslationKeys.ARIA, "minimizeLabel");
  }
  maximizeButtonAriaLabel = computed(
    () => this.maximized() ? this.minimizeLabel : this.maximizeLabel,
    ...ngDevMode ? [{
      debugName: "maximizeButtonAriaLabel"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  maximizeButtonTabindex = computed(
    () => this.maximizable() ? "0" : "-1",
    ...ngDevMode ? [{
      debugName: "maximizeButtonTabindex"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  toggleIcon = computed(
    () => this.maximized() ? this.minimizeIcon() : this.maximizeIcon(),
    ...ngDevMode ? [{
      debugName: "toggleIcon"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  showToggleIcon = computed(
    () => !!this.maximizeIcon() && !this.maximizeIconTemplate() && !this.minimizeIconTemplate(),
    ...ngDevMode ? [{
      debugName: "showToggleIcon"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  showDefaultMaximizeIcon = computed(
    () => !this.maximizeIcon(),
    ...ngDevMode ? [{
      debugName: "showDefaultMaximizeIcon"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  showMaximizeSvg = computed(
    () => !this.maximized() && !this.maximizeIconTemplate(),
    ...ngDevMode ? [{
      debugName: "showMaximizeSvg"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  showMinimizeSvg = computed(
    () => this.maximized() && !this.minimizeIconTemplate(),
    ...ngDevMode ? [{
      debugName: "showMinimizeSvg"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  showMaximizeIconTemplate = computed(
    () => !this.maximized() && !!this.maximizeIconTemplate(),
    ...ngDevMode ? [{
      debugName: "showMaximizeIconTemplate"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  showMinimizeIconTemplate = computed(
    () => this.maximized() && !!this.minimizeIconTemplate(),
    ...ngDevMode ? [{
      debugName: "showMinimizeIconTemplate"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  showDefaultCloseIcon = computed(
    () => !this.closeIconTemplate(),
    ...ngDevMode ? [{
      debugName: "showDefaultCloseIcon"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  scrollBlockerActive = computed(
    () => this.modal() || this.blockScroll(),
    ...ngDevMode ? [{
      debugName: "scrollBlockerActive"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  focusTrapDisabled = computed(
    () => this.focusTrap() === false,
    ...ngDevMode ? [{
      debugName: "focusTrapDisabled"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    super();
    effect(() => {
      const isVisible = this.visible();
      untracked(() => {
        if (isVisible && !this.maskVisible) {
          this.maskVisible = true;
          this.renderMask.set(true);
          this.renderDialog.set(true);
        }
      });
    });
  }
  onInit() {
    if (this.breakpoints()) {
      this.createStyle();
    }
  }
  _focus(focusParentElement) {
    if (focusParentElement) {
      let _focusableElements = DomHandler.getFocusableElements(focusParentElement);
      if (_focusableElements && _focusableElements.length > 0) {
        _focusableElements[0].focus();
        return true;
      }
    }
    return false;
  }
  focus(focusParentElement) {
    const element = focusParentElement ?? this.contentViewChild()?.nativeElement;
    let focused = this._focus(element);
    if (!focused) {
      focused = this._focus(this.footerViewChild()?.nativeElement);
      if (!focused) {
        focused = this._focus(this.headerViewChild()?.nativeElement);
        if (!focused) {
          this._focus(this.contentViewChild()?.nativeElement);
        }
      }
    }
  }
  close(event) {
    this.visible.set(false);
    event.preventDefault();
  }
  enableModality() {
    this.maskClickListener = this.renderer.listen(this.wrapper, "mousedown", (event) => {
      if (this.wrapper && this.wrapper.isSameNode(event.target)) {
        if (this.closable() && this.dismissableMask()) {
          this.close(event);
        } else if (this.focusTrap()) {
          event.preventDefault();
        }
      }
    });
    if (this.modal()) {
      blockBodyScroll();
    }
  }
  disableModality() {
    if (this.wrapper) {
      this.unbindMaskClickListener();
      const scrollBlockers = document.querySelectorAll('[data-p-scrollblocker-active="true"]');
      if (this.modal() && scrollBlockers && scrollBlockers.length == 1) {
        unblockBodyScroll();
      }
      if (!this.cd.destroyed) {
        this.cd.detectChanges();
      }
    }
  }
  maximize() {
    this.maximized.update((v) => !v);
    if (!this.modal() && !this.blockScroll()) {
      if (this.maximized()) {
        blockBodyScroll();
      } else {
        unblockBodyScroll();
      }
    }
    this.onMaximize.emit({
      maximized: this.maximized()
    });
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  moveOnTop() {
    if (this.autoZIndex()) {
      zindexutils.set("modal", this.container(), this.baseZIndex() + this.config.zIndex.modal);
      this.wrapper.style.zIndex = String(parseInt(this.container().style.zIndex, 10) - 1);
    } else {
      this.zIndexForLayering = zindexutils.generateZIndex("modal", (this.baseZIndex() ?? 0) + this.config.zIndex.modal);
    }
  }
  createStyle() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.styleElement && !this.$unstyled()) {
        const styleElement = this.renderer.createElement("style");
        de(styleElement, "nonce", this.config?.csp()?.nonce);
        this.renderer.appendChild(this.document.head, styleElement);
        let innerHTML = "";
        for (let breakpoint in this.breakpoints()) {
          innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints()[breakpoint]} !important;
                            }
                        }
                    `;
        }
        this.renderer.setProperty(styleElement, "innerHTML", innerHTML);
        de(styleElement, "nonce", this.config?.csp()?.nonce);
        this.styleElement = styleElement;
      }
    }
  }
  initDrag(event) {
    const target = event.target;
    const closestDiv = target.closest("div");
    if (closestDiv?.getAttribute("data-pc-section") === "headeractions") {
      return;
    }
    if (this.draggable()) {
      this.dragging = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      this.container().style.margin = "0";
      this.document.body.setAttribute("data-p-unselectable-text", "true");
      !this.$unstyled() && L(this.document.body, {
        "user-select": "none"
      });
      this.onDragStart.emit(event);
    }
  }
  onDrag(event) {
    if (this.dragging && this.container()) {
      const containerWidth = C(this.container());
      const containerHeight = k(this.container());
      const deltaX = event.pageX - this.lastPageX;
      const deltaY = event.pageY - this.lastPageY;
      const offset = this.container().getBoundingClientRect();
      const containerComputedStyle = getComputedStyle(this.container());
      const leftMargin = parseFloat(containerComputedStyle.marginLeft);
      const topMargin = parseFloat(containerComputedStyle.marginTop);
      const leftPos = offset.left + deltaX - leftMargin;
      const topPos = offset.top + deltaY - topMargin;
      const viewport = h();
      this.container().style.position = "fixed";
      if (this.keepInViewport()) {
        if (leftPos >= this.minX() && leftPos + containerWidth < viewport.width) {
          this._style.left = `${leftPos}px`;
          this.lastPageX = event.pageX;
          this.container().style.left = `${leftPos}px`;
        }
        if (topPos >= this.minY() && topPos + containerHeight < viewport.height) {
          this._style.top = `${topPos}px`;
          this.lastPageY = event.pageY;
          this.container().style.top = `${topPos}px`;
        }
      } else {
        this.lastPageX = event.pageX;
        this.container().style.left = `${leftPos}px`;
        this.lastPageY = event.pageY;
        this.container().style.top = `${topPos}px`;
      }
      this.overlayService.emitParentDrag(this.container());
    }
  }
  endDrag(event) {
    if (this.dragging) {
      this.dragging = false;
      this.document.body.removeAttribute("data-p-unselectable-text");
      !this.$unstyled() && (this.document.body.style["user-select"] = "");
      this.cd.detectChanges();
      this.onDragEnd.emit(event);
    }
  }
  resetPosition() {
    this.container().style.position = "";
    this.container().style.left = "";
    this.container().style.top = "";
    this.container().style.margin = "";
  }
  //backward compatibility
  center() {
    this.resetPosition();
  }
  initResize(event) {
    if (this.resizable()) {
      this.resizing = true;
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
      this.document.body.setAttribute("data-p-unselectable-text", "true");
      !this.$unstyled() && L(this.document.body, {
        "user-select": "none"
      });
      this.onResizeInit.emit(event);
    }
  }
  onResize(event) {
    if (this.resizing) {
      let deltaX = event.pageX - this.lastPageX;
      let deltaY = event.pageY - this.lastPageY;
      let containerWidth = C(this.container());
      let containerHeight = k(this.container());
      let contentHeight = k(this.contentViewChild()?.nativeElement);
      let newWidth = containerWidth + deltaX;
      let newHeight = containerHeight + deltaY;
      let minWidth = this.container().style.minWidth;
      let minHeight = this.container().style.minHeight;
      let offset = this.container().getBoundingClientRect();
      let viewport = h();
      let hasBeenDragged = !parseInt(this.container().style.top) || !parseInt(this.container().style.left);
      if (hasBeenDragged) {
        newWidth += deltaX;
        newHeight += deltaY;
      }
      if ((!minWidth || newWidth > parseInt(minWidth)) && offset.left + newWidth < viewport.width) {
        this._style.width = newWidth + "px";
        this.container().style.width = this._style.width;
      }
      if ((!minHeight || newHeight > parseInt(minHeight)) && offset.top + newHeight < viewport.height) {
        this.contentViewChild().nativeElement.style.height = contentHeight + newHeight - containerHeight + "px";
        if (this._style.height) {
          this._style.height = newHeight + "px";
          this.container().style.height = this._style.height;
        }
      }
      this.lastPageX = event.pageX;
      this.lastPageY = event.pageY;
    }
  }
  resizeEnd(event) {
    if (this.resizing) {
      this.resizing = false;
      this.document.body.removeAttribute("data-p-unselectable-text");
      !this.$unstyled() && (this.document.body.style["user-select"] = "");
      this.onResizeEnd.emit(event);
    }
  }
  bindGlobalListeners() {
    if (this.draggable()) {
      this.bindDocumentDragListener();
      this.bindDocumentDragEndListener();
    }
    if (this.resizable()) {
      this.bindDocumentResizeListeners();
    }
    if (this.closeOnEscape() && this.closable()) {
      this.bindDocumentEscapeListener();
    }
  }
  unbindGlobalListeners() {
    this.unbindDocumentDragListener();
    this.unbindDocumentDragEndListener();
    this.unbindDocumentResizeListeners();
    this.unbindDocumentEscapeListener();
  }
  bindDocumentDragListener() {
    if (!this.documentDragListener) {
      this.documentDragListener = this.renderer.listen(this.document.defaultView, "mousemove", this.onDrag.bind(this));
    }
  }
  unbindDocumentDragListener() {
    if (this.documentDragListener) {
      this.documentDragListener();
      this.documentDragListener = null;
    }
  }
  bindDocumentDragEndListener() {
    if (!this.documentDragEndListener) {
      this.documentDragEndListener = this.renderer.listen(this.document.defaultView, "mouseup", this.endDrag.bind(this));
    }
  }
  unbindDocumentDragEndListener() {
    if (this.documentDragEndListener) {
      this.documentDragEndListener();
      this.documentDragEndListener = null;
    }
  }
  bindDocumentResizeListeners() {
    if (!this.documentResizeListener && !this.documentResizeEndListener) {
      this.documentResizeListener = this.renderer.listen(this.document.defaultView, "mousemove", this.onResize.bind(this));
      this.documentResizeEndListener = this.renderer.listen(this.document.defaultView, "mouseup", this.resizeEnd.bind(this));
    }
  }
  unbindDocumentResizeListeners() {
    if (this.documentResizeListener && this.documentResizeEndListener) {
      this.documentResizeListener();
      this.documentResizeEndListener();
      this.documentResizeListener = null;
      this.documentResizeEndListener = null;
    }
  }
  bindDocumentEscapeListener() {
    const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
    this.documentEscapeListener = this.renderer.listen(documentTarget, "keydown", (event) => {
      if (event.key == "Escape") {
        const container = this.container();
        if (!container) {
          return;
        }
        const currentZIndex = zindexutils.getCurrent();
        if (parseInt(container.style.zIndex) == currentZIndex || this.zIndexForLayering == currentZIndex) {
          this.close(event);
        }
      }
    });
  }
  unbindDocumentEscapeListener() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }
  appendContainer() {
    if (this.$appendTo() !== "self") {
      wt(this.document.body, this.wrapper);
    }
  }
  restoreAppend() {
    if (this.container() && this.$appendTo() !== "self") {
      this.renderer.appendChild(this.el.nativeElement, this.wrapper);
    }
  }
  onBeforeEnter(event) {
    this.container.set(event.element);
    this.wrapper = this.container()?.parentElement;
    this.$attrSelector && this.container()?.setAttribute(this.$attrSelector, "");
    this.appendContainer();
    this.moveOnTop();
    this.bindGlobalListeners();
    this.container()?.setAttribute(this.id, "");
    if (this.modal()) {
      this.enableModality();
    }
  }
  onAfterEnter() {
    if (this.focusOnShow()) {
      this.focus();
    }
    this.onShow.emit({});
  }
  onBeforeLeave() {
    if (this.modal()) {
      this.maskVisible = false;
    }
  }
  onAfterLeave() {
    this.onContainerDestroy();
    this.renderDialog.set(false);
    if (this.modal()) {
      this.renderMask.set(false);
    } else {
      this.maskVisible = false;
    }
    this.onHide.emit({});
  }
  onMaskAfterLeave() {
    if (!this.renderDialog()) {
      this.renderMask.set(false);
    }
  }
  onContainerDestroy() {
    this.unbindGlobalListeners();
    this.dragging = false;
    if (this.maximized()) {
      W(this.document.body, "p-overflow-hidden");
      this.document.body.style.removeProperty("--px-scrollbar-width");
      this.maximized.set(false);
    }
    if (this.modal()) {
      this.disableModality();
    }
    const remainingScrollBlockers = this.document.querySelectorAll('[data-p-scrollblocker-active="true"]');
    if (remainingScrollBlockers.length <= 1 && I(this.document.body, "p-overflow-hidden")) {
      W(this.document.body, "p-overflow-hidden");
    }
    if (this.container() && this.autoZIndex()) {
      zindexutils.clear(this.container());
    }
    if (this.zIndexForLayering) {
      zindexutils.revertZIndex(this.zIndexForLayering);
    }
    this.container.set(null);
    this.wrapper = null;
    this._style = this.originalStyle ? __spreadValues({}, this.originalStyle) : {};
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  onDestroy() {
    if (this.container()) {
      this.restoreAppend();
      this.onContainerDestroy();
    }
    this.destroyStyle();
  }
  dataP = computed(
    () => this.cn({
      maximized: this.maximized(),
      modal: this.modal()
    }),
    ...ngDevMode ? [{
      debugName: "dataP"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  static ɵfac = function Dialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dialog)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Dialog,
    selectors: [["p-dialog"]],
    contentQueries: function Dialog_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuerySignal(dirIndex, ctx.headerTemplate, _c0, 4)(dirIndex, ctx.contentTemplate, _c1, 4)(dirIndex, ctx.footerTemplate, _c2, 4)(dirIndex, ctx.closeIconTemplate, _c3, 4)(dirIndex, ctx.maximizeIconTemplate, _c4, 4)(dirIndex, ctx.minimizeIconTemplate, _c5, 4)(dirIndex, ctx.headlessTemplate, _c6, 4);
      }
      if (rf & 2) {
        ɵɵqueryAdvance(7);
      }
    },
    viewQuery: function Dialog_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuerySignal(ctx.headerViewChild, _c7, 5)(ctx.contentViewChild, _c1, 5)(ctx.footerViewChild, _c2, 5);
      }
      if (rf & 2) {
        ɵɵqueryAdvance(3);
      }
    },
    inputs: {
      hostName: [1, "hostName"],
      header: [1, "header"],
      draggable: [1, "draggable"],
      resizable: [1, "resizable"],
      contentStyle: [1, "contentStyle"],
      contentStyleClass: [1, "contentStyleClass"],
      modal: [1, "modal"],
      closeOnEscape: [1, "closeOnEscape"],
      dismissableMask: [1, "dismissableMask"],
      rtl: [1, "rtl"],
      closable: [1, "closable"],
      breakpoints: [1, "breakpoints"],
      styleClass: [1, "styleClass"],
      maskStyleClass: [1, "maskStyleClass"],
      maskStyle: [1, "maskStyle"],
      showHeader: [1, "showHeader"],
      blockScroll: [1, "blockScroll"],
      autoZIndex: [1, "autoZIndex"],
      baseZIndex: [1, "baseZIndex"],
      minX: [1, "minX"],
      minY: [1, "minY"],
      focusOnShow: [1, "focusOnShow"],
      maximizable: [1, "maximizable"],
      keepInViewport: [1, "keepInViewport"],
      focusTrap: [1, "focusTrap"],
      maskMotionOptions: [1, "maskMotionOptions"],
      motionOptions: [1, "motionOptions"],
      closeIcon: [1, "closeIcon"],
      closeAriaLabel: [1, "closeAriaLabel"],
      closeTabindex: [1, "closeTabindex"],
      minimizeIcon: [1, "minimizeIcon"],
      maximizeIcon: [1, "maximizeIcon"],
      closeButtonProps: [1, "closeButtonProps"],
      maximizeButtonProps: [1, "maximizeButtonProps"],
      visible: [1, "visible"],
      style: [1, "style"],
      position: [1, "position"],
      role: [1, "role"],
      appendTo: [1, "appendTo"]
    },
    outputs: {
      visible: "visibleChange",
      onShow: "onShow",
      onHide: "onHide",
      onResizeInit: "onResizeInit",
      onResizeEnd: "onResizeEnd",
      onDragStart: "onDragStart",
      onDragEnd: "onDragEnd",
      onMaximize: "onMaximize"
    },
    features: [ɵɵProvidersFeature([DialogStyle, {
      provide: DIALOG_INSTANCE,
      useExisting: _Dialog
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Dialog
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c9,
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["content", ""], ["titlebar", ""], ["footer", ""], [3, "class", "style", "pBind", "pMotion", "pMotionAppear", "pMotionEnterActiveClass", "pMotionLeaveActiveClass", "pMotionOptions"], [3, "pMotionOnAfterLeave", "pBind", "pMotion", "pMotionAppear", "pMotionEnterActiveClass", "pMotionLeaveActiveClass", "pMotionOptions"], ["pFocusTrap", "", 3, "class", "style", "pBind", "pFocusTrapDisabled", "pMotion", "pMotionAppear", "pMotionName", "pMotionOptions"], ["pFocusTrap", "", 3, "pMotionOnBeforeEnter", "pMotionOnAfterEnter", "pMotionOnBeforeLeave", "pMotionOnAfterLeave", "pBind", "pFocusTrapDisabled", "pMotion", "pMotionAppear", "pMotionName", "pMotionOptions"], [4, "ngTemplateOutlet"], [3, "class", "pBind", "z-index"], [3, "class", "pBind"], [3, "pBind"], [3, "mousedown", "pBind"], [3, "id", "class", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", "iconOnly", "", 3, "pButton", "class", "tabindex", "pButtonPT", "pButtonUnstyled"], [3, "id", "pBind"], ["type", "button", "iconOnly", "", 3, "click", "keydown.enter", "pButton", "tabindex", "pButtonPT", "pButtonUnstyled"], [3, "class"], ["data-p-icon", "window-maximize"], ["data-p-icon", "window-minimize"], ["data-p-icon", "times"]],
    template: function Dialog_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c8);
        ɵɵconditionalCreate(0, Dialog_Conditional_0_Template, 2, 13, "div", 4);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.renderMask() ? 0 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, ButtonDirective, FocusTrap, Times, WindowMaximize, WindowMinimize, SharedModule, Bind, MotionModule, MotionDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Component,
    args: [{
      selector: "p-dialog",
      standalone: true,
      imports: [NgTemplateOutlet, ButtonDirective, FocusTrap, Times, WindowMaximize, WindowMinimize, SharedModule, Bind, MotionModule],
      template: `
        @if (renderMask()) {
            <div
                [class]="cn(cx('mask'), maskStyleClass())"
                [style]="sx('mask')"
                [pBind]="ptm('mask')"
                [pMotion]="maskVisible"
                [pMotionAppear]="true"
                [pMotionEnterActiveClass]="maskEnterActiveClass()"
                [pMotionLeaveActiveClass]="maskLeaveActiveClass()"
                [pMotionOptions]="computedMaskMotionOptions()"
                (pMotionOnAfterLeave)="onMaskAfterLeave()"
                [attr.data-p-scrollblocker-active]="scrollBlockerActive()"
                [attr.data-p]="dataP()"
            >
                @if (renderDialog()) {
                    <div
                        #container
                        [class]="cn(cx('root'), styleClass())"
                        [style]="sx('root')"
                        [pBind]="ptm('root')"
                        pFocusTrap
                        [pFocusTrapDisabled]="focusTrapDisabled()"
                        [pMotion]="visible()"
                        [pMotionAppear]="true"
                        [pMotionName]="'p-dialog'"
                        [pMotionOptions]="computedMotionOptions()"
                        (pMotionOnBeforeEnter)="onBeforeEnter($event)"
                        (pMotionOnAfterEnter)="onAfterEnter($event)"
                        (pMotionOnBeforeLeave)="onBeforeLeave($event)"
                        (pMotionOnAfterLeave)="onAfterLeave($event)"
                        [attr.role]="role()"
                        [attr.aria-labelledby]="ariaLabelledBy()"
                        [attr.aria-modal]="true"
                        [attr.data-p]="dataP()"
                    >
                        @if (headlessTemplate()) {
                            <ng-container *ngTemplateOutlet="headlessTemplate()"></ng-container>
                        } @else {
                            @if (resizable()) {
                                <div [class]="cx('resizeHandle')" [pBind]="ptm('resizeHandle')" [style.z-index]="90" (mousedown)="initResize($event)"></div>
                            }
                            @if (showHeader()) {
                                <div #titlebar [class]="cx('header')" [pBind]="ptm('header')" (mousedown)="initDrag($event)">
                                    @if (!headerTemplate()) {
                                        <span [id]="ariaLabelledBy()" [class]="cx('title')" [pBind]="ptm('title')">{{ header() }}</span>
                                    }
                                    <ng-container *ngTemplateOutlet="headerTemplate(); context: headerTemplateContext()"></ng-container>
                                    <div [class]="cx('headerActions')" [pBind]="ptm('headerActions')">
                                        @if (maximizable()) {
                                            <button
                                                type="button"
                                                iconOnly
                                                [pButton]="maximizeButtonProps()"
                                                [class]="cx('pcMaximizeButton')"
                                                [tabindex]="maximizeButtonTabindex()"
                                                [attr.aria-label]="maximizeButtonAriaLabel()"
                                                [attr.data-pc-group-section]="'headericon'"
                                                [pButtonPT]="ptm('pcMaximizeButton')"
                                                [pButtonUnstyled]="unstyled()"
                                                (click)="maximize()"
                                                (keydown.enter)="maximize()"
                                            >
                                                @if (showToggleIcon()) {
                                                    <span [class]="toggleIcon()"></span>
                                                }
                                                @if (showDefaultMaximizeIcon()) {
                                                    @if (showMaximizeSvg()) {
                                                        <svg data-p-icon="window-maximize" />
                                                    }
                                                    @if (showMinimizeSvg()) {
                                                        <svg data-p-icon="window-minimize" />
                                                    }
                                                }
                                                @if (showMaximizeIconTemplate()) {
                                                    <ng-container *ngTemplateOutlet="maximizeIconTemplate()"></ng-container>
                                                }
                                                @if (showMinimizeIconTemplate()) {
                                                    <ng-container *ngTemplateOutlet="minimizeIconTemplate()"></ng-container>
                                                }
                                            </button>
                                        }
                                        @if (closable()) {
                                            <button
                                                type="button"
                                                iconOnly
                                                [pButton]="closeButtonProps()"
                                                [class]="cx('pcCloseButton')"
                                                [tabindex]="closeTabindex()"
                                                [attr.aria-label]="closeAriaLabel()"
                                                [attr.data-pc-group-section]="'headericon'"
                                                [pButtonPT]="ptm('pcCloseButton')"
                                                [pButtonUnstyled]="unstyled()"
                                                (click)="close($event)"
                                                (keydown.enter)="close($event)"
                                            >
                                                @if (showDefaultCloseIcon) {
                                                    @if (closeIcon()) {
                                                        <span [class]="closeIcon()"></span>
                                                    } @else {
                                                        <svg data-p-icon="times" />
                                                    }
                                                }
                                                @if (closeIconTemplate()) {
                                                    <ng-container *ngTemplateOutlet="closeIconTemplate()"></ng-container>
                                                }
                                            </button>
                                        }
                                    </div>
                                </div>
                            }
                            <div #content [class]="cn(cx('content'), contentStyleClass())" [style]="contentStyle()" [pBind]="ptm('content')">
                                <ng-content></ng-content>
                                @if (contentTemplate()) {
                                    <ng-container *ngTemplateOutlet="contentTemplate()"></ng-container>
                                }
                            </div>
                            @if (footerTemplate()) {
                                <div #footer [class]="cx('footer')" [pBind]="ptm('footer')">
                                    <ng-content select="p-footer"></ng-content>
                                    <ng-container *ngTemplateOutlet="footerTemplate()"></ng-container>
                                </div>
                            }
                        }
                    </div>
                }
            </div>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [DialogStyle, {
        provide: DIALOG_INSTANCE,
        useExisting: Dialog
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Dialog
      }],
      hostDirectives: [Bind]
    }]
  }], () => [], {
    hostName: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "hostName",
        required: false
      }]
    }],
    header: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "header",
        required: false
      }]
    }],
    draggable: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "draggable",
        required: false
      }]
    }],
    resizable: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "resizable",
        required: false
      }]
    }],
    contentStyle: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "contentStyle",
        required: false
      }]
    }],
    contentStyleClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "contentStyleClass",
        required: false
      }]
    }],
    modal: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "modal",
        required: false
      }]
    }],
    closeOnEscape: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "closeOnEscape",
        required: false
      }]
    }],
    dismissableMask: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "dismissableMask",
        required: false
      }]
    }],
    rtl: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "rtl",
        required: false
      }]
    }],
    closable: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "closable",
        required: false
      }]
    }],
    breakpoints: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "breakpoints",
        required: false
      }]
    }],
    styleClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "styleClass",
        required: false
      }]
    }],
    maskStyleClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "maskStyleClass",
        required: false
      }]
    }],
    maskStyle: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "maskStyle",
        required: false
      }]
    }],
    showHeader: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "showHeader",
        required: false
      }]
    }],
    blockScroll: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "blockScroll",
        required: false
      }]
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "autoZIndex",
        required: false
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "baseZIndex",
        required: false
      }]
    }],
    minX: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "minX",
        required: false
      }]
    }],
    minY: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "minY",
        required: false
      }]
    }],
    focusOnShow: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "focusOnShow",
        required: false
      }]
    }],
    maximizable: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "maximizable",
        required: false
      }]
    }],
    keepInViewport: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "keepInViewport",
        required: false
      }]
    }],
    focusTrap: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "focusTrap",
        required: false
      }]
    }],
    maskMotionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "maskMotionOptions",
        required: false
      }]
    }],
    motionOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "motionOptions",
        required: false
      }]
    }],
    closeIcon: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "closeIcon",
        required: false
      }]
    }],
    closeAriaLabel: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "closeAriaLabel",
        required: false
      }]
    }],
    closeTabindex: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "closeTabindex",
        required: false
      }]
    }],
    minimizeIcon: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "minimizeIcon",
        required: false
      }]
    }],
    maximizeIcon: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "maximizeIcon",
        required: false
      }]
    }],
    closeButtonProps: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "closeButtonProps",
        required: false
      }]
    }],
    maximizeButtonProps: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "maximizeButtonProps",
        required: false
      }]
    }],
    visible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "visible",
        required: false
      }]
    }, {
      type: Output,
      args: ["visibleChange"]
    }],
    style: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "style",
        required: false
      }]
    }],
    position: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "position",
        required: false
      }]
    }],
    role: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "role",
        required: false
      }]
    }],
    appendTo: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    onShow: [{
      type: Output,
      args: ["onShow"]
    }],
    onHide: [{
      type: Output,
      args: ["onHide"]
    }],
    onResizeInit: [{
      type: Output,
      args: ["onResizeInit"]
    }],
    onResizeEnd: [{
      type: Output,
      args: ["onResizeEnd"]
    }],
    onDragStart: [{
      type: Output,
      args: ["onDragStart"]
    }],
    onDragEnd: [{
      type: Output,
      args: ["onDragEnd"]
    }],
    onMaximize: [{
      type: Output,
      args: ["onMaximize"]
    }],
    headerViewChild: [{
      type: ViewChild,
      args: ["titlebar", {
        isSignal: true
      }]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content", {
        isSignal: true
      }]
    }],
    footerViewChild: [{
      type: ViewChild,
      args: ["footer", {
        isSignal: true
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", __spreadProps(__spreadValues({}, {
        descendants: false
      }), {
        isSignal: true
      })]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", __spreadProps(__spreadValues({}, {
        descendants: false
      }), {
        isSignal: true
      })]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", __spreadProps(__spreadValues({}, {
        descendants: false
      }), {
        isSignal: true
      })]
    }],
    closeIconTemplate: [{
      type: ContentChild,
      args: ["closeicon", __spreadProps(__spreadValues({}, {
        descendants: false
      }), {
        isSignal: true
      })]
    }],
    maximizeIconTemplate: [{
      type: ContentChild,
      args: ["maximizeicon", __spreadProps(__spreadValues({}, {
        descendants: false
      }), {
        isSignal: true
      })]
    }],
    minimizeIconTemplate: [{
      type: ContentChild,
      args: ["minimizeicon", __spreadProps(__spreadValues({}, {
        descendants: false
      }), {
        isSignal: true
      })]
    }],
    headlessTemplate: [{
      type: ContentChild,
      args: ["headless", __spreadProps(__spreadValues({}, {
        descendants: false
      }), {
        isSignal: true
      })]
    }]
  });
})();
var DialogModule = class _DialogModule {
  static ɵfac = function DialogModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DialogModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DialogModule,
    imports: [Dialog, SharedModule],
    exports: [Dialog, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Dialog, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [Dialog, SharedModule],
      exports: [Dialog, SharedModule]
    }]
  }], null, null);
})();
export {
  Dialog,
  DialogClasses,
  DialogModule,
  DialogStyle
};
//# sourceMappingURL=primeng_dialog.js.map

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
  SharedModule
} from "./chunk-LZW7E2AV.js";
import "./chunk-EYMFUDBV.js";
import {
  NgTemplateOutlet
} from "./chunk-TZXUY4MK.js";
import "./chunk-EZXZ43RR.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  ViewEncapsulation,
  contentChild,
  inject,
  input,
  setClassMetadata,
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
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵtemplate
} from "./chunk-TSUBXBF2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// node_modules/@primeuix/styles/dist/toolbar/index.mjs
var style = "\n    .p-toolbar {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        flex-wrap: wrap;\n        padding: dt('toolbar.padding');\n        background: dt('toolbar.background');\n        border: 1px solid dt('toolbar.border.color');\n        color: dt('toolbar.color');\n        border-radius: dt('toolbar.border.radius');\n        gap: dt('toolbar.gap');\n    }\n\n    .p-toolbar-start,\n    .p-toolbar-center,\n    .p-toolbar-end {\n        display: flex;\n        align-items: center;\n    }\n";

// node_modules/primeng/fesm2022/primeng-toolbar.mjs
var _c0 = ["start"];
var _c1 = ["end"];
var _c2 = ["center"];
var _c3 = ["*"];
function Toolbar_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Toolbar_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, Toolbar_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("start"));
    ɵɵproperty("pBind", ctx_r0.ptm("start"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.startTemplate());
  }
}
function Toolbar_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Toolbar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, Toolbar_Conditional_2_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("center"));
    ɵɵproperty("pBind", ctx_r0.ptm("center"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.centerTemplate());
  }
}
function Toolbar_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Toolbar_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, Toolbar_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("end"));
    ɵɵproperty("pBind", ctx_r0.ptm("end"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.endTemplate());
  }
}
var classes = {
  root: () => ["p-toolbar p-component"],
  start: "p-toolbar-start",
  center: "p-toolbar-center",
  end: "p-toolbar-end"
};
var ToolbarStyle = class _ToolbarStyle extends BaseStyle {
  name = "toolbar";
  style = style;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵToolbarStyle_BaseFactory;
    return function ToolbarStyle_Factory(__ngFactoryType__) {
      return (ɵToolbarStyle_BaseFactory || (ɵToolbarStyle_BaseFactory = ɵɵgetInheritedFactory(_ToolbarStyle)))(__ngFactoryType__ || _ToolbarStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _ToolbarStyle,
    factory: _ToolbarStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarStyle, [{
    type: Injectable
  }], null, null);
})();
var ToolbarClasses;
(function(ToolbarClasses2) {
  ToolbarClasses2["root"] = "p-toolbar";
  ToolbarClasses2["start"] = "p-toolbar-start";
  ToolbarClasses2["center"] = "p-toolbar-center";
  ToolbarClasses2["end"] = "p-toolbar-end";
})(ToolbarClasses || (ToolbarClasses = {}));
var TOOLBAR_INSTANCE = new InjectionToken("TOOLBAR_INSTANCE");
var Toolbar = class _Toolbar extends BaseComponent {
  componentName = "Toolbar";
  $pcToolbar = inject(TOOLBAR_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabelledBy = input(
    ...ngDevMode ? [void 0, {
      debugName: "ariaLabelledBy"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  _componentStyle = inject(ToolbarStyle);
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  /**
   * Custom start template.
   * @group Templates
   */
  startTemplate = contentChild("start", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "startTemplate"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  /**
   * Custom end template.
   * @group Templates
   */
  endTemplate = contentChild("end", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "endTemplate"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  /**
   * Custom center template.
   * @group Templates
   */
  centerTemplate = contentChild("center", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "centerTemplate"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    descendants: false
  }));
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵToolbar_BaseFactory;
    return function Toolbar_Factory(__ngFactoryType__) {
      return (ɵToolbar_BaseFactory || (ɵToolbar_BaseFactory = ɵɵgetInheritedFactory(_Toolbar)))(__ngFactoryType__ || _Toolbar);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Toolbar,
    selectors: [["p-toolbar"]],
    contentQueries: function Toolbar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuerySignal(dirIndex, ctx.startTemplate, _c0, 4)(dirIndex, ctx.endTemplate, _c1, 4)(dirIndex, ctx.centerTemplate, _c2, 4);
      }
      if (rf & 2) {
        ɵɵqueryAdvance(3);
      }
    },
    hostAttrs: ["role", "toolbar"],
    hostVars: 3,
    hostBindings: function Toolbar_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-labelledby", ctx.ariaLabelledBy());
        ɵɵclassMap(ctx.cx("root"));
      }
    },
    inputs: {
      ariaLabelledBy: [1, "ariaLabelledBy"]
    },
    features: [ɵɵProvidersFeature([ToolbarStyle, {
      provide: TOOLBAR_INSTANCE,
      useExisting: _Toolbar
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Toolbar
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c3,
    decls: 4,
    vars: 3,
    consts: [[3, "class", "pBind"], [3, "pBind"], [4, "ngTemplateOutlet"]],
    template: function Toolbar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
        ɵɵconditionalCreate(1, Toolbar_Conditional_1_Template, 2, 4, "div", 0);
        ɵɵconditionalCreate(2, Toolbar_Conditional_2_Template, 2, 4, "div", 0);
        ɵɵconditionalCreate(3, Toolbar_Conditional_3_Template, 2, 4, "div", 0);
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵconditional(ctx.startTemplate() ? 1 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.centerTemplate() ? 2 : -1);
        ɵɵadvance();
        ɵɵconditional(ctx.endTemplate() ? 3 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, SharedModule, BindModule, Bind],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toolbar, [{
    type: Component,
    args: [{
      selector: "p-toolbar",
      standalone: true,
      imports: [NgTemplateOutlet, SharedModule, BindModule],
      template: `
        <ng-content></ng-content>
        @if (startTemplate()) {
            <div [class]="cx('start')" [pBind]="ptm('start')">
                <ng-container *ngTemplateOutlet="startTemplate()"></ng-container>
            </div>
        }
        @if (centerTemplate()) {
            <div [class]="cx('center')" [pBind]="ptm('center')">
                <ng-container *ngTemplateOutlet="centerTemplate()"></ng-container>
            </div>
        }
        @if (endTemplate()) {
            <div [class]="cx('end')" [pBind]="ptm('end')">
                <ng-container *ngTemplateOutlet="endTemplate()"></ng-container>
            </div>
        }
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ToolbarStyle, {
        provide: TOOLBAR_INSTANCE,
        useExisting: Toolbar
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Toolbar
      }],
      host: {
        "[class]": 'cx("root")',
        role: "toolbar",
        "[attr.aria-labelledby]": "ariaLabelledBy()"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    ariaLabelledBy: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ariaLabelledBy",
        required: false
      }]
    }],
    startTemplate: [{
      type: ContentChild,
      args: ["start", __spreadProps(__spreadValues({}, {
        descendants: false
      }), {
        isSignal: true
      })]
    }],
    endTemplate: [{
      type: ContentChild,
      args: ["end", __spreadProps(__spreadValues({}, {
        descendants: false
      }), {
        isSignal: true
      })]
    }],
    centerTemplate: [{
      type: ContentChild,
      args: ["center", __spreadProps(__spreadValues({}, {
        descendants: false
      }), {
        isSignal: true
      })]
    }]
  });
})();
var ToolbarModule = class _ToolbarModule {
  static ɵfac = function ToolbarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToolbarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ToolbarModule,
    imports: [Toolbar, SharedModule, BindModule],
    exports: [Toolbar, SharedModule, BindModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Toolbar, SharedModule, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarModule, [{
    type: NgModule,
    args: [{
      imports: [Toolbar, SharedModule, BindModule],
      exports: [Toolbar, SharedModule, BindModule]
    }]
  }], null, null);
})();
export {
  Toolbar,
  ToolbarClasses,
  ToolbarModule,
  ToolbarStyle
};
//# sourceMappingURL=primeng_toolbar.js.map
